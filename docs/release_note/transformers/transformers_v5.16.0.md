---
title: "transformers v5.16.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.16.0"
version: "v5.16.0"
published: "2026-08-26"
type: "minor"
lang: "en"
summary: "Qwen4-Exp builds on Qwen3.5's hybrid text and multimodal architecture with three key components: GatedResidual (GR), Qwen Sparse Attention (QSA), and Per-Layer Embedding (PLE)."
---

# transformers v5.16.0

# Release v5.16.0


## New Model additions

### Qwen4-Exp

<img width="2241" height="693" alt="image" src="https://github.com/user-attachments/assets/c838b5ba-ffea-42da-baa9-3f66178e3671" />

Qwen4-Exp builds on Qwen3.5's hybrid text and multimodal architecture with three key components: GatedResidual (GR), Qwen Sparse Attention (QSA), and Per-Layer Embedding (PLE).

GR is a Qwen-developed residual architecture that combines Hyper-Connection with GatedNorm. It mixes multiple residual streams with fine-grained elementwise gating before each attention and Mixture-of-Experts (MoE) block, then controls how much of the block output is injected back into each stream.

QSA uses multiple query heads to score compressed key blocks, selects the most relevant contiguous token blocks, and keeps the incomplete trailing block uncompressed. This block-level selection reduces indexing overhead and improves memory locality for long sequences. Combined with Gated DeltaNet, QSA makes Qwen4-Exp the first hybrid architecture to integrate linear and sparse attention, substantially improving inference efficiency for long-context workloads.

