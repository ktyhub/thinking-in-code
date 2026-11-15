---
title: "claude-mem v15.11.1"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.11.1"
version: "v15.11.1"
published: "2026-11-07"
type: "patch"
lang: "en"
summary: "Signing in to cmem.ai Pro from the plugin returned a 500 error on every fresh plugin install. The plugin's install did not include better-auth, and its tables were never created."
---

# claude-mem v15.11.1

## Pro sign-in works again

Signing in to cmem.ai Pro from the plugin returned a 500 error on every fresh plugin install. The plugin's install did not include `better-auth`, and its tables were never created. The plugin now ships `better-auth` and `@better-auth/api-key` as dependencies and creates the auth tables the first time they are needed (#5455, thanks @0xABCD01).

## Fixes

- **Worker:** when a run pauses after a transport, rate-limit or similar abort, it now releases its claims, so the paused session no longer holds pending work that can never expire (#5457, thanks @akashpandey).
- **Worker:** an over-budget condense reply is clamped to the budget instead of being thrown away (#5452, thanks @xunguangzlj-cloud).
- **Worker:** retry-without-reasoning now recognizes OpenCode Go's "cannot be represented" error wording (#5439, thanks @akashpandey).
- **Hooks:** the Stop hook reads Claude Code's `last_assistant_message` directly and skips reading the transcript (#5449, thanks @xunguangzlj-cloud).
- **Context:** the OAuth hint and gateway fallback notice are reserved before the context is fitted, so SessionStart context stays under Claude Code's 10,000-character limit (#5441, thanks @liuyinchu).
- **Codex:** stale app-server child processes are recycled on the auth recovery probe (#5438, thanks @akashpandey).
- **Installer:** the Goose YAML config is written atomically, so an interrupted install or uninstall can no longer leave a truncated config.yaml (#5442, thanks @DeryFerd).
- **Tests:** the sync matrix waits for the page body before reading it, fixing a browser readiness race (#5448).

## Also in this release

- **My Work:** the scheduled refresh check interval is now a setting (#5437, thanks @weirui828).
- **Docs:** one story across the README and docs: your coding agent forgets between sessions, Claude-Mem remembers (#5447).
- **Docs:** README translations keep fenced code examples and single-quoted links intact (#5458, thanks @Afloat16).

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.11.0...v15.11.1

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.11.1` · 2026-11-07 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.11.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
