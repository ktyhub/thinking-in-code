---
title: "Scrapling v0.4.4"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.4"
version: "v0.4.4"
published: "2026-04-05"
type: "patch"
lang: "en"
summary: "A new update with important spider improvements and bug fixes 🎉"
---

# Scrapling v0.4.4

**A new update with important spider improvements and bug fixes 🎉**

## 🚀 New Stuff and quality of life changes
- **Added robots.txt compliance to the Spider framework** with a new `robots_txt_obey` option. When enabled, the spider will automatically fetch and respect robots.txt rules before crawling, including `Disallow`, `Crawl-delay`, and `Request-rate` directives. Robots.txt files are fetched concurrently and cached per domain for the entire crawl. By @AbdullahY36 in [#226](https://github.com/D4Vinci/Scrapling/pull/226)
- **Added robots.txt cache pre-warming** so all start_urls domains have their robots.txt fetched and parsed before the crawl loop begins, avoiding delays on the first request to each domain.
- **Added a new `robots_disallowed_count` stat** to `CrawlStats` to track how many requests were blocked by robots.txt rules during a crawl.

Check it out on the website from [here](https://scrapling.readthedocs.io/en/latest/spiders/getting-started.html#robotstxt-compliance)

## 🐛 Bug Fixes
- **Fixed a critical MRO issue with `ProxyRotator`** where the `_build_context_with_proxy` stub was shadowing the real implementation from child classes, causing proxy rotation to always raise `NotImplementedError` (Fixes [#215](https://github.com/D4Vinci/Scrapling/issues/215)). Thanks @yetval
- **Fixed a page pool leak** when using per-request proxy rotation with browser sessions. Pages created inside temporary contexts were not removed from the pool on cleanup, leading to stale references accumulating over time. By @yetval in [#223](https://github.com/D4Vinci/Scrapling/pull/223)
- **Fixed a missing type assertion** in the static fetcher where `curl_cffi` could return `None` from `session.request()`, causing downstream errors.

## Other
- Updated dependencies, so expect the latest fingerprints and other stuff.
- Added `protego` as a new dependency under the `fetchers` optional group for robots.txt parsing.

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

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.4` · 2026-04-05 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
