---
title: "ollama v0.40.8"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.8"
published: "2026-10-21"
type: "patch"
lang: "en"
---

# ollama v0.40.8

<p align="center"><img width="160" alt="flint-logo" src="https://github.com/user-attachments/assets/3c1741a5-710c-4bde-8ac7-096e40b495bb" /></p>

## Recursive Flint

[Flint](https://ollama.com/library/flint) brings Recursive's coding model to Ollama. It is designed for the work coding agents do across a repository: understanding unfamiliar code, tracing bugs, implementing features, and adding tests. Reasoning, multi-turn tool use, and a 262K-token context window support longer tasks across files and tool interactions.

Flint is an Apache 2.0-licensed, 40B-parameter mixture-of-experts model with approximately 2.5B parameters active per token. In its [release evaluations](https://huggingface.co/RecursiveSI/flint#evaluation), Recursive reports 54.9% on Terminal-Bench 2.1 and 74.2% on SWE-bench Verified.

```sh
ollama run flint
```


Note: Flint is supported on MacOS.  Other GPU support will be enabled in a subsequent release.

**Full Changelog**: https://github.com/ollama/ollama/compare/v0.40.7...v0.40.8

---

> **Source** [ollama/ollama](https://github.com/ollama/ollama) · `v0.40.8` · 2026-10-21 · [upstream release](https://github.com/ollama/ollama/releases/tag/v0.40.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
