---
title: "transformers v5.15.1"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.15.1"
version: "v5.15.1"
published: "2026-08-19"
type: "patch"
lang: "zh"
---

# transformers v5.15.1

# 补丁发布v5.15.1

该补丁最显着地解决了 DFlash 和 MTP 候选生成器的一些问题，以及如果使用 Lanczos 过滤器有时无法在加速器上处理图像的问题。

它包含以下提交：

- 修复 DFlash 候选令牌设备与 device_map="auto" 不匹配的问题 (#47877)，作者：@sywangyi 和 @Cyrilvallez
- 使用@Cyrilvallez 的采样来对齐 CandidateGenerators 的 logit 分布 (#48007)
- 当 mlp_layer_types 不存在时修复 MTP 配置 (#48015) by @Cyrilvallez 
- 使用 cuda 时从“lanczos”回退到“bicubic”（#48026），作者：@zucchini-nlp
- 将 gemma4 视频修复到设备 (#47896) by @guarin

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.15.1` · 📅 发布：2026-08-19 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.15.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
