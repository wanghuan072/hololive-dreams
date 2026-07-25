# Design Brief

## Status

- Flow: 04 Visual Style Planning
- Status: `completed_with_warnings`
- Date: 2026-07-23
- Project keyword: `hololive dreams`
- Target market: US / Global English
- Site type: SEO content / wiki / guide / reference content site
- Based on structure: `planning/site-structure.md`

## Input Files Read

- `project.yaml`
- `AGENTS.md`
- `handoff/flow-01-project-brief.md`
- `research/keyword-research.md`
- `handoff/flow-02-research-brief.md`
- `planning/site-structure.md`
- `planning/content-map.json`
- `handoff/flow-03-site-structure-brief.md`

The Flow 03 structure is complete enough for design planning. Its warning about the unknown frontend framework affects implementation, not this visual contract.

## Design Constraints

### User Preferences

- Expected style: not specified
- Forbidden colors or styles: none stated by the user; workflow anti-template rules apply
- Existing logo: no local logo supplied
- Existing media assets at start: none
- Theme mode: light-first, derived from the official art and the need for dense readable reference content
- Mobile priority: yes, derived from the game's iOS/Android availability and global audience
- Reference sites: none supplied
- Brand name: not specified; use the primary entity name as a working text label without implying official affiliation

### Project Boundaries

- No code, page, route, content, dependency, configuration, build, deployment, or Git changes in Flow 04.
- Preserve all Flow 03 navigation, page IDs, URL paths, page responsibilities, and homepage section purposes.
- Shared UI components are limited to `AppHeader` and `AppFooter`.
- Downloaded media stays local under `public/images/`; no page references are added in this flow.
- Do not invent a production domain, contact email, ad network, publisher ID, business goal, or monetization model.

## Search- and Topic-Derived Visual Requirements

- Main query intent is mixed: users need entity confirmation, live platform links, wiki/reference data, beginner guidance, and support.
- The strongest owned assets are a complete 54-holomem roster, a current 150+ song catalog, eight task guides, and a connected system explanation.
- The subject is colorful and entertainment-led, but the site must remain faster to scan than a promotional game page.
- Real character, gameplay, park, song, and video media must carry the theme. Decorative gradients cannot substitute for those assets.
- Volatile launch facts need visible dates and source affordances.
- Tier-list, reroll, codes, rates, platform, and troubleshooting claims must visually disclose whether they are fact, advice, or not yet verified.

## Visual Direction Candidates

### Candidate A — Dream Park Show-Program Archive

- Fit: combines the game's theme-park and music identity with the site's reference and guide role.
- Layout: asymmetric editorial pages, ticket-like task labels, rhythm-rail dividers, poster media, compact ledgers and indexes.
- Media: full-roster key art, named portrait tiles, gameplay stills, song-cover mosaics, and video thumbnails.
- Density: expressive at home, high on databases, reading-focused on guides.
- Risk: ticket shapes and stars can become cute decoration if they do not label real tasks or data.
- Decision: selected, with strict functional use of every motif.

### Candidate B — Rhythm Control Desk

- Fit: strong for timing, settings, filters, scores, and system relationships.
- Layout: dark performance dashboard with playhead rails, meters, and dense tables.
- Media: gameplay screens and chart-like data dominate.
- Density: consistently high.
- Risk: over-privileges rhythm gameplay, under-represents Dream Park and story, and trends toward the prohibited dark neon game dashboard.
- Decision: rejected as a site-wide direction; retain only the playhead/track marker logic for filters and step progress.

### Candidate C — Pastel Memory Scrapbook

- Fit: supports the large cast and the game's cheerful fan audience.
- Layout: overlapping photos, stickers, taped captions, and loose collage groupings.
- Media: character portraits and screenshots dominate.
- Density: medium to low.
- Risk: weak comparison/scanning behavior, difficult responsive cropping, and high likelihood of a decorative fan-page look.
- Decision: rejected as the main system; use only a restrained poster-crop treatment in the media window.

## Visual Positioning

- Design positioning: a bright, source-checked game reference presented like a Dream Park show program—festive at first glance, editorial and fast to scan once the user starts a task.
- Visual keywords:
  - stage-program editorial
  - playful but legible
  - reference-driven
  - light and media-rich
  - compact task routing
  - source-aware
