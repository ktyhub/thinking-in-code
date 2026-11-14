---
title: "ms-swift v4.6.0"
project: "ms-swift"
repo: "modelscope/ms-swift"
tag: "v4.6.0"
version: "v4.6.0"
published: "2026-10-13"
type: "minor"
lang: "en"
summary: "Added the decision task type for JEV-style decision models: instead of generating text, the model returns calibrated probabilities over each question's fixed option set (choice / score / noul) in a single forward pass."
---

# ms-swift v4.6.0

# v4.6.0

## JEV Support (typed-decision / System-1)

- Added the `decision` task type for JEV-style decision models: instead of generating text, the model returns calibrated probabilities over each question's fixed option set (`choice` / `score` / `noul`) in a single forward pass. (#10306)
- Ready-to-use recipes for three released decision models — [JEV-27B-VL](https://www.modelscope.cn/models/autotrust/JEV-27B-VL), [Clef](https://www.modelscope.cn/models/Cloudflare/clef) and [OmniJev](https://modelscope.cn/models/AI-ModelScope/OmniJev) — covering training, inference and LoRA merge/export. Any CausalLM can also be converted with `swift sft --task_type decision`.
- Details: [Decision (Best Practices)](https://github.com/modelscope/ms-swift/blob/main/docs/source_en/BestPractices/Decision.md) · [examples](https://github.com/modelscope/ms-swift/tree/main/examples/train/decision)

## New Models

- [MiniCPM5](https://modelscope.cn/models/OpenBMB/MiniCPM5-2B) (1B / 2B) — LLM series with base and SFT variants, vLLM inference supported.
- [MiniCPM-V-4.7](https://modelscope.cn/models/OpenBMB/MiniCPM-V-4.7-35B-A3B) (1B / 35B-A3B) — vision-language models with image and video support.
- [GLM-5.3-Flash](https://modelscope.cn/models/ZhipuAI/GLM-5.3-Flash) — ZhipuAI GLM-5.3-Flash with vision and video support.
- [DeepSeek-V4.1-Flash](https://www.modelscope.cn/models/deepseek-ai/DeepSeek-V4.1-Flash) — full-parameter SFT & GRPO on Megatron-SWIFT plus vLLM inference.
- [Xing4.0-29B-A4B](https://www.modelscope.cn/models/XingChen-AGI/Xing4.0-29B-A4B) — MLA + MoE + mHC; LoRA & full-parameter SFT (DDP / DeepSpeed ZeRO-3) with grouped_mm expert acceleration (~3.7x).
- [MonkeyOCRv2](https://modelscope.cn/models/zenosai/MonkeyOCRv2-B) (S / B) — OCR and document-understanding models.

## New Features & Compatibility

- Added a Moore Threads (MUSA) backend via torchada. (#10224)
- Compatibility: transformers ≥ 5.17 kernel proxy, vLLM 0.28+ colocate weight sync / wake-up API, and TRL optional-dependency checks under Transformers 5. (#9770, #10311, #10315)
- Updated qwen4_exp / glm5_next MTP examples with GLM-5.3 support. (#10219)

## Security

- Hardened the WebUI and rollout: fixed unauthenticated RCE and arbitrary file read, a rollout-side vulnerability, and GitHub Actions workflow injection. (#10209, #10218, #10226, #10227)
- Authenticate before request-body deserialization; `weights_only=True` for Megatron checkpoint loading; download security fixes. (#10062, #10066, #10234, #10235)

## Training & RL

- Loss & gradient alignment across SP, DPO, DAPO/CISPO/FIPO and GKD/GRPO (including Liger and off-policy paths); listwise reranker and partial gradient-accumulation fixes. (#9977, #10100, #10104, #10116, #10130, #10144, #10185, #10244, #10285)
- Megatron & parallelism: contiguous CP token order, ring-padding handling in output unpacking / packed seq_acc / MoE aux loss, mcore checkpoint metadata. (#10071, #10113, #10181, #10182, #10184, #10242)
- Training stability: ZeRO-3 hooks after generation errors, GaLore checkpointing, LISA init and layer selection, SP sampler options, CPU-offload activation views. (#10132, #10140, #10157, #10161, #10173, #10260)
- RLHF & rollout: colocate offload / vLLM wake-up ordering, async rollout failure propagation, IPC bucket acknowledgment, vLLM LoRA metadata and local-teacher adapters. (#10092, #10107, #10109, #10207, #10231, #10232)
- Embedding & reranker: InfoNCE negative sampling and gradient compensation under DDP / Megatron DP, DP metric gathering, WeMM duplicate forward. (#10059, #10068, #10069, #10081, #10088, #10091, #10150)

## Inference & Deployment

- Fixed qwen-omni vLLM inference, video metadata handling after frame sampling, and `video_second_per_grid` tensor handling. (#10168, #10274, #10330)
- `infer`: adapter-cache and async-request isolation, independent event-loop thread, streamed-request completion, worker error propagation, SSE heartbeats. (#10080, #10086, #10093, #10094, #10134, #10135, #10177)
- Device-map memory resolution for MP+DDP; CLI list-value serialization; blank `LOG_LEVEL` / `LOCAL_RANK` handling; WebUI default port. (#10210, #10217, #10245, #10246, #10248, #10292)

## Templates, Agents & Tool Calling

- Tool-call correctness across GLM / glm4_5 / Qwen3-Coder / kimi_k25 / ReAct / Seed-OSS, OpenAI & Anthropic tool-result alignment, and JSON-Schema type-union parsing. (#10169, #10174, #10270, #10271, #10284, #10293, #10294, #10299, #10300, #10304)
- Template fixes for gemma4, marco_o1, Qwen3-VL video, Janus, rejected-response placement and tool-response names. (#10120, #10127, #10171, #10190, #10199, #10203, #10230, #10238)

## Data & WebUI

- Dataset pipeline: cross-rank cache races, Arrow tool-schema fidelity, streaming packing worker detection, versioned map cache, metadata cache invalidation, media sharding. (#10083, #10121, #10125, #10159, #10160, #10162, #10297, #10298, #10301)
- WebUI: named datasets now list their hub IDs. (#10119)
- Model loading: Idefics3 `AutoModelForImageTextToText`, MiniCPM position cache under DDP, MiniCPM-o padding offsets, seq-cls metadata round-trips. (#10187, #10202, #10228, #10253)

## Performance

- Vectorized ring-attention LSE extraction and packed zigzag CP reconstruction; faster dataloader for single-rank groups; batched rollout / teacher-API metric gathering. (#10064, #10082, #10239, #10240, #10241)

## Documentation

- Added `AGENTS.md` and contribution guidelines (human-submitted PRs; first-time and AI-assisted contributors). (#10339, #10347)
- Updated hardware and docker-image docs; fixed reward examples, fractional-loss-weight docs and in-page anchors. (#10067, #10118, #10170, #10172, #10188, #10233)

## New Contributors
* @GodRayyy made their first contribution in https://github.com/modelscope/ms-swift/pull/9770
* @MrCapricornLiu made their first contribution in https://github.com/modelscope/ms-swift/pull/10068
* @zmazak0 made their first contribution in https://github.com/modelscope/ms-swift/pull/10121
* @aprylewu made their first contribution in https://github.com/modelscope/ms-swift/pull/10120
* @pentaoa made their first contribution in https://github.com/modelscope/ms-swift/pull/10130
* @MaxFreedomPollard made their first contribution in https://github.com/modelscope/ms-swift/pull/10049
* @yhb643 made their first contribution in https://github.com/modelscope/ms-swift/pull/10116
* @rxlqn made their first contribution in https://github.com/modelscope/ms-swift/pull/10109
* @Dev-next-gen made their first contribution in https://github.com/modelscope/ms-swift/pull/10169
* @burm95 made their first contribution in https://github.com/modelscope/ms-swift/pull/10192
* @linjunxiong made their first contribution in https://github.com/modelscope/ms-swift/pull/10214
* @Linxiushen made their first contribution in https://github.com/modelscope/ms-swift/pull/10217
* @hkxxxxx made their first contribution in https://github.com/modelscope/ms-swift/pull/10190
* @lanpigwen made their first contribution in https://github.com/modelscope/ms-swift/pull/10238
* @li-lizhe made their first contribution in https://github.com/modelscope/ms-swift/pull/10230
* @Lesereingrape made their first contribution in https://github.com/modelscope/ms-swift/pull/10245
* @YueshenZ made their first contribution in https://github.com/modelscope/ms-swift/pull/10271
* @caizhi-mt made their first contribution in https://github.com/modelscope/ms-swift/pull/10224
* @LeonSGP43 made their first contribution in https://github.com/modelscope/ms-swift/pull/10298
* @Zhuoxi2000 made their first contribution in https://github.com/modelscope/ms-swift/pull/10293
* @WhichPaths made their first contribution in https://github.com/modelscope/ms-swift/pull/10242
* @stanleyIl made their first contribution in https://github.com/modelscope/ms-swift/pull/10301
* @MincongZhou made their first contribution in https://github.com/modelscope/ms-swift/pull/10308
* @fukalous made their first contribution in https://github.com/modelscope/ms-swift/pull/10260
* @xunzhang1128 made their first contribution in https://github.com/modelscope/ms-swift/pull/10338

**Full Changelog**: https://github.com/modelscope/ms-swift/compare/v4.5.3...v4.6.0

---

> **Source** [modelscope/ms-swift](https://github.com/modelscope/ms-swift) · `v4.6.0` · 2026-10-13 · [upstream release](https://github.com/modelscope/ms-swift/releases/tag/v4.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
