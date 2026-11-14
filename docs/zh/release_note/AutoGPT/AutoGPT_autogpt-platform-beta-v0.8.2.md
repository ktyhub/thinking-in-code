---
title: "AutoGPT autogpt-platform-beta-v0.8.2"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.8.2"
version: "autogpt-platform-beta-v0.8.2"
published: "2026-09-30"
type: "pre"
lang: "zh"
---

# AutoGPT autogpt-platform-beta-v0.8.2

## 🔥 有什么新内容？

### 新功能

- **#14209** - AutoPilot 操作门控模式 - 首先询问、自动、无人监督（由 @Pwuts 提供）
- **#14817** - 工作流程从 AutoPilot 在不可逆转的操作之前暂停开始；不可逆标记被重命名并扩大（@Pwuts）
- **#14832** - 当保留的呼叫等待审核时，AutoPilot 会继续运行：每次聊天都会出现一系列卡片，批准后会出现较晚的结果（作者：@Pwuts）
- **#14837** - AutoPilot 无需询问即可运行只读和工作区块和工作流程，并在每张卡上命名块或工作流程（由@Pwuts）
- **#14839** - AutoPilot 决定每个服务器效果图上的 MCP 调用，并在首次使用任何其他工具时询问（由 @Pwuts 提供）
- **#14834** - 在模型看到外部读取之前对其进行判断；为用户保留读取携带指令（由@Pwuts）
- **#14841** - 一旦聊天超过其支出上限，付费阅读就会询问（由@Pwuts）
- **#14645** - 每个 E2B 盒子通过的凭证交换代理（by @kcze）
- **#14792** - 添加 AnySearch 搜索、并行搜索和提取块（由 @Xxx91n 提供）
- **#14775** - 支持副驾驶@提及中的连接集成（作者：@Abhi1992002）
- **#14695** - 将浏览器通知设置添加到帐户页面（由@kcze）
- **#14701** - 告诉 AutoPilot 主聊天室有关其计算机的信息（由 @kcze 提供）
- **#14849** - 聘请专家立即返回；它的技能和工作流程安装在后台（由@Pwuts）
- **#14853** - AutoPilot 的批准请求属于他们的聊天，而不是虚构的图形执行（由 @Pwuts 提供）
- **#14878** - 信用历史和成本日志命名 AutoPilot 聊天，而不是虚构的图形执行（由 @Pwuts 提供）
- **#14931** - 批准规则可以适用于一次聊天、一位专家或整个团队（由@Pwuts）
- **#14980** - 裸工具的批准卡提供“从现在开始批准”和“从现在开始让奥托判断”（由@Pwuts）
- **#14997** - Trust 读取记忆、安装的技能和拥有的工作空间路径（由@Pwuts）
- **#14999** - 在对话框中查看保持的 AutoPilot 调用（由 @Pwuts 提供）
- **#14858** - 添加粘土头像选择器和实时 AI 生成（由 @0ubbe 提供）
- **#14901** - 在维护的站点地图中包含公共专家页面 (SECRT-2750)（由 @Abhi1992002 提供）
- **#14945** - 发布部署技能目录并就地更新已安装的副本（由@Torantulino）
- **#14859** - 添加 PostHog MCP 和完整的集成图标（由 @ntindle 提供）
- **#14971** - 添加 OpenSEO MCP，包括自托管实例（由 @ntindle 提供）
- **#14891** - 保留的呼叫用链接命名其 ID 指向的内容（由 @Pwuts 提供）
- **#14494** - 需要在市场列表上使用简短的 CTA 式子标题，并带有回填脚本（由 @Pwuts 提供）
- **#14833** - 单个 PostHog 事件列表和名称常量（由 @kcze 提供）
- **#15040** - 保留 PostHog 人员的订阅状态和生命周期日期（作者：@kcze）
- **#15026** - 将现有订阅者回填到 MailerLite 中并添加试用组（由 @Bentlybro 提供）

### 增强功能

- **#14867** - 通过批量技能安装和跳过重复嵌入和扫描来加快专家招聘速度（由@ntindle）
- **#14765** - 当雇佣专家开启时将专家放在第一位（由@0ubbe）
- **#14928** - 调整俳句的动作主管标题（98% 召回，43% 不必要的保留）（由 @Pwuts）
- **#14932** - Jev 决定行动主管的电话；法学硕士仅解释了一个问题（@Pwuts）
- **#15006** - Jev 决定内容评判，Sonnet 只引用保留内容（@Pwuts）
- **#14875** - 保留 web_fetch 中的主要内容并在纯 JS shell 上发出警告（由 @JohnnyWilson16 提供）
- **#14883** - 将 xAI Grok 4.7 添加到目录（由 @ntindle）
- **#14903** - 将 GLM-5.3 添加到 LLM 目录（由 @ntindle）
- **#14943** - 添加 Claude Opus 4.8 (claude-opus-4-8)（由 @ntindle）
- **#14988** - 将小米 MiMo-V2.6-Pro 和 MiMo-V2.6-Flash 添加到 LLM 目录（by @ntindle）
- **#15014** - 添加 Claude Sonnet 5.5 并为其默认标准层（由 @ntindle）
- **#14949** - 将 gpt-6-luna 提升为快速/标准默认值（超过 gpt-5.6-luna）（由 @ntindle）

