---
title: "transformers v5.16.1"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.16.1"
version: "v5.16.1"
published: "2026-08-26"
type: "patch"
lang: "zh"
---

# transformers v5.16.1

# 释放v5.16.1

这是一个特别版本，因为我们包括 GLM！ （以及一些小修复）

# GLM-5.3-Flash

<img width="4239" height="2643" alt="image" src="https://github.com/user-attachments/assets/17bc9c29-758b-44c8-8230-42f945ded209" />

GLM-5.3-Flash，GLM-5 系列中的第一个**本地多模式模型**。它具有 320B 总参数和仅 18B 活动参数，在基准测试和实际工作负载上优于 GLM-5.2，而价格仅为 GLM-5.2 的十分之一，同时在编码和代理基准测试上接近 Claude Opus 4.8。

GLM-5.3-Flash 从新训练的基础模型开始，其架构和训练方法围绕功能和效率重新设计。在 GLM 系列中，我们首次引入了一种结合稀疏和线性注意力的混合架构，大大降低了长上下文服务成本，同时保留了精确的长上下文功能。该模型还采用流形约束超连接（mHC）来进一步提高扩展效率。与我们最新的 **30T-token** 多模式预训练语料库一起，这些变化使 GLM-5.3-Flash 能够以更少的计算提供更多的智能。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/glm5_next)
* [Glm 5.3 Flash] GLM 5.3 Flash 支持 (#48342) by @Dovis01 in [#48342](https://github.com/huggingface/transformers/pull/48342)


## 小补丁修复

主要是 TP 的 BC 行为以及出于安全原因固定 hf 内核 :hugs: 

- 恢复张量并行 API 的 BC (#48300) by @ArthurZucker 
- 修复 ESMFold2 的内核提交和存储库路径（#48186），作者：@Rocketknight1 

**完整 Changelog**：https://github.com/huggingface/transformers/compare/v5.16.0...v5.16.1

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.16.1` · 📅 发布：2026-08-26 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.16.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
