---
title: "Scrapling v0.4.8"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.8"
version: "v0.4.8"
published: "2026-05-11"
type: "patch"
lang: "en"
summary: "A big spider update that takes the crawling framework to the next level 🕷️"
---

# Scrapling v0.4.8

**A big spider update that takes the crawling framework to the next level 🕷️**

> [!NOTE]
> **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**

## 🚀 New Stuff and quality of life changes

- **Added a `LinkExtractor` primitive** in `scrapling.spiders.LinkExtractor` to pull URLs out of a `Response`. There are a lot of controls (Check the [docs](https://scrapling.readthedocs.io/en/latest/spiders/generic-templates.html))

    ```python
    from scrapling.spiders import LinkExtractor

    extractor = LinkExtractor(allow=r"/posts/", deny_domains=["ads.example.com"])
    ```

- **Added `CrawlSpider` and `CrawlRule`** generic spider templates so you no longer have to hand-write the same "follow links matching this pattern" boilerplate. Override `rules()` to return a list of `CrawlRule` objects, each pairing a `LinkExtractor`. (Check the [docs](https://scrapling.readthedocs.io/en/latest/spiders/generic-templates.html))

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

- **Added a `SitemapSpider` template** that seeds a crawl directly from a sitemap, or `robots.txt` URLs. Handles gzip-compressed sitemaps, and a lot of controls and options. URLs are dispatched via the crawl rules as shown above for **CrawlSpider**. (Check the [docs](https://scrapling.readthedocs.io/en/latest/spiders/generic-templates.html))

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

- **Adaptive relocation now defaults to a 40% similarity threshold** instead of `0` across all methods. This will make the adaptive feature work better. When nothing crosses the threshold, a warning now tells you the top score it did see, so you can lower `percentage` deliberately if needed.

- **Updated all browsers and fingerprints**. Run a new `scrapling install  --force` after updating to refresh the browsers and fingerprints.

## 🐛 Bug Fixes

- **Fixed `Fetcher.configure(...)` not applying to per-request calls**. Same fix applied to `AsyncFetcher`.
- **Fixed incorrect request fingerprinting that caused duplicate requests in spiders** by @yetval in [#255](https://github.com/D4Vinci/Scrapling/pull/255).
- **Fixed the Adaptive scraping engine staying silent on weak matches.** Combined with the threshold change above, you now get a warning instead of a misleading "best guess" element when relocation fails.


## Docs

- **Refreshed older code examples** across the documentation to match the current version.
- **Improved the code copy-paste experience** on the docs site and trimmed the agent skill so it uses fewer tokens per invocation.

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

### Big shoutout to our Platinum Sponsors

<a href="https://coldproxy.com/" target="_blank" title="Residential, IPv6 & Datacenter Proxies for Web Scraping">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/coldproxy.png" width="240" height="100">
</a>
<a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="Bot Protection Bypass API for Akamai, DataDome, Incapsula & Kasada">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png" width="240" height="100">
</a>
<a href="https://birdproxies.com/t/scrapling" target="_blank" title="At Bird Proxies, we eliminate your pains such as banned IPs, geo restriction, and high costs so you can focus on your work.">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/BirdProxies.jpg" width="240" height="100">
</a>
<a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi is your Swiss Quality Proxy Provider, starting at $0.49/GB">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png" width="240" height="100">
</a>
<a href="https://tikhub.io/?utm_source=github.com/D4Vinci/Scrapling&utm_medium=marketing_social&utm_campaign=retargeting&utm_content=carousel_ad" target="_blank" title="Unlock the Power of Social Media Data & AI">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TikHub.jpg" width="240" height="100">
</a>
<a href="https://www.nsocks.com/?keyword=2p67aivg" target="_blank" title="Scalable Web Data Access for AI Applications">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/nsocks.png" width="240" height="100">
</a>
<a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky delivers cutting-edge VPS hosting.">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png" width="240" height="100">
</a>
<a href="https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling" target="_blank" title="The #1 newsletter dedicated to Web Scraping">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TWSC.png" width="240" height="100">
</a>
<a href="http://mangoproxy.com/?utm_source=D4Vinci&utm_medium=GitHub&utm_campaign=D4Vinci" target="_blank" title="Proxies You Can Rely On: Residential, Server, and Mobile">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/MangoProxy.png" width="240" height="100">
</a>
<a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="Scalable Solutions for Web Data Access">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png" width="240" height="100">
</a>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.8` · 2026-05-11 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
