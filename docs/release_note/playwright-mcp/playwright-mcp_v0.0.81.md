---
title: "playwright-mcp v0.0.81"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.81"
version: "v0.0.81"
published: "2026-09-14"
type: "patch"
lang: "en"
summary: "browser_webmcp_list / browser_webmcp_call — List and call the tools a page registers through the WebMCP API, letting the page do the work instead of driving its UI."
---

# playwright-mcp v0.0.81

## What's New

### 🎉 New Tools

- **`browser_webmcp_list` / `browser_webmcp_call`** — List and call the tools a page registers through the [WebMCP](https://webmachinelearning.github.io/webmcp/) API, letting the page do the work instead of driving its UI. When a page has WebMCP tools, the page status reports how many are available ([#42613](https://github.com/microsoft/playwright/pull/42613)). WebMCP is experimental, see [WebMCP in Chrome](https://developer.chrome.com/docs/ai/webmcp) for how to enable it.

### Other Changes

- New `--profile-dir-name <name>` option (env `PLAYWRIGHT_MCP_PROFILE_DIR_NAME`) selects the Chrome profile to connect to in extension mode when the extension is installed in several profiles, for example `"Profile 1"` ([#42527](https://github.com/microsoft/playwright/pull/42527))
- Headless browsers launched by the server are now closed after one hour without tool calls; the next tool call launches a new one. Use `--idle-timeout <ms>` (config `timeouts.idle`, env `PLAYWRIGHT_MCP_IDLE_TIMEOUT`) to change the timeout, `0` disables it. Headed and attached browsers are not closed unless a timeout is set explicitly ([#42663](https://github.com/microsoft/playwright/pull/42663), [#42676](https://github.com/microsoft/playwright/pull/42676))
- `--image-responses` accepts `only`: a response that carries an image consists of the image parts alone, without the text part ([#42672](https://github.com/microsoft/playwright/pull/42672))

## Bug Fixes

- `browser_close` returns an error when the browser context is shared (`--shared-browser-context`) instead of breaking the calling client's session. This supersedes the v0.0.80 change that dropped the backend after `browser_close` ([#42495](https://github.com/microsoft/playwright/pull/42495))
- With `--shared-browser-context`, `browser_start_recording` / `browser_stop_recording` (opt-in via `--caps=devtools`) keep each client's recording separate instead of delivering one client's recorded actions to another ([#42622](https://github.com/microsoft/playwright/pull/42622), [#42627](https://github.com/microsoft/playwright/pull/42627))
- The file access check follows symlinks, so a symlink inside the workspace can no longer be used to read or write files outside the allowed roots ([#42628](https://github.com/microsoft/playwright/pull/42628))
- Explicitly named output files in a nested directory (e.g. `sub/shot.png`) no longer fail with `ENOENT`; `browser_file_upload` and `browser_drop` resolve relative paths against the workspace root ([#42540](https://github.com/microsoft/playwright/pull/42540))
- In extension mode with `PLAYWRIGHT_MCP_EXTENSION_TOKEN` set, a connection that never completes (e.g. the token belongs to another Chrome profile) now fails after 30 seconds with a hint instead of hanging the tool call forever ([#42525](https://github.com/microsoft/playwright/pull/42525))
- Disable the Chromium sandbox by default on Linux for the bundled Chromium build, which lacks the setuid sandbox helper ([#42490](https://github.com/microsoft/playwright/pull/42490))

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.81` · 2026-09-14 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.81)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
