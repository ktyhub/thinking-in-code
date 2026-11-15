---
title: "firecrawl v1.10.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.10.0"
version: "v1.10.0"
published: "2025-06-03"
type: "minor"
lang: "en"
summary: "We’re excited to announce the launch of our new Search API endpoint that combines web search with Firecrawl’s powerful scraping capabilities."
---

# firecrawl v1.10.0

We’re excited to announce the launch of our new Search API endpoint that combines web search with Firecrawl’s powerful scraping capabilities.

### Search Features:
- Search the web and get full content from results in one API call
- Choose specific output formats (markdown, HTML, links, screenshots)
- Customize search parameters (language, country, time range, number of results)
- Full SDK support for Python and Node.js

### More Features
- Auto mode proxy for scraping (`scrapeURL`, `js-sdk`) [#1551](https://github.com/mendableai/firecrawl/pull/1551), [#1602](https://github.com/mendableai/firecrawl/pull/1602)
- Timeout handling and content type improvements for `scrapeURL/pdf` [#1570](https://github.com/mendableai/firecrawl/pull/1570), [#1604](https://github.com/mendableai/firecrawl/pull/1604), [#1592](https://github.com/mendableai/firecrawl/pull/1592)
- Redis improvements: separate non-eviction Redis support [#1600](https://github.com/mendableai/firecrawl/pull/1600)
- Search improvements: `ignoreBlockedURLs`, ignore concurrency limit [#1580](https://github.com/mendableai/firecrawl/pull/1580), [#1617](https://github.com/mendableai/firecrawl/pull/1617)
- New `/cclog` endpoint for concurrency logging [#1589](https://github.com/mendableai/firecrawl/pull/1589)
- Metadata extraction now includes `itemprop` attributes [#1624](https://github.com/mendableai/firecrawl/pull/1624)
- Self-hosted: deployable Playwright image [#1625](https://github.com/mendableai/firecrawl/pull/1625)

### Fixes & Improvements
- Better subdomain handling for `LLMs.txt` + bypass option [#1557](https://github.com/mendableai/firecrawl/pull/1557)
- Improved URL validation and special character handling [#1547](https://github.com/mendableai/firecrawl/pull/1547)
- Zombie worker cleanup + TTL handling for extract status [#1575](https://github.com/mendableai/firecrawl/pull/1575), [#1599](https://github.com/mendableai/firecrawl/pull/1599)
- Fix concurrency queue logic and rate limiter override [#1595](https://github.com/mendableai/firecrawl/pull/1595), [#1593](https://github.com/mendableai/firecrawl/pull/1593)
- Better logging for search pagination and robust fetch [#1572](https://github.com/mendableai/firecrawl/pull/1572), [#1588](https://github.com/mendableai/firecrawl/pull/1588)
- Minor fixes: `og:locale:alternate`, adblock toggle, Playwright-only logic, malformed metadata arrays [#1597](https://github.com/mendableai/firecrawl/pull/1597), [#1616](https://github.com/mendableai/firecrawl/pull/1616), [#1574](https://github.com/mendableai/firecrawl/pull/1574)

### Testing & Docs
- Add `MAX_RAM` and `MAX_CPU` environment variable docs [#1581](https://github.com/mendableai/firecrawl/pull/1581)
- Testing infrastructure improvements [#1623](https://github.com/mendableai/firecrawl/pull/1623)

## What's Changed
* Fix LLMs.txt cache bug with subdomains and add bypass option by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1557
* FIR-1951: Fix URL validation for special characters in query parameters by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1547
* feat(scrapeURL): proxy auto mode (FIR-1853) by @mogery in https://github.com/mendableai/firecrawl/pull/1551
* feat(scrapeURL/pdf/mu): add timeout and created_at (FIR-2008) by @mogery in https://github.com/mendableai/firecrawl/pull/1570
* fix(auto_charge): fix ACUC clear (FIR-1805) by @mogery in https://github.com/mendableai/firecrawl/pull/1571
* fix(api/search): log page options correctly (FIR-2015) by @mogery in https://github.com/mendableai/firecrawl/pull/1572
* Update docker-compose.yaml comment by @emircanerkul in https://github.com/mendableai/firecrawl/pull/1566
* hotfix: kill zombie workers, respect timeouts better (FIR-2034) by @mogery in https://github.com/mendableai/firecrawl/pull/1575
* Fix: Concatenate metadata arrays into strings with exceptions by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1574
* Fix sdk/undefined response handle error by @rafaelsideguide in https://github.com/mendableai/firecrawl/pull/1578
* feat(python-sdk/CrawlWatcher): remove max payload size from WebSocket (FIR-2038) by @mogery in https://github.com/mendableai/firecrawl/pull/1577
* FIR-2006: Fix maxUrls and timeLimit parameters in Deep Research API by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1569
* docs: add MAX_RAM and MAX_CPU environment variables documentation by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1581
* feat(search): ignoreBlockedURLs (FIR-1954) by @mogery in https://github.com/mendableai/firecrawl/pull/1580
* fix(queue-worker): finish crawl if all addable URLs were already locked (FIR-1936) by @mogery in https://github.com/mendableai/firecrawl/pull/1582
* feat(api/extract): show extract as origin for scrapes originating from it (FIR-2061) by @mogery in https://github.com/mendableai/firecrawl/pull/1584
* feat(api/v1/extract): ignoreInvalidURLs (FIR-1948) by @mogery in https://github.com/mendableai/firecrawl/pull/1585
* fix(robustFetch): selective logging (FIR-2072) by @mogery in https://github.com/mendableai/firecrawl/pull/1588
* feat(scrapeURL, logJob): log pdf page count to db (FIR-2068) by @mogery in https://github.com/mendableai/firecrawl/pull/1587
* feat(concurrency-log): add cclog endpoint (FIR-2067) by @mogery in https://github.com/mendableai/firecrawl/pull/1589
* feat: parse PDFs on fc side and reject if too long for timeout (FIR-2083) by @mogery in https://github.com/mendableai/firecrawl/pull/1592
* feat(queue-worker/afterJobDone): improved ccq insert logic (FIR-2082) by @mogery in https://github.com/mendableai/firecrawl/pull/1595
* fix(v1): avoid overwriting rateLimiterMode with FIRE-1 rate limiter (FIR-2090) by @mogery in https://github.com/mendableai/firecrawl/pull/1593
* fix(html-transformer): bad outName for og:locale:alternate (FIR-2101) by @mogery in https://github.com/mendableai/firecrawl/pull/1597
* fix(extract-status): be able to get extract status even after TTL lapses by @mogery in https://github.com/mendableai/firecrawl/pull/1599
* feat(scrapeURL): add unnormalizedSourceURL for url matching DX (FIR-2137) by @mogery in https://github.com/mendableai/firecrawl/pull/1601
* feat(apps/api): add support for a separate, non-eviction Redis by @mogery in https://github.com/mendableai/firecrawl/pull/1600
* feat(js-sdk): auto mode proxy (FIR-2145) by @mogery in https://github.com/mendableai/firecrawl/pull/1602
* feat(scrapeURL): handle contentType JSON better in markdown conversion (FIR-2159) by @mogery in https://github.com/mendableai/firecrawl/pull/1604
* feat(scrapeURL/pdf): bill n credits per page (FIR-1934) by @mogery in https://github.com/mendableai/firecrawl/pull/1553
* [rust-sdk] webhook param for crawl by @palsp in https://github.com/mendableai/firecrawl/pull/1609
* feat(search): ignore concurrency limit for search (FIR-2187) by @mogery in https://github.com/mendableai/firecrawl/pull/1617
* fix(scrapeURL): only allow disabling the adblock on playwright (FIR-2200) by @mogery in https://github.com/mendableai/firecrawl/pull/1616
* feat(api/scrape): credits_billed column + handle billing for `/scrape` calls on worker side with stricter timeout enforcement (FIR-2162) by @mogery in https://github.com/mendableai/firecrawl/pull/1607
* Bypass billing on search preview by @nickscamara in https://github.com/mendableai/firecrawl/pull/1622
* feat: enhance metadata extraction by including 'itemprop' attribute in HTML by @ftonato in https://github.com/mendableai/firecrawl/pull/1624
* feat(selfhost): deploy a playwright image by @mogery in https://github.com/mendableai/firecrawl/pull/1625
* Testing improvements (FIR-2209) by @mogery in https://github.com/mendableai/firecrawl/pull/1623
* Index (FIR-2177) by @mogery in https://github.com/mendableai/firecrawl/pull/1605

## New Contributors
* @emircanerkul made their first contribution in https://github.com/mendableai/firecrawl/pull/1566
* @palsp made their first contribution in https://github.com/mendableai/firecrawl/pull/1609

**Full Changelog**: https://github.com/mendableai/firecrawl/compare/v1.9.0...v.10.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v1.10.0` · 2025-06-03 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v1.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
