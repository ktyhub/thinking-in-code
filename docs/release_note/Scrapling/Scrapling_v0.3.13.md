---
title: "Scrapling v0.3.13"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.3.13"
version: "v0.3.13"
published: "2026-01-01"
type: "patch"
lang: "en"
summary: "This is a big update with many improvements across many places, but also many breaking changes for good reasons. Please read the below before updating"
---

# Scrapling v0.3.13

**This is a big update with many improvements across many places, but also many breaking changes for good reasons. Please read the below before updating**

* For many reasons, we decided that from now on, we will stop using Camoufox entirely, and we might switch back to it in the future if its development continues. If you prefer to continue using Camoufox as before this release, there are instructions for that in this [section](https://scrapling.readthedocs.io/en/latest/fetching/stealthy/#using-camoufox-as-an-engine).

* Previously, we were using patchright in the stealth mode inside `DynamicFetcher` and its session classes. Now we removed the stealth mode from them and started using patchright inside `StealthyFetcher` and its session classes, with A LOT of improvements, as you will see, improving the stealth overall on top of patchright.

**This makes `StealthyFetcher` and its session classes 101% faster than before, use less memory and space, and have ~400 lines of code shorter, but, most importantly, are more stable than when we used Camoufox before.**

This will also shorten the installation time of the `scrapling install` command, reduce the size of the Docker image, improve test smoothness in GitHub's CI, and make scrapling less confusing for new users.

## Breaking changes
1. The `stealth` argument was removed from the `DynamicFetcher` class and its session class, while the `hide_canvas` argument was moved to the `StealthyFetcher` and its session classes.
2.  The `disable_webgl` argument has been moved from `DynamicFetcher` to the `StealthyFetcher` class and renamed as `allow_webgl`. All session classes as well.
3. The `StealthyFetcher` class is now basically the new stealthy version of `DynamicFetcher`, so the following arguments are removed: `block_images`, `humanize`, `addons`, `os_randomize`, `disable_ads`, and `geoip`. I tried to replicate them in Chromium, but each had its own problem. This might change with upcoming releases before v0.4.

Now to the good news, we have improved and fixed a lot of stuff :)

## Improvements
- You already know that the `StealthyFetcher` class and its session classes are now 101% faster than before, but now also the `DynamicFetcher` class and its session class are 20% faster.
- Cloudflare's solver algorithm has been improved over before now to finish faster and handle more cases. Also, thanks to the new refactor, expect the solver to solve the captcha twice as fast!
- All fetchers now use less memory.
- The MCP server now uses fewer tokens to save more money!
- The Docker image is now 60% smaller.
- The whole documentation website has been updated with the new stuff. At the same time, it was made more explicit, many sections were shortened, more examples were added, missing arguments were included, the API reference section was updated with graphs, and many other improvements were made. The Website now loads 130% faster, uses less data, and is better for SEO.

## Fixes
- Added the arguments that were missing before in the Web Scraping shell shortcuts and made them more accurate.
- Fixed the issue where the `google_search` argument was creating a Google referrer even if the URL is a localhost/IP.

_🙏 Special thanks to our [Discord community](https://discord.gg/EMgGbDceNQ) for all the continuous testing and feedback_

---

### Big shoutout to our biggest Sponsors
<a href="https://www.scrapeless.com/en?utm_source=official&utm_term=scrapling" target="_blank" title="Effortless Web Scraping Toolkit for Business and Developers"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/scrapeless.jpg"></a><a href="https://www.thordata.com/?ls=github&lk=github" target="_blank" title="Unblockable proxies and scraping infrastructure, delivering real-time, reliable web data to power AI models and workflows."><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/thordata.jpg"></a><a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi is your Swiss Quality Proxy Provider, starting at $0.49/GB"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png"></a><a href="https://serpapi.com/?utm_source=scrapling" target="_blank" title="Scrape Google and other search engines with SerpApi"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SerpApi.png"></a><a href="https://visit.decodo.com/Dy6W0b" target="_blank" title="Try the Most Efficient Residential Proxies for Free"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/decodo.png"></a><a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky delivers cutting-edge VPS hosting."><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png"></a>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.3.13` · 2026-01-01 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.3.13)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
