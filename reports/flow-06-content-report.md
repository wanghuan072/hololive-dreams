# Flow 06 Content Supplement Report

## Status

- Status: Completed
- Date: 2026-07-24
- Agent: Flow 06 Content Supplement Agent

## Stage Goal

This stage reviewed the complete first build, ran a second full-web research pass, replaced the sample music ledger with the full official English catalog snapshot, added traceable local media, deepened task pages, and validated the resulting Next.js build without deploying or committing Git.

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
- `handoff/flow-04-design-brief.md`
- `reports/flow-05-build-report.md`
- `handoff/flow-05-build-brief.md`
- Current website code, content, and production-rendered routes

## Project Context

- Main keyword: `hololive dreams`
- Language: English
- Target market: US / Global English
- Site type: SEO content / wiki / guide / reference content site
- Framework: Next.js 16 App Router
- Project directory: `D:\WH\202607\hololive dreams\hololive dreams`
- Web search allowed: yes
- New pages allowed: yes
- Structure adjustments allowed: yes
- Local refactoring allowed: yes
- Deployment: not allowed
- Git commit: not allowed

## Reviewed Pages

| Page group | Role | Current strength after Flow 06 | Main gap found | Resolution / priority |
| --- | --- | --- | --- | --- |
| `/` | Main query hub | 3,554 main-content characters, 10 images, strong intent routing | No Flow 06 structural gap | Retained; High pass |
| `/wiki` | Reference hub | 1,040 characters, 6 images | Needed complete entity destinations | Songs and roster now both complete snapshots; High pass |
| `/holomems` | Playable roster | 54/54 official names and portraits, filters | Generation labels remain a maintained editorial classification | Kept with source boundary; High pass |
| `/songs` | Music database | 154/154 entries and covers, title/performer/creator search, type filter | Flow 05 had only 14 sample entries and no covers | Replaced with complete official snapshot; P1 resolved |
| `/wiki/systems` | System relationship model | 1,390 characters, official rhythm image | Needed closer visual match | Added official system image; High pass |
| `/guides` | Guide index | 8 detail routes and visible task clusters | Detail pages lacked FAQs and matched media | Added route-specific FAQs and five official images; P1 resolved |
| Eight guide details | Task guides | 1,915–2,309 characters each, steps, FAQ, related routes | Some launch-day guides online contained fabricated specifics | Kept advice conservative and official-source bounded; P1 resolved |
| `/download` | Transactional/safety | Official platform exits and 1,500 characters | Mobile minimum not stated | Added iOS/iPadOS 16 requirement and live-store boundary |
| `/system-requirements` | Compatibility decision | PC table and 1,779 characters | Mobile requirement and protection note needed live confirmation | Added verified App Store minimum and current Steam safety path |
| `/help` | Troubleshooting router | 1,829 characters and nine links | No direct verified support route | Added official English support and news links |
| `/updates` | Dated change tracker | 1,372 characters | Needed official news exit and catalog source update | Added official news route and Flow 06 snapshot source |
| `/contact` | Editorial/support separation | 1,174 characters | Official game support address was previously unverified | Added clearly labeled official game support email |
| Trust/legal pages | Site transparency | 931–1,184 characters | No Flow 06 critical gap | Retained as lightweight support/legal pages |

## Secondary Search Queries

