---
title: "LlamaFactory v0.9.1"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.9.1"
version: "v0.9.1"
published: "2024-11-24"
type: "patch"
lang: "en"
summary: "Note: now you can install transformers>=4.46.0,<=4.46.1 to make the gradient accumulation fix enabled."
---

# LlamaFactory v0.9.1

### New features

- 🔥Support **Llama-3.2** and **Llama-3.2-Vision** by @marko1616 in #5547 and #5555 
- 🔥Support **LLaVA-NeXT**, **LLaVA-NeXT-Video** and **Video-LLaVA** by @BUAADreamer in #5574 
- 🔥Support **Pixtral** model by @Kuangdd01 in #5581 
- Support EXAONE3.0 by @shing100 in #5585 
- Support Index-series models by @Cuiyn in #5910 
- Support Liger-Kernel for Qwen2-VL by @aliencaocao in #5438 
- Support download models from ModelHub by @huniu20 in #5642 
- Fix abnormal loss values in transformers 4.46 by @hiyouga in #5852 #5871 
- Support multi-image inference by @hiyouga in #5895 
- Support calculating effective tokens for SFT and DPO by @wtmlon in #6078 

Note: now you can install `transformers>=4.46.0,<=4.46.1` to make the [gradient accumulation fix](https://github.com/huggingface/transformers/pull/34191) enabled.

### New models

- Base models
  - Qwen2.5 (0.5B/1.5B/3B/7B/14B/32B/72B) 📄
  - Qwen2.5-Coder (0.5B/1.5B/3B/7B/14B/32B) 📄🖥️
  - Llama-3.2 (1B/3B) 📄
  - OpenCoder (1.5B/8B) 📄🖥️
  - Index (1.9B) 📄
- Instruct/Chat models
  - Qwen2.5-Instruct (0.5B/1.5B/3B/7B/14B/32B/72B) 📄🤖
  - Qwen2.5-Coder-Instruct (0.5B/1.5B/3B/7B/14B/32B) 📄🤖🖥️
  - Llama-3.2-Instruct (1B/3B) 📄🤖
  - OpenCoder-Instruct (1.5B/8B) 📄🤖🖥️
  - Index-Chat (1.9B) 📄🤖
  - LLaVA-NeXT (7B/8B/13B/34B/72B/110B) 📄🤖🖼️
  - LLaVA-NeXT-Video (7B/34B) 📄🤖🖼️
  - Video-LLaVA (7B) 📄🤖🖼️
  - Pixtral (12B) 📄🤖🖼️
  - EXAONE-3.0-Instruct (8B) 📄🤖

### Security fix

- Fix [CVE-2024-52803](https://github.com/advisories/GHSA-hj3w-wrh4-44vp) by @superboy-zjc in aa6a174d6822340022433c5ba38182b4932adecb 

### Bug fix

- Update version of rocm docker by @HardAndHeavy in #5427 
- Fix Phi-3-small template by @menibrief in #5475 
- Fix function call dataset process function by @whybeyoung in #5483 
- Add docker args by @StrangeBytesDev in #5533 
- Fix logger by @chengchengpei in #5546 
- Fix Gemma2 flash attention warning by @amrear in #5580 
- Update setup by @johnnynunez in #5615 #5665 
- Add project by @NLPJCL in #5801 
- Fix saving Qwen2-VL processor by @hiyouga in #5857 
- Support change base image in dockerfile by @sd3ntato in #5880 
- Fix template replace behaviour by @hiyouga in #5907 
- Add `image_dir` argument by @hiyouga in #5909 
- Add rank0 logger by @hiyouga in #5912 
- Fix DPO metrics by @hiyouga in #5913 #6052 
- Update datasets version by @hiyouga in #5926 
- Fix chat engines by @hiyouga in #5927 
- Fix vllm 0.6.3 by @hiyouga in #5970 
- Fix extra args in llamaboard by @hiyouga in #5971 
- Fix vllm input args by @JJJJerry in #5973 
- Add `vllm_config` args by @hiyouga in #5982 #5990 
- Add shm_size in docker compose config by @XYZliang in #6010 
- Fix tyro version by @hiyouga in #6065 
- Fix ci by @hiyouga in #6120 
- Fix Qwen2-VL inference on vLLM by @hiyouga in #6123 #6126 
- Release v0.9.1 by @hiyouga in #6124 
- Fix #3881 #4712 #5411 #5542 #5549 #5611 #5668 #5705 #5747 #5749 #5768 #5796 #5797 #5883 #5904 #5966 #5988 #6050 #6061 

**Full Changelog**: https://github.com/hiyouga/LLaMA-Factory/compare/v0.9.0...v0.9.1

---

> **Source** [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · `v0.9.1` · 2024-11-24 · [upstream release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.9.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
