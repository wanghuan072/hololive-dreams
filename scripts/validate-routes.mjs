const origin = process.env.SITE_ORIGIN || "http://localhost:3100";

const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Sitemap returned ${sitemapResponse.status}`);
}
const sitemapXml = await sitemapResponse.text();
const routes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => new URL(match[1]).pathname,
);

if (!routes.length) throw new Error("Sitemap contains no routes");

const expected = new Set(routes);
const results = [];
const discoveredLinks = new Set();

for (const route of routes) {
  const response = await fetch(new URL(route, origin));
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim() ?? "";
  const description =
    html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1]?.trim() ??
    html.match(/<meta\s+content="([^"]*)"\s+name="description"/i)?.[1]?.trim() ??
    "";
  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
  const h1Text =
    html
      .match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]
      ?.replace(/<[^>]+>/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&#x27;|&#39;|&apos;/g, "'")
      .replace(/\s+/g, " ")
      .trim() ?? "";

  for (const match of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = match[1].replace(/\/$/, "") || "/";
    if (!href.startsWith("/_next")) discoveredLinks.add(href);
  }

  results.push({
    route,
    status: response.status,
    title: Boolean(title),
    description: Boolean(description),
    h1Count,
    h1Keyword: /hololive dreams/i.test(h1Text),
  });
}

const brokenPages = results.filter(
  (result) =>
    result.status !== 200 ||
    !result.title ||
    !result.description ||
    result.h1Count !== 1 ||
    !result.h1Keyword,
);
const unknownInternalLinks = [...discoveredLinks].filter(
  (href) => !expected.has(href) && href !== "/robots.txt" && href !== "/icon.svg",
);

console.table(results);
console.log(
  JSON.stringify(
    {
      checkedRoutes: results.length,
      sitemapRoutes: routes.length,
      brokenPages,
      unknownInternalLinks,
    },
    null,
    2,
  ),
);

if (brokenPages.length || unknownInternalLinks.length) {
  process.exitCode = 1;
}
