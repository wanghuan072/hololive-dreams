# Flow 02 Handoff: Keyword And Competitor Research Brief

## Status

- Flow: 02 - Keyword And Competitor Research
- Status: completed_with_warnings
- Completed at: `2026-07-23T18:39:50+08:00`
- Research mode: online
- Agent: flow-02-keyword-competitor-research-agent

## Inputs Confirmed

- Main keyword: `hololive dreams`
- Language: English
- Target market: US / Global English
- Site type: SEO content / wiki / guide / reference content site
- Network allowed: yes
- YouTube / yt-dlp allowed: yes
- Unpacked data available: no
- Unpacked data directory recorded: no
- Unpacked data read allowed: no
- Execute Flow 02A after Flow 02: false
- Source files read:
  - `project.yaml`
  - `AGENTS.md`
  - `handoff/flow-01-project-brief.md`

## Research Outputs

- `research/keyword-research.md`
- `research/sources.json`

## SERP Summary

- Dominant search intent: mixed
- Secondary intents: navigational, informational, transactional, video, community
- Topic status: official Rhythm & RPG launched globally on `2026-07-23`; not an ambiguous fan project.
- Strong result types:
  - Official product/system/music pages
  - Steam, App Store, and Google Play
  - Launch news and pre-launch explainers
  - Early guide articles and official/creator videos
  - Reddit launch/troubleshooting discussions
- Weak or missing result types:
  - Mature English wiki.gg or complete independent game database
  - Stable post-launch tier/rate/card/quest data
  - Verified troubleshooting knowledge base

## Keyword Groups For Flow 03

### Recommended For Planning

- Verified overview and official platform/download intent.
- Complete playable-holomem reference coverage: official roster exposes 54 names.
- Complete, update-aware song catalog: official site promotes 150+ tracks and a 25-songs-in-15-days launch campaign.
- Beginner progression: quests, park expansion, invitation tickets, teams, Leader role, Holomem Board, Skill Nodes, and Connect Nodes.
- Minigame reference: Hoppin' Rope, Colliect Cooking spelling check, MEGA CIRCUIT, and POKAJAN.
- System requirements, storage, input/timing, and safe troubleshooting.
- Visual/video explanations for rhythm play, park development, team training, and minigames.

### Secondary Opportunities

- Custom/Create Chart guidance.
- Multiplayer/co-op/PvP mode explanations after verification.
- Park facilities and quest indexes once live data is collected.
- Cards, outfits, skills, and rarity indexes once complete source fields are available.

### Use With Caution

- Tier lists, reroll recommendations, rates, “best” cards/teams, resource efficiency, and launch meta.
- Codes and free-reward pages: no conventional working codes were confirmed at research time.
- Cross-save, region availability, mobile specs, and storage figures.
- Anti-cheat, Linux, or Steam Deck claims beyond the exact Steam note.
- Any launch-day community fix without official or reproducible validation.

### Exclude

- Merchandise/snack collisions and `Ridin' on Dreams` concert intent.
- Unofficial APK/mod/currency-generator and regional-bypass content.
- Leaks, rumors, copied lyrics, promo-media redistribution, or extracted game assets.

## Competitor Insights For Flow 03

Useful patterns:

- Official site establishes a bright, kinetic Dream Park visual language and very high media density.
- Official Music and Holomem pages prove users can scan large entity catalogs.
- Beginner competitors use first-hour task framing, mechanics tables, and related-guide paths.
- Community discussions reveal immediate support intent around timing, performance, loading, storage, and compatibility.

Gaps observed:

- No current English result combines trustworthy guides, complete roster/music indexes, update awareness, and safe support content.
- Official pages are authoritative but not searchable task guides.
- Existing guides are largely pre-launch, commercial, incomplete, or speculative.

Patterns to avoid:

- Emulator-led conversion copy.
- Pre-launch claims presented as current facts.
- Thin “codes” or “tier list” pages without verified data.
- A visually sparse generic card grid that ignores the official game's strong art direction and information density.

## Source Guidance

- Best sources for facts: src-001 through src-009, src-024.
- Best source for roster and system fields: src-002 and src-003.
- Best source for songs: src-004, cross-checked cautiously with src-015.
- Best sources for user questions: src-016 through src-019.
- Best sources for video research: src-020 and src-021, plus official-channel metadata captured in Flow 02.
- Best sources for competitor structure only: src-010 through src-014 and src-022.
- Sources to avoid as factual foundations: excluded sources in `research/sources.json`.

