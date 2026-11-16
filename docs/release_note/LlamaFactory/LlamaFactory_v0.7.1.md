---
title: "LlamaFactory v0.7.1"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.7.1"
version: "v0.7.1"
published: "2024-05-15"
type: "patch"
lang: "en"
summary: "Add CLIs usage, now we recommend using llamafactory-cli to launch training and inference, the entry point is located at the cli.py"
---

# LlamaFactory v0.7.1

### 🚨🚨 Core refactor 🚨🚨

- Add **CLIs** usage, now we recommend using `llamafactory-cli` to launch training and inference, the entry point is located at the [cli.py](https://github.com/hiyouga/LLaMA-Factory/blob/main/src/llamafactory/cli.py)
- Rename files: `train_bash.py` -> `train.py`, `train_web.py` -> `webui.py`, `api_demo.py` -> `api.py`
- Remove files: `cli_demo.py`, `evaluate.py`, `export_model.py`, `web_demo.py`, use `llamafactory-cli chat/eval/export/webchat` instead
- Use **YAML configs** in examples instead of shell scripts for a pretty view
- Remove the sha1 hash check when loading datasets
- Rename arguments: `num_layer_trainable` -> `freeze_trainable_layers`, `name_module_trainable` -> `freeze_trainable_modules`

The above changes are made by @hiyouga in #3596 

#### REMINDER: Now [installation](https://github.com/hiyouga/LLaMA-Factory?tab=readme-ov-file#installation) is **mandatory** to use LLaMA Factory

### New features

- Support training and inference on the Ascend NPU 910 devices by @zhou-wjjw and @statelesshz (docker images are also provided)
- Support `stop` parameter in vLLM engine by @zhaonx in #3527 
- Support fine-tuning token embeddings in freeze tuning via the `freeze_extra_modules` argument
- Add Llama3 [quickstart](https://github.com/hiyouga/LLaMA-Factory?tab=readme-ov-file#quickstart) to readme

### New models

- Base models
  - Yi-1.5 (6B/9B/34B) 📄
  - DeepSeek-V2 (236B) 📄
- Instruct/Chat models
  - Yi-1.5-Chat (6B/9B/34B) 📄🤖
  - Yi-VL-Chat (6B/34B) by @BUAADreamer in #3748 📄🖼️🤖
  - Llama3-Chinese-Chat (8B/70B) 📄🤖
  - DeepSeek-V2-Chat (236B) 📄🤖

### Bug fix

- Add badam arguments to LlamaBoard by @codemayq in #3487 
- Add openai data format to readme by @khazic in #3490 
- Fix slow operation in dpo/orpo trainer by @hiyouga 
- Fix badam examples by @pha123661 in #3578 
- Fix download link of the nectar_rm dataset by @ZeyuTeng96 in #3588 
- Add project by @Katehuuh in #3601 
- Fix dockerfile by @gaussian8 in #3604 
- Fix full tuning of MLLMs by @BUAADreamer in #3651 
- Fix gradio environment variables by @cocktailpeanut in #3654 
- Fix typo and add log in API by @Tendo33 in #3655 
- Fix download link of the phi-3 model by @YUUUCC in #3683 
- Fix #3559 #3560 #3602 #3603 #3606 #3625 #3650 #3658 #3674 #3694 #3702 #3724 #3728

---

> **Source** [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · `v0.7.1` · 2024-05-15 · [upstream release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.7.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
