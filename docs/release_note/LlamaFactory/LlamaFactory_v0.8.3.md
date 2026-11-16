---
title: "LlamaFactory v0.8.3"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.8.3"
version: "v0.8.3"
published: "2024-07-18"
type: "patch"
lang: "en"
summary: "🔥Support contamination-free packing via the neat_packing argument · 🔥Support split evaluation via the eval_dataset argument · 🔥Support HQQ/EETQ quantization via the quantization_method argument"
---

# LlamaFactory v0.8.3

### New features

- 🔥Support [contamination-free packing](https://github.com/MeetKai/functionary/tree/main/functionary/train/packing) via the `neat_packing` argument by @chuan298 in #4224 
- 🔥Support split evaluation via the `eval_dataset` argument by @codemayq in #4691 
- 🔥Support HQQ/EETQ quantization via the `quantization_method` argument by @hiyouga 
- 🔥Support ZeRO-3 when using BAdam by @Ledzy in #4352 
- Support train on the last turn via the `mask_history` argument by @aofengdaxia in #4878 
- Add NPU Dockerfile by @MengqingCao in #4355 
- Support building FlashAttention2 in Dockerfile by @hzhaoy in #4461 
- Support `batch_eval_metrics` at evaluation by @hiyouga 

### New models

- Base models
  - InternLM2.5-7B 📄
  - Gemma2 (9B/27B) 📄
- Instruct/Chat models
  - TeleChat-1B-Chat by @hzhaoy in #4651 📄🤖
  - InternLM2.5-7B-Chat 📄🤖
  - CodeGeeX4-9B-Chat 📄🤖
  - Gemma2-it (9B/27B) 📄🤖

### Changes

- Fix DPO cutoff len and deprecate `reserved_label_len` argument
- Improve loss function for reward modeling

### Bug fix

- Fix numpy version by @MengqingCao in #4382 
- Improve cli by @kno10 in #4409 
- Add `tool_format` parameter to control prompt by @mMrBun in #4417
- Automatically label npu issue by @MengqingCao in #4445 
- Fix flash_attn args by @stceum in #4446 
- Fix docker-compose path by @MengqingCao in #4544 
- Fix torch-npu dependency by @hashstone in #4561 
- Fix deepspeed + pissa by @hzhaoy in #4580 
- Improve cli by @injet-zhou in #4590 
- Add project by @wzh1994 in #4662 
- Fix docstring by @hzhaoy in #4673 
- Fix Windows command preview in WebUI by @marko1616 in #4700 
- Fix vllm 0.5.1 by @T-Atlas in #4706 
- Fix save value head model callback by @yzoaim in #4746 
- Fix CUDA Dockerfile by @hzhaoy in #4781 
- Fix examples by @codemayq in #4804 
- Fix evaluation data split by @codemayq in #4821 
- Fix CI by @codemayq in #4822 
- Fix #2290 #3974 #4113 #4379 #4398 #4402 #4410 #4419 #4432 #4456 #4458 #4549 #4556 #4579 #4592 #4609 #4617 #4674 #4677 #4683 #4684 #4699 #4705 #4731 #4742 #4779 #4780 #4786 #4792 #4820 #4826

---

> **Source** [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · `v0.8.3` · 2024-07-18 · [upstream release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.8.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
