---
title: "Open-Generative-AI v1.0.3-binaries"
project: "Open-Generative-AI"
repo: "Anil-matcha/Open-Generative-AI"
tag: "v1.0.3-binaries"
version: "v1.0.3-binaries"
published: "2026-04-22"
type: "patch"
lang: "en"
summary: "This release ships pre-built Metal GPU-accelerated inference binaries for local image generation on macOS Apple Silicon (M1/M2/M3/M4)."
---

# Open-Generative-AI v1.0.3-binaries

## sd-cli Metal GPU binaries (macOS Apple Silicon)

This release ships pre-built **Metal GPU-accelerated** inference binaries for local image generation on macOS Apple Silicon (M1/M2/M3/M4).

### What's included

| File | Contents |
|---|---|
| `sd-cli-metal-macos-arm64.zip` | `sd-cli` + `libstable-diffusion.dylib` — Metal-enabled, arm64 |

### Build details
- Built from [stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp) source
- CMake flags: `-DGGML_METAL=ON -DSD_METAL=ON -DCMAKE_BUILD_TYPE=Release`
- Linked with `-force_load libggml-metal.a` to pull in self-registering Metal backend symbols
- Verified: 205 `ggml_metal` symbols, "Using Metal backend" string present
- Significantly faster than CPU-only on Apple Silicon for local image generation

### Usage
These binaries are auto-downloaded by the Open Generative AI desktop app via Settings → Local Models.

---

> **Source** [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) · `v1.0.3-binaries` · 2026-04-22 · [upstream release](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.3-binaries)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
