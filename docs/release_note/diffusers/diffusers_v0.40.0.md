---
title: "diffusers v0.40.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.40.0"
version: "v0.40.0"
published: "2026-08-20"
type: "minor"
lang: "en"
summary: "MiniMax-H3 generates video and its soundtrack together. A single transformer denoises one packed sequence containing the text conditioning, the conditioning media, and the target video and audio latents — there is no…"
---

# diffusers v0.40.0

> [!TIP]
> This release features several new pipelines, including LTX2.5, MiniMax H3, and Wan Animate 2. We're also graduating Modular Diffusers out of the experimental phase and announcing its stable support. Additionally, this release includes minimal support for tensor-parallel. There's a lot more that went down in this release. So, please consult the notes for details. 

## New Pipelines

### MiniMax-H3

[**MiniMax-H3**](https://huggingface.co/docs/diffusers/main/api/pipelines/minimax_h3) generates video and its soundtrack together. A single transformer denoises one packed sequence containing the text conditioning, the conditioning media, and the target video *and* audio latents — there is no separate vocoder and no post-hoc audio pass. Its conditioner is a `Qwen3VLForConditionalGeneration` whose unnormalized 50th-decoder-layer hidden state is read instead of the last one.

MiniMax-H3 is integrated as [Modular Diffusers](https://huggingface.co/docs/diffusers/main/modular_diffusers/overview) blocks only — `MiniMaxH3Blocks` and their `MiniMaxH3ModularPipeline` are the whole integration. The conversion ships both checkpoint partitions in one repository and exposes three workflows (`t2va`, `fl2va`, `ref2va`) that can be pruned at `from_pretrained` time so only that task's components are declared and downloaded.

### MiniMax Music 3

[**MiniMax Music 3**](https://huggingface.co/docs/diffusers/main/api/pipelines/minimax_music3) produces complete songs up to five minutes long from lyrics and a music description, with expressive vocals and long-range structure. It is a hybrid of an autoregressive and a diffusion stage: an 8B Qwen3-based global language model predicts one semantic audio token per frame while a small depth decoder fills in seven residual RVQ codebooks, and their fused hidden states condition a 2.4B flow-matching transformer that produces Flow-VAE latents in overlapping chunks. A DAC-style decoder turns the latents into 44.1 kHz stereo audio.

### Stable Audio 3

[**Stable Audio 3**](https://huggingface.co/docs/diffusers/main/api/pipelines/stable_audio_3) is a text-to-audio model from Stability AI that generates high-quality stereo audio at 44.1 kHz. It uses a rectified-flow DiT conditioned on a frozen T5Gemma text encoder (via cross-attention) and on duration (a float embedded by `StableAudio3DurationEmbedder` and used for adaptive layer norm), and decodes with the SAME (Semantically-Aligned Music Encoder) autoencoder, `AutoencoderSAME`.

Three pipelines ship: `StableAudio3Pipeline`, `StableAudio3AudioToAudioPipeline`, and `StableAudio3InpaintPipeline`.

Thanks to @buffett0323 for the contribution (https://github.com/huggingface/diffusers/pull/14119).

### LTX-2.5

[**LTX-2.5**](https://huggingface.co/docs/diffusers/main/api/pipelines/ltx2#ltx-25) reuses the existing `LTX2Pipeline` / `LTX2VideoTransformer3DModel` / `AutoencoderKLLTX2Video` classes — there is no separate pipeline class. The user-visible difference is the text encoder: LTX-2.5 is paired with a Gemma 4 (`gemma4_unified`) checkpoint, loaded automatically from a converted LTX-2.5 repo.

[`Lightricks/LTX-2.5-Diffusers`](https://huggingface.co/Lightricks/LTX-2.5-Diffusers) ships both the distilled DiT (`transformer/`) and the full/SFT DiT (`transformer_full/`), plus everything two-stage generation needs. Alongside the checkpoint support, this release adds:

- `LTX2VideoDiffusionDecoderModel` and `LTX2VideoDiffusionDecodePipeline` — a second video decoder over the same latent space, so latents are interchangeable between decoders.
- A `duration_head` that predicts shot length from the text-connector output, so `num_frames` is auto-predicted by default when the loaded pipeline has one.
- Prompt enhancement through a separate off-the-shelf `google/gemma-4-E2B-it` checkpoint (`enable_prompt_enhancement=True`).
- `LTX25AutoBlocks` for Modular Diffusers ([#14453](https://github.com/huggingface/diffusers/pull/14453)).

### Wan-Animate-2

[**Wan-Animate-2**](https://huggingface.co/docs/diffusers/main/api/pipelines/wan_animate_2) by the Alibaba Wan Team animates a reference character image with the motion of a driving video. The driving video is processed in fixed-length segments: each segment runs a reference-extraction pass that caches the driving segment's K/V in every transformer layer, denoises against that cache, and is decoded inside the loop, because the next segment conditions on the previous segment's decoded tail frames.

Two presets are available — the base checkpoint samples with classifier-free guidance, and the distilled checkpoint samples in few steps without it. Guidance is owned by the pipeline's guider component, so there is no `guidance_scale` argument.

Thanks to @kelseyee for authoring the integration (https://github.com/huggingface/diffusers/pull/14413).

### JoyAI-Image-Edit-Plus

[**JoyAI-Image-Edit-Plus**](https://huggingface.co/docs/diffusers/main/api/pipelines/joyimage_edit_plus) extends the JoyAI-Image family (an 8B MLLM paired with a 16B MMDiT) to multi-image instruction-guided editing. It accepts 1–5 reference images plus a text instruction and composes elements from the references into a new image.

Thanks to @tangyanf for the contribution (https://github.com/huggingface/diffusers/pull/14032).

### Cosmos 3 follow-ups

[**Cosmos 3**](https://huggingface.co/docs/diffusers/main/api/pipelines/cosmos3) landed in 0.39.0 and gets substantially more coverage in this release:

- A [Cosmos 3 Modular pipeline](https://github.com/huggingface/diffusers/pull/14110) (`Cosmos3OmniModularPipeline`), with [Transfer support](https://github.com/huggingface/diffusers/pull/14150) for precomputed control videos (edge, blur, depth, segmentation, world-scenario maps) generated autoregressively in chunks and stitched automatically.
- [Edge support](https://github.com/huggingface/diffusers/pull/14181).
- [Distilled (few-step) text-to-image and image-to-video](https://github.com/huggingface/diffusers/pull/14177) via `Cosmos3DistilledModularPipeline`.
- [Model parallelism](https://github.com/huggingface/diffusers/pull/14054).

Thanks to @yzhautouskay and @atharvajoshi10 for the contributions.

## Modular Pipeline Support

Modular Diffusers is **no longer marked experimental** ([#14525](https://github.com/huggingface/diffusers/pull/14525)) — the API warning has been dropped.

- Three of this release's new integrations — **MiniMax-H3**, **MiniMax Music 3**, and **Wan-Animate-2** — ship as Modular blocks only, with no `DiffusionPipeline` half.
- **Cosmos 3** ([#14110](https://github.com/huggingface/diffusers/pull/14110), [#14150](https://github.com/huggingface/diffusers/pull/14150), [#14177](https://github.com/huggingface/diffusers/pull/14177)) and **Krea 2** ([#14083](https://github.com/huggingface/diffusers/pull/14083), thanks to @Cedric-Perauer) gained modular pipelines, and **Anima** gained img2img blocks ([#13929](https://github.com/huggingface/diffusers/pull/13929), thanks to @PreethamNoelP).
- **Branch-specific input defaults** ([#14234](https://github.com/huggingface/diffusers/pull/14234)): when sibling blocks of a `ConditionalPipelineBlocks` declare different defaults for the same input, `combine_inputs` now merges the default to `None` and records the per-block defaults in a new `InputParam.defaults_by_block` field. `get_block_state` falls back to the block's own declared default, so each branch resolves its own default when it actually runs. Docstrings render conflicted defaults as e.g. *"defaults to None or 189, depending on the workflow"*.
- [Group offloading now works under auto offloading](https://github.com/huggingface/diffusers/pull/14358), and a [group-offload device mismatch](https://github.com/huggingface/diffusers/pull/14252) was fixed.
- [Unused `intermediate_inputs` were cleaned up](https://github.com/huggingface/diffusers/pull/14278), [stale auto-docstrings are now detected in CI](https://github.com/huggingface/diffusers/pull/14241), and [Mellon custom-block required-input handling was fixed](https://github.com/huggingface/diffusers/pull/13888).

> [!IMPORTANT]
> Please try out Modular Diffusers and let us know about your feedback!

## Core Library

### Tensor parallelism

[Tensor-parallel inference](https://github.com/huggingface/diffusers/pull/13718) is now supported for model inference on CUDA and AWS Neuron (Trainium/Inferentia), exposed through the same public API already used for context parallelism:

```py
from diffusers import TensorParallelConfig

pipe.transformer.enable_parallelism(config=TensorParallelConfig(mesh=tp_mesh))
```

Sharding is model-agnostic and driven from a flat `_tp_plan`, which has been added to the FLUX.1, FLUX.2 and Qwen-Image DiTs. Check out the [docs](https://huggingface.co/docs/diffusers/main/en/training/distributed_inference#tensor-parallelism) for more details.

### New quantization backends

- [**SDNQ**](https://github.com/huggingface/diffusers/pull/14277) — a training-free backend supporting int8 down to 2-bit, FP8 and other low-bit float formats, with optional SVD correction, Hadamard rotation, and quantized INT8/FP8 matmul. Runs on CUDA, ROCm, XPU, MPS, and CPU. [SDNQ MiniMax-H3 loading](https://github.com/huggingface/diffusers/pull/14398) landed too. Thanks to @asomoza.
- [**Nunchaku Lite**](https://github.com/huggingface/diffusers/pull/14100) for loading prequantized checkpoints, with [fused-kernel performance documented](https://github.com/huggingface/diffusers/pull/14458). Thanks to @rootonchair.

### Attention, kernels and offloading

- [Kernels are downloaded only when users request them](https://github.com/huggingface/diffusers/pull/14298)
- [ROCm FlashAttention now uses the `kernels-community/aiter-flash-attn-ck` Hub kernel](https://github.com/huggingface/diffusers/pull/14436), dropping the `aiter` dependency. Thanks to @Abdennacer-Badaoui.
- [Sequence-parallel support for the `_flash_3_varlen_hub` backend](https://github.com/huggingface/diffusers/pull/13809) and a [mask-handling fix](https://github.com/huggingface/diffusers/pull/14115). Thanks to @zhtmike.
- [`DiffusionPipeline.device` deduction for split-device pipelines](https://github.com/huggingface/diffusers/pull/14383)
- [Hook forward signatures are preserved](https://github.com/huggingface/diffusers/pull/14285). Thanks to @jloftin-nv.

### CLI

The `diffusers-cli` was reworked for agentic use ([#13966](https://github.com/huggingface/diffusers/pull/13966)) and then cleaned up ([#14381](https://github.com/huggingface/diffusers/pull/14381)): `modular_model_index.json` is written when saving a custom block so `ModularPipeline.from_pretrained` can load and run custom blocks as pipelines, auto CPU offload works for Modular pipelines, `workflow` can be passed to Modular pipelines, and output saving handles multimodal output (e.g. LTX video frames + audio) and batched video.

Skills are now installed through the CLI rather than the `Makefile` ([#14454](https://github.com/huggingface/diffusers/pull/14454)):

```bash
diffusers-cli skills list
diffusers-cli skills add <skill name>
```

## 🚨 Breaking changes and deprecations

- **JAX/Flax support has been removed** ([#14169](https://github.com/huggingface/diffusers/pull/14169)) — roughly 12k lines deleted. All `Flax*` classes and the `flax` extras are gone.
- **Mixed-rank LoRAs without alpha keys now load at their intended scale** ([#14409](https://github.com/huggingface/diffusers/pull/14409)). Previously `get_peft_kwargs` took `lora_alpha` from the first entry of the rank dict and never revisited it, so every module whose rank differed from the first key's rank got an arbitrary, key-order-dependent scale. Ranks are now mirrored into the alphas when a checkpoint brings no alpha information (the diffusers/PEFT convention: alpha == rank, scale 1.0). Adapters with a declared alpha keep it, and uniform-rank adapters are unaffected. Existing mixed-rank, no-alpha LoRAs will now produce different (correct) results.
- **`torch_dtype` is deprecated in favour of `dtype`** ([#14205](https://github.com/huggingface/diffusers/pull/14205), [#14313](https://github.com/huggingface/diffusers/pull/14313)), following `transformers`. `torch_dtype` still works but warns, and will be removed in 1.0.0. A [`torch.dtype` alias](https://github.com/huggingface/diffusers/pull/14162) was added for the docs.
- **DDUF is deprecated** ([#14141](https://github.com/huggingface/diffusers/pull/14141)). `dduf_file` warns and will be removed in **0.41.0**.

## Security

- [Fixed a path-traversal / arbitrary out-of-directory file read via sharded checkpoint index files](https://github.com/huggingface/diffusers/pull/14182). Thanks to @buffett0323.
- [A `SECURITY.md` was added](https://github.com/huggingface/diffusers/pull/14174).

## Training

- [Caption dropout and aspect-ratio buckets for the Krea 2 and Qwen-Image LoRA scripts](https://github.com/huggingface/diffusers/pull/14089), plus an [aspect-ratio bucketing fix and on-the-fly buckets across the DreamBooth scripts](https://github.com/huggingface/diffusers/pull/14158). Thanks to @linoytsaban.
- [Krea 2 LoRA cards are tagged with the Turbo base model first](https://github.com/huggingface/diffusers/pull/14171) so the inference widget works.

## LoRA

- [ACE-Step LoRA support](https://github.com/huggingface/diffusers/pull/14193). Thanks to @chenyangzhu1.
- [Fix LoRA hot-swapping recompilation with `different_shapes_for_compilation`](https://github.com/huggingface/diffusers/pull/14297). Thanks to @jiqing-feng.
- [Only drop an adapter from `_merged_adapters` when it is unfused from all components](https://github.com/huggingface/diffusers/pull/14385).
- [Fix local LoRA weight auto-discovery in offline mode](https://github.com/huggingface/diffusers/pull/14204). Thanks to @fropych.

## Notable fixes

- [Fix Kandinsky 5 I2V conditioning](https://github.com/huggingface/diffusers/pull/14282) — the image latent is no longer injected into `visual_cond` channels.
- [Fix batched DiffusionGemma adaptive stopping](https://github.com/huggingface/diffusers/pull/14386)
- [Fix image preprocessing for Cosmos 3](https://github.com/huggingface/diffusers/pull/14519) and [Cosmos 3 Edge generator K normalization](https://github.com/huggingface/diffusers/pull/14246)
- [Fix AuraFlow model-parallelism device mismatch](https://github.com/huggingface/diffusers/pull/14273) and [AuraFlow VAE dtype mismatch on pipeline reuse](https://github.com/huggingface/diffusers/pull/14184)
- [Make `WanTransformer3DModel`](https://github.com/huggingface/diffusers/pull/14236) and [`SD3Transformer2DModel`](https://github.com/huggingface/diffusers/pull/14186) hidden states contiguous
- [Fix the rectified-flow time scheduler](https://github.com/huggingface/diffusers/pull/14011)
- [Fix Helios auto-offload decode](https://github.com/huggingface/diffusers/pull/14140)
- [Align `snapshot_download` with the latest `huggingface_hub`](https://github.com/huggingface/diffusers/pull/14118)
- [Reduce FLUX int8 test peak memory with sequential offload](https://github.com/huggingface/diffusers/pull/13776)

## Tests and infrastructure

A large chunk of this release is test modernization: pipeline tests continue migrating to the new mixin structure (Wan, Qwen-Image, FLUX.2, CogVideoX, Stable Diffusion, and the LoRA pipeline tests), `tests/others`, training tests, and attention-processor tests moved to `pytest`, model-level and pipeline-level quantization tests were standardized, and an `output_shape` property was introduced in the pipeline tests. The agent-facing docs and skills under `.ai/` were expanded to cover tests, model implementation, and blockset conventions. 

## All commits

* Fix model offloading and training tests + prevent examples timeout by @GiGiKoneti in #14091
* fix `_flash_3_varlen_hub` mask handling by @zhtmike in #14115
* Make doc builds faster by @mishig25 in #14131
* [tests] fix autoencoderdc ml training fix. by @sayakpaul in #14129
* [tests] fix tests for transformers latest stable. by @sayakpaul in #14120
* fix rf time scheduler problem by @TheLovesOfLadyPurple in #14011
* docs: improve docstring scheduling_lcm.py by @delmalih in #14133
* feat: add JoyImage edit plus by @tangyanf in #14032
* update licensing for others to 2026. by @sayakpaul in #14128
* [fix] missing doc-builder imports by @stevhliu in #14134
* add SP support for `_flash_3_varlen_hub` backend by @zhtmike in #13809
* post release v0.39.0 by @sayakpaul in #14116
* deprecate dduf. by @sayakpaul (direct commit on v0.40.0-release)
* Revert "deprecate dduf." by @sayakpaul (direct commit on v0.40.0-release)
* docs: improve docstring scheduling_scm.py by @delmalih in #14136
* Cosmos3 ModularPipeline by @yzhautouskay in #14110
* docs: improve docstring scheduling_sasolver.py by @delmalih in #14148
* Fix Helios auto offload decode by @pzarzycki in #14140
* docs: improve docstring scheduling_sde_ve.py by @delmalih in #14172
* Add Nunchaku Lite single-file quantization by @rootonchair in #14100
* Transfer support for Cosmos3 ModularPipeline by @yzhautouskay in #14150
* torch.dtype alias by @stevhliu in #14162
* ask to share self-review notes by @yiyixuxu in #14185
* Make `SD3Transformer2DModel` hidden states contiguous by @menglcai in #14186
* align snapshot_download to respect hfh latest version by @sayakpaul in #14118
* [skills] add notes about model implementation in our skills. by @sayakpaul in #14191
* [lora training] tag krea2 LoRA card with Turbo base model first to enable inference widget by @linoytsaban in #14171
* docs: improve docstring scheduling_tcd.py by @delmalih in #14192
* docs: improve docstring scheduling_unclip.py by @delmalih in #14196
* docs: improve docstring scheduling_repaint.py by @delmalih in #14199
* [core] deprecate dduf by @sayakpaul in #14141
* Fix local LoRA weight auto-discovery in offline mode by @fropych in #14204
* Add tests and agent docs for `kwargs_type` input/output by @yiyixuxu in #14157
* [Anima] Add img2img pipeline blocks by @PreethamNoelP in #13929
* update agent doc to cover more on tests + include it in review CI scope by @yiyixuxu in #14197
* Cosmos3 edge support by @atharvajoshi10 in #14181
* Fixing path traversal/arbitrary out-of-directory file read via sharde… by @buffett0323 in #14182
* add security.md as per internal notice. by @sayakpaul in #14174
* [Quantization] Fix ModelOpt pre-quantized loading by @yzhautouskay in #14188
* [tests] Pipeline test refactor by @sayakpaul in #14113
* docs: improve docstring scheduling_k_dpm_2_discrete.py by @delmalih in #14212
* Cosmos3 Distilled support by @yzhautouskay in #14177
* Add not_params to ModularPipelineTesterMixin by @yiyixuxu in #14207
* [agents doc] notes on when to create new blocksets for checkpoint variant by @yiyixuxu in #14208
* Fix AuraFlow VAE dtype mismatch on pipeline reuse by @IvenHsu01 in #14184
* [tests] fix autoencoderkl dtype tests by @sayakpaul in #14190
* refactor qwenimage pipeline tests to the new mixin structure by @akshan-main in #14220
* Add ace step lora support by @chenyangzhu1 in #14193
* [skills] update test skills for standard pipelines. by @sayakpaul in #14223
* Make `WanTransformer3DModel` hidden states contiguous before the block loop by @menglcai in #14236
* refactor wan 2.2 image-to-video pipeline tests to the new mixin structure by @akshan-main in #14242
* refactor wan vace pipeline tests to the new mixin structure by @akshan-main in #14231
* refactor wan 2.2 pipeline tests to the new mixin structure by @akshan-main in #14240
* refactor wan image-to-video pipeline tests to the new mixin structure by @akshan-main in #14228
* refactor wan pipeline tests to the new mixin structure by @akshan-main in #14224
* refactor wan video-to-video pipeline tests to the new mixin structure by @akshan-main in #14235
* refactor wan animate pipeline tests to the new mixin structure by @akshan-main in #14239
* fix test_pag_sdxl::StableDiffusionXLPAGPipelineIntegrationTests by @sywangyi in #13892
* [chore] remove experimental api warning from lora modules. by @sayakpaul in #14248
* [tests] fix cosmos3 tests by @sayakpaul in #14229
* Fix Cosmos3 Edge generator K normalization by @atharvajoshi10 in #14246
* [core] deprecate `torch_dtype` and prefer `dtype` following transformers. by @sayakpaul in #14205
* Remove JAX/Flax by @DN6 in #14169
* [tests] port attention processor tests to use pytest by @sayakpaul in #14161
* [Modular Diffusers] Fix group offload device mismatch by @asomoza in #14252
* [lora training] fix aspect ratio bucketing in dreambooth scripts (+ caption dropout, on-the-fly buckets) by @linoytsaban in #14158
* Reduce FLUX int8 test peak memory with sequential offload by @jiqing-feng in #13776
* Update `diffusers-cli` for agentic use by @DN6 in #13966
* [modular] detect stale auto docstrings in CI + regenerate current ones by @yiyixuxu in #14241
* Fix Wan and Motif video pipeline fast test failures by @sywangyi in #14269
* Krea2 Modular Pipeline Support, Documentation, Test Cases by @Cedric-Perauer in #14083
* [ci] ignore the token in vq_diffusion converter. by @sayakpaul in #14275
* Cosmos3 Model Parallelism by @atharvajoshi10 in #14054
* [tests] component manager tests by @sayakpaul in #13961
* [modular] clean up unused intermediate_inputs by @yiyixuxu in #14278
* refactor cogvideox video to video pipeline tests to the new mixin structure by @akshan-main in #14289
* refactor cogvideox pipeline tests to the new mixin structure by @akshan-main in #14276
* refactor cogvideox image to video pipeline tests to the new mixin structure by @akshan-main in #14283
* refactor cogvideox fun control pipeline tests to the new mixin structure by @akshan-main in #14284
* [tests] migrate training tests to pytest. by @sayakpaul in #14267
* [tests] fix some CLI command tests by @sayakpaul in #14302
* [lora training] add caption dropout and aspect ratio buckets to krea2 and qwen-image by @linoytsaban in #14089
* added the technical blog by @charchit7 in #14306
* [core] restrict logging of quant config based on the header size. by @sayakpaul in #14262
* docs: improve docstring scheduling_k_dpm_2_ancetstral_discrete.py by @delmalih in #14226
* [docs] add a warning note about device_map='cuda' usage. by @sayakpaul in #14261
* [docs] minor corrections in the overview of quantization table by @sayakpaul in #14301
* [docs] deprecate torch_dtype for dtype by @stevhliu in #14313
* refactor qwenimage controlnet pipeline tests to the new mixin structure by @akshan-main in #14309
* refactor qwenimage edit plus pipeline tests to the new mixin structure by @akshan-main in #14315
* refactor qwenimage edit pipeline tests to the new mixin structure by @akshan-main in #14314
* Preserve hook forward signature by @jloftin-nv in #14285
* Fix LoRA hot-swapping recompilation with `different_shapes_for_compilation` by @jiqing-feng in #14297
* refactor qwenimage img2img pipeline tests to the new mixin structure by @akshan-main in #14320
* [docs] remove image generation benchmarks by @stevhliu in #14310
* docs: improve docstring scheduling_ddpm_wuerstchen.py by @delmalih in #14319
* [docs] update agentic contribution guidelines by @stevhliu in #14312
* [tests] unify keep_in_32 tests in quantization test suites by @sayakpaul in #14257
* [quantization] SDNQ core loading by @asomoza in #14277
* docs: improve docstring scheduling folder - last batch by @delmalih in #14330
* Modular branch specific defaults by @yiyixuxu in #14234
* fix Mellon custom block required input handling by @wunianze666-netizen in #13888
* gguf: fix dequantization. by @sayakpaul in #14333
* [tests] standardize model-level quant tests by @sayakpaul in #14332
* Add missing `Args:` entries to scheduler docstrings by @4ktLuffy in #14354
* support group offloading under auto offloading by @yiyixuxu in #14358
* refactor flux2 klein inpaint pipeline tests to the new mixin structure by @akshan-main in #14337
* [kernels] download kernels when users request for it. by @sayakpaul in #14298
* refactor flux2 klein pipeline tests to the new mixin structure by @akshan-main in #14336
* refactor flux2 klein kv pipeline tests to the new mixin structure by @akshan-main in #14344
* Auto-reply to new model requests with remote code guidance by @yiyixuxu in #14343
* Add XPU expected slice for `SlowBnb4BitFluxControlWithLoraTests::test_lora_loading` by @jiqing-feng in #14202
* [tests] Migrate `tests/others` to `pytest`. by @sayakpaul in #14299
* [Kandinsky 5] Fix I2V conditioning: don't inject the image latent into visual_cond channels by @sashakunitsyn in #14282
* use assert_tensors_close in the migrated pipeline tests by @akshan-main in #14369
* Add MiniMax-H3 by @apolinario in #14355
* [Quantization] SDNQ Minimax H3 loading by @asomoza in #14398
* refactor qwenimage inpaint pipeline tests to the new mixin structure by @akshan-main in #14321
* refactor flux2 pipeline tests to the new mixin structure by @akshan-main in #14326
* [tests] introduce `output_shape` property in the pipeline tests. by @sayakpaul in #14253
* Point the MiniMax-H3 docs install note at main by @apolinario in #14401
* [core] support cp in h3. by @sayakpaul in #14407
* [tests] tighten tests for `unload_components()` by @sayakpaul in #14406
* [tests] implement todos in the modular tests for H3 followup by @sayakpaul in #14404
* [tests] fix torchao tests by @sayakpaul in #14258
* fix(lora): only drop adapter from _merged_adapters when unfused from all components by @AloysJehwin in #14385
* [tests] guard peft imports in test_lora_loader_utils by @sayakpaul in #14434
* [core] `DiffusionPipeline.device` deduction for split-device pipelines by @JingyaHuang in #14383
* 🚨 Give mixed-rank LoRAs without alpha keys their intended scale by @apolinario in #14409
* Ltx 2.5 by @sayakpaul in #14447
* docs: add installation instructions for NVIDIA Spark (ARM64) devices by @mfuntowicz in #14448
* Wan-Animate-2 (authored by @kelseyee) by @yiyixuxu in #14413
* Move `LTX25AutoBlocks` to new file with new model name by @dg845 in #14453
* [tests] tighten keep_in_32 modules tests by @sayakpaul in #14399
* Fix AuraFlow model parallelism device mismatch and update XPU IP-Adap… by @sywangyi in #14273
* feat: clean up peft related versioning voodoo. by @sayakpaul in #14463
* docs: document fused-kernel performance in Nunchaku Lite guide by @rootonchair in #14458
* [Agent docs] some updated based on recent integration by @yiyixuxu in #14452
* [CI][tests] Fix LTX-2.5 Diffuson Decoder Tiling CI CPU Timeout by @dg845 in #14462
* Add MiniMax Music 3 by @apolinario in #14456
* Add LoRA loading support for MiniMax-H3 by @apolinario in #14408
* [FA2] Use `kernels-community/aiter-flash-attn-ck` Hub kernel for ROCm FlashAttention (drop `aiter` dependency) by @Abdennacer-Badaoui in #14436
* split up tests in modular pipelines by @sayakpaul in #14444
* svd failures. by @sayakpaul (direct commit on v0.40.0-release)
* Revert "svd failures." by @sayakpaul (direct commit on v0.40.0-release)
* Bump transformers from 4.47.0 to 5.5.0 in /examples/flux-control by @dependabot[bot] in #14179
* FIX LoRA tests warning about unexpected keys by @BenjaminBossan in #14476
* [tests] use eval() on t5 for deterministic results. by @sayakpaul in #14472
* tests: fix qwen tests from getting oom'd in our CI. by @sayakpaul in #14474
* fix SVD tests by @sayakpaul in #14475
* tests: fix cuda model tests. by @sayakpaul in #14464
* ci: drop stale tokenizers<0.23.0 override by @sayakpaul in #14504
* Drop the experimental warning from Modular Diffusers by @yiyixuxu in #14525
* [tests] skip parallelism tests for some models. by @sayakpaul in #14505
* Fix batched DiffusionGemma adaptive stopping by @kashif in #14386
* docs: fix typos in Kandinsky 5.0 video docs by @iridescentWen in #14345
* Support DiffSynth-Studio MiniMax-H3 LoRAs by @apolinario in #14484
* [tests] refactor stable diffusion pipeline tests by @sayakpaul in #14339
* [tests] refactor pipeline-level quantization tests by @sayakpaul in #14435
* replace enable_gpa with repeat_interleave for krea2 by @yiyixuxu in #14523
* [CLI] Clean up and improvements to diffusers CLI by @DN6 in #14381
* [CI] Allow single file tests to run as fast tests by @DN6 in #14324
* Feat -- Stable Audio 3 by @buffett0323 in #14119
* [core] Support tensor parallelism for model inference (CUDA, Neuron) by @JingyaHuang in #13718
* [CI] Fix authentication on forked PRs by @DN6 in #14534
* fix: image preprocessing for cosmos3 by @atharvajoshi10 in #14519
* [tests] migrate lora tests for pipelines to use new mixins by @sayakpaul in #14268
* [distributed] fix corrupted gradient problem under ring CP. by @sayakpaul in #14274
* Restructure skill files and reference guides for CLI based installation. by @DN6 in #14454
* [CI] Fix build and test step in release workflow by @DN6 in #14543
* Release: v0.40.0-release by @sayakpaul (direct commit on v0.40.0-release)

---

> **Source** [huggingface/diffusers](https://github.com/huggingface/diffusers) · `v0.40.0` · 2026-08-20 · [upstream release](https://github.com/huggingface/diffusers/releases/tag/v0.40.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
