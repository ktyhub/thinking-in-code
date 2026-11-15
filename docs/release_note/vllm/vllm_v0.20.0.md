---
title: "vllm v0.20.0"
project: "vllm"
repo: "vllm-project/vllm"
tag: "v0.20.0"
version: "v0.20.0"
published: "2026-04-27"
type: "minor"
lang: "en"
summary: "This release features 752 commits from 320 contributors (123 new)!"
---

# vllm v0.20.0

# vLLM v0.20.0

## Highlights
This release features 752 commits from 320 contributors (123 new)!

* **DeepSeek V4**: Initial DeepSeek V4 support landed (#40860), with DSML token-leakage fix in DSV4/3.2 (#40806), DSA + MTP IMA fix (#40772), and a silu clamp limit on the shared expert (#40950).
* **CUDA 13.0 default**: Default CUDA wheel on PyPI and `vllm/vllm-openai:v0.20.0` image switched to CUDA 13.0; architecture lists and build-args cleaned up (#39878), and CUDA bumped to 13.0.2 to match PyTorch 2.11.0 (#40669). As a general rule of thumb, our CUDA version policy follows PyTorch's. We highly recommend to install vLLM with `uv` and use `--torch-backend=cu129` if you are on CUDA 12.9.
* **PyTorch 2.11 upgrade** (#34644): vLLM ships on torch 2.11 for CUDA, and XPU is now also on torch 2.11 (#37947) — XPU is no longer pinned to 2.10. This is a breaking change for environment dependency.
* **Python 3.14**: Added to the supported Python version list (#34770).
* **Transformers v5**: vLLM now runs on HuggingFace `transformers>=5` (#30566), with vision-encoder torch.compile bypass (#30518) and continued v4/v5 compat fixes including PaddleOCR-VL image processor `max_pixels` (#38629), Mistral YaRN warning (#37292), and Jina ColBERT rotary inv_freq recompute (#39176).
* **New large models**: Hunyuan v3 (Hy3) preview (#40681) with HYV3 reasoning parser (#40713); Granite 4.1 Vision as a built-in multimodal model (#40282).
* **FlashAttention 4 as default MLA prefill**: FA4 re-enabled as the default MLA prefill backend (#38819) with head-dim 512 and paged-KV support on SM90+ (#38835), plus an upstream FA4 sync (#38690).
* **TurboQuant 2-bit KV cache**: New attention backend delivering 2-bit KV cache compression with 4× capacity (#38479), now with FA3/FA4 prefill support (#40092).
* **Online quantization frontend**: New end-to-end online quantization frontend (#38138), with docs (#39736); experts_int8 consolidated into the FP8 online path (#38463); MXFP8 online quant moved to the new frontend (#40152).
* **vLLM IR**: Initial IR skeleton with rms_norm op (#33825), OOT-platform kernel imports (#38807), gemma_rms_norm reworked on IR (#39014), and IR op testing/benchmarking infra added (#40167) — foundation for future kernel work.
* **Model Runner V2 advances**: Eagle prefill full-CUDA-graph (#37588), auto-resolve cudagraph mode/sizes from attention backend (#32936), fused probabilistic rejection sample kernels (#38496), config validation for unsupported features (#38758), piecewise-fallback disabled for eagle draft decodes (#39773), multiple prompt-logprobs support (#39937), prefill warmup coverage (#40746), and a fix for accuracy regression caused by stale sampled/draft tokens (#39833).
* **MoE refactor series**: Unquantized migrated to Full Oracle Flow (#36286), CT W8A8 to Oracle (#39187), SharedExperts class (#35153), `SharedFusedMoE` removed (#35782), DefaultMoERunner split (#35326) and later combined back into `MoERunnerBase` (#40560), shared/fused expert output sum moved into `MoERunnerBase` (#35949), ZeroExpertFusedMoE in new framework (#35549), `compressed_tensors_moe.py` split (#38960), `GPTQMarlinMoEMethod` reworked with MK (#37990), XPU & CUTLASS MoE relocated to `fused_moe/experts/` (#40568, #40574), `make_expert_params_mapping` renamed (#40671), MoE LoRA refactor (#40338), and MoE DP chunking removed (#39107).
* **Performance**: Optimize batch invariant with fused rms norm — 2.1% E2E latency improvement (#40413); avoid `seq_lens_cpu` GPU→CPU sync (#40654); cache `InductorPass.hash_source` (#39328); skip FX-graph deserialization on loading for faster warm compile (#40151); CUDAGraph memory profiling enabled by default for clearer startup memory accounting (#38284).

### Model Support
* New architectures: DeepSeek V4 (#40860), Hunyuan v3 preview (#40681), Granite 4.1 Vision (#40282), EXAONE-4.5 (#39388), BharatGen Param2MoE (#38000), Phi-4-reasoning-vision-15B (#38306), Cheers multimodal (#38788), telechat3 (#38510), FireRedLID (#39290), jina-reranker-v3 (#38800), Jina Embeddings v5 (#39575), Nemotron-v3 VL Nano/Super (#39747).
* Gemma4 series: fast prefill (#38879), quantized MoE (#39045), Eagle3 (#39450), block-local attention + YaRN for Gemma3 (#39823), bidirectional vision attention for sliding layers (#40534), token-repetition fix via dynamic BOS (#39842), multimodal embedder norm-order fix (#40411), plus a string of streaming/tool-call fixes (#38844, #38909, #38992, #39114, #39679, #39027).
* Quantization formats: GGUF support for MiniMax-M2.1 (#36965), non-standard GGUF quant types with prefix such as UD-IQ1_S (#39471).
* Speculative decoding: Eagle3 for MiniMax-M2 (#37512), Eagle3 for Gemma4 (#39450).
* LoRA: Qwen3ASRForConditionalGeneration (#37247), Gemma4ForConditionalGeneration (#39291, #38844), DeepSeek V3.2 (#35077), Qwen3.5 / Step3.x expert base_layer extension (#37114), MoE LoRA refactor (#40338), dual-CUDA-streams linear layer (#35721).
* Multimodal MRoPE refresh: mm_features-based MRoPE for Ernie-4.5 VL (#39753), Keye-VL / Keye-1.5-VL (#39869), PaddleOCR-VL (#39888).
* Other: Nano-Nemotron-VL static image inputs fix (#40724); Qwen3 MoE no longer calls gate twice (#40664); DeepSeek V2-Lite accuracy drop fix (#40673); Parakeet UX / perf enhancements (#39423); ColModernVBERT updated for latest HF checkpoint (#39307); NemotronH default `mamba_ssm_cache_dtype=float32` with NemotronHNanoVLV2 auto-hook (#39032); new TP plan styles for the Transformers backend (#40467); GLM-5.1 fix on ROCm (#40763).

### Engine Core
* **Model Runner V2**: Full CUDA graph for eagle prefill (#37588), auto cudagraph mode/sizes based on attention backend (#32936), fused probabilistic rejection-sample kernels (#38496), config validation (#38758), eagle-draft piecewise fallback disabled (#39773), multiple prompt logprobs (#39937), prefill warmup coverage (#40746), stale sampled/draft tokens accuracy fix (#39833).
* **vLLM IR**: IR skeleton + rms_norm (#33825), OOT kernel import hooks (#38807), gemma_rms_norm on IR (#39014), IR op testing/benchmarking infra (#40167).
* **torch.compile**: Opaque Objects on torch 2.11 (#39286), AOT compile with batch-invariance mode (#39201), Inductor cache nested under AOT dir (#39718), split FX graph via codegen (#38657), Inductor pre-grad passes re-enabled for torch≥2.12 (#38944), strings in custom ops without compile regressions (#38123), MLA + group FP8 fusion (#38877), SiluMul activation+quant fusion refactor (#39684), `donate_graph_module=True` for `standalone_compile` (#39733), skip FX graph deserialization on loading (#40151), include Inductor & functorch configs in compile-cache key (#40627), respect `TORCH_COMPILE_DISABLE` at vLLM config level (#40715), disable Sequence Parallelism for piecewise compilation (#38373).
* **Attention**: FA4 as default MLA prefill (#38819), head-dim 512 + paged-KV on sm90+FA4 (#38835), FA4 upstream sync (#38690), full CUDA graph for FlexAttention (#36298), FlexAttention non-causal support (#40394), unified 2D/3D triton_unified_attention (#40631), TRTLLM minimax_allreduce_rms ported (#37045), `concat_mla_q` half-types only (#37892), batch-invariance-aware backend auto-selection (#40193), avoid `seq_lens_cpu` GPU→CPU sync (#40654).
* **Helion kernels**: torch.compile support for Helion kernels (#38592).
* **HMA / KV offload**: GPU-side KV events for HMA (#37688), group block hashes/IDs tracked (#37109), unified memory layout for offloading workers (#37206), `shutdown()` on OffloadingConnector (#39182), request context passed through KV offload (#39185), sliding-window lookup (#36645), multi-group worker transfer (#38453), multi-KV-group lookup/load/store (#39401, #39402, #39403).
* **Features**: NUMA binding for GPU workers (#38635), opt-in `VLLM_MEDIA_CACHE` media URL caching (#37123), safe request abort when FSM fails to advance (#38663), KV connector prioritized over internal registry (#38301), CUDAGraph memory profiling on by default (#38284), shared-expert overlap restored (#39222), `CONFIG_REGISTRY` config-class lookup fix when on-disk model_type differs (#39554), workspace-resize GPU memory leak fix (#39226), SWA/chunked-local runtime admission capped to startup pool-sizing bound (#40946).
* **Pluggable layers**: Applied to llm_head / vocab embedding (#33465) and MoE layers (#33556).
* **Mamba**: Stochastic rounding (#35753), different Conv state layouts (#37416), FlashInfer `selective_state_update` (#36162).
* **Metrics & scheduling**: Labeled waiting-breakdown (capacity/deferred) metric (#38435), API server handshake simplified (#39364), mm-scheduler `get_num_embed` overhead reduced (#40143), `request_id` on `FinishedRequestStats` (#39710).
* **Executor**: RayExecutorV2 introduced (#36836); unified engine process monitoring with Ray backend (#35862).

### Hardware & Performance
* **NVIDIA**: swapAB support for SM120 CUTLASS blockwise FP8 GEMM (#38325), MXFP4 W4A4 CUTLASS MoE for SM100 (#37463), TRTLLM GEN NVFP4 MoE with non-512-aligned hidden dims via weight padding (#39510), TRTLLM FP8 MoE with shuffled weights + BlockMajorK layout (#38993), fused qknorm+rope kernel on SM9.0 (#37376), tuned fused_moe config for RTX PRO 6000 Blackwell (#39183), ViT full CUDA graph for Qwen3-VL video (#38061), `--enable-vit-cuda-graph` for VLM examples (#40580), default `max_frames_per_batch` auto-infer for ViT CG video (#40445), fused FP8 output quantization into `merge_attn_states` (#36518), batched KV-cache swap via `cuMemcpyBatchAsync` (#38460), sm_110 (Jetson Thor) added to CUDA 13.0 build targets (#39233).
* **AMD ROCm**: ZenCPU / AMD Zen CPU backend via zentorch (#39967), RDNA 3.5/4 device IDs (gfx1150/1151/1201) (#38455), gfx1102/gfx1103 added (#40037), MORI EP for unquantized MoE with AITER (#37529), MoRI build with AMD AINIC stack (#38371), MoRI-IO message format aligned with P2pNcclConnector and vllm-router (#39565), MORI prefill/decode API correction (#39835), AITER gemm w8a8 ptpc integration (#33773), TritonW4A16LinearKernel (#37352), asymmetric INT8 in `TritonInt8ScaledMMLinearKernel` (#38501), `fused_silu_mul_block_quant` enabled (#38817), KV-cache shuffle for `paged_attention_common` (#32914), MLA decode output zero-fill removed in AITER (#37539), MLA dual RMS norm fusion pass for DeepSeek/Kimi-K2 (#39242, with older-AITer guard #40386), AITER MLA + Eagle3 spec decode (#39616), DFlash on ROCm (#39703), wvSplitK FP8 path for RDNA (#37712), GPU↔NUMA-node detection (#40015), non-causal attention in `ROCM_ATTN` (#40176), engine-shutdown GPU memory leak fix (#38503), score-correction-bias dtype cast for DeepSeek/Kimi-K2 (#39999).
* **Intel XPU**: torch 2.11 upgrade for XPU (#37947) — no longer pinned to 2.10, initial GDN attention for Qwen3-Next / Qwen3.5 (#33657), torch.compile for XPU GDN attention (#39466), XPU MXFP8 quant op (#38682), XPU MXFP4 quant op (#39857), per-channel FP8 linear (#38316), FP8 KV cache on XPU (#37731), `round_int8` for Intel Triton (#38825), MoE Triton in online FP8 quantization fix (#40109), `current_platform.supports_fp8()` updated for TritonExperts (#40132), NIXL import on XPU fix (#40430), fusion-pattern support disabled on XPU (#39789).
* **CPU**: CPU draft-model speculative decoding (#32662), CPU int8 compute mode in AWQ (#35697), head_size 512 in `cpu_attn` (#38676), gelu in `cpu_fused_moe` (#38770), OMP replacement (#36487), BF16 GELU LUT on ARM (#37469), W4A16 Autoround on CPU (#38192), CPU affinity/memory mgmt refactor (#39781), IBM Z s390x torch 2.11 builds (#39910), faster exp routine for lower-precision dtypes (#38112), inter-node pipeline parallel fix (#40150), RISC-V multiple RVV VLEN targets (#39478), RISC-V platform detection fix (#40427), exp() input clamp to prevent NaN on CPU/RISC-V (#40428).
* **TPU**: tpu-inference upgraded to 0.18.0 (#40395).
* **DeepSeek / MLA / Indexer**: Persistent TopK scheduler for DSV3.2 DSA decode (#37421), DSV3.2 indexer fused weights projection (#38684), Triton MLA perf fixes (#33529), indexer WK upcast to BF16 for fusion (#38928), MLA indexer uniform-decode optimization for MTP>1 (#39458), DSA + MTP IMA fix (#40772).
* **GDN / Mamba**: Kernel fusion in GDN (#37813), TMA aligned with upstream FLA (#38981), GPU↔CPU syncs eliminated in prefill and spec-decode paths (#38361, #38047).
* **Other**: DeepGEMM integrated into the vLLM wheel via CMake (#37980), Lustre FS checkpoint prefetching enabled by default (#39422), Gemma4 fused routing Triton kernel (#39083), Gemma4 embed_input_ids GPU/CPU sync removed (#39234), Nemotron VL image/video preprocessing optimized (#40283), SiLU block-quant fusion v1 (#32996), bilinear_pos_embed Triton kernel for ViT (#37948), mean-pooling optimization (~5.9% throughput) (#38559), redundant-sync removal for pooling (~3.7% throughput) (#39113), H2D pageable-memory copy reduction (#38794), fused zero initializer for FP8 DeepGemm block-quant (#39547), batch-invariant fused-rms-norm 2.1% E2E latency improvement (#40413), `InductorPass.hash_source` cached (#39328), humming quantization kernel (#34556).

### Large Scale Serving
* **EPLB**: Alternative communication for EPLB weight exchange (#33176), nixl-based EPLB communicator (#36276), mapping optimization with router record for prefill (#36261), `TransferMetadata` consolidation (#37341), Async EPLB synchronization refactor (#37601), asyncio infrastructure removed from Async EPLB (#40730), replica-selection bias fix in fused_moe router (#40810), Async EPLB integration test added (#40168).
* **WideEP**: Naive all2all replaced by allgather + reducescatter (#33728).
* **KV Offload / Connector**: 3FS KVConnector (#37636), unified memory layout for offloading workers (#37206), cache_salt propagated through MP connector for per-user isolation (#39837), multi-connector metrics of same type (#40010), LMCache block-allocation event (#38856), LMCache MP save optimization with MLA (#38810), `num_lmcache_extra_cached_token` in KVTransferParams (#39843), offload all KV blocks during prefill in P/D (#40346), DP control bundle pinned to first GPU's node on Ray (#39167), FlashInfer NVLink MNNVL workspace sized to EP group (#40893).
* **Disaggregated / NIXL / Mamba**: Full PD support for Mamba2-like models on Heterogeneous TP deployments (#37635), Nixl bumped to 0.10.1 (#39922), `TpKVTopology` + `HeteroTPTransferConfig` unified into `TransferTopology` (#39529), NIXL EP treated as batched experts in fused_moe (#40412).

### Quantization
* **New formats & methods**: TurboQuant 2-bit KV cache compression (#38479) with FA3/FA4 prefill (#40092), per-token-head INT8/FP8 KV cache quantization (#38378), fused FP8/NVFP4 output quantization in MLA attention (#35792), NVFP4 dense models on MI300/MI355X and Hopper via emulation (#35733), NVFP4 MoE emulation fallback for H100/MI300/MI350 (#35737), humming quantization kernel (#34556).
* **Kernels**: MXFP8 in Marlin GEMM/MoE with Mxfp8LinearOp refactor (#34664), MXFP4 W4A4 CUTLASS MoE for SM100 (#37463), NVFP4 in `reshape_and_cache_flash` (#37332), batch-invariant NVFP4 linear (#39322), FlashInfer CuteDSL batched-experts backend for NVFP4 MoE (#38251), special `GptOssMxfp4MoeMethod` (#39604), W4A8_FP8 MoE TP>1 correctness fix (#40310), NVFP4 CUTLASS MoE OOB-read fix for non-multiple-of-4/16 expert counts (#40351), RMS norm + quant fusion fix on DeepGEMM UE8M0 path for B200 (#40552), Gemma4 quantized MoE (#39045).
* **Compressed tensors**: W8A8 MXFP8 linear/MoE (`CompressedTensorsW8A8Mxfp8`) (#38815), CT W8A8 in Oracle structure (#39187), layerwise reloading of attention/KV quantized models (#38995), experts_int8 consolidated with FP8 online quant (#38463), MXFP8 online quant on the new frontend (#40152).
* **Online quant**: Quantized model init failure fix with prefetch offloading (#40432), `current_platform.supports_fp8()` updated for TritonExperts on XPU/ROCm (#40132).
* **XPU / CPU / AMD**: XPU MXFP4 (#39857), XPU MXFP8 GEMM + compressed-tensor schema (#38707), XPU FP8 per-channel linear (#38316), FP8 KV cache on XPU (#37731), CPU W4A16 Autoround (#38192), XPU W4A16 Autoround (#37986), asymmetric INT8 `TritonInt8ScaledMMLinearKernel` on ROCm (#38501), Quark W8A8 INT8 MoE inference (#36320).
* **Deprecations**: Petit NVFP4 removed (#32694).

### API & Frontend
* **OpenAI / Anthropic API**: `presence_penalty` / `frequency_penalty` on Responses API (#38613), Responses API streaming migrated to unified parser (#38755), `tool_choice` / `tools` validation on Responses to match OpenAI (#40399), Mistral Grammar factory (#38150), multimodal support on `/inference/v1/generate` (#38405), `max_tokens_per_doc` in rerank (#38827), Generative Scoring (#34539), MaxSim re-enabled on GPU (#38620), `chat_template_kwargs` on Anthropic `/v1/messages` (#40125), auto-detection of `reasoning_config` when only `reasoning_parser` is set (#38214), reasoning parsers can access model config via `adjust_request` (#37848, #39027), effective chat-template kwargs passed to reasoning parsers (#40460), reasoning parsers expose `reasoning_start_str`/`reasoning_end_str` (#40566).
* **Pooling ecosystem**: Pooling entrypoints overhauled across scoring (#28631), pooling (#39153), and cleanup (#39675); preprocessing/postprocessing offloaded to thread pool (#39763); async scheduling disabled by default for pooling (#39592); `logit_scale` added to PoolerConfig (#39435), then renamed `logit_bias`/`logit_scale` → `logit_mean`/`logit_sigma` for affine score calibration (#39530) — breaking. `LLM.reward` deprecated; use `LLM.encode` instead (#40688).
* **gRPC / streaming**: Streaming on token-generation endpoint (#37171); gRPC periodic stats logging + servicer log forwarding (#38333); standard `grpc.health.v1` health check for Kubernetes-native probes (#38016).
* **Tool / reasoning parsers**: Treat `<tool_call>` as implicit reasoning end in Qwen3 (#35687), `is_reasoning_end_streaming()` override for GptOssReasoningParser (#35745), Mistral tool parser HF-tokenizer fix (#39294), Mistral pre-v11 tool parser trailing-output fix (#40531), Gemma4 streaming HTML duplication / JSON corruption / null-as-string fixes (#38909, #38992, #39114, #39679), HF tokenizer concurrent-borrow fix in tool parsers (#40059), `HYV3ReasoningParser` no longer mutates `chat_template_kwargs` (#40713).
* **Multimodal**: Externally processed `mm_kwargs` with cache injection (#39502), PyAV video backend for concurrent decoding (#39986), custom video metadata for pre-extracted frame sequences (#40133), image+video mixed inputs (per prompt) for VLM examples (#40335), deepstack buffer optimized for Qwen3 multimodal (#40145), readonly multimodal processor warmup during renderer startup (#40797), `mm_processor_kwargs` forwarded in offline `generate` APIs (#40251), normalize malformed dict prompts that carry token IDs in `prompt` (#40339), hotwords for FunASR (#39674), bundle `get_generation_prompt()` params into `SpeechToTextParams` (#36268).
* **Frontend / vLLM Omni**: `--omni` delegates to vLLM Omni (#40744); avoid eager import of `mistral_common` (#40043).
* **LLM / CLI**: Structured-output special tokens preserved in offline `LLM.chat` (#39352), `use_audio_in_video` passable at `vllm serve` for nemotron-nano-vl (#38538), deferred imports save ~2s CLI startup (#40056), improved MM-input-too-long error message (#39409), warning when FP8 KV cache misses prefill query quant (#39752), clearer DCP error message (#28443), `--model` deprecation warning updated (#39518), Mimo reasoning/tooling parsers mapped (#40089), human-readable `k/K/m/M…` suffix in JSON CLI args (#40473).

### Spec Decode
* Eagle3 for MiniMax-M2 (#37512), Eagle3 for Gemma4 (#39450), AITER MLA + Eagle3 on ROCm (#39616).
* TurboQuant FA3/FA4 for prefill paths (#40092).
* Mamba: default to `'align'` cache mode for Mamba-based models when speculative decoding is enabled (#40454).
* Unified Synthetic Acceptance Rate for V1 and V2 (#40662); `SpecDecodeBaseProposer` moved out of `eagle.py` (#40732); DSA + MTP IMA fix (#40772).

### Security
* SSRF fix in batch runner `download_bytes_from_url` (#38482).

### Dependencies
* **PyTorch 2.11** for CUDA (#34644) and XPU (#37947) — XPU no longer pinned to 2.10.
* **CUDA 13.0** default with updated architecture lists and cleaned build-args (#39878); CUDA bumped to 13.0.2 to match PyTorch 2.11.0 (#40669); sm_110 (Jetson Thor) added (#39233).
* **Python 3.14** added to supported versions (#34770).
* **Transformers v5** (#30566), with vision-encoder torch.compile bypass (#30518) and continued v4/v5 compat fixes.
* **FlashAttention 4** upstream sync (#38690) and symlink-on-install behavior (#38814).
* **FlashInfer** bumped to 0.6.8 (#39959).
* **AITER** triton BUFFER_OPS fix + version updates (#38580), AITER reverted to v0.1.10.post3 (#39509); **Nixl** bumped to 0.10.1 (#39922) and pinned per CUDA major in CI (#39851); **DeepGEMM** integrated into the wheel via CMake (#37980); **fastsafetensors** added to NVIDIA Dockerfile (#38950); Helion bumped 0.3.2 → 0.3.3 (#38062).
* **Removed / moved**: `resampy` dependency dropped (#39524), `librosa` direct dependency dropped (#39079), `pyav` and `soundfile` moved to common requirements (#39997).

### Breaking Changes
1. **PyTorch 2.11 + CUDA 13.0(.2) default** — environment dependency change, now applied to XPU as well.
2. **Transformers v5** is the supported baseline (#30566).
3. **Metrics rework**: `vllm:prompt_tokens_recomputed` removed (#38709); `num_cached_tokens` / `num_external_computed_tokens` replaced with `PrefillStats` (#37460).
4. **Pooler config rename**: `logit_bias`/`logit_scale` → `logit_mean`/`logit_sigma` (#39530).
5. **Async scheduling default OFF for pooling models** (#39592).
6. **CUDAGraph memory profiling now ON by default** (#38284) — startup memory accounting changes.
7. **Petit NVFP4 quantization removed** (#32694); `LLM.reward` deprecated, use `LLM.encode` (#40688); `cprofile` / `cprofile_context` deprecated (#39100); V0 `accept output buffer` deprecated (#39125).

### V0 Deprecation
* Petit NVFP4 (#32694), `accept output buffer` in attention (#39125), `cprofile` / `cprofile_context` (#39100), `LLM.reward` offline API (#40688).

## New Contributors
* @1096125073 made their first contribution in https://github.com/vllm-project/vllm/pull/38510
* @2imi9 made their first contribution in https://github.com/vllm-project/vllm/pull/38970
* @AAISSJ made their first contribution in https://github.com/vllm-project/vllm/pull/37831
* @abatilo made their first contribution in https://github.com/vllm-project/vllm/pull/38987
* @aditi-amd made their first contribution in https://github.com/vllm-project/vllm/pull/39953
* @aeon-x made their first contribution in https://github.com/vllm-project/vllm/pull/39843
* @Alchuang22-dev made their first contribution in https://github.com/vllm-project/vllm/pull/40339
* @aleksandaryanakiev made their first contribution in https://github.com/vllm-project/vllm/pull/40125
* @aliialsaeedii made their first contribution in https://github.com/vllm-project/vllm/pull/38253
* @artem-spector made their first contribution in https://github.com/vllm-project/vllm/pull/40282
* @bai made their first contribution in https://github.com/vllm-project/vllm/pull/39959
* @bhargav-patel-29 made their first contribution in https://github.com/vllm-project/vllm/pull/38000
* @bingshuailiu made their first contribution in https://github.com/vllm-project/vllm/pull/38788
* @Bortlesboat made their first contribution in https://github.com/vllm-project/vllm/pull/39123
* @BugenZhao made their first contribution in https://github.com/vllm-project/vllm/pull/40460
* @carlyou made their first contribution in https://github.com/vllm-project/vllm/pull/36205
* @Chinmay-Kulkarni-AMD made their first contribution in https://github.com/vllm-project/vllm/pull/39967
* @crawfordxx made their first contribution in https://github.com/vllm-project/vllm/pull/38722
* @daiyu1111 made their first contribution in https://github.com/vllm-project/vllm/pull/40011
* @dalistarh made their first contribution in https://github.com/vllm-project/vllm/pull/40194
* @daniebrill made their first contribution in https://github.com/vllm-project/vllm/pull/36934
* @dhonnappa-amd made their first contribution in https://github.com/vllm-project/vllm/pull/38238
* @dondetir made their first contribution in https://github.com/vllm-project/vllm/pull/38455
* @efortin made their first contribution in https://github.com/vllm-project/vllm/pull/39183
* @elenalil-aws made their first contribution in https://github.com/vllm-project/vllm/pull/38927
* @elwhyjay made their first contribution in https://github.com/vllm-project/vllm/pull/39526
* @EricccYang made their first contribution in https://github.com/vllm-project/vllm/pull/37376
* @evezhier made their first contribution in https://github.com/vllm-project/vllm/pull/36540
* @ezylopx5 made their first contribution in https://github.com/vllm-project/vllm/pull/37051
* @fergusfinn made their first contribution in https://github.com/vllm-project/vllm/pull/35745
* @foreverlms made their first contribution in https://github.com/vllm-project/vllm/pull/31113
* @frgossen made their first contribution in https://github.com/vllm-project/vllm/pull/38944
* @Galigator made their first contribution in https://github.com/vllm-project/vllm/pull/40161
* @ganeshr10 made their first contribution in https://github.com/vllm-project/vllm/pull/32662
* @hangy-amd made their first contribution in https://github.com/vllm-project/vllm/pull/39703
* @heachary made their first contribution in https://github.com/vllm-project/vllm/pull/39999
* @hhk7734 made their first contribution in https://github.com/vllm-project/vllm/pull/37171
* @hnt2601 made their first contribution in https://github.com/vllm-project/vllm/pull/39892
* @hospedales made their first contribution in https://github.com/vllm-project/vllm/pull/38847
* @huangzhilin-hzl made their first contribution in https://github.com/vllm-project/vllm/pull/40092
* @ianliuy made their first contribution in https://github.com/vllm-project/vllm/pull/39473
* @ibifrost made their first contribution in https://github.com/vllm-project/vllm/pull/37636
* @ibrahim1023 made their first contribution in https://github.com/vllm-project/vllm/pull/39169
* @ichbinblau made their first contribution in https://github.com/vllm-project/vllm/pull/38371
* @jackcfwang made their first contribution in https://github.com/vllm-project/vllm/pull/38794
* @jaseelmohd2 made their first contribution in https://github.com/vllm-project/vllm/pull/39986
* @jatseng-ai made their first contribution in https://github.com/vllm-project/vllm/pull/37352
* @JeanPaulShapo made their first contribution in https://github.com/vllm-project/vllm/pull/35736
* @jefp made their first contribution in https://github.com/vllm-project/vllm/pull/39435
* @jesus-talavera-ibm made their first contribution in https://github.com/vllm-project/vllm/pull/38714
* @jigangz made their first contribution in https://github.com/vllm-project/vllm/pull/39780
* @JoursBleu made their first contribution in https://github.com/vllm-project/vllm/pull/36965
* @khairulkabir1661 made their first contribution in https://github.com/vllm-project/vllm/pull/38388
* @khushali9 made their first contribution in https://github.com/vllm-project/vllm/pull/40409
* @kibitzing made their first contribution in https://github.com/vllm-project/vllm/pull/37501
* @KimuGenie made their first contribution in https://github.com/vllm-project/vllm/pull/39679
* @kkyyxhll made their first contribution in https://github.com/vllm-project/vllm/pull/38517
* @kot-begemot-uk made their first contribution in https://github.com/vllm-project/vllm/pull/36487
* @krishung5 made their first contribution in https://github.com/vllm-project/vllm/pull/39502
* @KyleMylonakisProtopia made their first contribution in https://github.com/vllm-project/vllm/pull/38699
* @lalit10 made their first contribution in https://github.com/vllm-project/vllm/pull/38955
* @larryli2-amd made their first contribution in https://github.com/vllm-project/vllm/pull/39616
* @lesj0610 made their first contribution in https://github.com/vllm-project/vllm/pull/40359
* @liuchenbing2026 made their first contribution in https://github.com/vllm-project/vllm/pull/37512
* @lyd1992 made their first contribution in https://github.com/vllm-project/vllm/pull/40428
* @MekayelAnik made their first contribution in https://github.com/vllm-project/vllm/pull/39085
* @menogrey made their first contribution in https://github.com/vllm-project/vllm/pull/37989
* @mieshkiwrk made their first contribution in https://github.com/vllm-project/vllm/pull/38825
* @misaAle made their first contribution in https://github.com/vllm-project/vllm/pull/39554
* @Monishver11 made their first contribution in https://github.com/vllm-project/vllm/pull/32996
* @mukesh-hai made their first contribution in https://github.com/vllm-project/vllm/pull/38435
* @namgyu-youn made their first contribution in https://github.com/vllm-project/vllm/pull/38799
* @nemanjaudovic made their first contribution in https://github.com/vllm-project/vllm/pull/38114
* @nithinvc made their first contribution in https://github.com/vllm-project/vllm/pull/38405
* @noobHappylife made their first contribution in https://github.com/vllm-project/vllm/pull/38519
* @pedramr made their first contribution in https://github.com/vllm-project/vllm/pull/39650
* @petern48 made their first contribution in https://github.com/vllm-project/vllm/pull/37247
* @philip-essential made their first contribution in https://github.com/vllm-project/vllm/pull/39823
* @pinsiangamd made their first contribution in https://github.com/vllm-project/vllm/pull/37529
* @Prathmesh234 made their first contribution in https://github.com/vllm-project/vllm/pull/36466
* @puririshi98 made their first contribution in https://github.com/vllm-project/vllm/pull/39206
* @qiching made their first contribution in https://github.com/vllm-project/vllm/pull/39752
* @qmx made their first contribution in https://github.com/vllm-project/vllm/pull/35687
* @rbrugaro-amd made their first contribution in https://github.com/vllm-project/vllm/pull/39242
* @rishaps made their first contribution in https://github.com/vllm-project/vllm/pull/39092
* @Roy214 made their first contribution in https://github.com/vllm-project/vllm/pull/39575
* @San-Nguyen made their first contribution in https://github.com/vllm-project/vllm/pull/40324
* @SandishKumarHN made their first contribution in https://github.com/vllm-project/vllm/pull/35431
* @SeraphimSerapis made their first contribution in https://github.com/vllm-project/vllm/pull/39861
* @ShubyM made their first contribution in https://github.com/vllm-project/vllm/pull/38844
* @shunting314 made their first contribution in https://github.com/vllm-project/vllm/pull/36298
* @skavulya made their first contribution in https://github.com/vllm-project/vllm/pull/40430
* @starkwj made their first contribution in https://github.com/vllm-project/vllm/pull/38726
* @stevenkuang-tencent made their first contribution in https://github.com/vllm-project/vllm/pull/40681
* @storyicon made their first contribution in https://github.com/vllm-project/vllm/pull/40133
* @talorabr made their first contribution in https://github.com/vllm-project/vllm/pull/36029
* @thomasmaindron made their first contribution in https://github.com/vllm-project/vllm/pull/39293
* @TihoElek made their first contribution in https://github.com/vllm-project/vllm/pull/38849
* @triangleXIV made their first contribution in https://github.com/vllm-project/vllm/pull/39102
* @ultranationalism made their first contribution in https://github.com/vllm-project/vllm/pull/40191
* @USTCKAY made their first contribution in https://github.com/vllm-project/vllm/pull/39181
* @V2arK made their first contribution in https://github.com/vllm-project/vllm/pull/38016
* @vedantjh2 made their first contribution in https://github.com/vllm-project/vllm/pull/34539
* @velonica0 made their first contribution in https://github.com/vllm-project/vllm/pull/39478
* @vibhavagarwal5 made their first contribution in https://github.com/vllm-project/vllm/pull/39064
* @VinayakMishra95 made their first contribution in https://github.com/vllm-project/vllm/pull/40729
* @Wangxiaoxiaoa made their first contribution in https://github.com/vllm-project/vllm/pull/40455
* @wincent8 made their first contribution in https://github.com/vllm-project/vllm/pull/37841
* @wojciech-wais made their first contribution in https://github.com/vllm-project/vllm/pull/34844
* @wufann made their first contribution in https://github.com/vllm-project/vllm/pull/38615
* @wuyingjun-lucky made their first contribution in https://github.com/vllm-project/vllm/pull/40251
* @YifanLi3 made their first contribution in https://github.com/vllm-project/vllm/pull/40266
* @yintong-lu made their first contribution in https://github.com/vllm-project/vllm/pull/35697
* @YM2132 made their first contribution in https://github.com/vllm-project/vllm/pull/38427
* @yoke233 made their first contribution in https://github.com/vllm-project/vllm/pull/38909
* @yubofredwang made their first contribution in https://github.com/vllm-project/vllm/pull/39160
* @yurun00 made their first contribution in https://github.com/vllm-project/vllm/pull/37766
* @yuwenzho made their first contribution in https://github.com/vllm-project/vllm/pull/39466
* @Yuyi-Ao made their first contribution in https://github.com/vllm-project/vllm/pull/38052
* @z1ying made their first contribution in https://github.com/vllm-project/vllm/pull/39518
* @zhangj1an made their first contribution in https://github.com/vllm-project/vllm/pull/40629
* @Zhenzhong1 made their first contribution in https://github.com/vllm-project/vllm/pull/38192
* @zxd1997066 made their first contribution in https://github.com/vllm-project/vllm/pull/38899

---

> **Source** [vllm-project/vllm](https://github.com/vllm-project/vllm) · `v0.20.0` · 2026-04-27 · [upstream release](https://github.com/vllm-project/vllm/releases/tag/v0.20.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
