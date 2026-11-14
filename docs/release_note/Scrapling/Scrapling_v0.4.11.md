---
title: "Scrapling v0.4.11"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.11"
version: "v0.4.11"
published: "2026-07-12"
type: "patch"
lang: "en"
summary: "A solid update bringing the first platform spider template, a faster parser, and important fixes 🎉"
---

# Scrapling v0.4.11

**A solid update bringing the first platform spider template, a faster parser, and important fixes 🎉**

> [!NOTE]
> **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**

## 🚀 New Stuff and quality of life changes

- **Added `ShopifySpider`, the first platform spider template!** Extract every product from any Shopify-powered store through its JSON API without touching the website's HTML. Subclass it, set the store's domain, and you are done (Check the [docs](https://scrapling.readthedocs.io/en/latest/spiders/platform-templates/))
  ```python
  from scrapling.spiders import ShopifySpider

  class MyStore(ShopifySpider):
      target_website = "example.com"

  result = MyStore().start()
  ```
- **Added `--executable-path` to the CLI browser commands**. Both `scrapling extract fetch` and `scrapling extract stealthy-fetch` now accept a custom Chromium-compatible browser executable, and fall back to the `SCRAPLING_EXECUTABLE_PATH` environment variable when the option isn't passed, bringing full parity with the MCP server (Solves [#371](https://github.com/D4Vinci/Scrapling/issues/371))
  ```bash
  scrapling extract fetch "https://example.com" page.html --executable-path "/path/to/chromium"
  ```
## 🤖 Quality of life changes
- **Made `find_by_text` and `find_by_regex` up to ~2x faster** when `first_match` is enabled (the default) by wrapping elements lazily so the search stops at the first match, by @yetval in [#370](https://github.com/D4Vinci/Scrapling/pull/370)
- **Updated the benchmarks with the new numbers against the latest versions of all libraries.**
- **Updated contribution rules**

## 🐛 Bug Fixes

- **Fixed the MCP server's fetch tools crashing on pages containing control characters** with the error `All strings must be XML compatible`, by @yetval in [#368](https://github.com/D4Vinci/Scrapling/pull/368) (Fixes [#366](https://github.com/D4Vinci/Scrapling/issues/366))


_🙏 Special thanks to the community for all the continuous testing and feedback_

---

**Big shoutout to our Platinum Sponsors:**

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

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.11` · 2026-07-12 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.11)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
