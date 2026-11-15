---
title: "ollama v0.40.5"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.5"
version: "v0.40.5"
published: "2026-10-14"
type: "patch"
lang: "zh"
---

# ollama v0.40.5

## NVIDIA Nemotron 3.5 超级

[NVIDIA Nemotron 3.5 Super](https://ollama.com/library/nemotron-3.5-super) 是一种用于编码、推理、工具使用和文档理解的视觉语言模型。它将 120B 参数混合 Mamba-2/Transformer 专家混合主干（每个令牌 12B 活动）与 C-RADIO 视觉编码器配对，并支持工具调用、开/关思维模式以及高达 1M 令牌的上下文。

```
ollama run nemotron-3.5-super
```

紧凑型兄弟产品 [Nemotron 3.5 Bolt](https://ollama.com/library/nemotron-3.5-bolt) 可将超级参数精炼至 74B 参数（9B 活动），经过调整以适应 24 GB NVIDIA GPU 的日常代理任务，并通过其附带的绘图器进行推测解码。

## 发生了什么变化
* 决策模型现在可在云端使用 - 使用 `clef:cloud` 和 `clef-flash:cloud` 通过 ollama.com 云运行决策模型，无需将其拉到本地
* 继续包含自定义工具调用的 OpenAI 兼容响应对话不再因错误而失败
* 云访问失败时出现更清晰的错误消息：登录问题、桌面应用程序中的支付问题以及来自 ChatGPT 网关的上游访问错误现在可以解释出现的问题
* 更新了 llama.cpp（添加 Nemotron 3.5 支持）和 MLX

## 新贡献者
* @willietran 在 https://github.com/ollama/ollama/pull/18986 中做出了第一个贡献

**完整 Changelog**：https://github.com/ollama/ollama/compare/v0.40.4...v0.40.5

---

> 📦 仓库：[ollama/ollama](https://github.com/ollama/ollama) · 🏷️ 版本：`v0.40.5` · 📅 发布：2026-10-14 · [查看英文原版 Release](https://github.com/ollama/ollama/releases/tag/v0.40.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
