---
title: "ChuanhuChatGPT 20241204"
project: "ChuanhuChatGPT"
repo: "GaiZhenbiao/ChuanhuChatGPT"
tag: "20241204"
version: "20241204"
published: "2024-12-04"
type: "major"
lang: "en"
summary: "English Version (Click to expand)"
---

# ChuanhuChatGPT 20241204

<details>
<summary>English Version (Click to expand)</summary>

### Features
- Added the ability to preserve the "single-turn" and "streaming" toggle state in conversation history (@GaiZhenbiao, @Keldos-Li)
- Introduced the `admin_list` parameter to restrict service restart/update to administrators only (@GaiZhenbiao)
- Added an optional setting for renaming conversations via a model (@slideslide)
- Improved the code for renaming, exporting, and downloading conversation history (@GaiZhenbiao, @Keldos-Li)
- Saved conversation history no longer includes unnecessary HTML tags (@GaiZhenbiao)
- Enabled scrolling in the conversation interface during generation (@Keldos-Li)

### Bug Fixes
- Fixed display issues for certain models in the frontend (@GaiZhenbiao)
- Resolved and optimized issues with uploading, loading, and refreshing historical files (@GaiZhenbiao)
- Added additional checks when loading prompt templates (@GaiZhenbiao)
- Addressed an issue where users could access other users' conversation histories (@GaiZhenbiao)
- Fixed mismatches in the "streaming" toggle state when creating new conversations (@GaiZhenbiao)
- Introduced a timeout mechanism for regular expression searches in conversation history to prevent ReDoS vulnerabilities (@GaiZhenbiao)
- Resolved conversation misalignment issues when switching outputs during chatting (@Keldos-Li)
- Fixed other potential issues

### Miscellaneous
- Updated compatibility with Gradio to version 4.29.0
- Changed the log level to debug for switching to an empty conversation or creating a new one (@GaiZhenbiao)

### KNOWN ISSUES
- **LaTeX rendering is disabled due to an issue in Gradio**

</details>

### Features
- 在对话历史记录中能够保存“单轮对话”和“流式传输”勾选状态 (@GaiZhenbiao, @Keldos-Li)
- 增加admin_list参数，只允许管理员重启/更新服务 (@GaiZhenbiao)
- 增加对话重命名模型设置（可选） (@XiaoRan)
- 改进了重命名、导出、下载对话历史记录的代码 (@GaiZhenbiao, @Keldos-Li)
- 保存的对话历史记录不再包含多余的HTML标签 (@GaiZhenbiao)
- 生成时对话界面允许滚动 (@Keldos-Li)

### Bug Fixes
- 修复了部分模型的前端显示问题 (@GaiZhenbiao)
- 修复优化了上传、加载、刷新历史文件时可能的问题 (@GaiZhenbiao)
- 在加载 prompt 模板时加入额外的检查 (@GaiZhenbiao)
- 解决了用户可能访问其他用户历史记录的问题 (@GaiZhenbiao)
- 修复创建新对话时的流式传输勾选不匹配的问题 (@GaiZhenbiao)
- 在用正则表达式搜索历史记录时加入超时机制，以避免ReDoS问题 (@GaiZhenbiao)
- 修复在输出时切换时聊天导致对话错乱的问题 (@Keldos-Li)
- 修复了其他潜在的问题

### Miscellaneous
- 更新适配 Gradio 到 4.29.0
- 切换空对话/创建新对话时的日志级别修改为debug (@GaiZhenbiao)

### KNOWN ISSUES
-  **由于 Gradio 的一个问题，LaTeX 渲染被禁用** <br>LaTeX rendering is disabled due to an issue in Gradio

**Full Changelog**: https://github.com/GaiZhenbiao/ChuanhuChatGPT/compare/20240914...20241204

> [!important]
> _如果您手动更新，请在更新完成后执行以下命令更新依赖。_ 
> _Please execute the following commands after manually updating._
> ```sh
> pip install -r requirements.txt --upgrade
> ```
<!-- requirements reinstall needed -->

---

> **Source** [GaiZhenbiao/ChuanhuChatGPT](https://github.com/GaiZhenbiao/ChuanhuChatGPT) · `20241204` · 2024-12-04 · [upstream release](https://github.com/GaiZhenbiao/ChuanhuChatGPT/releases/tag/20241204)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
