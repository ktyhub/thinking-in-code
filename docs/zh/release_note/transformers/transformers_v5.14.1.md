---
title: "transformers v5.14.1"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.14.1"
version: "v5.14.1"
published: "2026-07-16"
type: "patch"
lang: "zh"
---

# transformers v5.14.1

# 补丁发布v5.14.1

该补丁解决了集成 Inkling 模型时出现的一些问题，最显着的是影响辅助生成期间使用 EncoderDecoderCache 的模型的问题。它还修复了在使用 StaticCache 和 sdpa 预填充期间可能出现的问题，而无需为使用position_bias的 Inkling 进行填充。 
它包含以下提交：

- 使用position_bias 修复 sdpa 预填充（#47359），作者：@Cyrilvallez
- 修复带有 EncoderDecoder 缓存和 OlmoHybrid 的模型的辅助解码 (#47361) by @Cyrilvallez
- [FP8] 凹凸内核版本 (#47344) by @vasqu 
- 在多个设备上修复 deepgemm (#47323) by @IlyasMoutawwakil

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.14.1` · 📅 发布：2026-07-16 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.14.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
