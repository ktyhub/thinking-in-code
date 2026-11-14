---
title: "gpt4free v8.9.3"
project: "gpt4free"
repo: "xtekky/gpt4free"
tag: "v8.9.3"
version: "v8.9.3"
published: "2026-11-11"
type: "patch"
lang: "en"
---

# gpt4free v8.9.3

## What's Changed
* Fix Windows Python runtime extraction by @hlohaus with @Copilot in https://github.com/xtekky/gpt4free/pull/3560
* Restore API dependencies in unittest CI by @hlohaus with @Copilot in https://github.com/xtekky/gpt4free/pull/3563
* Fix idle browser cleanup by @hlohaus with @Copilot in https://github.com/xtekky/gpt4free/pull/3561
* Add Keenable to browsing APIs (keyless search + markdown fetch) by @KGKallasmaa in https://github.com/xtekky/gpt4free/pull/3556

## New Contributors
* @KGKallasmaa made their first contribution in https://github.com/xtekky/gpt4free/pull/3556

**Full Changelog**: https://github.com/xtekky/gpt4free/compare/v8.9.2...v8.9.3
### Download Options

**Python Package:**
- PyPI: `pip install g4f==v8.9.3`

**Executables (g4f-go, self-contained with embedded Python):**
- Windows amd64: `g4f-go-v8.9.3-windows-amd64.zip`
- Linux x64: `g4f-go-v8.9.3-linux-amd64.zip`
- Linux ARM64: `g4f-go-v8.9.3-linux-arm64.zip`
- macOS x64: `g4f-go-v8.9.3-darwin-amd64.zip`
- macOS ARM64: `g4f-go-v8.9.3-darwin-arm64.zip`
- FreeBSD amd64: `g4f-go-v8.9.3-freebsd-amd64.zip`
- Sandbox: `g4f-go sandbox` starts the small API-only image (`latest-slim`); `g4f-go sandbox --desktop` pulls the full desktop image only when needed. Termux/Android uses udocker automatically.

**Android App:**
- Android APK: `g4f-v8.9.3.apk`

**Browser Extension (Chrome/Edge):**
- `g4f-browser-extension-v8.9.3.zip` (unzip, then load unpacked via `chrome://extensions`)

**System Packages:**
- WinGet: `winget install gpt4free`

**Docker:**
- `docker pull hlohaus789/g4f:v8.9.3`
- `docker pull hlohaus789/g4f:v8.9.3-slim`
- `docker pull hlohaus789/g4f:v8.9.3-sandbox-desktop`

**Docker sandboxed AI tools sets (one-click install, 100+ different AI tools):**
- `docker pull hlohaus789/g4f:v8.9.3-sandbox-desktop` — a full Xfce desktop (TigerVNC + noVNC) with the g4f API and a one-click menu for 100+ different AI tools: coding agents (OpenCode, Copilot CLI, Hermes, Aider, …), chat UIs, image/audio/video tools and gateways.
- Desktop + API: `http://localhost:8080/desktop/` — API: `http://localhost:8080`
- Mount your own app at `/app/gpt4free` and persist agent settings:
  ```bash
  docker run -d --name g4f-sandbox-desktop \
    -p 8080:8080 -p 5900:5900 --shm-size="2gb" \
    -v ${PWD}:/app/gpt4free \
    -v ${PWD}/sandbox-home/.config:/home/pn/.config \
    -v ${PWD}/sandbox-home/.local:/home/pn/.local \
    hlohaus789/g4f:v8.9.3-sandbox-desktop
  ```
- Docs: [docker/sandbox-menu/README.md](https://github.com/xtekky/gpt4free/blob/main/docker/sandbox-menu/README.md)

---

> **Source** [xtekky/gpt4free](https://github.com/xtekky/gpt4free) · `v8.9.3` · 2026-11-11 · [upstream release](https://github.com/xtekky/gpt4free/releases/tag/v8.9.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
