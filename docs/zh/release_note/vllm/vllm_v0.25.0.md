---
title: "vllm v0.25.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.25.0"
version: "v0.25.0"
published: "2026-07-11"
type: "minor"
lang: "zh"
---

# vllm v0.25.0

# vLLM v0.25.0 Release Notes

## 亮点

此版本包含 232 名贡献者（64 名新贡献者）的 558 次提交！

* **Model Runner V2 现在是所有密集模型的默认设置** (#44443)。在之前版本的量化模型支持的基础上，MRv2 现在成为标准执行路径，新增了对 EVS (#46535)、实时嵌入 (#46762)、Mamba 混合模型的前缀缓存 (#42406)、多模态前缀双向注意力 (#46942) 以及与完整 CUDA 图兼容的动态推测解码 (#45953) 的新支持。
* **PagedAttention 已被删除** (#47361)。现在，V1/MRv2 后端已成为标准路径，旧的注意力实现已被删除。
* **Transformers 建模后端现在与原生 vLLM 一样快** (#47187)，并获得了 FP8 MoE 支持 (#46820)、CUDA 图形 + 嵌入缩放修复 (#48010) 以及 GPTBigCode/Starcoder2 (#30966) 和 RoBERTa (#47452) 的迁移。
* **新模型**：LLaVA-OneVision-2 (#44785)、Unlimited OCR (#46564、#47102)、MOSS-Transcribe-Diarize (#47729)、openai/privacy-filter (#41026) 和 Hy3 (#47192)。 GLM-5 / DeepSeek-V3.2 通过 GLM-5.2 调整登陆模型动物园 (#46808)，MiniMax-M3 获得了管道并行性 (#45810) 和 NVFP4 支持 (#46756)。
* **新的流解析器引擎** (#46610) — 一个统一的工具调用/推理解析框架，具有新的 Kimi k2.5/k2.6/k2.7 解析器以及seed_oss (#46314) 和 DeepSeek V4 (#45877) 的端口。 Rust 前端通过 HTTPS/mTLS (#45890)、DP Supervisor (#47076) 和分析器控制路由 (#46306) 不断成熟。
* **异构词汇表的通用推测解码 (TLI)** (#38174)，加上新的 DSpark (#46995) 和 DFlash (#46770、#46853) 起草器。

### 模型支持
* 新模型：LLaVA-OneVision-2 (#44785)、带有 Triton R-SWA 后端的 Unlimited OCR (#46564) (#47102)、MOSS-Transcribe-Diarize (#47729)、openai/privacy-filter (#41026)、带令牌后缀的 Hy3 和 JSON 架构阵列支持（＃47192）。
* GLM-5 系列：GLM-5 / DeepSeek-V3.2 添加到模型动物园 (#46808)、GLM-5.2 FP32 门 (#47410)、GLM MTP 最终规范后修复 (#47448)、GLM4V 启动修复 (#47155)。
* MiniMax-M3：管道并行性 (#45810)、流式推理解析 (#45718) 和 MSA 中的 `tok_sparse_select` 替换 Triton 内核 (#47502)。
* Transformers 后端：现在与原生 vLLM (#47187)、FP8 MoE 修复 (#46820)、嵌入缩放 + CUDA 图形修复 (#48010)、GPTBigCode/Starcoder2 (#30966) 和 RoBERTa (#47452) 迁移一样快、M-RoPE `mm_token_type_ids` 修复 (#46552)、绑定嵌入`lm_head.bias` 修复（#46835）。
* Voxtral：迁移到 mistral-common 1.11.5 音频 API (#46705) 和实时令牌反馈挂起修复 (#44461)。
* Gemma 系列：Gemma4 滑动窗口/FA4 注意力修复（#47217、#47332）、Gemma4 MTP quant_config 修复（#47091）； DiffusionGemma 张量并行性 (#45719) 和 HF 稳定性窗口语义 (#45965)。
* 其他修复：MiniCPM-V 4.6 语言骨干 LoRA (#46740) 和占位符网格修复 (#45918)、池化 Whisper 滑动窗口大小调整 (#47071、#47437)、Mamba/Mamba2 检查点无 `architectures` 崩溃修复 (#46037)、DeepSeek-V2 隐藏大小和辅助隐藏状态修复（#46986、#46973）。

### 引擎核心
* Model Runner V2：所有密集模型的默认设置（#44443）； EVS (#46535)、实时嵌入 (#46762)、Mamba 混合前缀缓存 (#42406)、多模态前缀双向注意力 (#46942)、交叉注意力预热/块表修复 (#46753、#47308)、Mamba2 崩溃修复 (#47428)、调度槽核算 (#46974)、模型参考关闭时清理（#47483），大日志概率请求的有限内存（#46746）。
*推测解码：异构词汇表的通用规范解码（TLI）（#38174）； DSpark 起草者 + 投机者检查点支持（#46995、#47093）； DFlash 后端选择 (#46770)、每层 RMSNorm 融合 (#46761)、CPU 支持 (#44029)、适用于 MiMo 的 SWA+DFlash (#46104)、Laguna XS.2.1 起草器 (#46853)；用于百灵混合动力车型的 MTP (#44880)；拒绝采样的块验证（#46781）；减少草稿代币的 TP 通信 (#46448)。
* 睡眠模式：可插入睡眠模式后端抽象（RFC #34303、#44074），具有与通信器无关的功能标志（#47243）。
* 注意：混合模型的 FlashAttention 块大小限制被删除 (#36701)、`FLASH_ATTN_MLA_SPARSE` Hopper 稀疏 MLA 后端 (#46189)、MLA 解码中的 DCP + FP8 KV 缓存 (#44044)、XQA 解码内核 (#43232)。
* KV 卸载：分层度量管道 (#45959)、请求生命周期修复 (#46284)、C 中的批量查找 (#46713)、`LookupResult` 枚举 (#46363)。
* 其他：`VLLM_GPU_SYNC_CHECK` env var (#44800)、VRAM 信号量基础设施 (#44465)、在线波束搜索中跳过去标记化 (#46422)、采样器/注意力内核中的几个 int32 溢出修复 (#46560、#47383、#47671)。

### 硬件与性能
* GLM-5.2 / DeepSeek：`fused_indexer_q_rope_quant` Triton 内核（1.9–3.3% E2E 吞吐量）（#46862），reduce-scatter MoE all-reduce（3.1–3.2% E2E）（#46635），GLM5/DSV3.2 的运算融合(#46876)、DSv4 的 `token_to_req_indices` 缓存（5-6 倍内核加速）(#47474)、更好的 DSv4 MXFP8 内核(#47229)、冗余操作删除(#47198、#46651)。
* NVIDIA/Blackwell：FlashInfer 融合全归约，在 GB300 上针对 world_size=16 进行调整（#46392），恢复 NVFP4 swizzled-scale 零初始化以恢复 Blackwell 解码吞吐量（#45739），CuTeDSL/FA4-MLA 预热基础设施（#46182），在 SM120 上跳过协作 top-K（#47164），非门控的 B12x 后端教育部 (#43328)。
* 内核：Helion `fused_qk_norm_rope` (#44010) 和 `silu_and_mul_per_block_quant` (#43994)、Triton MLA logits 工作区 (#46819)、融合 MoE 的交换 AB 优化 (#36559)、支持任何 top-k 的矢量化 fp32 `moe_sum` (#46643)、阻止 CUDA 事件以避免忙轮询驱动程序锁（＃47081）。
* AMD/ROCm：移至火炬 2.11 稳定 ABI (#47128)； AITER FlashAttention MLA 预填充后端 `ROCM_AITER_FA` (#45033)； GLM-4.5/6/7 (#44313) 和 MiniMax-M3 (#46474, #46545) 的融合共享专家； AITER 针对 DeepSeek-V4 的 MoE 优化 (#46122)； AITER 在 CudaCommunicator 中自定义 all-reduce (#46065)； Quickreduce 的 INT3 量化 (#45666)。
* Intel XPU：具有多粒度量化的 W8A8 FP8 线性内核 (#43645)、管道并行精度修复 (#47253)、FA2 的统一批量 CUDA 图 (#46555)、将 mm_prefix 模型路由到 Triton 注意力 (#47688)、C++ `get_memory_info` (#47134)。
* CPU：AArch64 的加速非量化 MoE (#46353)、通过 OpenMP 的 macOS/Apple Silicon 挂起修复 (#46769) 和损坏的安装修复 (#47457)、压缩张量 w8a8 int8 MoE (#42920)、Mamba ShortConv (#35059)、Qwen3.5 的分块预填充 + 前缀缓存 (#46202)，速度更快通过 tanh AOR 的 gelu (#44639)。
* RISC-V：W4A8 INT4 GEMM 的 RVV 路径 (#45269)，VLEN=256 硬件上的 BF16 (#45243)，减少 INT4 LUT dequant 中的 LMUL 压力 (#47538)。 POWER：PowerPC 上的 fp16 支持 (#46135)。
* 平台：与加速器无关的 `get_memory_info` (#44825)。

### 大规模服务和分布式
* 无需 DP 即可实现序列并行，1.9–5.0% E2E 吞吐量提高 (#47070)。
* 分布式：NCCL 对称内存扩展到 AllGather 和 ReduceScatter (#46703)，FlashInfer all-reduce 在单节点上默认为 MNNVL (#47219、#47589)，容错后端可检测 all2all 对等故障并防止损坏的输出 (#43637)。
* 数据并行：基于本地预填充工作的节流预填充 (#46532)、旋转负载平衡器抢断以避免引擎偏差 (#47420)、通过 Rust 前端的 DP 监控器 (#47076)、DP MTP 挂起修复 (#40589)。
* PD 分解：二级实现 (#42285)、Mooncake 连接器 GDN (Qwen3.5) + MLA (DeepSeek-V4-Flash) 支持 (#46807)、NIXL Mamba1 支持 (#45019)、MultiConnector `kv_transfer_params` 合并 (#46777)、为分解服务公开的使用字段 (#42748)。
* DCP：FlashInfer MLA 支持 (#43729)、FLASHINFER_MLA_SPARSE 支持 (#46076)、LSE 日志库修复 (#47079)； Mooncake 并行 KV 加载 (#45971) 和 DCP>1 查找修复 (#46855)。
* ROCm：用于 DP+EP 的稳定高通量 DBO (#46990)，用于 Quark OCP MXFP4 MoE 的 EPLB (#47220)。

### 量化
* 2/3/5/6/7 位包量化仅重量推理 (Humming) (#46389)，Triton INT4 每个令牌头 KV 缓存量化 (#40835)。
* NVFP4：MoE MLP Triton 内核中计算的融合权重反量化 (#44667)、具有跳层滑动窗口的 NVFP4 KV 缓存 (#42890)、MiniMax-M3 ModelOpt NVFP4 支持 (#46756)。
* FP8：每块在线量化的权重填充（#44763）；弃用了旧的 FP8 在线 MoE 量化类 (#44514)。
* Marlin：线程平铺填充扩展到 MoE (WNA16 + FP8/MXFP8) (#45703)，int8 分组 WNA16 MoE (#47154)；用于门控 SiLU 的 FlashInfer MXINT4 MoE (#46518)。
* 修复：W8A8 int-quant 方案选择回归 (#46860)、ModelOpt Gemma4 的绑定量化嵌入 (#45544)、Qwen3Next 上的 NVFP4+MTP 崩溃 (#46316)、稀疏配置的 ModelOpt 混合精度 (#47318)、CPU w4a8_int8 MoE 路径 (#46739)、可操作错误组大小/TP 不匹配 (#46230)。

### API 和前端
* 流解析器引擎（#46610）：使用新的 Kimi k2.5/k2.6/k2.7 解析器进行统一工具调用/推理解析；移植了seed_oss (#46314) 和DeepSeek V4 (#45877)。
* OpenAI 兼容性：响应 API 命名空间工具 (#47024)、聊天/完成响应上的每个请求计时 `metrics` 字段 (#46768)、渲染端点上的令牌偏移量 (#44226)、用于训练数据生成的 `return_loss_mask` (#46846)、用于不可处理图像 URL 的 HTTP 422 (#47165)。
* gpt-oss / Harmony：专用 Harmony 渲染器（#46800），`process_eos()` 刷新（#46437），非终端解析上的原始输出恢复（#47062，#47379）。
* Rust 前端：用于 HTTP 和 gRPC 的静态 HTTPS 和 mTLS (#45890)、DP 管理程序 (#47076)、分析器控制路由 (#46306)、`repetition_detection` 采样参数 (#46684)、统一/组合解析器接口 (#46583)、减少的多模态张量副本 (#47581) 以及许多解析器和验证修复。
* 视频：添加 TorchCodec 作为视频解码后端 (#46609)。
* CLI/UX：`vllm chat` (#46775)、`model_class_overrides` 中的 TTFT 和 TPS 打印用于开发/调试 (#47148)。
* 工具/验证：许多工具解析器修复（Kimi K2 ID #46344、PoolsideV1 #46486/#47311、非 ASCII 参数 #46308、`thinking_token_budget` 重新输入 #43757）；拒绝无效的配置值（#44070、#44002、#46612）并退化 `structured_outputs` 导致 EngineCore 崩溃（#45346）。

### 安全
* 防止图像解压炸弹 OOM 拒绝服务 (#47010)。
* 使用 NaN 音频样本防止 `split_audio` 中出现无限循环 (#46463)。
* 当设置显式 `truncation_side` 时，绑定分词器会起作用 (#47007)。
* 阻止请求级 GPU 视频后端选择 (#47259)。
* 将 gRPC 接口记录为不安全，仅供私人使用 (#45903)。

### 依赖关系
* FlashInfer 0.6.13 (#46683)、tpu 推理 v0.23.0 (#46568)、aiter 0.1.16.post2 (#46692)、vllm_xpu_kernels v0.1.10.1 (#46607)、huggingface-hub v1.22.0 (#47551)。
* DeepGEMM 更新以启用 SM120 支持 (#47304)，针对 torch 稳定版 API 构建的 FlashAttention 3 (#46644)，Rust 前端 TLS 从 rustls 切换为 native-tls/OpenSSL (#46696)。

### 弃用和删除
* **PagedAttention 已删除** (#47361)。
* 删除的模型：Baichuan (#46362)、Aquila (#46605)、Grok (#46706)、Tarsier / Tarsier2 (#47143)、AyaVision / MusicFlamingo (#47263)、Mantis (#46806)。
* 弃用旧的 FP8 在线 MoE 量化类 (#44514)；旧版 `api_server.py` 已移至示例目录 (#46783)； `gptq_marlin` 从支持的 ROCm 量化方案中删除 (#46655)。

## 新贡献者

* @aaarkai 在 https://github.com/vllm-project/vllm/pull/44610 中做出了第一个贡献
* @Acaciasama 在 https://github.com/vllm-project/vllm/pull/45850 中做出了第一个贡献
* @ACEEE-1222 在 https://github.com/vllm-project/vllm/pull/47716 中做出了第一个贡献
* @adamkbaranowski 在 https://github.com/vllm-project/vllm/pull/46853 中做出了第一个贡献
* @AgenticSpark 在 https://github.com/vllm-project/vllm/pull/46071 中做出了第一个贡献
* @AIvashov 在 https://github.com/vllm-project/vllm/pull/42748 中做出了第一个贡献
* @akinsella 在 https://github.com/vllm-project/vllm/pull/47165 中做出了第一个贡献
* @aldenlobo 在 https://github.com/vllm-project/vllm/pull/45961 中做出了第一个贡献
* @alex101-ops 在 https://github.com/vllm-project/vllm/pull/44880 中做出了第一个贡献
* @aman0603 在 https://github.com/vllm-project/vllm/pull/46945 中做出了第一个贡献
* @Aneureka 在 https://github.com/vllm-project/vllm/pull/46838 中做出了第一个贡献
* @ArsalanShakil 在 https://github.com/vllm-project/vllm/pull/46236 中做出了第一个贡献
* @ayush1399 在 https://github.com/vllm-project/vllm/pull/47091 中做出了第一个贡献
* @blasrodri 在 https://github.com/vllm-project/vllm/pull/46827 中做出了第一个贡献
* @calvarado2004 在 https://github.com/vllm-project/vllm/pull/46177 中做出了第一个贡献
* @hengzheng345 在 https://github.com/vllm-project/vllm/pull/44785 中做出了第一个贡献
* @cpersson-amd 在 https://github.com/vllm-project/vllm/pull/47519 中做出了第一个贡献
* @cyq1017 在 https://github.com/vllm-project/vllm/pull/46101 中做出了第一个贡献
* @davispuh 在 https://github.com/vllm-project/vllm/pull/35232 中做出了第一个贡献
* @decarpentierg 在 https://github.com/vllm-project/vllm/pull/46552 中做出了第一个贡献
* @eparshut 在 https://github.com/vllm-project/vllm/pull/47467 中做出了第一个贡献
* @fenghourun 在 https://github.com/vllm-project/vllm/pull/47384 中做出了第一个贡献
* @fjosw 在 https://github.com/vllm-project/vllm/pull/41026 中做出了第一个贡献
* @guybd 在 https://github.com/vllm-project/vllm/pull/44029 中做出了第一个贡献
* @harsha20032020 在 https://github.com/vllm-project/vllm/pull/44720 中做出了第一个贡献
* @hclsys 在 https://github.com/vllm-project/vllm/pull/44070 中做出了第一个贡献
* @hhhhhhhhhhhhhhhhho 在 https://github.com/vllm-project/vllm/pull/46467 中做出了第一个贡献
* @hillelda 在 https://github.com/vllm-project/vllm/pull/46069 中做出了第一个贡献
* @I3eg1nner 在 https://github.com/vllm-project/vllm/pull/47532 中做出了第一个贡献
* @imargulis 在 https://github.com/vllm-project/vllm/pull/46301 中做出了第一个贡献
* @ItsMatti4 在 https://github.com/vllm-project/vllm/pull/45263 中做出了他们的第一个贡献
* @jesco-absolut 在 https://github.com/vllm-project/vllm/pull/47589 中做出了第一个贡献
* @jessiewei7 在 https://github.com/vllm-project/vllm/pull/46560 中做出了第一个贡献
* @jialoop-git 在 https://github.com/vllm-project/vllm/pull/45159 中做出了第一个贡献
* @JohnLangford 在 https://github.com/vllm-project/vllm/pull/46835 中做出了第一个贡献
* @Jyothirmaikottu 在 https://github.com/vllm-project/vllm/pull/47250 中做出了第一个贡献
* @kalyanamdewri 在 https://github.com/vllm-project/vllm/pull/47517 中做出了第一个贡献
* @Laurent-Zhang 在 https://github.com/vllm-project/vllm/pull/47429 中做出了第一个贡献
* @lheng321 在 https://github.com/vllm-project/vllm/pull/45715 中做出了第一个贡献
* @LiJzd 在 https://github.com/vllm-project/vllm/pull/45813 中做出了第一个贡献
* @lslusarczyk 在 https://github.com/vllm-project/vllm/pull/43092 中做出了第一个贡献
* @Lynn-hh 在 https://github.com/vllm-project/vllm/pull/46543 中做出了第一个贡献
* @Meihan-chen 在 https://github.com/vllm-project/vllm/pull/44483 中做出了第一个贡献
* @nagisa-kunhah 在 https://github.com/vllm-project/vllm/pull/44124 中做出了第一个贡献
* @NathanielMcVicar 在 https://github.com/vllm-project/vllm/pull/45965 中做出了第一个贡献
* @NicolasHug 在 https://github.com/vllm-project/vllm/pull/46609 中做出了第一个贡献
* @omirosh 在 https://github.com/vllm-project/vllm/pull/44313 中做出了第一个贡献
* @orestis-z 在 https://github.com/vllm-project/vllm/pull/46488 中做出了第一个贡献
* @pranavthakur0-0 在 https://github.com/vllm-project/vllm/pull/46306 中做出了第一个贡献
* @Priyjain-amd 在 https://github.com/vllm-project/vllm/pull/45818 中做出了第一个贡献
* @skajre 在 https://github.com/vllm-project/vllm/pull/46818 中做出了第一个贡献
* @soaringk 在 https://github.com/vllm-project/vllm/pull/45810 中做出了第一个贡献
* @spandantiwari 在 https://github.com/vllm-project/vllm/pull/46260 中做出了第一个贡献
* @sriganesh123 在 https://github.com/vllm-project/vllm/pull/35076 中做出了第一个贡献
* @tarjan1 在 https://github.com/vllm-project/vllm/pull/45657 中做出了第一个贡献
* @this Jiang 在 https://github.com/vllm-project/vllm/pull/45924 中做出了第一个贡献
* @umarkovi-amd 在 https://github.com/vllm-project/vllm/pull/46381 中做出了第一个贡献
* @VectorPeak 在 https://github.com/vllm-project/vllm/pull/47099 中做出了第一个贡献
* @wan-danfeng 在 https://github.com/vllm-project/vllm/pull/38174 中做出了第一个贡献
* @yangyang-cs95 在 https://github.com/vllm-project/vllm/pull/46684 中做出了第一个贡献
* @yuyue0225sc 在 https://github.com/vllm-project/vllm/pull/44297 中做出了第一个贡献
* @zhongjing123 在 https://github.com/vllm-project/vllm/pull/47024 中做出了第一个贡献
* @zhou9402 在 https://github.com/vllm-project/vllm/pull/47448 中做出了第一个贡献
* @ZichenYuan 在 https://github.com/vllm-project/vllm/pull/46452 中做出了第一个贡献

## 贡献者

感谢所有使此版本成为可能的贡献者！
@AndreasKaratzas、@njhill、@BugenZhao、@hmellor、@yewentao256、@WoosukKwon、@Sunt-ing、@micah-wil、@mgoin、@reidliu41、@peizhang56、@mawong-amd、@TheEpicDolphin、@jeejeelee、@taneem-ibrahim、@chaunceyjian、 @chaojun-zhang、@divakar-amd、@fxmarty-amd、@LopezCastroRoberto、@wzhao18、@mayuyuace、@jperezdealgaba、@noooop、@yzong-rh、@jikunshang、@zxd1997066、@bigPYJ1151、@yma11、@hickeyma、@benchislett、 @xianbaoqian、@andakai、@NickLucche、@ivanium、@joerowell、@EazyReal、@mganczarenko、@majunze2001、@hongxiayang、@WindChimeRan、@Rohan138、@tjtanaa、@bbrowning、@this Jiang、@Fangzhou-Ai、@blasrodri、@Isotr0py、@zhenwei-intel、 @zyongye、@frida-andersson、@muhammadfawaz1、@l Cheng321、@spandantiwari、@Palaiologos1453、@soaringk、@Lynn-hh、@fadara01、@djramic、@Liangliang-Ma、@ronensc、@aarushjain29、@HDCharles、@qianlihuang、@AgenticSpark、@charlifu、 @cleonard530、@shen-shanshan、@xaguilar-amd、@xiaohongchen1991、@varun-sundar-rabindranath、@gau-nernst、@tahsintunan、@GirasoleY、@hclsys、@Yejing-Lai、@LucasWilkinson、@matteso1、@akii96、@atalman、@lucianommartins、 @I3eg1nner、@rahulssv-ibm、@ZichenYuan、@tanpinsiang、@hillelda、@Srinivasoo7、@Etelis、@Rukhaiya2004、@Oxygen56、@Priyjain-amd、@GuyStone、@nholmber、@CienetStingLin、@xinyu-intel、@JartX、@esmeetu、 @hhhhhhhhhhhhhhhhho、@harsha20032020、@walterbm、@Acaciasama、@jessiewei7、@ashwin-phadke、@shivampr、@cyq1017、@kjian249、@orestis-z、@xyang16、@tianmu-li、@mgehre-amd、@aaarkai、@guybd、 @wcynb1023、@Josephasafg、@qyYue1389、@russellb、@haoyangli0109、@sfeng33、@mikekg、@EanWang211123、@ovidiusm、@ItsMatti4、@hyeongyun0916、@qli88、@juliendenize、@calvarado2004、@tdoublep、 @brandonpelfrey、@davispuh、@weizhoublue、@jasonozuzu-cohere、@wentian-byte、@skajre、@gty111、@omirosh、@decarpentierg、@fjosw、@ilmarkov、@yuwenzho、@JisoLya、@JohnLangford、@aldenlobo、@bnellnm、@jasonlizhengjian、@zufangzhu、@izhuhaoran、 @MatthewBonanni、@deng451e、@ashwing、@sriganesh123、@linitra24、@liranschour、@umarkovi-amd、@aman0603、@adobrzyn、@jwzheng96、@eicherseiji、@ArsalanShakil、@tc-mb、@imargulis、@fangyuchu、@puririshi98、@JeanPaulShapo、 @VectorPeak、@tarjan1、@qiching、@Achyuthan-S、@ZJY0516、@lucifer1004、@cinnamonica02、@jmamou、@almayne、@hao-aaron、@Jyothirmaikottu、@andylolu2、@AIvashov、@stevenkuang-tencent、@lcskrishna、@Aneureka、@wan-danfeng、 @hengzheng345、@pranavthakur0-0、@zRzRzRzRzRzRzRzR、@DanBlanaru、@adamkbaranowski、@wendyliu235、@eparshut、@yangyang-cs95、@kalyanamdewri、@maxdebayser、@fenghourun、@tpopp、@okorzh-amd、@labAxiaoming、 @sychen52、@ekagra-ranjan、@gausah01、@yuyue0225sc、@cpersson-amd、@lslusarczyk、@alex101-ops、@Zhenzhong1、@velonica0、@zhongjing123、@zhou9402、@llsj14、@majian4work、@akinsella、@BadrBasowid、 @afierka-intel、@ayush1399、@LiJzd、@jesco-absolut、@Laurent-Zhang、@Kevin-XiongC、@NathanielMcVicar、@askliar、@ACEEE-1222、@jinzhen-lin、@SherryC41、@simondanielsson、@nv-nedelman-1、@yisustc、@kylesayrs、 @jialoop-git、@NicolasHug、@guan404ming、@HumphreySun98、@danielafrimi、@gcanlin、@robertgshaw2-redhat

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.25.0` · 📅 发布：2026-07-11 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.25.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
