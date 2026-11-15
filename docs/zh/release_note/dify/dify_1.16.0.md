---
title: "dify 1.16.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.16.0"
version: "1.16.0"
published: "2026-07-17"
type: "minor"
lang: "zh"
---

# dify 1.16.0

# Dify Agent 简介 *（测试版）*：Dify 中的新代理体验

> [!警告]
> 您应该仅向 trusted、非恶意用户**⚠️ 提供 Dify Agent 服务⚠️**。

众所周知，基于 shell 的 LLM 代理范式带来了代理能力的重大飞跃，并改变了我们对代理的看法。同时，Skills提供了标准化的能力打包和分发方式，让构建强大的Agent变得更加容易。


今天，我们推出 Dify Agent。与其他领先代理一样，它在 Linux 沙箱中运行。此版本包括：

- 用于创建 Dify Agent 的构建器
  - 您可以通过 UI 构建 Dify Agent：设置基本提示、上传技能和文件，以及连接 Dify 生态系统中的工具和知识。
  - 我们还提供了一个代理来帮助您构建 Dify Agents。通过对话，它可以配置 Linux 沙箱环境、安装所需的软件包以及创建 Dify Agent 稍后可以使用的新技能和文件。

- Dify Agent 的 Dify 工作流程集成
  - 您可以在 Dify 工作流程中使用现有的 Dify Agent，或临时创建内联 Dify Agent。它将执行工作流节点定义的任务，生成所需的输出，并将其传递到下一个节点。

- 全新的网络应用体验
  - 您构建的 Dify Agent 可以作为 Web 应用程序发布和使用。虽然用户体验仍然很熟悉，但它现在由 Dify Agent 提供支持。

文件：https://docs.dify.ai/en/self-host/use-dify/build/new-agent/overview

<img width="3012" height="1638" alt="image" src="https://github.com/user-attachments/assets/57d10af3-eb74-4ca9-829d-03489c27edf1" />

# ⚠️ 需要采取行动
**OpenAI GPT-5.6 兼容性声明**

OpenAI 插件之前默认使用 Chat Completions API，该插件已于今年早些时候被 OpenAI 弃用，并且对新型号系列的支持越来越差。新发布的 GPT-5.6 系列在与聊天完成一起使用时具有许多不寻常且独特的参数组合限制，因为 OpenAI 现在仅为新模型的聊天完成提供最低程度的兼容性支持。 **这不是 Dify 系统问题。**

新配置的默认 API 类型已从聊天完成更改为 **响应**。但是，之前使用旧默认值（聊天完成）保存自定义 API 密钥的用户将保留该设置，这可能会导致看似源自 Dify 的意外错误。

> 如果您之前配置了自定义 OpenAI API 密钥，请检查您的 API 类型设置，如果仍设置为聊天完成，请切换到 **响应**，尤其是在使用 GPT-5.6 或更高版本时。


## 新功能

**代理应用程序（开放测试版）**
- 代理应用程序进入公开测试版，现在默认为所有用户启用。它引入了用于代码执行和 shell 命令的内置沙箱、允许代理调用工具和 API 的技能系统、用于跨工作区管理和重用代理的代理名册，以及对从工作流代理节点引用新代理的支持。


**更智能的人工智能工作流程生成**
- ⌘K → /create 和 /refine AI 工作流程生成器已得到端到端增强：低值的“理想输出”字段已被删除，静态示例芯片被基于工作区上下文的 AI 生成的建议所取代，并且节点配置生成现在已并行化，以实现更快的结果。可配置的超时（`WORKFLOW_GENERATION_TIMEOUT_MS`，默认 180 秒）可防止长时间运行的生成挂起。

**MCP协议升级**
- 工作流作为 MCP 服务器现在支持 MCP 协议 2025-06-18，具有版本协商和结构化工具输出，同时保持与旧版 clients 的向后兼容。 MCPClient 连接现在可以使用占位符（例如 `{{request.headers.X-Custom-Auth}}`）在运行时注入动态 HTTP 请求标头，从而启用每个请求的身份验证直通。

**网络应用程序定制**
- 应用程序所有者现在可以为聊天机器人、代理和 Chatflow Web 应用程序自定义聊天输入占位符文本（最多 64 个字符）。自定义 UI 已得到改进，命名更清晰（“自定义前端”/“品牌”）和更好的标签处理。应用程序描述现在显示在聊天和文本生成应用程序屏幕上，并具有可折叠视图，以避免将输入表单推离屏幕。

**工作流程可靠性和操作**
- 现在可以导出工作流运行档案，并且在 Celery 热关闭期间正确中止活动运行，以防止孤立任务。 Redis 连接通过 TCP keepalive 支持和扩展的重试覆盖范围更具弹性。模型提供商现在收到 `app_id` 用于提供商方成本归因（例如 Bedrock requestMetadata、OpenAI 元数据、Vertex AI 标签）。 OAuth 和 SSO 登录流程现在可以更可靠地保留重定向 URL，并针对失败的 SSO 完成提供专用的错误视图。

## 错误修复

**工作流程和代理**
- 修复了工作流程草稿导入丢失引用、失败后节点解决、重试细节可见性和 HITL 恢复状态恢复的多个问题
- 修复了 Unicode 分隔符导致的 SSE 流损坏、流完成后代理最终答案清除以及会话标题被空值覆盖的问题
- 修复了工作流存档重试强化、多工作人员协作支持和聊天树无序父节点
- 修复了未向用户显示的知识检索失败问题，以及内置模板中结束输出变量名称冲突的问题

**身份验证和访问控制**
- 修复了登录后和身份验证重定向流程中的开放重定向漏洞
- 修复了登录重定向不保留在当前部署、身份验证前缀重复和更改电子邮件不起作用的问题
- 修复编辑者权限问题：编辑者现在可以查看日志，不再查询计费订阅，也无法再管理会员
- 修复了不需要编辑访问权限的跟踪配置更改，以及推荐应用程序的试用应用程序访问强化

**模型和插件**
- 修复了删除时未清除自定义模型缓存、模型插件调试失败以及 Xinference 凭证上下文处理的问题
- 修复了后续模型参数中无法禁用最大令牌参数的问题
- 修复了插件提供商缓存踩踏、市场安装回调和插件权限设置

**网页和用户界面**
- 修复了 Learn Dify 的应用程序创建、节点搜索字段输入、工作区头像一致性和导航配置文件显示
- 修复了 Streamdown 全屏表格操作、市场页面标题抖动和安装对话框可访问性
- 修复了聊天附件滚动到视图之外、HITL 输入保存按钮可见性以及应用卡元溢出的问题
- 修复监控图表零值显示、会员邀请状态处理、深色模式背景、表单字段名称中的 Unicode 字符
- 修复了 CSP 下的 Markdown 文件预览链接下载、Notion 同步空状态和博客 UTM 归属

**其他**
- 修复了批量文档删除中的无限循环、无效的 UTF-8 缓存有效负载以及吞没文档索引错误
- 修复了 PostgreSQL 18 本机 uuidv7() 支持和 ADB-PG 7.0 兼容性
- 修复了 `CAN_REPLACE_LOGO` 默认为 true、execute_code 中不支持的语言错误，以及 CLI `--insecure` 标志不跳过 TLS 验证

## 改进

**性能**
- 消除了高级聊天工作流程运行列表中的 N+1 查询和 TokenBufferMemory 消息文件加载
- 通过延迟加载的 Vite 插件和控制台合约分片加快前端启动速度
- 通过缓存设置状态、使用 zstd 压缩 Redis 中的大型插件模型对象以及通过直接外键检索已发布的工作流程来减少数据库负载

**架构和代码质量**
- 将所有控制台 API 端点迁移到使用 BaseModel 生成的 OpenAPI 合约，并将前端控制台合约迁移到生成的路由和类型
- 跨后端路径传播显式数据库会话，以实现一致性和可测试性
- 用前端的 Jotai 原子替换了旧的应用程序上下文提供程序
- 升级到 TypeScript 7 和 Vite+ 工具链，强制执行严格的 ESLint 规则，并不允许在控制器中使用新的直接 SQLAlchemy

## 安全增强

此版本包含多个安全强化修复程序，其中一些修复程序在 1.16.0-rc1 版本之后得到解决：

- **SQL注入**：通过元数据密钥验证封闭了SQL注入漏洞并增强了SQL查询安全性
- **SSRF**：修复了通过 API 工具架构获取中的原始 `httpx.get` 绕过 SSRF
- **开放重定向**：阻止登录后和身份验证重定向流程中的开放重定向
- **沙盒执行**：Chatflow API 现在检查工作流_id 和沙盒计划；沙盒计划不会执行特殊的工作流程
- **内陆锁保护**：代理主目录受内陆锁保护；降级到 v1 以获得更广泛的内核兼容性
- **CVE 依赖项升级**：httplib2、setuptools、wandb； python-发动机、python-插座；浮躁, 枕头, click

---

## 环境变量更改

### 添加

