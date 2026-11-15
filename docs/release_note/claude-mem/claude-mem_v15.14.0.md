---
title: "claude-mem v15.14.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.14.0"
version: "v15.14.0"
published: "2026-11-09"
type: "minor"
lang: "en"
summary: "Focus areas in My Work: My Work now opens on an overview of your focus areas. Each area gets a card with bundled concept artwork, its goal and live request counts; open one to see its requests."
---

# claude-mem v15.14.0

## New

- **Focus areas in My Work:** My Work now opens on an overview of your focus areas. Each area gets a card with bundled concept artwork, its goal and live request counts; open one to see its requests. The setup reveal screen uses the same view. Artwork can be set to full, compact or off, and the images ship with the plugin, so nothing is generated or fetched at runtime (#5652).
- **claude-mem can update itself:** the worker checks once a day for the release promoted in `releases/promoted-release.json`, and installs only a newer version that npm shows as published by the release workflow with provenance, only while you have been away for a while. A failed update puts the previous version back. `npx claude-mem doctor` shows an Auto-update row. Turn it off with `CLAUDE_MEM_AUTO_UPDATE=false`; Claude Code's own update switches (`DISABLE_AUTOUPDATER` and friends) also turn it off. New installs register the marketplace with Claude Code's background update off, so only one updater runs. See the new auto-update docs page (#5500).
- **Startup context is the timeline alone:** the SessionStart message is now the header lines followed by the timeline, ending on the newest entry. The longer work-state and memory-use instructions moved to the claude-mem MCP server's instructions. The terminal banner has the same shape (#5487).
- **Faster hooks:** hooks run from a small hook-only bundle instead of the full worker bundle. One hook takes about half the time and memory; a dozen parallel hooks use about a quarter of the CPU (#5541, thanks @bulanovk).
- **Raw tool evidence search (opt-in, local):** with `CLAUDE_MEM_TOOL_USES_SEARCH_ENABLED=true`, a local `search` with `deep: true` looks through stored tool input and output when the observation search finds nothing, and returns `#T` IDs for `get_tool_uses` (#5167, thanks @ShitK).
- **Korean UI:** the viewer, My Work, setup and Observation TV can be shown in Korean (#5522, thanks @BaeJinSeop).

## Privacy and security

- **Context:** privacy filters now also apply to prior-session replies shown at startup (#5626).
- **Backups:** SQLite snapshots are created readable only by you (#5642).
- **Media:** cloud uploads stop starting after you opt out (#5622).
- **Redaction:** cookie header values are redacted, matching the Cowork shim (#5591, thanks @DeryFerd), and the Cowork shim now redacts the key shapes it still sent verbatim (#5543, thanks @DeryFerd).
- **Worker:** read routes that resolve a project from `cwd` are guarded (#5590, thanks @DeryFerd).
- **Auth:** stored access tokens that are not strings are rejected (#5506, thanks @Kirat0201).
- **Launcher:** macOS signing is verified before the launcher is put in place (#5503, thanks @Kirat0201).
- **Telemetry:** a saved consent choice is kept when identifiers are created (#5629).

## Installers and integrations

- **Atomic config writes:** Codex, OpenCode, OpenClaw, Kimi, Antigravity, Hermes, Grok Bot and OMP config and hook files are written atomically, so an interrupted install can't leave a broken file (#5592, #5593, #5594, #5595, #5596, #5597, #5598, #5599, thanks @DeryFerd).
- **Cursor:** `uninstall` removes the hooks and MCP server that `install --ide cursor` adds (#5584, thanks @tanishqbaweja).
- **Installer:** tool version probes, browser-setup worker requests and npm child processes are bounded, and npm descendants are terminated on timeout (#5634, #5638, #5644).
- **Installer:** existing host installs are found in their configured folders, non-executable paths are skipped during runtime discovery, Roo Code is detected by its marketplace ID, and a compatible tree-sitter on PATH is used during repair (#5552, #5556, #5560, #5576, thanks @Kirat0201).
- **Hooks:** hooks dispatch through the installed plugin resolver (#5504, thanks @Kirat0201).
- **OpenCode:** one bounded live observer handoff (#5621). **Pi:** tool results are normalized for evidence (#5605). **Goose:** executable paths are quoted in the YAML config (#5606). **Devin:** only its own tool-map entries are translated (#5512, thanks @Kirat0201). **Telegram:** sends are bounded (#5636).
- **Adapters:** explicit tool failures are kept as evidence (#5620).
- **DSH:** worker MCP error results are passed through and failures during response body reads are classified correctly (#5604, #5619).

## My Work

- Lists are ordered by original activity time, owner goals replay in event order, and conversation titles are scoped to their platform (#5580, #5589, #5561).
- Stale group evidence is removed when conversations move, invalid observation file entries are skipped, Git branch products are attributed to confirmed remote updates, and deleted Windows temp folders are recognized (#5587, #5585, #5533, #5554).
- Large histories and catalogs stay under SQLite's limits, deeply nested publishing results are handled, ledger snapshots use isolated atomic writes, and deliverable revisions that share a short hash are kept (#5588, #5549, #5579, #5582, #5536).
- The empty Rules page explains that it is waiting for an agent, the first live request is announced after an empty list, and setup memory search cards show the recorded agent (#5575, thanks @Kirat0201; #5564, #5574).

## Search, context and memory

- Smart search bounds source memory and accepts portable path filters; file-history ranking and index pages are faster (#5534, #5586, #5602).
- Search keeps multiline titles in one table row, keeps zero-valued date bounds, propagates SQLite failures before replacing corpora, and keeps distinct DSH results (#5583, #5520, thanks @Kirat0201; #5610, #5548).
- Context selects equal-time rows consistently, enforces mode filters on the server, respects a literal `~` and `+`-prefixed filenames in shell reads (#5608, #5623, #5633, #5510, thanks @Kirat0201).
- Knowledge corpora keep source evidence and identities, overlapping operations can't overwrite saved state, and cancelled queries are not saved (#5528, #5612, #5648).
- Smart navigation shows Rust traits, implementations and data definitions (#5531).
- Dedup reads are bounded and the IDF model is rebuilt from a locked snapshot (#5632, #5613).
- CLAUDE.md honors a zero observation count and `claude-md clean` keeps authored indentation (#5508, thanks @Kirat0201; #5566).

## Backup, restore, import and sync

- Restore refuses newer-schema snapshots and remote-worker restores before touching live data, reports committed swaps despite cleanup errors, keeps damaged recovery pairs, and protects the selected restore point from retention (#5649, #5562, #5624, #5630, #5532).
- Backups account for WAL pages on the snapshot volume (#5627).
- Import keeps observation provenance and reinforcement history, accepts a UTF-8 BOM, indexes legacy lists consistently and exits nonzero when rows are rejected (#5609, #5518, #5514, #5516, thanks @Kirat0201).
- Sync removes replica vectors after remote tombstones, refreshes vector metadata after project remaps, quarantines out-of-range numbers, rejects malformed ports and protects excluded folders in stale marketplace directories (#5647, #5645, #5611, #5573, #5525).
- Chroma persists checkpoints for prototype-named projects (#5607). Notion exports stay within UTF-8 request limits (#5529). Memory export keeps its deadline through the response body (#5547).

## Server and CLI

- Server: generation completions are metered once, reasoning corrections stay within the job's paid-send cap, operator generation state changes are locked, legacy ingestion routes get usage guards, event polling stops on disconnect, shutdown cleanup finishes after errors, and queue health reads are bounded during Redis outages (#5640, #5615, #5650, #5641, #5651, #5628, #5617).
- PostgreSQL: explicit TLS policy is kept, failed pool connections recover, idempotent writes skip inference, redelivered events are linked, and scoped job counts are not compared to global totals (#5637, #5537, #5538, #5546, #5559).
- CLI: completed generation jobs are not retried, key rotation stops when the previous key lookup fails, command-owned job pools close, signal-terminated children report failure, and search can query a worker without a local plugin (#5603, #5618, #5639, #5569, #5568).
- MCP: the npm MCP server launches in the invoking checkout, an empty explicit port is rejected, server MCP clients don't see unavailable local operations, and setup prints the server MCP endpoint (#5553, #5571, #5551, #5563).
- SQLite handles are closed when initialization fails; rejected worker run promises are observed; transient media cloud reads stay retryable (#5635, #5616, #5614).
- Smaller fixes: legacy SQLite timestamps show the right year, Unicode survives prompt-history shortening, single-quoted skip reasons are accepted, the Pro trial pitch is skipped for accounts already on trial or Pro, log tails stream correctly, and folder context generation reports incomplete work (#5557, #5550, #5558, #5545, #5526, #5565, #5572).

## Docs

- Translated READMEs have fixed links and headings (#5527, thanks @vietmy1711), and two old release notes now describe cloud sync and telemetry correctly (#5577, thanks @Kirat0201).

Thanks to @Afloat16 for the large majority of the fixes in this release.

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.13.0...v15.14.0

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.14.0` · 2026-11-09 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.14.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
