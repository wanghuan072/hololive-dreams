import { rm } from "node:fs/promises";

const generatedSitemaps = ["public/sitemap.xml", "public/sitemap-0.xml"];

await Promise.all(
  generatedSitemaps.map((file) => rm(file, { force: true })),
);
