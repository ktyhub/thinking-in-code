---
title: "MoneyPrinterTurbo v1.3.0"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.0"
version: "v1.3.0"
published: "2026-06-10"
type: "minor"
lang: "en"
summary: "Added Coverr as a new stock video material provider, including WebUI API key management and 16:9-friendly defaults. · Added Groq as a new LLM provider."
---

# MoneyPrinterTurbo v1.3.0

## Highlights

- Added Coverr as a new stock video material provider, including WebUI API key management and 16:9-friendly defaults.
- Added Groq as a new LLM provider.
- Added no-voice video generation mode for workflows that do not need narration.
- Added configurable video encoder selection and safer hardware-encoder fallback behavior.
- Added AIHubMix provider integration.
- Added multilingual social metadata generation API.
- Added subtitle background options, including optional rounded translucent subtitle backgrounds.
- Improved WebUI localization coverage, including Arabic, German, Russian, Turkish, and Vietnamese updates.

## Fixes and Improvements

- Improved repeated video material reuse behavior.
- Fixed final SRT subtitle block handling.
- Fixed subtitle matching for markdown-style script markers.
- Fixed Qwen response parsing edge cases.
- Upgraded and hardened selected dependencies and deployment defaults.
- Refactored Azure voice data into JSON for easier maintenance.
- Improved README and setup documentation quality.

## What's Changed

* refactor(voice): extract Azure voice data to JSON by @domantasjo in https://github.com/harry0703/MoneyPrinterTurbo/pull/951
* fix: use Optional[list] type annotation in upload_post.py by @kuishou68 in https://github.com/harry0703/MoneyPrinterTurbo/pull/960
* i18n(vi): complete Vietnamese UI translation (135/135 keys) by @luongs3 in https://github.com/harry0703/MoneyPrinterTurbo/pull/963
* docs(README-en): remove obsolete ImageMagick requirement and fix doc quality issues by @jonathanzhan1975 in https://github.com/harry0703/MoneyPrinterTurbo/pull/977
* fix: keep last subtitle when SRT has no trailing blank line by @Bortlesboat in https://github.com/harry0703/MoneyPrinterTurbo/pull/987
* fix: handle empty Qwen choices by @Sushanth012 in https://github.com/harry0703/MoneyPrinterTurbo/pull/994
* i18n: complete Russian WebUI translation by @DrMaks22 in https://github.com/harry0703/MoneyPrinterTurbo/pull/996
* feat: add Groq support by @RafaGomezGuillen in https://github.com/harry0703/MoneyPrinterTurbo/pull/997
* fix(groq): add default model name + clarify unvalidated manual entry warning by @kapil971390 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1014
* feat: add Coverr video material source by @shoujche in https://github.com/harry0703/MoneyPrinterTurbo/pull/1008

## New Contributors

* @domantasjo made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/951
* @kuishou68 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/960
* @luongs3 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/963
* @jonathanzhan1975 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/977
* @Bortlesboat made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/987
* @Sushanth012 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/994
* @DrMaks22 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/996
* @RafaGomezGuillen made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/997
* @kapil971390 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1014
* @shoujche made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1008

## Validation

- `uv lock --check`
- `uv run --with pytest pytest test/services -q`
- Result: 117 passed, 1 skipped, 18 warnings, 9 subtests passed.

**Full Changelog**: https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.2.9...v1.3.0

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.3.0` · 2026-06-10 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
