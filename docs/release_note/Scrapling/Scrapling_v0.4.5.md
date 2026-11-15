---
title: "Scrapling v0.4.5"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.5"
version: "v0.4.5"
published: "2026-04-07"
type: "patch"
lang: "en"
summary: "A focused update with one big quality-of-life feature for spider developers and a couple of important fixes 🎉"
---

# Scrapling v0.4.5

**A focused update with one big quality-of-life feature for spider developers and a couple of important fixes 🎉**

> [!NOTE]
> **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**


## 🚀 New Stuff and quality of life changes

- **Spider Development Mode**: Iterating on a spider's `parse()` logic used to mean re-hitting the target servers on every run, which is slow, noisy, and a great way to get rate-limited while you're still figuring out your selectors. The new development mode caches every response to disk on the first run and replays them from disk on every subsequent run, so you can tweak your callbacks and re-run as many times as you want without making a single network request. Enable it with one class attribute:

    ```python
    class MySpider(Spider):
        name = "my_spider"
        start_urls = ["https://example.com"]
        development_mode = True

        async def parse(self, response):
            yield {"title": response.css("title::text").get("")}
    ```

    The cache lives in `.scrapling_cache/{spider.name}/` by default and can be redirected anywhere with `development_cache_dir`. Two new stat counters, `cache_hits` and `cache_misses`, let you see how the cache performed. Cache replay bypasses `download_delay`, rate limiting, and the blocked-request retry path so iteration is as fast as the disk allows. Don't ship a spider with `development_mode = True` -- it's a development tool, not a production cache. See the [docs](https://scrapling.readthedocs.io/en/latest/spiders/advanced.html#development-mode) for the full story.

- **Safer redirects by default**: `follow_redirects` now defaults to `"safe"` across all HTTP fetchers, the MCP server, and the shell. Redirects are still followed, but ones targeting internal/private IPs (loopback, private networks, link-local) are rejected. This protects you from SSRF when scraping user-supplied URLs. Pass `follow_redirects="all"` to get the old behavior, or `False` to disable redirects entirely.

## 🐛 Bug Fixes

- **Force-stop no longer loses your checkpoint**: Pressing Ctrl+C twice (force-stop) on a spider with `crawldir` enabled used to race against the checkpoint write -- the cancel scope would tear down the task before the pickle finished, leaving `paused=False` and triggering the cleanup path that *deletes* the previous checkpoint. The result was that force-stopping a long crawl could lose all the progress you were trying to save. The engine now writes the checkpoint **before** calling `cancel_scope.cancel()`, so a force-stop always preserves the latest pending state. By @voidborne-d in [#230](https://github.com/D4Vinci/Scrapling/pull/230).


_🙏 Special thanks to the community for all the continuous testing and feedback_

---

<div style="text-align: center;">
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
  <br />
  <br />
</div>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.5` · 2026-04-07 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
