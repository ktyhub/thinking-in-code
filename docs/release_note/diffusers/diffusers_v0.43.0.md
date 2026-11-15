---
title: "diffusers v0.43.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.43.0"
version: "v0.43.0"
published: "2026-11-12"
type: "minor"
lang: "en"
summary: "MiniMax-H3-Image supports text-to-image generation and editing with one or more reference images. The integration includes a dedicated image transformer and autoencoder, with a fixed six-step sampling schedule and…"
---

# diffusers v0.43.0

> [!TIP]
> This release adds five modular model integrations for image generation, editing, video with audio, speech-driven animation, and world simulation. It also improves attention backends, tensor parallelism, LoRA handling, and checkpoint saving.

## MiniMax-H3-Image

MiniMax-H3-Image supports text-to-image generation and editing with one or more reference images. The integration includes a dedicated image transformer and autoencoder, with a fixed six-step sampling schedule and distilled guidance. A separate prompt-enhancement workflow expands short requests and suggests an aspect ratio.

Load it through `ModularPipeline.from_pretrained(...)`, then call `load_components(...)`. The [MiniMax-H3-Image documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/minimax_h3_image) covers reference-image prompts, output sizes, prompt enhancement, and component offloading.

## Pika H3 Flex

Pika H3 Flex builds on MiniMax-H3 to generate video and synchronized stereo audio in six steps. It supports text prompts, first and/or last frames, and multimodal references through separate modular workflows. The integration includes LoRA adapter loading and a guide to sharing already-loaded MiniMax-H3 components between the two pipelines.

See the [Pika H3 Flex documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/pika_h3_flex) for workflow selection, adapter loading, and component reuse.

## P-H3-Image

P-H3-Image from Pruna AI brings text-to-image generation and instruction-based editing with up to eight input images. Its modular pipeline includes a prompt upsampler that turns requests into detailed generation or editing prompts, an image autoencoder, and a text connector. The checkpoint uses eight sampling steps with distilled guidance.

