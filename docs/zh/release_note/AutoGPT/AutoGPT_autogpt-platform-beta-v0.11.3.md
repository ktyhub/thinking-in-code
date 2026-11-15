---
title: "AutoGPT autogpt-platform-beta-v0.11.3"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.11.3"
version: "autogpt-platform-beta-v0.11.3"
published: "2026-11-15"
type: "pre"
lang: "zh"
---

# AutoGPT autogpt-platform-beta-v0.11.3

# 🚀 发布 `autogpt-platform-beta-v0.11.3`

**日期：** 2026 年 11 月 15 日

---

## 🔒 安全

此版本修复了一些私人报告的安全问题。一旦修复程序投入生产，我们将发布建议。

---

## 🔥 有什么新内容？

### 新功能

- **#15384** - 添加本机移动服务器基础（由@ntindle）
- **#16683** - Support native and browser Sign in with Apple (by @ntindle)
- **#16677** - 让奥托用视觉卡回答（by @0ubbe）
- **#16768** - Close and erase an account without the confirmation email (erase-account --no-email) (by @kcze)
- **#16767** - 一次性删除已删除帐户的存储桶文件夹（由@kcze）
- **#16688** - 重置专家的到达方式（由@Bentlybro）
- **#16792** - 添加 Gemini 4 Hydrogen 支持（由 @ntindle 提供）
- **#16741** - Add Gemini 4 Carbon support (by @ntindle)
- **#16791** - 在侧边栏中显示每个专家的聊天记录，并包含实际计数和每个专家的分页（由@ntindle）
- **#13050** - 添加远程本地 PC 执行目标（由 @ntindle 提供）
- **#16793** - Open account deletion to every user (SECRT-3488) (by @kcze)

### 增强功能

- **#16711** - 在思考时以思考者的颜色显示石头专家（by @0ubbe）
- **#16387** - 将 Otto 的团队卡统计数据标记为团队总数（由 @Pwuts 提供）
- **#16727** - Stream workspace downloads, profile continuously, make cache metrics admin-only (by @Pwuts)

### 错误修复

- **#14226** - 跨帐户切换隔离计费状态（由@ntindle）
- **#15440** - Self-host auth DB connection budget, visible token failures, build memory (by @ntindle)
- **#16720** - 市场创建者页面和工作流程大纲遵循市场列出的内容（由 @Pwuts 提供）
- **#16709** - Let a NO_TIER account with a card-less trial buy a plan (by @0ubbe)
- **#16708** - Name connected accounts by email when they have no title (by @0ubbe)
- **#15842** - 将嵌入保留在内存调用的 FalkorDB 读取之外（由 @ntindle 提供）
- **#16537** - 停止提供库代理已被删除的专家工作流程（由@Pwuts）
- **#16536** - run_agent says a subscription is required instead of "Failed to process request" (by @Pwuts)
- **#16724** - 在重用或恢复时保留库条目的设置（由@Pwuts）
- **#16722** - Validate the generic webhook's stored secret token as text (by @Pwuts)
- **#16436** - 判断 find_library_agent 像其他读取一样返回的图形内容（由@Pwuts）
- **#15843** - Walk each of memory recall's BFS origins once (by @ntindle)
- **#16719** - 在“阅读不和谐消息”中最多读取 1 MiB 的文本附件（作者：@Pwuts）
- **#16469** - Charge ClaudeCodeBlock for the platform's E2B sandbox by walltime (by @Pwuts)
- **#16760** - 验证预设触发器上的 Webhook 机密并检查签名时间戳（由 @ntindle 提供）
- **#16761** - Bill usage-priced blocks run from AutoPilot like workflow runs (by @ntindle)
- **#16775** - Refuse edits whose result would pass the file size limit (by @ntindle)
- **#16769** - 帐户删除会删除 2026 年 4 月之前的 AutoPilot 记录（作者：@kcze）
- **#16763** - Delete the PostHog person after the account's rows, and let a rerun repeat it (by @kcze)
- **#16766** - Free a crashed account erasure's lease within minutes, log CLI runs and page on stalled erasures (by @kcze)
- **#16764** - 禁令记录与地址的每个拼写相匹配，并且 Keep 拒绝被禁止的帐户（作者：@kcze）
- **#16765** - 在帐户关闭后几秒钟内捕获密钥和结账（由@kcze）
- **#16539** - 说出网站何时拒绝浏览器或 web_fetch，并命名后备（由 @Pwuts 提供）
- **#16611** - 没有通知消费者在关闭时被缩短或在启动时被孤立（由@Pwuts）
- **#16531** - 跑步结束或聊天结束后重新读取钱包余额（由@Pwuts）
- **#16723** - 将团队变更会议规则应用于专家证书授予（由@Pwuts）
- **#14905** - 为每个 bash_exec 沙箱提供自己的 PID 和 IPC 命名空间（由 @ntindle 提供）
- **#15059** - Scrypt 之前的速率限制 v1 API 密钥验证（由 @ntindle）
- **#16445** - 仅使用提供商验证的电子邮件通过 OAuth 注册（由 @Pwuts 提供）
- **#16800** - 停止跳过以一秒宽限存储的代理计划运行（由@Pwuts）

