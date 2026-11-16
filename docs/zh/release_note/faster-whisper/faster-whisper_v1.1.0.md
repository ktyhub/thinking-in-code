---
title: "faster-whisper v1.1.0"
project: "faster-whisper"
repo: "SYSTRAN/faster-whisper"
tag: "v1.1.0"
version: "v1.1.0"
published: "2024-11-21"
type: "minor"
lang: "zh"
---

# faster-whisper v1.1.0

## 新功能
* 新的批量推理速度提高了 4 倍，准确度提高了 4 倍，有关使用说明，请参阅 [README](https://github.com/SYSTRAN/faster-whisper/tree/v1.1.0?tab=readme-ov-file#batched-transcription)。
* 支持新的 `large-v3-turbo` 型号。
* VAD 过滤器现在 CPU 上的速度提高了 3 倍。
* 特征提取速度现在提高了 3 倍。
* 在 `WhisperModel.transcribe` 中添加了 `log_progress` 以打印转录进度。
* 在转录中添加了 `multilingual` 选项，以允许转录多语言音频。请注意，大型模型已经具有代码转换功能，因此这对 `medium` 或更小的模型最有利。
* `WhisperModel.detect_language` 现在可以选择使用 VAD 过滤器，并使用 `language_detection_segments` 和 `language_detection_threshold` 改进语言检测。

## 错误修复
* 当 `chunk_length` <30s 时，对编码器输入使用正确的特征填充
* 在输出中使用正确的 `seek` 值

## 其他变化
* 将 `Word`、`Segment`、`TranscriptionOptions`、`TranscriptionInfo` 和 `VadOptions` 中的 `NamedTuple` 替换为 `dataclass`，这允许在不嵌套的情况下转换为 `json`。请注意，`_asdict()` 方法在 `Word` 和 `Segment` 类中仍然可用，以实现向后兼容性，但将在下一版本中删除，您可以使用 `dataclasses.asdict()` 代替。
* 添加了新的开发测试
* 更新了自述文件中的基准
* 在基准测试中使用 `jiwer` 代替 `evaluate`
* 在https://github.com/SYSTRAN/faster-whisper/pull/898中过滤掉@jordimas抑制的标记中的non_speech_tokens


## 新贡献者
* @Jiltseb 在 https://github.com/SYSTRAN/faster-whisper/pull/856 中做出了第一个贡献
* @heimoshuiyu 在 https://github.com/SYSTRAN/faster-whisper/pull/1092 中做出了第一个贡献

**完整 Changelog**：https://github.com/SYSTRAN/faster-whisper/compare/v1.0.3...v1.1.0

---

> 📦 仓库：[SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) · 🏷️ 版本：`v1.1.0` · 📅 发布：2024-11-21 · [查看英文原版 Release](https://github.com/SYSTRAN/faster-whisper/releases/tag/v1.1.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
