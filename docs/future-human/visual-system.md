# FUTURE HUMAN — visual system inventory

**Status:** Five public scene-image references and four full-interface preview frames (Rooms 1, 2, 3 and Room 5 transitions) inspected. Live computed styles and mobile measurements pending.

## Composition visible in desktop previews

The public Framer Gallery Mux preview stills are 1000×750 pixels. Room 1, Room 2 and Room 3 show a shared desktop composition:

- The environmental background fills the outer 1000×750 frame.
- An inset scene panel sits centrally, approximately 750×500 pixels (about 75% of frame width and two-thirds of frame height).
- The outer environment remains visible around all four sides of the inset panel.
- Small room identifier appears at the top-left of the outer frame; “INTERACTION” appears at the top-right.
- Room title and German tagline are centered near the top of the inset panel.
- The journey navigation sits bottom-center inside the inset: FUTURE, five circular markers and HUMAN.
- “Click to explore” sits immediately below the marker row.
- A small circular chevron control sits lower-left inside the panel; two outline utility icons sit lower-right (booklet/document-like and envelope-like).
- The inset surface is translucent enough for the scene texture to remain visible below it.

Room-specific hotspot positions are visible in some sampled frames:
- Room 2: Expression at right of the pink orb, Five movements below/left of the orb, Multidimensional toward the lower-left.
- Room 3: HIGHER WE toward upper-left, FUTURE HUMAN at mid-right, Love Intelligence below-center.
- Room 5 transitions preview: The Path on the approach/steps, Julia and Yvonne around the circular platform, Jennifer near the lower platform edge, and Go Deeper to the right.

The available Room 1 sample at 4.875 seconds does not show Program, Change, SPÜRSINN or Beginning as floating hotspots, although those labels occur in the live page's extracted text. Their visible state/placement remains unknown.

## Typography

Observed:
- Main room titles use an editorial serif-like face, centered and relatively restrained in size.
- The main Room 1 title is uppercase: “THE FUTURE IS HUMAN.”
- Other room titles use title case, with a mix of regular and italic/serif emphasis visible in the previews.
- The German supporting line is much smaller and lighter than the headline.
- Top metadata labels use a small, restrained sans-like treatment.
- “FUTURE” and “HUMAN” are letter-spaced wordmarks flanking five circular markers.

Not measured:
- Exact family, font files, weights, variable axes, line heights, tracking values or fallback stacks.
- Whether fonts are served by Framer, an external font provider or local files.

Do not select a substitute font by guess. Inspect loaded font resources and computed styles first.

## UI structure

| Element | Preview observation | Pending verification |
|---|---|---|
| Room 2 hotspots | Expression; Five movements; Multidimensional | Positions visible in sampled preview; click behavior unknown |
| Room 3 hotspots | HIGHER WE; FUTURE HUMAN; Love Intelligence | Positions visible in sampled preview; click behavior unknown |
| Room 5 hotspots | Julia; The Path; Yvonne; Go Deeper; Jennifer | Positions visible in transitions preview; click behavior unknown |
| Room 1 labels | Program; Change; SPÜRSINN; Beginning | Page text only; not visible in the sampled Room 1 frame; placement/action unknown |
| Journey navigation | FUTURE, five circular markers, HUMAN | Active-state behavior, exact room mapping and transitions unknown |
| Instruction | “Click to explore” | Whether static instruction or actionable text unknown |
| Lower-left control | Circular up-chevron-like glyph | Label and action unknown |
| Lower-right controls | Booklet/document-like and envelope-like glyphs | Labels, destinations and actions unknown |
| Main title | Centered, serif editorial title | Exact sizes, font metrics and animation |
| Subtitle | German tagline below title | Exact font and responsive behavior |
| Journey bar | FUTURE / five circular markers / HUMAN | Marker semantics, active state, transition animation |
| Hint | “Click to explore” | Whether it disappears or changes by room |
| Lower-left control | Small chevron-like icon | Meaning, direction and destination |
| Lower-right controls | Document/booklet-like icon and envelope-like icon | Accessible names, destination URLs and resulting overlays |

## Environmental material and color families

These are descriptive visual observations, not sampled design tokens:

| Room | Preview color/material description |
|---|---|
| 1 | Deep olive and moss greens, botanical/grassy texture, small pale flower-like flecks and brighter insect/light accents |
| 2 | Warm sand/beige field, dark spiral/shadow forms, central pink/coral orb |
| 3 | Charcoal and dark umber rock-like background, warm gold/cream luminous fish-like forms |
| 4 | Winding path viewed from above, flanked by dense green and ochre tree canopy and earthy ground |
| 5 | Pale warm stone architecture, courtyard/threshold composition, a circular meeting platform, deep green landscape and pink flowering tree in the transition preview |

## Motion / depth clues visible in still frames

- Rooms 1 and 3 include multiple small bright elements that are visually separated from the textured background.
- The Room 2 composition centers a spherical/pink object over a spiral texture.
- The Room 5 linked image shows a pale circular platform approached by steps, three rock objects and surrounding planting; the precise live animation remains unknown.
- These stills do not establish whether objects move in real time, are video loops, or are pre-rendered sequences.

## Responsive behavior

The creator's published project description claims a seamless responsive layout for every device. No mobile screenshot or live mobile session was captured in this audit.

Required capture sizes:
- Desktop: 1440×900.
- Laptop: 1280×800.
- Mobile: 390×844.

At each size, record:
- Inner frame width/height and safe margins.
- Title position and line wrapping.
- Whether the environmental scene changes crop or camera.
- Whether navigation becomes scrollable, compact or stacked.
- Hotspot hit target dimensions and placement.
- Touch-specific behavior.

## Design-token extraction plan

1. Use Chrome DevTools / Playwright to inspect the rendered page.
2. Use Dembrandt only for the DOM-rendered UI layer if the page exposes usable DOM styles; it does not analyze Canvas/WebGL scenes.
3. Record exact computed font, size, weight, color, border, shadow, spacing and breakpoint evidence.
4. Store verified values as CSS variables/design tokens with an evidence note.
5. Keep room-specific material palettes separate from global interface tokens.

No exact hex values, font names or animation durations are asserted in this file until captured from the live site.


## 9. Five environmental image references newly inspected

The live page exposes five linked Framer CDN images, in the order of the five room headings. The one-to-one room mapping is provisional pending DOM association:

- Room 1: moss/grass-like ground, small pale flower flecks, one bright yellow-white flying/light form.
- Room 2: warm beige sand/stone spiral/depression with a central pink/coral sphere.
- Room 3: dark charcoal/umber rock/cavern with glowing amber fish-like forms.
- Room 4: aerial view of a dark path through ochre/green tree canopy.
- Room 5: pale circular stone platform approached by steps, rock objects, dark-green planting and pink blossom tree.

The individual image URLs are recorded in `website-audit.md` and `asset-inventory.md`.

## 10. Corrected frame interpretation

The Room 1, Room 2 and Room 3 Mux preview stills clearly show the inset scene panel plus outer ROOM / INTERACTION metadata. The previous provisional claim that the panel was absent was incorrect and is superseded by the full-interface preview frames listed in website-audit.md.
