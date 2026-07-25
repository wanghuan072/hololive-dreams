# Flow 08 Technical SEO Report

## Status

- Status: `completed_with_warnings`
- Agent: `flow-08-technical-seo-agent`
- Date: 2026-07-24
- Project: `hololive dreams`
- Project directory: `D:\WH\202607\hololive dreams\hololive dreams`
- Warning reason: the production domain and independent editorial inbox remain unspecified, so auditable placeholders are still active.

## Stage Goal

This stage configured technical SEO for the finished English site: page metadata, canonical consistency, native sitemap and robots routes, truthful structured data, social previews, semantic/legal requirements, runtime validation, and project documentation. It did not redo keyword research, redesign the site, deploy, or commit Git.

## Inputs Reviewed

- `project.yaml`
- `AGENTS.md`
- Flow 01–07 required handoffs and reports
- `research/sources.json`
- `research/keyword-research.md`
- `research/video-research.md`
- `planning/site-structure.md`
- `planning/content-map.json`
- `planning/design-brief.md`
- Current Next.js routes, components, content data, SEO files, images, package scripts, and production output

## Project Context

- Main keyword: `hololive dreams`
- Site name: `hololive Dreams Reference`
- Domain or planned domain: not supplied
- Placeholder domain used: yes
- Placeholder domain value: `https://example.com`
- Framework: Next.js 16.2.11 App Router
- Package manager: npm
- Language: English
- Target market: US / Global English
- Sitemap allowed: yes
- Robots allowed: yes
- Validation commands allowed: yes
- Multilingual: no
- FAQ present: yes, on Home and all eight guide details
- Video embeds present: no; six guide types link externally to official YouTube videos
- SEO directory: `src/seo/`
- Legal/trust pages present: Privacy, Terms, Copyright, About, Contact, Editorial Policy
- Footer Legal links present: five required links
- Legal contact email: `wyong@example.com` placeholder
- Official game support email: `en_support@hololive-dreams.com`, clearly separated
- Default OG image: `/images/hero/hololive-dreams-og.jpg`
- Placeholder OG image used: no; this is an existing project-local 1200×630 derivative with recorded provenance
- Default logo: `/images/logo.svg`
- Placeholder logo used: yes; independent `HD` initials only

## Page Inventory

All listed pages are indexable, use a self-referencing placeholder canonical, and are included in the sitemap. The generated 404 and framework asset routes are excluded.

| Page | Source file | Page type | FAQ | External video references | Schema |
| --- | --- | --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | Home | Yes | No | WebSite |
| `/wiki` | `src/app/wiki/page.tsx` | Wiki index | No | No | WebSite |
| `/holomems` | `src/app/holomems/page.tsx` | Database index | No | No | WebSite |
| `/songs` | `src/app/songs/page.tsx` | Database index | No | No | WebSite |
| `/wiki/systems` | `src/app/wiki/systems/page.tsx` | Reference page | No | No | WebSite |
| `/guides` | `src/app/guides/page.tsx` | Guide index | No | No | WebSite |
| `/guides/getting-started` | `src/app/guides/[slug]/page.tsx` | Guide | Yes | Yes | WebSite, WebPage, BreadcrumbList, FAQPage |
| `/guides/rhythm-timing` | `src/app/guides/[slug]/page.tsx` | Guide | Yes | Yes | WebSite, WebPage, BreadcrumbList, FAQPage |
| `/guides/dream-park-progression` | `src/app/guides/[slug]/page.tsx` | Guide | Yes | Yes | WebSite, WebPage, BreadcrumbList, FAQPage |
| `/guides/unlock-holomems` | `src/app/guides/[slug]/page.tsx` | Guide | Yes | No | WebSite, WebPage, BreadcrumbList, FAQPage |
| `/guides/team-building-holomem-board` | `src/app/guides/[slug]/page.tsx` | Guide | Yes | Yes | WebSite, WebPage, BreadcrumbList, FAQPage |
| `/guides/minigames` | `src/app/guides/[slug]/page.tsx` | Guide | Yes | Yes | WebSite, WebPage, BreadcrumbList, FAQPage |
| `/guides/create-chart` | `src/app/guides/[slug]/page.tsx` | Guide | Yes | Yes | WebSite, WebPage, BreadcrumbList, FAQPage |
| `/guides/performance-settings` | `src/app/guides/[slug]/page.tsx` | Guide | Yes | No | WebSite, WebPage, BreadcrumbList, FAQPage |
| `/download` | `src/app/download/page.tsx` | Official-link guide | No | No | WebSite |
| `/system-requirements` | `src/app/system-requirements/page.tsx` | Reference page | No | No | WebSite |
| `/help` | `src/app/help/page.tsx` | Support router | No | No | WebSite |
| `/updates` | `src/app/updates/page.tsx` | Updates page | No | No | WebSite |
| `/about` | `src/app/about/page.tsx` | About page | No | No | WebSite |
| `/contact` | `src/app/contact/page.tsx` | Contact page | No | No | WebSite |
| `/editorial-policy` | `src/app/editorial-policy/page.tsx` | Editorial policy | No | No | WebSite |
| `/privacy` | `src/app/privacy/page.tsx` | Privacy policy | No | No | WebSite |
| `/terms` | `src/app/terms/page.tsx` | Terms of service | No | No | WebSite |
| `/copyright` | `src/app/copyright/page.tsx` | Copyright notice | No | No | WebSite |

