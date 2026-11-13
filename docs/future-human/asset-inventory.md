# FUTURE HUMAN — asset and technology inventory

**Status:** Public project-level credits and preview frames identified. Live-site asset/network inventory pending.

## Confirmed project-level information

- The official Framer Gallery identifies the project as designed and developed using Framer.
- The project description advertises custom high-quality 3D animations, tactile textures and responsive layout.
- The creator project listing includes Framer, Blender and Octane Render in its production tags/credits.
- These statements do not establish which libraries, formats or renderer are shipped to the browser at runtime.

## Asset inventory

| Asset type | Current evidence | Status / next action |
|---|---|---|
| Fonts | Serif-like title and small sans-like metadata visible in previews | Font family/files unknown; inspect CSS and network font requests |
| Room 1 materials | Moss/grass texture, pale flecks and bright light/insect-like elements visible in preview | Original texture/model/video source unknown |
| Room 2 materials | Sand/stone spiral texture and central pink orb visible in preview | Format and source unknown |
| Room 3 materials | Dark rock material and glowing fish-like forms visible in preview | Geometry, shader, video or image source unknown |
| Room 4 materials | No dependable room-specific still obtained | Unknown |
| Room 5 materials | Architectural courtyard and circular encounter composition visible in a Framer transitions preview | Source model, texture and animation format unknown |
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
