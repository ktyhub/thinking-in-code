---
title: "browser-use 0.13.10"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.10"
version: "0.13.10"
published: "2026-09-04"
type: "patch"
lang: "zh"
---

# browser-use 0.13.10

## 浏览器使用0.13.10

- 将浏览器线束升级至 0.1.13。
- 精确固定所有声明的运行时、可选、开发和构建依赖项。
- 升级并迁移到 MCP Python SDK 2.1.1。
- 添加 pydantic-settings 2.15.0 作为显式运行时依赖项。
- 固定 Pydantic 2.13.5 和 Hatchling 1.32.0。
- 将 pypdf 升级到 6.16.2，解决当前的三个 pypdf Dependabot 建议。
- 将未知的 MCP 工具调用报告为应用程序错误，而不是成功的结果。

验证包括完整的 GitHub 测试矩阵、模型适配器、MCP stdio 握手、跨平台轮安装、重点 PDF 测试、CodeQL、GitGuardian 以及安装运行时漏洞审核。

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`0.13.10` · 📅 发布：2026-09-04 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/0.13.10)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
