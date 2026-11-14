---
title: "AutoGPT autogpt-platform-beta-v0.8.1"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.8.1"
version: "autogpt-platform-beta-v0.8.1"
published: "2026-09-24"
type: "pre"
lang: "zh"
---

# AutoGPT autogpt-platform-beta-v0.8.1

# 🚀 发布 `autogpt-platform-beta-v0.8.1`

**日期：** 2025 年 1 月

---

## 🔥 有什么新内容？

### 新功能

- **#14636** - 添加八名机器构建的通才专家及其技能和例程（由@ntindle）
- **#14794** - 添加 Zara，一位上市策略专家（作者：@ntindle）
- **#14798** - Max 现在是销售专家 - 将高级销售包交给他（@ntindle）
- **#14600** - 从私人技能目录中播种技能市场（由 @0ubbe 提供）
- **#14713** - 添加九位核心专家（by @0ubbe）
- **#14773** - 嵌套工作区文件夹、AutoPilot 的文件夹列表以及对用户自己的文件的专家访问（由 @Pwuts 提供）
- **#14774** - 工作区选择器和文件页面中的嵌套文件夹、文件夹附加和专家文件过滤器（由 @Pwuts 提供）
- **#14741** - 允许副驾驶询问用户卡中的多选问题（作者：@Abhi1992002）
- **#14758** - 在委派副驾驶消息上显示“发送自”徽章（由 @Abhi1992002 提供）
- **#14771** - Shift-click 在工作区文件选择器中选择一个范围（由 @Pwuts 提供）
- **#14838** - 用 Cookiebot 替换 cookie 横幅并将 PostHog 放在同意后面（作者：@kcze）
- **#14317** - 在现有 API 后面添加 PostHog 功能标记后端（由 @Pwuts 提供）
- **#14767** - 通过一次复习和 Redis 缓存共享 PostHog 标志定义（由 @Pwuts 提供）
- **#14805** - 哨兵错误携带已开启的功能标志，由标志 API 记录（由@Pwuts）
- **#14624** - 每个 E2B 创建和连接都有一个阻塞点，其中出口被固定（由 @kcze 提供）
- **#14290** - 激活、保留、单位经济学和实验观点（@ntindle）
- **#14742** - 添加 FORCE_ALL_FLAGS 以在本地打开每个功能标志（由 @Abhi1992002 提供）
- **#14806** - 在 PostHog 中重新创建 LaunchDarkly 标志和目标的脚本（由 @Pwuts 提供）

### 新区块

- **#14697** - 将 Unbiased Pareto 添加到 LLM 目录（由 @ntindle）
- **#14683** - 添加包含AI Ling 3.0 Flash VL（由@ntindle）
- **#14755** - 通过 OpenRouter 添加腾讯 Hy4 预览版（by @ntindle）
- **#14757** - 通过 OpenRouter 添加阿里巴巴 Qwen 3.8 Flash（由 @ntindle）
- **#14753** - 将 Zapier 添加到官方 MCP 目录（由 @ntindle）
- **#14743** - 通过 OpenRouter 添加 Google Gemma 4 31B (REQ-81)（由 @Bentlybro）
- **#14821** - 添加 Claude Opus 5.5、GPT-6 Sol 和 GPT-6 Luna（作者：@ntindle）

### 增强功能

- **#14786** - 为已安装和已保存的技能提供单独的每位专家预算（由@ntindle）
- **#14779** - 使会话的技能成为一流的 find_capability 候选者（@ntindle）
- **#14778** - 索引整个描述并在功能搜索中链接保存/存储/写入（由@ntindle）
- **#14740** - 重命名并将每位专家的技能上限提高到 150（由 @wofiporia 提供）
- **#14807** - 告诉 Otto 和专家公式呈现的内容（作者：@Pwuts）
- **#14799** - 使试用容量和国家/地区资格可配置（由@ntindle）
- **#14546** - 同时工作通知队列并在通道交换中幸存（由@Bentlybro）
- **#14822** - 运送 Clay & Rock V1 身份和副本（作者：@Abhi1992002）
- **#14768** - 将入职试用整合到计划卡中（由@Torantulino）
- **#13749** - 安全地缓存编译的 JSON 模式验证器（由 @dexhunter 提供）

