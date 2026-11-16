---
title: "LlamaFactory v0.9.2"
project: "LlamaFactory"
repo: "hiyouga/LlamaFactory"
tag: "v0.9.2"
version: "v0.9.2"
published: "2025-03-11"
type: "patch"
lang: "zh"
---

# LlamaFactory v0.9.2

### 我们将参加 3 月 16 日的 **vLLM 北京聚会**！北京见👋

- 活动信息：https://mp.weixin.qq.com/s/viPRDlhnzS3qO9-96fMeeA

### 新功能

- 🔥 **[APOLLO 优化器](https://arxiv.org/abs/2412.05270)** by @zhuhanqing in #6617 
- 🔥 **[SwanLab](https://github.com/SwanHubX/SwanLab)** 实验跟踪器，作者：@Zeyi-Lin，#6401 
- 🔥 **[射线训练器](https://docs.ray.io/en/latest/train/train.html)** 作者：@erictang000，#6542 
- @JieShenAI 在 #6190 中使用 **vLLM** TP 进行批量推理 
- @codemayq 在 #6601 中关于 Ascend NPU 的 QLoRA 
- @hiyouga 的 Yarn 和 Llama3 绳索缩放 #6693 
- 在 #6907 中支持 @erictang000 的 `uv run` 
- @codemayq 在 #4686 中自动生成 Ollama 模型文件 
- Mistral 工具提示由@AlongWY 在#5473 中提供 
- Llama3 和 Qwen2 工具提示由 @hiyouga 在 #6367 和 #6369 中提供 

### 新型号

- 基础型号
  - GPT2 (0.1B/0.4B/0.8B/1.5B) 📄
  - 花岗岩 3.0-3.1 (1B/2B/3B/8B) 📄
  - PaliGemma2 (3B/10B/28B) 📄🖼️
  - 月光 (16B) 📄
  - DeepSeek V2-V2.5 基础 (236B) 📄
  - DeepSeek V3 底座 (671B) 📄
- 指导/聊天模型
  - 花岗岩 3.0-3.1 (1B/2B/3B/8B) by @Tuyohai #5922 📄🤖
  - DeepSeek R1 (1.5B/7B/8B/14B/32B/70B/671B) by @Qwtdgh in #6767 📄🤖
  - TeleChat2 (3B/7B/12B/35B/115B) @ge-xing #6313 📄🤖
  - Qwen2.5-VL (3B/7B/72B) by @hiyouga in #6779 📄🤖🖼️
  - PaliGemma2-mix (3B/10B/28B) by @Kuangdd01 in #7060 📄🤖🖼️
  - @BUAADreamer 的 Qwen2 音频 (7B) #6701 📄🤖🔈
  - @BUAADreamer 的 MiniCPM-V/MiniCPM-o (8B) #6598 和 #6631 📄🤖🖼️🔈
  - @hhaAndroid 的 InternLM3-Instruct (8B) #6640 📄🤖
  - 马可-o1 (8B) 📄🤖
  - Skywork-o1 (8B) 📄🤖
  - Phi-4 (14B) 📄🤖
  - 月光指导 (16B) 📄
  - 米斯特拉尔小 (24B) 📄🤖
  - QwQ (32B) 📄🤖
  - 骆驼-3.3-Instruct (70B) 📄🤖
  - QvQ (72B) 📄🤖🖼️
  - DeepSeek V2-V2.5 (236B) 📄🤖
  - DeepSeek V3 (671B) 📄🤖

### 新数据集

- 监督微调数据集
  - OpenO1（zh）📄
  - 开放思想 (zh) 📄
  - Open-R1-数学（en）📄
  - Chinese-DeepSeek-R1-Distill (zh) 📄

### 变化

- 由 @hiyouga 在 #6600 中重构 VLM 注册 
- @hiyouga 在 #6895 中重构 mm 插件 
- @hiyouga 在 #6896 中重构模板
- @hiyouga 在 #6901 中重构数据管道 
- 在 #6976 中更新 @hiyouga 的 vlm 参数
- 我们使用 [BFG Repo-Cleaner](https://github.com/rtyley/bfg-repo-cleaner) 清理了 git 历史记录中的大文件，在 [此处](https://github.com/hiyouga/LLaMA-Factory-backup) 找到备份存储库

### 错误修复

- 在 #5819 中添加 @yafshar 的 `trust_remote_code` 选项 
- 修复 @hiyouga 在 #6137 和 #6140 中的 mllama 配置 
- 修复了 @hiyouga 的 mllama pad #6151 和 #6874 
- Pin tokenizers 版本由 @hiyouga 在 #6157 中提供
- 修复 #6160 中 @village-way 加载的标记化数据
- 在 #6170 中@hykilpikonna 在 webui 中显示主机名
- 修复@hiyouga 在 #6233 中的 VLM Zero3 训练
- 在#6363中添加@hiyouga的`skip_special_tokens` 
- 支持不可重入GC，由 @hiyouga 在 #6364 中提供 
- 在#6388中添加@hiyouga的`disable_shuffling`选项
- 修复了@hiyouga 的 gen kwargs #6395 
- 在 #6457 中启用由 @youkaichao 运行的模块 
- 在 #6465 中由 @hiyouga 修复评估损失值 
- 修复@hiyouga 在 #6483 中的 paligemma 推断 
- 在 #5507 中添加 @piamo 的 deepseek v3 模板 
- 在#6462中@shibingli在docker文件中添加http代理参数
- 修复@hiyouga 在 #6512 中生成的训练器 
- 修复@hiyouga 在 #6547 中的 pixtral DPO 训练 
- 在 #6564 中修复 @stephen-nju 的光线参数 
- 在 #6620 中由 @BUAADreamer 修复 minicpm 模板 
- 修复 @hiyouga 在 #6624 中进行视觉检测的停止标记 
- 在 #6629 中固定 @hiyouga 的 vllm 版本
- 在 #6637 和 #7053 中修复 @hiyouga 的 mllama 任何图像 
- 通过 @xiaosu-zhu 在 #6632 中修复分词器最大长度
- 由 @steveepreston 在 #6653 中修复 webui 区域设置 
- 修复了 @BUAADreamer 在 #6657 中的 MiniCPM-o DPO 培训 
- 修复了 @hiyouga 在 #6684 中的 Qwen2 MoE 训练 
- 由 @hiyouga 在 #6688 升级到 gradio 5 
- 支持日文本地文件，由 @engchina 在 #6698 中提供
- 修复@yinpu 在 #6722 中的 DPO 损失 
- Webui 思维模式 by @hiyouga in #6778 
- 在#6628中由@hiyouga升级到变形金刚4.48 
- 由 @hiyouga 修复 ci #6787 
- 修复了 #6788 中@neavo 的自述文件中有关在 win 平台上安装 fa2 的说明
- 修复 @BUAADreamer 的 minicpmv 插件 #6801、#6890、#6946 和 #6998 
- 修复了 #6796 中 @yueqis 的 qwen2 工具提示 
- 修复了@hiyouga 的 llama pro #6814 
- 允许@yueqis 在#6797 中思考函数调用 
- 在#6831中添加@hiyouga的`ALLOW_EXTRA_ARGS` 
- 在 #6855 中修复 @hiyouga 的 Qwen2vl 插件 
- 由 @hiyouga 在 #6857 中将 vllm 升级到 0.7.2 
- 修复@hiyouga 在 #6865 中使用的工具的单元测试 
- 跳过 #6879 中 @JJJYmmm 的 sharegpt 转换器中损坏的数据 
- 修复了 #6868 中 @JJJYmmm 的 qwen2.5 视频插件 
- 从 #6905 中 @hiyouga 的 tokenizer 解析聊天模板（实验）
- 修复 @marko1616 在 #6904 中的 mllama KTO 训练 
- 修复@hiyouga 在 #6916 和 #6931 中的 grad checkpointing 
- 在 #6902 中修复 @hiyouga 的 ollama 模板
- 修复@erictang000 在 #6906 中的射线示例 
- 通过@noahc1510 在 #6128 中改进媒体错误处理 
- 支持@SrWYG 在#5522 中对每个数据集进行拆分 
- 修复@aliencaocao 训练中的 gen kwargs #5451 
- qwen2.5vl 的 Liger 内核，作者：@hiyouga，#6930 
- 由 @hiyouga 在 #6944 中修复 lora 目标模块 
- 在 #6920 中添加 @erictang000 的 `ray_storage_path` 
- 在 #6972 中修复 @hiyouga 的 trainer.predict 
- 在#6975中添加@hiyouga的最小分辨率控制 
- 将变形金刚升级至 4.49，由 @hiyouga 在 #6982 中完成 
- 在 #7058 中@JieShenAI 在 vllm 批量预测中添加种子
- 由 @hiyouga 在 #7067 中修复 pyproject.toml 
- 在 #7061 中升级 @leo-pony 的 CANN 图像 
- 在 #7089 中显示 @Zeyi-Lin 的 swanlab 链接 
- 由 @hiyouga 在 #7120 中修复高频引擎 
- 在#7117中添加@oldstree的保释聊天模板 
- 在 #7143 中使用双三次重采样器而不是 @hiyouga 的最近采样器 
- 在 #7166 中修复 @lsrami 的 Qwen2Audio 插件 
- 在 #7174 中由 @hiyouga 销毁进程组 
- 修复@Zeyi-Lin 在 #7176 中的 swanlab 回调 
- 修复@hiyouga 的 paligemma 插件 #7181 
- 在 #7190 中 @hiyouga 在 webui 中转义 html 标签 
- 由 @hiyouga 在 #7183 和 #7193 中将 vllm 升级到 0.7.3
- 在 #7204 中修复 @hiyouga 的解析器 
- 在 #7201 中由 @zhangch-ss 修复函数格式化程序 
- 修复@hiyouga 在 #7205 中的 deepspeed 配置 
- 在 #7207 中由 @hiyouga 修复数据加载器 
- 在 #7230 中修复 @hiyouga 的导出分词器 
- 在 #7231 中更新 @hiyouga 的参数 
- 在#7219中添加@Zeyi-Lin的`swanlab_logdir` 
- 修复了 @hiyouga 在 #7235 中的 vllm 批量预测 
- 在 #7244 中 @hiyouga 保存标记化数据后避免退出 
- 支持 @hiyouga 在 #7247 中在 env 中提交 
- @hiyouga 在 #7242 中发布 v0.9.2
- 修复#1204 #3306 #3462 #5121 #5270 #5404 #5444 #5472 #5518 #5616 #5712 #5714 #5756 #5944 #5986 #6020 #6056 #6092 #6136 #6139 #6149 #6165 #6213 #6287 #6320 #6345 #6345 #6346 #6348 #6358 #6362 #6391 #6415 #6439 #6448 #6452 #6482 #6499 #6543 #6546 #6551 #6552 #6610 #6612 #6636 #6639 #6662 #6669 #6738 #6772 #6776 #6780 #6782 #6793 #6806 #6812 #6819 #6826 #6833 #6839 #6850 #6854 #6860 #6878 #6885 #6889 #6937 #6948 #6952 #6960 #6966 #6973 #6981 #7036 #7064 #7072 #7116 #7125 #7130 #7171 #7173 #7180 #7182 #7184 #7192 #7198 #7213 #7234 #7243 

**完整 Changelog**：https://github.com/hiyouga/LLaMA-Factory/compare/v0.9.1...v0.9.2

---

> 📦 仓库：[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · 🏷️ 版本：`v0.9.2` · 📅 发布：2025-03-11 · [查看英文原版 Release](https://github.com/hiyouga/LlamaFactory/releases/tag/v0.9.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