## Metadata Updates

- Static page metadata remains centralized in `src/seo/pageSeo.ts`.
- Added a unique title and description for `/copyright`.
- Verified 24/24 unique titles and 24/24 unique descriptions in production HTML.
- Added `siteName`, `en_US` locale, explicit index/follow robots, and centralized default OG image handling.
- Guide metadata now includes Twitter Card data, consistent OG site/locale fields, and the 1200×630 social image.
- All public metadata is English and matches its H1/page purpose.
- No page claims the site is official, guaranteed safe, certified, best, or endorsed.

## Canonical Check Results

| Page group | Canonical pattern | Result | Notes |
| --- | --- | --- | --- |
| Home | `https://example.com` | Passed with placeholder warning | Root form exactly matches sitemap |
| 15 static non-guide routes | `https://example.com/<path>` | Passed with placeholder warning | No trailing-slash mixture |
| 8 guide routes | `https://example.com/guides/<slug>` | Passed with placeholder warning | Slugs come from real guide data |

Runtime audit confirmed 24/24 canonical values exactly match their sitemap locations and `og:url` values.

## Sitemap Check Results

- Location: `src/app/sitemap.ts` → `/sitemap.xml`
- Generation method: native Next.js MetadataRoute
- Central route inventory: `src/seo/sitemap.ts`
- URLs included: 24 formal public pages
- URLs excluded: generated 404, icon route, robots, sitemap, framework assets, and nonexistent test/draft/search pages
- Dynamic URLs: generated from the eight real guide records
- `lastmod`: intentionally omitted; no durable per-page publication history is available
- Result: XML returned 200, exposed 24 unique URLs, and matched all canonical values
- Warning: all URLs use `https://example.com` until the production domain is supplied

## Robots.txt Check Results

- Location: `src/app/robots.ts` → `/robots.txt`
- Crawl rules: `User-agent: *`, `Allow: /`
- Sitemap directive: `https://example.com/sitemap.xml`
- Result: returned 200 and did not block any formal route
- Warning: sitemap origin is a documented placeholder

## Schema Configuration

| Page group | Schema type | Source of truth | Status | Notes |
| --- | --- | --- | --- | --- |
| All pages | WebSite | Confirmed independent site name, description, language, placeholder URL | Added | No SearchAction because there is no URL-addressable sitewide search |
| Eight guide pages | WebPage | Visible title, description, canonical, guide image | Added | No invented author or publisher identity |
| Eight guide pages | BreadcrumbList | Visible Home → Guides → guide hierarchy | Added | Matches route and visible breadcrumb |
| Eight guide pages | FAQPage | Two visible FAQs per guide | Added | Runtime audit confirms exactly two schema questions |
| Video-supported guides | VideoObject | External links only | Skipped | No player, embed URL, hosted content, or complete required video fields |
| Site/pages | Organization, Person, Article | Identity/author facts incomplete | Skipped | Prevents invented entity, credentials, and authorship |

