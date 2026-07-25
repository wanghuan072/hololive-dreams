# Component Plan

## Status

- Flow: 04 Visual Style Planning
- Status: `completed_with_warnings`
- Date: 2026-07-23
- Based on: `planning/design-brief.md`

## Component Principles

1. Flow 05 should implement only `AppHeader` and `AppFooter` as new shared UI components.
2. Hero, roster, song ledger, guide path, FAQ, table, media, trust, timeline, ticket, and ad patterns stay inside their page files or page-local styles.
3. Shared data may be reused by content type; visual markup should not be abstracted into a universal page renderer.
4. Every interactive control needs semantic HTML, keyboard access, visible focus, a 44px touch target, and a no-results or unavailable state.
5. Global styles should contain only base elements, `:root` tokens, accessibility foundations, and `.container`; `.container` has `max-width: 1400px`.

## Shared Component Inventory

| Component | Purpose | Used on | Priority | Notes |
|---|---|---|---|---|
| `AppHeader` | Establish site identity, global navigation, current location, and the Download route | All pages | P0 | Text-first identity until a real independent-site logo exists |
| `AppFooter` | Provide secondary navigation, trust/legal routes, non-affiliation, and update context | All pages | P0 | Must not expose invented contact or social details |

No other new shared display component is required by this plan.

## AppHeader

- Purpose: make the seven top-level destinations predictable without looking like the official game client.
- Desktop layout:
  - left: compact text identity using `hololive Dreams` plus a small `Guide` or `Reference` qualifier;
  - center/right: Home, Wiki, Holomems, Songs, Guides, Download, Help;
  - Download may receive the accent treatment but must remain textually explicit.
- Tablet layout:
  - compact labels if all fit with 44px targets;
  - otherwise use the mobile menu pattern instead of squeezing or horizontal scrolling.
- Mobile layout:
  - text identity left;
  - one labeled menu button right;
  - menu presents the same seven links plus trust routes in a separate group;
  - opening moves focus into the menu, Escape closes, close returns focus to the trigger.
- Navigation behavior:
  - current page uses font weight, a small rhythm-rail/playhead marker, and `aria-current="page"`;
  - hover can shift color only when hover is supported;
  - sticky behavior is optional, but a sticky header must reserve its height and never cover anchors.
- Logo handling:
  - no local logo exists;
  - use a text identity, not a copied official logo in the header;
  - the official logo may remain visible inside sourced key art.
- CTA handling:
  - one accent Download link maximum;
  - do not add newsletter, sign-up, or invented commercial CTAs.
- Accessibility:
  - include a visible-on-focus skip link before the header;
  - keyboard order follows visual order;
  - menu button has expanded state and an accessible label;
  - targets are at least 44×44px.
- Flow 05 note: keep implementation framework-native and lightweight; do not add a menu library unless the selected framework already supplies an accessible primitive.

## AppFooter

- Purpose: close the content journey, surface trust pages, and make the independent-site boundary unambiguous.
- Link groups:
  - Explore: Wiki, Holomems, Songs, Guides;
  - Play and Support: Download, System Requirements, Help, Updates;
  - About: About, Editorial Policy, Contact;
  - Legal: Privacy, Terms.
- Trust content:
  - independent fan/reference statement;
  - no affiliation or endorsement implication;
  - last-updated or content-review link where appropriate;
  - copyright/trademark wording drafted and verified in later content/SEO flows.
- Visual density: compact editorial ledger, separated by plain rules rather than card groups.
- Mobile behavior: stacked groups with headings; legal and trust copy remains readable and is not hidden in an accordion.
- Missing input:
  - do not show an email until a real public address is supplied;
  - do not invent social profiles, company name, or business registration.
- Advertising: footer remains content-led; an approved future pre-footer ad is outside `AppFooter`.

## Page-Local Section Pattern Inventory

