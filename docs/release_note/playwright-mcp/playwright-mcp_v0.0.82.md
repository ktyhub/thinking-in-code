---
title: "playwright-mcp v0.0.82"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.82"
version: "v0.0.82"
published: "2026-09-18"
type: "patch"
lang: "en"
summary: "🎬 Smooth 60 fps, styleable videos — browser_start_video (opt-in via --caps=devtools) takes fps, so fps: 60 records smooth 60 fps videos instead of the default 25, and cursor: true renders an animated mouse cursor that…"
---

# playwright-mcp v0.0.82

## ✨ Highlights

- **🎬 Smooth 60 fps, styleable videos** — `browser_start_video` (opt-in via `--caps=devtools`) takes `fps`, so `fps: 60` records smooth 60 fps videos instead of the default 25, and `cursor: true` renders an animated mouse cursor that travels to each action point and stays visible between actions. `browser_video_show_actions` takes a `style` with `point`, `highlight` and `title` CSS declarations; the action point marker and the target highlight are now only shown when styled. ([microsoft/playwright#42752](https://github.com/microsoft/playwright/pull/42752), [microsoft/playwright#42758](https://github.com/microsoft/playwright/pull/42758))
- **🧰 WebMCP tools become real MCP tools** — the tools a page registers through the [WebMCP](https://webmachinelearning.github.io/webmcp/) API now show up right in the tool list as `webmcp_<tool>`, with the page's own input schema and annotations, so an agent can call them directly and let the page do the work instead of driving its UI. The list follows the current tab, and clients get a `tools/list_changed` notification when it changes. This replaces `browser_webmcp_list` / `browser_webmcp_call` from v0.0.81, which are no longer exposed over MCP. Tool names, descriptions, schemas and results come from the page, so treat them as untrusted input. Pass `--no-webmcp` (config `webmcp: false`, env `PLAYWRIGHT_MCP_WEBMCP=false`) to opt out. WebMCP is experimental, see [WebMCP in Chrome](https://developer.chrome.com/docs/ai/webmcp) for how to enable it. ([microsoft/playwright#42671](https://github.com/microsoft/playwright/pull/42671))
- **🌗 Switch between light and dark color scheme** ([microsoft/playwright#42243](https://github.com/microsoft/playwright/issues/42243)) — an agent working on a dark theme had no way to see it mid-session. The new **`browser_emulate_media`** tool emulates media features on the fly: `colorScheme`, `reducedMotion`, `forcedColors`, `contrast` and the `media` type (screen / print). Omitted parameters are left unchanged, `null` clears an override. ([microsoft/playwright#42668](https://github.com/microsoft/playwright/pull/42668))
- **📁 Absolute paths in results** ([microsoft/playwright#42497](https://github.com/microsoft/playwright/issues/42497)) — links to snapshots, screenshots, console logs and downloads are relative to the workspace root, which a client without one cannot resolve. Pass `--file-paths=absolute` (config `filePaths: "absolute"`, env `PLAYWRIGHT_MCP_FILE_PATHS=absolute`) to get absolute paths instead. ([microsoft/playwright#42673](https://github.com/microsoft/playwright/pull/42673))

## 🐛 Fixes

- `fix(mcp): keep upload modal and reject bad headers` — a failed `browser_file_upload` (e.g. a missing file) reports the error and keeps the file chooser open so it can be retried, and `browser_route` (opt-in via `--caps=network`) returns an error for a header that is not in the `Name: Value` form instead of setting a header named `""`. ([microsoft/playwright#42713](https://github.com/microsoft/playwright/pull/42713))
- `fix(chromium): bypass service workers on the storage state page` — `browser_storage_state` (opt-in via `--caps=storage`) no longer runs the site's own scripts, or fails when they redirect, for origins with an active service worker ([microsoft/playwright#42656](https://github.com/microsoft/playwright/issues/42656)). ([microsoft/playwright#42664](https://github.com/microsoft/playwright/pull/42664), [microsoft/playwright#42741](https://github.com/microsoft/playwright/pull/42741))

## 📦 Upgrading

Configs that use `@playwright/mcp@latest` pick this release up on the next client restart. To pin it:

```bash
npx @playwright/mcp@0.0.82
```

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.82` · 2026-09-18 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.82)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
