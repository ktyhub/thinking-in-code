---
title: "transformers v5.20.2"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.20.2"
version: "v5.20.2"
published: "2026-10-19"
type: "patch"
lang: "zh"
---

# transformers v5.20.2

# 补丁发布：v5.20.2

该补丁特别解决了一个问题，即某些输入可能会在 `generate` 中的 `prepare_inputs_for_generation` 中丢失其原始类型，从而导致多模式模型出现问题。它还修复了以下提交中列出的一些其他问题。

它包含以下提交：

- 修复了生成中的输入字典转换（#49731），作者：@Cyrilvallez
- 通过专家并行性和 ep_size < fsdp_size 修复 bfloat16 中的零专家梯度 (#49688) by @qgallouedec 
- 声明仅报告文本的 VLM 的输入模式 (#49677) by @qgallouedec 
- 避免在 eager_mask 中进行主机到设备的复制（#49684），作者：@hmellor

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.20.2` · 📅 发布：2026-10-19 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.20.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
