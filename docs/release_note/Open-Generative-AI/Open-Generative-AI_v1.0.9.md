---
title: "Open-Generative-AI v1.0.9"
project: "Open-Generative-AI"
repo: "Anil-matcha/Open-Generative-AI"
tag: "v1.0.9"
version: "v1.0.9"
published: "2026-04-27"
type: "patch"
lang: "en"
summary: "Closes #126 — local Wan2GP users could not upload reference media or generate video locally even with WanGP installed, hitting 'Not authorized: missing or invalid credentials' because every Video Studio upload was…"
---

# Open-Generative-AI v1.0.9

## What's new

Closes #126 — local Wan2GP users could not upload reference media or generate video locally even with WanGP installed, hitting "Not authorized: missing or invalid credentials" because every Video Studio upload was hard-wired to the Muapi-hosted endpoint.

### Fix
- **Wan2GP upload bridge** (`wan2gp:upload-file` IPC) — pushes files to the configured Wan2GP server's `/upload` endpoint and rehydrates them into Gradio `FileData` descriptors at generation time.
- **Local Video Studio** — Wan 2.2 t2v / Wan 2.2 i2v / Hunyuan / LTX models now appear in the Video Studio model picker when running in the desktop app.
- **Auth gate bypassed for local models** — generating with a Wan2GP model no longer requires a Muapi API key.
- **Generation routing** — Video Studio's t2v and i2v paths call `localAI.generate(...)` for Wan2GP models and surface step progress in the Generate button.

### Setup for local video
1. Run a Wan2GP server (`https://github.com/deepbeepmeep/Wan2GP`) on a machine with a CUDA or ROCm GPU.
2. In Settings → Local Models, set the server URL (e.g. `http://localhost:7860`).
3. Pick a Wan2GP entry from the Video Studio model dropdown.

If your Wan2GP build exposes Gradio function names different from the catalog defaults (`wan22_t2v`, `wan22_i2v`, `hunyuan_video`, `ltx_video`), check `<server>/?view=api` and edit `electron/lib/wan2gpProvider.js` accordingly.

## Downloads
| Platform | File |
|---|---|
| macOS Apple Silicon | `Open Generative AI-1.0.9-arm64.dmg` |
| macOS Intel | `Open Generative AI-1.0.9.dmg` |
| Windows (x64) | `Open Generative AI Setup 1.0.9.exe` |
| Linux AppImage | `Open Generative AI-1.0.9.AppImage` |
| Linux Debian/Ubuntu | `open-generative-ai_1.0.9_amd64.deb` |

🤖 Generated with [Claude Code](https://claude.com/claude-code)

---

> **Source** [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) · `v1.0.9` · 2026-04-27 · [upstream release](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
