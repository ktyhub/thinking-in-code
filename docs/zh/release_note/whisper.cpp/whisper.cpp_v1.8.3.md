---
title: "whisper.cpp v1.8.3"
project: "whisper.cpp"
repo: "ggml-org/whisper.cpp"
tag: "v1.8.3"
version: "v1.8.3"
published: "2026-01-15"
type: "patch"
lang: "zh"
---

# whisper.cpp v1.8.3

## 概述

维护版本，最新的 ggml，工具/服务器/绑定的细微改进。

## 发生了什么变化
* 服务器：由 @ggerganov 在 https://github.com/ggml-org/whisper.cpp/pull/3482 中设置 no_context == true
* WASM 示例由 https://github.com/ggml-org/whisper.cpp/pull/3487 中的 @Orel-A 破解为希伯来语
* ruby：@KitaitiMakoto 在 https://github.com/ggml-org/whisper.cpp/pull/3490 中修复了小错误
* @OrelSokolov 在 https://github.com/ggml-org/whisper.cpp/pull/3492 中使用集成显卡实现 12 倍性能提升
* ruby ：VAD 与 ASR 分开，由 @KitaitiMakoto 在 https://github.com/ggml-org/whisper.cpp/pull/3518 中编写
* vad：Silero VAD v6.2.0，作者：@KitaitiMakoto，https://github.com/ggml-org/whisper.cpp/pull/3524
* 需要 #include <cmath> 才能在 Macos 11 上通过 https://github.com/ggml-org/whisper.cpp/pull/3533 中的 @smilingpoplar 进行编译
* 在https://github.com/ggml-org/whisper.cpp/pull/3516中添加@lrisguan验证的Ascend NPU设备
* 示例：修复 https://github.com/ggml-org/whisper.cpp/pull/3535 中 @danbev 的 vad-speech-segments 命令 [no ci] 中的拼写错误
* 测试：更新 VAD 测试以在 https://github.com/ggml-org/whisper.cpp/pull/3534 中使用 @danbev 的 Silero V6.2.0
* vad ：修复 https://github.com/ggml-org/whisper.cpp/pull/3558 中@josephsellers 样本缩减循环中的缓冲区溢出问题
* 允许在https://github.com/ggml-org/whisper.cpp/pull/3503中@joshmux在Go绑定中跨多个Process()调用来调用NextSegment()
* 在https://github.com/ggml-org/whisper.cpp/pull/3563中通过@joshmux为Go绑定启用VAD
* 服务器：允许 @socram8888 在 https://github.com/ggml-org/whisper.cpp/pull/3564 中为 ffmpeg 自定义临时目录
* 修复 FreeBSD 链接器错误：@rsmirnov90 在 https://github.com/ggml-org/whisper.cpp/pull/3568 中未定义对 pthread_create 的引用
* ruby : 添加 Whisper::Token，通过 @KitaitiMakoto 在 https://github.com/ggml-org/whisper.cpp/pull/3575 中修复模型 URI
* ruby : 修复 https://github.com/ggml-org/whisper.cpp/pull/3591 中 @KitaitiMakoto 的分段错误
* cmake：修复https://github.com/ggml-org/whisper.cpp/pull/3600中@ink-splatters的可执行示例目标

## 新贡献者
* @Orel-A 在 https://github.com/ggml-org/whisper.cpp/pull/3487 中做出了他们的第一个贡献
* @OrelSokolov 在 https://github.com/ggml-org/whisper.cpp/pull/3492 中做出了第一个贡献
* @smilingpoplar 在 https://github.com/ggml-org/whisper.cpp/pull/3533 中做出了第一个贡献
* @lrisguan 在 https://github.com/ggml-org/whisper.cpp/pull/3516 中做出了第一个贡献
* @josephsellers 在 https://github.com/ggml-org/whisper.cpp/pull/3558 中做出了第一个贡献
* @joshmux 在 https://github.com/ggml-org/whisper.cpp/pull/3503 中做出了第一个贡献
* @socram8888 在 https://github.com/ggml-org/whisper.cpp/pull/3564 中做出了第一个贡献
* @rsmirnov90 在 https://github.com/ggml-org/whisper.cpp/pull/3568 中做出了第一个贡献
* @ink-splatters 在 https://github.com/ggml-org/whisper.cpp/pull/3600 中做出了第一个贡献

**完整 Changelog**：https://github.com/ggml-org/whisper.cpp/compare/v1.8.2...v1.8.3

---

> 📦 仓库：[ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) · 🏷️ 版本：`v1.8.3` · 📅 发布：2026-01-15 · [查看英文原版 Release](https://github.com/ggml-org/whisper.cpp/releases/tag/v1.8.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
