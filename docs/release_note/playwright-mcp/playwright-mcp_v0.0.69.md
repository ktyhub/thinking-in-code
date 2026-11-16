---
title: "playwright-mcp v0.0.69"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.69"
version: "v0.0.69"
published: "2026-03-30"
type: "patch"
lang: "en"
summary: "browser_network_state_set — Toggle network offline mode for testing connectivity scenarios (#39459)"
---

# playwright-mcp v0.0.69

## What's New

### New Tools

- **`browser_network_state_set`** — Toggle network offline mode for testing connectivity scenarios ([#39459](https://github.com/microsoft/playwright/pull/39459))
- **`browser_video_chapter`** — Add a chapter marker to the video recording, showing a full-screen chapter card with blurred backdrop ([#39891](https://github.com/microsoft/playwright/pull/39891))

### Tool Improvements

- **`browser_mouse_click_xy`** — Added `button`, `clickCount`, and `delay` options for more precise mouse interaction control ([#39368](https://github.com/microsoft/playwright/pull/39368), [#39465](https://github.com/microsoft/playwright/pull/39465))
- **`browser_network_requests`** — Added filtering support and optional `headers`/`body` fields in responses ([#39672](https://github.com/microsoft/playwright/pull/39672))
- **Non-ref selectors** — Tools now accept plain CSS/text selectors in addition to aria-ref handles ([#39581](https://github.com/microsoft/playwright/pull/39581))

### Other Changes

- Added `mcpName` field to package for MCP Registry ownership verification ([#1432](https://github.com/microsoft/playwright-mcp/pull/1432))
- Chrome extension: inject public key into release zip to preserve Web Store extension ID ([#1462](https://github.com/microsoft/playwright-mcp/pull/1462))

## Bug Fixes

- Fix verify tools not working inside iframes ([#39374](https://github.com/microsoft/playwright/pull/39374))
- Fix fs-based lock file not respected for Chromium family browsers ([#39377](https://github.com/microsoft/playwright/pull/39377))
- Fix console entries being printed when `--snapshot-mode=none` is set ([#39378](https://github.com/microsoft/playwright/pull/39378))
- Fix non-deterministic right-click behavior due to contextmenu/mouseup ordering ([#39416](https://github.com/microsoft/playwright/pull/39416))
- Fix header value parsing when header contains colons in value ([#39401](https://github.com/microsoft/playwright/pull/39401))
- Fix persistent context incorrectly using per-session isolation ([#39601](https://github.com/microsoft/playwright/pull/39601))
- Fix navigation protocol allowlist replaced with blocklist for better coverage ([#39600](https://github.com/microsoft/playwright/pull/39600))
- Fix malformed Unicode characters in MCP tool responses ([#39625](https://github.com/microsoft/playwright/pull/39625))
- Fix `toWellFormed()` compatibility with Node.js 18 ([#39674](https://github.com/microsoft/playwright/pull/39674))
- Fix empty `cdpHeaders` from environment overriding config file values ([#39866](https://github.com/microsoft/playwright/pull/39866))
- Fix file path validation in `browser_set_storage_state` tool ([#39881](https://github.com/microsoft/playwright/pull/39881))
- Fix Chrome for Testing executable location resolution in browser extension ([#39936](https://github.com/microsoft/playwright/pull/39936))
- Fix extension inactivity timers not armed for pending tabs ([#1443](https://github.com/microsoft/playwright-mcp/pull/1443))

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.69` · 2026-03-30 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.69)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
