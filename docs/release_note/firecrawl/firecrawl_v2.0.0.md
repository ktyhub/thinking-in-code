---
title: "firecrawl v2.0.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.0.0"
version: "v2.0.0"
published: "2025-08-19"
type: "major"
lang: "en"
summary: "Faster by default: Requests are cached with maxAge defaulting to 2 days, and sensible defaults like blockAds, skipTlsVerification, and removeBase64Images are enabled."
---

# firecrawl v2.0.0

# Introducing v2.0.0

### Key Improvements

* **Faster by default**: Requests are cached with `maxAge` defaulting to 2 days, and sensible defaults like `blockAds`, `skipTlsVerification`, and `removeBase64Images` are enabled.

* **New summary format**: You can now specify `"summary"` as a format to directly receive a concise summary of the page content.

* **Updated JSON extraction**: JSON extraction and change tracking now use an object format: `{ type: "json", prompt, schema }`. The old `"extract"` format has been renamed to `"json"`.

* **Enhanced screenshot options**: Use the object form: `{ type: "screenshot", fullPage, quality, viewport }`.

* **New search sources**: Search across `"news"` and `"images"` in addition to web results by setting the `sources` parameter.

* **Smart crawling with prompts**: Pass a natural-language `prompt` to crawl and the system derives paths/limits automatically. Use the new crawl-params-preview endpoint to inspect the derived options before starting a job.

## Quick migration checklist

* Replace v1 client usage with v2 clients:
  * JS: `const firecrawl = new Firecrawl({ apiKey: 'fc-YOUR-API-KEY' })`
  * Python: `firecrawl = Firecrawl(api_key='fc-YOUR-API-KEY')`
  * API: use the new `https://api.firecrawl.dev/v2/` endpoints.
* Update formats:
  * Use `"summary"` where needed
  * JSON mode: Use `{ type: "json", prompt, schema }` for JSON extraction
  * Screenshot and Screenshot\@fullPage: Use screenshot object format when specifying options
* Adopt standardized async flows in the SDKs:
  * Crawls: `startCrawl` + `getCrawlStatus` (or `crawl` waiter)
  * Batch: `startBatchScrape` + `getBatchScrapeStatus` (or `batchScrape` waiter)
  * Extract: `startExtract` + `getExtractStatus` (or `extract` waiter)
* Crawl options mapping (see below)
* Check crawl `prompt` with `crawl-params-preview`

## SDK surface (v2)

### JS/TS

#### Method name changes (v1 → v2)

**Scrape, Search, and Map**

| v1 (FirecrawlApp)     | v2 (Firecrawl)            |
| --------------------- | ------------------------- |
| `scrapeUrl(url, ...)` | `scrape(url, options?)`   |
| `search(query, ...)`  | `search(query, options?)` |
| `mapUrl(url, ...)`    | `map(url, options?)`      |

**Crawling**

| v1                          | v2                              |
| --------------------------- | ------------------------------- |
| `crawlUrl(url, ...)`        | `crawl(url, options?)` (waiter) |
| `asyncCrawlUrl(url, ...)`   | `startCrawl(url, options?)`     |
| `checkCrawlStatus(id, ...)` | `getCrawlStatus(id)`            |
| `cancelCrawl(id)`           | `cancelCrawl(id)`               |
| `checkCrawlErrors(id)`      | `getCrawlErrors(id)`            |

**Batch Scraping**

| v1                                | v2                                  |
| --------------------------------- | ----------------------------------- |
| `batchScrapeUrls(urls, ...)`      | `batchScrape(urls, opts?)` (waiter) |
| `asyncBatchScrapeUrls(urls, ...)` | `startBatchScrape(urls, opts?)`     |
| `checkBatchScrapeStatus(id, ...)` | `getBatchScrapeStatus(id)`          |
| `checkBatchScrapeErrors(id)`      | `getBatchScrapeErrors(id)`          |

**Extraction**