| Pattern | Purpose | Used on | Visual rules | Implementation notes |
|---|---|---|---|---|
| Program cover hero | Confirm entity and expose tasks | Home | Asymmetric solid-text ledger plus key-art poster; no text over faces | Write inside home page |
| Compact page masthead | Establish scope/date/next action | Core pages | H1, 1–2 sentence scope, checked date, local controls | Page-local; no universal Hero component |
| Task switchboard | Route Start/Browse/Download/Fix | Home | Four unequal typographic lanes with verbs and outcomes | Semantic links in home page |
| Live status strip | Show dated launch facts | Home, Download, Updates | Compact ledger row, source/date cue, no metric-card treatment | Use list or definition list |
| Portrait roster | Support complete character lookup | Home preview, Holomems | Natural portrait silhouette, name and branch/generation labels, compact result count | Dedicated page-local markup |
| Song ledger | Support catalog scan/filter | Home preview, Songs | Sticky column header, thumbnail, title, talent/type/status fields | Dedicated page-local table/list |
| System track | Explain connected progression | Home, Systems | Rhythm rails join five labeled stages; text summary alongside | Semantic ordered list or SVG plus text |
| Guide program list | Route the eight guides | Home, Guides | Numbered rows, outcome, estimated task/difficulty labels | No icon-card grid |
| Guide score sheet | Long-form task reading | Eight guides | Summary, native TOC, numbered chapters, callouts, annotated media | Write in each guide route/template for the guide content type only |
| Platform action panel | Safe official downloads | Download | Text label, platform, availability/date, official destination, safety note | Do not style like an ad |
| Requirement ledger | Compare PC requirements | System Requirements | Semantic table, tabular numbers, sticky first column where useful | Mobile overflow label required |
| Help route index | Match symptom to recovery | Help | Search, platform filters, symptom groups, no-result guidance | Result count announced |
| Update cue sheet | Track volatile changes | Home, Updates | Dated line with affected areas and source link | Chronological list |
| Editorial trust band | Explain sourcing/non-affiliation | Home, About, Editorial Policy | Plain solid surface, minimal motif | No promotional CTA |
| FAQ block | Answer recurring questions | Home, guides, Help | Short visible answers or native disclosures grouped by task | Do not nest inside cards |
| Media frame | Show gameplay, park, story, or video | Media-rich pages | Stable ratio, caption/type label, visible play/open state | Source/alt/crop remain page-specific |
| Future ad placeholder | Reserve stable space only if approved | Selected content pages | Clearly labeled, neutral, fixed minimum dimensions | Do not implement in Flow 05 without monetization approval |

## Pattern Specifications

### Program Cover Hero

- Required content:
  - exact primary H1 from Flow 03;
  - entity/type explanation;
  - last-checked line;
  - one primary Start action;
  - Browse Holomems, Browse Songs, and Download secondary routes;
  - current platform/roster/song facts;
  - `public/images/hero/hololive-dreams-key-visual.jpg`.
- Desktop:
  - 5/7 or 7/5 asymmetric grid;
  - text stays on `surface` or `background`;
  - art may break the grid edge inside the 1400px container.
- Mobile:
  - factual content before the decorative portion of the image;
  - use a mobile-safe crop or contained image;
  - never require the 1920×1080 original for a 375px viewport.
- Anti-template rule: no centered slogan, gradient text, floating blobs, metric cards, or full-viewport empty height.

### Compact Page Masthead

- Required content: breadcrumb where depth requires it, H1, scope, checked date/source state, and page-specific control or next action.
- H1 follows core-page scale caps.
- Database pages place search/filter controls immediately after the scope.
- Guides place summary and TOC entry after the scope.
- Trust pages omit entertainment motifs except a single plain divider.

### Portrait Roster

- Required fields:
  - portrait;
  - official display name;
  - branch/generation or grouping when verified;
  - availability/playable state if relevant and sourced;
  - relation to applicable guides.
- Optional fields: localized/alternate name only when useful; never speculative tier or reroll rank.
- Grid:
  - 2 columns mobile;
  - 3–4 tablet;
  - 6–8 desktop depending on label fit.
