---
title: "Scrapling v0.4.6"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.6"
version: "v0.4.6"
published: "2026-04-13"
type: "patch"
lang: "en"
summary: "A focused update on browser stealth, privacy, and developer experience 🔒"
---

# Scrapling v0.4.6

**A focused update on browser stealth, privacy, and developer experience 🔒**

> [!NOTE]
> **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**

## 🚀 New Stuff and quality of life changes

- **Added built-in ad blocking** for browser fetchers. Pass `block_ads=True` to block requests to ~3,500 known ad and tracker domains at the route interception level -- no DNS, no TCP, instant abort. Can be combined with `blocked_domains` for custom lists. The MCP server and CLI `--ai-targeted` mode enable this automatically to save tokens and speed up page loads.
    ```python
    page = StealthyFetcher.fetch('https://example.com', block_ads=True)
    ```
- **Added DNS-over-HTTPS support** to prevent DNS leaks when using proxies. Pass `dns_over_https=True` to route DNS queries through Cloudflare's DoH, so your real location isn't exposed through DNS resolution even when your HTTP traffic goes through a proxy.
    ```python
    page = StealthyFetcher.fetch('https://example.com', proxy='http://proxy:8080', dns_over_https=True)
    ```
- **Added `page_setup` callback** for browser fetchers. A function that runs before `page.goto()`, letting you register event listeners, routes, or scripts that must be set up before the page navigates. Pairs with `page_action` (which runs after navigation). (Solves [#237](https://github.com/D4Vinci/Scrapling/issues/237))
    ```python
    def capture_websockets(page):
        page.on("websocket", lambda ws: print(f"WS: {ws.url}"))

    page = DynamicFetcher.fetch('https://example.com', page_setup=capture_websockets)
    ```
- **Added `--block-ads` and `--dns-over-https` CLI options** to both `fetch` and `stealthy-fetch` commands.

## 🐛 Bug Fixes

- **Fixed `Seconds` type alias** rejecting float values. Passing `wait=1.5` or `timeout=500.0` to browser fetchers would fail with a type error because the type alias incorrectly treated `float` as metadata instead of a type. by @kuishou68 in [#240](https://github.com/D4Vinci/Scrapling/pull/240)
- **Fixed duplicate ID segments in full-path selector generation**. Elements with `id` attributes had their selector appended twice when generating full CSS/XPath paths, producing selectors like `body > #main > #main > #target > #target`. Also fixed full-path XPath emitting bare `[@id='x']` predicates (invalid XPath) instead of `*[@id='x']`. by @sjhddh in [#241](https://github.com/D4Vinci/Scrapling/pull/241)
- **Fixed missing shell signature parameters**. The interactive shell was missing `blocked_domains`, `block_ads`, `retries`, `retry_delay`, `capture_xhr`, `executable_path`, and `dns_over_https` from its function signatures.

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

### Big shoutout to our Platinum Sponsors

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
<a href="https://proxy-seller.com/?partner=CU9CAA5TBYFFT2" target="_blank" title="Proxy-Seller provides reliable proxy infrastructure for Web Scraping">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/ProxySeller.png" width="240" height="100">
</a>
<a href="http://mangoproxy.com/?utm_source=D4Vinci&utm_medium=GitHub&utm_campaign=D4Vinci" target="_blank" title="Proxies You Can Rely On: Residential, Server, and Mobile">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/MangoProxy.png" width="240" height="100">
</a>
<a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="Scalable Solutions for Web Data Access">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png" width="240" height="100">
</a>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.6` · 2026-04-13 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
