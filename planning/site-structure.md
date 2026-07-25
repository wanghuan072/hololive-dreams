# Site Structure Plan

## Status

- Flow: 03 - Site Structure Planning
- Status: completed_with_warnings
- Completed at: `2026-07-23T18:47:18+08:00`
- Agent: flow-03-site-structure-planning-agent

## Project Context

- Main keyword: `hololive dreams`
- Brand name: not specified
- Language: English
- Target market: US / Global English
- Declared site type: SEO content / wiki / guide / reference content site
- Planned site type: launch-aware game guide and reference site with compact wiki/database modules
- Business goal: not specified
- Monetization: not specified
- Framework: unknown; no framework-specific paths are activated in this plan

## Input Files Read

- `project.yaml`
- `AGENTS.md`
- `handoff/flow-01-project-brief.md`
- `research/keyword-research.md`
- `research/sources.json`
- `handoff/flow-02-research-brief.md`

Flow 02A was not read or executed because unpacked data is unavailable.

## Planning Constraints

### User Requirements

- English site for US / Global English.
- New pages, structural adjustment, local refactor, dependencies, and build checks are allowed.
- Deployment and Git commits are not allowed.
- The project is empty; Flow 05 must initialize the selected framework.

### Project Boundaries

- All project output stays in this project root.
- No sibling or historical project may supply research, code, design, content, or media.
- Flow 03 writes planning artifacts only.

### Research Constraints

- Research occurred on the global launch date, `2026-07-23`.
- Roster and official catalog facts are strong; live card, quest, facility, skill, rate, region, and troubleshooting datasets remain incomplete.
- No conventional redeem-code system, reliable tier list, or complete card database was confirmed.
- The site must show update dates for volatile data and must not pass community claims off as facts.

## Search Intent Summary

| Intent | User need | Planning response | Evidence | Confidence |
|---|---|---|---|---|
| mixed | identify the game and choose a next task | dense home page with direct task routes | src-001–008 | high |
| reference | browse playable holomems and songs | complete roster index and update-aware song catalog | src-002–004, 015 | high |
| guide | understand first-hour systems | Guides index plus eight task-specific guides | src-003, 012, 013, 016 | medium-high |
| transactional | safely install the game | official-links download/platform page | src-001, 006–008 | high |
| support | resolve timing, performance, loading, and compatibility questions | Help hub linked to verified support guides | src-006, 016–019 | medium |
| update | follow launch additions and changing facts | dated Updates page and update stamps on volatile data | src-001, 004, 016 | high |
| video | learn mechanics visually | video/screenshot slots in guides and systems, researched further in Flow 07 | src-020, 021 | high |

## Planned Website Type

- Primary type: `game_guide_or_fan_reference`
- Secondary modules:
  - `wiki_or_database`
  - `download_site`
  - `news_or_update_site`
- Reasoning:
  - The exact keyword mixes official navigation, install, guide, roster, song, video, and community-help intents.
  - Two complete entity families can be responsibly supported at launch: 54 playable holomems and the current official music catalog.
  - The official site is authoritative but does not provide task-focused English guides or a compact searchable reference experience.
- Conflict or open question:
  - A concrete frontend framework is required before Flow 05.

## Navigation Keyword Matrix

| Candidate | Label | Evidence | Destination | Content scale | Decision |
|---|---|---|---|---|---|
| main keyword | Home | mixed SERP, all source groups | `home` | dense overview and task routing | primary |
| hololive dreams wiki | Wiki | src-015 plus reference intent | `wiki-index` | multi-category index | primary |
| hololive dreams characters/holomems | Holomems | src-002, 003 | `holomems-index` | complete 54-record index | primary |
| hololive dreams song list | Songs | src-004, 015 | `songs-index` | current official catalog, 150+ | primary |
| hololive dreams guide | Guides | src-010, 012, 013 | `guides-index` | index plus eight launch guides | primary |
| hololive dreams download | Download | src-001, 006–008 | `download` | three platforms and safety/specs | primary |
| settings/not working/system questions | Help | src-006, 016–019 | `help` | problem routing and verified fixes | primary |
| FAQ | FAQ | question clusters but no site-level nav evidence | page-level/help blocks | distributed | not primary |
| Map | Map | no map intent or reliable spatial dataset | none | none | exclude |
| Codes | Codes | intent exists but no confirmed system | updates/help note only | too thin | exclude |
| Tier list | Tier List | speculative launch meta | none | no verified data | exclude |