- Portrait treatment:
  - preserve the supplied irregular rounded frame and background;
  - do not re-crop into generic circles;
  - reserve intrinsic ratio to prevent CLS.
- Interaction:
  - no detail route is planned, so tiles must not pretend to link to nonexistent pages;
  - guide relations can be explicit text links below groups.
- Loading:
  - initial visible portraits may load normally;
  - remaining portraits lazy-load;
  - filtering must not refetch remote images.

### Song Ledger

- Required fields:
  - cover thumbnail when available;
  - song title;
  - performer/talent;
  - original/cover/type where verified;
  - catalog/update context;
  - source/date relationship.
- Desktop: semantic table or structured row list with sticky header.
- Mobile:
  - retain title, performer, type, and thumbnail;
  - reveal secondary fields in a native disclosure;
  - avoid converting every record into a large marketing card.
- Search/filter:
  - visible labels;
  - count updates;
  - clear-all action;
  - no-results state suggests alternate spellings or clearing filters.

### Guide Score Sheet

- Required content:
  - summary/outcome;
  - prerequisites;
  - ordered TOC;
  - step/chapter numbers;
  - fact/advice/caution callouts;
  - relevant media;
  - source/checked context;
  - FAQ and related next guide.
- Desktop: 3-column TOC plus 8–9-column article.
- Mobile: TOC becomes a native disclosure before the article.
- Reading measure: 62–72ch.
- Callouts:
  - fact/source note uses `signal-blue`;
  - advice uses neutral `surface-alt`;
  - caution uses warning color plus label/icon;
  - unverified/community observation must be visibly marked.
- Do not create a shared guide component that renders unrelated wiki, download, help, or trust pages.

### System Track

- Visual form: five connected nodes—Rhythm, Quests, Dream Park, Team/Board, and supporting minigames/custom charts.
- The graphic is explanatory, not a navigation replacement.
- Each node has adjacent text and deep links.
- If SVG is used, provide a visible text list and accessible name; do not encode meaning by color alone.
- Mobile uses a vertical ordered track, not a squeezed horizontal diagram.

### FAQ Block

- Use short visible answers for 3–4 critical questions; use native disclosures for longer groups.
- Each question remains an H3 or appropriately structured heading inside the section.
- Summary targets are at least 44px high.
- Expanded state is programmatically available.
- Do not animate height directly; use native behavior or a reduced-motion-safe grid-row transition.
- Later SEO implementation may add FAQ structured data only when visible content and policy requirements match.

### Media Frame

- Ratios:
  - key/trailer/gameplay: 16:9;
  - roster: source intrinsic ratio;
  - article annotations: 4:3 or 16:9 according to the content;
  - song covers: 1:1.
- Required:
  - intrinsic width/height or aspect ratio;
  - descriptive alt;
  - optional caption only when it adds mode, date, or verification context;
  - visible external/open/play label where relevant.
- Video:
  - use local YouTube thumbnail;
  - click to load embed;
  - no autoplay;
  - preserve link alternative.
- Missing media: show a simple labeled ratio-stable frame only for non-core media. Do not use placeholder art for hero or roster.

### Requirement Ledger

- Semantic `<table>` with `<caption>` or nearby clear heading.
- Use tabular numbers and explicit units.
- Desktop may freeze the category column.
- Mobile may scroll horizontally with an overflow hint; do not duplicate the same data in inaccessible CSS-only labels.
- Minimum and recommended columns must remain unambiguous.
- Unknown mobile requirements render as “Not published/Not verified,” not blanks or guesses.

### Help Route Index

- Search has a persistent label.
- Platform chips are real buttons with pressed state.
- Symptom groups use plain rows or native disclosures.
- No results:
  - state the active filters;
  - offer Clear filters;
  - link to System Requirements and official support routes.
- Error messages identify the problem and recovery path.
- The UI must not imply automated diagnosis if it only filters static content.

