---
title: "playwright-mcp v0.0.76"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.76"
version: "v0.0.76"
published: "2026-06-10"
type: "patch"
lang: "en"
summary: "browser_video_show_actions / browser_video_hide_actions — Overlay action annotations on the recorded video, or hide them again (#40914)"
---

# playwright-mcp v0.0.76

## What's New

### New Tools

- **`browser_video_show_actions` / `browser_video_hide_actions`** — Overlay action annotations on the recorded video, or hide them again ([#40914](https://github.com/microsoft/playwright/pull/40914))

### Tool Improvements

- **Remote endpoint** — `remoteEndpoint` now accepts a `ConnectOptions` object, not just a URL string ([#40964](https://github.com/microsoft/playwright/pull/40964))
- **`--output-max-size`** — Cap the size of tool responses, with post-response disk eviction of oversized output ([#41031](https://github.com/microsoft/playwright/pull/41031))
- **`--browser`** — Support `moz-firefox` BiDi channels ([#41126](https://github.com/microsoft/playwright/pull/41126))

## Bug Fixes

- Support `remoteHeaders` for the remote browser endpoint ([#40828](https://github.com/microsoft/playwright/pull/40828), [#41156](https://github.com/microsoft/playwright/pull/41156))
- Use `waitUntil: 'commit'` when navigating back/forward ([#41153](https://github.com/microsoft/playwright/pull/41153))
- Report invalid tool arguments instead of failing opaquely ([#40979](https://github.com/microsoft/playwright/pull/40979))
- Use a writable cache directory for MCP user data instead of the browsers path ([#40961](https://github.com/microsoft/playwright/pull/40961))
- Disconnect the tracked browser when the browser tracker is disposed ([#40967](https://github.com/microsoft/playwright/pull/40967))
- Report a missing `ffmpeg` distinctly from a missing browser ([#40867](https://github.com/microsoft/playwright/pull/40867))
- Don't mark the response as closed when there are no open tabs ([#40743](https://github.com/microsoft/playwright/pull/40743))
- Validate user-provided regex patterns in MCP tools ([#40752](https://github.com/microsoft/playwright/pull/40752))
- Pass the `time` parameter to `page.evaluate` when waiting for a timeout ([#41037](https://github.com/microsoft/playwright/pull/41037))
- Add path-traversal checks to static file serving routes ([#40715](https://github.com/microsoft/playwright/pull/40715))

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.76` · 2026-06-10 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.76)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
