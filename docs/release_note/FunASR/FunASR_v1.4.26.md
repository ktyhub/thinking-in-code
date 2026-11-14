---
title: "FunASR v1.4.26"
project: "FunASR"
repo: "modelscope/FunASR"
tag: "v1.4.26"
version: "v1.4.26"
published: "2026-11-12"
type: "patch"
lang: "en"
summary: "GitHub Release and PyPI 1.4.26 are published. Both official PyPI distributions were downloaded and match GitHub by SHA-256 and size"
---

# FunASR v1.4.26

<!-- release1426-pypi-verified-20261112 -->
### Final Publication Acceptance

GitHub Release and PyPI 1.4.26 are published. Both official PyPI distributions were downloaded and match GitHub by SHA-256 and size:

- `funasr-1.4.26-py3-none-any.whl`: 1015738 bytes; SHA-256 `104e3704fed0ecfd6c08836468de147a2c6f05745281093b8a6dbe341d1ce831`.
- `funasr-1.4.26.tar.gz`: 1086172 bytes; SHA-256 `763c7d860a49afd17e4b9c0636ff43f03f6519e68bd0a09a25d68318091e2cf8`.

<!-- release1426-final-verification-20261112 -->
## FunASR 1.4.26

Source: `cdd82b5cbfd05015f8fb2b167d61f25142c3a9e8` / tag `v1.4.26`.

### Fixes

- #3874: `response_format=text` now returns the bare HTTP transcript instead of a JSON-quoted string.
- #3872 / #3883: retain word separators across English and Korean VAD segments while preserving CJK and event-only behavior. The original author's commit is retained.

The independent ONNX/Torch abbreviation and batch-padding timestamp fixes are not shipped by this root wheel. Their package releases are separate. Open #3861, #3862, #3867 and the new hotword PRs are not claimed resolved.

### Verification Scope

- #3874 previously passed 32 actual HTTP/SDK cases and 213 related CPU cases; its source bytes remain unchanged here.
- #3883 passed 246 unique selected CPU cases across the initial 230 passes and completion of six optional-dependency cases plus ten actual installed standalone-wheel cases. All original skipped and negative runs remain preserved. NumPy hosted CI has 421 passes and 27 CUDA-only skips per version, not GPU acceptance.
- Release/docs candidate checks: {'contract-green': {'testcase': 53, 'failure': 0, 'error': 0, 'skipped': 0}, 'static-remainder': {'testcase': 104, 'failure': 0, 'error': 0, 'skipped': 2}, 'installed-behavior-candidate': {'testcase': 111, 'failure': 0, 'error': 0, 'skipped': 0}, 'site-boundary-integration': {'testcase': 69, 'failure': 0, 'error': 0, 'skipped': 0}, 'site-manifest-integration': {'testcase': 21, 'failure': 0, 'error': 0, 'skipped': 0}}. Actual installed root wheel final counts: {'testcase': 111, 'failure': 0, 'error': 0, 'skipped': 0}. Standalone runtime paths are explicitly deselected from root-wheel tests. All 439 package files and 13 entrypoints match accepted source.
- Root model/GPU-runtime bytes are unchanged from 1.4.25 and remain bound to its accepted prior L20Z evidence. No new GPU execution, pretrained ASR-quality, full-suite or Nano result is claimed.
- Head, merged-main and final-tag hosted CI and actual checkout trees are separately accepted. Final Python wheel and sdist are newly downloaded and checked for metadata, exact source bytes, archive integrity, strict Twine, private offline installation and CLI behavior.
- Ten unchanged runtime archives reuse complete cache bytes, freshly rehashed against the new assets and original runtime release with archive-integrity checks. They were not rebuilt or re-executed. SHA256SUMS covers all 12 payloads.
- The 1.4.24 warning still applies: checkpoints trained with both norm_means=True and norm_vars=True need recognition-quality reevaluation. norm_vars=False remains the default.
- No production upgrade or adoption/growth claim.

## What's Changed
* fix(runtime): release ONNX non-WAV audio loading as 0.4.10 by @LauraGPT in https://github.com/modelscope/FunASR/pull/3876
* fix(server): return plain text for response_format=text by @David-Wu1119 in https://github.com/modelscope/FunASR/pull/3874
* fix(runtime): merge spelled-out acronyms into one word in funasr_onnx and funasr_torch sentence_postprocess by @tanishqbaweja in https://github.com/modelscope/FunASR/pull/3869
* fix(runtime): trim batch padding from CIF peaks before funasr_onnx and funasr_torch Paraformer timestamps by @tanishqbaweja in https://github.com/modelscope/FunASR/pull/3871
* fix(postprocess): preserve VAD word boundaries with current-main CI by @LauraGPT in https://github.com/modelscope/FunASR/pull/3883
* fix(postprocess): keep a space between Latin VAD segments in rich transcription by @David-Wu1119 in https://github.com/modelscope/FunASR/pull/3872
* Release FunASR 1.4.26 by @LauraGPT in https://github.com/modelscope/FunASR/pull/3884

