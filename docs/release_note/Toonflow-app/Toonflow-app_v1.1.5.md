---
title: "Toonflow-app v1.1.5"
project: "Toonflow-app"
repo: "HBAI-Ltd/Toonflow-app"
tag: "v1.1.5"
version: "v1.1.5"
published: "2026-04-14"
type: "patch"
lang: "en"
summary: "Windows：下载 .exe 文件，双击运行安装向导即可。如遇 DLL 缺失，请安装 VC++ 运行库。；macOS：下载 .dmg 文件，打开后将应用拖入「应用程序」。首次打开如遇安全提示，前往「系统设置 → 隐私与安全性」允许运行。；Linux：下载 .AppImage，执行 chmod +x ToonFlow-.AppImage 后运行。"
---

# Toonflow-app v1.1.5

## 📦 下载指南

| 操作系统 | 架构 | 文件 | 说明 |
|---------|------|------|------|
| 🪟 Windows | x64 | `ToonFlow-*-win-x64-setup.exe` | **推荐**，适用于大多数 Windows 电脑 |
| 🪟 Windows | ARM64 | `ToonFlow-*-win-arm64-setup.exe` | 适用于 ARM 架构 Windows 设备 |
| 🍎 macOS | Apple Silicon | `ToonFlow-*-mac-arm64.dmg` | 适用于 M1/M2/M3/M4 芯片的 Mac |
| 🍎 macOS | Intel | `ToonFlow-*-mac-x64.dmg` | 适用于 Intel 芯片的 Mac |
| 🐧 Linux | x64 | `ToonFlow-*-linux-x64.AppImage` | 适用于大多数 Linux 发行版 |
| 🐧 Linux | ARM64 | `ToonFlow-*-linux-arm64.AppImage` | 适用于 ARM 架构的 Linux 设备 |

> 💡 **不确定选哪个？** Windows 用户通常选 **win-x64-setup.exe**；Mac 用户查看「关于本机」：M 系列芯片选 **arm64.dmg**，Intel 选 **x64.dmg**。
## 🚀 安装说明

- **Windows**：下载 `.exe` 文件，双击运行安装向导即可。如遇 DLL 缺失，请安装 [VC++ 运行库](https://aka.ms/vs/17/release/vc_redist.x64.exe)。
- **macOS**：下载 `.dmg` 文件，打开后将应用拖入「应用程序」。首次打开如遇安全提示，前往「系统设置 → 隐私与安全性」允许运行。
- **Linux**：下载 `.AppImage`，执行 `chmod +x ToonFlow-*.AppImage` 后运行。

---


## What's Changed
* 修改: web/docker环境下资源返回路径从原本的固定地址修改为相对路径地址 by @a12110 in https://github.com/HBAI-Ltd/Toonflow-app/pull/103

## New Contributors
* @a12110 made their first contribution in https://github.com/HBAI-Ltd/Toonflow-app/pull/103

**Full Changelog**: https://github.com/HBAI-Ltd/Toonflow-app/compare/v1.1.4...v1.1.5

---

> **Source** [HBAI-Ltd/Toonflow-app](https://github.com/HBAI-Ltd/Toonflow-app) · `v1.1.5` · 2026-04-14 · [upstream release](https://github.com/HBAI-Ltd/Toonflow-app/releases/tag/v1.1.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
