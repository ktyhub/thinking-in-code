---
title: "whisper.cpp v1.8.3"
project: "whisper.cpp"
repo: "ggml-org/whisper.cpp"
tag: "v1.8.3"
version: "v1.8.3"
published: "2026-01-15"
type: "patch"
lang: "en"
summary: "Maintenance release, latest ggml, minor improvements in the tools/server/bindings."
---

# whisper.cpp v1.8.3

## Overview

Maintenance release, latest ggml, minor improvements in the tools/server/bindings.

## What's Changed
* server : set no_context == true by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3482
* WASM example broken for Hebrew by @Orel-A in https://github.com/ggml-org/whisper.cpp/pull/3487
* ruby : tiny bug fix by @KitaitiMakoto in https://github.com/ggml-org/whisper.cpp/pull/3490
* 12x Performance Boost with Integrated Graphics by @OrelSokolov in https://github.com/ggml-org/whisper.cpp/pull/3492
* ruby : VAD separately from ASR by @KitaitiMakoto in https://github.com/ggml-org/whisper.cpp/pull/3518
* vad : Silero VAD v6.2.0 by @KitaitiMakoto in https://github.com/ggml-org/whisper.cpp/pull/3524
* need to #include <cmath> to compile on macos 11 by @smilingpoplar in https://github.com/ggml-org/whisper.cpp/pull/3533
* Add verified device of Ascend NPU by @lrisguan in https://github.com/ggml-org/whisper.cpp/pull/3516
* examples : fix typo in vad-speech-segments command [no ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3535
* tests : update VAD tests to use Silero V6.2.0 by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3534
* vad : fix buffer overflow in sample reduction loop by @josephsellers in https://github.com/ggml-org/whisper.cpp/pull/3558
* Allow NextSegment() to be called across multiple Process() calls in the Go binding by @joshmux in https://github.com/ggml-org/whisper.cpp/pull/3503
* Enable VAD for Go bindings by @joshmux in https://github.com/ggml-org/whisper.cpp/pull/3563
* server: allow custom temp directory for ffmpeg by @socram8888 in https://github.com/ggml-org/whisper.cpp/pull/3564
* Fix FreeBSD linker error: undefined reference to pthread_create by @rsmirnov90 in https://github.com/ggml-org/whisper.cpp/pull/3568
* ruby : add Whisper::Token, fix model URI by @KitaitiMakoto in https://github.com/ggml-org/whisper.cpp/pull/3575
* ruby : fix segmentation fault by @KitaitiMakoto in https://github.com/ggml-org/whisper.cpp/pull/3591
* cmake: fix executable example targets by @ink-splatters in https://github.com/ggml-org/whisper.cpp/pull/3600

## New Contributors
* @Orel-A made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3487
* @OrelSokolov made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3492
* @smilingpoplar made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3533
* @lrisguan made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3516
* @josephsellers made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3558
* @joshmux made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3503
* @socram8888 made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3564
* @rsmirnov90 made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3568
* @ink-splatters made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3600

**Full Changelog**: https://github.com/ggml-org/whisper.cpp/compare/v1.8.2...v1.8.3

---

> **Source** [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) · `v1.8.3` · 2026-01-15 · [upstream release](https://github.com/ggml-org/whisper.cpp/releases/tag/v1.8.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
