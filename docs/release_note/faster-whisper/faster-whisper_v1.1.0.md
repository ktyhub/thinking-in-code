---
title: "faster-whisper v1.1.0"
project: "faster-whisper"
repo: "SYSTRAN/faster-whisper"
tag: "v1.1.0"
version: "v1.1.0"
published: "2024-11-21"
type: "minor"
lang: "en"
summary: "New batched inference that is 4x faster and accurate, Refer to README on usage instructions. · Support for the new large-v3-turbo model. · VAD filter is now 3x faster on CPU. · Feature Extraction is now 3x faster."
---

# faster-whisper v1.1.0

## New Features
* New batched inference that is 4x faster and accurate, Refer to [README](https://github.com/SYSTRAN/faster-whisper/tree/v1.1.0?tab=readme-ov-file#batched-transcription) on usage instructions.
* Support for the new `large-v3-turbo` model.
* VAD filter is now 3x faster on CPU.
* Feature Extraction is now 3x faster.
* Added `log_progress` to `WhisperModel.transcribe` to print transcription progress.
* Added `multilingual` option to transcription to allow transcribing multilingual audio. Note that Large models already have codeswitching capabilities, so this is mostly beneficial to `medium` model or smaller.
* `WhisperModel.detect_language` now has the option to use VAD filter and improved language detection using `language_detection_segments` and `language_detection_threshold`.

## Bug Fixes
* Use correct features padding for encoder input when `chunk_length` <30s
* Use correct `seek` value in output

## Other Changes
* replace `NamedTuple` with `dataclass` in `Word`, `Segment`, `TranscriptionOptions`, `TranscriptionInfo`, and `VadOptions`, this allows conversion to `json` without nesting. Note that `_asdict()` method is still available in `Word` and `Segment` classes for backward compatibility but will be removed in the next release, you can use `dataclasses.asdict()` instead.
* Added new tests for development
* Updated benchmarks in the Readme
* use `jiwer` instead of `evaluate` in benchmarks
* Filter out non_speech_tokens in suppressed tokens by @jordimas in https://github.com/SYSTRAN/faster-whisper/pull/898


## New Contributors
* @Jiltseb made their first contribution in https://github.com/SYSTRAN/faster-whisper/pull/856
* @heimoshuiyu made their first contribution in https://github.com/SYSTRAN/faster-whisper/pull/1092

**Full Changelog**: https://github.com/SYSTRAN/faster-whisper/compare/v1.0.3...v1.1.0

---

> **Source** [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) · `v1.1.0` · 2024-11-21 · [upstream release](https://github.com/SYSTRAN/faster-whisper/releases/tag/v1.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
