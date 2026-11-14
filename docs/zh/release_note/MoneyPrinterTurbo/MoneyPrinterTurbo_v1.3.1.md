---
title: "MoneyPrinterTurbo v1.3.1"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.3.1"
version: "v1.3.1"
published: "2026-07-06"
type: "patch"
lang: "zh"
---

# MoneyPrinterTurbo v1.3.1

## 亮点

- 添加了新的 LLM 提供商和集成，包括 AIML API、EvoLink 和 VolcEngine Ark。
- 添加了新的 TTS 选项，包括 ElevenLabs 和自托管 OpenAI 兼容的 Chatterbox TTS。
- 添加了可选的 TwelveLabs 视频 AI 集成，以实现更智能的材料理解和重新排名。
- 添加了通过 Upload-Post 发布 YouTube Shorts 的支持。
- 添加了纯 CLI 工作流程，并向命令行生成公开了更多 WebUI 支持的视频参数。
- 添加了 GHCR Docker 镜像发布，以方便容器部署。
- 改进的多语言 WebUI 支持，包括印度尼西亚语和西班牙语更新，以及明确的 `es-ES` 脚本生成支持。

## 修复和改进

- 修复了字幕背景 clipping 并提高了字幕渲染可靠性。
- 修复了使用 Whisper 时生成自定义音频字幕的问题。
- 修复了 Windows MoviePy 临时音频处理以避免 Windows Defender 干扰。
- 修复了 Streamlit 首次运行提示阻止 WebUI 启动的问题。
- 修复了有时需要选择两次的 LLM 提供商选择框切换。
- 修复了视频持续时间安全裕度处理。
- 通过正确使用 `video_concat_mode` 修复了 `video_contact_mode` 拼写错误兼容性。
- 修复了授粉默认 API 端点。
- 改进了针对围栏或多行 LLM 响应的稳健 JSON 解析。
- 在 API 条款中公开了 `match_materials_to_script`。
- 改进了材质匹配，以更好地遵循脚本顺序。
- 针对本地视频素材工作流程的强化 CLI 参数验证。
- 编辑了 LLM 错误输出以避免泄露敏感细节。
- 更新了赞助商致谢和提供者副本。

## 发生了什么变化

- 添加纯 CLI 工作流程，由 @copilot-swe-agent 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1005 中生成无头视频
- 修复 `video_contact_mode` 拼写错误并在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1021 中使用 @reyys 的 `video_concat_mode`
- 通过 @D1m7asis 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1022 中添加 AIML API 提供程序
- 通过 @muhamadmaliqia 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1025 中修复授粉默认端点
- 修复 https://github.com/harry0703/MoneyPrinterTurbo/pull/1026 中 @xlab-nyc 的围栏/多行 LLM 响应的稳健 JSON 解析
- 通过 @mertfurkandgn 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1029 中修复 Windows 上的 MoviePy 临时音频处理
- 防止 Streamlit 首次运行提示阻止 https://github.com/harry0703/MoneyPrinterTurbo/pull/1030 中 @BinaryOutlook 启动 WebUI
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1031 中添加 @BinaryOutlook 的 CI 和有针对性的质量修复
- 通过https://github.com/harry0703/MoneyPrinterTurbo/pull/1033中的@kapil971390验证CLI中的`--video-source local`约束
- 通过 https://github.com/harry0703/MoneyPrinterTurbo/pull/1035 中的 @BinaryOutlook 将 GUI 支持的自定义选项移植到 CLI
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1037 中添加 @lsopenad 的西班牙语（西班牙）WebUI 翻译
- 通过 @lsopenad 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1046 中上传帖子 API 添加 YouTube Shorts 支持
- 通过 https://github.com/harry0703/MoneyPrinterTurbo/pull/1065 中的 @kapil971390 在 `/terms` 端点中公开 `match_materials_to_script`
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1066 中添加 @mteguhfh 的印尼语 WebUI 翻译
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1071 中添加 @nhatanh2996 的 ElevenLabs TTS 支持
- 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1077 中添加 @pcbntt 的 Chatterbox TTS 提供商
- 修复了 @kapil971390 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1078 中上传的 YouTube Shorts 元数据
- 通过 @mohit-twelvelabs 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1084 中添加可选的 TwelveLabs 视频 AI 集成

## 新贡献者

- @copilot-swe-agent 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1005 中做出了第一个贡献
- @reyys 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1021 中做出了第一个贡献
- @D1m7asis 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1022 中做出了第一个贡献
- @muhamadmaliqia 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1025 中做出了第一个贡献
- @xlab-nyc 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1026 中做出了第一个贡献
- @mertfurkandgn 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1029 中做出了第一个贡献
- @BinaryOutlook 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1030 中做出了第一个贡献
- @lsopenad 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1037 中做出了第一个贡献
- @mteguhfh 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1066 中做出了第一个贡献
- @nhatanh2996 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1071 中做出了第一个贡献
- @pcbntt 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1077 中做出了第一个贡献
- @mohit-twelvelabs 在 https://github.com/harry0703/MoneyPrinterTurbo/pull/1084 中做出了第一个贡献

**完整 Changelog**：https://github.com/harry0703/MoneyPrinterTurbo/compare/v1.3.0...v1.3.1

---

> 📦 仓库：[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · 🏷️ 版本：`v1.3.1` · 📅 发布：2026-07-06 · [查看英文原版 Release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
