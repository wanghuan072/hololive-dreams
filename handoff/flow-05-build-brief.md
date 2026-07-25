# Flow 05 Build Brief

## Status

- Status: `completed_with_warnings`
- Agent: `flow-05-website-development-agent`
- Date: `2026-07-24`
- Project: `hololive dreams`
- Framework: Next.js 16.2.11 App Router
- Package manager: npm
- Deploy: not performed
- Git commit: not performed

## Inputs Read

- `project.yaml`
- `AGENTS.md`
- Flow 01-04 handoffs
- `research/keyword-research.md`
- `research/sources.json`
- `planning/site-structure.md`
- `planning/content-map.json`
- `planning/design-brief.md`
- `planning/component-plan.md`
- `planning/visual-asset-plan.md`
- `planning/asset-source-log.md`

## Outputs

- `reports/flow-05-build-report.md`
- `handoff/flow-05-build-brief.md`
- Next.js application under `src/`
- package/config files at project root
- `scripts/validate-routes.mjs`
- three optimized hero/OG derivatives under `public/images/hero/`

## Implementation Snapshot

- Planned routes implemented: 23/23
- Guide detail routes: 8/8 generated statically
- Shared UI components: `AppHeader`, `AppFooter` only
- Primary nav: Home, Wiki, Holomems, Songs, Guides, Download, Help
- Footer: Explore, Support, About, Legal
- Local Holomem coverage: 54/54 records and portraits
- Local song coverage: 14 verified opening records; full live catalog count checked as 154
- Guide coverage: eight readable first-draft articles
- SEO: unique title, description, H1, OG, canonical for all routes
- Current canonical origin: `https://example.com` placeholder
- Responsive browser checks: passed at 1440 and 375 widths
- Deployment/Git: not authorized and not performed

## Routes

- `/`
- `/wiki`
- `/holomems`
- `/songs`
- `/wiki/systems`
- `/guides`
- `/guides/getting-started`
- `/guides/rhythm-timing`
- `/guides/dream-park-progression`
- `/guides/unlock-holomems`
- `/guides/team-building-holomem-board`
- `/guides/minigames`
- `/guides/create-chart`
- `/guides/performance-settings`
- `/download`
- `/system-requirements`
- `/help`
- `/updates`
- `/about`
- `/contact`
- `/editorial-policy`
- `/privacy`
- `/terms`

## Content Snapshot For Flow 06

| Page group | Current depth | Main source IDs | Priority |
|---|---|---|---|
| Home | strong first draft | src-001, 002, 003, 004, 006-008 | medium |
| Wiki/Systems | first draft | src-002, 003, 004, 005, 006, 020, 021 | high |
| Holomems | complete names/images; partial gameplay fields | src-002, 003 | high |
| Songs | partial local records | src-001, 004 | highest |
| Guides | eight structured drafts | src-001, 003, 005, 006, 016, 018-021, 024 | highest |
| Download | verified first draft | src-001, 006-008 | medium |
| Requirements | PC complete; mobile cautious | src-006-008 | high |
| Help | safe first draft | src-006, 016-019 | high |
| Updates | launch seed log | src-001, 004 | high |
| Trust/legal | launch drafts | project scope | medium |

## What Flow 06 Should Do Next

1. Capture the complete current official song catalog and local cover mapping.
2. Expand each of the eight guides with verified current UI labels, steps, warnings, and FAQs.
3. Verify the minigame spelling shown in the current English game.
4. Verify Holomem group labels plus unlock/Leader distinctions without adding thin detail pages.
5. Capture authoritative mobile requirements and improve platform-specific help.
6. Replace community-only issue leads with official or reproducible checks.
7. Strengthen visible freshness/review signals where the page has volatile facts.
8. Preserve routes, navigation, and the Flow 04 visual direction.

## Media Needs

- rhythm lane/current timing screen
- Dream Park facilities/progression
- Holomem Board, Skill Nodes, Connect Nodes
- current settings screens
- current Create Chart UI
- complete song cover set
- additional minigame screens if allowed

All new media must remain local and be added to the project-local source log.

## Validation Summary

| Check | Result |
|---|---|
| `npm run lint` | passed |
| `npm run typecheck` | passed |
| `npm run build` | passed |
| 23-route status/TDK/H1/internal links | passed |
| `npm audit --omit=dev` | 0 vulnerabilities |
| production browser console | no warnings/errors |
| 1440/375 horizontal overflow | none |
| mobile menu | passed |
| roster filter and live count | passed |

## Known Issues

- Songs page is an implemented partial catalog, not final coverage.
- Guide content and screenshots need Flow 06/07 depth and live verification.
- Production domain is not supplied; canonical origin remains `https://example.com`.
- A real public contact channel is not supplied.
- Final sitemap/schema/robots review belongs to Flow 08.
- Next.js native `src/app/icon.svg` is used rather than `public/favicon.ico`.

## Next Flow Instructions

Flow 06 must read:

1. `project.yaml`
2. `AGENTS.md`
3. `research/keyword-research.md`
4. `research/sources.json`
5. `handoff/flow-02-research-brief.md`
6. `planning/site-structure.md`
7. `planning/content-map.json`
8. `handoff/flow-03-site-structure-brief.md`
9. `planning/design-brief.md`
10. `planning/component-plan.md`
11. `planning/asset-source-log.md`
12. `handoff/flow-04-design-brief.md`
13. `reports/flow-05-build-report.md`
14. `handoff/flow-05-build-brief.md`
15. current project code

Flow 06 may deepen and verify content. It must not silently change the page URLs, primary navigation, design signature, or shared-component boundary.

