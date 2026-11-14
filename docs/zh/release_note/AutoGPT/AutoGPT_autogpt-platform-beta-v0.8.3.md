---
title: "AutoGPT autogpt-platform-beta-v0.8.3"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.8.3"
version: "autogpt-platform-beta-v0.8.3"
published: "2026-10-08"
type: "pre"
lang: "zh"
---

# AutoGPT autogpt-platform-beta-v0.8.3

# 🚀 发布 `autogpt-platform-beta-v0.8.3`

**日期：** 2026 年 10 月

---

## 🔥 有什么新内容？

### 新功能
- **#14990** - 向 PostHog 报告 OAuth 启动和交换失败（作者：@kcze）
- **#15052** - 让用户编辑并组合问题卡中的建议答案（由 @0ubbe 提供）
- **#15069** - 从链接的 Discord、Slack、Teams 或 Telegram 服务器驱动的聊天在频道中作为本机按钮获取批准卡（由 @Pwuts 提供）
- **#15138** - `ENABLE_USER_NOTIFICATIONS` 开关，以便产品只能发送身份验证电子邮件（由@Bentlybro）
- **#15145** - 为第 33 位名册专家添加 Clip 的头像和名册别针（由 @ntindle）
- **#15146** - 为第 33 位名册专家添加 Clip 的头像和名册别针（修补程序）（由 @ntindle 提供）
- **#14951** - 将官方 PayPal MCP 服务器添加到 MCP 目录（由 @ntindle）
- **#15070** - 将 GPT-6.1 Sol 添加到 LLM 目录（由 @ntindle）
- **#14836** - 将注册、入职、结帐和流失事件发送到 PostHog（由 @kcze）
- **#15134** - 将官方 Canva MCP 服务器添加到 MCP 目录（由 @ntindle 提供）
- **#15053** - 普通的沙盒工作从不要求；向外的命令和未经请求的用户文件删除仍然有效（作者：@Pwuts）
- **#15203** - 添加 Mistral Large 4（由@ntindle）
- **#15210** - 添加 Mistral Medium 3.5、Small 4 和 Ministral 3，并淘汰 Medium 3.1 和 Small 3.2（by @Pwuts）
- **#15188** - 添加 GitHub 存储库流量块（视图、克隆、引荐来源网址、热门内容）（由 @ntindle 提供）
- **#15191** - 添加黑客新闻搜索、故事、项目和用户块（由@ntindle）
- **#15135** - 在第一次会话之前需要经过验证的电子邮件，并在注册时提供平台用户（由@Bentlybro）
- **#15152** - 注册同意线、营销选择退出和 MailerLite 门（由 @itsababseh）
- **#15035** - 结合新任务并回顾家庭（作者：@0ubbe）
- **#15201** - 简化注销侧边栏并促进免费试用（由@Torantulino）
- **#15084** - ID 每个流条目，每个持续的检查点，并从光标恢复一个回合（由@Pwuts）
- **#15088** - 将聊天流折叠到服务器保留的行中，并报告它们漂移的位置（由@Pwuts）
- **#14950** - 添加 Conductor 集成块（由 @Abhi1992002 提供）

### 增强功能
- **#14835** - 删除重复的 PostHog 事件并添加基本属性（由 @kcze 提供）
- **#15163** - 将工程注释移出已发布的文档文件夹（由@ntindle）

### UI/UX 改进
- **#15064** - 在手机上保持从下拉菜单打开的对话框（由 @Pwuts 提供）
- **#15063** - 将专家设置卡远离家庭英雄（@0ubbe）
- **#15102** - 从侧边栏打开一个新的专家页面 + 并在悬停时显示组 V 形（作者：@Abhi1992002）
- **#15103** - 在计费计划卡上将 ENTERPRISE 视为管理员管理（由 @Abhi1992002 提供）
- **#15104** - 当行重新安装时保留专家入门卡的位置（由 @Abhi1992002 提供）
- **#15105** - 让 Enter 在 Otto 应答时将后续行动排队，并保留拒绝的后续行动，直到本地流稳定下来（作者：@Abhi1992002）
- **#15155** - 将已登录和已注册的用户直接发送到 /home（由 @Pwuts 提供）
- **#15082** - 不要在触摸设备上按 Enter 键发送（由 @Otto-AGPT）
- **#15160** - 当提供商拒绝保存的凭据时提供重新连接（由@kcze）