| v1                            | v2                     |
| ----------------------------- | ---------------------- |
| `extract(urls?, params?)`     | `extract(args)`        |
| `asyncExtract(urls, params?)` | `startExtract(args)`   |
| `getExtractStatus(id)`        | `getExtractStatus(id)` |

**Other / Removed**

| v1                                | v2                    |
| --------------------------------- | --------------------- |
| `generateLLMsText(...)`           | (not in v2 SDK)       |
| `checkGenerateLLMsTextStatus(id)` | (not in v2 SDK)       |
| `crawlUrlAndWatch(...)`           | `watcher(jobId, ...)` |
| `batchScrapeUrlsAndWatch(...)`    | `watcher(jobId, ...)` |

#### Type name changes (v1 → v2)

**Core Document Types**

| v1           | v2               |
| ---------------------------- | ---------------------------- |
| `FirecrawlDocument`         | `Document`                   |
| `FirecrawlDocumentMetadata` | `DocumentMetadata`           |

**Scrape, Search, and Map Types**

| v1           | v2               |
| ---------------------------- | ---------------------------- |
| `ScrapeParams`               | `ScrapeOptions`              |
| `ScrapeResponse`             | `Document`                   |
| `SearchParams`               | `SearchRequest`              |
| `SearchResponse`             | `SearchData`                 |
| `MapParams`                  | `MapOptions`                 |
| `MapResponse`                | `MapData`                    |

**Crawl Types**

| v1           | v2               |
| ---------------------------- | ---------------------------- |
| `CrawlParams`                | `CrawlOptions`               |
| `CrawlStatusResponse`        | `CrawlJob`                   |

**Batch Operations**

| v1            | v2               |
| ---------------------------- | ---------------------------- |
| `BatchScrapeStatusResponse`  | `BatchScrapeJob`             |

**Action Types**

| v1            | v2               |
| ---------------------------- | ---------------------------- |
| `Action`                     | `ActionOption`               |

**Error Types**

| v1           | v2              |
| ---------------------------- | ---------------------------- |
| `FirecrawlError`             | `SdkError`                   |
| `ErrorResponse`              | `ErrorDetails`               |

***

### Python (sync)

#### Method name changes (v1 → v2)

**Scrape, Search, and Map**

| v1                | v2            |
| ----------------- | ------------- |
| `scrape_url(...)` | `scrape(...)` |
| `search(...)`     | `search(...)` |
| `map_url(...)`    | `map(...)`    |

**Crawling**

| v1                        | v2                      |
| ------------------------- | ----------------------- |
| `crawl_url(...)`          | `crawl(...)` (waiter)   |
| `async_crawl_url(...)`    | `start_crawl(...)`      |
| `check_crawl_status(...)` | `get_crawl_status(...)` |
| `cancel_crawl(...)`       | `cancel_crawl(...)`     |

**Batch Scraping**

| v1                             | v2                             |
| ------------------------------ | ------------------------------ |
| `batch_scrape_urls(...)`       | `batch_scrape(...)` (waiter)   |
| `async_batch_scrape_urls(...)` | `start_batch_scrape(...)`      |
| `get_batch_scrape_status(...)` | `get_batch_scrape_status(...)` |
| `get_batch_scrape_errors(...)` | `get_batch_scrape_errors(...)` |

**Extraction**

| v1                        | v2                        |
| ------------------------- | ------------------------- |
| `extract(...)`            | `extract(...)`            |
| `start_extract(...)`      | `start_extract(...)`      |
| `get_extract_status(...)` | `get_extract_status(...)` |

**Other / Removed**

| v1                                   | v2                     |
| ------------------------------------ | ---------------------- |
| `generate_llms_text(...)`            | (not in v2 SDK)        |
| `get_generate_llms_text_status(...)` | (not in v2 SDK)        |
| `watch_crawl(...)`                   | `watcher(job_id, ...)` |

***

### Python (async)

* `AsyncFirecrawl` mirrors the same methods (all awaitable).

## Formats and scrape options

* Use string formats for basics: `"markdown"`, `"html"`, `"rawHtml"`, `"links"`, `"summary"`.
* Instead of `parsePDF` use `parsers: [ { "type": "pdf" } | "pdf" ]`.
* Use object formats for JSON, change tracking, and screenshots:

