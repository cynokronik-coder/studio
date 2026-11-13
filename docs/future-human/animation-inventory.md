# FUTURE HUMAN — animation inventory

**Status:** Five room scene-reference images and one Room 1 UI-preview still inspected. Creator description confirms custom 3D animation, but no live animation sequence or timing has been measured.

The official Framer Gallery describes the project as featuring custom high-quality 3D animations and tactile textures. That confirms an animation-rich design intent, but not the runtime rendering technology or exact animation behavior.

## Observed visual motion cues

| Scene | Visible cue in preview | What remains unknown |
|---|---|---|
| Room 1 | Small bright flying/light elements over the moss field | Whether they move; paths, speed, particle count, interaction, camera response and loop duration |
| Room 2 | Central spherical/pink object over a spiral field | Whether it rotates, pulses, floats, reacts to pointer or opens content |
| Room 3 | Several glowing fish-like forms suspended in a dark rock field | Whether they swim, move in depth, respond to pointer or hotspots, and whether lighting is dynamic |
| Room 4 | Aerial winding path through tree canopy in a public linked image | No motion evidence; all animation and interaction unknown |
| Room 5 | Architectural courtyard and circular encounter layout in a transitions preview | Whether the camera travels, the circular platform animates, figures move, or a transition sequence is shown |

A still preview is not evidence of an animation curve. Do not invent duration, easing, camera movement or particle behavior.

## Required timeline to capture

Use Playwright for repeatable user actions and Chrome DevTools for frame/performance/network diagnostics. Use REA for passive evidence about scripts, resources and console/network activity on the already-open target.

For each room, capture:

1. Page load / initial scene reveal.
2. First stable idle state.
3. Ambient loop over at least 10 seconds.
4. Pointer movement across the scene.
5. Hover on every hotspot and utility control.
6. Click every hotspot and room marker.
7. Transition out and transition into the room.
8. Return/back behavior.
9. Keyboard focus and reduced-motion mode.
10. Mobile touch/tap behavior.

Record for each event:
- Trigger and exact initial state.
- Start delay and duration (measure; do not estimate from memory).
- Easing/curve if observable.
- Transform/camera/light/opacity/scale changes.
- Whether interaction blocks other inputs.
- Final state and reset behavior.
- Screen recording or paired screenshots before / during / after.
- Whether motion is continuous, scroll-driven, pointer-driven, click-driven or video-based.

## Runtime-rendering decision gate

Before choosing a rendering library, inspect:
- WebGL contexts and canvas count.
- Video elements and video network requests.
- Image and texture resources.
- Model formats (glTF/GLB/OBJ/USD or other).
- Framer code components and loaded script bundles.
- Any WebAssembly resources.
- Request initiators and asset dimensions.
- Whether the visible scene is a pre-rendered sequence or responds to pointer/state.

Possible implementation routes, conditional on evidence:
- Real-time 3D: Three.js / React Three Fiber if the original uses equivalent interactive geometry and the evidence warrants it.
- Authored sequences: video or image sequences if the original is pre-rendered, while preserving controls and responsive crop.
- Framer-like DOM/motion: CSS/Motion/GSAP for overlay, typography and transitions.
- Hybrid: separate scene renderer from accessible DOM overlays.

Do not add Three.js, GSAP or another animation dependency just because it is fashionable. Preserve the current prototype only as a temporary experiment until the runtime is known.

## Performance and accessibility checks

- Capture frame rate and long tasks during idle and transitions.
- Record GPU/CPU pressure, memory growth and network payload sizes.
- Verify scene loading does not block navigation.
- Test device pixel ratio and lower-end mobile behavior.
- Respect `prefers-reduced-motion`.
- Provide a readable fallback if WebGL/video playback is unavailable.
- Ensure hotspots are keyboard operable with visible focus and accessible names.


## 7. Additional visual evidence

The live page exposes five environmental image references:
- Room 1: moss/vegetation with a bright flying/light form.
- Room 2: sandy spiral and central pink sphere.
- Room 3: dark rocky field with several glowing fish-like forms.
- Room 4: aerial path through tree canopy.
- Room 5: circular platform and steps in a landscaped environment.

The official Framer Gallery claims custom high-quality 3D animations. The images themselves are stills and do not prove movement. The Room 1 Mux thumbnail also shows interface composition but is not a time series.

## 8. Instrumentation blocker

No REA, Chrome DevTools MCP or Playwright MCP tools are callable from this ChatGPT session. Therefore idle loops, pointer response, transition durations, easing, camera motion and performance have not been measured. The next run must start in a session with all three tools connected and an inspectable Chrome target.
