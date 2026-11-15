---
title: "ollama v0.40.0"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.0"
version: "v0.40.0"
published: "2026-09-25"
type: "minor"
lang: "zh"
---

# ollama v0.40.0

## 发生了什么变化

**模型默认在 Apple Silicon 上的 MLX 上运行**

在此版本中，在 Apple Silicon 设备上，MLX 运行时支持的模型架构将自动在 MLX 上运行。

```
ollama pull qwen3.8
ollama run qwen3.8
```

其他型号包括 [gemma4](https://ollama.com/library/gemma4)、[qwen3.6](https://ollama.com/library/qwen3.6) 和 [qwen3.5](https://ollama.com/library/qwen3.5)

决策模型现在也可在 MLX 上使用： [Nimble](https://ollama.com/library/nimble) [tev1](https://ollama.com/library/tev1) [clef](https://ollama.com/library/clef) [clef-flash](https://ollama.com/library/clef-flash) 

MLX 现在支持嵌入模型：[embeddinggemma-2](https://ollama.com/library/embeddinggemma-2)

我们将继续测试并启用其他模型。


**完整 Changelog**：https://github.com/ollama/ollama/compare/v0.35.1...v0.40.0

---

> 📦 仓库：[ollama/ollama](https://github.com/ollama/ollama) · 🏷️ 版本：`v0.40.0` · 📅 发布：2026-09-25 · [查看英文原版 Release](https://github.com/ollama/ollama/releases/tag/v0.40.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
