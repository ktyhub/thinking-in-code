---
title: "Agent-Reach v1.5.0"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.5.0"
version: "v1.5.0"
published: "2026-06-11"
type: "minor"
lang: "en"
summary: "Agent Reach 从「工具集合」升级为「能力层」:每个平台 = 首选 + 备选的有序后端列表,当下最稳的接入方式替你实测选好、装好、体检好——接入方式换代,你无感。本版全部选型基于 2026-06 真机实测(32 项端到端测试)。"
---

# Agent-Reach v1.5.0

## 这一版是什么

**Agent Reach 从「工具集合」升级为「能力层」**:每个平台 = 首选 + 备选的有序后端列表,当下最稳的接入方式替你实测选好、装好、体检好——接入方式换代,你无感。本版全部选型基于 2026-06 真机实测(32 项端到端测试)。

## 平台路由变化

| 平台 | 现在的路 |
|------|---------|
| 小红书 | **OpenCLI**(桌面,复用浏览器登录态零配置)▸ xiaohongshu-mcp(服务器,扫码)▸ xhs-cli(存量备选,上游已停更) |
| Reddit | **OpenCLI** ▸ rdt-cli。诚实口径:Reddit 没有零配置路径(匿名接口已被全面封锁、官方 API 审批制),必须登录态 |
| B站 | **bili-cli**(搜索/热门/详情,无需登录)▸ OpenCLI(字幕)▸ 搜索 API 兜底。**yt-dlp 退出 B站**(被 412 风控全面拦截,实测最新版+代理+Cookie 均无效);yt-dlp 继续服务 YouTube |
| Twitter | twitter-cli 守门(实测稳定)▸ OpenCLI 备选,探测加重试 |

## doctor 成了真体检

- 真跑命令探测,而不是只看文件存在——能识别「装了但坏了」(典型:系统 Python 升级后 venv 断链),并给出可直接复制的重装处方
- 报告每个多后端平台**当前在用哪条路**(`doctor --json` 的 `active_backend`)
- 一个渠道崩了不再拖垮整个体检

## 收纳 OpenCLI(桌面后端)

`agent-reach install --channels opencli`:npm 自动装,Chrome 扩展商店点一次(Chrome 安全模型,无法代点)。复用你浏览器的登录态——刷过小红书、登过 Reddit 就直接能用。需要桌面 + Chrome,服务器自动跳过。

## 安装与更新体验

- 安装一句话:`帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md`
- 更新一句话:`帮我更新 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/update.md`(本体+上游工具+skill 一次跟上)
- skill 重写:「全网调研」「帮我调研」可靠触发;agent 干完大活会顺手查版本,有新版在收尾时提示一句(不打断、不重复唠叨)
- `check-update` 修复:本地版本领先于最新 release 时不再误提示"更新"(避免降级)

## 质量

- 测试 107 → 162(契约/断链场景/后端优先级矩阵/版本比较全覆盖)
- 经三轮对抗性 review(12 项发现全部修复):修掉了 Twitter 路由屏蔽、watch 降级提示、死代理开关等会真实伤到用户的问题
- 13 渠道 32 项真机端到端实测全通过

## 致谢

新收纳的上游:[OpenCLI](https://github.com/jackwener/opencli)(@jackwener)、[xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp)(@xpzouying)。

🤖 Generated with [Claude Code](https://claude.com/claude-code)

---

> **Source** [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · `v1.5.0` · 2026-06-11 · [upstream release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
