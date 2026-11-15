---
title: "paperclip v2026.722.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.722.0"
version: "v2026.722.0"
published: "2026-07-22"
type: "minor"
lang: "zh"
---

# paperclip v2026.722.0

# 纸clip v2026.722.0

> 发布时间：2026-07-22

## 亮点

- **运行绑定代理秘密访问** — 代理现在可以通过运行绑定 API 按需获取授予的秘密，而不是仅依赖于周围环境注入。新的 `access.*` 交付模式仅公开 API 机密，`GET /api/agents/me/secrets` 仅列出代理被授予的别名，而 `POST /api/agents/me/secrets/:key/value` 返回带有 `Cache-Control: no-store` 的值。读取的每个值都会写入安全审核跟踪和操作员活动日志，低 trust 审查/技能测试令牌保持被拒绝，并且新的 **秘密访问** 编辑器可让您从代理设置管理每个代理的授权。 （[#9921]（https://github.com/paperclipai/paperclip/pull/9921））
- **本地代理在 Windows 上运行** — 嵌入式 ACPX 引擎不再将本地代理命令包装在生成的 Bash 脚本中，因此 Claude、Codex、Gemini 和自定义 ACP 适配器现在可以在 Windows 和 Linux 上本地生成。环境变量通过 ACPX 会话选项注入，子 stderr 在进程中捕获，`.cmd` npm/pnpm 垫片在 Windows 上是首选，符号链接 `EPERM` 故障回退到副本。真正的 Node ACP Spawn Smoke 现在可以在 Ubuntu 和 Windows 上运行。 ([#9980](https://github.com/paperclipai/paperclip/pull/9980))

## 改进

- **用户命名的 `PAPERCLIP_*` 绑定现在到达您的代理** — 心跳之前在解析之前剥离了*每个* `PAPERCLIP_` 前缀的 env 绑定，因此您故意命名为 `PAPERCLIP_CLOUD_PROD_PROVIDER_RAILWAY_TOKEN` 之类的秘密被悄悄删除。现在，只有 `PAPERCLIP_API_KEY` 被明确拒绝，利用工具分配的运行时变量始终获胜，并且所有其他 `PAPERCLIP_*` 绑定都会流向运行环境。 ([#9974](https://github.com/paperclipai/paperclip/pull/9974))
- **更可靠的遥测 client** — 遥测 client 现在与电汇合同匹配：有效负载被分块，批次 ID 是确定性的，重试是通过回退进行批处理的，并且本地存储是有界的。静默下降基线已固定，上限/退避现在是可配置的表面。遥测保持匿名状态，可以使用 `DO_NOT_TRACK=1` 或 `PAPERCLIP_TELEMETRY_DISABLED=1` 禁用。 （[#9946]（https://github.com/paperclipai/paperclip/pull/9946），[#9906]（https://github.com/paperclipai/paperclip/pull/9906），@nickyeach）
- **以斜杠命名的机密作为文件夹浏览** — 名称包含斜杠的机密现在作为 UI 中的嵌套文件夹导航。 ([#9913](https://github.com/paperclipai/paperclip/pull/9913))
- **用于秘密访问的可搜索代理选择器** — 授予每个代理秘密访问权限现在使用可搜索代理选择器而不是长长的平面列表。 ([#9918](https://github.com/paperclipai/paperclip/pull/9918))
- **更清晰的外部对象标签和星形控件** - 外部对象标签和位于它们旁边的星形控件经过简化，以减少视觉噪音。 ([#9929](https://github.com/paperclipai/paperclip/pull/9929))
- **更安全的沙箱 `CODEX_HOME` 同步** — `codex-local` 适配器现在在将 `CODEX_HOME` 同步到沙箱时会暂存一个显式允许列表，而不是复制整个主目录。 （[#9972]（https://github.com/paperclipai/paperclip/pull/9972），@nickyleach）

## 实验性的

这些功能在实验设置后面提供 - 启用实验设置下的应用程序来尝试它们。
- **Connections v3 基础** — one-click 连接应用程序落地的基础：v3 架构核心添加了稳定的公司范围连接 UID、显式所有权/身份验证/传输字段、主题感知 `connection_grants` 表和多密钥凭证（旧版 `remote_http` 传输重命名为 `mcp_remote`）。最重要的是，生成的 **AppDefinition** Wave 1 目录提供浏览和设置单一类型的合同，运行时层添加主题感知授权状态、作用域密钥处理和 OpenAPI 注册授权路由，这些路由因未知作用域而无法关闭。 ([#9958](https://github.com/paperclipai/paperclip/pull/9958)、[#9981](https://github.com/paperclipai/paperclip/pull/9981)、[#9982](https://github.com/paperclipai/paperclip/pull/9982))

## 修复

- **存档的收件箱项目保持存档** — 您已存档的项目不再重新出现在收件箱中。 ([#9931](https://github.com/paperclipai/paperclip/pull/9931))
- **执行策略最终批准干净地完成** - 批准执行策略的最后阶段现在会终止该策略，而不是将其倒回到第一阶段。（[#7936]（https://github.com/paperclipai/paperclip/pull/7936），@HKTITAN）
- **接受 Office 问题附件** — 现在接受有关问题的 Office 文档附件（Word、Excel、PowerPoint）。 （[#8562]（https://github.com/paperclipai/paperclip/pull/8562），@samrusani）
- **从服务器日志中删除 HTTP cookie** — Cookie 标头现在从服务器日志中删除，因此会话材料不会泄漏到日志输出中。 （[#7977]（https://github.com/paperclipai/paperclip/pull/7977），@nosolosoft）
- **不再有来自运行撰写的评论的 500 条** - `createdByRunId` 在评论插入时进行了清理，修复了 500 个错误。 （[#9489]（https://github.com/paperclipai/paperclip/pull/9489），@digitalflanker-ux）
- **在问题发布时保留终端状态** — 发布问题不再破坏终端（完成/取消）状态。 （[#7524]（https://github.com/paperclipai/paperclip/pull/7524），@harshkotak）
- **在无效的配置文件上大声失败** — 无效的配置文件现在会显示一个明显的错误，而不是被默默地忽略。 （[#9041]（https://github.com/paperclipai/paperclip/pull/9041），@lesbass）
- **非 clickable 待批准指南** — 邀请屏幕上的待批准管理员指南不再是误导性的 clickable 元素。 （[#6786]（https://github.com/paperclipai/paperclip/pull/6786），@le-czs）
- **Cron 有效性通过 radix-ui 1.6.4 解决** — Cron 有效性处理和解决分支测试已针对 radix-ui 1.6.4 同步。 （[#9966]（https://github.com/paperclipai/paperclip/pull/9966），@nickyleach）
- **CLI 导入选择修复** — 清除的导入选择不再删除扩展文件，并且缺失的公司清单字段已添加到导入选择测试装置中。 （[#2379]（https://github.com/paperclipai/paperclip/pull/2379），@kevinmanase，[#9978]（https://github.com/paperclipai/paperclip/pull/9978），@aaymeloglu）
- **云托管实例通过运行状况门** — 云托管实例现在被视为在运行状况门中引导，因此它们不会在启动时停止。 ([#9912](https://github.com/paperclipai/paperclip/pull/9912))

## 升级指南

- 此版本为 Connections v3 基础添加了两个附加数据库迁移（`0182_connections_v3_schema_core`、`0183_connection_user_authorization_state`），它们回填稳定连接 UID、创建默认工作区授权并将 `remote_http` 传输重命名为 `mcp_remote`。迁移在启动时自动运行 - 无需手动操作。
- 如果您之前在适配器/配置环境中设置静态 `PAPERCLIP_API_KEY` 来覆盖运行令牌，则该覆盖不再适用 - 线束铸造的运行令牌现在是运行 API 密钥的唯一来源。所有其他以 `PAPERCLIP_*` 命名的绑定现在按预期流向运行环境。
- 连接/应用程序仍然受实验设置限制。在实验设置下启用 **Apps** 以尝试 Connections v3 界面。

## 贡献者
此版本有 13 位贡献者的 44 项提交。感谢所有为此版本做出贡献的人！

@aaymeloglu、@digitalflanker-ux、@harshkotak、@HKTITAN、@kevinmanase、@le-czs、@lesbass、@MindSyncHub、@nickyleach、@nosolosoft、@samrusani

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.722.0` · 📅 发布：2026-07-22 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.722.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
