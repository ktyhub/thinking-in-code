---
title: "browser-use 1.0.1"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "1.0.1"
version: "1.0.1"
published: "2026-11-10"
type: "patch"
lang: "en"
summary: "MCP without Chrome: browser-use --cli-mcp on servers, containers and CI boxes now drives its own Chromium, installed on first use. When no browser can run, you get one clear error."
---

# browser-use 1.0.1

Fixes on 1.0.0.

- **MCP without Chrome:** `browser-use --cli-mcp` on servers, containers and CI boxes now drives its own Chromium, installed on first use. When no browser can run, you get one clear error.
- **`http_get`** in the CLI and MCP always fetches from your machine.
- **`--mcp` with `allowed_domains`** can no longer be bypassed through a cloud browser.
- **Windows:** piped CLI code and long MCP output are UTF-8.
- **Read-only HOME:** the error names the env var to set.
- **`timeout=`:** the final answer arrives before the deadline, and provider retries respect it.
- **0.x feature detection:** `hasattr(browser_use, '<removed 0.x name>')` returns `False`.
- **Isolation:** each run gets its own browser-harness workspace.

```bash
uv add 'browser-use==1.0.1'
```

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `1.0.1` · 2026-11-10 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/1.0.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
