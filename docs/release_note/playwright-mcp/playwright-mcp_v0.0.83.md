---
title: "playwright-mcp v0.0.83"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.83"
version: "v0.0.83"
published: "2026-09-28"
type: "patch"
lang: "en"
---

# playwright-mcp v0.0.83

##  Bug Fixes

- `browser_find` takes `filename` to save matches to a file instead of the response ([microsoft/playwright#42077](https://github.com/microsoft/playwright/issues/42077)). ([microsoft/playwright#42968](https://github.com/microsoft/playwright/pull/42968))
- `browser_navigate` and `browser_reload` report a dialog opened during page load instead of timing out ([microsoft/playwright#42817](https://github.com/microsoft/playwright/issues/42817)). ([microsoft/playwright#42908](https://github.com/microsoft/playwright/pull/42908))
- The server no longer crashes when the browser is closed during a download ([microsoft/playwright#42831](https://github.com/microsoft/playwright/issues/42831)). ([microsoft/playwright#42922](https://github.com/microsoft/playwright/pull/42922))
- `browser_wait_for` reports when `time` is capped at 30 seconds ([#1767](https://github.com/microsoft/playwright-mcp/issues/1767)). ([microsoft/playwright#42932](https://github.com/microsoft/playwright/pull/42932))
- WebMCP tools no longer stay bound to a stale tab or frame ([microsoft/playwright#42816](https://github.com/microsoft/playwright/issues/42816)). ([microsoft/playwright#42821](https://github.com/microsoft/playwright/pull/42821))
- WebMCP tool calls work with Chromium 155+. ([microsoft/playwright#42915](https://github.com/microsoft/playwright/pull/42915))
- Snapshots quote accessible names that look like regexes, e.g. `"/home/"` ([microsoft/playwright#42807](https://github.com/microsoft/playwright/issues/42807)). ([microsoft/playwright#42811](https://github.com/microsoft/playwright/pull/42811))
- The Docker image reaps orphaned browser processes ([#1769](https://github.com/microsoft/playwright-mcp/issues/1769)). ([#1771](https://github.com/microsoft/playwright-mcp/pull/1771))

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.83` · 2026-09-28 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.83)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
