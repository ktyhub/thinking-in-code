---
title: "paperclip v2026.1001.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.1001.0"
version: "v2026.1001.0"
published: "2026-10-02"
type: "minor"
lang: "zh"
---

# paperclip v2026.1001.0

# 纸clip v2026.1001.0

> 发布时间：2026-10-01

Paperclip v2026.1001.0 进行了 77 次提交，从 `2026.921.0-beta.1` 升级而来。标题是可靠性：对本机跑步者和聊天恢复进行深度强化 - 批准和停止比赛、会话连续性、沙箱重新连接和清理 - 以及更友好的面孔：整个应用程序中的代理角色、动画入职角色和重建的 Slack 设置。围绕这些：代理可以按照计划的审查机器人审查 GitHub 拉取请求，Railway 将连接器目录加入到受管理的部署工具中，在活动运行期间批准和应答队列而不是退回，并且执行工具现在默认为全自动。

## 重大变更

- **旧版 Composio 代理已停用。** API-key 目录方法、代理 clients、会话创建、帐户同步、子生命周期和工具包路由以及“服务”选项卡均已删除。现有的传统 Composio 连接停止工作，并且没有自动迁移 - 实验性 MCP 聚合器连接器（如下）是后继路径；有关手动步骤，请参阅升级指南。 Vercel 的出处未受影响。 ([#13758](https://github.com/paperclipai/paperclip/pull/13758))
- **执行工具现在默认为全自动。** 本机运行默认的 Claude/ACPX 到 `approve-all`、OpenCode 到 `allow`、Codex 到审批和沙箱绕过，并且旧适配器遵循相同的策略 - 包括提供程序工具和连接的工具。显式配置的限制模式被保留，Paperclip 自己的批准决定仍然强制执行控制器权限；仅*默认值*发生变化。依赖未配置代理继承限制性提供商门的运营商应设置显式模式。 （[#13686]（https://github.com/paperclipai/paperclip/pull/13686），[#13693]（https://github.com/paperclipai/paperclip/pull/13693））

## 亮点

- **代理获得面孔** — 静态角色图像取代列表、侧边栏、组织结构图、任务、评论、选择器、活动和仪表板中的代理图标，代理标题中带有一个动画指针跟随字符（包括减少动作和触摸后备），并且角色显示内置于代理创建中（[#13171](https://github.com/paperclipai/paperclip/pull/13171)）。入职以 ClipLab 昏昏欲睡的英雄开始：角色在设置过程中以灰色打瞌睡，并在评论中以全调色板醒来（[#13629](https://github.com/paperclipai/paperclip/pull/13629)）。 Slack 设置可以从设置和设置中将代理的头像下载为 PNG 格式以用于机器人身份 ([#13740](https://github.com/paperclipai/paperclip/pull/13740))。
- **代理审查您的拉取请求** — 引导式设置将 Paperclip 代理转变为 GitHub 审查机器人：可复制的 Claude/Codex 提示逐步完成应用程序安装、审查计划和可选的所需检查，并内置实例源 ([#13717](https://github.com/paperclipai/paperclip/pull/13717))。 GitHub MCP 连接还获得了针对现有连接和新连接的操作工具集 — 工作流发现和调度 ([#13553](https://github.com/paperclipai/paperclip/pull/13553))。
- **活动运行期间的批准和答案队列** - 在代理运行中时响应问题或批准不再退回：已解析的卡作为不可变响应投射到运行队列中，显式 click 将响应引导到兼容的本机转向（或中断新会话），并且键入的上下文在中断和清理中幸存下来（[#13539](https://github.com/paperclipai/paperclip/pull/13539)）。
- **Slack 设置，重建** — 入门分为六个 clickable 步骤，其中包含生成的创建链接和只读清单、凭据验证、实时帐户链接状态和基于提及的消息测试 ([#13638](https://github.com/paperclipai/paperclip/pull/13638))。公司可以将通信指导附加到 Slack 连接上，该连接将对话跟踪到任务中，而无需每轮提醒 ([#13760](https://github.com/paperclipai/paperclip/pull/13760))，并在云代理后面正确回调运行状况报告 ([#13694](https://github.com/paperclipai/paperclip/pull/13694))。
- **连接器目录不断增长** — Railway 附带 OAuth 设置和受管理的部署工具：服务和部署状态、有限日志以及重新部署/重新启动/回滚，以及经过工作区验证的访问 ([#13415](https://github.com/paperclipai/paperclip/pull/13415))。实验性 MCP 聚合器（Zapier、Arcade、Composio Connect、Executor）采用默认关闭的 `enableMcpAggregators` 标志，重用现有的保险库、拨款和策略模型（[#13755](https://github.com/paperclipai/paperclip/pull/13755)）。 You.com 搜索加入了具有登录、API 密钥和无密钥免费套餐的自助服务目录 ([#13555](https://github.com/paperclipai/paperclip/pull/13555))，并且 CreateOS 沙箱提供程序插件针对 CreateOS HTTP API ([#13434](https://github.com/paperclipai/paperclip/pull/13434)) 实现了完整的环境生命周期。
- **例程获得安全的 Webhooks** — 生产触发器向导添加计划和 Webhook 选择、一次性凭证、测试交付收据和可逆删除 ([#13637](https://github.com/paperclipai/paperclip/pull/13637))，并且警告横幅标记可能无法公开访问的 Webhook URL — 本地主机、专用网络、HTTP 和 Tailscale Serve 与 Funnel ([#13684](https://github.com/paperclipai/paperclip/pull/13684))。
- **工作技能和入职技能** — 跑步者工具将已完成任务的学习转化为公司技能，并由现有技能政策进行验证和管理（[#13538](https://github.com/paperclipai/paperclip/pull/13538)）；第一个入职任务通过 Claude 和 Codex 上本地调用的专用技能运行（[#13517](https://github.com/paperclipai/paperclip/pull/13517)）；文档中还包含评估指南和技能创作技能 ([#13535](https://github.com/paperclipai/paperclip/pull/13535))。
- **插件加载图像目录** - 在导入代码之前验证目录身份、受限路径、包版本和捆绑包哈希值；映像选择适用于具有删除和回滚功能的持久安装；持久应用程序覆盖安装在两个 UI shell 中 ([#13646](https://github.com/paperclipai/paperclip/pull/13646))。

## 修复

- **任务对话和 UI** — 当暂停状态检查待处理时，聊天编辑器不再在桌面上禁用（早在稳定版 [2026.916.1](https://github.com/paperclipai/paperclip/releases/tag/v2026.916.1); [#13562](https://github.com/paperclipai/paperclip/pull/13562) 中发布）。选择单选选项回答问题而不自动前进页面 ([#13602](https://github.com/paperclipai/paperclip/pull/13602))，每个复制按钮现在仅在 clipboard 写入成功后才会确认 ([#13603](https://github.com/paperclipai/paperclip/pull/13603))，在重试等待开始时任务历史记录保持可见 ([#13597](https://github.com/paperclipai/paperclip/pull/13597))，最近失败的尝试是即使以后的自动重试被取消，也可以重试 ([#13765](https://github.com/paperclipai/paperclip/pull/13765))，并且连接登录屏幕停止添加虚拟步骤 ([#13601](https://github.com/paperclipai/paperclip/pull/13601))。
- **跑步者和本机执行可靠性** - 跨本机跑步者的广泛强化：批准和停止竞赛在清理期间正确解决（[#13750](https://github.com/paperclipai/paperclip/pull/13750)），在确认停止之前等待挂起的启动，因此迟到的句柄无法提交提供者轮次（[#13741](https://github.com/paperclipai/paperclip/pull/13741)），提供者会话在轮次中持续存在，问题和批准继续在同一运行中完成([#13655](https://github.com/paperclipai/paperclip/pull/13655))，任务回复和热进程连续性可以承受重复数据删除和辅助线程噪音([#13738](https://github.com/paperclipai/paperclip/pull/13738))，代理聊天恢复保留唤醒评论身份并拒绝过时的重试([#13678](https://github.com/paperclipai/paperclip/pull/13678))。沙盒操作也变得更加强大：控制器重新启动后，Daytona 会话通过 PID 重用验证采用检查重新连接（[#13691](https://github.com/paperclipai/paperclip/pull/13691)），在桥接丢失后，终止继续进行，并进行隔离清理尝试（[#13287](https://github.com/paperclipai/paperclip/pull/13287)），清除因重启而搁浅的租约（[#13515](https://github.com/paperclipai/paperclip/pull/13515)），验证继承的环境，陈旧的沙箱二进制文件被替换（[#13677](https://github.com/paperclipai/paperclip/pull/13677)），目录运行时和评分边界被修复（[#13676](https://github.com/paperclipai/paperclip/pull/13676)），完成工具拒绝命名缺失的字段（[#13682](https://github.com/paperclipai/paperclip/pull/13682)），以及本机审核移交，包括服务器验证的分配事实和范围狭窄的审核工具（[#13581]（https://github.com/paperclipai/paperclip/pull/13581））。另外：插件工作人员到达问题树简历（[#13757](https://github.com/paperclipai/paperclip/pull/13757)），没有工作区配置的项目遵循操作员的隔离默认值（[#13636](https://github.com/paperclipai/paperclip/pull/13636)），托管 Git 启动器在沙箱项目中工作（[#13588](https://github.com/paperclipai/paperclip/pull/13588)），空的 `GROK_HOME` 不再屏蔽本地 Grok 运行的主机登录([#13570](https://github.com/paperclipai/paperclip/pull/13570)) 和 Claude ACP 配额分类和重置时间保留到适配器边界 ([#13651](https://github.com/paperclipai/paperclip/pull/13651))。
- **连接和通知恢复** — 身份验证和浏览器连接失败恢复：`CONNECT_TIMEOUT` 加入重试策略，处理 WebSocket 构造函数失败，并且在公司套接字关闭时每 15 秒轮询一次可见查询 ([#13724](https://github.com/paperclipai/paperclip/pull/13724))。最终的运行失败会在每次重新连接时停止重新通知 ([#13739](https://github.com/paperclipai/paperclip/pull/13739))，并且聊天延迟会下降，同时保留托管会话重用 ([#13710](https://github.com/paperclipai/paperclip/pull/13710))。
- **服务器正确性** — PostgreSQL 在事务连接关闭后恢复，而不是楔入排队查询 ([#13643](https://github.com/paperclipai/paperclip/pull/13643))，格式错误的 JSON 请求获得恒定的安全 400，而不是将提交的字节回显到错误和崩溃报告中 ([#13660](https://github.com/paperclipai/paperclip/pull/13660))，在数据库查找之前验证心跳运行 ID ([#13657](https://github.com/paperclipai/paperclip/pull/13657))，代理聊天视图跳过仅任务连接器读取([#13654](https://github.com/paperclipai/paperclip/pull/13654))，捕获的日志读取器得到空读取而不是过去的 EOF 范围错误([#13592](https://github.com/paperclipai/paperclip/pull/13592))，Sentry 错误归因于服务器和浏览器上加载的源版本（[#13719]（https://github.com/paperclipai/paperclip/pull/13719））。
- **云实例 URL 正确性** — 传递给外部聊天的任务链接是精确的公共 URL ([#13699](https://github.com/paperclipai/paperclip/pull/13699))，聊天设置、Telegram 注册和 GitHub Webhook 恢复都使用声明的云源，并保留自托管配置优先级 ([#13680](https://github.com/paperclipai/paperclip/pull/13680))。
- **CLI 和本地登录** — 入门向导接受提示默认值，而不是拒绝它们显示的空输入 ([#13520](https://github.com/paperclipai/paperclip/pull/13520))，并且当凭证文件丢失时，会从其后缀钥匙串项中读取 macOS 隔离的 Claude 登录信息 ([#13519](https://github.com/paperclipai/paperclip/pull/13519))。

## 改进

- 对于传统和本地跑步者来说，继续提示较短，问题工具指导位于规范描述符中（[#13574](https://github.com/paperclipai/paperclip/pull/13574)）；连接器设置副本显示“组织”（[#13589](https://github.com/paperclipai/paperclip/pull/13589)）；为提供程序作者记录了聊天连接器 UX 约定（[#13675](https://github.com/paperclipai/paperclip/pull/13675)）； DeepWiki 配置为 30 页的贡献者手册（[#13745](https://github.com/paperclipai/paperclip/pull/13745)）；并且数据库包附带没有历史毛毛雨快照（[#13687]（https://github.com/paperclipai/paperclip/pull/13687））。

## 升级指南

- **迁移 `0280`–`0283`** 在升级时运行（代理角色、例行 Webhook、Slack 通信指南、GitHub 审核机器人）。
- **旧版 Composio 连接已删除，没有自动迁移** ([#13758](https://github.com/paperclipai/paperclip/pull/13758))。启用实验性 `enableMcpAggregators` 标志只会公开替换的 Composio Connect 目录条目 - 它不会继承现有的凭据、授权或访问规则。要保留 Composio 支持的集成：启用该标志，创建并授权新的 Composio Connect MCP 连接，重新选择其访问规则，并删除每个已停用的旧连接记录。在此之前，代理将无法访问已停用的工具。
- **执行默认值更改为全自动**（[#13686](https://github.com/paperclipai/paperclip/pull/13686)、[#13693](https://github.com/paperclipai/paperclip/pull/13693)）：对必须保留提供商端审批门的代理设置显式限制模式。
- 无需执行其他配置或 ZZPH100​​ZZ 更改。

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.1001.0` · 📅 发布：2026-10-02 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
