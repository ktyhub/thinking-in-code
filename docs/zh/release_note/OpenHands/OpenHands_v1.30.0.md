---
title: "OpenHands v1.30.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.30.0"
version: "v1.30.0"
published: "2026-10-22"
type: "minor"
lang: "zh"
---

# OpenHands v1.30.0

## 1.30.0 (2026-10-22)

<!-- 使用 main .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* feat(automations)：通过 https://github.com/OpenHands/OpenHands/pull/18566 中的 @hieptl 在设置选择模式 (OHE-3612) 中反映内置集成的连接状态
### 错误修复
*修复（聊天）：让云会员在https://github.com/OpenHands/OpenHands/pull/18729中通过@hieptl在主页上选择LLM配置文件（OHE-3669）
* 修复（侧边栏）：当 https://github.com/OpenHands/OpenHands/pull/18741 中的@hieptl 云启动任务准备就绪时刷新对话列表（OSS-14604）
* 修复（侧边栏）：隐藏 https://github.com/OpenHands/OpenHands/pull/18739 中 @hieptl 锁定到云主机 (OHE-3683) 的画布上的入门清单
* 修复（画布）：通过 https://github.com/OpenHands/OpenHands/pull/18722 中的 @VascoSch92 通过服务器端对话标签保留工作区分组
*修复（代理配置文件）：将`default`规则保留在本地，并将@simonrosenberg在https://github.com/OpenHands/OpenHands/pull/18747中的家庭LLM选择保存在云上
* 修复（前端）：通过 https://github.com/OpenHands/OpenHands/pull/18753 中的 @ak684 将 Azure DevOps 存储库链接到其 _git 页面
* 修复：OHE-3677 通过 @tofarr 在 https://github.com/OpenHands/OpenHands/pull/18726 中将默认原色设为白色 (OHE-3677)
*修复（mars）：恢复https://github.com/OpenHands/OpenHands/pull/18783中@enyst对网桥的明确选择
### 文档
* 文档（verify-openhands）：2026年10月20日@enyst在https://github.com/OpenHands/OpenHands/pull/18718进行地图维护
### 维护
* ci：在 https://github.com/OpenHands/OpenHands/pull/18760 中通过 @VascoSch92 修复 Debian 快照默认值中的 shell 引用
* 重构（布局）：通过https://github.com/OpenHands/OpenHands/pull/18763中的@enyst在CSS中表达概述宽度
* 杂务：将 @openhands/extensions 通过 @neubig 在 https://github.com/OpenHands/OpenHands/pull/18786 中撞到 0.33.0
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/18742 中 @all-hands-bot 合并的 PR 工件


**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.29.0...v1.30.0

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

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.30.0` · 📅 发布：2026-10-22 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.30.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
