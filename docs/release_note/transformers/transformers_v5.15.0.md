---
title: "transformers v5.15.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.15.0"
version: "v5.15.0"
published: "2026-08-10"
type: "minor"
lang: "en"
summary: "Muse Glimmer, released today, is Meta’s new multimodal model, especially designed for agentic use cases. Distilled from Muse to 30B parameters, and released under the Apache 2.0 license, it can be deployed to local…"
---

# transformers v5.15.0

# Release v5.15.0

## New Model additions

### Meta Muse Glimmer

Muse Glimmer, released today, is Meta’s new multimodal model, especially designed for agentic use cases. Distilled from Muse to 30B parameters, and released under the Apache 2.0 license, it can be deployed to local setups for privacy-aware applications such as coding, document analysis, personal assistants, Claw- or Hermes-like setups.

Muse Glimmer is a dense 30B parameter model consisting of:
- 2B ViT-style encoder for vision (Perception Encoder)
- 28B parameter text decoder

We're covering it in the following blogpost: http://hf.co/blog/muse-glimmer

<img width="960" height="1787" alt="image" src="https://github.com/user-attachments/assets/3d8e548e-f84f-4269-8bd0-a12722d7ab01" />

---

### GraniteMoeSWA & GraniteSWA

<img width="1013" height="389" alt="image" src="https://github.com/user-attachments/assets/2c2b87f0-466a-413a-a4be-25ceae49c9a5" />

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/granitemoe_swa)
* Add Granite-swa and Granitemoe-swa model support (#47179) by @daviswer in [#47179](https://github.com/huggingface/transformers/pull/47179)

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/granite_swa)
* Add Granite-swa and Granitemoe-swa model support (#47179) by @daviswer in [#47179](https://github.com/huggingface/transformers/pull/47179)

---

### A.X-K1 & A.X-K2

<img width="580" height="319" alt="image" src="https://github.com/user-attachments/assets/a20665bb-43ee-4af0-bb6f-80da495ea4f3" />

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/axk2)
* Add AXK2 from SKT (#47528) by @vasqu in [#47528](https://github.com/huggingface/transformers/pull/47528)

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/axk1)
* add_axk1 (#46867) by @kmswin1 in [#46867](https://github.com/huggingface/transformers/pull/46867)

---

### Cosmos3 Edge

<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/16e41b90-11a5-4f22-8c56-11162b9c0a5f" />

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/cosmos3_edge)
* Add Cosmos3 Edge model support (#47181) by @atharvajoshi10 in [#47181](https://github.com/huggingface/transformers/pull/47181)


## Breaking changes

Kernels are now opt-in rather than mandatory for linear attention models (Mamba, GDN, Conv-only, etc.), so users who relied on automatic kernel selection must explicitly enable kernels to maintain previous behavior.
* 🚨 [`Kernels`] Refactor all linear attn models & native kernels fallback (#47630) by @vasqu

The cache cropping API now only accepts negative values (relative offsets) instead of absolute sizes, so users calling crop methods directly must update their code to pass negative values accordingly.
* 🚨 [cache] Cropping can only be done with negative values (#47720) by @Cyrilvallez

T5 and its model family (MT5, LongT5, etc.) now support SDPA and other attention backends via `ALL_ATTENTION_FUNCTIONS`, meaning the default attention implementation may change and users relying on the previous eager-only path should explicitly set `attn_implementation="eager"` if needed.
* 🚨 Enable SDPA (and other attention backends) for T5 and propagate to the T5 family (#47014) by @jiqing-feng

Several small private helper functions (e.g., `_is_url`, `_build_image_tokens`) have been removed from multimodal processor files, so users or downstream libraries that imported these private functions directly must remove or replace those references.
* :rotating_light: Processors update the rest (#46556) by @zucchini-nlp


## Attention

This release includes several attention fixes and improvements, including correcting Multi-Head Latent Attention (MLA) cache compression, optimizing Flash Attention max sequence length computation in vision models, and fixing bugs in CTRL flex-attention and SDPA prefill with position bias. Additional changes refactor linear attention models for better maintainability, make Gemma 4's heterogeneous attention config explicit, and improve MPS support via metal-flash-sdpa integration.


* [Fix] Fix multi-head latent attention (MLA) (#47761) by @remi-or in [#47761]
* Refactor all linear attention models to latest best standards for convolution (#47452) by @Cyrilvallez in [#47452]
* Allow metal-flash-sdpa for OpenAIPrivacyFilter on MPS (#46740) by @ArthurZucker in [#46740]
* Use new `per_layer_config` for Gemma 4 so that heterogeneous attention config is explicit (#47384) by @hmellor in [#47384]
* add paged attention tests support for XPU (#47163) by @kaixuanliu in [#47163]
* Move `value` padding into the attention interfaces that need it (#47451) by @hmellor in [#47451]
* Simplify function dispatch for linear attention (#47450) by @Cyrilvallez in [#47450]
* Optimize flash attention max seqlen computation in vision attention (#47170) by @ShareLer in [#47170]
* Fix `BlockMask` crash in CTRL flex-attention generation (#46854) by @jiqing-feng in [#46854]
* [CB] Automatically switch attention implementation to flash (#47330) by @remi-or in [#47330]
* Fix sdpa prefill with position_bias (#47359) by @Cyrilvallez in [#47359]


## Vision

Vision improvements in this release include performance optimizations such as faster image preprocessing for vision-language models (GLM4V, MiniMaxM3-VL, and others) by eliminating redundant tensor copies, and more efficient Flash Attention variable-length paths by precomputing maximum sequence lengths once per forward pass. Several bug fixes were also applied, including correcting dtype alignment in Kosmos2/Kosmos2_5 embedding merges, fixing a position-embedding initialization fallback in Phi4Multimodal, resolving PIL resize parity in Hunyuan-VL, and patching stop-sequence handling in the image-text-to-text pipeline.


* Modularize qwen-format vision processors (#47573) by @zucchini-nlp in [#47573]
* Update daily CI Docker image to torch 2.13.0 / CUDA 13.0 (#47738) by @ydshieh in [#47738]
* Align image feature dtype in kosmos2 and kosmos2_5 embedding merge (#47691) by @<NOT FOUND> in [#47691]
* Speed up image preprocessing for vision-language models (#47453) by @labAxiaoming in [#47453]
* Fix vision position-embedding init width fallback in Phi4Multimodal (#47509) by @<NOT FOUND> in [#47509]
* Fix Hunyuan-VL PIL image resize parity with reference preprocessing (#47233) by @IMvision12 in [#47233]
* Fix image-text-to-text stop_sequence handling (#47032) by @Sunt-ing in [#47032]
* Refactor image loading in tests to use load_test_image helper (#47218) by @LevelVoid in [#47218]


## Generation

Several generation improvements and bug fixes were made, including enabling batched audio generation for Qwen2.5/3-Omni, allowing sliding window cache layers to work with speculative decoding, and fixing memory overhead from static cache persistence across `generate()` calls. Multiple model-specific bugs were also resolved, including crashes in KyutaiSpeechToText, MusicgenForCausalLM, CTRL flex-attention, and assisted decoding for EncoderDecoder cache and OlmoHybrid models.


* Align OlmoHybrid to use a native cache in generate (#47604) by @Cyrilvallez in [#47604]
* [generate] Stop setting the static cache as an attribute to save memory (#47731) by @Cyrilvallez in [#47731]
* Add support for batched Qwen2.5/3-Omni audio generation (#47186) by @IMvision12 in [#47186]
* [cache] Allow sliding window layers to be roll-backed for speculative decoding (#47447) by @Cyrilvallez in [#47447]
* Fix shape mismatch in KyutaiSpeechToText `generate()` last window (#46952) by @jiqing-feng in [#46952]
* Fix typo in `MusicgenForCausalLM.generate()` (#46974) by @jiqing-feng in [#46974]
* Fix assisted decoding for models with EncoderDecoder cache & OlmoHybrid (#47361) by @Cyrilvallez in [#47361]


## Cache

Several cache-related bugs were fixed, including correcting NemotronH's missing `"mlp"` layer-type mapping, resolving recurrent-layer padding masks being skipped during chunked prefill and cache continuation for hybrid models, and fixing assisted decoding for models with `EncoderDecoderCache` and OlmoHybrid. Additional improvements include aligning OlmoHybrid to use a native cache, enabling sliding window layers to support speculative decoding rollback, and stopping the static cache from being stored as a model attribute to reduce unexpected memory overhead.

* [docs] MPS graph cache (#47304) by @stevhliu in [#47304]
* Fix NemotronH: Register `"mlp"` in the cache layer-type mappings (#47535) by @qgallouedec in [#47535]
* Fix recurrent-layer padding mask being skipped on continued forwards (chunked prefill, cache continuation) (#47087) by @abcgco in [#47087]


## Kernels

⚠️ The `kernels` python package will very likely be a required dependency for `transformers[torch]` in the near future. This will help us deliver maximum performance to all users; kernels will only be downloaded from trusted publishers manually approved by the HF team. Please let us know of any issues you're facing beforehands so that we may solidify our integration.

Improved robustness of the kernels integration by refactoring function handling to use layer repos, fixing CI EROFS fallback patches for kernel downloads via `HfApi`, resolving a positional argument collision in `causal_conv1d_fn`, and bumping the FP8 kernels version to prevent NaNs.

* [conftest] Fix EROFS fallback for kernel downloads (correct interception point) (#47794) by @ydshieh in [#47794]
* [conftest] Fix EROFS fallback for kernel downloads via HfApi (#47791) by @ydshieh in [#47791]
* [`Kernels`] Refactor function handling (#46883) by @vasqu in [#46883]
* Kernels and loaders robustification (#47334) by @IlyasMoutawwakil in [#47334]
* Fix `causal_conv1d_fn` positional `activation` colliding with hub kernel's `seq_idx` (#47527) by @qgallouedec in [#47527]
* [`FP8`] Bump kernels version (#47344) by @vasqu in [#47344]
* [docs] FlashAttention kernel fallback (#47345) by @stevhliu in [#47345]


## Quantization

Quantization support was expanded with FP8 kernels for compressed-tensors models, fixes for FP8 module normalization and format-based compression detection, and a multi-device MXFP4 dequantization race condition fix. GPTQ and MXFP4 tests were also extended to cover Intel XPU devices.


* extend tests/quantization/gptq/test_gptq.py::GPTQTestCUDA and tests/q… (#47166) by @sywangyi in [#47166]
* Compressed tensors fp8 (#47216) by @SunMarc in [#47216]
* Fix A.X-K2 fp8 modules_to_not_convert normalization for the gated-norm MLP (#47578) by @kmswin1 in [#47578]
* [Quantization]: Refactor is_quantization_compressed for format-based detection (#47152) by @rigen1048 in [#47152]
* Fix multi-device mxfp4 dequantization race in `_convert_moe_packed_tensors` (#47423) by @kaixuanliu in [#47423]


## Audio

Batched audio generation is now supported for Qwen2.5/3-Omni, and several bug fixes were applied across audio models, including a dtype mismatch in Gemma4 audio feature merging, a bfloat16 positional embedding error in AudioFlamingo3, and missing backend requirement guards for Voxtral. The VibeVoice ASR processor was also updated to make audio input optional and support multiple audios per prompt.


* feat[vLLM x v5]: Make audio optional and support multiple audios in VibeVoice ASR processor (#47483) by @harshaljanjani in [#47483]
* Fix Gemma4 audio feature dtype mismatch in masked_scatter (#47482) by @danielhanchen in [#47482]
* [fix] fix requirements audio feature and proc (#47113) by @eustlb in [#47113]
* [AudioFlamingo3] Fix bfloat16 dtype mismatch in audio encoder positional embedding (#47258) by @snkii in [#47258]


## Parallelization

Expanded FSDP support across 94 `ForCausalLM` model classes with auto-generated FSDP plans, added end-to-end FSDP tests including distributed checkpoint save/load and generation, and introduced a dedicated FSDP CI job. Additionally, fixed a device mismatch bug in `create_bidirectional_sliding_window_mask` under model parallelism and resolved a tensor parallel inference issue for models with tied embeddings.


* skip fsdp tests when backend is mps (#47601) by @3outeille in [#47601]
* Fix model parallel device mismatch in `create_bidirectional_sliding_window_mask` (#47560) by @abcgco in [#47560]
* Add FSDP plans to all models (#47165) by @3outeille in [#47165]
* Fix TP inference for tied embedding (#47503) by @3outeille in [#47503]
* Add FSDP CI and end-to-end FSDP tests + save fsdp (#47357) by @3outeille in [#47357]


## Tokenization

This release adds native support for Mistral's "tekken" tokenizer format via AutoTokenizer, fixes a CodeLlama tokenizer bug where leading whitespace was incorrectly dropped during decode, and patches a potential ReDoS vulnerability caused by unescaped tokenizer filenames being used as regex patterns in `from_pretrained`.


* [Mistral] Add native tekken tokenizer support to AutoTokenizer (#47507) by @juliendenize in [#47507]
* Fix CodeLlama tokenizer dropping leading whitespace on decode (#47488) by @SuryanshSS1011 in [#47488]
* Fix potential ReDoS by escaping tokenizer filename used as regex pattern (#47498) by @hameedibrh in [#47498]


## Serve

Improved the `serve` chat parsing to unify streaming and non-streaming paths under a single response parser that handles tool calls, reasoning, and content, simplifying the addition of new model support. Additionally, hardened daily CI reporting by fixing GitHub API diagnostic output being captured in Slack payloads and adding rate-limit resilience to prevent report failures when paginating large job matrices.


* CI: Log GitHub API diagnostics to stderr (#47635) by @tarekziade in [#47635]
* Update serve chat parsing (#46267) by @SunMarc in [#46267]
* ci: harden daily CI reporting against GitHub API rate limits (#47382) by @tarekziade in [#47382]


## Bugfixes and improvements

* Fix cached_files silently returning stale file on read-only filesystem (EROFS) (#47852) by @ydshieh in [#47852]
* Fix `PhimoeIntegrationTest` (#46539) by @ydshieh in [#46539]
* make examples under doc device agnostic (#47812) by @kaixuanliu in [#47812]
* cancel deterministic for XPU in gemma4 tests (#47790) by @kaixuanliu in [#47790]
* Serialize post-mlinter-review after post-link to avoid PR description race (#47832) by @ydshieh in [#47832]
* Use content hash for mlinter review deduplication (#47830) by @ydshieh in [#47830]
* Add new args in auto-docstring (#47737) by @zucchini-nlp in [#47737]
* Add check_model_inits.py (#47656) by @guarin in [#47656]
* add xpu in installation guide (#47785) by @sywangyi in [#47785]
* Fix mlinter review job: checkout before artifact download (#47820) by @ydshieh in [#47820]
* Post mlinter findings as inline PR review comments (#47819) by @ydshieh in [#47819]
* Fix ci style (#47818) by @vasqu in [#47818]
* Hotfix axk2 indexer norm (#47810) by @kmswin1 in [#47810]
* open fla support for XPU to benefit from the acceleration (#47799) by @kaixuanliu in [#47799]
* [docs] Update BatchEncoding.to() type annotation and docstring (#47789) by @samyuktahegde in [#47789]
* Fix linting (#47807) by @Cyrilvallez in [#47807]
* Fix patching in some models (#47798) by @zucchini-nlp in [#47798]
* Add post-mlinter-review job to post-dashboard-link workflow (#47800) by @ydshieh in [#47800]
* Migrate torchao integration off deleted torchao.dtypes (#47797) by @vkuzo in [#47797]
* [conftest] Also wrap snapshot_download for EROFS fallback (#47796) by @ydshieh in [#47796]
* Fix MI355 CI: bump hf-workflows pin to NUM_SLICES=4 (#47792) by @Abdennacer-Badaoui in [#47792]
* [Fix] Wrong type hint in get_number_of_image_patches (#47788) by @remi-or in [#47788]
* Fix Dac offload tests (#47775) by @guarin in [#47775]
* [Fix] Swapped height and width in KimiK25 (#47786) by @remi-or in [#47786]
* Remove dangling files and folders (#47764) by @Cyrilvallez in [#47764]
* Fix AI-written conversion mappings (#47755) by @Cyrilvallez in [#47755]
* update mistral common version for PR 47507 (#47677) by @itazap in [#47677]
* Fix spelling/grammar in model files (batch 3/3) (#47684) by @Rocketknight1 in [#47684]
* Fix spelling/grammar in core library, examples, and utils (#47685) by @Rocketknight1 in [#47685]
* Fix spelling/grammar in model files (batch 2/3) (#47683) by @Rocketknight1 in [#47683]
* update sonicmoe versions (#47769) by @IlyasMoutawwakil in [#47769]
* clean up reverse_op fixme in compressed_tensors (#47701) by @DhanushPillay in [#47701]
* PR CI with torch 2.13 (#47767) by @ydshieh in [#47767]
* Import utils compilation fixes (#47726) by @IlyasMoutawwakil in [#47726]
* Fix DBRX MoE hidden size and expert GLU transposes (#47671) by @kaixuanliu in [#47671]
* Fix multi token decode merging (#47762) by @IlyasMoutawwakil in [#47762]
* Fix: Remove redundant @can_return_tuple conflicting with @capture_out… (#47733) by @guarin in [#47733]
* fix processor config nested key fallback (#47628) by @YunzhuLu in [#47628]
* [CI - Debug] Skip /transformers-dependent steps for CPU runner (#47759) by @ydshieh in [#47759]
* [CI] Add CPU runner support to ssh-runner workflow (#47757) by @ydshieh in [#47757]
* Simplify reverse weight conversion (#47725) by @Cyrilvallez in [#47725]
* Remove useless linting for inv_freq (#47753) by @Cyrilvallez in [#47753]
* Use explicit nn.Buffer everywhere for modular (#47722) by @Cyrilvallez in [#47722]
* Remove stale and redundant _no_split_modules entries (#47645) by @guarin in [#47645]
* Executorch exporter fixes (#47243) by @IlyasMoutawwakil in [#47243]
* Acc fix in xpu (#47500) by @sywangyi in [#47500]
* update Dockerfile for xpu torch2.13 (#47502) by @sywangyi in [#47502]
* feat[vLLM]: Support text replacement offsets in the remaining old-format processors (#47614) by @harshaljanjani in [#47614]
* Fix ImportError in transformers.exporters on torch < 2.8 (#47711) by @Neal006 in [#47711]
* Fix failing tests for axk1 and axk2 (#47727) by @kaixuanliu in [#47727]
* Fix failing tests for granite_swa and granitemoe_swa (#47723) by @kaixuanliu in [#47723]
* skip invalid test cases for inkling tests (#47493) by @kaixuanliu in [#47493]
* [docs] Fix BatchEncoding documentation inconsistencies (#47647) by @samyuktahegde in [#47647]
* Fix spelling/grammar in model files (batch 1/3) (#47682) by @Rocketknight1 in [#47682]
* Fix spelling/grammar in English docs (q → z) (#47681) by @Rocketknight1 in [#47681]
* Fix spelling/grammar in English docs (h → p) (#47680) by @Rocketknight1 in [#47680]
* Fix spelling/grammar in English docs (a → g) (#47679) by @Rocketknight1 in [#47679]
* fix npu check (#47587) by @DhanushPillay in [#47587]
* fix: correct text input validation logic in 8 multimodal processors (and → or) (#47663) by @AbdullahRasheed45 in [#47663]
* Fix feature dtype mismatch in masked_scatter for seven multimodal models (#47673) by @<NOT FOUND> in [#47673]
* [docs] storing and loading chat templates (#47650) by @stevhliu in [#47650]
* adding amd quark config class changes (#47322) by @debasisdwivedy in [#47322]
* Fix compressed tensors impl  (#47652) by @SunMarc in [#47652]
* Hoist special-token lookups in wav2vec2 decode paths and drop a dead filter in wav2vec2_phoneme (#47557) by @ishan-1010 in [#47557]
* silencing elastic warning by import distributed lib inside functions  (#47665) by @3outeille in [#47665]
* Fix missing github_utils.py download in PR CI dashboard workflow (#47668) by @ydshieh in [#47668]
* Exportable kimi (#47096) by @IlyasMoutawwakil in [#47096]
* better guarding to handle torch compiled with USE_DISTRIBUTED=0 (#47619) by @3outeille in [#47619]
* Remove gemma4 warnings (#47664) by @Cyrilvallez in [#47664]
* [Chat Parsing] Type inline tool-call arguments from the calling tool's JSON Schema (#47529) by @yonigozlan in [#47529]
* Improve Trainer DataLoader Controls for Streaming and Multiprocessing (#47164) by @muyihao in [#47164]
* Update maintainer list (#47644) by @Rocketknight1 in [#47644]
* Allow position_ids_start=2 on DataCollatorWithFlattening for RoBERTa etc. (#47525) by @tomaarsen in [#47525]
* Remove Rotary warning (#47642) by @Cyrilvallez in [#47642]
* Drop multimodal inputs natively in prepare_inputs_for_generation if not in prefill (#47622) by @Cyrilvallez in [#47622]
* Simplify all Rotary modules (#47598) by @Cyrilvallez in [#47598]
* [docs] response_template when serving (#47626) by @stevhliu in [#47626]
* [docs] MTP support (#47301) by @stevhliu in [#47301]
* Fix GPT-2 c_proj depth scaling initialization (#47459) by @DavidJohnQuinlan in [#47459]
* Fix fp8_linear compilability  (#47623) by @IlyasMoutawwakil in [#47623]
* byebye torch 2.4 (#47609) by @ydshieh in [#47609]
* Vectorize NoRepeatNGramLogitsProcessor and remove its host sync (#47571) by @hameedibrh in [#47571]
* Fix CUDA Graph breaking host to device copy from scalar tensor allocation (#47547) by @hmellor in [#47547]
* Fix some processors (#47608) by @zucchini-nlp in [#47608]
* CI: Add serge review relay workflow and review rules (#47610) by @tarekziade in [#47610]
* [docs] Exporters (#47374) by @stevhliu in [#47374]
* CI: use a single function for GH calls (#47474) by @tarekziade in [#47474]
* Remove redundant guarding for distributed (#47570) by @3outeille in [#47570]
* Fix modular for mamba packages (#47494) by @Cyrilvallez in [#47494]
* Remove deprecated conversion in Kimi (#47581) by @zucchini-nlp in [#47581]
* CI: use transformers-ci daily workflow with OTEL (#47360) by @tarekziade in [#47360]
* Fix slow tensor path in _check_special_mm_tokens (#47580) by @guan404ming in [#47580]
* CI: let's run integration failure cron at 10pm (#47537) by @tarekziade in [#47537]
* Better and more extensive tests for RoPE (#46912) by @zucchini-nlp in [#46912]
* Fix mamba2 family decode and simplify all reshape ops (#47569) by @Cyrilvallez in [#47569]
* [DiffusionGemma] Cast the decoder padding mask to bool (#47295) by @kashif in [#47295]
* General maintenance  (#47517) by @zucchini-nlp in [#47517]
* fixed the benchmark script with DistributedConfig  (#47568) by @tarekziade in [#47568]
* Fix failing tests for mimo_v2_flash (#47284) by @kaixuanliu in [#47284]
* Make tokenization_mistral_common importable without mistral_common installed (#47397) by @juliendenize in [#47397]
* Use --flake-runs=1 in check_bad_commit.py for PR comment CI (#47522) by @ydshieh in [#47522]
* Deprecate the old response_schema (#47320) by @Rocketknight1 in [#47320]
* fix: add pickle support to _LazyConfigMapping for spawn multiprocessing (#46026) by @kfojcik-intel in [#46026]
* Delete old deprecations (#47518) by @zucchini-nlp in [#47518]
* Run only @slow tests in PR comment CI (#47521) by @ydshieh in [#47521]
* Fix incorrect type hint (#47519) by @hmellor in [#47519]
* Deprecate CB config in gen configuration (#47291) by @remi-or in [#47291]
* [Offloading] [Bugfix] Fix fully offloaded model saving (#47336) by @kylesayrs in [#47336]
* CI: fix torchaudio pinning +proper break in rnnt (#47422) by @tarekziade in [#47422]
* Fix Qwen2.5-Omni Token2Wav DiT rotary embedding layout (interleaved cos/sin) (#47403) by @HenryVarro666 in [#47403]
* CI: add reproduce mode to serge verify caller (#47492) by @tarekziade in [#47492]
* [fix][whisper]: fix max_new_tokens handling (#46795) by @eustlb in [#46795]
* Isolate MLA KV expansion to make it easier to bypass (#47460) by @hmellor in [#47460]
* Fix loss alignment and Trainer token counting for encoder decoder models (#46903) by @OmkumarSolanki in [#46903]
* Fix the HunyuanVL's torchvision backend (#47499) by @Mi-Jiazhi in [#47499]
* [DiffusionGemma] Support gradient checkpointing (#46572) by @kashif in [#46572]
* Fix failing tests for zaya (#47268) by @kaixuanliu in [#47268]
* tipsv2_dpt: fix failing tests for XPU (#47292) by @kaixuanliu in [#47292]
* Fix some failed test cases related with XPU Expectations (#47173) by @kaixuanliu in [#47173]
* fix: guard DTensor import in sharding_utils.py for PyTorch < 2.5 (#47481) by @<NOT FOUND> in [#47481]
* CPU can incur a slow path on non-contiguous magnitudes (#47351) by @vbayanag in [#47351]
* Route chat management calls to the service root (#47138) (#47303) by @dhruv7477 in [#47303]
* fix: liger unnecessarily materializes logits in VRAM during eval, causing OOM (#45273) by @excepshenal in [#45273]
* Fix gradient inflation when combining label smoothing with gradient accumulation (#47261) by @Incheonkirin in [#47261]
* Fix MoE expert decompression for non-32-divisible bit widths (#47315) by @KKothuri in [#47315]
* [Qwen3ASR] Add hotword parsing, and fix language parsing and training. (#47111) by @ebezzam in [#47111]
* Remove deprecated training args and `is_fast` property (#46917) by @cyyever in [#46917]
* Consistent output shape from `get_image_features` (#46405) by @zucchini-nlp in [#46405]
* fix failed test cases for qwen3_omni_moe model (#47449) by @kaixuanliu in [#47449]
* Fix double-shifted training loss in GitForCausalLM (#47395) by @<NOT FOUND> in [#47395]
* Fix CohereASR training-loss double-shift (same as Moonshine fix #46784) (#46895) by @sharmax-vikas in [#46895]
* Warn when `group_by_length` is silently ignored for iterable datasets (#47379) by @qgallouedec in [#47379]
* Update bug report list (#46607) by @molbap in [#46607]
* fix: remove unreachable return in special token builder (#47420) by @hai1222 in [#47420]
* Add Harry to slow CI (#47454) by @vasqu in [#47454]
* BLT: vectorize patch length processing (#47385) by @sj0618 in [#47385]
* Fix `TrackioCallback` fails to log evaluation metrics after training ends (#46935) by @lewtun in [#46935]
* [Kimi] add integration tests (#47383) by @zucchini-nlp in [#47383]
* Add distributed runtime utils and DistributedMixin  (#47352) by @3outeille in [#47352]
* Fix Cosmos 3 Edge Patch packing order (#47399) by @atharvajoshi10 in [#47399]
* Fix yarn `mscale_all_dim` for DeepSeek v2 and Mistral 4 (#47435) by @hmellor in [#47435]
* Hoist special-token lookups out of per-token loops in six slow tokenizers (#47425) by @ishan-1010 in [#47425]
* fix typos and variable naming in quicktour.md (#47418) by @yashasvi-srivastava21 in [#47418]
* Normalize multimodal input keys in AnyToAnyPipeline (#47074) by @Sunt-ing in [#47074]
* Fix Aria checkpoint key conversion mapping (#47151) by @sywangyi in [#47151]
* extend tests/models/qwen3_next/test_modeling_qwen3_next.py::Qwen3Next… (#47184) by @sywangyi in [#47184]
* CI: add serge verify (GPU) caller workflow (#47381) by @tarekziade in [#47381]
* Fix orthogonal_ init for low-precision dtypes (bf16/fp16) (#47252) by @janbernloehr in [#47252]
* [docs] Fix decode examples and expected output in fast_tokenizers (#47369) by @samyuktahegde in [#47369]
* [serge] Fix 20 integration tests for model `whisper` failing with `output_mismatch` (list output differs (10), other (6) (#47150) by @sergereview[bot] in [#47150]
* [Mistral] Move MistralConverter into integrations/mistral/ package (#46603) by @juliendenize in [#46603]
* Fix GLM video frame padding for temporal patches (#47141) by @labAxiaoming in [#47141]
* [docs] Inkling (#47350) by @stevhliu in [#47350]
* Fix Daily CI reporting issues (#47364) by @tarekziade in [#47364]
* [`peft`] Support key_mapping with PEFT models (#46766) by @tomaarsen in [#46766]
* Fix model tests for tipsv2 (#47356) by @kaixuanliu in [#47356]
* Fix TimesFM 2.5 window_size AttributeError (#47363) by @kashif in [#47363]
* fix: allow num_labels property to return None when id2label is unset (#47069) by @SebTardif in [#47069]
* [Tests] Fix slow video tensor creation from list of numpy arrays in SmolVLM (#44731) by @Defalt-Meh in [#44731]
* Update dev version on main (#47366) by @vasqu in [#47366]
* Fix deepgemm on multiple devices (#47323) by @IlyasMoutawwakil in [#47323]
* ci: Handle empty GitHub token in CI run lookup (#47362) by @tarekziade in [#47362]
* Fix inkling feature extractor (#47349) by @ArthurZucker in [#47349]

## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @ydshieh
    * Fix cached_files silently returning stale file on read-only filesystem (EROFS) (#47852)
    * Fix `PhimoeIntegrationTest` (#46539)
    * Serialize post-mlinter-review after post-link to avoid PR description race (#47832)
    * Use content hash for mlinter review deduplication (#47830)
    * Fix mlinter review job: checkout before artifact download (#47820)
    * Post mlinter findings as inline PR review comments (#47819)
    * Add post-mlinter-review job to post-dashboard-link workflow (#47800)
    * [conftest] Also wrap snapshot_download for EROFS fallback (#47796)
    * [conftest] Fix EROFS fallback for kernel downloads (correct interception point) (#47794)
    * [conftest] Fix EROFS fallback for kernel downloads via HfApi (#47791)
    * PR CI with torch 2.13 (#47767)
    * [CI - Debug] Skip /transformers-dependent steps for CPU runner (#47759)
    * [CI] Add CPU runner support to ssh-runner workflow (#47757)
    * Update daily CI Docker image to torch 2.13.0 / CUDA 13.0 (#47738)
    * Fix missing github_utils.py download in PR CI dashboard workflow (#47668)
    * byebye torch 2.4 (#47609)
    * Use --flake-runs=1 in check_bad_commit.py for PR comment CI (#47522)
    * Run only @slow tests in PR comment CI (#47521)
* @kaixuanliu
    * make examples under doc device agnostic (#47812)
    * cancel deterministic for XPU in gemma4 tests (#47790)
    * open fla support for XPU to benefit from the acceleration (#47799)
    * Fix DBRX MoE hidden size and expert GLU transposes (#47671)
    * Fix failing tests for axk1 and axk2 (#47727)
    * Fix failing tests for granite_swa and granitemoe_swa (#47723)
    * skip invalid test cases for inkling tests (#47493)
    * Fix failing tests for mimo_v2_flash (#47284)
    * Fix failing tests for zaya (#47268)
    * tipsv2_dpt: fix failing tests for XPU (#47292)
    * Fix some failed test cases related with XPU Expectations (#47173)
    * add paged attention tests support for XPU (#47163)
    * Fix multi-device mxfp4 dequantization race in `_convert_moe_packed_tensors` (#47423)
    * fix failed test cases for qwen3_omni_moe model (#47449)
    * Fix model tests for tipsv2 (#47356)
* @vasqu
    * Fix ci style (#47818)
    * 🚨 [`Kernels`] Refactor all linear attn models & native kernels fallback (#47630)
    * [`Kernels`] Refactor function handling (#46883)
    * Add AXK2 from SKT (#47528)
    * Add Harry to slow CI (#47454)
    * Update dev version on main (#47366)
    * [`FP8`] Bump kernels version (#47344)
* @kmswin1
    * Hotfix axk2 indexer norm (#47810)
    * Fix A.X-K2 fp8 modules_to_not_convert normalization for the gated-norm MLP (#47578)
    * add_axk1 (#46867)
* @remi-or
    * [Fix] Fix multi-head latent attention (MLA) (#47761)
    * [Fix] Wrong type hint in get_number_of_image_patches (#47788)
    * [Fix] Swapped height and width in KimiK25 (#47786)
    * Deprecate CB config in gen configuration (#47291)
    * [CB] Automatically switch attention implementation to flash (#47330)
* @juliendenize
    * [Mistral] Add native tekken tokenizer support to AutoTokenizer (#47507)
    * Make tokenization_mistral_common importable without mistral_common installed (#47397)
    * [Mistral] Move MistralConverter into integrations/mistral/ package (#46603)
* @IMvision12
    * Add support for batched Qwen2.5/3-Omni audio generation (#47186)
    * Fix Hunyuan-VL PIL image resize parity with reference preprocessing (#47233)
* @jiqing-feng
    * 🚨 Enable SDPA (and other attention backends) for T5 and propagate to the T5 family (#47014)
    * Fix shape mismatch in KyutaiSpeechToText `generate()` last window (#46952)
    * Fix typo in `MusicgenForCausalLM.generate()` (#46974)
    * Fix `BlockMask` crash in CTRL flex-attention generation (#46854)
* @tarekziade
    * CI: Log GitHub API diagnostics to stderr (#47635)
    * CI: Add serge review relay workflow and review rules (#47610)
    * CI: use a single function for GH calls (#47474)
    * CI: use transformers-ci daily workflow with OTEL (#47360)
    * CI: let's run integration failure cron at 10pm (#47537)
    * fixed the benchmark script with DistributedConfig  (#47568)
    * CI: fix torchaudio pinning +proper break in rnnt (#47422)
    * CI: add reproduce mode to serge verify caller (#47492)
    * CI: add serge verify (GPU) caller workflow (#47381)
    * ci: harden daily CI reporting against GitHub API rate limits (#47382)
    * Fix Daily CI reporting issues (#47364)
    * ci: Handle empty GitHub token in CI run lookup (#47362)
* @daviswer
    * Add Granite-swa and Granitemoe-swa model support (#47179)
* @ShareLer
    * Optimize flash attention max seqlen computation in vision attention (#47170)
* @atharvajoshi10
    * Fix Cosmos 3 Edge Patch packing order (#47399)
    * Add Cosmos3 Edge model support (#47181)

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.15.0` · 2026-08-10 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.15.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
