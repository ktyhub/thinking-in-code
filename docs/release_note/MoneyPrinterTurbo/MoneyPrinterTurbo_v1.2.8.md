---
title: "MoneyPrinterTurbo v1.2.8"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.2.8"
version: "v1.2.8"
published: "2026-05-28"
type: "patch"
lang: "en"
summary: "This release collects the bug fixes, provider additions, security hardening, deployment fixes, and PRs merged since v1.2.7."
---

# MoneyPrinterTurbo v1.2.8

## MoneyPrinterTurbo v1.2.8

This release collects the bug fixes, provider additions, security hardening, deployment fixes, and PRs merged since `v1.2.7`.

### Highlights

- Added LiteLLM provider support for 100+ compatible model gateways.
- Added Grok/xAI provider support through the existing OpenAI-compatible LLM path.
- Added WebUI support for uploading custom audio and generating a video from local narration.
- Improved Gemini TTS and Edge subtitle compatibility after recent dependency updates.
- Fixed Azure LLM provider routing so AzureOpenAI requests use the Azure client path correctly.
- Updated the Google Colab notebook to use an isolated `uv` environment and avoid Colab global dependency conflicts.

### Bug Fixes

- Fixed subtitle splitting so numbers with thousands separators such as `1,000` are preserved.
- Fixed Redis task pagination and task state listing behavior.
- Fixed bundled ffmpeg discovery for video concatenation.
- Closed audio clips after duration probing to avoid file handle leaks.
- Suppressed noisy MoviePy probing output during material inspection.
- Added timeout handling for hanging Edge TTS streams.
- Hardened LiteLLM response parsing for empty choices/messages.
- Improved Windows portable updater and Azure TTS compatibility.
- Restored Gemini TTS subtitle generation when using the edge subtitle provider.

### Security And Hardening

- Hardened task folder opening and path validation.
- Hardened uploaded/retrieved media file path handling.
- Added task queue bounds and safer queue behavior.
- Restored TLS verification for external material/API requests.
- Disabled risky g4f usage by default and moved it behind an explicit optional dependency path.
- Added focused regression tests for file path, task state, LLM, material, video, and voice behavior.

### Documentation And Deployment

- Added a system requirements matrix to the README.
- Fixed README typos in Chinese and English docs.
- Allowed Redis host override in Docker deployments.
- Updated Colab setup to use `uv sync --frozen --python 3.11` and launch Streamlit through `uv run`.

### Merged PRs

- #861 Docker Redis host override.
- #891 README typo fix.
- #897 regression test for `video_transition_mode=None`.
- #900 README-en typo fix.
- #903 Grok provider support.

### Validation

Before tagging this release:

```bash
uv lock --check
uv run python -m unittest test.services.test_llm test.services.test_video.TestVideoService.test_combine_videos_handles_none_transition_mode test.services.test_voice.TestVoiceService.test_edge_cue_aggregation_handles_thousand_separator_comma
uv run python -m compileall app webui
```

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.2.8` · 2026-05-28 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.2.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
