---
title: "LlamaFactory v0.8.2"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.8.2"
version: "v0.8.2"
published: "2024-06-19"
type: "patch"
lang: "zh"
---

# LlamaFactory v0.8.2

### 新功能

- 支持 GLM-4 工具和 @mMrBun 在 #4173 中的并行函数调用 
- 支持@hiyouga 在 #4307 中进行 **PiSSA** 微调 

### 新型号

- 基础型号
  - DeepSeek-Coder-V2（16B MoE/236B MoE）📄
- 指导/聊天模型
  - MiniCPM-2B 📄🤖
  - DeepSeek-Coder-V2-Instruct (16B MoE/236B MoE) 📄🤖

### 新数据集

- 监督微调数据集
  - Neo-sft (zh)
  - Magpie-Pro-300K-Filtered (en) by @EliMCosta in #4309 
  - WebInstruct（en），作者：@EliMCosta，#4309 

### 错误修复

- 修复 DPO+ZeRO3 问题（@hiyouga） 
- 在 #4191 中添加 @iamthebot 的 MANIFEST.in 
- 在 #4204 中由 @dignfei 修复 llama3 预训练中的 eos_token 
- 在 #4234 和 #4246 中修复 @kimdwkimdw 和 @hzhaoy 的 vllm 版本 
- 在 #4314 中修复 @EliMCosta 的 Docker 文件 
- 在 #4334 中修复 @zzxzz12345 的 pandas 版本 
- 修复#3162 #3196 #3778 #4198 #4209 #4221 #4227 #4238 #4242 #4271 #4292 #4295 #4326 #4346 #4357 #4362

---

> 📦 仓库：[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · 🏷️ 版本：`v0.8.2` · 📅 发布：2024-06-19 · [查看英文原版 Release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.8.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