## New Contributors
* @David-Wu1119 made their first contribution in https://github.com/modelscope/FunASR/pull/3874

**Full Changelog**: https://github.com/modelscope/FunASR/compare/v1.4.25...v1.4.26

<!-- funasr-runtime-downloads:start -->
## Runtime downloads

This Python release pairs with the current prebuilt llama.cpp / GGUF runtime release: [runtime-llamacpp-v0.2.6](https://github.com/modelscope/FunASR/releases/tag/runtime-llamacpp-v0.2.6).

The same verified runtime assets are attached directly to this Python release so users can find the package and self-contained `llama-funasr-*` binaries in one place.

| Platform | Asset | SHA-256 |
|---|---|---|
| Linux arm64 | [funasr-llamacpp-linux-arm64.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.26/funasr-llamacpp-linux-arm64.tar.gz) | `7bca29cfa3c9a08e235a62212ca9e00f6656e59a8f07078966a2bfda1e5aa1f9` |
| Linux x64 AVX2 | [funasr-llamacpp-linux-x64-avx2.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.26/funasr-llamacpp-linux-x64-avx2.tar.gz) | `aaebc5470f846ce915200b35d6e9f9bd0a0d3ed399d39e49bdeb7a1f1782bc70` |
| Linux x64 Vulkan | [funasr-llamacpp-linux-x64-vulkan.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.26/funasr-llamacpp-linux-x64-vulkan.tar.gz) | `f02d41e98e9d4041f0896661007193810f025484d2175958f7c1313d5c90ec46` |
| Linux x64 portable | [funasr-llamacpp-linux-x64.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.26/funasr-llamacpp-linux-x64.tar.gz) | `779967de1c528c2be966bcc47f246e7d3e6fcdb748d9491263062f4120f35e52` |
| macOS arm64 | [funasr-llamacpp-macos-arm64.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.26/funasr-llamacpp-macos-arm64.tar.gz) | `bda59474202b887190f59d25b7b42c714469efae71276072c12fa0a38de68792` |
| Windows x64 AVX2 | [funasr-llamacpp-windows-x64-avx2.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.26/funasr-llamacpp-windows-x64-avx2.zip) | `062cda8fefadd31c3e811227116daccf448a8520f4b0bb168d225c896e65ebbd` |
| Windows x64 CUDA Blackwell (sm_120) | [funasr-llamacpp-windows-x64-cuda-blackwell.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.26/funasr-llamacpp-windows-x64-cuda-blackwell.zip) | `e32961a753f40888182f352fa551159c5165a6a77718ae4ade316aedfea4b1c2` |
| Windows x64 CUDA | [funasr-llamacpp-windows-x64-cuda.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.26/funasr-llamacpp-windows-x64-cuda.zip) | `148657911fb666b7af6ec43af2e23a0984e3259012b4c39f95631b717feb6840` |
| Windows x64 Vulkan | [funasr-llamacpp-windows-x64-vulkan.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.26/funasr-llamacpp-windows-x64-vulkan.zip) | `debf8007e55011cad06081e7b8a78972f1b8fe672bc324d41e650d68821f6a6a` |
| Windows x64 portable | [funasr-llamacpp-windows-x64.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.26/funasr-llamacpp-windows-x64.zip) | `f6a73a548413ba9fbaf2145263ea66ec53cbdad1fb11790dbeeee493e339492e` |

Quick start: download one asset, unpack it, then run the bundled `download-funasr-model.sh <sensevoice|paraformer|nano>` helper and one of `llama-funasr-cli`, `llama-funasr-sensevoice`, or `llama-funasr-paraformer`.

For Python users, install from PyPI:

```bash
python -m pip install -U "funasr==1.4.26"
```
<!-- funasr-runtime-downloads:end -->

---

> **Source** [modelscope/FunASR](https://github.com/modelscope/FunASR) · `v1.4.26` · 2026-11-12 · [upstream release](https://github.com/modelscope/FunASR/releases/tag/v1.4.26)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
