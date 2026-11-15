---
title: "vllm v0.27.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.27.0"
version: "v0.27.0"
published: "2026-08-10"
type: "minor"
lang: "zh"
---

# vllm v0.27.0

# vLLM v0.27.0 Release Notes

## 亮点

此版本包含 242 名贡献者（64 名新贡献者）的 561 次提交！

* **Kimi K3 支持**，在一个版本中提供完整的堆栈支持：核心模型文件和内核 (#50089、#50000)、Python (#50093) 和 Rust (#50104) 前端、AttnRes 内核 (#50090)、DeepGEMM 支持 (#50458)、压缩张量量化检查点(#50500)、DSpark AR fusion (#50242) 以及对共享专家进行分片而不是复制的选项 (#50656)。
* **更多新模型**：带有 EVS 视频令牌修剪 (#48912) 的 Qwen3.5 纯文本密集模型和 MoE 模型 (#50210)、K-EXAONE-2.0-750B-A37B (#50524)、通过 Transformers 建模后端的 VaultGemma (#49803) 和 jina-embeddings-v5-text-nano (#50688)。
* **PyTorch 2.13.0 升级**以及 torchvision 0.28.0 和 Triton 3.7.1 (#48155) — 这是一个重大的环境变化； XPU (#48677) 和 CPU (#50412) 也紧随其后，火炬 2.13。
* **FlashAttention 4 集成在 SM100 上得到深化**：FP8 KV 缓存支持 (#42569) 和 headdim-256 支持 (#42669)，由新的 JIT 预热基础设施 (#47451) 和运行者拥有的 Triton 内核预热 (#49903) 提供支持，消除首次请求编译停顿。
* **DeepSeek-V4 性能提升**：序列并行性 (#46789)、通过跳过空 c128 启动实现约 2 倍的内核改进 (#48957)、3.4% E2E TTFT 跳过不需要的 topk/路由器 (#49486)、3.9% E2E TTFT 实现工作区重用 (#49236)、1.88x 内核通过删除冗余完整内核 (#50298)、自适应 topk 宽度 (1.0% E2E, #50004)、保存在 PP 缓冲区中的 448 MiB GPU 内存 (#50312)、紧凑的 MXFP4 索引器 KV 缓存 (#48993) 以及删除 FlashInfer >= 0.6.14 上的稀疏 MLA q-head 填充 (#48047)。
* **Model Runner V2 扩展到非生成工作负载**：仅编码器注意 (#49331)、用于嵌入/分类的序列池 (#48791)、编码器标记分类 (#50293) 和标记嵌入 (#50574)、BGE-M3 池 (#50661)、CPU 上的多模态 (#50073)、多层 MTP 推测器(#48892)，PCP 现在选择 MRV2 (#50034)。
* **弹性大规模服务**：用于 DP+EP 外部负载均衡器部署的（简化的）容错框架（#44428）和弹性 EP 扩展的异步准备（#47288）。
* **混合模型分解**：混合 MLA+SSM 模型的 NIXL P/D (#49762)、混合模型的异构 P/D 块大小 (#49612) 以及 MoRIIO 异构 TP<->DP 预填充/解码读取路由 (#46116)。
* **Rust 前端开发了一个 gRPC 控制平面**：引擎感知的运行状况报告 (#48992)、中止控制 (#49255)、服务器和模型发现 (#49491)、KV 事件源发现 (#50033)，以及集成到 `vllm` CLI 中的 `vllm-bench` (#48930)。
* **早期的下一代硬件支持**：针对 NVIDIA Rubin (#49387) 的 `sm_107` 目标，在 SM107 上使用 NVLink 全归约路径 (#49647)，并启用 ROCm gfx1250 架构 (#46516)。

### 模型支持
* Kimi K3：新模型 (#50000)，带有模型文件和内核 (#50089)、Python 前端 (#50093)、Rust 前端 (#50104)、AttnRes 内核 (#50090)、DeepGEMM 支持 (#50458)、DSpark AR fusion (#50242) 和可选的共享专家分片（#50656）。
* 新模型：Qwen3.5 纯文本密集和 MoE (#50210)、K-EXAONE-2.0-750B-A37B (#50524)、通过 Transformers 后端的 VaultGemma (#49803)、带有 EuroBERT 编码器骨干的 jina-embeddings-v5-text-nano (#50688)。
* Inkling：llm 压缩器 NVFP4 权重 (#49258) 和压缩张量动态 FP8 (#48876)。
* 多模式：VidCom2 视频令牌修剪 (#47750)、Qwen3.5 的 EVS (#48912)、Gemma-4 的 ViT CUDA 图 (#46837)、Cosmos3 FP8 ModelOpt/Diffusers 重新映射 (#48952)、MiniMax-M3 MSA 推测解码验证 (#50032) 和默认视频处理器(#50305)、DeepSeek-OCR-2 TTFT 优化 (#49531)、MOSS-TD 的最大音频持续时间更长 (#49403)。
* 扩散模型：DiffusionGemma 的 top_k 和 top_p 采样（#45429）。
* Transformers 建模后端：音频模型支持 (#39330)、改进的 `fx` 跟踪器 (#49957)、融合残差添加 + RMSNorm 编译通道 (#48757)，以及 MLA 填充 + 分组 topk 路由的修复 (#49982)、带有 TP 的 MQA (#49987) 和 Qwen3-VL M-RoPE (#49292)。

### 引擎核心
* 预热：新的 JIT 预热基础设施 (#47451)、运行者拥有的 Triton 内核在第一个请求之前预热 (#49903)，以及适当的渲染器预热 (#50408)。
* Attention：FlashAttention 4 SM100 FP8 KV 缓存 (#42569) 和 headdim-256 (#42669)； DeepSeek-V2/R1 和 Kimi-K2.5 的 DCP 下 MLA 解码的查询复制 (#45964)；用于稀疏 MLA 预填充的屏蔽 MHA (#48770)；跳过短密集预填充的稀疏索引器评分 (#48407)； FlexAttention 尾声钩子 (#45841) 和编码器块掩码编译爆炸避免 (#50339)；注意力后端仍然有资格提供前缀 LM 模型的纯文本服务 (#48796)；合并注意力上下文计数作为运行时参数（#48739）；统一多路径编码器 CUDA 图支持 (#49934)；编码器缓存扩展挂钩 (#48218)。
* Model Runner V2：仅编码器注意力（＃49331），用于嵌入和分类的序列池（＃48791），编码器令牌分类（＃50293），编码器令牌嵌入（＃50574），BGE-M3池（＃50661），CPU上的多模态（＃50073），多层MTP推测器（＃48892），PCP选择MRV2 (#50034)、注意力元数据始终在捕获时构建 (#49364)、编码器缓存分析 (#47985)、跳过无操作 FP32 logits 实现 (#47711)、分块拒绝采样器以避免 OOM (#48630)、混合 Mamba 中更少的 GPU<->CPU 同步 (#49736)。
* KV 卸载：具有对等查找/服务功能的通用 P2P 辅助层 (#48021)、使用 TierFilter/TierMatcher 进行按请求层过滤 (#48123)、使用 TieringOffloadingSpec 进行自描述 KV 事件 (#48679)、通过 CachePolicyFactory 进行可插入逐出策略 (#49114)、重复数据删除复制的 MLA KV在共享 CPU 区域 (#48906)、CPUOffloadingSpec 的单副本 MLA 布局 (#50301)、CPUOffloadingSpec 移至 SharedOffloadRegion (#50094)、独立于 TP 的紧凑辅助标识 (#49858)、用于文件系统卸载的批量 C 存储/加载 (#49152)、用于子块提示的可靠部分尾部卸载 (#49502)、每层用于与并行性无关的卸载的规范 KV 页面映射 (#48408)。
* Mamba/混合：ReplaySSM 缓存可实现更快的 Mamba2 标准解码 (#48018)，融合对齐模式 DS-conv 状态迁移，num_accepted_tokens > 1 (#49291)，FlashInfer Mamba SSU 算法选择 (#50157)，修复了混合模型上的 `/wake_up` 崩溃 (#41602)。
* Spec 解码：跨 TP 等级复制 DSpark Markov 头 (#49731)，从投机者配置加载 `sample_from_anchor` (#48639)，选择最早完成的停止字符串 (#49391)。
* 结构化输出：语法通过规范解码跨越推理边界（#44993）。
* 预处理性能：渲染器 CPU 工作卸载到渲染器线程池 (#49396)、AsyncLLM 中事件循环的原始提示预处理 (#49608)、在其自己的执行器上隔离的多模式预处理 (#49524)、MM 嵌入延迟事件循环的加载 (#49477)、在线池请求中的并行预处理 (#49153)、视频按源字节进行哈希处理 (#49607)，原始图像模式保留在 ImageIO 中 (#49159)。
* RL：RL 推出的权重版本标记 (#49040)、有状态训练器发送 IPC (#48981)、权重重新加载期间设置的 vLLM 配置 (#45989)、来自 FlashInfer 单片 MoE 内核的路由器重播输出 (#44214)。
* 内存和鲁棒性：CuMem sleep-L1 碎片统计（#49208），所有平台上都遵守 cgroup 内存限制（#49966），当 /dev/shm 太小时快速失败（#48879），shm_broadcast 中的零拷贝张量酸洗（#48442），当前缀缓存关闭时，LRU 哈希分割在 free_blocks 中跳过(#48017)、从 torch.compile 缓存因素中排除的位置派生路径变量 (#47573)、为 ReLU^2 编译的 `CustomOp.forward_native` (#50244)、用于 HF 分词器的 HF 配置 (#49907)、通过固定块大小实现批量不变的 RMSNorm (#48391)。

### 硬件与性能
* DeepSeek-V4：序列并行性 (#46789)、~2x 内核跳过空 c128 启动 (#48957)、3.4% E2E TTFT 在解码中跳过 topk/路由器 (#49486)、3.9% E2E TTFT 工作区重用 (#49236)、1.88x 内核删除冗余的完整内核(#50298)、自适应 topk 宽度 1.0% E2E (#50004)、节省 448 MiB GPU 内存 (#50312)、紧凑的 MXFP4 索引器 KV 缓存 (#48993)、为 FlashInfer >= 0.6.14 删除稀疏 MLA q-head 填充 (#48047)。
* 内核：RMSNorm 不连续支持与 1.2–3.1x 内核改进 (#49750)，MoE `reduce_scatter` 回归修复恢复 5% E2E 吞吐量 (#48763)，非分组无偏差 topk 路由调度到融合路径 (#49618)，调整 LL BF16 路由器 GEMM (#48774)，并跳过预热非 MoE 模型 (#49659)、通过 `VLLM_TRITON_USE_TD` 融合 MoE 的 Triton 张量描述符路径 (#42436)、topk 中跳过的 cudagraph/DP 填充 (#48979)、Marlin INT4-FP8 AWQ 预处理内核中的合并 HBM 访问 (#47268)。
* NVIDIA 下一代：Rubin 的 `sm_107` (#49387)、SM107 上的 NVLink 全归约路径 (#49647)、修复了 CUDA 拱门检测，在 SM121 上生成无内核构建 (#49904)。
* ROCm：启用 gfx1250 架构 (#46516)、AITER FP8 ViT 编码器注意力 (#49937)、Quark DeepSeek-V4 检查点的融合共享专家 (#48044)、Quark GLM-5.2 检查点推理修复 (#48886)、稀疏 MLA 热循环中消除的 DSv3.2 每次解码 FillFunctor 启动(#44527)、DSv4 的 B 预洗牌注意力 FP8 投影 (#46720)、启用 TML Inkling (#48841)、针对 MI325X 调整的 selected_state_update float16 配置 (#50006)、GPT-J 式 MRoPE 修复和优化 (#49906)、cudagraph 模式下的快速降低精度修复 (#46913)、缓存静态 e8m0 体重秤的 fp32 升级 (#47773)、用于 CPU KV 缓存负载的批量 DMA (#49843)、弹性 EP 缩放精度修复 (#47206)。
* XPU：QK Norm + RoPE 融合通道 (#49394)、带有 fp8_bmm 和加载时间尺度转置的 FP8 o_proj (#48334)、DeepSeek-V4 fusion_index_q SYCL 内核路径 (#45991)、批处理 MoE GEMM 的 TD 操作数加载 (#46340)、与 vllm_c 统一的 RMSNorm 内核（＃46981）。
* CPU：用于 Arm CPU 的 INT8 融合 MoE 内核 (#48637)、使用 oneDNN INT8 GEMM 进行 s390x 推理优化 (#50219)、针对推测解码优化的 GDN 转换路径 (#48577)、启用 Granite-4 (#47641)、用于 Power 的 FAST_EXP (#49571)、CPU 内核升级到最新版本(#50387)、macOS 构建修复(#49021、#50915)。

### 大规模服务和分布式
* DP+EP 外部 LB 部署的容错框架（简化）（#44428）。
* Elastic EP：异步准备（#47288）和非连续权重转移修复（#50641）。
* P/D 分解：用于混合 MLA+SSM 模型的 NIXL P/D (#49762)、用于混合模型的 NIXL 异构 P/D 块大小 (#49612)、MoRIIO 异构 TP<->DP 预填充/解码读取路由 (#46116)、PD 解码上的可选查找禁用 (#50498)、在解码聊天路径上重用的预填充令牌 ID (#48145)、去标记化流渲染 (#47301)，NixlPush 跳过 D->P 中的额外握手步骤 (#49345)。
* 修复：P/D 抢占竞争 (#50297)、KV 租赁期限重新基于工作时钟 (#50326)、NIXL 混合 MLA+mamba 异构 TP (#49297)、内部 LB 负载平衡 (#49204)。
* Mooncake：KV 加载路径上的矢量化 `prepare_value` (#48531)，在存储的边界上重新导出完整的外部命中 (#49481)。
* 编码器缓存连接器：`has_pending_push_work` (#49582)。
* Communicators：进程检查点生命周期挂钩，从 FlashInfer 开始（#46877）。

### 量化
* 新功能：用于压缩张量的 FP4 Qutlass 集成 (#43229)、ReLU2 NVFP4 的 CuTeDSL MoE (#49580)、INC 中的 MXFP8 线性支持 (#47514)、XPU 上的 AutoRound W4A16 MoE 和 MXFP4 线性/MoE (#47124)、TurboQuant 的 KV 量化模式 (#50533)、ModelOpt SM80 上的 FP8 仿真 (#50019)，`--linear-backend` 荣获 ModelOpt W4A16 (#50273)。
* 检查点：对 DeepSeek-V4 (#41276) 和 Kimi-K3 (#50500) 的压缩张量支持； `find_matched_target` 优先考虑融合名称匹配 (#49483)。
* MoE 重构：FusedMoE 重命名为 FusedMoEFactory (#44941)，MoeWNA16 迁移到 MK oracle 方案 (#44120)，Quark w8a8-int8 (#46765) 和 MXFP4 `aiter`/`emulation` 后端 (#49348、#48949) 迁移到内核抽象、CT WNA16 Marlin/MoE 方法合并 (#44570)，Quark W4A8 (INT4-FP8) MoE CI 覆盖范围 (#48050)。

### API 和前端
* Rust 前端：gRPC 控制平面具有引擎感知的健康报告 (#48992)、中止控制 RPC (#49255)、服务器和模型发现 (#49491) 以及 KV 事件源发现 (#50033)； `vllm-bench` 集成到 `vllm-rs` 和 `vllm` CLI (#48930) 中，并可选择加入 `vllm bench serve` 的 Rust 委派 (#50081)；零拷贝多模态张量切片（#48781）、辅助帧中的多模态张量（#49341）、`--limit-mm-per-prompt`（#49604）、普通文本分词器编码（#49992）。
* APIs：Cohere 聊天 v2 API 支持 (#47189)、Anthropic Messages API 中的 `cache_salt` (#49498)、GPT-OSS Harmony 的严格工具调用和约束解码 (#45560)、用于推理和工具调用的基于引擎的统一 Mistral 解析器 (#48947)、 `stream_interval` 公开为每个请求采样参数 (#49754)、翻译 API 的附加采样参数 (#45839)、MOSS-Transcribe-Diarize 的 `diarized_json` (#48543)、累积语音到文本块时间戳 (#41131)。
* 多模式：通过 CLI 选择 mm 哈希算法 (#49686)、可配置的 PyNvVideoCodec 解码器并发性 (#49753)、base64 数据 URL 中接受的 RFC 2397 参数 (#48973)。
* 用户体验和验证：使用 VLLMError 层次结构标准化请求错误处理 (#49665)、减少启动日志噪音 (#50590)、拒绝不兼容的嵌套运行时覆盖 (#49247)、改进的数据并行启动验证 (#49124)、DCP 拓扑验证 (#49777)、非数字 logprobs 的 400 而不是 500 (#49144)、裸 Inkling保留在 Python 和 Rust 解析器中的文本 (#50403)。
* 基准：`vllm bench serve` 中的探测请求 (#49611)。

### 依赖关系
* PyTorch 2.13.0、torchvision 0.28.0、Triton 3.7.1 (#48155)；用于 XPU (#48677) 和 CPU (#50412) 的火炬 2.13。
* Transformer 5.14.1 (#49223)、FlashInfer 0.6.15 (#48914) 然后 0.6.16.post3 (#50892)、AITER 0.1.16.post5 (#48683) 然后 0.1.19 (#49361)、NCCL 2.30.7 在中启用 DeepEPv2 vllm/vllm-openai 图像 (#45321)、tpu-inference v0.25.0 (#49431)、v0.26.0 (#50522)、Helion 1.4.0 (#50307)、NIXL 和 UCX 在 ROCm 上升级 (#49251)。
* 构建：vllm-flash-attn 已针对 torch-nightly (#49326)、ABI 稳定的 FA2 构建引脚 (#50474) 进行了与 C++20 兼容的提交。

### 弃用和删除
* 删除的模型：Plamo2 (#49729)、Ouro (#49786)。
* 删除了不再支持的 `max_num_partial_prefills` 和 `max_long_partial_prefills` 参数 (#49244)。

## 新贡献者

* @afriedri 在 https://github.com/vllm-project/vllm/pull/49621 中做出了第一个贡献
* @amd-sourjya 在 https://github.com/vllm-project/vllm/pull/48050 中做出了第一个贡献
* @andreatassi 在 https://github.com/vllm-project/vllm/pull/48879 中做出了第一个贡献
* @andrewbcohere 在 https://github.com/vllm-project/vllm/pull/47189 中做出了第一个贡献
* @avininjamay8 在 https://github.com/vllm-project/vllm/pull/47764 中做出了第一个贡献
* @bastefaniak 在 https://github.com/vllm-project/vllm/pull/49190 中做出了第一个贡献
* @boe20211 在 https://github.com/vllm-project/vllm/pull/49431 中做出了第一个贡献
* @bugkeep 在 https://github.com/vllm-project/vllm/pull/41357 中做出了第一个贡献
* @cagrikymk 在 https://github.com/vllm-project/vllm/pull/46720 中做出了第一个贡献
* @chun-wan 在 https://github.com/vllm-project/vllm/pull/44972 中做出了第一个贡献
* @ColinZ22 在 https://github.com/vllm-project/vllm/pull/48044 中做出了第一个贡献
* @dsocek 在 https://github.com/vllm-project/vllm/pull/47791 中做出了第一个贡献
* @euisuh 在 https://github.com/vllm-project/vllm/pull/49654 中做出了第一个贡献
* @evantakahashi 在 https://github.com/vllm-project/vllm/pull/47953 中做出了第一个贡献
* @FeathBow 在 https://github.com/vllm-project/vllm/pull/49111 中做出了第一个贡献
* @fxmarty 在 https://github.com/vllm-project/vllm/pull/49732 中做出了第一个贡献
* @hotTea123 在 https://github.com/vllm-project/vllm/pull/48218 中做出了他们的第一个贡献
* @Ibrahim2595 在 https://github.com/vllm-project/vllm/pull/45432 中做出了第一个贡献
* @jcotant-inferact 在 https://github.com/vllm-project/vllm/pull/49474 中做出了第一个贡献
* @jiacao-amd 在 https://github.com/vllm-project/vllm/pull/47773 中做出了第一个贡献
* @Johnny-Liou 在 https://github.com/vllm-project/vllm/pull/48018 中做出了第一个贡献
* @johnnyychiu 在 https://github.com/vllm-project/vllm/pull/45532 中做出了第一个贡献
* @jongukc 在 https://github.com/vllm-project/vllm/pull/49440 中做出了第一个贡献
* @kevglynn 在 https://github.com/vllm-project/vllm/pull/41602 中做出了第一个贡献
* @krishnateja95 在 https://github.com/vllm-project/vllm/pull/48876 中做出了第一个贡献
* @Lafunamor 在 https://github.com/vllm-project/vllm/pull/40289 中做出了第一个贡献
* @latent-9 在 https://github.com/vllm-project/vllm/pull/50491 中做出了第一个贡献
* @LG-0927 在 https://github.com/vllm-project/vllm/pull/50571 中做出了第一个贡献
* @liminfei-amd 在 https://github.com/vllm-project/vllm/pull/48739 中做出了第一个贡献
* @lkk12014402 在 https://github.com/vllm-project/vllm/pull/47124 中做出了第一个贡献
* @loulanyue 在 https://github.com/vllm-project/vllm/pull/50704 中做出了第一个贡献
* @markyangcc 在 https://github.com/vllm-project/vllm/pull/49021 中做出了第一个贡献
* @meiyeh123 在 https://github.com/vllm-project/vllm/pull/50522 中做出了他们的第一个贡献
* @Mi-Jiazhi 在 https://github.com/vllm-project/vllm/pull/49691 中做出了第一个贡献
* @microslaw 在 https://github.com/vllm-project/vllm/pull/47298 中做出了第一个贡献
* @molly-ting 在 https://github.com/vllm-project/vllm/pull/49660 中做出了第一个贡献
* @neweyes 在 https://github.com/vllm-project/vllm/pull/49659 中做出了第一个贡献
* @nickus 在 https://github.com/vllm-project/vllm/pull/48366 中做出了第一个贡献
* @nikhilkulkarni1755 在 https://github.com/vllm-project/vllm/pull/44239 中做出了第一个贡献
* @nvbfalk 在 https://github.com/vllm-project/vllm/pull/47750 中做出了第一个贡献
* @omkar-droid 在 https://github.com/vllm-project/vllm/pull/50688 中做出了第一个贡献
* @oops-oom 在 https://github.com/vllm-project/vllm/pull/49985 中做出了第一个贡献
* @ormandj 在 https://github.com/vllm-project/vllm/pull/48317 中做出了第一个贡献
* @PerkzZheng 在 https://github.com/vllm-project/vllm/pull/50210 中做出了第一个贡献
* @philippesic 在 https://github.com/vllm-project/vllm/pull/49114 中做出了第一个贡献
* @qtris123 在 https://github.com/vllm-project/vllm/pull/48796 中做出了第一个贡献
* @RyanClark2k 在 https://github.com/vllm-project/vllm/pull/48438 中做出了第一个贡献
* @samlaf 在 https://github.com/vllm-project/vllm/pull/50200 中做出了第一个贡献
* @ShuoleiWang 在 https://github.com/vllm-project/vllm/pull/49040 中做出了第一个贡献
* @siddhant-bharti 在 https://github.com/vllm-project/vllm/pull/50065 中做出了第一个贡献
* @Spycsh 在 https://github.com/vllm-project/vllm/pull/47871 中做出了第一个贡献
* @stacyroberts 在 https://github.com/vllm-project/vllm/pull/47207 中做出了第一个贡献
* @stefan-kaestle 在 https://github.com/vllm-project/vllm/pull/49177 中做出了第一个贡献
* @thomas-fahrner-parasail 在 https://github.com/vllm-project/vllm/pull/48973 中做出了第一个贡献
* @TobyB1702 在 https://github.com/vllm-project/vllm/pull/41131 中做出了第一个贡献
* @vecheruk-amd 在 https://github.com/vllm-project/vllm/pull/38293 中做出了第一个贡献
* @wangqia0309 在 https://github.com/vllm-project/vllm/pull/48563 中做出了第一个贡献
* @wkutak 在 https://github.com/vllm-project/vllm/pull/48952 中做出了第一个贡献
* @wskr00 在 https://github.com/vllm-project/vllm/pull/49073 中做出了第一个贡献
* @xuanyu-mistral 在 https://github.com/vllm-project/vllm/pull/44214 中做出了第一个贡献
* @yamt 在 https://github.com/vllm-project/vllm/pull/50547 中做出了第一个贡献
* @yuan-alex 在 https://github.com/vllm-project/vllm/pull/48917 中做出了第一个贡献
* @yudigege86 在 https://github.com/vllm-project/vllm/pull/50476 中做出了第一个贡献
* @zaristei 在 https://github.com/vllm-project/vllm/pull/49647 中做出了第一个贡献

## 贡献者
@AndreasKaratzas、@njhill、@hmellor、@mgoin、@BugenZhao、@yewentao256、@khluu、@taneem-ibrahim、@guan404ming、@NickLucche、@stefankoncarevic、@Change72、@zhenwei-intel、@reidliu41、@oonyshch、@Isotr0py、@MatthewBonanni、@andyxning、 @WoosukKwon、@tlrmchlsmth、@ZJY0516、@fxmarty-amd、@ivanium、@aoshen02、@xwu-intel、@connorcarpenter15、@lengrongfu、@bnellnm、@mikekg、@kylesayrs、@aarushjain29、@fadara01、@netanel-haber、@Etelis、 @LopezCastroRoberto、@jikunshang、@chaunceyjian、@umut-polat、@divakar-amd、@gau-nernst、@ColinZ22、@jcotant-inferact、@R3hankhan123、@chaojun-zhang、@jongukc、@zxd1997066、@bigPYJ1151、@yzong-rh、 @hickeyma、@yushangdi、@majunze2001、@Akashcodes732、@zufangzhu、@sagearc、@FeathBow、@xiaolong-intel、@coltonottley、@okorzh-amd、@sungsooha、@cleonard530、@microslaw、@vllm-agent、@LucasWilkinson、@eicherseiji、 @Fangzhou-Ai、@peizhang56、@ZeldaHuang、@noooop、@atalman、@wzhao18、@matteso1、@GirasoleY、@Dao007forever、@chaeminlim-mb、@music-dino、@amd-sourjya、@BadrBasowid、@Johnny-Liou、@Rohan138、@brandonpelfrey、 @harjothkhara、@tianmu-li、@fxmarty、@oops-oom、@TheEpicDolphin、@yma11、@itayalroy、@shen-shanshan、@JaredforReal、@wskr00、@janeyx99、@mayuyuace、@omkar-droid、@mganczarenko、@Spycsh、@hclsys、@EdalatiAli、 @wangqia0309、@tc-mb、@wkutak、@charlifu、@fynnsu、@xuanyu-mistral、@ormandj、@flutist、@simon-mo、@yuan-alex、@esmeetu、@stefan-kaestle、@bastefaniak、@markyangcc、@ilmarkov、@jjmiao1、@stecasta、@evantakahashi、 @ariG23498、@sfeng33、@rasmith、@gnovack、@boe20211、@bbrowning、@S1ro1、@davidjpyu、@nikhilkulkarni1755、@vllmellm、@yuyue0225sc、@euisuh、@zhou9402、@li-jinpeng、@hotTea123、@mgazz、 @thomas-fahrner-parasail、@elvircrn、@djramic、@adobrzyn、@qtris123、@harshaljanjani、@mosya415、@gcanlin、@fangyuchu、@anthonsu、@Palaiologos1453、@Achyuthan-S、@athrael-soju、@LiuLi1998、@liranschour、 @Alex-ai-future、@dsocek、@galletas1712、@nickus、@edwinlim0919、@walterbm、@thegoldenflow、@Zhenzhong1、@haoyangli0109、@tjtanaa、@ronensc、@neweyes、@liminfei-amd、@garrygale、@jesse996、@TobyB1702、 @puririshi98、@andreatassi、@avininjamay8、@frida-andersson、@nvbfalk、@varun-sundar-rabindranath、@mindungil、@ayush1399、@afriedri、@ShuoleiWang、@Liangliang-Ma、@xin3he、@liangel-02、@Ibrahim2595、@qianli Huang、 @jiacao-amd、@brian-dellabetta、@labAxiaoming、@johnnyychiu、@siddhant-bharti、@jdebache、@mrn3088、@kevglynn、@krishnateja95、@danielafrimi、@zqzten、@philippesic、@afierka-intel、@PerkzZheng、@omerpaz95、 @cinnamonica02、@fallintoplace、@yintong-lu、@chanh、@roikoren755、@zaristei、@bugkeep、@vecheruk-amd、@molly-ting、@lkk12014402、@LiuYinfeng01、@jperezdealgaba、@stacyroberts、@juliendenize、@hao-aaron、@cagrikymk、 @zou3519、@RyanClark2k、@samlaf、@jpvillam-amd、@mawong-amd、@vanshbhatia-amd、@rjrock、@majian4work、@woosebastian、@Mi-Jiazhi、@jeejeelee、@latent-9、@oguzhankir、@LG-0927、@ylangtsou、@meiyeh123、 @skavulya、@Lafunamor、@Amir-19、@andrewbcohere、@yudigege86、@aeon-x、@wentian-byte、@almogtavor、@hongxiayang、@loulanyue、@jasonlizhengjian、@chun-wan、@wjabbour、@yamt、@amitz-nv、@JianDan0212、@lkm2835、@lk-chen

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.27.0` · 📅 发布：2026-08-10 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.27.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
