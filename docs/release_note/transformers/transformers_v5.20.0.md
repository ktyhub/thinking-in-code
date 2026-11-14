---
title: "transformers v5.20.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.20.0"
version: "v5.20.0"
published: "2026-10-15"
type: "minor"
lang: "en"
summary: "Muse Spark Open is a multimodal mixture-of-experts model from Meta that takes text, images, audio, and video as input and generates text."
---

# transformers v5.20.0

# Release v5.20.0


## New Model additions

### Muse Spark Open

<img width="2400" height="1296" alt="image" src="https://github.com/user-attachments/assets/bf34ea27-0edf-4ded-ba6f-905b04096126" />

Muse Spark Open is a multimodal mixture-of-experts model from Meta that takes text, images, audio, and video as input and generates text. It has 816B total parameters (42B active per token) and a context window of up to 1,048,576 tokens shared across modalities. It is trained for agentic coding tasks such as multi-file editing, debugging, and tool use. Checkpoints are available in BF16 and NVFP4 formats.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/muse_spark) | [Blog Post](http://hf.co/blog/meta-muse-spark-open)
* Add Muse Spark Open (#49644) by @guarin in [#49644](https://github.com/huggingface/transformers/pull/49644)


### Ling 3.0

Ling 3.0 Flash is a hybrid Mixture-of-Experts language model from InclusionAI. Its decoder groups five Kimi Delta Attention (KDA) layers with one Multi-head Latent Attention (MLA) layer. The MLA blocks use interleaved rotary embeddings and a head-wise output gate, and the feed-forward blocks combine routed and shared experts. It is natively supported in Transformers as `BailingHybridForCausalLM`, so it loads without `trust_remote_code=True`.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/bailing_hybrid)
* [Model] Add native Ling 3.0 Flash support (#49446) by @icavan in [#49446](https://github.com/huggingface/transformers/pull/49446)


### Kolibri1

Kolibri 1 is Aleph Alpha's mixture-of-experts reasoning model, focused on German and English. Each of its 50 layers routes every token to 6 of 384 experts using sigmoid routing, and adds one shared expert. Four sliding-window attention layers alternate with one full-attention layer, and RoPE is applied only in the sliding-window layers.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/kolibri1)
* Add Kolibri 1 (#49463) by @lucamotz in [#49463](https://github.com/huggingface/transformers/pull/49463)


### MiniCPM-V 4.7

[MiniCPM-V](https://huggingface.co/papers/2509.18154) is a series of efficient multimodal large language models developed by [OpenBMB](https://github.com/OpenBMB). Like MiniCPM-V 4.6, the MiniCPM-V 4.7 architecture pairs a SigLIP vision encoder that has a window-attention merger with a Qwen3.5 language model backbone, and supports both 4x and 16x visual downsampling modes.

The main addition over 4.6 is *canvas M-RoPE*: instead of numbering visual tokens along a single 1-D sequence, the model lays every image out on a 2-D canvas and assigns each visual token a `(temporal, height, width)` position, so slices of the same image keep their spatial relationship and video frames keep their temporal order.

* Fix more stuff (#48979) by @zucchini-nlp in [#48979](https://github.com/huggingface/transformers/pull/48979#top)


### UnlimitedOcr

UnlimitedOcr is a single 3B-parameter OCR model from Baidu with a standard 32,768-token context length. It builds on DeepSeek OCR and replaces all decoder attention layers with Reference Sliding Window Attention (R-SWA). This keeps the KV cache constant during decoding, so the model can transcribe dozens of pages in a single forward pass. It supports "gundam" mode (640x640 tiles with dynamic cropping) and "base" mode (a single 1024x1024 view), and it can output region detections with bounding boxes.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/unlimited_ocr) | [Paper](https://huggingface.co/papers/2606.23050 (the docs link only the Hugging Face papers page, "Unlock OCR Works" is not given an arXiv link, so this is the paper URL provided))
* Add Unlimited OCR (#46836) by @guarin in [#46836](https://github.com/huggingface/transformers/pull/46836)


### UltraBERT

UltraBERT is a family of bidirectional text encoders trained with a combination of masking ratios, pruning, and distillation for classification and retrieval tasks. The released encoders support sequences of up to 32,768 tokens. They use rotary position embeddings, RMSNorm, SwiGLU feed-forward layers, and alternating local and global attention (every third layer is global). Checkpoints include UltraBERT-150M and UltraBERT-380M for masked language modeling and fine-tuning, and UltraBERT-Embed-150M for text embeddings.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/ultrabert) | [Paper](https://huggingface.co/papers/2610.15028)
* Integrate the UltraBERT architecture (#49596) by @tomaarsen in [#49596](https://github.com/huggingface/transformers/pull/49596)


### MOSS-Transcribe-Diarize

MOSS-Transcribe-Diarize 0.9B is an end-to-end audio understanding model for long-form multi-speaker transcription, speaker diarization, and timestamps. It combines a Whisper-style encoder, a 4× frame merge step, a multi-modal projector, and a Qwen3 language model. It produces joint transcription and diarization in a single pass, with segments formatted as `[start][S01]text[end]`. It supports long-form audio through Whisper-window chunking in the processor, promptable transcription with hotword biasing, and 50+ languages.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/moss_transcribe_diarize)
* Add MOSS-Transcribe-Diarize model (#48386) by @itazap in [#48386](https://github.com/huggingface/transformers/pull/48386)



## Breaking changes

🚨 General breaking notice that inference with EP has regressions in speed; we are working on fixing this ASAP! 🚨

Deprecated checks and methods have been removed from `cache_utils.py` (affecting models such as minimax_m3_vl and pi0), so any code still calling those deprecated cache methods must switch to the current cache API.
* 🚨 Remove deprecated cache utils methods (#49605) by @guarin

Accidental imports from other models were removed from several model files (e.g. embedding_gemma2, ijepa, lightglue), and the modular converter now avoids adding such cross-model imports. If you imported these names through those model modules, import them from their original modules instead.
* 🚨 Remove imports from other models (#49473) by @guarin

The minimum `kernels` version is now 0.17.2, which allows `use_fallback=KernelizeFallback.ALL` so that a failed kernel load falls back to the original implementation instead of raising an error. Upgrade `kernels` to 0.17.2 or later.
*  🚨 Bump min kernels to 0.17.2 for better fallback  (#49235) by @SunMarc

A new `SubConfigSpec` centralizes the initialization of sub-configs, so default sub-configs are collected from dataclass fields instead of by instantiating the class, and this touches the configuration utilities and many model configs. Custom or existing nested configs may need to be updated to declare their sub-configs through this mechanism.
* :rotating_light: SubConfigSpec for centralized init of subconfigs  (#48282) by @zucchini-nlp

The LUKE and mLUKE tokenizers now treat entity special tokens such as `<ent>` as special tokens (not split, honored by `skip_special_tokens`, normalized) while keeping the same spacing as regular vocabulary tokens when decoding. Tokenization and decoding output involving these tokens may therefore differ from before, so check any code or saved outputs that depend on the old behavior.
* 🚨🚨🚨 luke fixe (#48408) by @itazap


## Exporters

Transformers exporters now support quantization directly during export across Dynamo, ONNX, OpenVINO, and ExecuTorch. The new unified quantization API integrates PT2E, ONNX Runtime, and NNCF quantizers, enabling static and dynamic quantization as well as weight-only compression (INT8/INT4), with configurable calibration workflows. This makes it easier to export optimized models for efficient inference across different backends.

For more information see the docs: https://huggingface.co/docs/transformers/exporters_quantization


## Parallelization

This release improves distributed training and inference. FSDP × TP model and optimizer checkpoints can now be saved and loaded across different parallel configurations, and expert-parallel dispatch, tensor-parallel plans, static-cache `generate()`, and the caching allocator's byte count were fixed. Tied LM heads in composite models now get their own TP plan entry, `enable_expert_parallel` applies the EP plan alone again, TPU loading uses the `tor


* FSDP x TP Saving / Loading, Optimizer (#49256) by @michaelbenayoun in [#49256]
* FSDP x TP Saving / Loading (#48802) by @michaelbenayoun in [#48802]
* Don't set a device per rank for gloo tensor-parallel tests (#49636) by @IlyasMoutawwakil in [#49636]
* fix(distributed): keep enable_expert_parallel as EP alone (#49633) by @dacorvo in [#49633]
* Fix a port allocation race in FSDP tests (#49455) by @icavan in [#49455]
* Expert-parallel dispatch hands the experts the received rows, not the all-to-all's pending result (#49421) by @IlyasMoutawwakil in [#49421]
* Fix static-cache generate() with host-side inputs and under TP (#49317) by @dacorvo in [#49317]
* Composite lm head tp plan (#49080) by @IlyasMoutawwakil in [#49080]
* Fix: use torch.accelerator device APIs so TP loading works again on TPU (#49502) by @tengomucho in [#49502]
* Count ep and fsdp in caching_allocator_warmup byte calculation (#49384) by @3outeille in [#49384]
* Do not wrap the model in FSDP for expert-parallel token dispatch (#49383) by @3outeille in [#49383]


## Generation

This release fixes static-cache `generate()` bugs with host-side inputs and under tensor parallelism. It also speeds up Whisper generation on TPU by cutting device syncs and recompilation, and fixes Whisper batched timestamp decoding for tensor and NumPy inputs. Pipelines get a cleanup of generation-argument handling that removes spurious warnings.


* Add job to automatically generate Intel CPU Docker image (#49560) by @regisss in [#49560]
* Image decoding moves to torchcodec (#47963) by @zucchini-nlp in [#47963]
* Optimize Whisper generation for TPU and device sync (#49426) by @tengomucho in [#49426]
* Generation cleanup in pipelines (#49269) by @Rocketknight1 in [#49269]
* Fix Whisper batch timestamp decoding for tensors (#49419) by @Kingofbooks in [#49419]


## Vision

Vision processing was updated in several places. Image decoding now uses torchcodec, Molmo2's image and video kwargs follow the library's standard conventions, and Pixtral Flash Attention no longer detects false image boundaries after the axial RoPE refactor, which had caused CUDA illegal memory access errors and incorrect output. Several CI and Docker changes also shipped: GPU images moved to Python 3.11, a numpy/pyarrow conflict


* Fix numpy/pyarrow conflict in the XPU Docker image (#49582) by @jiqing-feng in [#49582]
* CI: Move GPU images to python 3.11 (#49352) by @tarekziade in [#49352]
* Update molmo2 processing images/videos kwargs (#49563) by @guarin in [#49563]
* Fix Pixtral Flash Attention image boundaries after axial RoPE refactor (#49373) by @oliverholworthy in [#49373]


## Kernels

This release improves kernel support across hardware. `flash_attention_2` now falls back to the AITER kernel on ROCm when `flash-attn` isn't installed, and T5-style models get a contiguous SDPA position-bias mask so they use fused kernels again. The Hub rotary kernel is now limited to CUDA inference because its backward pass gave incorrect gradients. The Atlas Inference Gated DeltaNet kernels for Strix Halo and


* Fall back to the AITER kernel for flash_attention_2 on ROCm (#49608) by @Abdennacer-Badaoui in [#49608]
* Make the SDPA position_bias mask contiguous so T5-style models use fused kernels (#49517) by @IvenHsu01 in [#49517]
* Use the Hub rotary kernel for inference only on CUDA (#49439) by @qgallouedec in [#49439]
* [Atlas Inference] Enable torch.compile for the Strix Halo Gated DeltaNet hub kernel (#49453) by @AzeezIsh in [#49453]
* [Atlas Inference] Fix GB10 Gated DeltaNet hub kernel for transformers 5.17+ and enable torch.compile (#49452) by @AzeezIsh in [#49452]


## Cache

This release fixes several cache-related bugs: static-cache `generate()` now handles host-side nested inputs and tensor parallelism correctly, the offloaded cache prefetch no longer races with the offloading copy, and Phi3 LongRoPE cache rebuilds at the context boundary now receive the full prefix. It also counts the query token in MiMo-V2-Flash's sliding window and corrects the quantized cache (hqq/quanto) documentation exam


* Fix offloaded cache prefetch racing with the offloading copy (#49363) by @qgallouedec in [#49363]
* docs: update quantized cache hqq/quanto examples and documentation (#47212) by @DavidJohnQuinlan in [#47212]
* [MiMo-V2-Flash] Count the query token in the sliding window (#49170) by @guapisolo in [#49170]
* Fix Phi3 LongRoPE cache rebuild at the context boundary (#49361) by @LE0-Lin in [#49361]


## Bugfixes and improvements

* [docs] Hardware docs template (#49575) by @stevhliu in [#49575]
* Add MIC contract lock files for PR CI integration (#49631) by @ydshieh in [#49631]
* Use aiter-rope version 3 on ROCm (#49595) by @Abdennacer-Badaoui in [#49595]
* Remove missing methods from docs (#49637) by @guarin in [#49637]
* Translate `torch.mm(..., out_dtype=...)` to ONNX (#49635) by @IlyasMoutawwakil in [#49635]
* [docs] Hardware section (#49541) by @michaelbenayoun in [#49541]
* Raise when a torch fallback would drop packed-sequence boundaries (#49474) by @qgallouedec in [#49474]
* Fa packed sequence decode (#49610) by @SunMarc in [#49610]
* fix nested set_attn_implementation (#49138) by @eustlb in [#49138]
* feat: Add MTP support to Mellum2/2.1 (#49531) by @shadeMe in [#49531]
* extend onnx exporters tests to non-cuda devices (#49627) by @kaixuanliu in [#49627]
* Document video processor backends (#49470) by @DimensionSTP in [#49470]
* Make sinusoidal position embeddings compileable (#49482) by @jiqing-feng in [#49482]
* Save the PEFT adapter of a load-time sharded model from its own parameters (#49500) by @qgallouedec in [#49500]
* fix: Pass the MTP layer type to per-layer-type rotary embeddings (#49468) by @shadeMe in [#49468]
* Add LFM2 to the GGUF loading path (#49400) by @francip in [#49400]
* Add `MtpModel` helpers for frameworks that own the drafting loop (#49544) by @hmellor in [#49544]
* Build docs with the Python version from .python-version (#49603) by @tarekziade in [#49603]
* Use mlp_layer_types for AXK1 so the MoE layer layout honours moe_layer_freq (#49518) by @hmellor in [#49518]
* Combine Nvidia+AMD run-slow CI comments into one (#49598) by @ydshieh in [#49598]
* Fix flaky streamer timeout tests (#49583) by @tarekziade in [#49583]
* Fix TPU related tests issues (#49568) by @tengomucho in [#49568]
* fix(distributed): bind TPU ranks to device index 0, not LOCAL_RANK (#49543) by @tengomucho in [#49543]
* Use transformers init everywhere (#49573) by @guarin in [#49573]
* [docs] Context parallelism during eval (#48663) by @stevhliu in [#48663]
* Remove examples (#49357) by @SunMarc in [#49357]
* Accept whole-number floats for integer tool arguments in parse_response (#49547) by @yonigozlan in [#49547]
* update Intel CPU Dockerfile (#49408) by @jiqing-feng in [#49408]
* Add missing video processor auto docstrings (#49569) by @guarin in [#49569]
* Add chat input sanitization (#47386) by @Rocketknight1 in [#47386]
* Fix `create_chunked_causal_mask()` crashing with `block_sequence_ids` (#49457) by @kaixuanliu in [#49457]
* Fix SinglePositionMultiTokenCandidateGenerator signature (#49413) by @jiqing-feng in [#49413]
* Minicpm 4.7 update integration tests (#49565) by @zucchini-nlp in [#49565]
* Stop treating HunYuan's DynamicNTKAlpha RoPE as dynamic (#49445) by @jiqing-feng in [#49445]
* Fix Gemma3nVision2TextModelTest::test_model_parallelism split (#49562) by @tarekziade in [#49562]
* Fix UnboundLocalError in SuperPoint forward under torch.compile (#49409) by @kaixuanliu in [#49409]
* Preserve resolved remote backend references in AutoVideoProcessor (#49511) by @DimensionSTP in [#49511]
* Fix PR slow CI suggestion: install transformers in a venv (#49558) by @tarekziade in [#49558]
* Fix PR slow CI suggestion: install transformers, fail on script errors (#49549) by @ArthurZucker in [#49549]
* Remove deprecated data helpers (#49360) by @SunMarc in [#49360]
* Fix test_all_params_have_gradient for intentionally frozen parameters (#49264) by @thillai-c in [#49264]
* Flex attn fix for molmo2 test (#49530) by @molbap in [#49530]
* fix bridgetower cross-attn mask shape bug (#49447) by @kaixuanliu in [#49447]
* Use Siglip2Tokenizer when the Hub tokenizer_class is GemmaTokenizer (#49245) by @jayzuccarelli in [#49245]
* Fix mixed BOS prefix validation in WatermarkDetector (#49496) by @dangruiyuan in [#49496]
* Deprecate unused get_uniform_frame_indices (#49464) by @archiep867-sys in [#49464]
* [tests] Some fixes for test suite failures on TPU (#49425) by @tengomucho in [#49425]
* Second phase of torch 2.6 cleanups (#49396) by @Rocketknight1 in [#49396]
* Guard the checks for current_accelerator() and bump Torch version (#49395) by @Rocketknight1 in [#49395]
* Use one static Transformers CI badge in PR descriptions (#49471) by @tarekziade in [#49471]
* fix: treat every declared field of the config class as a default fixes #49456 (#49466) by @tarekziade in [#49466]
* Keep AutoVideoProcessor class lookup lazy (#49458) by @DimensionSTP in [#49458]
* Add Molmo2 (#43451) by @SangbumChoi in [#43451]
* Ci fetches multimodal models recursively (#49389) by @zucchini-nlp in [#49389]
* Recurse for all subconfigs (#49461) by @zucchini-nlp in [#49461]
* Aria, Ernie4.5-VL-MoE, Gemma4, Inkling, MiniMax-M3-VL, Qwen3.5-MoE: run the model tests on the VLM/ALM testers (#49404) by @IlyasMoutawwakil in [#49404]
* Fix CI slack reporting: surface crashed/missing model jobs in model_results.json (#49427) by @ydshieh in [#49427]
* [Qwen3VLMoe] Update expected text in test_small_model_integration_test_expand (#49301) by @ydshieh in [#49301]
* Fix backend attribute in documentation and default backend in MistralCommonBackend (#49149) by @samyuktahegde in [#49149]
* More RoPE simplification, TF32 fixes (#49328) by @Rocketknight1 in [#49328]
* Complete PR #49228: remove unused device=None from rope __init__ in 11 model families (#49285) by @ydshieh in [#49285]
* Revert "[CI] Temporarily disable AMD scheduled CI trigger" (#49433) by @ydshieh in [#49433]
* Fix QuantizedCache residual flushing for multi-token updates (#49418) by @LE0-Lin in [#49418]
* Fix data-dependent branch in _ignore_causal_mask_sdpa under compile (#49354) by @dacorvo in [#49354]
* Fix Inkling moe_intermediate_size when dense_intermediate_size is present (#49416) by @Talhax55z in [#49416]
* fix bug for DebertaV2ForMaskedLM non-legacy load issue (#49152) by @kaixuanliu in [#49152]
* This PR fixes Gemma3n fp16 loading when missing weights need to be in… (#49147) by @sywangyi in [#49147]
* PR CI: grant actions: read to the reusable workflow (#49417) by @tarekziade in [#49417]
* [Bugfix] [Modeling] Fix DSV4 norm (#47486) by @kylesayrs in [#47486]
* [docs] Update Spaces (#49242) by @stevhliu in [#49242]
* handle empty precompiled charsmap in spm converter (#49211) by @itazap in [#49211]
* [CI] Temporarily disable AMD scheduled CI trigger (#49394) by @ydshieh in [#49394]
* [tests] Fix flaky CMVN tests in Speech2TextFeatureExtractionWithoutTorchaudioTest (#49374) by @ydshieh in [#49374]
* Let token dispatch run with `ep_size != tp_size` (#49368) by @qgallouedec in [#49368]
* [tests] Skip onnx.exactness for BitForImageClassification (ORT fp32 drift) (#49366) by @ydshieh in [#49366]

## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @itazap
    * Add MOSS-Transcribe-Diarize model (#48386)
    * handle empty precompiled charsmap in spm converter (#49211)
    * 🚨🚨🚨 luke fixe (#48408)
* @ydshieh
    * Add MIC contract lock files for PR CI integration (#49631)
    * Combine Nvidia+AMD run-slow CI comments into one (#49598)
    * Fix CI slack reporting: surface crashed/missing model jobs in model_results.json (#49427)
    * [Qwen3VLMoe] Update expected text in test_small_model_integration_test_expand (#49301)
    * Complete PR #49228: remove unused device=None from rope __init__ in 11 model families (#49285)
    * Revert "[CI] Temporarily disable AMD scheduled CI trigger" (#49433)
    * [CI] Temporarily disable AMD scheduled CI trigger (#49394)
    * [tests] Fix flaky CMVN tests in Speech2TextFeatureExtractionWithoutTorchaudioTest (#49374)
    * [Docker] Upgrade to torch 2.14/CUDA 13.0 and optimize FA2 build from source (#49381)
    * [tests] Skip onnx.exactness for BitForImageClassification (ORT fp32 drift) (#49366)
* @icavan
    * Fix a port allocation race in FSDP tests (#49455)
    * [Model] Add native Ling 3.0 Flash support (#49446)
* @tarekziade
    * Build docs with the Python version from .python-version (#49603)
    * Fix flaky streamer timeout tests (#49583)
    * CI: Move GPU images to python 3.11 (#49352)
    * Fix Gemma3nVision2TextModelTest::test_model_parallelism split (#49562)
    * Fix PR slow CI suggestion: install transformers in a venv (#49558)
    * Use one static Transformers CI badge in PR descriptions (#49471)
    * fix: treat every declared field of the config class as a default fixes #49456 (#49466)
    * PR CI: grant actions: read to the reusable workflow (#49417)
* @lucamotz
    * Add Kolibri 1 (#49463)
* @SangbumChoi
    * Add Molmo2 (#43451)
* @maxiaolong03
    * [Model] Add PP-DocLayoutV4 Model Support (#48387)

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.20.0` · 2026-10-15 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.20.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
