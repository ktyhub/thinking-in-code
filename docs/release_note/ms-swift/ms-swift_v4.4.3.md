---
title: "ms-swift v4.4.3"
project: "ms-swift"
repo: "modelscope/ms-swift"
tag: "v4.4.3"
version: "v4.4.3"
published: "2026-08-12"
type: "patch"
lang: "en"
---

# ms-swift v4.4.3

## What's Changed
* Update NPU doc and example by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9683
* [bugfix] fix batch_sampler set_epoch by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9685
* fix(template): preserve non-string prefix elements in _replace_system by @he-yufeng in https://github.com/modelscope/ms-swift/pull/9612
* [model] support hy3 by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9684
* feat(megatron): add nccl_comm_warmup to avoid iteration-1 NCCL cudaMalloc OOM (#6387) by @yuchenwang3 in https://github.com/modelscope/ms-swift/pull/9602
* feat(packing): add opt-in packing_strategy (binpack | sequential) for order-preserving packing by @yuchenwang3 in https://github.com/modelscope/ms-swift/pull/9598
* update packing_strategy by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9686
* [bugfix] fix hy_v3 template by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9688
* [bugfix] fix qwen3_5 transformers_version megatron by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9690
* Avoid overwriting AutoTP-related settings when using DeepSpeed ​​configuration files. by @1787648106 in https://github.com/modelscope/ms-swift/pull/9691
* fix: support Qwen3.5 MoE models in linear attention sequence parallel… by @meichangsu1 in https://github.com/modelscope/ms-swift/pull/9696
* [feat] support gkd multi turn by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9698
* [bugfix] fix qwen3_5 template by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9703
* [doc] replace use_async_engine with vllm_use_async_engine by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9706
* support deepseek_v4 packing /CP by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9705
* [bugfix] pass hf teacher_tag_key by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9711
* [bugfix] fix hf multi turn split by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9713
* fix gkd truncation by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9716
* fix: Qwen3-TTS project input text embedding by @FelysNeko in https://github.com/modelscope/ms-swift/pull/9715
* [bugfix] fix qwen3_tts by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9721
* [doc] fix qwen35 gkd deploy by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9718
* [megatron] Fix MXFP8 sequence-length padding under sequence parallel by @yszhli in https://github.com/modelscope/ms-swift/pull/9722
* support optional megatron-bridge backend by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9725
* [bugfix] avoid duplicate resize for Qwen3-Omni by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9729
* [bugfix] include image mode and size in tmp image cache key by @he-yufeng in https://github.com/modelscope/ms-swift/pull/9605
* [docs] update docs by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9734
* [docs] update swift image 4.4.1 by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9735
* update requirements by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9737
* [bugfix] vllm seq_cls by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9736
* compat megatron-core main branch by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9743
* Support dsa cp by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9720
* fix(examples/grpo): build rollout_infos before _close_and_remove in sudoku scheduler (#9745) by @Anai-Guo in https://github.com/modelscope/ms-swift/pull/9748
* fix npu qwen3.5 fla patch and use fla GDN by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9746
* update install_all by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9759
* compat modelscope_hub by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9760
* feat(grpo): add RLSD self-distilled advantage reweighting by @qychen2001 in https://github.com/modelscope/ms-swift/pull/9758
* fix(qwen3_omni): read router_aux_loss_coef from text_config by @Anai-Guo in https://github.com/modelscope/ms-swift/pull/9763
* add lora examples by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9766
* fix: Qwen3-TTS incorrect loss handling by @FelysNeko in https://github.com/modelscope/ms-swift/pull/9752
* fix(rlhf): mask teacher logprobs before KL by @tongchen126 in https://github.com/modelscope/ms-swift/pull/9767
* Add SDAR confidence-gated teacher distillation loss to GRPO by @qychen2001 in https://github.com/modelscope/ms-swift/pull/9768
* fix(template): guard MiniCPM-V/mPLUG-Owl3 video sampling against 0-fps metadata by @he-yufeng in https://github.com/modelscope/ms-swift/pull/9750
* [bugfix] fix packing streaming split by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9771
* fix megatron rollout buffer by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9774
* [model] support OvisOCR2 by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9773
* Fix async GRPO _prefetch crash: convert raw rows via to_samples() by @zzong2006 in https://github.com/modelscope/ms-swift/pull/9775
* support megatron_fsdp by @Jintao-Huang in https://github.com/modelscope/ms-swift/pull/9776
* Unlimited-OCR train R-SWA implementation by @z0o0ey in https://github.com/modelscope/ms-swift/pull/9781
* perf: vectorize _select_dataset for cached-dataset loading by @Va1-HallA in https://github.com/modelscope/ms-swift/pull/9777
* Support qwen3/3.5 adapter by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9785
* Fix MindSpeed GDN import on Ascend 950 by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9783
* fix(npu): handle frozen weights in MindSpeed gradient accumulation fusion by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9790
* Doc refactoring by @z0o0ey in https://github.com/modelscope/ms-swift/pull/9796
* fix(ci): refresh wandb in the CUDA test container setup by @he-yufeng in https://github.com/modelscope/ms-swift/pull/9789
* Feat: add qwen3_5-Moe GRPO megatron training scripts for Ascend NPU by @ys2025-AI in https://github.com/modelscope/ms-swift/pull/9792
* fix(npu): support Qwen3.5 LoRA and MoE sleep/wake in GRPO rollout by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9800
* fix router replay with cp by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9804
* fix qwen-asr import error by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9805
* Fix: torch_dtype argument not passed to inference engine in swift sample by @hyongtao-code in https://github.com/modelscope/ms-swift/pull/9808
* fix(npu): fix context parallelism for Qwen3.5 by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9814
* fix gkd use_vllm false by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9818
* update wechat by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9819
* fix(sample): don't crash on torch_dtype in engine_kwargs by @he-yufeng in https://github.com/modelscope/ms-swift/pull/9816
* Add kimi-k3 template by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9811
* perf(megatron): remove per-document device syncs in channel loss aggregation by @gakkiri in https://github.com/modelscope/ms-swift/pull/9795
* [megatron] Fix FA4 backward recompilation: pass max_seqlen as int in PackedSeqParams by @xuwang0117 in https://github.com/modelscope/ms-swift/pull/9798
* [bugfix] report per-device maximum memory by @kaining-never-stop in https://github.com/modelscope/ms-swift/pull/9825
* feat(rollout): support min_p sampling in GRPO/DAPO rollout (#9824) by @Anai-Guo in https://github.com/modelscope/ms-swift/pull/9826
* fix(npu): optimize MoE weight synchronization for NPU colocate training with vLLM-Ascend. by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9828
* docs: fix broken Reward Model example link in README by @latent-9 in https://github.com/modelscope/ms-swift/pull/9831
* [Bugfix (rlhf)] skip model reload during colocate vLLM init on FSDP2 by @ys2025-AI in https://github.com/modelscope/ms-swift/pull/9793
* bump transformers and peft by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9837

## New Contributors
* @1787648106 made their first contribution in https://github.com/modelscope/ms-swift/pull/9691
* @FelysNeko made their first contribution in https://github.com/modelscope/ms-swift/pull/9715
* @yszhli made their first contribution in https://github.com/modelscope/ms-swift/pull/9722
* @Anai-Guo made their first contribution in https://github.com/modelscope/ms-swift/pull/9748
* @qychen2001 made their first contribution in https://github.com/modelscope/ms-swift/pull/9758
* @zzong2006 made their first contribution in https://github.com/modelscope/ms-swift/pull/9775
* @Va1-HallA made their first contribution in https://github.com/modelscope/ms-swift/pull/9777
* @xuwang0117 made their first contribution in https://github.com/modelscope/ms-swift/pull/9798
* @kaining-never-stop made their first contribution in https://github.com/modelscope/ms-swift/pull/9825
* @latent-9 made their first contribution in https://github.com/modelscope/ms-swift/pull/9831

**Full Changelog**: https://github.com/modelscope/ms-swift/compare/v4.4.2...v4.4.3

---

> **Source** [modelscope/ms-swift](https://github.com/modelscope/ms-swift) · `v4.4.3` · 2026-08-12 · [upstream release](https://github.com/modelscope/ms-swift/releases/tag/v4.4.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
