---
title: "faster-whisper v1.0.3"
project: "faster-whisper"
repo: "SYSTRAN/faster-whisper"
tag: "v1.0.3"
version: "v1.0.3"
published: "2024-07-01"
type: "patch"
lang: "zh"
---

# faster-whisper v1.0.3

## 将 Silero-Vad 模型升级到最新 V5 版本（https://github.com/SYSTRAN/faster-whisper/pull/884）

Silero-vad V5 发布：https://github.com/snakers4/silero-vad/releases/tag/v5.0
- window_size_samples 参数固定为 512。
- 更改为使用状态变量而不是现有的 h 和 c 变量。
- 内部逻辑略有改变，现在一些上下文（前一个块的一部分）与当前块一起传递。
- 将状态变量的维度从 64 更改为 128。
- 将 ONNX 文件替换为 V5 版本

## 其他变化

* 改进使用 clip_timestamps 时的语言检测 (#867)
* Docker 文件改进 (#848)
* 修复模型中使用的 #839 不正确的 clip_timestamps (#842)

---

> 📦 仓库：[SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) · 🏷️ 版本：`v1.0.3` · 📅 发布：2024-07-01 · [查看英文原版 Release](https://github.com/SYSTRAN/faster-whisper/releases/tag/v1.0.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
