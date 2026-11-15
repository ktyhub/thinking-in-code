---
title: "MinerU mineru-4.0.6-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.0.6-released"
version: "mineru-4.0.6-released"
published: "2026-09-22"
type: "release"
lang: "zh"
---

# MinerU mineru-4.0.6-released

## 更新内容/更改内容

**新增/功能**
- WebUI 新增 EPUB 在线预览：支持章节导航与元数据展示，静态资源通过浏览器代理加载 / WebUI 中的 EPUB 查看器具有章节导航和改进的元数据处理

**改进与修复/改进和修复**
- 修复缺少行信息（行）的 PDF 文本块在归一化时被整块丢弃的回归，增加 bbox 兜底（#5565）/ 修复回归，其中 PDF 文本块丢失的行信息在标准化过程中被完全丢弃，并带有 bbox 回退（#5565）
- 修复中文段落含行内公式时导出 PDF 的崩溃（reportlab CJK 断行缺陷），并新增回归测试 / 修复导出包含内联公式的 CJK 段落的 PDF 时崩溃（reportlab CJK 断行）的崩溃，并进行回归测试

**依赖/依赖性**
- docvortex 最低版本提升至 0.4.22 / 要求 docvortex>=0.4.22

**完整 Changelog**：https://github.com/opendatalab/MinerU/compare/mineru-4.0.5-released...mineru-4.0.6-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.0.6-released` · 📅 发布：2026-09-22 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.0.6-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
