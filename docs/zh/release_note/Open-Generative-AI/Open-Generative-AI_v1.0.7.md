---
title: "Open-Generative-AI v1.0.7"
project: "Open-Generative-AI"
repo: "Anil-matcha/Open-Generative-AI"
tag: "v1.0.7"
version: "v1.0.7"
published: "2026-04-25"
type: "patch"
lang: "zh"
---

# Open-Generative-AI v1.0.7

## 添加

- **Wan2GP HTTP 提供程序** — 除了捆绑的 sd.cpp 之外的第二个本地引擎。在任何 CUDA/ROCm 盒子（您的游戏 PC、工作站或租用的 RunPod/vast.ai 实例）上运行 [Wan2GP](https://github.com/deepbeepmeep/Wan2GP)，通过 **设置 → 本地模型** 将桌面应用程序指向其 URL，Flux、Qwen-Image、Wan 2.2 (T2V/I2V)、Hunyuan 和 LTX 即可使用。 Image Studio 中显示支持图像的模型；视频模型位于目录中等待会声会影接线。
- 两个引擎共存 - sd.cpp 继续像以前一样为 SD 1.5、SDXL 和 Z-Image 工作。渲染器基于 `provider` 字段为每个模型路由。

## 已修复

- **Dreamshaper 8 下载 URL** — 目录指向 `huggingface.co/Lykon/dreamshaper-8`，现在返回 404。已切换到实时存储库 `huggingface.co/Lykon/DreamShaper`。

## 文档

- 针对双引擎模型重写了自述文件，其中包含比较表和 Wan2GP 设置说明。
- 新 **“验证 SD 1.5 路径”** 小节 — 复制粘贴 `curl` + `sd-cli` 配方，绕过 UI 并端到端验证本地引擎。用于确认 Metal 在 Apple Silicon 上处于活动状态。
- 硬件注释表明 **Z-Image 已知会挂在小 RAM Mac 上** — 在这些机器上坚持使用 SD 1.5 (Dreamshaper 8 / Realistic Vision / Anything v5)。

## 下载

- **macOS Apple Silicon (M1/M2/M3/M4)：** `Open Generative AI-1.0.7-arm64.dmg`
- **macOS Intel (x64):** `Open Generative AI-1.0.7.dmg`
- **Windows / Linux：** v1.0.7 仅适用于 Mac。使用适用于 Windows `.exe` 和 Linux `.AppImage` / `.deb` 的 [v1.0.6 版本](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.6) — 两者仍然适用于 sd.cpp 本地推理。 Wan2GP 提供商只需要桌面应用程序，因此 v1.0.6 client 也可以指向 Wan2GP 服务器（只是在重建之前不会有新的模型下拉条目）。

> 首先在 macOS 上启动：`xattr -cr "/Applications/Open Generative AI.app"`，然后右键 click → 打开。

---

> 📦 仓库：[Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) · 🏷️ 版本：`v1.0.7` · 📅 发布：2026-04-25 · [查看英文原版 Release](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
