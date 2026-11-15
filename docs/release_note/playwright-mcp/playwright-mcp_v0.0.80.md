---
title: "playwright-mcp v0.0.80"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.80"
version: "v0.0.80"
published: "2026-09-01"
type: "patch"
lang: "en"
summary: "browser_start_recording / browser_stop_recording (opt-in via --caps=devtools) — Record actions that the user performs manually in the browser and return them as Playwright code."
---

# playwright-mcp v0.0.80

## What's New

### New Tools

- **`browser_start_recording` / `browser_stop_recording`** (opt-in via `--caps=devtools`) — Record actions that the user performs manually in the browser and return them as Playwright code. Useful when the user wants to demonstrate a flow instead of describing it ([#42359](https://github.com/microsoft/playwright/pull/42359))

## Bug Fixes

- The default `--codegen` language is inferred from the environment ([#42150](https://github.com/microsoft/playwright/pull/42150))
- Honor `--user-data-dir` in extension mode ([#42190](https://github.com/microsoft/playwright/pull/42190))
- Do not treat orphaned browser preferences entries as an installed extension ([#42224](https://github.com/microsoft/playwright/pull/42224))
- `browser_take_screenshot` returns the original screenshot bytes instead of silently downscaling them to model-specific limits ([#42406](https://github.com/microsoft/playwright/pull/42406))
- Drop the cached browser backend after `browser_close` with a shared browser context, so subsequent tool calls from the same client no longer fail ([#42365](https://github.com/microsoft/playwright/pull/42365))
- When connected to a remote endpoint, `browserInfo` reports the browser actually running remotely instead of the configured one ([#42228](https://github.com/microsoft/playwright/pull/42228))
- Do not clobber the `chromiumSandbox` setting from the config file ([#42288](https://github.com/microsoft/playwright/pull/42288))
- Do not run the heartbeat for HTTP clients that have not opened an event stream ([#42189](https://github.com/microsoft/playwright/pull/42189))
- The internal `/killkillkill` endpoint is no longer registered outside of tests ([#42133](https://github.com/microsoft/playwright/pull/42133))

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.80` · 2026-09-01 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.80)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
