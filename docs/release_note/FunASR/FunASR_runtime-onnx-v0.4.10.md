---
title: "FunASR runtime-onnx-v0.4.10"
project: "FunASR"
repo: "modelscope/FunASR"
tag: "runtime-onnx-v0.4.10"
version: "runtime-onnx-v0.4.10"
published: "2026-11-11"
type: "release"
lang: "en"
summary: "Install: pip install -U funasr-onnx==0.4.10."
---

# FunASR runtime-onnx-v0.4.10

# FunASR ONNX Runtime 0.4.10

Install: `pip install -U funasr-onnx==0.4.10`.

This standalone package delivers #3865: offline/streaming Paraformer,
SenseVoice and offline VAD load supported non-WAV audio directly through
librosa, without an intermediate WAV sidecar or MP3-only conversion.
Codec support depends on the installed audio backend. Updating the root
`funasr` package does not update `funasr-onnx`.

Validation includes45 source contracts and42 actual installed tests for each
candidate wheel/sdist, including lossless FLAC, mixed WAV/FLAC lists, array
identity, invalid-audio handling and existing streaming/VAD/punctuation cases.
Official0.4.9 fails the two new FLAC/list tests through its pydub conversion path.
New exact-head/main Python3.11/3.12 CI verifies clean torch-free installation
and installed behavior; actual artifacts and checkout trees are checked.

Prior exact-source #3865 Paraformer L20Z/ORT-CUDA fixture evidence is retained
and reused:48000 samples, identical FLAC-path/array results,10 CUDA nodes/0 CPU
nodes. It is not new GPU execution or evidence of pretrained recognition
quality, all-model inference, BF16 or a full-root-suite pass. No new weights.
The open SenseVoice#3861 and VAD#3862 changes are not included.

Assets:wheel,sdist,SHA256SUMS covering two payloads. Final bytes come from the
accepted merged-main CI. Runtime tag/source and all assets are checked; no
final-tag CI is claimed when current workflows do not select this runtime tag.
This is a non-latest runtime release and preserves root1.4.25 as latest.
PyPI upload is last and is accepted only after official wheel/sdist downloads
match GitHub SHA256 and size. No Nano, production upgrade or growth claim.

---

> **Source** [modelscope/FunASR](https://github.com/modelscope/FunASR) · `runtime-onnx-v0.4.10` · 2026-11-11 · [upstream release](https://github.com/modelscope/FunASR/releases/tag/runtime-onnx-v0.4.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
