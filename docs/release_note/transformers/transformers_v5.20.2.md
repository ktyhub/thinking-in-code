---
title: "transformers v5.20.2"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.20.2"
version: "v5.20.2"
published: "2026-10-19"
type: "patch"
lang: "en"
summary: "This patch notably solves an issue where some inputs could loose their original type inside prepare_inputs_for_generation in generate, leading to problems with multimodal models."
---

# transformers v5.20.2

# Patch release: v5.20.2

This patch notably solves an issue where some inputs could loose their original type inside `prepare_inputs_for_generation` in `generate`, leading to problems with multimodal models. It also fixes some other issues listed on the below commits.

It contains the following commits:

- Fix inputs dict casting in generate (#49731) by @Cyrilvallez
- Fix zero expert gradients in bfloat16 with expert parallelism and ep_size < fsdp_size (#49688) by @qgallouedec 
- Declare the input modalities of the VLMs that report text only (#49677) by @qgallouedec 
- Avoid a host-to-device copy in eager_mask (#49684) by @hmellor

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.20.2` · 2026-10-19 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.20.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
