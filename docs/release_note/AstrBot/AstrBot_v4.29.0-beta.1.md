---
title: "AstrBot v4.29.0-beta.1"
project: "AstrBot"
repo: "AstrBotDevs/AstrBot"
tag: "v4.29.0-beta.1"
version: "v4.29.0-beta.1"
published: "2026-10-01"
type: "pre"
lang: "en"
summary: "This prerelease includes changes since v4.28.0 (commit a412146401426c0cdff8bbefb8627a03da519da8)."
---

# AstrBot v4.29.0-beta.1

## [4.29.0-beta.1] - 2026-10-01

This prerelease includes changes since **v4.28.0** (commit `a412146401426c0cdff8bbefb8627a03da519da8`).

### Major Additions

- Computer Use: Added OS-specific sandbox support for the local execution environment, available on macOS with Seatbelt and Linux with bubblewrap only. (#9472)
- ChatUI: Added chat history and sidebar session pagination, persistent input drafts, per-session model selection, and input autofocus when switching projects. (#9667, #10279, #10247, #10301)
- ChatUI: Added provider source filters and sticky groups to model selection, plus search on the Skills and MCP pages. (#10084, #10217)
- WebUI: Added a workspace directory picker and update download progress in the desktop app. (#10222, #10227, #10050)
- Desktop: Added macOS frosted-glass effects to the WebUI sidebar and top bar. (#10222, #10227, #10050)
- Core: Added agent step budget reminders, migrated legacy limits, increased the default agent step limit, and extended shell session waits. (#10131, #10133)
- Core: Added the `x-astrbot-conversation-id` conversation ID header to provider requests. (#10218, #10237)

### Major Optimizations

- Refined the sidebar and top bar, reducing their vertical footprint to display more information. (#10222, #10227, #10050)
- Improved conversation data previews on the Data & Logs page. (#10021, #10020, #10023, #10108)
- Added resumable chunked uploads with bounded memory use, compressed dashboard static assets, and reduced bundled font and diagram assets. (#10123, #10187, #10034)
- Improved streamed response and reasoning panel scrolling, preserved scroll position while loading history, and coalesced automatic scrolling per animation frame. (#10219, #10221, #10243, #10253, #10257, #10271)
- Improved model input image preparation, preserved image geometry, limited encoded image sizes, and explained animation-to-frame conversion to models. (#9703, #10071, #10120, #10119)
- Batched console log rendering, optimized provider dialogs and trace updates, and removed unnecessary session and rate-limit work. (#9990, #10007, #10270, #10273, #10274)

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

## 中文

本预发布版本包含自 **v4.28.0**（提交 `a412146401426c0cdff8bbefb8627a03da519da8`）以来的变更。

### 主要新增

- 电脑使用能力: 新增适用于本地执行环境(local)模式下按适配操作系统的沙箱环境(仅支持 macOS seatbelt 和 Linux bwrap 环境)。 (#9472)
- ChatUI: 新增聊天历史和侧边栏会话分页、输入草稿持久化、按会话记忆所选模型，以及切换项目时自动聚焦输入框。 (#9667, #10279, #10247, #10301)
- ChatUI: 模型选择器新增来源筛选和吸顶分组，Skills 与 MCP 页面新增搜索。 (#10084, #10217)
- WebUI: 桌面端新增工作区目录选择器及更新下载进度。 (#10222, #10227, #10050)
- 桌面端: WebUI 侧边栏和顶栏适配 macOS 的毛玻璃效果。 (#10222, #10227, #10050)
- Core: 新增 Agent 剩余步数提醒，迁移旧版步数限制，提高默认步数上限，并延长 Shell 会话等待时间。 (#10131, #10133)
- Core: 为模型提供商请求新增 `x-astrbot-conversation-id` 会话 ID 请求头。 (#10218, #10237)

### 主要优化

- 侧边栏和顶栏优化，缩短高度以增加信息密集度。 (#10222, #10227, #10050)
- 优化「数据与日志」页对话数据预览的效果等。 (#10021, #10020, #10023, #10108)
- 支持可续传的分块上传并控制内存占用，压缩 WebUI 静态资源，减少字体与图表资源体积。 (#10123, #10187, #10034)
- 优化流式回复和推理面板的滚动体验，加载历史时保持滚动位置，并按动画帧合并自动滚动操作。 (#10219, #10221, #10243, #10253, #10257, #10271)
- 优化模型输入图片处理，保留图片几何比例、限制编码后体积，并向模型说明动图已转换为多帧拼图。 (#9703, #10071, #10120, #10119)
- 批量渲染控制台日志，优化模型提供商弹窗和追踪记录更新，减少会话查询及限流关闭时的额外开销。 (#9990, #10007, #10270, #10273, #10274)

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

[4.29.0-beta.1]: https://github.com/AstrBotDevs/AstrBot/compare/v4.28.0...v4.29.0-beta.1

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

**Full Changelog**: https://github.com/AstrBotDevs/AstrBot/compare/v4.28.1...v4.29.0-beta.1

---

> **Source** [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) · `v4.29.0-beta.1` · 2026-10-01 · [upstream release](https://github.com/AstrBotDevs/AstrBot/releases/tag/v4.29.0-beta.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
