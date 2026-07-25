export type Holomem = {
  id: number;
  slug: string;
  name: string;
  branch: "Japan" | "Indonesia" | "English";
  group: string;
  imageUrl: string;
  imageAlt: string;
  evidenceSources: string[];
  confidence: "high";
  lastVerified: string;
};

const refreshedPortraits = new Set([
  "azki",
  "koseki-bijou",
  "ouro-kronii",
  "shishiro-botan",
]);

export const holomems: Holomem[] = [
  [1, "Tokino Sora", "Japan", "Early talents", "tokino-sora"],
  [2, "Robocosan", "Japan", "Early talents", "robocosan"],
  [3, "Sakura Miko", "Japan", "Early talents", "sakura-miko"],
  [4, "Hoshimachi Suisei", "Japan", "Early talents", "hoshimachi-suisei"],
  [5, "AZKi", "Japan", "Early talents", "azki"],
  [6, "Aki Rosenthal", "Japan", "Generation 1", "aki-rosenthal"],
  [7, "Akai Haato", "Japan", "Generation 1", "akai-haato"],
  [8, "Natsuiro Matsuri", "Japan", "Generation 1", "natsuiro-matsuri"],
  [9, "Shirakami Fubuki", "Japan", "Generation 1 / GAMERS", "shirakami-fubuki"],
  [10, "Nakiri Ayame", "Japan", "Generation 2", "nakiri-ayame"],
  [11, "Yuzuki Choco", "Japan", "Generation 2", "yuzuki-choco"],
  [12, "Oozora Subaru", "Japan", "Generation 2", "oozora-subaru"],
  [13, "Ookami Mio", "Japan", "hololive GAMERS", "ookami-mio"],
  [14, "Nekomata Okayu", "Japan", "hololive GAMERS", "nekomata-okayu"],
  [15, "Inugami Korone", "Japan", "hololive GAMERS", "inugami-korone"],
  [16, "Usada Pekora", "Japan", "Generation 3", "usada-pekora"],
  [17, "Shiranui Flare", "Japan", "Generation 3", "shiranui-flare"],
  [18, "Shirogane Noel", "Japan", "Generation 3", "shirogane-noel"],
  [19, "Houshou Marine", "Japan", "Generation 3", "houshou-marine"],
  [20, "Tsunomaki Watame", "Japan", "Generation 4", "tsunomaki-watame"],
  [21, "Tokoyami Towa", "Japan", "Generation 4", "tokoyami-towa"],
  [22, "Himemori Luna", "Japan", "Generation 4", "himemori-luna"],
  [23, "Yukihana Lamy", "Japan", "Generation 5", "yukihana-lamy"],
  [24, "Momosuzu Nene", "Japan", "Generation 5", "momosuzu-nene"],
  [25, "Shishiro Botan", "Japan", "Generation 5", "shishiro-botan"],
  [26, "Omaru Polka", "Japan", "Generation 5", "omaru-polka"],
  [27, "La+ Darknesss", "Japan", "holoX", "la-darknesss"],
  [28, "Takane Lui", "Japan", "holoX", "takane-lui"],
  [29, "Hakui Koyori", "Japan", "holoX", "hakui-koyori"],
  [30, "Kazama Iroha", "Japan", "holoX", "kazama-iroha"],
  [31, "Otonose Kanade", "Japan", "ReGLOSS", "otonose-kanade"],
  [32, "Ichijou Ririka", "Japan", "ReGLOSS", "ichijou-ririka"],
  [33, "Juufuutei Raden", "Japan", "ReGLOSS", "juufuutei-raden"],
  [34, "Todoroki Hajime", "Japan", "ReGLOSS", "todoroki-hajime"],
  [35, "Ayunda Risu", "Indonesia", "Generation 1", "ayunda-risu"],
  [36, "Moona Hoshinova", "Indonesia", "Generation 1", "moona-hoshinova"],
  [37, "Airani Iofifteen", "Indonesia", "Generation 1", "airani-iofifteen"],
  [38, "Kureiji Ollie", "Indonesia", "Generation 2", "kureiji-ollie"],
  [39, "Anya Melfissa", "Indonesia", "Generation 2", "anya-melfissa"],
  [40, "Pavolia Reine", "Indonesia", "Generation 2", "pavolia-reine"],
  [41, "Vestia Zeta", "Indonesia", "Generation 3", "vestia-zeta"],
  [42, "Kaela Kovalskia", "Indonesia", "Generation 3", "kaela-kovalskia"],
  [43, "Kobo Kanaeru", "Indonesia", "Generation 3", "kobo-kanaeru"],
  [44, "Mori Calliope", "English", "Myth", "mori-calliope"],
  [45, "Takanashi Kiara", "English", "Myth", "takanashi-kiara"],
  [46, "Ninomae Ina'nis", "English", "Myth", "ninomae-ina"],
  [47, "IRyS", "English", "Project: HOPE", "irys"],
  [48, "Ouro Kronii", "English", "Promise", "ouro-kronii"],
  [49, "Hakos Baelz", "English", "Promise", "hakos-baelz"],
  [50, "Shiori Novella", "English", "Advent", "shiori-novella"],
  [51, "Koseki Bijou", "English", "Advent", "koseki-bijou"],
  [52, "Nerissa Ravencroft", "English", "Advent", "nerissa-ravencroft"],
  [53, "Fuwawa Abyssgard", "English", "Advent", "fuwawa-abyssgard"],
  [54, "Mococo Abyssgard", "English", "Advent", "mococo-abyssgard"],
].map(([id, name, branch, group, file]) => ({
  id: id as number,
  slug: file as string,
  name: name as string,
  branch: branch as Holomem["branch"],
  group: group as string,
  imageUrl: `/images/holomems/hololive-dreams-${file}${refreshedPortraits.has(file as string) ? "-refresh" : ""}.webp`,
  imageAlt: `Portrait of ${name} in hololive Dreams`,
  evidenceSources: ["src-002", "src-003"],
  confidence: "high" as const,
  lastVerified: "2026-07-23",
}));
