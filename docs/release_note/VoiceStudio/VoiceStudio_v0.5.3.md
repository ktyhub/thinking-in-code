---
title: "VoiceStudio v0.5.3"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.3"
version: "v0.5.3"
published: "2026-09-17"
type: "patch"
lang: "en"
summary: "A new look. A new desktop app. Still your voices, on your machine."
---

# VoiceStudio v0.5.3

**A new look. A new desktop app. Still your voices, on your machine.**

VoiceStudio moves to **Electron** with v0.5.3: a redesigned workspace for voice cloning, voice design, stories, dubbing, and transcription. Electron is now the primary desktop app on Windows, macOS, and Linux. Local voice creation still runs on your own hardware, without a required account or API key.

![VoiceStudio's new Electron interface: voice cloning, saved voices, workspace navigation, and synthesis controls](https://raw.githubusercontent.com/debpalash/VoiceStudio/v0.5.3/docs/media/electron/voice-cloning.png)

**Highlights**

- A redesigned desktop with dedicated workspaces, collapsible navigation, and resizable sidebars (#1823, #2129)
- Four-step setup with model packs and optional dictation configuration (#2129)
- Better dubbing: zoomable timelines, saved translation direction, and background sound preserved around dialogue (#2129)
- A simpler Model Catalogue and one-click installs for VoxCPM2, MOSS-TTS-Nano, and CosyVoice 3 (#2013, #2021, #2022, #2025)
- More reliable generation on older NVIDIA GPUs and live remote-worker CPU, GPU, and memory readings (#2135, #2155)

![The Electron dubbing workspace with source and translated demos, language controls, and synchronized playback](https://raw.githubusercontent.com/debpalash/VoiceStudio/v0.5.3/docs/media/electron/dubbing.png)

**Get the new desktop app**

| Platform | Electron installer |
| --- | --- |
| Windows x64 | [Download EXE](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.3/VoiceStudio-Electron-0.5.3-win-x64.exe) |
| macOS Apple Silicon | [Download DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.3/VoiceStudio-Electron-0.5.3-mac-arm64.dmg) |
| macOS Intel | [Download DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.3/VoiceStudio-Electron-0.5.3-mac-x64.dmg) |
| Linux x64 | [AppImage](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.3/VoiceStudio-Electron-0.5.3-linux-x64.AppImage) · [DEB](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.3/VoiceStudio-Electron-0.5.3-linux-x64.deb) |

**Moving from Tauri? Install Electron separately.**

v0.5.3 is also the final Tauri update. The Tauri updater will not switch you to Electron; choose a **VoiceStudio-Electron** installer above. Legacy Tauri assets remain available for existing installations.

1. Close Tauri and back up its entire data directory, plus any reference audio stored elsewhere.
2. Install Electron and check its storage/backend configuration points to your existing data before generating. Never run both apps against that directory at once.
3. Verify your voices, projects, history, and model locations; generate a short clip before removing Tauri.
4. Recheck devices, shortcuts, theme, backend address, permissions, and credentials. Desktop preferences and credentials are not guaranteed to transfer.

[Read the migration guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.3/docs/electron-migration.md) · [Compare all changes since v0.5.2](https://github.com/debpalash/VoiceStudio/compare/v0.5.2...v0.5.3)

### Changed

- Electron becomes the primary desktop app; Tauri retains a separate final update path (#2157)
- Workspace sidebars resize and remember their width; video previews show thumbnails and keep playback controls in view (#2129)
- Model Catalogue groups speech, transcription, and language models with engine details and downloadable weights together (#2013, #2020)
- Models and voice previews move to Settings → Storage; the Hugging Face mirror moves to Network (#2013)
- Integrations gets a searchable workspace covering 100+ tools, with provider details and configuration guidance (#2129)
- Support pages gain donation cards, a workspace shortcut, and sponsor contact details (#2129)
- README adds an Electron UI tour and refreshed screenshots; installable agent skills follow the new desktop workflow (#2129, #2157)
- README explains the desktop transition and keeps contributions welcome (#2153) — thanks @cyberspace-cs!

### Added

- VoxCPM2, MOSS-TTS-Nano, and CosyVoice 3 install in isolated environments without disrupting other engines (#2021, #2022, #2025)
- Remote workers report CPU, GPU, and memory usage; unavailable readings stay distinct from zero (#2155) — thanks @velixio!
- Dubbing translation shows live logs, supports cancellation and retries, and remembers custom tone instructions (#2129)

### Fixed

- Older NVIDIA GPUs, including Tesla T4, no longer kill the backend on first generation (#2135) — thanks @Shivendra-Coherent!
- Disabling torch.compile works across desktop platforms and through the environment override; native crashes leave diagnostic stacks (#2135) — thanks @Shivendra-Coherent!
- Dubbing keeps short segments proportional, supports timeline zoom, and removes duplicate transcription context (#2129)
- Dubs preserve original sound outside dialogue, keep replacement speech complete, repair missing speech caches, and reject incomplete output (#2129)
- Dubbing demos keep playback aligned across languages and can open a sample in the editor (#2131, #2157)
- Pressing Play before a video finishes loading now starts it when ready (#2129)
- Native dictation, watch folders, and Wayland shortcuts share desktop contracts; focused paste stays ordered (#2122)
- macOS sidebar controls clear the window buttons; Linux and Windows sidebar headers expand and collapse consistently (#2126, #2129)
- Stopping an already-exiting process on macOS no longer reports a permissions failure (#2032)
- YouTube bot-check errors explain how to supply signed-in cookies in Dub (#2036, #2034) — thanks @celvintr!
- Engine startup failures distinguish timeouts, crashes, and invalid responses (#2037, #2026) — thanks @dajiaohuang!
- PyTorch Whisper transcribes M4A files and uses a model-appropriate VRAM budget on 6 GB NVIDIA cards (#2042, #2039, #2044, #2041) — thanks @xabiherdz-svg!
- MCP transcription waits follow the backend timeout instead of failing after 120 seconds (#2043, #2040) — thanks @xabiherdz-svg!
- CosyVoice 3 dependency updates address five security advisories (#2030, #2031)

### CI

- Release publication waits for platform artifacts and checksums; unsigned Electron builds require an explicit owner dispatch (#2029, #2157)
- Desktop integration checks cover current dubbing, navigation, and model workflows; worker teardown tests tolerate slower Windows runners (#2157, #2038)

### Contributors

- @debpalash — Electron migration, redesigned workspaces, release engineering, and integration of community fixes.
- @Shivendra-Coherent — the older-NVIDIA generation fix and compile/crash diagnostics (#2135).
- @velixio — remote-worker telemetry and reliability improvements (#2155).
- @cyberspace-cs — documentation for the Electron transition (#2153).
- Thanks to @ShimeKano, @celvintr, @dajiaohuang, and @xabiherdz-svg for the bug reports behind this release's GPU, download, startup, transcription, and MCP fixes.
- Dependency updates supplied by @dependabot[bot] (#2030, #2031).

### Electron installer trust
These Electron installers are unsigned or ad-hoc signed and are not Apple-notarized.
Windows/macOS may show trust warnings. macOS automatic updates are unverified;
use manual installer updates. Tauri updater signatures remain independently verified.

---

> **Source** [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · `v0.5.3` · 2026-09-17 · [upstream release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