|变量|默认 |文件 |描述 |
|---|---|---|---|
| `AGENT_BACKEND_BASE_URL` | `http://localhost:5050` | `api/.env.example` |代理后端服务的基本 URL |
| `AGENT_BACKEND_STREAM_READ_TIMEOUT_SECONDS` | `30` | `api/.env.example` | Agent 后端的流读取超时 |
| `AGENT_BACKEND_STREAM_MAX_RECONNECTS` | `3` | `api/.env.example` |代理后端流的最大重新连接尝试次数 |
| `AGENT_BACKEND_RUN_TIMEOUT_SECONDS` | `1200` | `api/.env.example` |代理后端总体运行超时 |
| `API_WEBSOCKET_WORKER_AMOUNT` | `1` | `docker/envs/core-services/shared.env.example` | WebSocket API 工作人员数量 |
| `DIFY_AGENT_REDIS_URL` | _（空，源自 `REDIS_PASSWORD`）_ | `docker/envs/core-services/dify-agent.env.example` | Redis Dify 代理的 URL |
| `DIFY_AGENT_REDIS_PREFIX` | `dify-agent` | `docker/envs/core-services/dify-agent.env.example` | Dify Agent 的 Redis 密钥前缀 |
| `DIFY_AGENT_SHUTDOWN_GRACE_SECONDS` | `30` | `docker/envs/core-services/dify-agent.env.example` |强制关机前的宽限期|
| `DIFY_AGENT_RUN_RETENTION_SECONDS` | `259200` | `docker/envs/core-services/dify-agent.env.example` |代理运行记录保留期限|
| `DIFY_AGENT_PLUGIN_DAEMON_URL` | _（空，源自 `PLUGIN_DAEMON_URL`）_ | `docker/envs/core-services/dify-agent.env.example` | Dify Agent 的插件守护程序 URL |
| `DIFY_AGENT_PLUGIN_DAEMON_API_KEY` | _（空，源自 `PLUGIN_DAEMON_KEY`）_ | `docker/envs/core-services/dify-agent.env.example` | Dify Agent 的插件守护程序 API 密钥 |
| `DIFY_AGENT_INNER_API_URL` | _（空，源自 `PLUGIN_DIFY_INNER_API_URL`）_ | `docker/envs/core-services/dify-agent.env.example` | Dify 代理的内部 API URL |
| `DIFY_AGENT_INNER_API_KEY` | _（空）_ | `docker/envs/core-services/dify-agent.env.example` |内部 API 钥匙（必须与 `INNER_API_KEY_FOR_PLUGIN` 匹配，而不是 `INNER_API_KEY`）|
| `DIFY_AGENT_SHELLCTL_ENTRYPOINT` | `http://local_sandbox:5004` | `docker/envs/core-services/dify-agent.env.example` | Shellctl 入口点 URL |
| `DIFY_AGENT_SHELLCTL_AUTH_TOKEN` | _（空）_ | `docker/envs/core-services/dify-agent.env.example` | shellctl 的身份验证令牌 |
| `DIFY_AGENT_STUB_API_BASE_URL` | `http://agent_backend:5050/agent-stub` | `docker/envs/core-services/dify-agent.env.example` |代理存根 API 的基本 URL |
| `DIFY_AGENT_SERVER_SECRET_KEY` | _（开发默认）_ | `docker/envs/core-services/dify-agent.env.example` |代理存根承载令牌的 JWE 加密密钥。 **在生产中替换**为 `python -c 'import secrets; print(secrets.token_urlsafe(32))'` |
| `DIFY_AGENT_SHELL_REDACT_PATTERNS` | _（空）_ | `docker/envs/core-services/dify-agent.env.example` |编辑 shell 输出的模式 |
| `SHELLCTL_ENABLE_PATH_ISOLATION` | `true` | `docker/envs/core-services/local-sandbox.env.example` |在 shellctl 中启用路径隔离 |
| `NEW_USER_DEFAULT_PLUGIN_IDS` | _（空）_ | `api/.env.example` |为新用户自动安装的以逗号分隔的插件 ID |
| `NEW_USER_DEFAULT_MODELS` | _（空）_ | `api/.env.example` |新用户默认机型|
| `WORKFLOW_GENERATION_TIMEOUT_MS` | `180000` | `docker/envs/core-services/shared.env.example` | AI 工作流程生成超时 |
| `WORKFLOW_GENERATOR_NODE_BUILDER_MAX_WORKERS` | `6` | `api/.env.example` |用于节点配置生成的最大并行工作线程 |
| `REDIS_KEEPALIVE` | `true` | `api/.env.example` |启用 Redis TCP 保活 |
| `REDIS_KEEPALIVE_IDLE` | `30` | `api/.env.example` | Redis keepalive 空闲时间（秒）|
| `REDIS_KEEPALIVE_INTERVAL` | `10` | `api/.env.example` | Redis 保活间隔（秒）|
| `REDIS_KEEPALIVE_COUNT` | `10` | `api/.env.example` | Redis 保活探针计数 |
| `NEXT_PUBLIC_ENABLE_AGENT_V2` | `true` | `docker/envs/core-services/web.env.example` |启用代理应用程序 v2（取代 `ENABLE_AGENT_V2`）|

### 已删除

|变量|旧默认|文件 |笔记|
|---|---|---|---|
| `ENABLE_AGENT_V2` | `false` | ZZPH100​​ZZ |替换为 `NEXT_PUBLIC_ENABLE_AGENT_V2`（现在默认为 `true`）|

### 修改

|变量|旧|新 |文件 |
|---|---|---|---|
| `NEXT_PUBLIC_ENABLE_FEATURE_PREVIEW` | `false` | `true` | `docker/envs/core-services/web.env.example` |

### Docker 撰写更改

- 新服务：`agent_backend` (`langgenius/dify-agent-backend:1.16.0`) 和 `local_sandbox` (`langgenius/dify-agent-local-sandbox:1.16.0`)
- `api` 和 `worker` 服务现在依赖于 `agent_backend`
- `API_WEBSOCKET_WORKER_AMOUNT` 现在可配置（已硬编码为 1）
- `WORKFLOW_GENERATION_TIMEOUT_MS` 已添加至 `web` 服务

---

## 数据库迁移

此版本包括 9 个新的数据库迁移：

- `2026_05_25_1143-97e2e1a644e8_add_workflow_version_to_workflow_agent_.py`
- `2026_06_12_1100-0b2f2c8a9d1e_add_agent_role.py`
- `2026_06_18_2300-b2515f9d4c2a_agent_drive_skill_metadata_refactor.py`
- `2026_06_24_1900-a6f1c9d2e8b4_add_input_placeholder_to_sites.py`
- `2026_06_24_2015-e4f5a6b7c8d9_add_agent_config_drafts.py`
- `2026_06_25_1100-a2b3c4d5e6f7_add_agent_backing_app_id.py`
- `2026_06_25_1500-7a1c2d9e4b60_add_workflow_run_archive_index_tables.py`
- `2026_06_26_1000-c3d4e5f6a7b8_add_agent_active_config_is_published.py`

更新代码后运行`flask db upgrade`。

---

## 升级指南

### 模型类型迁移

> [!重要]
>
> **用于自托管升级的一次性旧模型类型迁移**
>
> 如果此部署是从早于 `1.15.0` 的 Dify 版本升级的，并且此迁移尚未应用，请在升级后运行它。
>
> 此迁移**不包含在 `flask db upgrade`** 中。如果没有它，旧模型记录可能会导致模型相关的 API 请求失败并出现错误，从而阻止加载或使用受影响的模型。
>
> 应用迁移之前备份数据库。该命令默认以空运行模式运行；在使用 `--apply` 重新运行之前检查输出。迁移是幂等的并且可以安全地重新运行。

#### Docker 撰写

从 `docker` 目录运行。

```bash
# Apply after reviewing the dry-run output
docker compose exec -T api flask data-migrate legacy-model-types --apply \
  > legacy-model-types-apply.jsonl
```

#### 源代码部署

完成 `flask db upgrade` 后从存储库根运行。

```bash
# Apply after reviewing the dry-run output
uv run --project api flask data-migrate legacy-model-types --apply \
  > legacy-model-types-apply.jsonl
```
应用迁移后，再次运行 dry-run 命令。如果报告没有额外的行更新或删除，请重新启动相关服务并验证现有模型是否可以成功加载和调用。

> [!重要]
>
> - 此版本包括 **8 个新的数据库迁移**。作为升级的一部分运行数据库迁移。
> - **28 个新环境变量**，**1 个已删除**，**1 个已修改**。查看环境变量更改部分并相应更新您的 `.env`。
> - **Docker Compose 配置发生显着变化**：添加了两项新服务（`agent_backend`、`local_sandbox`）。如果您维护自定义的 `docker-compose.yaml`，请仔细查看更改并重新应用本地自定义。
> - **`DIFY_AGENT_SERVER_SECRET_KEY`** 附带开发默认值。 **您必须在生产中将其替换为安全生成的密钥：`python -c 'import secrets; print(secrets.token_urlsafe(32))'`
> - **`ENABLE_AGENT_V2`** 已重命名为 `NEXT_PUBLIC_ENABLE_AGENT_V2`，现在默认为 `true`。从环境文件中删除旧变量。
> - **OpenAI GPT-5.6 用户**：如果您之前配置了自定义 OpenAI API 密钥，请验证您的 API 类型是否设置为 **响应**（不是聊天完成）。请参阅上面的已知问题部分。

### Docker 组合部署

1. 备份您的自定义 docker-compose YAML 和 env 文件。
   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   cp .env .env.$(date +%s).bak 2>/dev/null || true
   ```

2. 从发布分支或标签获取最新代码。
   ```bash
   git fetch --tags
   git checkout 1.16.0
   ```

3. 停止服务。请在`docker`目录下执行。
   ```bash
   docker compose down
   ```

4. 备份数据。
   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```

5. 查看新的环境变量（尤其是 `DIFY_AGENT_SERVER_SECRET_KEY`）并更新 `.env` 文件。重新应用任何本地自定义。

6、升级服务。
   ```bash
   docker compose up -d
   ```

### 源代码部署

1. 停止API服务器、Worker和Web前端服务器。

2. 从release标签获取最新的代码。
   ```bash
   git fetch --tags
   git checkout 1.16.0
   ```

3.更新Python依赖项。
   ```bash
   cd api
   uv sync
   ```

4. 运行迁移脚本。
   ```bash
   uv run flask db upgrade
   ```

5. 配置新的代理后端服务。有关所需的环境变量，请参阅 `docker/envs/core-services/dify-agent.env.example` 中的 `dify-agent` 部分。

