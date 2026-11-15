---
title: "PaddleOCR v3.0.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.0.0"
version: "v3.0.0"
published: "2025-05-20"
type: "major"
lang: "en"
summary: "发布全场景文字识别模型PP-OCRv5： 单模型支持五种文字类型和复杂手写体识别；整体识别精度相比上一代提升13个百分点。；发布通用文档解析方案PP-StructureV3： 支持多场景、多版式 PDF 高精度解析，在公开评测集中领先众多开源和闭源方案。；发布智能文档理解方案PP-ChatOCRv4： 原生支持文心大模型4.5 Turbo，精度相比上一代提升15个百分点。"
---

# PaddleOCR v3.0.0

- **发布全场景文字识别模型PP-OCRv5：** 单模型支持五种文字类型和复杂手写体识别；整体识别精度相比上一代提升13个百分点。
 
- **发布通用文档解析方案PP-StructureV3：** 支持多场景、多版式 PDF 高精度解析，在公开评测集中领先众多开源和闭源方案。

- **发布智能文档理解方案PP-ChatOCRv4：** 原生支持文心大模型4.5 Turbo，精度相比上一代提升15个百分点。

- **重构部署能力，统一推理接口：** PaddleOCR 3.0 融合了飞桨 PaddleX3.0 工具的底层能力，全面升级推理、部署模块，优化 2.x 版本的设计，统一并优化了 Python API 和命令行接口（CLI）。部署能力现覆盖高性能推理、服务化部署及端侧部署三大场景。

- **适配飞桨框架 3.0，优化训练流程：** 新版本已兼容飞桨 3.0 的 CINN 编译器等最新特性，静态图模型存储文件名由 `xxx.pdmodel` 改为 `xxx.json`。

- **统一模型名称：** 对PaddleOCR3.0支持的模型命名体系进行了更新，采用更规范、统一的命名规则，为后续迭代与维护奠定基础。

---

> **Source** [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · `v3.0.0` · 2025-05-20 · [upstream release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
