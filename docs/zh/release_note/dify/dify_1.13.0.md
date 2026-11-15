---
title: "dify 1.13.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.13.0"
version: "1.13.0"
published: "2026-02-11"
type: "minor"
lang: "zh"
---

# dify 1.13.0

## 🚀 新功能

### 人在环 (HITL)

我们正在推出 **人类输入** 节点，这是一项重大更新，它将改变人工智能和人类的工作方式 
在 Dify 工作流程中进行协作。

**背景**

以前，工作流程是二元的：要么完全自动化，要么完全手动。这造成了“trust 差距” 
需要人工智能速度但人类判断至关重要的高风险场景。通过 HITL，我们正在制造 h
uman 监督工作流程架构的本机部分，允许您嵌入 
直接查看执行图中的步骤。

**关键能力**

- **本机工作流暂停：** 插入“人工输入”节点以在关键决策点暂停工作流执行。
- **审查和编辑：** 该节点生成一个 UI，人们可以在该过程继续之前审查 AI 输出并修改变量（例如，编辑草稿或更正数据）。
- **基于操作的路由：** 配置自定义按钮（例如“批准”、“拒绝”或“升级”）来确定 
  工作流程的后续路径。
- **灵活的交付方式：** 人工输入表单可以通过 **Webapp** 或 **电子邮件** 交付。在云环境中，电子邮件传送可用性可能取决于计划/功能设置。


## 🛠 架构更新

为了支持 HITL 所需的有状态暂停/恢复机制并提供事件订阅 API，我们重构了执行引擎：**基于工作流的流式执行和高级聊天执行现在在 Celery 工作线程中运行**，而非流式 **WORKFLOW** 运行仍然在 API 进程中执行。
所有暂停/恢复路径（例如 HITL）均通过 Celery 恢复，并且事件通过 Redis Pub/Sub 流回。

**对于大型部署和自托管用户：**

我们引入了一个名为 `workflow_based_app_execution` 的新 Celery 队列。虽然标准设置开箱即用，但高吞吐量环境应考虑以下优化以确保稳定性和性能：

1. **缩放工作人员：** 根据您的具体工作负载调整消耗 `workflow_based_app_execution` 队列的工作人员数量。
2. **专用 Redis（可选）：** 对于大规模部署，我们建议配置新的 `PUBSUB_REDIS_URL` 环境变量以指向专用 Redis 实例。强烈建议将 **Redis 集群模式与 Sharded PubSub** 结合使用，以确保水平可扩展性。

## ⚠️ 重要升级说明

**需要新的 Celery 队列：`workflow_based_app_execution`**

请确保您的部署配置（Docker Compose、Helm Chart 等）包括监听新 **`workflow_based_app_execution`** 队列的工作人员。  
基于工作流的流执行和所有恢复流（例如 HITL）需要此队列；否则，流执行和恢复任务将不会被处理。

## 🔧 操作注意事项

**额外的芹菜队列：`api_token`**

如果是 `ENABLE_API_TOKEN_LAST_USED_UPDATE_TASK=true`，请确保您的部署也有工作人员正在监听 **`api_token`**。
此队列由 API 令牌 `last_used_at` 时间戳的计划批量更新任务使用。

## ⚙️ 配置更改

我们引入了几个新的环境变量来支持架构更改。 **大型部署应特别注意 PubSub Redis 配置**以确保可扩展性。
* **`PUBSUB_REDIS_URL`** （关键）：指定用于 API 和 Celery 工作线程之间的 PubSub 通信的 Redis URL。如果留空，则默认为标准 `REDIS_*` 配置。
* **`PUBSUB_REDIS_CHANNEL_TYPE`**（关键）：定义流事件的通道类型。选项为 `pubsub`（默认）或 `sharded`。 **我们强烈建议在高吞吐量环境中使用 `sharded`。**
* **`PUBSUB_REDIS_USE_CLUSTERS`**（严重）：设置为 `true` 可为 PubSub 启用 Redis 集群模式。 Combined with sharded PubSub, this is essential for horizontal scaling.

**其他补充：**

