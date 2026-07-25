# Keyword And Competitor Research

## Status

- Flow: 02 - Keyword And Competitor Research
- Status: completed_with_warnings
- Research mode: online
- Completed at: `2026-07-23T18:39:50+08:00`
- Search date: `2026-07-23`
- Agent: flow-02-keyword-competitor-research-agent

## Project Context

- Main keyword: `hololive dreams`
- Language: English
- Target market: US / Global English
- Site type: SEO content / wiki / guide / reference content site
- Network allowed: yes
- YouTube / yt-dlp allowed: yes
- Unpacked data available: no
- Unpacked data read allowed: no
- Execute Flow 02A after Flow 02: false
- Topic type: `data_rich_entity_topic`
- Launch context: the game launched globally on the research date, so discovery demand is high and many facts are changing quickly.

## Input Files Read

- `project.yaml`
- `AGENTS.md`
- `handoff/flow-01-project-brief.md`

## Research Scope

Included:

- Fifteen English/global search query families spanning main-keyword, guide, wiki, download, system requirements, songs, characters, gameplay, settings, codes, cards, community, and video intent.
- Official product, launch, system, music, park, platform, and posting-guideline sources.
- Search-visible guide hubs, reference databases, news pages, community discussions, image results, and official/creator video metadata.
- Entity-scale and cross-source checks for holomems, songs, progression systems, minigames, park facilities, cards/outfits, and troubleshooting.

Excluded:

- Final navigation, URL structure, page list, SEO title, meta description, or website copy.
- Unverified gacha rates, tier rankings, card skill values, drop tables, codes, or community workarounds.
- Other local projects, templates, or historical keyword research.

Open constraints:

- Research happened on launch day. Index coverage is immature and many guide pages are pre-launch.
- No unpacked data or direct game-account dataset is available.
- The concrete frontend framework is still unknown, but that does not affect Flow 02.

## SERP Overview

| Query | Dominant intent | Strong result types | Observed features | Key sources |
|---|---|---|---|---|
| hololive dreams | mixed | official, stores, launch news | official site, app stores, Steam, video, discussions | src-001, 002, 006, 007, 008 |
| hololive dreams game | informational | official overview, preview articles | product pages, news, videos | src-001, 003, 009, 010, 013 |
| hololive dreams guide | informational | new guide articles | game hubs, beginner guides, video | src-010, 012, 023 |
| hololive dreams wiki | informational | weak game-specific wiki coverage | Fandom soundtrack page; broad franchise wikis | src-015 |
| hololive dreams songs | informational | official catalog | image-rich official list, wiki table | src-004, 015 |
| hololive dreams characters | informational | official roster | image-heavy roster and system pages | src-002, 003 |
| hololive dreams download | transactional | official launch/store pages | Steam, App Store, Google Play | src-001, 006, 007, 008 |
| hololive dreams system requirements | informational | Steam and community | PC specs, device discussion | src-006, 018 |
| hololive dreams beginner tips | informational | early commercial guides/video | first-hour framing, team building | src-012, 013 |
| hololive dreams settings | informational/community | launch thread | timing, graphics, performance questions | src-016 |
| hololive dreams codes | informational | code articles | no confirmed code set yet | src-014 |
| hololive dreams cards | informational/visual | Japanese editorial and video | card illustration roundups | src-022 |
| hololive dreams anti cheat | informational/community | Steam note and discussion | safety/compatibility concern | src-006, 017 |
| hololive dreams reddit | community | launch and help discussions | performance, region, rhythm timing | src-016–019 |
| hololive dreams gameplay | video/informational | official and creator video | trailer, stage highlights, streams | src-020, 021 |

## Search Intent Analysis

### Main Keyword

