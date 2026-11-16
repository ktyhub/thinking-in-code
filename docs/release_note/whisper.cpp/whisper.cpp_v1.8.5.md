---
title: "whisper.cpp v1.8.5"
project: "whisper.cpp"
repo: "ggml-org/whisper.cpp"
tag: "v1.8.5"
version: "v1.8.5"
published: "2026-05-29"
type: "patch"
lang: "en"
summary: "Maintenance release + performance improvements all around"
---

# whisper.cpp v1.8.5

## Overview

Maintenance release + performance improvements all around:

https://github.com/ggml-org/whisper.cpp/blob/master/scripts/bench-all-gg.txt

## What's Changed
* ruby : fix dangling pointers, memory leak, and SEGV on parallel transcription by @KitaitiMakoto in https://github.com/ggml-org/whisper.cpp/pull/3715
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3730
* vad : add streaming detect + explicit state reset by @danielbodart in https://github.com/ggml-org/whisper.cpp/pull/3677
* bench : sync submit-results URL to ggml-org by @jinweihan-ai in https://github.com/ggml-org/whisper.cpp/pull/3769
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3786
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3789
* ruby : transcribe without GVL, accept more MemoryViews, Windows support, fix memory size report, improve document by @KitaitiMakoto in https://github.com/ggml-org/whisper.cpp/pull/3775
* Incorrect timestamps by @bviksoe in https://github.com/ggml-org/whisper.cpp/pull/2279
* server: Add support for controlling token_timestamps directly by @alubbe in https://github.com/ggml-org/whisper.cpp/pull/3785
* Fix #984: About max_tokens skipping remaining audio issue by @annaeina in https://github.com/ggml-org/whisper.cpp/pull/3798
* server: Fix params leak between requests by @alubbe in https://github.com/ggml-org/whisper.cpp/pull/3784
* server: Fix no_speech_thold not being read by @alubbe in https://github.com/ggml-org/whisper.cpp/pull/3783
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3803
* server: Add support for carry_initial_prompt by @alubbe in https://github.com/ggml-org/whisper.cpp/pull/3781
* server: Return speaker information in JSON by @alubbe in https://github.com/ggml-org/whisper.cpp/pull/3782
* examples : fix memory leak in read_audio_data by @petterreinholdtsen in https://github.com/ggml-org/whisper.cpp/pull/3810
* whisper : set bench data for each iteration by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3812
* ci : use github ubuntu-22.04-arm runner instead of qemu by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3815
* fix: server /inference fails to decode in-memory audio (regression) by @ServeurpersoCom in https://github.com/ggml-org/whisper.cpp/pull/3818
* fix: in bindings/ruby/test/jfk_reader/jfk_reader in jfk_reader.c by @orbisai0security in https://github.com/ggml-org/whisper.cpp/pull/3756
* cmake : add CMakePresets.json [no ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3808
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3824
* [AMD] Add AMD ROCm/HIP GPU build instructions by @Kaihui-AMD in https://github.com/ggml-org/whisper.cpp/pull/3823
* cli : merge tokens split across UTF-8 boundaries in JSON output by @texasich in https://github.com/ggml-org/whisper.cpp/pull/3751
* docs : add AGENTS.md and CONTRIBUTING.md [no ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3826
* ci : only run docker jobs when pushed to master [no ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3828
* ci : set GGML_NATIVE=OFF for bindings-java by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3830
* ci : renable arm64 docker builds by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3832
* ci : add on push/pull_request paths ruby job by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3833
* ci : fix include paths for bindings-go job [no ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3835
* ci : add ignore for bindings/{ruby, go} in build.yml [no ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3837
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3840

## New Contributors
* @danielbodart made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3677
* @jinweihan-ai made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3769
* @bviksoe made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/2279
* @annaeina made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3798
* @ServeurpersoCom made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3818
* @orbisai0security made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3756
* @Kaihui-AMD made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3823
* @texasich made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3751

**Full Changelog**: https://github.com/ggml-org/whisper.cpp/compare/v1.8.4...v1.8.5

---

> **Source** [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) · `v1.8.5` · 2026-05-29 · [upstream release](https://github.com/ggml-org/whisper.cpp/releases/tag/v1.8.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
