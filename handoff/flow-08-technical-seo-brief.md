# Flow 08 Technical SEO Brief

## Status

- Status: `completed_with_warnings`
- Date: 2026-07-24
- Agent: `flow-08-technical-seo-agent`
- Project: `hololive dreams`
- Warning: production domain and independent editorial email are still placeholders

## Completed Technical SEO Items

- Metadata: 24/24 unique titles and descriptions
- Canonical: 24/24 self-referencing URLs, consistent with sitemap and OG
- Sitemap: native `/sitemap.xml`, 24 formal pages
- Robots: native `/robots.txt`, crawl allowed, sitemap declared
- Structured data: WebSite globally; WebPage, BreadcrumbList, and visible FAQPage on all eight guides
- Open Graph: complete on 24 pages
- Twitter Card: complete `summary_large_image` on 24 pages
- Placeholder domain: `https://example.com`, documented and centralized
- Placeholder OG image: no; existing project-local 1200×630 derivative used
- Placeholder logo: yes, `/images/logo.svg`
- SEO directory: `src/seo/`
- Legal pages: Privacy, Terms, Copyright, About, Contact, plus Editorial Policy
- Footer Legal links: five required links with `rel="nofollow noopener noreferrer"`
- Internal links: 24-route crawl found no unknown links
- Image/media SEO: local OG exists; guide thumbnails have alt and lazy loading; no iframe
- README: created with operations, SEO map, placeholders, legal status, and pre-launch checklist

## Page And URL Inventory

All paths below are included in the sitemap and use `https://example.com<path>` as the placeholder canonical. The root canonical is `https://example.com`.

| Page group | Paths | Count | Schema |
| --- | --- | ---: | --- |
| Home | `/` | 1 | WebSite |
| Reference | `/wiki`, `/holomems`, `/songs`, `/wiki/systems` | 4 | WebSite |
| Guide index | `/guides` | 1 | WebSite |
| Guide details | Eight `/guides/<slug>` routes | 8 | WebSite, WebPage, BreadcrumbList, FAQPage |
| Platform/support | `/download`, `/system-requirements`, `/help` | 3 | WebSite |
| Updates | `/updates` | 1 | WebSite |
| Trust/legal | `/about`, `/contact`, `/editorial-policy`, `/privacy`, `/terms`, `/copyright` | 6 | WebSite |
| Total |  | 24 |  |

## Sitemap And Robots Locations

- Sitemap source: `src/app/sitemap.ts`
- Route inventory: `src/seo/sitemap.ts`
- Public sitemap: `/sitemap.xml`
- Robots source: `src/app/robots.ts`
- Public robots: `/robots.txt`
- Generation method: native Next.js metadata routes
- Placeholder domain used: yes
- Manual check: replace the origin, rebuild, and crawl from the final public host before launch

## Placeholder Assets And Domain

- Placeholder domain: `https://example.com`
- Placeholder email: `wyong@example.com`
- URLs requiring replacement: canonical, sitemap, robots directive, OG URL, JSON-LD URL
- OG image: `/images/hero/hololive-dreams-og.jpg`
- OG source: existing project-local 1200×630 derivative recorded in Flow 05
- Logo: `/images/logo.svg`
- Logo source: Flow 08 temporary independent initials mark
- Replacement notes: neither the domain, email, nor logo should be treated as production identity

## SEO Directory

- `src/seo/pageSeo.ts`: static page SEO
- `src/seo/sitemap.ts`: indexability/page inventory
- `src/seo/structuredData.tsx`: JSON-LD
- `src/app/layout.tsx`: global integration
- `src/app/guides/[slug]/page.tsx`: guide graph integration

## Legal Pages And Footer

| Page | Path | Footer | Rel | Sitemap |
| --- | --- | --- | --- | --- |
| Privacy Policy | `/privacy` | Present | `nofollow noopener noreferrer` | Included |
| Terms of Service | `/terms` | Present | `nofollow noopener noreferrer` | Included |
| Copyright | `/copyright` | Present | `nofollow noopener noreferrer` | Included |
| About Us | `/about` | Present | `nofollow noopener noreferrer` | Included |
| Contact Us | `/contact` | Present | `nofollow noopener noreferrer` | Included |

- Contact email: `wyong@example.com` placeholder
- Official support: `en_support@hololive-dreams.com`, separately labeled
- Footer copyright: `Copyright © 2026 hololive Dreams Reference. All rights reserved.`
- Privacy/Terms must be reviewed if production analytics, ads, forms, or hosting change site behavior

## Schema Inventory

| Page group | Schema | Status | Risk |
| --- | --- | --- | --- |
| All pages | WebSite | Added/validated | URL is placeholder |
| Eight guide details | WebPage | Added/validated | URL is placeholder |
| Eight guide details | BreadcrumbList | Added/validated | None observed |
| Eight guide details | FAQPage | Added/validated | Rich-result display not guaranteed |
| Video preview sections | VideoObject | Intentionally omitted | External links are not hosted/embedded videos |
| Site identity | Organization/Person | Intentionally omitted | Real operator/author details not supplied |

## Validation Results

| Check | Result |
| --- | --- |
| Lint | Passed |
| Typecheck | Passed |
| Build | Passed; 29 generated outputs |
| Route/TDK/H1/internal links | Passed, 24/24 |
| Content depth | Passed, 24/24 |
| Sitemap/robots/canonical/OG/Twitter | Passed |
| JSON-LD parsing and FAQ parity | Passed |
| Legal footer rel and asset existence | Passed |
| Browser contact/footer semantic and visual checks | Passed |

## Known Risks

- Placeholder domain and editorial email are pre-launch blockers.
- Temporary initials logo requires human approval or replacement.
- Privacy and Terms reflect no analytics, ads, forms, accounts, or payments.
- External official links and social previews require final-host checks.
- The 154-entry Songs page remains the main responsive/performance stress route.

## Focus For Flow 09 Full-Site Check

- Crawl all 24 public routes, sitemap, robots, icon, OG image, and logo.
- Validate canonical/OG/schema alignment and the placeholder-domain warning.
- Inspect guide FAQ schema against visible text.
- Confirm no inappropriate VideoObject, Organization, Person, rating, review, or author data.
- Test desktop/mobile navigation, footer, Copyright, Contact, Songs, and Minigames.
- Check external official store, support, source, and YouTube links.
- Run accessibility, performance, responsive, and content-boundary checks.
- Stop after the final report/handoff; do not deploy or commit Git.

## Next Flow Inputs

Flow 09 should read:

- `project.yaml`
- `AGENTS.md`
- `research/sources.json`
- `research/keyword-research.md`
- `research/video-research.md`
- `planning/site-structure.md`
- `planning/content-map.json`
- reports and handoffs from Flows 05–08
- `README.md`
- current website code, SEO directory, Legal routes, footer, build output, sitemap, and robots

## Open Questions

- Production domain
- Independent editorial email
- Final site-owned logo
- Production hosting/analytics/advertising/form services

