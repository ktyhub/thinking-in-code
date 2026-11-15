---
title: "PaddleOCR v3.2.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.2.0"
version: "v3.2.0"
published: "2025-08-21"
type: "minor"
lang: "en"
summary: "Significant Model Additions"
---

# PaddleOCR v3.2.0

## 2025.8.21 v3.2.0 released

- **Significant Model Additions:**
    - Introduced training, inference, and deployment for PP-OCRv5 recognition models in English, Thai, and Greek. **The PP-OCRv5 English model delivers an 11% improvement in English scenarios compared to the main PP-OCRv5 model, with the Thai and Greek recognition models achieving accuracies of 82.68% and 89.28%, respectively.**

- **Deployment Capability Upgrades:**
    - **Full support for PaddlePaddle framework versions 3.1.0 and 3.1.1.**
    - **Comprehensive upgrade of the PP-OCRv5 C++ local deployment solution, now supporting both Linux and Windows, with feature parity and identical accuracy to the Python implementation.**
    - **High-performance inference now supports CUDA 12, and inference can be performed using either the Paddle Inference or ONNX Runtime backends.**
    - **The high-stability service-oriented deployment solution is now fully open-sourced, allowing users to customize Docker images and SDKs as required.**
    - The high-stability service-oriented deployment solution also supports invocation via manually constructed HTTP requests, enabling client-side code development in any programming language.

- **Benchmark Support:**
    - **All production lines now support fine-grained benchmarking, enabling measurement of end-to-end inference time as well as per-layer and per-module latency data to assist with performance analysis.**
    - **Documentation has been updated to include key metrics for commonly used configurations on mainstream hardware, such as inference latency and memory usage, providing deployment references for users.**

- **Bug Fixes:**
    - Resolved the issue of failed log saving during model training.
    - Upgraded the data augmentation component for formula models for compatibility with newer versions of the albumentations dependency, and fixed deadlock warnings when using the tokenizers package in multi-process scenarios.
    - Fixed inconsistencies in switch behaviors (e.g., `use_chart_parsing`) in the PP-StructureV3 configuration files compared to other pipelines.

- **Other Enhancements:**
    - **Separated core and optional dependencies. Only minimal core dependencies are required for basic text recognition; additional dependencies for document parsing and information extraction can be installed as needed.**
    - **Enabled support for NVIDIA RTX 50 series graphics cards on Windows; users can refer to the installation guide for the corresponding PaddlePaddle framework versions.**
    - **PP-OCR series models now support returning single-character coordinates.**
    - Added AIStudio, ModelScope, and other model download sources, allowing users to specify the source for model downloads.
    - Added support for chart-to-table conversion via the PP-Chart2Table module.
    - Optimized documentation descriptions to improve usability.

## 2025.8.21 v3.2.0 发布

- **重要模型新增：**
    - 新增 PP-OCRv5 英文、泰文、希腊文识别模型的训练、推理、部署。**其中 PP-OCRv5 英文模型较 PP-OCRv5 主模型在英文场景提升 11%，泰文识别模型精度 82.68%，希腊文识别模型精度 89.28%。**

- **部署能力升级：**
    - **全面支持飞桨框架 3.1.0 和 3.1.1 版本。**
    - **全面升级 PP-OCRv5 C++ 本地部署方案，支持 Linux、Windows，功能及精度效果与 Python 方案保持一致。**
    - **高性能推理支持 CUDA 12，可使用 Paddle Inference、ONNX Runtime 后端推理。**
    - **高稳定性服务化部署方案全面开源，支持用户根据需求对 Docker 镜像和 SDK 进行定制化修改。**
    - 高稳定性服务化部署方案支持通过手动构造HTTP请求的方式调用，该方式允许客户端代码使用任意编程语言编写。

- **Benchmark支持**：
    - **全部产线支持产线细粒度 benchmark，能够测量产线端到端推理时间以及逐层、逐模块的耗时数据，可用于辅助产线性能分析。**
    - **文档中补充各产线常用配置在主流硬件上的关键指标，包括推理耗时和内存占用等，为用户部署提供参考。**

- **Bug修复：**
    - 修复模型训练时训练日志保存失败的问题。
    - 对公式模型的数据增强部分进行了版本兼容性升级，以适应新版本的 albumentations 依赖，并修复了在多进程使用 tokenizers 依赖包时出现的死锁警告。
    - 修复 PP-StructureV3 配置文件中的 `use_chart_parsing` 等开关行为与其他产线不统一的问题。

- **其他升级：**
    - **分离必要依赖与可选依赖。使用基础文字识别功能时，仅需安装少量核心依赖；若需文档解析、信息抽取等功能，用户可按需选择安装额外依赖。**
    - **支持 Windows 用户使用英伟达 50 系显卡，可根据安装文档安装对应版本的 paddle 框架。**
    - **PP-OCR 系列模型支持返回单文字坐标。**
    - 模型新增 AIStudio、ModelScope 等下载源。可指定相关下载源下载对应的模型。
    - 支持图表转表 PP-Chart2Table 单功能模块推理能力。
    - 优化部分使用文档中的描述，提升易用性。
    
## New Contributors
* @awkrail made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/16262
* @liuwake made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/16281

**Full Changelog**: https://github.com/PaddlePaddle/PaddleOCR/compare/v3.1.1...v3.2.0

---

> **Source** [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · `v3.2.0` · 2025-08-21 · [upstream release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