| Query | Purpose | Related page | Source types targeted | Used |
| --- | --- | --- | --- | --- |
| `hololive Dreams official system guide Holomem Board Dream Park minigames` | Recheck system names and loop | Systems, guides | Official, guide | Yes |
| `hololive Dreams beginner guide rhythm timing settings performance` | Discover question patterns and unsafe specifics | Guides, Help | Guide, community | Questions only |
| `hololive Dreams wiki song list characters database` | Check database coverage expectations | Songs, Holomems | Wiki, database | Yes / exclusions |
| `site:reddit.com/r/Hololive "hololive Dreams" game` | Discover current user questions | Help, Updates | Community | Questions only |
| `site:hololive-dreams.com/en hololive Dreams news support privacy guideline` | Locate official update/support routes | Help, Contact, Updates | Official | Yes |
| `site:hololive.hololivepro.com/en/news "hololive Dreams"` | Recheck launch facts | Home, Download | Official | Yes |
| `site:store.steampowered.com/app/4282500 hololive Dreams requirements anticheat` | Confirm PC requirements and official security wording | Requirements, Help | Platform | Yes |
| `site:apps.apple.com hololive Dreams QualiArts` | Confirm English mobile requirements | Requirements, Download | Platform | Yes |
| `Google Play hololive Dreams game.qualiarts.hololive.dreams.com` | Verify Android listing and package | Download | Platform | Yes |
| `hololive Dreams official FAQ support data transfer account linking` | Find official support path | Help, Contact | Official, community | Support path yes; transfer steps deferred |
| `hololive Dreams update notes July 2026 official` | Find dated notices | Updates | Official | Yes |
| `hololive Dreams Steam discussions loading performance error` | Discover support symptoms | Help | Community | Questions only |
| `"hololive Dreams" guide July 2026` | Compare guide claims | Guides | Guide, competitor | Yes / exclusions |
| `"hololive Dreams" mini games Hoppin Rope Colliect Cooking` | Verify names and spelling | Minigames | Official, guide | Official wording adopted |

## Flow 02 Completeness Check

- Google/SERP: covered in Flow 02; repeated for post-launch freshness.
- Official/platform: strong Flow 02 coverage; rechecked official home, system, park, music, news, launch announcement, Steam, Google Play, and App Store.
- Wiki/database: Flow 02 found one soundtrack database and no mature launch wiki. Flow 06 found new independent “wiki” pages but excluded factual claims that conflicted with official material or lacked support.
- Guide/competitor: Game8, MuMuPlayer, AllThings.How, Destructoid, new independent wikis, Steam guides, and another fan reference domain were checked. Their value was mainly question and layout discovery.
- Community/comments: Reddit launch, loading, regional availability, system requirements, account-transfer discussion, Steam forums, and Steam reviews were checked.
- Image/media: official music, system, park, Steam, and existing official video thumbnails were checked.
- Supplemental search was necessary because the game launched between the initial planning window and this content pass, and store/support data was changing quickly.

## Search Coverage Matrix

| Page cluster | Main keyword | Long-tail | Questions | Entities | Comparison | Update | Image | Gaps remaining |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home/Wiki | Strong | Strong routing | Strong | Complete launch roster/catalog destinations | Not primary | Dated | Strong | None critical |
| Songs | Strong | Song list, originals, covers, performers | Search/filter task | 154/154 | Original vs cover | July 24 snapshot | 154/154 | Future additions require resync |
| Holomems | Strong | Characters, roster, branches | Filter task | 54/54 | Branch grouping | July 24 snapshot | 54/54 | No per-card skill database |
| Systems | Strong | Park, board, quests, minigames | Guide routes | Five system families | Relationship loop | Current official system page | Official system media | Numeric in-game fields intentionally deferred |
| Guides | Strong | Eight launch task clusters | Two FAQs per detail | Related entities linked | Platform/task choices | Checked date | Matched media | Exact UI labels need direct in-game verification when changed |
| Download/Requirements/Help | Strong | PC, iOS, Android, loading, antivirus | Strong | Three platforms | Platform choice | Live stores/news | Existing key art | Android minimum remains store-specific |
| Updates/Trust | Strong | Tracker, corrections, support | Strong | Sources and notices | Not primary | Strong | Not necessary | Production identity/contact for this site remains unspecified |

## Websites Or Pages Queried