## Information Architecture

```text
Home
├── Wiki
│   ├── Holomems (54-record searchable index)
│   ├── Songs (complete current official catalog)
│   └── Game Systems (mechanics reference)
├── Guides
│   ├── Getting Started
│   ├── Rhythm Timing & Scoring
│   ├── Dream Park Progression
│   ├── Unlocking Holomems & Invitation Tickets
│   ├── Team Building & Holomem Board
│   ├── Minigames
│   ├── Create Chart & Custom Charts
│   └── Performance & Settings
├── Download
│   └── System Requirements
├── Help
├── Updates
└── Trust
    ├── About
    ├── Contact
    ├── Editorial Policy
    ├── Privacy Policy
    └── Terms
```

## Primary Navigation

| Label | Page ID | URL | Purpose | Evidence-based reason | Required |
|---|---|---|---|---|---|
| Home | home | `/` | resolve mixed intent and route tasks | required home entry | yes |
| Wiki | wiki-index | `/wiki` | index factual game-reference modules | wiki/reference intent and multi-category scale | yes |
| Holomems | holomems-index | `/holomems` | browse all playable members | explicit 54-record official roster | yes |
| Songs | songs-index | `/songs` | browse current track catalog | 150+ official catalog and strong search intent | yes |
| Guides | guides-index | `/guides` | reach task-focused walkthroughs | multiple high-intent guide clusters | yes |
| Download | download | `/download` | find safe official platform links | strong transactional intent | yes |
| Help | help | `/help` | route setup and troubleshooting questions | launch-day community/support demand | yes |

FAQ is not a primary navigation item. It is distributed across Home, Help, Download, Systems, and guide pages.

## Footer Navigation

| Group | Label | Page ID | URL | Purpose |
|---|---|---|---|---|
| Explore | Wiki | wiki-index | `/wiki` | factual index |
| Explore | Guides | guides-index | `/guides` | task index |
| Explore | Updates | updates | `/updates` | dated changes |
| Support | Download | download | `/download` | official platform links |
| Support | Requirements | system-requirements | `/system-requirements` | device/PC checks |
| Support | Help | help | `/help` | issue routing |
| About | About | about | `/about` | site identity and fan-site boundary |
| About | Editorial Policy | editorial-policy | `/editorial-policy` | sourcing and corrections |
| About | Contact | contact | `/contact` | user feedback |
| Legal | Privacy | privacy | `/privacy` | privacy policy |
| Legal | Terms | terms | `/terms` | site terms |

## Home Page Sections

| Section ID | Heading direction | Purpose | Intent | Links to | Priority |
|---|---|---|---|---|---|
| home-hero | hololive Dreams Guide, Wiki & Live Game Reference | identify scope and offer three immediate tasks | mixed | guides-index, holomems-index, songs-index | high |
| live-status | Live Now: Platforms, Roster & Song Updates | compact launch facts and dated status | navigational/update | download, updates | high |
| task-switchboard | What Do You Want to Do? | route start, browse, install, or fix tasks | mixed | guides-index, wiki-index, download, help | high |
| roster-preview | All 54 Playable Holomems | prove roster completeness and expose filters | reference | holomems-index | high |
| song-preview | Explore the Launch Song Catalog | preview original/cover filters and current count | reference | songs-index | high |
| guide-paths | Start Smart, Then Go Deeper | show eight guide paths by task rather than recency | guide | guide detail pages | high |
| systems-strip | How Dream Park Progression Connects | explain rhythm, quests, park, team, and minigame loop | informational | systems, relevant guides | high |
| media-window | See the Game in Motion | screenshot/video-informed entry points | video | systems, guide-rhythm-timing, guide-minigames | medium |
| update-log | Launch Changes Worth Rechecking | show dated song/system/support changes | update | updates | medium |
| trust-note | Independent, Source-Checked Game Reference | disclose unofficial status and update policy | trust | about, editorial-policy | medium |
| home-faq | Quick Answers | answer 5–7 top questions and link deeper | informational | download, help, guides | medium |

Home media target: 6–10 meaningful local assets across key art, rhythm UI, park, roster, songs, and minigames. Decorative-only media does not count.

## Page Inventory

