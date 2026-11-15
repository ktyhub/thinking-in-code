---
title: "diffusers v0.38.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.38.0"
version: "v0.38.0"
published: "2026-05-01"
type: "minor"
lang: "zh"
---

# diffusers v0.38.0

## 新管道

### LLaDA2

[**LLaDA2**](https://huggingface.co/collections/inclusionAI/llada21) 是一系列离散扩散语言模型，通过逐块迭代细化生成文本。 LLaDA2 不是逐个标记地自动回归生成，而是从完全屏蔽的序列开始，并通过多个细化步骤的置信度逐步揭开标记。 

- PR: https://github.com/huggingface/diffusers/pull/13226
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/llada2](https://huggingface.co/docs/diffusers/main/api/pipelines/llada2)

### Nucleus-MoE

NucleusMoE-Image 是一个以效率为核心进行训练的 2B 主动 17B 参数模型。我们的新颖架构突出了用于图像生成的稀疏 MoE 架构的可扩展性。 

- 公关：https://github.com/huggingface/diffusers/pull/13317
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/nucleusmoe_image](https://huggingface.co/docs/diffusers/main/api/pipelines/nucleusmoe_image)

感谢@sippycoder 的贡献。

### Ernie-Image

ERNIE-Image是一个强大且高效的图像生成模型，具有8B参数。 

- 公关：https://github.com/huggingface/diffusers/pull/13432
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/ernie_image](https://huggingface.co/docs/diffusers/main/api/pipelines/ernie_image)

感谢@HsiaWinter 的贡献。

### LongCat-AudioDiT

LongCat-AudioDiT是美团龙猫推出的文本转音频扩散模型。 

- 公关：https://github.com/huggingface/diffusers/pull/13483
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/longcat_audio_dit](https://huggingface.co/docs/diffusers/main/api/pipelines/longcat_audio_dit)

感谢@RuixiangMa 的贡献。

### 王牌步 1.5

ACE-Step 1.5 根据文本提示和可选歌词生成 48 kHz（10 秒到 10 分钟）的可变长度立体声音频。完整的系统将语言模型规划器与扩散变压器（DiT）合成器配对；该管道包装了该堆栈的 DiT 一半，由三个组件组成：[**AutoencoderOobleck**](https://huggingface.co/docs/diffusers/main/en/api/models/autoencoder_oobleck#diffusers.AutoencoderOobleck) VAE，将波形压缩为 25 Hz 立体声潜在信号；基于 Qwen3 的文本编码器，用于提示和歌词调节；以及 [**AceStepTransformer1DModel**](https://huggingface.co/docs/diffusers/main/en/api/models/ace_step_transformer#diffusers.AceStepTransformer1DModel) DiT，使用流匹配在 VAE 潜在空间中运行。

- 公关：[https://github.com/huggingface/diffusers/pull/13095](https://github.com/huggingface/diffusers/pull/13095)
- 文档：[https://huggingface.co/docs/diffusers/main/api/pipelines/ace_step](https://huggingface.co/docs/diffusers/main/api/pipelines/ace_step)

感谢@[ChuxiJ](https://github.com/ChuxiJ) 的贡献。

### Flux.2 小型解码器

使用 Black Forest Labs 推出的这款新型小型解码器模型，让您的 Flux.2 解码速度更快。您可以查看[这里](https://huggingface.co/black-forest-labs/FLUX.2-small-decoder)。它是由@huemin-art 在[此 PR](https://github.com/huggingface/diffusers/pull/13428) 中贡献的。

## 模块化管道支持

我们添加了对 LTX-2 和 Hunyuan 1.5 的模块化支持。 

## 核心库

- [Flash Attention 4 后端](https://github.com/huggingface/diffusers/issues/13280)
- [FlashPack加载](https://github.com/huggingface/diffusers/issues/12700)
- [团体卸载+TorchAO](https://github.com/huggingface/diffusers/pull/13276)
- [`ring_anything` 作为新的 CP 后端](https://github.com/huggingface/diffusers/pull/13545)
- [在扩散器中分析管道](https://github.com/huggingface/diffusers/pull/13356)

## 所有提交

* [离散扩散] 在 #13226 中添加 @kashif 的 LLaDA2 管道
* [LLADA2] 文档由 @kashif 在 #13333 中修复
* [ci] ci 中的克劳德。  由 @sayakpaul 在 #13297
* [文档] @stevhliu 的内核 #13139
* [测试] @sayakpaul 在 #13247 中测试条件管道块
*避免在磁通控制示例中使用硬编码设备，作者：@kaixuanliu，#13336
* 修复 claude 工作流程，将 id-token 包含在 write 中。  由 @sayakpaul 在 #13338
* 由 @dg845 在 #13337 中更新 LTX-2 文档以涵盖 LTX-2.3 型号
* 在 #13291 中删除 @howardzhang-cv 中 torchao 中量化配置的 str 选项
* [ci] 在 #13352 中 @sayakpaul 的 claude 审核工作流程中包含结账步骤
* 通过 @howardzhang-cv 在 #13355 中将 torchao 的最低版本防护更改为 0.15.0
* [ci] 移动到断言而不是 self.Assert* by @sayakpaul in #13366
* [文档] @stevhliu 在 #13334 中重构模型技能
* 通过 @zhtmike 在 #13328 中使用 SDPA 向后修复 Ulysses SP
* 在 #13011 中添加 @tcaimm 的 train Flux2 系列 lora 配置
* [文档] 在 #13306 中添加 @pthombre 的 NeMo Automodel 培训指南
* 修复：确保管道保存/加载测试中的 dtype 和 eval 模式一致，@YangKai0616 在 #13339 中
* [ci] 支持 claude 对 fork 进行审查。  由 @sayakpaul 在 #13365
* 修复 MotionConv2d，将blur_kernel 转换为输入数据类型，而不是由@YangKai0616 在#13364 中反转
* 琐事：通过@hf-security-analysis[bot]在#13374中更新claude_review.yml
* 更正了@andrew-w-ross 在#13363 中的单文件路径验证逻辑
* [文档] @stevhliu 在 #13157 中弃用管道
* 🔒 在 #13385 中固定 GitHub 操作以提交 @paulinebm 的 SHA
* [文档] 为 m… 添加自动文档字符串和参数模板文档，作者为 @yiyixuxu，位于 #13382
* 修复@GacticAvenger 在 #13391 中的文档中的拼写错误和语法错误
* 修复(ddim): 通过 @NIK-TIGER-BILL 在 #13367 中验证 eta 是否在 DDIMPipeline 中的 [0, 1] 中
* 修复 @jiqing-feng 在 #13384 中的 `torch.compile` 期间 Dynamo `lru_cache` 警告
* [测试] 由 @sayakpaul 在 #13371 中重构 wan 自动编码器测试
* NucleusMoE-Image 由 @sippycoder 在 #13317 中提供
* 在 #13356 中添加 @sayakpaul 如何分析管道的示例
* 在 #13400 中更新 @sayakpaul 的分析指南的 README.md
* [CI] @DN6 在 #13335 中重构 Cosmos Transformer 测试
* [测试] @sayakpaul 在 #13369 中重构 autoencoderdc 测试
* [CI] 浑源变压器在#13342中由@DN6测试重构
* 修复 @azolotenkov 在 #13417 中的 DreamBooth 脚本中的 VAE 卸载编码设备不匹配问题
* 删除 #13405 中 @andrewor14 对 torchao 的 AffineQuantizedTensor 的引用
* [测试] 修复 @sayakpaul 在 #13424 中的 autoencoderdc 测试
* [核心] 修复@sayakpaul 在 #13276 中使用 torchao 时的组卸载问题
* 修复 HunyuanVideo I2V 管道中的 IndexError，由 @kaixuanliu 在 #13244 中修复
* 通过 @yiyixuxu 在 #13397 中改进 Claude CI
* FLUX.2 小型解码器，作者：@huemin-art，#13428
* [CI] 在 #13380 中添加 @DN6 的 PR/Issue Auto Labeler
* [CI] 在 #13344 中添加 @DN6 的 GLM Image Transformer 模型测试
* [CI] 在 #13433 中使用 @DN6 为 Issue Labeler 使用细粒度令牌
* 在 Qwen dreambooth 示例中处理提示嵌入 concat by @chenyangzhu1 in #13387
* 修复(qwen-image dreambooth): 在 #13396 中使用 @chenyangzhu1 的 `--with_prior_preservation` 时正确的提示嵌入重复
* 在设备上缓存 RoPE 频率，以避免在 QwenImage 中重复 CPU-GPU 复制，作者为 @akshan-main，位于 #13406
* [测试] 加强依赖测试。  由 @sayakpaul 在 #13332
* 修复 LoRA 文档中的语法，作者为 @Xyc2016，#13423
* 通过以像素分辨率预处理图像来修复 HunyuanVideo 1.5 I2V ... by @akshan-main in #13440
* [模块化] 在 #13378 中添加 @akshan-main 的 LTX 视频模块化管道
* 在 #13432 中添加 @HsiaWinter 的 ernie 图片
* [核心] 修复@sayakpaul 在 #13443 中的 fa4 集成
* FlashPack 由@hlky 在#12700 中编写
* [ptxla] 修复 TPU 上的 pytorch xla 推理。  通过 @entrpn 在 #13463
* 修复了@HsiaWinter 在 #13464 中的 gguf / 一些 GPU 后端的一些数据类型问题
* 修复 @azolotenkov 在 #13441 中的 Qwen Image DreamBooth 预先保存批量订购问题
* [测试] 修复已弃用的注意力处理器测试。  由 @sayakpaul 在 #13469
* [测试] xfail clip 相关问题。  由 @sayakpaul 在 #13454
* [代理] 在 #13410 中添加 @yiyixuxu 的模块化文档
* [测试] 修复@sayakpaul 在 #13442 中的训练测试
* 修复（分析）：在 #13471 中通过 @Akash504-ai 装饰方法时保留实例隔离
* [Feat] 在 #13390 中添加 @RuixiangMa 的 LongCat-AudioDiT 管道
* 修复 Flux2 DreamBooth 之前的保存提示重复问题（@azolotenkov 在 #13415 中）
* 杂务：为 PR 上传工作流程增加 doc-builder SHA，由 @rtrompier 在 #13476 中完成
* 通过 @hitchhiker3010 在 #13461 中消除 ZImage 管道中的编译瓶颈
* [杂务] 添加扩散器格式示例到 LongCatAudioDiTPipeline by @RuixiangMa in #13483
* [核心] 在 #13480 中由 @sayakpaul 修复 xla 的 autoencoderkl qwenimage
* 在 #13438 中添加 @palinebm 可行的 PR 分叉
* 在 #13389 中为 @akshan-main 添加 HunyuanVideo 1.5 的模块化管道
* [代理文档] 在 #13472 中添加 @yiyixuxu 的 float64 陷阱
* 修复（ernie-image）：避免 @songh11 在 #13478 回调 kwargs 中的 locals() 理解范围问题
* [Bugfix] 修复#13494中@RuixiangMa在LongCatAudioDiTTransformer转换中形状不匹配的问题
* 壮举：@McPatate 在 #13470 中将安全张量提升至 `0.8.0-rc.0`
*修复（qwen）：修复CFG在通过@Sunhill666在#13379中传递没有掩码的否定提示嵌入时失败的问题
* 在 #13474 中由@sayakpaul 在 v5e-8 上添加用于通量的 spmd 示例
* 在 #13050 中添加 @adi776borate 的 FLUX.2 Klein Inpaint 管道
* [文档] 在速度内存文档中添加对 torchao 和其他后端的提及。  由 @sayakpaul 在 #13499
* 修复了 @yadferhad 在 #13486 中的 Flux2 非扩散器指导 LoRA 转换
* 添加 _native_npu_attention 支持掩码形状，如 @chang-zhijie 在 #13490 中的 [B,1,1,S]
* 修复（freeu）：在 float32 中对 float16 输入运行 FFT，以避免 #13503 中 @Ricardo-M-L 的 ComplexHalf
* 修复 HiDream 管道测试中的非确定性 T5 输出，由 @kaixuanliu 在 #13534 中进行
* 修复 AuraFlow attn 处理器，通过 @Ricardo-M-L 在 #13533 中将norm_added_q 应用于关键投影
* 在 #13496 中为 @kaixuanliu 为 ErnieImageTransformer2DModel 添加 _repeated_blocks
* [CI] 在 #13481 中修复 @DN6 的 BnB 测试
* [测试] 通过@sayakpaul 在 #13491 中的磁盘测试修复组卸载
* [ci] 壮举：拥有用于关闭问题的公关标签。  由 @sayakpaul 在 #13548
* 由 @hlky 在 #13448 中改进 `trust_remote_code`
* 杂务：在 #13555 中为 @rtrompier 的主文档构建工作流程凹凸文档构建器 SHA
* [ci] 简化发布工作流程。  由 @sayakpaul 在 #13329
* [注意后端] 修复了 flash 和 flash 3 的环 CP，由 @sayakpaul 在 #13182 中完成
* [代理文档] 添加 pipelines.md 等，由@yiyixuxu 在#13567 中添加
* 在 #13498 中添加 @akshan-main 的 Ernie-Image 模块化管道
* [代理文档] 由@yiyixuxu 在#13568 中更新modular.md
* [文档] 修复 @ivnvalex 在 #13642 中的 AutoencoderOobleck 文档中的拼写错误） 
* 修复了 #13532 中 @Ricardo-M-L 的 ErnieImagePipeline 预计算的 Prompt_embeds + num_images_per_prompt 形状不匹配问题
* 壮举：支持任意 KV 序列长度的环关注，由 @songh11 在 #13545 中提供
* [ci] 在 CI 中使用 tokenizers 稳定安装。  由 @sayakpaul 在 #13562
* @sayakpaul 的 NucleusMoE 文档 #13661
* 修复 #13489 中 @ParamChordiya 使用卸载时 UniPC 调度程序设备不匹配的问题
* [Ernie-Image] 在 #13575 中添加 @asomoza 的 lora 支持
* 添加 ACE-Step 管道，用于 @ChuxiJ 在 #13095 中生成文本到音乐
* 修复了 #13299 中 @adi776borate 在 VAE 标准化中丢失的 Latents_bn_std 数据类型
* 发布：@sayakpaul 的 v0.38.0-release（直接提交到 v0.38.0-release）

## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @卡西夫
* [离散扩散] 添加 LLaDA2 管道 (#13226)
    * [LLADA2] 文档修复 (#13333)
* @howardzhang-cv
    * 删除 torchao 中量化配置的 str 选项 (#13291)
    * 将 torchao 的最低版本防护更改为 0.15.0 (#13355)
* @sippy编码器
    * NucleusMoE-图像 (#13317)
* @DN6
    * [CI] 重构 Cosmos Transformer 测试 (#13335)
    * [CI] 浑源变压器测试重构 (#13342)
    * [CI] 添加 PR/问题自动贴标机 (#13380)
    * [CI] 添加 GLM Image Transformer 模型测试 (#13344)
    * [CI] 对 Issue Labeler 使用细粒度令牌 (#13433)
    * [CI] 修复 BnB 测试 (#13481)
* @akshan-main
    * 在设备上缓存 RoPE 频率，以避免 QwenImage 中重复的 CPU-GPU 复制 (#13406)
    * 通过以像素分辨率预处理图像来修复 HunyuanVideo 1.5 I2V… (#13440)
    * [模块化] 添加 LTX Video 模块化管道 (#13378)
    * 为HunyuanVideo 1.5添加模块化管道（#13389）
    * 添加 Ernie-Image 模块化管道 (#13498)
* @夏冬
    * 添加厄尼图像 (#13432)
    * 修复 gguf / 一些 GPU 后端的一些 dtype 问题 (#13464)
* @hlky
    * 闪存包 (#12700)
    * 改进 `trust_remote_code` (#13448)
*@瑞祥马
    * [Feat] 添加 LongCat-AudioDiT 管道 (#13390)
    * [杂务] 将扩散器格式示例添加到 LongCatAudioDiTPipeline (#13483)
    * [Bugfix] 修复 LongCatAudioDiTTransformer 转换中的形状不匹配问题 (#13494)
* @adi776硼酸盐
    * 添加 FLUX.2 Klein Inpaint 管道 (#13050)
    * 修复 VAE 标准化中缺失的 Latents_bn_std 数据类型转换 (#13299)
* @ChuxiJ
    * 添加 ACE-Step 管道以生成文本到音乐 (#13095)

---

> 📦 仓库：[huggingface/diffusers](https://github.com/huggingface/diffusers) · 🏷️ 版本：`v0.38.0` · 📅 发布：2026-05-01 · [查看英文原版 Release](https://github.com/huggingface/diffusers/releases/tag/v0.38.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
