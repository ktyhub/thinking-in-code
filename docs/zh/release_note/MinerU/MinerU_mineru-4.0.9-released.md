---
title: "MinerU mineru-4.0.9-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.0.9-released"
version: "mineru-4.0.9-released"
published: "2026-09-28"
type: "release"
lang: "zh"
---

# MinerU mineru-4.0.9-released

## 更新内容/更改内容

**优化/改进**
- PDF 重建文本提取：重建词间空格，修复空格丢失导致英文单词粘连，并保护代码跨度与相邻文本的间距 / 原生 PDF 文本提取：重建词间间距以修复合并英文单词时丢失的空格，并提供代码跨度间距保护
- PDF渲染子进程支持非独占复用，并发任务不再排队等待渲染工作者/PDF渲染子进程现在支持非独占复用，因此并发任务不再等待可用的渲染工作者

**依赖/依赖性**
- docvortex 提升至 0.5.4（0.5.2 → 0.5.4）/ 要求 docvortex>=0.5.4 (0.5.2 → 0.5.4)

**完整 Changelog**：https://github.com/opendatalab/MinerU/compare/mineru-4.0.8-released...mineru-4.0.9-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.0.9-released` · 📅 发布：2026-09-28 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.0.9-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
