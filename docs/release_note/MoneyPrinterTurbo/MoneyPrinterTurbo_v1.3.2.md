---
title: "MoneyPrinterTurbo v1.3.2"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.2"
version: "v1.3.2"
published: "2026-07-12"
type: "patch"
lang: "en"
summary: "Redesigned the WebUI with a cleaner responsive layout, a dedicated settings dialog, improved dark mode support, and a more consistent interaction experience."
---

# MoneyPrinterTurbo v1.3.2

## Highlights

- Redesigned the WebUI with a cleaner responsive layout, a dedicated settings dialog, improved dark mode support, and a more consistent interaction experience.
- Added task management with status filtering, progress tracking, video playback, folder access, deletion, and regeneration from historical task settings.
- Added a lightweight onboarding tour to guide new users through configuration, video options, and generation.
- Added built-in LLM connection testing so provider credentials and model settings can be verified before generation.
- Centralized LLM provider metadata, defaults, configuration tips, and registration links for more consistent setup and maintenance.
- Added video cache statistics and cleanup controls.
- Expanded the command-line workflow and added the MoneyPrinterTurbo Agent skill for automated video generation.
- Updated the project version to v1.3.2.

## Fixes and Improvements

- Migrated Gemini text and TTS integrations from the deprecated `google-generativeai` SDK to the new `google-genai` SDK.
- Fixed WebUI selectors that sometimes required two selections before a change took effect.
- Preserved generation logs across Streamlit reruns and fixed logger cleanup errors after successful generation.
- Improved task state normalization so filtering works consistently across all UI languages.
- Prevented running tasks from being deleted and tightened task file operation boundaries.
- Improved audio settings with clearer narration modes, provider-specific setup guidance, and more consistent preview controls.
- Fixed Azure TTS V2 preview generation so the selected speech rate is applied correctly.
- Improved subtitle settings, background controls, contrast warnings, default restoration, and multilingual rendering reliability.
- Disabled subtitle backgrounds by default while retaining optional rounded translucent backgrounds.
- Added automatic video encoder selection with safer fallback to `libx264`.
- Improved video duration handling with a small safety margin to prevent incomplete output.
- Fixed duration detection for custom audio formats other than MP3.
- Improved LLM provider defaults, descriptions, registration links, and multilingual configuration guidance.
- Removed deprecated or unsupported provider and video source options.
- Improved WebUI performance by caching font and background music discovery.
- Updated Streamlit and related dependencies, Docker configurations, startup scripts, and toolbar behavior.
- Refined multilingual UI copy and layout across all supported languages.
- Updated README documentation, screenshots, gallery previews, configuration examples, and the Colab notebook.
- Expanded regression coverage for WebUI state, task management, providers, CLI workflows, subtitles, caching, and configuration.

## What's Changed

- Fix custom audio duration handling for non-MP3 files by @pcbntt in https://github.com/harry0703/MoneyPrinterTurbo/pull/1099
- Add a video duration safety buffer by @Sushanth012 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1003

**Full Changelog**: https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.1...v1.3.2

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.3.2` · 2026-07-12 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
