---
title: "playwright-mcp v0.0.79"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.79"
version: "v0.0.79"
published: "2026-08-06"
type: "patch"
lang: "en"
summary: "browser_take_screenshot — WebP format — New type option to pick the image format (png, jpeg or webp); when unset, the format is inferred from the filename extension (#41152)"
---

# playwright-mcp v0.0.79

## What's New

### Tool Improvements

- **`browser_take_screenshot` — WebP format** — New `type` option to pick the image format (`png`, `jpeg` or `webp`); when unset, the format is inferred from the filename extension ([#41152](https://github.com/microsoft/playwright/pull/41152))
- **`--codegen` — more languages** — Code generation now supports `python`, `java` and `csharp` in addition to `typescript` ([#42106](https://github.com/microsoft/playwright/pull/42106))
- **Configurable settle delay** — New `--timeout-settle` flag (and `timeouts.settle` config option) to control how long to wait after each action for triggered work (navigations, requests) to settle, defaults to 500ms ([#41924](https://github.com/microsoft/playwright/pull/41924))

## Fixes

- Aria snapshot capture is skipped when the response discards it ([#41923](https://github.com/microsoft/playwright/pull/41923))
- New `--snapshot-boxes` flag (and `snapshot.boxes` config option) to enable bounding boxes in snapshots globally — previously this was only available per command ([#42102](https://github.com/microsoft/playwright/pull/42102))
- Reconnect to the browser after a disconnect ([#41966](https://github.com/microsoft/playwright/pull/41966))
- Report malformed JSON config instead of silently falling back to INI parsing ([#41909](https://github.com/microsoft/playwright/pull/41909))
- Clear the dialog modal state when a dialog is closed out of band ([#42032](https://github.com/microsoft/playwright/pull/42032))
- Detect downloads via the download event instead of guessing from `net::ERR_ABORTED` navigation errors ([#41933](https://github.com/microsoft/playwright/pull/41933))
- Surface the missing executable path when a browser isn't installed ([#41941](https://github.com/microsoft/playwright/pull/41941))
- Escape user input in codegen output ([#41962](https://github.com/microsoft/playwright/pull/41962))
- Removed the stale `--output-mode` CLI option ([#41833](https://github.com/microsoft/playwright/pull/41833))

### Browser Extension

- Validate `Host` and `Origin` headers on CDP relay WebSocket upgrades ([#42103](https://github.com/microsoft/playwright/pull/42103))
- Launch the Chrome profile that has the extension installed ([#41939](https://github.com/microsoft/playwright/pull/41939))
- Pass `noDefaults` for extension CDP connections ([#42119](https://github.com/microsoft/playwright/pull/42119))
- Mention `PLAYWRIGHT_MCP_EXECUTABLE_PATH` in the error shown when the browser executable is not found ([#42122](https://github.com/microsoft/playwright/pull/42122))
- Removed support for extension protocol v1 ([#41857](https://github.com/microsoft/playwright/pull/41857))

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.79` · 2026-08-06 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.79)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
