---
title: "LlamaFactory v0.8.3"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.8.3"
version: "v0.8.3"
published: "2024-07-18"
type: "patch"
lang: "zh"
---

# LlamaFactory v0.8.3

### 新功能

- 🔥通过 @chuan298 在 #4224 中的 `neat_packing` 参数支持[无污染包装](https://github.com/MeetKai/functionary/tree/main/functionary/train/packing) 
- 🔥通过 @codemayq 在 #4691 中的 `eval_dataset` 参数支持分割评估 
- 🔥通过 @hiyouga 的 `quantization_method` 参数支持 HQQ/EETQ 量化 
- 🔥在 #4352 中使用 @Ledzy 的 BAdam 时支持 ZeRO-3 
- 通过 @aofengdaxia 在 #4878 中的 `mask_history` 参数支持最后一个转弯的火车 
- 在#4355中添加@MengqingCao的NPU Docker文件 
- 支持在 #4461 中 @hzhaoy 在 Dockerfile 中构建 FlashAttention2 
- 支持@hiyouga评估`batch_eval_metrics` 

### 新型号

- 基础型号
  - 实习生LM2.5-7B 📄
  - Gemma2 (9B/27B) 📄
- 指导/聊天模型
  - TeleChat-1B-Chat by @hzhaoy in #4651 📄🤖
  - 实习生LM2.5-7B-聊天 📄🤖
  - CodeGeeX4-9B-聊天 📄🤖
  - Gemma2-it (9B/27B) 📄🤖

### 变化

- 修复 DPO 截止长度并弃用 `reserved_label_len` 参数
- 改进奖励建模的损失函数

### 错误修复

- 在 #4382 中修复@MengqingCao 的 numpy 版本 
- 在 #4409 中通过 @kno10 改进 cli 
- 在#4417中添加`tool_format`参数来控制@mMrBun的提示
- 自动标记@MengqingCao 在#4445 中的 npu 问题 
- 在 #4446 中由 @stceum 修复 flash_attn args 
- 在 #4544 中修复了 @MengqingCao 的 docker-compose 路径 
- 通过@hashstone 在 #4561 中修复 torch-npu 依赖性 
- 在 #4580 中修复了 @hzhaoy 的 deepspeed + pissa 
- 通过 @injet-zhou 在 #4590 中改进 cli 
- 在#4662中添加@wzh1994的项目 
- 在 #4673 中修复 @hzhaoy 的文档字符串 
- 通过 @marko1616 在 #4700 中修复 WebUI 中的 Windows 命令预览 
- 在 #4706 中由 @T-Atlas 修复 vllm 0.5.1 
- 修复@yzoaim 在 #4746 中的保存值头部模型回调 
- 在 #4781 中由 @hzhaoy 修复 CUDA Docker 文件 
- 修复@codemayq 在 #4804 中的示例 
- 修复#4821中@codemayq分割的评估数据 
- 通过 @codemayq 在 #4822 中修复 CI 
- 修复#2290 #3974 #4113 #4379 #4398 #4402 #4410 #4419 #4432 #4456 #4458 #4549 #4556 #4579 #4592 #4609 #4617 #4674 #4677 #4683 #4684 #4699 #4705 #4731 #4742 #4779 #4780 #4786 #4792 #4820 #4826

---

> 📦 仓库：[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · 🏷️ 版本：`v0.8.3` · 📅 发布：2024-07-18 · [查看英文原版 Release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.8.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
