---
title: "faster-whisper v1.0.2"
project: "faster-whisper"
repo: "SYSTRAN/faster-whisper"
tag: "v1.0.2"
version: "v1.0.2"
published: "2024-05-06"
type: "patch"
lang: "zh"
---

# faster-whisper v1.0.2

* 添加对 distil-large-v3 (https://github.com/SYSTRAN/faster-whisper/pull/755) 的支持
最新的 Distil-Whisper 模型 [distil-large-v3](https://huggingface.co/distil-whisper/distil-large-v3-ct2) 本质上是为与 OpenAI 顺序算法配合使用而设计的。
 
* 基准 (https://github.com/SYSTRAN/faster-whisper/pull/773)
引入了测量 Faster-whisper 中内存、字错误率 (WER) 和速度基准测试的功能。
 
* 支持初始化更多耳语模型参数（https://github.com/SYSTRAN/faster-whisper/pull/807）
 
* 小错误修复：
  * 如果音频为空则代码中断 (https://github.com/SYSTRAN/faster-whisper/pull/768)
  * 万无一失：如果使用 clip_timestamps (https://github.com/SYSTRAN/faster-whisper/pull/769)，则禁用 VAD
  * 将faster_whisper.assets作为有效的python包进行分发（https://github.com/SYSTRAN/faster-whisper/pull/774）
  * 放宽分词器版本限制 (https://github.com/SYSTRAN/faster-whisper/pull/804)
  * CUDA版本和更新的安装说明（https://github.com/SYSTRAN/faster-whisper/pull/785）
 
* 原始 openai Whisper 项目的新功能：
  * 功能/添加热词 (https://github.com/SYSTRAN/faster-whisper/pull/731)
  * 改进语言检测（https://github.com/SYSTRAN/faster-whisper/pull/732）

---

> 📦 仓库：[SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) · 🏷️ 版本：`v1.0.2` · 📅 发布：2024-05-06 · [查看英文原版 Release](https://github.com/SYSTRAN/faster-whisper/releases/tag/v1.0.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
