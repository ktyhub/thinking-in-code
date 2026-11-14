---
title: "mempalace v3.9.0"
project: "mempalace"
repo: "MemPalace/mempalace"
tag: "v3.9.0"
version: "v3.9.0"
published: "2026-08-31"
type: "minor"
lang: "en"
summary: "One hub now serves every agent. CLI search reuses the live palace index instead of loading another multi-gigabyte HNSW copy, concurrent searches stop blocking each other, and skill-first coordination plus opt-in release…"
---

# mempalace v3.9.0

## v3.9.0 — one hub for every agent

One hub now serves every agent. CLI search reuses the live palace index instead of loading another multi-gigabyte HNSW copy, concurrent searches stop blocking each other, and skill-first coordination plus opt-in release awareness make shared-brain fleets easier to operate safely.

### Shared hub and search

- **`mempalace search` reuses a healthy live Hub.** On the reported 4.99-million-vector palace, two direct CLI searches held about 18.6 GB of private RSS. Forwardable searches now reuse the Hub collection while preserving filters, ranking, output, authentication, configuration negotiation, and safe fallback behavior. (#2379)
- **Hub reads run concurrently.** Searches no longer serialize behind one exclusive HTTP dispatch lock; reads share a writer-preferring lock while mutations remain exclusive. (#2398)
- **Search results are clearer and faster to enrich.** Public similarity is the raw vector score, closet boost remains in effective ranking, source lookups are indexed, and duplicate enriched passages are removed. (#2399, #2143)
- **A private-palace benchmark is included** for product search evaluation without exposing private queries or corpus text. (#2400)

### Agent coordination and operations

- **Skill-first setup and task handoff.** The guided setup skill can bootstrap private or shared-brain installations, render canonical rules, assign stable fleet identities, and validate logstream readiness. Task creation now records an immutable base commit and complete definition of done before controlled launch. (#2374, #2361)
- **Release awareness is explicit and opt-in.** Agents can surface cached update state and prepare an exact upgrade plan without blocking, auto-installing, or silently enabling network checks. (#2376)
- **Logstream gains topic routing and reverse pagination,** making focused coordination and newest-first inspection practical without weakening append-only cursor guarantees. (#2397)

### Correctness and resource safety

- **Unreadable configuration is never overwritten.** Invalid files are preserved, writes are atomic where possible, symlinks remain intact, and UTF-8 project configuration is handled consistently. (#2357, #2353, #2369)
- **Drawer mutations purge stale closet entries,** single conversation files mine correctly through a running Hub, and absent SQLite databases no longer report a false clean integrity verdict. (#2355, #2282, #2291)
- **Qdrant bounded reads stop scanning whole collections,** and EmbeddingGemma internal batches can be reduced for long drawers on memory-constrained hardware. (#2384, #2383)

A big thank-you to everyone who contributed. This release includes 29 merged PRs and seven first-time contributors.

**Install:** `pip install -U mempalace==3.9.0`

## What's Changed
* docs: refresh the release entry-point check and plugin tool counts by @igorls in https://github.com/MemPalace/mempalace/pull/2348
* docs(shared-brain): teach the from-zero guide about logstream watch by @igorls in https://github.com/MemPalace/mempalace/pull/2349
* docs(coordination): wake for replies, and keep announcements silent by @igorls in https://github.com/MemPalace/mempalace/pull/2352
* fix(mcp): report an absent integrity verdict instead of a clean one (#2290) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2291
* docs: add branching model to CONTRIBUTING.md by @jjcav84 in https://github.com/MemPalace/mempalace/pull/2246
* fix(sqlite_exact): cross-handle cache invalidation and filtered id lookups by @igorls in https://github.com/MemPalace/mempalace/pull/2362
* fix(search): return distinct passages after closet enrichment by @fatkobra in https://github.com/MemPalace/mempalace/pull/2143
* fix(graph): report complete palace graph stats by @MichaelWave369 in https://github.com/MemPalace/mempalace/pull/2288
* feat(cli): `mempalace rules` — render the canonical shared-brain rules block by @igorls in https://github.com/MemPalace/mempalace/pull/2361
* fix(mcp): purge stale closets on drawer update and delete by @AmirF194 in https://github.com/MemPalace/mempalace/pull/2355
* fix(search): expose MCP candidate union by @iroiro147 in https://github.com/MemPalace/mempalace/pull/1964
* fix(config): read and write project YAML as UTF-8 by @masalu0105-gif in https://github.com/MemPalace/mempalace/pull/2353
* feat: add skill-first task coordination by @igorls in https://github.com/MemPalace/mempalace/pull/2374
* fix(config): init() persists the resolved palace_path, not the hardcoded default by @AmirF194 in https://github.com/MemPalace/mempalace/pull/2369
* fix(qdrant): send versioned User-Agent header by @MichaelWave369 in https://github.com/MemPalace/mempalace/pull/2365
* fix(miner): include C and C++ source files by @MichaelWave369 in https://github.com/MemPalace/mempalace/pull/2364
* fix(config): stop writing over a config.json that was never read (#2356) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2357
* fix(mcp): accept a single conversation file as a convos mine source by @rubicon in https://github.com/MemPalace/mempalace/pull/2282
* feat: add opt-in update awareness by @igorls in https://github.com/MemPalace/mempalace/pull/2376
* chore: sync main release history into develop by @igorls in https://github.com/MemPalace/mempalace/pull/2396
* feat: add logstream topic routing and reverse pagination by @igorls in https://github.com/MemPalace/mempalace/pull/2397
* fix: align pre-commit ruff pin with pyproject and CI by @SomSamantray in https://github.com/MemPalace/mempalace/pull/2342
* chore(deps): bump docker/login-action from 4.5.2 to 4.6.0 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2318
* fix(qdrant): bound get()'s scroll to offset+limit instead of the full collection by @AmirF194 in https://github.com/MemPalace/mempalace/pull/2384
* fix: let shared hub reads run concurrently by @igorls in https://github.com/MemPalace/mempalace/pull/2398
* fix: speed up closet search enrichment by @igorls in https://github.com/MemPalace/mempalace/pull/2399
* feat: add private Palace search benchmark by @igorls in https://github.com/MemPalace/mempalace/pull/2400
* fix(embedding): make EmbeddingGemma sub-batch size overridable by @AmirF194 in https://github.com/MemPalace/mempalace/pull/2383
* fix(cli): forward search to live palace hub by @RoshanDev in https://github.com/MemPalace/mempalace/pull/2379
* chore(release): 3.9.0 by @igorls in https://github.com/MemPalace/mempalace/pull/2401
* release: promote v3.9.0 to main by @igorls in https://github.com/MemPalace/mempalace/pull/2402

## New Contributors
* @jjcav84 made their first contribution in https://github.com/MemPalace/mempalace/pull/2246
* @MichaelWave369 made their first contribution in https://github.com/MemPalace/mempalace/pull/2288
* @AmirF194 made their first contribution in https://github.com/MemPalace/mempalace/pull/2355
* @iroiro147 made their first contribution in https://github.com/MemPalace/mempalace/pull/1964
* @masalu0105-gif made their first contribution in https://github.com/MemPalace/mempalace/pull/2353
* @SomSamantray made their first contribution in https://github.com/MemPalace/mempalace/pull/2342
* @RoshanDev made their first contribution in https://github.com/MemPalace/mempalace/pull/2379

**Full Changelog**: https://github.com/MemPalace/mempalace/compare/v3.8.0...v3.9.0

---

> **Source** [MemPalace/mempalace](https://github.com/MemPalace/mempalace) · `v3.9.0` · 2026-08-31 · [upstream release](https://github.com/MemPalace/mempalace/releases/tag/v3.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
