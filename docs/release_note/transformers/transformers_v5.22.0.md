---
title: "transformers v5.22.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.22.0"
version: "v5.22.0"
published: "2026-10-29"
type: "minor"
lang: "en"
summary: "Mistral Large 4 is Mistral's largest and most capable model to date: a 1 trillion-parameter natively multimodal Mixture-of-Experts model with 49 billion active parameters per token (52 billion including embeddings and…"
---

# transformers v5.22.0

## New Models

### Mistral Large 4 (Le Chonk)

<img width="1329" height="780" alt="image" src="https://github.com/user-attachments/assets/1cff9ca7-19e3-4622-8db6-fb1cfa842579" />

Mistral Large 4 is Mistral's largest and most capable model to date: a 1 trillion-parameter natively multimodal Mixture-of-Experts model with 49 billion active parameters per token (52 billion including embeddings and output layers), trained from scratch on 3,800 NVIDIA Grace Blackwell GPUs in Mistral's own datacenters in Europe.

Mistral Large 4 unifies instruction following, reasoning, coding, and agentic workflows in a single set of weights. While a generalist model, it shows especially good performance on workloads such as cybersecurity, finance, and law, and it surpasses frontier closed models on visual grounding. It is natively fluent in 160+ languages, including every official language of the European Union.

#### Key Features

Mistral Large 4 includes the following architectural choices:

- **~1T total / ~52B active parameters**: granular Mixture-of-Experts with 128 routed experts (4 active per token) and 1 shared expert.
- **1M context length**, for long-context workloads.
- **Multimodal input**: accepts text and image input, with text output. Pixtral-style vision encoder trained to handle variable image sizes and aspect ratios.
- **Instruct and Reasoning functionalities** with function calls, reasoning effort configurable per request.

Mistral Large 4 offers the following capabilities:

- **Reasoning Mode**: three reasoning efforts — `low`, `medium`, `high` (default) — so the same model can answer a quick chat reply or work through a complex agentic run.
- **Vision**: analyzes images, charts, technical drawings, and documents, with state-of-the-art visual grounding among open weights.
- **Multilingual**: natively fluent in 160+ languages, including all official languages of the European Union.
- **System Prompt**: strong adherence and support for system prompts.
- **Agentic**: native function calling, JSON output, and strict JSON schema enforcement.
- **Cybersecurity**: state of the art among open-weight models for security work, while refusing malicious requests.
- **Large Context Window**: supports a 1M context window.

The model is released under the [**Mistral Ecosystem Open-Weight License**](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/blob/main/LICENSE): a modified version of the MIT license, for both commercial and non-commercial use — operating a Model-as-a-Service business requires a separate commercial license with Mistral.

#### Recommended Settings

- **Reasoning Effort**:
  - `'low'` / `'medium'` / `'high'` — default is `'high'`.
  - Use `reasoning_effort="high"` for complex prompts and agentic usage, `'low'` for fast chat replies and `'medium'` for day to day usage.
- **Sampling**: for all reasoning efforts, we recommend the following sampling parameters:
  - `temperature=1.0`
  - `top_p=0.95`
- **System Prompt**: define a clear environment and use case, including guidance on how to effectively leverage tools in agentic systems.
- **Tools**: keep the set of tools well-defined and limit their number to the minimum required for the use case.
- **Context**: the checkpoint supports a 1M context window.

## Breaking changes

