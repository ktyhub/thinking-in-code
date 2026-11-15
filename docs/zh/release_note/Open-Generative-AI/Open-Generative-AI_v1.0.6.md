---
title: "Open-Generative-AI v1.0.6"
project: "Open-Generative-AI"
repo: "Anil-matcha/Open-Generative-AI"
tag: "v1.0.6"
version: "v1.0.6"
published: "2026-04-25"
type: "patch"
lang: "zh"
---

# Open-Generative-AI v1.0.6

## 修复

- **Linux/Windows 上的本地推理引擎可再次下载** (#108) — leejet 最新的 stable-diffusion.cpp 版本暂时仅提供 Mac arm64 + Windows CUDA 运行时存根 + Linux ROCm，因此该狭窄集合之外的任何人都可以点击 `Error invoking remote method 'local-ai:download-binary': No binary found for this platform`。下载器现在会遍历最后 15 个 leejet 版本，直到找到一个实际上具有当前操作系统/架构的版本，并且 Linux 匹配器更喜欢普通的 x86_64 → vulkan → rocm。 macOS Intel 用户会得到更清晰的错误，因为 leejet 从未发布过 x86_64 macOS 二进制文件。
- 加上 v1.0.5 的 #110（子模块安全设置）和 #111（突出的设置按钮）。

## 下载

- **macOS Apple Silicon (M1/M2/M3/M4)：** `Open Generative AI-1.0.6-arm64.dmg`
- **macOS Intel (x64):** `Open Generative AI-1.0.6.dmg`
- **Linux x86_64 — AppImage:** `Open Generative AI-1.0.6.AppImage` （chmod +x 然后运行）
- **Linux x86_64 — Debian/Ubuntu:** `open-generative-ai_1.0.6_amd64.deb` (`sudo apt install ./open-generative-ai_1.0.6_amd64.deb`)

> 首先在 macOS 上启动：`xattr -cr "/Applications/Open Generative AI.app"`，然后右键 click → 打开。
> Ubuntu 24.04+ 上的 AppImage：如果无提示地失败，则安装 `sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0` 或安装 .deb（它附带 AppArmor 配置文件）。

---

> 📦 仓库：[Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) · 🏷️ 版本：`v1.0.6` · 📅 发布：2026-04-25 · [查看英文原版 Release](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
