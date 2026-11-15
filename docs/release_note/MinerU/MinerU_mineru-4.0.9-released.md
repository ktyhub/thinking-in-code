---
title: "MinerU mineru-4.0.9-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.0.9-released"
version: "mineru-4.0.9-released"
published: "2026-09-28"
type: "release"
lang: "en"
summary: "PDF 原生文本提取：重建词间空格，修复空格丢失导致的英文单词黏连，并保护代码 span 与相邻文本的间距 / Native PDF text extraction: rebuild inter-word spacing to fix lost spaces merging English words, with code-span spacing protection"
---

# MinerU mineru-4.0.9-released

## 更新内容 / What's Changed

**优化 / Improvements**
- PDF 原生文本提取：重建词间空格，修复空格丢失导致的英文单词黏连，并保护代码 span 与相邻文本的间距 / Native PDF text extraction: rebuild inter-word spacing to fix lost spaces merging English words, with code-span spacing protection
- PDF render 子进程支持非独占复用，并发任务不再排队等待 render worker / PDF render subprocess now supports non-exclusive reuse, so concurrent tasks no longer wait for an available render worker

**依赖 / Dependencies**
- docvortex 提升至 0.5.4（0.5.2 → 0.5.4）/ Require docvortex>=0.5.4 (0.5.2 → 0.5.4)

**Full Changelog**: https://github.com/opendatalab/MinerU/compare/mineru-4.0.8-released...mineru-4.0.9-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.0.9-released` · 2026-09-28 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.0.9-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
