---
title: "OpenHands v1.31.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.31.0"
version: "v1.31.0"
published: "2026-10-22"
type: "minor"
lang: "zh"
---

# OpenHands v1.31.0

## 1.31.0 (2026-10-22)

<!-- 使用 main 的 .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* feat(automations)：当 GitHub 通过 https://github.com/OpenHands/OpenHands/pull/18829 中的 @hieptl 连接时 (OHE-3699)，隐藏自托管实例上的 GitHub 令牌秘密字段
### 错误修复
*修复（mcp）：通过https://github.com/OpenHands/OpenHands/pull/18780中的@ak684通过MCP服务器自己的OAuth安装仅OAuth的库条目
* 修复：@ak684 在 https://github.com/OpenHands/OpenHands/pull/18776 中编辑时保留自动化存储库
* 修复（mars）：在 https://github.com/OpenHands/OpenHands/pull/18465 中 @lx3133584 在非烘焙绑定上将键入的会话密钥转发到 Web Bridge
* 修复（mars）：通过 @smolpaws 在 https://github.com/OpenHands/OpenHands/pull/18604 中进行身份验证恢复来保留 DigitalOcean 会话
* 修复（mcp）：当 @ak684 在 https://github.com/OpenHands/OpenHands/pull/18816 中放弃 OAuth 安装弹出窗口时，表示登录未完成
### 文档
* 文档：通过 @smolpaws 在 https://github.com/OpenHands/OpenHands/pull/18820 中删除不需要的规格目录
### 维护
* 测试：在 https://github.com/OpenHands/OpenHands/pull/18797 中 @neubig 进行可用性断言之前等待惰性根门
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/18822 中 @all-hands-bot 合并的 PR 工件
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/18828 中 @all-hands-bot 合并的 PR 工件


**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.30.1...v1.31.0

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

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.31.0` · 📅 发布：2026-10-22 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.31.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
