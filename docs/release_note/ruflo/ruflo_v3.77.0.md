---
title: "ruflo v3.77.0"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.77.0"
version: "v3.77.0"
published: "2026-11-12"
type: "minor"
lang: "en"
summary: "Minor release."
---

# ruflo v3.77.0

Minor release.

## What's new
- **`neural wsp` — optional ruv-FANN weight-space tooling (ADR-528, #4980).** `ruflo neural wsp status | inspect | check | gate | export-centroid`. The three `ruv-fann-wsp*` packages are `optionalDependencies`; without them the command reports "not installed" instead of failing.
- **Opt-in model-judge routing in ruflo-mods 0.17.0 (#4969, ADR-530).** `routeJudge`, **off by default**: one haiku label per prompt, any failure keeps the keyword route. Agreement with labels (not routing quality): 70-71/84 on dev vs 27 for the keyword router; the fresh human-labelled score is still pending and is required before any default-on change.
- **Windows:** the remaining `2>/dev/null` npm redirects removed, and `analyze deps --security` now reports when `npm audit` exits non-zero (#4971, thanks @sarthakbobde).
- **`scan_secrets` non-ASCII fix (#4970, thanks @kevin9327)**, shipped for real in `@claude-flow/guidance` 3.0.1 (below).

## Also published
- `@claude-flow/guidance` **3.0.1**: the committed WASM kernel is rebuilt (#4979). #4970 changed only the Rust source, so the shipped binary still trapped (`RuntimeError: unreachable`) on secrets ending in multi-byte characters. Only the `.wasm` changed; differential test against the old binary: 43 identical, 2 traps fixed, 1 intended star-count change.

## Verified on the published packages
Fresh install of `ruflo@3.77.0`: reports v3.77.0, the three optional packages install, all four bundled packages import, `neural wsp` lists its subcommands. The published guidance WASM is byte-identical to the validated rebuild.

## Known
The `ruflo-console` `write-argv.spec.ts` POSIX-append test fails on PR CI runs (lost lines; passes locally and on main). It was the only failing test on #4979 and #4980 and is tracked in #4978. `alpha`/`v3alpha` are unchanged at 3.75.2 (ADR-513).

---

> **Source** [ruvnet/ruflo](https://github.com/ruvnet/ruflo) · `v3.77.0` · 2026-11-12 · [upstream release](https://github.com/ruvnet/ruflo/releases/tag/v3.77.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
