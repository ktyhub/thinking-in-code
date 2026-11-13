---
title: "gpt4free v8.8.9"
project: "gpt4free"
repo: "xtekky/gpt4free"
tag: "v8.8.9"
published: "2026-10-31"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/xtekky/gpt4free/compare/v8.8.8...v8.8.9"
---

# gpt4free v8.8.9

**Full Changelog**: https://github.com/xtekky/gpt4free/compare/v8.8.8...v8.8.9
### Download Options

**Python Package:**
- PyPI: `pip install g4f==v8.8.9`

**Executables (g4f-go, self-contained with embedded Python):**
- Windows amd64: `g4f-go-v8.8.9-windows-amd64.zip`
- Linux x64: `g4f-go-v8.8.9-linux-amd64.zip`
- Linux ARM64: `g4f-go-v8.8.9-linux-arm64.zip`
- macOS x64: `g4f-go-v8.8.9-darwin-amd64.zip`
- macOS ARM64: `g4f-go-v8.8.9-darwin-arm64.zip`
- FreeBSD amd64: `g4f-go-v8.8.9-freebsd-amd64.zip`

**Android App:**
- Android APK: `g4f-v8.8.9.apk`

**Browser Extension (Chrome/Edge):**
- `g4f-browser-extension-v8.8.9.zip` (unzip, then load unpacked via `chrome://extensions`)

**System Packages:**
- WinGet: `winget install gpt4free`

**Docker:**
- `docker pull hlohaus789/g4f:v8.8.9`
- `docker pull hlohaus789/g4f:v8.8.9-slim`
- `docker pull hlohaus789/g4f:v8.8.9-sandbox-desktop`

**Docker sandboxed AI tools sets (one-click install, 100+ different AI tools):**
- `docker pull hlohaus789/g4f:v8.8.9-sandbox-desktop` — a full Xfce desktop (TigerVNC + noVNC) with the g4f API and a one-click "Install & Open" menu for 100+ different AI tools: coding agents (OpenCode, Copilot CLI, Hermes, Aider, …), chat UIs, image/audio/video tools and gateways.
- Desktop + API: `http://localhost:8080/desktop/` — API: `http://localhost:8080`
- Mount your own app at `/app/gpt4free` and persist agent settings:
  ```bash
  docker run -d --name g4f-sandbox-desktop \
    -p 8080:8080 -p 5900:5900 --shm-size="2gb" \
    -v ${PWD}:/app/gpt4free \
    -v ${PWD}/sandbox-home/.config:/home/pn/.config \
    -v ${PWD}/sandbox-home/.local:/home/pn/.local \
    hlohaus789/g4f:v8.8.9-sandbox-desktop
  ```
- Docs: [docker/sandbox-menu/README.md](https://github.com/xtekky/gpt4free/blob/main/docker/sandbox-menu/README.md)

---

> **Source** [xtekky/gpt4free](https://github.com/xtekky/gpt4free) · `v8.8.9` · 2026-10-31 · [upstream release](https://github.com/xtekky/gpt4free/releases/tag/v8.8.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
