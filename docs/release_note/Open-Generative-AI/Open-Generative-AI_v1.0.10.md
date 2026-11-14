---
title: "Open-Generative-AI v1.0.10"
project: "Open-Generative-AI"
repo: "Anil-matcha/Open-Generative-AI"
tag: "v1.0.10"
version: "v1.0.10"
published: "2026-05-01"
type: "patch"
lang: "en"
summary: "fix(lipsync): Infinite Talk image-to-video (and the other hasPrompt: true lipsync models — Wan 2.2 s2v, LTX 2.3, LTX 2 19B, Infinite Talk v2v) no longer fail with field 'prompt' failed nullable validation: Value is not…"
---

# Open-Generative-AI v1.0.10

## What's new

- **fix(lipsync):** Infinite Talk image-to-video (and the other `hasPrompt: true` lipsync models — Wan 2.2 s2v, LTX 2.3, LTX 2 19B, Infinite Talk v2v) no longer fail with `field "prompt" failed nullable validation: Value is not nullable; got null` when the prompt textarea is left blank. The client now always sends a `prompt` field (defaulting to an empty string) for those models so the backend never forwards `null` to the underlying API.

## Downloads

- **macOS (Apple Silicon):** `Open Generative AI-1.0.10-arm64.dmg`
- **macOS (Intel):** `Open Generative AI-1.0.10.dmg`
- **Windows (x64):** `Open Generative AI Setup 1.0.10.exe`
- **Linux (AppImage):** `Open Generative AI-1.0.10.AppImage`
- **Linux (Debian/Ubuntu):** `open-generative-ai_1.0.10_amd64.deb`

**Full changelog:** https://github.com/Anil-matcha/Open-Generative-AI/compare/v1.0.9...v1.0.10

---

> **Source** [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) · `v1.0.10` · 2026-05-01 · [upstream release](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
