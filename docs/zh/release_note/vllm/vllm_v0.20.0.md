---
title: "vllm v0.20.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.20.0"
version: "v0.20.0"
published: "2026-04-27"
type: "minor"
lang: "zh"
---

# vllm v0.20.0

# vLLM v0.20.0

## 亮点
此版本包含 320 名贡献者（123 名新贡献者）的 752 次提交！

* **DeepSeek V4**: Initial DeepSeek V4 support landed (#40860), with DSML token-leakage fix in DSV4/3.2 (#40806), DSA + MTP IMA fix (#40772), and a silu clamp limit on the shared expert (#40950).
* **CUDA 13.0 默认**：PyPI 上的默认 CUDA 轮和 `vllm/vllm-openai:v0.20.0` 图像切换为 CUDA 13.0；架构列表和构建参数已清理 (#39878)，CUDA 升级到 13.0.2 以匹配 PyTorch 2.11.0 (#40669)。作为一般经验法则，我们的 CUDA 版本政策遵循 PyTorch 的政策。我们强烈建议您使用 `uv` 安装 vLLM，如果您使用的是 CUDA 12.9，则使用 `--torch-backend=cu129`。
* **PyTorch 2.11 升级** (#34644)：vLLM 在用于 CUDA 的 Torch 2.11 上发布，XPU 现在也在 Torch 2.11 上 (#37947) — XPU 不再固定到 2.10。这是环境依赖性的重大变化。
* **Python 3.14**：添加到支持的 Python 版本列表 (#34770)。
* **Transformers v5**: vLLM now runs on HuggingFace `transformers>=5` (#30566), with vision-encoder torch.compile bypass (#30518) and continued v4/v5 compat fixes including PaddleOCR-VL image processor `max_pixels` (#38629), Mistral YaRN warning (#37292), and Jina ColBERT rotary inv_freq recompute （＃39176）。
* **新的大型模型**：Hunyuan v3 (Hy3) 预览版 (#40681) 和 HYV3 推理解析器 (#40713)； Granite 4.1 Vision 作为内置多模式模型 (#40282)。
* **FlashAttention 4 as default MLA prefill**: FA4 re-enabled as the default MLA prefill backend (#38819) with head-dim 512 and paged-KV support on SM90+ (#38835), plus an upstream FA4 sync (#38690).
* **TurboQuant 2 位 KV 缓存**：新的注意力后端提供 4 倍容量的 2 位 KV 缓存压缩 (#38479)，现在支持 FA3/FA4 预填充 (#40092)。
* **在线量化前端**：新的端到端在线量化前端（#38138），带有文档（#39736）； Experts_int8 合并到 FP8 在线路径中 (#38463)； MXFP8 在线量化移至新前端 (#40152)。
* **vLLM IR**: Initial IR skeleton with rms_norm op (#33825), OOT-platform kernel imports (#38807), gemma_rms_norm reworked on IR (#39014), and IR op testing/benchmarking infra added (#40167) — foundation for future kernel work.
* **Model Runner V2 的进步**：Eagle 预填充完整 CUDA 图形 (#37588)、从注意力后端自动解析 cudagraph 模式/大小 (#32936)、融合概率拒绝样本内核 (#38496)、对不支持的功能进行配置验证 (#38758)、为 eagle 草稿解码禁用分段回退 (#39773)、多个提示日志概率支持(#39937)、预填充预热覆盖率(#40746)，以及修复由过时的采样/草稿令牌引起的精度回归问题(#39833)。
* **MoE refactor series**: Unquantized migrated to Full Oracle Flow (#36286), CT W8A8 to Oracle (#39187), SharedExperts class (#35153), `SharedFusedMoE` removed (#35782), DefaultMoERunner split (#35326) and later combined back into `MoERunnerBase` (#40560), shared/fused expert output sum moved into `MoERunnerBase` (#35949), ZeroExpertFusedMoE in new framework (#35549), `compressed_tensors_moe.py` split (#38960), `GPTQMarlinMoEMethod` reworked with MK (#37990), XPU & CUTLASS MoE relocated to `fused_moe/experts/` (#40568, #40574), `make_expert_params_mapping` renamed (#40671)、MoE LoRA 重构 (#40338) 和 MoE DP 分块删除 (#39107)。
* **性能**：使用融合均方根范数优化批次不变性 — 2.1% E2E 延迟改进 (#40413)； avoid `seq_lens_cpu` GPU→CPU sync (#40654);缓存 `InductorPass.hash_source` (#39328);加载时跳过 FX-graph 反序列化以加快热编译速度 (#40151)；默认情况下启用 CUDAGraph 内存分析，以实现更清晰的启动内存统计 (#38284)。

### 模型支持
* 新架构：DeepSeek V4 (#40860)、Hunyuan v3 预览版 (#40681)、Granite 4.1 Vision (#40282)、EXAONE-4.5 (#39388)、BharatGen Param2MoE (#38000)、Phi-4-reasoning-vision-15B (#38306)、欢呼 multimodal (#38788)、telechat3 (#38510)、FireRedLID (#39290)、jina-reranker-v3 (#38800)、Jina Embeddings v5 (#39575)、Nemotron-v3 VL Nano/Super (#39747)。
* Gemma4 系列：快速预填充 (#38879)、量化 MoE (#39045)、Eagle3 (#39450)、Gemma3 的块局部注意力 + YaRN (#39823)、滑动层的双向视觉注意力 (#40534)、通过动态 BOS 的令牌重复修复 (#39842)、多模态嵌入器规范顺序修复 (#40411)、加上一系列流/工具调用修复（#38844、#38909、#38992、#39114、#39679、#39027）。
* 量化格式：GGUF 支持 MiniMax-M2.1 (#36965)，带有 UD-IQ1_S (#39471) 等前缀的非标准 GGUF 量化类型。
* 推测解码：Eagle3 用于 MiniMax-M2 (#37512)，Eagle3 用于 Gemma4 (#39450)。
* LoRA：Qwen3ASRForConditionalGeneration (#37247)、Gemma4ForConditionalGeneration (#39291、#38844)、DeepSeek V3.2 (#35077)、Qwen3.5 / Step3.x 专家 base_layer 扩展 (#37114)、MoE LoRA 重构 (#40338)、双 CUDA 流线性层（＃35721）。
* 多模式 MRoPE 刷新：基于 mm_features 的 Ernie-4.5 VL (#39753)、Keye-VL / Keye-1.5-VL (#39869)、PaddleOCR-VL (#39888) 的 MRoPE。
* 其他：Nano-Nemotron-VL 静态图像输入修复（#40724）； Qwen3 MoE no longer calls gate twice (#40664); DeepSeek V2-Lite accuracy drop fix (#40673); Parakeet UX / perf enhancements (#39423); ColModernVBERT 更新了最新的 HF 检查点 (#39307)； NemotronH 默认 `mamba_ssm_cache_dtype=float32` 和 NemotronHNanoVLV2 自动挂接 (#39032)； Transformers 后端的新 TP 计划样式 (#40467)； GLM-5.1 fix on ROCm (#40763).

### 引擎核心
* **Model Runner V2**：用于 eagle 预填充的完整 CUDA 图 (#37588)、基于注意力后端的自动 cudagraph 模式/大小 (#32936)、融合概率拒绝样本内核 (#38496)、配置验证 (#38758)、eagle-draft 分段回退禁用 (#39773)、多个提示 logprobs (#39937)、预填充预热覆盖率（#40746），过时的采样/草稿令牌准确性修复（#39833）。
* **vLLM IR**：IR 骨架 + rms_norm (#33825)、OOT 内核导入挂钩 (#38807)、IR 上的 gemma_rms_norm (#39014)、IR 操作测试/基准测试基础设施 (#40167)。
* **torch.compile**：torch 2.11 上的不透明对象（#39286），使用批处理不变模式进行 AOT 编译（#39201），嵌套在 AOT 目录下的电感器缓存（#39718），通过 codegen 分割 FX 图形（#38657），为 torch≥2.12 重新启用电感器预分级通道(#38944)、自定义操作中的字符串无需编译回归 (#38123)、MLA + 组 FP8 融合 (#38877)、SiluMul 激活+定量融合重构 (#39684)、`standalone_compile` 的 `donate_graph_module=True` (#39733)、加载时跳过 FX 图形反序列化 (#40151)、包括 Inductor 和 functorch 配置编译缓存键 (#40627)、在 vLLM 配置级别尊重 `TORCH_COMPILE_DISABLE` (#40715)、禁用分段编译的序列并行性 (#38373)。
* **Attention**：FA4 作为默认 MLA 预填充 (#38819)、sm90+FA4 上的 head-dim 512 + paged-KV (#38835)、FA4 上游同步 (#38690)、FlexAttention 的完整 CUDA 图 (#36298)、FlexAttention 非因果支持 (#40394)、统一 2D/3D triton_unified_attention (#40631)、TRTLLM minimax_allreduce_rms 移植 (#37045)、仅 `concat_mla_q` 半类型 (#37892)、批量不变性感知后端自动选择 (#40193)、避免 `seq_lens_cpu` GPU→CPU 同步 (#40654)。
* **Helion 内核**：torch.compile 对 Helion 内核的支持 (#38592)。
* **HMA / KV 卸载**：HMA 的 GPU 端 KV 事件（#37688）、跟踪组块哈希/ID（#37109）、卸载工作线程的统一内存布局（#37206）、OffloadingConnector 上的 `shutdown()`（#39182）、通过 KV 卸载传递的请求上下文（#39185）、滑动窗口查找(#36645)、多组工作者传输(#38453)、多KV组查找/加载/存储(#39401、#39402、#39403)。
* **功能**：GPU 工作线程的 NUMA 绑定 (#38635)、选择加入 `VLLM_MEDIA_CACHE` 媒体 URL 缓存 (#37123)、FSM 无法推进时安全请求中止 (#38663)、KV 连接器优先于内部注册表 (#38301)、默认启用 CUDAGraph 内存分析 (#38284)、恢复共享专家重叠(#39222)、磁盘 model_type 不同时的 `CONFIG_REGISTRY` 配置类查找修复 (#39554)、工作区大小调整 GPU 内存泄漏修复 (#39226)、SWA/chunked-local 运行时准入上限为启动池大小限制 (#40946)。
* **可插入层**：应用于 llm_head / vocab 嵌入 (#33465) 和 MoE 层 (#33556)。
* **Mamba**：随机舍入 (#35753)、不同的 Conv 状态布局 (#37416)、FlashInfer `selective_state_update` (#36162)。
* **指标和调度**：标记等待分解（容量/延迟）指标（#38435），简化 API 服务器握手（#39364），减少 mm 调度程序 `get_num_embed` 开销（#40143），`FinishedRequestStats` 上的 `request_id`（#39710）。
* **执行器**：引入 RayExecutorV2 (#36836)；使用 Ray 后端统一引擎进程监控 (#35862)。

### 硬件与性能
* **NVIDIA**：swapAB 支持 SM120 CUTLASS 块式 FP8 GEMM (#38325)、SM100 的 MXFP4 W4A4 CUTLASS MoE (#37463)、TRTLLM GEN NVFP4 MoE 通过权重填充具有非 512 对齐隐藏暗淡 (#39510)、TRTLLM FP8 MoE 具有随机权重 + BlockMajorK 布局(#38993)、SM9.0 上的融合 qknorm+rope 内核 (#37376)、RTX PRO 6000 Blackwell 的 fused_moe 配置调整 (#39183)、Qwen3-VL 视频的 ViT 完整 CUDA 图 (#38061)、VLM 示例的 `--enable-vit-cuda-graph` (#40580)、默认的 `max_frames_per_batch` 自动推断ViT CG 视频 (#40445)、将 FP8 输出量化融合到 `merge_attn_states` (#36518)、通过 `cuMemcpyBatchAsync` 批量 KV 缓存交换 (#38460)、sm_110 (Jetson Thor) 添加到 CUDA 13.0 构建目标 (#39233)。
* **AMD ROCm**: ZenCPU / AMD Zen CPU backend via zentorch (#39967), RDNA 3.5/4 device IDs (gfx1150/1151/1201) (#38455), gfx1102/gfx1103 added (#40037), MORI EP for unquantized MoE with AITER (#37529), MoRI build with AMD AINIC stack (#38371), MoRI-IO message format aligned with P2pNcclConnector and vllm-router (#39565), MORI prefill/decode API correction (#39835), AITER gemm w8a8 ptpc integration (#33773), TritonW4A16LinearKernel (#37352)、`TritonInt8ScaledMMLinearKernel` 中的非对称 INT8 (#38501)、启用 `fused_silu_mul_block_quant` (#38817)、`paged_attention_common` 的 KV 缓存洗牌 (#32914)、AITER 中删除的 MLA 解码输出补零 (#37539)、DeepSeek/Kimi-K2 的 MLA 双 RMS 范数融合传递 (#39242) older-AITer guard #40386), AITER MLA + Eagle3 spec decode (#39616), DFlash on ROCm (#39703), wvSplitK FP8 path for RDNA (#37712), GPU↔NUMA-node detection (#40015), non-causal attention in `ROCM_ATTN` (#40176), engine-shutdown GPU memory leak fix (#38503), score-correction-bias dtype cast for DeepSeek/Kimi-K2 (#39999).
* **Intel XPU**：XPU 的 torch 2.11 升级 (#37947) — 不再固定到 2.10，Qwen3-Next / Qwen3.5 的初始 GDN 关注 (#33657)，torch.compile 用于 XPU GDN 关注 (#39466)，XPU MXFP8 量化操作 (#38682)，XPU MXFP4 量化操作(#39857)、每通道 FP8 线性 (#38316)、XPU 上的 FP8 KV 缓存 (#37731)、用于 Intel Triton 的 `round_int8` (#38825)、在线 FP8 量化修复中的 MoE Triton (#40109)、针对 TritonExperts 更新的 `current_platform.supports_fp8()` (#40132)、XPU 修复上的 NIXL 导入 (#40430), fusion-pattern support disabled on XPU (#39789).
* **CPU**：CPU 草稿模型推测解码 (#32662)、AWQ 中的 CPU int8 计算模式 (#35697)、`cpu_attn` 中的 head_size 512 (#38676)、`cpu_fused_moe` 中的 gelu (#38770)、OMP 替换 (#36487)、ARM 上的 BF16 GELU LUT (#37469)、 CPU 上的 W4A16 Autoround (#38192)、CPU 亲和性/内存管理重构 (#39781)、IBM Z s390x torch 2.11 构建 (#39910)、低精度 dtypes 的更快 exp 例程 (#38112)、节点间管道并行修复 (#40150)、RISC-V 多个 RVV VLEN 目标 (#39478), RISC-V platform detection fix (#40427), exp() input clamp to prevent NaN on CPU/RISC-V (#40428).
* **TPU**: tpu-inference upgraded to 0.18.0 (#40395).
* **DeepSeek / MLA / Indexer**：用于 DSV3.2 DSA 解码的持久 TopK 调度程序 (#37421)、DSV3.2 索引器融合权重投影 (#38684)、Triton MLA 性能修复 (#33529)、索引器 WK 向上转换为 BF16 以进行融合 (#38928)、针对 MTP>1 的 MLA 索引器统一解码优化(#39458)、DSA + MTP IMA 修复(#40772)。
* **GDN / Mamba**：GDN 中的内核融合 (#37813)、TMA 与上游 FLA 对齐 (#38981)、在预填充和规范解码路径中消除 GPU↔CPU 同步 (#38361、#38047)。
* **其他**：通过 CMake 将 DeepGEMM 集成到 vLLM 轮中 (#37980)，默认启用 Lustre FS 检查点预取 (#39422)，Gemma4 融合路由 Triton 内核 (#39083)，Gemma4 embed_input_ids GPU/CPU 同步删除 (#39234)，Nemotron VL 图像/视频预处理优化 (#40283)，SiLU 块量化融合v1 (#32996)、ViT 的双线性_pos_embed Triton 内核 (#37948)、均值池优化（~5.9% 吞吐量）(#38559)、池的冗余同步删除（~3.7% 吞吐量）(#39113)、H2D 可分页内存复制减少 (#38794)、FP8 的融合零初始化程序DeepGemm 块量化 (#39547)、批量不变融合均方根范数 2.1% E2E 延迟改进 (#40413)、`InductorPass.hash_source` 缓存 (#39328)、嗡嗡声量化内核 (#34556)。
### 大规模服务
* **EPLB**：EPLB 权重交换的替代通信 (#33176)、基于 nixl 的 EPLB 通信器 (#36276)、用于预填充的路由器记录映射优化 (#36261)、`TransferMetadata` 合并 (#37341)、异步 EPLB 同步重构 (#37601)、从异步 EPLB 中删除的异步基础设施 (#40730)、 fused_moe 路由器中的副本选择偏差修复 (#40810)，添加了异步 EPLB 集成测试 (#40168)。
* **WideEP**：朴素的 all2all 被 allgather +reducescatter 取代 (#33728)。
* **KV Offload / Connector**: 3FS KVConnector (#37636), unified memory layout for offloading workers (#37206), cache_salt propagated through MP connector for per-user isolation (#39837), multi-connector metrics of same type (#40010), LMCache block-allocation event (#38856), LMCache MP save optimization with MLA (#38810)、KVTransferParams 中的 `num_lmcache_extra_cached_token` (#39843)、在 P/D 中预填充期间卸载所有 KV 块 (#40346)、固定到 Ray 上第一个 GPU 节点的 DP 控制包 (#39167)、大小适合 EP 组的 FlashInfer NVLink MNNVL 工作区 (#40893)。
* **分解/NIXL / Mamba**：在异构 TP 部署上对类似 Mamba2 的模型提供全面的 PD 支持 (#37635)，Nixl 升级到 0.10.1 (#39922)，`TpKVTopology` + `HeteroTPTransferConfig` 统一为 `TransferTopology` (#39529)，NIXL EP 在 fused_moe 中被视为批量专家（＃40412）。

### 量化
* **New formats & methods**: TurboQuant 2-bit KV cache compression (#38479) with FA3/FA4 prefill (#40092), per-token-head INT8/FP8 KV cache quantization (#38378), fused FP8/NVFP4 output quantization in MLA attention (#35792), NVFP4 dense models on MI300/MI355X and Hopper通过仿真 (#35733)、H100/MI300/MI350 的 NVFP4 MoE 仿真回退 (#35737)、嗡嗡声量化内核 (#34556)。
* **内核**：Marlin GEMM/MoE 中的 MXFP8，具有 Mxfp8LinearOp 重构 (#34664)、SM100 的 MXFP4 W4A4 CUTLASS MoE (#37463)、`reshape_and_cache_flash` 中的 NVFP4 (#37332)、批处理不变的 NVFP4 线性 (#39322)、FlashInfer CuteDSL batched-experts backend for NVFP4 MoE (#38251), special `GptOssMxfp4MoeMethod` (#39604), W4A8_FP8 MoE TP>1 correctness fix (#40310), NVFP4 CUTLASS MoE OOB-read fix for non-multiple-of-4/16 expert counts (#40351), RMS norm + quant fusion fix on DeepGEMM B200 的 UE8M0 路径 (#40552)，Gemma4 量化 MoE (#39045)。
* **压缩张量**：W8A8 MXFP8 线性/MoE (`CompressedTensorsW8A8Mxfp8`) (#38815)、Oracle 结构中的 CT W8A8 (#39187)、注意力/KV 量化模型的分层重新加载 (#38995)、experts_int8 与 FP8 在线量化合并 (#38463)、新前端上的 MXFP8 在线量化（＃40152）。
* **在线量化**：通过预取卸载修复量化模型初始化失败问题 (#40432)，针对 XPU/ROCm 上的 TritonExperts 更新 `current_platform.supports_fp8()` (#40132)。
* **XPU / CPU / AMD**: XPU MXFP4 (#39857), XPU MXFP8 GEMM + compressed-tensor schema (#38707), XPU FP8 per-channel linear (#38316), FP8 KV cache on XPU (#37731), CPU W4A16 Autoround (#38192), XPU W4A16 Autoround (#37986)、ROCm 上的非对称 INT8 `TritonInt8ScaledMMLinearKernel` (#38501)、Quark W8A8 INT8 MoE 推理 (#36320)。
* **弃用**：删除了 Petit NVFP4 (#32694)。

### API 和前端
* **OpenAI / Anthropic API**：响应 API 上的 `presence_penalty` / `frequency_penalty` (#38613)、响应 API 流迁移到统一解析器 (#38755)、响应上的 `tool_choice` / `tools` 验证以匹配 OpenAI (#40399)、 Mistral Grammar 工厂 (#38150)、`/inference/v1/generate` (#38405) 上的多模式支持、重新排序中的 `max_tokens_per_doc` (#38827)、生成评分 (#34539)、GPU 上重新启用 MaxSim (#38620)、Anthropic `/v1/messages` 上的 `chat_template_kwargs` (#40125)、自动检测`reasoning_config` 当仅设置 `reasoning_parser` 时 (#38214)，推理解析器可以通过 `adjust_request` 访问模型配置 (#37848，#39027)，有效的聊天模板 kwargs 传递给推理解析器 (#40460)，推理解析器公开 `reasoning_start_str`/`reasoning_end_str` (#40566)。
* **Pooling ecosystem**: Pooling entrypoints overhauled across scoring (#28631), pooling (#39153), and cleanup (#39675); preprocessing/postprocessing offloaded to thread pool (#39763); async scheduling disabled by default for pooling (#39592); `logit_scale` 添加到 PoolerConfig (#39435)，然后重命名为 `logit_bias`/`logit_scale` → `logit_mean`/`logit_sigma` 用于仿射分数校准 (#39530) — 破坏。 `LLM.reward` deprecated;使用 `LLM.encode` 代替 (#40688)。
* **gRPC / streaming**: Streaming on token-generation endpoint (#37171); gRPC periodic stats logging + servicer log forwarding (#38333); standard `grpc.health.v1` health check for Kubernetes-native probes (#38016).
* **工具/推理解析器**：将 `<tool_call>` 视为 Qwen3 中的隐式推理结束 (#35687)、GptOssReasoningParser 的 `is_reasoning_end_streaming()` 覆盖 (#35745)、Mistral 工具解析器 HF-tokenizer 修复 (#39294)、Mistral pre-v11 工具解析器尾随输出修复 (#40531)、Gemma4 流HTML 重复/JSON 损坏/null-as-string 修复（#38909、#38992、#39114、#39679）、工具解析器中的 HF tokenizer 并发借用修复（#40059）、`HYV3ReasoningParser` 不再变异 `chat_template_kwargs`（#40713）。
* **多模式**：带有缓存注入的外部处理 `mm_kwargs` (#39502)，用于并发解码的 PyAV 视频后端 (#39986)，用于预提取帧序列的自定义视频元数据 (#40133)，用于 VLM 示例的图像+视频混合输入（每个提示）(#40335)，针对 Qwen3 多模式优化的 Deepstack 缓冲区 (#40145)，渲染器启动期间的只读多模式处理器预热(#40797)、`mm_processor_kwargs` 在离线 `generate` API 中转发 (#40251)、标准化在 `prompt` 中携带令牌 ID 的格式错误的字典提示 (#40339)、FunASR 的热词 (#39674)、将 `get_generation_prompt()` 参数捆绑到 `SpeechToTextParams` (#36268).
* **Frontend / vLLM Omni**: `--omni` delegates to vLLM Omni (#40744);避免急切导入 `mistral_common` (#40043)。
* **LLM / CLI**：结构化输出特殊令牌保存在离线 `LLM.chat` 中 (#39352)，`use_audio_in_video` 可在 nemotron-nano-vl 的 `vllm serve` 上传递 (#38538)，延迟导入节省约 2 秒 CLI 启动 (#40056)，改进了 MM 输入太长的错误消息(#39409)、FP8 KV 缓存未命中预填充查询量时发出警告 (#39752)、更清晰的 DCP 错误消息 (#28443)、更新 `--model` 弃用警告 (#39518)、映射 Mimo 推理/工具解析器 (#40089)、JSON 中人类可读的 `k/K/m/M…` 后缀CLI 参数 (#40473)。

### Spec Decode
* Eagle3 for MiniMax-M2 (#37512), Eagle3 for Gemma4 (#39450), AITER MLA + Eagle3 on ROCm (#39616).
* 用于预填充路径的 TurboQuant FA3/FA4 (#40092)。
* Mamba: default to `'align'` cache mode for Mamba-based models when speculative decoding is enabled (#40454).
* Unified Synthetic Acceptance Rate for V1 and V2 (#40662); `SpecDecodeBaseProposer` 移出 `eagle.py` (#40732)； DSA + MTP IMA 修复 (#40772)。

### 安全
* 批处理运行器 `download_bytes_from_url` 中的 SSRF 修复 (#38482)。

### 依赖关系
* **PyTorch 2.11** 适用于 CUDA (#34644) 和 XPU (#37947) — XPU 不再固定到 2.10。
* **CUDA 13.0** default with updated architecture lists and cleaned build-args (#39878); CUDA bumped to 13.0.2 to match PyTorch 2.11.0 (#40669);添加了 sm_110（杰特森雷神）（#39233）。
* **Python 3.14** added to supported versions (#34770).
* **Transformers v5** (#30566), with vision-encoder torch.compile bypass (#30518) and continued v4/v5 compat fixes.
* **FlashAttention 4** upstream sync (#38690) and symlink-on-install behavior (#38814).
* **FlashInfer** 升至 0.6.8 (#39959)。
* **AITER** triton BUFFER_OPS fix + version updates (#38580), AITER reverted to v0.1.10.post3 (#39509); **Nixl** bumped to 0.10.1 (#39922) and pinned per CUDA major in CI (#39851); **DeepGEMM** 通过 CMake 集成到轮子中 (#37980)； **fastsafetensors** added to NVIDIA Dockerfile (#38950); Helion 碰撞了 0.3.2 → 0.3.3 (#38062)。
* **删除/移动**：`resampy` 依赖项已删除 (#39524)，`librosa` 直接依赖项已删除 (#39079)，`pyav` 和 `soundfile` 已移至通用要求 (#39997)。

### 重大变化
1. **PyTorch 2.11 + CUDA 13.0(.2) default** — environment dependency change, now applied to XPU as well.
2. **Transformers v5** is the supported baseline (#30566).
3. **指标返工**：删除 `vllm:prompt_tokens_recomputed` (#38709)； `num_cached_tokens` / `num_external_computed_tokens` replaced with `PrefillStats` (#37460).
4. **Pooler config rename**: `logit_bias`/`logit_scale` → `logit_mean`/`logit_sigma` (#39530).
5. **Async scheduling default OFF for pooling models** (#39592).
6. **CUDAGraph memory profiling now ON by default** (#38284) — startup memory accounting changes.
7. **删除了 Petit NVFP4 量化** (#32694)； `LLM.reward` 已弃用，使用 `LLM.encode` (#40688)； `cprofile` / `cprofile_context` 已弃用 (#39100)； V0 `accept output buffer` 已弃用 (#39125)。

### V0 Deprecation
* Petit NVFP4 (#32694), `accept output buffer` in attention (#39125), `cprofile` / `cprofile_context` (#39100), `LLM.reward` offline API (#40688).

## 新贡献者
* @1096125073 made their first contribution in https://github.com/vllm-project/vllm/pull/38510
* @2imi9 在 https://github.com/vllm-project/vllm/pull/38970 中做出了第一个贡献
* @AAISSJ made their first contribution in https://github.com/vllm-project/vllm/pull/37831
* @abatilo made their first contribution in https://github.com/vllm-project/vllm/pull/38987
* @aditi-amd made their first contribution in https://github.com/vllm-project/vllm/pull/39953
* @aeon-x made their first contribution in https://github.com/vllm-project/vllm/pull/39843
* @Alchuang22-dev made their first contribution in https://github.com/vllm-project/vllm/pull/40339
* @aleksandaryanakiev 在 https://github.com/vllm-project/vllm/pull/40125 中做出了第一个贡献
* @aliialsaeedii 在 https://github.com/vllm-project/vllm/pull/38253 中做出了第一个贡献
* @artem-spector made their first contribution in https://github.com/vllm-project/vllm/pull/40282
* @bai made their first contribution in https://github.com/vllm-project/vllm/pull/39959
* @bhargav-patel-29 made their first contribution in https://github.com/vllm-project/vllm/pull/38000
* @bingshuailiu made their first contribution in https://github.com/vllm-project/vllm/pull/38788
* @Bortlesboat made their first contribution in https://github.com/vllm-project/vllm/pull/39123
* @BugenZhao made their first contribution in https://github.com/vllm-project/vllm/pull/40460
* @carlyou 在 https://github.com/vllm-project/vllm/pull/36205 中做出了第一个贡献
* @Chinmay-Kulkarni-AMD made their first contribution in https://github.com/vllm-project/vllm/pull/39967
* @crawfordxx made their first contribution in https://github.com/vllm-project/vllm/pull/38722
* @daiyu1111 made their first contribution in https://github.com/vllm-project/vllm/pull/40011
* @dalistarh made their first contribution in https://github.com/vllm-project/vllm/pull/40194
* @daniebrill made their first contribution in https://github.com/vllm-project/vllm/pull/36934
* @dhonnappa-amd made their first contribution in https://github.com/vllm-project/vllm/pull/38238
* @dondetir made their first contribution in https://github.com/vllm-project/vllm/pull/38455
* @efortin made their first contribution in https://github.com/vllm-project/vllm/pull/39183
* @elenalil-aws 在 https://github.com/vllm-project/vllm/pull/38927 中做出了第一个贡献
* @elwhyjay made their first contribution in https://github.com/vllm-project/vllm/pull/39526
* @EricccYang 在 https://github.com/vllm-project/vllm/pull/37376 中做出了第一个贡献
* @evezhier made their first contribution in https://github.com/vllm-project/vllm/pull/36540
* @ezylopx5 made their first contribution in https://github.com/vllm-project/vllm/pull/37051
* @fergusfinn made their first contribution in https://github.com/vllm-project/vllm/pull/35745
* @foreverlms made their first contribution in https://github.com/vllm-project/vllm/pull/31113
* @frgossen made their first contribution in https://github.com/vllm-project/vllm/pull/38944
* @Galigator made their first contribution in https://github.com/vllm-project/vllm/pull/40161
* @ganeshr10 made their first contribution in https://github.com/vllm-project/vllm/pull/32662
* @hangy-amd 在 https://github.com/vllm-project/vllm/pull/39703 中做出了第一个贡献
* @heachary made their first contribution in https://github.com/vllm-project/vllm/pull/39999
* @hhk7734 在 https://github.com/vllm-project/vllm/pull/37171 中做出了第一个贡献
* @hnt2601 made their first contribution in https://github.com/vllm-project/vllm/pull/39892
* @hospedales made their first contribution in https://github.com/vllm-project/vllm/pull/38847
* @huangzhilin-hzl 在 https://github.com/vllm-project/vllm/pull/40092 中做出了第一个贡献
* @ianliuy made their first contribution in https://github.com/vllm-project/vllm/pull/39473
* @ibifrost made their first contribution in https://github.com/vllm-project/vllm/pull/37636
* @ibrahim1023 在 https://github.com/vllm-project/vllm/pull/39169 中做出了第一个贡献
* @ichbinblau made their first contribution in https://github.com/vllm-project/vllm/pull/38371
* @jackcfwang made their first contribution in https://github.com/vllm-project/vllm/pull/38794
* @jaseelmohd2 made their first contribution in https://github.com/vllm-project/vllm/pull/39986
* @jatseng-ai 在 https://github.com/vllm-project/vllm/pull/37352 中做出了第一个贡献
* @JeanPaulShapo made their first contribution in https://github.com/vllm-project/vllm/pull/35736
* @jefp 在 https://github.com/vllm-project/vllm/pull/39435 中做出了第一个贡献
* @jesus-talavera-ibm 在 https://github.com/vllm-project/vllm/pull/38714 中做出了第一个贡献
* @jigangz made their first contribution in https://github.com/vllm-project/vllm/pull/39780
* @JoursBleu made their first contribution in https://github.com/vllm-project/vllm/pull/36965
* @khairulkabir1661 made their first contribution in https://github.com/vllm-project/vllm/pull/38388
* @khushali9 made their first contribution in https://github.com/vllm-project/vllm/pull/40409
* @kibitzing made their first contribution in https://github.com/vllm-project/vllm/pull/37501
* @KimuGenie made their first contribution in https://github.com/vllm-project/vllm/pull/39679
* @kkyyxhll 在 https://github.com/vllm-project/vllm/pull/38517 中做出了第一个贡献
* @kot-begemot-uk 在 https://github.com/vllm-project/vllm/pull/36487 中做出了第一个贡献
* @krishung5 在 https://github.com/vllm-project/vllm/pull/39502 中做出了第一个贡献
* @KyleMylonakisProtopia made their first contribution in https://github.com/vllm-project/vllm/pull/38699
* @lalit10 made their first contribution in https://github.com/vllm-project/vllm/pull/38955
* @larryli2-amd made their first contribution in https://github.com/vllm-project/vllm/pull/39616
* @lesj0610 made their first contribution in https://github.com/vllm-project/vllm/pull/40359
* @liuchenbing2026 在 https://github.com/vllm-project/vllm/pull/37512 中做出了第一个贡献
* @lyd1992 made their first contribution in https://github.com/vllm-project/vllm/pull/40428
* @MekayelAnik 在 https://github.com/vllm-project/vllm/pull/39085 中做出了第一个贡献
* @menogrey made their first contribution in https://github.com/vllm-project/vllm/pull/37989
* @mieshkiwrk 在 https://github.com/vllm-project/vllm/pull/38825 中做出了第一个贡献
* @misaAle 在 https://github.com/vllm-project/vllm/pull/39554 中做出了第一个贡献
* @Monishver11 made their first contribution in https://github.com/vllm-project/vllm/pull/32996
* @mukesh-hai made their first contribution in https://github.com/vllm-project/vllm/pull/38435
* @namgyu-youn 在 https://github.com/vllm-project/vllm/pull/38799 中做出了第一个贡献
* @nemanjaudovic 在 https://github.com/vllm-project/vllm/pull/38114 中做出了第一个贡献
* @nithinvc 在 https://github.com/vllm-project/vllm/pull/38405 中做出了第一个贡献
* @noobHappylife made their first contribution in https://github.com/vllm-project/vllm/pull/38519
* @pedramr made their first contribution in https://github.com/vllm-project/vllm/pull/39650
* @petern48 在 https://github.com/vllm-project/vllm/pull/37247 中做出了第一个贡献
* @philip-essential 在 https://github.com/vllm-project/vllm/pull/39823 中做出了第一个贡献
* @pinsiangamd 在 https://github.com/vllm-project/vllm/pull/37529 中做出了第一个贡献
* @Prathmesh234 在 https://github.com/vllm-project/vllm/pull/36466 中做出了第一个贡献
* @puririshi98 在 https://github.com/vllm-project/vllm/pull/39206 中做出了第一个贡献
* @qiching 在 https://github.com/vllm-project/vllm/pull/39752 中做出了第一个贡献
* @qmx 在 https://github.com/vllm-project/vllm/pull/35687 中做出了第一个贡献
* @rbrugaro-amd 在 https://github.com/vllm-project/vllm/pull/39242 中做出了第一个贡献
* @rishaps 在 https://github.com/vllm-project/vllm/pull/39092 中做出了第一个贡献
* @Roy214 在 https://github.com/vllm-project/vllm/pull/39575 中做出了他们的第一个贡献
* @San-Nguyen 在 https://github.com/vllm-project/vllm/pull/40324 中做出了第一个贡献
* @SandishKumarHN 在 https://github.com/vllm-project/vllm/pull/35431 中做出了第一个贡献
* @SeraphimSerapis 在 https://github.com/vllm-project/vllm/pull/39861 中做出了第一个贡献
* @ShubyM 在 https://github.com/vllm-project/vllm/pull/38844 中做出了第一个贡献
* @shunting314 在 https://github.com/vllm-project/vllm/pull/36298 中做出了第一个贡献
* @skavulya 在 https://github.com/vllm-project/vllm/pull/40430 中做出了第一个贡献
* @starkwj 在 https://github.com/vllm-project/vllm/pull/38726 中做出了第一个贡献
* @stevenkuang-tencent 在 https://github.com/vllm-project/vllm/pull/40681 中做出了第一个贡献
* @storyicon 在 https://github.com/vllm-project/vllm/pull/40133 中做出了第一个贡献
* @talorabr 在 https://github.com/vllm-project/vllm/pull/36029 中做出了第一个贡献
* @thomasmaindron 在 https://github.com/vllm-project/vllm/pull/39293 中做出了第一个贡献
* @TihoElek 在 https://github.com/vllm-project/vllm/pull/38849 中做出了第一个贡献
* @triangleXIV 在 https://github.com/vllm-project/vllm/pull/39102 中做出了第一个贡献
* @ultranationalism 在 https://github.com/vllm-project/vllm/pull/40191 中做出了第一个贡献
* @USTCKAY 在 https://github.com/vllm-project/vllm/pull/39181 中做出了第一个贡献
* @V2arK 在 https://github.com/vllm-project/vllm/pull/38016 中做出了第一个贡献
* @vedantjh2 在 https://github.com/vllm-project/vllm/pull/34539 中做出了第一个贡献
* @velonica0 在 https://github.com/vllm-project/vllm/pull/39478 中做出了第一个贡献
* @vibhavagarwal5 在 https://github.com/vllm-project/vllm/pull/39064 中做出了第一个贡献
* @VinayakMishra95 在 https://github.com/vllm-project/vllm/pull/40729 中做出了第一个贡献
* @Wangxiaoxiaoa 在 https://github.com/vllm-project/vllm/pull/40455 中做出了第一个贡献
* @wincent8 在 https://github.com/vllm-project/vllm/pull/37841 中做出了第一个贡献
* @wojciech-wais 在 https://github.com/vllm-project/vllm/pull/34844 中做出了第一个贡献
* @wufann 在 https://github.com/vllm-project/vllm/pull/38615 中做出了第一个贡献
* @wuyingjun-lucky 在 https://github.com/vllm-project/vllm/pull/40251 中做出了第一个贡献
* @YifanLi3 在 https://github.com/vllm-project/vllm/pull/40266 中做出了第一个贡献
* @yintong-lu 在 https://github.com/vllm-project/vllm/pull/35697 中做出了第一个贡献
* @YM2132 在 https://github.com/vllm-project/vllm/pull/38427 中做出了第一个贡献
* @yoke233 在 https://github.com/vllm-project/vllm/pull/38909 中做出了第一个贡献
* @yubofredwang 在 https://github.com/vllm-project/vllm/pull/39160 中做出了第一个贡献
* @yurun00 在 https://github.com/vllm-project/vllm/pull/37766 中做出了第一个贡献
* @yuwenzho 在 https://github.com/vllm-project/vllm/pull/39466 中做出了第一个贡献
* @Yuyi-Ao 在 https://github.com/vllm-project/vllm/pull/38052 中做出了第一个贡献
* @z1ying 在 https://github.com/vllm-project/vllm/pull/39518 中做出了第一个贡献
* @zhangj1an 在 https://github.com/vllm-project/vllm/pull/40629 中做出了第一个贡献
* @Zhenzhong1 在 https://github.com/vllm-project/vllm/pull/38192 中做出了第一个贡献
* @zxd1997066 在 https://github.com/vllm-project/vllm/pull/38899 中做出了第一个贡献

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.20.0` · 📅 发布：2026-04-27 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.20.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
