---
title: "Scrapling v0.5"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.5"
version: "v0.5"
published: "2026-10-17"
type: "minor"
lang: "en"
summary: "Scrapling v0.5 upgrades almost everything: fetching, parsing, spiders, browser automation, AI tools, and docs in ten languages 🚀"
---

# Scrapling v0.5

**Scrapling v0.5 upgrades almost everything: fetching, parsing, spiders, browser automation, AI tools, and docs in ten languages 🚀**

> [!NOTE]
> **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**

> [!WARNING]
> **This release introduces a lot of breaking changes that don't fit here. Check the [Migrating to v0.5 guide](https://scrapling.readthedocs.io/en/latest/migrating-to-v0.5.html) before updating.**

## 🚀 New Stuff and quality of life changes

- **A much more capable MCP server for AI agents that can solve almost any CAPTCHA** (Check the [docs](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html)):

    - **Complete browser workflows**: fill forms, click, hover, scroll, use the keyboard, handle dialogs, and wait for results in one ordered sequence. Supports different field types and slower interactions, with actions stopping at the first error.
    - **Read and search the current page without reloading it**: extract HTML, Markdown, or text from a whole page or one element. Searchable page snapshots show element roles, names, and positions, with focused views that retain the surrounding context.
    - **Run custom JavaScript and take focused screenshots**: execute scripts, including async work, with access to the page's own JavaScript. Capture individual elements, the viewport, or the full page as PNG or JPEG.
    - **Inspect network activity and reuse logins**: examine recorded requests and responses, save and restore browser login state, and interact with elements inside open or closed Shadow DOM. Read recorded traffic before closing the session.
    - **Use fewer tokens and get clearer errors**: leaner tool descriptions and shared guidance reduce repeated text, while browser and request failures reach agents with useful error messages.

