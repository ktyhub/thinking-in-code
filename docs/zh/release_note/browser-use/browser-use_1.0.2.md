---
title: "browser-use 1.0.2"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "1.0.2"
version: "1.0.2"
published: "2026-11-11"
type: "patch"
lang: "zh"
---

# browser-use 1.0.2

修复了 1.0.1。

- **MCP 关闭 Chrome 的远程调试：** `browser-use --cli-mcp` 现在驱动自己的 Chromium，而不是停在 chrome://inspect 步骤，并告诉您的代理如何切换到 Chrome（在 chrome://inspect/#remote-debugging 处勾选“允许远程调试”，重新启动 MCP 服务器）。
- **慢速页面：** 来自 CLI 和 MCP 的 CDP 调用会等待 20 秒，就像代理一样。被 JS 对话框冻结的页面会快速失败，并显示一个错误，提示要处理该对话框。
- **Windows：** MCP `browser_exec` 代码中的 `open()` 读取和写入 UTF-8。
- **反馈：**告诉我们 `browser-use feedback "..."` 或 `browser_use.feedback("...")` 出了什么问题。代理可以调用​​ `report_issue(...)` 和 MCP clients 获取 `browser_feedback` 工具。文本在离开之前会被擦除。

```bash
uv add 'browser-use==1.0.2'
```

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`1.0.2` · 📅 发布：2026-11-11 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/1.0.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
