---
title: "whisper.cpp v1.8.5"
project: "whisper.cpp"
repo: "ggml-org/whisper.cpp"
tag: "v1.8.5"
version: "v1.8.5"
published: "2026-05-29"
type: "patch"
lang: "zh"
---

# whisper.cpp v1.8.5

## 概述

维护版本+全方位性能改进：

https://github.com/ggml-org/whisper.cpp/blob/master/scripts/bench-all-gg.txt

## 发生了什么变化
* ruby：修复了 https://github.com/ggml-org/whisper.cpp/pull/3715 中的 @KitaitiMakoto 并行转录中的悬空指针、内存泄漏和 SEGV
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3730
* vad ：在 https://github.com/ggml-org/whisper.cpp/pull/3677 中添加 @danielbodart 的流检测 + 显式状态重置
* bench : 通过 https://github.com/ggml-org/whisper.cpp/pull/3769 中的 @jinweihan-ai 将提交结果 URL 同步到 ggml-org
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3786
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3789
* ruby : 无需 GVL 进行转录，接受更多 MemoryViews，Windows 支持，修复内存大小报告，改进 @KitaitiMakoto 在 https://github.com/ggml-org/whisper.cpp/pull/3775 中的文档
* @bviksoe 在 https://github.com/ggml-org/whisper.cpp/pull/2279 中的时间戳不正确
* 服务器：添加对https://github.com/ggml-org/whisper.cpp/pull/3785中@alubbe直接控制token_timestamps的支持
* 修复 #984：关于 max_tokens 跳过 https://github.com/ggml-org/whisper.cpp/pull/3798 中@annaeina 的剩余音频问题
* 服务器：修复 https://github.com/ggml-org/whisper.cpp/pull/3784 中 @alubbe 请求之间的参数泄漏
* 服务器：修复 https://github.com/ggml-org/whisper.cpp/pull/3783 中的 @alubbe 无法读取 no_speech_thold
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3803
* 服务器：在https://github.com/ggml-org/whisper.cpp/pull/3781中添加@alubbe对carry_initial_prompt的支持
* 服务器：通过https://github.com/ggml-org/whisper.cpp/pull/3782中的@alubbe返回JSON中的发言者信息
* 示例：修复 @petterreinholdtsen 在 https://github.com/ggml-org/whisper.cpp/pull/3810 中的 read_audio_data 中的内存泄漏
* 耳语 : 通过 @danbev 在 https://github.com/ggml-org/whisper.cpp/pull/3812 中设置每次迭代的基准数据
* ci : 在 https://github.com/ggml-org/whisper.cpp/pull/3815 中使用 github ubuntu-22.04-arm 运行程序代替 @danbev 的 qemu
* 修复：服务器 /inference 无法通过 https://github.com/ggml-org/whisper.cpp/pull/3818 中的 @ServeurpersoCom 解码内存中音频（回归）
* 修复：在 https://github.com/ggml-org/whisper.cpp/pull/3756 中的 @orbisai0security 在 jfk_reader.c 中的绑定/ruby/test/jfk_reader/jfk_reader 中
* cmake : 在 https://github.com/ggml-org/whisper.cpp/pull/3808 中添加 @danbev 的 CMakePresets.json [无 ci]
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3824
* [AMD] 在 https://github.com/ggml-org/whisper.cpp/pull/3823 中添加 @Kaihui-AMD 的 AMD ROCm/HIP GPU 构建指令
* cli ：在 JSON 中合并跨 UTF-8 边界分割的标记，由 @texasich 在 https://github.com/ggml-org/whisper.cpp/pull/3751 中输出
* 文档：在 https://github.com/ggml-org/whisper.cpp/pull/3826 中添加 @danbev 的 AGENTS.md 和 CONTRIBUTING.md [无 ci]
* ci ：仅在 https://github.com/ggml-org/whisper.cpp/pull/3828 中的 @danbev 推送到 master [no ci] 时运行 docker 作业
* ci : 在 https://github.com/ggml-org/whisper.cpp/pull/3830 中为@danbev 设置 GGML_NATIVE=OFF 绑定-java
* ci : renable arm64 docker 由 @danbev 在 https://github.com/ggml-org/whisper.cpp/pull/3832 中构建
* ci : 在 https://github.com/ggml-org/whisper.cpp/pull/3833 中添加 @danbev 的 push/pull_request 路径 ruby 作业
* ci ：修复 https://github.com/ggml-org/whisper.cpp/pull/3835 中 @danbev 的绑定-go 作业 [无 ci] 的包含路径
* ci : 在 https://github.com/ggml-org/whisper.cpp/pull/3837 中的 @danbev 在 build.yml [无 ci] 中添加忽略绑定/{ruby, go}
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3840

## 新贡献者
* @danielbodart 在 https://github.com/ggml-org/whisper.cpp/pull/3677 中做出了第一个贡献
* @jinweihan-ai 在 https://github.com/ggml-org/whisper.cpp/pull/3769 中做出了第一个贡献
* @bviksoe 在 https://github.com/ggml-org/whisper.cpp/pull/2279 中做出了第一个贡献
* @annaeina 在 https://github.com/ggml-org/whisper.cpp/pull/3798 中做出了第一个贡献
* @ServeurpersoCom 在 https://github.com/ggml-org/whisper.cpp/pull/3818 中做出了第一个贡献
* @orbisai0security 在 https://github.com/ggml-org/whisper.cpp/pull/3756 中做出了第一个贡献
* @Kaihui-AMD 在 https://github.com/ggml-org/whisper.cpp/pull/3823 中做出了第一个贡献
* @texasich 在 https://github.com/ggml-org/whisper.cpp/pull/3751 中做出了第一个贡献

**完整 Changelog**：https://github.com/ggml-org/whisper.cpp/compare/v1.8.4...v1.8.5

---

> 📦 仓库：[ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) · 🏷️ 版本：`v1.8.5` · 📅 发布：2026-05-29 · [查看英文原版 Release](https://github.com/ggml-org/whisper.cpp/releases/tag/v1.8.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