### UI/UX 改进

- **#14885** - AutoPilot 操作门控卡和队列设计更新（由 @Pwuts 提供）
- **#14876** - 在平台付费专区提供免费试用（@0ubbe）
- **#14934** - 将工件面板与 Claude 参考相匹配（由 @0ubbe 提供）
- **#14933** - 将专家头像创建者减少为一个 AI 头像（作者：@0ubbe）
- **#15002** - 专家卡和聊天芯片打磨（by @0ubbe）
- **#15008** - 在可选生成之前显示头像默认值（由@0ubbe）
- **#15029** - 显示聊天文档计数和专家文件（由 @0ubbe 提供）
- **#15033** - 将专家文档显示为文件页面行（由 @0ubbe 提供）
- **#15041** - 删除部分标题图标并统一标题大小（由 @0ubbe 提供）
- **#14935** - 引导现有用户使用 Otto 中的工作流程（由 @Torantulino）
- **#14948** - 为托管 Clay & Rock 库中的每位专家提供服务，并将头像生成限制在设计系统中（由 @itsababseh 提供）
- **#14994** - 压缩粘土和岩石头像资源（by @0ubbe）

### 错误修复

- **#14854** - 在主反向合并后给标志测试一个同意答案（由@Pwuts）
- **#14777** - 保持中途跟进排队，直到后端耗尽它（作者：@Abhi1992002）
- **#14493** - 当头像或列表图像 URL 失效时优雅地回退（@Pwuts）
- **#14855** - 将副驾驶高级 Opus 别名重新指向 claude-opus-5.5 （由 @ntindle）
- **#14856** - 纠正 deepseek-v4.1-flash 定价漂移（再次）（作者：@ntindle）
- **#14894** - 在 Google 令牌交换上发送平台 PKCE 验证程序（由 @itsababseh）
- **#14897** - 在 Google 令牌交换上发送平台 PKCE 验证程序（#14894 的产品副本）（由 @Pwuts 提供）
- **#14896** - 修改 claude-agent-sdk，以便捆绑的 Claude 代码接受 Opus 5.5 （由 @Pwuts 提供）
- **#14899** - 将赞成/反对反馈保存为 Langfuse 分数（由 @ntindle 提供）
- **#14880** - 停止哨兵清理器默默地丢弃错误事件（由@Bentlybro）
- **#14921** - 完成跳过的节点而不是让它们排队（由@ntindle）
- **#14924** - 请求一个文件，而不是默默地跳过一个空的选择器（由@ntindle）
- **#14902** - 使公共专家资料可供搜索引擎读取 (SECRT-2749)（作者：@Abhi1992002）
- **#14907** - 保存您在保存代理时选择的云端硬盘文件（由@ntindle）
- **#14904** - 修正 3 个型号的 OpenRouter 价格漂移（由 @ntindle）
- **#14944** - 纠正包含ai/ling-3.0-flash-vl 的 OpenRouter 价格漂移（由 @ntindle）
- **#14954** - 更新预目录副本并强化市场副本协调（由@ntindle）
- **#14884** - 停止 update_skills 删除 client 从未见过的技能（作者：@Bentlybro）
- **#14973** - 一旦运行批准，就解决保留呼叫的内联步骤（由@Pwuts）
- **#14975** - 当无法在此帐户上打开聊天链接时请这样说（作者：@Pwuts）
- **#14974** - 批准的继续回复流入批准它的聊天中（由@Pwuts）
- **#14979** - 员工的入职卡可以通过团队页面聊天进行回答（由@Pwuts）
- **#14959** - 纠正catalog.py 中的deepseek/deepseek-v4.1-flash 定价漂移（由@ntindle）
- **#14989** - 修正catalog.py 中的 deepseek-chat 和 kimi-k2.6 定价偏差（作者：@ntindle）
- **#14982** - 保持呼叫的链行显示 click 处的答案（由 @Pwuts 提供）
- **#15005** - 持有的读取指定代理专家为其读取者；奥托继续担任法官（@Pwuts）
- **#15007** - 给内容判断者思考的空间，并重试一个空答案（@Pwuts）
- **#14996** - 用简单的文字显示保留阅读的原因，就像聊天一样（由 @Pwuts 提供）
- **#15015** - 在运行之前加载块注册表（由@Bentlybro）
- **#15017** - 纠正 Grok 4.7 OpenRouter 显示价格漂移（由 @ntindle）
- **#15012** - Sonnet 的内容法官保留代理寻址的文本，无论其来源如何（由 @Pwuts 提供）
- **#15022** - 将一次性秘密保留在会话重播之外（作者：@kcze）
- **#15024** - 显示登录卡而不是拿着它作为外部读取（由@Pwuts）
- **#15030** - 在每条路由上发送 CSP 帧祖先和 Referrer-Policy（由 @0ubbe）
- **#15038** - 在新聊天中恢复待处理的专家加入（由@0ubbe）
- **#15034** - 在加薪后从团队聊天面板开始专家入职（由@0ubbe）

