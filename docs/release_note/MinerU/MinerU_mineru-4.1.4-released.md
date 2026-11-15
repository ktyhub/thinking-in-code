---
title: "MinerU mineru-4.1.4-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.4-released"
version: "mineru-4.1.4-released"
published: "2026-11-02"
type: "release"
lang: "en"
summary: "Standard / Advanced 的 PDF 文本模式使用 VLM 识别表格外的行内公式切片，保留混合文本与公式；单个切片识别失败时局部回退 MFR。；改善公式定界符和文本转义处理，避免普通文本中的美元符号被误当成公式或携带多余转义字符。；将 DocVortex 最低版本提升至 0.6.11，并在中英文 README 中补充解析档位指南入口。"
---

# MinerU mineru-4.1.4-released

中文

- Standard / Advanced 的 PDF 文本模式使用 VLM 识别表格外的行内公式切片，保留混合文本与公式；单个切片识别失败时局部回退 MFR。
- 改善公式定界符和文本转义处理，避免普通文本中的美元符号被误当成公式或携带多余转义字符。
- 将 DocVortex 最低版本提升至 0.6.11，并在中英文 README 中补充解析档位指南入口。

English

- Use VLM text recognition for inline formula crops outside tables in Standard / Advanced PDF text mode, preserving mixed text and math with per-crop MFR fallback.
- Improve math-delimiter and text-escape handling so ordinary dollar signs remain text without redundant escape characters.
- Require DocVortex 0.6.11 or later within the 0.6 series and link parsing-tier guides from both READMEs.

Related PR: https://github.com/opendatalab/MinerU/pull/5706

**Full Changelog**: https://github.com/opendatalab/MinerU/compare/mineru-4.1.3-released...mineru-4.1.4-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.1.4-released` · 2026-11-02 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.4-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
