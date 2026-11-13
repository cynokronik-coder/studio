# Initial visual prototype — evidence and limitations

Date: 2026-11-13

## Evidence used

The official Framer Gallery entry exposes a small set of preview images and describes FUTURE HUMAN as an immersive journey made of interconnected spaces:
- https://www.framer.com/community/gallery/futurehuman/

Direct preview frames inspected:
- Room 1: https://image.mux.com/8KSTLeLnO02IssjCHWC016XtRix2502snXLVRj01YS00mqJw/thumbnail.webp?time=4.875
- Room 3: https://image.mux.com/nLNX4gM6LQCO025X1vpwH3EPUPppjawZ3ZYXirxFTqow/thumbnail.webp?time=7.083

The public preview visually confirms:
- Room 1 has a moss/botanical field, centered "THE FUTURE IS HUMAN." heading, German subtitle, top-left room label, top-right interaction label, a centered FUTURE / HUMAN five-marker navigation and two small lower-right utility controls.
- Room 3 has a dark earthy/rocky field, a "The Collective Field" heading, the same subtitle, glowing floating fish-like forms, and three visible hotspot labels: "HIGHER WE", "Love intelligence", and "FUTURE HUMAN".

Project description / production credits:
- https://contra.com/p/QBLNPeQc-future-human-website-development
- The work is described as a Framer-built immersive experience with custom high-quality 3D animation, tactile textures and responsive layout.
- This confirms the stated production approach, but not the exact live runtime stack.

## What this prototype implements

- Vite + React + Three.js project foundation.
- Fullscreen canvas with original procedural GLSL materials: an olive/botanical texture for Room 1 and a dark earthy field with glowing moving forms for Room 3.
- Framed central experience area, quiet top labels, editorial type treatment and a five-position journey indicator.
- Room 1 and Room 3 are selectable; Room 2, 4 and 5 are intentionally marked as unmapped rather than invented.
- Room 3 hotspot labels are clickable and explain that their full behavior is not yet verified.
- Information/contact controls clearly state that their destinations remain unknown.
- Reduced-motion handling, responsive layout and a WebGL-unavailable CSS fallback.

## Not yet verified

- The live domain did not expose readable page content to the research browser during initial inspection.
- Exact room count, all room names, content and scenes.
- The actual response of each hotspot and utility control.
- Exact transitions, scroll behavior, cursor effects, camera movement, 3D model details, shader implementation and timing.
- Exact mobile layout and interactions.
- No claim is made that this prototype is a 1:1 reproduction.

## Next QA step

Open the original site and the local Vite preview side by side in Chrome. Record all reachable rooms and interaction states at the same viewport sizes, then update the inventory before attempting a fidelity pass.
