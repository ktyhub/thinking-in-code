---
title: "Scrapling v0.4.3"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.3"
version: "v0.4.3"
published: "2026-03-30"
type: "patch"
lang: "en"
summary: "A new update with many important changes 🎉"
---

# Scrapling v0.4.3

**A new update with many important changes 🎉**

## 🚀 New Stuff and quality of life changes
- **Added a new MCP tool** to open a persistent normal/stealthy browser to keep using it with the rest of the tools, and another new tool to close it. ([Examples](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html?h=Using+Persistent+Sessions#examples))
- **Added a new MCP tool** to list all existing browser sessions. Aimed to be used with the new tools.
- **Added a new option to browser sessions** to automatically collect all background requests that happen during a request (Solves [#159](https://github.com/D4Vinci/Scrapling/pull/159)) [[Examples](https://scrapling.readthedocs.io/en/latest/fetching/dynamic.html#capturing-xhrfetch-requests)].
- **Added a new sanitizer** to protect the MCP server from common Prompt Injection attacks by removing hidden/invisible content.
- **Added a new commandline option** called `--ai-targeted` to the Web Scraping commands to make content targeted to AI and safe against common Prompt Injection attacks like the MCP server.
- **Added a new option to browser sessions** called `executable_path` to allow setting a custom browser path (Solves [#202](https://github.com/D4Vinci/Scrapling/pull/202))
- **Refactored** the MCP server code to be easily maintained and unified all tools to be async.
- **Refactored** the CLI commands code to be easily maintained and shorter by 210 lines.


## 🐛 Bug Fixes
- A fix to preserve HTTP method across retries in spider session by @karesansui-u in [#201](https://github.com/D4Vinci/Scrapling/pull/201)
- Added a max retry limit to getting page content to prevent infinite loop by @haosenwang1018 & @D4Vinci in [#197](https://github.com/D4Vinci/Scrapling/pull/197)
- Replace bare `raise` with `return False` in `_restore_from_checkpoint` by @haosenwang1018 in [#196](https://github.com/D4Vinci/Scrapling/pull/196)
- Replaced `get_all` with `getall` in `Texthandler` to match the Selector class.

## Coverage/tests improvement
- Added `_normalize_credentials` edge case coverage tests by @Bortlesboat in [#192](https://github.com/D4Vinci/Scrapling/pull/192)
- Added save/retrieve round-trip and core storage coverage tests by @haosenwang1018 in [#193](https://github.com/D4Vinci/Scrapling/pull/193)
- Added coverage for `TextHandler` regex paths and `TextHandlers.re()` by @haosenwang1018 in [#194](https://github.com/D4Vinci/Scrapling/pull/194)
- Added edge case tests for `filter`, `iterancestors`, and `find_similar` by @awanawana in [#200](https://github.com/D4Vinci/Scrapling/pull/200)

## Agent Skill improvement
- Fixed broken markdown links in skill references by @yetval in [#204](https://github.com/D4Vinci/Scrapling/pull/204)
- Improved the skill structure to be more acceptable by [Clawhub](https://clawhub.ai/d4vinci/scrapling-official) validation.
- Forced the skill to use the `--ai-targeted` commandline option when scraping through commandline commands.

## Docs improvement
- Added Korean README translation by @greatsk55 in [#187](https://github.com/D4Vinci/Scrapling/pull/187)
- CJK Latin spacing fixes for the Chinese and Japanese READMEs.
- Fixed broken links from the old website design.


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

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.3` · 2026-03-30 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
