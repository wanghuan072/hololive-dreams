# Flow 04 Handoff: Visual Style Planning

## Status

- Flow: 04
- Status: `completed_with_warnings`
- Completed at: `2026-07-23T19:15:00+08:00`
- Project keyword: `hololive dreams`
- Target market: US / Global English
- Site type: SEO content / wiki / guide / reference content site

## Inputs Confirmed

- `project.yaml`
- `AGENTS.md`
- `handoff/flow-01-project-brief.md`
- `research/keyword-research.md`
- `handoff/flow-02-research-brief.md`
- `planning/site-structure.md`
- `planning/content-map.json`
- `handoff/flow-03-site-structure-brief.md`

The 23-route Flow 03 information architecture was preserved without changing navigation, page IDs, URLs, page roles, or homepage section purposes.

## Outputs

- `planning/design-brief.md`
- `planning/component-plan.md`
- `planning/visual-asset-plan.md`
- `planning/asset-source-log.md`
- `handoff/flow-04-design-brief.md`
- 62 downloaded media files under `public/images/`

## Visual Direction Summary

- Positioning: a bright, source-checked game reference presented like a Dream Park show program—festive at first glance, editorial and fast to scan once a user starts a task.
- Design signature: `Dream Park show-program archive`.
- Visual motifs: rhythm rails/playheads, semantic invitation-ticket tabs, and sparse stage-light marks.
- Theme: light-first with warm paper, cool sky surfaces, indigo ink, rare stage pink, and signal blue.
- Typography: Newsreader for selected display moments; Instrument Sans for headings, body, labels, and data.
- Media stance: real official/platform imagery carries spectacle; the interface carries structure.
- Avoid: generic SaaS gradients, dark neon dashboards, glass walls, uniform Bento/card grids, gradient text, decorative stock/AI art, and oversized marketing typography.

## Layout Summary

- Home: asymmetric factual ledger plus full-roster poster, followed by compact status, task switchboard, portrait strip, song ledger, guide program, system track, media window, timeline, trust note, and FAQ.
- Databases: Holomems uses a portrait-first roster; Songs uses a compact catalog ledger. Neither becomes a wall of article cards.
- Systems: connected-loop overview plus anchored explanatory chapters and relevant media.
- Guides: show-score reading layout with summary, TOC, numbered chapters, fact/advice/caution states, screenshots, FAQ, and a next-guide route.
- Download/Help: utility-first action and recovery layouts.
- Trust/legal: restrained editorial document layouts.
- Responsive priority: mobile-first; preserve theme, media, filters, and data while changing composition.
- Global container: maximum 1400px.
- Shared UI components: only `AppHeader` and `AppFooter`.

## Page-Level Guidance for Flow 05

| Page ID/group | Visual priority | Primary layout | Page-local pattern focus | Media |
|---|---|---|---|---|
| `home` | expressive | Asymmetric reference-hub cover | Ledger, task lanes, portrait filmstrip, song sample, track diagram, timeline | Key art, portraits, song panel, video thumbnails |
| `wiki-index` | balanced | Chapter index and system map | Evidence/date labels and dense route rows | One system overview still |
| `holomems-index` | dense_readable | Complete searchable portrait roster | Result count, branch/generation controls, compact named tiles | All 54 local portraits |
| `songs-index` | dense_readable | Search/filter catalog ledger | Sticky columns, thumbnail, title, performer, type, update state | Complete cover mapping in Flow 06 |
| `systems` | balanced | Connected loop plus chapters | Five system families and anchored explanation | Rhythm, park, board, minigame, chart captures |
| `guides-index` | balanced | Numbered two-column program list | Eight outcomes, difficulty/time labels | One gameplay anchor |
| `guide-getting-started` | balanced | Guide score sheet | First-hour steps and prerequisites | 3–5 verified screenshots |
| `guide-rhythm-timing` | balanced | Annotated analysis | Settings checklist and timing chapters | Rhythm-lane capture required |
| `guide-dream-park` | balanced | Progression route sheet | Quest/park sequence | Park capture required |
| `guide-unlock-holomems` | dense_readable | Verified methods and roster links | Source boundary and ticket labels | Unlock UI plus portraits |
| `guide-team-board` | dense_readable | Board explanation and ledger | Team/leader/board relationships | Board UI required |
| `guide-minigames` | balanced | Mode index and rule chapters | Four named modes | One minigame image available; more optional |
| `guide-create-charts` | utility_first | Step workflow | Availability caveat and ordered interface explanation | Current chart UI required |
| `guide-performance` | utility_first | Symptom-to-setting sheet | Platform selector and safe settings | Current settings UI required |
| `download` | utility_first | Official platform action panel | Verified links, safety, date, compatibility | Small platform context only |
| `system-requirements` | dense_readable | PC comparison ledger | Semantic table and mobile overflow | None required |
| `help` | utility_first | Searchable symptom route index | Platform filters, recovery paths, no-results | Issue-specific screenshots only |

`updates` uses a dated cue-sheet timeline. About, Contact, Editorial Policy, Privacy, and Terms use plain editorial layouts.

## Visual Density Guidance

- Home H1: 42–64px desktop, 32–38px mobile.
- Core H1: 36–52px desktop, 29–36px mobile.
- Body: 16–18px; database default 16px/1.55, guides approximately 17px/1.65.
- Table/list labels: 14–16px with tabular numerals.
- Section gaps:
  - home 40–64px;
  - data/utility 28–48px;
  - guides 36–56px.
