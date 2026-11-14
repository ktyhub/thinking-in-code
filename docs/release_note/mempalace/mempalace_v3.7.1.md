---
title: "mempalace v3.7.1"
project: "mempalace"
repo: "MemPalace/mempalace"
tag: "v3.7.1"
version: "v3.7.1"
published: "2026-08-14"
type: "patch"
lang: "en"
summary: "Post-3.7.0 integrity patch: ingest no longer hangs on non-regular files, incomplete mines can be retried instead of permanently skipped, chromadb reconnect no longer rewinds the HNSW index, and MCP releases the writer…"
---

# mempalace v3.7.1

## v3.7.1 — mine completeness, reconnect integrity, clean shutdown

Post-3.7.0 integrity patch: ingest no longer hangs on non-regular files, incomplete mines can be retried instead of permanently skipped, chromadb reconnect no longer rewinds the HNSW index, and MCP releases the writer lease on SIGTERM/SIGHUP.

### Bug Fixes

- **Ingest commands no longer hang on a named pipe.** `os.walk` and `glob` list a FIFO as an ordinary filename and MemPalace decides what to read from the suffix, so a pipe called `notes.md` in a mined directory wedged `mine` in the kernel forever: opening a FIFO for reading waits for a writer that never arrives, and the `S_ISREG` refusal written on the next line could never run. `mine --mode convos`, `sweep`, `init`, `compress` and `split` blocked the same way through their own readers. The four affected opens now pass `O_NONBLOCK`, which makes the existing type check reachable — a pipe is refused on its mode, with or without a live writer — and the discovery walks drop non-regular entries with a `SKIP: <name> (not a regular file)` line, so the readers that use a plain `open()` never see one. Regular files read back byte-identical; the one case where the flag is not inert, a reader breaking a write lease, re-checks the file type and retries without it rather than dropping the file. `mine --mode extract` was already immune through its zero-size gate. (#2221)
- **Project re-mine no longer silently skips a partial or interrupted file.** Four related gaps in `process_file`: (1) multi-batch upserts now stamp every drawer with `chunk_total` so `file_already_mined` can tell "N of N committed" from "crashed after batch 1"; (2) `source_mtime` comes from the same `fstat` as the content read, so an append between read and a later re-stat cannot permanently hide the new tail; (3) a failed stale-drawer purge aborts the file instead of half-overwriting; (4) closets are purged even when the re-mine ends with zero drawers. A mid-file upsert failure also deletes the partial drawers and closets for that source before re-raising, so the next mine retries instead of treating the incomplete set as complete. (#2088, #2122, #2151)
- **Conversation mine completeness matches the project path.** Convo drawers now stamp `chunk_total`; a mid-batch upsert failure deletes that source's partial drawers before re-raising; `prefetch_mined_set` omits incomplete groups so the bulk "already filed" skip cannot permanently strand missing exchanges from an interrupted transcript mine. (#2183)
- **Stale chromadb System cache is cleared on palace reconnect.** After a peer or rebuild changes `chroma.sqlite3` on disk, both `mcp_server._get_client` and `ChromaBackend._client` drop chromadb's path-keyed `SharedSystemClient` cache before reopening — otherwise the stale in-memory HNSW segment is reused and can persist an outdated index over the peer's writes (index count going backwards). (#2002, #2028, #2026, #2032)
- **MCP releases the palace writer lease on SIGTERM/SIGHUP.** The lease was only released via `atexit`, which CPython skips on those signals' default disposition. SSH disconnect (SIGHUP) and container/systemd stop (SIGTERM) therefore left `mine_palace_*.lock` naming a dead PID until a contender's liveness check reclaimed it. `main()` now installs handlers that exit through `sys.exit`, so the existing `atexit` release path runs. (#2205)

A big thank-you to everyone who contributed to this release. Contributors and first-time contributors are credited below.

## What's Changed
* fix(tests): harden hybrid search against empty Windows Chroma reads by @igorls in https://github.com/MemPalace/mempalace/pull/2220
* docs(changelog): lead 3.7.0 with agent logstream + tighten notes by @igorls in https://github.com/MemPalace/mempalace/pull/2219
* fix: 3.7.1 critical patch — hang, re-mine honesty, stale Chroma cache by @igorls in https://github.com/MemPalace/mempalace/pull/2228
* fix(mcp_server): reset chromadb System cache on staleness reconnect (#2002) by @colorpanda82 in https://github.com/MemPalace/mempalace/pull/2026
* fix(chroma): reset chromadb System cache in ChromaBackend._client() on inode/mtime reopen by @colorpanda82 in https://github.com/MemPalace/mempalace/pull/2032
* fix(miner): close four re-mine safety gaps in process_file by @KeilerHirsch in https://github.com/MemPalace/mempalace/pull/2088
* chore(release): 3.7.1 by @igorls in https://github.com/MemPalace/mempalace/pull/2238
* chore: merge main into develop after 3.7.0 promotion by @igorls in https://github.com/MemPalace/mempalace/pull/2242
* Release v3.7.1 — promote develop to main by @igorls in https://github.com/MemPalace/mempalace/pull/2241

## New Contributors
* @colorpanda82 made their first contribution in https://github.com/MemPalace/mempalace/pull/2026

**Full Changelog**: https://github.com/MemPalace/mempalace/compare/v3.7.0...v3.7.1

**Install:** `pip install -U mempalace==3.7.1`

---

> **Source** [MemPalace/mempalace](https://github.com/MemPalace/mempalace) · `v3.7.1` · 2026-08-14 · [upstream release](https://github.com/MemPalace/mempalace/releases/tag/v3.7.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
