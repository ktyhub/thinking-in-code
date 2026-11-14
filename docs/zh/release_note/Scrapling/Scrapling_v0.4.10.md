---
title: "Scrapling v0.4.10"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.10"
version: "v0.4.10"
published: "2026-07-04"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.10

**新的更新包含全新的 Scrapy 集成和一批社区修复 🎉**

> [!注意]
> **[在 X 上关注我们，获取日常提示和技巧](https://x.com/Scrapling_dev)**

## 🚀 新事物和生活质量的变化

- **添加了 Scrapy 集成**，因此您可以在现有的 Scrapy 项目中使用 Scrapling 的解析 API，而无需重写它们。将 `scrapling_response` 装饰器放在任何蜘蛛回调上，它收到的响应将变成 Scrapling `Response`，而 Scrapy 继续处理爬行（检查 [docs](https://scrapling.readthedocs.io/en/latest/integrations/scrapy/)）：

    ```python
    import scrapy
    from scrapling.integrations.scrapy import scrapling_response


    class QuotesSpider(scrapy.Spider):
        name = "quotes"
        start_urls = ["https://quotes.toscrape.com"]

        @scrapling_response
        def parse(self, response):  # `response` is now a Scrapling Response
            first_quote = response.find_by_text("The world as we have created it", partial=True)
            for quote in [first_quote, *first_quote.find_similar()]:
                yield {"text": quote.get_all_text(strip=True)}
    ```

- **MCP 服务器现在可以为所有基于浏览器的工具使用自定义的 Chromium 兼容浏览器**。使用 `scrapling mcp --executable-path "/path/to/chromium"` 或 `SCRAPLING_EXECUTABLE_PATH` 环境变量设置一次，或者根据 @samrusani 在 [#360](https://github.com/D4Vinci/Scrapling/pull/360) 中使用 `executable_path` 参数的请求设置它（解决 [#347](https://github.com/D4Vinci/Scrapling/issues/347)）
- **更新了所有浏览器和指纹**。更新后运行`scrapling install --force`来刷新它们。

## 🐛 错误修复

- **修复了非 UTF-8 网站上浏览器获取程序中的乱码文本 (mojibake)**，由 @yehudalevy-collab 在 [#365](https://github.com/D4Vinci/Scrapling/pull/365) 中修复（修复 [#364](https://github.com/D4Vinci/Scrapling/issues/364)）。
- **修复了 `LinkExtractor` 不过滤 @renbkna 在 [#359](https://github.com/D4Vinci/Scrapling/pull/359) 中的 `.tar.gz`** 等复合文件扩展名的问题（修复了 [#349](https://github.com/D4Vinci/Scrapling/issues/349)）。
- **修复了暂停的爬网从检查点丢失其正在进行的请求，因此恢复不再跳过它们**，由@yetval 在 [#358](https://github.com/D4Vinci/Scrapling/pull/358) 中实现。
- **通过 Protego 升级修复了蜘蛛从 robots.txt `Request-rate` 指令计算错误的爬行延迟**，并通过 [#355](https://github.com/D4Vinci/Scrapling/pull/355) 中的@Disaster-Terminator 进行了测试。

## 文档

- **由 @mturac 在 [#353](https://github.com/D4Vinci/Scrapling/pull/353) 中阐明了 `init_script` 如何在隐身模式下与 Patchright 的隔离执行上下文交互**（解决了 [#350](https://github.com/D4Vinci/Scrapling/issues/350)）。
- **在 [#363](https://github.com/D4Vinci/Scrapling/pull/363) 中通过 @ob-aion 添加了代理技能的 [skills.sh](https://skills.sh/D4Vinci/Scrapling) 安装方法**。

_🙏 特别感谢社区的持续测试和反馈_

---

### 向我们的白金赞助商致敬

<div style="text-align: center;">
  <a href="https://proxidize.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=scrapling&utm_content=d4vinci" target="_blank" title="干净的代理，没有废话。">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/proxidize.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://coldproxy.com/" target="_blank" title="适用于 Web Scraping 的住宅、IPv6 和数据中心代理">
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
  <a href="https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling" target="_blank" title="专门针对 Web Scraping 的 #1 时事通讯">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TWSC.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="可扩展的 Web 数据访问解决方案">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://go.nodemaven.com/scraplingjune" target="_blank" title="IP 分数最高的代理">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/NodeMaven.svg”宽度=“240”高度=“100”>
  </a>
</div>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.10` · 📅 发布：2026-07-04 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.10)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