6. 重新启动 API 服务器、Worker 和 Web 前端服务器。

---

## 发生了什么变化
* 杂务（api）：https://github.com/langgenius/dify/pull/37934中@QuantumGhost在类型检查失败时表面pyrefly输出
* 测试：https://github.com/langgenius/dify/pull/37971 中 @ojasarora77 的工作流程协作测试中将记录器模拟替换为 caplog
* ci：通过@ojasarora77在https://github.com/langgenius/dify/pull/37974中将pyrefly诊断作为GitHub工作流程命令发出
* 重构(api)：通过https://github.com/langgenius/dify/pull/37950中的@cqjjjzr将响应合约工具迁移到BaseModel
* 修复（cli）：在 https://github.com/langgenius/dify/pull/37976 中使用 @GareArc 的 difyctl 预发布警告中的一篇文章
* 修复（api）：需要编辑访问权限以通过 @laipz8200 在 https://github.com/langgenius/dify/pull/37973 中更改跟踪配置
* feat(webapp)：在https://github.com/langgenius/dify/pull/37345中@kurokobo在聊天和文本生成应用程序屏幕上显示应用程序描述
* 修复：https://github.com/langgenius/dify/pull/37936 中@hyoban 解耦部署访问控制对话框
* 重构（测试）：在 https://github.com/langgenius/dify/pull/37991 中的@hikariming 在工作流协作服务测试中使用 caplog (#37468)
* 修复（网络）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/37944 中使市场 URL 构建器 SSR 安全
* 重构：通过 @hyoban 在 https://github.com/langgenius/dify/pull/37994 中简化部署访问所有权
* 重构：在 https://github.com/langgenius/dify/pull/37997 中使用 @DevCube24 在 test_spec.py 中使用 pytest caplog 而不是记录器修补
* 重构：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38008 中调整部署详细状态所有权
*修复：在https://github.com/langgenius/dify/pull/37998中通过@lyzno1隔离节点选择器键盘事件
* 修复（web）：在 https://github.com/langgenius/dify/pull/38007 中@manan-tech 的编辑对话框中保持 HITL 输入字段保存按钮可见
* 重构（api）：通过https://github.com/langgenius/dify/pull/38009中的@GareArc在openapi表面上强制对字符串文字进行枚举
* 杂务：通过https://github.com/langgenius/dify/pull/38010中的@escape0707将帐户角色测试迁移到testcontainers
* 重构：通过 https://github.com/langgenius/dify/pull/38016 中的 @xiejl001 将数据库会话传递到服务调用中 (#37403)
* feat(api)：在https://github.com/langgenius/dify/pull/37980中缓存@linw1995的工作流提供程序配置
* 修复(web): 在 CSP 下通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/38022 中可靠地捕获博客 UTM/slug 属性
* 修复：https://github.com/langgenius/dify/pull/38000 中 @hjlarry 某些失败时间过长时插件安装任务弹出窗口布局
* feat(web)：通过 @CyberPU2099 在 https://github.com/langgenius/dify/pull/37790 中为 Agent/Chatflow/Chatbot Web 应用程序添加可自定义的输入占位符
* 重构：在 https://github.com/langgenius/dify/pull/38029 中 @EvanYao826 将 test_version.py 中的补丁记录器替换为 caplog
* 文档（网络）：修复 https://github.com/langgenius/dify/pull/38006 中 @Harsh23Kashyap 的测试指南链接
* feat(agent-v2)：将每晚更新同步到 https://github.com/langgenius/dify/pull/37915 中的 @BeautyyuYanli 主站 (2026-06-25)
* 杂务：由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/37941 中注入会话
* 修复（网页）：通过 @uxgnod 在 https://github.com/langgenius/dify/pull/38030 中下载 Markdown 文件预览链接作为附件
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/38035 中与 en-US 同步翻译
*修复：通过https://github.com/langgenius/dify/pull/38036中的@lyzno1从加载按钮中删除aria-busy
*修复：通过@lyzno1在https://github.com/langgenius/dify/pull/38037中提高会员角色筹码的可访问性
* 修复：改进 https://github.com/langgenius/dify/pull/38027 中 @41tair 运行存档幂等性和批处理的工作流程
* 重构(web)：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38065 中组织部署功能状态
* 修复：防止退出 toast 阻塞 https://github.com/langgenius/dify/pull/38063 中 @lyzno1 的页面 clicks
*修复：https://github.com/langgenius/dify/pull/38078中@lyzno1在路线布局中的门部署
* 重构：https://github.com/langgenius/dify/pull/38077 中 @wylswz 的 shell 提供程序协议
* 修复：通过 https://github.com/langgenius/dify/pull/38113 中的 @lyzno1 简化滚动区域组成
* 修复（网页）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/38114 中改进主导航焦点轮廓
* 修复：https://github.com/langgenius/dify/pull/38126 中 @fatelei 的 CAN_REPLACE_LOGO 应该为 false
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/38128 更新部门
* 杂务：在 https://github.com/langgenius/dify/pull/38141 中通过 @hyoban 降级 openapi-ts
* 修复：https://github.com/langgenius/dify/pull/38138 中@WTW0313 支持表单字段名称中的 Unicode 字符
* 功能：完善片段侧边栏并支持 RBAC。作者：@FFXN，https://github.com/langgenius/dify/pull/38134
* 修复（web）：在 https://github.com/langgenius/dify/pull/38146 中通过 @lyzno1 对齐 Web 应用程序导航项宽度
* 修复(api): 隔离 @lin-hongkuan 在 https://github.com/langgenius/dify/pull/37895 中写入的副作用数据库
*修复（api）：将专用超时连接到https://github.com/langgenius/dify/pull/38150中@GareArc的内部RBAC请求
* 修复：https://github.com/langgenius/dify/pull/38080 中 @Blackoutta 的多模式段附件索引
* 修复：@hjlarry 在 https://github.com/langgenius/dify/pull/38014 中无法很好地显示代理应用程序日志详细信息模式
* 修复（vdb）：删除 https://github.com/langgenius/dify/pull/38004 中 @shiyuanfang2nd 的 ADB-PG 7.0 兼容性已弃用的 SQL 选项
* 修复：编辑者不应在 https://github.com/langgenius/dify/pull/38157 中查询 @hjlarry 的计费订阅
* perf(api)：通过 @linw1995 在 https://github.com/langgenius/dify/pull/38153 中的 app.workflow_id 检索已发布的工作流程
* 修复：编辑者可以在https://github.com/langgenius/dify/pull/38165中查看@hjlarry的日志
* perf: make 命令 rbac-migrate-member-roles 使用更少的内存并使其...由 https://github.com/langgenius/dify/pull/38151 中的 @fatelei
*修复（api）：当PostgreSQL 18在https://github.com/langgenius/dify/pull/36998中由@zeeshan56656本地提供uuidv7（）时，跳过uuidv7（）创建
* feat(mcp): 在 MCPClient 中支持 https://github.com/langgenius/dify/pull/37938 中的 @Sanket2329 的动态 HTTP 请求标头
* 杂务（i18n）：通过https://github.com/langgenius/dify/pull/38186中的@WTW0313更新多种语言的角色管理权限密钥
* 修复：通过 https://github.com/langgenius/dify/pull/38188 中的 @WTW0313 更新权限集和角色模式中的文档链接
* 测试（e2e）：通过@lyzno1在https://github.com/langgenius/dify/pull/38191中添加代理v2测试基础设施
* feat: 支持https://github.com/langgenius/dify/pull/38166中@fatelei的数据集权限迁移到rbac
* 杂务：在 https://github.com/langgenius/dify/pull/38045 中注入更多 db.session by @asukaminato0721
*修复（工作流程）：在https://github.com/langgenius/dify/pull/38200中通过@MRZHUH保护DEBUG后面的on_tool_execution stdout跟踪
* 修复：https://github.com/langgenius/dify/pull/38194 中 @Blackoutta 为 Dify 1.15.0+ 进行压力测试设置流程和报告结构工作流程
* 修复：@hjlarry 在 https://github.com/langgenius/dify/pull/38197 中调试插件权限设置不起作用
* Chore(dify-ui): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/38189 中更新主题标记
*修复（api）：https://github.com/langgenius/dify/pull/38177中@WH-2099的所有者引用的范围嵌套资源查找
* 修复（api）：通过 @GareArc 在 https://github.com/langgenius/dify/pull/38204 中注册 rbac-migrate-dataset-permissions CLI 命令
* 修复（api）：通过 @cqjjjzr 在 https://github.com/langgenius/dify/pull/38042 中修复 API 合约生成基础设施
*修复（api）：防止@VeraPyuyi在https://github.com/langgenius/dify/pull/37388中插件提供者缓存踩踏
* perf(web): 通过 @hyoban 在 https://github.com/langgenius/dify/pull/38219 中改进 vinext home 启动时间
* 修复(web): 在 https://github.com/langgenius/dify/pull/38222 中隐藏 @hyoban 的部署访问选项卡
* 修复（web）：在 https://github.com/langgenius/dify/pull/38229 中隐藏 @hyoban 的部署访问侧边栏选项卡
* perf(web): @hyoban 在 https://github.com/langgenius/dify/pull/38230 中延迟加载控制台合约分片
* 修复(api): 当https://github.com/langgenius/dify/pull/38118中的@p2003722批量删除失败时，避免_delete_records中的无限循环
* 重构(web)：将控制台合约迁移到https://github.com/langgenius/dify/pull/38231中@hyoban生成的类型
* feat(workflow-generator)：通过@crazywola在https://github.com/langgenius/dify/pull/38175中端到端增强AI自动创建流程
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/38239 中与 en-US 同步翻译
*构建（deps）：通过@dependabot [bot]在https://github.com/langgenius/dify/pull/38135中将/dify-agent中的pydantic-ai-slim从1.85.1提升到1.102.0
* 修复：通过 @Jingyi-Dify 在 https://github.com/langgenius/dify/pull/38236 中处理集成市场安装回调
* 杂务（agent-v2）：在 https://github.com/langgenius/dify/pull/38162 中同步 @lyzno1 的每日更改
* 重构（web）：将控制台合约迁移到https://github.com/langgenius/dify/pull/38233中@hyoban生成的路由
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38241 中将详细侧边栏与主导航分离
* 重构：通过https://github.com/langgenius/dify/pull/38082中的@sergioperezcheco在DatasetIndexToolCallbackHandler中显式传递db.session
* 重构：使用 Pydantic 进行敏感词避免配置（修复 #37… by @escapefyh in https://github.com/langgenius/dify/pull/37660
* 修复：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/38251 中订购主要导航帐户类别
* 杂务（github）：通过@lyzno1在https://github.com/langgenius/dify/pull/38257中添加e2e标签和代码所有者
* 修复（网络）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38263 中提高卡片网格响应能力
* 杂务：删除https://github.com/langgenius/dify/pull/38269中@iamjoel使用效果中无用的标签参数逻辑
* 修复（网络）：澄清 https://github.com/langgenius/dify/pull/38260 中@euxx 未发布的探索应用程序处理
* 重构（ui）：在https://github.com/langgenius/dify/pull/38275中使用@lyzno1的插入环实用程序
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38253 中迁移模型提供者控制台合约
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38255 中迁移触发控制台合约
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38256 中迁移 rbac 访问控制台合约
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38252 中迁移插件控制台合约
* 重构（web）：在 https://github.com/langgenius/dify/pull/38258 中迁移 @hyoban 的代码片段控制台合约
* 重构（web）：在 https://github.com/langgenius/dify/pull/38254 中迁移@hyoban 的试用应用程序控制台合约
* 杂务：通过 @QuantumGhost 在 https://github.com/langgenius/dify/pull/38286 中删除空的 .codex 文件
* 修复(web): 通过 @GareArc 在 https://github.com/langgenius/dify/pull/38282 中为 CLI 设备流程登录页面添加缺少的 i18n
* 重构（api）：通过https://github.com/langgenius/dify/pull/37951中的@cqjjjzr将控制台应用程序公共端点迁移到BaseModel
* 重构（web）：删除 https://github.com/langgenius/dify/pull/38284 中 @hyoban 的自定义控制台合约加载器
* 重构（api）：通过https://github.com/langgenius/dify/pull/37952中的@cqjjjzr将控制台应用程序聊天端点迁移到BaseModel
*修复（api）：在https://github.com/langgenius/dify/pull/38226中通过@WH-2099保持提供商刷新服务员单次飞行
* 修复（api）：在 https://github.com/langgenius/dify/pull/38271 中允许 @manan-tech 加载旧版 `service_api` 最终用户类型
* 修复（模板）：通过 @manan-tech 在 https://github.com/langgenius/dify/pull/38293 中使最终输出变量名称在内置模板中唯一
* 修复：https://github.com/langgenius/dify/pull/38296 中 @iamjoel 发布前网页细节调整
* 测试（e2e）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/38209 中添加代理 v2 核心覆盖
*修复：https://github.com/langgenius/dify/pull/38295中@FFXN的sql注入
*修复（api）：停止在https://github.com/langgenius/dify/pull/38192中由@Harsh23Kashyap创建处理程序时吞噬文档索引错误
* 杂务（api）：在https://github.com/langgenius/dify/pull/38250中@QuantumGhost禁止新代码中的内置getattr变体
* 修复：在应用程序上下文之外工作。作者：https://github.com/langgenius/dify/pull/38300 的@fatelei
* 修复（agent-v2）：在 https://github.com/langgenius/dify/pull/38303 中 @linw1995 转换工具 c 时保留 oauth2 凭证引用
*修复（web）：在https://github.com/langgenius/dify/pull/38292中对齐@hyoban的监控概览图表
* 修复(web): 在https://github.com/langgenius/dify/pull/38308中通过@lyzno1填充数据集创建布局高度
* 修复：在 https://github.com/langgenius/dify/pull/38242 中支持 @hjlarry 的多工作人员工作流程协作
* 重构（web）：将市场合约移动到 @hyoban 在 https://github.com/langgenius/dify/pull/38311 中的合约包
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/38301 中与 en-US 同步翻译
* 修复：增强SQL查询安全性并在https://github.com/langgenius/dify/pull/38307中添加@FFXN元数据密钥验证
* feat(agent-v2)：通过 @linw1995 在 https://github.com/langgenius/dify/pull/38316 中解析代理运行时运行程序中的 Dify 核心工具
* 修复：@hjlarry 在 https://github.com/langgenius/dify/pull/38321 知识创建中概念同步空状态宽度
* 修复：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38322 中标准化 oRPC 的查询数组参数
* 修复（工作空间）：暴露 @lyzno1 在 https://github.com/langgenius/dify/pull/38323 中最后打开的合约
* 修复（网络）：在 https://github.com/langgenius/dify/pull/38324 中保留 @hyoban 的应用程序排序过滤器和标头过滤器
* 测试：通过https://github.com/langgenius/dify/pull/38313中的@escape0707将标签服务测试迁移到testcontainers
* 重构：通过 @41tair 在 https://github.com/langgenius/dify/pull/38309 中的应用程序检索路径线程显式会话
* 修复（网络）：在 https://github.com/langgenius/dify/pull/38326 中通过 @lyzno1 对齐主导航应用程序项目状态
* 修复：https://github.com/langgenius/dify/pull/38349 中 @Jingyi-Dify 防止应用卡元溢出
* perf(memory): 批量加载TokenBufferMemory中的消息文件，以删除https://github.com/langgenius/dify/pull/38002中@weijun-xia的N+1个查询
* feat(device-flow)：将 SSO 完成失败重定向到 https://github.com/langgenius/dify/pull/38185 中 @GareArc 的专用设备错误视图
* 修复（web）：通过https://github.com/langgenius/dify/pull/38139中的@p2003722在数据集标题中垂直对齐外部API和服务API按钮
* 杂务(api)：将graphon升级到v0.6.0，通过https://github.com/langgenius/dify/pull/38247中的@QuantumGhost将HITL逻辑迁移回Dify
* 修复：通过 @AsperforMias 在 https://github.com/langgenius/dify/pull/38348 中处理 Xinference 模型凭证上下文
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/38355 中与 en-US 同步翻译
*壮举（api）：在https://github.com/langgenius/dify/pull/38220中由@linw1995在Celery热关闭期间中止活动工作流程运行
* 壮举：@JzoNgKVO 在 https://github.com/langgenius/dify/pull/38371 中更新片段侧边栏
* 杂务：在 redis 中压缩 redis 中的大型plugin_model obj，由 @hjlarry 在 https://github.com/langgenius/dify/pull/38374 中压缩
*修复（cli）：在https://github.com/langgenius/dify/pull/38375中@lin-snow的difyctl安装脚本中报告GitHub API速率限制
* 重构：通过 @41tair 在 https://github.com/langgenius/dify/pull/38274 中显式管理 rag 管道会话
* 修复：https://github.com/langgenius/dify/pull/38378 中深色模式时背景不正确且没有@hjlarry 的插件
* 杂务：使用 zstd 作为 https://github.com/langgenius/dify/pull/38382 中 @hjlarry 的插件模型提供程序缓存
* 修复（网页）：通过 @JzoNgKVO 在 https://github.com/langgenius/dify/pull/38386 中调整片段输入计数徽章颜色
* 修复（聊天）：通过 https://github.com/langgenius/dify/pull/38385 中的 @WTW0313 增强聊天组件中的指针事件处理
*壮举（api）：通过@linw1995在https://github.com/langgenius/dify/pull/38390中为代理应用程序对话添加沙箱信息端点
* 重构：通过 @41tair 在 https://github.com/langgenius/dify/pull/38379 中为迁移流明确会话边界
* 重构：将 db.paginate 替换为 https://github.com/langgenius/dify/pull/38280 中 @sergioperezcheco 的普通 SQLAlchemy 分页
* test(dify-ui): 删除https://github.com/langgenius/dify/pull/38418中@lyzno1的低值样式断言
*修复（dify-ui）：通过https://github.com/langgenius/dify/pull/38417中的@lyzno1标准化故事焦点指标
* 修复（模型）：更正https://github.com/langgenius/dify/pull/38341中@SquabbyZ在trigger.py update_at列上的onupdate拼写错误
* 重构（dify-ui）：通过 @lyzno1 和 @Copilot 在 https://github.com/langgenius/dify/pull/38420 中将 ContextMenu 故事触发器渲染为语义区域
* 杂务（agent-v2）：在 https://github.com/langgenius/dify/pull/38298 中同步 @lyzno1 的每日更改
* 样式：通过 https://github.com/langgenius/dify/pull/38422 中的 @lyzno1 修复提供商卡下拉菜单分隔符边距
* ci：@lyzno1 和 @Copilot 在 https://github.com/langgenius/dify/pull/38426 中将外部 E2E 提取到专用的合并后工作流程中
* 修复（web）：防止插件卡与https://github.com/langgenius/dify/pull/38427中的@lyzno1重叠市场面板
*修复（dify-ui）：通过https://github.com/langgenius/dify/pull/38428中的@lyzno1改进选择器类型推断
*修复（dify-ui）：在https://github.com/langgenius/dify/pull/38429中保留@lyzno1的无线电值泛型
* 测试（e2e）：拆分代理构建草稿应用 @lyzno1 在 https://github.com/langgenius/dify/pull/38431 中的覆盖范围
* 修复（api/tasks）：在resume_workflow_ex中使用f字符串引发消息…由@Harsh23Kashyap在https://github.com/langgenius/dify/pull/37607中
* 重构（api）：通过https://github.com/langgenius/dify/pull/37953中的@cqjjjzr将控制台探索端点迁移到BaseModel
* 重构：删除多余的 len(tag_ids)==0 检查 https://github.com/langgenius/dify/pull/38447 中 @isheng-eqi 的 get_target_ids_by_tag_ids
* build(deps)：在 https://github.com/langgenius/dify/pull/38430 中通过 @dependabot[bot] 进行 12 次更新，在 1 个目录中碰撞 github-actions-dependencies 组
* 修复（网络）：通过 @JzoNgKVO 在 https://github.com/langgenius/dify/pull/38445 中更新片段占位符图标颜色
* 修复（api）：隔离https://github.com/langgenius/dify/pull/38210中@agarwalpranav0711在多模式和RAG处理程序中的副作用会话写入
* 文档(dify-ui)：澄清 @lyzno1 在 https://github.com/langgenius/dify/pull/38456 中的广播创作故事
* 重构（api）：通过https://github.com/langgenius/dify/pull/37954中的@cqjjjzr将工作区帐户端点迁移到BaseModel
* 重构（api）：通过https://github.com/langgenius/dify/pull/37958中的@cqjjjzr将数据集rag管道端点迁移到BaseModel
* 重构（api）：通过@cqjjjzr在https://github.com/langgenius/dify/pull/37966中删除成员字段兼容性
* 测试：示例使用 sqlite3 作为 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38159 中的单元测试后端
* 重构（api）：通过https://github.com/langgenius/dify/pull/37961中的@cqjjjzr将Web身份验证端点迁移到BaseModel
* 修复（api）：在https://github.com/langgenius/dify/pull/38098中通过@Harsh23Kashyap在向后调用中解析插件外部用户ID
* feat(api)：通过https://github.com/langgenius/dify/pull/35859中的@ryuta-kobayashi-ug将app_id传递给模型插件以进行提供商端成本归因
* 修复(web): 在 https://github.com/langgenius/dify/pull/38460 中通过 @hjlarry 重定向具有创建者权限的导入应用程序
* 杂务：更新 https://github.com/langgenius/dify/pull/38473 中 @hjlarry 的侧边栏 Web 应用程序菜单翻译
* 重构(dify-ui)：通过 @lyzno1 将无线电系列 API 合并到 https://github.com/langgenius/dify/pull/38479 中
* 杂务（agent-v2）：在https://github.com/langgenius/dify/pull/38442中同步@lyzno1的更改
* 重构（api）：停止通过https://github.com/langgenius/dify/pull/38463中的@QuantumGhost将刷新令牌服务错误屏蔽为401
* 修复(web): 在https://github.com/langgenius/dify/pull/38487中统一@Jingyi-Dify的详细侧边栏首页控制
*重构（api）：通过https://github.com/langgenius/dify/pull/38483中的@WH-2099澄清DSL导入和插件迁移边界
* 杂务：在 https://github.com/langgenius/dify/pull/38362 中通过 @crazywola 和 @Copilot 将 NEXT_PUBLIC_ENABLE_FEATURE_PREVIEW 默认设置为 true
* feat(mcp)：支持 MCP 协议 2025-06-18，用于 https://github.com/langgenius/dify/pull/37892 中的 @CourTeous33 的工作流作为 MCP 服务器（版本协商 + 结构化输出）
* 测试(e2e)：稳定Agent v2外部运行时检查，由@hyoban在https://github.com/langgenius/dify/pull/38493中进行
* 杂务：将 sqlite3 添加到 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38475 中的 conftest
*修复：通过https://github.com/langgenius/dify/pull/37850中的@jashwanth-reddy-g解决36288 mypy错误
* 修复：编辑者不应在 https://github.com/langgenius/dify/pull/38503 中通过 @hjlarry 管理成员
* 杂务：在 https://github.com/langgenius/dify/pull/38505 中通过 @fatelei 更新编辑器权限
* 杂务：改进 https://github.com/langgenius/dify/pull/38496 中@FFXN 的樱桃挑选错过的消息
* 文档（组件）：@lyzno1 在 https://github.com/langgenius/dify/pull/38509 中记录焦点可见指导
* 重构(web)：通过https://github.com/langgenius/dify/pull/38511中的@lyzno1将应用程序上下文布局样式移动到shell
* 修复（网页）：在 https://github.com/langgenius/dify/pull/38517 中添加背景模糊以跳过 @lyzno1 的导航
* 修复：无法在 https://github.com/langgenius/dify/pull/38500 中调试 @hjlarry 的模型插件
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38516 中澄清应用程序上下文引导图
* Chore(api): 缓存设置状态以减少@cqjjjzr在https://github.com/langgenius/dify/pull/36966中的数据库访问
* 重构（测试）：在 https://github.com/langgenius/dify/pull/38393 中 @ojasarora77 安排服务测试中用类型化模拟替换 SimpleNamespace
* 重构（web）：减少https://github.com/langgenius/dify/pull/38521中@hyoban的查询原子订阅
* 测试（服务）：在 https://github.com/langgenius/dify/pull/36072 中涵盖 @Lillian68 的 DSL 导入和插件迁移回归
* 重构（openapi）：https://github.com/langgenius/dify/pull/38367 中 @lin-snow 的 /openapi/v1 + difyctl 版本门的面向资源的路径
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38523 中迁移数据集访问上下文
* 杂务：从 https://github.com/langgenius/dify/pull/38227 中的 @asukaminato0721 服务中清理数据库会话
* test(dify-ui): 删除 https://github.com/langgenius/dify/pull/38529 中 @lyzno1 的脆弱原始断言
* 重构（web）：通过https://github.com/langgenius/dify/pull/38530中的@hyoban迁移应用程序上下文消费者
* 杂务（deps）：通过@lyzno1在https://github.com/langgenius/dify/pull/38534中升级vite-plus工具链
* 修复(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/38535 中缓存服务器控制台上下文
* 测试（web）：将 auth e2e 与 @lyzno1 在 https://github.com/langgenius/dify/pull/38538 中的控制台主页对齐
* 修复：在 https://github.com/langgenius/dify/pull/38448 中 @isheng-eqi 的执行代码中出现不支持的语言的明显错误
* 修复（ci）：在 https://github.com/langgenius/dify/pull/38480 中 @EvanYao826 的浅 PR 结帐中使 no-new-getattr 防护保持稳定
*修复（网络）：在https://github.com/langgenius/dify/pull/38337中保护邀请设置激活按钮，防止@SquabbyZ的双重click
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38533 中迁移插件和工具应用程序上下文消费者
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38541 中迁移计费应用程序上下文消费者
* feat(api)：在https://github.com/langgenius/dify/pull/38028中使用@zyssyz123的信用池计费配额
*修复（cli）：--insecure还跳过https://github.com/langgenius/dify/pull/38531中@GareArc的TLS证书验证
* 杂务：删除https://github.com/langgenius/dify/pull/38547中@lyzno1的超能力文物
* 修复：在 https://github.com/langgenius/dify/pull/38546 中 @crazywola 的 oauth 页面显示错误
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38544 中迁移帐户设置应用程序上下文消费者
* 测试：@asukaminato0721 在 https://github.com/langgenius/dify/pull/38452 中的更多 caplog
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38552 中迁移工作流应用程序上下文消费者
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38558 中迁移代理 v2 应用程序上下文消费者
* 重构(api)：通过https://github.com/langgenius/dify/pull/37959中的@cqjjjzr将工作区工具端点迁移到BaseModel
* 重构（api）：通过@cqjjjzr在https://github.com/langgenius/dify/pull/37967中删除剩余的遗留字段
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38560 中迁移 shell 导航应用程序上下文消费者
* 测试：范围代理在 https://github.com/langgenius/dify/pull/38563 中由 @lyzno1 构建草稿 e2e 选择器
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38565 中删除剩余的应用程序上下文消费者
* 杂务（agent-v2）：在https://github.com/langgenius/dify/pull/38513中同步@lyzno1的更改
* perf: 在高级聊天工作流程运行列表中批量加载消息以删除https://github.com/langgenius/dify/pull/38359中@weijun-xia的N+1
* 重构（web）：在 https://github.com/langgenius/dify/pull/38568 中通过 @hyoban 删除应用程序上下文提供程序
* 测试（e2e）：稳定代理在https://github.com/langgenius/dify/pull/38571中由@lyzno1构建草稿注释场景
* 重构（web）：将应用程序上下文效果与 @hyoban 在 https://github.com/langgenius/dify/pull/38570 中的 jotai 同步
* 测试（e2e）：修复https://github.com/langgenius/dify/pull/38574中@lyzno1的代理构建注释运行时连接
* 修复：通过https://github.com/langgenius/dify/pull/38540中的@GareArc在工作流暂停/恢复期间保留ResponseStreamFilter状态
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/38575 升级 TypeScript 7
*修复：当删除自定义模型时，通过https://github.com/langgenius/dify/pull/38577中的@hjlarry删除其缓存
* 重构(web): 在https://github.com/langgenius/dify/pull/38572中添加@hyoban预取的查询原子
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/38580 中生成 fastopenapi 控制台合约
* 重构(api)：通过https://github.com/langgenius/dify/pull/37963中的@cqjjjzr将工作空间模型端点迁移到BaseModel
* 重构（api）：通过https://github.com/langgenius/dify/pull/37956中的@cqjjjzr将代码片段工作区端点迁移到BaseModel
* 重构(api)：通过https://github.com/langgenius/dify/pull/37957中的@cqjjjzr将数据集端点迁移到BaseModel
* 重构(api)：通过https://github.com/langgenius/dify/pull/37962中的@cqjjjzr将网络聊天端点迁移到BaseModel
* 重构(api)：通过https://github.com/langgenius/dify/pull/37960中的@cqjjjzr将服务应用端点迁移到BaseModel
*修复：在https://github.com/langgenius/dify/pull/38585中通过@GareArc在Flask应用程序上下文中运行user_connect授权
* 修复：通过 https://github.com/langgenius/dify/pull/38590 中的 @iamjoel 保护聊天树免受无序父母的影响
* 修复（网络）：在 https://github.com/langgenius/dify/pull/38583 中保留 @CodingOnStar 的身份验证重定向的归属
* 重构（web）：在https://github.com/langgenius/dify/pull/38588中通过@hyoban分割应用程序上下文状态原子
* 重构（测试）：在 https://github.com/langgenius/dify/pull/38569 中 @meloooooooo 的跟踪提供程序测试中用 caplog 替换记录器模拟
* 修复：https://github.com/langgenius/dify/pull/38598 中 @CodingOnStar 的块工作流程失败跟踪数据
* 杂务：批处理示例#38419，作者：@asukaminato0721，https://github.com/langgenius/dify/pull/38474
* 修复：https://github.com/langgenius/dify/pull/38170 中 @zhaohao1004 强化工作流程存档数据库重试
*修复（api）：忽略https://github.com/langgenius/dify/pull/37835中@Harsh23Kashyap的无效utf8缓存有效负载
* 文档：从 https://github.com/langgenius/dify/pull/38607 中 @Inlei 的所有自述文件中删除 AWS Marketplace 上的 Dify Premium 部分
* 壮举：@zyssyz123 在 https://github.com/langgenius/dify/pull/38593 中每日同步
* 修复（网络）：更新 @hyoban 在 https://github.com/langgenius/dify/pull/38591 中的文档链接
* 修复：修复 https://github.com/langgenius/dify/pull/38612 中 @fatelei 丢失会话参数的问题
* 琐事：https://github.com/langgenius/dify/pull/38600 中的 @QuantumGhost 将版本提升到 1.16.0-rc1
* 修复：修复 https://github.com/langgenius/dify/pull/38616 中 @fatelei 重复的身份验证前缀
*修复：通过@QuantumGhost在https://github.com/langgenius/dify/pull/38618中删除配置文件中的硬编码沙箱路径
* 修复（web）：在 https://github.com/langgenius/dify/pull/38620 中 @lyzno1 保存代理配置路线离开时的草稿
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/38627 中更新部门
* 杂务：通过 https://github.com/langgenius/dify/pull/38628 中的 @fatelei 删除未使用的参数
* 琐事：在https://github.com/langgenius/dify/pull/38626中由@DresdenGman在credit_pool_service测试中用caplog固定装置替换@patch logger.warning
* 杂务（api）：禁止 https://github.com/langgenius/dify/pull/38624 中的 @cqjjjzr 在控制器中新建直接 SQLAlchemy
* 测试：@asukaminato0721 在 https://github.com/langgenius/dify/pull/38499 中模拟 sqlite3
* 壮举：@wylswz 在 https://github.com/langgenius/dify/pull/38528 中支持 ee 代理沙箱
* 修复：通过@lyzno1在https://github.com/langgenius/dify/pull/38635中简化帮助菜单升级项
* 杂务：将 js-yaml 迁移到 https://github.com/langgenius/dify/pull/38639 中的 @hyoban v5
* 测试（e2e）：通过https://github.com/langgenius/dify/pull/38634中的@lyzno1增量使用代理服务API SSE
* 修复(web)：https://github.com/langgenius/dify/pull/38637 中 @JzoNgKVO 的代理工具凭据不匹配
* 修复（代理）：@zyssyz123 在 https://github.com/langgenius/dify/pull/38640 中表面知识检索失败
*测试：在https://github.com/langgenius/dify/pull/38641中使用@asukaminato0721的sqlite3会话
* 修复：如果代理认为 https://github.com/langgenius/dify/pull/38649 中 @iamjoel 给出了答案，则新代理中的最终答案将在 sse 后清除
* 修复（网页）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/38644 中简化信息提示图标变体
* 修复(web): 支持 https://github.com/langgenius/dify/pull/38651 中 @JzoNgKVO 的 Markdown 表单字段名称中的标点符号
* feat(web)：通过@CyberPU2099在https://github.com/langgenius/dify/pull/38650中完善Web应用程序定制选项
* 修复（触发）：https://github.com/langgenius/dify/pull/38656 中 @linw1995 的 429 响应超出了表面 Webhook 触发配额
* 壮举：为所有应用创建 app init rbac 范围并添加工作区成员。作者：https://github.com/langgenius/dify/pull/38636 的@fatelei
* 重构(web)：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38657 中将 i18n 迁移到选择器优化模式
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/38658 中与 en-US 同步翻译
* 修复（触发）：当 https://github.com/langgenius/dify/pull/38664 中的 @linw1995 超出 API 配额时，返回 429 而不是 500
* perf(web): @hyoban 在 https://github.com/langgenius/dify/pull/38663 中延迟加载 Vite 插件
* 测试（网络）：在 https://github.com/langgenius/dify/pull/38670 中集中 @hyoban 的 i18n 模拟
* 重构（dify-ui）：通过https://github.com/langgenius/dify/pull/38669中的@lyzno1标准化原始边界名称
* 修复（网络）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/38798 中改进市场安装对话框的可访问性
* 修复（网络）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/38794 中更正知识对话框草稿状态
* 重构(web)：通过https://github.com/langgenius/dify/pull/38796中的@lyzno1标准化z索引分层
* 修复（agent-v2）：恢复https://github.com/langgenius/dify/pull/38792中@lyzno1对行操作的键盘访问
* Chore(dify-ui)：在 https://github.com/langgenius/dify/pull/38793 中通过 @lyzno1 强制执行严格的 ESLint 规则
* 修复(web)：在 https://github.com/langgenius/dify/pull/38797 中通过 @lyzno1 拆分模型选择和设置操作
* 杂务：将格式迁移到 https://github.com/langgenius/dify/pull/38705 中 @hyoban 的 vp fmt
*修复：急切地验证服务-api上的对话并探索https://github.com/langgenius/dify/pull/38801中@he-yufeng的聊天端点
* 风格：采用 @hyoban 在 https://github.com/langgenius/dify/pull/38803 中的 vp fmt 格式
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/38807 中进行 4 次更新来提高 github-actions-dependencies 组
* 修复：通过 https://github.com/langgenius/dify/pull/38831 中的 @WTW0313 更新角色选择器以使用滚动区域的最大高度
* 杂务：沙盒计划不应执行 @hjlarry 在 https://github.com/langgenius/dify/pull/38662 中的特殊工作流程
* 测试：在 https://github.com/langgenius/dify/pull/38778 中 @asukaminato0721 在 test_remove_app_and_lated_data_task 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38781 中 @asukaminato0721 在 test_plugin_tool 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38672 中的 @asukaminato0721 的 test_data_migration_commands 中使用 sqlite3 会话
* 修复：@iamjoel 在 https://github.com/langgenius/dify/pull/38832 中处于粘滞状态时，市场页面标题抖动
*杂务（deps）：将烧瓶cors从6.0.2撞到烧瓶组中/api中的6.0.5，由https://github.com/langgenius/dify/pull/38810中的@dependabot[bot]
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/38811 中进行 2 次更新，在 /api 中碰撞 google 组
*构建（deps）：将汤筛从2.8撞到/api中的2.8.4，由https://github.com/langgenius/dify/pull/38631中的@dependabot[bot]
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/38825 中进行 5 次更新，对 /api 中的存储组进行碰撞
* 重构（聊天）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/38653 中实现语音到文本管道的现代化
*测试：在https://github.com/langgenius/dify/pull/38783中的@asukaminato0721的test_completion中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/38767 中 @asukaminato0721 在 test_comment_models 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38749 中 @asukaminato0721 在 test_wraps 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38750 中 @asukaminato0721 在 test_trace_session_metadata 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38747 中 @asukaminato0721 在 test_credential_utils 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38745 中 @asukaminato0721 在 test_buildin_retrieval 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38746 中 @asukaminato0721 在 test_banner 中使用 sqlite3 会话
* 修复：https://github.com/langgenius/dify/pull/38842 中 @iamjoel 无法在后续模型参数中禁用最大令牌参数
* 琐事：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38834 中使用 ESLint 后备将 linting 迁移到 vp lint
* 修复：防止聊天附件在 https://github.com/langgenius/dify/pull/38846 中由 @iamjoel 滚出视图
* 杂务（deps）：通过 @GareArc 在 https://github.com/langgenius/dify/pull/38844 中对 CVE 进行碰撞 python-engineio 和 python-socketio
* 测试：在 https://github.com/langgenius/dify/pull/38779 中 @asukaminato0721 在 test_billing_service 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38748 中 @asukaminato0721 在 test_remote_retrieval 中使用 sqlite3 会话
*测试：在https://github.com/langgenius/dify/pull/38766中的@asukaminato0721的test_retrieval_attachment_access中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/38776 中 @asukaminato0721 在 test_app_event_signals 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38782 中 @asukaminato0721 在 test_oauth_device_flow 中使用 sqlite3 会话
* 杂务：在 https://github.com/langgenius/dify/pull/38851 中添加 @iamjoel 的技能上传失败提示
* 测试：在 https://github.com/langgenius/dify/pull/38690 中 @asukaminato0721 在 test_create_document_index 中使用 sqlite3 会话
* 杂务：将静态检查迁移到 https://github.com/langgenius/dify/pull/38850 中 @hyoban 的 vp 检查
*修复（api）：需要注册试用应用程序才能在https://github.com/langgenius/dify/pull/38858中由@linw1995读取
* 杂务：通过 @crazywola 在 https://github.com/langgenius/dify/pull/38838 中改进工作流程生成器的可访问性和 API 合约
* 修复（auth）：通过 https://github.com/langgenius/dify/pull/38864 中的 @CodingOnStar 防止登录后流程中的开放重定向
* 杂务：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38866 中提高静态检查性能
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/38868 中更新部门
* 修复：调整https://github.com/langgenius/dify/pull/38856中@lyzno1的会员邀请流程和API合约
* 杂务：通过 @hyoban 在 https://github.com/langgenius/dify/pull/38872 中简化 lint 插件配置
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/38873 中与 en-US 同步翻译
* 修复：https://github.com/langgenius/dify/pull/38885 中 @lyzno1 对齐会员邀请状态和错误
* 修复(web)：https://github.com/langgenius/dify/pull/38821 中@hjlarry 监控图表零值颜色和日期范围指示器
* 测试：在 https://github.com/langgenius/dify/pull/38707 中 @asukaminato0721 在 test_schedule_service 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38710 中 @asukaminato0721 在 test_plugin 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38708 中 @asukaminato0721 在 test_data_migration_wizard 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38715 中 @asukaminato0721 在 test_app_dsl_service 中使用 sqlite3 会话
*测试：在https://github.com/langgenius/dify/pull/38714中的@asukaminato0721的test_annotation_reply中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/38713 中 @asukaminato0721 在 test_audio 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38712 中 @asukaminato0721 在 test_skill_standardize_service 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38711 中 @asukaminato0721 在 test_credential_permission_service 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38709 中 @asukaminato0721 在 test_agent_drive_service 中使用 sqlite3 会话
* 杂务（deps）：将 json 修复从 0.59.4 中的 /dify-agent 中的 0.60.1 通过 https://github.com/langgenius/dify/pull/38878 中的 @dependabot[bot]
*杂务（deps）：将json修复从0.59.4到/api中的0.60.1，由https://github.com/langgenius/dify/pull/38879中的@dependabot[bot]
* 杂务（deps）：https://github.com/langgenius/dify/pull/38877 中 @dependabot[bot] 将 /api 中的 5.3.0 到 5.5.0 的凹凸变压器
* 修复（deps）：通过 @wylswz 在 https://github.com/langgenius/dify/pull/38893 中升级 fickling、pillow、click
* 修复(e2e)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/38896 中强化故障生命周期诊断
* 修复（web）：在https://github.com/langgenius/dify/pull/38898中通过@lyzno1对齐工作区卡悬停状态
* 测试：在 https://github.com/langgenius/dify/pull/38758 中 @asukaminato0721 在 test_file_factory 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38756 中的 @asukaminato0721 在 test_file_tenant_validator 中使用 sqlite3 会话
*测试：在https://github.com/langgenius/dify/pull/38755中的@asukaminato0721的test_dataset_service_lock_not_owned中使用sqlite3会话
* 壮举（企业）：在 https://github.com/langgenius/dify/pull/38883 中@zhangx1n 创建帐户时强制执行许可席位上限
* 修复（网络）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/38899 中改进探索横幅响应能力
* 测试：在 https://github.com/langgenius/dify/pull/38773 中 @asukaminato0721 在 test_remote_fetcher 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38775 中 @asukaminato0721 在 test_workspaces_members 中使用 sqlite3 会话
* 文档：https://github.com/langgenius/dify/pull/38909 中 @lyzno1 简化前端测试指导
* 修复（auth）：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/38905 中保留跨身份验证流的重定向 URL
* 壮举：允许 https://github.com/langgenius/dify/pull/38903 中的@fatelei 允许用户特定的主目录
* feat(oauth)：通过OAuth状态保留redirect_url以用于登录后…作者：https://github.com/langgenius/dify/pull/38900中的@linw1995
* 壮举：@hjlarry 在 https://github.com/langgenius/dify/pull/38207 中导出存档日志
* 修复：在 API 工具模式中通过原始 httpx.get 绕过 SSRF，由 @Snakinya 在 https://github.com/langgenius/dify/pull/37746 中获取
*壮举：当知识权限为所有团队时，需要通过https://github.com/langgenius/dify/pull/38911中的@fatelei更新rbac设置
* 重构(web)：在https://github.com/langgenius/dify/pull/38914中重建@lyzno1的转到任何对话框
* 测试：将推荐的应用服务覆盖范围移至 https://github.com/langgenius/dify/pull/38940 中 @asukaminato0721 的单元测试
* 测试：将 Web 忘记密码覆盖率移至 https://github.com/langgenius/dify/pull/38943 中 @asukaminato0721 的单元测试
* 测试：将触发器提供程序覆盖范围移至 https://github.com/langgenius/dify/pull/38942 中 @asukaminato0721 的单元测试
* feat(agent): shellctl 由 @wylswz 在 https://github.com/langgenius/dify/pull/38841 中用 go 重写
* 杂务：聊天流程 api 应该检查 https://github.com/langgenius/dify/pull/38892 中@hjlarry 的工作流_id 和沙箱计划
* feat(agent): 支持https://github.com/langgenius/dify/pull/38849中@zyssyz123的新Agent DSL导入和导出
* 重构（web）：标准化热键所有权和 @lyzno1 在 https://github.com/langgenius/dify/pull/38960 中的输入
* 测试：将插件服务覆盖范围移至 https://github.com/langgenius/dify/pull/38935 中 @asukaminato0721 的单元测试
* 测试：在 https://github.com/langgenius/dify/pull/38768 中 @asukaminato0721 在 test_audio_service 中使用 sqlite3 会话
* 修复（web）：https://github.com/langgenius/dify/pull/38962 中 @Jingyi-Dify 引导的门控制台原子消费者
* 测试：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38947 中删除重复的代码执行器集成覆盖率
* 测试：删除 https://github.com/langgenius/dify/pull/38948 中 @asukaminato0721 的仅单元身份验证集成案例
* 测试：将工具提供商控制器覆盖范围移至 https://github.com/langgenius/dify/pull/38944 中 @asukaminato0721 的单元测试
* 测试：将 RAG 管道数据集覆盖范围移至 https://github.com/langgenius/dify/pull/38933 中 @asukaminato0721 的单元测试
* 修复(e2e): 在 https://github.com/langgenius/dify/pull/38968 中通过 @lyzno1 恢复 shellctl 外部运行时
* 测试：将命中测试服务覆盖范围移至 https://github.com/langgenius/dify/pull/38925 中 @asukaminato0721 的单元测试
* 测试：将推荐数据库检索覆盖范围移至 https://github.com/langgenius/dify/pull/38921 中 @asukaminato0721 的单元测试
* 测试：将帐户删除同步覆盖范围移至 https://github.com/langgenius/dify/pull/38917 中 @asukaminato0721 的单元测试
* 测试：将 API 密钥身份验证覆盖范围移至 https://github.com/langgenius/dify/pull/38919 中 @asukaminato0721 的单元测试
* 测试：将控制台忘记密码覆盖率移至 https://github.com/langgenius/dify/pull/38922 中 @asukaminato0721 的单元测试
* 测试：将 RAG 管道控制器覆盖范围移至 https://github.com/langgenius/dify/pull/38939 中 @asukaminato0721 的单元测试
* 测试：将电子邮件注册覆盖范围移至 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38928 中的单元测试
* 修复（e2e）：https://github.com/langgenius/dify/pull/38971 中 @lyzno1 在飞行前探测 shellctl 运行状况
* 测试：将控制台应用程序 API 覆盖范围移至 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38915 中的单元测试
* 测试：将 MCP 控制器覆盖范围移至 https://github.com/langgenius/dify/pull/38930 中 @asukaminato0721 的单元测试
* 测试：在 https://github.com/langgenius/dify/pull/38689 中 @asukaminato0721 在 test_provider_configuration 中使用 sqlite3 会话
* 测试：将反馈服务覆盖范围移至 https://github.com/langgenius/dify/pull/38927 中 @asukaminato0721 的单元测试
* 修复（agent-v2）：在 https://github.com/langgenius/dify/pull/38977 中使用 @lyzno1 的时间范围选择器的默认选择组合
* 修复：在 https://github.com/langgenius/dify/pull/38854 中保留并显示 @Blackoutta 的工作流程重试详细信息
* 杂务：工作流程注释删除 https://github.com/langgenius/dify/pull/38978 中@fatelei 的 rbac 检查
*修复（api）：在https://github.com/langgenius/dify/pull/38970中强化@linw1995推荐应用程序的试用应用程序访问
* 杂务（deps）：通过 @GareArc 在 https://github.com/langgenius/dify/pull/38976 中对 httplib2、setuptools、wandb 进行 CVE 修复
* 壮举：redis 支持 keepalive 并重试 https://github.com/langgenius/dify/pull/38973 中 @fatelei 的更多错误
* 杂务（i18n）：https://github.com/langgenius/dify/pull/38979 中的 @github-actions[bot] 与 en-US 同步翻译
* 重构：https://github.com/langgenius/dify/pull/38559 中 @41tair 跨后端路径的显式数据库会话传播
* 修复：https://github.com/langgenius/dify/pull/38992中@WTW0313恢复HITL后恢复响应状态
* feat(enterprise)：拒绝超出 https://github.com/langgenius/dify/pull/38995 中 @zhangx1n 许可席位的成员邀请
* 修复：修复https://github.com/langgenius/dify/pull/39004中对话标题被@fatelei覆盖为空的问题
* 修复（代理）：通过 https://github.com/langgenius/dify/pull/39008 中的 @zyssyz123 保留 SSE 流中的 Unicode 分隔符
* 修复（网络）：调整https://github.com/langgenius/dify/pull/38999中@lyzno1的代理活动披露
*修复（api）：将范围查找绑定到https://github.com/langgenius/dify/pull/38470中@WH-2099的嵌套所有者引用
*修复（auth）：在https://github.com/langgenius/dify/pull/39013中通过@CodingOnStar在当前部署上保留登录重定向
* 修复：允许 https://github.com/langgenius/dify/pull/39014 中的 @WTW0313 为布局用户提供工作流程注释
* 重构（dify-ui）：通过 https://github.com/langgenius/dify/pull/39016 中的 @lyzno1 澄清覆盖样式语义
* 壮举：https://github.com/langgenius/dify/pull/39012 中的@iamjoel 支持前端导入和导出的新代理
* 壮举：@wylswz 在 https://github.com/langgenius/dify/pull/39000 中用内陆锁保护特工 HOME
* 文档：通过 @WH-2099 在 https://github.com/langgenius/dify/pull/39019 中更新 Star History 图表令牌
* 修复（代理）：保留 DSL 资产占位符并计算 https://github.com/langgenius/dify/pull/39015 中 @zyssyz123 的草稿引用
* 修复(e2e): 按照@lyzno1在https://github.com/langgenius/dify/pull/39020中创建菜单的特工名册
* 测试：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39024 中将 dify ui 测试与浏览器模式对齐
* 修复（代理）：https://github.com/langgenius/dify/pull/39021 中@zyssyz123 通过工作流应用程序聚合监控源
* 测试：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39028 中简化 dify ui 浏览器测试设置
* test(dify-ui)：将组件测试集中在https://github.com/langgenius/dify/pull/39030中@lyzno1的行为上
* 壮举：改进 @hjlarry 在 https://github.com/langgenius/dify/pull/38589 中的人工智能积分显示
* 修复（网页）：在 https://github.com/langgenius/dify/pull/38894 中的 @hjlarry 全屏隐藏 Streamdown 中损坏的表操作
* 修复：修复 https://github.com/langgenius/dify/pull/39023 中 @fatelei 丢失创建 rbac 绑定的问题
*修复（api）：在https://github.com/langgenius/dify/pull/39038中通过@linw1995序列化试验工作流程对话变量
* 修复（代理）：接受 https://github.com/langgenius/dify/pull/39039 中 @zyssyz123 遗留的缺失资产占位符
* 修复（代理）：通过 @wylswz 在 https://github.com/langgenius/dify/pull/39041 中将新环境添加到 .env.example
* 修复（ci）：运行 CLI 检查 @lyzno1 在 https://github.com/langgenius/dify/pull/39047 中的合约更改
* 杂务：https://github.com/langgenius/dify/pull/39040 中 @iamjoel 的新特工强化
* 测试（e2e）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39043 中强化行为覆盖率和 CI 门
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/39134 中与 en-US 同步翻译
* 修复（代理）：将工作流代理导入 https://github.com/langgenius/dify/pull/39135 中的 @zyssyz123 内联
* 修复：通过 @iamjoel 在 https://github.com/langgenius/dify/pull/39137 中验证工作流程清单中的内联代理文件和技能
* 测试：在 https://github.com/langgenius/dify/pull/39110 中 @asukaminato0721 在核心工作流程中使用 SQLite 会话
* 测试：在https://github.com/langgenius/dify/pull/39112中@asukaminato0721在服务核心中使用SQLite会话
* 重构（api）：通过https://github.com/langgenius/dify/pull/39042中的@linw1995将tenant_id显式传递给工作流存储库
* 修复（自述文件）：删除https://github.com/langgenius/dify/pull/39143中@KurosawaGeeker的尾随空格
*修复：https://github.com/langgenius/dify/pull/39139中的@wylswz降级到landlock v1
* 测试：在 https://github.com/langgenius/dify/pull/39117 中 @asukaminato0721 的任务中使用 SQLite 会话
* 杂务：在 https://github.com/langgenius/dify/pull/39146 中的 @iamjoel 在市场页面中显示软件包安装状态
* 杂务：删除https://github.com/langgenius/dify/pull/39147中@iamjoel的空高级设置
* 测试：在 https://github.com/langgenius/dify/pull/38736 中的 @asukaminato0721 在 test_api 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38737 中 @asukaminato0721 在 test_remote_retrieval 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38754 中 @asukaminato0721 在 test_tool_providers 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38762 中 @asukaminato0721 在 test_tool_label_manager 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38763 中 @asukaminato0721 在 test_passport 中使用 sqlite3 会话
* 测试：将插件参数服务覆盖范围移至 https://github.com/langgenius/dify/pull/38934 中 @asukaminato0721 的单元测试
* 测试：在 https://github.com/langgenius/dify/pull/38780 中 @asukaminato0721 在 test_ human_input_form 中使用 sqlite3 会话
* 测试（e2e）：在https://github.com/langgenius/dify/pull/39148中通过@lyzno1强制执行行为驱动的质量门
* 测试：在 https://github.com/langgenius/dify/pull/38741 中 @asukaminato0721 在 test_customized_retrieval 中使用 sqlite3 会话
* 修复：在 https://github.com/langgenius/dify/pull/39044 中通过 @wylswz 清理示例中的环境
* 修复(web): 统一@Jingyi-Dify在https://github.com/langgenius/dify/pull/39160中使用工作区头像
* perf(workflow-generator): 在 https://github.com/langgenius/dify/pull/38975 中通过 @crazywola 并行化节点配置生成
* 杂务：删除https://github.com/langgenius/dify/pull/39171中@iamjoel无用的代理提示
* 壮举：@hjlarry 在 https://github.com/langgenius/dify/pull/39167 中为新用户提供默认插件
* 修复（web）：在https://github.com/langgenius/dify/pull/39172中@lyzno1在主导航中显示当前配置文件
* 修复(web): 在https://github.com/langgenius/dify/pull/39173中通过@lyzno1解决工作流程失败后运行的节点
* 杂务：https://github.com/langgenius/dify/pull/39181中@lyzno1将Vite+升级到0.2.5
* 杂务：在 https://github.com/langgenius/dify/pull/39183 中添加 @iamjoel 的代理工具提示
* 修复：@hjlarry 在 https://github.com/langgenius/dify/pull/39182 中更改电子邮件不起作用
* 修复：删除测试中的补丁记录器，改用 caplog（关闭#37468），作者：https://github.com/langgenius/dify/pull/39159 中的 @sahasweety
* 修复：无法在 https://github.com/langgenius/dify/pull/39187 中 @iamjoel 在应用程序列表页面中通过 learn dify 创建应用程序
* 壮举：为 https://github.com/langgenius/dify/pull/39188 中的 @WTW0313 添加针对 GPT-5.6 及更高版本的多语言响应 API 提示
* 修复（代理）：绑定流并取消 @zyssyz123 在 https://github.com/langgenius/dify/pull/39186 中运行的僵尸工作流程
* 修复：https://github.com/langgenius/dify/pull/39189 中 @iamjoel 无法在更改节点搜索字段中输入内容
* 壮举：@wylswz 在 https://github.com/langgenius/dify/pull/39190 中编辑代理 shell 输出
* 修复（代理）：允许 https://github.com/langgenius/dify/pull/39192 中的 @zyssyz123 在工作流程草稿中悬挂引用
* test(web): 删除https://github.com/langgenius/dify/pull/39193中@lyzno1的低值单元测试
* 杂务：https://github.com/langgenius/dify/pull/39196 中 @wylswz 的 1.16.0 碰撞版本

## 新贡献者
* @ojasarora77 在 https://github.com/langgenius/dify/pull/37971 中做出了第一个贡献
* @DevCube24 在 https://github.com/langgenius/dify/pull/37997 中做出了第一个贡献
* @CyberPU2099 在 https://github.com/langgenius/dify/pull/37790 中做出了第一个贡献
* @Harsh23Kashyap 在 https://github.com/langgenius/dify/pull/38006 中做出了第一个贡献
* @uxgnod 在 https://github.com/langgenius/dify/pull/38030 中做出了第一个贡献
* @shiyuanfang2nd 在 https://github.com/langgenius/dify/pull/38004 中做出了第一个贡献
* @zeeshan56656 在 https://github.com/langgenius/dify/pull/36998 中做出了第一个贡献
* @Sanket2329 在 https://github.com/langgenius/dify/pull/37938 中做出了第一个贡献
* @VeraPyuyi 在 https://github.com/langgenius/dify/pull/37388 中做出了第一个贡献
* @p2003722 在 https://github.com/langgenius/dify/pull/38118 中做出了第一个贡献
* @sergioperezcheco 在 https://github.com/langgenius/dify/pull/38082 中做出了第一个贡献
* @escapefyh 在 https://github.com/langgenius/dify/pull/37660 中做出了第一个贡献
* @SquabbyZ 在 https://github.com/langgenius/dify/pull/38341 中做出了第一个贡献
* @isheng-eqi 在 https://github.com/langgenius/dify/pull/38447 中做出了第一个贡献
* @agarwalpranav0711 在 https://github.com/langgenius/dify/pull/38210 中做出了第一个贡献
* @ryuta-kobayashi-ug 在 https://github.com/langgenius/dify/pull/35859 中做出了第一个贡献
* @meloooooooo 在 https://github.com/langgenius/dify/pull/38569 中做出了第一个贡献
* @DresdenGman 在 https://github.com/langgenius/dify/pull/38626 中做出了第一个贡献
* @Snakinya 在 https://github.com/langgenius/dify/pull/37746 中做出了第一个贡献
* @KurosawaGeeker 在 https://github.com/langgenius/dify/pull/39143 中做出了第一个贡献
* @sahasweety 在 https://github.com/langgenius/dify/pull/39159 中做出了第一个贡献

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.15.0...1.16.0

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.16.0` · 📅 发布：2026-07-17 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.16.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
