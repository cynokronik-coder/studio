# FUTURE HUMAN — website investigation audit

**Date:** 2026-11-13  
**Phase:** 1 — public-page reconnaissance (partial)  
**Reference:** https://www.future-human.de/  
**Status:** Public live-page text, five linked image references and four creator-supplied Mux full-interface preview frames (Rooms 1, 2, 3 and Room 5 transitions) inspected. Live DOM/network/interaction/viewport instrumentation remains blocked because REA, Chrome DevTools MCP and Playwright MCP are not callable in this ChatGPT session.

## 1. Executive findings

FUTURE HUMAN is not presented as a conventional marketing page. The official Framer Gallery describes it as an immersive, multidimensional experience made of interconnected spaces, each representing a stage, quality or dimension of the journey. The same listing describes custom high-quality 3D animations, tactile textures and a responsive layout, and credits Framer as the development platform.

The public page exposes **five named room sections**:

1. The Future Is Human.
2. The Multidimensional Human.
3. The Collective Field.
4. The Path & The Sanctuary.
5. The Circle & The Encounter.

A five-position journey navigator is visible in the desktop preview frames. This agrees with the five room content groups in the public page text. The room labels, some hotspot labels, and part of the entry copy can therefore be recorded as observed. The complete transition and click behavior is not yet verified.

**Do not assume the scenes are implemented in Three.js.** “Built with Framer” and “custom 3D animations” are source statements about the project, not proof of the live runtime renderer. The scenes may use real-time WebGL, video, rendered sequences, embedded assets or a hybrid. Inspect the live page's resources and runtime before choosing a reproduction architecture.

## 2. Evidence and source quality

| Evidence | What it supports | What it does not prove |
|---|---|---|
| Live public page text at https://www.future-human.de/ | Page title, German tagline, five named room headings, listed labels and entry CTA text | Exact DOM structure, all routes, interaction outcomes, visual timing or responsive measurements |
| Official Framer Gallery listing: https://www.framer.com/community/gallery/future-human/ | Interconnected-space concept, Framer attribution, custom 3D animation/tactile texture description, Room 1 and Room 3 preview footage | Exact browser runtime, source code, complete asset inventory or all interaction states |
| Second Framer Gallery entry: https://www.framer.com/community/gallery/futurehuman/ | Independent project description of the multidimensional journey and additional preview material | Full live-site behavior |
| Creator project page: https://contra.com/p/QBLNPeQc-future-human-website-development | Not retrievable in this audit session | No facts from this page are used in the current findings |
| Awesome-REA catalogue: https://github.com/reacher-z/Awesome-REA | Candidate investigation tools, workflows, case studies and limits | Automatic ability to clone the site |

The screenshots below are **external preview references** from the Framer Gallery's Mux-hosted preview media. They are not confirmed source-site assets and must not be copied into the running experience as substitutes for the original scenes.

### Observed reference frames

**Room 1 — moss / botanical environment**

