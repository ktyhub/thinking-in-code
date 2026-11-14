---
title: "firecrawl v2.7.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.7.0"
version: "v2.7.0"
published: "2025-12-05"
type: "minor"
lang: "en"
summary: "And a lot more enhacements, check it out below!"
---

# firecrawl v2.7.0

## Firecrawl v2.7.0 is here!

- ZDR Search support for enterprise customers.
- Improved Branding Format with better detection.
- Partner Integrations API now in closed beta.
- Faster and more accurate screenshots.
- Self-hosted improvements

And a lot more enhacements, check it out below!


## **New Features**
- **Improved Branding Extract**  
  Better logo and color detection for more accurate brand extraction results.

- **NOQ Scrape System (Experimental)**  
  New scrape pipeline with improved stability and integrated concurrency checks.

- **Enhanced Redirect Handling**  
  URLs now resolve before mapping, with safer redirect-chain detection and new abort timeouts.

- **Enterprise Search Parameters**  
  New enterprise-level options available for the `/search` endpoint.

- **Integration-Based User Creation**  
  Users can now be automatically created when coming from referring integrations.

- **`minAge` Scrape Parameter**  
  Allows requiring a minimum cached age before re-scraping.

- **Extract Billing Credits**  
  Extract jobs now use the same credit billing system as other endpoints.

- **Self-Host: Configurable Crawl Concurrency**  
  Self-hosted deployments can now set custom concurrency limits.

- **Sentry Enhancements**  
  Added Vercel AI integration, configurable sampling rates, and improved exception filtering.

- **UUIDv7 IDs**  
  All new resources use lexicographically sortable UUIDv7.

## **API Improvements**
- **DNS Resolution Errors Now Return 200** for more consistent failure handling.
- **Improved URL Mapping Logic** including sitemap `maxAge` fixes, recursive sitemap support, Vue/Angular router normalization, and skipping subdomain logic for IP addresses.
- **Partial Results for Multi-Source Search** instead of failing all sources.
- **Concurrency Metadata Added** to scrape job responses.
- **Enhanced Metrics** including total wait time, LLM usage, and format details.
- **Batch Scrape Upgrades**  
  - Added missing `/v2/batch/scrape/:jobId/errors` endpoint  
  - Fixed pagination off-by-one bug
- **More Robust Error Handling** for PDF/document engines, pydantic parsing, Zod validation, URL validation, and billing edge cases.

---

## **SDK Improvements**
### **JavaScript SDK**
- Returns **job ID** from synchronous methods.
- Improved **WebSocket `document` event** handling.
- Fixed **types**, **Deno WS**, and added support for `ignoreQueryParameter`.
- Version bump with internal cleanup.

### **Python SDK**
- Added extra metadata fields.
- Improved batch validation handling.

---

## **Quality & Performance**
- Reduced log file size and improved tmp file cleanup.
- Updated Express version and patched vulnerable packages.
- Disabled markdown conversion for sitemap scrapes for improved performance.
- Better precrawl logging and formatting.
- Skip URL rewriting for published Google Docs.
- Prevent empty cookie headers during webhook callbacks.

---

## **Self-Hosted Improvements**
- Disabled concurrency limit enforcement for self-hosted mode.
- PostgreSQL credentials now configurable via environment variables.
- Docker-compose build instructions fixed.

---

## 👥 New Contributors
- @omahs  
- @davidkhala  
- @DraPraks  
- @devhims  

---

**Full Changelog:** https://github.com/firecrawl/firecrawl/compare/v2.6.0...v2.7.0

