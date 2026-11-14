---
title: "FunASR v1.4.24"
project: "FunASR"
repo: "modelscope/FunASR"
tag: "v1.4.24"
version: "v1.4.24"
published: "2026-11-08"
type: "patch"
lang: "en"
summary: "GitHub Release and PyPI 1.4.24 are both published. Both distributions were downloaded from official PyPI and match the accepted GitHub assets by SHA-256 and size"
---

# FunASR v1.4.24

<!-- release1424-pypi-verified-20261108 -->
### Final Publication Acceptance

GitHub Release and PyPI 1.4.24 are both published. Both distributions were downloaded from official PyPI and match the accepted GitHub assets by SHA-256 and size:

- `funasr-1.4.24-py3-none-any.whl`: 1015161 bytes; SHA-256 `c2678ebb77c7dfba1d85a79749ad30b441159b87d17eff901e0c6ad4ebcc06c7`.
- `funasr-1.4.24.tar.gz`: 1081873 bytes; SHA-256 `522dcb493be75aa57d8183e6197b4431c5e02fade689eda90cfd91f76e5edb57`.

The official sdist download resumed after a transport timeout using an exact HTTP 206 range; the original partial and failure receipts were retained. The wheel was not downloaded again and PyPI was not re-uploaded.

<!-- release1424-final-verification-20261108 -->
## FunASR 1.4.24

Source: `20f26b7c4905d010768ec91206149df2a90104b6` / tag `v1.4.24`.

### Fix

Deliver #3852: ignore empty non-linguistic symbols instead of allowing the character/phoneme tokenizer scan to stall. Deliver #3853: correct variance normalization for padded utterances. Deliver #3854: preserve valid CIF output and gradients when a batch mixes utterances with zero and nonzero fires, including dynamic ONNX batches.

Compatibility: checkpoints trained with both `norm_means=True` and `norm_vars=True` require recognition-quality reevaluation after the corrected normalization. `norm_vars=False` remains the default. Local checkpoint round trips are not a pretrained recognition-quality evaluation.

This does not claim pretrained ASR quality, Windows/NPU acceptance or a full repository-suite result.

The separately released `funasr-onnx==0.4.9` and `funasr-torch==0.1.6` have their own tags, packages and verification. This root-package release does not republish them. PR #3848 is not included. This release does not claim every EOS path is fixed.

### Verification Scope

- New candidate release/README checks: 45 cases, 0 skips. Related docs/package/release checks: 104 cases, 2 explicitly recorded skips; no failures or errors.
- Actual installed candidate and final wheels: 37 passing CPU/ONNX cases each covering tokenizer symbols, variance normalization, local checkpoint round trips, repository-audio inference and CIF dynamic batches. The 27 CUDA parametrizations are intentionally skipped locally and separately covered by bound prior hardware evidence. All 439 package files and 13 entrypoints match the accepted source.
- Reused 24 tokenizer/CTC cases, 34 FP32 CIF cases and four normalizer repository-audio cases including six CUDA inference calls on L20Z, after rehashing 33,870 sealed evidence files and 18 helpers and binding the exact source to the installed wheel. The 106-case normalizer acceptance retains 102 unchanged cases and four repaired audio checks. Earlier harness/TF32-fixture failures remain preserved; they are not silently discarded or counted as passes. This release performs no new GPU execution and makes no pretrained-quality or full-Paraformer-export claim.
- The local candidate build and candidate/final package checks, tests and installations use private HOME/cache directories and separate network namespaces with verified network-unreachable probes. The final-tag build runs in GitHub Actions under the existing release workflow, not the local network namespace. No newly downloaded pretrained weights are used. The separately reported #3848 test-download incident is not an authorization or validation input for this release.
- Release-head CI was accepted from actual logs and recorded artifact inventories. The roadmap job checked out the pure head; the other head workflows used GitHub's temporary PR merge commit. Both checkout trees were verified against the exact candidate. Merged-main and final-tag source checkouts were separately verified. The main API-doc workflow also checked out only the retained Chinese API page from `gh-pages` into `previous-pages`; this separate documentation input was recorded, not treated as inference source. The newly downloaded Python wheel/sdist passed byte/metadata/archive/source checks, strict Twine, offline installation, actual import and CLI checks.
- The 10 unchanged runtime archives reuse complete cache bytes freshly hashed against new asset metadata and the existing runtime source release. They were not rebuilt or re-executed. SHA256SUMS covers all 12 payloads. This is not a new runtime-hardware claim.
- No full repository-suite, production-environment upgrade, Nano benchmark or adoption/growth claim is made.