- Primary intent: `mixed`
- Secondary intents: navigational, informational, transactional, video, community
- Confidence: high
- Evidence:
  - Official product and launch pages dominate the entity definition (src-001–005).
  - Store pages satisfy install intent (src-006–008).
  - Launch-day guides and discussions expose immediate how-to and troubleshooting demand (src-010–019).
  - Official and creator videos satisfy visual/mechanics intent (src-020–021).
- Nuance: a merchandise PDF and broad hololive results can collide with the exact phrase. Game-specific modifiers such as `game`, `holodori`, `guide`, `songs`, and `download` are important disambiguators.

### Intent Segments

| Intent | User need | Evidence | Planning use | Caution |
|---|---|---|---|---|
| navigational | reach official site or game | src-001–008 | clear official-platform pathways | do not impersonate official branding |
| informational overview | learn what the game is | src-001–005, 009 | concise verified game primer | launch facts are time-sensitive |
| transactional | install on PC/iOS/Android | src-001, 006–008 | safe official download guidance | regional availability can differ |
| beginner task | understand first-hour loop | src-003, 012, 013 | guide research cluster | current third-party guides are partly pre-launch |
| reference/database | browse holomems and songs | src-002–004, 015, 022 | high-value entity indexes | must approach complete coverage |
| troubleshooting | fix lag, timing, loading, compatibility | src-006, 016–019 | launch-day support cluster | community fixes are not facts |
| video | see gameplay, charts, minigames | src-020, 021 | video-informed explanations | do not reuse third-party media |
| commercial/gacha | evaluate cards, reroll, rates, tier list | src-001, 013, 022 | monitor, verify later | insufficient evidence today |

## Keyword Expansion

### High Priority Keywords

| Keyword or phrase | Type | Intent | Evidence | Use signal |
|---|---|---|---|---|
| hololive dreams | main | mixed | src-001–008 | core |
| holodori | synonym | navigational | src-001, 002 | audience_language |
| hololive dreams game | related | informational | src-001–003 | core |
| hololive dreams guide | related | informational | src-010, 012 | guide_candidate |
| hololive dreams beginner guide | long-tail | informational | src-012, 013 | guide_candidate, video_candidate |
| hololive dreams wiki | related | reference | src-015 | database_candidate |
| hololive dreams characters | entity | reference | src-002, 003 | database_candidate, image_candidate |
| hololive dreams holomems | entity | reference | src-002, 003 | audience_language, database_candidate |
| hololive dreams song list | entity | reference | src-004, 015 | database_candidate, image_candidate |
| hololive dreams music | entity | reference | src-004 | database_candidate |
| hololive dreams original songs | attribute | reference | src-004 | filter_candidate |
| hololive dreams cover songs | attribute | reference | src-004 | filter_candidate |
| hololive dreams download | task | transactional | src-001, 006–008 | official_link_candidate |
| hololive dreams Steam | platform | transactional | src-006 | official_link_candidate |
| hololive dreams Android | platform | transactional | src-007 | official_link_candidate |
| hololive dreams iOS | platform | transactional | src-008 | official_link_candidate |
| hololive dreams system requirements | task | informational | src-006, 018 | support_candidate |
| hololive dreams PC requirements | long-tail | informational | src-006 | support_candidate |
| hololive dreams storage size | question/task | informational | src-006, 018 | support_candidate |
| hololive dreams gameplay | related | informational/video | src-003, 020, 021 | video_candidate, image_candidate |
| hololive dreams rhythm game | related | informational | src-001–004 | core |
| hololive dreams Dream Park | entity | informational | src-001, 003, 005 | guide_candidate, image_candidate |
| hololive dreams park guide | long-tail | informational | src-003, 005, 012 | guide_candidate |
| hololive dreams holomem quests | entity/task | informational | src-003 | guide_candidate |
| hololive dreams invitation tickets | item/task | informational | src-003 | guide_candidate |
| hololive dreams team building | task | informational | src-003, 012, 013 | guide_candidate |
| hololive dreams holomem board | system | informational | src-003 | guide_candidate, image_candidate |
| hololive dreams skill nodes | system | informational | src-003 | guide_candidate |
| hololive dreams Connect Nodes | system | informational | src-003 | guide_candidate |
| hololive dreams minigames | entity | informational/video | src-003, 020, 021 | guide_candidate, video_candidate |
| hololive dreams Hoppin' Rope | entity | informational | src-003 | detail_candidate |
| hololive dreams MEGA CIRCUIT | entity | informational | src-003 | detail_candidate, video_candidate |
| hololive dreams POKAJAN | entity | informational | src-003 | detail_candidate |
| hololive dreams Colliect Cooking | entity | informational | src-003 | detail_candidate; verify official spelling |
| hololive dreams create chart | task/system | informational | src-006 | guide_candidate, video_candidate |
| hololive dreams custom charts | synonym/task | informational | src-006 | audience_language |
| hololive dreams auto play | task/system | informational | src-006 | guide_candidate |
| hololive dreams release date | factual | navigational | src-001, 006 | time_sensitive |
| hololive dreams launch rewards | factual/task | informational | src-001, 016 | time_sensitive |
| hololive dreams highest rarity choice | task | informational | src-001 | time_sensitive |