| Source | Source type | Related page | Used | Reason or exclusion |
| --- | --- | --- | --- | --- |
| Official game home | Official | Home, Help, Contact | Yes | Product facts and official English support |
| Official system page | Official | Systems, guides | Yes | Core mechanics, minigame names, image assets |
| Official park page | Official | Park guide | Yes | Park progression image |
| Official music page | Official | Songs | Yes | Complete 154-entry snapshot and covers |
| Official news index | Official | Updates, Help | Yes | Launch and requirements notice route |
| COVER/hololive launch release | Official | Home, Download, Updates | Yes | Launch date, platforms, 54 talents, campaign |
| Steam store | Platform | Requirements, Help, Download | Yes | PC requirements, protection-component instructions |
| Google Play | Platform | Download | Yes | Android package, features, compatibility |
| App Store Canada English | Platform | Requirements, Download | Yes | iOS/iPadOS 16 minimum and version context |
| Videogame Soundtracks Wiki | Database | Songs | Cross-check only | Scale and sample-title comparison; stale/incomplete |
| Game8 gameplay/story | Guide/competitor | Guides | Limited | Pre-launch question structure; direct page returned 403 in one check |
| MuMuPlayer beginner guide | Commercial guide | Guides | Limited | Question discovery; emulator/commercial bias |
| AllThings.How launch explainer | Competitor | Systems | Limited | Structure discovery; pre-launch and inferred claims |
| Destructoid codes page | News/guide | Updates | Excluded from page facts | Codes remain unconfirmed |
| hololivedreamswiki.wiki beginner guide | Fan wiki | Guides | No | Unsupported frame counts, timing windows, and scoring claims |
| hololivedreamswiki.wiki minigame guide | Fan wiki | Minigames | No | Claimed 12 modes and invented tiers conflicting with official four-name page |
| hololivedreams.com fan reference | Fan reference | Wiki | No | Thin launch-stage material and unsupported attributes |
| Steam community discussions | Community | Help | Questions only | Current symptom discovery; no fixes adopted |
| Reddit launch discussion | Community | Help, Updates | Questions only | Performance and loading language |
| Reddit loading thread | Community | Help | Questions only | Repeated symptom; VPN workaround rejected |
| Reddit EU availability thread | Community | Download | Questions only | Regional concern; no blanket availability claim |
| Reddit account-linking threads | Community | Help | Deferred | No official support documentation found for stable steps |

## Search Coverage Gaps

| Source type | Expected | Actual | Reason | Impact |
| --- | --- | --- | --- | --- |
| Google/SERP | Multiple query clusters | 14 documented query clusters | Complete | None |
| Official/platform | 2–6 | 9 high-value pages | Exceeded | Strong factual base |
| Wiki/database | 3–8 | 1 usable cross-check plus 2 excluded new wikis | Game launched one day before review; mature databases do not yet exist | Exact chart/card fields remain out of scope |
| Guide/competitor | 5–10 | 7 checked | Complete | Used cautiously |
| Community/comment | 5–15 | 7 current threads/collections | Complete | Questions only |
| Image sources | Relevant official/media pages | Official music, system, park, Steam, YouTube | Complete | 159 new local images |

## Long-Tail Keyword Decisions

| Long-tail keyword | Related page | Used as | Decision | Reason |
| --- | --- | --- | --- | --- |
| hololive Dreams song list | `/songs` | Database | Used | Official complete catalog exists |
| hololive Dreams original songs | `/songs` | Filter and count | Used | Official category |
| hololive Dreams cover songs | `/songs` | Filter and count | Used | Official category |
| hololive Dreams iOS requirements | `/system-requirements` | Section | Used | App Store supports iOS/iPadOS 16 |
| hololive Dreams support email | `/help`, `/contact` | Support route | Used | Official English contact is public |
| hololive Dreams antivirus false positive | Requirements/Help | Safety section | Used | Current Steam listing documents it |
| hololive Dreams stuck loading | `/help` | Symptom route | Used cautiously | Community demand exists; no workaround asserted |
| hololive Dreams account linking | `/help` | Candidate FAQ | Deferred | No stable official English workflow found |
| hololive Dreams codes | Updates candidate | Excluded | No confirmed conventional code system |
| hololive Dreams tier list | Guides candidate | Excluded | Launch data and testing insufficient |
| hololive Dreams 12 minigames | Minigame guide | Excluded | Conflicts with official public four-name list |

## New Sources Summary

