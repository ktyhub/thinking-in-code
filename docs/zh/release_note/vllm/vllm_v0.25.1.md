---
title: "vllm v0.25.1"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.25.1"
version: "v0.25.1"
published: "2026-07-14"
type: "patch"
lang: "zh"
---

# vllm v0.25.1

# vLLM v0.25.1

## 亮点

此版本有 2 个贡献者的 2 个提交（1 个新贡献者）！

v0.25.1 是一个补丁版本，包含 v0.25.0 之上的两个有针对性的错误修复。

### 错误修复
* **当没有系统 FFmpeg 可用于 TorchCodec 时，避免阻止模型启动** (#47888)。以前，当系统 FFmpeg 丢失时，`import torchcodec` 在导入时引发 `RuntimeError`，即使未使用 TorchCodec，也会阻止启动（例如 `vllm serve Qwen/Qwen3-VL-2B-Instruct`）。该错误现在已推迟到运行时，因此仅在实际需要 TorchCodec 时才会出现。
* **保护混合数据类型 allreduce RMSNorm 定量融合** (#48330)。融合的 FlashInfer allreduce + RMSNorm + 静态量化模式可以匹配激活和 RMSNorm 权重 dtypes 不同的图（例如 NVFP4 模型中具有 FP32 Gemma/Qwen 式 RMSNorm 权重的 BF16 残差流），破坏隐藏状态并产生垃圾输出，例如重复的 `!!!!!` 令牌。数据类型匹配防护现在将不兼容的混合数据类型图路由到安全路径，而相同数据类型模型保留完整的 allreduce + RMSNorm + Quant 融合。

## 贡献者

@Isotr0py，@hugo-cen

## 新贡献者

* @hugo-cen 在 https://github.com/vllm-project/vllm/pull/48330 中做出了第一个贡献

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.25.1` · 📅 发布：2026-07-14 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.25.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