- Avoid:
  - generic SaaS gradient
  - dark neon control panel
  - glass card wall
  - pastel scrapbook clutter
  - oversized marketing type
  - unstructured fandom collage
- Rationale: the direction joins the official game's music, stage, theme-park, and invitation language with the site's database, guide, download, and support tasks.

## Design Signature

- `design_signature`: **Dream Park show-program archive**—a launch-day guide whose pages feel like program sheets, admission tickets, stage cues, and catalog ledgers from one coherent park visit.
- `layout_signature`: an asymmetric media poster or factual summary leads each major page, followed by alternating compact ledgers, image-backed indexes, step tracks, and editorial reading bands instead of repeated card grids.
- `visual_motif`:
  - two converging rhythm rails used as section rules, progress tracks, and selected-filter cues;
  - clipped admission-ticket tabs used only for task labels, dates, difficulties, platforms, or source states;
  - four-point stage-light marks used sparingly at major content transitions.
- `section_rhythm`:
  - wide poster-and-ledger compositions for theme recognition;
  - compact roster strips, song ledgers, fact tables, and task switchboards for scanning;
  - alternating reading columns, annotated media, and horizontal update timelines for explanation.
- `page_variation`:
  - Home: expressive poster plus task switchboard and varied data previews.
  - Wiki: chapter index with system map and evidence-state labels.
  - Holomems: portrait-first searchable roster, not article cards.
  - Songs: compact catalog ledger with cover thumbnails and column filters.
  - Systems: connected-loop diagram followed by anchored explanatory chapters.
  - Guides: show-score reading layout with sticky track list, numbered steps, screenshots, warnings, and next-guide path.
  - Download: utility-first official-link panel with platform and safety proof.
  - Help: symptom-first routing and expandable recovery paths.
  - Trust pages: restrained editorial document pages without entertainment effects.
- `interaction_or_motion_notes`:
  - selected filters move a small playhead marker along a rail;
  - roster and song filters update counts and announce results;
  - sticky guide TOC highlights the current chapter;
  - expandable FAQ and help answers use native disclosure;
  - media receives a clear play/open state, never autoplay;
  - motion is limited to 100–250 ms state transitions and a single optional page-entry crossfade.
- `anti_generic_decisions`:
  - Reject a slogan-only hero because the main query needs immediate entity facts and task routes.
  - Reject uniform icon cards because roster, songs, guides, systems, and downloads require different scanning patterns.
  - Reject dark blue/purple neon because it reduces long-form readability and reproduces a generic game dashboard.
  - Reject gradient text because the official key art already supplies color and text must remain stable and readable.
  - Reject decorative glassmorphism because transparency competes with high-color media and weakens contrast.
  - Reject a wall of rounded rectangles because tables, ledgers, portrait indexes, timelines, and article columns better match real tasks.
  - Reject unrelated stock or AI art because hololive Dreams is visually inspectable through official and platform media.

## Site-Wide Design Principles

1. Confirm the entity and expose a useful path within the first viewport.
2. Let real media carry spectacle; let the interface carry structure.
3. Use color to mark action, selection, status, and provenance—not to fill empty space.
4. Keep volatile facts dated and source access visible without showing internal research IDs.
5. Match each page type to its task: lookup, comparison, reading, installation, or recovery.
6. Use whitespace as grouping, not as a substitute for missing content.
7. Preserve full keyboard, touch, zoom, and reduced-motion access.

## Layout System

- Page max width: global `.container` maximum 1400px; ordinary content padding 20px mobile, 32px tablet, 44–56px desktop.
- Reading measure: 62–72ch for guide prose; 52–64ch for notices and trust pages.
- Editorial grid: 12 columns desktop, 6 tablet, 1 mobile; asymmetry must resolve to intentional source order.
- Home first screen: approximately 7/5 media-to-ledger split on wide desktop, 1 column on mobile with the factual ledger before nonessential media details.
- Section rhythm: 40–64px home, 28–48px databases and utilities, 36–56px guides, 32–48px trust pages.
- Grid approach: use explicit named areas for hero and system layouts; use auto-fit only for genuinely comparable items.
- Sidebar usage: sticky TOC or filter summary at 1024px+, collapsible inline control below; never a second independent scroll region.
- Card usage: only for distinct actionable guides, platform choices, or media items. Do not put tables, FAQ groups, or every text block inside cards.
- Long-form reading: summary and date first, then TOC, chapters, callouts, annotated screenshots, FAQ, and related path.
- Data/table approach: sticky headers on desktop; compact rows with visible text labels; on mobile retain priority fields in rows and place secondary fields in an expandable detail region rather than duplicating data.

