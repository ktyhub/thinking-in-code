---
title: "VoiceStudio v0.5.6"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.6"
version: "v0.5.6"
published: "2026-09-23"
type: "patch"
lang: "en"
summary: "VoiceStudio now talks to your other tools. Answer Twilio phone calls in a saved voice, and connect Claude Code, Cursor, Codex CLI and the OpenAI Agents SDK to VoiceStudio with copyable setup that works, including in…"
---

# VoiceStudio v0.5.6

**VoiceStudio now talks to your other tools.** Answer Twilio phone calls in a saved voice, and connect Claude Code, Cursor, Codex CLI and the OpenAI Agents SDK to VoiceStudio with copyable setup that works, including in Docker, where MCP previously returned HTTP 405. Integration cards now say plainly which ones work with VoiceStudio and which are external links.

This release also lets you replace a saved clone's reference sample, clones long reference clips on OmniVoice, finishes long audiobook chapters on 8 GB GPUs, and keeps rendered chapters through a power-off or data-folder move.

**Download**

| Platform | Installer |
| --- | --- |
| Windows x64 | [Installer](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.6/VoiceStudio-Electron-0.5.6-win-x64.exe) |
| macOS Apple Silicon | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.6/VoiceStudio-Electron-0.5.6-mac-arm64.dmg) |
| macOS Intel | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.6/VoiceStudio-Electron-0.5.6-mac-x64.dmg) |
| Linux x64 | [AppImage](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.6/VoiceStudio-Electron-0.5.6-linux-x64.AppImage) · [deb](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.6/VoiceStudio-Electron-0.5.6-linux-x64.deb) |

**Upgrading:** Install over your existing Electron app; voices, projects and settings are kept. If setup asks, choose **Install local runtime** to refresh its dependencies. MCP clients configured with `/mcp` keep working; new exports use `/mcp/`. OpenAI-compatible `/v1` clients now get OpenAI-format errors with HTTP 400 instead of 422, and `response_format="mp3"` returns real MP3.

**Moving from Tauri:** Close the app, back up its data directory, install Electron, and verify your voices and projects before removing Tauri. Follow the [migration guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.6/docs/electron-migration.md). Tauri v0.5.3 remains the final Tauri release; its updater cannot install Electron.

**Installer trust:** Electron installers are unsigned or ad-hoc signed and are not Apple-notarized. Windows/macOS may show trust warnings. macOS automatic updates are unverified; use manual installer updates. See the [installation guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.6/docs/install/troubleshooting.md).

**Highlights**

