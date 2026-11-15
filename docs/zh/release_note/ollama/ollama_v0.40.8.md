---
title: "ollama v0.40.8"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.8"
version: "v0.40.8"
published: "2026-10-21"
type: "patch"
lang: "zh"
---

# ollama v0.40.8

<palign=“center”><imgwidth=“160”alt=“flint-logo”src=“https://github.com/user-attachments/assets/3c1741a5-710c-4bde-8ac7-096e40b495bb”/></p>

## 递归火石

[Flint](https://ollama.com/library/flint) 将 Recursive 的编码模型引入 Ollama。它专为编码代理在存储库中执行的工作而设计：理解不熟悉的代码、跟踪错误、实现功能和添加测试。推理、多轮工具使用和 262K 令牌上下文窗口支持跨文件和工具交互的较长任务。

Flint 是一个 Apache 2.0-licensed、40B 参数混合专家模型，每个代币大约有 2.5B 个活跃参数。在其[发布评估](https://huggingface.co/RecursiveSI/flint#evaluation) 中，Recursive 在 Terminal-Bench 2.1 上报告了 54.9%，在 SWE-bench Verified 上报告了 74.2%。

```sh
ollama run flint
```


注意：MacOS 支持 Flint。  其他 GPU 支持将在后续版本中启用。

**完整 Changelog**：https://github.com/ollama/ollama/compare/v0.40.7...v0.40.8

---

> 📦 仓库：[ollama/ollama](https://github.com/ollama/ollama) · 🏷️ 版本：`v0.40.8` · 📅 发布：2026-10-21 · [查看英文原版 Release](https://github.com/ollama/ollama/releases/tag/v0.40.8)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
