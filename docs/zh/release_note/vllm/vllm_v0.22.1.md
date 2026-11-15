---
title: "vllm v0.22.1"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.22.1"
version: "v0.22.1"
published: "2026-06-05"
type: "patch"
lang: "zh"
---

# vllm v0.22.1

## 亮点

此版本包含来自 6 位贡献者的 8 项提交（1 个新贡献者）！

v0.22.1 is a patch release on top of v0.22.0 with targeted bug fixes plus a couple of additions: new model support for JetBrains' Mellum v2, zentorch-accelerated quantized linear inference on AMD Zen CPUs, and fixes for multi-node Ray data-parallel serving, DeepSeek-V4 initialization, and a few model-loading regressions.

### 模型支持
* 新模型：JetBrains 的 **Mellum v2**，一种开放权重专家混合代码生成模型 (#43992)。
* **DeepSeek-V4**：解决了破坏初始化的 CUTLASS `fmin` 兼容性问题 (0decac0d)。
* 修复检查点将 `rope_parameters` 从 `None` 更改为 `{"rope_type": None}` 后 `OlmoHybridForCausalLM` 无法初始化的问题 (#43846)。
* Fix **HyperCLOVAX** loading after the upstream HuggingFace repo removed its remote code (now native in `transformers >= 5.9.0`): register the `hyperclovax` model_type so vLLM uses its vendored config instead of the stale `auto_map` (#43860).

### 硬件与性能
* **AMD Zen CPUs**: route W8A8 (int8 dynamic-symmetric) and W4A16 (GPTQ) linear inference through zentorch kernels, registered ahead of the generic oneDNN CPU kernels, with transparent fallback on non-Zen CPUs, GPUs, and XPU (#41813).

### 大规模服务
* Fix a deterministic hang in multi-node **Ray data-parallel** serving with `num_api_servers > 1` by excluding the Ray DP backend from the deferred (kernel-assigned) port allocation introduced in #42585 (#43864).

### 构建和 CI
* Docker：当 `flashinfer-jit-cache` 在 PyPI 上隔离时，停止通过 `--extra-index-url` 安装 `flashinfer-jit-cache`，修复映像构建 (#44366)。
* Normalize **NIXL** KV-connector wheel installs so only the wheel matching the image's CUDA major is kept, fixing `ImportError: libcudart.so.12` when importing `nixl_ep` on CUDA 13 images (#44266).

## 贡献者

@khluu、@vadiklyutiy、@aadwived、@shadeMe、@alec-flowers、@hmellor

## 新贡献者

* @aadwived 在 https://github.com/vllm-project/vllm/pull/41813 中做出了第一个贡献

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.22.1` · 📅 发布：2026-06-05 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.22.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
