---
title: "vllm v0.23.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.23.0"
version: "v0.23.0"
published: "2026-06-15"
type: "minor"
lang: "zh"
---

# vllm v0.23.0

# vLLM v0.23.0 Release Notes

请注意，此版本尚不支持 Minimax M3。请按照[vLLM秘方](https://recipes.vllm.ai/MiniMaxAI/MiniMax-M3)获取M3的使用指南。

## 亮点

此版本包含来自 200 名贡献者的 408 项提交（63 名新贡献者）！

* **DeepSeek-V4 跨后端成熟**：继在 v0.22.0 中引入之后，DeepSeek-V4 又获得了一次大规模的强化和优化。其稀疏 MLA 元数据现已与 DeepSeek-V3.2 (#44699) 解耦，它获得了 TRTLLM-gen 注意力内核 (#43827)、对 Mega-MoE 的 EPLB 支持 (#43339)、滑动窗口 KV 缓存的选择性前缀缓存保留 (#43447) 以及 DSA MTP 的索引共享功能 (#44420)。该模型还与 `torch.compile` 分离（#43746、#43891），重构了其注意力和 RoPE 路径（#44569、#44262、#43926），并添加了 XPU 注意力解码路径（#42953）。
* **Model Runner V2 扩展到更密集的模型**：除了 Qwen3 之外，**Llama 和 Mistral 密集模型** (#43458) 现在默认选择 MRv2。它获得了 FlashInfer 采样器 (#42472)、可破坏的 CUDA 图 (#44050)、管道并行气泡消除 (#42187)、混合模型的内核块大小支持 (#38831) 和 Gemma 4 MTP (#43241)。
* **Rust 前端成长**：实验性 Rust 前端添加了流式 `generate` 端点 (#43779)、动态 LoRA 端点 (#43778)、`/version` (#43854) 和 `/server_info` (#43942) 端点、服务器路由器扩展钩子 (#43774)、请求 ID 标头(#43883)，以及许多新的工具解析器(InternLM2 #43481、hy_v3 #43872、Phi-4-mini #44213、Gemma4 #43850)。
* **Gemma 4**：添加了无编码器 **Gemma 4 Unified** 支持 (#44429) 和 Gemma 4 MTP (#43241)，以及许多准确性和启动修复。
* **Transformers v5 兼容性**：vLLM 现在针对 Transformers v5，具有供应的 MiniCPM-V/O 处理器 (#44282) 以及 Sarvam (#38804) 和 Voxtral (#44559) 的兼容性修复程序。
* **多层 KV 缓存卸载**：卸载框架获得了**对象存储辅助层** (#41968)、默认为有能力的连接器启用 HMA (#41847)、对 HMA 模型的分层支持 (#44287) 以及通过 `on_new_request` 生命周期挂钩的每个请求卸载策略 (#43205)。
* **统一解析器**：推理和工具调用解析现在统一在单个 `Parser.parse()` 接口后面 (#44267)，响应解析器已迁移到该接口 (#42977)。

### 模型支持
* **新模型**：Step-3.7-Flash (#43859)、Cosmos3 Reasoner (#43356)、Gemma 4 Unified 无编码器 (#44429)、JetBrains Mellum v2 (#43992)、Granite Speech Plus (#43519)、Cohere Mini Code (#44707)。
* **Gemma 4**：无编码器统一支持 (#44429)、MTP (#43241)、原生 ViT 线性层 (#43798)、从量化中排除的视觉嵌入器 (#44571)，以及 TP>1 下 MTP 的修复 (#43909)、并发下块表不匹配 (#43982)、变压器处理器启动崩溃 (#44232), and CPU init (#44615).
* **Transformers v5**：供应商 MiniCPM-V/O 处理器 (#44282)、Sarvam compat (#38804)、适用于 Transformer≥5.10 (#44559) 的 Voxtral `fetch_audio`。
* **模型修复和增强**：`torch.compile` 下的 Qwen3-VL/Qwen3-omni-thinker 深栈精度 (#43617)、Qwen3-VL 的 EVS (#44205)、GLM-5.1 PP 加载 (#42944)、GLM-4.1V 处理器 logits (#43575)、GLM-4.6V 视频加载器(#44417)、OlmoHybrid init (#43846)、HyperCLOVAX 远程代码删除 (#43860)、Bailing-MoE 旋转因子 (#43770)、Step3 PP 残留 KeyError (#37622)、MiniCPM-V-4.6 视频 (#44509)、MiniCPM-O 音频取消填充 (#38053)、 MiniCPM-V 批量预处理 (#44609)、FunASR-Nano 初始化 (#44215)、Cohere 路由方法 (#44021)、Kimi-K2.5 FlashInfer ViT 元数据 (#44493)。
* **多模式**：自动选择 VLM 的注册视频加载器 (#44126)、每步 O(log n) 多模式项目处理 (#44212)、基准中的本地图像编码 (#43843)、交错的自定义图像基准数据集 (#43636)。
* **池化/分类**：池化 UX 的正确例外（#44593）、池化器类的 `extra_repr()`（#44805）、LoRA 适配器名称池化修复（#44410）、重新设置的生成评分入口点（#44153）、扩展池化器单元测试（#43818、#44471）。
* **重构**：InternLM2 的 AutoWeightsLoader (#38278)。

### 引擎核心
* **Model Runner V2**：Llama 和 Mistral 密集模型的默认值 (#43458)、FlashInfer 采样器 (#42472)、可破坏的 CUDA 图 (#44050)、删除 Eagle 的专用 CUDA 图池 (#44078)、管道并行气泡消除 (#42187)、混合模型的内核块大小 (#38831)、新分配的 KV 归零用于混合 + FP8 KV 缓存的块（#43990）、用于注意元数据的实际批次 `max_seq_len`（#43991）、拒绝采样接受率修复（#40651）、KVConnector + PP 清理（#43732）、投机者预填充预热/捕获（#44253）。
* **推测性解码 (DFlash)**：因果 DFlash (#43445)、正确的前瞻槽分配 (#43733)、前缀缓存损坏修复 (#42971)；独立起草者注意后端选择 (#39930)、草稿按 `num_heads_q` 分割的注意组 (#43543)、SWA 前缀缓存掩码中的 EAGLE/MTP 前向缓存 (#44082)。
* **Attention 和混合/Mamba**：FlexAttention/FlashAttention num-blocks-first 布局 (#42095)、OOT MLA 预填充后端注册 (#43325)、FlashAttention 上游同步 (#44065)、Mamba LINEAR 注意力模块重构 (#43556)、损坏的 MLA + 线性注意力修复 (#43961)、KDA 转换状态统一(#44539) 和门/累积和融合 (#43667)、Mamba SSD `do_not_specialize` (#43803)、Qwen3.5 混合预填充+解码分割路由 (#44700)、MiniMax-M2 门内核 (#38445)。
* **KV 缓存和调度程序**：可插入 `KVCacheSpec` (#37505)、`scheduler_block_size` 线程到 KVCacheManager/Coordinator (#44165)、`max_concurrent_batches` 移动到 `VllmConfig` (#44274)、配置验证拒绝 0/负旋钮 (#43794、#44057、#44207)、 KV-cache 秤样板已从重量加载中移除 (#43167)。
* **核心**：模型初始化后冻结工作线程中的垃圾收集器 (#44363)、用于就地更新的稀疏 NCCL 权重传输 (#40096)、优雅的 spinloop 外部加载失败处理 (#43659)、预定函数弃用 (#43358)。

### 大规模服务和分布式
* **KV 缓存卸载**：对象存储辅助层 (#41968)、默认情况下为有能力的连接器 (#41847) 和分层 (#44287) 打开 HMA、按请求卸载策略 (`on_new_request`) (#43205) 和 `on_schedule_end()` 挂钩 (#44206)、令牌偏移选择性卸载 (#39983)、跳过解码阶段CPU 卸载中的块 (#43797)、页面大小块对齐 (#43689)、小型 CPU→GPU `swap_blocks_batch` 的 Triton 快速路径 (#42212)、过时的滑动窗口块修复 (#42959)。
* **KV 连接器/分解服务**：PP 感知握手聚合和中间 PP 输出管道 (#43720)、多异步 KV 负载死锁修复 (#44560)、Nixl Mamba 前缀缓存模式 (#42554)、NixlConnector `kv_both` 角色弃用周期 (#43874)、Mooncake 修复 (#43742) #44103、#42694)、LMCache `LMCacheMPConnector` (#42865)、EC 连接器关闭 API (#42423) 和非阻塞查找 (#41627)、从 `iteration_tokens_total` 中排除的 KV 传输令牌 (#43346)。
* **EPLB**：默认情况下异步 EPLB (#43219)、DeepSeek-V4 Mega-MoE 的 EPLB (#43339)、Nixl 零拷贝 EPLB 传输 (#41633)。
* **数据并行**：特定节点上的 DP Ray 放置组 (#44669) 和分组节点分配修复 (#43998)、DP 管理程序的 SSL (#43688)、DP 协调器启动超时提高到 120 秒 (#42343)、每个 GPU 工作线程的 RDMA NIC 选择 (#42083)。

### 硬件与性能
* **NVIDIA / 内核**：FP8 FlashInfer 对 ViT 的关注 (#38065)、Hopper 上默认的 Triton MoE 后端 (#44220)、CUTLASS FP8 缩放毫米填充旁路 (+20%) (#43706)、MoE 置换缓冲区预分配 (+9–14%) (#43014)、`Fp8BlockScaledMM` `new_empty()` 优化 (#43677)、TurboQuant 共享 dequant 缓冲区 (#40941)、针对 H200/RTX PRO 调整的 `selective_state_update` (#44251)、vLLM/AITER 自定义操作的电感器快速路径回退 (#42129)、Gemma RMS all-reduce 融合 (#42646)、DGX B300 上的 NUMA 自动绑定（＃43270）。
* **AMD ROCm**：用于 RDNA3 (gfx1100) 的 ROCm 7.2.3 (#43136)、AITER v0.1.13.post1 (#44265)、原生 W4A16 (#41394) 和融合 MoE W4A16 HIP (#44075) 内核，默认情况下 AITER top-k/top-p 采样器(#43331)、AITER FA 中的注意力接收器支持 (#43817)、AITER hipBLASLt GEMM 在线调整 (#40426)、ROCm 的 `permute_cols` (#44674)、AMD 的块优先 KV 布局 (#43660)、用于规范解码的 N=5 wvSplitK (#40687)、MoRI 连接器改进 (#43303) ＃41751，＃40344）。
* **Intel XPU**：vllm-xpu-kernel v0.1.7 (#41019)、`block_fp8_moe` (#42139)、块级 W8A8 FP8 路径 (#39968)、GPTQ sym-int4 的 WNA16 oracle (#41426)、rms_norm/act Quant fusions (#43963)、 GDN-attention MTP (#43565)、Triton 选择性扫描操作 (#43421)、透明睡眠模式 (#37149)、XPU 上的 CPU/分层卸载 (#36423)、DeepSeek-V4 注意力解码路径 (#42953)。
* **CPU 和其他架构**：AMD Zen CPU 上的 zentorch 加速 W8A8/W4A16 (#41813)、CPU top-k/top-p Triton 采样 (#43633)、混合批次中不可分割的 GQA 解码 (#43032)、`cpu_awq` 折叠到 `awq_marlin` (#43841)、RISC-V RVV WNA16 助手 (#42730)、融合的 GDN 门控增量规则内核 (#43534)、PowerPC SHM 通信器 (#43754)、arm64 CI 映像 (#41303)。
* **TPU**：tpu 推理升级到 v0.20.0 (#43394)，然后是 v0.21.0 (#44621)。
* **torch 稳定 ABI**：继续将内核迁移到 libtorch 稳定 ABI — merge_attn_states/mamba/sampler [8/n] (#43361)、注意力/缓存内核 [9/n] (#43717)、头文件 (#44013)、cuda_view/silu_and_mul [10/n] (#44334)、自定义all-reduce/DeepSeek-V4 融合 MLA/MXFP8 MoE [10b/n] (#44365)； ROCm 回退到常规 ABI (#44648)、`_has_module` 试用导入验证 (#44035)。

### 量化
* **ModelOpt**：LM 头量化 (#42124)，MXFP8 非门控 MoE (#42958)。
* **压缩张量**：WNA8O8Int 线性和 WNInt 嵌入 (#44340)、非对称 MoE WNA16 Marlin (#44025)、单类 NVFP4 线性重构 (#42443)。
* **内核和后端**：Triton W4A16 作为非 Marlin 对齐形状的 CUDA 后备 (#43731)、SM 12.x 上的 Marlin MoE (#40923)、Machete W4A16 测试 (#35450)、不受支持的 NVFP4 KV-cache-dtype arch 的快速故障 (#43669)、CuteDSL 压缩器128 分割内核优化 (#44230)。
* **MoE 重构（预言机）**：将 ModelOpt MXFP8 (#42768)、W4A8-int8 (#42789) 和 WNA16 后端选择 (#42553) 迁移到模块化内核预言机中；删除了 `supports_expert_map` (#43108) 和就地融合专家机制 (#43727)。

### API 和前端
* **人择消息 API**：结构化输出和工作支持 (#42396)，消息数组内的系统角色消息 (#44283)。
* **OpenAI / Responses API**：`system_fingerprint` 字段 (#40537)、使用 `required` 进行流式传输工具/函数调用 (#40700)、响应中的 `chat_template_kwargs` (#43761)、HF 渲染器中的开发人员到系统转换 (#43590)、未流式传输的工具调用参数流式修复（＃44348）。
* **解析器**：`Parser.parse()` 背后的统一推理 + 工具调用解析 (#44267)，响应解析器迁移到统一接口 (#42977)，非流式工具参数刷新移入解析器 (#44017)；新/固定的工具解析器 - MiniCPM5 XML (#43175)、Qwen3 XML JSON-args-first (#43243)、DeepSeek DSML 增量流 (#42879)、first-args-chunk 序列化器修复 (#42683)、`tool_choice="none"` 在流中获得荣誉 (#42752)、null-tool-args 崩溃修复（＃43862）。
* **前端**：`thinking_token_budget` 验证（#43402）、GPT-OSS 指令渲染（#44330）、Harmony `stop_token_ids` 清理（#44009）、聊天/完成验证器中一致的 `VLLMValidationError`（#36254）、开发入口点的整合（#44170）和在线服务实用程序（＃44479）。
* **Rust 前端**：流式传输 `generate` 端点 (#43779)、动态 LoRA 端点 (#43778)、`/version` (#43854) 和 `/server_info` (#43942)、服务器路由器扩展钩子 (#43774)、`--enable-request-id-headers` (#43883)、递归工具参数转换 (#44299)、`include_reasoning=false` (#44391)、`--language-model-only` 跳过多模式处理器 (#44500)、每引擎批量自动中止 (#44591)、UTF-8 字符边界去标记器修复 (#44620)、HF 聊天模板修复 (#44311)、跨 DP 聚合`is_sleeping`/`reset_prefix_cache` (#43429)；新工具解析器 — InternLM2 (#43481)、hy_v3 (#43872)、Phi-4-mini JSON (#44213)、Gemma4 (#43850)。
* **基准**：`vllm bench serve` 中 Moonshot/阿里巴巴工作负载的定时跟踪重放（#39795），通过 `--chat-template-kwargs` 进行推理模型（思考）基准测试（#44244）。

### 安全
* **传输加密**：数据并行管理程序的 SSL/TLS 支持 (#43688)。
* **Untrusted 输入强化**：在词表外标记 ID 到达 GPU logprob 路径之前拒绝它们 (#44042)，并修复 Rust 增量去标记器中针对格式错误的输入的 UTF-8 字符边界恐慌 (#44620)，这两者都可以防止请求触发的崩溃。
* **参数验证**：拒绝无效的 `thinking_token_budget` 值 (#43402)、非正 `ParallelConfig` 整数旋钮 (#44057)、零值配置字段 (#43794) 和超出范围的 `max_num_scheduled_tokens` (#44207)。

### 依赖关系
* FlashInfer v0.6.12 (#44036)、ROCm 7.2.3 (#43136)、AITER v0.1.13.post1 (#44265)、tpu-inference v0.21.0 (#44621)、mistral-common 凹凸 (#44649)、fastsafetensors v0.3.2 （＃43625）。
* 删除了过时的 cuDNN 前端上限 (#42599)； Docker 修复了 flashinfer-jit-cache (#44366)、FlashInfer CuTe DSL JIT `libcublas-dev` (#39855) 和 CUTLASS DSL cu13 安装顺序 (#45204)。

### 弃用
* 弃用 `JAISLMHeadModel` (#43784)。
* 开始 NixlConnector `kv_both` 角色的弃用周期 (#43874)。
* 删除之前计划在 v0.21.0 中弃用的功能 (#43358)。

## 新贡献者

* @aadwived 在 https://github.com/vllm-project/vllm/pull/41813 中做出了第一个贡献
* @adhithyamulticoreware 在 https://github.com/vllm-project/vllm/pull/44615 中做出了第一个贡献
* @adityasingh2400 在 https://github.com/vllm-project/vllm/pull/43550 中做出了第一个贡献
* @adotdad 在 https://github.com/vllm-project/vllm/pull/43100 中做出了第一个贡献
* @amd-fuweiy 在 https://github.com/vllm-project/vllm/pull/43684 中做出了第一个贡献
* @andakai 在 https://github.com/vllm-project/vllm/pull/43617 中做出了第一个贡献
* @animeshtrivedi 在 https://github.com/vllm-project/vllm/pull/39795 中做出了第一个贡献
* @BramVanroy 在 https://github.com/vllm-project/vllm/pull/43087 中做出了第一个贡献
* @CienetStingLin 在 https://github.com/vllm-project/vllm/pull/43394 中做出了第一个贡献
* @devin-lai 在 https://github.com/vllm-project/vllm/pull/44213 中做出了第一个贡献
* @Dymasik 在 https://github.com/vllm-project/vllm/pull/43982 中做出了第一个贡献
* @ECMGit 在 https://github.com/vllm-project/vllm/pull/43332 中做出了第一个贡献
* @fallintoplace 在 https://github.com/vllm-project/vllm/pull/43540 中做出了第一个贡献
* @gagandhakrey 在 https://github.com/vllm-project/vllm/pull/43792 中做出了第一个贡献
* @galletas1712 在 https://github.com/vllm-project/vllm/pull/43926 中做出了第一个贡献
* @garrygale 在 https://github.com/vllm-project/vllm/pull/44205 中做出了第一个贡献
* @Gruner-atero 在 https://github.com/vllm-project/vllm/pull/42967 中做出了第一个贡献
* @hanlin12-AMD 在 https://github.com/vllm-project/vllm/pull/40426 中做出了第一个贡献
* @harshaljanjani 在 https://github.com/vllm-project/vllm/pull/41459 中做出了第一个贡献
* @Holworth 在 https://github.com/vllm-project/vllm/pull/39562 中做出了第一个贡献
* @hoobnn 在 https://github.com/vllm-project/vllm/pull/42752 中做出了第一个贡献
* @HueCodes 在 https://github.com/vllm-project/vllm/pull/44591 中做出了第一个贡献
* @IdoAtadTD 在 https://github.com/vllm-project/vllm/pull/43978 中做出了第一个贡献
* @jasonboukheir 在 https://github.com/vllm-project/vllm/pull/41426 中做出了第一个贡献
* @Jie-Fang 在 https://github.com/vllm-project/vllm/pull/43584 中做出了第一个贡献
* @JINO-ROHIT 在 https://github.com/vllm-project/vllm/pull/43830 中做出了第一个贡献
* @JMonde 在 https://github.com/vllm-project/vllm/pull/37622 中做出了第一个贡献
* @JohnQinAMD 在 https://github.com/vllm-project/vllm/pull/43331 中做出了第一个贡献
* @jwzheng96 在 https://github.com/vllm-project/vllm/pull/44057 中做出了第一个贡献
* @Kartavyasonar 在 https://github.com/vllm-project/vllm/pull/43669 中做出了第一个贡献
* @Krishnachaitanyakc 在 https://github.com/vllm-project/vllm/pull/38053 中做出了第一个贡献
* @linzm1007 在 https://github.com/vllm-project/vllm/pull/43402 中做出了第一个贡献
* @MaciejBalaNV 在 https://github.com/vllm-project/vllm/pull/43356 中做出了第一个贡献
* @Majid-Taheri 在 https://github.com/vllm-project/vllm/pull/43803 中做出了第一个贡献
* @mfylcek 在 https://github.com/vllm-project/vllm/pull/43421 中做出了第一个贡献
* @MHYangAMD 在 https://github.com/vllm-project/vllm/pull/42595 中做出了第一个贡献
* @mikekg 在 https://github.com/vllm-project/vllm/pull/43330 中做出了第一个贡献
* @nightcityblade 在 https://github.com/vllm-project/vllm/pull/44118 中做出了第一个贡献
* @NolanHo 在 https://github.com/vllm-project/vllm/pull/43774 中做出了他们的第一个贡献
* @oguzhankir 在 https://github.com/vllm-project/vllm/pull/41759 中做出了第一个贡献
* @okorzh-amd 在 https://github.com/vllm-project/vllm/pull/42129 中做出了第一个贡献
* @Oxygen56 在 https://github.com/vllm-project/vllm/pull/44236 中做出了第一个贡献
* @QiliangCui2023 在 https://github.com/vllm-project/vllm/pull/44476 中做出了第一个贡献
* @rajkiranjoshi 在 https://github.com/vllm-project/vllm/pull/42083 中做出了第一个贡献
* @Rukhaiya2004 在 https://github.com/vllm-project/vllm/pull/43754 中做出了第一个贡献
* @ruocco 在 https://github.com/vllm-project/vllm/pull/39983 中做出了第一个贡献
* @sphinx07 在 https://github.com/vllm-project/vllm/pull/43817 中做出了第一个贡献
* @SunskyXH 在 https://github.com/vllm-project/vllm/pull/44215 中做出了第一个贡献
* @ThibaultCastells 在 https://github.com/vllm-project/vllm/pull/43636 中做出了第一个贡献
* @tianyu-z 在 https://github.com/vllm-project/vllm/pull/43150 中做出了第一个贡献
* @tonyliu312 在 https://github.com/vllm-project/vllm/pull/40923 中做出了第一个贡献
* @tushar00jain 在 https://github.com/vllm-project/vllm/pull/41980 中做出了第一个贡献
* @viiccwen 在 https://github.com/vllm-project/vllm/pull/44617 中做出了第一个贡献
* @Vikrantpalle 在 https://github.com/vllm-project/vllm/pull/38804 中做出了第一个贡献
* @wanghenshui 在 https://github.com/vllm-project/vllm/pull/44410 中做出了第一个贡献
* @willamhou 在 https://github.com/vllm-project/vllm/pull/43429 中做出了第一个贡献
* @william-rom 在 https://github.com/vllm-project/vllm/pull/43862 中做出了他们的第一个贡献
* @xiaozcy 在 https://github.com/vllm-project/vllm/pull/43843 中做出了第一个贡献
* @XuZhou26 在 https://github.com/vllm-project/vllm/pull/44618 中做出了第一个贡献
* @Yadan-Wei 在 https://github.com/vllm-project/vllm/pull/44559 中做出了第一个贡献
* @zhangtao2-1 在 https://github.com/vllm-project/vllm/pull/43175 中做出了第一个贡献
* @zvik 在 https://github.com/vllm-project/vllm/pull/43519 中做出了第一个贡献
* @zzt93 在 https://github.com/vllm-project/vllm/pull/43770 中做出了第一个贡献

## 贡献者

感谢所有使此版本成为可能的人！
@AndreasKaratzas、@WoosukKwon、@BugenZhao、@yewentao256、@hmellor、@khluu、@njhill、@sfeng33、@bnellnm、@vadiklyutiy、@NickLucche、@JartX、@lucianommartins、@cleonard530、@wzhao18、@yma11、@simondanielsson、 @jeejeelee、@zyongye、@chaunceyjian、@bigPYJ1151、@ronensc、@taneem-ibrahim、@LucasWilkinson、@MatthewBonanni、@mmangkad、@chunyang-wen、@yzong-rh、@JaredforReal、@zixi-qi、@Isotr0py、@noooop、@chaojun-zhang、@Xunzhuo、 @ivanium、@zufangzhu、@DaoyuanLi2816、@CienetStingLin、@aoshen02、@akii96、@benchislett、@MengqingCao、@rshavitt、@kliuae、@omerpaz95、@willamhou、@Majid-Taheri、@micah-wil、@ricky-chaoju、@mikekg、@mgoin、 @mayuyuace、@Etelis、@ilmarkov、@tlrmchlsmth、@UranusSeven、@bedeks、@izhuhaoran、@ZJY0516、@fadara01、@pschlan-amd、@wangxiyuan、@Oxygen56、@charlifu、@varun-sundar-rabindranath、@shen-shanshan、@TheEpicDolphin、 @adobrzyn、@XuZhou26、@tjtanaa、@Terrencezzj、@zhejianxiaomai、@ILikeIneine、@yubofredwang、@chfeng-cs、@ThibaultCastells、@linzm1007、@javierdejesusda、@meenchen、@zhewenl、@xyang16、@angelayi、@nholmber、 @zhangtao2-1、@adityasingh2400、@sts07142、@jatseng-ai、@fallintoplace、@andakai、@he-yufeng、@ignaciosica、@JINO-ROHIT、@tonyliu312、@QwertyJack、@animeshtrivedi、@jzakrzew、@juliendenize、@zexplorerhj、@ruocco、 @mgehre-amd、@jasonboukheir、@MaciejBalaNV、@JohnQinAMD、@huanghua1994、@rajkiranjoshi、@rasmith、@harshaljanjani、@ltd0924、@wdhongtw、@yintong-lu、@tianmu-li、@jikunshang、@JMonde、@MHYangAMD、@frida-andersson、@gau-nernst、 @Wauplin、@czhu-cohere、@gagandhakrey、@nemanjaudovic、@Liangliang-Ma、@liulanze、@sphinx07、@aadwived、@nightcityblade、@umut-polat、@jeffreywang88、@wcynb1023、@zzt93、@shadeMe、@Dao007forever、@alec-flowers、 @Krishnachaitanyakc、@orozery、@BWAAEEEK、@cinnamonica02、@albertoperdomo2、@Rukhaiya2004、@mfylcek、@shreyas269、@Gruner-atero、@TomerBN-Nvidia、@wjinxu、@IdoAtadTD、@xiaozcy、@brian-dellabetta、@zhenwei-intel、@adotdad、 @Kartavyasonar、@lesj0610、@ECMGit、@cakeng、@william-rom、@qiching、@NolanHo、@andylolu2、@xwu-intel、@linitra24、@hoobnn、@Dymasik、@wanghenshui、@maobaolong、@oguzhankir、@Jie-Fang、@okorzh-amd、@Kevin-XiongC、 @jiahanc、@garrygale、@dsikka、@QiliangCui2023、@wjabbour、@zvik、@tc-mb、@jwzheng96、@divakar-amd、@tushar00jain、@galletas1712、@hanlin12-AMD、@tuukkjs、@viiccwen、@Sunt-ing、@HueCodes、@tianyu-z、 @adhithyamulticoreware、@rishitdholakia13、@effi-ofer、@Vikrantpalle、@walterbm、@devin-lai、@Yadan-Wei、@amd-fuweiy、@maeehart、@qyYue1389、@BramVanroy、@SunskyXH、@Holworth、@majian4work、@xaguilar-amd、@Rohan138

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.23.0` · 📅 发布：2026-06-15 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.23.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
