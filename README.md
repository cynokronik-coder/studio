# Future Human — isolated reconstruction lab

An isolated experimental reconstruction of the publicly observable FUTURE HUMAN experience at https://www.future-human.de.

This repository is intentionally separate from Sonora. The goal is to explore and evaluate the interface here first. Nothing in this repository should be merged into Sonora automatically.

## Current status

- A provisional Vite + React + Three.js prototype exists on `feat/future-human-experience`.
- Public page text confirms five named room sections.
- Preview reference frames are available for Rooms 1, 2 and 3, plus an encounter/transitions frame; Room 4's visual state is still unverified.
- Phase 1 public-page reconnaissance is documented in `docs/future-human/`.
- Live browser interaction, DOM, network and animation inspection is still pending. Do not treat the current prototype as a faithful reconstruction or assume the target uses Three.js.

## Mandatory workflow

1. **Investigate first:** follow `docs/future-human/reconstruction-spec.md` and `AGENTS.md`. Use REA, Chrome DevTools MCP and Playwright to inspect the public target.
2. **Document evidence:** complete the five investigation documents in `docs/future-human/`.
3. **Implement after evidence:** choose the actual rendering approach only after confirming the reference runtime.
4. **Compare and refine:** compare matching states at 1440×900, 1280×800 and 390×844.

## Run the provisional prototype

Requires Node.js 22.23.4 or later in the Node 22 line (or another REA-supported Node release).

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Browser investigation tools

The workspace `.mcp.json` configures:
- Official REA MCP — passive, evidence-oriented inspection of an already-open browser page.
- Chrome DevTools MCP — live Chrome inspection, network, console and performance traces.
- Playwright MCP — navigation, clicks, hover, keyboard/touch and repeatable browser-state tests.

See `docs/future-human/toolchain-setup.md` for environment requirements and the safe browser workflow.

REA does not navigate or click the page; use Playwright for those actions. Chrome DevTools complements both with runtime diagnostics.

## Reference and rights

Official project description: https://www.framer.com/community/gallery/future-human/

Creator project page: https://contra.com/p/QBLNPeQc-future-human-website-development

The preview images linked in the audit are remote reference material, not source assets. Do not reuse the original website's protected fonts, images, videos, textures, models or animations without permission. Use original or properly licensed replacements.

## Sonora boundary

This is a sandbox for testing interface directions. Choose a finished design here, then manually port or merge the selected work into Sonora after reviewing the changes. Do not modify Sonora from this repository.
