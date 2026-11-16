---
title: "LlamaFactory v0.7.1"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.7.1"
version: "v0.7.1"
published: "2024-05-15"
type: "patch"
lang: "zh"
---

# LlamaFactory v0.7.1

### 🚨🚨 核心重构🚨🚨

- 添加**CLIs**用法，现在我们推荐使用`llamafactory-cli`来启动训练和推理，入口点位于[cli.py](https://github.com/hiyouga/LLaMA-Factory/blob/main/src/llamafactory/cli.py)
- 重命名文件：`train_bash.py` -> `train.py`、`train_web.py` -> `webui.py`、`api_demo.py` -> `api.py`
- 删除文件：`cli_demo.py`、`evaluate.py`、`export_model.py`、`web_demo.py`，改用 `llamafactory-cli chat/eval/export/webchat`
- 在示例中使用 **YAML 配置**，而不是 shell 脚本以获得漂亮的视图
- 删除加载数据集时的 sha1 哈希检查
- 重命名参数：`num_layer_trainable` -> `freeze_trainable_layers`、`name_module_trainable` -> `freeze_trainable_modules`

以上更改由@hiyouga 在#3596 中进行 

#### 提醒：现在 [安装](https://github.com/hiyouga/LLaMA-Factory?tab=readme-ov-file#installation) 是使用 LLaMA Factory 的**强制**

### 新功能

- 支持@zhou-wjjw和@statelesshz在Ascend NPU 910设备上的训练和推理（还提供了docker图像）
- 在 #3527 中 @zhaonx 支持 vLLM 引擎中的 `stop` 参数 
- 支持通过 `freeze_extra_modules` 参数在冻结调整中微调令牌嵌入
- 将 Llama3 [快速入门](https://github.com/hiyouga/LLaMA-Factory?tab=readme-ov-file#quickstart) 添加到自述文件中

### 新型号

- 基础型号
  - Yi-1.5 (6B/9B/34B) 📄
  - DeepSeek-V2 (236B) 📄
- 指导/聊天模型
  - Yi-1.5-Chat (6B/9B/34B) 📄🤖
  -@BUAADreamer 的 Yi-VL-Chat (6B/34B) #3748 📄🖼️🤖
  - Llama3-中文聊天 (8B/70B) 📄🤖
  - DeepSeek-V2-聊天 (236B) 📄🤖

### 错误修复

- 通过@codemayq 在 #3487 中向 LlamaBoard 添加 badam 参数 
- 在 #3490 中@khazic 将 openai 数据格式添加到自述文件中 
- 修复了 dpo/orpo trainer 中的缓慢运行问题（@hiyouga） 
- 修复@pha123661 在 #3578 中的 badam 示例 
- 修复 #3588 中 @ZeyuTeng96 的 nectar_rm 数据集的下载链接 
- 在#3601中添加@Katehuuh的项目 
- 在 #3604 中修复 @gaussian8 的 docker 文件 
- 修复@BUAADreamer 在 #3651 中对 MLLM 的全面调整 
- 通过@cocktailpeanut 在#3654 中修复gradio 环境变量 
- 修复拼写错误并在 #3655 中添加 @Tendo33 登录 API 
- 修复 #3683 中 @YUUUCC 的 phi-3 模型下载链接 
- 修复#3559 #3560 #3602 #3603 #3606 #3625 #3650 #3658 #3674 #3694 #3702 #3724 #3728

---

> 📦 仓库：[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · 🏷️ 版本：`v0.7.1` · 📅 发布：2024-05-15 · [查看英文原版 Release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.7.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