### JSON format

 ```bash
  curl -X POST https://api.firecrawl.dev/v2/scrape \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer YOUR_API_KEY' \
      -d '{
        "url": "https://docs.firecrawl.dev/",
        "formats": [{
          "type": "json",
          "prompt": "Extract the company mission from the page."
        }]
      }'
 ```

### Screenshot format

```bash cURL
  curl -X POST https://api.firecrawl.dev/v2/scrape \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer YOUR_API_KEY' \
      -d '{
        "url": "https://docs.firecrawl.dev/",
        "formats": [{
          "type": "screenshot",
          "fullPage": true,
          "quality": 80,
          "viewport": { "width": 1280, "height": 800 }
        }]
      }'
 ```

## Crawl options mapping (v1 → v2)

| v1                      | v2                                                   |
| ----------------------- | ---------------------------------------------------- |
| `allowBackwardCrawling` | (removed) use `crawlEntireDomain`                    |
| `maxDepth`              | (removed) use `maxDiscoveryDepth`                    |
| `ignoreSitemap` (bool)  | `sitemap` (e.g., `"only"`, `"skip"`, or `"include"`) |
| (none)                  | `prompt`                                             |

## Crawl prompt + params preview

See crawl params preview examples:

```bash
  curl -X POST https://api.firecrawl.dev/v2/crawl-params-preview \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer YOUR_API_KEY' \
      -d '{
        "url": "https://docs.firecrawl.dev",
        "prompt": "Extract docs and blog"
      }'
```


