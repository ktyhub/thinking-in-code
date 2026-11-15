---
title: "Scrapling v0.4.1"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.1"
version: "v0.4.1"
published: "2026-02-27"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.1

**包含许多重要更改的新更新**

## 🚀 新事物和生活质量的变化
- **提高了 Cloudflare 挑战检测的正则表达式精度**（感谢 @Rinz27 [#133](https://github.com/D4Vinci/Scrapling/pull/133)）
- **提高了 Cloudflare 求解器的速度和效率**。现在它的速度几乎是原来的两倍。
- **改进了 Cloudflare 求解器**，以处理网站有时在重定向到主网站之前显示 Cloudflare 页面两次的情况。
- **通过删除注入的 JS 文件，提高了隐形浏览器**的隐形模式和速度。
- **改进了 MCP 架构**，使其能够被 OpenCode 接受（感谢 @robin-ede [#137](https://github.com/D4Vinci/Scrapling/pull/137)）
- **使 MCP 架构更加 MCP 友好**，以被 VS Code Copilot 和其他严格工具接受。 （解决#150）
- **通过在激活 `main_content_only` 选项时剥离无用的 HTML 标签，大幅改善 MCP 服务器令牌消耗**。
- 修复了 PyPI 页面并添加了用于将 MCP 服务器注册到 MCP 服务器注册表的文件。
- 添加了一个新的代码片段，以展示如何通过代码安装浏览器依赖项，而不是使用命令行，以实现更轻松的自动化。
- 通过使用最新的操作版本改进了所有工作流程（感谢 @salmanmkc [#143](https://github.com/D4Vinci/Scrapling/pull/143)/[#144](https://github.com/D4Vinci/Scrapling/pull/144)）

_🙏 特别感谢社区的持续测试和反馈_

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.1` · 📅 发布：2026-02-27 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