| Source ID | Title | Type | Credibility | Used for |
| --- | --- | --- | --- | --- |
| `src-flow06-001` | Official Music Catalog July 24 Snapshot | Official | A | 154 songs, credits, covers |
| `src-flow06-002` | Official News Index | Official | A | Updates and notices |
| `src-flow06-003` | Official English Contact Details | Official | A | Help and support routing |
| `src-flow06-004` | Steam Live Launch Review | Platform | A | PC requirements and safe repair |
| `src-flow06-005` | Google Play Live Launch Review | Platform | A | Android listing and compatibility |
| `src-flow06-006` | App Store English Launch Review | Platform | A | iOS/iPadOS requirement |
| `src-flow06-007` | Steam Community Discussions | Community | C | Symptom discovery only |
| `src-flow06-008` | Reddit Loading-Screen Reports | Community | C | Symptom discovery only |

## Image Assets Added Or Reviewed

| Asset group | Source | Local path | Related pages | Usage |
| --- | --- | --- | --- | --- |
| 154 song covers | Official music catalog / microCMS assets | `public/images/songs/` | `/songs` | Searchable catalog thumbnails |
| Rhythm Live | Official system page | `public/images/official-system/hololive-dreams-rhythm-live.webp` | Systems, rhythm guide, Create Chart | Adopted |
| Hoppin' Rope | Official system page | `public/images/official-system/hololive-dreams-hoppin-rope.webp` | Minigames guide | Adopted |
| Invitation ticket | Official system page | `public/images/official-system/hololive-dreams-invitation-ticket.webp` | Unlock guide | Adopted |
| Team/board | Official system page | `public/images/official-system/hololive-dreams-team-board.webp` | Team guide | Adopted |
| Developed park | Official park page | `public/images/official-system/hololive-dreams-developed-park.webp` | Park guide | Adopted |

Full per-file original URL, downloaded URL, local path, public path, alt text, byte size, content type, and adoption status are stored in:

- `research/flow-06-song-asset-sources.json`
- `research/flow-06-system-asset-sources.json`

## Content Length And Depth Check

Counts are production-rendered `<main>` text. Card/entity text is included in the raw count, so entity pages were also evaluated separately for record and field coverage.

| Page | Type | Main characters | Minimum | Passed |
| --- | --- | ---: | ---: | --- |
| `/` | Home | 3,554 | 1,200 | Yes |
| `/wiki` | Core index | 1,040 | 900 | Yes |
| `/holomems` | Core database | 2,783 | 900 | Yes |
| `/songs` | Core database | 11,241 | 900 | Yes |
| `/wiki/systems` | Core reference | 1,390 | 900 | Yes |
| `/guides` | Core index | 2,203 | 900 | Yes |
| `/guides/getting-started` | Core guide | 2,309 | 900 | Yes |
| `/guides/rhythm-timing` | Core guide | 2,248 | 900 | Yes |
| `/guides/dream-park-progression` | Core guide | 2,022 | 900 | Yes |
| `/guides/unlock-holomems` | Core guide | 1,984 | 900 | Yes |
| `/guides/team-building-holomem-board` | Core guide | 2,006 | 900 | Yes |
| `/guides/minigames` | Core guide | 1,915 | 900 | Yes |
| `/guides/create-chart` | Core guide | 2,051 | 900 | Yes |
| `/guides/performance-settings` | Core guide | 2,216 | 900 | Yes |
| `/download` | Decision page | 1,500 | 900 | Yes |
| `/system-requirements` | Decision page | 1,779 | 900 | Yes |
| `/help` | Support hub | 1,829 | 900 | Yes |
| `/updates` | Support/reference | 1,372 | 600 | Yes |
| `/about` | Trust page | 1,086 | 600 | Yes |
| `/contact` | Trust/support | 1,174 | 600 | Yes |
| `/editorial-policy` | Trust page | 1,175 | 600 | Yes |
| `/privacy` | Legal | 931 | 600 | Yes |
| `/terms` | Legal | 1,184 | 600 | Yes |

## Entity Detail Field Depth Check

