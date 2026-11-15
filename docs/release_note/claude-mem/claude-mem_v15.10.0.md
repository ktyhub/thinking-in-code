---
title: "claude-mem v15.10.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.10.0"
version: "v15.10.0"
published: "2026-11-05"
type: "minor"
lang: "en"
summary: "Onboarding finds your existing work. Setup now leads with discovering your existing work, rules and focus from your transcripts."
---

# claude-mem v15.10.0

## What's new

**Onboarding finds your existing work.** Setup now leads with discovering your existing work, rules and focus from your transcripts. The main button is "Discover My Work, Rules & Focus", and "Skip this step" is a smaller action under it. The "Share anonymous usage statistics to help improve your Claude-mem experience" box starts checked; unchecking it is kept, and nothing is sent until you press Discover. When hosted setup is busy, claude-mem checks capacity before uploading, remembers the cooldown across restarts and lets you finish setup. (#5270, #5308, #5384 by @thedotmack)

**Turn memory capture off.** New `CLAUDE_MEM_OBSERVER_ENABLED` setting and a Memory capture toggle. Set it to `"false"` to stop new observation and summary model calls while keeping existing memories, search and session-start context. (#5353 by @tarunbad)

**Pick the observer per tool.** New `CLAUDE_MEM_PROVIDER_BY_SOURCE` setting picks the observer provider per session source, for example Codex sessions on Codex and Claude Code sessions on Claude. (#5333 by @ankit4479)

**Long-lived Claude login.** `~/.claude-mem/.env` can now supply `CLAUDE_CODE_OAUTH_TOKEN`, so capture doesn't stop when the stored Claude Code login expires. Sessions paused for auth resume once a credential is shown to work. (#5372 by @MeggDistribution, #5383 by @xunguangzlj-cloud)

**Combine modes.** Mode overrides now chain, so a language mode can combine with chill, like `code--chill--ko`. (#5349 by @BaeJinSeop)

**Doctor explains a missing observer.** `npx claude-mem doctor` now reports an unavailable observer provider and the worker's dependencies, instead of saying all is well. (#5366 by @parveen0029)

**Viewer sync and My Work.** Viewer sync recovery is now on main: faster bounded views, truthful sync status, shared My Work state between devices, and recovery of remote changes. On the cloud viewer, My Work links to Account & billing. (#5410, #5416 by @thedotmack)

## Reliability

- The worker waits for a free slot instead of failing when the pool of 10 is full, and releases an idle slot when other sessions are waiting. (#5386 by @balabommablock-cpu, #5388 by @0xABCD01)
- Hung context-reader requests now time out, so a stuck read no longer stops observations. (#5387 by @markjoin123)
- Failure tracking restarts when the kind of failure changes. (#5380 by @xunguangzlj-cloud)
- Codex exits are classified only from their recent stderr. (#5310 by @2023Anita)
- The observer no longer inherits a parent gateway's model names, and keeps your Claude beta opt-out. A model refusal is reported as a model outage. (#5316 by @sayedrisat, #5317 by @parveen0029, #5348 by @tarunbad)
- SSE streams keep their framing across chunk boundaries, and the viewer ignores frames it can't parse. (#5367 by @Afloat16, #5364 by @DeryFerd)
- Capped error-body readers release their locks. (#5340 by @Afloat16)
- Bug reports fall back to the template when the SDK doesn't finish a report. (#5302 by @liuyinchu)

## Install and platforms

- Windows: the worker daemon starts without PowerShell. (#5351 by @REI-330)
- Copilot CLI: the MCP server is registered in `~/.copilot/mcp-config.json`, where Copilot CLI reads it. (#5305 by @tanishqbaweja)
- Goose on Windows: claude-mem is registered in `%APPDATA%\Block\goose\config`. (#5323 by @tanishqbaweja)
- Devin: context is injected again after Devin compacts a session. (#5314 by @patrickballard)
- Kimi: hook commands stay valid TOML when a path contains a quote. (#5363 by @DeryFerd)
- Docker: the server and worker share the same BullMQ queue prefix, and the docs list tested Redis-compatible servers. The sync-api container runs as a non-root user. (#5389, #5390 by @murtazayusuf, #5331 by @DeryFerd)
- Process identity probes are pinned to UTC. (#5312 by @LuckVd)

## Import and search

- Prompt import reads the Codex and OpenCode profiles set by `CODEX_HOME` and `XDG_DATA_HOME`, includes committed OpenCode WAL updates, recognizes OpenCode tool inputs as agent-authored, excludes copied Codex fork prompts, decodes JSON tool strings, and keeps hook prompts when session reads are incomplete. (#5303, #5297, #5304, #5300, #5369, #5301 by @rudycelekli)
- Adoption keeps the real checkout paths before remapping memories, and checkout identity keeps whitespace. (#5296 by @rudycelekli, #5368 by @liuyinchu)
- Folder searches match relative backslash paths and extensionless files like `Makefile`. (#5309 by @rudycelekli, #5343 by @liuyinchu)
- Chroma's semantic fallback query no longer includes `doc_type`. (#5355 by @0xABCD01)
- Compact times handle the U+202F separator before AM/PM. (#5356 by @kevin9327)

## Privacy and security

- More secrets are redacted before they are stored: Groq, xAI, NVIDIA NIM, Runcrate, Google OAuth (`ya29.`), Linear, Notion, Supabase, Sentry, Databricks and HashiCorp Vault tokens. (#5298, #5342, #5345, #5352, #5373 by @kevin9327; #5327 by @DeryFerd)
- Log values with line breaks are escaped so they can't forge a log record. (#5328 by @DeryFerd)
- Sync: a 402 verify response drops the cached verdict, the per-isolate auth memo is bounded, and advisory sockets close when their auth verdict lapses. (#5329, #5332 by @DeryFerd; #5358 by @REI-330)
- Input bounds on batch id arrays, timeline depth, the job listing offset and empty URL modifiers; numeric-string ids are accepted in `/api/observations/batch`. (#5360, #5362, #5361, #5330 by @DeryFerd; #5341 by @Afloat16; #5336 by @ryrenz)
- Hermes strips memory tags with a linear scan. (#5320 by @REI-330)

## Docs

- Development prerequisites and test instructions match current tooling; the README lists every built-in language mode; Simplified Chinese and Vietnamese READMEs are synced. (#5324 by @POWDER-RANGER, #5334 by @BaeJinSeop, #5322 by @h6rime, #5391 by @vietmy1711)
- Test fix for macOS SQLite. (#5313 by @patrickballard)

Thank you to everyone who contributed to this release.

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.10.0` · 2026-11-05 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
