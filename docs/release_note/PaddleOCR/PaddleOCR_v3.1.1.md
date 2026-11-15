---
title: "PaddleOCR v3.1.1"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.1.1"
version: "v3.1.1"
published: "2025-08-15"
type: "patch"
lang: "en"
summary: "Bug Fixes · Added the missing methods save_vector, save_visual_info_list, load_vector, and load_visual_info_list in the PP-ChatOCRv4 class."
---

# PaddleOCR v3.1.1

## 2025.8.15 v3.1.1 released

- **Bug Fixes:**
  - Added the missing methods `save_vector`, `save_visual_info_list`, `load_vector`, and `load_visual_info_list` in the `PP-ChatOCRv4` class.
  - Added the missing parameters `glossary` and `llm_request_interval` to the `translate` method in the `PPDocTranslation` class.

- **Documentation Improvements:**
  - Added a demo to the MCP documentation.
  - Added information about the PaddlePaddle and PaddleOCR version used for performance metrics testing in the documentation.
  - Fixed errors and omissions in the production line document translation.

- **Others:**
  - Changed the MCP server dependency to use the pure Python library `puremagic` instead of `python-magic` to reduce installation issues.
  - Retested PP-OCRv5 performance metrics with PaddleOCR version 3.1.0 and updated the documentation.

## 2025.8.15 v3.1.1 发布
- **bug修复：**
  - 补充 `PP-ChatOCRv4` 类缺失的`save_vector`、`save_visual_info_list`、`load_vector、load_visual_info_list` 方法。
  - 补充 `PPDocTranslation` 类的 `translate` 方法缺失的 `glossary 和 `llm_request_interval 参数。

- **文档优化：**
  - 补充 MCP 文档中的 demo。
  - 补充文档中测试性能指标使用的飞桨框架与 PaddleOCR 版本。
  - 修复文档翻译产线文档中的错漏。

- **其他：**
  - 修改 MCP 服务器依赖，使用纯 Python 库 `puremagic` 代替 `python-magic`，减少安装问题。
  - 使用 3.1.0 版本 PaddleOCR 重新测试 PP-OCRv5 性能指标，更新文档。

**Full Changelog**: https://github.com/PaddlePaddle/PaddleOCR/compare/v3.1.0...v3.1.1

---

> **Source** [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · `v3.1.1` · 2025-08-15 · [upstream release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.1.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
