---
title: "Scrapling v0.4.7"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.7"
version: "v0.4.7"
published: "2026-04-17"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.7

**重点更新让您的 AI 代理更加关注 📸**

> [!注意]
> **[在 X 上关注我们，获取日常提示和技巧](https://x.com/Scrapling_dev)**

## 🚀 新事物和生活质量的变化

- **添加了 `screenshot` MCP 工具**，它捕获页面并将其作为真实的 MCP `ImageContent` 块返回，以便模型实际上可以看到它。该工具需要打开的浏览器会话，因此您首先调用 `open_session`（`dynamic` 或 `stealthy`）并在此处传递 `session_id`。支持 PNG 和 JPEG、全页捕获、JPEG 质量和常用的就绪控件（`wait`、`wait_selector`、`network_idle`、`timeout`）。 （实现[#244](https://github.com/D4Vinci/Scrapling/issues/244)）
- **向 `open_session` 添加了自定义 `session_id` 参数**，以便您可以有意义地命名会话（`"search"`、`"checkout"`），而不是随机的 12 个字符的十六进制默认值。作者：@hauntedhost [#243](https://github.com/D4Vinci/Scrapling/pull/243)

## 🐛 错误修复

- **修复了 `FetcherSession` 状态损坏和延迟会话关闭崩溃**。作者：@yetval 在 [#245](https://github.com/D4Vinci/Scrapling/pull/245)
- **修复了在 HTTP 命令中使用 CLI 的 `--ai-targeted` 标志时的 `TypeError: Session.request() got an unexpected keyword argument 'block_ads'`**。作者：@voidborne-d，在 [#249](https://github.com/D4Vinci/Scrapling/pull/249) 中（修复 [#247](https://github.com/D4Vinci/Scrapling/issues/247)）

## 翻译

- **添加了巴西葡萄牙语自述文件翻译** 由 @rgomids 在 [#250](https://github.com/D4Vinci/Scrapling/pull/250) 中

_🙏 特别感谢社区的持续测试和反馈_

---

### 向我们的白金赞助商致敬

<a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="针对 Akamai、DataDome、Incapsula 和 Kasada 的爬虫程序保护绕过 API">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png”宽度=“240”高度=“100”>
</a>
<a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi 是您的瑞士优质代理提供商，起价为 $0.49/GB">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png”宽度=“240”高度=“100”>
</a>
<a href="https://tikhub.io/?utm_source=github.com/D4Vinci/Scrapling&utm_medium=marketing_social&utm_campaign=retargeting&utm_content=carousel_ad" target="_blank" title="释放社交媒体数据和人工智能的力量">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TikHub.jpg”宽度=“240”高度=“100”>
</a>
<a href="https://www.nsocks.com/?keyword=2p67aivg" target="_blank" title="AI 应用程序的可扩展 Web 数据访问">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/nsocks.png”宽度=“240”高度=“100”>
</a>
<a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky 提供尖端的 VPS 托管。">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png”宽度=“240”高度=“100”>
</a>
<a href="https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling" target="_blank" title="专门针对 Web Scraping 的 #1 时事通讯">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TWSC.png”宽度=“240”高度=“100”>
</a>
<a href="http://mangoproxy.com/?utm_source=D4Vinci&utm_medium=GitHub&utm_campaign=D4Vinci" target="_blank" title="您可以信赖的代理：住宅、服务器和移动">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/MangoProxy.png”宽度=“240”高度=“100”>
</a>
<a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="可扩展的 Web 数据访问解决方案">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png”宽度=“240”高度=“100”>
</a>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.7` · 📅 发布：2026-04-17 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
