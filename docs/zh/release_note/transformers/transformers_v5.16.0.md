---
title: "transformers v5.16.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.16.0"
version: "v5.16.0"
published: "2026-08-26"
type: "minor"
lang: "zh"
---

# transformers v5.16.0

# 发布v5.16.0


## 添加新模型

### Qwen4-Exp

<img width="2241" height="693" alt="image" src="https://github.com/user-attachments/assets/c838b5ba-ffea-42da-baa9-3f66178e3671" />

Qwen4-Exp 基于 Qwen3.5 的混合文本和多模式架构，具有三个关键组件：GatedResidual (GR)、Qwen Sparse Attention (QSA) 和 Per-Layer Embedding (PLE)。

GR是Qwen开发的残差架构，将Hyper-Connection与GatedNorm相结合。它在每个注意力和专家混合 (MoE) 块之前将多个残差流与细粒度元素门控混合，然后控制将块输出的多少注入回每个流中。

QSA 使用多个查询头对压缩的关键块进行评分，选择最相关的连续令牌块，并使不完整的尾随块保持未压缩。这种块级选择减少了索引开销并提高了长序列的内存局部性。与 Gated DeltaNet 相结合，QSA 使 Qwen4-Exp 成为第一个集成线性和稀疏注意力的混合架构，从而大幅提高长上下文工作负载的推理效率。

