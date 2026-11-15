---
title: "claude-mem v15.10.1"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.10.1"
version: "v15.10.1"
published: "2026-11-06"
type: "patch"
lang: "en"
summary: "A bug-fix release. No new settings and no breaking changes."
---

# claude-mem v15.10.1

A bug-fix release. No new settings and no breaking changes.

## Reliability

- Context reads keep working when the database's `-wal` and wal-index files are missing. (#5432 by @0xABCD01)
- Queued batches are kept, not dropped, when Claude replies with a 429 rate limit. (#5430 by @markjoin123)
- A stalled session's buffered work is discarded once its resume attempts are used up, so it no longer blocks the queue. (#5414 by @0xABCD01)
- SSE frames queued for a slow consumer are now bounded. (#5395 by @liuyinchu)
- The observer response deadline has its own constant. (#5406 by @lunetics)
- The observer fills missing proxy settings from your Claude user settings. (#5401 by @markjoin123)
- `/api/processing-status` reports sessions the stall pacer abandoned and the observer's last successful store time. (#5409, #5408 by @xunguangzlj-cloud)
- Settings: SessionStart toggles persist, and zero context counts are accepted via `POST /api/settings`. (#5393 by @0xABCD01)

## Security

- All TeamBrain routes reject requests from foreign origins. (#5411 by @DeryFerd)
- Perplexity API keys are redacted. (#5407 by @mertkayacs)

## Viewer and My Work

- My Work sharing stays on for the cloud viewer. (#5433 by @thedotmack)
- Unparseable work-view frames are dropped instead of throwing. (#5412 by @DeryFerd)
- Hosted usage reaches PostHog again (`randomUUID` is called on `crypto`). (#5421 by @thedotmack)
- Windows file paths are shortened on observation cards. (#5419 by @Plastic-time)

## Search and smart-read

- Dumb search keeps fetchable memories ahead of prompts. (#5397 by @liuyinchu)
- Search recalls supplementary Han and extended Katakana characters. (#5396 by @liuyinchu)
- Outlines include C and C++ unions, and Zig struct, enum, union and opaque declarations. (#5403, #5402 by @L4XB)

## Install, CLI and platforms

- The installer writes MCP JSON configs atomically. (#5413 by @DeryFerd)
- Agent-driven installs are guided into the user's browser setup, and the docs list the terminal prompts an agent must relay. (#5379 by @thedotmack)
- Cursor: reads and searches are recorded through Cursor's `postToolUse` hook. (#5399 by @Lumea-art)
- `--help` after a verb shows help instead of running the command. (#5394 by @Bortlesboat)
- Windows: the data directory removal command works, and integration tests stay out of the fast lane. (#5420, #5418 by @Plastic-time)

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.10.0...v15.10.1

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.10.1` · 2026-11-06 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.10.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
