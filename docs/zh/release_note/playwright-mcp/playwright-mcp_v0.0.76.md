---
title: "playwright-mcp v0.0.76"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.76"
version: "v0.0.76"
published: "2026-06-10"
type: "patch"
lang: "zh"
---

# playwright-mcp v0.0.76

## 新消息

### 新工具

- **`browser_video_show_actions` / `browser_video_hide_actions`** — 在录制的视频上叠加动作注释，或再次隐藏它们 ([#40914](https://github.com/microsoft/playwright/pull/40914))

### 工具改进

- **远程端点** - `remoteEndpoint` 现在接受 `ConnectOptions` 对象，而不仅仅是 URL 字符串 ([#40964](https://github.com/microsoft/playwright/pull/40964))
- **`--output-max-size`** — 限制工具响应的大小，响应后磁盘驱逐超大输出（[#41031](https://github.com/microsoft/playwright/pull/41031)）
- **`--browser`** — 支持 `moz-firefox` BiDi 通道 ([#41126](https://github.com/microsoft/playwright/pull/41126))

## 错误修复

- 支持远程浏览器端点的 `remoteHeaders` ([#40828](https://github.com/microsoft/playwright/pull/40828)、[#41156](https://github.com/microsoft/playwright/pull/41156))
- 向后/向前导航时使用 `waitUntil: 'commit'` ([#41153](https://github.com/microsoft/playwright/pull/41153))
- 报告无效的工具参数而不是不透明地失败（[#40979](https://github.com/microsoft/playwright/pull/40979)）
- 对 MCP 用户数据使用可写缓存目录，而不是浏览器路径 ([#40961](https://github.com/microsoft/playwright/pull/40961))
- 当浏览器跟踪器被处理时，断开被跟踪浏览器的连接（[#40967](https://github.com/microsoft/playwright/pull/40967)）
- 报告缺失的 `ffmpeg` 与缺失的浏览器截然不同 ([#40867](https://github.com/microsoft/playwright/pull/40867))
- 当没有打开的选项卡时，不要将响应标记为已关闭 ([#40743](https://github.com/microsoft/playwright/pull/40743))
- 在 MCP 工具中验证用户提供的正则表达式模式（[#40752](https://github.com/microsoft/playwright/pull/40752)）
- 等待超时时将 `time` 参数传递给 `page.evaluate` ([#41037](https://github.com/microsoft/playwright/pull/41037))
- 向静态文件服务路由添加路径遍历检查（[#40715](https://github.com/microsoft/playwright/pull/40715)）

---

> 📦 仓库：[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · 🏷️ 版本：`v0.0.76` · 📅 发布：2026-06-10 · [查看英文原版 Release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.76)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
