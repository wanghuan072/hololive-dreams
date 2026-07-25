import catalog from "./songs.json";
import videoCatalog from "./songVideos.json";
import { createSongTdk } from "@/seo/tdk";

export type Song = {
  id: number;
  title: string;
  performer: string;
  type: "Original" | "Cover";
  lyricsBy: string;
  musicBy: string;
  arrangementBy: string;
  imageUrl: string;
  imageAlt: string;
  evidenceSources: string[];
  lastVerified: string;
  sourcePage: string;
  originalImageUrl: string;
};

const slugifySongTitle = (title: string) =>
  title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const songCatalog = catalog as Song[];
const slugCounts = songCatalog.reduce((counts, song) => {
  const base = slugifySongTitle(song.title) || `song-${song.id}`;
  counts.set(base, (counts.get(base) ?? 0) + 1);
  return counts;
}, new Map<string, number>());

type SongVideo = {
  videoId: string;
  title: string;
  channel: string;
  channelId: string | null;
  channelVerified: boolean;
  duration: number | null;
  selectionTier:
    | "verified-channel"
    | "topic"
    | "curated"
    | "best-match"
    | "community-gameplay";
};

const songVideos = videoCatalog as Record<string, SongVideo>;

export type SongDetail = Song & {
  slug: string;
  video: SongVideo;
  tdk: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const songs: SongDetail[] = songCatalog.map((song) => {
  const base = slugifySongTitle(song.title) || `song-${song.id}`;
  return {
    ...song,
    slug: slugCounts.get(base) === 1 ? base : `${base}-${song.id}`,
    video: songVideos[String(song.id)],
    tdk: createSongTdk(song),
  };
});

export function getSongBySlug(slug: string) {
  return songs.find((song) => song.slug === slug);
}

export function getRelatedSongs(song: SongDetail, limit = 6) {
  const samePerformer = songs.filter(
    (candidate) =>
      candidate.id !== song.id && candidate.performer === song.performer,
  );
  const sameType = songs.filter(
    (candidate) =>
      candidate.id !== song.id &&
      candidate.type === song.type &&
      candidate.performer !== song.performer,
  );

  return [...samePerformer, ...sameType].slice(0, limit);
}

export const songCatalogSummary = {
  total: songs.length,
  originals: songs.filter((song) => song.type === "Original").length,
  covers: songs.filter((song) => song.type === "Cover").length,
  lastVerified: songs[0]?.lastVerified ?? "2026-07-24",
};
