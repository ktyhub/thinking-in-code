---
title: "playwright-mcp v0.0.69"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.69"
version: "v0.0.69"
published: "2026-03-30"
type: "patch"
lang: "zh"
---

# playwright-mcp v0.0.69

## 新消息

### 新工具

- **`browser_network_state_set`** — 切换网络离线模式以测试连接场景 ([#39459](https://github.com/microsoft/playwright/pull/39459))
- **`browser_video_chapter`** — 在视频录制中添加章节标记，显示背景模糊的全屏章节卡 ([#39891](https://github.com/microsoft/playwright/pull/39891))

### 工具改进

- **`browser_mouse_click_xy`** — 添加了 `button`、`clickCount` 和 `delay` 选项，以实现更精确的鼠标交互控制（[#39368](https://github.com/microsoft/playwright/pull/39368)、[#39465](https://github.com/microsoft/playwright/pull/39465)）
- **`browser_network_requests`** - 在响应中添加了过滤支持和可选的 `headers`/`body` 字段（[#39672](https://github.com/microsoft/playwright/pull/39672)）
- **非引用选择器** - 除了 aria-ref 句柄之外，工具现在还接受纯 CSS/文本选择器 ([#39581](https://github.com/microsoft/playwright/pull/39581))

### 其他变化

- 在包中添加了 `mcpName` 字段，用于 MCP 注册表所有权验证（[#1432](https://github.com/microsoft/playwright-mcp/pull/1432)）
- Chrome 扩展：将公钥注入发布 zip 以保留 Web Store 扩展 ID ([#1462](https://github.com/microsoft/playwright-mcp/pull/1462))

## 错误修复

- 修复验证工具在 iframe 内不起作用的问题 ([#39374](https://github.com/microsoft/playwright/pull/39374))
- 修复 Chromium 系列浏览器不遵守基于 fs 的锁定文件 ([#39377](https://github.com/microsoft/playwright/pull/39377))
- 修复设置 `--snapshot-mode=none` 时打印的控制台条目 ([#39378](https://github.com/microsoft/playwright/pull/39378))
- 修复由于上下文菜单/鼠标排序导致的非确定性右 click 行为 ([#39416](https://github.com/microsoft/playwright/pull/39416))
- 修复标头值中包含冒号时的标头值解析 ([#39401](https://github.com/microsoft/playwright/pull/39401))
- 使用每会话隔离错误地修复持久上下文（[#39601](https://github.com/microsoft/playwright/pull/39601)）
- 修复导航协议白名单替换为黑名单以获得更好的覆盖范围（[#39600](https://github.com/microsoft/playwright/pull/39600)）
- 修复 MCP 工具响应中格式错误的 Unicode 字符 ([#39625](https://github.com/microsoft/playwright/pull/39625))
- 修复 `toWellFormed()` 与 Node.js 18 的兼容性 ([#39674](https://github.com/microsoft/playwright/pull/39674))
- 修复环境中覆盖配置文件值的空 `cdpHeaders` ([#39866](https://github.com/microsoft/playwright/pull/39866))
- 修复 `browser_set_storage_state` 工具中的文件路径验证（[#39881](https://github.com/microsoft/playwright/pull/39881)）
- 修复 Chrome 以在浏览器扩展中测试可执行位置解析 ([#39936](https://github.com/microsoft/playwright/pull/39936))
- 修复未针对待处理选项卡启用的扩展不活动计时器 ([#1443](https://github.com/microsoft/playwright-mcp/pull/1443))

---

> 📦 仓库：[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · 🏷️ 版本：`v0.0.69` · 📅 发布：2026-03-30 · [查看英文原版 Release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.69)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
