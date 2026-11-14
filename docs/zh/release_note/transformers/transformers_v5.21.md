---
title: "transformers v5.21"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.21"
version: "v5.21"
published: "2026-10-26"
type: "minor"
lang: "zh"
---

# transformers v5.21

# 发布v5.21.0


## 添加新模型

### MiniCPM-OCR

MiniCPM-OCR 是 OpenBMB MiniCPM-V 系列的文档理解模型。它保留了 MiniCPM-V 4.6 架构，将 SigLIP 视觉编码器和窗口注意力合并器与 Qwen3.5 语言模型配对。它专门用于阅读文本密集的图像，例如扫描页面、屏幕截图、收据和表格。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/minicpm_ocr) | [论文](https://huggingface.co/papers/2509.18154)
* @guarin 在 [#49920](https://github.com/huggingface/transformers/pull/49920) 中的壮举测试 (#49920)

### 燧石
<img width="3200" height="1800" alt="flint_benchmarks_nvfp4" src="https://github.com/user-attachments/assets/c45955fb-dfcc-4266-8223-b0d70efb9a5b" />

Flint 是 Recursive 的专家混合语言模型。与标准 SwiGLU MoE 转换器（例如 Qwen3-MoE）相比，它使用混合注意力（滑动窗口注意力，在当前令牌和大多数层中的前 512 个令牌上旋转嵌入，以及在剩余层中没有位置编码的完全注意力）。它还学习了注意力接收器，如 GPT-OSS 中那样，具有每头 RMS 标准化查询和密钥。每个稀疏层通过 sigmoid 分数将令牌路由到 256 个专家中的 6 个，并添加一个非门控共享专家，前两层是密集的。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/flint)
* 添加火石模型支持。 (#49824) 作者：@lovishmadaan 在 [#49824](https://github.com/huggingface/transformers/pull/49824)

### UltraVBert

UltraVBert 通过将 UltraBERT 文本编码器与 SigLIP 视觉编码器配对来扩展 ModernVBert，以实现视觉文档理解和检索。其图像处理器将每个页面分为 512 像素图块和全局视图。连接器将每个 4 x 4 视觉块合并为一个令牌，因此一个图块变成了 64 个图像令牌，并且 RMS 将它们标准化为 UltraBERT 令牌嵌入的规模。 `max_image_tiles` 设置（默认为 27）限制每页的图块数量。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/ultravbert)
* 在 [#49685](https://github.com/huggingface/transformers/pull/49685) 中添加 @athrael-soju 的 UltraVBERT (#49685)

### 梯度声子 TTS

Gradium Phonon TTS 是 Gradium 的设备上文本转语音模型系列，使用 Pocket TTS 配方进行训练。因果转换器读取语音提示和文本，然后通过单步流头以 12.5 Hz 每步发出一个连续的 32 维潜在音频，并且语音结束头决定话语何时结束。 Pocket TTS 音频标记器将潜在音频解码为 24 kHz 音频。与袖珍 TTS 不同，语音调节使用来自单独的未发布的扬声器编解码器的 512 维潜在信息，因此语音作为预先计算的潜在信息出现，无法从录音中克隆。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/gradium_phonon_tts)
* 添加 GradiumPhononTTS (#49791) by @eustlb in [#49791](https://github.com/huggingface/transformers/pull/49791)

### 袖珍 TTS

Pocket TTS 是 Kyutai 的 100M 参数文本转语音模型，构建为连续音频语言模型，在 CPU 上运行速度比实时速度更快。因果变压器通过单步流头发出每帧一个连续的潜在音频（12.5 Hz），并且语音结束头决定何时停止。基于 Mimi 的音频分词器对语音提示进行编码，并将生成的潜在信号解码为 24 kHz 音频。释放两个流头，拉格朗日自蒸馏（默认）和漂移，并且可以从录音中克隆语音，作为预先计算的潜在变量传递，或从缓存的 KV 状态加载。
**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/pocket_tts) | [论文]（https://huggingface.co/papers/2509.06926（连续音频语言模型论文，arXiv 2509.06926）。这是文档链接的唯一论文，它描述了 Pocket TTS 所属的架构系列。文档没有引用单独的 Pocket TTS 技术报告。） [博客文章]（无。文档未链接任何官方博客文章。它仅指向 https://github.com/kyutai-labs/pocket-tts. 的原始代码存储库）
* 在 [#49589](https://github.com/huggingface/transformers/pull/49589) 中添加 @eustlb 的 PocketTTS (#49589)

### 袖珍 TTS 音频标记器

Pocket TTS 音频标记器是 Pocket TTS 使用的编解码器。它具有 Mimi 的架构（SEANet 卷积加上每侧的小型因果变换器），但其残差向量量化器被连续 32 维瓶颈（来自连续音频语言模型的 VAE-GAN）取代。它将 24 kHz 音频转换为 12.5 Hz 的潜在音频，并将其解码回音频。它充当`PocketTTSProcessor`的`audio_tokenizer`，对语音提示进行编码并解码生成的潜伏，并且其编码器和解码器也可以自行加载。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/pocket_tts_audio_tokenizer) | [论文](https://huggingface.co/papers/2509.06926（连续音频语言模型，该分词器使用其 VAE-GAN；arxiv：https://arxiv.org/abs/2509.06926））
* 添加 PocketTTSAudioTokenizer (#49588) by @eustlb in [#49588](https://github.com/huggingface/transformers/pull/49588)


## 重大变更

修复了 Gemma4 处理器导入（Gemma4、Gemma4 Unified 和 EmbeddingGemma2 处理器），以便 `from transformers import *` 在具有 `PIL` 但没有 `torch` 的环境中不再失败；无需用户操作。
* :rotating_light: 修复 gemma4 交叉导入导致导入失败，没有 `torch` 但有 `PIL` (#49748) by @Sai-Suraj-27

在 `QuantizedCache` 中添加了 `"fp8"` 后端，以及 `quanto` 和 `hqq`，它将 KV 状态存储在 `torch.float8_e4m3fn` 中，每个张量有一个尺度；使用 `cache_implementation="quantized"` 和 `cache_config={"backend": "fp8"}` 启用它。
* 🚨为 `QuantizedCache` 添加 FP8 后端（#48677），作者：@jiqing-feng

张量并行现在具有专用的嵌入样式，默认情况下对每个模型的输入嵌入进行分片，并支持不能被 TP 大小整除的宽度，因此 `ColwiseParallel` 和 `RowwiseParallel` 现在仅适用于线性层；将它们应用于嵌入的自定义 TP 计划必须切换到新的嵌入样式。
* 🚨 TP：为嵌入提供自己的样式，默认情况下分片输入嵌入，以及不除以 TP 大小的分片宽度 (#49570) by @IlyasMoutawwakil

现在，每个 MoE TP 和 EP 计划都对其专家进行了分片，因此模型不再保留每个级别的所有专家，并且新的 `test_moe_parallel_plans_shard_experts` 测试强制执行此操作；自定义或下游 MoE 并行计划必须添加专家分片才能通过它并避免浪费内存。
* 🚨 MoE：对每个 TP/EP 计划中的专家进行分片，并对其进行测试 (#49206)，作者：@IlyasMoutawwakil



## 缓存

此版本改进了整个库的缓存处理。 Flash Attention 现在可与静态缓存配合使用，BLOOM 不再因静态缓存或编译生成而崩溃，分块预填充支持缓存延续，并且 Qwen4-Exp 索引器的位置历史与其缓存的键保持一致。线性注意力缓存还获得了新的 getter（`is_recording_past`、`get_recurrent_state`、转换状态访问），可以停止暴露缓存内部并为分页 c 做好准备


* [FA] 通过静态缓存修复 FA (#49998) by @Cyrilvallez in [#49998]
* [文档] CB 缓存行为 (#49025) by @stevhliu in [#49025]
* [CB] 通过不在完整缓存上计算注意力来减少预热时间 (#49853) by @remi-or in [#49853]
* 通过 [#49840] 中的 @takeing-lying-flat 修复 Qwen4-Exp 索引器位置缓存生命周期 (#49840)
* [缓存] 线性 attn 缓存：在 [#49375] 中使用 @remi-or 的新 getter (#49375)
* [缓存] 通过 @remi-or 在 [#49309] 中获取转换状态 (#49309)
* [缓存] 通过 @remi-or 在 [#49306] 中添加 get_recurrent_state (#49306)
* [缓存] 在 [#49305] 中添加 @remi-or 的 is_recording_past (#49305)
* 修复 BLOOM 崩溃与静态缓存/编译生成 (#49481) by @kaixuanliu in [#49481]
* 允许缓存继续进行分块预填充 (#49662) by @Cyrilvallez in [#49662]


## 愿景

视觉图像处理器现在将 PNG 透明度合成到白色上，而不是暴露黑色像素，并且 `background_color` 在 DeepSeek-VL 和 Janus 处理器中正确保留。模型修复涵盖了当图像标记不是补丁大小的倍数时的 SmolVLM 的 `inputs_merger`、批量波束搜索期间的 HunYuan-VL 图像分配以及 TP/EP 下的 Ernie4.5-VL-MoE 专家分片。 DETR


* 共享 RGB 转换和图像处理器中的复合透明度 (#49079) by @Nikhi00718 in [#49079]
* [Fetcher] 修复动态解析图像处理器缺失的测试 deps (#49826) by @ydshieh in [#49826]
* 修复（vision）：通过 @harshaljanjani 中的 from_pretrained (#49830) 路由 DETR 转换脚本 [#49830]
* 通过@tritsystem 在 [#49767] 中修复 DeepSeek-VL 和 Janus 图像处理器之间的背景颜色处理 (#49767)
* 将 MI300 docker 映像移至 ROCm 10.1 并更新测试预期 (#49460)，作者为 @Abdennacer-Badaoui，位于 [#49460]
* 文档：修复 Vision Encoder Decoder 文档中的“允许”语法 (#48730)，作者：@mrchatam，位于 [#48730]
* 修复 SSH 运行程序：将 /opt/venv/bin 添加到 Python 3.11 图像的 PATH (#49759) by @ydshieh in [#49759]
* 当图像标记不是 patch_size 的倍数时修复 SmolVLM input_merger (#49725) by @albertvillanova in [#49725]
* Ernie4.5-VL-MoE：在 TP 和 EP 下对文本和视觉专家进行分片 (#49462)，作者：@IlyasMoutawwakil，位于 [#49462]
* 在 [#49557] 中@Arnav66692 修复批量生成期间的 HunYuan-VL 图像分配 (#49557)


## 一代

此版本修复了一系列生成错误：BLOOM 因静态缓存或编译生成而崩溃、`generate` 丢弃类似字典的输入类型（例如 `ModelOutput`），以及 HunYuan-VL 和 Idefics2/3 的批处理或波束搜索生成中的图像分配或占位符处理不正确。它还修复了 Qwen3-Omni 音频生成模式处理、SAM 掩模生成多缩放裁剪、空帧


* 修复：防止短视频的空帧采样 (#49908) by @BlazeSR10hawk in [#49908]
* 修复 Windows 路径分隔符破坏 Hub 自定义生成模块的相对导入 (#48951) by @dltsum in [#48951]
* 修复 SAM 掩码生成管道中的多缩放作物和相关错误（修复#35530）（#49689），作者：@stlukyanenko，位于 [#49689]
* 由 @merveenoyan 在 [#49697] 中更新推测解码文档 (#49697)
* 修复 idefics3 生成问题 (#49738) by @molbap in [#49738]
* 修复 @molbap 在 [#49740] 中的生成测试 (#49740)
* 修复 `generate` 中的输入字典转换 (#49731) by @Cyrilvallez in [#49731]
* [修复][Qwen3-Omni] 在音频生成中尊重 Generation_mode (#49505) by @Sunt-ing in [#49505]


## 并行化
此版本扩展了并行支持并修复了多个相关错误。它为 Nemotron 添加了张量并行计划，并使 Ernie4.5-VL-MoE 将其文本和视觉专家分片在 TP 和 EP 下。它还恢复了 torch 2.7–2.10 上的专家并行令牌分发梯度，修复了 Molmo2 模型并行设备不匹配，并纠正了多个模型系列（PP-OCR 检测器）中的 `base_model_prefix`


* 在 [#48780] 中添加 @Siddhant231xyz 的 Nemotron 张量并行计划 (#48780)
* 修复 molmo2 模型的模型并行错误 (#49816) by @kaixuanliu in [#49816]
* 修复 PP-OCR 检测器中的 `base_model_prefix`、CLIPSeg、TimesFM、CLIP 和 VideoPrism 头，以便基本检查点加载 (#48871) by @blipbyte in [#48871]
* 通过@digit50 在 [#49710] 中修复火炬 2.7 到 2.10 上的专家并行令牌调度梯度 (#49710)
* 跳过 Muse TP (#49717) by @remi-or [#49717]


## 量化

量化现在可以正确处理 DeepSeek-V4.1 的 FP4 专家：`FineGrainedFP8Config` 获得 FP8 专家读取的 `expert_dtype` 选项（默认情况下为“fp8”或“fp4”），而不是将它们分配为 FP8。当加载诸如bitsandbytes 4/8位之类的量化时，TimesFM 2.5不再将浮点输入转换为整数权重数据类型。更广泛的清理


* 细粒度 FP8：量化配置中的 DeepSeek-V4 Expert_dtype (#49848)，作者：@IlyasMoutawwakil，位于 [#49848]
* 修复了 TimesFM 2.5 ResidualBlock 中的 dtype 转换，以实现量化权重 (#46942)，作者为 [#46942] 中的 @JOhnsonKC201
* 量化清理 (#49548) 由 @ArthurZucker 在 [#49548]


## 错误修复和改进

* [修复] 修复 CSM 码本嵌入绑定 (#49197) by @orrangetabby17 in [#49197]
* [tests_fetcher] 修复 preprocessor_patterns 路径键中缺少的 .as_posix() (#49994)，作者：@ydshieh in [#49994]
* 修复（ci）：如果维护者已经发布了运行缓慢，则跳过机器人建议：（#49992）由 @ydshieh 在 [#49992] 中
* [正在加载] 允许重命名和转换器在 [#49928] 中的 @Cyrilvallez 的 sume 子项上工作 (#49928)
* [修复] 修复 CB 中的 NUMA 和 cpuset 检测 (#49980) by @remi-or in [#49980]
* [重构] 使 CB 实用程序不依赖于 @remi-or 中的 CB 导入 (#49968) [#49968]
* 杂务：改进 modeling_rope_utils.py 中的输入（#49831），作者：@RyanMullins，位于 [#49831]
* is_fouroversix_available() 返回一个（可用，版本）元组。 Ev… (#49894) by @sywangyi in [#49894]
* 匹配从头到模块边界的跳表条目 (#49771) by @IlyasMoutawwakil in [#49771]
* [pocket_tts, gradium_phonon_tts] 在 [#49868] 中使用 @eustlb 的 sub_configs_defaults (#49868)
* 修复了 @kaixuanliu 在 [#49912] 中的 flash_attn 测试中的数据类型不匹配问题 (#49912)
* [修复] 删除 DeepseekV3.2 配置中的重复分配 (#49896) by @remi-or [#49896]
* 添加 XPU 对 4 个新模型测试的期望 (#49815) by @kaixuanliu in [#49815]
* 通过 @zucchini-nlp 在 [#49906] 中使子配置默认值更容易 (#49906)
* 修复 musicgen_melody 模型中的越界索引错误 (#49842) by @kaixuanliu in [#49842]
* 测试：在 [#49728] 中@nrenvo 将奇偶校验添加到仅 CPU 的连续批处理测试 (#49728)
* [CB] 通过 @remi-or 在 [#49844] 中减少 CPU 型号 (#49844) 的 max_memory_percent
* 提高自动类文档 (#44550) 中的清晰度和语法，作者为 @himani27301，位于 [#44550]
* [gradium_phonon_tts] 指向@eustlb 在 [#49867] 中发布的 Hub 存储库 (#49867)
* [EmbeddingGemma2] 更新集成测试 (#49576) by @eustlb in [#49576]
* 修复@IvanFan-Van 在 [#44872] 中的评论 (#44872)
* 修复硬编码的 torch.float64 在 MPS 上崩溃的问题 (#46723) (#46730) by @Abhijeet1815 in [#46730]
* 修复元数据工作流程 (#49854) by @vasqu in [#49854]
* 文档（whisper）：将输入特征转换为 AutoModel 示例中的模型数据类型（#49837），作者：@Kayvan-Zahiri，位于 [#49837]
* 将 torch_float 转换为 int 而不是 float (#47468)，由 @rahulrshetty45 在 [#47468] 中修复
* 由 @Sai-Suraj-27 在 [#49251] 中将 Python Min 版本升级到 `3.11` (#49251)
* 跳过 @kaixuanliu 在 [#49809] 中对 3 个模型的 `sdpa_can_dispatch_on_flash` 测试 (#49809)
* [LED][Longformer] 将 for-loop 替换为 _chunk ONNX 导出路径中的展开 (#46169) by @guinik in [#46169]
* 所有 ForXXX 类的 logits_to_keep 布尔掩码 (#48825) by @jp1924 in [#48825]
* 修复了几个对象检测模型/加载器修复模块绑定 (#49827) by @molbap in [#49827]
* 当预计算的编码器输出缺少令牌 ID 时修复编码器 logits 处理器 (#49696) by @kunalsanga in [#49696]
* 推迟一些导入 (#49663)，由 @jayzuccarelli 在 [#49663] 中
* 由 @ebezzam 在 [#49833] 中重构 CTC 损失 (#49833)
* 由 @regisss 在 [#49254] 中添加 Intel XPU CI (#49254)
* 修复(mask2former): 将 input_projections 注册为 nn.ModuleList (修复 #49698) (#49703) by @Omarinho12345 in [#49703]
* 仅当配置通过 [#49552] 中的 @<NOT FOUND> 共享它们时，才将 MM 接地 DINO 解码器头连接起来 (#49552)
* [文档] 在 [#48746] 中添加@shreeyadav06 的自述文件 (#48746) 的马拉地语 (मराठी) 翻译
* 修复了 @ShamSaleem 在 [#47478] 中默默地从未应用的 CLVP `c_proj` 残余缩放初始化 (#47478)
* 修复了 unlimited_ocr 模型失败的测试用例 (#49806)，作者：@kaixuanliu [#49806]
* 在 [#48412] 中 @panshularora 修复未安装 requests 时的转换器环境 (#48412)
* 在 [#49794] 中@digit50 通过 torchvision (#49794) 在 load_image_as_tensor 中应用 EXIF 方向
* 由 @zucchini-nlp 在 [#49821] 中修复 Fuyu 处理器测试 (#49821)
* 使用 torchcodec-xpu 并将 torch 升级到 2.14.1 (#49814) by @sywangyi [#49814]
* 更新一些案例以添加 xpu 期望 (#49807) by @sywangyi in [#49807]
* [serge] 修复了 [#49705] 中 @sergereview[bot] 的提交 c48824e84024 (PR #49404) (#49705) 导致的 2 个集成测试回归
* 文档：通过设置 min_pixels 和 max_pixels 修复 Qwen 动态分辨率模型的 OOM/hang (#46007) by @poojansatani in [#46007]
* 文档：修复 DPT 文档中的“允许”语法 (#48728)，作者为 @mrchatam，位于 [#48728]
* 文档：修复 LiLT 文档中的“允许”语法 (#48731)，作者为 @mrchatam，位于 [#48731]
* 文档：修复 Gemma 模型文档中的提示格式和代码对齐（#48775），作者：@Rattan344，位于 [#48775]
* 文档：修复 ALBERT 模型卡中的语法拼写错误 (#48774) by @Rattan344 in [#48774]
* 在 [#49424] 中通过 @zucchini-nlp 弃用旧的输入名称 (#49424)
* 修复 CI 注释工作流程中的 NameError：缺少部分标记变量 (#49801)，作者：@ydshieh，位于 [#49801]
* [CI] 改进运行缓慢的 PR 评论并删除 [#49782] 中 @ydshieh 的 CI 回顾 (#49782)
* 在 [#49668] 中显示 @Sai-Suraj-27 的 `transformers env` (#49668) 的实际加速版本
* [CI] 修复 Perceriver 旧回归 (#49792) by @molbap in [#49792]
* mimi moshi 输出捕获 (#49670) by @eustlb in [#49670]
* 删除@tarekziade 在 [#49785] 中已解决的原型 Whisper MIC 预期故障 (#49785)
* 修复 CohereCompass 文本 RoPE，以使用 Qwen3-VL 交错 M-RoPE (#49715)，作者为 @mmangkad，位于 [#49715]
* 别名思考 -> Reasoning_content (#49535) by @Rocketknight1 in [#49535]
* [vLLM] 添加 Qwen-Omni Thinker 基本模型和 Gemma 3n 每层输入 (#49437)，由 @harshaljanjani 在 [#49437] 中
* 由 @tarekziade 在 [#49768] 中更新 MIC 队列参考和文档 (#49768)
* [CI] SAM 没有分割模块 (#49766) by @molbap in [#49766]
* 启用在 idefics3 (#49758) 中被遗忘的测试，由 @molbap 在 [#49758] 中
*修复tests_fetcher主干步骤（自引入以来从未工作过）（#49742）由@ydshieh在[#49742]中
* [模块化] 扩展“del self.xxx”模式以匹配 [#49735] 中 @remi-or 的键入赋值 (#49735)
* Xpu 添加 (#49757) 由 @sywangyi 在 [#49757]
* 弃用 rod_scaling 分配并规范化旧版 RoPE 密钥 (#49515)，作者为 @jinwukong，位于 [#49515]
* 使 longrope 可编译 (#49555) by @jiqing-feng in [#49555]
* 修复 MiniCPMV4_6VideoProcessor 中 stack_frames > 1 的接线错误 (#49752)，由 @airlsyn 在 [#49752] 中修复
* 修复 moshi 失败的测试 (#49750) by @eustlb in [#49750]
* [文档] 高迪 (#49618) by @stevhliu in [#49618]
* [serge] 修复模型 `convnextv2` 的 2 个集成测试因 `output_mismatch` 失败（张量值不同 (2)） (#48838)，作者为 @sergereview[bot]，位于 [#48838]
* [serge] 修复模型 `eomt_dinov3` 的 2 个集成测试因 `output_mismatch` 失败（张量值不同 (2)） (#48882)，作者为 @sergereview[bot]，位于 [#48882]
* [serge] 修复模型 `lw_detr` 的 4 个集成测试因 `output_mismatch` 失败（张量值不同 (4)） (#49040) 由 @sergereview[bot] 在 [#49040]
* [serge] 修复模型 `nemotron` 的 2 个集成测试因 `output_mismatch` 失败（列表输出不同 (2)） (#48945)，由 @sergereview[bot] 在 [#48945] 中
* molmo2 的多设备修复（#49736），由 @molbap 在 [#49736] 中
* 由 @zucchini-nlp 在 [#49720] 中修复其余的 VLM (#49720)
* 修复了两次加载支持融合的检查点时出现的 ValueError (#49412)，作者：@kaixuanliu [#49412]
* 避免 `eager_mask` 中的主机到设备复制 (#49684)，作者：@hmellor，位于 [#49684]
* `is_tracing()` 现在可以识别 XPU 流捕获，以及现有的… (#49722) by @sywangyi in [#49722]
* 通过 @qflen 在 [#45822] 中记录如何在添加标记后避免元空间前缀 (#45822)
* 通过 @qgallouedec 在 [#49677] 中声明仅报告文本的 VLM 的输入模式 (#49677)
* 通过专家并行性和 ep_size < fsdp_size 修复 bfloat16 中的零专家梯度 (#49688) by @qgallouedec in [#49688]
* 修复虚拟模块导入的测试选择 (#49690)，由 @tarekziade 在 [#49690] 中
* [文档] 添加 Google TPU 硬件指南 (#49642) by @tengomucho in [#49642]
* 复制默认响应解析器参数 (#49370) by @Rocketknight1 in [#49370]
* 让 `DtensorShardOperation` 在火炬 2.6 和 2.7 上工作 (#49657) by @hazelxue in [#49657]
* 修复 torch 2.7 上的 from_pretrained：需要 torch>=2.8 进行分布式检查点 (#49652)，由 @naveecode in [#49652]
* 在专家并行性下修复 DeepGEMM Mega MoE (#49428)，由 @IlyasMoutawwakil 在 [#49428] 中
* 修复由@tarekziade 在 [#49660] 中产生 NaN 输出的片状 Evolla 测试 (#49660)
* [rocm] 将 ROCm 期望添加到 Kolibri-1 logits 测试 (#49661)，由 @ericschreiber 在 [#49661] 中
* [CB] @remi-or 在 [#49654] 中针对 MPS (#49654) 的各种小修复
* 将测试预期与测试中的加速器路径保持一致：(#49653) by @sywangyi in [#49653]
* [文档] 处理器配置 (#49643) by @stevhliu in [#49643]
* 发布后的内容 (#49646) by @vasqu in [#49646]


## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @ydshieh
    * [tests_fetcher] 修复 preprocessor_patterns 路径键中缺少的 .as_posix() (#49994)
    * 修复（ci）：如果维护者已经发布了运行缓慢，则跳过机器人建议：（#49992）
    * [Fetcher] 修复动态解析图像处理器缺失的测试部分 (#49826)
    * 修复 CI 注释工作流程中的 NameError：缺少部分标记变量 (#49801)
    * [CI] 改进运行缓慢的 PR 评论并删除 CI 回顾 (#49782)
    *修复tests_fetcher骨干步骤（自引入以来从未工作过）（＃49742）
    * 修复 SSH 运行程序：将 /opt/venv/bin 添加到 Python 3.11 映像的 PATH (#49759)
* @雷米-或
    * [修复] 修复 CB 中的 NUMA 和 cpuset 检测 (#49980)
    * [重构] 使 CB utils 不依赖于 CB 导入 (#49968)
    * [修复] 删除 DeepseekV3.2 配置中的重复分配 (#49896)
    * [CB] 通过不在完整缓存上计算注意力来减少预热时间 (#49853)
    * [CB] 减少 CPU 型号的 max_memory_percent (#49844)
    * [模块化] 扩展“del self.xxx”模式以匹配键入的分配 (#49735)
    * [缓存] 线性 attn 缓存：使用新的 getter (#49375)
    * [缓存] 获取转换状态 (#49309)
    * [缓存] 添加 get_recurrent_state (#49306)
    * [缓存] 添加 is_recording_past (#49305)
    * [内核] 将 MPS 添加到支持的设备类型 (#49655)
    * 跳过 Muse TP (#49717)
    * [CB] MPS 的各种小修复 (#49654)
* @尼基00718
    * 共享 RGB 转换和图像处理器中的复合透明度 (#49079)
* @eustlb
    * [pocket_tts, gradium_phonon_tts] 使用 sub_configs_defaults (#49868)
    * [gradium_phonon_tts] 指向已发布的 Hub 存储库 (#49867)
    * [EmbeddingGemma2] 更新集成测试 (#49576)
    * 添加 GradiumPhononTTS (#49791)
    * 添加 PocketTTS (#49589)
    * 添加 PocketTTSAudioTokenizer (#49588)
    * 🟡 [mimi] 独立的编码器和解码器 (#49577)
    * mimi moshi 输出捕获 (#49670)
    * 修复 moshi 失败的测试 (#49750)
* @jp1924
    * 所有 ForXXX 类的 logits_to_keep 布尔掩码 (#48825)
* @莫尔巴普
    * 修复了多个对象检测模型/加载器修复模块绑定 (#49827)
    * [CI] 修复 Perceriver 旧回归 (#49792)
    * [CI] SAM 没有拆分模块 (#49766)
    * 启用 idefics3 中忘记的测试 (#49758)
    * 修复 idefics3 生成问题 (#49738)
    * 修复生成测试 (#49740)
    * molmo2 的多设备修复 (#49736)
* @athrael-soju
    * 添加 UltraVBERT (#49685)
* @harshaljanjani
    * 修复(vision): 通过 from_pretrained 路由 DETR 转换脚本 (#49830)
    * 修复（音频）：通过 from_pretrained 路由 ALM 转换脚本 (#48525)
    * [vLLM] 添加 Qwen-Omni Thinker 基本模型和 Gemma 3n 每层输入 (#49437)
* @lovishmadaan
    * 添加火石模型支持。 (#49824)
* @tarekziade
    * 删除已解决的原型 Whisper MIC 预期故障 (#49785)
    * 更新 MIC 队列参考和文档 (#49768)
    * 清理了分词器测试 (#49669)
    * 修复虚拟模块导入的测试选择 (#49690)
    * 修复产生 NaN 输出的片状 Evolla 测试 (#49660)
* @yonigozlan
* 修复自动映射中的小错误 (#49664)
* @ArthurZucker
    * 量化清理 (#49548)

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.21` · 📅 发布：2026-10-26 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.21)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
