---
title: "MoneyPrinterTurbo v1.3.2"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.2"
version: "v1.3.2"
published: "2026-07-12"
type: "patch"
lang: "zh"
---

# MoneyPrinterTurbo v1.3.2

## 亮点

- 重新设计了 WebUI，具有更清晰的响应式布局、专用设置对话框、改进的暗模式支持以及更一致的交互体验。
- 添加了任务管理，包括状态过滤、进度跟踪、视频播放、文件夹访问、删除和从历史任务设置重新生成。
- 添加了轻量级入门指南，以指导新用户完成配置、视频选项和生成。
- 添加了内置 LLM 连接测试，以便可以在生成之前验证提供商凭据和模型设置。
- 集中式 LLM 提供商元数据、默认值、配置提示和注册链接，以实现更一致的设置和维护。
- 添加了视频缓存统计和清理控件。
- 扩展了命令行工作流程并添加了 MoneyPrinterTurbo Agent 技能以自动生成视频。
- 将项目版本更新为v1.3.2。

## 修复和改进

- 将 Gemini 文本和 TTS 集成从已弃用的 `google-generativeai` SDK 迁移到新的 `google-genai` SDK。
- 修复了 WebUI 选择器有时需要进行两次选择才能使更改生效。
- 在 Streamlit 重新运行时保留生成日志，并修复成功生成后的记录器清理错误。
- 改进了任务状态规范化，使过滤在所有 UI 语言中保持一致。
- 防止正在运行的任务被删除，并收紧任务文件操作边界。
- 改进了音频设置，提供更清晰的旁白模式、特定于提供商的设置指南和更一致的预览控制。
- 修复了 Azure TTS V2 预览生成，以便正确应用所选的语速。
- 改进了字幕设置、背景控制、对比度警告、默认恢复和多语言渲染可靠性。
- 默认情况下禁用字幕背景，同时保留可选的圆形半透明背景。
- 添加了自动视频编码器选择，并更安全地回退到 `libx264`。
- 改进了视频持续时间处理，并设置了较小的安全裕度，以防止输出不完整。
- 修复了 MP3 以外的自定义音频格式的持续时间检测。
- 改进了 LLM 提供商默认设置、描述、注册链接和多语言配置指南。
- 删除了已弃用或不受支持的提供商和视频源选项。
- 通过缓存字体和背景音乐发现改进了 WebUI 性能。
- 更新了 Streamlit 和相关依赖项、Docker 配置、启动脚本和工具栏行为。
- 跨所有支持语言的精致多语言 UI 副本和布局。
- 更新了自述文件、屏幕截图、图库预览、配置示例和 Colab 笔记本。
- 扩展了 WebUI 状态、任务管理、提供程序、CLI 工作流程、字幕、缓存和配置的回归覆盖范围。

## 发生了什么变化

- 修复 https://github.com/harry0703/MoneyPrinterTurbo/pull/1099 中 @pcbntt 对非 MP3 文件的自定义音频持续时间处理
- 通过 @Sushanth012 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1003 中添加视频持续时间安全缓冲区

**完整 Changelog**：https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.1...v1.3.2

---

> 📦 仓库：[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · 🏷️ 版本：`v1.3.2` · 📅 发布：2026-07-12 · [查看英文原版 Release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