## What's Changed
* (feat/dns) DNS Resolution errors should be a 200 by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2402
* Improve Logo and Color Detection on Branding Extract by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2362
* (js-sdk) fix: ws 'document' event implementation by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2415
* (js-sdk): Return job ID from synchronous methods by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2414
* (js-sdk): Fix types by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2416
* (js-sdk): Bump Version by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2417
* fix(api): disable gcs logging without db auth by @delong3 in https://github.com/firecrawl/firecrawl/pull/2418
* feat: noq scrape system by @delong3 in https://github.com/firecrawl/firecrawl/pull/2419
* Muv2 exp add more logs by @tomkosm in https://github.com/firecrawl/firecrawl/pull/2421
* feat(api): noq concurrency check integration by @delong3 in https://github.com/firecrawl/firecrawl/pull/2424
* Fix concurrency backfill bug by @micahstairs in https://github.com/firecrawl/firecrawl/pull/2425
* feat: redirect to docs when hitting main api endpoint by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2426
* feat(api): total wait time in request metrics by @delong3 in https://github.com/firecrawl/firecrawl/pull/2428
* (fix/search) rm legacy external search apis by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2420
* fix(api): various vulnerable packages (2025/11/21) by @mogery in https://github.com/firecrawl/firecrawl/pull/2431
* fix(api): pdf + document engines not respecting skipTlsVerification flag and error handling for uncidi by @delong3 in https://github.com/firecrawl/firecrawl/pull/2435
* fix(api): /map returning less urls with sitemap include by @delong3 in https://github.com/firecrawl/firecrawl/pull/2440
* feat: resolve redirects before mapping urls by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2439
* fix(api): tally system rework by @mogery in https://github.com/firecrawl/firecrawl/pull/2430
* fix(api): update URL handling of resolved redirects by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2442
* fix(api): opaque fire engine delete + poll interval by @delong3 in https://github.com/firecrawl/firecrawl/pull/2443
* feat(api): add abort timeout for resolveRedirects by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2444
* (python-sdk) feat: added extra fields to metadata by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2441
* fix(api): handle case with no billed teams in tallyBilling function by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2446
* fix: Add support for ignoreQueryParameter in map SDKs by @Chadha93 in https://github.com/firecrawl/firecrawl/pull/2429
* fix(api): vue + angular router url normalization by @delong3 in https://github.com/firecrawl/firecrawl/pull/2447
* feat(api): usedLlm + formats in request metrics by @delong3 in https://github.com/firecrawl/firecrawl/pull/2448
* feat(api): switch to uuidv7 by @mogery in https://github.com/firecrawl/firecrawl/pull/2449
* Add Sentry Settings by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2451
* Filter Sentry Exceptions by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2453
* Add minAge parameter to scrape (ENG-4073) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2452
* Fix typos by @omahs in https://github.com/firecrawl/firecrawl/pull/2457
* fix docker-compose service build instructions by @davidkhala in https://github.com/firecrawl/firecrawl/pull/2406
* Cleanup tmp files from downloadFile by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2455
* Optimize Logs File Size by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2456
* Update express version by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2465
* Annotate test failures on CI by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2462
* fix(api/precrawl): precrawl logging + format + skip index by @delong3 in https://github.com/firecrawl/firecrawl/pull/2466
* fix(go-html-to-md): request body max 60MB by @delong3 in https://github.com/firecrawl/firecrawl/pull/2467
* fix(api): dns + crawl denial errors by @delong3 in https://github.com/firecrawl/firecrawl/pull/2469
* Disable markdown conversion for sitemap scrapes by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2461
* Add missing /v2/batch/scrape/:jobId/errors endpoint by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2471
* fix: improve pydantic parsing error handling | ENG-4070 by @Chadha93 in https://github.com/firecrawl/firecrawl/pull/2450
* fix: Make PostgreSQL credentials configurable via environment variables by @DraPraks in https://github.com/firecrawl/firecrawl/pull/2388
* feat(api): create users via referring integrations by @mogery in https://github.com/firecrawl/firecrawl/pull/2463
* feat: muv2 exp apikey env by @tomkosm in https://github.com/firecrawl/firecrawl/pull/2472
* (feat/search) Enterprise params by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2412
* Validate UUID from URL in Requests by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2392
* Disable Concurrency Limit on Self Hosted by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2475
* (js sdk)fix/ws deno by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2476
* fix(api): sitemap max age for map requests by @delong3 in https://github.com/firecrawl/firecrawl/pull/2479
* fix(api): sitemap max age for recursive sitemaps by @delong3 in https://github.com/firecrawl/firecrawl/pull/2480
* feat: new app database shape by @mogery in https://github.com/firecrawl/firecrawl/pull/2445
* chore(api): disable x-powered-by by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2483
* Skip subdomain logic for IP addresses by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2477
* Attempt Fix Search Tests by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2478
* fix(api): don't bill where stealth proxy was unsupported by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2484
* feat(extract): port to billing credits by @mogery in https://github.com/firecrawl/firecrawl/pull/2482
* feat: [self-host] - add support to configure concurrency for crawl by @Chadha93 in https://github.com/firecrawl/firecrawl/pull/2193
* Update AI SDK to Latest Version by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2369
* Fix Zod Error Handling on V0 by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2488
* fix: off-by-one bug in batch scrape pagination by @devhims in https://github.com/firecrawl/firecrawl/pull/2492
* fix: make auto-recharge email show actual credit amount instead of hardcoded 1000 by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2485
* fix: allow partial results when searching multiple sources by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2490
* gitignore test results xml by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2493
* Fix latest advisory issues by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2494
* feat(api): add sentry vercel ai integration by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2473
* feat(api/sentry): make sampling rates configurable via environment va… by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2495
* Python sdk fix/batch validate limit by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2399
* chore(sentry): set default TRACE_SAMPLE_RATE to 0 by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2498
* chore(api): disable vercel input/output tracing by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2499
* feat(api): concurrency limit info in scrape metadata by @delong3 in https://github.com/firecrawl/firecrawl/pull/2497
* engpicker POC by @mogery in https://github.com/firecrawl/firecrawl/pull/2501
* fix: skip URL rewriting for published Google Docs by @devhims in https://github.com/firecrawl/firecrawl/pull/2500
* fix: prevent empty cookie header in webhook callbacks by @devhims in https://github.com/firecrawl/firecrawl/pull/2504

## New Contributors
* @omahs made their first contribution in https://github.com/firecrawl/firecrawl/pull/2457
* @davidkhala made their first contribution in https://github.com/firecrawl/firecrawl/pull/2406
* @DraPraks made their first contribution in https://github.com/firecrawl/firecrawl/pull/2388
* @devhims made their first contribution in https://github.com/firecrawl/firecrawl/pull/2492

**Full Changelog**: https://github.com/firecrawl/firecrawl/compare/v2.6.0...v2.7.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v2.7.0` · 2025-12-05 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v2.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
