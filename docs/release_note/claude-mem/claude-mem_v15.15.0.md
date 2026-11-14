---
title: "claude-mem v15.15.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.15.0"
version: "v15.15.0"
published: "2026-11-10"
type: "minor"
lang: "en"
summary: "The worker no longer freezes on its first image (#5601): a worker started from a plugin root with no node_modules (the Claude Code marketplace clone) could freeze for good."
---

# claude-mem v15.15.0

## Critical fix

- **The worker no longer freezes on its first image (#5601):** a worker started from a plugin root with no `node_modules` (the Claude Code marketplace clone) could freeze for good. Bun's auto-install loaded sharp's wasm build, whose first call blocks Bun's main thread, so timers and `/api/health` stopped and hooks kept reclaiming the worker. Now every worker, server and plugin spawn runs `bun --no-install`, the installer starts the worker from the plugin cache copy where it just ran `bun install`, and the media converter refuses sharp's wasm build before decoding, so a worker started some other way reports `decoder_unavailable` instead of freezing (#5653). Thanks to @vieGPT for the report and to @Kirat0201 for reproducing it and proposing the approach.

## New

- **One Rules + Tools line at session start:** the SessionStart header (project and time, Mode, Legend, Format, Fetch, Stats) is now one line, `Access Claude-Mem Rules + Tools: ~/.claude-mem/RULES-AND-TOOLS.md`. That file holds the format, legend, mode, how to fetch details, the work-state rule and memory-use guidance, and is rewritten only when its text changes. The terminal banner now ends on a closing line with the viewer link and how many timeline lines are shown (#5654).
- **Savings settings removed:** the context header no longer prints a savings line, so `CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_AMOUNT` and `CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_PERCENT` and their viewer toggle are gone. Settings files that still carry them load as before (#5654).

## Fixes

- **Installer:** the setup state is prepared before the browser opens, so a quick first choice is no longer erased and the installer no longer waits for a choice you already made (#5631, thanks @Afloat16).
- **Context:** the prior-session reply shown at startup is read from the end of the transcript instead of loading the whole file, so long sessions start faster and very large transcripts keep that context (#5625, thanks @Afloat16).
- **Terminal banner:** when the banner cut lands exactly on a line boundary, the whole line that fits is kept, and the line count also counts rows in the plain block format (#5654).
- **Tests:** the server's semantic context route probes the embedding model only where pgvector exists, so CI no longer times out on a cold model download (#5659).

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.14.0...v15.15.0

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.15.0` · 2026-11-10 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.15.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
