# Flow 07 Video Research

Date: 2026-07-24  
Keyword: `hololive dreams`  
Market and language: US / Global English

## Scope and method

This pass used eight YouTube search directions tied to existing page gaps. `yt-dlp` collected search-result and video metadata only; it did not download video or audio. Twenty candidates were reviewed across three evidence levels:

- Level A: 13 videos from the official hololive Dreams channel.
- Level B: 4 launch-day streams from official hololive talent channels.
- Level C: 3 community tutorials or clips.

All 20 candidates received a metadata, title, description, channel, duration, upload-date, and caption-availability review. Short official videos were evaluated through official titles and descriptions, thumbnails, available captions, and comparison with the official site. Two caption files were retrieved for analysis; seven other subtitle requests were rate-limited by YouTube with HTTP 429. Long talent streams were used only for question discovery and English-language terminology, not as fully reviewed factual transcripts.

## Search directions

| Query | Target pages | Research purpose |
| --- | --- | --- |
| hololive Dreams official trailer | `/`, `/wiki/systems` | Official overview and system presentation |
| hololive Dreams gameplay guide | `/guides`, `/guides/getting-started` | First-session and gameplay flow |
| hololive Dreams rhythm game note speed settings | `/guides/rhythm-timing`, `/guides/performance-settings` | Rhythm lane and settings presentation |
| hololive Dreams Create Chart custom chart | `/guides/create-chart` | Create Chart visual confirmation |
| hololive Dreams Dream Park Holomem Board | Dream Park and board guides | Park, team, and board flow |
| hololive Dreams minigames Hoppin Rope POKAJAN | `/guides/minigames` | Named minigame presentation |
| hololive Dreams account linking Steam mobile | `/help` | Account-transfer question discovery |
| hololive Dreams loading performance PC mobile | `/help`, `/system-requirements` | Launch loading and performance questions |

The search collection produced 44 unique candidates. Search results for loading and performance were too noisy to justify new claims, so existing official support and system-requirements sources remain authoritative for those topics.

## Adopted evidence

| Source ID | Official video | Page use | Adopted value |
| --- | --- | --- | --- |
| `src-020` | Full Game Trailer | Team-building and Create Chart guides | Broad official visual relationship between park, rhythm, team play, and Create Chart |
| `src-021` | Gameplay Stage 1 | Getting Started and Dream Park guides | First-session park-to-activity visual flow |
| `video-flow07-001` | Rhythm Game PV | Rhythm Timing guide | Lane motion and animated-background visual reference |
| `video-flow07-002` | Gameplay Stage 2 | Minigames guide | Cooking match sets, unmatched-item pressure, requested dishes, and shared Hoppin Rope presentation |
| `video-flow07-003` | Hoppin Rope stage | Minigames guide | Group jump-timing demonstration |
| `video-flow07-004` | Colliect Cooking stage | Minigames guide | Official activity visual |
| `video-flow07-005` | MEGA CIRCUIT stage | Minigames guide | Competitive movement visual |

Video evidence is supplemental. It does not override version-sensitive official text, and it is not used to infer undocumented scoring, controls, rewards, or account-transfer steps.

## Findings applied to the site

- Six local YouTube-provided thumbnails now support relevant guide sections.
- The guide detail template gained an `Official visual demonstrations` block with original English context, a local thumbnail, and an external official YouTube link.
- No iframe or autoplay embed was added because video embedding was not explicitly authorized.
- The Minigames guide gained restrained, visually supported cooking guidance: match sets of the same ingredient, avoid accumulating too many unmatched ingredient types, and complete the requested dishes before time expires.
- Rhythm guidance uses the official PV as a visual reference while keeping calibration advice explicitly editorial.
- No account-linking procedure was added. The only relevant candidate was a community tutorial without a matching official English text source.

## Rejected or deferred evidence

- The older official trailer was rejected because the channel identifies the full trailer as its corrected reupload.
- Broad EXPO highlight videos were deferred where they added no unique stable fact.
- The Mega Sphere area announcement was deferred because it is outside the current verified site scope.
- The 2026-07-23 expert song preview was deferred until the song catalog receives a new timestamped refresh.
- Four official talent streams were retained only as question-discovery material because each is more than two hours long and relies on auto captions.
- A derived community clip was rejected for weak provenance and a title/description mismatch.
- A silent custom-chart clear was deferred because it adds no independently verifiable mechanic.
- A community account-linking tutorial was deferred; the site does not repeat its steps without official English confirmation.

## Research artifacts

- `research/video/youtube-search-results.json`: 8 queries and 44 unique results.
- `research/video/youtube-video-metadata.json`: raw metadata for the 20 reviewed candidates.
- `research/video/youtube-video-matrix.json`: per-video decision and coverage matrix.
- `research/video/video-image-assets.json`: machine-readable local thumbnail provenance.
- `research/video/video-image-assets.md`: human-readable asset and licensing-risk ledger.

