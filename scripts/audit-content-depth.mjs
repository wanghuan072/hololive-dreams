const baseUrl = process.env.AUDIT_BASE_URL ?? "http://localhost:3100";

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Sitemap returned ${sitemapResponse.status}`);
}
const sitemapXml = await sitemapResponse.text();
const routes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => new URL(match[1]).pathname,
);

function decodeEntities(value) {
  const entities = {
    "&amp;": "&",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&lt;": "<",
    "&gt;": ">",
    "&nbsp;": " ",
  };

  return value
    .replace(/&(amp|apos|quot|lt|gt|nbsp);|&#39;/g, (match) => entities[match] ?? match)
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

function extractMain(html) {
  return html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
}

function visibleText(html) {
  return decodeEntities(
    html
      .replace(/<(script|style|svg)\b[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

const results = [];
const pageText = new Map();

for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`);
  const html = await response.text();
  const main = extractMain(html);
  const text = visibleText(main);
  pageText.set(route, text);
  const images = [...main.matchAll(/<img\b/gi)].length;
  const h2s = [...main.matchAll(/<h2\b/gi)].length;
  const links = [...main.matchAll(/<a\b/gi)].length;

  results.push({
    route,
    status: response.status,
    characters: text.length,
    words: text ? text.split(/\s+/).length : 0,
    images,
    h2s,
    links,
  });
}

console.table(results);

const failures = results.filter((result) => {
  const minimum = result.route === "/" ? 1200 : result.route.startsWith("/characters/") ? 700 : 600;
  return result.status !== 200 || result.characters < minimum;
});

const pageGroup = (route) =>
  route.startsWith("/characters/")
    ? "character"
    : route.startsWith("/songs/")
      ? "song"
      : route.startsWith("/guides/")
        ? "guide"
        : null;

const shingles = (text) => {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9' ]+/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  return new Set(
    words.slice(0, -2).map((word, index) =>
      [word, words[index + 1], words[index + 2]].join(" "),
    ),
  );
};

const groupedRoutes = Object.groupBy(
  routes.filter((route) => pageGroup(route)),
  pageGroup,
);
const nearDuplicates = [];

for (const groupRoutes of Object.values(groupedRoutes)) {
  const sets = groupRoutes.map((route) => ({
    route,
    values: shingles(pageText.get(route) ?? ""),
  }));

  for (let left = 0; left < sets.length; left += 1) {
    for (let right = left + 1; right < sets.length; right += 1) {
      const intersection = [...sets[left].values].filter((value) =>
        sets[right].values.has(value),
      ).length;
      const union = new Set([...sets[left].values, ...sets[right].values]).size;
      const similarity = union ? intersection / union : 0;

      if (similarity >= 0.92) {
        nearDuplicates.push({
          first: sets[left].route,
          second: sets[right].route,
          similarity: Number(similarity.toFixed(3)),
        });
      }
    }
  }
}

console.log(JSON.stringify({
  checkedRoutes: results.length,
  failures,
  nearDuplicates,
}, null, 2));

if (failures.length || nearDuplicates.length) process.exitCode = 1;
