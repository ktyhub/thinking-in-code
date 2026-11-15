---
title: "firecrawl v1.14.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v1.14.0"
version: "v1.14.0"
published: "2025-07-04"
type: "minor"
lang: "en"
summary: "We're excited to announce the release of Firecrawl v1.14.0, packed with cool updates."
---

# firecrawl v1.14.0

## v1.14.0 Release

We're excited to announce the release of Firecrawl v1.14.0, packed with cool updates.

- Authenticated scraping (Join the waitlist [here](https://firecrawl.dev/authenticated-scraping))
- Zero data retention for enterprise (Email us at [help@firecrawl.com](mailto:help@firecrawl.com) to enable it)
- Improved p75 speeds
- New MCP version w/ maxAge + better tool calling
- Open Researcher Example (Open Source Researcher). See [repo](https://github.com/mendableai/open-researcher)
- And so much more 🔥

## What's Changed
* fix json format on search (ENG-2529) by @mogery in https://github.com/mendableai/firecrawl/pull/1729
* proxy used improvement by @mogery in https://github.com/mendableai/firecrawl/pull/1727
* add pdf prefetch log for debugging (ENG-2542) by @mogery in https://github.com/mendableai/firecrawl/pull/1734
* (feat/ledger) Ledger events by @nickscamara in https://github.com/mendableai/firecrawl/pull/1728
* fix(auto_charge): bad hourly counter logic by @mogery in https://github.com/mendableai/firecrawl/pull/1736
* feat: implement IDN support with Punycode encoding by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1735
* feat(scrapeURL): ask user to increase timeout if there's a DOM.getDocument or queryAXTree error by @mogery in https://github.com/mendableai/firecrawl/pull/1739
* feat(queue-worker): decrease job lock duration to pick up jobs on dead workers faster by @mogery in https://github.com/mendableai/firecrawl/pull/1737
* feat(crawl-status): better creditsUsed field by @mogery in https://github.com/mendableai/firecrawl/pull/1738
* (fix/sdk) Fixes Extract with show_sources=True causes JSON parsing error by @nickscamara in https://github.com/mendableai/firecrawl/pull/1740
* fix(map): pass timeout to sitemap fetch by @mogery in https://github.com/mendableai/firecrawl/pull/1741
* feat(api): zero data retention (ENG-2376) by @mogery in https://github.com/mendableai/firecrawl/pull/1687
* Fix protocol change in firecrawl services by @nickscamara in https://github.com/mendableai/firecrawl/pull/1742
* Fix queue worker liveness endpoint for self-hosted environments (ENG-2587) by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1747
* feat(firecrawl): add integration parameter support and enhance kwargs handling by @ftonato in https://github.com/mendableai/firecrawl/pull/1715
* bugfix zero_data_retention param and certifi dependency by @rafaelsideguide in https://github.com/mendableai/firecrawl/pull/1749
* Add health check endpoint for Playwright service (ENG-2585) by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1752
* Add URL depth validation to crawl requests (ENG-2617) by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1753
* fix(api/deep-research): bad default values leading to bug on self-host by @mogery in https://github.com/mendableai/firecrawl/pull/1754
* Make error message for backwards crawling more clear by @micahstairs in https://github.com/mendableai/firecrawl/pull/1758
* Implement JavaScript-only base href handling (ENG-2302) by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1756
* fix(html-transformer): check base tag when resolving relative URLs by @mogery in https://github.com/mendableai/firecrawl/pull/1761
* html-transformer improvements by @mogery in https://github.com/mendableai/firecrawl/pull/1762
* Implement fallback mechanism for onlyMainContent scraping (ENG-2499) by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1759
* Add end-to-end test for deep research functionality (ENG-2627) by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1760
* feat: add waitFor validation rule to enforce waitFor <= timeout/2 by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1751
* fix: replace hardcoded search billing with calculateCreditsToBeBilled by @devin-ai-integration in https://github.com/mendableai/firecrawl/pull/1714
* feat(scrapeURL/fire-engine): start AB testing by @mogery in https://github.com/mendableai/firecrawl/pull/1763


**Full Changelog**: https://github.com/mendableai/firecrawl/compare/v1.13.0...v1.14.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v1.14.0` · 2025-07-04 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v1.14.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
