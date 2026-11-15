---
title: "vllm v0.21.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.21.0"
version: "v0.21.0"
published: "2026-05-15"
type: "minor"
lang: "en"
summary: "This release features 367 commits from 202 contributors (49 new)!"
---

# vllm v0.21.0

## Highlights

This release features 367 commits from 202 contributors (49 new)!

* **Transformers v4 deprecated**: This release formally deprecates `transformers` v4 support (#40389). Users should migrate to `transformers` v5.
* **C++20 build requirement**: vLLM now requires a C++20-compatible compiler for compatibility with PyTorch (#40380). This is a **breaking build change**.
* **KV Offload + Hybrid Memory Allocator (HMA)**: The KV offloading subsystem now integrates with the Hybrid Memory Allocator, including scheduler-side sliding window group support and full HMA enablement (#41228, #41445, #39571).
* **Speculative decoding with thinking budget**: Speculative decoding now respects reasoning/thinking budgets, enabling correct spec decode for reasoning models (#34668).
* **TOKENSPEED_MLA backend on Blackwell**: A new TOKENSPEED_MLA attention backend is available for DeepSeek-R1/Kimi-K25 prefill + decode on Blackwell GPUs (#41778).

### Model Support
* New architectures: MiMo-V2.5 (#40967), Laguna XS.2 (#41129, #41880), Moondream3 (#32325), Qianfan-OCR (#40136), Cohere MoE (#40817), Cohere Eagle (#42078).
* Speculative decoding: EAGLE for Mistral (#41024), Gemma4 MTP (#41745), MTP for MiMo-V2.5 (#41905), Cohere Eagle (#42078).
* DeepSeek V4: AMD/ROCm support (#40871), pipeline parallelism (#41694), `max` reasoning effort (#40982), disaggregated serving fixes (#41957).
* Tool calling: Cohere reasoning and tool parsers (#40422), LFM2/2.5 tool parser (#39243).
* Gemma3/Gemma4: `hidden_act` variant support (#40588), pipeline parallelism fix (#40786), MoE fixes (#41206, #41574, #41401), tool parser crash fix (#41991, #42188).
* Model Runner V2: Qwen3.5/Mamba hybrid model support (#35520), `logprob_token_ids` support (#40559).
* CUDA graph: ViT CUDA graph support for Qwen2.5-VL (#40830).
* Compatibility: Vendor HCXVisionConfig for Transformers v5 (#38447), legacy `rope_type` checkpoint support (#41734).

### Engine Core
* KV offloading + HMA: Scheduler-side sliding window groups (#41228), full HMA enablement (#41445), multi-connector HMA (#39571), per-job store completion (#39186), DCP/PCP support in OffloadingConnector (#41549), MooncakeStoreConnector for distributed KV offloading (#40900).
* Speculative decoding: Thinking budget support (#34668), independent drafter attention backend selection (#39930), multimodal model support with warning (#41752), per-step allocation elimination (#41043).
* Model Runner V2: Rejection sampling acceptance rate fix (#40651), skip metadata rebuild before draft prefill (#40410), rebuild metadata between draft decode steps (#41162), Qwen3.5/Mamba hybrid support (#35520).
* Routing: Replace routing replay with device cache and async D2H pipeline (#39917).
* Ray: RayExecutorV2 enabled by default (#41421), actor name collision fix for DP > 1 (#40398).
* Stability: Two-phase pause to prevent scheduler deadlock (#39366), thread-safe HF tokenizer wrappers (#41181), OOM prevention via `max_split_size_mb` during model loading (#41268).
* IndexCache support for DSA models (#37735).

### Hardware & Performance
* **NVIDIA Blackwell**: TOKENSPEED_MLA backend for DSR1/Kimi-K25 (#41778), faster per-token FP8 group quant packed kernel (#41326), FP8 on NVIDIA Thor/SM110 (#39712), CUTLASS scaled mm for non-compatible sizes (#41868).
* **Performance**: FlashInfer top-k/top-p sampler enabled by default (#40376), FP8 FlashInfer attention for ViT (#38065), TurboQuant shared dequant buffers (#40941), `AllPool.forward` 51% faster (#41163), GPU<->CPU sync elimination in pooling (#41433) and attention (#41434), numpy zero-copy embedding serialization (#41681), multimodal processor skip for text-only (#41246), FlashInfer FP8 async TP fusion (#39505), NVFP4 all-gather GEMM fusion for AsyncTP (#41882), re-enable allreduce+RMS fusion for DP/PP (#41458), DeepSeek bf16→fp32 via `torch.mm` (#41300), persistent MLA for sparse backend (#41990), configurable safetensors checkpoint prefetch (#41499), fused mhc_post_pre kernel (#41536), 2D-grid W8W8 group quant kernel (#42153), relaxed memory ordering for KV cache swaps (#39306).
* **AMD ROCm**: ROCm 7.2.2 (#41386), DBO (Dynamic Batch Optimization) (#34726), AITER Fused Allreduce+RMSNorm (#37646), Fused Shared Expert (FSE) for Qwen3-Next (#39280), DeepSeek V3.2 TP4 AITER MLA (#41835), GDN linear attention fusion (#40711), eliminate redundant MoE buffer copies in AITER (#41713), CPU offloading support (#40549), DeepEP API update (#39721), cap Triton paged attention block size to fix shared memory OOM (#38502).
* **CPU**: FP8 attention for AMX/AVX-512 (#39445), FP8 W8A16 linear (#41186), FP8 W8A16 MoE (#41314), DNNL AVX2 W8A8 Int8 (#41318), Gated DeltaNet Attention for Qwen 3.5/3.6 (#41025), RISC-V OMP thread auto-binding (#40569).
* **Intel XPU**: Top-k/top-p sample kernel (#39285), out-of-place all-reduce (#41808), LoRA support (#38206).
* **IBM Power**: VSX attention backend (#40451).
* **FlexAttention**: Re-enabled for batch invariant mode (#40842).
* **MLA**: Abstracted MLA prefill backends, eliminated cuDNN dependency (#32623).

### Large Scale Serving
* Disaggregated serving: Bi-directional KV cache transfers between P and D (#32553), NIXL transfer redesign (#40731), EPLB memory overhead optimization (#40013), NIXL connector bumped to 1.x (#42364), Mooncake KVConnectorStats for transfer observability (#40414), NIXL P-node pre-admission rejection notification (#41269), KV block release for skipped P-ranks (#40449).
* DCP: Pack output and LSE in DCP A2A (#41160).
* MoE: PluggableLayer interface for out-of-tree MoE runners (#35178).
* LoRA: Initial expert parallel (EP) support (#40867), Qwen3.5 LoRA fusion fix (#37912).

### Quantization
* **NVFP4**: KV cache support (#40177), Triton dequant/QDQ emulation kernels for Hopper and AMD (#40033), GELU on TRT-LLM NvFP4 fused MoE for Gemma4 (#41050), ModelOpt NVFP4 W4A16 (#41769), NVFP4 all-gather GEMM fusion for AsyncTP (#41882), GLM4-MoE NVFP4 loading fix (#41755).
* **MXFP4**: Humming MXFP4 MoE backend (#41083), FlashInfer CUTLASS MXFP4-MXFP8 MoE fix (#42089).
* **TurboQuant**: Hybrid model and uniform quantization support (#39931).
* **Compressed tensors**: Allow configs with non-explicit ignores (#41965).
* **FP8**: Bias loading fix (#41424), FlashInfer autotune temporarily disabled for correctness (#41524).
* **DSV4**: Improved fused Indexer Q quant kernel (#41428).

### API & Frontend
* **Responses API**: Streaming tool/function calling with `required` (#40700) and named tool/function choice (#41110), resubmitting output items with missing fields (#41355).
* **OpenAI compatibility**: `system_fingerprint` field in responses (#40537), `prompt_embeds` content part support (#40720), `defer_loading` and `tool_reference` support (#40190), rendered prompt text in chat completion response (#42052), tolerate empty content in forced tool choice (#40148).
* **Tool calling**: XGrammar 0.2.0 with structural tags for strict tool calling + reasoning (#40894), Cohere reasoning/tool parsers (#40422), LFM2/2.5 tool parser (#39243).
* **Tokenizer**: Fastokens support (#41741).
* **RLHF**: Explicit `/start_weight_update` and `/finish_weight_update` APIs (#39212).
* **ASR**: Engine request abort on cancellation (#41266).
* **Configuration**: `VLLM_SKIP_MODEL_NAME_VALIDATION` env var (#34676), configurable model weights loading tracking (#41086), Triton JIT compilation monitor (#40137).

### Build & Dependencies
* **Breaking**: C++20 required for PyTorch compatibility (#40380).
* **Breaking**: Transformers v4 deprecated (#40389).
* Docker image size reduced by ~2.5 GB via deferred FlashInfer cubin download (#41134).
* CUDA 13.0 wheels switched to PyTorch manylinux_2_28 base (#41416).
* DeepGEMM bundled wheel built per-Python for CPython compatibility (#41516).
* Container image provenance metadata embedded (#40653).
* tpu-inference upgraded to v0.19.0 (#41844).
* NIXL connector bumped to 1.x (#42364).
* ROCm 7.2.2 (#41386).

## Contributors

@AndreasKaratzas, @haosdent, @khluu, @yewentao256, @stecasta, @mgoin, @Isotr0py, @hmellor, @chaunceyjiang, @jeejeelee, @noooop, @MatthewBonanni, @njhill, @zyongye, @yzong-rh, @ronensc, @NickLucche, @chaojun-zhang, @dzhengAP, @chfeng-cs, @TheEpicDolphin, @esmeetu, @wzhao18, @ZJY0516, @juliendenize, @kylesayrs, @fadara01, @Etelis, @tianmu-li, @arpera, @ekagra-ranjan, @orozery, @wxsIcey, @jikunshang, @izhuhaoran, @rasmith, @russellb, @Lucaskabela, @Harry-Chen, @alec-flowers, @pmaybank, @Terrencezzj, @hickeyma, @Baekpica, @itej89, @fxmarty-amd, @WoosukKwon, @juhi10071998, @sychen52, @baonudesifeizhai, @vllmellm, @johncalesp, @the-david-oy, @lucianommartins, @bittoby, @Dao007forever, @lyd1992, @yuwenzho, @lesj0610, @sfeng33, @micah-wil, @akii96, @yma11, @SoluMilken, @mmangkad, @SiluPanda, @ojhaanshika, @zhandaz, @bhoomit, @simon-mo, @msanft, @angelayi, @anthonsu, @artem-spector, @zhangxin81, @benoittgt, @joerowell, @yangrz7, @chelnnexy, @liangel-02, @walterbm, @rishitdholakia13, @SKRohit, @BugenZhao, @JaredforReal, @amd-lalithnc, @frgossen, @h-avsha, @DarkLight1337, @danisereb, @laithsakka, @Bortlesboat, @wangluochao902, @Rohan138, @hao-aaron, @puririshi98, @roikoren755, @heachary, @UranusSeven, @dsingal0, @ChenxiQ, @snadampal, @ilmarkov, @wendyliu235, @lequytra, @JisoLya, @LuisRobaina, @sniper35, @eicherseiji, @Yuyi-Ao, @raviguptaamd, @sungsooha, @ganyi1996ppo, @andylolu2, @FredericOdermatt, @ProExpertProg, @rbrugaro-amd, @mcsantiago, @hnt2601, @jinzhen-lin, @taneem-ibrahim, @tomeras91, @alex-jw-brooks, @Aktsvigun, @HanFa, @netanel-haber, @JasonKeyiL, @gshtras, @joa-stdn, @Seven-Streams, @JartX, @xuechendi, @BowenBao, @Akashcodes732, @jeffreywang-anyscale, @czhu-cohere, @zhewenl, @marvinzh, @Lidang-Jiang, @gcanlin, @whx-sjtu, @S1ro1, @liulanze, @Dhruvilbhatt, @laviier, @wi-adam, @aaab8b, @yuankaichen-amd, @ZhanqiuHu, @QwertyJack, @viktorpusTT, @divakar-amd, @starkwj, @benchislett, @jcyang43, @JLiu4Coding, @xy3xy3, @hongxiayang, @amd-mghanimi, @wenyili, @bigPYJ1151, @s-yanev, @AlonKejzman, @noobHappylife, @TomerBN-Nvidia, @MeganEFlynn, @liuzijing2014, @jbuchananr, @lokashrinav, @ssam18, @dllehr-amd, @gmagogsfm, @tpopp, @tjtanaa, @simondanielsson, @zhenwei-intel, @HiroakiMikami, @nholmber, @SumanthRH, @LucasWilkinson, @maeehart, @rishaps, @r-barnes, @gau-nernst, @Kermit-C, @tdoublep, @aoshen02, @Naveassaf, @wangxingran222, @cvan20191, @AbhiOnGithub, @abdulrahman-cohere, @jmamou, @Flink-ddd, @bnellnm, @hqhq1025, @gnovack, @wangxiyuan, @princepride, @jiahanc, @LCAIZJ, @ovidiusm

## New Contributors

* @abdulrahman-cohere made their first contribution in https://github.com/vllm-project/vllm/pull/41266
* @AbhiOnGithub made their first contribution in https://github.com/vllm-project/vllm/pull/42180
* @Aktsvigun made their first contribution in https://github.com/vllm-project/vllm/pull/40788
* @amd-mghanimi made their first contribution in https://github.com/vllm-project/vllm/pull/41713
* @Baekpica made their first contribution in https://github.com/vllm-project/vllm/pull/41206
* @benoittgt made their first contribution in https://github.com/vllm-project/vllm/pull/41134
* @bittoby made their first contribution in https://github.com/vllm-project/vllm/pull/41690
* @chelnnexy made their first contribution in https://github.com/vllm-project/vllm/pull/40754
* @ChenxiQ made their first contribution in https://github.com/vllm-project/vllm/pull/40956
* @chfeng-cs made their first contribution in https://github.com/vllm-project/vllm/pull/42066
* @cvan20191 made their first contribution in https://github.com/vllm-project/vllm/pull/40951
* @dzhengAP made their first contribution in https://github.com/vllm-project/vllm/pull/41423
* @ghphotoframe made their first contribution in https://github.com/vllm-project/vllm/pull/40859
* @HiroakiMikami made their first contribution in https://github.com/vllm-project/vllm/pull/40588
* @itej89 made their first contribution in https://github.com/vllm-project/vllm/pull/39721
* @JasonKeyiL made their first contribution in https://github.com/vllm-project/vllm/pull/41068
* @jbuchananr made their first contribution in https://github.com/vllm-project/vllm/pull/39243
* @JisoLya made their first contribution in https://github.com/vllm-project/vllm/pull/41363
* @JLiu4Coding made their first contribution in https://github.com/vllm-project/vllm/pull/41832
* @juhi10071998 made their first contribution in https://github.com/vllm-project/vllm/pull/41050
* @Kermit-C made their first contribution in https://github.com/vllm-project/vllm/pull/42076
* @lequytra made their first contribution in https://github.com/vllm-project/vllm/pull/41401
* @Lidang-Jiang made their first contribution in https://github.com/vllm-project/vllm/pull/38099
* @liulanze made their first contribution in https://github.com/vllm-project/vllm/pull/41571
* @lokashrinav made their first contribution in https://github.com/vllm-project/vllm/pull/41681
* @LuisRobaina made their first contribution in https://github.com/vllm-project/vllm/pull/40720
* @maeehart made their first contribution in https://github.com/vllm-project/vllm/pull/42061
* @marvinzh made their first contribution in https://github.com/vllm-project/vllm/pull/40136
* @mcsantiago made their first contribution in https://github.com/vllm-project/vllm/pull/41492
* @MeganEFlynn made their first contribution in https://github.com/vllm-project/vllm/pull/41880
* @nholmber made their first contribution in https://github.com/vllm-project/vllm/pull/39280
* @pmaybank made their first contribution in https://github.com/vllm-project/vllm/pull/41012
* @raviguptaamd made their first contribution in https://github.com/vllm-project/vllm/pull/34726
* @s-yanev made their first contribution in https://github.com/vllm-project/vllm/pull/41755
* @S1ro1 made their first contribution in https://github.com/vllm-project/vllm/pull/39213
* @Seven-Streams made their first contribution in https://github.com/vllm-project/vllm/pull/40894
* @SiluPanda made their first contribution in https://github.com/vllm-project/vllm/pull/40907
* @SKRohit made their first contribution in https://github.com/vllm-project/vllm/pull/40786
* @snadampal made their first contribution in https://github.com/vllm-project/vllm/pull/32553
* @sniper35 made their first contribution in https://github.com/vllm-project/vllm/pull/32325
* @ssam18 made their first contribution in https://github.com/vllm-project/vllm/pull/41486
* @the-david-oy made their first contribution in https://github.com/vllm-project/vllm/pull/40737
* @wangluochao902 made their first contribution in https://github.com/vllm-project/vllm/pull/41043
* @wenyili made their first contribution in https://github.com/vllm-project/vllm/pull/41901
* @wi-adam made their first contribution in https://github.com/vllm-project/vllm/pull/40749
* @xy3xy3 made their first contribution in https://github.com/vllm-project/vllm/pull/40820
* @yangrz7 made their first contribution in https://github.com/vllm-project/vllm/pull/40449
* @yuankaichen-amd made their first contribution in https://github.com/vllm-project/vllm/pull/40390
* @zhangxin81 made their first contribution in https://github.com/vllm-project/vllm/pull/39904

---

> **Source** [vllm-project/vllm](https://github.com/vllm-project/vllm) · `v0.21.0` · 2026-05-15 · [upstream release](https://github.com/vllm-project/vllm/releases/tag/v0.21.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