* `WEB_FORM_SUBMIT_RATE_LIMIT_MAX_ATTEMPTS`：速率限制窗口内每个 IP 允许的 Web 表单提交最大数量（默认值：`30`）。
* `WEB_FORM_SUBMIT_RATE_LIMIT_WINDOW_SECONDS`：Web 表单提交速率限制的时间窗口（以秒为单位）（默认值：`60`）。
* `HUMAN_INPUT_GLOBAL_TIMEOUT_SECONDS`：工作流运行在全局超时之前可以保持暂停状态等待人工输入的最大秒数（默认值：`604800`，7 天）。
* `ENABLE_HUMAN_INPUT_TIMEOUT_TASK`：启用检查过期人工输入请求的后台任务（默认值：`true`）。
* `HUMAN_INPUT_TIMEOUT_TASK_INTERVAL`：设置超时检查任务的时间间隔（以分钟为单位）（默认值：`1`）。
* `ENABLE_API_TOKEN_LAST_USED_UPDATE_TASK`：启用定期后台任务，批量更新 API 令牌 `last_used_at` 时间戳（默认：`true`）。
* `API_TOKEN_LAST_USED_UPDATE_INTERVAL`：设置批量更新API令牌`last_used_at`时间戳的时间间隔（以分钟为单位）（默认：`30`）。
* `SANDBOX_EXPIRED_RECORDS_CLEAN_BATCH_MAX_INTERVAL`：保留清理批次之间的最大随机延迟（以毫秒为单位），以减少数据库压力峰值（默认值：`200`）。

## 📌 Changelog 的其他亮点

### 可靠性和正确性

- 添加了迁移时重复数据删除和租户默认模型的唯一约束，以防止重复的默认模型记录。
- 修复了由提供商 ID 类型不匹配导致的工具删除边缘情况。
- 修复了 FastOpenAPI 集成回归问题，其中经过身份验证的用户可以在远程文件 APIs 中解析为匿名用户。
- 修复了文件相关响应的消息事件类型检测，并隐藏了非管理员用户的工作区邀请操作。

### 性能和可扩展性

- Reduced backend load and console latency with plugin manifest pre-caching and `AppListApi` query optimizations.
- 通过拆分数据库会话、批量清理执行、索引调整以及用于保留清理作业的可配置批次间限制，提高了大数据任务的稳定性。

### API 和平台功能

- 添加了服务 API 端点，用于通过租户/应用程序范围强制进行最终用户查找。
- 改进了运行状态转换期间的工作流运行历史记录刷新行为。
- 通过从 MCP 响应中提取和报告使用情况元数据（例如，令牌/成本字段），增强了 MCP 工具集成。

### 安全

- 从 ECharts 解析中删除了动态 `new Function` 评估，现在针对不受支持的图表代码返回显式解析错误。

### 本地化

- 在后端语言映射和 Web 本地化资源中添加了荷兰语 (`nl-NL`) 语言支持。

---

## 升级指南

> [!重要]
> 如果您使用定制 `CELERY_QUEUES`，请确保包含 `workflow_based_app_execution`。  
> 如果是 `ENABLE_API_TOKEN_LAST_USED_UPDATE_TASK=true`，还包括 `api_token`。
> 
> 有关背景和详细信息，请参阅上面的**⚠️重要升级说明**和**🔧操作说明**。

### Docker 组合部署

1. 备份您的自定义docker-compose YAML文件（可选）

   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   ```
2.从主分支获取最新代码

   ```bash
   git checkout main
   git pull origin main
   ```

3. 停止服务。请在docker目录下执行

   ```bash
   docker compose down
   ```

4. 备份数据

   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```

5、升级服务

   ```bash
   docker compose up -d
   ```

> [!注意]
> 
> 如果您遇到如下错误
> 
> ```bash
> 2025/11/26 11:37:57 /app/internal/db/pg/pg.go:30
> [error] failed to initialize database, got error failed to connect to `host=db_postgres user=postgres database=dify_plugin`: hostname resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> 
> 2025/11/26 11:37:57 /app/internal/db/pg/pg.go:34
> [error] failed to initialize database, got error failed to connect to `host=db_postgres user=postgres database=postgres`: hostname > resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> 2025/11/26 11:37:57 init.go:99: [PANIC]failed to init dify plugin db: failed to connect to `host=db_postgres user=postgres database=postgres`: hostname resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> panic: [PANIC]failed to init dify plugin db: failed to connect to `host=db_postgres user=postgres database=postgres`: hostname resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> ```
> 请改用以下命令。详情请阅读此https://github.com/langgenius/dify/issues/28706
> ```bash
>    docker compose --profile postgresql up -d
>    ```

### 源代码部署

1. 停止 API 服务器、Worker 和 Web 前端服务器。

