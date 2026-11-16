---
title: "LlamaFactory v0.8.0"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.8.0"
version: "v0.8.0"
published: "2024-06-07"
type: "minor"
lang: "en"
summary: "Support single-node distributed training in Web UI · Add dropdown menu for easily resuming from checkpoints and picking saved configurations and @hzhaoy in #4053 · Support selecting checkpoints of full/freeze tuning"
---

# LlamaFactory v0.8.0

### Stronger [LlamaBoard](https://github.com/hiyouga/LLaMA-Factory?tab=readme-ov-file#fine-tuning-with-llama-board-gui-powered-by-gradio) 💪😀

- Support single-node distributed training in Web UI
- Add dropdown menu for easily resuming from checkpoints and picking saved configurations by @hiyouga and @hzhaoy in #4053 
- Support selecting checkpoints of full/freeze tuning
- Add throughput metrics to LlamaBoard by @injet-zhou in #4066 
- Faster UI loading

### New features

- Add KTO algorithm by @enji-zhou in #3785 
- Add SimPO algorithm by @hiyouga 
- Support passing `max_lora_rank` to the vLLM backend by @jue-jue-zi in #3794 
- Support preference datasets in sharegpt format and remove big files from git repo by @hiyouga in #3799 
- Support setting system messages in CLI inference by @ycjcl868 in #3812 
- Add `num_samples` option in `dataset_info.json` by @seanzhang-zhichen in #3829 
- Add NPU docker image by @dongdongqiang2018 in #3876 
- Improve NPU document by @MengqingCao in #3930 
- Support SFT packing with greedy knapsack algorithm by @AlongWY in #4009 
- Add `llamafactory-cli env` for bug report
- Support image input in the API mode
- Support random initialization via the `train_from_scratch` argument
- Initialize CI

### New models

- Base models
  - Qwen2 (0.5B/1.5B/7B/72B/MoE) 📄
  - PaliGemma-3B (pt/mix) 📄🖼️
  - GLM-4-9B 📄
  - Falcon-11B 📄
  - DeepSeek-V2-Lite (16B) 📄
- Instruct/Chat models
  - Qwen2-Instruct (0.5B/1.5B/7B/72B/MoE) 📄🤖
  - Mistral-7B-Instruct-v0.3 📄🤖
  - Phi-3-small-8k-instruct (7B) 📄🤖
  - Aya-23 (8B/35B) 📄🤖
  - OpenChat-3.6-8B 📄🤖
  - GLM-4-9B-Chat 📄🤖
  - TeleChat-12B-Chat by @hzhaoy in #3958 📄🤖
  - Phi-3-medium-8k-instruct (14B) 📄🤖
  - DeepSeek-V2-Lite-Chat (16B) 📄🤖
  - Codestral-22B-v0.1 📄🤖

### New datasets

- Pre-training datasets
  - FineWeb (en)
  - FineWeb-Edu (en)
- Supervised fine-tuning datasets
  - Ruozhiba-GPT4 (zh)
  - STEM-Instruction (zh)
- Preference datasets
  - Argilla-KTO-mix-15K (en)
  - UltraFeedback (en)

### Bug fix

- Fix RLHF for multimodal finetuning
- Fix LoRA target in multimodal finetuning by @BUAADreamer in #3835 
- Fix `yi` template by @Yimi81 in #3925 
- Fix abort issue in LlamaBoard by @injet-zhou in #3987 
- Pass `scheduler_specific_kwargs` to `get_scheduler` by @Uminosachi in #4006 
- Fix hyperparameters helps by @xu-song in #4007 
- Update issue template by @statelesshz in #4011 
- Fix vllm dtype parameter
- Fix exporting hyperparameters by @MengqingCao in #4080 
- Fix DeepSpeed ZeRO3 in PPO trainer
- Fix #3108 #3387 #3646 #3717 #3764 #3769 #3803 #3807 #3818 #3837 #3847 #3853 #3873 #3900 #3931 #3965 #3971 #3978 #3992 #4005 #4012 #4013 #4022 #4033 #4043 #4061 #4075 #4077 #4079 #4085 #4090 #4120 #4132 #4137 #4139

---

> **Source** [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · `v0.8.0` · 2024-06-07 · [upstream release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