### Medium Priority Keywords

| Keyword or phrase | Type | Intent | Evidence | Caution or use |
|---|---|---|---|---|
| hololive dreams timing adjustment | troubleshooting | informational | src-016 | verify exact settings |
| hololive dreams note speed | troubleshooting | informational | src-013, 016 | verify in game |
| hololive dreams graphics settings | troubleshooting | informational | src-016 | launch-day issue |
| hololive dreams lag fix | troubleshooting | informational | src-016 | community_only |
| hololive dreams loading stuck | troubleshooting | informational | src-016, 019 | community_only |
| hololive dreams not working | troubleshooting | informational | src-016, 019 | community_only |
| hololive dreams device compatibility | support | informational | src-018 | official recheck required |
| hololive dreams Windows 11 | support | informational | src-006 | platform-specific |
| hololive dreams Steam Deck | support | informational | src-017 | unsupported claim needs verification |
| hololive dreams Linux | support | informational | src-017 | unsupported claim needs verification |
| hololive dreams antivirus false positive | support | informational | src-006 | quote official handling carefully |
| hololive dreams anti cheat | risk/support | informational | src-006, 017 | conflicting_sources |
| hololive dreams region locked | support | informational | src-019 | do not give ToS-evading workarounds |
| hololive dreams available countries | support | informational | src-009, 019 | time_sensitive |
| hololive dreams cards | entity | reference | src-022 | incomplete public data |
| hololive dreams card art | visual/entity | reference | src-022 | copyright_sensitive |
| hololive dreams rarity | system | informational | src-001, 022 | exact data unverified |
| hololive dreams outfits | entity | reference | src-003, 022 | data incomplete |
| hololive dreams skills | system | informational | src-003 | per-card values unverified |
| hololive dreams gacha | commercial | informational | src-001, 013 | exact rates unverified |
| hololive dreams reroll | task | informational | pre-launch video/search signal | no verified process yet |
| hololive dreams tier list | commercial | informational | search signal | no reliable ranking yet |
| hololive dreams codes | task | informational | src-014 | no confirmed traditional codes |
| hololive dreams free rewards | task | informational | src-001, 014, 016 | time_sensitive |
| hololive dreams cross save | task | informational | community signal | needs official verification |
| hololive dreams multiplayer | system | informational | src-006, 021 | exact mode rules need verification |
| hololive dreams co-op | system | informational | src-006 | exact mode rules need verification |
| hololive dreams PvP | system | informational | src-006 | exact mode rules need verification |
| hololive dreams story | related | informational | src-001, 011 | spoilers and update risk |
| hololive dreams facilities | entity | reference | src-003, 005 | full inventory unavailable |
| hololive dreams resources | item/system | informational | src-003 | names and rates unverified |
| hololive dreams quests | system | informational | src-003 | detail coverage needs gameplay |
| hololive dreams video guide | video | video | src-020, 021 | Flow 07 candidate |
| hololive dreams gameplay trailer | video | video | src-020 | official |
| hololive dreams chart guide | task | informational/video | src-006, 021 | Flow 07 candidate |

