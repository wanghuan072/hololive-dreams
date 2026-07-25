# Flow 05 Build Report

## Status

- Status: `completed_with_warnings`
- Agent: `flow-05-website-development-agent`
- Date: `2026-07-24`
- Project: `hololive dreams`
- Project directory: `D:\WH\202607\hololive dreams\hololive dreams`
- Deployment performed: no
- Git commit performed: no

The first runnable Next.js version is complete and passes lint, TypeScript, production build, route/metadata checks, dependency audit, and local browser checks. Warnings remain for the complete song-data capture, guide/media depth, the production domain, and a real public contact channel; these are explicit Flow 06/07/08 inputs rather than build blockers.

## Inputs Read

- `project.yaml`
- `AGENTS.md`
- `handoff/flow-01-project-brief.md`
- `research/keyword-research.md`
- `research/sources.json`
- `handoff/flow-02-research-brief.md`
- `planning/site-structure.md`
- `planning/content-map.json`
- `handoff/flow-03-site-structure-brief.md`
- `planning/design-brief.md`
- `planning/component-plan.md`
- `planning/visual-asset-plan.md`
- `planning/asset-source-log.md`
- `handoff/flow-04-design-brief.md`

## Project And Framework Summary

- Framework selected by user: `Next.js`
- Installed framework: `Next.js 16.2.11`
- Router: App Router
- React: `19.2.8`
- Language: TypeScript
- Package manager: npm `10.9.2`
- Runtime used: Node.js `22.14.0`
- Existing code status at start: `no_code`
- Source directories used:
  - `src/app`
  - `src/components`
  - `src/data`
  - `src/seo`
  - `src/styles`
  - `public/images`
  - `scripts`
- Scripts:
  - `dev`: `next dev`
  - `build`: `next build`
  - `start`: `next start`
  - `lint`: `eslint .`
  - `typecheck`: `tsc --noEmit`

The app was initialized manually inside the non-empty project directory so the existing research, planning, handoff, and asset folders remained intact.

## Dependency Summary

Installed required packages:

- `next@16.2.11`
- `react@19.2.8`
- `react-dom@19.2.8`
- TypeScript, React/Node types, ESLint, and `eslint-config-next`

Security handling:

- The initial npm tree reported three high-severity transitive advisories in `postcss` and `sharp`.
- `npm audit fix --force` was not used because it proposed a breaking Next.js downgrade.
- Compatible npm overrides were added for `postcss@8.5.22` and `sharp@0.35.3`.
- Final `npm audit --omit=dev`: `found 0 vulnerabilities`.

## Implementation Summary

- Planned indexable routes implemented: 23/23
- Physical `page.tsx` files: 16
- Statically generated guide details: 8
- Shared UI components: 2
- Page/local CSS modules: 14
- Local data files: 6
- SEO configuration files: 1
- Static images after Flow 05 derivatives: 65
- Build output routes including framework routes: 27

## Key Files Changed

| File or area | Change type | Purpose |
|---|---|---|
| `package.json`, `package-lock.json` | created | Next.js application, scripts, locked dependencies, safe overrides |
| `next.config.ts`, `tsconfig.json`, `eslint.config.mjs` | created | framework, TypeScript, image, and lint configuration |
| `src/app/layout.tsx` | created | HTML shell, fonts, metadata base, shared header/footer |
| `src/app/globals.css` | created | base elements, design tokens, accessibility foundation, `.container` only |
| `src/components/AppHeader.*` | created | responsive navigation, current state, skip link |
| `src/components/AppFooter.*` | created | footer navigation, independent-site boundary |
| `src/app/page.*` | created | asymmetric home program cover and mixed section rhythms |
| `src/app/holomems/*` | created | 54-record portrait roster with name/group search and branch filters |
| `src/app/songs/*` | created | compact song ledger and search shell |
| `src/app/wiki/*` | created | wiki desk and system-loop layouts |
| `src/app/guides/*` | created | guide index plus eight SSG detail routes |
| `src/app/download/*` | created | official platform action page |
| `src/app/system-requirements/*` | created | responsive verified PC requirement table and mobile boundary |
| `src/app/help/*` | created | symptom-first help router |
| `src/app/updates/*` | created | dated update timeline |
| trust page routes | created | About, Contact, Editorial Policy, Privacy, Terms |
| `src/data/*` | created | simple content-type data exports |
| `src/seo/pageSeo.ts` | created | static page-level titles, descriptions, canonical and OG metadata |
| `scripts/validate-routes.mjs` | created | local 23-route status, TDK, H1, and internal-link validation |
| responsive hero derivatives | created | 1280px WebP, mobile WebP, 1200×630 OG JPEG |

