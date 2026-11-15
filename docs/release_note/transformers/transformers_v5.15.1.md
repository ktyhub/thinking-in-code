---
title: "transformers v5.15.1"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.15.1"
version: "v5.15.1"
published: "2026-08-19"
type: "patch"
lang: "en"
summary: "This patch most notably solves a few issues with DFlash and MTP candidate generators, as well as an issue where images could sometimes not be processed on accelerator if using Lanczos filter."
---

# transformers v5.15.1

# Patch release v5.15.1

This patch most notably solves a few issues with DFlash and MTP candidate generators, as well as an issue where images could sometimes not be processed on accelerator if using Lanczos filter.

It contains the following commits:

- Fix DFlash candidate token device mismatch with device_map="auto" (#47877) by @sywangyi and @Cyrilvallez
- Align logit distributions for CandidateGenerators using sampling  (#48007) by @Cyrilvallez
- Fix MTP config when mlp_layer_types is absent (#48015) by @Cyrilvallez 
- Fallback from 'lanczos' to 'bicubic' when on cuda (#48026) by @zucchini-nlp
- Fix gemma4 video to device (#47896) by @guarin

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.15.1` · 2026-08-19 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.15.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
