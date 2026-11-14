---
title: "peft v0.21.0"
project: "peft"
repo: "huggingface/peft"
tag: "v0.21.0"
version: "v0.21.0"
published: "2026-09-15"
type: "minor"
lang: "en"
---

# peft v0.21.0

# Highlights

<img width="1248" height="560" alt="peft-v0 21 0" src="https://github.com/user-attachments/assets/c2b8b162-6564-4c7f-b5b6-130b8808ea18" />

## New methods

### Riemannian-preconditional LoRA optimizer

Riemannian-preconditioned LoRA optimizer (#3382), contributed by @smellslikeml, is a new LoRA-specific optimizer similar to [LoRA-FA](https://huggingface.co/docs/peft/main/en/package_reference/lora#lora-fa-optimizer) or [LoRA+](https://huggingface.co/docs/peft/main/en/package_reference/lora#lora-optimized-lora) that applies a Riemannian pre-conditioning on the gradients to improve feature learning and avoiding separate tuning of learning rates for LoRA's A and B matrices.

### LoRA variant: Knowledge-Aware Singular-Value Adaption (KaSA)

[KaSA](https://huggingface.co/docs/peft/main/en/package_reference/lora_variant_kasa) aims at identifying knowledge aware singular values from the base weight. It then removes noisy knowledge from those weights and specifically trains the singular values most relevant to the task. Implemented in #3446 by @robbiebusinessacc and @iambogeumkim.

### Super-Tuning (#3518)

[Super-Tuning](https://huggingface.co/docs/peft/main/en/package_reference/supertuning) uses calibration-free magnitude scoring to allocate a sparse tuning budget. With `BottomK` selection, Super adapts low-magnitude weights, motivated by the idea that they provide degrees of freedom for learning a new task while leaving larger-magnitude pretrained weights untouched. Supra adds LoRA on top of this sparse update. It is a good fit for exploring sparsity alongside higher-rank adaptation, particularly on reasoning-heavy fine-tuning tasks. Thanks to @smellslikeml.

### ShadowPEFT (#3354)

[ShadowPEFT](https://huggingface.co/docs/peft/main/en/package_reference/shadow) runs a small shadow network alongside the frozen base model.  That shadow state gets updated at every decoder layer, so adaptation is shared across the stack instead of a separate low-rank update on each targeted linear layer (like LoRA). It’s a good choice when you care about downstream or OOD performance and want to stay in the same trainable-parameter range as LoRA, or when you want the small shadow on the edge and the frozen base in the cloud. This works best if the shadow model starts from a small, pretrained model. Contributed by @SeanLee97.

## Enhancements

* Speed up MoE target parameter computation (#3577): For the common use case of one active adapter, weight and MoE LoRA delta computation is folded into a single `baddbmm` operation. Expect slight numerical differences in this case.

* Support torchao v0.18.0 by supporting the newer Int8Tensor, Float8Tensor, etc. tensor subclasses.

* [Orthogonal Subspace Fine-tuning](https://huggingface.co/docs/peft/main/en/package_reference/osf) received a significant update in #3524 reducing the memory footprint by 22% and the training time by 46% according to the MetaMathQA benchmark while keeping task accuracy and forgetting stable. Expect slight numerical differences, especially in fp16, bf16.

* https://github.com/huggingface/peft/pull/3639: Thanks to @amogh-nagri-11, prompt learning methods now allow to delete an adapter. For adaption prompt, adding or loading a second adapter no longer automatically activates it, in line with how other PEFT methods handle this.


## Changes

### Refactored state dict handling (#3490)

An internal change moved state dict loading/saving method-specific code paths to the respective tuners. This should be transparent to the end-user and was extensively tested and should work exactly the same as previously, but if you suspect that the model behaves differently, let us know.

### Preserved adapter trainablity during injection (#3495)

Previously, when loading or adding a second, third etc. adapter, this could affect the `requires_grad` of the existing adapter (or base model), depending on the value of `is_trainable`. This should no longer be the case thanks to @DaoyuanLi2816.

### Bug fixes for LoRA adapter combining (#3111)

Combining LoRA adapters using `add_weighted_adapter` had a bug in the `SVD` path which led to the LoRA scaling being applied twice. This is now fixed.

### OFT uses generic quantization backend (#3355)

We moved OFT from a method-specific quantization backend to the generic quantization backend. This affects bitsandbytes, GPT-Q, etc. This should not affect existing checkpoints, but please let us know if you run into issues.

### Stricter checks on adapter handling

* #3667: `inject_adapter_in_model` now rejects PEFT methods that have shared state that would live on the parent model (like VeRA), as no such parent model exists. Contributed by @CoralGarden52.

* #3534: Thanks to @LK-maker-007, the PEFT now throws an error when adding a second adapter to the PEFT model using `add_adapter` that targets non-existing layers. Before, the adapter would just not adapt anything but be silent about it.  `peft_model.targeted_module_names` and `peft_model.targeted_parameter_names` no longer contain duplicates. They are still sorted by insertion order (not sets). To suppress potential errors, catch `peft.PeftError`.

* #3504: When deleting an adapter, there is now a check if the adapter is merged. If it's merged, an error is raised, since deleting it would not remove its effect. This was contributed by @DaoyuanLi2816.

## All Changes
* Fix sequential merge invariants for FRoD, HiRA, and PEANuT by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3482
* docs: improve VeRA documentation by @Ashmitharaja in https://github.com/huggingface/peft/pull/3476
* Bump version to 0.20.1.dev0 by @BenjaminBossan in https://github.com/huggingface/peft/pull/3484
* Fix DeepSpeed guide example script path by @latent-9 in https://github.com/huggingface/peft/pull/3494
* CI: Bump the ci-actions group with 2 updates by @dependabot[bot] in https://github.com/huggingface/peft/pull/3496
* chore: update torch_compile_tests.yml by @hf-security-analysis[bot] in https://github.com/huggingface/peft/pull/3501
* Add Riemannian-preconditioned LoRA optimizer by @smellslikeml in https://github.com/huggingface/peft/pull/3382
* docs: API coverage tooling + fixes by @githubnemo in https://github.com/huggingface/peft/pull/3465
* ENH Add KaSA (Knowledge-aware Singular-value Adaptation) as a LoRA variant by @robbiebusinessacc in https://github.com/huggingface/peft/pull/3446
* FIX Crash when unloading a model whose active adapter does not use modules_to_save by @javierdejesusda in https://github.com/huggingface/peft/pull/3455
* TST Add regression tests for PEFT checkpoint loading by @BenjaminBossan in https://github.com/huggingface/peft/pull/3489
* Reject deletion of merged adapters by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3504
* TST Add RandLoRA to feature extraction, decoder, encoder-decoder and seq classifier tests by @ishan-1010 in https://github.com/huggingface/peft/pull/3513
* Check merged adapters when merging trainable tokens one at a time by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3514
* CHORE Improve type annotations of PeftModel and get_peft_model by @BenjaminBossan in https://github.com/huggingface/peft/pull/3493
* FIX Route embedding LoRA params to the LoRA+ embedding group by @Kaif10 in https://github.com/huggingface/peft/pull/3503
* MetaMathQA: consistent tokenizer padding behavior by @githubnemo in https://github.com/huggingface/peft/pull/3526
* docs: add installation instructions for NVIDIA Spark (ARM64) devices by @mfuntowicz in https://github.com/huggingface/peft/pull/3536
* Add type hints to helpers.py, hotswap.py, constants.py, integrations.py (consolidates #3448, #3452) by @RudrenduPaul in https://github.com/huggingface/peft/pull/3529
* Refactor state dict handling by @BenjaminBossan in https://github.com/huggingface/peft/pull/3490
* TST Fix some multi GPU tests by @BenjaminBossan in https://github.com/huggingface/peft/pull/3458
* Method comparison: Small optimizations to image-gen by @BenjaminBossan in https://github.com/huggingface/peft/pull/3523
* FIX TST Use distributed_config kwarg for TP tests with transformers >= 5.13 by @peft-jambot in https://github.com/huggingface/peft/pull/3502
* FIX Issue with key matching when dealing with disk offloading by @BenjaminBossan in https://github.com/huggingface/peft/pull/3468
* FEAT Add git dirty flag to method_comparison benchmark results by @peft-jambot in https://github.com/huggingface/peft/pull/3385
* Method comparison: Reduce peak memory usage of image generation task by @BenjaminBossan in https://github.com/huggingface/peft/pull/3395
* CHORE Upgrade ruff to 0.16.2 by @BenjaminBossan in https://github.com/huggingface/peft/pull/3545
* FIX Accept layers_to_transform=0 together with layers_pattern by @winklemad in https://github.com/huggingface/peft/pull/3425
* Docs: cuda windows arm64 update installation guidelines by @mfuntowicz in https://github.com/huggingface/peft/pull/3550
* MetaMathQA: Add bank-1024 VBLoRA configuration by @szzhoujiarui in https://github.com/huggingface/peft/pull/3546
* make device agnostic in docs and examples README by @kaixuanliu in https://github.com/huggingface/peft/pull/3551
* method_comparison/LoKr: new hyper-params by @githubnemo in https://github.com/huggingface/peft/pull/3535
* FIX DoRA unmerge on fan_in_fan_out layers by @LK-maker-007 in https://github.com/huggingface/peft/pull/3532
* Warn when from_pretrained config-field kwargs are ignored by @akshansh47 in https://github.com/huggingface/peft/pull/3516
* FIX inject_adapter raises when a non-first adapter matches nothing by @LK-maker-007 in https://github.com/huggingface/peft/pull/3534
* DOC Fix wrong paper links for LoHa and LoKr by @BenjaminBossan in https://github.com/huggingface/peft/pull/3547
* CI: Bump the third-party-actions group across 1 directory with 7 updates by @dependabot[bot] in https://github.com/huggingface/peft/pull/3497
* Fix IA3 Conv3d layer error message to reference Conv3d by @uttam12331 in https://github.com/huggingface/peft/pull/3505
* FIX Transformers warnings use return dict, missing inputs_embeds argument, fix causal_mask_creation_function call by @BenjaminBossan in https://github.com/huggingface/peft/pull/3558
* CHORE Dockerfile installs mslk differently by @BenjaminBossan in https://github.com/huggingface/peft/pull/3557
* remove ipex config since it has been removed from accelerate by @sywangyi in https://github.com/huggingface/peft/pull/3564
* STY Remove unused local variables in src/peft by @rajarshidattapy in https://github.com/huggingface/peft/pull/3567
* FIX PVeRA per-module sample_at_inference and generator device by @rajarshidattapy in https://github.com/huggingface/peft/pull/3563
* DOC Fix leftover quotes in GraLoRA target_modules docs by @rajarshidattapy in https://github.com/huggingface/peft/pull/3568
* FIX Reject duplicate adapter names by @tandede in https://github.com/huggingface/peft/pull/3559
* Add Super-Tuning as a new PEFT method by @smellslikeml in https://github.com/huggingface/peft/pull/3518
* Resolve ZeRO-3 partitioned shapes in lora.ParamWrapper by @qgallouedec in https://github.com/huggingface/peft/pull/3576
* fix(peft): make disable_adapter context manager reentrant (#3555) by @lllakshit in https://github.com/huggingface/peft/pull/3565
* FIX Preserve input state dict during adapter loading by @aswanth-07 in https://github.com/huggingface/peft/pull/3596
* Fold the MoE LoRA delta into a single `baddbmm` by @qgallouedec in https://github.com/huggingface/peft/pull/3577
* FIX IA3 grouped convolution feedforward merge by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3575
* Fix LoRA target_parameters raising a dtype error under autocast by @albertvillanova in https://github.com/huggingface/peft/pull/3602
* FIX AdaMSS, PSOFT: fork the RNG of the actual device by @jiqing-feng in https://github.com/huggingface/peft/pull/3598
* DOC Add troubleshooting section for hybrid architecture target_modules by @davidnichols-ops in https://github.com/huggingface/peft/pull/3603
* Add BEFT experiment and results to image-gen benchmark by @Sergasgr in https://github.com/huggingface/peft/pull/3607
* Fix LoRA on FSDP2-sharded models: shape inference and module hooks by @qgallouedec in https://github.com/huggingface/peft/pull/3578
* Feat: support ShadowPEFT by @SeanLee97 in https://github.com/huggingface/peft/pull/3354
* CI Fix ruff version to 0.16.4 by @BenjaminBossan in https://github.com/huggingface/peft/pull/3613
* Preserve adapter trainability during injection by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3495
* TST Ignore floating point noise in gradient checkpointing test by @jiqing-feng in https://github.com/huggingface/peft/pull/3599
* Preserve LN Tuning adapter devices when adding adapters by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3616
* CI: Bump the third-party-actions group with 6 updates by @dependabot[bot] in https://github.com/huggingface/peft/pull/3634
* fix: support torchao v0.18.0 which removed AffineQuantizedTensor by @peft-jambot in https://github.com/huggingface/peft/pull/3571
* FIX BOFT and HRA crash on grouped Conv2d layers by @AshNicolus in https://github.com/huggingface/peft/pull/3527
* Change layers_pattern logic by @BenjaminBossan in https://github.com/huggingface/peft/pull/2158
* FIX DoRA merge with multiple adapters on the same layer by @LK-maker-007 in https://github.com/huggingface/peft/pull/3609
* Refuse to hot-swap adapters while they are merged into the base weights by @Sravanjangam in https://github.com/huggingface/peft/pull/3590
* Add HiRA experiment and results to image-gen benchmark by @Sergasgr in https://github.com/huggingface/peft/pull/3640
* Add AdaMSS experiment and results to image-gen benchmark; wire up ASA training callback by @Sergasgr in https://github.com/huggingface/peft/pull/3641
* Extend the `prepare_model_for_kbit_training` memory leak regression t… by @sywangyi in https://github.com/huggingface/peft/pull/3627
* Fix nested LoRA sub-configs silently staying dicts after save/load round-trip by @Sravanjangam in https://github.com/huggingface/peft/pull/3587
* Make LoHa/LoKr merge and unmerge deterministic while in train mode by @Sravanjangam in https://github.com/huggingface/peft/pull/3589
* CI Don't install EETQ in Dockerfile as it conflicts with torch 2.14 by @BenjaminBossan in https://github.com/huggingface/peft/pull/3652
* TST Fix nightly CI regarding kernels version, torchao error by @BenjaminBossan in https://github.com/huggingface/peft/pull/3653
* AI Add skill for making changes to PEFT methods by @BenjaminBossan in https://github.com/huggingface/peft/pull/3544
* Treat empty base_model_name_or_path as missing when saving adapters by @victorzhong0110 in https://github.com/huggingface/peft/pull/3647
* Update HiRA experiment with tuned learning rate by @Sergasgr in https://github.com/huggingface/peft/pull/3661
* Update BEFT experiment with expanded target_modules by @Sergasgr in https://github.com/huggingface/peft/pull/3663
* TST Update adaption prompt tests by @BenjaminBossan in https://github.com/huggingface/peft/pull/3573
* refactor: move OFT to generic quantization framework by @peft-jambot in https://github.com/huggingface/peft/pull/3355
* Keep failed LoRA safe merges from changing base weights by @Robertboy18 in https://github.com/huggingface/peft/pull/3611
* DOC Fix broken docstring examples in peft_model and tuner models by @blipbyte in https://github.com/huggingface/peft/pull/3657
* FIX ShadowPEFT last-token pooling with left padding by @aswanth-07 in https://github.com/huggingface/peft/pull/3629
* Fix Trainable Tokens random-init unmerge by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3656
* Validate Super-Tuning index persistence across adapters by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3665
* FIX X-LoRA adapter lifecycle: disable_adapter, training mode and frozen classifier by @amogh-nagri-11 in https://github.com/huggingface/peft/pull/3636
* Reject direct injection for tuners with shared adapter state by @CoralGarden52 in https://github.com/huggingface/peft/pull/3667
* docs: Fix duplicate TOC entries by @githubnemo in https://github.com/huggingface/peft/pull/3696
* CHORE Add triage bot for GitHub PRs by @BenjaminBossan in https://github.com/huggingface/peft/pull/3680
* feat: delta-based forward pass for OSF to reduce memory and compute by @peft-jambot in https://github.com/huggingface/peft/pull/3524
* FIX Adapter management for prompt learning and adaption prompt by @amogh-nagri-11 in https://github.com/huggingface/peft/pull/3639
* Validate IA3 bias before committing safe merges by @Robertboy18 in https://github.com/huggingface/peft/pull/3694
* TST Accelerate mixed adapter batches tests by @BenjaminBossan in https://github.com/huggingface/peft/pull/3630
* TST Add PEFT testing guide by @BenjaminBossan in https://github.com/huggingface/peft/pull/3648
* FIX Several bugs when adding merged LoRA weights by @BenjaminBossan in https://github.com/huggingface/peft/pull/3111
* Fail loud on save_pretrained() for unsharded LoRA tensors by @akshansh47 in https://github.com/huggingface/peft/pull/3251
* Update UniLoRA MetaMathQA benchmark configs with tuned hyperparameters by @peft-jambot in https://github.com/huggingface/peft/pull/3552
* FIX Reject MiSS and PSOFT ranks the layer cannot support by @behroozazarkhalili in https://github.com/huggingface/peft/pull/3708
* FIX Task-type add_adapter: forward autocast_adapter_dtype, stop mutating modules_to_save by @Vedant-Agarwal in https://github.com/huggingface/peft/pull/3668
* Delete every auxiliary adapter and resolve the remaining active ones across layers by @DaoyuanLi2816 in https://github.com/huggingface/peft/pull/3515
* Add UniLoRA experiment by @Sergasgr in https://github.com/huggingface/peft/pull/3740
* docs: pool four small doc fixes into one PR by @simpleqt in https://github.com/huggingface/peft/pull/3687
* Warn when rank_pattern / alpha_pattern keys match no targeted module by @Sravanjangam in https://github.com/huggingface/peft/pull/3588
* fix: handle scalar adapter state entries by @aswanth-07 in https://github.com/huggingface/peft/pull/3699
* Release: 0.21.0 by @githubnemo in https://github.com/huggingface/peft/pull/3748

## New Contributors
* @Ashmitharaja made their first contribution in https://github.com/huggingface/peft/pull/3476
* @latent-9 made their first contribution in https://github.com/huggingface/peft/pull/3494
* @smellslikeml made their first contribution in https://github.com/huggingface/peft/pull/3382
* @robbiebusinessacc made their first contribution in https://github.com/huggingface/peft/pull/3446
* @ishan-1010 made their first contribution in https://github.com/huggingface/peft/pull/3513
* @Kaif10 made their first contribution in https://github.com/huggingface/peft/pull/3503
* @mfuntowicz made their first contribution in https://github.com/huggingface/peft/pull/3536
* @winklemad made their first contribution in https://github.com/huggingface/peft/pull/3425
* @szzhoujiarui made their first contribution in https://github.com/huggingface/peft/pull/3546
* @LK-maker-007 made their first contribution in https://github.com/huggingface/peft/pull/3532
* @akshansh47 made their first contribution in https://github.com/huggingface/peft/pull/3516
* @uttam12331 made their first contribution in https://github.com/huggingface/peft/pull/3505
* @rajarshidattapy made their first contribution in https://github.com/huggingface/peft/pull/3567
* @tandede made their first contribution in https://github.com/huggingface/peft/pull/3559
* @lllakshit made their first contribution in https://github.com/huggingface/peft/pull/3565
* @aswanth-07 made their first contribution in https://github.com/huggingface/peft/pull/3596
* @albertvillanova made their first contribution in https://github.com/huggingface/peft/pull/3602
* @davidnichols-ops made their first contribution in https://github.com/huggingface/peft/pull/3603
* @Sergasgr made their first contribution in https://github.com/huggingface/peft/pull/3607
* @SeanLee97 made their first contribution in https://github.com/huggingface/peft/pull/3354
* @Sravanjangam made their first contribution in https://github.com/huggingface/peft/pull/3590
* @victorzhong0110 made their first contribution in https://github.com/huggingface/peft/pull/3647
* @Robertboy18 made their first contribution in https://github.com/huggingface/peft/pull/3611
* @amogh-nagri-11 made their first contribution in https://github.com/huggingface/peft/pull/3636
* @CoralGarden52 made their first contribution in https://github.com/huggingface/peft/pull/3667
* @behroozazarkhalili made their first contribution in https://github.com/huggingface/peft/pull/3708
* @Vedant-Agarwal made their first contribution in https://github.com/huggingface/peft/pull/3668
* @simpleqt made their first contribution in https://github.com/huggingface/peft/pull/3687

**Full Changelog**: https://github.com/huggingface/peft/compare/v0.20.0...v0.21.0

---

> **Source** [huggingface/peft](https://github.com/huggingface/peft) · `v0.21.0` · 2026-09-15 · [upstream release](https://github.com/huggingface/peft/releases/tag/v0.21.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
