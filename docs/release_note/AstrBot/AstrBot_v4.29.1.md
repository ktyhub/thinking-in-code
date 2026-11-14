---
title: "AstrBot v4.29.1"
project: "AstrBot"
repo: "AstrBotDevs/AstrBot"
tag: "v4.29.1"
version: "v4.29.1"
published: "2026-10-17"
type: "patch"
lang: "en"
---

# AstrBot v4.29.1

> 我们计划于 2026 年 11 月 1 日停止支持对 < Python 3.12 版本的支持。如果您的 Python 版本仍然是 3.10, 3.11，请及时更换新的 Python 版本。 \
> We plan to end support for Python versions prior to 3.12 on November 1st. If you are currently using Python 3.10 or 3.11, please upgrade to a newer version of Python.

## [4.29.1] - 2026-10-17

### 新增

- 网页搜索：“网页搜索” 能力新增 [SerpApi 搜索服务](https://serpapi.com/) (Google 网页搜索、图片搜索、学术搜索、财经搜索)、[DeepSeek 搜索服务](https://api-docs.deepseek.com/zh-cn/guides/search/)（网页搜索、网页内容提取）。 (#10599)
- 插件开发：为插件的单选/多选配置项（list 类型）添加本地化的 `subtitles` 副标题元数据。


### 修复

- ‼️ 电脑使用：修复部分环境（如 Docker 容器环境）下，本地隔离不可用时，无法保存 Local 权限的问题。(#10584)
- 电脑使用：恢复 Windows 下工作区范围内的文件读取、写入和编辑，通过原生文件句柄检查拒绝重解析点和硬链接别名。 (#10584)
- Core：修复开启 “会话隔离” 功能后可能造成的内存泄漏。在注册消息处理流水线之前完成群聊会话隔离，确保运行中的任务及停止请求使用正确的会话。 (#10581)
- Telegram：转换消息时保留隐藏链接。 (#10557)
- Discord：修复全体成员提及。 (#10563)
- WebUI：修复移动端点击插件视图信息后浮层立即关闭的问题。 (#10562)
- Edge TTS：保留原生客户端的 User-Agent，避免请求失败。 (#10588)
- Skills：跳过无法读取的本地及插件技能目录，避免单个目录异常导致整轮 Agent 请求失败。 (#10591)

### Added

- Web Search: Added SerpApi (Google Search, Google Image Search, Google Scholar Search and Google Finance Search) and DeepSeek Search API (web search and page content extraction). (#10599)
- Plugin development: Added localized subtitle metadata for single-select/multi-select configuration options (of type 'list') in plugins.

### Fixed

- ‼️ Computer Use: Restored workspace-scoped file reading, writing, and editing on Windows. Native handle checks reject reparse points and hardlink aliases. (#10584)
- Computer Use: Fixed saving Local permissions when isolation is unavailable. File access remains configurable; execution requiring unavailable isolation is blocked at tool execution. Defaults now give members workspace file access without execution, and administrators entire-environment execution with networking. Legacy Windows member policies with all access disabled migrate once to workspace file access, including identical manually disabled policies because their origin was not stored; later choices remain unchanged. (#10584)
- Core: Fixed a potential memory leak that could occur when the "session isolation" feature is enabled. Group chat session isolation is now performed before registering the message-processing pipeline, ensuring that both ongoing tasks and termination requests utilize the correct session. (#10581)
- Telegram: Preserved hidden links when converting messages. (#10557)
- Discord: Corrected everyone mentions. (#10563)
- WebUI: Kept plugin View information popovers open when tapped on mobile. (#10562)
- Edge TTS: Preserved the native client User-Agent to avoid request failures. (#10588)
- Skills: Skipped unreadable local and plugin skill directories instead of failing the entire agent request. (#10591)

**Full Changelog**: https://github.com/AstrBotDevs/AstrBot/compare/v4.29.0...v4.29.1

## What's Changed
* fix: preserve Telegram hidden links in converted messages by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10557
* fix: correct Discord everyone mentions by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10563
* fix(dashboard): keep plugin view info popover open on mobile by @lingyun14beta in https://github.com/AstrBotDevs/AstrBot/pull/10562
* fix(core): isolate sessions before pipeline registration by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10581
* fix: restore Windows workspace files and simplify Local permissions by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10584
* feat(websearch): add DeepSeek search and page fetching by @letr007 in https://github.com/AstrBotDevs/AstrBot/pull/10599
* docs: add Simplified Chinese Code of Conduct and link it in issue templates by @XTsat in https://github.com/AstrBotDevs/AstrBot/pull/10580
* fix: preserve native Edge TTS user agent by @wcqqq1214 in https://github.com/AstrBotDevs/AstrBot/pull/10588
* fix(skills): keep one unreadable skill directory from failing the whole request by @he-yufeng in https://github.com/AstrBotDevs/AstrBot/pull/10591
* feat: add SerpApi search tools and provider descriptions by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10601
* chore: bump version to 4.29.1 by @Soulter in https://github.com/AstrBotDevs/AstrBot/pull/10602


**Full Changelog**: https://github.com/AstrBotDevs/AstrBot/compare/v4.29.0...v4.29.1

---

> **Source** [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) · `v4.29.1` · 2026-10-17 · [upstream release](https://github.com/AstrBotDevs/AstrBot/releases/tag/v4.29.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
