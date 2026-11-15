---
title: "Scrapling v0.3.14"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.3.14"
version: "v0.3.14"
published: "2026-01-03"
type: "patch"
lang: "en"
summary: "A minor maintenance update to fix issues that happened with some devices in v0.3.13"
---

# Scrapling v0.3.14

**A minor maintenance update to fix issues that happened with some devices in v0.3.13**

- Disabled the incognito mode in `StealthyFetcher` and its session classes since it made cookies not persistent across pages on Windows devices. It didn't happen on MacOS and Linux (Fixes [#123](https://github.com/D4Vinci/Scrapling/issues/123), thanks to @frugality4121 for bringing it up and to @gembleman for pointing out the solution).
- Pinned down the last version of browserforge to solve the issue with old header models for users with an already old browserforge version.


_🙏 Special thanks to our [Discord community](https://discord.gg/EMgGbDceNQ) for all the continuous testing and feedback_

---

### Big shoutout to our biggest Sponsors
<a href="https://www.scrapeless.com/en?utm_source=official&utm_term=scrapling" target="_blank" title="Effortless Web Scraping Toolkit for Business and Developers"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/scrapeless.jpg"></a><a href="https://www.thordata.com/?ls=github&lk=github" target="_blank" title="Unblockable proxies and scraping infrastructure, delivering real-time, reliable web data to power AI models and workflows."><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/thordata.jpg"></a><a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi is your Swiss Quality Proxy Provider, starting at $0.49/GB"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png"></a><a href="https://serpapi.com/?utm_source=scrapling" target="_blank" title="Scrape Google and other search engines with SerpApi"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SerpApi.png"></a><a href="https://visit.decodo.com/Dy6W0b" target="_blank" title="Try the Most Efficient Residential Proxies for Free"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/decodo.png"></a><a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky delivers cutting-edge VPS hosting."><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png"></a>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.3.14` · 2026-01-03 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.3.14)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
