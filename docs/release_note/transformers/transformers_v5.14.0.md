---
title: "transformers v5.14.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.14.0"
version: "v5.14.0"
published: "2026-07-15"
type: "minor"
lang: "en"
summary: "Add Inkling model #47347 @Cyrilvallez @eustlb and @zucchini-nlp"
---

# transformers v5.14.0

# Release v5.14.0

## New Model additions

### Inkling (fresh from Thinking Machines): 975B total, 41B active

* Add Inkling model #47347 by @molbap @Cyrilvallez @eustlb and @zucchini-nlp 

<img width="3840" height="2160" alt="image" src="https://github.com/user-attachments/assets/051f819a-512f-4987-9bee-6e2fa2af3db7" />


Inkling is a general-purpose multimodal model that accepts text, image and audio inputs and
generates text outputs. It is intended for use in English and other languages, and across
multiple coding languages. The model is designed to be used by developers building AI-
powered applications, including agentic and tool-use systems, coding assistants, chatbots, and
retrieval-augmented generation systems, and is suitable for general-purpose conversational
use, instruction-following, and other natural language and multimodal tasks. It is released with
open weights to support research, fine-tuning and integration into third-party products by
downstream developers.




### TIPSv2
<img width="1555" height="1306" alt="image" src="https://github.com/user-attachments/assets/2d9f21e5-05f8-4c36-93ef-22f03c089f52" />

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/tipsv2)
* Add TIPSv2 (#46347) by @Ternura143 in [#46347](https://github.com/huggingface/transformers/pull/46347)

### TIPSv2 DPT
<img width="794" height="245" alt="image" src="https://github.com/user-attachments/assets/09c0d4da-6c1c-4229-bf02-a512ed435e50" />

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/tipsv2_dpt)
* Add TIPSv2 (#46347) by @Ternura143 in [#46347](https://github.com/huggingface/transformers/pull/46347)



## :rotating_light:  Breaking changes

GPTNeoX now remaps `embed_out` to `lm_head` and GPTBigCode has `_supports_attention_backend = True` enabled for vLLM compatibility; users relying on the previous weight naming or attention backend behavior for these models should update their code accordingly.
* :rotating_light: Fix GPTBigCode and GPTNeoX for the Transformers modelling backend for vLLM (#47198) by @hmellor


## Kernels

Several kernel-related fixes and improvements were made, including pinning the `kernels` dependency to a compatible version in the benchmark workflow, removing a deprecated `package_name` argument from `LocalLayerRepository`, and making the DeepGEMM Triton fallback more robust when `CUDA_HOME` is unset or misconfigured. Additionally, SDPA prefill was updated to leverage the FlashAttention kernel with `StaticCache`, yielding significant performance gains (up to 260% faster for large input sizes).


* Pin kernels to compatible version in benchmark workflow (#47339) by @tarekziade in [#47339]
* [Fix] Remove deprecated argument from `kernels` call (#47100) by @remi-or in [#47100]
* [Fix] Make DeepGEMM triton fallback more robust (#47126) by @remi-or in [#47126]
* [sdpa] Allow prefill to use FA kernel with StaticCache (#47094) by @Cyrilvallez in [#47094]


## Generation

Generation improvements include adding Multi-Token Prediction (MTP) decoding support, static ensemble verification for speculative decoding to improve draft token acceptance rates, and a fix for crashes in greedy assisted generation with different tokenizers. A misleading double-negative warning message for `synced_gpus` in continuous batching mode was also corrected.


* [generation] Fix misleading synced_gpus warning in continuous batching (#47158) by @Partha-Shankar in [#47158]
* [generate] Add proper MTP support (#46229) by @Cyrilvallez in [#46229]
* Fix crash in greedy assisted generation with different tokenizers (#46936) by @Sunt-ing in [#46936]
* [Generation] Add static ensemble verification for lossy speculative decoding (#45979) by @kasakh in [#45979]


## Performance

Fixed a Flash Attention performance regression affecting models like Qwen3-VL and resolved a MoE decode optimization bug where the grouped-to-batched matrix multiplication switch was not applied to experts residing in submodels (e.g., VLMs with a nested text config).


* Fix FA performance regression (#47134) by @andreasgoulas in [#47134]
* Fix MoE decode optimization for experts living in a submodel (#47107) by @IlyasMoutawwakil in [#47107]
* Make doc builds faster (#47099) by @mishig25 in [#47099]


## Cache

Cache dispatch logic was simplified by introducing explicit layer-type mappings for sliding and static layers, reducing complexity in cache routing. Additionally, fixes were made for read-only cache failures in CPU CI environments and for MPS graph cache growth during variable-length batch training on Apple Silicon.


* Fix CI read-only cache failures by patching cached_files in conftest (#47043) by @ydshieh in [#47043]
* trainer: clear MPS graph cache via torch_empty_cache_steps (#45818) by @anagnorisis2peripeteia in [#45818]
* [cache] Simplify cache dispatch based on layer_types (#47118) by @Cyrilvallez in [#47118]


## Bugfixes and improvements

* ci: cover xet as well (runtime error) (#47338) by @tarekziade in [#47338]
* [docs] TokenizersBackend fallback (#47302) by @stevhliu in [#47302]
* Resolve continuous batching XPU availability checks at runtime (#47185) by @kaixuanliu in [#47185]
* [Nit] Add kernels_fallback_ok kwarg to is_flash_attn_N_available (#47318) by @remi-or in [#47318]
* [Nit] Add expectations for gemma4 tests on H100 (#47311) by @remi-or in [#47311]
* [docs] DeepGEMM requirements (#47324) by @stevhliu in [#47324]
* DeepGEMM shouldn't pad on SM90 (#47313) by @IlyasMoutawwakil in [#47313]
* Fix half-precision torch.compile crash in DETR-family sine position embeddings (#47238) by @David-Wu1119 in [#47238]
* Fix hardcoded paths in siglip checkpoint/vocab loading (#47178) by @XanxusCrypto in [#47178]
* Update AMD CI runner groups to amd-mi300 (#47307) by @Abdennacer-Badaoui in [#47307]
* Point to Gemma 4 model in Gemma4ForCausalLM docstring example (#47255) by @lefft in [#47255]
* Fix Qwen Omni batched text postprocessing (#47197) by @Sunt-ing in [#47197]
* Fix AqlmConfig error messages to say "int" instead of "float" (#47089) by @Sreekant13 in [#47089]
* Fix check for interactive stdout in _style function (#47283) by @smart8986 in [#47283]
* Fix get_json_schema crash on non-string docstring choices (#47072) by @Sreekant13 in [#47072]
* Make `MODEL_IDS_TO_TOKENIZERS_BACKEND` capture all DeepSeek R1 distills (#47296) by @hmellor in [#47296]
* Update doc preprocessing regex to prevent ReDoS (#47187) by @WilliamRoyNelson in [#47187]
* Shard on read Dtensor aware (#46717) by @3outeille in [#46717]
* Switch AMD daily CI to mi300 runners (#47259) by @Abdennacer-Badaoui in [#47259]
* tests: reduce processor test memory usage by using tiny Hub checkpoints (#47213) by @ydshieh in [#47213]
* Torch compile backend defaults to "neuron" (#47035) by @michaelbenayoun in [#47035]
* Fix flash-attn Docker build broken by setuptools 83 removing pkg_resources (#47251) by @ydshieh in [#47251]
* Add heterogeneous config support (per-layer configuration) (#45333) by @eladsegal in [#45333]
* [fix] update integration test values (#47146) by @eustlb in [#47146]
* Fix DeepSpeed SP loss aggregation and LocalLayerRepository kwargs (#47073) by @sshivampeta in [#47073]
* tests only for the top 10 download models (#47244) by @3outeille in [#47244]
* Fix InputTokensDetails missing cache_write_tokens for openai>=2.34.0 (#47248) by @ydshieh in [#47248]
* Revert "Trigger a scheduled run" (#47249) by @ydshieh in [#47249]
* Remove Executorch from CI until latest version is supported and fully tested on CI env (#47242) by @IlyasMoutawwakil in [#47242]
* Be more defensive with `remap_legacy_layer_types` for custom models (#47245) by @hmellor in [#47245]
* Fix DistributedConfig docstring for unimplemented sp_plan  (#47237) by @3outeille in [#47237]
* Switch mlinter to 0.1.2 (#47172) by @tarekziade in [#47172]
* Trigger a scheduled run (#47209) by @ydshieh in [#47209]
* Make executorch exporter tests always use xnnpack backend (#47201) by @tarekziade in [#47201]
* No agent PR descriptions (#45790) by @Rocketknight1 in [#45790]
* Clarify that max_steps is required for datasets without __len__ (#47155) by @albertvillanova in [#47155]
* Cleanup pipelines, stop materializing generators (#47142) by @Rocketknight1 in [#47142]
* Fix device_map computation when the no_split_modules have different sizes (#47203) by @Cyrilvallez in [#47203]
* Add native FSDP2 module + migration (#46707) by @3outeille in [#46707]
* Fix experts implementation in two spots (#47097) by @remi-or in [#47097]
* [Fix] Remove old automatic cross attn pattern from output recorders (#47117) by @remi-or in [#47117]
* 🌐 [i18n-KO] Translate accelerator_selection.md to Korean (#47157) by @kkwjk2718 in [#47157]
* [i18n-KO] Translate optimum.md to Korean and fix Furiosa typo (#47156) by @kkwjk2718 in [#47156]
* [docs] fix curly quotes rendering to straight quotes (#47135) by @clijo in [#47135]
* Fix custom code which doesn't know about the new linear layer type names (#47174) by @hmellor in [#47174]
* Reject path traversal in the `transformers_weights` config field (#46890) by @LinZiyuu in [#46890]
* [docs] Custom code conversion mapping (#47114) by @stevhliu in [#47114]
* Add exporters min version requirements and test skip (#47161) by @IlyasMoutawwakil in [#47161]
* tests: reduce processor test memory usage and use tiny test assets (#47168) by @ydshieh in [#47168]
* Clarify input device placement in the Quicktour inference example (#47136) by @samyuktahegde in [#47136]
* Extend continuous batching memory prediction test to XPU (#47159) by @sywangyi in [#47159]
* Fix case where `_LazyAutoMapping.register` is passed a `str` key (#47148) by @hmellor in [#47148]
* [docs] MoE decode switching (#47149) by @stevhliu in [#47149]
* add XPU output expectations for minicpm3 tests (#47092) by @kaixuanliu in [#47092]
* Diffusion gemma: fix failed test cases (#47025) by @kaixuanliu in [#47025]
* add XPU Expectation for cosmos3_omni tests (#46880) by @kaixuanliu in [#46880]
* Fix IndexError Bug in XLMRoberta/Camembert ForMultipleChoice by restoring the pooler (#47147) by @pariidanDKE in [#47147]
* Skip caching_allocator_warmup on Neuron (no reuse pool to warm; currently OOMs) (#47029) by @dacorvo in [#47029]
* [docs] continuous batching (offloading behavior, max batch tokens, block size minimum) (#46925) by @stevhliu in [#46925]
* [docs] fix autolinks (#46968) by @stevhliu in [#46968]
* revert #47121 (#47144) by @eustlb in [#47144]
* Fix output labels for AudioFlamingo3 (and related) models (#47112) by @ebezzam in [#47112]
* Fix false __len__ claims in Trainer docstrings (#47131) by @albertvillanova in [#47131]
* processor tests: use tiny Hub repos to reduce CI memory (#47115) by @ydshieh in [#47115]
* [serge] Fix 12 integration tests for model `dac` failing with `output_mismatch` (tensor values differ (6), other (6)) (#47121) by @sergereview[bot] in [#47121]
* Fix CLI compatibility with huggingface_hub 1.22 (#47059) (#47064) by @dhruv7477 in [#47064]
* we want to run the CI in the release branches (#47125) by @tarekziade in [#47125]
* Small improvement (#47128) by @Cyrilvallez in [#47128]
* [Model] Support `use_cache=False` for DeepSeek V4 (#46965) by @kylesayrs in [#46965]
* docs-fix: IMDb dataset link in sequence classification guide (#47062) by @abhishekkapoorx in [#47062]
* Fix AltCLIP text embedding resize test (#47079) by @IMvision12 in [#47079]
* fix mask return-type contract regression and add correctness guard for (#47019) by @kaixuanliu in [#47019]
* Fix save_pretrained with offloading and weight conversions (#47018) by @Cyrilvallez in [#47018]
* Update dev (#47044) by @vasqu in [#47044]
* [`Gemma4`] Update 1 integration test (#47042) by @vasqu in [#47042]


## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @ArthurZucker
    * v5.14.0
* @tarekziade
    * ci: cover xet as well (runtime error) (#47338)
    * Pin kernels to compatible version in benchmark workflow (#47339)
    * Switch mlinter to 0.1.2 (#47172)
    * Make executorch exporter tests always use xnnpack backend (#47201)
    * Remove executorch from all-latest-gpu image + add torch smoke test (#47196)
    * we want to run the CI in the release branches (#47125)
* @remi-or
    * [Nit] Add kernels_fallback_ok kwarg to is_flash_attn_N_available (#47318)
    * [Nit] Add expectations for gemma4 tests on H100 (#47311)
    * [Fix] Remove deprecated argument from `kernels` call (#47100)
    * [Fix] Make DeepGEMM triton fallback more robust (#47126)
    * Fix experts implementation in two spots (#47097)
    * [Fix] Remove old automatic cross attn pattern from output recorders (#47117)
* @ydshieh
    * tests: reduce processor test memory usage by using tiny Hub checkpoints (#47213)
    * Fix flash-attn Docker build broken by setuptools 83 removing pkg_resources (#47251)
    * Fix InputTokensDetails missing cache_write_tokens for openai>=2.34.0 (#47248)
    * Revert "Trigger a scheduled run" (#47249)
    * Fix CI read-only cache failures by patching cached_files in conftest (#47043)
    * Trigger a scheduled run (#47209)
    * tests: reduce processor test memory usage and use tiny test assets (#47168)
    * processor tests: use tiny Hub repos to reduce CI memory (#47115)
* @eladsegal
    * Add heterogeneous config support (per-layer configuration) (#45333)
* @eustlb
    * [fix] update integration test values (#47146)
    * revert #47121 (#47144)
* @Ternura143
    * Add TIPSv2 (#46347)

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.14.0` · 2026-07-15 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.14.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
