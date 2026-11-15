---
title: "claude-mem v15.18.4"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.18.4"
version: "v15.18.4"
published: "2026-11-15"
type: "patch"
lang: "en"
summary: "Claude Code gets claude-mem's rules and tools once (#6179). Before this, a Claude Code session got the same guidance from up to three places: the MCP server instructions, a memory block the local activation script wrote…"
---

# claude-mem v15.18.4

## Fixes

- **Claude Code gets claude-mem's rules and tools once** (#6179). Before this, a Claude Code session got the same guidance from up to three places: the MCP server instructions, a memory block the local activation script wrote into `CLAUDE.md`, and a pointer line to `RULES-AND-TOOLS.md` (whose timeline legend was never actually loaded). Now there is one path. `MY-RULES.md`, which your `CLAUDE.md` already imports, ends with an import of `RULES-AND-TOOLS.md`, and Claude Code loads it from there.
  - When that import chain is complete in Claude Code, the MCP server sends no instructions, and the SessionStart hook drops the `Access Claude-Mem Rules + Tools:` pointer line. The server only skips its instructions when the imported file holds exactly the text it would send.
  - Other hosts, and Claude Code users who never set up My Rules, are unchanged.
  - The worker adds the import to an existing `MY-RULES.md` once at startup, so current users get it without doing anything. It never creates the file. Writing `MY-RULES.md` also makes sure `RULES-AND-TOOLS.md` exists, so the import never points at a missing file.
  - `scripts/activate-progressive-memory-local.mjs` no longer writes the memory block into Claude's `CLAUDE.md`. Codex `AGENTS.md` keeps it, because `AGENTS.md` has no imports.
- **Worker listing endpoints stop at offset 10,000** (#6083, thanks @xunguangzlj-cloud). `/api/observations`, `/api/summaries`, `/api/prompts`, the session feeds and `/api/tool-uses` used to pass any offset straight into SQLite, where a deep offset makes the database scan and throw away every skipped row. They now answer 400 above 10,000 with the same message the jobs listing uses. The viewer feeds mark their last page instead, so the viewer shows "this list stops at the newest 10,000 items" rather than an error.
- **Folders whose names start with two dots stay inside excluded directories** (#6062, thanks @Afloat16). A child folder named like `..cache` was mistaken for a parent-directory path, so it slipped past the exclusions for observer sessions, the plugin cache and the marketplace runtime, and a marker under Claude's config folder could become a project root.
- **Cost report uses your name, not the maintainer's** (#6085, thanks @MaxWang007). The remaining name-based checks ("Blocked on <name>", relays, human-review detection) take the name from `--owner-name`, then `ACR_OWNER_NAME`, then `git config user.name`, and use name-free patterns when none is set. A first name alone also matches, and non-Latin names work.

## Performance

- **Faster project-filtered session lists in the viewer** (#6053, thanks @Afloat16). A new index on project, start time and id lets the viewer read one page of a long project history without sorting every session. Existing databases get the index on the next worker start.
- **Lower peak memory during the near-duplicate sweep** (#6052, thanks @Afloat16). Pair counting now works one title at a time instead of holding every shared-title pair in memory. Results are the same.

## Docs and examples

- **Vercel Chat SDK example for explicit project memory** (#6084, thanks @Kirat0201). A local, bearer-authenticated chat can save a note, search its project and fetch an observation. No model and no automatic capture. It needs `CLAUDE_MEM_WORKER_URL` set, and the guide shows how to find your worker's port.
- README logo mark updated (#6104).

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.18.4` · 2026-11-15 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.18.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
