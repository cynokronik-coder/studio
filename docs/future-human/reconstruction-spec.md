# PROJECT: FUTURE HUMAN — COMPLETE WEBSITE RECONSTRUCTION

## Reference

Website: https://www.future-human.de

Reverse-engineering resource collection:
https://github.com/reacher-z/Awesome-REA

Official REA project:
https://github.com/morluto/rea

## OBJECTIVE

Reconstruct the FUTURE HUMAN website as faithfully as technically possible, including its complete visual identity, immersive environments, 3D animations, interactions, navigation, transitions and responsive behavior.

This is not a request to create a similar generic landing page.

The goal is to understand the reference website through systematic browser inspection and then reproduce its observable behavior and visual characteristics in our application.

## PHASE 1 — COMPLETE WEBSITE INVESTIGATION

Do not modify application code during this phase.

Use the available REA, Chrome DevTools MCP and Playwright tools.

Investigate the complete public website.

### A. Website architecture

- Identify all pages, rooms, routes and navigation states.
- Identify the structure of the DOM and accessibility tree.
- Identify fullscreen containers, overlays, fixed navigation and interactive elements.
- Investigate page loading and scene initialization.
- Determine whether the environments use WebGL, Three.js, canvas, video textures, Framer components or another technology.
- Record all evidence and distinguish confirmed facts from assumptions.

### B. Visual investigation

For each room and state, document:

- Background environment and textures.
- Main visual composition.
- Lighting, shadows, depth and atmosphere.
- Typography, font weights and sizes.
- Text positioning and alignment.
- Colors, opacity and gradients.
- Borders, panels and overlays.
- Interface margins and proportions.
- Navigation placement.
- Interactive hotspots.
- Cursor and hover states.

Capture reference screenshots at:

- Desktop: 1440 × 900.
- Laptop: 1280 × 800.
- Mobile: 390 × 844.

### C. Animation investigation

Record all observable animations:

- Initial loading sequences.
- Environment animations.
- 3D object movement.
- Camera movement and parallax.
- Scroll-triggered animations.
- Text entrance and exit effects.
- Hover animations.
- Hotspot interactions.
- Room transitions.
- Navigation indicator animations.
- Transition durations and easing.
- Loading and transition states.

Do not invent animation behavior that has not been observed.

### D. Interaction investigation

Test every visible interaction using Playwright.

Investigate:

- All navigation controls.
- All progress indicators.
- All interactive objects and hotspots.
- Click-to-explore behavior.
- Hover responses.
- Keyboard navigation.
- Browser back and forward behavior.
- Mobile navigation and touch interactions.

For each interaction, record:

1. Initial state.
2. User action.
3. Resulting visual state.
4. Animation or transition.
5. Final state.

### E. Asset and implementation investigation

Identify:

- Fonts and their source.
- Image assets.
- Video assets.
- 3D assets and textures.
- JavaScript bundles.
- External libraries.
- WebGL dependencies.
- Relevant network requests.
- Performance issues and loading behavior.

Do not assume that a production JavaScript bundle contains recoverable original source code.

Do not reuse protected original media, models or fonts without permission. Identify them and document suitable original or licensed replacements.

## PHASE 2 — DOCUMENT FINDINGS

Create:

/docs/future-human/website-audit.md
/docs/future-human/visual-system.md
/docs/future-human/animation-inventory.md
/docs/future-human/interaction-map.md
/docs/future-human/asset-inventory.md

Include screenshots and an inventory of all verified website states.

Do not proceed on the basis of guesses. Clearly identify any inaccessible or unverified states.

## PHASE 3 — IMPLEMENTATION

After completing the investigation, reconstruct the website.

Preserve the existing application's framework and architecture. Do not replace unrelated application features or dependencies.

### Main experience

Implement a fullscreen immersive environment rather than a conventional landing page.

Separate the implementation into reusable components:

- ExperienceShell
- SceneRenderer
- RoomController
- RoomOverlay
- JourneyNavigation
- InteractiveHotspot
- SceneTransition
- LoadingExperience

Use data-driven room definitions so each environment has its own content, visuals, animation settings and interactions.

### Visual composition

Reproduce the verified design elements, including:

- Fullscreen immersive backgrounds.
- Atmospheric environmental textures.
- Centered editorial typography.
- Minimal room indicators.
- Fixed bottom journey navigation.
- Circular progress indicators.
- Interactive hotspots.
- Subtle secondary controls.
- Smooth scene transitions.

Room 1 should be based on the observed botanical/moss environment and its central title treatment.

Room 3 should be based on the observed darker atmospheric environment, glowing moving elements and interactive hotspots.

Investigate and reconstruct all remaining rooms rather than assuming there are only two.

### 3D and animation

Use the appropriate implementation for the observed original:

- Three.js / React Three Fiber for genuine real-time 3D.
- GSAP for coordinated animation timelines.
- Motion for interface transitions.
- Shaders and particles where justified.
- Video or image textures only where they accurately reproduce the observed presentation.

Do not replace complex moving environments with static gradients.

Build smooth camera movement, depth, environmental animation and scene transitions wherever verified.

### Interaction requirements

All visible controls must work.

Navigation must update the active room and progress state.

Hotspots must provide the correct observed responses.

Animations must remain coordinated with navigation state.

Prevent conflicting animations and broken scene states.

### Responsive requirements

Adapt all scenes and overlays for desktop, tablet and mobile.

Optimize 3D performance and loading.

Implement keyboard accessibility and respect prefers-reduced-motion.

Provide appropriate fallbacks when WebGL is unavailable.

## PHASE 4 — VISUAL QUALITY ASSURANCE

Use the reference screenshots as the visual benchmark.

For every implemented state:

1. Open the original reference.
2. Reproduce the same state in our application.
3. Capture screenshots at identical viewport dimensions.
4. Compare layout, spacing, proportions, typography, textures and lighting.
5. Identify visual differences.
6. Correct those differences.
7. Repeat until the remaining differences are documented.

Also test all interactions and animation transitions using browser automation.

Do not declare the reconstruction complete simply because the pages render.

## FINAL ACCEPTANCE CRITERIA

- All verified rooms are represented.
- The navigation works.
- Interactive elements work.
- The main visual environments are faithfully reconstructed.
- Animation sequences are implemented.
- Desktop and mobile layouts are functional.
- No placeholder buttons or dead interactions remain.
- No console errors or major performance regressions.
- All work is documented.

At the end, provide a report containing completed features, remaining discrepancies, known limitations and test results.

Work incrementally, preserve existing code, and never sacrifice existing application functionality for the reconstruction.

## ADDITIONAL PROJECT REQUIREMENT

Use all **relevant** resources in the Awesome-REA repository, not only its README. Review its Website category, Official REA guidance, browser integrations, reconstruction case studies, tools and documented limitations. Select tools based on verified need; do not install unrelated Game, Firmware, Protocol or Native Binary utilities unless the live target provides evidence that they are needed. Record which resources were used, considered and excluded, and why.
