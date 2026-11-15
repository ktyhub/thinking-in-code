---
title: "transformers v5.15.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.15.0"
version: "v5.15.0"
published: "2026-08-10"
type: "minor"
lang: "zh"
---

# transformers v5.15.0

# 发布v5.15.0

## 添加新模型

### 元缪斯微光

今天发布的 Muse Glimmer 是 Meta 的新多模式模型，专为代理用例而设计。它从 Muse 提炼为 30B 参数，并在 Apache 2.0 许可证下发布，可以部署到本地设置以实现隐私感知应用程序，例如编码、文档分析、个人助理、类似 Claw 或 Hermes 的设置。

Muse Glimmer 是一个密集的 30B 参数模型，包括：
- 2B ViT 式视觉编码器（感知编码器）
- 28B参数文本解码器

我们将在以下博文中介绍它：http://hf.co/blog/muse-glimmer

<img width="960" height="1787" alt="image" src="https://github.com/user-attachments/assets/3d8e548e-f84f-4269-8bd0-a12722d7ab01" />

---

### GraniteMoeSWA 和 GraniteSWA

<img width="1013" height="389" alt="image" src="https://github.com/user-attachments/assets/2c2b87f0-466a-413a-a4be-25ceae49c9a5" />

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/granitemoe_swa)
* 添加 Granite-swa 和 Granitemoe-swa 模型支持 (#47179) by @daviswer in [#47179](https://github.com/huggingface/transformers/pull/47179)

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/granite_swa)
* 添加 Granite-swa 和 Granitemoe-swa 模型支持 (#47179) by @daviswer in [#47179](https://github.com/huggingface/transformers/pull/47179)

---

### A.X-K1 和 A.X-K2

<img width="580" height="319" alt="image" src="https://github.com/user-attachments/assets/a20665bb-43ee-4af0-bb6f-80da495ea4f3" />

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/axk2)
* 添加 SKT 的 AXK2 (#47528) by @vasqu in [#47528](https://github.com/huggingface/transformers/pull/47528)

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/axk1)
* add_axk1 (#46867) by @kmswin1 in [#46867](https://github.com/huggingface/transformers/pull/46867)

---

### Cosmos3 边缘

<img 宽度=“1280”高度=“720” alt=“图像”src=“https://github.com/user-attachments/assets/16e41b90-11a5-4f22-8c56-11162b9c0a5f”/>

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/cosmos3_edge)
* 添加 Cosmos3 Edge 模型支持 (#47181) by @aharvajoshi10 in [#47181](https://github.com/huggingface/transformers/pull/47181)


## 重大变更

对于线性注意力模型（Mamba、GDN、Conv-only 等），内核现在是可选的，而不是强制的，因此依赖自动内核选择的用户必须明确启用内核以维持之前的行为。
* 🚨 [`Kernels`] 重构所有线性 attn 模型和本机内核后备 (#47630) by @vasqu

缓存裁剪 API 现在只接受负值（相对偏移量）而不是绝对大小，因此直接调用裁剪方法的用户必须更新其代码以相应地传递负值。
* 🚨 [缓存] 裁剪只能用负值完成 (#47720) by @Cyrilvallez

T5 及其模型系列（MT5、LongT5 等）现在通过 `ALL_ATTENTION_FUNCTIONS` 支持 SDPA 和其他注意力后端，这意味着默认注意力实现可能会发生变化，依赖于之前的 eager-only 路径的用户应在需要时显式设置 `attn_implementation="eager"`。
* 🚨 为 T5 启用 SDPA（和其他注意力后端）并传播到 T5 系列（#47014），作者：@jiqing-feng

多个小型私有辅助函数（例如，`_is_url`、`_build_image_tokens`）已从多模式处理器文件中删除，因此直接导入这些私有函数的用户或下游库必须删除或替换这些引用。
* :rotating_light: 处理器更新其余部分 (#46556) by @zucchini-nlp


## 注意

此版本包含多项注意力修复和改进，包括纠正多头潜在注意力 (MLA) 缓存压缩、优化视觉模型中的 Flash Attention 最大序列长度计算，以及修复 CTRL flex-attention 和带有位置偏差的 SDPA 预填充中的错误。其他更改重构了线性注意力模型以实现更好的可维护性，使 Gemma 4 的异构注意力配置明确，并通过 metal-flash-sdpa 集成改进 MPS 支持。
* [修复] 修复多头潜在注意力 (MLA) (#47761) by @remi-or in [#47761]
* 将所有线性注意力模型重构为最新的最佳卷积标准 (#47452)，由 @Cyrilvallez 在 [#47452] 中编写
* 允许 MPS 上的 OpenAIPrivacyFilter 使用 metal-flash-sdpa (#46740)，作者：@ArthurZucker，在 [#46740]
* 对 Gemma 4 使用新的 `per_layer_config`，以便异构注意力配置是明确的 (#47384) by @hmellor in [#47384]
* 添加对 XPU 的分页注意力测试支持 (#47163) by @kaixuanliu in [#47163]
* 将 `value` 填充移动到需要它的注意接口中 (#47451) by @hmellor in [#47451]
* 简化线性注意力的函数调度 (#47450) by @Cyrilvallez in [#47450]
* 优化视觉注意力中的 Flash Attention max seqlen 计算 (#47170) by @ShareLer in [#47170]
* 修复了 CTRL flex-attention 生成中的 `BlockMask` 崩溃问题 (#46854)，作者为 @jiqing-feng，位于 [#46854]
* [CB] 自动将注意力实现切换到 flash (#47330) by @remi-or in [#47330]
* 通过@Cyrilvallez 在 [#47359] 中修复带有position_bias 的 sdpa 预填充 (#47359)


## 愿景

此版本中的视觉改进包括性能优化，例如通过消除冗余张量副本来加快视觉语言模型（GLM4V、MiniMaxM3-VL 等）的图像预处理速度，以及通过每次前向传播预先计算一次最大序列长度来实现更高效的 Flash Attention 可变长度路径。还应用了多个错误修复，包括纠正 Kosmos2/Kosmos2_5 嵌入合并中的数据类型对齐、修复 Phi4Multimodal 中的位置嵌入初始化回退、解决 Hunyuan-VL 中的 PIL 调整大小奇偶校验以及修补图像-文本到文本管道中的停止序列处理。


* 由 @zucchini-nlp 在 [#47573] 中模块化 qwen 格式视觉处理器 (#47573)
* 更新每日 CI Docker 图像以火炬 2.13.0 / CUDA 13.0 (#47738) by @ydshieh in [#47738]
* 通过 [#47691] 中的 @<NOT FOUND> 对齐 kosmos2 和 kosmos2_5 嵌入合并中的图像特征 dtype (#47691)
* 加速视觉语言模型的图像预处理 (#47453) by @labAxiaoming in [#47453]
* 通过 [#47509] 中的 @<NOT FOUND> 修复 Phi4Multimodal 中的视觉位置嵌入初始化宽度回退 (#47509)
* 修复 Hunyuan-VL PIL 图像调整大小奇偶性与参考预处理 (#47233) by @IMvision12 in [#47233]
* 通过 [#47032] 中的 @Sunt-ing 修复图像-文本到文本 stop_sequence 处理 (#47032)
* 在测试中重构图像加载，以使用 [#47218] 中的 @LevelVoid 的 load_test_image 助手 (#47218)


## 一代

进行了多项改进和错误修复，包括为 Qwen2.5/3-Omni 启用批量音频生成、允许滑动窗口缓存层与推测解码一起使用，以及修复 `generate()` 调用之间静态缓存持久性的内存开销。多个特定于模型的错误也得到了解决，包括 KyutaiSpeechToText、MusicgenForCausalLM、CTRL flex-attention 中的崩溃以及 EncoderDecoder 缓存和 OlmoHybrid 模型的辅助解码。


* 通过@Cyrilvallez 在 [#47604] 中调整 OlmoHybrid 以在生成中使用本机缓存 (#47604)
* [生成] 停止将静态缓存设置为节省内存的属性 (#47731) by @Cyrilvallez in [#47731]
* 添加对批处理 Qwen2.5/3-Omni 音频生成的支持 (#47186) by @IMvision12 in [#47186]
* [缓存] 允许回滚滑动窗口层以进行推测性解码 (#47447)，由 @Cyrilvallez 在 [#47447] 中提供
* 修复 KyutaiSpeechToText `generate()` 最后一个窗口中的形状不匹配问题 (#46952)，作者：@jiqing-feng in [#46952]
* 修复@jiqing-feng 在 [#46974] 中的 `MusicgenForCausalLM.generate()` (#46974) 中的拼写错误
* 修复了带有 EncoderDecoder 缓存和 OlmoHybrid 的模型的辅助解码 (#47361)，由 @Cyrilvallez 在 [#47361] 中提供


## 缓存

修复了多个与缓存相关的错误，包括更正 NemotronH 缺失的 `"mlp"` 层类型映射、解决混合模型的分块预填充和缓存延续期间跳过的循环层填充掩码问题，以及修复 `EncoderDecoderCache` 和 OlmoHybrid 模型的辅助解码问题。其他改进包括调整 OlmoHybrid 以使用本机缓存、启用滑动窗口层以支持推测解码回滚，以及停止将静态缓存存储为模型属性以减少意外的内存开销。

* [文档] MPS 图形缓存 (#47304) by @stevhliu in [#47304]
* 修复 NemotronH：在缓存层类型映射中注册 `"mlp"` (#47535) by @qgallouedec in [#47535]
* 修复了循环层填充掩码在连续转发时被跳过的问题（分块预填充、缓存延续）（#47087），由 @abcgco 在 [#47087] 中编写


## 内核

⚠️ `kernels` python 包很可能在不久的将来成为 `transformers[torch]` 所需的依赖项。这将帮助我们为所有用户提供最佳性能；内核只能从 HF 团队手动批准的 trusted 发布者处下载。请提前告知我们您遇到的任何问题，以便我们巩固我们的集成。

通过重构函数处理以使用层存储库、修复通过 `HfApi` 进行内核下载的 CI EROFS 后备补丁、解决 `causal_conv1d_fn` 中的位置参数冲突以及提升 FP8 内核版本以防止 NaN，提高了内核集成的稳健性。

* [conftest] 修复内核下载的 EROFS 回退（正确的拦截点）(#47794)，作者：@ydshieh，位于 [#47794]
* [conftest] 通过 HfApi (#47791) 修复内核下载的 EROFS 回退，作者为 @ydshieh，位于 [#47791]
* [`Kernels`] 由 @vasqu 在 [#46883] 中重构函数处理 (#46883)
* 内核和加载器的鲁棒性 (#47334) 由 @IlyasMoutawwakil 在 [#47334]
* 修复 `causal_conv1d_fn` 位置 `activation` 与集线器内核的 `seq_idx` 碰撞 (#47527) by @qgallouedec in [#47527]
* [`FP8`] 凹凸内核版本 (#47344) by @vasqu in [#47344]
* [文档] FlashAttention 内核回退 (#47345)，作者：@stevhliu，在 [#47345]


## 量化

量化支持得到了扩展，包括用于压缩张量模型的 FP8 内核、FP8 模块标准化和基于格式的压缩检测的修复以及多设备 MXFP4 反量化竞争条件修复。 GPTQ 和 MXFP4 测试也扩展到涵盖 Intel XPU 设备。


* 扩展测试/量化/gptq/test_gptq.py::GPTQTestCUDA 和测试/q… (#47166) by @sywangyi in [#47166]
* 压缩张量 fp8 (#47216) by @SunMarc in [#47216]
* 通过 @kmswin1 在 [#47578] 中修复门控范数 MLP 的 A.X-K2 fp8 models_to_not_convert 归一化 (#47578)
* [量化]：@rigen1048 在 [#47152] 中重构 is_quantization_compressed 以进行基于格式的检测 (#47152)
* 修复 `_convert_moe_packed_tensors` 中的多设备 mxfp4 反量化竞争 (#47423)，作者为 @kaixuanliu，位于 [#47423]


## 音频
Qwen2.5/3-Omni 现在支持批量音频生成，并且跨音频模型应用了多个错误修复，包括 Gemma4 音频功能合并中的 dtype 不匹配、AudioFlamingo3 中的 bfloat16 位置嵌入错误以及缺少 Voxtral 的后端需求防护。 VibeVoice ASR 处理器也进行了更新，使音频输入成为可选，并支持每个提示多个音频。


* feat[vLLM x v5]：使音频可选并支持 VibeVoice ASR 处理器中的多个音频 (#47483) by @harshaljanjani in [#47483]
* 修复 masked_scatter 中的 Gemma4 音频功能 dtype 不匹配问题 (#47482)，作者为 @danielhanchen，位于 [#47482]
* [修复] 修复要求音频功能和过程 (#47113) by @eustlb in [#47113]
* [AudioFlamingo3] 修复音频编码器位置嵌入中的 bfloat16 dtype 不匹配问题 (#47258) by @snkii in [#47258]


## 并行化

通过自动生成的 FSDP 计划，扩展了 94 个 `ForCausalLM` 模型类的 FSDP 支持，添加了端到端 FSDP 测试，包括分布式检查点保存/加载和生成，并引入了专用的 FSDP CI 作业。此外，修复了模型并行性下 `create_bidirectional_sliding_window_mask` 中的设备不匹配错误，并解决了具有绑定嵌入的模型的张量并行推理问题。


* 当后端为 mps 时跳过 fsdp 测试 (#47601) by @3outeille in [#47601]
* 修复 `create_bidirectional_sliding_window_mask` 中模型并行设备不匹配的问题 (#47560) by @abcgco in [#47560]
* 通过 @3outeille 在 [#47165] 中将 FSDP 计划添加到所有型号 (#47165)
* 通过 @3outeille 在 [#47503] 中修复绑定嵌入的 TP 推断 (#47503)
* 添加 FSDP CI 和端到端 FSDP 测试 + 通过 @3outeille 在 [#47357] 中保存 fsdp (#47357)


## 代币化

此版本通过 AutoTokenizer 添加了对 Mistral 的“tekken”标记生成器格式的本机支持，修复了 CodeLlama 标记生成器错误（在解码过程中错误地删除了前导空格），并修复了由于未转义标记生成器文件名被用作 `from_pretrained` 中的正则表达式模式而导致的潜在 ReDoS 漏洞。


* [Mistral] 通过 @juliendenize 在 [#47507] 中为 AutoTokenizer 添加原生 tekken tokenizer 支持 (#47507)
* 修复了 CodeLlama 分词器在解码时丢弃前导空格的问题 (#47488)，由 @SuryanshSS1011 在 [#47488] 中完成
* 通过 escaping 标记化器文件名修复潜在的 ReDoS，该文件名用作正则表达式模式 (#47498)，由 @hameedibrh 在 [#47498] 中


## 发球

改进了 `serve` 聊天解析，以在处理工具调用、推理和内容的单个响应解析器下统一流式和非流式路径，从而简化了新模型支持的添加。此外，通过修复 Slack 有效负载中捕获的 GitHub API 诊断输出并添加速率限制弹性来强化每日 CI 报告，以防止在对大型作业矩阵进行分页时出现报告失败。


* CI：将 GitHub API 诊断记录到 stderr (#47635)，由 @tarekziade 在 [#47635] 中
*更新服务聊天解析（#46267）由@SunMarc在[#46267]
* ci：针对 GitHub API 速率限制强化每日 CI 报告（#47382），作者：@tarekziade，位于 [#47382]


## 错误修复和改进

* 修复了 cached_files 在只读文件系统 (EROFS) 上默默返回过时文件的问题 (#47852)，作者为 @ydshieh，位于 [#47852]
* 由 @ydshieh 在 [#46539] 中修复 `PhimoeIntegrationTest` (#46539)
* 在文档设备无关的情况下制作示例 (#47812) by @kaixuanliu in [#47812]
* 在 gemma4 测试中取消 XPU 的确定性 (#47790) by @kaixuanliu in [#47790]
* 在链接后序列化 post-mlinter-review 以避免 PR 描述竞赛 (#47832) by @ydshieh in [#47832]
* 使用内容哈希进行 mlinter 审查重复数据删除 (#47830) by @ydshieh in [#47830]
* 通过 @zucchini-nlp 在自动文档字符串中添加新参数 (#47737) [#47737]
* 在 [#47656] 中添加 @guarin 的 check_model_inits.py (#47656)
* 在安装指南中添加 xpu (#47785) by @sywangyi in [#47785]
* 修复 mlinter 审核工作：在下载工件之前签出 (#47820) by @ydshieh in [#47820]
* 将 mlinter 调查结果发布为内联 PR 审查评论 (#47819)，由 @ydshieh 在 [#47819] 中发布
* 修复 ci 风格 (#47818) by @vasqu in [#47818]
* 由 @kmswin1 在 [#47810] 中修复 axk2 索引器规范 (#47810)
* 开放 fla 对 XPU 的支持，以受益于 @kaixuanliu 在 [#47799] 中的加速 (#47799)
* [文档] 由 @samyuktahegde 在 [#47789] 中更新 BatchEncoding.to() 类型注释和文档字符串 (#47789)
* 修复@Cyrilvallez 的 linting (#47807) [#47807]
* 修复了某些模型中的补丁（#47798），由 @zucchini-nlp 在 [#47798] 中
* 将 post-mlinter-review 作业添加到 post-dashboard-link 工作流程 (#47800) by @ydshieh in [#47800]
* 将 torchao 集成迁移到已删除的 torchao.dtypes (#47797)，由 @vkuzo 在 [#47797] 中
* [conftest] 还将 @ydshieh 的 snapshot_download 包装为 EROFS 后备 (#47796) [#47796]
* 修复 MI355 CI：由 @Abdennacer-Badaoui 在 [#47792] 中将 hf-workflows 引脚提升至 NUM_SLICES=4 (#47792)
* [修复] get_number_of_image_patches 中的错误类型提示 (#47788) by @remi-or in [#47788]
* 修复@guarin 在 [#47775] 中的 Dac 卸载测试 (#47775)
* [修复] @remi-or 在 KimiK25 (#47786) 中交换高度和宽度 [#47786]
* 删除悬空文件和文件夹 (#47764) by @Cyrilvallez in [#47764]
* 修复由@Cyrilvallez 在 [#47755] 中人工智能编写的转换映射 (#47755)
* 由 @itazap 在 [#47677] 中更新 PR 47507 (#47677) 的 Mistra 通用版本
* 修复模型文件中的拼写/语法（第 3/3 批）(#47684)，作者：@Rocketknight1，位于 [#47684]
* 修复核心库、示例和实用程序中的拼写/语法 (#47685)，作者：@Rocketknight1，位于 [#47685]
* 修复模型文件中的拼写/语法（第 2/3 批）(#47683)，作者：@Rocketknight1，位于 [#47683]
* 由 @IlyasMoutawwakil 在 [#47769] 中更新 sonicmoe 版本 (#47769)
* 通过@DhanushPillay 在[#47701]中清理compressed_tensors 中的reverse_op fixme (#47701)
* PR CI 带有火炬 2.13 (#47767) by @ydshieh in [#47767]
* 由 @IlyasMoutawwakil 在 [#47726] 中导入 utils 编译修复 (#47726)
* 修复 DBRX MoE 隐藏大小和专家 GLU 转置 (#47671) by @kaixuanliu in [#47671]
* 通过@IlyasMoutawwakil 在 [#47762] 中修复多令牌解码合并 (#47762)
* 修复：删除与 @capture_out 冲突的冗余 @can_return_tuple… (#47733) by @guarin in [#47733]
* 修复处理器配置嵌套键回退（#47628），作者：@YunzhuLu [#47628]
* [CI - 调试] 跳过 CPU 运行程序的 /transformers 相关步骤 (#47759) by @ydshieh in [#47759]
* [CI] 将 CPU 运行程序支持添加到 ssh-runner 工作流程 (#47757)，作者为 @ydshieh，位于 [#47757]
* 简化反向权重转换 (#47725) by @Cyrilvallez in [#47725]
* 删除 @Cyrilvallez 中 inv_freq 的无用 linting (#47753) [#47753]
* 在 [#47722] 中 @Cyrilvallez 处处使用显式 nn.Buffer 进行模块化 (#47722)
* 删除陈旧和冗余的 _no_split_modules 条目 (#47645) by @guarin in [#47645]
* Executorch 导出器修复 (#47243) 由 @IlyasMoutawwakil 在 [#47243]
* 由 @sywangyi 在 [#47500] 中修复 xpu 中的 Acc 修复 (#47500)
* 由 @sywangyi 在 [#47502] 中更新 xpu torch2.13 的 Docker 文件 (#47502)
* feat[vLLM]：支持剩余旧格式处理器中的文本替换偏移量 (#47614) by @harshaljanjani in [#47614]
* 修复 torch < 2.8 上的 Transformers.exporters 中的 ImportError (#47711) by @Neal006 in [#47711]
* 修复了 @kaixuanliu 在 [#47727] 中对 axk1 和 axk2 的失败测试 (#47727)
* 修复由 @kaixuanliu 在 [#47723] 中对 Granite_swa 和 Granitemoe_swa 进行的失败测试 (#47723)
* 跳过无效的测试用例进行初步测试 (#47493) by @kaixuanliu in [#47493]
* [文档] 修复 BatchEncoding 文档不一致问题 (#47647)，作者：@samyuktahegde，位于 [#47647]
* 修复模型文件中的拼写/语法（第 1/3 批）(#47682)，作者：@Rocketknight1，位于 [#47682]
* 修复英语文档中的拼写/语法 (q → z) (#47681) by @Rocketknight1 in [#47681]
* 修复英语文档中的拼写/语法 (h → p) (#47680) by @Rocketknight1 in [#47680]
* 修复英语文档中的拼写/语法 (a → g) (#47679) by @Rocketknight1 in [#47679]
* 修复 @DhanushPillay 中的 npu 检查 (#47587) [#47587]
* 修复：在 8 个多模式处理器（和→或）中正确的文本输入验证逻辑（#47663），作者：@AbdullahRasheed45 in [#47663]
* 通过 [#47673] 中的 @<NOT FOUND> 修复七个多模态模型的 masked_scatter 中的特征 dtype 不匹配问题 (#47673)
* [文档] 存储和加载聊天模板 (#47650) by @stevhliu in [#47650]
* 添加 amd quark 配置类更改 (#47322) 由 @debasisdwivedy 在 [#47322]
* 修复压缩张量 impl (#47652) by @SunMarc in [#47652]
* 在 wav2vec2 解码路径中提升特殊令牌查找，并在 wav2vec2_phoneme 中删除死过滤器 (#47557)，由 @ishan-1010 in [#47557]
* 通过导入分布式库来消除弹性警告 (#47665) by @3outeille in [#47665]
* 修复 PR CI 仪表板工作流程中缺少的 github_utils.py 下载 (#47668)，由 @ydshieh 在 [#47668] 中
* 可导出的 kimi (#47096) 由 @IlyasMoutawwakil 在 [#47096]
* 更好地保护处理由 @3outeille 在 [#47619] 中使用 USE_DISTRIBUTED=0 (#47619) 编译的 torch
* 删除@Cyrilvallez 在 [#47664] 中的 gemma4 警告 (#47664)
* [聊天解析] 从调用工具的 JSON 架构中输入内联工具调用参数 (#47529)，作者为 @yonigozlan，位于 [#47529]
* 改进流式传输和多重处理的 Trainer DataLoader 控件 (#47164)，作者：@muyihao，位于 [#47164]
* 由 @Rocketknight1 在 [#47644] 中更新维护者列表 (#47644)
* 允许 RoBERTa 等的 DataCollatorWithFlattening 上的position_ids_start=2 (#47525) by @tomaarsen in [#47525]
* 删除 [#47642] 中 @Cyrilvallez 的 Rotary 警告 (#47642)
* 如果不在预填充中，则在prepare_inputs_for_ Generation 中原生删除多模式输入 (#47622) by @Cyrilvallez in [#47622]
* 通过 @Cyrilvallez 在 [#47598] 中简化所有 Rotary 模块 (#47598)
* [文档] 服务时的response_template (#47626) by @stevhliu in [#47626]
* [文档] MTP 支持 (#47301) by @stevhliu in [#47301]
* 修复 GPT-2 c_proj 深度缩放初始化 (#47459) 由 @DavidJohnQuinlan 在 [#47459]
* 由 @IlyasMoutawwakil 在 [#47623] 中修复 fp8_线性编译性 (#47623)
* 再见火炬 2.4 (#47609) by @ydshieh in [#47609]
* 矢量化 NoRepeatNGramLogitsProcessor 并删除其主机同步 (#47571) by @hameedibrh in [#47571]
* 修复 CUDA Graph 从标量张量分配中破坏主机到设备的复制 (#47547)，由 @hmellor 在 [#47547] 中
* 通过 @zucchini-nlp 在 [#47608] 中修复一些处理器 (#47608)
* CI：在 [#47610] 中添加 @tarekziade 的 serge 审查中继工作流程和审查规则 (#47610)
* [文档] 导出器 (#47374) by @stevhliu in [#47374]
* CI：使用单个函数进行 GH 调用 (#47474)，作者：@tarekziade，位于 [#47474]
* 通过@3outeille在[#47570]中删除分布式（#47570）的冗余防护
* 修复了 mamba 包的模块化 (#47494)，由 @Cyrilvallez 在 [#47494] 中
* 删除 [#47581] 中 @zucchini-nlp 中不推荐使用的 Kimi 转换 (#47581)
* CI：使用 Transformers-ci 日常工作流程与 OTEL (#47360) by @tarekziade in [#47360]
* 通过@guan404ming在[#47580]中修复_check_special_mm_tokens中的慢速张量路径（#47580）
* CI：让我们在晚上 10 点运行集成失败 cron (#47537) by @tarekziade in [#47537]
* @zucchini-nlp 在 [#46912] 中对 RoPE (#46912) 进行更好、更广泛的测试
* 修复 mamba2 系列解码并简化所有重塑操作 (#47569) by @Cyrilvallez in [#47569]
* [DiffusionGemma] 将解码器填充掩码转换为 bool (#47295) by @kashif in [#47295]
* 一般维护 (#47517) 由 @zucchini-nlp 在 [#47517]
* 通过 @tarekziade 在 [#47568] 中使用 DistributedConfig (#47568) 修复了基准测试脚本
* 修复@kaixuanliu 在 [#47284] 中对 mimo_v2_flash 的失败测试 (#47284)
* 通过 @juliendenize 在 [#47397] 中使 tokenization_mistral_common 可以在不安装 mistral_common 的情况下导入 (#47397)
* 在 check_bad_commit.py 中使用 --flake-runs=1 进行 PR 评论 CI (#47522)，由 @ydshieh 在 [#47522] 中
* 弃用@Rocketknight1在[#47320]中的旧response_schema（#47320）
* 修复：通过 @kfojcik-intel 在 [#46026] 中为 _LazyConfigMapping 添加 pickle 支持以实现多重处理 (#46026)
* 删除 [#47518] 中 @zucchini-nlp 的旧弃用 (#47518)
* 在 PR 评论 CI (#47521) 中仅运行 @slow 测试，作者为 [#47521] 中的 @ydshieh
* 修复@hmellor 在 [#47519] 中的错误类型提示 (#47519)
* 通过 @remi-or 在 [#47291] 中弃用 gen 配置中的 CB 配置 (#47291)
* [卸载] [错误修复] 修复@kylesayrs 在 [#47336] 中完全卸载的模型保存 (#47336)
* CI：修复 torchaudio pinning + rnnt 中的正确中断（#47422），作者：@tarekziade，位于 [#47422]
* 修复 Qwen2.5-Omni Token2Wav DiT 旋转嵌入布局（交错 cos/sin）（#47403），由 @HenryVarro666 在 [#47403] 中
* CI：通过 @tarekziade 在 [#47492] 中为 serge 验证调用者添加重现模式 (#47492)
* [修复][whisper]: 修复 @eustlb 在 [#46795] 中的 max_new_tokens 处理 (#46795)
* 隔离 MLA KV 扩展，使其更容易被 @hmellor 在 [#47460] 中绕过 (#47460)
* 修复编码器解码器模型的损失对齐和 Trainer 令牌计数 (#46903)，由 @OmkumarSolanki 在 [#46903] 中
* 修复了 HunyuanVL 的 torchvision 后端 (#47499) by @Mi-Jiazhi in [#47499]
* [DiffusionGemma] 支持梯度检查点 (#46572) by @kashif in [#46572]
* 修复 @kaixuanliu 在 [#47268] 中对 zaya 的失败测试 (#47268)
* Tipsv2_dpt：修复@kaixuanliu 在 [#47292] 中对 XPU 的失败测试 (#47292)
* 修复了一些与 XPU Expectations 相关的失败测试用例 (#47173) by @kaixuanliu in [#47173]
* 修复：在 PyTorch < 2.5 (#47481) 的 sharding_utils.py 中保护 DTensor 导入 [#47481] 中的 @<NOT FOUND>
* CPU 可能会在不连续的量值上产生缓慢的路径 (#47351) by @vbayanag in [#47351]
* 将聊天管理调用路由到服务根 (#47138) (#47303) by @dhruv7477 in [#47303]
* 修复：liger 在评估过程中不必要地在 VRAM 中具体化 logits，导致 OOM (#45273) by @excepshenal in [#45273]
* 修复将标签平滑与梯度累积相结合时的梯度膨胀 (#47261) by @Incheonkirin in [#47261]
* 修复不可 32 整除位宽的 MoE 专家解压缩 (#47315)，由 @KKothuri 在 [#47315] 中
* [Qwen3ASR] 添加热词解析，并修复语言解析和训练。 （#47111）由 @ebezzam 在 [#47111]
* 删除 [#46917] 中 @cyyever 已弃用的训练参数和 `is_fast` 属性 (#46917)
* `get_image_features` (#46405) 中 @zucchini-nlp 的一致输出形状 [#46405]
* 修复 qwen3_omni_moe 模型失败的测试用例 (#47449) by @kaixuanliu in [#47449]
* 通过 [#47395] 中的 @<NOT FOUND> 修复 GitForCausalLM (#47395) 中的双班训练损失
* 修复 CohereASR 训练损失双班问题（与 Moonshine 修复 #46784 相同）（#46895），由 @sharmax-vikas 在 [#46895] 中修复
* 当 `group_by_length` 对于可迭代数据集被默默忽略时发出警告 (#47379) by @qgallouedec in [#47379]
* 由 @molbap 在 [#46607] 中更新错误报告列表 (#46607)
* 修复：通过@hai1222在[#47420]中删除特殊令牌生成器中无法访问的返回（#47420）
* 通过 @vasqu 在 [#47454] 中将 Harry 添加到慢速 CI (#47454)
* BLT：矢量化补丁长度处理（#47385）由@sj0618在[#47385]中
* 修复 `TrackioCallback` 在训练结束后无法记录评估指标的问题 (#46935)，作者为 @lewtun，位于 [#46935]
* [Kimi] 在 [#47383] 中添加 @zucchini-nlp 的集成测试 (#47383)
* 添加分布式运行时实用程序和 DistributedMixin (#47352) by @3outeille in [#47352]
* 由 @aharvajoshi10 在 [#47399] 中修复 Cosmos 3 Edge Patch 打包顺序 (#47399)
* 由 @hmellor 在 [#47435] 中修复 DeepSeek v2 和 Mistral 4 的纱线 `mscale_all_dim` (#47435)
* 在六个慢标记生成器中，从每个标记循环中提升特殊标记查找 (#47425)，作者为 @ishan-1010，位于 [#47425]
* 修复 Quicktour.md 中的拼写错误和变量命名 (#47418)，作者为 [#47418] 中的 @yashasvi-srivastava21
* 通过 [#47074] 中的 @Sunt-ing 标准化 AnyToAnyPipeline 中的多模式输入键 (#47074)
* 修复 Aria 检查点键转换映射 (#47151) by @sywangyi in [#47151]
* 扩展测试/模型/qwen3_next/test_modeling_qwen3_next.py::Qwen3Next… (#47184) by @sywangyi in [#47184]
* CI：在 [#47381] 中添加 @tarekziade 的 serge verify (GPU) 调用者工作流程 (#47381)
* 修复低精度 dtypes (bf16/fp16) 的 orthogonal_ init (#47252) by @janbernloehr in [#47252]
* [文档] 修复 fast_tokenizers 中的解码示例和预期输出 (#47369)，由 @samyuktahegde 在 [#47369] 中
* [serge] 修复了模型 `whisper` 的 20 个集成测试因 `output_mismatch` 失败的问题（列表输出不同 (10)，其他 (6) (#47150)，由 @sergereview[bot] 在 [#47150] 中编写）
* [Mistral] 通过@juliendenize 将 MistralConverter 移至集成/mistral/ 包 (#46603) [#46603]
* 修复 GLM 视频帧填充的时间补丁 (#47141)，由 @labAxiaoming 在 [#47141] 中
* [文档] Inkling (#47350) by @stevhliu in [#47350]
* 修复每日 CI 报告问题 (#47364)，作者：@tarekziade，位于 [#47364]
* [`peft`] 支持 PEFT 模型的 key_mapping (#46766) by @tomaarsen in [#46766]
* 修复@kaixuanliu 在 [#47356] 中对 Tipsv2 (#47356) 的模型测试
* 修复 TimesFM 2.5 window_size AttributeError (#47363) by @kashif in [#47363]
* 修复：当 @SebTardif 在 [#47069] 中取消设置 id2label 时，允许 num_labels 属性返回 None (#47069)
* [测试] 修复 SmolVLM (#44731) 中 @Defalt-Meh 在 [#44731] 中从 numpy 数组列表创建视频张量速度缓慢的问题
* 通过 [#47366] 中的 @vasqu 更新 main 上的开发版本 (#47366)
* 通过@IlyasMoutawwakil 在 [#47323] 中修复多个设备上的 deepgemm (#47323)
* ci：在 CI 运行查找中处理空的 GitHub 令牌 (#47362) by @tarekziade in [#47362]
* 修复@ArthurZucker 的 inkling 特征提取器 (#47349) [#47349]

## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @ydshieh
    *修复cached_files在只读文件系统（EROFS）上默默返回过时文件（#47852）
    * 修复 `PhimoeIntegrationTest` (#46539)
    * 在链接后序列化 post-mlinter-review 以避免 PR 描述竞争 (#47832)
    * 使用内容哈希进行 mlinter 审查重复数据删除 (#47830)
    * 修复 mlinter 审查工作：在工件下载之前签出 (#47820)
    * 将 mlinter 调查结果发布为内联 PR 审核评论 (#47819)
    * 将 post-mlinter-review 作业添加到 post-dashboard-link 工作流程 (#47800)
    * [conftest] 还包装 snapshot_download 以用于 EROFS 后备 (#47796)
    * [conftest] 修复内核下载的 EROFS 回退（正确的拦截点）(#47794)
    * [conftest] 修复通过 HfApi 进行内核下载的 EROFS 回退 (#47791)
    * PR CI 带割炬 2.13 (#47767)
    * [CI - 调试] 跳过 CPU 运行程序的 /transformers 相关步骤 (#47759)
    * [CI] 向 ssh-runner 工作流程添加 CPU 运行程序支持 (#47757)
    * 更新每日 CI Docker 图像以火炬 2.13.0 / CUDA 13.0 (#47738)
    * 修复 PR CI 仪表板工作流程中缺少的 github_utils.py 下载 (#47668)
    * 再见火炬 2.4 (#47609)
    * 在 check_bad_commit.py 中使用 --flake-runs=1 进行 PR 评论 CI (#47522)
    * 在 PR 评论 CI 中仅运行 @slow 测试 (#47521)
* @kaixuanliu
    * 在文档设备无关的情况下制作示例 (#47812)
    * 在 gemma4 测试中取消 XPU 的确定性 (#47790)
    * 对 XPU 开放 fla 支持以受益于加速 (#47799)
    * 修复 DBRX MoE 隐藏大小和专家 GLU 转置 (#47671)
    * 修复 axk1 和 axk2 的失败测试 (#47727)
    * 修复 Granite_swa 和 Granitemoe_swa 的失败测试 (#47723)
    * 跳过无效的测试用例进行初步测试 (#47493)
    * 修复 mimo_v2_flash 失败的测试 (#47284)
    * 修复 zaya 失败的测试 (#47268)
    * Tipsv2_dpt：修复 XPU 的失败测试 (#47292)
    * 修复一些与 XPU 期望相关的失败测试用例 (#47173)
    * 添加对 XPU 的分页注意力测试支持 (#47163)
    * 修复 `_convert_moe_packed_tensors` 中的多设备 mxfp4 反量化竞争 (#47423)
    * 修复 qwen3_omni_moe 模型失败的测试用例 (#47449)
    * 修复 Tipsv2 的模型测试 (#47356)
* @vasqu
    * 修复 ci 样式 (#47818)
    * 🚨 [`Kernels`] 重构所有线性 attn 模型和本机内核后备 (#47630)
    * [`Kernels`] 重构函数处理 (#46883)
    * 添加 SKT 的 AXK2 (#47528)
    * 将 Harry 添加到慢速 CI (#47454)
    * 更新 main 上的开发版本 (#47366)
    * [`FP8`] 凹凸内核版本 (#47344)
* @kmswin1
    * 修复 axk2 索引器规范 (#47810)
    * 修复门控范数 MLP 的 A.X-K2 fp8 models_to_not_convert 标准化 (#47578)
    * add_axk1 (#46867)
* @雷米-或
    * [修复] 修复多头潜在注意力 (MLA) (#47761)
    * [修复] get_number_of_image_patches 中的错误类型提示 (#47788)
    * [修复] KimiK25 中交换高度和宽度 (#47786)
    * 弃用 gen 配置中的 CB 配置 (#47291)
* [CB] 自动将注意力实现切换到 flash (#47330)
* @juliendenize
    * [Mistral] 为 AutoTokenizer 添加原生 tekken tokenizer 支持 (#47507)
    * 使 tokenization_mistral_common 可以在没有安装 milistral_common 的情况下导入 (#47397)
    * [Mistral] 将 MistralConverter 移至 Integrations/mistral/ 包中 (#46603)
* @IMvision12
    * 添加对批量 Qwen2.5/3-Omni 音频生成的支持 (#47186)
    * 修复 Hunyuan-VL PIL 图像调整大小奇偶校验与参考预处理 (#47233)
* @jiqing-feng
    * 🚨 为 T5 启用 SDPA（和其他注意力后端）并传播到 T5 系列 (#47014)
    * 修复 KyutaiSpeechToText `generate()` 最后一个窗口中的形状不匹配问题 (#46952)
    * 修复 `MusicgenForCausalLM.generate()` 中的拼写错误 (#46974)
    * 修复 CTRL flex-attention 生成中的 `BlockMask` 崩溃 (#46854)
* @tarekziade
    * CI：将 GitHub API 诊断记录到 stderr (#47635)
    * CI：添加 serge 审核中继工作流程和审核规则 (#47610)
    * CI：使用单个函数进行 GH 调用 (#47474)
    * CI：将 Transformers-ci 日常工作流程与 OTEL 结合使用 (#47360)
    * CI：让我们在晚上 10 点运行集成失败 cron (#47537)
    * 使用 DistributedConfig 修复了基准测试脚本 (#47568)
    * CI: 修复 torchaudio pinning + rnnt 中的正确中断 (#47422)
    * CI：添加重现模式以验证调用者 (#47492)
    * CI：添加 serge 验证 (GPU) 调用者工作流程 (#47381)
    * ci：针对 GitHub API 速率限制强化每日 CI 报告 (#47382)
    * 修复每日 CI 报告问题 (#47364)
    * ci：在 CI 运行查找中处理空 GitHub 令牌 (#47362)
* @daviswer
    * 添加 Granite-swa 和 Granitemoe-swa 模型支持 (#47179)
* @ShareLer
    * 优化视觉注意力中 Flash Attention max seqlen 计算 (#47170)
* @aharvajoshi10
    * 修复 Cosmos 3 Edge Patch 打包顺序 (#47399)
    * 添加 Cosmos3 Edge 模型支持 (#47181)

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.15.0` · 📅 发布：2026-08-10 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.15.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
