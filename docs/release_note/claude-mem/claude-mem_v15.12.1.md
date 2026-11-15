---
title: "claude-mem v15.12.1"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.12.1"
version: "v15.12.1"
published: "2026-11-08"
type: "patch"
lang: "en"
summary: "macOS 12 (system SQLite 3.37): observations failed to save with 'SQL logic error' on every write. Statements that use RETURNING are now read with .all(), so observations store again (#5499, thanks @xunguangzlj-cloud;"
---

# claude-mem v15.12.1

## Two critical fixes

- **macOS 12 (system SQLite 3.37):** observations failed to save with "SQL logic error" on every write. Statements that use `RETURNING` are now read with `.all()`, so observations store again (#5499, thanks @xunguangzlj-cloud; reported in #5497 by @hamadikante0-ship-it).
- **CMEM Pro sign-in:** since 15.11.0, sign-in stopped at its first step with "Could not start OAuth login". The installer now accepts the setup id that cmem.ai echoes into its sign-in links (#5502; reported in #5493 by @luciano-fiandesio).

## Other fixes

- **Cursor:** the installer writes `hooks.json` atomically, so an interrupted install or uninstall can no longer leave Cursor with a broken hooks file (#5484, thanks @DeryFerd).
- **Worker security:** the operator processing route rejects requests from foreign localhost origins (#5482, thanks @DeryFerd).
- **Timeline:** a `#123` anchor is read as an observation id, not a date (#5479, thanks @rudycelekli).
- **Prompt import:** Claude Code transcripts and settings are read from `CLAUDE_CONFIG_DIR` when it is set (#5476, thanks @rudycelekli).
- **Server:** truncating event payloads in the generation prompt keeps emoji and other surrogate pairs whole (#5478, thanks @rudycelekli).
- **Server:** the legacy `SERVER_BETA` key is rotated when the canonical key is blank (#5477, thanks @rudycelekli).
- **OpenClaw:** `/claude-mem-search 4019` searches for the number instead of reading it as a result limit (#5474, thanks @rudycelekli).
- **OpenClaw:** worker session posts are stamped with platform source `openclaw` (#5475, thanks @rudycelekli).

## Also in this release

- **CI:** superseded runs are cancelled, and the 5-OS image matrix runs only for image changes (#5481).
- **Tests:** orphan-process snapshots skip unrelated system processes on Windows (#5501, thanks @liuyinchu).

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.12.0...v15.12.1

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.12.1` · 2026-11-08 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.12.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