| Page ID | Priority | Type | URL | Intent | Primary keyword | Role | Status |
|---|---|---|---|---|---|---|---|
| home | core | home | `/` | mixed | hololive dreams | fact | planned |
| wiki-index | core | wiki_index | `/wiki` | reference | hololive dreams wiki | fact | planned |
| holomems-index | core | database_index | `/holomems` | reference | hololive dreams holomems | fact | planned |
| songs-index | core | database_index | `/songs` | reference | hololive dreams song list | fact | planned |
| systems | core | wiki_category | `/wiki/systems` | informational | hololive dreams game systems | fact | planned |
| guides-index | core | category | `/guides` | informational | hololive dreams guides | guide | planned |
| guide-getting-started | core | guide | `/guides/getting-started` | informational | hololive dreams beginner guide | guide | planned |
| guide-rhythm-timing | core | guide | `/guides/rhythm-timing` | informational | hololive dreams timing guide | guide | planned |
| guide-dream-park | core | guide | `/guides/dream-park-progression` | informational | hololive dreams park guide | guide | planned |
| guide-unlock-holomems | core | guide | `/guides/unlock-holomems` | informational | hololive dreams unlock holomems | guide | planned |
| guide-team-board | core | guide | `/guides/team-building-holomem-board` | informational | hololive dreams holomem board | guide | planned |
| guide-minigames | core | guide | `/guides/minigames` | informational/video | hololive dreams minigames | guide | planned |
| guide-create-charts | core | guide | `/guides/create-chart` | informational | hololive dreams create chart | guide | planned |
| guide-performance | core | how_to | `/guides/performance-settings` | support | hololive dreams performance settings | guide | planned |
| download | core | download | `/download` | transactional | hololive dreams download | fact | planned |
| system-requirements | core | resource | `/system-requirements` | informational | hololive dreams system requirements | fact | planned |
| help | core | resource | `/help` | support/community | hololive dreams help | guide | planned |
| updates | supporting | news_or_updates | `/updates` | informational/update | hololive dreams updates | fact | planned |
| about | trust | about | `/about` | trust | independent site identity | trust | planned |
| contact | trust | contact | `/contact` | trust | contact | trust | planned |
| editorial-policy | trust | editorial_policy | `/editorial-policy` | trust | editorial policy | trust | planned |
| privacy | trust | privacy | `/privacy` | trust | privacy policy | trust | planned |
| terms | trust | terms | `/terms` | trust | terms | trust | planned |

Core pages: 17. Supporting pages: 1. Trust pages: 5. Total planned indexable routes before generated behavior: 23.

## Wiki Structure Plan

| Level | Page ID | URL pattern | Purpose | Data need | Notes |
|---|---|---|---|---|---|
| index | wiki-index | `/wiki` | route factual lookup tasks | category metadata | not a generic article dump |
| category | holomems-index | `/holomems` | complete roster index | `holomems` data | no thin detail routes at launch |
| category | songs-index | `/songs` | complete current catalog | `songs` data | searchable/filterable table |
| category | systems | `/wiki/systems` | mechanics reference | systems metadata | connects guides to facts |

Depth: `multi_category`, without entity detail pages at launch.

Why no 54 holomem detail pages: current public sources cannot yet support deep, differentiated per-member fields for all 54. The index will provide complete coverage and rich filtering while preventing 54 shallow, repetitive pages. Detail pages may be reconsidered only when full card/outfit/skill/unlock/media data can meet the same standard across the roster.

Why no individual song pages: a complete searchable catalog better matches the available fields and avoids 150+ thin/copyright-sensitive pages.

## Core Data Completion Plans

### Holomems

- Expected total: 54 at launch.
- Basis: explicit official roster; marketing shorthand says 50+.
- Minimum launch records: 54.
- Target coverage: 100%.
- Image coverage target: 100% local roster thumbnails or portraits with source records.
- Detail page target: 0 for launch.
- Required field groups:
  - identity: name, slug, branch/generation
  - game presence: playable status, Leader/unlock context when verified
  - progression: Holomem Board/card/outfit notes only when verified
  - media: local image, alt direction, source ID
  - relationships: relevant systems and guide links
- Source mix: official roster/system, official updates, in-game/official video, editorial card coverage.
- Cross-check: explicit count, generation labels, unlock exceptions, Leader eligibility, outfit/card claims.
- Conflict status: open on detailed progression fields; resolved on launch roster count.
- Blocker: no deep detail pages until consistent per-member gameplay fields exist.

