---
title: "playwright-mcp v0.0.77"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.77"
version: "v0.0.77"
published: "2026-06-29"
type: "patch"
lang: "en"
summary: "browser_take_screenshot — scale option — Choose between CSS-pixel screenshots (smaller, device-consistent) and device-pixel screenshots (high resolution) (#41465)"
---

# playwright-mcp v0.0.77

## What's New

### Tool Improvements

- **`browser_take_screenshot` — `scale` option** — Choose between CSS-pixel screenshots (smaller, device-consistent) and device-pixel screenshots (high resolution) ([#41465](https://github.com/microsoft/playwright/pull/41465))
- **Configurable heartbeat timeout** — The heartbeat ping timeout is now configurable ([#41391](https://github.com/microsoft/playwright/pull/41391))

## Bug Fixes

- Redact secrets in console log artifacts ([#41515](https://github.com/microsoft/playwright/pull/41515))
- Never include `data:` URL payloads in snapshot or network output ([#41450](https://github.com/microsoft/playwright/pull/41450))
- List a failed network request only once ([#41481](https://github.com/microsoft/playwright/pull/41481))
- Wait for the next pause or context closure in `browser_resume` ([#41293](https://github.com/microsoft/playwright/pull/41293))
- Pass the action timeout to `browser_wait_for` waitFor calls ([#41270](https://github.com/microsoft/playwright/pull/41270))
- Check the tracing state before stopping in `browser_stop_tracing` ([#41040](https://github.com/microsoft/playwright/pull/41040))
- Assign caps as an array for the legacy `--vision` flag ([#41253](https://github.com/microsoft/playwright/pull/41253))
- Use optional chaining for the nullable browser on disposal ([#41237](https://github.com/microsoft/playwright/pull/41237))
- Add a missing `.catch()` on the sessionLog write queue ([#41234](https://github.com/microsoft/playwright/pull/41234))

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.77` · 2026-06-29 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.77)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
