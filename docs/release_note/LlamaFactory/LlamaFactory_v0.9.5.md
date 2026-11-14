---
title: "LlamaFactory v0.9.5"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.9.5"
version: "v0.9.5"
published: "2026-05-30"
type: "patch"
lang: "en"
summary: "Added primary support for Qwen3.5/Qwen3.6/Gemma4 models and compatibility with Transformers v5."
---

# LlamaFactory v0.9.5

Added primary support for Qwen3.5/Qwen3.6/Gemma4 models and compatibility with Transformers v5.

## What's Changed

* [misc] set dev version by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/9703
* fix(fp8): add Transformer Engine backend support by @sbhavani in https://github.com/hiyouga/LlamaFactory/pull/9705
* [misc] Compatible with an empty architectures field in config.json by @tangefly in https://github.com/hiyouga/LlamaFactory/pull/9709
* [model] support Youtu-LLM-2B by @isLinXu in https://github.com/hiyouga/LlamaFactory/pull/9707
* [misc] lint by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/9710
* Update pyproject.toml and requirements by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/9714
* [v1] add init plugin by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/9716
* [misc] Add a PyTorch version warning for Conv3D. by @tangefly in https://github.com/hiyouga/LlamaFactory/pull/9715
* [feature] add support for EAFT loss by @ymxyll in https://github.com/hiyouga/LlamaFactory/pull/9720
* [v1] add cli sampler by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/9721
* [v1] add renderer ut by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/9722
* Update README.md by @tangefly in https://github.com/hiyouga/LlamaFactory/pull/9724
* [CI]improve cuda ci cache by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/9725
* Add support for LiquidAI's LFM2.5 (Liquid Foundation Models) to LLaMA-Factory. by @vovanphuc in https://github.com/hiyouga/LlamaFactory/pull/9726
* Add support for LiquidAI's LFM2.5-VL vision-language model by @vovanphuc in https://github.com/hiyouga/LlamaFactory/pull/9729
* [misc] fix parser by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/9730
* [refactor] rename lfm template to lfm2 and add LFM 2.5 to README by @vovanphuc in https://github.com/hiyouga/LlamaFactory/pull/9731
* [fix] correct ktransformers example config paths and templates by @JimmyPeilinLi in https://github.com/hiyouga/LlamaFactory/pull/9732
* [model] support for microsoft's Phi-4-mini by @ctx289 in https://github.com/hiyouga/LlamaFactory/pull/9734
* [misc] fix fp8 by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/9742
* [v1] add batch generator by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/9744
* [deps] fix package by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/9745
* [model] support HY-MT model by @isLinXu in https://github.com/hiyouga/LlamaFactory/pull/9746
* [v1] upgrade batching by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/9751
* [model] fixed&added Hunyuan models by @isLinXu in https://github.com/hiyouga/LlamaFactory/pull/9750
* [v1] add sft by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/9752
* using mp to run kernel test by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/9754
* [v1] fix kernel moe patch by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/9867
* [misc] update mcore related docker and mca supported models by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10114
* [feat] support `all_exhausted_without_replacement` in datasets.interleave_datasets by @Moenupa in https://github.com/hiyouga/LlamaFactory/pull/10112
* chore: Update outdated GitHub Actions versions by @pgoslatara in https://github.com/hiyouga/LlamaFactory/pull/10123
* [v1] support training with fsdp2 by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/9773
* [v0] Fix reward model training safetensors saving by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10137
* Fix : add visual.pos_embed to Qwen3-VL visual model keys by @je1lee in https://github.com/hiyouga/LlamaFactory/pull/10139
* [feature] support using ray.remote to start distributed training. by @xvxuopop in https://github.com/hiyouga/LlamaFactory/pull/10109
* update peft, deepspeed, adapt transformers v5 by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10147
* [model] support youtu-vl model by @isLinXu in https://github.com/hiyouga/LlamaFactory/pull/10152
* Fix race condition in LoggerHandler during multi-GPU training by @yurekami in https://github.com/hiyouga/LlamaFactory/pull/10156
* [assets] update readme by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/10159
* [model] support MiniCPM-o-4.5 by @isLinXu in https://github.com/hiyouga/LlamaFactory/pull/10163
* add dpo/kto fsdp fsdp2 support by @UsernameFull in https://github.com/hiyouga/LlamaFactory/pull/10127
* [model] support GLM-4.7-Flash SFT by @Shanay-Mehta in https://github.com/hiyouga/LlamaFactory/pull/10173
* [v1] init commit for v1 docs by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10145
* [model] support GLM-OCR SFT by @Ataraxy33 in https://github.com/hiyouga/LlamaFactory/pull/10183
* [model] add liger kernel support for Qwen3-Next by @Shanay-Mehta in https://github.com/hiyouga/LlamaFactory/pull/10176
* [V1] Add v1 LoRA/Freeze support and merge workflow by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10157
* Add ASFT by @susjunyou in https://github.com/hiyouga/LlamaFactory/pull/10174
* [V1] support deepspeed by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10181
* [v1] support quantization by @sunyi0505 in https://github.com/hiyouga/LlamaFactory/pull/10161
* [v0/v1] fix ut huggingface hub 429 error when transformers>=5.0.0 by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10155
* [mca] update supported models by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10196
* fix: remove safe_serialization arg for transformers v5 compatibility by @Alm0stSurely in https://github.com/hiyouga/LlamaFactory/pull/10208
* Add DeepSpeed Z3 leaf module for Qwen3-Next by @Shanay-Mehta in https://github.com/hiyouga/LlamaFactory/pull/10194
* [model] Adapt Qwen3.5 by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10213
* [model] update constants by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/10220
* [model] support Aeva by @louzongzhi in https://github.com/hiyouga/LlamaFactory/pull/10214
* upgrade to ROCm 7.2 base image, drop PyTorch reinstall by @mjkvaak-amd in https://github.com/hiyouga/LlamaFactory/pull/10223
* [fix] register visual part for Qwen3.5 by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10227
* [V1] add seed for training and fix gradient checkpointing by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10211
* fix(vllm): support mixed multimodal payloads by @phiott in https://github.com/hiyouga/LlamaFactory/pull/10225
* [misc] fix constants by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/10232
* Add Trackio Integration for LlamaFactory by @ParagEkbote in https://github.com/hiyouga/LlamaFactory/pull/10165
* [model] support Qwen3.5 all series models by @isLinXu in https://github.com/hiyouga/LlamaFactory/pull/10237
* fix: qwen3.5 projector path by @LittleYanlin in https://github.com/hiyouga/LlamaFactory/pull/10242
* fix: get ray head ip by @SnowCharmQ in https://github.com/hiyouga/LlamaFactory/pull/10252
* [V1] Support meta loading for full and free by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10236
* fix: Fix compatibility issue with HuggingFace Dataset Column when sav… by @pyxnpyx in https://github.com/hiyouga/LlamaFactory/pull/10254
* docs: fix Python version requirement from 3.10 to >=3.11.0 by @ll0v0ll in https://github.com/hiyouga/LlamaFactory/pull/10259
* fix: convert filter() to list in read_cloud_json to fix broken empty-check by @jnMetaCode in https://github.com/hiyouga/LlamaFactory/pull/10260
* [mca] support qwen3.5 by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10265
* fix(mm): fallback to audio_processor when feature_extractor is missing by @xxddccaa in https://github.com/hiyouga/LlamaFactory/pull/10267
* update npu docker by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10268
* fix(template): correct gpt_oss format_assistant by @RuijieH in https://github.com/hiyouga/LlamaFactory/pull/10269
* fix: make position_id_per_seconds configurable for Qwen2OmniPlugin by @LincolnBurrows2017 in https://github.com/hiyouga/LlamaFactory/pull/10281
* fix: unused keys in ray example by @SnowCharmQ in https://github.com/hiyouga/LlamaFactory/pull/10290
* [v1] add qwen3 templates and fix rendering plugin. by @xvxuopop in https://github.com/hiyouga/LlamaFactory/pull/10212
* fix: handle empty content list in system message by @LincolnBurrows2017 in https://github.com/hiyouga/LlamaFactory/pull/10291
* fix(MiniCPMVPlugin): fix IndexError in process_messages when training with video by @xxddccaa in https://github.com/hiyouga/LlamaFactory/pull/10276
* feat(data): add SGSC zero-hallucination B2B dataset (NOO-Protocol) by @robertglools in https://github.com/hiyouga/LlamaFactory/pull/10284
* [fix] fit neat_packing & mrope model packing by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10283
* chore: mca workflow compatible with qwen-vl series by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10303
* [liger_kernel] support Qwen3.5. by @wyt2000 in https://github.com/hiyouga/LlamaFactory/pull/10313
* fix: mimo-v2 tool call by @isLinXu in https://github.com/hiyouga/LlamaFactory/pull/10315
* [v1] add callbacks by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10255
* ci: add nginx cache config for Ascend NPU CI environment by @Goalina in https://github.com/hiyouga/LlamaFactory/pull/10323
* [V1]add init on rank0 for fsdp2 by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10264
* [v1] support ulysses cp for fsdp2 by @sunyi0505 in https://github.com/hiyouga/LlamaFactory/pull/10262
* [feat] support LlamaFactory SFT training by HyperParallel FSDP2 backend by @Cui-yshoho in https://github.com/hiyouga/LlamaFactory/pull/10289
* fix moe by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10334
* fix: qwen3vl timestamp by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10338
* [model] gemma4 by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10346
* fix: gemma4 mm_token_type_ids padding by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10359
* fix: set mm_projectors for omni models by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10378
* fix: projector lookup for gemma4 modules by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10382
* fix(data): SeedToolUtils.tool_extractor returns content when no tool calls found by @kuishou68 in https://github.com/hiyouga/LlamaFactory/pull/10408
* [V1]support resume training from checkpoint by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10280
* [v1] fix device mesh and clip_grad_norm for ulysses cp by @sunyi0505 in https://github.com/hiyouga/LlamaFactory/pull/10366
* [v1] add deepspeed zero3 trigger for low memory usage weight loading by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10300
* support qwen3.6 models by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10415
* [v1] fix epoch and steps by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10422
* [packing] add qwen35 patch for neat_packing by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10436
* [data] support discard history cot for multiturn by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10435
* [v1] fix init on meta in transformers v5 by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10414
* [misc] code lint by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10439
* feat(npu): add Qwen3.5 support with Partial RoPE and Hybrid Attention by @curnane-lab in https://github.com/hiyouga/LlamaFactory/pull/10421
* fix: handle NotImplementedError in export_model for transformers>=5.0 (fixes #10410) by @octo-patch in https://github.com/hiyouga/LlamaFactory/pull/10438
* [v1] fix device_mesh and sp for fsdp2 by @sunyi0505 in https://github.com/hiyouga/LlamaFactory/pull/10429
* [fa2] fix IMA when train qwen3_5 by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10448
* [model] support Hy3-Preview by @isLinXu in https://github.com/hiyouga/LlamaFactory/pull/10432
* [misc] bump transformers version upperbound by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10446
* Add KTransformers AMX MoE SFT support via Accelerate by @JimmyPeilinLi in https://github.com/hiyouga/LlamaFactory/pull/10430
* [packing] fix gdn crash when meeting dummy image by @Kuangdd01 in https://github.com/hiyouga/LlamaFactory/pull/10453
* Optimize Qwen video token metadata preprocessing by @luca-888 in https://github.com/hiyouga/LlamaFactory/pull/10404
* fix(docs): correct typo in examples/README_zh.md by @simulikeit in https://github.com/hiyouga/LlamaFactory/pull/10462
* fix(data/converter): handle None tool_calls in OpenAI-style messages by @Anai-Guo in https://github.com/hiyouga/LlamaFactory/pull/10455
* [fix] fix qwen3_6 template doc by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10470
* [model] support MiniCPM-V-4.6 by @tsjyma in https://github.com/hiyouga/LlamaFactory/pull/10472
* [fix] Fix MiniCPM-V-4.6 image preprocessing behavior by @tsjyma in https://github.com/hiyouga/LlamaFactory/pull/10478
* [docker] update npu docker by @xvxuopop in https://github.com/hiyouga/LlamaFactory/pull/10479
* Fix: add missing return statement in MiniCPMVPlugin.get_mm_inputs by @ZMXJJ in https://github.com/hiyouga/LlamaFactory/pull/10500
* [V1] support reward training stage by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10431
* add torch profiler callback by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10463
* [V1] add cuda fused moe kernel,  implementing with triton by @frozenleaves in https://github.com/hiyouga/LlamaFactory/pull/10481
* [v1] support liger_kernel by @sunyi0505 in https://github.com/hiyouga/LlamaFactory/pull/10493
* [v1] Add FlashAttention selection and implement normal / padding-free / dynamic batching by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10469
* fix: use getattr for profiler attrs to support MCA TrainingArguments by @Copilot in https://github.com/hiyouga/LlamaFactory/pull/10506
* [v1] Implement dynamic padding-free stretrgy for batching by @XuanyuChen-SEU in https://github.com/hiyouga/LlamaFactory/pull/10507
* [v1] fix padding free with sp by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10513
* [v0] fix non-packing batch (bsz>1) for Qwen3.5 with flash attention by @jiaqiw09 in https://github.com/hiyouga/LlamaFactory/pull/10529
* [fix] Fix NPU FusedMoE and RMSNorm by @xvxuopop in https://github.com/hiyouga/LlamaFactory/pull/10512
* [version] release v0.9.5 by @hiyouga in https://github.com/hiyouga/LlamaFactory/pull/10532

## New Contributors
* @sbhavani made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/9705
* @ymxyll made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/9720
* @vovanphuc made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/9726
* @ctx289 made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/9734
* @Moenupa made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10112
* @pgoslatara made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10123
* @je1lee made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10139
* @yurekami made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10156
* @Shanay-Mehta made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10173
* @Ataraxy33 made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10183
* @susjunyou made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10174
* @Alm0stSurely made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10208
* @louzongzhi made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10214
* @mjkvaak-amd made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10223
* @phiott made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10225
* @ParagEkbote made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10165
* @LittleYanlin made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10242
* @SnowCharmQ made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10252
* @pyxnpyx made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10254
* @ll0v0ll made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10259
* @jnMetaCode made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10260
* @xxddccaa made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10267
* @RuijieH made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10269
* @LincolnBurrows2017 made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10281
* @robertglools made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10284
* @wyt2000 made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10313
* @Goalina made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10323
* @Cui-yshoho made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10289
* @kuishou68 made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10408
* @curnane-lab made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10421
* @octo-patch made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10438
* @luca-888 made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10404
* @simulikeit made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10462
* @Anai-Guo made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10455
* @tsjyma made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10472
* @XuanyuChen-SEU made their first contribution in https://github.com/hiyouga/LlamaFactory/pull/10507

**Full Changelog**: https://github.com/hiyouga/LlamaFactory/compare/v0.9.4...v0.9.5

---

> **Source** [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · `v0.9.5` · 2026-05-30 · [upstream release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.9.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
