---
title: "Scrapling v0.4.12"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.12"
version: "v0.4.12"
published: "2026-07-26"
type: "patch"
lang: "en"
summary: "A release focused on making your spiders smarter about the websites they crawl"
---

# Scrapling v0.4.12

**A release focused on making your spiders smarter about the websites they crawl**

> [!NOTE]
> **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**

## 🚀 New Stuff and quality of life changes

- **Spiders can now tune their own speed with AutoThrottle.** Instead of guessing a `download_delay` that's either too slow or gets you banned, the spider measures how fast each website answers and adjusts the delay of every domain on its own. When a website starts blocking or rate-limiting you, it doubles the delay (or waits exactly what the `Retry-After` header asks for) until that stops, then speeds back up. Your `download_delay` and any robots.txt `Crawl-delay` are still respected as the minimum. (Check the [docs](https://scrapling.readthedocs.io/en/latest/spiders/advanced.html#autothrottle))
    ```python
    class MySpider(Spider):
        name = "adaptive"
        start_urls = ["https://example.com"]
        autothrottle_enabled = True
        autothrottle_start_delay = 2.0
        autothrottle_max_delay = 30.0
        autothrottle_block_backoff = True
    ```

- **Export your results to CSV and XML**, next to the JSON/JSONL exporters you already had. Items that don't all share the same keys are still exported without losing anything, and nested values are written as JSON. (Check the [docs](https://scrapling.readthedocs.io/en/latest/spiders/getting-started.html))
    ```python
    result = MySpider().start()
    result.items.to_csv("products.csv")
    result.items.to_xml("products.xml")
    ```

- **The MCP server can now require authentication**, so you can safely expose it instead of keeping it on your own machine. Any request without the token is rejected, and you can also restrict which hostnames the server answers to. (Check the [docs](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html))
    ```bash
    scrapling mcp --http --auth-token "$(openssl rand -hex 32)"
    ```

- **Browsers now accept CDP URLs over HTTP**, not just WebSocket ones. So next to the `wss://` endpoints managed browser providers hand out, you can now point any browser fetcher or MCP session at a Chrome you started yourself with `--remote-debugging-port=9222`.

- **Published Docker images are now tagged with their release version** instead of only `latest`, so you can pin the exact version you want, by @JanRK in [#384](https://github.com/D4Vinci/Scrapling/pull/384).

## 🐛 Bug Fixes

- **Fixed cached responses losing all their cookies** when the response came from a browser engine, which silently broke any session or auth logic relying on them while using the spiders' development mode, by @amitvijapur in [#379](https://github.com/D4Vinci/Scrapling/pull/379). (Fixes [#376](https://github.com/D4Vinci/Scrapling/issues/376))

- **Fixed `StealthyFetcher` forcing the `en-US` locale** on every browser instead of following your system's, which made websites see a mismatch between your locale and your IP address and treat you as suspicious, like Google answering with 429s. (Fixes [#381](https://github.com/D4Vinci/Scrapling/issues/381))

- **Fixed a misleading error message in the storage system** and removed a dead call left after inserts, by @fix2015 in [#377](https://github.com/D4Vinci/Scrapling/pull/377).

## Performance

- **`get_all_text()` is now O(nodes)** instead of walking up the ancestors of every single text node, which makes it around 5-6x faster on deeply nested pages, by @yetval in [#378](https://github.com/D4Vinci/Scrapling/pull/378).

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

Big shoutout to our Platinum Sponsors

<div style="text-align: center;">
  <a href="https://go.nodemaven.com/scraplingjuly" target="_blank" title="Proxies with the Highest IP Scores">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/NodeMaven.jpg" width="240" height="100">
  </a>
  <a href="https://proxidize.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=scrapling&utm_content=d4vinci" target="_blank" title="Clean Proxies with No Nonsense.">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/proxidize.png" width="240" height="100">
  </a>
  <a href="https://coldproxy.com/?utm_source=scrapling&utm_medium=github&utm_campaign=coldproxy&utm_content=platinum_sponsor" target="_blank" title="Residential, IPv6 & Datacenter Proxies for Web Scraping">
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
</div>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.12` · 2026-07-26 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.12)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
