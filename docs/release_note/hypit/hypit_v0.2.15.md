---
title: "hypit v0.2.15"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.15"
version: "v0.2.15"
published: "2026-09-25"
type: "patch"
lang: "en"
summary: "Keeps long and sparse HyperFrames renders local to the requested absolute frame selection. Holds no longer expand once per frame;"
---

# hypit v0.2.15

## Highlights

- Keeps long and sparse HyperFrames renders local to the requested absolute frame selection. Holds no longer expand once per frame; animation, text, visibility, Browser Programs, media slots and resource discovery now advance from interval or change indexes instead of rescanning the whole film.
- Bounds render working sets without changing requested workers or frame semantics. Completed output PNGs stream in order to FFmpeg, decoded source frames share a render-local byte budget, and contiguous source demand is decoded in small windows.
- Avoids staging compiler-owned Artifacts that provably do not intersect the render selection. Opaque Browser Programs, fonts and unknown CSS usage remain explicitly conservative.
- Advances live Builds from disposable per-Build indexes and preserves forwarded Result outputs by reference, avoiding repeated whole-state scans and unnecessary Composite materialization.
- Adds a Studio light theme that follows the browser and can be overridden from the top bar.
- Fixes the OAuth callback preflight required by Chrome Private Network Access.

## Upgrade

Install `@hypit/hypit@0.2.15`. Existing video projects and materials need no migration. This release changes the Hypit npm Distribution only; there is no separate Skill update.

0.2.14 was never published to npm because CI could not resolve a test dependency. 0.2.15 contains all of its changes plus that fix.

## Validation

The packaged Distribution was installed outside the checkout, used to compile the bundled project component, prepare its font and managed browser, render and export a 240-frame MP4, and decode the complete output successfully.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.15` · 2026-09-25 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.15)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
