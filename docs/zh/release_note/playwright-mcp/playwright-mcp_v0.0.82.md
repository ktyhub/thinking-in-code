---
title: "playwright-mcp v0.0.82"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.82"
version: "v0.0.82"
published: "2026-09-18"
type: "patch"
lang: "zh"
---

# playwright-mcp v0.0.82

## ✨ 亮点

- **🎬 流畅的 60 fps、风格化视频** — `browser_start_video`（通过 `--caps=devtools` 选择加入）采用 `fps`，因此 `fps: 60` 录制流畅的 60 fps 视频，而不是默认的 25，并且 `cursor: true` 渲染动画鼠标光标，移动到每个动作点并在动作之间保持可见。 `browser_video_show_actions` 采用带有 `point`、`highlight` 和 `title` CSS 声明的 `style`；动作点标记和目标突出显示现在仅在设置样式时显示。 ([microsoft/playwright#42752](https://github.com/microsoft/playwright/pull/42752)、[microsoft/playwright#42758](https://github.com/microsoft/playwright/pull/42758))
- **🧰 WebMCP 工具成为真正的 MCP 工具** — 页面通过 [WebMCP](https://webmachinelearning.github.io/webmcp/) API 注册的工具现在在工具列表中显示为 `webmcp_<tool>`，具有页面自己的输入架构和注释，因此代理可以直接调用它们并让页面完成工作，而不是驱动其 UI。该列表位于当前选项卡之后，当列表发生更改时，client 会收到 `tools/list_changed` 通知。它取代了 v0.0.81 中的 `browser_webmcp_list` / `browser_webmcp_call`，它们不再暴露在 MCP 上。工具名称、描述、模式和结果来自页面，因此将它们视为 untrusted 输入。通过 `--no-webmcp` (config `webmcp: false`, env `PLAYWRIGHT_MCP_WEBMCP=false`) 选择退出。 WebMCP 是实验性的，请参阅 [Chrome 中的 WebMCP](https://developer.chrome.com/docs/ai/webmcp) 了解如何启用它。 ([微软/playwright#42671](https://github.com/microsoft/playwright/pull/42671))
- **🌗 在浅色和深色配色方案之间切换** ([microsoft/playwright#42243](https://github.com/microsoft/playwright/issues/42243)) — 处理深色主题的代理无法在会话中看到它。新的 **`browser_emulate_media`** 工具可动态模拟介质功能：`colorScheme`、`reducedMotion`、`forcedColors`、`contrast` 和 `media` 类型（屏幕/打印）。省略的参数保持不变，`null` 清除覆盖。 ([微软/playwright#42668](https://github.com/microsoft/playwright/pull/42668))
- **📁 结果中的绝对路径** ([microsoft/playwright#42497](https://github.com/microsoft/playwright/issues/42497)) — 快照、屏幕截图、控制台日志和下载的链接是相对于工作区根目录的，没有工作区根目录的 client 无法解析。通过 `--file-paths=absolute` (config `filePaths: "absolute"`, env `PLAYWRIGHT_MCP_FILE_PATHS=absolute`) 来获取绝对路径。 ([微软/playwright#42673](https://github.com/microsoft/playwright/pull/42673))

## 🐛 修复

- `fix(mcp): keep upload modal and reject bad headers` — 失败的 `browser_file_upload`（例如丢失文件）报告错误并保持文件选择器打开，以便可以重试，并且 `browser_route`（通过 `--caps=network` 选择加入）针对不采用 `Name: Value` 形式的标头返回错误，而不是设置名为 `""` 的标头。 ([微软/playwright#42713](https://github.com/microsoft/playwright/pull/42713))
- `fix(chromium): bypass service workers on the storage state page` — 对于具有活动 Service Worker 的源，`browser_storage_state`（通过 `--caps=storage` 选择加入）不再运行站点自己的脚本，或者在重定向时失败 ([microsoft/playwright#42656](https://github.com/microsoft/playwright/issues/42656))。 ([microsoft/playwright#42664](https://github.com/microsoft/playwright/pull/42664)、[microsoft/playwright#42741](https://github.com/microsoft/playwright/pull/42741))

## 📦 升级

使用 `@playwright/mcp@latest` 的配置会在下一次 client 重新启动时选择此版本。固定它：

```bash
npx @playwright/mcp@0.0.82
```

---

> 📦 仓库：[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · 🏷️ 版本：`v0.0.82` · 📅 发布：2026-09-18 · [查看英文原版 Release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.82)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
