---
title: "MinerU mineru-4.1.1-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.1-released"
version: "mineru-4.1.1-released"
published: "2026-10-29"
type: "release"
lang: "en"
summary: "简化自动档位推荐：移除推荐流程中的显存检测与容量门槛，直接复用小模型后端实际选择的 CPU/GPU 设备。选中 GPU 时开放全部四档，默认使用 Standard，Advanced 需要显式指定；选中 CPU 时，按进程可用逻辑核数推荐：不足 4 核仅开放 Flash，4–11 核开放到 Basic，至少 12 核开放到 Standard。"
---

# MinerU mineru-4.1.1-released

## 中文

- **简化自动档位推荐**：移除推荐流程中的显存检测与容量门槛，直接复用小模型后端实际选择的 CPU/GPU 设备。选中 GPU 时开放全部四档，默认使用 Standard，Advanced 需要显式指定；选中 CPU 时，按进程可用逻辑核数推荐：不足 4 核仅开放 Flash，4–11 核开放到 Basic，至少 12 核开放到 Standard。
- **统一 llama.cpp 运行策略**：Linux 和 Windows 自动模式复用小模型后端的 CPU/GPU 选择，具体显卡由 llama.cpp 选择。这些平台上的 GPU 主模型默认使用 4 个生成线程，保留用户显式设置。
- **改善 PDF 文本清理**：在后置 OCR 和失败恢复完成后，将原生正文中残留的 Unicode 私用区字符替换为空格，减少异常字体映射造成的乱码，覆盖基本和补充私用区。

## English

- **Simplified automatic tier recommendations:** Remove GPU memory detection and capacity thresholds from tier recommendations, reusing the CPU/GPU device actually selected by the small-model backend. GPU selection enables all four tiers, with Standard as the default and Advanced available by explicit request. CPU selection uses the logical cores available to the process: fewer than 4 enables Flash only, 4–11 enables up to Basic, and 12 or more enables up to Standard.
- **Unified llama.cpp runtime policy:** Automatic mode on Linux and Windows reuses the small-model backend's CPU/GPU selection and lets llama.cpp choose the specific GPU. On these platforms, GPU models default to 4 generation threads while preserving explicit user settings.
- **Improved PDF text cleanup:** Replace residual Unicode private-use characters in native body text with spaces after post-OCR processing and fallback restoration, reducing garbled text caused by unusual font mappings. Both basic and supplementary private-use areas are covered.

**Full Changelog**: https://github.com/opendatalab/MinerU/compare/mineru-4.1.0-released...mineru-4.1.1-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.1.1-released` · 2026-10-29 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.1-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
