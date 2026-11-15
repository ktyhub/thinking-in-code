---
title: "MoneyPrinterTurbo v1.2.9"
project: "MoneyPrinterTurbo"
repo: "harry0703/MoneyPrinterTurbo"
tag: "v1.2.9"
version: "v1.2.9"
published: "2026-05-30"
type: "patch"
lang: "zh"
---

# MoneyPrinterTurbo v1.2.9

## 发生了什么变化

### 新功能
- 在WebUI中添加高级脚本设置：
  - 脚本段落计数
  - 自定义脚本要求
  - 高级用户可选的完整自定义系统提示
- 添加了小米 MiMo LLM 提供商支持。
- 添加了小米 MiMo TTS 提供商支持。
- 改进了 Docker 环境的 Ollama 默认基本 URL 处理。

### 修复和改进
- 修复了 WebUI 和 API 流的自定义 BGM 路径处理。
- 修复了 Windows WebUI 启动器的鲁棒性。
- 修复了 `webui.sh` 默认绑定/打开 `127.0.0.1`，而不是打开 `0.0.0.0`。
- 修复了下载中的字符串视频连接模式处理。
- 修复了长文本的字幕换行问题。
- 修复了 Edge TTS 符号零速率格式。
- 添加了缺失的土耳其语翻译键。
- 修复了 README-en ImageMagick 代码围栏。

### 测试
- 添加了 LLM 提供商行为、本地 TTS/视频任务路径、视频连接模式处理和高级脚本提示设置的回归覆盖范围。
- 通过真实脚本生成、TTS、Pexels 素材下载、字幕生成和最终视频合成端到端验证高级脚本设置。

---

> 📦 仓库：[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) · 🏷️ 版本：`v1.2.9` · 📅 发布：2026-05-30 · [查看英文原版 Release](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.2.9)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
