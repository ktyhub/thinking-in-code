---
title: "playwright-mcp v0.0.80"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.80"
version: "v0.0.80"
published: "2026-09-01"
type: "patch"
lang: "zh"
---

# playwright-mcp v0.0.80

## 新消息

### 新工具

- **`browser_start_recording` / `browser_stop_recording`**（通过 `--caps=devtools` 选择加入）— 记录用户在浏览器中手动执行的操作并将其作为剧作家代码返回。当用户想要演示流程而不是描述流程时很有用（[#42359](https://github.com/microsoft/playwright/pull/42359)）

## 错误修复

- 默认的 `--codegen` 语言是从环境中推断出来的 ([#42150](https://github.com/microsoft/playwright/pull/42150))
- 扩展模式下的荣耀 `--user-data-dir` ([#42190](https://github.com/microsoft/playwright/pull/42190))
- 不要将孤立的浏览器首选项条目视为已安装的扩展（[#42224](https://github.com/microsoft/playwright/pull/42224)）
- `browser_take_screenshot` 返回原始屏幕截图字节，而不是默默地将它们缩小到特定于模型的限制（[#42406](https://github.com/microsoft/playwright/pull/42406)）
- 使用共享浏览器上下文在 `browser_close` 之后删除缓存的浏览器后端，以便来自同一 client 的后续工具调用不再失败（[#42365](https://github.com/microsoft/playwright/pull/42365)）
- 连接到远程端点时，`browserInfo` 报告实际远程运行的浏览器而不是配置的浏览器 ([#42228](https://github.com/microsoft/playwright/pull/42228))
- 不要破坏配置文件中的 `chromiumSandbox` 设置 ([#42288](https://github.com/microsoft/playwright/pull/42288))
- 不要为尚未打开事件流的 HTTP client 运行心跳 ([#42189](https://github.com/microsoft/playwright/pull/42189))
- 内部 `/killkillkill` 端点不再在测试之外注册（[#42133](https://github.com/microsoft/playwright/pull/42133)）

---

> 📦 仓库：[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · 🏷️ 版本：`v0.0.80` · 📅 发布：2026-09-01 · [查看英文原版 Release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.80)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
