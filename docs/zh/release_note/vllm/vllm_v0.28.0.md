---
title: "vllm v0.28.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.28.0"
version: "v0.28.0"
published: "2026-08-26"
type: "minor"
lang: "zh"
---

# vllm v0.28.0

#v0.28.0

## 亮点

此版本包含 270 名贡献者（76 名新贡献者）的 584 次提交！

* **Kimi-K3 性能提升**：Kimi-K3 跨堆栈的主要优化工作 — 解码上下文并行 (DCP) 支持 (#50484)、融合 FlashKDA 解码和预填充内核 (#50654、#51311、#52458)、MegaMoE 的 SiTU 激活支持 (#50510)、用于序列并行的 GEMM-RS (#52079)，组合all-gathers 具有 1.5~3 倍内核级加速 (#51070)、自适应投机代币预算，可提供约 60% 更好的 DSpark TTFT (#51725)，以及可选的共享专家分片，每个 GPU 节省约 17 GiB 内存 (#50912)。 Kimi-K3 现在也可以通过 V2 模型运行器在 ROCm 上运行 (#51653)。
* **DeepSeek V4**：稀疏 MLA 现在可以端到端地用于纯解码、MTP 和 DSpark 推测解码 (#51538)，并加入 AMD Quark NVFP4 支持 (#47972)、推理工作提示和映射 (#50580)、稀疏 top-k 元数据内核优化 (#52084、#51967)、缩小急切 CUDA 图形区域（#51430、#52401）以及 gfx11 和 gfx950 上的 ROCm 支持（#47017、#52212）。
* **推测性解码进步**：具有本地卷积和候选选择器的 DFlash2 (#52816)、DSpark 置信计划验证 (#47808) 以及草稿模型自动启用的异步调度 (#48341)。
* **Model Runner V2 成熟**：E/P/D 分解 (#38390)、权重卸载 (#51413)、多层 MTP KV 缓存支持 (#50062)、编码器 CUDA 图 (#49852)、解码器 token-wise 池化 (#50931) 加上 Transformers 池化模型 (#52425)、无注意力模型 (#52374)、和 `thinking_token_budget` 支持（#46727）。
* **分层 KV 缓存卸载**：磁盘卸载支持 (#49644)、通过 `module_path` 的树外二级管理器 (#51007)、部分二级负载结果 (#50321)、分层指标 (#48798) 以及用于与并行性无关的卸载的规范 CPU 布局 (#48414)。
* **Rust 前端和 gRPC**：独立渲染器 (#50289)、gRPC 上的多模态图像推理 (#50368)、显式数据并行排名路由 (#51178) 和 RL 生命周期控制 (#51316)，protobuf 模式现已发布到 Buf (#51276)。
* **新默认值**：`max_num_batched_tokens` 从 8192 提高到 16384 (#51726)，默认为 Mamba 模型启用前缀缓存 (#50991)，Blackwell CUDA 图形捕获默认值提高到 1024 (#49390)。
* **重大更改**：bitsandbytes 支持迁移到树外插件 (#43529)；变形金刚升至 5.15.0 (#51668)；删除了已弃用的 `calculate_kv_scales` 运行时 KV 比例计算 (#49389)； `override_attention_dtype` 已被删除 (#48684)。

## 发布工件

### Python 车轮

|平台|安装 |
|---|---|
| PyPI（CUDA 13.0）| `pip install vllm` |
| PyPI（CUDA 13.0，UV）| `uv pip install vllm --torch-backend=auto` |
| ROCm | `pip install vllm --extra-index-url https://wheels.vllm.ai/rocm/0.28.0/rocm722` |

### Docker 图像

|平台| Docker 图片|
|---|---|
| CUDA 13.0（默认）| `docker pull vllm/vllm-openai:v0.28.0`（`v0.28.0-cu130` 也适用）|
| CUDA 12.9 | `docker pull vllm/vllm-openai:v0.28.0-cu129` |
| CUDA 13.0 + Ubuntu 24.04 | `docker pull vllm/vllm-openai:v0.28.0-ubuntu2404` |
| CUDA 12.9 + Ubuntu 24.04 | `docker pull vllm/vllm-openai:v0.28.0-cu129-ubuntu2404` |
| ROCm | `docker pull vllm/vllm-openai-rocm:v0.28.0` |
|中央处理器 | `docker pull vllm/vllm-openai-cpu:v0.28.0` |
| XPU| `docker pull vllm/vllm-openai-xpu:v0.28.0` |

### 其他文物

本页底部的 **资产** 部分提供了预构建的发布工件，包括：
- 源代码分发 tarball
- 适用于 x86_64 和 arm64 的 CUDA 12.9 Python 轮子
- 适用于 x86_64 和 arm64 的 CUDA 13.0 Python 轮子
- 适用于 x86_64、arm64 和 macOS 的 CPU Python 轮子
## 模型支持
* **新模型**：Muse Glimmer (#51655)、带 BF16、MTP 和解析器支持的 Ling 3.0 Flash (#51045) 以及 FP8 变体 (#51265) 和混合 MXFP4 路由专家 (#52114)、Dots3 NOT 原生多模式支持 (#51255) 和 Interns2mobius (#51149)。
* **Qwen**：在 AMD ROCm 上启用 Qwen3.8 (#50068)、Qwen3.5 GDN 的融合 CUDA 转换后 MTP 解码内核 (#51674)、与推测令牌对齐的 GDN 门 (#51812) 以及针对纯文本检查点的 Qwen3.5 修复 (#50734、#50355)。
* **Transformers 建模后端**：MLA 支持 (#48250)、与硬件无关的模型定义 (#49458)、完全通用的输入嵌入处理 (#51247)、logit softcapping (#52173) 和强化的多模式路径 (#51408、#51657)。
* **LoRA**：用于 Gemma4 的视觉塔 LoRA (#42662)、用于 Keye (#51780) 和 Ultravox (#48215) 的塔/连接器 LoRA。
* **视觉编码器**：Kimi-K2.5 (#50929) 和 Ernie-4.5-VL (#45254, #51461) 的 ViT 完整 CUDA 图，Qwen3-VL 编码器的 torch.compile (#40116)，以及 ViT 中避免的长阻塞 H2D 副本 (#51841)。
* **MoE**：对 Mistral Large 3 和其他 MoE 后端的扩展 EPLB 支持 (#48355)，CuTe DSL 瘦 GEMM 扩展到 GLM-5.2 (#49791)。
* **推测解码覆盖率**：KimiLinear 上声明的 EAGLE3 支持 (#52171)、Qwen3.6 dSpark 接受覆盖率 (#51310)。
* **正确性**：MiniMax-M3 NVFP4 推理 (#48929) 和压缩张量 FP8 MoE SwiGLU 参数 (#46845)、Gemma3n/Gemma4 可变长度音频批量填充 (#50958)、Gemma 4 与即将推出的 Transformers 版本的兼容性 (#49797)，以及 Qwen3-Omni 在没有音轨的视频上崩溃（＃48420）。
* **多模式性能**：融合设备上多模式预处理标准化 (#50411)、更快的占位符和令牌匹配扫描 (#50716)，并避免重复的提示更新扫描 (#51774)。

## 引擎核心
* **推测性解码**：DSpark 置信调度验证 (#47808)、top-k DSpark 马尔可夫投影 (#49969)、具有本地卷积和候选选择器的 DFlash2 (#52816)、草稿模型自动启用的异步调度 (#48341)、与 local-argmax 草稿令牌融合的 MTP 尾随 all-reduce (#49793) 以及推测调度的自适应预算输入令牌（#51725）。
* **KV 缓存和调度**：MLA 分块上下文的每个请求调度 (#50613)、具有细粒度前缀匹配的部分尾部前缀重用 (#50507)、KV 缓存布局重构中后端发布的 KV 打包 (#51612、#51704)、前缀缓存关闭时恢复的 LIFO 自由块重用顺序 (#51482) 以及优先跳过静默请求调度已修复（#49206）。
* **性能**：继续消除执行路径上的 GPU<->CPU 同步（#51458、#51738、#52369），现在由 CI 同步检查（#43107）保护，具有谓词过滤的新 JIT 预热基础设施（#49315），使用 8 个扭曲启动的 top-k/top-p Triton 采样器（#51507），在离线波束搜索中跳过去标记化(#50333)、Mask Replay (#49577)、优化的长上下文 MLA 缓存收集 (#51739) 以及 HF 修订版解析为每次模型加载一次提交哈希 (#49990)。
* **Hybrid/Mamba**：默认情况下启用前缀缓存 (#50991)、Mamba 注意力模块重构的最后部分 (#44857)、状态复制 Triton 内核的 3D 网格平铺 (#49436) 以及在编码器上限之前应用 Mamba 对齐 (#51603)。
* **RL 工作流程**：有状态训练器通过 NCCL 和稀疏 NCCL 发送 (#50902)，用于标签选择性 GPU 内存释放的 `CuMemAllocator.discard()` (#52514)，启用 LoRA 时修复的 2 级睡眠/唤醒/重新加载 (#39935)，并使用标准化示例重写权重传输文档 (#51729)。
* **启动稳健性**：单节点执行器的 file:// rendezvous 消除了启动端口竞争 (#50999、#51652)，在引擎启动期间监视前端进程 (#43417)，修复了 DP 保留端口上的 `get_open_port()` 活锁 (#50965)，并且不再在每次设备功能检查时重新初始化 NVML （＃50393）。

## 硬件与性能
* **NVIDIA**：SM12x 上的 FlashInfer XQA 解码支持 (#49718)、SM100 上的 CuTeDSL 融合查询内核 (#49792)、DSA 解码内核的程序相关启动 (#50230)、SM90 上 MTP=3 的本机 DSA 解码路径 (#52164)、GB10 融合 MoE FP8 调整配置 (#52502)，以及B12X 密集线性后端 (#52016)。
* **AMD ROCm**：torch 2.12 / triton 3.7 堆栈凹凸 (#50607)、GFX120x 上启用 AITER 和 FP8 推理 (#43615)、gfx11 上的 DeepSeek-V4 (#47017)、gfx950 上优化的 Triton 稀疏 MLA 解码 (#52212)、FlyDSL 解码注意内核用于 4 位 TurboQuant KV 缓存 (#47896) 和 gfx942 上的 fp8 MQA logits 内核 (#49544)、融合的 Kimi-K3 KDA 解码内核 (#50654)、融合的 bf16→fp32 路由器 GEMM (#50268)、受支持的 WSL2 内核上的固定内存 (#50126) 以及预洗牌稀疏索引16 个代币块 (#51216)。
* **Intel XPU**：火炬线性后端，包括分块 GEMM（#49664、#50826）、INC DeepSeek V4 模型的 MXFP8 线性权重（#48476）、与计算重叠的异步调度 PP 采样令牌广播（#51650）、添加到发布管道中的 XPU 轮（#52108）、针对 Arc Pro 调整的 Mamba SSU 配置B70 (#50534) 和 UVA 重量卸载修复 (#51770)。
* **CPU**：MLA 后端，以便 DeepSeek-V2/V3 可以在 CPU 上运行 (#49453)、triton-cpu 轮 (#52092)、在 s390x 上启用 GPTQ 和 AWQ (#51148) 以及 tcmalloc (#50841)、通过 AMD 上的 zentorch 路由的 BF16 MoE (#44201)、未量化的 MoE Power (VSX) 后端 (#51624)、未量化的 MoE 迁移到模块化内核专家结构 (#50133)，以及 MXFP4 块规模折叠为 2 个指令而不是 4 个指令 (#51583)。

## 大规模服务
* **E/P/D 分解**：Model Runner V2 E/P/D 支持 (#38390)、通过 GPU 端预处理删除重复的图像预处理 (#50390)、KV 使用者可以省略多模式嵌入 (#52697)、编码器实例请求保持活动状态直到其图像被编码 (#50275) 以及 EC 连接器调度程序/工作线程元数据管道 (#49579) ＃49585）。
* **KV 卸载**：SimpleCPUOffloadConnector 的磁盘卸载 (#49644)、通过 `module_path` 的树外二级管理器 (#51007)、部分二级负载结果 (#50321)、分层卸载指标 (#48798)、暴露给卸载后端的数据并行拓扑 (#51879)、规范的 CPU 布局与并行性无关的卸载 (#48414)，并避免二次 ARC 批量驱逐 (#50992)。
* **Mooncake**：商店组语义 (#44956)、租户 ID 支持 (#48069) 以及 Docker 映像中的官方轮子 (#51067)。
* **连接器**：传输模式（推/拉）包含在 NIXL 兼容性哈希中 (#50620)、MoRIIO 每层 READ 完成屏障 (#48534)、在 dp=ep=16 处使用 mori-ep/mori-io 的 2P2D 宽 EP (#45043)，以及推连接器中的陈旧远程清理 (#50234)。
* **并行性**：EPLB 平衡性计算已修复并经过测试 (#51813)，密集多节点 DP rescope (#49212)。

## 量化
* **在线量化**：在线 MXFP4 支持 (#49347)、跨 TP 共享的在线权重秤 (#49764)、在线 NVFP4 专家打包中保留的精度 (#50029) 以及跨重新加载重用的在线 NVFP4 MoE 内核 (#50074)。
* **NVFP4**：通过 CUTLASS 实现批量不变的 NVFP4 MoE (#40372)、KV 4-over-6 尺度搜索 (#45187)、具有 SwiGLU-OAI 和 ReLU2 激活的 CuTeDSL MoE (#47106) 以及与模型 dtype 匹配的 out_dtype (#48861)。
* **新内核**：逐块缩放_mm (#49932)、带有仿真内核的 D​​eepSeek-V4 AMD Quark NVFP4 (#47972)。
* **修复**：动态 INT8 W8A8 MoE 配置不再构建为 W8A16 (#50833) 和 TritonExperts 崩溃 (#51411)、FlashInfer CUTLASS 的 MXFP4 转换 (#51038)、MXFP4 的 fp32 权重尺度和每个专家检查点映射 (#51419) 以及融合的块尺度方向（＃50727）。

## API 和前端
* **新功能**：从 HTTP 标头解析请求优先级 (#51089)、会话 ID 插入请求 (#48048)、流解析器引擎中的 `count_reasoning_tokens` (#45802)、`/inference/v1/generate` 上的 `content_parts` (#51478)、所有 `/derender` 请求类上的 `model` 可选 (#51463)、记录的输出令牌 ID在 DEBUG 级别 (#52098)，以及连接到本机基于配置的部署和基准测试的 vLLM Recipes (#51308、#51878)。
* **Rust 前端**：独立渲染器 (#50289)、gRPC 多模态图像推理 (#50368)、显式数据并行排名路由 (#51178)、RL 生命周期控制 (#51316)、开发人员消息中的动态工具 (#51144)、发布到 Buf 的 protobuf 模式 (#51276) 以及MiniJinja 升级到 2.22 (#51235)。
* **人类 API**：对于 client 导致的 `/v1/messages` 错误返回 4xx (#52246)，保留 `disable_parallel_tool_use` (#52021)，并停止序列有界 (#51997)。
* **Cohere**：上游解析器修复 (#51998)、正确报告停止序列 (#51556) 和矢量化二进制嵌入位打包 (#52277)。
* **结构化输出**：请求在 xgrammar 中屏蔽的停止标记，直到语法终止 (#49227、#50595)、`structured_outputs.regex` 中拒绝的 NUL 字节 (#51796)、负标记 ID 因词汇表外而被拒绝 (#51795) 以及从验证器引发的 `VLLMValidationError` (#52394)。
* **鲁棒性**：uvicorn信号处理程序被禁用而不是竞争（#50916），一个统一的入口点异常处理程序（#52261），非对象JSON主体上的400而不是500（#51654，#52528），在昂贵的工作之前限制生成输入（#51447），并且`cache_salt`现在需要非空（＃50816）。

## 安全
* 修复了通过采样率伪造绕过音频解码持续时间保护的 DoS (#49948)； NanoNemotronVL 现在也强制执行音频解码持续时间限制 (#50221)。
* DeepStream 被归类为强制执行像素限制的 GPU 后端 (#50755)。
* `_load_ov2_processor` 由 `resolve_trust_remote_code` 保护（#52952）。
* 文档现在警告 `--api-key` 不会控制所有端点 (#51999)。

## 依赖关系
* 变形金刚 5.15.0 (#51668)、huggingface-hub 1.27.0 (#51422)、fastsafetensors 升级 (#50827)。
* ROCm：火炬 2.12、triton 3.7、torchaudio、torchvision (#50607)。
* 运行时映像升级到 Ubuntu 24.04，选择 rdma-core > 44 (#51058)。
* DeepGEMM 固定在 deepseek-ai nv_dev 提示上 (#52035)，DeepEP 通过完整提交哈希固定 (#52028)，FlashAttention 3 使用 torch stable API 构建 (#49599)。

## 重大变更和弃用
*bitsandbytes 支持现在是树外插件 (#43529)。
* 删除了已弃用的 `calculate_kv_scales` 运行时 KV 比例计算 (#49389)。
* `override_attention_dtype` 已删除 (#48684)。
* `reasoning_content` 输出删除被记录为重大 client 更改 (#50624)。
* KV 卸载分层指标从 `kv_offload_tiering_block_{queries,hits}` 重命名为 `..._chunk_...` (#52812)。
* 删除了 MoE 旧代码 (#51078)。

## 新贡献者
* @acheamponge 在 https://github.com/vllm-project/vllm/pull/49353 中做出了第一个贡献
* @acmore 在 https://github.com/vllm-project/vllm/pull/51259 中做出了第一个贡献
* @anhtra3889 在 https://github.com/vllm-project/vllm/pull/51002 中做出了第一个贡献
* @anujbolewar 在 https://github.com/vllm-project/vllm/pull/50867 中做出了第一个贡献
* @arthurgao2003 在 https://github.com/vllm-project/vllm/pull/48215 中做出了他们的第一个贡献
* @baodii 在 https://github.com/vllm-project/vllm/pull/51215 中做出了第一个贡献
* @bitborne 在 https://github.com/vllm-project/vllm/pull/44956 中做出了第一个贡献
* @bohnstingl 在 https://github.com/vllm-project/vllm/pull/49458 中做出了第一个贡献
* @ccaadaro 在 https://github.com/vllm-project/vllm/pull/51583 中做出了第一个贡献
* @cmiyai 在 https://github.com/vllm-project/vllm/pull/46870 中做出了第一个贡献
* @d4l3k 在 https://github.com/vllm-project/vllm/pull/51097 中做出了第一个贡献
* @dmai-afk 在 https://github.com/vllm-project/vllm/pull/51120 中做出了第一个贡献
* @dmholtz 在 https://github.com/vllm-project/vllm/pull/50977 中做出了第一个贡献
* @efschu 在 https://github.com/vllm-project/vllm/pull/50734 中做出了第一个贡献
* @fangchenli 在 https://github.com/vllm-project/vllm/pull/52277 中做出了第一个贡献
* @fanxingran 在 https://github.com/vllm-project/vllm/pull/51011 中做出了第一个贡献
* @fatday 在 https://github.com/vllm-project/vllm/pull/48171 中做出了第一个贡献
* @fattchris 在 https://github.com/vllm-project/vllm/pull/48861 中做出了第一个贡献
* @fcui-amd 在 https://github.com/vllm-project/vllm/pull/50126 中做出了第一个贡献
* @fede-kamel 在 https://github.com/vllm-project/vllm/pull/50624 中做出了第一个贡献
* @fxfxfxfxfxfxfxfx 在 https://github.com/vllm-project/vllm/pull/49139 中做出了第一个贡献
* @gabriel-peracio 在 https://github.com/vllm-project/vllm/pull/50183 中做出了第一个贡献
* @gchinora 在 https://github.com/vllm-project/vllm/pull/51427 中做出了第一个贡献
* @guanxingithub 在 https://github.com/vllm-project/vllm/pull/50589 中做出了第一个贡献
* @haregali 在 https://github.com/vllm-project/vllm/pull/50716 中做出了第一个贡献
* @hsusul 在 https://github.com/vllm-project/vllm/pull/49613 中做出了第一个贡献
* @iwannagotobed 在 https://github.com/vllm-project/vllm/pull/51664 中做出了第一个贡献
* @jacobzhang22 在 https://github.com/vllm-project/vllm/pull/38771 中做出了第一个贡献
* @jairitAge 在 https://github.com/vllm-project/vllm/pull/51100 中做出了第一个贡献
* @jamesETsmith 在 https://github.com/vllm-project/vllm/pull/51216 中做出了第一个贡献
* @jimmy-adams 在 https://github.com/vllm-project/vllm/pull/47972 中做出了第一个贡献
* @jyan-R 在 https://github.com/vllm-project/vllm/pull/52311 中做出了第一个贡献
* @Kaif10 在 https://github.com/vllm-project/vllm/pull/52528 中做出了他们的第一个贡献
* @karen-sy 在 https://github.com/vllm-project/vllm/pull/48048 中做出了第一个贡献
* @Lin-z-w 在 https://github.com/vllm-project/vllm/pull/48069 中做出了第一个贡献
* @liushujia122 在 https://github.com/vllm-project/vllm/pull/51780 中做出了第一个贡献
* @Luosuu 在 https://github.com/vllm-project/vllm/pull/48789 中做出了第一个贡献
* @mispa-ms 在 https://github.com/vllm-project/vllm/pull/52419 中做出了第一个贡献
* @mkhazraee 在 https://github.com/vllm-project/vllm/pull/50321 中做出了第一个贡献
* @NVShreyas 在 https://github.com/vllm-project/vllm/pull/50911 中做出了第一个贡献
* @pavelzak 在 https://github.com/vllm-project/vllm/pull/52502 中做出了第一个贡献
* @positive666 在 https://github.com/vllm-project/vllm/pull/52329 中做出了第一个贡献
* @rajfirke 在 https://github.com/vllm-project/vllm/pull/51573 中做出了第一个贡献
* @Rapisurazurite 在 https://github.com/vllm-project/vllm/pull/50950 中做出了第一个贡献
* @rchalamala 在 https://github.com/vllm-project/vllm/pull/50487 中做出了第一个贡献
* @RobbieJ 在 https://github.com/vllm-project/vllm/pull/49328 中做出了第一个贡献
* @ruirui6946 在 https://github.com/vllm-project/vllm/pull/52098 中做出了第一个贡献
* @RyanJHamby 在 https://github.com/vllm-project/vllm/pull/48420 中做出了第一个贡献
* @samuelkim7 在 https://github.com/vllm-project/vllm/pull/50333 中做出了第一个贡献
* @shanewidanagama 在 https://github.com/vllm-project/vllm/pull/51901 中做出了第一个贡献
* @shikamd123 在 https://github.com/vllm-project/vllm/pull/45043 中做出了第一个贡献
* @SilenNaihin 在 https://github.com/vllm-project/vllm/pull/39935 中做出了第一个贡献
* @skysnow2001 在 https://github.com/vllm-project/vllm/pull/43615 中做出了第一个贡献
* @Sundaresan-G 在 https://github.com/vllm-project/vllm/pull/50526 中做出了第一个贡献
* @syedalijaseem 在 https://github.com/vllm-project/vllm/pull/47692 中做出了第一个贡献
* @takeing-lying-flat 在 https://github.com/vllm-project/vllm/pull/51391 中做出了第一个贡献
* @tandixit95 在 https://github.com/vllm-project/vllm/pull/50462 中做出了第一个贡献
* @Tejas-Raj01 在 https://github.com/vllm-project/vllm/pull/49206 中做出了第一个贡献
* @theminghuang 在 https://github.com/vllm-project/vllm/pull/51482 中做出了他们的第一个贡献
* @tobymao 在 https://github.com/vllm-project/vllm/pull/51318 中做出了第一个贡献
* @TrainToGPB 在 https://github.com/vllm-project/vllm/pull/50958 中做出了第一个贡献
* @tzulingk 在 https://github.com/vllm-project/vllm/pull/49230 中做出了第一个贡献
* @UgaTheDev 在 https://github.com/vllm-project/vllm/pull/51627 中做出了他们的第一个贡献
* @varoudis 在 https://github.com/vllm-project/vllm/pull/50404 中做出了第一个贡献
* @Vegetog 在 https://github.com/vllm-project/vllm/pull/49876 中做出了第一个贡献
* @vitamin-chaos 在 https://github.com/vllm-project/vllm/pull/47106 中做出了第一个贡献
* @wangxian001 在 https://github.com/vllm-project/vllm/pull/50276 中做出了第一个贡献
* @WillZZZy 在 https://github.com/vllm-project/vllm/pull/46747 中做出了第一个贡献
* @xiaopusun 在 https://github.com/vllm-project/vllm/pull/51495 中做出了第一个贡献
* @xijiaat 在 https://github.com/vllm-project/vllm/pull/50693 中做出了第一个贡献
* @xudonlyu 在 https://github.com/vllm-project/vllm/pull/51682 中做出了第一个贡献
* @yif Jiang 在 https://github.com/vllm-project/vllm/pull/51218 中做出了第一个贡献
* @yu-xin-c 在 https://github.com/vllm-project/vllm/pull/51652 中做出了第一个贡献
* @zcxGGmu 在 https://github.com/vllm-project/vllm/pull/50746 中做出了第一个贡献
* @ziqifan617 在 https://github.com/vllm-project/vllm/pull/51879 中做出了第一个贡献
* @zobinHuang 在 https://github.com/vllm-project/vllm/pull/52164 中做出了第一个贡献

## 贡献者
@yewentao256、@AndreasKaratzas、@njhill、@mgoin、@aoshen02、@khluu、@hmellor、@stefankoncarevic、@taneem-ibrahim、@LucasWilkinson、@chaunceyjian、@jikunshang、@zufangzhu、@bigPYJ1151、@NickLucche、@askliar、@fxmarty-amd、 @Rohan138、@gty111、@zhenwei-intel、@Isotr0py、@jeejeelee、@ZJY0516、@wangxiyuan、@BugenZhao、@yma11、@zyongye、@DarkLight1337、@jperezdealgaba、@zhou9402、@connorcarpenter15、@kliuae、@lucifer1004、 @Alex-ai-future、@aarushjain29、@TheEpicDolphin、@chaojun-zhang、@pmanczak、@WoosukKwon、@BabyDrangoner、@noooop、@almogtavor、@hongxiayang、@fuscof-ibm、@gau-nernst、@zxd1997066、@tlrmchlsmth、@music-dino、 @zexplorerhj、@S1ro1、@jdebache、@sfeng33、@mayuyuace、@ganeshr10、@benchislett、@tzulingk、@gcanlin、@ivanium、@divakar-amd、@R3hankhan123、@sagearc、@vhagor、@ronensc、@micah-wil、@qyYue1389、 @vanshbhatia-amd、@hao-aaron、@ Chengy-sysu、@elvircrn、@take-lying-flat、@omerpaz95、@Etelis、@vllmellm、@frank-suwen、@KernelClint、@Fangzhou-Ai、@louie-tsai、@simmondanielsson、@maxyanghu、@dmai-afk、 @KurodaKanbei、@ziqifan617、@bastefaniak、@ECMGit、@haregali、@cmiyai、@fede-kamel、@drakosha、@vineethsaivs、@zcxGGmu、@TQCB、@skysnow2001、@shenoyvvarun、@karen-sy、@fattchris、@RyanJHamby、@shikamd123、 @namgyu-youn、@zzt93、@abmfy、@reidliu41、@Rapisurazurite、@tandixit95、@mganczarenko、@yimdev、@anujbolewar、@LiuYinfeng01、@lk-chen、@NVShreyas、@huangzhilin-hzl、@varoudis、@Yejing-Lai、 @mkhazraee、@jzakrzew、@TrainToGPB、@waynehacking8、@zixi-qi、@Sundaresan-G、@mindungil、@bitborne、@Wauplin、@jacobzhang22、@zhewenl、@bnellnm、@pisceskkk、@Lin-z-w、@gabriel-peracio、@SilenNaihin、@baodii、 @YunzhuLu、@xwu-intel、@BWAAEEEK、@this Jiang、@maobaolong、@anhtra3889、@JaredforReal、@lvhan028、@xiaolong-intel、@andyxning、@cleonard530、@gnovack、@MatthewBonanni、@wangxian001、@lengrongfu、@Tejas-Raj01、@simon-mo、 @vitamin-chaos、@arpera、@jairitAge、@jimmy-adams、@ILikeIneine、@woosebastian、@haic0、@edwinlim0919、@fcui-amd、@jhu960213、@jinzhen-lin、@coltonottley、@walterbm、@meenchen、@matteso1、@djramic、@gchinora、 @davidjpyu、@tianmu-li、@xiaopusun、@majunze2001、@Vegetog、@puririshi98、@janeyx99、@RobbieJ、@oonyshch、@thegoldenflow、@Srinivasoo7、@fatday、@acheamponge、@efschu、@rajfirke、@fanxingran、@xudonlyu、@lcskrishna、 @xijiaat、@GirasoleY、@d4l3k、@samuelkim7、@tarukumar、@acmore、@theminghuang、@khushali9、@wzhao18、@Priyjain-amd、@yiz-liu、@lkm2835、@dmholtz、@Dao007forever、@liushujia122、@LopezCastroRoberto、@UgaTheDev、 @tuukkjs、@aditi-amd、@guan404ming、@yiliu30、@zou3519、@Luosuu、@JoursBleu、@varun-sundar-rabindranath、@mpashkovskii、@yu-xin-c、@WillZZZy、@vrdn-23、@xyang16、@ccrhx4、@tanpinsiang、@russellb、 @fxfxfxfxfxfxfxfx、@afriedri、@yifjian、@Akashcodes732、@HF-001、@ovidiusm、@arthurgao2003、@TomerBN-Nvidia、@hotTea123、@vx120、@bohnstingl、@qwerqwerqwe8688-jpg、@jasonozuzu-cohere、 @vineetatiwari27、@ruirui6946、@linitra24、@syedalijaseem、@nickus、@yzong-rh、@s3woz、@jhaotingc、@lukealonso、@Jie-Fang、@kzwrime、@xianbaoqian、@velonica0、@ccaadaro、@yisustc、@fangchenli、@iwannagotobed、 @zobinHuang、@rchalamala、@shanjiaz、@jamesETsmith、@stacyroberts、@guanxingithub、@biswapanda、@shanewidanagama、@UranusSeven、@hsusul、@tobymao、@mispa-ms、@jeffreywang88、@SayHelloToWorld、@jyan-R、@oops-oom、@shantipriya-amd、 @andakai、@akii96、@shen-shanshan、@Kaif10、@yitingdc、@positive666、@pavelzak、@Su
b先生，@ywang96

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.28.0` · 📅 发布：2026-08-26 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.28.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
