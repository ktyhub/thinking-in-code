---
title: "MoneyPrinterTurbo v1.3.4"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.4"
version: "v1.3.4"
published: "2026-08-12"
type: "patch"
lang: "zh"
---

# MoneyPrinterTurbo v1.3.4

## 亮点

- 添加了 WebUI 首选项以禁止在视频生成后自动打开任务文件夹。
- 生成的视频现在使用视频主题作为下载文件名，并为多视频任务自动编号。
- 添加了可配置的 Whisper `initial_prompt` 支持，以改进名称、术语和特定于语言的词汇的字幕识别。
- 添加了持久材料搜索缓存，以减少重复的提供者请求、API 使用和速率限制压力。
- 库存材料选择现在优先考虑与目标视频方向匹配的资产。
- 向任务工件添加了已清理的材料源出处，以便更轻松地跟踪源。

## 修复和改进

- 修复了在视频生成任务运行时 WebUI 配置更改可能会阻塞页面的问题。
- 修复了 WebUI 重新启动或浏览器重新连接后 ElevenLabs API 密钥被清除的问题。
- 统一 ElevenLabs API 跨 TTS 和音乐生成的关键分辨率，包括 `ELEVENLABS_API_KEY` 环境变量支持。
- 修复了通过绑定安装提供 `config.toml` 时的配置更新。
- 改进了对 Pixabay `429` 响应和 Cloudflare 挑战的诊断。
- 阻止 PixabayAPI 密钥出现在应用程序日志中。
- 添加了对 ElevenLabs 音乐请求的响应和资源限制，以防止内存使用过多。
- API 请求现在拒绝视频计数和低于 1 的 clip 持续时间。
- 修复了早期版本中因过时或无效的排队任务参数而导致的工作程序崩溃。
- 扩展了 WebUI 视频主题输入，以便更轻松地编辑较长的主题。
- 更新了项目文档和相关资源。

## 发生了什么变化

- 通过 @arichazan 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1131 中强制执行 ElevenLabs 资源限制
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1130 中通过 @its-How 编辑日志中的 Pixabay API 键
- 通过 @ShiroKSH 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1149 中验证正向视频生成限制
- 通过 https://github.com/harry0703/MoneyPrinterTurbo/pull/1150 中的 @kapil971390 处理陈旧的排队任务参数而不使 Worker 崩溃
- 通过 @Blackspyda17 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1163 中配置 Whisper `initial_prompt`

## 新贡献者

- @arichazan 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1131 中做出了第一个贡献
- @its-如何在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1130 中做出第一个贡献
- @ShiroKSH 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1149 中做出了第一个贡献
- @Blackspyda17 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1163 中做出了第一个贡献

**完整 Changelog**：https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.3...v1.3.4

---

> 📦 仓库：[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · 🏷️ 版本：`v1.3.4` · 📅 发布：2026-08-12 · [查看英文原版 Release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
