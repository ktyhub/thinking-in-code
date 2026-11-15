---
title: "ollama v0.40.11"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.11"
version: "v0.40.11"
published: "2026-10-24"
type: "patch"
lang: "zh"
---

# ollama v0.40.11

## 演讲

Ollama 现在可以在 macOS 上生成 [语音](https://docs.ollama.com/capabilities/speech)。 `ollama run` 在生成音频时大声播放文本或聊天模型的回复，应用程序可以通过兼容 OpenAI 的 `/v1/audio/speech` 端点传输音频。

```sh
ollama run phonon "Hello from Ollama."
```

## d3 决策模型

[d3](https://ollama.com/library/d3) 将 vLLM 语义路由器的决策模型引入 Ollama。给出模型文本、结构化状态或图像，并要求它进行分类、回答是或否，或者对选项进行概率评分。该系列包括 2B、4B、9B 和 27B 尺寸。

```sh
ollama run d3 "A customer says their card was charged twice." --ask "Is this a billing issue?"
```

## 新贡献者
* @SynapShift 在 https://github.com/ollama/ollama/pull/19173 中做出了第一个贡献

**完整 Changelog**：https://github.com/ollama/ollama/compare/v0.40.10...v0.40.11

---

> 📦 仓库：[ollama/ollama](https://github.com/ollama/ollama) · 🏷️ 版本：`v0.40.11` · 📅 发布：2026-10-24 · [查看英文原版 Release](https://github.com/ollama/ollama/releases/tag/v0.40.11)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