### 错误修复
- **#15045** - 记录为什么 MailerLite 拒绝回填写入（由 @ntindle）
- **#15021** - 拒绝任何地方的 Google 同意模式，直到 Cookiebot 给出答复（由 @kcze 提供）
- **#15039** - 批准卡以文本形式显示保留呼叫的参数，最高可达主管的 24k 上限（由 @Pwuts 提供）
- **#14881** - 对于失败的工作区文件下载，返回 404/502 而不是 500（由 @Bentlybro）
- **#15058** - 将 gh、Node 和 python 放回到 AutoPilot 沙箱映像中（由 @Pwuts 提供）
- **#15068** - 由链接的聊天机器人驱动的 AutoPilot 聊天不再等待频道无法显示的批准卡（由 @Pwuts 提供）
- **#15042** - 正确的 GPT-OSS 120B OpenRouter 显示价格漂移（由 @ntindle）
- **#15096** - 拒绝任何地方的 Google 同意模式，直到 Cookiebot 给出答案（修补程序）（由 @kcze 提供）
- **#15097** - 在 Stripe 重定向之前发送选择的计划并添加试用开始转换（修补程序）（由 @kcze 提供）
- **#15109** - 禁止 CLI 的 ListAgents 和 SendMessage 工具（由 @ntindle 提供）
- **#15117** - 禁止 CLI 的 ListAgents 和 SendMessage 工具（开发，来自 #15109）（由 @Pwuts 提供）
- **#15036** - 判断长调用而不是保留它们，并根据用户自己的话（由@Pwuts）
- **#14890** - 停止报告 Next 已处理的 RSC 获取回退到 Sentry（由 @Bentlybro）
- **#15054** - 序列化线性 OAuth 刷新（由 @Bentlybro）
- **#14895** - 停止 Sentry 初始化其 LaunchDarkly 集成（由 @Bentlybro）
- **#15114** - 接受 Conductor 提示 ID 作为获取会话游标并公开 next_after （由 @Abhi1992002 提供）
- **#15112** - 停止副驾驶每回合重新描述能力和重新加载技能（作者：@Abhi1992002）
- **#15111** - 专家 find_capability 报告 need_expert_grant，未连接，未授予凭证（由 @Abhi1992002）
- **#15108** - 使 Conductor Create Workspace 的基础分支显式并报告（by @Abhi1992002）
- **#15116** - 停止设置 > 创建 Stripe 客户并撤销管理员授予的计划的计费（作者：@Abhi1992002）
- **#15141** - 只有结账开启者才会进入 MailerLite，针对 GTM 进行分段（由 @ntindle）
- **#15140** - 只有结帐开启程序才会进入 MailerLite，针对 GTM（修补程序）进行分段（由 @ntindle）
- **#15142** - 将secret_key传递给PostHog client（由@Pwuts）
- **#15071** - 修正 DeepSeek V4.1 Flash OpenRouter 显示价格漂移（by @ntindle）
- **#15139** - 修正 Kimi K2.6 OpenRouter 显示价格漂移（by @ntindle）
- **#15095** - 从注册页面删除过时的演示链接（由 @itsababseh 提供）
- **#15125** - 计划的 run_agent 通过 DatabaseManager 到达数据库，并且计划失败会发出警报（由 @Bentlybro 提供）
- **#15193** - 分割公共和私人媒体存储（由@kcze）
- **#15166** - 让 Copilot 错误重试开始新的回合（由 @Torantulino）
- **#15167** - 将交易电子邮件与设计系统保持一致（由@Torantulino）
- **#15037** - 将heredoc写入工作区判断为文件写入，而不是shell命令（由@Pwuts）
- **#15181** - PostHog 标志同步可以创建一个不为任何人服务的标志，并说明为什么请求被拒绝（由@Pwuts）
- **#15206** - 在生产中分割公共和私人存储（由@ntindle）
- **#15056** - 内容评审仅读取来自 AutoGPT 外部的内容，而不读取平台自己的指导（由 @Pwuts 提供）
- **#15131** - 通道的批准按钮以网络 click 的方式唤醒轮流，因此网关会根据用户的请求来判断它（作者：@Pwuts）
- **#15197** - 阻止宽图扇出耗尽 Redis 连接池（由@Bentlybro）
- **#15186** - web_search 返回每个引用的来源及其编号（由@Bentlybro）
- **#15130** - 当沙箱删除正在运行的命令时，bash_exec 不再报告错误超时（由 @Bentlybro 提供）
- **#14882** - 不向用户显示提供商的原始积分错误（由@Bentlybro）
- **#15127** - 将 AutoPilot 子代理保留在前台，以便他们的工作到达回复（由 @Bentlybro）
- **#15132** - 计划运行使用制定计划时选择的帐户，从来没有选择器没有人回答（由@Bentlybro）
- **#15053** - 普通的沙盒工作从不要求；向外的命令和未经请求的用户文件删除仍然有效（作者：@Pwuts）

