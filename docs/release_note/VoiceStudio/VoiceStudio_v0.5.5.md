---
title: "VoiceStudio v0.5.5"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.5"
version: "v0.5.5"
published: "2026-09-22"
type: "patch"
lang: "en"
summary: "Your voice, another language. The Clone workspace now keeps your chosen output language when changing voice samples. For example, an English reference can read a French script with a multilingual engine;"
---

# VoiceStudio v0.5.5

**Your voice, another language.** The Clone workspace now keeps your chosen output language when changing voice samples. For example, an English reference can read a French script with a multilingual engine; Auto in Clone follows the script instead of inheriting the reference profile's language.

This release also makes Electron installation easier to recover, fixes script-editor and integration-catalog glitches, and makes failure reports more useful.

**Download**

| Platform | Installer |
| --- | --- |
| Windows x64 | [Installer](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.5/VoiceStudio-Electron-0.5.5-win-x64.exe) |
| macOS Apple Silicon | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.5/VoiceStudio-Electron-0.5.5-mac-arm64.dmg) |
| macOS Intel | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.5/VoiceStudio-Electron-0.5.5-mac-x64.dmg) |
| Linux x64 | [AppImage](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.5/VoiceStudio-Electron-0.5.5-linux-x64.AppImage) · [deb](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.5/VoiceStudio-Electron-0.5.5-linux-x64.deb) |

**Upgrading:** Install over your existing Electron app. If setup asks, choose **Install local runtime** to refresh its dependencies. The 0.5.4 → 0.5.5 upgrade was tested with a saved voice and settings.

**Moving from Tauri:** Close the app, back up its data directory, install Electron, and verify your voices and projects before removing Tauri. Follow the [migration guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.5/docs/electron-migration.md). Tauri v0.5.3 remains the final Tauri release; its updater cannot install Electron. Intel Macs support the UI with a remote backend.

**Installer trust:** Electron installers are unsigned or ad-hoc signed and are not Apple-notarized. Windows/macOS may show trust warnings. macOS automatic updates are unverified; use manual installer updates. See the [installation guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.5/docs/install/troubleshooting.md). Archived Tauri updater signatures are unchanged.

**Highlights**

- Clone keeps the target language when choosing, uploading, or saving a reference voice (#2272)
- Install an Electron release or build main with one command; uninstall without losing data (#2269)
- Get clearer crash reports and local render diagnostics when something goes wrong (#2267, #2266) — thanks @shivsin25!
- Place the script cursor without reopening the expression menu (#2268) — thanks @bipul0525!

### Added

- Diagnostic bundles include local render-stage timings and operation counts without recording script text or audio (#2266) — thanks @shivsin25!

### Fixed

- In Clone, explicit Auto follows the target script; changing reference voices no longer resets the output language (#2272)
- Fresh runtime setup uses managed Python and verifies SentencePiece before reporting success (#2270) — thanks @mamislimen!
- Speech-recognition startup errors retain their actual cause and avoid unrelated reinstall advice (#2128) — thanks @Sip19!
- Integration cards stay distinct when vendors share a URL, including after searching and filtering (#2273)
- macOS shell installs refresh app registration, prevent replacement while running, and move removed apps to Trash (#2269)
- Upgrades retain custom and portable storage paths recorded by archived setup (#2269)
- Crash reports distinguish native faults, Python errors, and termination signals (#2267) — thanks @shivsin25!

### Contributors

- @Shivendra-Coherent and @shivsin25 — native-crash diagnostics (#2267).
- @bipul0525 — script-editor cursor interaction (#2268).
- @debpalash — cloning, installation, runtime recovery, integrations, and release validation.

### Bug reporters

- @shivsin25 — long-form rendering diagnostics (#2266).
- @Sip19 — speech-recognition initialization errors (#2128).
- @mamislimen and @quan0pek — native backend crash reports (#2270, #2250); affected-host confirmation remains pending.

---

> **Source** [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · `v0.5.5` · 2026-09-22 · [upstream release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
