# Flow 06 Handoff: Content Supplement Brief

## Status

- Status: Completed
- Date: 2026-07-24
- Agent: Flow 06 Content Supplement Agent

## Inputs Read

- `project.yaml`
- `AGENTS.md`
- `research/keyword-research.md`
- `research/sources.json`
- `planning/site-structure.md`
- `planning/content-map.json`
- `planning/design-brief.md`
- `planning/component-plan.md`
- `reports/flow-05-build-report.md`
- `handoff/flow-05-build-brief.md`
- Current website code and production-rendered pages

## Outputs

- `reports/flow-06-content-report.md`
- `handoff/flow-06-content-brief.md`
- Updated `research/sources.json`
- Added `research/flow-06-song-asset-sources.json`
- Added `research/flow-06-system-asset-sources.json`
- Added 154 local song covers and five official system/park images
- Updated website data, guide media/FAQs, platform, help, contact, requirements, and updates content

## Content Supplement Summary

- Pages reviewed: 23
- Pages updated: Songs, eight guide details, Systems, Download, Requirements, Help, Contact, Updates
- High-relevance websites/pages queried: 22 documented across official, platform, database, competitor, guide, and community types
- Long-tail query clusters searched: 14
- Main gaps resolved:
  - 14-song sample → 154-song complete dated official catalog snapshot
  - 0 song covers → 154/154 local covers
  - Generic guide art → five topic-matched official assets
  - No detail FAQs → two specific FAQs on every guide detail
  - Unverified support route → official English support address and news page
  - Missing mobile minimum → iOS/iPadOS 16 requirement
- Important gaps deferred:
  - Android universal minimum
  - Official stable account-transfer workflow
  - Exact live chart, board, reward, and difficulty values
  - Future song additions after July 24

## New Source Location

- File: `research/sources.json`
- New source IDs:
  - `src-flow06-001`
  - `src-flow06-002`
  - `src-flow06-003`
  - `src-flow06-004`
  - `src-flow06-005`
  - `src-flow06-006`
  - `src-flow06-007`
  - `src-flow06-008`

## Image Asset Summary

- Images downloaded: 159
- Song cover coverage: 154/154
- Official system/park images: 5
- Local asset directories:
  - `public/images/songs/`
  - `public/images/official-system/`
- Provenance ledgers:
  - `research/flow-06-song-asset-sources.json`
  - `research/flow-06-system-asset-sources.json`
- Pages using new images: Songs, Systems, Rhythm guide, Park guide, Unlock guide, Team guide, Minigames guide, Create Chart guide

## New Or Adjusted Pages And Sections

| Page | New/adjusted item | Reason |
| --- | --- | --- |
| `/songs` | Complete catalog, cover thumbnails, creator search, type filter | Core entity completeness |
| Eight guide details | Topic-specific FAQ block | Answer verified long-tail questions |
| Five guide/system routes | Official matched media | Improve visual/task alignment |
| `/help` | Official support/news paths | Safe escalation |
| `/contact` | Official game support address boundary | Separate editorial and game support |
| `/download` | iOS/iPadOS 16 note | Platform decision support |
| `/system-requirements` | Mobile minimum and current Steam note | Compatibility and safety |
| `/updates` | Official news exit | Freshness path |

## Topics For Flow 07 Video Supplement

- Rhythm lane and Create Chart:
  - Related pages: `/guides/rhythm-timing`, `/guides/create-chart`
  - Why video helps: dynamic note flow and editor workflow are not fully explained by still images.
- Dream Park loop:
  - Related pages: `/guides/dream-park-progression`, `/wiki/systems`
  - Why video helps: shows transitions between quests, facilities, and progression.
- Team and Holomem Board:
  - Related page: `/guides/team-building-holomem-board`
  - Why video helps: confirms on-screen labels and node presentation.
- Minigames:
  - Related page: `/guides/minigames`
  - Why video helps: confirms control style and presentation of the four official names.
- Settings and loading:
  - Related pages: `/guides/performance-settings`, `/help`
  - Why video helps: title-screen and settings-menu locations may clarify safe navigation.
- Account transfer:
  - Related page: `/help`
  - Why video may help: community reports indicate directional steps, but no official stable text workflow was found.

## Technical SEO Items For Flow 08

- Add all 23 public routes to a generated sitemap.
- Review canonical placeholder behavior because the production domain is unknown.
- Evaluate WebSite, Organization/Person boundary, BreadcrumbList, FAQPage, ItemList, SoftwareApplication, and Article schemas.
- Recheck metadata after full catalog and FAQ expansion.
- Confirm lazy loading and dimensions for 154 song covers; do not preload catalog thumbnails.
- Consider sitemap image entries only if proportionate and supported by the chosen implementation.
- Crawl all newly added external and internal links.

## Risks For Flow 09 Audit

- Catalog performance and mobile scanning with 154 image rows.
- No accidental broken or duplicate song-cover filenames.
- FAQ keyboard/summary behavior.
- Official support email must remain clearly identified as game support.
- Community workarounds must not appear as recommendations.
- `Colliect Cooking` remains the verified official English webpage spelling.
- Canonicals still point to `https://example.com` until Flow 08 handles placeholder semantics.

## Validation Summary

- `research/sources.json` parse: passed.
- `npm run lint`: passed without warnings.
- `npm run typecheck`: passed.
- `npm run build`: passed; 27 generated routes.
- `node scripts/validate-routes.mjs`: 23/23 valid pages, one H1 each, no unknown internal links.
- `node scripts/audit-content-depth.mjs`: every page exceeded the applicable minimum.
- Asset check: 154 songs, 154 covers, zero missing paths, five official system assets.
- Browser check: `/songs` rendered correctly; “Megitsune” search returned one result.

## Next Flow Inputs

Flow 07 should read:

- `project.yaml`
- `AGENTS.md`
- `research/keyword-research.md`
- `research/sources.json`
- `reports/flow-06-content-report.md`
- `handoff/flow-06-content-brief.md`
- Current website code and content

Flow 08 should later read:

- `project.yaml`
- `AGENTS.md`
- `planning/site-structure.md`
- `planning/content-map.json`
- Flow 06 report/handoff
- Flow 07 report/handoff
- Current routes, metadata, and build output

Flow 09 should later read:

- All prior handoffs
- Current reports
- Current website code and built pages

## Open Questions

- Production domain and this independent site's public editorial email remain unspecified.
- Android minimums and official account-transfer steps remain unavailable.
- The music catalog is a dated July 24 snapshot and should be refreshed after the launch campaign.

