---
title: "OpenHands pr19394-evidence"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "pr19394-evidence"
version: "pr19394-evidence"
published: "2026-11-05"
type: "release"
lang: "zh"
---

# OpenHands pr19394-evidence

OpenHands/OpenHands#19394 的临时证据资产。浏览器 click 自动化设置死胡同和解码的 PostHogautomation_setup_blocked 有效负载。本次发布仅作为证据存储，PR审核后可删除。

<!-- macos-install-note -->
### macOS 安装说明

该应用程序尚未使用 Apple Developer ID 进行签名，因此 macOS 可能会调用
下载的版本 *“已损坏”* — 这是 Gatekeeper 隔离区，而不是坏文件。
将应用程序移动到应用程序后，清除一次标志，然后正常打开：

```sh
xattr -dr com.apple.quarantine "/Applications/OpenHands Agent Canvas.app"
```

签名+公证在 OpenHands/OpenHands#16774 中进行跟踪。

---

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`pr19394-evidence` · 📅 发布：2026-11-05 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/pr19394-evidence)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
