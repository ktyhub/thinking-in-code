---
title: "Scrapling v0.4.13"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.13"
version: "v0.4.13"
published: "2026-08-09"
type: "patch"
lang: "en"
summary: "A new update bringing feed spiders and a smarter MCP server 🎉"
---

# Scrapling v0.4.13

**A new update bringing feed spiders and a smarter MCP server 🎉**

> [!NOTE]
> - **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**
> - This will most likely be the last update before the major updates in v0.5

## 🚀 New Stuff and quality of life changes

- **New feed spider templates**. `XMLFeedSpider` iterates over the nodes of any XML feed (RSS, Atom, product feeds, etc.), and `CSVFeedSpider` iterates over CSV rows as dictionaries. Both decompress gzipped feeds automatically. (Check the [docs](https://scrapling.readthedocs.io/en/latest/spiders/generic-templates.html))
  ```python
  from scrapling.spiders import XMLFeedSpider

  class RSSSpider(XMLFeedSpider):
      name = "rss"
      start_urls = ["https://example.com/feed.xml"]

      async def parse_node(self, response, node):
          yield {"title": node.findtext("title"), "link": node.findtext("link")}

  result = RSSSpider().start()
  ```
- **Upgraded the MCP server to MCP SDK v2 and made it smarter**. The server now ships instructions that teach your AI agent how to use the tools efficiently; every tool declares annotations so clients like Claude Code can auto-approve the read-only ones; tool descriptions are leaner to save tokens; and the server advertises its version and logo to MCP clients. (Check the [docs](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html))
- **Added a `scrapling-mcp` command** that maps directly to `scrapling mcp`, so registering Scrapling with MCP clients and registries that expect a single command is now a one-liner.
- **Unpinned Playwright/Patchright and browser versions**. The generated browser User-Agent now always matches the exact Chromium version your installed Playwright/Patchright drives, so Scrapling no longer pins their versions and you can upgrade them freely. Run `scrapling install --force` after updating to refresh the browsers.

## 🐛 Bug Fixes

- **Fixed importing Scrapling crashing with a `browserforge` ValueError** when the fingerprints data package lags behind the browser versions. (Fixes [#394](https://github.com/D4Vinci/Scrapling/issues/394), [#396](https://github.com/D4Vinci/Scrapling/issues/396), and [#400](https://github.com/D4Vinci/Scrapling/issues/400))
- **Fixed the MCP bulk browser tools mis-sizing their page pools**, which made `bulk_fetch` fail on batches of more than 50 URLs and `bulk_stealthy_fetch` fetch all URLs through a single tab, by @Yigtwxx in [#393](https://github.com/D4Vinci/Scrapling/pull/393).

## Project

- **New [AI Contribution Policy](https://github.com/D4Vinci/Scrapling/blob/main/AI_POLICY.md)**: AI-assisted contributions are welcome but must be disclosed in the PR or issue; submissions that look like undisclosed AI output get labeled and closed.

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

# Big shoutout to our Platinum Sponsors

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

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.13` · 2026-08-09 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.13)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
