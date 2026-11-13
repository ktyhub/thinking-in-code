---
title: "firecrawl v2.3.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.3.0"
published: "2025-09-19"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/firecrawl/firecrawl/compare/v2.2.0...v2.3.0"
---

# firecrawl v2.3.0

## v2.3.0

### New Features
- **YouTube Support:** You can now get YouTube transcripts
- **Enterprise Auto-Recharge:** Added enterprise support for auto-recharge  
- **odt and .rtf**: Now support odt and rtf file parsing
- **Docx Parsing**: 50x faster docx parsing
- **K8s Deployment:** Added NuQ worker deployment example  
- **Self Host**: Tons of improvements for our self host users

### Improvements & Fixes
- **Stability:** Fixed timeout race condition, infinite scrape loop, and location query bug  
- **Tooling:** Replaced ts-prune with knip, updated pnpm with minimumReleaseAge  
- **Docs:** Added Rust to CONTRIBUTING and fixed typos  
- **Security:** Fixed `pkgvuln` issue

## What's Changed
* Update blocklist by @micahstairs in https://github.com/firecrawl/firecrawl/pull/2150
* docs: fix typo and punctuation in CONTRIBUTING.md by @jarrensj in https://github.com/firecrawl/firecrawl/pull/2149
* Fix timeout error message race condition for ENG-3372 by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2144
* Add exceptions to blocklist by @micahstairs in https://github.com/firecrawl/firecrawl/pull/2156
* fix: pkgvuln by @mogery in https://github.com/firecrawl/firecrawl/pull/2158
* Replace ts prune with knip (ENG-3540) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2148
* feat(auto-recharge): enterprise by @mogery in https://github.com/firecrawl/firecrawl/pull/2127
* feat(scrapeURL/index): index metrics by @mogery in https://github.com/firecrawl/firecrawl/pull/2160
* Update pnpm and add minimumReleaseAge (ENG-3560) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2162
* feat(api/scrapeURL): add special support for YouTube watch pages by @mogery in https://github.com/firecrawl/firecrawl/pull/2157
* fix(scrapeURL/index): locations array querying bug by @mogery in https://github.com/firecrawl/firecrawl/pull/2164
* Fix infinite loop when scraping a forbidden webpage (ENG-3339) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2147
* Add Rust to CONTRIBUTING by @oalsing in https://github.com/firecrawl/firecrawl/pull/2180
* feat(scrapeURL/summary): use gpt-5-mini by @mogery in https://github.com/firecrawl/firecrawl/pull/2174
* Custom Rust document parser (ENG-3489) by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2159
* feat: add NuQ worker deployment to Kubernetes examples by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2163
* feat(api): move blocklist to DB by @mogery in https://github.com/firecrawl/firecrawl/pull/2186

## New Contributors
* @jarrensj made their first contribution in https://github.com/firecrawl/firecrawl/pull/2149
* @oalsing made their first contribution in https://github.com/firecrawl/firecrawl/pull/2180

**Full Changelog**: https://github.com/firecrawl/firecrawl/compare/v2.2.0...v2.3.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v2.3.0` · 2025-09-19 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v2.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
