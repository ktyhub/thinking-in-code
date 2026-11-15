---
title: "dify 1.17.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.17.0"
version: "1.17.0"
published: "2026-08-25"
type: "minor"
lang: "zh"
---

# dify 1.17.0

## 新功能

**代理：E2B沙箱、家庭快照和技能管理**
- **E2B 沙箱后端**：除了本地沙箱之外，代理 shell/代码执行现在还可以在 [E2B](https://e2b.dev) 云沙箱上运行。选择带有`DIFY_AGENT_RUNTIME_BACKEND`的后端；新的 `docker-compose.e2b.yaml` 附带 E2B 堆栈，E2B 流量经过身份验证，并且 E2B 模板在发布时同步（#39480、#39705、#39873、#39996、#40858、#40871、#40891、#40892）。
- **构建时主快照**：应用（发布）代理构建时，将捕获代理的沙箱主目录（已安装的包、准备的文件、工作状态），并且已发布代理的后续运行将从该快照恢复其主目录，因此代理从构建时的确切文件系统状态开始。 （#39702、#40876、#40996）。
- **工作区级技能管理**：技能是可重用的、版本化的功能，与代理可以发现和调用的代码和工具定义打包在一起。具有草稿 → 发布 → 版本生命周期的新工作区级技能管理器与 Web UI（技能列表、构建器面板、文件编辑器）一起提供。  （#39675、#39798、#39799、#41180）。
- **上下文感知历史压缩**：长时间的代理对话不再超出模型的上下文窗口 - Dify 解决了每个模型的有效窗口和分层压缩（首先清除旧工具结果，然后总结旧历史记录），因此运行保持在预算范围内，而不会丢失最近的上下文 (#40872)。

**工作流程中可重用的LLM环境变量**
- 定义一次共享提供程序/模型/模式/参数配置（例如 `for_summarize`、`for_research`）并从任何 LLM 节点引用它。协调的模型更改现在发生在一个地方，而不是逐个节点地漂移，并且引用可以在 DSL 导入/导出、片段、RAG 管道和协作编辑中保留下来 (#39125)。

**循环和迭代中的人工输入**
- 人机循环表单现在在*内部*循环和迭代节点工作，在调试和安装的应用程序的页面刷新之间正确暂停和恢复 - 在重复工作中启用审核/批准步骤（#39243）。

**提供商中立的统一追踪**
- 选择加入统一跟踪 (`OPS_TRACE_UNIFIED_ENABLED`) 在核心中组装完整的父子跨树（工作流、聊天流、消息、节点、循环、迭代、嵌套工作流），并仅将传输委托给轻量级适配器。 Phoenix 和 LangSmith 适配器首先发货；默认情况下禁用并完全向后兼容 (#39451)。
- 新的 GenAI 跨越表面 LLM TTFT、代理 ReAct 步骤、工具调用和失败的 LLM 节点，以实现更深入的可观察性 (#39339)。

**Cloudflare Turnstile (CAPTCHA) 支持**
- 登录和电子邮件代码登录时可选的 Turnstile 质询，以保护身份验证端点免受滥用，并具有可配置的站点/密钥和允许的主机名 (#40494)。

**Azure Key Vault / 可插入 KMS**
- 引入了 KMS 提供程序抽象，其中 Azure Key Vault 支持密钥配置、加密和解密，以及密钥轮换配置——这是迈向外部管理加密密钥的一步 (#39933)。

**TiDB 矢量全文和混合搜索**
- TiDB Vector 部署现在可以使用多语言全文索引和矢量搜索来启用全文和混合检索（`TIDB_VECTOR_ENABLE_FULLTEXT_SEARCH`，默认关闭）（#38112）。

**更广泛的模型和文件处理**
- LLM 节点和代理现在可以将图像文件直接传递到多模式模型，并且非视觉附件不再从代理聊天中默默删除（#39848、#40179）。
- 新的多模态检索指导可帮助用户为图像承载知识库正确选择嵌入模型（#40566）。
- 音频 ASR 现在接受 `audio/x-m4a`，并且音频 MIME 类型的验证更加准确（#40776、#41043）。

**转到任何内容 (⌘K / Ctrl+K)**
- 在控制台中的任意位置按 ⌘K（Windows/Linux 上为 Ctrl+K）可打开命令面板并跳转至应用程序、代理、技能、知识库、插件或工作流程节点，或通过斜线命令触发快速操作。此版本中的新增功能：代理和技能是可搜索的，并且图标命令系统在所有域中进行了重构以保持一致性（#40620、#40621、#40646–#40649、#41160）。

**其他补充**
- ODT（OpenDocument Text）文档提取支持（#39973）。
- 工具插件的新 `date` / `date-picker` 参数类型 (#36163)。
- 老挝 (lo-LA) 语言支持 (#39474)。
- 旧对话的自动清理任务（`ENABLE_CONVERSATION_CLEANUP_TASK`）限制数据增长（#40889-era）。
- 市场直接嵌入到集成类别中，以实现更顺畅的工具/插件发现（#40744）。

## 改进

**无障碍（大型 a11y 通行证）**
- 大量的更改使控制台键盘和屏幕阅读器友好：数十个交互式控件的真正 `<button>` 语义、仅图标操作的可访问名称（复制、关闭、删除、菜单）、身份验证/安装页面上的主标题、键盘可访问的成员/工具选择器以及正确的 ARIA 状态（#40192–#40377 等）。

**工作流程创作**
- 工作流生成器现在在建议节点时更喜欢已经安装和配置的工具，因此构建者可以使用他们实际拥有的工具（#40611，#39850）。

**工作流程和运行时稳定性**
- 可重现的 Web 工作流程运行，历史记录更新后保留画布状态，不再刷新渲染循环，并且 SSE 流现在在终端事件上干净地结束（#40010、#40489、#41105、#40042）。
- `stop` 现在在非流节点和暂停的工作流程之间受到尊重，可以正确清除过时的取消信号（#41090、#40905、#40972）。
- `APP_MAX_EXECUTION_TIME` 和 `WORKFLOW_MAX_EXECUTION_TIME` 默认值从 **1200s → 3600s** 提高，以适应运行时间较长的工作流程。

**内部质量**
- 将单元测试大量迁移到真实的 ORM 模型/SQLite 会话，以获得更可靠的覆盖范围，以及跨迁移测试的更强的类型（许多#38xxx–#39xxx）。面向用户的行为没有改变。

## 安全增强
- **身份验证强化**：登录/电子邮件代码流上的 Turnstile 质询、具有尝试限制和令牌过期的强化电子邮件代码验证（`EMAIL_CODE_LOGIN_MAX_ATTEMPTS`、`EMAIL_CODE_LOGIN_TOKEN_EXPIRY_MINUTES`）、暂停电子邮件域处理和短期代理授权令牌（#40494、#40960、#41004、#40884）。
- **访问控制/所有权范围**：数据集、文档、RAG、对话、工作区凭据和 OAuth-client 资源现在一致地绑定到其所有者和应用程序范围，关闭多个未经授权的访问路径（#40989、#40888、#40790、#40745、#40893、#40786 及相关）。
- **SSRF 和出站强化**：出站 HTTP 连接阶段有界（5 秒），代理/绑定下载和运行超时是可配置的，并且 SSRF 阻止的错误消息现在指向正确的问题（#40807、#41027、#40605）。
## 错误修复（选定）
- 防止 Redis 流中删除 `workflow_started` 事件以及被取代的执行删除/重复运行（#40964、#40699）。
- 将工作流程时间戳标准化为原始 UTC，并保留失败、取消和中断运行的运行快照/历史记录（#40947、#40876、#40972）。
- 防止跨选项卡聊天对话切换并停止在代理聊天中丢弃非视觉附件（#40709、#40179）。
- 通过首先合并系统消息来纠正 Qwen/VL 系统消息排序 (#39136)。
- 修复 Elasticsearch-JA 适配器 `document_id` 映射和 `VectorType` (#40400)；避免空的基岩架构字段 (#40443)。
- 对所有 nginx 上游使用动态 DNS 解析 (#39155)；保留文本上传的 UTF-8 字节大小 (#40034)。
- 众多 Web 应用程序/UI 修复：恢复电子邮件代码和密码表单提交、移动登录溢出、Toast 堆叠、模型选择器间距（#40227、#40222、#40921、#40970、#8d612895）。

---

## 环境变量更改

### 添加
**代理运行时/沙箱** (`docker/envs/core-services/dify-agent.env.example`)
- `DIFY_AGENT_RUNTIME_BACKEND`、`DIFY_AGENT_RUN_TIMEOUT_SECONDS`、`DIFY_AGENT_SANDBOX_FILES_BASE_URL`、`DIFY_AGENT_STUB_UPLOAD_FILE_SIZE_LIMIT`、`DIFY_AGENT_BINDING_FILE_DOWNLOAD_COMMAND_TIMEOUT_SECONDS`
- E2B：`DIFY_AGENT_E2B_API_KEY`、`DIFY_AGENT_E2B_TEMPLATE`、`DIFY_AGENT_E2B_SHELLCTL_PORT`、`DIFY_AGENT_E2B_ACTIVE_TIMEOUT_SECONDS`
- 本地沙箱：`DIFY_AGENT_LOCAL_SANDBOX_ENDPOINT`、`DIFY_AGENT_LOCAL_SANDBOX_AUTH_TOKEN`
- 出站 HTTP 调整：`DIFY_AGENT_OUTBOUND_HTTP_CONNECT_TIMEOUT`、`DIFY_AGENT_OUTBOUND_HTTP_READ_TIMEOUT`、`DIFY_AGENT_OUTBOUND_HTTP_WRITE_TIMEOUT`、`DIFY_AGENT_OUTBOUND_HTTP_POOL_TIMEOUT`、`DIFY_AGENT_OUTBOUND_HTTP_KEEPALIVE_EXPIRY`、`DIFY_AGENT_OUTBOUND_HTTP_MAX_CONNECTIONS`、`DIFY_AGENT_OUTBOUND_HTTP_MAX_KEEPALIVE_CONNECTIONS`
- `AGENT_BACKEND_BINDING_FILE_DOWNLOAD_TIMEOUT_SECONDS`、`AGENT_BACKEND_HOME_SNAPSHOT_TIMEOUT_SECONDS` (`api/.env.example`)

**身份验证/安全**
- `TURNSTILE_SITE_KEY`、`TURNSTILE_SECRET_KEY`、`TURNSTILE_ALLOWED_HOSTNAMES`、`TURNSTILE_EMAIL_CODE_VERIFY_REQUIRED`
- `EMAIL_CODE_LOGIN_MAX_ATTEMPTS`、`EMAIL_CODE_LOGIN_TOKEN_EXPIRY_MINUTES`
- `KEY_PROVIDER_TYPE`、`AZURE_KEYVAULT_VAULT_URL`、`AZURE_KEYVAULT_KEY_SIZE`、`AZURE_KEYVAULT_ROTATION_INTERVAL_DAYS`

**知识/检索**
- `TIDB_VECTOR_ENABLE_FULLTEXT_SEARCH`、`TIDB_ON_QDRANT_ESTIMATED_STORAGE_LIMITS_MB`、`KNOWLEDGE_UPLOAD_FILE_SIZE_LIMIT_FOR_PAID_PLAN`

**追踪/可观察性**
- `OPS_TRACE_UNIFIED_ENABLED`、`OPS_TRACE_PARENT_CONTEXT_TTL_SECONDS`

**杂项**
- `ENABLE_CONVERSATION_CLEANUP_TASK`、`CONVERSATION_CLEANUP_TASK_INTERVAL`、`CONVERSATION_CLEANUP_BATCH_SIZE`
- `UPLOAD_SKILL_FILE_SIZE_LIMIT`、`PLUGIN_MAX_FILE_SIZE`、`MARKDOWN_FORM_FIELD_NAME_EXTRA_CHARS`
- `DEPLOYMENT_EDITION`（取代 `EDITION`，见下文）

### 已删除
- `EDITION` → 更名为 `DEPLOYMENT_EDITION`
- `ENTERPRISE_ENABLED`（企业门控综合）
- `AGENT_BACKEND_RUN_TIMEOUT_SECONDS` → 被 `DIFY_AGENT_RUN_TIMEOUT_SECONDS` 取代
- `DIFY_AGENT_SHELLCTL_AUTH_TOKEN`、`DIFY_AGENT_SHELLCTL_ENTRYPOINT`（代理运行时重新设计）

### 修改（默认值）
- `APP_MAX_EXECUTION_TIME`: `1200` → `3600`
- `WORKFLOW_MAX_EXECUTION_TIME`: `1200` → `3600`
- `OPS_TRACE_RETRYABLE_DISPATCH_MAX_RETRIES`: `60` → `780`
- `GRAPH_ENGINE_SCALE_UP_THRESHOLD`: `3` → `0`

### Docker 撰写
- `docker/docker-compose.yaml` — 修改
- `docker/docker-compose.middleware.yaml` — 修改
- `docker/docker-compose.e2b.yaml` — **新**（E2B 代理沙箱堆栈）

---

## 数据库迁移

此版本包括新的迁移（与社区版本相关）：
- `add_workflow_version_number` — 工作流程版本编号（部署 v2）
- `add_oauth_provider_app_auto_authorize` — 静默 OAuth 授权标志
- `add_conversation_cleanup_index` — 支持对话清理任务
- `add_workspace_skill_management` — 工作区级技能管理（草稿/版本/发布生命周期）
- `add_agent_home_snapshot_ledger`、`make_home_snapshot_references_nullable` — 代理构建时主快照分类帐和可为 null 的快照引用
- `replace_agent_runtime_sessions_with_*`、`remove_agent_drive`、`clean_legacy_agent_soul_files`、`simplify_agent_v2_output_contract` — 新代理运行时

这些迁移不需要手动回填命令。作为升级的一部分运行 `flask db upgrade`。

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
> - 此版本包括**新的数据库迁移** - 作为升级的一部分运行它们。
> - 环境变量发生了很大变化（添加了许多，版本变量**重命名** `EDITION` → `DEPLOYMENT_EDITION`，几个默认值发生了变化）。查看环境变量更改部分并相应更新您的 `.env`。特别是，如果设置的话，**将 `EDITION` 重命名为 `DEPLOYMENT_EDITION`**。
> - Docker Compose 配置已更改，并添加了新的 `docker-compose.e2b.yaml`。如果您维护定制的 `docker-compose.yaml`，请小心地重新应用本地定制。
> - 迁移 `add_conversation_cleanup_index` 在现有数据上构建索引，如果 `conversations` 表很大，则执行时间可能会更长。


### Docker 组合部署
1. 备份您的自定义 compose 和 env 文件：
   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   cp .env .env.$(date +%s).bak 2>/dev/null || true
   ```
2.获取最新代码：
   ```bash
   git fetch --tags
   git checkout main   # or the target release tag once cut
   ```
3.停止服务（从`docker`目录）：
   ```bash
   docker compose down
   ```
4、备份数据：
   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```
5. 检查环境更改并重新应用本地自定义（记住 `EDITION` → `DEPLOYMENT_EDITION`）。
6.升级：
   ```bash
   docker compose up -d
   ```

### 源代码部署
1. 停止 API 服务器、Worker 和 Web 前端。
2.获取最新代码：
   ```bash
   git fetch --tags
   git checkout main   # or the target release tag once cut
   ```
3.更新Python依赖项：
   ```bash
   cd api
   uv sync
   ```
4. 运行迁移：
   ```bash
   uv run flask db upgrade
   ```
5. 重建/重新启动 Web 前端，然后重新启动 API 服务器和 Worker。


## 发生了什么变化
* 测试：在 https://github.com/langgenius/dify/pull/39084 中的 @asukaminato0721 的服务插件中使用 SQLite 会话
* 测试：在https://github.com/langgenius/dify/pull/39655中通过@escape0707分离人类输入单元和数据库路径
* 测试：在https://github.com/langgenius/dify/pull/39088中@asukaminato0721在服务核心中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/39098 中的控制器服务 api 中使用 @asukaminato0721 的 SQLite 会话
* 测试：在https://github.com/langgenius/dify/pull/39090中@asukaminato0721在服务核心中使用SQLite会话
* 测试：将消息清理覆盖范围移至 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38932 中的单元测试
* 测试：在 https://github.com/langgenius/dify/pull/38727 中 @asukaminato0721 在 test_plugin_service 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38770 中 @asukaminato0721 在 test_wraps 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/39080 中 @asukaminato0721 的命令中使用 SQLite 会话
* 测试：将数据源控制器覆盖范围移至 https://github.com/langgenius/dify/pull/38924 中 @asukaminato0721 的单元测试
* 修复：阻止 Safari cli 通过 @iamjoel 在 https://github.com/langgenius/dify/pull/39664 中点击设置关闭按钮
*修复：防止模型选择器页脚覆盖https://github.com/langgenius/dify/pull/39668中@iamjoel的选项
* 测试：将 OAuth 服务器服务覆盖范围移至 https://github.com/langgenius/dify/pull/38931 中 @asukaminato0721 的单元测试
*修复：通过https://github.com/langgenius/dify/pull/39669中的@lyzno1验证插件安装范围
* 杂务：改进 https://github.com/langgenius/dify/pull/39659 中的 @hjlarry 日志列表页面中的存档日志提示
* 测试：在https://github.com/langgenius/dify/pull/39099中@asukaminato0721在核心应用程序中使用SQLite会话
* 测试：在https://github.com/langgenius/dify/pull/39104中@asukaminato0721在核心数据源中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/38986 中 @asukaminato0721 的 LangSmith 跟踪中使用 SQLite
* 测试：将工作流应用程序服务覆盖范围移至 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38946 中的单元测试
* 杂务（docker）：删除https://github.com/langgenius/dify/pull/39035中@laipz8200的冗余功能预览环境
* 测试：在https://github.com/langgenius/dify/pull/38983中@asukaminato0721在阿里云跟踪实用程序中使用SQLite
* 测试：在https://github.com/langgenius/dify/pull/39074中@asukaminato0721在服务保留中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/39105 中 @asukaminato0721 在 core rag 中使用 SQLite 会话
* 修复：拒绝 https://github.com/langgenius/dify/pull/39667 中的 @Harsh23Kashyap 字母数字（）验证器中的尾随换行符（#39666）
* 测试：在 https://github.com/langgenius/dify/pull/39103 中的@asukaminato0721 在核心应用程序中使用 SQLite 会话
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/39671 中与 en-US 同步翻译
* 测试：在 https://github.com/langgenius/dify/pull/38724 中 @asukaminato0721 在 test_agent_app_feature_service 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38725 中 @asukaminato0721 在 test_web_login 中使用 sqlite3 会话
*修复：改进@iamjoel在https://github.com/langgenius/dify/pull/39676中未配置的代理指导
* 修复：https://github.com/langgenius/dify/pull/39590 中的 @rkfshakti 从代理节点中的模型架构默认值填充completion_params
* ci：在 @JohnJyong 在 https://github.com/langgenius/dify/pull/39677 中部署之前等待 KnowledgeFS
* 杂务：https://github.com/langgenius/dify/pull/39503 中的 @dependabot[bot] 在 /api 中将 nltk 从 3.9.4 提升到 3.10.0
* 壮举：将缺少的插件安装添加到 https://github.com/langgenius/dify/pull/39680 中@iamjoel 的代理 DSL 导入中
* ci：用 @escape0707 在 https://github.com/langgenius/dify/pull/39679 中的防护忽略替换自定义 noqa 标记
* ci：通过 @escape0707 在 https://github.com/langgenius/dify/pull/39682 中对单元测试执行严格检查
* 重构(web)：通过https://github.com/langgenius/dify/pull/39674中的@lyzno1从当前工作区导出工作区计费
* 壮举：@iamjoel 在 https://github.com/langgenius/dify/pull/39691 中标记悬停时代理对话重置操作
* 杂务（deps）：将 gitpython 从 3.1.54 提升到 api 中的 3.1.57，@wylswz 在 https://github.com/langgenius/dify/pull/39684 中
* 重构：在https://github.com/langgenius/dify/pull/39480中引入@BeautyyuYanli的Agent工作环境架构
* test(e2e)：通过https://github.com/langgenius/dify/pull/39698中的@lyzno1对齐代理工具凭证状态
* 测试：在https://github.com/langgenius/dify/pull/39689中@escape0707在迁移的单元测试中强制执行严格的类型
* 测试：通过 @escape0707 在 https://github.com/langgenius/dify/pull/39690 中共享未绑定的单元测试会话
* 重构(e2e)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39700 中统一种子运行时编排
* 杂务（deps）：bump starlette、soupsieve、@GareArc 在 https://github.com/langgenius/dify/pull/39716 中修复 CVE 的加密
* feat(agent)：使家庭快照成为可选并使用https://github.com/langgenius/dify/pull/39702中@BeautyyuYanli的后端默认值
* 杂务：在https://github.com/langgenius/dify/pull/39705中添加@BeautyyuYanli的E2B同步和tini监督
* 杂务（deps）：碰撞wandb 0.28.0 -> 0.28.1，用于@GareArc在https://github.com/langgenius/dify/pull/39718中的CVE修复尝试
* 修复（web）：@hjlarry 在 https://github.com/langgenius/dify/pull/39721 中的门插件身份验证权限提示
* 重构(web)：删除https://github.com/langgenius/dify/pull/39729中@lyzno1的工作流节点useBoolean用法
*测试：在https://github.com/langgenius/dify/pull/38688中的@asukaminato0721的test_workflow_pause_events中使用sqlite3会话
*测试：在https://github.com/langgenius/dify/pull/38703中的@asukaminato0721的test_ human_input_timeout_tasks中使用sqlite3会话
*测试：在https://github.com/langgenius/dify/pull/38721中的@asukaminato0721的test_metadata_bug_complete中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/38761 中 @asukaminato0721 在 test_sqlalchemy_workflow_execution_repository 中使用 sqlite3 会话
*测试：在https://github.com/langgenius/dify/pull/38772中的@asukaminato0721的test_session中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/39107 中 @asukaminato0721 的核心工具中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39089 中使用 @asukaminato0721 的库中的 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39106 中 @asukaminato0721 在 core rag 中使用 SQLite 会话
* 重构(web)：通过 https://github.com/langgenius/dify/pull/39740 中的 @lyzno1 合并 URL 中的设置状态
* 修复：通过 @linw1995 在 https://github.com/langgenius/dify/pull/39741 中处理未配置的 LLM 工作流
* 修复：避免在 https://github.com/langgenius/dify/pull/39744 中@hjlarry 的 Qdrant 搜索中返回 TiDB 中未使用的向量
* 修复：在https://github.com/langgenius/dify/pull/39746中由@iamjoel在结果面板中显示工作流程运行错误
* 重构（网络）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39748 中澄清教育国家所有权
* 修复（web）：强制渲染对话框背景并在 https://github.com/langgenius/dify/pull/39749 中 @lyzno1 的教育验证模式中使用对话框描述
* 测试：将服务数据集控制器覆盖范围移至 https://github.com/langgenius/dify/pull/38941 中 @asukaminato0721 的单元测试
* 测试：在https://github.com/langgenius/dify/pull/39100中@asukaminato0721在核心应用程序中使用SQLite会话
* 修复(docker): 在https://github.com/langgenius/dify/pull/39424中通过@dparkmit24挂载api_websocket中的共享存储卷
* 测试：在https://github.com/langgenius/dify/pull/38988中@asukaminato0721在腾讯跟踪中使用SQLite
* 修复(web): 当 @iamjoel 在 https://github.com/langgenius/dify/pull/39756 中代理发布失败时显示 API 错误
* 杂务：对 @hjlarry 在 https://github.com/langgenius/dify/pull/39739 中安装的应用程序进行分页
* 测试：通过https://github.com/langgenius/dify/pull/39758中的@escape0707将帐户服务测试迁移到共享SQLite
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/39762 中规范化 Tailwind 类
* 修复：通过 @fatelei 在 https://github.com/langgenius/dify/pull/39767 中修复硬编码 /home/dify
* 修复(matrixone): 为https://github.com/langgenius/dify/pull/39734中的@csurong的每个文档生成id
*修复：在https://github.com/langgenius/dify/pull/39765中重构@lyzno1有关对话框所有权的帐户
* 修复（插件）：在 https://github.com/langgenius/dify/pull/39764 中由 @zyssyz123 进行本地替换时保留凭据
* 修复（socketio）：在 https://github.com/langgenius/dify/pull/39587 中省略 @sergioperezcheco 的 RedisManager 发布/订阅选项中的 socket_timeout
*修复：允许https://github.com/langgenius/dify/pull/39695中的@zyz619963502zyz选择空代理工具
*修复（api）：删除https://github.com/langgenius/dify/pull/39708中@Souravrajvi0使用旧model_type值存储的自定义模型
*修复（web）：在https://github.com/langgenius/dify/pull/39768中通过@lyzno1约束斜线选择器触发器
* 测试：在https://github.com/langgenius/dify/pull/39063中@asukaminato0721在服务工具中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/39065 中的 @asukaminato0721 的服务 data_migration 中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39050 中 @asukaminato0721 在 rag pipeline 转换中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/38723 中 @asukaminato0721 在 test_completion_completion_app_generator 中使用 sqlite3 会话
* 测试：在https://github.com/langgenius/dify/pull/39067中@asukaminato0721在核心存储库中使用SQLite会话
* 测试：在https://github.com/langgenius/dify/pull/39073中@asukaminato0721在核心存储库中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/39091 中 @asukaminato0721 在服务工作流中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39092 中 @asukaminato0721 在 core rag 中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39095 中的@asukaminato0721 在控制器控制台应用程序中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39097 中的@asukaminato0721 在控制器控制台应用程序中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39101 中的@asukaminato0721 在核心应用程序中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39102 中的@asukaminato0721 在核心应用程序中使用 SQLite 会话
*修复（api）：防止HITL暂停中止https://github.com/langgenius/dify/pull/39485中@Success6666的工作流程恢复
* 修复：从 https://github.com/langgenius/dify/pull/39781 中@iamjoel 的检查列表警告中打开内联代理编辑器
* 测试：在 https://github.com/langgenius/dify/pull/38985 中 @asukaminato0721 在 Langfuse 跟踪中使用 SQLite
* 测试：在 https://github.com/langgenius/dify/pull/38987 中 @asukaminato0721 在 Opik 跟踪中使用 SQLite
* 测试：在https://github.com/langgenius/dify/pull/39094中@asukaminato0721在核心工具中使用SQLite会话
* 测试：将 RAG 管道导入覆盖范围移至 https://github.com/langgenius/dify/pull/38938 中 @asukaminato0721 的单元测试
* 测试：在 https://github.com/langgenius/dify/pull/38722 中 @asukaminato0721 在 test_billing 中使用 sqlite3 会话
*测试：在https://github.com/langgenius/dify/pull/38731中@asukaminato0721在test_factory中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/38732 中的 @asukaminato0721 的 test_Trial 中使用 sqlite3 会话
*测试：在https://github.com/langgenius/dify/pull/38734中的@asukaminato0721的test_workflow_node_execution_truncation中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/39076 中 @asukaminato0721 的任务中使用 SQLite 会话
* 修复（工作流程）：为 https://github.com/langgenius/dify/pull/39754 中的 @loulanyue 提供 AgentNodeData 字段的默认值 (#39743)
* 重构(web)：通过https://github.com/langgenius/dify/pull/39789中的@lyzno1本地化模型负载平衡模态状态
* 修复（聊天）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39790 中导出每个聊天根的主题
* 重构(web)：通过https://github.com/langgenius/dify/pull/39791中的@lyzno1本地化数据集外部API状态
* 重构（web）：通过https://github.com/langgenius/dify/pull/39792中的@lyzno1删除应用程序日志抽屉上下文
* 重构(web)：通过https://github.com/langgenius/dify/pull/39794中的@lyzno1内部化触发限制模态状态
* 重构(web): 本地化@lyzno1在https://github.com/langgenius/dify/pull/39795中的检索方法查询
* 重构（web）：通过https://github.com/langgenius/dify/pull/39796中的@lyzno1删除配置手套上下文
* 修复(web): 在 https://github.com/langgenius/dify/pull/39797 中隔离 @Jingyi-Dify 的 MCP 卡操作叠加
* 壮举：在 https://github.com/langgenius/dify/pull/39798 中添加@iamjoel 对代理文件和技能的上传大小指导和验证
* 重构(web)：通过https://github.com/langgenius/dify/pull/39800中的@lyzno1删除死数据集运算符上下文状态
* 重构（web）：通过 https://github.com/langgenius/dify/pull/39801 中的 @lyzno1 删除过时的标头最大化状态
* 重构（web）：https://github.com/langgenius/dify/pull/39802 中的 @lyzno1 缩小应用程序列表上下文
*修复（ui）：在https://github.com/langgenius/dify/pull/39804中通过@lyzno1对齐选择触发对焦环
* 壮举：在https://github.com/langgenius/dify/pull/39799中通过@linw1995配置技能包上传大小限制
* 测试：在 https://github.com/langgenius/dify/pull/39803 中 @escape0707 在应用程序 DSL 服务测试中使用 SQLite 会话
* 测试：@EvanYao826 在 https://github.com/langgenius/dify/pull/39722 中使用 caplog 进行遥测错误日志记录
* 重构（dify-ui）：通过@lyzno1在https://github.com/langgenius/dify/pull/39806中管理公共组件API
*壮举：将 api/v1/plugins/download 更改为 api/v1/plugins/download-url by @fatelei in https://github.com/langgenius/dify/pull/39811
* 重构(web)：在 https://github.com/langgenius/dify/pull/39820 中通过 @lyzno1 对齐基本 UI 组合合约
* 文档：删除 docker/README.md 中 @xiaoyaoqilan 中的 https://github.com/langgenius/dify/pull/39808 中的尾随空格
* Chore(api)：将链式 .where() 调用合并为 @MannXo 在 https://github.com/langgenius/dify/pull/39819 中的单个调用
* 测试：通过 @escape0707 在 https://github.com/langgenius/dify/pull/39827 中使用 SQLite 练习凭证可见性
* 修复：在https://github.com/langgenius/dify/pull/39828中通过@zhangx1n的应用程序ID刷新mcp服务器代码
* 文档：修复 api 注释中的拼写错误以及 @iridescentWen 在 https://github.com/langgenius/dify/pull/39838 中的提示示例
*修复（api）：https://github.com/langgenius/dify/pull/39841中的@MRZHUH将opentelemetry.context错误报告给云上的Sentry。
* 修复（工作流程）：在 https://github.com/langgenius/dify/pull/39843 中重新映射 @JzoNgKVO 的片段引用
* 壮举：https://github.com/langgenius/dify/pull/39850 中 @iamjoel 在代理提示选择器中优先配置的工具
* 修复（web）：在 https://github.com/langgenius/dify/pull/39856 中跳过 @hjlarry 对本地文件数据源的身份验证
* 修复(web): 在https://github.com/langgenius/dify/pull/39858中@lyzno1隐藏代理v2日志中的提示日志操作
* 重构（ui）：通过https://github.com/langgenius/dify/pull/39857中的@lyzno1简化滚动区域API
* 测试：在 https://github.com/langgenius/dify/pull/39054 中的@asukaminato0721 在服务代理中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39055 中 @asukaminato0721 在 core rag 中使用 SQLite 会话
* 测试：在https://github.com/langgenius/dify/pull/39062中@asukaminato0721在核心操作中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/39068 中 @asukaminato0721 的核心工具中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39070 中的 @asukaminato0721 的核心 llm_generator 中使用 SQLite 会话
* 测试：在https://github.com/langgenius/dify/pull/39078中@asukaminato0721在核心存储库中使用SQLite会话
* 测试：在https://github.com/langgenius/dify/pull/39081中@asukaminato0721在核心callback_handler中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/39086 中 @asukaminato0721 在核心工作流程中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39087 中的@asukaminato0721 在服务工作流程中使用 SQLite 会话
* 修复(rag): 在 https://github.com/langgenius/dify/pull/39831 中为 @superdiaodiao 的 Firecrawl 提取器请求添加有界超时
* 修复(rag): 在 https://github.com/langgenius/dify/pull/39833 中为@superdiaodiao 的概念提取器请求添加有界超时
* 修复（auth）：在https://github.com/langgenius/dify/pull/39824中通过@superdiaodiao为WaterCrawl凭证验证添加有界超时
* 修复(web)：在https://github.com/langgenius/dify/pull/39862中对齐辅助侧边栏帮助由@lyzno1触发
* 修复(api): https://github.com/langgenius/dify/pull/38217 中 @WH-2099 批量删除作用域段
* 杂务（api）：修复https://github.com/langgenius/dify/pull/39870中@zyz619963502zyz的配置描述和注释中的拼写错误
* 修复（api）：https://github.com/langgenius/dify/pull/39875 中的 @Harsh23Kashyap 绑定计费服务 HTTP 超时（#39874）
* 重构(web)：通过https://github.com/langgenius/dify/pull/39864中的@lyzno1对齐基本UI状态消费者
*修复（api）：防止cookies隐藏https://github.com/langgenius/dify/pull/39872中@kenwoodjw的管理API密钥
* 修复（matrixone）：将分数阈值应用于https://github.com/langgenius/dify/pull/39784中@csurong的矢量搜索
* 修复（api）：https://github.com/langgenius/dify/pull/39860 中的 @Harsh23Kashyap 绑定 JinaReader 和自适应爬网 HTTP 超时（#39859）
* 修复（api）：使 SSRF 阻止的错误消息可由 https://github.com/langgenius/dify/pull/39867 中的 @Taranum01 操作
* 测试（web）：删除https://github.com/langgenius/dify/pull/39877中@lyzno1的基本UI组件模拟
* perf(dataset): 通过 @HassanRady 在 https://github.com/langgenius/dify/pull/39899 中修复 Notion 同步中的 N+1 数据库插入瓶颈
* 修复（vdb-oceanbase）：拒绝 https://github.com/langgenius/dify/pull/39901 中的 @Harsh23Kashyap 元数据键和文档 ID 验证器中的尾随换行符（#39884）
* feat(workflow)：在https://github.com/langgenius/dify/pull/39243中支持@laipz8200循环和迭代中的人工输入
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/39909 中进行 2 次更新来提高 github-actions-dependencies 组
* 杂务：通过 https://github.com/langgenius/dify/pull/39885 中的 @HandSonic 在 ApiModeration 中显式传递会话
* 修复(web): 澄清 https://github.com/langgenius/dify/pull/39917 中 @WTW0313 的成员权限异常副本
* 杂务：保持 dify-agent 环境与 https://github.com/langgenius/dify/pull/39918 中 @fatelei 的 dify 相同
* 修复（api）：停止在https://github.com/langgenius/dify/pull/39902中由@Harsh23Kashyap回显403错误消息中的原始api_key（#39888）
* 修复(dify-agent): 稳定https://github.com/langgenius/dify/pull/39873中@zhaohao1004的E2B配置实现
* 杂务：https://github.com/langgenius/dify/pull/39876 中 @asukaminato0721 的凹凸 Pyrefly 版本
* feat: 通过https://github.com/langgenius/dify/pull/39848中的@fatelei将图像文件传递给llm
* 修复：https://github.com/langgenius/dify/pull/38861 中@weijun-xia 迁移时在 HTTP 节点表单主体值中保留冒号
* 修复（dify-agent）：通过 @zhaohao1004 在 https://github.com/langgenius/dify/pull/39929 中自动完成运行终端
*修复（网络）：通过https://github.com/langgenius/dify/pull/39938中的@lyzno1改善家庭可访问性
*修复(web):删除https://github.com/langgenius/dify/pull/39939中@lyzno1的Web应用程序加载骨架
* 测试：在 https://github.com/langgenius/dify/pull/39052 中 @asukaminato0721 在 Web 控制器装置中使用 SQLite 会话
*测试：在https://github.com/langgenius/dify/pull/39053中@asukaminato0721在rag pipeline dsl中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/39059 中的 @asukaminato0721 的控制器服务 api 中使用 SQLite 会话
* 测试：在控制器控制台中使用 SQLite 会话，由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/39064 中探索
* 测试：在https://github.com/langgenius/dify/pull/39071中@asukaminato0721在核心test_provider_manager.py中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/39079 中的 @asukaminato0721 在核心应用程序中使用 SQLite 会话
* 修复（网页）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39940 中提高主导航响应能力和游览焦点
* perf(web): 在 https://github.com/langgenius/dify/pull/39922 中通过 @lyzno1 流式传输 ssr 主页
*修复（api）：碰撞OpenTelemetry以阻止https://github.com/langgenius/dify/pull/39921中@GareArc重复的Flask上下文分离
*修复（api）：通过https://github.com/langgenius/dify/pull/39935中的@GareArc验证缓存的市场包的安装范围
* feat(api)：通过https://github.com/langgenius/dify/pull/39957中的@linw1995将凭证与本地包隔离
* 杂务（deps）：https://github.com/langgenius/dify/pull/39958 中的 @dependabot[bot] 在 /dify-agent 中将加密从 49.0.0 提升到 50.0.0
*修复（dify-agent）：在https://github.com/langgenius/dify/pull/39943中@BeautyyuYanli在没有会话的情况下保持tmux服务器处于活动状态
* 修复（dify-agent）：使运行取消与https://github.com/langgenius/dify/pull/39942中的@BeautyyuYanli的路线无关
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/39959 中的 @dependabot[bot] 将 aiohttp 从 /api 中的 3.14.1 提升到 3.14.3
* 修复（vdb）：https://github.com/langgenius/dify/pull/39953 中 @he-yufeng 绑定 TiDB Cloud API 超时
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/39911 中对 vdb 组进行 9 次更新
* 重构（工作流程）：通过https://github.com/langgenius/dify/pull/39845中的@laipz8200将AgentNode事件移出graphon
* 杂务（web）：通过https://github.com/langgenius/dify/pull/39962中的@lyzno1将Next.js升级到16.3
*修复（api）：允许https://github.com/langgenius/dify/pull/39930中的@GareArc在企业RBAC下创建外部知识库
* 修复（dify-ui）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39971 中改进选择和状态点的可访问性
* 杂务（docker）：通过https://github.com/langgenius/dify/pull/39970中的@laipz8200将可选设置移动到服务环境
* feat(workflow)：在https://github.com/langgenius/dify/pull/39125中支持@laipz8200的LLM环境变量
* 修复：在 https://github.com/langgenius/dify/pull/39980 中通过 @iamjoel 对齐构建和预览聊天布局
* 修复（工作流程）：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/39983 中避免并行迭代中的应用程序上下文依赖
*修复（api）：https://github.com/langgenius/dify/pull/39986中的@linw1995在没有回退的情况下表面系统配额耗尽
* 修复（ui）：将按钮间距与https://github.com/langgenius/dify/pull/39990中@lyzno1的设计对齐
*测试：在https://github.com/langgenius/dify/pull/38753中的@asukaminato0721的test_if_else中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/38765 中的 @asukaminato0721 在 test_qa_index_processor 中使用 sqlite3 会话
* 杂务（api）：删除https://github.com/langgenius/dify/pull/39949中@nightcityblade无法到达的匹配抑制
* feat(agent)：通过https://github.com/langgenius/dify/pull/39952中的@BeautyyuYanli分离CLI文件URL受众
* 修复（代理）：通过 https://github.com/langgenius/dify/pull/39994 中的 @zyssyz123 公开代理日志中的反馈
* 修复(e2e): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40005 中配置沙箱可访问的 API URL
* 重构(api)：https://github.com/langgenius/dify/pull/39822中@41tair将工作区列表提取到分层应用程序服务中
* 修复(web): 在 https://github.com/langgenius/dify/pull/40004 中保留 @lyzno1 提交失败的反馈状态
* 测试：在 https://github.com/langgenius/dify/pull/38984 中 @asukaminato0721 在 Arize Phoenix 跟踪中使用 SQLite
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/40006中的@lyzno1将基本UI升级到1.7.0
* 修复（ci）：强化 @lyzno1 在 https://github.com/langgenius/dify/pull/40009 中安装的 Playwright 浏览器
* 修复（ci）：使网络工作流程可通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40010 中重现
* 杂务：在 https://github.com/langgenius/dify/pull/40011 中的@iamjoel 将复制操作添加到工作流日志错误
* 重构(web)：简化https://github.com/langgenius/dify/pull/40014中@lyzno1的标签选择器触发
* 重构（web）：删除https://github.com/langgenius/dify/pull/40023中@lyzno1更新的重复数据集标题
* 修复（网络）：删除 https://github.com/langgenius/dify/pull/40015 中 @lyzno1 的误导性 ARIA 状态
* 重构(web)：通过https://github.com/langgenius/dify/pull/40024中的@lyzno1对齐查询client所有权
* 重构(web)：从 https://github.com/langgenius/dify/pull/40030 中的 @lyzno1 的模式中派生系统功能枚举
* 测试：在 https://github.com/langgenius/dify/pull/38694 中 @asukaminato0721 在 test_credit_pool_service 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38764 中 @asukaminato0721 在 test_agent_config_service 中使用 sqlite3 会话
* 修复（web）：通过 @linw1995 在 https://github.com/langgenius/dify/pull/40035 中改进调试插件复制可访问性
* 测试：在 https://github.com/langgenius/dify/pull/40017 中@asukaminato0721 在 RAG 索引测试中使用真实的 ORM 模型
* 修复（dify-agent）：等待 https://github.com/langgenius/dify/pull/39996 中@BeautyyuYanli 的 E2B shellctl 准备就绪
* 修复(web): 在 https://github.com/langgenius/dify/pull/40002 中 @Jingyi-Dify 更新后刷新模型提供程序插件
* 修复(web): 在 https://github.com/langgenius/dify/pull/40051 中通过 @Jingyi-Dify 重定向遗留插件后备
* 重构（api）：通过https://github.com/langgenius/dify/pull/39974中的@escape0707将工作区成员列表提取到分层服务中
* 修复：https://github.com/langgenius/dify/pull/39978 中 @csurong 使文档重试批次一致
* 修复：保留 @pineapple880066 在 https://github.com/langgenius/dify/pull/40034 中上传文本的 UTF-8 字节大小
* 琐事：@hjlarry 在 https://github.com/langgenius/dify/pull/39967 中为付费用户提供更多上传文件大小
*修复（api）：允许https://github.com/langgenius/dify/pull/40055中的@CodeWarriors0跨工作区使用帐户头像
* 测试：在https://github.com/langgenius/dify/pull/39108中@asukaminato0721的核心工具中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/40019 中 @asukaminato0721 在工作流存储库测试中使用真实的 ORM 模型
* 测试：在https://github.com/langgenius/dify/pull/39058中@asukaminato0721在服务核心中使用SQLite会话
* 修复：在 https://github.com/langgenius/dify/pull/40040 中通过 @iamjoel 抵消旧版应用程序错误 toasts 下面的模型控件
* 测试：在 https://github.com/langgenius/dify/pull/40018 中@asukaminato0721 在数据集服务测试中使用真实的 ORM 模型
* 修复：隐藏 @iamjoel 在 https://github.com/langgenius/dify/pull/40057 中遗留应用程序日志的日志详细操作
* 测试：在应用程序中使用真实的 ORM 模型，并通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/40020 中进行 API 测试
* 测试：在 https://github.com/langgenius/dify/pull/39083 中的@asukaminato0721 在核心应用程序中使用 SQLite 会话
* 测试：将 webhook 服务覆盖范围移至 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38945 中的单元测试
* 测试：在 https://github.com/langgenius/dify/pull/39051 中 @asukaminato0721 在干净的数据集中使用 SQLite 会话
* 重构（系统功能）：通过 https://github.com/langgenius/dify/pull/40063 中的 @lyzno1 派生可空 SSO 协议
* 测试：在https://github.com/langgenius/dify/pull/39056中@asukaminato0721在核心实体中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/39060 中的 @asukaminato0721 控制器控制台中使用 SQLite 会话进行身份验证
* 测试：在https://github.com/langgenius/dify/pull/39082中@asukaminato0721的命令中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/39096 中的 @asukaminato0721 在控制器控制台应用程序中使用 SQLite 会话
* 修复(web): 通过 @WTW0313 在 https://github.com/langgenius/dify/pull/40070 中改进 Markdown 表单渲染
* 测试：在https://github.com/langgenius/dify/pull/39061中@asukaminato0721在核心存储库中使用SQLite会话
* feat(trace-aliyun)：GenAI 跨越 https://github.com/langgenius/dify/pull/39339 中的 @123liuziming 的 LLM TTFT、代理 ReAct、工具和失败的 LLM 节点
* 杂务：通过 https://github.com/langgenius/dify/pull/40069 中的 @lyzno1 升级工作区依赖项
* 修复(e2e)：在 https://github.com/langgenius/dify/pull/40075 中通过 @lyzno1 对齐市场插件下载 URL
* 修复(web): 当 @Souravrajvi0 在 https://github.com/langgenius/dify/pull/39761 中输入 / 时，仅打开斜杠变量选择器 (#39755)
* 杂务：在 https://github.com/langgenius/dify/pull/40073 中通过 @lyzno1 使用 Oxfmt 格式化 GitHub 元数据
* 修复：获取角色和列出角色需要通过https://github.com/langgenius/dify/pull/38218中的@fatelei过滤计费权限密钥
* 修复（网络）：在 https://github.com/langgenius/dify/pull/37841 中的 @eldardada 的真实媒体事件上注册音频监听器
* 壮举：添加老挝 (lo-LA) 语言支持 #39489 by @bounkirdni-2025 in https://github.com/langgenius/dify/pull/39474
* feat: 支持 https://github.com/langgenius/dify/pull/38112 中 @bkidy 的 TiDB Vector 全文和混合搜索
* 杂务(web)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40082 中删除过时的 PWA 资产
* 修复：https://github.com/langgenius/dify/pull/40077 中 @iamjoel 在发布和工作流程检查中报告不可用的代理工具
* 杂务（i18n）：https://github.com/langgenius/dify/pull/40096 中的 @github-actions[bot] 与 en-US 同步翻译
* 杂务：删除 https://github.com/langgenius/dify/pull/40098 中 @lyzno1 过时的开发文档
* 测试：在 https://github.com/langgenius/dify/pull/38696 中 @asukaminato0721 在 test_external_dataset_service 中使用 sqlite3 会话
* 测试：在https://github.com/langgenius/dify/pull/39048中@asukaminato0721在数据源文件中使用SQLite会话
* 修复(ci)：通过 https://github.com/langgenius/dify/pull/40100 中的 @lyzno1 将 Playwright 作业切换到 Azure Ubuntu 镜像
*恢复(web)：删除https://github.com/langgenius/dify/pull/40103中@lyzno1的冗余斜杠选择器意图跟踪
* 修复（dify-agent）：在 https://github.com/langgenius/dify/pull/40042 中 @BeautyyuYanli 结束终端事件上的 SSE 流
* 修复（dify-agent）：https://github.com/langgenius/dify/pull/40043 中@BeautyyuYanli 对齐代理和 shell 执行限制
* 修复：在 @zyssyz123 在 https://github.com/langgenius/dify/pull/40105 中首次发布之前，限制代理访问
* 壮举：在 https://github.com/langgenius/dify/pull/39933 中支持 @wylswz 的 azure keyvault
* 重构(api)：https://github.com/langgenius/dify/pull/40031中@41tair通过应用服务解耦控制台查询
* 测试（e2e）：在https://github.com/langgenius/dify/pull/40108中通过@lyzno1对齐重复的代理发布状态
* 壮举：优化https://github.com/langgenius/dify/pull/40118中@Jingyi-Dify的集成初始加载
* 重构（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40109 中对 Studio 应用程序列表数据流进行现代化改造
* 壮举：https://github.com/langgenius/dify/pull/39972 中的@GareArc 使控制台许可证到期徽章成为可选
* 杂务：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/40121 中改进当前工作区摘要
* 修复（web）：在https://github.com/langgenius/dify/pull/40124中@lyzno1在受保护的路由上强制执行帧祖先
*测试：在https://github.com/langgenius/dify/pull/40095中@asukaminato0721在生成边界使用sqlite会话
* 测试：https://github.com/langgenius/dify/pull/40092 中的 @asukaminato0721 将文档索引任务会话迁移到 SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40081中的@asukaminato0721将控制台应用程序会话迁移到SQLite
* 重构（api）：通过 @GareArc 在 https://github.com/langgenius/dify/pull/40128 中将许可证到期通知标志移至许可证详细信息
* 修复(web)：https://github.com/langgenius/dify/pull/40130 中@lyzno1 将隐藏轮廓范围设置为焦点可见
* 重构(web)：通过https://github.com/langgenius/dify/pull/40131中的@lyzno1简化计费门户链接
* 文档：修复了 @Mubelotix 在 https://github.com/langgenius/dify/pull/40115 中的明星历史图表
* 重构(web)：本地化@lyzno1在https://github.com/langgenius/dify/pull/40132中的教育状态查询
* 杂务：凹凸插件守护进程图像由 @hjlarry 在 https://github.com/langgenius/dify/pull/40134 中
* 重构（dify-agent）：使配置直接拉动并通过@BeautyyuYanli在https://github.com/langgenius/dify/pull/40044中删除gRPC
* 杂务：在 https://github.com/langgenius/dify/pull/40139 中使用 @hjlarry 的多架构插件守护程序图像标签
* 杂务（web）：通过@lyzno1在https://github.com/langgenius/dify/pull/40135中添加专用的家庭加载边界
* perf(web)：在https://github.com/langgenius/dify/pull/40133中按@lyzno1的意图预取应用程序链接
* 修复：在 https://github.com/langgenius/dify/pull/40140 中显示 @iamjoel 的内联代理构建草稿更改详细信息
* 杂务：在 https://github.com/langgenius/dify/pull/40146 中的 @likalikali 通知中为模型注入 dep
* 修复（api）：https://github.com/langgenius/dify/pull/39863 中 @WH-2099 为所有者提供临时功能范围
* 杂务（网络）：删除https://github.com/langgenius/dify/pull/40136中@lyzno1无法访问的探索侧边栏
* 修复：提高 https://github.com/langgenius/dify/pull/40148 中 @iamjoel 的 DSL 导入警告的可读性
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/40150 中与 en-US 同步翻译
* 壮举：支持 @iamjoel 在 https://github.com/langgenius/dify/pull/40137 中进行 CI 中的可访问性检查
* feat(dify-agent)：通过@BeautyyuYanli在https://github.com/langgenius/dify/pull/40116中传播运行限制错误类型
* 杂务：数据集文档和网络人工输入中的模型的 dep 注入……作者：https://github.com/langgenius/dify/pull/40151 中的 @likalikali
* 杂务：由 @likalikali 在 https://github.com/langgenius/dify/pull/40147 中为 oauth 服务器中的模型进行 dep 注入
* 杂务：在 https://github.com/langgenius/dify/pull/40154 中 @likalikali 基于 api 的扩展中的模型进行 dep 注入
* 杂务：在https://github.com/langgenius/dify/pull/40156中@likalikali在网站抓取api中注入模型的dep
* 杂务：在 https://github.com/langgenius/dify/pull/40159 中通过@likalikali 在标签、mcp 服务器和数据源身份验证中注入模型的 dep
* 杂务：在工作流程中注入模型的 dep 运行存档，由 @likalikali 在 https://github.com/langgenius/dify/pull/40157 中下载
* 杂务：在 https://github.com/langgenius/dify/pull/40155 中 @likalikali 的逐步入门教程中为模型注入 dep
* 杂务：在 https://github.com/langgenius/dify/pull/40161 中 @likalikali 为工作区片段、负载平衡和端点中的模型进行 dep 注入
* 杂务：在 https://github.com/langgenius/dify/pull/40153 中 @likalikali 上传的代理应用程序沙箱中为模型进行 dep 注入
* 重构(dify-agent): 通过@BeautyyuYanli在https://github.com/langgenius/dify/pull/40143中的Agent Stub下载Binding文件
* 恢复（web）：在https://github.com/langgenius/dify/pull/40167中@lyzno1在主页中使用悬念边界
* 杂务：在 https://github.com/langgenius/dify/pull/40160 中 @likalikali 探索 apis 中为模型注入注入
* 杂务：在 @likalikali 在 https://github.com/langgenius/dify/pull/40158 中运行的探索工作流程中为模型注入 dep
* 重构：https://github.com/langgenius/dify/pull/40170 中的@likalikali 将手动 model_validate 替换为应用程序控制器中的 @model_validate 装饰器
* 修复（agent-v2）：在 https://github.com/langgenius/dify/pull/40171 中的 @chelsealong 的手动元数据过滤条件上接受作曲家 UI id
* 重构（api）：通过https://github.com/langgenius/dify/pull/40104中的@41tair解耦设置和规范端点
* 测试：将 RAG 管道工作流程覆盖范围移至 https://github.com/langgenius/dify/pull/38937 中 @asukaminato0721 的单元测试
* 杂务：删除https://github.com/langgenius/dify/pull/40189中@medisean的冗余数据集上下文字符串转换
* 修复（工作流程）：当 @hjlarry 在 https://github.com/langgenius/dify/pull/40191 中默认套接字不可用时回退
* 重构：https://github.com/langgenius/dify/pull/40233 中的 @likalikali 将代理控制器中的手动 model_validate 替换为 @model_validate
* 重构：https://github.com/langgenius/dify/pull/40238 中的 @likalikali 将工作区插件/工具控制器中的手动 model_validate 替换为 @model_validate
* 重构：在https://github.com/langgenius/dify/pull/40240中用@likalikali在auth/billing/tag控制器中用@model_validate替换手动model_validate
* 重构：将 https://github.com/langgenius/dify/pull/40241 中的 @likalikali 中的 explore/snippets 控制器中的手动 model_validate 替换为 @model_validate
* 重构：将https://github.com/langgenius/dify/pull/40234中的@likalikali在应用程序核心控制器中的手动model_validate替换为@model_validate
* 重构：https://github.com/langgenius/dify/pull/40235 中的 @likalikali 在应用程序工作流控制器中将手动 model_validate 替换为 @model_validate
* 重构：https://github.com/langgenius/dify/pull/40237 中的 @likalikali 将 rag_pipeline 控制器中的手动 model_validate 替换为 @model_validate
* 重构：在https://github.com/langgenius/dify/pull/40239中的@likalikali将工作区剩余控制器中的手动model_validate替换为@model_validate
* 重构：https://github.com/langgenius/dify/pull/40236 中的 @likalikali 将数据集控制器中的手动 model_validate 替换为 @model_validate
* 修复（代理）：通过 https://github.com/langgenius/dify/pull/40163 中的 @chelsealong 的 Agent Soul 保留插件声明的模型参数
* 修复（网络）：在 https://github.com/langgenius/dify/pull/40376 中隐藏来自 @lyzno1 辅助技术的凭证图标
* 修复(web): 在https://github.com/langgenius/dify/pull/40375中通过@lyzno1关联应用程序删除确认标签
* 修复(web): 删除 https://github.com/langgenius/dify/pull/40377 中 @lyzno1 的工作流输出标题制表位
* 测试：@asukaminato0721 在 https://github.com/langgenius/dify/pull/40371 中进行型式测试
* 重构(web)：在https://github.com/langgenius/dify/pull/40188中通过@lyzno1统一无限滚动哨兵
* 修复（网络）：在 https://github.com/langgenius/dify/pull/40192 中的 @lyzno1 的授权页面上使用主标题
* 修复（网络）：在 https://github.com/langgenius/dify/pull/40194 中的安装页面上使用 @lyzno1 的主标题
* 修复（web）：使用 @lyzno1 在 https://github.com/langgenius/dify/pull/40197 中执行 webapp 回退操作的按钮
* 修复（网页）：在 https://github.com/langgenius/dify/pull/40198 中使用@lyzno1 按钮进行未经授权的注销
*壮举（api）：在https://github.com/langgenius/dify/pull/40176中缓存@Souravrajvi0获取的远程推荐应用程序模板
* 修复（网页）：名称聊天设置由 https://github.com/langgenius/dify/pull/40341 中的 @lyzno1 触发
* 修复（网页）：在 https://github.com/langgenius/dify/pull/40349 中使用@lyzno1 按钮进行工具详细信息切换
* 修复（网络）：在 https://github.com/langgenius/dify/pull/40203 中隐藏来自 @lyzno1 辅助技术的引文测量项目
* 修复(web): 在 https://github.com/langgenius/dify/pull/40344 中通过 @lyzno1 命名聊天历史记录控件
* 修复(web): 在 https://github.com/langgenius/dify/pull/40273 中通过 @lyzno1 命名工作流调试操作
* 修复(web): 恢复 @lyzno1 在 https://github.com/langgenius/dify/pull/40222 中提交的 webapp 密码表单
* 修复（网页）：使用https://github.com/langgenius/dify/pull/40333中@lyzno1附近的聊天变量面板按钮
* 修复(web): 在 https://github.com/langgenius/dify/pull/40202 中通过 @lyzno1 将人工输入扩展器设为按钮
*修复（web）：使https://github.com/langgenius/dify/pull/40209中的@lyzno1可以访问成员选择器键盘
* 修复(web): 在 https://github.com/langgenius/dify/pull/40214 中通过 @lyzno1 将滚动到节点操作设为按钮
* 修复(web): 恢复 @lyzno1 在 https://github.com/langgenius/dify/pull/40227 中提交的 webapp 电子邮件代码表单
* 修复(web): 恢复 https://github.com/langgenius/dify/pull/40230 中 @lyzno1 的注册电子邮件焦点顺序
* 修复(web): 在https://github.com/langgenius/dify/pull/40205中暴露@lyzno1的录音计时器
* 修复(web): 在https://github.com/langgenius/dify/pull/40253中@lyzno1触发名字对话菜单
* 重构(web)：在 https://github.com/langgenius/dify/pull/40247 中通过 @lyzno1 保留按钮上的复制 id 事件
* 修复（web）：https://github.com/langgenius/dify/pull/40254 中 @lyzno1 命名数据集配置操作
* 修复(web): https://github.com/langgenius/dify/pull/40255 中 @lyzno1 的名称注释配置操作
* 修复(web): 在https://github.com/langgenius/dify/pull/40248中通过@lyzno1制作数据集侧边栏菜单项按钮
* 修复(web): 在 https://github.com/langgenius/dify/pull/40270 中通过 @lyzno1 命名注释回复操作
* 修复(web): 在 https://github.com/langgenius/dify/pull/40256 中命名@lyzno1 保存的项目操作
* 修复(web): 在 https://github.com/langgenius/dify/pull/40276 中通过 @lyzno1 命名工作流版本历史操作
* 修复（网络）：https://github.com/langgenius/dify/pull/40278 中 @lyzno1 的名称片段停止操作
* 修复（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40258 中公开调试工具栏语义
* 修复(web): 在 https://github.com/langgenius/dify/pull/40293 中通过 @lyzno1 命名人工输入删除操作
* 修复（网络）：在 https://github.com/langgenius/dify/pull/40283 中通过 @lyzno1 命名图像预览器操作
* 修复（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40282 中公开工作流并行切换状态
* 修复（web）：名称变量检查https://github.com/langgenius/dify/pull/40289中@lyzno1的关闭操作
* 修复(web): https://github.com/langgenius/dify/pull/40286 中 @lyzno1 的名称代理日志导航菜单
* 修复（web）：https://github.com/langgenius/dify/pull/40324 中@lyzno1 命名代码生成器操作
* 修复(web): 在 https://github.com/langgenius/dify/pull/40317 中通过 @lyzno1 命名外部检索关闭操作
* 修复（网络）：在 https://github.com/langgenius/dify/pull/40321 中将人类输入预览命名为 @lyzno1 附近
* 修复（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40332 中公开 SVG 预览切换状态
* 修复（web）：https://github.com/langgenius/dify/pull/40328 中@lyzno1 命名提示生成器操作
* 重构(web)：依赖 https://github.com/langgenius/dify/pull/40352 中 @lyzno1 的 QR 面板遏制
* 修复(web): https://github.com/langgenius/dify/pull/40337 中 @lyzno1 的名称分配器添加操作
* 修复(web): 在 https://github.com/langgenius/dify/pull/40353 中使用 @lyzno1 的插件类型切换按钮
* 修复（网络）：在 https://github.com/langgenius/dify/pull/40360 中使用 @lyzno1 的定价类别按钮
* 修复（网页）：在 https://github.com/langgenius/dify/pull/40362 中使用 @lyzno1 提供程序工具项的按钮
* 重构(web)：依赖https://github.com/langgenius/dify/pull/40363中@lyzno1的预览对话框遏制
*修复（网络）：使用https://github.com/langgenius/dify/pull/40361中@lyzno1的发布者访问按钮
* 修复（网络）：在 https://github.com/langgenius/dify/pull/40193 中 @lyzno1 的密码重置页面上使用主标题
*修复（网络）：在https://github.com/langgenius/dify/pull/40204中通过@lyzno1使引用切换按钮
* 修复（web）：在https://github.com/langgenius/dify/pull/40251中将片段信息菜单触发器命名为@lyzno1
* 修复(web): 在https://github.com/langgenius/dify/pull/40252中将插件调试触发器命名为@lyzno1
* 杂务：https://github.com/langgenius/dify/pull/40370 中 @asukaminato0721 的 rm db.session 示例
* 修复(web): 在 https://github.com/langgenius/dify/pull/40259 中命名 @lyzno1 生成的结果复制操作
* 修复（web）：使 https://github.com/langgenius/dify/pull/40196 中的 @lyzno1 可访问验证返回操作键盘
* 修复(web): 在 https://github.com/langgenius/dify/pull/40303 中通过 @lyzno1 命名 OAuth 重定向复制操作
* 修复（web）：在 https://github.com/langgenius/dify/pull/40261 中通过 @lyzno1 命名插件项操作
* 修复（web）：在 https://github.com/langgenius/dify/pull/40264 中通过 @lyzno1 命名插件详细关闭操作
* 修复(web)：在 https://github.com/langgenius/dify/pull/40309 中将外部 API 面板命名为 @lyzno1
*修复（网络）：在https://github.com/langgenius/dify/pull/40313中将外部API模态命名为@lyzno1附近
* 杂务（deps）：在 https://github.com/langgenius/dify/pull/40391 中通过 @dependabot[bot] 进行 2 次更新来提高 github-actions-dependencies 组
* 修复（api）：反馈导出中的 end_date 过滤器排除了 https://github.com/langgenius/dify/pull/40114 中 @agarwalpranav0711 的整个结束日期
* 修复：在https://github.com/langgenius/dify/pull/40356中@chelsealong的帐户CLI命令中捕获ValueError而不是裸露的
* 修复(web): 在 https://github.com/langgenius/dify/pull/40299 中通过 @lyzno1 命名 MCP 标头字段
* 修复（web）：使工具类别过滤器键盘可通过https://github.com/langgenius/dify/pull/40243中的@lyzno1访问
* 修复(web): 在 https://github.com/langgenius/dify/pull/40357 中使用 @lyzno1 的版本过滤器按钮
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/40183中的@dependabot[bot]将/dify-agent中的pymdown扩展从11.0提升到11.0.1
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/40184中的@dependabot[bot]将/api中的gitpython从3.1.57提升到3.1.58
* 修复（网络）：允许 https://github.com/langgenius/dify/pull/40403 中的 @hjlarry 在试用应用程序中无限制地输入文本
* 修复(web): 在 https://github.com/langgenius/dify/pull/40334 中暴露 @lyzno1 的聊天变量提示状态
* 文档(web): 在 https://github.com/langgenius/dify/pull/40398 中添加 @lyzno1 的 Next.js 代理规则
* 琐事：加强教育验证并暂停 @iamjoel 在 https://github.com/langgenius/dify/pull/40402 的折扣访问
* 修复（web）：https://github.com/langgenius/dify/pull/40300 中 @lyzno1 命名 MCP 标头删除操作
* 修复(web): 在 https://github.com/langgenius/dify/pull/40304 中通过 @lyzno1 命名外部 API 卡操作
* 修复(web): https://github.com/langgenius/dify/pull/40297 中 @lyzno1 的名称秘密密钥删除操作
* 修复（web）：使用https://github.com/langgenius/dify/pull/40274中@lyzno1附近的工作流程调试按钮
* 修复（web）：https://github.com/langgenius/dify/pull/40260 中@lyzno1 命名端点卡操作
* 修复（网络）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40200 中制作建议问题本机按钮
* 重构(web): 迁移webapp密码字段以通过@lyzno1在https://github.com/langgenius/dify/pull/40223中修改ui
* 修复（web）：将 webapp 密码可见性操作命名为 https://github.com/langgenius/dify/pull/40225 中的 @lyzno1
* 重构(api)：在https://github.com/langgenius/dify/pull/40053中提取@hjlarry探索横幅查询服务
* 测试：https://github.com/langgenius/dify/pull/40080 中的 @asukaminato0721 将 RAG 索引会话迁移到 SQLite
* 重构(api)：通过https://github.com/langgenius/dify/pull/40058中的@41tair将ping和版本端点合并到系统中
* 测试：通过https://github.com/langgenius/dify/pull/40084中的@asukaminato0721将核心应用程序会话迁移到SQLite
* feat: 在https://github.com/langgenius/dify/pull/36163中添加@zyqzyq工具插件参数类型日期和日期选择器
* 修复：在 https://github.com/langgenius/dify/pull/40433 中@iamjoel 扩大大型显示器上的代理编排聊天
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/40435 中与 en-US 同步翻译
* 文档（网络）：澄清 @lyzno1 在 https://github.com/langgenius/dify/pull/40426 中的引用突变所有权
* 修复（web）：在https://github.com/langgenius/dify/pull/40427中@lyzno1将共享引用更新保留在渲染之外
* 重构（工作流程）：通过https://github.com/langgenius/dify/pull/40447中的@linw1995对齐独立节点执行层
* 修复（web）：在https://github.com/langgenius/dify/pull/40428中@lyzno1将工作流程参考更新保留在渲染之外
* 杂务：在 https://github.com/langgenius/dify/pull/40444 中抑制 @tusharmotwani1718 的 Pyrefly 必要转换
* 修复（docker）：对https://github.com/langgenius/dify/pull/39155中@kanson1996的所有nginx上游使用动态DNS解析
* 修复（web）：在 https://github.com/langgenius/dify/pull/40429 中 @lyzno1 保持代理引用更新不渲染
* 修复：_multiple_retrieve_thread 在 https://github.com/langgenius/dify/pull/40466 中@fatelei 不会快速失败
*测试：在https://github.com/langgenius/dify/pull/40093中@asukaminato0721在rag管道覆盖中使用sqlite会话
* 测试：https://github.com/langgenius/dify/pull/40091 中的 @asukaminato0721 将数据集索引任务会话迁移到 SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40088中的@asukaminato0721将应用程序服务会话迁移到SQLite
* 修复：https://github.com/langgenius/dify/pull/40478 中 @iamjoel 将沙箱文件拆分为已保存选项卡和临时选项卡
* 测试：https://github.com/langgenius/dify/pull/40085 中的 @asukaminato0721 将核心 RAG 会话迁移到 SQLite
* 测试：https://github.com/langgenius/dify/pull/40090 中的 @asukaminato0721 将保留和任务会话迁移到 SQLite
* 修复：@iamjoel 在 https://github.com/langgenius/dify/pull/40486 中显示代理运行超时的持久 toast
* 修复（web）：在https://github.com/langgenius/dify/pull/40489中@lyzno1更新历史记录后保留工作流程画布
* 重构(api)：在https://github.com/langgenius/dify/pull/40142中整合@41tair的部署版本处理
* 重构（web）：通过https://github.com/langgenius/dify/pull/40467中的@lyzno1从查询缓存中读取应用程序配置文件
* 杂务：由 @wylswz 在 https://github.com/langgenius/dify/pull/40409 中对 CVE 进行凹凸加密、pypdf、h2 修复
* 修复（网络）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40492 中使旧版主页重定向永久化
* 修复：为https://github.com/langgenius/dify/pull/40408中的@zrh805添加内置音频提供程序及其工具的zh_Hans标签
* 测试：通过https://github.com/langgenius/dify/pull/40083中的@asukaminato0721将控制器会话迁移到SQLite
* 重构（web）：通过https://github.com/langgenius/dify/pull/40468中的@lyzno1从查询缓存中读取数据集配置文件
* 测试：通过 https://github.com/langgenius/dify/pull/40089 中的 @asukaminato0721 将片段和向量会话迁移到 SQLite
* 重构（web）：通过https://github.com/langgenius/dify/pull/40469中的@lyzno1从查询缓存中读取工作流程配置文件
* 修复：通过 @iamjoel 在 https://github.com/langgenius/dify/pull/40496 中改进代理工作目录选项卡标签和工具提示
* 重构（web）：将教育验证移至https://github.com/langgenius/dify/pull/40493中@lyzno1的专用路线
* 重构（web）：通过https://github.com/langgenius/dify/pull/40470中的@lyzno1从查询缓存中读取帐户配置文件
* 杂务：通过 https://github.com/langgenius/dify/pull/40480 中的 @typenoob 增加 qdrant 容器的 nofile ulimit
* 重构（web）：通过https://github.com/langgenius/dify/pull/40471中的@lyzno1从查询缓存中读取插件配置文件
* 重构（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40500 中调整教育自动完成异步行为
* 修复（api）：通过https://github.com/langgenius/dify/pull/40149中的@WH-2099将数据集操作绑定到所有者
* 壮举：@WTW0313 在 https://github.com/langgenius/dify/pull/39829 中部署应用程序 v2
* 重构（web）：https://github.com/langgenius/dify/pull/40472 中 @lyzno1 的配置文件查询的同步幅度
* 重构（web）：从 https://github.com/langgenius/dify/pull/40473 中 @lyzno1 的配置文件查询同步 zendesk
* 壮举：在 https://github.com/langgenius/dify/pull/40494 中添加 @zyssyz123 的 trunstile
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/40546 中与 en-US 同步翻译
* 修复（网络）：通过 https://github.com/langgenius/dify/pull/40550 中的 @WTW0313 改进应用程序部署 v2 的可访问性
* 重构（web）：通过@lyzno1在https://github.com/langgenius/dify/pull/40474中删除配置文件引导原子层
* 修复（agent-v2）：停止从https://github.com/langgenius/dify/pull/40179中@chelsealong的代理聊天中删除非视觉附件
* feat(web)：为https://github.com/langgenius/dify/pull/40566中的@CyberPU2099添加知识嵌入模型的多模态检索指导
* 杂务：为 https://github.com/langgenius/dify/pull/40569 中的 @iamjoel 添加 Turnstile 站点密钥的 Docker 配置
*修复（api）：通过https://github.com/langgenius/dify/pull/40503中的@WH-2099将剩余的RAG资源绑定到所有者
*修复：通过https://github.com/langgenius/dify/pull/40564中的@zhangx1n将应用程序部署限制为显式企业权限
* 测试：通过https://github.com/langgenius/dify/pull/40568中的@asukaminato0721将代理应用程序沙箱会话和ORM模型迁移到SQLite
* 修复（web）：恢复https://github.com/langgenius/dify/pull/40583中@crazywola的应用程序删除自动填充和知识范围标签
* 修复（网页）：在 https://github.com/langgenius/dify/pull/40581 中 @lyzno1 在 SSR 期间渲染工作空间计划徽章
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/40573 中与 en-US 同步翻译
* 测试(web): 删除 https://github.com/langgenius/dify/pull/40592 中 @lyzno1 的脆弱发布者锁定测试
* 重构(api)：通过https://github.com/langgenius/dify/pull/40046中的@41tair将初始化验证提取到分层应用程序服务中
* 重构(web)：删除 https://github.com/langgenius/dify/pull/40593 中 @WTW0313 已弃用的部署页面
*修复：修复https://github.com/langgenius/dify/pull/40599中@fatelei创建的文档丢失rbac操作的数据集
* 修复（rbac）：当数据集向工作开放时授予成员策略......由https://github.com/langgenius/dify/pull/39735中的@BenjaminX
*修复：通过https://github.com/langgenius/dify/pull/40516中的@WH-2099强制执行API密钥列表权限
* 修复：@linw1995 在 https://github.com/langgenius/dify/pull/40589 中计量托管 LLM 调用
* feat(ui): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40616 中添加图标按钮原语
* 重构（ui）：在https://github.com/langgenius/dify/pull/40617中采用@lyzno1关闭控件中的图标按钮
* 重构(web): 迁移https://github.com/langgenius/dify/pull/40620中@lyzno1的共享图标命令
* 重构(web)：https://github.com/langgenius/dify/pull/40621中@lyzno1迁移域图标命令
* feat(ui)：在 https://github.com/langgenius/dify/pull/40622 中公开 @lyzno1 的基本切换组合
* 测试：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/40669 中将 API 工作流程暂停 ORM 模型迁移到真实实体
* 修复：在 https://github.com/langgenius/dify/pull/40679 中隐藏来自 @iamjoel Agent V2 配置的知识检索
* 测试：将残余 ORM 模型替身迁移到 https://github.com/langgenius/dify/pull/40666 中 @asukaminato0721 的真实映射
* 测试：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/40668 中迁移残差数据集和归档 ORM 模型
* 测试：通过https://github.com/langgenius/dify/pull/40665中的@asukaminato0721将残留会话工厂迁移到共享SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40664中的@asukaminato0721将工作流变量ORM模型迁移到真实实体
* 修复（操作）：在 https://github.com/langgenius/dify/pull/40584 中保留 @GareArc 自托管 LangSmith 和 Weave 端点的路径
*修复：更新https://github.com/langgenius/dify/pull/40682中@iamjoel复制的代理高级设置
* 修复（ci）：始终在 https://github.com/langgenius/dify/pull/40684 中报告 @lyzno1 所需的样式检查
*修复（e2e）：跳过https://github.com/langgenius/dify/pull/40691中@iamjoel隐藏的代理知识E2E场景
* 测试：通过 @asukaminato0721 将 OpenTelemetry ORM 身份迁移到 https://github.com/langgenius/dify/pull/40663 中的真实模型
* 测试：通过@asukaminato0721在https://github.com/langgenius/dify/pull/40662中将RAG数据集ORM合约迁移到真实模型
*测试：通过@asukaminato0721在https://github.com/langgenius/dify/pull/40661中将剩余控制器ORM身份迁移到真实模型
* 测试：通过 https://github.com/langgenius/dify/pull/40659 中的 @asukaminato0721 将 reranker 上传文件会话和 ORM 模型迁移到 SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40660中的@asukaminato0721将应用程序运行器事务会话和ORM模型迁移到SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40658中的@asukaminato0721将工作流工具文件ORM模型迁移到真实实体
* 测试：通过@asukaminato0721在https://github.com/langgenius/dify/pull/40657中将工作流节点跟踪ORM模型迁移到真实实体
* 测试：https://github.com/langgenius/dify/pull/40656 中的 @asukaminato0721 将会话生命周期会话和 ORM 模型迁移到 SQLite
*修复（api）：https://github.com/langgenius/dify/pull/39813中的@zyssyz123将响应侦听器与执行生命周期解耦
*修复（代理）：在https://github.com/langgenius/dify/pull/40697中通过@BeautyyuYanli传播资源收集失败
*修复（ci）：防止https://github.com/langgenius/dify/pull/40699中@lyzno1取代的运行出现错误故障
* 重构：https://github.com/langgenius/dify/pull/40696中@linw1995通过管理器解析汇总模型
* 杂务：从 https://github.com/langgenius/dify/pull/40701 中的 @iamjoel 从代理环境编辑器中删除范围选择
* 重构(web): 通过https://github.com/langgenius/dify/pull/40624中的@lyzno1迁移语义图标控件
* 重构(web)：在https://github.com/langgenius/dify/pull/40646中通过@lyzno1迁移应用程序图标命令
* 重构(web): https://github.com/langgenius/dify/pull/40647中@lyzno1迁移数据集图标命令
* 重构(web): 在https://github.com/langgenius/dify/pull/40648中通过@lyzno1迁移插件图标命令
* 重构(web)：通过@lyzno1在https://github.com/langgenius/dify/pull/40649中迁移工作流图标命令
* 重构(web): 迁移https://github.com/langgenius/dify/pull/40650中@lyzno1触发的帮助菜单图标
* 重构(web)：删除 https://github.com/langgenius/dify/pull/40651 中 @lyzno1 的遗留操作按钮引用
* 重构(web)：通过@lyzno1迁移https://github.com/langgenius/dify/pull/40652中的应用卡图标控件
* 修复（代理）：通过 @BeautyyuYanli 在 https://github.com/langgenius/dify/pull/40619 中标准化插件提供商身份
* 修复：防止 @iamjoel 在 https://github.com/langgenius/dify/pull/40709 中进行跨选项卡聊天对话切换
* 修复（dify-ui）：通过@lyzno1在https://github.com/langgenius/dify/pull/40723中细化分页导航语义
* refactor(ui): 在https://github.com/langgenius/dify/pull/40726中通过@lyzno1强制执行单选分段控制
* 重构：https://github.com/langgenius/dify/pull/40722 中@linw1995 概括托管模型配额生命周期
*修复（代理）：通过https://github.com/langgenius/dify/pull/40613中的@zyssyz123通过API计量内部LLM调用
*修复（api）：除了https://github.com/langgenius/dify/pull/40738中@Harsh23Kashyap的每个PEP 3134块之外，将原始异常链接到13个中
*修复（api）：通过https://github.com/langgenius/dify/pull/40742中的@WH-2099删除不安全的基岩测试端点
* 重构（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40732 中澄清模型选择器触发器所有权
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/40753中的@GareArc将wandb撞到0.28.2（go-git、grpc、x/text、Go stdlib CVE）
* feat(web)：将市场嵌入https://github.com/langgenius/dify/pull/40744中@Jingyi-Dify的集成类别中
* 重构：通过 @linw1995 在 https://github.com/langgenius/dify/pull/40756 中通过管理器解析完成模型
* 修复：通过 @iamjoel 在 https://github.com/langgenius/dify/pull/40396 中添加跨页面语义文档标题
* 文档（网络）：在 https://github.com/langgenius/dify/pull/40758 中整合 @lyzno1 的维护者指导
* 修复（api）：通过 @agarwalpranav0711 在 https://github.com/langgenius/dify/pull/40743 中对数据集 API 密钥 GET 端点（#40740）强制执行编辑和 RBAC 权限
*修复（代理）：在https://github.com/langgenius/dify/pull/40737中通过@WH-2099验证代理控制平面
* 杂务：https://github.com/langgenius/dify/pull/40762中@lyzno1将Vite+升级到0.2.9
* 修复（web）：跳过Docker中的生命周期脚本，由@lyzno1安装在https://github.com/langgenius/dify/pull/40763中
* 测试：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/40655 中迁移应用程序服务帐户并将失败提交到真实的 ORM
* 测试：通过https://github.com/langgenius/dify/pull/40643中的@asukaminato0721将注释控制器ORM模型迁移到真实实体
* 测试：https://github.com/langgenius/dify/pull/40644中@asukaminato0721将负载均衡账户ORM模型迁移到真实实体
* 测试：通过@asukaminato0721在https://github.com/langgenius/dify/pull/40645中将过期的日志工作流ORM模型迁移到真实实体
* 测试：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/40654 中将代理驱动最终用户 ORM 模型迁移到真实实体
* 测试：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/40642 中将跟踪工作流运行 ORM 模型迁移到真实实体
* 测试：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/40637 中迁移 OpenAPI 和工具文件 ORM 实体
* 测试：通过https://github.com/langgenius/dify/pull/40639中的@asukaminato0721将Web控制器身份ORM模型迁移到真实实体
*壮举（工作流程生成器）：更喜欢@crazywola在https://github.com/langgenius/dify/pull/40611中安装的工具
* 测试：通过@asukaminato0721在https://github.com/langgenius/dify/pull/40634中将工作流事件ORM模型迁移到真实实体
* 杂务：通过 https://github.com/langgenius/dify/pull/40764 中的 @lyzno1 更新工作区依赖项
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/40736 中的 @dependabot[bot] 将 /dify-agent 中的 pydantic-ai-slim 从 1.102.0 提升到 1.106.0
* 杂务：通过 @iamjoel 在 https://github.com/langgenius/dify/pull/40760 中重新打开教育申请流程
* 修复（dify-agent）：通过 @BeautyyuYanli 在 https://github.com/langgenius/dify/pull/40623 中澄清 shell 工作空间
* 修复：通过 @linw1995 在 https://github.com/langgenius/dify/pull/40757 中处理 webscraper 中的长文本 URL
* 修复：在 https://github.com/langgenius/dify/pull/37211 中保留 @myshkin451 的文件预览内容类型
*修复（dify-ui）：通过@lyzno1在https://github.com/langgenius/dify/pull/40769中细化分段控制焦点反馈
* feat(dify-agent)：通过 @BeautyyuYanli 在 https://github.com/langgenius/dify/pull/40641 中扩展并强制执行代理运行限制
* 测试：https://github.com/langgenius/dify/pull/40627 中的 @asukaminato0721 将帐户租户 ORM 替身迁移到 SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40633中的@asukaminato0721将剩余命名空间ORM实体迁移到真实模型
* 测试：通过https://github.com/langgenius/dify/pull/40626中的@asukaminato0721将控制器身份ORM模型迁移到SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40628中的@asukaminato0721将工作流工具用户迁移到SQLite ORM模型
*测试：通过@asukaminato0721在https://github.com/langgenius/dify/pull/40629中将RAG残差实体迁移到真实的ORM模型
* 修复（代理）：@zyssyz123 在 https://github.com/langgenius/dify/pull/40771 中重复创建时返回冲突
* 修复：https://github.com/langgenius/dify/pull/40775 中 @iamjoel 恢复页面后保留成功的上次运行状态
* 修复(ci)：在https://github.com/langgenius/dify/pull/40774中通过@lyzno1将分阶段检查与Vite+对齐
* 重构（api）：在 https://github.com/langgenius/dify/pull/40462 中提取 @hjlarry 已安装的应用程序定义查询
* 重构（api）：在https://github.com/langgenius/dify/pull/40463中重用@hjlarry在Web和服务APIs中的应用程序定义查询
* 重构（api）：在https://github.com/langgenius/dify/pull/40465中重用@hjlarry对应用程序参数的应用程序定义查询
* 重构（api）：在https://github.com/langgenius/dify/pull/40476中重用@hjlarry对服务API信息的应用定义查询
*修复（api）：通过https://github.com/langgenius/dify/pull/40745中的@WH-2099强制RAG草案变量访问边界
* 修复：在 https://github.com/langgenius/dify/pull/40784 中显示 @iamjoel 的代理运行限制错误的准确副本
* feat(oauth)：通过https://github.com/langgenius/dify/pull/40783中的@lin-snow从oauth_provider_apps.auto_authorize驱动静默授权
*修复（api）：保护https://github.com/langgenius/dify/pull/40786中@WH-2099的自定义OAuth client删除
* 杂务：在 https://github.com/langgenius/dify/pull/40787 中 @ddddajie 在数据集文档操作中注入模型的 dep 注入
*修复（api）：将SSRF阻止的错误消息指向https://github.com/langgenius/dify/pull/40605中@chelsealong的正确dify问题
* 测试（api）：通过https://github.com/langgenius/dify/pull/39895中的@AlexMultiAgent使会话装饰器路径断言与平台无关
* 重构：通过 https://github.com/langgenius/dify/pull/40380 中的 @mahbubsouad 将映射类型注释添加到模型字段 (#40373)
*修复（api）：通过https://github.com/langgenius/dify/pull/40790中的@WH-2099保护工作区凭证突变
*修复（api）：保护https://github.com/langgenius/dify/pull/40794中@WH-2099读取的代理沙箱
*修复：在https://github.com/langgenius/dify/pull/40792中被@zyssyz123删除时回收对话资源
* 修复：在 https://github.com/langgenius/dify/pull/40801 中将核心代理、存储和向量后端中的 bare except 替换为 except Exception，由@TrueFurina 替换
* 重构（控制器/网络）：https://github.com/langgenius/dify/pull/40796 中的 @a-yeyang 使用 @model_validate 进行 dep-inject 有效负载
* 修复：https://github.com/langgenius/dify/pull/40420 中的@zrh805 修复：除存储中的存在（）之外的窄裸线到 ClientError
* 修复（扩展）：https://github.com/langgenius/dify/pull/40810 中的 @Harsh23Kashyap 根据 PEP 3134 链接 APIBasedExtensionRequestor 中的原始异常
* 测试：通过@asukaminato0721在https://github.com/langgenius/dify/pull/40625中将残留用户ORM替身迁移到真实模型
* 测试：通过https://github.com/langgenius/dify/pull/40632中的@asukaminato0721将文件控制器ORM模型迁移到真实实体
* 测试：通过https://github.com/langgenius/dify/pull/40602中的@asukaminato0721将代理表面会话和ORM模型迁移到SQLite
* 测试：https://github.com/langgenius/dify/pull/40604 中的 @asukaminato0721 将注释安全会话和 ORM 模型迁移到 SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40608中的@asukaminato0721将RAG处理器残差迁移到SQLite ORM模型
* 文档：修复 pipeline_generator 文档字符串以引用管道而不是 https://github.com/langgenius/dify/pull/40813 中 @mesrop2008 的 app_model
* 测试：通过https://github.com/langgenius/dify/pull/40600中的@asukaminato0721将代理控制器会话和ORM模型迁移到SQLite
* 测试：https://github.com/langgenius/dify/pull/40606 中的 @asukaminato0721 将剩余控制器会话和 ORM 模型迁移到 SQLite
*修复（api）：在https://github.com/langgenius/dify/pull/40776中通过@CodeMak1r-zy支持audio/x-m4a进行ASR
* 修复(web): 通过 https://github.com/langgenius/dify/pull/40826 中的 @lyzno1 对齐组合框交互语义
* feat(plugin-auth)：https://github.com/langgenius/dify/pull/39840 中 @ForeignKeyCN 的 OAuth 凭证可见性选择器
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/40834 中进行 2 次更新来提高 github-actions-dependencies 组
* 重构(controllers/web): dep-inject登录和忘记密码有效负载(#36659) by @weike-zhang in https://github.com/langgenius/dify/pull/40856
* feat(ci)：在https://github.com/langgenius/dify/pull/40858中@MRZHUH推送的发布标签上同步E2B模板
* 修复(web): 让多模式引导高度适合https://github.com/langgenius/dify/pull/40846中@CyberPU2099的内容
*修复（网络）：更新https://github.com/langgenius/dify/pull/40863中@lyzno1的代理模型请求限制副本
* 测试（e2e）：通过@lyzno1在https://github.com/langgenius/dify/pull/40862中对齐代理模型选择器定位器
*修复（工作流程）：通过@zyssyz123在https://github.com/langgenius/dify/pull/40859中保留历史代理节点兼容性
* 修复(dify-agent): 需要https://github.com/langgenius/dify/pull/40871中的@BeautyyuYanli进行E2B流量认证
* 壮举：通过 @linw1995 在 https://github.com/langgenius/dify/pull/40875 中使用 client IP 创建帐户
* feat(dify-agent)：在https://github.com/langgenius/dify/pull/40872中添加@BeautyyuYanli的上下文感知历史压缩
* 修复（dify-agent）：保留 @BeautyyuYanli 在 https://github.com/langgenius/dify/pull/40876 中失败和取消的运行的快照
* 壮举：在 https://github.com/langgenius/dify/pull/40725 中由 @hjlarry 派遣新特工 Beta 资格检查
* 修复(dify-agent): 在 https://github.com/langgenius/dify/pull/40884 中通过 @BeautyyuYanli 强制执行短暂的 Agent Stub 授权
* feat(dify-agent)：在 https://github.com/langgenius/dify/pull/40883 中强制执行 @BeautyyuYanli 签名的上传大小限制
* 测试：通过https://github.com/langgenius/dify/pull/40528中的@asukaminato0721将控制台会话会话和ORM模型迁移到SQLite
* 测试：通过 https://github.com/langgenius/dify/pull/40529 中的 @asukaminato0721 将控制器身份验证包装器会话和 ORM 模型迁移到 SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40526中的@asukaminato0721将控制台应用程序MCP会话和ORM模型迁移到SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40527中的@asukaminato0721将控制台工作流控制器会话和ORM模型迁移到SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40519中的@asukaminato0721将服务API数据集文档会话和ORM模型迁移到SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40518中的@asukaminato0721将服务API数据集元数据会话和ORM模型迁移到SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40511中的@asukaminato0721将RAG管道会话和ORM模型迁移到SQLite
* 测试：https://github.com/langgenius/dify/pull/40513 中的 @asukaminato0721 将 RAG 索引会话和 ORM 模型迁移到 SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40847中的@asukaminato0721将配置输入与过程环境隔离
*修复：https://github.com/langgenius/dify/pull/40852中@BlessedWithLuck1105建议使用deepseek-v4-flash作为代理模式
* 重构（dify-ui）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40895 中公开自动完成弹出窗口解剖
* feat(dify-ui): 在https://github.com/langgenius/dify/pull/40890中添加@lyzno1的输入组组合
*修复（api）：修复https://github.com/langgenius/dify/pull/40901中@amogh-nagri-11的两个格式错误的记录器格式字符串
*修复（api）：在https://github.com/langgenius/dify/pull/40905中恢复由@mesrop2008暂停的工作流程时清除过时的取消信号
* 修复(ci): 在 https://github.com/langgenius/dify/pull/40909 中使用 @lyzno1 的 Playwright 默认 Ubuntu 镜像
* 修复(dify-agent): 在 https://github.com/langgenius/dify/pull/40891 中使用 @BeautyyuYanli 的 E2B 流量访问标头
*修复（dify-agent）：在https://github.com/langgenius/dify/pull/40896中隔离@BeautyyuYanli的取消意图观察者
* Chore(dify-agent)：在https://github.com/langgenius/dify/pull/40892中通过@BeautyyuYanli禁用E2B模板的Landlock
* 修复（api）：https://github.com/langgenius/dify/pull/40807 中的 @Harsh23Kashyap 将两个 api/core/ 出站超时中的连接阶段绑定到 5.0 秒
* 重构(web)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40912 中标准化应用程序日志搜索输入
* 重构(web)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40913 中标准化数据集搜索输入
* 重构(web)：通过@lyzno1在https://github.com/langgenius/dify/pull/40914中标准化标签搜索输入
* 测试（dify-ui）：稳定https://github.com/langgenius/dify/pull/40916中@lyzno1的下拉菜单故事
* 修复：接受 https://github.com/langgenius/dify/pull/38265 中 @Zenine 的遗留插件守护程序列表响应
* 重构(api)：通过https://github.com/langgenius/dify/pull/40452中的@41tair解耦数据源API密钥验证流程
* 重构(api)：在https://github.com/langgenius/dify/pull/40421中提取@41tair的账户激活申请服务
* 修复：在 https://github.com/langgenius/dify/pull/40917 中保留 @zyssyz123 代理工具生成的文件输出
* 重构(web): 在 https://github.com/langgenius/dify/pull/40922 中通过 @lyzno1 组合输入组搜索前缀
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/40904 中的 @dependabot[bot] 将 sqlparse 从 /api 中的 0.5.4 提升到 0.6.0
* 重构（模型）：https://github.com/langgenius/dify/pull/40797 中 @a-yeyang 对剩余 @property 访问器的 dep-inject 会话
* 重构(web)：通过https://github.com/langgenius/dify/pull/40923中的@lyzno1将重试单元迁移到数字字段
* 重构(web)：迁移@lyzno1在https://github.com/langgenius/dify/pull/40924中的可清除搜索输入
* 重构(web): 删除https://github.com/langgenius/dify/pull/40928中@lyzno1遗留的标签组件
*修复（ci）：在https://github.com/langgenius/dify/pull/40934中通过@lyzno1对齐Oxlint抑制格式
* 重构（web）：删除https://github.com/langgenius/dify/pull/40929中@lyzno1遗留的嵌入式API文档
* 测试：在 https://github.com/langgenius/dify/pull/40848 中 @asukaminato0721 在服务覆盖范围中使用类型化配置覆盖
* 测试：保留 @asukaminato0721 在 https://github.com/langgenius/dify/pull/40850 中键入的集成配置覆盖
* 测试：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/40853 中集中企业配置覆盖
* 测试：https://github.com/langgenius/dify/pull/40854 中的 @asukaminato0721 覆盖范围插件和数据源配置
* 测试：消除 https://github.com/langgenius/dify/pull/40855 中 @asukaminato0721 剩余的整个配置模拟
* 测试：通过https://github.com/langgenius/dify/pull/40530中的@asukaminato0721将应用程序模型会话和ORM模型迁移到SQLite
* 测试：https://github.com/langgenius/dify/pull/40531中@asukaminato0721将残差模型会话和ORM模型迁移到SQLite
* 测试：https://github.com/langgenius/dify/pull/40533 中的 @asukaminato0721 将服务边界会话和 ORM 模型迁移到 SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40574中的@asukaminato0721将遥测和核心实体ORM模型迁移到SQLite
* 测试：https://github.com/langgenius/dify/pull/40576中@asukaminato0721将剩余服务和任务ORM模型迁移到SQLite
* 测试：https://github.com/langgenius/dify/pull/40579 中的 @asukaminato0721 将剩余控制器会话和 ORM 模型迁移到 SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40587中的@asukaminato0721将代理运行时会话和ORM模型迁移到SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40590中的@asukaminato0721将应用程序运行时会话和ORM模型迁移到SQLite
*修复（网络）：门禁系统通过https://github.com/langgenius/dify/pull/40939中的@lyzno1连接提供请求
* 测试：https://github.com/langgenius/dify/pull/40534 中的 @asukaminato0721 将数据集服务会话和 ORM 模型迁移到 SQLite
* 修复（代理）：保留 @zyssyz123 在 https://github.com/langgenius/dify/pull/40937 中不完整运行的用法
* 杂务(web)：通过@lyzno1在https://github.com/langgenius/dify/pull/40938中对齐浏览器支持目标
* 修复(web): 删除https://github.com/langgenius/dify/pull/40956中@WTW0313的only-me资源访问选项
* 重构：通过 @akamabu 在 https://github.com/langgenius/dify/pull/40822 中清除不必要的类型转换（bool/str no-op 包装器）
* 修复：优化接入点复制并删除 https://github.com/langgenius/dify/pull/40886 中 @RiskeyL 的取消部署状态警告
* 重构(web)：通过https://github.com/langgenius/dify/pull/40951中的@lyzno1简化去抖过滤器状态
* 重构(web): 由 @lyzno1 在 https://github.com/langgenius/dify/pull/40952 中编写重置密码字段
* 重构(web): 迁移 https://github.com/langgenius/dify/pull/40953 中 @lyzno1 的 HTTP 超时输入
* 重构(agent): 删除https://github.com/langgenius/dify/pull/40887中@BeautyyuYanli的Agent Drive
* 修复（api）：通过 @agarwalpranav0711 在 https://github.com/langgenius/dify/pull/40900 中对模型提供者凭证 GET 端点强制执行编辑和 RBAC 权限（#40899）
* 修复（auth）：通过 https://github.com/langgenius/dify/pull/40960 中的 @zyssyz123 强化电子邮件代码登录验证
* 重构（api）：在https://github.com/langgenius/dify/pull/40795中重用@hjlarry对服务API站点的应用程序定义查询
*修复（代理）：解决https://github.com/langgenius/dify/pull/40963中@zyssyz123从运行时配置中提出的建议问题
* 修复(ui): 稳定 https://github.com/langgenius/dify/pull/40970 中 @lyzno1 的 toast 堆栈交互
* 重构(api)：在https://github.com/langgenius/dify/pull/40482中提取@hjlarry的Web应用程序访问查询
* 重构（api）：https://github.com/langgenius/dify/pull/40555 中 @hjlarry 的快照探索横幅功能标志
*修复（dify-agent）：在https://github.com/langgenius/dify/pull/40972中保留@BeautyyuYanli中断的运行历史记录
* perf(dify-agent)：并行化https://github.com/langgenius/dify/pull/40973中@BeautyyuYanli拉取的Agent Stub配置
* 修复（网页）：防止 @lyzno1 在 https://github.com/langgenius/dify/pull/40977 中删除应用程序后出现工作流程错误
* 修复（ui）：在https://github.com/langgenius/dify/pull/40980中通过@lyzno1将toast滑动方向与视口对齐
* 重构（api）：在 https://github.com/langgenius/dify/pull/40984 中重用 @hjlarry 的 Web 应用程序访问权限查询
* 修复(ci)：在 https://github.com/langgenius/dify/pull/40986 中通过 @WH-2099 在 GitHub Ubuntu 上运行 Playwright E2E
* 修复（日志存储）：https://github.com/langgenius/dify/pull/40947 中的 @amogh-nagri-11 将工作流时间戳标准化为原始 UTC
* 修复（api）：在 https://github.com/langgenius/dify/pull/40989 中由 @linw1995 强制执行数据集文档所有权
* 重构(web)：通过@lyzno1迁移https://github.com/langgenius/dify/pull/40990中的注册电子邮件字段
* 重构(web)：通过 @lyzno1 迁移 https://github.com/langgenius/dify/pull/40991 中的注册密码字段
* 修复(web): 在https://github.com/langgenius/dify/pull/40994中通过@lyzno1删除代理后重定向
* ci(web)：通过 https://github.com/langgenius/dify/pull/40995 中的 @lyzno1 在 GitHub Ubuntu 上运行浏览器测试
* 重构(api): 在https://github.com/langgenius/dify/pull/40436中添加@41tair的账户资料申请服务
* 重构（api）：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/40949 中提取 Web 应用程序运行时引导程序
* 测试：https://github.com/langgenius/dify/pull/40536中@asukaminato0721将文档服务会话和ORM模型迁移到SQLite
* 测试：将 Explore 控制器会话和 ORM 模型迁移到 https://github.com/langgenius/dify/pull/40537 中的 @asukaminato0721 的 SQLite
* 测试：https://github.com/langgenius/dify/pull/40552 中的 @asukaminato0721 将媒体和执行服务会话以及 ORM 模型迁移到 SQLite
* 测试：https://github.com/langgenius/dify/pull/40567 中的 @asukaminato0721 将代码片段服务 ORM 模型迁移到 SQLite
* 重构(web)：通过 @lyzno1 迁移 https://github.com/langgenius/dify/pull/40992 中的安装帐户字段
* 重构：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/40997 中整合前端浏览器测试基础设施
* 修复(web)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/41002 中澄清代理删除后果
* 杂务：@hyoban 在 https://github.com/langgenius/dify/pull/41008 中内联自定义 ESLint 规则
* 修复（计费）：删除 https://github.com/langgenius/dify/pull/41009 中 @lyzno1 的误导性税务保证
*修复（片段）：在https://github.com/langgenius/dify/pull/41003中实现@chelsealong发布的片段工作流程版本的删除
* 修复（代理）：由 @BeautyyuYanli 在 https://github.com/langgenius/dify/pull/40888 中完成所有权感知删除生命周期
*修复（api）：处理https://github.com/langgenius/dify/pull/41004中@linw1995暂停的电子邮件域
* 重构(api)：在https://github.com/langgenius/dify/pull/40207中提取@hjlarry推荐的应用查询服务
* 修复(snippet): 支持https://github.com/langgenius/dify/pull/41012中@FFXN导出的snippet历史版本
* 修复（api）：通过 @agarwalpranav0711 在 https://github.com/langgenius/dify/pull/40945 中对工具 OAuth 自定义 client GET 端点强制执行管理员和 RBAC 权限（#40944）
* 修复（dify-agent）：通过@BeautyyuYanli在https://github.com/langgenius/dify/pull/41021中调整本地沙箱主路径
* 修复(dify-agent): 通过 @BeautyyuYanli 在 https://github.com/langgenius/dify/pull/39997 中添加可靠的 shellctl stdio 模式
* 重构（dify-agent）：https://github.com/langgenius/dify/pull/41023 中@BeautyyuYanli 使用工作区作为 shell 临时空间
* 修复（代理）：清理https://github.com/langgenius/dify/pull/41024中@BeautyyuYanli遗留的代理灵魂文件
* 修复（api）：将缺少的管理和 RBAC 权限装饰器添加到 https://github.com/langgenius/dify/pull/40962 中的 @FasihUrRahman 的模型凭证 GET 端点
* 重构(api)：在https://github.com/langgenius/dify/pull/40843中通过@fszcd解耦控制台标签管理
* 重构（api）：隔离 @hjlarry 在 https://github.com/langgenius/dify/pull/40208 中写入的试用应用程序使用情况
* 重构（api）：在 https://github.com/langgenius/dify/pull/40257 中解耦 @hjlarry 推荐的应用程序运行时准入
* 重构（api）：用 https://github.com/langgenius/dify/pull/40395 中的 @hjlarry 替换遗留的推荐应用程序检索堆栈
* feat: 支持https://github.com/langgenius/dify/pull/39973中@Zenine的ODT文档提取
* 测试：https://github.com/langgenius/dify/pull/40857 中的 @asukaminato0721 集中类型化运行时配置覆盖
* 重构(web)：迁移https://github.com/langgenius/dify/pull/41028中@lyzno1输入的对话重命名
* 重构(web): 迁移https://github.com/langgenius/dify/pull/41029中@lyzno1输入的文档重命名
* 重构(web): 迁移https://github.com/langgenius/dify/pull/41030中@lyzno1输入的空数据集
* 修复：在 https://github.com/langgenius/dify/pull/39129 中 @hyhyf 在聊天管道错误事件上添加 MESSAGE_TRACE 任务
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/39249 中的 1 个目录中，将 google-cloud-aiplatform 从 1.160.0 提升到 google 组中 /api 中的 1.164.0
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/40393 中的 @dependabot[bot] 进行 2 次更新，将存储组跨越 1 个目录
* 修复：当 rbac 启用为 true 时，https://github.com/langgenius/dify/pull/41022 中的 @fatelei 没有 check_dataset_permission
* 修复（代理）：通过@zhaohao1004在https://github.com/langgenius/dify/pull/41027中调整绑定文件上传超时
*修复（api）：通过https://github.com/langgenius/dify/pull/40893中的@WH-2099强制执行应用程序范围的间接资源访问
* 修复（网络）：在 https://github.com/langgenius/dify/pull/40957 中通过 @hyoban 路由企业文档链接
* 修复（api）：对数据源凭证强制执行编辑和 RBAC 权限 …修复（api）：对 https://github.com/langgenius/dify/pull/41041 中的@agarwalpranav0711 对数据源凭证 GET 端点强制执行编辑和 RBAC 权限（#41040）
* 修复（插件）：通过 @WH-2099 在 https://github.com/langgenius/dify/pull/40897 中保护端点列表
* docs(dify-ui): 通过@lyzno1在https://github.com/langgenius/dify/pull/41044中建立文档层次结构
* 重构（dify-ui）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/41045 中公开滑块解剖结构
*修复（api）：防止@zl86790在https://github.com/langgenius/dify/pull/40964中删除Redis流中的workflow_started事件
* 重构（api）：将帐户访问权限移至https://github.com/langgenius/dify/pull/40437中的@41tair应用程序服务后面
* 测试：https://github.com/langgenius/dify/pull/40504中@asukaminato0721将注释会话和ORM模型迁移到SQLite
* 测试：通过@asukaminato0721在https://github.com/langgenius/dify/pull/40724中添加tmp_path类型
* 测试：https://github.com/langgenius/dify/pull/40640 中的 @asukaminato0721 将向量空间准入会话和 ORM 模型迁移到 SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40638中的@asukaminato0721将代理应用程序会话存储迁移到SQLite ORM
* 测试：通过https://github.com/langgenius/dify/pull/40538中的@asukaminato0721将剩余的控制器会话和ORM模型迁移到SQLite
* 测试：通过https://github.com/langgenius/dify/pull/40559中的@asukaminato0721将控制台应用程序会话和ORM模型迁移到SQLite
* 修复：合并系统消息并将它们放在第一位以符合 Qwen/v… by @potoior in https://github.com/langgenius/dify/pull/39136
* 测试：通过 https://github.com/langgenius/dify/pull/40572 中的 @asukaminato0721 将身份验证和访问控制器 ORM 模型迁移到 SQLite
* 重构(web)：通过https://github.com/langgenius/dify/pull/41050中的@lyzno1迁移人工输入超时字段
* 重构(web): 迁移https://github.com/langgenius/dify/pull/41051中@lyzno1输入的订阅确认
* 重构(web)：通过https://github.com/langgenius/dify/pull/41052中的@lyzno1迁移外部API输入字段
* 测试：https://github.com/langgenius/dify/pull/40570中@asukaminato0721将控制台代理技能ORM模型迁移到SQLite
* 测试：https://github.com/langgenius/dify/pull/40515 中的 @asukaminato0721 将控制台数据集段会话和 ORM 模型迁移到 SQLite
* 测试：通过 https://github.com/langgenius/dify/pull/40580 中的 @asukaminato0721 将剩余应用程序生成器 ORM 模型迁移到 SQLite
* 重构(api)：通过https://github.com/langgenius/dify/pull/40438中的@41tair将帐户生命周期移至应用程序服务中
* 文档：在 https://github.com/langgenius/dify/pull/41026 中添加 @yangchuansheng 的 Sealos 部署选项
* 重构(api)：通过@41tair在https://github.com/langgenius/dify/pull/40439中提取更改电子邮件状态机
* 重构(api): 在https://github.com/langgenius/dify/pull/40440中通过@41tair完成帐户控制器应用程序边界
* 修复(web): 阻止 https://github.com/langgenius/dify/pull/41060 中 @lyzno1 的 Safari clipping 游览恢复提示
* 修复：添加缺失的指标并增强 @wylswz 在 https://github.com/langgenius/dify/pull/40935 中的输入
* 重构(dify-ui): 在https://github.com/langgenius/dify/pull/41064中通过@lyzno1编写对话框关闭控件
* 修复(vdb): 添加 document_id 关键字映射并修复 https://github.com/langgenius/dify/pull/40400 中 @loulanyue 的 elasticsearch-ja 适配器中的 VectorType
* 修复(web): 防止登录页面内容在移动设备上溢出 by @gegemeimingzi in https://github.com/langgenius/dify/pull/40921
* 壮举：Enterprise Home Snapshot — https://github.com/langgenius/dify/pull/40996 中 @GareArc 的运行时端点和 dify-agent 适配器
* 修复（api）：将 exc_info=True 附加到 logger.warning 站点，这些站点会在 https://github.com/langgenius/dify/pull/41068 中删除 @mesrop2008 的回溯
* feat(trace)：通过 @Blackoutta 在 https://github.com/langgenius/dify/pull/39451 中添加提供者中立的统一跟踪
* 重构(agent)：通过@BeautyyuYanli在https://github.com/langgenius/dify/pull/41062中简化Agent v2输出合约
* 重构（dify-ui）：通过 @lyzno1 简化 https://github.com/langgenius/dify/pull/41069 中的弹出窗口内容 API
* 修复（api）：对数据源强制执行管理员和 RBAC 权限，通过 https://github.com/langgenius/dify/pull/41080 中的 @agarwalpranav0711 集成 GET 端点（#41079）
* 重构（dify-ui）：简化https://github.com/langgenius/dify/pull/41098中@lyzno1的覆盖内容APIs
* 修复（api）：在 https://github.com/langgenius/dify/pull/41100 中的 @agarwalpranav0711 对默认模型和提供者模型 GET 端点强制执行管理员和 RBAC 权限（#41099）
* 重构（dify-ui）：在https://github.com/langgenius/dify/pull/41104中通过@lyzno1重命名无线电系列入口点
* 修复（agent-v2）：防止 @lyzno1 在 https://github.com/langgenius/dify/pull/41105 中刷新工作流渲染循环
* 文档：修复 https://github.com/langgenius/dify/pull/41101 中 @simpleqt 本地化自述文件中的无效锚点和过时的 dify-agent 链接
* 重构(api)：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/41055 中标准化控制台计费门户错误
* 修复（代理）：通过 https://github.com/langgenius/dify/pull/40443 中的 @ump45nose 避免空基岩模式字段
* 重构(api)：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/41085 中标准化会话工厂接线
* 修复（工作流程）：https://github.com/langgenius/dify/pull/41090 中@leilei3167 在非流节点之间荣誉停止
* 重构(web)：在https://github.com/langgenius/dify/pull/41007中使用@XIIRUAN的共享会话工厂进行JWT解码
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/41120 中的 @dependabot[bot] 进行 4 次更新来提高 github-actions-dependencies 组
* 重构：通过 https://github.com/langgenius/dify/pull/41117 中的 @ddddaji 将会话传递给工作流评论帐户访问器
*杂务（deps）：将gunicorn从26.0.0撞到https://github.com/langgenius/dify/pull/41118中@dependabot[bot]烧瓶组中/api中的26.1.0
*修复：当https://github.com/langgenius/dify/pull/41107中的@BenjaminX全局插件清单为空时，回退到批处理API
* 修复（tts）：通过 @AsperforMias 在 https://github.com/langgenius/dify/pull/41043 中传播并验证实际音频 MIME
* 修复：稳定 https://github.com/langgenius/dify/pull/41132 中 @iamjoel 的代理工具选择器放置
* 测试：通过https://github.com/langgenius/dify/pull/40594中的@asukaminato0721将触发器和webhook会话以及ORM模型迁移到SQLite
* 重构（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/41127 中迁移重复的应用程序输入表单
* 重构(web): 迁移https://github.com/langgenius/dify/pull/41128中@lyzno1的管道模板输入表单
* 重构(web): 迁移@lyzno1在https://github.com/langgenius/dify/pull/41129中的管道发布输入表单
* 杂务：用 https://github.com/langgenius/dify/pull/41136 中 @crazywola 的新资产链接替换明星图像
*壮举：在https://github.com/langgenius/dify/pull/39675中支持@fatelei的特工技能
* 修复：修复 https://github.com/langgenius/dify/pull/41133 中 @FFXN 上传插件的问题
* 修复（api）：@linw1995 在 https://github.com/langgenius/dify/pull/41131 中按租户计划托管积分范围
* 修复：在 https://github.com/langgenius/dify/pull/41146 中显示 @iamjoel 没有模型的内联代理的检查表错误
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/41138中的@lyzno1升级pnpm工作区依赖项
* 修复(web): 在 https://github.com/langgenius/dify/pull/41150 中通过 @lyzno1 对齐代理 v2 监控副本
* 修复：将重复的代理名称行为与 @iamjoel 在 https://github.com/langgenius/dify/pull/41156 中的代理表单对齐
* 杂务：在 https://github.com/langgenius/dify/pull/41148 中@iamjoel 悬停时显示完整代理节省的时间
*修复（代理）：允许在https://github.com/langgenius/dify/pull/41147中保存@zyssyz123的无模型内联代理草稿
* 杂务（api）：通过@laipz8200在https://github.com/langgenius/dify/pull/41159中强制执行后端层边界
* 修复（网络）：在 https://github.com/langgenius/dify/pull/41161 中调整代理 v2 监控 @lyzno1 的翻译
* 修复：在 https://github.com/langgenius/dify/pull/41155 中保留 @lyzno1 没有横幅的主页介绍
* 修复：在 https://github.com/langgenius/dify/pull/41166 中通过 @iamjoel 插入命令时保留代理任务编辑器焦点
* feat(web)：增强 @crazywola 在 https://github.com/langgenius/dify/pull/41160 中的 Go to Anything 导航和发现
* ci: 在https://github.com/langgenius/dify/pull/41171中添加@QuantumGhost的HITL IM测试环境部署
*修复（api）：尊重https://github.com/langgenius/dify/pull/41165中@GareArc提示生成器中配置的模型参数
* 修复：https://github.com/langgenius/dify/pull/41167 中@lyzno1 对齐主导航卡网格
* 测试：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/40704 中删除过时的集成覆盖
* 修复（api）：将 exc_info=True 附加到 11 个 logger.debug/info('...: %s', str(e)) 站点 — https://github.com/langgenius/dify/pull/41077 中@Harsh23Kashyap 的#41066（调试/信息级别）的同级站点
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/41173 中与 en-US 同步翻译
* 修复：通过 https://github.com/langgenius/dify/pull/41175 中的 @lyzno1 将分页骨架保留在应用程序网格中
*修复：在https://github.com/langgenius/dify/pull/41177中优化@iamjoel的代理配置副本
* 修复：避免 @iamjoel 在 https://github.com/langgenius/dify/pull/41179 中对复制敏感的代理文件 toast 断言
*修复：由于@iamjoel在https://github.com/langgenius/dify/pull/41187中更改文案而导致代理中的e2e测试失败
* 修复(web): 在 https://github.com/langgenius/dify/pull/41190 中通过 @lyzno1 恢复模型选择器弹出间距
* 修复(web): https://github.com/langgenius/dify/pull/41212中@Jingyi-Dify更新后刷新模型提供程序版本
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/41126中的@dependabot[bot]将存储组中/api中的boto3从1.43.71撞到1.43.76
* 重构(api)：https://github.com/langgenius/dify/pull/41153中@hjlarry完成帐户教育边界
* 修复（技能）：通过 https://github.com/langgenius/dify/pull/41180 中的 @zxhlyh 调整管理 UI 可访问性和本地化
*修复（模型）：在https://github.com/langgenius/dify/pull/40799中@Taranum01的回答中重新签名裸露/反引号工具文件URL
* 修复（类型）：将https://github.com/langgenius/dify/pull/41141中@3ni8ma的agent_thoughts的any[]替换为ThoughtItem[]
*修复：解决@iamjoel在https://github.com/langgenius/dify/pull/41219中的代理用户体验反馈
* perf(api): @SCW5370在https://github.com/langgenius/dify/pull/41218中批量推荐应用程序目录查找
* 修复：在 https://github.com/langgenius/dify/pull/41220 中 @iamjoel 在构建模式下强制执行只读代理资源
* perf(agent): https://github.com/langgenius/dify/pull/41221 中 @wylswz 调整轮询间隔
* perf(agent)：轮询中的指数退避，以防止 @wylswz 在 https://github.com/langgenius/dify/pull/41222 中的分叉风暴
* 修复(docker): 在https://github.com/langgenius/dify/pull/41065中通过@BeautyyuYanli强化代理撰写配置
* 修复（网页）：停止 https://github.com/langgenius/dify/pull/41201 中 @shaba 的表情符号字体中的数字渲染
* 测试（cli）：https://github.com/langgenius/dify/pull/41224 中 @GareArc 的 tsconfig 间隙
* 修复：https://github.com/langgenius/dify/pull/39199 中的 @hjlarry 允许 OAuth 触发构建器验证而无需凭据
* 修复(cli): 在https://github.com/langgenius/dify/pull/41225中通过@samzong声明导入和上下文切换命令的写入效果
* feat(api)：支持https://github.com/langgenius/dify/pull/41215中@hjlarry的内联工作流代理的新代理测试版
* 修复：修复https://github.com/langgenius/dify/pull/41229中@fatelei的技能显示名称重命名冲突问题
* 测试（vdb）：在 https://github.com/langgenius/dify/pull/40687 中 @asukaminato0721 的提供者测试中使用真实的 ORM 模型
*测试：将纯集成案例移至https://github.com/langgenius/dify/pull/40705中@asukaminato0721的单元测试
* 测试：https://github.com/langgenius/dify/pull/40860 中的 @asukaminato0721 集中应用程序和帐户配置覆盖
* 测试：通过https://github.com/langgenius/dify/pull/40636中的@asukaminato0721将分步游览会话迁移到SQLite
* 测试：https://github.com/langgenius/dify/pull/40609 中的 @asukaminato0721 将 RAG 变量控制器会话和 ORM 模型迁移到 SQLite
* 修复(api): 在 https://github.com/langgenius/dify/pull/41235 中通过 @loulanyue 对 MCP 服务器刷新端点强制执行 APP_EDIT RBAC 权限
* 修复：防止侧边栏页脚操作在 https://github.com/langgenius/dify/pull/41230 中触发 @iamjoel 的悬停预览
* 修复（技能）：在 https://github.com/langgenius/dify/pull/41242 中通过 @zxhlyh 对齐日语技能页面标题
* 修复：在https://github.com/langgenius/dify/pull/41243中@iamjoel在构建模式下提示编辑器显示不允许的光标
*壮举：在https://github.com/langgenius/dify/pull/41246中添加@fatelei的技能启用功能开关
* 修复（ui）：在https://github.com/langgenius/dify/pull/41231中添加@lyzno1的选项卡面板焦点处理
* 重构(web)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/41232 中迁移管道 DSL 导入表单
* 重构(web): 迁移https://github.com/langgenius/dify/pull/41233中@lyzno1的数据集重命名形式
* feat(api)：在https://github.com/langgenius/dify/pull/41181中跟踪@linw1995的信用使用上下文
* 壮举：在 https://github.com/langgenius/dify/pull/41250 中隐藏 @fatelei 在代理 ui 中添加库技能
* 杂务：https://github.com/langgenius/dify/pull/41247 中 @wylswz 的 1.17.0 碰撞版本

## 新贡献者
* @zyz619963502zyz 在 https://github.com/langgenius/dify/pull/39695 中做出了第一个贡献
* @Souravrajvi0 在 https://github.com/langgenius/dify/pull/39708 中做出了第一个贡献
* @Success6666 在 https://github.com/langgenius/dify/pull/39485 中做出了第一个贡献
* @loulanyue 在 https://github.com/langgenius/dify/pull/39754 中做出了第一个贡献
* @xiaoyaoqilan 在 https://github.com/langgenius/dify/pull/39808 中做出了第一个贡献
* @MannXo 在 https://github.com/langgenius/dify/pull/39819 中做出了第一个贡献
* @iridescentWen 在 https://github.com/langgenius/dify/pull/39838 中做出了第一个贡献
* @superdiaiao 在 https://github.com/langgenius/dify/pull/39831 中做出了第一个贡献
* @HassanRady 在 https://github.com/langgenius/dify/pull/39899 中做出了第一个贡献
* @HandSonic 在 https://github.com/langgenius/dify/pull/39885 中做出了第一个贡献
* @pineapple880066 在 https://github.com/langgenius/dify/pull/40034 中做出了第一个贡献
* @CodeWarriors0 在 https://github.com/langgenius/dify/pull/40055 中做出了第一个贡献
* @123liuziming 在 https://github.com/langgenius/dify/pull/39339 中做出了第一个贡献
* @eldardada 在 https://github.com/langgenius/dify/pull/37841 中做出了第一个贡献
* @bounkirdni-2025 在 https://github.com/langgenius/dify/pull/39474 中做出了第一个贡献
* @bkidy 在 https://github.com/langgenius/dify/pull/38112 中做出了第一个贡献
* @Mubelotix 在 https://github.com/langgenius/dify/pull/40115 中做出了第一个贡献
* @chelsealong 在 https://github.com/langgenius/dify/pull/40171 中做出了第一个贡献
* @medisean 在 https://github.com/langgenius/dify/pull/40189 中做出了第一个贡献
* @zyqzyq 在 https://github.com/langgenius/dify/pull/36163 中做出了第一个贡献
* @tusharmotwani1718 在 https://github.com/langgenius/dify/pull/40444 中做出了第一个贡献
* @kanson1996 在 https://github.com/langgenius/dify/pull/39155 中做出了第一个贡献
* @zrh805 在 https://github.com/langgenius/dify/pull/40408 中做出了第一个贡献
* @typenoob 在 https://github.com/langgenius/dify/pull/40480 中做出了第一个贡献
* @ddddajie 在 https://github.com/langgenius/dify/pull/40787 中做出了第一个贡献
* @AlexMultiAgent 在 https://github.com/langgenius/dify/pull/39895 中做出了第一个贡献
* @mahbubsouad 在 https://github.com/langgenius/dify/pull/40380 中做出了第一个贡献
* @TrueFurina 在 https://github.com/langgenius/dify/pull/40801 中做出了第一个贡献
* @a-yeyang 在 https://github.com/langgenius/dify/pull/40796 中做出了第一个贡献
* @mesrop2008 在 https://github.com/langgenius/dify/pull/40813 中做出了第一个贡献
* @CodeMak1r-zy 在 https://github.com/langgenius/dify/pull/40776 中做出了第一个贡献
* @weike-zhang 在 https://github.com/langgenius/dify/pull/40856 中做出了第一个贡献
* @BlessedWithLuck1105 在 https://github.com/langgenius/dify/pull/40852 中做出了第一个贡献
* @amogh-nagri-11 在 https://github.com/langgenius/dify/pull/40901 中做出了第一个贡献
* @Zenine 在 https://github.com/langgenius/dify/pull/38265 中做出了第一个贡献
* @akamabu 在 https://github.com/langgenius/dify/pull/40822 中做出了第一个贡献
* @FasihUrRahman 在 https://github.com/langgenius/dify/pull/40962 中做出了第一个贡献
* @fszcd 在 https://github.com/langgenius/dify/pull/40843 中做出了第一个贡献
* @hyhyf 在 https://github.com/langgenius/dify/pull/39129 中做出了第一个贡献
* @zl86790 在 https://github.com/langgenius/dify/pull/40964 中做出了第一个贡献
* @potoior 在 https://github.com/langgenius/dify/pull/39136 中做出了第一个贡献
* @yangchuansheng 在 https://github.com/langgenius/dify/pull/41026 中做出了第一个贡献
* @gegemeimingzi 在 https://github.com/langgenius/dify/pull/40921 中做出了第一个贡献
* @simpleqt 在 https://github.com/langgenius/dify/pull/41101 中做出了第一个贡献
* @ump45nose 在 https://github.com/langgenius/dify/pull/40443 中做出了第一个贡献
* @leilei3167 在 https://github.com/langgenius/dify/pull/41090 中做出了第一个贡献
* @XIIRUAN 在 https://github.com/langgenius/dify/pull/41007 中做出了第一个贡献
* @3ni8ma 在 https://github.com/langgenius/dify/pull/41141 中做出了第一个贡献
* @SCW5370 在 https://github.com/langgenius/dify/pull/41218 中做出了第一个贡献
* @shaba 在 https://github.com/langgenius/dify/pull/41201 中做出了第一个贡献

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.16.1...1.17.0

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.17.0` · 📅 发布：2026-08-25 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.17.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
