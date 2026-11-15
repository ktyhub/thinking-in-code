---
title: "firecrawl v1.11.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.11.0"
version: "v1.11.0"
published: "2025-06-13"
type: "minor"
lang: "en"
summary: "Launched our Firecrawl Index · Speed up scrapes 5x if opted in · Improved Activity Logs · View webhook events"
---

# firecrawl v1.11.0

## Firecrawl v1.11.0 is here!

### Major Features
- Launched our Firecrawl Index
     - Speed up scrapes 5x if opted in
- Improved Activity Logs
     - View webhook events
     - Active crawl management
- Fire Enrich Example (Open Source Clay)
- Community Java SDK
- and a lot more


### Features
- Improved Playwright tests and webhook test coverage
- Added `GET /crawl/ongoing` endpoint
- Introduced tag support in change tracking
- Added `integration` field to jobs and propagated through queue worker
- Parallel testing for runpod v2 and updated `mu`
- Ported `queryIndexAtSplitLevel` to RPC
- Enhanced SDK with index and missing parameters
- Removed redundant GCS check to improve performance
- Added `credits_billed` field across pipeline
- Enabled domain-level index splitting for better map querying
- Used index in search and extract operations
- Removed unused index columns

### Fixes & Improvements
- Fixed crawl pre-finishing logic
- Refactored `callWebhook` and added logging
- Improved index testing (FIR-2214)
- Fixed JS SDK tests
- Clarified scrape options usage in README
- Fixed missing `PLAYWRIGHT_MICROSERVICE_URL` in env example
- Improved concurrency limit notification emails
- Removed query param sanitization that broke extract

### Contributors
- @Arkit003 made their first contribution
- @pulbyte made their first contribution

**Full Changelog**: https://github.com/mendableai/firecrawl/compare/v1.10.0...v1.11.0



## What's Changed
* feat(api/tests/scrape): Playwright test improvements by @mogery in https://github.com/mendableai/firecrawl/pull/1626
* feat(queue-worker): fix crawl pre-finishing logic (FIR-2171) by @mogery in https://github.com/mendableai/firecrawl/pull/1628
* feat(api/tests): add webhook tests + refactor batch scrape lib (FIR-2219) by @mogery in https://github.com/mendableai/firecrawl/pull/1630
* feat(api): GET /crawl/ongoing (FIR-2189) by @mogery in https://github.com/mendableai/firecrawl/pull/1620
* feat(changeTracking): support tags (FIR-1940) by @mogery in https://github.com/mendableai/firecrawl/pull/1631
* feat(api): add integration field to jobs and update related controllers and types by @ftonato in https://github.com/mendableai/firecrawl/pull/1632
* feat(api): propagate integration field in queue worker job processing by @ftonato in https://github.com/mendableai/firecrawl/pull/1635
* feat(scraper): runpod v2 parallel testing by @tomkosm in https://github.com/mendableai/firecrawl/pull/1636
* feat: update mu by @tomkosm in https://github.com/mendableai/firecrawl/pull/1639
* feat(api/index): port queryIndexAtSplitLevel to RPC (FIR-2241) by @mogery in https://github.com/mendableai/firecrawl/pull/1640
* feat(webhook): refactor callWebhook and add logWebhook (FIR-2218) by @mogery in https://github.com/mendableai/firecrawl/pull/1629
* Index testing improvements (FIR-2214) by @mogery in https://github.com/mendableai/firecrawl/pull/1637
* feat(sdk): Index parameters + other missing parameters (FIR-2240) by @mogery in https://github.com/mendableai/firecrawl/pull/1638
* feat(gcs-jobs): ditch exists check to cut lookup time in half by @mogery in https://github.com/mendableai/firecrawl/pull/1641
* fix(js-sdk/tests): fix the testing situation (FIR-2253) by @mogery in https://github.com/mendableai/firecrawl/pull/1644
* fix(readme): clarify that scrape_options must be a ScrapeOptions instance crawl_url and typo fixes by @Arkit003 in https://github.com/mendableai/firecrawl/pull/1647
* fix: PLAYWRIGHT_MICROSERVICE_URL in apps/api/.env.example by @pulbyte in https://github.com/mendableai/firecrawl/pull/1654
* Improve concurrency limit email notifications by @nickscamara in https://github.com/mendableai/firecrawl/pull/1658
* feat: add credits_billed everywhere (FIR-2286) by @mogery in https://github.com/mendableai/firecrawl/pull/1655
* fix(api): remove query parameter sanitization that was breaking extracts (FIR-2307) by @mogery in https://github.com/mendableai/firecrawl/pull/1661
* feat(index): remove unused columns by @mogery in https://github.com/mendableai/firecrawl/pull/1662
* feat: use index in search and extract (FIR-2267) by @mogery in https://github.com/mendableai/firecrawl/pull/1660
* feat(index): add domain splitting for improved map querying by @mogery in https://github.com/mendableai/firecrawl/pull/1666

## New Contributors
* @Arkit003 made their first contribution in https://github.com/mendableai/firecrawl/pull/1647
* @pulbyte made their first contribution in https://github.com/mendableai/firecrawl/pull/1654

**Full Changelog**: https://github.com/mendableai/firecrawl/compare/v1.10.0...v1.11.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v1.11.0` · 2025-06-13 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v1.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
