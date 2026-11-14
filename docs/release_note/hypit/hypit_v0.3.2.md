---
title: "hypit v0.3.2"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.3.2"
version: "v0.3.2"
published: "2026-11-11"
type: "patch"
lang: "en"
summary: "Install or update with npm install -g @hypit/hypit@0.3.2."
---

# hypit v0.3.2

Install or update with `npm install -g @hypit/hypit@0.3.2`.

- Add Bach 1.0 Pro as a default Hypit dependency, with text, frame, and reference SVML surfaces and generation through HypiHub. Last-frame-only generation requires 4K. Reference images, videos, and audio can each set a `start-time` offset.
- PixVerse V6 on HypiHub accepts `seed` and `multi-clip`. `aspect-ratio="auto"` requires at least one video reference, and `multi-clip` cannot be combined with video references.
- Add embeddable HTML document output and share HTML playback handling with Studio.
- Reuse video frames when they already satisfy media normalization requirements.

The release includes `@hypit/bach@0.1.0`, `@hypit/pixverse@0.2.1`, `@hypit/provider-hypihub@0.2.1`, `@hypit/video@0.2.1`, `@hypit/html-document@0.1.0`, `@hypit/html-program@0.1.1`, `@hypit/studio@0.2.1`, and `@hypit/media-local@0.2.1`.

Repository checks and package verification passed on Linux and Windows.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.3.2` · 2026-11-11 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.3.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
