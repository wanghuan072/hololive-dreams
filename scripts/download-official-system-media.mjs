import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceOrigin = "https://www.hololive-dreams.com";
const accessedAt = "2026-07-24T00:00:00+08:00";
const outputDirectory = path.join(process.cwd(), "public", "images", "official-system");
const logPath = path.join(process.cwd(), "research", "flow-06-system-asset-sources.json");

const assets = [
  {
    id: "rhythm-live",
    sourcePage: `${sourceOrigin}/en/system`,
    sourcePath: "/_vercel/image?url=_astro%2Fimg_rhythm.CzuXqCE3.png&w=3840&q=100",
    fileName: "hololive-dreams-rhythm-live.webp",
    alt: "Rhythm Live gameplay shown on the official hololive Dreams system page",
    usage: ["/wiki/systems", "/guides/rhythm-timing", "/guides/create-chart"],
  },
  {
    id: "hoppin-rope",
    sourcePage: `${sourceOrigin}/en/system`,
    sourcePath: "/_vercel/image?url=_astro%2Fimg_minigame.C549Ix8y.png&w=3840&q=100",
    fileName: "hololive-dreams-hoppin-rope.webp",
    alt: "Hoppin' Rope group minigame shown on the official system page",
    usage: ["/guides/minigames"],
  },
  {
    id: "invitation-ticket",
    sourcePage: `${sourceOrigin}/en/system`,
    sourcePath: "/_vercel/image?url=_astro%2Fquest_screenshot2.DObaaW6D.png&w=3840&q=100",
    fileName: "hololive-dreams-invitation-ticket.webp",
    alt: "Invitation ticket screen from the official hololive Dreams system page",
    usage: ["/guides/unlock-holomems"],
  },
  {
    id: "team-board",
    sourcePage: `${sourceOrigin}/en/system`,
    sourcePath: "/_vercel/image?url=_astro%2Fpoint2_img1_land.CZ2QXkEE.png&w=3840&q=100",
    fileName: "hololive-dreams-team-board.webp",
    alt: "Holomem team and skill synergy screen from the official system page",
    usage: ["/guides/team-building-holomem-board"],
  },
  {
    id: "dream-park-developed",
    sourcePage: `${sourceOrigin}/en/park`,
    sourcePath: "/_vercel/image?url=_astro%2F12.CEFYW6a3.png&w=3840&q=100",
    fileName: "hololive-dreams-developed-park.webp",
    alt: "A developed Dream Park stage from the official hololive Dreams park page",
    usage: ["/guides/dream-park-progression"],
  },
];

await mkdir(outputDirectory, { recursive: true });

for (const asset of assets) {
  const originalUrl = new URL(asset.sourcePath, sourceOrigin).toString();
  const response = await fetch(originalUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 hololive-dreams-reference-research",
      Referer: asset.sourcePage,
      Accept: "image/avif,image/webp,*/*",
    },
  });
  if (!response.ok) {
    throw new Error(`${asset.id} download failed: HTTP ${response.status}`);
  }

  const bytes = new Uint8Array(await response.arrayBuffer());
  await writeFile(path.join(outputDirectory, asset.fileName), bytes);
  asset.originalUrl = originalUrl;
  asset.localPath = `public/images/official-system/${asset.fileName}`;
  asset.publicPath = `/images/official-system/${asset.fileName}`;
  asset.byteSize = bytes.byteLength;
  asset.contentType = response.headers.get("content-type");
  asset.status = "adopted";
}

await writeFile(
  logPath,
  `${JSON.stringify(
    {
      metadata: {
        flow: "06-full-web-content-supplement",
        accessedAt,
        assetCount: assets.length,
      },
      assets,
    },
    null,
    2,
  )}\n`,
);

console.log(`Downloaded ${assets.length} official system images.`);
