# FUTURE HUMAN — interaction map

**Status:** Visible labels recorded from public page text and preview frames. The action/result for every control remains unverified.

## Page / entry layer

| Element | Visible evidence | Action/result status |
|---|---|---|
| “Enter” | Public page text near “Step into the field / Move forward. Discover what unfolds.” | Not clicked; destination and transition unknown |
| “Program” | Public page text | Role and action unknown |
| “Change” | Public page text | Role and action unknown |
| “SPÜRSINN” | Public page text | Role and action unknown |
| “Beginning” | Public page text | Role and action unknown |

## Persistent room interface

| Element | Visible evidence | Action/result status |
|---|---|---|
| Five circular journey markers | Visible along bottom between FUTURE and HUMAN | Exact room mapping, keyboard behavior and transition unknown |
| “Click to explore” | Small instruction near journey navigation | Instruction only; not treated as a button |
| Lower-left chevron | Small circular/chevron control | Direction, label and outcome unknown |
| Lower-right document/booklet icon | Visible in preview | Label and destination unknown |
| Lower-right envelope icon | Visible in preview | Label and destination unknown |
| “INTERACTION” top-right label | Visible in room preview | Static label vs interaction mode unknown |

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
