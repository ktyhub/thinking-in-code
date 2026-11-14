---
title: "FunASR v1.4.25"
project: "FunASR"
repo: "modelscope/FunASR"
tag: "v1.4.25"
version: "v1.4.25"
published: "2026-11-11"
type: "patch"
lang: "en"
---

# FunASR v1.4.25

<!-- release1425-pypi-verified-20261111 -->
### Final Publication Acceptance

GitHub Release and PyPI 1.4.25 are published. Both official PyPI distributions were downloaded and match GitHub by SHA-256 and size:

- `funasr-1.4.25-py3-none-any.whl`: 1015440 bytes; SHA-256 `11ab7bd8c7574a94579b83a9f8fe837af46be6229462da5f3004a04a017cee75`.
- `funasr-1.4.25.tar.gz`: 1083745 bytes; SHA-256 `1ff96e278b7bf6823da0afa9290a12a84a0e641d31dd63fddaafd82a56000c80`.

<!-- release1425-final-verification-20261111 -->
## FunASR 1.4.25

Source: `455ad37cc03bd01e85740caf64788ee4cf8ebe2c` / tag `v1.4.25`.

### Fixes

- #3863: Python 3.12-compatible boolean argument parsing without distutils, retaining normalized invalid-value messages and boolean return types.
- #3866: remove synthetic leading spaces from Latin sentence timestamp output while preserving time boundaries, raw text and VAD alignment.

This root wheel does not publish the independent funasr-onnx runtime fix from #3865. Open SenseVoice #3861 and VAD #3862 changes are not included.

### Verification Scope

- Corrected #3863 head: actual Python 3.10/3.12 hosted artifacts each have 53 passing tests, including 23 boolean-parser contracts. Corrected #3866 head: actual NumPy 1.26.4/2.4.0 artifacts each have 421 passes and 27 CUDA-only skips. Old failed runs are retained, not rerun.
- Combined source: 468 passes and 33 skips across the union of both CI selections. An earlier private run had one missing pytorch_wpe child-process import (467 passes); a process-only private dependency path corrected it without changing product source or assertions.
- Candidate release/docs checks: {'contract-green-v3': {'testcase': 49, 'failure': 0, 'error': 0, 'skipped': 0}, 'static-remainder': {'testcase': 104, 'failure': 0, 'error': 0, 'skipped': 2}, 'installed-behavior-candidate': {'testcase': 54, 'failure': 0, 'error': 0, 'skipped': 0}}. Actual installed candidate and final wheels exercise the parser, timestamps and mocked VAD integration; final counts: {'testcase': 54, 'failure': 0, 'error': 0, 'skipped': 0}. All 439 package files and 13 entrypoints match accepted source.
- Root model/GPU-runtime bytes are unchanged from 1.4.24 and remain bound to its accepted L20Z evidence. No new GPU execution, pretrained ASR-quality, full-suite or Nano result is claimed. The prior repository-wide offline attempt remains incomplete at online model lookup and timeout.
- Head, merged-main and final-tag hosted CI and actual checkout trees are separately accepted. Final Python wheel and sdist are newly downloaded and checked for metadata, exact source bytes, archive integrity, strict Twine, private offline installation and CLI behavior.
- Ten unchanged runtime archives reuse complete cache bytes, freshly rehashed against the new assets and original runtime release with archive-integrity checks. They were not rebuilt or re-executed. SHA256SUMS covers all 12 payloads.
- The 1.4.24 warning still applies: checkpoints trained with both norm_means=True and norm_vars=True need recognition-quality reevaluation. norm_vars=False remains the default.
- No production upgrade or adoption/growth claim.

## What's Changed
* fix(onnx): load non-.wav audio paths with librosa instead of pydub by @tanishqbaweja in https://github.com/modelscope/FunASR/pull/3865
* fix(utils): remove distutils boolean parser by @GPT-AGI in https://github.com/modelscope/FunASR/pull/3863
* fix: drop the leading space on Latin sentence timestamps by @GPT-AGI in https://github.com/modelscope/FunASR/pull/3866
* Release FunASR 1.4.25 by @LauraGPT in https://github.com/modelscope/FunASR/pull/3875

