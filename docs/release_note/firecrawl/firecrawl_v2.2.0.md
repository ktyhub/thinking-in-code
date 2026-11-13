---
title: "firecrawl v2.2.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.2.0"
published: "2025-09-12"
type: "minor"
lang: "en"
summary: "🔗 Full Changelog: v2.1.0...v2.2.0"
---

# firecrawl v2.2.0

## v2.2.0

### Features
- MCP version 3 is live. Stable support for cloud mcp with HTTP Transport and SSE modes. Compatible with v2 and v1 from.
- Webhooks: Now we support signatures + extract support + event failures
- Map is now 15x faster + supports more urls
- Search reliability improvements
- Usage is now tracked by API Key
- Support for additional locations (CA, CZ, IL, IN, IT, PL, and PT)
- Queue status endpoint
- Added `maxPages` parameter to v2 scrape API for pdf parsing

### Improvements
- **API:**  
  - New `/team/queue-status` endpoint.  
  - Added `nuq` feature.  
  - Added `VIASOCKET` integration.  
  - Historical credit/token usage endpoints with expanded data.
- **Student Program**: Support for more universities + students to get free credits through our student program
- **Map**: 15x faster and increased the limit to 100k
- **Scrape API:** Added `maxPages` parameter for PDF parser.
- **Python SDK:**  
  - Added `get_queue_status` to aio + normalization of docs in search results.
  - **SDKs:** Added next cursor pagination and integration param support.
- **Infrastructure:** Added static IP proxy pool + proxy location support.
- **Webhooks:** Implemented signatures, refactored sending, added scrape error events.
- **Performance:** Optimized map, converted Rust natives to single NAPI library.
- **CI/CD:** Revamped CI, added pre-commit hooks, cross-platform harness.


### 🐛 Fixes
- Corrected concurrency limit scaling.
- Fixed search result links/descriptions and retry mechanism for empty results.
- Re-signed expired screenshot URLs.
- Trimmed null chars from PDF titles + fixed encoding.
- Fixed sitemap parsing and added `.gz` sitemap support.
- Fixed js-sdk `zod-to-json-schema` import.
- Fixed webhook data format regression.
- Improved credit handling in account object.

### 🛠️ Chores & Other
- Removed unused dependencies, updated CONTRIBUTING.md.
- Added debug logging, ignored scripts during CI build.
- Various dependency bumps and build improvements.

**🔗 Full Changelog:** [v2.1.0...v2.2.0](https://github.com/firecrawl/firecrawl/compare/v2.1.0...v2.2.0)


## What's Changed
* feat(sdks): next cursor pagination by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2067
* feat: add maxPages parameter to PDF parser in v2 scrape API by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2047
* fix(concurrency-limit): scale! by @mogery in https://github.com/firecrawl/firecrawl/pull/2071
* feat(api): add /team/queue-status endpoint by @mogery in https://github.com/firecrawl/firecrawl/pull/2063
* build(deps): bump actions/checkout from 3 to 5 by @dependabot[bot] in https://github.com/firecrawl/firecrawl/pull/1998
* build(deps): bump actions/setup-python from 4 to 5 by @dependabot[bot] in https://github.com/firecrawl/firecrawl/pull/2028
* build(deps): bump docker/login-action from 1 to 3 by @dependabot[bot] in https://github.com/firecrawl/firecrawl/pull/1996
* build(deps): bump docker/build-push-action from 5 to 6 by @dependabot[bot] in https://github.com/firecrawl/firecrawl/pull/1995
* build(deps): bump actions/setup-node from 3 to 4 by @dependabot[bot] in https://github.com/firecrawl/firecrawl/pull/1997
* feat: historical credit/token usage endpoints + more data in existing usage endpoints by @mogery in https://github.com/firecrawl/firecrawl/pull/2077
* fix(api/tsconfig): remove baseUrl by @mogery in https://github.com/firecrawl/firecrawl/pull/2078
* fix(search): get links and descriptions correctly by @mogery in https://github.com/firecrawl/firecrawl/pull/2076
* fix(api/crawler/sitemap): bump sitemap limit by @mogery in https://github.com/firecrawl/firecrawl/pull/2079
* fix(api/scrapeURL/index): re-sign expired screenshot URLs by @mogery in https://github.com/firecrawl/firecrawl/pull/2080
* fix(python-sdk): added missing get_queue_status in aio and added to t… by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2081
* Fix go-html-to-md on Windows (ENG-3398) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2082
* fix(js-sdk): zod-to-json-schema import by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2083
* Replace custom address validation functions with ipaddr.js (ENG-3404) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2084
* fix(api/native/pdf-parser): trim null chars out of pdf titles by @mogery in https://github.com/firecrawl/firecrawl/pull/2086
* Fix sitemap parsing (ENG-3361) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2085
* Implement webhook signatures (ENG-3018) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2087
* Format api and add pre-commit hooks (ENG-3408) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2088
* Fix pre-commit hook by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2089
* Ignore scripts during CI build by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2090
* Add more debug logging to crawler by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2091
* Add proxy location support to crawl and map endpoints (ENG-3361) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2092
* post-incident changes by @mogery in https://github.com/firecrawl/firecrawl/pull/2095
* feat(python-sdk): normalize docs in search results by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2098
* Feat(sdks): integration param by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2096
* Refactor webhook sending (ENG-3426) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2094
* Fix webhook data format regression by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2106
* Update Type Annotations for v2 Async Search (SearchResponse → SearchData) by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2097
* Fire webhook events for scrape/batch scrape errors (ENG-3463) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2107
* Add static IP proxy pool (ENG-3420) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2103
* Convert all Rust natives to a single library using NAPI (ENG-3397) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2105
* Filter out invalidated index records (ENG-3396) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2102
* feat(sdk): added agent option by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2108
* feat(api): nuq by @mogery in https://github.com/firecrawl/firecrawl/pull/1984
* Make harness cross-platform compatible (ENG-3477) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2110
* Update error messages for self-hosted instances by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2119
* Revise /extract's error message when no content could be fetched from URLs  by @micahstairs in https://github.com/firecrawl/firecrawl/pull/2109
* Fix graceful credit handling in account object (ENG-3495) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2120
* fix(scrapeURL/f-e/scrape): bad failed schema by @mogery in https://github.com/firecrawl/firecrawl/pull/2123
* feat(ci): revamp by @mogery in https://github.com/firecrawl/firecrawl/pull/2124
* fix(api/native/pdf): get title with proper encoding by @mogery in https://github.com/firecrawl/firecrawl/pull/2125
* chore: remove unused dependencies + various CI fixes by @mogery in https://github.com/firecrawl/firecrawl/pull/2128
* Perform watching inside of harness (ENG-3514) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2131
* Add gzipped sitemap support (ENG-3520) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2132
* Remove .xml.gz from `include` entries by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2134
* fix(api): rearchitect crawl kickoff by @mogery in https://github.com/firecrawl/firecrawl/pull/2133
* Update CONTRIBUTING.md by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2141
* Update CONTRIBUTING.md by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2142
* (fix/search) Implement retry mechanisms for empty results by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2140
* Optimize map (ENG-3526) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2138
* feat(api): add VIASOCKET integration by @ftonato in https://github.com/firecrawl/firecrawl/pull/2143


**Full Changelog**: https://github.com/firecrawl/firecrawl/compare/v2.1.0...v2.2.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v2.2.0` · 2025-09-12 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v2.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
