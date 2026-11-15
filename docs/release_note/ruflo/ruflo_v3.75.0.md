---
title: "ruflo v3.75.0"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.75.0"
version: "v3.75.0"
published: "2026-11-10"
type: "minor"
lang: "en"
summary: "This release fixes 25 issues reported and the Dream Cycle."
---

# ruflo v3.75.0

This release fixes 25 issues reported by @sparkling and the Dream Cycle.

## Fixes

- **Atomic writes write every byte** (#4888, #4909). `writeFileAtomic` used to check one `writeSync` call. On a short write it renamed a truncated file into place and still reported success.
- **Failed pattern saves are reported** (#4880, #4913). `flushToDisk()` returns `false` when the write fails, keeps the patterns marked unsaved, and records `lastFlushError` in the persistence status.
- **`memory_search_unified`** (#4876, #4913):
  - It reports which namespaces failed (`namespaceErrors`).
  - `searchTime` is now how long the search took.
  - It searches up to 4 namespaces at a time, with ranking unchanged.
- **Pattern search** (#4714, #4916). A search that finds nothing returns `degraded: false` and a plain "no match". A failed read is now reported as an error, not as an empty result.
- **`aidefence_learn`** (#4862, #4914). Feedback about personal data (PII) is no longer recorded as a missed prompt injection. `retract: true` removes exactly one recorded miss.
- **AIDefence CORE-005** (#4715, #4915; `@claude-flow/aidefence` 3.1.2). Prose that ends a sentence with "…where you are now." is no longer flagged as role switching. Disguised forms are still caught.
- **Tool schemas state the real limits** (#4886, #4892, #4887, #4912):
  - `aidefence_scan.input` and `agentdb_hierarchical-store.value` are limited to 10000 UTF-16 code units.
  - The `hooks_post-task` identifier fields now state the allowed characters and length.
- **Exact model IDs for `agent_spawn`** (#3215, #4917). It accepts exact provider model IDs, not just the five built-in aliases.
- **The configured embedding model is used** (#2305, #4919). Memory reads `.claude-flow/embeddings.json`. A store that already holds vectors keeps their dimension.
- **Durable state follows the project root** (#2633, #4928; `@claude-flow/cli-core` 3.7.7). Memory, autopilot, neural and metrics state resolve to the project root when you run commands from a subdirectory.
- **QueenCoordinator** (#4902, #4908; `@claude-flow/swarm` 3.0.5). It now honours `enableFailover` and `maxDelegationAttempts`.
- **LearningBridge** (#4884, #4924; `@claude-flow/memory` 3.3.0). An insight accessed after consolidation starts a new trajectory, so it keeps contributing learning signal.
- **Generated AGENTS.md** (#3153, #4918). It names only MCP tools that are registered. A test checks every template.

## New

- **`ruflo start all`** (#1177, #4918). Runs project init if needed, then memory init, starts the daemon if one isn't running, then starts the session.
- **`ruflo plugins host install|update|uninstall|enable|disable|sync|status`** (#2854, #4921). Manages Claude Code and Codex plugins together. It never runs through a shell, and `--dry-run` prints the exact argv.
- **Dual init** (#2638, #2640, #4925; `@claude-flow/codex` 3.0.8):
  - AGENTS.md is the single source for the shared sections, and CLAUDE.md imports it.
  - `init` skips what the installed ruflo plugins already provide. Pass `--full` to copy everything.
- **Memory scopes** (#1227, #4923). An optional `scope` (`project`, `local`, `user`) on memory store, retrieve and search, plus a `memory_list_scopes` tool.
- **Inventory tools**:
  - `agentdb_hierarchical-list` and `agentdb_hierarchical-get` (#4712, #4924) page through the persisted store, including past the 5,000-entry cache.
  - `agentdb_pattern-list`, `agentdb_skill-list`, `agentdb_skill-get` and `agentdb_hierarchical-stats` (#4707, #4926).
- **AutoMemory** (#4851, #4852, #4922):
  - The hook finds `@claude-flow/memory` by itself in fresh worktrees.
  - A key with duplicate entries now lists the matching ids.
  - New `read --all`, `read-id` and `dedupe` commands. `dedupe` only previews unless you pass `--apply`.
- **Plugin PII toggle** (#4861, #4920). Federation, intelligence and console have a separate `piiGuard` option, so personal-data refusals can be turned off while secret screening stays on.

## Also included

- zod ^4.6.7 across claims, hooks and 12 v3 plugins (#4904).
- Unregistered optional dependencies removed from plugins (#4901).

## Packages released with this train

`@claude-flow/memory` 3.3.0, `@claude-flow/cli-core` 3.7.7, `@claude-flow/aidefence` 3.1.2, `@claude-flow/swarm` 3.0.5, `@claude-flow/codex` 3.0.8, `agentdb` 3.7.7 (#3175: a native better-sqlite3 load failure now warns instead of printing a green success line).

---

> **Source** [ruvnet/ruflo](https://github.com/ruvnet/ruflo) · `v3.75.0` · 2026-11-10 · [upstream release](https://github.com/ruvnet/ruflo/releases/tag/v3.75.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
