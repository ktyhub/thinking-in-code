---
title: "peft v0.20.0"
project: "peft"
repo: "huggingface/peft"
tag: "v0.20.0"
version: "v0.20.0"
published: "2026-07-28"
type: "minor"
lang: "en"
---

# peft v0.20.0

# Highlights

<img width="1250" height="560" alt="peft-v0 20 0" src="https://github.com/user-attachments/assets/6194fae9-f3c3-48ca-b43b-40c774bfe6eb" />

This release adds no less than nine new PEFT methods and puts a lot of work into the surrounding infrastructure, for example adding a new image generation benchmark for the method comparison suite and greatly improving the documentation structure.

## New Methods

### HiRA

@hqsiswiliam added ["HiRA: Parameter-Efficient Hadamard High-Rank Adaptation for Large Language Models"](https://openreview.net/forum?id=TwJrTz9cRS) to PEFT (#2668). Instead of adding the low-rank product `BA` to the base weight, HiRA multiplies it elementwise (Hadamard product) with the frozen base weight. Because the base weight itself is full rank, the resulting update is no longer constrained to be low rank, while the trainable parameter count stays the same as LoRA's.

### GLoRA

@not-lain contributed GLoRA: ["One-for-All: Generalized LoRA for Parameter-Efficient Fine-Tuning"](https://arxiv.org/abs/2306.07967) in #3098. It is a flexible PEFT method that extends LoRA with configurable weight, activation, and bias adaptation, delivering richer fine-tuning with no extra inference cost. Use it when you need per-layer flexibility or stronger adaptation than vanilla LoRA. Skip it for non-Linear layers (e.g. Conv/Embedding) or when standard LoRA is already sufficient and simplicity matters.

### BEFT

@whubaichuan added ["BEFT: Bias-Efficient Fine-Tuning of Language Models"](https://arxiv.org/abs/2509.15974v2) in #3195. BEFT builds on the observation that fine-tuning bias terms alone can be competitive in low-data regimes, but goes further: rather than training *all* biases, it targets the value projection by default, as the authors found this to be most efficient. This brings the trainable parameter count down to roughly 0.01% of the total parameters.

### MonteCLoRA

@victor7246 integrated MonteCLoRA, ["Robust and Efficient Fine-tuning of LLMs with Bayesian Reparameterization of Low-Rank Adaptation"](https://openreview.net/forum?id=2HFmicB8kh) in #2943. LoRA is known to be sensitive to hyperparameters like learning rate and batch size. This new LoRA variant addresses this by treating the low-rank parameters as a distribution rather than a point estimate, using Monte Carlo estimation to obtain a low-variance posterior estimate. This should make training noticeably more robust, at the cost of only _O(rank)_ additional parameters.

### VeLoRA

@roymiles added VeLoRA: ["Memory Efficient Training using Rank-1 Sub-Token Projections"](https://arxiv.org/abs/2405.17991) in #3159. Unlike most PEFT methods, this LoRA variant targets activation memory rather than parameter count: intermediate activations are split into sub-tokens and compressed with a fixed rank-1 projection before being cached for the backward pass, then reconstructed during backpropagation. Conceptually, it is similar to gradient checkpointing, with a lower memory saving but running faster.

### Uni-LoRA

@KaiyangLi1992 contributed Uni-LoRA: ["One Vector is All You Need"](https://arxiv.org/abs/2506.00799) in #3257. The paper shows that parameter-efficient LoRA variants like VeRA and VB-LoRA can all be described as projecting the full LoRA parameter space down to a much smaller subspace, differing only in the choice of projection. Uni-LoRA uses a single global projection across the whole model instead of layer-wise ones, which allows cross-layer parameter sharing and thus very low parameter counts.

### FRoD

@Bane-Elvin added FRoD, ["Full-Rank Efficient Fine-Tuning with Rotational Degrees for Fast Convergence"](https://arxiv.org/abs/2512.23485), in #3270. Instead of adding low-rank deltas like LoRA, it reconstructs selected weights with shared rotational subspaces and sparse trainable coefficients. It is especially useful when fast convergence and a higher full-rank capacity ceiling are important, and its large sparse rotational subspace may also be promising for model merging. The main tradeoffs are the costly joint-decomposition initialization and slightly slower forward/backward passes than LoRA, so it may be less attractive for a one-off single-task fine-tune.

### MiCA

@sr-networks contributed MiCA, ["MiCA Learns More Knowledge Than LoRA and Full Fine-Tuning"](https://arxiv.org/abs/2604.01694), in #3260. MiCA is a LoRA variant that initializes `B` from the SVD of the base weight, taking the left singular vectors belonging to the *smallest* singular values, and then trains only `A`. The idea is that adapting these underused directions integrates new knowledge more effectively than adapting the dominant subspace, with less interference with existing capabilities.

### DEFT

@MAXNORM8650 added DEFT, ["Decompositional Efficient Fine-Tuning for Text-to-Image Models"](https://arxiv.org/abs/2509.22793), in #3342. This PEFT method splits a weight update into two learned low-rank parts: a projection that removes a sub-space of the frozen weight, and a low-rank update that injects new content in its place. Use DEFT for personalizing a text-to-image model from a few images while retaining the base model's instruction-following/editability with minimal forgetting. It is less of a fit if you don't need to preserve the base model's other capabilities (a plain additive adapter is simpler) or for layers beyond Linear/Conv1D. The [PaRa method](https://arxiv.org/abs/2406.05641) is also supported as a special case of DEFT.

## Enhancements

### Automatic LoRA target selection

@oswaldoludwig added `KappaTuneSelector` in #3106 based on ["The Condition Number as a Scale-Invariant Proxy for Information Encoding in Neural Units"](https://arxiv.org/abs/2506.16289). The PR adds a new function, `find_kappa_target_modules`, which automatically identifies which modules best to target based on the condition number of the base weight matrices. This removes some of the guesswork from choosing `target_modules` when configuring LoRA or other PEFT methods.

### Broader quantization support

#3117 adds generic quantization support to BOFT, MiSS, and VeRA, and #3321 does the same for SHiRA. Previously, quantization support had to be implemented per method and per backend; more methods now work with the common quantization backends out of the box. Note that as a consequence, VeRA now uses the generic quantization backend instead of its previous bitsandbytes quantization backend. If you encounter issues because of that, please let us know.

### Multiple adapters with `target_parameters`

`target_parameters`, which allows targeting `nn.Parameter`s directly (useful for MoE models that pack experts into a single parameter), now supports adding and loading multiple adapters (#3350).

### AdaLoRA for Conv2d

@Anai-Guo added `SVDConv2d` in #3196, so AdaLoRA can now target `torch.nn.Conv2d` layers.

### Documentation restructure

The [PEFT documentation](https://huggingface.co/docs/peft/index) was reorganized in #3300 and #3325, which should make it considerably easier to navigate now that PEFT supports so many methods. Each PEFT method also provides an overview of how well it fares in the PEFT benchmarks. There is also a long tail of documentation improvements from many contributors this release, thanks to everyone who worked on those.

## Changes

### AutoGPTQ deprecation

Following the switch to [GPT-QModel](https://github.com/ModelCloud/GPTQModel) as the backend in the previous release, AutoGPTQ is now formally deprecated (#3190) thanks to @Qubitium.

## Benchmarks

### Image generation benchmark

The method comparison suite now has an image generation benchmark (#3082). This complements the existing MetaMathQA benchmark and allows to compare PEFT methods on a completely different task. This gives us a more complete picture of the capabilities of different PEFT methods. To check the results, visit the [Gradio Space](https://huggingface.co/spaces/peft-internal-testing/PEFT-method-comparison) and on the top left, select the task "image-gen".

<img width="925" height="631" alt="Screenshot from 2026-07-28 15-48-53" src="https://github.com/user-attachments/assets/e6260b44-9b83-45b7-bd6c-d15bd429e006" />

_A look at the results from the image generation benchmark_

### MetaMathQA

Since the last release, we also made several improvements to the [MetaMathQA benchmark](https://github.com/huggingface/peft/method_comparison/MetaMathQA). You should check the updated results in the [Gradio Space](https://huggingface.co/spaces/peft-internal-testing/PEFT-method-comparison). With the help of the community, we now cover a much broader range of experiments. Moreover, we discovered a bug in the forgetting metric -- the new numbers now accurately reflect how much fine-tuning retains of the original knowledge of the base model.

### PEFT Shop

#3317 adds a new [Gradio Space](https://huggingface.co/spaces/peft-internal-testing/PEFT-shop) with the goal of making it very easy to compare different PEFT methods not only with regard to performance but also capabilities (e.g. if quantization is supported). Give this Space a visit to find out which PEFT method is the best fit for your use case.

<img width="1013" height="697" alt="Screenshot from 2026-07-28 15-30-21" src="https://github.com/user-attachments/assets/bd9ad132-a44f-4a2f-b28d-e499c9a5eaea" />

_Browse the PEFT shop for the best PEFT method for your use case_

## All Changes

* chore: bump doc-builder SHA for PR upload workflow by @rtrompier in https://github.com/huggingface/peft/pull/3162
* Benchmark results for new methods by @githubnemo in https://github.com/huggingface/peft/pull/3160
* fix: guard UPCAST_DTYPES lookup with hasattr to support older PyTorch by @Anai-Guo in https://github.com/huggingface/peft/pull/3161
* Bump version to 0.19.1.dev0 after release by @BenjaminBossan in https://github.com/huggingface/peft/pull/3156
* ENH: Option for gradient checkpointing in MetaMath by @BenjaminBossan in https://github.com/huggingface/peft/pull/3157
* MetaMathQA: upload checkpoint to bucket after training by @githubnemo in https://github.com/huggingface/peft/pull/3163
* FIX How to swapped in/out features for transposed by @BenjaminBossan in https://github.com/huggingface/peft/pull/3165
* Implement import allowlist in AutoPeftModel, limit access in megatron by @githubnemo in https://github.com/huggingface/peft/pull/3090
* Refactor layer initialization: PR 2960 continued by @BenjaminBossan in https://github.com/huggingface/peft/pull/3047
* Fix SVDQuantLinear __repr__ nested inside forward instead of on the class by @Chessing234 in https://github.com/huggingface/peft/pull/3174
* Resolve #2944: ensure_weight_tying respects config + improved tests by @Adya-Prasad in https://github.com/huggingface/peft/pull/3171
* FIX Clip module structure since transformers > 5.5 by @BenjaminBossan in https://github.com/huggingface/peft/pull/3179
* Bump version to 0.19.2.dev0 after release by @BenjaminBossan in https://github.com/huggingface/peft/pull/3178
* FIX TinyLoRA non-determinism by @BenjaminBossan in https://github.com/huggingface/peft/pull/3180
* FIX VeRA and OFT error after layer init refactor by @BenjaminBossan in https://github.com/huggingface/peft/pull/3187
* fix the test_hotswapping_compiled_model_xxx case of diffusers failure… by @sywangyi in https://github.com/huggingface/peft/pull/3183
* CI Fix GPTQmodel install in Docker build by @BenjaminBossan in https://github.com/huggingface/peft/pull/3188
* fix aux4 kwargs-only modules in modules_to_save by @ved1beta in https://github.com/huggingface/peft/pull/3199
* chore: bump doc-builder SHA for main doc build workflow by @rtrompier in https://github.com/huggingface/peft/pull/3198
* FIX PVeRA forward implementation for bitsandbytes by @BenjaminBossan in https://github.com/huggingface/peft/pull/3189
* Update GPT-QModel references and deprecate AutoGPTQ by @Qubitium in https://github.com/huggingface/peft/pull/3190
* FIX Transformers weight conversion regression by @BenjaminBossan in https://github.com/huggingface/peft/pull/3197
* Add a generator to the PVeRA reparameterization function. by @leofillioux in https://github.com/huggingface/peft/pull/3200
* Add BEFT as a new PEFT method by @whubaichuan in https://github.com/huggingface/peft/pull/3195
* feat(adalora): add SVDConv2d to support torch.nn.Conv2d target modules by @Anai-Guo in https://github.com/huggingface/peft/pull/3196
* MiSS update by @Joluck in https://github.com/huggingface/peft/pull/3194
* Bump actions/cache from 5.0.4 to 5.0.5 in the ci-actions group by @dependabot[bot] in https://github.com/huggingface/peft/pull/3206
* Bump the third-party-actions group with 7 updates by @dependabot[bot] in https://github.com/huggingface/peft/pull/3207
* FIX Error when prefix tuning Gemma 4 by @BenjaminBossan in https://github.com/huggingface/peft/pull/3205
* FIX Use tiny Gemma 4 model for faster tests by @BenjaminBossan in https://github.com/huggingface/peft/pull/3215
* FIX State dict injection with weight conversion by @BenjaminBossan in https://github.com/huggingface/peft/pull/3212
* fix: use torch.div in _ConvNd.unmerge for bias (was torch.mul) by @Chessing234 in https://github.com/huggingface/peft/pull/3216
* Pull Request: Adding HiRA integration into PEFT library by @hqsiswiliam in https://github.com/huggingface/peft/pull/2668
* Add KappaTuneSelector: condition-number-based automatic LoRA target selection by @oswaldoludwig in https://github.com/huggingface/peft/pull/3106
* Implement VeLoRA and add tests. by @roymiles in https://github.com/huggingface/peft/pull/3159
* Add type hints to utility functions in merge_utils and other modules by @RudrenduPaul in https://github.com/huggingface/peft/pull/3144
* fix compatible issue with datasets version for beft example by @kaixuanliu in https://github.com/huggingface/peft/pull/3218
* refine test case for `test_lora_seq2seq_lm_multi_gpu_inference` by @kaixuanliu in https://github.com/huggingface/peft/pull/3226
* fix CI bug for multi-device scene by @kaixuanliu in https://github.com/huggingface/peft/pull/3228
* refine test_causal_lm_training_multi_accelerator test case by @kaixuanliu in https://github.com/huggingface/peft/pull/3225
* CHORE: Upgrade ruff 0.15.12 by @BenjaminBossan in https://github.com/huggingface/peft/pull/3202
* DOC Improve LoHa docs with overview, when-to-use, and quick start exa… by @Dhruv-1710 in https://github.com/huggingface/peft/pull/3224
* fix(xlora): duplicated "for" in adapters warning message by @vip892766gma in https://github.com/huggingface/peft/pull/3235
* docs: improve MiSS documentation with practical guidance and LLM example by @vedantnavle13 in https://github.com/huggingface/peft/pull/3231
* CI Remove Transformer Engine from Dockerfile by @BenjaminBossan in https://github.com/huggingface/peft/pull/3248
* Intergrate MonteCLoRA (TMLR 2025 accepted) into PEFT by @victor7246 in https://github.com/huggingface/peft/pull/2943
* Bump diffusers from 0.34.0 to 0.38.0 in /examples/hra_dreambooth by @dependabot[bot] in https://github.com/huggingface/peft/pull/3250
* chore: add missing return type annotations in import_utils and other by @lphuc2250gma in https://github.com/huggingface/peft/pull/3245
* TST Remove unnecessary use of trust_remote_code by @BenjaminBossan in https://github.com/huggingface/peft/pull/3242
* Fix prepare model for compiled hotswap requires grad by @BenjaminBossan in https://github.com/huggingface/peft/pull/3241
* DOC Fix incorrect imports in helpers.py docstring examples by @blipbyte in https://github.com/huggingface/peft/pull/3249
* FIX Transformers weight conversion undo incorrect key renaming by @BenjaminBossan in https://github.com/huggingface/peft/pull/3262
* [BUG FIX] tuners/lora/eva: fix label mask guard using 'in' instead of hasattr for dict by @Dev-X25874 in https://github.com/huggingface/peft/pull/3247
* chore: add missing return type annotations by @lphuc2250gma in https://github.com/huggingface/peft/pull/3272
* TST Correctly resolve GLUE dataset by @BenjaminBossan in https://github.com/huggingface/peft/pull/3263
* SEC Add 7 day cooldown to Dependabot by @BenjaminBossan in https://github.com/huggingface/peft/pull/3273
* DOC Fix broken docstring examples in tuner model.py files by @blipbyte in https://github.com/huggingface/peft/pull/3254
* Bump the third-party-actions group with 4 updates by @dependabot[bot] in https://github.com/huggingface/peft/pull/3276
* fix(tuners/lora/torchao): make get_apply_tensor_subclass optional (#3223) by @Anai-Guo in https://github.com/huggingface/peft/pull/3234
* FIX Transformers weight conversion PEFT model prefix by @BenjaminBossan in https://github.com/huggingface/peft/pull/3230
* FIX Transformers argument name in rename_source_key by @BenjaminBossan in https://github.com/huggingface/peft/pull/3284
* DOC Fix incorrect class references in tuner config docstrings by @javierdejesusda in https://github.com/huggingface/peft/pull/3286
* Avoid TP helper imports for non-TP distributed LoRA loads by @jiqing-feng in https://github.com/huggingface/peft/pull/3261
* Add BEFT and HiRA results by @githubnemo in https://github.com/huggingface/peft/pull/3277
* Add PVeRA rank ablation benchmark experiments by @anrohanro in https://github.com/huggingface/peft/pull/3256
* experiment method comparison #2310 : adaptation_prompt by @Adya-Prasad in https://github.com/huggingface/peft/pull/3301
* Add decoupled weight-decay one-step update test by @eSVeeF in https://github.com/huggingface/peft/pull/3296
* Image generation benchmark by @BenjaminBossan in https://github.com/huggingface/peft/pull/3082
* Generic quantization support for BOFT, MiSS, VeRA by @BenjaminBossan in https://github.com/huggingface/peft/pull/3117
* CI GPU run: Remove gptmodel from Dockerfile because of pcre by @BenjaminBossan in https://github.com/huggingface/peft/pull/3253
* DOC Fix wrong function name in docstring by @BenjaminBossan in https://github.com/huggingface/peft/pull/3281
* FIX Saving adapter when other adapters partially match name by @BenjaminBossan in https://github.com/huggingface/peft/pull/3282
* TST Regression tests download regression artifacts lazily by @BenjaminBossan in https://github.com/huggingface/peft/pull/3285
* CHORE Add instructions for coding agents by @BenjaminBossan in https://github.com/huggingface/peft/pull/3288
* FIX TST Failing HiRA and EETQ GPU tests. by @BenjaminBossan in https://github.com/huggingface/peft/pull/3287
* Separate, embeddable method comparison space by @githubnemo in https://github.com/huggingface/peft/pull/3303
* FIX Image benchmark dataset wrong prompt order by @BenjaminBossan in https://github.com/huggingface/peft/pull/3308
* Fix app deployment CI issue by @githubnemo in https://github.com/huggingface/peft/pull/3312
* Method comparison: Image generation results by @BenjaminBossan in https://github.com/huggingface/peft/pull/3313
* Method comparison: Evaluation script for image gen benchmark by @BenjaminBossan in https://github.com/huggingface/peft/pull/3314
* Fix app deployment CI issue by @githubnemo in https://github.com/huggingface/peft/pull/3316
* Method comparison: Image benchmark shows sample images by @BenjaminBossan in https://github.com/huggingface/peft/pull/3309
* FIX layers_to_transform matching wrong index in MoE models by @MichalMraz in https://github.com/huggingface/peft/pull/3318
* Documentation re-structure by @githubnemo in https://github.com/huggingface/peft/pull/3300
* docs: fix typos in OFTConfig docstring (paramters, speficy) by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3326
* FIX AdaMSS save/load reproduction by making slice_pca SVD deterministic by @AshNicolus in https://github.com/huggingface/peft/pull/3310
* Docs: Make API reference sorted and collapsed by @githubnemo in https://github.com/huggingface/peft/pull/3325
* FEAT Add PEFT shop Gradio space by @BenjaminBossan in https://github.com/huggingface/peft/pull/3317
* FIX PEFT Shop deployment workflow error by @BenjaminBossan in https://github.com/huggingface/peft/pull/3332
* FIX PEFT Shop deployment workflow error 2 by @BenjaminBossan in https://github.com/huggingface/peft/pull/3334
* FIX PEFT shop app description extraction by @BenjaminBossan in https://github.com/huggingface/peft/pull/3335
* docs: sync PEFT config docstrings with their fields by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3319
* MetaMathQA: Optimized configs for IA3 by @githubnemo in https://github.com/huggingface/peft/pull/3337
* Fix typos in docstrings, comments, and docs by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3328
* Feature/add frod by @Bane-Elvin in https://github.com/huggingface/peft/pull/3270
* refactor: dedupe prompt-learning kwarg adjustments in peft_model by @eSVeeF in https://github.com/huggingface/peft/pull/3336
* docs: clarify subtract_mutated_init by @githubnemo in https://github.com/huggingface/peft/pull/3343
* DOC Fix incorrect LoRA references in hira and ln_tuning model docstrings by @javierdejesusda in https://github.com/huggingface/peft/pull/3291
* FIX Bug when targeting an nn.Parameter on the root module by @BenjaminBossan in https://github.com/huggingface/peft/pull/3302
* DOC: fix adapter_names parameter name in set_requires_grad docstrings by @kratos0718 in https://github.com/huggingface/peft/pull/3271
* TST Add tests for hotswapping targeted LoRA parameters by @BenjaminBossan in https://github.com/huggingface/peft/pull/3304
* Mica by @sr-networks in https://github.com/huggingface/peft/pull/3260
* TST Extend multiple active adapter tests by @BenjaminBossan in https://github.com/huggingface/peft/pull/3361
* fix: increase FRoD init_weights=False std to prevent flaky test by @peft-jambot in https://github.com/huggingface/peft/pull/3353
* CI Tests: Extend ignored paths by @BenjaminBossan in https://github.com/huggingface/peft/pull/3339
* CI Skip EETQ test if kernel not found by @BenjaminBossan in https://github.com/huggingface/peft/pull/3351
* Add DoRA experiment for image-gen benchmark by @spideyashith in https://github.com/huggingface/peft/pull/3341
* FIX Upcast bf16 adapters to fp32 on CPU in MultiheadAttention and VBLoRA delta weight by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3364
* FIX Mixed: honor bias='<prefix>_only' for all compatible tuners (not just lora_only) by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3366
* Sync function docstrings with their signatures by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3329
* TST Add dedicated BD-LoRA math-correctness test suite (follow-up to #2895) by @eSVeeF in https://github.com/huggingface/peft/pull/3362
* FIX Call super().__post_init__() in CPTConfig and RandLoraConfig by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3365
* add glora by @not-lain in https://github.com/huggingface/peft/pull/3098
* Add UniLora tuner to PEFT by @KaiyangLi1992 in https://github.com/huggingface/peft/pull/3257
* FIX Remove duplicate VBLoRAConfig entry from peft.__all__ by @SHAI-Akshay-Tripathi in https://github.com/huggingface/peft/pull/3279
* Bump the ci-actions group with 4 updates by @dependabot[bot] in https://github.com/huggingface/peft/pull/3374
* DOC Fix LoRA-GA 'Usage Tips' subsection by @BenjaminBossan in https://github.com/huggingface/peft/pull/3331
* FEAT Add DEFT (Decompositional Efficient Fine-Tuning (NeurIPS'25) by @MAXNORM8650 in https://github.com/huggingface/peft/pull/3342
* ENH Allow multiple adapters when using target_parameters by @BenjaminBossan in https://github.com/huggingface/peft/pull/3350
* Docs: Improve VeRA conceptual explanation and parameter scaling by @SanjayMuthuswamy in https://github.com/huggingface/peft/pull/3386
* docs: fix missing torch import and variable name in README examples by @lxcxjxhx in https://github.com/huggingface/peft/pull/3392
* CI Pin kernels version by @BenjaminBossan in https://github.com/huggingface/peft/pull/3377
* FIX Resolve regex target_modules in MoE config conversion by @1fanwang in https://github.com/huggingface/peft/pull/3232
* Make doc builds faster by @mishig25 in https://github.com/huggingface/peft/pull/3393
* TST Skip failing Diffusers tests until v0.40.0 by @BenjaminBossan in https://github.com/huggingface/peft/pull/3394
* fix(utils): call empty_cache() after fp16→fp32 casts in prepare_model_for_kbit_training by @umutonuryasar in https://github.com/huggingface/peft/pull/3293
* Add default target_modules for nemotron_h hybrid Mamba-MoE models by @A1c0r-Z in https://github.com/huggingface/peft/pull/3289
* CI Fix error with Windows loading stable diffusion models by @BenjaminBossan in https://github.com/huggingface/peft/pull/3399
* feat: registry-based dispatch for resolve_lora_variant in Linear layer by @isha822 in https://github.com/huggingface/peft/pull/3219
* fix: remove dead code in LoRA get_delta_weight and fix unsafe merge dtype inconsistency by @lxcxjxhx in https://github.com/huggingface/peft/pull/3396
* Fix typos in examples, tests, and docs by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3398
* DOC Expand contributing installation guide with fork and setup steps by @Strongich in https://github.com/huggingface/peft/pull/3406
* FIX Register per-adapter containers so delete_adapter removes them (unilora, fourierft, psoft) by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3376
* FIX Crash in reduce_intruder_dimension on fp16/bf16 adapters with autocast_adapter_dtype=False by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3410
* FIX GLoRA safe_merge mutating the base layer before the isfinite check by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3411
* fix device mismatch for bnb dequantization by @kaixuanliu in https://github.com/huggingface/peft/pull/3418
* Minor app embed improvements by @githubnemo in https://github.com/huggingface/peft/pull/3322
* Improve IA3 documentation: add usage guidance, module selection tips, and LoRA comparison by @DresdenGman in https://github.com/huggingface/peft/pull/3417
* FIX Bug in forgetting metric in MetaMathQA by @BenjaminBossan in https://github.com/huggingface/peft/pull/3419
* Create SECURITY.md by @githubnemo in https://github.com/huggingface/peft/pull/3432
* Update MetaMAthQA results by @githubnemo in https://github.com/huggingface/peft/pull/3445
* fix: upgrade http:// to https:// in README by @hanu-14 in https://github.com/huggingface/peft/pull/3454
* CI: Bump the third-party-actions group across 1 directory with 7 updates by @dependabot[bot] in https://github.com/huggingface/peft/pull/3375
* Return False from is_gptqmodel_available when gptqmodel isn't installed by @c-tonneslan in https://github.com/huggingface/peft/pull/3255
* Method comparison: Fix adaption prompt experiment by @BenjaminBossan in https://github.com/huggingface/peft/pull/3463
* fix: replace bare except with except Exception by @lxcxjxhx in https://github.com/huggingface/peft/pull/3462
* Fix BdLoraConfig.nblocks default being a tuple instead of an int by @Osamaali313 in https://github.com/huggingface/peft/pull/3456
* ENH: Warn in get_peft_model when base model parameters are on the meta device by @immu4989 in https://github.com/huggingface/peft/pull/3415
* Track git dirty state in method_comparison benchmark results (#3384) by @eduanmoldeep in https://github.com/huggingface/peft/pull/3464
* FIX DeLoRA crash with UnboundLocalError on unsupported layers by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3434
* FIX HiRA ConvNd layers with groups > 1 crash on forward, not just merge by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3430
* FIX TinyLoRA weight_tying corruption when adding overlapping adapters by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3422
* FIX DEFT's cached merge factor: precision loss and device staleness by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3412
* FIX MiSS with bat init error with some quantization backends by @BenjaminBossan in https://github.com/huggingface/peft/pull/3381
* Release 0.20.0 by @BenjaminBossan in https://github.com/huggingface/peft/pull/3388
* Update AdaptionPrompt results by @githubnemo in https://github.com/huggingface/peft/pull/3466
* Add quantization support for SHiRA by @githubnemo in https://github.com/huggingface/peft/pull/3321
* Fix grouped convolutions in LoHa and LoKr by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3440
* fix: respect layer-specific LoRA-FA scaling in optimizer by @eSVeeF in https://github.com/huggingface/peft/pull/3315
* FIX grouped Conv2d LoRA rank padding for hotswapping (#3416) by @eSVeeF in https://github.com/huggingface/peft/pull/3427
* Fix Gemma4 prefix tuning with per_layer_config by @peft-jambot in https://github.com/huggingface/peft/pull/3471
* AI: Update contribution guide based on recent experience by @BenjaminBossan in https://github.com/huggingface/peft/pull/3459
* CI Enable test coverage only on one of the runs by @BenjaminBossan in https://github.com/huggingface/peft/pull/3469
* Validate GraLoRA, AdaLoRA, WaveFT, and AdaMSS configs by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3438
* Forward revision and token in AutoPeftModel loading by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3442
* Add get base model state dict by @Isalia20 in https://github.com/huggingface/peft/pull/3000
* Imagegen results for new PEFT methods by @githubnemo in https://github.com/huggingface/peft/pull/3483

## New Contributors

* @rtrompier made their first contribution in https://github.com/huggingface/peft/pull/3162
* @Anai-Guo made their first contribution in https://github.com/huggingface/peft/pull/3161
* @Adya-Prasad made their first contribution in https://github.com/huggingface/peft/pull/3171
* @whubaichuan made their first contribution in https://github.com/huggingface/peft/pull/3195
* @hqsiswiliam made their first contribution in https://github.com/huggingface/peft/pull/2668
* @oswaldoludwig made their first contribution in https://github.com/huggingface/peft/pull/3106
* @roymiles made their first contribution in https://github.com/huggingface/peft/pull/3159
* @RudrenduPaul made their first contribution in https://github.com/huggingface/peft/pull/3144
* @Dhruv-1710 made their first contribution in https://github.com/huggingface/peft/pull/3224
* @vip892766gma made their first contribution in https://github.com/huggingface/peft/pull/3235
* @vedantnavle13 made their first contribution in https://github.com/huggingface/peft/pull/3231
* @victor7246 made their first contribution in https://github.com/huggingface/peft/pull/2943
* @lphuc2250gma made their first contribution in https://github.com/huggingface/peft/pull/3245
* @blipbyte made their first contribution in https://github.com/huggingface/peft/pull/3249
* @Dev-X25874 made their first contribution in https://github.com/huggingface/peft/pull/3247
* @javierdejesusda made their first contribution in https://github.com/huggingface/peft/pull/3286
* @anrohanro made their first contribution in https://github.com/huggingface/peft/pull/3256
* @eSVeeF made their first contribution in https://github.com/huggingface/peft/pull/3296
* @MichalMraz made their first contribution in https://github.com/huggingface/peft/pull/3318
* @DaoyuanLi2816 made their first contribution in https://github.com/huggingface/peft/pull/3326
* @AshNicolus made their first contribution in https://github.com/huggingface/peft/pull/3310
* @Bane-Elvin made their first contribution in https://github.com/huggingface/peft/pull/3270
* @kratos0718 made their first contribution in https://github.com/huggingface/peft/pull/3271
* @sr-networks made their first contribution in https://github.com/huggingface/peft/pull/3260
* @peft-jambot made their first contribution in https://github.com/huggingface/peft/pull/3353
* @spideyashith made their first contribution in https://github.com/huggingface/peft/pull/3341
* @not-lain made their first contribution in https://github.com/huggingface/peft/pull/3098
* @KaiyangLi1992 made their first contribution in https://github.com/huggingface/peft/pull/3257
* @SHAI-Akshay-Tripathi made their first contribution in https://github.com/huggingface/peft/pull/3279
* @MAXNORM8650 made their first contribution in https://github.com/huggingface/peft/pull/3342
* @SanjayMuthuswamy made their first contribution in https://github.com/huggingface/peft/pull/3386
* @lxcxjxhx made their first contribution in https://github.com/huggingface/peft/pull/3392
* @1fanwang made their first contribution in https://github.com/huggingface/peft/pull/3232
* @umutonuryasar made their first contribution in https://github.com/huggingface/peft/pull/3293
* @A1c0r-Z made their first contribution in https://github.com/huggingface/peft/pull/3289
* @isha822 made their first contribution in https://github.com/huggingface/peft/pull/3219
* @Strongich made their first contribution in https://github.com/huggingface/peft/pull/3406
* @DresdenGman made their first contribution in https://github.com/huggingface/peft/pull/3417
* @hanu-14 made their first contribution in https://github.com/huggingface/peft/pull/3454
* @c-tonneslan made their first contribution in https://github.com/huggingface/peft/pull/3255
* @Osamaali313 made their first contribution in https://github.com/huggingface/peft/pull/3456
* @immu4989 made their first contribution in https://github.com/huggingface/peft/pull/3415
* @eduanmoldeep made their first contribution in https://github.com/huggingface/peft/pull/3464

**Full Changelog**: https://github.com/huggingface/peft/compare/v0.19.0...v0.20.0

---

> **Source** [huggingface/peft](https://github.com/huggingface/peft) · `v0.20.0` · 2026-07-28 · [upstream release](https://github.com/huggingface/peft/releases/tag/v0.20.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
