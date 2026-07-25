# Flow 03 Handoff: Site Structure and Page Planning

- Status: `completed_with_warnings`
- Completed at: `2026-07-23T18:58:13+08:00`
- Project: `hololive dreams`
- Planned language and market: English, US / Global English
- Inputs: `project.yaml`, `research/sources.json`, `research/keyword-research.md`, `handoff/flow-02-research-brief.md`
- Outputs: `planning/site-structure.md`, `planning/content-map.json`

## Planned site model

Build a launch-aware game guide and reference site with compact wiki/database modules. The site should resolve the mixed branded query quickly, then route visitors to complete roster and song data, practical guides, official download links, and launch support.

The information architecture contains 23 planned indexable routes:

- 17 core pages
- 1 supporting updates page
- 5 trust and legal pages

The primary navigation is:

1. Home
2. Wiki
3. Holomems
4. Songs
5. Guides
6. Download
7. Help

FAQ content is contextual and is not a primary navigation item. A map feature is excluded because the research found no matching search intent or data requirement.

## Core page groups

- `/` provides the mixed-intent entry point, current launch facts, task routing, media proof, and quick answers.
- `/wiki`, `/holomems`, `/songs`, and `/wiki/systems` provide the reference layer.
- `/guides` routes to eight complete task-specific guides: getting started, rhythm timing, Dream Park progression, unlocking holomems, team building and the Holomem Board, minigames, custom chart creation, and performance settings.
- `/download` provides safe official platform links.
- `/system-requirements` and `/help` cover compatibility, settings, loading, and common launch support needs.
- `/updates` provides dated changes without presenting rumors as facts.
- About, contact, editorial policy, privacy, and terms pages establish ownership, sourcing, corrections, and non-affiliation.

## Data completion requirements

- Holomems: all 54 officially named playable holomems, with 100% image coverage.
- Songs: every record in the current official catalog at Flow 06 capture time; the official launch claim is 150+ songs.
- Guides: 8 of 8 planned guides, each with 2-5 useful media placements.
- Systems: cover five major families—rhythm play, Dream Park, team/board progression, minigames, and custom charts.

Individual routes for all holomems or all songs are deferred. Launch research does not yet supply enough uniform, verified fields to make 54 character pages or 150+ song pages substantively useful.

## Implementation and design notes

- Use independent page implementations for different page types.
- Shared components should remain limited to true site-wide elements such as the header and footer.
- A single guide-detail template is acceptable for the guide content type; it must not become a universal renderer for unrelated pages.
- Holomems and Songs need separate searchable/filterable index experiences.
- The home page should use a dense, task-first first screen and varied modules rather than a uniform card grid.
- Visible factual claims must carry source links or a clear last-checked context where appropriate.
- Keep fact, advice, editorial judgment, and community observation visually distinguishable.
- Use original page composition and permitted assets; do not redistribute raw official promotional video or audio.

## Validation

`planning/content-map.json` parses successfully. It contains 23 unique page IDs, 17 core pages, 1 supporting page, 5 trust pages, 7 primary navigation entries, and 5 planned data files. Every core-page H1 includes the primary entity name.

## Warnings and open questions

- Launch-day facts can change quickly, so roster, song, platform, and update data require dated capture and source tracking.
- Production domain, public contact email, business goal, and monetization remain unspecified and must not be invented.
- The frontend framework is still `unknown`. This does not block Flow 04, but it must be selected before Flow 05 initializes the empty project.
- `Colliect Cooking` appears in official English material but may be a source typo; preserve or correct it only after verification during content production.

## Next flow

Flow 04 may use:

- `planning/site-structure.md`
- `planning/content-map.json`
- `research/keyword-research.md`
- `research/sources.json`
- `handoff/flow-03-site-structure-brief.md`

Flow 04 should create the design system, page-level visual direction, responsive behavior, interaction rules, and design handoff without writing production site code.
