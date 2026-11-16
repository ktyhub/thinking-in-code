---
title: "playwright-mcp v0.0.64"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.64"
version: "v0.0.64"
published: "2026-02-06"
type: "patch"
lang: "en"
summary: "Browser profiles are now in-memory by default — every session starts clean with no leftover state."
---

# playwright-mcp v0.0.64

### 🕶️ Incognito by default

Browser profiles are now in-memory by default — every session starts clean with no leftover state.

Use `--persistent` to opt into a persistent profile, or `--profile=<path>` to specify a custom profile directory:

```sh
> playwright-cli open example.com                       # incognito, clean slate
> playwright-cli open example.com --persistent          # persistent profile
> playwright-cli open example.com --profile=./my-data   # custom profile directory
```

---

### 🔀 Simplified session management

The `--session` flag has been replaced with the shorter `-s=`. Session lifecycle is simplified — there is no longer a "stopped" state; sessions are either running or gone.

```sh
> playwright-cli -s=myapp open example.com
> playwright-cli -s=myapp click e5
> playwright-cli -s=myapp close
> playwright-cli -s=myapp delete-data
```

New session management commands replace the old `session-*` family:

```sh
> playwright-cli list        # list all sessions
> playwright-cli close-all   # close all browsers
> playwright-cli kill-all    # forcefully kill all browser processes
```

---

### 🏗️ Workspace-scoped daemon

Each workspace now gets its own daemon process, preventing cross-project interference and enabling direct daemon startup for faster, more reliable operation.

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.64` · 2026-02-06 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.64)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