- Interactive rows: 48–60px desktop and at least 52px mobile.
- Long-form measure: 62–72ch.
- Required screenshot checks:
  - Home 1440px/375px: entity, date/facts, task routes, and meaningful art in the first useful viewport.
  - Holomems 1440px/375px: controls, count, names, and portraits remain dense and complete.
  - Songs 1440px/375px: real table/list fields remain scannable.
  - One guide 1440px/375px: summary, TOC/step context, prose, and media work together.

## Component Guidance

- Implement as shared:
  - `AppHeader`
  - `AppFooter`
- Keep page-local:
  - Hero, live status, task switchboard, roster, song ledger, systems track, guide program, guide article, platform panel, requirement table, help routes, timeline, FAQ, media, trust, and future ad patterns.
- Recommended semantic section structure:
  - `<section class="<topic>-section"><div class="container"><div class="<topic>-content">…</div></div></section>`
- Global style constraint:
  - only base elements, `:root` variables, accessibility foundations, and `.container`;
  - `.container` maximum width is 1400px.
- Do not create a catch-all page renderer or shared display component library.

## Color and Typography Guidance

- Background: `#FFF9F6`
- Surface: `#FFFFFF`
- Alternate surface: `#F3F8FF`
- Primary text: `#24263B`
- Muted text: `#5F6177`
- Border: `#D8D9E8`
- Accent: `#D43872`
- Signal blue: `#166D91`
- Focus: `#0B68C4`
- Accent/white text contrast: 4.56:1; primary/background: 14.22:1; muted/background: 5.81:1.
- Font loading must use `swap` or `optional`, with deliberate fallbacks and no invisible-text delay.
- No negative heading letter spacing, giant viewport-only clamps, gradient text, or generic Inter/Roboto defaults.

## Media and Asset Requirements

- Downloaded: 62 files.
- Complete roster: 54/54 official named WebP portraits in `public/images/holomems/`.
- Key/platform/video assets:
  - `public/images/hero/hololive-dreams-key-visual.jpg`
  - `public/images/hero/hololive-dreams-steam-header.jpg`
  - `public/images/screenshots/hololive-dreams-story-scene-steam.jpg`
  - `public/images/screenshots/hololive-dreams-minigame-steam.jpg`
  - `public/images/sections/hololive-dreams-steam-feature-01.webp`
  - `public/images/sections/hololive-dreams-steam-feature-02.webp`
  - `public/images/sections/hololive-dreams-official-trailer-thumbnail.jpg`
  - `public/images/sections/hololive-dreams-official-gameplay-thumbnail.jpg`
- Asset source log: `planning/asset-source-log.md`
- Missing media for Flow 06: rhythm, Dream Park, Holomem Board, settings, custom chart UI, and complete song-cover mapping.
- Performance:
  - derive responsive WebP/AVIF variants for the 1.56MB key visual and large screenshots;
  - retain 448px roster WebPs without upscaling;
  - reserve dimensions and lazy-load below fold;
  - use click-to-load video thumbnails rather than eager iframes.
- Source caution: keep the site visibly independent; do not redistribute raw official video/audio or present unverified imagery as factual proof.

## Advertising Compatibility

- Monetization: `not_specified`.
- Flow 05 should implement no real ads and no invented publisher placeholders.
- If later approved, safe candidates are after the home task switchboard, after a complete article section, a non-sticky wide-screen rail, or pre-footer.
- Never place ads before entity confirmation, inside filters/tables, between an instruction and its outcome, beside official download actions, or on trust/legal pages.

## Do Not Change from Flow 03

- Primary navigation: Home, Wiki, Holomems, Songs, Guides, Download, Help.
- Planned route count: 23.
- Core/supporting/trust split: 17/1/5.
- No map.
- No 54 thin holomem detail pages.
- No 150+ thin song detail pages.
- Preserve all page IDs, URLs, H1s, responsibilities, guide scope, and internal-link intent from `planning/content-map.json`.

## Validation

- `planning/content-map.json`: parses successfully, 23 pages.
- Design brief required sections: present.
- Planning documents: 4/4 present.
- Local media: 62 files, 0 zero-byte.
- Roster media: 54 files.
- Roster source-log entries: 54.
- Key/platform/video source-log entries: 8.
- Code/config/dependency changes in Flow 04: none.

## Risks and Cautions

- The frontend framework is still `unknown`; framework file layout, package choices, image pipeline, and interactive-island strategy are not yet authorized.
- Production domain, email, business goal, monetization, and independent-site logo remain unspecified.
- Song covers and several system screenshots remain Flow 06 requirements.
- `Colliect Cooking` may be an official English typo and must be verified during content production.

## Blocking Open Question Before Flow 05

Which frontend framework should initialize the currently empty project: Astro, Vue/Vite, Next.js, or Nuxt?

Flow 05 must not start until this is answered. All Flow 01–04 planning and downloaded assets remain ready in the current project directory.

## Next Flow Inputs

After framework confirmation, Flow 05 should read:

1. `project.yaml`
2. `AGENTS.md`
3. `planning/site-structure.md`
4. `planning/content-map.json`
5. `handoff/flow-03-site-structure-brief.md`
6. `planning/design-brief.md`
7. `planning/component-plan.md`
8. `planning/visual-asset-plan.md`
9. `planning/asset-source-log.md`
10. `handoff/flow-04-design-brief.md`

