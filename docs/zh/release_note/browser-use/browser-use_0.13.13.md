---
title: "browser-use 0.13.13"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.13"
version: "0.13.13"
published: "2026-10-15"
type: "patch"
lang: "zh"
---

# browser-use 0.13.13

此版本包含 OpenAI 浏览器工具驱动程序并修复了两个集成问题。

- 在导航过程中处理临时空的云选项卡 URL。
- 在缩放显示上保持屏幕截图、裁剪和指针坐标对齐。
- 通过 Browser Use Actor 提供 18 个默认浏览器工具和 6 个可选操作。
- 支持本地浏览器、浏览器使用云和借用浏览器会话。

使用 OpenAI Python 3.31+ 安装 `openai-tools` extra。 OpenAI 3.x 使用httpx2；将其 DefaultAsyncHttpxClient 用于自定义 HTTP client。

验证：所有 11 项驱动程序测试均通过。两个新的回归测试在早期的实现上都失败了。预提交、类型检查、包构建和 GitHub 测试均已通过。通过实时远程浏览器和库冒烟测试；更广泛的评估结果仍然是分开的。

此版本取代了 0.13.12，其 PyPI 出版物在批准前已被取消。

指南：https://docs.browser-use.com/open-source/customize/integrations/openai
驱动程序：https://github.com/browser-use/browser-use/pull/6086
修复：https://github.com/browser-use/browser-use/pull/6089

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`0.13.13` · 📅 发布：2026-10-15 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/0.13.13)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
