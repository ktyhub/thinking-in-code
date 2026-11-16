---
title: "codebase-memory-mcp 0.8.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "0.8.0"
version: "0.8.0"
published: "2026-06-12"
type: "minor"
lang: "en"
summary: "The headline: three new type-aware LSP engines. Java, Kotlin, and Rust now get full hybrid LSP resolution — type-aware call resolution through class hierarchies, annotation/attribute linkage, signature-aware overload…"
---

# codebase-memory-mcp 0.8.0

> 📦 Archived release page — binaries for this version are no longer published. Get the [latest release](https://github.com/DeusData/codebase-memory-mcp/releases/latest).

**The headline: three new type-aware LSP engines.** Java, Kotlin, and Rust now get full hybrid LSP resolution — type-aware call resolution through class hierarchies, annotation/attribute linkage, signature-aware overload matching, generics handling, and cross-file type inference — joining C/C++, Python, TypeScript/JavaScript, Go, C#, and PHP for **9 languages under hybrid LSP**.

## Architecture intelligence

- **Leiden community detection**: `get_architecture` now surfaces multi-level Leiden communities (replacing single-level Louvain) — real module boundaries on kernel-sized graphs, computed in seconds instead of minutes.
- **Queryable computation-bottleneck metrics**: functions carry complexity, loop-depth, and scan-pattern metrics in the graph — you can now Cypher-query your codebase for its own algorithmic hotspots. (We used exactly this to find and fix several of our own, see below.)
- Helm support: chart templates, `include` call linkage, and `Chart.yaml` dependency edges; HCL block labels folded into node names; C/C++ preprocessor macros are now first-class Macro nodes (2.3M of them in the Linux kernel).

## Stability — the biggest hardening push so far

The release fleet now indexes 16 large OSS repos end-to-end — the Linux kernel (4.8M nodes), elasticsearch, kubernetes, the TypeScript compiler, bitcoin, zig, symfony, and more — with database-level validity gates. That hunt, plus outstanding community reports, closed a long list of crashes:

- **C++/templated-code crash family eliminated**: uninitialized template-argument arrays, out-of-bounds parameter lookups, unbounded resolve recursion, expression-evaluation blowups — reported across #424, #427/#428/#432, #312, #322/#323, #336, #344, #355, #360, #385.
- **Allocator unification** (#424): the whole binary — vendored tree-sitter, SQLite, libgit2 — now runs under one allocator, ending a class of cross-allocator heap corruption on complex C++.
- **Startup crash-loop fixed** (#235, #439): a stack-buffer overflow in the project-list error path could SIGABRT the server for *all* projects; one corrupt cache DB no longer takes down every session.
- **Database integrity, end to end**: oversized index keys now spill to overflow pages correctly, all properties JSON is escaped and validated at the producer, the `url_path` index always matches its generated column, and WAL files are checkpointed on close/startup (#387). Every database in the 16-repo fleet passes `PRAGMA integrity_check` clean.
- **Server lifecycle**: stdio servers exit with their parent via a death watchdog (#406), MCP `ping` is supported (#354), JSON-RPC string ids are preserved (#253), log level is configurable via `CBM_LOG_LEVEL` (#413).
- **Windows**: wide-char API for non-ASCII paths (#386), cmd.exe-compatible git history pass (#324), `PATHEXT` probing (#221), packaging-walk hang fixed — the full test suite is green on Windows.
- Plus: phantom gRPC routes (#294), `moderate`-mode silently dropping subtrees (#411) with excluded directories now reported in indexing results, validator-safe project names (#349), UI flag diagnostics (#350).

## Performance at kernel scale

- **Memory rework**: streaming SQLite dump writer, string interning, allocator page reclaim, and extraction back-pressure — the full Linux kernel indexes in ~4 minutes on a laptop, within a bounded memory budget; cgroup-aware CPU/memory detection and a `CBM_WORKERS` override (#364/#365) make container behavior predictable.
- **Quadratic hot paths eliminated**, several found by pointing the new bottleneck metrics at our own codebase: C/C++ cross-LSP overload resolution (#410), registry construction and lookup paths in the PHP/Python/Java/Kotlin resolvers, and architecture-boundary computation. Large PHP and Java monorepos see order-of-magnitude faster full indexes (symfony 35x, elasticsearch 9x vs. this cycle's early builds).
- Graph quality improved throughout these fixes — resolution coverage and edge fidelity are better in every supported language.

## Query layer

- **Cypher**: `EXISTS {}` predicates in WHERE, `COUNT(DISTINCT)` (#239), label alternation `(n:A|B)` (#242), label tests in WHERE (#241), `WITH DISTINCT` (#238), string/scalar/entity-introspection functions, multi-argument scalars — and unsupported syntax now fails loudly instead of returning silent empties (#373).
- `search_code`: invalid regex errors instead of empty results (#283), `&` in paths, timing in responses, wildcard-free `file_pattern` as substring (#200), `.mjs`/`.cjs`/`.mts`/`.cts` indexed (#197), Blade templates mapped (#258), R `box::use()`/`library()` imports (#218/#219).

## A much bigger safety net

- New **per-grammar regression suite across all 159 grammars** plus probe suites for extraction, edge creation, and LSP resolution — the suite now runs **5,500+ tests** under a strict no-skip policy (skips are hard failures).
- Crash reproductions execute as subprocess-isolated tests with exit-signal assertions; ASan/LSan run across the suite; the macOS Intel build leg is now blocking so darwin-amd64 always ships.

## Distribution & integrations

- Published to the **official MCP Registry** and the **Glama directory**; portable static Linux binary on all install/update paths.
- `install --plan` machine-readable receipts before any config mutation (#388), Cursor IDE detection (#222), fish-native PATH handling (#319), `$CLAUDE_CONFIG_DIR` respected (#321), SessionStart hooks for Codex, Gemini CLI, and Antigravity (#330), ADR storage unified between MCP tools and the UI (#256).

---

## 🙏 Code contributors

This release contains code from **16 community contributors** — both directly merged PRs and PRs we distilled onto main (distilled PRs are credited to their authors; thank you for the patience with that workflow):

- **@mattall** — defensive type validation (PR #427) and out-of-line C++ method attribution (PR #428), plus the precise follow-up diagnosis in #432
- **@jjserenity** — Windows wide-char path support (#386) and WAL checkpointing (#387), with **HC Cheng** co-authoring
- **@cmeerw** — MCP ping support (#354), CLOCK_MONOTONIC timing (#342)
- **@romanornr** — pending-template-call guard (#322) and expression-evaluation cap (#323)
- **@yangsec888** (Sam Li) — cgroup-aware CPU/memory detection + `CBM_WORKERS` override (PR #365)
- **@nvt-pankajsharma** — parent-death watchdog for the stdio server (PR #407)
- **@santanusinha** — environment-driven log level (PR #414)
- **@casualjim** — TS-LSP tuple-return arena fix (PR #374) and arena NULL guard
- **@Smiie-2** — C++ template default-argument segfault fix (PR #360)
- **@jjoos** — growable node stacks in channel extraction (PR #339)
- **@halindrome** (Shane McCarron) — `$CLAUDE_CONFIG_DIR` support (PR #321)
- **@hippus** (Alexey Z) — Windows cmd.exe-compatible git history (PR #325)
- **@code-by-mahereddy** — security & correctness fixes from a codebase audit (PR #352)
- **@cyprien-bussy** — workspace import resolution + SvelteKit route extraction (PR #369)
- **@utilia-ai-wox** — workspace/pkgmap route fixes

## 🙏 Issue reporters

Precise, reproducible reports drove this release's stability work: **@ZapAndersson** (#424), **@mattall** (#427/#428/#432), **@Charles5277** (#439), **@awconstable** (#235), **@mattepiu** (#410), **@nvt-pankajsharma** (#406), **@GonEbal** (#308/#408), **@Patch76** (#411), **@santanusinha** (#413), **@romanornr** (#322/#323), **@cmeerw** (#312/#342/#354), **@jjoos** (#305/#340), **@Codyzzz-zach** (#344), **@lilisir0722-crypto** (#355), **@EnziinSystem** (#385), **@Al2Klimov** (#336), **@hippus** (#324), **@yangsec888** (#364), **@mydreamdoctor** (#253), **@zer09** (#373), **@sponger94** (#294), **@marcusyoung** (#218/#219), **@maksodf** (#237-#242), **@ehendrix23** (#252), **@gaia** (#258), **@speeed76** (#200), **@digijoebz** (#213), **@nishitpatel92** (#220), **@Icaruk** (#221), **@xberry1231** (#222), **@memniko** (#227), **@mandricmihai** (#228), **@tomerikjansen-crypto** (#197), **@cryptomaltese** (#283), **@SavageMessiah** (#319), **@caioribeiroclw-pixel** (#388), **@dergachoff** (#330), **@bschrib** (#256), **@Nick-CHI** (#350), **@edecarvalhoreis** (#349), **@Azami1990** (#367), **@Carnival-z** (#382).

If we missed anyone, tell us and we'll fix the notes — every report and PR moves this project forward.

**Full changelog**: https://github.com/DeusData/codebase-memory-mcp/compare/v0.7.0...v0.8.0 — 206 commits

## Security Verification

All release binaries scanned with 70+ antivirus engines — **0 detections**.

| Binary | SHA-256 | VirusTotal |
|--------|---------|------------|
| `darwin-amd64` | `d3e46236a32a9c9f7315...` | [0/72 ✅](https://www.virustotal.com/gui/file/d3e46236a32a9c9f7315dbadc587ac554702d40793d00769e0cc13e26a0b09fd/detection) |
| `darwin-arm64` | `cf28ac4e0d2cca9a5a07...` | [0/72 ✅](https://www.virustotal.com/gui/file/cf28ac4e0d2cca9a5a079f1467a72e454d69606c71423cc2ecdc744e54e05758/detection) |
| `linux-amd64` | `ac4cae50ecad302a510f...` | [0/72 ✅](https://www.virustotal.com/gui/file/ac4cae50ecad302a510fa02cf3521469a3f523ed8673993a0c883fcc666d4981/detection) |
| `linux-arm64` | `abde85eea0c0a540afd0...` | [0/72 ✅](https://www.virustotal.com/gui/file/abde85eea0c0a540afd07515c87235aafac8284b12140305b28342adc9e225de/detection) |
| `windows-amd64` | `d100a3ea2fd9fc05616a...` | [0/72 ✅](https://www.virustotal.com/gui/file/d100a3ea2fd9fc05616afbfcc5eb565d1ac3e96a144b68a1df812aeb872da62b/detection) |

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `0.8.0` · 2026-06-12 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/0.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
