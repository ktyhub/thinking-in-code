---
title: "playwright-mcp v0.0.81"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.81"
version: "v0.0.81"
published: "2026-09-14"
type: "patch"
lang: "zh"
---

# playwright-mcp v0.0.81

## 新消息

### 🎉 新工具

- **`browser_webmcp_list` / `browser_webmcp_call`** — 列出并调用页面通过 [WebMCP](https://webmachinelearning.github.io/webmcp/) API 注册的工具，让页面完成工作而不是驱动其 UI。当页面具有 WebMCP 工具时，页面状态会报告可用的数量 ([#42613](https://github.com/microsoft/playwright/pull/42613))。 WebMCP 是实验性的，请参阅 [Chrome 中的 WebMCP](https://developer.chrome.com/docs/ai/webmcp) 了解如何启用它。

### 其他变化

- 当扩展安装在多个配置文件中时，新的 `--profile-dir-name <name>` 选项 (env `PLAYWRIGHT_MCP_PROFILE_DIR_NAME`) 选择要在扩展模式下连接的 Chrome 配置文件，例如 `"Profile 1"` ([#42527](https://github.com/microsoft/playwright/pull/42527))
- 服务器启动的无头浏览器现在在没有工具调用的情况下一小时后关闭；下一个工具调用将启动一个新工具。使用 `--idle-timeout <ms>` (config `timeouts.idle`, env `PLAYWRIGHT_MCP_IDLE_TIMEOUT`) 更改超时，`0` 禁用它。除非显式设置超时，否则不会关闭带头浏览器和附加浏览器（[#42663](https://github.com/microsoft/playwright/pull/42663)、[#42676](https://github.com/microsoft/playwright/pull/42676)）
- `--image-responses` 接受 `only`：携带图像的响应仅由图像部分组成，不含文本部分 ([#42672](https://github.com/microsoft/playwright/pull/42672))

## 错误修复

- 当共享浏览器上下文 (`--shared-browser-context`) 时，`browser_close` 返回错误，而不是中断调用 client 的会话。这取代了在 `browser_close` 之后删除后端的 v0.0.80 更改（[#42495](https://github.com/microsoft/playwright/pull/42495)）
- 使用 `--shared-browser-context`、`browser_start_recording` / `browser_stop_recording`（通过 `--caps=devtools` 选择加入）将每个 client 的录制分开，而不是将一个 client 的录制动作传送给另一个（[#42622](https://github.com/microsoft/playwright/pull/42622)、[#42627](https://github.com/microsoft/playwright/pull/42627)）
- 文件访问检查遵循符号链接，因此工作区内的符号链接不能再用于读取或写入允许的根目录之外的文件（[#42628](https://github.com/microsoft/playwright/pull/42628)）
- 嵌套目录中显式命名的输出文件（例如 `sub/shot.png`）不再因 `ENOENT` 而失败； `browser_file_upload` 和 `browser_drop` 解析针对工作区根的相对路径 ([#42540](https://github.com/microsoft/playwright/pull/42540))
- 在设置了 `PLAYWRIGHT_MCP_EXTENSION_TOKEN` 的扩展模式下，永远不会完成的连接（例如，令牌属于另一个 Chrome 配置文件）现在会在 30 秒后失败，并带有提示，而不是永远挂起工具调用（[#42525](https://github.com/microsoft/playwright/pull/42525)）
- 默认情况下，在 Linux 上禁用 Chromium 沙箱以进行捆绑的 Chromium 构建，该版本缺少 setuid 沙箱帮助程序 ([#42490](https://github.com/microsoft/playwright/pull/42490))

---

> 📦 仓库：[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · 🏷️ 版本：`v0.0.81` · 📅 发布：2026-09-14 · [查看英文原版 Release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.81)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