## What's Changed
* fix(tokenizer): prevent empty-symbol hangs with hosted regression coverage by @LauraGPT in https://github.com/modelscope/FunASR/pull/3855
* fix(tokenizer): ignore empty non-linguistic symbols to avoid a hang by @MohammadHijjawi97 in https://github.com/modelscope/FunASR/pull/3852
* fix(normalize): correct variance with reproducible CPU/CUDA regressions by @LauraGPT in https://github.com/modelscope/FunASR/pull/3856
* fix(normalize): correct UtteranceMVN variance normalization by @BillVan1945 in https://github.com/modelscope/FunASR/pull/3853
* fix(cif): handle mixed zero-fire batches with CPU/ONNX regression CI by @LauraGPT in https://github.com/modelscope/FunASR/pull/3857
* fix(paraformer): handle trailing zero-fire samples in mixed CIF batches by @BillVan1945 in https://github.com/modelscope/FunASR/pull/3854
* Release FunASR 1.4.24 by @LauraGPT in https://github.com/modelscope/FunASR/pull/3858


**Full Changelog**: https://github.com/modelscope/FunASR/compare/v1.4.23...v1.4.24

<!-- funasr-runtime-downloads:start -->
## Runtime downloads

This Python release pairs with the current prebuilt llama.cpp / GGUF runtime release: [runtime-llamacpp-v0.2.6](https://github.com/modelscope/FunASR/releases/tag/runtime-llamacpp-v0.2.6).

The same verified runtime assets are attached directly to this Python release so users can find the package and self-contained `llama-funasr-*` binaries in one place.

| Platform | Asset | SHA-256 |
|---|---|---|
| Linux arm64 | [funasr-llamacpp-linux-arm64.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.24/funasr-llamacpp-linux-arm64.tar.gz) | `7bca29cfa3c9a08e235a62212ca9e00f6656e59a8f07078966a2bfda1e5aa1f9` |
| Linux x64 AVX2 | [funasr-llamacpp-linux-x64-avx2.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.24/funasr-llamacpp-linux-x64-avx2.tar.gz) | `aaebc5470f846ce915200b35d6e9f9bd0a0d3ed399d39e49bdeb7a1f1782bc70` |
| Linux x64 Vulkan | [funasr-llamacpp-linux-x64-vulkan.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.24/funasr-llamacpp-linux-x64-vulkan.tar.gz) | `f02d41e98e9d4041f0896661007193810f025484d2175958f7c1313d5c90ec46` |
| Linux x64 portable | [funasr-llamacpp-linux-x64.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.24/funasr-llamacpp-linux-x64.tar.gz) | `779967de1c528c2be966bcc47f246e7d3e6fcdb748d9491263062f4120f35e52` |
| macOS arm64 | [funasr-llamacpp-macos-arm64.tar.gz](https://github.com/modelscope/FunASR/releases/download/v1.4.24/funasr-llamacpp-macos-arm64.tar.gz) | `bda59474202b887190f59d25b7b42c714469efae71276072c12fa0a38de68792` |
| Windows x64 AVX2 | [funasr-llamacpp-windows-x64-avx2.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.24/funasr-llamacpp-windows-x64-avx2.zip) | `062cda8fefadd31c3e811227116daccf448a8520f4b0bb168d225c896e65ebbd` |
| Windows x64 CUDA Blackwell (sm_120) | [funasr-llamacpp-windows-x64-cuda-blackwell.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.24/funasr-llamacpp-windows-x64-cuda-blackwell.zip) | `e32961a753f40888182f352fa551159c5165a6a77718ae4ade316aedfea4b1c2` |
| Windows x64 CUDA | [funasr-llamacpp-windows-x64-cuda.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.24/funasr-llamacpp-windows-x64-cuda.zip) | `148657911fb666b7af6ec43af2e23a0984e3259012b4c39f95631b717feb6840` |
| Windows x64 Vulkan | [funasr-llamacpp-windows-x64-vulkan.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.24/funasr-llamacpp-windows-x64-vulkan.zip) | `debf8007e55011cad06081e7b8a78972f1b8fe672bc324d41e650d68821f6a6a` |
| Windows x64 portable | [funasr-llamacpp-windows-x64.zip](https://github.com/modelscope/FunASR/releases/download/v1.4.24/funasr-llamacpp-windows-x64.zip) | `f6a73a548413ba9fbaf2145263ea66ec53cbdad1fb11790dbeeee493e339492e` |

Quick start: download one asset, unpack it, then run the bundled `download-funasr-model.sh <sensevoice|paraformer|nano>` helper and one of `llama-funasr-cli`, `llama-funasr-sensevoice`, or `llama-funasr-paraformer`.

For Python users, install from PyPI:

```bash
python -m pip install -U "funasr==1.4.24"
```
<!-- funasr-runtime-downloads:end -->

---

> **Source** [modelscope/FunASR](https://github.com/modelscope/FunASR) · `v1.4.24` · 2026-11-08 · [upstream release](https://github.com/modelscope/FunASR/releases/tag/v1.4.24)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
