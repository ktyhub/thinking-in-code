---
title: "codebase-memory-mcp v0.10.1"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.1"
version: "v0.10.1"
published: "2026-08-11"
type: "patch"
lang: "en"
summary: "A fast-follow fix release. If you use cbm through an MCP client — Claude Code, Codex, or any other spec-compliant client — upgrade now: in v0.10.0, the default output format of the core discovery tools rendered as an…"
---

# codebase-memory-mcp v0.10.1

# codebase-memory-mcp v0.10.1

A fast-follow fix release. **If you use cbm through an MCP client — Claude Code, Codex, or any other spec-compliant client — upgrade now:** in v0.10.0, the default output format of the core discovery tools rendered as an empty `{}` in exactly those clients. The graph was fine, the daemon was fine, the data was in the reply — but the part of the reply your client actually reads was empty. CLI usage was unaffected, which is precisely why this escaped the release gates.

Enormous thanks to **@Navier8**, whose [#1522](https://github.com/DeusData/codebase-memory-mcp/issues/1522) reported this within hours of the v0.10.0 release — with a reproduction quality we wish every bug report had: same binary, same index, format-by-format call tables that localized the fault to the MCP response path before we had even read the code. The report named two bugs; the verification sweep it triggered found a third. All three are fixed here, and all three shipped in v0.10.0 sharing one failure shape: **an empty result with a success status** — the worst possible failure mode for an LLM client, which cannot distinguish "empty" from "nothing found" and silently draws wrong conclusions instead of seeing an error.

## What was broken, and what changed

**1. Tree-format tool replies rendered as `{}` in MCP clients (the default format — the primary path).** A v0.10.0 wire-size optimization stopped duplicating tool payloads into `structuredContent`, leaving an empty object in its place — while every tool still declared a permissive `outputSchema`. The MCP spec tells clients: when a tool declares an output schema, `structuredContent` *is* the result. So `search_graph`, `trace_path`, `query_graph`, `get_architecture`, `search_code`, and `detect_changes` all returned `{}` to schema-honoring clients on every platform. The contract is now truthful end to end: **no tool declares an `outputSchema`** (tool output legitimately varies by the `format` parameter, so no static schema was ever honest), JSON-object payloads carry their parsed `structuredContent`, error envelopes keep their machine-readable `structuredContent.error`, and text-shaped payloads simply carry no `structuredContent` key — which also preserves the v0.10.0 win of never shipping the payload twice.

**2. Seven or more pipelined requests killed the MCP server outright.** Found while verifying the tool surface for this release: writing 7+ requests to the server in one burst — which is exactly what an agent issuing parallel tool calls does — overflowed an 8-frame input queue, and the overflow handler tore down the whole session: exit code 1, zero bytes of output, every already-computed response lost. A full queue is now **backpressure**: the reader simply stops accepting input until the worker catches up, and every request gets its answer. Verified with bursts of 7, 24, and 64.

**3. `config get` answered every question with an empty string and exit 0.** Unset keys printed nothing (while `config list` happily showed their defaults), and so did misspelled keys — a typo was indistinguishable from a correctly-read setting. `config get` now prints the stored value or the key's real runtime default, and unknown keys are an error (exit 1, with the known keys listed) on `get`, `set`, and `reset` alike.

## Why the gates missed it — and what guards it now

The honest part: our own test for the `structuredContent` change **pinned the broken behavior as correct**, at both the unit level and in the shipped-binary smoke suite — a reminder that a test asserting the wrong contract is worse than no test. The release pipeline was green because the pipeline agreed with the bug. That class is now closed from three directions: the unit suite enumerates the entire tool table and binds all three envelope branches (absent / parsed object / error) for every registered tool, the frontend suite asserts that over-capacity pipelined input is answered without loss, and the smoke suite drives the **real shipped binary** the way a schema-honoring MCP client does — asserting a default-format reply can never render as `{}`, that no tool advertises an `outputSchema`, that a 24-deep pipelined burst gets 24 answers, and that `config get` returns real values. Every one of these was verified red against v0.10.0 before the fix and red again with the fix reverted.

## Upgrade

- **Binary installs:** download below, or re-run `install.sh` / `install.ps1` — re-running the installer *is* the update.
- **npm / PyPI:** update through your package manager as usual.
- No index, cache, or config migration; v0.10.0 graphs are fully compatible.

**Full changelog:** https://github.com/DeusData/codebase-memory-mcp/compare/v0.10.0...v0.10.1

<!-- cbm-security-verification:start -->
## Security Verification

VirusTotal completed **14 distinct extracted byte objects** covering **32 exact extracted archive members**.
The extraction manifest binds those associations to **8 downloadable archives** by SHA-256 provenance. Downloadable .tar.gz/.zip release containers were not submitted to VirusTotal.

13 of 14 scanned objects returned **0 malicious and 0 suspicious** verdicts with 58–67 decisive engine results (required minimum: 50).
**1 object(s) carry a single Microsoft machine-learning detection** (`!ml`), which this project treats as a known false positive and publishes rather than hides. Every other engine returned clean. See [Antivirus False Positives](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md#antivirus-false-positives) for the evidence and for how to verify these artifacts yourself: `objects/scan-3380cf3b868d749c63f564e7c6b81381a140942ec42253f785e158ab5144064f--codebase-memory-mcp`

Durable public evidence: [associations](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.1/virustotal-associations.tsv), [exact scan set](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.1/virustotal-scan-set.tsv), [per-extracted-object results and report links](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.1/virustotal-results.tsv), [evidence checksums](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.1/virustotal-evidence-checksums.txt).

Archive SHA-256 provenance (from the extraction manifest):

| Downloadable archive | SHA-256 provenance |
|---|---|
| `codebase-memory-mcp-darwin-amd64.tar.gz` | `4948d92c5b5a906faee0fd11ffcbb8606a72004eece92f4b5a28e1294b306ab8` |
| `codebase-memory-mcp-darwin-arm64.tar.gz` | `9b6350b4e51cecd49126dc1b145ce81ac0df7aea35d87d7e8fe987683ad6b641` |
| `codebase-memory-mcp-linux-amd64-portable.tar.gz` | `97c6580a13d772d040e936584f3c5234586ab03f31a77354af8a763851a39a7f` |
| `codebase-memory-mcp-linux-amd64.tar.gz` | `57cb5e5945a5371e43db3f2184d5b08ddd679d65e285cb2c976e665eac2fb22f` |
| `codebase-memory-mcp-linux-arm64-portable.tar.gz` | `ad457b306fa5bf5a1b97d160eeb867260a7946018097222a622fb14e896c6c72` |
| `codebase-memory-mcp-linux-arm64.tar.gz` | `5cb8a073c0e31956698a60ed4bd41c5398096ce3270b1438e7919d0cb06f558b` |
| `codebase-memory-mcp-windows-amd64.zip` | `b9169d35f7d10485c449a2a8d6900a999ef5184fb93ab89b449dbe6e8f8c72a1` |
| `codebase-memory-mcp-windows-arm64.zip` | `9cedb3c4f01bf0846a712ff246ed1cd29d74ea7f7cda195d67dfaf7424f5a81b` |
<!-- cbm-security-verification:end -->

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.10.1` · 2026-08-11 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
