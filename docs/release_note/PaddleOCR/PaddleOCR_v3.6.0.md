---
title: "PaddleOCR v3.6.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.6.0"
version: "v3.6.0"
published: "2026-05-28"
type: "minor"
lang: "en"
summary: "Release the PaddleOCR-VL-1.6 document parsing solution."
---

# PaddleOCR v3.6.0

## 2026.5.28 v3.6.0 released

* **Release the PaddleOCR-VL-1.6 document parsing solution.**

    - PaddleOCR-VL-1.6 is an upgraded compact document parsing model built upon PaddleOCR-VL-1.5. Through a newly introduced **region-aware data optimization framework** and a **progressive post-training recipe**, the model further enhances parsing robustness and overall recognition accuracy.
    - PaddleOCR-VL-1.6 achieves a new state-of-the-art score of **96.33%** on the authoritative benchmark OmniDocBench v1.6, while also setting new records on OmniDocBench v1.5 and Real5-OmniDocBench. The model delivers leading performance across text, formula, and table recognition tasks, surpassing both open-source and closed-source solutions.
    - PaddleOCR-VL-1.6 significantly improves capabilities in **table recognition**, **Chinese ancient document parsing**, and **Chinese rare character recognition**, while further enhancing performance in **seal recognition**, **text spotting**, **chart recognition**, and other diverse document scenarios.
    - The model architecture remains fully compatible with PaddleOCR-VL-1.5, enabling **zero-cost plug-and-play migration** for existing users.

* Release official PaddleOCR API SDKs for Python, Go, and TypeScript, enabling more convenient integration with PaddleOCR official asynchronous APIs.
* Add support for parsing multi-page TIFF files.

## 2026.5.28 v3.6.0 发布

* **发布 PaddleOCR-VL-1.6 文档解析方案。**

    - PaddleOCR-VL-1.6 是基于 PaddleOCR-VL-1.5 全新升级的轻量级文档解析模型。通过引入全新的**区域感知数据优化框架**以及**渐进式后训练优化方案**，模型进一步提升了复杂文档场景下的解析鲁棒性与整体识别精度。
    - PaddleOCR-VL-1.6 在权威文档解析评测集 OmniDocBench v1.6 上取得了 **96.33%** 的全新 SOTA 成绩，并同时刷新了 OmniDocBench v1.5 与 Real5-OmniDocBench 的最佳纪录。在文本、公式、表格等核心任务上，模型均展现出全面领先的性能，超越当前主流开源及闭源方案。
    - PaddleOCR-VL-1.6 在**表格识别**、**中文古籍文档解析**、**中文生僻字识别**等能力上实现显著增强，同时进一步提升了**印章识别**、**文本检测识别（Spotting）**、**图表解析**等多种复杂场景下的表现。
    - PaddleOCR-VL-1.6 与 PaddleOCR-VL-1.5 保持完全兼容，无需额外适配即可实现**零成本即插即用升级**。

* 发布 PaddleOCR 官方 API Python、Go、TypeScript SDK，支持更加便捷地调用 PaddleOCR 官方异步 API。
* 新增对多页 TIFF 文件解析的支持。

**Full Changelog**: https://github.com/PaddlePaddle/PaddleOCR/compare/v3.5.0...v3.6.0

---

> **Source** [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · `v3.6.0` · 2026-05-28 · [upstream release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