## Visual Density and Type Scale

- Home H1: 42–64px desktop, 34–44px tablet, 32–38px mobile; maximum two to three lines.
- Core page H1: 36–52px desktop, 31–40px tablet, 29–36px mobile.
- Guide and trust H1: 34–46px desktop, 29–36px mobile.
- H2: 26–34px home, 24–30px core pages, 23–28px guides.
- H3: 19–23px.
- Body: 16–18px, line-height 1.55–1.7; default 17px/1.65 on guides and 16px/1.55 in dense indexes.
- UI labels and metadata: 13–15px; do not use smaller than 12px.
- Data and tables: 14–16px with tabular numerals; row height 48–60px desktop and at least 52px for interactive mobile rows.
- Letter spacing: `0` for body and headings; 0.04em–0.08em is allowed only for short uppercase metadata labels.
- Home section gap: 48–72px maximum; compact connected bands may use 28–40px.
- Core list/database section gap: 28–48px.
- Guide/supporting section gap: 36–56px.
- Trust section gap: 32–48px.
- List/database density: portrait or cover, name/title, generation/type, status, source/date cue, and relation link must be discernible without opening another route.
- Screenshot acceptance points:
  - Home desktop: entity, live facts, at least three task routes, and meaningful key art are visible without an empty hero.
  - Home 375px: H1, status/date, primary route, and image crop fit without horizontal overflow.
  - Holomems desktop/mobile: named portraits, search/filter, result count, and useful labels look like a complete roster rather than generic cards.
  - Songs desktop/mobile: real columns remain scannable; mobile does not become 150 oversized cards.
  - Guide desktop/mobile: intro, TOC/step context, readable prose, and an annotated media slot appear in the first useful scroll.
- Mature page traits: complete navigation, real media, high-value fields, compact filters, visible update context, different page rhythms, source boundaries, and no thin placeholder modules.

## Home Page Design Plan

- First screen goal: identify hololive Dreams as the live Rhythm & RPG title, show the current platform/roster/song snapshot, and expose Start, Browse, and Download paths.
- Hero type: `reference hub hero`, not a marketing hero.
- Primary user action: Start with the beginner guide.
- Secondary actions: browse all holomems, browse songs, use official download links.
- Media strategy: use the full-roster official key visual as a poster crop with protected logo/credit space; never place long light text over faces.
- Trust signal placement: a compact “Independent guide · checked 2026-07-23” line beside the factual ledger, plus editorial-policy link later.
- Ad compatibility: monetization is unknown. Do not reserve a first-viewport slot. A future ad may occupy a stable, clearly labeled band after the task switchboard or before the footer only after approval.

### Home Sections

| Section | Purpose from Flow 03 | Visual treatment | Density | Notes |
|---|---|---|---|---|
| `home-hero` | Identify scope and immediate tasks | Asymmetric program cover: factual ledger left, roster poster right, ticket-tab actions | low-to-medium | No slogan-only empty space |
| `live-status` | Show dated launch facts | One horizontal “now playing” strip with platform, 54 roster, 150+ catalog, checked date | high | Facts link to deeper pages |
| `task-switchboard` | Route start, browse, install, fix | Four unequal typographic lanes with verbs and outcome labels | medium | Not an icon-card grid |
| `roster-preview` | Prove complete roster strength | Two-row portrait filmstrip with generation labels and complete-count cue | high | Use downloaded official portraits |
| `song-preview` | Preview catalog filters and status | Compact ledger sample beside the 150-song visual | high | Show columns, not article cards |
| `guide-paths` | Expose eight task paths | Numbered program list in two reading columns with difficulty/time labels | medium | One featured beginner path |
| `systems-strip` | Explain connected progression | Rhythm-to-quest-to-park-to-board loop drawn as a track diagram | medium | Text alternative required |
| `media-window` | Support visual learning | Offset 16:9 trailer/gameplay frames with visible duration/type labels | medium | Click-to-load; no autoplay |
| `update-log` | Surface volatile changes | Dated horizontal cue sheet/timeline | medium | No undated rumors |
| `trust-note` | Establish source and fan-site boundary | Plain editorial band with last-checked, correction, and policy links | reading | Minimal motif use |
| `home-faq` | Answer top questions | Two-column static/disclosure hybrid with concise questions | medium | Preserve deep links |

