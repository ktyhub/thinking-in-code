---
title: "transformers v5.16.1"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.16.1"
version: "v5.16.1"
published: "2026-08-26"
type: "patch"
lang: "en"
summary: "This is a special release as we include GLM! (and a few small fixes)"
---

# transformers v5.16.1

# Release v5.16.1

This is a special release as we include GLM! (and a few small fixes)

# GLM-5.3-Flash

<img width="4239" height="2643" alt="image" src="https://github.com/user-attachments/assets/17bc9c29-758b-44c8-8230-42f945ded209" />

GLM-5.3-Flash, the first **natively multimodal model** in the GLM-5 series. With 320B total parameters and just 18B active parameters, it outperforms GLM-5.2 across benchmarks and real-world workloads at one-tenth the price, while approaching Claude Opus 4.8 on coding and agentic benchmarks.

GLM-5.3-Flash starts from a newly trained base model, with its architecture and training recipe redesigned around capability and efficiency. For the first time in the GLM series, we introduce a hybrid architecture combining sparse and linear attention, sharply reducing long-context serving costs while preserving precise long-context capabilities. The model also adopts Manifold-Constrained Hyper-Connections (mHC) to further improve scaling efficiency. Together with our latest **30T-token** multimodal pre-training corpus, these changes enable GLM-5.3-Flash to deliver more intelligence with less compute.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/glm5_next)
* [Glm 5.3 Flash] GLM 5.3 Flash Support (#48342) by @Dovis01 in [#48342](https://github.com/huggingface/transformers/pull/48342)


## Small patch fixes

Mainly BC behavior for TP and pinning a hf kernel for security reasons :hugs: 

- Restore BC for the tensor-parallel API (#48300) by @ArthurZucker 
- Fix kernel commit and repo paths for ESMFold2 (#48186) by @Rocketknight1 

**Full Changelog**: https://github.com/huggingface/transformers/compare/v5.16.0...v5.16.1

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.16.1` · 2026-08-26 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.16.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