### UI/UX 改进

- **#14790** - 在聊天回复和 Markdown 工件中渲染内联 $…$ 数学（由 @Pwuts 提供）
- **#14769** - 将打开的文件夹保留在 URL 中，以便重新加载并链接到其中（由 @Pwuts 提供）
- **#14801** - 跨入职和集成统一订阅登录卡（由@ntindle）
- **#12847** - 清除密钥时保留字典条目（由@djpjronline-netizen）
- **#12846** - 使密码显示切换可通过键盘访问（由 @djpjronline-netizen 提供）
- **#12844** - 统一构建器字段可访问性和 DOM 标识（由 @djpjronline-netizen 提供）
- **#13456** - 改进添加块放置，无需视口跳转（由 @anonymous-lad2 提供）

### 错误修复

- **#14750** - 在沙箱基础中包含 exec_file 路径（由 @Bentlybro 提供）
- **#14706** - 当转录失败时，保留录音并提供重试 + 下载（由 @Bentlybro）
- **#14574** - 在待排空提示上携带排空文本（由 @Abhi1992002 提供）
- **#14575** - 在其所属的位置渲染中转后续动作（作者：@Abhi1992002）
- **#14576** - Silence Radix DialogContent 缺少描述警告 (#11035) (by @ntindle)
- **#14746** - 更正 LLM 目录中过时的 OpenRouter 显示价格 (SECRT-2701)（由 @Bentlybro 提供）
- **#14751** - 使测试套件可运行 - 真正的 Redis 集群和有界拆卸（由 @Bentlybro 提供）
- **#14754** - 在附件完成上传之前显示副驾驶用户气泡（作者：@Abhi1992002）
- **#14738** - 分割刷新令牌的空格分隔范围（由@Pwuts）
- **#14762** - 在清除前端活动部分的任何事件之前关闭打开的文本部分（由@Pwuts）
- **#14760** - 在重试的相同请求上重放已接受的工具结果响应，而不是 409（由 @Pwuts 提供）
- **#14763** - 停止渲染用户消息中的首轮上下文前缀（由 @Pwuts 提供）
- **#14749** - 停止 ReadSpreadsheetBlock 清空 N/A 和其他五个缺陷（由 @Bentlybro）
- **#14764** - 停止重放记录器在流响应上缓冲超过其上限（由@Pwuts）
- **#14694** - 为 LaunchDarkly 提供 5 秒的初始化超时，而不是 5000 秒（由 @Bentlybro 提供）
- **#14776** - 正确漂移的 Kimi K3 OpenRouter 显示价格（由 @ntindle）
- **#14602** - 429 上的表面结构化使用限制信封，因此 BYOSUB 重新连接可解锁聊天（由 @Otto-AGPT）
- **#14531** - 退役已发布和未使用的功能标志（由@ntindle）
- **#14289** - 从每个人类路径触发 run_agent 和 Schedule_agent DataFast 目标（由 @ntindle）
- **#14135** - 支持显式无凭据 Ollama 路由（由 @primorLee 提供）
- **#13400** - 在调度前验证时间表名称（由 @sahil-mangla 提供）
- **#13614** - 在工作区工件中保留工具输出来源（由@Yigtwxx）
- **#14540** - 共享可取消的 MCP OAuth 尝试生命周期（由 @L4XB 提供）
- **#14793** - 在原子根发布中强制执行技能能力（由@ntindle）
- **#14789** - 为技能种子提供适合整个目录的事务超时（由 @0ubbe 提供）
- **#14796** - 修正漂移的 GPT-OSS 20B OpenRouter 显示价格（由 @ntindle 提供）
- **#14745** - 询问要更新哪个帐户而不是添加重复帐户 (SECRT-2660)（由 @Bentlybro）
- **#14761** - 每 10 秒记录一次重复的 client 请求失败（由 @Pwuts 提供）
- **#14802** - 在未配置试用优惠时停止记录错误（由@Pwuts）
- **#14008** - 解析 HTTP 响应媒体类型而不丢失错误主体（by @jiahao6635）
- **#14803** - 在名册种子中保留所有者设置的头像（由@Pwuts）
- **#13357** - 在显示过期会话错误之前解决身份验证（由@pony-maggie）
- **#13432** - 恢复预算有限的轮次而无需重新发送工作（由@C1-BA-B1-F3）
- **#14813** - 目录中仅缺少的列表不会被除名（由@ntindle）
- **#14770** - 在添加附件时拒绝超过 20 个附件上限的附件，而不是在发送消息时拒绝（由 @Pwuts 提供）
- **#14808** - 在缩进的代码块中保留美元符号而不转义（由@Pwuts）
- **#14819** - 将过时的高级 Opus 默认重新指向 claude-opus-5 （由 @ntindle 提供）
- **#14820** - 正确的 deepseek-v4.1-flash 输入价格以匹配实时 OpenRouter 汇率（由 @ntindle）
- **#14825** - 正确漂移的 Gemma 4 31B OpenRouter 显示价格（由 @ntindle）
- **#14716** - 停止将浏览器弃用报告转发给 Sentry（由 @Bentlybro 提供）
- **#14708** - 在验证之前解决前向引用 RPC 返回注释（由 @Bentlybro）
- **#14717** - 报告 WebSocket 关闭代码和原因，而不是“[object CloseEvent]”（由 @Bentlybro）
- **#14719** - 当 Web 存储不可用时停止报告错误（由 @Bentlybro）
- **#14830** - 恢复由每条消息任务破坏的 langsmith 回复跨度（由 @ntindle）

