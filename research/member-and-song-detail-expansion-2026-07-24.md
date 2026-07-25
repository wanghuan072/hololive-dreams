# Member And Song Detail Expansion Research

## Scope

- Date: 2026-07-24
- Request: deepen all 54 playable member pages, expose Updates and Ridin’ on Dreams in primary navigation, remove Download and Help from navigation, and create a detail page for every song.
- External research was used for factual discovery and verification. All adopted member facts come from official hololive production profiles; song facts come from the official hololive Dreams catalog.

## Sources Used

1. Official talent directory: https://hololive.hololivepro.com/en/talents/
2. Official profile example with Dream, Likes, Special Skills, Q&A, and catchphrase fields: https://hololive.hololivepro.com/en/talents/omaru-polka/
3. Official Indonesia profile example with Dreams, Message, specialty streams, and Q&A: https://hololive.hololivepro.com/en/talents/anya-melfissa/
4. Official DEV_IS profile example with illustrator, fan name, hashtag, and fan-mark fields: https://hololive.hololivepro.com/en/talents/otonose-kanade/
5. Official hololive Dreams music catalog: https://www.hololive-dreams.com/en/music

Search results and current community discussions were reviewed for possible game-specific card and skill data. They were not adopted because they did not provide a complete, stable, official member-level dataset.

## Member Data Result

- Official profiles fetched successfully: 54/54
- Birthday: 54/54
- Debut: 53/54
- Height: 54/54
- Profiles with additional official fields: 54/54
- Additional official fields retained: 173
- Profiles with parseable official Q&A: 13/54
- Selected official Q&A retained: 42

Additional labels vary by source profile and include fields such as Illustrator, Dream, Dreams, Message, Likes, Hobbies, Special Skills, specialty streams, creator/modeler notes, fan marks, and catchphrases. The renderer preserves those source labels instead of forcing every member into an artificial uniform schema.

The profile sync remains reproducible with:

```text
npm run sync:profiles
```

## Song Detail Decision

The existing catalog provides enough source-backed fields to support useful detail pages without reproducing copyrighted lyrics:

- unique title and catalog number;
- official artwork;
- performer;
- Original or Cover classification;
- lyrics, music, and arrangement credits when published;
- exact performer-label catalog totals;
- direct roster links when individual performer names match;
- related entries using exact performer first and type second;
- official catalog source and verification date.

The detail template explicitly omits chart difficulty, rewards, unlock conditions, lyric text, and inferred unit membership when the catalog only publishes a project or group label.

## Navigation Decision

Primary navigation:

1. Home
2. Wiki
3. Holomems
4. Songs
5. Guides
6. Updates
7. Ridin’ on Dreams

Download and Help were removed from both header and footer navigation. Their existing routes were retained to avoid breaking prior internal/external links; they are no longer promoted as primary destinations.
