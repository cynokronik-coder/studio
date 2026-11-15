# FUTURE HUMAN — visual system inventory

**Status:** Five public scene-image references and one Room 1 full-interface preview frame captured from public page/gallery resources. Live computed styles and mobile measurements pending.

## Composition visible in desktop previews

The Room 1 Mux interface preview is a wide landscape frame (displayed at approximately 1000 pixels wide). It shows the scene filling the visible canvas. Exact native screenshot dimensions and live viewport dimensions have not been measured.

- The environmental background fills the full viewport.
- The moss environment fills the visible frame; no inset border/panel is apparent in this single screenshot.
- The room heading and German tagline are centered near the top.
- Program, Change and Beginning appear as small floating pill-like labels over the scene.
- The five-position journey navigation sits bottom-center with FUTURE and HUMAN flanking it.
- “Click to explore” appears below the markers; a chevron-like control is bottom-left and two utility glyphs are bottom-right.
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
| Floating scene labels | “Program”, “Change”, “Beginning” | Position and appearance visible in Room 1 preview; click behavior unknown |
| Journey navigation | “FUTURE”, five circular markers, “HUMAN” | Active-state behavior, exact room mapping and transitions unknown |
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
| 4 | Not enough reliable visual evidence to describe |
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

The Room 1 Mux preview shows the environment as a full-bleed canvas with interface labels directly overlaid. The previous prototype's inset rectangular panel and outside ROOM/INTERACTION header assumption are not supported by this inspected frame. Treat those elements as unverified or remove them when the implementation phase begins unless another live state proves they exist.
