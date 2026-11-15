---
title: "MoneyPrinterTurbo v1.2.8"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.2.8"
version: "v1.2.8"
published: "2026-05-28"
type: "patch"
lang: "zh"
---

# MoneyPrinterTurbo v1.2.8

## MoneyPrinterTurbo v1.2.8

此版本收集了自 `v1.2.7` 以来合并的错误修复、提供程序添加、安全强化、部署修复和 PR。

### 亮点

- 添加了对 100 多个兼容模型网关的 LiteLLM 提供商支持。
- 通过现有 OpenAI 兼容的 LLM 路径添加了 Grok/xAI 提供商支持。
- 添加了 WebUI 支持，用于上传自定义音频并从本地旁白生成视频。
- 在最近的依赖项更新后改进了 Gemini TTS 和 Edge 字幕兼容性。
- 修复了 Azure LLM 提供商路由，以便 AzureOpenAI 请求正确使用 Azure client 路径。
- 更新了 Google Colab 笔记本以使用隔离的 `uv` 环境并避免 Colab 全局依赖项冲突。

### 错误修复

- 修复了字幕分割问题，因此保留带有千位分隔符的数字，例如 `1,000`。
- 修复了 Redis 任务分页和任务状态列表行为。
- 修复了视频串联的捆绑 ffmpeg 发现。
- 持续时间探测后关闭音频 clips 以避免文件句柄泄漏。
- 在材料检查期间抑制嘈杂的 MoviePy 探测输出。
- 添加了挂起 Edge TTS 流的超时处理。
- 针对空选择/消息的强化 LiteLLM 响应解析。
- 改进了 Windows 便携式更新程序和 Azure TTS 兼容性。
- 恢复了使用边缘字幕提供程序时的 Gemini TTS 字幕生成。

### 安全和强化

- 强化任务文件夹打开和路径验证。
- 强化上传/检索媒体文件路径处理。
- 添加了任务队列边界和更安全的队列行为。
- 恢复了外部材料/API 请求的 TLS 验证。
- 默认情况下禁用有风险的 g4f 使用，并将其移至显式可选依赖路径后面。
- 添加了针对文件路径、任务状态、LLM、材料、视频和语音行为的重点回归测试。

### 文档和部署

- 在自述文件中添加了系统要求矩阵。
- 修复了中文和英文文档中的 README 拼写错误。
- 允许在 Docker 部署中覆盖 Redis 主机。
- 更新了 Colab 设置以使用 `uv sync --frozen --python 3.11` 并通过 `uv run` 启动 Streamlit。

### 合并 PR

- #861 Docker Redis 主机覆盖。
- #891 自述文件拼写错误修复。
- #897 `video_transition_mode=None` 回归测试。
- #900 README-en 拼写错误修复。
- #903 Grok 提供商支持。

### 验证

在标记此版本之前：

```bash
uv lock --check
uv run python -m unittest test.services.test_llm test.services.test_video.TestVideoService.test_combine_videos_handles_none_transition_mode test.services.test_voice.TestVoiceService.test_edge_cue_aggregation_handles_thousand_separator_comma
uv run python -m compileall app webui
```

---

> 📦 仓库：[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · 🏷️ 版本：`v1.2.8` · 📅 发布：2026-05-28 · [查看英文原版 Release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.2.8)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
