---
title: "ms-swift v4.5.3"
project: "ms-swift"
repo: "modelscope/ms-swift"
tag: "v4.5.3"
version: "v4.5.3"
published: "2026-09-08"
type: "patch"
lang: "en"
summary: "Qwen3.8-Flash-Next, a multimodal MoE model with 125B total parameters (6B activated per token, including a 51B N-gram embedding table)."
---

# ms-swift v4.5.3

## New Models


- [Qwen3.8-Flash-Next](https://modelscope.cn/models/Qwen/Qwen3.8-Flash-Next), a multimodal MoE model with 125B total parameters (~6B activated per token, including a 51B N-gram embedding table). It combines a hybrid GDN + Qwen Sparse Attention (QSA) backbone, hyper-connections, and a host-offloadable N-gram table, with native 262K context. Megatron training is supported. Best practice: [Qwen3.8-Flash-Next-Best-Practice](https://swift.readthedocs.io/en/latest/BestPractices/Qwen3_8-Flash-Next-Best-Practice.html)

- [deepseek-ai/DeepSeek-V4-Pro-0813](https://modelscope.cn/models/deepseek-ai/DeepSeek-V4-Pro-0813)
- [inclusionAI/Ling-3.0-tiny](https://modelscope.cn/models/inclusionAI/Ling-3.0-tiny) & [inclusionAI/Ling-3.0-flash](https://modelscope.cn/models/inclusionAI/Ling-3.0-flash)
- [XHToken/Spark-X2.5](https://modelscope.cn/models/XHToken/Spark-X2.5-4B)
- [lmms-lab/LLaVA-OneVision-2-8B-Instruct](https://modelscope.cn/models/lmms-lab-encoder/LLaVA-OneVision-2-8B-Instruct)
- [iic/UEmbed-2B](https://modelscope.cn/models/iic/UEmbed-2B)
- [Tencent-Hunyuan/WeMM-Embedding](https://modelscope.cn/models/Tencent-Hunyuan/WeMM-Embedding-2B)


## New Features

- Megatron-SWIFT Muon optimizer supports different learning rates for different parameters.
- OPD distillation (GRPO) now supports separate vision inputs for teacher and student, enabling multimodal distillation. Reference doc: https://swift.readthedocs.io/en/latest/Instruction/Distillation.html
- A `last-checkpoint` link is maintained when saving checkpoints, making resume easier.
- `dataloader_persistent_workers` now defaults to True to avoid dataloader cold start on each eval.
- Performance: vectorized padding-free log-prob restore and sequence reductions; Megatron loss all-reduce deferred to logging time; vectorized ring attention LSE extraction on NPU.
- Added the `vllm_kunlun` inference backend for rollout/deploy.
- Removed the gradio dependency.


## Bug Fixes

-  **Training**: `resume_from_checkpoint` with transformers 4.x, DPO/IPO log-prob normalization, reward model margins aligned with pairs, `predict_with_generate` DDP evaluation, loss scaling with sequence parallelism, vocab loss & external files in multi-processing, template pickling, py3.14 compatibility, etc.
-  **RL**: Megatron GRPO vocab-parallel log-prob gradients, vLLM weight sync in colocate mode (LoRA IndexError, sender device alignment), colocated vLLM cleanup ordering on rollout failures, token-in/token-out consistency in agentic multi-step rollouts.
- **Megatron**: router replay CP partition and expert indices, MTP shared weights forward, reference adapter loading, zero multimodal learning rates, Megatron-FSDP DTensor checkpoint save/load, etc.
- **Model fixes**: Qwen3.5 (linear attention FP32 weights, multimodal packing kwargs), Qwen-Omni video fps, MiniCPM-o 4.5 video inputs, mplug_owl2_1, etc.


## What's Changed
* fix: carry rounded seconds in format_time so it never prints '60s' by @AlejandroCoronadoN in https://github.com/modelscope/ms-swift/pull/9919
* Fix single token embedding by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9924
* fix: handle tool messages in last round loss scaling by @Bakuma-sea in https://github.com/modelscope/ms-swift/pull/9923
* [Megatron] Fix duplicated GRPO KL gathering by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9921
* Keep SGLang and LMDeploy streaming response IDs stable by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9926
* Support qwen3 5 emb by @z0o0ey in https://github.com/modelscope/ms-swift/pull/9930
* feat(npu): Add FSDP2 LoRA example for Qwen3.8-27B for Ascend NPU by @zheliuyu in https://github.com/modelscope/ms-swift/pull/9920
* doc:Frequently asked questions update by @z0o0ey in https://github.com/modelscope/ms-swift/pull/9937
* test(ci): drop legacy structbert tests and dependency pins by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9938
* docs(grpo): fix reward model spelling by @BingH225 in https://github.com/modelscope/ms-swift/pull/9940
* The ViT gradient checkpoint was incorrectly turned off during multimodal model training. by @z0o0ey in https://github.com/modelscope/ms-swift/pull/9945
* Fix save_missing_weights arg by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9956
* fix：(megatron 0.16.1) support PackedSeqParams without total_tokens by @hazelduan in https://github.com/modelscope/ms-swift/pull/9960
* fix:Compatibility with Python 3.14 by @z0o0ey in https://github.com/modelscope/ms-swift/pull/9961
* Support MOSS-VL by @SSSSuperC in https://github.com/modelscope/ms-swift/pull/9944
* [NPU] Adapt vLLM-Ascend 0.23 runtime by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9959
* sync missing version bump on main by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9967
* fix(utils): scope download cache by URL by @YZJF in https://github.com/modelscope/ms-swift/pull/9969
* Fix MOSS-VL align test default model id for ModelScope hub by @SSSSuperC in https://github.com/modelscope/ms-swift/pull/9974
* fix bug: serialize Qwen tool argument JSON literals by @Zhijun-Xu in https://github.com/modelscope/ms-swift/pull/9968
* fix(metrics): count empty NLG predictions in score averages by @Excelius-Wang in https://github.com/modelscope/ms-swift/pull/9962
* fix(dataset): honor explicit hub prefixes by @YZJF in https://github.com/modelscope/ms-swift/pull/9971
* Fix Qwen3.5 A_log reinitialization by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9957
* perf(rlhf): vectorize padding-free sequence reductions by @Ruihan11 in https://github.com/modelscope/ms-swift/pull/9958
* fix: honor sampled fps in Qwen-Omni video_second_per_grid by @Misaliet in https://github.com/modelscope/ms-swift/pull/9955
* Fix external plugin module name collisions by @primorLee in https://github.com/modelscope/ms-swift/pull/9953
* Update doc: update uembed models doc.  by @SighingSnow in https://github.com/modelscope/ms-swift/pull/9951
* align deploy/rollout health endpoint by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9950
* Handle missing AgentFlan query for string suffixes by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9949
* Fix LoRA IndexError when syncing weights to vLLM for Qwen models in GRPO colocate mode by @jinchenyu in https://github.com/modelscope/ms-swift/pull/9946
* support LLaVA-OneVision-2-8B by @z0o0ey in https://github.com/modelscope/ms-swift/pull/9978
* docs: fix Reward Model links in RLHF guides by @tutao0123 in https://github.com/modelscope/ms-swift/pull/9910
* [model] deepseek-v4-pro-0813 by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9922
* [bugfix] fix typo and stray characters in base argument docstrings by @BingH225 in https://github.com/modelscope/ms-swift/pull/9985
* Fix the compatibility of py3.14 and fix qwen3-vl training bug by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9979
* Add fused operator patch for Qwen3-VL dense models on NPU by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9987
* fix(train): fail fast on incompatible DLRover flash checkpoint APIs by @Excelius-Wang in https://github.com/modelscope/ms-swift/pull/9964
* docs(deploy): fix broken link to examples/infer by @moonturbo in https://github.com/modelscope/ms-swift/pull/9989
* fix(template): handle MiniCPM-o 4.5 video inputs for vLLM deployment by @zm249 in https://github.com/modelscope/ms-swift/pull/9988
* Link to `last-checkpoint` when saving and fix some code by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9990
* fix: materialize state_dict for SentenceTransformer full-parameter save by @Lossfull in https://github.com/modelscope/ms-swift/pull/9986
* Fix colocated vLLM cleanup ordering on rollout failures by @pureoxygen123 in https://github.com/modelscope/ms-swift/pull/9952
* Preserve Qwen3.5 linear attention FP32 weights by @liuhao-labs in https://github.com/modelscope/ms-swift/pull/9972
* fix: 修复 Megatron GRPO 多模态缓存失配 by @tutao0123 in https://github.com/modelscope/ms-swift/pull/9933
* [model] qwen3.8-flash-next by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9992
* support Ling-3.0-tiny & Ling-3.0-flash by @z0o0ey in https://github.com/modelscope/ms-swift/pull/9993
* Support different lr using muon by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9994
* Fix npu optimizer by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9998
* Fix template pickling by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/10000
* Cache downloaded files atomically by @ump45nose in https://github.com/modelscope/ms-swift/pull/9999
* fix(fsdp): set ACCELERATE_USE_FSDP so device_map and cpu_ram_efficient_loading take effect by @cben484 in https://github.com/modelscope/ms-swift/pull/9980
* fix event loop by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/10007
* support Ling-3.0-tiny&flash agent template by @z0o0ey in https://github.com/modelscope/ms-swift/pull/10010
* [examples] fix do_eval() call arity in the rft baseline-eval block by @Anai-Guo in https://github.com/modelscope/ms-swift/pull/10009
* Fix Megatron-FSDP DTensor checkpoint save/load compatibility by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9976
* Fix exact token-in/token-out consistency in agentic multi-step rollouts by @P90-RushB in https://github.com/modelscope/ms-swift/pull/10012
* feat(opsd): separate vision input for teacher and student by @Tohrusky in https://github.com/modelscope/ms-swift/pull/10015
* Fix Megatron-FSDP checkpoints with Megatron-Core-only installs by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/10017
* support WeMM-Embedding by @z0o0ey in https://github.com/modelscope/ms-swift/pull/10018
* remove gradio in requirement by @hjh0119 in https://github.com/modelscope/ms-swift/pull/10020
* fix(megatron): forward mtp_shared_weights to megatron-bridge by @Excelius-Wang in https://github.com/modelscope/ms-swift/pull/10025
* Add spark model by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/10031
* fix(utils): handle empty JSONL output by @qsxustc in https://github.com/modelscope/ms-swift/pull/10030
* feat(xpu): support vllm_kunlun backend by @loveleaves in https://github.com/modelscope/ms-swift/pull/10027
* Fix NaN for full-parameter SFT with DeepSpeed ZeRO-1/2 on torch<2.9 (AdamW int32 flat-partition overflow) by @kiscad in https://github.com/modelscope/ms-swift/pull/10023
* Make `lora_alpha` a float by @sliedes in https://github.com/modelscope/ms-swift/pull/10004
* fix(utils): avoid mutating caller ignore patterns by @gry67673905 in https://github.com/modelscope/ms-swift/pull/10001
* fix(utils): handle relative TensorBoard paths by @qsxustc in https://github.com/modelscope/ms-swift/pull/10032
* Fix zero multimodal learning rates in Megatron by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9948
* Fix Megatron GRPO vocab-parallel log-prob gradients by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9947
* Fix sender device alignment in vLLM weight synchronization by @0KEAHA in https://github.com/modelscope/ms-swift/pull/10005
* Fix vocab loss & external files in multi-processing scenarios by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/10033
* Fix loss scaling with sequence parallelism by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/10035
* [megatron] Make FileSystemReader patch idempotent by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/10034
* perf(megatron): defer loss all-reduce to log time by @gakkiri in https://github.com/modelscope/ms-swift/pull/9966
* [megatron] Fix router replay CP partition and expert index overflow by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9981
* support VLLM inferenve backends for Uembed & WeMM-Embedding by @z0o0ey in https://github.com/modelscope/ms-swift/pull/10037
* Fix optional dependency imports in CI tests by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/10046
* [megatron] Propagate parallel checkpoint reader errors by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/10045
* docs: fix 'the penalizes' -> 'that penalizes' in ORM reward docstring by @simpleqt in https://github.com/modelscope/ms-swift/pull/10044
* docs: fix dead anchors across EN/CN command-line and best-practice docs by @simpleqt in https://github.com/modelscope/ms-swift/pull/10043
* fix(model): fix NameError when loading mplug_owl2_1 with a vocab_size by @simpleqt in https://github.com/modelscope/ms-swift/pull/10042
* Report the NaN instead of a bare raise in zigzag ring attention by @David-Wu1119 in https://github.com/modelscope/ms-swift/pull/10038
* fix: default `dataloader_persistent_workers=True` to avoid per-eval worker cold start by @zhiwuyazhe-z in https://github.com/modelscope/ms-swift/pull/10036
* [Megatron] Fix reference adapter loading for LoRA RLHF by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9934
* perf(npu): vectorize ring attention LSE extractio by @Ruihan11 in https://github.com/modelscope/ms-swift/pull/10002
* Fix DPO IPO log-prob normalization by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9925
* perf(rlhf): vectorize padding-free log-probability restore by @Ruihan11 in https://github.com/modelscope/ms-swift/pull/10021
* fix: preserve 2D predictions in predict_with_generate DDP eval by @kabishou11 in https://github.com/modelscope/ms-swift/pull/10048
* Fix reward model margin broadcasting and alignment by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9927
* Fix Qwen3.5 multimodal packing kwargs compatibility by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9838
* fix transformers 4.x resume_from_checkpoint  by @hjh0119 in https://github.com/modelscope/ms-swift/pull/10052
* [doc] qwen3.8-flash-next best-practice  by @hjh0119 in https://github.com/modelscope/ms-swift/pull/10054
* bump mcore-bridge by @hjh0119 in https://github.com/modelscope/ms-swift/pull/10055

## New Contributors
* @AlejandroCoronadoN made their first contribution in https://github.com/modelscope/ms-swift/pull/9919
* @Bakuma-sea made their first contribution in https://github.com/modelscope/ms-swift/pull/9923
* @zheliuyu made their first contribution in https://github.com/modelscope/ms-swift/pull/9920
* @BingH225 made their first contribution in https://github.com/modelscope/ms-swift/pull/9940
* @SSSSuperC made their first contribution in https://github.com/modelscope/ms-swift/pull/9944
* @YZJF made their first contribution in https://github.com/modelscope/ms-swift/pull/9969
* @Zhijun-Xu made their first contribution in https://github.com/modelscope/ms-swift/pull/9968
* @Excelius-Wang made their first contribution in https://github.com/modelscope/ms-swift/pull/9962
* @Misaliet made their first contribution in https://github.com/modelscope/ms-swift/pull/9955
* @primorLee made their first contribution in https://github.com/modelscope/ms-swift/pull/9953
* @SighingSnow made their first contribution in https://github.com/modelscope/ms-swift/pull/9951
* @jinchenyu made their first contribution in https://github.com/modelscope/ms-swift/pull/9946
* @tutao0123 made their first contribution in https://github.com/modelscope/ms-swift/pull/9910
* @moonturbo made their first contribution in https://github.com/modelscope/ms-swift/pull/9989
* @zm249 made their first contribution in https://github.com/modelscope/ms-swift/pull/9988
* @Lossfull made their first contribution in https://github.com/modelscope/ms-swift/pull/9986
* @pureoxygen123 made their first contribution in https://github.com/modelscope/ms-swift/pull/9952
* @liuhao-labs made their first contribution in https://github.com/modelscope/ms-swift/pull/9972
* @ump45nose made their first contribution in https://github.com/modelscope/ms-swift/pull/9999
* @cben484 made their first contribution in https://github.com/modelscope/ms-swift/pull/9980
* @P90-RushB made their first contribution in https://github.com/modelscope/ms-swift/pull/10012
* @qsxustc made their first contribution in https://github.com/modelscope/ms-swift/pull/10030
* @loveleaves made their first contribution in https://github.com/modelscope/ms-swift/pull/10027
* @kiscad made their first contribution in https://github.com/modelscope/ms-swift/pull/10023
* @sliedes made their first contribution in https://github.com/modelscope/ms-swift/pull/10004
* @gry67673905 made their first contribution in https://github.com/modelscope/ms-swift/pull/10001
* @0KEAHA made their first contribution in https://github.com/modelscope/ms-swift/pull/10005
* @simpleqt made their first contribution in https://github.com/modelscope/ms-swift/pull/10044
* @David-Wu1119 made their first contribution in https://github.com/modelscope/ms-swift/pull/10038
* @zhiwuyazhe-z made their first contribution in https://github.com/modelscope/ms-swift/pull/10036
* @kabishou11 made their first contribution in https://github.com/modelscope/ms-swift/pull/10048

**Full Changelog**: https://github.com/modelscope/ms-swift/compare/v4.5.2...v4.5.3

---

> **Source** [modelscope/ms-swift](https://github.com/modelscope/ms-swift) · `v4.5.3` · 2026-09-08 · [upstream release](https://github.com/modelscope/ms-swift/releases/tag/v4.5.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
