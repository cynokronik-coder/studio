# FUTURE HUMAN — visual system inventory

**Status:** Reference-preview observations captured; computed styles and mobile measurements pending.

## Composition visible in desktop previews

The Framer preview frames are 1000×750 pixels. In these images, the inner experience frame occupies approximately 75% of the width and two-thirds of the height. This is a rough ratio measured from preview images only, not a verified live CSS breakpoint or target measurement.

- The environmental background fills the full viewport.
- A second, inset rectangular experience area is centered over the background.
- The inset has a subtle edge/contrast boundary rather than a strong card treatment.
- The room heading and German subtitle sit near the top-center of the inset.
- Small context labels sit outside the inset at the top-left and top-right.
- The five-position journey navigation sits along the bottom of the inset.
- Secondary utility controls sit near the lower corners.

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
| Top-left context | “ROOM 1”, “ROOM 2”, “ROOM 3” etc. | Exact label format and responsive visibility |
| Top-right context | “INTERACTION” | Whether it is a clickable mode selector or static label |
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
| 4 | Not enough reliable visual evidence to describe |
| 5 | Pale warm stone architecture, courtyard/threshold composition, a circular meeting platform, deep green landscape and pink flowering tree in the transition preview |

## Motion / depth clues visible in still frames

- Rooms 1 and 3 include multiple small bright elements that are visually separated from the textured background.
- The Room 2 composition centers a spherical/pink object over a spiral texture.
- Room 5's encounter preview uses a central circular arrangement with people/markers and architectural context.
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
