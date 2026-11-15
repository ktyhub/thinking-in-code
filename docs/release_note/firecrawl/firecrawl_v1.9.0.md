---
title: "firecrawl v1.9.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.9.0"
version: "v1.9.0"
published: "2025-05-16"
type: "minor"
lang: "en"
summary: "Supabase client fixes · Fixed support for LLM Providers · Crawl is much faster now · Global adoption of cacheable lookup system"
---

# firecrawl v1.9.0

## Firecrawl v1.9.0 Release

### **What's New:**

**Self-Host Improvements**
- Supabase client fixes
- Fixed support for LLM Providers
- Crawl is much faster now
- Global adoption of cacheable lookup system
- Easier setup

**MCP Improvements (v1.11.0)**
- Tons of improvements to it (prompts, examples, and how to use params properly)

**SDK & API Enhancements**
- Added change tracking to SDK 2.0
- Crawl delay support with per-crawl concurrency limiting
- New Qwen3 crawler example via OpenRouter
- Cancel batch scrape endpoint

**Performance & Limits**
- Global adoption of cacheable lookup system
- Increased map endpoint limit from 5,000 to 30,000 links
- Search schema limit increased from 50 to 100

**Fixes & Stability**
- Better error handling for SSL failures
- Optional chaining bug fixes
- WaitAction field validation in firecrawl-py
- Concurrency queue reworked to prioritize by time, not priority

**Dashboard (Cloud version)**
- New activity logs

## What's Changed
* (sdk/py) Change Tracking Added to 2.0 by @nickscamara in https://github.com/mendableai/firecrawl/pull/1506
* Fix sdk/schemas by @rafaelsideguide in https://github.com/mendableai/firecrawl/pull/1507
* Fix: Handle both dict and model instances in actions parameter by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1508
* [feat] Implement GCS storage option for scrape results across controllers an… by @rafaelsideguide in https://github.com/mendableai/firecrawl/pull/1500
* (batch/scrape) Cancel batch scrape endpoint by @nickscamara in https://github.com/mendableai/firecrawl/pull/1509
* Add Qwen3 web crawler example using OpenRouter by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1510
* Add crawl delay functionality with per-crawl concurrency limiting (FIR-249) by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1413
* Add delay parameter to crawl options in all SDKs by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1514
* refactor: maximum links limit for map endpoint from 5000 to 30000 by @ftonato in https://github.com/mendableai/firecrawl/pull/1523
* fix(concurrency-limit): rework cc queue to work by time not priority (FIR-1890) by @mogery in https://github.com/mendableai/firecrawl/pull/1526
* fix(queue-worker, scrape): stealth proxy pricing change (FIR-1847) by @mogery in https://github.com/mendableai/firecrawl/pull/1521
* feat(acuc): propagate team flags (FIR-1879) by @mogery in https://github.com/mendableai/firecrawl/pull/1522
* [Bug Fix] Make WaitAction milliseconds field optional in firecrawl-py by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1533
* create openAI provider using base url parameter by @y0hnn in https://github.com/mendableai/firecrawl/pull/1480
* refactor: increase max limit for search request schema from 50 to 100 by @ftonato in https://github.com/mendableai/firecrawl/pull/1545
* feat(scrapeURL): better error for SSL failures by @mogery in https://github.com/mendableai/firecrawl/pull/1552
* Fix/optional chaining operators missing by @tribixbite in https://github.com/mendableai/firecrawl/pull/1549
* feat(api/extract/fire-0): error logging (FIR-1971) by @mogery in https://github.com/mendableai/firecrawl/pull/1556
* feat: use cacheable lookup everywhere by @mogery in https://github.com/mendableai/firecrawl/pull/1559
* Mog/cachable lookup by @mogery in https://github.com/mendableai/firecrawl/pull/1560
* Add caching for RunPod PDF markdown results in GCS by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1561
* Fix Supabase client configuration errors when USE_DB_AUTHENTICATION is false by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1534

## New Contributors
* @y0hnn made their first contribution in https://github.com/mendableai/firecrawl/pull/1480
* @tribixbite made their first contribution in https://github.com/mendableai/firecrawl/pull/1549

**Full Changelog**: https://github.com/mendableai/firecrawl/compare/v1.8.0...v1.9.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v1.9.0` · 2025-05-16 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v1.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