### Low Priority Or Excluded Keywords

| Keyword | Reason | Evidence | Caution |
|---|---|---|---|
| hololive Dreams snack | merchandise collision, not game intent | excluded source | exclude |
| hololive 7th fes Ridin' on Dreams | concert, not the game | search collision | exclude unless explaining ambiguity |
| hololive fan games | broader topic than project | unrelated SERP | exclude |
| HoloCure guide | separate game | topic collision | exclude |
| Project Sekai comparison | competitor analogy, not core entity | src-013/community | use only as cautious context |
| best holomem | subjective and roster-wide | community | do not claim as fact |
| leaked characters | unverified/brand risk | none reliable | exclude |
| unlimited free currency | scam-prone | no trustworthy support | exclude |
| mod apk | unsafe/ToS-sensitive | no official support | exclude |
| Steam Deck fix | may invite unsupported bypasses | src-017 | do not publish without official support |

### Question Keywords

| Question | Intent | Evidence | Planning signal | Caution |
|---|---|---|---|---|
| What is hololive Dreams? | informational | src-001–003 | overview | stable core |
| Is hololive Dreams free to play? | informational | src-001–008 | quick fact | monetization can evolve |
| Where can I download hololive Dreams? | transactional | src-001, 006–008 | official links | region varies |
| Is hololive Dreams on PC? | informational | src-006 | platform answer | Windows requirements |
| How much storage does hololive Dreams need? | informational | src-006, 018 | support | mobile values change |
| Which holomem should I choose first? | task/commercial | src-001, 016 | beginner guide | avoid unsupported tier claims |
| How do I unlock more holomems? | task | src-003 | progression guide | verify daily/exception rules |
| How do invitation tickets work? | task | src-003 | mechanics guide | verify exact acquisition |
| How does the Holomem Board work? | task | src-003 | mechanics guide | per-member effects need data |
| How do I build a team? | task | src-003, 012, 013 | guide | launch meta unstable |
| How do I adjust rhythm timing? | troubleshooting | src-016 | support guide | community-only today |
| Why is hololive Dreams lagging? | troubleshooting | src-016 | support guide | device-specific |
| Why is hololive Dreams stuck loading? | troubleshooting | src-016, 019 | support guide | verify fixes |
| Does hololive Dreams support cross-save? | informational | community signal | support FAQ | official confirmation needed |
| Is hololive Dreams available in my country? | transactional | src-009, 019 | availability FAQ | time-sensitive |
| Does hololive Dreams work on Steam Deck or Linux? | support | src-017 | compatibility FAQ | high verification bar |
| Is hololive Dreams safe to install on PC? | risk/support | src-006, 017 | neutral evidence page | avoid sensational claims |
| Are there hololive Dreams redeem codes? | task | src-014 | monitor page | currently unconfirmed |
| What songs are in hololive Dreams? | reference | src-004, 015 | complete catalog | daily launch additions |
| Which holomems are playable? | reference | src-002, 003 | complete roster | roster evolves |

## Entity And Synonym Map