### 文档

- **#14690** - 说明如何重新生成专家风格评估基线（由 @Pwuts 提供）
- **#14284** - 记录 CI 执行并在文档诊断上关闭失败（由 @ntindle 提供）

### 依赖关系和维护

- **#14723** - 将 /autogpt_platform/autogpt_libs 中的 pytest 从 8.4.1 提升到 9.1.1 (by @dependabot[bot])
- **#14730** - 将 /autogpt_platform/backend 中的加密从 46.0.4 提升到 50.0.1 (by @dependabot[bot])
- **#14732** - 将 /autogpt_platform/backend 中的正则表达式从 2025.11.3 映射到 2026.9.10 （由 @dependabot[bot] 提供）
- **#14729** - 在 /autogpt_platform/backend 中将 yt-dlp 从 2025.12.8 提升到 2026.8.19 (by @dependabot[bot])
- **#14734** - 在 /autogpt_platform/backend 中将舞台工作人员从 3.7.0 切换到 3.23.0 （由 @dependabot[bot] 提供）
- **#14537** - 固定统计操作并限制工作流程权限（由 @citizen204 提供）
- **#14281** - 重叠全栈构建并强化 E2E 验证（由 @ntindle 提供）
- **#14282** - 加速并强化单容器验证（由@ntindle）

---

## 🎉 感谢我们的贡献者！

向所有为此版本做出贡献的人致以深深的谢意。特别感谢我们的新贡献者：

- @primorLee
- @wofiporia
- @sahil-mangla
- @anonymous-lad2
- @Yigtwxx
- @L4XB
- @citizen204
- @jiahao6635
-@C1-BA-B1-F3

以及我们的回归贡献者：
- @ntindle
- @Bentlybro
-@Abhi1992002
- @Pwuts
- @0ubbe
- @Torantulino
- @奥托-AGPT
- @djpjronline-网友
- @kcze
- @dexhunter
- @小马玛吉

---

## 📥 如何获取此更新

要更新到此版本，请运行：

```bash
git pull origin autogpt-platform-beta-v0.8.1
```

或者直接从官网下载  
[发布页面](https://github.com/Significant-Gravitas/AutoGPT/releases)。

有关更改的完整列表，请参阅[完整 Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.8.0...autogpt-platform-beta-v0.8.1)。

---

## 📝 **反馈和问题**
如果您遇到任何问题或有建议，请[加入我们的 Discord](https://discord.gg/autogpt) 告诉我们！



真的

---

> 📦 仓库：[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · 🏷️ 版本：`autogpt-platform-beta-v0.8.1` · 📅 发布：2026-09-24 · [查看英文原版 Release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.8.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