| Entity type | Data files/pages | Required fields | Present fields | Missing high-value fields | Repetition | Passed |
| --- | --- | --- | --- | --- | --- | --- |
| Holomems | `src/data/holomems.ts`, `/holomems` | Name, branch/group, image, filters, source/date | Present for 54 | Card rarity/skills are not promised by the route | Entity cards intentionally concise | Yes for planned roster index |
| Songs | `src/data/songs.json`, `/songs` | Title, performer, type, creators, cover, source/date | 154/154 complete for public fields | In-game chart/difficulty fields not exposed by official catalog | Distinct titles, performers, credits, covers | Yes |
| Systems | `src/data/systems.ts`, `/wiki/systems` | Name, role, relationship, guide path, evidence | Present for five core families | Exact numeric node/reward fields | No duplicated entity details | Yes for system index |
| Guides | `src/data/guides.ts`, eight routes | Steps, scope, caveats, FAQ, media, next links | Present | Direct in-game screenshots still ideal for settings/create-chart details | Sections and FAQs are route-specific | Yes |

## High-Intent Category Coverage Check

| Category | Expected scale | Launch coverage | Local support | Passed |
| --- | ---: | ---: | --- | --- |
| Playable Holomems | 54 | 54 records / 54 images | Roster + Wiki + home routes | Yes |
| Public music catalog | 154 on July 24 | 154 records / 154 images | Search, creator lookup, Original/Cover filter | Yes |
| Core game systems | Five top-level families in site model | Five | System index + related guides | Yes |
| Named public minigames | Four on official English system page | Four | Dedicated guide | Yes |
| Launch task guides | Eight planned | Eight list + detail routes | Steps, FAQs, images, related pages | Yes |
| Map | Not planned | Not applicable | No fake map created | N/A |

## Core Data Source Mix And Completion Check

| Data type | Expected total | Local records | Source mix | Cross-checked fields | Missing after search | Conflict | Completion |
| --- | ---: | ---: | --- | --- | --- | --- | --- |
| Holomems | 54 | 54 | Official roster, launch announcement, official imagery | Total, names, participation, portraits | In-game card fields not promised | None | Complete roster snapshot |
| Songs | 154 current snapshot | 154 | Official catalog, Steam/Google Play scale and samples, soundtrack database cross-check | Total/scale, categories, sample titles, performers, creators, art | Future daily additions | Resolved by official source priority | Complete dated snapshot |
| Systems/minigames | Five families / four named minigames | Five / four | Official system, park, store pages, official video references, community question discovery | Names, relationships, availability claims | Numeric values and live rewards | False 12-minigame claims excluded | Complete for public system scope |

## Content Added Or Updated

| Page / file | Addition | Main sources |
| --- | --- | --- |
| `/songs`, `src/data/songs.json` | Full 154-entry music catalog, 154 covers, creators, type filter, expanded search | Official music catalog |
| Eight guide pages | Two route-specific FAQs each and closer official media | Official system, park, Steam, stores, posting guideline |
| `/help` | Official English support address, official news exit, privacy-safe support checklist | Official home/news |
| `/contact` | Clear editorial vs official game support routing | Official home |
| `/system-requirements` | iOS/iPadOS 16 minimum and rechecked PC safety note | App Store, Steam |
| `/download` | iOS/iPadOS requirement and live Android compatibility boundary | App Store, Google Play |
| `/updates` | Official news link and Flow 06 catalog source | Official news/music |
| Systems and guide imagery | Five local official screenshots/illustrations | Official system/park |

## Internal Links Added

- Help → official news and official English support
- Updates → official news
- Existing route-level guide, song, system, download, requirements, and help links were preserved and revalidated
- No keyword-heavy link blocks were added

## E-E-A-T Improvements

- Source transparency: eight new structured source records plus two detailed asset ledgers.
- Update dates: song catalog and page checks are explicitly dated July 24, 2026.
- Editorial boundaries: unsupported numerical advice, account-transfer procedures, tier lists, and codes were excluded.
- Official links: direct news, support, store, and official catalog routes.
- Image traceability: 159 new assets have original URL, source page, local path, alt, size, and content type.
- Safety: community VPN and third-party-file workarounds are not recommended.

