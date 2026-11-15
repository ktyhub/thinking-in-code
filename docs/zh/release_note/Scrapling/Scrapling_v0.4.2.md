---
title: "Scrapling v0.4.2"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.2"
version: "v0.4.2"
published: "2026-03-08"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.2

**新的维护更新包含重要更改**

#### 错误修复
- 函数 `get_all_text()` 现在捕获尾部文本节点。这将使 MCP 服务器和命令看到之前错过的文本 ([#168](https://github.com/D4Vinci/Scrapling/pull/168))。谢谢@mhillebrand
- Referer 现在返回一个裸 Google url，而不是 Google 搜索 URL。之前的逻辑不正确，可能会产生指纹信号（[#179](https://github.com/D4Vinci/Scrapling/pull/179)）。谢谢@Bortlesboat
- 修复了所有浏览器中额外标志串联的问题。谢谢@rostchri
- 修复了 3.12 以下 Python 版本的类型提示问题，该问题导致其崩溃。 （解决[#163](https://github.com/D4Vinci/Scrapling/issues/163)）

####其他
- 为 Claude Code / OpenClaw 和其他 AI 代理工具添加了代理技能。
- 为 Clawhub 添加了特工技能。
- 将所有浏览器和 Playwright 版本更新到最新版本。
- 在主自述文件中添加了法语翻译。

_🙏 特别感谢社区的持续测试和反馈_

---

### 向我们的白金赞助商致敬
<a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="针对 Akamai、DataDome、Incapsula 和 Kasada 的爬虫程序保护绕过 API"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png"></a><a href="https://birdproxies.com/t/scrapling" target="_blank" title="在 Bird Proxies，我们消除了您的痛苦，例如 IP 被禁、地理限制和高额费用，以便您可以专注于您的业务"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/BirdProxies.jpg"></a><a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi 是您的瑞士优质代理提供商，起价 $0.49/GB"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png"></a><a href="https://tikhub.io/?ref=KarimShoair" target="_blank" title="释放社交媒体数据和人工智能的力量"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TikHub.jpg"></a>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.2` · 📅 发布：2026-03-08 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