## Code Structure Constraints

- Shared UI components limited to `AppHeader` and `AppFooter`: yes
- Independent page files for distinct core/support/trust pages: yes
- Guide detail route shared only inside the Guide content type: yes
- Universal catch-all renderer avoided: yes
- Homepage, Wiki, Holomems, Songs, Systems, Guides, Download, Requirements, Help, Updates, and trust layouts are visibly distinct: yes
- Static page copy kept page-local: yes
- List/detail data split by content type: yes
- `src/data` exports remain JSON-like: yes
- Complex runtime fetch/aggregation logic inside data files: none
- Global class styles limited to `.container`: yes
- `.container` max width: `1400px`
- Page-specific styles: CSS Modules
- `scripts/` use: validation helper only

Data-field note:

- Guide records contain `id`, `title`, `publishDate`, `imageUrl`, `imageAlt`, `seo`, `addressBar`, `detailsHtml`, task sections, related links, evidence sources, confidence, conflict status, and verification date.
- Holomem, song, system, and update records retain evidence and verification fields where applicable.
- `detailsHtml` is retained as a simple auditable field, while rendering uses safe React text structures rather than raw HTML injection.

## Pages And Routes Implemented

| Page ID | URL | Status | Implementation |
|---|---|---|---|
| home | `/` | implemented | independent page |
| wiki-index | `/wiki` | implemented | independent page |
| holomems-index | `/holomems` | implemented | independent index + local client filter |
| songs-index | `/songs` | implemented, data partial | independent ledger + local client search |
| systems | `/wiki/systems` | implemented | independent page |
| guides-index | `/guides` | implemented | independent index |
| guide-getting-started | `/guides/getting-started` | implemented | Guide SSG route |
| guide-rhythm-timing | `/guides/rhythm-timing` | implemented | Guide SSG route |
| guide-dream-park | `/guides/dream-park-progression` | implemented | Guide SSG route |
| guide-unlock-holomems | `/guides/unlock-holomems` | implemented | Guide SSG route |
| guide-team-board | `/guides/team-building-holomem-board` | implemented | Guide SSG route |
| guide-minigames | `/guides/minigames` | implemented | Guide SSG route |
| guide-create-charts | `/guides/create-chart` | implemented | Guide SSG route |
| guide-performance | `/guides/performance-settings` | implemented | Guide SSG route |
| download | `/download` | implemented | independent page |
| system-requirements | `/system-requirements` | implemented | independent page |
| help | `/help` | implemented | independent page |
| updates | `/updates` | implemented | independent page |
| about | `/about` | implemented | independent page |
| contact | `/contact` | implemented with channel warning | independent page |
| editorial-policy | `/editorial-policy` | implemented | independent page |
| privacy | `/privacy` | implemented | independent page |
| terms | `/terms` | implemented | independent page |

## Navigation And Footer

- Primary navigation source: Flow 03
- Implemented order: Home, Wiki, Holomems, Songs, Guides, Download, Help
- Mobile menu: accessible toggle with `aria-expanded` and route-close behavior
- Current route: text weight/color plus bottom/side rail
- FAQ in primary navigation: no
- Footer groups: Explore, Support, About, Legal
- All primary/footer/internal route links resolve to implemented routes
- External platform/video links use `target="_blank"` and `rel="noopener noreferrer"`

## Visual And Responsive Implementation

Visual direction:

- Implemented the light “Dream Park show-program archive” direction rather than a generic dark game dashboard.
- Main palette and focus colors are in `src/app/globals.css`.
- Newsreader is used for display type and Instrument Sans for UI/body through `next/font`.
- Border-led hierarchy, limited 10/14px radii, tabular numbers, rare hot-pink actions, and minimal shadows match the Flow 04 contract.
- Motion is limited to small state transitions and disabled under reduced-motion preferences.

Design signature locations:

- Home: asymmetric program cover, factual ledger, task switchboard, portrait strip, system rail, guide score, media window, FAQ, and trust strip.
- Holomems: two-up mobile/six-up desktop portrait ledger, persistent filter desk, branch counts, result announcements.
- Songs: compact table-like ledger with playhead markers and performer/type columns.
- Systems: sequential system score and relationship rail.
- Guide detail: editorial headline, sticky desktop TOC, numbered chapters, step rows, caution notes.
- Download: high-clarity platform actions with no ad-like neighboring blocks.
- Help: symptom-to-action router.
- Trust pages: plain 70ch reading layout with no entertainment effects.

