---
title: "vllm v0.26.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.26.0"
version: "v0.26.0"
published: "2026-07-27"
type: "minor"
lang: "zh"
---

# vllm v0.26.0

# vLLM v0.26.0 Release Notes

## 亮点

此版本包含来自 212 名贡献者的 411 项提交（61 名新贡献者）！

* **新的 Inkling 模型系列** 具有完整的支持堆栈：基础建模 (#48799)、分段 CUDA 图支持 (#48822)、Hopper FA4 相对关注 (#48858)、MTP=1 推测解码 (#48869)、LoRA (#48884) 和标准 ModelOpt NVFP4 量化 (#48990)。
* **DeepSeek-V4 跨供应商性能提升**：专用路由内核（2.94% E2E TPOT，#48660）、`fused_topk_bias`（1.5–2x 内核，#47463）和冗余重复/复制删除（1.8% E2E TPOT，#48137），以及用于 HCA 预填充的 ROCm 两级压缩器(#47718)、稀疏解码/预填充优化(#48519、#48788、#46275) 以及 AMD (#47419) 和 XPU (#47677) 上的 DSpark 推测解码。
* **fp32 `lm_head` 用于通过 `head_dtype`** (#48390) 生成模型，扩展到 LoRA 路径 (#48525) 并给出 ROCm `torch.mm` 快速路径 (#48688)，提高生成头的精度。
* **灵活的注意力后端**：现在可以为每个 KV 缓存组选择注意力后端 (#48012)，并且滑动窗口支持现在是一个显式后端功能 (#48011) — 改进对混合模型的支持。
* **KV 卸载和分层二级存储** 显着成熟：卸载指标（#45958、#47666、#47679）、分层拥有的事件处理（#46544、#47923）、具有工作负载身份的对象存储辅助层（#47063、#47274、#48150）、DP 副本感知分层(#47987) 和编码器缓存 (EC) 连接器，包括 CPU 卸载 (#42433、#47423)。
* **Rust 前端**获得了多模态视频 (#47959) 和音频 (#48554)、Seed-OSS 工具解析器 (#47741) 和本机 `vllm-bench` 端口 (#48107)。
* **变形金刚 5.13.0** (#47867)，更多模型迁移到变形金刚建模后端：Olmo/Olmo2 (#48100)、MistralLarge3 (#48153) 和 HunyuanVL (#47872)。

### 模型支持
* 新模型：Inkling 系列 (#48799、#48822、#48858、#48869、#48884、#48990)、BertForMaskedLM (#48463)、RobertaForTokenClassification / XLMRobertaForTokenClassification (#47991)、LongCat-Flash-Lite n-gram 嵌入 (#47857)、 Cosmos3 Edge Reasoner (#48291) 和 Cosmos3-Super 注册 (#48211)、TranslateGemma-12b-it (#41599)。
* Transformers 后端迁移：Olmo/Olmo2 (#48100)、MistralLarge3 到 AutoWeightsLoader (#48153)、用于 Transformer 5.13 的 HunyuanVL 原生 Transformers 处理器 (#47872)。
* GLM5.2：将 MoE 序列并行支持迁移到非 Torch 编译路径 (#47881)。
* LoRA：用于 BF16 模型的 FlashInfer MoE LoRA (#48632)、用于 LlavaNextVideo 中的塔/连接器的 LoRA (#48594)、LoRA 路径上的 fp32 `lm_head` (#48525)、优化的 `TrtLlmLoRAExperts` (#48759)。
* 多模式：当 TP 不可用时自动回退到 ViT 数据并行性 (#49046)。
* 修复：正确 `torch.compile` 下分块预填充的池化分数 (#48901)。

### 引擎核心
* fp32 `lm_head` 用于通过 `head_dtype` 生成的型号 (#48390)；用于捕获较大 CUDA 图形大小的内存较低 (#48483)；选择在启动过程中持久保存和重用内存分析结果 (#47388)；改进了 InstantTensor 加载 (#46868)。
* 注意：为每个 KV 缓存组选择不同的注意后端 (#48012)；滑动窗口作为显式后端功能（#48011）； KV 缓存布局重构，将 K/V 打包到后端的内容中 (#44455)；用于 MLA 的 MRV2 虚拟批次 PCP (#46570)。
* 推测性解码：运行时草案权重更新 (#46725)、混合（SWA + 全面关注）DFlash 草案 (#47914)、SWA 对 qwen-eagle3 的支持 (#47568)、Gemma4-12B DSpark 草案模型 (#47216)、AMD 上的 DSv4 DSpark (#47419)、`speculative_config` 的单独 `kv_cache_dtype` （＃48787）。
* KV 卸载：基本卸载指标 (#45958)、将 CPU 缓存使用情况拆分为读/写计量表 (#47666) 并将分层查找延迟拆分为同步/异步直方图 (#47679)、层拥有的事件处理和 BlockStored 事件 (#46544、#47923)、具有工作负载身份的对象存储辅助层 (#47063、 #47274、#48150)、DP 副本感知分层 (#47987)、异构 KV 组的 `blocks_per_chunk` 配置 (#48878)、P2P 默认主机/端口环境变量 (#47636)。
* 缓存：混合模型的部分前缀缓存命中（#46384）、选择性混合缓存保留（#47782）、在完整报告模式下报告前缀缓存重用块（#45261）。
* 推理：与推测解码一起使用时优化 TPOT 的思考预算 (#46662)。
* RLHF：有状态的训练器发送抽象（#48042）。
* 修复：未排空的 `new_block_ids` 导致主机内存泄漏 (#44490)、DSv3.2 + MTP + 序列并行精度 (#48036)。

### 硬件与性能
* DeepSeek-V4：专用路由内核（2.94% E2E TPOT，#48660）、`fused_topk_bias` 1.5–2x（#47463）、冗余重复/复制删除（1.8% TPOT，#48137）。
* MoE 路由器 GEMM：BF16x3 路由器 GEMM (#47973)、FP32 路由器 GEMV (#48335)、通用 CuteDSL LL BF16 路由器 GEMM (#42562)； TRTLLM BF16 MoE 模块化内核 (#45182)；将 FlashInfer 组合写入最终输出 (#47156)。
* Qwen：在 Qwen3.5 中融合更多 RMSNorm + all-reduce (#46998)，将 MoE all-reduce 替换为 reduce-scatter (#47006)，Qwen3.5 H20 优化 (#48350)，扩大 Triton 预热覆盖范围 (#47546)。
* MLA：短稀疏 MLA 序列的密集 MHA 路径 (#47327)； sm100 上的 MiniMax-M3 长上下文解码索引器 (#48582)。
* 内核：用于 ReLUSquaredActivation / relu^2 的 CUDA 内核 (#39058)、Helion 内核延迟注册 (#48264)、将 `_copy_mamba_state_block` 向量化为 uint64 (#48110)、停止在采样器中将 logits 向上转换为 fp32 (#48641)。
* ROCm：fp32 `head_dtype` `torch.mm` 快速路径 (#48688)、DSv4 两级压缩器内核 (#47718)、稀疏解码/预填充优化 (#48519、#48788、#46275)、DSv3.2 稀疏 MLA KV 分割启发式 (#46832) 和 MTP CUDA 图形模式(#45149)、MiniMax-M3 的 MXFP8 GEMM (#46117)、AITER 稀疏分页注意力 + MiniMax-M3 的规范解码 (#47287、#47984)、MiniMax-M2 通过 AITER 融合 QK-norm + all-reduce (#44849)、HybridW4A16 线性内核 (#40977)、 Qwen3-30B-A3B QK-Norm+RoPE+KV 运行时融合（#42749）。
* XPU：批量不变内核 (#41934)、HND KV 布局支持 (#47975)、DSv4 的 DSpark 规范解码 (#47677)、夜间/发布图像发布 (#47880、#48126)。
* CPU：CPU 上 GDN 模型的 DFlash 推测解码（#46090）、s390x NUMA 拓扑（#40714）、原生 macOS arm64 CPU 轮构建（#48289）； POWER VSX 数学函数优化 (#47321) 和 IBM Power docker 使用预构建轮进行构建 (#46017)。
* 分布式融合：FlashInfer MNNVL 全归约 RMS 量化融合 (#48064)。
* 构建/自动调谐：arm64 Blackwell SM10x/SM110 映像构建 (#48041)；默认情况下跳过 CuTeDSL fp4_gemm 自动调整 (#48268)。

### 大规模服务和分布式
* 解码上下文并行 (DCP)：混合注意力支持 (#40996)，DCP + Eagle 用于 Tokenspeed MLA 后端 (#48180)。
* PD 分解：推送模式下的 NIXL 管道并行预填充 (#45880)。
* 编码器缓存连接器：EC 传输参数 (#42433) 和 CPU 卸载 EC 连接器 (#47423)。

### 量化
* 使用压缩张量进行 w[2-7]a[4,8] 仅权重推理 (#46390)；模拟 MoE 后端的 int4 量化 (#48451)； INT2 XPU 仅权重量化线性 (#47521)。
* NVFP4/MXFP4：`nvfp4_per_token` 在线 MoE 量化（#48538）、CuTe-DSL FlashInfer MXFP4 量化（#48417）；重新包装 Marlin 的 FP4 MoE 权重 (#47851) 和 NVFP4 MoE 权重加载 (#46276) 时的峰值内存有限。
* MLA：`kv_cache_dtype_skip_layers` 支持（#47309）。
* ROCm：HybridW4A16 线性内核 (#40977)。

### API 和前端
* Rust 前端：多模式视频 (#47959) 和音频 (#48554)、Seed-OSS 工具解析器 (#47741)、本机 `vllm-bench` 端口 (#48107)、使用渲染器哨兵处理的 `continue_final_message` (#47844)。
* OpenAI 兼容性：`/v1/completions` 中的 `bad_words` (#46793)、在 Python OpenAI 端点上公开 `logprob_token_ids` (#43463)、非 Harmony 模型的 `include_reasoning` 参数 (#44301)、在消息响应上填充 `num_cache_creation_tokens` (#48535)。
* 端点插件框架（#47454）； RLHF 开发 API 路由器上的 `/abort_requests` (#47173)； Deepstream 视频解码后端 (#42424)；离线推理中池化模型的重叠预处理和计算 (#47699)。
* UX：更多 CLI 参数的人类可读整数 (#47608)、CuTeDSL 编译进度条 (#48881)、扩展 GPU 分析器配置范围/注释 (#37524)、进程意外终止时记录工作程序退出代码 (#38641)。
* 稳定性/正确性：处理语法编译失败而不导致引擎崩溃 (#47312)，修复 SentencePiece 空间中的 logprobs 标记字符串冲突 (#48674)。

### 安全
* 替换磁盘缓存以消除 pickle 反序列化 (#44549)。
* 修复绕过 CVE 修复的并发稀疏不变竞争 (#48583)。
* 将资源边界验证添加到渲染端点（#47260）；清理验证错误响应中的服务器文件路径 (#46415)；绑定完成提示列表以防止无限制的引擎扇出 (#47845)；保护 lm-format-enforcer 正则表达式编译超时 (#47595)。

### 依赖关系
* 变形金刚 5.13.0 (#47867)、FlashInfer 0.6.14 (#47669)、NIXL 1.3.1 (#47559)、tpu-inference v0.24.0 (#47835)、nvidia-cutlass-dsl 4.6.0 (#47442)、 vllm_xpu_kernels v0.1.11.1 (#48942)。
* FlashAttention 3 固定到 torch stable-ABI 提交 (#47995)； ABI 稳定的 FlashMLA 构建 (#48174)。

### 弃用和删除
* 删除的模型：TeleChat (#47989)、Persimmon 和 Fuyu (#48096)。

## 新贡献者

* @adhi29 在 https://github.com/vllm-project/vllm/pull/48262 中做出了第一个贡献
* @adsridhar 在 https://github.com/vllm-project/vllm/pull/48291 中做出了第一个贡献
* @alexxu-roblox 在 https://github.com/vllm-project/vllm/pull/48025 中做出了第一个贡献
* @amd-ethany 在 https://github.com/vllm-project/vllm/pull/46117 中做出了第一个贡献
* @AndyDai-nv 在 https://github.com/vllm-project/vllm/pull/48507 中做出了第一个贡献
* @aoright 在 https://github.com/vllm-project/vllm/pull/47797 中做出了第一个贡献
* @ap9272 在 https://github.com/vllm-project/vllm/pull/43896 中做出了第一个贡献
* @avalliappan-nvidia 在 https://github.com/vllm-project/vllm/pull/47460 中做出了第一个贡献
* @brijrajk 在 https://github.com/vllm-project/vllm/pull/44349 中做出了第一个贡献
* @Debasish-87 在 https://github.com/vllm-project/vllm/pull/48878 中做出了第一个贡献
* @devalshahamd 在 https://github.com/vllm-project/vllm/pull/37524 中做出了第一个贡献
* @DiegoCao 在 https://github.com/vllm-project/vllm/pull/47216 中做出了第一个贡献
* @drakosha 在 https://github.com/vllm-project/vllm/pull/46972 中做出了第一个贡献
* @edwinlim0919 在 https://github.com/vllm-project/vllm/pull/47495 中做出了第一个贡献
* @ErenAta16 在 https://github.com/vllm-project/vllm/pull/48333 中做出了他们的第一个贡献
* @Functionhx 在 https://github.com/vllm-project/vllm/pull/48153 中做出了第一个贡献
* @gangula-karthik 在 https://github.com/vllm-project/vllm/pull/48594 中做出了第一个贡献
* @Gavin-Morris-04 在 https://github.com/vllm-project/vllm/pull/48293 中做出了第一个贡献
* @giuseppegrossi 在 https://github.com/vllm-project/vllm/pull/48159 中做出了第一个贡献
* @GongLei-HW 在 https://github.com/vllm-project/vllm/pull/45261 中做出了第一个贡献
* @guoriyue 在 https://github.com/vllm-project/vllm/pull/48211 中做出了第一个贡献
* @hugo-cen 在 https://github.com/vllm-project/vllm/pull/48330 中做出了第一个贡献
* @ibondarenko1 在 https://github.com/vllm-project/vllm/pull/43117 中做出了第一个贡献
* @iyastreb 在 https://github.com/vllm-project/vllm/pull/48209 中做出了第一个贡献
* @jacklin78911-collab 在 https://github.com/vllm-project/vllm/pull/47744 中做出了第一个贡献
* @jhu960213 在 https://github.com/vllm-project/vllm/pull/42749 中做出了第一个贡献
* @joanvelja 在 https://github.com/vllm-project/vllm/pull/44371 中做出了第一个贡献
* @KKothuri 在 https://github.com/vllm-project/vllm/pull/48390 中做出了第一个贡献
* @kl527 在 https://github.com/vllm-project/vllm/pull/47464 中做出了第一个贡献
* @krishy91 在 https://github.com/vllm-project/vllm/pull/47991 中做出了第一个贡献
* @langzhao-netizen 在https://github.com/vllm-project/vllm/pull/43463 中做出了第一个贡献
* @lishunyang12 在 https://github.com/vllm-project/vllm/pull/49015 中做出了第一个贡献
* @mahadrehmann 在 https://github.com/vllm-project/vllm/pull/48098 中做出了第一个贡献
* @ManaEstras 在 https://github.com/vllm-project/vllm/pull/47872 中做出了第一个贡献
* @mosya415 在 https://github.com/vllm-project/vllm/pull/48846 中做出了第一个贡献
* @mwoodson 在 https://github.com/vllm-project/vllm/pull/48523 中做出了第一个贡献
* @MynameFelix 在 https://github.com/vllm-project/vllm/pull/41811 中做出了第一个贡献
* @nicklasfrahm 在 https://github.com/vllm-project/vllm/pull/45313 中做出了第一个贡献
* @passtoor-agi 在 https://github.com/vllm-project/vllm/pull/48849 中做出了第一个贡献
* @pierDipi 在 https://github.com/vllm-project/vllm/pull/47063 中做出了第一个贡献
* @ruikangliu 在 https://github.com/vllm-project/vllm/pull/47309 中做出了第一个贡献
* @Sahil170595 在 https://github.com/vllm-project/vllm/pull/45207 中做出了第一个贡献
* @samnordmann 在 https://github.com/vllm-project/vllm/pull/47156 中做出了第一个贡献
* @shawntsai 在 https://github.com/vllm-project/vllm/pull/47801 中做出了第一个贡献
* @sungbin1015 在 https://github.com/vllm-project/vllm/pull/46793 中做出了第一个贡献
* @tanish-malekar 在 https://github.com/vllm-project/vllm/pull/39058 中做出了第一个贡献
* @tomerg-nvidia 在 https://github.com/vllm-project/vllm/pull/47021 中做出了第一个贡献
* @tsvikas 在 https://github.com/vllm-project/vllm/pull/47296 中做出了第一个贡献
* @vanshbhatia-amd 在 https://github.com/vllm-project/vllm/pull/47767 中做出了第一个贡献
* @ViranjanPagar 在 https://github.com/vllm-project/vllm/pull/42424 中做出了第一个贡献
* @vivek8123 在 https://github.com/vllm-project/vllm/pull/46017 中做出了第一个贡献
* @vx120 在 https://github.com/vllm-project/vllm/pull/46725 中做出了第一个贡献
* @wangxingda 在 https://github.com/vllm-project/vllm/pull/48829 中做出了第一个贡献
* @wendadawen 在 https://github.com/vllm-project/vllm/pull/46213 中做出了第一个贡献
* @wenpengw-nv 在 https://github.com/vllm-project/vllm/pull/44863 中做出了第一个贡献
* @woosebastian 在 https://github.com/vllm-project/vllm/pull/48901 中做出了第一个贡献
* @Yancey0623 在 https://github.com/vllm-project/vllm/pull/40996 中做出了第一个贡献
* @yushangdi 在 https://github.com/vllm-project/vllm/pull/48868 中做出了第一个贡献
* @yuvalluria 在 https://github.com/vllm-project/vllm/pull/46396 中做出了第一个贡献
* @zihaomu 在 https://github.com/vllm-project/vllm/pull/47404 中做出了第一个贡献
* @zqzten 在 https://github.com/vllm-project/vllm/pull/44303 中做出了第一个贡献

## 贡献者
@mgoin、@yewentao256、@NickLucche、@njhill、@LucasWilkinson、@micah-wil、@khluu、@AndreasKaratzas、@WoosukKwon、@aoshen02、@BugenZhao、@vanshbhatia-amd、@jperezdealgaba、@jeejeelee、@hmellor、@tlrmchlsmth、 @MatthewBonanni、@Change72、@chaojun-zhang、@gau-nernst、@gnovack、@ZJY0516、@reidliu41、@Yejing-Lai、@taneem-ibrahim、@Srinivasoo7、@Sunt-ing、@AmeenP、@zhenwei-intel、@LopezCastroRoberto、@matteso1、@yzong-rh、 @stefankoncarevic、@Isotr0py、@djramic、@charlifu、@peizhang56、@giuseppegrossi、@drakosha、@NickCao、@benchislett、@Rohan138、@hickeyma、@muhammadfawaz1、@rasmith、@zixi-qi、@music-dino、@BWAAEEEK、@xianbaoqian、 @wendyliu235、@atalman、@joerowell、@ErenAta16、@AlejandroParedesLT、@gcanlin、@liranschour、@omerpaz95、@Alex-ai-future、@tanpinsiang、@Fangzhou-Ai、@KKothuri、@zxd1997066、@akii96、@nemanjaudovic、@Etelis、 @afierka-intel、@DaoyuanLi2816、@HDCharles、@tahsintunan、@xiaohongchen1991、@sagearc、@mikekg、@kliuae、@qli88、@arpera、@yushangdi、@edwinlim0919、@tjtanaa、@ariG23498、@lucifer1004、@netanel-haber、 @kl527、@Rukhaiya2004、@ronensc、@guan404ming、@shaunkotek、@liulanze、@pierDipi、@eldarkurtic、@simon-mo、@robinguo23、@CienetStingLin、@RishabhSaini、@Sahil170595、@jasonlizhengjian、@jacklin78911-collab、 @walterbm、@amd-ethany、@zqzten、@nicklasfrahm、@hongxiayang、@alexeldeib、@ManaEstras、@sungbin1015、@aoright、@Saddss、@vivek8123、@voipmonitor、@shawntsai、@almayne、@ilmarkov、@cleonard530、@kjian249、@chaunceyjian、 @bigPYJ1151、@tsvikas、@deng451e、@tvirolai-amd、@zhewenl、@zihaomu、@ap9272、@staugust、@Yancey0623、@GongLei-HW、@albertoperdomo2、@guoriyue、@ViranjanPagar、@Functionhx、@XuZhou26、@MynameFelix、 @larryli2-amd、@ashwing、@thisisjimmyfb、@robertgshaw2-redhat、@mayuyuace、@ibondarenko1、@zhejianxiaomai、@vx120、@hugo-cen、@tanish-malekar、@zzt93、@guybd、@R3hankhan123、@mmangkad、@omera-nv、@yma11、 @Gavin-Morris-04、@pavanimajety、@shanjiaz、@wenpengw-nv、@atalhens、@langzhao-netizen、@emricksini-h、@Zhenzhong1、@DanBlanaru、@mgehre-amd、@mwoodson、@wangxiyuan、@adsridhar、@hnt2601、@gangula-karthik、@tomerg-nvidia、 @adhi29、@rishitdholakia13、@divakar-amd、@chaeminlim-mb、@joanvelja、@russellb、@janeyx99、@aarushjain29、@wjabbour、@mahadrehmann、@krishy91、@tzielinski-habana、@avalliappan-nvidia、@ruikangliu、@majian4work、 @maxyanghu、@brijrajk、@lengrongfu、@Josephasafg、@elvircrn、@xiaguan、@ricky-chaoju、@iyastreb、@ovidiusm、@tuukkjs、@noooop、@samnordmann、@AndyDai-nv、@xiao-llm、@DiegoCao、@yuvalluria、@jhu960213、@woosebastian、 @Debasish-87、@esmeetu、@hao-aaron、@zhangj1an、@wendadawen、@juliendenize、@passtoor-agi、@mosya415、@labAxiaoming、@devalshahamd、@wangxingda、@xuebwang-amd、@fuscof-ibm、@alexxu-roblox、@frida-andersson、@lishunyang12、 @izhuhaoran

---

> 📦 仓库：[vllm-project/vllm](https://github.com/vllm-project/vllm) · 🏷️ 版本：`v0.26.0` · 📅 发布：2026-07-27 · [查看英文原版 Release](https://github.com/vllm-project/vllm/releases/tag/v0.26.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
