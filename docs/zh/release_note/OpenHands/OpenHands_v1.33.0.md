---
title: "OpenHands v1.33.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.33.0"
version: "v1.33.0"
published: "2026-10-23"
type: "minor"
lang: "zh"
---

# OpenHands v1.33.0

## 1.33.0 (2026-10-23)

<!-- 使用 main .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* 壮举（verify-openhands）：由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18848 中启动 --mars-web 和 --lock-to-cloud
* feat(digitalocean)：在 https://github.com/OpenHands/OpenHands/pull/18705 中 @enyst 重新启动时保持 Web 构建登录
### 错误修复
* 修复（自动化）：在 https://github.com/OpenHands/OpenHands/pull/17122 中 @aartem1 实时运行时渲染已交付的 current_phase
*修复（verify-openhands）：错误运行将https://github.com/OpenHands/OpenHands/pull/18850中@enyst更改的块放回视口
*修复（digitalocean）：默认新代理为https://github.com/OpenHands/OpenHands/pull/18702中@smolpaws的最小VM
* 修复：在 https://github.com/OpenHands/OpenHands/pull/18870 中 @neubig 屏蔽请求和设置表单中的秘密值
### 文档
* 文档（verify-openhands）：地图维护 2026 年 10 月 22 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18811
* 文档（verify-openhands）：地图维护 2026 年 10 月 23 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18865
* 文档：从 https://github.com/OpenHands/OpenHands/pull/18176 中 @jpshackelford 的自述文件中删除 beta 徽章
### 维护
* 重构（文件）：通过https://github.com/OpenHands/OpenHands/pull/18804中的@enyst在CSS中表达树形缩进
* 重构（侧边栏）：通过https://github.com/OpenHands/OpenHands/pull/18805中的@enyst在CSS中表达移动抽屉持续时间
* 样式（自动化）：通过 @FraterCCCLXIII 在 https://github.com/OpenHands/OpenHands/pull/18832 中将模板过滤器芯片重新设计为可拖动的滚动导轨
* 样式（自动化）：通过https://github.com/OpenHands/OpenHands/pull/18833中的@FraterCCCLXIII选项卡本机和MCP服务器之间的设置选择模式
* 杂务（verify-openhands）：对网络响应进行计时，并通过@enyst在https://github.com/OpenHands/OpenHands/pull/18849中完成来排序它们
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/18853 中 @all-hands-bot 合并的 PR 工件


**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.32.0...v1.33.0

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

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.33.0` · 📅 发布：2026-10-23 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
