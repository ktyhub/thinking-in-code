---
title: "MinerU mineru-4.0.11-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.0.11-released"
version: "mineru-4.0.11-released"
published: "2026-10-08"
type: "release"
lang: "en"
summary: "API：/v1/models 统一返回随服务版本变化的虚拟模型 ID（如 mineru-4.0.11），补充模型描述并保持注册时间稳定；/v1/tiers 的 current_model 同步使用该 ID，解析质量通过 tier 选择 / API: expose a single versioned virtual model ID through /v1/models, add its description and keep…"
---

# MinerU mineru-4.0.11-released

## 更新内容 / What's Changed

**改进 / Improvements**
- API：`/v1/models` 统一返回随服务版本变化的虚拟模型 ID（如 `mineru-4.0.11`），补充模型描述并保持注册时间稳定；`/v1/tiers` 的 `current_model` 同步使用该 ID，解析质量通过 `tier` 选择 / API: expose a single versioned virtual model ID through `/v1/models`, add its description and keep the registration timestamp stable; `/v1/tiers` uses the same ID for `current_model`, while parsing quality is selected through `tier`
- 图像处理：移除 MinerU 生产代码中的 OpenCV 导入和调用，OCR、公式、表格及印章矫正等图像操作通过 DocVortex 公共接口执行 / Image processing: remove OpenCV imports and calls from MinerU production code and use public DocVortex interfaces for OCR, formula, table and seal image operations

**修复 / Fixes**
- CLI：修复 `mineru parse` 单文件输入无法覆盖已有输出文件的问题；拒绝输出路径与输入文件相同，避免覆盖源文件；多文件输入继续要求输出为目录 / CLI: allow `mineru parse` to overwrite an existing output file for a single input, reject output paths that point to the input file, and continue requiring a directory for multiple inputs

**依赖 / Dependencies**
- docvortex 最低版本提升至 0.5.12（`>=0.5.12,<1`）/ Require docvortex>=0.5.12,<1
- 移除 OpenCV 直接依赖；Torch/full 等可选依赖配置保持原样，第三方依赖仍可能间接安装 OpenCV / Remove the direct OpenCV dependency; Torch/full extras retain their existing configuration, and third-party dependencies may still install OpenCV transitively

**升级提示 / Upgrade Notes**
- API 客户端应通过 `GET /v1/models` 获取当前虚拟模型 ID，并在服务升级后重新发现；使用 `tier` 选择解析质量，避免硬编码历史模型 ID / API clients should discover the current virtual model ID through `GET /v1/models` and refresh it after server upgrades; select parsing quality through `tier` instead of hard-coding historical model IDs

**Full Changelog**: https://github.com/opendatalab/MinerU/compare/mineru-4.0.10-released...mineru-4.0.11-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.0.11-released` · 2026-10-08 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.0.11-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
