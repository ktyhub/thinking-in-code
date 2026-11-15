---
title: "Scrapling v0.4.3"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.3"
version: "v0.4.3"
published: "2026-03-30"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.3

**包含许多重要更改的新更新🎉**

## 🚀 新事物和生活质量的变化
- **添加了一个新的 MCP 工具**来打开持久的正常/隐形浏览器，以继续将其与其他工具一起使用，并添加另一个新工具来关闭它。 （[示例](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html?h=Using+Persistent+Sessions#examples)）
- **添加了新的 MCP 工具**以列出所有现有的浏览器会话。旨在与新工具一起使用。
- **向浏览器会话添加了一个新选项**，以自动收集请求期间发生的所有后台请求（解决 [#159](https://github.com/D4Vinci/Scrapling/pull/159)）[[示例](https://scrapling.readthedocs.io/en/latest/fetching/dynamic.html#capturing-xhrfetch-requests)]。
- **添加了新的清理程序**，通过删除隐藏/不可见内容来保护 MCP 服务器免受常见的提示注入攻击。
- **在 Web Scraping 命令中添加了一个名为 `--ai-targeted` 的新命令行选项**，以使内容针对 AI 并安全抵御 MCP 服务器等常见的提示注入攻击。
- **向浏览器会话添加了一个名为 `executable_path` 的新选项**，以允许设置自定义浏览器路径（解决了 [#202](https://github.com/D4Vinci/Scrapling/pull/202)）
- **重构** MCP 服务器代码，使其易于维护，并将所有工具统一为异步。
- **重构** CLI 命令代码易于维护，并缩短了 210 行。


## 🐛 错误修复
- 通过 @karesansui-u 在 [#201](https://github.com/D4Vinci/Scrapling/pull/201) 中修复了在蜘蛛会话中重试时保留 HTTP 方法的问题
- 在[#197](https://github.com/D4Vinci/Scrapling/pull/197)中@haosenwang1018和@D4Vinci添加了获取页面内容的最大重试限制以防止无限循环
- 在 [#196](https://github.com/D4Vinci/Scrapling/pull/196) 中 @haosenwang1018 将 `_restore_from_checkpoint` 中的裸 `raise` 替换为 `return False`
- 在 `Texthandler` 中将 `get_all` 替换为 `getall` 以匹配选择器类别。

## 覆盖率/测试改进
- 在 [#192](https://github.com/D4Vinci/Scrapling/pull/192) 中添加了 @Bortlesboat 的 `_normalize_credentials` 边缘情况覆盖测试
- 在 [#193](https://github.com/D4Vinci/Scrapling/pull/193) 中添加了 @haosenwang1018 的保存/检索往返和核心存储覆盖率测试
- 在 [#194](https://github.com/D4Vinci/Scrapling/pull/194) 中添加了 @haosenwang1018 对 `TextHandler` 正则表达式路径和 `TextHandlers.re()` 的覆盖
- 由 @awanawana 在 [#200](https://github.com/D4Vinci/Scrapling/pull/200) 中添加了 `filter`、`iterancestors` 和 `find_similar` 的边缘情况测试

## 特工技能提升
- 修复了 [#204](https://github.com/D4Vinci/Scrapling/pull/204) 中 @yetval 的技能参考中损坏的降价链接
- 改进了技能结构，通过[Clawhub](https://clawhub.ai/d4vinci/scrapling-official)验证更容易被接受。
- 当通过命令行命令执行 scraping 时，强制技能使用 `--ai-targeted` 命令行选项。

## 文档改进
- 在 [#187](https://github.com/D4Vinci/Scrapling/pull/187) 中添加了 @greatsk55 的韩语自述文件翻译
- 中文和日文自述文件的 CJK 拉丁文间距修复。
- 修复了旧网站设计中损坏的链接。


_🙏 特别感谢社区的持续测试和反馈_

---

### 向我们的白金赞助商致敬

<a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="针对 Akamai、DataDome、Incapsula 和 Kasada 的爬虫程序保护绕过 API">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png”宽度=“240”高度=“100”>
</a>
<a href="https://birdproxies.com/t/scrapling" target="_blank" title="在 Bird Proxies，我们消除了您的 IP 禁止、地理限制和高额费用等痛苦，让您可以专注于您的工作。">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/BirdProxies.jpg”宽度=“240”高度=“100”>
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
<a href="https://proxy-seller.com/?partner=CU9CAA5TBYFFT2" target="_blank" title="Proxy-Seller 为 Web Scraping 提供可靠的代理基础设施">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/ProxySeller.png”宽度=“240”高度=“100”>
</a>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.3` · 📅 发布：2026-03-30 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
