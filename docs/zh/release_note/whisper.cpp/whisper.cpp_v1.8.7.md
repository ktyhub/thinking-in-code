---
title: "whisper.cpp v1.8.7"
project: "whisper.cpp"
repo: "ggml-org/whisper.cpp"
tag: "v1.8.7"
version: "v1.8.7"
published: "2026-06-16"
type: "patch"
lang: "zh"
---

# whisper.cpp v1.8.7

## 发生了什么变化
* 不要假设 /usr/lib 库安装。通过 @waptaff 在 https://github.com/ggml-org/whisper.cpp/pull/3693
* 服务器：将 @lyonsno 的详细 JSON 分割的 UTF-8 令牌文本合并到 https://github.com/ggml-org/whisper.cpp/pull/3850 中
* 耳语 : 在 https://github.com/ggml-org/whisper.cpp/pull/3831 中 @danscMax 捕获 耳语_init_with_params_no_state 中的 C++ 异常
* ci ：@ggerganov 在 https://github.com/ggml-org/whisper.cpp/pull/3847 中重构+优化
* ci ：仅每天由 @danbev 在 https://github.com/ggml-org/whisper.cpp/pull/3854 中发布/推送 docker 图像
* ci : 对 windows-cublas 使用 ccache 而不是 sccache [无 ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3855
* ci : 固定 github 操作以通过 @danbev 在 https://github.com/ggml-org/whisper.cpp/pull/3856 中提交 SHA
* ci ：在 https://github.com/ggml-org/whisper.cpp/pull/3857 中使用 @danbev 的 emscripten-core 和 pin 版本
* ci：https://github.com/ggml-org/whisper.cpp/pull/3858 中 @danbev 的 build-windows 瘦身动作
* Ci 通过 @danbev 在 https://github.com/ggml-org/whisper.cpp/pull/3860 中构建量化 vad wasm ccache
* ci : 将 HF_TOKEN 添加到 docker.yml 工作流程 [无 ci] by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3861
* ci : 通过 @danbev 在 https://github.com/ggml-org/whisper.cpp/pull/3859 中将 ccache 添加到 build-sycl [无 ci]
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3867
* coreml ：修复了 https://github.com/ggml-org/whisper.cpp/pull/3868 中 @krystopphny 的 mlprogram 格式的 --quantize 崩溃和 --optimize-ane 标签
* ci : 固定 github 操作以在 https://github.com/ggml-org/whisper.cpp/pull/3865 中提交 @danbev 的 sha
* 同步：ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3880
* cli : 在 https://github.com/ggml-org/whisper.cpp/pull/3878 中添加 @rumitvn 的 `--version` 标志
* 发布：v1.8.7 by @danbev in https://github.com/ggml-org/whisper.cpp/pull/3881

## 新贡献者
* @waptaff 在 https://github.com/ggml-org/whisper.cpp/pull/3693 中做出了第一个贡献
* @lyonsno 在 https://github.com/ggml-org/whisper.cpp/pull/3850 中做出了第一个贡献
* @danscMax 在 https://github.com/ggml-org/whisper.cpp/pull/3831 中做出了第一个贡献
* @krystopphny 在 https://github.com/ggml-org/whisper.cpp/pull/3868 中做出了第一个贡献
* @rumitvn 在 https://github.com/ggml-org/whisper.cpp/pull/3878 中做出了第一个贡献

**完整 Changelog**：https://github.com/ggml-org/whisper.cpp/compare/v1.8.6...v1.8.7

---

> 📦 仓库：[ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) · 🏷️ 版本：`v1.8.7` · 📅 发布：2026-06-16 · [查看英文原版 Release](https://github.com/ggml-org/whisper.cpp/releases/tag/v1.8.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
