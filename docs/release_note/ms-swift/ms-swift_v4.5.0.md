---
title: "ms-swift v4.5.0"
project: "ms-swift"
repo: "modelscope/ms-swift"
tag: "v4.5.0"
version: "v4.5.0"
published: "2026-08-14"
type: "minor"
lang: "en"
summary: "Qwen3.8, the strongest open Qwen generation so far. Same Gated DeltaNet hybrid backbone as Qwen3.5/3.6, native vision/video, hybrid thinking on by default, plus tunable reasoning effort and preserved historical…"
---

# ms-swift v4.5.0

## New Models

### Qwen3.8

[Qwen3.8](https://modelscope.cn/models/Qwen/Qwen3.8-27B), the strongest open Qwen generation so far. Same Gated DeltaNet hybrid backbone as Qwen3.5/3.6, native vision/video, hybrid thinking on by default, plus tunable reasoning effort and preserved historical thinking. (#9914)

### NVIDIA Nemotron 3.5 Lightning

[Nemotron 3.5 Lightning 30B-A3B](https://modelscope.cn/models/nv-community/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16): hybrid Mamba-2 + MoE + Attention, 30B total / 3B active, 1M context, MTP. (#9894)

### Muse Glimmer

[Muse-Glimmer-30B](https://modelscope.cn/models/meta-models/Muse-Glimmer-30B), Meta’s 30B dense multimodal model distilled from Muse Spark for local agents. (#9887)

## Other changes

- [MiMo-V2.5](https://modelscope.cn/models/XiaomiMiMo/MiMo-V2.5) inference (vLLM / SGLang) (#9880)
- [DeepSeek-V4-Flash-0731](https://modelscope.cn/models/deepseek-ai/DeepSeek-V4-Flash-0731) adaptation (#9834)
- Thinking-prefix loss scale (#9875)
- OpenAI / Anthropic message processors (#9809)

---

## What's Changed
* fix: preserve explicit PEFT LoRA dtype by @yaodong-shen in https://github.com/modelscope/ms-swift/pull/9832
* Fix export merge_lora with quantization not working by @hyongtao-code in https://github.com/modelscope/ms-swift/pull/9830
* Support OpenAI and Anthropic message processors by @lumincui in https://github.com/modelscope/ms-swift/pull/9809
* [bugfix] Fix Qwen3.5 non-packing causal conv routing by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9812
* Fix Gemma 3 mixed-batch token type IDs by @GoGiants1 in https://github.com/modelscope/ms-swift/pull/9786
* remove qoder-review action by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9842
* Fix GKD Liger teacher routing by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9841
* fix(infer): propagate streaming errors by @RerankerGuo in https://github.com/modelscope/ms-swift/pull/9849
* fix(npu): handle BF16 MindSpeed grouped linear activation offload by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9846
* Fix GRPO offload compatibility with FSDP2 CPU offload by @addsubmuldiv in https://github.com/modelscope/ms-swift/pull/9844
* fix(infer): reject prompts without generation space by @RerankerGuo in https://github.com/modelscope/ms-swift/pull/9851
* docs(readme): fix v3.0 release note links by @RerankerGuo in https://github.com/modelscope/ms-swift/pull/9853
* Support ds v4 flash 0731 by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9834
* Fix missing LoRARequest injection in GRPOVllmEngine.infer_async by @Zuozhuo in https://github.com/modelscope/ms-swift/pull/9856
* fix(utils): close daemon event loops on shutdown by @RerankerGuo in https://github.com/modelscope/ms-swift/pull/9858
* fix(utils): preserve streamed download bytes by @RerankerGuo in https://github.com/modelscope/ms-swift/pull/9857
* fix(qwen3.5): add Torch fallback for Qwen3.5 linear attention SP by @meichangsu1 in https://github.com/modelscope/ms-swift/pull/9865
* update 4.4.3 image by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9869
* Support empty content openai message format and standalone tool message by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9861
* feat: add loss mask for response-start thinking prefixes <think> by @yph22 in https://github.com/modelscope/ms-swift/pull/9875
* [Infer] Fix transformers streaming logprobs by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9866
* support Xiaomi-MiMo-V2.5 inference( sglang / vllm ) by @z0o0ey in https://github.com/modelscope/ms-swift/pull/9880
* fix(template): keep MiMo dependencies optional by @RerankerGuo in https://github.com/modelscope/ms-swift/pull/9886
* Support muse-glimmer by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9887
* fix(rlhf): reduce sequence-parallel log-prob memory by @yongyaoduan in https://github.com/modelscope/ms-swift/pull/9882
* [model] support nemotron by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9894
* Fix MathORM false positives on parse failures by @Ruihan11 in https://github.com/modelscope/ms-swift/pull/9889
* Fix dcp_validation bug in megatron distributed saving by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9896
* fix:MiMo audio input by @z0o0ey in https://github.com/modelscope/ms-swift/pull/9898
* Fix sp with transformers5.15 by @tastelikefeet in https://github.com/modelscope/ms-swift/pull/9899
* Synchronize MuonClip max logits across ranks by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9901
* fix: add set_epoch() to DataLoaderDispatcher for streaming datasets by @tomzw11 in https://github.com/modelscope/ms-swift/pull/9902
* Fix alpha UMI Next loss scale by @taking-lying-flat in https://github.com/modelscope/ms-swift/pull/9900
* fix(megatron/grpo): clear MegatronGRPOTrainer._metrics per rollout  by @HSYZhang in https://github.com/modelscope/ms-swift/pull/9884
* fix megatron common pt save by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9908
* fix nemotron grpo by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9905
* remove auto_config patch for vllm by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9911
* [model] qwen3.8 by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9914
* rename qwen3.5 doc by @hjh0119 in https://github.com/modelscope/ms-swift/pull/9918
* fix(README): restore broken star history chart by @PingouinFerreux in https://github.com/modelscope/ms-swift/pull/9913

## New Contributors
* @yaodong-shen made their first contribution in https://github.com/modelscope/ms-swift/pull/9832
* @lumincui made their first contribution in https://github.com/modelscope/ms-swift/pull/9809
* @GoGiants1 made their first contribution in https://github.com/modelscope/ms-swift/pull/9786
* @RerankerGuo made their first contribution in https://github.com/modelscope/ms-swift/pull/9849
* @Zuozhuo made their first contribution in https://github.com/modelscope/ms-swift/pull/9856
* @yph22 made their first contribution in https://github.com/modelscope/ms-swift/pull/9875
* @yongyaoduan made their first contribution in https://github.com/modelscope/ms-swift/pull/9882
* @Ruihan11 made their first contribution in https://github.com/modelscope/ms-swift/pull/9889
* @tomzw11 made their first contribution in https://github.com/modelscope/ms-swift/pull/9902
* @HSYZhang made their first contribution in https://github.com/modelscope/ms-swift/pull/9884
* @PingouinFerreux made their first contribution in https://github.com/modelscope/ms-swift/pull/9913

**Full Changelog**: https://github.com/modelscope/ms-swift/compare/v4.4.3...v4.5.0

---

> **Source** [modelscope/ms-swift](https://github.com/modelscope/ms-swift) · `v4.5.0` · 2026-08-14 · [upstream release](https://github.com/modelscope/ms-swift/releases/tag/v4.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
