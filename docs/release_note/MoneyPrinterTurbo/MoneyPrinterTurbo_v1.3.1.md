---
title: "MoneyPrinterTurbo v1.3.1"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.1"
version: "v1.3.1"
published: "2026-07-06"
type: "patch"
lang: "en"
summary: "Added new LLM providers and integrations, including AIML API, EvoLink, and VolcEngine Ark. · Added new TTS options, including ElevenLabs and self-hosted OpenAI-compatible Chatterbox TTS."
---

# MoneyPrinterTurbo v1.3.1

## Highlights

- Added new LLM providers and integrations, including AIML API, EvoLink, and VolcEngine Ark.
- Added new TTS options, including ElevenLabs and self-hosted OpenAI-compatible Chatterbox TTS.
- Added optional TwelveLabs video AI integration for smarter material understanding and reranking.
- Added YouTube Shorts publishing support through Upload-Post.
- Added a pure CLI workflow and exposed more WebUI-backed video parameters to command-line generation.
- Added GHCR Docker image publishing for easier container deployment.
- Improved multilingual WebUI support, including Indonesian and Spanish updates, plus explicit `es-ES` script generation support.

## Fixes and Improvements

- Fixed subtitle background clipping and improved subtitle rendering reliability.
- Fixed custom-audio subtitle generation when using Whisper.
- Fixed Windows MoviePy temporary-audio handling to avoid Windows Defender interference.
- Fixed Streamlit first-run prompt blocking WebUI startup.
- Fixed LLM provider selectbox switching that sometimes required selecting twice.
- Fixed video duration safety margin handling.
- Fixed `video_contact_mode` typo compatibility by correctly using `video_concat_mode`.
- Fixed Pollinations default API endpoint.
- Improved robust JSON parsing for fenced or multi-line LLM responses.
- Exposed `match_materials_to_script` in the terms API.
- Improved material matching to better follow script order.
- Hardened CLI argument validation for local video material workflows.
- Redacted LLM error output to avoid leaking sensitive details.
- Updated sponsor acknowledgements and provider copy.

## What's Changed

- Add pure CLI workflow for headless video generation by @copilot-swe-agent in https://github.com/harry0703/MoneyPrinterTurbo/pull/1005
- Fix `video_contact_mode` typo and use `video_concat_mode` by @reyys in https://github.com/harry0703/MoneyPrinterTurbo/pull/1021
- Add AIML API provider by @D1m7asis in https://github.com/harry0703/MoneyPrinterTurbo/pull/1022
- Fix Pollinations default endpoint by @muhamadmaliqia in https://github.com/harry0703/MoneyPrinterTurbo/pull/1025
- Fix robust JSON parsing from fenced / multi-line LLM responses by @xlab-nyc in https://github.com/harry0703/MoneyPrinterTurbo/pull/1026
- Fix MoviePy temporary-audio handling on Windows by @mertfurkandgn in https://github.com/harry0703/MoneyPrinterTurbo/pull/1029
- Prevent Streamlit first-run prompt from blocking WebUI startup by @BinaryOutlook in https://github.com/harry0703/MoneyPrinterTurbo/pull/1030
- Add CI and targeted quality fixes by @BinaryOutlook in https://github.com/harry0703/MoneyPrinterTurbo/pull/1031
- Validate `--video-source local` constraints in CLI by @kapil971390 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1033
- Port GUI-backed customization options to CLI by @BinaryOutlook in https://github.com/harry0703/MoneyPrinterTurbo/pull/1035
- Add Spanish (Spain) WebUI translation by @lsopenad in https://github.com/harry0703/MoneyPrinterTurbo/pull/1037
- Add YouTube Shorts support through Upload-Post API by @lsopenad in https://github.com/harry0703/MoneyPrinterTurbo/pull/1046
- Expose `match_materials_to_script` in the `/terms` endpoint by @kapil971390 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1065
- Add Indonesian WebUI translation by @mteguhfh in https://github.com/harry0703/MoneyPrinterTurbo/pull/1066
- Add ElevenLabs TTS support by @nhatanh2996 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1071
- Add Chatterbox TTS provider by @pcbntt in https://github.com/harry0703/MoneyPrinterTurbo/pull/1077
- Fix YouTube Shorts metadata upload by @kapil971390 in https://github.com/harry0703/MoneyPrinterTurbo/pull/1078
- Add optional TwelveLabs video AI integration by @mohit-twelvelabs in https://github.com/harry0703/MoneyPrinterTurbo/pull/1084

## New Contributors

- @copilot-swe-agent made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1005
- @reyys made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1021
- @D1m7asis made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1022
- @muhamadmaliqia made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1025
- @xlab-nyc made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1026
- @mertfurkandgn made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1029
- @BinaryOutlook made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1030
- @lsopenad made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1037
- @mteguhfh made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1066
- @nhatanh2996 made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1071
- @pcbntt made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1077
- @mohit-twelvelabs made their first contribution in https://github.com/harry0703/MoneyPrinterTurbo/pull/1084

**Full Changelog**: https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.0...v1.3.1

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.3.1` · 2026-07-06 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