### Songs

- Expected total: dynamic, at least 150 at launch.
- Basis: official catalog and 150+ launch claim; 25 songs added across 15 launch days.
- Minimum launch records: every song visible on the official catalog at Flow 06 implementation time.
- Target coverage: 100% of the official current catalog snapshot.
- Image coverage target: 100% of rows need a meaningful jacket/performer image or a deliberately designed non-copyright fallback; the source record must be retained.
- Detail page target: 0.
- Required field groups: title, slug/id, original/cover, performer, writers/credits where public, availability/update date, image, source IDs, verified chart fields when available.
- Source mix: official music page, official updates, in-game list, official video, soundtrack reference.
- Cross-check: spelling, performer, type, additions, availability, chart/difficulty claims.
- Conflict status: open and time-sensitive.
- Blocker: launch additions require repeated checks.

### Guides

- Expected total for launch: 8.
- Minimum launch records: 8.
- Target coverage: all major launch task clusters from Flow 02.
- Image coverage target: each guide gets 2–5 purposeful screenshots/diagrams; at least one hero/lead image.
- Detail page target: 8.
- Required field groups: task, prerequisite, steps, common mistakes, verification date, related systems, related guide, media, FAQ, source IDs.
- Source mix: official system/platform/support, official/creator video, community question discovery.
- Cross-check: menu labels, steps, restrictions, platform differences, volatile launch behavior.
- Conflict status: open until Flow 06/07 verifies each guide.

## Map Or Interactive Tool Plan

| Candidate | Status | Evidence | Decision | Reason |
|---|---|---|---|---|
| Interactive Map | exclude | no strong map query or reliable spatial dataset | no route/nav | an abstract park diagram would not qualify as a real map |
| Park progression diagram | planned as page section | official system progression | systems/guide section only | relationship diagram is useful but is not labeled a map |

## Core Page Plans

### Home

- H1: `hololive Dreams Guide, Wiki & Live Game Reference`
- H2/H3:
  - What hololive Dreams Is
  - Live Platforms, 54 Holomems & Current Song Count
  - Choose Your Path: Start, Browse, Download, or Fix
  - Browse Holomems
  - Explore the Song Catalog
  - Start With These Guides
  - How the Rhythm-to-Park Loop Works
  - Latest Checked Updates
  - Quick Answers
- Do not include: research notes, internal source IDs, speculative rates/tier claims, or project status language.

### Wiki

- H1: `hololive Dreams Wiki: Systems, Holomems & Song Catalog`
- H2/H3:
  - Browse the Complete Playable Roster
  - Search the Current Song Catalog
  - Understand Core Game Systems
  - Choose a Task-Focused Guide
  - What Changes After Launch
- Must feel like a useful index with counts, filters, and next steps, not a thin portal.

### Holomems

- H1: `hololive Dreams Holomems: Complete Playable Roster`
- H2/H3:
  - Search and Filter All 54 Playable Holomems
  - Browse by Branch and Generation
  - How Leaders, Quests, Cards & Boards Relate
  - Unlocking and Training Next Steps
- Listing density: portrait, name, generation/branch, verified status tags, relevant guide/system links.
- No detail pages until deep uniform fields are available.

### Songs

- H1: `hololive Dreams Song List: Originals, Covers & Launch Updates`
- H2/H3:
  - Current Catalog Snapshot
  - Filter Original and Cover Songs
  - Browse by Performer
  - Launch Additions and Last-Checked Date
  - How Charts and MVs Work
- Listing density: jacket/thumbnail, title, performer, type, credits/availability when verified, filter/search controls.

### Game Systems

- H1: `hololive Dreams Game Systems Explained`
- H2/H3:
  - Rhythm Play, Scores & Teams
  - Quests, Holomem Unlocks & Invitation Tickets
  - Dream Park Facilities and Resources
  - Team Roles, Skill Nodes & Connect Nodes
  - Minigames and Multiplayer
  - System Questions to Verify After Updates
- This is the factual bridge to task guides; it must not absorb full walkthroughs.

### Guides Index

- H1: `hololive Dreams Guides: Start, Build & Play Better`
- H2/H3:
  - Start Here
  - Master Rhythm Settings
  - Build Dream Park
  - Unlock and Train Holomems
  - Play Minigames and Create Charts
  - Fix Performance Problems
