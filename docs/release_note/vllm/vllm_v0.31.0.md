---
title: "vllm v0.31.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.31.0"
version: "v0.31.0"
published: "2026-10-05"
type: "minor"
lang: "en"
summary: "This release features 717 commits from 307 contributors (96 new)!"
---

# vllm v0.31.0

# v0.31.0

## Highlights

This release features 717 commits from 307 contributors (96 new)!

* **DeepSeek-V4.1-Flash performance**: FlashMLA mega attention with the V4.1 NVFP4 compressed KV cache is now the SM100 default (#56935); DeepGEMM sparse MQA logits for the indexer (#56254) and Mega-Gate fusing the gate GEMM with expert selection (#56266); decoder boundaries fuse the TP all-reduce, mHC input preparation (#57643) and the MoE finalize (#58586); a fused small-batch WO-A with inverse RoPE and MXFP8 quant on SM100/SM103 (#58634); the MXFP8 `wo_b` GEMM fused with the sequence-parallel reduce-scatter (#57428); Engram `wkv` sharded across TP ranks (#58678) and Engram host tables shared across co-located DP replicas by default (#57651); encoder CUDA graphs for the vision tower (#56625); and SWA bounded replay that keeps the sliding-window KV out of prefix caching (#56227).
* **Fast restart**: the new `vllm preload` CLI launches the weight-cache daemon that keeps post-quantized weights resident in GPU memory across engine restarts (#56680), now with data parallelism (#57386), MTP draft models (#57312), a `/health` endpoint (#58552) and a readiness wait (#58370). Experimental initialized-engine snapshots (`vllm snapshot create/restore`) use CRIU to restore a fully initialized TP1 engine (#51360).
* **Model Runner V2 and speculative decoding**: draft-model speculative decoding (#43091) and custom logits processors (#56497) on Model Runner V2; the new LiLiCorr drafter (#57934); async scheduling for DFlash (#58065) with the context K/V precompute captured in the draft CUDA graph (#57632); DSpark adaptive verification for Gemma4 (#57263) and variable-length decode for Kimi-K3 (#52988); a DCP target with a non-DCP DSpark draft (#56723); and MoE memory now counted during MRV2 profiling, avoiding OOMs on WideEP deployments (#57270, #58411).
* **Large scale serving**: MoonEP balanced EP all2all backend via `--all2all-backend moonep` (#52101), prefill context parallelism with data parallelism (#57075), a low-SM multimem reduce-scatter for SM100/SM103 (#55072), DeepEPv2 with sequence parallelism (#57210) and EPLB with shared-expert overlap (#57236), a sharding-aware NCCL M2N weight-transfer backend for RL (#51520), and KV offloading back-pressure detection (#50045).
* **Scheduling controls**: `--max-num-active-seqs` caps RUNNING admission independently of `max_num_seqs` (#56758), `--long-prefill-token-threshold` now adapts to the number of waiting prefills instead of chunking a lone request (#57951, #58459), the waiting queue was reworked so requests already holding KV blocks are scheduled first (#58947), and the KV connector + MTP deadlock under KV pressure was fixed (#57104).
* **HiSparse hardening**: MTP verification rows resolved with a union residency kernel (#59235), MTP acceptance collapse under FULL graphs fixed (#59309), no GPU pages without host backing (#59036), a chunked-prefill preemption livelock fixed (#59494), KV cache sized from the groups HiSparse allocates (#59450), and host prefix publication and GPU prefix adoption fixes (#59007, #59282).
* **Security**: per-request `mm_processor_kwargs` and `media_io_kwargs` are rejected unless `--trust-request-mm-kwargs` is set (#58830); prefix-cache extra keys are tagged by source so a LoRA name and a `cache_salt` can no longer collide (#51899), and the LoRA path is part of the block hash (#59335); stale multimodal receiver-cache entries can no longer replace fresh payloads (#57833).
* **Breaking changes**: per-request multimodal kwargs gated (#58830); `tokenizer_mode="slow"` removed (#58545); `--enable-mamba-fine-grained-prefix-cache` renamed to `--enable-mamba-shared-prefix-checkpoint` (#57382); online quantization through `quantization="fp8"` replaced by the `fp8_per_tensor` shorthand (#53585) and Quark silent online quantization removed (#51800); the AllSpark INT8 W8A16 backend removed (#58001); `--enforce-eager` now also disables JIT kernel warmup (#58197); XPU graphs enabled by default with `VLLM_XPU_ENABLE_XPU_GRAPH` removed (#51600).

## Release Artifacts

### Python Wheels

| Platform | Install |
|---|---|
| PyPI (CUDA 13.0) | `pip install vllm` |
| PyPI (CUDA 13.0, uv) | `uv pip install vllm --torch-backend=auto` |
| ROCm | `pip install vllm --extra-index-url https://wheels.vllm.ai/rocm/0.31.0/rocm723` |
| XPU | `uv pip install vllm --extra-index-url https://wheels.vllm.ai/0.31.0/xpu --extra-index-url https://download.pytorch.org/whl/xpu --index-strategy unsafe-best-match` |

### Docker Images

| Platform | Docker Image |
|---|---|
| CUDA 13.0 (Default) | `docker pull vllm/vllm-openai:v0.31.0` |
| CUDA 12.9 | `docker pull vllm/vllm-openai:v0.31.0-cu129` |
| ROCm | `docker pull vllm/vllm-openai-rocm:v0.31.0` |
| CPU | `docker pull vllm/vllm-openai-cpu:v0.31.0` |
| XPU | `docker pull vllm/vllm-openai-xpu:v0.31.0` |

### Other Artifacts

Pre-built release artifacts are available in the **Assets** section at the bottom of this page, including:
- Source distribution tarball
- CUDA 12.9 Python wheels for x86_64 and arm64
- CUDA 13.0 Python wheels for x86_64 and arm64
- CPU Python wheels for x86_64, arm64, and macOS
- XPU Python wheel for x86_64

## Model Support
* **New model capabilities**: DiffusionGemma structured generation mode with bounded single-token choices (#57250), MiMo V2 MXFP4 MoE, BF16 MoE router and DFlash drafts (#57784), Cohere2MoE auxiliary hidden states for EAGLE3/DFlash drafters (#49819), GLM-5.2-MXFP4 on the ROCm DeepSeek-V3.2 path (#51915), AMD-Quark mixed-precision DeepSeek-V4.1-Flash-MXFP4 (#57071) and GLM-5.3-Flash Quark MXFP4 (#56176) checkpoints, and a built-in `granite_thinking_parser` for Granite 4.2 (#55957).
* **DeepSeek-V4.1-Flash**: FlashMLA mega attention with the NVFP4 compressed KV cache as the SM100 default (#56935), DeepGEMM sparse MQA logits in the indexer (#56254), Mega-Gate (#56266), fused TP all-reduce + mHC input preparation (#57643) with the MoE finalize folded in (#58586), fused small-batch WO-A (#58634), MXFP8 `wo_b` GEMM + reduce-scatter (#57428), overlapped mHC coefficients for small TP batches (#57603) limited to FULL CUDA graphs (#57874), Engram `wkv` sharded across TP (#58678), serialized Engram lookups with huge-page host tables (#56926), Engram tables shared across DP replicas by default (#57651, #57914, #59068), native shared-expert MegaMoE fusion without padding (#56568, #57204), faster MegaMoE staging and NVFP4 cache gathers (#57604), the fused query RMSNorm + MXFP8 path restored (#57679), KV-only DSpark context insertion (#56441), vision encoder CUDA graphs (#56625, #58499), SWA bounded replay (#56227), causal image SWA restored to match the reference (#57152), updated reasoning effort mappings (#58316), and startup fixes for NaN-scored candidate blocks (#57454), DeepSelect sentinels (#58215), DSpark non-causal attention on FlashInfer (#57432), runtime JIT of offset candidate buffers (#57667) and imports without Triton (#57654).
* **DeepSeek V4**: FlashInfer sparse MLA with fused inverse RoPE + FP8 quant (#58621), stacked DSpark context WKV projections (#54674), fused MoE expert distribution computed from the EP group (#57465), FIM completion via `suffix` (#44229), missing `string=` in tool calls parsed (#56271), request tools attached to an existing system message (#51856), image block spacing preserved (#56882), and DSpark width separated from MTP stage validation (#54631).
* **GLM-5.3-Flash**: opt-in FlashAttention and FlashMLA sparse backends on SM90 (#55385), NoPE sparse MLA on the FlashInfer SM120 backend (#55277), cooperative top-k for small decode batches (#57327), indexer decode workspace sized by pooled length (3 GiB saved, #57701), metadata ops 1.6-4.8x faster (#58450), fused kpool tail slot mapping (#57534), kpool top-k through the shared dispatcher (#57546), lower sparse MLA preparation overhead (#57458), no D2H sync in the SM90 sparse MLA plan under async scheduling (#58684), FlashKDA keeping the recurrent state in FP32 for long prefills (#58846), and correctness fixes for kpool corruption with speculative decoding (#58454), SM90 `index_kpool` mismatch (#58704), kpool tail strides (#57477), 500k-token prompts (#57317), dense MLP layers under sequence parallelism (#58061), indexer top-k backend selection (#58594) and varlen paged MQA launches (#55270).
* **Qwen3.8-Flash-Next (Qwen4Exp)**: FP8 main KV cache on the QSA path (#55557), FP8 TP with FlashInfer TRTLLM MoE (#55867), SM90 QSA tuning (#57273), fused HC down projection + SiLU (#58957), lower PLE metadata overhead (#58114), QSA indexer workspace fragmentation fixed (#57105), profiling KV cache released (#58961), pinned PLE prefetch ids kept out of the CUDA graph pool (#58489), and indexed expert-mapping lookups saving about 25 s of weight loading on DGX Spark (#58720).
* **Kimi K3 and MiniMax-M3**: Kimi-K3 vision patch embedder as a GEMM (#58527), fused KimiViT QK RoPE (up to 29x, #58651), routed expert quantization (#57430), reasoning parser (#57098) and reasoning token counting (#58372) fixes, DSpark context KV pointers refreshed after re-binding (#58814), stateless first chunks no longer classified as decodes (#51483), and Mamba block estimates that no longer stall admission on external prefix hits (#57050); MiniMax-M3 encoder CUDA graphs (#58673), `Conv3dLayer` patch embedding (about 62x, #58512), `triton_mrope` in the vision tower (#58526), fused MiniMax2 routing with non-unit scaling (#58880), and processor fixes (#58460, #59613).
* **DiffusionGemma**: one-pass sampler statistics kernel (#58226), `diffusion_constrained` reads over `logprob_token_ids` (about 25% faster, #58216), fewer logit rows for prefill-only batches (#57416), `logprob_token_ids` support (#57417), and fixes for concurrent logprobs (#57414), eager fallback dtype (#57462), multimodal inputs (#57589), quantized LM heads (#48521) and CPU execution (#58964).
* **Multimodal**: Triton `mm_input_norm` kernel (#56798, #56711), raw pixels kept through the DP-sharded ViT path (#56872), Qwen2.5-VL video fps honored for temporal M-RoPE (#47736), Whisper and Qwen2-Audio clips longer than 30s (#57769, #56912), Mistral3 placeholder grid (#53758), Idefics3 unsplit patches (#48760), Ovis2.5 tokens (#52623), Aria expert weights (#57487), MiMo-V2.5 fused FP8 `qkv_proj` sharding (#57508), Gemma4 `AutoWeightsLoader` (#55911) and buffer scalars (#54213), Gemma4 FP8 KV with FA4 at head dim 512 (#53175), Laguna RoPE (#57189), Mistral-Large-3 accuracy regression (#57563), malformed EXIF (#56527, #57234), JinaVL labels (#57347), Sarvam MLA routing with FP32 router logits (#56034), fused CohereASR attention scores (#55190), and fused DFlash2 grouped convolution (#55960).
* **LoRA**: Nemotron VL language models (#56231), ModernBert (#57148), VoyageQwen3 embeddings (#57708), RoBERTa sequence classification (#58884), and `modules_to_save` sequence-classification heads (#53555) with per-adapter `num_labels` (#57766).

## Engine Core
* **Model Runner V2**: draft-model speculative decoding (#43091), custom logits processors (#56497) validated at admission (#57728), randomized dummy inputs (#58411), dummy tokens routed to MoE experts during profiling (#57270), FULL decode graphs for one-token prompt tails (#58400), token-to-request mappings shared (#57102) and Mamba/GDN metadata reused across KV cache groups (#58762), encoder-only ViT CUDA graphs (#56922), weight offloader (#57834) and pooling model (#57737) released on shutdown, and fixes for multi-layer MTP KV in P/D (#55055), fast-prefill with LoRA (#56456), stale block-table writes from dummy draft steps (#56734), padded prompt tails in hybrid models (#58434), never-proposed draft slots (#58784), auto-fit `max_model_len` (#58149) and `intermediate_tensors` during capture (#57745).
* **Speculative decoding**: LiLiCorr drafter (#57934), DFlash async scheduling (#58065) and context K/V in the draft CUDA graph (#57632), Gemma4 DSpark adaptive verification (#57263), Kimi-K3 variable-length adaptive verification (#52988), CPU-GPU sync removed for heterogeneous vocabularies (#57396), Triton recompiles avoided in the acceptance estimator (#57107), and fixes for EAGLE/dense drafts with EP (#56930), DFlash/DSpark profiling batches (#56448), GLM MTP head memory (#55442), prompt embeddings with drafts (#57356), and TritonMLA causal multi-token decode (#51065).
* **Scheduler**: `--max-num-active-seqs` (#56758), adaptive `--long-prefill-token-threshold` (#57951, #58459), `skipped_waiting` replaced by a KV-holding waiting queue (#58947), atomic admission of `n > 1` requests (#53936), KV connector + MTP deadlock (#57104), a throughput cliff when `max_num_seqs` is not a multiple of 8 (#57355), streaming continuations keeping logprobs and refreshing max tokens (#57447, #57676), a resumable request + async scheduling race (#58259), and a non-blocking structured-output grammar poll (#55931).
* **Prefix caching and hybrid models**: extra keys tagged by source (#51899) and LoRA paths hashed (#59335), `--enable-mamba-shared-prefix-checkpoint` (#57382), prompt-tail hits with MTP restored (#58368), prompt-end checkpoints kept under sparse retention (#59146), align-mode checkpoint reservation (#59175), stateless GDN first chunks (#51565), MTP draft KV cache groups annotated on the hybrid grouping path (#55390), a generalized prefill checkpoint builder (#57783), batched Mamba2 prefill state saves without GPU-CPU syncs (#49371), `skip_reading_prefix_cache` honored for connector hits (#57269), incremental multimodal block hashing (#51694), a KV block size every attention backend supports (#49845) with clearer errors (#58557), and `CacheConfig.effective_attention_block_size` for DCP (#56538).
* **Startup and memory**: parallel Triton warmup compilation (#58582), JIT warmup disabled under `--enforce-eager` (#58197) unless fault tolerance is on (#58593), DeepGEMM warmup reusing the MoE workspace (#57268), allocator fragmentation no longer shrinking the KV cache during profiling (#58430), sparse prefill buffers reserved before KV sizing (#57575), stale FlashMLA workspace views released (#56902), DeepGEMM FP8 workspace halved (#53914), shared Marlin/Humming workspaces (#57421), FlashInfer BF16 MoE weights converted in place (#54699), UniProc startup threads bounded by the CPU quota (#58946), and runtime threads set before profiling (#55891).
* **Kernels**: sampled filtering for persistent top-k (#56346), Murmur3 RNG for Gumbel sampling (#51367), register-resident per-token-group 8-bit quant (#55330), vectorized per-tensor FP8 abs-max (#58194), a Triton kernel dispatcher for platform-specific overrides (#43048), `GateLinear` for all MoE models (#58234), non-local expert slots skipped in `TritonExperts` (#58051), deferred TRT-LLM-Gen top-k finalize on the modular path (#58635), SM120 batch-invariant matmul configs (#57456), FlashInfer prefill dequant scratch bounded (#57918), and fixes for Triton softcap NaNs (#56579), QuIP Hadamard transforms (#43462), CUTLASS FP8 linear on A100 (#55884), FlashInfer sampling on unsupported GPUs (#48956), SM100 FP8 blockwise scale padding (#57377), mixed FULL graph prefill capture (#58275) Inductor custom-op pattern matching (#58189), CuteDSL BF16 GDN prefill diverging from FLA on Qwen3.5 (#53864), SM100 `fp8_ds_mla` cache scales (#49435), ragged decode batches in the sparse indexer (#52500), stale `allowed_token_ids` masks after batch reordering (#48419, #43931), and `prompt_embeds` tensors held after requests finish (#57988).
* **Batch invariance**: breakable CUDA graphs without torch.compile by default under `VLLM_BATCH_INVARIANT` (#57586), sequence parallelism and async TP disabled (#56377), and NCCL 2.31 collectives kept enabled (#58179).
* **Sleep and RL**: `release_kv_cache_memory()` frees only KV cache memory (#44890), `--sleep-preserve-parameter-names` retains frozen weights across level-2 sleep (#57891), NCCL M2N weight transfer (#51520), dense DP weight updates by DP index (#56950), allocator config kept when toggling expandable segments (#57982), and cache reset failures propagated during sleep (#54581).
* **Fast restart**: `vllm preload` (#56680), DP (#57386), MTP drafts (#57312), readiness wait (#58370), `/health` (#58552), ModelOpt MXFP8 pre-processed weights (#57316), and initialized-engine snapshots (#51360).
* **Logging and observability**: `LoggingConfig` via `--logging-config` and `--log-level` (#57205), JSON logging fixes (#57957, #58747), startup log suppression fixed (#51366), unified platform-aware torch profiling (#57460), no 0.0% prefix cache hit rate before any query (#54990), KV transfer metrics formatting (#57068), MFU activation sizing from the model dtype (#57070), platform-overridable env var checks (#48599), `VLLM_TARGET_DEVICE=empty pip install vllm` for out-of-tree backends (#41074), and the correct vLLM version reported when installing from source (#57295, #57744).

## Large Scale Serving
* **MoE communication**: MoonEP backend (#52101), DeepEPv2 with sequence parallelism (#57210) and EPLB + shared-expert overlap (#57236), low-SM multimem reduce-scatter (#55072), EPLB load statistics during Elastic EP scaling (#58473), SP padded rows skipped in grouped routing so rank 0 is no longer a prefill straggler (#56079), hash routing rejected on unsupported monolithic backends (#57867), sampled-token broadcasts skipped under PP for requests leaving the engine (#58542), DBO with DeepEP low-latency profiling (#57502), external LB with replicas sharing nodes (#53743), and no blocking RPC during the engine handshake (#57226) or unbounded draft-token waits (#58779).
* **Context parallelism**: PCP with DP, EP and MTP (#57075), a DCP target with non-DCP DSpark/DFlash drafts (#56723), DCP sequence lengths without a CPU-GPU sync (#58169), and NIXL DCP pulls across MLA cache regions (#57389).
* **KV connectors**: NIXL pipeline-parallel push prefill for attention-HMA (#50494) and packed MLA layouts (#50499), transport-failure metrics split from KV expiry (#55854), dead peer state released without waiting for TTL (#50047), expired leases reaped behind a heartbeated head (#58292), push completion restored (#58188), D-side activity recorded (#52245); Mooncake `CUSTOM_MEM_POOL` (#49300), request-level load failures under HMA (#56855, #57174) and bootstrap retries (#58919); MoRIIO hybrid Mamba/KDA state in READ mode (#51052) and a multi-decode routing race (#51681); prefill cache hits in `prompt_tokens_details` (#54222); KV-event publishers bound at port 0 (#55844); KV cache metadata GET restored for external consumers (#56925); partial-block KV events keep every multimodal feature (#58288); saves finalized on steps without a forward (#57775); abort-safe `ExampleHiddenStatesConnector` (#56841); DecodeBench FP8 fills (#58472); a `KvHints` request envelope (#53423); and the AuxOutput connector for routed-expert outputs (#45635, #58150, #58205).
* **KV offloading**: per-request `max_load_tokens` (#55885), back-pressure detection (#50045), `SimpleCPUOffloadConnector` Prometheus metrics (#57251), non-prefix-cacheable (#56810) and scratch (#57145) groups skipped, replicated layouts for multi-group MLA (#57652), regions of 512 GiB or more registered in chunks (#51081), cgroup memory checked before SHM allocation (#54014), and fixes for cache recency (#51787), MTP-retained sliding windows (#56709), canonical MLA rows (#56799), event metadata (#57453) and ROCm pinned memory (#57160).
* **HiSparse**: union residency kernel for MTP rows (#59235), MTP acceptance under FULL graphs (#59309), host-backed allocation (#59036), preemption livelock (#59494), KV cache sizing (#59450), host prefix publication (#59007), GPU prefix adoption (#59282), and residency metrics (#58725).
* **Encoder disaggregation (EPD)**: dynamic EPD proxy with launcher-managed registration (#54176), image requests batched per encoder (#57095), cross-encoder caching through Mooncake (#56242), metadata-only audio inputs (#57887), language-model shards skipped for `--mm-encoder-only` (#58086), EC connector metrics (#54960), and encoder-only fixes (#58490, #58287, #57696).

## Hardware & Performance
* **NVIDIA**: FlashInfer 0.7.0.post1 (#58069, #59323), DeepGEMM pin bump with SM120 fixes (#57218), Rubin CUDA 13.4 nightly images (#55953), and QuTLASS builds with PyTorch 2.13 (#58173).
* **AMD ROCm**: AITER v0.1.23 (#56885, #58867), torch 2.13 and Triton 3.8 (#50605, #58006), `triton_kernels` 3.8 MXFP4 MoE for gpt-oss and DeepSeek-V4 (#55934), a ROCR host segfault fixed (#57328); DeepSeek-V4/V4.1 HCA dual-stream (#56853) and layer-aware CSA2 overlap (#57407), FP8 `wo_a` (#54894), inverse RoPE fused into the sparse decode reduce (#57435, #57451) which now emits MXFP8 for a grouped FP8 `wo_a` (#58456), MXFP8 GEMM on native 32x32 scales on gfx950 (#58510), reused top-k ragged metadata (#57434), faster candidate block selection (#58208), Engram tables in host memory (#57491) and Qwen3.8-Flash-Next PLE tables offloaded to host memory (#57497), an opt-in AITER ASM decode route for DCP + speculative decoding (#56861), `get_top_tokens()` on the DeepSeek V4 MTP drafter (#57568), DSpark adaptive verification (#52362), opt-in `VLLM_DSV4_LOGITS_FIX` for sparse-indexer logits on gfx950/gfx942 (#50455), an accuracy revert of #56433 and #51692 (#57132), and clear errors for FSE with DPA+ETP (#57919); Kimi-K3 a4w4 FlyDSL kernels (#53940) with `VLLM_ROCM_USE_AITER_MOE_SITUV2=a16w4|a8w4|a4w4` (#58201), low-concurrency speculative KDA (#58045), sharded latent MoE under EP (#54956) and fewer projection copies (#50592); a ROCm Hy4 path with torch.compile (13x lower decode latency, #57526); MiniMax-M3 AITER QK-norm fusion (#54535), copy-free K/V insert (#56849) and MXFP8 fixes (#53674, #58089); GLM-5.3-Flash boot fixes (#57192, #57252, #57425); AITER QuickReduce + RMSNorm (#48249), BF16 AsyncTP (#58098), static FP8 attention output fusion (#58099), QK-norm/RoPE/KV-cache fusion for MRoPE (#50212), AITER GDN decode for flat layouts (#53623), `wvSplitK` for single-output GEMMs (#53283), 69 fewer copies per decode step on the skinny GEMM path (#58566), tuned GEMM lookup through AITER (#55001), a narrower Triton prefill KV tile on RDNA3/RDNA4 (#58225), staged large pageable H2D copies (#56343), and fixes for MXFP4 MoE padding starving the KV cache (#56359), AITER MLA FP8 prefill OOM (#57923), unquantized cache descales (#56726) and AITER MoE fallbacks (#56590, #57866, #57426). `VLLM_ROCM_USE_AITER_FP4_ASM_GEMM` is restored and off by default (#57055); SWA bounded replay is disabled on ROCm (#57906).
* **Intel XPU**: PyTorch 2.14 (#56013), XPU graphs on by default (#51600), EPLB (#44987), int8 W8A8 MoE on Triton (#53162), batch invariance (#55881), SYCL rotary embedding (#55721), fused QK RMSNorm + RoPE + gate (decode region 55% faster, #56096), Model Runner V2 sampler (#57277) and PP microbatch control (#55145), `--device-ids` honored (#56015), and device pointer overflow fixed (#54514).
* **CPU**: FP8 W8A8 linear and MoE for Intel Diamond Rapids (#49942), Arm paged attention up to 25% faster (#56045), Zen DA8W4 int4 for dense and MoE layers (#54024), zentorch SDPA for encoder attention (#54508) and MLA prefill (#54967), FP32 attention sinks (#56252), W8A8 INT8 MoE on POWER (#55316), W4A16 Whisper (#58268), wheels built on Ubuntu 22.04 (glibc 2.34) with AMX-FP8 (#58515), AVX10.2 gated on compiler support (#58133), pre-built Triton CPU (#58140), `--device-memory-utilization` alias (#56547), vLLM Recipes in the CPU image (#58796, #57306), s390x protobuf pin (#54978) and torchcodec video (#58693), and fixes for Ministral FP8 (#56985), FP32 router weights (#56168), zentorch import failures (#54923), macOS multimodal SHM (#57142), CPU affinity per local rank (#53636) and NIXL GDN state layout (#53300).

## Quantization
* **Humming**: Hadamard transforms and NVFP4/MXFP4/MXFP8 online quantization (#56685), asymmetric wNaM through compressed-tensors (#46528), humming-kernels 0.1.16 (#58054), and Humming in the W4A8 (INT4xFP8) MoE oracle (#58427).
* **New capabilities**: native Quark W4A16 INT4/UINT4 exports (#48606), opt-in load-time MXFP4 dequantization (#50814), explicit per-token NVFP4 MoE backends (#57176), and a canonical N-first layout for compressed-tensors WNA16 MoE (#52798).
* **Fixes**: MXFP8 on layers below `mm_mxfp8` shape limits (#54223), online NVFP4 scales on reload (#57954), LM head linear metadata (#58444), and the fused SiLU-mul block-quant path skipped under a SwiGLU clamp (#57984).

## API & Frontend
* **New options and endpoints**: `--tool-strict-level` (#56268), `response_format` with `tool_choice=auto` (#56086), DeepSeek-V4 FIM completions (#44229), `release_kv_cache_memory()` and `POST /release_kv_cache_memory` (#44890), fixed-token prefill scoring via `prompt_logprob_token_ids` (#54335), per-request speculative decoding metrics in `/inference/v1/generate` (#43310), per-request metrics (#55084) and `cache_write_tokens` (#57222) in the Responses API, Anthropic `thinking` in `/v1/messages` (#58613), streaming reasoning and tool calls from the derender endpoint (#50550) with offloaded detokenization (#57528), `vllm chat` streaming thinking output (#57045), request body debug logging with `--enable-log-requests` (#58163), and only the summary line of config docstrings in `--help` (#57357).
* **Structured output and parsers**: native Lark grammars in the xgrammar backend (#58321), XGrammar 0.2.7 (#57272), Granite migrated to the streaming Parser Engine (#49648), and fixes for reasoning boundaries (#56635), xgrammar choices with control characters (#48115), list-typed JSON Schema (#48416), empty `structural_tag` (#47450), outlines EOS handling (#58612, #57743), parser-suppressed streaming logprobs (#58583), Inkling tool names after reasoning (#58792), and length `finish_reason` for truncated streaming tool calls (#46303).
* **OpenAI, Anthropic and Harmony compatibility**: reasoning token counts for Harmony, DeepSeek-V3 and Step3 (#58626) and per Responses tool round (#58927), Harmony `max_output_tokens` in the tool loop (#58551), batched chat completions using the adjusted requests (#58929, #58958), a fresh parser per choice (#58939), deferred reasoning recounts (#56067), Responses MCP cleanup (#56988) and image `detail` default (#57241), Anthropic inline system detection (#58754) and disabled thinking with P/D (#58786), stop strings rejected on `--tokens-only` servers (#57058), invalid `prompt_embeds` returning 400 (#55451, #57006), prompts bounded after multimodal expansion (#57076), `--override-generation-config` penalties (#50769), Hub revisions (#56092, #57461), full logprobs in token-in/token-out responses (#58488), generative scoring cancellation (#57729, #58788), gRPC keepalive pings (#55102), and `run-batch` diarized transcriptions (#57948).
* **Pooling**: chunked embedding padding (#56505) and normalization (#57498), reranker tokenization with document limits (#57666), and BERT-family heads kept for raw logits (#57664).
* **Rust frontend**: `--hf-overrides` (#56931), `--sse-keep-alive-interval` (#58306), custom chat roles (#58311), MiMo V2.5 parsers (#57933), normalized reasoning controls (#56998), parser-owned output grammars (#55269, #57340), sampling masks over gRPC (#56777), local DP size in gRPC metadata with `vllm-proto` 0.3.0 (#57116, #57233), a per-request preemption histogram (#57033), lock-free histograms (#58574), Nemotron-H vision context (#57634), model-owned vision processors (#58109), an `mm-processor` benchmark (#51922, #58084, #58378), unsupported serve args recognized (#58330), NaN logprobs no longer killing the engine client (#51026), appended `EngineCoreOutput` fields accepted (#56533), and `vllm-rs` on `PATH` in the CUDA image (#57606).
* **Benchmarks**: an `openai-responses` backend for `vllm bench serve` (#54628) and `model_id` in latency/throughput JSON (#58112).

## Security
* Per-request `mm_processor_kwargs` and `media_io_kwargs` are rejected by default; trusted deployments opt in with `--trust-request-mm-kwargs` (#58830).
* Prefix-cache block hashes tag extra keys by source (#51899) and include the LoRA path (#59335); multimodal hash input is framed (#54283) and incremental block hashing covers every overlapping feature (#51694).
* Fresh multimodal payloads take precedence over a stale receiver cache (#57833), and encoder-cache hits with mismatched embedding counts are rejected (#57696).
* `min_tokens` above the filled `max_tokens` default is rejected instead of wedging the engine (#57731); message sanitization filters upper-case memory addresses (#58832); LoRA adapters named after a served model are rejected (#59286).

## Dependencies
* FlashInfer 0.7.0.post1 (#58069, #59323), Transformers 5.17.0 (#56108) with an upper bound in requirements (#59614), XGrammar 0.2.7 (#57272), `oss-harmony` replacing `openai-harmony` (#55128), DeepGEMM fork pin bump (#57218), FlashKDA bump (#58846), and humming-kernels 0.1.16 (#58054).
* CUDA 12 images use LMCache 0.4.4 and CuPy CUDA 12 (#57945); a separately tagged zstd Docker Hub image (`-x86_64-zstd`) is published (#55608); Rubin CUDA 13.4 nightly images (#55953).
* ROCm: AITER v0.1.23 (#58867), torch 2.13, Triton 3.8 (#50605, #58006), patched ROCR (#57328), LMCache OpenTelemetry pins (#59056).
* XPU: PyTorch 2.14 (#56013). CPU: wheels built on Ubuntu 22.04 (#58515), pre-built Triton CPU (#58140).

## Breaking Changes & Deprecations
* Per-request `mm_processor_kwargs` and `media_io_kwargs` now return an error unless the server is started with `--trust-request-mm-kwargs`; server-level `--mm-processor-kwargs` / `--media-io-kwargs` and offline `LLM` are unchanged (#58830).
* `tokenizer_mode="slow"` was removed; it already behaved like `"hf"` under Transformers v5 (#58545).
* `--enable-mamba-fine-grained-prefix-cache` was renamed to `--enable-mamba-shared-prefix-checkpoint` (#57382).
* Online quantization through `quantization="fp8"` now redirects to the `fp8_per_tensor` online shorthand (#53585); Quark-specific silent online MXFP4 quantization was removed in favor of the online quantization API (#51800).
* The AllSpark INT8 W8A16 GEMM backend was removed (#58001). The `return_assistant_tokens_mask` option of `/render` and the `assistant_tokens_mask` response field were removed (#57520).
* `VLLM_PLE_CPU_OFFLOAD` was removed; use `--engram-config` (#57937). `VLLM_XPU_ENABLE_XPU_GRAPH` was removed and XPU graphs are on by default (#51600).
* The comma-separated form of `--collect-detailed-traces` was removed; use the list syntax (#55702).
* New defaults: `--enforce-eager` also disables JIT kernel warmup unless fault tolerance is enabled (#58197, #58593); `VLLM_BATCH_INVARIANT=1` uses breakable CUDA graphs without torch.compile (#57586) and disables sequence parallelism and async TP (#56377); DeepSeek-V4.1 SWA bounded replay is on (#56227) except on ROCm (#57906); Engram host tables are shared across co-located DP replicas when possible (#57651); FlashMLA mega attention is the DeepSeek-V4.1 default on SM100 (#56935); the AITER w4a4 ASM GEMM is off by default on ROCm (#57055).
* Model Runner V1 + PP > 1 + async scheduling + structured output is now rejected at startup (#56250); `json_object` is rejected at validation with the outlines backend (#57743).
* `transformers` now has an upper bound in requirements (#59614).

## New Contributors
* @0z5a made their first contribution in https://github.com/vllm-project/vllm/pull/56441
* @200lz made their first contribution in https://github.com/vllm-project/vllm/pull/55528
* @AARONKANG04 made their first contribution in https://github.com/vllm-project/vllm/pull/48521
* @acsoto made their first contribution in https://github.com/vllm-project/vllm/pull/57314
* @adenzhou1350 made their first contribution in https://github.com/vllm-project/vllm/pull/56882
* @adtygan made their first contribution in https://github.com/vllm-project/vllm/pull/56325
* @amasen02 made their first contribution in https://github.com/vllm-project/vllm/pull/56576
* @amd-sriram made their first contribution in https://github.com/vllm-project/vllm/pull/53792
* @andrewor14 made their first contribution in https://github.com/vllm-project/vllm/pull/52956
* @Ankit-Jaiswal-AMD made their first contribution in https://github.com/vllm-project/vllm/pull/56252
* @baljinderhothi-cohere made their first contribution in https://github.com/vllm-project/vllm/pull/58792
* @BaoYunkai made their first contribution in https://github.com/vllm-project/vllm/pull/57568
* @blipbyte made their first contribution in https://github.com/vllm-project/vllm/pull/55612
* @BPbruce made their first contribution in https://github.com/vllm-project/vllm/pull/46466
* @chuan932 made their first contribution in https://github.com/vllm-project/vllm/pull/55330
* @coderfornow made their first contribution in https://github.com/vllm-project/vllm/pull/54978
* @CZT0 made their first contribution in https://github.com/vllm-project/vllm/pull/51694
* @devtyagi3909 made their first contribution in https://github.com/vllm-project/vllm/pull/56635
* @dilberx made their first contribution in https://github.com/vllm-project/vllm/pull/57076
* @divyvasal made their first contribution in https://github.com/vllm-project/vllm/pull/49845
* @equiluxe made their first contribution in https://github.com/vllm-project/vllm/pull/48115
* @errmakov made their first contribution in https://github.com/vllm-project/vllm/pull/58583
* @farzad-elastix made their first contribution in https://github.com/vllm-project/vllm/pull/56168
* @freyfwt made their first contribution in https://github.com/vllm-project/vllm/pull/51367
* @garrett361 made their first contribution in https://github.com/vllm-project/vllm/pull/57984
* @git-jxj made their first contribution in https://github.com/vllm-project/vllm/pull/55702
* @gokay-ai made their first contribution in https://github.com/vllm-project/vllm/pull/58292
* @gongwei-130 made their first contribution in https://github.com/vllm-project/vllm/pull/55102
* @haosenwang1018 made their first contribution in https://github.com/vllm-project/vllm/pull/58288
* @harshit-sarvam made their first contribution in https://github.com/vllm-project/vllm/pull/56034
* @HieDean made their first contribution in https://github.com/vllm-project/vllm/pull/57356
* @huthvincent made their first contribution in https://github.com/vllm-project/vllm/pull/48419
* @i-m-aditya made their first contribution in https://github.com/vllm-project/vllm/pull/57447
* @jayzuccarelli made their first contribution in https://github.com/vllm-project/vllm/pull/58557
* @jiakangkangfuzhe made their first contribution in https://github.com/vllm-project/vllm/pull/55146
* @jiangLLM made their first contribution in https://github.com/vllm-project/vllm/pull/57487
* @jiaran-king made their first contribution in https://github.com/vllm-project/vllm/pull/56242
* @jz-yolo made their first contribution in https://github.com/vllm-project/vllm/pull/58884
* @kaijunli-infr made their first contribution in https://github.com/vllm-project/vllm/pull/52101
* @karya0 made their first contribution in https://github.com/vllm-project/vllm/pull/57453
* @KEYS-A15 made their first contribution in https://github.com/vllm-project/vllm/pull/57528
* @kwen2501 made their first contribution in https://github.com/vllm-project/vllm/pull/51520
* @laulopezreal made their first contribution in https://github.com/vllm-project/vllm/pull/57189
* @lijipeng787 made their first contribution in https://github.com/vllm-project/vllm/pull/58225
* @limitmhw made their first contribution in https://github.com/vllm-project/vllm/pull/48606
* @linnea-lin-00638949 made their first contribution in https://github.com/vllm-project/vllm/pull/47450
* @LinzeShi made their first contribution in https://github.com/vllm-project/vllm/pull/57347
* @mahird3 made their first contribution in https://github.com/vllm-project/vllm/pull/57708
* @melcheikh made their first contribution in https://github.com/vllm-project/vllm/pull/48956
* @MichaelLapshin made their first contribution in https://github.com/vllm-project/vllm/pull/57396
* @mjkvaak-amd made their first contribution in https://github.com/vllm-project/vllm/pull/48249
* @mkunredd made their first contribution in https://github.com/vllm-project/vllm/pull/58244
* @mmastrac made their first contribution in https://github.com/vllm-project/vllm/pull/57414
* @mustafayildirim made their first contribution in https://github.com/vllm-project/vllm/pull/57252
* @Navjot10 made their first contribution in https://github.com/vllm-project/vllm/pull/55390
* @olka-amd made their first contribution in https://github.com/vllm-project/vllm/pull/51065
* @PeganovAnton made their first contribution in https://github.com/vllm-project/vllm/pull/55128
* @Rakul-Chauhan made their first contribution in https://github.com/vllm-project/vllm/pull/54967
* @Ricardo-M-L made their first contribution in https://github.com/vllm-project/vllm/pull/52580
* @Ronnie-Rui made their first contribution in https://github.com/vllm-project/vllm/pull/54581
* @RyanMa29 made their first contribution in https://github.com/vllm-project/vllm/pull/57295
* @sammaji made their first contribution in https://github.com/vllm-project/vllm/pull/58626
* @sawsa307 made their first contribution in https://github.com/vllm-project/vllm/pull/56497
* @ScarWar made their first contribution in https://github.com/vllm-project/vllm/pull/49435
* @sdougbrown made their first contribution in https://github.com/vllm-project/vllm/pull/49819
* @semerandre made their first contribution in https://github.com/vllm-project/vllm/pull/55557
* @sergiofigueras made their first contribution in https://github.com/vllm-project/vllm/pull/57948
* @shallow10 made their first contribution in https://github.com/vllm-project/vllm/pull/58336
* @SIDDARTHAREDDY8 made their first contribution in https://github.com/vllm-project/vllm/pull/57743
* @simpleqt made their first contribution in https://github.com/vllm-project/vllm/pull/55936
* @tangzzycc made their first contribution in https://github.com/vllm-project/vllm/pull/53283
* @touch869 made their first contribution in https://github.com/vllm-project/vllm/pull/55844
* @tripathiarpan20 made their first contribution in https://github.com/vllm-project/vllm/pull/57140
* @twu3202 made their first contribution in https://github.com/vllm-project/vllm/pull/57769
* @ubwzwd made their first contribution in https://github.com/vllm-project/vllm/pull/55931
* @UNIDY2002 made their first contribution in https://github.com/vllm-project/vllm/pull/58370
* @valarLip made their first contribution in https://github.com/vllm-project/vllm/pull/58659
* @vcave made their first contribution in https://github.com/vllm-project/vllm/pull/51681
* @voidxb made their first contribution in https://github.com/vllm-project/vllm/pull/49300
* @vorapolsiloai made their first contribution in https://github.com/vllm-project/vllm/pull/50212
* @vschandramourya made their first contribution in https://github.com/vllm-project/vllm/pull/58779
* @weitliao made their first contribution in https://github.com/vllm-project/vllm/pull/54535
* @wenjinhust made their first contribution in https://github.com/vllm-project/vllm/pull/51366
* @Willian-Zhang made their first contribution in https://github.com/vllm-project/vllm/pull/58720
* @wtdcode made their first contribution in https://github.com/vllm-project/vllm/pull/56268
* @xinnywinne made their first contribution in https://github.com/vllm-project/vllm/pull/55084
* @YannikHinteregger made their first contribution in https://github.com/vllm-project/vllm/pull/50047
* @YashasviChaurasia made their first contribution in https://github.com/vllm-project/vllm/pull/58112
* @Yatimai made their first contribution in https://github.com/vllm-project/vllm/pull/43462
* @YCH188 made their first contribution in https://github.com/vllm-project/vllm/pull/57190
* @yousafshah made their first contribution in https://github.com/vllm-project/vllm/pull/55957
* @ys2025-AI made their first contribution in https://github.com/vllm-project/vllm/pull/56841
* @yuchenwang3 made their first contribution in https://github.com/vllm-project/vllm/pull/54699
* @zhecfy made their first contribution in https://github.com/vllm-project/vllm/pull/58316
* @Zoe923 made their first contribution in https://github.com/vllm-project/vllm/pull/53864
* @Zyann7 made their first contribution in https://github.com/vllm-project/vllm/pull/57784

## Contributors
@AndreasKaratzas, @khluu, @mgoin, @njhill, @BugenZhao, @stefankoncarevic, @robertgshaw2-redhat, @taneem-ibrahim, @Thangnguyenvn98, @hmellor, @Juntian777, @WoosukKwon, @yewentao256, @gau-nernst, @mmastrac, @LucasWilkinson, @Fangzhou-Ai, @NickLucche, @aoshen02, @JaredforReal, @mawong-amd, @DarkLight1337, @zyongye, @sfeng33, @vllm-agent, @okorzh-amd, @ZJY0516, @shen-shanshan, @gty111, @Isotr0py, @djramic, @zixi-qi, @wzhao18, @alec-flowers, @aarushjain29, @Rohan138, @yma11, @mjkvaak-amd, @ivanium, @yisustc, @MatthewBonanni, @wangxiyuan, @reidliu41, @chaojun-zhang, @shaohuaxi, @gcanlin, @ganeshr10, @linitra24, @yzong-rh, @divakar-amd, @atalman, @ShuoleiWang, @simondanielsson, @rasmith, @chaunceyjiang, @micah-wil, @liusy58, @LioEinaudi, @louie-tsai, @LiuYinfeng01, @jeejeelee, @zhenwei-intel, @jperezdealgaba, @hlin99, @zxd1997066, @lucamotz, @lucifer1004, @eopXD, @ashraf-bhuiyan, @TheEpicDolphin, @JulienDarve, @mayuyuace, @danisereb, @bigPYJ1151, @Etelis, @JohnQinAMD, @jiangkuaixue123, @tianmu-li, @akii96, @vllmellm, @RyanMa29, @afriedri, @elvircrn, @mustafayildirim, @yuzhouo7, @wtdcode, @biswapanda, @adtygan, @hickeyma, @itayalroy, @jiangLLM, @Hotragn, @faaany, @xhx1022, @jinzhen-lin, @sheralskumar, @Wauplin, @matteso1, @wjabbour, @Sunt-ing, @arpera, @hclsys, @S1ro1, @HDCharles, @fxmarty-amd, @liuzijing2014, @UNIDY2002, @samuelkim7, @markmc, @errmakov, @zhejiangxiaomai, @KernelClint, @i-m-aditya, @ColinZ22, @ppalanga, @franciscojavierarceo, @maithilijoshi20, @mfylcek, @almersawi, @albertoperdomo2, @0z5a, @jacklin78911-collab, @lzhan011, @Alex-ai-future, @freyfwt, @ZhengGong-amd, @mindungil, @amasen02, @devtyagi3909, @wenjinhust, @jbyczkow, @AdaAibaby, @harshit-sarvam, @vineethsaivs, @tripathiarpan20, @sashko-zakharchuk, @semerandre, @rebklee, @git-jxj, @cjackal, @xinnywinne, @andrewor14, @kyleliang-nv, @thillai-c, @dongluw, @ChuanLi1101, @omerpaz95, @jiaran-king, @liuyao0322, @coderfornow, @drakosha, @laulopezreal, @melcheikh, @shantipriya-amd, @Rukhaiya2004, @yuchenwang3, @lxy-alexander, @tlrmchlsmth, @HieDean, @Zoe923, @YCH188, @amd-sriram, @andylolu2, @MicheleCampi, @sdougbrown, @vMaroon, @shimib, @andakai, @thegoldenflow, @Levius-Fubuki, @olka-amd, @limitmhw, @yuwenzho, @adenzhou1350, @Josephasafg, @kylesayrs, @jdebache, @kaijunli-infr, @afierka-intel, @frida-andersson, @bnellnm, @ys2025-AI, @waizuichougou, @touch869, @rjrock, @sawsa307, @pavelzak, @ScarWar, @fadara01, @Mi-Jiazhi, @dilberx, @mahird3, @Zyann7, @roikoren755, @YukioZzz, @Ronnie-Rui, @acsoto, @czhu-cohere, @twu3202, @oliverholworthy, @weitliao, @sergiofigueras, @tuukkjs, @Sip4818, @karen-sy, @garrett361, @GirasoleY, @Navjot10, @taking-lying-flat, @wangyicong52, @majunze2001, @gangula-karthik, @ubwzwd, @linnea-lin-00638949, @kushaldabbe, @Yatimai, @guanxingithub, @jiakangkangfuzhe, @MichaelLapshin, @jhu960213, @tpopp, @mganczarenko, @qiching, @tangzzycc, @lijipeng787, @nikhilkulkarni1755, @QwertyJack, @Ankit-Jaiswal-AMD, @vorapolsiloai, @Dao007forever, @BPbruce, @divyvasal, @simpleqt, @blipbyte, @jhaotingc, @karya0, @farzad-elastix, @grYe99, @talorabr, @jackLei0901, @Yejing-Lai, @Priyjain-amd, @KEYS-A15, @LinzeShi, @bohnstingl, @nightcityblade, @vcave, @AARONKANG04, @CZT0, @snadampal, @microslaw, @haosenwang1018, @netanel-haber, @khushali9, @sammaji, @SIDDARTHAREDDY8, @100milliongold, @gongwei-130, @fululi12, @mkunredd, @mrodden, @noooop, @valarLip, @shallow10, @200lz, @askliar, @chuan932, @Monishver11, @YashasviChaurasia, @gokay-ai, @jiacao-amd, @yousafshah, @positive666, @TQCB, @lk-chen, @Ricardo-M-L, @huthvincent, @baljinderhothi-cohere, @vschandramourya, @kwen2501, @xiao-llm, @zhecfy, @Willian-Zhang, @simon-veitner-redhat, @mevince, @voidxb, @hongxiayang, @YannikHinteregger, @V-3604, @Rakul-Chauhan, @frankwang28, @LCAIZJ, @PeganovAnton, @jz-yolo, @QHarshil, @R3hankhan123, @jayzuccarelli, @yannicks1, @BaoYunkai, @xaguilar-amd, @xiaohuguo2023, @wxsIcey, @harshaladhav-amd, @varun-sundar-rabindranath, @kliuae, @LostFox11

---

> **Source** [vllm-project/vllm](https://github.com/vllm-project/vllm) · `v0.31.0` · 2026-10-05 · [upstream release](https://github.com/vllm-project/vllm/releases/tag/v0.31.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
