---
title: "ChuanhuChatGPT 20231215"
project: "ChuanhuChatGPT"
repo: "GaiZhenbiao/ChuanhuChatGPT"
tag: "20231215"
version: "20231215"
published: "2023-12-15"
type: "major"
lang: "zh"
---

# ChuanhuChatGPT 20231215

### 打破
- **💥 API Key 的显示位置重新调整到了右侧栏**，加入了隐藏 API Key 的选项 (@GaiZhenbiao)
- **🚀初次启动时添加套餐！** (@GaiZhenbiao)

### 特点
- **🚀新增文心一言三个主要模型支持！** (@XudongLiu)
- **🚀新增DALLE3支持！** (@GaiZhenbiao)
-支持ChatGLM3 (@GaiZhenbiao)
- 加入available_models配置项，允许自定义可用模型列表 (@GaiZhenbiao)
- OpenAI模型现在会检查API Key是否为空（@GaiZhenbiao）
- 优化知识库问答功能 (@GaiZhenbiao)
- 加快川虎Chat的启动速度 (@GaiZhenbiao)
- 支持保存加载更多对话参数 (@GaiZhenbiao)
- 前端页面同步历史记录保存的滑块和复选框（@Keldos-Li）
- 原始消息改用等宽字体 (@Keldos-Li)
- 在川虎辅助中的显示中调整新的原始文本输出（@Keldos-Li）
- 调整指示条样式，调整工具箱样式 (@Keldos-Li)

### 错误修复
- 解决在线搜索无法使用的问题 (@GaiZhenbiao)
- 修复新用户对话错误的问题（@cpatrickalves）
- 修复总是提示更新的问题等 (@Keldos-Li)
- 修复原始消息中LaTeX被错误渲染的问题(@Keldos-Li)
- 修复重命名/历史删除记录时遗留的md文件的问题(@GaiZhenbiao)
- 修复相关依赖的API振幅导致的错误 (@GaiZhenbiao)
- Restore修复损坏的历史记录的时候错误的问题 (@GaiZhenbiao)
- 修复使用finetune的GPT模型时出错的问题(@GaiZhenbiao)
- 限制文件上传的类型 (@GaiZhenbiao)
- 修复app-title可能隐藏到页面下方的问题（@Keldos-Li）
- 修复status-显示跳动的问题 (@Keldos-Li)
- 修复取消更新后仍存在幽灵按钮的问题(@Keldos-Li)

### 杂项
- 加强了文件安全（@GaiZhenbiao）
- 清理无用提示（@GaiZhenbiao）
- 历史记录管理代码逻辑改进 (@GaiZhenbiao)
- 川虎助理改装最新版本的openai和langchain (@GaiZhenbiao)
- 添加了韩语自述文件和完善的韩语语言环境 (@2p990i9hpral)

**完整 Changelog**：https://github.com/GaiZhenbiao/ChuanhuChatGPT/compare/20231110...20231215

其他贡献者：@ZhengQinyu、@slideslide。

> [!重要]
> _如果您手动更新，请在更新完成后执行以下命令更新依赖。_ 
> _手动更新后请执行以下命令_
> ```sh
> pip install -r requirements.txt
> ```
<!-- 需要重新安装的要求 -->

---

> 📦 仓库：[GaiZhenbiao/ChuanhuChatGPT](https://github.com/GaiZhenbiao/ChuanhuChatGPT) · 🏷️ 版本：`20231215` · 📅 发布：2023-12-15 · [查看英文原版 Release](https://github.com/GaiZhenbiao/ChuanhuChatGPT/releases/tag/20231215)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
