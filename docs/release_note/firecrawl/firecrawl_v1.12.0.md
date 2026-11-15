---
title: "firecrawl v1.12.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.12.0"
version: "v1.12.0"
published: "2025-06-20"
type: "minor"
lang: "en"
summary: "New Concurrency System - Specify max concurrency by request for better control. See docs."
---

# firecrawl v1.12.0

## Firecrawl v1.12.0 is here!

- New Concurrency System - Specify max concurrency by request for better control. [See docs](https://docs.firecrawl.dev/api-reference/endpoint/crawl-post#body-max-concurrency).
- Crawl Entire Domain Param - Follow internal links to sibling or parent URLs, not just child paths (prev. allowBackwardLinks). [See docs](https://docs.firecrawl.dev/api-reference/endpoint/crawl-post#body-crawl-entire-domain).
- Google Docs Scraping - We now officially support scraping Google Docs files
- Improved Activity Logs - Better support for FIRE-1 requests. [See your logs here.](https://www.firecrawl.dev/app/logs)
- /search Playground Enhanced - Location Params added. [Check out the playground.](https://www.firecrawl.dev/playground?mode=search)
- Firestarter Example - Open Source Chatbot building platform. [Repo here.](https://github.com/mendableai/firestarter)
- Plus tons of performance improvements and bug fixes. 

P.S. Have feedback or ideas for v1.13.0? Hit reply and let us know. We're always listening to our community to build the features you need most.




## What's Changed
* feat(vertex): fix vertex ai provider bug and update model references… by @tomkosm in https://github.com/mendableai/firecrawl/pull/1668
* Improve URL filtering error messages with specific denial reasons (FIR-2352) by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1676
* feat(index): store short titles and descriptions (FIR-2356) by @mogery in https://github.com/mendableai/firecrawl/pull/1677
* feat: Test mu v3 by @tomkosm in https://github.com/mendableai/firecrawl/pull/1678
* Add deployment type field to bug report template by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1681
* feat(crawl-status): refactor to work after a redis flush (FIR-2271) by @mogery in https://github.com/mendableai/firecrawl/pull/1664
* fix(scrape): log FIRE-1 credits billed on failures properly (FIR-2331) by @mogery in https://github.com/mendableai/firecrawl/pull/1682
* feat(scrape, extract): creditsUsed, tokensUsed fields (FIR-2336) by @mogery in https://github.com/mendableai/firecrawl/pull/1683
* Concurrency limit refactor + `maxConcurrency` parameter (FIR-2191) by @mogery in https://github.com/mendableai/firecrawl/pull/1643
* feat(scrape): support Google Docs (FIR-1365) by @mogery in https://github.com/mendableai/firecrawl/pull/1686
* feat: add followInternalLinks parameter as semantic replacement for allowBackwardLinks by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1684


**Full Changelog**: https://github.com/mendableai/firecrawl/compare/v1.11.0...v1.12.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v1.12.0` · 2025-06-20 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v1.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
