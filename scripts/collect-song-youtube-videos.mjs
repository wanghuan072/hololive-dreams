import { execFile } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const catalog = JSON.parse(
  await readFile(new URL("../src/data/songs.json", import.meta.url), "utf8"),
);

const normalize = (value) =>
  value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const meaningfulTokens = (value) =>
  normalize(value)
    .split(" ")
    .filter((token) => token.length > 1);

function scoreResult(song, result) {
  const title = normalize(result.title ?? "");
  const channel = normalize(result.channel ?? "");
  const haystack = `${title} ${channel}`;
  const songTitle = normalize(song.title);
  const titleTokens = meaningfulTokens(song.title);
  const performerTokens = meaningfulTokens(song.performer);
  const titleCoverage =
    titleTokens.filter((token) => title.includes(token)).length /
    Math.max(titleTokens.length, 1);
  const performerCoverage =
    performerTokens.filter((token) => haystack.includes(token)).length /
    Math.max(performerTokens.length, 1);
  const channelPerformerCoverage =
    performerTokens.filter((token) => channel.includes(token)).length /
    Math.max(performerTokens.length, 1);
  const isTopicChannel = /\btopic\b/.test(channel);
  const isVerifiedChannel = result.channelVerified === true;

  let score =
    titleCoverage * 72 +
    performerCoverage * 18 +
    channelPerformerCoverage * 22;
  if (title.includes(songTitle)) score += 30;
  if (isTopicChannel) score += 62;
  if (isVerifiedChannel) score += 54;
  if (/\b(official|mv|music video|original song)\b/.test(haystack)) score += 16;
  if (
    /\b(lyrics?|reaction|clip|shorts?|osu|beatmap|instrumental|karaoke|orchestra|drum|all perfect|gameplay)\b/.test(
      title,
    )
  ) {
    score -= 64;
  }
  if (/\b(live|fes|concert)\b/.test(title)) score -= 10;
  if (result.duration && result.duration >= 100 && result.duration <= 600) score += 8;
  if (result.duration && result.duration < 60) score -= 50;
  return Math.round(score * 10) / 10;
}

async function searchSong(song) {
  const query = `${song.title} ${song.performer} official topic`;
  const template =
    "%(id)s\u001f%(title)s\u001f%(channel)s\u001f%(channel_id)s\u001f%(channel_is_verified)s\u001f%(duration)s";
  const { stdout } = await execFileAsync(
    "yt-dlp",
    [
      "--flat-playlist",
      "--playlist-end",
      "8",
      "--print",
      template,
      `ytsearch8:${query}`,
    ],
    {
      maxBuffer: 3_000_000,
      windowsHide: true,
      env: {
        ...process.env,
        PYTHONUTF8: "1",
        PYTHONIOENCODING: "utf-8",
      },
    },
  );

  const candidates = stdout
    .trim()
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      const [
        id,
        title,
        channel,
        channelId,
        channelVerified,
        duration,
      ] = line.split("\u001f");
      return {
        id,
        title,
        channel,
        channelId: channelId === "NA" ? null : channelId,
        channelVerified: channelVerified === "True",
        duration: Number(duration) || null,
      };
    })
    .map((result) => ({ ...result, score: scoreResult(song, result) }))
    .sort((a, b) => b.score - a.score);

  return {
    songId: song.id,
    songTitle: song.title,
    performer: song.performer,
    query,
    selected: candidates[0] ?? null,
    candidates,
  };
}

const results = [];
const queue = [...catalog];
const workers = Array.from({ length: 8 }, async () => {
  while (queue.length) {
    const song = queue.shift();
    try {
      const result = await searchSong(song);
      results.push(result);
      process.stdout.write(
        `${String(results.length).padStart(3, "0")}/${catalog.length} ${song.title} -> ${result.selected?.id ?? "none"}\n`,
      );
    } catch (error) {
      results.push({
        songId: song.id,
        songTitle: song.title,
        performer: song.performer,
        query: `${song.title} ${song.performer} hololive`,
        selected: null,
        candidates: [],
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }
});

await Promise.all(workers);
results.sort((a, b) => a.songId - b.songId);

const output = {
  collectedAt: new Date().toISOString(),
  method:
    "YouTube search metadata collected in UTF-8 with yt-dlp; no video or audio downloaded. Selection prioritizes title match, verified artist channels, Topic catalogs, usable duration, and low-noise video types.",
  totalSongs: catalog.length,
  matchedSongs: results.filter((result) => result.selected).length,
  results,
};

await writeFile(
  new URL("../research/song-youtube-video-candidates-2026-07-24.json", import.meta.url),
  `${JSON.stringify(output, null, 2)}\n`,
);
