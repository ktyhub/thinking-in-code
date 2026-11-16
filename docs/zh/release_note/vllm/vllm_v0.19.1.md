---
title: "vllm v0.19.1"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.19.1"
version: "v0.19.1"
published: "2026-04-18"
type: "patch"
lang: "zh"
---

# vllm v0.19.1

这是 `v0.19.0` 之上的补丁版本，其中包含 Transformers v5.5.3 升级和 Gemma4 的错误修复：
- 更新到变形金刚 v5 (#30566)
- [错误修复] 通过删除部分分隔符修复 Gemma 4 流工具调用中无效的 JSON (#38992)
- [错误修复][前端]修复工具调用后 Gemma4 流式 HTML 重复 (#38909)
- [错误修复] 修复 Gemma4 流工具调用损坏的分割布尔值/数字值 (#39114)
- [工具] 推理解析器的 adjustment_request，以及 Gemma4 修复 (#39027)
- [Gemma4] 支持量化 MoE (#39045)
- 添加 Gemma4 Eagle3 支持 (#39450)
- [Gemma4][Bugfix]：启用 Gemma4ForCasualLM 正确加载 lora 适配器 (#38844)
- [Bugfix] 修复 Gemma4 工具解析器将裸 null 转换为字符串“null” (#39679)
- [模型] 通过动态 BOS 注入修复 PT 模型的 Gemma 4 令牌重复问题 (#39842)
- 修复（kimi_k25）：从 tokenizer 解析 media_placeholder_token_id （#39344）

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.19.1` · 📅 发布：2026-04-18 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.19.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
