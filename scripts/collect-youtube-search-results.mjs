import { execFile } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const queries = [
  {
    id: "ytq-01",
    query: "hololive Dreams official trailer",
    targetPages: ["/", "/wiki/systems"],
    gap: "Official overview and system presentation",
  },
  {
    id: "ytq-02",
    query: "hololive Dreams gameplay guide",
    targetPages: ["/guides", "/guides/getting-started"],
    gap: "First-session and gameplay flow",
  },
  {
    id: "ytq-03",
    query: "hololive Dreams rhythm game note speed settings",
    targetPages: ["/guides/rhythm-timing", "/guides/performance-settings"],
    gap: "Rhythm lane and settings presentation",
  },
  {
    id: "ytq-04",
    query: "hololive Dreams Create Chart custom chart",
    targetPages: ["/guides/create-chart"],
    gap: "Create Chart workflow and visual confirmation",
  },
  {
    id: "ytq-05",
    query: "hololive Dreams Dream Park Holomem Board",
    targetPages: ["/guides/dream-park-progression", "/guides/team-building-holomem-board"],
    gap: "Park, team, and board flow",
  },
  {
    id: "ytq-06",
    query: "hololive Dreams minigames Hoppin Rope POKAJAN",
    targetPages: ["/guides/minigames"],
    gap: "Named minigame presentation",
  },
  {
    id: "ytq-07",
    query: "hololive Dreams account linking Steam mobile",
    targetPages: ["/help"],
    gap: "Account-transfer question",
  },
  {
    id: "ytq-08",
    query: "hololive Dreams loading performance PC mobile",
    targetPages: ["/help", "/system-requirements"],
    gap: "Launch loading and performance questions",
  },
];

const outputDirectory = path.join(process.cwd(), "research", "video");
await mkdir(outputDirectory, { recursive: true });

const videos = new Map();
const failures = [];

for (const query of queries) {
  try {
    const { stdout } = await execFileAsync(
      "yt-dlp",
      [
        "--flat-playlist",
        "--dump-single-json",
        "--no-warnings",
        `ytsearch8:${query.query}`,
      ],
      { maxBuffer: 12 * 1024 * 1024 },
    );
    const result = JSON.parse(stdout);

    for (const entry of result.entries ?? []) {
      if (!entry?.id) continue;
      const existing = videos.get(entry.id) ?? {
        id: entry.id,
        url: entry.url?.startsWith("http")
          ? entry.url
          : `https://www.youtube.com/watch?v=${entry.id}`,
        title: entry.title,
        channel: entry.channel ?? entry.uploader,
        channelId: entry.channel_id ?? entry.uploader_id,
        duration: entry.duration,
        liveStatus: entry.live_status,
        queries: [],
        targetPages: [],
        gaps: [],
      };
      existing.queries.push(query.id);
      existing.targetPages.push(...query.targetPages);
      existing.gaps.push(query.gap);
      existing.targetPages = [...new Set(existing.targetPages)];
      existing.gaps = [...new Set(existing.gaps)];
      videos.set(entry.id, existing);
    }
  } catch (error) {
    failures.push({
      queryId: query.id,
      message: error instanceof Error ? error.message : String(error),
    });
  }
}

const output = {
  metadata: {
    flow: "07-video-content-supplement",
    platform: "YouTube",
    retrievedAt: "2026-07-24T00:00:00+08:00",
    queryCount: queries.length,
    uniqueResultCount: videos.size,
    method: "yt-dlp flat playlist metadata only; no video or audio downloaded",
  },
  queries,
  results: [...videos.values()],
  failures,
};

await writeFile(
  path.join(outputDirectory, "youtube-search-results.json"),
  `${JSON.stringify(output, null, 2)}\n`,
);

console.log(
  `Collected ${output.results.length} unique YouTube candidates from ${queries.length} queries.`,
);
if (failures.length) console.log(`Query failures: ${failures.length}`);
