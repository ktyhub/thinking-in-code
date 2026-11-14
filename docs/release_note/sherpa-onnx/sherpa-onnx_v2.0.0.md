---
title: "sherpa-onnx v2.0.0"
project: "sherpa-onnx"
repo: "k2-fsa/sherpa-onnx"
tag: "v2.0.0"
version: "v2.0.0"
published: "2026-10-23"
type: "major"
lang: "en"
---

# sherpa-onnx v2.0.0

## What's Changed
* Fix releasing dart packages by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/3948
* Support NeMo transducers in offline Python examples by @Nathan-Roll1 in https://github.com/k2-fsa/sherpa-onnx/pull/3952
* Add OfflineDiacritization to kotlin-api by @XDcobra in https://github.com/k2-fsa/sherpa-onnx/pull/3949
* Support modified_beam_search with hotwords for streaming NeMo transducer models by @josephomills in https://github.com/k2-fsa/sherpa-onnx/pull/3895
* Add GetEmbedding to SpeakerEmbeddingManager by @XDcobra in https://github.com/k2-fsa/sherpa-onnx/pull/3950
* fix(supertonic): allow the "na" language tag by @utrumo in https://github.com/k2-fsa/sherpa-onnx/pull/3958
* Add conversion scripts for 7M Kokoro distills (Arabic + English) by @marwanelamami in https://github.com/k2-fsa/sherpa-onnx/pull/3954
* Add wasm demo for kokoro multi lang tts by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/3966
* Fix character loss for byte-level-BPE tokens in whisper/cohere recognizers by @paoloantinori in https://github.com/k2-fsa/sherpa-onnx/pull/3965
* Ship arm64 libraries in the sherpa_onnx_windows Flutter package by @Ranjan-Bhagat in https://github.com/k2-fsa/sherpa-onnx/pull/3957
* Support HLG decoding for offline CTC models in the C, CXX, JNI/Kotlin/Java and WASM APIs by @baszczewski in https://github.com/k2-fsa/sherpa-onnx/pull/3951
* Fix dart for windows arm64 by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/3967
* Canary: derive lang2id from the model vocab, warn instead of silently falling back to English by @paoloantinori in https://github.com/k2-fsa/sherpa-onnx/pull/3962
* Add subtitle generation Python API example for Qwen3 ASR by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/3972
* Docs: reproducible F-Droid builds of the Android library (AAR) by @paoloantinori in https://github.com/k2-fsa/sherpa-onnx/pull/3963
* Fix moonshine v2: feed the decoder encoder_attention_mask at raw audio length by @paoloantinori in https://github.com/k2-fsa/sherpa-onnx/pull/3976
* add --input-sample-rate option in online-websocket-server by @codeachange in https://github.com/k2-fsa/sherpa-onnx/pull/3977
* Add Recly to 'Projects using sherpa-onnx' by @rokrokss in https://github.com/k2-fsa/sherpa-onnx/pull/4019
* Add subtitle generation Python API example for Doubao ASR. by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4027
* Update README to include China Unicom by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4028
* Update README to include China Life by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4029
* Update README to include deepseek-harness by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4030
* jni: convert C++ exceptions in recognizer/punctuation constructors to Java exceptions by @paoloantinori in https://github.com/k2-fsa/sherpa-onnx/pull/3988
* Fix Flutter VAD+ASR examples for Qwen3 ASR by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4045
* c-api: catch C++ exceptions in SherpaOnnxCreate* and return NULL by @Cassian433 in https://github.com/k2-fsa/sherpa-onnx/pull/4044
* Pad 1s of silence on endpoint for streaming paraformer in Python examples (mirror C++ behavior, #1373) by @Virtuoso461 in https://github.com/k2-fsa/sherpa-onnx/pull/4052
* Fix offline recognizer Swift wrapper build (missing ctc_fst_decoder_config) by @kyo-zzz in https://github.com/k2-fsa/sherpa-onnx/pull/4005
* Update zip build dependency to v9 (clears RUSTSEC-2026-0367/0368/0369) by @lfgranja in https://github.com/k2-fsa/sherpa-onnx/pull/4059
* Remove espeak-ng and piper-phonemize from sherpa-onnx by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4055
* Add Node.js addon for Windows arm64 (sherpa-onnx-win-arm64) by @eliandoran in https://github.com/k2-fsa/sherpa-onnx/pull/4054
* Fix ZipVoice heap overflow for short text at speed > 1 by @Cassian433 in https://github.com/k2-fsa/sherpa-onnx/pull/4051
* Raise ValueError when KeywordSpotter.create_stream() cannot encode keywords by @ANDROIDHASSAN in https://github.com/k2-fsa/sherpa-onnx/pull/4049
* Add tests for the windows arm64 npm package by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4069
* Add bot-reborn to 'Projects using sherpa-onnx' by @beasaltfish in https://github.com/k2-fsa/sherpa-onnx/pull/4040
* alsa: pass the mono sample count to the resampler by @dime-online in https://github.com/k2-fsa/sherpa-onnx/pull/3995
* Fix three sherpa-onnx-sys build.rs failures: custom Cargo profiles, iOS after Android, iOS device vs simulator by @jameswinegar in https://github.com/k2-fsa/sherpa-onnx/pull/3991
* README: fix decibri integration guide link by @pratikgx in https://github.com/k2-fsa/sherpa-onnx/pull/3992
* Fix malformed SRT timestamps in generate-subtitles.py by @MohammadHijjawi97 in https://github.com/k2-fsa/sherpa-onnx/pull/4009
* Add Suflyor to 'Projects using sherpa-onnx' by @olerast67 in https://github.com/k2-fsa/sherpa-onnx/pull/4001
* Fix SplitUtf8 reading past the end of a truncated UTF-8 sequence by @antonsoo in https://github.com/k2-fsa/sherpa-onnx/pull/4010
* Support per-stream FunASR Nano prompt options by @hulkbig in https://github.com/k2-fsa/sherpa-onnx/pull/4012
* Add SmartVoice to projects using sherpa-onnx by @dxhome in https://github.com/k2-fsa/sherpa-onnx/pull/4016
* Fix JSON escaping in online and offline recognition results by @hulkbig in https://github.com/k2-fsa/sherpa-onnx/pull/4017
* Fix offline CTC timestamps after filtering special tokens by @hulkbig in https://github.com/k2-fsa/sherpa-onnx/pull/4018
* Add akou to 'Projects using sherpa-onnx' by @GeiserX in https://github.com/k2-fsa/sherpa-onnx/pull/4039
* jni: Fix TTS for characters outside the BMP by @Trinorae in https://github.com/k2-fsa/sherpa-onnx/pull/4062
* Refactor building wheels for Linux armv7 by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4071
* Forward provider config keys to the CUDA execution provider (#3982) by @losewayy in https://github.com/k2-fsa/sherpa-onnx/pull/3985
* jni: Fix strings returned to Java for characters outside the BMP by @Trinorae in https://github.com/k2-fsa/sherpa-onnx/pull/4064
* docs: add VocaRead to projects using sherpa-onnx by @eborges78 in https://github.com/k2-fsa/sherpa-onnx/pull/4041
* Fix typos in the project. by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4073
* Feed the VAD one window at a time in vad-microphone.py and vad-alsa.py by @ANDROIDHASSAN in https://github.com/k2-fsa/sherpa-onnx/pull/4050
* Fix omnilingual ASR aborting on input shorter than 400 samples by @ANDROIDHASSAN in https://github.com/k2-fsa/sherpa-onnx/pull/4043
* Check the embedding size in the Python SpeakerEmbeddingManager methods by @ANDROIDHASSAN in https://github.com/k2-fsa/sherpa-onnx/pull/4048
* Use NeMo's additive log-zero guard for NeMo mel features by @kyo-zzz in https://github.com/k2-fsa/sherpa-onnx/pull/3999
* Validate speaker embedding dimensions before releasing the GIL by @ANDROIDHASSAN in https://github.com/k2-fsa/sherpa-onnx/pull/4077
* Fix word boundaries, OOV words and Unicode handling in lexicon TTS by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4075
* Fix building Flutter APPs for macOS by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4078
* Build wheels for Python 3.15 by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4080
* Widen VAD sample positions to int64_t to fix long-stream SIGSEGV. by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4079
* Add Voltip to 'Projects using sherpa-onnx' by @sunerpy in https://github.com/k2-fsa/sherpa-onnx/pull/4081
* docs: add Loud Caption to projects using sherpa-onnx by @DR1N0 in https://github.com/k2-fsa/sherpa-onnx/pull/4074
* Add tauri example for Doubao ASR by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4083
* Fix Ascend CI by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4089
* Release v2.0.0 by @csukuangfj in https://github.com/k2-fsa/sherpa-onnx/pull/4090

## New Contributors
* @Nathan-Roll1 made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/3952
* @XDcobra made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/3949
* @utrumo made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/3958
* @paoloantinori made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/3965
* @Ranjan-Bhagat made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/3957
* @baszczewski made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/3951
* @codeachange made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/3977
* @rokrokss made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4019
* @Cassian433 made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4044
* @Virtuoso461 made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4052
* @lfgranja made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4059
* @eliandoran made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4054
* @ANDROIDHASSAN made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4049
* @beasaltfish made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4040
* @dime-online made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/3995
* @jameswinegar made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/3991
* @pratikgx made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/3992
* @MohammadHijjawi97 made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4009
* @olerast67 made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4001
* @antonsoo made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4010
* @hulkbig made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4012
* @dxhome made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4016
* @GeiserX made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4039
* @Trinorae made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4062
* @losewayy made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/3985
* @eborges78 made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4041
* @sunerpy made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4081
* @DR1N0 made their first contribution in https://github.com/k2-fsa/sherpa-onnx/pull/4074

**Full Changelog**: https://github.com/k2-fsa/sherpa-onnx/compare/v1.13.8...v2.0.0

---

> **Source** [k2-fsa/sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) · `v2.0.0` · 2026-10-23 · [upstream release](https://github.com/k2-fsa/sherpa-onnx/releases/tag/v2.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
