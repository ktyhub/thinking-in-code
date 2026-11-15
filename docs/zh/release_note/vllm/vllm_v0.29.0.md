---
title: "vllm v0.29.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.29.0"
version: "v0.29.0"
published: "2026-09-09"
type: "minor"
lang: "zh"
---

# vllm v0.29.0

#v0.29.0

## 亮点

此版本包含来自 277 名贡献者的 594 项提交（91 名新贡献者）！

* **Model Runner V2 现在是所有模型的默认设置** (#53183)，完成了从池化模型开始的部署 (#48290)。 MRV2 还获得了用于 KV 缓存自动调整大小的 CUDA 图形内存分析 (#53306)、将每步 logits 内存减少 1/TP 的批量分片采样 (#50465)、提示嵌入 (#42963)、`extract_hidden_states` 推测 (#49811)、在规范解码下用于统一解码的填充完整 cudagraph 调度 (#53407) 和 DP-sync在 EAGLE/MTP 草稿预填充之前跳过 (#53694)。 MRV1 仍在少数 ROCm 型号中使用，并且具有 MRV2 尚不支持的功能。
* **新模型**：Hy4-preview，腾讯的 770B/49B-active MoE，具有 Gated DeepSeek Sparse Attention 和本机 MTP (#54160)； Qwen3.8-Flash-Next 带有 BF16/FP8/NVFP4 和 MTP (#53896)； GraniteSWA 和 GraniteMoeSWA (#52706)； NemotronH_Omni_Reasoning_V3 与 MTP（#52929、#53121）； Kimi K3 NVFP4 检查点 (#53132)。
* **Kimi-K3 和 DeepSeek V4 性能**：在 K3 潜尾中融合 MXFP4 top-k 最终确定（约 5% E2E 延迟，#53152），一次 Triton 启动中的 K3 Mamba 元数据准备（6.6-7.6x 内核加速，#52388），经过调整的 Hopper 低延迟 GEMM（#54088）现在也在 SM100 上调度(#53534) 并用于 `eh_proj` (12.9-25.2% 内核加速，#53942)，GEMM-RS 扩展到 GEMM-AR (#53053)，MLA 门合并到 QKV-A 投影中 (#54015)，带有 DSpark 的 K3 DCP (#52188) 和 DCP 部分前缀缓存命中 (#50493)； DeepSeek V4 共享专家融合到 MegaMoE (#53040)、自适应 top-k 宽度重新着陆 (#52823)、用于 Humming MoE 的本机 SwiGLU 钳位内核 (#53685) 以及可选的 FlashInfer `moe_ep` 专家后端 (#49636)。
* **推测性解码**：通过 `--per-request-spec-decode-metrics` (#48915) 的 OpenAI API 响应中的每个请求接受统计数据、扩展到 logprobs 的自适应验证 (#52242)、GLM-5.2 的 SM100 稀疏 MLA (#52783) 和 SM90 上的 DeepSeek V4 (#52795)、Qwen3-Omni DSpark 草稿(#52560)、PLaMo3 EAGLE-3/DFlash (#54239) 和从投机者格式加载的 DFlash2 (#53797)。
* **RL 权重同步**：一个新的 `sharded_rdt` P2P 后端，其中每个工作人员仅通过 NIXL 或 Ray Direct Transport 拉动其 TP/EP 切片（#43375）、排名本地 IPC 权重更新（#52497）、通过本机权重加载器进行稀疏检查点坐标更新（#50723、#53751）以及 gpt-oss 的路由专家加载（#52209）。
* **Mamba 前缀缓存**：内部预填充检查点提供 9%-25% TTFT 改进 (#52789)； `prefix_cache_retention_interval` 现在是 CLI 参数，默认为 0 (#52216)，使用 EAGLE/MTP 的混合模型会自动恢复密集保留 (#55760、#55861)。
* **新默认值**：默认情况下为 TP CUDA 组启用 FlashInfer all-reduce，使用 `VLLM_ALLREDUCE_USE_FLASHINFER=0` 选择退出（#52998）；前缀缓存 `NONE_HASH` 默认情况下是确定性的，因此分布式 KV 缓存用户不再需要固定 `PYTHONHASHSEED` (#51875)；新的 `--max-num-queued-reqs` / `--max-num-queued-tokens` 准入控制标志 (#49445)。
* **重大更改**：删除了十个已弃用的模型架构（#53608）； FlexOlmo、Olmo3 和 Hunyuan V1/VL 迁移到 Transformers 建模后端 (#53615)； PyAV 视频解码器后端已删除 (#54231)；已弃用 `python -m vllm.entrypoints.openai.api_server`，取而代之的是 `vllm serve` (#52131)；删除了 `VLLM_TEST_FORCE_FP8_MARLIN` (#52182) 和 `VLLM_ROCM_USE_AITER_FP4_ASM_GEMM` (#53141)。

## :警告：Model Runner V1 弃用
现在默认使用 Model Runner V2，我们正在考虑弃用 Model Runner V1，并以 v0.32 为目标进行删除。我们不打算接受任何更多针对 MRV1 的改进或优化。

MRV2 尚不支持某些[功能](https://github.com/vllm-project/vllm/issues/47172)，但我们计划在未来 2-3 周内弥补这些差距。其中包括序列并行性、双批次重叠、弹性专家并行性、自定义 Logits 处理器和某些推测性解码方法。目前，如果配置了其中任何功能，vLLM 仍将回退到使用 MRV1。

## 发布工件

### Python 车轮

|平台|安装 |
|---|---|
| PyPI（CUDA 13.0）| `pip install vllm` |
| PyPI（CUDA 13.0，uv）| `uv pip install vllm --torch-backend=auto` |
| ROCm | `pip install vllm --extra-index-url https://wheels.vllm.ai/rocm/0.29.0/rocm723` |
| XPU| `uv pip install vllm --extra-index-url https://wheels.vllm.ai/0.29.0/xpu --extra-index-url https://download.pytorch.org/whl/xpu --index-strategy unsafe-best-match` |

### Docker 图像

|平台| Docker 图片|
|---|---|
| CUDA 13.0（默认）| `docker pull vllm/vllm-openai:v0.29.0`（`v0.29.0-cu130` 也适用）|
| CUDA 12.9 | `docker pull vllm/vllm-openai:v0.29.0-cu129` |
| CUDA 13.0 + Ubuntu 24.04 | `docker pull vllm/vllm-openai:v0.29.0-ubuntu2404` |
| CUDA 12.9 + Ubuntu 24.04 | `docker pull vllm/vllm-openai:v0.29.0-cu129-ubuntu2404` |
| ROCm | `docker pull vllm/vllm-openai-rocm:v0.29.0` |
|中央处理器 | `docker pull vllm/vllm-openai-cpu:v0.29.0` |
| XPU| `docker pull vllm/vllm-openai-xpu:v0.29.0` |

### 其他文物

本页底部的 **资产** 部分提供了预构建的发布工件，包括：
- 源代码分发 tarball
- 适用于 x86_64 和 arm64 的 CUDA 12.9 Python 轮子
- 适用于 x86_64 和 arm64 的 CUDA 13.0 Python 轮子
- 适用于 x86_64、arm64 和 macOS 的 CPU Python 轮子
- 适用于 x86_64 的 XPU Python 轮

## 模型支持
* **新模型**：Hy4-preview (#54160)、Qwen3.8-Flash-Next (#53896)、GraniteSWA 和 GraniteMoeSWA 通过现有的 Granite 实现 (#52706)、NemotronH_Omni_Reasoning_V3 (#52929) 以及 Nemotron VL 模型的 MTP (#53121)、DeepSeek-backbone 的双向关注嵌入模型 (#52948)、FP8 ModernBERT (#53101) 和 Kimi K3 NVFP4 检查点 (#53132)。
* **Transformers 建模后端**：FlexOlmo、Olmo3 和 Hunyuan V1/VL 迁移了本机实现 (#53615)、多模式路径强化 (#51827) 和 `RMSNormFuser.fuse` 性能修复 (#52766)。
* **权重加载**：权重绑定现在会检查检查点，因此即使配置声明绑定嵌入，也会加载真正的 `lm_head` （#51665、#53170）。
* **LoRA**：DeepSeek V4 (#53361)、Qwen3-Omni 多模式 LoRA (#52786、#53557)、LLaVA-NeXT (#49788) 和 LFM2-VL (#51498) 的塔式/连接器 LoRA，以及 Muse-Glimmer (#53513)、Qwen3.5 嵌入模块的修复(#48850)、Qwen3.5/3.6 GatedDeltaNet 上的部分 LoRA (#47640)、长上下文中 punica 内核中的 int32 溢出 (#53034)、不支持的模块类型上的错误目标匹配 (#52313) 以及基础层/路由专家前缀排序 (#52552)。
* **多模态性能**：Idefics3 和 SmolVLM 的 ViT 完整 CUDA 图 (#47625)、Pixtral 的打包编码器注意力 (#52185)、融合的 Kimi Vision Q/K RoPE 内核 (#50400)、Dots3 NOTE 运行时 (#53517) 和 Omni 编码器优化 (#53460)、MM 张量不再向工作人员广播前缀缓存覆盖的项目(#52041)、跳过冗余占位符扫描 (#52925)、缓存通用令牌序列 (#53560)、跨模式同时解析异步媒体 (#54537) 以及固定 H2D 副本以避免流停顿 (#53412、#54292、#54299)。
* **多模态输入**：Python 前端接受视频嵌入 (#54242)，模态范围的 `mm_processor_kwargs` 受到尊重 (#53808)，Qwen3-VL 分析尊重 `cap_pixels_per_frame` (#54380)，视频帧采样尊重 MP4 编辑列表修剪 (#48608)，超大项目会跳过 MM 处理器缓存而不是崩溃(#53016)，编码器缓存条目一直保留到最后一次使用 (#54284)，并且使用 SHM 缓存重复的多模式请求不再终止引擎 (#54994)。
* **正确性**：删除了 PaliGemma 陈旧图像缩放 (#52692)、具有处理器大小覆盖的 Mistral3 占位符网格 (#52874)、Transformers v5 上的 MiniCPM-o (#54501)、JinaVL 缓存顺序 (#53553)、混合 CLIP/SigLIP 池批次 (#53165)、XD-RoPE 模型前缀缓存命中 (#53456)、具有不可分割 TP 的 Qwen3-Omni 音频编码器 (#50858)、GLM-5.2 不再使用密集 MHA (#52512)、Moondream3 MoE all-reduce (#54152)、deepseek-vl2 配置默认值 (#51302)、HY-V3 压缩张量忽略匹配(#48682)、CUDA 图形回放下的 MiniMax-M3 FP8 查询分配 (#51203) 以及 GraniteMoeHybrid 量化专家加载 (#54052)。

## 引擎核心
* **Model Runner V2**：所有模型的默认值 (#53183) 和池模型 (#48290)、CUDA 图形内存预留 (#53306)、批量分片采样 (#50465)、提示嵌入 (#42963)、`extract_hidden_states` (#49811)、填充的完整 cudagraph 调度 (#53407)、DP-sync跳过草稿（＃53694），解耦草稿/目标gumbel噪声流（＃54282），仅编码器路径分离（＃53176），以及在关闭和睡眠时正确释放内存（＃53508，＃54246，＃54162，＃53955，＃53682）。
* **推测性解码**：每个请求的接受统计数据 (#48915)、使用 logprobs 进行自适应验证 (#52242)、SM100 稀疏 MLA (#52783) 和 DSv4 + SM90 (#52795)、varlen trtllm-gen 解码 (#52157)、DCP 下用于 DSpark 起草的 FlashInfer MLA (#54277)、融合 GDN所有 Qwen 头部比率的 MTP (#52539)、默认捕获的最宽统一解码批次 (#50488) 以及内存安全的图形大小 (#54418)，以及 Short_conv/LFM2 目标的修复 (#50272)、投机者格式配置覆盖 (#42376)、DFlash 草稿 RoPE 布局 (#54373)、具有不同 GQA 比率的草稿模型(#53002)、TP 下隐藏尺寸较大的草稿模型 (#52193)、DeepSeek V4 范围内的 DSpark 后端继承 (#52809)、Qwen3 的通用 `DSparkDraftModel` 配置 (#52197) 以及 CUDA 图下的 Gemma4 MTP (#53884)。
* **前缀缓存和调度**：Mamba 内部预填充检查点 (#52789)、`prefix_cache_retention_interval` 参数 (#52216、#55760、#55861)、确定性 `NONE_HASH` (#51875)、队列准入控制 (#49445)、验证 `max_model_len` 时保留的 KV 空块 (#47272)、规范解码 no更长的填充到 `max_model_len` (#53962)，并阻止负外部块分配 (#52707)。
* **RL 工作流程**：`sharded_rdt` P2P 权重同步 (#43375)、排名本地 IPC 更新 (#52497)、稀疏检查点更新 (#50723、#53751)、gpt-oss 路由专家加载 (#52209)、跨权重同步的稳定 DeepSeek V4 mHC 广播缓冲区 (#52626) 以及打包权重传输流重用限制预留内存浪费（＃52951）。
* **确定性**：用于确定性解码重放的 `trace_decode_token_ids` (#46701)、每个架构调整的批量不变 matmul 配置（RTX 4090D/H20 上大约 3x 解码内核，#53247）、Blackwell 自动调谐，减少 33.6% E2E 延迟（#53649）、DP+EP 下的确定性 MoE 组合(#45683)，并在批次不变性下禁用 `fuse_allreduce_rms` (#51292)。
* **内核**：融合嵌入内核（#53677），Blackwell 上的 head_size=256 重新启用 FA4（#52980），矢量化稀疏 MLA 掩码加载（#52217），GLM-5 头部尺寸的掩码 MHA 预填充（#53785），GLM-5.2 稀疏 MLA Q 连接与头部填充融合(#53878)、Qwen3.6 的融合 QK-norm + 部分 MRoPE + 门 (#52676)、FlashInfer CuTeDSL BF16 低延迟 GEMM 作为选择加入 `--linear-backend flashinfer_cutedsl` (#50572)、DSV3 平面模型的复制嵌入和范数融合 (#48484)、标准化融合共享专家选择 (#51695)、 GPT-OSS MoE topk 元数据重用 (#45457)、调整协作 topk (#53382) 以及针对 L40S 上的 Qwen3.5 调整 FP8 fused_moe (+7%, #53819)。
* **稳健性**：在 `KVCacheLayout` 枚举下标准化的 KV 缓存布局 (#51718)、JIT 预热提供程序注册表 (#50174)、`--cpu-offload-params` 现在达到视觉/音频塔 (#53120)、注意后端探测故障不再崩溃 init (#51703)、FlashInfer XQA 依赖于不受支持的 head_dim (#53111)、 FlashInfer 在合并之前预填充 LSE 标准化，以修复前缀缓存 logits 分歧 (#52796)、批量混合种子请求和非种子请求时保留种子 (#51866)、本地 DP 工作线程的启动线程分配帐户 (#52385)、融合 SiLU 块量化 (#53409) 和 LoRA 内核 (#53034) 中的 int32 溢出修复、融合中的共享内存竞赛分组 RMSNorm 量化 (#54111)、FlashInfer 稀疏 MLA 的 BLHNC 寻址 (#54465)、Mamba 状态复制竞赛 (#50729) 以及自动停止后的 `start_profile` 无操作 (#51839)。

## 硬件与性能
* **NVIDIA**：DeepSeek V3.2 / GLM-5.2 DSA 在所有 GPU 上路由到优化的 CUDA 路径 (#52861)，用于 DSv3.2 稀疏 MLA 的 PCP (#52046)，所有架构上的 cuBLAS out_dtype 路由器 GEMM，包括 GB10 (#54048)，SM103 上的 FlashInfer all-reduce 调整 (#53318) #53606)、SM100 上的 FA4 hdim256 (#52980)、SM120 稀疏 MLA 修复 (#51395、#53574)、DeepSeek V3.2 融合内核网格针对 65k+ 令牌启动进行了强化 (#52381)、FlashMLA 稀疏解码工作区修复 (#53755)、MNVL Lamport 损坏修复(#53000)，并选择针对 CUDA 13.4/13.5 构建 Rubin Docker (#53443)。
* **AMD ROCm**：使用 hipgraphs 进行双流解码（#52033），默认情况下 W4A4 预洗牌 asm GEMM（Llama-3.3-70B MXFP4 上的吞吐量增加 15%，#53141），ROCr/CLR 更新修复图形重播段错误，TPOT 改进高达约 20%（#53712），融合 KDA 解码MI325X (#52293)、AITER MLA 规范解码的完整 cudagraphs (#51171)、非除数头计数的 FP8 asm MLA 预填充 (#51040)、DCP 因果多令牌验证 (#51705) 和 Kimi-K3 的前缀缓存命中 (#53598)、MiniMax-M3 的 AITER PA gluon 解码(#52849)、mHC/RMSNorm 的 DeepSeek-V4 融合 (#52737)、C4A top-k (#52882)、C4 压缩器 GEMM (#53838) 和 SWA q/kv 范数 + FP8 Quant (#53540)、block-FP8 的融合共享专家 (#53097)、ROCm 上的 CPU 卸载7.13+ (#43018)、TheRock 7.14 预览 docker (#49925)、int4/int8 量化修复 (#52112、#48998、#51632、#53110)、在当前流上捕获的 CUDA 图形 (#53818)、在图形回放中保留的 AITER 元数据(#53821)，并改进了 WSL 下的 ROCm 检测 (#38434)。
* **Intel XPU**：INC int4 W4A8 线性后端 (#50501)、AutoRound MXFP8 MoE (#51248)、EC 连接器 KV 卸载 (#49532)，以及针对 HunyuanOCR XD-RoPE (#52174)、稀疏 MLA 元数据同步 (#52066)、Mamba 状态指针溢出 (#48109)、oneCCL 的修复World Size 1 (#52389) 和 MRoPE (#53201) 的热身。
* **CPU**：适用于 DeepSeek V2/V3/R1 的 AMX 高性能 MLA 后端 (#52616)，MLA 现在端到端运行 (#51471)，FP16/BF16 在 AMX 上保持 GDN 状态 (#52191)，Int8 MoE 通过 AMD Zen 上的 zentorch (#44834)，Voxtral 支持 (#53921)，C++非 AMX AVX-512BF16 上的 causal_conv1d GDN (#49688) 以及各种修复 (#54042)。

## 大规模服务
* **上下文并行性**：带有 DSpark 的 Kimi-K3 DCP (#52188) 和部分前缀缓存命中 (#50493)、用于 MLA 解码的 FlashInfer 本机 CP (#54012)、带有 MTP 的 Hopper 上的 FlashMLA 稀疏 DCP (#46514)、用于 MLA 模型的 NIXL P/D DCP (#50611)、用于 DSv3.2 的 PCP (#52046) 和NIXL PCP 生成器 (#52779)、`--dcp-q-replicate` 具有 GLM 稀疏注意力的默认查询复制功能 (#50382)、DeepSeek-V3.2 / GLM-5.2 的 DCP 融合注意力修复 (#50005)、DCP 下的稀疏 MLA 元数据和内核块大小 (#52377、#51031)、PCP PIECEWISE cudagraph 修复（#53869、#53515），并将 PCP 兼容性检查委托给 PCP 管理器，以便插件可以启用 GQA+PCP（#53853）。
* **Elastic EP**：减少急切模式重新配置停机时间 (#51885)，在扩展期间保留 AOT 缓存重用 (#53378)，以及拒绝低于最小值的扩展 (#52702)。
* **MoE 通信**：DeepEP v2 接收器 CPU 开销 (#51114) 和 MXFP8 激活规模调度 (#51398)、FlashInfer 一侧 All2All 改进 (#51924)、DeepEP v2 针对 `--enforce-eager` 启动的修复 (#51824) 和解码/cudagraph 路径 (#52632)、NCCL>=2.31 堆溢出修复(#53008)、按功能门控的跨节点 MNNVL 全归约 (#53253) 以及为 DSpark 调整大小的 MNNVL 全归约缓冲区 (#50932)。
* **KV 连接器**：Mooncake Store 通过 `save_decode_cache` (#52466) 和混合 DCP 前缀缓存 (#53324) 解码 KV 保存、外部可传输 KV 缓存组标识 (#53779)、异步 KV 加载推迟到向前启动 (#53333)、`/inference/v1/generate` 的 `kv_transfer_params` (#42644)、MoRIIO 共享 KV 区域注册布局重构后 (#53698)，Mamba 修复了 Mooncake (#51362、#51358、#53663) 和 NIXL (#53523)。
* **KV 卸载**：由 CUDA 事件驱动的 EC 卸载连接器 (#49994)、KV 缓存事件的所有权 (#52067、#52068)、P2P 层请求级卸载 (#52912) 和中止处理 (#52571)、修复 `/dev/shm` 崩溃泄漏 (#52596)、根据计算流排序的 CPU->GPU 负载(#50696)、`store_threshold` 计数固定 (#52227)、动态主键级联 (#53329) 以及已填充的 GPU 缓存存储处理 (#54021)。
* **数据/管道并行**：PP静默损坏修复（＃54962，＃49274），DP协调器唤醒处理（＃51481），暂停时的设备同步（＃52914），Ray的TCPStore端口修复（＃53666，＃50969），继承uvicorn配置的DP主管（＃52473），EPD编码器循环修复(#52491)，以及仅限生产者的 EC 配置标准化 (#53656)。

## 量化
* **新后端**：FlashInfer TRT-LLM MXFP8 线性 (#52204)、用于 SM120/SM121 的 b12x FP4 MoE (#52018)、AutoRound block-wise FP8 (#47434)、具有 MXFP4 权重 + block-FP8 激活的 Humming MoE (#51332) 以及压缩张量 WNA16 的 Humming教育部（#48918）。
* **修复**：通过 W4A16 路由的仅权重 NVFP4 检查点 (#54427)、带有 Marlin 的压缩张量块 FP8 (#52966) 和 int8 分组的 WNA16 MoE (#52002)、OCP MX mxfp6 激活仿真 (#52704)、受可用性保护的 MXFP8 FlashInfer 路径 (#52648) 以及嗡嗡声激活别名 (#54056)。

## API 和前端
* **新端点和选项**：`/v1/messages/render` 用于人类消息 API (#45803)、`/cohere/v2/chat/render` (#53219)、空闲流的 SSE 保持活动注释 (#51034)、每个请求规范解码指标 (#48915)、视频嵌入输入 (#54242)、`--max-num-queued-reqs` / `--max-num-queued-tokens` (#49445)，池请求可以设置填充 (#51157)。
* **Anthropic & Cohere**：`vllm_xargs` 转发到采样参数 (#53308)，报告 `stop_sequence` 停止原因 (#45807)，Cohere 引用/工具 500 已修复 (#52175)，并应用停止字符串限制 (#53750)。
* **OpenAI 兼容性**：补全中的 `logprobs=-1` (#46175)、带有 echo 的流式 logprob 偏移量 (#47815)、批量聊天 echo (#52529)、从 `/inference/v1/generate` 返回的所有选项，且 n>1 (#52399)、`cache_salt` 转发内容部分 (#54315)、针对词汇进行验证的 `stop_token_ids` (#54196)，以及 `/detokenize` 中的 client 错误 4xx (#52622)、格式错误的命名空间工具 (#53763)、格式错误的 Base64 音频 (#53744) 以及 DeepSeek 编码器中的未知聊天角色 (#53071)；重播历史记录中的工具调用参数被防御性地解析 (#48922)，处理空的 `FlatLogprobs` 切片 (#53704)，并且拒绝空的坏词标记化 (#53433)。
* **结构化输出和解析器**：推理端检测范围为当前回合（#54089），终端语法在 `min_tokens` 下停止（#54218），拒绝不支持的模式+长度模式（#49996），MistralCommonBackend 分词器（#52720），XGrammar 批量终止（#52805），推测后的虚假 FSM 错误推理端 (#53046)、共享解析器引擎适配器 (#52830)、Gemma4 带括号的工具调用 (#53657) 和 `enable_thinking` 默认值 (#52430)、HY-V3 在一个增量中并行调用 (#53965)、GPT-OSS Harmony 严格语法 (#52222)、从响应文本中排除的 Kimi K3 保留标记(#52889)，并且跳过未使用的请求本地推理器(#52573)。
* **Rust 前端**：带有本地 XGrammar 结构标签的 HY3 统一解析器 (#53054)、gRPC 音频/视频输入 (#53760)、gRPC LoRA 生命周期控制 (#52840、#52031、#53756)、`--generation-config vllm` (#53044)、`truncate_prompt_tokens` (#48584)、OpenAI 边缘情况对齐 (#53218)、优化的 SSE 热路径 (#51321)、纯 Rust `protox` 替换 `protoc` (#52892)、RL 世界大小报告 (#53204) 和路由专家提示偏移量 (#52703)，以及 GLM-5.2 模板的修复奇偶校验 (#51426)、Qwen 解析器自动检测 (#51169)、Kimi K3 `reasoning_effort="none"` (#53043)、`/inference/v1/generate` 上的 `n > 1` 拒绝 (#52844) 和 `LogprobsTensors` 线路模式 (#53939)。
* **池**：BGE-M3 吞吐量（+3.13%，#53464）和任务验证（#51823），填充前截断提示（#54364），使用提示截断并行数组（#54407，#54509），以及 `vllm bench serve` 中的批量输入吞吐量（#53213）。
* **CLI 和工具**：`vllm launch` 运行服务参数检查 (#52825)，`run_batch.py` 移出 openai 文件夹 (#53500)，并修复上传重试 (#50588)，`vllm bench` 警告随机运行的暖前缀缓存 (#53920) 并在 `vllm` 吞吐量后端恢复多模式数据集(#52168)，vLLM 配方工具获得了扫描建议和别名解析(#53325、#53946)。

## 安全
* `cache_salt` 长度限制为 1024，以防止调度程序 CPU 耗尽 (#54353)。
* 超大媒体在完全下载之前被拒绝（#51896）；在所有音频路径上强制执行 `VLLM_MAX_AUDIO_CLIP_FILESIZE_MB` (#53561)。
* 对跳过检查的处理器强制执行解码器提示长度验证 (#46588)； PyNvVideoCodec 解码器插槽限制绕过已修复 (#52126)。
* `api_key` 和 `hf_token` 从启动日志、编译缓存因素和 Rust 前端启动日志中进行了编辑（#52523、#53625、#53738）。

## 依赖关系
* FlashInfer 0.6.18 (#54313)、huggingface-hub 1.28.0 (#52797)、tpu-inference v0.28.0 (#54020)、NIXL 1.3.2 (#51777)。
* InstantTensor 添加到 CUDA 依赖项；默认情况下不启用加载程序（#52801）。 CuPy 约束放宽，仅排除 14.1.0 (#44284)。
* ROCm 基础镜像：ROCr/CLR 更新 (#53712)、rocprofiler-sdk 1.3.2 (#53182)、TheRock 7.14 预览版 (#49925)、LMCache 连接器包 (#51208)。
* XPU：vllm_xpu_kernels 0.1.14.1 (#54203)，UCX 安装更新 (#53817)。
* 当选定的预编译 CUDA 变体不可用时，构建失败并关闭 (#52545)。

## 重大变更和弃用
* 删除了 10 个已弃用的架构：Arctic、Chameleon、Cheers、Fairseq2Llama、FireRedLID、GritLM、HCXVision、MPT、`RWForCausalLM` 和 `StableLMEpochForCausalLM` 别名以及 `PrithviGeoSpatialMAE`（被 `Terratorch` 取代）(#53608)。
* FlexOlmo、Olmo3、Hunyuan V1 和 Hunyuan VL 现在通过 Transformers 建模后端提供服务 (#53615)。
* 删除 PyAV 视频解码器后端；使用 OpenCV 或 Torchcodec (#54231)。
* `python -m vllm.entrypoints.openai.api_server` 已弃用；使用 `vllm serve` (#52131)。
* Model Runner V2 是所有模型的默认运行器 (#53183)。
* 对于 SWA/SSM 型号，`prefix_cache_retention_interval` 默认值从密集更改为 0；环境变量已被弃用，取而代之的是参数 (#52216)。
* 默认情况下启用 FlashInfer all-reduce (#52998)。
* `VLLM_TEST_FORCE_FP8_MARLIN` 被删除，取而代之的是 `--linear-backend` / `--moe-backend` (#52182)； `VLLM_ROCM_USE_AITER_FP4_ASM_GEMM` 已删除（#53141）；删除了已死亡的 `--attention-config.use_prefill_decode_attention` (#52557)；其他长期不推荐使用的参数已清理（#53559）。

## 新贡献者
* @030611 在 https://github.com/vllm-project/vllm/pull/51823 中做出了第一个贡献
* @92hyungjun 在 https://github.com/vllm-project/vllm/pull/47272 中做出了他们的第一个贡献
* @ActiveSky 在 https://github.com/vllm-project/vllm/pull/52692 中做出了第一个贡献
* @adisivaprasad 在 https://github.com/vllm-project/vllm/pull/53854 中做出了第一个贡献
* @Agoni-02 在 https://github.com/vllm-project/vllm/pull/48850 中做出了他们的第一个贡献
* @AmitMY 在 https://github.com/vllm-project/vllm/pull/48608 中做出了第一个贡献
* @Andy365-365 在 https://github.com/vllm-project/vllm/pull/52523 中做出了第一个贡献
* @andyluo7 在 https://github.com/vllm-project/vllm/pull/53821 中做出了第一个贡献
* @AnkitNakhawa 在 https://github.com/vllm-project/vllm/pull/52491 中做出了第一个贡献
* @anmolgupt 在 https://github.com/vllm-project/vllm/pull/52874 中做出了第一个贡献
* @bobboli 在 https://github.com/vllm-project/vllm/pull/51924 中做出了第一个贡献
* @brianosaurus 在 https://github.com/vllm-project/vllm/pull/52557 中做出了第一个贡献
* @CalvinXKY 在 https://github.com/vllm-project/vllm/pull/50858 中做出了第一个贡献
* @canlahlah 在 https://github.com/vllm-project/vllm/pull/53409 中做出了第一个贡献
* @CherryLemon 在 https://github.com/vllm-project/vllm/pull/53877 中做出了第一个贡献
* @CHIPMUNK-T0T 在 https://github.com/vllm-project/vllm/pull/47625 中做出了第一个贡献
* @cogniera 在 https://github.com/vllm-project/vllm/pull/53839 中做出了第一个贡献
* @cr-zhao 在 https://github.com/vllm-project/vllm/pull/52385 中做出了第一个贡献
* @daviswer 在 https://github.com/vllm-project/vllm/pull/52706 中做出了第一个贡献
* @DCoEngine 在 https://github.com/vllm-project/vllm/pull/48682 中做出了第一个贡献
* @dineshchitlangia 在 https://github.com/vllm-project/vllm/pull/49688 中做出了第一个贡献
* @dkrisman 在 https://github.com/vllm-project/vllm/pull/54380 中做出了第一个贡献
* @dmvevents 在 https://github.com/vllm-project/vllm/pull/52632 中做出了第一个贡献
* @Edge-Explorer 在 https://github.com/vllm-project/vllm/pull/53435 中做出了第一个贡献
* @eilamc14 在 https://github.com/vllm-project/vllm/pull/47640 中做出了第一个贡献
* @eligotts 在 https://github.com/vllm-project/vllm/pull/54315 中做出了第一个贡献
* @Eoin-Houstoun 在 https://github.com/vllm-project/vllm/pull/51703 中做出了第一个贡献
* @floatlibai 在 https://github.com/vllm-project/vllm/pull/52144 中做出了第一个贡献
* @fuzzifikation 在 https://github.com/vllm-project/vllm/pull/51034 中做出了第一个贡献
* @hagaikwa-redhat 在 https://github.com/vllm-project/vllm/pull/53230 中做出了第一个贡献
* @haoyangqian 在 https://github.com/vllm-project/vllm/pull/52690 中做出了第一个贡献
* @Hert4 在 https://github.com/vllm-project/vllm/pull/51157 中做出了第一个贡献
* @ima-helikoptaaa 在 https://github.com/vllm-project/vllm/pull/54427 中做出了第一个贡献
* @jbyczkow 在 https://github.com/vllm-project/vllm/pull/52174 中做出了第一个贡献
* @JC-ut0 在 https://github.com/vllm-project/vllm/pull/53071 中做出了第一个贡献
* @jiahaoliang 在 https://github.com/vllm-project/vllm/pull/51262 中做出了第一个贡献
* @JiataiWang 在 https://github.com/vllm-project/vllm/pull/53553 中做出了第一个贡献
* @jl9876 在 https://github.com/vllm-project/vllm/pull/51248 中做出了第一个贡献
* @JulianZJN 在 https://github.com/vllm-project/vllm/pull/53253 中做出了第一个贡献
* @jungjiyu 在 https://github.com/vllm-project/vllm/pull/53939 中做出了第一个贡献
* @kyleliang-nv 在 https://github.com/vllm-project/vllm/pull/51203 中做出了第一个贡献
* @LH-and-FPGA 在 https://github.com/vllm-project/vllm/pull/52648 中做出了第一个贡献
* @li-ukumar 在 https://github.com/vllm-project/vllm/pull/52571 中做出了第一个贡献
* @LioEinaudi 在 https://github.com/vllm-project/vllm/pull/53247 中做出了第一个贡献
* @LironKesem 在 https://github.com/vllm-project/vllm/pull/53921 中做出了第一个贡献
* @Lossfull 在 https://github.com/vllm-project/vllm/pull/52948 中做出了第一个贡献
* @lxy-alexander 在 https://github.com/vllm-project/vllm/pull/52430 中做出了第一个贡献
* @lxyxinyi 在 https://github.com/vllm-project/vllm/pull/50809 中做出了第一个贡献
* @machero 在 https://github.com/vllm-project/vllm/pull/53531 中做出了第一个贡献
* @matthewkotila 在 https://github.com/vllm-project/vllm/pull/48915 中做出了第一个贡献
* @mhoqueanik 在 https://github.com/vllm-project/vllm/pull/49636 中做出了第一个贡献
* @mhuzaifa3 在 https://github.com/vllm-project/vllm/pull/53625 中做出了第一个贡献
* @minjang 在 https://github.com/vllm-project/vllm/pull/53530 中做出了第一个贡献
* @MKQuantum 在 https://github.com/vllm-project/vllm/pull/51866 中做出了第一个贡献
* @new-TonyWang 在 https://github.com/vllm-project/vllm/pull/53704 中做出了第一个贡献
* @nicholaskh-ai 在 https://github.com/vllm-project/vllm/pull/53819 中做出了第一个贡献
* @oliverholworthy 在 https://github.com/vllm-project/vllm/pull/52185 中做出了第一个贡献
* @prakharPant 在 https://github.com/vllm-project/vllm/pull/52743 中做出了第一个贡献
* @Prudhvivuda 在 https://github.com/vllm-project/vllm/pull/53016 中做出了第一个贡献
* @rajathpi 在 https://github.com/vllm-project/vllm/pull/52622 中做出了第一个贡献
* @ray24777 在 https://github.com/vllm-project/vllm/pull/53120 中做出了第一个贡献
* @roachsinai 在 https://github.com/vllm-project/vllm/pull/53528 中做出了第一个贡献
* @RookieCoder-Camera 在 https://github.com/vllm-project/vllm/pull/49274 中做出了第一个贡献
* @sandeep-maddipatla 在 https://github.com/vllm-project/vllm/pull/51777 中做出了第一个贡献
* @seonjinn 在 https://github.com/vllm-project/vllm/pull/52204 中做出了第一个贡献
* @ShengleiFu 在 https://github.com/vllm-project/vllm/pull/53650 中做出了第一个贡献
* @shepark 在 https://github.com/vllm-project/vllm/pull/51302 中做出了第一个贡献
* @shijuzhao 在 https://github.com/vllm-project/vllm/pull/45683 中做出了第一个贡献
* @shipiyouniao 在 https://github.com/vllm-project/vllm/pull/51979 中做出了第一个贡献
* @ShuaiShao93 在 https://github.com/vllm-project/vllm/pull/53034 中做出了第一个贡献
* @simon-veitner-redhat 在 https://github.com/vllm-project/vllm/pull/52980 中做出了第一个贡献
* @sseanliu 在 https://github.com/vllm-project/vllm/pull/52041 中做出了第一个贡献
* @studioego 在 https://github.com/vllm-project/vllm/pull/52389 中做出了第一个贡献
* @tanchao 在 https://github.com/vllm-project/vllm/pull/50191 中做出了第一个贡献
* @thanhpt1110 在 https://github.com/vllm-project/vllm/pull/52720 中做出了第一个贡献
* @theamalsebastian 在 https://github.com/vllm-project/vllm/pull/52588 中做出了第一个贡献
* @thunguo 在 https://github.com/vllm-project/vllm/pull/53101 中做出了第一个贡献
* @tolleybot 在 https://github.com/vllm-project/vllm/pull/51292 中做出了第一个贡献
* @tommy-asai-sonarsource 在 https://github.com/vllm-project/vllm/pull/51395 中做出了第一个贡献
* @tthakkal 在 https://github.com/vllm-project/vllm/pull/50501 中做出了第一个贡献
* @ukannika 在 https://github.com/vllm-project/vllm/pull/52849 中做出了第一个贡献
* @VBS2004 在 https://github.com/vllm-project/vllm/pull/48922 中做出了他们的第一个贡献
* @wyettzeng 在 https://github.com/vllm-project/vllm/pull/52209 中做出了第一个贡献
* @Xuan-1998 在 https://github.com/vllm-project/vllm/pull/53008 中做出了他们的第一个贡献
* @y0hnn 在 https://github.com/vllm-project/vllm/pull/52002 中做出了第一个贡献
* @Yiqin-17 在 https://github.com/vllm-project/vllm/pull/52925 中做出了第一个贡献
* @YukioZzz 在 https://github.com/vllm-project/vllm/pull/51705 中做出了第一个贡献
* @ZHIHANCHEN03 在 https://github.com/vllm-project/vllm/pull/53432 中做出了第一个贡献
* @Zhou248 在 https://github.com/vllm-project/vllm/pull/52560 中做出了第一个贡献
* @zllion 在 https://github.com/vllm-project/vllm/pull/46701 中做出了第一个贡献
* @zwischenraum 在 https://github.com/vllm-project/vllm/pull/50272 中做出了第一个贡献

## 贡献者
@AndreasKaratzas、@khluu、@mgoin、@taneem-ibrahim、@yewentao256、@njhill、@BugenZhao、@hmellor、@GirasoleY、@DarkLight1337、@mayuyuace、@WoosukKwon、@jeejeelee、@noooop、@jperezdealgaba、@LucasWilkinson、 @wzhao18、@stefankoncarevic、@gau-nernst、@okorzh-amd、@ZJY0516、@HollowMan6、@connorcarpenter15、@gcanlin、@aoshen02、@linitra24、@mhuzaifa3、@Isotr0py、@Etelis、@MatthewBonanni、@TheEpicDolphin、@zupengwang、 @atalman、@NickLucche、@rasmith、@elvircrn、@JasonKeyiL、@Hotragn、@waizuichougou、@pmanczak、@divakar-amd、@he-yufeng、@xuebwang-amd、@qgallouedec、@esmeetu、@ZeldaHuang、@Prudhvivuda、@chaunceyjian、@zxd1997066、 @louie-tsai、@andyxning、@pisceskkk、@tjtanaa、@qli88、@tlrmchlsmth、@LopezCastroRoberto、@micah-wil、@hongxiayang、@BabyDrangoner、@yimdev、@mganczarenko、@SageMoore、@biswapanda、@sfeng33、@russellb、@itayalroy、 @bigPYJ1151、@drakosha、@qwerqwerqwe8688-jpg、@akii96、@shen-shanshan、@meiyeh123、@reidliu41、@yma11、@frgossen、@lukealonso、@tanchao、@Fangzhou-Ai、@vllm-agent、@djramic、@andrewbcohere、@zyongye、 @gty111、@ShuoleiWang、@ZHIHANCHEN03、@KurodaKanbei、@alexeldeib、@khushali9、@xiaohuguo2023、@hungnnvidia、@this Jiang、@arpera、@ShengleiFu、@zhenwei-intel、@jungjiyu、@yzong-rh、@charlifu、@hclsys、 @Ronald1995、@mkhazraee、@YukioZzz、@theamalsebastian、@030611、@cr-zhao、@jbyczkow、@tommy-asai-sonarsource、@jikunshang、@bobboli、@LH-and-FPGA、@SayHelloToWorld、@kkt-cohere、@floatlibai、@rajathpi、 @lxy-alexander、@gangula-karthik、@ActiveSky、@fxmarty-amd、@sstamenk、@mpashkovskii、@LiuYinfeng01、@chaojun-zhang、@Oxygen56、@daviswer、@vineethsaivs、@Agoni-02、@Andy365-365、@wangxiyuan、@haoyangqian、@Naveassaf、 @eilamc14、@sseanliu、@y0hnn、@dineshchitlangia、@yiliu30、@Lossfull、@lxyxinyi、@vanshbhatia-amd、@jcotant-inferact、@ Chengy-sysu、@92hyungjun、@xyang16、@AmitMY、@zllion、@AnkitNakhawa、@dmvevents、 @lengrongfu、@JC-ut0、@Eoin-Houstoun、@sagearc、@wjabbour、@sandeep-maddipatla、@seonjinn、@Yiqin-17、@kyleliang-nv、@thanhpt1110、@MKQuantum、@matthewkotila、@vhagor、@tthakkal、@ShuaiShao93、 @hagaikwa-redhat、@shijuzhao、@elwhyjay、@Gregory-Pereira、@ErenAta16、@morrison-turnansky、@DCoEngine、@SoluMilken、@xianbaoqian、@kliuae、@nascheme、@waynehacking8、@stecasta、@vMaroon、@zwischenraum、@Rohan138、@Zhou248、 @brianosaurus、@anmolgupt、@wyettzeng、@hao-aaron、@frank-suwen、@danisereb、@fuzzifikation、@KernelClint、@thunguo、@studioego、@shipiyouniao、@cjackal、@LioEinaudi、@guan404ming、@libinta、@mhoqueanik、@minjang、 @Edge-Explorer、@shepark、@JiataiWang、@jiahaoliang、@therealnaveenkamal、@ColinZ22、@tolleybot、@almogtavor、@simon-veitner-redhat、@hyeongyun0916、@nicholaskh-ai、@mawong-amd、@adisivaprasad、@ray24777、@robertgshaw2-redhat、 @new-TonyWang、@oliverholworthy、@fanxingran、@lucianommartins、@hallerite、@avininjamay8、@VBS2004、@omerpaz95、@Sunt-ing、@Hert4、@wangshangsam、@cogniera、@jeffreywang88、@Xarbirus、@fynnsu、@jiahanc、@zixi-qi、@prakharPant、 @haic0、@maobaolong、@xinyu-intel、@CHIPMUNK-T0T、@hangy-amd、@afriedri、@canlahlah、@Alnusjaponica、@ukannika、@pranavthakur0-0、@zzaebok、@Xuan-1998、@JulianZJN、@roachsinai、@ivanium、@CalvinXKY、@yu-xin-c、 @rchalamala、@QwertyJack、@Kaif10、@yudigege86、@yiz-liu、@dkrisman、@simmondanielsson、@machero、@CherryLemon、@ima-helikoptaaa、@RookieCoder-Camera、@LironKesem、@peakcrosser7、@eligotts、@foraxe、@zufangzhu、@tianmu-li、 @jl9876，@luc
ifer1004、@liranschour、@maithilijoshi20、@li-ukumar、@andyluo7、@Zhenzhong1、@faaany、@joerowell、@juhi10071998、@ganeshr10、@Priyjain-amd、@SubSir、@luyixiao95、@djw8605、@codex

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.29.0` · 📅 发布：2026-09-09 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.29.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
