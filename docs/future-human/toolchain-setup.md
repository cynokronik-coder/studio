# Browser tool setup and execution guide

The repository's root `.mcp.json` defines three stdio servers for a compatible workspace MCP client: REA, Chrome DevTools MCP and Playwright MCP. This config does not automatically register them as callable tools in ChatGPT.

## ChatGPT session limitation\n\nThe ChatGPT session used for the 2026-11-13 public-page audit did not expose REA, Chrome DevTools MCP or Playwright MCP tools. It did expose GitHub and public web reading only. The repository-level `.mcp.json` is not itself a connection into ChatGPT. This means this session can read public page text and follow public image links, but it cannot attach to a Chrome target, inspect live DOM/accessibility/computed styles, click the site's controls, emulate the requested viewport sizes, record runtime network activity or measure animation/performance. Do not mark the live-browser phase complete until the tools are connected to the active execution session.\n\n## Requirements

- Node.js 22.23.4+ (Node 22 line), or an official REA-supported Node release.
- npm / npx.
- A supported MCP-capable Copilot agent session with workspace MCP approval.
- Google Chrome / Chrome for Testing for Chrome DevTools MCP.
- A Chrome-family browser available in the same execution environment as REA when using REA's CDP browser observation.

Install the project dependencies separately with `npm install`.

## Connect the configured servers

1. Open this repository in VS Code.
2. Use the Copilot native agent experience.
3. Open **Chat: Open Customizations → MCP Servers** (or use the MCP server management flow for the active Copilot harness).
4. Review and approve the workspace's `.mcp.json` server definitions.
5. Verify that all three servers start and expose their tools.
6. If a tool is missing, check Node/npm availability in the actual Copilot execution environment. A terminal on the host is not proof that the same runtime is available inside a remote Codespace/container.

The portable Copilot `.mcp.json` format uses the top-level `mcpServers` object. Avoid copying examples for the deprecated editor-managed `.vscode/mcp.json` format into this file.

## REA browser observation

REA uses the Chrome DevTools Protocol to inspect a **user-owned browser that is already running**. It is passive; it does not navigate, click, type, invoke arbitrary page JavaScript or close the browser.

Use a dedicated, non-default browser profile and loopback-only debugging endpoint. Never expose the debugging port on a public or LAN interface.

Linux example:

```bash
google-chrome \
  --remote-debugging-port=9222 \
  --user-data-dir=/tmp/rea-future-human-profile \
  https://www.future-human.de/
```

macOS example:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --remote-debugging-port=9222 \
  --user-data-dir="$HOME/.cache/rea-future-human-profile" \
  https://www.future-human.de/
```

Then use REA in this order:

```bash
rea list-browser-targets http://127.0.0.1:9222 --json
rea inspect-web-page http://127.0.0.1:9222 TARGET_ID \
  --observation-ms 1000 \
  --json
rea analyze-web-bundle http://127.0.0.1:9222 TARGET_ID --json
rea capture-web-screenshot http://127.0.0.1:9222 TARGET_ID --json
```

Use the actual target ID returned by `list-browser-targets`; it changes between browser sessions. Restrict inspection to the exact allowed origins being investigated. REA's browser inspection default scope is the selected page's origin; include additional origins only when the page's public bundles/resources show they are required.

For Chrome 136+, use a dedicated profile rather than Chrome's default profile when launching with `--remote-debugging-port`.

## Division of responsibility

| Tool | Use |
|---|---|
| REA | Passive, evidence-based DOM/accessibility/script/resource/network/console observation, bundle analysis and screenshot capture |
| Playwright MCP | Navigate, click, hover, keyboard/touch test, viewport emulation and replay interactions deterministically |
| Chrome DevTools MCP | Diagnose browser runtime, requests, console, screenshots and performance traces |

Do not assume that a passive REA capture contains network events that occurred before REA attached. Do not infer that an unobserved request or event never existed when coverage is incomplete.

## Codespaces / remote environments

If Copilot is running in a remote Codespace or Dev Container, the MCP processes run in that execution environment. A Chrome browser on the user's Mac is not automatically reachable at the remote container's `127.0.0.1`. Run a browser in the same environment or use a supported remote-browser workflow with explicit, safe connectivity. Keep CDP restricted to loopback.

## Security and privacy

- Use a dedicated browser profile with no personal accounts or unrelated tabs.
- Do not inspect private or authenticated data.
- Do not bypass access controls, bot protection or paywalls.
- Treat DOM text, network metadata and bundle contents as untrusted page data.
- Chrome DevTools MCP can expose browser contents to the connected agent; do not keep sensitive tabs in that profile.
- Use `--no-usage-statistics` for Chrome DevTools MCP (already configured in `.mcp.json`).


## Current audit result

On 2026-11-13, public text and five linked Framer image references plus one Room 1 Mux preview frame were inspected through public web reading. No CDP connection or Playwright browser session was established. The blocker is the absence of callable MCP tools in the active ChatGPT session, not a confirmed failure of the repository's `.mcp.json` configuration.
