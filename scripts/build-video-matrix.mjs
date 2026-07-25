import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const metadataPath = path.join(root, "research", "video", "youtube-video-metadata.json");
const outputPath = path.join(root, "research", "video", "youtube-video-matrix.json");
const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));

const decisions = {
  KWkNV57HJe4: {
    decision: "adopted",
    sourceId: "src-020",
    targetPages: ["/guides/team-building-holomem-board", "/guides/create-chart"],
    usableIdeas: ["Official visual overview of Dream Park, rhythm, team play, and Create Chart."],
    limitations: ["Broad promotional overview; does not replace detailed official text sources."],
  },
  "LQAm-2QHefE": {
    decision: "rejected",
    usableIdeas: [],
    limitations: ["Superseded by the corrected full-trailer reupload KWkNV57HJe4."],
  },
  d2DeHaTUcO8: {
    decision: "deferred",
    usableIdeas: ["Prelaunch system overview and question discovery."],
    limitations: ["Redundant with the corrected trailer and official site; no unique claim adopted."],
  },
  J1uOs1pAQMw: {
    decision: "adopted",
    sourceId: "src-021",
    targetPages: ["/guides/getting-started", "/guides/dream-park-progression"],
    usableIdeas: ["Official visual demonstration of the first-session park-to-activity flow."],
    limitations: ["Event-stage presentation; exact UI details may differ from release builds."],
  },
  PQlypO5Kz7E: {
    decision: "adopted",
    sourceId: "video-flow07-002",
    targetPages: ["/guides/minigames"],
    usableIdeas: [
      "Cooking asks players to match sets of the same ingredient and finish requested dishes before time expires.",
      "Hoppin Rope is presented as a shared group activity.",
    ],
    limitations: ["Auto-translated captions were noisy; only visually clear mechanics were retained."],
  },
  bL3TP6IiipA: {
    decision: "deferred",
    usableIdeas: ["Broad launch-stage question discovery."],
    limitations: ["No unique stable claim beyond stronger adopted official sources."],
  },
  QGKxCTMnl78: {
    decision: "adopted",
    sourceId: "video-flow07-001",
    targetPages: ["/guides/rhythm-timing"],
    usableIdeas: ["Official lane-motion and animated-background visual reference."],
    limitations: ["Short promotional clip; timing recommendations remain editorial guidance."],
  },
  aXDlaQ6uyX0: {
    decision: "deferred",
    usableIdeas: ["Additional rhythm-stage visual context."],
    limitations: ["Redundant with the dedicated official Rhythm Game PV."],
  },
  "u-QXXcO2Wzg": {
    decision: "adopted",
    sourceId: "video-flow07-003",
    targetPages: ["/guides/minigames"],
    usableIdeas: ["Official demonstration of group jump timing in Hoppin Rope."],
    limitations: ["Visual reference only; no undocumented scoring rules inferred."],
  },
  "9OxaIDpEhXo": {
    decision: "adopted",
    sourceId: "video-flow07-004",
    targetPages: ["/guides/minigames"],
    usableIdeas: ["Official visual confirmation of the ingredient-matching cooking activity."],
    limitations: ["No captions; mechanics were cross-checked against the official stage video."],
  },
  "-8QISHiERDI": {
    decision: "adopted",
    sourceId: "video-flow07-005",
    targetPages: ["/guides/minigames"],
    usableIdeas: ["Official competitive movement visual for MEGA CIRCUIT."],
    limitations: ["No captions; no undocumented scoring or control claims inferred."],
  },
  "-3PEJw3ucCI": {
    decision: "deferred",
    usableIdeas: ["Potential future Mega Sphere area coverage."],
    limitations: ["New-area announcement is outside the current verified site scope."],
  },
  "k0iH87--248": {
    decision: "deferred",
    usableIdeas: ["Potential future song-detail visual."],
    limitations: ["Published after the catalog snapshot; defer until the song catalog is refreshed."],
  },
  NFO6iCsyNB8: {
    decision: "deferred",
    usableIdeas: ["English-speaking player terminology and launch-session questions."],
    limitations: ["Nearly four-hour talent stream; metadata and description reviewed, not treated as a factual source."],
  },
  "9y2hfI9-540": {
    decision: "deferred",
    usableIdeas: ["Launch-session question discovery."],
    limitations: ["Nearly four-hour talent stream; metadata and description reviewed, not treated as a factual source."],
  },
  "1a6GDQiTcCg": {
    decision: "deferred",
    usableIdeas: ["English-speaking player terminology and first-session questions."],
    limitations: ["Long talent stream; metadata and description reviewed, not treated as a factual source."],
  },
  _uBs0PpHsOs: {
    decision: "deferred",
    usableIdeas: ["English-speaking player terminology and first-session questions."],
    limitations: ["Long talent stream; metadata and description reviewed, not treated as a factual source."],
  },
  "QxkalxA-rBA": {
    decision: "rejected",
    usableIdeas: [],
    limitations: ["Derived community clip with weak provenance and a title/description mismatch."],
  },
  "bfkVEBw-Kr0": {
    decision: "deferred",
    usableIdeas: ["Community interest in custom-chart clears."],
    limitations: ["Silent community gameplay adds no independently verifiable mechanic."],
  },
  "n5MZS-zGUr4": {
    decision: "deferred",
    usableIdeas: ["Confirms account-linking is a user question worth monitoring."],
    limitations: ["Community tutorial without official English text confirmation; no steps adopted."],
  },
};

