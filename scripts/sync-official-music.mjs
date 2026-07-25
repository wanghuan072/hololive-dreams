import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const sourcePage = "https://www.hololive-dreams.com/en/music";
const outputDirectory = path.join(process.cwd(), "public", "images", "songs");
const dataPath = path.join(process.cwd(), "src", "data", "songs.json");
const assetLogPath = path.join(
  process.cwd(),
  "research",
  "flow-06-song-asset-sources.json",
);
const verifiedDate = "2026-07-24";

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

function textContent(value = "") {
  return decodeEntities(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 88);
}

function extractCreator(block, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = block.match(
    new RegExp(
      `<span[^>]+Music__item__label[^>]*>\\s*${escaped}:?\\s*<\\/span>\\s*<span[^>]+Music__item__value[^>]*>([\\s\\S]*?)<\\/span>`,
      "i",
    ),
  );
  return textContent(match?.[1]);
}

async function downloadWithLimit(items, concurrency = 8) {
  let cursor = 0;
  const failures = [];

  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      const item = items[index];

      try {
        const response = await fetch(item.downloadUrl, {
          headers: { "User-Agent": "Mozilla/5.0 hololive-dreams-reference-research" },
        });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const bytes = new Uint8Array(await response.arrayBuffer());
        await writeFile(path.join(outputDirectory, item.fileName), bytes);
        item.byteSize = bytes.byteLength;
        item.contentType = response.headers.get("content-type");
      } catch (error) {
        failures.push({
          title: item.title,
          url: item.downloadUrl,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return failures;
}

const response = await fetch(sourcePage, {
  headers: { "User-Agent": "Mozilla/5.0 hololive-dreams-reference-research" },
});

if (!response.ok) {
  throw new Error(`Official music page request failed: HTTP ${response.status}`);
}

const html = await response.text();
const coverHeadingIndex = html.lastIndexOf("Cover Songs");
const matches = [...html.matchAll(/<section class="Music__item"[\s\S]*?<\/section>/g)];

if (matches.length < 150) {
  throw new Error(`Expected at least 150 catalog entries, found ${matches.length}`);
}

const usedSlugs = new Map();
const assets = matches.map((match, index) => {
  const block = match[0];
  const title = textContent(
    block.match(
      /<h3[^>]+Music__item__title[^>]*>[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>\s*<\/h3>/i,
    )?.[1],
  );
  const performer = textContent(
    block.match(/<p[^>]+Music__item__unit[^>]*>([\s\S]*?)<\/p>/i)?.[1],
  );
  const originalImageUrl = decodeEntities(
    block.match(/<img[^>]+src="([^"]+)"[^>]*>/i)?.[1] ?? "",
  );
  const originalBaseUrl = originalImageUrl.split("?")[0];
  const type = (match.index ?? 0) > coverHeadingIndex ? "Cover" : "Original";

  if (!title || !performer || !originalBaseUrl) {
    throw new Error(`Incomplete official catalog item at index ${index}`);
  }

  const baseSlug = slugify(title) || `track-${index + 1}`;
  const duplicateNumber = (usedSlugs.get(baseSlug) ?? 0) + 1;
  usedSlugs.set(baseSlug, duplicateNumber);
  const uniqueSlug = duplicateNumber === 1 ? baseSlug : `${baseSlug}-${duplicateNumber}`;
  const fileName = `hololive-dreams-song-${uniqueSlug}.webp`;
  const downloadUrl = `${originalBaseUrl}?w=384&h=384&fit=crop&fm=webp`;

  return {
    id: index + 1,
    title,
    performer,
    type,
    lyricsBy: extractCreator(block, "Lyrics by"),
    musicBy: extractCreator(block, "Music by"),
    arrangementBy: extractCreator(block, "Arrangement by"),
    imageUrl: `/images/songs/${fileName}`,
    imageAlt: `${title} cover in the hololive Dreams music catalog`,
    evidenceSources: ["src-004", "src-flow06-001"],
    lastVerified: verifiedDate,
    sourcePage,
    originalImageUrl: originalBaseUrl,
    downloadUrl,
    fileName,
  };
});

await mkdir(outputDirectory, { recursive: true });
const failures = await downloadWithLimit(assets);
if (failures.length) {
  throw new Error(`Failed to download ${failures.length} cover images: ${JSON.stringify(failures)}`);
}

const songs = assets.map((asset) => ({
  id: asset.id,
  title: asset.title,
  performer: asset.performer,
  type: asset.type,
  lyricsBy: asset.lyricsBy,
  musicBy: asset.musicBy,
  arrangementBy: asset.arrangementBy,
  imageUrl: asset.imageUrl,
  imageAlt: asset.imageAlt,
  evidenceSources: asset.evidenceSources,
  lastVerified: asset.lastVerified,
  sourcePage: asset.sourcePage,
  originalImageUrl: asset.originalImageUrl,
}));

const assetLog = {
  metadata: {
    flow: "06-full-web-content-supplement",
    sourcePage,
    accessedAt: `${verifiedDate}T00:00:00+08:00`,
    recordCount: assets.length,
    usage: "Local cover thumbnails for the searchable /songs catalog",
  },
  assets: assets.map((asset) => ({
    title: asset.title,
    sourcePage,
    originalUrl: asset.originalImageUrl,
    downloadedUrl: asset.downloadUrl,
    localPath: `public/images/songs/${asset.fileName}`,
    publicPath: asset.imageUrl,
    alt: asset.imageAlt,
    byteSize: asset.byteSize,
    contentType: asset.contentType,
    status: "adopted",
  })),
};

await writeFile(dataPath, `${JSON.stringify(songs, null, 2)}\n`);
await writeFile(assetLogPath, `${JSON.stringify(assetLog, null, 2)}\n`);

console.log(`Synced ${songs.length} songs and ${assets.length} local cover images.`);
console.log(`Original songs: ${songs.filter((song) => song.type === "Original").length}`);
console.log(`Cover songs: ${songs.filter((song) => song.type === "Cover").length}`);
