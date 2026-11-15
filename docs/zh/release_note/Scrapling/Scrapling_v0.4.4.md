---
title: "Scrapling v0.4.4"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.4"
version: "v0.4.4"
published: "2026-04-05"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.4

**新的更新包含重要的蜘蛛改进和错误修复🎉**

## 🚀 新事物和生活质量的变化
- **使用新的 `robots_txt_obey` 选项添加了对 Spider 框架的 robots.txt 合规性**。启用后，蜘蛛程序将在抓取之前自动获取并遵守 robots.txt 规则，包括 `Disallow`、`Crawl-delay` 和 `Request-rate` 指令。在整个爬网过程中，Robots.txt 文件会同时获取并按域缓存。作者：@AbdullahY36 [#226](https://github.com/D4Vinci/Scrapling/pull/226)
- **添加了 robots.txt 缓存预热**，因此所有 start_urls 域都会在爬网循环开始之前获取并解析其 robots.txt，从而避免对每个域的第一个请求出现延迟。
- **向 `CrawlStats` 添加了新的 `robots_disallowed_count` 统计数据**，以跟踪爬网期间有多少请求被 robots.txt 规则阻止。

从[这里]（https://scrapling.readthedocs.io/en/latest/spiders/getting-started.html#robotstxt-compliance）的网站上查看

## 🐛 错误修复
- **修复了 `ProxyRotator` 的一个关键 MRO 问题**，其中 `_build_context_with_proxy` 存根遮盖了子类的实际实现，导致代理轮换始终引发 `NotImplementedError`（修复 [#215](https://github.com/D4Vinci/Scrapling/issues/215)）。谢谢@yetval
- **修复了在浏览器会话中使用按请求代理轮换时的页面池泄漏**。在临时上下文中创建的页面在清理时不会从池中删除，导致过时的引用随着时间的推移而积累。作者：@yetval 在 [#223](https://github.com/D4Vinci/Scrapling/pull/223)
- **修复了静态获取器中缺失的类型断言**，其中 `curl_cffi` 可能从 `session.request()` 返回 `None`，从而导致下游错误。

## 其他
- 更新了依赖项，因此请期待最新的指纹和其他内容。
- 在 `fetchers` 可选组下添加了 `protego` 作为新的依赖项，用于 robots.txt 解析。

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

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.4` · 📅 发布：2026-04-05 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
