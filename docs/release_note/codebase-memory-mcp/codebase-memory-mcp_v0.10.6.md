---
title: "codebase-memory-mcp v0.10.6"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.6"
version: "v0.10.6"
published: "2026-08-17"
type: "patch"
lang: "en"
summary: "Two stories in one release: the 0.10.x indexing slowdown is gone, and the install failures that survived v0.10.5 are fixed — including every construct from the configs you sent us."
---

# codebase-memory-mcp v0.10.6

# codebase-memory-mcp v0.10.6

Two stories in one release: **the 0.10.x indexing slowdown is gone**, and **the install
failures that survived v0.10.5 are fixed** — including every construct from the configs you
sent us. If cbm got slower for you since 0.9.0, or `install` still refused your Hermes,
goose, OpenCode, or Codex config, this is the release to take.

## The indexing regression program (#1669)

Since 0.10.0, indexing large repos had drifted from slower to unusable — java 6× worse,
C# 2.6×, TypeScript 2×. The cause was not one bug but a family: per-file work that scaled
with the whole corpus. All of it is fixed, measured on the same host against the same
corpora as the reports:

- **Java 477 s → 86 s** (elasticsearch): cross-file resolution rebuilt a registry of every
  definition in the corpus **per file**. It is now built once and shared, with a per-file
  overlay for local symbols.
- **C# 1211 s → 450 s** (dotnet/runtime), now with **48% more edges** than 0.9.0: three
  corpus-proportional scans eliminated, plus an import-context bug that had been silently
  suppressing C# usage edges — one 147 KB generated file went from 490 s to 6.8 s.
- **TypeScript 37 s → ~24 s** (microsoft/TypeScript): the expression-type evaluator
  re-evaluated shared subexpressions once per enclosing alternative — 2^n on tsc-compiled
  spread chains. A per-node memo makes it one evaluation per node; the pathological file
  from the TS conformance suite dropped from 20 s to effectively zero.
- **Linux memory blowup fixed** (#1654): v0.10.4 could OOM a 36 GB machine indexing a tree
  v0.9.0 handled in 13 minutes. mimalloc's Linux arena-commit default is restored.
- **It stays fixed**: a new complexity guard suite runs in CI on every platform and trips
  on counter *ratios* (never wall time) if any pipeline pass goes superlinear again, and
  `CBM_PROFILE=1` now prints per-pass timings from any production binary.

## Install: the constructs from your real configs

**Hermes** (#1631, reported by @iandol and Galaxy-VN, root-caused with an isolated repro by
@rg6304): four pieces of ordinary YAML made `install` fail permanently — empty flow
collections (`plugins: []`, `tool_choice: {}`), block sequences at column 0, double-quoted
strings continued with a trailing `\`, and mid-word apostrophes (`LET'S GO` in a persona
string opened a "quote" that never closed). All four are accepted now; quotes and
anchors are indicators only where a value begins, the same rule the `*` fix used in
v0.10.4. Both reporters' full configs — 15 KB each — install end-to-end with every
original byte preserved.

**Entries we wrote ourselves are recognised again.** Older cbm versions wrote `command:`
unquoted; the goose block gained a required field; your entry was then declared "foreign"
forever. An entry under our key that matches a shape any previous release wrote — or
whose command is our binary at a moved path — is repaired in place. Truly foreign entries
are still refused byte-untouched.