PLE enriches selected decoder layers with layer-specific lexical features derived from hashed token n-grams and a dilated depthwise convolution.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/qwen4_exp)
* Add Qwen4Exp model (#48337) by @Cyrilvallez in [#48337](https://github.com/huggingface/transformers/pull/48337)

### GraniteSpeech5

<img width="1600" height="1440" alt="image" src="https://github.com/user-attachments/assets/106ef712-9f45-43c9-98b7-ce6e4a7c136d" />

Granite Speech 5.0 Turbo CTC is a lightweight (~470M parameters) conformer encoder for automatic speech recognition, trained with Connectionist Temporal Classification (CTC) on BPE targets. It is a fast, encoder-only member of the [Granite Speech](https://huggingface.co/papers/2505.08699) family: transcription requires a single forward pass followed by greedy CTC decoding, with no autoregressive decoder.

Architecturally, it extends the Granite Speech conformer CTC encoder with:

1. **Frame stacking + block-wise time subsampling**: the feature extractor stacks pairs of log-mel(+delta) frames (2x), and the first two conformer blocks each subsample time by 2 through a stride-2 depthwise convolution (with a mean-pooled residual), for a total 8x time reduction at 10 ms mel hop.

2. **Block attention with Shaw's relative positional embeddings**: attention is computed over fixed-size blocks (the sequence is right-padded to a whole number of blocks, with padded frames masked out), using separate bias-free query/key/value projections.

3. **Self-conditioned CTC**: the CTC posteriors of the middle layer are projected and fed back into the hidden states, and the CTC head is shared between this mid-layer self-conditioning and the final prediction.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/granite_speech5)
* Add Granite Speech 5.0 - (#48288) by @eustlb in [#48288](https://github.com/huggingface/transformers/pull/48288)

### Step3p7

Step-3.7-Flash was proposed in [Step 3.7 Flash](https://static.stepfun.com/blog/step-3.7-flash/) by StepFun. It is a 198B-parameter sparse Mixture-of-Experts vision-language model, pairing a 196B-parameter MoE language backbone with a 1.8B-parameter vision encoder for native image understanding.

StepFun hasn't published a technical report for Step-3.7-Flash, so the details below are drawn from the released checkpoint's configuration rather than a paper.

- **Sparse MoE decoder**: all but the first 3 decoder layers route through a MoE block of 288 routed experts (top-8 per token) plus a single shared expert. The router scores experts with a sigmoid and a learned per-expert bias instead of an auxiliary load-balancing loss, the same strategy as [DeepSeek-V3](./deepseek_v3).
- **Gated attention**: each attention layer adds an extra projection whose sigmoid output gates the attention output per head, before the output projection — the same *Gated Attention* mechanism used in [Qwen3-Next](./qwen3_next). A subset of layers use fewer heads and a sliding window instead of full attention.
- **Multi-token prediction**: some checkpoints ship extra decoder layers trained for multi-token prediction, which [`~GenerationMixin.generate`] can use for speculative decoding via `use_mtp=True`.
- **Vision encoder**: a SigLIP-style ViT with 2-D rotary position embeddings and a learned per-layer scale on the attention and MLP branches. Its output is downsampled 4x by two stride-2 convolutions before a linear projector maps it into the text model's hidden size.
- **Dynamic image tiling**: instead of a fixed tile grid, the image processor picks its tiling window from each image's own aspect ratio, producing one downscaled global view plus zero or more local high-resolution crops per image.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/step3p7)
* [new model] step 3.7 (#46658) by @itazap in [#46658](https://github.com/huggingface/transformers/pull/46658)

### CohereCompass

CohereCompass is the base architecture for small, specialized (vision-)language models trained by Cohere.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/cohere_compass)
* Add CohereCompass modeling (#47878) by @calpt in [#47878](https://github.com/huggingface/transformers/pull/47878)



### ESMC and ESMFold2

ESMC and ESMFold2 are new state-of-the-art protein language and folding models from BioHub. ESMC is trained with a masked language modeling objective, and it can be easily transferred to sequence and token classification tasks for proteins. Checkpoints exist in various sizes, from 300M parameters up to 6B parameters. It works as a drop-in replacement for older ESM-2 and ESM-3 models, with significantly higher accuracy.

ESMFold2 is a state-of-the-art protein folding model which produces high accuracy predictions. It uses an iterated diffusion approach that is significantly different from the original ESMFold, offering huge improvements in accuracy for more complex structures.


**Links:** [Documentation ESMC](https://huggingface.co/docs/transformers/main/en/model_doc/esmc), [Documentation ESMFold2](https://huggingface.co/docs/transformers/main/en/model_doc/esmfold2)
* Port ESMC and ESMFold2 to Transformers (#46419) by @Rocketknight1 in [#46419](https://github.com/huggingface/transformers/pull/46419)


## Breaking changes

The legacy tensor-parallel implementation has been replaced with a DTensor-native backend, so users relying on the previous TP API for inference or training must migrate to the new DTensor-based interface.
* 🚨 TP dtensor API inference + training (#47579) by @3outeille

`attn_implementation="sdpa"` dispatch is now properly supported for wav2vec2_conformer, wav2vec2-bert, and SeamlessM4T/v2 models, which may change initialization behavior for users who previously worked around this limitation.
* 🚨[wav2vec2] Support attn_implementation=sdpa dispatch (#46196) by @YangKai0616

`FuyuProcessor` no longer returns the `image_patch_indices` output, so any code that depends on this field must be updated to remove references to it.
* :rotating_light: Leftover processors (#47924) by @zucchini-nlp



## Cache

Several cache-related bugs were fixed in this release, including an off-by-one error in the sliding window cache, Whisper speculative decoding cache corruption, CpmAnt use-cache failures, Qwen2.5-Omni/Qwen3-Omni-MoE generation with compilable caches, and compressed-tensors loading for KV-cache-only quantized models. Documentation was also added for cache token removal using negative values, and per-layer cache configuration support (allowing models to use different cache settings per layer) was introduced.


* Cpmant fix use cache (#48013) by @jiqing-feng in [#48013]
* [docs] Cache crop (#47950) by @stevhliu in [#47950]
* Revert "Support per-layer cache configuration and attention-mask selection" (#48175) by @Cyrilvallez in [#48175]
* Support per-layer cache configuration and attention-mask selection (#47901) by @eladsegal in [#47901]
* Fix Qwen2.5-Omni / Qwen3-Omni-MoE generation with a compilable cache (#47872) by @jiqing-feng in [#47872]
* Fix sliding window cache index off-by-one on wraparound (#47708) by @hameedibrh in [#47708]
* [Whisper] Fix speculative decoding: UnboundLocalError, cache corruption, and speed regression (#48000) by @ydshieh in [#48000]
* Fix compressed-tensors loading for KV-cache-only quantized models (#47904) by @kylesayrs in [#47904]


## Generation

This release fixes several generation bugs across multiple models, including Whisper speculative decoding issues (UnboundLocalError, cache corruption, speed regression, and left-padded batch position IDs), broken image generation in Emu3, garbage output in OLMo/GPTNeoX, and Qwen2.5-Omni/Qwen3-Omni-MoE generation with compilable caches. Additionally, logit distributions for candidate generators using sampling are now aligned by returning logits after applying logit processors.


* [Whisper] Fix speculative decoding: preserve cleared suppress tokens through super().generate() (#48108) by @ydshieh in [#48108]
* [Whisper] Fix decoder position IDs for left-padded batches in longform generation (#48028) by @ydshieh in [#48028]
* [serge] Fix 2 integration tests for model `generation` failing with `import_or_config` (other (2)) (#48061) by @sergereview[bot] in [#48061]
* Align logit distributions for CandidateGenerators using sampling (#48007) by @Cyrilvallez in [#48007]
* [GPTNeoX] Fix post_processor not overridden when loading from pretrained (OLMo garbage generation) (#47988) by @ydshieh in [#47988]
* [emu3] 🦮 Black Labrador is back! Fix image generation broken since #37033 (#47948) by @ydshieh in [#47948]


## Attention

Several attention-related bug fixes were made in this release, including correcting a SigLIP2 documentation typo, fixing Flash/SDPA attention dispatch tests for xcodec2 and ROCm RDNA GPUs, resolving a GPT2 cross-attention mask being silently discarded, and enabling SDPA support declaration in `TimmWrapper`. Per-layer cache configuration and attention-mask selection support was also introduced, allowing models with heterogeneous layer configurations to use distinct `sliding_window`, `attention_chunk_size`, and `number_of_conv_states` values per layer.


*  doc: Fix typo in SigLIP2 Flash Attention code example (#48197) by @VimalN2005 in [#48197]
* [xcodec2] Fix flex attention and flash dispatch tests (#48244) by @jiqing-feng in [#48244]
* Fix ROCm SDPA-flash skip guard that crashes on RDNA GPUs (#47965) by @Abdennacer-Badaoui in [#47965]
* [GPT2] Fix encoder_attention_mask being silently discarded in cross-attention (#47946) by @DavidJohnQuinlan in [#47946]
* Declare sdpa support in `TimmWrapper` (#47939) by @jiqing-feng in [#47939]


## Quantization

Quantization improvements include adding NVFP4 quantization support via HF kernels (enabling on-the-fly BF16 weight quantization with ~50% memory reduction), and fixing several bugs: reverting a regression in `is_quantization_compressed` that caused incorrect module layouts for packed-format checkpoints, fixing CLIP weight initialization failures with quantized checkpoints, and restoring KV-cache quantization setup for KV-cache-only quantized models.


* Revert "[Quantization]: Refactor is_quantization_compressed for format-based detection" (#48072) by @subin9 in [#48072]
* feat: add nvfp4 quantization (#47883) by @drbh in [#47883]
* [DeepSeekV2] Fix integration tests OOM: use device_map=auto instead of 8-bit quantization (#47991) by @ydshieh in [#47991]
* Fix CLIP _init_weights when a child module carries quantized weights (#47921) by @Bluear7878 in [#47921]


## Parallelization

Introduced a naive pipeline parallel inference engine supporting tied/untied weight embeddings with seamless `generate()` integration, while restoring backward compatibility for the tensor-parallel API with a deprecation cycle for `tp_plan` in `from_pretrained()`. Additionally fixed a model parallel bug in the BLT model affecting beam search.


* Restore BC for the tensor-parallel API (#48300) by @ArthurZucker in [#48300]
* fix bug for blt model parallel bug (#48327) by @kaixuanliu in [#48327]
* Pipeline parallel naive inference (#47289) by @3outeille in [#47289]


## Kernels

Kernel support was improved with documentation updates highlighting supported models, a fix for export crashes on kernel-decorated functions by adding a `is_torchdynamo_exporting` guard, and the default Flash Attention 2 hub kernel version was bumped to v3 to resolve compatibility issues with newer PyTorch versions.


* [docs] Kernel supported models (#48258) by @stevhliu in [#48258]
* [Fix] Export crashes on kernel-decorated function (#47808) by @remi-or in [#47808]
* Bump default flash-attn2 hub kernel version to v3 (#47863) by @jiqing-feng in [#47863]


## Bugfixes and improvements

* Fix video-llama modular conversion (#48336) by @zucchini-nlp in [#48336]
* CI: gate the hunyuan-moe slow test  (#48330) by @tarekziade in [#48330]
*  Add a regression test for force_accelerate_hooks signature preservation  (#48260) by @wtdcode in [#48260]
* Add an opt-in per-frame pixel cap (cap_pixels_per_frame) to the Qwen3-VL video processor (#48071) by @dkrisman in [#48071]
* Fix `scores` type in stopping criteria docstrings (#47676) by @qgallouedec in [#47676]
* Docstring check didn't match some file - fix it (#48121) by @zucchini-nlp in [#48121]
* Add shared ImageProcessingTester (#47745) by @guarin in [#47745]
* Fix AutoTokenizer returning TokenizersBackend for DeepSeek-R1-Distill-Qwen models (#48211) by @ydshieh in [#48211]
* [docs] Fix failing doctests (#47687) by @stevhliu in [#47687]
* Fix build_2d_sinusoidal_position_embedding on MPS (#47897) by @guarin in [#47897]
* [Gemma4] Investigate flaky test_generation_beyond_sliding_window_1_eager (#48236) by @ydshieh in [#48236]
* Let gradient checkpointing skip layers with every_n_layers (#48200) by @qgallouedec in [#48200]
* Disable daily nightly CI (#48292) by @remi-or in [#48292]
* gs (#48288) by @eustlb in [#48288]
* CI: fix muse OOMs (#48284) by @tarekziade in [#48284]
* Fix `BayesianDetectorModel.from_pretrained()` by calling `post_init()` (#48254) by @woojinpaik in [#48254]
* [Fix] Avoid duplicating tests in CI (#48287) by @remi-or in [#48287]
* [`GDN`] Fix recurrent FLA fallback (#48266) by @vasqu in [#48266]
* Fix `tie_word_embeddings` not lifted from `text_config` for some VLM configs (BC regression) (#45857) by @qgallouedec in [#45857]
* replace xpu-smi subprocess call in benchmark_v2 (#48083) by @kaixuanliu in [#48083]
* ignore mlinter ci file (#48267) by @tarekziade in [#48267]
* Fix dtype mismatch in grouped_mm_fallback for LoRA training on Mamba+… (#47933) by @adh-aakriti in [#47933]
* Compute MoE load-balancing loss per layer to avoid giant one-hot materialization −99.7% @ 128k (#48131) by @qgallouedec in [#48131]
* deterministic layer_types buffer registration in multiple models (#48162) by @mowoe in [#48162]
* Fix nemotron_h save_pretrained emitting singular backbone.embedding.weight (#48075) by @yuekaizhang in [#48075]
* `force_accelerate_hooks` should not hide the signature it wraps (#48156) by @SunMarc in [#48156]
* fix(data_collator): align TokenClassification numpy_call with torch_call (#48212) by @<NOT FOUND> in [#48212]
* Fix a typo in a use of a local variable field_ in a test (#48184) by @AleksMat in [#48184]
* [serge] Fix 2 integration tests regressed by commit 16780c86b20a (PR #47622) (#48134) by @sergereview[bot] in [#48134]
* [Gemma4] Fix stale expected values in integration tests (#48233) by @ydshieh in [#48233]
* [TableTransformer, PI0] Fix stale expected values and OOM in integration tests (#48198) by @ydshieh in [#48198]
* Post two CI badges on a PR: CPU PR CI and GPU run-slow (#48190) by @tarekziade in [#48190]
* Fix stale expected values in integration tests (cuda sm_86 / Aug04 regressions) (#48171) by @ydshieh in [#48171]
* Assign a reviewer even when a codeowner has left, and route models by modality (#48085) by @tarekziade in [#48085]
* [VITS] Un-skip test_model_forward (#46375) by @blipbyte in [#46375]
* Apply context parallelism to the evaluation path (#48167) by @qgallouedec in [#48167]
* Fix `gpt_oss` runs on GPU (#48118) by @tarekziade in [#48118]
* [EsmFold2] Fix stale expected distogram logit values (#48182) by @ydshieh in [#48182]
* Fix Apr 05 integration test regressions (cuda sm_86) (#48170) by @ydshieh in [#48170]
* Add MLU support to is_flash_linear_attention_available (#46995) by @atri2549 in [#46995]
* Fix integration test expected values for cuda sm_86 (Mar 15 regressions) (#48168) by @ydshieh in [#48168]
* Fix DynamicCache reconstruction during ExecuTorch export (#47900) by @eladsegal in [#47900]
* [LLaVA] Fix pixtral integration tests for cuda sm_86 (#48166) by @ydshieh in [#48166]
* Port ESMC and ESMFold2 to Transformers (#46419) by @Rocketknight1 in [#46419]
* [Qwen2.5-Omni] Update stale expected values for cuda sm_86 (#48164) by @ydshieh in [#48164]
* [Mistral3] Fix batched integration tests: padding_side=left + update expected values (#48161) by @ydshieh in [#48161]
* Fix DeepSeek V2 default vocab size (#48159) by @hmellor in [#48159]
* [InternVL] Fix stale expected values for Llama integration tests (cuda sm_80) (#48153) by @ydshieh in [#48153]
* Retry transient network errors (RemoteDisconnected) in github_utils (#48124) by @ydshieh in [#48124]
* fix bugs for clvp model (#47127) by @kaixuanliu in [#47127]
* Always tie embeddings for LongT5 and Pop2Piano (#47620) by @jiqing-feng in [#47620]
* Use generator with seed for LengthGroupedSampler in Trainer._get_eval_sampler for deterministic eval order with per_device_eval_batch_size > 1 (#48025) by @philipshurpik in [#48025]
* Enable mlinter findings artifact for inline PR reviews (#48117) by @ydshieh in [#48117]
* Fix CpmAnt loading: size lm_head to vocab_size (#48012) by @jiqing-feng in [#48012]
* Delete old mlinter review comments before posting new ones (#48107) by @ydshieh in [#48107]
* [Video] Warn and return all frames when num_frames exceeds total_num_frames (#48074) by @carlszk in [#48074]
* Accept artifact dir as argument in post_mlinter_review.py (#48106) by @ydshieh in [#48106]
* Fix mlinter artifact path (#48088) by @ydshieh in [#48088]
* [Video] Fix convert_to_rgb channel slicing and alpha blending for RGBA videos (#48053) by @<NOT FOUND> in [#48053]
* [PE] Skip test_sdpa_can_dispatch_on_flash for TimmWrapper-backed models (#48064) by @ydshieh in [#48064]
* fix(pipeline): preserve model.generation_config precedence over pipeline defaults (#47752) (#47953) by @nithin42 in [#47953]
* [Gemma3] Update integration test expected values for A10G (#48036) by @ydshieh in [#48036]
* Fallback from 'lanczos' to 'bicubic' when on cuda (#48026) by @zucchini-nlp in [#48026]
* [serge] Fix 2 integration tests regressed by commit b9090ae58cda (PR #47096) (#48060) by @sergereview[bot] in [#48060]
* [Fix] Small FA-related test failures in CB (#47341) by @remi-or in [#47341]
* fix: honor empty processor_kwargs={} in multimodal pipelines (#48044) by @<NOT FOUND> in [#48044]
* [CircleCI] Enable CI for private forks, no-op for public repo (#48056) by @ydshieh in [#48056]
* Support `BatchFeature` in length-grouped samplers (#48034) by @qgallouedec in [#48034]
* Fix EOS for candidate generators (#47931) by @<NOT FOUND> in [#47931]
* [Gemma3n] Update integration test expected values for A10G + torch 2.13 (#48035) by @ydshieh in [#48035]
* fix failed test cases for muse_glimmer (#48011) by @kaixuanliu in [#48011]
* Cohere compass tests (#47895) by @zucchini-nlp in [#47895]
* docs: use relative paths for README language menus and add fa/ro entries (#47777) by @Priyans-Lathiya in [#47777]
* Moving mlinter to 0.1.4 (#47918) by @tarekziade in [#47918]
* [MoE] Fix Blackwell GPU crash with torch._grouped_mm on torch <= 2.8 (#48014) by @<NOT FOUND> in [#48014]
* [docs] Muse Glimmer (#47882) by @stevhliu in [#47882]
* [Florence2] Fix two integration test failures caused by torch 2.13 and auto-dtype (#48031) by @ydshieh in [#48031]
* Proper separation of tests (#47943) by @zucchini-nlp in [#47943]
* unpin `pytest` in the `examples_torch` deps (#48023) by @tarekziade in [#48023]
* [CI] Fix startup failure in pr_build_doc_with_comment workflow by adding missing get-pr-number dependency (#47971) by @<NOT FOUND> in [#47971]
* Let the GPU verify caller turn on the memory probe (#48001) by @tarekziade in [#48001]
* Fix MTP config when mlp_layer_types is absent (#48015) by @Cyrilvallez in [#48015]
* Remove duplicate block_sparse_moe assignment in GraniteMoeDecoderLayer (#47876) by @Aman2394 in [#47876]
* [ModernVBERT] Fix integration test checkpoint (404 since April) (#48009) by @ydshieh in [#48009]
* Fix cropping (#48006) by @Cyrilvallez in [#48006]
* Fix DFlash candidate token device mismatch with device_map="auto" (#47877) by @sywangyi in [#47877]
* :red_circle: Allow tokenizers 0.23.1 (#46381) by @ArthurZucker in [#46381]
* [Whisper] Fix batch decode_with_timestamps in WhisperTokenizer.decode() (#47997) by @ydshieh in [#47997]
* [OLMoE] Update expected logits for A10G and add torch.no_grad() (#47989) by @ydshieh in [#47989]
* [OLMo] Fix OOM in logits tests by adding torch.no_grad() (#47986) by @ydshieh in [#47986]
* [AXK1] Fix expected logits for CUDA A10G (#47980) by @ydshieh in [#47980]
* [Gemma] Update expected values for A10G (#47976) by @ydshieh in [#47976]
* Fix gemma4 video to device (#47896) by @guarin in [#47896]
* Remove stale (None, None) fallback in qwen2_5_vl batch_different_resolutions test (#47972) by @ydshieh in [#47972]
* Potential fix for code scanning alert no. 267: Artifact poisoning (#47949) by @tarekziade in [#47949]
* Fix GatedDeltaNet A_log dtype to prevent -inf under bfloat16 init (#47944) by @Nkluge-correa in [#47944]
* [serge] Fix 2 integration tests for model `got_ocr2` failing with `other` (other (2)) (#47937) by @sergereview[bot] in [#47937]
* Fix Jinja block endings in CHAT WITH MODELS' Writing a chat template … (#47960) by @ak1for2business-prog in [#47960]
* [tests] Fix expected output for Qwen2.5-VL batch_wo_image on CUDA (#47968) by @ydshieh in [#47968]
* [serge] Fix 2 integration tests for model `opt` failing with `other` (other (2)) (#47909) by @sergereview[bot] in [#47909]
* Scan a diff in trufflehog, not the whole repo history (#47945) by @tarekziade in [#47945]
* [serge] Fix 2 integration tests for model `vivit` failing with `output_mismatch` (tensor values differ (2)) (#47566) by @sergereview[bot] in [#47566]
* Fix Gemma `sliding_window` being halved on every config save/reload (#47940) by @Bluear7878 in [#47940]
* docs: fix incorrect PEFT anchor link in fine-tuning section (#47927) by @dsulot in [#47927]
* CI: add vllm-test-init and vllm-test-transformers jobs on dedicated runners (#47934) by @ydshieh in [#47934]
* Make muse glimmer exportable (#47871) by @IlyasMoutawwakil in [#47871]
* docs: add installation instructions for NVIDIA Spark (ARM64) devices (#47906) by @mfuntowicz in [#47906]
* [CohereCompass] Minor docs fixes (#47903) by @calpt in [#47903]
* fix: correct checkpoints, config annotations, and create_dummy_models improvements (#47902) by @ydshieh in [#47902]
* Transform paths and repeat joining for response parsing (#47648) by @Rocketknight1 in [#47648]
* [docs] Update toctree (#47781) by @stevhliu in [#47781]
* Add `CI_CPU_MEMORY_LIMIT_GB` to check_failed_tests workflow (#47884) by @ydshieh in [#47884]
* Use tiny Hub checkpoint in Qwen3ASR processor test (#47833) by @ydshieh in [#47833]
* Update AutoRound XPU/CPU backend (#47826) by @yiliu30 in [#47826]
* docs(tests): fix typos in test comments (#47859) by @zhaoxinyi02 in [#47859]
* Update version post release (#47870) by @Cyrilvallez in [#47870]

## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @tarekziade
    * CI: gate the hunyuan-moe slow test  (#48330)
    * CI: fix muse OOMs (#48284)
    * ignore mlinter ci file (#48267)
    * Post two CI badges on a PR: CPU PR CI and GPU run-slow (#48190)
    * Assign a reviewer even when a codeowner has left, and route models by modality (#48085)
    * Fix `gpt_oss` runs on GPU (#48118)
    * Moving mlinter to 0.1.4 (#47918)
    * unpin `pytest` in the `examples_torch` deps (#48023)
    * Let the GPU verify caller turn on the memory probe (#48001)
    * Potential fix for code scanning alert no. 267: Artifact poisoning (#47949)
    * Scan a diff in trufflehog, not the whole repo history (#47945)
* @dkrisman
    * Add an opt-in per-frame pixel cap (cap_pixels_per_frame) to the Qwen3-VL video processor (#48071)
* @jiqing-feng
    * Cpmant fix use cache (#48013)
    * [xcodec2] Fix flex attention and flash dispatch tests (#48244)
    * Always tie embeddings for LongT5 and Pop2Piano (#47620)
    * Fix CpmAnt loading: size lm_head to vocab_size (#48012)
    * Fix Qwen2.5-Omni / Qwen3-Omni-MoE generation with a compilable cache (#47872)
    * Bump default flash-attn2 hub kernel version to v3 (#47863)
    * Declare sdpa support in `TimmWrapper` (#47939)
* @ydshieh
    * Fix AutoTokenizer returning TokenizersBackend for DeepSeek-R1-Distill-Qwen models (#48211)
    * [Gemma4] Investigate flaky test_generation_beyond_sliding_window_1_eager (#48236)
    * [Gemma4] Fix stale expected values in integration tests (#48233)
    * [TableTransformer, PI0] Fix stale expected values and OOM in integration tests (#48198)
    * Fix stale expected values in integration tests (cuda sm_86 / Aug04 regressions) (#48171)
    * [EsmFold2] Fix stale expected distogram logit values (#48182)
    * Fix Apr 05 integration test regressions (cuda sm_86) (#48170)
    * Fix integration test expected values for cuda sm_86 (Mar 15 regressions) (#48168)
    * [LLaVA] Fix pixtral integration tests for cuda sm_86 (#48166)
    * [Qwen2.5-Omni] Update stale expected values for cuda sm_86 (#48164)
    * [Mistral3] Fix batched integration tests: padding_side=left + update expected values (#48161)
    * [InternVL] Fix stale expected values for Llama integration tests (cuda sm_80) (#48153)
    * Retry transient network errors (RemoteDisconnected) in github_utils (#48124)
    * [Whisper] Fix speculative decoding: preserve cleared suppress tokens through super().generate() (#48108)
    * Enable mlinter findings artifact for inline PR reviews (#48117)
    * Delete old mlinter review comments before posting new ones (#48107)
    * Accept artifact dir as argument in post_mlinter_review.py (#48106)
    * Fix mlinter artifact path (#48088)
    * [Whisper] Fix decoder position IDs for left-padded batches in longform generation (#48028)
    * [PE] Skip test_sdpa_can_dispatch_on_flash for TimmWrapper-backed models (#48064)
    * [Gemma3] Update integration test expected values for A10G (#48036)
    * [CircleCI] Enable CI for private forks, no-op for public repo (#48056)
    * [Gemma3n] Update integration test expected values for A10G + torch 2.13 (#48035)
    * [Florence2] Fix two integration test failures caused by torch 2.13 and auto-dtype (#48031)
    * [ModernVBERT] Fix integration test checkpoint (404 since April) (#48009)
    * [Whisper] Fix speculative decoding: UnboundLocalError, cache corruption, and speed regression (#48000)
    * [Whisper] Fix batch decode_with_timestamps in WhisperTokenizer.decode() (#47997)
    * [Whisper] Fix integration test failures on A10G (dtype, stale values, API changes) (#47995)
    * [DeepSeekV2] Fix integration tests OOM: use device_map=auto instead of 8-bit quantization (#47991)
    * [OLMoE] Update expected logits for A10G and add torch.no_grad() (#47989)
    * [OLMo] Fix OOM in logits tests by adding torch.no_grad() (#47986)
    * [GPTNeoX] Fix post_processor not overridden when loading from pretrained (OLMo garbage generation) (#47988)
    * [AXK1] Fix expected logits for CUDA A10G (#47980)
    * [Gemma] Update expected values for A10G (#47976)
    * [emu3] 🦮 Black Labrador is back! Fix image generation broken since #37033 (#47948)
    * Remove stale (None, None) fallback in qwen2_5_vl batch_different_resolutions test (#47972)
    * [tests] Fix expected output for Qwen2.5-VL batch_wo_image on CUDA (#47968)
    * CI: add vllm-test-init and vllm-test-transformers jobs on dedicated runners (#47934)
    * fix: correct checkpoints, config annotations, and create_dummy_models improvements (#47902)
    * Add `CI_CPU_MEMORY_LIMIT_GB` to check_failed_tests workflow (#47884)
    * Use tiny Hub checkpoint in Qwen3ASR processor test (#47833)
* @eustlb
    * gs (#48288)
* @eladsegal
    * Fix DynamicCache reconstruction during ExecuTorch export (#47900)
    * Support per-layer cache configuration and attention-mask selection (#47901)
* @YangKai0616
    * 🚨[wav2vec2] Support attn_implementation=sdpa dispatch (#46196)
* @drbh
    * feat: add nvfp4 quantization (#47883)
* @Priyans-Lathiya
    * docs: use relative paths for README language menus and add fa/ro entries (#47777)
* @itazap
    * [new model] step 3.7 (#46658)
* @calpt
    * [CohereCompass] Minor docs fixes (#47903)
    * Add CohereCompass modeling (#47878)

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.16.0` · 2026-08-26 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.16.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
