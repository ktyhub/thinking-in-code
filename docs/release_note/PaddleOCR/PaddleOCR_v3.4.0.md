---
title: "PaddleOCR v3.4.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.4.0"
version: "v3.4.0"
published: "2026-01-29"
type: "minor"
lang: "en"
summary: "Release the PaddleOCR-VL-1.5 complex document parsing solution."
---

# PaddleOCR v3.4.0

## 2026.1.29 v3.4.0 released
* **Release the PaddleOCR-VL-1.5 complex document parsing solution.**

    PaddleOCR-VL-1.5 is a new iterative version of the PaddleOCR-VL series. Based on comprehensive optimization of the core capabilities of version 1.0, the model achieves **94.5%** accuracy on the authoritative document parsing benchmark OmniDocBench v1.5, surpassing top global general-purpose large models and document parsing–specific models.
    
    PaddleOCR-VL-1.5 innovatively supports **irregular-shaped bounding box localization** of document elements, enabling excellent performance in real-world application scenarios such as **scanning, skew, warping, screen-photography, and complex illumination**, achieving comprehensive SOTA performance. In addition, the model further integrates **seal recognition** and **spotting tasks**, with key metrics continuing to lead mainstream models.

    You can use it online on the [PaddleOCR official website](https://www.paddleocr.com)﻿ or call the model API.

* Add support for calling MLX-VLM inference services.
* PaddleOCR-VL now supports cross-page table merging and multi-level heading reconstruction.
* PP-StructureV3 adds support for the `format_block_content` and `markdown_ignore_labels` parameters.
* Fixed an issue where accessing the `/docs` endpoint in the official PaddleOCR-VL image would result in an error.

## 2026.1.29 v3.4.0 发布
* **发布 PaddleOCR-VL-1.5 复杂文档解析方案。**

    PaddleOCR-VL-1.5 是 PaddleOCR-VL 系列的全新迭代版本。在全面优化 1.0 版本核心能力的基础上，该模型在文档解析权威评测集 OmniDocBench v1.5 上斩获了 **94.5%** 的高精度，超越了全球的顶尖通用大模型及文档解析专用模型。
    
    PaddleOCR-VL-1.5 创新性地支持了文档元素的**异形框定位**，使得 PaddleOCR-VL-1.5 在**扫描、倾斜、弯折、屏幕拍摄及复杂光照**等真实落地场景中均表现卓越，实现了全面的 SOTA。此外，模型进一步集成了**印章识别与文本检测识别任务**，关键指标持续领跑主流模型。
    
    您可以在 [PaddleOCR官网](https://www.paddleocr.com) 在线使用或者调用该模型的API。

* 新增对 MLX-VLM 推理服务的调用支持。
* PaddleOCR-VL 支持合并跨页表格、多级标题重建功能。
* PP-StructureV3 支持 `format_block_content`、`markdown_ignore_labels` 参数。
* 修复 PaddleOCR-VL 官方镜像访问 `/docs` 接口报错的问题。

## New Contributors
* @AmirHosseinOmidi0 made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/16659
* @ZhangX-21 made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/16745
* @AdlerFleurant made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/16756
* @tianyuzhou668 made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/16518
* @shiyuasuka made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/17041
* @1250890838 made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/16996
* @Ihebdhouibi made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/16994
* @Ghazi-raad made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/17201
* @orbisai0security made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/17289
* @danghoangnhan made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/17019
* @Luxorion-12 made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/17158

**Full Changelog**: https://github.com/PaddlePaddle/PaddleOCR/compare/v3.3.3...v3.4.0

---

> **Source** [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · `v3.4.0` · 2026-01-29 · [upstream release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
