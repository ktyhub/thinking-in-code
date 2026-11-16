---
title: "playwright-mcp v0.0.72"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.72"
version: "v0.0.72"
published: "2026-04-30"
type: "patch"
lang: "zh"
---

# playwright-mcp v0.0.72

## 新消息

### 工具改进

- **`browser_network_requests`** — 现在返回请求的编号列表；使用带有索引的新 `browser_network_request` 工具来获取完整详细信息（标题/正文）或单个部分。这两个工具都接受 `filename` 选项将输出写入文件（[#40447](https://github.com/microsoft/playwright/pull/40447)、[#40454](https://github.com/microsoft/playwright/pull/40454)）
- **`browser_run_code` → `browser_run_code_unsafe`** — 重命名以使沙箱逃逸含义明确（[#40496](https://github.com/microsoft/playwright/pull/40496)）

## 错误修复

- 在 `browser_run_code_unsafe` 中显示未处理的拒绝，而不是使服务器崩溃（[#40452](https://github.com/microsoft/playwright/pull/40452)）
- 检测非默认 Chrome 配置文件中已安装的扩展程序 ([#40471](https://github.com/microsoft/playwright/pull/40471))
- 连接到扩展时忽略浏览器配置（通道、无头、视口等）（[#40475](https://github.com/microsoft/playwright/pull/40475)）

---

> 📦 仓库：[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · 🏷️ 版本：`v0.0.72` · 📅 发布：2026-04-30 · [查看英文原版 Release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.72)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
