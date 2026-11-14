---
title: "transformers v5.20.1"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.20.1"
version: "v5.20.1"
published: "2026-10-16"
type: "patch"
lang: "en"
summary: "Special surprise including the new model Beam from Reflection AI :partying_face"
---

# transformers v5.20.1

# Release v5.20.1

Special surprise including the new model Beam from Reflection AI :partying_face: 

<img width="2912" height="1440" alt="Gemini_Generated_Image_ox4hjlox4hjlox4h" src="https://github.com/user-attachments/assets/bfc7ff16-4340-490c-925c-b1512e4ceb32" />

Beam is a token-efficient, frontier-scale model focused on coding and agentic use cases. It is built for teams that want to run a powerful model on their own hardware, infrastructure, or cloud, and customize it to their specific needs.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/beam)
* Fix small bug in auto mappings (#49664) by @yonigozlan in [#49664](https://github.com/huggingface/transformers/pull/49664)


## Some real patch fixes

We broke loading models on older torch versions :cry: should be fixed now. But here is the full list of fixes

- Fix HunYuan-VL image assignment during batched generation (#49557) by @Arnav66692
- Fix DeepGEMM Mega MoE under expert parallelism(#49428) by @IlyasMoutawwakil
- Fix from_pretrained on torch 2.7: require torch>=2.8 for distributed checkpointing (#49652) by @naveecode 
- Make DtensorShardOperation work on torch 2.6 and 2.7 (#49657) by @hazelxue

**Full Changelog**: https://github.com/huggingface/transformers/compare/v5.20.0...v5.20.1

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.20.1` · 2026-10-16 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.20.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
