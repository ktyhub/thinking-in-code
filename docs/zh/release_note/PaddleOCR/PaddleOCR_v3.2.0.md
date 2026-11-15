---
title: "PaddleOCR v3.2.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.2.0"
version: "v3.2.0"
published: "2025-08-21"
type: "minor"
lang: "zh"
---

# PaddleOCR v3.2.0

## 2025.8.21 v3.2.0 发布

- **重要的模型添加：**
    - 引入了英语、泰语和希腊语 PP-OCRv5 识别模型的训练、推理和部署。 **与PP-OCRv5主模型相比，PP-OCRv5英语模型在英语场景下的性能提升了11%，泰语和希腊语识别模型的准确率分别达到了82.68%和89.28%。**

- **部署能力升级：**
    - **完全支持PaddlePaddle框架版本3.1.0和3.1.1。**
    - **全面升级PP-OCRv5 C++本地部署解决方案，现在支持Linux和Windows，与Python实现具有相同的功能和相同的准确性。**
    - **高性能推理现在支持 CUDA 12，并且可以使用 Paddle Inference 或 ONNX Runtime 后端执行推理。**
    - **高稳定性的面向服务的部署方案现已完全开源，用户可以根据需要定制Docker镜像和SDK。**
    - 高稳定性的面向服务的部署方案还支持通过手动构建的HTTP请求进行调用，支持任何编程语言的client端代码开发。

- **基准支持：**
    - **所有生产线现在都支持细粒度基准测试，可以测量端到端推理时间以及每层和每个模块的延迟数据，以协助性能分析。**
    - **文档已更新，包含主流硬件上常用配置的关键指标，例如推理延迟和内存使用情况，为用户提供部署参考。**

- **错误修复：**
    - 解决模型训练时日志保存失败的问题。
    - 升级了公式模型的数据增强组件，以与较新版本的 albumentations 依赖项兼容，并修复了在多进程场景中使用 tokenizers 包时出现的死锁警告。
    - 修复了 PP-StructureV3 配置文件中的开关行为（例如，`use_chart_parsing`）与其他管道相比的不一致问题。

- **其他增强功能：**
    - **分离的核心和可选依赖项。基本文本识别只需要最少的核心依赖；可以根据需要安装文档解析和信息提取的附加依赖项。**
    - **在 Windows 上启用了对 NVIDIA RTX 50 系列显卡的支持；用户可以参考对应PaddlePaddle框架版本的安装指南。**
    - **PP-OCR系列机型现在支持返回单字符坐标。**
    - 新增AIStudio、ModelScope等模型下载源，允许用户指定模型下载源。
    - 通过 PP-Chart2Table 模块添加了对图表到表格转换的支持。
    - 优化文档描述，提高可用性。

## 2025.8.21 v3.2.0 发布

- **重要模型新增：**
    - 新增PP-OCRv5中文、泰文、希腊文识别模型的训练、推理、部署。**其中PP-OCRv5中文模型较PP-OCRv5主模型在中文场景提升11%，泰文识别模型精度82.68%，希腊文识别模型精度89.28%。**

- ** 部署能力升级：**
    - **全面支持飞桨框架3.1.0 和 3.1.1 版本。**
    - **全面升级PP-OCRv5 C++本地部署方案，支持Linux、Windows，功能及精度效果与Python方案保持一致。**
    - **高性能推理支持 CUDA 12，可使用 Paddle Inference、ONNX Runtime 头部推理。**
    - **高稳定性服务化部署方案全面开源，支持用户根据需求对Docker镜像和SDK进行定制化。**
- 高稳定性服务化配置方案支持通过手动构造的HTTP请求的方式调用，该方式允许客户端代码使用任何编程语言编写。

- **基准支持**：
    - **全部产线支持产线细粒度基准测试，能够测量产线精准推理时间以及逐层、逐模块的运行数据，可用于辅助产线性能分析。**
    - **文档中补充了各产线常用配置在主干硬件上的关键指标，包括推理耗时和内存占用等，为部署用户提供参考。**

- **错误修复：**
    - 修复模型训练时日志保存失败的问题。
    - 对公式模型的数据增强部分进行了版本兼容性升级，以适应新版本的almentations依赖，并修复了在多进程使用tokenizers依赖包时出现的死锁警告。
    - 修复PP-StructureV3配置文件中的`use_chart_parsing`等开关行为与其他产线不统一的问题。

- **其他升级：**
    - **分离必要依赖与可选依赖。使用基础文字识别功能时，后续安装少量核心依赖；若需文档解析、信息抽取等功能，用户可选择安装额外依赖。**
    - **支持Windows用户使用英伟达50系显卡，可根据安装文档安装对应版本的paddle框架。**
    - **PP-OCR系列模型支持返回单文字坐标。**
    - 模型新增AIStudio、ModelScope等下载源。可指定相关下载源下载对应的模型。
    - 支持图表转表PP-Chart2Table单功能模块推理能力。
    - 优化部分使用文档中的描述，提升易用性。
    
## 新贡献者
* @awkrail 在 https://github.com/PaddlePaddle/PaddleOCR/pull/16262 中做出了第一个贡献
* @liuwake 在 https://github.com/PaddlePaddle/PaddleOCR/pull/16281 中做出了第一个贡献

**完整 Changelog**：https://github.com/PaddlePaddle/PaddleOCR/compare/v3.1.1...v3.2.0

---

> 📦 仓库：[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · 🏷️ 版本：`v3.2.0` · 📅 发布：2025-08-21 · [查看英文原版 Release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.2.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
