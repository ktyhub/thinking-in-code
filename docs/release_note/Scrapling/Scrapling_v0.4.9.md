---
title: "Scrapling v0.4.9"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.9"
version: "v0.4.9"
published: "2026-06-07"
type: "patch"
lang: "en"
summary: "A maintenance update packed with community-reported fixes 🛠️"
---

# Scrapling v0.4.9

**A maintenance update packed with community-reported fixes 🛠️**

> [!NOTE]
> **[Follow us on X for daily tips and tricks](https://x.com/Scrapling_dev)**

## 🚀 New Stuff and quality of life changes

- **Updated all browsers and fingerprints**. Run `scrapling install --force` after updating to refresh them.
- **Added a `--version` flag to the CLI** by @ETM-Code in [#303](https://github.com/D4Vinci/Scrapling/pull/303) (Solves [#299](https://github.com/D4Vinci/Scrapling/issues/299))

## 🐛 Bug Fixes

- **Fixed the session-level `proxy` argument being silently ignored in HTTP sessions**, which could leak your real IP (Solves [#295](https://github.com/D4Vinci/Scrapling/issues/295)). Note that mixing a session-level `proxy` with a per-request `proxies` argument (or vice versa) now raises an error instead of one being silently dropped.
- **Fixed browser navigations failing when combining `init_script` with `user_data_dir`** (Solves [#294](https://github.com/D4Vinci/Scrapling/issues/294)).
- **Fixed encoding detection when websites quote the charset value in the `Content-Type` header** by @Bortlesboat in [#323](https://github.com/D4Vinci/Scrapling/pull/323).
- **Fixed an `IndexError` in adaptive element relocation when `auto_save` is enabled** by @Mubashirrrr in [#340](https://github.com/D4Vinci/Scrapling/pull/340).
- **Fixed spiders' checkpoint and cache saving crashing on Windows** by @MrStarkEG in [#344](https://github.com/D4Vinci/Scrapling/pull/344).
- **Fixed incorrect similarity scoring in `find_similar` for elements with mismatched attribute counts** (Solves [#322](https://github.com/D4Vinci/Scrapling/issues/322)).

## Docs

- **Clarified that the default installation includes the parser engine only**, and the fetchers/spiders need the extras (Solves [#343](https://github.com/D4Vinci/Scrapling/issues/343)).
- **Fixed the Docker image name in the remaining examples** by @evanclan in [#315](https://github.com/D4Vinci/Scrapling/pull/315).
- **Fixed a broken link in the contribution guide** by @Bortlesboat in [#320](https://github.com/D4Vinci/Scrapling/pull/320).

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

### Big shoutout to our Platinum Sponsors

<div style="text-align: center;">
  <a href="https://coldproxy.com/" target="_blank" title="Residential, IPv6 & Datacenter Proxies for Web Scraping">
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
  <a href="https://9proxy.com/pricing?tab=traffic&utm_source=Github&utm_campaign=D4vinci" target="_blank" title="Top-Tier Residential Proxy Solution for the Highest Success Rate">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/9proxy.jpg" width="240" height="100">
  </a>
  <a href="https://go.nodemaven.com/scrapling" target="_blank" title="Proxies with the Highest IP Scores">
    <img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/NodeMaven.png" width="240" height="100">
  </a>
</div>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.9` · 2026-06-07 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
