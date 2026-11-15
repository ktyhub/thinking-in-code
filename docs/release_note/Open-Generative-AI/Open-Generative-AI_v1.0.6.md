---
title: "Open-Generative-AI v1.0.6"
project: "Open-Generative-AI"
repo: "Anil-matcha/Open-Generative-AI"
tag: "v1.0.6"
version: "v1.0.6"
published: "2026-04-25"
type: "patch"
lang: "en"
summary: "Local inference engine on Linux/Windows is downloadable again (#108) — leejet's latest stable-diffusion.cpp release temporarily ships only Mac arm64 + Windows CUDA-runtime stub + Linux ROCm, so anyone outside that…"
---

# Open-Generative-AI v1.0.6

## Fixes

- **Local inference engine on Linux/Windows is downloadable again** (#108) — leejet's latest stable-diffusion.cpp release temporarily ships only Mac arm64 + Windows CUDA-runtime stub + Linux ROCm, so anyone outside that narrow set hit `Error invoking remote method 'local-ai:download-binary': No binary found for this platform`. The downloader now walks the last 15 leejet releases until it finds one that actually has a build for the current OS/arch, and the Linux matcher prefers plain x86_64 → vulkan → rocm. macOS Intel users get a clearer error since leejet has never published an x86_64 macOS binary.
- Plus #110 (submodule-safe setup) and #111 (prominent Settings button) from v1.0.5.

## Downloads

- **macOS Apple Silicon (M1/M2/M3/M4):** `Open Generative AI-1.0.6-arm64.dmg`
- **macOS Intel (x64):** `Open Generative AI-1.0.6.dmg`
- **Linux x86_64 — AppImage:** `Open Generative AI-1.0.6.AppImage` (chmod +x then run)
- **Linux x86_64 — Debian/Ubuntu:** `open-generative-ai_1.0.6_amd64.deb` (`sudo apt install ./open-generative-ai_1.0.6_amd64.deb`)

> First launch on macOS: `xattr -cr "/Applications/Open Generative AI.app"` then right-click → Open.
> AppImage on Ubuntu 24.04+: if it silently fails, `sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0` or install the .deb instead (it ships an AppArmor profile).

---

> **Source** [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) · `v1.0.6` · 2026-04-25 · [upstream release](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
