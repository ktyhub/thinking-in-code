---
title: "mempalace v3.8.0"
project: "mempalace"
repo: "MemPalace/mempalace"
tag: "v3.8.0"
version: "v3.8.0"
published: "2026-08-23"
type: "minor"
lang: "en"
summary: "Large palaces get fast and stay small in 3.8.0. Chroma metadata tools no longer cold-load HNSW, sqliteexact stops scanning and hydrating the whole palace for common reads, long-running Chroma servers stop rebuilding…"
---

# mempalace v3.8.0

## v3.8.0 — fast large palaces, lean MCP proxies, wakeable agents

Large palaces get fast and stay small in 3.8.0. Chroma metadata tools no longer cold-load HNSW, `sqlite_exact` stops scanning and hydrating the whole palace for common reads, long-running Chroma servers stop rebuilding their client on their own writes, and proxied MCP sessions no longer import a storage stack they never use. Agents also gain a persistent `logstream watch` primitive so coordination can wake a harness instead of relying on repeated five-minute waits.

### Performance

- **Chroma metadata reads skip the vector index.** On a 1.7 GB / 165k-drawer palace, wing-scoped `list_drawers(limit=20)` fell from **2.31 s and 1148 MB peak RSS to 0.01 s and 86 MB**. `list_drawers` and tunnel reads now query Chroma's SQLite metadata directly, push filters into SQL, and hydrate only the requested previews. (#2314)
- **`sqlite_exact` common reads no longer walk the whole palace.** On a live 167k-drawer / 166k-closet palace, `mempalace_status` fell from **6997 ms to 1045 ms** and warm `mempalace_search` from **6364 ms to 210–1600 ms**. Vector ranking is batched and cached, top-k documents are hydrated afterward, equality filters paginate in SQL, taxonomy results are cached, and `wing` / `room` / `hall` gain indexed generated columns without rewriting the 1.6 GB embedding table. (#2308, #2311, #2313)
- **Long-running Chroma servers stay flat instead of reloading HNSW on their own writes.** Across eight searches, measured RSS changed from **951 MB → 3522 MB before** to **940 MB → 965 MB after**. Replaced clients are closed, while genuine external database changes still trigger a rebuild. (#2307)
- **Hub-proxied MCP sessions are thin.** A plain stdio proxy now imports only the forwarding path and lazily loads the full server only if local fallback is needed. A proxied session runs at roughly **17 MB**, with import weight falling from about **80 MB to 24 MB**—avoiding roughly **3.9 GB** across a 50-agent fleet. (#2312)

### Agent coordination

- **`mempalace logstream watch` provides a durable wake-up loop.** It owns cursor advancement, supports repeated type filters, agent self-exclusion, persistent state files, idle exit, and NDJSON follow mode. Cursorless first runs start at the live tip; restarts may replay an event but do not silently miss one. (#2315)
- **The monitoring protocol now documents the safe resume cursor.** Cross-replica events are appended in arrival order, so `since_event_id`—not a wall-clock timestamp—is the resumable high-water mark. Tool descriptions and the shared coordination protocol now put that rule where agents use it. (#2315)

### Integrity and operations

- **`sync --apply` no longer deletes drawers whose source file it could not reach.** One `Path.exists()` separated keep from remove, so an unreadable directory, a path component that is a regular file, and a volume that is not mounted all answered the same as a deletion — a project mined from a mounted volume could lose every drawer to one `sync --apply` while the volume was away, and come back empty. Removal now asks for corroboration rather than a probe: a file that is not at its path is removable only while the palace can still see a source of its own, a regular file, in that same directory. Everything uncorroborated lands in a new `unresolved` bucket, never pruned and reported the way removals are. (#2320)
- **EmbeddingGemma cannot silently store NaN or zero vectors through CoreML auto-selection on Apple Silicon.** Auto mode avoids the affected provider/model pair, and every vector is checked for a finite, non-zero norm before use. CUDA, DirectML, and other models are unchanged. (#2283)
- **FTS5 auto-heal verifies and repairs the content table before rebuilding the index.** It uses Chroma's metadata copy as authority where possible and declines to guess when integrity cannot be established. (#2279)
- **Mesh status is consistent across transports.** The hub publishes a token-free, last-known-good estate snapshot so `mempalace_mesh_peers` can report reachability and profiles from stdio as well as HTTP. (#2309)
- **Filesystem edge cases fail safely.** `sweep` reports failed stats, `init` handles unreadable manifest paths, and `split` refuses FIFO or symlink output targets instead of blocking or writing through them. (#2244)
- **Published containers gain provenance and SBOM attestations.** Release documentation also adds Termux PRoot installation guidance, KG supersede examples, and clarified hook write-routing scope. (#2097, #2139, #2059, #2123)

A big thank-you to everyone who contributed to this release. Contributors and first-time contributors are credited below.

## What's Changed
* docs: align website contributing guide with root (#1980) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/1996
* fix(ingest): finish the non-regular-file guards left out of 3.7.1 (#2221) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2244
* fix(ci): replace inactive owner in CODEOWNERS by @igorls in https://github.com/MemPalace/mempalace/pull/2285
* chore(deps): bump docker/login-action from 4 to 4.5.2 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2117
* chore(deps): bump actions/setup-python from 6 to 7 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2073
* ci: attach provenance and SBOM attestations to the published image by @kobihikri in https://github.com/MemPalace/mempalace/pull/2097
* docs: clarify hook write routing release scope by @Taylor-yuhb in https://github.com/MemPalace/mempalace/pull/2123
* docs: document KG supersede usage by @ggettert in https://github.com/MemPalace/mempalace/pull/2059
* docs: add Termux PRoot installation guide by @seoseo-ai in https://github.com/MemPalace/mempalace/pull/2139
* test: add knowledge_graph metadata coverage by @fatkobra in https://github.com/MemPalace/mempalace/pull/913
* test: add palace_graph ranking and limits coverage by @fatkobra in https://github.com/MemPalace/mempalace/pull/916
* test(benchmarks): enforce the 100ms startup injection budget by @arnoldwender in https://github.com/MemPalace/mempalace/pull/1140
* fix(benchmarks): UTF-8 encoding + ASCII print chrome on Windows for the 3 sibling runners by @jphein in https://github.com/MemPalace/mempalace/pull/1382
* fix: remove hardcoded fallback names from split_mega_files by @adv3nt3 in https://github.com/MemPalace/mempalace/pull/166
* revert: palace_graph ranking tests written against the pre-f68cb8d API (#916) by @igorls in https://github.com/MemPalace/mempalace/pull/2301
* fix(chroma): stop the client cache invalidating on its own writes by @igorls in https://github.com/MemPalace/mempalace/pull/2307
* fix(sqlite_exact): speed up query and status on large palaces by @igorls in https://github.com/MemPalace/mempalace/pull/2308
* fix(mesh): publish the estate so every transport can report it by @igorls in https://github.com/MemPalace/mempalace/pull/2309
* fix(sqlite_exact): cut remaining palace-wide read paths by @igorls in https://github.com/MemPalace/mempalace/pull/2311
* perf(mcp): make a proxied stdio session stop loading the storage stack by @igorls in https://github.com/MemPalace/mempalace/pull/2312
* fix(sqlite_exact): index wing/room/hall for structured access by @igorls in https://github.com/MemPalace/mempalace/pull/2313
* fix(chroma): read list_drawers and tunnels from sqlite, skip HNSW by @igorls in https://github.com/MemPalace/mempalace/pull/2314
* feat(logstream): background watcher agents can be woken by, plus the monitoring protocol by @igorls in https://github.com/MemPalace/mempalace/pull/2315
* fix(embedding): never let CoreML return NaN vectors for embeddinggemma by @marcoaperez in https://github.com/MemPalace/mempalace/pull/2283
* fix(repair): check the FTS5 content table before rebuilding from it (#2278) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2279
* chore(release): 3.8.0 by @igorls in https://github.com/MemPalace/mempalace/pull/2316
* fix(sync): require an established absence before removing a drawer (#2320) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2322

## New Contributors
* @kobihikri made their first contribution in https://github.com/MemPalace/mempalace/pull/2097
* @Taylor-yuhb made their first contribution in https://github.com/MemPalace/mempalace/pull/2123
* @seoseo-ai made their first contribution in https://github.com/MemPalace/mempalace/pull/2139
* @marcoaperez made their first contribution in https://github.com/MemPalace/mempalace/pull/2283

**Full Changelog**: https://github.com/MemPalace/mempalace/compare/v3.7.1...v3.8.0

**Install:** `pip install -U mempalace==3.8.0`

---

> **Source** [MemPalace/mempalace](https://github.com/MemPalace/mempalace) · `v3.8.0` · 2026-08-23 · [upstream release](https://github.com/MemPalace/mempalace/releases/tag/v3.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
