---
title: "LlamaFactory v0.9.2"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.9.2"
version: "v0.9.2"
published: "2025-03-11"
type: "patch"
lang: "en"
---

# LlamaFactory v0.9.2

### We will attend the **vLLM Beijing Meetup** on Mar 16th! See you in Beijing 👋

- Event info: https://mp.weixin.qq.com/s/viPRDlhnzS3qO9-96fMeeA

### New features

- 🔥 **[APOLLO optimizer](https://arxiv.org/abs/2412.05270)** by @zhuhanqing in #6617 
- 🔥 **[SwanLab](https://github.com/SwanHubX/SwanLab)** experiment tracker by @Zeyi-Lin in #6401 
- 🔥 **[Ray Trainer](https://docs.ray.io/en/latest/train/train.html)** by @erictang000 in #6542 
- Batch inference with **vLLM** TP by @JieShenAI in #6190 
- QLoRA on Ascend NPU by @codemayq in #6601 
- Yarn and Llama3 rope scaling by @hiyouga in #6693 
- Support `uv run` by @erictang000 in #6907 
- Ollama modelfile auto-generation by @codemayq in #4686 
- Mistral tool prompt by @AlongWY in #5473 
- Llama3 and Qwen2 tool prompt by @hiyouga in #6367 and #6369 

### New models

- Base models
  - GPT2 (0.1B/0.4B/0.8B/1.5B) 📄
  - Granite 3.0-3.1 (1B/2B/3B/8B) 📄
  - PaliGemma2 (3B/10B/28B) 📄🖼️
  - Moonlight (16B) 📄
  - DeepSeek V2-V2.5 Base (236B) 📄
  - DeepSeek V3 Base (671B) 📄
- Instruct/Chat models
  - Granite 3.0-3.1 (1B/2B/3B/8B) by @Tuyohai in #5922 📄🤖
  - DeepSeek R1 (1.5B/7B/8B/14B/32B/70B/671B) by @Qwtdgh in #6767 📄🤖
  - TeleChat2 (3B/7B/12B/35B/115B) @ge-xing in #6313 📄🤖
  - Qwen2.5-VL (3B/7B/72B) by @hiyouga in #6779 📄🤖🖼️
  - PaliGemma2-mix (3B/10B/28B) by @Kuangdd01 in #7060 📄🤖🖼️
  - Qwen2 Audio (7B) by @BUAADreamer in #6701 📄🤖🔈
  - MiniCPM-V/MiniCPM-o (8B) by @BUAADreamer in #6598 and #6631 📄🤖🖼️🔈
  - InternLM3-Instruct (8B) by @hhaAndroid in #6640 📄🤖
  - Marco-o1 (8B) 📄🤖
  - Skywork-o1 (8B) 📄🤖
  - Phi-4 (14B) 📄🤖
  - Moonlight Instruct (16B) 📄
  - Mistral Small (24B) 📄🤖
  - QwQ (32B) 📄🤖
  - Llama-3.3-Instruct (70B) 📄🤖
  - QvQ (72B) 📄🤖🖼️
  - DeepSeek V2-V2.5 (236B) 📄🤖
  - DeepSeek V3 (671B) 📄🤖

### New datasets

- Supervised fine-tuning datasets
  - OpenO1 (en) 📄
  - Open Thoughts (en) 📄
  - Open-R1-Math (en) 📄
  - Chinese-DeepSeek-R1-Distill (zh) 📄

### Changes

- Refactor VLMs register by @hiyouga in #6600 
- Refactor mm plugin by @hiyouga in #6895 
- Refactor template by @hiyouga in #6896
- Refactor data pipeline by @hiyouga in #6901 
- Update vlm arguments by @hiyouga in #6976
- We have cleaned large files in git history using [BFG Repo-Cleaner](https://github.com/rtyley/bfg-repo-cleaner), find the backup repo [here](https://github.com/hiyouga/LLaMA-Factory-backup)

### Bug fix

- Add `trust_remote_code` option by @yafshar in #5819 
- Fix mllama config by @hiyouga in #6137 and #6140 
- Fix mllama pad by @hiyouga in #6151 and #6874 
- Pin tokenizers version by @hiyouga in #6157
- Fix tokenized data loading by @village-way in #6160
- Show hostname in webui by @hykilpikonna in #6170
- Fix VLMs zero3 training by @hiyouga in #6233
- Add `skip_special_tokens` by @hiyouga in #6363 
- Support non-reenterent-gc by @hiyouga in #6364 
- Add `disable_shuffling` option by @hiyouga in #6388
- Fix gen kwargs by @hiyouga in #6395 
- Enable module run by @youkaichao in #6457 
- Fix eval loss value by @hiyouga in #6465 
- Fix paligemma inference by @hiyouga in #6483 
- Add deepseek v3 template by @piamo in #5507 
- Add http proxy argument in dockerfile by @shibingli in #6462
- Fix trainer generate by @hiyouga in #6512 
- Fix pixtral DPO training by @hiyouga in #6547 
- Fix ray args by @stephen-nju in #6564 
- Fix minicpm template by @BUAADreamer in #6620 
- Fix stop tokens for visual detection by @hiyouga in #6624 
- Pin vllm version by @hiyouga in #6629
- Fix mllama any image by @hiyouga in #6637 and #7053 
- Fix tokenizer max length by @xiaosu-zhu in #6632 
- Fix webui locale by @steveepreston in #6653 
- Fix MiniCPM-o DPO training by @BUAADreamer in #6657 
- Fix Qwen2 MoE training by @hiyouga in #6684 
- Upgrade to gradio 5 by @hiyouga in #6688 
- Support Japanese local file by @engchina in #6698
- Fix DPO loss by @yinpu in #6722 
- Webui thinking mode by @hiyouga in #6778 
- Upgrade to transformers 4.48 by @hiyouga in #6628 
- Fix ci by @hiyouga in #6787 
- Fix instructions about installing fa2 on win platform in readme by @neavo in #6788
- Fix minicpmv plugin by @BUAADreamer in #6801, #6890, #6946 and #6998 
- Fix qwen2 tool prompt by @yueqis in #6796 
- Fix llama pro by @hiyouga in #6814 
- Allow thought in function call by @yueqis in #6797 
- Add `ALLOW_EXTRA_ARGS` by @hiyouga in #6831 
- Fix Qwen2vl plugin by @hiyouga in #6855 
- Upgrade vllm to 0.7.2 by @hiyouga in #6857 
- Fix unit test for tool using by @hiyouga in #6865 
- Skip broken data in sharegpt converter by @JJJYmmm in #6879 
- Fix qwen2.5 plugin for video by @JJJYmmm in #6868 
- Parsing chat template from tokenizer by @hiyouga in #6905 (experimental)
- Fix mllama KTO training by @marko1616 in #6904 
- Fix grad checkpointing by @hiyouga in #6916 and #6931 
- Fix ollama template by @hiyouga in #6902
- Fix ray example by @erictang000 in #6906 
- Improve error handling for media by @noahc1510 in #6128 
- Support split on each dataset by @SrWYG in #5522 
- Fix gen kwargs in training by @aliencaocao in #5451 
- Liger kernel for qwen2.5vl by @hiyouga in #6930 
- Fix lora target modules by @hiyouga in #6944 
- Add `ray_storage_path` by @erictang000 in #6920 
- Fix trainer.predict by @hiyouga in #6972 
- Add min resolution control by @hiyouga in #6975 
- Upgrade transformers to 4.49 by @hiyouga in #6982 
- Add seed in vllm batch predict by @JieShenAI in #7058
- Fix pyproject.toml by @hiyouga in #7067 
- Upgrade CANN images by @leo-pony in #7061 
- Display swanlab link by @Zeyi-Lin in #7089 
- Fix hf engine by @hiyouga in #7120 
- Add bailing chat template by @oldstree in #7117 
- Use bicubic resampler instead of nearest by @hiyouga in #7143 
- Fix Qwen2Audio plugin by @lsrami in #7166 
- Destroy process group by @hiyouga in #7174 
- Fix swanlab callback by @Zeyi-Lin in #7176 
- Fix paligemma plugin by @hiyouga in #7181 
- Escape html tag in webui by @hiyouga in #7190 
- Upgrade vllm to 0.7.3 by @hiyouga in #7183 and #7193
- Fix parser by @hiyouga in #7204 
- Fix function formatter by @zhangch-ss in #7201 
- Fix deepspeed config by @hiyouga in #7205 
- Fix dataloader by @hiyouga in #7207 
- Fix export tokenizer by @hiyouga in #7230 
- Update arguments by @hiyouga in #7231 
- Add `swanlab_logdir` by @Zeyi-Lin in #7219 
- Fix vllm batch prediction by @hiyouga in #7235 
- Avoid exit after saving tokenized data by @hiyouga in #7244 
- Support commit in env by @hiyouga in #7247 
- Release v0.9.2 by @hiyouga in #7242 
- Fix #1204 #3306 #3462 #5121 #5270 #5404 #5444 #5472 #5518 #5616 #5712 #5714 #5756 #5944 #5986 #6020 #6056 #6092 #6136 #6139 #6149 #6165 #6213 #6287 #6320 #6345 #6345 #6346 #6348 #6358 #6362 #6391 #6415 #6439 #6448 #6452 #6482 #6499 #6543 #6546 #6551 #6552 #6610 #6612 #6636 #6639 #6662 #6669 #6738 #6772 #6776 #6780 #6782 #6793 #6806 #6812 #6819 #6826 #6833 #6839 #6850 #6854 #6860 #6878 #6885 #6889 #6937 #6948 #6952 #6960 #6966 #6973 #6981 #7036 #7064 #7072 #7116 #7125 #7130 #7171 #7173 #7180 #7182 #7184 #7192 #7198 #7213 #7234 #7243 

**Full Changelog**: https://github.com/hiyouga/LLaMA-Factory/compare/v0.9.1...v0.9.2

---

> **Source** [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · `v0.9.2` · 2025-03-11 · [upstream release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.9.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
