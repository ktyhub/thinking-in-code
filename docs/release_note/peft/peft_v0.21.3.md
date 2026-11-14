---
title: "peft v0.21.3"
project: "peft"
repo: "huggingface/peft"
tag: "v0.21.3"
version: "v0.21.3"
published: "2026-11-13"
type: "patch"
lang: "en"
summary: "Release 0.21.3 containing:"
---

# peft v0.21.3

Release 0.21.3 containing:

- #3963: Only gather adapter weights when saving a DTensor TP model

This is mostly to fix a performance penalty with huggingface/transformers#49316 as this makes Trainer call `save_pretrained` on every rank, and with peft 0.21.2 that gathers the whole sharded model instead of just the adapter.

## What's Changed
* Release prep/0.21.3 by @BenjaminBossan in https://github.com/huggingface/peft/pull/4164


**Full Changelog**: https://github.com/huggingface/peft/compare/v0.21.2...v0.21.3

---

> **Source** [huggingface/peft](https://github.com/huggingface/peft) · `v0.21.3` · 2026-11-13 · [upstream release](https://github.com/huggingface/peft/releases/tag/v0.21.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