### 文档

- **#16787** - 在 Entra 应用程序和 Vercel 中都设置了 Microsoft 登录（由 @ntindle）
- **#16716** - 删除多专家团队计划和存储库缺少的文件引用（由 @Pwuts 提供）
- **#16794** - 列出帐户删除在 Stripe 中留下的内容、成本记录和移交代理（由 @kcze 提供）
- **#16757** - Changelog v0.11.1 至 v0.11.2（由 @itsababseh）

### 依赖关系和维护

- **#16600** - 将 pnpm/action-setup 从 4.3.0 提升到 6.1.0 (by @dependabot[bot])
- **#16751** - 在 /autogpt_platform/frontend 中将 @ai-sdk/react 从 4.0.158 映射到 4.0.166 （由 @dependabot[bot] 提供）
- **#16608** - 将 /.github/actions/generate-prisma-client 中的操作/缓存从 5.1.0 碰撞到 6.1.0 (by @dependabot[bot])
- **#16749** - 将开发依赖项组中 /autogpt_platform/autogpt_libs 中的 Ruff 从 0.17.3 更改为 0.17.4（由 @dependabot[bot] 提供）
- **#16750** - 将 /autogpt_platform/autogpt_libs 中的 pytest-asyncio 从 1.4.1 提升到 1.4.1.post1 (by @dependabot[bot])
- **#16754** - 通过 8 个更新在 1 个目录中生成生产依赖项组（由 @dependabot[bot] 提供）
- **#16795** - 将安全更新组中 /autogpt_platform/autogpt_libs 中的 opentelemetry-api 从 1.45.1 更改为 1.45.2（由 @dependabot[bot] 提供）
- **#15889** - 通过 2 个更新将生产依赖项组跨到 1 个目录（由 @dependabot[bot] 提供）
- **#16574** - 仅针对平台版本部署生产（由@ntindle）

### 开发经验

- **#14338** - 添加 /process-vulnerability-report 技能（由 @Pwuts 提供）

---

## 🎉 感谢我们的贡献者！

向所有为此版本做出贡献的人致以深深的谢意：

- @itsababseh
- @Bentlybro
- @ntindle
- @Pwuts
- @0ubbe
- @kcze
- @dependabot[机器人]

---

## 📥 如何获取此更新

要更新到此版本，请运行：

```bash
git pull origin autogpt-platform-beta-v0.11.3
```

或者直接从官网下载  
[发布页面](https://github.com/Significant-Gravitas/AutoGPT/releases)。

有关更改的完整列表，请参阅[完整 Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.11.2...autogpt-platform-beta-v0.11.3)。

---

## 📝 **反馈和问题**
如果您遇到任何问题或有建议，请[加入我们的 Discord](https://discord.gg/autogpt) 告诉我们！

---

> 📦 仓库：[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · 🏷️ 版本：`autogpt-platform-beta-v0.11.3` · 📅 发布：2026-11-15 · [查看英文原版 Release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.11.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
