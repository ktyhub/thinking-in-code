---
title: "ChuanhuChatGPT 20240628"
project: "ChuanhuChatGPT"
repo: "GaiZhenbiao/ChuanhuChatGPT"
tag: "20240628"
version: "20240628"
published: "2024-06-28"
type: "major"
lang: "en"
summary: "🚀 支持 自定义模型 Custom Models !　参考：自定义模型 Custom Models　 (@GaiZhenbiao, @Keldos-Li)；💥 GPT4-V 合并入 GPT4-Turbo (@GaiZhenbiao)；💥 因为Gradio的一个问题，暂时禁用了 LaTeX 渲染 (@Keldos-Li)"
---

# ChuanhuChatGPT 20240628

### Breaking
- 🚀 **支持 *自定义模型 Custom Models* !**　参考：[自定义模型 Custom Models](https://github.com/GaiZhenbiao/ChuanhuChatGPT/wiki/自定义模型-Custom-Models)　 (@GaiZhenbiao, @Keldos-Li)
- 💥 GPT4-V 合并入 GPT4-Turbo (@GaiZhenbiao)
- 💥 因为Gradio的一个问题，暂时禁用了 LaTeX 渲染 (@Keldos-Li)

### Features
- 新增 Groq 模型支持 (@GaiZhenbiao)
- 新增 GPT-4o 模型支持 (@GaiZhenbiao)
- 新增 Claude 3.5 Sonnet 模型支持 (@GaiZhenbiao)
- 优化川虎助理模型上传文件时的行为 (@GaiZhenbiao)
- 生成回复时添加等待动画 (@Keldos-Li)
- 提升密码验证的安全性 (@GaiZhenbiao)

### Bug Fixes
- 修复新建 system prompt 为空的问题 (@GaiZhenbiao)
- 修复使用GPT系列模型时可能出现invalid_request_error的问题 (@GaiZhenbiao)
- 修复配置hide_history_when_not_logged_in为true后的界面报错 (@GaiZhenbiao)
- 修复 PDF 解析时可能出现的一个错误 (@kavons)
- 增加缺失的依赖 (@GaiZhenbiao)
- 版本更新过程中的其他修复和调整 (@vc12345679, @ThorinKong)

### Miscellaneous
- 在线 RAG 改用 `text-embedding-3-large` 模型 (@GaiZhenbiao)
- 调整了对话生成时相关按钮的出现时间 (@Keldos-Li)
- 前端高度相关代码改用dvh，*可能存在浏览器兼容性问题* (@Keldos-Li)
- 禁用模型选框键入筛选 
- `config_example.json` 中 PaLM 更改为 Gemini (@Morpheusr)


**Full Changelog**: https://github.com/GaiZhenbiao/ChuanhuChatGPT/compare/20240410...20240628


> [!important]
> _如果您手动更新，请在更新完成后执行以下命令更新依赖。_ 
> _Please execute the following commands after manually updating._
> ```sh
> pip install -r requirements.txt --upgrade
> ```
<!-- requirements reinstall needed -->

---

> **Source** [GaiZhenbiao/ChuanhuChatGPT](https://github.com/GaiZhenbiao/ChuanhuChatGPT) · `20240628` · 2024-06-28 · [upstream release](https://github.com/GaiZhenbiao/ChuanhuChatGPT/releases/tag/20240628)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