See the [P-H3-Image documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/p_h3_image) for image sizing, reference-image editing, prompt upsampling, and offloading. Thanks to @nifleisch for the integration in [#15171](https://github.com/huggingface/diffusers/pull/15171).

## Kandinsky S2V 1.0

Kandinsky S2V 1.0 animates a person from a reference image and a speech recording, including full-body movement aligned with the speech. It generates video in five-second chunks, carrying FramePack memory between chunks. The supplied speech provides the soundtrack; the model generates the video.

The modular integration supports Lite and Pro checkpoints, including distilled variants that use `PiflowScheduler` with a default of 16 steps. See the [Kandinsky S2V documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/kandinsky_s2v) for audio preparation, checkpoint settings, and memory requirements. Thanks to @nvsm for the integration in #15164.

## PAN 2

PAN 2 simulates scenes from prompts describing actions and camera movements over time. This release integrates its 29B generative simulator through text-to-video and image-to-video modular workflows. Context parallelism and FirstBlockCache, MagCache, and TaylorSeer caching are supported. Prompt and video safety checks are enabled by default and require the separate `pan2-guardrail` package.

See the [PAN 2 documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/pan2) for loading, guardrails, and distributed inference. The integration covers the simulator; the separate reasoning model that writes its prompts is linked from the model documentation. Thanks to @wu-qing-157 for the integration in #15202.

### Other highlights

- **MiniMax-H3 tensor parallelism:** shard the transformer across devices, including its large modulation projections. Replicated parameters also retain their intended dtype during tensor-parallel loading. See: [#14609](https://github.com/huggingface/diffusers/pull/14609), [#15147](https://github.com/huggingface/diffusers/pull/15147).
- **AMD attention support:** the new `aiter_sage_hub` backend brings a Hub-hosted SageAttention kernel to RDNA4 gfx1201 GPUs, with native SDPA fallback for unsupported input shapes. See #15060.
- **Attention backend fixes:** choosing a backend on one model no longer changes the backend of unrelated models. Individual attention modules now check requirements and download Hub kernels when selecting a backend, and the FlashAttention-2 integration works with newer Hub kernel versions. See #14335, #15000.
- **LoRA fixes:** component-weight dictionaries now broadcast correctly across multiple adapters, and Kohya text-encoder LoRAs retain their per-module alpha values. Adapter-weight documentation and type hints also clarify supported formats. See: #15128, #15157.
- **Checkpoint saving:** `save_pretrained()` preserves other variants' shards and removes obsolete indexes when replacing a sharded checkpoint with a single-file checkpoint. See [#14844](https://github.com/huggingface/diffusers/pull/14844).
- **Modular caching:** stateful cache hooks reset after each pipeline call, including calls that raise an exception, so subsequent generations start with fresh cache state. See [#15212](https://github.com/huggingface/diffusers/pull/15212).
- **Training examples:** fix gradient clipping in the text-to-image LoRA and SDXL LCM LoRA scripts, update FLUX quantized embedding preparation for current Transformers, and remove expired deprecation blocks that crashed training with `--revision`. See: [#15184](https://github.com/huggingface/diffusers/pull/15184), [#15144](https://github.com/huggingface/diffusers/pull/15144), [#15118](https://github.com/huggingface/diffusers/pull/15118).
- **Documentation:** reorganized distributed-inference guides, updated AWS Trainium examples for native TorchNeuron, and corrected Cosmos3 FP8 checkpoint locations. See: [#15172](https://github.com/huggingface/diffusers/pull/15172), [#15138](https://github.com/huggingface/diffusers/pull/15138), [#15236](https://github.com/huggingface/diffusers/pull/15236).

### Deprecations and compatibility

- **Dependency checks:** availability checks now enforce supported dependency versions. An installed package below the supported minimum is treated as unavailable, with an upgrade message. For example, the existing minimums of `torch>=2.6` and `transformers>=4.41.2` are now enforced by these checks. ([#15148](https://github.com/huggingface/diffusers/pull/15148))
- **Relocated model components:** latent upscalers and condition embedders move under `diffusers.models`. Existing checkpoints remain loadable, while old pipeline-module imports are deprecated for removal in 1.0.0. Use public imports such as `from diffusers import LTX2TextConnectors`. See: [#15111](https://github.com/huggingface/diffusers/pull/15111).
- **Modular input defaults:** explicitly passing `None` preserves that value. Omitted inputs receive the default of the first block that reads them. An `InputParam` declared both required and with a non-`None` default is treated as optional and emits a warning. See: [#15135](https://github.com/huggingface/diffusers/pull/15135), [#14521](https://github.com/huggingface/diffusers/pull/14521).
- **Training behavior:** `--max_grad_norm` now takes effect in the affected LoRA examples. Runs with gradients above the clipping threshold can therefore behave differently from earlier versions. See: [#15184](https://github.com/huggingface/diffusers/pull/15184).
- **Component loading:** repository configuration no longer causes arbitrary component-library imports. Custom component modules outside the supported library set must already be imported by the caller, and modular custom-block loading checks remote-code trust before processing requirements. See: [3076605](https://github.com/huggingface/diffusers/commit/30766058a7364244d0bdf5d3bc476a64a687243f).

Thanks to everyone who contributed code, documentation, reviews, and issue reports!

## All commits

- Remove expired non_ema_revision deprecation blocks from training examples by @A-Raphie in [#15118](https://github.com/huggingface/diffusers/pull/15118).
- Extend CLI compile and attention-backend tests to other devices by @sywangyi in [#15039](https://github.com/huggingface/diffusers/pull/15039).
- Fix shared LoRA component weight broadcasting by @gorkadabo1 in [#15128](https://github.com/huggingface/diffusers/pull/15128).
- [agent docs] prefer named arguments over nested dicts by @yiyixuxu in [#15129](https://github.com/huggingface/diffusers/pull/15129).
- when an InputParam is both required and has a default: set required = False and warn by @yiyixuxu in [#14521](https://github.com/huggingface/diffusers/pull/14521).
- Restrict repository-specified component imports and check custom-block trust before requirements by @LinZiyuu, with @DN6, in [3076605](https://github.com/huggingface/diffusers/commit/30766058a7364244d0bdf5d3bc476a64a687243f).
- Fix the Marigold intrinsics integration test by @sywangyi in [#15086](https://github.com/huggingface/diffusers/pull/15086).
- [core] move latent upscalers and condition embedders out of pipelines by @sayakpaul in [#15111](https://github.com/huggingface/diffusers/pull/15111).
- [CI] Use HF Trusted Publisher OIDC tokens by @DN6 in [#15106](https://github.com/huggingface/diffusers/pull/15106).
- [docs] AWS Trainium: rewrite guide for native TorchNeuron support by @JingyaHuang in [#15138](https://github.com/huggingface/diffusers/pull/15138).
- Add `aiter_sage_hub` attention backend for AMD RDNA4 (gfx1201) by @Shan2L in [#15060](https://github.com/huggingface/diffusers/pull/15060).
- fix: scope save_pretrained shard cleanup to the saved variant (avoid deleting another variant's shards) by @AloysJehwin in [#14844](https://github.com/huggingface/diffusers/pull/14844).
- Pika h3 flex by @yiyixuxu in [#15150](https://github.com/huggingface/diffusers/pull/15150).
- [docs] Pika H3 Flex: add a section on reusing minimax h3 components by @yiyixuxu in [#15153](https://github.com/huggingface/diffusers/pull/15153).
- [components manager] when a component is registered again: warn -> debug by @yiyixuxu in [#15152](https://github.com/huggingface/diffusers/pull/15152).
- Fix/flux lora quantization compute embeddings by @kahlun in [#15144](https://github.com/huggingface/diffusers/pull/15144).
- Add Kandinsky S2V 1.0 (speech-to-video) as a modular pipeline by @nvsm in [#15164](https://github.com/huggingface/diffusers/pull/15164).
- Add P-H3-Image by @nifleisch in [#15171](https://github.com/huggingface/diffusers/pull/15171).
- Fix attention backend leaking across models by @raghulchandramouli in [#14335](https://github.com/huggingface/diffusers/pull/14335).
- Docs: build English only, other languages are machine-translated by @mishig25 in [#15149](https://github.com/huggingface/diffusers/pull/15149).
- [core] download hub kernel in AttentionModuleMixin.set_attention_backend by @deep1blue in [#15075](https://github.com/huggingface/diffusers/pull/15075).
- [docs] Fix 22 dead external links in docs/source/en by @mlzerotoheroyoutube in [#15174](https://github.com/huggingface/diffusers/pull/15174).
- Clarify LoRA adapter weight documentation and type hints by @gorkadabo1 in [#15157](https://github.com/huggingface/diffusers/pull/15157).
- Fix replicated parameter dtypes during tensor-parallel loading by @yzhautouskay in [#15147](https://github.com/huggingface/diffusers/pull/15147).
- [examples] Fix gradient clipping in `train_text_to_image_lora.py` and `train_lcm_distill_lora_sdxl.py` by @gorkemgul in [#15184](https://github.com/huggingface/diffusers/pull/15184).
- [feat] Tensor parallelism for MiniMax-H3 by @JingyaHuang in [#14609](https://github.com/huggingface/diffusers/pull/14609).
- Fix stale links to moved and renamed files by @sarankumar1325 in [#15151](https://github.com/huggingface/diffusers/pull/15151).
- agents: add a section on _tp_plan in modeling reference. by @sayakpaul in [#15194](https://github.com/huggingface/diffusers/pull/15194).
- Style changes by @sayakpaul in [#15198](https://github.com/huggingface/diffusers/pull/15198).
- [docs/CI] contribution guide update, adding a context item on issue template, update issue-link reminder by @yiyixuxu in [#15179](https://github.com/huggingface/diffusers/pull/15179).
- Replace the remaining forum links with GitHub Discussions by @yiyixuxu in [#15200](https://github.com/huggingface/diffusers/pull/15200).
- [modular] fill a missing input from the first block that reads it, keep a passed None by @yiyixuxu in [#15135](https://github.com/huggingface/diffusers/pull/15135).
- Pin hf-doc-builder to 0.6.0 by @yiyixuxu in [#15201](https://github.com/huggingface/diffusers/pull/15201).
- [ci]: solve protobuf problem for the training e examples problem. by @sayakpaul in [#15206](https://github.com/huggingface/diffusers/pull/15206).
- Reset stateful cache hooks after every ModularPipeline call by @yiyixuxu in [#15212](https://github.com/huggingface/diffusers/pull/15212).
- [docs] discourage cross repo references for modular repos. by @sayakpaul in [#15081](https://github.com/huggingface/diffusers/pull/15081).
- [Modular] Add PAN 2 by @wu-qing-157 in [#15202](https://github.com/huggingface/diffusers/pull/15202).
- fix: prefer latest flash attn2 by @drbh in [#15000](https://github.com/huggingface/diffusers/pull/15000).
- MiniMax H3 Image by @sayakpaul in [#15230](https://github.com/huggingface/diffusers/pull/15230).
- [docs] Distributed inference by @stevhliu in [#15172](https://github.com/huggingface/diffusers/pull/15172).
- Update dead Kaggle Cats vs Dogs download URL in create_dataset doc by @Hisernberg in [#15231](https://github.com/huggingface/diffusers/pull/15231).
- Bump doc-builder to render math in docstring descriptions by @mishig25 in [#15223](https://github.com/huggingface/diffusers/pull/15223).
- Fix the PAN 2 context-parallelism documentation link by @yiyixuxu in [#15238](https://github.com/huggingface/diffusers/pull/15238).
- Document Cosmos3 Nano, Super, and Edge FP8 as standalone repos by @ConstBob in [#15236](https://github.com/huggingface/diffusers/pull/15236).
- [core] Enforce minimum supported versions in availability checks by @DN6 in [#15148](https://github.com/huggingface/diffusers/pull/15148).
- fix: derive text-encoder alpha_pattern keys from the LoRA module name by @akhil9tiet in [#14972](https://github.com/huggingface/diffusers/pull/14972).
- [chore] remove smoke test file. by @sayakpaul in [#15160](https://github.com/huggingface/diffusers/pull/15160).
- [chore] update return type annotations for models. by @sayakpaul in [#15089](https://github.com/huggingface/diffusers/pull/15089).
- post release 0.42.0. by @sayakpaul in [#15243](https://github.com/huggingface/diffusers/pull/15243).
- Release: v0.43.0-release by @sayakpaul ([release commit](https://github.com/huggingface/diffusers/commit/423ab90580b2847998591669b8326f47b6d14d8b)).

## Significant community contributions

- @nifleisch: P-H3-Image generation, editing, and prompt upsampling. ([#15171](https://github.com/huggingface/diffusers/pull/15171))
- @nvsm: Kandinsky S2V 1.0 speech-driven video generation. ([#15164](https://github.com/huggingface/diffusers/pull/15164))
- @wu-qing-157: PAN 2 modular video generation and world simulation. ([#15202](https://github.com/huggingface/diffusers/pull/15202))
- @Shan2L: AMD RDNA4 SageAttention backend. ([#15060](https://github.com/huggingface/diffusers/pull/15060))
- @raghulchandramouli, @deep1blue, and @drbh: attention backend isolation, Hub kernel loading, and FlashAttention-2 compatibility. ([#14335](https://github.com/huggingface/diffusers/pull/14335), [#15075](https://github.com/huggingface/diffusers/pull/15075), [#15000](https://github.com/huggingface/diffusers/pull/15000))
- @gorkadabo1 and @akhil9tiet: LoRA weight broadcasting, documentation, and text-encoder alpha handling. ([#15128](https://github.com/huggingface/diffusers/pull/15128), [#15157](https://github.com/huggingface/diffusers/pull/15157), [#14972](https://github.com/huggingface/diffusers/pull/14972))
- @AloysJehwin and @yzhautouskay: checkpoint variant preservation and tensor-parallel loading precision. ([#14844](https://github.com/huggingface/diffusers/pull/14844), [#15147](https://github.com/huggingface/diffusers/pull/15147))
- @gorkemgul, @kahlun, and @A-Raphie: gradient clipping, quantized embedding preparation, and training startup fixes. ([#15184](https://github.com/huggingface/diffusers/pull/15184), [#15144](https://github.com/huggingface/diffusers/pull/15144), [#15118](https://github.com/huggingface/diffusers/pull/15118))

## Thanks to our issue reporters

These authors opened issues resolved by PRs merged into this release. Thank you for helping improve Diffusers!

- @andre-menutole: text-encoder LoRA alpha handling — [#14970](https://github.com/huggingface/diffusers/issues/14970) → [#14972](https://github.com/huggingface/diffusers/pull/14972).
- @gorkadabo1: LoRA weight broadcasting and documentation — [#15127](https://github.com/huggingface/diffusers/issues/15127) → [#15128](https://github.com/huggingface/diffusers/pull/15128); [#15146](https://github.com/huggingface/diffusers/issues/15146) → [#15157](https://github.com/huggingface/diffusers/pull/15157).
- @gorkemgul: ineffective gradient clipping — [#15178](https://github.com/huggingface/diffusers/issues/15178) → [#15184](https://github.com/huggingface/diffusers/pull/15184).
- @kahlun: FLUX quantized embedding preparation — [#15145](https://github.com/huggingface/diffusers/issues/15145) → [#15144](https://github.com/huggingface/diffusers/pull/15144).
- @Marius-Graml: missing Hub kernel downloads — [#13284](https://github.com/huggingface/diffusers/issues/13284) → [#15075](https://github.com/huggingface/diffusers/pull/15075).
- @Pdevadiga45: checkpoint variant shards being deleted — [#14719](https://github.com/huggingface/diffusers/issues/14719) → [#14844](https://github.com/huggingface/diffusers/pull/14844).
- @pratikgx: broken documentation links — [#14886](https://github.com/huggingface/diffusers/issues/14886) → [#15174](https://github.com/huggingface/diffusers/pull/15174).
- @SeverinVisionary: training crashes with `--revision` — [#15115](https://github.com/huggingface/diffusers/issues/15115) → [#15118](https://github.com/huggingface/diffusers/pull/15118).
- @Shan2L: RDNA4 SageAttention support — [#15014](https://github.com/huggingface/diffusers/issues/15014) → [#15060](https://github.com/huggingface/diffusers/pull/15060).

**Full changelog:** [v0.42.0 to the v0.43.0 release commit](https://github.com/huggingface/diffusers/compare/v0.42.0...423ab90580b2847998591669b8326f47b6d14d8b)

---

> **Source** [huggingface/diffusers](https://github.com/huggingface/diffusers) · `v0.43.0` · 2026-11-12 · [upstream release](https://github.com/huggingface/diffusers/releases/tag/v0.43.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
