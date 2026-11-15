---
title: "ruflo v3.72.2"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.72.2"
version: "v3.72.2"
published: "2026-11-06"
type: "patch"
lang: "en"
summary: "@ruvector/attention 2.2.3."
---

# ruflo v3.72.2

## Security dependency fix

- **`@ruvector/attention` 2.2.3.**
  - `claude-flow` 3.72.1 declared `@ruvector/attention ^0.1.3`, and `ruvector` 0.3.12 also depended on `^0.1.3`. Both resolved to 0.1.32, which lacks the upstream fix (RuVector #1365): input-length validation, and catching Rust panics at the NAPI boundary so they don't abort Node.
  - 3.72.2 moves to `ruvector ^0.3.13`, which depends on `attention ^2.2.3`, in the CLI, `claude-flow` and `ruflo`. `claude-flow` also declares `attention ^2.2.3` directly.
  - Every attention call ruflo makes (Flash, MoE, Hyperbolic, AdamW, InfoNCE, Curriculum, `compute`) was checked on 0.1.32 and 2.2.3. The results match.
- **`@ruvector/sona` 0.1.11.** `@claude-flow/neural` 3.0.3 (published standalone) pins `@ruvector/sona` 0.1.11, up from 0.1.5. On 0.1.5:
  - a wrong-length input to `applyMicroLora` panicked in Rust and aborted Node (exit 134);
  - `findPatterns` returned 0 patterns after training.

  On 0.1.11 the bad input throws a catchable error, and learning returns patterns.

## Fixes

- **`neural benchmark`: the attention benchmark now runs.** It never had:
  - `import()` of the CommonJS package put its classes on `default`;
  - it called `computeRaw()`, which no release has, instead of `compute()`.
- **Plugins (#4842), shipped through the marketplace:**
  - `ruflo-ruvector` 0.4.0, `ruflo-browser` 0.3.8, `ruflo-console` 0.49.12 and `ruflo-agentdb` 0.4.12 move to ruvector 0.3.12.
  - The browser recording recipes used `trajectory-*` flags that no ruvector release accepts. They are fixed.
  - The CLI's browser-session npx fallback pins `ruvector@0.3.12`.

- **`claude-flow` now lists `@ruvector/attention` as a regular dependency.** On npm 10 / Node 20, `@ruvector/ruvllm-gpu-loop` (requires node >=22) fails as an optional install, and npm then drops ruvllm, ruvector and every package reached only through optional edges. The patched attention is now always installed.

## Verification

A fresh `npm install ruflo@3.72.2` from the registry resolves:

- `@claude-flow/cli` 3.72.2 and `@claude-flow/neural` 3.0.3
- `ruvector` 0.3.13
- `@ruvector/attention` 2.3.0 for every copy, with no 0.1.x
- `@ruvector/graph-node` 2.1.2 and `@ruvector/sona` 0.1.11

**Known, not fixed here:** zod GHSA-mrhx-c7xc-m3w5 needs zod 4, which is a major migration. glob and minimatch have moderate advisories. On Node 20, ruvector-backed features are missing because of the gpu-loop engine floor.

## Packages

`@claude-flow/cli`, `claude-flow` and `ruflo` 3.72.2 are on `latest`, as is `@claude-flow/neural` 3.0.3. `alpha` and `v3alpha` are unchanged (ADR-513).

---

> **Source** [ruvnet/ruflo](https://github.com/ruvnet/ruflo) · `v3.72.2` · 2026-11-06 · [upstream release](https://github.com/ruvnet/ruflo/releases/tag/v3.72.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
