---
title: "codebase-memory-mcp 0.7.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "0.7.0"
version: "0.7.0"
published: "2026-06-12"
type: "minor"
lang: "en"
summary: "This release is the one where the call graph stops being a guess."
---

# codebase-memory-mcp 0.7.0

> 📦 Archived release page — binaries for this version are no longer published. Get the [latest release](https://github.com/DeusData/codebase-memory-mcp/releases/latest).

# v0.7.0 — Hybrid LSP across six languages, community contributions, full-platform validation

## 🧠 The headline: **hybrid LSP**

This release is the one where the **call graph stops being a guess**.

For every supported language we now ship a **hybrid Light-Semantic-Pass LSP** — a per-file, type-aware resolver that runs *inside* extraction. It tracks scopes, infers expression types, follows imports, walks inheritance, and rewrites the resolved callee on every `CALLS` edge. The plain tree-sitter pass gives you the structural graph; the LSP pass gives you the **right** callee. **Six languages** now benefit — four of them gained the LSP for the first time in this release.

### New LSPs (introduced this cycle)
| Language | What the LSP does | Headline |
|---|---|---|
| **Python** | scope binding, expression typing, method dispatch, super(), decorators, multi-inheritance, TypedDict, match/case narrowing, walrus, comprehension element typing, generics & cross-file resolution | 100% on the bench; 95% on real-world instance-attribute resolution |
| **PHP** | Light Semantic Pass, generic templates, narrowing, `self`/`static`/`$this`, trait substitution, `@phpstan-type` aliases, `Closure::bind`, variance, 278 unit tests | parity-grade across Laravel/Symfony/Doctrine/Guzzle/PSR idioms |
| **TypeScript / JavaScript / JSX / TSX** | full TS semantic surface — unions, intersections, function types, JSX element resolution, dts mode, callback-param contextual typing | the full TS dialect family, one resolver |
| **C# / .NET** | class/struct/record/interface/enum, primary constructors, indexers, accessors, LINQ chains, generics, switch narrowing | C# 12 modern features land on day one |

### Sharpened LSPs (existed at v0.6.1; substantially upgraded here)
| Language | What was sharpened |
|---|---|
| **C / C++ / CUDA** | Tier 2 pre-built per-language cross-LSP registry; template return-type substitution; namespace + class body walkers made O(n) |
| **Go** | Tier 2 + **Tier 3 metadata-driven cross-LSP** (skips the AST re-walk entirely); per-file walkers O(n); pooled thread-local parser |

### The Tier 1/2/3 architecture (this is the part that makes it tractable)

The LSP work is genuinely expensive — naively, every resolve worker would re-build a typing context per file. Instead it runs in three tiers:

- **Tier 1 — per-file LSP** inside `cbm_extract_file`: scopes, expression typing, local resolution.
- **Tier 2 — pre-built per-language cross-LSP registry**: a shared read-only base built **once** from every project def, then chained from per-file overlays via a fallback pointer. Resolve workers share it; no per-file re-walks of the entire registry. (Now wired for all six languages.)
- **Tier 3 — metadata-driven cross-LSP** (Go): consumes the `lsp_unresolved` metadata the per-file pass emits and skips the cross-file AST re-walk entirely.

### Made O(n) on wide files

Every per-file LSP walker — `process_node`, `ast_sweep_shapes`, `apply_jsdoc_signatures`, `infer_implicit_returns`, `*_resolve_calls_in_node`, plus the seven extract-side DFS walkers — used the `for (i=0; i<count; i++) ts_node_child(node, i)` idiom. That's O(i) per call in tree-sitter, so O(n²) over a wide root. Fixtures like TypeScript's `reallyLargeFile.ts` (583k lines, almost all comments) made this catastrophic.

A new `cbm_lsp_collect_children` O(n) cursor helper + a shared `ts_nstack_push_children` for the extract DFS now apply across all six LSPs and the extractors. **Numbers from the dry-run validation:**

| Repo | Files | LSP overrides | Before → After |
|---|---|---|---|
| microsoft/TypeScript | 40,689 | **7,432** | 5,100s → **50s** (full); advanced 100s |
| dotnet/roslyn | 17,916 | **91,089** | crash → **46s** |
| kubernetes (Go) | 20,650 | **80,818** | — → **51s** |
| WordPress (PHP) | 3,622 | **7,303** | — → **7s** |
| postgres (C) | 4,967 | **44** | — → **8s** |
| torvalds/linux | 88,539 | **4,052** | — → 188s (full) / 207s (with LSP cross) |

`lsp_overrides` is "calls whose callee the LSP re-attributed to a more precise target than the textual resolver inferred." For richly-typed languages (C#, Go, TS, PHP) that's tens of thousands of corrections.

### Two real bugs fixed along the way
- `process_node` indexed the NULL-terminated `param_types[]` by the call's arg count; a call with more args than the function declares params read past the terminator → deref of a garbage `CBMType*` → crash. Now bounded by a `param_count` scan.
- `return_type_of` built tuple return types via `cbm_type_tuple(NULL, …)`. Multi-return signatures now thread `ctx->arena` through.

### Always on
**`CBM_MODE_ADVANCED` is removed.** The LSP resolution runs in every index mode (`full`, `moderate`, `fast`) — at this point the walkers are O(n), the quality (~4% of calls re-attributed on TS, ~14% on Go) is worth the latency in every mode. `"mode":"advanced"` requests fall back to `full` (identical behaviour to the old advanced mode, so no breaking change). As a side benefit, the 104 `test_incremental.c` failures that were silently caused by incremental running with LSP gated *off* are now gone.

---

## 🌲 Pine Script & new platforms

- **Pine Script** language support via the [`kvarenzn/tree-sitter-pine`](https://github.com/kvarenzn/tree-sitter-pine) grammar, integrated by **@vinay-veerappa** (#273).
- **NetBSD, FreeBSD, OpenBSD** — full POSIX BSD trifecta — by **Christof Meerwald (@cmeerw)** (#313).
- **Nix flake** for reproducible builds by **Joseph Voss (@josephvoss)** (#265).
- **Windows code search via PowerShell** + **Windows-side store integrity guards** by **@noctrex** (#310, #311).

## 🔗 Graph & extraction

- **`USAGE` edges for decorator applications** — Python/TS frameworks light up properly — by **Matthew Prock (@map588)** (#208).
- **`INHERITS` edges fully emitted for Java `extends` + `implements`** by **Loay Chlih (@loaychlih)** (#279).
- **Temporal properties on `FILE_CHANGES_WITH` edges and `File` nodes** by **Adam Schulte** (#257).
- **C# 12 primary-constructor + field/property extraction**, **typed-stub factory constructors**, and **satellite-galaxy / cross-galaxy UI** by **@sponger94**.
- **Build-tool path-alias resolution** for cross-file imports and **mode-skipped file preservation** during incremental indexing by **Peter Cox** (#243, #251).
- **ES imports from embedded `<script>` blocks** by **James (@jmcmacnz)** (#224).
- **Growable arena-allocated traversal stacks** (no more fixed-size truncation) by **Ahmed Mohammed** (#217).

## ⚡ Performance (beyond LSP)

- **`search_graph` regex cache + LIKE pre-filter + cheap count** and a **two-step FTS5 sub-query** to kill multi-minute `search_graph query=` latency, by **Austen Constable (@awconstable)** (#300 and follow-ups).
- **Verstable v2.2.1 hash table** (by [Jackson Allan](https://github.com/JacksonAllan/Verstable)) vendored as the new `CBMHashTable` engine — hot-path resolve speedup; 14 production callers (graph_buffer, registry, pipeline passes, watcher, semantic, …) get the new impl transparently.
- **Extract O(n²) eliminated** across seven whole-tree DFS walkers (calls, channels, env-accesses, imports, type-assigns, variables) — the same `ts_node_child(node, i)` idiom that bit the LSP. **microsoft/TypeScript full-mode: 5,097s → 50s (102×).**
- **Tree-sitter source-buffer padding** in every parse pass — eliminates a latent benign over-read at parse boundaries.

## 🛡️ Security

HackerOne researcher submissions landed by their original authors:
- **`search_code` multi-word regex** patch by **Jan Deelstra** (#304).
- **`sqlite_writer` index-cell page guard** by **Jos Joosten** (#303).
- **GitHub Actions shell injection in `_build.yml`** fixed by **Dustin Obrecht (@dLo999)** (#249).

Plus:
- **`search_graph` default limit capped at 200** (was 500k — DoS hardening) by **@amitmynd** (#231).
- **Cypher / store buffer-overflow, OOM, and NULL-stmt crash hardening** + **thread-safety race elimination in log mutex, watcher, and indexer** by **Matthew Prock (@map588)** (#206, #207).
- **`ws` bumped to 8.21.0** (GHSA-58qx-3vcg-4xpx / CVE-2026-45736).

## 💾 Reliability & store

- **`CBM_SQLITE_MMAP_SIZE` env-controlled mmap** + **PASSIVE checkpoint to prevent file-shrink under concurrent readers** by **@edwardmhughes** (#315 + follow-up).
- **`cbm_store_get_architecture` wired into the MCP handler** by **Oliver Evans (@OliverEvans96)** (#281).
- **`safe_free` / `safe_str_free` / `safe_buf_free` / `safe_grow` memory helpers**, with rollout to heavy sites, by **Matthew Prock (@map588)**.
- **`trace_path` qualified-name fallback** and **`list_projects` no longer hides `tmp-`-prefixed projects** by **Justin Wiley (NVIDIA)**.
- **`.m` extension content-based disambiguation** by **@KuaaMU** (#306).
- **AUR package docs** by **Chris Werner Rau (@cwrau)** (#278).

## ✅ CI & build

The dry-run pipeline is fully green on every platform: lint (cppcheck + clang-format-20), security-static, CodeQL gate, test, build, smoke, quick soak — Windows + macOS arm64/intel + linux amd64/arm64.

## 🔍 Disclosures (release-readiness transparency)

Some changes in the CI-greening sweep were judgment calls, not pure fixes. Flagging them so reviewers can second-guess:

1. **LSP benchmarks (`pylsp_bench_resolution_ratio`, `cslsp_bench_resolution_ratio`)** — gated behind `CBM_SKIP_PERF` for the dry run; in the release CI (`skip_perf=false`) they run with **ASan-aware time budgets** (×10 under sanitizers) and free the result before asserting so any future budget miss doesn't leak. The **call-resolution-ratio quality is also asserted by the non-bench `test_py_lsp` and `test_cs_lsp` suites** that always run in CI.
2. **Security audit allow-list extensions** (each reviewed; documented inline):
   - URL allow-list: `https://www.sqlite.org/c3ref/c_checkpoint_full.html` — a doc reference in a `store.c` comment, not a network call.
   - `mcp.c` file-read threshold raised **12 → 13**. The 13th read is the update-check HTTP response + the HTTP request body — both bounded; pre-existing from the search/ADR/Windows-support commits.
   - `fopen("w")` allow-list extended to include `src/foundation/diagnostics.c` (atomic `.tmp` + rename metrics dump).
3. **`CBM_MODE_ADVANCED` removed.** `"mode":"advanced"` requests now fall back to `full` (which always runs LSP) — identical behaviour, so existing callers are unaffected.

## ⬆️ Upgrading

Existing callers passing `"mode":"advanced"` keep working (silent fallback to `full`). After upgrading the binary in `~/.local/bin/codebase-memory-mcp`, **restart Claude Code** so the MCP server picks up the new binary.

---

## 🙏 Thank you

None of the community work above happens without these people. Listed with what they shipped, not who merged it:

- **Matthew Prock (@map588)** — crash hardening, thread-safety, decorator USAGE edges, the `safe_*` memory family.
- **Peter Cox** — path-alias resolution and incremental-mode file preservation.
- **Austen Constable (@awconstable)** — the biggest `search_graph` perf rescue this cycle.
- **@edwardmhughes** — `mmap_size` env knob and the PASSIVE-checkpoint fix.
- **@noctrex** — Windows PowerShell search + store-path integrity.
- **@vinay-veerappa** — Pine Script integration (atop **kvarenzn's** tree-sitter-pine grammar — thank you, kvarenzn).
- **Adam Schulte** — temporal File-change properties.
- **Christof Meerwald (@cmeerw)** — NetBSD/FreeBSD/OpenBSD support.
- **Joseph Voss (@josephvoss)** — Nix flake.
- **Loay Chlih (@loaychlih)** — Java INHERITS edges.
- **Oliver Evans (@OliverEvans96)** — `get_architecture` MCP wiring.
- **@KuaaMU** — `.m` disambiguation.
- **Chris Werner Rau (@cwrau)** — AUR docs.
- **Ahmed Mohammed** — growable extraction stacks.
- **James (@jmcmacnz)** — embedded-script ES import extraction.
- **@sponger94** — C# 12 primary-constructors, typed-stub factories, satellite-galaxy UI.
- **Justin Wiley (NVIDIA)** — `trace_path` and `list_projects` MCP polish.
- **@amitmynd** — `search_graph` default-limit hardening.
- **Jan Deelstra** *(HackerOne)* — `search_code` regex security fix.
- **Jos Joosten / @jjoos** *(HackerOne)* — `sqlite_writer` security fix.
- **Dustin Obrecht (@dLo999)** *(HackerOne)* — `_build.yml` shell-injection fix.
- **[Jackson Allan](https://github.com/JacksonAllan/Verstable)** — Verstable v2.2.1, vendored as our hash-table engine.

And to every issue reporter, reproducer, and reviewer not in a commit: **thank you.**

## Security Verification

All release binaries scanned with 70+ antivirus engines — **0 detections**.

| Binary | SHA-256 | VirusTotal |
|--------|---------|------------|
| `darwin-amd64` | `28c6d640e1a0ac7bfcab...` | [0/72 ✅](https://www.virustotal.com/gui/file/28c6d640e1a0ac7bfcab5094c2186eced5264a20dcdffcb4455a1b28c5df2171/detection) |
| `darwin-arm64` | `7062a7408906344bf4f8...` | [0/72 ✅](https://www.virustotal.com/gui/file/7062a7408906344bf4f835e9580048af85d12dd2b7cec0edf869df93ad9a0592/detection) |
| `linux-amd64` | `8e12bb2d6ead7f20a6d3...` | [0/72 ✅](https://www.virustotal.com/gui/file/8e12bb2d6ead7f20a6d3bf2be1e51f978c38acce810f0734f510d134b039d152/detection) |
| `linux-arm64` | `10f7136bfbf3950c6b2a...` | [0/72 ✅](https://www.virustotal.com/gui/file/10f7136bfbf3950c6b2a1a950bbf85e88b97ee55ab00b4dfbc2a5e9c2ede8672/detection) |
| `windows-amd64` | `9c3ddcf78368fd4fa891...` | [0/72 ✅](https://www.virustotal.com/gui/file/9c3ddcf78368fd4fa89156a553641bf1e03640b4fb6dd29a12c84aa5bc98cd86/detection) |

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `0.7.0` · 2026-06-12 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/0.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
