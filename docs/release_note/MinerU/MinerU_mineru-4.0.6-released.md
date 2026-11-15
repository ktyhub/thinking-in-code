---
title: "MinerU mineru-4.0.6-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.0.6-released"
version: "mineru-4.0.6-released"
published: "2026-09-22"
type: "release"
lang: "en"
summary: "WebUI 新增 EPUB 在线预览：支持章节导航与元数据展示，静态资源经浏览器代理加载 / EPUB viewer in the WebUI with section navigation and improved metadata handling"
---

# MinerU mineru-4.0.6-released

## 更新内容 / What's Changed

**新增 / Features**
- WebUI 新增 EPUB 在线预览：支持章节导航与元数据展示，静态资源经浏览器代理加载 / EPUB viewer in the WebUI with section navigation and improved metadata handling

**改进与修复 / Improvements & Fixes**
- 修复缺少行信息（lines）的 PDF 文本块在归一化时被整块丢弃的回归，增加 bbox 兜底（#5565）/ Fix regression where PDF text blocks missing line info were dropped entirely during normalization, with a bbox fallback (#5565)
- 修复中文段落含行内公式时导出 PDF 的崩溃（reportlab CJK 断行缺陷），并新增回归测试 / Fix crash when exporting PDFs with CJK paragraphs containing inline formulas (reportlab CJK line-breaking), with a regression test

**依赖 / Dependencies**
- docvortex 最低版本提升至 0.4.22 / Require docvortex>=0.4.22

**Full Changelog**: https://github.com/opendatalab/MinerU/compare/mineru-4.0.5-released...mineru-4.0.6-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.0.6-released` · 2026-09-22 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.0.6-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