| Term | Type | Meaning or role | Source | Notes |
|---|---|---|---|---|
| holodori | synonym | official abbreviation | src-001 | strong audience-language signal |
| Rhythm & RPG | genre | official genre | src-001–003 | use exactly when factual |
| Dream Park | location/system | park-building hub and goal | src-001, 003, 005 | core visual identity |
| holomem | audience term/entity type | playable hololive member | src-002, 003 | 54 listed at launch |
| Leader | team role | visible/equipped lead role | src-003 | outfit affects score |
| Member | team role | team synergy role | src-003, 012 | exact slots need in-game check |
| holomem Quest | progression system | unlocks member as Leader | src-003 | core guide entity |
| invitation ticket | item | brings a holomem into the park | src-003 | some members cannot be invited |
| Holomem Board | progression system | member growth and skills | src-003 | four Skill Node types |
| Connect Node | board system | card placement affects skills | src-003 | effect range varies |
| Create Chart | rhythm tool | user-created charts | src-006 | user-generated-content intent |
| Hoppin' Rope | minigame | group jumping challenge | src-003 | named official entity |
| Colliect Cooking | minigame | cooking puzzle | src-003 | preserve only after spelling check |
| MEGA CIRCUIT | minigame | obstacle race for up to 16 | src-003 | multiplayer/video interest |
| POKAJAN | minigame | card-hand game | src-003 | rules need gameplay |
| original songs | song type | hololive originals | src-004 | filter dimension |
| cover songs | song type | licensed covers | src-004 | higher copyright sensitivity |
| yumeiro wonder | song | official holodori theme song | src-004, official YouTube metadata | visual/video candidate |

## Core Entity Coverage Matrix

| Entity type | Estimated total basis | Source mix required | Cross-check fields | Data completion risk | Conflicting sources |
|---|---|---|---|---|---|
| playable holomems | 54 names on official system/roster pages and official launch community post | official roster + official system + card editorial + launch gameplay/video | English name, branch/generation, unlock rules, Leader eligibility, outfit/card availability, board effects, image | medium | “50+” marketing vs explicit 54 list; use current explicit roster |
| songs | official site promotes 150+ and exposes a long catalog; 25 songs scheduled over 15 launch days | official music catalog + in-game live list + official updates + soundtrack wiki + video | title, type, performer, credits, availability date, difficulties, chart levels, MV/live background, version | high | count changes daily; wiki has stale status and naming errors |
| minigames | 4 named on official system page | official system + official gameplay videos + in-game verification | name, player count, controls, objective, rewards, unlock condition, mode | medium | “Colliect Cooking” spelling may be official-site typo |
| park facilities/areas | official park shows staged growth but no complete textual inventory | official park/system + in-game screenshots + launch streams | area, facility, unlock quest, resources, effect, linked holomem, image | high | no public complete inventory |
| cards/outfits | multiple rarities and card illustrations are visible, but no authoritative complete public database found | official game + official posts + Dengeki roundup + streams + community cross-check | rarity, card name, holomem, type, skill, effect values, outfit, acquisition, art | high | pre-launch posts mix rumor and confirmed art |
| quests/progression | official system describes main, holomem, park expansion, training | official system + in-game + video/stream | quest name, requirement, reward, unlock, repeatability, linked system | high | launch guides may infer sequences |
| platform requirements | Steam has explicit PC requirements; mobile values surfaced mainly in community summaries | Steam + App Store + Google Play + official support/news | OS, CPU/SoC, RAM, GPU, storage, region, controller/input | medium | platform/store status and regions change |
| troubleshooting issues | launch thread surfaces timing, lag, loading and access issues | official support/notices + store notes + multiple community reports + testing | platform, symptoms, official status, safe steps, timestamp | high | anecdotes and fixes conflict |

## Competitor Overview

| Competitor | Page type | Strength | Weakness | Planning use |
|---|---|---|---|---|
| hololive-dreams.com | official product hub/catalog | authority, art direction, full roster/music | weak task guidance/search | trust baseline, entity/media expectations |
| Steam | platform page | requirements, reviews, features | store-centered | install/specs and current issues |
| Game8 | game hub | hub/article pattern, images | pre-launch/403, shallow data | SERP structure only |
| MuMuPlayer | beginner guide | first-hour framing | emulator bias, speculation | question discovery only |
| AllThings.How | explainer | mechanics table and note types | pre-launch inferences | topic coverage, verify facts |
| VGM Soundtrack Fandom | wiki table | large song list | stale and error-prone | naming cross-check only |
| Destructoid | codes page | captures high-intent query | no codes yet | monitor, do not fabricate |
| Reddit launch thread | community | fresh pain points and language | anecdotal | FAQ and troubleshooting discovery |

