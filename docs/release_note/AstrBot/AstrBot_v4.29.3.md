---
title: "AstrBot v4.29.3"
project: "AstrBot"
repo: "AstrBotDevs/AstrBot"
tag: "v4.29.3"
version: "v4.29.3"
published: "2026-10-24"
type: "patch"
lang: "en"
summary: "Life is like a box of chocolates."
---

# AstrBot v4.29.3

## [4.29.3] - 2026-10-24

Life is like a box of chocolates.

### 新增

- 消息追踪：进一步完善消息追踪能力，支持记录和观测所有入站消息事件，以及事件对应的插件调用和 Agent 调用。（需要先在 WebUI 左下角设置中开启） (#10614)
- 诊断导出：支持从控制台和系统设置导出支持脱敏的系统诊断包，包含日志、追踪、配置、插件状态和环境等信息。 (#10418, #10659)
- 安装脚本：新增多语言安装流程和中国大陆镜像支持。 (#10629)

### 修复

- 备份：补全定时任务、持久化文件和相关数据目录的备份与恢复，避免数据遗漏。 (#10644, #10661)
- Gemini：支持模型自定义生成参数，保留显式设置的零值；修复非字符串枚举导致工具 Schema 不兼容的问题。 (#10719, #10635)
- NVIDIA Rerank：保留模型专属 API 端点路径，避免请求错误的通用地址。 (#10732)
- 电脑使用：修复 Shipyard Bay 执行结果的解析，以及 Windows Shell 超时或取消时的子进程清理。 (#10671, #10729)
- WebUI：修复配置刷新后模型元数据丢失、默认聊天模型选择、插件侧栏名称本地化、桌面更新通知和配置模板字段默认值。 (#10522, #10663, #10576, #10622, #10517)
- WebUI：优化配置说明与条件选项显示，修复全屏日志中的 Pip 安装弹窗、日志流连接等待和页面切换后的重复日志，并明确插件筛选范围。 (#10647, #10608, #10666, #10694, #10691)
- 数据库：使用跨数据库兼容的 JSON 查询表达式。 (#10664)

### Added

- Message tracing: Improved tracing to record and inspect all incoming message events and their associated plugin and Agent calls. Enable it first in Settings in the lower-left corner of the WebUI. (#10614)
- Diagnostics: Export system diagnostic bundles with redaction support from the console and system settings, including logs, traces, configuration, plugin status, and environment information. (#10418, #10659)
- Installer: Added multilingual setup and mainland China mirrors. (#10629)

### Fixed

- Backups: Include scheduled tasks, persistent files, and related data directories in backup and restore operations. (#10644, #10661)
- Gemini: Honor model-specific generation parameters and explicit zero values, and handle non-string enums in tool schemas. (#10719, #10635)
- NVIDIA Rerank: Preserve model-specific endpoint paths instead of substituting a generic endpoint. (#10732)
- Computer use: Parse Shipyard Bay execution envelopes correctly and clean up Windows shell child processes on timeout or cancellation. (#10671, #10729)
- WebUI: Preserve fetched model metadata after configuration refresh; restore default chat model selection; localize plugin sidebar names; fix desktop update notices and template field defaults. (#10522, #10663, #10576, #10622, #10517)
- WebUI: Clarify configuration hints and conditional settings; keep the Pip dialog visible in fullscreen logs; flush log stream headers promptly; prevent duplicate logs after navigation; clarify plugin filter scope. (#10647, #10608, #10666, #10694, #10691)
- Database: Use portable JSON query expressions. (#10664)

## What's Changed
* feat: improve message tracing and add bounded SQLite history by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10614
* fix: preserve fetched model metadata after config refresh by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10522
* fix(dashboard): localize plugin names in sidebar by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10576
* fix: initialize template dict fields without explicit defaults by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10517
* fix: show clickable desktop update notices in header by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10622
* feat(install): add multilingual setup and mainland China mirrors by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10629
* chore(deps): bump github/codeql-action from 4.38.3 to 4.39.0 in the github-actions group by @dependabot[bot] in https://github.com/AstrBotDevs/AstrBot/pull/10636
* fix(dashboard): keep pip install dialog visible in console fullscreen by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10608
* fix(dashboard): clarify configuration hints and hide disabled options by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10647
* feat(dashboard): export logs from the console and settings pages by @niansia in https://github.com/AstrBotDevs/AstrBot/pull/10418
* fix(dashboard): complete diagnostic export improvements by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10659
* fix(tests): use consistent newlines in diagnostic export fixture by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10660
* fix: include scheduled tasks in backups by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10644
* fix: preserve persistent data in backups by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10661
* perf(db): use portable JSON query expressions by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10664
* fix(dashboard): restore default chat model selection by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10663
* fix: avoid non-string enums in Gemini tool schemas by @niansia in https://github.com/AstrBotDevs/AstrBot/pull/10635
* fix(security): bump certifi and pip floors for eMudhra CA compromise by @DOTBave in https://github.com/AstrBotDevs/AstrBot/pull/10670
* fix(dashboard): flush log SSE headers before waiting for events by @Heximiao in https://github.com/AstrBotDevs/AstrBot/pull/10666
* fix(dashboard): prevent duplicate console logs after navigation by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10694
* fix: support Gemini model generation parameters by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10719
* fix(dashboard): clarify log plugin filter scope by @mantoujun12 in https://github.com/AstrBotDevs/AstrBot/pull/10691
* fix(computer): unwrap Shipyard Bay exec envelope for shell and file tools by @Dailiduzhou in https://github.com/AstrBotDevs/AstrBot/pull/10671
* docs: add SerpApi and DeepSeek Search API guides by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10731
* fix: windows shell process cleanup by @advent259141 in https://github.com/AstrBotDevs/AstrBot/pull/10729
* fix: preserve model-specific NVIDIA rerank endpoint paths by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10732
* chore: bump version to 4.29.2 by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10734
* fix: bypass core dependency locks during self-updates by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10736
* chore: bump version to 4.29.3 by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10738

## New Contributors
* @DOTBave made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10670
* @Dailiduzhou made their first contribution in https://github.com/AstrBotDevs/AstrBot/pull/10671

**Full Changelog**: https://github.com/AstrBotDevs/AstrBot/compare/v4.29.1...v4.29.3

---

> **Source** [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) · `v4.29.3` · 2026-10-24 · [upstream release](https://github.com/AstrBotDevs/AstrBot/releases/tag/v4.29.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