## Entity/Data Requirements For Flow 03

### Playable Holomems

- `estimated_total_basis`: 54 explicit official names; marketing often says 50+.
- `source_mix_required`: official roster/system + official updates + live game/video + editorial card coverage.
- `cross_check_fields`: name, branch/generation, unlock rule, Leader eligibility, card/outfit set, skill/board data, image.
- `data_completion_risk`: medium.
- `conflicting_sources`: marketing total vs explicit roster count; use explicit current list and timestamp it.

### Songs

- `estimated_total_basis`: official public music catalog plus 150+ launch claim; 25 more scheduled over 15 days.
- `source_mix_required`: official music page + in-game catalog + official updates + official video + soundtrack wiki.
- `cross_check_fields`: title, type, performer, credits, availability date, difficulty/chart data, MV/live background.
- `data_completion_risk`: high because the count changes daily.
- `conflicting_sources`: Fandom spelling/status errors and launch-day additions.

### Cards/Outfits/Skills

- `estimated_total_basis`: no authoritative full public total found.
- `source_mix_required`: live game + official posts + Dengeki card roundup + official/creator streams.
- `cross_check_fields`: rarity, card name, holomem, type, skill, numeric effects, outfit, acquisition, art.
- `data_completion_risk`: high.
- `conflicting_sources`: pre-launch community posts mix confirmed art and speculation.

### Park/Quests/Facilities/Minigames

- `estimated_total_basis`: four named minigames; facility/quest totals unavailable.
- `source_mix_required`: official System/Park + in-game verification + official gameplay videos + community question discovery.
- `cross_check_fields`: unlocks, requirements, rewards, player counts, controls, resources, linked systems.
- `data_completion_risk`: medium for minigames, high for full facility/quest datasets.
- `conflicting_sources`: official site appears to spell one minigame `Colliect Cooking`; verify in game.

## E-E-A-T Notes

- Every live fact should carry a checked/updated date in the internal data pipeline.
- Official sources should support release, roster, songs, systems, platforms, and posting rules.
- Community sources should only identify user questions; fixes require official or reproducible confirmation.
- Trust surfaces should separate official links from independent guide content and state the site is unofficial without cluttering player-facing pages with research notes.
- Song, card, screenshot, and video usage requires careful copyright handling; source records remain internal.

## Risks And Cautions

- Copyright: official promo art, card art, songs, lyrics, MVs, and gameplay footage are protected. Do not extract or republish raw media.
- Fact: launch-day guides may be speculative; exact rates, skills, resources, and routes are not yet reliable.
- Time-sensitive: song count, launch rewards, reviews, regions, requirements, issues, fixes, codes, and meta.
- Community-only: timing fixes, performance anecdotes, account-link claims, and compatibility conclusions.
- Trademark: the site must not imply official affiliation.

## Open Questions

- Exact live-game datasets for cards, outfits, skills, quests, facilities, resources, and chart difficulties.
- Official current mobile requirements and region coverage.
- Official account-link/cross-save instructions.
- Framework choice before Flow 05.

## Research Gaps

- No mature English wiki.gg or complete independent reference database at launch.
- GameFAQs and Steam Community coverage is immature.
- Direct live-game data was not available.
- Flow 06/07/09 must recheck launch-day facts.

## Optional Flow 02A Routing

- Next recommended flow: `03`
- Reason: unpacked data is explicitly unavailable and read permission is `no`.
- Unpacked-data-relevant keyword/entity clues: none.
- Notes for Flow 02A: skipped by project scope; do not read or invent a local data source.

## Next Flow Instructions

Flow 03 should read:

1. `project.yaml`
2. `AGENTS.md`
3. `handoff/flow-01-project-brief.md`
4. `research/keyword-research.md`
5. `research/sources.json`
6. `handoff/flow-02-research-brief.md`
7. `D:\WH\Agent\SEO-Agent\03-网站结构规划\workflow\03-网站结构规划.md`

Flow 03 may use the keyword groups, entity requirements, intent findings, competitor insights, media candidates, and source guidance to plan structure. It must not treat these groups as a final navigation or page list without its own planning step.
