---
title: "OpenHands v1.32.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.32.0"
version: "v1.32.0"
published: "2026-10-23"
type: "minor"
lang: "zh"
---

# OpenHands v1.32.0

## 1.32.0 (2026-10-23)

<!-- 使用 main .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* feat(home)：在https://github.com/OpenHands/OpenHands/pull/18190中@abhayymishraa将固定自动化存储在代理服务器设置中
* feat(mcp)：让安装对话框在https://github.com/OpenHands/OpenHands/pull/18836中@ak684的可安装库选项之间进行选择
* feat(automations)：通过https://github.com/OpenHands/OpenHands/pull/18821中的@ak684在自动化选择器中列出每个可克隆提供者的存储库
* feat(canvas): @neubig 在 https://github.com/OpenHands/OpenHands/pull/18830 中默认安静的后端日志
### 维护
* 杂务：在 https://github.com/OpenHands/OpenHands/pull/18842 中通过 @ak684 将 @openhands/extensions 撞到 0.34.0
* 杂务（deps）：在 https://github.com/OpenHands/OpenHands/pull/18800 中执行 @smolpaws 的 7 天第三方发布期限政策
* 琐事：将代理服务器提升到 1.58.1，将自动化提升到 1.25.1，并通过 @all-hands-bot 在 https://github.com/OpenHands/OpenHands/pull/18851 中将 @openhands/extensions 提升到 0.35.0
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/18845 中 @all-hands-bot 合并的 PR 工件


**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.31.0...v1.32.0

---
此 PR 是通过[请发布](https://github.com/googleapis/release-please) 生成的。请参阅[文档](https://github.com/googleapis/release-please#release-please)。
<!-- AGENT_CANVAS_DOCKER_START -->

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

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.32.0` · 📅 发布：2026-10-23 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.32.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
