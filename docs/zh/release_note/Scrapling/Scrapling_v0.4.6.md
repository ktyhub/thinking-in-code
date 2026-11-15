---
title: "Scrapling v0.4.6"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.6"
version: "v0.4.6"
published: "2026-04-13"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.6

**针对浏览器隐秘性、隐私和开发者体验的重点更新🔒**

> [!注意]
> **[在 X 上关注我们，获取日常提示和技巧](https://x.com/Scrapling_dev)**

## 🚀 新事物和生活质量的变化

- **为浏览器提取器添加了内置广告拦截**。通过 `block_ads=True` 在路由拦截级别阻止对约 3,500 个已知广告和跟踪器域的请求 - 无 DNS、无 TCP、即时中止。可与 `blocked_domains` 结合使用以创建自定义列表。 MCP 服务器和 CLI `--ai-targeted` 模式可自动保存令牌并加快页面加载速度。
    ```python
    page = StealthyFetcher.fetch('https://example.com', block_ads=True)
    ```
- **添加了 DNS-over-HTTPS 支持**，以防止使用代理时发生 DNS 泄漏。传递 `dns_over_https=True` 通过 Cloudflare 的 DoH 路由 DNS 查询，因此即使您的 HTTP 流量通过代理，您的真实位置也不会通过 DNS 解析暴露。
    ```python
    page = StealthyFetcher.fetch('https://example.com', proxy='http://proxy:8080', dns_over_https=True)
    ```
- **为浏览器获取程序添加了 `page_setup` 回调**。在 `page.goto()` 之前运行的函数，允许您注册必须在页面导航之前设置的事件侦听器、路由或脚本。与 `page_action`（导航后运行）配对。 （解决 [#237](https://github.com/D4Vinci/Scrapling/issues/237)）
    ```python
    def capture_websockets(page):
        page.on("websocket", lambda ws: print(f"WS: {ws.url}"))

    page = DynamicFetcher.fetch('https://example.com', page_setup=capture_websockets)
    ```
- **向 `fetch` 和 `stealthy-fetch` 命令添加了 `--block-ads` 和 `--dns-over-https` CLI 选项**。

## 🐛 错误修复

- **修复了 `Seconds` 类型别名**拒绝浮点值。将 `wait=1.5` 或 `timeout=500.0` 传递给浏览器提取器将会失败并出现类型错误，因为类型别名错误地将 `float` 视为元数据而不是类型。作者：@kuishou68 [#240](https://github.com/D4Vinci/Scrapling/pull/240)
- **修复了全路径选择器生成中的重复 ID 段**。具有 `id` 属性的元素在生成完整 CSS/XPath 路径时会附加其选择器两次，从而生成像 `body > #main > #main > #target > #target` 这样的选择器。还修复了发出裸 `[@id='x']` 谓词（无效 XPath）而不是 `*[@id='x']` 的全路径 XPath。通过 @sjhddh 在 [#241](https://github.com/D4Vinci/Scrapling/pull/241)
- **修复了丢失的 shell 签名参数**。交互式 shell 的函数签名中缺少 `blocked_domains`、`block_ads`、`retries`、`retry_delay`、`capture_xhr`、`executable_path` 和 `dns_over_https`。

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
<a href="http://mangoproxy.com/?utm_source=D4Vinci&utm_medium=GitHub&utm_campaign=D4Vinci" target="_blank" title="您可以信赖的代理：住宅、服务器和移动">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/MangoProxy.png”宽度=“240”高度=“100”>
</a>
<a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="可扩展的 Web 数据访问解决方案">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png”宽度=“240”高度=“100”>
</a>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.6` · 📅 发布：2026-04-13 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
