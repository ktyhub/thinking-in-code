---
title: "open-webui v0.9.5"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.9.5"
version: "v0.9.5"
published: "2026-05-10"
type: "patch"
lang: "zh"
---

# open-webui v0.9.5

### 添加

- 🛡️ **基于重定向的 SSRF 保护。** 所有出站 HTTP 请求现在默认通过新的 `AIOHTTP_CLIENT_ALLOW_REDIRECTS` 环境变量阻止 3xx 重定向，从而防止基于重定向的 SSRF，其中公共 URL 静默重定向到内部地址（RFC 1918、环回、云元数据端点）。受影响的调用站点包括 Web 获取、图像加载、OAuth 发现、工具服务器执行和代码解释器登录。 [#24491](https://github.com/open-webui/open-webui/pull/24491)
- 🛡️ **Iframe 内容安全策略。** 管理员现在可以通过 `IFRAME_CSP` 环境变量为所有 srcdoc iframe（工件、工具嵌入、文件预览、引用模式）配置内容安全策略，限制 LLM 生成或用户上传的 HTML 可以在预览内加载和执行的内容。 [提交](https://github.com/open-webui/open-webui/commit/3bba1c227059a44c7eeefa97b8c69a63bf4f3454)
- 🎛️ **精细的 Markdown 渲染控件。** 用户现在可以从界面设置中独立禁用用户消息和助手响应的 Markdown 渲染，从而防止在粘贴包含 Markdown 敏感字符的文本时出现意外格式化。 [提交](https://github.com/open-webui/open-webui/commit/4a1064cefd6f48a8b3b02cd31f77838c8802b635)
- 🔧 **终端代理响应标头。** 管理员现在可以通过 `TERMINAL_PROXY_HEADERS` 环境变量（JSON 对象）将自定义响应标头注入终端代理响应中，从而启用特定于部署的安全标头，例如代理内容的沙箱策略。 [提交](https://github.com/open-webui/open-webui/commit/8d3133fe2835122bffaa4f2ce584730bc9c78981)
- 🔌 **通道流和工具支持。** 在通道中提及模型现在可以实时流式传输响应并支持完整的聊天完成管道，包括本机和默认函数调用、内置工具（Web 搜索、图像生成）、用户工具、MCP 工具、过滤器和 RAG 知识注入 - 与标准聊天中提供的功能相同。

### 已修复

- 📝 **笔记创建和打开可靠性。** 创建新笔记和打开现有笔记不再失败，并因 `is_pinned` 在创建时传递到 SQLAlchemy 模型并在读取时两次传递到 `NoteResponse` 引起的类型错误而失败。 [#24484](https://github.com/open-webui/open-webui/issues/24484), [#24486](https://github.com/open-webui/open-webui/pull/24486)
- 🔐 **技能公共共享权限强制执行。** 创建或更新技能现在通过 `sharing.public_skills` 权限过滤访问授权，防止非管理员用户在没有所需权限的情况下公开访问技能。 [#24494](https://github.com/open-webui/open-webui/pull/24494)
- 🔐 **日历公共共享权限强制执行。** 创建或更新日历现在通过新的 `sharing.public_calendars` 权限过滤访问授权，防止用户在没有明确的管理员授予共享权限的情况下使日历公开可读或可写。 [#24493](https://github.com/open-webui/open-webui/pull/24493)
- 🔐 **反馈用户归因欺骗。** 提交评价反馈无法再通过批量分配伪造 `user_id` 字段，从而防止经过身份验证的用户将评分归因于其他用户并破坏 Elo 排行榜排名和管理员反馈导出。 [#24508](https://github.com/open-webui/open-webui/pull/24508)
- 🛡️ **基于图像 URL 重定向的 SSRF。** 包含图像 URL 的聊天消息在 Base64 转换期间不再遵循 3xx 重定向到内部地址，从而关闭了不需要特殊权限或功能标志的最可达的基于重定向的 SSRF 变体。 [#24524](https://github.com/open-webui/open-webui/pull/24524)
- 🛡️ **文件处理时的集合写入访问权限。** `process_file` 和 `process_files_batch` 检索端点现在在嵌入内容之前强制执行集合写入访问检查，从而防止经过身份验证的用户将文件内容注入另一个用户的知识库集合中。 [#24524](https://github.com/open-webui/open-webui/pull/24524)
- 🔐 **工具源代码更新授权。** 更新工具的 Python 源代码现在需要 `workspace.tools` 或 `workspace.tools_import` 权限，防止仅具有写入访问权限的用户覆盖可执行工具代码，同时仍允许元数据编辑。 [#24513](https://github.com/open-webui/open-webui/pull/24513)
- 🔐 **频道消息所有权强制执行。** 在群组和 DM 频道中更新或删除消息现在需要消息所有权，以防止频道成员篡改或悄悄删除其他成员的消息。 [#24506](https://github.com/open-webui/open-webui/pull/24506)
- 🔐 **频道 pin 写入权限。** 标准频道上的固定和取消固定消息现在需要写入权限而不是读取权限，从而防止只读用户修改固定内容。 [#24521](https://github.com/open-webui/open-webui/pull/24521)
- 🛡️ **图像生成 URL 验证。** 生成的图像 URL 现在在获取之前通过 `validate_url()` 进行验证，从而使纵深防御态势与同级图像加载路径保持一致。 [#24518](https://github.com/open-webui/open-webui/pull/24518)
- 🔐 **只读用户的模型参数暴露。** 每个模型的 API 端点现在从对没有写访问权限的调用者的响应中删除 `params` 字典（包括系统提示），从而防止只读用户查看管理员策划的模型配置。 [#24525](https://github.com/open-webui/open-webui/pull/24525)
- 🛡️ **URL 解析器 SSRF 绕过。** URL 验证现在拒绝反斜杠、制表符、CR 和 LF 字符，这些字符会导致 urllib 和 requests/aiohttp 在目标主机上不一致，从而关闭解析器混淆 SSRF 绕过。 [#24534](https://github.com/open-webui/open-webui/pull/24534)
- 🛡️ **个人资料图像 MIME 类型白名单。** 从数据 URI 提供个人资料图像现在强制执行严格的 MIME 类型白名单（默认为 PNG、JPEG、GIF、WEBP，可通过 `PROFILE_IMAGE_ALLOWED_MIME_TYPES` 配置）并设置 `X-Content-Type-Options: nosniff`，防止通过 SVG 或其他可执行内容类型存储 XSS。 [提交](https://github.com/open-webui/open-webui/commit/15e696691cad98692c329de62ed8a5bdb3a26d4e)
- 🔐 **文件夹和知识附件中的文件所有权。** 将文件附加到文件夹或知识库现在会验证每个文件的读取访问权限，并且聊天中间件中的文件夹文件列表会被过滤为调用者可以读取的条目，从而防止未经授权的文件内容被注入到 RAG 上下文中。 [提交](https://github.com/open-webui/open-webui/commit/2dbf7b6764a7922458d3b0139687ad6dcd7596d9)
- 🔐 **所有者和管理员的共享聊天访问权限。** 聊天所有者现在可以查看和克隆自己的共享聊天，而无需显式访问授权，管理员可以管理任何聊天的共享聊天访问控制。 [提交](https://github.com/open-webui/open-webui/commit/3a21b334cce30226750c5c537345dc51bb8bef17)、[提交](https://github.com/open-webui/open-webui/commit/315566064aedeff071854b023d09e5f1ea0eb950)
- 🧵 **旧版聊天历史记录自我修复。** 加载旧版对话现在会自动检测迁移的消息记录中损坏的父链接图，合并嵌入式 JSON 历史记录中丢失的消息，并将它们回填到规范化表中，以便将来的加载使用快速路径而不会丢失数据。 [提交](https://github.com/open-webui/open-webui/commit/1388f4568b8f508c26542673dd01f1fa049e798a)
- 🎛️ **过滤器选择器反应性。** 模型过滤器复选框现在从当前过滤器列表和选定的 ID 中反应性地派生状态，而不是在安装时捕获一次性快照，因此当模型上下文或过滤器配置在运行时发生更改时，复选框会正确更新。 [提交](https://github.com/open-webui/open-webui/commit/d1ef5382377f590f97a6dbaee88f369e6d7c5f6f)
- 🌐 **葡萄牙语（巴西）翻译更新。** 添加了新添加的 UI 项目的翻译以及现有条目的一致性传递。 [#24503](https://github.com/open-webui/open-webui/pull/24503)

### 已更改

- 🧹 **删除了未经身份验证的检索状态端点。** 未经身份验证的 `GET /api/v1/retrieval/` 状态端点已作为死代码删除 - 检索配置已可通过经过身份验证的管理端点使用。 [#24497](https://github.com/open-webui/open-webui/pull/24497)
- 📋 **PR 模板问题要求。** Pull 请求现在需要链接的问题或讨论参考，以确保更好地跟踪所有贡献。没有链接问题或讨论的 PR 可能会在未经审查的情况下关闭。

---

> 📦 仓库：[open-webui/open-webui](https://github.com/open-webui/open-webui) · 🏷️ 版本：`v0.9.5` · 📅 发布：2026-05-10 · [查看英文原版 Release](https://github.com/open-webui/open-webui/releases/tag/v0.9.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
