---
title: "ruflo v3.74.1"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.74.1"
version: "v3.74.1"
published: "2026-11-09"
type: "patch"
lang: "en"
summary: "@metaharness/darwin is now a regular dependency of @claude-flow/cli. Before, it was optional. ADR-526 amends ADR-150 rule 2 for darwin only."
---

# ruflo v3.74.1

> **Use 3.74.1, not 3.74.0.** The `@claude-flow/cli@3.74.0` tarball shipped stale `.claude/helpers` files (3.63.4 content), and `ruflo@3.74.0` depends on that exact version. 3.74.1 ships the helpers from main. The publish script now refuses to publish if the helpers differ from the commit (#4900).

## @metaharness/darwin is built in (ADR-526, #4898)

- **`@metaharness/darwin` is now a regular dependency** of `@claude-flow/cli`. Before, it was optional. ADR-526 amends ADR-150 rule 2 for darwin only.
- **In-process calls:** `metaharness_bench --op verify` and all four `metaharness_gepa` ops (genome, validate, render, analyze) now run inside the MCP server on a cached darwin module. Before, each call spawned a script, and `bench` spawned a second process for the darwin CLI. If darwin can't be loaded, the tools fall back to the scripts.
- **ruflo-metaharness 0.5.0:** `bench.mjs` verify imports darwin directly and never installs anything when a tool runs.

Measured, Node 22, median of 20 runs:

| Operation | Subprocess | In-process, first call | In-process, later calls |
|---|---|---|---|
| gepa validate | 21.4 ms | 2.9 ms | 0.03 ms |
| gepa render | 21.9 ms | 0.3 ms | 0.02 ms |
| bench verify | 59.7 ms | 40.0 ms | 0.05 ms |

The first call pays the one-time darwin import. The gain comes from no longer spawning a process, not from faster darwin code.

## Also in this release

- **Security (#4895):** `@claude-flow/security` 3.0.7 migrates input validation to zod ^4.6.7 (GHSA-mrhx-c7xc-m3w5). `cli-core` 3.7.6 accepts zod 4's `invalid_value` error for custom agent types.
- **PageRank (#4899):** `@claude-flow/memory` 3.2.6 and `@claude-flow/plugins` 3.0.3 use the new PageRank implementation for memory-graph and GNN ranking.
- **Release safety (#4900):** `prepare-publish.mjs` compares `.claude/helpers` with HEAD before signing and again at the end.

---

> **Source** [ruvnet/ruflo](https://github.com/ruvnet/ruflo) · `v3.74.1` · 2026-11-09 · [upstream release](https://github.com/ruvnet/ruflo/releases/tag/v3.74.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
