---
title: "vllm v0.24.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.24.0"
version: "v0.24.0"
published: "2026-06-29"
type: "minor"
lang: "zh"
---

# vllm v0.24.0

# vLLM v0.24.0 Release Notes

## 亮点

此版本包含 256 名贡献者（77 名新贡献者）的 571 次提交！

* **MiniMax-M3**：增加了对新 **MiniMax-M3** 模型 (#45381) 的支持，通过 MSA 快速跟进 BF16/FP8 索引器 (#45892)、MXFP4 支持 (#45896)、FP8 稀疏 GQA (#45744) 以及广泛的 AMD/ROCm 调整 — gfx950 上的 mxfp8 MoE/线性(#45725)、MI300X 上 bf16 权重的 fp8_per_channel (#45854)、FP8 KV 缓存修复 (#45720) 和打包模块映射 (#45794)。 MiniMax-M2 性能回归也已修复 (#45935)。
* **DeepSeek-V4 不断成熟**：首次亮相后，DeepSeek-V4 又获得了一次大型优化——FlashInfer 稀疏索引缓存 (2-4% TTFT) (#45863)、预填充块规划优化（4% E2E 吞吐量）(#45061)、用于低延迟的集群协作 topK 内核 (#43008)、连续的每块 KV 分配(#44577)，块 FP8 共享 Expert 的 TEP=16 (#46001)，以及 SM100 上 `next_n > 2` 的本机 DSA 索引器解码 (#45322)。它现在与 GLM-5.1 (#43477) 一起在 **SM120** 上启用，并添加了 XPU (#44144、#44517、#45240) 和 ROCm (#44899、#45103、#45681) 注意/MoE 路径。
* **Model Runner V2 (MRv2) 继续扩展**：MRv2 现在 **默认支持量化模型** (#44446)，默认启用 **GraniteMoE** (#45461)，并获得了 Qwen + DeepSeek-V2 MoE 模型的迁移 (#42667)、DFlash 推测解码 (#44586) 和更准确的 FP32 Gumbel 采样（＃45996）。
* **流式解析器引擎**：新的流式解析器引擎统一了跨模型的工具调用/推理解析，包括 Qwen3 (#45413)、MiniMax-M2 (#45701)、GLM-4.7/5.1/5.2 (#45915) 和 Nemotron V3 (#45755) 的解析器。
* **Diffusion LLM**：添加了 **DiffusionGemma** (#45163)，包括 CPU 路径 (#45690) 和扩散解码器的结构化输出护栏 (#45468)。
* **WideEP / DeepEP v2**：集成 **DeepEP v2** 用于专家并行性 (#41183)，并具有后续稳健性修复 (#46404、#46432)。
* **Rust 前端进一步成熟**：添加了 API-key 身份验证 (#44321)、CORS (#45753)、`/tokenize` + `/detokenize` (#44222)、`/pause` `/resume` `/is_paused` (#44499)、`/abort_requests` (#44382)、 `/get_world_size` (#44801)、`thinking_token_budget` (#46137)、Rust 工具解析器的 Python 桥接器 (#44624) 以及许多新的解析器和验证路径。
* **设备选择更改**：vLLM 不再在内部设置 `CUDA_VISIBLE_DEVICES`；而是提供了一个新的 `device_ids` 参数 (#45026)。在 ROCm 上，`CUDA_VISIBLE_DEVICES` 的弃用窗口已经开始 (#46636)。

### 模型支持
* **新模型**：MiniMax-M3 (#45381)、DiffusionGemma (#45163) + CPU 上的 Gemma Diffusion (#45690)、分层推理模型 — Text / HrmTextForCausalLM (#43098)、OpenMOSS (#44124)。
* **Gemma 4**：跨所有层的统一 FlashAttention (FA4) + `mm_prefix` 支持 (#42175)；许多解析器/服务修复 - 强制 JSON 跳过所需/命名工具选择 (#45795)、禁用思考的解析 (#45832)、流推理状态初始化 (#45852)、助理轮流推理渲染 (#45867)、离线解析器截断/令牌泄漏修复 (#45553)；旧版 Gemma4 解析器替换为基于引擎的实现 (#45588)。
* **DeepSeek-V4**：OOM 修复 (#44914)、MTP 投影前缀 (#44821)、支持的 KV 缓存数据类型 (#44892)。
* **Qwen / 多模式**：Qwen3-VL 视频加载器 (#44412)、Qwen2-VL/Qwen2.5-VL 处理器映射视频加载器 (#45555)、Qwen3-VL 多视频处理优化 (#46026) 和多视频崩溃修复 (#46305)、Qwen3-Omni VIT cu_seqlens 设备修复 (#44264)、融合qk-rmsnorm-rope-gate 用于 Qwen3.5 (#44176)，Qwen3.5 EP 重量加载修复 (#45002)。
* **ViT 完整 CUDA 图**：GLM-4.1V (#40576)、DeepSeek-OCR 双路径 (#43586)、Kimi-VL (#41992)、mllama4 (#40660)、Lfm2VL 编码器 (#44930)。
* **其他模型修复**：Llama4 权重加载 (#45047) 和流式加载以避免主机 OOM (#44645)、MiMo v2.x QKV TP 分片 + FP4 (#45200)、ColQwen3.5 检索正确性 (#46108)、EXAONE-4.5 视觉编码器 (#45073)、MiDashengLM TP>1 音频编码器崩溃 (#44408)、MiniCPM-o/V 设备放置和图像大小修复 (#43844、#42332、#44980、#45244)、Cohere2 MoE 权重加载 + 解析器 (#44747、#44907)、Nemotron V3 推理即内容 (#39091)、ColBERT AutoWeightsLoader + 查询/文档嵌入 io 处理器（#44999、#45210）。
* **内核**：GLM-5 TRT-LLM 参差不齐的 MLA 预填充尺寸 (#43525)，GLM-5 路由器 GEMM (#46385)。

### 引擎核心
* **Model Runner V2**：默认量化模型 (#44446)、GraniteMoE 默认值 (#45461)、Qwen/DSv2 MoE 迁移 (#42667)、DFlash (#44586)、简化的异步输出处理 (#45442)、`num_heads_q` 上的注意力组分割 (#45564)、LoRA 预热修复 (#35536) 等准确的 FP32 Gumbel 采样 (#45996)、V2 GPU 采样器中的 `min_tokens` 逐一修复 (#46243)，以及各种模型/配置兼容性修复 (#45868)。
* **推测解码**：动态 SD (#32374)；带有 FlashInfer (#43081)、混合 KV 页面大小 (#45181) 和 Qwen3Next 目标 (#45319) 的 DFlash； EAGLE3 对 Qwen3 的支持 (#43132)；减少大词汇草稿的 TP 通信（#39419）；异步接受计数中的竞赛修复 (#45100)； EAGLE 多模式编码器缓存修复 (#46315)。
* **KV 缓存和调度程序**：用于减少抢占的 KV 缓存水印 (#44594)、跨组前缀缓存命中的两阶段分配 (#44409)、混合缓存的马可尼式准入策略 (#37898)、Mamba/线性注意力的前缀缓存保留 (#45845)、MTP 对齐模式的 DS Mamba 尾部复制 (#45473)、减少调度程序复制开销（＃45840）。
* **Attention**：通过跨步感知内核重新启用 MLA 的跨层 KV 缓存布局 (#45111)、MLA 预填充 FA4 fp8 输出 (#43050)、FlexAttention 自定义掩码模块完全可 cudagraphable (#45232)、MiMo 的 triton diff-kv 后端 (#41797)、FlashMLA 稀疏精度修复 (#36616)。
* **权重加载和核心**：用于权重加载的 fastsafetensors `ParallelLoader` (#40183)、在 UMA GPU 压力下释放缓存设备内存 (#45179)、用于波束搜索的结构化输出 (#35022)、`device_ids` arg / 无内部 `CUDA_VISIBLE_DEVICES` (#45026)、`numactl --membind` 被阻止时的优雅回退(#45438)、分词器初始化之前的配置类注册(#40299)、多模式模型的带有提示嵌入的异步调度(#45673)。

### 大规模服务和分布式
* **专家并行**：DeepEP v2 集成 (#41183) 与令牌绑定和 topk-index 修复 (#46404、#46432)； NIXL EP — 带有 NIXL EP 的 DBO (#45275)、top-k 索引 dtype 查询 (#45298)、NVFP4 接收后量化跳过 (#45606)、elastic-EP 通信器 (#45013)；使用异步 EPLB 拒绝基于 NCCL 的 EPLB (#44978)。
* **KV 连接器/分解服务**：KV 从预填充推送到通过 NIXL 进行解码 (#35264)；混合全 attn + MLA 组的按区域 KV 传输分类 (#44583)； Mooncake 管道并行 PD 支持 (#44528)、异步查找 (#45659)、紧凑块哈希零复制查找 (#45969)、SWA 块跳过 (#45444)； P/D 修复了 DP Supervisor (#46628) 和 DSV4 分解 (#45831)；删除了 `P2pNcclConnector` (#44854)。
* **KV 卸载**：多层异步批量查找 (#44193)、打包 HMA KV 缓存布局 (#46205、门控 #46252)、并行不可知的 fs 层缓存 (#44733)、卸载管理器统计信息 (#35669) 和标记/CPU 使用指标 (#45957、#45737)、自描述 KV 事件 (#43468)、非阻塞空闲刷新 (#45595) 以及大量正确性/竞争修复 (#44784、#45823、#46231、#46278)。
* **分布式核心**：预填充步骤节奏以实现更好的非 PD DP 平衡 (#44558)、KV 事件映射编码 (#42892)、一次性融合全缩减 PDL NaN 修复 (#45448)。

### 硬件与性能
* **NVIDIA / 内核**：SM90 CUTLASS FP8 mm odd-M 通过 swap_ab 支持（180–290% 内核加速）(#44572)，针对 H100 上的 Qwen3-Next-80B 调整 `fused_moe` FP8 (+25%) (#44830)，SM100 上的本机 DSA 索引器解码 (#45322)，集群协作 topK DeepSeek 低延迟 (#43008)、对 DeepGEMM (#46006) 的 PDL 支持、FlashInfer cutedsl NVFP4 GEMM (#42235) 和 Cute-dsl MXFP8 线性内核 (#46393)、用于 FP8/RMSNorm Quant 的新 Helion 内核 (#36902、#33790、#36895、 #34432）。
* **torch 稳定 ABI**：继续（并完成）将内核迁移到 libtorch 稳定 ABI — MoE [10c/n] (#44565)、Marlin [11a/n] (#45176)、Machete [11b/n] (#45304)、最终 `_C` 库迁移 [12/n] (#45415)。
* **AMD ROCm**：火炬 2.11 (#45362)；融合 AR + RMSNorm + 每组 FP8 量化 (#42864)、AITER 下融合的 softplus-sqrt-topk MoE 路由器 (#44945)、DSv4 flash-decode split-K 内核 (#44899) 和逆 RoPE 融合 (#45103)、W4A16 FlyDSL MoE (#44400)、A8W4 MoE CDNA4 gpt-oss 的 swizzle 门 (#44804)； ROCm 上的 `CUDA_VISIBLE_DEVICES` 弃用窗口已开始 (#46636)。
* **Intel XPU**：序列并行支持 (#38608)、torch-xpu 2.12 (#42262)、vllm-xpu-kernels v0.1.10 (#40367)、W4A16 int4 group_size=32 MoE (#45136)、DeepSeek-V4 注意力/MoE 路径 (#44144) #44517、#45240)、top-p 采样正确性修复 (#44470)。
* **CPU 和其他架构**：2.5× 通过多线程实现更快的 ASR CPU 预处理 (#44612)、CPU W4A16 INT4 MoE (#43409)、cgroup 内存限制感知 KV 缓存大小 (#45086)、RISC-V oneDNN W8A8 INT8 (#44478) 和适用于 WNA16 的 RVV micro-GEMM (#44324)、WSL2 的固定内存 (#41496)、ZenCPU 运行时日志记录 (#42726)。
* **TPU**：tpu 推理升级到 v0.22.1 (#45793)。
* **杂项性能**：`VLLM_TRITON_FORCE_FIRST_CONFIG` 跳过 Triton 自动调整 (#42425)、Triton 重新编译检测 (#45631)、融合多组块表分段写入 (#44944)。

### 量化
* **在线和混合精度**：在线 FP8 每令牌每通道 (PTPC) 量化 (#44132)； `modelopt_mixed` 支持扩展到 Ampere/SM80-86 (#45306) 和 Turing/SM75 (#45375)。
* **FP4 / MXFP**：FlashInfer cutedsl NVFP4 GEMM 后端 (#42235) 和 Cute-dsl MXFP8 线性内核 (#46393)、MXFP4 W4A4 MoE CUTLASS E8M0 比例修复 (#43557)、用于非 Blackwell 上的 NVFP4 MoE 的 SwiGLU 夹具接线 (#45836)、`flashinfer_cutlass`允许作为固定的 NVFP4 MoE 后端 (#46492)、NVFP4/OCP MX MoE 仿真修复 (#46254)、在 NVIDIA Thor 上重新启用 FP8 MoE (#46339)。
* **GGUF / 压缩张量 / AWQ**：GGUF 量化迁移到插件 (#39612)、压缩张量 WNA16 MoE actorder 修复 (#41161) 和 KV-cache-scheme 拒绝 (#45312)、XPU 上的 AWQ 格式 (#43404) 和 Intel XPU 上的 AWQ 反量化修复 (#42727)。
* **内核和正确性**：QuantizedActivation 线性内核合约 (#44260)、合并的 Marlin 线程平铺填充 (#45295)、规范化为 (K, N) 的 FP8 权重布局 (#44735)、加载 LoRA 的 MoE FP8 的损坏输出修复 (#42120)、GPTQ/CT MoE 中的对称量化回归修复 (#45656)、 `fp8_e5m2` KV 缓存允许非 fp8 检查点 (#45040)。

### API 和前端
* **工具调用和解析**：聊天完成 (#45003) 和响应 API (#45396) 中工具调用的严格模式；新的流解析器引擎（#45413），带有 Qwen3、MiniMax-M2（#45701）、GLM-4.7/5.1/5.2（#45915）、Nemotron V3（#45755）解析器；聊天服务中的统一解析器整合（#45548）；许多解析器正确性修复（#46047、#46091、#46159、#45763、#46351、#43984）。
* **OpenAI / Responses**：真正的 `/v1/embeddings` 支持消息 + `chat_template_kwargs` (#45173)，`usage.prompt_tokens_details` 中的多模式令牌计数 (#45458)，从聊天响应中省略空 `tool_calls` (#44105)，响应 API 流 `function_call` id 修复 (#44608)，Harmony重构流/非流路径（#45171、#45104）。
* **人类消息 API**：`/v1/messages` 中的缓存使用报告（#40912）、会话中系统消息处理（#46025）、为前缀缓存保留内联系统消息位置（#44602）、`tool_use` 参数删除修复（#45287）。
* **Rust 前端**：API 密钥身份验证 (#44321)、CORS (#45753)、`/tokenize` + `/detokenize` (#44222)、`/pause` `/resume` `/is_paused` (#44499)、`/abort_requests` (#44382)、 `/get_world_size` (#44801)、`thinking_token_budget` (#46137)、`parallel_tool_calls=false` (#44760)、连续使用统计信息 (#43965)、`/v1/models` 中的模型元数据 (#45950)、Rust 工具解析器的 Python 桥接器 (#44624)、HTTP/ZMQ 的专用运行时(#46051)，以及许多验证/正确性修复。
* **指标**：`vllm:tool_call_parser_invocations_total` (#44448)、`vllm:cache_config_info` 中的组感知 KV 缓存容量 (#42206)、用于 DeepSeek MFU 估计的 MLA 注意力指标 (#39457)。
* **池化/嵌入**：验证 Cohere `/v2/embed` 输入独占性 (#45640)、非负重新排序 `top_n` (#46119)、matryoshka 嵌入维度边界 (#46313)。
* **基准**：`vllm bench serve` 的 BFCL 工具调用数据集 (#42457)、多轮基准 api_key/自定义标头 (#44516)、分词器不匹配自动更正 (#44708)。

### 安全

此版本发布了另一个协调的安全强化批次（其中大部分来自安全研究员@jperezdealgaba）。

* **拒绝服务**：语音到文本端点中的音频解压缩炸弹（#44970），通过推测解码中无效的恢复令牌重新注入进行远程 DoS（#44744），通过 M-RoPE 模型上的 `prompt_embeds` 进行 DoS（#45252），结构化输出中的正则表达式编译超时保护（#45118），完全实现之前的音频上传大小限制(#45510)，聊天完成路径中的音频解码持续时间限制(#45908)。
* **信息泄露**：GGUF 反量化内核中的 int32 截断 (#44971)。
* **输入验证和强化**：图像 EXIF 方向和 tRNS 透明度处理 (#44974)、拒绝非有限 `temperature`/`repetition_penalty` (#45116)、应用于 Anthropic 和 STT 错误路径的 `sanitize_message` (#45119)。
* **依赖项**：将 Starlette 升级到 ≥ 1.0.1 以修复 CVE-2026-48710 (#45675)。

### 依赖关系
* ROCm 上的 Torch 2.11 (#45362)、torch-xpu 2.12 (#42262)、tpu-inference v0.22.1 (#45793)、XPU 的 NIXL v0.10.1 (#40287)、Starlette ≥ 1.0.1 (#45675)。
* `mistral_common` 现在可以通过延迟导入来选择（#45305）；针对 C++20 的 CUDA Docker 文件从 GCC 10 升级到 GCC 12 (#44923)；在 Python < 3.11 上跳过 spinloop 扩展 (#44783)。

### 弃用和删除
* **删除的模型**：ERNIE（已过时）(#45127)、Xverse (#45638)、Dots1 (#45637)、Bamba (#45990)、Mono-InternVL (#45129)、InternLM 注册表别名 (#45128)。
* **已弃用**：第一代 Qwen 和 QwenVL 模型 (#45131)、Transformers v4 支持 (#45161)、ROCm 上的 `CUDA_VISIBLE_DEVICES` (#46636)；一般弃用 v0.23/v0.24 (#44992)。

## 新贡献者

* @abcd1927 在 https://github.com/vllm-project/vllm/pull/43098 中做出了第一个贡献
* @Achyuthan-S 在 https://github.com/vllm-project/vllm/pull/44795 中做出了他们的第一个贡献
* @Alex-ai-future 在 https://github.com/vllm-project/vllm/pull/45905 中做出了第一个贡献
* @alexbi29 在 https://github.com/vllm-project/vllm/pull/45763 中做出了第一个贡献
* @amanchugh89 在 https://github.com/vllm-project/vllm/pull/45840 中做出了第一个贡献
* @ankrovv 在 https://github.com/vllm-project/vllm/pull/44608 中做出了第一个贡献
* @anony-mous-e 在 https://github.com/vllm-project/vllm/pull/45412 中做出了第一个贡献
* @appleparan 在 https://github.com/vllm-project/vllm/pull/45073 中做出了第一个贡献
* @ashishpatel26 在 https://github.com/vllm-project/vllm/pull/43984 中做出了第一个贡献
* @Bot1822 在 https://github.com/vllm-project/vllm/pull/44053 中做出了第一个贡献
* @ByteFlowing1337 在 https://github.com/vllm-project/vllm/pull/45988 中做出了第一个贡献
* @Change72 在 https://github.com/vllm-project/vllm/pull/43756 中做出了第一个贡献
* @coder3101 在 https://github.com/vllm-project/vllm/pull/44801 中做出了第一个贡献
* @cquil11 在 https://github.com/vllm-project/vllm/pull/45720 中做出了第一个贡献
* @dmaniloff 在 https://github.com/vllm-project/vllm/pull/40470 中做出了第一个贡献
* @factnn 在 https://github.com/vllm-project/vllm/pull/44955 中做出了第一个贡献
* @FAUST-BENCHOU 在 https://github.com/vllm-project/vllm/pull/44760 中做出了第一个贡献
* @felix0080 在 https://github.com/vllm-project/vllm/pull/44602 中做出了第一个贡献
* @gitbisector 在 https://github.com/vllm-project/vllm/pull/40183 中做出了第一个贡献
* @gq112 在 https://github.com/vllm-project/vllm/pull/43081 中做出了第一个贡献
* @guan404ming 在 https://github.com/vllm-project/vllm/pull/35022 中做出了第一个贡献
* @HanHan009527 在 https://github.com/vllm-project/vllm/pull/44528 中做出了第一个贡献
* @hello-args 在 https://github.com/vllm-project/vllm/pull/44109 中做出了第一个贡献
* @HumphreySun98 在 https://github.com/vllm-project/vllm/pull/45466 中做出了第一个贡献
* @j-i-l 在 https://github.com/vllm-project/vllm/pull/45319 中做出了第一个贡献
* @JasonLi314 在 https://github.com/vllm-project/vllm/pull/45255 中做出了第一个贡献
* @jeffye-dev 在 https://github.com/vllm-project/vllm/pull/43595 中做出了第一个贡献
* @jimmy-evo 在 https://github.com/vllm-project/vllm/pull/44516 中做出了第一个贡献
* @jjppp 在 https://github.com/vllm-project/vllm/pull/45217 中做出了第一个贡献
* @JOSH1024 在 https://github.com/vllm-project/vllm/pull/44784 中做出了第一个贡献
* @junkang1991 在 https://github.com/vllm-project/vllm/pull/46039 中做出了第一个贡献
* @KaletoAI 在 https://github.com/vllm-project/vllm/pull/43495 中做出了第一个贡献
* @kliukovkin 在 https://github.com/vllm-project/vllm/pull/43724 中做出了第一个贡献
* @littlecircle0730 在 https://github.com/vllm-project/vllm/pull/44750 中做出了第一个贡献
* @llx-08 在 https://github.com/vllm-project/vllm/pull/45357 中做出了第一个贡献
* @m4r1k 在 https://github.com/vllm-project/vllm/pull/45795 中做出了第一个贡献
* @martin-kukla 在 https://github.com/vllm-project/vllm/pull/45417 中做出了第一个贡献
* @MichaelCao0 在 https://github.com/vllm-project/vllm/pull/46398 中做出了第一个贡献
* @mrn3088 在 https://github.com/vllm-project/vllm/pull/45383 中做出了第一个贡献
* @nataliepjlin 在 https://github.com/vllm-project/vllm/pull/45218 中做出了第一个贡献
* @nehmathe2 在 https://github.com/vllm-project/vllm/pull/44912 中做出了第一个贡献
* @nikhilesh-csa 在 https://github.com/vllm-project/vllm/pull/45852 中做出了第一个贡献
* @nv-nedelman-1 在 https://github.com/vllm-project/vllm/pull/42120 中做出了第一个贡献
* @Oseltamivir 在 https://github.com/vllm-project/vllm/pull/45879 中做出了第一个贡献
* @parthash0804 在 https://github.com/vllm-project/vllm/pull/43844 中做出了第一个贡献
* @pjdurden 在 https://github.com/vllm-project/vllm/pull/44942 中做出了第一个贡献
* @pst2154 在 https://github.com/vllm-project/vllm/pull/45181 中做出了第一个贡献
* @Saddss 在 https://github.com/vllm-project/vllm/pull/44409 中做出了第一个贡献
* @sahilsGit 在 https://github.com/vllm-project/vllm/pull/44499 中做出了第一个贡献
* @sasindharan 在 https://github.com/vllm-project/vllm/pull/44383 中做出了第一个贡献
* @shantipriya-amd 在 https://github.com/vllm-project/vllm/pull/39498 中做出了第一个贡献
* @Sirius29 在 https://github.com/vllm-project/vllm/pull/46026 中做出了第一个贡献
* @srajabos 在 https://github.com/vllm-project/vllm/pull/44665 中做出了第一个贡献
* @sridhar-3009 在 https://github.com/vllm-project/vllm/pull/44055 中做出了第一个贡献
* @stefankoncarevic 在 https://github.com/vllm-project/vllm/pull/45706 中做出了第一个贡献
* @sunnweiwei 在 https://github.com/vllm-project/vllm/pull/45100 中做出了第一个贡献
* @TanNgocDo 在 https://github.com/vllm-project/vllm/pull/44222 中做出了第一个贡献
* @thisisjimmyfb 在 https://github.com/vllm-project/vllm/pull/41496 中做出了第一个贡献
* @tykow 在 https://github.com/vllm-project/vllm/pull/44663 中做出了第一个贡献
* @V-3604 在 https://github.com/vllm-project/vllm/pull/43362 中做出了第一个贡献
* @vincentzed 在 https://github.com/vllm-project/vllm/pull/44930 中做出了第一个贡献
* @vraiti 在 https://github.com/vllm-project/vllm/pull/42331 中做出了第一个贡献
* @wangjiaxin99 在 https://github.com/vllm-project/vllm/pull/45794 中做出了第一个贡献
* @waynehacking8 在 https://github.com/vllm-project/vllm/pull/45376 中做出了第一个贡献
* @x41lakazam 在 https://github.com/vllm-project/vllm/pull/43300 中做出了第一个贡献
* @xiaguan 在 https://github.com/vllm-project/vllm/pull/45286 中做出了第一个贡献
* @xiaohuguo2023 在 https://github.com/vllm-project/vllm/pull/44804 中做出了第一个贡献
* @xin3he 在 https://github.com/vllm-project/vllm/pull/43557 中做出了第一个贡献
* @xx-thomas 在 https://github.com/vllm-project/vllm/pull/45210 中做出了第一个贡献
* @yangdian96 在 https://github.com/vllm-project/vllm/pull/44173 中做出了第一个贡献
* @YellowFoxH4XOR 在 https://github.com/vllm-project/vllm/pull/45057 中做出了第一个贡献
* @yzhan1 在 https://github.com/vllm-project/vllm/pull/44552 中做出了第一个贡献
* @Zedong-Liu 在 https://github.com/vllm-project/vllm/pull/45361 中做出了第一个贡献
* @ZewenShen-Cohere 在 https://github.com/vllm-project/vllm/pull/41161 中做出了第一个贡献
* @zhangshuoming990105 在 https://github.com/vllm-project/vllm/pull/40912 中做出了第一个贡献
* @ZiguanWang 在 https://github.com/vllm-project/vllm/pull/43981 中做出了第一个贡献
* @zlxi02 在 https://github.com/vllm-project/vllm/pull/44595 中做出了第一个贡献

## 贡献者

感谢所有使此版本成为可能的人！
@yewentao256、@Sunt-ing、@jperezdealgaba、@AndreasKaratzas、@BugenZhao、@sfeng33、@njhill、@micah-wil、@bbrowning、@mgoin、@jeejeelee、@hmellor、@tlrmchlsmth、@xianbaoqian、@mmangkad、@jikunshang、@Dao007forever、 @zhenwei-intel、@noooop、@Isotr0py、@ivanium、@reidliu41、@varun-sundar-rabindranath、@chaunceyjian、@WoosukKwon、@mawong-amd、@zxd1997066、@chaojun-zhang、@NickLucche、@bigPYJ1151、@ZJY0516、@charlifu、 @yzong-rh、@divakar-amd、@khluu、@cleonard530、@wseaton、@xiaohongchen1991、@ywang96、@taneem-ibrahim、@mikekg、@itayalroy、@Alex-ai-future、@sahilsGit、@bnellnm、@littlecircle0730、@majian4work、@ricky-chaoju、 @ronensc、@Fangzhou-Ai、@lucianommartins、@Srinivasoo7、@zyongye、@Rohan138、@Etelis、@wentian-byte、@ekagra-ranjan、@LucasWilkinson、@tahsintunan、@waynehacking8、@gau-nernst、@tuukkjs、@stefankoncarevic、@Palaiologos1453、 @lucifer1004、@jmamou、@liulanze、@Terrencezzj、@Change72、@LopezCastroRoberto、@he-yufeng、@benchislett、@juliendenize、@s3woz、@panpan0000、@ilmarkov、@zixi-qi、@wcynb1023、@fynnsu、@ZhanqiuHu、@yuwenzho、 @tdoublep、@MatthewBonanni、@hickeyma、@majunze2001、@mrn3088、@Yejing-Lai、@vllmellm、@Saddss、@DarkLight1337、@hongxiayang、@m4r1k、@qli88、@jonathanc-n、@felix0080、@djramic、@aoshen02、 @fxmarty-amd、@simon-mo、@llsj14、@akii96、@walterbm、@dmaniloff、@zlxi02、@grYe99、@jeffye-dev、@parthash0804、@qyYue1389、@sagearc、@maeehart、@TanNgocDo、@cinnamonica02、@zucchini-nlp、 @tykow、@mganczarenko、@yangdian96、@jimmy-evo、@YellowFoxH4XOR、@yzhan1、@shenoyvvarun、@yufufi、@lavier、@xiaohuguo2023、@EanWang211123、@JartX、@shantipriya-amd、@askliar、@hallerite、@appleparan、 @effi-ofer、@angelayi、@TheCodeWrangler、@DanBlanaru、@ankrovv、@velonica0、@pjdurden、@cyyever、@wjinxu、@kliukovkin、@x41lakazam、@Jasen2201、@r-barnes、@tc-mb、@nataliepjlin、@KaletoAI、@WineChord、@fangyuchu、 @vraiti、@nascheme、@jjppp、@sasindharan、@xiaguan、@snadampal、@chfeng-cs、@thillai-c、@guan404ming、@sridhar-3009、@vincentzed、@j-i-l、@rjrock、@abinggo、@anony-mous-e、@Achyuthan-S、@Harry-Chen、@mfylcek、 @amd-asalykov、@noa-neria、@maobaolong、@TheEpicDolphin、@FAUST-BENCHOU、@martin-kukla、@xin3he、@ZiguanWang、@youkaichao、@factnn、@llx-08、@xx-thomas、@gitbisector、@Bortlesboat、@thisisjimmyfb、@JOSH1024、 @wendyliu235、@wangxiyuan、@shen-shanshan、@HanHan009527、@amd-lalithnc、@netanel-haber、@fuscof-ibm、@AjAnubolu、@carlyou、@abcd1927、@CienetStingLin、@kouroshHakha、@alexbi29、@jesse996、@sungsooha、 @andakai、@cquil11、@nehmathe2、@liangel-02、@hello-args、@j9smith、@nikhilesh-csa、@ruocco、@oguzhankir、@yiliu30、@xaguilar-amd、@amirkl94、@danisereb、@wangjiaxin99、@shanjiaz、@Oseltamivir、@alexeldeib、 @wzhao18、@coder3101、@lyd1992、@markmc、@ashishpatel26、@HumphreySun98、@ByteFlowing1337、@nv-nedelman-1、@JaredforReal、@sammshen、@okorzh-amd、@muhammadfawaz1、@vadiklyutiy、@JasonLi314、@SumanthRH、 @Sirius29、@tjtanaa、@zhangshuoming990105、@amanchugh89、@umut-polat、@srajabos、@junkang1991、@pst2154、@WindChimeRan、@Zedong-Liu、@gq112、@sunnweiwei、@athrael-soju、@EazyReal、 @Liangliang-Ma、@jinzhen-lin、@V-3604、@aarushjain29、@ZewenShen-Cohere、@Bot1822、@BowenBao、@MichaelCao0、@tanpinsiang、@QwertyJack、@nagisa-kunhah、@Meihan-chen、@robertgshaw2-redhat

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.24.0` · 📅 发布：2026-06-29 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.24.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
