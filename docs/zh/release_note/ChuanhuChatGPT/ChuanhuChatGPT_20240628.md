---
title: "ChuanhuChatGPT 20240628"
project: "ChuanhuChatGPT"
repo: "GaiZhenbiao/ChuanhuChatGPT"
tag: "20240628"
version: "20240628"
published: "2024-06-28"
type: "major"
lang: "zh"
---

# ChuanhuChatGPT 20240628

### 打破
- 🚀 **支持*自定义模型自定义模型* !**参考：[自定义模型自定义模型](https://github.com/GaiZhenbiao/ChuanhuChatGPT/wiki/自定义模型-Custom-Models)　 (@GaiZhenbiao, @Keldos-Li)
- 💥 GPT4-V 合并入 GPT4-Turbo (@GaiZhenbiao)
- 💥由于Gradio的一个问题，暂时取消了LaTeX渲染（@Keldos-Li）

### 特点
- 新增 Groq 模型支持 (@GaiZhenbiao)
- 新增 GPT-4o 模型支持 (@GaiZhenbiao)
- 新增 Claude 3.5 Sonnet 模型支持 (@GaiZhenbiao)
- 优化川虎助理模型上传文件时的行为 (@GaiZhenbiao)
- 生成回复时添加等待动画 (@Keldos-Li)
- 提升密码验证的安全性 (@GaiZhenbiao)

### 错误修复
- 修复新建系统提示为空的问题(@GaiZhenbiao)
- 修复使用GPT系列模型时可能出现invalid_request_error的问题(@GaiZhenbiao)
- 修复配置hide_history_when_not_logged_in为true后的界面报错 (@GaiZhenbiao)
- 修复 PDF 解析时可能出现的一个错误 (@kavons)
- 增加贫困的依赖 (@GaiZhenbiao)
- 版本更新过程中的其他修复和调整（@vc12345679，@ThorinKong）

### 杂项
- 在线RAG改用`text-embedding-3-large`模型 (@GaiZhenbiao)
- 调整了对话生成时间相关按钮的出现时间 (@Keldos-Li)
- 增强高度相关代码改用dvh，*可能存在浏览器兼容问题* (@Keldos-Li)
- 取消模型选框键入筛选 
- `config_example.json` 中 PaLM 更改为 Gemini (@Morpheusr)


**完整 Changelog**：https://github.com/GaiZhenbiao/ChuanhuChatGPT/compare/20240410...20240628


> [!重要]
> _如果您手动更新，请在更新完成后执行以下命令更新依赖。_ 
> _手动更新后请执行以下命令_
> ```sh
> pip install -r requirements.txt --upgrade
> ```
<!-- 需要重新安装的要求 -->

---

> 📦 仓库：[GaiZhenbiao/ChuanhuChatGPT](https://github.com/GaiZhenbiao/ChuanhuChatGPT) · 🏷️ 版本：`20240628` · 📅 发布：2024-06-28 · [查看英文原版 Release](https://github.com/GaiZhenbiao/ChuanhuChatGPT/releases/tag/20240628)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
