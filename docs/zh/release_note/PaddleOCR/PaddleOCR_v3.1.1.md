---
title: "PaddleOCR v3.1.1"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.1.1"
version: "v3.1.1"
published: "2025-08-15"
type: "patch"
lang: "zh"
---

# PaddleOCR v3.1.1

## 2025.8.15 v3.1.1 发布

- **错误修复：**
  - 在 `PP-ChatOCRv4` 类中添加了缺少的方法 `save_vector`、`save_visual_info_list`、`load_vector` 和 `load_visual_info_list`。
  - 将缺少的参数 `glossary` 和 `llm_request_interval` 添加到 `PPDocTranslation` 类中的 `translate` 方法。

- **文档改进：**
  - 在 MCP 文档中添加了演示。
  - 在文档中添加了有关用于性能指标测试的 PaddlePaddle 和 PaddleOCR 版本的信息。
  - 修复了生产线文档翻译中的错误和遗漏。

- **其他：**
  - 更改了 MCP 服务器依赖项以使用纯 Python 库 `puremagic` 而不是 `python-magic` 以减少安装问题。
  - 使用 PaddleOCR 版本 3.1.0 重新测试 PP-OCRv5 性能指标并更新文档。

## 2025.8.15 v3.1.1 发布
- **bug修复：**
  - 补充`PP-ChatOCRv4`类的`save_vector`、`save_visual_info_list`、`load_vector、load_visual_info_list`方法。
  - 补充`PPDocTranslation`类的`translate`停止方法的`glossary 和 `llm_request_interval参数。

- **文档优化：**
  - 补充MCP文档中的demo。
  - 补充文档中测试性能指标使用的飞桨框架和PaddleOCR版本。
  - 修复文档翻译产线文档中的错漏。

- **其他：**
  - 修改MCP依赖服务器，使用纯Python库`puremagic`代替`python-magic`，减少安装问题。
  - 使用3.1.0版本PaddleOCR重新测试PP-OCRv5性能指标，更新文档。

**完整 Changelog**：https://github.com/PaddlePaddle/PaddleOCR/compare/v3.1.0...v3.1.1

---

> 📦 仓库：[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · 🏷️ 版本：`v3.1.1` · 📅 发布：2025-08-15 · [查看英文原版 Release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.1.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
