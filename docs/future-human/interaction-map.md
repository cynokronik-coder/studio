# FUTURE HUMAN — interaction map

**Status:** Public page labels and four full-interface preview stills (Rooms 1, 2, 3 and Room 5 transitions) inspected. No live click, hover, keyboard or touch action was executed; all action results remain unverified.

## Page / entry layer

| Element | Visible evidence | Action/result status |
|---|---|---|
| “Enter” | Public page text near “Step into the field / Move forward. Discover what unfolds.” | Not clicked; destination and transition unknown |
| “Program” | Public page text, repeated in extraction | Not visible in the sampled Room 1 full-interface frame; placement/action unknown |
| “Change” | Public page text, repeated in extraction | Not visible in the sampled Room 1 full-interface frame; placement/action unknown |
| “SPÜRSINN” | Public page text | Role and action unknown |
| “Beginning” | Public page text, repeated in extraction | Not visible in the sampled Room 1 full-interface frame; placement/action unknown |

## Persistent room interface

| Element | Visible evidence | Action/result status |
|---|---|---|
| Five circular journey markers | Visible bottom-center between FUTURE and HUMAN in Room 1 Mux preview | Exact room mapping, keyboard behavior and transition unknown |
| “Click to explore” | Small instruction near journey navigation | Instruction only; not treated as a button |
| Lower-left chevron | Small circular up-chevron-like control visible in Room 1 Mux preview | Direction, label and outcome unknown |
| Lower-right document/booklet-like glyph | Small outline icon visible bottom-right in Room 1 Mux preview | Label and destination unknown |
| Lower-right envelope-like glyph | Small outline icon visible bottom-right in Room 1 Mux preview | Label and destination unknown |
| “ROOM 1” top-left and “INTERACTION” top-right | Visible in Room 1 full-interface Mux frame | Labels are visible; whether INTERACTION is a mode switch or static label is unknown |

## Room-specific hotspot labels

The live page text includes the following visible labels. A label appearing in text is not proof of its target action.

| Room | Label(s) |
|---|---|
| 1 | No distinct hotspot name confirmed |
| 2 | Expression; Five movements; Multidimensional — all three visible as positioned hotspots in the Room 2 preview frame |
| 3 | HIGHER WE; FUTURE HUMAN; Love Intelligence — all three visible as positioned hotspots in the Room 3 preview frame |
| 4 | Living field; 8 Modules; The HILLA; Multidimensionality; Between the modules |
| 5 | Julia; The Path; Yvonne; Go Deeper; Jennifer — all five visible as positioned labels in the Room 5 transitions frame |

For every hotspot, record:
- Hover state.
- Focus state.
- Click/tap response.
- Whether a tooltip, modal, overlay, new scene, video or external link appears.
- Whether the background/camera changes.
- Whether the hotspot can be activated repeatedly.
- How to return to the parent room.
- Whether progress indicator state changes.

## Required Playwright test matrix

Test the following at 1440×900, 1280×800 and 390×844:
1. Load root URL from a clean browser profile.
2. Activate Enter.
3. Visit all five room markers in both forward and reverse order.
4. Activate every room-specific hotspot.
5. Hover/focus every global and room-specific control.
6. Activate document/booklet and envelope controls.
7. Use Tab, Shift+Tab, Enter, Space and Escape.
8. Use browser back and forward.
9. Reload a room state and check whether it persists in URL/session state.
10. Test touch/tap with mobile emulation.
11. Test prefers-reduced-motion.
12. Check console errors and failed requests after each action.

Record each test as `observed`, `not observed`, `blocked` or `unknown`. Never mark a control complete solely because it is clickable.


## 8. Public full-interface preview frames

**Room 1:** https://image.mux.com/8KSTLeLnO02IssjCHWC016XtRix2502snXLVRj01YS00mqJw/thumbnail.webp?time=4.875  
Shows ROOM 1 / INTERACTION metadata, centered title/tagline, inset scene panel, five-position journey navigation, Click to explore, lower-left circular chevron and two lower-right utility icons.

**Room 2:** https://image.mux.com/wEsjbPtkWzFYsEHKTaEMZMY3pp4KDe1neH2rua7H138/thumbnail.webp?time=9.875  
Shows ROOM 2 / INTERACTION, title/tagline, inset panel and three positioned hotspots: Expression, Five movements and Multidimensional.

**Room 3:** https://image.mux.com/nLNX4gM6LQCO025X1vpwH3EPUPppjawZ3ZYXirxFTqow/thumbnail.webp?time=7.083  
Shows ROOM 3 / INTERACTION, title/tagline, inset panel and three positioned hotspots: HIGHER WE, FUTURE HUMAN and Love Intelligence.

**Room 5 transitions preview:** https://image.mux.com/Uy00unzOctufG3c6ZCQpwZpzbm7xFjrhIWMfnuV8rkwc/thumbnail.webp?time=29.875  
Shows an outer architectural setting around the inset circular-platform scene, with labels The Path, Julia, Yvonne, Jennifer and Go Deeper.

These are still frames from creator preview media. No controls were activated; action outcomes and keyboard/touch behavior remain unknown. Five navigation markers are visible but exact marker-to-room mapping has not been tested.
