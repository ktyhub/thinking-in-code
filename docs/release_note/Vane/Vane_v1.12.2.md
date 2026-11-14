---
title: "Vane v1.12.2"
project: "Vane"
repo: "ItzCrazyKns/Vane"
tag: "v1.12.2"
version: "v1.12.2"
published: "2026-04-10"
type: "patch"
lang: "en"
summary: "The Deep Research pipeline now operates on a more aggressive Reason-Search-Scrape-Extract-Repeat cycle. The system iteratively identifies top-tier websites, scrapes their full content, and extracts key data points to…"
---

# Vane v1.12.2

## What's Changed

  * Fixed history double-conversion bugs to ensure smoother suggestion generation.
  * Added validation and timeouts to prevent hung search requests.
  * Improved widget execution handling; errors no longer crash the entire research pipeline.
  * Resolved build-time errors by addressing missing package dependencies.
  * Fixed edge cases involving non-array search query formats.
  * Integrated `serverUtils` and updated the reverse geolocation API for better accuracy.
  * Enhanced error handling for file upload workflows.
  * Added a Chromium-based scraper for better compatibility with modern web pages.
  * Implemented a new, optimized `executeSearch` function.
  * Leveraged embeddings to filter search results, preventing context window overflow and improving relevance.

## Improvements in Deep Research Mode

The Deep Research pipeline now operates on a more aggressive Reason-Search-Scrape-Extract-Repeat cycle. The system iteratively identifies top-tier websites, scrapes their full content, and extracts key data points to inform subsequent research steps before generating the final response. While this adds a bit more processing time, the depth of insight is substantially increased.

To support this high volume data extraction, we now manage the context window dynamically. By processing and feeding data in optimized chunks, the system prevents context overflow while ensuring all relevant information from the multi-stage research process is considered.

![https://github.com/user-attachments/assets/bc7bed6a-2cae-4a47-b39a-bcbd6d57ba40](https://github.com/user-attachments/assets/bc7bed6a-2cae-4a47-b39a-bcbd6d57ba40)

## New Contributors

  * @marexxxxxxx made their first contribution in [#1041](https://github.com/ItzCrazyKns/Vane/pull/1041)
  * @joaquinescalante23 made their first contribution in [#1015](https://github.com/ItzCrazyKns/Vane/pull/1015)
  * @saschabuehrle made their first contribution in [#1076](https://github.com/ItzCrazyKns/Vane/pull/1076)
  * @nickorlabs made their first contribution in [#1082](https://github.com/ItzCrazyKns/Vane/pull/1082)

**Full Changelog**: [v1.12.1...v1.12.2](https://github.com/ItzCrazyKns/Vane/compare/v1.12.1...v1.12.2)

---

> **Source** [ItzCrazyKns/Vane](https://github.com/ItzCrazyKns/Vane) · `v1.12.2` · 2026-04-10 · [upstream release](https://github.com/ItzCrazyKns/Vane/releases/tag/v1.12.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
