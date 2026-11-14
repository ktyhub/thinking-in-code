---
title: "AutoGPT autogpt-platform-beta-v0.8.4"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.8.4"
version: "autogpt-platform-beta-v0.8.4"
published: "2026-10-14"
type: "pre"
lang: "zh"
---

# AutoGPT autogpt-platform-beta-v0.8.4

# 🚀 发布 `autogpt-platform-beta-v0.8.4`

**日期：** 2026 年 10 月

---

## 🔥 有什么新内容？

### 新功能
- **#15089** - 在回合运行时运行 Copilot 聊天，该聊天在一个连接上的光标处恢复（由 @Pwuts 提供）
- **#15199** - 专家集成首先通过 MCP 连接（由 @0ubbe）
- **#15248** - 将“提供反馈”添加到帐户菜单（修补程序）（由@kcze）
- **#15216** - 奥托和专家的回复要简短（@0ubbe）
- **#15217** - 使专家聘用卡简短并类似于 Typeform（作者：@0ubbe）
- **#15249** - 将入职角色发送到 MailerLite 和 PostHog；从 MailerLite 中排除伊朗和俄罗斯（作者：@ntindle）
- **#15204** - 重新设计带有聊天用途和积分的钱包（由@Torantulino）
- **#15196** - 个性化后移动入职付费墙（由@Torantulino）
- **#15061** - 工具模式中的批准卡标签/单词工具参数（由 @Pwuts 提供）
- **#15358** - 取消试用会保留访问权限，直至试用结束（作者：@itsababseh）
- **#15361** - 当用户的槽已满时，子会话等待槽（由@Pwuts）
- **#15043** - 批准的调用链行展开以显示运行的内容（由@Pwuts）
- **#15349** - 将“聊天”添加到折叠的侧边栏（由 @itsababseh 提供）
- **#15441** - 在 Copilot 中显示“正在思考...”而不是后端状态行（由 @0ubbe 提供）
- **#15442** - 重新设计聊天 Markdown 表格（由 @0ubbe 提供）
- **#15462** - 让 Copilot 轮流，图形节点运行自己的哨兵跟踪（由 @ntindle）
- **#15460** - 标记 Sentry 事件并部署提交并允许环境覆盖（由 @ntindle 提供）
- **#15213** - 通过我们自己的域路由浏览器 PostHog 流量（由 @kcze 提供）
- **#15480** - 添加 Meta Muse Wonder 支持（由 @ntindle 提供）
- **#15466** - 也将 MailerLite 分段字段发送到 PostHog（由 @ntindle）
- **#15496** - 添加 Google Gemini 4 Argon 支持（由 @ntindle 提供）
- **#15498** - 在 PostHog 中设置 AutoPilot 代的属性并在那里发送回复反馈（由 @kcze 提供）

### 增强功能
- **#15461** - 为性能代理添加共享的 Sentry 性能比较配方（由 @ntindle 提供）

### UI/UX 改进
- **#15343** - 允许滚动侧边栏中的任何位置（由@Torantulino）
- **#15407** - 当 Copilot 发送被拒绝时，显示带有升级链接的单个付费墙 toast（由 @ntindle）
- **#15439** - 指示构建器聊天中没有连接模型；隐藏支出而不计费（@ntindle）
- **#15448** - 防止移动专家药丸重叠（by @0ubbe）
- **#15455** - 将移动专家药丸与浮动控件对齐（由@0ubbe）