## What's Changed
* Add a couple exceptions to our blocked list by @micahstairs in https://github.com/firecrawl/firecrawl/pull/1816
* fix(api/v1/types): depth check throws error if URL is invalid by @mogery in https://github.com/firecrawl/firecrawl/pull/1821
* (feat/rtxt) Improved robots control on scrape via flags  by @nickscamara in https://github.com/firecrawl/firecrawl/pull/1820
* fix/actions dict attributeError by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/1824
* feat(types): add JSON schema validation to schema options in extractO… by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/1803
* fix(python-sdk): add max_age parameter to scrape_url validation by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1825
* Restore Rust link filtering logic by @mogery in https://github.com/firecrawl/firecrawl/pull/1822
* feat: modified docker image to be runable by any UID by @expruc in https://github.com/firecrawl/firecrawl/pull/1819
* fix(api): update vulnerable pkgs by @mogery in https://github.com/firecrawl/firecrawl/pull/1829
* fix: more packaging vulns by @mogery in https://github.com/firecrawl/firecrawl/pull/1831
* chore(deps): bump form-data from 4.0.0 to 4.0.4 in /apps/js-sdk by @dependabot[bot] in https://github.com/firecrawl/firecrawl/pull/1832
* chore(deps): bump axios from 1.6.8 to 1.11.0 in /apps/js-sdk by @dependabot[bot] in https://github.com/firecrawl/firecrawl/pull/1833
* chore(deps): bump esbuild and tsx in /apps/js-sdk by @dependabot[bot] in https://github.com/firecrawl/firecrawl/pull/1834
* fix(js-sdk): remaining pkg vulns by @mogery in https://github.com/firecrawl/firecrawl/pull/1835
* fix(crawl): only extend URLs at pre-finish if changeTracking is on (ENG-2900) by @mogery in https://github.com/firecrawl/firecrawl/pull/1837
* fix(queue-worker): clean up stalled jobs to not get crawls stuck (ENG-2902) by @mogery in https://github.com/firecrawl/firecrawl/pull/1838
* fix(queue-worker): improve stalled job cleaner (ENG-2907) by @mogery in https://github.com/firecrawl/firecrawl/pull/1839
* feat: rewrite sitemap XML parsing from JavaScript to Rust (ENG-2904) by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1840
* Fix robots.txt parser panic with content type validation by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1843
* Add allowTeammateInvites flag to TeamFlags type by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1847
* Fix ignoreQueryParameters being ignored in URL deduplication - ENG-2804 by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1846
* ENG-2829: Fix isSubdomain bug by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1845
* fix(crawler/sitemap): improvements by @mogery in https://github.com/firecrawl/firecrawl/pull/1842
* Add __experimental_omceDomain flag for debugging and benchmarking by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1844
* feat: Add iframe selector transformation for includeTags and excludeTags by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1850
* fix(worker/antistall/kickoff): bad check (ENG-2936) by @mogery in https://github.com/firecrawl/firecrawl/pull/1859
* Update batch_billing.ts by @nickscamara in https://github.com/firecrawl/firecrawl/pull/1860
* hotfix by @mogery in https://github.com/firecrawl/firecrawl/pull/1861
* fix(queue-service): get rid of done billing jobs much faster by @mogery in https://github.com/firecrawl/firecrawl/pull/1862
* further logging by @mogery in https://github.com/firecrawl/firecrawl/pull/1863
* more logs by @mogery in https://github.com/firecrawl/firecrawl/pull/1864
* Fixes #1870: correct maxConcurrency calculation by @wwhurley in https://github.com/firecrawl/firecrawl/pull/1871
* fix(html-to-markdown): reinitialize converter lib for every conversion (ENG-2956) by @mogery in https://github.com/firecrawl/firecrawl/pull/1872
* Revert go version in Dockerfile by @mogery in https://github.com/firecrawl/firecrawl/pull/1873
* fix(crawl-status): move count_jobs_of_crawl_team after checks by @mogery in https://github.com/firecrawl/firecrawl/pull/1875
* update koffi by @mogery in https://github.com/firecrawl/firecrawl/pull/1876
* feat(v2): add natural language prompt support to crawl API by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1877
* Fix robots.txt HTML filtering to check content structure by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1880
* fix(go): add mutex to prevent concurrent access issues in html-to-markdown by @mogery in https://github.com/firecrawl/firecrawl/pull/1883
* feat: better log attribute propagation (ENG-2934) by @mogery in https://github.com/firecrawl/firecrawl/pull/1857
* fix(js-sdk): add retry logic for socket hang up errors in monitorJobStatus (ENG-3029) by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1893
* Fix Pydantic field name shadowing issues causing import NameError by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1800
* feat: add crawlTtlHours team flag to replace teamIdsExcludedFromExpiry by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1899
* feat(crawler): replace robotstxt library with texting_robots for ENG-3016 by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1895
* queue-worker: move scrape worker to separate threads (ENG-3008) by @mogery in https://github.com/firecrawl/firecrawl/pull/1879
* fix(crawl-redis): attempt to cleanup crawl memory post finish by @mogery in https://github.com/firecrawl/firecrawl/pull/1901
* fix: convert timeout from milliseconds to seconds in Python SDK by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1894
* feat(python-sdk): implement missing crawl_entire_domain parameter by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1896
* Improve error handling in Python SDK for non-JSON responses by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/1827
* feat: queue multiplexing by @mogery in https://github.com/firecrawl/firecrawl/pull/1902
* fix(docs): correct link to Map by @ChetanGoti in https://github.com/firecrawl/firecrawl/pull/1904
* feat(v2): parsers + merge w/ main by @mogery in https://github.com/firecrawl/firecrawl/pull/1907
* (feat/index) Domain frequency aggregator by @nickscamara in https://github.com/firecrawl/firecrawl/pull/1908
* fix(api): add database fallback to crawl errors endpoint by @mogery in https://github.com/firecrawl/firecrawl/pull/1909
* feat(v2): Add viewport parameter for screenshots by @mogery in https://github.com/firecrawl/firecrawl/pull/1910
* feat(scrape-v2): Implement skipTlsVerification support for fetch and playwright engines by @mogery in https://github.com/firecrawl/firecrawl/pull/1911
* feat(v2): Set default maxAge to 4 hours for scrape endpoint by @mogery in https://github.com/firecrawl/firecrawl/pull/1915
* Fix v1 API JSON/extract format backward compatibility on v2 by @mogery in https://github.com/firecrawl/firecrawl/pull/1917
* Fix: Handle --max-old-space-size flag for worker threads by @Josh-M42 in https://github.com/firecrawl/firecrawl/pull/1922
* feat: langfuse integration by @mogery in https://github.com/firecrawl/firecrawl/pull/1928
* ENG-3088: Change parsers parameter from object to array format by @mogery in https://github.com/firecrawl/firecrawl/pull/1931
* feat(python-sdk): add agent parameter support to scrape_url method by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/1919
* fix: prevent PDF scrapes with parsePDF:false from being indexed by @mogery in https://github.com/firecrawl/firecrawl/pull/1933
* feat(crawl-redis): reduce `crawl:<id>:visited` size in Redis by 16x by @mogery in https://github.com/firecrawl/firecrawl/pull/1936
* feat: adding on-demand search endpoint by @ftonato in https://github.com/firecrawl/firecrawl/pull/1852
* fix(queue-worker): turn off useWorkerThreads in sandboxed scrape worker by @mogery in https://github.com/firecrawl/firecrawl/pull/1941
* fix(scrapeURL/pdf): better timeout error for PDF scrapes by @mogery in https://github.com/firecrawl/firecrawl/pull/1942
* feat(scrape-worker): reintroduce OTEL for accurate LLM cost tracking by @mogery in https://github.com/firecrawl/firecrawl/pull/1943
* feat(api/ai-sdk): add labels to vertex/google calls by @mogery in https://github.com/firecrawl/firecrawl/pull/1944
* test(v2/crawl): implement tests for crawl API with prompt parameter by @mogery in https://github.com/firecrawl/firecrawl/pull/1929
* feat(ci): audit NPM packages on PR by @mogery in https://github.com/firecrawl/firecrawl/pull/1947
* fix(tests/scrape): make `maxAge: 0` explicit in Index tests by @mogery in https://github.com/firecrawl/firecrawl/pull/1946
* ENG-3089: Support both string and object format inputs in v2 scrape API by @mogery in https://github.com/firecrawl/firecrawl/pull/1932
* feat(v2/timeout): initial new waterfalling system (ENG-2922) by @mogery in https://github.com/firecrawl/firecrawl/pull/1950
* feat(v2): extract by @mogery in https://github.com/firecrawl/firecrawl/pull/1955
* feat(v2): error handling by @mogery in https://github.com/firecrawl/firecrawl/pull/1957
* Test new mu version by @tomkosm in https://github.com/firecrawl/firecrawl/pull/1958
* Update mu by @tomkosm in https://github.com/firecrawl/firecrawl/pull/1959
* feat(api/admin): prometheus metrics about cc limit queue by @mogery in https://github.com/firecrawl/firecrawl/pull/1963
* fix(api): stop using bulljobs_teams table by @mogery in https://github.com/firecrawl/firecrawl/pull/1962
* fix(queue-service): reduce redis connections to BullMQ by @mogery in https://github.com/firecrawl/firecrawl/pull/1966
* fix(crawl-status, extract-status): reduce the use of BullMQ getState by @mogery in https://github.com/firecrawl/firecrawl/pull/1968
* feat(api): add OTEL everywhere by @mogery in https://github.com/firecrawl/firecrawl/pull/1969
* feat(crawl-status): refactor by @mogery in https://github.com/firecrawl/firecrawl/pull/1971
* (feat/api) v2 by @nickscamara in https://github.com/firecrawl/firecrawl/pull/1841

## New Contributors
* @expruc made their first contribution in https://github.com/firecrawl/firecrawl/pull/1819
* @wwhurley made their first contribution in https://github.com/firecrawl/firecrawl/pull/1871
* @ChetanGoti made their first contribution in https://github.com/firecrawl/firecrawl/pull/1904
* @Josh-M42 made their first contribution in https://github.com/firecrawl/firecrawl/pull/1922

**Full Changelog**: https://github.com/firecrawl/firecrawl/compare/v1.15.0...v2.0.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v2.0.0` · 2025-08-19 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v2.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
