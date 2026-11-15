---
title: "ollama v0.40.12"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.12"
version: "v0.40.12"
published: "2026-10-27"
type: "patch"
lang: "zh"
---

# ollama v0.40.12

## 液体人工智能 LFM3

[LFM3](https://ollama.com/library/lfm3) 是 Liquid AI 的新小型模型系列，基于 Liquid 的新三混合架构，专为本地代理、工具调用和结构化输出而构建。该家庭包括：

- [lfm3](https://ollama.com/library/lfm3)：具有 256K 令牌上下文窗口的 1.7B 文本模型
- [lfm3-vl](https://ollama.com/library/lfm3-vl)：增加图像理解
- [lfm3-audio](https://ollama.com/library/lfm3-audio)：18 种语言的语音识别、翻译和文本转语音
- [lfm3-omni](https://ollama.com/library/lfm3-omni)：文本、图像和音频合一模型

```sh
ollama run lfm3
```

## d1 决策模型

Liquid AI 的 d1 模型现在有 2B 尺寸，基于 LFM3 构建。 [d1](https://ollama.com/library/d1) 做出有关文本和图像的决定，[d1-omni](https://ollama.com/library/d1-omni) 添加音频。

```sh
ollama run d1:2b "I was charged twice for order 4417." --ask "Is this a billing issue?"
```

注意：此版本中的 Apple 硬件支持 lfm3 和 d1 2b。  对 Linux/Windows 的支持即将推出。

## 发生了什么变化
- 在 Apple 芯片上为 Gemma 4、Flint 和 Laguna 型号提供更快的即时处理
- 推测解码现在支持 MLX 上的 DFlash2 草稿模型
- Gemma 4 在小图像中保留更多细节
- `ollama launch` 现在可与 OpenCode v2 配合使用
- 修复了 Kimi CLI 的仅工具助手转向
- 更新了 MLX 和 llama.cpp

**完整 Changelog**：https://github.com/ollama/ollama/compare/v0.40.11...v0.40.12

---

> 📦 仓库：[ollama/ollama](https://github.com/ollama/ollama) · 🏷️ 版本：`v0.40.12` · 📅 发布：2026-10-27 · [查看英文原版 Release](https://github.com/ollama/ollama/releases/tag/v0.40.12)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
