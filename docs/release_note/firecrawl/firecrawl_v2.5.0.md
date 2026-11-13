---
title: "firecrawl v2.5.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.5.0"
published: "2025-10-30"
type: "minor"
lang: "en"
summary: "We now have the highest quality and most comprehensive web data API available powered by our new semantic index and custom browser stack."
---

# firecrawl v2.5.0

## v2.5.0 - The World's Best Web Data API

We now have the highest quality and most comprehensive web data API available powered by our new semantic index and custom browser stack.

See the benchmarks below:

<img width="1200" height="675" alt="image" src="https://github.com/user-attachments/assets/96a2ba36-0c7f-4fa3-829e-d6ac91b53705" />


## New Features
- Implemented scraping for `.xlsx` (Excel) files.
- Introduced new crawl architecture and NUQ concurrency tracking system.
- Per-owner/group concurrency limiting + dynamic concurrency calculation.
- Added group backlog handling and improved group operations.
- Added `/search` pricing update
- Added team flag to skip country check.
- Always populate NUQ metrics for improved observability.
- New test-site app for improved CI testing.
- Extract metadata from document head for richer output.

### Enhancements & Improvements
- Improved blocklist loading and unsupported site error messages.
- Updated x402-express version.
- Improved includePaths handling for subdomains.
- Updated self-hosted search to use DuckDuckGo.
- JS & Python SDKs no longer require API key for self-hosted deployments.
- Python SDK timeout handling improvements.
- Rust client now uses `tracing` instead of `print`.
- Reduced noise in auto-recharge Slack notifications.

### Fixes
- Ensured crawl robots.txt warnings surface reliably.
- Resolved concurrency deadlocks and duplicate job handling.
- Fixed search country defaults and pricing logic bugs.
- Fixed port conflicts in harness environments.
- Fixed viewport dimension support and screenshot behavior in Playwright.
- Resolved CI test flakiness (playwright cache, prod tests).

### 👋 New Contributors
- @delong3
- @c4nc
- @codetheweb

**Full diff:** https://github.com/firecrawl/firecrawl/compare/v2.4.0...v2.5.0


## What's Changed
* More verbose blocklist loading errors by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2277
* Update x402-express Version by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2279
* Revise unsupported site error message by @micahstairs in https://github.com/firecrawl/firecrawl/pull/2286
* feat: index precrawl by @delong3 in https://github.com/firecrawl/firecrawl/pull/2289
* fix: ensure includePaths apply to subdomains when allowSubdomains is enabled by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2278
* Fix search country parameter to default to undefined when location is set by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2283
* Fix Port Conflict in Harness by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2285
* js-sdk: require API key only for cloud API (not self-hosted) by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2237
* feat: Implement Scraping Excel xlsx files by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2284
* feat(nuq): concurrency tracking by @mogery in https://github.com/firecrawl/firecrawl/pull/2291
* fix(crawl): surface robots.txt warning reliably by @ftonato in https://github.com/firecrawl/firecrawl/pull/2287
* feat(nuq): add source for max_concurrency by @mogery in https://github.com/firecrawl/firecrawl/pull/2293
* feat(nuq/concurrency-tracking): fix deadlock by @mogery in https://github.com/firecrawl/firecrawl/pull/2295
* Replace self-hosted Google with DDG search (ENG-3499) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2225
* python-sdk: Fix timeout handling across api calls by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2288
* python-sdk: Don't require API Key when running Self Hosted by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2290
* Add team flag to skip country check by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2300
* Update /search endpoint pricing to 2 credits per 10 search results by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2299
* Fix search pricing bug by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2301
* feat(nuq): per-owner-per-group concurrency limiting by @mogery in https://github.com/firecrawl/firecrawl/pull/2302
* update: handle circular refs as well in recursive schema by @Chadha93 in https://github.com/firecrawl/firecrawl/pull/2298
* feat(nuq): dynamically calculate current concurrency by @mogery in https://github.com/firecrawl/firecrawl/pull/2305
* feat(nuq): group_id, job backlogs, and group add operations by @mogery in https://github.com/firecrawl/firecrawl/pull/2309
* feat(ci): new test-site app + updated jest tests by @delong3 in https://github.com/firecrawl/firecrawl/pull/2312
* feat: new crawl architecture by @mogery in https://github.com/firecrawl/firecrawl/pull/2320
* Moved index for backlog query after the table creation by @c4nc in https://github.com/firecrawl/firecrawl/pull/2323
* fix(ci): playwright cache + prod tests by @delong3 in https://github.com/firecrawl/firecrawl/pull/2314
* Improve slack notifications for scale auto-recharges by @micahstairs in https://github.com/firecrawl/firecrawl/pull/2325
* Make auto-recharge notifications less noisy by @micahstairs in https://github.com/firecrawl/firecrawl/pull/2327
* fix: viewport dimension support for Playwright engine screenshots by @ftonato in https://github.com/firecrawl/firecrawl/pull/2329
* feat: always populate nuq metrics by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2328
* fix: scrape viewport test by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2330
* Revert "Merge pull request #2329 from firecrawl/devin/ENG-3639-175924… by @micahstairs in https://github.com/firecrawl/firecrawl/pull/2332
* fix(nuq): per-instance listen channel ID by @mogery in https://github.com/firecrawl/firecrawl/pull/2336
* fix(auto_charge): add a cooldown to the new recharge route by @mogery in https://github.com/firecrawl/firecrawl/pull/2338
* chore: update last scrape rpc by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2339
* Rust client: use `tracing` instead of print by @codetheweb in https://github.com/firecrawl/firecrawl/pull/2324
* Extract metadata from document head (ENG-3822) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2342
* fix(nuq,concurrency-limit): handle if there are duplicate jobs in the concurrency queue by @mogery in https://github.com/firecrawl/firecrawl/pull/2343

## New Contributors
* @delong3 made their first contribution in https://github.com/firecrawl/firecrawl/pull/2289
* @c4nc made their first contribution in https://github.com/firecrawl/firecrawl/pull/2323
* @codetheweb made their first contribution in https://github.com/firecrawl/firecrawl/pull/2324

**Full Changelog**: https://github.com/firecrawl/firecrawl/compare/v2.4.0...v2.5.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v2.5.0` · 2025-10-30 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v2.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
