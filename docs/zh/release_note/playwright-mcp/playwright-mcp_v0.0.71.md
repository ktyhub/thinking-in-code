---
title: "playwright-mcp v0.0.71"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.71"
version: "v0.0.71"
published: "2026-04-27"
type: "patch"
lang: "zh"
---

# playwright-mcp v0.0.71

## 新消息

### 新工具

- **`browser_drop`** — 将 `Locator.drop` 公开为 MCP 工具，用于完成到目标的拖放操作 ([#40367](https://github.com/microsoft/playwright/pull/40367))

### 工具改进

- **`browser_network_requests`** — 添加了 `responseBody` 和 `responseHeaders` 选项；使用 mime 类型检测将二进制主体呈现为占位符 ([microsoft/playwright@f0be0b17](https://github.com/microsoft/playwright/commit/f0be0b1728))
- **`browser_evaluate`** — 除了函数体之外还接受普通表达式 ([#39979](https://github.com/microsoft/playwright/pull/39979))

### 浏览器扩展

- **选项卡组同步** — 连接的选项卡被分组为绿色的“Playwright”选项卡组（[#1514](https://github.com/microsoft/playwright-mcp/pull/1514)、[#1551](https://github.com/microsoft/playwright-mcp/pull/1551)）

## 错误修复

- 禁用分机连接的 CDP 超时，以便长时间握手不会失败 ([#40265](https://github.com/microsoft/playwright/pull/40265))
- 确保 `--proxy-server` 覆盖配置文件中设置的代理 ([#40212](https://github.com/microsoft/playwright/pull/40212))
- 将用户提供的 `ignoreDefaultArgs` 与持久模式默认值合并，而不是替换它们（[#40026](https://github.com/microsoft/playwright/pull/40026)）

---

> 📦 仓库：[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · 🏷️ 版本：`v0.0.71` · 📅 发布：2026-04-27 · [查看英文原版 Release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.71)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
