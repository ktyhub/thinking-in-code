---
title: "LlamaFactory v0.9.0"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.9.0"
version: "v0.9.0"
published: "2024-09-08"
type: "minor"
lang: "en"
summary: "🔥Support fine-tuning Qwen2-VL model on multi-image datasets · 🔥Support time&memory-efficient Liger-Kernel via the enable_liger_kernel argument"
---

# LlamaFactory v0.9.0

### Congratulations on 30,000 stars 🎉 Follow us at *[X (twitter)](https://twitter.com/llamafactory_ai)*

### New features

- 🔥Support fine-tuning **[Qwen2-VL](https://github.com/QwenLM/Qwen2-VL)** model on multi-image datasets by @simonJJJ in #5290 
- 🔥Support time&memory-efficient **[Liger-Kernel](https://github.com/linkedin/Liger-Kernel)** via the `enable_liger_kernel` argument by @hiyouga 
- 🔥Support memory-efficient **[Adam-mini](https://github.com/zyushun/Adam-mini)** optimizer via the `use_adam_mini` argument by @relic-yuexi in #5095 
- Support fine-tuning Qwen2-VL model on video datasets by @hiyouga in #5365 and @BUAADreamer in #4136 (needs patch https://github.com/huggingface/transformers/pull/33307)
- Support fine-tuning vision language models (VLMs) using RLHF/DPO/ORPO/SimPO approaches by @hiyouga 
- Support [Unsloth](https://unsloth.ai/blog/long-context)'s asynchronous activation offloading method via the `use_unsloth_gc` argument
- Support [vLLM](https://github.com/vllm-project/vllm) 0.6.0 version
- Support MFU calculation by @yzoaim in #5388 

### New models

- Base models
  - Qwen2-Math (1.5B/7B/72B) 📄🔢
  - Yi-Coder (1.5B/9B) 📄🖥️
  - InternLM2.5 (1.8B/7B/20B) 📄
  - Gemma-2-2B 📄
  - Meta-Llama-3.1 (8B/70B) 📄
- Instruct/Chat models
  - MiniCPM/MiniCPM3 (1B/2B/4B) by @LDLINGLINGLING in #4996 #5372 📄🤖
  - Qwen2-Math-Instruct (1.5B/7B/72B) 📄🤖🔢
  - Yi-Coder-Chat (1.5B/9B) 📄🤖🖥️
  - InternLM2.5-Chat (1.8B/7B/20B) 📄🤖
  - Qwen2-VL-Instruct (2B/7B) 📄🤖🖼️
  - Gemma-2-2B-it by @codemayq in #5037 📄🤖
  - Meta-Llama-3.1-Instruct (8B/70B) 📄🤖
  - Mistral-Nemo-Instruct (12B) 📄🤖

### New datasets

- Supervised fine-tuning datasets
  - Magpie-ultra-v0.1 (en) 📄
  - Pokemon-gpt4o-captions (en&zh) 📄🖼️
- Preference datasets
  - RLHF-V (en) 📄🖼️
  - VLFeedback (en) 📄🖼️

### Changes

- Due to compatibility consideration, fine-tuning vision language models (VLMs) requires `transformers>=4.35.0.dev0`, try `pip install git+https://github.com/huggingface/transformers.git` to install it.
- `visual_inputs` has been deprecated, now you do not need to specify this argument.
- LlamaFactory now adopts lazy loading for multimodal inputs, see #5346 for details. Please use `preprocessing_batch_size` to restrict the batch size in dataset pre-processing (supported by @naem1023 in #5323 ).
- LlamaFactory now supports `lmf` (equivalent to `llamafactory-cli`) as a shortcut command.

### Bug fix

- Fix LlamaBoard export by @liuwwang in #4950 
- Add ROCm dockerfiles by @HardAndHeavy in #4970 
- Fix deepseek template by @piamo in #4892 
- Fix pissa savecallback by @codemayq in #4995 
- Add Korean display language in LlamaBoard by @Eruly in #5010 
- Fix deepseekcoder template by @relic-yuexi in #5072 
- Fix examples by @codemayq in #5109 
- Fix `mask_history` truncate from last by @YeQiuO in #5115 
- Fix jinja template by @YeQiuO in #5156 
- Fix PPO optimizer and lr scheduler by @liu-zichen in #5163 
- Add SailorLLM template by @chenhuiyu in #5185 
- Fix XPU device count by @Zxilly in #5188 
- Fix bf16 check in NPU by @Ricardo-L-C in #5193 
- Update NPU docker image by @MengqingCao in #5230 
- Fix image input api by @marko1616 in #5237 
- Add liger-kernel link by @ByronHsu in #5317 
- Fix #4684 #4696 #4917 #4925 #4928 #4944 #4959 #4992 #5035 #5048 #5060 #5092 #5228 #5252 #5292 #5295 #5305 #5307 #5308 #5324 #5331 #5334 #5338 #5344 #5366 #5384

---

> **Source** [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · `v0.9.0` · 2024-09-08 · [upstream release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
