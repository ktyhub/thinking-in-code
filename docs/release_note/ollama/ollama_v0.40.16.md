---
title: "ollama v0.40.16"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.16"
version: "v0.40.16"
published: "2026-11-09"
type: "patch"
lang: "en"
summary: "Ripple Preview from Ricursive Intelligence is a 65B dense model built for agentic coding."
---

# ollama v0.40.16

## Ripple Preview

[Ripple Preview](https://ollama.com/library/ripple-preview) from Ricursive Intelligence is a 65B dense model built for agentic coding.

```sh
ollama run ripple-preview
```

## What's Changed

- Qwen3.8 Flash Next uses about 27 GiB less memory on Apple silicon
- `ollama launch claude` always routes Claude Code to the selected model
- `ollama launch` explains when a cloud model has been retired
- `/v1/responses` respects `truncation` and no longer silently truncates by default
- `/v1/models` returns an empty list instead of `null` when no models are installed
- CUDA 13.5 support for Windows on ARM
- Updated llama.cpp

**Full Changelog**: https://github.com/ollama/ollama/compare/v0.40.15...v0.40.16

---

> **Source** [ollama/ollama](https://github.com/ollama/ollama) · `v0.40.16` · 2026-11-09 · [upstream release](https://github.com/ollama/ollama/releases/tag/v0.40.16)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
