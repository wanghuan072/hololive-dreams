# Visual Asset Plan

## Status

- Flow: 04 Visual Style Planning
- Status: `completed_with_warnings`
- Date: 2026-07-23
- Project keyword: `hololive dreams`
- Based on:
  - `planning/site-structure.md`
  - `planning/content-map.json`
  - `planning/design-brief.md`

## Asset Strategy

- Overall stance: real official/platform screenshots and artwork first, with minimal decorative imagery.
- Primary asset roles:
  - identify the game and roster;
  - prove the site covers all 54 playable holomems;
  - explain Dream Park, story, minigames, rhythm play, songs, and guides;
  - provide lightweight click-to-load video entry points.
- Background images: avoid behind body copy and data. A cropped key-art region may sit beside the home factual ledger, never beneath long text.
- Content images: place next to the exact roster, song, system, step, platform, or update they explain.
- Decorative images: limited to none. Rhythm rails, ticket perforations, and stage marks should be CSS/SVG motifs with empty alt.
- Asset completion in Flow 04:
  - 54/54 official named holomem portraits downloaded;
  - 1 official full-roster key visual downloaded;
  - 1 Steam header downloaded as a small optional platform asset;
  - 2 Steam screenshots downloaded for story and minigames;
  - 2 Steam promotional feature panels downloaded for song and roster scale;
  - 2 official YouTube thumbnails downloaded for video entry points.

## Source Rules

- Preferred sources:
  - official hololive Dreams site and first-party CDN;
  - Steam store assets;
  - official hololive YouTube uploads;
  - official platform stores;
  - personally captured gameplay screenshots in later flows when needed and allowed.
- Source hierarchy:
  - official/first-party for identity, roster, system names, and key art;
  - platform media for version-specific screenshots and store facts;
  - video thumbnails only as links/previews, not as proof of unsupported claims.
- Assets needing later verification:
  - screenshots for rhythm timing, Holomem Board, settings, custom chart creation, and specific Dream Park steps;
  - song cover mapping against the complete Flow 06 catalog.
- Not used:
  - unrelated stock art;
  - AI-generated replacements for game content;
  - competitor screenshots as site content;
  - low-resolution search thumbnails as final hero art.
- Every downloaded asset is listed in `planning/asset-source-log.md`.

## Asset Landing Mode

- Enabled: yes
- Authorization basis: user enabled network search and the Flow 04 workflow explicitly permits relevant image downloads within the current project.
- Download root: `public/images/`
- Created/used subdirectories:
  - `public/images/hero/`
  - `public/images/holomems/`
  - `public/images/screenshots/`
  - `public/images/sections/`
  - `public/images/source/` (reserved; no source originals retained in this flow)
- Code references changed in Flow 04: none
- External hotlinks added to code: none

## Downloaded and Recommended Assets

| Asset ID | Page/slot | Asset type | Intended use | Local file | Source page | Crop/ratio | Alt text direction | Performance/quality | Decision |
|---|---|---|---|---|---|---|---|---|---|
| `hero-01` | Home hero | key art | Immediate entity and roster recognition | `public/images/hero/hololive-dreams-key-visual.jpg` | Official site | 16:9; art-directed crop | Full playable holomem roster surrounding the hololive Dreams logo | 1920×1080, 1.56MB JPEG; must derive responsive WebP/AVIF | used after optimization |
| `hero-02` | Download/platform note | store header | Compact Steam context | `public/images/hero/hololive-dreams-steam-header.jpg` | Steam | 460:215 | Steam header artwork for hololive Dreams | 460×215, 64KB; too small for main hero | optional candidate |
| `screen-01` | Systems/story guide | screenshot | Show English story presentation | `public/images/screenshots/hololive-dreams-story-scene-steam.jpg` | Steam | 16:9 | Three holomems in an English Dream Park story scene | 1920×1080, 451KB; derive responsive version | recommended candidate |
| `screen-02` | Minigames guide | screenshot | Show a playable Dream Park minigame | `public/images/screenshots/hololive-dreams-minigame-steam.jpg` | Steam | 16:9 | Holomems jumping over giant food obstacles in a Dream Park minigame | 1920×1080, 478KB; derive responsive version | used |
| `section-01` | Songs index/home preview | promotional panel | Establish official 150+ launch-song scale | `public/images/sections/hololive-dreams-steam-feature-01.webp` | Steam | 16:9 | Official collage stating more than 150 songs at launch | 460KB WebP with baked text; use beside matching factual context | used |
| `section-02` | Home/wiki | promotional panel | Show roster and official game identity | `public/images/sections/hololive-dreams-steam-feature-02.webp` | Steam | 16:9 | Four group artworks around the hololive Dreams logo | 705KB WebP; optimize or use below fold | recommended candidate |
| `video-01` | Home media window | video thumbnail | Link to official full trailer | `public/images/sections/hololive-dreams-official-trailer-thumbnail.jpg` | Official YouTube video | 16:9 | Thumbnail for the official hololive Dreams full trailer | 1280×720, 288KB; click-to-load embed | used |
| `video-02` | Home/guides | video thumbnail | Link to official gameplay stage | `public/images/sections/hololive-dreams-official-gameplay-thumbnail.jpg` | Official YouTube video | 16:9 | Thumbnail for an official hololive Dreams gameplay presentation | 1280×720, 269KB; click-to-load embed | used |
| `roster-01..54` | Holomems roster | named portraits | Complete official playable roster | `public/images/holomems/hololive-dreams-<name>.webp` | Official site | supplied portrait frame | Portrait of `<display name>` in hololive Dreams | 448px WebP, roughly 45–69KB each; lazy-load below fold | used |

