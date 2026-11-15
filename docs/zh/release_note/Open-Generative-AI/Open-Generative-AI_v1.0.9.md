---
title: "Open-Generative-AI v1.0.9"
project: "Open-Generative-AI"
repo: "Anil-matcha/Open-Generative-AI"
tag: "v1.0.9"
version: "v1.0.9"
published: "2026-04-27"
type: "patch"
lang: "zh"
---

# Open-Generative-AI v1.0.9

## 新消息

关闭 #126 — 即使安装了 WanGP，本地 Wan2GP 用户也无法在本地上传参考媒体或生成视频，从而导致“未授权：凭据丢失或无效”，因为每个会声会影上传都硬连线到 Muapi 托管端点。

### 修复
- **Wan2GP 上传桥** (`wan2gp:upload-file` IPC) — 将文件推送到配置的 Wan2GP 服务器的 `/upload` 端点，并在生成时将它们重新水化为 Gradio `FileData` 描述符。
- **本地会声会影** — Wan 2.2 t2v / Wan 2.2 i2v / Hunyuan / LTX 模型现在在桌面应用程序中运行时显示在会声会影模型选择器中。
- **本地模型绕过验证门** — 使用 Wan2GP 模型生成不再需要 Muapi API 密钥。
- **生成路由** — Video Studio 的 t2v 和 i2v 路径为 Wan2GP 模型调用 `localAI.generate(...)`，并在“生成”按钮中显示步骤进度。

### 本地视频设置
1. 在具有 CUDA 或 ROCm GPU 的计算机上运行 Wan2GP 服务器 (`https://github.com/deepbeepmeep/Wan2GP`)。
2. 在设置 → 本地模型中，设置服务器 URL（例如 `http://localhost:7860`）。
3. 从 Video Studio 型号下拉列表中选择一个 Wan2GP 条目。

如果您的 Wan2GP 版本公开的 Gradio 函数名称与目录默认值不同（`wan22_t2v`、`wan22_i2v`、`hunyuan_video`、`ltx_video`），请检查 `<server>/?view=api` 并相应地编辑 `electron/lib/wan2gpProvider.js`。

## 下载
|平台|文件 |
|---|---|
| macOS 苹果芯片 | `Open Generative AI-1.0.9-arm64.dmg` |
| macOS 英特尔 | `Open Generative AI-1.0.9.dmg` |
| Windows (x64) | `Open Generative AI Setup 1.0.9.exe` |
| Linux 应用程序图像 | `Open Generative AI-1.0.9.AppImage` |
| Linux Debian/Ubuntu | `open-generative-ai_1.0.9_amd64.deb` |

🤖 使用 [Claude 代码](https://claude.com/claude-code) 生成

---

> 📦 仓库：[Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) · 🏷️ 版本：`v1.0.9` · 📅 发布：2026-04-27 · [查看英文原版 Release](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.9)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
