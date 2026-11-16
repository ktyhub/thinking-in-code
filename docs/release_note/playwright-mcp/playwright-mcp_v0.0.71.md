---
title: "playwright-mcp v0.0.71"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.71"
version: "v0.0.71"
published: "2026-04-27"
type: "patch"
lang: "en"
summary: "browser_drop — Expose Locator.drop as an MCP tool for completing drag-and-drop operations onto a target (#40367)"
---

# playwright-mcp v0.0.71

## What's New

### New Tools

- **`browser_drop`** — Expose `Locator.drop` as an MCP tool for completing drag-and-drop operations onto a target ([#40367](https://github.com/microsoft/playwright/pull/40367))

### Tool Improvements

- **`browser_network_requests`** — Added `responseBody` and `responseHeaders` options; binary bodies are rendered as a placeholder using mime-type detection ([microsoft/playwright@f0be0b17](https://github.com/microsoft/playwright/commit/f0be0b1728))
- **`browser_evaluate`** — Accept plain expressions in addition to function bodies ([#39979](https://github.com/microsoft/playwright/pull/39979))

### Browser Extension

- **Tab group syncing** — Connected tabs are grouped into a green "Playwright" tab group ([#1514](https://github.com/microsoft/playwright-mcp/pull/1514), [#1551](https://github.com/microsoft/playwright-mcp/pull/1551))

## Bug Fixes

- Disable CDP timeout for extension connection so long handshakes don't fail ([#40265](https://github.com/microsoft/playwright/pull/40265))
- Ensure `--proxy-server` overrides the proxy set in the config file ([#40212](https://github.com/microsoft/playwright/pull/40212))
- Merge user-supplied `ignoreDefaultArgs` with persistent mode defaults instead of replacing them ([#40026](https://github.com/microsoft/playwright/pull/40026))

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.71` · 2026-04-27 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.71)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