### 文档
- **#15172** - 记录平台所需的 Redis 集群（作者：@ntindle）
- **#14810** - 对 .env 备份添加时间戳，以便重试永远不会重用旧备份（作者：@kcze）

### 依赖关系和维护
- **#14654** - 将 /autogpt_platform/frontend 中的 @types/node 从 24.10.0 映射到 26.6.2 (by @dependabot[bot])
- **#14655** - 将 /autogpt_platform/frontend 中的 msw-storybook-addon 从 2.0.6 更改为 3.0.3 (by @dependabot[bot])
- **#14985** - 将关键路径包排除在 Dependabot 组之外（作者：@kcze）
- **#15165** - 将 gitbook 分支保留为主文档的单向副本（由 @ntindle 提供）
- **#15169** - 删除夜间仓库统计工作流程（由@ntindle）
- **#15171** - 将针对 gitbook 打开的拉取请求移至 dev（由 @ntindle）
- **#15060** - 重现聊天从后端漂移的每个已知原因（由@Pwuts）
- **#14942** - 从 Jev 标题中删除 LLM 格式行（由 @Pwuts 提供）
- **#14936** - 添加 shadcn lint 设置（由 @0ubbe 提供）
- **#14938** - 删除未使用的遗留组件（由@0ubbe）

---

## 🎉 感谢我们的贡献者！

向所有为此版本做出贡献的人致以深深的谢意。特别感谢我们的新贡献者：

- @奥托-AGPT
- @Torantulino
- @itsababseh

以及我们的回归贡献者：
- @ntindle
- @kcze
-@Abhi1992002
- @0ubbe
- @Pwuts
- @Bentlybro
- @dependabot[机器人]

---

## 📥 如何获取此更新

要更新到此版本，请运行：

```bash
git pull origin autogpt-platform-beta-v0.8.3
```

或者直接从官网下载  
[发布页面](https://github.com/Significant-Gravitas/AutoGPT/releases)。

有关更改的完整列表，请参阅[完整 Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.8.2...autogpt-platform-beta-v0.8.3)。

---

## 📝 **反馈和问题**
如果您遇到任何问题或有建议，请[加入我们的 Discord](https://discord.gg/autogpt) 告诉我们！

---

> 📦 仓库：[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · 🏷️ 版本：`autogpt-platform-beta-v0.8.3` · 📅 发布：2026-10-08 · [查看英文原版 Release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.8.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
