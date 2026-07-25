# hololive Dreams Reference

An independent English guide, wiki, and reference site for the `hololive dreams` search topic. The site serves US / Global English readers and is not affiliated with COVER Corporation, hololive production, QualiArts, or the game publisher.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- CSS Modules
- Local JSON/TypeScript content data

## Local commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

These commands are defined in `package.json`. The project currently has no deployment configuration and has not been deployed or committed by the staged workflow.

## Public pages

- Home: `/`
- Reference: `/wiki`, `/holomems`, 54 `/holomems/<slug>` member profiles, `/songs`, 154 `/songs/<slug>` song records, `/wiki/systems`
- Guides: `/guides` plus two statically generated guide detail routes
- Platform and support: `/download`, `/system-requirements`, `/help`
- Freshness and release: `/updates`
- Gameplay guide: `/hololive-dreams-gameplay`
- Trust and policy: `/about`, `/contact`, `/editorial-policy`, `/privacy`, `/terms`, `/copyright`

The sitemap contains 224 indexable public routes. The generated framework 404 route is not included.

## Technical SEO

- Site defaults and placeholder state: `src/data/site.ts`
- Page titles, descriptions, canonicals, Open Graph, and Twitter Cards: `src/seo/pageSeo.ts`
- Indexable route inventory: `src/seo/sitemap.ts`
- JSON-LD helpers: `src/seo/structuredData.tsx`
- Next.js sitemap route: `src/app/sitemap.ts`
- Next.js robots route: `src/app/robots.ts`
- Runtime validation: `scripts/validate-routes.mjs`

All indexable pages use a unique English title and description, a self-referencing canonical, Open Graph metadata, and a Twitter large-image card. A site-level `WebSite` JSON-LD object is rendered globally. Guide pages add visible-content-backed `WebPage`, `BreadcrumbList`, and `FAQPage` data. Member profiles and song records add `WebPage` and `BreadcrumbList` data. The gameplay guide also adds visible-content-backed `FAQPage` data.

## Sitemap and robots

- Sitemap URL: `/sitemap.xml`
- Robots URL: `/robots.txt`
- Generation: native Next.js metadata routes
- Sitemap source: the 224-route inventory in `src/seo/sitemap.ts`
- Robots behavior: public crawling allowed, with the sitemap URL declared

No `lastmod` values are emitted because the project does not yet have a durable per-page publication history suitable for automated sitemap dates.

## Social and identity assets

- Default Open Graph image: `/images/og-image.png`
- OG image status: project-local 1200×630 social image
- Default site logo: `/images/logo.png`
- Favicon: `/images/ico.ico`

## Production domain and email

The configured production origin is `https://hololive-dreams.org`. Technical SEO uses this origin for:

- canonicals;
- sitemap URLs;
- the robots sitemap directive;
- Open Graph URLs;
- JSON-LD URLs.

The configured editorial email is `wyong@hololive-dreams.org`.

Before launch, confirm the origin TLS certificate and email delivery, then test every canonical, sitemap URL, robots directive, social URL, structured-data URL, and visible contact reference on the public host.

## Legal and footer

The site exposes these policy and identity pages:

- Privacy Policy: `/privacy`
- Terms of Service: `/terms`
- Copyright Notice: `/copyright`
- About Us: `/about`
- Contact Us: `/contact`
- Editorial method: `/editorial-policy`

All five required Legal links appear in the footer with `rel="nofollow noopener noreferrer"`. The footer and Copyright page use `Copyright © 2026 hololive Dreams Reference. All rights reserved.`

The current Privacy and Terms text describes a site without analytics, ads, accounts, forms, payments, or uploads. Re-review both pages if production hosting, analytics, advertising, forms, or other data-processing services are added.

## Content and media boundaries

- Game facts prioritize official and platform sources recorded in `research/sources.json`.
- Member detail pages combine the official hololive Dreams roster, 54 canonical hololive production talent profiles, their available official profile fields/Q&A, and the dated in-game music catalog. Refresh the official profile dataset with `npm run sync:profiles`.
- Talent-profile facts are kept separate from member-specific game mechanics; no unsupported card tier, skill value, unlock route, or recommended build is inferred.
- Community material may identify questions but is not used as a stable factual source without verification.
- Official video previews use local YouTube-provided thumbnails and external links; no video/audio is hosted and no player is embedded.
- Song data is a dated July 24, 2026 official catalog snapshot. Each of the 154 entries has a detail route with credits, exact-performer catalog context, roster links where names match directly, and related entries; lyrics are not reproduced.
- Game names, artwork, screenshots, videos, music, talent names, and trademarks remain with their respective owners.

## Manual pre-launch checklist

1. Fix the production origin TLS error and confirm HTTPS returns the site.
2. Configure and test MX records for `wyong@hololive-dreams.org`.
3. Build the site and crawl all 224 sitemap URLs on the final origin.
4. Confirm each canonical, `og:url`, sitemap entry, robots sitemap directive, and JSON-LD URL uses the final origin.
5. Validate generated JSON-LD with Schema.org or a suitable rich-result validator; FAQ rich-result display is not guaranteed.
6. Test the 1200×630 social image from the deployed public URL.
7. Recheck Privacy and Terms against the actual hosting, analytics, advertising, and contact setup.
8. Confirm video embeds and current media assets still load.
9. Perform responsive, accessibility, performance, and browser QA before any deployment.

## Known unresolved items

- The domain resolves through Cloudflare but currently returns HTTP 525.
- No MX record was detected for the supplied email domain.
- Android has no single universal minimum recorded for all devices.
- A stable official English account-transfer procedure is not available.
- The catalog and game-support facts are date-sensitive and require future refreshes.
