# Future Human — interface reconstruction lab

An isolated experimental reconstruction of the publicly observable FUTURE HUMAN experience at https://www.future-human.de.

## Project boundary

This repository is intentionally separate from Sonora. No Sonora files, services, or branches are modified by this project. The user will select a finished interface here before manually merging chosen work into Sonora.

## Current status

- Initial visual prototype in progress.
- Two reference states have been captured from the public Framer Gallery preview: Room 1 and Room 3.
- The live domain could not be read by the research browser during the initial audit. The Framer Gallery and project descriptions are reference evidence, not a substitute for inspecting the live experience.
- Remaining rooms, exact interactions, and animation timings must be verified in a live browser before claiming full fidelity.
- Original scene graphics are generated procedurally in this project; no original FUTURE HUMAN media or 3D assets are copied.

## Reference evidence

The public Framer Gallery describes FUTURE HUMAN as a multidimensional digital experience built as interconnected spaces for stages or dimensions of a journey:
https://www.framer.com/community/gallery/futurehuman/

Its preview includes:
- Room 1: moss / botanical visual field, central title "THE FUTURE IS HUMAN.", top labels "ROOM 1" and "INTERACTION", bottom FUTURE / HUMAN journey navigation.
- Room 3: dark, earthy / stone-like visual field, floating glowing forms and three labeled hotspots: "HIGHER WE", "FUTURE HUMAN", and "Love intelligence". The center title reads "The Collective Field".

A Framer project listing describes custom 3D animation, tactile textures and responsive layouts:
https://contra.com/p/QBLNPeQc-future-human-website-development

These are reference descriptions and preview observations. They do not prove the exact frontend library or implementation details of the live site.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Implementation principles

- Use original code and procedural visual materials, not copied protected assets.
- Keep room content data-driven.
- Treat uninspected rooms and interactions as unknown, not as facts.
- Make navigation and hotspots functional.
- Respect reduced-motion preferences and provide a WebGL fallback.
- Verify at desktop and mobile viewports before each fidelity claim.

## Next milestones

1. Inspect all live room states and capture comparable screenshots.
2. Expand the scene model from verified observations.
3. Recreate transitions and interactive behavior.
4. Run visual comparison and responsive QA.
5. Only then decide which components, if any, should be manually ported into Sonora.
