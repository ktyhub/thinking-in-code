---
title: "firecrawl v2.9.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.9.0"
version: "v2.9.0"
published: "2026-04-10"
type: "minor"
lang: "en"
summary: "Browser Interaction via /interact endpoint — Scrape a page, then call /interact to take actions on it — click buttons, fill forms, navigate deeper, or extract dynamic content."
---

# firecrawl v2.9.0

# Firecrawl v2.9.0

## Improvements

- **Browser Interaction via `/interact` endpoint** — Scrape a page, then call `/interact` to take actions on it — click buttons, fill forms, navigate deeper, or extract dynamic content. Describe what you want in natural language via `prompt`, or write Playwright code (Node.js, Python) and Bash (`agent-browser`) for full control. Sessions persist across calls, with live view and interactive live view URLs for real-time browser streaming. Persistent profiles let you save and reuse browser state (cookies, localStorage) across scrapes. Available in JS, Python, Java, and Rust SDKs.
- **`query` format** — Added `query` format to the `/scrape` endpoint — pass a natural-language prompt and get a direct answer back in `data.answer`.
- **`audio` format** — Added `audio` format option to scrape responses, returning audio output as a field on the document.
- **`onlyCleanContent` parameter** — Added `onlyCleanContent` parameter to the `/scrape` endpoint, which strips navigation, ads, cookie banners, and other non-semantic content from markdown output.
- **PDF parsing modes** — Added PDF parsing modes (`fast`, `auto`, `ocr`) and a `maxPages` option to control extraction depth and OCR behavior.
- **Java and Elixir SDKs** — Added official Java and Elixir SDKs with full v2 API support.
- **Legacy `.doc` file support** — Added support for parsing legacy `.doc` files.
- **Wikimedia engine** — Added a dedicated engine for scraping Wikipedia and Wikimedia pages with improved output quality.
- **`contentType` in scrape responses** — Added `contentType` to scrape responses for PDFs and documents.
- **PDF pipeline improvements** — Improved PDF pipeline with better table detection, header/footer stripping, mixed PDF handling, inline image parsing, and magic byte detection.
- **Branding extraction** — Improved branding extraction to skip hidden DOM elements for cleaner output.
- **HTML-to-markdown performance** — Improved HTML-to-markdown conversion performance and fixed code blocks losing content during conversion.
- **Concurrency queue** — New concurrency queue system with reconciler and backfill for more reliable job scheduling.
- **Rust SDK v2** — Added v2 API namespace with agent support to the Rust SDK.
- Fixed Python SDK parameters `timeout`, `max_retries`, and `backoff_factor` — these were previously accepted but silently ignored.
- Capped job timeouts at 48 hours to prevent runaway jobs from consuming resources.
- Added retry limits to prevent scrape loops.
- Binary content types are now rejected early in the scrape pipeline to avoid wasted processing.

## Fixes

- Fixed empty responses when using the `o3-mini` model on extract jobs.
- Fixed revoked API keys remaining valid for up to 10 minutes after deletion.
- Fixed a race condition in extract jobs that caused "Job not found" crashes.
- Fixed `time_taken` in `/v1/map` always returning ~0.
- Fixed crawl status responses now surfacing a `failed` status with an error message and partial data when a crawl-level failure occurs.
- Fixed `maxPages` not being passed to the PDF extractor — previously, full PDF content was returned while only charging for the limited page count.
- Fixed free request credits being incorrectly consumed and billed on agent jobs exceeding the `maxCredits` threshold.
- Fixed dashboard displaying incorrect concurrency limits due to stale reads.
- Fixed branding `colors.secondary` not being populated.
- Fixed `removeBase64Images` running after `deriveDiff` in the transformer pipeline, causing diff issues.
- Fixed GCS fetch using wrong row index for cache info lookups.
- Fixed unhandled `ZodError` in `/v1/search` controller.
- Resolved multiple CVEs across dependencies including `handlebars`, `path-to-regexp`, `fast-xml-parser`, `rollup` (CVE-2026-27606), `undici`, and others.
- Hardened the Playwright service against SSRF attacks.

## API

- Added `GET /v2/team/activity` endpoint for listing recent scrape, crawl, and extract jobs with cursor-based pagination (last 24 hours, up to 100 results per page, filterable by endpoint type).
- Added `regexOnFullURL` parameter on crawl requests to apply `includePaths`/`excludePaths` filtering against the full URL including query parameters. Available in JS, Python, Java, and Elixir SDKs.
- Added `deduplicateSimilarURLs` parameter on crawl requests. Available in JS, Python, Java, and Elixir SDKs.
- Deprecated the `extract` endpoint — use the `/agent` endpoint instead. Existing `extract` methods in JS and Python SDKs are marked deprecated.
- Renamed `persistentSession` to `profile` on browser/interact requests (`writeMode` is now `saveChanges`). The old parameter name remains functional but is no longer documented.

---

## New Contributors

* @misza-one made their first contribution in https://github.com/firecrawl/firecrawl/pull/2660
* @madmikeross made their first contribution in https://github.com/firecrawl/firecrawl/pull/2948
* @rowinsg made their first contribution in https://github.com/firecrawl/firecrawl/pull/3065
* @Bortlesboat made their first contribution in https://github.com/firecrawl/firecrawl/pull/3243
* @dagecko made their first contribution in https://github.com/firecrawl/firecrawl/pull/3249
* @cokemine made their first contribution in https://github.com/firecrawl/firecrawl/pull/3262
* @paulonasc made their first contribution in https://github.com/firecrawl/firecrawl/pull/3275

## Contributors

* @nickscamara
* @mogery
* @amplitudesxd
* @abimaelmartell
* @ericciarla
* @rafaelsideguide
* @delong3
* @devhims
* @Chadha93
* @tomsideguide
* @charlietlamb
* @developersdigest
* @micahstairs
* @rhys-firecrawl
* @firecrawl-spring
* @devin-ai-integration
* @misza-one
* @madmikeross
* @rowinsg
* @Bortlesboat
* @dagecko
* @cokemine
* @paulonasc

---

**Full Changelog**: https://github.com/firecrawl/firecrawl/compare/v2.8.0...v2.9.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v2.9.0` · 2026-04-10 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v2.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