## Core Page Design Plans

| Page ID | Visual priority | Density | Primary layout | Above the fold and rhythm | Media and responsive notes |
|---|---|---|---|---|---|
| `home` | expressive | medium | Asymmetric reference-hub cover | H1, checked facts, task routes, key art; then alternate ledger, filmstrip, track diagram, timeline | Key visual art-directed for mobile |
| `wiki-index` | balanced | high | Chapter index plus system route map | Scope, last checked, four reference chapters, evidence labels | One system overview still; chapters become bordered rows on mobile |
| `holomems-index` | dense_readable | high | Searchable portrait roster with compact field rows | Count 54, search, generation/branch filter, complete portrait grid | All 54 local portraits required; 2 columns at 375px, 3–4 tablet, 6–8 desktop |
| `songs-index` | dense_readable | high | Search/filter ledger with cover thumbnail column | Current catalog count/date, search, type/talent filters, table header | Small covers; sticky desktop header; mobile priority rows with expandable metadata |
| `systems` | balanced | reading | Connected-loop diagram plus anchored chapters | Loop summary, five system families, TOC | Gameplay/park media beside relevant chapters, not gallery-first |
| `guides-index` | balanced | medium | Numbered program index grouped by user stage | Beginner entry, eight routes, estimated task/difficulty labels | One gameplay media anchor; list becomes single column without card inflation |
| `guide-getting-started` | balanced | reading | Show-score article with sticky chapter track | First-hour promise, prerequisites, ordered route | 3–5 screenshots; TOC collapses above article on mobile |
| `guide-rhythm-timing` | balanced | reading | Annotated gameplay analysis | Quick settings checklist, timing concepts, chapter rail | Rhythm screenshot and diagrams; avoid claims without verification |
| `guide-dream-park` | balanced | reading | Progression route sheet | Loop summary, priorities, quest/park stages | Park/stage stills; step numbers remain visible on mobile |
| `guide-unlock-holomems` | dense_readable | reading | Source-bounded steps plus roster links | Verified unlock methods and uncertainty boundary | Portrait samples and ticket motif; no fake rate tables |
| `guide-team-board` | dense_readable | reading | Board explanation with attribute ledger | Team/leader/board relationship summary | System screenshots; tables scroll or regroup by priority |
| `guide-minigames` | balanced | reading | Mode index plus rule chapters | Four named modes, quick route, verification note | Minigame screenshot required; each mode gets distinct heading marker |
| `guide-create-charts` | utility_first | reading | Step workflow plus interface annotation | Availability caveat, ordered creation steps | UI screenshots; controls are illustrative, not fake interactive widgets |
| `guide-performance` | utility_first | reading | Symptom-to-setting decision sheet | Platform selector, safe baseline, troubleshooting path | Screenshot only when it explains a setting; tables convert to grouped rows |
| `download` | utility_first | medium | Official platform link panel plus safety ledger | Steam/iOS/Android choices, verified source badges, pricing/status date | Platform marks stay secondary to text; no ad-like fake buttons |
| `system-requirements` | dense_readable | high | PC comparison table plus mobile status notes | Minimum/recommended toggle or columns, 50GB fact, checked date | Table scrolls with first column sticky; no invented mobile specs |
| `help` | utility_first | medium | Symptom-first route index and recovery articles | Search, platform chips, top problems, source boundary | Empty/no-result states suggest alternate terms and system requirements |

All core pages depend on `AppHeader` and `AppFooter` only as shared UI components. Hero, roster, table, FAQ, media, track, ticket, trust, and ad patterns remain page-local.

## Supporting and Trust Page Direction

- `updates`: compact dated timeline with source and affected-page labels; no promotional hero.
- `about`: restrained editorial page explaining scope, non-affiliation, and update practice.
- `contact`: labeled form or placeholder contact method only after a real address is supplied; never invent one.
- `editorial-policy`: document layout with fact/advice/community/source distinctions.
- `privacy` and `terms`: plain reading pages, minimal media, 65ch measure, predictable headings.

## Responsive Design Plan

### Mobile