2.从release分支获取最新代码：

   ```bash
   git checkout 1.13.0
   ```

3.更新Python依赖项：

   ```bash
   cd api
   uv sync
   ```

4. 然后，让我们运行迁移脚本：

   ```bash
   uv run flask db upgrade
   ```

5. 最后，再次运行API服务器、Worker和Web前端服务器。

---

## 发生了什么变化
* 重构（api）：在 https://github.com/langgenius/dify/pull/31789 中 @Sean-Kenneth-Doherty 的 Trial.py 中用 Pydantic 模型替换 reqparse
* 重构：插件详细面板组件，以实现更好的可维护性和代码组织。作者：@CodingOnStar，https://github.com/langgenius/dify/pull/31870
*修复：删除https://github.com/langgenius/dify/pull/31910中@hyoban的api参考文档链接前缀
* 修复：在 https://github.com/langgenius/dify/pull/31916 中缺少 @hjlarry 导入 console_ns
* 修复：修复 https://github.com/langgenius/dify/pull/31826 中 @fatelei 的 mcp 服务器状态不正确的问题
* 测试：尝试修复测试，通过 https://github.com/langgenius/dify/pull/31912 中的 @hyoban 清除 CI 中的测试日志
* 修复：通过 https://github.com/langgenius/dify/pull/31779 中的@fatelei 修复 mcp 输出模式为联合类型前端崩溃
* 修复：https://github.com/langgenius/dify/pull/31930 中 @zxhlyh 自动摘要环境
* 重构（数据集）：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/31707 中进行全面测试来提取钩子和组件
* 修复：在 appList 查询键中包含语言环境，以支持 https://github.com/langgenius/dify/pull/31921 中 @CodingOnStar 的 useExploreAppList 中的本地化支持
* 杂务：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/31940 中为测试目录分配代码所有者
* 重构(web)：通过@CodingOnStar在https://github.com/langgenius/dify/pull/31729中进行全面测试，将复杂组件提取为模块化结构
* 修复：https://github.com/langgenius/dify/pull/31934 中@fatelei 永久修复delete_draft_variables_batch 循环
* 杂务：将 docker-compose 中的版本和包管理器通过 https://github.com/langgenius/dify/pull/31947 中的@QuantumGhost 提升到 1.12.1
* 杂务：更新 CODEOWNERS 以通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/31941 中指定基本组件的测试文件模式
* 壮举：使用最新的哈希值来同步https://github.com/langgenius/dify/pull/31924中@fatelei的草稿
* 修复：从触发器查询挂钩中删除 staleTime/gcTime 覆盖，并在 https://github.com/langgenius/dify/pull/31863 中使用 @lyzno1 的 orpc 合约
* 壮举：@GareArc 在 https://github.com/langgenius/dify/pull/31519 中进行帐户删除清理
* 测试：修复@hyoban 在 https://github.com/langgenius/dify/pull/31975 中的测试
* fix: fix miss use db.session by @fatelei in https://github.com/langgenius/dify/pull/31971
* chore: sticky the applist header in explore page by @iamjoel in https://github.com/langgenius/dify/pull/31967
* 修复(web): 添加重写规则以修复 @majiayu000 在 https://github.com/langgenius/dify/pull/31770 中的 Serwist 预缓存 404 错误
*修复：修复uuid_generate_v4仅在https://github.com/langgenius/dify/pull/31304中由@fatelei在postgresql中使用
* 杂务：迁移到 https://github.com/langgenius/dify/pull/31969 中 @hyoban 的 eslint-better-tailwind
*功能：在https://github.com/langgenius/dify/pull/31942中通过@Stream29检查更新之前预先缓存所有插件清单
* perf(api): 通过https://github.com/langgenius/dify/pull/31999中的@QuantumGhost优化AppListApi端点的响应时间
* chore: Remove redundant double space in variable type description (core/variables/variables.py) by @WH-2099 in https://github.com/langgenius/dify/pull/32002
* 重构：在 https://github.com/langgenius/dify/pull/32017 中通过 @WH-2099 去除工作流模板转换中的外部导入
* 杂务：通过 https://github.com/langgenius/dify/pull/32022 中的 @longway-code 删除 .codex/skills 目录
* fix: fix agent node tool type is not right by @fatelei in https://github.com/langgenius/dify/pull/32008
* fix: make `flask upgrade-db` fail on error by @longbingljw in https://github.com/langgenius/dify/pull/32024
* chore: update HITL auto deploy workflow by @QuantumGhost in https://github.com/langgenius/dify/pull/32040
* fix: fix tool type is miss by @fatelei in https://github.com/langgenius/dify/pull/32042
* perf: use batch delete method instead of single delete by @QuantumGhost in https://github.com/langgenius/dify/pull/32036
* 修复（api）：通过https://github.com/langgenius/dify/pull/32012中的@NeatGuyCoding在DELETE端点中返回正确的HTTP 204状态代码
* test: only remove text coverage in CI by @hyoban in https://github.com/langgenius/dify/pull/32043
* 杂务：通过 @QuantumGhost 在 https://github.com/langgenius/dify/pull/32051 中更新部署hitl.yaml 的部署分支
* fix: redis for api token by @zyssyz123 in https://github.com/langgenius/dify/pull/31861
* fix: batch delete document db session block by @JohnJyong in https://github.com/langgenius/dify/pull/32062
* fix: remove unexpected scrollbar in KB Retrieval settings by @crazywoola in https://github.com/langgenius/dify/pull/32082
* 重构：删除不必要的类型：async_workflow_service.py by @kongdayan in https://github.com/langgenius/dify/pull/32081
* 重构：将 Celery 任务会话划分为更小的、离散的执行…作者：https://github.com/langgenius/dify/pull/32085 中的@fatelei
* 壮举：在 https://github.com/langgenius/dify/pull/31802 中提取 @fatelei 的 mcp 工具使用情况
* fix: search model provider list by @zxhlyh in https://github.com/langgenius/dify/pull/32106
* 重构：https://github.com/langgenius/dify/pull/32105 中 @fatelei 的 document_indexing_update_task 拆分数据库会话
* 测试：@hyoban 在 https://github.com/langgenius/dify/pull/32108 中进行稳定测试
* refactor: decouple database operations from knowledge retrieval nodes by @fatelei in https://github.com/langgenius/dify/pull/31981
* feat: Service API - add end-user lookup endpoint by @BeautyyuYanli in https://github.com/langgenius/dify/pull/32015
* 修复：将用户时区从应用程序上下文传递到日期选择器组件。作者：https://github.com/langgenius/dify/pull/31831 中的 @ZeroZ-lab
* 修复：修复https://github.com/langgenius/dify/pull/32116中@fatelei未命中的触发器输出模式
* feat: Human Input Node by @QuantumGhost in https://github.com/langgenius/dify/pull/32060
* chore(api): update launch.json.template by @QuantumGhost in https://github.com/langgenius/dify/pull/32124
* 样式：通过 https://github.com/langgenius/dify/pull/32111 中的 @Yessenia-d 更新横幅项目样式并增强深色/浅色主题变量
* 杂务：修复`#i18n`中@hyoban在https://github.com/langgenius/dify/pull/32134中的useTranslation的类型
* 重构：https://github.com/langgenius/dify/pull/32129 中 @fatelei 的 document_indexing_sync_task 拆分数据库会话
* 修复(api): 通过 @tokezooo 在 https://github.com/langgenius/dify/pull/32097 中注册知识管道服务 API 路由
* fix(api): serialize pipeline file-upload created_at by @tokezooo in https://github.com/langgenius/dify/pull/32098
* chore: detect utilities in css by @hyoban in https://github.com/langgenius/dify/pull/32143
* 杂务：在 https://github.com/langgenius/dify/pull/32004 中引入 @hyoban 的 css 图标
* 重构（api）：在 https://github.com/langgenius/dify/pull/32163 中收紧 @shuv-amp 键入的 OTel 装饰器
*修复（api）：在https://github.com/langgenius/dify/pull/32151中通过@eureka928清理成员删除时孤立的待处理帐户
* 修复：当用户是非沙盒用户并且有已付费余额时，... by @zyssyz123 in https://github.com/langgenius/dify/pull/32173
* 重构：在https://github.com/langgenius/dify/pull/32180中通过@hyoban导入globals.css中的组件css
*修复（api）：在https://github.com/langgenius/dify/pull/32114中包含@OiPunk工作流工具文件输出的文件标记
* 修复(web): 在 https://github.com/langgenius/dify/pull/32117 中通过 @OiPunk 填充工作流工具输出描述
* 修复：将 sendBeacon 替换为 fetch keepalive，以便在 https://github.com/langgenius/dify/pull/32088 中 @veeceey 关闭的页面上自动保存
* 测试：通过@WTW0313在https://github.com/langgenius/dify/pull/32191中添加对人类输入节点功能的全面测试
* 杂务(api)：更新launch.json.example以包含新的workflow_based_app_execution。通过 @Nov1c444 在 https://github.com/langgenius/dify/pull/32184
* 重构：通过 https://github.com/langgenius/dify/pull/32045 中的 @CodingOnStar 从 UpdateDSLModal 和 Metadata 组件中提取子组件和自定义挂钩
*修复：修复https://github.com/langgenius/dify/pull/32169中@fatelei没有dify主目录引导权限错误
* 重构：输入 safe env，通过 https://github.com/langgenius/dify/pull/32035 中的 @hyoban 更新到 zod v4
* 壮举：@ruanimal 在 https://github.com/langgenius/dify/pull/32145 中增强 celery 配置
* fix(console): keep conversation updated_at unchanged when marking read by @OiPunk in https://github.com/langgenius/dify/pull/32133
* 杂务：允许草稿运行单个节点，而无需通过https://github.com/langgenius/dify/pull/31977中的@hjlarry连接到其他节点
* 杂务（deps）：在https://github.com/langgenius/dify/pull/32199中由@dependabot[bot]在/sdks/nodejs-client中将axios从1.13.2撞到1.13.5
* 修复：修复https://github.com/langgenius/dify/pull/32208中@WTW0313的基础节点状态图标的显示问题
* 杂务（api）：在https://github.com/langgenius/dify/pull/32214中通过@QuantumGhost在start-worker脚本中消耗`workflow_based_app_execution`队列中的任务
* 修复(api): https://github.com/langgenius/dify/pull/32212 中 @QuantumGhost 的 RedisClientWrapper 导致 CPU 使用率过高
* 修复：修复https://github.com/langgenius/dify/pull/32207中所有工具被@fatelei删除的问题
* 修复：向tenant_default_models添加唯一约束以防止重复…作者：https://github.com/langgenius/dify/pull/31221中的@qiaofenlin
* feat: support nl-NL language by @fatelei in https://github.com/langgenius/dify/pull/32216
* 修复：修复https://github.com/langgenius/dify/pull/32019中@fatelei的get_message_event_type返回错误的消息类型
* 文档（api）：将SetupApi标记为https://github.com/langgenius/dify/pull/32224中@41tair设计的未经验证
* feat(workflow)：通过@WTW0313在https://github.com/langgenius/dify/pull/32230中增强工作流运行历史管理和UI更新
* 杂务（deps）：https://github.com/langgenius/dify/pull/32218 中的 @dependabot[bot] 在 /api 中将加密从 46.0.3 提升到 46.0.5
* chore(deps): bump google-api-python-client from 2.90.0 to 2.189.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32102
* feat(tests): add mock for useInvalidateWorkflowRunHistory in pipeline run tests by @WTW0313 in https://github.com/langgenius/dify/pull/32234
* 修复：修复使用 fastopenapi 导致用户在 https://github.com/langgenius/dify/pull/32236 中被 @fatelei 匿名的问题
* 修复：更新索引以优化https://github.com/langgenius/dify/pull/32238中@hj24的消息清理性能
* 修复：如果当前用户不是 https://github.com/langgenius/dify/pull/31744 中 @douxc 的工作区管理员，则隐藏邀请按钮
* 琐事：https://github.com/langgenius/dify/pull/32147 中@QuantumGhost 的 1.13.0 碰撞版本

## 新贡献者
* @Sean-Kenneth-Doherty 在 https://github.com/langgenius/dify/pull/31789 中做出了第一个贡献
* @WH-2099 在 https://github.com/langgenius/dify/pull/32002 中做出了第一个贡献
* @longway-code 在 https://github.com/langgenius/dify/pull/32022 中做出了第一个贡献
* @kongdayan 在 https://github.com/langgenius/dify/pull/32081 中做出了第一个贡献
* @tokezooo 在 https://github.com/langgenius/dify/pull/32097 中做出了第一个贡献
* @shuv-amp 在 https://github.com/langgenius/dify/pull/32163 中做出了第一个贡献
* @OiPunk 在 https://github.com/langgenius/dify/pull/32114 中做出了他们的第一个贡献
* @veeceey 在 https://github.com/langgenius/dify/pull/32088 中做出了第一个贡献

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.12.1...1.13.0

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.13.0` · 📅 发布：2026-02-11 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.13.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
