---
title: "whisperX v3.7.9"
project: "whisperX"
repo: "m-bain/whisperX"
tag: "v3.7.9"
version: "v3.7.9"
published: "2026-03-25"
type: "patch"
lang: "zh"
---

# whisperX v3.7.9

从 v3.8.4 向后移植字级时间戳修复。

## 错误修复

- **恢复不可对齐字符的时间戳** (39aa9f5)：包含数字、符号或外来文字（例如 `4,9`、`£13.60`）的单词现在可以通过通配符发射列获取正确的时间戳。之前的补丁 (v3.X.Y) 恢复了 PR #986，完全删除了通配符支持。修复#1372。

## 测试

- 添加 #1372 (da072d6) 的回归测试
- 添加 pytest 开发依赖项和 CI 测试工作流程 (f9a3f8f)

**完整 Changelog**：https://github.com/m-bain/whisperX/compare/v3.7.8...v3.7.9

---

> 📦 仓库：[m-bain/whisperX](https://github.com/m-bain/whisperX) · 🏷️ 版本：`v3.7.9` · 📅 发布：2026-03-25 · [查看英文原版 Release](https://github.com/m-bain/whisperX/releases/tag/v3.7.9)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
