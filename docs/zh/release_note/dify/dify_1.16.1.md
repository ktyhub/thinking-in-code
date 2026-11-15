---
title: "dify 1.16.1"
project: "dify"
repo: "langgenius/dify"
tag: "1.16.1"
version: "1.16.1"
published: "2026-07-28"
type: "patch"
lang: "zh"
---

# dify 1.16.1

## 发生了什么变化

### 新功能
**工具多选输入**
- 工作流程工具节点现在支持多选下拉输入，允许用户在配置工具参数时从预定义列表中选择多个值。 (#39346)

**工作流程节点定位器**
- 您现在可以 click 工作流运行日志或错误消息中的 node_id，以在工作流编辑器画布中找到并突出显示相应的节点。 (#38187)

**工作流程块选择器改进**
- 块选择器面板现在具有改进的键盘导航、类别预览以及在向工作流添加节点时提供更直观的搜索体验。 (#39212)

**从侧边栏导出代理 DSL**
- 代理应用程序现在可以直接从应用程序侧边栏菜单导出为 DSL YAML，从而轻松备份或版本控制代理配置。 (#39299)

**知识追踪**
- 为知识/RAG 文档处理操作添加了更多可观察性跟踪，提高了索引管道的可见性。 (#38959)


---

### 错误修复

**工作流程与协作**
- 修复了隐藏选项卡协作领导者在选项卡处于非活动状态时保存过时的草稿的问题 (#38997)
- 修复了当协作从未连接时未保存的编辑被删除的问题 (#39579)
- 重新连接后保留最新的协作会话（#39646）
- 修复了严格模式初始化期间的错误草稿保存错误 (#39353)
- 当工作流程草稿保存失败时显示持久错误通知 (#39293)
- 在 Celery 任务完成之前等待工作流工作线程完成，以防止孤立执行 (#39614)
- 延迟加载 Loro 协作运行时以减少初始包大小 (#39631)
- 当 cli 在注释模式下检查节点时，不要打开节点设置面板 (#39500)
- 当不同的评论得到解决时，不要关闭活动评论面板 (#39491)

**RAG 与知识**
- 修复了文档清理器剥离有效字符 ï (U+00EF)、¿ (U+00BF)、⁄4 (U+00BE) (#39215)
- 递归文本分割期间保留空格（#39498）
- 在数据集服务中使用 `flush()` 而不是 `commit()` 来保留调用者事务边界 (#39223)
- 在外部知识验证探针中发送有效主体（#39410）

**代理**
- 修复了代理预览：启动新的预览对话而不继承旧 ID (#39463)
- 修复了对话历史记录更新时代理聊天输入被替换的问题 (#39289)
- 在代理日志中保留完整的模型使用定价（#39201）
- 在代理执行日志中显示工作流节点运行 (#39471)
- 在代理监控统计中包含工作流程运行 (#39354)
- 阻止未发布的代理在工作流程中使用 (#39532)
- 防止代理预览操作被 clipped (#39510)
- 防止构建重置清除预览聊天历史记录 (#39490)
- 修复了应用期间代理构建草稿 UI 闪烁的问题 (#39642)

**网络应用程序和用户界面**
- 修复了 webapp JWT 过期时间设置不正确的问题 (#39537)
- 修复了 Safari 和 Firefox 中的 TTS 播放问题 (#39444)
- 修复了 clipboard 在嵌入式应用程序中写入失败的问题 (#39511)
- 修复了文本生成 Web 应用程序在超时后显示无限加载的问题 (#39268)
- 修复了模型不支持视觉时聊天不传递文档的问题 (#39461)
- 停止块长度/重叠输入在狭窄容器中折叠到不可用的宽度（#39600）
- 修复了搜索热键水合作用不匹配的问题 (#39574)
- 改进了 DSL 导入/导出对话框状态（#39432、#39409）
- 修复了身份验证刷新重定向中的 basePath 双重问题 (#39273)
- 显示禁用的 Web 应用程序的不可用状态 (#39392)
- 修复了权限选择器语义 (#39269)
- 修复了自定义页面水平溢出（#39557）

**API 和后端**
- 修复了 MCP 工具 `output_schema` 在可选时被视为必需的问题 (#39453)
- 在 VariableTruncator 中尊重 `list[File]` 的数组元素限制和字节预算 (#39220)
- 防止身份记录死锁 (#39449)
- 拒绝 `host:port` 形状的 `PLUGIN_REMOTE_INSTALL_PORT` 值并提供可操作的提示 (#39329)
- 修复了 `PaginatedResult.pages` 对于空结果集返回 1 而不是 0 (#39229)
- 将资源租户用于草稿变量文件 (#39307)
- 范围内的 HITL 快照消息查找以利用数据库索引 (#39351)
- 当音频到文本端点缺少 `file` 字段时，返回 400 而不是 500 (#39303、#39322)
- 修复了工具执行期间 tool_meta 缺失 `tool_provider_type` (#39513)
- 将配置的超时应用于企业内部 API 请求 (#39335)
- 当策略缺失时返回禁用的自动升级设置 (#39494)
- 强制执行工具提供商类型合同（#39380）
- 修复了 WaterCrawl 网站爬虫处理非 JSON 错误响应的问题 (#37514)
- 修复了租户默认模型架构错误时无法创建聊天应用程序的问题 (#39266)

---
### 安全增强

- 代理本地沙箱现在运行在具有严格 ACL 规则的专用 Squid 转发代理后面，防止沙箱直接到达内部服务。仅允许 agent_backend 上的 API 和 `/agent-stub/` 上的 `/files/` 端点，两者均受短期访问令牌保护。这显着减少了代理沙箱中任意代码执行的影响范围。 (#39544)
- Dify API 和代理后端之间的通信现在通过 `DIFY_AGENT_API_TOKEN` / `AGENT_BACKEND_API_TOKEN` 使用基于令牌的身份验证，从而强化了内部服务边界。 (#39622)
- 将 Jinja2 模板渲染切换为使用 `SandboxedEnvironment`，防止工作流代码节点中的模板注入攻击 (#39609)
- 修补了 React 服务器组件 DoS 漏洞 (#39539)
- 在电子邮件验证器中使用 `re.fullmatch` 来拒绝尾随换行符，防止绕过攻击 (#39320)
- 在接受工作区邀请之前验证帐户状态 (#39438)

---

### 性能

- **轻量级最近的应用程序端点** - 新的 `GET /console/api/apps/recent` 端点将主页“继续工作”部分的延迟减少了约 69%（3.2× 更快），将 SQL 查询从 19+ 减少到 1 个投影 SELECT 和响应大小约 50% (#39625)
- **延迟加载主页创建模式** - 延迟加载创建模式代码直到交互，减少初始 JavaScript 捆绑包 (#39634)

---

### 改进

- 使代理作曲家保存和发布状态保持一致（#39637）
- 简化的 Dify 徽标主题 (#39580)
- 改进了工作流块选择器 UI (#39377)
- 改进了 Web 可访问性语义 (#39505)
- 预览工作流程时节点不再可拖动 (#39131)
- 在集成工具详细信息中显示非 LLM 设置 (#39295)

---

## 环境变量更改

### 新变量

|变量|默认 |描述 |
|----------|---------|-------------|
| `DIFY_AGENT_API_TOKEN` | `dify-agent-run-token-for-dev-only` |用于 API → agent_backend 身份验证的共享承载令牌。 **在生产中更改此设置。** |
| `AGENT_BACKEND_API_TOKEN` | `dify-agent-run-token-for-dev-only` |代理后端侧的相同标记。必须匹配 `DIFY_AGENT_API_TOKEN`。 |
| `PLUGIN_MODEL_PROVIDERS_CACHE_ENABLED` | `true` |如果是外部安装插件且缓存无法失效，则设置为`false`。 |

> [!重要]
> `DIFY_AGENT_API_TOKEN` 是 Dify API 和代理后端之间安全通信的**新必需变量**。默认值 (`dify-agent-run-token-for-dev-only`) 不安全，**必须在生产中替换**。生成一个：
> ```bash
> python -c 'import secrets; print(secrets.token_urlsafe(32))'
> ```
> 在代理后端设置与 `AGENT_BACKEND_API_TOKEN` 相同的值。

### Docker 撰写更改

- **代理沙箱网络隔离**：`local_sandbox` 已从 `default` 网络移至专用 `agent_sandbox_network` + `local_sandbox_proxy_network`。添加了新的 `agent_ssrf_proxy` 服务 (Squid)。
- **承载身份验证**：`AGENT_BACKEND_API_TOKEN` / `DIFY_AGENT_API_TOKEN` 现在传递到 `api`、`worker` 和 `agent_backend` 服务。
- 图像标签更新为 `1.16.1`。

---

## 数据库迁移

此版本包括 **4 个新迁移**：

1. `2026_07_15_1600-3c9f8e2a1d7b_add_workflow_run_archive_bundle_cursor_indexes.py` — 向 `workflow_run_archive_bundles` 添加索引（在 PostgreSQL 上并发）
2. `2026_06_29_1200-b8c9d0e1f2a3_add_step_by_step_tour_state.py`——创建`account_step_by_step_tour_states`表
3. `2026_07_22_1500-d2825e7b9c10_scope_agent_debug_conversations.py` — 将 `draft_type` 列添加到 `agent_debug_conversations` 并更新唯一约束
4. `2026_07_23_1200-6f5a9c2d8e1b_add_telemetry_fields_to_dify_setups.py` — 将遥测字段（`instance_id`、`install_reported_at`、`last_heartbeat_at`）添加到 `dify_setups`

所有迁移都是附加的（新表、列、索引），并且可以安全运行，无需停机。

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

### Docker 撰写（推荐）

```bash
cd docker
docker compose down
git pull origin main
docker compose pull
docker compose up -d
```

数据库迁移将在启动时自动运行。

> [!重要]
> 查看 `.env` 中的新 `DIFY_AGENT_API_TOKEN` 变量。默认值是不安全的——生成用于生产的安全令牌：
> ```bash
> python -c 'import secrets; print(secrets.token_urlsafe(32))'
> ```

### 源代码

```bash
git pull origin main
cd api
flask db upgrade
```

---

## 发生了什么变化
* 重构（web）：使用https://github.com/langgenius/dify/pull/39203中@lyzno1生成的数据集卡查询
* 重构（web）：使用https://github.com/langgenius/dify/pull/39204中@lyzno1生成的OAuth查询选项
* 重构(web)：在https://github.com/langgenius/dify/pull/39202中通过@lyzno1对齐集成侧边栏组件
* 壮举（工作流程）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39212 中改进块选择器导航和预览
* 修复（dataset_service）：使用flush（）而不是commit（）来保留@sergioperezcheco在https://github.com/langgenius/dify/pull/39223中的调用者事务
* ci：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39277 中将默认 Depot 作业路由到 4 核运行器
* 杂务：当 @hjlarry 在 https://github.com/langgenius/dify/pull/39131 中预览工作流程时，节点不应可拖动
* test(web): 在https://github.com/langgenius/dify/pull/39239中通过@lyzno1对齐测试状态边界
* 重构(web): 避免网站爬虫效果中的setState by @wanxiankai in https://github.com/langgenius/dify/pull/39237
* 修复：https://github.com/langgenius/dify/pull/39268 中 @iamjoel 超时后文本生成 Web 应用程序继续加载
* 重构（web）：避免直接 setState 在 jina 阅读器爬虫中生效（#25194） by @pepepeboom in https://github.com/langgenius/dify/pull/39216
* 修复(web): 在 https://github.com/langgenius/dify/pull/39269 中恢复 @lyzno1 的权限选择器语义
* 琐事：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/39247 中对 github-actions-dependencies 组进行 5 次更新
* 修复：当 @hjlarry 在 https://github.com/langgenius/dify/pull/39266 中获取租户默认模型架构错误时，无法创建聊天应用程序
*修复：防止隐藏选项卡协作领导者在https://github.com/langgenius/dify/pull/38997中保存@Kevin9703的陈旧草稿
* 修复（api，网络）：范围试用应用程序文件由 @linw1995 在 https://github.com/langgenius/dify/pull/39149 中上传到应用程序租户
* 重构：https://github.com/langgenius/dify/pull/39001中@zhaohao1004使用目录进行工作流归档维护
* 修复（代理）：在 https://github.com/langgenius/dify/pull/39201 中保留 @zyssyz123 的完整模型使用定价
* feat(web): 通过 https://github.com/langgenius/dify/pull/39285 中的 @GareArc 添加对代理接入点的 webapp 访问控制
* 修复：如果 @iamjoel 在 https://github.com/langgenius/dify/pull/39289 中更新对话历史记录，代理聊天的输入将被替换
* feat(dataset): 在 https://github.com/langgenius/dify/pull/39158 中代理@hyoban 的 KnowledgeFS 控制台请求
* 文档：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39290 中完善前端测试指南
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/39292 中的 @lyzno1 更新 pnpm 和工作区依赖项
* 修复：@iamjoel 在 https://github.com/langgenius/dify/pull/39293 中工作流草稿保存失败时显示持续错误
* feat(web): 在https://github.com/langgenius/dify/pull/38785中添加@Jingyi-Dify的逐步游览shell
* 杂务：在https://github.com/langgenius/dify/pull/39295中@iamjoel的集成工具详细信息中显示非LLM设置
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/39296 中与 en-US 同步翻译
* revert(ci): 在 https://github.com/langgenius/dify/pull/39297 中恢复 @lyzno1 的默认 Depot 运行器
* 测试：在 https://github.com/langgenius/dify/pull/39123 中 @asukaminato0721 在单元杂项中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39121 中 @asukaminato0721 在单元杂项中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39122 中 @asukaminato0721 在单元杂项中使用 SQLite 会话
* 壮举：在 https://github.com/langgenius/dify/pull/39299 中支持@iamjoel 在侧边栏中导出代理 dsl
* 修复（web）：停止在https://github.com/langgenius/dify/pull/39273中由@sergioperezcheco在身份验证刷新重定向中加倍basePath
* 琐事：当数据集权限不是所有团队时，将 rbac 配置更新为… by @fatelei in https://github.com/langgenius/dify/pull/39227
* 重构（web）：通过https://github.com/langgenius/dify/pull/39308中的@lyzno1从水合边界中删除basePath
* ci：通过https://github.com/langgenius/dify/pull/39318中的@WH-2099简化测试工作流程执行
* 测试：在 https://github.com/langgenius/dify/pull/39120 中 @asukaminato0721 在单元杂项中使用 SQLite 会话
*修复（api）：在https://github.com/langgenius/dify/pull/39307中使用@linw1995的草稿变量文件的资源租户
* 修复（配置）：拒绝主机：端口形状的 PLUGIN_REMOTE_INSTALL_PORT，并由 @sergioperezcheco 在 https://github.com/langgenius/dify/pull/39329 中提供可操作的提示
* 修复：当音频到文本端点中缺少文件字段时，返回 400 而不是 500 (#39303) by @rkfshakti in https://github.com/langgenius/dify/pull/39322
* 测试：在 https://github.com/langgenius/dify/pull/39119 中 @asukaminato0721 在单元杂项中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39116 中的@asukaminato0721 在服务工作流程中使用 SQLite 会话
* 修复（api）：仅由 @lyzno1 在 https://github.com/langgenius/dify/pull/39338 中保留工作流日志存档所有者管理员
* 修复(web): 在https://github.com/langgenius/dify/pull/39343中通过@lyzno1恢复计费访问边界
* 修复（api）：当 @Harsh23Kashyap 在 https://github.com/langgenius/dify/pull/39305 中的试用应用程序音频到文本中缺少“文件”时，返回 400 而不是 500
* 重构(web)：删除https://github.com/langgenius/dify/pull/39342中@lyzno1的权限目录服务挂钩
*修复（watercrawl）：处理https://github.com/langgenius/dify/pull/37514中@luochen211的非json错误响应
* 修复（dev）：在https://github.com/langgenius/dify/pull/39349中使用@hjlarry对本地API使用gevent WebSocket服务器
* 修复：不支持在https://github.com/langgenius/dify/pull/39347中@iamjoel跳转到市场详细信息
* 修复（工作流程）：避免在严格模式启动期间出现虚假草稿保存错误...作者：@hjlarry，https://github.com/langgenius/dify/pull/39353
* 测试：在 https://github.com/langgenius/dify/pull/38751 中 @asukaminato0721 在 test_account_service 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/39115 中的@asukaminato0721 在服务工作流程中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39118 中 @asukaminato0721 在单元杂项中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/38735 中 @asukaminato0721 在 test_built_in_retrieval 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38738 中的 @asukaminato0721 在 test_based_generate_task_pipeline 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38774 中 @asukaminato0721 在 test_conversation_service 中使用 sqlite3 会话
* 测试：将 API 代币服务覆盖范围移至 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38918 中的单元测试
* 测试：在 https://github.com/langgenius/dify/pull/38752 中 @asukaminato0721 在 test_accounts 中使用 sqlite3 会话
* 测试：将 app import API 覆盖范围移至 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38920 中的单元测试
* 测试：在https://github.com/langgenius/dify/pull/38743中的@asukaminato0721的test_database_retrieval中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/38759 中 @asukaminato0721 在 test_agent_app_parameters 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38757 中 @asukaminato0721 在 test_workspace_account 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38771 中 @asukaminato0721 在 test_tool_file_manager 中使用 sqlite3 会话
* 测试：将人工输入交付覆盖范围移至 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38926 中的单元测试
*测试：在https://github.com/langgenius/dify/pull/38769中的@asukaminato0721的test_build_from_mapping中使用sqlite3会话
* 测试：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/38982 中为提供者添加 SQLite 会话固定装置
* 修复（代理）：包括 https://github.com/langgenius/dify/pull/39354 中 @zyssyz123 的监控统计数据中的工作流程运行
* feat(webapp-access): 在https://github.com/langgenius/dify/pull/38567中通过@GareArc添加WEBAPP_PUBLIC_ACCESS_ENABLED切换
*修复（api）：范围HITL快照消息查找以利用https://github.com/langgenius/dify/pull/39351中@QuantumGhost的数据库索引
* 修复：更新 https://github.com/langgenius/dify/pull/39368 中 @iamjoel 的代理名册文档链接
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/39362 中与 en-US 同步翻译
* 重构(web)：通过https://github.com/langgenius/dify/pull/39377中的@lyzno1改进工作流块选择器
* 修复（api）：对于 https://github.com/langgenius/dify/pull/39229 中 @lntutor 的空结果集，PaginatedResult.pages 应为 0
* 壮举：通过 @WTW0313 在 https://github.com/langgenius/dify/pull/39370 中重写 cookie，为开发代理添加 WebSocket 支持
*修复：在https://github.com/langgenius/dify/pull/39380中通过@lyzno1强制执行工具提供者类型合同
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/39384中的@lyzno1将Next.js升级到16.2.11
* 测试：在 https://github.com/langgenius/dify/pull/39114 中的 @asukaminato0721 的服务杂项中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39113 中 @asukaminato0721 在服务企业中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/39111 中的@asukaminato0721 在服务核心中使用 SQLite 会话
* 测试：在https://github.com/langgenius/dify/pull/39109中@asukaminato0721在核心工作流程中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/38760 中 @asukaminato0721 在 test_auth_wraps 中使用 sqlite3 会话
* 文档：注意 @zcxGGmu 在 https://github.com/langgenius/dify/pull/39374 中的最低 Docker Compose 版本
*测试：在https://github.com/langgenius/dify/pull/38777中的@asukaminato0721的test_ human_input_forms中使用sqlite3会话
* 测试：将控制台 OAuth 覆盖范围移至 https://github.com/langgenius/dify/pull/38923 中 @asukaminato0721 的单元测试
*修复：将配置的超时应用于https://github.com/langgenius/dify/pull/39335中@GareArc的企业内部API请求
* 修复（web）：在 https://github.com/langgenius/dify/pull/39392 中显示 @lyzno1 禁用的 Web 应用程序的不可用状态
* 修复（数据集）：通过 https://github.com/langgenius/dify/pull/39360 中的 @WTW0313 更新空状态处理和权限消息传递
* 杂务：https://github.com/langgenius/dify/pull/39390 中的 @dependabot[bot] 将 /api 中的 pyasn1 从 0.6.3 提升到 0.6.4
* 琐事：https://github.com/langgenius/dify/pull/39387 中的 @dependabot[bot] 将 /dify-agent 中的 setuptools 从 82.0.1 提升到 83.0.0
* 杂务：https://github.com/langgenius/dify/pull/39389 中的 @dependabot[bot] 将 /api 中的 gitpython 从 3.1.50 提升到 3.1.52
* 杂务：https://github.com/langgenius/dify/pull/39386 中的 @dependabot[bot] 在 /dify-agent-runtime 中将 google.golang.org/grpc 从 1.82.0 提升到 1.82.1
* 杂务：在 https://github.com/langgenius/dify/pull/39388 中通过 @dependabot[bot] 将 /dify-agent 中的 pyasn1 从 0.6.3 提升到 0.6.4
*测试：在https://github.com/langgenius/dify/pull/38693中的@asukaminato0721的test_clear_free_plan_tenant_expired_logs中使用sqlite3会话
* 杂务：https://github.com/langgenius/dify/pull/39328 中的 @dependabot[bot] 在 /dify-agent 中将枕头从 12.2.0 撞到 12.3.0
* 测试：在 https://github.com/langgenius/dify/pull/38686 中 @asukaminato0721 在 test_workflow 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38784 中的 @asukaminato0721 的服务 API 装置中使用 SQLite 会话
* 测试：在 https://github.com/langgenius/dify/pull/38718 中 @asukaminato0721 在 test_export_service 中使用 sqlite3 会话
*测试：在https://github.com/langgenius/dify/pull/38719中的@asukaminato0721的test_generator_api_missing中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/38687 中的 @asukaminato0721 的 test_app_runner_conversation_variables 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38675 中的 @asukaminato0721 在 test_model_config_api 中使用 sqlite3 会话
*修复（e2e）：将夹具与@lyzno1在https://github.com/langgenius/dify/pull/39394中生成的合同对齐
* 杂务：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39398 中清理 CODEOWNERS
* 修复（oauth）：在https://github.com/langgenius/dify/pull/39366中接受@linw1995的邀请后重新验证
* 修复(ci)：避免 @lyzno1 在 https://github.com/langgenius/dify/pull/39401 中重复运行合并后 e2e
* 测试：在 https://github.com/langgenius/dify/pull/38740 中 @asukaminato0721 在 test_base_app_runner 中使用 sqlite3 会话
*修复（api，计费）：https://github.com/langgenius/dify/pull/39404中@linw1995清理后向量空间缓存无效
* 测试（e2e）：验证@lyzno1在https://github.com/langgenius/dify/pull/39400中生成的控制台合约
* 杂务：通过 @WTW0313 在 https://github.com/langgenius/dify/pull/39406 中更新跨 i18n 语言环境的权限提示
* 测试：在 https://github.com/langgenius/dify/pull/38673 中 @asukaminato0721 在 test_reset_encrypt_key_pair 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38676 中 @asukaminato0721 在 test_rag_pipeline_workflow 中使用 sqlite3 会话
* 修复（代理）：在 https://github.com/langgenius/dify/pull/39405 中隔离 @zyssyz123 的构建和预览聊天对话
* 测试：在 https://github.com/langgenius/dify/pull/38677 中 @asukaminato0721 在 test_snippet_workflow 中使用 sqlite3 会话
*测试：在https://github.com/langgenius/dify/pull/38678中的@asukaminato0721的test_snippet_workflow_draft_variable中使用sqlite3会话
* 修复(web): 改进 https://github.com/langgenius/dify/pull/39409 中 @lyzno1 的 DSL 导出反馈
*测试：在https://github.com/langgenius/dify/pull/38674中的@asukaminato0721在test_app_import_api中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/38679 中 @asukaminato0721 在 test_tags 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38680 中 @asukaminato0721 在 test_init_validate 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38681 中 @asukaminato0721 在 test_plugin_wraps 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38682 中 @asukaminato0721 在 test_runtime_credentials 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38683 中的 @asukaminato0721 在 test_workflow_events_openapi 中使用 sqlite3 会话
*壮举（数据集）：通过@hyoban在https://github.com/langgenius/dify/pull/39300中添加新知识列表和空状态
* 修复：防止 https://github.com/langgenius/dify/pull/39412 中 @balancetheworld 的 RBAC 角色名称溢出设置面板
* 修复（代理）：在 https://github.com/langgenius/dify/pull/39415 中刷新@zyssyz123 过时的内联预览草稿
* feat: 支持https://github.com/langgenius/dify/pull/39346中@hjlarry的工具多选输入
* 修复（dify-ui）：在 https://github.com/langgenius/dify/pull/39430 中通过 @lyzno1 保留按钮故事中的链接语义
* 壮举（数据集）：在 https://github.com/langgenius/dify/pull/39314 中公开 @hyoban 的新 RAG KnowledgeFS 合约
* 修复（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39432 中改进导入 DSL 对话框状态
* 壮举：@CodingOnStar 在 https://github.com/langgenius/dify/pull/39408 中对 cookie 同意进行门控云分析
*修复（api）：通过https://github.com/langgenius/dify/pull/39410中的@dparkmit24在外部知识验证探针中发送有效主体
* 测试：将密码重置覆盖范围移至 https://github.com/langgenius/dify/pull/38936 中 @asukaminato0721 的单元测试
* 测试：在 https://github.com/langgenius/dify/pull/38684 中 @asukaminato0721 的 test_conversation 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38685 中的 @asukaminato0721 在 test_hitl_service_api 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38692 中 @asukaminato0721 在 test_async_workflow_service 中使用 sqlite3 会话
* 杂务（api）：云使用 https://github.com/langgenius/dify/pull/39436 中 @linw1995 在 api 网站上预先签名的下载 URL
* 修复（工作流程）：在https://github.com/langgenius/dify/pull/39439中@lyzno1隐藏聊天流程中的Agent V2
*修复（auth）：在接受https://github.com/langgenius/dify/pull/39438中@zyssyz123的邀请之前验证帐户
* 修复：在电子邮件验证器中使用 re.fullmatch 来拒绝 @rkfshakti 在 https://github.com/langgenius/dify/pull/39320 中的尾随换行符 (#39234)
* 杂务：改进 @hjlarry 在 https://github.com/langgenius/dify/pull/39437 中的 lambda 插件运行时错误显示
* 修复(web): 支持在 Safari 和 Firefox 中通过 @euxx 在 https://github.com/langgenius/dify/pull/39444 中播放 TTS
*壮举（数据集）：在https://github.com/langgenius/dify/pull/39315中添加@hyoban的新知识创建流程
* 壮举：https://github.com/langgenius/dify/pull/39330 中 @GareArc 的代理背后的门代理管理。管理权限
*修复（api）：防止https://github.com/langgenius/dify/pull/39449中@hjlarry的身份记录死锁
* 修复(web): 在 https://github.com/langgenius/dify/pull/39459 中通过 @samzong 授权重定向时回显 OAuth 状态
* 修复（代理）：在 https://github.com/langgenius/dify/pull/39463 中通过@zyssyz123 在没有 ID 的情况下启动新的预览对话
* 修复：如果不支持 https://github.com/langgenius/dify/pull/39461 中@iamjoel 的视觉，则聊天无法传递文档
* 杂务：在 https://github.com/langgenius/dify/pull/39466 中 @41tair 进行数据集索引期间避免重复标记计数
* feat(dataset): 在https://github.com/langgenius/dify/pull/39319中添加@hyoban的源连接
* 修复（代理）：在https://github.com/langgenius/dify/pull/39471中@zyssyz123显示工作流节点在日志中运行
* feat(web): 在https://github.com/langgenius/dify/pull/38187中通过@ruanimal在工作流编辑器中通过node_id定位工作流节点
*壮举（数据集）：在https://github.com/langgenius/dify/pull/39324中添加@hyoban的网站抓取预览
* feat(oauth)：通过 @samzong 在 https://github.com/langgenius/dify/pull/39470 中公开提供商帐户端点上的稳定帐户 ID
* 壮举：知识在 https://github.com/langgenius/dify/pull/38959 中添加更多跟踪 @fatelei
* 杂务：如果不是 https://github.com/langgenius/dify/pull/39399 中 @iamjoel 的社区版本，则支持预览模式
* 测试：在 https://github.com/langgenius/dify/pull/38744 中 @asukaminato0721 在 test_base_trace_instance 中使用 sqlite3 会话
* 修复（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39488 中调整工作流代理日志
*修复：防止构建重置清除https://github.com/langgenius/dify/pull/39490中@iamjoel的预览聊天
* 修复(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39492 中简化代理配置模式状态
* 修复：当 @dparkmit24 在 https://github.com/langgenius/dify/pull/39491 中解决不同的评论时，不要关闭活动评论面板
* 修复：当 @hjlarry 在 https://github.com/langgenius/dify/pull/39494 中缺少策略时，返回禁用的自动升级设置
* 修复：@iamjoel 在 https://github.com/langgenius/dify/pull/39495 中平滑预览到构建的过渡
* 修复(api): 使https://github.com/langgenius/dify/pull/39479@he-yufeng的10分钟邮件IP首击窗口生效
* feat(dataset): 在https://github.com/langgenius/dify/pull/39325中添加@hyoban的抓取源选择
* 重构：https://github.com/langgenius/dify/pull/39454中的@lyzno1将部署版本集中在系统功能中
*修复：通过@iamjoel在https://github.com/langgenius/dify/pull/39499中经过身份验证的API请求下载技能文件
* 修复：https://github.com/langgenius/dify/pull/39500中@dparkmit24在注释模式下clicking节点时，不打开节点设置面板
* 修复：@iamjoel 在 https://github.com/langgenius/dify/pull/39504 中的音频配置 ui 问题
* 杂务：在https://github.com/langgenius/dify/pull/39509中添加@JohnJyong的deploy-knowledge.yml
* 修复：防止 https://github.com/langgenius/dify/pull/39510 中的 @iamjoel 执行 cli 代理预览操作
* Chore(web)：通过 https://github.com/langgenius/dify/pull/39505 中的 @linw1995 改进 Web 可访问性语义
* 修复(web): 允许 clipboard 通过 @WTW0313 在 https://github.com/langgenius/dify/pull/39511 中写入嵌入式应用程序
* 修复（web）：在https://github.com/langgenius/dify/pull/39524中@lyzno1导航渲染之前水合工作区权限
* 琐事：通过@lyzno1在https://github.com/langgenius/dify/pull/39526中添加Web shell代码所有者
* 修复：@iamjoel 在 https://github.com/langgenius/dify/pull/39527 中获取技能文件内容时包含 CSRF 令牌
* 修复（agent-v2）：将 API 参考链接到 https://github.com/langgenius/dify/pull/39534 中 @lyzno1 的代理指南
* 测试（e2e）：在https://github.com/langgenius/dify/pull/39538中通过@lyzno1进行菜单交互之前等待应用程序列表
* 修复（代理）：通过 https://github.com/langgenius/dify/pull/39532 中的 @zyssyz123 阻止工作流程中未发布的代理
* 修复：修复 https://github.com/langgenius/dify/pull/39513 中 @fatelei 执行工具时 tool_meta 丢失 tool_provider_type 的问题
* feat(dataset): 在https://github.com/langgenius/dify/pull/39326中添加@hyoban的文档处理任务
* 测试：在 https://github.com/langgenius/dify/pull/39542 中 @EvanYao826 的 ext 登录测试中使用 caplog
* 修复（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39539 中修补 React Server Components DoS
*壮举（数据集）：在https://github.com/langgenius/dify/pull/39361中添加@hyoban的文档详细信息
* 重构（web）：通过 https://github.com/langgenius/dify/pull/39545 中的 @lyzno1 删除过时的路由前缀处理程序
* 重构：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39543 中删除仅后端系统功能字段
* 修复(web): 防止https://github.com/langgenius/dify/pull/39557中@Jingyi-Dify自定义水平溢出
* 测试：在 https://github.com/langgenius/dify/pull/38695 中 @asukaminato0721 在 test_datasource_provider_service 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38697 中 @asukaminato0721 在 test_ human_input_service 中使用 sqlite3 会话
* 重构(web)：将向量空间计费查询迁移到https://github.com/langgenius/dify/pull/39558中@EvanYao826的合约client
* 测试：在 https://github.com/langgenius/dify/pull/38699 中 @asukaminato0721 在 test_webhook_service 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38704 中 @asukaminato0721 在 test_workflow_execute_task 中使用 sqlite3 会话
*测试：在https://github.com/langgenius/dify/pull/38706中的@asukaminato0721的test_easy_ui_message_end_files中使用sqlite3会话
*测试：在https://github.com/langgenius/dify/pull/38716中的@asukaminato0721的test_wraps中使用sqlite3会话
*测试：在https://github.com/langgenius/dify/pull/38717中的@asukaminato0721的test_metadata_nullable_bug中使用sqlite3会话
*测试：在https://github.com/langgenius/dify/pull/38720中@asukaminato0721在test_llm_quota中使用sqlite3会话
* 测试：在 https://github.com/langgenius/dify/pull/38726 中 @asukaminato0721 在 test_encrypter 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38728 中 @asukaminato0721 在 test_workflow_node_execution_offload 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38730 中 @asukaminato0721 在 test_pipeline_template_base 中使用 sqlite3 会话
* 琐事：https://github.com/langgenius/dify/pull/39577 中的 @SpiliosDimakopoulos 在 VDB 提供程序自述文件（“可导入的”）中进行语法修复
* 杂务：https://github.com/langgenius/dify/pull/39576 中的 @SpiliosDimakopoulos 印地语自述文件中的 docker-compose.yaml 链接损坏（缺少斜线）
* 文档：修复 https://github.com/langgenius/dify/pull/39573 中 @SpiliosDimakopoulos 的 ValueSourceType 文档字符串中的拼写错误
* 杂务（代理）：更新并简化 https://github.com/langgenius/dify/pull/39584 中 @wylswz 的自述文件
* 重构（代理）：通过 https://github.com/langgenius/dify/pull/39583 中的 @lyzno1 简化存储库上下文
* 文档：https://github.com/langgenius/dify/pull/39575 中的@SpiliosDimakopoulos 在土耳其语自述文件中损坏的 Grafana 链接（占位符文本而不是 URL）
*修复（dify-ui）：在https://github.com/langgenius/dify/pull/39572中尊重@lyzno1的即时弹出转换
* 修复(web): 防止 @lyzno1 在 https://github.com/langgenius/dify/pull/39574 中搜索热键水合不匹配
* 重构：将试用应用程序功能从 https://github.com/langgenius/dify/pull/39562 中的@lyzno1 的系统功能中移出
* 重构（工作流程）：删除 https://github.com/langgenius/dify/pull/39588 中 @lyzno1 的钩子桶导出
* 修复（工作流程）：当协作从未完成时，停止删除未保存的编辑...作者：https://github.com/langgenius/dify/pull/39579 中的 @BenjaminX
* 测试：在 https://github.com/langgenius/dify/pull/38691 中 @asukaminato0721 在 test_snippet 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38698 中 @asukaminato0721 在 test_message_service 中使用 sqlite3 会话
* 修复（web）：通过https://github.com/langgenius/dify/pull/39600中的@dparkmit24阻止块长度/重叠输入在窄容器中折叠到不可用的宽度
* 壮举：在 https://github.com/langgenius/dify/pull/39452 中添加 @FFXN 的 CE 遥测报告
* 修复（api）：遵守https://github.com/langgenius/dify/pull/39220中@Taranum01在VariableTruncator（#39218）中列表[文件]的数组元素限制和字节预算
* 修复：Web应用登录JWT的过期时间设置不正确。作者：@FFXN，https://github.com/langgenius/dify/pull/39537
* 修复（rag）：阻止文档清理器删除 https://github.com/langgenius/dify/pull/39215 中 @winklemad 的有效字符 ï、¿、 ¾
* 重构（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/39580 中简化 Dify 徽标主题
*壮举（api）：在https://github.com/langgenius/dify/pull/39607中@linw1995在Web应用程序站点响应中公开应用程序模式
* 修复：https://github.com/langgenius/dify/pull/39498 中 @CYJ1226 递归文本分割期间保留空格
* 杂务：在https://github.com/langgenius/dify/pull/39502中由@dependabot[bot]在/dify-agent中将pypdf从6.10.2提升到6.14.2
* 修复（代理）：通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/39615 中公开来自作曲家的发布状态
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/39603 中对 github-actions-dependencies 组进行 6 次更新
* feat(inner_api)：添加端点以使https://github.com/langgenius/dify/pull/39468中的@GareArc无效插件模型提供程序缓存
* 修复：在 https://github.com/langgenius/dify/pull/39616 中通过 @lyzno1 调整工作区卡计划所有权
* 壮举：@iamjoel 在 https://github.com/langgenius/dify/pull/39608 中为新特工添加振幅
*修复：在https://github.com/langgenius/dify/pull/39609中使用@wylswz的jinja沙箱
* feat(agent): 通过 @wylswz 在 https://github.com/langgenius/dify/pull/39544 中为代理沙箱添加一个鱿鱼代理
* 修复(web): 停止在 https://github.com/langgenius/dify/pull/39626 中通过 @lyzno1 报告工作区状态
* 修复（工作流程）：@lyzno1 在 https://github.com/langgenius/dify/pull/39631 中延迟加载 Loro 协作运行时
*修复（api）：在https://github.com/langgenius/dify/pull/39614中@linw1995完成任务之前等待工作流工作人员清理
* perf(web)：@lyzno1 在 https://github.com/langgenius/dify/pull/39634 中延迟加载主页创建模式
* perf：在https://github.com/langgenius/dify/pull/39625中添加@hjlarry的轻量级最近应用程序端点
* 测试：在 https://github.com/langgenius/dify/pull/39624 中使用@escape0707 提供的原始文件支持的 SQLite 固定装置
* 测试：在 https://github.com/langgenius/dify/pull/38701 中 @asukaminato0721 在 test_workflow_run_service 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38702 中 @asukaminato0721 在 test_draft_var_loader_simple 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38729 中 @asukaminato0721 在 test_utils 中使用 sqlite3 会话
* 测试：在 https://github.com/langgenius/dify/pull/38700 中 @asukaminato0721 在 test_workflow_comment_service 中使用 sqlite3 会话
*测试：在https://github.com/langgenius/dify/pull/38742中的@asukaminato0721的test_llm_generator_missing中使用sqlite3会话
* 修复：@GareArc 在 https://github.com/langgenius/dify/pull/39635 企业许可证上的门服务 API、MCP 和触发器表面
* 壮举：通过 @wylswz 在 https://github.com/langgenius/dify/pull/39622 中将承载身份验证添加到代理后端
* 重构：使代理作曲家在https://github.com/langgenius/dify/pull/39637中通过@iamjoel保存和发布状态一致
* 杂务：https://github.com/langgenius/dify/pull/39619 中的 @dependabot[bot] 将 /api 中的 gitpython 从 3.1.52 提升到 3.1.54
* 测试：在 https://github.com/langgenius/dify/pull/38733 中的 @asukaminato0721 在 test_api 中使用 sqlite3 会话
* 杂务（deps）：在 https://github.com/langgenius/dify/pull/39025 中 @dependabot[bot] 在 /dify-agent-runtime 中将 golang.org/x/net 从 0.53.0 提升到 0.55.0
* 测试：在 https://github.com/langgenius/dify/pull/38739 中 @asukaminato0721 在 test_extract_thread_messages 中使用 sqlite3 会话
* 杂务：在https://github.com/langgenius/dify/pull/39618中通过@dependabot[bot]将/dify-agent中的pymdown扩展从10.21.2提升到11.0
* 测试：在 https://github.com/langgenius/dify/pull/39049 中@asukaminato0721 在抹布检索中使用 SQLite 会话
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/39604 中进行 3 次更新，在 1 个目录中碰撞存储组
* 修复：防止代理构建草稿 UI 在 @iamjoel 在 https://github.com/langgenius/dify/pull/39642 中应用期间闪烁
* 测试：在https://github.com/langgenius/dify/pull/39057中@asukaminato0721在服务核心中使用SQLite会话
* 测试：在https://github.com/langgenius/dify/pull/39066中@asukaminato0721在核心内存中使用SQLite会话
* 修复（ui）：在 https://github.com/langgenius/dify/pull/39643 中统一 @lyzno1 的组合框触发对焦环
* 测试：在 https://github.com/langgenius/dify/pull/39069 中的控制器服务 api 中使用 @asukaminato0721 的 SQLite 会话
* 杂务：通过 https://github.com/langgenius/dify/pull/39641 中的 @lyzno1 更新工作区依赖项
* 修复（工作流程）：在 https://github.com/langgenius/dify/pull/39646 中保留 @lyzno1 的最新协作会话
* 测试：在https://github.com/langgenius/dify/pull/39072中@asukaminato0721在核心操作中使用SQLite会话
* 测试：在https://github.com/langgenius/dify/pull/39075中@asukaminato0721在核心应用程序中使用SQLite会话
* 测试：在 https://github.com/langgenius/dify/pull/39077 中 @asukaminato0721 在核心工具中使用 SQLite 会话
* 修复(web): 在 https://github.com/langgenius/dify/pull/39654 中通过 @lyzno1 对齐游览触发 DOM 顺序
* 修复（工作流程）：在https://github.com/langgenius/dify/pull/39657中通过@Jingyi-Dify对齐块图标矢量大小
*修复（cli）：通过https://github.com/langgenius/dify/pull/39658中的@GareArc将发布脚本测试与实时兼容窗口分离
* feat(plugin): 允许在https://github.com/langgenius/dify/pull/39632中通过@GareArc禁用租户插件模型提供者缓存
* 杂务：https://github.com/langgenius/dify/pull/39653 中 @wylswz 的 1.16.1 碰撞版本
* 修复：修复 mcp output_schema 在 https://github.com/langgenius/dify/pull/39453 中由 @fatelei 可选

## 新贡献者
* @wanxiankai 在 https://github.com/langgenius/dify/pull/39237 中做出了第一个贡献
* @pepepeboom 在 https://github.com/langgenius/dify/pull/39216 中做出了第一个贡献
* @rkfshakti 在 https://github.com/langgenius/dify/pull/39322 中做出了第一个贡献
* @lntutor 在 https://github.com/langgenius/dify/pull/39229 中做出了第一个贡献
* @zcxGGmu 在 https://github.com/langgenius/dify/pull/39374 中做出了第一个贡献
* @dparkmit24 在 https://github.com/langgenius/dify/pull/39410 中做出了第一个贡献
* @samzong 在 https://github.com/langgenius/dify/pull/39459 中做出了第一个贡献
* @SpiliosDimakopoulos 在 https://github.com/langgenius/dify/pull/39577 中做出了第一个贡献
* @Taranum01 在 https://github.com/langgenius/dify/pull/39220 中做出了第一个贡献
* @winklemad 在 https://github.com/langgenius/dify/pull/39215 中做出了第一个贡献
* @CYJ1226 在 https://github.com/langgenius/dify/pull/39498 中做出了第一个贡献

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.16.0...1.16.1

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.16.1` · 📅 发布：2026-07-28 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.16.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
