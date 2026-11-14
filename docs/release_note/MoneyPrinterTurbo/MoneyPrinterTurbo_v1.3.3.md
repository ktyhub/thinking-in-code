---
title: "MoneyPrinterTurbo v1.3.3"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.3"
version: "v1.3.3"
published: "2026-07-24"
type: "patch"
lang: "en"
summary: "Added full voiceover preview with estimated duration before video generation. Preview audio can be reused when the final generation settings remain unchanged."
---

# MoneyPrinterTurbo v1.3.3

## Highlights

- Added full voiceover preview with estimated duration before video generation. Preview audio can be reused when the final generation settings remain unchanged.
- Added optional video-matched background music generation through Sonilo and ElevenLabs, with graceful fallback when music generation fails.
- Added custom background music uploads directly from the WebUI.
- Added a global video clip speed control and new ZoomIn / ZoomOut transitions.
- Added lightweight, non-blocking update notifications in the WebUI.
- Hardened task execution and recovery across the WebUI, API, and CLI, with clearer stage and error tracking.

## Fixes and Improvements

- Fixed Windows portable-package startup failures caused by conflicting Python `app` packages.
- Fixed the WebUI becoming blank after starting video generation.
- Preserved generation progress, logs, and terminal task states across Streamlit reruns.
- Improved interrupted-task recovery and kept social publishing failures independent from successful video generation.
- Added queue limits and more reliable state updates for cross-platform publishing.
- Prevented unexpected Whisper model fallback when another subtitle provider fails.
- Fixed LLM provider errors being passed into material keyword generation.
- Fixed repeated cleanup attempts for the same temporary video file.
- Allowed video materials that fall only a few pixels below the nominal minimum resolution because of encoder rounding.
- Standardized TTS API key links and provider setup guidance.
- Completed missing secondary translations across supported WebUI languages.
- Added line-ending normalization for more consistent contributions across Windows, macOS, and Linux.
- Expanded CI coverage for task execution, API controllers, media handling, queues, application startup, and failure recovery.

## What's Changed

- Expand the full CI test suite by @rongdu88668-ux in https://github.com/harry0703/MoneyPrinterTurbo/pull/1048
- Fix LLM term generation error handling by @techdou in https://github.com/harry0703/MoneyPrinterTurbo/pull/1097
- Add custom background music uploads by @pcbntt in https://github.com/harry0703/MoneyPrinterTurbo/pull/1101
- Add line-ending normalization by @Kizuno18 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1103
- Add ZoomIn / ZoomOut video transitions by @Kizuno18 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1104
- Add a global video clip speed control by @pcbntt in https://github.com/harry0703/MoneyPrinterTurbo/pull/1106
- Improve tolerance for slightly undersized video materials by @pcbntt in https://github.com/harry0703/MoneyPrinterTurbo/pull/1108
- Add optional Sonilo video-matched background music by @cindyxu1030 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1114

## New Contributors

- @rongdu88668-ux made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1048
- @techdou made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1097
- @Kizuno18 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1103
- @cindyxu1030 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1114

**Full Changelog**: https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.2...v1.3.3

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.3.3` · 2026-07-24 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