- Navigation: text wordmark, one menu button, visible Download text link; menu uses a full-width disclosure/drawer with focus return and no nested horizontal scroll.
- Layout: single-column source order; factual ledger and primary action precede supporting media details.
- Roster: two portrait columns at 320–430px where labels fit; filters remain visible in a compact sticky row only if it does not obscure content.
- Songs/tables: keep primary fields in scrollable semantic rows; secondary metadata expands below. Use horizontal table scroll only when comparison semantics require it.
- Guides: TOC becomes a native disclosure before the first chapter; sticky desktop sidebar is removed.
- Media: use `<picture>`-style art direction and stable 16:9, 4:3, or portrait ratios; never crop text into unreadability.
- Ads: none in the first release unless monetization is confirmed; future ads cannot cover controls or insert between an instruction and its result.
- Touch: every control at least 44×44px with 8px separation; do not rely on hover.

### Tablet

- Layout: 6-column grid; most modules use 1–2 columns.
- Navigation: compact horizontal labels where they fit, otherwise the same accessible menu as mobile.
- Filter/TOC: collapsible side rail for landscape only; do not hard-shrink desktop tables.
- Media: 5/7 or 6/6 text/media splits with 32px gutters.

### Desktop

- Layout: 12-column grid inside 1400px; readable text columns do not stretch to container width.
- Sidebar/TOC: sticky within the main document only, with clear end boundary and no nested scrolling.
- Roster/songs: higher density and persistent filter/header context.
- Ads: future approved placements may use one stable middle band, one non-sticky article rail at wide widths, or one pre-footer band; trust pages remain ad-free.

### Responsive Test Widths

- 320px and 375px: long English labels, two-up roster, menu, filters, tables.
- 768px: tablet navigation and mixed media.
- 1024px: TOC/filter transition and page grid.
- 1440px: maximum container, line length, and asymmetry.
- Landscape mobile: header height, filters, and media must not consume the viewport.

## Color Direction

The palette is light-first and derived from the official key art’s white space, stage blue/cyan, hot pink, and ink-like indigo. Accent use remains rare so character art can supply the broader spectrum.

| Token | Value | Role |
|---|---|---|
| `background` | `#FFF9F6` | Warm paper-like program background |
| `surface` | `#FFFFFF` | Primary reading and data surface |
| `surface-alt` | `#F3F8FF` | Cool sky wash for reference bands |
| `text-primary` | `#24263B` | Tinted indigo ink |
| `text-muted` | `#5F6177` | Secondary text; 5.81:1 on background |
| `border` | `#D8D9E8` | Cool structural line |
| `accent` | `#D43872` | Stage pink for primary actions and selected states |
| `accent-contrast` | `#FFFFFF` | 4.56:1 on accent |
| `signal-blue` | `#166D91` | Links, information, and track markers |
| `success` | `#18794E` | Verified/available state plus text/icon |
| `warning` | `#8A4B08` | Caution/needs-checking plus text/icon |
| `danger` | `#B42318` | Error or unsafe state |
| `focus` | `#0B68C4` | 2–3px focus ring with offset |

- Colors to avoid: generic purple-blue gradients, large dark-navy fields, pure black, pure white as the full-page background, rainbow text, washed-out gray on color, and red/green-only meaning.
- Decorative pastel variants may appear only as low-chroma backgrounds and never as sole status indicators.
- A dark theme is not planned for launch. It would require independent contrast and media testing rather than palette inversion.

## Typography Direction

- Display and selected H1 style: `Newsreader`, 600–700, for show-program editorial character.
- Heading/UI/body style: `Instrument Sans`, 400–700, for compact navigation, filters, tables, and long English reading.
- Fallback: metric-compatible serif/sans fallbacks defined in Flow 05; `font-display: swap` or `optional`.
- Body: Instrument Sans 16–18px, line-height 1.55–1.7.
- Labels: Instrument Sans 13–15px, 550–650; uppercase only for very short metadata.
- Data/table: Instrument Sans with `font-variant-numeric: tabular-nums`; no monospace-as-technical-style shortcut.
- Recommended line length: 62–72ch long form; 45–60ch summaries.
- H1/H2/H3 hierarchy must use size, weight, position, and space—not color alone.
- Do not use Inter, Roboto, Open Sans, Lato, Montserrat, or a generic system-only stack as the project’s personality layer.
- At 200% zoom, text wraps without clipped filters, buttons, or navigation.

## Shape and Surface Rules

