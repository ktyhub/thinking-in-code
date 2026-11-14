---
title: "MoneyPrinterTurbo v1.3.4"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.4"
version: "v1.3.4"
published: "2026-08-12"
type: "patch"
lang: "en"
summary: "Added a WebUI preference to disable automatically opening the task folder after video generation. · Generated videos now use the video subject as the download filename, with automatic numbering for multi-video tasks."
---

# MoneyPrinterTurbo v1.3.4

## Highlights

- Added a WebUI preference to disable automatically opening the task folder after video generation.
- Generated videos now use the video subject as the download filename, with automatic numbering for multi-video tasks.
- Added configurable Whisper `initial_prompt` support to improve subtitle recognition for names, terminology, and language-specific vocabulary.
- Added persistent material search caching to reduce duplicate provider requests, API usage, and rate-limit pressure.
- Stock material selection now prioritizes assets matching the target video orientation.
- Added sanitized material source provenance to task artifacts for easier source tracking.

## Fixes and Improvements

- Fixed WebUI configuration changes potentially blocking the page while a video generation task was running.
- Fixed the ElevenLabs API Key being cleared after a WebUI restart or browser reconnection.
- Unified ElevenLabs API Key resolution across TTS and music generation, including `ELEVENLABS_API_KEY` environment variable support.
- Fixed configuration updates when `config.toml` is provided through a bind mount.
- Improved diagnostics for Pixabay `429` responses and Cloudflare challenges.
- Prevented Pixabay API Keys from appearing in application logs.
- Added response and resource limits to ElevenLabs music requests to prevent excessive memory usage.
- API requests now reject video counts and clip durations below 1.
- Fixed Worker crashes caused by stale or invalid queued task parameters from earlier versions.
- Expanded the WebUI video subject input for easier editing of longer subjects.
- Updated project documentation and related resources.

## What's Changed

- Enforce ElevenLabs resource limits by @arichazan in https://github.com/harry0703/MoneyPrinterTurbo/pull/1131
- Redact Pixabay API Keys from logs by @its-How in https://github.com/harry0703/MoneyPrinterTurbo/pull/1130
- Validate positive video generation limits by @ShiroKSH in https://github.com/harry0703/MoneyPrinterTurbo/pull/1149
- Handle stale queued task parameters without crashing the Worker by @kapil971390 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1150
- Make Whisper `initial_prompt` configurable by @Blackspyda17 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1163

## New Contributors

- @arichazan made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1131
- @its-How made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1130
- @ShiroKSH made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1149
- @Blackspyda17 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1163

**Full Changelog**: https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.3...v1.3.4

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.3.4` · 2026-08-12 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
