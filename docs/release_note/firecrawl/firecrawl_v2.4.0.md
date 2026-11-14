---
title: "firecrawl v2.4.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.4.0"
published: "2025-10-13"
type: "minor"
lang: "en"
summary: "New PDF Search Category - You can now search for only pdfs via our v2/search endpoints by specifying .pdf category"
---

# firecrawl v2.4.0

## v2.4.0

### New Features
- **New PDF Search Category** - You can now search for only pdfs via our v2/search endpoints by specifying .pdf category
- **Gemini 2.5 Flash CLI Image Editor** — Create and edit images directly in the CLI using Firecrawl + Gemini 2.5 Flash integration ([#2172](https://github.com/firecrawl/firecrawl/pull/2172))
- **x402 Search Endpoint (`/v2/x402`)** — Added a next-gen search API with improved accuracy and speed ([#2218](https://github.com/firecrawl/firecrawl/pull/2218))
- **RabbitMQ Event System** — Firecrawl jobs now support event-based communication and prefetching from Postgres ([#2230](https://github.com/firecrawl/firecrawl/pull/2230), [#2233](https://github.com/firecrawl/firecrawl/pull/2233))
- **Improved Crawl Status API** — More accurate and real-time crawl status reporting using the new `crawl_status_2` RPC ([#2239](https://github.com/firecrawl/firecrawl/pull/2239))
- **Low-Results & Robots.txt Warnings** — Users now receive clear feedback when crawls are limited by robots.txt or yield few results ([#2248](https://github.com/firecrawl/firecrawl/pull/2248))
- **Enhanced Tracing (OpenTelemetry)** — Much-improved distributed tracing for better observability across services ([#2219](https://github.com/firecrawl/firecrawl/pull/2219))
- **Metrics & Analytics** — Added request-level metrics for both Scrape and Search endpoints ([#2216](https://github.com/firecrawl/firecrawl/pull/2216))
- **Self-Hosted Webhook Support** — Webhooks can now be delivered to private IP addresses for self-hosted environments ([#2232](https://github.com/firecrawl/firecrawl/pull/2232))

### Improvements
- **Reduced Docker Image Size** — Playwright service image size reduced by **1 GB** by only installing Chromium ([#2210](https://github.com/firecrawl/firecrawl/pull/2210))
- **Python SDK Enhancements** — Added `"cancelled"` job status handling and poll interval fixes ([#2240](https://github.com/firecrawl/firecrawl/pull/2240), [#2265](https://github.com/firecrawl/firecrawl/pull/2265))
- **Faster Node SDK Timeouts** — Axios timeouts now propagate correctly, improving reliability under heavy loads ([#2235](https://github.com/firecrawl/firecrawl/pull/2235))
- **Improved Crawl Parameter Previews** — Enhanced prompts and validation for crawl parameter previews ([#2220](https://github.com/firecrawl/firecrawl/pull/2220))
- **Zod Schema Validation** — Stricter API parameter validation with rejection of extra fields ([#2058](https://github.com/firecrawl/firecrawl/pull/2058))
- **Better Redis Job Handling** — Fixed edge cases in `getDoneJobsOrderedUntil` for more stable Redis retrieval ([#2258](https://github.com/firecrawl/firecrawl/pull/2258))
- **Markdown & YouTube Fixes** — Fixed YouTube cache and empty markdown summary bugs ([#2226](https://github.com/firecrawl/firecrawl/pull/2226), [#2261](https://github.com/firecrawl/firecrawl/pull/2261))
- **Updated Docs & Metadata** — README updates and new metadata fields added to the JS SDK ([#2250](https://github.com/firecrawl/firecrawl/pull/2250), [#2254](https://github.com/firecrawl/firecrawl/pull/2254))
- **Improved API Port Configuration** — The API now respects environment-defined ports ([#2209](https://github.com/firecrawl/firecrawl/pull/2209))

### Fixes
- Fixed recursive `$ref` schema validation edge cases ([#2238](https://github.com/firecrawl/firecrawl/pull/2238))
- Fixed enum arrays being incorrectly converted to objects ([#2224](https://github.com/firecrawl/firecrawl/pull/2224))
- Fixed harness timeouts and self-hosted `docker-compose.yaml` issues ([#2242](https://github.com/firecrawl/firecrawl/pull/2242), [#2252](https://github.com/firecrawl/firecrawl/pull/2252))

### New Contributors
- @Chadha93 ([#2155](https://github.com/firecrawl/firecrawl/pull/2155))
- @MAVRICK-1 ([#2172](https://github.com/firecrawl/firecrawl/pull/2172))
- @bernie43 ([#2210](https://github.com/firecrawl/firecrawl/pull/2210))
- @abimaelmartell ([#2209](https://github.com/firecrawl/firecrawl/pull/2209))
- @th3w1zard1 ([#2252](https://github.com/firecrawl/firecrawl/pull/2252))

**🔗 Full Changelog:** [v2.3.0 → v2.4.0](https://github.com/firecrawl/firecrawl/compare/v2.3.0...v2.4.0)


## What's Changed
* fix: add missing `poll_interval` param in watcher by @Chadha93 in https://github.com/firecrawl/firecrawl/pull/2155
* feat: Add Firecrawl + Gemini 2.5 Flash Image CLI Editor by @MAVRICK-1 in https://github.com/firecrawl/firecrawl/pull/2172
* Add environment variable to disable blocklist by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2197
* Fix ARM builds by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2198
* fix(v1/search): if f-e search is available, only use that by @mogery in https://github.com/firecrawl/firecrawl/pull/2199
* Upgrade html-to-markdown dependency (ENG-3563) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2195
* feat(map): add crawler and scrape options to job logging by @ftonato in https://github.com/firecrawl/firecrawl/pull/2203
* refactor: integrate facilitator in payment middleware by @ftonato in https://github.com/firecrawl/firecrawl/pull/2213
* (feat/metrics) Scrape and Search Request Metrics by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2216
* (feat/big-query) Big Query by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2217
* feat(api): add x402 search endpoint to /v2 by @ftonato in https://github.com/firecrawl/firecrawl/pull/2218
* feat(api/otel): much improved tracing by @mogery in https://github.com/firecrawl/firecrawl/pull/2219
* fix: Add Zod validation to reject additionalProperties in schema parameters by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2058
* Reduce playwright-service image size by 1 GB by installing only Chromium by @bernie43 in https://github.com/firecrawl/firecrawl/pull/2210
* fix: enum arrays being converted to objects by @Chadha93 in https://github.com/firecrawl/firecrawl/pull/2224
* feat(nuq): RabbitMQ support for job finish events and waiting by @mogery in https://github.com/firecrawl/firecrawl/pull/2230
* fix: Use port from env.PORT for API by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2209
* feat(nuq/rabbitmq): add prefetching jobs from psql to rabbitmq by @mogery in https://github.com/firecrawl/firecrawl/pull/2233
* fix: skip summary generation when markdown is empty by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2226
* Propagate timeout to Axios in Node SDK (ENG-3474) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2235
* feat(api/crawl-status): use crawl_status_2 RPC by @mogery in https://github.com/firecrawl/firecrawl/pull/2239
* Allow self-hosted webhook delivery to private IP addresses by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2232
* Update harness timeout by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2242
* python-sdk: include "cancelled" in CrawlJob.status and exit wait loop on cancel (fixes #2190) by @Jeelislive in https://github.com/firecrawl/firecrawl/pull/2240
* feat(api/ci): test with RabbitMQ on prod by @mogery in https://github.com/firecrawl/firecrawl/pull/2241
* (fix/crawl-params) Enhance crawl param preview prompt further by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2220
* build(deps): bump actions/checkout from 3 to 5 by @dependabot[bot] in https://github.com/firecrawl/firecrawl/pull/2115
* fix: harness by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2249
* Fix a self-hosted docker-compose.yaml bug caused by a recent firecrawl change by @th3w1zard1 in https://github.com/firecrawl/firecrawl/pull/2252
* fix: handle `$ref` for recursive schema validation by @Chadha93 in https://github.com/firecrawl/firecrawl/pull/2238
* Add missing metadata fields to JS SDK (ENG-3439) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2250
* Update README.md by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2254
* fix: handle edge case in getDoneJobsOrderedUntil function for Redis job retrieval by @ftonato in https://github.com/firecrawl/firecrawl/pull/2258
* Fix YouTube cache markdown bug by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2261
* feat(api): add warnings for low results and robots.txt restrictions in map and crawl controllers by @ftonato in https://github.com/firecrawl/firecrawl/pull/2248
* Test new mu alternative by @tomkosm in https://github.com/firecrawl/firecrawl/pull/2263
* chore(python-sdk): Bump version to 4.3.7 for poll_interval fix by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2265
* Feat/test new mu alt by @tomkosm in https://github.com/firecrawl/firecrawl/pull/2267
* (feat/search-index) Search Index by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2268
* Feat/test new mu alt by @tomkosm in https://github.com/firecrawl/firecrawl/pull/2270
* (feat/search-index) Separate service by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2271
* fix: additional `queue_scrape` for nuq schema by @Chadha93 in https://github.com/firecrawl/firecrawl/pull/2272
* (feat/search) Pdf search category by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2276

## New Contributors
* @Chadha93 made their first contribution in https://github.com/firecrawl/firecrawl/pull/2155
* @MAVRICK-1 made their first contribution in https://github.com/firecrawl/firecrawl/pull/2172
* @bernie43 made their first contribution in https://github.com/firecrawl/firecrawl/pull/2210
* @abimaelmartell made their first contribution in https://github.com/firecrawl/firecrawl/pull/2209
* @th3w1zard1 made their first contribution in https://github.com/firecrawl/firecrawl/pull/2252

**Full Changelog**: https://github.com/firecrawl/firecrawl/compare/v2.3.0...v2.4.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v2.4.0` · 2025-10-13 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v2.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
