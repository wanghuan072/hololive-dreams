# Keyword Gap Expansion Research

## Status

- Date: 2026-07-24
- Scope: release-date intent, `Ridin' on Dreams` entity collision, and 54 playable-member detail pages
- Trigger: user-supplied keyword screenshots and explicit approval to expand the site
- Language: English site output; multilingual queries were treated as intent evidence, not permission to create untranslated locale pages

## Keyword Decisions

### Release And Global Availability

The supplied keyword set showed a strong factual cluster around:

- `hololive dreams release date`
- `kapan hololive dreams rilis global`
- Chinese-language "when will it release" and "listing time" variants
- `hololive dreams Steam`
- `hololive dreams iOS`

These variants overlap and must not be added as independent volume totals. They share one answer intent.

Decision:

- Merge the release-date answer into `/updates`.
- Change the page framing to `hololive Dreams Release Date, Global Launch & Updates`.
- Keep `/download` responsible for store exits and `/system-requirements` responsible for hardware and OS compatibility.
- Do not create Indonesian or Chinese pages without a separate multilingual workflow.

Primary sources:

- https://hololive.hololivepro.com/en/news/20260723-01-401/
- https://store.steampowered.com/app/4282500/hololive_Dreams/

Verified boundary:

- COVER's English announcement records July 23, 2026 JST as the official service date.
- Steam may display July 22 in some storefront views. The site preserves the store difference and uses the publisher's JST date as the controlling global-service record.

### Ridin' On Dreams Collision

The supplied keyword set contained repeated high-volume variants for:

- `hololive 7th fes. ridin' on dreams`
- stages 1-4
- setlists
- live viewing
- the `Ridin' on Dreams` title without an entity qualifier

Decision:

- Add `/ridin-on-dreams` as a disambiguation page.
- Separate the hololive Dreams game, hololive 7th fes. event, and the in-game catalog song.
- Include official event dates and the four-stage structure.
- Do not expand the game reference into a full concert setlist archive without a separate scope decision.

Primary sources:

- https://hololive.hololivepro.com/en/news/20251208-02-20/
- https://hololive.hololivepro.com/en/events/hololivesuperexpo2026/
- https://www.hololive-dreams.com/en/music

### Playable Member Detail Pages

The supplied keyword set showed member-plus-game demand for Nekomata Okayu and Hoshimachi Suisei. Broad web search also exposed multiple unofficial roster sites with unsupported tier, skill, banner, and unlock claims.

Decision:

- Build all 54 member pages from one auditable data model.
- Use the official hololive Dreams roster for game participation.
- Use canonical English hololive production talent pages for biographical facts.
- Derive in-game song relationships only from the project-local official music catalog snapshot.
- Do not infer per-member card effects, tier placements, skill values, gacha rates, or unlock sequences.

Coverage:

- Official profile pages fetched: 54/54
- Official introductions: 54/54
- Official units: 54/54
- Birthdays: 53/54
- Debut dates: 50/54
- Heights: 50/54
- Fan names: 48/54

Machine-readable source registry:

- `research/holomem-profile-sources.json`

Refresh command:

```bash
npm run sync:profiles
```

## Source Hierarchy

1. Official hololive Dreams launch, roster, system, and music pages
2. Official hololive production talent and event pages
3. Platform stores for platform-specific display and availability
4. Editorial and community results for query discovery only

Unofficial sites were not used as factual inputs when they claimed members, skills, tiers, or unlock methods that conflicted with or exceeded official evidence.

## Implementation Ownership

- `/updates`: release date, global service, launch campaign, dated changes
- `/download`: official Steam, iOS, and Android exits
- `/ridin-on-dreams`: game/event/song disambiguation
- `/holomems`: searchable roster index
- `/holomems/<slug>`: member profile facts, game roster context, attributed catalog songs, and related members
- `/wiki/systems` and guides: general mechanics and safe progression guidance
