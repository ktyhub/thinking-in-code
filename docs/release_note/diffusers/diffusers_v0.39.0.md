---
title: "diffusers v0.39.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.39.0"
version: "v0.39.0"
published: "2026-07-03"
type: "minor"
lang: "en"
summary: "Cosmos 3 is NVIDIA's unified world foundation model (WFM) for Physical AI — a single omni-model built on a Mixture-of-Transformers (MoT) architecture that combines world generation, physical reasoning, and action…"
---

# diffusers v0.39.0

## New Pipelines

### Cosmos 3

[**Cosmos 3**](https://huggingface.co/docs/diffusers/main/api/pipelines/cosmos3) is NVIDIA's unified world foundation model (WFM) for Physical AI — a single omni-model built on a Mixture-of-Transformers (MoT) architecture that combines world generation, physical reasoning, and action generation, replacing the separate Predict, Reason, and Transfer models from earlier Cosmos releases. A single `Cosmos3OmniTransformer` runs a Qwen-style language model in parallel with a diffusion generation pathway, joined by a 3D multimodal RoPE. This release also lands video-to-video and action-conditioned generation, and a sound encoder.

- PR: [https://github.com/huggingface/diffusers/pull/13818](https://github.com/huggingface/diffusers/pull/13818)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/cosmos3](https://huggingface.co/docs/diffusers/main/api/pipelines/cosmos3)

Thanks to @atharvajoshi10, @yzhautouskay, and @MaciejBalaNV for the contributions.

### Ideogram 4

[**Ideogram 4**](https://huggingface.co/docs/diffusers/main/api/pipelines/ideogram4) is a flow-matching text-to-image model that uses a multimodal text encoder and an asymmetric classifier-free guidance scheme: a dedicated `unconditional_transformer` produces the negative branch with zeroed text features, while the main `transformer` consumes the full packed text + image sequence. The pipeline ships with structured prompt upsampling and LoRA loading support.

- PR: [https://github.com/huggingface/diffusers/pull/13859](https://github.com/huggingface/diffusers/pull/13859)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/ideogram4](https://huggingface.co/docs/diffusers/main/api/pipelines/ideogram4)

Thanks to @JinLiIdeogram for the contribution.

### Krea 2

[**Krea 2 (K2)**](https://huggingface.co/docs/diffusers/main/api/pipelines/krea2) is a flow-matching text-to-image model built around a single-stream MMDiT with grouped-query attention. A Qwen3-VL text encoder provides the conditioning — hidden states from twelve decoder layers are tapped per token and fused inside the transformer by a small text-fusion stage — and images are decoded with the Qwen-Image VAE. Both the base (midtrain) and TDM (distilled, few-step) checkpoints are supported, alongside a LoRA DreamBooth trainer.

- PR: [https://github.com/huggingface/diffusers/pull/14045](https://github.com/huggingface/diffusers/pull/14045)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/krea2](https://huggingface.co/docs/diffusers/main/api/pipelines/krea2)

Thanks to @EleaZhong and @Abhinay1997 for the contribution.

### DreamLite

[**DreamLite**](https://huggingface.co/docs/diffusers/main/api/pipelines/dreamlite) is a text-to-image and image-editing model from ByteDance. It pairs a custom 2D U-Net (`DreamLiteUNetModel`) with the `Qwen3-VL` multimodal encoder as its prompt / image-instruction encoder, and uses an `AutoencoderTiny` (TAESD-style) VAE for fast latent encode/decode. A distilled `DreamLiteMobilePipeline` targets on-device, low-latency generation.

- PR: [https://github.com/huggingface/diffusers/pull/13815](https://github.com/huggingface/diffusers/pull/13815)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/dreamlite](https://huggingface.co/docs/diffusers/main/api/pipelines/dreamlite)

Thanks to @Carlofkl for the contribution.

### PRX Pixel

[**PRXPixel**](https://huggingface.co/docs/diffusers/main/api/pipelines/prx_pixel) is a pixel-space text-to-image generation model by Photoroom. A ~7B `PRXTransformer2DModel` denoises raw RGB images directly — no VAE is needed. The model is conditioned on a Qwen3-VL text encoder and uses flow matching where the transformer predicts the clean image at each step (x-prediction).

- PR: [https://github.com/huggingface/diffusers/pull/13928](https://github.com/huggingface/diffusers/pull/13928)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/prx_pixel](https://huggingface.co/docs/diffusers/main/api/pipelines/prx_pixel)

Thanks to @DavidBert for the contribution.

### Motif-Video

[**Motif-Video**](https://huggingface.co/docs/diffusers/main/api/pipelines/motif_video) is a 2B parameter diffusion transformer for text-to-video and image-to-video generation. It features a three-stage architecture (12 dual-stream + 16 single-stream + 8 DDT decoder layers), Shared Cross-Attention for stable text-video alignment over long sequences, a T5Gemma2 text encoder, and rectified flow matching for velocity prediction.

- PR: [https://github.com/huggingface/diffusers/pull/13551](https://github.com/huggingface/diffusers/pull/13551)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/motif_video](https://huggingface.co/docs/diffusers/main/api/pipelines/motif_video)

Thanks to @waitingcheung for the contribution.

### AnyFlow

[**AnyFlow**](https://huggingface.co/docs/diffusers/main/api/pipelines/anyflow) from NVIDIA, NUS, and MIT is the first any-step video diffusion framework built on flow maps, enabling a single model (bidirectional or causal) to adapt to arbitrary inference budgets. It ships both bidirectional and FAR causal pipelines built on Wan2.1 backbones, covering text-to-video, image-to-video, and video-to-video.

- PR: [https://github.com/huggingface/diffusers/pull/13745](https://github.com/huggingface/diffusers/pull/13745)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/anyflow](https://huggingface.co/docs/diffusers/main/api/pipelines/anyflow)

Thanks to @Enderfga for the contribution.

### JoyAI-Image-Edit

[**JoyAI-Image**](https://huggingface.co/docs/diffusers/main/api/pipelines/joyimage_edit) is a unified multimodal foundation model for image understanding, text-to-image generation, and instruction-guided image editing. It combines an 8B Multimodal LLM with a 16B Multimodal Diffusion Transformer (MMDiT). `JoyImageEditPipeline` supports general image editing as well as spatial editing capabilities including object move, object rotation, and camera control.

- PR: [https://github.com/huggingface/diffusers/pull/13444](https://github.com/huggingface/diffusers/pull/13444)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/joyimage_edit](https://huggingface.co/docs/diffusers/main/api/pipelines/joyimage_edit)

Thanks to @Moran232 for the contribution.

### DiffusionGemma

[**DiffusionGemma**](https://huggingface.co/docs/diffusers/main/api/pipelines/diffusion_gemma) is a block-diffusion encoder-decoder language model. A causal encoder reads the clean prompt (and any previously generated blocks) into a KV cache, and a bidirectional decoder denoises a fixed-size "canvas" of tokens by cross-attending to that cache, committing the most confident tokens via the new `BlockRefinementScheduler`. The released checkpoint is [`google/diffusiongemma-26B-A4B-it`](https://huggingface.co/google/diffusiongemma-26B-A4B-it).

- PR: [https://github.com/huggingface/diffusers/pull/13986](https://github.com/huggingface/diffusers/pull/13986)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/diffusion_gemma](https://huggingface.co/docs/diffusers/main/api/pipelines/diffusion_gemma)

### Anima

[Anima](https://huggingface.co/docs/diffusers/main/api/pipelines/anima) is a 2 billion parameter text-to-image model created via a collaboration between CircleStone Labs and Comfy Org. It is focused mainly on anime concepts, characters, and styles, but is also capable of generating a wide variety of other non-photorealistic content.

It reuses the [**CosmosTransformer3DModel**](https://huggingface.co/docs/diffusers/main/en/api/models/cosmos_transformer3d#diffusers.CosmosTransformer3DModel) with a Qwen3 text encoder, a T5-token text conditioner, and the [**AutoencoderKLQwenImage**](https://huggingface.co/docs/diffusers/main/en/api/models/autoencoderkl_qwenimage#diffusers.AutoencoderKLQwenImage) VAE.

- PR: [https://github.com/huggingface/diffusers/pull/13732](https://github.com/huggingface/diffusers/pull/13732)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/anima](https://huggingface.co/docs/diffusers/main/api/pipelines/anima)

Thanks to @rmatif for the contribution.

### LTX-2.X IC LoRA and HDR Pipelines

New `LTX2InContextPipeline` (in-context LoRA) and `LTX2HDRPipeline` extend the LTX-2 family with in-context conditioning and HDR video generation.

- PR: [https://github.com/huggingface/diffusers/pull/13572](https://github.com/huggingface/diffusers/pull/13572)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/ltx2](https://huggingface.co/docs/diffusers/main/api/pipelines/ltx2)

## Modular Pipeline Support

- We added a modular pipeline for **Stable Diffusion 3 (SD3)** in [https://github.com/huggingface/diffusers/pull/13324](https://github.com/huggingface/diffusers/pull/13324) (thanks to @AlanPonnachan).
- We added a modular pipeline for **Anima** in [https://github.com/huggingface/diffusers/pull/13732](https://github.com/huggingface/diffusers/pull/13732) (thanks to @rmatif).
- LoRA loading is now enabled on `ErnieImageModularPipeline` (#13948) and `Ideogram4ModularPipeline` (#13980), thanks to @SamuelTallet.

## Core Library

- [AutoRound quantization integration](https://github.com/huggingface/diffusers/pull/13552)
- [safetensors support in the TorchAO backend](https://github.com/huggingface/diffusers/pull/13719) and [`_dequantize` for the TorchAO quantizer](https://github.com/huggingface/diffusers/pull/13538)
- [BitsAndBytes quantization on MPS](https://github.com/huggingface/diffusers/pull/13915)
- [`AutoPipelineForText2Audio`](https://github.com/huggingface/diffusers/pull/13511)
- [AWS Neuron (Trainium/Inferentia) as an officially supported device](https://github.com/huggingface/diffusers/pull/13289) with [`torch.compile` compatibility](https://github.com/huggingface/diffusers/pull/13485)
- [Bump `safetensors` to 0.8.0](https://github.com/huggingface/diffusers/pull/13971)
- [Minimum supported `torch` version is now 2.6](https://github.com/huggingface/diffusers/pull/13725)
- [Eliminate GPU sync overhead and CPU→GPU transfers across the LTX-2 pipeline](https://github.com/huggingface/diffusers/pull/13564)

## All commits

* [CI] Update all workflows with permissions  by @DN6 in #13672
* [agents docs] update models.md with class attributes and attention mask  by @yiyixuxu in #13665
* Fix ignored generator in FlowMatchEulerDiscreteScheduler  by @RobbinMarcus in #13678
* [core] remove `txt_seq_lens` from qwen transformer.  by @sayakpaul in #13674
* [tests] fix lora tests involving clip.  by @sayakpaul in #13675
* post release 0.38.0  by @sayakpaul in #13670
* Fix NameError in ZImageOmniPipeline when guidance_scale=0  by @Ricardo-M-L in #13527
* Enable TorchAO int4wo quantization tests on XPU  by @jiqing-feng in #13537
* [CI] QOL improvement for PR size labeler  by @DN6 in #13554
* Fix BucketBatchSampler cache alignment in DreamBooth scripts  by @azolotenkov in #13353
* chore: update pr_labeler.yml  by @hf-security-analysis[bot] in #13685
* Address ernie-image review findings #13577  by @akshan-main in #13663
* feat: Add Modular Pipeline for Stable Diffusion 3 (SD3)  by @AlanPonnachan in #13324
* Update attention_backends.md to update FA3 minimum support to Ampere  by @sayakpaul in #13283
* [CI] Bump style-bot SHA + switch to GitHub App  by @paulinebm in #13690
* [feat] JoyAI-JoyImage-Edit support  by @Moran232 in #13444
* Add LoRA support for Cosmos Predict 2.5 and fix pipeline to match official Cosmos repo  by @terarachang in #13664
* Eliminate GPU sync overhead and CPU→GPU transfers across LTX2 pipeline  by @ViktoriiaRomanova in #13564
* Gate deep imports from `torch.distributed`  by @hlky in #13673
* Bump diffusers from 0.20.1 to 0.38.0 in /examples/research_projects/realfill  by @dependabot[bot] in #13692
* Reduce WanAnimate TorchAO test input sizes to prevent OOM  by @jiqing-feng in #13541
* add SP support for `flash_varlen_hub` backend  by @zhtmike in #13479
* [ci] allow claude to open PRs for certain instructions.  by @sayakpaul in #13536
* [ci] remove compel.  by @sayakpaul in #13715
* styling fix. by @sayakpaul (direct commit on v0.39.0-release)
* better usage of UV_PRERELEASE=allow  by @sayakpaul in #13716
* [docs] add magcache to caching api listing  by @sayakpaul in #13714
* [tests] refactor autoencoderkl tests  by @sayakpaul in #13368
* [docs] add docs for JoyAI-Image-Edit  by @feice-huang in #13726
* [tests] add attention backend tests.  by @sayakpaul in #13174
* Install `transformers` from main for doc and staging  by @sayakpaul in #13723
* Update Flax removal version  by @DN6 in #13729
* examples/dreambooth: fix LR scheduler step count for multi-GPU in train_dreambooth_lora_sd3.py  by @Dev-X25874 in #13731
* Serge reviewer  by @sayakpaul in #13735
* [ci] switch to a more unique name  by @sayakpaul in #13738
* fix autoencoder memory tests  by @sayakpaul in #13734
* Fix GGUF to Work Better with `modules_to_not_convert` / `keep_in_fp32_modules`  by @dg845 in #13697
* [tests] refactor ltx2 autoencoder tests to use latest mixins  by @sayakpaul in #13739
* feat: Add Motif-Video model and pipelines  by @waitingcheung in #13551
* Update contribution guidelines  by @DN6 in #13753
* [agents] add a section on tests in the ai skill and integration guides.  by @sayakpaul in #13752
* Add LTX-2.X IC LoRA and HDR Pipelines  by @dg845 in #13572
* [tests] Fix controlnet tests  by @sayakpaul in #13736
* [tests] fix bitsandbytes compile tests for flux.  by @sayakpaul in #13750
* [core] minimum torch version is 2.6  by @sayakpaul in #13725
* [tests] fix lora checkpoint serialization issues  by @sayakpaul in #13676
* fix(randn_tensor): compare device.type, not torch.device, when suppressing MPS info log  by @Ricardo-M-L in #13508
* [LLADA2] Fix llada2 review #13598  by @kashif in #13698
* fix lfs pointer rejection problems for hub tests  by @sayakpaul in #13733
* Fix training gradient underflow in quantization tests  by @jiqing-feng in #13539
* examples/dreambooth: fix missing `weighting` chunk when using prior preservation in Flux and SD3 LoRA training  by @Dev-X25874 in #13743
* Implement _dequantize for TorchAO quantizer  by @jiqing-feng in #13538
* fix device mismatch issue for HiDreamTransformerTests  by @kaixuanliu in #13766
* [docs] remove pipeline examples section  by @stevhliu in #13771
* [CI] Replace print_env step in CI with diffusers-cli env  by @DN6 in #13662
* update safetensors.torch._tobytes to safetensors.torch._to_ndarray  by @sywangyi in #13770
* [agents docs] update pipelines.md:   by @yiyixuxu in #13570
* fix(gguf): correct mismatched-shape error message in check_quantized_param_shape  by @Ricardo-M-L in #13504
* [CI] claude_review: target source PR's branch for follow-up PRs  by @yiyixuxu in #13774
* [WIP] chore: add utilities to check if call/forward methods are documented.  by @sayakpaul in #13758
* Fix OOM in WanAnimate BitsAndBytes Training Test  by @jiqing-feng in #13777
* ci: use uv overrides to make sure tokenizers install from <=0.23.0 under subs  by @sayakpaul in #13767
* [LTX 2.3] update docs  by @linoytsaban in #13788
* [docs] fix ace step checkpoint id.  by @sayakpaul in #13787
* Add AnyFlow Any-Step Video Diffusion Pipelines (Bidirectional + FAR Causal)  by @Enderfga in #13745
* Initialize ZImage pad tokens deterministically  by @sywangyi in #13805
* note: torch.zeros -> torch.empty  by @sayakpaul in #13807
* chore: enable Dependabot weekly GitHub Actions bumps  by @hf-dependantbot-rollout[bot] in #13812
* [ci] shorten serge name.  by @sayakpaul in #13795
* Adding Cosmos 3 to Diffusers  by @atharvajoshi10 in #13818
* This PR updates the Stable Diffusion IP-Adapter integration  by @sywangyi in #13810
* [AnyFlow] FAR: standalone causal-mask builder + torch.compile follow-up  by @Enderfga in #13792
* Update repo_id for FLASH_4_HUB in attention_dispatch  by @WaterKnight1998 in #13822
* Pin torchvision, torch, and torchaudio versions  by @sayakpaul in #13757
* [docs] Follow ups for consistent forward docstrings  by @sayakpaul in #13779
* refactor sana transformer tests  by @akshan-main in #13826
* Fix redundant Z-Image terminal timestep  by @rootonchair in #13730
* override torch stuff to prevent them from getting updated  by @sayakpaul in #13831
* Add Anima modular pipeline  by @rmatif in #13732
* [Feat] support AutoPipelineForText2Audio  by @RuixiangMa in #13511
* moved to a webhook  by @tarekziade in #13836
* refactor autoencoder tests (asymmetric_kl, ltx_video)  by @akshan-main in #13845
* Fix duplicate safetensors.load_file call in _onload_from_disk when st…  by @gagandhakrey in #13851
* Fix AttributeError in onnxruntime train_unconditional (args.report_to → args.logger)  by @Ricardo-M-L in #13524
* [fix] CLIPTextModel with transformers >= 5.6 and from_single_file  by @asomoza in #13843
* [tests] migrate group offloading tests to pytest  by @sayakpaul in #13234
* [tests] refactor caching tests.  by @sayakpaul in #13235
* Allow bucket reshuffling with DreamBooth caches  by @azolotenkov in #13712
* [Neuron] Add AWS Neuron (Trainium/Inferentia) as an officially supported device  by @JingyaHuang in #13289
* refactor autoencoder_magvit tests  by @akshan-main in #13834
* refactor autoencoder_hunyuan_video tests  by @akshan-main in #13835
* refactor autoencoder_kl_cogvideox tests  by @akshan-main in #13840
* refactor autoencoder tests (vq, kvae_video, oobleck, consistency_decoder, tiny, vidtok)  by @akshan-main in #13849
* updatge the test marigold to make it pass in xpu  by @sywangyi in #13856
* [CI] Fix `torch_device` import in AutoencoderTesterMixin  by @DN6 in #13852
* Add Ideogram 4  by @apolinario in #13859
* Add structured prompt upsampling to Ideogram4  by @apolinario in #13860
* [ci] add hook tests to our CI.  by @sayakpaul in #13848
* fix kvae gradient checkpointing tests by @sayakpaul (direct commit on v0.39.0-release)
* Revert "fix kvae gradient checkpointing tests" by @sayakpaul (direct commit on v0.39.0-release)
* [tests] fix anyflow tests  by @sayakpaul in #13855
* [CI] Refactor LTX Transformer Tests  by @DN6 in #13254
* [CI] Refactor Bria Transformer Tests  by @DN6 in #13341
* [CI] Refactor Chronoedit, PRX, EasyAnimate, Ovis transformer tests  by @DN6 in #13347
* Add Cosmos3 action generation support  by @yzhautouskay in #13823
* [docs] update philosophy.md (finally)  by @yiyixuxu in #13808
* fix kvae gradient checkpointing tests  by @sayakpaul in #13865
* [tests] Improve ideogram4 tests  by @sayakpaul in #13862
* [tests] migrate test_hooks.py to pytest  by @sayakpaul in #13242
* fix chronoedit tests on PRs  by @sayakpaul in #13870
* Fix the QwenImage Attention mask under Ulysses SP  by @zhtmike in #13756
* Add from_single_file support to ErnieImageTransformer2DModel  by @akshan-main in #13727
* switch to a webhook  by @tarekziade in #13884
* [chore] fix styling  by @sayakpaul in #13885
* [cli] report all quant backends in diffusers-cli env.  by @sayakpaul in #13728
* fix marigold depth failure in xpu and A100  by @sywangyi in #13886
* refactor autoencoder tests (temporal decoder, cosmos, kvae, mochi)  by @akshan-main in #13832
* refactor controlnet_cosmos tests  by @akshan-main in #13847
* refactor unet_spatiotemporal tests  by @akshan-main in #13891
* Fix fp16 LoRA unscale crash after validation in train_dreambooth_lora.py  by @HaozheZhang6 in #13895
* [CI] Refactor Chroma , LongCat and HiDream Transformer Tests  by @DN6 in #13345
* [CI] Refactor Skyreels, Lumina, Ominigen, Mochi transformer tests  by @DN6 in #13348
* [CI] Refactor SD3 Transformer Test  by @DN6 in #13340
* refactor unet tests (3d_condition, motion, controlnetxs)  by @akshan-main in #13897
* refactor unet_1d tests  by @akshan-main in #13898
* refactor unet_2d tests  by @akshan-main in #13901
* [chore] log quant config to the user_agent  by @sayakpaul in #13850
* Integrate AutoRound into Diffusers  by @xin3he in #13552
* [tests] refactor UNet model tests to align with the new pattern  by @sayakpaul in #13153
* [tests] fix vidtok tests  by @sayakpaul in #13894
* quant config logging  by @sayakpaul in #13906
* Use `device_map="auto"` in single file tests to support large models on limited GPU memory  by @jiqing-feng in #13816
* Fix incorrect batch temporal IDs for `cond_model_input` in Flux2 Klein img2img training  by @HaozheZhang6 in #13923
* Incorporate safetensors support to TorchAO  by @hlky in #13719
* [Pipelines] Add DreamLite text-to-image and image-edit pipelines  by @Carlofkl in #13815
* [.ai] add self-review skill  by @yiyixuxu in #13917
* update PR template and highlight AI-agent setup for contributors  by @yiyixuxu in #13913
* [CI] implement a bot to remind prs to link issues if not.  by @sayakpaul in #13744
* Point "Coding with AI agents" links at the rendered docs site  by @yiyixuxu in #13952
* [tests] fix consistency decoder tests  by @sayakpaul in #13905
* Add tutorial translations in Chinese  by @liwd190019 in #13932
* Make root PHILOSOPHY.md a symlink to the docs philosophy page  by @yiyixuxu in #13954
* fix(flux): enable true CFG with precomputed negative embeds  by @akshan-main in #13957
* Enable LoRA loading on `ErnieImageModularPipeline`  by @SamuelTallet in #13948
* Fix typo in `AutoModel`  by @neo in #13889
* keep the agent symlinks  by @yiyixuxu in #13968
* [CI] allow running tests as PR comments through a bot  by @sayakpaul in #13873
* Add Cosmos3 video2video generation support  by @yzhautouskay in #13896
* [CI] Refactor Z Image Transformer Tests   by @DN6 in #13253
* fix untrusted fork secret mixing  by @sayakpaul in #13970
* start by @sayakpaul (direct commit on v0.39.0-release)
* Revert "start" by @sayakpaul (direct commit on v0.39.0-release)
* Add Sound Encoder to Cosmos3  by @MaciejBalaNV in #13911
* Add PRXPixelPipeline: pixel-space PRX text-to-image pipeline  by @DavidBert in #13928
* [tests] port final set of model tests and others  by @sayakpaul in #13974
* Add Ideogram4LoraLoaderMixin (LoRA loading for Ideogram4)  by @linoytsaban in #13921
* Enable LoRA loading on `Ideogram4ModularPipeline`  by @SamuelTallet in #13980
* [Neuron] Enable `torch.compile` compatibility with Neuron device  by @JingyaHuang in #13485
* ci: don't remind on prs from admins, etc.  by @sayakpaul in #13965
* ci: use hosted runners  by @tarekziade in #13987
* Fix LTX2 connector token/register layout (regression from #13564)  by @Boffee in #13931
* Fix `Ideogram4MRoPE` collapsing under `torch.autocast` (compute rotary in float32)  by @HaozheZhang6 in #13922
* [Fix] Fix three final_layer LoRA conversion bugs in _convert_sd_scripts_to_ai_toolkit  by @lcheng321 in #14001
* Add Krea 2 (K2) text-to-image pipeline and transformer  by @yiyixuxu in #14045
* [.ai doc] Refine .ai attention-mask and component-mutation guidance  by @yiyixuxu in #13982
* Enable BitsAndBytes quantization in MPS  by @LucasSte in #13915
* fix(flux): tighten check_inputs validation  by @akshan-main in #13955
* Krea 2 LoRA DreamBooth trainer  by @apolinario in #14046
* Fix model cuda tests  by @sayakpaul in #13975
* [.ai] document single-file model layout and "don't reimplement Diffus…  by @yiyixuxu in #14048
* fix claude code review fix in PRs.  by @sayakpaul in #14058
* fix(bria_fibo): fix guidance_embeds, prompt_embeds, tensor-image and multi-image crashes  by @akshan-main in #13981
* [tests] implement base model output caching in model-level tests  by @sayakpaul in #14059
* [discrete diffusion] Add DiffusionGemma pipeline and schedulers  by @kashif in #13986
* Add from_single_file support for SkyReelsV2 and ChronoEdit transformers  by @HaozheZhang6 in #13946
* multi-GPU VAE Fix for Cosmos 3  by @atharvajoshi10 in #13924
* docs: fix repeated word typo in set_timesteps docstring  by @ramkumar27072006 in #13876
* feat: bump safetensors to 0.8.0  by @porunov in #13971
* Fix DreamLite legacy block type aliases  by @ElectricGoal in #14066
* Fix Kohya UNet LoRA key conversion for conv_in/conv_out/time_embedding  by @dxqb in #14006
* [Tests] Skip layerwise casting tests on devices without float8_e4m3fn support  by @GiGiKoneti in #14073
* [lora] add non-diffusers LoRA loading support for Krea 2 LoRAs  by @linoytsaban in #14074
* Add doc pages for the DiffusionGemma schedulers  by @kashif in #14092
* [chore] update to 2026 finally.  by @sayakpaul in #14079
* fix #14063 for Kandinsky5 pipeline load with device_map=balanced  by @kaixuanliu in #14050
* Complete Kohya LoRA conversion for Qwen and Z-Image  by @dxqb in #14080
* Ideogram4 lora training  by @apolinario in #13861
* ovis_image: fix guidance_scale / max_sequence_length / batched CFG / precomputed embeds + add pipeline test  by @HaozheZhang6 in #13944
* [docs] fix qwen tokenizer in docstrings.  by @sayakpaul in #14098
* Bump transformers from 4.47.0 to 5.3.0 in /examples/cogview4-control  by @dependabot[bot] in #14109
* Fix mutable default args in lora_base.py  by @PrakshaaleJain in #14064
* Fix FA3 varlen wrapper when hub kernel returns single tensor  by @<NOT FOUND> in #14102
* support loading pipeline from transformer style (flat) repo   by @yiyixuxu in #14096
* diffusers test installation package  by @sayakpaul in #14078
* [tests] fix test_from_save_pretrained_dtype_inference  by @sayakpaul in #13872
* Release: v0.39.0-release by @sayakpaul (direct commit on v0.39.0-release)

## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @DN6
    * [CI] Update all workflows with permissions (#13672)
    * [CI] QOL improvement for PR size labeler (#13554)
    * Update Flax removal version (#13729)
    * Update contribution guidelines (#13753)
    * [CI] Replace print_env step in CI with diffusers-cli env (#13662)
    * [CI] Fix `torch_device` import in AutoencoderTesterMixin (#13852)
    * [CI] Refactor LTX Transformer Tests (#13254)
    * [CI] Refactor Bria Transformer Tests (#13341)
    * [CI] Refactor Chronoedit, PRX, EasyAnimate, Ovis transformer tests (#13347)
    * [CI] Refactor Chroma , LongCat and HiDream Transformer Tests (#13345)
    * [CI] Refactor Skyreels, Lumina, Ominigen, Mochi transformer tests (#13348)
    * [CI] Refactor SD3 Transformer Test (#13340)
    * [CI] Refactor Z Image Transformer Tests  (#13253)
* @yiyixuxu
    * [agents docs] update models.md with class attributes and attention mask (#13665)
    * [agents docs] update pipelines.md:  (#13570)
    * [CI] claude_review: target source PR's branch for follow-up PRs (#13774)
    * [docs] update philosophy.md (finally) (#13808)
    * [.ai] add self-review skill (#13917)
    * update PR template and highlight AI-agent setup for contributors (#13913)
    * Point "Coding with AI agents" links at the rendered docs site (#13952)
    * Make root PHILOSOPHY.md a symlink to the docs philosophy page (#13954)
    * keep the agent symlinks (#13968)
    * Add Krea 2 (K2) text-to-image pipeline and transformer (#14045)
    * [.ai doc] Refine .ai attention-mask and component-mutation guidance (#13982)
    * [.ai] document single-file model layout and "don't reimplement Diffus… (#14048)
    * support loading pipeline from transformer style (flat) repo  (#14096)
* @akshan-main
    * Address ernie-image review findings #13577 (#13663)
    * refactor sana transformer tests (#13826)
    * refactor autoencoder tests (asymmetric_kl, ltx_video) (#13845)
    * refactor autoencoder_magvit tests (#13834)
    * refactor autoencoder_hunyuan_video tests (#13835)
    * refactor autoencoder_kl_cogvideox tests (#13840)
    * refactor autoencoder tests (vq, kvae_video, oobleck, consistency_decoder, tiny, vidtok) (#13849)
    * Add from_single_file support to ErnieImageTransformer2DModel (#13727)
    * refactor autoencoder tests (temporal decoder, cosmos, kvae, mochi) (#13832)
    * refactor controlnet_cosmos tests (#13847)
    * refactor unet_spatiotemporal tests (#13891)
    * refactor unet tests (3d_condition, motion, controlnetxs) (#13897)
    * refactor unet_1d tests (#13898)
    * refactor unet_2d tests (#13901)
    * fix(flux): enable true CFG with precomputed negative embeds (#13957)
    * fix(flux): tighten check_inputs validation (#13955)
    * fix(bria_fibo): fix guidance_embeds, prompt_embeds, tensor-image and multi-image crashes (#13981)
* @AlanPonnachan
    * feat: Add Modular Pipeline for Stable Diffusion 3 (SD3) (#13324)
* @Moran232
    * [feat] JoyAI-JoyImage-Edit support (#13444)
* @terarachang
    * Add LoRA support for Cosmos Predict 2.5 and fix pipeline to match official Cosmos repo (#13664)
* @dg845
    * Fix GGUF to Work Better with `modules_to_not_convert` / `keep_in_fp32_modules` (#13697)
    * Add LTX-2.X IC LoRA and HDR Pipelines (#13572)
* @waitingcheung
    * feat: Add Motif-Video model and pipelines (#13551)
* @kashif
    * [LLADA2] Fix llada2 review #13598 (#13698)
    * [discrete diffusion] Add DiffusionGemma pipeline and schedulers (#13986)
    * Add doc pages for the DiffusionGemma schedulers (#14092)
* @linoytsaban
    * [LTX 2.3] update docs (#13788)
    * Add Ideogram4LoraLoaderMixin (LoRA loading for Ideogram4) (#13921)
    * [lora] add non-diffusers LoRA loading support for Krea 2 LoRAs (#14074)
* @Enderfga
    * Add AnyFlow Any-Step Video Diffusion Pipelines (Bidirectional + FAR Causal) (#13745)
    * [AnyFlow] FAR: standalone causal-mask builder + torch.compile follow-up (#13792)
* @atharvajoshi10
    * Adding Cosmos 3 to Diffusers (#13818)
    * multi-GPU VAE Fix for Cosmos 3 (#13924)
* @rmatif
    * Add Anima modular pipeline (#13732)
* @JingyaHuang
    * [Neuron] Add AWS Neuron (Trainium/Inferentia) as an officially supported device (#13289)
    * [Neuron] Enable `torch.compile` compatibility with Neuron device (#13485)
* @apolinario
    * Add Ideogram 4 (#13859)
    * Add structured prompt upsampling to Ideogram4 (#13860)
    * Krea 2 LoRA DreamBooth trainer (#14046)
    * Ideogram4 lora training (#13861)
* @yzhautouskay
    * Add Cosmos3 action generation support (#13823)
    * Add Cosmos3 video2video generation support (#13896)
* @xin3he
    * Integrate AutoRound into Diffusers (#13552)
* @Carlofkl
    * [Pipelines] Add DreamLite text-to-image and image-edit pipelines (#13815)
* @liwd190019
    * Add tutorial translations in Chinese (#13932)
* @MaciejBalaNV
    * Add Sound Encoder to Cosmos3 (#13911)
* @DavidBert
    * Add PRXPixelPipeline: pixel-space PRX text-to-image pipeline (#13928)

---

> **Source** [huggingface/diffusers](https://github.com/huggingface/diffusers) · `v0.39.0` · 2026-07-03 · [upstream release](https://github.com/huggingface/diffusers/releases/tag/v0.39.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
