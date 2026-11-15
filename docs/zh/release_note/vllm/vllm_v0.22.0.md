---
title: "vllm v0.22.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.22.0"
version: "v0.22.0"
published: "2026-05-29"
type: "minor"
lang: "zh"
---

# vllm v0.22.0

## 亮点

This release features 459 commits from 230 contributors (63 new)!

* **DeepSeek V4 成熟度**：DeepSeek V4 在本周期中获得了重大强化 — 模型被重组为专用 `vllm/models/deepseek_v4/` 包（#43004、#43039、#43073、#43077、#43149），获得了 NVFP4 融合 MoE 支持（#42209）、完整 + 分段 CUDA 图（#42604）和 MTP推测性解码（#43385）。大量融合内核（MegaMoE、`mhc`、Q-norm、索引器、稀疏 MLA）和 ROCm 奇偶校验修复与精度修复一起发布（#42810、#43710）。
* **Model Runner V2 advances toward default**: MRv2 is now default for Qwen3 dense models. vLLM will fall back to MRv1 for features that aren't yet supported in MRv2 (#39337). sleep-mode weight reload (#42673), `update_config` (#42783), and shared KV-cache layers (#35045), plus many correctness fixes.
* **实验性 Rust 前端**：新的 Rust 前端集成落地 (#40848)，实现已移至树中 (#43283) 和用于数据并行服务的 DP Supervisor (#40841)。
* **批量不变性，更快**：批量不变推理获得了 Cutlass FP8 支持，以实现 **28.9% 端到端延迟改进** (#40408)、SM80 上的编译模式支持 (#42456) 和 NVFP4 Cutlass 线性路径 (#39912)。
* **多层 KV 缓存卸载**：新的多层 KV 缓存卸载框架 (#40020) 具有 Python 文件系统二级 (#41735)、DSv4 支持 (#43142) 和 Mooncake 磁盘卸载 (#42689)，将卸载扩展到 CPU 内存之外。

### 模型支持
* New architectures: MiniCPM-V 4.6 (#41254), InternS2 Preview (#42705), OpenVLA (#42654), MolmoWeb `hf_overrides` docs (#42163); EXAONE-4.5 aligned with Transformers update (#42246).
* 推测性解码：自定义可调用提议者后端 (#39487)、后规范 EAGLE-3 推测器 (#42764)、peagle 推测器 (#41826)、`extract_hidden_states` 中的混合注意力模型 (#39949)、NemotronH 的非 MTP 推测 (#43130)、MRv2 中的共享 MTP 权重 (#42538)。
* DeepSeek V4：NVFP4 MoE (#42209)、CUDA 图完整/分段 (#42604)、MTP (#43385)、模型包重构 (#43004、#43039、#43073、#43077)、稀疏 MLA + 压缩器重构 (#43149、#43710)、MegaMoE 输入准备内核移动（＃43632）。
* Qwen3.5/3.6：GDN 输出投影扁平化 (#42311)、GatedDeltaNet Marlin TP≥2 修复 (#36329)、ViT 完整 CUDA 图 (#42151)、Qwen3.5/MTP/Qwen3-VL 的 runai-streamer 权重加载 (#42521、#42716)、KDA 块预填充 exp2 语义（＃43195）。
* Gemma3/Gemma4：混合分辨率图像协同批处理崩溃修复（#42217）、MoE 路由闭包修复（#42250）、工具解析器浮点损坏修复（#42128）、图像/视频批量视觉编码器（#43169）、多 GPU 修复（#42630）。
* Kimi-K2.5: skip vision-tower dtype conversion under quantization (#42869), `mm_projector` dtype fix (#42081).
* Cohere: enable Cohere MoE (#43143), pipeline parallelism for Cohere vision (#42819).
* 工具调用：Apertus 工具解析器 (#41154)、Qwen3Coder `anyOf`/`oneOf`/`$ref` 分辨率重新登陆 (#37831)、跨 MiniMax-M2 / DeepSeek-V3.2 / Seed-OSS 解析器共享 `coerce_to_schema_type` (#43006、#43019、#43140)。
* ViT CUDA graph: Qwen2-VL (#41736), Step3-VL encoder (#42224), Qwen3.5 (#42151), FlashInfer metadata for Qwen2.5-VL vision attention (#42787).

### 引擎核心
* Model Runner V2：Qwen3-默认密集预言机 (#39337)、睡眠模式重新加载权重 (#42673)、`update_config` (#42783)、共享 KV 缓存层 (#35045)、FP32 gigbel 采样 (#41775)、使用连接器自动回退到 MRv1 (#42955)、 `logprob_token_ids` correctness (#43125, #41761), prompt-logprobs size fix (#42778).
* KV 卸载：多层框架 (#40020)、Python 文件系统辅助层 (#41735)、DSv4 支持 (#43142)、层卸载后续 (#42529)、首选 HND 布局 (#41928)、`reset_cache()` (#41956)、每个请求跟踪 (#42507)、存储延迟修复（#41945）。
* MoE 重构：`ExpertMapManager` (#41046)，专家移至 `experts/` (#42334)，FusedMoE 的 `RoutedExperts` 别名 (#40735)，FusedMoE 的 EPLB 重构 (#41055)。
* Mamba：注意模块重构 (#41126)、Mamba2 SSD 内核预热 (#39822)、bf16 SSM 缓存 (#41680)、GPU 端状态后处理融合内核 (#40172)、运行单令牌扩展作为解码 (#42430)。
* KV 事件：发出 KV 缓存元数据 (#40984)。
* 分配器：手动启用 cumem 分配器（#33648），流感知的免费回调（#43020）。
* elastic-EP: stage/commit MoE quant method on reconfigure (#40881).

### 硬件与性能
* **NVIDIA Blackwell / SM12x**：用于 SM120/121 的 FlashInfer b12x MoE + FP4 GEMM (#40082)、SM12.1 上的每张量 FP8 CUTLASS (#41215)、用于 FlashInfer TRTLLM 注意力的 `head_dim=512` (#38822)、FlashInfer Blackwell GDN 预填充 (#40717)、GDN 预填充SM100 的内核 (#43273)。
* **性能**：批次不变的 Cutlass FP8 (+28.9% E2E) (#40408)、CutlassFP8 填充预处理 (+13.5% TTFT) (#42651)、填充的 NVFP4 Quant 内核 (+2.4–5.7% E2E) (#42774)、 GPU<->CPU 同步消除 1/n (#41429) 和 4/n (#42347)、MLA 的融合 RoPE+KVCache+q_concat (#40392)、MLA `compute_prefill_context` / `_v_up_proj` 优化 (#42460、#42561)、惩罚 Triton 内核 (#40657)、融合中的 `do_not_specialize` FP8 RoPE (#42849), FULL CUDA graph capture for TRITON_MLA decode (#42885).
* **AMD ROCm**：DSV4 功能 + 精度修复（#42810、#43679 Tilelang MHC）、闪存稀疏 MLA Triton 内核（#41812）、gfx950/MI355X 上的胶子分页 MQA logits（#42062）、gfx950 的 RMSNorm+Quant 融合（#41825）、AITER FA 后端清理(#41942)、MoRI 连接器的 XGMI 后端 (#41753)、QuickReduce 最小尺寸覆盖 (#41675)、DSV4 MTP (#43385)。
* **CPU / RISC-V**：用于 RISC-V 矢量扩展的 RVV 优化注意力内核 (#40119)，VLEN=256 (#42943)，AMX CPU 的融合 GDN (#42707)，MXFP4 W4A16 MoE (#41922)，CPU 上的实验性 Triton + MRv2 (#43225)，提高了 CPU 线程利用率（＃42666），`--cpu-distributed-timeout-seconds`（＃42968）。
* **Intel XPU**：GPTQ int4 支持 (#37844)、mxfp8 MoE (#41918)、FP8 块级量化 (#42952)、自定义操作集体行为 (#41354)、多个稀疏注意力内核 (#37888)、MoE topk 路由 + MXFP4 回退 (#42951)、CT W4A4 MXFP4 path (#38896), reduced XPU MoE host overhead (#42915).
* **内核 ABI**：继续迁移到 libtorch 稳定 ABI — 5/n (#42339)、6/n (#42663)、7/n (#43209)。
* **Experimental**: breakable CUDA graph (#42304).

### 大规模服务
* 分解服务 (NIXL)：P 上 KV 块的租约更新 TTL (#41383)、握手失败策略兑现 (#40364)、使用 NIXL 对 PD 的 GDN 支持 (#41869)、多节点 TP>8 修复 (#39907)、旁路主机选择修复 (#41806)。
* Mooncake：MooncakeStoreConnector 中的磁盘卸载 (#42689)、对 DSV4 的 HMA 支持 (#42828)、操作指标 (#43392)、加载失败传播 (#42788)、块对齐的完整命中 (#43494)、抢占后完成处理 (#43281)。
* Data parallel: DP Supervisor (#40841), publish request counts at engine-step start (#41626), forward `X-data-parallel-rank` header (#42330).
* EPLB：更改默认 EPLB 通信器 (#43110)、VLM-wrapper 初始化修复 (#39805)、删除失效的 `torch.accelerator.synchronize()` (#40733)。
* LoRA：用于 MoE LoRA 的一次性 Triton 内核（#42290）、同步 2D 和 3D MoE LoRA 适配器（#42242）、减少 EP 下的 2D 权重内存（#42737）、MoE LoRA 对齐内核网格修复（#40131）。

### 量化
* **MXFP4**：线性层 + 压缩张量集成 (#41664)、CPU W4A16 MoE (#41922)、XPU mxfp8 MoE (#41918)。
* **NVFP4**：DeepSeek V4 融合 MoE (#42209)、ModelOpt W4A16 NVFP4 融合 MoE + 混合精度调度 (#42566)、批量不变 NVFP4 Cutlass 线性 (#39912)、FlashInfer TRTLLM NvFP4 单片 MoE 路由修复 (#43223)、TRTLLM NVFP4 MoE 分块修复（＃43599）。
* **Quark**: load Quark NVFP4 checkpoints (#35859), W8A8 INT8 garbage-output fix on Step-3.5-Flash (#41892), W4A4 oracle refactor (#41436).
* **AutoRound**：W4A16 支持（#39778）。
* **ModelOpt**: Qwen3.5/3.6 VLM quantized prefix mapping (#42546).
* **框架**：重新设计 `quantization_config` 以使用带有激活覆盖的 `QuantKey` (#41566)，MoE W4A8 CT 迁移到 Oracle (#42680)，AWQ Marlin MoE 迁移到模块化 WNA16 Oracle (#42483)，GPTQ 整合 (`gptq_marlin` → `auto_gptq`) (#38288)。

### API 和前端
* **Rust 前端**：集成 (#40848)、树内代码移动 (#43283)、实用程序调用 ID newtype (#43405)、简化的 `AuthenticationMiddleware` 路径提取 (#43426)。
* **响应 API**：`chat_template_kwargs` 支持 (#42272)、消息合并修复 (#42189)、空通道/收件人和谐修复 (#35540)。
* **Completions**: `thinking_token_budget` support (#42116) with inverted-condition fix (#41674);将 `reasoning_effort` 映射到 `enable_thinking` (#43401)。
* **前端**：OpenAI 端点的截断端 (#43260)、规范化 `reasoning_content` → `reasoning` (#42664)、重新设计的 fastTokens 集成 (#43168)、合并的语音到文本入口点 (#42370、#42274)、通过 `BeamSearchMixin` 进行波束搜索合并 (#42946)、 score/rerank chat-template instructions (#42412).
* **Auth**: API-key authorization for `/v2` endpoints (#42594).
* **离线 API**：池化离线 API 拆分为 `PoolingOfflineMixin` (#42267)，拆分离线推理 APIs/utils (#43553)。

### 构建和依赖关系
* CUDA 12.9 轮构建切换到 PyTorch `manylinux_2_28` 基础 (#41668)。
* FlashInfer bumped to v0.6.11.post2 (#41711); `nvidia-cutlass-dsl` to 4.5.2 (#42991, #43230, #43745); 1.7 (#42150) 的指导； gpt-oss 的 `triton_kernels` 降级为 v3.5.1 (#43135)。
* Rust 前端构建：`setuptools-rust` 依赖项（#43287、#43377），在 rust 构建阶段固定 `protoc`（#43292）。
* Docker: non-root `vllm-openai` target (#40275), build `mooncake-transfer-engine` from source (#42114), AINIC & Thor NIC support (#40453); Python-only installation made optional (#42293).
* vllm-tpu：禁用 CUDA deps 的构建隔离 (#43038)，tpu-inference docker 构建修复 (#43360)。
* 添加、恢复 `humming` MoE 后端依赖项，然后使用 CuPy 运行时修复恢复（#42540、#43492、#43530）。

### 弃用和删除
* 删除了 `get_tokenizer` 和 `resolve_hf_chat_template` 的旧位置 (#35024)。
* 标记的环境变量现在由 `--moe-backend` / `--linear-backend` 覆盖（#43148）。
* 删除了已弃用的 MLA 预填充参数 (#42555)。
* 删除了死 CUDA 内核和死代码（#42767、#42889、#43144）。

## 贡献者

@yewentao256、@haosdent、@njhill、@mgoin、@jeejeelee、@AndreasKaratzas、@NickLucche、@sfeng33、@noooop、@WoosukKwon、@khluu、@taneem-ibrahim、@Dao007forever、@vadiklyutiy、@bnellnm、@ivanium、@tjtanaa、 @mmangkad、@hmellor、@DarkLight1337、@hickeyma、@zhenwei-intel、@jikunshang、@ronensc、@benchislett、@hao-aaron、@arpera、@zyongye、@gau-nernst、@frida-andersson、@ZhanqiuHu、@cleonard530、@akii96、@bedeks、@Isotr0py、 @JasonKeyiL、@bigPYJ1151、@zhewenl、@weizhoublue、@zxd1997066、@gnovack、@chaojun-zhang、@majian4work、@chaunceyjian、@pschlan-amd、@amitz-nv、@yma11、@dsikka、@tc-mb、@shanjiaz、@jperezdealgaba、 @yzong-rh, @viktorpusTT, @TheEpicDolphin, @MatthewBonanni, @shen-shanshan, @hallerite, @zufangzhu, @bbrowning, @divakar-amd, @ianliuy, @esmeetu, @rasmith, @louie-tsai, @pmaybank, @liulanze, @ZJY0516, @TheDuyIT, @wzhao18, @jinzhen-lin, @BugenZhao, @ashwing, @fuergaosi233, @hqhq1025, @shaharmor98, @pisceskkk, @lkm2835, @noa-neria, @Rohan138, @whx-sjtu, @vrdn-23, @alexagriffith, @Flink-ddd, @jeffreywang-anyscale, @skyloevil, @ymoslem、@Lucaskabela、@kg6-sleipnir、@woernfl、@tdoublep、@GOavi101、@jmamou、@PeaBrane、@KaivalyaMDabhadkar、@BWAAEEEK、@MrZ20、@afierka-intel、@JoursBleu、@hissu-hyvarinen、@mwawrzos、@CynicDora、 @NoeliaBentancor, @johncalesp, @fynnsu, @fxmarty-amd, @walterbm, @liangel-02, @lgeiger, @he-yufeng, @abinggo, @KrxGu, @hks-9697-v2, @Sarah-Salah, @rebklee, @aoshen02, @haic0, @libinta, @Zhenzhong1, @xhx1022、@b-mu、@WindChimeRan、@tpopp、@charlifu、@hengyinie、@ricky-chaoju、@lyd1992、@daniel-devlab、@paulyu12、@bobofang11235、@laudney、@BadrBasowid、@maeehart、@PatchouliTIS、@chunxiaozheng、 @blake-snc, @southfreebird, @rbrugaro-amd, @rasdani, @dusthunter, @qizzzh, @ProExpertProg, @qianlihuang, @alec-flowers, @JisoLya, @gaozihao-shy, @rishaps, @xyang16, @wendyliu235, @hlin99, @tianmu-li, @yuwenzho, @inisis, @kfirtoledo, @roikoren755, @liranschour, @vllm-agent, @blancsw, @netanel-haber, @BowenBao, @czhu-cohere, @amitport, @tuukkjs, @revit13, @ofirzaf, @qyYue1389, @junyanxu, @gracie-guo, @sagearc, @xinyu-intel, @yiwen101、@DomBrown、@tomeras91、@Dogacel、@maxdebayser、@fadara01、@Terrencezzj、@izikgo、@wangrui6、@kebe7jun、@rishitdholakia13、@j9smith、@meena-at-work、@dllehr-amd、@alexeldeib、@sonusflow、@lucianommartins、 @AAISSJ, @DaoyuanLi2816, @zexplorerhj, @zhangxin81, @velonica0, @fuscof-ibm, @anishesg, @zhengluo-nv, @ylangtsou, @fangyuchu, @zx3xyy, @simondanielsson, @ruizhang99, @zixi-qi, @xwu-intel, @yufufi, @wdhongtw, @mrjunwan-lang, @wangxiyuan, @wasnertobias, @ilmarkov, @sychen52, @zhandaz, @russellb, @SandishKumarHN, @juhi10071998, @itayalroy, @djmmoss, @SumanthRH, @mayuyuace, @zhougit86, @meenchen, @lucifer1004, @popkart-EZ, @jzakrzew、@ffggs、@huanghua1994、@orozery、@danisereb、@rshavitt、@Yihuki、@QingZhou-YangHY、@Jie-Fang、@bbartels

## 新贡献者

* @abinggo 在 https://github.com/vllm-project/vllm/pull/42128 中做出了第一个贡献
* @afierka-intel 在 https://github.com/vllm-project/vllm/pull/40327 中做出了第一个贡献
* @alexagriffith 在 https://github.com/vllm-project/vllm/pull/41987 中做出了第一个贡献
* @alexeldeib 在 https://github.com/vllm-project/vllm/pull/43255 中做出了第一个贡献
* @amitport 在 https://github.com/vllm-project/vllm/pull/41666 中做出了第一个贡献
* @anishesg 在 https://github.com/vllm-project/vllm/pull/43079 中做出了第一个贡献
* @bedeks 在 https://github.com/vllm-project/vllm/pull/40269 中做出了第一个贡献
* @blake-snc 在 https://github.com/vllm-project/vllm/pull/35568 中做出了第一个贡献
* @blancsw 在 https://github.com/vllm-project/vllm/pull/41154 中做出了第一个贡献
* @bobofang11235 在 https://github.com/vllm-project/vllm/pull/42604 中做出了第一个贡献
* @BWAAEEEK 在 https://github.com/vllm-project/vllm/pull/42233 中做出了第一个贡献
* @CynicDora 在 https://github.com/vllm-project/vllm/pull/39487 中做出了第一个贡献
* @daniel-devlab 在 https://github.com/vllm-project/vllm/pull/42479 中做出了第一个贡献
* @DaoyuanLi2816 在 https://github.com/vllm-project/vllm/pull/42905 中做出了第一个贡献
* @Dogacel 在 https://github.com/vllm-project/vllm/pull/42764 中做出了第一个贡献
* @DomBrown 在 https://github.com/vllm-project/vllm/pull/42080 中做出了第一个贡献
* @dusthunter 在 https://github.com/vllm-project/vllm/pull/42594 中做出了第一个贡献
* @ffggs 在 https://github.com/vllm-project/vllm/pull/43414 中做出了第一个贡献
* @frida-andersson 在 https://github.com/vllm-project/vllm/pull/41825 中做出了第一个贡献
* @fuergaosi233 在 https://github.com/vllm-project/vllm/pull/43488 中做出了第一个贡献
* @gaozihao-shy 在 https://github.com/vllm-project/vllm/pull/42869 中做出了第一个贡献
* @gracie-guo 在 https://github.com/vllm-project/vllm/pull/42626 中做出了第一个贡献
* @haic0 在 https://github.com/vllm-project/vllm/pull/40453 中做出了第一个贡献
* @hks-9697-v2 在 https://github.com/vllm-project/vllm/pull/42521 中做出了第一个贡献
* @hlin99 在 https://github.com/vllm-project/vllm/pull/42740 中做出了第一个贡献
* @inisis 在 https://github.com/vllm-project/vllm/pull/41710 中做出了第一个贡献
* @izikgo 在 https://github.com/vllm-project/vllm/pull/42938 中做出了第一个贡献
* @j9smith 在 https://github.com/vllm-project/vllm/pull/41215 中做出了第一个贡献
* @junyanxu 在 https://github.com/vllm-project/vllm/pull/42671 中做出了第一个贡献
* @KaivalyaMDabhadkar 在 https://github.com/vllm-project/vllm/pull/42333 中做出了第一个贡献
* @libinta 在 https://github.com/vllm-project/vllm/pull/41689 中做出了第一个贡献
* @lucifer1004 在 https://github.com/vllm-project/vllm/pull/43433 中做出了第一个贡献
* @meena-at-work 在 https://github.com/vllm-project/vllm/pull/40082 中做出了第一个贡献
* @mrjunwan-lang 在 https://github.com/vllm-project/vllm/pull/43360 中做出了第一个贡献
* @MrZ20 在 https://github.com/vllm-project/vllm/pull/42394 中做出了第一个贡献
* @mwawrzos 在 https://github.com/vllm-project/vllm/pull/42498 中做出了第一个贡献
* @NoeliaBentancor 在 https://github.com/vllm-project/vllm/pull/42250 中做出了第一个贡献
* @ovidiusm 在 https://github.com/vllm-project/vllm/pull/42542 中做出了第一个贡献
* @paulyu12 在 https://github.com/vllm-project/vllm/pull/42306 中做出了第一个贡献
* @QingZhou-YangHY 在 https://github.com/vllm-project/vllm/pull/43579 中做出了第一个贡献
* @qizzzh 在 https://github.com/vllm-project/vllm/pull/41680 中做出了第一个贡献
* @qyYue1389 在 https://github.com/vllm-project/vllm/pull/42289 中做出了第一个贡献
* @rasdani 在 https://github.com/vllm-project/vllm/pull/42481 中做出了第一个贡献
* @rebklee 在 https://github.com/vllm-project/vllm/pull/42098 中做出了第一个贡献
* @revit13 在 https://github.com/vllm-project/vllm/pull/42926 中做出了第一个贡献
* @ruizhang99 在 https://github.com/vllm-project/vllm/pull/43260 中做出了第一个贡献
* @Sarah-Salah 在 https://github.com/vllm-project/vllm/pull/42441 中做出了第一个贡献
* @sonusflow 在 https://github.com/vllm-project/vllm/pull/36329 中做出了第一个贡献
* @TheDuyIT 在 https://github.com/vllm-project/vllm/pull/40131 中做出了第一个贡献
* @tuukkjs 在 https://github.com/vllm-project/vllm/pull/42880 中做出了第一个贡献
* @vllm-agent 在 https://github.com/vllm-project/vllm/pull/42913 中做出了第一个贡献
* @wangrui6 在 https://github.com/vllm-project/vllm/pull/40326 中做出了第一个贡献
* @wasnertobias 在 https://github.com/vllm-project/vllm/pull/43001 中做出了第一个贡献
* @weizhoublue 在 https://github.com/vllm-project/vllm/pull/42830 中做出了第一个贡献
* @woernfl 在 https://github.com/vllm-project/vllm/pull/42397 中做出了第一个贡献
* @xwu-intel 在 https://github.com/vllm-project/vllm/pull/37888 中做出了第一个贡献
* @Yihuki 在 https://github.com/vllm-project/vllm/pull/42933 中做出了第一个贡献
* @yiwen101 在 https://github.com/vllm-project/vllm/pull/42654 中做出了第一个贡献
* @ylangtsou 在 https://github.com/vllm-project/vllm/pull/43038 中做出了第一个贡献
* @yufufi 在 https://github.com/vllm-project/vllm/pull/42972 中做出了第一个贡献
* @zhengluo-nv 在 https://github.com/vllm-project/vllm/pull/43105 中做出了第一个贡献
* @zhougit86 在 https://github.com/vllm-project/vllm/pull/42739 中做出了第一个贡献
* @zx3xyy 在 https://github.com/vllm-project/vllm/pull/42855 中做出了第一个贡献

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.22.0` · 📅 发布：2026-05-29 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.22.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
