---
title: "faster-whisper v1.0.3"
project: "faster-whisper"
repo: "SYSTRAN/faster-whisper"
tag: "v1.0.3"
version: "v1.0.3"
published: "2024-07-01"
type: "patch"
lang: "en"
summary: "Silero-vad V5 release: https://github.com/snakers4/silero-vad/releases/tag/v5.0"
---

# faster-whisper v1.0.3

## Upgrade Silero-Vad model to latest V5 version (https://github.com/SYSTRAN/faster-whisper/pull/884)

Silero-vad V5 release: https://github.com/snakers4/silero-vad/releases/tag/v5.0
- window_size_samples parameter is fixed at 512.
- Change to use the state variable instead of the existing h and c variables.
- Slightly changed internal logic, now some context (part of previous chunk) is passed along with the current chunk.
- Change the dimensions of the state variable from 64 to 128.
- Replace ONNX file with V5 version

## Other changes

* Improve language detection when using clip_timestamps (#867)
* Docker file improvements (#848)
* Fix #839 incorrect clip_timestamps being used in model (#842)

---

> **Source** [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) · `v1.0.3` · 2024-07-01 · [upstream release](https://github.com/SYSTRAN/faster-whisper/releases/tag/v1.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
