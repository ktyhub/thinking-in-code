---
title: "LangBot v4.11.0"
project: "LangBot"
repo: "langbot-app/LangBot"
tag: "v4.11.0"
version: "v4.11.0"
published: "2026-10-14"
type: "minor"
lang: "en"
summary: "LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。 LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to…"
---

# LangBot v4.11.0

LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。
LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to help you build, deploy, and manage AI assistants.

## 🚀 Key Features / 关键更新

LangBot 4.11 带来了一次较大的架构升级：机器人可以响应平台事件，Agent 运行器改为插件化，WebUI 新增工作区助手。
LangBot 4.11 brings a major architectural update: bots can react to platform events, Agent runners are now plugins, and the WebUI adds a Workspace Assistant.

### ⚡ 事件驱动智能体 / Event-Based Agents (EBA) - Authored by @RockChinQ @huanghuoguoguo @wangcham @dadachann

除消息外，入群、退群、撤回、表情回应、卡片点击等平台事件现在也可以触发处理。13 个平台适配器已基于 EBA 架构重写，可在「事件路由」中将事件分发给 Pipeline、Agent 或插件处理器。
Beyond messages, platform events such as joins, leaves, recalls, reactions and card clicks can now trigger processing. 13 adapters have been rebuilt on EBA, and **Event Routing** dispatches each event to a Pipeline, an Agent or a plugin processor.

<img width="1058" height="1002" alt="Event Routing" src="https://github.com/langbot-app/LangBot/releases/download/v4.11.0/eba-event-routing.png" />

<img width="1442" height="864" alt="Create event processor" src="https://github.com/langbot-app/LangBot/releases/download/v4.11.0/eba-create-processor.png" />

- **场景化路由 / Scenario routes**：按欢迎新成员、处理成员离开等常用场景创建路由 / Create routes from common scenarios such as welcoming new members
- **三类处理器 / Three processor types**：Pipeline、Agent、插件事件处理器可组合使用 / Pipelines, Agents and plugin Event Processors can be combined
- **事件调试器 / Event debugger**：表单编辑事件数据，查看运行日志与执行详情 / Edit event payloads in a form and inspect run logs and details
- **平台增强 / Platform upgrades**：Slack Socket Mode、钉钉卡片交互、微信“正在输入”、OneBot WebSocket 等 / Slack Socket Mode, DingTalk card interactions, WeChat typing indicator, OneBot WebSocket and more

### 🧩 AgentRunner 插件化 / Pluginized AgentRunner - Authored by @huanghuoguoguo @RockChinQ @fdc310

LocalAgent、Dify、Coze、n8n 等内置运行器已迁出主程序，改为扩展市场中的官方插件，并新增 Codex、Claude Code、ACP 等运行器。运行器可独立更新、按需安装，开发者也可基于 AgentRunner Protocol v1 编写自己的运行器。
Built-in runners such as LocalAgent, Dify, Coze and n8n have moved out of the core into official Marketplace plugins, alongside new runners such as Codex, Claude Code and ACP. Runners are updated independently and installed on demand, and developers can write their own on AgentRunner Protocol v1.

<img width="1418" height="1124" alt="AgentRunner plugins in Marketplace" src="https://github.com/langbot-app/LangBot/releases/download/v4.11.0/runner-plugins-marketplace.png" />

- **一键迁移 / One-click migration**：自动安装所需插件，原配置自动备份 / Auto-installs required plugins and backs up your configuration
- **权限可控 / Scoped authorization**：运行器只能调用当前上下文授权的工具与平台 API / Runners only reach tools and platform APIs authorized for the current context
- **插件认证 / Plugin certification**：扩展市场展示认证徽章，主程序校验插件签名 / Certification badges in the Marketplace and signature verification in the core

### 🤖 工作区助手 / Workspace Assistant - Authored by @huanghuoguoguo @RockChinQ @dadachann

WebUI 新增工作区助手，可通过对话查询资源、创建并配置流水线与知识库，所有写操作需确认后才执行。
The WebUI adds a Workspace Assistant that inspects resources and sets up Pipelines and knowledge bases through chat; every write runs only after confirmation.

### 🔐 更多亮点 / More Highlights

