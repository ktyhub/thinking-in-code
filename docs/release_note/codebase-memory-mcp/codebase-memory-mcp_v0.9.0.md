---
title: "codebase-memory-mcp v0.9.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.9.0"
version: "v0.9.0"
published: "2026-07-08"
type: "minor"
lang: "en"
summary: "A large robustness and platform-support release since v0.8.1 — first-class Windows support, big indexing performance and memory-safety gains, broad extraction-accuracy fixes across many languages, and a substantially…"
---

# codebase-memory-mcp v0.9.0

# codebase-memory-mcp v0.9.0

A large robustness and platform-support release since v0.8.1 — first-class Windows support, big indexing performance and memory-safety gains, broad extraction-accuracy fixes across many languages, and a substantially better graph UI.

## Highlights

- **First-class Windows support** — end-to-end non-ASCII path handling, installer/runtime reliability fixes, a UI-hang fix, and a native **windows-arm64** build + smoke pipeline.
- **Indexing performance & resilience** — a kernel-scale campaign cut indexing wall-time ~61% with deterministic output, plus a crash/hang **supervisor** that quarantines a bad file and indexes the rest instead of aborting the whole run.
- **Memory safety on large repositories** — accurate Linux RSS accounting, peak-vs-live reconciliation, bounded parallel retention for low-RAM machines, and a use-after-free fix in cross-thread slab frees.
- **Graph UI** — a configurable node budget up to 10M nodes with scaled rendering and contrast controls, dead-code filtering, node code preview, GitHub deep-links, URL routing, and offline label rendering (no remote font fetches).
- **Extraction accuracy** — many CALLS / IMPORTS / route-extraction correctness fixes across C/C++, Python, Go, PHP, Kotlin, Java, TypeScript/JavaScript, Rust, and more.

## What's changed

### Windows support
End-to-end non-ASCII path support (`_wfopen`, wide-argv + `CreateProcessW`, escaped/NUL-terminated worker command lines); installer reliability and Mark-of-the-Web docs; a git-spawn handle-inheritance fix that resolved a UI deadlock; drive-letter handling in the hook augmenter; large-`.db` size handling; a real error when Windows persistence export fails; and a full native windows-arm64 build + smoke pipeline.

### Indexing, performance & memory safety
~61% faster kernel-scale indexing with deterministic output; a TypeScript-at-scale cascade fix with parallel-only crash recovery; a crash/hang supervisor that quarantines the culprit file; accurate `/proc` RSS on Linux; peak-vs-live RSS reconciliation; bounded, source-capped parallel retention for low-RAM peak RSS; supervised-subprocess RSS isolation for background auto-index/watcher; an O(1) aligned-page cross-thread slab-free fix (use-after-free); graph-buffer upsert-contract and mem-budget fixes; host-tiered RAM budget; and per-file indexing failures now reported via `skipped[]` + a logfile instead of failing silently.

### LSP / extraction accuracy
CALLS-edge correctness (string-dispatch edges, C/C++ enclosing-function attribution, receiver-aware self-recursion, recursion-depth caps in py/go/php/kotlin, a memoized guard for a Python exponential re-eval hang); route/HTTP extraction (reject filesystem paths so client routes join server routes, canonicalize parameterized paths, Spring routes on Kotlin controllers, Django REST `@action`); imports/resolution (IMPORTS keyed by local name, reject non-file-like targets, tsconfig alias `../` climbs, mixed Java/Kotlin callgraph edges, stable Java USAGE ownership); plus `Class.lines` accuracy, INHERITS/IMPLEMENTS counted in degree, a heap-allocated `walk_defs` frame stack fixing stack overflow on deep files, and a reproduce-first bug suite with a 5-platform board.

### Graph UI
Node budget up to 10M with scaled rendering and contrast controls; offline label rendering (no remote CDN fonts); dead-code filtering, node code preview, and GitHub deep-links; URL routing, filter-panel UX and camera fly-to; the filter sidebar stays visible when everything is filtered out; Windows folder navigation in the index picker; indexing-job failures surfaced instead of silently completing; projects unwatched on UI delete; bounded octree recursion for coincident points.

