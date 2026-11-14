---
title: "vllm v0.32.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.32.0"
version: "v0.32.0"
published: "2026-10-18"
type: "minor"
lang: "en"
summary: "This release features 814 commits from 363 contributors (121 new)!"
---

# vllm v0.32.0

# v0.32.0

## Highlights

This release features 814 commits from 363 contributors (121 new)!

* **Structured decisions and generic parsers**: the new `POST /v1/systemone` endpoint answers `choice`, `noul` and `score` questions over a structured state (#59299), is served by default (#60677, #60696), and also runs on `Cloudflare/clef-omni` (#61064), `LiquidAI/d1-3B` (#60676) and DiffusionGemma (#60466). The new `hf` tool and reasoning parser (`--tool-call-parser hf`, `--reasoning-parser hf`) reads the checkpoint's `response_template`, so models that ship it need no model-specific parser (#58604, #58602), in both the Python and Rust frontends (#59005).
* **Low-precision KV cache everywhere**: NVFP4 KV cache now runs on SM8x and SM12x (#46963), SM90 (#60620) and with XQA decode on SM12x (#60452), and on MiniMax-M3 sparse attention on SM100 (#59300); GLM-5.x defaults to an FP8 KV cache on SM100, halving KV memory per rank with 2.3-5.5% more throughput at a 7-11% TTFT cost in the PR's benchmark (#60140, #60281); `fp8_ds_mla` on SM90 gives GLM-5.3-Flash up to 31% more output throughput (#59246); ROCm gains the 4-bit `ultraquant_4bit` KV cache with about 2x the density of FP8 (#57057).
* **Model Runner V2**: a GPU n-gram speculator with variable-length drafts (#40704), Elastic EP (#53934), pipeline parallelism with prefill context parallelism for MLA models (#59139), a stock torch.compile mode (#59079), and MRV2 is now the default on ROCm with the model-specific MRV1 exceptions removed (#56360).
* **Faster startup and serving**: `vllm download-kernels` installs FlashInfer's precompiled kernels (#58765); `vllm preload --preload-autotune` keeps the FlashInfer autotune table warm across restarts (#60085); a shared-memory tensor arena broadcasts large multimodal tensors to workers with one copy (#51207); tokenizers and processors load from the local snapshot (#60825); and with `--api-server-count` above 1 each connection goes to the least-loaded API worker, for 43-85% more req/s on short requests (Qwen3-0.6B, 32 input / 1 output tokens) in the PR's benchmark (#60723).
* **Model support**: new EmbeddingGemma 2 omni-modal embeddings (#60254), MiniCPM-V 4.7 (#58674) and Nemotron 3.5 ASR (#59827); video input in the Transformers modeling backend (#57441); GLM-5.3 sparse MLA index conversions reused across layers (3.5-3.9x on that kernel, #59464) and fused multi-step draft decode (13.3% at concurrency 1, #57443); HiSparse per-request residency caching for up to 58% more throughput on GLM-5.3-NVFP4 on B200 with long, fully GPU-resident contexts at high concurrency (#60083).
* **Security**: fixes for GHSA-4hhp-h66f-j5j7 (chat template resource exhaustion, #50300), GHSA-q97c-p368-75c4 (tokenizer `max_token_id`, #59491) and GHSA-frvg-qw88-hww9 (P2P ZMQ socket exhaustion, #51504); CORS no longer allows every origin by default (#61009); untrusted images are limited to raster formats (#60022); shared-memory multimodal cache handles are signed (#59357); and JSON schemas nested deeper than 64 levels are rejected (#60036).
* **Breaking changes**: Python 3.10 dropped (#60402); default CORS origins restricted (#61009); `transformers>=5.16.1,<5.20.0` and `tokenizers>=0.23.2` (#57387, #59796); torch.compile sequence parallelism and AsyncTP passes removed (#60517); cascade attention removed (#61126); `mamba_cache_mode="all"` removed (#58997); `max_tokens` no longer reserved from the context window (#57035); Responses API reasoning stream events renamed (#59652).

## Release Artifacts

### Python Wheels

| Platform | Install |
|---|---|
| PyPI (CUDA 13.0) | `pip install vllm` |
| PyPI (CUDA 13.0, uv) | `uv pip install vllm --torch-backend=auto` |
| ROCm | `pip install vllm --extra-index-url https://wheels.vllm.ai/rocm/0.32.0/rocm723` |
| XPU | `uv pip install vllm --extra-index-url https://wheels.vllm.ai/0.32.0/xpu --extra-index-url https://download.pytorch.org/whl/xpu --index-strategy unsafe-best-match` |

### Docker Images

| Platform | Docker Image |
|---|---|
| CUDA 13.0 (Default) | `docker pull vllm/vllm-openai:v0.32.0` |
| CUDA 12.9 | `docker pull vllm/vllm-openai:v0.32.0-cu129` |
| CUDA 13.0 + Ubuntu 24.04 | `docker pull vllm/vllm-openai:v0.32.0-ubuntu2404` |
| CUDA 12.9 + Ubuntu 24.04 | `docker pull vllm/vllm-openai:v0.32.0-cu129-ubuntu2404` |
| ROCm | `docker pull vllm/vllm-openai-rocm:v0.32.0` |
| CPU | `docker pull vllm/vllm-openai-cpu:v0.32.0` |
| XPU | `docker pull vllm/vllm-openai-xpu:v0.32.0` |

### Other Artifacts

Pre-built release artifacts are available in the **Assets** section at the bottom of this page, including:
- Source distribution tarball
- CUDA 12.9 Python wheels for x86_64 and arm64
- CUDA 13.0 Python wheels for x86_64 and arm64
- CPU Python wheels for x86_64, arm64, and macOS
- XPU Python wheel for x86_64

## Model Support
* **New models**: EmbeddingGemma 2 (`google/embeddinggemma-2`), an omni-modal text/image/audio/video embedding model, with unused modality encoders skipped through `--limit-mm-per-prompt` (#60254, #60289); MiniCPM-V 4.7 (#58674); Nemotron 3.5 ASR (`nvidia/nemotron-3.5-asr-streaming-0.6b`) complete-audio transcription; native realtime streaming is not yet supported (#59827); `Cloudflare/clef-omni` (#61064) and `LiquidAI/d1-3B` (#60676) on `/v1/systemone`; PLaMo 3 reasoning and tool parsers (#56575); and the zerank-2 reranker score template (#60415).
* **Transformers modeling backend**: video inputs (#57441), and Glm, Arcee, CWM, Mellum (#59679), GPT-NeoX, Phi, Seed-OSS and Jais2 (#59701) now served through it.
* **New model capabilities**: LoRA for BERT, RoBERTa and XLM-RoBERTa embedding models (#61033); Granite as an EAGLE3/DFlash target (#60855); Qwen3-ASR EAGLE3 (#52824); Sarvam MLA EAGLE3/DSpark with PP (#55902); GLM-5.3-Flash with the DFlash2 drafter (#56983); and MiniMax-M3 EAGLE3 at PP > 1 on MRV2 (#57197) with MTP sharing target embeddings under PP (#58648).
* **GLM-5.3 and GLM-5.3-Flash**: sparse MLA index conversion reused across layers (#59464), fused multi-step draft decode (#57443), FP8 KV cache default on SM100 (#60140, #60281), `fp8_ds_mla` on SM90 (#59246), qlnorm skipped for MHA (4.4-7.7% TTFT, #58845), long-context indexer prefill sharded across TP (up to 25% lower TTFT at 1M context, #54951), DCP for the kpool indexer (#59211, #60032), KDA prefill checkpoints with FlashKDA (#56960), FP8 KV on SM90 sparse MLA (#55222), `--mamba-ssm-cache-dtype` honored for KDA state (#59147), a generic packed KV layout (#57169), MTP index sharing restored (#61079), and fixes for vision-tower crashes (#59126), non-square image encoder budgets (#59565), DP startup (#56974), video timestamps (#55647), DFlash2/EAGLE3 aux hidden states (#60763) and null-block writes (#59528).
* **DeepSeek-V4 and V4.1**: decoder-side SWA bounded replay (#58132) with replay layers in CUDA graphs and trimmed in PIECEWISE graphs (`compilation_config.decoder_replay_trim_threshold`, #59532) plus last KV-source layer trimming (+3.6%, #59894), packed FP8 Engram exchange across DP (#59923), faster CPU-offloaded Engram lookups (#59327), fused DeepSeek V4 + MTP drafting (#58463), encoder CUDA graph packing for V4.1 and Kimi-K3 (11% lower mean TTFT, #58925), EPLB for DSpark drafts (#57549), and fixes for NVFP4 checkpoints with 0% draft acceptance (#59655), MegaMoE shared-expert finalize ordering (#59927), worst-case vision dummy inputs (#57898, #59271), compressor ring null-block writes (#58560), Triton 3.9 indexer quantization (#60716) and decoder-replay CUDA graphs with FlashInfer EP MoE backends (#61041).
* **Qwen**: Qwen3.8-Flash-Next (Qwen4Exp) merged QSA projections in one GEMM (1.45-1.68x, #59533), fused QSA pre-indexer (#57097), sequence parallelism through `--enable-hc-sp` (#56322), SM100 low-latency decode GEMM plans (up to 2.7x vs cuBLAS on small-M, #59214), `--kv-cache-dtype-skip-layers` honored (#60023), and PLE loading for INC (#59990), Quark (#59443) and pre-SM89 GPUs (#60142); Qwen3-VL/Qwen3.5/Qwen3.8 M-RoPE cache 4x smaller and Qwen3.5 YaRN matching Transformers (#59853); Qwen3-Omni M-RoPE fixes (#58890, #59842); Qwen3-ASR on the upstream processor (#57146); Qwen3-VL unknown video fps (#60501) and per-video options with the multimodal cache (#55203).
* **Kimi-K3 and MiniMax-M3**: Kimi-K3 FlashInfer fused speculative KDA on SM100 (#54255), fused vision processor (10-20x preprocessing at 1080p-8K, #59278), fused K/V pack on the DCP prefill path (#56881), and DSpark KV cache back to 4 groups (#59733); MiniMax-M3 MSA prefill with an E4M3 query (26-37% faster with FP8 KV, #60684), FP8 indexer cache on non-SM100 GPUs (#59081), Triton indexer tuning (#56151, #59481), and indexer score fixes (#60194, #54597).
* **Multimodal**: device-side input normalization for Qwen3-VL/Qwen3.5/Qwen4Exp (#51289), GLM-V and GLM-OCR (#55389), Llama Nemotron VL (#57928) and Kimi K2.5/K3 (#59278), kept fused under `compile_mm_encoder` (#59195); encoder inputs sorted by modality (6.5-8.2% more req/s, #60196); Mistral 3 preprocessing 8% faster (#57531); Pixtral `compile_mm_encoder` (#57168); and fixes for Llama 4 / Mistral Large 3 EAGLE drafters (regression since v0.28.0, #57633), Phi-4 MM audio OOM (#60614), DeepSeek-OCR zero-sum pixels (#59417), MiMo-V2.5/V2.6 with fastsafetensors (#58142), MiMo-V2.6 FP8 KV cache (#58128), Voxtral realtime (#45022), Nemotron Super vision LayerNorm (#61401), K-EXAONE config and MTP RoPE (#60187), Nemotron Parse tied `lm_head` (#60272), LongCat-Flash MTP loading (#60080) and Ling-3.0-flash-VL (#59026).

## Engine Core
* **Model Runner V2**: GPU n-gram speculator (#40704), Elastic EP with drain-then-commit scaling (#53934), PP with PCP for MLA models (#59139), `STOCK_TORCH_COMPILE` mode (#59079), dynamic K in autoregressive speculators (#57053), MTP sampling-mask replay (#59359) and per-module LM heads (#58921), non-blocking H2D copies on WSL2 (#60215), and fixes for int64 index offsets at long context (#60736), warmup (#61013), GDN prefill checkpoints (#59536) and MRV2+PP+MTP align state (#60210).
* **Speculative decoding**: fused multi-step draft decode on FlashInfer trtllm-gen (#58371), FlashInfer ReplaySSM for Mamba2 MTP (#52928), in-graph metadata for DFlash/DSpark drafts (#60692), and correctness fixes for ngram on hybrid recurrent models (#56531), Mamba prefill checkpoints with MTP and prefix caching (#59759, #60797), stop-string trimming (#47616), draft model config (#61240), adaptive block verification (#60945), DSpark bonus slots (#59105) and draft models on the Transformers backend (#59293).
* **Hybrid models and prefix caching**: Mamba2 internal prefill checkpoints for NemotronH, Granite-4.0-H, Falcon-H1 and Zamba2 (#57329), stale block hashes dropped when streaming sessions truncate (#59103), and fixes for quantized Mamba-2 with TP (#58083), spec decode page sizes (#59975), prefix-cache bounds (#55601, #60533) and sm90 Mamba2 NaNs (#61718).
* **Sleep and RL**: sleep releases workspace scratch (up to 4.5 GiB/GPU, #59156) and KV-init state (about 4.6 GiB/GPU, #59158), opt-in `sleep_mode_offload_cudagraph` (#59160, #59523); token-level weight-version spans on outputs (#59582, #61070); weight-transfer communicators released without stopping inference (#61060); `--sleep-preserve-parameter-names 'draft.*'` (#61046); `modelexpress` weight-transfer backend (#58399); `POST /weight_checker` (#51350); weight-transfer metrics (#55781); `--enable-nccl-comm-suspend` releasing the MNNVL workspace (#59360); and `sleep(level=2)` keeping FP8 KV scales (#57163).
* **HiSparse**: per-request residency cache (up to 58% at high concurrency with GPU-resident contexts, #60083), lower scheduler overhead (#57930), GPU residency owned by HiSparse (#60647), less staging memory (#60429), host cache gauges (#58949, #59485), and fixes for decode token limits (#60682) and TP hangs (#60941).
* **Startup and memory**: shared-memory tensor arena (`--enable-shm-tensor-arena`, on by default, #51207), Fast Start with PP (#55477), daemon-held weights counted against `gpu_memory_utilization` (#57298), autotune preload (#60085), local tokenizer snapshots (#60825), `sparse_mla_prefill_workspace_factor` saving several GiB at 1M context (#61023), cached memory reclaimed during weight loading (#57516), fewer Triton sampler warmup compiles (#58605), sharded state loader with PP (#52110), and `reload_weights` with Run:ai streamer (#58124).
* **Kernels and runtime**: MoE weighted-sum tuning (1.17-2.37x, #59731), flash-maxsim kernels for ColBERT/ColPali scoring (#40337), fallback detokenization with 69% less CPU at 32K tokens (#60497), faster KV block free queue (#60269), Triton kernels off `tl.make_block_ptr` (#60502), fusion passes restored under PyTorch 2.15 (#57299) and static FP8 quant fusion on recent torch (#61108).
* **Batch invariance**: custom all-reduce under `VLLM_BATCH_INVARIANT=1` (#58623), deterministic split-K LoRA shrink (#59377), every attention backend checked (#60271), SM120 TP configs (#58495), and ROCm support (#52231).
* **Observability**: `vllm:prompt_tokens_cached_by_source_total` (#56318), `vllm:num_requests_kv_fetch_by_stage` (#58874), `vllm:admission_rejections_total` (#55812), `vllm:watermark_requests` (#58715), `--custom-histogram-buckets` (#48867), a JSON log formatter via `LoggingConfig.formatter` (#58739), and per-session profiling controls (#57875).

## Large Scale Serving
* **MoE communication**: FlashInfer CuteDSL MegaMoE for more models via `--moe-backend flashinfer_cutedsl` (#54049), FP8 combine for the FlashInfer one-sided all2all (+4% at DEP8, #57995), NCCL symmetric-memory MoE reduce-scatter (9.6-16% lower latency, #49194), DeepEPv2 hybrid NVLink+RDMA mode on by default (#57991), Kimi-K3 shared experts with DeepEP v2 (#56875), and opt-in EPLB migration batching (#52641).
* **Context parallelism**: decode requests sharded across PCP ranks (#52162) and TokenSpeed MLA with block-interleaved DCP for heterogeneous NIXL disaggregation (#59462).
* **KV connectors**: NIXL host-buffer copies coalesced (#54483), mixed block sizes (#58860), peer metadata recovery (#55471) and Qwen3.8-Flash-Next MTP acceptance in P/D (#59997); Mooncake coalesced hybrid/MLA RDMA regions (#57952) and bootstrap retries (#55923); MoRIIO Kimi-K3 DSpark READ (#57700); DeepSeek-V4.1 P/D skipping bounded replay for loaded KV (#59197); and KVCR pool-and-index API (#59899).
* **Data parallelism**: streaming requests pinned to their engine (#59017), per-engine RNG streams (#59788), and placement groups without `ray[default]` (#57648).

## Hardware & Performance
* **NVIDIA**: native 64-head FlashMLA sparse prefill on SM100 (1.16-1.18x TTFT, #60029), block-FP8 DeepGEMM experts skipping padding (#59128), SM120 split-K attention (#58482), DGX Spark Qwen4Exp GEMM plans (#59753, #59632, #60027), OAI Triton MXFP4 MoE on SM12x (#58877), and FlashInfer autotune cache per rank (#57635).
* **AMD ROCm**: DeepSeek-V4 AITER MegaMoEV2 via `--moe-backend aiter_mega_moe` (#59685) with opt-in shared-expert fusion (3-8%, #61004), opt-in mono decode for DeepSeek-V4.1-Flash on MI355X (`VLLM_ROCM_MONO_DECODE=1`, #60397), opt-in Gluon sparse MLA (up to +16% on GLM-5.2, #53492), paged MXFP4 indexer (#58671), opt-in a4w4 MoE for DSv4 (#58819), `ultraquant_4bit` KV cache (#57057), `aiter_flydsl` GDN prefill (#57560), Kimi-K3 prefill checkpoints (about 20% better TTFT, #58344), fused MLA decode (#57640) and per-rank latent MoE shards (#59591), GLM-5.3-Flash split-K sparse MLA decode (5-15% lower ITL, #58584), native `merge_attn_states` (2.4x, #60159), `ROCM_SEGMENTED_ATTN` for RDNA (#59132), gfx11 W4A16 tuning (up to 23% TTFT, #56301), MRV2 default with model-specific MRV1 exceptions removed (#56360), and fixes for sleep-mode segfaults on ROCm 7.2+ (#60367) and MLA weight reloads (#60389).
* **Intel XPU**: MLA in `FLASH_ATTN_MLA` (#58297), Arc Pro B70 FP8 GEMM (2.0-2.73x, #56063) and fused MoE configs (#53065), fused SYCL LayerNorm (#57172), and fixes for Gemma-2 softcap (#58936) and DP+EP MoE (#57787).
* **CPU**: vectorized sampler (up to 58x on s390x, #53913), aarch64 causal conv1d (about 9%, #54093), POWER10 AWQ/GPTQ (#59149), and PowerPC `dtype=auto` choosing bfloat16 (#58528).
* **Other**: tpu-inference v0.31.0 (#60190) and out-of-tree platforms registering multiple attention backends (#41091).

## Quantization
* **New capabilities**: online re-quantization of linear layers (`--quantization-config.linear fp8_per_channel`, #55684), per-token NVFP4 CuTe-DSL MoE (#50030) with ReLU2 (#56740), MXFP4 MoE oracle with CUTLASS W4A4 and BF16 fallback (#60079), compressed-tensors MXFP4 MoE with FP8 activations (#59815), ModelOpt IQ2_XS/IQ2_XXS/Q8_0 on SM120/SM121 (#59604), `int4_per_token_head` KV with non-power-of-two heads (#56198), and Humming preferred over Marlin on SM90 (#56997).
* **Fixes**: silent CUTLASS NVFP4/MXFP4 MoE corruption under EP (#59042), GPTQ with non-default safetensors names (#60411), `moe_wna16` 8-bit asymmetric zero points (#58950), and ModelOpt mixed-precision NVFP4 detection (#56050).

## API & Frontend
* **New endpoints and options**: `/v1/systemone` (#59299, #60677, #60696), `hf` parser (#58604), `vllm download-kernels` (#58765), `output_mode: "text"` and `stop_reason` in `/inference/v1/generate` (#58588, #60251), `mm_payload` for render requests (#61427, #60728), Responses `min_p` and `stop_token_ids` (#48084, #56592), `LLM.chat(priority=...)` (#57243), and `/generative_scoring` `cache_salt` (#60841).
* **Behavior**: `max_tokens` is an upper bound instead of a reservation, so long prompts are no longer rejected (#57035); least-loaded API worker selection (#60723); tool parser compatibility checked at startup (#59749).
* **Tool calling and structured output**: `parallel_tool_calls=false` enforced (#50502, #59298), `tool_choice="required"` streaming (#60354) and native XML parsers (#47512), Step-3.5 and `minimax_m3` on the parser engine (#59321, #59743), xgrammar `propertyNames` (#57594), and LoRA PEFT `rank_pattern`/`alpha_pattern` applied with unsupported features rejected (#59801, #60225).
* **Rust frontend**: `--grpc-port` (#59659), `--stream-interval` (#60589), `logprob_token_ids` (#59549), `Control.Shutdown` with `vllm-proto` 0.5.0 (#59316), `qwen3_json` parser (#60136), and Kimi K3 grammar fixes (#59190, #59395).

## Security
* GHSA-4hhp-h66f-j5j7: chat templates are validated statically and rendered under a timeout (`VLLM_CHAT_TEMPLATE_RENDER_TIMEOUT`), user-supplied `chat_template` in Responses `chat_template_kwargs` is rejected, and the Rust frontend caps template execution (#50300).
* GHSA-q97c-p368-75c4: tokenizer `max_token_id` off-by-one fixed (#59491).
* GHSA-frvg-qw88-hww9: P2P ZMQ peer sessions are bounded by `VLLM_P2P_MAX_PEERS` (default 128), `VLLM_P2P_HANDSHAKE_TIMEOUT_S` (default 30) and `VLLM_P2P_IDLE_TIMEOUT_S` (default 300), so unique peer addresses can no longer exhaust ZMQ sockets (#51504).
* Default CORS settings no longer allow every origin in the Python and Rust frontends; set `--allowed-origins` to permit browser origins (#61009).
* Untrusted images are opened with a raster-format allowlist (`ALLOWED_IMAGE_FORMATS`), denying EPS/PostScript and WMF (#60022); shared-memory multimodal cache handles are HMAC-signed and forged handles rejected (#59357).
* Structured-output JSON schemas nested more than 64 levels return 400 (#60036); chunked `/v1/embeddings` requests keep `cache_salt` (#47696); Phi-4 MM audio no longer holds multi-GiB attention matrices (#60614); DeepSeek-OCR zero-sum pixel tensors no longer kill EngineCore (#59417).
* Security dependency bumps: `aiohttp>=3.14.3`, `pillow>=12.3.0`, cryptography, urllib3, pyjwt and others (#59249, #59315, #59427).

## Dependencies
* `transformers>=5.16.1,<5.20.0` (minimum raised from 5.10.4, #57387, #59762) and `tokenizers>=0.23.2` (#59796).
* NIXL 1.5.0 (#56907), CuTe DSL 4.8.0 block-scale APIs (#59480), `humming-kernels==0.1.17` with initial Rubin support (#61556, #61858), InstantTensor 0.2.2 (#61167), and `flashinfer-jit-cache` excluded from wheel `install_requires` (#60052).
* ROCm: AITER 0.1.24.post1 (#59794) and MoRI v1.2.3.post1 (#56073). XPU: auto-round-lib 0.16.0 (#60976). TPU: tpu-inference v0.31.0 (#60190).

## Build
* Python 3.11-3.14 supported (#60402); macOS wheels built with the stable ABI (#60312); CUDA source builds require GCC 13 and fail early otherwise (#60259); Docker images compile Python bytecode at build time for faster container startup (#55422); `VLLM_USE_PRECOMPILED` finds a compatible published wheel within the last 20 commits (#58871); the vendored DeepGEMM uses `TORCH_LIBRARY` (abi3, #48962).

## Breaking Changes & Deprecations
* Python 3.10 is no longer supported; the minimum is Python 3.11 (#60402).
* Default CORS origins changed from `*` to none; set `--allowed-origins` for browser clients (#61009).
* `transformers>=5.16.1,<5.20.0` and `tokenizers>=0.23.2` are required (#57387, #59796).
* The torch.compile sequence parallelism and AsyncTP passes were removed, along with `PassConfig.enable_sp`, `fuse_gemm_comms` and `sp_min_token_num`; model-level sequence parallelism is unaffected (#60517).
* Cascade attention was removed; `--disable-cascade-attn` still parses but only warns and will be removed in v0.33.0 (#61126).
* `mamba_cache_mode="all"` was removed; `--mamba-cache-mode all` now fails validation (#58997).
* Previously deprecated APIs were removed: `wait_for_inflight_requests` (use `mode="wait"`), `AsyncLLM.pause_generation()`, `IOProcessor.output_to_response`, `vllm.scripts.main()` and `vllm bench throughput --dataset` (#60923). The `sonnet` benchmark dataset was removed as scheduled (#60129). Tensorizer support was removed from LoRA (#60024), and the PyO3 `vllm._rust_tool_parser` bridge was removed (#59744).
* API changes: `max_tokens` is treated as an upper bound on output rather than reserved from the context window (#57035); Responses API streaming uses `response.content_part.added/done` with `part.type="reasoning_text"` instead of `response.reasoning_part.added/done` (#59652); `SamplingParams.prompt_logprob_token_ids` is per row (#56984); `/inference/v1/generate` logprobs use integer token IDs (#58181); sleep API responses are standardized and invalid levels return 400 (#52864); `return_mm_kwargs` is deprecated in favor of `mm_payload` (#61427).
* Watermarking: when the engine has watermarking configured, an omitted request field means enabled and only `false` opts out; unsupported combinations warn and fall back (#56801).
* Rust frontend: `qwen3_xml` now parses Qwen3-Coder XML (alias of `qwen3_coder`); use the new `qwen3_json` for the JSON format (#60136).
* New defaults: shared-memory tensor arena on (#51207); GLM-5.x FP8 KV cache on SM100 with `--kv-cache-dtype auto` (#60140, #60281); `VLLM_DEEPEP_V2_ALLOW_HYBRID_MODE=1` (#57991); Humming preferred over Marlin on SM90 (#56997); `sparse_mla_prefill_workspace_factor` 2 above 256K `max_model_len` (#61023); MRV2 on ROCm with model-specific MRV1 exceptions removed (#56360); `VLLM_ROCM_AITER_MLA_DCP_VERIFY=auto` (#59965); `dtype=auto` picks bfloat16 on PowerPC (#58528); MXFP4 W4A4 checkpoints fall back to W4A16 with a warning when no W4A4 kernel exists (#60079).
* Stricter validation: incompatible `--prefix-match-unit` (#58021), `max_num_scheduled_tokens=0` (#60714), HiSparse with `cudagraph_mode=FULL` (#59688), and negative `--device-ids` (#49053) are rejected at startup.

## New Contributors
* @0xViking made their first contribution in https://github.com/vllm-project/vllm/pull/60053
* @1fanwang made their first contribution in https://github.com/vllm-project/vllm/pull/40986
* @a-sidorova made their first contribution in https://github.com/vllm-project/vllm/pull/55335
* @AbhayShuklaIIT made their first contribution in https://github.com/vllm-project/vllm/pull/59763
* @ahmed-bsod made their first contribution in https://github.com/vllm-project/vllm/pull/58655
* @ai-yang made their first contribution in https://github.com/vllm-project/vllm/pull/58088
* @AIwork4me made their first contribution in https://github.com/vllm-project/vllm/pull/54706
* @AlanFokCo made their first contribution in https://github.com/vllm-project/vllm/pull/57163
* @AMD-yanfeiwang made their first contribution in https://github.com/vllm-project/vllm/pull/61004
* @aniskumar-nv made their first contribution in https://github.com/vllm-project/vllm/pull/53020
* @Anurag-M1 made their first contribution in https://github.com/vllm-project/vllm/pull/57693
* @Aravind-11 made their first contribution in https://github.com/vllm-project/vllm/pull/60098
* @awesome-pro made their first contribution in https://github.com/vllm-project/vllm/pull/58895
* @Ayu190505 made their first contribution in https://github.com/vllm-project/vllm/pull/57995
* @beenpow made their first contribution in https://github.com/vllm-project/vllm/pull/57648
* @big-yellow-duck made their first contribution in https://github.com/vllm-project/vllm/pull/59132
* @blueberry808 made their first contribution in https://github.com/vllm-project/vllm/pull/58932
* @bluemelov1 made their first contribution in https://github.com/vllm-project/vllm/pull/58560
* @bnkaiteam made their first contribution in https://github.com/vllm-project/vllm/pull/60507
* @brandonfzhang made their first contribution in https://github.com/vllm-project/vllm/pull/56881
* @Btwestyo made their first contribution in https://github.com/vllm-project/vllm/pull/59924
* @bvolpato made their first contribution in https://github.com/vllm-project/vllm/pull/55203
* @C1ves made their first contribution in https://github.com/vllm-project/vllm/pull/58890
* @charlesli640 made their first contribution in https://github.com/vllm-project/vllm/pull/59977
* @cheese-cakee made their first contribution in https://github.com/vllm-project/vllm/pull/59079
* @CorgiBoyG made their first contribution in https://github.com/vllm-project/vllm/pull/55596
* @damienlaine made their first contribution in https://github.com/vllm-project/vllm/pull/45022
* @danichan-mkm made their first contribution in https://github.com/vllm-project/vllm/pull/59285
* @danigarciaoca made their first contribution in https://github.com/vllm-project/vllm/pull/56372
* @debanshd made their first contribution in https://github.com/vllm-project/vllm/pull/57476
* @devpramod made their first contribution in https://github.com/vllm-project/vllm/pull/60855
* @devshah-cohere made their first contribution in https://github.com/vllm-project/vllm/pull/60286
* @DGlan made their first contribution in https://github.com/vllm-project/vllm/pull/59875
* @dhairyashilRG made their first contribution in https://github.com/vllm-project/vllm/pull/58911
* @DOCCA0 made their first contribution in https://github.com/vllm-project/vllm/pull/52641
* @Dovis01 made their first contribution in https://github.com/vllm-project/vllm/pull/56994
* @ebfio made their first contribution in https://github.com/vllm-project/vllm/pull/58165
* @ejrtks1020 made their first contribution in https://github.com/vllm-project/vllm/pull/59180
* @eky-amd made their first contribution in https://github.com/vllm-project/vllm/pull/54857
* @gaby made their first contribution in https://github.com/vllm-project/vllm/pull/59126
* @haotiaa made their first contribution in https://github.com/vllm-project/vllm/pull/60766
* @harshaladhav-amd made their first contribution in https://github.com/vllm-project/vllm/pull/58268
* @hdq66666 made their first contribution in https://github.com/vllm-project/vllm/pull/59695
* @hoaivoke made their first contribution in https://github.com/vllm-project/vllm/pull/61033
* @hpdkhoa made their first contribution in https://github.com/vllm-project/vllm/pull/60747
* @hubert-marek made their first contribution in https://github.com/vllm-project/vllm/pull/61000
* @hubunt made their first contribution in https://github.com/vllm-project/vllm/pull/47512
* @huishi-hs made their first contribution in https://github.com/vllm-project/vllm/pull/58053
* @hyukjlee made their first contribution in https://github.com/vllm-project/vllm/pull/59965
* @Id545 made their first contribution in https://github.com/vllm-project/vllm/pull/59247
* @ieaves made their first contribution in https://github.com/vllm-project/vllm/pull/52824
* @ischencheng made their first contribution in https://github.com/vllm-project/vllm/pull/60763
* @Jeff-Tseng-dev made their first contribution in https://github.com/vllm-project/vllm/pull/59396
* @jiangyunfan1 made their first contribution in https://github.com/vllm-project/vllm/pull/57780
* @JimmyWang0417 made their first contribution in https://github.com/vllm-project/vllm/pull/61081
* @jin-amd made their first contribution in https://github.com/vllm-project/vllm/pull/58904
* @JRJRJPRO made their first contribution in https://github.com/vllm-project/vllm/pull/59879
* @Kevinli24 made their first contribution in https://github.com/vllm-project/vllm/pull/58878
* @Kylinny made their first contribution in https://github.com/vllm-project/vllm/pull/60354
* @Lcy0801 made their first contribution in https://github.com/vllm-project/vllm/pull/58975
* @Legend-2727 made their first contribution in https://github.com/vllm-project/vllm/pull/59293
* @lianakoleva made their first contribution in https://github.com/vllm-project/vllm/pull/60136
* @LiRunGuo made their first contribution in https://github.com/vllm-project/vllm/pull/56198
* @lobo235 made their first contribution in https://github.com/vllm-project/vllm/pull/60364
* @LostFox11 made their first contribution in https://github.com/vllm-project/vllm/pull/58542
* @MadhavJivrajani made their first contribution in https://github.com/vllm-project/vllm/pull/57635
* @MatthewCYM made their first contribution in https://github.com/vllm-project/vllm/pull/57146
* @Mazukiri made their first contribution in https://github.com/vllm-project/vllm/pull/60036
* @MohammadHijjawi97 made their first contribution in https://github.com/vllm-project/vllm/pull/59072
* @MohitAMD made their first contribution in https://github.com/vllm-project/vllm/pull/55053
* @nishantrevur made their first contribution in https://github.com/vllm-project/vllm/pull/59541
* @njriasan made their first contribution in https://github.com/vllm-project/vllm/pull/60502
* @NNNtrance made their first contribution in https://github.com/vllm-project/vllm/pull/55647
* @NolenLiang made their first contribution in https://github.com/vllm-project/vllm/pull/56974
* @notimesea made their first contribution in https://github.com/vllm-project/vllm/pull/59105
* @ntheanh201 made their first contribution in https://github.com/vllm-project/vllm/pull/57734
* @nv-hwoo made their first contribution in https://github.com/vllm-project/vllm/pull/58399
* @ojeda-e made their first contribution in https://github.com/vllm-project/vllm/pull/59107
* @Ostring24 made their first contribution in https://github.com/vllm-project/vllm/pull/50502
* @peperunas made their first contribution in https://github.com/vllm-project/vllm/pull/58938
* @pondzikk made their first contribution in https://github.com/vllm-project/vllm/pull/55601
* @praveingk made their first contribution in https://github.com/vllm-project/vllm/pull/60161
* @puneetsharma21 made their first contribution in https://github.com/vllm-project/vllm/pull/48074
* @rdlh made their first contribution in https://github.com/vllm-project/vllm/pull/60415
* @rmhaskarnvidia made their first contribution in https://github.com/vllm-project/vllm/pull/59081
* @roG0d made their first contribution in https://github.com/vllm-project/vllm/pull/55937
* @roipony made their first contribution in https://github.com/vllm-project/vllm/pull/40337
* @shijie-lyu made their first contribution in https://github.com/vllm-project/vllm/pull/55771
* @shiyuan680 made their first contribution in https://github.com/vllm-project/vllm/pull/51350
* @shreyanshj10 made their first contribution in https://github.com/vllm-project/vllm/pull/60359
* @siliangchen-amd made their first contribution in https://github.com/vllm-project/vllm/pull/57108
* @Sohaib-Ahmed21 made their first contribution in https://github.com/vllm-project/vllm/pull/59827
* @spa5k made their first contribution in https://github.com/vllm-project/vllm/pull/60497
* @sricursion made their first contribution in https://github.com/vllm-project/vllm/pull/60307
* @SunnyR made their first contribution in https://github.com/vllm-project/vllm/pull/59811
* @superdiaodiao made their first contribution in https://github.com/vllm-project/vllm/pull/55717
* @surajsharan made their first contribution in https://github.com/vllm-project/vllm/pull/60225
* @surawut-jirasaktavee made their first contribution in https://github.com/vllm-project/vllm/pull/60876
* @Thiago4532 made their first contribution in https://github.com/vllm-project/vllm/pull/58014
* @TommyTranX made their first contribution in https://github.com/vllm-project/vllm/pull/48039
* @TylerMa-debugg made their first contribution in https://github.com/vllm-project/vllm/pull/59917
* @ultramancode made their first contribution in https://github.com/vllm-project/vllm/pull/60786
* @usmanmateen made their first contribution in https://github.com/vllm-project/vllm/pull/59336
* @v-shobhit made their first contribution in https://github.com/vllm-project/vllm/pull/59655
* @vaclavcadek made their first contribution in https://github.com/vllm-project/vllm/pull/49602
* @viktorkou made their first contribution in https://github.com/vllm-project/vllm/pull/58124
* @vovani made their first contribution in https://github.com/vllm-project/vllm/pull/60194
* @WarrierRajeev made their first contribution in https://github.com/vllm-project/vllm/pull/59135
* @www6v made their first contribution in https://github.com/vllm-project/vllm/pull/59749
* @xiaofei-zheng made their first contribution in https://github.com/vllm-project/vllm/pull/55104
* @xiaoyu-xyz made their first contribution in https://github.com/vllm-project/vllm/pull/55161
* @xuantengh made their first contribution in https://github.com/vllm-project/vllm/pull/56740
* @yantinglai made their first contribution in https://github.com/vllm-project/vllm/pull/59530
* @YashasviAsthana made their first contribution in https://github.com/vllm-project/vllm/pull/59020
* @YidaWeng made their first contribution in https://github.com/vllm-project/vllm/pull/59373
* @yongqiw-i made their first contribution in https://github.com/vllm-project/vllm/pull/59159
* @YueshenZ made their first contribution in https://github.com/vllm-project/vllm/pull/59257
* @YuvrajSinghBhadoria2 made their first contribution in https://github.com/vllm-project/vllm/pull/57035
* @zhangchengzhucufe-dev made their first contribution in https://github.com/vllm-project/vllm/pull/59886
* @ZhenchengLin made their first contribution in https://github.com/vllm-project/vllm/pull/59251
* @ztysth made their first contribution in https://github.com/vllm-project/vllm/pull/59721

## Contributors
@BugenZhao, @aoshen02, @stefankoncarevic, @mgoin, @khluu, @hmellor, @yewentao256, @lesj0610, @MatthewBonanni, @jperezdealgaba, @ZJY0516, @AndreasKaratzas, @aarushjain29, @Sunt-ing, @NickLucche, @vadiklyutiy, @hickeyma, @divakar-amd, @yma11, @jzakrzew, @djramic, @simondanielsson, @microslaw, @Thangnguyenvn98, @mjkvaak-amd, @njhill, @chaojun-zhang, @sfeng33, @zhenwei-intel, @andyxning, @matteso1, @vMaroon, @alec-flowers, @simon-veitner-redhat, @TheEpicDolphin, @cagrikymk, @atalman, @shijie-lyu, @cheese-cakee, @Juntian777, @ivanium, @chaunceyjiang, @louie-tsai, @Dovis01, @apex-mochen, @wzhao18, @venkywonka, @pmanczak, @stecasta, @jinzhen-lin, @gty111, @noooop, @Rohan138, @rasmith, @laithsakka, @Fangzhou-Ai, @tlrmchlsmth, @Isotr0py, @cjackal, @vllmellm, @liusy58, @reidliu41, @peperunas, @shimib, @ojeda-e, @yonigozlan, @ShuoleiWang, @lucamotz, @ai-jz, @he-yufeng, @DimensionSTP, @taneem-ibrahim, @LucasWilkinson, @wangshangsam, @whx-sjtu, @micah-wil, @bzsuni, @robertgshaw2-redhat, @arpera, @sricursion, @mawong-amd, @mmastrac, @rmhaskarnvidia, @nvbfalk, @debanshd, @abmfy, @shaohuaxi, @jin-amd, @xijiaat, @ashraf-bhuiyan, @beenpow, @LioEinaudi, @Ronald1995, @R3hankhan123, @ZhengGong-amd, @Akashcodes732, @S1ro1, @yuvalluria, @mganczarenko, @DarkLight1337, @pisceskkk, @YidaWeng, @TQCB, @gau-nernst, @askliar, @benchislett, @jackLei0901, @vx120, @amd-mghanimi, @YueshenZ, @aniskumar-nv, @fululi12, @liuzijing2014, @zyongye, @Prudhvivuda, @kliuae, @wjabbour, @AbhayShuklaIIT, @WarrierRajeev, @Jeff-Tseng-dev, @yifanFengg, @elvircrn, @zupengwang, @tangzzycc, @jeejeelee, @roikoren755, @JohnQinAMD, @LeizhenZhang, @Chinmay-Kulkarni-AMD, @sungbin1015, @zhangchengzhucufe-dev, @fxmarty-amd, @lucianommartins, @nishantrevur, @hyukjlee, @andylolu2, @wangxiyuan, @stu-cao, @vineethsaivs, @zzaebok, @WoosukKwon, @franciscojavierarceo, @hpdkhoa, @gcanlin, @zigzagcai, @ultramancode, @warrendeng, @surajsharan, @subhashpolisetti, @ilmarkov, @awesome-pro, @faaany, @spandantiwari, @almogtavor, @ahmed-bsod, @danigarciaoca, @Alnusjaponica, @NNNtrance, @vaclavcadek, @YashasviAsthana, @QwertyJack, @Ubospica, @AlanFokCo, @jungjiyu, @lcskrishna, @YukioZzz, @hubunt, @sashko-zakharchuk, @staryxchen, @yzong-rh, @Ostring24, @taking-lying-flat, @drakosha, @CorgiBoyG, @QHarshil, @zhou9402, @shiyuan680, @fjosw, @a-sidorova, @GOavi101, @mrodden, @fuscof-ibm, @Taimys, @Rukhaiya2004, @KernelClint, @almayne, @JulienDarve, @sshlyapn, @eldarkurtic, @rbrugaro-amd, @GuyStone, @ZhenchengLin, @ArcheyChen, @djmmoss, @hjjq, @namgyu-youn, @jiangyunfan1, @ganeshr10, @markmc, @yantinglai, @Id545, @roipony, @JadenMathias, @hclsys, @Anurag-M1, @ukannika, @blueberry808, @nv-hwoo, @guanxingithub, @stmatengss, @mohit-sarvam, @Legend-2727, @xiaoyu-xyz, @hdq66666, @Lcy0801, @gaby, @erictang000, @jdebache, @Ayu190505, @DOCCA0, @C1ves, @maeehart, @wangyicong52, @AIwork4me, @Woolgathererer, @yongqiw-i, @divyvasal, @1fanwang, @TyroneNel, @ShengleiFu, @bluemelov1, @kamb-code, @LiRunGuo, @Thiago4532, @harshaljanjani, @ieaves, @NolenLiang, @sudhanshu112233shukla, @abhayjoshi201, @charlesli640, @Sohaib-Ahmed21, @akii96, @notimesea, @JRJRJPRO, @usberkeley, @Mazukiri, @brandonfzhang, @amd-xavierwang, @sawsa307, @czhu-cohere, @wtdcode, @tarukumar, @LostFox11, @big-yellow-duck, @SherifWaly, @roG0d, @esmeetu, @mgehre-amd, @samnordmann, @SunnyR, @ovidiusm, @cleonard530, @eky-amd, @yinli-systems, @MadhavJivrajani, @cquil11, @ywang96, @PatrykSaffer, @PatchouliTIS, @aditi-amd, @git-jxj, @vovani, @MohammadHijjawi97, @TommyTranX, @viktorkou, @xaguilar-amd, @MohitAMD, @danichan-mkm, @pondzikk, @ebfio, @mkhazraee, @ai-yang, @xuantengh, @dhairyashilRG, @www6v, @v-shobhit, @ejrtks1020, @Kylinny, @bnkaiteam, @huishi-hs, @jiahanc, @shen-shanshan, @zxd1997066, @Aravind-11, @usmanmateen, @devshah-cohere, @praveingk, @JartX, @TylerMa-debugg, @lobo235, @dougbtv, @Tialo, @kyleliang-nv, @YeonwooSung, @Kevinli24, @aijanai, @spa5k, @DGlan, @Btwestyo, @xianbaoqian, @rdlh, @hao-aaron, @errmakov, @amd-sriram, @ntheanh201, @LCAIZJ, @damienlaine, @shreyanshj10, @ischencheng, @0xViking, @yisustc, @bigPYJ1151, @Roy214, @Gregory-Pereira, @YuvrajSinghBhadoria2, @surawut-jirasaktavee, @Oxygen56, @andakai, @BolinSNLHM, @Dao007forever, @siliangchen-amd, @xiaofei-zheng, @gc-fu, @puneetsharma21, @linitra24, @devpramod, @yankay, @hlin99, @Godmook, @bvolpato, @UNIDY2002, @tc-mb, @JaredforReal, @hubert-marek, @Zhenzhong1, @AMD-yanfeiwang, @thuongvu, @JimmyWang0417, @MatthewCYM, @i-m-aditya, @lianakoleva, @peakcrosser7, @hoaivoke, @njriasan, @tjtanaa, @haotiaa, @superdiaodiao, @josh-schell-amd, @ztysth, @sungsooha, @Etelis, @natsala13, @ZhouXiaoya25

---

> **Source** [vllm-project/vllm](https://github.com/vllm-project/vllm) · `v0.32.0` · 2026-10-18 · [upstream release](https://github.com/vllm-project/vllm/releases/tag/v0.32.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