- Eight guide records, not 2–3 placeholder articles.

### Guide Detail Structure

Every guide H1 contains `hololive Dreams` and the exact user task. Every guide includes:

- What this guide solves
- Before you start
- Verified steps or mechanics
- Common mistakes
- Platform or update differences
- Related systems/reference links
- 3–5 focused FAQs
- Last checked and editorial verification note
- 2–5 purposeful media slots

### Download

- H1: `hololive Dreams Download & Platform Guide`
- H2/H3:
  - Official Download Links
  - Steam vs iOS vs Android
  - Availability and Account Safety
  - Storage and First Download
  - Before You Install
  - Download FAQs
- Only official store links. No APK, VPN, region bypass, or unofficial installer.

### System Requirements

- H1: `hololive Dreams System Requirements for PC and Mobile`
- H2/H3:
  - PC Minimum and Recommended Specs
  - Mobile Compatibility
  - Storage Planning
  - Windows, Antivirus and Protection Component Notes
  - Performance Checklist
- Steam facts are authoritative; mobile fields remain clearly dated and rechecked.

### Help

- H1: `hololive Dreams Help: Settings, Loading & Compatibility`
- H2/H3:
  - Choose Your Problem
  - Rhythm Timing and Input
  - Lag, Graphics and Loading
  - Download and Region Availability
  - PC Install and Antivirus Notes
  - When to Contact Official Support
- Help is a routing/support page, not a primary-nav FAQ label.

### Updates

- H1: `hololive Dreams Updates & Launch Tracker`
- H2/H3:
  - Latest Checked Changes
  - Song Additions
  - System and Platform Notices
  - Corrections and Archived Updates
- Every item requires date, source type, status, and affected pages.

## Local Data Plan

Framework-neutral logical data types:

| Data type | Used by | Coverage | Shape |
|---|---|---|---|
| `holomems` | Home, Wiki, Holomems | 54/54 | array of identity, generation, image, verified game fields, source IDs |
| `songs` | Home, Wiki, Songs, Updates | complete official snapshot | array of title, performer, type, credits, image, dates, source IDs |
| `guides` | Home, Guides, Help | 8/8 | array of task, date, image, SEO fields, body/sections, related links, source IDs |
| `systems` | Wiki, Systems, guides | current verified systems | array/objects by mechanic, facts, media, source IDs |
| `updates` | Home, Songs, Updates | dated log | array of date, type, summary, affected entities/pages, source IDs |

The actual file paths must be chosen after the framework is confirmed. Data files should be simple exports or framework-equivalent content collections, without fetch logic or business calculations.

## Page File And SEO Plan

- Each of the 23 planned routes gets its own route/page file or framework-native equivalent.
- Guide detail routes may use one guide-detail route template because they share one content type; it must not become a universal renderer for systems, trust pages, catalogs, or unrelated content.
- Holomems and Songs are distinct index implementations with different fields and filtering behavior.
- Static-page metadata should be centralized in a framework-appropriate SEO map; guide-specific metadata belongs with guide data/content.
- Sitemap includes all indexable planned routes and no excluded/future route.
- Framework-specific paths remain unset until the user chooses the framework.

## Internal Linking Plan

- Home -> Wiki, Holomems, Songs, Guides, Download, Help, Updates.
- Wiki -> Holomems, Songs, Systems, Guides.
- Holomems -> Unlock Holomems, Team & Board, Systems.
- Songs -> Rhythm Timing, Create Chart, Systems, Updates.
- Guides -> each guide detail plus relevant factual indexes.
- Guide details -> related system page, entity index, next guide, Help when relevant.
- Download -> Requirements, Help, official store links.
- Requirements -> Download, Performance Guide, Help.
- Help -> Rhythm Timing, Performance, Download, Requirements, official support.
- Updates -> Songs, Download, Help, affected guide.
- Every guide detail returns to Guides and links to 2–4 directly related pages.

## FAQ Plan

