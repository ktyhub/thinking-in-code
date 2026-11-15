---
title: "ollama v0.40.7"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.7"
version: "v0.40.7"
published: "2026-10-18"
type: "patch"
lang: "zh"
---

# ollama v0.40.7

## 发生了什么变化
* [pplx-decider](https://ollama.com/library/pplx-decider) 是来自 Perplexity 的 27B 决策模型，从
Qwen3.8-27B
* 在有和没有的模型之间切换时，继续 OpenAI 兼容的响应对话不再失败
思考，或者当历史包含另一个提供者的压缩项时
* 修复了 client 工具调用（例如带有网络搜索的 Codex）在打开之前可能发出的流响应请求
推理项目，产生顺序错误/重复的工具调用事件
* 现在，当 client 断开连接时，在 llama.com 上路由到远程模型的请求将被取消，而不是继续
运行
* `ollama show` 现在报告模型使用哪个渲染器和解析器以及其聊天模板来自何处； API
在新的 `renderer`、`parser` 和 `template_source` 字段中公开相同的值
* 更多草稿模型现在支持推测解码：llama-server 自动推断草稿类型，而不是
要求奥拉马识别它
* `ollama launch claude` 现在将 `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 限制在 Claude Code 的支持范围内，避免了
“窗口太大”警告
* 更新了 llama.cpp 和 MLX

**完整 Changelog**：https://github.com/ollama/ollama/compare/v0.40.6...v0.40.7

---

> 📦 仓库：[ollama/ollama](https://github.com/ollama/ollama) · 🏷️ 版本：`v0.40.7` · 📅 发布：2026-10-18 · [查看英文原版 Release](https://github.com/ollama/ollama/releases/tag/v0.40.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
