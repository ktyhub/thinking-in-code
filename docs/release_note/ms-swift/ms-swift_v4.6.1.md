---
title: "ms-swift v4.6.1"
project: "ms-swift"
repo: "modelscope/ms-swift"
tag: "v4.6.1"
version: "v4.6.1"
published: "2026-11-13"
type: "patch"
lang: "en"
summary: "megatron-core >= 0.18 (was >= 0.16). (#10481, #10087)"
---

# ms-swift v4.6.1

# v4.6.1

## New Models

- [NVIDIA-Nemotron-3.5-Super-VL-120B-A12B](https://modelscope.cn/models/nv-community/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)(#10377)
- [NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://modelscope.cn/models/nv-community/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)(#10458)
- [Unlimited-OCR-2](https://modelscope.cn/models/PaddlePaddle/Unlimited-OCR-2)(#10448)
- [MiniCPM-OCR-1.0](https://modelscope.cn/models/OpenBMB/MiniCPM-OCR-1.0)(#10414)
- [Olmo-3-7B-Think](https://modelscope.cn/models/allenai/Olmo-3-7B-Think)(#10371)
- [flint](https://modelscope.cn/models/RecursiveSI/flint)(#10482)
- [EmbeddingGemma-2](https://modelscope.cn/models/google/embeddinggemma-2)(#10392)
- Decision / System-1 family: [THX-02](https://modelscope.cn/models/HAL-X/THX-02) (#10398), [kev-0.8b/4b/9b](https://huggingface.co/jaredpalmer) (#10407), [laya](https://modelscope.cn/models/convaiinnovations/laya) (#10445) and [StartLux-Decision-v1.1 4B/9B/27B-AutoThink](https://modelscope.cn/models/StartLuxAI/StartLux-Decision-v1.1-27B-AutoThink) (#10479).

## Decision Task (typed-decision / JEV family)

- Four new decision heads with templates, alignment tests and `examples/train/decision/*.sh` recipes: THX-02 (#10398), `jaredpalmer/kev-*` pointer heads (#10407), Laya (#10445) and StartLux (#10479).
- Throughput: whole-batch forward for Clef/Kev scoring heads (#10551) and multi-question forward for Kev (#10494).
- Correctness & calibration: two-stage JEV temperature calibration callback (#10399), gradients preserved for confidently-wrong predictions (#10355), multimodal base modes with text-only data (#10420), injected output embeddings kept out of the head module tree (#10540).
- The THX-02-specific packing check is replaced by the generic `support_padding_free` flag on `ModelMeta` (#10480).
- `docs/*/BestPractices/Decision.md` rewritten as the entry point for the family.

## New Features & Compatibility

- **Entropack flexible quantization** for QLoRA-style training, with a new best-practice doc (`Flexble-Quantization-With-Entropack.md`) and `examples/train/qlora/entropack.sh`. (#10415)
- **Megatron parallel-argument preflight**: TP/PP/CP/EP/ETP divisibility is checked at the Swift argument entry point before process-group initialization, with actionable error messages; the Transformers backend and the Megatron export path are unchanged. (#10393)
- **Gemma 4**: packing / `padding_free` for text-only data on the Megatron backend. (#10542)
- **Huawei Ascend**: Megatron training migrated to Megatron-Core 0.18 with `MegatronAdaptor` + TENPU (#10087); standalone environment check script `examples/ascend/check_env.py` (#10390).

## Megatron-SWIFT & MTP

- `--mtp_num_layers` now defaults to `auto` and follows the model checkpoint; `--mtp_shared_weights` defaults to automatic detection (enabled when the checkpoint holds fewer MTP layers than the configured depth). To add MTP to a base model that ships none, set `--mtp_num_layers N --mtp_allow_random_init true`. (#10416, requires mcore-bridge >= 1.7.0)
- Async-checkpoint import fixed against the latest Megatron dev branch. (#10421)

## Performance

- `selective_log_softmax` chunked instead of looping per token. (#10337)
- Reduced custom and chunked cross-entropy work in SFT. (#10353)
- Lower NPU gradient, RMSNorm and MoE-permutation overhead in Megatron training. (#10513)

## Security

- `external_plugins` declared in a checkpoint's `args.json` is no longer restored silently on resume. (#10422)
- HMAC authentication for ZMQ control messages in the checkpoint engine, abstracted to cover both HCCL and NCCL transports. (#10373, #10381)
- `load_file` now applies `SafeMediaPath` before opening a local media path, so `SWIFT_MEDIA_ALLOWED_DIRS` can no longer be bypassed through template image/audio loading. (#10370)

## Bug Fixes

- **RL**: SP state preserved during async server rollout (#10426); GRPO logging by gathering/caching rollout records (#10427); `overlong_filter` honored in the Liger loss (#10404); policy gradients preserved across dynamic chunks (#10397); pre-forward hook outputs reused in the multimodal Liger loss (#10411); length rewards saturate beyond the configured maximum (#10500); PPO callbacks (#9872); server-mode rollout now ships `max_length` / `truncation_strategy` to the engine and validates them against the training template, so prompt truncation matches engine pre-fill (#10549).
- **Alignment losses**: alpha-divergence overflow in DPO (#10394), stabilized DiscoPOP modulated exponential (#10313), EXO smoothing kept local to its loss (#10323), BCO running statistics unchanged during evaluation (#10321), MuonClip Nesterov update order (#10341).
- **Template / agent**: agent templates with tool schemas (#10522), a user turn accepted after tool results across agent formats (#10523), every turn closed when appending user follow-ups (#10524), GLM-5-Next template (#10509), Gemma 4 tool-call arguments containing quotes or newlines (#10456), transparent images composited onto white in `load_image` (#10345).
- **Data & metrics**: lazy dataset fallback independent of resume history (#10375), distributed mean accumulators kept local (#10326), items preserved in round-robin list splitting (#10324), numpy scalars kept out of training logs (#10474).
- **Infra**: vLLM's `AutoConfig` override bypassed when loading config (#10503), final GPTQ checkpoint format persisted after export (#10425), NPU RNG state checkpointed alongside CUDA/MUSA (#10406), SP dataloader and `num_input_tokens` accounting aligned (#10508).
- **Docs**: Megatron-Core / mcore-bridge version requirements aligned (#10526), Qwen3.8-Flash-Next parameter accounting corrected (#10428), NPU naming unified as "Huawei Ascend NPU" (#10496), NPU guide refreshed (#10356).

## Environment Changes

**`megatron-core >= 0.18` (was `>= 0.16`).** (#10481, #10087)

**`deepspeed >= 0.19.3,< 0.20` (was `< 0.19`).**

**`transformers < 5.23` (was `< 5.20`).** (#10453)

**`mcore-bridge >= 1.7.0` (was `>=1.6.5`).** (#10416)

## Breaking Behavior Changes

**MTP weights are loaded by default.** `--mtp_num_layers` now defaults to `auto` instead of `None`, and `--mtp_shared_weights` defaults to automatic (`None`) instead of `False`. A checkpoint that ships MTP layers therefore trains them. To keep the 4.6.0 behaviour, pass `--mtp_num_layers 0 --mtp_shared_weights false` (setting both is required: a checkpoint that declares repeated MTP weights would otherwise resolve `mtp_shared_weights=True` and fail the `mtp_num_layers > 0` check). To add MTP to a base checkpoint that has none, set `--mtp_num_layers N --mtp_allow_random_init true` (#10416).

**Plugins declared in a checkpoint are no longer restored.** `external_plugins` found in a checkpoint's `args.json` is ignored on resume; pass `--external_plugins` explicitly if you depend on it (#10422, security fix).

## New Contributors
* @yifan-2004 made their first contribution in https://github.com/modelscope/ms-swift/pull/10324
* @intmeX made their first contribution in https://github.com/modelscope/ms-swift/pull/10375
* @leuitong made their first contribution in https://github.com/modelscope/ms-swift/pull/9872
* @Liuchenbing-2026 made their first contribution in https://github.com/modelscope/ms-swift/pull/10428
* @rrrxxx0510 made their first contribution in https://github.com/modelscope/ms-swift/pull/10337
* @doofzoff made their first contribution in https://github.com/modelscope/ms-swift/pull/10398
* @YuYamada0917 made their first contribution in https://github.com/modelscope/ms-swift/pull/10411
* @anh-nguyenn made their first contribution in https://github.com/modelscope/ms-swift/pull/10436
* @hidooonWuu made their first contribution in https://github.com/modelscope/ms-swift/pull/10390
* @kjgggggg made their first contribution in https://github.com/modelscope/ms-swift/pull/10456
* @Devin-DC-Huang made their first contribution in https://github.com/modelscope/ms-swift/pull/10496
* @1tex made their first contribution in https://github.com/modelscope/ms-swift/pull/10542
* @bitborne made their first contribution in https://github.com/modelscope/ms-swift/pull/10540

**Full Changelog**: https://github.com/modelscope/ms-swift/compare/v4.6.0...v4.6.1

---

> **Source** [modelscope/ms-swift](https://github.com/modelscope/ms-swift) · `v4.6.1` · 2026-11-13 · [upstream release](https://github.com/modelscope/ms-swift/releases/tag/v4.6.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
