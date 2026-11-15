---
title: "transformers v5.17.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.17.0"
version: "v5.17.0"
published: "2026-09-09"
type: "minor"
lang: "zh"
---

# transformers v5.17.0

# 发布v5.17.0


## 添加新模型

### HYV4

<img width="1503" height="827" alt="image" src="https://github.com/user-attachments/assets/e6ed85ee-eb1d-40eb-a0d4-c649f6337ca9" />


Hy4-Preview 是一个 780B 参数的专家混合语言模型，每个模型激活 49B 个参数
令牌。每个 MoE 层拥有 256 个路由专家以及一个始终活跃的共享专家，并且每个路由专家
给其中 8 个的令牌。上下文窗口是 1M 个令牌。

该架构结合了四个特点：

- **多头潜在注意力（MLA）**将键和值压缩为低秩潜在注意力
  (`kv_lora_rank`) `kv_b_proj` 扩展回每个查询头一个键/值。
- **DeepSeek 稀疏注意力 (DSA)** 使用轻量级索引器为每个查询选择 `index_topk` 键。
  [IndexShare](https://huggingface.co/papers/2603.12201) 之后，仅标记为 `"full"` 的图层
  在 `indexer_types` 中运行索引器； `"shared"` 图层重复使用之前完整图层的选择。
- **具有可学习注意力接收器的门控 MLA**，其中每个头都拥有一个参与的接收器 logit
  在softmax中并且没有贡献任何值，如在[GPT-OSS](./gpt_oss)中。
- **独立超连接 (iHC)** 用 `hc_mult` 并行替换普通剩余路径
  每个子层之前崩溃的残余流和之后的 redis。

该实现不执行多令牌预测（MTP）层。已发布的检查点
保留这些权重，以便其他运行时可以使用它们进行推测解码；他们被忽视
在加载时。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/hy_v4)
* 在 [#48473](https://github.com/huggingface/transformers/pull/48473) 中添加 @ArthurZucker 的 h4 (#48473)

### 盛传之声

<img width="2140" height="1188" alt="image" src="https://github.com/user-attachments/assets/29ccea01-a855-4d4f-a6af-61bc4fc883a4" />

[VibeVoice](https://huggingface.co/papers/2508.19205) 是一种新颖的框架，用于通过在大型语言模型 (LLM) 结构中采用下一个令牌扩散方法来合成具有多个说话者的高保真长格式语音。它旨在捕捉真实的对话“氛围”，特别适合生成播客和多方有声读物等音频内容。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/vibevoice)
* 由 @pengzhiliang 在 [#40546](https://github.com/huggingface/transformers/pull/40546) 中实现 VibeVoice (#40546)

### 新MME

NeoMME 是 H 公司推出的一系列高效 260M 和 800M 参数多模态原生多语言基础编码器。它在单个双向 Transformer 编码器中处理多语言文本标记和原始图像块，无需单独预训练的视觉塔或因果语言模型。

NeoMME-Retriever 是一个根据 NeoMME 主干进行微调的模型，用于具有联合后期交互和密集目标的视觉文档检索。它采用文本查询和文档（文本或页面屏幕截图），并生成用于 MeanMaxSim 评分（后期交互）的多向量嵌入和用于余弦相似性（密集）的均值池嵌入。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/neomme)
* 添加 NeoMME 和 NeoMME-Retriever (#47992) by @tonywu71 in [#47992](https://github.com/huggingface/transformers/pull/47992)

### Fun-ASR-Nano

Fun-ASR-Nano是阿里巴巴达摩院FunAudioLLM团队开发的8亿参数端到端语音识别模型。它在中文、英文和日文 ASR 基准测试中实现了最先进的性能，同时比同类型号小得多。

主要特点是
- **中、英、日**，包括7种中国方言和26种地方口音
- 针对特定领域词汇的**热词定制**
- **本机标点符号**输出（不需要单独的标点符号模型）

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/fun_asr_nano)
* 在 [#46180](https://github.com/huggingface/transformers/pull/46180) 中添加 @LauraGPT 的 Fun-ASR-Nano 模型 (#46180)

### KimiLinear

Kimi Linear 是 Moonshot AI 的混合线性注意力架构，于
[Kimi Linear：一种富有表现力、高效的注意力架构](https://huggingface.co/papers/2510.26692)。

其核心是 **Kimi Delta Attention (KDA)**，是 [Gated DeltaNet](https://huggingface.co/papers/2412.06464) 的改进
这为每个关键通道提供了自己的遗忘门，因此循环状态会按通道而不是按头衰减。 KDA 是
在大多数层中使用；每第四层保留一个全注意力块，重用 DeepSeek-V3 的多头潜在
注意力（MLA）和前馈块是带有共享专家的 DeepSeek-V3 风格的 MoE。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/kimi_linear)
* Kimi 线性 (#48250) by @remi-or in [#48250](https://github.com/huggingface/transformers/pull/48250)

### 金丝雀

Canary-1B-v2，一种快速、强大的多语言模型，用于自动语音识别 (ASR) 和语音到文本翻译 (AST)：

Canary 重用了 [Parakeet](./parakeet.md) 中的 [Fast Conformer](https://huggingface.co/papers/2305.05084) 编码器（通过 [`ParakeetEncoder`] / [`ParakeetEncoderConfig`] 加载），并将其与使用固定正弦位置嵌入、对编码器输出的交叉注意力和绑定输入/输出嵌入的 Transformer 解码器配对。该任务是通过由 [`CanaryProcessor`] 构建的 `<|startofcontext|> <|startoftranscript|> <|emo:undefined|> <source_lang> <target_lang> <pnc|nopnc> <|noitn|> <|notimestamp|> <|nodiarize|>` 形式的解码器提示前缀来选择的，其中 `source_lang == target_lang` 选择转录，否则选择翻译。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/canary)
* 模型：将 NVIDIA Canary-1B-v2 添加到变形金刚 (#46825) by @harshaljanjani in [#46825](https://github.com/huggingface/transformers/pull/46825)


### 新编解码器

NeuCodec 模型是在 [Finite Scalar Quantization Enables Redundant and Transmission-Robust Neural Audio Compression at Low Bit-rates](https://huggingface.co/papers/2509.09550) 中提出的。

NeuCodec 是在 XCodec2 上扩展的神经音频编解码器。它利用以下功能：

- 有限标量量化 (FSQ) 量化产生**单个码本**，使其成为使用语音语言模型进行下游建模的理想选择。
- 使用 CC 数据进行训练，因此**没有非商业数据限制**。
- 在 50 个令牌/秒和每个令牌 16 位的情况下，总体比特率为 **0.8kbps**。
- 编解码器使用 **上采样解码器** 接收 16kHz 输入并输出 **24kHz**。
- FSQ 编码方案允许适用于不可靠和有噪声的通道的位级错误抵抗。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/neucodec)
* 在 [#47143](https://github.com/huggingface/transformers/pull/47143) 中添加 @harryjulian 对 NeuCodec (#47143) 的支持



## 重大变更

视觉旋转嵌入 (2D/3D) 已标准化为统一的 RoPE 频率计算模块，因此具有依赖于注意层级别或特定于模型的 RoPE 网格交错逻辑的自定义视觉模型的用户必须迁移到新的集中式 `modeling_rope_utils.py` 实现。
* :rotating_light：视觉 (2d/3d) 旋转嵌入 (#48105) by @zucchini-nlp



## 一代
生成改进包括性能优化，避免每个解码步骤上不必要的加速器同步（减少每步开销），以及修复以防止生成期间无条件下载远程集线器文件。还应用了多项正确性修复，包括对编码器-解码器模型强制执行自动编译缓存检查、标准化 AfMoE 中的 `past_key_values` 命名，以及解决不稳定的导出和集成测试故障。


* [`Generate`] 避免在 [#48620] 中由 @vasqu 无条件下载远程集线器文件 (#48620)
* [生成] 在每个解码步骤中停止同步加速器 (#47975) by @SunMarc in [#47975]
* [AfMoE] 标准化前向中的 Past_key_values 参数命名并生成 (#48430) by @shenhuaqingshi in [#48430]
* 修复转义层忽略键的 MTP 生成测试正则表达式门 (#48003) (#48262) by @Noxtimo in [#48262]
* 修复（生成）：对编码器-解码器模型执行自动编译缓存检查（#48364），由 @harshaljanjani 在 [#48364] 中执行
* [serge] 修复模型 `generation` 的 4 个集成测试因 `output_mismatch` 失败（列表输出不同 (4)） (#48133)，由 @sergereview[bot] 在 [#48133] 中
* [VibeVoice] 跳过生成导出测试（片状）(#48396) by @ydshieh in [#48396]


## 缓存

修复了多个与缓存相关的错误，包括 VibeVoice 中的量化缓存问题、VoxtralRealtime 中错误拒绝非静态缓存实现、缺少编码器-解码器模型的自动编译缓存检查，以及在没有缓存的情况下调用分页注意时出现无提示故障。文档也已更新，以阐明 `ContinuousBatchingConfig` 的使用和滑动窗口模型的限制。


* vivivoice: 修复量化缓存的错误 (#48487) by @kaixuanliu in [#48487]
* 修复了 VoxtralRealtime 拒绝非静态缓存实现的问题 (#48082)，由 @jiqing-feng 在 [#48082] 中修复
* 当 @qgallouedec 在 [#48297] 中调用无缓存的分页注意力转发时引发 (#48297)
* [文档] 通过 @stevhliu 在 [#48381] 中传递 ContinuousBatchingConfig 和滑动窗口模型 (#48381)
* 在过时的 GitHub API 缓存上重试 get_daily_ci_runs (#48374) by @ydshieh in [#48374]


## 内核

通过修复仅安装 `fla-core` 时的嵌套 FLA 内核导入、集线器内核函数静默回退到较慢的纯 PyTorch 参考实现时发出警告，以及在 `KernelConfig` 中注册独立函数（例如 RoPE）以及可选的非继承默认映射的能力，改进了内核支持。其他修复包括更正 ESMFold2 内核的存储库路径和更新 `KernelConfig` 自定义文档。


* 支持 fla-core 的嵌套 FLA 内核导入 (#48221) 通过 [#48221] 中的 @DimensionSTP
* 当 hub-kernel 函数回退到其参考 PyTorch 路径时发出警告 (#48185)，作者为 [#48185] 中的 @qgallouedec
* [文档] @stevhliu 在 [#48465] 中更新内核 (#48465)
* [`Kernels`] 启用内核注册表中的功能并允许非继承 (#48443) by @vasqu in [#48443]
* 由 @Rocketknight1 在 [#48186] 中修复 ESMFold2 的内核提交和存储库路径 (#48186)


## 量化

修复了多个量化错误，包括 VibeVoice 中的量化缓存问题、Qwen 模型的 FP8 嵌入处理不正确、缺少 FP8 张量并行层覆盖以及 XPU 设备上不必要的 MXFP4 权重反量化。
* 通过 @JJJYmmm 在 [#48368] 中修复 qwen4exp-fp8 ple 嵌入 (#48368)
* 当 @jiqing-feng 在 [#47923] 中设置 use_kernels 时，在 XPU 上保持 MXFP4 权重量化 (#47923)
* 修复缺失的 FP8 TP 层覆盖 (#48343)，由 @changwangss 在 [#48343] 中


## 错误修复和改进

* MRoPE 由 @zucchini-nlp 在 [#48594] 中继续 (#48594)
* [修复] 由 @ydshieh 在 [#48646] 中更新 HunYuanVL 集成测试中过时的预期字符串 (#48646)
* [Quantizaiton]支持 AutoRound 中的 5/6/7 位 (#48481) by @wenhuach21 in [#48481]
* [修复] 更新陈旧的黄金值并修复 FlavaForPreTraining 集成测试中的预期日志形状 (#48639) by @ydshieh in [#48639]
* 修复 YOLOS 设备与 device_map="auto" 不匹配的问题 (#46886)，作者：@swankystark，在 [#46886]
* 在仅解码器 LLM/VLM 损失中尊重 `shift_labels` (#48493)，@qgallouedec 在 [#48493]
* [KimiLinear] 修复 test_cpu_offload: 在模型测试器中设置 num_local_experts=4 (#48624) by @ydshieh in [#48624]
* [文档] 每层配置 (#48601) by @stevhliu in [#48601]
* 修复 `transformers chat` 中的 `generate_flags` 解析 (#48597)，由 @SunMarc 在 [#48597] 中
* [修复] 修复我们如何读取软件包版本 - 由 @ydshieh 在 [#48615] 中的 torch 2.14+ 触发 (#48615)
* [Docker] 将 CPU torch 升级到 <=2.14.0，将 torchcodec 升级到 <=0.16.0 (#48614) by @ydshieh in [#48614]
* 修复了gradient_checkpointing_enable(offload=True)中的AttributeError (#48590) by @tarekziade in [#48590]
* 又一天修复 CI (#48591) by @zucchini-nlp in [#48591]
* esmfold2: 将 `distogram_head` 也保留在 fp32 中 (#48488) by @kaixuanliu in [#48488]
* 由 @qgallouedec 在 [#48442] 中将 `supports_context_parallel` 添加到 `PreTrainedModel` (#48442)
* [文档] mlinter 参考 (#48460) by @stevhliu in [#48460]
* [文档] 在社区集成下添加一个 LiteRT 页面 (#48540)，作者为 @john-rocky，位于 [#48540]
* [GLM 5.3 Flash] 通过 @imvladikon 在 [#48455] 中修复分块 KDA 中的 NaN 梯度 (#48455)
* [文档] 修复 ALBERT 模型文档 (#48593) 中的 [[autodoc]] 指令，作者为 @samyuktahegde，位于 [#48593]
* [修复] 修复 @remi-or 中的 A10 对测试的期望 (#48454) [#48454]
* 添加 @ydshieh 在 [#48065] 中针对 AMD (MI300) (#48065) 的 PR 评论 CI
* 文档：修复与签名不匹配的文档字符串参数名称 (#48575) by @simpleqt in [#48575]
* 文档：通过 [#48576] 中的 @simpleqt 从文档字符串中删除幻像参数 (#48576)
* 将某些情况扩展到 xpu (#48502) by @sywangyi in [#48502]
* [serge] 修复了模型 `glm4_moe` 的 2 个集成测试因 `OOM` 失败（其他 (2)） (#48551) 由 @sergereview[bot] 在 [#48551]
* [serge] 修复模型 `nemotron` 的 2 个集成测试因 `import_or_config` 失败（其他 (2)）（#48582），由 @sergereview[bot] 在 [#48582] 中
* 压缩代理约定文件并记录两个模块化陷阱 (#48586)，由 @tarekziade 在 [#48586] 中
* 当后端不可用时，防止 None 视频处理器类 (#48557) by @caiotheodoro in [#48557]
* [serge] 修复了由 @sergereview[bot] 在 [#48580] 中提交 83d46aa2a2c4 (PR #47625) (#48580) 导致的 2 个集成测试回归
* [nit] 在 [#47576] 中使用 @eustlb 的 require_backends (#47576)
* [serge] 修复模型 `kosmos2` 的 2 个集成测试失败，`import_or_config` (其他 (2)) (#48552) 由 @sergereview[bot] 在 [#48552]
* 修复@kaixuanliu 在 [#48005] 中对 cohere_compass (#48005) 的失败测试
* [修复] 使用专用助手进行 DeepGEMM 和 SonicMoE 测试 (#48523) by @remi-or in [#48523]
* CI：我们已经在 [#48521] 中由 @tarekziade 托管的 hf-internal-testing 副本中的点测试装置（#48521）
* 修复@kaixuanliu 在 [#48497] 中失败的 glm5_next 测试用例 (#48497)
* 将 kwargs 传递到 Nemotron-H、Falcon-H1 和 Mamba2 中的 Mamba2 混合器 (#48490)，由 @kfastino 在 [#48490] 中
* 退休 test_multi_gpu_data_parallel_forward (#48508) by @tarekziade in [#48508]
* 处理测试 [第 2 部分] (#47922) by @zucchini-nlp in [#47922]
* QA：在 [#48484] 中添加 @tarekziade 的嘈杂评论检查器 (#48484)
* 允许小型模型嵌套绳索参数 (#48435)，由 @zucchini-nlp 在 [#48435] 中
* 修复了 Gemma3/Gemma4 `create_masks_for_vision_model` 中的滑动窗口掩码 `layer_idx` (#48482)，作者：@jiqing-feng [#48482]
* 添加 xpu 对 hunyuan_vl 模型测试的期望 (#48504) by @kaixuanliu in [#48504]
* [`Qwen 3.5 Moe`] 修复装饰器 (#48436) by @vasqu in [#48436]
* 依赖项搜索中的无限循环 (#48393) by @zucchini-nlp in [#48393]
* [serge] 修复了模型 `fsmt` 的 2 个集成测试因 `output_mismatch` 失败（张量值不同 (2)） (#48496) 由 @sergereview[bot] 在 [#48496]
* 通过删除弃用周期（#48503）来修复一些测试，作者是@Cyrilvallez [#48503]
* 删除 [#48500] 中 @Cyrilvallez 的弃用 (#48500)
* 使用hidden_size而不是d_kv修复Pix2StructTextAttention init (#47558) by @<NOT FOUND> in [#47558]
* 修复补丁发布前实用程序 (#48499)，作者：@Cyrilvallez，位于 [#48499]
* 由 @Cyrilvallez 在 [#48498] 中更新开发版本 (#48498)
* 修复 Inkling input_embeds 并添加更多测试 (#47827)，作者为 @Cyrilvallez，位于 [#47827]
* 由 @Cyrilvallez 在 [#48340] 中简化并修复 qwen4 测试 (#48340)
* [文档] 部分检查点和 group_by_length (#48463) by @stevhliu in [#48463]
* doc：修复 VibeVoice 文档中的语法错误和拼写错误 (#48489)，作者为 @VimalN2005，位于 [#48489]
* [`Qwen4 Exp`] 使用partial 可以更轻松地避免跳过蒙版 (#48456) by @vasqu in [#48456]
* 在 [#47143] 中添加 @harryjulian 对 NeuCodec (#47143) 的支持
* [serge] 修复 1 个集成测试，由 @sergereview[bot] 在 [#48426] 中的提交 bd9509355c8a (PR #47493) (#48426) 回归
* 修复旋转嵌入回归 (#48477) by @Cyrilvallez in [#48477]
* 删除 [#48476] 中 @Cyrilvallez 已弃用的掩码函数 (#48476)
* [MTP] 通过仅捕获最后一层的隐藏状态来节省内存 (#48475) by @Cyrilvallez in [#48475]
* 允许仅使用 capture_outputs 捕获必要的隐藏状态 (#48081) by @sywangyi in [#48081]
* 支持每层 MTP 配置 (#48264) by @eladsegal in [#48264]
* [文档] 修复@stevhliu 在 [#47772] 中的代码片段 (#47772)
* [修复] 稀疏 TikToken 分词器默默地失败 (#48446) by @remi-or in [#48446]
* NeoMME 没有继承装饰器 (#48457) by @zucchini-nlp in [#48457]
* 批量重新平衡数据采样器 (#47340) by @delock in [#47340]
* [serge] 修复了模型 `cwm` 的 2 个集成测试因 `import_or_config` 失败（其他 (2)） (#48414) 由 @sergereview[bot] 在 [#48414]
* 修复：在 [#48448] 中添加 @harshaljanjani 的 DEIMv2 归属 (#48448)
* [修复] 暗示：mps + cuda mel 规格提取 (#47432) by @eustlb in [#47432]
* 修复：decode() 批处理路径尊重 self.clean_up_tokenization_spaces (#47793) by @lorenzozanee in [#47793]
* 接地 dino fp16 dtype [backlog] (#48438) by @molbap in [#48438]
* 使用负载缩放超时来初始化进程组以进行分片加载 (#48228) by @qgallouedec in [#48228]
* 当 @qgallouedec 在 [#47511] 中强制和抑制令牌时，会引发明显的错误 (#47511)
* 通过 @LysandreJik 在 [#47367] 中澄清管道中的设备放置 (#47367)
* 添加卸载到梯度检查点 (#48444) by @qgallouedec in [#48444]
* [MiniCPMV4_6] 由 @ydshieh 在 [#48406] 中更新 test_small_model_vision_ Generation_batch 预期输出（值漂移）（#48406）
* [serge] 修复模型 `hyperclovax` 的 2 个集成测试因 `other` 失败（其他 (2)） (#48440) 由 @sergereview[bot] 在 [#48440]
* 修复（模型）：删除 RoPE 编码器中的位置索引标记类型查找（#48407），由 @harshaljanjani 在 [#48407] 中完成
* 由 @verma8076 在 [#47714] 中记录 SmolVLM/Idefics2/Idefics3 的 image_hidden_states/pixel_values 互斥性 (#47714)
* 通过 @zucchini-nlp 在 [#48434] 中重新排序，以便于导航 (#48434)
* @zucchini-nlp 在 [#48367] 中弃用的东西消失了 (#48367)
* [serge] 修复模型 `seamless_m4t_v2` 的 6 个集成测试因 `other` 失败（其他 (6)）（#48425），由 @sergereview[bot] 在 [#48425] 中
* [文档]：由 @Dovis01 在 [#48401] 中更新 GLM 5.3 (#48401)
* 避免打印到标准输出导致作业 `check_failed_tests` 作业失败 (#48391) by @ydshieh in [#48391]
* 修复了 [#48359] 中@Gronoxx 返回张量的前向方法上不正确的元组返回注释 (#48359)
* 修复 _find_disjoint 中的间隔合并不变式 (#47860) by @sharmax-vikas in [#47860]
* 现在跳过 mtp 慢速测试 (#48328) (#48329) by @tarekziade in [#48329]
* 由 @glegendre01 在 [#48394] 中更新工作流程中的 Tailscale 操作版本 (#48394)
* 修复 xpu 中的一些故障 (#48252) by @sywangyi in [#48252]
* [改进] 通过 @remi-or 在 [#47625] 中使门控增量规则更加明确 (#47625)
* [CB] 修复错误的设备范围 (#48370) by @remi-or in [#48370]
* 将 Transformers-mlinter 升级到 0.1.5 并清除 @tarekziade 在 [#48259] 中的新发现 (#48259)
* 修复：@NanoCode012 在 [#48388] 中的 torch2.13 上 flash-attn 回退失败 (#48388)
* [LongcatFlash] 修复 test_longcat_ Generation_cpu：使用 device_map="cpu" 避免 MoE 磁盘卸载问题 (#48377) by @ydshieh in [#48377]
* [Qwen3VLMoe] 由 @ydshieh 在 [#48376] 中更新 `test_small_model_integration_test_batch` 预期输出（值漂移）(#48376)
* [ONNX] 跳过火炬 2.13 上受影响的模型（两个发电机回归）(#48191) by @ydshieh in [#48191]
* 使用 `pread` 后端修复 Windows 上的 `safe_open` mmap 内存耗尽问题 (#48341) by @eryk-roch in [#48341]
* 修复 Zamba2 的 num_mem_blocks > 1 检查点构造 (#48325)，由 @john-rocky 在 [#48325] 中
* [文档] 通过 @Dovis01 在 [#48366] 中更改目录中的 5.3 Flash 位置 (#48366)
* [conftest] 使用 get_cpu_ram_total_gib 进行 psutil 补丁（cgroup-aware）（#48290），作者：@ydshieh，在 [#48290]
* 修复 BigBirdPegasus（fp 噪声滤波器）的片状 test_training_gradient_checkpointing (#48332)，作者为 @ydshieh，位于 [#48332]
* 默认详细程度的安静连续批处理 (#48314) by @qgallouedec in [#48314]
* 等待异步连续批处理引导程序中的第一个请求 (#48304) by @qgallouedec in [#48304]
* 忽略 @VaggelisGian 在 [#48319] 中恢复的训练器状态中记录的过时的最佳检查点 (#48319)
* [文档] 修复链接并删除 TokenizerFast (#47748) by @stevhliu in [#47748]
* 修复了 [#48348] 中@Rocketknight1 的 ESMC 不正确的令牌分类前缀 (#48348)
* 通过@qgallouedec 在 [#48302] 中创建具有本地同步的连续批处理 CPU 组 (#48302)
* 根据@qgallouedec 在 [#48299] 中针对复合模型的文本配置解决连续批处理配置 (#48299)
* [`CI`] 暂时解锁快速 CI（测试失败）(#48344) by @vasqu in [#48344]
* [qwen4_exp] 由于@ydshieh 在 [#48345] 中依赖于数据的控制流 (#48345)，禁用 torch/onnx 导出测试
* [调试] 在 get_previous_daily_ci.py (#48338) 中跟踪之前的 CI 运行选择，作者为 [#48338] 中的@ydshieh
* 通过 @hmellor 在 [#48261] 中的 attribute_map (#48261) 规范 HunYuanVL 的遗留字段别名

## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @ydshieh
    * [修复] 更新 HunYuanVL 集成测试中过时的预期字符串 (#48646)
    * [修复] 更新过时的黄金值并修复 FlavaForPreTraining 集成测试中的预期日志形状 (#48639)
    * [测试] 修复集成测试黄金值被快速图像处理器默认破坏的问题 (PR #41388) (#48637)
    * [KimiLinear] 修复 test_cpu_offload: 在模型测试器中设置 num_local_experts=4 (#48624)
    * 修复 CLI 服务测试中 GPU 内存拆卸问题 (#48618)
    * [修复] 修复我们如何读取软件包版本 - 由火炬 2.14+ 触发 (#48615)
    * [Docker] 将 CPU torch 升级到 <=2.14.0，torchcodec 升级到 <=0.16.0 (#48614)
    * 添加 AMD (MI300) 的 PR 评论 CI (#48065)
    * [MiniCPMV4_6] 更新 test_small_model_vision_ Generation_batch 预期输出（值漂移） (#48406)
    * 避免打印到标准输出导致作业 `check_failed_tests` 作业失败 (#48391)
    * [VibeVoice] 跳过生成导出测试（片状）(#48396)
    * [LongcatFlash] 修复 test_longcat_ Generation_cpu：使用 device_map="cpu" 避免 MoE 磁盘卸载问题 (#48377)
    * [Qwen3VLMoe] 更新 `test_small_model_integration_test_batch` 预期输出（值漂移）(#48376)
    * [ONNX] 跳过火炬 2.13 上受影响的模型（两个发电机回归）(#48191)
    * 在过时的 GitHub API 缓存上重试 get_daily_ci_runs (#48374)
    * [conftest] 使用 get_cpu_ram_total_gib 进行 psutil 补丁（cgroup 感知）(#48290)
    * 修复 BigBirdPegasus 不稳定的 test_training_gradient_checkpointing（fp 噪声滤波器） (#48332)
    * [qwen4_exp] 由于数据相关的控制流而禁用 torch/onnx 导出测试 (#48345)
    * [调试] 在 get_previous_daily_ci.py 中跟踪之前的 CI 运行选择 (#48338)
* @劳拉GPT
    * 添加 Fun-ASR-Nano 模型 (#46180)
* @tarekziade
    * 修复gradient_checkpointing_enable(offload=True)中的AttributeError (#48590)
    * 压缩代理约定文件并记录两个模块化陷阱 (#48586)
    * CI：在我们已经托管的 hf-internal-testing 副本中点测试装置 (#48521)
    * 停用 test_multi_gpu_data_parallel_forward (#48508)
    * QA：添加嘈杂的评论检查器（#48484）
    * 暂时跳过 mtp 慢速测试 (#48328) (#48329)
    * 将 Transformers-mlinter 升级为 0.1.5 并清除新发现 (#48259)
* @雷米-或
    * [修复] 修复测试的 A10 期望 (#48454)
    * 基米线性 (#48250)
    * [修复] 使用专用助手进行 DeepGEMM 和 SonicMoE 测试 (#48523)
    * [修复] 稀疏 TikToken 分词器默默失败 (#48446)
    * [改进] 使门控增量规则更加明确 (#47625)
    * [CB] 修复错误的设备范围 (#48370)
    * [CB] 失败速度更快 (#48334)
* @ArthurZucker
    * 添加 h4 (#48473)
* @harryjulian
    * 添加对 NeuCodec 的支持 (#47143)
* @delock
* 批量重新平衡数据采样器 (#47340)
* @harshaljanjani
    * 修复：添加 DEIMv2 属性 (#48448)
    * 模型：将 NVIDIA Canary-1B-v2 添加到变形金刚 (#46825)
    * 修复（生成）：对编码器-解码器模型强制执行自动编译缓存检查（#48364）
    * 修复（模型）：删除 RoPE 编码器中的位置索引标记类型查找 (#48407)
* @tonywu71
    * 添加 NeoMME 和 NeoMME-Retriever (#47992)
* @Dovis01
    * [文档]：更新 GLM 5.3 (#48401)
    * [文档] 更改目录中的 5.3 Flash 位置 (#48366)
    * [Glm 5.3 闪存] GLM 5.3 闪存支持 (#48342)
* @彭志良
    * 实施 VibeVoice (#40546)

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.17.0` · 📅 发布：2026-09-09 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.17.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
