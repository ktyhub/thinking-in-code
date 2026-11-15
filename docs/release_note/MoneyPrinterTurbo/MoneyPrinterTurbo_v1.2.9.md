---
title: "MoneyPrinterTurbo v1.2.9"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.2.9"
version: "v1.2.9"
published: "2026-05-30"
type: "patch"
lang: "en"
summary: "Added advanced script settings in WebUI · script paragraph count · custom script requirements · optional full custom system prompt for advanced users"
---

# MoneyPrinterTurbo v1.2.9

## What's Changed

### New features
- Added advanced script settings in WebUI:
  - script paragraph count
  - custom script requirements
  - optional full custom system prompt for advanced users
- Added Xiaomi MiMo LLM provider support.
- Added Xiaomi MiMo TTS provider support.
- Improved Ollama default base URL handling for Docker environments.

### Fixes and improvements
- Fixed custom BGM path handling for WebUI and API flows.
- Fixed Windows WebUI launcher robustness.
- Fixed `webui.sh` to bind/open `127.0.0.1` by default instead of opening `0.0.0.0`.
- Fixed string video concat mode handling in downloads.
- Fixed subtitle wrapping for long text.
- Fixed Edge TTS signed-zero rate formatting.
- Added missing Turkish translation keys.
- Fixed README-en ImageMagick code fence.

### Testing
- Added regression coverage for LLM provider behavior, local TTS/video task paths, video concat mode handling, and advanced script prompt settings.
- Verified advanced script settings end-to-end with real script generation, TTS, Pexels material download, subtitle generation, and final video synthesis.

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.2.9` · 2026-05-30 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.2.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
