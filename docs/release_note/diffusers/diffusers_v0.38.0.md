---
title: "diffusers v0.38.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.38.0"
version: "v0.38.0"
published: "2026-05-01"
type: "minor"
lang: "en"
summary: "LLaDA2 is a family of discrete diffusion language models that generate text through block-wise iterative refinement. Instead of autoregressive token-by-token generation, LLaDA2 starts with a fully masked sequence and…"
---

# diffusers v0.38.0

## New Pipelines

### LLaDA2

[**LLaDA2**](https://huggingface.co/collections/inclusionAI/llada21) is a family of discrete diffusion language models that generate text through block-wise iterative refinement. Instead of autoregressive token-by-token generation, LLaDA2 starts with a fully masked sequence and progressively unmasks tokens by confidence over multiple refinement steps. 

- PR: https://github.com/huggingface/diffusers/pull/13226
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/llada2](https://huggingface.co/docs/diffusers/main/api/pipelines/llada2)

### Nucleus-MoE

NucleusMoE-Image is a 2B active 17B parameter model trained with efficiency at its core. Our novel architecture highlights the scalability of a sparse MoE architecture for Image generation. 

- PR: https://github.com/huggingface/diffusers/pull/13317
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/nucleusmoe_image](https://huggingface.co/docs/diffusers/main/api/pipelines/nucleusmoe_image)

Thanks to @sippycoder for the contribution.

### Ernie-Image

ERNIE-Image is a powerful and highly efficient image generation model with 8B parameters. 

- PR: https://github.com/huggingface/diffusers/pull/13432
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/ernie_image](https://huggingface.co/docs/diffusers/main/api/pipelines/ernie_image)

Thanks to @HsiaWinter for the contribution.

### LongCat-AudioDiT

LongCat-AudioDiT is a text-to-audio diffusion model from Meituan LongCat. 

- PR: https://github.com/huggingface/diffusers/pull/13483
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/longcat_audio_dit](https://huggingface.co/docs/diffusers/main/api/pipelines/longcat_audio_dit)

Thanks to @RuixiangMa for the contribution.

### Ace-Step 1.5

ACE-Step 1.5 generates variable-length stereo audio at 48 kHz (10 seconds to 10 minutes) from text prompts and optional lyrics. The full system pairs a Language Model planner with a Diffusion Transformer (DiT) synthesizer; this pipeline wraps the DiT half of that stack, and consists of three components: an [**AutoencoderOobleck**](https://huggingface.co/docs/diffusers/main/en/api/models/autoencoder_oobleck#diffusers.AutoencoderOobleck) VAE that compresses waveforms into 25 Hz stereo latents, a Qwen3-based text encoder for prompt and lyric conditioning, and an [**AceStepTransformer1DModel**](https://huggingface.co/docs/diffusers/main/en/api/models/ace_step_transformer#diffusers.AceStepTransformer1DModel) DiT that operates in the VAE latent space using flow matching.

- PR: [https://github.com/huggingface/diffusers/pull/13095](https://github.com/huggingface/diffusers/pull/13095)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/ace_step](https://huggingface.co/docs/diffusers/main/api/pipelines/ace_step)

Thanks to @[ChuxiJ](https://github.com/ChuxiJ) for the contribution.

### Flux.2 Small Decoder

Make your Flux.2 decoding faster with this new small decoder model from the Black Forest Labs. You can check it out [here](https://huggingface.co/black-forest-labs/FLUX.2-small-decoder). It was contributed by @huemin-art in [this PR](https://github.com/huggingface/diffusers/pull/13428).

## Modular Pipeline Support

We added modular support for LTX-2 and Hunyuan 1.5. 

## Core Library

- [Flash Attention 4 backend](https://github.com/huggingface/diffusers/issues/13280)
- [FlashPack loading](https://github.com/huggingface/diffusers/issues/12700)
- [Group offloading + TorchAO](https://github.com/huggingface/diffusers/pull/13276)
- [`ring_anything` as a new CP backend](https://github.com/huggingface/diffusers/pull/13545)
- [Profiling pipelines in Diffusers](https://github.com/huggingface/diffusers/pull/13356)

## All commits

* [Discrete Diffusion] Add LLaDA2 pipeline  by @kashif in #13226
* [LLADA2] documentation fixes  by @kashif in #13333
* [ci] claude in ci.  by @sayakpaul in #13297
* [docs] kernels  by @stevhliu in #13139
* [tests] Tests for conditional pipeline blocks  by @sayakpaul in #13247
* avoid hardcode device in flux-control example  by @kaixuanliu in #13336
* fix claude workflow to include id-token with write.  by @sayakpaul in #13338
* Update LTX-2 Docs to Cover LTX-2.3 Models  by @dg845 in #13337
* remove str option for quantization config in torchao  by @howardzhang-cv in #13291
* [ci] include checkout step in claude review workflow  by @sayakpaul in #13352
* change minimum version guard for torchao to 0.15.0  by @howardzhang-cv in #13355
* [ci] move to assert instead of self.Assert*  by @sayakpaul in #13366
* [docs] refactor model skill  by @stevhliu in #13334
* Fix Ulysses SP backward with SDPA  by @zhtmike in #13328
* Add train flux2 series lora config  by @tcaimm in #13011
* [docs] Add NeMo Automodel training guide  by @pthombre in #13306
* Fix: ensure consistent dtype and eval mode in pipeline save/load tests  by @YangKai0616 in #13339
* [ci] support claude reviewing on forks.  by @sayakpaul in #13365
* Fix MotionConv2d to cast blur_kernel to input dtype instead of reverse  by @YangKai0616 in #13364
* chore: update claude_review.yml  by @hf-security-analysis[bot] in #13374
* corrects single file path validation logic  by @andrew-w-ross in #13363
* [docs] deprecate pipelines  by @stevhliu in #13157
* 🔒 Pin GitHub Actions to commit SHAs  by @paulinebm in #13385
* [docs] add auto docstring and parameter templates documentation for m…  by @yiyixuxu in #13382
* Fix typos and grammar errors in documentation  by @GalacticAvenger in #13391
* fix(ddim): validate eta is in [0, 1] in DDIMPipeline  by @NIK-TIGER-BILL in #13367
* Fix Dynamo `lru_cache` warnings during `torch.compile`  by @jiqing-feng in #13384
* [tests] refactor wan autoencoder tests  by @sayakpaul in #13371
* NucleusMoE-Image  by @sippycoder in #13317
* Add examples on how to profile a pipeline  by @sayakpaul in #13356
* Update README.md of the profiling guide  by @sayakpaul in #13400
* [CI] Refactor Cosmos Transformer Tests  by @DN6 in #13335
* [tests] refactor autoencoderdc tests  by @sayakpaul in #13369
* [CI] Hunyuan Transformer Tests Refactor  by @DN6 in #13342
* Fix VAE offload encode device mismatch in DreamBooth scripts  by @azolotenkov in #13417
* Remove references to torchao's AffineQuantizedTensor  by @andrewor14 in #13405
* [tests] fix autoencoderdc tests  by @sayakpaul in #13424
* [core] fix group offloading when using torchao  by @sayakpaul in #13276
* Fix IndexError in HunyuanVideo I2V pipeline  by @kaixuanliu in #13244
* improve Claude CI  by @yiyixuxu in #13397
* FLUX.2 small decoder  by @huemin-art in #13428
* [CI] Add PR/Issue Auto Labeler  by @DN6 in #13380
* [CI] Add GLM Image Transformer Model Tests  by @DN6 in #13344
* [CI] Use finegrained token for Issue Labeler  by @DN6 in #13433
* Handle prompt embedding concat in Qwen dreambooth example  by @chenyangzhu1 in #13387
* fix(qwen-image dreambooth): correct prompt embed repeats when using `--with_prior_preservation`  by @chenyangzhu1 in #13396
* Cache RoPE freqs on device to avoid repeated CPU-GPU copy in QwenImage  by @akshan-main in #13406
* [tests] tighten dependency testing.  by @sayakpaul in #13332
* Fix grammar in LoRA documentation  by @Xyc2016 in #13423
* Fix HunyuanVideo 1.5 I2V by preprocessing image at pixel resolution i…  by @akshan-main in #13440
* [modular] Add LTX Video modular pipeline  by @akshan-main in #13378
* Add ernie image  by @HsiaWinter in #13432
* [core] fix fa4 integration  by @sayakpaul in #13443
* FlashPack  by @hlky in #12700
* [ptxla] fix pytorch xla inference on TPUs.  by @entrpn in #13463
* fix some dtype issue for gguf / some gpu backends  by @HsiaWinter in #13464
* Fix Qwen Image DreamBooth prior-preservation batch ordering  by @azolotenkov in #13441
* [tests] fix deprecated attention processor testing.  by @sayakpaul in #13469
* [tests] xfail clip related issues.  by @sayakpaul in #13454
* [agent] add modular doc  by @yiyixuxu in #13410
* [tests] fix training tests  by @sayakpaul in #13442
* fix(profiling): preserve instance isolation when decorating methods  by @Akash504-ai in #13471
* [Feat] Adds LongCat-AudioDiT pipeline   by @RuixiangMa in #13390
* Fix Flux2 DreamBooth prior preservation prompt repeats  by @azolotenkov in #13415
* chore: bump doc-builder SHA for PR upload workflow  by @rtrompier in #13476
* Remove compile bottlenecks from ZImage pipeline  by @hitchhiker3010 in #13461
* [chore] Add diffusers-format example to LongCatAudioDiTPipeline  by @RuixiangMa in #13483
* [core] fix autoencoderkl qwenimage for xla  by @sayakpaul in #13480
* add PR fork workable  by @paulinebm in #13438
* Add modular pipeline for HunyuanVideo 1.5  by @akshan-main in #13389
* [agents docs] add float64 gotcha  by @yiyixuxu in #13472
* fix(ernie-image): avoid locals() comprehension scope issue in callback kwargs  by @songh11 in #13478
* [Bugfix] Fix shape mismatch in LongCatAudioDiTTransformer conversion  by @RuixiangMa in #13494
* feat: bump safetensors to `0.8.0-rc.0`  by @McPatate in #13470
* fix(qwen): fix CFG failing when passing neg prompt embeds with none mask  by @Sunhill666 in #13379
* add an example of spmd for flux on v5e-8  by @sayakpaul in #13474
* Add FLUX.2 Klein Inpaint Pipeline  by @adi776borate in #13050
* [docs] add a mention of torchao and other backends in speed memory docs.  by @sayakpaul in #13499
* Fix Flux2 non-diffusers guidance LoRA conversion  by @yadferhad in #13486
* add _native_npu_attention support mask shape like [B,1,1,S]  by @chang-zhijie in #13490
* fix(freeu): run FFT in float32 for float16 inputs to avoid ComplexHalf  by @Ricardo-M-L in #13503
* Fix non-deterministic T5 outputs in HiDream pipeline tests  by @kaixuanliu in #13534
* Fix AuraFlow attn processors applying norm_added_q to key projection  by @Ricardo-M-L in #13533
* add _repeated_blocks for ErnieImageTransformer2DModel  by @kaixuanliu in #13496
* [CI] Fix BnB tests  by @DN6 in #13481
* [tests] fix group offloading with disk tests  by @sayakpaul in #13491
* [ci] feat: have pr labeler label for closing issues.  by @sayakpaul in #13548
* Improve `trust_remote_code`  by @hlky in #13448
* chore: bump doc-builder SHA for main doc build workflow  by @rtrompier in #13555
* [ci] simplify release workflow.  by @sayakpaul in #13329
* [attention backends] fix ring CP for flash and flash 3  by @sayakpaul in #13182
* [agents docs] add pipelines.md etc  by @yiyixuxu in #13567
* Add Ernie-Image modular pipeline  by @akshan-main in #13498
* [agents docs] update modular.md  by @yiyixuxu in #13568
* [docs] fix typo in AutoencoderOobleck docs  by @ivnvalex in #13642) 
* Fix ErnieImagePipeline pre-computed prompt_embeds + num_images_per_prompt shape mismatch  by @Ricardo-M-L in #13532
* feat: support ring attention with arbitrary KV sequence lengths  by @songh11 in #13545
* [ci] use tokenizers stable installtion in CI.  by @sayakpaul in #13562
* NucleusMoE docs  by @sayakpaul in #13661
* Fix UniPC scheduler device mismatch when using offloading  by @ParamChordiya in #13489
* [Ernie-Image] Add lora support  by @asomoza in #13575
* Add ACE-Step pipeline for text-to-music generation  by @ChuxiJ in #13095
* Fix missing latents_bn_std dtype cast in VAE normalization  by @adi776borate in #13299
* Release: v0.38.0-release by @sayakpaul (direct commit on v0.38.0-release)

## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @kashif
    * [Discrete Diffusion] Add LLaDA2 pipeline (#13226)
    * [LLADA2] documentation fixes (#13333)
* @howardzhang-cv
    * remove str option for quantization config in torchao (#13291)
    * change minimum version guard for torchao to 0.15.0 (#13355)
* @sippycoder
    * NucleusMoE-Image (#13317)
* @DN6
    * [CI] Refactor Cosmos Transformer Tests (#13335)
    * [CI] Hunyuan Transformer Tests Refactor (#13342)
    * [CI] Add PR/Issue Auto Labeler (#13380)
    * [CI] Add GLM Image Transformer Model Tests (#13344)
    * [CI] Use finegrained token for Issue Labeler (#13433)
    * [CI] Fix BnB tests (#13481)
* @akshan-main
    * Cache RoPE freqs on device to avoid repeated CPU-GPU copy in QwenImage (#13406)
    * Fix HunyuanVideo 1.5 I2V by preprocessing image at pixel resolution i… (#13440)
    * [modular] Add LTX Video modular pipeline (#13378)
    * Add modular pipeline for HunyuanVideo 1.5 (#13389)
    * Add Ernie-Image modular pipeline (#13498)
* @HsiaWinter
    * Add ernie image (#13432)
    * fix some dtype issue for gguf / some gpu backends (#13464)
* @hlky
    * FlashPack (#12700)
    * Improve `trust_remote_code` (#13448)
* @RuixiangMa
    * [Feat] Adds LongCat-AudioDiT pipeline  (#13390)
    * [chore] Add diffusers-format example to LongCatAudioDiTPipeline (#13483)
    * [Bugfix] Fix shape mismatch in LongCatAudioDiTTransformer conversion (#13494)
* @adi776borate
    * Add FLUX.2 Klein Inpaint Pipeline (#13050)
    * Fix missing latents_bn_std dtype cast in VAE normalization (#13299)
* @ChuxiJ
    * Add ACE-Step pipeline for text-to-music generation (#13095)

---

> **Source** [huggingface/diffusers](https://github.com/huggingface/diffusers) · `v0.38.0` · 2026-05-01 · [upstream release](https://github.com/huggingface/diffusers/releases/tag/v0.38.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
