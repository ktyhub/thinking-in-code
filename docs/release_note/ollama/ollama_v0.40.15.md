---
title: "ollama v0.40.15"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.15"
published: "2026-11-03"
type: "patch"
lang: "en"
summary: "Xiaomi MiMo's mimo-v2.6, a 9B model built for code and agent workflows, is now supported in Ollama."
---

# ollama v0.40.15

## MiMo V2.6

Xiaomi MiMo's [mimo-v2.6](https://ollama.com/library/mimo-v2.6), a 9B model built for code and agent workflows, is now supported in Ollama.

```sh
ollama run mimo-v2.6
```

## AutoTrust decision models

[AutoTrust](https://ollama.com/library/autotrust-jev) decision models read text and return choices, yes or no probabilities, and ratings for the questions you supply. The family includes 9b, 35b, and 27b-vl sizes — the 35b and 27b-vl sizes can also read images.

```sh
ollama run autotrust-jev "A customer says their card was charged twice." --ask "Is this a billing issue?"
```

Note: autotrust-jev is supported on Apple silicon in this release.

## What's Changed

 - ollama launch now supports Kimi Code CLI — the successor to kimi-cli — and offers to migrate existing kimi-cli setups
 - ollama launch now fills in Pi's model list automatically so models can be picked inside Pi, and Claude Desktop's model
   picker shows Ollama's actual model names
 - Recurrent and vision GGUF models can now serve more than one request at a time
 - Qwen3 and Qwen3.5 models using long-context (YaRN) scaling
 - Running ollama with no arguments opens the welcome launcher

**Full Changelog**: https://github.com/ollama/ollama/compare/v0.40.14...v0.40.15

---

> **Source** [ollama/ollama](https://github.com/ollama/ollama) · `v0.40.15` · 2026-11-03 · [upstream release](https://github.com/ollama/ollama/releases/tag/v0.40.15)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
