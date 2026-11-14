---
title: "mempalace v3.11.0"
project: "mempalace"
repo: "MemPalace/mempalace"
tag: "v3.11.0"
version: "v3.11.0"
published: "2026-10-14"
type: "minor"
lang: "en"
summary: "A palace can now be audited and repaired in guided steps, and EmbeddingGemma 2 arrives as an opt-in embedder with native image, audio and video search. Every palace records the embedding model that built it and refuses…"
---

# mempalace v3.11.0

A palace can now be audited and repaired in guided steps, and EmbeddingGemma 2 arrives as an opt-in embedder with native image, audio and video search. Every palace records the embedding model that built it and refuses to open with a different one. Conversation mining stops discarding text, status, search, wake-up and hub mines stay responsive on large palaces, and a round of correctness fixes from the 3.11 review hardens metadata updates, recovery and HTTP validation.

### Upgrade notes

- **The first conversation mine after upgrading re-mines each conversation file it covers, once.** The exchange chunker no longer discards text (#2591), so conversation drawers filed before 3.11 count as stale and are re-chunked and re-embedded from transcripts still on disk; transcripts no longer on disk keep their drawers. Project files are not re-mined. Expect roughly 40 minutes to 3 hours per million drawers, depending on hardware. On a large palace, back up first and run it in batches at a quiet time, for example `mempalace mine <dir> --mode convos --limit 200`; an interrupted run resumes where it stopped.
- **A palace refuses to open with a different embedding model than the one that built it.** Search, mining and MCP writes stop with a message that names the fix: set `embedding_model` (`config.json` or `MEMPALACE_EMBEDDING_MODEL`) back to the model the palace was built with, or re-embed with `mempalace repair rebuild-index`. A palace with no recorded model opens with the configured one and a warning that names `mempalace palace set-embedder`. (#2694, #2717)
- **`EntityRegistry.research()` and `confirm_research()` are removed.** They were an opt-in, off-by-default Wikipedia lookup that nothing in the CLI, MCP server, miners or hooks called. Existing `wiki_cache` entries in `entities.json` are still read by `lookup()`. (GHSA-mrj5)

### EmbeddingGemma 2 and embedder identity

- **EmbeddingGemma 2 is available as an opt-in embedder.** Set `embedding_model: embeddinggemma2` and install `mempalace[embeddinggemma2]`, or `mempalace[multimodal]` for media (Python 3.10+, PyTorch). It runs on CUDA when present, on Apple MPS, or on CPU, and supports 768/512/256/128 dimensions. A CUDA out-of-memory error halves the batch and retries. (#2694, #2717)
- **Native image, audio and video retrieval.** A built-in `media` source adapter embeds original files into a separate `mempalace_assets` collection, and opt-in CLI/MCP media search returns typed local asset references alongside matching drawers. File-level retrieval is experimental. (#2694)
- **Existing palaces are untouched unless you opt in.** The default MiniLM path is unchanged and nothing is re-embedded. An unknown `embedding_model` keeps the MiniLM fallback, while near misses of a known name are refused instead of silently falling back. (#2717)
- **Every palace records which embedder built it, and every write path fails closed on a mismatch.** CLI, MCP, mine and `repair` check the recorded identity; `repair rebuild-index` and `--mode from-sqlite` record it again after a verified rebuild; new Qdrant and pgvector palaces record it; and MCP refuses rather than falling back to Chroma's default embedder. (#2717; fixes #2709)

### Palace audit and guided repair

- **`mempalace audit` scores how well a palace is organized,** across five layers (rooms, wings, tunnels, hallways and knowledge graph), with concrete findings, `--json` output and `--fail-under` for cron or CI. It is read-only and runs against a palace an MCP server is serving. (#2576)
- **Guided repair tooling:** `mempalace instructions audit` walks an agent and user through the findings; `rooms propose` / `apply` give a wing a closed room set; `wings split` turns a machine-level transcript wing into one wing per project; `tunnels propose` / `prune` and `hallways --rebuild` / `--prune-spellings` clean up noisy links; and `kg normalize` maps one-off predicates onto a closed vocabulary. Everything is a dry run until `--yes`, and interrupted runs finish on retry. LLM-backed steps default to a local endpoint and need `--accept-external-llm` for anything else. (#2576, #2655, #2656, #2657, #2664, #2668, #2669)
- **Metadata-only updates on the SQLite backends are ~6000x faster,** so wing and room moves on large palaces finish in seconds. (#2576)

### Correctness fixes from the 3.11 review

- **Metadata-aware updates and upserts guard the inputs used for embedding.** Concurrent document or metadata changes are refused before publication, and removed fields are omitted from embedding metadata. (#2734)
- **Drawer listings keep metadata and page previews in one recovered snapshot,** and fall back to Chroma while recovery is pending. (#2734)
- **Room recovery rejects damaged journals before applying changes,** and approved tunnel proposals keep their full spelling context. (#2734)
- **Malformed HTTP tool names return normal JSON-RPC validation errors** instead of failing during dispatch. (#2734)

### Performance and large palaces

- **Status, search and wake-up stay responsive on large palaces.** Count caches no longer expire before they are used (8–12 s down to about 1 ms on a 360k-drawer palace), the MCP server stops reloading the vector index on almost every call, wake-up reads recent drawers from SQLite, and mining no longer rescans the palace with quadratic paging. (#2593)
- **Mines on very large palaces do far less redundant work,** and a mine on the HTTP hub yields to queued requests between files. (#2567, #2593, #2688, #2689, #2690, #2691)
- **Diary reads and single-drawer lookups read from SQLite** when it already has the rows. (#2650)

### Bug fixes

- **Conversation mining no longer discards text** after a `---` markdown rule, before the first user turn, or in short exchanges. (#2591)
- **`mempalace_reconnect` no longer runs under a running mine;** it waits up to 10 s and then returns `MineInProgress`, and a mine that failed some files raises `MineFileErrors` and exits 1. (#2701, #2705)
- **In-process SQLite reads keep Chroma's locks,** so status, taxonomy, BM25 and integrity checks no longer risk torn reads. (#2506, #2573, #2652, #2658)
- **`event_list` and `event_wait` no longer hide another agent's request** because the caller passed its own `from_agent`. (#2616)
- **Hub and daemon routes keep `--include-ignored` and `--include-subagents`,** and relative `sweep` / `sync` paths resolve against the caller's directory. (#2582, #2583, #2584, #2733)
- **`sync --apply` no longer removes drawers of files that are still on disk** behind mounts and bind mounts. (#2368, #2564)
- **The stdio MCP servers stay up and answer** on unparseable lines and when their hub is gone. (#2534, #2555, #2557)
- Also: `mempalace.yml` is accepted and updated by `init` (#2699, #2704); `.al` and `.ps1` sources are mined (#2702, #2706); case-only wing/room renames apply (#2426); KG writes no longer need the peer-writer lease (#2423); the legacy `repair` holds the palace lock (#2569); EmbeddingGemma's q8 memory blow-up is fixed (#2693); DirectML sessions run serially (#2687); and more — see the full list below.

### Security and dependencies

- **ChromaDB telemetry is disabled explicitly,** not just silenced. Nothing was transmitted on the supported 1.x line. (GHSA-8h77, #2524)
- **The unused Wikipedia lookup is removed,** so local-first is a property of the code rather than a default argument. (GHSA-mrj5, #2526, #2527)
- **Pillow 12.3.0, chromadb 1.5.9 and routine lock bumps.** Pillow 12.3.0 needs Python 3.10+, so Python 3.9 installs stay on Pillow 11.3.0, which is affected by the Pillow advisories fixed in 12.3.0. `SECURITY.md` now warns against exposing a Chroma HTTP server. (#2719)
- **Read-only MCP tools advertise `annotations.readOnlyHint`,** so plan modes and read-only subagents can use memory search without a host-side allowlist. (#2610, #2640)

---

**Install / upgrade**

```bash
pip install --upgrade mempalace        # or: uv tool upgrade mempalace / pipx upgrade mempalace
```

Optional EmbeddingGemma 2 and media search (Python 3.10+): `pip install -U "mempalace[embeddinggemma2]"` or `"mempalace[multimodal]"`, then set `embedding_model: embeddinggemma2` for a new palace. See `docs/embeddinggemma2.md`.

Optional native exact-vector search: the `mempalace_native_core` wheels and standalone `mempalace-native` executables are attached to this release (see `crates/README.md`).

A big thank-you to everyone who contributed. This release includes 79 merged PRs: 76 from 11 contributors, three of them first-time, plus three Dependabot bumps.

**Install:** `pip install -U mempalace==3.11.0`

## What's Changed
* fix(chroma): disable ChromaDB telemetry explicitly (GHSA-8h77) by @igorls in https://github.com/MemPalace/mempalace/pull/2524
* fix(entity-registry): remove the unused Wikipedia lookup (GHSA-mrj5) by @igorls in https://github.com/MemPalace/mempalace/pull/2526
* refactor(entity-registry): drop the tables the Wikipedia lookup left behind by @igorls in https://github.com/MemPalace/mempalace/pull/2527
* fix(miner): bound the temporary-name search so a refusal reaches the caller by @igorls in https://github.com/MemPalace/mempalace/pull/2531
* fix(cli): honor MEMPALACE_PALACE env var and --palace after init (#2366) by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2445
* fix(sync): record which directory a source was mined from (#2367) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2368
* fix(mcp): parse the server's flags in main(), not when mcp_server is imported (#2528) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2534
* fix(wal): record write outcome in WAL to close #538 audit gap by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2459
* fix(sync): read the directory's identity around a gitignored verdict (#2563) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2564
* feat(mcp): add bulk get and delete drawer tools by @igorls in https://github.com/MemPalace/mempalace/pull/2572
* fix(storage): keep Python sqlite3 readers from breaking Chroma's SQLite in-process (#2302) by @igorls in https://github.com/MemPalace/mempalace/pull/2506
* fix(mcp): answer the requests the stdio proxy cannot serve (#2554) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2555
* fix(mcp): keep the stdio servers up on a line json.loads rejects (#2556) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2557
* fix(cli): hold the palace lock across the legacy repair by @sxh313 in https://github.com/MemPalace/mempalace/pull/2569
* fix(mine): scope prefetch_mined_set to candidate files below a threshold by @AmirF194 in https://github.com/MemPalace/mempalace/pull/2567
* docs(closets): describe search as drawer-first with a closet boost by @igorls in https://github.com/MemPalace/mempalace/pull/2590
* fix(convo): stop the exchange chunker from discarding text by @igorls in https://github.com/MemPalace/mempalace/pull/2591
* feat: palace audit and guided repair tooling (rooms, wings split, tunnels, kg normalize) by @igorls in https://github.com/MemPalace/mempalace/pull/2576
* fix: keep status, search and wake-up responsive on large palaces by @igorls in https://github.com/MemPalace/mempalace/pull/2593
* chore(deps): bump docker/build-push-action from 7.3.0 to 7.4.0 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2547
* chore(deps): bump docker/setup-buildx-action from 4.3.0 to 4.4.0 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2548
* chore(deps): bump docker/setup-qemu-action from 4.3.0 to 4.4.0 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2549
* fix(mcp): exempt kg_add/kg_invalidate/kg_supersede from peer-writer lease by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2423
* fix(mcp): apply case-only wing/room renames in tool_update_drawer by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2426
* fix(cli): resolve relative sweep and sync paths against the caller's cwd (#2582) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2583
* feat(mcp): advertise readOnlyHint and scope search to past sessions by @undeadindustries in https://github.com/MemPalace/mempalace/pull/2610
* fix(mcp): drop readOnlyHint from memories_filed_away by @igorls in https://github.com/MemPalace/mempalace/pull/2640
* fix(mcp): release HTTP request lock around embedding inference (#2604) by @igorls in https://github.com/MemPalace/mempalace/pull/2633
* fix(storage): keep Chroma's locks when a reader cannot use OFD locks by @igorls in https://github.com/MemPalace/mempalace/pull/2573
* ci(version): validate release badges and workspace lock versions by @patrickscd in https://github.com/MemPalace/mempalace/pull/2644
* fix(logstream): stop from_agent filtering event_list and event_wait by @igorls in https://github.com/MemPalace/mempalace/pull/2616
* fix: forward include-ignored mines through the running hub by @ac-opensource in https://github.com/MemPalace/mempalace/pull/2584
* fix(storage): retain helper read transactions only in WAL mode by @patrickscd in https://github.com/MemPalace/mempalace/pull/2652
* perf(mcp): read diary and drawer lookups from SQLite by @patrickscd in https://github.com/MemPalace/mempalace/pull/2650
* docs(benchmarks): clarify LoCoMo rerank recall limits by @patrickscd in https://github.com/MemPalace/mempalace/pull/2645
* docs: guide agents to retrieve only needed memory context by @patrickscd in https://github.com/MemPalace/mempalace/pull/2651
* feat(config): make hallway co-occurrence min_count configurable — #2328 by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2588
* fix(hooks): report drawers_filed and messages_folded separately in stop-hook output (#2303) by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2587
* chore(release): 3.11.0 by @igorls in https://github.com/MemPalace/mempalace/pull/2617
* fix(storage): release no-OFD WAL helper snapshot after each read by @igorls in https://github.com/MemPalace/mempalace/pull/2658
* fix(kg): do not rewrite onto a future-only successor by @igorls in https://github.com/MemPalace/mempalace/pull/2661
* fix(mcp): invalidate overview caches when only the WAL changes by @igorls in https://github.com/MemPalace/mempalace/pull/2662
* fix(http): protect diary handles across embedding/reconnect by @igorls in https://github.com/MemPalace/mempalace/pull/2663
* fix(rooms): preserve approved spellings on room-set reload by @igorls in https://github.com/MemPalace/mempalace/pull/2664
* fix(chroma): omit reserved chroma:* keys from SQLite hydrate by @igorls in https://github.com/MemPalace/mempalace/pull/2665
* fix(tunnels): do not prune distinct links via an ambiguous bare alias by @igorls in https://github.com/MemPalace/mempalace/pull/2656
* fix(rooms): resume closet apply by stable id, not current room by @igorls in https://github.com/MemPalace/mempalace/pull/2657
* fix(hallways): keep unequal code extensions as distinct files by @igorls in https://github.com/MemPalace/mempalace/pull/2655
* chore: sync main history before v3.11 review by @igorls in https://github.com/MemPalace/mempalace/pull/2666
* fix(rooms): harden pending closet snapshot replay by @igorls in https://github.com/MemPalace/mempalace/pull/2668
* fix(embedding): serialize ONNX runs on DirectML sessions by @igorls in https://github.com/MemPalace/mempalace/pull/2687
* fix(search): rank the unfiltered lexical window before capping it by @jayzhou2309 in https://github.com/MemPalace/mempalace/pull/2670
* perf(tunnels): batch the mine's tunnel passes into one load and one save by @igorls in https://github.com/MemPalace/mempalace/pull/2688
* perf(hallways): read the wing through a scoped sqlite pass on Chroma by @igorls in https://github.com/MemPalace/mempalace/pull/2691
* perf(mining): skip already-filed project files from one metadata pass by @igorls in https://github.com/MemPalace/mempalace/pull/2689
* perf(mining): skip the post-mine quick_check when the mine wrote nothing by @igorls in https://github.com/MemPalace/mempalace/pull/2690
* fix(config): warn when config.json is valid JSON but not an object by @igorls in https://github.com/MemPalace/mempalace/pull/2700
* fix(miner): read Business Central .al and PowerShell .ps1 sources by @igorls in https://github.com/MemPalace/mempalace/pull/2702
* test(wings): pin metadata-merge contract for wing split (Copilot wipe report not reproducible) by @igorls in https://github.com/MemPalace/mempalace/pull/2697
* fix(embedding): look up EmbeddingGemma tokens before dequantizing the table by @igorls in https://github.com/MemPalace/mempalace/pull/2693
* fix(wings): pin split plan targets across interrupted retries by @igorls in https://github.com/MemPalace/mempalace/pull/2669
* fix(hub): keep mempalace_reconnect out of a running mine; count failed files as errors by @igorls in https://github.com/MemPalace/mempalace/pull/2701
* docs: correct stale MCP tool counts (44/45 → 47) + drift test by @igorls in https://github.com/MemPalace/mempalace/pull/2698
* fix(miner): accept mempalace.yml as a project config filename by @igorls in https://github.com/MemPalace/mempalace/pull/2699
* docs: MineInProgress on reconnect, MineFileErrors on mine (stacked on #2701) by @igorls in https://github.com/MemPalace/mempalace/pull/2705
* docs: correct plugin command counts (5 → 6) + drift test by @igorls in https://github.com/MemPalace/mempalace/pull/2703
* fix(init): update an existing mempalace.yml instead of shadowing it by @igorls in https://github.com/MemPalace/mempalace/pull/2704
* fix(mcp): release palace lock if writer setup fails after acquire (#2618) by @igorls in https://github.com/MemPalace/mempalace/pull/2632
* chore(entity_detector): sample .al and .ps1 when prose is scarce (post-3.11) by @igorls in https://github.com/MemPalace/mempalace/pull/2706
* feat: add opt-in EmbeddingGemma 2 and native media retrieval by @kpulik in https://github.com/MemPalace/mempalace/pull/2694
* fix(embedding): keep the MiniLM fallback for unknown embedding_model; refuse near misses; read legacy palaces; check and record the embedder identity everywhere; run EmbeddingGemma 2 on CUDA by @igorls in https://github.com/MemPalace/mempalace/pull/2717
* chore(deps): 3.11 dependency sweep (Pillow 12.3.0, chromadb 1.5.9, routine lock bumps) by @igorls in https://github.com/MemPalace/mempalace/pull/2719
* docs(release): finalize 3.11.0 CHANGELOG and SECURITY.md CVE wording by @igorls in https://github.com/MemPalace/mempalace/pull/2728
* docs: stop calling dialect.py lossless in the package README by @igorls in https://github.com/MemPalace/mempalace/pull/2730
* docs(changelog): add 3.11 upgrade notes for the conversation re-mine and the embedder check by @igorls in https://github.com/MemPalace/mempalace/pull/2732
* docs(claude-md): describe closets as the index layer, AAAK as opt-in by @igorls in https://github.com/MemPalace/mempalace/pull/2731
* fix(mine): keep --include-subagents through the hub and daemon routes by @igorls in https://github.com/MemPalace/mempalace/pull/2733
* fix: preserve v3.11 metadata, recovery, links and HTTP validation by @milla-jovovich in https://github.com/MemPalace/mempalace/pull/2734
* release: promote v3.11.0 to main by @igorls in https://github.com/MemPalace/mempalace/pull/2729

## New Contributors
* @sxh313 made their first contribution in https://github.com/MemPalace/mempalace/pull/2569
* @patrickscd made their first contribution in https://github.com/MemPalace/mempalace/pull/2644
* @jayzhou2309 made their first contribution in https://github.com/MemPalace/mempalace/pull/2670

**Full Changelog**: https://github.com/MemPalace/mempalace/compare/v3.10.0...v3.11.0

---

> **Source** [MemPalace/mempalace](https://github.com/MemPalace/mempalace) · `v3.11.0` · 2026-10-14 · [upstream release](https://github.com/MemPalace/mempalace/releases/tag/v3.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
