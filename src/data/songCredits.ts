export type SongCreditRelation =
  | "named-performers"
  | "credited-group"
  | "project-credit"
  | "unmatched";

const characterNamesByCredit: Record<string, string[]> = {
  AyaFubuMi: ["Shirakami Fubuki", "Nakiri Ayame", "Ookami Mio"],
  FUWAMOCO: ["Fuwawa Abyssgard", "Mococo Abyssgard"],
  "hololive 1st Generation": [
    "Aki Rosenthal",
    "Akai Haato",
    "Natsuiro Matsuri",
    "Shirakami Fubuki",
  ],
  "hololive English -Advent-": [
    "Shiori Novella",
    "Koseki Bijou",
    "Nerissa Ravencroft",
    "Fuwawa Abyssgard",
    "Mococo Abyssgard",
  ],
  "hololive English -Myth-": [
    "Mori Calliope",
    "Takanashi Kiara",
    "Ninomae Ina'nis",
  ],
  "hololive English -Promise-": ["IRyS", "Ouro Kronii", "Hakos Baelz"],
  "hololive Indonesia 1st Generation": [
    "Ayunda Risu",
    "Moona Hoshinova",
    "Airani Iofifteen",
  ],
  "hololive Indonesia 2nd Generation": [
    "Kureiji Ollie",
    "Anya Melfissa",
    "Pavolia Reine",
  ],
  "hololive Indonesia 3rd Generation": [
    "Vestia Zeta",
    "Kaela Kovalskia",
    "Kobo Kanaeru",
  ],
  ReGLOSS: [
    "Otonose Kanade",
    "Ichijou Ririka",
    "Juufuutei Raden",
    "Todoroki Hajime",
  ],
  SorAZ: ["Tokino Sora", "AZKi"],
  "Secret Society holoX": [
    "La+ Darknesss",
    "Takane Lui",
    "Hakui Koyori",
    "Kazama Iroha",
  ],
  "Shiranui Construction": [
    "Sakura Miko",
    "Hoshimachi Suisei",
    "Shiranui Flare",
    "Shirogane Noel",
    "Omaru Polka",
  ],
  subachocolunatan: [
    "Oozora Subaru",
    "Yuzuki Choco",
    "Himemori Luna",
    "Shishiro Botan",
  ],
};

const projectLevelCredits = new Set([
  "Blue Journey",
  "hololive IDOL PROJECT",
]);

export const splitPerformerCredit = (performer: string) =>
  performer
    .split(/\s*(?:,|&)\s*/)
    .map((name) => name.trim())
    .filter(Boolean);

export function getSongCharacterCredit(
  performer: string,
  rosterNames: ReadonlySet<string>,
): { relation: SongCreditRelation; names: string[] } {
  const namedPerformers = splitPerformerCredit(performer).filter((name) =>
    rosterNames.has(name),
  );

  if (namedPerformers.length) {
    return {
      relation: "named-performers",
      names: namedPerformers,
    };
  }

  if (projectLevelCredits.has(performer)) {
    return {
      relation: "project-credit",
      names: [],
    };
  }

  const groupNames = characterNamesByCredit[performer] ?? [];
  if (groupNames.length) {
    return {
      relation: "credited-group",
      names: groupNames.filter((name) => rosterNames.has(name)),
    };
  }

  return {
    relation: "unmatched",
    names: [],
  };
}