const coverage = [
  { topic: "Official overview", queryIds: ["ytq-01", "ytq-02"], targetPages: ["/", "/wiki/systems"], reviewedIds: ["KWkNV57HJe4", "LQAm-2QHefE", "d2DeHaTUcO8", "J1uOs1pAQMw", "PQlypO5Kz7E", "bL3TP6IiipA"], adoptedIds: ["KWkNV57HJe4", "J1uOs1pAQMw"] },
  { topic: "First-session flow", queryIds: ["ytq-02", "ytq-05"], targetPages: ["/guides/getting-started", "/guides/dream-park-progression"], reviewedIds: ["J1uOs1pAQMw", "PQlypO5Kz7E", "NFO6iCsyNB8", "9y2hfI9-540", "1a6GDQiTcCg", "_uBs0PpHsOs"], adoptedIds: ["J1uOs1pAQMw"] },
  { topic: "Rhythm presentation", queryIds: ["ytq-03"], targetPages: ["/guides/rhythm-timing", "/guides/performance-settings"], reviewedIds: ["QGKxCTMnl78", "aXDlaQ6uyX0", "k0iH87--248", "1a6GDQiTcCg"], adoptedIds: ["QGKxCTMnl78"] },
  { topic: "Create Chart", queryIds: ["ytq-04"], targetPages: ["/guides/create-chart"], reviewedIds: ["KWkNV57HJe4", "QxkalxA-rBA", "bfkVEBw-Kr0", "NFO6iCsyNB8"], adoptedIds: ["KWkNV57HJe4"] },
  { topic: "Dream Park and board", queryIds: ["ytq-05"], targetPages: ["/guides/dream-park-progression", "/guides/team-building-holomem-board"], reviewedIds: ["KWkNV57HJe4", "J1uOs1pAQMw", "PQlypO5Kz7E", "-3PEJw3ucCI", "9y2hfI9-540"], adoptedIds: ["KWkNV57HJe4", "J1uOs1pAQMw"] },
  { topic: "Minigames", queryIds: ["ytq-06"], targetPages: ["/guides/minigames"], reviewedIds: ["PQlypO5Kz7E", "u-QXXcO2Wzg", "9OxaIDpEhXo", "-8QISHiERDI", "bL3TP6IiipA"], adoptedIds: ["PQlypO5Kz7E", "u-QXXcO2Wzg", "9OxaIDpEhXo", "-8QISHiERDI"] },
  { topic: "Account linking", queryIds: ["ytq-07"], targetPages: ["/help"], reviewedIds: ["n5MZS-zGUr4", "NFO6iCsyNB8"], adoptedIds: [] },
  { topic: "Loading and performance", queryIds: ["ytq-08"], targetPages: ["/help", "/system-requirements"], reviewedIds: ["NFO6iCsyNB8", "1a6GDQiTcCg", "_uBs0PpHsOs"], adoptedIds: [] },
];

const videos = metadata.videos.map((video) => {
  const decision = decisions[video.id];
  if (!decision) throw new Error(`Missing decision for ${video.id}`);
  return {
    id: video.id,
    level: video.level,
    title: video.title,
    url: video.url,
    channel: video.channel,
    uploadDate: video.uploadDate,
    durationSeconds: video.duration,
    captionAvailability: {
      manual: video.subtitleLanguages ?? [],
      automatic: (video.automaticCaptionLanguages ?? []).length > 0,
    },
    ...decision,
  };
});

const counts = videos.reduce((result, video) => {
  result[video.decision] = (result[video.decision] ?? 0) + 1;
  return result;
}, {});

const output = {
  metadata: {
    flow: "07-video-content-supplement",
    reviewedAt: "2026-07-24T00:00:00+08:00",
    reviewedCount: videos.length,
    adoptedCount: counts.adopted ?? 0,
    deferredCount: counts.deferred ?? 0,
    rejectedCount: counts.rejected ?? 0,
    method: "yt-dlp metadata review plus official descriptions, thumbnails, limited captions, and official-text cross-checks; no video or audio downloaded",
    embedding: "not authorized; external official links only",
  },
  coverage,
  videos,
};

fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Wrote ${path.relative(root, outputPath)} with ${videos.length} reviewed videos.`);
