---
title: "transformers v5.20.1"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.20.1"
version: "v5.20.1"
published: "2026-10-16"
type: "patch"
lang: "zh"
---

# transformers v5.20.1

# 释放v5.20.1

特别惊喜包括来自 Reflection AI 的新模型 Beam :partying_face: 

<img width="2912" height="1440" alt="Gemini_Generate_Image_ox4hjlox4hjlox4h" src="https://github.com/user-attachments/assets/bfc7ff16-4340-490c-925c-b1512e4ceb32" />

Beam 是一种代币高效、前沿规模的模型，专注于编码和代理用例。它专为希望在自己的硬件、基础设施或云上运行强大模型并根据其特定需求进行自定义的团队而构建。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/beam)
* 修复自动映射中的小错误 (#49664)，由 @yonigozlan 在 [#49664](https://github.com/huggingface/transformers/pull/49664) 中


## 一些真正的补丁修复

我们破坏了旧版本火炬上的加载模型：cry：现在应该修复。但这是完整的修复列表

- 修复批量生成期间的 HunYuan-VL 图像分配 (#49557) by @Arnav66692
- 在专家并行性下修复 DeepGEMM Mega MoE (#49428) by @IlyasMoutawwakil
- 修复 torch 2.7 上的 from_pretrained：需要 torch>=2.8 进行分布式检查点 (#49652) by @naveecode 
- 使 DtensorShardOperation 在火炬 2.6 和 2.7 上工作（#49657），作者：@hazelxue

**完整 Changelog**：https://github.com/huggingface/transformers/compare/v5.20.0...v5.20.1

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.20.1` · 📅 发布：2026-10-16 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.20.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
