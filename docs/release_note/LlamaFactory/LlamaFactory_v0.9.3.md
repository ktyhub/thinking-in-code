---
title: "LlamaFactory v0.9.3"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.9.3"
version: "v0.9.3"
published: "2025-06-16"
type: "patch"
lang: "en"
summary: "Event info: https://aws.amazon.com/cn/events/summits/shanghai/"
---

# LlamaFactory v0.9.3

### We will attend the **AWS Summit Shanghai 2025** on June 20th! See you in Shanghai 👋

- Event info: https://aws.amazon.com/cn/events/summits/shanghai/

### New features

- 🔥 InternVL2.5/InternVL3 model by @Kuangdd01 in #7258 
- 🔥 Qwen2.5-Omni model by @Kuangdd01 in #7537 
- 🔥 Llama 4 and Gemma 3 multimodal model by @hiyouga in #7273 and #7611 
- 🔥 [Official GPU docker image](https://hub.docker.com/r/hiyouga/llamafactory/tags) by @yzoaim in #8181 
- 🔥 SGLang inference by @Qiaolin-Yu and @jhinpan in #7278 
- GLM-4-0414 and GLM-Z1 model by @zRzRzRzRzRzRzR in #7695 
- Kimi-VL model by @Kuangdd01 in #7719 
- Qwen3 model by @hiyouga in #7885 
- MiMo and MiMo-VL model by @Kuangdd01 in #7946 #8249 
- SmolLM/SmolLM2 model by @akshatsehgal in #8050 #8220 
- MiniCPM4 model by @LDLINGLINGLING in #8314 
- Mistral-Small-3.1 model by @Kuangdd01 in #8335 
- Add `scripts/eval_bleu_rouge.py` by @SnowFox4004 in #7419 
- Add Muon optimizer by @tianshijing in #7749 
- Support video/audio inference with vLLM by @hiyouga in #7566 
- Support S3/GCS cloud data by @erictang000 in #7567 
- Support vLLM-ascend by @leo-pony in #7739 
- Support OmegaConf by @hiyouga in #7793 
- Support early-stopping by @hiyouga in #7797 
- Add `enable_thinking` argument for reasoning models by @hiyouga in #7928 
- PyTorch-elastic and fault-tolerant launch by @hubutui in #8286 
- Length Desensitization DPO ([LD-DPO](https://arxiv.org/abs/2409.06411)) by @amangup in #8362 

### New models

- Base models
  - SmolLM/SmolLM2 (135M/360M/1.7B) 📄
  - Qwen3 Base (0.6B/1.7B/4B/8B/14B/30B) 📄
  - Gemma 3 (1B/4B/12B/27B) 📄🖼️
  - MedGemma (4B) 📄🩺
  - MiMo Base (7B) 📄
  - Seed-Coder Base (8B) 📄⌨️
  - Mistral-Small-3.1 Base (24B) 📄🖼️
  - GLM-4-0414 Base (32B) 📄
  - Llama 4 (109B/492B) 📄🖼️
- Instruct/Chat models
  - SmolLM/SmolLM2 Instruct (135M/360M/1.7B) 📄🤖
  - MiniCPM4 (0.5B/8B) 📄🤖
  - Qwen3 (0.6B/1.7B/4B/8B/14B/32B/30B/235B) 📄🤖🧠
  - Gemma 3 Instruct (1B/4B/12B/27B) 📄🤖🖼️
  - InternVL2.5/3 Instruct/MPO (1B/2B/8B/14B/38B/78B) 📄🤖🖼️
  - Qwen2.5-Omni (3B/7B) 📄🤖🖼️🔈
  - MedGemma Instruct (4B/27B) 📄🤖🩺
  - MiMo SFT/RL (7B) 📄🤖
  - MiMo-VL SFT/RL (7B) 📄🤖🖼️
  - Hunyuan Instruct (7B) 📄🤖
  - Seed-Coder Instruct/Reasoning (8B) 📄🤖🧠⌨️
  - GLM-4-0414/GLM-Z1 Instruct (9B/32B) 📄🤖🧠
  - DeepSeek-R1-0528 (8B/671B) 📄🤖🧠
  - Kimi-VL Instruct/Thinking (17B) 📄🤖🧠🖼️
  - Mistral-Small-3.1 Instruct (24B) 📄🤖🖼️
  - Qwen2.5-VL Instruct (32B) 📄🤖🖼️
  - Llama 4 Instruct (109B/492B) 📄🤖🖼️

### New datasets

- Preference datasets
  - COIG-P (zh) 📄

### Bug fix

- Fix add new tokens by @flashJd in #7253
- Fix ultrachat_200k dataset by @felladrin in #7259 
- Add efficient 4D attention mask for neat packing by @BlackWingedKing in #7272 
- Fix WSD lr scheduler by @x22x22 in #7304 
- Fix position ids in neat packing by @BlackWingedKing  in #7318 
- Fix proxy setting in webui by @taoharry in #7332
- Improve entrypoint by @ENg-122 in #7345 
- Fix ray destroy process group by @erictang000 in #7395 
- Fix SGLang dependencies by @guoquan in #7432 
- Upgrade docker package version by @rumichi2210 in #7442 
- Update liger kernel for qwen2.5-vl by @xiaosu-zhu in #7453 
- Fix lora on quant models by @GuoCoder in #7456 
- Enable liger kernel for gemma3 by @kennylam777 in #7462 
- Enable liger kernel for paligemma by @eljandoubi in #7466 
- Add Swanlab lark notification by @Xu-pixel in #7481 
- Fix gemma3 use cache attribute by @ysjprojects in #7500 
- Fix pixtral plugin by @Kuangdd01 in #7505 
- Fix KTO mismatch pair strategy by @himalalps in #7509 
- Support `dataset_shards` by @aliencaocao in #7530 
- Fix qwen2.5omni plugin by @Kuangdd01 in #7573 #7578 #7883
- Fix ppo trainer by @gechengze in #7576 
- Fix workflow by @Shawn-Tao in #7635 
- Support qwen2.5omni audio+video2text by @Kuangdd01 in #7638 
- Upgrade deps for SGLang by @adarshxs in #7639 
- Allow ray env setting by @erictang000 in #7647 
- Fix CUDA warning on intel xpus by @jilongW in #7655 
- Fix liger kernel patch by @danny980521 in #7660
- Fix rocm dockerfile by @fluidnumerics-joe in #7725 
- Fix qwen2vl with neat packing by @GeoffreyChen777 in #7754 
- Fix a constant by @AlphaBladez in #7765 
- Fix autogptq for Gemma by @ddddng in #7786
- Fix internvl models by @Kuangdd01 in #7801 #7803 #7817 #8129 
- Fix DeepSpeed ZeRO3 on moe models by @hiyouga in #7826 #7879
- Fix gradient checkpoint func for vit by @hiyouga in #7830 
- Support S3 ray storage by @erictang000 in #7854 
- Fix Kimi-VL attention by @Kuangdd01 in #7867 
- Fix minicpm-o vllm inference by @hiyouga in #7870 
- Unfreeze muiltimodal projector in freeze training by @zhaop-l in #7872 
- Fix Qwen2.5-omni plugin by @hiyouga in #7875 #7962 
- Add warp support link by @ericdachen in #7887 
- Replace eos token for base model by @hiyouga in #7911 
- Add `eval_on_each_dataset` arg by @hiyouga in #7912 
- Fix qwen3 loss by @hiyouga in #7923 #8109 
- Add repetition_penalty to api by @wangzhanxd in #7958 
- Add graphgen to readme by @tpoisonooo in #7974 
- Support video params in vllm batch infer by @Kuangdd01 in #7992 
- Fix tool formatter by @yunhao-tech in #8000 
- Fix kimi vl plugin by @hiyouga in #8015 
- Support batch preprocess in vllm batch infer by @Shawn-Tao in #8051 
- Support loading remote folder by @erictang000 in #8078 
- Fix video utils import by @Kuangdd01 in #8077 
- Fix SGLang LoRA inference by @Kiko-RWan in #8067 
- Fix cli by @Wangbiao2 in #8095 
- Fix pretrain workflow by @SunnyHaze in #8099 
- Fix rope args for yarn by @piamo in #8101 
- Add no build isolation in installing by @hiyouga in #8103 
- Switch to GPTQModel and deprecate AutoGPTQ by @hiyouga in #8108 
- Support llama3 parallel function call by @hiyouga in #8124 
- Add `data_shared_file_system` by @hiyouga in #8179 
- Fix load remote files by @youngwookim in #8183 
- Fix dataset info by @Muqi1029 in #8197 
- Fix qwen2.5 omni merge script by @Kuangdd01 in #8227 #8293 
- Add unittest for VLM save load by @Kuangdd01 in #8248 
- Add tag in swanlab by @Zeyi-Lin in #8258 
- Support input video frames by @Kuangdd01 in #8264 
- Fix empty template by @hiyouga in #8312 
- Support full-finetuning with unsloth by @Remorax in #8325 
- Add awesome work by @MING-ZCH in #8333 
- Release v0.9.3 by @hiyouga in #8386 
- Fix qwen2vl position ids by @hiyouga in #8387 
- Fix vlm utils by @hiyouga in #8388 
- Fix #3802 #4443 #5548 #6236 #6322 #6432 #6708 #6739 #6881 #6919 #7080 #7105 #7119 #7225 #7267 #7327 #7389 #7416 #7427 #7428 #7443 #7447 #7454 #7490 #7501 #7502 #7513 #7520 #7541 #7545 #7552 #7563 #7598 #7600 #7613 #7636 #7678 #7680 #7687 #7688 #7730 #7743 #7772 #7791 #7800 #7816 #7829 #7845 #7865 #7874 #7889 #7905 #7906 #7907 #7909 #7916 #7918 #7919 #7939 #7953 #7965 #7990 #8008 #8056 #8061 #8066 #8069 #8087 #8091 #8092 #8096 #8097 #8111 #8119 #8147 #8166 #8169 #8174 #8182 #8189 #8223 #8241 #8247 #8253 #8294 #8309 #8324 #8326 #8332 

**Full Changelog**: https://github.com/hiyouga/LLaMA-Factory/compare/v0.9.2...v0.9.3

---

> **Source** [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · `v0.9.3` · 2025-06-16 · [upstream release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.9.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
