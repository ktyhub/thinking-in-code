---
title: "playwright-mcp v0.0.78"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.78"
version: "v0.0.78"
published: "2026-07-09"
type: "patch"
lang: "en"
summary: "browser_find — Search the accessibility snapshot of the current page for text or a regular expression. Returns matching snapshot nodes with a few lines of surrounding context (like search snippets), which is cheaper…"
---

# playwright-mcp v0.0.78

## What's New

### New Tools

- **`browser_find`** — Search the accessibility snapshot of the current page for text or a regular expression. Returns matching snapshot nodes with a few lines of surrounding context (like search snippets), which is cheaper than capturing the whole snapshot when you only need to locate an element and its ref ([#41605](https://github.com/microsoft/playwright/pull/41605), [#41654](https://github.com/microsoft/playwright/pull/41654))

### Tool Improvements

- **Less verbose snapshots** — Accessibility snapshots are distilled to reduce noise and token usage ([#41604](https://github.com/microsoft/playwright/pull/41604))
- **Mobile & device emulation** — New `--mobile` flag and `--device` option to emulate mobile devices from the CLI ([#41657](https://github.com/microsoft/playwright/pull/41657))
- **Navigation status** — `browser_navigate` now surfaces non-2xx navigation status codes ([#41589](https://github.com/microsoft/playwright/pull/41589))

## Bug Fixes

- `browser_navigate` no longer crashes the response when navigation closes the last tab (e.g. privileged pages like `chrome://`) ([#41675](https://github.com/microsoft/playwright/pull/41675))
- Await page initialization before taking a screenshot immediately after opening ([#41646](https://github.com/microsoft/playwright/pull/41646))
- Enable the chromium sandbox for the default browser ([#41652](https://github.com/microsoft/playwright/pull/41652))
- Preserve the configured output directory for additional tab videos ([#41680](https://github.com/microsoft/playwright/pull/41680))
- Always pass `noDefaults` for CDP connections so attaching no longer applies unwanted default context options ([#41676](https://github.com/microsoft/playwright/pull/41676))
- Close the isolated HTTP client context on disconnect ([#41560](https://github.com/microsoft/playwright/pull/41560))
- Wait for the client event stream before sending server→client requests ([#41559](https://github.com/microsoft/playwright/pull/41559))

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.78` · 2026-07-09 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.78)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