## State and Interaction Rules

- Default: sufficient text/icon contrast and clear affordance.
- Hover: color or 1–2px visual lift only under `(hover: hover)`; never required to reveal actions.
- Focus-visible: 2–3px `#0B68C4` ring, 2px offset.
- Active: immediate 100–150ms pressed/color response without layout shift.
- Disabled: semantic `disabled` or `aria-disabled`, reduced emphasis, explanatory nearby text where needed.
- Loading: skeleton only for content that genuinely waits; reserve final geometry.
- Empty/no results: explain why and provide clear recovery.
- Error: `#B42318` plus icon/text; put the message near the affected control.
- Success/verified: `#18794E` plus text/icon; do not use green alone.
- Selected: accent or signal-blue plus rail marker and programmatic pressed/current state.
- Reduced motion: eliminate translation and stagger; preserve state changes.

## Responsive Component Rules

### Mobile

- Base page gutters: 20px.
- All shared and local controls: 44px minimum target.
- Menu is one accessible overlay/disclosure; content behind cannot receive focus while a modal drawer is open.
- Roster stays image-rich; songs stay data-rich; guides stay reading-first.
- Fixed UI must reserve safe-area and content space.

### Tablet

- Gutters: 32px.
- Use content-driven transition between menu and horizontal nav.
- Two-column local patterns only where both columns retain useful width.
- Filters may wrap into two rows; no clipped chip carousels for essential options.

### Desktop

- Gutters: 44–56px within the 1400px maximum.
- Sticky TOC/filter state must stop before footer.
- Hover enriches feedback but does not expose missing content.
- Page-local grids can vary by task; do not standardize them into one grid component.

## Accessibility Notes

- Use semantic header, nav, main, section, article, aside, footer, table, list, and form elements.
- Sequential headings; style does not determine heading level.
- Skip link and route-change focus management.
- Search and filters use explicit labels.
- Images use content-specific alt; decorative motifs use empty alt or CSS.
- Visible focus is never removed without replacement.
- Filters, menu, disclosures, and media actions are keyboard-operable.
- Result count and async state changes use a polite live region where appropriate.
- Do not disable browser zoom.
- Test at 200% zoom, keyboard-only, reduced motion, and color-vision emulation.

## Advertising Compatibility

- No ad component is planned because monetization is unspecified.
- If the user later confirms ads, use page-local placeholders with:
  - a visible Ad label;
  - reserved dimensions;
  - neutral surface and border;
  - at least 24px separation from real actions;
  - no placement inside filter bars, data rows, instruction sequences, download panels, or trust pages.
- A future site-wide ad manager requires separate user authorization and does not change this component boundary.

## Implementation Notes for Flow 05

- Implement first:
  - `AppHeader`
  - `AppFooter`
- Implement directly in page files:
  - program cover hero;
  - live status strip;
  - task switchboard;
  - roster preview and roster index;
  - song preview and song ledger;
  - systems track;
  - guide program list and guide article sections;
  - platform panel;
  - requirements table;
  - help routes;
  - update timeline;
  - FAQ, media, trust, and future ad patterns.
- Recommended semantic section skeleton:
  - `<section class="<topic>-section"><div class="container"><div class="<topic>-content">…</div></div></section>`
- Global style constraints:
  - only base elements, `:root` variables, accessibility foundations, and `.container`;
  - `.container { max-width: 1400px; }`;
  - page-specific classes and layout rules remain local.
- Data structure:
  - one simple data export or content collection per content type;
  - do not make a catch-all page schema or renderer.
- Framework block:
  - component file extensions, routing primitives, client-island strategy, and package choices cannot be specified until the frontend framework is selected.

## Out of Scope

- No component or page code in Flow 04.
- No framework initialization or dependency installation.
- No final copywriting or SEO metadata.
- No real ad integration.
- No universal component library.
- No modification of downloaded images beyond selecting the optimized official 448px WebP renditions for roster portraits.

