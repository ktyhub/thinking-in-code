---
title: "ollama v0.40.11"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.11"
published: "2026-10-24"
type: "patch"
lang: "en"
summary: "Ollama can now generate speech on macOS. ollama run plays text or a chat model's reply aloud as the audio is generated, and apps can stream audio through the OpenAI-compatible /v1/audio/speech endpoint."
---

# ollama v0.40.11

## Speech

Ollama can now generate [speech](https://docs.ollama.com/capabilities/speech) on macOS. `ollama run` plays text or a chat model's reply aloud as the audio is generated, and apps can stream audio through the OpenAI-compatible `/v1/audio/speech` endpoint.

```sh
ollama run phonon "Hello from Ollama."
```

## d3 decision models

[d3](https://ollama.com/library/d3) brings vLLM Semantic Router's decision models to Ollama. Give a model text, structured state, or an image, and ask it to classify, answer yes or no, or score options with probabilities. The family includes 2B, 4B, 9B, and 27B sizes.

```sh
ollama run d3 "A customer says their card was charged twice." --ask "Is this a billing issue?"
```

## New Contributors
* @SynapShift made their first contribution in https://github.com/ollama/ollama/pull/19173

**Full Changelog**: https://github.com/ollama/ollama/compare/v0.40.10...v0.40.11

---

> **Source** [ollama/ollama](https://github.com/ollama/ollama) · `v0.40.11` · 2026-10-24 · [upstream release](https://github.com/ollama/ollama/releases/tag/v0.40.11)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