## Core Competitor Notes

### Official product site

- Title strategy: exact brand, visual-first subpages for System, Music, Park, and Holomem.
- Content structure: animated key art, system steps, roster gallery, music catalog, official platform links.
- FAQ usage: no prominent user-task FAQ.
- Internal linking: shallow product navigation.
- Media: exceptionally high official art/screenshot density.
- Trust: official copyright, platform links, support, terms, privacy, posting guidelines.
- Gap: no searchable reference database, practical guides, or troubleshooting.
- Suitable for Flow 03: yes, as authority and visual-density baseline only.

### Game8

- Page type: search-targeted overview and gameplay/story articles.
- Strength: quickly occupies broad game-intent queries and uses screenshots.
- Weakness: pre-launch depth, direct access restrictions, uncertain update cadence.
- Suitable for Flow 03: caution; learn topic separation, not wording or facts.

### MuMuPlayer

- Page type: commercial beginner guide.
- Structure: first hour, park progression, team roles, resource advice, related guides.
- Strength: clear novice task framing.
- Weakness: emulator conversion is embedded throughout; advice may be speculative.
- Suitable for Flow 03: only for question discovery.

### AllThings.How

- Page type: pre-launch mechanics explainer.
- Structure: release/platform table, note types, scoring, team building, song list, activities.
- Strength: compact scannability and mechanics-first approach.
- Weakness: pre-launch assumptions need verification.
- Suitable for Flow 03: topic coverage inspiration only.

### Soundtrack Fandom

- Page type: community-maintained table.
- Strength: performer/title scanning and alternate names.
- Weakness: stale “upcoming/TBA” status, typos, incomplete vs official catalog.
- Suitable for Flow 03: reinforces song-database intent, not factual primacy.

### Reddit launch discussion

- Page type: live community thread.
- Strength: immediate questions about timing, lag, graphics, loading, song difficulty, and first choice.
- Weakness: anecdotes, device dependence, fast-changing fixes.
- Suitable for Flow 03: user-language and support-cluster evidence only.

## Source Landscape

| Source type | Best uses | Reliability | Notes |
|---|---|---|---|
| official | launch facts, roster, systems, songs, guidelines | A | primary baseline; updates are time-sensitive |
| platform stores | downloads, requirements, live review signal | A | commercial and region-specific |
| reference database | song-name cross-check and discovery | B | official catalog wins conflicts |
| editorial/news | release context and card-art discovery | B | publication date matters |
| competitor guides | user-task structure and query discovery | C | do not use alone for facts |
| community | launch issues, language, FAQs | D | verify every claim |
| video | visual/mechanics cross-check | A–D by publisher | official channel preferred |

## Image Search Findings And Candidates

- Official key art: ensemble composition, Ferris wheel, confetti, park-stage energy.
- Rhythm gameplay: converging note highway, score/rank/life/combo UI, character framing.
- Dream Park: pastel amusement-park scenes, facilities, quest interface, progression states.
- Holomem: official portraits, chibi park models, outfit/card illustrations.
- Song catalog: jacket art and performer pairings.
- Minigames: Hoppin' Rope, cooking puzzle, obstacle race, card game.
- Candidate search directions for Flow 04/06:
  - `hololive Dreams official key art`
  - `hololive Dreams rhythm gameplay screenshot`
  - `hololive Dreams Dream Park screenshot`
  - `hololive Dreams holomem card art`
  - `hololive Dreams minigames screenshot`
