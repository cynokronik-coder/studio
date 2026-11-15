# FUTURE HUMAN — asset and technology inventory

**Status:** Five Framer CDN image references, four Mux full-interface preview stills and the official Framer project description inspected. Live network/resource inventory pending.

## Confirmed project-level information

- The official Framer Gallery identifies the project as designed and developed using Framer.
- The project description advertises custom high-quality 3D animations, tactile textures and responsive layout.
- The creator project page URL could not be retrieved in this audit session; no Blender/Octane runtime or production claims are included here.
- These statements do not establish which libraries, formats or renderer are shipped to the browser at runtime.

## Asset inventory

| Asset type | Current evidence | Status / next action |
|---|---|---|
| Fonts | Serif-like title and small sans-like metadata visible in previews | Font family/files unknown; inspect CSS and network font requests |
| Room 1 materials | Moss/grass texture, pale flecks and bright light/insect-like elements visible in preview | Original texture/model/video source unknown |
| Room 2 materials | Sand/stone spiral texture and central pink orb visible in preview | Format and source unknown |
| Room 3 materials | Dark rock material and glowing fish-like forms visible in preview | Geometry, shader, video or image source unknown |
| Room 4 public image | Aerial winding path through tree canopy | Actual runtime role and asset source unknown |
| Room 5 public image | Pale circular platform and steps, rocks, vegetation and pink blossom tree | Source model, texture and animation format unknown |
| Video / image sequences | Framer Gallery provides preview media hosted via Mux | Preview media only; not confirmed as the live site's own scene assets |
| 3D models | Project describes custom 3D animation | Model file formats and runtime loading not observed |
| JavaScript bundles | Framer attribution implies frontend bundle delivery | Actual scripts, source maps and module dependencies not captured |
| WebAssembly | No evidence yet | Inspect network; use WABT/wasm-tools only if relevant WASM is found |
| API / backend | No backend API behavior established from page text | Record only requests observed in DevTools/REA |
| Icons | Small chevron, document/booklet-like and envelope-like glyphs visible | Actual SVG/font source and accessible labels unknown |

## Network and bundle capture checklist

After REA and Chrome DevTools MCP are connected:
- Capture all allowed-origin requests and response metadata.
- Record script URLs, initiators, MIME types and sizes.
- Identify fonts and font-display behavior.
- Identify video/media sources, codecs, posters, preload strategy and buffering.
- Identify image dimensions, formats, responsive variants and texture atlases.
- Identify model/geometry resources and compression.
- Identify WebGL, WebGPU, canvas and WASM usage.
- Record failed resources and console messages.
- Note whether resources are served by Framer, Mux, external CDNs or other providers.
- Inspect source maps only if available and permitted.
- Use bundle analysis/deobfuscation selectively; preserve original downloaded bundle hashes and keep a record of every transformed copy.

## Relevant Awesome-REA static-analysis resources

Conditional tools:
- [webcrack](https://github.com/j4k0xb/webcrack): unminify, unpack supported webpack/Browserify structures and reverse supported obfuscation.
- [Wakaru](https://github.com/pionxzh/wakaru): recover readable modules from recognized minifier/transpiler patterns.
- [humanify](https://github.com/jehna/humanify): propose names for minified identifiers with scope-aware rewriting.
- [jsdeob-workbench](https://github.com/Owl4444/jsdeob-workbench): inspect JavaScript AST/scopes and experiment with Babel transforms.
- [sourcemapper](https://github.com/denandz/sourcemapper) / [shuji](https://github.com/paazmaya/shuji): recover original source files only when source maps actually contain them.
- [WABT](https://github.com/WebAssembly/wabt) / [wasm-tools](https://github.com/bytecodealliance/wasm-tools): inspect WASM only if the target loads WASM.
- [mitmproxy](https://github.com/mitmproxy/mitmproxy) / [HTTP Toolkit](https://httptoolkit.com/): additional traffic inspection only if needed.

A minified bundle is delivered code, not necessarily the original source. A source-map URL is not proof that original sources are embedded. Do not claim that a deobfuscator recovered the site's original project.

## Rights and reuse

The Framer Gallery previews are reference material, not a grant to copy original production assets. Do not download/reuse the original textures, models, fonts, animations, videos, logos or other protected material in the reconstruction unless the user has appropriate rights or permission.

Use:
- Original procedural textures and geometry.
- Properly licensed fonts, models and textures.
- Newly authored motion and shaders.
- A documented attribution/license inventory for every third-party asset.

Do not treat an open-source reverse-engineering tool's MIT/Apache license as a license to reuse the reference website's content.


## 8. Additional public image resources

The live page links five Framer CDN WebP image variants. They are likely scene references in room order, but the actual DOM-to-room mapping and runtime use are not confirmed:

- Room 1: https://framerusercontent.com/images/byN5JITGDpJS5uPjBYZNgrdYBc.webp?height=800&width=1262
- Room 2: https://framerusercontent.com/images/vDbSa7PEB8DwTVdVLCO5S03G0E.webp?height=800&width=1262
- Room 3: https://framerusercontent.com/images/RS69Ed1spgNQZP5bDKSkypnMeQA.webp?height=800&width=1262
- Room 4: https://framerusercontent.com/images/nXXbEcLSHkFkWv8SoaEMsCWE2T0.webp?height=800&width=1262
- Room 5: https://framerusercontent.com/images/bPlZYth7cs3PE7DXCGxqj6ZcC8.webp?height=800&width=1262

Creator-supplied Mux full-interface stills for Rooms 1, 2, 3 and the Room 5 transitions are listed in section 10 below.

These public links are visual evidence only. They do not prove that the same assets are downloaded and used by the live scene renderer.

## 9. ChatGPT-session capture limitation

The current ChatGPT tool session does not expose REA, Chrome DevTools MCP or Playwright MCP calls. No live site network resource inventory, JavaScript bundle listing, font URL capture, WebGL context inventory or performance record was obtained. The page text and public linked images were inspected through public web reading only.


## 10. Creator-supplied Mux preview frame references

These Mux-hosted preview stills expose the full desktop UI at four sampled states:

| Sample | Public URL | What it shows |
|---|---|---|
| Room 1 | https://image.mux.com/8KSTLeLnO02IssjCHWC016XtRix2502snXLVRj01YS00mqJw/thumbnail.webp?time=4.875 | Moss environment, inset scene panel, ROOM 1 / INTERACTION labels, title/tagline, bottom journey controls and utility icons |
| Room 2 | https://image.mux.com/wEsjbPtkWzFYsEHKTaEMZMY3pp4KDe1neH2rua7H138/thumbnail.webp?time=9.875 | Sand spiral, pink sphere, inset panel and three hotspots |
| Room 3 | https://image.mux.com/nLNX4gM6LQCO025X1vpwH3EPUPppjawZ3ZYXirxFTqow/thumbnail.webp?time=7.083 | Dark rock scene, glowing fish-like forms, inset panel and three hotspots |
| Room 5 / transitions | https://image.mux.com/Uy00unzOctufG3c6ZCQpwZpzbm7xFjrhIWMfnuV8rkwc/thumbnail.webp?time=29.875 | Outer architectural environment, inner circular platform scene and five visible content labels |

The sampled timestamps are points in the public preview media. They are not evidence of interaction timing or actual live-site runtime behavior.