* 🚨 Separate EP logic into its own file (#49679) by @3outeille

## Quantization

FP8 quantized models can now be used for adapter training (such as LoRA with PEFT). Backward passes were added to the dense and grouped FP8 matmuls, and `is_trainable` is now `True`. Backward also dequantizes experts in chunks and skips autograd at inference, which cuts peak memory in the MoE layer backward from about 28.9 GiB to 2.8 GiB at 8k tokens. Separately, the AMD CI image now install


* FP8 backward: chunked expert dequant, skip autograd.Function at inference (#50117) by @ArthurZucker in [#50117]
* Train adapters on top of FP8 weights (#50031) by @qgallouedec in [#50031]
* [AMD CI] Install onnxscript, bitsandbytes and peft in the AMD image (#50046) by @Abdennacer-Badaoui in [#50046]


## Bugfixes and improvements

* Processor unnecessary warnings (#49812) by @zucchini-nlp in [#49812]
* Fix boolean padding in ClapFeatureExtractor (#23648) (#49960) by @rudy-07 in [#49960]
* [Fix] Count cropping of an uninitialized layer as a no-op (#50104) by @remi-or in [#50104]
* [loading] Allow `PermuteForRope` to act on single tensors while renaming (#50092) by @Cyrilvallez in [#50092]
* Add Nemotron 3.5 Transcribe (#50084) by @eustlb in [#50084]
* [Nemotron3Diarization] add left context support (#49283) by @eustlb in [#49283]
* [Janus] Fix processor iterating a string prompt character by character (#50044) by @tarekziade in [#50044]
* fix(config): forward token kwarg to get_config_dict in PreTrainedConfig.from_pretrained (#50081) by @ydshieh in [#50081]
* Fix `rope_scaling` setter for configs that assign it during init (#50080) by @hmellor in [#50080]
* [timesfm] Fix fp16 overflow on pad_val in _forward_transform (#50021) by @tarekziade in [#50021]
* Update dev version (#50068) by @albertvillanova in [#50068]
* Pin the shared Hub MIC fleet dataset (#49802) by @tarekziade in [#49802]
* [docs] NVIDIA/Intel/CPU (#49650) by @stevhliu in [#49650]
* Document how to handle non-persistent buffer initialization in custom models (#49880) by @Tialo in [#49880]
* Remove legacy benchmark/ and disable automatic benchmark runs (#50040) by @tarekziade in [#50040]
* Remove deprecation cycle for candidate generators (#50034) by @Cyrilvallez in [#50034]
* Fix test pil import leak (#49915) by @guarin in [#49915]
* fix: preserve NumPy integer label dtypes in default data collators (#49900) by @BlazeSR10hawk in [#49900]
* [ESMFold2] Don't build the MSA encoder for checkpoints without one (#49890) by @jimburtoft in [#49890]
* [minimax_m3_vl] Gate the integration tests on total accelerator memory (#50025) by @tarekziade in [#50025]
* Fix: Add kwargs in LFM2.5 conv layers (#50022) by @younesbelkada in [#50022]
* Forward code_revision to every pipeline loader (#49832) by @Rocketknight1 in [#49832]
* [moshi] Skip Moshiko integration tests whose checkpoint is gone (#50017) by @tarekziade in [#50017]
* Keep a capturing group's escapes when reversing a conversion pattern (#49772) by @IlyasMoutawwakil in [#49772]
* perf(ci): skip the lazy blob fetch in `git blame` on a partial clone (#50007) by @nrenvo in [#50007]
* fix(canary): set layerdrop=0.0 in test tester to prevent flaky test (#50012) by @ydshieh in [#50012]
* add a WA to Dockerfile for XPU (#50008) by @kaixuanliu in [#50008]
* pipelines: defer eager model imports in text_to_audio and token_classification (#50001) by @ydshieh in [#50001]
* [exporters] resolve @register_patch paths lazily to avoid eager model imports (#50000) by @ydshieh in [#50000]
* [Fix] Remove useless kwargs (#49966) by @remi-or in [#49966]
* Fix model's config attr naming (#49898) by @zucchini-nlp in [#49898]

## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @tarekziade
    * Fix `_init_weights` gaps in 7 audio models and enable `test_can_init_all_missing_weights` for them (#49386)
    * Fix image backend equivalence tests for Pillow 13 (#50105)
    * [Janus] Fix processor iterating a string prompt character by character (#50044)
    * [timesfm] Fix fp16 overflow on pad_val in _forward_transform (#50021)
    * Pin the shared Hub MIC fleet dataset (#49802)
    * Remove legacy benchmark/ and disable automatic benchmark runs (#50040)
    * [minimax_m3_vl] Gate the integration tests on total accelerator memory (#50025)
    * [moshi] Skip Moshiko integration tests whose checkpoint is gone (#50017)
* @eustlb
    * Add Nemotron 3.5 Transcribe (#50084)
    * [Nemotron3Diarization] add left context support (#49283)

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.22.0` · 2026-10-29 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.22.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
