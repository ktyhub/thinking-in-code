---
title: "diffusers v0.42.1"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.42.1"
version: "v0.42.1"
published: "2026-10-27"
type: "patch"
lang: "en"
summary: "This is a security release. See GHSA-4prv-5hj7-c2xr for details."
---

# diffusers v0.42.1

This is a security release. See [GHSA-4prv-5hj7-c2xr](https://github.com/huggingface/diffusers/security/advisories/GHSA-4prv-5hj7-c2xr) for details.

This patch release fixes how a component's declared library name is resolved when loading with `from_pretrained`.

Pipelines and models declare each component as a `["<library>", "<class>"]` pair in `model_index.json` / `config.json`. This release changes how that library name is resolved across the `DiffusionPipeline`, `AutoModel`, and `ModularPipeline` loading paths, and adds a clearer error when the declared class is not found in the resolved module.

All users on 0.42.0 are encouraged to upgrade:

```
pip install diffusers==0.42.1
```

---

> **Source** [huggingface/diffusers](https://github.com/huggingface/diffusers) · `v0.42.1` · 2026-10-27 · [upstream release](https://github.com/huggingface/diffusers/releases/tag/v0.42.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
