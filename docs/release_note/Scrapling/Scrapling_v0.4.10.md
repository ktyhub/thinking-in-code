---
title: "Scrapling v0.4.10"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.10"
version: "v0.4.10"
published: "2026-07-04"
type: "patch"
lang: "en"
summary: "A new update with a brand-new Scrapy integration and a batch of community fixes 🎉"
---

# Scrapling v0.4.10

**A new update with a brand-new Scrapy integration and a batch of community fixes 🎉**

> [!NOTE]
> **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**

## 🚀 New Stuff and quality of life changes

- **Added a Scrapy integration** so you can use Scrapling's parsing API inside your existing Scrapy projects without rewriting them. Put the `scrapling_response` decorator on any spider callback, and the response it receives becomes a Scrapling `Response` while Scrapy keeps handling the crawling (Check the [docs](https://scrapling.readthedocs.io/en/latest/integrations/scrapy/)):

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

- **The MCP server can now use a custom Chromium-compatible browser** for all browser-based tools. Set it once with `scrapling mcp --executable-path "/path/to/chromium"` or the `SCRAPLING_EXECUTABLE_PATH` environment variable, or per request with the `executable_path` argument, by @samrusani in [#360](https://github.com/D4Vinci/Scrapling/pull/360) (Solves [#347](https://github.com/D4Vinci/Scrapling/issues/347))
- **Updated all browsers and fingerprints**. Run `scrapling install --force` after updating to refresh them.

## 🐛 Bug Fixes

- **Fixed garbled text (mojibake) from browser fetchers on non-UTF-8 websites** by @yehudalevy-collab in [#365](https://github.com/D4Vinci/Scrapling/pull/365) (Fixes [#364](https://github.com/D4Vinci/Scrapling/issues/364)).
- **Fixed `LinkExtractor` not filtering compound file extensions like `.tar.gz`** by @renbkna in [#359](https://github.com/D4Vinci/Scrapling/pull/359) (Fixes [#349](https://github.com/D4Vinci/Scrapling/issues/349)).
- **Fixed paused crawls losing their in-flight requests from checkpoints, so resuming no longer skips them** by @yetval in [#358](https://github.com/D4Vinci/Scrapling/pull/358).
- **Fixed spiders calculating wrong crawl delays from robots.txt `Request-rate` directives** through the Protego upgrade, with tests aligned by @Disaster-Terminator in [#355](https://github.com/D4Vinci/Scrapling/pull/355).

## Docs

- **Clarified how `init_script` interacts with Patchright's isolated execution context in stealth mode** by @mturac in [#353](https://github.com/D4Vinci/Scrapling/pull/353) (Solves [#350](https://github.com/D4Vinci/Scrapling/issues/350)).
- **Added the [skills.sh](https://skills.sh/D4Vinci/Scrapling) install method for the agent skill** by @ob-aion in [#363](https://github.com/D4Vinci/Scrapling/pull/363).

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

### Big shoutout to our Platinum Sponsors

<div style="text-align: center;">
  <a href="https://proxidize.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=scrapling&utm_content=d4vinci" target="_blank" title="Clean Proxies with No Nonsense.">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/proxidize.png" width="240" height="100">
  </a>
  <a href="https://coldproxy.com/" target="_blank" title="Residential, IPv6 & Datacenter Proxies for Web Scraping">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/coldproxy.png" width="240" height="100">
  </a>
  <a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="Bot Protection Bypass API for Akamai, DataDome, Incapsula & Kasada">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png" width="240" height="100">
  </a>
  <a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi is your Swiss Quality Proxy Provider, starting at $0.49/GB">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png" width="240" height="100">
  </a>
  <a href="https://tikhub.io/?utm_source=github.com/D4Vinci/Scrapling&utm_medium=marketing_social&utm_campaign=retargeting&utm_content=carousel_ad" target="_blank" title="Unlock the Power of Social Media Data & AI">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TikHub.jpg" width="240" height="100">
  </a>
  <a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky delivers cutting-edge VPS hosting.">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png" width="240" height="100">
  </a>
  <a href="https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling" target="_blank" title="The #1 newsletter dedicated to Web Scraping">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TWSC.png" width="240" height="100">
  </a>
  <a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="Scalable Solutions for Web Data Access">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png" width="240" height="100">
  </a>
  <a href="https://go.nodemaven.com/scraplingjune" target="_blank" title="Proxies with the Highest IP Scores">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/NodeMaven.svg" width="240" height="100">
  </a>
</div>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.10` · 2026-07-04 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
