# Post-Flow Keyword Expansion Report

## Status

- Status: `completed_with_warnings`
- Date: 2026-07-24
- Trigger: user-approved keyword-gap expansion after Flow 09
- Deployment performed: no
- Git commit performed: no

## Approved Scope

1. Merge release-date intent into `/updates`.
2. Add `/ridin-on-dreams`.
3. Do not add an official community/social entry.
4. Research and generate detail pages for all playable members.

## Research Result

### Release

- Official service date: July 23, 2026 JST
- Platforms: App Store, Google Play, and Steam
- Steam can display July 22 in some storefront views; the publisher's JST announcement remains the controlling service-date record.
- Launch facts added: live status, platforms, free-to-play state, 54-member roster, highest-rarity favorite choice, pre-registration gifts, and 25-song/15-day campaign.

### Ridin' On Dreams

- Confirmed three separate entities:
  - hololive Dreams game
  - hololive 7th fes. Ridin' on Dreams event
  - `Ridin' on Dreams` song in the game catalog
- Official event facts added: March 6-8, 2026, four stages, Makuhari Messe, historical livestream boundary.
- No unofficial setlist compilation or broad concert-site expansion was added.

### Member Profiles

- Official hololive Dreams roster records: 54
- Canonical hololive production English talent pages fetched: 54/54
- Official introduction coverage: 54/54
- Official unit coverage: 54/54
- Birthday coverage: 53/54
- Debut coverage: 50/54
- Height coverage: 50/54
- Fan-name coverage: 48/54
- Game-song relationships: derived from the project-local July 24 official catalog snapshot
- Unsupported per-member card tiers, skill values, gacha rates, unlock routes, and recommended builds: omitted

## Files And Features Added

- `src/app/holomems/[slug]/page.tsx`
- `src/app/holomems/[slug]/page.module.css`
- `src/app/ridin-on-dreams/page.tsx`
- `src/app/ridin-on-dreams/page.module.css`
- `src/data/holomemProfiles.json`
- `src/data/holomemProfiles.ts`
- `scripts/sync-holomem-profiles.mjs`
- `research/holomem-profile-sources.json`
- `research/keyword-gap-expansion-2026-07-24.md`

The Holomems directory now links every portrait to a detail route. Each detail page separates:

1. official talent profile facts;
2. confirmed hololive Dreams roster context;
3. attributed songs from the dated game catalog;
4. unsupported member-specific game claims.

## SEO And Sitemap

- Previous sitemap routes: 24
- Current sitemap routes: 79
- New member routes: 54
- New disambiguation route: 1
- Unique titles: 79/79
- Unique descriptions: 79/79
- Canonical/OG alignment: 79/79
- H1 count: exactly one on 79/79
- Unknown internal links: 0
- Member schema: WebSite + WebPage + BreadcrumbList
- Ridin' page schema: WebSite + WebPage + BreadcrumbList

## QA Results

| Check | Result |
| --- | --- |
| `npm run lint` | passed |
| `npm run typecheck` | passed |
| `npm run build` | passed; 84 static/SSG outputs |
| Route validation | passed; 79/79 |
| Content-depth audit | passed; 79/79 |
| Technical SEO audit | passed; 79 unique metadata sets |
| Desktop visual check | passed for Updates and Nekomata Okayu |
| Mobile visual check | passed at 375px for Nekomata Okayu and Ridin' on Dreams |
| Horizontal overflow | none in checked pages |
| Browser console | no warnings or errors |
| Official member profile links | 54/54 returned 200 |
| External-link audit | 60 reachable, 8 transport-unverified, 0 confirmed HTTP failures |

The eight transport-unverified links were Google Play, Steam, and six pre-existing YouTube links. The audit received local transport errors/timeouts rather than HTTP 4xx/5xx responses, so the script now reports these separately from confirmed dead links.

## Remaining Warnings

- Production domain and editorial inbox remain placeholders.
- The temporary logo still needs approval or replacement.
- Member-specific game card, outfit, skill, and unlock datasets remain unavailable from authoritative complete sources.
- Official profile facts and the game catalog are time-sensitive and should be refreshed periodically.
- Production performance and indexing checks still require a final domain and deployment authorization.
