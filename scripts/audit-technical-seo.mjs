import fs from "node:fs";
import path from "node:path";

const baseUrl = process.env.SEO_AUDIT_BASE_URL ?? "http://localhost:3108";
const productionOrigin = "https://hololive-dreams.org";
const expectedLegalLinks = [
  "/legal/privacy-policy",
  "/legal/terms-of-service",
  "/legal/copyright",
  "/legal/about-us",
  "/legal/contact-us",
];

const decode = (value) =>
  value
    ?.replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">") ?? null;

function attribute(tag, name) {
  const match = tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"));
  return match?.[1] ?? null;
}

function tags(html, name) {
  return html.match(new RegExp(`<${name}\\b[^>]*>`, "gi")) ?? [];
}

function metaContent(html, attributeName, value) {
  return tags(html, "meta")
    .find((tag) => attribute(tag, attributeName) === value)
    ?.match(/content=["']([^"']+)["']/i)?.[1] ?? null;
}

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
const sitemapXml = await sitemapResponse.text();
const sitemapLocations = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const uniqueLocations = new Set(sitemapLocations);

if (!sitemapResponse.ok) throw new Error(`Sitemap returned ${sitemapResponse.status}`);
if (!sitemapLocations.length) throw new Error("Sitemap contains no URLs");
if (uniqueLocations.size !== sitemapLocations.length) throw new Error("Duplicate sitemap URLs found");
if (sitemapLocations.some((url) => url !== productionOrigin && !url.startsWith(`${productionOrigin}/`))) {
  throw new Error("Sitemap contains an unexpected origin");
}

const robotsResponse = await fetch(`${baseUrl}/robots.txt`);
const robotsText = await robotsResponse.text();
if (!robotsResponse.ok) throw new Error(`robots.txt returned ${robotsResponse.status}`);
if (!robotsText.includes("Allow: /")) throw new Error("robots.txt does not allow public crawling");
if (!robotsText.includes(`Sitemap: ${productionOrigin}/sitemap.xml`)) {
  throw new Error("robots.txt sitemap directive does not match the placeholder canonical origin");
}

const pageRows = [];
const titles = new Map();
const descriptions = new Map();

