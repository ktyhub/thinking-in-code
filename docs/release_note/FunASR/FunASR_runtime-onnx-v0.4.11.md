---
title: "FunASR runtime-onnx-v0.4.11"
project: "FunASR"
repo: "modelscope/FunASR"
tag: "runtime-onnx-v0.4.11"
version: "runtime-onnx-v0.4.11"
published: "2026-11-13"
type: "release"
lang: "en"
summary: "Standalone funasr-onnx 0.4.11. This is not a new root funasr release."
---

# FunASR runtime-onnx-v0.4.11

Standalone `funasr-onnx` 0.4.11. This is not a new root `funasr` release.

Includes the merged batch-timestamp padding fix (#3871), Contextual/Seaco long/empty-hotword bounds fix (#3882), and terminal abbreviation text/timestamp fix (#3869). No model-weight updates or ASR accuracy claim.

Install: `pip install -U funasr-onnx==0.4.11`.

Verification: three new installed regression methods fail on the official 0.4.10 wheel; 60 source checks and 45 tests each on separately installed 0.4.11 wheel/sdist pass, with strict Twine and archive/source-byte checks. Exact-head and merged-main Python 3.11/3.12 hosted package CI includes torch-free installation checks. All 13 runtime Python modules are byte-identical to prior accepted GPU validation; those completed FP32 synthetic L20Z contracts (24 ONNX/Torch backend/wrapper/batch cases, 72 outputs from three fixtures, archived CUDA profiles) were source-bound rather than rerun. This is not pretrained-model quality, BF16, Nano or full-suite validation.

Assets: wheel, sdist and SHA256SUMS covering both payloads. Published payloads come from the accepted merged-main CI artifact and are downloaded from GitHub for byte verification. PyPI is uploaded last and verified by actual official downloads. Root v1.4.26 remains the latest root release; old releases are unchanged.

---

> **Source** [modelscope/FunASR](https://github.com/modelscope/FunASR) · `runtime-onnx-v0.4.11` · 2026-11-13 · [upstream release](https://github.com/modelscope/FunASR/releases/tag/runtime-onnx-v0.4.11)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
