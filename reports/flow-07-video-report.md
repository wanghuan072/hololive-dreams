# Flow 07 Video Content Supplement Report

## Status

- Status: Completed
- Date: 2026-07-24
- Agent: Flow 07 Video Content Supplement Agent

## Stage Goal

This stage researched YouTube coverage for dynamic game topics, separated official evidence from discovery-only material, added traceable official video previews to matching guides, and validated the production build. It did not download video or audio, add unverified community instructions, embed players, deploy, or commit Git.

## Inputs Read

- `project.yaml`
- `AGENTS.md`
- `research/keyword-research.md`
- `research/sources.json`
- `reports/flow-06-content-report.md`
- `handoff/flow-06-content-brief.md`
- Current website code and production-rendered routes

## Research Coverage

| Metric | Result |
| --- | ---: |
| Search directions | 8 |
| Unique YouTube search results collected | 44 |
| Candidates reviewed in detail | 20 |
| Official game-channel videos | 13 |
| Official talent-channel streams | 4 |
| Community videos | 3 |
| Adopted | 7 |
| Deferred | 11 |
| Rejected | 2 |
| Local official thumbnails added | 6 |

`yt-dlp` was used for metadata and captions only. No video or audio was downloaded. Metadata, title, description, channel, upload date, duration, and caption availability were reviewed for all 20 selected videos.

## Evidence Levels And Decisions

- Level A official game-channel videos supplied all seven adopted sources.
- Level B talent streams were useful for launch-day question and terminology discovery, but their two-to-four-hour length and auto captions made them unsuitable as direct factual sources.
- Level C community material was not used for stable instructions. The custom-chart clip with mismatched provenance was rejected; the silent chart clear and account-linking tutorial were deferred.
- The older official trailer was rejected because the publisher described the adopted full trailer as its corrected reupload.
- New-area and post-snapshot song videos were deferred until related page/catalog scopes are refreshed.

## Caption Review

- Manual English captions were retrieved for the corrected full trailer. They consisted mainly of theme-song lyrics and supported no new mechanic claim.
- Auto-generated English captions were retrieved for official Gameplay Stage 2. Translation noise was substantial, so only visually clear and cross-checkable concepts were retained.
- Seven additional subtitle retrieval attempts were blocked by YouTube HTTP 429 rate limiting.
- Temporary caption files were deleted after original summaries were written. No complete transcript remains in the project.

## Sources Adopted

| Source ID | Video | Page use |
| --- | --- | --- |
| `src-020` | Corrected Full Game Trailer | Team-building and Create Chart guides |
| `src-021` | Official Gameplay Stage 1 | Getting Started and Dream Park guides |
| `video-flow07-001` | Rhythm Game PV | Rhythm Timing guide |
| `video-flow07-002` | Official Gameplay Stage 2 | Minigames mechanic cross-check |
| `video-flow07-003` | Hoppin Rope EXPO Stage | Minigames guide |
| `video-flow07-004` | Colliect Cooking EXPO Stage | Minigames guide |
| `video-flow07-005` | MEGA CIRCUIT EXPO Stage | Minigames guide |

`research/sources.json` records the adopted video source metadata, limitations, page use, and local assets.

## Site Changes

- Added typed guide video references in `src/data/guides.ts`.
- Added an `Official visual demonstrations` section to the shared guide detail template.
- Added original English context for each preview instead of reusing descriptions or transcripts.
- Added three video cards to Minigames and one matching card each to Getting Started, Rhythm Timing, Dream Park, Team Building, and Create Chart.
- Added conservative cooking guidance supported by the official stage presentation.
- Used local 16:9 thumbnails through Next.js Image.
- Kept playback as an external official YouTube link. No iframe, autoplay, cookie-setting player, or embed script was introduced.
- Added responsive video-card styling without changing the established design system.

## Asset Provenance

All six images are YouTube-provided thumbnails from the official hololive Dreams channel:

- `public/images/video/hololive-dreams-full-game-trailer.jpg`
- `public/images/video/hololive-dreams-rhythm-game-pv.jpg`
- `public/images/video/hololive-dreams-hoppin-rope-video.jpg`
- `public/images/video/hololive-dreams-cooking-video.jpg`
- `public/images/video/hololive-dreams-mega-circuit-video.jpg`
- `public/images/video/hololive-dreams-gameplay-stage-video.jpg`

The human-readable ledger is `research/video/video-image-assets.md`; exact URLs, MIME types, byte sizes, paths, alt text, and page uses are recorded in `research/video/video-image-assets.json`.

## Research Outputs

- `research/video-research.md`
- `research/video/youtube-search-results.json`
- `research/video/youtube-video-metadata.json`
- `research/video/youtube-video-matrix.json`
- `research/video/youtube-video-analysis.md`
- `research/video/video-image-assets.json`
- `research/video/video-image-assets.md`

## Validation

| Check | Result |
| --- | --- |
| Research/source JSON parsing | Passed |
| Matrix decision count | 20 reviewed: 7 adopted, 11 deferred, 2 rejected |
| Temporary transcript cleanup | Passed |
| `npm run lint` | Passed, zero warnings |
| `npm run typecheck` | Passed |
| `npm run build` | Passed; 27 static/SSG routes generated |
| Production route validation | 23/23 pages returned 200, had title, description, and exactly one H1 |
| Internal links | No unknown internal links |
| Content-depth audit | All 23 pages passed current thresholds |
| Browser semantic check | Minigames page exposed all three video cards, images, headings, copy, and official links |
| Browser visual check | Desktop video-card grid rendered cleanly with consistent 16:9 media and responsive wrapping |

## Deferred Gaps

- No official stable English account-linking procedure was found; the site does not repeat community steps.
- Search results for loading and performance were noisy; official text sources remain the only basis for troubleshooting.
- The Mega Sphere area announcement is not yet integrated into the current information architecture.
- The July 23 expert song preview should be reconsidered when the music catalog receives its next dated sync.
- Embedding remains disabled because it was not explicitly authorized and external links meet the current content need.
- Production domain and the independent site's editorial contact channel remain unspecified.

## Boundaries Honored

- No video or audio download.
- No full transcript retention.
- No community-derived factual instructions.
- No deployment.
- No Git commit.
- No files read from or written to other keyword projects.

