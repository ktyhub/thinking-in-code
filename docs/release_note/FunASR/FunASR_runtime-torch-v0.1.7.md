---
title: "FunASR runtime-torch-v0.1.7"
project: "FunASR"
repo: "modelscope/FunASR"
tag: "runtime-torch-v0.1.7"
version: "runtime-torch-v0.1.7"
published: "2026-11-13"
type: "release"
lang: "en"
summary: "Standalone Torch runtime maintenance release."
---

# FunASR runtime-torch-v0.1.7

Standalone Torch runtime maintenance release.

- Keep short-recording Paraformer timestamps independent of padding in mixed-length batches (#3871).
- Ignore empty hotword entries and truncate long Contextual/Seaco terms to the exported ten-character embedding width (#3882).
- Preserve terminal abbreviations and rich-transcription word boundaries (#3869 and existing segment-spacing fix).
- Test actual wheel and source-distribution installations on Python 3.10 and 3.12.

Install in a dedicated environment: `python -m pip install funasr-torch==0.1.7`.
Import name: `funasr_torch`. Root `funasr`, standalone `funasr-onnx`, and Python WebSocket server scripts are separate deliverables.

Validation: 118 scoped local source tests; five installed regressions for each local wheel/sdist; hosted package and installed tests; all ten runtime modules bound by hash to existing real L20Z synthetic-fixture evidence. Existing results were reused, not rerun. This is not a new pretrained ASR accuracy or performance evaluation, full model suite, or automatic production-service upgrade. See the source PR for negative-control and test-fixture provenance.

The two payloads and SHA256SUMS are the accepted final-main CI artifacts. The root FunASR release remains the repository's latest release.

---

> **Source** [modelscope/FunASR](https://github.com/modelscope/FunASR) · `runtime-torch-v0.1.7` · 2026-11-13 · [upstream release](https://github.com/modelscope/FunASR/releases/tag/runtime-torch-v0.1.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