- Asset caution: Flow 02 did not download images. Official posting guidelines permit personally captured screenshots with original commentary, while restricting raw redistribution of official promotional media and extracted assets; Flow 04/06 must record source and usage.

## Video Search Findings And Candidates

yt-dlp was available and used only for metadata discovery. Twenty search results and twenty official-channel entries were reviewed at title/channel level.

High-value directions for Flow 07:

- Official Full Game Trailer: `KWkNV57HJe4`
- Official gameplay-stage highlight: `J1uOs1pAQMw`
- Official multiplayer/gameplay-stage highlight: `PQlypO5Kz7E`
- Official system reveal highlight: `d2DeHaTUcO8`
- Launch-day creator streams from hololive talents for first-hour UI and progression.
- Independent launch gameplay and beginner videos for user-task discovery, with lower factual trust.

Video candidate queries:

- `hololive Dreams first hour gameplay`
- `hololive Dreams Holomem Board guide`
- `hololive Dreams rhythm timing settings`
- `hololive Dreams invitation ticket`
- `hololive Dreams park progression`
- `hololive Dreams minigames`
- `hololive Dreams custom chart`
- `hololive Dreams PC performance`

## Opportunities For Flow 03

- A launch-day English reference site can differentiate through complete, searchable holomem and song coverage plus verified guide paths; current English SERPs are dominated by official pages, stores, pre-launch articles, and thin/specialized pages.
- The highest-confidence core is a product explainer plus official-download/platform guidance, 54-member reference coverage, the official song catalog, and mechanics guides rooted in the official System page.
- The highest user-help opportunity is safe launch troubleshooting: timing calibration, performance, storage, requirements, loading, and regional availability, with strict timestamps and official-source priority.
- Database completeness should be visible: roster coverage cannot be a handful of examples, and the song catalog should plan for launch-day additions.
- Park, board, quest, and minigame content should be task-oriented and visually supported, not generic summaries.

## Use With Caution

- Any tier list, reroll advice, gacha rate, “best card,” skill value, or resource recommendation.
- Any conventional redeem-code claim; no official system or working code set was confirmed.
- Mobile requirements, region availability, storage, and live review score.
- Anti-cheat/kernel claims: Steam confirms a protection component and false-positive handling, while stronger technical claims currently come from community discussion.
- “Cross-save” and account-link behavior until an official support source is captured.
- Full park/facility, quest, card, skill, and material inventories until direct in-game/official data is available.

## Do Not Use Or Exclude

- Unrelated `hololive Dreams` snack/merchandise results.
- Concert content for `hololive 7th fes. Ridin' on Dreams` unless disambiguating.
- Mod APK, unofficial currency generators, unsupported regional bypasses, leaks, or rumor.
- Long copied song descriptions, lyrics, card art, official promo videos, or competitor prose.

## Open Questions

- Which exact data fields are visible for each card, outfit, skill, node, quest, facility, and resource in the live game?
- What are the official current mobile requirements and region list?
- Does an official cross-save/account-link help page exist?
- Which 25 songs are added on each day of the launch campaign?
- What safe official remedies exist for the top launch-day loading/performance/timing issues?
- Which concrete frontend framework should Flow 05 initialize? This is unrelated to research but remains a project-level blocker before implementation.

## Research Gaps

- No mature English wiki.gg project was found.
- GameFAQs had syndicated launch news but no mature guide/database hub.
- Steam Community results were sparse at launch.
- Xbox, PlayStation, Nintendo, Epic, GOG, itch.io, Roblox, and PCGamingWiki were checked for relevance but are not distribution/reference sources for this iOS/Android/Steam title at research time.
- Fandom coverage is soundtrack-focused and stale; it cannot support the full game database alone.
- Direct in-game validation was not available during Flow 02.
- Search results are launch-day snapshots and need revalidation in Flow 06/07/09.

## Files Produced

- `research/keyword-research.md`
- `research/sources.json`
- `handoff/flow-02-research-brief.md`
