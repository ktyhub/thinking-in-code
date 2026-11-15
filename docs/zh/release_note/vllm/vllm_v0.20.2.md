---
title: "vllm v0.20.2"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.20.2"
version: "v0.20.2"
published: "2026-05-10"
type: "patch"
lang: "zh"
---

# vllm v0.20.2

# vLLM v0.20.2

## 亮点
此版本包含来自 6 位贡献者的 6 项提交（0 个新贡献者）！

这是一个小补丁版本，修复了 DeepSeek V4、gpt-oss 和 Qwen3-VL 的错误

### 错误修复
* **DeepSeek V4 稀疏注意力**：重新启用 Hopper 上的持久 topk 路径，并确保 memset 内核在 CUDA 图形捕获时间运行，而不管 `max_seq_len`，修复 DeepSeek V4 上的 MTP=1 挂起（#41665，恢复 #41605）。
* **DeepSeek V4 KV 缓存**：修复了 V1 引擎 KV 缓存管理器中的“分配 KV 块失败”错误 (#41282)。
* **gpt-oss MXFP4 + torch.compile**：通过 `moe_forward` 伪操作检测 `hidden_dim_unpadded`，以便 MXFP4 在 v0.20.x 上的 `torch.compile` 下工作（#42002，#41646 的向后移植）。
* **Qwen3-VL**: Removed an invalid deepstack boundary check that could fail under heavy load (#40932).

## 贡献者
@ywang96, @zyongye, @stecasta, @wzhao18, @Isotr0py, @khluu

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.20.2` · 📅 发布：2026-05-10 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.20.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
