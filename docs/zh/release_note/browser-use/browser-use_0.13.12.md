---
title: "browser-use 0.13.12"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.12"
version: "0.13.12"
published: "2026-10-15"
type: "patch"
lang: "zh"
---

# browser-use 0.13.12

添加由 Browser Use Actor 支持的 OpenAI 浏览器工具。

- 从 `browser_use.integrations.openai` 导入 `BrowserUse`。
- 安装 `browser-use[openai-tools]` 以启用 OpenAI Python 3.31+。
- 使用本地浏览器、浏览器使用云或现有连接的 BrowserSession。
- 支持 18 个默认浏览器工具和 6 个可选操作。
- 保留借用的浏览器所有权并检查云浏览器清理。
- 跨 OpenAI 2.x 和 3.x 模型包装器保留 URL 和超时设置。

OpenAI 3.x 使用 httpx2。对于自定义 HTTP client，请使用 OpenAI 的 DefaultAsyncHttpxClient。

此集成尚不提供上传、下载、范围读取、控制台/网络诊断或 Bash。

验证：通过了 35 项集成/模型测试，跳过了两项； OpenAI 2.26 兼容性：15 次通过，1 次跳过。所有拉取请求检查均已通过。 Live Cloud 导航和元素引用 click 测试通过了提供商确认的清理。

实施：https://github.com/browser-use/browser-use/pull/6086
云测试：https://github.com/browser-use/new-eval-platform/actions/runs/38824343560

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`0.13.12` · 📅 发布：2026-10-15 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/0.13.12)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
