import type { Metadata } from "next";
import { site } from "@/data/site";
import { pageTdk } from "@/seo/tdk";

type SeoEntry = {
  title: string;
  description: string;
  keywords: string[];
};

export const pageSeo = pageTdk as Record<string, SeoEntry>;

export function metadataFor(key: string, path: string): Metadata {
  const entry = pageSeo[key];
  return metadataForEntry(entry, path);
}

export function metadataForEntry(
  entry: SeoEntry,
  path: string,
  type: "website" | "article" = "website",
): Metadata {
  const canonical = new URL(path, site.origin).toString();

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: { canonical },
    openGraph: {
      title: entry.title,
      description: entry.description,
      type,
      url: canonical,
      siteName: site.name,
      locale: "en_US",
      images: [
        {
          url: site.defaultOgImage,
          width: 1200,
          height: 630,
          alt: "hololive Dreams key visual",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [site.defaultOgImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
