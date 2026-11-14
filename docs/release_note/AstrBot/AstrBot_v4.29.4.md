---
title: "AstrBot v4.29.4"
project: "AstrBot"
repo: "AstrBotDevs/AstrBot"
tag: "v4.29.4"
version: "v4.29.4"
published: "2026-10-31"
type: "patch"
lang: "en"
---

# AstrBot v4.29.4

## [4.29.4] - 2026-10-31

### 新增

- 消息按钮：新增跨平台按钮组件，支持链接、消息发送和插件回调，并提供交互超时提示。各平台支持的按钮类型以文档为准。 (#9809)
- 决策模型：新增独立于聊天模型的 Decision Provider 和 System One 适配器，供插件调用结构化选择、布尔判断和评分。 (#10775)
- 网络搜索：接入 SerpApi Google News，支持新闻来源、作者、发布时间和 WebUI 引用展示。 (#10773)
- 会话与用户选择：统一会话来源选择弹窗，支持昵称搜索、平台标识、分页及 ID 复制；记录发送者信息并补全飞书、QQ 官方群名称。管理员配置入口由“添加更多 → 编辑列表项”改为“选择用户”；原会话下拉框和列表编辑入口统一为“选择会话来源”，“已知会话”改为“已记录的会话来源”。 (#10747)
- 机器人管理：删除机器人时可选择清理配置、定时任务、会话、消息记录、追踪和用量数据；默认保留对话与历史数据。 (#10761)
- 定时任务：支持查看群内共享任务列表，并允许管理员删除群任务。 (#10785)
- 网络设置：新增 PyPI 镜像选择器与测速功能。 (#10657)

### 优化与修复

- 稳定性：修复日志输出受阻时 WebUI 和 WebChat 可能无响应的问题，并在诊断包中提供控制台日志丢弃统计。 (#10902)
- 上下文压缩：简化设置，将“历史记录达到上限或上下文窗口紧张时的处理方式”改为“压缩策略”，“上下文压缩模型提供商 ID”改为“压缩模型”；最大轮数、丢弃轮数、压缩指令、近期上下文比例及回退窗口大小移至“更多设置”，保留现有配置和运行行为。 (#10753)
- 模型服务：保留 Anthropic 兼容服务所需的 API Key 请求头；修复 DashScope Agent 超时配置未生效的问题。 (#10787, #10868)
- Gemini：提供原生参数快捷模板，并修正原生工具配置提示。 (#10771, #10875)
- 插件与技能：修复 NAS 等环境中临时目录与 `.astrbot` 标记文件冲突导致的插件安装失败；报告插件配置重载失败；加载技能时优先使用文件读取工具。 (#10784, #10788, #10789)
- 安全：为默认 PyPI 镜像启用 TLS 证书校验。 (#10685)
- 音频：支持带 `0x03` 前缀的腾讯 SILK 音频。 (#10744)
- ChatUI：文件面板使用当前会话的工作目录。 (#10883)
- WebUI：优化追踪列表实时更新、统一配置表单样式、移除自定义规则中不受支持的“全部”选项，并限制原生滚动条样式仅在 Firefox 生效。 (#10748, #10755, #10757, #10760)

### Added

- Message buttons: Added portable button components for links, sending messages, and plugin callbacks, with interaction timeout notices. Supported action types vary by platform; see the documentation. (#9809)
- Decision models: Added a Decision Provider independent of chat models and a System One adapter for structured choices, boolean questions, and scores in plugins. (#10775)
- Web search: Integrated SerpApi Google News with publisher, author, publication time, and WebUI citations. (#10773)
- Session and user selection: Unified session-source selection with nickname search, platform labels, pagination, and ID copying; recorded sender information and enriched Lark and QQ Official group names. Administrator settings move from Add More → Edit List Items to Select users. Previous session dropdowns and list editors become Select session sources; Known sessions becomes Recorded session sources. (#10747)
- Bot management: Added selective cleanup of configuration, scheduled tasks, conversations, message history, traces, and usage data when deleting a bot. Conversations and historical data are retained by default. (#10761)
- Scheduled tasks: Shared group task lists and allowed administrators to delete group tasks. (#10785)
- Network settings: Added a PyPI mirror picker and speed tests. (#10657)

### Improved and Fixed

- Stability: Fixed WebUI and WebChat becoming unresponsive when console output is blocked, and included console log drop counters in diagnostic exports. (#10902)
- Context compression: Renamed Handling for History Limits or Context Window Pressure to Compression Strategy, and Model Provider ID for Context Compression to Compression Model. Moved maximum turns, discarded turns, compression instruction, recent-context ratio, and fallback context window size into More Settings, preserving existing configuration and runtime behavior. (#10753)
- Model providers: Preserved API key headers for Anthropic-compatible providers and honored the configured DashScope Agent timeout. (#10787, #10868)
- Gemini: Added native parameter quick templates and corrected native tool configuration hints. (#10771, #10875)
- Plugins and skills: Fixed plugin installation when temporary directories conflict with the `.astrbot` marker file on NAS and similar environments; reported plugin configuration reload failures; preferred file-reading tools when loading skills. (#10784, #10788, #10789)
- Security: Enabled TLS certificate verification for the default PyPI mirror. (#10685)
- Audio: Supported Tencent SILK audio with a `0x03` prefix. (#10744)
- ChatUI: Used the active session workspace in the file panel. (#10883)
- WebUI: Smoothed live trace updates, unified configuration form styling, removed the unsupported All option from custom rules, and scoped native scrollbar styles to Firefox. (#10748, #10755, #10757, #10760)

**Full Changelog**: https://github.com/AstrBotDevs/AstrBot/compare/v4.29.3...v4.29.4

## What's Changed
* fix: support 0x03-prefixed Tencent SILK audio by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10744
* feat(dashboard): add user and session source selectors by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10747
* feat(dashboard): smooth trace list live updates by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10748
* refactor(dashboard): simplify context compression settings by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10753
* fix(dashboard): unify configuration form styling by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10755
* fix(dashboard): remove unsupported All option from custom rules by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10757
* docs(community): add QQ Group 17 by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10754
* feat: add selective data cleanup when deleting bots by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10761
* fix: avoid shadowing the .astrbot marker file in the system temp dir by @rwzdk in https://github.com/AstrBotDevs/AstrBot/pull/10784
* fix: preserve API key headers for Anthropic-compatible providers by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10787
* fix: update contributors image max count to 500 and columns to 17 by @DOTBave in https://github.com/AstrBotDevs/AstrBot/pull/10781
* feat(cron): share group task lists and allow admin deletion by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10785
* fix: prefer file-reading tools when loading skills by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10789
* 更新社区群列表，以及webui中部分落后文本 by @nuomicici in https://github.com/AstrBotDevs/AstrBot/pull/10767
* fix(dashboard): scope native scrollbar styles to Firefox by @DOTBave in https://github.com/AstrBotDevs/AstrBot/pull/10760
* fix: report plugin configuration reload failures by @Piao-2024 in https://github.com/AstrBotDevs/AstrBot/pull/10788
* chore(deps): bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/AstrBotDevs/AstrBot/pull/10790
* fix(security): verify TLS for default PyPI mirror by @DOTBave in https://github.com/AstrBotDevs/AstrBot/pull/10685
* feat(dashboard): add PyPI mirror picker and speed tests for network sources by @XTsat in https://github.com/AstrBotDevs/AstrBot/pull/10657
* Integrate SerpApi Google News API by @magentaqin in https://github.com/AstrBotDevs/AstrBot/pull/10773
* feat(provider): add decision provider with System One adapter by @lxfight in https://github.com/AstrBotDevs/AstrBot/pull/10775
* fix(dashboard): offer Gemini-native quick templates for custom_extra_body by @piexian in https://github.com/AstrBotDevs/AstrBot/pull/10771
* docs: refine provider integration docs. by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10879
* fix: use the active session workspace in ChatUI file panel by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10883
* fix: honor DashScope agent timeout by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10868
* feat: add portable message buttons by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/9809
* docs(theme): modify theme color by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10896
* fix(dashboard): correct outdated Gemini native tool hints by @piexian in https://github.com/AstrBotDevs/AstrBot/pull/10875
* chore: bump version to 4.29.4 by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10901
* fix: prevent console backpressure from blocking the event loop by @anka-afk in https://github.com/AstrBotDevs/AstrBot/pull/10902

## New Contributors
* @rwzdk made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10784
* @Piao-2024 made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10788
* @magentaqin made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10773

**Full Changelog**: https://github.com/AstrBotDevs/AstrBot/compare/v4.29.3...v4.29.4

---

> **Source** [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) · `v4.29.4` · 2026-10-31 · [upstream release](https://github.com/AstrBotDevs/AstrBot/releases/tag/v4.29.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
