---
title: "Scrapling v0.5.1"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.5.1"
version: "v0.5.1"
published: "2026-11-04"
type: "patch"
lang: "en"
summary: "Small version bump, big browser upgrade! This version lets AI agents follow motion and control drag and drop, adds dedicated remote browser sessions, and brings fixes across parsing, spiders, proxies, and the shell 🚀"
---

# Scrapling v0.5.1

**Small version bump, big browser upgrade! This version lets AI agents follow motion and control drag and drop, adds dedicated remote browser sessions, and brings fixes across parsing, spiders, proxies, and the shell 🚀**

**With this update, we extend the limits of current AI models** 🔥 

> [!NOTE]
> **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**

> [!WARNING]
> **This release introduces breaking changes to remote browser connections. Connecting to remote browsers now requires a new browser session class. Check the [remote-session migration guide](https://scrapling.readthedocs.io/en/latest/migrating-to-v0.5.html#move-cdp-connections-to-remote-sessions) before updating.**

## 🚀 New Stuff and quality of life changes

- **AI agents can now follow motion and take finer control of the mouse** (Check the [docs](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html)):

    - **Watch the page in motion**: record a short video and share it as a sequence of frames with timestamps to help the agent understand animations, moving controls, and changes that a single screenshot can miss. Pair this with the existing ability to chain actions!
    - **Drag, inspect, adjust, and drop**: hold a mouse button, move an item or slider, inspect the page while still holding it, then adjust and release. Supports left, right, and middle buttons.
    - **Reuse a logged-in remote browser** or start with a separate browser context, so the agent can choose the right session for the job.
    - **Spend fewer tokens on tool descriptions** with shorter text and less repeated guidance.

- **Dedicated remote browser sessions with control over login reuse**. `RemoteSession` and `AsyncRemoteSession` connect to an existing Chromium browser through an HTTP or WebSocket CDP endpoint. They support the usual stealth session features, including Cloudflare solving. Both classes are also available in the interactive shell. (Check the [docs](https://scrapling.readthedocs.io/en/latest/fetching/stealthy.html#3-cdp-connection))

    ```python
    from scrapling.fetchers import RemoteSession

    with RemoteSession(cdp_url="http://localhost:9222", new_context=False) as session:
        page = session.fetch("https://example.com")
    ```

    - `new_context=False` reuses the browser's existing default context and login state. Its context settings stay in use, and its existing tabs remain open when Scrapling disconnects.
    - The default, `new_context=True`, creates a separate context and closes it when the session ends. Scrapling uses its own tabs in either mode.

- **Choose your spider's log file encoding** with `log_file_encoding="utf-8"` or another encoding. The default, `None`, keeps Python's default encoding. (Check the [docs](https://scrapling.readthedocs.io/en/latest/spiders/advanced.html#logging))

## 🐛 Bug Fixes

- **XPath expressions now return their values correctly**, including `string()`, `count()`, and `boolean()`. Empty strings, zero, and false remain available through the usual selector API, by @jayhemnani9910 in [#552](https://github.com/D4Vinci/Scrapling/pull/552).
- **Fixed parsing of HTML with no root element**, including whitespace-only, comment-only, and doctype-only input, by @rushilnimbalker250 in [#536](https://github.com/D4Vinci/Scrapling/pull/536).
- **Fixed `find_similar(similarity_threshold=0)` when the reference has no attributes to compare**, by @Master-Norna in [#539](https://github.com/D4Vinci/Scrapling/pull/539).

- **Fixed duplicate robots.txt fetches when concurrent requests reach the same domain**, by @RayenMlayeh in [#538](https://github.com/D4Vinci/Scrapling/pull/538).
- **Fixed temporary-file collisions during concurrent development-cache writes**, by @xixihaha-ha in [#546](https://github.com/D4Vinci/Scrapling/pull/546).
- **Malformed links no longer stop extraction of valid links on the same page**, by @dajiaohuang in [#548](https://github.com/D4Vinci/Scrapling/pull/548).
- **Fixed CSV feeds that use carriage returns as row separators**, while preserving line breaks inside quoted fields, by @xunguangzlj-cloud in [#551](https://github.com/D4Vinci/Scrapling/pull/551).
- **Truncated or damaged gzip feeds now follow the normal warning-and-skip path** in sitemap, XML-feed, and CSV-feed spiders, by @cangen185-sudo in [#522](https://github.com/D4Vinci/Scrapling/pull/522).

- **Fixed browser proxy authentication with percent-encoded usernames and passwords**, by @kevin9327 in [#545](https://github.com/D4Vinci/Scrapling/pull/545).
- **Improved browser cleanup when session setup or context closing fails**, releasing owned resources while keeping borrowed remote contexts open.
- **Stopped shell and HTTP CLI cookie parsing from dropping browser cookie values with spaces or quotes**, including the cookies that follow them, by @waw666waw666 in [#541](https://github.com/D4Vinci/Scrapling/pull/541). Fixes [#540](https://github.com/D4Vinci/Scrapling/issues/540).
- **Curl conversion now accepts `-L` and `--location`**, keeping the existing redirect behavior, by @jayhemnani9910 in [#554](https://github.com/D4Vinci/Scrapling/pull/554).
- **Fixed `scrapling extract fetch --ai-targeted` not enabling ad blocking as documented**, by @postoso in [#527](https://github.com/D4Vinci/Scrapling/pull/527).

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

### Big shoutout to our Platinum Sponsors

<div style="text-align: center;">
  <a href="https://go.nodemaven.com/scraplingoctober" target="_blank" title="Proxies with the Highest IP Scores">
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
  <a href="https://proxylane.dev/scrapling?utm_source=scrapling&utm_medium=affiliate&utm_campaign=scrapling_platinum_202609&utm_content=github_readme" target="_blank" title="90% fewer CAPTCHAs on your Scrapling runs.">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/proxylane.png" width="240" height="100">
  </a>
  <a href="https://www.lundproxy.com/unlimited-residential-bandwidth.html?utm_source=github&utm_medium=sponsorship&utm_campaign=scrapling&utm_content=banner" target="_blank" title="Unlimited residential traffic, sized only by bandwidth.">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/lundproxy.png" width="240" height="100">
  </a>
  <a href="https://resolvr.com/?ref=scrapling" target="_blank" title="Captcha and Browser challenges, solved on real devices loading the page.">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/resolvr.jpg" width="240" height="100">
  </a>
  <a href="https://nonecap.com/solutions/scrapling/?ref=scrapling" target="_blank" title="hCaptcha solver as an API.">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/Nonecap.png" width="240" height="100">
  </a>
  <a href="https://dataimpulse.com/?utm_source=website&utm_medium=github_readme&utm_campaign=scrapling_platinum" target="_blank" title="Buy Pay-as-you-go proxies from $1/GB">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/DataImpulse_Platinum.png" width="240" height="100">
  </a>
</div>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.5.1` · 2026-11-04 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.5.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
