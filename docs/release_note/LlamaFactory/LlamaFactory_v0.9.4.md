---
title: "LlamaFactory v0.9.4"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.9.4"
version: "v0.9.4"
published: "2025-12-31"
type: "patch"
lang: "en"
summary: "Repository name updated: LLaMA-Factory → LlamaFactory · Python 3.9–3.10 have been deprecated; LlamaFactory now requires Python 3.11–3.13 · Migrated from pip to uv; use uv pip install llamafactory"
---

# LlamaFactory v0.9.4

### Farewell to 2025. Thank you to all contributors and supporters. We will continue to deliver an easy and efficient LLM fine-tuning framework to the community in 2026. Stay tuned.

### Breaking

- Repository name updated: LLaMA-Factory → **LlamaFactory**
- Python 3.9–3.10 have been deprecated; LlamaFactory now requires **Python 3.11–3.13**
- Migrated from pip to **[uv](https://github.com/astral-sh/uv)**; use `uv pip install llamafactory`
- The official LlamaFactory **blog** is now live: https://blog.llamafactory.net/en/

### New features

- 🔥 Support **[Orthogononal Fine-Tuning (OFT)](https://arxiv.org/abs/2506.19847)** by @zqiu24 in #8623 
- 🔥 Support **Semantic Initialization** for new added tokens by @ximinng in #9267 
- 🔥 Support **Megatron-LM** training via [MCoreAdapter](https://github.com/alibaba/ROLL/tree/main/mcore_adapter) by @Kuangdd01 in #9237 
- 🔥 Support **[KTransformers](https://github.com/kvcache-ai/ktransformers)** backend by @JimmyPeilinLi in #9400 
- Support [MPO](https://arxiv.org/abs/2403.19443) algorithm by @Kuangdd01 in #8930 
- Support FP8 training by @penfever in #8960 
- Support [Transformers v5](https://huggingface.co/blog/transformers-v5) by @tangefly in #9569 
- Support reasoning and plaintext in function call message by @tangefly in #9610 
- Support DeepSpeed AutoTP by @sunyi0505 in #9602 
- Support efficient NPU fused kernels by @frozenleaves in #9520 
- Support TRL 0.24 by @UsernameFull in #9617 

### Models

- Falcon H1 by @dhiaEddineRhaiem in #8403 
- Kimi-VL and GLM-4.5V by @Kuangdd01 in #8462 
- Gemma3n by @Kuangdd01 in #8509 
- Granite4 by @Tuyohai in #8680 
- Qwen3-2507 by @hiyouga in #8750 
- MiniCPM-V 4.0 by @ZMXJJ in #8813 
- Intern-S1-mini by @hhaAndroid in #8976 
- Seed-OSS by @Kuangdd01 in #8992 
- MiniCPM-V 4.5 by @tc-mb in #9022 
- InternVL-3.5 by @Kuangdd01 in #9028 
- ERNIE-4.5-Text and ERNIE-4.5-VL by @isLinXu in #9165 
- Ling-V2 by @wangsff in #9188 
- Qwen3-VL and Qwen3-Omni by @xvxuopop and @Kuangdd01 in #9196 
- Hunyuan-mt by @wyfdgg in #9284 
- GLM-4.6V by @isLinXu in #9586 
- Ministral 3 by @tangefly in #9582 
- VibeThinker by @isLinXu in #9616 
- MiMo-V2-Flash by @isLinXu in #9637 
- MiniMax-M1 and MiniMax-M2 by @isLinXu in #9680 

### Thanks to teams collaborating with LlamaFactory in 2025

- NPU Team: @jiaqiw09 @frozenleaves @xvxuopop @UsernameFull @codemayq 
- KTransformers Team: @JimmyPeilinLi @poryfly @mrhaoxx 
- ROLL Team

### And to individuals who made significant contributions

- @Kuangdd01 @isLinXu @tangefly 
- [@Copilot](https://github.com/apps/copilot-swe-agent)

**Full Changelog**: https://github.com/hiyouga/LLaMA-Factory/compare/v0.9.3...v0.9.4

---

> **Source** [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · `v0.9.4` · 2025-12-31 · [upstream release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.9.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
