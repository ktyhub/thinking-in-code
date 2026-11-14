---
title: "browser-use 1.0.2"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "1.0.2"
version: "1.0.2"
published: "2026-11-11"
type: "patch"
lang: "en"
summary: "Fixes on 1.0.1."
---

# browser-use 1.0.2

Fixes on 1.0.1.

- **MCP with Chrome's remote debugging off:** `browser-use --cli-mcp` now drives its own Chromium instead of stopping at the chrome://inspect steps, and tells your agent how to switch to your Chrome (tick "Allow remote debugging" at chrome://inspect/#remote-debugging, restart the MCP server).
- **Slow pages:** CDP calls from the CLI and MCP wait 20 s, like the agent. A page frozen by a JS dialog fails fast with an error that says to handle the dialog.
- **Windows:** `open()` in MCP `browser_exec` code reads and writes UTF-8.
- **Feedback:** tell us what broke with `browser-use feedback "..."` or `browser_use.feedback("...")`. The agent can call `report_issue(...)` and MCP clients get a `browser_feedback` tool. Text is scrubbed before it leaves.

```bash
uv add 'browser-use==1.0.2'
```

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `1.0.2` · 2026-11-11 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/1.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
