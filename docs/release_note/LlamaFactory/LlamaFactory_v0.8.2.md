---
title: "LlamaFactory v0.8.2"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.8.2"
version: "v0.8.2"
published: "2024-06-19"
type: "patch"
lang: "en"
summary: "Support GLM-4 tools and parallel function calling · Support PiSSA fine-tuning"
---

# LlamaFactory v0.8.2

### New features

- Support GLM-4 tools and parallel function calling by @mMrBun in #4173 
- Support **PiSSA** fine-tuning by @hiyouga in #4307 

### New models

- Base models
  - DeepSeek-Coder-V2 (16B MoE/236B MoE) 📄
- Instruct/Chat models
  - MiniCPM-2B 📄🤖
  - DeepSeek-Coder-V2-Instruct (16B MoE/236B MoE)  📄🤖

### New datasets

- Supervised fine-tuning datasets
  - Neo-sft (zh)
  - Magpie-Pro-300K-Filtered (en) by @EliMCosta in #4309 
  - WebInstruct (en) by @EliMCosta in #4309 

### Bug fix

- Fix DPO+ZeRO3 problem by @hiyouga 
- Add MANIFEST.in by @iamthebot in #4191 
- Fix eos_token in llama3 pretrain by @dignfei in #4204 
- Fix vllm version by @kimdwkimdw and @hzhaoy in #4234 and #4246 
- Fix Dockerfile by @EliMCosta in #4314 
- Fix pandas version by @zzxzz12345 in #4334 
- Fix #3162 #3196 #3778 #4198 #4209 #4221 #4227 #4238 #4242 #4271 #4292 #4295 #4326 #4346 #4357 #4362

---

> **Source** [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · `v0.8.2` · 2024-06-19 · [upstream release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.8.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