- What is hololive Dreams? -> Home.
- Is hololive Dreams free? -> Home/Download.
- Where can I download it? -> Download.
- Is it available on PC? -> Download/Requirements.
- How much storage is needed? -> Requirements.
- Which holomem should I choose? -> Getting Started, without unsupported ranking.
- How do I unlock more holomems? -> Unlock Guide.
- How do invitation tickets work? -> Unlock Guide.
- How does the Holomem Board work? -> Team & Board Guide.
- How do I fix rhythm timing? -> Rhythm Timing Guide.
- Why is the game lagging or stuck loading? -> Performance Guide/Help.
- Are there redeem codes? -> Updates/Help with a dated, non-fabricated answer.

## E-E-A-T And Trust Pages

| Page | Required | Purpose |
|---|---|---|
| About | yes | independent fan-reference identity and coverage scope |
| Contact | yes | corrections and feedback using placeholder email until production contact is supplied |
| Editorial Policy | yes | source hierarchy, verification, update cadence, corrections, community-claim boundary |
| Privacy | yes | site data and analytics policy |
| Terms | yes | content/use terms and trademark disclaimer |

Trust signals:

- “Last checked” timestamps on songs, updates, downloads, requirements, and troubleshooting.
- Internal source IDs retained in data/reports, not dumped into player-facing prose.
- Official links visually distinguished from independent guide content.
- Fan-site/non-affiliation statement in About/footer.
- Clear correction path and update policy.

## Media Requirements

- Home: 6–10 assets.
- Holomems: 54 local thumbnails/portraits or an equally complete source-recorded visual treatment.
- Songs: complete row-level visual coverage where feasible; no blank mass table.
- Wiki/Systems: 4–8 screenshots/diagrams across major systems.
- Each guide: 2–5 media slots.
- Download/Requirements/Help: 2–4 platform/UI/support visuals.
- Every adopted asset needs a project-local source record, original URL/source page, use, page position, local path, alt direction, and status.

## Excluded Or Deferred Ideas

| Idea | Status | Reason |
|---|---|---|
| interactive map | exclude | no real map intent, asset, or coordinates |
| 54 holomem detail routes | future | current fields would create thin repetitive pages |
| 150+ song detail routes | exclude | catalog satisfies intent; detail pages would be thin/copyright-sensitive |
| card database | future/blocked | no complete authoritative public dataset |
| tier list | exclude | launch-day meta is unverified and unstable |
| reroll ranking | future | process and value claims need live verification |
| codes page | exclude for launch | no confirmed conventional code system |
| review/comparison | exclude | no proven commercial decision intent for this independent reference scope |
| FAQ primary nav | exclude | Help and page-level FAQs better match user tasks |

## Risks And Open Questions

- Framework selection blocks Flow 05.
- Song count changes during the 15-day launch campaign.
- Complete media coverage is demanding and must be sourced without other projects.
- Card/outfit/skill/quest/facility details may remain incomplete without direct live-game access.
- Regional availability, mobile requirements, protection-component behavior, and fixes are volatile.

## Files Produced

- `planning/site-structure.md`
- `planning/content-map.json`
- `handoff/flow-03-site-structure-brief.md`

## Post-Flow Keyword Expansion Addendum — 2026-07-24

The user approved a controlled post-Flow expansion after reviewing new keyword data:

- `/updates` now owns release-date and global-launch intent instead of creating a thin standalone release page.
- `/ridin-on-dreams` is added as a game/event/song disambiguation reference.
- `/holomems/<slug>` adds 54 data-driven member detail routes.
- Member details use official talent-profile facts, confirmed game-roster membership, and project-local catalog-song relationships.
- Member pages must not infer card tiers, skills, exact unlock paths, gacha rates, or recommended builds.
- Official social/community navigation remains excluded at the user's request.
- The indexable route target becomes 79.

## Member And Song Detail Addendum — 2026-07-24

This later user-approved expansion supersedes the earlier song-detail exclusion:

- Primary navigation is now Home, Wiki, Holomems, Songs, Guides, Updates, and Ridin’ on Dreams.
- Download and Help remain reachable legacy utility routes but are removed from header and footer navigation.
- All 54 member pages expose every useful field available in the official English talent profile, plus selected official Q&A when the source provides it.
- Member music sections add original/cover counts, direct song-detail links, and exact-name collaborator links derived from the project-local catalog.
- `/songs/<slug>` adds 154 source-bounded song records with credits, exact performer-label statistics, matching member links, related entries, and no reproduced lyrics.
- The song detail design uses a record-sleeve/editorial treatment distinct from the member profile design.
- The indexable route target becomes 233.
