---
title: "whisper.cpp v1.8.4"
project: "whisper.cpp"
repo: "ggml-org/whisper.cpp"
tag: "v1.8.4"
version: "v1.8.4"
published: "2026-03-19"
type: "patch"
lang: "zh"
---

# whisper.cpp v1.8.4

## 概述

维护版本，最新的 ggml，全面提升一些性能。

## 发生了什么变化
* 修复：@lordofriver 在 https://github.com/ggml-org/whisper.cpp/pull/3592 中将 UTF-8 字符在分段换行 (max_len) 中截断为两个“�”
* 示例：在 https://github.com/ggml-org/whisper.cpp/pull/3557 中添加 @brauliobo 的 -g/--gpu-device 选项和 GPU_DEVICE env 支持
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3636
* 修复 @friederbluemle 在 https://github.com/ggml-org/whisper.cpp/pull/3630 中构建的 XCFramework 中 macOS dSYM 路径大小写不匹配的问题
* ruby : 在 https://github.com/ggml-org/whisper.cpp/pull/3633 中添加 `VAD::Context#segments_from_samples`、允许路径名等，由 @KitaitiMakoto 提供
* ruby : 添加 `Whisper::Context::Params`，通过 @KitaitiMakoto 修复 https://github.com/ggml-org/whisper.cpp/pull/3647 中的令牌内存管理
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3652
* ci : 尝试在 https://github.com/ggml-org/whisper.cpp/pull/3655 中通过 @ggerganov 修复镜像
* 服务器：通过 @sidmohan0 在 https://github.com/ggml-org/whisper.cpp/pull/3639 中修复默认 HTML 页面中的硬编码/推理路径
* cmake：在 https://github.com/ggml-org/whisper.cpp/pull/3649 中删除@ckastner 过时的后端构建时配置
* 杂务：更新 https://github.com/ggml-org/whisper.cpp/pull/3646 中 @pgoslatara 过时的 GitHub Actions 版本
* ci：在 https://github.com/ggml-org/whisper.cpp/pull/3644 中添加 @rare-magma 的 vulkan docker 图像
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3665
* 自述文件：修复 https://github.com/ggml-org/whisper.cpp/pull/3670 中 @cluster2600 的 VAD 部分中的重复单词拼写错误
* cli：https://github.com/ggml-org/whisper.cpp/pull/3672中@data-man将miniaudio库更新为0.11.24
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3684
* ruby : @KitaitiMakoto 在 https://github.com/ggml-org/whisper.cpp/pull/3689 中进行 null 检查
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3710
* 服务器：为 https://github.com/ggml-org/whisper.cpp/pull/3707 中 @dearlordylord 的错误响应返回正确的 HTTP 状态代码
* 服务器：允许 @gaelj 在 https://github.com/ggml-org/whisper.cpp/pull/3679 中将 max_len 用于任何输出格式
* 修复：使用 @Aiudadadadf 在 https://github.com/ggml-org/whisper.cpp/pull/3678 中将已弃用的 openvino-dev 替换为 openvino>=2023.3.0，以实现 Python 3.12+ 兼容
* 修复（go）：在 https://github.com/ggml-org/whisper.cpp/pull/3671 中 @Lumberj3ck 的 golang bidings 模型下载示例中正确处理 EOF
* 修复：https://github.com/ggml-org/whisper.cpp/pull/3711 中 @lohopupa 重叠样本导致的 VAD 时间映射时间戳漂移
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3713

## 新贡献者
* @lordofriver 在 https://github.com/ggml-org/whisper.cpp/pull/3592 中做出了第一个贡献
* @brauliobo 在 https://github.com/ggml-org/whisper.cpp/pull/3557 中做出了第一个贡献
* @friederbluemle 在 https://github.com/ggml-org/whisper.cpp/pull/3630 中做出了第一个贡献
* @sidmohan0 在 https://github.com/ggml-org/whisper.cpp/pull/3639 中做出了第一个贡献
* @ckastner 在 https://github.com/ggml-org/whisper.cpp/pull/3649 中做出了第一个贡献
* @pgoslatara 在 https://github.com/ggml-org/whisper.cpp/pull/3646 中做出了第一个贡献
* @rare-magma 在 https://github.com/ggml-org/whisper.cpp/pull/3644 中做出了第一个贡献
* @cluster2600 在 https://github.com/ggml-org/whisper.cpp/pull/3670 中做出了第一个贡献
* @dearlordylord 在 https://github.com/ggml-org/whisper.cpp/pull/3707 中做出了第一个贡献
* @gaelj 在 https://github.com/ggml-org/whisper.cpp/pull/3679 中做出了第一个贡献
* @Aiudadadadf 在 https://github.com/ggml-org/whisper.cpp/pull/3678 中做出了第一个贡献
* @Lumberj3ck 在 https://github.com/ggml-org/whisper.cpp/pull/3671 中做出了第一个贡献
* @lohopupa 在 https://github.com/ggml-org/whisper.cpp/pull/3711 中做出了第一个贡献

**完整 Changelog**：https://github.com/ggml-org/whisper.cpp/compare/v1.8.3...v1.8.4

---

> 📦 仓库：[ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) · 🏷️ 版本：`v1.8.4` · 📅 发布：2026-03-19 · [查看英文原版 Release](https://github.com/ggml-org/whisper.cpp/releases/tag/v1.8.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
