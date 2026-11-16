---
title: "codebase-memory-mcp 0.6.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "0.6.0"
version: "0.6.0"
published: "2026-06-12"
type: "minor"
lang: "en"
summary: "85+ commits since v0.5.7. Major release adding vector-based semantic search, structural near-clone detection, cross-language import resolution, and significant quality-of-life improvements across all platforms."
---

# codebase-memory-mcp 0.6.0

> 📦 Archived release page — binaries for this version are no longer published. Get the [latest release](https://github.com/DeusData/codebase-memory-mcp/releases/latest).

## v0.6.0 — Semantic Search, SIMILAR_TO Edges & Cross-Language Intelligence

85+ commits since v0.5.7. Major release adding vector-based semantic search, structural near-clone detection, cross-language import resolution, and significant quality-of-life improvements across all platforms.

### Semantic Search & Vector Embeddings

- **`semantic_query` tool**: keyword-based vector search across the entire codebase graph via `cbm_cosine_i8` SQL function
- **Nomic nomic-embed-code embeddings**: 40K pretrained token vectors (768d int8), distilled from nomic-ai/nomic-embed-code with simulated attention
- **11-signal combined scoring**: TF-IDF, Reflective Random Indexing, API/Type/Decorator signatures, AST structural profiles, approximate data flow, Halstead-lite metrics, MinHash, module proximity, graph diffusion
- **`SEMANTICALLY_RELATED` edges**: connect functions with vocabulary mismatch but similar purpose (score >= 0.80, max 10 per node, same-language only)
- Per-keyword min-cosine scoring replaces merged vector averaging for better precision
- Score clamping to [0,1] — proximity multiplier no longer pushes scores above 1.0
- Clone deduplication: SIMILAR_TO pairs with Jaccard >= threshold skip SEMANTICALLY_RELATED

### SIMILAR_TO Edges (Near-Clone Detection)

- **MinHash fingerprinting**: 64-hash signatures from leaf-only AST tokens with structural weighting
- **LSH index**: band-based locality-sensitive hashing for O(1) candidate retrieval
- **Parallel scoring**: worker pool queries LSH, scores candidates, emits edges
- Unique trigram gate filters trivially short functions
- `SIMILAR_TO` edges with Jaccard similarity and same-file flag in properties

### Full-Text Search

- **BM25 full-text search** via FTS5 with `cbm_camel_split` tokenizer (camelCase/snake_case aware)
- Incremental FTS5 rebuild on index updates

### New Edge Types & Detection

- **`EMITS` / `LISTENS_ON`** edges for Socket.IO, EventEmitter, and generic channel patterns
- **Constant resolution**: `const EVENT = "foo"; emit(EVENT)` resolves channel names through per-file constant tables
- **`IMPORTS` edges** with relative path resolution for JS/TS (`./foo`, `../bar`), Python (`.helpers`, `..utils`), Ruby
- **`DATA_FLOWS`** edges with argument-to-parameter mapping + field access chains
- **Cross-service communication discovery** + RAM-first incremental indexing
- AST-based route registration replacing prescan infrastructure
- HCL infrastructure binding extraction + prefix-decorator false positive fix
- Generalized route registration + infra binding bridge

### Graph Query & Tool Improvements

- **6 previously-ignored params wired up**: `min_degree`, `max_degree`, `exclude_entry_points`, `include_connected`, `aspects` filter, `since` for detect_changes
- **`include_tests` param** on `trace_path` — mark test files in BFS results
- **`risk_labels`** on `trace_path` for security-sensitive path tracing
- **`--progress` CLI flag** for real-time indexing feedback
- **`CBM_CACHE_DIR` env var** for configurable database directory
- **`moderate` index mode** added to tool schema (between full and fast)
- Schema properties exposure for `param_names`, `param_types`, `decorators`
- `include_connected` fix: BFS inbound+outbound run separately (was merging incorrectly)

### Quality of Life

- **Nested .gitignore support**: subdirectory gitignores now respected during indexing — critical for monorepos (#178)
- **Skill consolidation**: 4 separate skills merged into 1 with progressive disclosure
- **Smart update**: `skip update when already on latest version`
- **Runtime binary detection** in install command (no longer hardcoded)
- **Git submodule support** in watcher: detect dirty state inside submodules
- **Fast→full mode change detection** + auto-enable UI for ui-variant binary
- Layout endpoint: O(n*e) edge mapping replaced with binary search
- Layout JSON: handle invalid UTF-8 and NaN in serialization

### Platform Fixes

- **Windows**: Zed/VS Code/KiloCode config paths, PATH delimiter, S_IXUSR check, agent detection using home_dir-relative paths, APPDATA-based userconfig test
- **Linux portable**: Alpine musl compatibility, security audits added to smoke tests, XDG_CONFIG_HOME in smoke environment
- **Cross-platform vector blob assembly**: preprocessor conditionals for macOS Mach-O / Linux ELF / Windows COFF
- C++ SEGV fix: NULL deref in LSP type resolver on large header files

### Code Quality & Linting

- 337 linter warnings resolved across 16 files (named constants, cognitive complexity extraction)
- Cognitive complexity threshold set to industry default (25), 168 functions split
- `cbm_write_db` god-function split (569 → 325 lines)
- All NOLINTNEXTLINE suppressions eliminated, iterative AST walkers
- ASan leak fix in semantic corpus token_map

### CI/CD & Security

- **Decoupled security gate**: security-static + CodeQL run independently, don't block test/build/smoke pipeline
- **Security audits on ALL binary variants** (standard + UI) — previously UI binaries were unaudited
- **AV-safe token vocabulary**: 11 heuristic-triggering words removed from Nomic embeddings
- CI split into reusable workflow components
- Vendored dependency bumps: SQLite 3.51.3, Mongoose 7.21, mimalloc 3.2.8
- Actions bumped: download-artifact v8.0.1, attest-sbom v2, cosign v4.1.1, msys2 v2.31.0, checkout v6.0.2, cache v5.0.4, upload-artifact v7.0.0, attest-build-provenance v4.1.0, codeql-action v4.35.1

### Contributors

- **@halindrome** — Git submodule dirty state detection, risk_labels on trace_path
- **@Koolerx** — C# Interface registry fix, base_list handler, FTS5 BM25 search, JS/TS IMPORTS resolution, Channel schema
- **@dLo999** — CBM_CACHE_DIR configurable database directory, skip-update-when-latest, nested .gitignore support (#178)
- **@Selene29** — Layout binary search optimization, UTF-8/NaN serialization fix
- **@slvnlrt** — Windows PATH delimiter fix, runtime binary path detection
- **@jimpark** — Zed and VS Code Windows config path fixes
- **@ahundt** — Wire up silently-ignored search_graph params
- **@maplenk** — include_tests param on trace_path, search_graph param wiring
- **@gdilla** — Skill consolidation, risk_labels + --progress CLI flag

### VirusTotal Scan Results

All release artifacts scanned — **0 detections across all engines**.

| File | Engines | Detections | Report |
|------|---------|------------|--------|
| `codebase-memory-mcp-linux-amd64` | 64 | 0 | [View](https://www.virustotal.com/gui/file-analysis/MzI5YTY1MDk3NTY5ZDM1NWFiYTQyYTI0ODI3MWFkN2I6MTc3NTUwNzA2Mg==/detection) |
| `codebase-memory-mcp-linux-arm64` | 62 | 0 | [View](https://www.virustotal.com/gui/file-analysis/ZWMxMjJhNGQ1NDBlMTliOGFkODFjZDg3MzE5MDI2NmM6MTc3NTUwNzA1NQ==/detection) |
| `codebase-memory-mcp-linux-amd64-portable` | 64 | 0 | [View](https://www.virustotal.com/gui/file-analysis/MDY1NDlkYWQ0NzZlYzZiYjQzZjAwZGRlMDVhMWUxOTk6MTc3NTUwNzA1OA==/detection) |
| `codebase-memory-mcp-linux-arm64-portable` | 62 | 0 | [View](https://www.virustotal.com/gui/file-analysis/Mzk2ZTIyMjJkMzcyNDA3NWJiMGVmZWFjMGUwYTY1N2U6MTc3NTUwNzA1Mg==/detection) |
| `codebase-memory-mcp-darwin-arm64` | 63 | 0 | [View](https://www.virustotal.com/gui/file-analysis/YTYxYmE1M2I1Mzk3MzZhZDljNzk2NmE0OGFiN2Y2NTY6MTc3NTUwNzA2NA==/detection) |
| `codebase-memory-mcp-darwin-amd64` | 61 | 0 | [View](https://www.virustotal.com/gui/file-analysis/NTg5YTMwYzlhZDc0NGEzM2Q3ZTYxZmVhNjIwZDQ1ZTg6MTc3NTUwNzA2Nw==/detection) |
| `codebase-memory-mcp-windows-amd64.exe` | 71 | 0 | [View](https://www.virustotal.com/gui/file-analysis/NDFmNmZiZmUwYmI4MGEwMjU2YjU3MGUxYTgwNDJkODQ6MTc3NTUwNzAyNg==/detection) |
| `codebase-memory-mcp-ui-linux-amd64` | 64 | 0 | [View](https://www.virustotal.com/gui/file-analysis/Yjk0YmE2ZDdjZTQ2NWY5NTRiNzIwODg2MWE1NWFlMTQ6MTc3NTUwNzA0Mg==/detection) |
| `codebase-memory-mcp-ui-linux-arm64` | 61 | 0 | [View](https://www.virustotal.com/gui/file-analysis/ZTM2YjdiZTljZWM5N2YyMjg4NGY0ZmNlNDUwZjRmN2U6MTc3NTUwNzAzNQ==/detection) |
| `codebase-memory-mcp-ui-linux-amd64-portable` | 64 | 0 | [View](https://www.virustotal.com/gui/file-analysis/NTNmYWEzZTE2MzMyMGZhNGU4NzJkMTc0M2MxNTY5M2Q6MTc3NTUwNzAzOQ==/detection) |
| `codebase-memory-mcp-ui-linux-arm64-portable` | 63 | 0 | [View](https://www.virustotal.com/gui/file-analysis/YmFlMzkwZDgyNGZlNWViMDI1ZmE0Y2ZhNDkzMDUzOWQ6MTc3NTUwNzAzMg==/detection) |
| `codebase-memory-mcp-ui-darwin-arm64` | 62 | 0 | [View](https://www.virustotal.com/gui/file-analysis/Nzg1MGViY2NjOWNiNjJhMTFkNjUzZDk5YzI1YTY2ZWU6MTc3NTUwNzA0NQ==/detection) |
| `codebase-memory-mcp-ui-darwin-amd64` | 61 | 0 | [View](https://www.virustotal.com/gui/file-analysis/NDQ2NTBiOTgyZDEzOTllOTI0YjdlNDVmZDY4OWU4YWQ6MTc3NTUwNzA0OA==/detection) |
| `codebase-memory-mcp-ui-windows-amd64.exe` | 71 | 0 | [View](https://www.virustotal.com/gui/file-analysis/NjY5YmYwODYyOTlhMWRkYjJiOGUwOGE1NWYyNzc0MWI6MTc3NTUwNzAyOQ==/detection) |
| `install.sh` | 62 | 0 | [View](https://www.virustotal.com/gui/file-analysis/MjVlZmQ5N2UzMzQ0Y2Q2MGM5ZDgxZDZhM2IxMjY3ZDM6MTc3NTUwNzAyMw==/detection) |
| `install.ps1` | 62 | 0 | [View](https://www.virustotal.com/gui/file-analysis/ZDk2Y2Y3MGI1MmJmMzFkZWJiMmIxODEzNzhmM2UzYTg6MTc3NTUwNzAyMw==/detection) |
| `LICENSE` | 61 | 0 | [View](https://www.virustotal.com/gui/file-analysis/NzQ1NWJkNmJjOTA4YmE5ZTc0MGE3Y2JmMTFmYjcwNDM6MTc3NTUwNzA2OA==/detection) |

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `0.6.0` · 2026-06-12 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/0.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
