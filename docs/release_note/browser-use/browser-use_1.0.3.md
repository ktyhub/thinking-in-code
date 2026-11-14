---
title: "browser-use 1.0.3"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "1.0.3"
version: "1.0.3"
published: "2026-11-12"
type: "patch"
lang: "en"
summary: "cli-mcp exits cleanly when the client closed the pipe before the reply (was exit 1 with ExceptionGroup)."
---

# browser-use 1.0.3

`pip install 'browser-use==1.0.3'`

- `--cli-mcp` exits cleanly when the client closed the pipe before the reply (was exit 1 with `ExceptionGroup`).
- The CLI runs its own Chromium when no browser has remote debugging on or there is no display, like `--cli-mcp`. It persists across calls; `browser-use --reload` closes it.
- A `BU_CDP_URL` nothing listens on fails in 3 s with one message naming the value and both ways out (was a 30 s wait).
- Chrome in another pid namespace (containers, Cursor on Linux) is accepted via its DevToolsActivePort.
- A cancelled cloud run copies downloads within 10 s instead of holding the browser up to 300 s per pass.
- `ActionResult` drops and warns about every ignored 0.x field, not only the first (#6379).

PR: https://github.com/browser-use/browser-use/pull/6383

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `1.0.3` · 2026-11-12 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/1.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
