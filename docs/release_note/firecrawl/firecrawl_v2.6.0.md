---
title: "firecrawl v2.6.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.6.0"
version: "v2.6.0"
published: "2025-11-14"
type: "minor"
lang: "en"
---

# firecrawl v2.6.0

# v2.6.0

## Highlights
- **Unified Billing Model** - Credits and tokens merged into single system. Extract now uses credits (15 tokens = 1 credit), existing tokens work everywhere.
- **Full Release of Branding Format** - Full support across Playground, MCP, JS and Python SDKs.
- **Change Tracking** - Faster and more reliable detection of web page content updates.
- **Reliability and Speed Improvements** - All endpoints significantly faster with improved reliability.
- **Instant Credit Purchases** - Buy credit packs directly from dashboard without waiting for auto-recharge.
- **Improved Markdown Parsing** - Enhanced markdown conversion and main content extraction accuracy.
- **Core Stability Fixes** - Fixed change-tracking issues, PDF timeouts, and improved error handling.

## What's Changed
* fix(mu): Bug fix on v2 exp by @tomkosm in https://github.com/firecrawl/firecrawl/pull/2345
* Allow index use with waitFor (ENG-3481) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2346
* Fix autoCharge return, add top level guard by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2341
* fix: import MAX_MAP_LIMIT from types.ts to resolve 1000 URL cap by @prashu0705 in https://github.com/firecrawl/firecrawl/pull/2333
* chore: improve llm extract logging by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2348
* fix: error truncation by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2349
* feat(go-html-to-md): enhance markdown conversion with robust PRE and … by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2321
* feat(billing): merge credits and tokens by @mogery in https://github.com/firecrawl/firecrawl/pull/2352
* chore: update geoip database by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2354
* Implement Branding Format by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2326
* Filter non-HTTP(S) protocols with separate error message by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2357
* Add branding format support to JS and Python SDKs by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2360
* Fix: Handle invalid favicon URLs gracefully in metadata extraction by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2361
* feat: allow disabling webhook delivery by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2367
* feat: add engine forcing by domain pattern by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2371
* revert nuq commits by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2376
* CI: Remove npm audit from server tests by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2385
* ci: Fix dependency audit by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2386
* (fix/ctracking) Fix change tracking issues by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2391
* update: Adds support for recursive schema for `python-sdk` with model selection by @Chadha93 in https://github.com/firecrawl/firecrawl/pull/2266
* fix: image search field mapping in Python SDK by @naaa760 in https://github.com/firecrawl/firecrawl/pull/2244
* fix(api/scrape): document + pdf scrape loop by @delong3 in https://github.com/firecrawl/firecrawl/pull/2396

## New Contributors
* @prashu0705 made their first contribution in https://github.com/firecrawl/firecrawl/pull/2333
* @naaa760 made their first contribution in https://github.com/firecrawl/firecrawl/pull/2244

**Full Changelog**: https://github.com/firecrawl/firecrawl/compare/v2.5.0...v2.6.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v2.6.0` · 2025-11-14 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v2.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
