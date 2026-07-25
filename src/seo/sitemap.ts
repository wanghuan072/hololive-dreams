import { guides } from "@/data/guides";
import { holomems } from "@/data/holomems";
import { songs } from "@/data/songs";

export type IndexableRoute = {
  path: string;
  pageType: string;
  sourceFile: string;
  hasFaq: boolean;
  hasVideo: boolean;
  schema: string[];
};

const staticRoutes: IndexableRoute[] = [
  { path: "/", pageType: "home", sourceFile: "src/app/page.tsx", hasFaq: true, hasVideo: false, schema: ["WebSite"] },
  { path: "/wiki", pageType: "wiki index", sourceFile: "src/app/wiki/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite"] },
  { path: "/characters", pageType: "character index", sourceFile: "src/app/characters/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite"] },
  { path: "/songs", pageType: "database index", sourceFile: "src/app/songs/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite"] },
  { path: "/wiki/systems", pageType: "reference page", sourceFile: "src/app/wiki/systems/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite"] },
  { path: "/guides", pageType: "guide index", sourceFile: "src/app/guides/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite"] },
  { path: "/system-requirements", pageType: "reference page", sourceFile: "src/app/system-requirements/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite"] },
  { path: "/updates", pageType: "updates page", sourceFile: "src/app/updates/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite", "CollectionPage", "BreadcrumbList", "ItemList", "Article"] },
  { path: "/hololive-dreams-gameplay", pageType: "gameplay guide", sourceFile: "src/app/hololive-dreams-gameplay/page.tsx", hasFaq: true, hasVideo: false, schema: ["WebSite", "WebPage", "BreadcrumbList", "FAQPage"] },
  { path: "/legal/privacy-policy", pageType: "privacy policy", sourceFile: "src/app/legal/privacy-policy/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite", "WebPage", "BreadcrumbList"] },
  { path: "/legal/terms-of-service", pageType: "terms of service", sourceFile: "src/app/legal/terms-of-service/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite", "WebPage", "BreadcrumbList"] },
  { path: "/legal/copyright", pageType: "copyright notice", sourceFile: "src/app/legal/copyright/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite", "WebPage", "BreadcrumbList"] },
  { path: "/legal/about-us", pageType: "about page", sourceFile: "src/app/legal/about-us/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite", "WebPage", "BreadcrumbList"] },
  { path: "/legal/contact-us", pageType: "contact page", sourceFile: "src/app/legal/contact-us/page.tsx", hasFaq: false, hasVideo: false, schema: ["WebSite", "WebPage", "BreadcrumbList"] },
];

const guideRoutes: IndexableRoute[] = guides.map((guide) => ({
  path: `/guides/${guide.addressBar}`,
  pageType: "guide article",
  sourceFile: "src/app/guides/[slug]/page.tsx",
  hasFaq: true,
  hasVideo: false,
  schema: ["WebSite", "WebPage", "Article", "BreadcrumbList", "FAQPage"],
}));

const characterRoutes: IndexableRoute[] = holomems.map((member) => ({
  path: `/characters/${member.slug}`,
  pageType: "character detail",
  sourceFile: "src/app/characters/[slug]/page.tsx",
  hasFaq: false,
  hasVideo: false,
  schema: ["WebSite", "ProfilePage", "Person", "BreadcrumbList"],
}));

const songRoutes: IndexableRoute[] = songs.map((song) => ({
  path: `/songs/${song.slug}`,
  pageType: "song detail",
  sourceFile: "src/app/songs/[slug]/page.tsx",
  hasFaq: false,
  hasVideo: true,
  schema: ["WebSite", "WebPage", "MusicRecording", "VideoObject", "BreadcrumbList"],
}));

export const indexableRoutes = [
  ...staticRoutes,
  ...guideRoutes,
  ...characterRoutes,
  ...songRoutes,
];
