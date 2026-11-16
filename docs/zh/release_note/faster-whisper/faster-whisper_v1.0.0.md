---
title: "faster-whisper v1.0.0"
project: "faster-whisper"
repo: "SYSTRAN/faster-whisper"
tag: "v1.0.0"
version: "v1.0.0"
published: "2024-02-22"
type: "major"
lang: "zh"
---

# faster-whisper v1.0.0

* 支持蒸馏耳语模型（https://github.com/SYSTRAN/faster-whisper/pull/557）
通过大规模伪标签对 Whisper 模型进行稳健的知识蒸馏。  
欲了解更多详情：https://github.com/huggingface/distil-whisper  
 
* 升级ctranslate2版本至4.0以支持CUDA 12 (https://github.com/SYSTRAN/faster-whisper/pull/694)  
 
* 将 PyAV 版本升级到 11.* 以支持 Python3.12.x (https://github.com/SYSTRAN/faster-whisper/pull/679)  
 
* 小错误修复
  * 不合逻辑的“避免在 no_speech 上计算更高的温度”(https://github.com/SYSTRAN/faster-whisper/pull/652)
  * 损坏的提示_重置_温度（https://github.com/SYSTRAN/faster-whisper/pull/604）
  * 单词时间调整 (https://github.com/SYSTRAN/faster-whisper/pull/616)
 
* 对原始 OpenAI Whisper 项目的新改进
  *跳过幻觉周围的沉默（https://github.com/SYSTRAN/faster-whisper/pull/646）
  * 防止 clip_timestamps (https://github.com/SYSTRAN/faster-whisper/pull/697) 中的出界时间戳出现无限循环

---

> 📦 仓库：[SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) · 🏷️ 版本：`v1.0.0` · 📅 发布：2024-02-22 · [查看英文原版 Release](https://github.com/SYSTRAN/faster-whisper/releases/tag/v1.0.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
