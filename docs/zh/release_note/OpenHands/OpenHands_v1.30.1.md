---
title: "OpenHands v1.30.1"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.30.1"
version: "v1.30.1"
published: "2026-10-22"
type: "patch"
lang: "zh"
---

# OpenHands v1.30.1

## 1.30.1 (2026-10-22)

<!-- 使用 main .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 维护
* refactor(diff): 在https://github.com/OpenHands/OpenHands/pull/18762中通过@enyst在CSS中表达Markdown预览上限
* refactor(automations)：通过https://github.com/OpenHands/OpenHands/pull/18788中的@enyst在CSS中表达活动轨迹高度
* 杂务：将代理服务器由 https://github.com/OpenHands/OpenHands/pull/18774 中的 @all-hands-bot 撞到 1.57.0
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/18806 中 @all-hands-bot 合并的 PR 工件


**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.30.0...v1.30.1

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

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.30.1` · 📅 发布：2026-10-22 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.30.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
