---
title: "LangBot v4.11.7"
project: "LangBot"
repo: "langbot-app/LangBot"
tag: "v4.11.7"
version: "v4.11.7"
published: "2026-11-11"
type: "patch"
lang: "en"
summary: "LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。 LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to…"
---

# LangBot v4.11.7

LangBot 是一个开源的 AI 聊天机器人与智能体平台，支持多种即时通讯平台、大语言模型、知识库和插件，帮助你构建、部署和管理 AI 助手。
LangBot is an open-source AI chatbot and agent platform that connects messaging platforms, large language models, knowledge bases, and plugins to help you build, deploy, and manage AI assistants.

## LangBot v4.11.7

The final stable release of the 4.11.x line. It replaces **v4.11.6, which has been withdrawn**: v4.11.6 rejected concurrent token counts on a shared model, so LocalAgent conversations running at the same time could fall back to rough estimates and fail. If you installed v4.11.6, upgrade to v4.11.7.

本版本是 4.11.x 的最终稳定版，取代**已撤回的 v4.11.6**。v4.11.6 在多个会话同时使用同一模型时会拒绝并发的 token 计数，LocalAgent 因此改用粗略估算，部分对话会失败。已安装 v4.11.6 的用户请升级到 v4.11.7。

It contains no new features. It fixes the failures reported by 4.11.x instances through LangBot Space telemetry, and updates the plugin SDK and the official plugins involved.

### Fixes / 修复

- **Concurrent token counting / 并发 Token 计数**（v4.11.6 回归）：同一模型上的并发计数不再被拒绝；只有超时或被取消后仍在运行的计数，才会阻止新的计数。Concurrent token counts on one model are no longer rejected; only a count that outlived its caller blocks new ones.
- **Windows plugins / Windows 插件**：插件 `print` 中文或 emoji 不再导致插件运行时断连，也不再出现 `'gbk' codec can't encode` 报错（SDK 0.7.24）。A plugin printing Chinese text or emoji no longer disconnects the plugin runtime on Chinese-locale Windows.
- **Windows token counting / Windows Token 计数**：LiteLLM 的 Windows 安装包自带的 tokenizer 文件是 CRLF 换行，校验失败后会重新从 openaipublic 下载；网络不通时，每个进程的首次对话都会卡住（遥测里的 30 秒 `count_tokens call timed out`）。LangBot 现在启动时会把这些文件转成 LF 存到 `data/tiktoken_cache`，计数完全离线。另外，计数超时或失败时 LocalAgent 改用本地估算继续对话，不再整轮失败。LiteLLM's Windows wheels ship CRLF tokenizer files that fail tiktoken's hash check and trigger a download; LangBot now keeps a normalized offline copy, and a counting failure no longer fails the LocalAgent turn.
- **Runner availability / Runner 可用性**：启动或重连期间，等待已安装插件完成初始化后再派发，不再报 `Agent runner not found: plugin:langbot-team/LocalAgent/default`。
- **Plugin runtime / 插件运行时**：运行时重连期间，工作区同步和事件派发会先等待重连完成（最多 30 秒），不再在断连窗口内失败；附件和流的体积超限报错会给出实际大小和处理建议（SDK）。
- **Knowledge base / 知识库**：向量库后端在后台线程中初始化。之前在较慢的机器上，首次入库会阻塞事件循环，导致插件运行时断连、入库失败。The vector backend is created off the event loop; the first ingestion on a slow host no longer drops the plugin runtime connection.
- **SQLite / SQLAlchemy**：非 Docker 安装（pip / uvx）在 SQLAlchemy 2.1 上首次写入插件存储时报 `unknown ON CONFLICT update shape` 的问题已修复，依赖上限设为 `<2.2`；图片刷新期间释放 SQLite 写锁，减少 `database is locked`。
- **Box sandbox / Box 沙箱**：过长的命令改为通过临时脚本执行，修复 `Argument list too long` 和大附件导入失败（SDK）。
- **Runners**：Coze / Dify 处理已完成和 workflow 类型的输出，不再把这类响应当成空响应；LocalAgent 推理配置为空时不再报错。命令错误响应的反序列化不再崩溃（SDK）。
- **Runner interactions / Runner 交互**：HTTP Bot、OneBot 等旧版适配器上，Runner 发起的交互（例如 Dify 工作流的人工输入节点）不再报 `get_interaction_capabilities` 错误，改为文本问答。Runner interactions on legacy adapters (HTTP Bot, OneBot, …) fall back to text instead of failing.
- **Telemetry / 遥测归因**：取消的执行记为 cancelled 而不是失败；路由失败时保留错误详情；已经是终态的执行不再报转换错误；执行链的平台字段不再被工具来源（mcp / skill 等）覆盖。
- **Official plugins / 官方插件**：EssentialCommands 0.1.12 修复 `!func`；HelloPlugin 0.1.6 去掉调试输出；LocalAgent 0.2.10、CozeAgent 0.2.5、DifyAgent 0.2.8 已在 Marketplace 上架。
- **SDK**：`langbot-plugin` 由 0.7.23 固定到 0.7.24。

### Release verification

- Required checks (unit tests, fast integration, PostgreSQL contract, SQLAlchemy 2.0 / 2.1 matrix, Box integration, E2E startup, Core smoke, regression tools, lint) passed on the release commit.
- Before tagging, the release candidate was installed and run through routine operations with both Docker (`docker compose --profile box`) and uvx (`uvx --from <wheel> langbot`, dependencies resolved from PyPI: SDK 0.7.24, SQLAlchemy 2.1.8). Each run used a fresh data directory. The checks covered account setup, the WebUI, Marketplace install with permission confirmation, enable and uninstall, models, a LocalAgent pipeline over HTTP Bot with a tool call in the Box sandbox, the `!help` `!cmd` `!func` `!plugin` `!version` commands, knowledge-base ingestion and retrieval, and persistence after a restart. The same checks were run with uvx on Windows 11 (code page 936) for the v4.11.6 candidate; v4.11.7 only changes platform-independent counting logic on top of it, including a plugin printing Chinese and emoji, and a first LocalAgent conversation with tokenizer downloads blocked (about 4 s, no network access).
- Dify 1.18.0 human-input workflows were run end to end through DifyAgent over HTTP Bot.
- v4.11.7 adds a concurrency check: 8–24 simultaneous LocalAgent conversations on one model, with no token-count rejections (v4.11.6 rejected 3–6 counts per 24-conversation round). An in-place upgrade from v4.11.6 data was also verified.

### Contributors

@RockChinQ

**Full Changelog**: https://github.com/langbot-app/LangBot/compare/v4.11.5...v4.11.7

---

> **Source** [langbot-app/LangBot](https://github.com/langbot-app/LangBot) · `v4.11.7` · 2026-11-11 · [upstream release](https://github.com/langbot-app/LangBot/releases/tag/v4.11.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