![Room 1 preview frame](https://image.mux.com/8KSTLeLnO02IssjCHWC016XtRix2502snXLVRj01YS00mqJw/thumbnail.webp?time=4.875)

**Room 2 — sand / spiral environment and central orb**

![Room 2 preview frame](https://image.mux.com/wEsjbPtkWzFYsEHKTaEMZMY3pp4KDe1neH2rua7H138/thumbnail.webp?time=9.875)

**Room 3 — dark rock environment and glowing forms**

![Room 3 preview frame](https://image.mux.com/nLNX4gM6LQCO025X1vpwH3EPUPppjawZ3ZYXirxFTqow/thumbnail.webp?time=7.083)

**Room 5 / encounter composition — Framer transitions preview**

![Encounter / transitions preview](https://image.mux.com/Uy00unzOctufG3c6ZCQpwZpzbm7xFjrhIWMfnuV8rkwc/thumbnail.webp?time=29.875)

Update: the live page exposed a fifth linked Framer image. Its content is an aerial view of a winding path through tree canopy, provisionally mapped to Room 4 by its position in the five-image sequence. This mapping is strongly suggested but still needs DOM association confirmation.

## 3. Page architecture observed from public content

**Public URL observed:** `https://www.future-human.de/` (root page).

The page's extracted content appears as one continuous journey with multiple room headings. The Framer project description explicitly says the experience is built around interconnected spaces rather than a traditional website structure. No separate public room URL was observed in the page text. This is not proof that hidden routes or URL state do not exist; test navigation and browser history with Playwright.

The public page text also contains an entry/intro sequence:

- “T H E F U T U R E I S H U M A N.”
- “Die Welt braucht deine einzigartige Gabe.”
- “Program”
- “Change”
- “SPÜRSINN”
- “Beginning”

Later page content includes:

- “Step into the field”
- “Move forward. Discover what unfolds.”
- “Enter”

The exact roles of Program, Change, SPÜRSINN and Beginning are not yet verified. Treat them as visible page content until the browser inspection establishes whether they are navigation, modules, headings or hidden responsive variants.

## 4. Room inventory from the live page text

The German subtitle appears below each major room heading: **“Die Welt braucht deine einzigartige Gabe.”**

| Room | Heading | Visible labels / hotspots in page text | Visual evidence |
|---|---|---|---|
| 1 | The Future Is Human. | Program; Change; SPÜRSINN; Beginning | Public image shows moss/vegetation, pale flecks and a bright flying/light form; the sampled full-interface Room 1 frame shows no named hotspots |
| 2 | The Multidimensional Human | Expression; Five movements; Multidimensional | Preview shows a sandy/stone spiral field, a central pink orb and three labels |
| 3 | The Collective Field | HIGHER WE; FUTURE HUMAN; Love Intelligence | Preview shows a dark rocky field with multiple warm glowing fish-like forms and three hotspots |
| 4 | The Path & The Sanctuary | Living field; 8 Modules; The HILLA; Multidimensionality; Between the modules | Public linked image shows an aerial winding path through a tree canopy; mapping is provisional by sequence |
| 5 | The Circle & The Encounter | Julia; The Path; Yvonne; Go Deeper; Jennifer | Public linked image shows a circular stone platform approached by steps, three rock-like objects, planting and a pink flowering tree; live scene behavior unknown |

Hotspot wording is recorded exactly where possible. The live page extraction duplicates some labels, likely due to multiple DOM or responsive variants; duplication must not be interpreted as two separate controls without inspection.

## 5. Shared desktop interface visible in Mux preview frames

Mux-hosted Framer Gallery preview frames are available for Rooms 1, 2 and 3, plus a transitions/encounter preview showing Room 5. These are screenshots sampled from creator-supplied preview media, not fresh captures from a live browser session.

Across the Room 1, Room 2 and Room 3 frames, the same composition is visible:

- The environmental scene fills the full outer viewport.
- A large inset rectangular scene panel occupies roughly 75% of the frame width and around two-thirds of its height, centered over the outer scene.
- Small room metadata appears at the top-left (for example, “ROOM 1”, “ROOM 2”, “ROOM 3”).
- “INTERACTION” appears at the top-right.
- The room title and German supporting line are centered near the top of the inset panel.
- The bottom-center journey control reads “FUTURE”, has five small circular markers, and ends with “HUMAN”.
- “Click to explore” appears immediately below the marker row.
- A small circular chevron control appears at the lower-left of the inset panel. Its direction differs in the available stills (up-like in Room 1/2, down-like in Room 3); its actual purpose is unknown.
- Two small outline utility icons appear at the lower-right of the inset panel. One resembles a booklet/document and one resembles an envelope; semantics and destinations remain unknown.

Room-specific labels differ:
- Room 1 preview frame: no room-specific floating labels are visible at the sampled timestamp. The public page text contains Program, Change, SPÜRSINN and Beginning twice, but their exact visual state is not established by this frame.
- Room 2 frame: Expression, Five movements and Multidimensional appear as small floating pill-like hotspots at different positions around the central orb.
- Room 3 frame: HIGHER WE, FUTURE HUMAN and Love Intelligence appear as small floating pill-like hotspots.
- Room 5 transition frame: The Path, Julia, Yvonne, Jennifer and Go Deeper are visible around the circular platform scene.

These preview frames correct two earlier notes: the main experience does have a clearly visible inset scene panel in the Room 1/2/3 desktop previews, and the top ROOM / INTERACTION labels are visible. Do not treat these stills as proof of the controls' actions, focus states or animation timing.

## 6. Browser investigation still required

The following tasks have **not** been completed by this reconnaissance:

- Capture the live DOM, accessibility tree, styles, scripts and resource inventory through REA.
- Run Playwright against the live page and click every room marker, hotspot, entry CTA and utility control.
- Record the initial loading sequence, every room transition and any hover/pointer/camera response.
- Verify keyboard focus, Enter/Escape behavior, browser back/forward behavior and mobile touch interactions.
- Capture true reference screenshots at 1440×900, 1280×800 and 390×844.
- Determine whether the scene renderer is WebGL/canvas, video, images, pre-rendered animation, Framer components or a hybrid.
- Inspect network resources for model files, textures, fonts, videos, shaders, WASM or cross-origin APIs.
- Run performance traces and inspect console errors.

**Tool connection limitation:** this ChatGPT session can read public GitHub sources and public page content, but has no callable REA, Chrome DevTools MCP or Playwright MCP browser tools. The repository's `.mcp.json` configures a compatible workspace agent; it does not connect the servers to this ChatGPT session automatically. No live DOM, interaction, network or performance capture has been performed. Do not describe this partial audit as a completed live reverse-engineering pass.

## 7. Selected Awesome-REA investigation resources

Inventory note: the current `data/rea-resources.json` fetched from Awesome-REA contains 185 curated resource records, 24 with `website` among their target tags. The generated case index lists 76 Website case studies. These are different inventories; do not combine them into a single count. Use the relevant website-analysis, browser-automation, source-inspection and visual-comparison resources; do not install unrelated game, firmware or native-binary tools without evidence that the target requires them.

| Resource | Role in this project | Important limitation / selection rule |
|---|---|---|
| [Official REA](https://github.com/morluto/rea) | Evidence-led passive capture of an already-open browser page: DOM/accessibility nodes, scripts, resources, network/console metadata, workers and selected screenshots | REA browser observation is passive; it does not navigate, click, type or invoke arbitrary page actions |
| [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Live Chrome control/inspection, screenshots, network debugging, console and performance traces | Requires Chrome and the MCP client to run in the same accessible execution environment |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Deterministic navigation, accessible-tree inspection, clicks, hover, touch/device emulation and repeatable state tests | Complements REA; does not replace the need for visual reference capture |
| [WebsiteBench](https://github.com/TIGER-AI-Lab/WebsiteBench) | Acceptance methodology: evaluate both functional checks and visual checkpoints, not only whether the app loads | Full benchmark has substantial Docker/Harbor resource requirements; use its evaluation principles, not its full benchmark harness |
| [Browser Reverse Engineering Toolkit](https://github.com/Dvurechensky/Browser.Reverse.Engineering.Toolkit) | Optional recorded-session/crawl evidence and offline architecture/network reports | Experimental; review generated reports; never treat inferred API/backend output as verified |
| [Dembrandt](https://github.com/dembrandt/dembrandt) | Extract DOM-based design tokens, typography, spacing, borders, shadows and breakpoint evidence | Its catalogue entry explicitly excludes canvas/WebGL sites; use only for the DOM/UI layer if suitable |
| [breakinggood](https://github.com/eklavya2201/breakinggood) | Optional screenshot/DOM/style/network snapshot and React starter for ordinary DOM-rendered pages | Its catalogue entry warns that mostly canvas/WebGL pages may capture poorly; do not use it as the 3D reconstruction engine |
| [Mirrorframe](https://github.com/byte271/mirrorframe) | Optional Playwright capture of DOM layout/states and screenshot diffs | It does not reconstruct live Canvas/WebGL/WebGPU drawing; its own entry says these become still captures |
| [screenshot-to-code](https://github.com/abi/screenshot-to-code) | Optional conversion of verified still screenshots into a first-pass overlay/layout | Cannot recover interaction logic, backend/API behavior or the original moving 3D experience from a screenshot |
| [mitmproxy](https://github.com/mitmproxy/mitmproxy) / [HTTP Toolkit](https://httptoolkit.com/) | Use only if DevTools network records are insufficient for permitted public traffic investigation | Do not bypass access controls or collect private user data |
| [webcrack](https://github.com/j4k0xb/webcrack), [Wakaru](https://github.com/pionxzh/wakaru), [humanify](https://github.com/jehna/humanify), [jsdeob-workbench](https://github.com/Owl4444/jsdeob-workbench), [sourcemapper](https://github.com/denandz/sourcemapper), [shuji](https://github.com/paazmaya/shuji) | Conditional static analysis of publicly delivered bundles/source maps, only when bundle analysis shows it is useful | De-minification is not original source recovery; document transforms, limits and evidence |
| [WABT](https://github.com/WebAssembly/wabt) / [wasm-tools](https://github.com/bytecodealliance/wasm-tools) | Conditional WebAssembly inspection | Do not install unless the live page actually loads relevant WASM |

The most important distinction is that **REA observes, Playwright exercises, and Chrome DevTools diagnoses**. Run all three in complementary roles rather than asking one tool to perform everything.

## 8. Next gate before implementation

Phase 1 is complete only after the live browser session has been captured and the required audit files have been updated with:

1. A verified room/state inventory.
2. A click/hover/keyboard/touch interaction map.
3. Screenshots at the three required viewport sizes.
4. An animation timeline with only observed behavior and measured timings.
5. A resource/technology inventory identifying the actual runtime rendering path.
6. An explicit unknowns list.

Do not expand the provisional application prototype until this gate is met or the remaining limitations are explicitly accepted by the user.


## 12. Additional public image and full-interface preview references

The public page exposes the following five Framer image CDN resources in page order. Their visual content strongly suggests one scene reference for each room; exact DOM element association and whether they are runtime scene assets remain unverified.

1. Room 1, moss/vegetation and bright flying/light form: https://framerusercontent.com/images/byN5JITGDpJS5uPjBYZNgrdYBc.webp?height=800&width=1262
2. Room 2, sandy spiral and pink sphere: https://framerusercontent.com/images/vDbSa7PEB8DwTVdVLCO5S03G0E.webp?height=800&width=1262
3. Room 3, dark rock field and glowing fish-like forms: https://framerusercontent.com/images/RS69Ed1spgNQZP5bDKSkypnMeQA.webp?height=800&width=1262
4. Room 4, winding path through tree canopy: https://framerusercontent.com/images/nXXbEcLSHkFkWv8SoaEMsCWE2T0.webp?height=800&width=1262
5. Room 5, circular platform reached by steps, vegetation and pink blossom tree: https://framerusercontent.com/images/bPlZYth7cs3PE7DXCGxqj6ZcC8.webp?height=800&width=1262

The following Mux preview stills expose the full interface at the sampled moments:

- Room 1 at 4.875 seconds: https://image.mux.com/8KSTLeLnO02IssjCHWC016XtRix2502snXLVRj01YS00mqJw/thumbnail.webp?time=4.875
- Room 2 at 9.875 seconds: https://image.mux.com/wEsjbPtkWzFYsEHKTaEMZMY3pp4KDe1neH2rua7H138/thumbnail.webp?time=9.875
- Room 3 at 7.083 seconds: https://image.mux.com/nLNX4gM6LQCO025X1vpwH3EPUPppjawZ3ZYXirxFTqow/thumbnail.webp?time=7.083
- Room 5 / transitions preview at 29.875 seconds: https://image.mux.com/Uy00unzOctufG3c6ZCQpwZpzbm7xFjrhIWMfnuV8rkwc/thumbnail.webp?time=29.875

The Room 1 sample shows the environmental scene behind the inset panel, with ROOM 1 / INTERACTION labels, centered title/subtitle, journey navigation, Click to explore, lower-left chevron and lower-right booklet/envelope icons. Room 2 adds the three Expression / Five movements / Multidimensional hotspots around the pink sphere. Room 3 adds HIGHER WE / FUTURE HUMAN / Love Intelligence around the glowing forms. The Room 5 transitions frame shows the outer architectural environment and an inset circular-platform scene with The Path / Julia / Yvonne / Jennifer / Go Deeper labels.

All are stills from the public Framer Gallery preview media. They are not live browser captures and do not prove the controls' behavior or the scenes' runtime rendering technology.
