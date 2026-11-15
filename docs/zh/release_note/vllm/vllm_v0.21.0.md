---
title: "vllm v0.21.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.21.0"
version: "v0.21.0"
published: "2026-05-15"
type: "minor"
lang: "zh"
---

# vllm v0.21.0

## 亮点

This release features 367 commits from 202 contributors (49 new)!

* **Transformers v4 deprecated**: This release formally deprecates `transformers` v4 support (#40389).用户应迁移到 `transformers` v5。
* **C++20 build requirement**: vLLM now requires a C++20-compatible compiler for compatibility with PyTorch (#40380).这是一个**破坏性的构建更改**。
* **KV 卸载 + 混合内存分配器 (HMA)**：KV 卸载子系统现在与混合内存分配器集成，包括调度程序端滑动窗口组支持和完整的 HMA 支持（#41228、#41445、#39571）。
* **具有思维预算的推测性解码**：推测性解码现在尊重推理/思维预算，从而为推理模型提供正确的规范解码（#34668）。
* **Blackwell 上的 TOKENSPEED_MLA 后端**：新的 TOKENSPEED_MLA 注意力后端可用于 Blackwell GPU 上的 DeepSeek-R1/Kimi-K25 预填充 + 解码 (#41778)。

### 模型支持
* 新架构：MiMo-V2.5 (#40967)、Laguna XS.2 (#41129、#41880)、Moondream3 (#32325)、Qianfan-OCR (#40136)、Cohere MoE (#40817)、Cohere Eagle (#42078)。
* Speculative decoding: EAGLE for Mistral (#41024), Gemma4 MTP (#41745), MTP for MiMo-V2.5 (#41905), Cohere Eagle (#42078).
* DeepSeek V4：AMD/ROCm 支持 (#40871)、管道并行性 (#41694)、`max` 推理工作 (#40982)、分类服务修复 (#41957)。
* Tool calling: Cohere reasoning and tool parsers (#40422), LFM2/2.5 tool parser (#39243).
* Gemma3/Gemma4：`hidden_act` 变体支持 (#40588)、管道并行性修复 (#40786)、MoE 修复 (#41206、#41574、#41401)、工具解析器崩溃修复 (#41991、#42188)。
* Model Runner V2: Qwen3.5/Mamba hybrid model support (#35520), `logprob_token_ids` support (#40559).
* CUDA graph: ViT CUDA graph support for Qwen2.5-VL (#40830).
* Compatibility: Vendor HCXVisionConfig for Transformers v5 (#38447), legacy `rope_type` checkpoint support (#41734).

### 引擎核心
* KV 卸载 + HMA：调度程序端滑动窗口组 (#41228)、完整的 HMA 支持 (#41445)、多连接器 HMA (#39571)、每个作业存储完成 (#39186)、OffloadingConnector 中的 DCP/PCP 支持 (#41549)、用于分布式 KV 卸载的 MooncakeStoreConnector (#40900)。
* 推测性解码：思考预算支持（#34668）、独立起草者注意后端选择（#39930）、带警告的多模式模型支持（#41752）、每步分配消除（#41043）。
* Model Runner V2：拒绝采样接受率修复（#40651），在草稿预填充之前跳过元数据重建（#40410），在草稿解码步骤之间重建元数据（#41162），Qwen3.5/Mamba 混合支持（#35520）。
* Routing: Replace routing replay with device cache and async D2H pipeline (#39917).
* Ray: RayExecutorV2 enabled by default (#41421), actor name collision fix for DP > 1 (#40398).
* 稳定性：两阶段暂停以防止调度程序死锁 (#39366)、线程安全的 HF 分词器包装器 (#41181)、模型加载期间通过 `max_split_size_mb` 预防 OOM (#41268)。
* IndexCache 对 DSA 模型的支持 (#37735)。

### 硬件与性能
* **NVIDIA Blackwell**：用于 DSR1/Kimi-K25 的 TOKENSPEED_MLA 后端 (#41778)、更快的每代币 FP8 组量化打包内核 (#41326)、NVIDIA Thor/SM110 上的 FP8 (#39712)、用于不兼容尺寸的 CUTLASS 缩放毫米 (#41868)。
* **性能**：默认启用 FlashInfer top-k/top-p 采样器 (#40376)、针对 ViT 的 FP8 FlashInfer 注意力 (#38065)、TurboQuant 共享 dequant 缓冲区 (#40941)、`AllPool.forward` 速度提高 51% (#41163)、池化中的 GPU<->CPU 同步消除 (#41433) 和注意力 (#41434)、 numpy 零拷贝嵌入序列化 (#41681)、多模式处理器跳过纯文本 (#41246)、FlashInfer FP8 异步 TP 融合 (#39505)、NVFP4 all-gather GEMM 融合用于 AsyncTP (#41882)、重新启用 DP/PP 的 allreduce+RMS 融合 (#41458)、DeepSeek bf16→fp32通过 `torch.mm` (#41300)、稀疏后端的持久 MLA (#41990)、可配置的 safetensors 检查点预取 (#41499)、融合的 mhc_post_pre 内核 (#41536)、2D 网格 W8W8 组量化内核 (#42153)、KV 缓存交换的宽松内存排序 (#39306)。
* **AMD ROCm**：ROCm 7.2.2 (#41386)、DBO（动态批量优化）(#34726)、AITER Fused Allreduce+RMSNorm (#37646)、Qwen3-Next 的 Fused Shared Expert (FSE) (#39280)、DeepSeek V3.2 TP4 AITER MLA (#41835)、GDN 线性注意力融合(#40711)、消除 AITER 中冗余的 MoE 缓冲区副本 (#41713)、CPU 卸载支持 (#40549)、DeepEP API 更新 (#39721)、限制 Triton 分页注意力块大小以修复共享内存 OOM (#38502)。
* **CPU**：AMX/AVX-512 的 FP8 注意力 (#39445)、FP8 W8A16 线性 (#41186)、FP8 W8A16 MoE (#41314)、DNNL AVX2 W8A8 Int8 (#41318)、Qwen 3.5/3.6 的门控 DeltaNet 注意力(#41025)、RISC-V OMP 线程自动绑定 (#40569)。
* **Intel XPU**：Top-k/top-p 示例内核 (#39285)、out-of-place all-reduce (#41808)、LoRA 支持 (#38206)。
* **IBM Power**: VSX attention backend (#40451).
* **FlexAttention**：重新启用批量不变模式（#40842）。
* **MLA**：抽象的 MLA 预填充后端，消除了 cuDNN 依赖 (#32623)。

### 大规模服务
* 分类服务：P 和 D 之间的双向 KV 缓存传输 (#32553)、NIXL 传输重新设计 (#40731)、EPLB 内存开销优化 (#40013)、NIXL 连接器提升到 1.x (#42364)、用于传输可观察性的 Mooncake KVConnectorStats (#40414)、NIXL P 节点预准入拒绝通知(#41269)，跳过 P 等级的 KV 块释放 (#40449)。
* DCP: Pack output and LSE in DCP A2A (#41160).
* MoE：用于树外 MoE 运行程序的 PluggableLayer 接口 (#35178)。
* LoRA：初始专家并行 (EP) 支持 (#40867)、Qwen3.5 LoRA 融合修复 (#37912)。

### 量化
* **NVFP4**：KV 缓存支持 (#40177)、Hopper 和 AMD 的 Triton dequant/QDQ 仿真内核 (#40033)、Gemma4 的 TRT-LLM NvFP4 融合 MoE 上的 GELU (#41050)、ModelOpt NVFP4 W4A16 (#41769)、用于 AsyncTP 的 NVFP4 全收集 GEMM 融合 (#41882), GLM4-MoE NVFP4 loading fix (#41755).
* **MXFP4**：嗡嗡作响的 MXFP4 MoE 后端 (#41083)，FlashInfer CUTLASS MXFP4-MXFP8 MoE 修复 (#42089)。
* **TurboQuant**：混合模型和统一量化支持 (#39931)。
* **压缩张量**：允许非显式忽略的配置（#41965）。
* **FP8**：偏差加载修复 (#41424)，FlashInfer 自动调谐暂时禁用以确保正确性 (#41524)。
* **DSV4**：改进的融合索引器 Q 定量内核 (#41428)。

### API 和前端
* **响应 API**：使用 `required` 进行流式传输工具/函数调用 (#40700) 和命名工具/函数选择 (#41110)，重新提交缺少字段的输出项 (#41355)。
* **OpenAI 兼容性**：响应中的 `system_fingerprint` 字段（#40537）、`prompt_embeds` 内容部分支持（#40720）、`defer_loading` 和 `tool_reference` 支持（#40190）、在聊天完成响应中呈现提示文本（#42052）、容忍强制工具选择中的空内容（#40148）。
* **工具调用**：带有用于严格工具调用+推理的结构标签的 XGrammar 0.2.0 (#40894)、Cohere 推理/工具解析器 (#40422)、LFM2/2.5 工具解析器 (#39243)。
* **Tokenizer**: Fastokens support (#41741).
* **RLHF**: Explicit `/start_weight_update` and `/finish_weight_update` APIs (#39212).
* **ASR**: Engine request abort on cancellation (#41266).
* **Configuration**: `VLLM_SKIP_MODEL_NAME_VALIDATION` env var (#34676), configurable model weights loading tracking (#41086), Triton JIT compilation monitor (#40137).

### 构建和依赖关系
* **突破**：PyTorch 兼容性需要 C++20 (#40380)。
* **Breaking**: Transformers v4 deprecated (#40389).
* Docker image size reduced by ~2.5 GB via deferred FlashInfer cubin download (#41134).
* CUDA 13.0 wheels switched to PyTorch manylinux_2_28 base (#41416).
* DeepGEMM 捆绑轮为每个 Python 构建，以实现 CPython 兼容性 (#41516)。
* Container image provenance metadata embedded (#40653).
* tpu-inference upgraded to v0.19.0 (#41844).
* NIXL connector bumped to 1.x (#42364).
* ROCm 7.2.2 (#41386).

## 贡献者
@AndreasKaratzas、@haosdent、@khluu、@yewentao256、@stecasta、@mgoin、@Isotr0py、@hmellor、@chaunceyjian、@jeejeelee、@noooop、@MatthewBonanni、@njhill、@zyongye、@yzong-rh、@ronensc、@NickLucche、@chaojun-zhang、@dzhengAP、 @chfeng-cs、@TheEpicDolphin、@esmeetu、@wzhao18、@ZJY0516、@juliendenize、@kylesayrs、@fadara01、@Etelis、@tianmu-li、@arpera、@ekagra-ranjan、@orozery、@wxsIcey、@jikunshang、@izhuhaoran、@rasmith、@russellb、 @Lucaskabela、@Harry-Chen、@alec-flowers、@pmaybank、@Terrencezzj、@hickeyma、@Baekpica、@itej89、@fxmarty-amd、@WoosukKwon、@juhi10071998、@sychen52、@baonudesifeizhai、@vllmellm、@johncalesp、@the-david-oy、 @lucianommartins、@bittoby、@Dao007forever、@lyd1992、@yuwenzho、@lesj0610、@sfeng33、@micah-wil、@akii96、@yma11、@SoluMilken、@mmangkad、@SiluPanda、@ojhaanshika、@zhandaz、@bhoomit、@simon-mo、@msanft、 @angelayi、@anthonsu、@artem-spector、@zhangxin81、@benoittgt、@joerowell、@yangrz7、@chelnnexy、@liangel-02、@walterbm、@rishitdholakia13、@SKRohit、@BugenZhao、@JaredforReal、@amd-lalithnc、@frgossen、@h-avsha、 @DarkLight1337、@danisereb、@laithsakka、@Bortlesboat、@wangluochao902、@Rohan138、@hao-aaron、@puririshi98、@roikoren755、@heachary、@UranusSeven、@dsingal0、@ChenxiQ、@snadampal、@ilmarkov、@wendyliu235、@lequytra、 @JisoLya、@LuisRobaina、@sniper35、@eicherseiji、@Yuyi-Ao、@raviguptaamd、@sungsooha、@ganyi1996ppo、@andylolu2、@FredericOdermatt、@ProExpertProg、@rbrugaro-amd、@mcsantiago、@hnt2601、@jinzhen-lin、 @taneem-ibrahim、@tomeras91、@alex-jw-brooks、@Aktsvigun、@HanFa、@netanel-haber、@JasonKeyiL、@gshtras、@joa-stdn、@Seven-Streams、@JartX、@xuechendi、@BowenBao、@Akashcodes732、@jeffreywang-anyscale、@czhu-cohere、 @zhewenl、@marvinzh、@Lidang-Jiang、@gcanlin、@whx-sjtu、@S1ro1、@liulanze、@Dhruvilbhatt、@laviier、@wi-adam、@aaab8b、@yuankaichen-amd、@ZhanqiuHu、@QwertyJack、@viktorpusTT、@divakar-amd、@starkwj、 @benchislett、@jcyang43、@JLiu4Coding、@xy3xy3、@hongxiayang、@amd-mghanimi、@wenyili、@bigPYJ1151、@s-yanev、@AlonKejzman、@noobHappylife、@TomerBN-Nvidia、@MeganEFlynn、@liuzijing2014、@jbuchananr、@lokashrinav、 @ssam18、@dllehr-amd、@gmagogsfm、@tpopp、@tjtanaa、@simonanielsson、@zhenwei-intel、@HiroakiMikami、@nholmber、@SumanthRH、@LucasWilkinson、@maeehart、@rishaps、@r-barnes、@gau-nernst、@Kermit-C、@tdoublep、 @aoshen02、@Naveassaf、@wangxingran222、@cvan20191、@AbhiOnGithub、@abdulrahman-cohere、@jmamou、@Flink-ddd、@bnellnm、@hqhq1025、@gnovack、@wangxiyuan、@princepride、@jiahanc、@LCAIZJ、@ovidiusm

## 新贡献者

* @abdulrahman-cohere 在 https://github.com/vllm-project/vllm/pull/41266 中做出了第一个贡献
* @AbhiOnGithub 在 https://github.com/vllm-project/vllm/pull/42180 中做出了第一个贡献
* @Aktsvigun 在 https://github.com/vllm-project/vllm/pull/40788 中做出了第一个贡献
* @amd-mghanimi 在 https://github.com/vllm-project/vllm/pull/41713 中做出了第一个贡献
* @Baekpica 在 https://github.com/vllm-project/vllm/pull/41206 中做出了第一个贡献
* @benoitgt 在 https://github.com/vllm-project/vllm/pull/41134 中做出了第一个贡献
* @bittoby 在 https://github.com/vllm-project/vllm/pull/41690 中做出了第一个贡献
* @chelnnexy 在 https://github.com/vllm-project/vllm/pull/40754 中做出了第一个贡献
* @ChenxiQ 在 https://github.com/vllm-project/vllm/pull/40956 中做出了第一个贡献
* @chfeng-cs 在 https://github.com/vllm-project/vllm/pull/42066 中做出了第一个贡献
* @cvan20191 在 https://github.com/vllm-project/vllm/pull/40951 中做出了第一个贡献
* @dzhengAP 在 https://github.com/vllm-project/vllm/pull/41423 中做出了第一个贡献
* @ghphotoframe 在 https://github.com/vllm-project/vllm/pull/40859 中做出了第一个贡献
* @HiroakiMikami 在 https://github.com/vllm-project/vllm/pull/40588 中做出了第一个贡献
* @itej89 在 https://github.com/vllm-project/vllm/pull/39721 中做出了第一个贡献
* @JasonKeyiL 在 https://github.com/vllm-project/vllm/pull/41068 中做出了第一个贡献
* @jbuchananr made their first contribution in https://github.com/vllm-project/vllm/pull/39243
* @JisoLya 在 https://github.com/vllm-project/vllm/pull/41363 中做出了第一个贡献
* @JLiu4Coding 在 https://github.com/vllm-project/vllm/pull/41832 中做出了第一个贡献
* @juhi10071998 在 https://github.com/vllm-project/vllm/pull/41050 中做出了第一个贡献
* @Kermit-C 在 https://github.com/vllm-project/vllm/pull/42076 中做出了第一个贡献
* @lequytra 在 https://github.com/vllm-project/vllm/pull/41401 中做出了第一个贡献
* @Lidang-Jiang 在 https://github.com/vllm-project/vllm/pull/38099 中做出了第一个贡献
* @liulanze 在 https://github.com/vllm-project/vllm/pull/41571 中做出了第一个贡献
* @lokashrinav 在 https://github.com/vllm-project/vllm/pull/41681 中做出了第一个贡献
* @LuisRobaina 在 https://github.com/vllm-project/vllm/pull/40720 中做出了第一个贡献
* @maeehart 在 https://github.com/vllm-project/vllm/pull/42061 中做出了第一个贡献
* @marvinzh made their first contribution in https://github.com/vllm-project/vllm/pull/40136
* @mcsantiago 在 https://github.com/vllm-project/vllm/pull/41492 中做出了第一个贡献
* @MeganEFlynn 在 https://github.com/vllm-project/vllm/pull/41880 中做出了第一个贡献
* @nholmber 在 https://github.com/vllm-project/vllm/pull/39280 中做出了第一个贡献
* @pmaybank 在 https://github.com/vllm-project/vllm/pull/41012 中做出了第一个贡献
* @raviguptaamd 在 https://github.com/vllm-project/vllm/pull/34726 中做出了第一个贡献
* @s-yanev 在 https://github.com/vllm-project/vllm/pull/41755 中做出了第一个贡献
* @S1ro1 在 https://github.com/vllm-project/vllm/pull/39213 中做出了第一个贡献
* @Seven-Streams 在 https://github.com/vllm-project/vllm/pull/40894 中做出了第一个贡献
* @SiluPanda 在 https://github.com/vllm-project/vllm/pull/40907 中做出了第一个贡献
* @SKRohit 在 https://github.com/vllm-project/vllm/pull/40786 中做出了第一个贡献
* @snadampal 在 https://github.com/vllm-project/vllm/pull/32553 中做出了第一个贡献
* @sniper35 在 https://github.com/vllm-project/vllm/pull/32325 中做出了第一个贡献
* @ssam18 made their first contribution in https://github.com/vllm-project/vllm/pull/41486
* @the-david-oy 在 https://github.com/vllm-project/vllm/pull/40737 中做出了第一个贡献
* @wangluochao902 在 https://github.com/vllm-project/vllm/pull/41043 中做出了第一个贡献
* @wenyili 在 https://github.com/vllm-project/vllm/pull/41901 中做出了第一个贡献
* @wi-adam 在 https://github.com/vllm-project/vllm/pull/40749 中做出了第一个贡献
* @xy3xy3 在 https://github.com/vllm-project/vllm/pull/40820 中做出了第一个贡献
* @yangrz7 在 https://github.com/vllm-project/vllm/pull/40449 中做出了第一个贡献
* @yuankaichen-amd 在 https://github.com/vllm-project/vllm/pull/40390 中做出了第一个贡献
* @zhangxin81 在 https://github.com/vllm-project/vllm/pull/39904 中做出了第一个贡献

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.21.0` · 📅 发布：2026-05-15 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.21.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