- Base radius: 10px for controls and media, 14px for distinct actionable panels; roster portraits use their natural silhouette without extra circular crops.
- Ticket tabs may use one clipped/notched edge only when the content is genuinely a label, date, platform, or state.
- Borders: 1px structural lines; 2px selected or focus state. Perforation is a short local motif, not a site-wide border.
- Shadows: none on data rows; one subtle elevation for the mobile menu, popover, or floating TOC only.
- Dividers: rhythm rails or plain rules organize ledgers and chapters.
- Surfaces: page background, reading surface, and cool alternate surface are sufficient; do not nest surfaces.
- Icons: one consistent outline SVG family at 18/20/24px. No emoji structural icons.

## Motion Rules

- Motion intensity: 3/10, subtle.
- Instant feedback: 100–150ms.
- Menus, filter states, disclosures: 180–250ms.
- Optional page/hero crossfade: 250–400ms; no long stagger on 54 roster items.
- Easing: `cubic-bezier(0.25, 1, 0.5, 1)` for entry, faster ease-in for exit.
- Animate transform and opacity only; native disclosure may use a grid-row technique if needed.
- `prefers-reduced-motion` removes spatial movement and retains only immediate state visibility.
- Forbidden: bounce, elastic motion, auto-scrolling marquees, parallax faces, ambient floating shapes, decorative fireworks, or animation that delays content.

## State and Interaction Rules

- Every interactive element needs default, hover where supported, focus-visible, active, disabled, loading, error, and success rules when applicable.
- Hover never reveals required information; touch and keyboard users receive the same content.
- Focus ring is 2–3px `focus`, offset 2px, with at least 3:1 adjacent contrast.
- Selected filters use color, a playhead marker, text state, and `aria-pressed` or equivalent.
- Filter/search results announce count changes; no-results states suggest clearing filters or alternate names.
- Navigation indicates the current page with text weight plus a rail marker, not color alone.
- External/offical links state their destination in visible text; download buttons cannot resemble ads.
- Use native `<details>`/`<summary>` for FAQ/help when possible.
- Search input has a persistent label and clear button; debounce only if necessary.
- Route changes move focus to main content and preserve previous filter/scroll state when returning.

## Media Strategy

- Recommended media:
  - complete official key art for entity recognition;
  - all 54 official named roster thumbnails;
  - platform screenshots for story, park, minigames, and systems;
  - official/platform promotional panels for the launch catalog and roster scale;
  - official YouTube thumbnails linked to videos, not copied video files;
  - song cover thumbnails when Flow 06 builds the catalog.
- Pages requiring strong media: Home, Holomems, Songs, Systems, rhythm/minigame/park guides.
- Pages where media stays minimal: Download, system requirements, Help, updates, trust/legal pages.
- Asset landing mode: enabled by user-approved network access and Flow 04 rules.
- Download root: `public/images/`.
- Downloaded in Flow 04: 62 files—54 official roster portraits and 8 key/platform/video assets.
- Source requirements: every downloaded file is logged with original URL and source page in `planning/asset-source-log.md`.
- Placeholder strategy: non-core missing screenshots use a ratio-stable labeled media frame; the hero and roster may not use placeholders because real assets are available.
- Image SEO:
  - concise lowercase hyphenated names;
  - alt describes visible content and page purpose once, without repeating nearby headings;
  - captions explain verification, mode, or context only when useful;
  - decorative rails/stars use CSS or empty alt;
  - representative 1200px+ key art can populate eligible structured-data `image` fields after domain/config work.
- Performance:
  - convert large JPEG hero assets to responsive WebP/AVIF variants in Flow 05;
  - target hero delivery under roughly 250–350KB per viewport;
  - roster portraits are already 448px WebP at roughly 45–69KB each and must be lazy-loaded outside the initial viewport;
  - reserve intrinsic dimensions or aspect ratio for all images;
  - eager-load only the actual LCP image;
  - click-to-load YouTube embeds from the local thumbnail.
- Avoid: hotlinks, autoplay video, raw official video/audio redistribution, low-resolution search thumbnails as hero art, unverified screenshots presented as facts, AI illustrations that replace inspectable game media, and text baked into images when HTML can carry it.

## UI/UX Skill Notes

- Available helpers checked:
  - `ui-ux-pro-max`
  - `frontend-design`
  - `critique`
  - browser and image inspection capabilities