- Answer Twilio phone calls with a greeting in a saved voice; off by default, with a local phone-quality test (#2291)
- Claude Code, Cursor, Codex CLI and the OpenAI Agents SDK connect to VoiceStudio with working setup (#2289, #2290)
- Replace a saved clone's reference sample, and clone from references longer than 20 s on OmniVoice (#2282, #2281) — thanks @Cengokill!
- Long audiobook chapters finish on 8 GB GPUs and survive a power-off or data-folder move (#2287, #2279) — thanks @Tran-Van-Hieu and @castlecreati!
- Malayalam numbers, chapter cue sheets, and captions without spoken markup tags (#2280, #2278, #2295) — thanks @nikhilkilivayil, @shivsin25 and @kevin9327!

### Changed

- Voice Clone says how much of a long reference the active engine uses instead of asking you to trim to 15 s (#2281) — thanks @Cengokill!

### Added

- Edit a saved voice clone's reference sample: play it, replace it by upload or recording, and save back to the same voice (#2282) — thanks @Cengokill!
- Answer Twilio phone calls in a saved voice: off by default, signed webhooks and single-use stream tokens, with a local phone-quality test (#2291)
- Malayalam dubs and audiobooks speak numbers, percentages, and decimals in Malayalam instead of reading raw digits (#2280) — thanks @nikhilkilivayil!
- Download a chapter cue sheet (`HH:MM:SS<TAB>Title`) after a Stories or Audiobook render; timestamps match the M4B's embedded chapters and give MP3 portable chapters (#2278) — thanks @shivsin25!
- The OpenAI Agents integration page gives a copyable snippet that runs the Agents SDK voice pipeline on VoiceStudio (#2290)
- The OpenAI-compatible API adds `GET /v1/models` and `POST /v1/audio/translations` (multilingual Whisper models; turbo models are refused) (#2290)
- Speech requests accept `stream_format` (`audio` or `sse`) and OpenAI's `{"id": ...}` voice object (#2290)
- Transcriptions pass `language`, `prompt` and `temperature` to Whisper engines and return `words` with `timestamp_granularities[]=word` (#2290)
- Integrations: copyable setup for Codex CLI (`config.toml`), any MCP client (HTTP or stdio), the VoiceStudio API (`curl` and OpenAI SDK), and Docker/GHCR (#2289)

### Fixed

- Pasted and imported captions no longer speak karaoke tags, `<i>`/`<font>` tags or `{\an8}` alignment prefixes, while SubRip dialogue such as `2 < 3` is kept; unchanged WebVTT and SubRip exports keep the original cue markup (#2295) — thanks @kevin9327!
- Saved voices and uploads longer than 20 s clone on OmniVoice again; the best passage is picked automatically (#2281) — thanks @Cengokill!
- VoxCPM2 no longer pairs a capped reference with a transcript of the whole clip (#2281)
- Speaker diarisation uses Lightning 2.6.6, which blocks code execution from a crafted checkpoint (#2296)
- Long audiobook chapters on 8 GB GPUs no longer time out while still rendering, and a timed-out chapter stops using the GPU after its current chunk (#2287) — thanks @Tran-Van-Hieu!
- On Windows, one reset connection no longer leaves the backend running but unreachable (#2276) — thanks @ialexbond!
- The official `openai` SDK and OpenAI Agents SDK work unchanged: `gpt-4o-mini-tts` and current OpenAI voice names no longer fail with "Unknown model" (#2290)
- OpenAI `instructions` now reaches the voice engine instead of being ignored; OmniVoice uses the voice-design tags in it (#2290)
- Speech `pcm` is 24 kHz as OpenAI specifies; `aac` and `opus` return real AAC and Opus, and a missing encoder is a clear error instead of a mislabelled WAV (#2290)
- Transcriptions report the detected language instead of always saying English, and `verbose_json` segments follow OpenAI's schema (#2290)
- OpenAI-compatible routes return errors in OpenAI's format, with 400 for invalid requests (#2290)
- Rendered audiobook chapters stay reusable after the data folder moves, and a power-off no longer empties the resume point or tears chapter audio (#2279) — thanks @castlecreati!
- An audiobook chapter-cache miss now logs which input changed since the cached render (#2279)
- MCP clients pointed at `/mcp` connect on Docker and source builds instead of getting HTTP 405 (#2289)
- MCP tools and `backend.speech_client` follow a backend moved with `OMNIVOICE_PORT` instead of assuming port 3900 (#2289)
- Integration cards show real capabilities: "Works with VoiceStudio" only where a setup exists, "External link" everywhere else (#2289)

### Docs

- Per-engine reference clip limits in the engine guide (#2281)
- Install with prompt is now a two-line prompt; the full agent steps live in [docs/install/agent.md](docs/install/agent.md) (#2288)

### Contributors

- @nikhilkilivayil — Malayalam number verbalization (#2280).
- @shivsin25 and @Shivendra-Coherent — chapter cue sheet export (#2278).
- @kevin9327 — caption markup stripping for dubbing (#2295).
- @debpalash — integrations (Twilio, MCP, OpenAI SDK), voice cloning, audiobook reliability, Windows backend, security updates and release validation.

### Bug reporters

- @ialexbond — Windows backend unreachable after a reset connection (#2276).
- @Tran-Van-Hieu — audiobook chapters timing out on an 8 GB GPU (#2287).
- @castlecreati — audiobook chapter cache lost after a power-off (#2279).
- @Cengokill — no way to replace a saved clone's reference sample (#2282).
- @Cengokill — long reference clips failed to clone on OmniVoice (#2281).

---

> **Source** [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · `v0.5.6` · 2026-09-23 · [upstream release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
