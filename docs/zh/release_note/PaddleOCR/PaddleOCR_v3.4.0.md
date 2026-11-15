---
title: "PaddleOCR v3.4.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.4.0"
version: "v3.4.0"
published: "2026-01-29"
type: "minor"
lang: "zh"
---

# PaddleOCR v3.4.0

## 2026.1.29 v3.4.0 发布
* **发布PaddleOCR-VL-1.5复杂文档解析解决方案。**

    PaddleOCR-VL-1.5是PaddleOCR-VL系列的新迭代版本。基于1.0版本核心能力的全面优化，该模型在权威文档解析基准OmniDocBench v1.5上达到**94.5%**准确率，超越全球顶级通用大型模型和文档解析专用模型。
    
    PaddleOCR-VL-1.5创新性地支持文档元素的**不规则形状边界框定位**，在**扫描、倾斜、变形、屏幕拍照、复杂照明**等实际应用场景中具有出色的性能，实现全面的SOTA性能。此外，该模型进一步集成了**印章识别**和**定位任务**，关键指标继续领先主流模型。

    您可以在【PaddleOCR官网】(https://www.paddleocr.com)﻿上在线使用，或者拨打型号API。

* 添加对调用 MLX-VLM 推理服务的支持。
* PaddleOCR-VL 现在支持跨页表合并和多级标题重建。
* PP-StructureV3 添加了对 `format_block_content` 和 `markdown_ignore_labels` 参数的支持。
* 修复了访问官方 PaddleOCR-VL 镜像中的 `/docs` 端点会导致错误的问题。

## 2026.1.29 v3.4.0 发布
* **发布PaddleOCR-VL-1.5复杂文档解析方案。**

    PaddleOCR-VL-1.5 是 PaddleOCR-VL 系列的全新迭代版本。在全面优化 1.0 版本核心能力的基础上，该模型在文档解析权威赛季集 OmniDocBench v1.5 上斩获了 **94.5%** 的读数，超越了全球的顶尖通用大模型及文档解析专用模型。
    
    PaddleOCR-VL-1.5 创新性地支持了文档元素的**异形框定位**，使得 PaddleOCR-VL-1.5 在**扫描、倾斜、弯折、屏幕拍摄及复杂提示**等真实落地场景中均表现出色，实现了全面的 SOTA。此外，模型进一步集成了**印章识别与文本检测识别任务**，关键指标持续领领主流运行模型。
    
    您可以在 [PaddleOCR官网](https://www.paddleocr.com) 在线使用或者调用该模型的API。

* 新增对 MLX-VLM 推理服务的调用支持。
* PaddleOCR-VL支持合并跨页表格、多级标题重建功能。
* PP-StructureV3支持`format_block_content`、`markdown_ignore_labels`参数。
* 修复PaddleOCR-VL官方镜像访问`/docs`接口报错的问题。

## 新贡献者
* @AmirHosseinOmidi0 在 https://github.com/PaddlePaddle/PaddleOCR/pull/16659 中做出了第一个贡献
* @ZhangX-21 在 https://github.com/PaddlePaddle/PaddleOCR/pull/16745 中做出了他们的第一个贡献
* @AdlerFleurant 在 https://github.com/PaddlePaddle/PaddleOCR/pull/16756 中做出了第一个贡献
* @tianyuzhou668 在 https://github.com/PaddlePaddle/PaddleOCR/pull/16518 中做出了第一个贡献
* @shiyuasuka 在 https://github.com/PaddlePaddle/PaddleOCR/pull/17041 中做出了第一个贡献
* @1250890838 在 https://github.com/PaddlePaddle/PaddleOCR/pull/16996 中做出了第一个贡献
* @Ihebdhouibi 在 https://github.com/PaddlePaddle/PaddleOCR/pull/16994 中做出了第一个贡献
* @Ghazi-raad 在 https://github.com/PaddlePaddle/PaddleOCR/pull/17201 中做出了第一个贡献
* @orbisai0security 在 https://github.com/PaddlePaddle/PaddleOCR/pull/17289 中做出了第一个贡献
* @danghoangnhan 在 https://github.com/PaddlePaddle/PaddleOCR/pull/17019 中做出了第一个贡献
* @Luxorion-12 在 https://github.com/PaddlePaddle/PaddleOCR/pull/17158 中做出了第一个贡献

**完整 Changelog**：https://github.com/PaddlePaddle/PaddleOCR/compare/v3.3.3...v3.4.0

---

> 📦 仓库：[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · 🏷️ 版本：`v3.4.0` · 📅 发布：2026-01-29 · [查看英文原版 Release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.4.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