All JSON-LD blocks parsed successfully. The runtime audit also confirmed that no `VideoObject` is emitted.

## OG And Twitter Configuration

- All 24 pages expose title, description, URL, and a real image path.
- All `og:url` values equal canonical values.
- Static routes use `website`; guide routes use `article`.
- All routes use `summary_large_image`.
- Default image: `/images/hero/hololive-dreams-og.jpg`, 288,274 bytes, 1200×630.
- No social account, handle, rating, or publisher entity was invented.

## Placeholder Assets And Domain

- `placeholder_domain: true`
- Placeholder domain: `https://example.com`
- Replacement surfaces: metadata base, canonical, sitemap, robots sitemap directive, OG URLs, JSON-LD URLs
- Placeholder editorial email: `wyong@example.com`
- Default OG image: existing project-local derivative; not treated as temporary missing-art replacement
- Default logo: `/images/logo.svg`
- Placeholder logo: yes; 614-byte site-owned initials SVG, not an official game/publisher logo
- Replacement requirement: update centralized values, rebuild, then rerun all crawl/schema/social checks before launch

## SEO Directory Configuration

- `src/seo/pageSeo.ts`: static TDK, canonical, OG, Twitter, and robots metadata
- `src/seo/sitemap.ts`: typed 24-route indexability and schema inventory
- `src/seo/structuredData.tsx`: JSON-LD serializer, WebSite data, and guide graph builder
- `src/app/layout.tsx`: global WebSite JSON-LD integration
- `src/app/sitemap.ts`: native sitemap output
- `src/app/robots.ts`: native robots output
- `scripts/audit-technical-seo.mjs`: runtime SEO consistency checks

## Legal Pages And Footer

| Page | Path | Footer link | `rel` | Sitemap | Notes |
| --- | --- | --- | --- | --- | --- |
| Privacy Policy | `/privacy` | Present | `nofollow noopener noreferrer` | Included | Re-review when production services are known |
| Terms of Service | `/terms` | Present | `nofollow noopener noreferrer` | Included | Avoids guarantees and invented legal entity |
| Copyright | `/copyright` | Present | `nofollow noopener noreferrer` | Included | Added in Flow 08 |
| About Us | `/about` | Present | `nofollow noopener noreferrer` | Included | Independent/non-affiliated boundary |
| Contact Us | `/contact` | Present | `nofollow noopener noreferrer` | Included | Placeholder editorial email separated from official support |

- Legal directory: existing framework route directories under `src/app/`
- Footer copyright: `Copyright © 2026 hololive Dreams Reference. All rights reserved.`
- Placeholder email used: yes, `wyong@example.com`
- Official support email remains visibly identified as official game support, not site editorial contact

## Semantic HTML And Media SEO

- Production crawl found exactly one H1 on each of 24 public pages.
- Header, navigation, main, article, section, aside, figure, and footer semantics remain intact.
- Existing meaningful image alt text was retained.
- Video preview images use descriptive alt text, lazy loading, and external official links.
- No iframe exists, so iframe title/privacy checks are not applicable.
- Six preview-bearing guide types are recorded as external references, not embedded videos.

## Internal Link Fixes

- Added the new `/copyright` route to the footer, sitemap, route validator, and content audit.
- Added `/about` and `/contact` to the five-link Legal footer group while preserving their contextual in-page links.
- Runtime validation found no unknown internal links across 24 public pages.
- External official links retain descriptive anchor text and `noopener noreferrer` where opened in a new tab.

## README Update

Created `README.md` with:

- project identity and non-affiliation;
- real package commands;
- 24-route inventory;
- SEO file locations;
- sitemap/robots/schema behavior;
- OG image and temporary logo status;
- placeholder domain/email replacement requirements;
- Legal/footer/copyright status;
- content/media boundaries;
- manual pre-launch checklist and unresolved risks.

