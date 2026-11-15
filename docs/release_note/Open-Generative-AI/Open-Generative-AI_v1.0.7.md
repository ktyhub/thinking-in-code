---
title: "Open-Generative-AI v1.0.7"
project: "Open-Generative-AI"
repo: "Anil-matcha/Open-Generative-AI"
tag: "v1.0.7"
version: "v1.0.7"
published: "2026-04-25"
type: "patch"
lang: "en"
summary: "Wan2GP HTTP provider — second local engine alongside the bundled sd.cpp. Run Wan2GP on any CUDA/ROCm box (your gaming PC, a workstation, or a rented RunPod/vast.ai instance), point the desktop app at its URL via…"
---

# Open-Generative-AI v1.0.7

## Added

- **Wan2GP HTTP provider** — second local engine alongside the bundled sd.cpp. Run [Wan2GP](https://github.com/deepbeepmeep/Wan2GP) on any CUDA/ROCm box (your gaming PC, a workstation, or a rented RunPod/vast.ai instance), point the desktop app at its URL via **Settings → Local Models**, and Flux, Qwen-Image, Wan 2.2 (T2V/I2V), Hunyuan, and LTX become available. Image-capable models surface in Image Studio; video models live in the catalog awaiting Video Studio wiring.
- The two engines coexist — sd.cpp keeps working as before for SD 1.5, SDXL, and Z-Image. The renderer routes per-model based on a `provider` field.

## Fixed

- **Dreamshaper 8 download URL** — the catalog pointed at `huggingface.co/Lykon/dreamshaper-8`, which now returns 404. Switched to the live repo `huggingface.co/Lykon/DreamShaper`.

## Docs

- README rewritten for the two-engine model with a comparison table and Wan2GP setup instructions.
- New **"Verifying the SD 1.5 path"** subsection — a copy-paste `curl` + `sd-cli` recipe that bypasses the UI and validates the local engine end-to-end. Useful for confirming Metal is active on Apple Silicon.
- Hardware notes flag that **Z-Image is known to hang on small-RAM Macs** — stick to SD 1.5 (Dreamshaper 8 / Realistic Vision / Anything v5) on those machines.

## Downloads

- **macOS Apple Silicon (M1/M2/M3/M4):** `Open Generative AI-1.0.7-arm64.dmg`
- **macOS Intel (x64):** `Open Generative AI-1.0.7.dmg`
- **Windows / Linux:** v1.0.7 ships Mac-only. Use the [v1.0.6 release](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.6) for Windows `.exe` and Linux `.AppImage` / `.deb` — both still work for sd.cpp local inference. The Wan2GP provider only requires the desktop app, so a v1.0.6 client can also point at a Wan2GP server (it just won't have the new model dropdown entries until rebuilt).

> First launch on macOS: `xattr -cr "/Applications/Open Generative AI.app"` then right-click → Open.

---

> **Source** [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) · `v1.0.7` · 2026-04-25 · [upstream release](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
