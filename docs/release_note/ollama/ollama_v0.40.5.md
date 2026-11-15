---
title: "ollama v0.40.5"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.5"
version: "v0.40.5"
published: "2026-10-14"
type: "patch"
lang: "en"
summary: "NVIDIA Nemotron 3.5 Super is a vision-language model for coding, reasoning, tool use, and document understanding. It pairs a 120B-parameter hybrid Mamba-2/Transformer mixture-of-experts backbone (12B active per token)…"
---

# ollama v0.40.5

## NVIDIA Nemotron 3.5 Super

[NVIDIA Nemotron 3.5 Super](https://ollama.com/library/nemotron-3.5-super) is a vision-language model for coding, reasoning, tool use, and document understanding. It pairs a 120B-parameter hybrid Mamba-2/Transformer mixture-of-experts backbone (12B active per token) with a C-RADIO vision encoder, and supports tool calling, an on/off thinking mode, and context up to 1M tokens.

```
ollama run nemotron-3.5-super
```

A compact sibling, [Nemotron 3.5 Bolt](https://ollama.com/library/nemotron-3.5-bolt), distills Super down to 74B parameters (9B active) tuned to fit a 24 GB NVIDIA GPU for everyday agentic tasks, with speculative decoding via its included drafter.

## What's Changed
* Decision models are now available on cloud — use `clef:cloud` and `clef-flash:cloud` to run decision models through ollama.com cloud without pulling them locally
* Continuing an OpenAI-compatible Responses conversation that includes custom tool calls no longer fails with an error
* Clearer error messages when cloud access fails: sign-in problems, payment issues in the desktop app, and upstream access errors from the ChatGPT gateway now explain what went wrong
* Updated llama.cpp (adding Nemotron 3.5 support) and MLX

## New Contributors
* @willietran made their first contribution in https://github.com/ollama/ollama/pull/18986

**Full Changelog**: https://github.com/ollama/ollama/compare/v0.40.4...v0.40.5

---

> **Source** [ollama/ollama](https://github.com/ollama/ollama) · `v0.40.5` · 2026-10-14 · [upstream release](https://github.com/ollama/ollama/releases/tag/v0.40.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
