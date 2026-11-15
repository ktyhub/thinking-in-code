---
title: "hermes-agent v2026.9.21"
project: "hermes-agent"
repo: "NousResearch/hermes-agent"
tag: "v2026.9.21"
version: "v2026.9.21"
published: "2026-09-21"
type: "patch"
lang: "zh"
---

# hermes-agent v2026.9.21

#爱马仕代理v0.21.4(v2026.9.21)

**发布日期：** 2026 年 9 月 21 日

> 补丁发布。该标签将自 v0.21.3 以来合并的约 1,800 个 PR 汇总为下游消费者的稳定标记版本（Docker 图像、Hermes Cloud、托管部署）。此窗口的完整策划笔记将推迟至 v0.22.0。

## 关于此版本

在提交 `4b8a8134009a8727a289bcabeb0019fedd353128` 时测量，自 v0.21.3 以来的窗口包含 **5,071 个非合并提交**，涉及 **5,169 个更改文件** (+312,961 / −62,855)、**1,812 个合并 PR** 和 **2,116 个已关闭问题**。

同样在窗口中，这里故意未记录：带有集合点记录的主机范围网关单例锁，以及附加到正在运行的主机后端而不是生成第二个后端的桌面；在桌面、TUI 和 CLI 上使用设置卡进行一项后端拥有的连接器操作； `--format stream-json` 结构化 JSONL 输出用于 CLI； `skills.auto_load` 将技能固定到每个新会话的提示中；桌面聊天/UI 字体选择器、one-click 本地引擎更新以及从插件中心卸载插件；网关的 `decline` 未经授权的 DM 行为；可配置的 MCP 发现连接上限 (`mcp.discovery_concurrency`)； `session_search` 边界之后/之前加上 OR 放宽召回重试； `hermes sessions set-journal-mode`;视频目录中的 LTX 2.5 和 Kling O3；每个目录插件和作者的网站页面，包含固定提交自述文件和添加/更新的排序；目录中有十几个新的社区插件（tailscale、ssh、shodan、terminal、rss、resetwatch、done-bell、kiwi、cognee、Octen）；以及大量的配置文件/多路复用隔离、cron、看板、桌面和 state.db 修复。

**此窗口的完整策划 release note 与 v0.22.0 一起发布**，它将记录从 v0.21.0 开始的所有内容 - 亮点、功能区域和完整的贡献者积分。该窗口中的任何内容都不会被跳过。

## 更新中

- `hermes update`（git 安装），或重新运行安装程序一行。
- Docker / Hermes Cloud：从此标签（`nousresearch/hermes-agent:v2026.9.21`）构建图像。

**完整 changelog:** https://github.com/NousResearch/hermes-agent/compare/v2026.9.14...v2026.9.21

---

> 📦 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 🏷️ 版本：`v2026.9.21` · 📅 发布：2026-09-21 · [查看英文原版 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.21)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
