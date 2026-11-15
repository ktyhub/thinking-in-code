---
title: "playwright-mcp v0.0.79"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.79"
version: "v0.0.79"
published: "2026-08-06"
type: "patch"
lang: "zh"
---

# playwright-mcp v0.0.79

## 新消息

### 工具改进

- **`browser_take_screenshot` — WebP 格式** — 新的 `type` 选项用于选择图像格式（`png`、`jpeg` 或 `webp`）；未设置时，格式是根据文件扩展名推断的（[#41152](https://github.com/microsoft/playwright/pull/41152)）
- **`--codegen` — 更多语言** — 除了 `typescript` 之外，代码生成现在还支持 `python`、`java` 和 `csharp` ([#42106](https://github.com/microsoft/playwright/pull/42106))
- **可配置的解决延迟** - 新的 `--timeout-settle` 标志（和 `timeouts.settle` 配置选项）用于控制触发工作（导航、请求）的每个操作后等待多长时间进行解决，默认为 500 毫秒（[#41924](https://github.com/microsoft/playwright/pull/41924)）

## 修复

- 当响应丢弃 Aria 快照捕获时，它会被跳过 ([#41923](https://github.com/microsoft/playwright/pull/41923))
- 新的 `--snapshot-boxes` 标志（和 `snapshot.boxes` 配置选项）可全局启用快照中的边界框 - 以前这仅适用于每个命令 ([#42102](https://github.com/microsoft/playwright/pull/42102))
- 断开连接后重新连接到浏览器（[#41966](https://github.com/microsoft/playwright/pull/41966)）
- 报告格式错误的 JSON 配置，而不是默默地退回到 INI 解析（[#41909](https://github.com/microsoft/playwright/pull/41909)）
- 当对话框在带外关闭时清除对话框模式状态（[#42032](https://github.com/microsoft/playwright/pull/42032)）
- 通过下载事件检测下载，而不是根据 `net::ERR_ABORTED` 导航错误进行猜测 ([#41933](https://github.com/microsoft/playwright/pull/41933))
- 未安装浏览器时显示丢失的可执行路径（[#41941](https://github.com/microsoft/playwright/pull/41941)）
- 在代码生成输出中转义用户输入（[#41962](https://github.com/microsoft/playwright/pull/41962)）
- 删除了过时的 `--output-mode` CLI 选项（[#41833](https://github.com/microsoft/playwright/pull/41833)）

### 浏览器扩展

- 验证 CDP 中继 WebSocket 升级上的 `Host` 和 `Origin` 标头（[#42103](https://github.com/microsoft/playwright/pull/42103)）
- 启动已安装扩展程序的 Chrome 配置文件 ([#41939](https://github.com/microsoft/playwright/pull/41939))
- 通过 `noDefaults` 进行扩展 CDP 连接 ([#42119](https://github.com/microsoft/playwright/pull/42119))
- 当找不到浏览器可执行文件时，在显示的错误中提及 `PLAYWRIGHT_MCP_EXECUTABLE_PATH` ([#42122](https://github.com/microsoft/playwright/pull/42122))
- 删除了对扩展协议 v1 的支持（[#41857](https://github.com/microsoft/playwright/pull/41857)）

---

> 📦 仓库：[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · 🏷️ 版本：`v0.0.79` · 📅 发布：2026-08-06 · [查看英文原版 Release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.79)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
