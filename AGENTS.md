# Project Agent Rules

<!-- FLOW-01-RULES:START -->
## Project Boundary

This project is located at:

`D:\WH\202607\hololive dreams\hololive dreams`

Agents may inspect and modify files only inside this project directory unless the user explicitly grants a broader path for a specific workflow document or task.

Do not read sibling keyword projects, previous SEO projects, template projects, or unrelated directories for reference. The reusable workflow documents at `D:\WH\Agent\SEO-Agent` may be read one current flow at a time because the user explicitly provided that path.

## Source Of Truth

Global project facts are stored in `project.yaml`.

Flow handoff files are stored in `handoff/`.

Before starting a workflow step, read `project.yaml`, this `AGENTS.md`, and the immediately preceding flow's required report and handoff. Read only the current workflow document from `D:\WH\Agent\SEO-Agent`.

## Workflow Discipline

- Execute Flow 01 through Flow 09 in order.
- Complete each flow's required report and handoff before reading the next flow document.
- Flow 02A is skipped because the user supplied no unpacked data.
- All project research, planning, reports, code, and downloaded assets must remain inside this project directory.
- Do not reuse research, content, code, configuration, brands, domains, sitemaps, or media from another keyword project.

## Network And External Sources

- Network access allowed: `yes`
- YouTube or yt-dlp allowed: `yes`
- New pages allowed: `yes`
- Page structure adjustments allowed: `yes`
- Local refactor allowed: `yes`
- Dependency installation allowed: `yes`
- Build/check commands allowed: `yes`
- Deployment allowed by user: `no`
- Git commit allowed by user: `no`
- Unpacked data read allowed: `no`

Network, search, image, and YouTube research must be recorded in project-local research, reports, or handoff files. YouTube metadata may support research; it is not permission to copy video media unless the current flow explicitly allows a local screenshot or thumbnail workflow.

## Existing And Empty Project Rules

Flow 01 inferred that the project directory was empty and correctly created only
management files and workflow directories.

The user selected Next.js before Flow 05. The project is now a completed Next.js
App Router implementation in manual review; later work must not treat the framework
as unknown or repeat framework initialization.

## Release Boundary

Do not deploy, publish, push, or commit Git. Flow 09 must stop after final QA and write a manual-review handoff.

## Flow 01 Scope

Allowed in Flow 01:

- Validate project parameters.
- Inspect the specified project directory.
- Detect existing framework and basic structure.
- Create workflow directories.
- Create or update `project.yaml`.
- Create or update this `AGENTS.md`.
- Write `handoff/flow-01-project-brief.md`.

Forbidden in Flow 01:

- Keyword or competitor research.
- Navigation or page planning.
- SEO content writing.
- Website code creation or source refactoring.
- Dependency installation, dev servers, builds, tests, deployment, or Git commits.

## Handoff

After Flow 01, the next workflow must read:

1. `project.yaml`
2. `AGENTS.md`
3. `handoff/flow-01-project-brief.md`

No implementation assumptions may be made until the applicable later workflow document is read.
<!-- FLOW-01-RULES:END -->
