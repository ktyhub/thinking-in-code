---
title: "vllm v0.20.2"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.20.2"
version: "v0.20.2"
published: "2026-05-10"
type: "patch"
lang: "en"
summary: "This release features 6 commits from 6 contributors (0 new)!"
---

# vllm v0.20.2

# vLLM v0.20.2

## Highlights
This release features 6 commits from 6 contributors (0 new)!

This is a small patch release with bug fixes for DeepSeek V4, gpt-oss, and Qwen3-VL

### Bug Fixes
* **DeepSeek V4 sparse attention**: Re-enable the persistent topk path on Hopper and ensure the memset kernel runs at CUDA graph capture time regardless of `max_seq_len`, fixing the MTP=1 hang on DeepSeek V4 (#41665, revert of #41605).
* **DeepSeek V4 KV cache**: Fixed a "failure to allocate KV blocks" error in the V1 engine KV cache manager (#41282).
* **gpt-oss MXFP4 + torch.compile**: Plumbed `hidden_dim_unpadded` through the `moe_forward` fake op so MXFP4 works under `torch.compile` on v0.20.x (#42002, backport of #41646).
* **Qwen3-VL**: Removed an invalid deepstack boundary check that could fail under heavy load (#40932).

## Contributors
@ywang96, @zyongye, @stecasta, @wzhao18, @Isotr0py, @khluu

---

> **Source** [vllm-project/vllm](https://github.com/vllm-project/vllm) · `v0.20.2` · 2026-05-10 · [upstream release](https://github.com/vllm-project/vllm/releases/tag/v0.20.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
