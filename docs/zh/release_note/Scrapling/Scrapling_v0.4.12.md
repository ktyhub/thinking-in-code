---
title: "Scrapling v0.4.12"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.12"
version: "v0.4.12"
published: "2026-07-26"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.12

**该版本的重点是让您的蜘蛛更聪明地了解他们爬行的网站**

> [!注意]
> **[在 X 上关注我们，获取日常提示和技巧](https://x.com/Scrapling_dev)**

## 🚀 新事物和生活质量的变化

- **蜘蛛现在可以使用 AutoThrottle 调整自己的速度。** 蜘蛛不会猜测 `download_delay` 太慢或导致您被禁止，而是会测量每个网站的响应速度并自行调整每个域的延迟。当网站开始阻止或限制您的速率时，它会加倍延迟（或完全等待 `Retry-After` 标头所要求的时间），直到停止，然后加速。您的 `download_delay` 和任何 robots.txt `Crawl-delay` 仍然被视为最低限度。 （查看[文档](https://scrapling.readthedocs.io/en/latest/spiders/advanced.html#autothrottle)）
    ```python
    class MySpider(Spider):
        name = "adaptive"
        start_urls = ["https://example.com"]
        autothrottle_enabled = True
        autothrottle_start_delay = 2.0
        autothrottle_max_delay = 30.0
        autothrottle_block_backoff = True
    ```

- **将结果导出为 CSV 和 XML**，位于您已有的 JSON/JSONL 导出器旁边。并非全部共享相同键的项目仍会导出而不会丢失任何内容，并且嵌套值会写为 JSON。 （查看[文档](https://scrapling.readthedocs.io/en/latest/spiders/getting-started.html)）
    ```python
    result = MySpider().start()
    result.items.to_csv("products.csv")
    result.items.to_xml("products.xml")
    ```

- **MCP 服务器现在可以要求身份验证**，因此您可以安全地公开它，而不是将其保留在您自己的计算机上。任何没有令牌的请求都会被拒绝，您还可以限制服务器应答的主机名。 （查看[文档](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html)）
    ```bash
    scrapling mcp --http --auth-token "$(openssl rand -hex 32)"
    ```

- **浏览器现在接受 HTTP 上的 CDP URL**，而不仅仅是 WebSocket URL。因此，除了 `wss://` 端点托管浏览器提供商提供的服务之外，您现在还可以将任何浏览器获取器或 MCP 会话指向您自己使用 `--remote-debugging-port=9222` 启动的 Chrome。

- **已发布的 Docker 图像现在标有其发布版本**，而不仅仅是 `latest`，因此您可以通过 @JanRK 在 [#384](https://github.com/D4Vinci/Scrapling/pull/384) 中固定所需的确切版本。

## 🐛 错误修复

- **修复了当响应来自浏览器引擎时缓存的响应丢失所有 cookie**，在使用蜘蛛的开发模式时，浏览器引擎默默地破坏了依赖它们的任何会话或身份验证逻辑，由 @amitvijapur 在 [#379](https://github.com/D4Vinci/Scrapling/pull/379) 中编写。 （修复[#376](https://github.com/D4Vinci/Scrapling/issues/376)）

- **修复了 `StealthyFetcher` 在每个浏览器上强制使用 `en-US` 区域设置**，而不是遵循您的系统，这使得网站看到您的区域设置和 IP 地址之间不匹配，并将您视为可疑，就像 Google 用 429 应答一样。 （修复[#381](https://github.com/D4Vinci/Scrapling/issues/381)）

- **修复了存储系统中的误导性错误消息**并删除了插入后留下的死调用，由@fix2015在[#377](https://github.com/D4Vinci/Scrapling/pull/377)中完成。

## 性能

- **`get_all_text()` 现在是 O(nodes)**，而不是向上遍历每个文本节点的祖先，这使得深度嵌套页面上的速度提高了大约 5-6 倍，作者：[#378](https://github.com/D4Vinci/Scrapling/pull/378) 中的 @yetval。

_🙏 特别感谢社区的持续测试和反馈_

---

感谢我们的白金赞助商

<div style="text-align: center;">
  <a href="https://go.nodemaven.com/scraplingjuly" target="_blank" title="IP 分数最高的代理">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/NodeMaven.jpg”宽度=“240”高度=“100”>
  </a>
  <a href="https://proxidize.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=scrapling&utm_content=d4vinci" target="_blank" title="干净的代理，没有废话。">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/proxidize.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://coldproxy.com/?utm_source=scrapling&utm_medium=github&utm_campaign=coldproxy&utm_content=platinum_sponsor" target="_blank" title="适用于 Web Scraping 的住宅、IPv6 和数据中心代理">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/coldproxy.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="针对 Akamai、DataDome、Incapsula 和 Kasada 的爬虫程序保护绕过 API">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png”宽度=“240”高度=“100”>
  </a>
<a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi 是您的瑞士优质代理提供商，起价为 $0.49/GB">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://tikhub.io/?utm_source=github.com/D4Vinci/Scrapling&utm_medium=marketing_social&utm_campaign=retargeting&utm_content=carousel_ad" target="_blank" title="释放社交媒体数据和人工智能的力量">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TikHub.jpg”宽度=“240”高度=“100”>
  </a>
  <a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky 提供尖端的 VPS 托管。">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling" target="_blank" title="专门针对 Web Scraping 的 #1 新闻通讯">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TWSC.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="可扩展的 Web 数据访问解决方案">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png”宽度=“240”高度=“100”>
  </a>
</div>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.12` · 📅 发布：2026-07-26 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.12)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
