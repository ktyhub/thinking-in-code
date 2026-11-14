---
title: "AionUi v2.2.1"
project: "AionUi"
repo: "iOfficeAI/AionUi"
tag: "v2.2.1"
version: "v2.2.1"
published: "2026-09-01"
type: "patch"
lang: "en"
summary: "Turn-completed notifications now include the conversation's name, so you can tell at a glance which conversation finished instead of seeing identical 'finished responding' messages (long names are truncated)."
---

# AionUi v2.2.1

## Highlights

### Clearer conversation notifications
- Turn-completed notifications now include the conversation's name, so you can tell at a glance which conversation finished instead of seeing identical "finished responding" messages (long names are truncated).

### Sidebar tells "still working" from "needs your input"
- When a conversation pauses waiting on you — a tool permission request or an agent question (AskUserQuestion) — the sidebar now shows a distinct attention icon instead of the generic generating spinner, across the ACP, Codex, and Aion CLI backends.
- A desktop notification also fires for the waiting state (when the window is unfocused), naming the conversation when its title is known, so a paused agent no longer waits unnoticed.

### Fewer forced re-logins
- WebUI sessions now silently refresh on a 401 instead of interrupting you to sign in again.

### Engine updates (AionCore v0.1.72 → v0.2.1)
- `@@` mentions in a conversation are now routed to the session-message skill, with a fallback to session capability blocks when needed — smoother handoffs in team and multi-session work.
- Repository discovery now enumerates a repo's linked git worktrees, so multi-worktree projects are recognized more completely.
- Auth uses a dual-token refresh with singleflight for more reliable session renewal.
- **Breaking change:** skills are now delivered through an AionUi-owned view instead of being placed in the workspace directory — how skills are stored and loaded has changed.

### Bug Fixes
- Fixed the WebUI bridge WebSocket hammering reconnects after repeated failures (reconnect storm).
- Aligned the recipient/sender capability wording in `@@` blocks for consistency.

## What's Changed
* feat(notification): name the conversation in turn-completed notifications by @piorpua in https://github.com/iOfficeAI/AionUi/pull/4195
* feat(conversation): distinguish waiting-for-user state in sidebar and notify by @piorpua in https://github.com/iOfficeAI/AionUi/pull/4198
* chore: bump version to 2.2.1 by @piorpua in https://github.com/iOfficeAI/AionUi/pull/4200


**Full Changelog**: https://github.com/iOfficeAI/AionUi/compare/v2.2.0...v2.2.1

---

## 📦 Download

Installers are no longer published on GitHub. Download the latest build from the official website — **https://www.aionui.com/**

---

> **Source** [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) · `v2.2.1` · 2026-09-01 · [upstream release](https://github.com/iOfficeAI/AionUi/releases/tag/v2.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
