---
title: "AstrBot v4.29.0"
project: "AstrBot"
repo: "AstrBotDevs/AstrBot"
tag: "v4.29.0"
version: "v4.29.0"
published: "2026-10-14"
type: "minor"
lang: "en"
summary: "This release includes all changes from v4.29.0-beta.1 and v4.29.0-beta.2, plus changes since v4.29.0-beta.2. The full release range starts at v4.28.0."
---

# AstrBot v4.29.0

## [4.29.0] - 2026-10-14

This release includes all changes from **v4.29.0-beta.1** and **v4.29.0-beta.2**, plus changes since **v4.29.0-beta.2**. The full release range starts at **v4.28.0**.

### Major Additions

- Computer Use: Added OS-specific sandbox support for the local execution environment, available on macOS with Seatbelt and Linux with bubblewrap only. Please refer to: https://docs.astrbot.app/use/astrbot-agent-sandbox.html (#9472)
- ChatUI: Added chat history and sidebar session pagination, persistent input drafts, per-session model selection, and input autofocus when switching projects. (#9667, #10279, #10247, #10301)
- ChatUI: Added provider source filters and sticky groups to model selection, plus search on the Skills and MCP pages. (#10084, #10217)
- Text-to-image settings have **moved from Settings to Configuration Profiles → Extensions** and are now configured separately for each profile.
- Administrator and whitelist settings have moved from **Configuration Profiles → Platform** to **Configuration Profiles → Access Control**. (#10321)
- WebUI: Added a workspace directory picker and update download progress in the desktop app. (#10222, #10227, #10050)
- Desktop: Added macOS frosted-glass effects to the WebUI sidebar and top bar. (#10222, #10227, #10050)
- Core: Added agent step budget reminders, migrated legacy limits, increased the default agent step limit, and extended shell session waits. (#10131, #10133)
- Core: Added the `x-astrbot-conversation-id` conversation ID header to provider requests. (#10218, #10237)
- WebUI: Added model settings shortcuts beside selected models and in model/fallback menus. Changes save immediately for every configuration profile using that model. (#10321)
- WebUI: Added console log search and keyword highlighting, source badges for Skills, staged image previews in ChatUI, and remembered the last opened Data & Logs tab. (#10327, #10339, #10376, #10251)
- WebUI: Added configuration profile editing in a side drawer from the bot editor. (#10310)
- Docker: Included the `astrbot` CLI for password reset inside containers. (#10442)
- Logs: Added combined level, source, plugin, platform, and keyword filtering, an option to hide user-chat logs, and font-size controls from 8–16px (12px by default, in 2px steps). Plugin selectors show display names with IDs as subtitles. (#10514)

### Major Optimizations

- WebUI: Refined the sidebar and top bar, reducing their vertical footprint to display more information. (#10222, #10227, #10050)
- Improved conversation data previews on the Data & Logs page. (#10021, #10020, #10023, #10108)
- Added resumable chunked uploads with bounded memory use, compressed dashboard static assets, and reduced bundled font and diagram assets. (#10123, #10187, #10034)
- Improved streamed response and reasoning panel scrolling, preserved scroll position while loading history, and coalesced automatic scrolling per animation frame. (#10219, #10221, #10243, #10253, #10257, #10271)
- Improved model input image preparation, preserved image geometry, limited encoded image sizes, and explained animation-to-frame conversion to models. (#9703, #10071, #10120, #10119)
- Batched console log rendering, optimized provider dialogs and trace updates, and removed unnecessary session and rate-limit work. (#9990, #10007, #10270, #10273, #10274)
- WebUI: Significantly reduced initial loading overhead and improved loading speed by lazy-loading VAD, Monaco, translations, and ApexCharts, and enabling gzip responses. (#10413)
- WebUI: Kept content borders and corners fixed while scrolling, added 6px desktop right/bottom gaps, and pinned configuration/settings headers and section navigation while the content pane scrolls. (#10480)
- Computer Use: Clarified local permission access modes, kept execution and file access controls visible when local isolation is unavailable, and linked setup guidance to the consolidated Agent Sandbox guide. (#10444, #10445, #10487)
- Docs: Refreshed Chinese and English plugin and built-in AI guides with current workflows, troubleshooting, and localized screenshots; updated Slack and Lark/Feishu setup instructions. (#10487, #10353, #10400)
- Logs: Added structured source, plugin, platform, and category metadata for in-memory filtering. New logs follow automatically when scrolled to the bottom and preserve the reading position when viewing older entries. (#10514)
- Agent: Moved per-run scheduled-task context after conversation history to keep the system prompt stable and preserve prompt-cache reuse. (#10549)

### Major Fixes

- Restored the previous command behavior: `/reset` clears the current conversation context; `/new` creates and switches to a new conversation. Fixed persisted conversation deletion and history titles. (#10118, #10003, #9983)
- Fixed queued request history refresh, attachment preparation before session locking, and queued requests continuing after LLM processing is disabled. (#10238, #10209, #10234)
- Fixed WebChat side-thread model selection, proactive-agent model fallback, WebChat wake-prefix gating, and streamed fallback replies. (#10065, #10028, #10245, #10025)
- Fixed scheduled-agent failure reporting, context compression and plugin filters; preserved reminders after invalid edits, clarified task ownership, and increased cron misfire grace to 300 seconds. (#9987, #9992, #10163, #10075, #10104, #10183)
- Fixed OpenAI-compatible endpoint resolution, stacked SDK retries, thinking-tag parsing, Gemini narration history, Azure TTS client lifetimes, Xinference rerank error propagation, and emoji token estimates. (#10079, #9669, #10116, #10132, #10101, #10051, #10216)
- Fixed Lark private message delivery, QQ official mentions and C2C stream completion, OneBot file resolution, and excessive Telegram polling logs. (#10018, #9705, #10069, #10098, #10046)
- Fixed cleared Satori heartbeat/reconnect settings and WeChat Official Account timeout fields disabling expected safeguards. (#10248, #10229)
- Fixed plugin updates from URLs and files, Windows long-path plugin extraction, and default GitHub branch resolution. (#10053, #10193, #10080)
- Fixed web search parameter handling, knowledge-base URL rate limiting, literal escapes in file edits, image attachment lifetime and cleanup, and segmented-reply logging failures dropping responses. (#9979, #10015, #10112, #10042, #10090, #10231)
- Fixed datetime persistence across SQLModel upgrades and compared platform message history cutoffs in UTC. (#10211, #10246)
- Fixed stale desktop WebUI assets and served version detection, mobile drawer behavior, dark-mode icons and console contrast, hidden conversations, legacy icons, and statistics timers after unmount. (#9898, #10156, #10256, #10061, #10135, #10129, #10278, #10272)
- Agent: Stopping a session now stops its background agent work and prevents late main-agent wakeups. Cleaned up session waiters only once and kept async tool generators in the same task. (#10323, #10347, #10474)
- Agent: Warned when a background task result is not delivered to the user and avoided recording cron sends without a matching platform. (#10398, #10468)
- Core: Fell back promptly after failed context summaries, matched command group names as whole words, maintained one editable system default persona, and preserved child folders when deleting persona folders. (#10436, #10372, #10287, #10361)
- Providers: Preserved Anthropic tool calls with empty streamed input, merged custom server tools with registered tools, replaced the retired Gemini embedding default with `gemini-embedding-001`, and handled CRLF separators in Dify streams. (#10432, #10437, #10393, #10392)
- Images: Rejected unresolved and non-regular image references instead of fabricating local paths, retained pending-path handling for audio/video/files, and skipped invalid images during non-strict payload assembly. Added tolerance for oversized base64 payloads and long Windows paths. (#10434)
- Audio: Degraded unresolvable voice attachments without failing the turn, avoided blocking format probes, and closed FishAudio TTS clients after requests. (#10337, #10055, #10358)
- Platforms: Fixed UTF-16 offsets and case-insensitive bot mentions in Telegram, and left the Telegram token empty by default. Preserved Slack code blocks, quotes, lists, links, and mentions, and resolved remote Slack files before upload. Sent Discord video components as attachments and prevented self-reply loops. (#10367, #10399, #10365, #10380, #10447, #10448, #10355, #10423, #10425)
- WebUI: Enforced session ownership when sending chat messages, stored attachments under unique names, restored plugin README anchors, and corrected dark-mode log search and default-profile localization. (#10346, #10356, #10341, #10351, #10296)
- WebUI: Refreshed navigation and provider icons, corrected the configuration test-chat button theme color, and updated the plugin submission link and label. Reused logo tokens and refreshed expired platform caches. (#10304, #10332, #10309, #10471, #10294)
- Providers: Preserved complete Anthropic tool parameter schemas, including references and constraints, and rejected non-object root schemas. Reported Coze chat failures and incomplete streams, and handled Dify workflow errors, failed completion statuses, and streams ending without a successful completion event. (#10520, #10523, #10545)
- Platforms: Delivered Slack TTS audio with text fallback, included quoted Discord reply text in model requests, populated QQ official outbound reply references, and preserved Lark/Feishu rich-text titles and whitespace, including quoted messages. (#10496, #10452, #10489, #10543)
- ChatUI: Localized LLM request errors and restored playback and downloads for sent audio, video, and file messages. (#10478, #10483)
- WebUI: Preserved the remembered Data & Logs tab when leaving the workspace and kept the mobile sidebar bottom clear of browser controls. (#10498, #10512)
- WebUI: Distinguished plugin Views with localized titles and plugin metadata, kept plugin groups unique, and made plugin information accessible through a button on mobile. (#10502, #10519)
- WebUI: Filled missing translation keys and removed unused Russian translation entries. (#10505)

### Navigation and Configuration Changes

- Sidebar: Core entries are grouped under System; Personas, Knowledge Base, scheduled tasks, subagent orchestration, and plugin Views appear under Extensions. The version is displayed in the sidebar footer. (#10304, #10307)
- Configuration: Administrator and whitelist settings → **Access Control**; **Platform** → **Platforms & Messages**. (#10321)
- Configuration: **System Settings → Text-to-image rendering** → **Configuration Profiles → Extensions → Text-to-image rendering**. Each profile now has its own text-to-image settings. (#10306)
- Appearance: Removed the Customize Sidebar feature. (#10480)
- Docs: Improved the guides in the Usage section. (#10487)
- Logs: Top-row filters → the **Filters** sidebar; Core source label → **System**; the auto-scroll switch → automatic bottom following. Search, fullscreen, font-size controls, and Pip installation remain in the toolbar. (#10514)

### Build and Maintenance

- Migrated dashboard pnpm overrides and dependency build permissions into workspace configuration, and added docs workspace configuration for pnpm 11 compatibility. (#10541)
- Added a dashboard translation-key check to CI and updated the CodeQL GitHub Action. (#10505, #10552)

## 中文

本正式版本包含 **v4.29.0-beta.1**、**v4.29.0-beta.2** 的全部变更，以及 **v4.29.0-beta.2** 之后的变更；完整变更范围从 **v4.28.0** 开始。

### 主要新增

- 电脑使用：本地执行环境新增按操作系统适配的沙箱隔离，目前支持 macOS Seatbelt 和 Linux bubblewrap。参考：https://docs.astrbot.app/use/astrbot-agent-sandbox.html (#9472)
- ChatUI: 新增聊天历史和侧边栏会话分页、输入草稿持久化、按会话记忆所选模型，以及切换项目时自动聚焦输入框。 (#9667, #10279, #10247, #10301)
- ChatUI: 模型选择器新增来源筛选和吸顶分组，Skills 与 MCP 页面新增搜索。 (#10084, #10217)
- 现在 “文本转图片” 相关配置**已从 “设置” 迁移到 “配置文件” -> “扩展功能”**，并按配置文件隔离。
- 现在 “管理员”、“白名单” 相关配置已从  “配置文件” -> “平台” 迁移到 “配置文件” -> “访问控制”。 (#10321)
- 日志：支持按级别、来源、插件、平台和关键词组合筛选，可隐藏用户对话日志；新增 8–16px 字号控制，默认 12px，按 2px 步长调整。插件筛选器显示插件名称，并以 ID 作为副标题。 (#10514)
- 桌面端: WebUI 侧边栏和顶栏适配 macOS 的毛玻璃效果。 (#10222, #10227, #10050)
- Core: 新增 Agent 剩余步数提醒，迁移旧版步数限制，提高默认步数上限，并延长 Shell 会话等待时间。 (#10131, #10133)
- Core: 为模型提供商请求新增 `x-astrbot-conversation-id` 会话 ID 请求头。 (#10218, #10237)
- WebUI：模型选择器旁及模型、回退模型菜单内新增设置入口，修改后立即影响引用该模型的所有配置文件。 (#10321)
- WebUI：新增控制台日志搜索与关键词高亮、Skills 来源标识、ChatUI 待发送图片预览，并记住「数据与日志」页上次打开的标签。 (#10327, #10339, #10376, #10251)
- WebUI：支持在机器人编辑器的侧边抽屉中编辑配置文件。 (#10310)
- Docker：镜像内包含 `astrbot` CLI，可在容器中重置密码。 (#10442)
- WebUI: 桌面端新增工作区目录选择器及更新下载进度。 (#10222, #10227, #10050)

### 主要优化

- WebUI 侧边栏和顶栏优化，缩短高度以增加信息密集度。 (#10222, #10227, #10050)
- 优化「数据与日志」页的对话数据预览。 (#10021, #10020, #10023, #10108)
- 支持可续传的分块上传并控制内存占用，压缩 WebUI 静态资源，减少字体与图表资源体积。 (#10123, #10187, #10034)
- 优化流式回复和推理面板的滚动体验，加载历史时保持滚动位置，并按动画帧合并自动滚动操作。 (#10219, #10221, #10243, #10253, #10257, #10271)
- 优化模型输入图片处理，保留图片几何比例、限制编码后体积，并向模型说明动图已转换为多帧拼图。 (#9703, #10071, #10120, #10119)
- 批量渲染控制台日志，优化模型提供商弹窗和追踪记录更新，减少会话查询及限流关闭时的额外开销。 (#9990, #10007, #10270, #10273, #10274)
- WebUI：延迟加载 VAD、Monaco、多语言资源及 ApexCharts，并启用 gzip 响应，大幅降低首屏加载开销，提高加载速度。 (#10413)
- WebUI：滚动时固定内容卡片边框与圆角，桌面端右侧和底部各保留 6px 间隔；配置页和设置页固定顶部及分区导航，仅滚动内容区域。 (#10480)
- 电脑使用：明确本地权限访问模式，在本地隔离不可用时继续显示执行与文件访问控制，并通过设置引导弹窗链接到整合后的 Agent 沙箱指南。 (#10444, #10445, #10487)
- 文档：更新中英文插件及内置 AI 指南，补充当前操作流程、故障排查与本地化截图；更新 Slack 和飞书配置说明。 (#10487, #10353, #10400)
- 日志：增加结构化的来源、插件、平台和分类信息，用于内存日志筛选；滚动到底部时自动跟随新日志，上翻查看旧日志时保持阅读位置。 (#10514)
- Agent：将每次运行的定时任务上下文移至会话历史之后，保持系统提示词稳定，提高提示词缓存复用率。 (#10549)

### 主要修复

- 恢复老版本的命令语义：`/reset` 清空当前会话上下文，`/new` 创建并切换到新会话；修复持久化会话删除和历史标题显示。 (#10118, #10003, #9983)
- 修复排队请求的历史刷新、会话锁前的附件准备，以及关闭 LLM 处理后排队请求仍继续执行的问题。 (#10238, #10209, #10234)
- 修复 WebChat 子线程的模型选择、主动 Agent 的模型回退、WebChat 唤醒前缀限制，以及流式回退回复丢失。 (#10065, #10028, #10245, #10025)
- 修复定时 Agent 的失败记录、上下文压缩和插件过滤；无效编辑不再丢失提醒，明确任务归属，并将错过调度的宽限时间延长至 300 秒。 (#9987, #9992, #10163, #10075, #10104, #10183)
- 修复 OpenAI 兼容接口地址解析、SDK 重试叠加、思考标签解析、Gemini 工具调用前文本历史、Azure TTS 客户端生命周期、Xinference 重排错误传递及表情 token 估算。 (#10079, #9669, #10116, #10132, #10101, #10051, #10216)
- 修复飞书私聊消息投递、QQ 官方机器人群聊提及和私聊流式结束帧、OneBot 文件解析，以及 Telegram 轮询日志过多的问题。 (#10018, #9705, #10069, #10098, #10046)
- 修复清空 Satori 心跳/重连配置和微信公众号超时配置后导致相应保护失效的问题。 (#10248, #10229)
- 修复通过 URL 和文件更新插件、Windows 长路径插件解压，以及 GitHub 仓库默认分支解析。 (#10053, #10193, #10080)
- 修复网页搜索参数处理、知识库 URL 清理限流、文件编辑中的字面转义字符、图片附件生命周期与清理，以及分段回复日志失败导致回复丢失的问题。 (#9979, #10015, #10112, #10042, #10090, #10231)
- 修复 SQLModel 升级后的日期时间持久化，并统一使用 UTC 比较平台消息历史的截止时间。 (#10211, #10246)
- 修复桌面端过期 WebUI 资源及版本检测、移动端抽屉行为、深色模式图标和控制台对比度、隐藏会话、旧版图标，以及统计组件卸载后仍启动定时器的问题。 (#9898, #10156, #10256, #10061, #10135, #10129, #10278, #10272)
- Agent：停止会话时同步停止后台 Agent 工作，避免稍后重新唤醒主 Agent；会话等待器仅清理一次，异步工具生成器始终在同一任务中执行。 (#10323, #10347, #10474)
- Agent：后台任务结果未发送给用户时提供提示；不存在匹配平台时不再记录 cron 发送成功。 (#10398, #10468)
- Core：上下文摘要失败后及时回退，命令组名称按完整单词匹配，保留唯一可编辑的系统默认人格，并在删除人格文件夹时保留子文件夹。 (#10436, #10372, #10287, #10361)
- 模型提供商：保留流式输入为空的 Anthropic 工具调用，将自定义服务端工具与已注册工具合并，将退役的 Gemini 默认嵌入模型替换为 `gemini-embedding-001`，并兼容 Dify 流式响应的 CRLF 分隔符。 (#10432, #10437, #10393, #10392)
- 图片：无法解析或指向非普通文件的图片引用不再伪装成本地路径；保留音频、视频和文件的待生成路径行为，非严格模式组装请求时跳过无效图片，并兼容超长 base64 数据及 Windows 长路径。 (#10434)
- 音频：无法解析的语音附件不再导致整轮请求失败，音频格式探测不再阻塞，并在请求后关闭 FishAudio TTS 客户端。 (#10337, #10055, #10358)
- 消息平台：修复 Telegram 提及的 UTF-16 偏移与大小写匹配，默认留空机器人令牌；保留 Slack 代码块、引用、列表、链接及用户提及，上传前解析远程文件；Discord 视频组件按附件发送，并避免机器人自回复循环。 (#10367, #10399, #10365, #10380, #10447, #10448, #10355, #10423, #10425)
- WebUI：发送聊天消息时校验会话归属，附件使用唯一文件名，恢复插件 README 锚点跳转，并修复深色模式日志搜索及默认配置文件名称的本地化。 (#10346, #10356, #10341, #10351, #10296)
- WebUI：更新导航及模型提供商图标，修正配置试聊按钮主题色，更新插件提交入口及文案；复用 logo 令牌并刷新过期的平台缓存。 (#10304, #10332, #10309, #10471, #10294)
- 模型提供商：完整保留 Anthropic 工具参数 Schema 的引用及约束，并拒绝非对象根类型；正确报告 Coze 聊天失败和未完成的流式响应；处理 Dify 工作流错误、失败的结束状态及缺少成功结束事件的响应流。 (#10520, #10523, #10545)
- 消息平台：Slack 支持发送 TTS 音频并在失败时回退为文本；Discord 将引用回复的文本纳入模型请求；QQ 官方机器人补齐出站引用回复信息；飞书保留富文本标题和空白格式，包括引用消息。 (#10496, #10452, #10489, #10543)
- ChatUI：本地化 LLM 请求错误提示，恢复已发送音频、视频及文件的播放与下载。 (#10478, #10483)
- WebUI：离开工作区后仍保留「数据与日志」页上次打开的标签；避免移动端浏览器控件遮挡侧边栏底部。 (#10498, #10512)
- WebUI：通过本地化标题和插件元信息区分插件视图，保证插件分组标识唯一，并在移动端提供按钮查看插件信息。 (#10502, #10519)
- WebUI：补齐缺失的翻译键，移除未使用的俄语翻译条目。 (#10505)

### 导航与配置迁移

- 侧边栏：核心入口归入「系统」；人格、知识库、定时任务、子 Agent 编排及插件视图归入「扩展功能」，版本号移至侧边栏底部。 (#10304, #10307)
- 配置：管理员、白名单配置 → **访问控制** 分区；**平台** → **平台与消息**。 (#10321)
- 配置：**系统设置 → 文本转图片渲染** → **配置文件 → 扩展功能 → 文本转图片渲染**，文转图配置按配置文件隔离。 (#10306)
- 外观：移除「自定义侧边栏」功能。 (#10480)
- 文档：完善「使用」部分的各项指南。 (#10487)
- 日志：顶部筛选项 → **过滤器** 侧栏；Core 来源标签 → **系统**；「自动滚动」开关 → 滚动到底部后自动跟随。搜索、全屏、字号调整及安装 Pip 库入口保留在工具栏。 (#10514)

### 构建与维护

- 将 WebUI 的 pnpm 依赖覆盖与构建权限迁移至工作区配置，并为文档添加工作区配置，以兼容 pnpm 11。 (#10541)
- 在 CI 中新增 WebUI 翻译键检查，并更新 CodeQL GitHub Action。 (#10505, #10552)

**Full Changelog**: https://github.com/AstrBotDevs/AstrBot/compare/v4.28.0...v4.29.0

**Changes since beta.2**: https://github.com/AstrBotDevs/AstrBot/compare/v4.29.0-beta.2...v4.29.0

## What's Changed
* feat: add role-based Local computer permissions by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/9472
* Fix:local sandbox policy feedback by @RC-CHN in https://github.com/AstrBotDevs/AstrBot/pull/10096
* chore(deps): bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/AstrBotDevs/AstrBot/pull/10088
* docs: sync guides with current WebUI navigation by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10093
* fix(cron): say who owns a task instead of returning an empty list by @Pleiades1726 in https://github.com/AstrBotDevs/AstrBot/pull/10104
* feat: improve conversation data previews by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10108
* fix: tell the model when an animation becomes a frame montage by @Pleiades1726 in https://github.com/AstrBotDevs/AstrBot/pull/10119
* fix(provider): 关闭 OpenAI SDK 内建重试，避免与 AstrBot 重试层叠加导致请求数翻倍 | Disable OpenAI SDK built-in retries to prevent request multiplication from stacked retry layers by @SweetenedSuzuka in https://github.com/AstrBotDevs/AstrBot/pull/9669
* fix: bound model input images below 512 KiB by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10120
* fix(dashboard): bound upload memory and add resumable chunked uploads by @RC-CHN in https://github.com/AstrBotDevs/AstrBot/pull/10123
* fix(dashboard): drop stale exclude_ids hardcode hiding conversations by @RC-CHN in https://github.com/AstrBotDevs/AstrBot/pull/10129
* feat: extend shell session waits and raise default agent step limit by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10131
* feat: add agent step budget reminders and migrate legacy limits by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10133
* fix: keep Gemini narration streamed before a tool call in history by @Anfyya in https://github.com/AstrBotDevs/AstrBot/pull/10132
* fix: serialize Azure TTS backend client lifetimes by @xiongyuyang in https://github.com/AstrBotDevs/AstrBot/pull/10101
* fix: propagate Xinference rerank failures instead of returning empty results by @he-yufeng in https://github.com/AstrBotDevs/AstrBot/pull/10051
* fix(tools): keep literal escape sequences when editing a file by @L4XB in https://github.com/AstrBotDevs/AstrBot/pull/10112
* fix: preserve scheduled reminders when an edit is invalid by @beemines in https://github.com/AstrBotDevs/AstrBot/pull/10075
* fix: use GitHub HEAD when repository branch is unspecified by @iona-s in https://github.com/AstrBotDevs/AstrBot/pull/10080
* fix(provider): recognize thinking tags in compatible completions by @konodiodaaaaa1 in https://github.com/AstrBotDevs/AstrBot/pull/10116
* fix(dashboard): restore readable text and switch contrast in fullscreen console by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10135
* docs: four env vars control the dashboard bind address, none of them documented by @xizhuomengcontin in https://github.com/AstrBotDevs/AstrBot/pull/10095
* fix: resolve each OneBot file segment by its own ID by @xiongyuyang in https://github.com/AstrBotDevs/AstrBot/pull/10098
* fix: clean up invalid materialized images by @kilisamemarisaaa in https://github.com/AstrBotDevs/AstrBot/pull/10090
* fix: move local network policy notice into system prompts by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10134
* docs: explain HTTP proxy address when AstrBot runs in Docker by @w1ndys in https://github.com/AstrBotDevs/AstrBot/pull/10162
* fix: respect session plugin filters in cron agents by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10163
* fix: separate reset and new conversation semantics by @w31r4 in https://github.com/AstrBotDevs/AstrBot/pull/10118
* fix: read WebUI versions from the served asset directory by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10156
* fix: preserve datetime storage across SQLModel upgrades by @RC-CHN in https://github.com/AstrBotDevs/AstrBot/pull/10211
* feat: gzip dashboard static js, css, and html by @w1ndys in https://github.com/AstrBotDevs/AstrBot/pull/10187
* fix(chatui): preserve scroll position while loading history by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10219
* fix(chatui): auto-scroll reasoning activity panel by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10221
* feat: add conversation id provider header by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10218
* feat: add desktop workspace directory picker by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10222
* fix(chatui): respect reasoning panel scroll intent by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10243
* fix(agent): exempt WebChat from provider wake prefix gating by @EterUltimate in https://github.com/AstrBotDevs/AstrBot/pull/10245
* fix: refresh queued conversation history under the session lock by @PeiPei233 in https://github.com/AstrBotDevs/AstrBot/pull/10238
* feat: forward extra_user_content_parts through Context.tool_loop_agent by @hypxtmc in https://github.com/AstrBotDevs/AstrBot/pull/10237
* fix(weixin_oc): keep a cleared timeout field from disabling the HTTP timeout by @Lesereingrape in https://github.com/AstrBotDevs/AstrBot/pull/10229
* fix: prepare file attachments before session lock by @lorenzozanee in https://github.com/AstrBotDevs/AstrBot/pull/10209
* fix(respond): keep an unusable segmented-reply log base from dropping the reply by @Lesereingrape in https://github.com/AstrBotDevs/AstrBot/pull/10231
* fix(core): recheck LLM status after session lock by @kilisamemarisaaa in https://github.com/AstrBotDevs/AstrBot/pull/10234
* fix: estimate emoji token cost above the plain text rate by @jamalkamaladdin in https://github.com/AstrBotDevs/AstrBot/pull/10216
* fix: increase cron misfire grace time to 300 seconds by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10183
* chore(deps): bump the github-actions group with 4 updates by @dependabot[bot] in https://github.com/AstrBotDevs/AstrBot/pull/10184
* feat: persist chat input drafts by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10247
* fix(chatui): prevent history scroll rebound by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10253
* feat(dashboard): add search to Skills and MCP pages by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10217
* feat(dashboard): add native macOS desktop window chrome by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10227
* fix(dashboard): address desktop chrome follow-up regressions by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10256
* fix: compare platform message history cutoff in UTC by @ping1999 in https://github.com/AstrBotDevs/AstrBot/pull/10246
* fix(chatui): preserve auto-scroll during streamed updates by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10257
* chore: bump version to 4.28.2 by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10258
* fix(platform): keep the Satori heartbeat and reconnect delays from being disabled by a cleared field by @Lesereingrape in https://github.com/AstrBotDevs/AstrBot/pull/10248
* fix(dashboard): fix dark mode icons and platform template order by @momo-OwO-qwq in https://github.com/AstrBotDevs/AstrBot/pull/10061
* fix(qqofficial): restore @ mentions in group messages by @ztzpro in https://github.com/AstrBotDevs/AstrBot/pull/9705
* perf: skip state allocation when rate limiting is disabled by @RC-CHN in https://github.com/AstrBotDevs/AstrBot/pull/10270
* perf(chatui): coalesce automatic scrolling per animation frame by @RC-CHN in https://github.com/AstrBotDevs/AstrBot/pull/10271
* fix(stats): prevent timers from starting after unmount by @RC-CHN in https://github.com/AstrBotDevs/AstrBot/pull/10272
* perf(session): skip unused alias lookup when listing rules by @RC-CHN in https://github.com/AstrBotDevs/AstrBot/pull/10273
* perf(trace): sort records only for updated spans by @RC-CHN in https://github.com/AstrBotDevs/AstrBot/pull/10274
* fix: support Windows long paths during plugin archive extraction by @Heximiao in https://github.com/AstrBotDevs/AstrBot/pull/10193
* docs: rename dev QQ group to chit-chat group and add community email by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10282
* fix: update remaining legacy AstrBot icons by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10278
* feat(dashboard): paginate sidebar chat sessions by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10279
* chore(deps): bump github/codeql-action from 4.38.1 to 4.38.2 in the github-actions group by @dependabot[bot] in https://github.com/AstrBotDevs/AstrBot/pull/10265
* docs: add slider key to plugin dev docs by @Waterwzy in https://github.com/AstrBotDevs/AstrBot/pull/10289
* fix: correct shields.io badge links in README files by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10290
* feat(chat): remember selected model per session and autofocus input on project switch by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10301
* chore: bump version to 4.29.0-beta.1 by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10302
* fix: replace DeepWiki badge with shields.io in README files by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10299
* feat(dashboard): move version to sidebar footer, align settings icon, refresh nav icons by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10304
* feat(config): move text-to-image settings into the config profile extension group by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10306
* feat(dashboard): regroup sidebar into labeled sections and rename plugin Pages to Views by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10307
* fix(dashboard): use the primary color for the config test-chat button by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10309
* feat(dashboard): edit config profiles from a side drawer in the bot editor by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10310
* test(dashboard): catch up with the plugin Pages to Views rename (#10307) by @he-yufeng in https://github.com/AstrBotDevs/AstrBot/pull/10319
* fix(webui): localize default config profile name in chat selector by @inertialobs in https://github.com/AstrBotDevs/AstrBot/pull/10296
* fix: reuse logo tokens and refresh expired platform cache by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10294
* feat(dashboard): add log search and keyword highlighting to console by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10327
* fix(agent): 停止会话时取消后台任务 by @Ars1027 in https://github.com/AstrBotDevs/AstrBot/pull/10323
* fix(webui): use colored DeepSeek provider icon by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10332
* fix: degrade unresolvable voice attachments instead of failing the turn by @JosephTian876 in https://github.com/AstrBotDevs/AstrBot/pull/10337
* fix(dashboard): enforce session ownership on chat send path by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10346
* feat(dashboard): show source badge for skills in skills list by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10339
* fix(dashboard): restore plugin README anchor navigation by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10341
* fix: clean up session waiter registrations only once by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10347
* fix(dashboard): align fullscreen log search with dark theme by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10351
* fix: keep a single editable system default persona by @inertialobs in https://github.com/AstrBotDevs/AstrBot/pull/10287
* fix: handle UTF-16 offsets in Telegram mentions by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10367
* fix: leave Telegram bot token empty by default by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10365
* fix: preserve child folders when deleting persona folders by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10361
* fix: close FishAudio TTS HTTP client after requests by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10358
* fix: resolve remote Slack file URLs before upload by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10355
* docs: update Slack setup steps and screenshot by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10353
* fix(dashboard): store chat attachments under unique names by @niansia in https://github.com/AstrBotDevs/AstrBot/pull/10356
* fix(telegram): match bot mentions case-insensitively by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10399
* fix: preserve Slack code block and quote text by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10380
* docs: sync Lark/Feishu guide with current capabilities and permissions by @heerxingen in https://github.com/AstrBotDevs/AstrBot/pull/10400
* feat(dashboard): preview staged chat input images in ChatUI by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10376
* fix(dify): handle CRLF event separators in streaming responses by @kilisamemarisaaa in https://github.com/AstrBotDevs/AstrBot/pull/10392
* fix: match command group names as whole words by @niansia in https://github.com/AstrBotDevs/AstrBot/pull/10372
* feat: remember the last opened tab on the Data & Logs page by @Sisyphbaous-DT-Project in https://github.com/AstrBotDevs/AstrBot/pull/10251
* perf(dashboard): reduce first-screen load (lazy-load VAD/Monaco/i18n/ApexCharts, gzip responses) by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10413
* fix(provider): replace retired gemini-embedding-exp-03-07 default with gemini-embedding-001 by @he-yufeng in https://github.com/AstrBotDevs/AstrBot/pull/10393
* fix: avoid blocking audio format probes by @zzz27578 in https://github.com/AstrBotDevs/AstrBot/pull/10055
* feat(dashboard): scoped path-token auth for plugin views and complete the views rename by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10415
* feat: ship astrbot CLI in Docker image for in-container password reset by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10442
* feat(dashboard): add distinct hints for local permission access modes by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10444
* fix(computer-tools): point permission-denied hints at the Capabilities tab by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10445
* test(computer-tools): expect the Capabilities path in permission error assertion by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10446
* fix(provider): keep Anthropic tool calls whose streamed input is empty by @niansia in https://github.com/AstrBotDevs/AstrBot/pull/10432
* fix: fall back from a failed context summary without long retries by @niansia in https://github.com/AstrBotDevs/AstrBot/pull/10436
* fix(provider): merge custom server tools with registered tools in Anthropic requests by @he-yufeng in https://github.com/AstrBotDevs/AstrBot/pull/10437
* fix: send Discord video components as attachments by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10423
* fix: preserve links and mentions in Slack lists by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10447
* fix: preserve outbound Slack user mentions by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10448
* fix: prevent Discord self-reply loops by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10425
* Fix/reject unresolvable image refs by @lingyun14beta in https://github.com/AstrBotDevs/AstrBot/pull/10434
* chore(github): add plugin submission links to issue template config by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10455
* fix: avoid recording cron sends without a matching platform by @zouyonghe in https://github.com/AstrBotDevs/AstrBot/pull/10468
* fix: warn when a background task result is not sent to the user by @niansia in https://github.com/AstrBotDevs/AstrBot/pull/10398
* fix: keep async tool generators in one task by @zouyonghe in https://github.com/AstrBotDevs/AstrBot/pull/10474
* fix(dashboard): keep content frame fixed and remove sidebar customization by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10480
* feat(dashboard): add model settings shortcuts and access control section by @anka-afk in https://github.com/AstrBotDevs/AstrBot/pull/10321
* chore(github): update plugin submission links in issue template config by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10472
* fix(dashboard): update plugin market submit link and label by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10471
* fix(dashboard): simplify local isolation and improve usage documentation by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10487
* chore: bump version to 4.29.0-beta.2 by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10493
* fix: deliver Slack TTS audio with text fallback by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10496
* fix: localize LLM request errors in ChatUI by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10478
* fix(dashboard): preserve data tab memory when leaving workspace by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10498
* fix: include Discord reply text in model requests by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10452
* fix: restore playback and downloads for sent WebChat media by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10483
* fix(qq_official): 出站引用回复未填充 message_reference by @td1336065617 in https://github.com/AstrBotDevs/AstrBot/pull/10489
* fix: disambiguate plugin view sidebar items by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10502
* fix(dashboard): stop the mobile browser UI covering the sidebar bottom by @DFGHJ43 in https://github.com/AstrBotDevs/AstrBot/pull/10512
* Fix/missing dashboard i18n keys, add a key check to CI, and drop orphaned ru-RU entries. by @lingyun14beta in https://github.com/AstrBotDevs/AstrBot/pull/10505
* fix(cron): preserve history cache by moving job context to user prompt by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10549
* fix: make plugin view info usable on mobile by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10519
* fix: support pnpm 11 and 12 dependency installation by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10541
* fix: preserve Lark rich text titles and whitespace by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10543
* feat: improve log filtering and console workspace by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10514
* chore(deps): bump github/codeql-action from 4.38.2 to 4.38.3 in the github-actions group by @dependabot[bot] in https://github.com/AstrBotDevs/AstrBot/pull/10552
* fix: preserve Anthropic tool parameter schemas by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10520
* fix: handle Coze chat failures and incomplete streams by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10523
* fix: handle Dify workflow stream errors by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10545
* chore: bump version to 4.29.0 by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10560

## New Contributors
* @Anfyya made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10132
* @xiongyuyang made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10101
* @iona-s made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10080
* @konodiodaaaaa1 made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10116
* @xizhuomengcontin made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10095
* @kilisamemarisaaa made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10090
* @w1ndys made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10162
* @hypxtmc made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10237
* @Lesereingrape made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10229
* @lorenzozanee made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10209
* @jamalkamaladdin made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10216
* @ping1999 made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10246
* @momo-OwO-qwq made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10061
* @Heximiao made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10193
* @inertialobs made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10296
* @niansia made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10356
* @td1336065617 made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10489

**Full Changelog**: https://github.com/AstrBotDevs/AstrBot/compare/v4.28.1...v4.29.0

---

> **Source** [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) · `v4.29.0` · 2026-10-14 · [upstream release](https://github.com/AstrBotDevs/AstrBot/releases/tag/v4.29.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
