---
title: "OpenHands v1.37.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.37.0"
version: "v1.37.0"
published: "2026-11-06"
type: "minor"
lang: "zh"
---

# OpenHands v1.37.0

## 1.37.0 (2026-11-06)

<!-- 使用 main 的 .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* 壮举（自动化）：用 @VascoSch92 在 https://github.com/OpenHands/OpenHands/pull/19318 中的美人鱼图解释每个自动化
### 错误修复
* 修复（聊天）：将恢复的会话放置在 https://github.com/OpenHands/OpenHands/pull/19400 中 @ak684 的 UTC 对话历史记录之后
* 修复：在 https://github.com/OpenHands/OpenHands/pull/19404 中 @ak684 启动切换期间保持生成的对话标题可见
* 修复：在 https://github.com/OpenHands/OpenHands/pull/19377 中显示@enyst 的空聊天建议之前等待会话重播
* 修复：在 https://github.com/OpenHands/OpenHands/pull/19406 中通过 @ak684 在基本路径加载主页，不带尾部斜杠
### 性能
* perf(chat)：避免在https://github.com/OpenHands/OpenHands/pull/19266中@enyst实时更新期间重复历史记录扫描
### 维护
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19401 中 @all-hands-bot 合并的 PR 工件
* 重构：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/19263 中命名现有的控制角半径
* Chore(lint)：拒绝 https://github.com/OpenHands/OpenHands/pull/19264 中 @enyst 的四个迁移所有者中的任意值
* 杂务（deps）：由 @dependabot[bot] 在 https://github.com/OpenHands/OpenHands/pull/19413 中将 lucide-react 从 1.25.0 提升到 1.64.0
* 杂务（deps）：由 https://github.com/OpenHands/OpenHands/pull/19411 中的 @dependabot[bot] 将 driver.js 从 1.3.6 提升到 1.10.2
* 杂务（deps-dev）：在 https://github.com/OpenHands/OpenHands/pull/19410 中 @dependabot[bot] 的类型组中将 @types/node 从 26.6.3 碰撞到 26.6.6
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19417 中 @all-hands-bot 合并的 PR 工件


**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.36.0...v1.37.0

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

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.37.0` · 📅 发布：2026-11-06 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.37.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
