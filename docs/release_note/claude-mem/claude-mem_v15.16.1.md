---
title: "claude-mem v15.16.1"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.16.1"
version: "v15.16.1"
published: "2026-11-11"
type: "patch"
lang: "en"
summary: "Manual saves work again in projects with older manual sessions. In v15.16.0, save_memory (and POST /api/memory/save) returned HTTP 500 with UNIQUE constraint failed: sdk_sessions.memory_session_id in any project whose…"
---

# claude-mem v15.16.1

## Critical fix

- **Manual saves work again in projects with older manual sessions.** In v15.16.0, `save_memory` (and `POST /api/memory/save`) returned HTTP 500 with `UNIQUE constraint failed: sdk_sessions.memory_session_id` in any project whose manual session was created before 15.16.0 with an older session ID shape. Every save in that project failed. claude-mem now finds and reuses that older session instead of trying to create a duplicate. Deleted sessions still get a fresh ID, as in 15.16.0 (#5842).

If you are on 15.16.0, update to 15.16.1.

## New (both off by default)

- **Opt out of bundled skills:** list skill names in `CLAUDE_MEM_SKILLS_DISABLED` in `~/.claude-mem/settings.json`, as a comma-separated string or a JSON array (for example `"make-plan,do,smart-explore"`). The list is re-applied after installs, repairs and marketplace updates; new skills stay enabled unless you name them (#5837, thanks @liuyinchu, closes #5132).
- **Line anchors in file context:** set `CLAUDE_MEM_LINE_ANCHORS_ENABLED` to `"true"` and past observations about a file point at the line where that code is now (`@L123`), or say `(code changed since)` when it moved away. Nothing is guessed. With the setting off, nothing is recorded and the hook output is unchanged (#5841, thanks @devkancheti4-design, closes #4943).

## Fixes

- **OpenClaw:** the installer works on OpenClaw 2026.11.2 again, and current OpenClaw records prompts, injects context and summarizes sessions without the removed `before_agent_start` hook. Older OpenClaw versions behave as before (#5840, fixes #5838, reported by @JesseFranzen).
- **Warp uninstall:** `npx claude-mem uninstall` now removes the `claude-mem` MCP server that `install --ide warp` adds to `~/.warp/.mcp.json`, instead of leaving it pointed at the deleted plugin (#5839, thanks @tanishqbaweja).
- **Telemetry IDs:** recording a consent decision (installer prompt, `telemetry enable`, `telemetry disable`) keeps the saved anonymous ID, so one install no longer shows up as two. The `telemetry enable` disclosure now lists the events actually sent (#5836, thanks @wiesenthal).

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.16.0...v15.16.1

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.16.1` · 2026-11-11 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.16.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
