---
title: "transformers v5.18.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.18.0"
version: "v5.18.0"
published: "2026-09-30"
type: "minor"
lang: "zh"
---

# transformers v5.18.0

## 添加新模型


### Nemotron 3 二值化

<img 宽度=“1680”高度=“900” alt=“图像”src=“https://github.com/user-attachments/assets/fe735cb3-9e5b-43ad-8f60-9dec8425aec7”/>

Nemotron 3 Diarization 是一种开放权重流说话者二值化模型，旨在确定现实世界音频中的“谁在何时发言”。它支持流式和离线推理，最多可处理八个扬声器，并根据每个扬声器首次到达输入音频来排序扬声器输出。

该模型使用为 Streaming Sortformer [1](https://huggingface.co/papers/2507.18446)、[2](https://huggingface.co/papers/2409.06656) 引入的到达顺序扬声器缓存 (AOSC) [1](https://huggingface.co/papers/2507.18446) 和 FIFO 队列。单个检查点支持可配置的延迟配置文件，从 80 毫秒输入缓冲区到 30.4 离线式缓冲区，以及 10 毫秒倍数的可配置输出帧分辨率。通过分块推理，最大音频持续时间不受限制。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/nemotron3_diarization)
* 在 [#49056](https://github.com/huggingface/transformers/pull/49056) 中添加 @eustlb 的 Nemotron3Diarization (#49056)

### NemotronH Omni

NemotronH Omni 是 NVIDIA 的多模态推理模型，它与 [NemotronH](https://huggingface.co/docs/transformers/main/en/model_doc/nemotron_h) 混合动力配对
Mamba-Transformer 语言模型，带有 [RADIO](https://huggingface.co/docs/transformers/main/en/model_doc/radio) 视觉编码器和可选的基于 Parakeet 的声音编码器。
图像（和视频）补丁通过 RADIO 塔和像素洗牌 MLP 投射到语言模型的
在 `<image>` / `<video>` 上下文标记位置嵌入空间；音频 clips 以相同的方式投影在
`<audio>` 位置。结果是一个单一的自回归模型，可以对文本、图像、视频和
声音。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/nemotron_h_omni)
* 在 [#46509](https://github.com/huggingface/transformers/pull/46509) 中添加 @meatybobby 对 Nemotron Omni (#46509) 的支持

### HyperCLOVAX Vision V2

HyperCLOVAX Vision V2 是 NAVER 开发的多模态视觉语言模型。它将 [HyperClovaX](https://huggingface.co/docs/transformers/main/en/model_doc/hyperclovax) 语言模型骨干与 [Qwen2.5-VL](https://huggingface.co/docs/transformers/main/en/model_doc/qwen2_5_vl) 视觉编码器相结合。该模型支持文本、图像和视频输入，并能够通过内置思维令牌（`<think>...</think>`）进行思维链推理。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/hyperclovax_vision_v2)
* 在 [#44314](https://github.com/huggingface/transformers/pull/44314) 中添加 @jp1924 的 HyperClovaX Vision (#44314)

### GTE

GTE是在[mGTE：用于多语言文本检索的广义长上下文文本表示和重排序模型](https://huggingface.co/papers/2407.19669)中由Xin Zhang、Yanzhao Zhu、Dingkun Long、Wen Xie、Ziqi Dai、Jialong Tang、Huan Lin、Baosong Yang、Pengjun Xie、Fei Huang、Meishan Zhu、Wenjie Li和Min Zhu提出的。

GTE 是一种 BERT 风格的双向编码器，它用 RoPE 替换绝对位置嵌入，使用门控 MLP，并在每个残差连接后应用层归一化。相同的架构支持阿里巴巴的 `gte-*-v1.5`、`gte-multilingual-*` 和 `gte-en-mlm-*` 检查点以及 Snowflake 的 `snowflake-arctic-embed-m-v2.0`。

**链接：** [文档](https://huggingface.co/docs/transformers/main/en/model_doc/gte)
* 模型：将 GTE 添加到变形金刚 (#48416) by @harshaljanjani in [#48416](https://github.com/huggingface/transformers/pull/48416)


## 重大变更

* 🚨 [ROCm] gpt-oss：将 FA3 路由到 aiter-flash-attn，通过 @Abdennacer-Badaoui 生成 ROCm 夹具（#46837）
* 🚨 加速 detr 图像处理 (#48066) by @guarin
* 🚨 重新映射索引器 layer_type (#48974) by @Cyrilvallez
* 🚨 [vLLM] 修复 Transformers 后端视频输入的视频令牌计数（第 1 部分）(#48894)，作者：@harshaljanjani
* 🚨 🚨将一些恐龙带入现代标准 (#46266) by @molbap
* :rotating_light: [`Kernels`] 凹凸版本 (#48714) by @vasqu


## 错误修复和改进
* 修复不正确的集线器分词器类 (#48641) by @itazap
* [CI] 删除重复的 Nvidia/AMD CI 回复评论并添加标题 (#48655) by @ydshieh
* 由 @vasqu 更新开发 (#48654)
* [测试] 修复 NougatModelIntegrationTest：固定工件修订并更新黄金值 (#48638) by @ydshieh
* [修复] 修复 GlmOcr 集成测试：错误的令牌 ID 和图像令牌解码错误 (#48650) by @ydshieh
* [GLM 5.3 Flash] 保存文本检查点时保留原始名称 (#48676) by @Dovis01
* 在 XPU 上注册激活内核层 (#47858) by @jiqing-feng
* 在构建自动动态形状时镜像已注册的 pytree 扁平化 (#48578) by @IlyasMoutawwakil
* 修复 `AutoImageProcessor` 在仅安装 Pillow 时需要 torchvision (#48616) by @blipbyte
* 断言缓存解码匹配在没有缓存的情况下重新计算 (#48289) by @IlyasMoutawwakil
* [higgs_audio_v2] 修复：在音频标签张量中使用 config.num_codebooks（简单修复！）（#48560），作者：@b-re-w
* [`MoE`] 修复 eager EP (#48653) by @vasqu
* [MusicgenMelody] 修复@ydshieh 在第 0 代步骤中默默丢弃的调节 (#48679)
* 修复 deepspeed ci (#48640) by @SunMarc
* 综合测试资产 (#48589) by @tarekziade
* 当专家并行关闭时跳过专家并行哨兵屏蔽 (#48201) by @qgallouedec
* [修复] yolos 卸载问题 (#48688) by @molbap
* [serge] 修复模型 `minimax` 的 2 个集成测试因 `output_mismatch` 失败（张量值不同 (2)） (#48515) by @sergereview[bot]
* [serge] 修复了模型 `mistral` 的 2 个集成测试因 `other` 而失败的问题（其他 (2)）（#48429），作者：@sergereview[bot]
* 修复 Qwen2.5-VL 时间 RoPE 的分数视频间隔 (#48669) by @yeyeyeping
* 修复 XPU 上缓慢的集成测试 (#48611) by @jiqing-feng
* QA：添加了 `MemoryCleanupMixin` 类用于测试（#48681），作者：@tarekziade
* [serge] 修复模型 `flex_olmo` 的 1 个集成测试因 `other` 失败（其他 (1)）（#48668），作者：@sergereview[bot]
* 修复@stefan-it 通过去噪查询计算的 D-FINE / RT-DETR 主要损失 (#48528)
* [CI] 将硬编码的用户名白名单替换为工作流触发器中的author_association 检查（#48712），作者：@ydshieh
* 在 attn_implementation AutoModel 文档字符串中添加 flash_attention_4 (#48684) by @3manifold
* 将专家并行哨兵槽保持在路由器梯度之外 (#48689) by @qgallouedec
* [DeepseekV3] OOM 级联根本原因调查（conversion_mapping 中的生成器引用泄漏）(#48720)，作者：@ydshieh
* 使用 @Wauplin 的 Huggingface_hub httpx 导出 (#48685)
* 统一 device_mesh init 以启用 PP + TP 推理 (#48155) by @3outeille
* 通过 2-D（fsdp、tp）设备网格启用 FSDP2 + 专家并行性（#48516），作者：@qgallouedec
* 将每日 CI 切换到火炬 2.14 — 由 @ydshieh 更新预期输出 (#48750)
* 修复 videomae 加载错误 (#48675) by @sywangyi
* 修复静默随机初始化 `RTDetrModel`/`SEWDForCTC` 加载（错误的 `base_model_prefix`） (#48744) by @<NOT FOUND>
* 修复 Glm4vMoeIntegrationTest：offload_folder + MemoryCleanupMixin (#48776) by @ydshieh
* [InternVL] 在 np.cumsum 之前标准化 num_patches (#48469) by @lorenzozanee
* 内核 api 文档，第 2 部分 (#46889)，作者：@michaelbenayoun
* 修复 Gemma4 助手的第一个预填充步骤中的隐藏状态选择 (#48704) by @glistening
* 修复了 @Cyrilvallez 的暗示嵌入规范 (#48786)
* 修复仅标记器模型的 TextToAudioPipeline 崩溃问题 (#48505)，作者：@jiqing-feng
* 将像素值转换为 DeepSeek-OCR-2 中的补丁嵌入数据类型 (#48632) by @jiqing-feng
* 在 XPU 上添加 RMSNormGated、KDA、Conv1D 的内核映射条目 (#48702) by @kaixuanliu
* 提高 `peft` 版本要求 (#48716) by @shniubobo
* [serge] 修复了模型 `edgetam` 的 12 个集成测试因 `import_or_config` 而失败的问题（其他 (12)）（#48322），作者：@sergereview[bot]
* 恢复旧版张量并行初始化以实现兼容性 (#48797) by @3outeille
* 修复@IlyasMoutawwakil 的 kosmos 片状测试 (#48800)
* 添加 MuseGlimmerAssistantModel 的集成测试（#48796），作者：@ydshieh
* 修复 `AutoModel.from_pretrained` 不恢复 `modules_to_save` 权重的问题 (#48595) by @shniubobo
* [文档] mrope 和轴向绳索 (#48717) by @stevhliu
* 修复旧版 bert 变体的仅解码器路径 (#48785)，作者：@Cyrilvallez
* [修复] DeepSeek 系列中的清理三元组 (#48447) by @remi-or
* [utils] 添加对 Flash Attention 2 的 MUSA 支持 (#48612) by @XiaomingFun233
* [生成] 尽早丢弃注意力蒙版而不进行填充 (#48814) by @Cyrilvallez
* 在 test_can_init_all_missing_weights 源读取中固定 utf-8（Windows 非 UTF-8 区域设置修复）（#48819），作者：@dltsum
* 放宽 test_generate_with_static_cache 中的静态缓存容差 (1e-5 → 5e-5) (#48815) by @ydshieh
* 不依赖于layer_types 检测嵌套的rope_parameters (#48798) by @hmellor
* 支持 GGUF 集成中的 MoE (#48529) by @SunMarc
* [文档] gguf (#46357) 作者：@stevhliu
* [apply_chat_template] 通过@eustlb 通过抽样率来调用 (#48794)
* [CI] 添加链接检查器 (#48160) by @stevhliu
* Qwen3.8 GGUF (#48660) 作者：@SunMarc
* 文档：修复 Expert_parallelism.md 中损坏的 #combining-with-fsdp2 锚点 (#48854)，作者：@ydshieh
* [GPTNeoX Japanese] 修复 RoPE 忽略partial_rotary_factor (#48652) by @blipbyte
* QA：停用规则 41 (#48852) by @tarekziade
* 修复动态缓存层上的 `reset` (#48809) by @jiqing-feng
* [生成] 使所有方法和 logits 处理器与 lm_head 输出大小无关 (#48846) by @Cyrilvallez
* 修复 kosmos (#48853) by @Cyrilvallez
* 添加对某些编码器-解码器模型的仅因果变体的测试（#48760），作者：@nandan2003
* 修复 ESMFold2 配体 iPLDDT 权重：mol_type 非聚合物代码为 3，而不是 4 (#48831) by @faustomilletari
* 修复@ydshieh 不稳定的 RfDetr test_save_load (#48869)
* 修复(ci)：通过 @hf-security-analysis[bot] 强化 GitHub Actions 工作流程 (#48160) (#48834)
* 修复 Glm4MoeIntegrationTest：分为 3 个测试，由 @ydshieh 切换到 GLM-4.5-Air (#48820)
* 修复 Mllama 的 `StaticCache` 并启用 `torch.compile` (#48141) by @jiqing-feng
* 通过重新映射遗留的rotary_dim (#48486) by @dajiao Huang 来修复Minimax M2的partial_rotary_factor
* 修复 Pixtral 图像处理器 do_pad 选项 (#48872) by @jzakrzew
* [CB] 添加暂停机制 (#48462) by @remi-or
* 修复 DFlash 采样候选者丢失批量维度的问题 (#48281) by @VaggelisGian
* 修复助理模型调用生成时的滑动窗口缓存 (#48280) by @VaggelisGian
* 修复 GLM rod_parameters dict 跨测试实例的共享突变 (#48895) by @ydshieh
* [`feat`] 允许通过模型配置从 `last_hidden_state` 解绑 `hidden_states[-1]` (#48087) by @tomaarsen
* 当第一个示例没有图像时修复 Idefics2 填充 (#48753) by @Arnavsharma2
* 当加速器无法报告可用内存时，模型加载不会失败 (#48136) by @studioego
* [改进] 由 @remi-or 重新设计 mHC 的文档字符串和注释 (#48888)
* [serge] 修复了模型 `deepseek_vl` 的 3 个集成测试因 `other` 而失败的问题（其他 (3)）（#48536），作者：@sergereview[bot]
* 添加 auto_docstring 任务模型覆盖 (#47815) by @guarin
* 使 LongcatFlashConfig 保持一致，无需构建模型 (#48899) by @hmellor
* [`DSA`] 仅使用索引器在 dsa 上保存潜在变量 (#48876) by @vasqu
* [聊天解析] 强制 oneOf 工具参数 (#48719) by @yonigozlan
* 始终在 Doge 中实现因果掩码，以便 sdpa 保持因果关系 (#48821) by @blipbyte
* 修复与签名不匹配的文档字符串参数名称 (#48474) by @IshaanPotle
* 将 olmo 和 bigbird_pegasus 的 test_generate_with_static_cache 标记为片状 (#48856) by @ydshieh
* 清理一些 MoE 模型的集成测试 (#48833) by @ydshieh
* 修复 lm_head 的 T5 绑定权重顺序 (#48238) by @vaibhavmashal
* 通过 @dhruv7477 从最大的叶模块 (#47211) 调整 device_map 缓冲区的大小
* 修复编译缓存测试 (#48923) by @Cyrilvallez
* 由 @tonywu71 更新 NeoMME 模型文档中的 arXiv 引用 (#48926)
* 将 Aria 的 MoE 标准化到专家界面 (#48907) by @hmellor
* 修复 Whisper 长格式警告中的所有格拼写错误 (#48877)，作者：@erikdw
* 模块化转换小修复 (#48934) by @zucchini-nlp
* 修复（vibevoice-asr）：使用整数上限除法来进行音频令牌计数（#48864），作者：@ege-arhan
* 通过 @karatarassul4-max 改进延迟导入错误消息 (#48602)
* 修复由于@SunMarc 删除 attn mask 导致的测试 (#48903)
* 文档：修复与签名不匹配的文档字符串参数 (#48904) by @simpleqt
* DOC：改进 remap_legacy_layer_types 函数的文档 (#48651) by @mathewOracle
* 在文本配置上对齐特殊标记 (#48847) by @qgallouedec
* 文档：修复 i18n 自述文件和 xlnet 文档字符串中的无效文档链接 (#48905) by @simpleqt
* 修复 AXK2 集成测试：更新 CUDA 预期文本并重命名类 (#48941) by @ydshieh
* 每次加载时解析一次 Hub 修订版，而不是通过 @Wauplin 传递私有 _commit_hash (#47611)
* 保持图像处理器后端在键和数据类型上同步 (#48739) by @yupengtang
* 修复了拥抱匹配器损失中不可行的成本矩阵错误 (#47730) by @guarin
* 修复更多问题（#48979），作者：@zucchini-nlp
* 跳过 torchvision 图像标准化路径中不必要的图像副本 (#48897) by @jzakrzew
* gguf 更好的 attn 默认值 (#48935) by @SunMarc
* 添加姿势估计关键点预处理到 Sapiens2ImageProcessor (#47199) by @Sainava
* 修复图像处理器类级大小突变和 min_pixels 处理 (#48916) by @Gracy769
* 使用 einsum 收缩 mamba2 块扫描，而不是广播然后求和 (#48978) by @tarekziade
* 修复@Janiarafath 的 DeepseekV4 评论中的拼写错误 (#48953)
* 减少 example_torch CI 作业中的峰值内存（OOM 修复）（#48983），作者：@ydshieh
* 修复 vivivoice TTS 批处理音频索引 (#48902) by @ebezzam
* [CB] [Major] 升级缓存以支持不同的注意力类型 (#47809) by @remi-or
* 修复 SwitchTransformers Top1 路由器：原始 logits、专家容量统计和路由器损耗 (#48421)，作者：@yurekami
* 修复 Qwen3OmniMoeIntegrationTest OOM (#48987) by @ydshieh
* 让 `prefix_allowed_tokens_fn` 覆盖模型 `-inf` 并引发无法满足的生成约束的异常。 （＃48927）@ksh108405
* [生成] 通过删除 @Cyrilvallez 所需的 `update_candidate_strategy` (#48982) 来简化候选生成器
* [生成] 始终正确限制最大长度/eos 令牌的辅助解码 (#48981) by @Cyrilvallez
* QA：应用 ruff 规则 PLW1514 (#48990) by @tarekziade
* 更新 tokenizer gguf 支持 (#48656) by @SunMarc
* [vLLM] 修复 Transformers 后端视频输入的视频令牌计数（第 2 部分）(#48900)，作者：@harshaljanjani
* 由 @SunMarc 更新 ggml 内核路径 (#48991)
* 在 MPS 上启用压缩张量 FP8 内核 (torch >= 2.15) (#48985) by @Isalia20
* 修复旋转嵌入中的 mps 自动投射处理 (#49006) by @Isalia20
* 修复每层头部形状的静态缓存 (#48619) by @dacorvo
* 总结示例：下载 NLTK punkt_tab，而不是 punkt (#49014) by @davanstrien
* [文档] 修复 @Wauplin 遗留的 hf CLI 引用（变压器）(#48988)
* 使用 StaticCache 修复 RecurrentGemma 编译生成（#48961），作者：@sywangyi
* 由 @tarekziade 更新了 GraniteMoeHybrid 期望 (CPU) (#49016)
* OpenVINO HF 导出器 (#47003) 作者：@IlyasMoutawwakil
* 修复 @tarekziade 的嘈杂评论 (#49013)
* 修复了由于@SunMarc 删除 attn mask 导致的 VLM 辅助解码 (#49019)
* 弃用最小-最大像素 (#49021) by @zucchini-nlp
* 保留标记生成器未定义的特殊标记 ID (#48708) by @albertvillanova
* 添加了 @tarekziade 的 MemoryCleanupMixin 的更多用法 (#49011)
* 缩短 @tarekziade 的嘈杂 OpenVINO SDPA 评论 (#49033)
* PEFT x 基于 Dtensor 的 TP 集成 (#48485) by @michaelbenayoun
* 修复(zamba)：添加 use_associative_scan 配置标志以避免 torch.compile 变慢 (#48331) by @msnliu
* 每个作业的 GITHUB_TOKEN 权限范围 (#49046) by @hf-security-analysis[bot]
* 修复 `torch.compile` 下蒙版创建不会被跳过的问题 (#48975) by @jiqing-feng
* [聊天] 通过 @ariG23498 的聊天 CLI (#49031) 加载 GGUF 模型
* 通过 @hf-security-analysis[bot] 固定 GitHub 提交 SHA 的操作 (#49049)
* 训练期间仅在 BigBird 块稀疏注意力中使用 numpy 种子 (#49037) by @jiqing-feng
* QA：修复 llama4 泄漏问题 (#49042)，作者：@tarekziade
* 修复启动失败：删除可重用工作流调用者无法授予的权限（#49055），作者：@paulinebm
* 修复启动失败：删除拉取请求：从 check_failed_tests.yml (#49057) by @paulinebm 读取
* 在 XPU 上注册剩余的 mamba-ssm 内核层 (#49035) by @jiqing-feng
* 添加用于构建 XPU CI Docker 图像的工作流程 (#49039)，作者：@regisss
* 修复处理器的辅助掩码 (#48793) by @Rocketknight1
* 添加 MPS 维护者 (#49052) by @Rocketknight1
* [文档] 加载行为 (#49023) by @stevhliu
* [Nemotron3Diarization] nit: hub pr 合并到 main (#49065) by @eustlb
* 修复(ci)：通过 @hf-security-analysis[bot] 强化 GitHub Actions 工作流程 (#49057) (#49059)
* 在 MoE VLM 包装器中荣誉 `config.output_router_logits` (#48885) by @qgallouedec
* 修复 XPU Docker 映像构建 (#49073) by @regisss
* 修复辅助 eos 代币条件 (#49075) by @Cyrilvallez
* [serge] 使用 MemoryCleanupMixin 修复 Moshi 集成测试中的 OOM (#48839) by @sergereview[bot]
* 修复 RoPE 配置的奇怪 head_dim 验证 (#48524)，作者：@somuai
* 保持已解码的数组参数不变 (#49062) by @yonigozlan
* 通过填充批次修复 Parakeet 热切关注中的 NaN (#49070)，作者：@ArthurZucker
* 将 Huggingface_hub 上限提升为 <3.0 (变形金刚) (#49083) by @Wauplin
* 在 OPT 的因果掩码创建中将 `attention_mask` 保留为 `None` (#49002) by @jiqing-feng
* 添加 `Trainer.end` (#48875) by @qgallouedec
* 添加图像处理测试器 init (#48829) by @guarin
* [Executorch] 添加 MLX 配方 (#48910) by @metascroy
* [Zamba] 修复关联扫描在集成测试中破坏 ONNX 导出和 OOM (#49092) by @ydshieh
* 修复 RGB 早期返回跳过 PNG tRNS 合成的问题 (#49005) by @cs-fisha
* 在文档和 PyTorch 示例中使用命名空间数据集 ID (#49017)，作者：@davanstrien
* 修复 MaskFormerSwin 注意力掩码 dtype 以遵循隐藏状态 (#49032) by @kaixuanliu
* [NemotronH-Omni] 修复测试张量创建中的设备不匹配问题 (#49102) by @ydshieh
* [serge] 修复模型 `cvt` 的 2 个集成测试因 `output_mismatch` 失败（张量值不同 (2)） (#49076) by @sergereview[bot]
* [serge] 修复模型 `hy_v3` 的 2 个集成测试因 `output_mismatch` 失败（张量值不同 (2)） (#49068) by @sergereview[bot]
* [serge] 修复了模型 `pvt_v2` 的 2 个集成测试失败，`other` (#49067) by @sergereview[bot]
* 保留配置声明的 eos id (#49082) by @albertvillanova
* 在 torch.compile 下的 TPU 设备上使用 grouped_mm (#49097) by @salkan0
* [serge] 修复了模型 `jamba` 的 2 个集成测试因 `other` 而失败的问题（其他 (2)）（#49044），作者：@sergereview[bot]
* 在配置后初始化中重新映射旧版 Gemma 1hidden_act (#49084) by @PCfVW
* 修复了 torch < 2.9 (is_contigious_or_false) (#49124) 上的导出器导入，作者：@ydshieh
* [gemma3n] 修复音频测试夹具：使用 hf_hub_download 而不是 @ydshieh 的 load_dataset (#49128)
* qwen3 模型映射到集线器上错误的分词器类 (#49116) by @itazap
* 恢复 GPT-SW3 分词器中设置的 Unicode 空白 (#48912) by @David-Wu1119
* [AMD] 修复一些集成测试 (#49153)，作者：@Abdennacer-Badaoui
* [Gemma] 在 #49084 (#49133) 之后修复 cuda 8 的 test_model_7b_fp16_static_cache 预期值 @ydshieh
* 修复 UMT5 解码器自注意力不具有因果关系的问题 (#49135) by @the-cross-art
* 跳过在内核丢失时回退到集线器内核的闪存测试 (#49129)，作者：@Abdennacer-Badaoui
* 自动生成模型初始化 (#47829) by @guarin
* 修复 get_json_schema 删除列表/字典/文字类型联合的项目/枚举 (#49136) by @JoeyTan21
* 根据当前硬件选择默认的 Flash 实现 (#49109) by @Abdennacer-Badaoui
* 弃用不再有任何效果的 use_mamba_kernels 配置标志 (#49155) by @albertvillanova
* [CI] ssh-runner：添加可选的 cache_type 输入以在存储桶和 EFS 运行程序之间切换 (#49159) by @ydshieh
* [生成] 仅对多模式数据进行一次编码 (#45783) by @zucchini-nlp
* ESMC 不再有 -hf 存储库名称 (#49158)，作者：@Rocketknight1
* [MPS] 删除 metal-flash-sdpa 的 cu_seqlens_k 克隆解决方法 (#49091) by @Isalia20
* [PerceptionLM] 恢复 test_inputs_embeds 覆盖以修复 @ydshieh 的不稳定测试 (#49165)
* [CB] 修复 @remi-or 使用 B200 时发现的失败测试 (#49171)
* [imagegpt/vilt/trocr] 修复缓存装置测试：使用 hf_hub_download 而不是 @ydshieh 的 load_dataset (#49178)
* 修复丢失的呼叫 (#49163) by @molbap
* 文档 image_like_kwargs (#49180) by @guarin
* [CacheHardIntegrationTest] 使用专用的 safetensors 存储库来修复 Xet 存储桶缓存损坏 (#49182)，作者：@ydshieh
* 在 Hugging Face Jobs (#49050) 上运行示例脚本的文档，作者：@davanstrien
* 修复了 @JHC56 在变压器聊天中生成标志值时的反斜杠处理 (#48709)
* 通过 @rubenG1009 完成删除 MPS 自动施放解决方法 (#49157)
* 修复训练器检查点恢复在多进程 CPU 上崩溃的问题 (#49123) by @neevmodh
* 修复 @Ahwar 的 optimization-cli 导出的命令语法 (#46451)
* QA：修复嘈杂的评论检查器（#49184），作者：@tarekziade
* 更新至火炬 2.14 (#49199) by @sywangyi
* 视频处理器 - 一般维护 (#48251) by @zucchini-nlp
* [Parakeet] 将 NeMo 的随机深度转换为 Layerdrop (#49191) by @Deep-unlearning
* [MPS] 让 mps sdpa 直接处理分组查询注意力 (#49187) by @Isalia20
* 将不再加载的数据集替换为 @davanstrien 维护的上传 (#49018)
* 在 `auto_find_batch_size` 下的 eval OOM 上快速失败 (#49198) by @qgallouedec
* 修复 SequenceBiasLogitsProcessor 边缘情况：标记 id 0 且前缀等于上下文 (#49117) by @lucaluo925
* 将裸列表、元组和字典注释映射到 get_json_schema 中正确的 JSON 模式类型 (#49145) by @825pranav
* [`Kernels`] 同步曼巴版本 (#49205) by @vasqu
* gguf 用户定义的标记 (#49008) by @SunMarc
* QA：使用 noqa 恢复 masking_utils 导出注释（#49209），作者：@tarekziade
* 修复混合输入的 Deepstack 功能 (#49177) by @zucchini-nlp
* 修复 cpmant 和 wav2vec2 中过时的 _added_tokens_encoder 条目 (#47440) by @ishan-1010
* 使用 extra_special_tokens 修复 extra_special_tokens 数据丢失 (#47848) by @erichanwang
* 修复 MPS GQA 版本控制 (#49210) by @Isalia20
* 添加 Strix Halo (gfx1151) Atlas Inference Hub-kernel 路径用于 Qwen3.5/3.6/3.8 Gated DeltaNet (#49127) by @AzeezIsh
* 修复 MiniMax M3 部分 3D 视觉旋转嵌入 (#49164) by @cuichenx
* 修复 Qwen3.5-MoE 和其他 MoE 模型中缺少的 router_logits (#49179) by @zucchini-nlp
* [Nemotron3Diarization] 修复@eustlb 流式传输最后一个 stft 帧丢失的问题 (#49167)


## 重大社区贡献

以下贡献者对上一个版本的库进行了重大更改：

* @harshaljanjani
    * 模型：将 GTE 添加到变形金刚 (#48416)
    * [vLLM] 修复 Transformers 后端视频输入的视频令牌计数（第 2 部分）(#48900)
    * 🚨 [vLLM] 修复 Transformers 后端视频输入的视频令牌计数（第 1 部分）(#48894)
* @eustlb
    * [Nemotron3Diarization] 修复流媒体最后一个 stft 帧丢失的问题 (#49167)
    * [Nemotron3Diarization] nit: hub pr 合并到 main (#49065)
    * 添加 Nemotron3Diarization (#49056)
    * [apply_chat_template]传递sampling_rate来调用(#48794)
* @tarekziade
    * QA：使用 noqa 恢复 masking_utils 导出注释 (#49209)
    * QA：修复嘈杂的评论检查器（#49184）
    * QA：修复 llama4 泄漏问题 (#49042)
    * 缩短嘈杂的 OpenVINO SDPA 注释 (#49033)
    * 添加了 MemoryCleanupMixin 的更多用法 (#49011)
    * 修复嘈杂的评论 (#49013)
    * 更新了 GraniteMoeHybrid 期望 (CPU) (#49016)
    * QA：应用皱褶规则 PLW1514 (#48990)
    * 使用 einsum 收缩 mamba2 块扫描，而不是广播然后求和 (#48978)
    * QA：停用规则 41 (#48852)
    * QA：添加了用于测试的 `MemoryCleanupMixin` 类 (#48681)
    * 综合测试资产 (#48589)
* @ydshieh
    * [CacheHardIntegrationTest] 使用专用的 safetensors 存储库来修复 Xet 存储桶缓存损坏 (#49182)
    * [imagegpt/vilt/trocr] 修复缓存装置测试：使用 hf_hub_download 而不是 load_dataset (#49178)
* [PerceptionLM] 恢复 test_inputs_embeds 覆盖以修复片状测试 (#49165)
    * [CI] ssh-runner：添加可选的cache_type 输入以在存储桶和 EFS 运行程序之间切换 (#49159)
    * [Gemma] 修复 #49084 之后 cuda 8 的 test_model_7b_fp16_static_cache 预期值 (#49133)
    * [gemma3n] 修复音频测试夹具：使用 hf_hub_download 而不是 load_dataset (#49128)
    * 修复 torch < 2.9 上的导出器导入 (is_contigious_or_false) (#49124)
    * [NemotronH-Omni] 修复测试张量创建中的设备不匹配问题 (#49102)
    * [Zamba] 修复关联扫描在集成测试中破坏 ONNX 导出和 OOM (#49092)
    * 修复 Qwen3OmniMoeIntegrationTest OOM (#48987)
    *减少examples_torch CI作业中的峰值内存（OOM修复）（＃48983）
    * 修复 AXK2 集成测试：更新 CUDA 预期文本并重命名类 (#48941)
    * 清理部分 MoE 模型的集成测试 (#48833)
    * 将 olmo 和 bigbird_pegasus 的 test_generate_with_static_cache 标记为片状 (#48856)
    * 修复 GLM rod_parameters dict 跨测试实例的共享突变 (#48895)
    * 修复 Glm4MoeIntegrationTest：分为 3 个测试，切换到 GLM-4.5-Air (#48820)
    * 修复不稳定的 RfDetr test_save_load (#48869)
    * 文档：修复 Expert_parallelism.md 中损坏的 #combining-with-fsdp2 锚点 (#48854)
    * 放宽 test_generate_with_static_cache 中的静态缓存容差 (1e-5 → 5e-5) (#48815)
    * 添加 MuseGlimmerAssistantModel 的集成测试 (#48796)
    * 修复 Glm4vMoeIntegrationTest：offload_folder + MemoryCleanupMixin (#48776)
    * 将每日 CI 切换到火炬 2.14 — 更新预期输出 (#48750)
    * [DeepseekV3] OOM 级联根本原因调查（conversion_mapping 中的生成器引用泄漏）(#48720)
    * [CI] 将硬编码的用户名白名单替换为工作流触发器中的author_association 检查 (#48712)
    * [MusicgenMelody] 修复在生成步骤 0 处默默丢弃的调节 (#48679)
    * [修复] 修复 GlmOcr 集成测试：错误的令牌 ID 和图像令牌解码错误 (#48650)
    * [测试] 修复 NougatModelIntegrationTest：pin 工件修订并更新黄金值 (#48638)
    * [CI] 删除重复的 Nvidia/AMD CI 回复评论并添加标题 (#48655)
* @莫尔巴普
    * 修复丢失呼叫 (#49163)
    * 🚨 🚨让一些恐龙达到现代标准 (#46266)
    * [修复] yolos 卸载问题 (#48688)
* @雷米-或
    * [CB] 修复使用 B200 时发现的失败测试 (#49171)
    * [CB] [Major] 升级缓存以支持不同的注意力类型 (#47809)
    * [改进] 重新设计 mHC 的文档字符串和注释 (#48888)
    * [CB] 添加暂停机制 (#48462)
    * [修复] 清理 DeepSeek 系列中的三元组 (#48447)
* @jiqing-feng
    * 在 OPT 的因果掩码创建中将 `attention_mask` 保留为 `None` (#49002)
    * 在 XPU 上注册剩余的 mamba-ssm 内核层 (#49035)
    * 训练期间仅在 BigBird 块稀疏注意力中种子 numpy (#49037)
    * 修复 `torch.compile` 下不跳过蒙版创建的问题 (#48975)
    * 修复 Mllama 的 `StaticCache` 并启用 `torch.compile` (#48141)
    * 修复动态缓存层上的 `reset` (#48809)
    * 将像素值转换为 DeepSeek-OCR-2 中的补丁嵌入数据类型 (#48632)
    * 修复仅标记器模型的 TextToAudioPipeline 崩溃问题 (#48505)
    * 修复 XPU 上缓慢的集成测试 (#48611)
    * 在 XPU 上注册激活内核层 (#47858)
* @沃普林
* 将huggingface_hub上限提高到<3.0（变形金刚）（#49083）
    * [文档] 修复旧版 hf CLI 引用（变压器）(#48988)
    * 每次加载时解析 Hub 修订一次，而不是传递私有 _commit_hash (#47611)
    * 使用 Huggingface_hub httpx 导出 (#48685)
* @meatybobby
    * 添加对 Nemotron Omni 的支持 (#46509)
* @Sainava
    * 将姿态估计关键点预处理添加到 Sapiens2ImageProcessor (#47199)
* @jp1924
    * 添加 HyperClovaX 视觉 (#44314)

---

> 📦 仓库：[huggingface/transformers](https://github.com/huggingface/transformers) · 🏷️ 版本：`v5.18.0` · 📅 发布：2026-09-30 · [查看英文原版 Release](https://github.com/huggingface/transformers/releases/tag/v5.18.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
