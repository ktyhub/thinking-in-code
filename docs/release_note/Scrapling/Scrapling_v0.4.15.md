---
title: "Scrapling v0.4.15"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.15"
version: "v0.4.15"
published: "2026-08-23"
type: "patch"
lang: "en"
summary: "One of the biggest releases this year: a reworked MCP server, RAG-ready Markdown in one line, an improved Cloudflare solver, and browser tabs that stay open for automation 🚀"
---

# Scrapling v0.4.15

**One of the biggest releases this year: a reworked MCP server, RAG-ready Markdown in one line, an improved Cloudflare solver, and browser tabs that stay open for automation 🚀**

> [!NOTE]
> **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**

> [!WARNING]
> **This release introduces breaking changes to the MCP server. Check the [breaking changes](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html#breaking-changes) section before updating.**

## 🚀 New Stuff and quality of life changes

- **Browser tabs now stay open and get reused across requests** (Check the [docs](https://scrapling.readthedocs.io/en/latest/fetching/dynamic.html#session-management)):
    - All browser sessions keep their tabs after a request, and the next request reuses a free tab instead of opening a new one.
    - Every request re-applies its own settings (timeouts, headers, resource blocking) to the tab it gets, so nothing leaks between requests.
    - Tabs that hit an error are closed and replaced, and the new `close_pages()` method closes every open tab.
    - The page you fetched stays loaded, so a `page_setup` function on the next request runs on it before navigating away. That's the building block for chaining automation across requests.
- **Turn any page into clean, LLM-ready Markdown with `Response.markdown()`** (Check the [docs](https://scrapling.readthedocs.io/en/latest/ai/building-rag-systems.html)):
    ```python
    from scrapling.fetchers import Fetcher

    markdown = Fetcher.get("https://example.com").markdown(main_content_only=True)
    ```
    - Scripts, styles, and hidden prompt-injection content are always stripped first, the same as the cleaning the MCP server does.
    - Pass `css_selector` to convert only the elements you need.
    - Available through the new `rag` extra (`pip install "scrapling[rag]"`), which the `ai`/`shell`/`all` extras include too.
- **New `SiteToMarkdownSpider` template to crawl a whole website into a Markdown corpus for RAG pipelines** (Check the [docs](https://scrapling.readthedocs.io/en/latest/ai/building-rag-systems.html)):
    ```python
    from scrapling.spiders import SiteToMarkdownSpider

    class DocsSpider(SiteToMarkdownSpider):
        name = "docs"
        start_urls = ["https://example.com/docs/"]
        allowed_domains = {"example.com"}
        output_dir = "docs_markdown"

    result = DocsSpider().start()
    result.items.to_jsonl("docs.jsonl")
    ```
    - Yields one item per page with `url`/`title`/`markdown`, and the optional `output_dir` writes one Markdown file per page.
    - `max_pages` caps the crawl, and since it builds on `CrawlSpider`, overriding `rules()` gives you full control over which links get followed.
- **The MCP server is reworked (breaking)** (Check the [breaking changes](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html#breaking-changes) and the [docs](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html)):
    - The 13 tools are now split into two modes: one-shot tools (`fetch`, `bulk_fetch`, `stealthy_fetch`, `bulk_stealthy_fetch`) that always launch their own browser and show their real defaults, and session tools that work through a session opened once.
    - The new `session_fetch` tool fetches through a browser session, while `open_session` now holds the browser-level settings only and returns the session's effective settings for the AI agent.
    - The `get` tool is renamed to `make_request`, and it now supports any HTTP method.
    - The new `open_request_session` and `session_make_request` tools give the AI persistent HTTP sessions that keep cookies and the browser fingerprint between requests.
    - This also ends fetches resetting the session's settings, first fixed by @Yigtwxx in [#418](https://github.com/D4Vinci/Scrapling/pull/418).
- **The MCP server's HTTP transport now requires authentication and binds to localhost by default (breaking)** by @yamantaka-singh in [#414](https://github.com/D4Vinci/Scrapling/pull/414) (Fixes [#413](https://github.com/D4Vinci/Scrapling/issues/413), check the [docs](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html#authentication)):
    - Pass `--auth-token` (or the `SCRAPLING_MCP_AUTH_TOKEN` environment variable) to require a bearer token, or `--no-auth` to serve it unauthenticated on purpose.
    - Pass `--host 0.0.0.0` to accept connections from the network.

## 🐛 Bug Fixes

- **Cloudflare Turnstile/Interstitial solving now works regardless of the browser locale, and no longer loops forever on interactive challenges in headless mode**. Stealth pages also stop crashing mid-solve, with contributions by @subediparas5 in [#412](https://github.com/D4Vinci/Scrapling/pull/412). (Fixes [#411](https://github.com/D4Vinci/Scrapling/issues/411) and [#422](https://github.com/D4Vinci/Scrapling/issues/422))
- **Fixed `find`/`find_all` with `class_` silently missing multi-class elements** by @yetval in [#410](https://github.com/D4Vinci/Scrapling/pull/410), **and blank `class_` values and unescaped CSS string values** by @yamantaka-singh in [#417](https://github.com/D4Vinci/Scrapling/pull/417).
- **Fixed cached responses in `development_mode` losing the request meta on replay** by @Yigtwxx in [#419](https://github.com/D4Vinci/Scrapling/pull/419).
- **Fixed HTTP requests with `retries` below 1 failing without sending the request** by @Yigtwxx in [#420](https://github.com/D4Vinci/Scrapling/pull/420).

## Docs

- **The website sections are restructured**: a new "Using with AI" section holds the MCP server, the new [Agent skill](https://scrapling.readthedocs.io/en/latest/ai/agent-skill.html) page, and the [Building RAG systems](https://scrapling.readthedocs.io/en/latest/ai/building-rag-systems.html) guide, and the BeautifulSoup migration guide moved next to the Scrapy integration under "Integrations and migrations".
- **Added a [CHANGELOG.md](https://github.com/D4Vinci/Scrapling/blob/main/CHANGELOG.md)** to the repository with the notes of every release so far.

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

### Big shoutout to our Platinum Sponsors
<div style="text-align: center;">
  <a href="https://go.nodemaven.com/scraplingaugust" target="_blank" title="Proxies with the Highest IP Scores">
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
  <a href="https://birdproxies.com/t/scrapling" target="_blank" title="At Bird Proxies, we eliminate your pains such as banned IPs, geo restriction, and high costs so you can focus on your work.">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/BirdProxies.jpg" width="240" height="100">
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
  <a href="https://www.coreclaw.com/?utm_source=github&utm_medium=cpc&utm_campaign=scraping&utm_term=&utm_id=scraping" target="_blank" title="Real-Time Public Data, Ready to Use">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/CoreClaw.jpg" width="240" height="100">
  </a>
  <a href="https://niuproxy.com/?utm_source=scrapling&utm_medium=scrapling&ref=scrapling" target="_blank" title="Affordable Residential in 190+ Countries">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/niuproxy.png" width="240" height="100">
  </a>
</div>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.15` · 2026-08-23 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.15)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