for (const location of sitemapLocations) {
  const canonicalUrl = new URL(location);
  const route = canonicalUrl.pathname;
  const response = await fetch(`${baseUrl}${route}`);
  const html = await response.text();
  const title = decode(html.match(/<title>([^<]+)<\/title>/i)?.[1]);
  const description = decode(metaContent(html, "name", "description"));
  const canonicalTag = tags(html, "link").find((tag) => attribute(tag, "rel") === "canonical");
  const canonicalHref = canonicalTag ? attribute(canonicalTag, "href") : null;
  const ogTitle = decode(metaContent(html, "property", "og:title"));
  const ogDescription = decode(metaContent(html, "property", "og:description"));
  const ogUrl = metaContent(html, "property", "og:url");
  const ogImage = metaContent(html, "property", "og:image");
  const twitterCard = metaContent(html, "name", "twitter:card");
  const twitterTitle = decode(metaContent(html, "name", "twitter:title"));
  const twitterDescription = decode(metaContent(html, "name", "twitter:description"));
  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => JSON.parse(match[1]));

  if (!response.ok) throw new Error(`${route} returned ${response.status}`);
  if (!title || !description) throw new Error(`${route} is missing title or description`);
  if (title.length < 40 || title.length > 60) {
    throw new Error(`${route} title length is ${title.length}; expected 40-60`);
  }
  if (description.length < 140 || description.length > 160) {
    throw new Error(`${route} description length is ${description.length}; expected 140-160`);
  }
  if (canonicalHref !== location) throw new Error(`${route} canonical mismatch: ${canonicalHref}`);
  if (ogTitle !== title || ogDescription !== description || ogUrl !== location || !ogImage) {
    throw new Error(`${route} has incomplete or inconsistent Open Graph metadata`);
  }
  if (twitterCard !== "summary_large_image" || twitterTitle !== title || twitterDescription !== description) {
    throw new Error(`${route} has incomplete or inconsistent Twitter metadata`);
  }
  if (jsonLdBlocks.length < 1) throw new Error(`${route} has no valid JSON-LD`);
  const jsonLdNodes = jsonLdBlocks.flatMap((block) =>
    Array.isArray(block["@graph"]) ? block["@graph"] : [block],
  );
  if (
    !jsonLdNodes.some((node) =>
      ["WebPage", "ProfilePage", "CollectionPage"].includes(node["@type"]),
    )
  ) {
    throw new Error(`${route} has no page-level structured data`);
  }
  if (route.startsWith("/guides/")) {
    const graph = jsonLdBlocks.find((block) => Array.isArray(block["@graph"]))?.["@graph"] ?? [];
    const graphTypes = new Set(graph.map((item) => item["@type"]));
    const faq = graph.find((item) => item["@type"] === "FAQPage");
    if (
      !graphTypes.has("WebPage") ||
      !graphTypes.has("Article") ||
      !graphTypes.has("BreadcrumbList") ||
      !faq
    ) {
      throw new Error(`${route} is missing guide article, breadcrumb, or FAQ data`);
    }
    if (!Array.isArray(faq.mainEntity) || faq.mainEntity.length !== 4) {
      throw new Error(`${route} FAQ schema does not match the four visible questions`);
    }
  }
  if (route.startsWith("/characters/")) {
    const types = new Set(jsonLdNodes.map((node) => node["@type"]));
    if (!types.has("ProfilePage") || !types.has("BreadcrumbList")) {
      throw new Error(`${route} is missing ProfilePage or BreadcrumbList data`);
    }
    const profile = jsonLdNodes.find((node) => node["@type"] === "ProfilePage");
    if (profile?.mainEntity?.["@type"] !== "Person") {
      throw new Error(`${route} ProfilePage does not identify its character`);
    }
  }
  if (route.startsWith("/songs/")) {
    const types = new Set(jsonLdNodes.map((node) => node["@type"]));
    if (
      !types.has("WebPage") ||
      !types.has("MusicRecording") ||
      !types.has("VideoObject") ||
      !types.has("BreadcrumbList")
    ) {
      throw new Error(`${route} is missing song, video, page, or breadcrumb data`);
    }
    const video = jsonLdNodes.find((node) => node["@type"] === "VideoObject");
    if (!video?.embedUrl?.startsWith("https://www.youtube-nocookie.com/embed/")) {
      throw new Error(`${route} VideoObject does not match the privacy-enhanced embed`);
    }
  }
  if (route === "/updates") {
    const types = new Set(jsonLdNodes.map((node) => node["@type"]));
    if (!types.has("CollectionPage") || !types.has("ItemList")) {
      throw new Error("/updates is missing CollectionPage or ItemList data");
    }
  }

  titles.set(title, [...(titles.get(title) ?? []), route]);
  descriptions.set(description, [...(descriptions.get(description) ?? []), route]);
  pageRows.push({
    route,
    status: response.status,
    canonical: canonicalHref,
    jsonLdBlocks: jsonLdBlocks.length,
  });
}

const duplicateTitles = [...titles.entries()].filter(([, routes]) => routes.length > 1);
const duplicateDescriptions = [...descriptions.entries()].filter(([, routes]) => routes.length > 1);
if (duplicateTitles.length) throw new Error(`Duplicate titles: ${JSON.stringify(duplicateTitles)}`);
if (duplicateDescriptions.length) throw new Error(`Duplicate descriptions: ${JSON.stringify(duplicateDescriptions)}`);

const homeHtml = await (await fetch(baseUrl)).text();
for (const href of expectedLegalLinks) {
  const legalAnchor = tags(homeHtml, "a").find(
    (tag) =>
      attribute(tag, "href") === href &&
      attribute(tag, "rel") === "noopener noreferrer nofollow",
  );
  const rel = legalAnchor ? attribute(legalAnchor, "rel") : null;
  if (rel !== "noopener noreferrer nofollow") {
    throw new Error(`Footer legal link ${href} has unexpected rel: ${rel}`);
  }
}

const ogImagePath = path.join(process.cwd(), "public", "images", "og-image.png");
const logoPath = path.join(process.cwd(), "public", "images", "logo.svg");
if (!fs.existsSync(ogImagePath)) throw new Error("Default OG image is missing");
if (!fs.existsSync(logoPath)) throw new Error("Default logo is missing");

console.table(pageRows);
console.log(JSON.stringify({
  sitemapStatus: sitemapResponse.status,
  sitemapUrls: sitemapLocations.length,
  robotsStatus: robotsResponse.status,
  uniqueTitles: titles.size,
  uniqueDescriptions: descriptions.size,
  legalFooterLinks: expectedLegalLinks.length,
  defaultOgImage: fs.statSync(ogImagePath).size,
  defaultLogo: fs.statSync(logoPath).size,
}, null, 2));