## Validation Commands

| Command | Result | Notes |
| --- | --- | --- |
| `npm run lint` | Passed | Zero warnings |
| `npm run typecheck` | Passed | No TypeScript errors |
| `npm run build` | Passed | 29 generated outputs, including 24 public pages, sitemap, robots, icon, and 404 |
| `node scripts/validate-routes.mjs` | Passed | 24/24 pages: 200, title, description, one H1, no unknown internal links |
| `node scripts/audit-content-depth.mjs` | Passed | All 24 pages above current thresholds |
| `node scripts/audit-technical-seo.mjs` | Passed | Sitemap, robots, canonicals, unique metadata, OG/Twitter, JSON-LD, FAQ parity, Legal rel, OG/logo files |
| Browser semantic check | Passed | Contact placeholder/official-support separation and full footer link structure visible |
| Browser visual check | Passed | Footer remains balanced; copyright and five Legal links fit without layout breakage |

## Files Changed

| File | Change | Purpose |
| --- | --- | --- |
| `src/data/site.ts` | Updated | Central placeholder, asset, email, and footer navigation state |
| `src/seo/pageSeo.ts` | Updated | Metadata completeness and copyright entry |
| `src/seo/sitemap.ts` | Added | Typed indexable-route inventory |
| `src/seo/structuredData.tsx` | Added | Truthful centralized JSON-LD |
| `src/app/layout.tsx` | Updated | Global WebSite JSON-LD |
| `src/app/guides/[slug]/page.tsx` | Updated | Guide social metadata and visible-content schema |
| `src/app/sitemap.ts` | Added | Native sitemap |
| `src/app/robots.ts` | Updated | Sitemap directive |
| `src/app/copyright/page.tsx` | Added | Required copyright page |
| `src/app/contact/page.tsx` | Updated | Auditable placeholder editorial contact |
| `src/components/AppFooter.*` | Updated | Five Legal links, rel attributes, copyright |
| `public/images/logo.svg` | Added | Temporary independent-site logo |
| `scripts/validate-routes.mjs` | Updated | 24-route coverage |
| `scripts/audit-content-depth.mjs` | Updated | 24-route coverage |
| `scripts/audit-technical-seo.mjs` | Added | Runtime technical SEO audit |
| `README.md` | Added | Project operation and pre-launch documentation |

## Unresolved Issues

| Issue | Impact | Owner / next step |
| --- | --- | --- |
| Production domain not supplied | All canonical/social/schema/sitemap URLs remain placeholders | User/operator before launch |
| Independent editorial inbox not supplied | Visible placeholder email remains | User/operator before launch |
| Temporary initials logo | Not final site-owned identity art | Human design/brand review |
| Production services unknown | Privacy/Terms may not match future analytics, ads, forms, or hosting | Human legal/privacy review |
| FAQ rich-result eligibility | Valid schema does not guarantee search presentation | Validate after final deployment |
| External link status can change | Official store/support/YouTube exits need final online crawl | Flow 09 and pre-launch check |

## Items For Flow 09

- Crawl all 24 sitemap URLs and confirm the exact placeholder warning remains explicit.
- Re-validate JSON-LD types and visible FAQ parity.
- Check that no `VideoObject`, fake Organization, Person, rating, review, or author schema appears.
- Audit desktop/mobile footer and the new Copyright page.
- Recheck the 154-image Songs page for responsive scanning and performance.
- Verify all external official store, support, source, and YouTube links.
- Confirm `/images/hero/hololive-dreams-og.jpg` and `/images/logo.svg` are reachable.
- Treat unresolved domain, email, temporary logo, and production privacy services as manual launch blockers, not completed production facts.

## Open Questions

- What production domain should replace `https://example.com`?
- What independent editorial inbox should replace `wyong@example.com`?
- Should the temporary initials logo be approved or replaced?
- Which hosting, analytics, advertising, or form services will be active in production?

