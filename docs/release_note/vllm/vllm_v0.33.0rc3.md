---
title: "vllm v0.33.0rc3"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.33.0rc3"
version: "v0.33.0rc3"
published: "2026-11-02"
type: "minor"
lang: "en"
summary: "This release features 927 commits from 389 contributors (122 new)!"
---

# vllm v0.33.0rc3

# v0.33.0

## Highlights

This release features 927 commits from 389 contributors (122 new)!

* **New models**: Reflection Beam-1.0 (501B MoE, 23B active) with its DFlash2 drafter (#62074), Yandex AliceAI-Foundation-80B-A3B (#57963), Recursive Flint (40B MoE, 2.5B active) (#62938), Muse Spark Open (#61879), Step-5 Preview (#61727, #63147), NVIDIA Alpamayo 2 Super (#62957), Nemotron-Labs Dory1.0-4B (#60149), Nemotron Parse 3.5 (#61651), MiniCPM-OCR 1.0 (#63095), Domyn Edge (#62544) and the ColUltraVBERT visual document retriever (#62237).
* **PyTorch 2.14**: vLLM is upgraded to PyTorch 2.14.0, with torchvision 0.29.0 and Triton 3.8.0 (#52183).
* **CUDA 12.9 dropped**: release wheels and images are CUDA 13.0 only. The CUDA 12.9 wheels and the `-cu129` / `-cu129-ubuntu2404` images are no longer published (#62575); use the default CUDA 13.0 artifacts instead.
* **libtorch ABI stable CUDA wheel**: the CUDA wheel is now ABI stable with libtorch.
* **AWS EFA image**: a new `vllm/vllm-openai:v0.33.0-efa` image (x86_64 and aarch64) bundles the AWS EFA libraries and the EFA build of the Mooncake transfer engine, for KV transfer and multi-node serving on EFA-enabled EC2 instances (#58768).
* **`vllm/vllm` image alias**: every release image is now also published under the shorter `vllm/vllm` name, e.g. `vllm/vllm:v0.33.0`, `vllm/vllm:v0.33.0-efa` and `vllm/vllm:v0.33.0-rocm`.
* **Speculative decoding**: the new XPress refiner for block-diffusion drafters such as DFlash and DSpark (#54448); FLy, an opt-in lossy verification policy with 1.04-1.31x decode throughput on MI355X and B300 (#53987); DFlash/DSpark no longer reserve draft slots in the token budget, taking DeepSeek-V4.1-Flash + DSpark on GB300 from 1373 to 3390 output tok/s in the PR's benchmark (#59468); quantized draft `lm_head` (`draft_lm_head_quantization`, +18% decode at concurrency 1) (#59973); lookahead block hashes so EAGLE/MTP prefix-cache hits keep their last block, on by default (#61589); and MTP drafts in the Transformers modeling backend (#61270).
* **Faster decode on NVIDIA**: opt-in latency-specialized decode on GB300 for Kimi-K3 (1.5-2x at TP8/TP16, #61867) and DeepSeek-V4.1-Flash (18.3% faster decode step at batch 1, #61868); DeepSeek-V4/V4.1 MXFP4 experts run as block FP8 through Humming on Hopper (+9-21% decode on 4x H200, #61875); FA4 sparse MLA decode on Blackwell (#55866); FlashInfer DCP prefill on trtllm-gen with 39-48% lower mean TTFT at 100k input on 8xB200 (#62029); and decode-only full CUDA graphs under MRV2 prefill context parallelism (2.6x over eager, #62377).
* **AMD ROCm**: the default ROCm image and wheels move to ROCm 10.0, with ROCm 7.2 still published as `-rocm72` (#58761); MonoKernel decode via `--monokernel` for DeepSeek-V4.1-Flash on MI300X/MI325X (2.32x P50 interactivity at concurrency 1, #60731) and on every MI355X layer (#61082), and for MiniMax-M3-MXFP4 on MI355X (16.6% lower TPOT, #62712, #62994); the `ROCM_OCTAVE` 3-4 bit KV cache (4.6x the KV tokens of fp16 on RX 7900 XTX, #59774); and gfx1250 enablement for gpt-oss-120b, DeepSeek-R1, DeepSeek-V4-Flash and MiniMax-M3 (#58800).
* **API and serving**: the OpenAI-compatible `/v1/decisions` endpoint, on by default for supported generation models (#60465, #61550); token embeddings with optional late chunking on `/v1/embeddings` (#61772, #63051, #60164); `output_mode="derender"` on `/inference/v1/generate` (#60082); a large Rust frontend parity push, including no more HTTP 500 on long conversations (#62374) and unsupported flags failing at startup (#62431); concurrent worker startup with TP > 1 (#60028); and a watchdog that dumps stack traces from stuck engine and worker processes (#55700).
* **Breaking changes**: Medusa and the MLP speculator removed (#61701); the legacy Ray compiled-graph executor removed (#61712, #62228); `--mamba-cache-mode` deprecated (#60043); requests sent while generation is paused now get HTTP 503 (#51488); the NIXL connector needs NIXL 1.5 or newer (#61032); LM Format Enforcer and `--ir-op-priority` deprecated (#63423, #63371).

## Release Artifacts

<!-- TODO: verify every URL and tag after publishing (wheels.vllm.ai/rocm/0.33.0/, wheels.vllm.ai/0.33.0/xpu, Docker Hub tags, GitHub release assets). -->

### Python Wheels

| Platform | Install |
|---|---|
| PyPI (CUDA 13.0) | `pip install vllm` |
| PyPI (CUDA 13.0, uv) | `uv pip install vllm --torch-backend=auto` |
| ROCm 10.0 | `pip install vllm --extra-index-url https://wheels.vllm.ai/rocm/0.33.0/rocm100` |
| ROCm 7.2 | `pip install vllm --extra-index-url https://wheels.vllm.ai/rocm/0.33.0/rocm72` |
| XPU | `uv pip install vllm --extra-index-url https://wheels.vllm.ai/0.33.0/xpu --extra-index-url https://download.pytorch.org/whl/xpu --index-strategy unsafe-best-match` |

### Docker Images

| Platform | Docker Image |
|---|---|
| CUDA 13.0 (Default) | `docker pull vllm/vllm-openai:v0.33.0` |
| CUDA 13.0 + AWS EFA | `docker pull vllm/vllm-openai:v0.33.0-efa` |
| ROCm 10.0 | `docker pull vllm/vllm-openai-rocm:v0.33.0` |
| ROCm 7.2 | `docker pull vllm/vllm-openai-rocm:v0.33.0-rocm72` |
| CPU | `docker pull vllm/vllm-openai-cpu:v0.33.0` |
| XPU | `docker pull vllm/vllm-openai-xpu:v0.33.0` |

Every image is also available under the shorter `vllm/vllm` name: `vllm/vllm:v0.33.0`, `vllm/vllm:v0.33.0-efa`, `vllm/vllm:v0.33.0-rocm` (`-rocm100`, `-rocm72`), `vllm/vllm:v0.33.0-cpu` and `vllm/vllm:v0.33.0-xpu`. `latest` works the same way, e.g. `vllm/vllm:latest-rocm`.

### Other Artifacts

Pre-built release artifacts are available in the **Assets** section at the bottom of this page, including:
- Source distribution tarball
- CUDA 13.0 Python wheels for x86_64 and arm64
- CPU Python wheels for x86_64, arm64, and macOS
- XPU Python wheel for x86_64

## Model Support
* **New models**: Reflection Beam-1.0 (`BeamForCausalLM`) day-0 support with its DFlash2 drafter and fused Blackwell kernels (#62074, #62042), plus `beam` reasoning and tool parsers (#62052); Yandex AliceAI-Foundation-80B-A3B (Kimi Delta Attention hybrid, 512-expert MoE, 262K context) (#57963); Recursive Flint BF16 and NVFP4 GGUF checkpoints with small-batch Blackwell decode kernels (#62938); Muse Spark Open (#61879) with reasoning and tool parsers (#62207); Step-5 Preview (#61727, #62126, #62132), running on SM100 (#63147) with LoRA (#62498); NVIDIA Alpamayo 2 Super (#62957); Nemotron-Labs Dory1.0-4B (#60149); Nemotron Parse 3.5 with an MTP proposer on MRV2 (#61651); MiniCPM-OCR 1.0 (#63095); Domyn Edge (#62544); ColUltraVBERT (#62237); LFM2.5-Embedding-350M (`Lfm2BidirectionalModel`, #62201); Kolibri 1 through the Transformers backend (#60827); and Decision 3.0 models (#61565, #61778) and Cloudflare Clef-Flash (#61308) on `/v1/systemone`.
* **DeepSeek-V4 and V4.1**: length-aware decode indexer block selection (about 850 us saved per step at 1M context, #61039); MegaMoE experts loaded directly in the DeepGEMM layout so `reload_weights` works (#60096); `fused_wqa_wkv` split by token across TP on SM90 (#58872); MegaAttn `wo_a` writes MXFP8 input for `wo_b` (#60118); native small-head FlashMLA sparse prefill on SM90 (#61615); FlashMLA interleaved KV layout (#61371); redundant EPLB expert slots loaded (#59611); GPU Engram tables read from peer HBM, fixing DEP decode hangs on GB200 (#62091); and fixes for Engram under PP (#62208), Engram all-to-all hangs (#62269), prefill index-workspace NaNs (#60613), C128 compressed-KV writes under PIECEWISE graphs (#59709), routed-expert rows under replay (#61643, #62652) and the updated 1017 reference encoding (#62199, #62200).
* **GLM**: GLM-5.3-Flash defaults to an FP8 KV cache (9.8% higher end-to-end throughput in the PR's benchmark, #61228) and gets mHC TileLang decode kernels on Blackwell (#62745); GLM-5.3 per-token-group quant (2.8% ITL, #60927), in-place draft decode metadata (#61873) and skipped `concat_and_cache_mla` scales (1.2-3.0% TPOT on B300, #62102); FP8 indexer WK pairs kept across `load_weights` calls, fixing thinking loops with runai_streamer (#59223).
* **Kimi-K3**: KDA RecoverSSM CuTe DSL verify/commit kernels on SM10x, with verify records moved out of the KV cache so KV connectors work (#63045); online quantization of NVIDIA projections (#62980).
* **Qwen**: Qwen3.8-Flash-Next FP8 QSA KV cache on Ampere (#60602, #60992), packed NVFP4 PLE embeddings that fit Qwen3.8-Flash-Next-NVFP4 on one DGX Spark (#56273) and PLE short-conv prefill checkpoints (#61601); FlashInfer GDN prefill checkpoints for Qwen3-Next / Qwen3.5 (#60050).
* **Other models**: Cohere2MoE attention/MoE dual stream, single TP all-reduce and fused add + RMSNorm (1.14-1.36x TPOT, on by default, #62101); Beam TP all-reduce fused with norms and MoE finalize (#62366); MiniMax-M3 CUTLASS MSA decode crossover (#55838); Granite MoE as an EAGLE3/DFlash/DSpark target (#61110); NemotronHMTP sharing target embeddings (#62194); LoRA for BERT cross-encoders and token classification (#61279, #61391).
* **Multimodal**: PaddleOCR-VL batched vision encoder (34-85% more throughput, #61458) and `compile_mm_encoder` (#61838); DeepSeek-VL2 ViT full CUDA graphs (#46005); Gemma4Unified batched embedding (#60643); Pixtral real-valued RoPE under compile (#63145); and fixes for EXAONE-4.5 images (broken since v0.29.0, #61104), Gemma 4 encoder graphs (#61365, #60687, #63538), DeepSeek-VL2 encoder cache and PP (#63120, #63192) and Gemma 4 placeholders (#61196).
* **Transformers modeling backend**: MTP speculative drafts (#61270), fused post-top-k MoE routers (#57410), graph caching instead of AOT caching (#58918) and dynamic-RoPE CUDA graphs (#58064).

## Engine Core
* **Speculative decoding**: XPress (#54448), FLy (#53987), no draft-slot budget reservation for DFlash/DSpark (#59468), quantized draft `lm_head` (#59973), lookahead block hashes (#61589), MRV2 skipping drafts no request can use (up to 7.3% prefill throughput with DFlash, #62784), Triton split-K verify (#56148), varlen Mamba2 decode for adaptive verification (#53036), and fixes for stop-trimmed token counts (#58668), block verification randomness (#61161), MTP block tables (#61174), grammar masks (#52477), EAGLE SWA prefix hits (#62206), DFlash/DSpark Mamba checkpoint reuse (#54163) and PP warmup (#62129).
* **Model Runner V2**: batch-sharded sampling for GPT-OSS (#61257) with adaptive verification (#58466), 31-120x faster long-prompt staged writes on GB200 (#62698), encoder towers skipped on later PP stages (0.58-1.27 GiB per stage, #60238), async scheduling kept for ngram (#62521), `input_ids` on later PP stages (#61016), and memory-profiling fixes (#57926, #58243, #61509, #63431).
* **Sampling**: Triton top-k/top-p skips the cutoff search for masked logits (up to about 8x, #61213); small-batch split top-p (1.22-2.70x on B300, #61996); and fixes for huge logits and boundary ties (#58231, #62046).
* **Startup and reliability**: concurrent local worker startup with TP > 1 (about 50s saved at TP8, #60028); shared Triton JIT compile pool (9-28% faster cold warmup, #61422); engine and worker watchdog (#55700); libgomp fork deadlock fixed (#62884); Fast Start with expert parallelism (#55490) and daemon fixes (#62583, #63451, #63088, #62734, #63506); and SHM broadcast reader memory growth fixed (#63165).
* **Memory and performance**: UVA-offloaded MoE experts on the sorted fused-MoE path (+7-19%, #62054); DispatchPooler bypass for homogeneous pooling (up to 10.3%, #62940); linear-time encoder cache free (#62850); sliding-window block tables null freed entries (#60767).
* **LoRA**: expert LoRA for MXFP4 MoE on `flashinfer_trtllm` (#61979), text-only LoRAs on multimodal wrappers (#62224), unsupported models rejected at validation (#61884), and fixes for `load_inplace` reloads (#41482), `max_loras` accounting (#60306), SM90 `lora_expand` NaNs (#61906) and wake-up from level-2 sleep (#62358).
* **RL**: per-choice `return_weight_versions` (#61347), NCCL M2N transfer with per-parameter meshes (#60934), parameter metadata sent once (#35911), the `ParamMeta` / `iter_full()` / `iter_local()` weight-transfer API (#63256), and a silent MoE weight corruption fix with packed NCCL transfer plus layerwise reload (#62555).
* **Batch invariance**: compressed-tensors W4A16/W8A16 (#60524), GateLinear routers (#59985), online FP8 MoE (#57092), and inductor batch-invariant mode under `VLLM_BATCH_INVARIANT` (#61118).

## Large Scale Serving
* **Context parallelism**: MRV2 PCP decode full CUDA graphs (#62377); PCP for DeepSeek-V4.1-Flash with prefix caching and SWA bounded replay (#59857, #62183, #62384); FlashInfer DCP prefill on trtllm-gen (#62029); direct DCP all-to-all with strided LSE (#60373); FlashMLA sparse on the a2a DCP backend (#61285).
* **HiSparse**: direct reads of GPU-resident KV, fixing OOM with long prompts and a 3.3x slowdown on 1M-token prefill (#60417); faster host pool prefault (#60869); and P/D correctness fixes (#61659, #62739, #63827).
* **KV connectors**: NIXL 1.5 strided descriptors (#61032), sleep mode with the pull connector (#59635), mixed hybrid MLA block sizes (#61002) and GQA draft head sharding (#58471); Mooncake sleep mode over RDMA (#59625) and Prometheus metrics (#56939); MoRIIO hybrid and heterogeneous-TP WRITE transfers (#60544, #61726); streaming responses carry `kv_transfer_params` (#40186); fault tolerance extended to P/D, fixing KV block leaks (#56430).
* **KV offload**: CPU offload over up to 32 shm files (GLM-5.3 offload startup 63.6 s to 38.3 s, #59546), opt-in same-step small loads (#61961), EAGLE/MTP partial tails in align mode (#61019), lock/unlock and off-thread tiering (#58168), and many correctness fixes (#63266, #60810, #63652, #62929, #63010, #60574, #63655).
* **MoE and DP**: DeepEP-v2 fused decode globalize+align (up to 2.01x on H200 EP32, #53911); Elastic EP with an external load balancer (#43202); low-latency CPU all-reduce for DP syncs (#61767) and a DP wave hang fix (#59559); EPLB fixes for MXFP4/MXFP8 scales (#61786) and NIXL reads (#62081).

## Hardware & Performance
* **NVIDIA**: Kimi-K3 and DeepSeek-V4.1-Flash latency-specialized decode on GB300 (#61867, #61868); FA4 sparse MLA decode (#55866); opt-in CuTe DSL MLA context prefill (#62069); DeepGEMM MegaMoE with NVFP4 routed experts (#61538) and warmed-up kernels (#60468, #61657); Triton GDN decode tuned on SM100 (#61355); GLM-5.2/5.3 low-latency BF16 GEMM on SM107 (#62843); pre-SM90 FlashInfer spec decode in full CUDA graphs (73.6 to 108.1 tok/s on SM80, #60532); `cooperative_topk` sized by row length (#62171); fused GDN MTP decode for SM80-SM90 in CUDA 12.x builds (#60896); and DGX Spark Qwen4Exp TP2 plans (#61437).
* **AMD ROCm**: ROCm 10.0 default image (#58761); MonoKernel decode for DeepSeek-V4.1-Flash and V4-Pro and MiniMax-M3 (#60731, #61082, #61482, #62712, #62994); `ROCM_OCTAVE` KV cache (#59774); gfx1250 enablement (#58800); DeepSeek-V4 MXFP4 indexer K cache by default on CDNA4 (up to 30.7% lower TTFT, #60834, #63669); AITER MegaMoE fixed-slot dispatch (14-15%, #61262) and shared-expert overlap (#61819); Kimi-K3 Gluon KDA kernels (#57392, #59552) and specialized decode (#60683); Qwen3.5 fused GDN MTP decode (+10-16% on MI350X, #61855); Qwen3.8-Flash-Next native W4A4 (1.9-2.3x, #60816); AITER top-k for sparse indexers on gfx950 (#61943); FlyDSL GDN prefill default on gfx942/gfx950 (#60645); RDNA3 TRITON_ATTN addressing restored (about 18%, #60084); and a MiniMax-M3-MXFP4 startup fix for very large GEMMs (#64567).
* **Intel XPU**: SYCL GDN prefill backend selection (#56835), torch MXFP4 linear backend (#51965), SYCL FlashAttention for prefix-LM text batches (#62014) and NIXL 1.5.0 in the image (#60356).
* **CPU**: zentorch 2.14.0.1 with float16 on Zen CPUs with AVX512-FP16 (#61411); MRV2 Triton warmup at startup removing an 11-20 s first-request compile (#62888); INT8 W8A8 MoE brgemm (#60740); hybrid-model prefix caching (#61805); and Run:ai Model Streamer in the CPU image (#61382).
* **Other**: tpu-inference v0.32.0 with torch 2.14.0 (#63080) and more out-of-tree platform hooks (#62026, #63017, #63601, #63457).

## Quantization
* Humming runs DeepSeek-V4/V4.1 MXFP4 experts as block FP8 on Hopper (#61875) and honors `--quantization-config.moe.activation` (#62751); pluggable KV cache data types (#52670); online re-quantization extended to NVFP4 MoE (#60276); Quark MXFP8 routed experts (#63125); MoNe expert-pruning checkpoints (#50415); torch MXFP8 linear backend (#51933); FP8 per-token-group quant 1.15-1.29x faster (#61343); Cosmos3-Edge ModelOpt FP8 (#57393); and a Nemotron-3-Nano NVFP4 garbage-output fix under torch.compile (#61749).

## API & Frontend
* **New endpoints and options**: `/v1/decisions` (#60465, #61550); token embeddings and late chunking (#61772, #63051, #60164); `output_mode="derender"` (#60082); `--reasoning-effort-map` (#61094); `--sleep-mode-backend` (#63138); dynamic profiler options on `/start_profile` (#51974); images on `/v1/systemone` (#62181, #62437); Responses `max_tool_calls` (#47112) and prompt-cache fields (#62856); and `/openapi.json` response schemas (#60926).
* **Tool calling and reasoning**: linear-time streaming tool arguments for GLM, Gemma 4, Qwen3 XML (2.1 s to 11 ms for a 12 KB call) and MiniMax M2 (#61253, #61494, #62027, #62035); DeepSeek V3 multi-line arguments (#60362); structured output masks grammar-invalid reasoning ends instead of returning 500 (#61574).
* **Behavior**: chat `finish_reason` and Responses `status` reflect what happened (#59324); beam search normalizes by generated length so `length_penalty` applies (#62928); automatic truncation reserves one generation token (#62010).
* **Rust frontend**: `--trust-request-chat-template` (#62673), `--return-tokens-as-token-ids` (#63318), `--tokenizer` options (#62416), `--custom-histogram-buckets` (#62826) and per-request metrics (#59314); request and response parity with the Python frontend (#62434, #62425, #62426, #62427, #62428, #61949, #62429, #62822, #62663); and the MiniJinja fuel limit only on request-supplied templates (#62374).

## Security
* Per-request budgets for downloaded and decoded media bytes (#61226); speculators checkpoint metadata can no longer reference local verifier paths (#61587); `certifi>=2026.10.19` and refreshed CA certificates (#62868); raised floors for aiohttp, Pillow, MCP and multidict (#62835).

## Dependencies
* PyTorch 2.14.0, torchvision 0.29.0, Triton 3.8.0 (#52183).
* FlashInfer 0.7.2.post1 (#60948, #61913, #63466), humming-kernels 0.1.19 (#62816, #64802), DeepGEMM 2.8.1 and later pins (#61149, #61744, #63253), FlashMLA 2026.09.30 (#61371), TokenSpeed MLA 2.0.3 (#61125, #61689), `nvidia-cudnn-frontend>=1.31.0` (#61465), NIXL 1.5.0 (#60428, #60356) and LMCache 0.5.6 (#62835).
* ROCm: AITER v0.1.26 (#61697, #62486) and UCX v1.23.0-rc1 (#62827). CPU: zentorch 2.14.0.1 (#61411). TPU: tpu-inference v0.32.0 (#63080).

## Build
* Release wheels and images are CUDA 13.0 only (#62575); new `vllm-openai-efa` Docker target (#58768); ROCm 10.0 is the default ROCm image with ROCm 7.2 as `-rocm72` (#58761); ROCm wheel builds about 4-7x faster (#63105).

## Breaking Changes & Deprecations
* CUDA 12.9 wheels and images are no longer published (#62575).
* Medusa and the MLP speculator were removed (#61701). The legacy Ray compiled-graph executor was removed and `VLLM_USE_RAY_V2_EXECUTOR_BACKEND` is gone; `RayExecutorV2` is the only Ray executor (#61712, #62228).
* Deprecated: `--mamba-cache-mode` (no effect, #60043), `--ir-op-priority` (removal in v0.34.0, #63371), and the LM Format Enforcer structured-output backend (opt-in in v0.34.0, removal in v0.35.0, #63423).
* API changes: requests sent while generation is paused return HTTP 503 (#51488); `kv_transfer_params` / `ec_transfer_params` moved to the top level of render output (#61241); LoRA on a model without LoRA support fails at validation (#61884); the RL weight-transfer API now uses `ParamMeta`, `iter_full()` and `iter_local()` (#63256); beam search scores are normalized by generated length (#62928).
* Rust frontend: unsupported `vllm serve` flags and request fields fail instead of being ignored (#62431, #62434); request-supplied chat templates need `--trust-request-chat-template` (#62673); an empty `tools` array returns 400 (#63060).
* The NIXL connector requires NIXL 1.5 or newer (#61032).
* Removed env vars: `VLLM_ROCM_AITER_MLA_DCP_VERIFY` (#61628), `VLLM_ROCM_USE_AITER_FP4_ASM_GEMM` (#61278) and `VLLM_ROCM_AITER_MEGA_MOE_FUSE_SHARED_EXPERTS` (#61345); `VLLM_ROCM_MONO_DECODE` is replaced by `--monokernel` (#61082).
* New defaults: GLM-5.3-Flash FP8 KV cache (#61228); lookahead block hashes for EAGLE/MTP prefix caching (#61589); Cohere2MoE dual stream (#62101); FA4 sparse MLA decode at 16 or fewer query heads per rank on Blackwell (#55866); ROCm: AITER FP8/FP4 BMM for MLA off (#53123), FlyDSL GDN prefill (#60645), AITER `topk_gating` (#56226), `rms_norm_gated` (#60250) and MXFP4 indexer K cache on CDNA4 for DeepSeek-V4 (#63669).

## New Contributors
* @4arkeinlvy made their first contribution in https://github.com/vllm-project/vllm/pull/62928
* @adarshxs made their first contribution in https://github.com/vllm-project/vllm/pull/62142
* @AdvayMonga made their first contribution in https://github.com/vllm-project/vllm/pull/63010
* @akshan-main made their first contribution in https://github.com/vllm-project/vllm/pull/51172
* @akshayv made their first contribution in https://github.com/vllm-project/vllm/pull/57705
* @albertoveneri made their first contribution in https://github.com/vllm-project/vllm/pull/62544
* @algebra-MCX made their first contribution in https://github.com/vllm-project/vllm/pull/63372
* @amirfr3 made their first contribution in https://github.com/vllm-project/vllm/pull/56867
* @andre-motta made their first contribution in https://github.com/vllm-project/vllm/pull/56549
* @Anerudhan made their first contribution in https://github.com/vllm-project/vllm/pull/61913
* @aniravich made their first contribution in https://github.com/vllm-project/vllm/pull/60733
* @anish-shanbhag made their first contribution in https://github.com/vllm-project/vllm/pull/55838
* @BeichenHuang made their first contribution in https://github.com/vllm-project/vllm/pull/61906
* @booth-algo made their first contribution in https://github.com/vllm-project/vllm/pull/61016
* @C-C-Hao made their first contribution in https://github.com/vllm-project/vllm/pull/59941
* @CAICAIIs made their first contribution in https://github.com/vllm-project/vllm/pull/56939
* @chenjr97 made their first contribution in https://github.com/vllm-project/vllm/pull/62129
* @chessing234 made their first contribution in https://github.com/vllm-project/vllm/pull/52412
* @ChingTsai made their first contribution in https://github.com/vllm-project/vllm/pull/62880
* @Chocolatine75 made their first contribution in https://github.com/vllm-project/vllm/pull/62911
* @cipheraxat made their first contribution in https://github.com/vllm-project/vllm/pull/60885
* @cycancode made their first contribution in https://github.com/vllm-project/vllm/pull/61876
* @Damin3927 made their first contribution in https://github.com/vllm-project/vllm/pull/61196
* @deadstrobe5 made their first contribution in https://github.com/vllm-project/vllm/pull/62035
* @DenisOvchinnikov93 made their first contribution in https://github.com/vllm-project/vllm/pull/61651
* @dkhachyan made their first contribution in https://github.com/vllm-project/vllm/pull/61382
* @dskwe made their first contribution in https://github.com/vllm-project/vllm/pull/61272
* @eecspan made their first contribution in https://github.com/vllm-project/vllm/pull/53987
* @GagandeepKang-cohere made their first contribution in https://github.com/vllm-project/vllm/pull/62029
* @GoDiao made their first contribution in https://github.com/vllm-project/vllm/pull/61128
* @GodRishUniverse made their first contribution in https://github.com/vllm-project/vllm/pull/46754
* @HaiQiao-Wang made their first contribution in https://github.com/vllm-project/vllm/pull/63126
* @ibrahimnd2000 made their first contribution in https://github.com/vllm-project/vllm/pull/61829
* @JackRao123 made their first contribution in https://github.com/vllm-project/vllm/pull/59709
* @jayyen01 made their first contribution in https://github.com/vllm-project/vllm/pull/63080
* @jeffnvidia made their first contribution in https://github.com/vllm-project/vllm/pull/58154
* @jiaqiang-dot-liu made their first contribution in https://github.com/vllm-project/vllm/pull/62403
* @jlqibm made their first contribution in https://github.com/vllm-project/vllm/pull/59717
* @jmeadlock made their first contribution in https://github.com/vllm-project/vllm/pull/58184
* @john-evan08 made their first contribution in https://github.com/vllm-project/vllm/pull/60373
* @khyun1109 made their first contribution in https://github.com/vllm-project/vllm/pull/62841
* @kimseunghyun-kr made their first contribution in https://github.com/vllm-project/vllm/pull/60602
* @KrzysztofTomala made their first contribution in https://github.com/vllm-project/vllm/pull/62957
* @KuanJia made their first contribution in https://github.com/vllm-project/vllm/pull/61825
* @lcfenglinwan made their first contribution in https://github.com/vllm-project/vllm/pull/52670
* @ldkhang1201 made their first contribution in https://github.com/vllm-project/vllm/pull/61749
* @Ledgero made their first contribution in https://github.com/vllm-project/vllm/pull/54163
* @LeslieWylie made their first contribution in https://github.com/vllm-project/vllm/pull/61618
* @limkcreply made their first contribution in https://github.com/vllm-project/vllm/pull/57331
* @linshi-w made their first contribution in https://github.com/vllm-project/vllm/pull/47046
* @lishuoshuo-amd made their first contribution in https://github.com/vllm-project/vllm/pull/63082
* @Loken-Lau made their first contribution in https://github.com/vllm-project/vllm/pull/62469
* @longluubao made their first contribution in https://github.com/vllm-project/vllm/pull/58385
* @Lucky-Lodhi2004 made their first contribution in https://github.com/vllm-project/vllm/pull/56270
* @ly989264 made their first contribution in https://github.com/vllm-project/vllm/pull/62374
* @lzwwaylon made their first contribution in https://github.com/vllm-project/vllm/pull/62329
* @MetehanAydemir made their first contribution in https://github.com/vllm-project/vllm/pull/62738
* @mosafariuk made their first contribution in https://github.com/vllm-project/vllm/pull/59472
* @mottopanikeiku made their first contribution in https://github.com/vllm-project/vllm/pull/60586
* @Mramaran made their first contribution in https://github.com/vllm-project/vllm/pull/63138
* @MuonChaser made their first contribution in https://github.com/vllm-project/vllm/pull/62301
* @mushroomcarbon made their first contribution in https://github.com/vllm-project/vllm/pull/62054
* @mutichung made their first contribution in https://github.com/vllm-project/vllm/pull/57393
* @nej1gotnochill made their first contribution in https://github.com/vllm-project/vllm/pull/60279
* @niansia made their first contribution in https://github.com/vllm-project/vllm/pull/60362
* @nien-hui made their first contribution in https://github.com/vllm-project/vllm/pull/60179
* @nilig made their first contribution in https://github.com/vllm-project/vllm/pull/63498
* @noone-zhhh made their first contribution in https://github.com/vllm-project/vllm/pull/60979
* @ntu-b12505041 made their first contribution in https://github.com/vllm-project/vllm/pull/55901
* @omuhamma made their first contribution in https://github.com/vllm-project/vllm/pull/57392
* @OnePunchMonk made their first contribution in https://github.com/vllm-project/vllm/pull/61636
* @patrk made their first contribution in https://github.com/vllm-project/vllm/pull/62665
* @pctablet505 made their first contribution in https://github.com/vllm-project/vllm/pull/56129
* @peilii made their first contribution in https://github.com/vllm-project/vllm/pull/61710
* @pepmach made their first contribution in https://github.com/vllm-project/vllm/pull/63652
* @peymanr made their first contribution in https://github.com/vllm-project/vllm/pull/57832
* @pkuwangh made their first contribution in https://github.com/vllm-project/vllm/pull/62767
* @pllopis made their first contribution in https://github.com/vllm-project/vllm/pull/59223
* @qimcis made their first contribution in https://github.com/vllm-project/vllm/pull/60805
* @rao-ashish made their first contribution in https://github.com/vllm-project/vllm/pull/58032
* @reda-maizate made their first contribution in https://github.com/vllm-project/vllm/pull/62704
* @RohitNagraj made their first contribution in https://github.com/vllm-project/vllm/pull/62534
* @roigarnettNvidia made their first contribution in https://github.com/vllm-project/vllm/pull/52780
* @roy6n23 made their first contribution in https://github.com/vllm-project/vllm/pull/59898
* @rushabh-46 made their first contribution in https://github.com/vllm-project/vllm/pull/51974
* @samayp01 made their first contribution in https://github.com/vllm-project/vllm/pull/58862
* @SCcagg5 made their first contribution in https://github.com/vllm-project/vllm/pull/61192
* @shan18 made their first contribution in https://github.com/vllm-project/vllm/pull/60149
* @shernshiou made their first contribution in https://github.com/vllm-project/vllm/pull/59554
* @ShyamalShah3 made their first contribution in https://github.com/vllm-project/vllm/pull/63178
* @sragrawal made their first contribution in https://github.com/vllm-project/vllm/pull/61563
* @ssingh231219 made their first contribution in https://github.com/vllm-project/vllm/pull/61458
* @stdlibstring made their first contribution in https://github.com/vllm-project/vllm/pull/62709
* @stoivonen-amd made their first contribution in https://github.com/vllm-project/vllm/pull/60644
* @taeyangyun made their first contribution in https://github.com/vllm-project/vllm/pull/58304
* @tessapham made their first contribution in https://github.com/vllm-project/vllm/pull/61924
* @theSatvik made their first contribution in https://github.com/vllm-project/vllm/pull/55485
* @tiankaijin made their first contribution in https://github.com/vllm-project/vllm/pull/56430
* @timka-byzov made their first contribution in https://github.com/vllm-project/vllm/pull/57963
* @tryryry made their first contribution in https://github.com/vllm-project/vllm/pull/63451
* @Vedant-Agarwal made their first contribution in https://github.com/vllm-project/vllm/pull/63655
* @Vigilans made their first contribution in https://github.com/vllm-project/vllm/pull/62181
* @Vivaansharma2003 made their first contribution in https://github.com/vllm-project/vllm/pull/61572
* @wenbinc-Bin made their first contribution in https://github.com/vllm-project/vllm/pull/46685
* @wolfcomos made their first contribution in https://github.com/vllm-project/vllm/pull/59737
* @wsascha made their first contribution in https://github.com/vllm-project/vllm/pull/62885
* @XFDG made their first contribution in https://github.com/vllm-project/vllm/pull/58143
* @XiaochunTong-Cohere made their first contribution in https://github.com/vllm-project/vllm/pull/62101
* @YaashuDave made their first contribution in https://github.com/vllm-project/vllm/pull/61884
* @YangXu1990uiuc made their first contribution in https://github.com/vllm-project/vllm/pull/55671
* @ybwbqg9379 made their first contribution in https://github.com/vllm-project/vllm/pull/57092
* @YeonghyeonKO made their first contribution in https://github.com/vllm-project/vllm/pull/61780
* @YongfengX made their first contribution in https://github.com/vllm-project/vllm/pull/58064
* @yuyz-cyber made their first contribution in https://github.com/vllm-project/vllm/pull/47112
* @zamog made their first contribution in https://github.com/vllm-project/vllm/pull/58231
* @ZhouXiaoya25 made their first contribution in https://github.com/vllm-project/vllm/pull/58297
* @zhy76 made their first contribution in https://github.com/vllm-project/vllm/pull/60759
* @ZKBig made their first contribution in https://github.com/vllm-project/vllm/pull/54448
* @ZN1010 made their first contribution in https://github.com/vllm-project/vllm/pull/61110
* @znzryb made their first contribution in https://github.com/vllm-project/vllm/pull/61809
* @zydo made their first contribution in https://github.com/vllm-project/vllm/pull/61058
* @zyulai made their first contribution in https://github.com/vllm-project/vllm/pull/62294

## Contributors
@BugenZhao, @AndreasKaratzas, @khluu, @aoshen02, @WoosukKwon, @jeejeelee, @chaojun-zhang, @Ankur-singh, @Juntian777, @hmellor, @njhill, @Ronald1995, @Isotr0py, @esmeetu, @djramic, @hickeyma, @bzsuni, @Thangnguyenvn98, @stefankoncarevic, @simon-veitner-redhat, @wzhao18, @micah-wil, @aarushjain29, @mgoin, @ZJY0516, @Etelis, @yewentao256, @wangyicong52, @charxwu, @JaredforReal, @dskwe, @gty111, @NickLucche, @vadiklyutiy, @MatthewBonanni, @johncalesp, @liranschour, @mjkvaak-amd, @Rohan138, @sawsa307, @okorzh-amd, @liusy58, @chunfangamd, @hshrivastava-droid, @whx-sjtu, @Fangzhou-Ai, @divakar-amd, @kimseunghyun-kr, @gau-nernst, @jperezdealgaba, @LinzeShi, @noooop, @LopezCastroRoberto, @chaunceyjiang, @xaguilar-amd, @shen-shanshan, @fxmarty-amd, @alec-flowers, @lesj0610, @robertgshaw2-redhat, @mottopanikeiku, @omuhamma, @hlin99, @vMaroon, @andakai, @zyongye, @yifanFengg, @TheEpicDolphin, @josh-schell-amd, @stecasta, @karya0, @ganeshr10, @zixi-qi, @QHarshil, @cipheraxat, @albertoperdomo2, @cjackal, @YukioZzz, @cycancode, @LucasWilkinson, @tianmu-li, @qli88, @Levius-Fubuki, @RyanMa29, @almogtavor, @frida-andersson, @yonigozlan, @amd-sriram, @cleonard530, @Taimys, @aniravich, @lucamotz, @ZhengGong-amd, @zufangzhu, @SherifWaly, @Rapisurazurite, @sudhanshu112233shukla, @ssingh231219, @amirfr3, @sohom-cs, @thuongvu, @apex-mochen, @zexplorerhj, @Xunzhuo, @HangruiCao2000, @jzakrzew, @amd-xavierwang, @sragrawal, @ayush1399, @avininjamay8, @tuukkjs, @lcskrishna, @fululi12, @KuanJia, @jhaotingc, @Monishver11, @fangyuchu, @ShuoleiWang, @tlrmchlsmth, @afriedri, @deadstrobe5, @BeichenHuang, @Sunt-ing, @benenzhu, @surajm20061998, @YaashuDave, @peperunas, @longluubao, @nien-hui, @taneem-ibrahim, @stu-cao, @RohitNagraj, @mritunjaysharma394, @wenjinhust, @Yejing-Lai, @yma11, @suiyoubi, @hoaivoke, @hao-aaron, @jinzhen-lin, @kfirtoledo, @jeffreywang88, @bigPYJ1151, @snadampal, @algebra-MCX, @nilig, @akshayv, @xinnywinne, @tomasruizt, @ieBoytsov, @venkywonka, @zxd1997066, @pctablet505, @Godmook, @zhouyou9505, @JackRao123, @samayp01, @noone-zhhh, @adtygan, @GodRishUniverse, @elvircrn, @chessing234, @roberteg16, @GuanLuo, @anish-shanbhag, @wenbinc-Bin, @TimRen01, @franciscojavierarceo, @rjrock, @liulanze, @warrendeng, @akshan-main, @atalman, @abhayjoshi201, @linshi-w, @xuebwang, @hclsys, @YongfengX, @rao-ashish, @sfbemerk, @ZN1010, @lucas-santos-amd, @simondanielsson, @rasmith, @bbrowning, @limkcreply, @XFDG, @zhy76, @Vivaansharma2003, @jacklin78911-collab, @staryxchen, @danielafrimi, @dkhachyan, @sfeng33, @timka-byzov, @peilii, @zdtsw, @jimmy-adams, @talorabr, @nej1gotnochill, @laithsakka, @littlecircle0730, @mosafariuk, @zigzagcai, @mgehre-amd, @yinli-systems, @booth-algo, @DimensionSTP, @jpvillam-amd, @shernshiou, @Anerudhan, @jhu960213, @tessapham, @sandeep-maddipatla, @benchislett, @maithilijoshi20, @shimib, @bnellnm, @soyr-redhat, @guan404ming, @DanBlanaru, @wangxiyuan, @pkousha, @YangXu1990uiuc, @lucifer1004, @fadara01, @abmfy, @znzryb, @positive666, @gitbisector, @zhenwei-intel, @TyroneNel, @chenjr97, @louie-tsai, @rdlh, @peakcrosser7, @ibrahimnd2000, @andre-motta, @LeslieWylie, @dilberx, @athrael-soju, @Zhenzhong1, @iboiko-habana, @wentian-byte, @xijiaat, @harshaladhav-amd, @junkang1991, @eecspan, @jackLei0901, @zamog, @SCcagg5, @AMD-yanfeiwang, @Lucky-Lodhi2004, @qimcis, @lzwwaylon, @PeganovAnton, @niansia, @wolfcomos, @x41lakazam, @yuchenwang3, @yuvalluria, @maeehart, @lcfenglinwan, @john-evan08, @fangchenli, @zhou-yuhan, @HollowMan6, @S1ro1, @sshlyapn, @theSatvik, @Loken-Lau, @jmeadlock, @bvolpato, @stdlibstring, @QwertyJack, @jeffnvidia, @GagandeepKang-cohere, @eky-amd, @roy6n23, @adarshxs, @ntu-b12505041, @zydo, @jiaqiang-dot-liu, @mganczarenko, @DenisOvchinnikov93, @YueshenZ, @hyukjlee, @ly989264, @peymanr, @roigarnettNvidia, @linitra24, @MIR-AMD, @mutichung, @pkuwangh, @XiaochunTong-Cohere, @alex-jw-brooks, @C-C-Hao, @yaoyaoding, @lzzzzzc, @sricursion, @jyizheng, @huthvincent, @luoyuctl, @SIDDARTHAREDDY8, @Damin3927, @shijie-lyu, @namgyu-yun, @ldkhang1201, @reda-maizate, @4arkeinlvy, @Chocolatine75, @patrk, @KrzysztofTomala, @Chinmay-Kulkarni-AMD, @JRJRJPRO, @mushroomcarbon, @lucianommartins, @0z5a, @dharak-cohere, @Blaze-DSP, @csahithi, @qthequartermasterman, @MetehanAydemir, @tiankaijin, @taeyangyun, @ZKBig, @zyulai, @jayyen01, @Mramaran, @CAICAIIs, @Ledgero, @yuyz-cyber, @lishuoshuo-amd, @iseeyuan, @tc-mb, @ybwbqg9379, @ChingTsai, @he-yufeng, @TQCB, @xqoasis, @Vigilans, @pmanczak, @Akashcodes732, @faaany, @Nan2018, @haosdent, @Woolgathererer, @albertoveneri, @jcotant-inferact, @khyun1109, @ShyamalShah3, @aditi-amd, @nishantrevur, @stoivonen-amd, @jlqibm, @GOavi101, @tjtanaa, @ukannika, @xiao-llm, @rushabh-46, @umarkovi-amd, @YeonghyeonKO, @shan18, @zupengwang, @HaiQiao-Wang, @AdvayMonga, @tryryry, @shreyanshj10, @pllopis, @jianzs, @BWAAEEEK, @JartX, @wsascha, @pepmach, @BaoYunkai, @Vegetog, @Sy0307, @Vedant-Agarwal, @javieratomic, @OnePunchMonk, @ztysth, @Potabk, @ischencheng, @R3hankhan123, @ivanium, @GoDiao, @MuonChaser, @hpdkhoa, @grYe99

---

> **Source** [vllm-project/vllm](https://github.com/vllm-project/vllm) · `v0.33.0rc3` · 2026-11-02 · [upstream release](https://github.com/vllm-project/vllm/releases/tag/v0.33.0rc3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
