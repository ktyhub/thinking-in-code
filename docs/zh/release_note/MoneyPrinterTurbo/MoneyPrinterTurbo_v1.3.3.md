---
title: "MoneyPrinterTurbo v1.3.3"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.3"
version: "v1.3.3"
published: "2026-07-24"
type: "patch"
lang: "zh"
---

# MoneyPrinterTurbo v1.3.3

## 亮点

- 添加了完整的画外音预览以及视频生成前的预计持续时间。当最终生成设置保持不变时，可以重复使用预览音频。
- 通过 Sonilo 和 ElevenLabs 添加了可选的视频匹配背景音乐生成，当音乐生成失败时可以进行优雅的回退。
- 添加了直接从 WebUI 上传的自定义背景音乐。
- 添加了全局视频 clip 速度控制和新的 ZoomIn / ZoomOut 过渡。
- 在 WebUI 中添加了轻量级、非阻塞的更新通知。
- 跨 WebUI、API 和 CLI 的强化任务执行和恢复，具有更清晰的阶段和错误跟踪。

## 修复和改进

- 修复了因 Python `app` 软件包冲突而导致的 Windows 可移植软件包启动失败。
- 修复了开始视频生成后 WebUI 变为空白的问题。
- 在 Streamlit 重新运行时保留生成进度、日志和终端任务状态。
- 改进了中断任务恢复，并使社交发布失败与成功的视频生成无关。
- 为跨平台发布添加了队列限制和更可靠的状态更新。
- 防止当另一个字幕提供程序失败时意外的 Whisper 模型回退。
- 修复了传递到材料关键字生成中的 LLM 提供商错误。
- 修复了对同一临时视频文件的重复尝试清理问题。
- 由于编码器舍入，允许视频素材仅比标称最小分辨率低几个像素。
- 标准化 TTS API 关键链接和提供商设置指南。
- 完成了受支持的 WebUI 语言中缺失的二次翻译。
- 添加了行结束标准化，以便在 Windows、macOS 和 Linux 上实现更一致的贡献。
- 扩展了任务执行、API 控制器、媒体处理、队列、应用程序启动和故障恢复的 CI 覆盖范围。

## 发生了什么变化

- 通过 @rongdu88668-ux 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1048 中扩展完整的 CI 测试套件
- 修复 https://github.com/harry0703/MoneyPrinterTurbo/pull/1097 中 @techdou 的 LLM 术语生成错误处理
- 在https://github.com/harry0703/MoneyPrinterTurbo/pull/1101中添加@pcbntt上传的自定义背景音乐
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1103 中添加 @Kizuno18 的行尾标准化
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1104 中添加 @Kizuno18 的 ZoomIn / ZoomOut 视频过渡
- 在https://github.com/harry0703/MoneyPrinterTurbo/pull/1106中添加@pcbntt的全局视频clip速度控制
- 提高 https://github.com/harry0703/MoneyPrinterTurbo/pull/1108 中@pcbntt 对尺寸稍小视频材料的容忍度
- 在https://github.com/harry0703/MoneyPrinterTurbo/pull/1114中添加@cindyxu1030的可选Sonilo视频匹配背景音乐

## 新贡献者

- @rongdu88668-ux 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1048 中做出了第一个贡献
- @techdou 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1097 中做出了第一个贡献
- @Kizuno18 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1103 中做出了第一个贡献
- @cindyxu1030 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1114 中做出了第一个贡献

**完整 Changelog**：https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.2...v1.3.3

---

> 📦 仓库：[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · 🏷️ 版本：`v1.3.3` · 📅 发布：2026-07-24 · [查看英文原版 Release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
