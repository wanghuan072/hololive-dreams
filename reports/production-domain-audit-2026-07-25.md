# Production Domain Audit — 2026-07-25

## Outcome

The project now uses:

- production origin: `https://hololive-dreams.org`;
- editorial email: `wyong@hololive-dreams.org`.

The origin is centralized and is used by page canonicals, Open Graph URLs, Twitter metadata, robots, sitemap generation, and JSON-LD. The email is centralized and appears on the Contact, Privacy, Terms, and Copyright pages.

## Fixes completed

1. Replaced the placeholder origin and contact destination in the production site configuration.
2. Renamed configuration fields from placeholder semantics to production semantics.
3. Updated the technical SEO audit to require the production origin.
4. Updated the current project state, launch checklist, and final handoff.
5. Removed the stale `sitemap-0.xml`, which contained 233 outdated routes and the old origin.
6. Added a prebuild cleanup step so obsolete sitemap files cannot survive a later build.
7. Removed placeholder wording from the public SVG logo title and description.

## External environment checks

### High — HTTPS origin is not serving the site

- DNS A records resolve through Cloudflare.
- An HTTPS request returned Cloudflare status `525`.
- Impact: visitors and search crawlers cannot access the production origin.
- Required action: fix the TLS connection between Cloudflare and the origin. Confirm the origin certificate, hostname coverage, certificate chain, Cloudflare SSL mode, and the origin server's HTTPS listener.

### High — Email delivery is not configured

- No MX record was detected for `hololive-dreams.org`.
- Impact: `wyong@hololive-dreams.org` is unlikely to receive mail.
- Required action: configure the mail provider's MX records, then send test messages from at least two external providers and confirm replies.

## Remaining launch observations

### Medium — Security headers depend on the production host

The Next.js configuration does not currently declare a Content Security Policy, HSTS, Permissions Policy, or `X-Content-Type-Options`. Cloudflare or the hosting platform may provide some of them, but the live origin cannot be inspected while HTTPS returns 525.

Recommended action: after TLS is fixed, inspect the public response headers and add only the missing policies. Any CSP must allow the privacy-enhanced YouTube embed host and the assets required by the current pages.

### Resolved — Brand media supplied

The supplied logo, favicon, and social image replaced the temporary initials mark and framework icon on 2026-07-25. The social image was prepared at 1200 × 630, and the site now emits only `/images/ico.ico` as its icon.

### Low — Production-only measurements remain unavailable

Core Web Vitals, public social-card fetching, rich-result testing, robots access, sitemap access, and search-engine indexing cannot be checked against the final host until HTTPS serves the site.

## Interface audit

### Anti-pattern verdict

The site has a clear playful concert-poster direction and does not read as a generic card-grid template. The homepage does use a translucent hero panel and multicolor display text; these are visually coherent here but should not spread to every page.

### Positive findings

- Mobile and tablet layouts preserve all primary navigation through the hamburger menu.
- The menu touch target exceeds 44 px.
- No horizontal overflow was found at 768 px or 1024 px.
- The homepage has one descriptive H1.
- Focus, reduced-motion, responsive image sizing, semantic landmarks, and skip navigation are present.
- The Contact page exposes the supplied email as plain text without adding an external anchor.
- No broken image was found in the browser sample.
- All 166 project-local image paths referenced in source data exist.
- The Open Graph image is a valid 1200 × 630 PNG.

## Final checks

- ESLint: passed.
- TypeScript/build checks: passed.
- Production build: passed, 229 generated pages.
- Public sitemap: one file, 224 URLs, all using `https://hololive-dreams.org`.
- Public-surface audit: 224 routes passed.
- Technical SEO audit: passed.
- Route and internal-link audit: passed.
- Content-depth and near-duplicate audit: passed.
- Dependency audit: zero production vulnerabilities.
- Browser console: no page warnings or errors in the representative checks.
- Deployment and Git operations: not performed.
