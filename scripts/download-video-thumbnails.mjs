import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const metadataPath = path.join(
  process.cwd(),
  "research",
  "video",
  "youtube-video-metadata.json",
);
const outputDirectory = path.join(process.cwd(), "public", "images", "video");
const logPath = path.join(
  process.cwd(),
  "research",
  "video",
  "video-image-assets.json",
);

const selections = [
  {
    id: "KWkNV57HJe4",
    fileName: "hololive-dreams-full-game-trailer.jpg",
    alt: "Official hololive Dreams full game trailer preview",
    usage: ["/", "/wiki/systems"],
  },
  {
    id: "QGKxCTMnl78",
    fileName: "hololive-dreams-rhythm-game-pv.jpg",
    alt: "Official hololive Dreams rhythm game preview",
    usage: ["/guides/rhythm-timing", "/guides/create-chart"],
  },
  {
    id: "u-QXXcO2Wzg",
    fileName: "hololive-dreams-hoppin-rope-video.jpg",
    alt: "Official Hoppin' Rope gameplay demonstration preview",
    usage: ["/guides/minigames"],
  },
  {
    id: "9OxaIDpEhXo",
    fileName: "hololive-dreams-cooking-video.jpg",
    alt: "Official Colliect Cooking gameplay demonstration preview",
    usage: ["/guides/minigames"],
  },
  {
    id: "-8QISHiERDI",
    fileName: "hololive-dreams-mega-circuit-video.jpg",
    alt: "Official MEGA CIRCUIT gameplay demonstration preview",
    usage: ["/guides/minigames"],
  },
  {
    id: "J1uOs1pAQMw",
    fileName: "hololive-dreams-gameplay-stage-video.jpg",
    alt: "Official hololive Dreams gameplay stage preview",
    usage: ["/guides/getting-started", "/guides/dream-park-progression"],
  },
];

const metadata = JSON.parse(await readFile(metadataPath, "utf8"));
const byId = new Map(metadata.videos.map((video) => [video.id, video]));
await mkdir(outputDirectory, { recursive: true });

const assets = [];
for (const selection of selections) {
  const video = byId.get(selection.id);
  if (!video?.thumbnail || !video?.url) {
    throw new Error(`Missing thumbnail metadata for ${selection.id}`);
  }

  const response = await fetch(video.thumbnail, {
    headers: { "User-Agent": "Mozilla/5.0 hololive-dreams-reference-research" },
  });
  if (!response.ok) {
    throw new Error(`Thumbnail download failed for ${selection.id}: HTTP ${response.status}`);
  }

  const bytes = new Uint8Array(await response.arrayBuffer());
  await writeFile(path.join(outputDirectory, selection.fileName), bytes);
  assets.push({
    videoId: selection.id,
    title: video.title,
    channel: video.channel,
    sourceVideoUrl: video.url,
    timecode: "YouTube-provided video thumbnail",
    originalThumbnailUrl: video.thumbnail,
    localPath: `public/images/video/${selection.fileName}`,
    publicPath: `/images/video/${selection.fileName}`,
    alt: selection.alt,
    usage: selection.usage,
    dimensionsStrategy: "Rendered responsively at 16:9 with explicit container aspect ratio",
    byteSize: bytes.byteLength,
    contentType: response.headers.get("content-type"),
    decision: "adopted",
  });
}

await writeFile(
  logPath,
  `${JSON.stringify(
    {
      metadata: {
        flow: "07-video-content-supplement",
        retrievedAt: "2026-07-24T00:00:00+08:00",
        assetCount: assets.length,
        method: "YouTube-provided thumbnails only; no video or audio downloaded",
      },
      assets,
    },
    null,
    2,
  )}\n`,
);

console.log(`Downloaded ${assets.length} official YouTube thumbnails.`);
