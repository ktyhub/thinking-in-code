---
title: "MoneyPrinterTurbo v1.2.7"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.2.7"
version: "v1.2.7"
published: "2026-04-03"
type: "patch"
lang: "en"
summary: "本次更新主要聚焦于稳定性、TTS 与字幕恢复、本地素材处理、视频合成链路优化，以及开发环境整理。"
---

# MoneyPrinterTurbo v1.2.7

## v1.2.7

### 中文
本次更新主要聚焦于稳定性、TTS 与字幕恢复、本地素材处理、视频合成链路优化，以及开发环境整理。

- 修复 Edge TTS 兼容性问题，恢复语音合成与可读字幕输出
- 优化字幕生成效果，修复多行字幕裁切和中文断句可读性问题
- 优化本地素材链路，改进上传、过滤、排序和重复生成时的稳定性
- 优化视频合成流程，修复短片段丢失、转场不明显、重复转码和最终音频导出不稳定等问题
- 增强 Gemini / OpenAI 兼容接口相关容错
- 加固下载、流式播放与上传接口的文件路径安全校验
- 引入 `uv`、`pyproject.toml` 和 `uv.lock`，统一 Python 环境与依赖管理
- 调整 README 结构，简化文档布局

### English
This release focuses on stability, TTS and subtitle recovery, local material handling, video pipeline improvements, and developer environment cleanup.

- Restored Edge TTS compatibility and readable subtitle output
- Improved subtitle generation, including multiline caption rendering and better sentence readability
- Improved local material handling for upload, filtering, ordering, and rerun stability
- Improved the video pipeline by fixing dropped short clips, weak transitions, repeated re-encoding, and unstable final audio export
- Improved error handling for Gemini and OpenAI-compatible integrations
- Hardened file path validation for download, streaming, and upload endpoints
- Adopted `uv`, `pyproject.toml`, and `uv.lock` for modern Python environment management
- Simplified and reorganized the README

---

> **Source** [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · `v1.2.7` · 2026-04-03 · [upstream release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.2.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
