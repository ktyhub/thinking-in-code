---
title: "Scrapling v0.4"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4"
version: "v0.4"
published: "2026-02-15"
type: "minor"
lang: "en"
summary: "The biggest release of Scrapling yet — introducing the Spider framework, proxy rotation, and major parser improvements"
---

# Scrapling v0.4

**The biggest release of Scrapling yet — introducing the Spider framework, proxy rotation, and major parser improvements**

This release brings a fully async spider/crawling framework, intelligent proxy management, and significant API changes that make Scrapling more powerful and consistent. Please review the breaking changes section carefully before upgrading.

🕷️ Spider Framework
============

A new async crawling framework built on top of `anyio` for structured, large-scale scraping:

```python
from scrapling.spiders import Spider, Response

class MySpider(Spider):
  name = "demo"
  start_urls = ["https://example.com/"]

  async def parse(self, response: Response):
      for item in response.css('.product'):
          yield {"title": item.css('h2::text').get()}

MySpider().start()
```
-  **Scrapy-like Spider API**: Define spiders with `start_urls`, async `parse` callbacks, `Request`/`Response` objects, and priority queue.
- **Concurrent Crawling**: Configurable concurrency limits, per-domain throttling, and download delays.
- **Multi-Session Support**: Unified interface for HTTP requests, and stealthy headless browsers in a single spider - route requests to different sessions by ID. Supports lazy session initialization.
- **Pause & Resume**: Checkpoint-based crawl persistence. Press Ctrl+C to gracefully shut down; then restart to resume from where you left off.
- **Streaming Mode**: Stream scraped items as they arrive via `async for item in spider.stream()` with real-time stats - ideal for UI, pipelines, and long-running crawls.
- **Blocked Request Detection**: Automatic detection and retry of blocked requests with customizable logic.
- **Built-in Export**: Export results through hooks and your own pipeline or the built-in JSON/JSONL with `result.items.to_json()` / `result.items.to_jsonl()` respectively.
- **Lifecycle hooks**: `on_start()`, `on_close()`, `on_error()`, `on_scraped_item()`, and more hooks for full control over the crawl lifecycle.
- **Detailed crawl stats**: track requests, responses, bytes, status codes, proxies, per-domain/session breakdowns, log level counts, and more.
- **uvloop support**: Pass `use_uvloop=True` to `spider.start()` for faster async execution when available.

A new section has been added to the website with the Full details. Click [here](https://scrapling.readthedocs.io/en/latest/spiders/architecture.html)

🔄 Proxy Rotation
============

* New `ProxyRotator` class with thread-safe rotation. Works with all fetchers and sessions:
  ```python
  from scrapling import ProxyRotator
  rotator = ProxyRotator(["http://proxy1:8080", "http://proxy2:8080"])
  Fetcher.get(url, proxy_rotator=rotator)
  ```
* **Custom rotation strategies**: Make your own proxy rotation logic
* **Per-request proxy override**: Pass `proxy=` to any individual `get()`/`post()`/`fetch()` call to override the session proxy for that request.

🌐 Browser Fetcher Improvements
============

* **Domain blocking**: New `blocked_domains` parameter on `DynamicFetcher`/`StealthyFetcher` to block requests to specific domains (subdomains matched automatically).
* **Automatic retries**: Browser fetchers now retry on failure with `retries` (default: 3) and `retry_delay` (default: 1s) parameters. Includes proxy-aware error detection.
* **Response metadata**: `Response.meta` dict automatically stores the proxy used, and merges request metadata.
* **Response.follow()**: Create follow-up `Request` objects with automatic referer flow, designed for the spider system.
* **No autoplay**: Browser sessions are now blocking autoplay content, which caused issues before.
* **Speed**: Improved stealth and speed by adjusting browser flags.

🔧 Bug Fixes & Improvements
============
- **Parser optimization**: Optimized the parser for repeated operations, improving performance.
- **Errored pages**: Fixed a bug that caused the browser to not close when pages gave errors.
- **Empty body**: Handle responses with empty body.
- **Playwright loop**: Solving an issue with leaving the Playwright loop open when CDP connection fails
- **Type safety**: Fixed all mypy errors and added type hints across untyped function bodies. Added mypy and pyright to the CI workflow.

⚠️ Breaking Changes
============

* **`css_first`/`xpath_first` removed**: Use `css('.selector').first`, `css('.selector')[0]`, or `css('.selector').get()` instead.
* **All selection now returns `Selectors`**: `css('::text')`, `xpath('//text()')`, `css('::attr(href)')`, and `xpath('//@href')` now return `Selectors` (wrapping text nodes in `Selector` objects with `tag="#text"`) instead of `TextHandlers`. This makes the API consistent across all selection methods and the type hints.
* **`Response.body` is always `bytes`**: Previously could be `str` or `bytes`, now always returns `bytes`.
* **`get()`/`getall()` behavior**: On `Selector`: `get()` returns `TextHandler` (serialized HTML or text value), `getall()` returns `TextHandlers`. Aliases: `extract_first = get`, `extract = getall`. Old `get_all()` on `Selectors` is removed.
* **`Selectors.first`/`.last`**: Safe accessors that return `Selector | None` instead of raising `IndexError`.
* **Internal constants renamed**: `DEFAULT_FLAGS` → `DEFAULT_ARGS`, `DEFAULT_STEALTH_FLAGS` → `STEALTH_ARGS`, `HARMFUL_DEFAULT_ARGS` → `HARMFUL_ARGS`, `DEFAULT_DISABLED_RESOURCES` → `EXTRA_RESOURCES`.

🔨 Other Changes
============

* **Dependency changes**: Replaced `tldextract` with `tld`, removed internal `_html_utils.py` in favor of `w3lib.html.replace_entities`, added `typing_extensions` as a hard requirement.
* **Docs overhaul**: Full switch from MkDocs to Zensical, new spider documentation section, updated all existing pages, and added new API references.

_🙏 Special thanks to our [Discord community](https://discord.gg/EMgGbDceNQ) for all the continuous testing and feedback_

---

### Big shoutout to our biggest Sponsors
<a href="https://www.scrapeless.com/en?utm_source=official&utm_term=scrapling" target="_blank" title="Effortless Web Scraping Toolkit for Business and Developers"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/scrapeless.jpg"></a> <a href="https://www.thordata.com/?ls=github&lk=github" target="_blank" title="Unblockable proxies and scraping infrastructure, delivering real-time, reliable web data to power AI models and workflows."><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/thordata.jpg"></a><a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi is your Swiss Quality Proxy Provider, starting at $0.49/GB"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png"></a><a href="https://serpapi.com/?utm_source=scrapling" target="_blank" title="Scrape Google and other search engines with SerpApi"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SerpApi.png"></a><a href="https://visit.decodo.com/Dy6W0b" target="_blank" title="Try the Most Efficient Residential Proxies for Free"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/decodo.png"></a><a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky delivers cutting-edge VPS hosting."><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png"></a><a href="https://hasdata.com/?utm_source=github&utm_medium=banner&utm_campaign=D4Vinci" target="_blank" title="The web scraping service that actually beats anti-bot systems!"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/hasdata.png"></a><a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="Bot Protection Bypass API for Akamai, DataDome, Incapsula & Kasada"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png"></a>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4` · 2026-02-15 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