**goose** (#1673 + #1675): the extension block now carries the `name` field goose's parser
requires — before this, goose silently dropped the entry and the "successful" install was
invisible. `envs: {}` in a sibling no longer aborts the write (community fix by
**@pcristin** — a model contribution, merged as-is). Old blocks repair on upgrade.

**OpenCode / annotated MCP entries** (#1630, #1582): when a client adds keys to our entry
("enabled": true and friends), repairs now replace only the command value — comments and
client keys survive verbatim. And ownership comparison is separator-insensitive: an entry
storing `C:\...\codebase-memory-mcp.exe` is the same binary as the installer's
`C:/.../codebase-memory-mcp.exe`. @gotspatel's posted config was the file that cracked
this one after persistence across four releases.

**Windows-authored configs with a UTF-8 BOM** (#1656): PowerShell's `Set-Content` writes a
byte-order mark, and every YAML edit failed on such files regardless of content — the
reporter proved content-independence with a 26-byte file, and those 26 bytes were their
23-byte control plus exactly the BOM. It is treated as a prologue now: skipped for
structure, preserved on write.

**Codex** (#1633, closing @spam0115's residual from #1580): the hook reconciler accepts
the managed hook pair v0.10.2 wrote (including the Windows CRLF+BOM variant) and rewrites
it in place; refusals now name their reason instead of failing generically.

## Windows: the DACL stops fighting you

The runtime directory's security descriptor was re-stamped on **every** process start,
whether or not anything was wrong. #1601 counted eleven no-op "Security change" USN
records against a single file in a day; #1620 lost atomic publishes to the rewrite window.
The re-stamp now fires only when the directory is not already in the exact owner-only
state — and directories damaged by the pre-v0.10.3 DACL regime (the empty-DACL logs
folder @patxisan found, which explained a month of unreadable 0-byte worker logs across
six reports) are detected and repaired in place. (#1416, #1601, #1620)

Also shipped: `CBM_RUNTIME_DIR` is forwarded in generated Codex configs (#1664 — a
relocated daemon was invisible to Codex-spawned servers), a missing final newline is no
longer reported as a partial parse, and `update` no longer names an installer that is not
there (#1653).

## Credits

@iandol · Galaxy-VN · @rg6304 · @gotspatel · @spam0115 · @pcristin · @Carnival-z ·
@tmonestudio · @patxisan · @roosteer — the configs, ACL dumps, and minimal reproductions
in this release's issues did most of the diagnostic work. Thank you.

<!-- cbm-security-verification:start -->
## Security Verification

Every binary published below was scanned by VirusTotal before smoke and soak testing, and the verdict for the exact shipped bytes is linked per product (decisive engines: 60–68).
Every shipped binary was clean.

| Product | Shipped binary | VirusTotal verdict |
|---|---|---|
| `linux-amd64` | `749bd2c37c2ad891392e0872b9e1fb0df7432f04c7ca0f49d11d00b24c5f2ec8` | [clean](https://www.virustotal.com/gui/file/749bd2c37c2ad891392e0872b9e1fb0df7432f04c7ca0f49d11d00b24c5f2ec8/detection) |
| `linux-arm64` | `e41cba76e58005edd4d21e19cbe1faf2c8f684c56fe78141c9956a9c632c9d26` | [clean](https://www.virustotal.com/gui/file/e41cba76e58005edd4d21e19cbe1faf2c8f684c56fe78141c9956a9c632c9d26/detection) |
| `linux-amd64-portable` | `8eea4ec828cd0cfa1c406cda5640a8dfa5381878b4d96b106cdc53aff3733508` | [clean](https://www.virustotal.com/gui/file/8eea4ec828cd0cfa1c406cda5640a8dfa5381878b4d96b106cdc53aff3733508/detection) |
| `linux-arm64-portable` | `c783294c009186c1c91c79d3611ef991af4db7816dbad13a922538513af97cac` | [clean](https://www.virustotal.com/gui/file/c783294c009186c1c91c79d3611ef991af4db7816dbad13a922538513af97cac/detection) |
| `darwin-amd64` | `34851da132369455b35530879c13e95360429251ab5e9604bc301beb25c9bcc5` | [clean](https://www.virustotal.com/gui/file/34851da132369455b35530879c13e95360429251ab5e9604bc301beb25c9bcc5/detection) |
| `darwin-arm64` | `8fdbdb2ec81f9526b34e71dffd46589b0e06fd5d60773732fd256c684d0251f4` | [clean](https://www.virustotal.com/gui/file/8fdbdb2ec81f9526b34e71dffd46589b0e06fd5d60773732fd256c684d0251f4/detection) |
| `windows-amd64` | `3099e91c29d8507c94bfb7ed431a1f89459ad9afdcea413cbab23c9ec3cfd972` | [clean](https://www.virustotal.com/gui/file/3099e91c29d8507c94bfb7ed431a1f89459ad9afdcea413cbab23c9ec3cfd972/detection) |
| `windows-arm64` | `f5f0585308d7f6130386857e1747a338abe194cb9b082c37d81acf43b8f18e9d` | [clean](https://www.virustotal.com/gui/file/f5f0585308d7f6130386857e1747a338abe194cb9b082c37d81acf43b8f18e9d/detection) |

Selection is tuple-local and defaults to stripped. The selected executable SHA-256 was verified again after packaging; archive containers were not redundantly submitted to VirusTotal. Their hashes remain available in `checksums.txt`.

Durable evidence: [candidate provenance](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.6/release-candidates.tsv), [candidate VirusTotal results](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.6/virustotal-candidate-results.tsv), [selection decisions](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.6/release-selection.tsv).
<!-- cbm-security-verification:end -->

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.10.6` · 2026-08-17 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
