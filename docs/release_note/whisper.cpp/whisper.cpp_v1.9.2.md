---
title: "whisper.cpp v1.9.2"
project: "whisper.cpp"
repo: "ggml-org/whisper.cpp"
tag: "v1.9.2"
version: "v1.9.2"
published: "2026-08-04"
type: "patch"
lang: "en"
---

# whisper.cpp v1.9.2

## What's Changed
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3896
* include parakeet in build-xcframework.sh by @daaku in https://github.com/ggml-org/whisper.cpp/pull/3899
* Fix pkgconfig configuration (Nix build failure) by @nmouha in https://github.com/ggml-org/whisper.cpp/pull/3894
* examples : update model names in parakeet-cli README.md [no ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3906
* examples: Fix argument flag for min speech duration in VAD by @QuantiusBenignus in https://github.com/ggml-org/whisper.cpp/pull/3907
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3912
* examples : Improved inference performance of Android example project by @yymin1022 in https://github.com/ggml-org/whisper.cpp/pull/3913
* ci : set GGML_NATIVE=OFF for sanitize builds by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3920
* whisper : make voice_length() utf-8 aware for CJK by @buxuku in https://github.com/ggml-org/whisper.cpp/pull/3915
* whisper : map token timestamps to original time when VAD is enabled by @buxuku in https://github.com/ggml-org/whisper.cpp/pull/3910
* ci, examples : add package-lock.json to examples addon node by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3919
* whisper : expose internal VAD speech segments by @buxuku in https://github.com/ggml-org/whisper.cpp/pull/3916
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3940
* Fix #587: Remove leading space from txt output by @JingliangGao in https://github.com/ggml-org/whisper.cpp/pull/3921
* ruby : add VAD speech segments API by @KitaitiMakoto in https://github.com/ggml-org/whisper.cpp/pull/3931
* Adding ruby bindings change log by @taf2 in https://github.com/ggml-org/whisper.cpp/pull/3959
* verify hparams loaded from parakeet model bin file by @bhargav191098 in https://github.com/ggml-org/whisper.cpp/pull/3950
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3962
* Fix VAD min silence argument parsing by @chupakobra6 in https://github.com/ggml-org/whisper.cpp/pull/3963
* ci : set GGML_NATIVE=OFF for build-vad workflow by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3966
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3969
* release : v1.9.2 by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3970

## New Contributors
* @daaku made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3899
* @nmouha made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3894
* @QuantiusBenignus made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3907
* @yymin1022 made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3913
* @JingliangGao made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3921
* @bhargav191098 made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3950
* @chupakobra6 made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3963

**Full Changelog**: https://github.com/ggml-org/whisper.cpp/compare/v1.9.1...v1.9.2

---

> **Source** [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) · `v1.9.2` · 2026-08-04 · [upstream release](https://github.com/ggml-org/whisper.cpp/releases/tag/v1.9.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
