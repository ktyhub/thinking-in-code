---
title: "playwright-mcp v0.0.78"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.78"
version: "v0.0.78"
published: "2026-07-09"
type: "patch"
lang: "zh"
---

# playwright-mcp v0.0.78

## 新消息

### 新工具

- **`browser_find`** — 在当前页面的辅助功能快照中搜索文本或正则表达式。返回具有几行周围上下文（例如搜索片段）的匹配快照节点，当您只需要定位元素及其引用时，这比捕获整个快照更便宜（[#41605](https://github.com/microsoft/playwright/pull/41605)、[#41654](https://github.com/microsoft/playwright/pull/41654)）

### 工具改进

- **更少详细的快照** - 提取可访问性快照以减少噪音和令牌使用（[#41604](https://github.com/microsoft/playwright/pull/41604)）
- **移动和设备模拟** — 新的 `--mobile` 标志和 `--device` 选项可从 CLI 模拟移动设备 ([#41657](https://github.com/microsoft/playwright/pull/41657))
- **导航状态** — `browser_navigate` 现在显示非 2xx 导航状态代码 ([#41589](https://github.com/microsoft/playwright/pull/41589))

## 错误修复

- 当导航关闭最后一个选项卡时，`browser_navigate` 不再使响应崩溃（例如 `chrome://` 等特权页面）（[#41675](https://github.com/microsoft/playwright/pull/41675)）
- 打开后立即进行屏幕截图之前等待页面初始化 ([#41646](https://github.com/microsoft/playwright/pull/41646))
- 为默认浏览器启用 chromium 沙箱 ([#41652](https://github.com/microsoft/playwright/pull/41652))
- 保留附加选项卡视频的配置输出目录（[#41680](https://github.com/microsoft/playwright/pull/41680)）
- 始终为 CDP 连接传递 `noDefaults`，因此附加不再应用不需要的默认上下文选项 ([#41676](https://github.com/microsoft/playwright/pull/41676))
- 断开连接时关闭隔离的 HTTP client 上下文 ([#41560](https://github.com/microsoft/playwright/pull/41560))
- 在发送服务器→client 请求之前等待 client 事件流 ([#41559](https://github.com/microsoft/playwright/pull/41559))

---

> 📦 仓库：[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · 🏷️ 版本：`v0.0.78` · 📅 发布：2026-07-09 · [查看英文原版 Release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.78)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
