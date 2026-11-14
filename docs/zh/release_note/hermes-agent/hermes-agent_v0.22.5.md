---
title: "hermes-agent v0.22.5"
project: "hermes-agent"
repo: "NousResearch/hermes-agent"
tag: "v0.22.5"
version: "v0.22.5"
published: "2026-10-23"
type: "patch"
lang: "zh"
---

# hermes-agent v0.22.5

#爱马仕特工v0.22.5

**发布日期：** 2026 年 10 月 22 日

> 补丁发布。此标签汇总了自 v0.22.4 以来合并到 GitHub 版本（CLI 和安装程序）、Microsoft Store 应用程序、Docker 和 Hermes Cloud 的稳定版本中的约 81 个 PR。 v0.23.0 的这艘窗户船的完整策划笔记。

<!-- HERMES_BUILDS_TABLE -->

## 关于此版本

在提交 `bf0203a794a` 时测量，自 v0.22.4 以来的窗口包含 **231 个非合并提交**，跨越 **804 个更改的文件** (+35,212 / −17,885)、**81 个合并的 PR** 和 **30 个已关闭的问题**。

同样在窗口中，故意未记录在此处：Nous 登录重新设计（每次登录都是普通设备登录，免费层访客移交给您的帐户，结果显示谁登录，连接器提供登录而不是打开访客），`hermes update` 保留其拒绝的稳定版本而不是提供它，Windows `hermes update` 在 Python 重新安装后不再卡在旧启动器上，使用窗口计划支持（计划基于窗口的计划的仪表、限制卡和模型切换恢复）、可插入委托后端（通过模型图或配置文件路由子代理，每个会话可切换）、可以要求您选择一个选项的插件斜线命令、`hermes import-agent`、OpenClaw 迁移、`hermes mcp serve` 和从核心移出到插件的奇点后端（安装程序在找到另一个代理时提供导入程序）、侧边栏中的桌面拖动固定以及one-click 插件安装有等级徽章、Electron 44 升级、Pillow 13 和一批依赖项安全性提升、聊天工作文件夹消失时的清晰消息、`hermes update` 在损坏的 `.git` 后恢复暂停的网关、长 Claude DirectSDK 答案不再被停顿计时器切断、桌面群聊显示哪个机器人再次工作以及实验性的webhook 模式 MCP 事件 client。

**此窗口的完整策划的 release note 与 v0.23.0 一起发布**，它将记录从 v0.22.0 开始的所有内容 - 亮点、功能区域和完整的贡献者积分。该窗口中的任何内容都不会被跳过。

## 更新中

- Microsoft Store 应用程序：通过商店更新。
- 从安装程序安装的桌面应用程序（.exe / .dmg）：此版本中没有变化；它会随着下一个捆绑版本的更新而更新。
- CLI：`hermes update`，或重新运行安装程序一行。
- Docker / 爱马仕云：`nousresearch/hermes-agent:stable`（或`:latest`）。

**完整 Changelog**：[v0.22.4...v0.22.5](https://github.com/NousResearch/hermes-agent/compare/v0.22.4...v0.22.5)

---

> 📦 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 🏷️ 版本：`v0.22.5` · 📅 发布：2026-10-23 · [查看英文原版 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
