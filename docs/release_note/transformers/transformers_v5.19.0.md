---
title: "transformers v5.19.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.19.0"
version: "v5.19.0"
published: "2026-10-06"
type: "minor"
lang: "en"
summary: "EmbeddingGemma 2 is a multimodal embedding model from Google built on the Gemma 4 architecture. It encodes text, images, audio, and video, individually or combined in one input, into a shared 768-dimensional vector…"
---

# transformers v5.19.0

# Release v5.19.0


## New Model additions

### EmbeddingGemma2

<img width="2716" height="2308" alt="image" src="https://github.com/user-attachments/assets/84734e74-163d-4d12-b166-ffcf6749d563" />

EmbeddingGemma 2 is a multimodal embedding model from Google built on the Gemma 4 architecture. It encodes text, images, audio, and video, individually or combined in one input, into a shared 768-dimensional vector space for cross-modal retrieval, semantic similarity, clustering, and classification. It uses Matryoshka Representation Learning, so embeddings can be truncated to 512, 256, or 128 dimensions. It also offers configurable visual and video token budgets, and unused vision or audio towers can be disabled at load time to save memory.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/embedding_gemma2)
* Smthn smthn (#49364) by @vasqu in [#49364](https://github.com/huggingface/transformers/pull/49364)



## Breaking changes

All MoE models whose routers compute logits now return them when `output_router_logits=True`, following the Qwen3-MoE pattern (a `router_logits` recorder on the base model, `MoeModelOutputWithPast` from the backbone, and a MoE causal LM output from the head), so code that relied on the previous outputs or their absence should read the router logits from these output classes.
* 🚨 Return router logits from every MoE model that computes them (#48920) by @qgallouedec

`Owlv2ForObjectDetection.embed_image_query` now selects the query box with the highest objectness score, as in the original OWLv2 notebook, instead of the OWL-ViT heuristic, so image-guided query embeddings and detections may differ from earlier releases.
* 🚨 Select the OWLv2 image query by objectness (#49200) by @qgallouedec

The `"paged|"` prefix for SDPA and flash attention implementations is deprecated, so users should set the regular attention implementation (e.g. `sdpa` or `flash_attention_2`) for continuous batching instead of `paged|sdpa` or `paged|flash_attention_2`.
* 🚨 Attention 🚨 Deprecate "paged|" prefix for SDPA and flash  (#49112) by @remi-or

The regular flash and SDPA attention functions (`flash_attention.py`, `sdpa_attention.py`) now support continuous batching directly, and `"paged|..."` implementations for these are redirected to them, while eager still requires the `"paged|eager"` prefix.
* 🚨 Attention 🚨 Make regular attention support CB (#49101) by @remi-or

In continuous batching, the cache update for the index-based and block-table paths is now fused into a single call, which slightly changes the cache update function's behavior and affects any custom code that calls the separate update paths.
* 🚨 [CB] 🚨 Fuse update for index and block table path (#49088) by @remi-or

Continuous batching internals changed in preparation for removing `"paged"`: `max
* 🚨 [CB] 🚨 Little fixes before removing "paged" (#49069) by @remi-or



## Parallelization

Expert parallelism gains a token-dispatch implementation, selected via the new `ep_dispatch_experts` plan rule and now the default for Qwen3 MoE and Mellum, which removes the requirement that EP size equal TP size. The `Trainer` was also adapted to work with expert parallelism, and the docs now note that PEFT adapters support tensor parallelism. A CI-related fix for pipeline-parallel chart2table inference was also included.


* [`distributed`]: adapt Trainer to work Expert Parallel (#48873) by @3outeille in [#48873]
* [`distributed`] Add expert-parallel token dispatch, default for Qwen3 MoE (#48865) by @3outeille in [#48865]
* Fix pp chart2table inference (#49225) by @zucchini-nlp in [#49225]
* [docs] TP for PEFT adapters (#49060) by @stevhliu in [#49060]


## Cache

This release fixes quantized cache handling: `generate` no longer mutates the user's `cache_config`, and `QuantizedLayer.reorder_cache` is repaired. It also adds per-layer cache configuration, so `DynamicCache` and `StaticCache` initialize each layer from its own config (sliding window, attention chunk size, conv states, and attention head counts) to better support heterogeneous models. Separately, the deprecation cycle on mask and cache


* Fix quantized cache (#48700) by @jiqing-feng in [#48700]
* [CI] check_bad_commit: use EFS cache to avoid Xet FUSE OOM (exit 137) (#49273) by @ydshieh in [#49273]
* Support per-layer cache configuration (#48178) by @eladsegal in [#48178]
* Remove deprecation cycle on mask and cache (#49231) by @Cyrilvallez in [#49231]


## Bugfixes and improvements

* Revert "[CI] Temporarily disable AMD scheduled CI trigger" (#49271) (#49362) by @ydshieh in [#49362]
* ALM testx fIxing... (#49355) by @zucchini-nlp in [#49355]
* Fix DataCollatorForLanguageModeling ignoring seed=0 (#49349) by @akanyaani in [#49349]
* Fix explicit kernelization modes for evaluation models (#49339) by @DimensionSTP in [#49339]
* fix(cohere_compass): add video to input_modalities (#49320) (#49323) by @destopianpirate in [#49323]
* GPT-OSS: read the clamped SwiGLU's alpha and limit from the config (#49346) by @IlyasMoutawwakil in [#49346]
* [`distributed`] Default MoE `ep_plans` to token dispatch (#49160) by @3outeille in [#49160]
* Move CI to Python 3.11, with the version set in `.python-version` (#49311) by @tarekziade in [#49311]
* Bump doc-builder main docs workflow pin (#49350) by @paulinebm in [#49350]
* [`distributed`] decoupled tp_plan and ep_plan (#48859) by @3outeille in [#48859]
* [`distributed`] Add dense and expert device mesh (#48857) by @3outeille in [#48857]
* Bump doc-builder workflow pin (#49342) by @paulinebm in [#49342]
* Allow registering new processing backends (#48984) by @zucchini-nlp in [#48984]
* Fix WatermarkDetector repeated-ngram counting (#49315) by @LE0-Lin in [#49315]
* Fix minicpm 4.6V video batching and CI (#49259) by @zucchini-nlp in [#49259]
* remove colwise_gather_output for lm_head for DeepseekV4  (#49314) by @3outeille in [#49314]
* Fix the `labels` docstring of CLIPSegForImageSegmentation (#49001) by @qgallouedec in [#49001]
* [CI] Temporarily disable AMD scheduled CI trigger (#49271) by @ydshieh in [#49271]
* Remove the unused pandas entry from setup.py deps (#49329) by @tarekziade in [#49329]
* Fix run_glue.py label ids becoming strings with pandas>=3 (#49326) by @tarekziade in [#49326]
* [Fix] Remove old test file with two ancient tests (#49280) by @remi-or in [#49280]
* Fix chunked prefill with multi-axis position ids (Qwen3-VL) (#49319) by @dacorvo in [#49319]
* Why override when you can fix in `Mixin` (#49105) by @zucchini-nlp in [#49105]
* Do RoPE with mul instead of matmul (#49265) by @Rocketknight1 in [#49265]
* Deprecated pipelines should redirect; removed pipelines should raise (#49308) by @LysandreJik in [#49308]
* Enable model test on upcoming `torch_tpu` backend (#49207) by @tengomucho in [#49207]
* Fix encoder repetition penalty source rows after batch expansion (#49262) by @gitedmond in [#49262]
* Preserve masked EOS scores in exponential decay length penalty (#49260) by @gitedmond in [#49260]
* [CI] Avoid fetching all artifacts when only specific ones are needed (#49282) by @ydshieh in [#49282]
* Revert "[CI] ssh-runner: add optional cache_type input to switch between bucket and EFS runners (#49159)" (#49270) by @ydshieh in [#49270]
* Add Trainer.loss_is_scaled_for_ga to declare whether compute_loss already scales for gradient accumulation (#49240) by @qgallouedec in [#49240]
* fix precomputed flash kwargs clashing (#47928) by @IlyasMoutawwakil in [#47928]
* Reapply modular examples (#49230) by @Cyrilvallez in [#49230]
* Remove some stuff that does not exist (#49232) by @Cyrilvallez in [#49232]
* Remove rotaries deprecation cycle (#49228) by @Cyrilvallez in [#49228]
* [`GTE`] Add memory mixin (#49234) by @vasqu in [#49234]
* [CB] Make CB more device agnostic and add support for XPU (#49156) by @remi-or in [#49156]
* correct final metrics due to resuming from checkpoint (#49208) by @SunMarc in [#49208]
* [ESM/Persimmon/NllbMoe/ESMFold] use safetensors repos to fix Xet FUSE SIGBUS/IOError on bucket CI runners (#49194) by @ydshieh in [#49194]
* Dev update (#49212) by @vasqu in [#49212]

## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @vasqu
    * Smthn smthn (#49364)
    * [`GTE`] Add memory mixin (#49234)
    * Dev update (#49212)
* @remi-or
    * [Fix] Remove old test file with two ancient tests (#49280)
    * [CB] Make CB more device agnostic and add support for XPU (#49156)
    * 🚨 Attention 🚨 Deprecate "paged|" prefix for SDPA and flash  (#49112)
    * 🚨 Attention 🚨 Make regular attention support CB (#49101)
    * 🚨 [CB] 🚨 Fuse update for index and block table path (#49088)
    * [Refactor] Make some flash-attention utils more readable (#49071)
    * 🚨 [CB] 🚨 Little fixes before removing "paged" (#49069)

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.19.0` · 2026-10-06 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.19.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
