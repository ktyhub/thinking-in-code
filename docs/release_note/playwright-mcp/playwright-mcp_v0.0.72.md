---
title: "playwright-mcp v0.0.72"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.72"
version: "v0.0.72"
published: "2026-04-30"
type: "patch"
lang: "en"
summary: "browser_network_requests — Now returns a numbered list of requests; use the new browser_network_request tool with the index to fetch full details (headers/body) or a single part."
---

# playwright-mcp v0.0.72

## What's New

### Tool Improvements

- **`browser_network_requests`** — Now returns a numbered list of requests; use the new `browser_network_request` tool with the index to fetch full details (headers/body) or a single part. Both tools accept a `filename` option to write the output to a file ([#40447](https://github.com/microsoft/playwright/pull/40447), [#40454](https://github.com/microsoft/playwright/pull/40454))
- **`browser_run_code` → `browser_run_code_unsafe`** — Renamed to make the sandbox-escape implication explicit ([#40496](https://github.com/microsoft/playwright/pull/40496))

## Bug Fixes

- Surface unhandled rejections in `browser_run_code_unsafe` instead of crashing the server ([#40452](https://github.com/microsoft/playwright/pull/40452))
- Detect the installed extension in non-default Chrome profiles ([#40471](https://github.com/microsoft/playwright/pull/40471))
- Ignore browser config (channel, headless, viewport, etc.) when attaching to the extension ([#40475](https://github.com/microsoft/playwright/pull/40475))

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.72` · 2026-04-30 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.72)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
