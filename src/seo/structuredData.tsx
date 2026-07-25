import { site } from "@/data/site";
import { pageSeo } from "@/seo/pageSeo";

type JsonLdValue = Record<string, unknown>;
type Faq = { question: string; answer: string };

export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function PageStructuredData({
  seoKey,
  path,
  breadcrumb,
  dateModified,
}: {
  seoKey: string;
  path: string;
  breadcrumb: { name: string; path: string }[];
  dateModified?: string;
}) {
  const entry = pageSeo[seoKey];
  return (
    <JsonLd
      data={referencePageSchema({
        path,
        title: entry.title,
        description: entry.description,
        imageUrl: site.defaultOgImage,
        dateModified,
        breadcrumb,
      })}
    />
  );
}

export const websiteSchema: JsonLdValue = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.origin}/#website`,
  name: site.name,
  url: site.origin,
  description: site.description,
  inLanguage: "en",
};

export function guidePageSchema(input: {
  path: string;
  title: string;
  description: string;
  imageUrl: string;
  faqs: Faq[];
  datePublished: string;
  dateModified: string;
}): JsonLdValue {
  const pageUrl = new URL(input.path, site.origin).toString();
  const guideIndexUrl = new URL("/guides", site.origin).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: input.title,
        description: input.description,
        inLanguage: "en",
        datePublished: input.datePublished,
        dateModified: input.dateModified,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${site.origin}/#website`,
          name: site.name,
          url: site.origin,
        },
        primaryImageOfPage: new URL(input.imageUrl, site.origin).toString(),
        mainEntity: {
          "@id": `${pageUrl}#article`,
        },
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: input.title,
        description: input.description,
        image: new URL(input.imageUrl, site.origin).toString(),
        datePublished: input.datePublished,
        dateModified: input.dateModified,
        inLanguage: "en",
        mainEntityOfPage: {
          "@id": `${pageUrl}#webpage`,
        },
        author: {
          "@type": "Organization",
          name: site.name,
          url: site.origin,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.origin,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guides",
            item: guideIndexUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: input.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: input.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function faqPageSchema(faqs: Faq[], path: string): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${new URL(path, site.origin).toString()}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function referencePageSchema(input: {
  path: string;
  title: string;
  description: string;
  imageUrl?: string;
  dateModified?: string;
  breadcrumb: { name: string; path: string }[];
}): JsonLdValue {
  const pageUrl = new URL(input.path, site.origin).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: input.title,
        description: input.description,
        inLanguage: "en",
        ...(input.dateModified ? { dateModified: input.dateModified } : {}),
        isPartOf: {
          "@type": "WebSite",
          "@id": `${site.origin}/#website`,
          name: site.name,
          url: site.origin,
        },
        ...(input.imageUrl
          ? {
              primaryImageOfPage: new URL(
                input.imageUrl,
                site.origin,
              ).toString(),
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: input.breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: new URL(item.path, site.origin).toString(),
        })),
      },
    ],
  };
}

export function songPageSchema(input: {
  path: string;
  title: string;
  description: string;
  imageUrl: string;
  songTitle: string;
  performer: string;
  performerNames: string[];
  videoId: string;
  videoTitle: string;
  videoDuration: number | null;
  dateModified: string;
  breadcrumb: { name: string; path: string }[];
}): JsonLdValue {
  const pageUrl = new URL(input.path, site.origin).toString();
  const imageUrl = new URL(input.imageUrl, site.origin).toString();
  const performers = input.performerNames.length
    ? input.performerNames.map((name) => ({
        "@type": "Person",
        name,
      }))
    : [
        {
          "@type": "MusicGroup",
          name: input.performer,
        },
      ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: input.title,
        description: input.description,
        inLanguage: "en",
        dateModified: input.dateModified,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${site.origin}/#website`,
          name: site.name,
          url: site.origin,
        },
        primaryImageOfPage: imageUrl,
        mainEntity: {
          "@id": `${pageUrl}#recording`,
        },
        video: {
          "@id": `${pageUrl}#video`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: input.breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: new URL(item.path, site.origin).toString(),
        })),
      },
      {
        "@type": "MusicRecording",
        "@id": `${pageUrl}#recording`,
        name: input.songTitle,
        url: pageUrl,
        image: imageUrl,
        byArtist: performers,
        isPartOf: {
          "@type": "CreativeWork",
          name: "hololive Dreams song catalog",
        },
      },
      {
        "@type": "VideoObject",
        "@id": `${pageUrl}#video`,
        name: input.videoTitle,
        description: `Watch a video for ${input.songTitle} while reading its hololive Dreams song guide.`,
        thumbnailUrl: imageUrl,
        embedUrl: `https://www.youtube-nocookie.com/embed/${input.videoId}`,
        ...(input.videoDuration
          ? { duration: `PT${Math.round(input.videoDuration)}S` }
          : {}),
        isFamilyFriendly: true,
      },
    ],
  };
}

export function characterPageSchema(input: {
  path: string;
  title: string;
  description: string;
  imageUrl: string;
  characterName: string;
  dateModified: string;
  breadcrumb: { name: string; path: string }[];
}): JsonLdValue {
  const pageUrl = new URL(input.path, site.origin).toString();
  const base = referencePageSchema({
    path: input.path,
    title: input.title,
    description: input.description,
    imageUrl: input.imageUrl,
    dateModified: input.dateModified,
    breadcrumb: input.breadcrumb,
  });
  const graph = (base["@graph"] as JsonLdValue[]) ?? [];
  const [webPage = {}, ...rest] = graph;

  return {
    ...base,
    "@graph": [
      {
        ...webPage,
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          "@id": `${pageUrl}#character`,
          name: input.characterName,
          description: input.description,
          image: new URL(input.imageUrl, site.origin).toString(),
        },
      },
      ...rest,
    ],
  };
}

export function updatesPageSchema(input: {
  path: string;
  title: string;
  description: string;
  dateModified: string;
  updates: { date: string; title: string; detail: string }[];
}): JsonLdValue {
  const pageUrl = new URL(input.path, site.origin).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: input.title,
        description: input.description,
        inLanguage: "en",
        dateModified: input.dateModified,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${site.origin}/#website`,
          name: site.name,
          url: site.origin,
        },
        mainEntity: {
          "@id": `${pageUrl}#timeline`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.origin,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Updates",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#timeline`,
        itemListElement: input.updates.map((update, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Article",
            headline: update.title,
            description: update.detail,
            datePublished: update.date,
            dateModified: update.date,
            mainEntityOfPage: pageUrl,
          },
        })),
      },
    ],
  };
}
