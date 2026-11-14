---
title: "Scrapling v0.4.8"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.8"
version: "v0.4.8"
published: "2026-05-11"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.8

**一个大型蜘蛛更新，将爬行框架提升到一个新的水平🕷️**

> [!注意]
> **[在 X 上关注我们，获取日常提示和技巧](https://x.com/Scrapling_dev)**

## 🚀 新事物和生活质量的变化

- **在 `scrapling.spiders.LinkExtractor` 中添加了 `LinkExtractor` 原语**，以从 `Response` 中提取 URL。有很多控件（查看[文档](https://scrapling.readthedocs.io/en/latest/spiders/generic-templates.html)）

    ```python
    from scrapling.spiders import LinkExtractor

    extractor = LinkExtractor(allow=r"/posts/", deny_domains=["ads.example.com"])
    ```

- **添加了 `CrawlSpider` 和 `CrawlRule`** 通用蜘蛛模板，因此您不再需要手写相同的“跟随与此模式匹配的链接”样板。重写 `rules()` 以返回 `CrawlRule` 对象的列表，每个对象与 `LinkExtractor` 配对。 （查看[文档](https://scrapling.readthedocs.io/en/latest/spiders/generic-templates.html)）

    ```python
    from scrapling.spiders import CrawlSpider, CrawlRule, LinkExtractor

    class QuotesSpider(CrawlSpider):
        name = "blog"
        start_urls = ["https://quotes.toscrape.com/"]

        def rules(self):
            return [
                CrawlRule(LinkExtractor(allow=r"/author/"), callback=self.parse_author),
                CrawlRule(LinkExtractor(allow=r"/page/\d+/")),  # pagination, no callback
            ]

        async def parse_author(self, response):
            yield {
                "name": response.css(".author-title::text").get(),
                "birthday": response.css(".author-born-date::text").get(),
                "url": response.url,
            }
    ```

- **添加了 `SitemapSpider` 模板**，直接从站点地图或 `robots.txt` URL 进行爬网。处理 gzip 压缩的站点地图以及大量控件和选项。 URL 通过爬行规则分派，如上所示的 **CrawlSpider**。 （查看[文档](https://scrapling.readthedocs.io/en/latest/spiders/generic-templates.html)）

    ```python
    from scrapling.spiders import SitemapSpider, CrawlRule, LinkExtractor

    class NewsSitemap(SitemapSpider):
        name = "news"
        sitemap_urls = ["https://example.com/robots.txt"]

        def rules(self):
            return [
                CrawlRule(LinkExtractor(allow=r"/articles/"), callback=self.parse_article),
            ]

        async def parse_article(self, response):
            yield {"url": response.url, "title": response.css("h1::text").get()}
    ```

- **自适应重定位现在默认为 40% 相似性阈值**，而不是所有方法中的 `0`。这将使自适应功能更好地发挥作用。当没有任何内容超过阈值时，现在会发出警告，告诉您它确实看到的最高分数，因此您可以在需要时故意降低 `percentage`。

- **更新了所有浏览器和指纹**。更新后运行新的`scrapling install  --force`以刷新浏览器和指纹。

## 🐛 错误修复

- **修复了 `Fetcher.configure(...)` 不适用于每个请求的调用**。同样的修复也适用于 `AsyncFetcher`。
- **修复了由 @yetval 在 [#255](https://github.com/D4Vinci/Scrapling/pull/255) 中导致蜘蛛重复请求的错误请求指纹识别。
- **修复了自适应 scraping 引擎在弱匹配时保持沉默的问题。** 结合上面的阈值更改，现在，当重定位失败时，您会收到警告，而不是误导性的“最佳猜测”元素。


## 文档

- **更新了文档中的旧代码示例**以匹配当前版本。
- **改进了文档网站上的代码复制粘贴体验**并调整了代理技能，以便每次调用使用更少的令牌。

_🙏 特别感谢社区的持续测试和反馈_

---

### 向我们的白金赞助商致敬

<a href="https://coldproxy.com/" target="_blank" title="适用于 Web Scraping 的住宅、IPv6 和数据中心代理">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/coldproxy.png”宽度=“240”高度=“100”>
</a>
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
<a href="http://mangoproxy.com/?utm_source=D4Vinci&utm_medium=GitHub&utm_campaign=D4Vinci" target="_blank" title="您可以信赖的代理：住宅、服务器和移动">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/MangoProxy.png”宽度=“240”高度=“100”>
</a>
<a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="可扩展的 Web 数据访问解决方案">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png”宽度=“240”高度=“100”>
</a>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.8` · 📅 发布：2026-05-11 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.8)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
