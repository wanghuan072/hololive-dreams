import profileCatalog from "./holomemProfiles.json";
import { holomems } from "./holomems";
import { getSongCharacterCredit } from "./songCredits";
import { songs } from "./songs";
import { createCharacterTdk } from "@/seo/tdk";

export type OfficialHolomemProfile = {
  id: number;
  slug: string;
  officialSlug: string;
  name: string;
  nativeName: string;
  branch: "Japan" | "Indonesia" | "English";
  gameGroup: string;
  tagline: string;
  biography: string;
  birthday: string | null;
  debut: string | null;
  height: string | null;
  officialUnit: string | null;
  fanName: string | null;
  hashtags: string | null;
  additionalFacts: { label: string; value: string }[];
  officialQa: { question: string; answer: string }[];
  officialProfileUrl: string;
  sourceType: "official";
  sourceAuthority: "A";
  fetchedAt: string;
};

const profiles = profileCatalog.profiles as OfficialHolomemProfile[];

const rosterNames = new Set(holomems.map((member) => member.name));
const songCharacterNames = new Map(
  songs.map((song) => [
    song.id,
    getSongCharacterCredit(song.performer, rosterNames).names,
  ]),
);

export const holomemDetails = holomems.map((member) => {
  const official = profiles.find((profile) => profile.slug === member.slug);
  if (!official) {
    throw new Error(`Missing official profile data for ${member.name}`);
  }

  const catalogSongs = songs.filter((song) =>
    songCharacterNames.get(song.id)?.includes(member.name),
  );
  const collaboratorNames = new Set(
    catalogSongs.flatMap((song) =>
      (songCharacterNames.get(song.id) ?? []).filter(
        (name) => name !== member.name,
      ),
    ),
  );
  const collaborators = holomems.filter((candidate) =>
    collaboratorNames.has(candidate.name),
  );
  const peers = holomems
    .filter(
      (candidate) =>
        candidate.id !== member.id &&
        candidate.branch === member.branch &&
        candidate.group === member.group,
    )
    .slice(0, 4);

  return {
    ...member,
    slug: official.slug,
    official,
    catalogSongs,
    catalogSummary: {
      originals: catalogSongs.filter((song) => song.type === "Original").length,
      covers: catalogSongs.filter((song) => song.type === "Cover").length,
    },
    collaborators,
    peers,
    tdk: createCharacterTdk(member),
  };
});

export type HolomemDetail = (typeof holomemDetails)[number];

export function getHolomemDetail(slug: string) {
  return holomemDetails.find((member) => member.slug === slug);
}