## Community Content Handling

- Community sources were used only to identify real question wording around loading, performance, audio, startup, regional access, and account transfer.
- The front end converts those signals into safe diagnostic routing.
- VPN workarounds, unverified account-transfer steps, Linux/Steam Deck assumptions, and launch-day “meta” claims were excluded.

## Risks And Unconfirmed Content

| Topic | Risk | Action | Follow-up |
| --- | --- | --- | --- |
| Catalog changes during 15-day campaign | Snapshot becomes stale | Count/date shown; sync script retained | Re-run after campaign |
| Android minimum | No stable public universal minimum found | Live Play compatibility boundary | Recheck official store |
| Account transfer | Community steps may be directional/version-sensitive | No instructions published | Video/official support research if needed |
| Exact rhythm/board/reward numbers | Launch balancing and unsupported guide claims | Avoided frozen values | Direct in-game verification |
| `Colliect Cooking` spelling | Unusual but present on official English HTML | Retained with explanation | Recheck in-game English screen |
| Production domain/site editorial inbox | Not provided | No identity invented | Flow 08 preserves placeholder; manual owner decision |

## Validation Commands

| Command / check | Result | Notes |
| --- | --- | --- |
| JSON parse for `research/sources.json` | Passed | 32 sources, 8 new Flow 06 sources, 5 excluded records |
| `npm run lint` | Passed | Zero errors and warnings after cleanup |
| `npm run typecheck` | Passed | TypeScript clean |
| `npm run build` | Passed | 27 static/SSG routes |
| `node scripts/validate-routes.mjs` | Passed | 23/23 pages status 200, title/description present, exactly one H1, no unknown internal links |
| `node scripts/audit-content-depth.mjs` | Passed | Every page above its type-specific hard minimum |
| Song and image record check | Passed | 154 records, 154 song assets, zero missing local paths |
| Browser-rendered `/songs` | Passed | 154 visible records, covers rendered, search for “Megitsune” returned one result |
| Desktop screenshot inspection | Passed | Header, hero, controls, and catalog layout clean |

## Files Changed

- `project.yaml`
- `research/sources.json`
- `research/flow-06-song-asset-sources.json`
- `research/flow-06-system-asset-sources.json`
- `scripts/audit-content-depth.mjs`
- `scripts/sync-official-music.mjs`
- `scripts/download-official-system-media.mjs`
- `src/data/songs.json`
- `src/data/songs.ts`
- `src/data/guides.ts`
- `src/data/site.ts`
- `src/data/updates.ts`
- `src/app/songs/*`
- `src/app/guides/[slug]/*`
- `src/app/wiki/systems/page.tsx`
- `src/app/help/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/download/page.tsx`
- `src/app/system-requirements/page.tsx`
- `src/app/updates/page.tsx`
- 154 files under `public/images/songs/`
- 5 files under `public/images/official-system/`

## Deviations From Previous Flows

- Flow 03 route structure: no deviation; no new pages.
- Flow 04 visual direction: no deviation; new media uses existing editorial layout.
- Flow 05 implementation: the 14-record song seed was replaced by the planned complete public catalog. Guide detail structure gained an FAQ section within authorized local refactor scope.

## Follow-Up Notes For Later Flows

- Flow 07: verify Create Chart, rhythm lane, Dream Park, account transfer, settings, and minigame presentation from official videos without inventing UI labels.
- Flow 08: add sitemap, structured data, final robots/canonical strategy, image metadata review, and preserve the placeholder origin until a production domain exists.
- Flow 09: audit asset paths, large catalog performance, mobile catalog layout, FAQ accessibility, factual boundaries, and the no-deploy/no-Git stop.

## Open Questions

- Production domain, this independent site's public editorial email, business goal, analytics, and monetization are still unspecified.
- Android device minimums and stable official account-transfer instructions were not found.
- The song snapshot will need a future refresh as the launch campaign adds tracks.

