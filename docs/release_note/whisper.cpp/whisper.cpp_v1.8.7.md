---
title: "whisper.cpp v1.8.7"
project: "whisper.cpp"
repo: "ggml-org/whisper.cpp"
tag: "v1.8.7"
version: "v1.8.7"
published: "2026-06-16"
type: "patch"
lang: "en"
summary: "Do not assume /usr/lib library installation. · server : merge split UTF-8 token text in verbose JSON · whisper : catch C++ exceptions in whisper_init_with_params_no_state · ci : refactor + optimize"
---

# whisper.cpp v1.8.7

## What's Changed
* Do not assume /usr/lib library installation. by @waptaff in https://github.com/ggml-org/whisper.cpp/pull/3693
* server : merge split UTF-8 token text in verbose JSON by @lyonsno in https://github.com/ggml-org/whisper.cpp/pull/3850
* whisper : catch C++ exceptions in whisper_init_with_params_no_state by @danscMax in https://github.com/ggml-org/whisper.cpp/pull/3831
* ci : refactor + optimize by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3847
* ci : only publish/push docker images daily by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3854
* ci : use ccache instead of sccache for windows-cublas [no ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3855
* ci : pin github actions to commit SHAs by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3856
* ci : use emscripten-core and pin version by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3857
* ci:  build-windows action slimming by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3858
* Ci build quantize vad wasm ccache by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3860
* ci : add HF_TOKEN to docker.yml workflow [no ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3861
* ci : add ccache to build-sycl [no ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3859
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3867
* coreml : fix --quantize crash and --optimize-ane label for mlprogram format by @krystophny in https://github.com/ggml-org/whisper.cpp/pull/3868
* ci : pin github actions to commit sha's by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3865
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3880
* cli : add `--version` flag by @rumitvn in https://github.com/ggml-org/whisper.cpp/pull/3878
* release : v1.8.7 by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3881

## New Contributors
* @waptaff made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3693
* @lyonsno made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3850
* @danscMax made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3831
* @krystophny made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3868
* @rumitvn made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3878

**Full Changelog**: https://github.com/ggml-org/whisper.cpp/compare/v1.8.6...v1.8.7

---

> **Source** [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) · `v1.8.7` · 2026-06-16 · [upstream release](https://github.com/ggml-org/whisper.cpp/releases/tag/v1.8.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
