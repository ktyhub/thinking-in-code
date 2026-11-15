---
title: "ollama v0.40.9"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.9"
version: "v0.40.9"
published: "2026-10-22"
type: "patch"
lang: "zh"
---

# ollama v0.40.9

## Linux 和 Windows 上的 Flint

[Flint](https://ollama.com/library/flint) 现在可以在 Linux 和 Windows 以及 macOS 上运行。

## 其他改进

- 流式 OpenAI 响应和人择消息请求现在报告生成失败，而不是在部分输出后默默结束。
- `ollama launch` 现在将云模型的上下文长度和功能传递给编码工具，修复不正确的上下文和压缩设置。
- 与人类兼容的网络搜索现在在后续请求中使用模型支持的思维设置，防止可避免的失败。

**完整 Changelog**：https://github.com/ollama/ollama/compare/v0.40.8...v0.40.9

---

> 📦 仓库：[ollama/ollama](https://github.com/ollama/ollama) · 🏷️ 版本：`v0.40.9` · 📅 发布：2026-10-22 · [查看英文原版 Release](https://github.com/ollama/ollama/releases/tag/v0.40.9)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
