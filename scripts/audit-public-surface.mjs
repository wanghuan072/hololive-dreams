const baseUrl = process.env.PUBLIC_SURFACE_BASE_URL ?? "http://localhost:3116";
const sitemapXml = await (await fetch(`${baseUrl}/sitemap.xml`)).text();
const routes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => new URL(match[1]).pathname,
);

const decode = (value) =>
  value
    .replaceAll("&nbsp;", " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");

const visibleText = (html) =>
  decode(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();

const bannedWords =
  /\b(official|summary|verified|verification|sources?|evidence)\b|官方|收录|摘要|验证|来源/gi;
const internalPatterns =
  /(?:project\.yaml|src\/|src\\|npm run|\b(?:const|let)\s+[A-Za-z_$][\w$]*\s*=|node scripts\/)/gi;

const results = [];
for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`);
  const html = await response.text();
  const text = visibleText(html);
  const externalAnchors = [
    ...html.matchAll(/<a\b[^>]*href=["'](?:https?:|mailto:)[^"']*["'][^>]*>/gi),
  ].map((match) => match[0]);
  const banned = [...new Set(text.match(bannedWords) ?? [])];
  const internal = [...new Set(text.match(internalPatterns) ?? [])];
  const iframeIds = [
    ...html.matchAll(
      /<iframe\b[^>]*src=["']https:\/\/www\.youtube-nocookie\.com\/embed\/([^"'?]+)[^"']*["'][^>]*>/gi,
    ),
  ].map((match) => match[1]);

  results.push({
    route,
    status: response.status,
    externalAnchorCount: externalAnchors.length,
    banned,
    internal,
    iframeIds,
  });
}

const songResults = results.filter((result) => result.route.startsWith("/songs/"));
const report = {
  checkedRoutes: results.length,
  externalAnchorRoutes: results.filter((result) => result.externalAnchorCount > 0),
  bannedWordRoutes: results.filter((result) => result.banned.length > 0),
  internalPatternRoutes: results.filter((result) => result.internal.length > 0),
  songDetailRoutes: songResults.length,
  songRoutesWithoutOneVideo: songResults.filter(
    (result) => result.iframeIds.length !== 1,
  ),
  uniqueSongVideoIds: new Set(songResults.flatMap((result) => result.iframeIds)).size,
};

console.log(JSON.stringify(report, null, 2));

if (
  report.externalAnchorRoutes.length ||
  report.bannedWordRoutes.length ||
  report.internalPatternRoutes.length ||
  report.songRoutesWithoutOneVideo.length ||
  report.uniqueSongVideoIds !== songResults.length
) {
  process.exitCode = 1;
}
