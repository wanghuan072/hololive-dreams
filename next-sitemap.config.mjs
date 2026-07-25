const siteUrl = process.env.SITE_URL || "https://hololive-dreams.org";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  autoLastmod: false,
  exclude: ["/holomems", "/holomems/*", "/icon.svg", "/robots.txt"],
  changefreq: "weekly",
  priority: 0.7,
  transform: async (configValue, path) => ({
    loc: path,
    changefreq:
      path === "/updates" || path === "/songs" ? "daily" : configValue.changefreq,
    priority:
      path === "/"
        ? 1
        : ["/wiki", "/characters", "/songs", "/guides"].includes(path)
          ? 0.9
          : path.startsWith("/legal/")
            ? 0.3
            : configValue.priority,
  }),
};

export default config;
