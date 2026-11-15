---
title: "vllm v0.30.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.30.0"
version: "v0.30.0"
published: "2026-09-22"
type: "minor"
lang: "zh"
---

# vllm v0.30.0

#v0.30.0

## 亮点

此版本包含 315 名贡献者（104 名新贡献者）的 762 次提交！

* **新模型**：DeepSeek-V4.1-Flash（#56214、#56228、#56208），通过 SM100 上的 FlashMLA V4.1 记录将整个 KV 存储在 MXFP8 中（#56893）、DeepGEMM Mega-mHC（#56962）以及使用 Engram DP 分片的异步 Engram 预取（#56512）； DeepSeek-V4-Flash-Vision-Exp (#54566)，也在 ROCm (#55107) 和 LoRA (#55897) 上； GLM-5.3-Flash (#53906) 与 EPLB (#55119)； K2-地平线 (#55063)； Cohere 指南针 (#54774)；百灵 V3 VL (#55921)； Nanbeige4.2 通过 Transformers 后端 (#56071)；以及带有 AVX512/AMX 稀疏 MLA、索引器、mHC 和压缩器内核的 D​​eepSeek-V4 CPU 后端 (#55355)。
* **快速启动**：持久的每 GPU 权重缓存守护进程在 GPU 内存中保存量化后的 TP 分片权重，因此重新启动引擎可以使用 `--load-format ipc_cache` 将它们映射到 CUDA IPC，而不是从磁盘重新加载 (#54921)，现在涵盖 FP4 检查点 (#55465) 和多节点 TP (#55468)。
* **水印**：Gumbel-max 水印生成和检测，带有密钥 PRF、按请求选择退出和示例检测端点 (#54053)；双密钥 Gumbel-max 使其与推测解码兼容 (#56122)； Rust 前端转发每个请求的控件 (#56338)。
* **HiSparse**：用于稀疏 MLA 解码的主机驻留层，在 GPU 压力下将 KV 页面溢出到固定主机内存，并通过 `HiSparseConnector` (#53781) 启用每个请求的 GPU 热缓冲区，并使用 Prometheus 计数器 (#56061)、跨 TP 等级共享的主机缓存 (#56629) 以及从连接器推断的注意力配置来服务 top-k 未命中（＃57041）。
* **Model Runner V2**：急切模式下的双批次重叠 (#50945) 以及用于微批处理步骤的完整 CUDA 图 (#51700)； MTP (#46994) 和 EAGLE3/DFlash/DSpark (#50514) 管道并行下的推测解码；通过在线接受度估算器对每个选秀模型投机者进行自适应验证（#52228）； gc 在图形捕获期间冻结，在 H200 上将捕获时间从 12 秒减少到 2 秒，引擎初始化时间从 28.9 秒减少到 8.2 秒 (#54646)； `--return-sampling-mask` 在 GPU 上进行压缩，修复了大约 2 倍的 RL 步长回归 (#54901)。
* **Qwen3.8-Flash-Next 性能**：单独预填充和解码 QSA 索引器内核 (#54513)、融合 PLE 内核 (#54517)、FP8 索引器缓存 (#54890)、稀疏 GQA 中的填充索引跳跃 (#54873)、融合 PLE 残差和 QSA 输出门 (#55309)、UVA PLE 卸载和 Engram 张量并行性`--engram-config` (#54371) 和 torch.compile 从 NVIDIA 实现中删除，因此 FP8 适合单个 GB300 (#55272)。
* **Kimi K3 性能**：SM100 上的本机 CUDA AttnRes 默认值 (#54261)、KDA 混合批量收集/分散已删除（5.2-7.7% E2E 吞吐量，#56159）、分组 FP8 MLA 缓存插入（小批量时内核加速 4-6 倍，#55356）、跨步张量上的 DSV3 低延迟 GEMM （12-81% 内核加速，#54565）、重叠 TP8 KDA 投影（#54697）、FlashInfer KDA 内核（#55364）、具有部分前缀缓存和推测解码的内部前缀检查点（#53614）以及混合 Mamba 模型的对称 DCP 分解（#55531）。
* **大规模服务**：稀疏 MLA 模型上的 PCP+DCP (#56157)、具有单模块 MTP 和复制 DSpark 的 PCP (#56107) 和仅解码的 FULL CUDA 图 (#53867)、Elastic EP 在重新配置中重用 CUDA 图 (#54985)、针对无 NVLink 盒子的可选 FlashInfer PCIe IPC all-reduce (#53576)、DeepEP v2 异步完成重叠共享专家的合并 (#52781)、Mooncake Store 异构 TP 共享 (#53129)、KVCR 二级适配器 (#53624) 以及通过 NIXL (#47941) 和 Mooncake (#41567) 的编码器缓存共享。
* **量化**：通过 `quantization_config.targets` (#51285) 进行有针对性的在线量化，并在任何量化方法的部分预量化检查点上进行 (#51392)，具有 `nvfp4_fp8_ds_mla` KV 缓存的 W4A16 DSA (#51724)，FlashInfer CuTeDSL NVFP4 W4A16 默认超过 SM100/103 上的 Marlin (#53014)， torch 线性后端中的 NVFP4 (#53319)、按量化线性后端覆盖 (#51204)、CUDA 上的 AutoRound 2/3/5/6/7 位 (#52890) 以及用于 DSA 稀疏索引器的 DeepSelect top-k (#56464)。
* **重大更改**：横向扩展端点可以通过 `--enable-scale-out` 在普通 `vllm serve` 上选择加入，取代 `VLLM_ENABLE_SCALE_OUT_ENDPOINTS`（#54579、#55176）；删除了 GPTQ 激活顺序 (`g_idx`) (#54809)；删除了 0.29 已弃用的项目，包括 `VLLM_PREFIX_CACHE_RETENTION_INTERVAL` 和 `VLLM_MM_HASHER_ALGORITHM` 环境变量 (#55353)；已弃用 `all` Mamba 缓存模式 (#55041)；已弃用 `python -m vllm.entrypoints.grpc_server`，取而代之的是 `vllm serve --grpc` (#56746)； YaRN 与 Transformer 保持一致，因此供应商 YaRN 别名不再重新缩放 `max_model_len` (#56446)。

## 发布工件

### Python 车轮

|平台|安装 |
|---|---|
| PyPI（CUDA 13.0）| `pip install vllm` |
| PyPI（CUDA 13.0，uv）| `uv pip install vllm --torch-backend=auto` |
| ROCm | `pip install vllm --extra-index-url https://wheels.vllm.ai/rocm/0.30.0/rocm723` |
| XPU| `uv pip install vllm --extra-index-url https://wheels.vllm.ai/0.30.0/xpu --extra-index-url https://download.pytorch.org/whl/xpu --index-strategy unsafe-best-match` |

### Docker 图像

|平台| Docker 图片|
|---|---|
| CUDA 13.0（默认）| `docker pull vllm/vllm-openai:v0.30.0` |
| CUDA 12.9 | `docker pull vllm/vllm-openai:v0.30.0-cu129` |
| CUDA 13.0 + Ubuntu 24.04 | `docker pull vllm/vllm-openai:v0.30.0-ubuntu2404` |
| CUDA 12.9 + Ubuntu 24.04 | `docker pull vllm/vllm-openai:v0.30.0-cu129-ubuntu2404` |
| ROCm | `docker pull vllm/vllm-openai-rocm:v0.30.0` |
|中央处理器 | `docker pull vllm/vllm-openai-cpu:v0.30.0` |
| XPU| `docker pull vllm/vllm-openai-xpu:v0.30.0` |

### 其他文物

本页底部的 **资产** 部分提供了预构建的发布工件，包括：
- 源代码分发 tarball
- 适用于 x86_64 和 arm64 的 CUDA 12.9 Python 轮子
- 适用于 x86_64 和 arm64 的 CUDA 13.0 Python 轮子
- 适用于 x86_64、arm64 和 macOS 的 CPU Python 轮子
- 适用于 x86_64 的 XPU Python 轮

## 模型支持
* **新模型**：DeepSeek-V4.1-Flash (#56214、#56228、#56208)、具有 ROCm 支持 (#55107) 和 LoRA (#55897) 的 DeepSeek-V4-Flash-Vision-Exp (#54566)、GLM-5.3-Flash (#53906)、K2-Horizon 及其推理和工具解析器 (#55063)、Cohere Compass (#54774、#55949)、Bailing V3 VL with MTP (#55921)、通过 Transformers 后端的 Nanbeige4.2 (#56071) 和 DeepSeek-V4 CPU 后端 (#55355)。
* **DeepSeek-V4.1-Flash**：MXFP8 中的整个 KV 通过 SM100 上的 FlashMLA V4.1 记录 (#56893)、来自 DeepGEMM 分支的 Mega-mHC (#56962)、折叠到延迟预投影中的 mHC 后块 (#56633)、Triton 融合的输入元数据准备 (#56562)、用于 CPU 卸载的 Engram 查找的异步预取和Engram DP 分片 (#56512)、DSpark 草稿状态在 SP 全收集之前崩溃 (#56903)、DSpark 绘图器不再继承未初始化的 EPLB 状态 (#56387)、严格工具参数的 XGrammar V4.1 架构约束 (#56408)、响应文本部分 (#56299) 以及范围仅限于 Vision-Exp 检查点的图像哨兵填充（＃56554）。
* **DeepSeek V4**：稀疏 SWA 层上没有 YaRN 的普通 RoPE (#54815)、使用 FlashMLA 解析为 `fp8_ds_mla` (#45091)、预填充稀疏索引工作区哨兵种子 (#55299)、反量化收集按行大小的网格 (#55061)、融合 MLA 尾声中的可选 Q 范数和group_size=32 打包 FP8 Quant (#56215)、从复合模型的文本配置中读取稀疏设置 (#56160)、MegaMoE 启动而无需修复 EP (#55914) 以及 HY V4 的 Triton iHC 前/后回退 (#55059)。
* **GLM-5.3-Flash**：EPLB 支持（#55119），用于 KDA 分块预填充的 FlashKDA（1.7-3.8x 比 Triton 块路径更快，#55737），NoPE（256, 0, 256）布局的密集和屏蔽 MHA 稀疏预填充（#55738），解码热路径清理，删除每层副本和重复的路由器 GEMM (#55736)，`glm5next` NVIDIA 子树现在封装在轮子中(#55214)。
* **Qwen3.8-Flash-Next**：使用 `VLLM_SPARSE_INDEXER_MAX_LOGITS_MB` 单独预填充和解码 QSA 索引器内核 (#54513)、融合 PLE 内核和合并 K/V 投影 (#54517)、稀疏 GQA 跳过填充索引 (#54873)、FP8 索引器缓存 (#54890)、融合 PLE 残差和 QSA 输出门 (#55309)、UVA通过 `--engram-config` 实现 PLE 卸载和 Engram 张量并行性 (#54371)、torch.compile 从 NVIDIA 路径中删除 (#55272)、紧凑索引器 logits 工作区 (#54915)、HC 组合范数重用于 MTP 输入 (#54687)、PLE MTP 元数据传输 (#55054)、Hopper LL-GEMM 调整表 (#54560)、 B200 FP8 MoE 调整 (#55890)，并修复 FP8 PLE 权重尺度 (#54722、#54882) 和融合 PLE 转换步幅 (#55375)。
* **Kimi K3**：SM100 上的本机 CUDA AttnRes 默认值 (#54261)、ll_bf16 路由器权重预取 (#53524)、重叠 TP8 KDA 投影 (#54697)、跨步 DSV3 GEMM (#54565)、MLA 解码尾声延迟 (#54896)、NVFP4 in_proj 对齐路由到 DeepGEMM (#55242)、没有聚集/分散的混合批次 KDA (#56159)、分组 FP8 MLA 缓存插入 (#55356)、FlashInfer KDA 内核 (#55364)、FlashKDA bf16 检查点状态 (#56485) 和稳定性提升 (#54859)、FlashInfer CuTeDSL MoE 后端上的 SiTU (#54606)、内部具有部分前缀缓存和规范解码的前缀检查点 (#53614)，并修复了 RecoverSSM 启动 (#54634、#55774)、GDN 元数据 (#54636)、混合批次掩码 (#54781)、检查点索引 (#55747、#56794)、KDA 非法内存访问 (#55924)、交错权重流(#53379)、NVFP4 MoE 转换 OOM (#55407) 以及 Hopper 上的 KDA 投影重叠 (#55426)。
* **Transformers 后端**：通过附加的融合器和 vLLM 层发现注意力 (#54941)、通用合并列线性融合 (#55301)、Gemma4 的 QKV 融合器 (#55690)、替换所有词汇嵌入，包括 Gemma 3n/4 每层表 (#54760、#55083)，并应用注意力接收器（＃52156）。
* **模型的推测解码**：用于 Sarvam MLA 的 EAGLE3 (#53052)、带有单独的、可能量化的 lm_head 的 Nemotron-H MTP (#54574)、NVFP4 DSpark 收集量化马尔可夫头的 top-k 投影 (#55713)、Qwen3.5/3.6 多模态 MTP 从文本配置中解析 `n_predict` (#55369)、Qwen3 DSpark 填充词汇草稿 (#55133) 以及 GLM-OCR MTP 权重加载 (#49869) 和 CUDA 图表下的位置屏蔽 (#56447)。
* **多模态**：torchcodec 音频解码和 `--media-io-kwargs` 中的可选 `audio_backend` (#51826) 具有自动解码功能，保持声音文件优先 (#55642)，torchaudio 作为默认重采样器 (#52598)，多模态哈希中的 `media_io_kwargs` (#54241)，按模态限定范围的缓存哈希 kwargs (#54918)，空视频 URL具有多模态 UUID (#54220)、具有 UUID 的缓存音频输入 (#56310)、MiniCPM-V 2.5/2.6/4.0 的编码器 CUDA 图 (#42785)、具有 `FULL_DECODE_ONLY` 图的 Voxtral Realtime (#51167)、用于多模态的 Triton/FlashInfer 复合注意力前缀 (#56305)、Gemma 4 多模式提示的修剪滑动窗口图块（高达 3-4x E2E，#53147）、BLIP-2 Q-Former 的 SDPA (#55285)、baddbmm Conformer 分数 (#55062)、融合 DeepEncoder 相对偏差 (#55629)、Gemma3n 稀疏 GELU Triton 内核(#48498)，并且 Qwen2.5-Omni 中没有重复的文本嵌入 (#55415)。
* **正确性**：Gemma 4 / Gemma 3n 微调检查点，共享层上没有 KV 投影（#54917，#55864），Gemma4 视频预处理没有图像 kwargs（#56652）和统一音频分析（#56721），MiniCPM-V 4.6 加载（#49417）和视频嵌入(#54633)、InternVL 视频解析器 (#55779)、Nano-Nemotron 预计算嵌入 (#56398)、OpenPangu 多模式合并 (#55941) 和睡眠模式 (#53696)、CPU 和 PP 下的 Qwen3-VL 和 Cosmos3-Edge (#53699、#43272)、不带分词器的 Qwen VL 处理器(#54886)、Molmo2 fps 保护 (#55893)、CohereASR 音频令牌估计 (#53829)、用于多模态模型的 `LLM.chat()` 中的双 BOS (#55288)、解析为一个视频的解码帧列表 (#55326)、在虚拟视频分析中交换 H/W (#56385)、base64 视频验证(#54323)、Sentence Transformers 5.4+ 配置 (#54533)、ColQwen3.5 pooler 投影仪 (#54847)、为 StableLM (#54969) 和 Sarvam MLA (#55817) 启用 torch.compile，以及 Nemotron Latent-MoE 在 TP>1 时跳过冗余的 all-reduce（大约 13% 解码获胜， ＃52301）。
* **LoRA**：MoE 专家打包中的 rsLoRA 缩放 (#55548)、适配器不应用权重时的日志行 (#55310) 以及路径中带有 `=` 的 `--lora-modules name=path` (#53353)。

## 引擎核心
* **Model Runner V2**：处于 Eager 模式 (#50945) 的 DBO 和 FULL CUDA 图 (#51700)、MTP (#46994) 和 EAGLE3 样式草稿 (#50514) 在管道并行性下、所有草稿模型投机者的自适应验证 (#52228)、捕获期间冻结的 gc (#54646)、GPU 压缩采样掩码(#54901)、UVA 支持的 `apply_write` (#55819)、快速预填充支持 (#56145)、跳过所有投机者统一解码的 DP 同步 (#54856)、解码器池中的提示嵌入 (#56639)、非最终 PP 等级上的池化后处理 (#56666)、在图形捕获之前预热内核(#55341)、`CUDAGraphStat` (#52358)、Proton CUDA 图属性 (#51084)、没有固定内存的平台，如 WSL (#56908)、草稿 `moe_backend` (#54788) 和 `attention_backend` (#54826) 覆盖、批量分区后初始化的 DCP 元数据 (#55212) 以及PP 草稿广播中的 `record_stream` 修复 (#55745)。 MRV2 特定的 Triton JIT 预热迁移已恢复 (#56654)。
* **推测性解码**：选择加入 `disable_eagle_block_drop` (#53388)、`FLASHINFER_MLA_SPARSE_DSV4` 上的自适应验证 (#52724) 并推迟到内核预热后 (#55455)、全词汇 EAGLE3 起草者跳过词汇重新映射 (#53458)、DSpark 保留目标 DCP 配置 (#55472)、DFlash 起草者放弃FlashAttention 的 AOT 调度 (#54374)、从草稿元数据中排除 DP 令牌填充 (#55458、#56181)、避免 PP 草稿的 fastsafetensors 死锁 (#54416)、缓存在 EAGLE 恢复位置的 Mamba 状态 (#53945) 并保留填充的提示尾部 (#55178)、在 P/D 中填充的恢复请求 (#55126)、和预热设备选择 (#55245)。
* **前缀缓存和调度**：两个重放边界都保留，因此 EAGLE 重新发送块对齐提示仍然会命中 (#54713)，零进度抢占级联因延迟 KV 释放而停止 (#49675)，SWA 层采用主块大小以避免膨胀 KV 块 LCM (#53007)，对齐模式 Mamba 状态在空间隙中退休 (#55450)， `all` Mamba 缓存模式已弃用，带有 MRV1 回退 (#55041) 和 `vllm:request_num_preemptions` 直方图 (#49984)。
* **Kernels**：Mamba2 的 FlashInfer ReplaySSM 后端 (#52506)、通过 `--attention-backend B12X_ATTN` 对 SM120/SM121 进行 B12X 因果分页注意力 (#52017)、SM90 上的 FlashInfer XQA 解码 (#50439)、带有 `--sparse-indexer-topk-backend` 的 DeepSelect top-k (#56464)、BF16x3 路由器 GEMM FP32 路由器模型的 SM100 默认设置 (#55899)、小批量的分排 Triton top-p (#54651)、Llama 的手动 `ActivationQuantFusionPass` 生成器 (#51415)、融合的 add-RMSNorm + NVFP4 (#51925)、独立于 KV 页面大小的前缀预填充平铺 (#54194)、FlashInfer GDN 预填充SM12x (#55715)、SM110 的融合 GDN MTP 解码 (#53835)、填充布局的屏蔽 MoE 激活 (#51217)、协作 `batched_moe_align_block_size` (#53280)、`fusedQKNormRopeKernel` 中的 PDL (#55755) 以及融合 q/kv RMSNorm 中的权重预取 (#55020)、XD-RoPE 折叠到 M-RoPE (#56078)，并且 FlashAttention 引脚与上游同步 (#54819)。
* **启动和预热**：渲染器预热与引擎核心初始化重叠 (#54557)，FlashInfer 自动调整不再在每次源更改时重新运行 (#54794)，Qwen3.5/Qwen3-Next Triton 内核 (#54797) 和 GDN 门控 RMSNorm (#54251) 在启动时预热，Gemma 4 de-JITified (#55768)， DeepSeek V4 和共享注意力、采样、DFlash 和 mHC 内核迁移到 JIT 预热注册表 (#50175、#53564、#53565、#50176、#53566、#56323、#50178)，并具有并行 mHC 预规范编译 (#56683)，FlashInfer 延迟 MoE 解码内核在捕获前自动调整(#55377)，并隔离补充 BF16 自动调谐 (#57285)。
* **快速启动**：具有 `--load-format ipc_cache` (#54921)、FP4 检查点 (#55465)、多节点 TP (#55468)、GPU UUID 套接字文件夹 (#56669)、per-client IPC 张量导出的权重缓存守护进程，因此复制模式 client 无法释放零复制权重(#56472)，以及非 CUDA/ROCm 平台上的明显错误 (#56010)。
* **水印**：Gumbel-max 水印生成和检测 (#54053) 和双密钥 Gumbel-max，用于使用 `allow_target_only_watermarking` 和上下文重复数据删除进行推测解码 (#56122)。
* **睡眠和 RL**：在睡眠模式下释放 NCCL 通信器内存 (#51485)，DP 状态在波的第一步同步，因此暂停和睡眠停止燃烧每个等级 32 个虚拟前锋 (#52957)，为无火炬训练器预共享 `ncclUniqueId` 交会点 (#53784)，修复修复后陈旧的 HPC QK-norm 权重(#56706)，以及 GPU `BlockStored` 事件上的 `session_id` (#51381)。
* **鲁棒性**：注意实现必须显式声明 DCP 支持 (#55780)，不可用的分段 CUDA 图会引发而不是产生乱码输出 (#54782)，未编译的模型回退到 `FULL_DECODE_ONLY` 图 (#55095)，MRV1 可破坏图范围仅限于分段路径 (#56312)，同步检查涵盖分页异步副本(#53491) 和 torch.compile (#56904)，固定更多 H2D 副本 (#54660、#55202、#56138)、在没有设备同步的情况下构建的 GDN 捕获元数据 (#55404)、实现专用流时延续的排队工作 (#56382)、避免 FlexAttention 重新编译 (#55888)、持久的 top-k 回落低共享内存 GPU (#54110)、通过 TP 缩放隐藏状态提取的 KV 页面大小 (#50894)、SM90 稀疏 MLA 混合批次中的越界访问 (#56969)、稀疏 MLA 分段捕获崩溃 (#56825)、TRT-LLM 不规则预填充回归 (#55499)、MoE 融合和 int32 溢出(#50220)、奇数行每个令牌组量化 cliff (#56478)、虚拟加载重新初始化 (#56682、#56688)、`warning_once` 保留 LLM 实例 (#54098)、`python -O` 下的 DSpark 缓存组功能 (#55234)、稀疏 MLA DCP 稳定GLM PCP 配置 (#55879)、DeepGEMM FP8 预热覆盖 (#56452)、在没有 Triton 的情况下跳过 Triton 自动调谐检查 (#56676)、编码器 CUDA 图表下的 `mm_device_do_normalize` (#55370)、VidCom2 帧预算读取一次 (#55331)、CUDA 分析器启动修复 (#55237)、FlashInfer all-reduce 工作区失败记录为错误 (#55127)，以及后端中立的 KV 缓存和 MFU 日志行 (#55650)。

## 硬件与性能
* **NVIDIA**：FlashInfer PCIe IPC 全归约 (#53576)、DeepGEMM 固定到带有 SM120 和 SM90 分页 MQA 端口的 vLLM 分支 2.8.0 (#56876)、公共 CUDA 13.4 Rubin 构建路径 (#54640、#56545)、SM12x 块式 FP8 CTA 光栅GB10/DGX Spark 的 swizzle (#55180)、SM120/121 上首选 W4A4 NVFP4 (#55170)、H20 block-FP8 MoE 调整 (+21%, #54668)、Qwen3.5-122B TP2 的 A100 PCIe 融合 MoE 配置 (#55511)、ReLU2 与静态融合Nemotron-H 的 FP8 Quant (#53793) 和 NVFP4 KV 缓存 FMHA 加速 (#55031)。
* **AMD ROCm**：TheRock 基础升级至 ROCm 10.0 (#55246)，带有夜间 TheRock 图像 (#55014)、AITER 0.1.21.post2 (#52826、#55968)、DP 组上的 AITER 自定义 AG/RS（约 3% TPOT、#48247）、多流性能和 rocprofiler 修复（#55099、#56098）、bpreshuffled 块扩展 FP8 GEMM（DSv3 上 +4-8% QPS，#51692）、gfx950 上的低 M FP32 路由器 GEMM（#54845）、DeepSeek V4 FHMoE 共享专家融合（#53161）、CSA 多流重叠（#51794）、AITER用于大型稀疏预填充的 OPUS (#54855)、DSv4.1 mHC 通过 AITER (#56503、#56513)、MXFP8 dequant-once (#56560)、strided DSA 解码掩码 (#56628) 和 K=512 top-k 调整 (#56743)、MiniMax-M3 索引器和 top-k 工作 (#54682) #52664、#55235、#56170) 融合 allreduce+GemmaRMSNorm (#54787)、Kimi-K3 融合 KDA 预填充重新登陆 (#54038) 和融合 MLA 规范 (#52494)、GLM-5.2 保留在 MRV1 上 (#53155)、GLM-5.3-Flash MTP 通过参差不齐的稀疏 MLA (#55239)、W4A16 打包零点（Gemma 4 AWQ 上的 -26% TPOT，#54965）、Triton W4A16 GEMM 作为自定义操作（#51453）、拆分 AITER CK/Triton MXFP4 后端（#50622、#54773）、RDNA3 W4A16 MoE oracle 路径 (#55522)、Quark 每块 FP8 MoE (#52263)、带有 `ROCM_AITER_UNIFIED_ATTN` 的 KV 连接器 (#53695)、MoRI-IO SWA+HMA (#53721)、AITER 稀疏 MLA 中的注意力池 (#54404)、AITER MLA 解码中的非因果 DSpark 草案 (#55966)、共享 KV 预填充(#55887)、V-cache 填充屏蔽 (#53856)、弹性 EP 死锁 (#56610)、分析器修复 (#54171、#56190)、DeepSeek-V4.1 自动启用的易损坏的 CUDA 图 (#56349)、为 DeepSeek-V4 删除的 AITER 分页 MQA 输出保护 (#55808)、DSV4 索引器删除了收集冷编译改动 (#56153)、在不支持的情况下跳过 PDL JIT 预热 (#56035)、Kimi-K3 融合预填充 state_indices 崩溃 (#56526)、用于分片 RDT 的 Ray NIXL 代理 (#56687)、具有不可分割头的 Qwen3-Omni 音频编码器 TP (#45900)、Quark MXFP4 Qwen3.8-Flash-Next 分享了有关 gfx950 (#55213)、AITER 预洗牌 FP8 块级内核 (#56433)、`requires_grad=False` 线性偏差 (#56161)、更清晰的不受支持的 KV dtype 错误 (#55236)、ROCm 图像中的 Mooncake (#55002) 和 AINIC 引脚的专家信息（＃54112，＃56459）。
* **Intel XPU**：在 SYCL 内核上激活 CustomOps (#53734)、批量不变 matmul 和线性内核 (#49209)、融合 GemmaRMSNorm (#53678)、`fused_input_norm` (#52945) 和融合 `grouped_topk` (#53580)、LoRA for DeepSeek V4 (#53689)、DP 外部LB 设备分配 (#53037)、triton-xpu 3.8.0 shim (#56014)、auto-round-lib 0.15.0 (#54515) 以及 FalconH1 PP (#55913)、Ernie4.5-VL RoPE (#55942)、门控 RMSNorm 操作 (#54968)、Qwen DFlash 上下文的修复键 (#56431)、INC 定量选择 (#47237) 和 `moe_wna16` 加载 (#52651)。
* **CPU**：DeepSeek-V4 后端 (#55355)、Diamond Rapids 的本机 AMX-FP8 关注度（Docker 基础已移至 Ubuntu 25.04 和 GCC 15）（#49410）、Arm 上更快的 LM 头（在 Llama-3.1-8B W8A8 上约为 6%，#55352）， DeepSeek-R1 FP8 MLA + MoE 正确性 (#56773)、按输入形状分组的分析器表 (#56016)、专用 Zen5 映像 (#50314) 以及 Docker Hub 上的夜间 CPU 映像 (#55163)。

## 大规模服务
* **上下文并行性**：稀疏 MLA 模型上的 PCP+DCP (#56157)、具有单模块 MTP 和复制 DSpark 的 PCP (#56107)、PCP 仅解码 FULL CUDA 图 (#53867)、CP interleave > 1 处的 FlashMLASparse MTP (#56722)、混合 Mamba 模型的对称 DCP 分解 (#55531)、 DCP 空分片 LSE 掩码融合到 A2A 包内核中 (#54889)，DCP 预填充密钥在非所有者等级上实现 (#54908)，DCP 索引器交错保护被删除 (#55802) 并在 PCP 收集中受到尊重 (#56715)，PCP 生产者分片作为 NIXL 传输等级 (#56645)，复制 PCP 等级报告完成(#53903)、DCP 交错调整范围为 NixlConnector (#54803)、PCP 计入多节点世界大小 (#55111)、PCP-DP 验证移至 GPU 管理器 (#54523) 以及 DP=1 时的单侧 EP (#54016)。
* **弹性 EP 和 MoE 通信**：跨重新配置重用 CUDA 图 (#54985)、仅路由到缩减时的幸存引擎 (#55772)、DeepEP v2 异步最终确定 (#52781)、FlashInfer PCIe IPC all-reduce (#53576、#54869)、批量 CUTLASS 工作区大小调整 (#55579) 以及PP 永远不会从采样令牌广播中丢弃解码请求 (#54436)。
* **KV 连接器**：Mooncake Store 异构 TP 共享 (#53129)、异构 PP 完成 (#56033)、复制 GQA 头 (#52516)、物理块传输长度 (#54272)、生产者部分 Mamba 尾部 (#52832)、混合模型完成时间保存 (#54643)、向调度程序报告失败的远程加载 (#50984)、QSA 环组排除（#55027）； NIXL 每区域传输几何（#53780）、int32 索引（#51952）、多句柄竞赛（#56104）、传输中无驱逐（#54689）、报告已完成的完整前缀命中（#56640）、仅通知请求（#57570）和双重清理（#54518）； DecodeBench HMA、DCP、前缀和循环缓冲区修复（#54647、#54679、#54878、#54879）；针对每个计划请求（#54853）、混合 KV 负载故障（#50388）和 `lmcache_mp_connector` 状态转换受保护（#47505）解析的连接器块表； HiSparse 每层偏移 (#57027)、P/D 区域映射拉动 (#57077) 和 NIXL 全块导入 (#57049)； NixlPush 远程代理读取受保护 (#56317)。
* **KV 卸载**：KVCR 辅助层适配器 (#53624)、P2P 层 `unbound_store_timeout_s` 和延迟获取拒绝 (#53453)、OffloadingConnector 保留间隔 (#51886) 和 MTP/EAGLE 下的卸载命中 (#52771)、SimpleCPUOffload 细粒度混合前缀命中 (#54736)、急切注册和最终刷新(#53532)、`BlockStored` 元数据 (#54325)、DSA 模型的混合页面大小 (#54756)、前缀缓存绕过 (#54998)、无前进步骤存储 (#56621)； UniformTypeKVCacheSpecs 可移植性 (#51690) 和 DCP 扩展 (#50883)；并修复了异步查找（#54872、#55075、#55823）、SWA 可访问性和覆盖范围（#54362、#55712、#56486）、最终令牌插槽（#54288）、超大优惠（#54759）、ARC 回退（#55461）、磁盘对齐（#55424）、DiskBackend 缓冲区竞争(#51667)、卸载键排序 (#52923)、预取槽所有权 (#54975)、负载边界 (#52807) 和分层关闭 (#52290)。
* **编码器缓存和 EPD**：P2P NIXL + CPU EC 连接器 (#47941)、ECMOoncakeConnector (#41567)、在 EC/KV 消费者上自动启用的嵌入输入 (#56379)、仅用于编码器实例的 GPU NVDEC (#53675)、来自渲染的轻量级多模式元数据 (#54659) 作为 JSON 数组(#56090)、减少代理序列化开销 (#56657)、保留媒体选项和 UUID (#56786、#56432)、每项 EC 检查 (#56070)、ECCPUWorker 后端扩展点 (#54033) 以及对旧内核的修复 (#53190)、远程编码失败 (#55290) 和 TP>1 负载设备（＃40416）。

## 量化
* **新功能**：有针对性的在线量化 (#51285) 和部分预量化检查点的在线量化 (#51392)、W4A16 DSA (#51724、#55538)、FlashInfer CuTeDSL NVFP4 W4A16 (#53014)、NVFP4 torch 后端 (#53319)、`linear_backend_per_quant` (#51204)、AutoRound 2/3/5/6/7 位 (#52890)、带有 SwiGLU 钳位的 TRT-LLM FP8 块级 MoE (#55069) 以及 ROCm 上的 Quark 每块 FP8 MoE (#52263)。
* **重构**：`QuantKey` 上的 Quark 调度 (#52958) 和 ModelOpt 线性方法统一为一种 QuantKey 驱动的方法 (#49381)。
* **修复**：NVFP4 填充在内核中初始化 (#53568)、使用 NaN 哨兵检测到卸载的 NVFP4 尺度 (#52501)、NVFP4 融合 SiLU+mul 尺度 (#55643)、Quark 每块尺度注册为 `weight_scale` (#54770)、GPT-OSS FP8 MoE with Quark (#54824)、Quark 模型的 FSE 检测 (#54573)、DSv4 MXFP4 后端别名选择 (#53586)、在压缩张量 WNA16 MoE 上取消设置 `group_size` (#53163)、ModelOpt 混合检查点中的块 FP8 MTP (#55513) 以及在 ROCm 上保留用于 RL 更新的未量化 MoE 权重存储（＃46009）。

## API 和前端
* **新端点和选项**：无状态 `/v1/responses/render` (#50195)、`--enable-scale-out` (#54579、#55176)、`count_reasoning_tokens` 后面的横向扩展端点，因此使用报告 `reasoning_tokens` (#54982)、来自 `/inference/v1/generate` (#53187)、`vllm:request_num_preemptions` (#49984) 的提示元数据、用于 SWA 和混合层的 MFU/MBU (#55624)、合并的 Prometheus 存储桶默认值 (#48866)、站点包推理和工具解析器插件 (#45241) 以及跨 API 服务器进程共享的 `max_num_queued_reqs` (#54746)。
* **结构化输出和解析器**：XGrammar `patternProperties`/`propertyNames`/`unevaluatedProperties` (#42904)，使用从语法派生的 `is_reasoning_end` 消除了全历史推理扫描 (#55223) (#56200)，无效的结构化输出请求不再停止引擎 (#51450)，统一的 Cohere 命令解析器(#56392)、MCP SDK 2.x 模式 (#53870)、不完整的工具调用标记一致删除 (#47562)、不带包装器的 DSML 工具调用 (#55954)、拼写错误的包装器 (#56141) 和隐式参数关闭 (#54838)、Gemma4 格式错误的开启器 (#53444)、Seed-OSS转弯边界 (#54264)、具有结构化输出的 Step-3.5 (#53174)、在无头配置之前加载的推理解析器插件 (#53124) 以及删除 `guided_*` 字段的警告 (#54285)。
* **OpenAI、Anthropic 和 Cohere 兼容性**：不支持的响应输入项返回 400 (#55974)、`browser.find` 操作类型 (#55305)、恢复响应验证边界 (#55761)、验证错误迁移到 `VLLMValidationError` (#50254、#50257、#55701、#55735)，不受支持`reasoning_effort` 作为 client 错误 (#54022)、通过宏参数检测到的内容格式 (#53824)、`message_delta` 中的人类 `stop_sequence` (#55325)、Cohere 优先级有界 (#56146)、翻译拒绝字符串文件 (#55618)、无令牌聊天和音频流被拒绝 (#54708)、波束搜索尊重`skip_special_tokens` (#56211) 和中止 (#56249)、删除嵌套取消处理程序 (#55602、#57024)、验证扩展整数 (#55606)、验证路由专家提示偏移 (#56844)、避免 HF 分词器使用 MistralCommonBackend (#54192)、打包聊天模板回退(#53762)，并恢复内容格式警告(#54622)。
* **渲染和池化**：`assistant_tokens_mask` (#54539) 和令牌偏移量 (#54692) 与截断的提示保持一致，`skip_decoder_start_token` 受到尊重 (#54799)，渲染器预热有界 (#55448)，池化响应中的 LoRA 适配器名称 (#56004)，`max_embed_len` 用于分块嵌入(#55551)、主体 `request_id` 荣誉 (#55665)、评分的实际输入使用情况 (#56573)、STEP 代币池 (#55307)、离线 Jina 代币限制 (#56415) 以及针对没有聊天模板的 Qwen3 重新排序器的警告 (#56017)。
* **Rust 前端**：渲染服务器的 TLS (#54999)、`--lora-modules` (#54837)、HTTP RL 权重同步 (#56567)、HF 修订、离线模式和缓存目录 (#56386)、`{% generation %}` 聊天模板块 (#56378)、crates.io 上的 `vllm-proto` 箱(#56365)、使用中的 `reasoning_tokens` (#54883) 基于令牌属性文本 (#52910、#54884)、Mooncake/NIXL 连接器指标 (#52755) 和 `vllm:iteration_tokens_total` (#56990)、gRPC 预处理的多模式功能 (#55047)、远程预填充多模式元数据(#54814) 和引擎错误表现为 INTERNAL (#56405)、Qwen4-exp 多模式 (#54813)、用于渲染的可选 `--max-model-len` (#55328)、删除每个请求词汇计数 (#54449)、每次更新合并的解码块 (#55012)、有界递归解析器 (#54303)、tekken 0.2.0 (#53056)、严格的空白框架 (#55417)、一致的解析器分辨率 (#56018)、拒绝空结构化输出值 (#54821)、选定的令牌 logprobs (#56406)、跳过未定义的令牌 id (#55240)、DeepSeek 渲染器修复 (#53281、#54854、 #56593、#56260、#56366）和 `vllm bench serve` 中的 HF ShareGPT 多轮数据集（#51104、#56915）。
* **CLI 和基准**：`vllm bench serve` 考虑了 client 队列时间 (#54136)，具有一致的流 TTFT/E2E 会计 (#55508)，非正 `--max-concurrency` 被拒绝 (#54887)，`mm-processor` 崩溃修复 (#56300)，测量的完整池响应 (#56760)， `vllm chat`/`complete` 中明确的空参数和零参数 (#55710)、`vllm launch render` 关闭挂起修复 (#54913)、双 `/stop_profile` 崩溃修复 (#51678) 以及剩余的非 OpenAI 内容已移出 openai 文件夹 (#56369)。

## 安全
* 验证错误响应主体有界，关闭大约 5,300 倍的响应放大 (#54684)； client 提供的稀疏嵌入在致密化之前有界 (#54632)。
* GLMGA (#54935) 和 Qwen-VL (#56729) 后端的请求控制视频采样受到限制。
* `cache_salt` 在到达 LMCache 之前经过验证，因此一个请求无法关闭引擎 (#51444)；在引擎切换之前验证横向扩展多模式功能（#51898）；后期交互查询缓存由服务器生成的 id（而不是 `X-Request-Id`）作为键控（#51445）。
* 从基准日志中编辑的凭证 (#56662)； Rust 前端 HTTP 方法标签标准化，以防止无限制的 Prometheus 系列 (#56058)。

## 依赖关系
* CUTLASS 4.7.1 (#54190) 和 CUTLASS DSL 4.7 (#54927)、Transformers 5.16.1 (#53905)、tpu 推理 v0.29.0 (#56388)、`openai >= 2.25.0` (#49104)、带 httpx 的 `huggingface_hub >= 1.31.0`通过它导入（#56460）。
* DeepGEMM 固定到 vllm-project 分支 2.8.0 (#56876)，并修复了 CUDA 12.9 发布版本 (#57554)； FlashMLA V4.1 记录引脚 (#56893)； FlashKDA 碰撞（#54859、#56485）； FlashAttention 与上游同步 (#54819)；为 FlashMLA 目标定义的 `_USE_MATH_DEFINES` (#54007)。
* 公共 CUDA 13.4 Rubin 构建路径和依赖引脚（#54640、#56545）。
* ROCm：TheRock 基于 ROCm 10.0 (#55246)、AITER 0.1.21.post2 (#52826、#55968)、来自公共轮子的 Mooncake (#55002)、固定到快照的 AINIC libion​​ic 54.0-187-1 (#54112、#56459)。
* XPU：triton-xpu 3.8.0 垫片 (#56014)、auto-round-lib 0.15.0 (#54515)。
* CPU：Docker 基于 Ubuntu 25.04，带有 GCC 15 (#49410)、Zen5 映像 (#50314)、夜间 CPU 映像 (#55163)。已删除过时的 TPU Docker 文件 (#55376)。

## 重大变更和弃用
* 横向扩展端点（`/render`、`/derender`、`/inference/v1/generate`）不再在普通 `vllm serve` 上注册，除非通过 `--enable-scale-out`； `VLLM_ENABLE_SCALE_OUT_ENDPOINTS` 已被移除。 `vllm launch render` 和 `vllm serve --tokens-only` 始终注册它们（#54579、#55176）。
* GPTQ 组/动态激活顺序已删除：`g_idx` 被忽略，相关的 Marlin、GPTQ、CPU 和 RDNA3 内核消失了 (#54809)。
* 删除了 0.29 已弃用的项目：`VLLM_PREFIX_CACHE_RETENTION_INTERVAL` 和 `VLLM_MM_HASHER_ALGORITHM` 环境变量（使用配置字段）、`use_fp4_indexer_cache` 别名（使用 `indexer_kv_dtype`）、ROCm 上的 `CUDA_VISIBLE_DEVICES` 后备（使用 `HIP_VISIBLE_DEVICES`）以及 `seq_lens_cpu` / `num_computed_tokens_cpu` 注意元数据属性 (#55353)。
* `all` Mamba 缓存模式已弃用并回退到 Model Runner V1 (#55041)。
* `python -m vllm.entrypoints.grpc_server` 已弃用；使用 `vllm serve --grpc` (#56746)。 `sse_keep_alive` 移至 `vllm.entrypoints.serve.utils` (#56369)。
* YaRN 与 Transformers 一致：供应商 YaRN 别名不再将 `max_position_embeddings` 再次乘以因子，因此某些型号的派生 `max_model_len` 会下降（TeleChat3-36B-Thinking 131072 至 32768，sarvam-105b 5242880 至 131072）； `attn_factor` 和 `extrapolation_factor` 被忽略，而支持 `mscale`/`attention_factor` (#56446)。
* Attention实现必须显式声明DCP支持；具有 ROCm 标准注意力、Triton、FlexAttention 或 TurboQuant 的 DCP 现在在后端选择时失败 (#55780)。
* 具有混合 KV 缓存组的 MoRI-IO 连接器写入模式现在需要 `--disable-hybrid-kv-cache-manager`；否则使用 READ 模式 (#53721)。
* 默认音频重采样器从 PyAV 切换为 torchaudio (#52598)；音频解码是后端可选择的，在 `auto` 中首先使用声音文件（#51826、#55642）。
* 新默认值：SM100/103 上基于 Marlin 的 FlashInfer CuTeDSL NVFP4 W4A16 (#53014)、SM120/121 上基于仅权重内核的 W4A4 NVFP4 (#55170)、SM100 上的 BF16x3 路由器 GEMM (#55899)、DeepEP v2 将重叠与 `VLLM_DEEPEP_V2_COMBINE_OVERLAP=0` 结合起来以禁用(#52781)、AITER 自定义 AG/RS 用于 DP 注意力 + TP 专家并禁用 `VLLM_ROCM_USE_AITER_CUSTOM_AR=0` (#48247)、SM100 上 Kimi-K3 的本机 CUDA AttnRes (#54261) 以及 `VLLM_USE_BREAKABLE_CUDAGRAPH=1` 不再覆盖 MRV1 上的完整图 (#56312)。

## 新贡献者
* @100milliongold 在 https://github.com/vllm-project/vllm/pull/56017 中做出了第一个贡献
* @404mario 在 https://github.com/vllm-project/vllm/pull/52781 中做出了第一个贡献
* @982945902 在 https://github.com/vllm-project/vllm/pull/52923 中做出了第一个贡献
* @abrahamzewoudie 在 https://github.com/vllm-project/vllm/pull/45900 中做出了第一个贡献
* @aijanai 在 https://github.com/vllm-project/vllm/pull/51678 中做出了第一个贡献
* @Aj2280 在 https://github.com/vllm-project/vllm/pull/55728 中做出了第一个贡献
* @Akine-Ko 在 https://github.com/vllm-project/vllm/pull/54033 中做出了第一个贡献
* @akshaver 在 https://github.com/vllm-project/vllm/pull/53945 中做出了第一个贡献
* @alexliluz 在 https://github.com/vllm-project/vllm/pull/53124 中做出了第一个贡献
* @am-cohere 在 https://github.com/vllm-project/vllm/pull/54774 中做出了第一个贡献
* @amd-xavierwang 在 https://github.com/vllm-project/vllm/pull/56153 中做出了第一个贡献
* @andy-neuma 在 https://github.com/vllm-project/vllm/pull/50314 中做出了第一个贡献
* @AnshulDesai 在 https://github.com/vllm-project/vllm/pull/55271 中做出了第一个贡献
* @ArcheyChen 在 https://github.com/vllm-project/vllm/pull/54436 中做出了第一个贡献
* @arcusbuilds 在 https://github.com/vllm-project/vllm/pull/54007 中做出了第一个贡献
* @averma12 在 https://github.com/vllm-project/vllm/pull/56721 中做出了第一个贡献
* @bakiburakogun 在 https://github.com/vllm-project/vllm/pull/55511 中做出了第一个贡献
* @BANANASJIM 在 https://github.com/vllm-project/vllm/pull/55301 中做出了第一个贡献
* @Big2Wheel 在 https://github.com/vllm-project/vllm/pull/54975 中做出了第一个贡献
* @bjf-frz 在 https://github.com/vllm-project/vllm/pull/55819 中做出了第一个贡献
* @bojian3 在 https://github.com/vllm-project/vllm/pull/54306 中做出了第一个贡献
* @BolinSNLHM 在 https://github.com/vllm-project/vllm/pull/54606 中做出了第一个贡献
* @BruceLoveDecimal 在 https://github.com/vllm-project/vllm/pull/50984 中做出了第一个贡献
* @byshiue 在 https://github.com/vllm-project/vllm/pull/55054 中做出了第一个贡献
* @cenab 在 https://github.com/vllm-project/vllm/pull/55710 中做出了第一个贡献
* @circlepen 在 https://github.com/vllm-project/vllm/pull/56388 中做出了第一个贡献
* @colinmcnamara 在 https://github.com/vllm-project/vllm/pull/55325 中做出了第一个贡献
* @DebugSy 在 https://github.com/vllm-project/vllm/pull/55111 中做出了第一个贡献
* @dharak-cohere 在 https://github.com/vllm-project/vllm/pull/53784 中做出了第一个贡献
* @djw8605 在 https://github.com/vllm-project/vllm/pull/54962 中做出了第一个贡献
* @eastwood-c 在 https://github.com/vllm-project/vllm/pull/55745 中做出了第一个贡献
* @erdholion 在 https://github.com/vllm-project/vllm/pull/54285 中做出了第一个贡献
* @gc-fu 在 https://github.com/vllm-project/vllm/pull/55310 中做出了第一个贡献
* @happyyzy 在 https://github.com/vllm-project/vllm/pull/50220 中做出了第一个贡献
* @heliubj18 在 https://github.com/vllm-project/vllm/pull/54756 中做出了第一个贡献
* @Ianniu123 在 https://github.com/vllm-project/vllm/pull/55650 中做出了第一个贡献
* @ItsRoy69 在 https://github.com/vllm-project/vllm/pull/55283 中做出了第一个贡献
* @jackLei0901 在 https://github.com/vllm-project/vllm/pull/49869 中做出了第一个贡献
* @Jankwi 在 https://github.com/vllm-project/vllm/pull/54220 中做出了第一个贡献
* @JaynouOliver 在 https://github.com/vllm-project/vllm/pull/47562 中做出了第一个贡献
* @jcayab 在 https://github.com/vllm-project/vllm/pull/54584 中做出了第一个贡献
* @jorge-menjivar 在 https://github.com/vllm-project/vllm/pull/53056 中做出了第一个贡献
* @josiahdavis 在 https://github.com/vllm-project/vllm/pull/56286 中做出了第一个贡献
* @jschmied 在 https://github.com/vllm-project/vllm/pull/55180 中做出了第一个贡献
* @jyizheng 在 https://github.com/vllm-project/vllm/pull/54518 中做出了第一个贡献
* @kamb-code 在 https://github.com/vllm-project/vllm/pull/52771 中做出了第一个贡献
* @krsish 在 https://github.com/vllm-project/vllm/pull/55307 中做出了第一个贡献
* @kushaldabe 在 https://github.com/vllm-project/vllm/pull/55548 中做出了第一个贡献
* @LauraGPT 在 https://github.com/vllm-project/vllm/pull/54944 中做出了第一个贡献
* @LearningMachine621 在 https://github.com/vllm-project/vllm/pull/49675 中做出了第一个贡献
* @linamy85 在 https://github.com/vllm-project/vllm/pull/49984 中做出了第一个贡献
* @lucamotz 在 https://github.com/vllm-project/vllm/pull/54110 中做出了第一个贡献
* @luoyuctl 在 https://github.com/vllm-project/vllm/pull/56387 中做出了第一个贡献
* @luyixiao95 在 https://github.com/vllm-project/vllm/pull/52285 中做出了第一个贡献
* @lvliang-intel 在 https://github.com/vllm-project/vllm/pull/47237 中做出了第一个贡献
* @lzzzzzc 在 https://github.com/vllm-project/vllm/pull/55864 中做出了第一个贡献
* @maireneu 在 https://github.com/vllm-project/vllm/pull/54533 中做出了第一个贡献
* @mevince 在 https://github.com/vllm-project/vllm/pull/54325 中做出了第一个贡献
* @migarci2 在 https://github.com/vllm-project/vllm/pull/55602 中做出了第一个贡献
* @mingg26 在 https://github.com/vllm-project/vllm/pull/53524 中做出了他们的第一个贡献
* @miyakido 在 https://github.com/vllm-project/vllm/pull/40416 中做出了他们的第一个贡献
* @mlazos 在 https://github.com/vllm-project/vllm/pull/53319 中做出了第一个贡献
* @mohit-sarvam 在 https://github.com/vllm-project/vllm/pull/53052 中做出了第一个贡献
* @natsala13 在 https://github.com/vllm-project/vllm/pull/55178 中做出了第一个贡献
* @null-Exception1 在 https://github.com/vllm-project/vllm/pull/54265 中做出了第一个贡献
* @odashi 在 https://github.com/vllm-project/vllm/pull/45241 中做出了第一个贡献
* @Oskii 在 https://github.com/vllm-project/vllm/pull/55618 中做出了第一个贡献
* @pra2107tham 在 https://github.com/vllm-project/vllm/pull/54622 中做出了第一个贡献
* @Roderick-Wu 在 https://github.com/vllm-project/vllm/pull/54809 中做出了第一个贡献
* @SalikovAlex 在 https://github.com/vllm-project/vllm/pull/56414 中做出了第一个贡献
* @seanwestfall 在 https://github.com/vllm-project/vllm/pull/55691 中做出了第一个贡献
* @SherifWaly 在 https://github.com/vllm-project/vllm/pull/53379 中做出了第一个贡献
* @somuai 在 https://github.com/vllm-project/vllm/pull/55369 中做出了第一个贡献
* @specture724 在 https://github.com/vllm-project/vllm/pull/50945 中做出了第一个贡献
* @StevenWang-CY 在 https://github.com/vllm-project/vllm/pull/54819 中做出了第一个贡献
* @stu-cao 在 https://github.com/vllm-project/vllm/pull/55802 中做出了第一个贡献
* @subhashpolisetti 在 https://github.com/vllm-project/vllm/pull/54633 中做出了第一个贡献
* @surajm20061998 在 https://github.com/vllm-project/vllm/pull/55508 中做出了第一个贡献
* @Sy0307 在 https://github.com/vllm-project/vllm/pull/55212 中做出了第一个贡献
* @tanyuqian 在 https://github.com/vllm-project/vllm/pull/55063 中做出了第一个贡献
* @TensorRaya 在 https://github.com/vllm-project/vllm/pull/55908 中做出了第一个贡献
* @Ubospica 在 https://github.com/vllm-project/vllm/pull/56408 中做出了第一个贡献
* @wei-core 在 https://github.com/vllm-project/vllm/pull/53835 中做出了第一个贡献
* @Wham 在 https://github.com/vllm-project/vllm/pull/54362 中做出了第一个贡献
* @Woolgathererer 在 https://github.com/vllm-project/vllm/pull/56652 中做出了第一个贡献
* @wuhangxian 在 https://github.com/vllm-project/vllm/pull/53824 中做出了第一个贡献
* @xiaozhenbi 在 https://github.com/vllm-project/vllm/pull/56671 中做出了第一个贡献
* @xonder 在 https://github.com/vllm-project/vllm/pull/43272 中做出了第一个贡献
* @xuhuan51 在 https://github.com/vllm-project/vllm/pull/51381 中做出了第一个贡献
* @YeonwooSung 在 https://github.com/vllm-project/vllm/pull/56593 中做出了第一个贡献
* @ykamiset 在 https://github.com/vllm-project/vllm/pull/52664 中做出了第一个贡献
* @YoavMiron 在 https://github.com/vllm-project/vllm/pull/54574 中做出了第一个贡献
* @yongqinwang-cmd 在 https://github.com/vllm-project/vllm/pull/50514 中做出了第一个贡献
* @Yuzu23 在 https://github.com/vllm-project/vllm/pull/45091 中做出了他们的第一个贡献
* @yzeyu71 在 https://github.com/vllm-project/vllm/pull/50504 中做出了第一个贡献
* @z-zanez 在 https://github.com/vllm-project/vllm/pull/53129 中做出了第一个贡献
* @zdtsw 在 https://github.com/vllm-project/vllm/pull/54999 中做出了第一个贡献
* @zhang-keliang 在 https://github.com/vllm-project/vllm/pull/55288 中做出了第一个贡献
* @zhaoguochun1995 在 https://github.com/vllm-project/vllm/pull/56382 中做出了第一个贡献
* @zhouyou9505 在 https://github.com/vllm-project/vllm/pull/54659 中做出了第一个贡献
* @zigzagcai 在 https://github.com/vllm-project/vllm/pull/54560 中做出了第一个贡献
* @zqlcode 在 https://github.com/vllm-project/vllm/pull/56071 中做出了第一个贡献
* @zvier 在 https://github.com/vllm-project/vllm/pull/56103 中做出了第一个贡献
* @zwang86 在 https://github.com/vllm-project/vllm/pull/54098 中做出了第一个贡献

## 贡献者
@khluu、@AndreasKaratzas、@taneem-ibrahim、@BugenZhao、@yewentao256、@njhill、@NickLucche、@aoshen02、@LopezCastroRoberto、@WoosukKwon、@LucasWilkinson、@zyongye、@hmellor、@Fangzhou-Ai、@sfeng33、@Isotr0py、 @gau-nernst、@JaredforReal、@wzhao18、@fxmarty-amd、@stefankoncarevic、@Alex-ai-future、@mgoin、@micah-wil、@mayuyuace、@djramic、@ZJY0516、@mawong-amd、@Rohan138、@sychen52、@waizuichougou、@chaunceyjian、 @simonanielsson、@KernelClint、@AdaAibaby、@gty111、@zhenwei-intel、@zxd1997066、@majunze2001、@divakar-amd、@zhewenl、@giuseppegrossi、@Levius-Fubuki、@gcanlin、@jperezdealgaba、 @bigPYJ1151、@stecasta、@linitra24、@chaojun-zhang、@shaohuaxi、@reidliu41、@atalman、@mfylcek、@lucifer1004、@ZeldaHuang、@askliar、@peakcrosser7、@yzeyu71、@hungnnvidia、@zupengwang、@TheEpicDolphin、@hlin99、 @liusy58、@jyizheng、@jimmy-adams、@lucamotz、@jeejeelee、@shen-shanshan、@MatthewBonanni、@cjackal、@aarushjain29、@noooop、@Juntian777、@FeathBow、@Hotragn、@Jankwi、@lzhan011、@subhashpolisetti、@maithilijoshi20、 @ilmarkov、@lukealonso、@mingg26、@franciscojavierarceo、@mevince、@zdtsw、@bnellnm、@omerpaz95、@jikunshang、@rbrugaro-amd、@bohnstingl、@specture724、@afierka-intel、@mohit-sarvam、@andylolu2、@pisceskkk、@starkwj、 @wangyicong52、@eastwood-c、@wuhangxian、@yzong-rh、@yma11、@TQCB、@Sy0307、@jbyczkow、@itayalroy、@xiaguan、@alec-flowers、@ayush1399、@orestis-z、@mobicham、@ArcheyChen、@Zhenzhong1、@ZhengGong-amd、 @jorge-menjivar、@IwakuraRein、@linamy85、@wentian-byte、@afriedri、@dharak-cohere、@DarkLight1337、@lvliang-intel、@zigzagcai、@harjothkhara、@bo Jiang3、@maireneu、@z-zanez、@JaynouOliver、@pra2107tham、@jdebache、@aijanai、 @Dao007forever、@juhi10071998、@odashi、@Etelis、@fjosw、@jackLei0901、@tarukumar、@positive666、@tzielinski-habana、@drakosha、@iyastreb、@Harry-Chen、@sheralskumar、@ccrhx4、@aaab8b、@982945902、 @tanyuqian、@DebugSy、@jasonozuzu-cohere、@byshiue、@yif Jiang、@BolinSNLHM、@wseaton、@Yuzu23、@andyxning、@andy-neuma、@foraxe、@xuhuan51、@AnshulDesai、@luyixiao95、@null-Exception1、@yiz-liu、@zhang-keliang、@erdholion、 @happyyzy、@GirasoleY、@SubSir、@natsala13、@yongqinwang-cmd、@StevenWang-CY、@LauraGPT、@wei-core、@zhejianxiaomai、@bakiburakogun、@Whamp、@almogtavor、@zhouyou9505、@jschmied、@wenhuach21、@Big2Wheel、@vhagor、 @frankie-ys、@zufangzhu、@stmatengss、@seanwestfall、@kamb-code、@somuai、@Josephasafg、@Aj2280、@am-cohere、@Sip4818、@liuyao0322、@heliubj18、@krsish、@Oskii、@xijiaat、@benenzhu、@tdoublep、@akshaver、 @SherifWaly、@TensorRaya、@shikamd123、@Roderick-Wu、@lcskrishna、@BANANASJIM、@soodoshll、@mlazos、@Akine-Ko、@miyakido、@meena-at-work、@nikhilkulkarni1755、@jcayab、@wincent8、@abrahamzewoudie、@ronensc、 @haic0、@gc-fu、@ykamiset、@Xarbirus、@zvier、@avininjamay8、@ColinZ22、@YunzhuLu、@jiacao-amd、@kliuae、@tobymao、@zexplorerhj、@ywang96、@YoavMiron、@xonder、@bjf-frz、@cenab、@josiahdavis、 @juliendenize，@JiataiWang，@colinmcnamara，@tlrmchlsmth，@LearningMachine621，@jamesETsmith，@YukioZzz，@kushaldabe，@lzzzzzc，@SalikovAlex，@pmanczak，@fadara01，@JulienDarve，@nicole-lihui， @zRzRzRzRzRzRzR、@100milliongold、@labAxiaoming、@GuyStone、@Wauplin、@SorenDreano、@heng Chengpei、@circlepen、@amd-xavierwang、@tahsintunan、@biswapanda、@junuxyz、@walterbm、@arcusbuilds、@JartX、@arpera、 @jcotant-inferact、@PatrykSaffer、@maeehart、@surajm20061998、@Woolgathererer、@kebe7jun、
@ShengleiFu、@pavelzak、@stu-cao、@CedricHwong、@lxy-alexander、@BWAAEEEK、@Chinmay-Kulkarni-AMD、@mgehre-amd、@BruceLoveDecimal、@hickeyma、@jiankuaixue123、@xiaozhenbi、@ganeshr10、@Ronald1995、@arkohut、 @russellb、@zqlcode、@tomasruizt、@thillai-c、@samnordmann、@Ianniu123、@Luosuu、@netanel-haber、@MicheleCampi、@zhaoguochun1995、@JohnQinAMD、@liranschour、@jacklin78911-collab、@migarci2、@404mario、@ItsRoy69、 @mkhazraee、@Ubospica、@Thangnguyenvn98、@YeonwooSung、@alexliluz、@ECMGit、@luoyuctl、@averma12、@drslark、@ppalanga、@zwang86、@wangshangsam、@jiahanc、@vllm-agent、@connorcarpenter15

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.30.0` · 📅 发布：2026-09-22 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.30.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
