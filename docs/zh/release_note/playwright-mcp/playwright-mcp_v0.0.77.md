---
title: "playwright-mcp v0.0.77"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.77"
version: "v0.0.77"
published: "2026-06-29"
type: "patch"
lang: "zh"
---

# playwright-mcp v0.0.77

## 新消息

### 工具改进

- **`browser_take_screenshot` — `scale` 选项** — 在 CSS 像素屏幕截图（较小，设备一致）和设备像素屏幕截图（高分辨率）之间进行选择 ([#41465](https://github.com/microsoft/playwright/pull/41465))
- **可配置的心跳超时** — 心跳 ping 超时现在是可配置的 ([#41391](https://github.com/microsoft/playwright/pull/41391))

## 错误修复

- 编辑控制台日志工件中的秘密（[#41515](https://github.com/microsoft/playwright/pull/41515)）
- 切勿在快照或网络输出中包含 `data:` URL 有效负载 ([#41450](https://github.com/microsoft/playwright/pull/41450))
- 仅列出一次失败的网络请求 ([#41481](https://github.com/microsoft/playwright/pull/41481))
- 等待 `browser_resume` 中的下一次暂停或上下文关闭（[#41293](https://github.com/microsoft/playwright/pull/41293)）
- 将操作超时传递给 `browser_wait_for` waitFor 调用 ([#41270](https://github.com/microsoft/playwright/pull/41270))
- 在 `browser_stop_tracing` 停止前检查追踪状态 ([#41040](https://github.com/microsoft/playwright/pull/41040))
- 将 caps 分配为旧版 `--vision` 标志的数组 ([#41253](https://github.com/microsoft/playwright/pull/41253))
- 对可空浏览器进行处置时使用可选链（[#41237](https://github.com/microsoft/playwright/pull/41237)）
- 在 sessionLog 写入队列中添加缺失的 `.catch()` ([#41234](https://github.com/microsoft/playwright/pull/41234))

---

> 📦 仓库：[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · 🏷️ 版本：`v0.0.77` · 📅 发布：2026-06-29 · [查看英文原版 Release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.77)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