The source log records each roster image separately, including its original CDN URL and official alt name.

## Candidate Assets Not Yet Downloaded

| Asset ID | Page/slot | Candidate/source | Reason deferred | Decision |
|---|---|---|---|---|
| `park-01` | Home systems strip, Dream Park guide | Official Park page imagery | Need a specific high-resolution source URL or a verified local gameplay capture | required in Flow 06 |
| `rhythm-01` | Home media, rhythm guide | Official System page or personally captured gameplay | Existing Steam screenshot set does not show the rhythm lane | required in Flow 06 |
| `board-01` | Systems and team/board guide | Official System page screenshot | Must visibly match current English UI and the described board state | required in Flow 06 |
| `settings-01` | Performance guide | Current PC/mobile settings screenshot | Must match launch build and platform | required in Flow 06 |
| `chart-01` | Custom chart guide | Current create-chart interface screenshot | Availability and exact UI must be verified first | required in Flow 06 |
| `song-covers` | Songs index | Official music catalog images | Must map every downloaded cover to a verified song record | required during Flow 06 dataset capture |

## Page-Level Asset Requirements

| Page ID/group | Required assets | Optional assets | Decorative assets | Missing assets | Notes |
|---|---|---|---|---|---|
| `home` | key visual, roster preview portraits, song panel, one gameplay/park still, two video thumbnails | roster-scale panel | CSS rails/stage marks only | rhythm or park still | One LCP image only |
| `wiki-index` | one system/park overview still | story scene | none | system overview | Keep chapter index primary |
| `holomems-index` | all 54 official portraits | key visual excerpt | none | none | 100% portrait coverage achieved |
| `songs-index` | cover for every catalog record where available, launch song panel | official video thumbnails | none | complete cover mapping | Do not use lyrics imagery |
| `systems` | rhythm lane, park, board/team, minigame, chart UI | story scene | track diagram as semantic SVG/CSS | four specific system screenshots | Media belongs beside chapters |
| `guides-index` | one gameplay or park anchor | trailer thumbnail | rails only | none after a verified gameplay still | Keep index scannable |
| `guide-getting-started` | 3–5 current UI/gameplay screenshots | short video preview | step rails | verified first-hour sequence | Screens follow steps |
| `guide-rhythm-timing` | rhythm-lane screenshot and annotated timing view | official gameplay video | playhead line | current English/PC lane view | No invented judgment values |
| `guide-dream-park` | park/quest screenshots | story scene | route line | specific park capture | Match guide steps |
| `guide-unlock-holomems` | invitation/unlock UI plus selected portraits | key art | ticket tab | unlock UI | Do not imply rates |
| `guide-team-board` | team/board screenshot | portraits | relation line | board screenshot | Tables carry fields |
| `guide-minigames` | minigame screenshot | more mode stills | mode marker | three additional mode captures | Current minigame image is usable |
| `guide-create-charts` | create-chart UI screenshots | official gameplay video | step rail | current chart UI | Verify availability first |
| `guide-performance` | settings screenshots | platform header | none | PC/mobile settings | Only show settings that exist |
| `download` | small platform marks or Steam header | key art fragment | none | none essential | Text official links are primary |
| `system-requirements` | none required | small Steam context | none | none | Data table is the asset |
| `help` | screenshots only where they clarify recovery | platform image | none | issue-specific captures | Avoid decorative media |
| `updates` | only change-specific image when useful | release panel | timeline cue | none | Dates and sources first |
| trust/legal | none | none | one plain divider | none | No promotional imagery |