- **Passkey 与两步验证 / Passkeys & 2FA**：WebAuthn 登录（@BiFangKNT）与 TOTP 两步验证（@TyperBody）/ WebAuthn sign-in and TOTP two-factor auth
- **操作日志 / Operation trace**：记录每次操作改了什么，支持完整性校验（@TyperBody）/ See what every operation changed, with integrity checks
- **监控升级 / Monitoring**：统一执行视图、工具调用追踪、实时处理中面板（@dadachann）/ Unified execution views, tool-call tracing and a live in-flight dock
- **媒体缓存 / Media cache**：媒体按内容去重存储，减少 `langbot.db` 膨胀（@BiFangKNT）/ Content-addressed media storage reduces `langbot.db` growth
- **扩展市场 / Marketplace**：已安装/可更新状态与实时安装进度（@TyperBody）/ Installed & update states and live install progress
- **CLI 与诊断 / CLI & diagnostics**：用 `lbctl` 和 API Key 管理与诊断实例（@huanghuoguoguo）/ Manage and diagnose instances with `lbctl` and API keys
- **新手引导 / Onboarding**：侧边栏引导与场景化机器人创建向导（@fdc310 @huanghuoguoguo）/ Sidebar tour and a scenario-based bot setup wizard
- **模型 / Models**：LangBot Models 价格展示与收藏模型（@RockChinQ @dadachann）/ LangBot Models pricing and starred models
- **飞牛 fnOS**：应用包全程以非 root 运行（@sheetung）/ The fnOS package now runs entirely without root

### 👍 Other Improvements / 细节优化

- 修复企业微信智能机器人空气泡与流式提前关闭 / Fix empty bubbles and early stream close in WeCom AI Bot by @Nikarhub
- 修正 SeekDB 向量适配器语义 / Correct SeekDB vector adapter semantics by @huanghuoguoguo
- 知识库导入中断后保留状态 / Retain interrupted ingestion state in knowledge bases by @RockChinQ
- 修复 PostgreSQL 下 Runner 执行，SQLite 启用 WAL / Fix Runner on PostgreSQL and enable SQLite WAL by @RockChinQ
- 扩展市场按指定版本安装插件 / Honor the requested Marketplace version on install by @RockChinQ
- 隐藏重复的连接模式控件 / Hide the duplicate connection-mode control by @fdc310
- 补充存储分析菜单图标 / Add the storage analysis menu icon by @Rapeter
- 补齐全部语言的 i18n 文案 / Complete i18n strings across all locales by @TyperBody @BiFangKNT
- 更新 TokenLab 品牌标识 / Refresh the TokenLab logo by @hedging8563

## 更新须知 / Update Notice

- **先备份 / Back up first**：升级前请备份 `data/` 目录或 PostgreSQL 数据库；建议从 v4.10.x 最新版升级。
  Back up `data/` or your PostgreSQL database; we recommend upgrading from the latest v4.10.x.
