---
title: "codebase-memory-mcp v0.10.8"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.8"
version: "v0.10.8"
published: "2026-08-19"
type: "patch"
lang: "en"
summary: "A community-heavy patch release: 19 pull requests merged since v0.10.6, most from contributors. Thank you all!"
---

# codebase-memory-mcp v0.10.8

# v0.10.8

> **Note on v0.10.7:** this release supersedes v0.10.7, which was lost to a release-pipeline
> publishing error (published under the tag `0.10.7` instead of `v0.10.7`; package installers
> resolve the v-prefixed tag, and release immutability makes the name unrecoverable). The npm
> and PyPI 0.10.7 packages are deprecated/yanked for that reason — their binaries were fine,
> their download URLs were not. v0.10.8 carries the identical code content plus the pipeline
> hardening that prevents a recurrence.

A community-heavy patch release: 19 pull requests merged since v0.10.6, most from
contributors. Thank you all!

## Graph correctness

- **Cypher aggregates no longer undercount** (#1196). Both truncation mechanisms are fixed:
  unlabeled scans stopped collecting candidates at max_rows *before* aggregation ran
  (#1323, @Enferlain), and relationship-expansion buffers were capped so aggregation never
  saw rows beyond an internal growth limit (#1698). `count()`/`collect()` now see the
  complete match set; `max_rows` limits only the rows returned, as documented.
- **Python aliased from-imports resolve to the real definition** (#1371, @Joseph-MingEn).
  `from .gate import execute as bridge_execute` now produces a CALLS edge to `execute`
  itself rather than losing the call, and aliased base-class imports land on the real class
  node. On our django benchmark this recovered 26 INHERITS and 42 OVERRIDE edges with zero
  losses elsewhere, and left TypeScript graphs byte-identical.
- **Cross-language suffix matching** for qualified-name lookups (#1647, @rudi193-cmd).
- **search_graph stops returning semantic-only ghosts** — results backed by nothing but a
  similarity edge no longer surface as if they were definite matches (#1319, @JJordan0C).
- **List-valued fields extract correctly** instead of collapsing to their first element
  (#1325, @Enferlain).
- **Index responses report persisted coverage truthfully** (#1326, @Enferlain): an
  incremental run that does not revisit a file with recorded parse gaps no longer reports
  those gaps as vanished — the response now composes its skipped/parse-partial summaries
  from the stored coverage state, falling back to per-run data only if that read fails.

## Windows

- **Non-ASCII search content no longer degrades to `?`** (#1704). The search_code raw scan
  pipes PowerShell output, and PowerShell 5.1 encodes that pipe in the console OEM
  codepage — so Cyrillic, CJK, or accented content turned into question marks depending on
  which console the server inherited. The pipe is now pinned to UTF-8 unconditionally.
- **search_code understands UTF-8 output paths and gains a context column** for matches
  (#1253, @anfedoro).
- **Code search is bounded and cancellable** — abandoning a query no longer leaves an
  orphaned scan running (#1608, @ertankucukoglu).

## Platforms & tools

- **FreeBSD support** (#1467, @PR9000).
- **list_projects pagination**: a lean default response plus offset/limit and
  include_details for the full view (#1181, @tmonestudio).
- **Extensionless shebang scripts detect their language** (#1203, @ibaldr89).
- **Index-mode capability rebuild** (#1263, @astandrik).
- **is_test detection for tests/ directories** (#1308) and a **diff-aware clang-tidy
  hook** (#1310, both @Yyunozor).

## Release pipeline (the v0.10.7 lesson, hardened)

- Release gates fail closed on cancelled jobs: a timed-out gate can no longer cascade into
  a silently skipped test matrix (#1719).
- Malformed version inputs are refused preflight — a bare, non-v-prefixed version can never
  again publish an unresolvable tag (#1719).

## Internal

- Test harnesses use isolated daemon runtimes so suite runs cannot touch the account
  daemon (#1695, @astandrik); LF checkout contracts for shell entrypoints and git hooks
  (#1314 @mlandolfi90, #1699 with @xumian520); the stdin-gate regression tests no longer
  depend on the registry shipping a zero-argument tool (#1704).

<!-- cbm-security-verification:start -->
## Security Verification

Every binary published below was scanned by VirusTotal before smoke and soak testing, and the verdict for the exact shipped bytes is linked per product (decisive engines: 61–68).
Every shipped binary was clean.

| Product | Shipped binary | VirusTotal verdict |
|---|---|---|
| `linux-amd64` | `cb6dc545a8cb714799461ba7d8c223dbca7d02ca46ea5a4215c1beb450fd8e09` | [clean](https://www.virustotal.com/gui/file/cb6dc545a8cb714799461ba7d8c223dbca7d02ca46ea5a4215c1beb450fd8e09/detection) |
| `linux-arm64` | `e861b4ae831a24ab69e82bb9c4ca8c70029af55b9a074ef0ed2565a53c0de24c` | [clean](https://www.virustotal.com/gui/file/e861b4ae831a24ab69e82bb9c4ca8c70029af55b9a074ef0ed2565a53c0de24c/detection) |
| `linux-amd64-portable` | `1175645cb30560e7e47d78611cd1bcb509478eaf6d4e51f72fe18327ee9c1351` | [clean](https://www.virustotal.com/gui/file/1175645cb30560e7e47d78611cd1bcb509478eaf6d4e51f72fe18327ee9c1351/detection) |
| `linux-arm64-portable` | `0bf1b3cf3659f6dcdb01bb6313a93dcbcb53e2cd1a52820f024df7a0cf48f44e` | [clean](https://www.virustotal.com/gui/file/0bf1b3cf3659f6dcdb01bb6313a93dcbcb53e2cd1a52820f024df7a0cf48f44e/detection) |
| `darwin-amd64` | `1d5b79257d91973809ee70482781db3d1a78f62fc1cd5d18a5ab0608451d16d4` | [clean](https://www.virustotal.com/gui/file/1d5b79257d91973809ee70482781db3d1a78f62fc1cd5d18a5ab0608451d16d4/detection) |
| `darwin-arm64` | `2412e017268bef8f847f38d1b0f79f63185b38c27fe6fba637067bfc87c0eedf` | [clean](https://www.virustotal.com/gui/file/2412e017268bef8f847f38d1b0f79f63185b38c27fe6fba637067bfc87c0eedf/detection) |
| `windows-amd64` | `b4b403b1d7c4def3785f148b93f345ce8427858f4f5489ce28580c4387a336a6` | [clean](https://www.virustotal.com/gui/file/b4b403b1d7c4def3785f148b93f345ce8427858f4f5489ce28580c4387a336a6/detection) |
| `windows-arm64` | `67b0341ee62f07f850d3954e4f387855f90ea8c6c4b7ed41b8a62d61344373a4` | [clean](https://www.virustotal.com/gui/file/67b0341ee62f07f850d3954e4f387855f90ea8c6c4b7ed41b8a62d61344373a4/detection) |

Selection is tuple-local and defaults to stripped. The selected executable SHA-256 was verified again after packaging; archive containers were not redundantly submitted to VirusTotal. Their hashes remain available in `checksums.txt`.

Durable evidence: [candidate provenance](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.8/release-candidates.tsv), [candidate VirusTotal results](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.8/virustotal-candidate-results.tsv), [selection decisions](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.8/release-selection.tsv).
<!-- cbm-security-verification:end -->

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.10.8` · 2026-08-19 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
