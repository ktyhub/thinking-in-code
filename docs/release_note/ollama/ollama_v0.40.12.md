---
title: "ollama v0.40.12"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.12"
published: "2026-10-27"
type: "patch"
lang: "en"
summary: "LFM3 is Liquid AI's new family of small models built for local agents, tool calling, and structured output, on Liquid's new tri-hybrid architecture. The family includes"
---

# ollama v0.40.12

## Liquid AI LFM3

[LFM3](https://ollama.com/library/lfm3) is Liquid AI's new family of small models built for local agents, tool calling, and structured output, on Liquid's new tri-hybrid architecture. The family includes:

- [lfm3](https://ollama.com/library/lfm3): a 1.7B text model with a 256K-token context window
- [lfm3-vl](https://ollama.com/library/lfm3-vl): adds image understanding
- [lfm3-audio](https://ollama.com/library/lfm3-audio): speech recognition, translation, and text-to-speech in 18 languages
- [lfm3-omni](https://ollama.com/library/lfm3-omni): text, images, and audio in one model

```sh
ollama run lfm3
```

## d1 decision models

Liquid AI's d1 models now come in a 2B size, built on LFM3. [d1](https://ollama.com/library/d1) makes decisions about text and images, and [d1-omni](https://ollama.com/library/d1-omni) adds audio.

```sh
ollama run d1:2b "I was charged twice for order 4417." --ask "Is this a billing issue?"
```

Note: lfm3 and d1 2b are supported on Apple hardware in this release.  Support for Linux/Windows coming soon.

## What's Changed
- Faster prompt processing on Apple silicon for Gemma 4, Flint and Laguna models
- Speculative decoding now supports DFlash2 draft models on MLX
- Gemma 4 keeps more detail in small images
- `ollama launch` now works with OpenCode v2
- Fixed tool-only assistant turns from Kimi CLI
- Updated MLX and llama.cpp

**Full Changelog**: https://github.com/ollama/ollama/compare/v0.40.11...v0.40.12

---

> **Source** [ollama/ollama](https://github.com/ollama/ollama) · `v0.40.12` · 2026-10-27 · [upstream release](https://github.com/ollama/ollama/releases/tag/v0.40.12)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