### MCP server & CLI
Structured tool metadata; the CLI accepts flags, stdin, and `--args-file` with per-tool `--help`; project resolution by internal name + ghost-DB filtering and a `project_name` alias; `trace_path` no longer conflates distinct same-named functions and follows CROSS_* edges; valid UTF-8 snippets for non-UTF-8 sources; correct JSON control-char escaping; cypher label-filtered traversal no longer truncates at 10 and preserves node properties through `WITH`; `get_architecture` overview subset; `detect_changes` honors `since`.

### Discovery, watcher & lifecycle
Honor `.git/info/exclude`, global `core.excludesFile`, and linked-worktree ignore sources; honor exclusions in pkgmap/path-alias/envscan walks; `.cbmignore` negation can no longer un-skip safety-core dirs; deploy/ dirs no longer double-indexed; scoped search handles repo paths with spaces; prune projects whose root stays missing; an `auto_watch` config gate; correct `canonical_root` for worktrees and subdirectory projects; ADR preservation across full re-index.

### Grammars, build & docs
Vendored InterSystems ObjectScript grammars and the Mojo parser; SBOM now computes the grammar count and completes the non-MIT license summary. Full validation pipeline on PRs with superseded-run cancellation; issue-triage bots; per-leg smoke gating that fixes matrix collapse / false-green; gcc-15 and Nix-on-macOS build fixes. Config-file reference and `extra_extensions` docs.

## Thanks to our contributors

This release includes merged work and reported issues from a large community. Thank you:

@77652189 · @alexisperinger-ux · @Andy11-cpu · @apappas1129 · @BombaxCeiba · @Bortlesboat · @caioribeiroclw-pixel · @catsmonster · @Flipper1994 · @Golevka2001 · @GothUncc · @HackAttack · @halindrome · @imateusdev · @isc-tdyar · @JOhnsonKC201 · @jonghyunlee-29cm · @jstar0 · @jsw6701 · @KerseyFabrications · @kirilklein · @kriswill · @linze0721 · @minorityre · @moofone · @mvanhorn · @Naam · @nguiaSoren · @pcristin · @rainder · @rarepops · @Ravandevil25 · @RithvikReddy0-0 · @RollerCoaster1899 · @sahil-mangla · @ShauryaaSharma · @SS-42 · @SyntaxSawdust · @win4r

…and everyone who filed the issues these fixes resolved. Dependency updates via Dependabot.

**Full changelog:** https://github.com/DeusData/codebase-memory-mcp/compare/v0.8.1...v0.9.0

## Security Verification

All release binaries scanned with 70+ antivirus engines — **0 detections**.

| Binary | SHA-256 | VirusTotal |
|--------|---------|------------|
| `darwin-amd64` | `04ee3048810c19099502...` | [0/72 ✅](https://www.virustotal.com/gui/file/04ee3048810c19099502adc8bb83039423f02f2553d17677892a7f03b924e01f/detection) |
| `darwin-arm64` | `d9fbdd7d8570a77b2fb3...` | [0/72 ✅](https://www.virustotal.com/gui/file/d9fbdd7d8570a77b2fb32453e00bd52a02627281309cd56003a4eccfcfe878d6/detection) |
| `linux-amd64` | `a251a9f56a9464ef2378...` | [0/72 ✅](https://www.virustotal.com/gui/file/a251a9f56a9464ef2378b5e12be89842e95c7f015a9c7b7806f8dc572212a41d/detection) |
| `linux-arm64` | `c9cb157c6b27b42bafe9...` | [0/72 ✅](https://www.virustotal.com/gui/file/c9cb157c6b27b42bafe9050d6516595031dd3ff135e8cec4a726fd56116dffc3/detection) |
| `windows-amd64` | `9a205fa5ae759fbc866b...` | [0/72 ✅](https://www.virustotal.com/gui/file/9a205fa5ae759fbc866bfe1554f0c05a303be9ae6e0a00f94d875dc0c25e0680/detection) |
| `windows-arm64` | `a299150de19bb4da9a88...` | [0/72 ✅](https://www.virustotal.com/gui/file/a299150de19bb4da9a880a6139757076bd4139b2f6a7e7cf31bdd431d53aed9c/detection) |

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.9.0` · 2026-07-08 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
