# Manual Review Required Fixes — 2026-07-25

## Scope

This pass addresses the launch-blocking items identified during manual review, except for the placeholder domain, plus the first two medium-priority items:

- song video selection and metadata quality;
- song-to-character relationship accuracy;
- accessible color contrast;
- visible content update dates;
- richer page-specific structured data.

The placeholder origin and contact values remain unchanged. No deployment or Git action was performed.

## Network research and video selection

The song video catalog was refreshed with current YouTube search results on 2026-07-25. Search terms combined each song title, performer, and channel/topic intent. The selection process favored:

1. performer-owned channel uploads;
2. automatically generated artist Topic uploads;
3. manually reviewed music-video or audio uploads;
4. game-channel clips when the game itself is the relevant subject;
5. clearly labeled community gameplay only when no suitable music upload was available.

Reaction, lyric reupload, unrelated gameplay, slowed/reverb, nightcore, tutorial, and karaoke candidates were penalized. Targeted checks were also completed for ambiguous tracks including Seishun Archive, BUTASANDER, Rebellion, Mikkorone Showtime, DOUTAN KYOHI, IDOL, Cute Na Kanojo, Maware! Setsugetsuka, Virtualove, Delusion Tax, Owl, and Cherry Pop.

The refreshed catalog contains 154 unique video IDs:

- 97 performer-channel selections;
- 28 artist Topic selections;
- 25 manually curated selections;
- 2 game-channel selections;
- 2 community gameplay selections.

No duplicate IDs, replacement-character encoding damage, or missing song-video records remain.

## Song relationship rules

Song credits now use one shared relationship model across song and character pages:

- a named solo performer maps to that playable character;
- known credited groups map only to their playable members;
- project-level credits do not guess an individual vocalist lineup;
- the same rules drive both the song page performer section and the character page song list.

This prevents broad project credits from creating unsupported character associations while keeping fixed groups such as Advent connected to their playable members.

## Accessibility and freshness

- Active song filters now use a dark teal background with light text.
- Original badges and pink character filters now use dark text on pink.
- Region badges retain the color pair that meets the required contrast.
- Songs, characters, guides, updates, gameplay, wiki, and system-requirement pages display a readable update date.

## Structured data

- Song details: `WebPage`, `BreadcrumbList`, `MusicRecording`, and `VideoObject`, including the selected video duration when available.
- Character details: `ProfilePage`, `Person`, and `BreadcrumbList`.
- Guide details: `WebPage`, `Article`, `BreadcrumbList`, and `FAQPage`.
- Updates: `CollectionPage`, `ItemList`, `Article`, and `BreadcrumbList`.

All page data continues to use the configured placeholder origin until the production domain is supplied.

## Quality checks

- ESLint: passed.
- TypeScript: passed.
- Production build: passed, 229 generated pages.
- Sitemap and route checks: passed, 224 public URLs.
- Public-surface audit: passed; 154 song details each contain one video, with 154 unique video IDs.
- Technical SEO audit: passed.
- Content depth and near-duplicate audit: passed.
- Browser checks at 768 px and 1024 px: no horizontal overflow; hamburger navigation, update dates, filter states, song relationships, embedded video, and page schemas rendered as intended.
- Browser console: no warning or error entries during the representative page checks.

