---
title: "LlamaFactory v0.8.0"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.8.0"
version: "v0.8.0"
published: "2024-06-07"
type: "minor"
lang: "zh"
---

# LlamaFactory v0.8.0

### 更强[LlamaBoard](https://github.com/hiyouga/LLaMA-Factory?tab=readme-ov-file#fine-tuning-with-llama-board-gui-powered-by-gradio) 💪😀

- 支持Web UI单节点分布式训练
- 添加下拉菜单，以便轻松地从检查点恢复并选择 #4053 中 @hiyouga 和 @hzhaoy 保存的配置 
- 支持选择完全/冻结调优的检查点
- 添加吞吐量指标到 LlamaBoard，由 @injet-zhou 在 #4066 中添加 
- 更快的用户界面加载

### 新功能

- 在#3785中添加@enji-zhou的KTO算法 
- 添加 @hiyouga 的 SimPO 算法 
- 支持通过 @jue-jue-zi 在 #3794 中将 `max_lora_rank` 传递到 vLLM 后端 
- 支持 sharegpt 格式的首选项数据集，并从 git repo 中删除大文件（@hiyouga 在 #3799 中） 
- 支持在 #3812 中 @ycjcl868 在 CLI 推理中设置系统消息 
- 在 #3829 中 @seazhang-zhichen 在 `dataset_info.json` 中添加 `num_samples` 选项 
- 在#3876中添加@dongdongqiang2018的NPU docker图像 
- 由 @MengqingCao 在 #3930 中改进 NPU 文档 
- 支持使用贪婪背包算法的 SFT 打包（@AlongWY 在 #4009 中） 
- 添加 `llamafactory-cli env` 用于错误报告
- 支持API模式下的图像输入
- 通过 `train_from_scratch` 参数支持随机初始化
- 初始化CI

### 新型号

- 基础型号
  - Qwen2 (0.5B/1.5B/7B/72B/MoE) 📄
  - PaliGemma-3B（pt/混合）📄🖼️
  - GLM-4-9B 📄
  - Falcon-11B 📄
  - DeepSeek-V2-Lite (16B) 📄
- 指导/聊天模型
  - Qwen2-指导 (0.5B/1.5B/7B/72B/MoE) 📄🤖
  - Mistral-7B-指令-v0.3 📄🤖
  - Phi-3-小-8k-指令 (7B) 📄🤖
  - Aya-23 (8B/35B) 📄🤖
  - OpenChat-3.6-8B 📄🤖
  - GLM-4-9B-聊天 📄🤖
  - TeleChat-12B-Chat by @hzhaoy in #3958 📄🤖
  - Phi-3-medium-8k-instruct (14B) 📄🤖
  - DeepSeek-V2-Lite-Chat (16B) 📄🤖
  - Codestral-22B-v0.1 📄🤖

### 新数据集

- 预训练数据集
  - FineWeb（英文）
  - FineWeb-Edu（en）
- 监督微调数据集
  -若智霸-GPT4 (zh)
  - STEM 教学（中文）
- 偏好数据集
  - Argilla-KTO-mix-15K（en）
  - UltraFeedback（en）

### 错误修复

- 修复 RLHF 以进行多模式微调
- 通过@BUAADreamer 在 #3835 中修复多模式微调中的 LoRA 目标 
- 在 #3925 中修复 @Yimi81 的 `yi` 模板 
- 修复 LlamaBoard 中的中止问题，由 @injet- Zhou 在 #3987 中解决 
- 在#4006中通过@Uminosachi将`scheduler_specific_kwargs`传递给`get_scheduler` 
- 修复超参数，由 @xu-song 在 #4007 提供帮助 
- 通过@statelesshz 在#4011 中更新问题模板 
- 修复 vllm dtype 参数
- 修复@MengqingCao 在 #4080 中导出超参数的问题 
- 修复 PPO 训练器中的 DeepSpeed ZeRO3
- 修复#3108 #3387 #3646 #3717 #3764 #3769 #3803 #3807 #3818 #3837 #3847 #3853 #3873 #3900 #3931 #3965 #3971 #3978 #3992 #4005 #4012 #4013 #4022 #4033 #4043 #4061 #4075 #4077 #4079 #4085 #4090 #4120 #4132 #4137 #4139

---

> 📦 仓库：[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · 🏷️ 版本：`v0.8.0` · 📅 发布：2024-06-07 · [查看英文原版 Release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.8.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
