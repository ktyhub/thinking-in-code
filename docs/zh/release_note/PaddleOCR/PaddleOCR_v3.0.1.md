---
title: "PaddleOCR v3.0.1"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.0.1"
version: "v3.0.1"
published: "2025-06-05"
type: "patch"
lang: "zh"
---

# PaddleOCR v3.0.1

- **优化部分模型和模型配置：**
  - 更新PP-OCRv5默认模型配置，检测和识别均由移动改为服务器模型。为了改善大部分场景默认效果，配置中的参数`limit_side_len`由736改为64
  - 新增文本行方向分类`PP-LCNet_x1_0_textline_ori`模型，精度99.42%，OCR、PP-StructureV3、PP-ChatOCRv4产线的默认文本行方向分类器改为该模型
  - 优化文本行方向分类`PP-LCNet_x0_25_textline_ori`模型，精度提升3.3个百分点，当前精度98.85%
- **优化3.0.0版本部分存在的问题**
  - **优化CLI使用体验：**当使用PaddleOCR CLI未确定任何参数时，会给出最佳提示。
  - **新增参数：** PP-ChatOCRv3、PP-StructureV3支持`use_textline_orientation`参数。
  - **CPU推理速度优化：**产所有线CPU推理默认开启MKL-DNN。
  - **C++推理支持：** PP-OCRv5的检测和识别串联部分支持C++推理
- **修复3.0.0版本部分存在的问题**
  - 修复由于公式识别、表格识别模型无法使用MKL-DNN导致PP-StructureV3在部分cpu推理报错的问题
  - 修复部分GPU环境中推理报`FatalError: Process abort signal is detected by the operating system`错误的问题
  - 修复部分Python3.8环境的类型提示的问题
  - 修复`PPStructureV3.concatenate_markdown_pages`方法不存在的问题。
  - 修复初始化化`paddleocr.PaddleOCR`时同时指定`lang`和`model_name`时`model_name`不生效的问题。

---

> 📦 仓库：[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · 🏷️ 版本：`v3.0.1` · 📅 发布：2025-06-05 · [查看英文原版 Release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.0.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