- Used:
  - `ui-ux-pro-max` design-system query with variance 8, motion 3, density 8;
  - `ui-ux-pro-max` UX check for navigation, filters, tables, accessibility, and loading;
  - `frontend-design` plus its typography, color/contrast, spatial, responsive, motion, and interaction references;
  - `critique` as a design-director review framework;
  - image inspection of downloaded key art, roster, story, minigame, song, and roster-scale assets.
- Accepted recommendations:
  - light editorial base, rare pink accent, asymmetric composition, high database density, 4pt spacing, 44px targets, visible focus, stable media dimensions, and restrained motion.
- Rejected recommendations:
  - newsletter conversion pattern: unrelated to user intent;
  - generic Bento grid: would reproduce uniform card-wall behavior;
  - Roboto body font: too generic for the intended identity;
  - hover scale and shadow expansion: creates unstable/noisy roster behavior;
  - GSAP page transitions: unnecessary dependency and motion for a content-first site.
- Skill limitations: tooling suggestions were filtered through the project research and Flow 03 structure; no skill output overrides page scope, facts, media provenance, or code boundaries.

## Design System Contract

- `style_thesis`: hololive Dreams needs the energy of a stage and theme park, but users need a trustworthy launch reference; the show-program archive joins those needs without imitating a game client or a marketing template.
- `design_tooling_used`: UI/UX design-system search, frontend design principles and references, critique framework, live image discovery, and local visual inspection.
- `palette_tokens`: defined in Color Direction with accessible text/accent pairs.
- `typography_tokens`:
  - display: Newsreader, 42–64px home / 34–52px core, 600–700, line-height 1.02–1.12;
  - heading: Instrument Sans, 19–34px, 600–700, line-height 1.15–1.3;
  - body: Instrument Sans, 16–18px, 400–500, line-height 1.55–1.7;
  - label: Instrument Sans, 13–15px, 550–650, line-height 1.25–1.4;
  - data/table: Instrument Sans tabular numerals, 14–16px, 450–650, line-height 1.35–1.5.
- `spacing_density_tokens`:
  - section gap: 28–48px data/utility, 36–56px reading, 40–64px expressive;
  - grid gap: 12–20px dense, 20–32px expressive;
  - content padding: 16–24px panels, 20/32/44–56px page gutters;
  - row height: 48–60px desktop, 52px minimum interactive mobile;
  - page density: medium Home, high indexes, reading guides/trust, utility-first download/help.
- `shape_and_surface_rules`: 10/14px restrained radii, border-led hierarchy, minimal shadows, no nested cards, ticket edges only for semantic labels.
- `motion_rules`: subtle 100–250ms state transitions, optional 250–400ms crossfade, no decorative loops, full reduced-motion alternative.
- `page_design_contracts`:
  - Home: asymmetric poster/ledger plus at least three distinct section rhythms; screenshot must show theme, facts, and tasks.
  - Core list/database: complete filters, counts, media, and fields; screenshot must not read as generic cards.
  - Core detail/system: loop/attribute/media hierarchy; screenshot must show meaningful fields above prose.
  - Guides/supporting: TOC, steps, warnings, source state, and annotated media; screenshot must show readable first useful scroll.
  - Download/help utility: actions and recovery first; screenshot must distinguish official action from any future ad.
  - Trust: plain editorial reading, no entertainment effects.
- `anti_ai_slop_decisions`: all seven anti-generic decisions under Design Signature are mandatory implementation constraints.

## Advertising Compatibility

- Monetization status: `unknown`.
- First-release rule: implement no real ad code or invented ad placeholders.
- Compatible future positions after explicit approval:
  - one stable home band after `task-switchboard`;
  - one article slot after the TOC or a complete section;
  - one non-sticky wide-screen rail outside the reading column;
  - one pre-footer band.
- Disallowed: before topic confirmation, inside roster/song filter controls, between an instruction and outcome, beside a real download button, in trust/legal pages, or as sticky mobile overlay.
- Future ad containers must be labeled, reserve stable dimensions, and remain visually distinct from tickets, platform buttons, and guide links.

## Accessibility and Readability Notes

