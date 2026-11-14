---
title: "Scrapling v0.4.7"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.7"
version: "v0.4.7"
published: "2026-04-17"
type: "patch"
lang: "en"
summary: "A focused update bringing eyes to your AI agents 📸"
---

# Scrapling v0.4.7

**A focused update bringing eyes to your AI agents 📸**

> [!NOTE]
> **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**

## 🚀 New Stuff and quality of life changes

- **Added a `screenshot` MCP tool** that captures a page and returns it as a real MCP `ImageContent` block so the model can actually see it. The tool requires an open browser session, so you call `open_session` first (either `dynamic` or `stealthy`) and pass the `session_id` here. Supports PNG and JPEG, full-page captures, JPEG quality, and the usual readiness controls (`wait`, `wait_selector`, `network_idle`, `timeout`). (implements [#244](https://github.com/D4Vinci/Scrapling/issues/244))
- **Added a custom `session_id` parameter to `open_session`** so you can name sessions meaningfully (`"search"`, `"checkout"`) instead of the random 12-character hex default. By @hauntedhost in [#243](https://github.com/D4Vinci/Scrapling/pull/243)

## 🐛 Bug Fixes

- **Fixed `FetcherSession` state corruption and a lazy session close crash**. By @yetval in [#245](https://github.com/D4Vinci/Scrapling/pull/245)
- **Fixed `TypeError: Session.request() got an unexpected keyword argument 'block_ads'`** when using the CLI's `--ai-targeted` flag with HTTP commands. By @voidborne-d in [#249](https://github.com/D4Vinci/Scrapling/pull/249) (Fixes [#247](https://github.com/D4Vinci/Scrapling/issues/247))

## Translations

- **Added a Brazilian Portuguese README translation** By @rgomids in [#250](https://github.com/D4Vinci/Scrapling/pull/250)

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

### Big shoutout to our Platinum Sponsors

<a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="Bot Protection Bypass API for Akamai, DataDome, Incapsula & Kasada">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png" width="240" height="100">
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
<a href="http://mangoproxy.com/?utm_source=D4Vinci&utm_medium=GitHub&utm_campaign=D4Vinci" target="_blank" title="Proxies You Can Rely On: Residential, Server, and Mobile">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/MangoProxy.png" width="240" height="100">
</a>
<a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="Scalable Solutions for Web Data Access">
<img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png" width="240" height="100">
</a>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.7` · 2026-04-17 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
