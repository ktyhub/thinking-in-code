---
title: "ollama v0.40.9"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.9"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "Flint now runs on Linux and Windows as well as macOS."
---

# ollama v0.40.9

## Flint on Linux and Windows

[Flint](https://ollama.com/library/flint) now runs on Linux and Windows as well as macOS.

## Other improvements

- Streaming OpenAI Responses and Anthropic Messages requests now report generation failures instead of ending silently after partial output.
- `ollama launch` now passes cloud models' context lengths and capabilities to coding tools, fixing incorrect context and compaction settings.
- Anthropic-compatible web search now uses the model's supported thinking setting in follow-up requests, preventing avoidable failures.

**Full Changelog**: https://github.com/ollama/ollama/compare/v0.40.8...v0.40.9

---

> **Source** [ollama/ollama](https://github.com/ollama/ollama) · `v0.40.9` · 2026-10-22 · [upstream release](https://github.com/ollama/ollama/releases/tag/v0.40.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
