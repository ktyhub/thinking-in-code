---
title: "firecrawl v1.13.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.13.0"
version: "v1.13.0"
published: "2025-06-27"
type: "minor"
lang: "en"
summary: "Added AU, FR, DE to Stealth Mode · Crawl subdomains with allowSubdomains · Google slides scraping · Generate a PDF of the current page. See docs"
---

# firecrawl v1.13.0

## Firecrawl v1.13.0 Changelog

- Added AU, FR, DE to [Stealth Mode](https://docs.firecrawl.dev/features/proxies#location-based-proxy-selection)
- Crawl subdomains with [allowSubdomains](https://docs.firecrawl.dev/api-reference/endpoint/crawl-post#body-allow-subdomains)
- Google slides scraping
- Generate a PDF of the current page. See [docs](https://docs.firecrawl.dev/api-reference/endpoint/scrape#generate-pdf)
- Higher res screenshots with [quality param](https://docs.firecrawl.dev/api-reference/endpoint/scrape#screenshot)
- Weekly view for usage on the dashboard
- Fireplexity Example (Open Source Perplexity). See [repo](https://github.com/mendableai/fireplexity)
- And more!

### Features
- Support cookies in `scrapeURL` via `safeFetch`
- Add Google Slides scraping
- Add PDF actions to API, Python & JS SDKs
- Screenshot quality config
- `parsePDF` support in Python & JS SDKs
- Allow international URLs
- Enable subdomain crawling in SDKs
- Worker liveness check before job queueing

### Improvements & Fixes
- Removed old cache systems (Redis, PDF cache, etc.)
- Enhanced error messages (TLS, DNS)
- Improved job count query & error handling
- Fixed `pdf`, `credits` scope, `ignoreInvalidURLs` bugs
- Reduced over-logging in concurrency limits
- Added special job expiration bypass for Faire team
- Unified fallback logic in JS SDK

## What's Changed
* Remove old cache mechanisms (redis cache, PDF cache, crawl maps, etc.) (FIR-2266) by @mogery in https://github.com/mendableai/firecrawl/pull/1667
* feat(scrapeURL): support cookies in safeFetch by @mogery in https://github.com/mendableai/firecrawl/pull/1688
* fix(search): respect parsePDF in pricing by @mogery in https://github.com/mendableai/firecrawl/pull/1690
* feat(scrape): support Google Slides by @meetsoni1214 in https://github.com/mendableai/firecrawl/pull/1693
* fix(api): CI by @mogery in https://github.com/mendableai/firecrawl/pull/1692
* fix(api): improve error logging with structured error object by @mogery in https://github.com/mendableai/firecrawl/pull/1697
* fix(api): enhance error handler with optional ACUC data by @mogery in https://github.com/mendableai/firecrawl/pull/1698
* fix(api): handle errors better in redis-less crawl status by @mogery in https://github.com/mendableai/firecrawl/pull/1699
* feat(api): optimize job count query and improve error handling by @mogery in https://github.com/mendableai/firecrawl/pull/1700
* fix(api/v1/crawl/ongoing): only crawls, no batch scrape by @mogery in https://github.com/mendableai/firecrawl/pull/1701
* feat(api): pdf action + housekeeping by @mogery in https://github.com/mendableai/firecrawl/pull/1702
* fix(v1): check credits variable scope collision by @mogery in https://github.com/mendableai/firecrawl/pull/1703
* fix(api): pdf bug + testing bugs by @mogery in https://github.com/mendableai/firecrawl/pull/1704
* fix(api/batch/scrape): maxConcurrency field support when using ignoreInvalidURLs by @mogery in https://github.com/mendableai/firecrawl/pull/1705
* fix(api): instantiate Storage only once by @mogery in https://github.com/mendableai/firecrawl/pull/1706
* feat(api/ci): idmux by @mogery in https://github.com/mendableai/firecrawl/pull/1707
* fix(concurrency-limit): scan instead of taking jobs by @mogery in https://github.com/mendableai/firecrawl/pull/1708
* fix(concurrency-limit): overlogging by @mogery in https://github.com/mendableai/firecrawl/pull/1709
* fix(api): cached acuc didn't have the is_extract flag set (ENG-2468) by @mogery in https://github.com/mendableai/firecrawl/pull/1712
* fix(js-sdk/extract): use same zod fallback logic by @mogery in https://github.com/mendableai/firecrawl/pull/1711
* Add temporary exception for Faire team ID to bypass job expiration by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1716
* feat(python-sdk): add parsePDF parameter support by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1713
* Allow international URLs to pass validation by @micahstairs in https://github.com/mendableai/firecrawl/pull/1717
* feat: Screenshot quality by @nickscamara in https://github.com/mendableai/firecrawl/pull/1721
* feat(sdk/python): add pdf action (ENG-2515) by @mogery in https://github.com/mendableai/firecrawl/pull/1722
* feat(scrapeURL/skipTlsVerification): improve error message by @mogery in https://github.com/mendableai/firecrawl/pull/1723
* feat: improve DNS resolution error message by @mogery in https://github.com/mendableai/firecrawl/pull/1724
* Fix unreachable allowSubdomains code in crawler filterURL method by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1719
* Add parsePDF parameter to JS SDK by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1720
* feat(api/worker): liveness check in queueing -- don't take jobs when the worker is dying (ENG-2519) by @mogery in https://github.com/mendableai/firecrawl/pull/1725
* (feat/sdk) Allow Subdomains in the sdks by @nickscamara in https://github.com/mendableai/firecrawl/pull/1726

## New Contributors
* @meetsoni1214 made their first contribution in https://github.com/mendableai/firecrawl/pull/1693
* @micahstairs made their first contribution in https://github.com/mendableai/firecrawl/pull/1717

**Full Changelog**: https://github.com/mendableai/firecrawl/compare/v1.12.0...v1.13.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v1.13.0` · 2025-06-27 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v1.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
