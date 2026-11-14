---
title: "browser-use 1.0.1"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "1.0.1"
version: "1.0.1"
published: "2026-11-10"
type: "patch"
lang: "zh"
---

# browser-use 1.0.1

修复了 1.0.0。

- **不带 Chrome 的 MCP：** 服务器、容器和 CI 盒上的 `browser-use --cli-mcp` 现在驱动自己的 Chromium，在首次使用时安装。当没有浏览器可以运行时，您会收到一个明显的错误。
- CLI 和 MCP 中的 **`http_get`** 始终从您的机器获取。
- **`--mcp` 和 `allowed_domains`** 无法再通过云浏览器绕过。
- **Windows：** 管道 CLI 代码和长 MCP 输出为 UTF-8。
- **只读 HOME:** 错误命名要设置的环境变量。
- **`timeout=`：** 最终答案在截止日期之前到达，提供商重试会尊重它。
- **0.x 功能检测：** `hasattr(browser_use, '<removed 0.x name>')` 返回 `False`。
- **隔离：** 每次运行都有自己的浏览器线束工作区。

```bash
uv add 'browser-use==1.0.1'
```

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`1.0.1` · 📅 发布：2026-11-10 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/1.0.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
