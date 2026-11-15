---
title: "firecrawl v1.15.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.15.0"
version: "v1.15.0"
published: "2025-07-18"
type: "minor"
lang: "en"
summary: "SSO for enterprise · Improved scraping reliability · Search params added to activity logs · FireGEO example"
---

# firecrawl v1.15.0

## Firecrawl v1.15.0 is here!

- SSO for enterprise
- Improved scraping reliability
- Search params added to activity logs 
- FireGEO example
- And over 50 PRs merged for bug & improvements 🔥


### Improvements
- OMCE support in `scrapeURL` and HTML transformer
- Improved logging (search params, cache age)
- New `created_at` field in `/crawl/active` response
- Case-insensitive URL protocol checks
- `filterLinks` ported to Rust

### Fixes
- HTML transformer stability (Arabic, base tag, panic)
- `scrapeURL` index bug & waitFor exclusion
- PDF billing bug with `parsePDF=false`
- Crawl returning only 1 result (edge case)
- Crawler no-sections bug
- Logger method naming
- Timeout handling in API
- `crawl-status` resilience for ejected jobs

### SDK & Infra
- SDK header param fix & async error handling
- Express port now configurable via env var
- Temporary crawl expiry exemption

### Docs
- Kubernetes setup update

## What's Changed
* Make worker Express server port configurable via environment variable by @devin-ai-integration[bot] in https://github.com/mendableai/firecrawl/pull/1748
* fix(logger): correct method names in logger.child calls by @ahnafatef in https://github.com/mendableai/firecrawl/pull/1731
* feat(html-transformer, scrapeURL): omce support by @mogery in https://github.com/mendableai/firecrawl/pull/1764
* Add created_at field to /crawl/active endpoint response by @devin-ai-integration[bot] in https://github.com/mendableai/firecrawl/pull/1718
* feat: test RunPod MU new version by @tomkosm in https://github.com/mendableai/firecrawl/pull/1771
* docs: kubernetes simple update by @mogery in https://github.com/mendableai/firecrawl/pull/1772
* fix(api): f-e timeout handling by @mogery in https://github.com/mendableai/firecrawl/pull/1774
* fix(api/html-transformer): stop panicing on arabic sites by @mogery in https://github.com/mendableai/firecrawl/pull/1773
* fix(api/html-transformer): relative base tag URL handling by @mogery in https://github.com/mendableai/firecrawl/pull/1776
* html-transformer: never panic by @mogery in https://github.com/mendableai/firecrawl/pull/1778
* feat(search): improve param logging by @mogery in https://github.com/mendableai/firecrawl/pull/1777
* fix(scrapeURL/index): horrible no-good very bad index url bug by @mogery in https://github.com/mendableai/firecrawl/pull/1780
* feat(index): store request frequency for precrawling by @mogery in https://github.com/mendableai/firecrawl/pull/1782
* feat(scrapeURL): log cache age in request frequency by @mogery in https://github.com/mendableai/firecrawl/pull/1784
* fix(scrapeURL/index): exclude waitfor by @mogery in https://github.com/mendableai/firecrawl/pull/1787
* feat: make URL protocol checks case-insensitive by @devin-ai-integration[bot] in https://github.com/mendableai/firecrawl/pull/1788
* Revert "Add temporary exception for specific team to bypass job expiration" by @micahstairs in https://github.com/mendableai/firecrawl/pull/1789
* fix(extract): improve enforcement by @mogery in https://github.com/mendableai/firecrawl/pull/1790
* insert omce jobs upon scrape by @mogery in https://github.com/mendableai/firecrawl/pull/1786
* [sdk] fixes missing headers param in scrape_url by @rafaelsideguide in https://github.com/mendableai/firecrawl/pull/1795
* Add temporary exemption for crawl expiry by @micahstairs in https://github.com/mendableai/firecrawl/pull/1796
* fix(crawl-status): keep working even if jobs are ejected from bullmq by @mogery in https://github.com/mendableai/firecrawl/pull/1799
* feat: precrawl worker by @mogery in https://github.com/mendableai/firecrawl/pull/1783
* sdk-fix: ensure async error handling in AsyncFirecrawlApp methods, up… by @rafaelsideguide in https://github.com/mendableai/firecrawl/pull/1802
* feat(crawler): port filterLinks to Rust by @mogery in https://github.com/mendableai/firecrawl/pull/1801
* Fix search endpoint PDF billing when parsePDF=false by @devin-ai-integration[bot] in https://github.com/mendableai/firecrawl/pull/1806
* Fix bug which sometimes caused crawl to only return 1 result by @micahstairs in https://github.com/mendableai/firecrawl/pull/1810
* (fix/crawler) No sections edge case fix by @nickscamara in https://github.com/mendableai/firecrawl/pull/1814

## New Contributors
* @ahnafatef made their first contribution in https://github.com/mendableai/firecrawl/pull/1731

**Full Changelog**: https://github.com/mendableai/firecrawl/compare/v1.14.0...v1.15.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v1.15.0` · 2025-07-18 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v1.15.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