### 错误修复
- **#15252** - 防止长时间的“其他”角色输入丢失入职资料（由@ntindle）
- **#15250** - 使用正确的 client 进行工作时区和商店检查（由 @ntindle 提供）
- **#15309** - 在自己的 venv 中安装诗歌和 prisma，以便镜像构建在 debian:13-slim 上（由 @Pwuts 提供）
- **#14148** - 索引计划用户读取并减少每次缓存未命中的作业存储查询（由@ntindle）
- **#15342** - 停止过度充电恢复 SDK 转动（修补程序）（由 @ntindle）
- **#15147** - 市场搜索按职称查找专家（作者：@Pwuts）
- **#15149** - `find_capability` 找到要雇用的名册专家和用户团队（由 @Pwuts 提供）
- **#15305** - 收取每个 SDK 自身的成本，而不是会话的运行总计（由 @Pwuts 提供）
- **#15182** - 绑定 AutoPilot 跟踪导出重试（由 @ntindle）
- **#15159** - 首先通过向机器人发送消息来连接 Telegram；添加到组是可选的（由@Bentlybro）
- **#15254** - `bash_exec` 杀戮树在中途退出时不再让孩子们活着（作者：@Bentlybro）
- **#15346** - 一旦后端运行它就开始流式传输排队的回合（无需重新加载）（由@Pwuts）
- **#15357** - PostHog 标志读取携带电子邮件；双模式仅记录真正的分歧（作者：@Pwuts）
- **#15348** - 当所有者付费或超过成本上限时跳过预定的副驾驶转弯（由@Pwuts）
- **#15153** - Library e2e：在 clicking 卡之前等待搜索应用（由 @Pwuts 提供）
- **#15356** - 接受来自 Edge、Safari 和预发布 Chrome 的 Web 推送订阅（由 @Pwuts 提供）
- **#15347** - 为用户自己的消息保留一个运行槽（由 @Pwuts 提供）
- **#15353** - 排队消息和批准唤醒在正确的信封下开始（由@Pwuts）
- **#15121** - 同步 Codex 运输工具轮到主轮限制（由 @ntindle）
- **#15370** - 在启动时在读取功能标志的每个服务中加载功能标志（由 @Pwuts 提供）
- **#15380** - 显示丢失发送的完成答案，而不是“无法获取”（由 @Pwuts 提供）
- **#15382** - 在取消试用期间购买的计划会更新试用订阅（由 @ntindle）
- **#15381** - 重试 Claude CLI 报告的 Anthropic 5xx 和过载错误（由 @ntindle）
- **#15391** - 使 Sentry 报告可读并减少仪器噪音（由 @ntindle 提供）
- **#15393** - 停止等待调度程序的库、主页和 AutoPilot 页面（由 @ntindle 提供）
- **#15399** - 充电重试回合仅针对成功的尝试（由@ntindle）
- **#15310** - 仅剥离 `getAGPTServerBaseUrl` 中的尾部 `/api` （由 @ntindle 提供）
- **#15311** - 通过代理选择路线简报页脚； MCP OAuth 错误的回显状态（作者：@ntindle）
- **#15331** - 停止 `transformDates` 重写用户输入和无区域字符串（由@ntindle）
- **#15389** - 防止每用户凭据锁定使 Copilot 停滞 60 秒（由 @ntindle）
- **#15395** - 使编辑时间表工作端到端（由@ntindle）
- **#15402** - 另一个选项卡轮流期间的陈旧选项卡消息显示为排队的后续消息（由@Pwuts）
- **#15408** - 将仅托管的 UI 排除在自托管安装之外（由 @ntindle 提供）
- **#15409** - 修复自托管注册授权、内存页面和无模型聊天（由 @ntindle 提供）
- **#15398** - 防止副驾驶连接丢失后出现错误/旋转/无休止的重试（作者：@Pwuts）
- **#15410** - 停止从存储的选择发送锁定的高级层（由@Pwuts）
- **#15413** - 在单个事务中替换用户的凭证列表（由@ntindle）
- **#15412** - 在 API 工作线程之间共享订阅查找缓存（由 @ntindle）
- **#15420** - 瞬时重试账单一次，从不重复工具调用，并在第一轮工作（由@ntindle）
- **#15417** - 在日志和 Sentry 之前屏蔽请求 URL 中的凭据（由 @ntindle）
- **#15424** - 修复掉落的 Escape 测试薄片和未悬停的使用工具提示（由 @ntindle）
- **#15425** - 在调试时记录注销关闭的 WebSocket，而不是失败（由 @ntindle）
- **#15426** - 在第一次读取时创建一个新的用户配置文件，而不是返回 404（由 @ntindle）
- **#15419** - 当运行完成但出现错误时显示哪个步骤失败以及原因（由 @ntindle）
- **#15066** - 使用配置的 Slack 应用程序登录 Slack 的 MCP 服务器（由 @Bentlybro 提供）
- **#15367** - HubSpot 块：请求服务密钥/私有应用程序令牌，而不是已退役的 API 密钥（由 @Bentlybro 提供）
- **#15435** - 测试失败导致数据库事务处于打开状态；修复有问题的测试（由@ntindle）
- **#15433** - 停止重复/嘈杂的哨兵报告（由@ntindle）
- **#15434** - 防止可选的选择输入崩溃审查卡和运行表单（由@ntindle）
- **#15438** - 当无法保存图表时命名缺失的字段（由@ntindle）
- **#15427** - 停止隐藏挂起的订阅更改的慢速读取（由@ntindle）
- **#15366** - 使用配置的应用程序登录 HubSpot 的 MCP 服务器；在需要秘密的地方拒绝占位符 client（由 @Bentlybro）
- **#15359** - 在文件页面上安全渲染 .pptx 和其他 Office 文件 (SECRT-2437)（由 @Abhi1992002 提供）
- **#15464** - 每天在镜像构建中刷新 Debian 软件包，以便发布安全修复程序（由 @ntindle）
- **#15467** - 每条聊天消息读取试用用户的试用一次（不是四次）（由@ntindle）
- **#15474** - 恢复 1 小时 SDK 提示缓存（恢复 #15470）（由 @ntindle）
- **#15481** - 在 Sentry 和 PostHog 中将开发部署标记为 dev（不是预览）（由 @ntindle）
- **#15369** - 在 AutoPilot 需要时提供托管的 Ayrshare 配置文件（由 @Bentlybro）
- **#15482** - 通过 Better Auth 进行负载测试验证（作者：@ntindle）
- **#15484** - 将批准的通话结果保留在用户的气泡之外（作者：@Pwuts）
- **#15221** - 为现有计划的用户隐藏试用优惠（由@Torantulino）
- **#15219** - 完成交易电子邮件 client 兼容性（由 @Torantulino）
- **#14154** - 修复 AI/ML API URL (blocks/llm) (by @hugoaimlapi)
- **#14939** - 停止重新传输的聊天发送队列并再次运行 (SECRT-2695)（由 @Bentlybro）
- **#15067** - 为每个侧边栏、弹出窗口和构建器聊天提供主聊天卡（由 @Bentlybro）
- **#15128** - 运行社区复制模型而无需版本哈希 (SECRT-2806)（由 @Bentlybro）
- **#15493** - 批准标签反映了发送给 Otto 的每张已回答的卡片的内容（由 @Pwuts）
- **#15489** - 删除的共享运行停止提供其页面和文件（由@kcze）
- **#15251** - 在面向用户的副本中使用“工作流程”（不是“代理”/“图表”）（SECRT-2853）（由@itsababseh）

