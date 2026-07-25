import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const rosterPath = path.join(projectRoot, "src", "data", "holomems.ts");
const outputPath = path.join(projectRoot, "src", "data", "holomemProfiles.json");
const researchPath = path.join(
  projectRoot,
  "research",
  "holomem-profile-sources.json",
);

const officialSlugOverrides = {
  "ninomae-ina": "ninomae-inanis",
  robocosan: "roboco-san",
  "sakura-miko": "sakuramiko",
};

const decodeEntities = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&ldquo;|&#8220;/g, "“")
    .replace(/&rdquo;|&#8221;/g, "”")
    .replace(/&lsquo;|&#8216;/g, "‘")
    .replace(/&rsquo;|&#8217;/g, "’")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));

const toText = (value = "") =>
  decodeEntities(
    value
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<video[\s\S]*?<\/video>/gi, "")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const capture = (html, pattern) => toText(html.match(pattern)?.[1] ?? "");

const rosterSource = await fs.readFile(rosterPath, "utf8");
const rosterPattern =
  /\[(\d+),\s*"([^"]+)",\s*"(Japan|Indonesia|English)",\s*"([^"]+)",\s*"([^"]+)"\]/g;
const roster = [...rosterSource.matchAll(rosterPattern)].map((match) => ({
  id: Number(match[1]),
  name: match[2],
  branch: match[3],
  group: match[4],
  slug: match[5],
}));

if (roster.length !== 54) {
  throw new Error(`Expected 54 roster records, found ${roster.length}`);
}

const profiles = [];

for (const member of roster) {
  const officialSlug = officialSlugOverrides[member.slug] ?? member.slug;
  const officialProfileUrl =
    `https://hololive.hololivepro.com/en/talents/${officialSlug}/`;
  const response = await fetch(officialProfileUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (compatible; hololive-Dreams-Reference/1.0; profile research)",
    },
  });

  if (!response.ok) {
    throw new Error(
      `${member.name} official profile returned ${response.status}: ${officialProfileUrl}`,
    );
  }

  const html = await response.text();
  const canonical =
    html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1] ??
    officialProfileUrl;
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "";
  const nativeName = capture(h1, /<span[^>]*>([\s\S]*?)<\/span>/i);
  const displayName = toText(h1.replace(/<span[\s\S]*?<\/span>/i, ""));
  const tagline = capture(
    html,
    /<p class="catch">([\s\S]*?)<\/p>/i,
  );
  const biography = capture(
    html,
    /<p class="txt">([\s\S]*?)<\/p>\s*<div class="t_icon">/i,
  );
  const dataSection =
    html.match(
      /<div class="talent_data">([\s\S]*?)<!--talent date-->/i,
    )?.[1] ?? "";
  const officialData = Object.fromEntries(
    [...dataSection.matchAll(/<dl>\s*<dt>([\s\S]*?)<\/dt>\s*<dd>([\s\S]*?)<\/dd>\s*<\/dl>/gi)]
      .map((match) => [toText(match[1]), toText(match[2])])
      .filter(([key, value]) => key && value),
  );
  const findData = (...labels) => {
    const normalizedLabels = labels.map((label) => label.toLowerCase());
    return Object.entries(officialData).find(([label]) =>
      normalizedLabels.includes(label.toLowerCase()),
    )?.[1] ?? null;
  };
  const coreFieldLabels = new Set([
    "birthday",
    "debut",
    "debut stream",
    "debut date",
    "height",
    "heigh",
    "unit",
    "fan name",
    "hashtags",
    "hashtag",
  ]);
  const additionalFacts = Object.entries(officialData)
    .filter(([label]) => !coreFieldLabels.has(label.toLowerCase()))
    .map(([label, value]) => ({ label, value }));
  const freeArea =
    html.match(/<!--free area-->([\s\S]*?)<!--event-->/i)?.[1] ?? "";
  const qaBox =
    [...freeArea.matchAll(/<div class="box">([\s\S]*?)<\/div>/gi)]
      .map((match) => match[1])
      .find((box) => /<h3>\s*Q(?:&amp;|&)A\s*<\/h3>/i.test(box)) ?? "";
  const officialQa = [...qaBox.matchAll(
    /<p>\s*<strong>\s*Q:\s*([\s\S]*?)<\/strong>\s*<br\s*\/?>\s*A:\s*([\s\S]*?)<\/p>/gi,
  )]
    .map((match) => ({
      question: toText(match[1]),
      answer: toText(match[2]),
    }))
    .filter((entry) => entry.question && entry.answer)
    .slice(0, 4);

  const profile = {
    id: member.id,
    slug: member.slug,
    officialSlug,
    name: displayName || member.name,
    nativeName,
    branch: member.branch,
    gameGroup: member.group,
    tagline,
    biography,
    birthday: findData("Birthday"),
    debut: findData("Debut", "Debut Stream", "Debut Date"),
    height: findData("Height", "Heigh"),
    officialUnit: findData("Unit"),
    fanName: findData("Fan Name"),
    hashtags: findData("Hashtags", "Hashtag"),
    additionalFacts,
    officialQa,
    officialProfileUrl: canonical,
    sourceType: "official",
    sourceAuthority: "A",
    fetchedAt: "2026-07-24",
  };

  profiles.push(profile);
  console.log(
    `${String(member.id).padStart(2, "0")} ${member.name}: ${Object.keys(officialData).length} fields, ${officialQa.length} Q&A`,
  );
}

const dataOutput = {
  metadata: {
    generatedAt: "2026-07-24",
    totalProfiles: profiles.length,
    sourcePolicy:
      "Official hololive production English talent profiles; game participation remains sourced from the hololive Dreams official roster.",
  },
  profiles,
};

const researchOutput = {
  metadata: {
    researchDate: "2026-07-24",
    scope: "All 54 playable hololive Dreams members",
    method:
      "Fetched the canonical English hololive production profile for each member in the official hololive Dreams launch roster.",
    limitations: [
      "Official talent profile facts describe the talent, not member-specific hololive Dreams mechanics.",
      "No unique card, outfit, skill value, unlock sequence, tier, or gacha-rate claim is inferred.",
      "Game-song relationships are derived separately from the project-local official music catalog snapshot.",
    ],
  },
  sources: profiles.map((profile) => ({
    id: `src-member-${String(profile.id).padStart(2, "0")}`,
    member: profile.name,
    url: profile.officialProfileUrl,
    sourceType: profile.sourceType,
    authority: profile.sourceAuthority,
    fieldsUsed: [
      "official name",
      "native name",
      "official introduction",
      "birthday",
      "debut",
      "height",
      "unit",
      "fan name",
      "additional official profile fields",
      "up to four official profile Q&A entries when available",
    ],
    checkedAt: profile.fetchedAt,
  })),
};

await fs.writeFile(outputPath, `${JSON.stringify(dataOutput, null, 2)}\n`);
await fs.writeFile(researchPath, `${JSON.stringify(researchOutput, null, 2)}\n`);

console.log(`Wrote ${profiles.length} profiles to ${outputPath}`);
console.log(`Wrote source registry to ${researchPath}`);
