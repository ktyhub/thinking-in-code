---
title: "diffusers v0.41.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.41.0"
version: "v0.41.0"
published: "2026-10-06"
type: "minor"
lang: "en"
summary: "Qwen-Image 2.1 unifies image generation and editing in one model. Its visual generation component has 7B parameters, and it supports multiple reference images and native RGBA output for transparent images."
---

# diffusers v0.41.0

> [!TIP]
> This release brings Qwen-Image 2.1 to Diffusers, with text-to-image generation, image editing, native transparency, and LoRA training.
>
> Starting with this release, we’re adopting the Transformers release philosophy: coordinating minor releases around new model integrations, while including the other changes merged since the previous release. Patch releases remain focused on fixes. See our [release policy](https://huggingface.co/docs/diffusers/main/en/conceptual/contribution#when-new-model-or-pipeline-support-is-released).

## **Qwen-Image 2.1**

[Qwen-Image 2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) unifies image generation and editing in one model. Its visual generation component has 7B parameters, and it supports multiple reference images and native RGBA output for transparent images. Check out the [docs](https://huggingface.co/docs/diffusers/main/en/api/pipelines/qwenimage21) for more details.

Thanks to [@naykun](https://github.com/naykun) for the model integration ([#14804](https://github.com/huggingface/diffusers/pull/14804)).

**Other highlights**

- **Tensor-parallel checkpoint loading:** each rank reads its own slice of sharded weights directly, reducing the memory needed during loading. ([#14544](https://github.com/huggingface/diffusers/pull/14544))
- **LTX-2.5 DFR:** new pipelines support generation with keyframe slots and composable spatial and temporal refinement. ([#14567](https://github.com/huggingface/diffusers/pull/14567))
- **Cosmos 3:** SeaCache support and mixed W8A8/W8A16 denoising for ModelOpt FP8 checkpoints. ([#14663](https://github.com/huggingface/diffusers/pull/14663), [#14664](https://github.com/huggingface/diffusers/pull/14664))
- **Modular Diffusers:** Wan 2.2 VACE gains modular blocks, and loading from existing local paths avoids unnecessary weight downloads. ([#14432](https://github.com/huggingface/diffusers/pull/14432), [#14797](https://github.com/huggingface/diffusers/pull/14797))
- **More single-file loaders:** support for Krea 2 and MiniMax-H3. ([#14914](https://github.com/huggingface/diffusers/pull/14914), [#14839](https://github.com/huggingface/diffusers/pull/14839))
- **Tests:** We removed the monolithic `test_pipelines_common.py` test suite to establish more modularity and transparent implementation of tests. Refer to https://github.com/huggingface/diffusers/pull/14669/ for more details.

**Deprecations and compatibility**

🚨 ONNX support is deprecated; use Optimum for ONNX Runtime workflows. ([#14658](https://github.com/huggingface/diffusers/pull/14658))

Previously deprecated APIs have been removed, including the `LuminaText2ImgPipeline` and `Lumina2Text2ImgPipeline` aliases. Use `LuminaPipeline` and `Lumina2Pipeline` instead. Older integrations should review the [removed code paths](https://github.com/huggingface/diffusers/pull/14838) before upgrading.

Thanks to everyone who contributed to this release!

## All commits

* [docs] Clean up links by @stevhliu in #14535
* docs: fix 14 typos in docs, comments and docstrings by @iridescentWen in #14541
* [docs] LTX-2.5 Modular Pipeline Docs by @dg845 in #14450
* [agent docs] add lora test instructions. by @sayakpaul in #14549
* refactor bria pipeline tests to the new mixin structure by @akshan-main in #14547
* feat: improve issue reminder workflow and introduce conditional autoclose by @sayakpaul in #14477
* [tests] AOT compilation failure fixes by @sayakpaul in #14553
* [tests] skip hunyuan framepack group offloading tests by @sayakpaul in #14551
* [tests] remove autoencodertestermixin and rename new one. by @sayakpaul in #14555
* tests: fix CUDA OOM in VidTok slicing/tiling tests by @sayakpaul in #14554
* refactor bria fibo edit pipeline tests to the new mixin structure by @akshan-main in #14577
* refactor bria fibo pipeline tests to the new mixin structure by @akshan-main in #14570
* refactor deepfloyd if pipeline tests to the new mixin structure by @akshan-main in #14580
* Deprecate 'fp16_safetensors' command in CLI documentation by @sayakpaul in #14583
* Fix duplicated words and a misspelling in messages and docstrings by @Sreekant13 in #14287
* Fibo Edit: multi-reference conditioning and batching by @ShivamShrirao in #14566
* [tests] Add Config to Exclude Modules from Leaf-Level Group Offloading by @dg845 in #14564
* [tests] refactor flux control lora tests by @sayakpaul in #14557
* [tests] migrate `test_pipelines.py` to use pytest. by @sayakpaul in #14222
* [core] pass diffusers library name to kernels calls by @sayakpaul in #14441
* [tests] hunyuan, ltx, ltx2 by @sayakpaul in #14587
* make examples in docs device agnostic by @kaixuanliu in #14414
* Move `LTX2Guidance` Guider to `guiders/` Folder by @dg845 in #14558
* refactor deepfloyd if img2img pipeline tests to the new mixin structure by @akshan-main in #14596
* refactor deepfloyd if inpainting pipeline tests to the new mixin structure by @akshan-main in #14602
* refactor deepfloyd if superresolution pipeline tests to the new mixin structure by @akshan-main in #14603
* refactor deepfloyd if img2img superresolution pipeline tests to the new mixin structure by @akshan-main in #14604
* docs: correct the enable_gqa / cuDNN explanation by @yiyixuxu in #14561
* refactor deepfloyd if inpainting superresolution pipeline tests to the new mixin structure by @akshan-main in #14606
* [tests] migrate acestep, auraflow, cogview4, and helios tests by @sayakpaul in #14582
* remove dead deepfloyd if shared test mixin by @akshan-main in #14611
* [agent docs]add reporting guide by @yiyixuxu in #14531
* migrate cogvideox lora tests to the pipeline-level mixins by @akshan-main in #14615
* [tests] migrate flux2 lora. by @sayakpaul in #14610
* migrate wan vace lora tests to the pipeline-level mixins by @akshan-main in #14614
* post release 0.40.0 by @sayakpaul in #14545
* migrate wan lora tests to the pipeline-level mixins by @akshan-main in #14613
* tests: add ideogram4 tests for pipelines. by @sayakpaul in #14599
* [tests] fix remote decoding tests and disable encode tests. by @sayakpaul in #14601
* [tests] migrate remaining flux pipeline tests to use new mixins by @sayakpaul in #14560
* [tests] refactor zimage and krea2 pipeline tests by @sayakpaul in #14563
* [tests] refactor sdxl tests. by @sayakpaul in #14619
* [tests] remove quanto tests. by @sayakpaul in #14254
* tests: migrate tests from tests/lora by @sayakpaul in #14559
* ci: fix invocation for compile tests. by @sayakpaul in #14552
* Fix Ideogram 4 Callback Handling and Tests by @dg845 in #14621
* Fix callback tensor inputs that are never bound in the denoising loop by @LuShadowX in #14416
* [CI] Repair broken links by @stevhliu in #14627
* migrate ideogram4 lora tests to the pipeline-level mixins by @akshan-main in #14628
* refactor lumina2 pipeline tests to the new mixin structure by @akshan-main in #14629
* [tests] refactor d series pipeline tests. by @sayakpaul in #14630
* [tests] refactor a* pipeline tests. by @sayakpaul in #14622
* [tests] refactor b* pipeline tests by @sayakpaul in #14625
* [tests] refactor e and g series pipeline tests by @sayakpaul in #14631
* [tests] refactor h and i series pipelines by @sayakpaul in #14633
* [tests] refactor j series pipeline tests by @sayakpaul in #14632
* [Download] Resolve the revision once at the beginning of from_pretrained by @Wauplin in #14340
* Add LTX-2.5 DFR pipeline (keyframe slots, spatial detailing, tiled temporal rounds) by @alexanderar in #14567
* skip these case for no-cuda device since the modeling contains cuda s… by @sywangyi in #14656
* [tests] refactor remaining s series pipelines by @sayakpaul in #14654
* [tests] refactor k-series pipeline tests by @sayakpaul in #14636
* [tests] refactor v-series pipeline tests by @sayakpaul in #14653
* [tests] refactor m and n series pipeline tests by @sayakpaul in #14638
* [tests] refactor l-series pipeline tests by @sayakpaul in #14637
* [tests] refactor c* pipeline tests. by @sayakpaul in #14626
* [tests] refactor o and p series pipeline tests by @sayakpaul in #14646
* [tests] refactor ltx2 dfr pipeline tests by @sayakpaul in #14655
* [core] deprecate onnx by @sayakpaul in #14658
* docs: correct stated defaults in Chroma pipeline docstrings by @iridescentWen in #14578
* [tests] fix SVD tests by @sayakpaul in #14687
* [tests] Split Pipeline Group Offloading Block-Level and Leaf-Level Tests by @dg845 in #14635
* [tests] fix sana bf16 tests on ci. by @sayakpaul in #14688
* Don't materialise the PRX attention mask by @DavidBert in #14677
* [Cosmos 3] Fix Cosmos 3 Group Offloading Tests by @dg845 in #14693
* Fix PriorTransformer Group Offloading Bug by @dg845 in #14695
* [train_text_to_image_decoder.py] Fix the LR scheduler when num_train_epochs is passed in a distributed training env by @shoutoutuoadi325 in #14542
* ModularPipeline.save_pretrained: change the default  `overwrite_modular_index` to be True by @yiyixuxu in #14659
* add modular blockset for wan 2.2 vace by @akshan-main in #14432
* Invalidate HookRegistry child-registries cache on enable/disable cache by @SuryanshSS1011 in #14093
* Set scheduler begin index in remaining FlowMatch pipelines to avoid DtoH sync by @shoemoney in #14576
* tests: add lora tester mixin for modular and migrate minimax h3. by @sayakpaul in #14605
* agent doc: add a requirement for PR communications by @yiyixuxu in #14709
* [Community] Add CachedSearch script: cheaper best-of-N for video pipelines by @shreshthsaini in #14735
* [tests] partially fix the sd2 upscale tests by @sayakpaul in #14689
* [httpx migration] Import httpx from huggingface_hub by @Wauplin in #14753
* [docs] Improve navigation by @stevhliu in #14537
* Route non-interactive library messages through loggers by @wunianze666-netizen in #14682
* fix modular pipeline class resolution for families outside the auto-pipeline mappings by @akshan-main in #14736
* docs: fix two docstrings that reference names the code does not have by @iridescentWen in #14733
* [Cosmos3] Mixed W8A8/W8A16 denoising for ModelOpt FP8 checkpoints by @ConstBob in #14664
* [torchao]: fix how FqnConfig is resolved and handled by @sayakpaul in #14686
* [CI] Consolidate style, Serge review and GPU test bots under `@diffusers-bot` by @DN6 in #14623
* fix(ci): harden GitHub Actions workflows (#14623) by @hf-security-analysis[bot] in #14788
* changes in the pr_link_issue_reminder workjflow by @sayakpaul in #14798
* fix(ci): harden GitHub Actions workflows (#14798) by @hf-security-analysis[bot] in #14800
* [docs] Refactor get started section by @stevhliu in #14783
* docs: pool eight small doc fixes into one PR by @simpleqt in #14757
* Add Qwen-Image 2.1 by @naykun in #14804
* Add SeaCache support for Cosmos3 pipelines by @yzhautouskay in #14663
* extend tests/others/test_cli_commands.py::TestRunCommand::test_group_… by @sywangyi in #14697
* Synchronize the compute stream before offloading to disk by @jiqing-feng in #14657
* Fix flash/sage varlen prep under torch.compile with dynamic shapes by @ShivamShrirao in #14568
* [core] Fix component device placement for split-device pipelines by @JingyaHuang in #14739
* Fix Ascend NPU RMSNorm and fused-attention mask shapes by @mengchengTang in #14288
* [docs] typo with hyperlink by @ariG23498 in #14826
* [docs] Fix docstring arguments that don't match the signatures by @revanth-045 in #14778
* [docs] Using diffusion pipelines by @stevhliu in #14805
* [docs] Fix legacy hf CLI references (diffusers) by @Wauplin in #14830
* Fix Wuerstchen LoRA scheduler steps for distributed epochs by @wunianze666-netizen in #14748
* Add single file support for Qwen 2.1 by @DN6 in #14836
* test and docs for xet dedup based file sharing. by @sayakpaul in #14835
* Scope GITHUB_TOKEN permissions per job by @hf-security-analysis[bot] in #14852
* Pin GitHub Actions to commit SHAs by @hf-security-analysis[bot] in #14853
* [LoRA] add LoRA training for Qwen Image 2.1 by @linoytsaban in #14808
* [docs] Adapters by @stevhliu in #14842
* Fix TaylorSeer cache crash when the feature shape changes between steps by @hide3tu in #14831
* downcast MiniMax-H3 position_ids at the device transfer on fp64-less backends by @SammyTourani in #14767
* [MInimax H3] Fix VAE decode by @asomoza in #14754
* [realfill] Fix the LR scheduler when num_train_epochs is passed in a distributed training env by @825pranav in #14885
* [LoRA] convert Z-Image LoRAs that only carry the fused qkv and bare out attention keys by @christopher5106 in #14875
* Fix LoRA loading for flattened CLIP text encoders by @BeyondBirthday07 in #14872
* [diffusers-cli] add a dockerfile for diffusers cli hf jobs by @sayakpaul in #14550
* [core] propagate sage attention updates. by @sayakpaul in #14584
* [docs] document release philosophy by @sayakpaul in #14904
* spit output to stderr when extracting GPU tests for PRs by @sayakpaul in #14847
* Remove deprecated code paths by @DN6 in #14838
* [Cosmos3] Fix Transfer SeaCache artifacts with control CFG by @yzhautouskay in #14897
* [fix] Add return types by @stevhliu in #14874
* [core] Shard tensor-parallel checkpoints on load and save by @JingyaHuang in #14544
* [Modular] Avoid downloading weights when loading from an existing local path by @DN6 in #14797
* Add single file support for Minimax H3 by @DN6 in #14839
* Consolidate torch device backend dispatch by @DN6 in #14792
* chore: add one additional copied from in qwenimage 2.1 vae by @sayakpaul in #14810
* Add single file support for Krea 2 by @DN6 in #14914
* Tag Krea 2 text encoder outputs as denoiser_input_fields by @tbsbngrtz in #14925
* [Bugfix] Fix Cosmos3 FP8 tensor parallelism by @yzhautouskay in #14921
* agent docs: support only what released checkpoints use by @yiyixuxu in #14750
* Fix: Deprecating Siglip2ImageProcessorFast by @ariG23498 in #14781
* [modular] Echo team joy future academy jd echo by @Gelercatty by @sayakpaul in #14941
* [tests] refactor the pipeline-level attention processor tests by @sayakpaul in #14701
* Configure fixed sampling sigmas on QwenImage21Pipeline by @naykun in #14950
* [chore] remove force_upcast from autoencoder flux2 by @sayakpaul in #14946
* [tests] remove `test_pipelines_common.py` by @sayakpaul in #14669
* Release: v0.41.0-release by @sayakpaul (direct commit on v0.41.0-release)

## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @dg845
    * [docs] LTX-2.5 Modular Pipeline Docs (#14450)
    * [tests] Add Config to Exclude Modules from Leaf-Level Group Offloading (#14564)
    * Move `LTX2Guidance` Guider to `guiders/` Folder (#14558)
    * Fix Ideogram 4 Callback Handling and Tests (#14621)
    * [tests] Split Pipeline Group Offloading Block-Level and Leaf-Level Tests (#14635)
    * [Cosmos 3] Fix Cosmos 3 Group Offloading Tests (#14693)
    * Fix PriorTransformer Group Offloading Bug (#14695)
* @akshan-main
    * refactor bria pipeline tests to the new mixin structure (#14547)
    * refactor bria fibo edit pipeline tests to the new mixin structure (#14577)
    * refactor bria fibo pipeline tests to the new mixin structure (#14570)
    * refactor deepfloyd if pipeline tests to the new mixin structure (#14580)
    * refactor deepfloyd if img2img pipeline tests to the new mixin structure (#14596)
    * refactor deepfloyd if inpainting pipeline tests to the new mixin structure (#14602)
    * refactor deepfloyd if superresolution pipeline tests to the new mixin structure (#14603)
    * refactor deepfloyd if img2img superresolution pipeline tests to the new mixin structure (#14604)
    * refactor deepfloyd if inpainting superresolution pipeline tests to the new mixin structure (#14606)
    * remove dead deepfloyd if shared test mixin (#14611)
    * migrate cogvideox lora tests to the pipeline-level mixins (#14615)
    * migrate wan vace lora tests to the pipeline-level mixins (#14614)
    * migrate wan lora tests to the pipeline-level mixins (#14613)
    * migrate ideogram4 lora tests to the pipeline-level mixins (#14628)
    * refactor lumina2 pipeline tests to the new mixin structure (#14629)
    * add modular blockset for wan 2.2 vace (#14432)
    * fix modular pipeline class resolution for families outside the auto-pipeline mappings (#14736)
* @kaixuanliu
    * make examples in docs device agnostic (#14414)
* @alexanderar
    * Add LTX-2.5 DFR pipeline (keyframe slots, spatial detailing, tiled temporal rounds) (#14567)
* @ConstBob
    * [Cosmos3] Mixed W8A8/W8A16 denoising for ModelOpt FP8 checkpoints (#14664)
* @naykun
    * Add Qwen-Image 2.1 (#14804)
    * Configure fixed sampling sigmas on QwenImage21Pipeline (#14950)
* @yzhautouskay
    * Add SeaCache support for Cosmos3 pipelines (#14663)
    * [Cosmos3] Fix Transfer SeaCache artifacts with control CFG (#14897)
    * [Bugfix] Fix Cosmos3 FP8 tensor parallelism (#14921)

---

> **Source** [huggingface/diffusers](https://github.com/huggingface/diffusers) · `v0.41.0` · 2026-10-06 · [upstream release](https://github.com/huggingface/diffusers/releases/tag/v0.41.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
