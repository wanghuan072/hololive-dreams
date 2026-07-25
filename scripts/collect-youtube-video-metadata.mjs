import { execFile } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const searchPath = path.join(
  process.cwd(),
  "research",
  "video",
  "youtube-search-results.json",
);
const outputPath = path.join(
  process.cwd(),
  "research",
  "video",
  "youtube-video-metadata.json",
);
const searchData = JSON.parse(await readFile(searchPath, "utf8"));

const selected = [
  { id: "KWkNV57HJe4", level: "A", reason: "Full official system overview" },
  { id: "LQAm-2QHefE", level: "A", reason: "Official trailer baseline" },
  { id: "d2DeHaTUcO8", level: "A", reason: "Official reveal-stage overview" },
  { id: "J1uOs1pAQMw", level: "A", reason: "Official gameplay stage one" },
  { id: "PQlypO5Kz7E", level: "A", reason: "Official gameplay stage two" },
  { id: "bL3TP6IiipA", level: "A", reason: "Official feature-stage highlights" },
  { id: "QGKxCTMnl78", level: "A", reason: "Official rhythm-game presentation" },
  { id: "aXDlaQ6uyX0", level: "A", reason: "Official rhythm gameplay demonstration" },
  { id: "u-QXXcO2Wzg", level: "A", reason: "Official Hoppin' Rope demonstration" },
  { id: "9OxaIDpEhXo", level: "A", reason: "Official cooking-minigame demonstration" },
  { id: "-8QISHiERDI", level: "A", reason: "Official MEGA CIRCUIT demonstration" },
  { id: "-3PEJw3ucCI", level: "A", reason: "Official new-area presentation" },
  { id: "k0iH87--248", level: "A", reason: "Official expert rhythm chart gameplay" },
  { id: "NFO6iCsyNB8", level: "B", reason: "Official talent launch gameplay and user-flow questions" },
  { id: "9y2hfI9-540", level: "B", reason: "Official talent first-session gameplay" },
  { id: "1a6GDQiTcCg", level: "B", reason: "Official talent English-language launch gameplay" },
  { id: "_uBs0PpHsOs", level: "B", reason: "Official talent English-language launch gameplay" },
  { id: "QxkalxA-rBA", level: "C", reason: "Community Create Chart demonstration lead" },
  { id: "bfkVEBw-Kr0", level: "C", reason: "Community custom-chart gameplay lead" },
  { id: "n5MZS-zGUr4", level: "C", reason: "Community account-linking question lead" },
];

const queryByVideo = new Map(
  searchData.results.map((video) => [
    video.id,
    {
      queries: video.queries,
      targetPages: video.targetPages,
      gaps: video.gaps,
    },
  ]),
);
const printTemplate =
  "%(.{id,title,webpage_url,channel,channel_url,upload_date,duration,description,chapters,subtitles,automatic_captions,tags,categories,thumbnail,live_status})#j";

async function retrieve(item) {
  try {
    const { stdout } = await execFileAsync(
      "yt-dlp",
      [
        "--skip-download",
        "--no-playlist",
        "--no-warnings",
        "--print",
        printTemplate,
        `https://www.youtube.com/watch?v=${item.id}`,
      ],
      { maxBuffer: 24 * 1024 * 1024 },
    );
    const metadata = JSON.parse(stdout.trim());
    const mapping = queryByVideo.get(item.id) ?? {
      queries: [],
      targetPages: [],
      gaps: [],
    };
    return {
      ...item,
      status: "reviewed",
      ...mapping,
      id: metadata.id,
      title: metadata.title,
      url: metadata.webpage_url,
      channel: metadata.channel,
      channelUrl: metadata.channel_url,
      uploadDate: metadata.upload_date,
      duration: metadata.duration,
      description: metadata.description,
      chapters: metadata.chapters ?? [],
      subtitleLanguages: Object.keys(metadata.subtitles ?? {}),
      automaticCaptionLanguages: Object.keys(metadata.automatic_captions ?? {}),
      tags: metadata.tags ?? [],
      categories: metadata.categories ?? [],
      thumbnail: metadata.thumbnail,
      liveStatus: metadata.live_status,
    };
  } catch (error) {
    return {
      ...item,
      status: "metadata_failed",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

const queue = [...selected];
const results = [];
async function worker() {
  while (queue.length) {
    const item = queue.shift();
    if (!item) return;
    results.push(await retrieve(item));
  }
}

await Promise.all(Array.from({ length: 4 }, () => worker()));
results.sort(
  (a, b) =>
    selected.findIndex((item) => item.id === a.id) -
    selected.findIndex((item) => item.id === b.id),
);

await writeFile(
  outputPath,
  `${JSON.stringify(
    {
      metadata: {
        flow: "07-video-content-supplement",
        platform: "YouTube",
        reviewedAt: "2026-07-24T00:00:00+08:00",
        selectedCount: selected.length,
        successCount: results.filter((item) => item.status === "reviewed").length,
        method: "yt-dlp metadata only; no video or audio downloaded",
      },
      videos: results,
    },
    null,
    2,
  )}\n`,
);

console.log(
  `Reviewed metadata for ${results.filter((item) => item.status === "reviewed").length}/${selected.length} selected videos.`,
);