Flow 04 skill influence implemented:

- 4pt-derived spacing scale
- 44px minimum interactive targets
- visible focus rings
- mobile-first breakpoints
- stable media dimensions
- tabular numeric fields
- rare accent use
- no decorative animation
- no Bento wall, cyberpunk/neon theme, glassmorphism, floating shapes, or universal card component

The UI/UX database returned a generic Bento/Cyberpunk recommendation during Flow 05. It was rejected because it directly conflicted with the approved Flow 04 design system. Its Next.js App Router and Metadata API guidance was retained.

Responsive checks:

- 1440×900: Home, Holomems, Songs, Guide, Download, Help
- 375×812: Home, Holomems, Guide
- Roster at mobile: two columns
- Guide TOC at mobile: static rather than sticky
- Horizontal overflow found: none
- Mobile menu state: passed
- Roster filter behavior: `Advent` reduced 54 results to 5 and announced `Showing 5 of 54`

## Media Implementation

Flow 04 assets used:

- official key visual
- Steam header
- story/minigame screenshots
- Steam feature panels
- official YouTube thumbnails
- all 54 local roster portraits

Flow 05 derivatives:

| File | Size | Purpose |
|---|---:|---|
| `public/images/hero/hololive-dreams-key-visual-1280.webp` | 275,832 bytes | desktop/tablet home visual |
| `public/images/hero/hololive-dreams-key-visual-mobile.webp` | 175,056 bytes | mobile art direction |
| `public/images/hero/hololive-dreams-og.jpg` | 288,274 bytes | Open Graph image |

Image handling:

- local files only; no hotlinks
- `next/image` used for optimized delivery
- meaningful alt text supplied
- actual home LCP image uses responsive art direction
- roster images outside the viewport remain lazy
- intrinsic size/aspect ratio is reserved
- browser production preview loaded the mobile hero at 768px natural width

Known media gaps for Flow 06/07:

- current rhythm-lane screenshot
- Dream Park progression UI
- Holomem Board and node UI
- settings screen
- Create Chart editor UI
- local cover mapping for the full song catalog

## First Draft Content And Sources

| Area | Status | Main source IDs | Flow 06 need |
|---|---|---|---|
| Home | draft | src-001, 002, 003, 004, 006, 007, 008 | deepen update-aware answers |
| Wiki | draft | src-002, 003, 004 | strengthen category boundaries |
| Holomems | complete names/images, partial gameplay fields | src-002, 003 | verify group labels and current unlock fields |
| Songs | partial local records | src-001, 004 | capture all 154+ live records and covers |
| Systems | draft | src-003, 005, 006, 020, 021 | verify live menu labels/limits |
| Guides | eight draft articles | src-001, 003, 005, 006, 016, 018, 019, 020, 021, 024 | deepen steps and live validation |
| Download | draft/verified actions | src-001, 006, 007, 008 | recheck regional details |
| Requirements | PC verified, mobile cautious | src-006, 007, 008 | capture current official mobile requirements |
| Help | draft | src-006, 016, 017, 018, 019 | replace community leads with verified support steps |
| Updates | draft | src-001, 004 | continue dated campaign tracking |
| Trust/legal | launch draft | project scope | replace/update when production services are configured |

Facts avoided:

- tier rankings and reroll claims
- rarity/rate values
- conventional redeem codes
- universal mobile requirements
- Steam Deck/Linux support
- kernel-level anti-cheat claims
- cross-save claims
- region-bypass advice
- copied lyrics or raw promotional video/audio

Limited online rechecks performed in Flow 05:

- npm package versions for framework initialization
- official music page item count: 154 `<section class="Music__item">` records on `2026-07-24`
- Steam minimum/recommended PC requirement fields on `2026-07-24`

## SEO Implementation

- Unique title on all 23 planned routes: yes
- Unique meta description on all 23 planned routes: yes
- Exactly one H1 on all 23 planned routes: yes
- Basic Open Graph metadata: yes
- Twitter summary-large-image metadata: yes
- Descriptive internal anchor text: yes
- Canonical fields: yes, currently built from the auditable placeholder origin `https://example.com`
- Native Next.js `robots.ts`: implemented with crawl allow
- Sitemap: deferred to Flow 08 because the production domain is unknown
- Icon: Next.js native `src/app/icon.svg`
- `public/favicon.ico`: not created; the Next.js native icon route is the deliberate equivalent
- `ads.txt`: not created because monetization/publisher data is unspecified
- Schema: deferred to Flow 08 so no organization, author, rating, price, or review facts are invented

