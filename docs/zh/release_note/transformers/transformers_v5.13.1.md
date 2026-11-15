---
title: "transformers v5.13.1"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.13.1"
version: "v5.13.1"
published: "2026-07-11"
type: "patch"
lang: "zh"
---

# transformers v5.13.1

# 补丁发布v5.13.1 

该补丁的重点是为最新版本的 vllm 启用 `transformers`！ 

- 使用 @hmellor 的自定义模型的 remap_legacy_layer_types 更具防御性 (#47245) 
- 修复不知道来自 @hmellor 的新线性图层类型名称的自定义代码 (#47174) 
- 修复了 _LazyAutoMapping.register 从 @hmellor 传递 str 键的情况 (#47148)

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.13.1` · 📅 发布：2026-07-11 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.13.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
