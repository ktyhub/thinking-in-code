---
title: "LlamaFactory v0.9.1"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.9.1"
version: "v0.9.1"
published: "2024-11-24"
type: "patch"
lang: "zh"
---

# LlamaFactory v0.9.1

### 新功能

- 🔥支持 @marko1616 在 #5547 和 #5555 中的 **Llama-3.2** 和 **Llama-3.2-Vision** 
- 🔥支持 @BUAADreamer 在 #5574 中的 **LLaVA-NeXT**、**LLaVA-NeXT-Video** 和 **Video-LLaVA** 
- 🔥支持 #5581 中 @Kuangdd01 的 **Pixtral** 模型 
- 支持 EXAONE3.0 by @shing100 in #5585 
- 支持 @Cuiyn 在 #5910 中的 Index 系列模型 
- 支持 Qwen2-VL 的 Liger-Kernel，由 @aliencaocao 在 #5438 中提供 
- 支持#5642中@huniu20从ModelHub下载模型 
- 修复@hiyouga 变压器 4.46 中的异常损耗值 #5852 #5871 
- 支持@hiyouga 在#5895 中的多图像推理 
- 支持在 #6078 中@wtmlon 计算 SFT 和 DPO 的有效代币 

注意：现在您可以安装`transformers>=4.46.0,<=4.46.1`来启用[梯度累积修复](https://github.com/huggingface/transformers/pull/34191)。

### 新型号

- 基础型号
  - Qwen2.5 (0.5B/1.5B/3B/7B/14B/32B/72B) 📄
  - Qwen2.5-Coder (0.5B/1.5B/3B/7B/14B/32B) 📄🖥️
  - 骆驼-3.2 (1B/3B) 📄
  - OpenCoder (1.5B/8B) 📄🖥️
  - 指数 (1.9B) 📄
- 指导/聊天模型
  - Qwen2.5-指令 (0.5B/1.5B/3B/7B/14B/32B/72B) 📄🤖
  - Qwen2.5-Coder-Instruct (0.5B/1.5B/3B/7B/14B/32B) 📄🤖🖥️
  - 骆驼-3.2-Instruct (1B/3B) 📄🤖
  - OpenCoder-指导 (1.5B/8B) 📄🤖🖥️
  - 索引聊天 (1.9B) 📄🤖
  - LLaVA-NeXT (7B/8B/13B/34B/72B/110B) 📄🤖🖼️
  - LLaVA-NeXT-视频 (7B/34B) 📄🤖🖼️
  - 视频-LLaVA (7B) 📄🤖🖼️
  - Pixtral (12B) 📄🤖🖼️
  - EXAONE-3.0-Instruct (8B) 📄🤖

### 安全修复

- 由 @superboy-zjc 在 aa6a174d6822340022433c5ba38182b4932adecb 中修复 [CVE-2024-52803](https://github.com/advisories/GHSA-hj3w-wrh4-44vp) 

### 错误修复

- 由 @HardAndHeavy 在 #5427 中更新 rocm docker 版本 
- 在 #5475 中由 @menibrief 修复 Phi-3-small 模板 
- 修复@whybeyoung 在 #5483 中的函数调用数据集处理函数 
- 在 #5533 中添加 @StrangeBytesDev 的 docker 参数 
- 在 #5546 中修复了 @ Cheng Chengpei 的记录器 
- 修复了@amrear 在 #5580 中的 Gemma2 闪光注意警告 
- 在 #5615 #5665 中更新@johnnynunez 的设置 
- 在#5801中添加@NLPJCL的项目 
- 修复@hiyouga 在 #5857 中保存 Qwen2-VL 处理器的问题 
- 支持在 #5880 中通过 @sd3ntato 更改 dockerfile 中的基本映像 
- 修复@hiyouga 在 #5907 中的模板替换行为 
- 在 #5909 中添加 @hiyouga 的 `image_dir` 参数 
- 在#5912中添加@hiyouga的rank0记录器 
- 通过@hiyouga 在 #5913 #6052 中修复 DPO 指标 
- 由 @hiyouga 在 #5926 中更新数据集版本 
- 在 #5927 中修复 @hiyouga 的聊天引擎 
- 修复了@hiyouga 在 #5970 中的 vllm 0.6.3 
- 修复了 llamaboard 中的额外参数，由 @hiyouga 在#5971 中修复 
- 修复了 @JJJJerry 在 #5973 中的 vllm 输入参数 
- 在 #5982 #5990 中添加 @hiyouga 的 `vllm_config` 参数 
- 在#6010中@XYZliang在docker compose配置中添加shm_size 
- 修复@hiyouga 的 tyro 版本 #6065 
- 由 @hiyouga 在 #6120 中修复 ci 
- 修复了 @hiyouga 在 #6123 #6126 中对 vLLM 的 Qwen2-VL 推断 
- 由 @hiyouga 在 #6124 中发布 v0.9.1 
- 修复#3881 #4712 #5411 #5542 #5549 #5611 #5668 #5705 #5747 #5749 #5768 #5796 #5797 #5883 #5904 #5966 #5988 #6050 #6061 

**完整 Changelog**：https://github.com/hiyouga/LLaMA-Factory/compare/v0.9.0...v0.9.1

---

> 📦 仓库：[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · 🏷️ 版本：`v0.9.1` · 📅 发布：2024-11-24 · [查看英文原版 Release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.9.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
