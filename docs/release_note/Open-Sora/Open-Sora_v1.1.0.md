---
title: "Open-Sora v1.1.0"
project: "Open-Sora"
repo: "hpcaitech/Open-Sora"
tag: "v1.1.0"
published: "2024-05-07"
type: "minor"
lang: "en"
summary: "📍 Open-Sora 1.1 released"
---

# Open-Sora v1.1.0

📍 Open-Sora 1.1 released
- 🌠 Model weights are available [here](https://github.com/hpcaitech/Open-Sora). It is trained on 0s~15s, 144p to 720p, various aspect ratios videos. See our [report 1.1](https://github.com/hpcaitech/docs/report_02.md) for more discussions.
- 🔧 Data processing pipeline v1.1 is released. An automatic [processing pipeline](https://github.com/hpcaitech/Open-Sora#data-processing) from raw videos to (text, video clip) pairs is provided, including scene cutting, filtering(aesthetic, optical flow, OCR, etc.), captioning managing. With this tool, you can easily build your video dataset.
- ✅ Improved ST-DiT architecture includes rope positional encoding, qk norm, longer text length, etc.
- ✅ Support training with any resolution, aspect ratio, and duration (including images).
- ✅ Support image and video conditioning and video editing, and thus support animating images, connecting videos, etc.

Visit the [Open-Sora Gallery](https://hpcaitech.github.io/Open-Sora/) to view more samples.

---

> **Source** [hpcaitech/Open-Sora](https://github.com/hpcaitech/Open-Sora) · `v1.1.0` · 2024-05-07 · [upstream release](https://github.com/hpcaitech/Open-Sora/releases/tag/v1.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