### 文档
- *（此版本中没有文档更改）*

### 依赖关系和维护
- **#15230** - 将本地测试 RAM 和依赖映像占用空间减半（由 @ntindle 提供）
- **#15354** - 删除已退役功能标志的剩余名称（由 @Pwuts 提供）
- **#15360** - 将 OSS 扫描程序构建和威胁模型保留在 `.oss-scanner/` 中（由 @ntindle）
- **#15379** - 验证每个聊天路由的收费与其提供商的账单相同（由@ntindle）
- **#15404** - 测试计费审计误收费报告并澄清哪些重新启动保持基线（由@ntindle）
- **#15397** - 将旅程分支添加到 e2e 以用于托管配置用户旅程（由 @ntindle）
- **#15405** - 前端 Copilot 测试：在连接结束时断言 UI（由 @Pwuts 提供）
- **#15429** - 在测试中放置压缩流而不是计时（by @ntindle）
- **#15428** - 引脚重试关闭边界和压缩缩短测试覆盖范围（由@ntindle）
- **#15431** - 针对脚本化模型服务器运行 AutoPilot 旅程（由 @ntindle 提供）
- **#15072** - 增加开发依赖项（2 个更新）（由 @dependabot[bot] 提供）
- **#15158** - 增加生产依赖项（2 个更新）（由 @dependabot[bot] 提供）
- **#15465** - 增加生产依赖项（2 个更新）（由 @dependabot[bot] 提供）
- **#15457** - 将 Dependabot 安全性提升应用于后端开发依赖项（由 @kcze 提供）
- **#15242** - 增加后端开发依赖项（7 个更新）（由 @dependabot[bot] 提供）

---

## 🎉 感谢我们的贡献者！

向所有为此版本做出贡献的人致以深深的谢意。特别感谢我们的新贡献者：

- @hugoaimlapi

以及我们的回归贡献者：
- @0ubbe
-@Abhi1992002
- @Bentlybro
- @dependabot[机器人]
- @itsababseh
- @kcze
- @ntindle
- @Pwuts
- @Torantulino

---

## 📥 如何获取此更新

要更新到此版本，请运行：

```bash
git pull origin autogpt-platform-beta-v0.8.4
```

或者直接从官网下载  
[发布页面](https://github.com/Significant-Gravitas/AutoGPT/releases)。

有关更改的完整列表，请参阅[完整 Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.8.3...autogpt-platform-beta-v0.8.4)。

---

## 📝 **反馈和问题**
如果您遇到任何问题或有建议，请[加入我们的 Discord](https://discord.gg/autogpt) 告诉我们！

---

> 📦 仓库：[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · 🏷️ 版本：`autogpt-platform-beta-v0.8.4` · 📅 发布：2026-10-14 · [查看英文原版 Release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.8.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
