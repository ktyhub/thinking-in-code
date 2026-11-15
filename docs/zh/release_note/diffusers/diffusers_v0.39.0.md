---
title: "diffusers v0.39.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.39.0"
version: "v0.39.0"
published: "2026-07-03"
type: "minor"
lang: "zh"
---

# diffusers v0.39.0

## 新管道

### 宇宙 3

[**Cosmos 3**](https://huggingface.co/docs/diffusers/main/api/pipelines/cosmos3) is NVIDIA's unified world foundation model (WFM) for Physical AI — a single omni-model built on a Mixture-of-Transformers (MoT) architecture that combines world generation, physical reasoning, and action generation, replacing the separate Predict, Reason, and Transfer models from earlier Cosmos releases. A single `Cosmos3OmniTransformer` runs a Qwen-style language model in parallel with a diffusion generation pathway, joined by a 3D multimodal RoPE. This release also lands video-to-video and action-conditioned generation, and a sound encoder.

- 公关：[https://github.com/huggingface/diffusers/pull/13818](https://github.com/huggingface/diffusers/pull/13818)
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/cosmos3](https://huggingface.co/docs/diffusers/main/api/pipelines/cosmos3)

Thanks to @atharvajoshi10, @yzhautouskay, and @MaciejBalaNV for the contributions.

### 表意文字 4

[**Ideogram 4**](https://huggingface.co/docs/diffusers/main/api/pipelines/ideogram4) is a flow-matching text-to-image model that uses a multimodal text encoder and an asymmetric classifier-free guidance scheme: a dedicated `unconditional_transformer` produces the negative branch with zeroed text features, while the main `transformer` consumes the full packed text + image sequence. The pipeline ships with structured prompt upsampling and LoRA loading support.

- 公关：[https://github.com/huggingface/diffusers/pull/13859](https://github.com/huggingface/diffusers/pull/13859)
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/ideogram4](https://huggingface.co/docs/diffusers/main/api/pipelines/ideogram4)

感谢@JinLiIdeogram 的贡献。

### 韩国2

[**Krea 2 (K2)**](https://huggingface.co/docs/diffusers/main/api/pipelines/krea2) 是一种围绕具有分组查询注意力的单流 MMDiT 构建的流匹配文本到图像模型。 A Qwen3-VL text encoder provides the conditioning — hidden states from twelve decoder layers are tapped per token and fused inside the transformer by a small text-fusion stage — and images are decoded with the Qwen-Image VAE. Both the base (midtrain) and TDM (distilled, few-step) checkpoints are supported, alongside a LoRA DreamBooth trainer.

- 公关：[https://github.com/huggingface/diffusers/pull/14045](https://github.com/huggingface/diffusers/pull/14045)
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/krea2](https://huggingface.co/docs/diffusers/main/api/pipelines/krea2)

Thanks to @EleaZhong and @Abhinay1997 for the contribution.

### 梦想精简版

[**DreamLite**](https://huggingface.co/docs/diffusers/main/api/pipelines/dreamlite) is a text-to-image and image-editing model from ByteDance. It pairs a custom 2D U-Net (`DreamLiteUNetModel`) with the `Qwen3-VL` multimodal encoder as its prompt / image-instruction encoder, and uses an `AutoencoderTiny` (TAESD-style) VAE for fast latent encode/decode.精炼的 `DreamLiteMobilePipeline` 目标是设备上的低延迟生成。

- 公关：[https://github.com/huggingface/diffusers/pull/13815](https://github.com/huggingface/diffusers/pull/13815)
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/dreamlite](https://huggingface.co/docs/diffusers/main/api/pipelines/dreamlite)

感谢@Carlofkl 的贡献。

### PRX 像素

[**PRXPixel**](https://huggingface.co/docs/diffusers/main/api/pipelines/prx_pixel) is a pixel-space text-to-image generation model by Photoroom. A ~7B `PRXTransformer2DModel` 直接对原始 RGB 图像进行去噪——无需 VAE。 The model is conditioned on a Qwen3-VL text encoder and uses flow matching where the transformer predicts the clean image at each step (x-prediction).

- 公关：[https://github.com/huggingface/diffusers/pull/13928](https://github.com/huggingface/diffusers/pull/13928)
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/prx_pixel](https://huggingface.co/docs/diffusers/main/api/pipelines/prx_pixel)

感谢@DavidBert 的贡献。

### 主题视频

[**Motif-Video**](https://huggingface.co/docs/diffusers/main/api/pipelines/motif_video) is a 2B parameter diffusion transformer for text-to-video and image-to-video generation. It features a three-stage architecture (12 dual-stream + 16 single-stream + 8 DDT decoder layers), Shared Cross-Attention for stable text-video alignment over long sequences, a T5Gemma2 text encoder, and rectified flow matching for velocity prediction.

- 公关：[https://github.com/huggingface/diffusers/pull/13551](https://github.com/huggingface/diffusers/pull/13551)
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/motif_video](https://huggingface.co/docs/diffusers/main/api/pipelines/motif_video)

感谢@waitingcheung 的贡献。

### AnyFlow
[**AnyFlow**](https://huggingface.co/docs/diffusers/main/api/pipelines/anyflow) from NVIDIA, NUS, and MIT is the first any-step video diffusion framework built on flow maps, enabling a single model (bidirectional or causal) to adapt to arbitrary inference budgets.它提供基于 Wan2.1 主干网络构建的双向和 FAR 因果管道，涵盖文本到视频、图像到视频和视频到视频。

- PR: [https://github.com/huggingface/diffusers/pull/13745](https://github.com/huggingface/diffusers/pull/13745)
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/anyflow](https://huggingface.co/docs/diffusers/main/api/pipelines/anyflow)

Thanks to @Enderfga for the contribution.

### JoyAI-Image-Edit

[**JoyAI-Image**](https://huggingface.co/docs/diffusers/main/api/pipelines/joyimage_edit) is a unified multimodal foundation model for image understanding, text-to-image generation, and instruction-guided image editing.它将 8B 多模态 LLM 与 16B 多模态扩散变压器 (MMDiT) 相结合。 `JoyImageEditPipeline` 支持一般图像编辑以及空间编辑功能，包括对象移动、对象旋转和相机控制。

- PR: [https://github.com/huggingface/diffusers/pull/13444](https://github.com/huggingface/diffusers/pull/13444)
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/joyimage_edit](https://huggingface.co/docs/diffusers/main/api/pipelines/joyimage_edit)

Thanks to @Moran232 for the contribution.

### DiffusionGemma

[**DiffusionGemma**](https://huggingface.co/docs/diffusers/main/api/pipelines/diffusion_gemma) 是一种块扩散编码器-解码器语言模型。 A causal encoder reads the clean prompt (and any previously generated blocks) into a KV cache, and a bidirectional decoder denoises a fixed-size "canvas" of tokens by cross-attending to that cache, committing the most confident tokens via the new `BlockRefinementScheduler`.已发布的检查点为[`google/diffusiongemma-26B-A4B-it`](https://huggingface.co/google/diffusiongemma-26B-A4B-it)。

- PR: [https://github.com/huggingface/diffusers/pull/13986](https://github.com/huggingface/diffusers/pull/13986)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/diffusion_gemma](https://huggingface.co/docs/diffusers/main/api/pipelines/diffusion_gemma)

### Anima

[Anima](https://huggingface.co/docs/diffusers/main/api/pipelines/anima) 是一个 20 亿参数的文本到图像模型，由 CircleStone Labs 和 Comfy Org 合作创建。 It is focused mainly on anime concepts, characters, and styles, but is also capable of generating a wide variety of other non-photorealistic content.

It reuses the [**CosmosTransformer3DModel**](https://huggingface.co/docs/diffusers/main/en/api/models/cosmos_transformer3d#diffusers.CosmosTransformer3DModel) with a Qwen3 text encoder, a T5-token text conditioner, and the [**AutoencoderKLQwenImage**](https://huggingface.co/docs/diffusers/main/en/api/models/autoencoderkl_qwenimage#diffusers.AutoencoderKLQwenImage) VAE.

- PR: [https://github.com/huggingface/diffusers/pull/13732](https://github.com/huggingface/diffusers/pull/13732)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/anima](https://huggingface.co/docs/diffusers/main/api/pipelines/anima)

Thanks to @rmatif for the contribution.

### LTX-2.X IC LoRA and HDR Pipelines

新型 `LTX2InContextPipeline`（上下文 LoRA）和 `LTX2HDRPipeline` 通过上下文调节和 HDR 视频生成扩展了 LTX-2 系列。

- PR: [https://github.com/huggingface/diffusers/pull/13572](https://github.com/huggingface/diffusers/pull/13572)
- Docs: [https://huggingface.co/docs/diffusers/main/api/pipelines/ltx2](https://huggingface.co/docs/diffusers/main/api/pipelines/ltx2)

## 模块化管道支持

- 我们在 [https://github.com/huggingface/diffusers/pull/13324](https://github.com/huggingface/diffusers/pull/13324) 中添加了 **Stable Diffusion 3 (SD3)** 的模块化管道（感谢 @AlanPonnachan）。
- 我们在 [https://github.com/huggingface/diffusers/pull/13732](ZZPH100​​ZZ) 中添加了 **Anima** 的模块化管道（感谢 @rmatif）。
- 感谢 @SamuelTallet，现在 `ErnieImageModularPipeline` (#13948) 和 `Ideogram4ModularPipeline` (#13980) 上启用了 LoRA 加载。

## 核心库

- [AutoRound量化积分](https://github.com/huggingface/diffusers/pull/13552)
- [TorchAO 后端的安全张量支持](https://github.com/huggingface/diffusers/pull/13719) 和 [TorchAO 量化器的 `_dequantize`](https://github.com/huggingface/diffusers/pull/13538)
- [BitsAndBytes quantization on MPS](https://github.com/huggingface/diffusers/pull/13915)
- [`AutoPipelineForText2Audio`](https://github.com/huggingface/diffusers/pull/13511)
- [AWS Neuron (Trainium/Inferentia) 作为官方支持的设备](https://github.com/huggingface/diffusers/pull/13289) 具有 [`torch.compile` 兼容性](https://github.com/huggingface/diffusers/pull/13485)
- [Bump `safetensors` to 0.8.0](https://github.com/huggingface/diffusers/pull/13971)
- [最低支持的 `torch` 版本现在为 2.6](https://github.com/huggingface/diffusers/pull/13725)
- [消除 GPU 同步开销和 CPU→GPU 通过 LTX-2 管道传输](https://github.com/huggingface/diffusers/pull/13564)

## 所有提交

* [CI]更新所有具有@DN6权限的工作流程#13672
* [agents docs] 使用类属性和注意力掩码更新 models.md，由 @yiyixuxu 在 #13665 中完成
* Fix ignored generator in FlowMatchEulerDiscreteScheduler  by @RobbinMarcus in #13678
* 【核心】从qwen变压器上拆下`txt_seq_lens`。  by @sayakpaul in #13674
* [测试] 修复涉及 clip 的 lora 测试。  by @sayakpaul in #13675
* @sayakpaul 在 #13670 中发布 0.38.0 后
* 修复 #13527 中的 @Ricardo-M-L 中的guiding_scale=0 时 ZImageOmniPipeline 中的 NameError
* 在 #13537 中由 @jiqing-feng 在 XPU 上启用 TorchAO int4wo 量化测试
* [CI] QOL improvement for PR size labeler  by @DN6 in #13554
* 修复 DreamBooth 脚本中的 BucketBatchSampler 缓存对齐，作者为 @azolotenkov，位于 #13353
* chore: update pr_labeler.yml  by @hf-security-analysis[bot] in #13685
* Address ernie-image review findings #13577  by @akshan-main in #13663
* feat: Add Modular Pipeline for Stable Diffusion 3 (SD3)  by @AlanPonnachan in #13324
* Update attention_backends.md to update FA3 minimum support to Ampere  by @sayakpaul in #13283
* [CI] Bump style-bot SHA + 切换到 GitHub 应用程序，作者：@paulinebm，#13690
* [feat] JoyAI-JoyImage-Edit support  by @Moran232 in #13444
* Add LoRA support for Cosmos Predict 2.5 and fix pipeline to match official Cosmos repo  by @terarachang in #13664
* Eliminate GPU sync overhead and CPU→GPU transfers across LTX2 pipeline  by @ViktoriiaRomanova in #13564
* Gate deep imports from `torch.distributed`  by @hlky in #13673
* 将 /examples/research_projects/realfill 中的扩散器从 0.20.1 改为 0.38.0，由 @dependabot[bot] 在 #13692 中实现
* 减少 WanAnimate TorchAO 测试输入大小以防止 OOM by @jiqing-feng in #13541
* 由 @zhtmike 在 #13479 中添加对 `flash_varlen_hub` 后端的 SP 支持
* [ci] allow claude to open PRs for certain instructions.  by @sayakpaul in #13536
* [ci] remove compel.  by @sayakpaul in #13715
* styling fix.作者：@sayakpaul（直接提交于 v0.39.0-release）
* @sayakpaul 在 #13716 中更好地使用 UV_PRERELEASE=allow
* [docs] add magcache to caching api listing  by @sayakpaul in #13714
* [测试] @sayakpaul 在 #13368 中重构 autoencoderkl 测试
* [文档] 在 #13726 中添加 @feice-huang 的 JoyAI-Image-Edit 文档
* [测试] 添加关注后端测试。  by @sayakpaul in #13174
* Install `transformers` from main for doc and staging  by @sayakpaul in #13723
* 在 #13729 中通过 @DN6 更新 Flax 删除版本
* 示例/dreambooth：修复 train_dreambooth_lora_sd3.py 中多 GPU 的 LR 调度程序步数，由 @Dev-X25874 在 #13731 中实现
* @sayakpaul 的 Serge 审阅者，#13735
* [ci] switch to a more unique name  by @sayakpaul in #13738
* fix autoencoder memory tests  by @sayakpaul in #13734
* Fix GGUF to Work Better with `modules_to_not_convert` / `keep_in_fp32_modules`  by @dg845 in #13697
* [tests] refactor ltx2 autoencoder tests to use latest mixins  by @sayakpaul in #13739
* feat: Add Motif-Video model and pipelines  by @waitingcheung in #13551
* 在 #13753 中更新 @DN6 的贡献指南
* [特工]在ai技能和集成指南中添加了有关测试的部分。  by @sayakpaul in #13752
* Add LTX-2.X IC LoRA and HDR Pipelines  by @dg845 in #13572
* [tests] Fix controlnet tests  by @sayakpaul in #13736
* [tests] fix bitsandbytes compile tests for flux.  by @sayakpaul in #13750
* [核心] 最低火炬版本是 2.6 by @sayakpaul in #13725
* [测试] 修复@sayakpaul 在 #13676 中的 lora 检查点序列化问题
* fix(randn_tensor): compare device.type, not torch.device, when suppressing MPS info log  by @Ricardo-M-L in #13508
* [LLADA2] Fix llada2 review #13598  by @kashif in #13698
* 修复 @sayakpaul 在 #13733 中针对集线器测试的 lfs 指针拒绝问题
* Fix training gradient underflow in quantization tests  by @jiqing-feng in #13539
* 示例/dreambooth：修复在 #13743 中 @Dev-X25874 在 Flux 和 SD3 LoRA 训练中使用预先保存时丢失的 `weighting` 块
* Implement _dequantize for TorchAO quantizer  by @jiqing-feng in #13538
* 修复@kaixuanliu 在 #13766 中的 HiDreamTransformerTests 的设备不匹配问题
* [docs] remove pipeline examples section  by @stevhliu in #13771
* [CI] Replace print_env step in CI with diffusers-cli env  by @DN6 in #13662
* update safetensors.torch._tobytes to safetensors.torch._to_ndarray  by @sywangyi in #13770
* [agents docs] update pipelines.md:   by @yiyixuxu in #13570
* 修复（gguf）：通过@Ricardo-M-L在#13504中纠正check_quantized_param_shape中不匹配形状的错误消息
* [CI] claude_review：目标源 PR 的分支，用于@yiyixuxu 在 #13774 中的后续 PR
* [WIP] chore: add utilities to check if call/forward methods are documented.  由 @sayakpaul 在 #13758
* Fix OOM in WanAnimate BitsAndBytes Training Test  by @jiqing-feng in #13777
* ci：使用 uv 覆盖来确保标记器从 @sayakpaul 在 #13767 中的 subs 下的 <=0.23.0 安装
* [LTX 2.3] update docs  by @linoytsaban in #13788
* [docs] fix ace step checkpoint id.  由 @sayakpaul 在 #13787
* 添加 AnyFlow 任意步骤视频扩散管道（双向 + FAR 因果），由 @Enderfga 在 #13745 中添加
* Initialize ZImage pad tokens deterministically  by @sywangyi in #13805
* note: torch.zeros -> torch.empty  by @sayakpaul in #13807
* 杂务：通过 @hf-dependantbot-rollout[bot] 在 #13812 中启用 Dependabot 每周 GitHub 操作碰撞
* [ci] shorten serge name.  由 @sayakpaul 在 #13795
* Adding Cosmos 3 to Diffusers  by @atharvajoshi10 in #13818
* This PR updates the Stable Diffusion IP-Adapter integration  by @sywangyi in #13810
* [AnyFlow] FAR：独立因果掩码构建器 + torch.compile 后续 @Enderfga 在 #13792
* Update repo_id for FLASH_4_HUB in attention_dispatch  by @WaterKnight1998 in #13822
* 在 #13757 中固定 @sayakpaul 的 torchvision、torch 和 torchaudio 版本
* [文档] @sayakpaul 在 #13779 中对一致的前向文档字符串进行跟进
* refactor sana transformer tests  by @akshan-main in #13826
* 在 #13730 中由 @rootonchair 修复冗余的 Z-Image 终端时间步长
* override torch stuff to prevent them from getting updated  by @sayakpaul in #13831
* Add Anima modular pipeline  by @rmatif in #13732
* [Feat] 支持 AutoPipelineForText2Audio by @RuixiangMa in #13511
* moved to a webhook  by @tarekziade in #13836
* refactor autoencoder tests (asymmetric_kl, ltx_video)  by @akshan-main in #13845
* 修复 _onload_from_disk 中重复的 safetensors.load_file 调用，当 @gagandhakrey 在 #13851 中进行...
* Fix AttributeError in onnxruntime train_unconditional (args.report_to → args.logger)  by @Ricardo-M-L in #13524
* [修复] CLIPTextModel 与变压器 >= 5.6 和 from_single_file by @asomoza in #13843
* [测试] 将组卸载测试迁移到 pytest by @sayakpaul in #13234
* [tests] refactor caching tests.  由 @sayakpaul 在 #13235
* Allow bucket reshuffling with DreamBooth caches  by @azolotenkov in #13712
* [Neuron] Add AWS Neuron (Trainium/Inferentia) as an officially supported device  by @JingyaHuang in #13289
* refactor autoencoder_magvit tests  by @akshan-main in #13834
* refactor autoencoder_hunyuan_video tests  by @akshan-main in #13835
* refactor autoencoder_kl_cogvideox tests  by @akshan-main in #13840
* 由 @akshan-main 在 #13849 中重构自动编码器测试（vq、kvae_video、oobleck、consistency_decoder、tiny、vidtok）
* 更新测试 marigold，使其通过 @sywangyi 在 #13856 中的 xpu
* [CI] Fix `torch_device` import in AutoencoderTesterMixin  by @DN6 in #13852
* Add Ideogram 4  by @apolinario in #13859
* 在 #13860 中@apolinario 将结构化提示上采样添加到 Ideogram4
* [ci] add hook tests to our CI.  by @sayakpaul in #13848
* fix kvae gradient checkpointing tests by @sayakpaul (direct commit on v0.39.0-release)
* 恢复@sayakpaul 的“修复 kvae 梯度检查点测试”（在 v0.39.0-release 上直接提交）
* [测试] 修复@sayakpaul 在 #13855 中的任何流测试
* [CI] Refactor LTX Transformer Tests  by @DN6 in #13254
* [CI] @DN6 在 #13341 中重构 Bria 变压器测试
* [CI] @DN6 在 #13347 中重构 Chronoedit、PRX、EasyAnimate、Ovis 变压器测试
* 在 #13823 中添加 @yzhautouskay 的 Cosmos3 动作生成支持
* [文档] 由@yiyixuxu 在#13808 更新philosophy.md（最后）
* 修复@sayakpaul 在 #13865 中的 kvae 梯度检查点测试
* [测试] 改进 @sayakpaul 在 #13862 中的 ideogram4 测试
* [tests] migrate test_hooks.py to pytest  by @sayakpaul in #13242
* 修复 @sayakpaul 在 #13870 中对 PR 的 chronoedit 测试
* 修复了 Ulysses SP 下的 QwenImage Attention mask by @zhtmike in #13756
* Add from_single_file support to ErnieImageTransformer2DModel  by @akshan-main in #13727
* switch to a webhook  by @tarekziade in #13884
* [chore] fix styling  by @sayakpaul in #13885
* [cli] 报告扩散器-cli 环境中的所有定量后端。  by @sayakpaul in #13728
* 修复 xpu 和 A100 中的万寿菊深度故障，作者为 @sywangyi，#13886
* refactor autoencoder tests (temporal decoder, cosmos, kvae, mochi)  by @akshan-main in #13832
* 在 #13847 中重构 @akshan-main 的 controlnet_cosmos 测试
* refactor unet_spatiotemporal tests  by @akshan-main in #13891
* 修复 #13895 中 @HaozheZhang6 在 train_dreambooth_lora.py 中验证后 fp16 LoRA unscale 崩溃的问题
* [CI] @DN6 在 #13345 中重构 Chroma、LongCat 和 HiDream Transformer 测试
* [CI] @DN6 在 #13348 中重构 Skyreels、Lumina、Ominigen、Mochi 变压器测试
* [CI] @DN6 在 #13340 中重构 SD3 变压器测试
* 由@akshan-main 在#13897 中重构unet 测试（3d_condition、motion、controlnetxs）
* 在 #13898 中重构 @akshan-main 的 unet_1d 测试
* 在 #13901 中重构 @akshan-main 的 unet_2d 测试
* [杂务] 将 Quant 配置记录到 @sayakpaul 在 #13850 中的 user_agent
* 将 AutoRound 集成到扩散器中，由 @xin3he 在 #13552 中完成
* [测试] 重构 UNet 模型测试以与 @sayakpaul 在 #13153 中的新模式保持一致
* [测试] 修复@sayakpaul 在 #13894 中的 vidtok 测试
* quant config logging  by @sayakpaul in #13906
* 在单文件测试中使用 `device_map="auto"` 以在有限的 GPU 内存上支持大型模型，由 @jiqing-feng 在 #13816 中编写
* 修复 @HaozheZhang6 在 #13923 中 Flux2 Klein img2img 训练中 `cond_model_input` 不正确的批次时间 ID
* 在 #13719 中将@hlky 对 TorchAO 的安全张量支持纳入其中
* [Pipelines] 添加 DreamLite 文本到图像和图像编辑管道（由 @Carlofkl 在 #13815 中添加）
* [.ai] 在#13917中添加@yiyixuxu的自我审查技能
* 更新 PR 模板并突出显示由 @yiyixuxu 在 #13913 中为贡献者设置的 AI 代理
* [CI] 实现一个机器人来提醒 PR 链接问题（如果没有）。  由 @sayakpaul 在 #13744
* 将“使用 AI 代理进行编码”链接指向@yiyixuxu 在 #13952 中渲染的文档站点
* [测试] 修复 @sayakpaul 在 #13905 中的一致性解码器测试
* 在 #13932 中添加 @liwd190019 的中文教程翻译
* 让根 PHILOSOPHY.md 成为 @yiyixuxu 在 #13954 中指向文档哲学页面的符号链接
* 修复（flux）：通过 @akshan-main 在 #13957 中启用带有预先计算的负嵌入的真正 CFG
* 通过 @SamuelTallet 在 #13948 中启用 `ErnieImageModularPipeline` 上的 LoRA 加载
* 修复@neo 在 #13889 中 `AutoModel` 中的拼写错误
* keep the agent symlinks  by @yiyixuxu in #13968
* [CI] 允许通过 @sayakpaul 在 #13873 中的机器人运行测试作为 PR 评论
* Add Cosmos3 video2video generation support  by @yzhautouskay in #13896
* [CI] Refactor Z Image Transformer Tests   by @DN6 in #13253
* 修复@sayakpaul 在 #13970 中的 untrusted 叉子秘密混合
* start by @sayakpaul (direct commit on v0.39.0-release)
* 恢复@sayakpaul 的“start”（在 v0.39.0-release 上直接提交）
* 添加声音编码器到 Cosmos3 由 @MaciejBalaNV 在 #13911
* Add PRXPixelPipeline: pixel-space PRX text-to-image pipeline  by @DavidBert in #13928
* [测试] 移植最终的模型测试集和其他 @sayakpaul 在 #13974 中的测试
* 添加 Ideogram4LoraLoaderMixin （LoRA 加载 Ideogram4），由 @linoytsaban 在 #13921 中添加
* Enable LoRA loading on `Ideogram4ModularPipeline`  by @SamuelTallet in #13980
* [Neuron] Enable `torch.compile` compatibility with Neuron device  by @JingyaHuang in #13485
* ci：不要在管理员的 PR 上提醒，等等。@sayakpaul 在 #13965 中
* ci：使用@tarekziade 在 #13987 中托管的运行器
* 由 @Boffee 在 #13931 中修复 LTX2 连接器令牌/寄存器布局（从 #13564 回归）
* 修复了 `Ideogram4MRoPE` 在 `torch.autocast` 下崩溃的问题（在 float32 中计算旋转），由@HaozheZhang6 在#13922 中修复
* [修复] 修复 #14001 中 @lheng321 _convert_sd_scripts_to_ai_toolkit 中的三个 Final_layer LoRA 转换错误
* Add Krea 2 (K2) text-to-image pipeline and transformer  by @yiyixuxu in #14045
* [.ai doc] 通过 @yiyixuxu 在 #13982 中细化 .ai 注意力掩码和组件突变指导
* 通过 @LucasSte 在 #13915 中启用 MPS 中的 BitsAndBytes 量化
* fix(flux): tighten check_inputs validation  by @akshan-main in #13955
* Krea 2 LoRA DreamBooth trainer  by @apolinario in #14046
* 修复 @sayakpaul 在 #13975 中的模型 cuda 测试
* [.ai] document single-file model layout and "don't reimplement Diffus…  by @yiyixuxu in #14048
* 修复 PR 中的克劳德代码审查修复。  由 @sayakpaul 在 #14058
* fix(bria_fibo): fix guidance_embeds, prompt_embeds, tensor-image and multi-image crashes  by @akshan-main in #13981
* [tests] implement base model output caching in model-level tests  by @sayakpaul in #14059
* [离散扩散] 在 #13986 中添加 @kashif 的 DiffusionGemma 管道和调度程序
* Add from_single_file support for SkyReelsV2 and ChronoEdit transformers  by @HaozheZhang6 in #13946
* @aharvajoshi10 在 #13924 中针对 Cosmos 3 的多 GPU VAE 修复
* docs: fix repeated word typo in set_timesteps docstring  by @ramkumar27072006 in #13876
* feat: bump safetensors to 0.8.0  by @porunov in #13971
* 在 #14066 中修复 @ElectricGoal 的 DreamLite 遗留块类型别名
* Fix Kohya UNet LoRA key conversion for conv_in/conv_out/time_embedding  by @dxqb in #14006
* [Tests] Skip layerwise casting tests on devices without float8_e4m3fn support  by @GiGiKoneti in #14073
* [lora] add non-diffusers LoRA loading support for Krea 2 LoRAs  by @linoytsaban in #14074
* Add doc pages for the DiffusionGemma schedulers  by @kashif in #14092
* [chore] update to 2026 finally.  由 @sayakpaul 在 #14079
* fix #14063 for Kandinsky5 pipeline load with device_map=balanced  by @kaixuanliu in #14050
* 由 @dxqb 在 #14080 中完成 Qwen 和 Z-Image 的 Kohya LoRA 转换
* Ideogram4 lora training  by @apolinario in #13861
* ovis_image: fix guidance_scale / max_sequence_length / batched CFG / precomputed embeds + add pipeline test  by @HaozheZhang6 in #13944
* [docs] fix qwen tokenizer in docstrings.  由 @sayakpaul 在 #14098
* Bump transformers from 4.47.0 to 5.3.0 in /examples/cogview4-control  by @dependabot[bot] in #14109
* Fix mutable default args in lora_base.py  by @PrakshaaleJain in #14064
* Fix FA3 varlen wrapper when hub kernel returns single tensor  by @<NOT FOUND> in #14102
* support loading pipeline from transformer style (flat) repo   by @yiyixuxu in #14096
* 扩散器测试安装包由 @sayakpaul 在 #14078 中提供
* [tests] fix test_from_save_pretrained_dtype_inference  by @sayakpaul in #13872
* 发布：@sayakpaul 的 v0.39.0-release（直接提交到 v0.39.0-release）

## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @DN6
    * [CI] 更新所有具有权限的工作流程 (#13672)
    * [CI] QOL improvement for PR size labeler (#13554)
    * Update Flax removal version (#13729)
    * Update contribution guidelines (#13753)
    * [CI] 用 differs-cli env 替换 CI 中的 print_env 步骤 (#13662)
    * [CI] 修复 AutoencoderTesterMixin 中的 `torch_device` 导入 (#13852)
    * [CI] 重构 LTX 变压器测试 (#13254)
    * [CI] 重构 Bria 变压器测试 (#13341)
    * [CI] 重构 Chronoedit、PRX、EasyAnimate、Ovis 变压器测试 (#13347)
    * [CI] 重构 Chroma、LongCat 和 HiDream Transformer 测试 (#13345)
    * [CI] 重构 Skyreels、Lumina、Ominigen、Mochi 变压器测试 (#13348)
    * [CI] Refactor SD3 Transformer Test (#13340)
    * [CI] 重构 Z Image Transformer 测试 (#13253)
* @yiyixuxu
    * [agents docs] update models.md with class attributes and attention mask (#13665)
    * [agents docs] update pipelines.md:  (#13570)
    * [CI] claude_review：目标源 PR 的后续 PR 分支 (#13774)
    * [docs] update philosophy.md (finally) (#13808)
    * [.ai] add self-review skill (#13917)
    * 更新 PR 模板并突出显示贡献者的 AI 代理设置 (#13913)
    * 在渲染的文档站点上点“使用 AI 代理进行编码”链接 (#13952)
    * 使根 PHILOSOPHY.md 成为文档哲学页面的符号链接 (#13954)
    * keep the agent symlinks (#13968)
    * 添加 Krea 2 (K2) 文本到图像管道和转换器 (#14045)
    * [.ai doc] Refine .ai attention-mask and component-mutation guidance (#13982)
    * [.ai] 记录单文件模型布局和“不要重新实现 Diffus… (#14048)
* support loading pipeline from transformer style (flat) repo  (#14096)
* @akshan-main
    *解决厄尼图像审查结果#13577 (#13663)
    * 重构 sana 变压器测试 (#13826)
    * refactor autoencoder tests (asymmetric_kl, ltx_video) (#13845)
    * refactor autoencoder_magvit tests (#13834)
    * refactor autoencoder_hunyuan_video tests (#13835)
    * refactor autoencoder_kl_cogvideox tests (#13840)
    * refactor autoencoder tests (vq, kvae_video, oobleck, consistency_decoder, tiny, vidtok) (#13849)
    * Add from_single_file support to ErnieImageTransformer2DModel (#13727)
    * refactor autoencoder tests (temporal decoder, cosmos, kvae, mochi) (#13832)
    * refactor controlnet_cosmos tests (#13847)
    * 重构 unet_spatiotemporal 测试 (#13891)
    * refactor unet tests (3d_condition, motion, controlnetxs) (#13897)
    * refactor unet_1d tests (#13898)
    * 重构 unet_2d 测试 (#13901)
    * fix(flux): enable true CFG with precomputed negative embeds (#13957)
    * 修复（flux）：加强 check_inputs 验证（#13955）
    * 修复（bria_fibo）：修复guiding_embeds、prompt_embeds、张量图像和多图像崩溃（#13981）
* @AlanPonnachan
    * feat: Add Modular Pipeline for Stable Diffusion 3 (SD3) (#13324)
* @Moran232
    * [壮举] JoyAI-JoyImage-Edit 支持 (#13444)
* @terarachang
    * 添加对 Cosmos Predict 2.5 的 LoRA 支持并修复管道以匹配官方 Cosmos 存储库 (#13664)
* @dg845
    * 修复 GGUF 以更好地与 `modules_to_not_convert` / `keep_in_fp32_modules` 配合使用 (#13697)
    * 添加 LTX-2.X IC LoRA 和 HDR 管道 (#13572)
* @等待张
    * feat: Add Motif-Video model and pipelines (#13551)
* @卡西夫
    * [LLADA2] Fix llada2 review #13598 (#13698)
    * [discrete diffusion] Add DiffusionGemma pipeline and schedulers (#13986)
    * 添加 DiffusionGemma 调度程序的文档页面 (#14092)
* @linoytsaban
    * [LTX 2.3] 更新文档 (#13788)
    * 添加 Ideogram4LoraLoaderMixin （LoRA 加载 Ideogram4）（#13921）
    * [lora] add non-diffusers LoRA loading support for Krea 2 LoRAs (#14074)
* @Enderfga
    * 添加 AnyFlow Any-Step 视频扩散管道（双向 + FAR 因果）(#13745)
    * [AnyFlow] FAR: standalone causal-mask builder + torch.compile follow-up (#13792)
* @aharvajoshi10
    * Adding Cosmos 3 to Diffusers (#13818)
    * Cosmos 3 的多 GPU VAE 修复 (#13924)
* @rmatif
    * Add Anima modular pipeline (#13732)
* @JingyaHuang
    * [Neuron] 添加 AWS Neuron (Trainium/Inferentia) 作为官方支持的设备 (#13289)
    * [Neuron] Enable `torch.compile` compatibility with Neuron device (#13485)
* @阿波利纳里奥
    * 添加表意文字 4 (#13859)
    * Add structured prompt upsampling to Ideogram4 (#13860)
    * Krea 2 LoRA DreamBooth trainer (#14046)
    * Ideogram4 lora training (#13861)
* @yzhautouskay
    * Add Cosmos3 action generation support (#13823)
    * 添加 Cosmos3 video2video 生成支持 (#13896)
* @xin3he
    * 将 AutoRound 集成到扩散器中 (#13552)
* @卡洛夫克尔
    * [Pipelines] 添加 DreamLite 文本到图像和图像编辑管道 (#13815)
* @liwd190019
    * 添加中文教程翻译 (#13932)
* @MaciejBalaNV
    * Add Sound Encoder to Cosmos3 (#13911)
* @大卫伯特
    * 添加 PRXPixelPipeline：像素空间 PRX 文本到图像管道 (#13928)

---

> 📦 仓库：[huggingface/diffusers](https://github.com/huggingface/diffusers) · 🏷️ 版本：`v0.39.0` · 📅 发布：2026-07-03 · [查看英文原版 Release](https://github.com/huggingface/diffusers/releases/tag/v0.39.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