- Normal text contrast target: at least 4.5:1; UI/large text at least 3:1.
- Body remains 16px minimum; browser zoom is never disabled.
- Skip link, semantic landmarks, sequential headings, labeled search, and keyboard-operable filters are mandatory.
- Touch targets: 44×44px minimum with 8px separation.
- Meaningful images have descriptive alt; decorative motifs use empty alt or CSS.
- Media controls and filter state never depend on hover, color, or motion alone.
- Reduced-motion behavior is required.
- Tables retain semantic headers and accessible overflow context.
- System diagrams require nearby text summaries.
- Long pages provide TOC/anchors and a return-to-top path without trapping focus.

## Anti-Template Checklist

- Keyword-derived visual signature: pass
- Entity and task clear in first viewport: pass in plan
- Real relevant media available: pass
- Complete roster asset coverage: pass, 54/54 downloaded
- At least three home section rhythms: pass
- Page types receive different layouts: pass
- Databases use fields, filters, and media instead of article cards: pass
- Type scale capped for reference content: pass
- Accent and focus contrast checked: pass
- Mobile retains search/filter/data tasks: pass in contract
- Ads do not compete with task or CTA: pass in contract
- Universal renderer/shared component sprawl avoided: pass
- Framework-specific implementation: caution, blocked until framework selection
- Large hero source optimization: caution, required in Flow 05

## Design Critique

### Anti-Patterns Verdict

- Verdict: **pass in planning, caution in implementation**.
- The direction avoids the obvious AI tells: no cyan-on-dark glow, no purple gradient text, no glass wall, no hero metrics, no universal Bento grid, no default font stack, and no decorative icon atop every heading.
- It will fail if Flow 05 turns the ticket motif into a rounded card skin, repeats the same panel on every page, or lets the official art do all of the visual work without building strong ledgers, filters, and article rhythm.

### Overall Impression

The program-archive direction can feel unmistakably tied to hololive Dreams while remaining a serious reference product. Its single biggest opportunity is to make the roster and song catalog look like first-class tools rather than promotional galleries.

### What Is Working

1. Real, complete roster media gives the site immediate credibility and color without synthetic decoration.
2. The show-program metaphor supports dates, platforms, chapters, steps, and updates as functional UI labels.
3. Page-specific layouts protect the site from universal-template repetition.

### Priority Risks and Fixes

1. **Risk: motif overuse.** Repeated ticket notches could become a gimmick.  
   **Fix:** restrict them to labels, dates, platforms, and states; use plain rules elsewhere.
2. **Risk: official art overwhelms navigation.** The key art is dense and colorful.  
   **Fix:** keep text on a solid surface, preserve protected crop zones, and use the art as one poster field.
3. **Risk: 54 portraits become a generic card wall.**  
   **Fix:** pair portraits with compact labels, branch/generation controls, result count, and a roster-ledger rhythm.
4. **Risk: the songs page becomes 150 large cards.**  
   **Fix:** use a compact catalog table/list with thumbnail support and progressively disclosed metadata.
5. **Risk: mobile loses the distinctive composition.**  
   **Fix:** preserve rail markers, tickets, real media, and dense task order while changing columns, not simply stacking desktop cards.

### Required Flow 05 Focus

- Implement the asymmetric home cover, task switchboard, roster layout, song ledger, and guide reading shell as truly different page-local structures.
- Optimize the 1.56MB key visual before it can become the LCP asset.
- Build accessible search/filter behavior without a heavy client application shell.

### Required Flow 09 Screenshot Focus

- Home at 1440px and 375px.
- Holomems at 1440px and 375px with filters and multiple portraits visible.
- Songs at 1440px and 375px with real column behavior.
- One long guide at 1440px and 375px with TOC, steps, and media.
- Download and Help action clarity.

## Risks and Open Questions

- The frontend framework remains `unknown`; Flow 05 cannot initialize the empty project until the user selects one.
- Production domain, contact email, business goal, monetization, and local logo remain unspecified.
- The full official key visual is 1.56MB JPEG and requires responsive derivatives.
- Song cover assets are not yet downloaded because the complete song data capture belongs to Flow 06.
- Additional park, board, settings, and custom-chart screenshots should be captured or downloaded when Flow 06 verifies the related content.
- Official English material spells one minigame `Colliect Cooking`; content production must verify before rendering it as canonical.

## Files Produced

- `planning/design-brief.md`
- `planning/component-plan.md`
- `planning/visual-asset-plan.md`
- `planning/asset-source-log.md`
- `handoff/flow-04-design-brief.md`