## New Contributors
* @GPT-AGI made their first contribution in https://github.com/modelscope/FunASR/pull/3863

**Full Changelog**: https://github.com/modelscope/FunASR/compare/v1.4.24...v1.4.25

<!-- funasr-runtime-downloads:start -->
## Runtime downloads

This Python release pairs with the current prebuilt llama.cpp / GGUF runtime release: [runtime-llamacpp-v0.2.6](https://github.com/modelscope/FunASR/releases/tag/runtime-llamacpp-v0.2.6).

The same verified runtime assets are attached directly to this Python release so users can find the package and self-contained `llama-funasr-*` binaries in one place.

| Platform | Asset | SHA-256 |
|---|---|---|
| Linux arm64 | [funasr-llamacpp-linux-arm64.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.25/funasr-llamacpp-linux-arm64.tar.gz) | `7bca29cfa3c9a08e235a62212ca9e00f6656e59a8f07078966a2bfda1e5aa1f9` |
| Linux x64 AVX2 | [funasr-llamacpp-linux-x64-avx2.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.25/funasr-llamacpp-linux-x64-avx2.tar.gz) | `aaebc5470f846ce915200b35d6e9f9bd0a0d3ed399d39e49bdeb7a1f1782bc70` |
| Linux x64 Vulkan | [funasr-llamacpp-linux-x64-vulkan.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.25/funasr-llamacpp-linux-x64-vulkan.tar.gz) | `f02d41e98e9d4041f0896661007193810f025484d2175958f7c1313d5c90ec46` |
| Linux x64 portable | [funasr-llamacpp-linux-x64.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.25/funasr-llamacpp-linux-x64.tar.gz) | `779967de1c528c2be966bcc47f246e7d3e6fcdb748d9491263062f4120f35e52` |
| macOS arm64 | [funasr-llamacpp-macos-arm64.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.25/funasr-llamacpp-macos-arm64.tar.gz) | `bda59474202b887190f59d25b7b42c714469efae71276072c12fa0a38de68792` |
| Windows x64 AVX2 | [funasr-llamacpp-windows-x64-avx2.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.25/funasr-llamacpp-windows-x64-avx2.zip) | `062cda8fefadd31c3e811227116daccf448a8520f4b0bb168d225c896e65ebbd` |
| Windows x64 CUDA Blackwell (sm_120) | [funasr-llamacpp-windows-x64-cuda-blackwell.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.25/funasr-llamacpp-windows-x64-cuda-blackwell.zip) | `e32961a753f40888182f352fa551159c5165a6a77718ae4ade316aedfea4b1c2` |
| Windows x64 CUDA | [funasr-llamacpp-windows-x64-cuda.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.25/funasr-llamacpp-windows-x64-cuda.zip) | `148657911fb666b7af6ec43af2e23a0984e3259012b4c39f95631b717feb6840` |
| Windows x64 Vulkan | [funasr-llamacpp-windows-x64-vulkan.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.25/funasr-llamacpp-windows-x64-vulkan.zip) | `debf8007e55011cad06081e7b8a78972f1b8fe672bc324d41e650d68821f6a6a` |
| Windows x64 portable | [funasr-llamacpp-windows-x64.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.25/funasr-llamacpp-windows-x64.zip) | `f6a73a548413ba9fbaf2145263ea66ec53cbdad1fb11790dbeeee493e339492e` |

Quick start: download one asset, unpack it, then run the bundled `download-funasr-model.sh <sensevoice|paraformer|nano>` helper and one of `llama-funasr-cli`, `llama-funasr-sensevoice`, or `llama-funasr-paraformer`.

For Python users, install from PyPI:

```bash
python -m pip install -U "funasr==1.4.25"
```
<!-- funasr-runtime-downloads:end -->

---

> **Source** [modelscope/FunASR](https://github.com/modelscope/FunASR) · `v1.4.25` · 2026-11-11 · [upstream release](https://github.com/modelscope/FunASR/releases/tag/v1.4.25)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
