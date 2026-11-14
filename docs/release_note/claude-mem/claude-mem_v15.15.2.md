---
title: "claude-mem v15.15.2"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.15.2"
version: "v15.15.2"
published: "2026-11-10"
type: "patch"
lang: "en"
summary: "Antigravity no longer denies every tool call after an upgrade from 14.x (#5670): an in-place upgrade from an older install left a PreToolUse hook (and a PreInvocation context hook) in /.gemini/config/hooks.json."
---

# claude-mem v15.15.2

## Critical fix

- **Antigravity no longer denies every tool call after an upgrade from 14.x (#5670):** an in-place upgrade from an older install left a `PreToolUse` hook (and a `PreInvocation` context hook) in `~/.gemini/config/hooks.json`. agy kept firing it before every tool call, the current adapter answered with no decision, and agy denied every call until you re-ran install. Now the Antigravity installer finds those stale entries and migrates the file in place with the same merge install performs. It writes only when something is stale, never throws, and leaves a corrupt file untouched. The worker runs this heal on startup and on Antigravity hook calls, so updating is enough. Thanks to @jiezhiyong for the report (#5665) and to @0xABCD01 for the fix.

## Fixes

- **Antigravity:** a model call that only called tools no longer becomes an "AntigravityProvider returned Completed" memory. Only a step with a real reply is recorded, so the observer stops writing false memories like "stuck in a retry loop" (#5667, thanks @ryrenz; reported in #5665 by @jiezhiyong).
- **Redaction:** with `CLAUDE_MEM_REDACT_ENABLED=true`, server capture now applies the configured redactor before the capture leaves your machine, and to session and event metadata before it is stored. Before, an untagged credential in an opening prompt or tool payload could be sent over HTTP unredacted (#5774, thanks @Afloat16).
- **Doctor:** `claude-mem doctor` now checks the macOS launcher's code signature. A launcher macOS would kill gets a clear hint (`bun upgrade` first when Bun is below 1.4.1, otherwise `npx claude-mem install` rebuilds it); a launcher that still runs only warns (#5657, thanks @Kirat0201).
- **cmem-pro 0.2.1:** the Cowork plugin version is bumped so installed copies pick up the redaction and failed-capture fixes made after 0.2.0.

## New

- **Turkish My Work:** the My Work page is now available in Turkish (#5656, thanks @Kirat0201).

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.15.1...v15.15.2

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.15.2` · 2026-11-10 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.15.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
