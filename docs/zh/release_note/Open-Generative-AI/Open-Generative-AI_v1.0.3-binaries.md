---
title: "Open-Generative-AI v1.0.3-binaries"
project: "Open-Generative-AI"
repo: "Anil-matcha/Open-Generative-AI"
tag: "v1.0.3-binaries"
version: "v1.0.3-binaries"
published: "2026-04-22"
type: "patch"
lang: "zh"
---

# Open-Generative-AI v1.0.3-binaries

## sd-cli Metal GPU 二进制文件（macOS Apple Silicon）

此版本提供了预构建的 **Metal GPU 加速** 推理二进制文件，用于在 macOS Apple Silicon (M1/M2/M3/M4) 上生成本地图像。

### 包含什么

|文件 |内容 |
|---|---|
| `sd-cli-metal-macos-arm64.zip` | `sd-cli` + `libstable-diffusion.dylib` — 支持金属，arm64 |

### 构建细节
- 从 [stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp) 源构建
- CMake 标志：`-DGGML_METAL=ON -DSD_METAL=ON -DCMAKE_BUILD_TYPE=Release`
- 与 `-force_load libggml-metal.a` 链接以拉入自注册金属后端符号
- 已验证：205 `ggml_metal` 符号，存在“使用金属后端”字符串
- 本地图像生成速度明显快于 Apple Silicon 上仅使用 CPU 的速度

### 用法
这些二进制文件由 Open Generative AI 桌面应用程序通过“设置”→“本地模型”自动下载。

---

> 📦 仓库：[Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) · 🏷️ 版本：`v1.0.3-binaries` · 📅 发布：2026-04-22 · [查看英文原版 Release](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.3-binaries)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