- **迁移流水线 / Migrate pipelines**：内置运行器已移除，升级后请在「流水线」页面完成迁移。迁移后将开始新会话；旧版自定义 Runner 需改写为[插件 Runner](https://langbot.app/docs/zh/plugin/dev/tutor)。详见[迁移说明](https://github.com/langbot-app/LangBot/blob/master/docs/pipeline-migration-config-map.zh-CN.md)。
  Built-in runners are removed — run the migration on the **Pipelines** page after upgrading. Migrated pipelines start fresh sessions; legacy custom runners must be rewritten as [plugin runners](https://langbot.app/docs/en/plugin/dev/tutor).
- **离线环境 / Offline**：选择「仅迁移数据」，再手动安装运行器插件。
  Choose **Data only**, then install runner plugins manually.
- **插件 SDK / Plugin SDK**：升级至 `langbot-plugin 0.7.x`，请更新已安装插件。
  Upgraded to `langbot-plugin 0.7.x`; please update installed plugins.
- **遥测 / Telemetry**：新增执行遥测，默认开启且不含消息内容，可通过 `space.disable_telemetry: true` 关闭（[数据收集政策](https://langbot.app/docs/zh/insight/data-collection-policy)）。
  Execution telemetry is on by default without message content; opt out with `space.disable_telemetry: true` ([policy](https://langbot.app/docs/en/insight/data-collection-policy)).
- **配置变更 / Config**：新增 `media_cache`、`api.host`、`runner.admin_plugins`；移除 `force_box_session_id_template`。
  Added `media_cache`, `api.host`, `runner.admin_plugins`; removed `force_box_session_id_template`.

<hr/>

## What's Changed
* fix(runner): align SDK pin and complete real runtime verification by @dadachann in https://github.com/langbot-app/LangBot/pull/2525
* fix(ci): recover immutable release PyPI builds by @dadachann in https://github.com/langbot-app/LangBot/pull/2532
* docs(space): document Runner usage recommendations by @dadachann in https://github.com/langbot-app/LangBot/pull/2533
* feat(auth): support passkey (webauthn) login and credential management by @BiFangKNT in https://github.com/langbot-app/LangBot/pull/2530
* fix(i18n): complete passkey keys across all locale files by @BiFangKNT in https://github.com/langbot-app/LangBot/pull/2534
* fix(vector): correct SeekDB adapter semantics by @huanghuoguoguo in https://github.com/langbot-app/LangBot/pull/2536
* ci(discord): announce stable releases in the community by @dadachann in https://github.com/langbot-app/LangBot/pull/2539
* chore(brand): refresh TokenLab logo by @hedging8563 in https://github.com/langbot-app/LangBot/pull/2541
* Fnos packaging by @sheetung in https://github.com/langbot-app/LangBot/pull/2524
* docs(readme): remove retired public demo from all languages by @dadachann in https://github.com/langbot-app/LangBot/pull/2543
* feat(storage): 媒体内容寻址缓存（CAS）与监控 Base64 外部化剥离 (#2354) by @BiFangKNT in https://github.com/langbot-app/LangBot/pull/2544
* docs(readme): add LangBot Cloud deployment button by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2550
* docs(readme): add Cloud CTA text-link fallback by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2551
* Fnos privilege by @sheetung in https://github.com/langbot-app/LangBot/pull/2552
* feat(plugin): enforce certified archive admission by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2553
* fix(plugin): load certification key ring from env by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2554
* fix(plugin): honor requested marketplace version by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2555
* fix(rag): retain interrupted ingestion state and engine identity by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2556
* merge: synchronize master certification and document identity fixes into 4.11 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2557
* test(web): align bot form assertion with responsive grid layout by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2558
* feat(plugins): show installed state in marketplace and search install… by @TyperBody in https://github.com/langbot-app/LangBot/pull/2546
* fix(4.11): merge master and repair PostgreSQL Runner execution by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2560
* fix(agent): preserve configured prompts in debug runs by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2562
* fix(web): add storage analysis menu icon by @Rapeter in https://github.com/langbot-app/LangBot/pull/2559
* fix(wecombot): stop empty bubbles and premature stream close on blank final chunks by @Nikarhub in https://github.com/langbot-app/LangBot/pull/2561
* merge: integrate 4.11 into master by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2566
* feat(agent): prepare 4.11.x EBA and AgentRunner integration by @huanghuoguoguo in https://github.com/langbot-app/LangBot/pull/2277
* chore(deps): pin SDK 0.6.1 stable by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2572
* fix(migration): pin certified runner packages by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2573
* feat(web): add an in-process workspace assistant by @huanghuoguoguo in https://github.com/langbot-app/LangBot/pull/2549
* fix(web): add the assistant namespace to remaining locales by @TyperBody in https://github.com/langbot-app/LangBot/pull/2575
* feat(auth): add TOTP two-factor authentication by @TyperBody in https://github.com/langbot-app/LangBot/pull/2565
* fix(web): align i18n locale keys and ordering with en-US by @TyperBody in https://github.com/langbot-app/LangBot/pull/2576
* fix(plugin): keep certified marketplace packages installable on OSS by @TyperBody in https://github.com/langbot-app/LangBot/pull/2577
* feat(plugin): route certified installs to shared workers by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2578
* fix(plugin): backfill certified artifact digest by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2580
* fix(plugin): pin runtime SDK 0.6.4 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2581
* fix(plugin): pin runtime SDK 0.6.5 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2583
* fix(plugin): pin runtime SDK 0.6.6 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2584
* fix(plugin): pin runtime SDK 0.6.7 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2585
* chore(runtime): pin plugin SDK 0.6.8 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2586
* chore(runtime): pin plugin SDK 0.6.9 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2587
* chore(runtime): pin plugin SDK 0.6.10 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2588
* chore(runtime): pin plugin SDK 0.6.11 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2589
* chore(runtime): pin plugin SDK 0.6.12 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2590
* chore(runtime): pin plugin SDK 0.6.13 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2591
* fix(plugin): pin SDK 0.6.14 and bound shared readiness by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2593
* fix(plugin): bound shared install readiness by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2594
* docs(agent): document standalone LangBot CLI by @huanghuoguoguo in https://github.com/langbot-app/LangBot/pull/2571
* fix(plugin): pin SDK 0.6.15 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2595
* chore(plugin): pin SDK 0.6.16 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2596
* chore(plugin): pin SDK 0.6.17 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2597
* chore(plugin): pin SDK 0.6.18 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2598
* chore(plugin): pin SDK 0.6.19 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2599
* chore(plugin): pin SDK 0.6.20 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2600
* feat(api): support CLI diagnostics and Pipeline runs by @huanghuoguoguo in https://github.com/langbot-app/LangBot/pull/2601
* Feat/workspace operation traceability by @TyperBody in https://github.com/langbot-app/LangBot/pull/2579
* feat: add beta environment banner by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2605
* feat: stateless certified shared worker by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2606
* fix(plugin): allow unsigned Cloud plugins as dedicated by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2609
* fix(certification): align certified sharing, unsigned dedicated, and docs by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2610
* fix(i18n): complete beta banner translations by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2613
* feat(market): certified plugin checks and explanatory tooltips by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2615
* refactor: remove Beta diagnostics by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2616
* feat: bounded execution telemetry for all processing modes by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2617
* fix: document telemetry opt-out and silence delivery failures by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2618
* docs: move telemetry configuration out of READMEs by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2619
* chore(deps): upgrade plugin SDK to 0.7.7 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2622
* fix(ci): resolve frontend formatting failures by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2623
* chore(release): prepare 4.11.0-beta.6 with SDK 0.7.9 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2624
* fix(plugin): upgrade SDK to 0.7.10 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2625
* chore(release): LangBot 4.11.0-rc.1 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2638
* fix(web): hide duplicate connection mode control by @fdc310 in https://github.com/langbot-app/LangBot/pull/2621
* docs: contextual Cloud recommendations in deployment skill by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2643
* docs: link deployment skill to canonical agent entry by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2644
* docs: canonical agent entry in deployment skill by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2645
* feat: complete 4.11 platform and monitoring acceptance fixes by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2646
* release: 4.11.0-rc.2 with SDK 0.7.11rc2 by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2647
* fix: Cloud inflight tenant scope and mobile dashboard layout by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2650
* fix: wizard preview TLS, metadata overflow and inactive bot logs by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2651
* fix: telemetry field limits and rejected batch acknowledgements by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2652
* fix(onebot): validate WebSocket protocol with independent mock peer by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2653
* chore: 4.11.0-rc.3 worker monitoring and recovery SDK by @RockChinQ in https://github.com/langbot-app/LangBot/pull/2655

## Contributors

Thanks to everyone who contributed to this release / 感谢所有为本版本做出贡献的开发者：

@RockChinQ @dadachann @huanghuoguoguo @TyperBody @BiFangKNT @fdc310 @wangcham @sheetung @Nikarhub @Rapeter @hedging8563

## New Contributors
* @Rapeter made their first contribution in https://github.com/langbot-app/LangBot/pull/2559
* @Nikarhub made their first contribution in https://github.com/langbot-app/LangBot/pull/2561

**Full Changelog**: https://github.com/langbot-app/LangBot/compare/v4.10.11...v4.11.0

---

> **Source** [langbot-app/LangBot](https://github.com/langbot-app/LangBot) · `v4.11.0` · 2026-10-14 · [upstream release](https://github.com/langbot-app/LangBot/releases/tag/v4.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
