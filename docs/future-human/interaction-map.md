# FUTURE HUMAN — interaction map

**Status:** Public page labels and the Room 1 Mux interface-preview still inspected. No live click, hover, keyboard or touch action was executed; all action results remain unverified.

## Page / entry layer

| Element | Visible evidence | Action/result status |
|---|---|---|
| “Enter” | Public page text near “Step into the field / Move forward. Discover what unfolds.” | Not clicked; destination and transition unknown |
| “Program” | Public page text and visible floating pill in Room 1 Mux preview | Position/appearance visible; role/action unknown |
| “Change” | Public page text and visible floating pill in Room 1 Mux preview | Position/appearance visible; role/action unknown |
| “SPÜRSINN” | Public page text | Role and action unknown |
| “Beginning” | Public page text and visible floating pill in Room 1 Mux preview | Position/appearance visible; role/action unknown |

## Persistent room interface

| Element | Visible evidence | Action/result status |
|---|---|---|
| Five circular journey markers | Visible bottom-center between FUTURE and HUMAN in Room 1 Mux preview | Exact room mapping, keyboard behavior and transition unknown |
| “Click to explore” | Small instruction near journey navigation | Instruction only; not treated as a button |
| Lower-left chevron | Small circular up-chevron-like control visible in Room 1 Mux preview | Direction, label and outcome unknown |
| Lower-right document/booklet-like glyph | Small outline icon visible bottom-right in Room 1 Mux preview | Label and destination unknown |
| Lower-right envelope-like glyph | Small outline icon visible bottom-right in Room 1 Mux preview | Label and destination unknown |
| “INTERACTION” top-right label | Not present in the Room 1 Mux frame inspected | May exist in another state; unknown |

## Room-specific hotspot labels

The live page text includes the following visible labels. A label appearing in text is not proof of its target action.

| Room | Label(s) |
|---|---|
| 1 | No distinct hotspot name confirmed |
| 2 | Expression; Five movements; Multidimensional |
| 3 | HIGHER WE; FUTURE HUMAN; Love Intelligence |
| 4 | Living field; 8 Modules; The HILLA; Multidimensionality; Between the modules |
| 5 | Julia; The Path; Yvonne; Go Deeper; Jennifer |

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


## 8. Additional observed Room 1 layout details

Preview image: https://image.mux.com/m3YWLMMz7006f9VD5WTD5xyuIVs02cd39cuVxu00XPf1Fo/thumbnail.webp?time=7.202


The public Mux preview frame shows:
- Floating Program, Change and Beginning pills over the scene, each with a small outlined circle on the left.
- Bottom-center FUTURE / five markers / HUMAN navigation.
- “Click to explore” below the markers.
- Lower-left round chevron/up-arrow-like control.
- Lower-right booklet/document-like and envelope-like icons.

These are visual observations only. None of the buttons or labels were activated, so all resulting behavior remains unknown. The five room markers being visible does not prove that each marker selects the corresponding titled room directly.
