---
title: "transformers v5.20.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.20.0"
version: "v5.20.0"
published: "2026-10-15"
type: "minor"
lang: "zh"
---

# transformers v5.20.0

# 发布v5.20.0


## 添加新模型

### Muse Spark 开放

<img 宽度=“2400”高度=“1296” alt=“图像”src=“https://github.com/user-attachments/assets/bf34ea27-0edf-4ded-ba6f-905b04096126”/>

Muse Spark Open 是 Meta 的多模式专家混合模型，它以文本、图像、音频和视频作为输入并生成文本。它总共有 816B 个参数（每个令牌 42B 个活动参数）以及跨模式共享的最多 1,048,576 个令牌的上下文窗口。它针对代理编码任务进行了培训，例如多文件编辑、调试和工具使用。检查点有 BF16 和 NVFP4 格式。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/muse_spark) | [博客文章](http://hf.co/blog/meta-muse-spark-open)
* 在 [#49644](https://github.com/huggingface/transformers/pull/49644) 中添加 @guarin 的 Muse Spark Open (#49644)


### 凌3.0

Ling 3.0 Flash 是 InclusionAI 的混合专家语言模型。其解码器将五个 Kimi Delta Attention (KDA) 层与一个 Multi-head Latent Attention (MLA) 层组合在一起。 MLA 块使用交错旋转嵌入和头向输出门，前馈块结合了路由和共享专家。它在 Transformers 中原生支持为 `BailingHybridForCausalLM`，因此加载时不需要 `trust_remote_code=True`。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/bailing_hybrid)
* [模型] 添加原生 Ling 3.0 Flash 支持 (#49446) by @icavan in [#49446](https://github.com/huggingface/transformers/pull/49446)


### Kolibri1

Kolibri 1 是 Aleph Alpha 的混合专家推理模型，专注于德语和英语。它的 50 层中的每一层都使用 sigmoid 路由将每个令牌路由到 384 个专家中的 6 个，并添加一个共享专家。四个滑动窗口注意力层与一个全注意力层交替，并且 RoPE 仅应用于滑动窗口层。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/kolibri1)
* 添加 @lucamotz 的 Kolibri 1 (#49463) [#49463](https://github.com/huggingface/transformers/pull/49463)


### MiniCPM-V 4.7

[MiniCPM-V](https://huggingface.co/papers/2509.18154)是[OpenBMB](https://github.com/OpenBMB)开发的一系列高效多模态大语言模型。与 MiniCPM-V 4.6 一样，MiniCPM-V 4.7 架构将 SigLIP 视觉编码器配对，该编码器具有与 Qwen3.5 语言模型主干合并的窗口注意力，并支持 4 倍和 16 倍视觉下采样模式。

4.6 的主要补充是 *canvas M-RoPE*：该模型不是沿着单个 1-D 序列对视觉标记进行编号，而是将每个图像布置在 2-D 画布上，并为每个视觉标记分配 `(temporal, height, width)` 位置，因此同一图像的切片保持其空间关系，视频帧保持其时间顺序。

* 通过 @zucchini-nlp 在 [#48979](https://github.com/huggingface/transformers/pull/48979#top) 中修复更多内容 (#48979)


### 无限Ocr

UnlimitedOcr 是来自百度的单 3B 参数 OCR 模型，具有标准的 32,768 个令牌上下文长度。它基于 DeepSeek OCR 构建，并用参考滑动窗口注意 (R-SWA) 替换所有解码器注意层。这使得 KV 缓存在解码过程中保持恒定，因此模型可以在一次前向传递中转录数十个页面。它支持“高达”模式（具有动态裁剪的 640x640 块）和“基本”模式（单个 1024x1024 视图），并且可以输出带有边界框的区域检测。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/unlimited_ocr) | [论文]（https://huggingface.co/papers/2606.23050（文档仅链接 Hugging Face 论文页面，“Unlock OCR Works”未给出 arXiv 链接，因此这是提供的论文 URL））
* 在 [#46836](https://github.com/huggingface/transformers/pull/46836) 中添加 @guarin 的无限 OCR (#46836)


### UltraBERT
UltraBERT 是一系列双向文本编码器，针对分类和检索任务，结合掩蔽率、修剪和蒸馏进行训练。发布的编码器支持多达 32,768 个令牌的序列。他们使用旋转位置嵌入、RMSNorm、SwiGLU 前馈层以及交替的局部和全局注意力（每第三层是全局的）。检查点包括用于掩码语言建模和微调的 UltraBERT-150M 和 UltraBERT-380M，以及用于文本嵌入的 UltraBERT-Embed-150M。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/ultrabert) | [论文](https://huggingface.co/papers/2610.15028)
* 集成 @tomaarsen 的 UltraBERT 架构 (#49596) [#49596](https://github.com/huggingface/transformers/pull/49596)


### MOSS-转录-Diarize

MOSS-Transcribe-Diarize 0.9B 是一种端到端音频理解模型，用于长格式多说话人转录、说话人二值化和时间戳。它结合了 Whisper 式编码器、4× 帧合并步骤、多模态投影仪和 Qwen3 语言模型。它一次性产生联合转录和二值化，片段格式为 `[start][S01]text[end]`。它通过处理器中的 Whisper-window 分块支持长格式音频、带有热词偏向的提示转录以及 50 多种语言。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/moss_transcribe_diarize)
* 在 [#48386](https://github.com/huggingface/transformers/pull/48386) 中添加 @itazap 的 MOSS-Transcribe-Diarize 模型 (#48386)



## 重大变更

🚨 一般性重大通知，EP 推理速度有所下降；我们正在努力尽快解决这个问题！ 🚨

已从 `cache_utils.py` 中删除了已弃用的检查和方法（影响 minimax_m3_vl 和 pi0 等模型），因此仍然调用这些已弃用的缓存方法的任何代码都必须切换到当前缓存 API。
* 🚨 删除已弃用的缓存实用程序方法 (#49605) by @guarin

从其他模型的意外导入已从多个模型文件（例如 embedding_gemma2、ijepa、lightglue）中删除，并且模块化转换器现在避免添加此类跨模型导入。如果您通过这些模型模块导入这些名称，请从其原始模块导入它们。
* 🚨 删除其他模型的导入 (#49473) by @guarin

最低 `kernels` 版本现在是 0.17.2，它允许 `use_fallback=KernelizeFallback.ALL`，以便失败的内核加载回退到原始实现而不是引发错误。将 `kernels` 升级到 0.17.2 或更高版本。
* 🚨 将最小内核提升至 0.17.2，以获得更好的回退效果 (#49235)，作者：@SunMarc

新的 `SubConfigSpec` 集中了子配置的初始化，因此默认子配置是从数据类字段收集的，而不是通过实例化类来收集，这涉及配置实用程序和许多模型配置。自定义或现有的嵌套配置可能需要更新才能通过此机制声明其子配置。
* :rotating_light: SubConfigSpec 用于集中初始化子配置 (#48282) by @zucchini-nlp

LUKE 和 mLUKE 标记器现在将实体特殊标记（例如 `<ent>`）视为特殊标记（未拆分，由 `skip_special_tokens` 遵循，标准化），同时在解码时保持与常规词汇标记相同的间距。因此，涉及这些标记的标记化和解码输出可能与以前不同，因此请检查依赖于旧行为的任何代码或保存的输出。
* 🚨🚨🚨 卢克·菲克斯 (#48408) 作者：@itazap


## 出口商
Transformers 导出器现在支持在 Dynamo、ONNX、OpenVINO 和 ExecuTorch 导出过程中直接进行量化。新的统一量化 API 集成了 PT2E、ONNX Runtime 和 NNCF 量化器，支持静态和动态量化以及仅权重压缩 (INT8/INT4)，并具有可配置的校准工作流程。这使得导出优化模型更加容易，以便跨不同后端进行高效推理。

有关更多信息，请参阅文档：https://huggingface.co/docs/transformers/exporters_quantization


## 并行化

此版本改进了分布式训练和推理。现在可以跨不同的并行配置保存和加载 FSDP × TP 模型和优化器检查点，并且修复了专家并行调度、张量并行计划、静态缓存 `generate()` 和缓存分配器的字节计数。复合模型中的捆绑 LM 头现在拥有自己的 TP 计划条目，`enable_expert_parallel` 再次单独应用 EP 计划，TPU 加载使用`tor


* FSDP x TP 保存/加载、优化器 (#49256) by @michaelbenayoun in [#49256]
* FSDP x TP 保存/加载 (#48802) by @michaelbenayoun in [#48802]
* 不要为 gloo 张量并行测试设置每个等级的设备 (#49636) by @IlyasMoutawwakil in [#49636]
* 修复（分布式）：将enable_expert_parallel单独保留为EP（#49633）由@dacorvo在[#49633]中
* 修复了 FSDP 测试中的端口分配竞争 (#49455)，由 @icavan 在 [#49455] 中
* 专家并行调度将接收到的行交给专家，而不是所有到所有的待处理结果 (#49421) by @IlyasMoutawwakil in [#49421]
* 使用主机端输入和@dacorvo 中的TP (#49317) 修复静态缓存generate() [#49317]
* 复合 lm head tp 计划 (#49080) by @IlyasMoutawwakil in [#49080]
* 修复：使用 torch.accelerator 设备 APIs，以便 TP 加载在 TPU 上再次工作 (#49502) by @tengomucho in [#49502]
* 在 caching_allocator_warmup 字节计算中计算 ep 和 fsdp (#49384) by @3outeille in [#49384]
* 不要将模型包装在 FSDP 中以进行专家并行令牌调度 (#49383) by @3outeille in [#49383]


## 一代

此版本修复了主机端输入和张量并行下的静态缓存 `generate()` 错误。它还通过减少设备同步和重新编译来加速 TPU 上的 Whisper 生成，并修复了张量和 NumPy 输入的 Whisper 批量时间戳解码。管道清理了生成参数处理，消除了虚假警告。


* 在 [#49560] 中添加 @regisss 自动生成 Intel CPU Docker 映像的作业 (#49560)
* 图像解码由 @zucchini-nlp 在 [#47963] 中移至 torchcodec (#47963)
* 通过 @tengomucho 在 [#49426] 中优化 TPU 和设备同步的 Whisper 生成 (#49426)
* 管道中的生成清理 (#49269) by @Rocketknight1 in [#49269]
* 通过 @Kingofbooks 在 [#49419] 中修复张量的 Whisper 批量时间戳解码 (#49419)


## 愿景

视觉处理在多个地方进行了更新。图像解码现在使用torchcodec，Molmo2的图像和视频kwargs遵循库的标准约定，Pixtral Flash Attention在轴向RoPE重构后不再检测错误的图像边界，这导致了CUDA非法内存访问错误和不正确的输出。还发布了一些 CI 和 Docker 更改：GPU 图像移至 Python 3.11，numpy/pyarrow 冲突


* 修复 XPU Docker 镜像中的 numpy/pyarrow 冲突 (#49582)，作者：@jiqing-feng [#49582]
* CI：将 GPU 图像移动到 python 3.11 (#49352)，由 @tarekziade 在 [#49352] 中
* 由 @guarin 在 [#49563] 中更新 molmo2 处理图像/视频 kwargs (#49563)
* 修复轴向 RoPE 重构后的 Pixtral Flash Attention 图像边界 (#49373)，作者：@oliverholworthy，位于 [#49373]


## 内核

此版本改进了跨硬件的内核支持。当未安装 `flash-attn` 时，`flash_attention_2` 现在会回退到 ROCm 上的 AITER 内核，并且 T5 样式模型会获得连续的 SDPA 位置偏差掩码，因此它们会再次使用融合内核。 Hub 旋转内核现在仅限于 CUDA 推理，因为其向后传递给出了不正确的梯度。适用于 Strix Halo 和的 Atlas Inference Gated DeltaNet 内核


* 在 ROCm 上回退到 AITER 内核的 flash_attention_2 (#49608)，作者：@Abdennacer-Badaoui，位于 [#49608]
* 使 SDPA 位置偏差掩码连续，以便 T5 样式模型使用融合内核 (#49517)，作者：@IvenHsu01，在 [#49517]
* 仅在 CUDA 上使用 Hub 旋转内核进行推理 (#49439)，作者为 @qgallouedec，位于 [#49439]
* [Atlas Inference] 通过 @AzeezIsh 在 [#49453] 中为 Strix Halo Gated DeltaNet hub 内核启用 torch.compile (#49453)
* [Atlas Inference] 修复变压器 5.17+ 的 GB10 门控 DeltaNet 集线器内核，并通过 @AzeezIsh 在 [#49452] 中启用 torch.compile (#49452)


## 缓存

此版本修复了多个与缓存相关的错误：静态缓存 `generate()` 现在可以正确处理主机端嵌套输入和张量并行性，卸载的缓存预取不再与卸载副本竞争，并且上下文边界处的 Phi3 LongRoPE 缓存重建现在接收完整的前缀。它还对 MiMo-V2-Flash 的滑动窗口中的查询令牌进行计数，并纠正量化缓存 (hqq/quanto) 文档检查


* 修复卸载的缓存预取与卸载副本的竞争问题 (#49363)，作者：@qgallouedec，位于 [#49363]
* 文档：更新量化缓存 hqq/quanto 示例和文档 (#47212)，作者：@DavidJohnQuinlan，位于 [#47212]
* [MiMo-V2-Flash] 计算滑动窗口中的查询令牌 (#49170) by @guapisolo in [#49170]
* 通过@LE0-Lin 在 [#49361] 中修复上下文边界处的 Phi3 LongRoPE 缓存重建 (#49361)


## 错误修复和改进

* [文档] 硬件文档模板 (#49575) by @stevhliu in [#49575]
* 添加用于 PR CI 集成的 MIC 合约锁定文件 (#49631)，作者为 @ydshieh，位于 [#49631]
* 在 ROCm 上使用 aiter-rope 版本 3 (#49595)，由@Abdennacer-Badaoui 在 [#49595] 中
* 从文档中删除缺失的方法 (#49637) by @guarin in [#49637]
* 将 `torch.mm(..., out_dtype=...)` 翻译为 ONNX (#49635) by @IlyasMoutawwakil in [#49635]
* [文档] 硬件部分 (#49541)，作者：@michaelbenayoun，位于 [#49541]
* 当火炬回退会丢弃打包序列边界时引发 (#49474) by @qgallouedec in [#49474]
* Fa 打包序列解码 (#49610) by @SunMarc in [#49610]
* 修复@eustlb 在 [#49138] 中的嵌套 set_attn_implementation (#49138)
* 壮举：通过 @shadeMe 在 [#49531] 中为 Mellum2/2.1 添加 MTP 支持 (#49531)
* 将 onnx 导出器测试扩展到非 cuda 设备 (#49627) by @kaixuanliu in [#49627]
* 由 @DimensionSTP 在 [#49470] 中记录视频处理器后端 (#49470)
* 使正弦位置嵌入可编译（#49482），由 @jiqing-feng 在 [#49482] 中
* 通过 @qgallouedec 在 [#49500] 中从其自身参数保存加载时分片模型的 PEFT 适配器 (#49500)
* 修复：通过 @shadeMe 在 [#49468] 中将 MTP 层类型传递给每层类型旋转嵌入 (#49468)
* 通过@francip在[#49400]中将LFM2添加到GGUF加载路径(#49400)
* 为拥有绘图循环的框架添加 `MtpModel` 帮助器 (#49544)，由 @hmellor 在 [#49544] 中提供
* 使用 @tarekziade 中的 .python-version (#49603) 中的 Python 版本构建文档 [#49603]
* 对 AXK1 使用 mlp_layer_types，以便 MoE 层布局遵循 @hmellor 在 [#49518] 中的 moe_layer_freq (#49518)
* 将 Nvidia+AMD 运行缓慢的 CI 注释合并为一个 (#49598)，作者为 @ydshieh，位于 [#49598]
* 修复 @tarekziade 在 [#49583] 中不稳定的流媒体超时测试 (#49583)
* 修复 TPU 相关测试问题 (#49568)，由 @tengomucho 在 [#49568] 中
* 修复（分布式）：将 TPU 排名绑定到设备索引 0，而不是 LOCAL_RANK (#49543) by @tengomucho in [#49543]
* 在 [#49573] 中@guarin 处处使用 Transformer init (#49573)
* [文档] eval 期间的上下文并行性 (#48663) by @stevhliu in [#48663]
* 删除 [#49357] 中 @SunMarc 的示例 (#49357)
* 在 parse_response 中接受整型浮点数作为整数工具参数 (#49547) by @yonigozlan in [#49547]
* 由 @jiqing-feng 在 [#49408] 中更新 Intel CPU Docker 文件 (#49408)
* 添加缺少的视频处理器自动文档字符串 (#49569) by @guarin in [#49569]
* 在 [#47386] 中添加 @Rocketknight1 的聊天输入清理功能 (#47386)
* 修复 `create_chunked_causal_mask()` 与 `block_sequence_ids` 崩溃的问题 (#49457) by @kaixuanliu in [#49457]
* 修复@jiqing-feng 在 [#49413] 中的 SinglePositionMultiTokenCandidateGenerator 签名 (#49413)
* Minicpm 4.7 更新集成测试 (#49565) by @zucchini-nlp in [#49565]
* 停止将 HunYuan 的 DynamicNTKAlpha RoPE 视为动态 (#49445) by @jiqing-feng in [#49445]
* 修复 Gemma3nVision2TextModelTest::test_model_parallelism split (#49562) by @tarekziade in [#49562]
* 修复了 torch.compile 下 SuperPoint Forward 中的 UnboundLocalError (#49409) by @kaixuanliu in [#49409]
* 通过 [#49511] 中的 @DimensionSTP 在 AutoVideoProcessor (#49511) 中保留已解析的远程后端引用
* 修复 PR 缓慢的 CI 建议：在 venv 中安装 Transformer (#49558) by @tarekziade in [#49558]
* 修复 PR 缓慢的 CI 建议：安装 Transformer，脚本错误失败 (#49549) by @ArthurZucker in [#49549]
* 删除 [#49360] 中 @SunMarc 已弃用的数据助手 (#49360)
* 修复 test_all_params_have_gradient 的故意冻结参数 (#49264)，由 @thillai-c 在 [#49264] 中
* 由 @molbap 在 [#49530] 中对 molmo2 测试进行 Flex attn 修复 (#49530)
* 修复bridgetower跨attn掩码形状错误（#49447），作者：@kaixuanliu [#49447]
* 当 Hub tokenizer_class 是 GemmaTokenizer 时使用 Siglip2Tokenizer (#49245) by @jayzuccarelli in [#49245]
* 修复 WatermarkDetector 中的混合 BOS 前缀验证 (#49496)，作者为 @dangruiyuan，位于 [#49496]
* 弃用 [#49464] 中 @archiep867-sys 未使用的 get_uniform_frame_indices (#49464)
* [测试] @tengomucho 在 [#49425] 中对 TPU 上测试套件失败的一些修复 (#49425)
*火炬2.6清理的第二阶段（#49396）由@Rocketknight1在[#49396]中
* 由 @Rocketknight1 在 [#49395] 中保护对 current_accelerator() 和凹凸火炬版本的检查 (#49395)
* 在 PR 描述中使用一个静态 Transformers CI 徽章 (#49471)，作者为 @tarekziade，位于 [#49471]
* 修复：将配置类的每个声明字段视为默认修复 #49456 (#49466) by @tarekziade in [#49466]
* 通过 [#49458] 中的 @DimensionSTP 保持 AutoVideoProcessor 类查找惰性 (#49458)
* 在 [#43451] 中添加 @SangbumChoi 的 Molmo2 (#43451)
* Ci 通过 @zucchini-nlp 在 [#49389] 中递归地获取多模态模型 (#49389)
* 由 @zucchini-nlp 在 [#49461] 中递归所有子配置 (#49461)
* Aria、Ernie4.5-VL-MoE、Gemma4、Inkling、MiniMax-M3-VL、Qwen3.5-MoE：在 VLM/ALM 测试仪 (#49404) 上运行模型测试，作者为 @IlyasMoutawwakil，位于 [#49404]
* 修复 CI 松弛报告：model_results.json 中表面崩溃/丢失的模型作业 (#49427)，作者：@ydshieh，位于 [#49427]
* [Qwen3VLMoe] 由@ydshieh 在 [#49301] 中更新 test_small_model_integration_test_expand (#49301) 中的预期文本
* 修复文档中的后端属性和 MistralCommonBackend 中的默认后端 (#49149)，由 @samyuktahegde 在 [#49149] 中
* 更多 RoPE 简化，TF32 修复 (#49328) 由 @Rocketknight1 在 [#49328]
* 完成 PR #49228：从 [#49285] 中的 @ydshieh 中的 11 个模型系列 (#49285) 中的 Rope __init__ 中删除未使用的设备=None
* 恢复@ydshieh 在 [#49433] 中的“[CI] 暂时禁用 AMD 计划 CI 触发器”(#49433)
* 通过@LE0-Lin 在 [#49418] 中修复多令牌更新的 QuantizedCache 残留刷新 (#49418)
* 通过@dacorvo 在 [#49354] 中修复编译 (#49354) 下 _ignore_causal_mask_sdpa 中的数据相关分支
* 修复 Inkling moe_intermediate_size 当存在ensen_intermediate_size时的问题 (#49416) by @Talhax55z in [#49416]
* 修复 DebertaV2ForMaskedLM 非旧版加载问题 (#49152)，由 @kaixuanliu 在 [#49152] 中
* 此 PR 修复了当需要缺少权重时的 Gemma3n fp16 加载... (#49147) by @sywangyi in [#49147]
* PR CI：授予操作：读取@tarekziade 中的可重用工作流程 (#49417) [#49417]
* [错误修复] [建模] 由 @kylesayrs 在 [#47486] 中修复 DSV4 规范 (#47486)
* [文档] 更新空间 (#49242) by @stevhliu in [#49242]
* 在 spm 转换器中处理空的预编译字符映射 (#49211) by @itazap in [#49211]
* [CI] 暂时禁用 AMD 计划的 CI 触发器 (#49394) by @ydshieh in [#49394]
* [测试] 修复 Speech2TextFeatureExtractionWithoutTorchaudioTest 中不稳定的 CMVN 测试 (#49374)，作者为 @ydshieh，位于 [#49374]
* 让令牌调度与 `ep_size != tp_size` 一起运行 (#49368) by @qgallouedec in [#49368]
* [测试] 跳过 BitForImageClassification 的 onnx.exactness (ORT fp32 漂移) (#49366) by @ydshieh in [#49366]

## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @itazap
    * 添加 MOSS-Transcribe-Diarize 模型 (#48386)
    * 在 spm 转换器中处理空的预编译字符映射 (#49211)
    * 🚨🚨🚨 卢克·菲克斯 (#48408)
* @ydshieh
    * 添加 MIC 合约锁定文件以进行 PR CI 集成 (#49631)
    * 将 Nvidia+AMD 运行缓慢的 CI 注释合并为一个 (#49598)
    * 修复 CI 松弛报告：model_results.json 中表面崩溃/丢失模型作业 (#49427)
    * [Qwen3VLMoe] 更新 test_small_model_integration_test_expand 中的预期文本 (#49301)
    * 完成 PR #49228：从 11 个型号系列的 Rope __init__ 中删除未使用的设备=None (#49285)
    * 恢复“[CI] 暂时禁用 AMD 计划 CI 触发器”(#49433)
    * [CI] 暂时禁用 AMD 计划 CI 触发器 (#49394)
    * [测试] 修复 Speech2TextFeatureExtractionWithoutTorchaudioTest 中不稳定的 CMVN 测试 (#49374)
    * [Docker] 升级到 torch 2.14/CUDA 13.0 并从源代码优化 FA2 构建 (#49381)
    * [测试] 跳过 BitForImageClassification 的 onnx.exactness (ORT fp32 漂移) (#49366)
* @icavan
* 修复 FSDP 测试中的端口分配竞争 (#49455)
    * [型号] 添加原生 Ling 3.0 Flash 支持 (#49446)
* @tarekziade
    * 使用 .python-version 中的 Python 版本构建文档 (#49603)
    * 修复不稳定的流媒体超时测试 (#49583)
    * CI：将 GPU 图像移动到 python 3.11 (#49352)
    * 修复 Gemma3nVision2TextModelTest::test_model_parallelism 分割 (#49562)
    * 修复 PR 缓慢 CI 建议：在 venv 中安装 Transformer (#49558)
    * 在 PR 描述中使用一个静态 Transformers CI 徽章 (#49471)
    * 修复：将配置类的每个声明字段视为默认修复 #49456 (#49466)
    * PR CI：授予操作：读取可重用工作流程 (#49417)
* @卢莫茨
    * 添加 Kolibri 1 (#49463)
* @SangbumChoi
    * 添加 Molmo2 (#43451)
* @maxiaolong03
    * [模型] 添加 PP-DocLayoutV4 模型支持 (#48387)

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.20.0` · 📅 发布：2026-10-15 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.20.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
