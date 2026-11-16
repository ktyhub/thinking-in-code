---
title: "LlamaFactory v0.9.0"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.9.0"
version: "v0.9.0"
published: "2024-09-08"
type: "minor"
lang: "zh"
---

# LlamaFactory v0.9.0

### 恭喜您获得 30,000 颗星🎉 关注我们*[X (twitter)](https://twitter.com/llamafactory_ai)*

### 新功能

- 🔥支持在多图像数据集上微调 **[Qwen2-VL](https://github.com/QwenLM/Qwen2-VL)** 模型，由 @simonJJJ 在 #5290 中提供 
- 🔥通过 @hiyouga 的 `enable_liger_kernel` 参数支持时间和内存效率**[Liger-Kernel](https://github.com/linkedin/Liger-Kernel)** 
- 🔥通过 @relic-yuexi 在 #5095 中的 `use_adam_mini` 参数支持内存高效 **[Adam-mini](https://github.com/zyushun/Adam-mini)** 优化器 
- 支持@hiyouga in #5365 和 @BUAADreamer in #4136 在视频数据集上微调 Qwen2-VL 模型（需要补丁 https://github.com/huggingface/transformers/pull/33307）
- 使用 @hiyouga 的 RLHF/DPO/ORPO/SimPO 方法支持微调视觉语言模型 (VLM) 
- 通过 `use_unsloth_gc` 参数支持 [Unsloth](https://unsloth.ai/blog/long-context) 的异步激活卸载方法
- 支持[vLLM](https://github.com/vllm-project/vllm) 0.6.0版本
- 支持#5388中@yzoaim的MFU计算 

### 新型号

- 基础型号
  - Qwen2-数学 (1.5B/7B/72B) 📄🔢
  - Yi-Coder (1.5B/9B) 📄🖥️
  - 实习生LM2.5 (1.8B/7B/20B) 📄
  - 杰玛-2-2B 📄
  - 元骆驼-3.1 (8B/70B) 📄
- 指导/聊天模型
  - MiniCPM/MiniCPM3 (1B/2B/4B) by @LDLINGLINGLING in #4996 #5372 📄🤖
  - Qwen2-数学教学 (1.5B/7B/72B) 📄🤖🔢
  - Yi-Coder-Chat (1.5B/9B) 📄🤖🖥️
  - 实习生LM2.5-聊天 (1.8B/7B/20B) 📄🤖
  - Qwen2-VL-指导 (2B/7B) 📄🤖🖼️
  - Gemma-2-2B-it by @codemayq in #5037 📄🤖
  - 元骆驼-3.1-Instruct (8B/70B) 📄🤖
  - 米斯特拉尔-尼莫-指导 (12B) 📄🤖

### 新数据集

- 监督微调数据集
  - Magpie-ultra-v0.1（zh）📄
  - Pokemon-gpt4o-字幕（en&zh）📄🖼️
- 偏好数据集
  - RLHF-V（zh）📄🖼️
  - VLFeedback (zh) 📄🖼️

### 变化

- 出于兼容性考虑，微调视觉语言模型（VLM）需要`transformers>=4.35.0.dev0`，请尝试安装`pip install git+https://github.com/huggingface/transformers.git`。
- `visual_inputs` 已被弃用，现在您不需要指定此参数。
- LlamaFactory 现在对多模式输入采用延迟加载，详细信息请参阅#5346。请使用 `preprocessing_batch_size` 来限制数据集预处理中的批量大小（由 #5323 中的 @naem1023 支持）。
- LlamaFactory 现在支持 `lmf`（相当于 `llamafactory-cli`）作为快捷命令。

### 错误修复

- 修复@liuwwang 在 #4950 中的 LlamaBoard 导出 
- 在 #4970 中添加 @HardAndHeavy 的 ROCm docker 文件 
- 修复@piamo 在 #4892 中的 deepseek 模板 
- 在 #4995 中由 @codemayq 修复 pissa savecallback 
- 在 #5010 中 @Eruly 在 LlamaBoard 中添加韩语显示语言 
- 在 #5072 中修复 @relic-yuexi 的 deepseekcoder 模板 
- 修复@codemayq 在 #5109 中的示例 
- 修复了 @YeQiuO 在 #5115 中从最后截断 `mask_history` 的问题 
- 在 #5156 中由 @YeQiuO 修复 jinja 模板 
- 由 @liu-zichen 在 #5163 中修复 PPO 优化器和 lr 调度器 
- 在 #5185 中添加 @chenhuiyu 的 SailorLLM 模板 
- 由 @Zxilly 在 #5188 中修复 XPU 设备计数 
- 在 #5193 中由 @Ricardo-L-C 修复 NPU 中的 bf16 检查 
- 在 #5230 中由 @MengqingCao 更新 NPU docker 图像 
- 修复 #5237 中 @marko1616 的图像输入 api 
- 在 #5317 中添加 @ByronHsu 的 liger-kernel 链接 
- 修复#4684 #4696 #4917 #4925 #4928 #4944 #4959 #4992 #5035 #5048 #5060 #5092 #5228 #5252 #5292 #5295 #5305 #5307 #5308 #5324 #5331 #5334 #5338 #5344 #5366 #5384

---

> 📦 仓库：[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · 🏷️ 版本：`v0.9.0` · 📅 发布：2024-09-08 · [查看英文原版 Release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.9.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