- **See the requests behind the page**. Enable `record_requests=True` to record completed traffic across loads, actions, and tabs, then inspect saved responses without sending requests again. (Check the [docs](https://scrapling.readthedocs.io/en/latest/fetching/stealthy.html#network-history))

    ```python
    from scrapling.fetchers import StealthySession

    with StealthySession(record_requests=True) as session:
        session.fetch("https://example.com", network_idle=True)
        for response in session.network.search(url_pattern=r"/api/", limit=None):
            print(response.url, response.status, response.body)
    ```

    - Filter by URL, method, resource type, or status; retrieve one response by ID. Inspect headers, sent data, API responses, HTTP errors, and redirects through the usual `Response` API.
    - Retains supported text bodies with size limits, plus metadata and a reason when a body cannot be saved. The default limit is 1,000 requests. Works with sync and async sessions; saved Python history stays readable after close.

- **Save a login once and reuse it across runs**. `save_state(path)` and `load_state(path)` save cookies, local storage, and IndexedDB in Playwright-compatible JSON. Both sync and async browser sessions support them. (Check the [docs](https://scrapling.readthedocs.io/en/latest/fetching/stealthy.html#save-and-load-session-state))
    - Load state before fetching or reloading a page. Requires a started, shared browser context without `proxy_rotator`; tabs, browser settings, and `sessionStorage` are not saved.

- **Extract open Shadow DOM with `pierce_shadow=True`**, then use CSS or XPath as usual. Available in browser fetchers, sessions, and the CLI's `--pierce-shadow` option. Preserves slot content without changing the live page. HTML capture excludes closed roots and iframe documents. (Check the [docs](https://scrapling.readthedocs.io/en/latest/fetching/stealthy.html#shadow-dom))

- **Choose how your spider explores a site**. `CrawlSpider` and its subclasses, including `ContentSpider`, support `crawl_strategy="bfs"` for oldest-first or `"dfs"` for newest-first scheduling. Priority still wins, and concurrent pages can finish in a different order. (Check the [docs](https://scrapling.readthedocs.io/en/latest/spiders/generic-templates.html#crawl-order))

## 🐛 Bug Fixes

- **Improved Cloudflare solving** with delayed-widget detection, fewer unnecessary waits, and bounded passive-challenge and hidden-frame retry loops. Fixes [#468](https://github.com/D4Vinci/Scrapling/issues/468) and [#509](https://github.com/D4Vinci/Scrapling/issues/509).
- **Fixed browser startup from an elevated Windows shell**. Fixes [#463](https://github.com/D4Vinci/Scrapling/issues/463).
- **Kept the built-in stealth flags when adding custom browser flags** by @alkaz-nodemaven in [#430](https://github.com/D4Vinci/Scrapling/pull/430).
- **Improved charset parsing for browser responses**, including declarations with different letter case, spaces, or quoted values.
- **Stopped logging the absence of a Cloudflare challenge as an error** when no challenge needs to be solved. Fixes [#459](https://github.com/D4Vinci/Scrapling/issues/459).

- **Corrected request fingerprints** for query parameters by @yetval in [#448](https://github.com/D4Vinci/Scrapling/pull/448), empty or falsy JSON bodies by @ac1982 in [#480](https://github.com/D4Vinci/Scrapling/pull/480), and header insertion order by @SarwadnyaMahajan in [#466](https://github.com/D4Vinci/Scrapling/pull/466).
- **Fixed request data leaking into followed links**, including stale body-related headers, by @yetval in [#462](https://github.com/D4Vinci/Scrapling/pull/462).
- **Prevented blocked responses from being stored as successful development-cache entries** by @Kuang-xianxin in [#446](https://github.com/D4Vinci/Scrapling/pull/446).
- **Preserved checkpoint files when a crawl fails with an exception** by @SulimanAbdulrazzaq in [#486](https://github.com/D4Vinci/Scrapling/pull/486).
- **Corrected robots.txt failure handling** so failed lookups are not cached as permission to crawl, by @prateekraawat1 in [#443](https://github.com/D4Vinci/Scrapling/pull/443).
- **Fixed link extraction with restricted selectors**, including empty matches and selectors that target the link element itself, by @SulimanAbdulrazzaq in [#452](https://github.com/D4Vinci/Scrapling/pull/452) and [#483](https://github.com/D4Vinci/Scrapling/pull/483).
- **Fixed sitemap callback routing** by @SulimanAbdulrazzaq in [#458](https://github.com/D4Vinci/Scrapling/pull/458), **and XML parsing with comments or processing instructions** by @sup3dev in [#450](https://github.com/D4Vinci/Scrapling/pull/450).
- **Handled leading byte-order marks in robots.txt and CSV feeds** by @SulimanAbdulrazzaq in [#453](https://github.com/D4Vinci/Scrapling/pull/453).
- **Fixed `stealthy_headers` handling in spider HTTP sessions**, passing the option to the session instead of directly to `curl_cffi`, by @Yigtwxx in [#475](https://github.com/D4Vinci/Scrapling/pull/475).

- **Fixed dictionary form encoding for list and tuple values**, while preserving request-body precedence and existing `None` handling, with contributions by @SulimanAbdulrazzaq in [#485](https://github.com/D4Vinci/Scrapling/pull/485).
- **Fixed case-insensitive merging of session and per-request HTTP headers** by @SulimanAbdulrazzaq in [#487](https://github.com/D4Vinci/Scrapling/pull/487).
- **Fixed CLI requests silently dropping empty or falsy JSON bodies** by @SulimanAbdulrazzaq in [#484](https://github.com/D4Vinci/Scrapling/pull/484).
- **Made Markdown and text file exports consistently use UTF-8** and prevented conversion errors from truncating an existing output file, by @SulimanAbdulrazzaq in [#488](https://github.com/D4Vinci/Scrapling/pull/488).
- **Fixed `curl2fetcher()` handling of curl's user-agent and proxy options** by @SulimanAbdulrazzaq in [#490](https://github.com/D4Vinci/Scrapling/pull/490).

- **Fixed Markdown blocks running together** when several selected elements are converted through `Response.markdown()` or CLI extraction, with contributions by @Yigtwxx in [#432](https://github.com/D4Vinci/Scrapling/pull/432).
- **Fixed hidden-content cleaning for AI output** to keep visible content such as `opacity:0.95`, recognize more hidden styles, and remove hidden slots, with contributions by @Yigtwxx in [#460](https://github.com/D4Vinci/Scrapling/pull/460).
- **Fixed noise-tag removal stopping early around nested tags** by @Yigtwxx in [#474](https://github.com/D4Vinci/Scrapling/pull/474).
- **Fixed generated CSS and XPath selectors for the first of several same-tag siblings** by @yellow-dog-dog in [#495](https://github.com/D4Vinci/Scrapling/pull/495).
- **Resolved an lxml HTML parser deprecation warning** by @afsuyadi in [#493](https://github.com/D4Vinci/Scrapling/pull/493).

## Docs

- **The full website now speaks ten languages**: English, Arabic, Spanish, Brazilian Portuguese, French, German, Simplified Chinese, Japanese, Russian, and Korean. Guides, API references, tutorials, and the [changelog](https://scrapling.readthedocs.io/en/latest/changelog.html) are translated, with Arabic RTL support and language switches that keep your page and section.
- **Clearer guides, README examples, and setup steps**, covering checkpoint data, browser encodings, saved state, network history, Shadow DOM, and crawl order.
- **Updated the Agent Skill**, its examples, references, and downloadable archive for the current browser and MCP tools.
- **Moved the changelog to the website** and added access to each page's Markdown source.

## Project

- Refreshed Scrapling's logo, cover images, and website presentation.
- Expanded tests for browser actions, dialogs, extraction, screenshots, JavaScript, network recording, state files, Shadow DOM, and crawler fixes.
- Added a browser-test marker and separate browser, async, and parallel test runs. Improved Windows checkpoint and CSV test portability by @diegobravtraps-oss in [#457](https://github.com/D4Vinci/Scrapling/pull/457).
- Updated the shared multilingual documentation build setup and contribution guidance.

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

### Big shoutout to our Platinum Sponsors

<div style="text-align: center;">
  <a href="https://go.nodemaven.com/scraplingseptember" target="_blank" title="Proxies with the Highest IP Scores">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/NodeMaven.jpg" width="240" height="100">
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
  <a href="https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling" target="_blank" title="The #1 newsletter dedicated to Web Scraping">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TWSC.png" width="240" height="100">
  </a>
  <a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="Scalable Solutions for Web Data Access">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png" width="240" height="100">
  </a>
  <a href="https://byteful.com/?utm_source=github&utm_medium=github-sponsor&utm_campaign=scrapling_github_sponsor" target="_blank" title="Ethically sourced residential proxy infrastructure powering web scraping and AI agents">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/byteful.png" width="240" height="100">
  </a>
  <a href="https://proxylane.dev/?utm_source=scrapling&utm_medium=partnership&utm_campaign=scrapling_platinum_202609&utm_content=github_readme" target="_blank" title="28M+ clean residential IPs for browser automation. No Blocks. No CAPTCHAs. Pay-as-you-Go.">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/proxylane.png" width="240" height="100">
  </a>
  <a href="https://www.lundproxy.com/unlimited-residential-bandwidth.html?utm_source=github&utm_medium=sponsorship&utm_campaign=scrapling&utm_content=banner" target="_blank" title="Unlimited residential traffic, sized only by bandwidth.">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/lundproxy.png" width="240" height="100">
  </a>
  <a href="https://dataimpulse.com/?utm_source=website&utm_medium=github_readme&utm_campaign=scrapling_platinum" target="_blank" title="Buy Pay-as-you-go proxies from $1/GB">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/DataImpulse_Platinum.png" width="240" height="100">
  </a>
</div>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.5` · 2026-10-17 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