PLE 通过从散列标记 n 元语法和扩展的深度卷积派生的特定于层的词汇特征丰富了选定的解码器层。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/qwen4_exp)
* 在 [#48337](https://github.com/huggingface/transformers/pull/48337) 中添加 @Cyrilvallez 的 Qwen4Exp 模型 (#48337)

### GraniteSpeech5

<img 宽度=“1600”高度=“1440” alt=“图像”src=“https://github.com/user-attachments/assets/106ef712-9f45-43c9-98b7-ce6e4a7c136d”/>

Granite Speech 5.0 Turbo CTC 是一种用于自动语音识别的轻量级（约 470M 参数）一致编码器，在 BPE 目标上使用连接时间分类 (CTC) 进行训练。它是 [Granite Speech](https://huggingface.co/papers/2505.08699) 系列的快速、仅编码器成员：转录需要一次前向传递，然后是贪婪的 CTC 解码，没有自回归解码器。

在架构上，它通过以下方式扩展了 Granite Speech conformer CTC 编码器：

1. **帧堆叠 + 逐块时间子采样**：特征提取器堆叠 log-mel(+delta) 帧对 (2x)，前两个构象块通过 stride-2 深度卷积（具有平均池化残差）将每个子采样时间缩短 2 倍，在 10 ms mel 跳时总共减少 8 倍时间。

2. **使用 Shaw 的相对位置嵌入来块注意力**：使用单独的无偏差查询/键/值投影在固定大小的块上计算注意力（序列右填充到整数块，填充帧被屏蔽）。

3. **自调节CTC**：中间层的CTC后验被投影并反馈到隐藏状态，并且CTC头在该中间层自调节和最终预测之间共享。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/granite_speech5)
* 添加 Granite Speech 5.0 - (#48288) by @eustlb in [#48288](https://github.com/huggingface/transformers/pull/48288)

### 步骤3p7

Step-3.7-Flash是StepFun在[Step 3.7 Flash](https://static.stepfun.com/blog/step-3.7-flash/)中提出的。它是一个 198B 参数稀疏专家混合视觉语言模型，将 196B 参数 MoE 语言主干与 1.8B 参数视觉编码器配对以实现本机图像理解。

StepFun 尚未发布 Step-3.7-Flash 的技术报告，因此以下详细信息来自已发布的检查点配置而不是论文。
- **稀疏 MoE 解码器**：除前 3 个解码器层外，所有解码器层都通过由 288 个路由专家（每个令牌前 8 个）组成的 MoE 块以及一个共享专家进行路由。路由器使用 sigmoid 和学习的每个专家偏差而不是辅助负载平衡损失来对专家进行评分，这与 [DeepSeek-V3](./deepseek_v3) 的策略相同。
- **门控注意力**：每个注意力层在输出投影之前添加一个额外的投影，其 sigmoid 输出对每个头的注意力输出进行门控 - 与 [Qwen3-Next](./qwen3_next) 中使用的*门控注意力* 机制相同。层的子集使用更少的头和滑动窗口而不是完全关注。
- **多令牌预测**：一些检查点提供额外的解码器层，用于多令牌预测训练，[`~GenerationMixin.generate`] 可用于通过 `use_mtp=True` 进行推测解码。
- **视觉编码器**：SigLIP 式 ViT，具有 2-D 旋转位置嵌入以及注意力和 MLP 分支上学习的每层尺度。在线性投影仪将其输出映射到文本模型的隐藏大小之前，其输出通过两个 stride-2 卷积进行 4 倍下采样。
- **动态图像平铺**：图像处理器不是固定的平铺网格，而是从每个图像自己的纵横比中选择平铺窗口，生成一个缩小的全局视图以及每个图像的零个或多个局部高分辨率裁剪。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/step3p7)
* [新模型] 步骤 3.7 (#46658) by @itazap in [#46658](https://github.com/huggingface/transformers/pull/46658)

### CohereCompass

CohereCompass 是 Cohere 训练的小型专业（视觉）语言模型的基础架构。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/cohere_compass)
* 在 [#47878](https://github.com/huggingface/transformers/pull/47878) 中添加 @calpt 的 CohereCompass 建模 (#47878)



### ESMC 和 ESMFold2

ESMC 和 ESMFold2 是 BioHub 最新的最先进的蛋白质语言和折叠模型。 ESMC 使用掩蔽语言建模目标进行训练，并且可以轻松转移到蛋白质的序列和标记分类任务。检查点有各种大小，从 300M 参数到 6B 参数。它可以直接替代旧版 ESM-2 和 ESM-3 型号，并且精度显着提高。

ESMFold2 是一种最先进的蛋白质折叠模型，可产生高精度预测。它使用与原始 ESMFold 显着不同的迭代扩散方法，为更复杂的结构提供了准确性的巨大改进。


**链接：** [文档 ESMC](https://huggingface.co/docs/transformers/main/en/model_doc/esmc)、[文档 ESMFold2](https://huggingface.co/docs/transformers/main/en/model_doc/esmfold2)
* 由 @Rocketknight1 在 [#46419](https://github.com/huggingface/transformers/pull/46419) 中将 ESMC 和 ESMFold2 移植到 Transformers (#46419)


## 重大变更

传统的张量并行实现已被 DTensor 本机后端取代，因此依赖之前的 TP API 进行推理或训练的用户必须迁移到新的基于 DTensor 的接口。
* 🚨 TP dtensor API 推理 + 训练 (#47579) by @3outeille

wav2vec2_conformer、wav2vec2-bert 和 SeamlessM4T/v2 模型现在正确支持 `attn_implementation="sdpa"` 调度，这可能会改变之前解决此限制的用户的初始化行为。
* 🚨[wav2vec2] 支持 attn_implementation=sdpa 调度 (#46196) by @YangKai0616

`FuyuProcessor` 不再返回 `image_patch_indices` 输出，因此依赖于该字段的任何代码都必须更新以删除对其的引用。
* :rotating_light：剩余处理器 (#47924) by @zucchini-nlp



## 缓存
此版本修复了多个与缓存相关的错误，包括滑动窗口缓存中的离一错误、Whisper 推测解码缓存损坏、CpmAnt 使用缓存失败、具有可编译缓存的 Qwen2.5-Omni/Qwen3-Omni-MoE 生成以及仅 KV 缓存量化模型的压缩张量加载。还添加了使用负值删除缓存令牌的文档，并引入了每层缓存配置支持（允许模型每层使用不同的缓存设置）。


* Cpmant 修复了使用缓存的问题 (#48013) by @jiqing-feng in [#48013]
* [文档] 缓存作物 (#47950) by @stevhliu in [#47950]
* 恢复@Cyrilvallez 在 [#48175] 中的“支持每层缓存配置和注意掩码选择”（#48175）
* 支持每层缓存配置和注意力掩码选择 (#47901)，作者：@eladsegal，在 [#47901] 中
* 使用可编译缓存修复 Qwen2.5-Omni / Qwen3-Omni-MoE 生成 (#47872)，由 @jiqing-feng 在 [#47872] 中
* 修复滑动窗口缓存索引在环绕时逐一关闭的问题 (#47708)，作者：@hameedibrh，位于 [#47708]
* [Whisper] 修复推测解码：UnboundLocalError、缓存损坏和速度回归 (#48000) by @ydshieh in [#48000]
* 修复了仅 KV 缓存量化模型的压缩张量加载 (#47904)，由 @kylesayrs 在 [#47904] 中


## 一代

此版本修复了多个模型中的多个生成错误，包括 Whisper 推测性解码问题（UnboundLocalError、缓存损坏、速度回归和左填充批次位置 ID）、Emu3 中损坏的图像生成、OLMo/GPTNeoX 中的垃圾输出以及具有可编译缓存的 Qwen2.5-Omni/Qwen3-Omni-MoE 生成。此外，使用采样的候选生成器的 logit 分布现在通过在应用 logit 处理器后返回 logit 来对齐。


* [Whisper] 修复推测解码：通过 super().generate() (#48108) 通过 @ydshieh 在 [#48108] 中保留清除的抑制标记
* [Whisper] 修复了长格式生成中左填充批次的解码器位置 ID (#48028)，作者为 @ydshieh，位于 [#48028]
* [serge] 修复了模型 `generation` 的 2 个集成测试因 `import_or_config` 失败（其他 (2)） (#48061) 由 @sergereview[bot] 在 [#48061] 中
* 使用@Cyrilvallez 在 [#48007] 中的抽样 (#48007) 对齐 CandidateGenerators 的 logit 分布
* [GPTNeoX] 修复 post_processor 在从预训练（OLMo 垃圾生成）加载时不被覆盖的问题 (#47988) by @ydshieh in [#47988]
* [emu3] 🦮 黑色拉布拉多回来了！修复了自 #37033 (#47948) by @ydshieh [#47948] 以来图像生成中断的问题


## 注意

此版本中修复了多个与注意力相关的错误，包括纠正 SigLIP2 文档拼写错误、修复 xcodec2 和 ROCm RDNA GPU 的 Flash/SDPA 注意力调度测试、解决 GPT2 交叉注意力掩码被默默丢弃的问题，以及在 `TimmWrapper` 中启用 SDPA 支持声明。还引入了每层缓存配置和注意力掩码选择支持，允许具有异构层配置的模型在每层使用不同的 `sliding_window`、`attention_chunk_size` 和 `number_of_conv_states` 值。


* 文档：修复 SigLIP2 Flash Attention 代码示例中的拼写错误 (#48197)，作者：@VimalN2005，位于 [#48197]
* [xcodec2] 修复@jiqing-feng 在 [#48244] 中的 Flex Attention 和 Flash Dispatch 测试 (#48244)
* 修复了在 RDNA GPU 上崩溃的 ROCm SDPA-flash 跳过保护 (#47965)，作者为 @Abdennacer-Badaoui，位于 [#47965]
* [GPT2] 修复了 [#47946] 中 @DavidJohnQuinlan 在交叉注意力中默默丢弃的编码器注意掩码 (#47946)
* 在 `TimmWrapper` (#47939) 中声明 sdpa 支持，由 @jiqing-feng 在 [#47939] 中声明


## 量化

量化改进包括通过 HF 内核添加 NVFP4 量化支持（启用动态 BF16 权重量化，内存减少约 50%），并修复多个错误：恢复 `is_quantization_compressed` 中导致打包格式检查点的模块布局不正确的回归，使用量化检查点修复 CLIP 权重初始化失败，以及恢复仅 KV 缓存的 KV 缓存量化设置量化模型。


* 恢复@subin9在[#48072]中的“[Quantization]：重构is_quantization_compressed以进行基于格式的检测”（#48072）
* 壮举：在 [#47883] 中添加 @drbh 的 nvfp4 量化 (#47883)
* [DeepSeekV2] 修复集成测试 OOM：使用 device_map=auto 而不是 8 位量化 (#47991) by @ydshieh in [#47991]
* 当子模块携带量化权重时修复 CLIP _init_weights (#47921) by @Bluear7878 in [#47921]


## 并行化

引入了一种简单的管道并行推理引擎，通过无缝 `generate()` 集成支持绑定/非绑定权重嵌入，同时恢复张量并行 API 的向后兼容性，并在 `from_pretrained()` 中使用 `tp_plan` 的弃用周期。另外修复了 BLT 模型中影响波束搜索的模型并行错误。


* 由 @ArthurZucker 在 [#48300] 中恢复张量并行 API 的 BC (#48300)
* 修复 blt 模型并行错误 (#48327) by @kaixuanliu in [#48327]
* 管道并行朴素推理 (#47289) by @3outeille in [#47289]


## 内核

内核支持得到了改进，文档更新突出显示了受支持的模型，通过添加 `is_torchdynamo_exporting` 保护修复了内核修饰函数的导出崩溃，并且默认的 Flash Attention 2 hub 内核版本已升至 v3 以解决与较新 PyTorch 版本的兼容性问题。


* [文档] 内核支持的模型 (#48258) by @stevhliu in [#48258]
* [修复] [#47808] 中 @remi-or 导出内核修饰函数时崩溃 (#47808)
* 将默认的 flash-attn2 hub 内核版本升级到 v3 (#47863)，由 @jiqing-feng 在 [#47863] 中


## 错误修复和改进

* 在 [#48336] 中修复 @zucchini-nlp 的视频-llama 模块化转换 (#48336)
* CI：通过 @tarekziade 在 [#48330] 中对 hunyuan-moe 慢速测试进行门控 (#48330)
* 通过@wtdcode在[#48260]中添加force_accelerate_hooks签名保存的回归测试(#48260)
* 将选择加入的每帧像素上限 (cap_pixels_per_frame) 添加到 Qwen3-VL 视频处理器 (#48071)，由 @dkrisman 在 [#48071] 中
* 修复了停止条件文档字符串中的 `scores` 类型 (#47676)，由 @qgallouedec 在 [#47676] 中
* 文档字符串检查与某些文件不匹配 - 由 @zucchini-nlp 在 [#48121] 中修复它 (#48121)
* 在 [#47745] 中添加 @guarin 共享的 ImageProcessingTester (#47745)
* 修复 AutoTokenizer 返回 DeepSeek-R1-Distill-Qwen 模型的 TokenizersBackend (#48211) by @ydshieh in [#48211]
* [文档] 修复失败的文档测试 (#47687) by @stevhliu in [#47687]
* 通过 @guarin 在 [#47897] 中修复 MPS 上的 build_2d_sinusoidal_position_embedding (#47897)
* [Gemma4] 调查 @ydshieh 在 [#48236] 中的片状 test_ Generation_beyond_sliding_window_1_eager (#48236)
* 让梯度检查点通过 every_n_layers 跳过层 (#48200) by @qgallouedec in [#48200]
* 通过 @remi-or 在 [#48292] 中禁用每日夜间 CI (#48292)
* gs (#48288) by @eustlb in [#48288]
* CI: 修复 muse OOM (#48284) by @tarekziade in [#48284]
* 通过调用 `post_init()` 修复 `BayesianDetectorModel.from_pretrained()` (#48254) by @woojinpaik in [#48254]
* [修复] 避免在 CI (#48287) 中通过@remi-或在 [#48287] 中重复测试
* [`GDN`] 修复@vasqu 中的重复 FLA 回退 (#48266) [#48266]
* 修复了某些 VLM 配置（BC 回归）中的 `tie_word_embeddings` 未从 `text_config` 中提升的问题 (#45857)，作者为 @qgallouedec，位于 [#45857]
* 将 benchmark_v2 (#48083) 中的 xpu-smi 子进程调用替换为 [#48083] 中的 @kaixuanliu
* 忽略 @tarekziade 中的 mlinter ci 文件 (#48267) [#48267]
* 修复 Mamba+ 上 LoRA 训练的 grouped_mm_fallback 中的数据类型不匹配… (#47933) by @adh-aakriti in [#47933]
* 计算每层的 MoE 负载平衡损耗，以避免巨大的单热物化 −99.7% @ 128k (#48131) by @qgallouedec in [#48131]
* 多个模型中的确定性 Layer_types 缓冲区注册 (#48162) by @mowoe in [#48162]
* 修复 nemotron_h save_pretrained 发出奇异的backbone.embedding.weight (#48075) by @yuekaizhang in [#48075]
* `force_accelerate_hooks` 不应该隐藏它所包装的签名 (#48156) by @SunMarc in [#48156]
* 修复（data_collator）：通过 [#48212] 中的 @<NOT FOUND> 将 TokenClassification numpy_call 与 torch_call 对齐（#48212）
* 修复了 @AleksMat 在 [#48184] 中的测试中使用局部变量 field_ 的拼写错误 (#48184)
* [serge] 修复了 [#48134] 中 @sergereview[bot] 的提交 16780c86b20a (PR #47622) (#48134) 导致的 2 个集成测试回归
* [Gemma4] 修复集成测试中过时的预期值 (#48233)，作者：@ydshieh，位于 [#48233]
* [TableTransformer, PI0] 修复集成测试中过时的预期值和 OOM (#48198)，作者：@ydshieh，位于 [#48198]
* 在 PR 上发布两个 CI 徽章：CPU PR CI 和 GPU 运行缓慢 (#48190) by @tarekziade in [#48190]
* 修复集成测试中过时的预期值（cuda sm_86 / Aug04 回归）（#48171），作者：@ydshieh，位于 [#48171]
* 即使代码所有者离开也可以分配审阅者，并按模态路由模型 (#48085)，作者：@tarekziade in [#48085]
* [VITS] 在 [#46375] 中取消跳过 test_model_forward (#46375) by @blipbyte
* 将上下文并行性应用到评估路径 (#48167)，由 @qgallouedec 在 [#48167] 中
* 修复 `gpt_oss` 在 GPU 上运行 (#48118)，由 @tarekziade 在 [#48118] 中
* [EsmFold2] 修复过时的预期分布图 logit 值 (#48182) by @ydshieh in [#48182]
* 修复 4 月 5 日集成测试回归 (cuda sm_86) (#48170) by @ydshieh in [#48170]
* 通过 @atri2549 在 [#46995] 中为 is_flash_linear_attention_available 添加 MLU 支持 (#46995)
* 修复 cuda sm_86 的集成测试预期值（3 月 15 日回归）（#48168），作者：@ydshieh，位于 [#48168]
* 修复 ExecuTorch 导出期间的 DynamicCache 重建 (#47900)，作者为 @eladsegal，位于 [#47900]
* [LLaVA] 修复 cuda sm_86 的 pixtral 集成测试 (#48166) by @ydshieh in [#48166]
* 将 ESMC 和 ESMFold2 移植到 Transformers (#46419)，由 @Rocketknight1 在 [#46419] 中
* [Qwen2.5-Omni] 通过@ydshieh 在 [#48164] 中更新 cuda sm_86 的陈旧预期值 (#48164)
* [Mistral3] 修复批量集成测试：padding_side=left + 由@ydshieh 在 [#48161] 中更新预期值 (#48161)
* 修复 DeepSeek V2 默认词汇大小 (#48159) by @hmellor in [#48159]
* [InternVL] 修复 Llama 集成测试 (cuda sm_80) (#48153) 的陈旧预期值，作者为 @ydshieh，位于 [#48153]
* 在 github_utils (#48124) 中重试暂时性网络错误 (RemoteDisconnected)，作者为 [#48124] 中的@ydshieh
* 修复@kaixuanliu 在 [#47127] 中的 clvp 模型 (#47127) 的错误
* 始终为 LongT5 和 Pop2Piano (#47620) 绑定嵌入，作者为 @jiqing-feng，位于 [#47620]
* 在 Trainer._get_eval_sampler 中使用带有 LengthGroupedSampler 种子的生成器，用于确定性评估顺序，且 per_device_eval_batch_size > 1 (#48025) by @philipshurpik in [#48025]
* 为内联 PR 评论启用 mlinter 发现工件 (#48117)，由 @ydshieh 在 [#48117] 中
* 修复 CpmAnt 加载：将 lm_head 大小改为 vocab_size (#48012)，作者：@jiqing-feng in [#48012]
* 在发布新评论之前删除旧的 mlinter 评论 (#48107)，由 @ydshieh 在 [#48107] 中
* [视频] 当 num_frames 超过total_num_frames 时警告并返回所有帧 (#48074) by @carlszk in [#48074]
* 接受工件目录作为 post_mlinter_review.py 中的参数 (#48106) by @ydshieh in [#48106]
* 由 @ydshieh 在 [#48088] 中修复 mlinter 工件路径 (#48088)
* [视频] 通过@<NOT FOUND>修复RGBA视频的convert_to_rgb通道切片和alpha混合(#48053) [#48053]
* [PE] 对于 TimmWrapper 支持的模型跳过 test_sdpa_can_dispatch_on_flash (#48064) by @ydshieh in [#48064]
* 修复（管道）：保留 model. Generation_config 优先于管道默认值 (#47752) (#47953) by @nithin42 in [#47953]
* [Gemma3] 通过@ydshieh 在 [#48036] 中更新 A10G (#48036) 的集成测试预期值
* 在 cuda 上从“lanczos”回退到“bicubic”（#48026），作者：@zucchini-nlp in [#48026]
* [serge] 修复了由 @sergereview[bot] 在 [#48060] 中提交 b9090ae58cda (PR #47096) (#48060) 导致的 2 个集成测试回归
* [修复] CB 中与 FA 相关的小测试失败 (#47341) by @remi-or [#47341]
* 修复：通过 [#48044] 中的@<NOT FOUND> 在多模式管道中尊重空的processor_kwargs={} (#48044)
* [CircleCI] 为私有分叉启用 CI，为公共存储库启用无操作 (#48056) by @ydshieh in [#48056]
* 在长度分组采样器中支持 `BatchFeature` (#48034)，由 @qgallouedec 在 [#48034] 中提供
* 通过 [#47931] 中的 @<NOT FOUND> 修复候选生成器的 EOS (#47931)
* [Gemma3n] 由 @ydshieh 在 [#48035] 中更新 A10G + torch 2.13 (#48035) 的集成测试预期值
* 修复 muse_glimmer 失败的测试用例 (#48011) by @kaixuanliu in [#48011]
* Cohere 指南针测试 (#47895) 由 @zucchini-nlp 在 [#47895] 中
* 文档：使用 README 语言菜单的相对路径并添加 fa/ro 条目 (#47777) by @Priyans-Lathiya in [#47777]
* 由 @tarekziade 在 [#47918] 中将 mlinter 移动到 0.1.4 (#47918)
* [MoE] 修复 Blackwell GPU 在 torch <= 2.8 (#48014) 上使用 torch._grouped_mm 崩溃的问题，作者为 @<NOT FOUND> in [#48014]
* [文档] Muse Glimmer (#47882) by @stevhliu in [#47882]
* [Florence2] 修复了 @ydshieh 在 [#48031] 中由 torch 2.13 和 auto-dtype (#48031) 引起的两个集成测试失败
* @zucchini-nlp 在 [#47943] 中正确分离测试 (#47943)
* 在 `examples_torch` 部门中取消固定 `pytest` (#48023)，由@tarekziade 在 [#48023] 中
* [CI] 通过在 [#47971] 中添加 @<NOT FOUND> 添加缺少的 get-pr-number 依赖项，修复 pr_build_doc_with_comment 工作流程中的启动失败 (#47971)
* 让 GPU 验证调用者打开内存探针 (#48001) by @tarekziade in [#48001]
* 修复当 mlp_layer_types 不存在时的 MTP 配置 (#48015)，由 @Cyrilvallez 在 [#48015] 中
* 删除 GraniteMoeDecoderLayer 中重复的 block_sparse_moe 分配 (#47876) by @Aman2394 in [#47876]
* [ModernVBERT] 修复集成测试检查点（自 4 月起为 404）（#48009），作者：@ydshieh，位于 [#48009]
* 修复了 @Cyrilvallez 在 [#48006] 中的裁剪问题 (#48006)
* 修复 DFlash 候选令牌设备与 device_map="auto" 不匹配的问题 (#47877)，作者：@sywangyi，在 [#47877]
* :red_circle: 允许标记器 0.23.1 (#46381) by @ArthurZucker in [#46381]
* [Whisper] 修复 WhisperTokenizer.decode() 中的批解码_with_timestamps (#47997) by @ydshieh in [#47997]
* [OLMoE] 更新 A10G 的预期 logits 并添加 torch.no_grad() (#47989) by @ydshieh in [#47989]
* [OLMo] 通过在 [#47986] 中添加@ydshieh 添加 torch.no_grad() (#47986) 修复 logits 测试中的 OOM
* [AXK1] 通过@ydshieh 在 [#47980] 中修复 CUDA A10G (#47980) 的预期 logits
* [Gemma] 通过@ydshieh 在 [#47976] 中更新 A10G (#47976) 的预期值
* 将 gemma4 视频修复到设备 (#47896) by @guarin in [#47896]
* 在 [#47972] 中@ydshieh 删除 qwen2_5_vl batch_ different_resolutions 测试中过时的（无、无）后备（#47972）
* 代码扫描警报编号的潜在修复。 267：神器中毒（#47949），作者：@tarekziade [#47949]
* 修复 GatedDeltaNet A_log dtype 以防止 bfloat16 init 下的 -inf (#47944)，由 @Nkluge-correa 在 [#47944] 中
* [serge] 修复模型 `got_ocr2` 的 2 个集成测试因 `other` 失败（其他 (2)）（#47937），由 @sergereview[bot] 在 [#47937] 中
* 修复了 CHAT With MODELS 中的 Jinja 块结尾“编写聊天模板……”（#47960），作者：@ak1for2business-prog，位于 [#47960]
* [测试] 修复 Qwen2.5-VL batch_wo_image 在 CUDA 上的预期输出 (#47968) by @ydshieh in [#47968]
* [serge] 修复模型 `opt` 的 2 个集成测试因 `other` 失败（其他 (2)）（#47909），由 @sergereview[bot] 在 [#47909] 中
* 扫描 trufflehog 中的差异，而不是整个存储库历史记录 (#47945) by @tarekziade in [#47945]
* [serge] 修复了模型 `vivit` 的 2 个集成测试因 `output_mismatch` 失败（张量值不同 (2)） (#47566) 由 @sergereview[bot] 在 [#47566]
* 修复 Gemma `sliding_window` 在每次配置保存/重新加载时减半的问题 (#47940)，由 @Bluear7878 在 [#47940] 中
* 文档：修复微调部分中不正确的 PEFT 锚链接 (#47927) by @dsulot in [#47927]
* CI：在专用运行器上添加 vllm-test-init 和 vllm-test-transformers 作业 (#47934) by @ydshieh in [#47934]
* 使 muse glimmer 可导出 (#47871) by @IlyasMoutawwakil in [#47871]
* 文档：添加 NVIDIA Spark (ARM64) 设备的安装说明 (#47906) by @mfuntowicz in [#47906]
* [CohereCompass] 由 @calpt 在 [#47903] 中进行的小文档修复 (#47903)
* 修复：正确的检查点、配置注释和 create_dummy_models 改进 (#47902) by @ydshieh in [#47902]
* 转换路径并重复连接以进行响应解析 (#47648) by @Rocketknight1 in [#47648]
* [文档] 由 @stevhliu 在 [#47781] 中更新 toctree (#47781)
* 通过 @ydshieh 在 [#47884] 中将 `CI_CPU_MEMORY_LIMIT_GB` 添加到 check_failed_tests 工作流程 (#47884)
* 在 Qwen3ASR 处理器测试中使用微型集线器检查点 (#47833)，作者：@ydshieh [#47833]
* 由 @yiliu30 在 [#47826] 中更新 AutoRound XPU/CPU 后端 (#47826)
* 文档(测试): 修复测试注释中的拼写错误 (#47859) by @zhaoxinyi02 in [#47859]
* 由 @Cyrilvallez 在 [#47870] 中更新发布后的版本 (#47870)

## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @tarekziade
    * CI: 控制混元萌慢速测试 (#48330)
    * CI：修复 Muse OOM (#48284)
    * 忽略 mlinter ci 文件 (#48267)
* 在 PR 上发布两个 CI 徽章：CPU PR CI 和 GPU 运行缓慢 (#48190)
    * 即使代码所有者离开也可以分配审阅者，并按模式路由模型 (#48085)
    * 修复 `gpt_oss` 在 GPU 上运行 (#48118)
    * 将 mlinter 移至 0.1.4 (#47918)
    * 在 `examples_torch` 部门中取消固定 `pytest` (#48023)
    * 让 GPU 验证调用者打开内存探针 (#48001)
    * 代码扫描警报编号的潜在修复。 267：神器中毒（#47949）
    * 扫描 trufflehog 中的差异，而不是整个存储库历史记录 (#47945)
* @dkrisman
    * 将选择加入的每帧像素上限 (cap_pixels_per_frame) 添加到 Qwen3-VL 视频处理器 (#48071)
* @jiqing-feng
    * Cpmant 修复使用缓存 (#48013)
    * [xcodec2] 修复 Flex 注意和 Flash 调度测试 (#48244)
    * 始终绑定 LongT5 和 Pop2Piano 的嵌入 (#47620)
    * 修复 CpmAnt 加载：将 lm_head 大小改为 vocab_size (#48012)
    * 使用可编译缓存修复 Qwen2.5-Omni / Qwen3-Omni-MoE 生成 (#47872)
    * 将默认 flash-attn2 hub 内核版本升级为 v3 (#47863)
    * 在 `TimmWrapper` 中声明 sdpa 支持 (#47939)
* @ydshieh
    * 修复 AutoTokenizer 返回 DeepSeek-R1-Distill-Qwen 模型的 TokenizersBackend (#48211)
    * [Gemma4] 调查片状 test_ Generation_beyond_sliding_window_1_eager (#48236)
    * [Gemma4] 修复集成测试中过时的预期值 (#48233)
    * [TableTransformer, PI0] 修复集成测试中过时的预期值和 OOM (#48198)
    * 修复集成测试中陈旧的预期值（cuda sm_86 / Aug04 回归）（#48171）
    * [EsmFold2] 修复过时的预期分布图 logit 值 (#48182)
    * 修复 4 月 5 日集成测试回归 (cuda sm_86) (#48170)
    * 修复 cuda sm_86 的集成测试预期值（3 月 15 日回归）(#48168)
    * [LLaVA] 修复 cuda sm_86 的 pixtral 集成测试 (#48166)
    * [Qwen2.5-Omni] 更新 cuda sm_86 的过时预期值 (#48164)
    * [Mistral3] 修复批量集成测试：padding_side=left + 更新预期值 (#48161)
    * [InternVL] 修复 Llama 集成测试的陈旧预期值 (cuda sm_80) (#48153)
    * 在 github_utils 中重试暂时性网络错误 (RemoteDisconnected) (#48124)
    * [Whisper] 修复推测解码：通过 super().generate() 保留清除的抑制标记 (#48108)
    * 启用 mlinter 调查结果工件以进行内联 PR 审查 (#48117)
    * 在发布新评论之前删除旧的 mlinter 评论 (#48107)
    * 接受工件目录作为 post_mlinter_review.py 中的参数 (#48106)
    * 修复 mlinter 工件路径 (#48088)
    * [Whisper] 修复长格式生成中左填充批次的解码器位置 ID (#48028)
    * [PE] 对于 TimmWrapper 支持的模型跳过 test_sdpa_can_dispatch_on_flash (#48064)
    * [Gemma3] 更新 A10G 的集成测试预期值 (#48036)
    * [CircleCI] 为私有分叉启用 CI，为公共存储库启用 no-op (#48056)
    * [Gemma3n] 更新 A10G + 火炬 2.13 的集成测试预期值 (#48035)
    * [Florence2] 修复由 torch 2.13 和 auto-dtype 引起的两次集成测试失败 (#48031)
    * [ModernVBERT] 修复集成测试检查点（自 4 月以来为 404）（#48009）
    * [Whisper] 修复推测解码：UnboundLocalError、缓存损坏和速度回归 (#48000)
    * [Whisper] 修复 WhisperTokenizer.decode() 中的批解码_with_timestamps (#47997)
* [Whisper] 修复 A10G 上的集成测试失败（dtype、过时值、API 更改）(#47995)
    * [DeepSeekV2] 修复集成测试 OOM：使用 device_map=auto 而不是 8 位量化 (#47991)
    * [OLMoE] 更新 A10G 的预期 logits 并添加 torch.no_grad() (#47989)
    * [OLMo] 通过添加 torch.no_grad() 修复 logits 测试中的 OOM (#47986)
    * [GPTNeoX] 修复从预训练加载时 post_processor 未被覆盖（OLMo 垃圾生成） (#47988)
    * [AXK1] 修复 CUDA A10G 的预期 logits (#47980)
    * [Gemma] 更新 A10G 的预期值 (#47976)
    * [emu3] 🦮 黑色拉布拉多回来了！修复自 #37033 以来图像生成中断的问题 (#47948)
    * 删除 qwen2_5_vl batch_ different_resolutions 测试中过时的（无、无）回退（#47972）
    * [测试] 修复 CUDA 上 Qwen2.5-VL batch_wo_image 的预期输出 (#47968)
    * CI：在专用运行器上添加 vllm-test-init 和 vllm-test-transformers 作业 (#47934)
    * 修复：正确的检查点、配置注释和 create_dummy_models 改进 (#47902)
    * 将 `CI_CPU_MEMORY_LIMIT_GB` 添加到 check_failed_tests 工作流程 (#47884)
    * 在 Qwen3ASR 处理器测试中使用微型 Hub 检查点 (#47833)
* @eustlb
    * GS (#48288)
* @eladsegal
    * 修复 ExecuTorch 导出期间的 DynamicCache 重建 (#47900)
    * 支持每层缓存配置和注意力掩码选择 (#47901)
* @杨凯0616
    * 🚨[wav2vec2] 支持 attn_implementation=sdpa 调度 (#46196)
* @drbh
    * 壮举：添加 nvfp4 量化 (#47883)
* @Priyans-Lathiya
    * 文档：使用 README 语言菜单的相对路径并添加 fa/ro 条目 (#47777)
* @itazap
    * [新模型]步骤3.7 (#46658)
* @calpt
    * [CohereCompass] 小文档修复 (#47903)
    * 添加 CohereCompass 建模 (#47878)

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.16.0` · 📅 发布：2026-08-26 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.16.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