## Validation Commands

| Command or check | Result | Notes |
|---|---|---|
| `npm install` | passed | 345 packages after compatible security overrides |
| `npm run typecheck` | passed | no TypeScript errors |
| `npm run lint` | failed then passed | initial React effect rule fixed in `AppHeader.tsx` |
| `npm run build` | passed | 27 static/SSG outputs |
| `node scripts/validate-routes.mjs` | passed | 23/23 return 200; title/description/one H1; no unknown internal links |
| `npm audit --omit=dev` | passed | 0 vulnerabilities |
| production browser preview | passed | no warning/error logs |
| desktop responsive checks | passed | no horizontal overflow |
| mobile responsive checks | passed | no horizontal overflow |
| mobile menu interaction | passed | expanded state and visible nav verified |
| roster search | passed | 54 -> 5 Advent records with live result text |

## Build Or Check Failures

- Initial lint failure:
  - Cause: synchronous state update inside a pathname effect.
  - Fix: close the mobile menu in the actual navigation-link click handler.
  - Final result: passed.
- Initial browser warning:
  - Cause: `next/image` with `fill` was nested in a static `<picture>` element.
  - Fix: positioned the `<picture>` element absolutely inside the relative media frame.
  - Final production browser logs: empty.
- First production-server command:
  - `npm start -- -p 3100` was interpreted incorrectly by the Windows npm wrapper.
  - Equivalent successful command: `npx next start -p 3100`.
- Dependency audit:
  - Initial result: three high-severity transitive advisories.
  - Fix: compatible overrides, not force downgrade.
  - Final result: zero vulnerabilities.

## Deviations From Planning

### Flow 03

- Song data is not yet the complete 154-record live catalog. The page and search structure exist, with 14 verified opening records; this is `partial` and requires Flow 06.
- The page routes and navigation are unchanged.

### Flow 04

- Next.js native `src/app/icon.svg` is used instead of `public/favicon.ico`.
- Several guides temporarily use available promotional/system media because their planned UI screenshots belong to Flow 06/07 capture.
- The approved visual contract was implemented; the conflicting generic Cyberpunk/Bento tool recommendation was rejected.

## Deferred Items For Flow 06

1. Capture all currently exposed official song records, not only the 14 opening anchors.
2. Download and source-log local song-cover assets with complete record mapping.
3. Recheck roster group/generation labels and identify current unlock/Leader fields without inventing universal rules.
4. Expand all eight guide drafts with current interface labels, exact steps, failure states, and stronger official/live evidence.
5. Verify the official English spelling of `Colliect Cooking` against the current in-game screen.
6. Capture current mobile support requirements from authoritative support/store sources.
7. Turn community issue vocabulary into reproducible or official safe checks.
8. Expand FAQ answers without publishing unverified launch fixes.
9. Add stronger checked/reviewed dates to volatile visible modules where helpful.
10. Preserve the 23-route information architecture and current visual direction.

## Deferred Items For Flow 07

1. Analyze official video segments for systems and guide evidence.
2. Add approved click-to-load video treatment if the current Flow 07 rules permit.
3. Fill rhythm, park, board, settings, Create Chart, and minigame media slots with source-recorded current visuals.

## Deferred Items For Flow 08

1. Replace `https://example.com` after a production domain is supplied.
2. Generate the final sitemap and add its canonical URL to robots.
3. Review schema using only final visible facts.
4. Decide whether the native SVG icon is sufficient or whether a deliberate `.ico` derivative is required.
5. Replace the Contact page boundary with a real public contact channel only after one is supplied.
6. Revisit Privacy and Terms when analytics, ads, forms, hosting, or other production services are known.

## Risks And Cautions

- The official song catalog changes during the 15-day launch campaign.
- Media is copyrighted and remains governed by the recorded source/usage boundaries.
- Exact gameplay fields and launch support steps remain volatile.
- No production domain, contact email, business entity, monetization, or analytics policy is supplied.
- The site must continue to state its independent, non-affiliated status.

## Open Questions

- Production domain
- Public editorial contact channel
- Business/operator identity, if any
- Monetization and analytics choices
- Current authoritative mobile requirement matrix

