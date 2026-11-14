---
title: "hermes-agent v0.21.7"
project: "hermes-agent"
repo: "NousResearch/hermes-agent"
tag: "v0.21.7"
version: "v0.21.7"
published: "2026-10-12"
type: "patch"
lang: "zh"
---

# hermes-agent v0.21.7

#爱马仕代理v0.21.7

**发布日期：** 2026 年 10 月 11 日

> 补丁发布。此标签汇总了自 v0.21.6 以来合并到桌面应用程序（macOS Apple Silicon、Windows）、Microsoft Store 和 MSIX、安装程序、Docker 和 Hermes Cloud 的稳定版本中的约 204 个 PR。 v0.22.0 的这艘窗户船的完整策划笔记。

<!-- HERMES_BUILDS_TABLE -->

**此补丁为源安装提供了什么（`hermes update` 和 git checkout 上的桌面应用程序更新程序）：**

- **现在更新遵循标记的版本。** 官方存储库的源安装更新到最新发布的 `vX.Y.Z` 版本，而不是 `main` 上的每个提交。已经比最新版本更新的安装将保留在原处并等待下一个版本；没有任何内容被移回。继续关注每一次提交：`hermes update --set-channel main`。前叉和后视镜继续跟随`main`。商店、MSIX 和捆绑桌面安装保持不变。
- **在桌面应用程序中选择频道。** 设置 ▸ 关于 ▸ 更新有一个用于源安装的*更新频道*开关（稳定版本/每次提交），更新对话框现在显示您所在的频道。
- **推理在恢复后继续存在。** `hermes chat --resume` 后和下一个网关回合时签名的思维重播，并且 Bedrock Converse 推理模型在恢复会话中不再被拒绝。
- **更新不再在某些防火墙后面失败。** `main` 上的安装不再获取区域防火墙可以用 403 应答的发布记录。稳定检查在设置一个 GitHub 令牌（`GITHUB_TOKEN` 或 `gh auth login`）时使用您的 GitHub 令牌，并报告 GitHub 速率限制作为速率限制。

## 关于此版本

在提交 `1fd18277267152893a8a24792b79213e7ca3f899` 时测量，自 v0.21.6 以来的窗口包含 **740 个非合并提交**，涉及 **4,156 个更改文件** (+86,775 / −26,980)、**204 个合并 PR** 和 **69 个已关闭问题**。

同样在窗口中，故意未记录在此处：运行内置桌面应用程序操作的插件（`ctx.runAction`）和插件 SDK 宠物气泡（`ctx.pet.say`）；核心制作的 Codex 请求，因此插件永远不会持有令牌；在会话中安装的技能无需立即重建即可达到模型； Krea 2 Medium Turbo 作为新付费订阅者的默认图像通道，当受管理的 Krea 拒绝请求时，会进行 FAL 回退；更快的桌面更新（React 编译器通过内容缓存，仅在安装标记更改时重用已编译的渲染器，未更改的本机输入保留在原处）；仅检查 pin 的固定安装；发送至 Relay 的压实痕迹；以及新的社区插件，包括 memory-shield、command-ledger、Memoria、Model Router、wyoming-voice-bridge、codex-account-switch 和 redline。

**此窗口的完整策划 release note 与 v0.22.0 一起发布**，它将记录从 v0.21.0 开始的所有内容 - 亮点、功能区域和完整的贡献者积分。该窗口中的任何内容都不会被跳过。

## 更新中

- 桌面应用程序：自行更新。 Microsoft Store 通过应用商店安装更新。
- CLI：`hermes update`，或重新运行安装程序一行。
- Docker / 爱马仕云：`nousresearch/hermes-agent:stable`（或`:latest`）。

**完整 Changelog**：[v0.21.6...v0.21.7](https://github.com/NousResearch/hermes-agent/compare/v0.21.6...v0.21.7)

---

> 📦 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 🏷️ 版本：`v0.21.7` · 📅 发布：2026-10-12 · [查看英文原版 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