### 依赖关系和维护

- **#14560** - 将操作/陈旧从 10 提升到 11（由 @dependabot[bot] 提供）
- **#14657** - 在 /autogpt_platform/frontend 中将无聊头像从 1.11.2 提升到 2.0.4 (by @dependabot[bot])
- **#14658** - 将 /autogpt_platform/frontend 中的 @vercel/analytics 从 1.5.0 提升到 2.0.1 （由 @dependabot[bot] 提供）
- **#14652** - 将 /autogpt_platform/frontend 中的 shepherd.js 从 14.5.1 提升到 15.3.0 (by @dependabot[bot])
- **#14656** - 在 /autogpt_platform/frontend 中从 12.38.0 到 13.2.0 的凹凸运动（由 @dependabot[bot] 提供）
- **#14735** - 将 /autogpt_platform/backend 中的 exa-py 从 1.16.1 提升到 2.21.0 (by @dependabot[bot])
- **#14653** - 在 /autogpt_platform/frontend 中将成帧器运动从 12.23.24 凹凸到 13.3.0 （由 @dependabot[bot] 提供）
- **#14845** - 将开发依赖项组中 /autogpt_platform/autogpt_libs 中的 Ruff 从 0.16.7 更改为 0.16.8（由 @dependabot[bot] 提供）
- **#14937** - 删除未使用的依赖项（由@0ubbe）
- **#14920** - 删除测试创建的图表和商店列表（由@ntindle）
- **#14923** - 停止并行测试运行破坏彼此的 docker 堆栈（由 @ntindle）
- **#14969** - 将单容器图像的代码层放在最后（由@ntindle）
- **#14998** - 从关注源中删除保留的读取字节（由 @Pwuts 提供）

### CI/CD 改进

- **#14870** - 在自由运行器上运行全栈 e2e 作业（由 @Bentlybro）
- **#14877** - 加速 free runner 上的全栈 e2e 作业（由 @Bentlybro）
- **#14892** - 在 GHCR 中缓存 e2e Docker 层，而不是操作缓存（由 @Bentlybro 提供）
- **#14947** - 让 /reapprove 恢复 PR 审核机器人已驳回的批准（由 @ntindle 提供）
- **#14965** - 阻止超出配额的 Copilot 审查阻止每次合并（由 @ntindle）
- **#14964** - 默认手动开发部署到开发分支，而不是主分支（由@ntindle）
- **#14966** - 停止在后端测试中固定目录的专家技能列表（由@ntindle）
- **#15013** - 让单容器 PR 构建读取 GHCR 层缓存（由 @Bentlybro 提供）

---

## 🎉 感谢我们的贡献者！

向所有为此版本做出贡献的人致以深深的谢意。特别感谢我们的新贡献者：

- @Xxx91n
- @JohnnyWilson16

以及我们的回归贡献者：
- @Pwuts
- @ntindle
- @0ubbe
- @kcze
-@Abhi1992002
- @Bentlybro
- @Torantulino
- @itsababseh
- @dependabot[机器人]

---

## 📥 如何获取此更新

要更新到此版本，请运行：

```bash
git pull origin autogpt-platform-beta-v0.8.2
```

或者直接从官网下载  
[发布页面](https://github.com/Significant-Gravitas/AutoGPT/releases)。

有关更改的完整列表，请参阅[完整 Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.8.1...autogpt-platform-beta-v0.8.2)。

---

## 📝 **反馈和问题**
如果您遇到任何问题或有建议，请[加入我们的 Discord](https://discord.gg/autogpt) 告诉我们！

---

> 📦 仓库：[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · 🏷️ 版本：`autogpt-platform-beta-v0.8.2` · 📅 发布：2026-09-30 · [查看英文原版 Release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.8.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
