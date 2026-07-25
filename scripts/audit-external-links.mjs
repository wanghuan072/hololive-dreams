const baseUrl = process.env.LINK_AUDIT_BASE_URL ?? "http://localhost:3109";
const sitemapXml = await (await fetch(`${baseUrl}/sitemap.xml`)).text();
const routes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname);
const externalUrls = new Set();

for (const route of routes) {
  const html = await (await fetch(`${baseUrl}${route}`)).text();
  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (/^https?:\/\//i.test(href)) externalUrls.add(href);
  }
}

const results = [];
for (const url of [...externalUrls].sort()) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(20_000),
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; hololive-Dreams-Reference-QA/1.0)",
      },
    });
    results.push({
      url,
      status: response.status,
      finalHost: new URL(response.url).hostname,
      result:
        response.status < 400 || [401, 403, 405, 429].includes(response.status)
          ? "reachable"
          : "failed",
    });
  } catch (error) {
    results.push({
      url,
      status: "error",
      finalHost: "",
      result: "unverified",
      error: error instanceof Error ? error.name : "unknown error",
    });
  }
}

console.table(results);
const failures = results.filter((item) => item.result === "failed");
const unverified = results.filter((item) => item.result === "unverified");
console.log(JSON.stringify({
  checked: results.length,
  reachable: results.filter((item) => item.result === "reachable").length,
  unverified,
  failures,
}, null, 2));

if (failures.length) process.exitCode = 1;
