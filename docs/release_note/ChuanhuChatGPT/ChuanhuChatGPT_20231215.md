---
title: "ChuanhuChatGPT 20231215"
project: "ChuanhuChatGPT"
repo: "GaiZhenbiao/ChuanhuChatGPT"
tag: "20231215"
version: "20231215"
published: "2023-12-15"
type: "major"
lang: "en"
summary: "💥 API Key 的显示位置重新调整到了右侧栏，加入了隐藏 API Key 的选项 (@GaiZhenbiao)；🚀 初次启动时添加设置向导！ (@GaiZhenbiao)"
---

# ChuanhuChatGPT 20231215

### BREAKING
- **💥 API Key 的显示位置重新调整到了右侧栏**，加入了隐藏 API Key 的选项 (@GaiZhenbiao)
- **🚀 初次启动时添加设置向导！** (@GaiZhenbiao)

### Features
- **🚀 新增 文心一言 三个主要模型支持！** (@XudongLiu)
- **🚀 新增 DALLE3 支持！** (@GaiZhenbiao)
- 支持ChatGLM3 (@GaiZhenbiao)
- 加入available_models配置项，允许自定义可用模型列表 (@GaiZhenbiao)
- OpenAI模型现在会检查API Key是否为空 (@GaiZhenbiao)
- 优化知识库问答功能 (@GaiZhenbiao)
- 加快川虎Chat的启动速度 (@GaiZhenbiao)
- 支持保存加载更多对话参数 (@GaiZhenbiao)
- 前端页面同步历史记录保存的slider和checkbox (@Keldos-Li)
- 原始消息改用等宽字体 (@Keldos-Li)
- 调整新的原始文本输出在川虎助理中的显示 (@Keldos-Li)
- 调整指示条样式，调整toolbox样式 (@Keldos-Li)

### Bug Fixes
- 解决在线搜索无法使用的问题 (@GaiZhenbiao)
- 修复新用户对话错误的问题 (@cpatrickalves)
- 修复总是提示更新的问题等  (@Keldos-Li)
- 修复原始消息中LaTeX被误渲染的问题 (@Keldos-Li)
- 修复重命名/删除历史记录时遗留多余的md文件的问题 (@GaiZhenbiao)
- 修复相关依赖的API变动导致的错误 (@GaiZhenbiao)
- 修复修复损坏的历史记录的时候出错的问题 (@GaiZhenbiao)
- 修复使用finetune的GPT模型时出错的问题 (@GaiZhenbiao)
- 限制文件上传的类型 (@GaiZhenbiao)
- 修复app-title可能脱落到页面下方的问题 (@Keldos-Li)
- 修复status-display跳动的问题 (@Keldos-Li)
- 修复禁用更新后仍存在幽灵按钮的问题 (@Keldos-Li)

### Miscellaneous
- 加强了文件安全 (@GaiZhenbiao)
- 清理无用prompt (@GaiZhenbiao)
- 历史记录管理代码逻辑改进 (@GaiZhenbiao)
- 川虎助理适配最新版本的openai和langchain (@GaiZhenbiao)
- Added Korean Readme and polished Korean locale (@2p990i9hpral)

**Full Changelog**: https://github.com/GaiZhenbiao/ChuanhuChatGPT/compare/20231110...20231215

Other contributors: @ZhengQinyu, @slideslide.

> [!important]
> _如果您手动更新，请在更新完成后执行以下命令更新依赖。_ 
> _Please execute the following commands after manually updating._
> ```sh
> pip install -r requirements.txt
> ```
<!-- requirements reinstall needed -->

---

> **Source** [GaiZhenbiao/ChuanhuChatGPT](https://github.com/GaiZhenbiao/ChuanhuChatGPT) · `20231215` · 2023-12-15 · [upstream release](https://github.com/GaiZhenbiao/ChuanhuChatGPT/releases/tag/20231215)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
