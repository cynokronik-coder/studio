# Repository instructions — Future Human reconstruction lab

This repository is an isolated reconstruction experiment. It is deliberately separate from Sonora. Never access, modify or merge into the Sonora repository from this project.

## Controlling specification

Read and follow:
- `docs/future-human/reconstruction-spec.md`
- `docs/future-human/website-audit.md`
- `docs/future-human/visual-system.md`
- `docs/future-human/animation-inventory.md`
- `docs/future-human/interaction-map.md`
- `docs/future-human/asset-inventory.md`

The user's four-phase specification controls this work. Do not compress the investigation into an implementation prompt.

## Mandatory phase gate

1. **Phase 1 — investigation only.** Do not modify application code. Use REA, Chrome DevTools MCP and Playwright to inspect the public reference. REA is passive; Playwright is responsible for navigation and interaction. Chrome DevTools supplies runtime/network/performance evidence.
2. **Phase 2 — documentation.** Complete all five audit documents. Distinguish observed, inferred and unknown facts. Include viewport screenshots or verified external preview references and evidence links.
3. **Phase 3 — implementation.** Start only after Phase 1 and Phase 2 are complete, or after the user explicitly accepts specific remaining blockers. Do not choose Three.js, video, canvas or a hybrid before inspecting the shipped runtime.
4. **Phase 4 — QA.** Compare corresponding states at 1440×900, 1280×800 and 390×844. Test interactions and animations; report differences honestly.

If the browser tools are unavailable, stop at the blocker, document what public evidence is available, and tell the user what tool connection is missing. Do not claim a full live audit, exact animation timing or 1:1 reconstruction.

## Tool use — relevant Awesome-REA resources

Use the current tool schemas in the connected agent session. Relevant resources include:
- Official REA: https://github.com/morluto/rea
- Chrome DevTools MCP: https://github.com/ChromeDevTools/chrome-devtools-mcp
- Playwright MCP: https://github.com/microsoft/playwright-mcp
- WebsiteBench: https://github.com/TIGER-AI-Lab/WebsiteBench
- Browser Reverse Engineering Toolkit: https://github.com/Dvurechensky/Browser.Reverse.Engineering.Toolkit
- Dembrandt: https://github.com/dembrandt/dembrandt
- breakinggood: https://github.com/eklavya2201/breakinggood
- Mirrorframe: https://github.com/byte271/mirrorframe
- screenshot-to-code: https://github.com/abi/screenshot-to-code

Use bundle tools such as webcrack, Wakaru, humanify, jsdeob-workbench and source-map tools only if captured public scripts justify them. Use mitmproxy/HTTP Toolkit only if needed for permitted network evidence. Use WABT/wasm-tools only if WASM is actually present. Do not install or use unrelated resources merely to increase tool count.

Awesome-REA is a 5,191-resource catalogue with 128 Website entries. Use all relevant resources and their limitations; do not pretend every unrelated game/firmware/binary resource applies.

## Rights and evidence

- Public observation only. Do not bypass login, bot protection, paywalls or other access controls.
- Treat reference content, code, scripts, assets, media, fonts and models as copyrighted unless a reuse license is established.
- Use original or properly licensed replacement assets. A tool's open-source license does not license the target website's assets.
- Do not treat screenshots as evidence for exact motion timing or hidden interaction behavior.
- Maintain an evidence trail for all technical choices.