## Image SEO Guidelines

- Filename pattern:
  - hero: `hololive-dreams-<purpose>.<ext>`;
  - roster: `hololive-dreams-<display-name>.webp`;
  - gameplay: `hololive-dreams-<system-or-mode>-<platform>.<ext>`;
  - songs: `hololive-dreams-song-<short-title>.<ext>`.
- Keep filenames concise; do not repeat `guide-wiki-game` or other keyword variants.
- Alt direction:
  - state what is visibly shown and why it matters to the nearby section;
  - use a person's official display name on portraits;
  - do not start every alt with the keyword;
  - avoid “image of” unless the medium itself matters.
- Captions:
  - add mode, platform, checked date, or verification context;
  - do not use captions only to display source URLs;
  - do not duplicate the alt or heading.
- Nearby text:
  - explains the system, step, roster group, song field, or platform represented;
  - internal source IDs never render.
- Structured data:
  - after a production domain and SEO config exist, use the optimized key visual or page-specific representative image in eligible `WebPage`, `Article`, `HowTo`, or other valid schema;
  - do not apply unsupported schema just because an image exists.
- Decorative motifs:
  - render in CSS/SVG with empty alt or hidden semantics;
  - never stuff them with keyword text.

## Performance and Responsive Rules

- Preferred formats:
  - AVIF/WebP for derived hero and screenshot variants;
  - existing WebP for roster;
  - PNG only for real transparency or loss-sensitive UI;
  - JPEG only when source/photo conversion is smaller and visually adequate.
- Hero:
  - generate approximately 640w, 960w, 1280w, and 1920w variants where justified;
  - provide a distinct mobile crop if the roster/logo becomes unreadable;
  - eager-load and high-priority only when it is the actual LCP candidate;
  - target roughly 250–350KB or less for delivered viewport variant.
- Content images:
  - lazy-load below fold;
  - supply `srcset`/sizes or framework-native responsive image output;
  - set intrinsic dimensions/aspect ratio.
- Roster:
  - source is already 448px WebP;
  - do not upscale;
  - lazy-load outside the first visible rows;
  - filter locally without reloading remote sources.
- Video:
  - display local 1280×720 thumbnail first;
  - load iframe only on explicit action;
  - preserve a direct official link.
- Mobile crop:
  - art direct the key visual rather than center-cropping faces/logo;
  - keep screenshot UI labels large enough to inspect;
  - avoid using text-heavy promotional panels at widths where baked text becomes unreadable.
- CLS:
  - every media frame reserves dimensions;
  - captions are in normal flow;
  - no image is inserted above existing content after load.

## Download Validation

- Files downloaded: 62
- Roster portraits: 54/54
- Other assets: 8
- Empty or zero-byte files: 0
- External images referenced in code: 0
- Page/component/config files changed to use images: 0
- Detailed provenance: `planning/asset-source-log.md`

## Missing Assets and Later Confirmation

- Flow 06 must verify and obtain the specific rhythm, park, board, settings, and chart screenshots needed by guide content.
- Flow 06 must capture the complete current song dataset before downloading/mapping song covers.
- The project has no independent-site logo; the header remains text-first unless the user later supplies or authorizes one.
- The official key visual can be used as content media, but the site must visibly state its independent/non-affiliated status.

## Do Not Use

- Unrelated stock “anime gamer” imagery: not the actual product.
- AI character art: can misrepresent official talents and creates trust/trademark risk.
- Raw copied trailer/audio files: unnecessary and inconsistent with the recorded official streaming/media caution.
- Search thumbnails as hero images: poor quality and source ambiguity.
- Screenshots with unverified UI states: can mislead launch guidance.
- Oversized image walls without labels, filters, or nearby explanatory text: poor scan and SEO value.
- Official art as full-page background behind body text: contrast and crop failure.

## Handoff Notes for Flow 05

- Use only local assets from `public/images/`; do not hotlink.
- Derive optimized responsive versions of the large JPEG/WebP assets before production use.
- Preserve official portrait display names and intrinsic aspect ratios.
- Use the key visual as one poster field, not as a full-screen background.
- Implement click-to-load official video previews with the local thumbnails.
- Keep source URLs in internal planning records; front-end captions should explain content, not expose research logs.
- Do not invent missing screenshots; leave a stable non-core frame and pass the requirement to Flow 06.

