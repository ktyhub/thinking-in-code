---
title: "faster-whisper v1.0.2"
project: "faster-whisper"
repo: "SYSTRAN/faster-whisper"
tag: "v1.0.2"
version: "v1.0.2"
published: "2024-05-06"
type: "patch"
lang: "en"
summary: "The latest Distil-Whisper model, distil-large-v3, is intrinsically designed to work with the OpenAI sequential algorithm."
---

# faster-whisper v1.0.2

* Add support for distil-large-v3 (https://github.com/SYSTRAN/faster-whisper/pull/755)
The latest Distil-Whisper model, [distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3-ct2), is intrinsically designed to work with the OpenAI sequential algorithm.
 
* Benchmarks (https://github.com/SYSTRAN/faster-whisper/pull/773)
Introduces functionality to measure benchmarking for memory, Word Error Rate (WER), and speed in Faster-whisper.
 
* Support initializing more whisper model args (https://github.com/SYSTRAN/faster-whisper/pull/807)
 
* Small bug fix:
  * code breaks if audio is empty (https://github.com/SYSTRAN/faster-whisper/pull/768)
  * Foolproof: Disable VAD if clip_timestamps is in use (https://github.com/SYSTRAN/faster-whisper/pull/769)
  * make faster_whisper.assets as a valid python package to distribute (https://github.com/SYSTRAN/faster-whisper/pull/774)
  * Loosen tokenizers version constraint (https://github.com/SYSTRAN/faster-whisper/pull/804)
  * CUDA version and updated installation instructions (https://github.com/SYSTRAN/faster-whisper/pull/785)
 
* New feature from original openai Whisper project:
  * Feature/add hotwords (https://github.com/SYSTRAN/faster-whisper/pull/731)
  * Improve language detection (https://github.com/SYSTRAN/faster-whisper/pull/732)

---

> **Source** [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) · `v1.0.2` · 2024-05-06 · [upstream release](https://github.com/SYSTRAN/faster-whisper/releases/tag/v1.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
