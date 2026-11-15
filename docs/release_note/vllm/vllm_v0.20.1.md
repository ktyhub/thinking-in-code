---
title: "vllm v0.20.1"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.20.1"
version: "v0.20.1"
published: "2026-05-04"
type: "patch"
lang: "en"
summary: "This is a patch release on top of v0.20.0 primarily focused on DeepSeek V4 stabilization and performance improvements, along with several important bug fixes."
---

# vllm v0.20.1

# vLLM v0.20.1

This is a patch release on top of `v0.20.0` primarily focused on **DeepSeek V4 stabilization and performance improvements**, along with several important bug fixes.

### DeepSeek V4
* Base model support (#41006).
* Multi-stream pre-attention GEMM (#41061), configurable pre-attn GEMM knob (#41443), and tuned default `VLLM_MULTI_STREAM_GEMM_TOKEN_THRESHOLD` (#41526).
* BF16 and MXFP8 all-to-all support for FlashInfer one-sided communication (#40960).
* PTX `cvt` instruction for faster FP32->FP4 conversion (#41015).
* Integrated tile kernels (`head_compute_mix_kernel`) for optimized head computation (#41255).
* Guard megamoe flag with Pure TP (#41522).
* Fixed persistent topk cooperative deadlock at TopK=1024 (#41189) and inter-CTA init race on RadixRowState (#41444), with temporary disable of persistent topk as a workaround (#41442).
* Fixed import error due to AOT compile cache loading (#41090).
* Fixed torch inductor error (#41135).
* Fixed repeated RoPE cache initialization (#41148).
* Fixed missing type conversion for non-streaming tool calls in DSV3.2/V4 (#41198).

### Bug Fixes
* Fixed `max_num_batched_token` not being captured in CUDA graph (#40734).
* Fixed `num_gpu_blocks_override` not accounted for in `max_model_len` checks (#41069).
* Auto-disable `expandable_segments` around cumem memory pool (#40812).
* Fixed BailingMoE linear layer (#40859) and MLA RoPE rotation for BailingMoE V2.5 (#41185).
* Fixed reasoning parser kwargs not being passed to structured output (#41199).
* [ROCm] Fixed `input_ids` and `expert_map` args for Quark W4A8 GPT-OSS (#41165).

## List of contributors
@BugenZhao, @chaunceyjiang, @gau-nernst, @ghphotoframe, @Isotr0py, @jeejeelee, @khluu, @njhill, @Rohan138, @wzhao18, @youkaichao, @ywang96, @ZJY0516, @zixi-qi, @zyongye

---

> **Source** [vllm-project/vllm](https://github.com/vllm-project/vllm) · `v0.20.1` · 2026-05-04 · [upstream release](https://github.com/vllm-project/vllm/releases/tag/v0.20.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
