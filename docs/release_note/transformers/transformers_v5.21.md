---
title: "transformers v5.21"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.21"
version: "v5.21"
published: "2026-10-26"
type: "minor"
lang: "en"
summary: "MiniCPM-OCR is a document-understanding model from OpenBMB's MiniCPM-V family. It keeps the MiniCPM-V 4.6 architecture, which pairs a SigLIP vision encoder and a window-attention merger with a Qwen3.5 language model. It…"
---

# transformers v5.21

# Release v5.21.0


## New Model additions

### MiniCPM-OCR

MiniCPM-OCR is a document-understanding model from OpenBMB's MiniCPM-V family. It keeps the MiniCPM-V 4.6 architecture, which pairs a SigLIP vision encoder and a window-attention merger with a Qwen3.5 language model. It is specialized for reading text-dense images such as scanned pages, screenshots, receipts and tables.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/minicpm_ocr) | [Paper](https://huggingface.co/papers/2509.18154)
* Feat test (#49920) by @guarin in [#49920](https://github.com/huggingface/transformers/pull/49920)

### Flint
<img width="3200" height="1800" alt="flint_benchmarks_nvfp4" src="https://github.com/user-attachments/assets/c45955fb-dfcc-4266-8223-b0d70efb9a5b" />

Flint is Recursive's mixture-of-experts language model. Compared to a standard SwiGLU MoE transformer such as Qwen3-MoE, it uses hybrid attention (sliding-window attention with rotary embeddings over the current token and the previous 512 tokens in most layers, and full attention without positional encoding in the remaining layers). It also has learned attention sinks, as in GPT-OSS, with per-head RMS-normalized queries and keys. Each sparse layer routes a token to 6 of 256 experts by sigmoid score and adds an ungated shared expert, and the first two layers are dense.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/flint)
* Add Flint model support. (#49824) by @lovishmadaan in [#49824](https://github.com/huggingface/transformers/pull/49824)

### UltraVBert

UltraVBert extends ModernVBert by pairing the UltraBERT text encoder with a SigLIP vision encoder for visual document understanding and retrieval. Its image processor splits each page into 512-pixel tiles plus a global view. The connector merges each 4 x 4 block of vision patches into one token, so a tile becomes 64 image tokens, and RMS-normalizes them to the scale of UltraBERT's token embeddings. The `max_image_tiles` setting (27 by default) caps the number of tiles per page.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/ultravbert)
* Add UltraVBERT (#49685) by @athrael-soju in [#49685](https://github.com/huggingface/transformers/pull/49685)

### Gradium Phonon TTS

Gradium Phonon TTS is Gradium's family of on-device text-to-speech models, trained with the Pocket TTS recipe. A causal transformer reads a voice prompt and the text, then emits one continuous 32-dimensional audio latent per step at 12.5 Hz through a one-step flow head, and an end-of-speech head decides when the utterance ends. The latents are decoded to 24 kHz audio by a Pocket TTS audio tokenizer. Unlike Pocket TTS, voice conditioning uses 512-dimensional latents from a separate, unreleased speaker codec, so voices come as precomputed latents and cannot be cloned from a recording.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/gradium_phonon_tts)
* Add GradiumPhononTTS (#49791) by @eustlb in [#49791](https://github.com/huggingface/transformers/pull/49791)

### Pocket TTS

Pocket TTS is Kyutai's 100M-parameter text-to-speech model, built as a Continuous Audio Language Model that runs faster than real time on CPU. A causal transformer emits one continuous audio latent per frame (12.5 Hz) through a one-step flow head, and an end-of-speech head decides when to stop. A Mimi-based audio tokenizer encodes voice prompts and decodes the generated latents to 24 kHz audio. Two flow heads are released, Lagrangian self-distillation (default) and drifting, and voices can be cloned from a recording, passed as precomputed latents, or loaded from cached KV states.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/pocket_tts) | [Paper](https://huggingface.co/papers/2509.06926 (the Continuous Audio Language Models paper, arXiv 2509.06926). It is the only paper the documentation links, and it describes the architecture family Pocket TTS belongs to. The docs do not cite a separate Pocket TTS technical report.) | [Blog Post](NONE. The documentation links no official blog post. It points only to the original code repository at https://github.com/kyutai-labs/pocket-tts.)
* add PocketTTS (#49589) by @eustlb in [#49589](https://github.com/huggingface/transformers/pull/49589)

### Pocket TTS Audio Tokenizer

The Pocket TTS audio tokenizer is the codec used by Pocket TTS. It has Mimi's architecture (SEANet convolutions plus a small causal transformer on each side), but its residual vector quantizer is replaced by a continuous 32-dimensional bottleneck, the VAE-GAN from Continuous Audio Language Models. It converts 24 kHz audio into latents at 12.5 Hz and decodes them back to audio. It serves as the `audio_tokenizer` of `PocketTTSProcessor`, encoding voice prompts and decoding generated latents, and its encoder and decoder can also be loaded on their own.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/pocket_tts_audio_tokenizer) | [Paper](https://huggingface.co/papers/2509.06926 (Continuous Audio Language Models, whose VAE-GAN this tokenizer uses; arxiv: https://arxiv.org/abs/2509.06926))
* add PocketTTSAudioTokenizer (#49588) by @eustlb in [#49588](https://github.com/huggingface/transformers/pull/49588)


## Breaking changes

Fixed Gemma4 processor imports (the Gemma4, Gemma4 unified and EmbeddingGemma2 processors) so `from transformers import *` no longer fails in environments that have `PIL` but not `torch`; no user action is needed.
* :rotating_light: Fix gemma4 cross imports resulting in import failing without `torch` but with `PIL` (#49748) by @Sai-Suraj-27

Added an `"fp8"` backend to `QuantizedCache`, alongside `quanto` and `hqq`, that stores KV states in `torch.float8_e4m3fn` with a single scale per tensor; enable it with `cache_implementation="quantized"` and `cache_config={"backend": "fp8"}`.
* 🚨Add an FP8 backend to `QuantizedCache` (#48677) by @jiqing-feng

Tensor parallelism now has a dedicated embedding style, shards every model's input embeddings by default, and supports widths that aren't divisible by the TP size, so `ColwiseParallel` and `RowwiseParallel` now apply only to linear layers; custom TP plans that applied them to embeddings must switch to the new embedding style.
* 🚨 TP: give embeddings their own style, shard input embeddings by default, and shard widths that don't divide by the TP size (#49570) by @IlyasMoutawwakil

Every MoE TP and EP plan now shards its experts, so models no longer keep all experts on every rank, and a new `test_moe_parallel_plans_shard_experts` test enforces this; custom or downstream MoE parallel plans must add expert sharding to pass it and to avoid wasted memory.
* 🚨 MoE: shard the experts in every TP/EP plan, and test for it (#49206) by @IlyasMoutawwakil



## Cache

This release improves cache handling across the library. Flash Attention now works with static caches, BLOOM no longer crashes with static cache or compiled generate, chunked prefill supports cache continuation, and the Qwen4-Exp indexer's position history stays aligned with its cached keys. Linear-attention caches also gain new getters (`is_recording_past`, `get_recurrent_state`, conv-state access) that stop exposing cache internals and prepare for paged-c


* [FA] Fix FA with static cache (#49998) by @Cyrilvallez in [#49998]
* [docs] CB cache behavior (#49025) by @stevhliu in [#49025]
* [CB] Reduce warmup time by not computing attention over full cache (#49853) by @remi-or in [#49853]
* Fix Qwen4-Exp indexer position cache lifecycle (#49840) by @taking-lying-flat in [#49840]
* [Cache] Linear attn cache: use new getters (#49375) by @remi-or in [#49375]
* [Cache] Get conv states (#49309) by @remi-or in [#49309]
* [Cache] Add get_recurrent_state (#49306) by @remi-or in [#49306]
* [Cache] Add is_recording_past (#49305) by @remi-or in [#49305]
* Fix BLOOM crash with static cache / compiled generate (#49481) by @kaixuanliu in [#49481]
* Allow Cache continuation for chunked prefill (#49662) by @Cyrilvallez in [#49662]


## Vision

Vision image processors now composite PNG transparency onto white instead of exposing black pixels, and `background_color` is preserved correctly across the DeepSeek-VL and Janus processors. Model fixes cover SmolVLM's `inputs_merger` when image tokens aren't a multiple of the patch size, HunYuan-VL image assignment during batched beam search, and Ernie4.5-VL-MoE expert sharding under TP/EP. The DETR


* Composite transparency in shared RGB conversion and image processors (#49079) by @Nikhi00718 in [#49079]
* [Fetcher] Fix missing test deps for dynamically-resolved image processors (#49826) by @ydshieh in [#49826]
* fix(vision): Route the DETR conversion scripts through from_pretrained (#49830) by @harshaljanjani in [#49830]
* Fix background_color handling across DeepSeek-VL and Janus image processors (#49767) by @tritsystem in [#49767]
* Move the MI300 docker image to ROCm 10.1 and update test expectations (#49460) by @Abdennacer-Badaoui in [#49460]
* docs: fix 'allows to' grammar in Vision Encoder Decoder docs (#48730) by @mrchatam in [#48730]
* Fix SSH runner: add /opt/venv/bin to PATH for Python 3.11 images (#49759) by @ydshieh in [#49759]
* Fix SmolVLM inputs_merger when image tokens are not a multiple of patch_size (#49725) by @albertvillanova in [#49725]
* Ernie4.5-VL-MoE: shard the text and vision experts under TP and EP (#49462) by @IlyasMoutawwakil in [#49462]
* Fix HunYuan-VL image assignment during batched generation (#49557) by @Arnav66692 in [#49557]


## Generation

This release fixes a range of generation bugs: BLOOM crashes with static cache or compiled generate, `generate` dropping the type of dict-like inputs such as `ModelOutput`, and incorrect image assignment or placeholder handling in batched or beam-search generation for HunYuan-VL and Idefics2/3. It also fixes Qwen3-Omni audio generation mode handling, SAM mask-generation multi-zoom crops, empty frame s


* fix: prevent empty frame sampling for short videos (#49908) by @BlazeSR10hawk in [#49908]
* Fix Windows path separators breaking relative imports of Hub custom-generate modules (#48951) by @dltsum in [#48951]
* Fix multi-zoom crops in the SAM mask-generation pipeline and related bugs (Fixes #35530) (#49689) by @stlukyanenko in [#49689]
* update speculative decoding docs (#49697) by @merveenoyan in [#49697]
* fix idefics3 generation issues (#49738) by @molbap in [#49738]
* fix tests for generation (#49740) by @molbap in [#49740]
* Fix inputs dict casting in `generate` (#49731) by @Cyrilvallez in [#49731]
* [fix][Qwen3-Omni] Respect generation_mode in audio generation (#49505) by @Sunt-ing in [#49505]


## Parallelization

This release extends parallelism support and fixes several related bugs. It adds a tensor-parallel plan for Nemotron and makes Ernie4.5-VL-MoE shard its text and vision experts under TP and EP. It also restores expert-parallel token-dispatch gradients on torch 2.7–2.10, fixes a Molmo2 model-parallel device mismatch, and corrects `base_model_prefix` in several model families (PP-OCR detectors


* Add tensor parallel plan for Nemotron (#48780) by @Siddhant231xyz in [#48780]
* fix model parallel bug for molmo2 model (#49816) by @kaixuanliu in [#49816]
* Fix `base_model_prefix` in the PP-OCR detectors, CLIPSeg, TimesFM, CLIP and VideoPrism heads so base checkpoints load (#48871) by @blipbyte in [#48871]
* Fix expert-parallel token dispatch gradients on torch 2.7 to 2.10 (#49710) by @digit50 in [#49710]
* Skip Muse TP (#49717) by @remi-or in [#49717]


## Quantization

Quantization now handles DeepSeek-V4.1's FP4 experts correctly: `FineGrainedFP8Config` gains an `expert_dtype` option ("fp8" by default, or "fp4") that the FP8 experts read instead of allocating them as FP8. TimesFM 2.5 no longer casts float inputs to an integer weight dtype when loaded with quantization such as bitsandbytes 4/8-bit. A broader cleanup


* Fine-grained FP8: DeepSeek-V4's expert_dtype in the quantization config (#49848) by @IlyasMoutawwakil in [#49848]
* Fix dtype cast in TimesFM 2.5 ResidualBlock for quantized weights (#46942) by @JOhnsonKC201 in [#46942]
* Quantization cleanpup (#49548) by @ArthurZucker in [#49548]


## Bugfixes and improvements

* [Fix] Fix CSM codebook embedding tying (#49197) by @orrangetabby17 in [#49197]
* [tests_fetcher] fix missing .as_posix() in preprocessor_patterns path keys (#49994) by @ydshieh in [#49994]
* fix(ci): skip bot suggestion if a maintainer already posted run-slow: (#49992) by @ydshieh in [#49992]
* [loading] Allow Renaming and Converter to work on the sume subkeys (#49928) by @Cyrilvallez in [#49928]
* [Fix] Fix NUMA and cpuset detection in CB (#49980) by @remi-or in [#49980]
* [Refactor] Make CB utils depend on no CB import (#49968) by @remi-or in [#49968]
* chore: improve typing in modeling_rope_utils.py (#49831) by @RyanMullins in [#49831]
* is_fouroversix_available() returned an (available, version) tuple. Ev… (#49894) by @sywangyi in [#49894]
* Match a skip-list entry from the start only up to a module boundary (#49771) by @IlyasMoutawwakil in [#49771]
* [pocket_tts, gradium_phonon_tts] use sub_configs_defaults (#49868) by @eustlb in [#49868]
* Fixes a dtype mismatch in flash_attn test (#49912) by @kaixuanliu in [#49912]
* [Fix] Remove duplicate assignment in DeepseekV3.2 config (#49896) by @remi-or in [#49896]
* add XPU Expectations for 4 new model tests (#49815) by @kaixuanliu in [#49815]
* Make sub-config-defaults easier (#49906) by @zucchini-nlp in [#49906]
* Fix out-of-bounds index bug in musicgen_melody model (#49842) by @kaixuanliu in [#49842]
* test: add parity check to the CPU-only continuous batching test (#49728) by @nrenvo in [#49728]
* [CB] Reduce the max_memory_percent in case of a CPU model (#49844) by @remi-or in [#49844]
* Improve clarity and grammar in Auto Classes documentation (#44550) by @himani27301 in [#44550]
* [gradium_phonon_tts] point to the released Hub repos (#49867) by @eustlb in [#49867]
* [EmbeddingGemma2] update integration tests (#49576) by @eustlb in [#49576]
* Fix a comment (#44872) by @IvanFan-Van in [#44872]
* Fix hardcoded torch.float64 crashing on MPS (#46723) (#46730) by @Abhijeet1815 in [#46730]
* fixup metadata workflow (#49854) by @vasqu in [#49854]
* docs(whisper): cast input features to model dtype in AutoModel example (#49837) by @Kayvan-Zahiri in [#49837]
* Fix torch_float casting to int instead of float (#47468) by @rahulrshetty45 in [#47468]
* Upgrade Python Min version to `3.11` (#49251) by @Sai-Suraj-27 in [#49251]
* skip `sdpa_can_dispatch_on_flash` tests for 3 models (#49809) by @kaixuanliu in [#49809]
* [LED][Longformer] Replace for-loop with unfold in _chunk ONNX-export path (#46169) by @guinik in [#46169]
* logits_to_keep bool mask for all ForXXX classes (#48825) by @jp1924 in [#48825]
* Fix several object detection models/loader fix for module tying (#49827) by @molbap in [#49827]
* Fix encoder logits processors when precomputed encoder_outputs lack token IDs (#49696) by @kunalsanga in [#49696]
* Defer some imports (#49663) by @jayzuccarelli in [#49663]
* refactor CTC loss (#49833) by @ebezzam in [#49833]
* Add Intel XPU CI (#49254) by @regisss in [#49254]
* fix(mask2former): register input_projections as nn.ModuleList (fixes #49698) (#49703) by @Omarinho12345 in [#49703]
* Only tie MM Grounding DINO decoder heads when the config shares them (#49552) by @<NOT FOUND> in [#49552]
* [Docs] Add Marathi (मराठी) translation of README (#48746) by @shreeyadav06 in [#48746]
* Fix CLVP `c_proj` residual scaled-init silently never applied (#47478) by @ShamSaleem in [#47478]
* fix failed test cases for unlimited_ocr model (#49806) by @kaixuanliu in [#49806]
* Fix transformers env when requests is not installed (#48412) by @panshularora in [#48412]
* Apply EXIF orientation in load_image_as_tensor with torchvision (#49794) by @digit50 in [#49794]
* Fix Fuyu processor test (#49821) by @zucchini-nlp in [#49821]
* use torchcodec-xpu and upgrade torch to 2.14.1 (#49814) by @sywangyi in [#49814]
* update some case to add xpu expectation (#49807) by @sywangyi in [#49807]
* [serge] Fix 2 integration tests regressed by commit c48824e84024 (PR #49404) (#49705) by @sergereview[bot] in [#49705]
* docs: fix OOM/hang for Qwen dynamic resolution models by setting min_pixels and max_pixels (#46007) by @poojansatani in [#46007]
* docs: fix 'allows to' grammar in DPT docs (#48728) by @mrchatam in [#48728]
* docs: fix 'allows to' grammar in LiLT docs (#48731) by @mrchatam in [#48731]
* docs: fix prompt formatting and code alignment in Gemma model doc (#48775) by @Rattan344 in [#48775]
* docs: fix grammar typo in ALBERT model card (#48774) by @Rattan344 in [#48774]
* Deprecate old input names (#49424) by @zucchini-nlp in [#49424]
* Fix NameError in CI comment workflows: missing section marker variables (#49801) by @ydshieh in [#49801]
* [CI] Improve run-slow PR comments and remove CI recap (#49782) by @ydshieh in [#49782]
* Show the actual accelerate version for `transformers env` (#49668) by @Sai-Suraj-27 in [#49668]
* [CI] fix perceriver old regression (#49792) by @molbap in [#49792]
* mimi moshi output capturing (#49670) by @eustlb in [#49670]
* Remove the resolved prototype Whisper MIC expected failure (#49785) by @tarekziade in [#49785]
* Fix CohereCompass text RoPE to use Qwen3-VL interleaved M-RoPE (#49715) by @mmangkad in [#49715]
* Alias thinking -> reasoning_content (#49535) by @Rocketknight1 in [#49535]
* [vLLM] Add Qwen-Omni Thinker base models and Gemma 3n per-layer inputs (#49437) by @harshaljanjani in [#49437]
* Update MIC fleet references and documentation (#49768) by @tarekziade in [#49768]
* [CI] no split modules for SAM (#49766) by @molbap in [#49766]
* Enable tests forgotten in idefics3 (#49758) by @molbap in [#49758]
* Fix tests_fetcher backbone step (never worked since introduction) (#49742) by @ydshieh in [#49742]
* [modular] Extend the "del self.xxx" pattern to match typed assignments (#49735) by @remi-or in [#49735]
* Xpu add (#49757) by @sywangyi in [#49757]
* Deprecate rope_scaling assignment and normalize legacy RoPE keys (#49515) by @jinwukong in [#49515]
* Make longrope compileable (#49555) by @jiqing-feng in [#49555]
* Fix stack_frames > 1 wiring bug in MiniCPMV4_6VideoProcessor (#49752) by @airlsyn in [#49752]
* fix moshi failing tests (#49750) by @eustlb in [#49750]
* [docs] Gaudi (#49618) by @stevhliu in [#49618]
* [serge] Fix 2 integration tests for model `convnextv2` failing with `output_mismatch` (tensor values differ (2)) (#48838) by @sergereview[bot] in [#48838]
* [serge] Fix 2 integration tests for model `eomt_dinov3` failing with `output_mismatch` (tensor values differ (2)) (#48882) by @sergereview[bot] in [#48882]
* [serge] Fix 4 integration tests for model `lw_detr` failing with `output_mismatch` (tensor values differ (4)) (#49040) by @sergereview[bot] in [#49040]
* [serge] Fix 2 integration tests for model `nemotron` failing with `output_mismatch` (list output differs (2)) (#48945) by @sergereview[bot] in [#48945]
* multi device fix for molmo2 (#49736) by @molbap in [#49736]
* Fix the rest of VLMs (#49720) by @zucchini-nlp in [#49720]
* Fix ValueError when loading a fusion-enabled checkpoint twice (#49412) by @kaixuanliu in [#49412]
* Avoid a host-to-device copy in `eager_mask` (#49684) by @hmellor in [#49684]
* `is_tracing()` now recognizes XPU stream capture, alongside the exist… (#49722) by @sywangyi in [#49722]
* Document how to avoid the Metaspace prefix after added tokens (#45822) by @qflen in [#45822]
* Declare the input modalities of the VLMs that report text only (#49677) by @qgallouedec in [#49677]
* Fix zero expert gradients in bfloat16 with expert parallelism and ep_size < fsdp_size (#49688) by @qgallouedec in [#49688]
* Fix test selection for virtual module imports (#49690) by @tarekziade in [#49690]
* [docs] add Google TPU hardware guide (#49642) by @tengomucho in [#49642]
* Copy default response parser args (#49370) by @Rocketknight1 in [#49370]
* Make `DtensorShardOperation` work on torch 2.6 and 2.7 (#49657) by @hazelxue in [#49657]
* Fix from_pretrained on torch 2.7: require torch>=2.8 for distributed checkpointing (#49652) by @naveecode in [#49652]
* Fix DeepGEMM Mega MoE under expert parallelism (#49428) by @IlyasMoutawwakil in [#49428]
* Fix flaky Evolla tests producing NaN outputs (#49660) by @tarekziade in [#49660]
* [rocm] Add ROCm expectations to Kolibri-1 logits test (#49661) by @ericschreiber in [#49661]
* [CB] Various small fixes for MPS (#49654) by @remi-or in [#49654]
* Aligns test expectations with the accelerator path under test: (#49653) by @sywangyi in [#49653]
* [docs] Processor config (#49643) by @stevhliu in [#49643]
* post release stuff (#49646) by @vasqu in [#49646]


## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @ydshieh
    * [tests_fetcher] fix missing .as_posix() in preprocessor_patterns path keys (#49994)
    * fix(ci): skip bot suggestion if a maintainer already posted run-slow: (#49992)
    * [Fetcher] Fix missing test deps for dynamically-resolved image processors (#49826)
    * Fix NameError in CI comment workflows: missing section marker variables (#49801)
    * [CI] Improve run-slow PR comments and remove CI recap (#49782)
    * Fix tests_fetcher backbone step (never worked since introduction) (#49742)
    * Fix SSH runner: add /opt/venv/bin to PATH for Python 3.11 images (#49759)
* @remi-or
    * [Fix] Fix NUMA and cpuset detection in CB (#49980)
    * [Refactor] Make CB utils depend on no CB import (#49968)
    * [Fix] Remove duplicate assignment in DeepseekV3.2 config (#49896)
    * [CB] Reduce warmup time by not computing attention over full cache (#49853)
    * [CB] Reduce the max_memory_percent in case of a CPU model (#49844)
    * [modular] Extend the "del self.xxx" pattern to match typed assignments (#49735)
    * [Cache] Linear attn cache: use new getters (#49375)
    * [Cache] Get conv states (#49309)
    * [Cache] Add get_recurrent_state (#49306)
    * [Cache] Add is_recording_past (#49305)
    * [Kernels] Add MPS to supported device types (#49655)
    * Skip Muse TP (#49717)
    * [CB] Various small fixes for MPS (#49654)
* @Nikhi00718
    * Composite transparency in shared RGB conversion and image processors (#49079)
* @eustlb
    * [pocket_tts, gradium_phonon_tts] use sub_configs_defaults (#49868)
    * [gradium_phonon_tts] point to the released Hub repos (#49867)
    * [EmbeddingGemma2] update integration tests (#49576)
    * Add GradiumPhononTTS (#49791)
    * add PocketTTS (#49589)
    * add PocketTTSAudioTokenizer (#49588)
    * 🟡 [mimi] separate encoder and decoder (#49577)
    * mimi moshi output capturing (#49670)
    * fix moshi failing tests (#49750)
* @jp1924
    * logits_to_keep bool mask for all ForXXX classes (#48825)
* @molbap
    * Fix several object detection models/loader fix for module tying (#49827)
    * [CI] fix perceriver old regression (#49792)
    * [CI] no split modules for SAM (#49766)
    * Enable tests forgotten in idefics3 (#49758)
    * fix idefics3 generation issues (#49738)
    * fix tests for generation (#49740)
    * multi device fix for molmo2 (#49736)
* @athrael-soju
    * Add UltraVBERT (#49685)
* @harshaljanjani
    * fix(vision): Route the DETR conversion scripts through from_pretrained (#49830)
    * fix(audio): Route the ALM conversion scripts through from_pretrained (#48525)
    * [vLLM] Add Qwen-Omni Thinker base models and Gemma 3n per-layer inputs (#49437)
* @lovishmadaan
    * Add Flint model support. (#49824)
* @tarekziade
    * Remove the resolved prototype Whisper MIC expected failure (#49785)
    * Update MIC fleet references and documentation (#49768)
    * Cleaned up tokenizer tests (#49669)
    * Fix test selection for virtual module imports (#49690)
    * Fix flaky Evolla tests producing NaN outputs (#49660)
* @yonigozlan
    * Fix small bug in auto mappings (#49664)
* @ArthurZucker
    * Quantization cleanpup (#49548)

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.21` · 2026-10-26 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.21)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
