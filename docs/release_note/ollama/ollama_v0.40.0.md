---
title: "ollama v0.40.0"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.0"
version: "v0.40.0"
published: "2026-09-25"
type: "minor"
lang: "en"
summary: "Models run on MLX on Apple Silicon by default"
---

# ollama v0.40.0

## What's Changed

**Models run on MLX on Apple Silicon by default**

In this release, on Apple Silicon devices, model architectures supported by the MLX runtime will automatically run on MLX.

```
ollama pull qwen3.8
ollama run qwen3.8
```

Additional models include [gemma4](https://ollama.com/library/gemma4), [qwen3.6](https://ollama.com/library/qwen3.6) and [qwen3.5](https://ollama.com/library/qwen3.5)

Decision models are now available on MLX as well: [Nimble](https://ollama.com/library/nimble) [tev1](https://ollama.com/library/tev1)  [clef](https://ollama.com/library/clef) [clef-flash](https://ollama.com/library/clef-flash) 

MLX now has support for an embedding model: [embeddinggemma-2](https://ollama.com/library/embeddinggemma-2)

We will continue testing and enabling additional models.


**Full Changelog**: https://github.com/ollama/ollama/compare/v0.35.1...v0.40.0

---

> **Source** [ollama/ollama](https://github.com/ollama/ollama) · `v0.40.0` · 2026-09-25 · [upstream release](https://github.com/ollama/ollama/releases/tag/v0.40.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
