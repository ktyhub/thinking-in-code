---
title: "dify 1.13.1"
project: "dify"
repo: "langgenius/dify"
tag: "1.13.1"
version: "1.13.1"
published: "2026-03-17"
type: "patch"
lang: "zh"
---

# dify 1.13.1

## 🚀 主要功能变化

### 数据平台和数据集操作

- Added **Hologres** as a supported backend option for both vector retrieval and full-text search.
- 添加了用于数据集文档下载的服务 API 端点：
  - 批量下载选定文档的 ZIP。
  - Signed URL download for single-document original files.

### 工作流程和聊天体验改进

- **Breaking change:** HITL email content now uses markdown rendering before delivery. 
  Existing email templates that relied on raw/plain behavior may render differently after upgrade.
- 草稿变量现在是用户范围而不是应用程序范围。升级后历史草稿变量将不可用。
- Added edge context menu support in workflow canvas, including direct edge deletion.
- Preserved existing connections when changing node types in workflow editing.
- Added configurable send-key behavior (`Enter` vs `Shift+Enter`) for embedded chat input.
- Added file payloads in message-end stream responses.
- 从默认模型选择逻辑中删除了特定于 GPT-4 的硬编码行为。
- Added a new `export-app-messages` CLI command to export application messages and related feedback to `JSONL.GZ` (local or cloud storage).

## 🔐 安全更新

- Prevented SQL injection risks in vector-store query paths by switching to parameterized SQL in affected implementations.
- 强化的 HITL 电子邮件传送：
  - 清理主题和正文内容。
  - Strip CR/LF from subjects to prevent SMTP header-injection vectors.
- 强制检查会话删除 API 的所有权。
- Cleared stale provider credentials during plugin uninstall to reduce residual credential risk.
- 改进了企业 API 错误处理和无效/过期许可证状态的许可证执行行为。

## 🏗️ Configuration, Architecture, and Deployment Updates

### 部署和操作
- Added a dedicated Celery queue: `dataset_summary` for LLM-heavy summary generation tasks.
  - 确保工作人员订阅此队列以避免摘要作业积压。
- Added telemetry metrics for retention cleanup tasks (messages/workflow runs), plus flush behavior for short-lived command jobs.

### 配置更改

- 添加了 `REDIS_MAX_CONNECTIONS`。
- 已弃用 `PUBSUB_*` 事件总线设置，改用 `EVENT_BUS_*` 设置。

## 🛠 其他值得注意的变化

- 修复了 `workflow_runs.started_at` 在简历上被覆盖的问题。
- 修复了由分割事务边缘情况导致的元数据批量编辑静默失败。
- 修复了知识检索中的元数据过滤器提取问题（`{{...}}` 条件）。
- 恢复了高级聊天应用程序中的引文可见性。
- 修复了 HITL 节点之后的对话变量重置行为。
- 修复了知识检索节点配置流程中的页面崩溃问题。
- 修复了聊天助手阻止响应模式行为的问题。
- 在 Weaviate 矢量属性中添加了 `doc_type` 处理，以获得更好的兼容性。
- 升级了 OpenTelemetry 依赖项以解决上下文分离错误。

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

4. Back up data

   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```

5. Upgrade services

   ```bash
   docker compose up -d
   ```

> [!NOTE]
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
> 请改用以下命令。详情请阅读这篇https://github.com/langgenius/dify/issues/28706
>    ```bash
>    docker compose --profile postgresql up -d
>    ```

### 源代码部署

1. Stop the API server, Worker, and Web frontend Server.

2.从release分支获取最新代码：

   ```bash
   git checkout 1.13.1
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

5. Finally, run the API server, Worker, and Web frontend Server again.

---

## 发生了什么变化
* feat(api)：通过 @razerzhang 在 https://github.com/langgenius/dify/pull/31843 中添加针对特定工作流程日志的计划清理任务
* 测试：通过 @saumyatalwani 在 https://github.com/langgenius/dify/pull/32201 中添加一些基本组件的单元测试
* 测试：通过@CodingOnStar在https://github.com/langgenius/dify/pull/32187中为数据集模块添加全面的单元和集成测试
* 测试（web）：通过https://github.com/langgenius/dify/pull/32220中的@CodingOnStar为插件和工具模块添加全面的单元和集成测试
* 测试：通过@CodingOnStar在https://github.com/langgenius/dify/pull/32227中为计费组件添加全面的单元和集成测试
* 测试：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/32246 中添加共享、开发和 goto-anything 模块的单元和集成测试
*测试：通过https://github.com/langgenius/dify/pull/32237中的@CodingOnStar为RAG Pipeline组件添加全面的单元和集成测试
* 壮举（测试）：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/32248 中添加用于探索应用程序列表、已安装应用程序和侧边栏生命周期流程的集成测试
* fix: metadata batch edit silently fails due to split transactions and swallowed exceptions by @veeceey in https://github.com/langgenius/dify/pull/32041
* 修复：@hyoban 在 https://github.com/langgenius/dify/pull/32276 中单次运行时无法上传文件
* 杂务（部门）：https://github.com/langgenius/dify/pull/32250 中的 @dependabot[bot] 在 /api 中将枕头从 12.0.0 撞到 12.1.1
*功能：支持https://github.com/langgenius/dify/pull/30887中@bowenliang123配置插件生成文件的最大大小
* feat(api)：通过@connermo在https://github.com/langgenius/dify/pull/32263中优化OceanBase矢量存储性能和可配置性
* 测试（web）：通过@CodingOnStar在https://github.com/langgenius/dify/pull/32268中添加和增强跨多个模块的前端自动化测试
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/32290中的@dependabot[bot]将/web中的qs从6.14.1提升到6.14.2
* 测试：通过 @poojanInfocusp 在 https://github.com/langgenius/dify/pull/32154 中添加基本组件第 1 部分的单元测试
* 测试：在https://github.com/langgenius/dify/pull/32298中通过@CodingOnStar添加应用卡片操作、列表浏览、创建应用流程的集成测试
* 测试：通过 @saumyatalwani 在 https://github.com/langgenius/dify/pull/32265 中添加一些基本组件的测试
* 重构(web)：从复杂组件中提取自定义钩子，并通过https://github.com/langgenius/dify/pull/32301中的@CodingOnStar添加全面测试
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/32315 中的 @dependabot[bot] 将 sqlparse 从 /api 中的 0.5.3 提升到 0.5.4
* 测试：通过 @poojanInfocusp 在 https://github.com/langgenius/dify/pull/32249 中添加基本聊天组件的单元测试
* 修复(app-copy): 在https://github.com/langgenius/dify/pull/32323中通过@GareArc继承原始应用程序的Web应用程序权限
*修复（api）：使数据库迁移Redis锁定TTL可配置，并防止LockNotOwnedError在https://github.com/langgenius/dify/pull/32299中由@lin-snow掩盖失败
*修复：删除探索上下文并将查询迁移到https://github.com/langgenius/dify/pull/32320中@lyzno1的orpc合约
* 重构（web）：集中基于角色的路由防护并修复https://github.com/langgenius/dify/pull/32302中@lyzno1的反模式
* ci：通过@asukaminato0721在https://github.com/langgenius/dify/pull/32346中更新dependabot配置
* 杂务（deps-dev）：由https://github.com/langgenius/dify/pull/32349中的@dependabot[bot]将/api中的3.1.0.20250401从3.1.0.20250401到3.3.0.20251206的凹凸类型-greenlet
* 修复（i18n）：修复工作流程中的严重错误并彻底修改波斯语（fa-IR）翻译。json by @Haohao-end in https://github.com/langgenius/dify/pull/32342
* 重构（工作流程文件）：通过https://github.com/langgenius/dify/pull/32252中的@WH-2099将`core.file`移动到`core.workflow.file`
* 重构（document_extractor）：通过https://github.com/langgenius/dify/pull/31828中的@laipz8200提取配置
* 重构（web）：将 String.match() 替换为 RegExp.exec()，用于 https://github.com/langgenius/dify/pull/32386 中的 @apoorvdarshan 的非全局正则表达式
* ci：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/32398 中添加 pip 和 uv 生态系统的每周时间表
* 杂务（deps）：将gmpy2从2.2.1提升到api中的2.3.0，由https://github.com/langgenius/dify/pull/32402中的@dependabot[bot]
* 杂务（deps-dev）：通过 https://github.com/langgenius/dify/pull/32401 中的 @dependabot[bot] 将 /api 中的类型降价要求从 ~=3.7.0 更新为 ~=3.10.2
* 杂务（deps-dev）：通过https://github.com/langgenius/dify/pull/32400中的@dependabot[bot]将/api中的opensearch-py从2.4.0提升到3.1.0
* 重构（web）：使 Switch 仅受控并通过 @lyzno1 在 https://github.com/langgenius/dify/pull/32399 中迁移调用站点
* 杂务（deps-dev）：通过https://github.com/langgenius/dify/pull/32403中的@dependabot[bot]将/api中的导入linter从2.7提升到2.10
* 修复：纠正 https://github.com/langgenius/dify/pull/32406 中 @kurokobo 的错误消息中误导性的重试计数
* 测试：添加 @saumyatalwani 在 https://github.com/langgenius/dify/pull/32396 中对基础 > 日期时间选择器的测试
* 修复：在 https://github.com/langgenius/dify/pull/32380 中 @laipz8200 卸载插件期间清除过时的提供商凭据
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/32427中的@dependabot[bot]将/api中的pypdf从6.6.2提升到6.7.1
* 杂务（deps）：由 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/32431 中将 /api 中的 werkzeug 从 3.1.5 提升到 3.1.6
*杂务（deps）：由https://github.com/langgenius/dify/pull/32432中的@dependabot[bot]从/api中的3.1.2到3.1.3的碰撞烧瓶
* 重构：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/32426 中改进试验中的某些类型
* 修复：修复https://github.com/langgenius/dify/pull/32441中更改后的节点无法通过@fatelei选择起始节点
* 测试：收紧用户可见的规范并提高密钥验证器的覆盖范围……作者：https://github.com/langgenius/dify/pull/32281 中的 @akashseth-ifp
* 测试：@mahammadasim 在 https://github.com/langgenius/dify/pull/32283 中的标题帐户、帐户设置和帐户下拉列表
* 测试（web）：在https://github.com/langgenius/dify/pull/32358中通过@akashseth-ifp在头文件夹中添加了对模型验证文件的测试
* 测试：在 https://github.com/langgenius/dify/pull/32313 中添加@mahammadasim 的数据源集成（概念、网站）和模态单元测试
* 测试：通过 @saumyatalwani 在 https://github.com/langgenius/dify/pull/32314 中添加一些基本组件的测试用例
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/32462 中的 @dependabot[bot] 将 /api 中的 pydantic 要求从 ~=2.11.4 更新为 ~=2.12.5
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/32463 中的 @dependabot[bot] 将 /api 中的 python-docx 要求从 ~=1.1.0 更新为 ~=1.2.0
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/32464 中的 @dependabot[bot] 将 /api 中的 redis[hiredis] 要求从 ~=6.1.0 更新为 ~=7.2.0
* 重构：在 AppQueueManager 中继承 ABC，以便 @tysoncung 在 https://github.com/langgenius/dify/pull/32461 中正确使用抽象方法
* 测试（网络）：添加会员页面帐户设置规范并通过 @akashseth-ifp 在 https://github.com/langgenius/dify/pull/32311 中提高覆盖范围
* 测试（web）：在头帐户中添加对模型提供程序页面文件的测试 - ... by @akashseth-ifp in https://github.com/langgenius/dify/pull/32360
* 修复：在https://github.com/langgenius/dify/pull/32475中通过@KinomotoMio向BaseVector.create添加返回类型注释
* 测试：通过https://github.com/langgenius/dify/pull/32487中的@KinomotoMio将数据集/文档属性测试迁移到testcontainers
* 重构：修复https://github.com/langgenius/dify/pull/32490中@Hypertension42的opentelemetry直方图类型赋值错误
* 修复：https://github.com/langgenius/dify/pull/32491中@tysoncung为Moderation.validate_config抽象方法添加返回类型注释
* 修复：https://github.com/langgenius/dify/pull/32493中通过@J0su3Code为抽象_publish方法添加返回类型注释
* 测试：通过 @poojanInfocusp 在 https://github.com/langgenius/dify/pull/32408 中添加基本组件第 3 部分的单元测试
* 测试：为提示编辑器的组件选择器块插件添加单元测试。通过 @mahammadasim 在 https://github.com/langgenius/dify/pull/32412
* 测试（web）：通过 https://github.com/langgenius/dify/pull/32392 中的 @akashseth-ifp 增加标头文件夹内组件的测试覆盖率
* test(web)：修复 https://github.com/langgenius/dify/pull/32481 中 @akashseth-ifp 的“Web 测试”GitHub 操作中失败的 Web 测试
* 测试：在 https://github.com/langgenius/dify/pull/32397 中添加 @saumyatalwani 的基本 > 功能测试
* 测试：通过 @poojanInfocusp 在 https://github.com/langgenius/dify/pull/32409 中添加基本组件第 2 部分的单元测试
* 测试：通过 @saumyatalwani 在 https://github.com/langgenius/dify/pull/32356 中添加一些基础组件的测试
* 修复：修正 Langfuse 跟踪实体中的类型注释，以匹配 https://github.com/langgenius/dify/pull/32498 中 @stakeswky 的 SDK
* 测试：在 https://github.com/langgenius/dify/pull/32373 中添加@saumyatalwani 对文件上传组件的测试
* 测试：@saumyatalwani 在 https://github.com/langgenius/dify/pull/32370 中添加了一些基本组件的测试
* 修复：通过 https://github.com/langgenius/dify/pull/32507 中的 @tysoncung 解决 parser.py 中的 Pyright bad-index 错误
* 测试（web）：通过 @akashseth-ifp 在 https://github.com/langgenius/dify/pull/32374 中增加 model-provider-page 文件夹的测试覆盖率
* 测试：通过 @poojanInfocusp 在 https://github.com/langgenius/dify/pull/32367 中添加聊天组件的单元测试
* 修复：在https://github.com/langgenius/dify/pull/32516中通过@longway-code向BaseVector抽象方法添加显式返回类型注释
* 测试（web）：增加https://github.com/langgenius/dify/pull/32377中@akashseth-ifp对文件夹plugin-page和model-provider-page中文件的覆盖率
* 测试：通过 @poojanInfocusp 在 https://github.com/langgenius/dify/pull/32361 中添加聊天/嵌入式聊天机器人组件的单元测试
* 测试：在 https://github.com/langgenius/dify/pull/32415 中添加 @saumyatalwani 对一些基础组件的测试
* 测试：在 https://github.com/langgenius/dify/pull/32416 中添加 @saumyatalwani 的基础 > 图像上传器测试
* 测试（基础）：通过 @akashseth-ifp 在 https://github.com/langgenius/dify/pull/32436 中添加测试覆盖率以形成组件
* 测试：将工作流运行存储库 SQL 测试迁移到 @KinomotoMio 在 https://github.com/langgenius/dify/pull/32519 中的 testcontainers
* 测试：将剩余的 DocumentSegment 导航 SQL 测试迁移到 @KinomotoMio 在 https://github.com/langgenius/dify/pull/32523 中的 testcontainers
* 测试：将最终用户服务 SQL 测试迁移到 @KinomotoMio 在 https://github.com/langgenius/dify/pull/32530 中的 testcontainers
* 测试：将消息额外内容测试迁移到 @KinomotoMio 在 https://github.com/langgenius/dify/pull/32532 中的 testcontainers
* 测试：将工作流触发器日志存储库 SQL 测试迁移到 @KinomotoMio 在 https://github.com/langgenius/dify/pull/32525 中的 testcontainers
* 测试：将节点执行存储库sql测试迁移到https://github.com/langgenius/dify/pull/32524中@KinomotoMio的testcontainers
* 测试：将remove_app_and_lated_data_task SQL测试迁移到https://github.com/langgenius/dify/pull/32547中@KinomotoMio的testcontainers
* 测试：将 test_document_service_display_status SQL 测试迁移到 @KinomotoMio 在 https://github.com/langgenius/dify/pull/32545 中的 testcontainers
* 测试：将delete_archived_workflow_run SQL测试迁移到https://github.com/langgenius/dify/pull/32549中@KinomotoMio的testcontainers
* 测试（基础）：通过 @akashseth-ifp 在 https://github.com/langgenius/dify/pull/32437 中添加更多基础/表单组件的测试覆盖率
* 修复：@hjlarry 在 https://github.com/langgenius/dify/pull/32557 中输入模态的表单字段高度不正确
* 杂务（部门）：https://github.com/langgenius/dify/pull/32552 中的 @dependabot[bot] 在 /api 中从 0.1.7 到 0.1.8
* 测试：将会话服务 SQL 测试迁移到 @KinomotoMio 在 https://github.com/langgenius/dify/pull/32527 中的 testcontainers
*测试：将数据集集合绑定SQL测试迁移到https://github.com/langgenius/dify/pull/32539中@KinomotoMio的testcontainers
* 测试：将数据集服务更新删除SQL测试迁移到@KinomotoMio在https://github.com/langgenius/dify/pull/32548中的testcontainers
* test: unit test cases for controllers.files, controllers.mcp and controllers.trigger module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32057
* test: improve unit tests for controllers.service_api by @cryptus-neoxys in https://github.com/langgenius/dify/pull/32073
* test: add tests for some components in base > prompt-editor by @saumyatalwani in https://github.com/langgenius/dify/pull/32472
* 测试：在 https://github.com/langgenius/dify/pull/32479 中添加@saumyatalwani 对一些基本组件的测试
* 重构（工作流程）：通过 https://github.com/langgenius/dify/pull/32365 中的 @laipz8200 工厂和默认值注入 http 请求节点配置
* 测试：将数据集服务检索SQL测试迁移到https://github.com/langgenius/dify/pull/32528中@KinomotoMio的testcontainers
* 测试：通过 @poojanInfocusp 在 https://github.com/langgenius/dify/pull/32452 中添加基本组件第 4 部分的单元测试
* test: add unit tests for base-components-part-5 by @poojanInfocusp in https://github.com/langgenius/dify/pull/32457
* fix: incorrect placeholder color in dark mode by @hjlarry in https://github.com/langgenius/dify/pull/32568
* fix: spin-animation animation-delay by @Pandaaaa906 in https://github.com/langgenius/dify/pull/32560
* feat(aliyun-trace): 在https://github.com/langgenius/dify/pull/32489中通过@hieheihei添加app_id属性
* test: example for [Refactor/Chore] use Testcontainers to do sql test #32454 by @asukaminato0721 in https://github.com/langgenius/dify/pull/32459
* fix: type checking error in parser by @ajuijas in https://github.com/langgenius/dify/pull/32510
* 测试：将 test_dataset_service_get_segments SQL 测试迁移到 @KinomotoMio 在 https://github.com/langgenius/dify/pull/32544 中的 testcontainers
*测试：将restore_archived_workflow_run SQL测试迁移到https://github.com/langgenius/dify/pull/32590中@KinomotoMio的testcontainers
* 测试：将workflow_node_execution_service_repository SQL测试迁移到https://github.com/langgenius/dify/pull/32591中@KinomotoMio的testcontainers
* 壮举：https://github.com/langgenius/dify/pull/31596 中的 @Pandaaaa906 添加对代理节点的错误处理支持
* ci: try from main repo by @asukaminato0721 in https://github.com/langgenius/dify/pull/32620
* 修复：在 https://github.com/langgenius/dify/pull/32603 中@stakeswky 的数据集向量索引测试中添加 None 检查tenant.id
* test: migrate clean_dataset_task SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32529
* test: migrate dataset_indexing_task SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32531
* 修复：将 dict() 合并替换为 dict 解包，以解决 https://github.com/langgenius/dify/pull/32653 中 @toroleapinc 的重载错误
* 测试：将数据集服务 update-dataset SQL 测试迁移到 @KinomotoMio 在 https://github.com/langgenius/dify/pull/32533 中的 testcontainers
* fix: add type annotations to BaseStorage.exists and BaseStorage.download by @toroleapinc in https://github.com/langgenius/dify/pull/32652
* fix: replace deprecated SpanAttributes and ResourceAttributes with new semconv imports by @stakeswky in https://github.com/langgenius/dify/pull/32661
* 测试：通过 https://github.com/langgenius/dify/pull/32628 中的 @poojanInfocusp 提高标头组件的覆盖率
* 重构(api)：通过https://github.com/langgenius/dify/pull/32618中的@laipz8200从节点工厂注入代码执行器
* refactor(workflow): inject redis into graph engine manager by @laipz8200 in https://github.com/langgenius/dify/pull/32622
* 恢复：“修复：图像预览触发二进制下载”，作者：@laipz8200，https://github.com/langgenius/dify/pull/32683
* 重构（工作流程）：通过https://github.com/langgenius/dify/pull/32569中的@laipz8200将凭证/模型访问端口注入LLM节点
* 杂务：由 @Inlei 在 https://github.com/langgenius/dify/pull/32680 中更新 README.md
* 重构（web）：在 https://github.com/langgenius/dify/pull/32636 中 @haku-ink 的 use-resize-panel 清理中删除 mouseup 侦听器
* chore(ci): fold pyrefly diff comments by @laipz8200 in https://github.com/langgenius/dify/pull/32685
* 测试：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/32688 中对齐文件预览 mimetype 期望
* 杂务（deps-dev）：将 nltk 从 3.9.2 中的 3.9.2 提升到 https://github.com/langgenius/dify/pull/32691 中的 @dependabot[bot] 在 /api 中的 3.9.3
* 修复：https://github.com/langgenius/dify/pull/32700中结构体输出模态的操作按钮应与@hjlarry右对齐
* docs(api): simplify setup README and worker guidance by @laipz8200 in https://github.com/langgenius/dify/pull/32704
* refactor: decouple the business logic from datasource_node by @fatelei in https://github.com/langgenius/dify/pull/32515
* 修复：https://github.com/langgenius/dify/pull/32058 中 @veeceey 的 CodeBasedExtension 测试中正确的模拟返回类型
* chore: update to eslint 10 by @hyoban in https://github.com/langgenius/dify/pull/32646
* test: migrate document_indexing_sync_task SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32534
* feat(web): add hover clear button for provider search by @laipz8200 in https://github.com/langgenius/dify/pull/32707
* fix: add return type to abstract _publish method by @tda1017 in https://github.com/langgenius/dify/pull/32701
* 杂务（deps-dev）：https://github.com/langgenius/dify/pull/32659 中的 @dependabot[bot] 将 /web 中的故事书从 10.2.0 提升到 10.2.10
* ci(web): parallelize web tests with 4-shard Vitest sharding by @lyzno1 in https://github.com/langgenius/dify/pull/32713
* test: migrate test_dataset_service SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32535
* chore(deps-dev): align all @storybook/* packages to 10.2.13 by @lyzno1 in https://github.com/langgenius/dify/pull/32714
* fix: YAML syntax error in pyrefly-diff-comment workflow by @nielskaspers in https://github.com/langgenius/dify/pull/32718
* 测试：将 document_service_status SQL 测试迁移到 @KinomotoMio 在 https://github.com/langgenius/dify/pull/32536 中的 testcontainers
* 壮举：在 https://github.com/langgenius/dify/pull/32719 中添加 @hj24 的后端代码审查技能
* 修复（ci）：修复https://github.com/langgenius/dify/pull/32728中@tysoncung无效的工作流程文件pyrefly-diff.yml
* 修复：将https://github.com/langgenius/dify/pull/32727中@tysoncung无法到达的yield表达式替换为yield from ()
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/32736中的@dependabot[bot]将/api中的pypdf从6.7.1提升到6.7.4
* 重构：通过https://github.com/langgenius/dify/pull/32746中的@laipz8200在ModelInstance上整合LLM运行时模型状态
* 重构（工作流）：通过https://github.com/langgenius/dify/pull/32750中的@laipz8200将变量包移动到core.workflow中
* refactor: inject memory interface into LLMNode by @laipz8200 in https://github.com/langgenius/dify/pull/32754
* 测试（api）：将自动规范添加到https://github.com/langgenius/dify/pull/32752中@laipz8200基于MagicMock的补丁使用
* 琐事：通过 @hyoban 在 https://github.com/langgenius/dify/pull/32559 中添加 vinext 作为开发服务器
* 修复：修复了 https://github.com/langgenius/dify/pull/32326 中 @FFXN 不同模组响应格式的适配问题
* 重构(web)：用 https://github.com/langgenius/dify/pull/32768 中 @slegarraga 的 pnpm.overrides 替换分辨率
* 修复：从 https://github.com/langgenius/dify/pull/32770 中 @hyoban 的 url 中删除 REDIRECT_URL_KEY
* 修复：部分Qwen3机型仅支持流式输出。作者：@FFXN，https://github.com/langgenius/dify/pull/32766
* 修复（工作流程）：通过https://github.com/langgenius/dify/pull/32762中的@WH-2099解耦http请求节点外部依赖
* 修复(api): 在https://github.com/langgenius/dify/pull/32772中通过@Br1an67向clean()方法添加显式返回类型注释
* 修复（api）：通过https://github.com/langgenius/dify/pull/32773中的@Br1an67解决BaseTraceInstance和OpsTraceManager中的类型错误
* 修复：在https://github.com/langgenius/dify/pull/32699中通过@tda1017向auth装饰器添加返回类型注释
* 修复（网页）：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/32757 中改进聊天编辑输入行为和快捷方式
* 重构（工作流程）：删除https://github.com/langgenius/dify/pull/32759中@WH-2099的代码节点助手导入
* 修复：改进 TanStack 查询 client 设置并修复 @lyzno1 在 https://github.com/langgenius/dify/pull/32422 中的 queryKey 错误
* feat(enterprise): auto-join newly registered accounts to the default workspace by @lin-snow in https://github.com/langgenius/dify/pull/32308
* 修复：在 https://github.com/langgenius/dify/pull/31528 中添加 @akkoaya 缺少的 pipeline_templates
*修复（api）：对https://github.com/langgenius/dify/pull/32686中@laipz8200删除的会话强制执行所有权检查
* 杂务：从https://github.com/langgenius/dify/pull/32782中的@BeautyyuYanli的后端类型检查管道中删除ty
* 杂务(web): 删除https://github.com/langgenius/dify/pull/30252中@majiayu000的PM2进程管理器
* 修复：在 https://github.com/langgenius/dify/pull/32747 中 @weiguangli-io 在 Notion 同步任务中使用 json.dumps 序列化 data_source_info
* revert(graph-engine): 回滚https://github.com/langgenius/dify/pull/32789中@laipz8200的停止事件统一
* 杂务：在 https://github.com/langgenius/dify/pull/32788 中支持 @hjlarry 的 vinext 代码检查器
* 重构(api)：https://github.com/langgenius/dify/pull/32786中@laipz8200将llm配额扣除移至app graph层
* 重构：通过https://github.com/langgenius/dify/pull/32784中的@laipz8200协议注入工作流节点内存
* 重构（工作流程）：通过https://github.com/langgenius/dify/pull/32796中的@laipz8200将PromptMessageMemory移动到model_runtime.memory
* 重构（工作流）：通过https://github.com/langgenius/dify/pull/32793中的@WH-2099解耦起始节点外部依赖
* fix: fix import error by @fatelei in https://github.com/langgenius/dify/pull/32800
* 修复：WebScraper 插件描述中的拼写错误：https://github.com/langgenius/dify/pull/32790 中@Copilot 的“Scrapper”→“Scraper”
*修复（ci）：使pyrefly diff注释集中于https://github.com/langgenius/dify/pull/32778中@hwb96的诊断
*修复：删除https://github.com/langgenius/dify/pull/32654中@toroleapinc测试中对不存在文档属性的引用
* 修复：在 https://github.com/langgenius/dify/pull/32656 中使用 @toroleapinc 的 WorkflowNodeExecutionModel.__table_args__ 声明的_attr.directive
* feat(web)：通过https://github.com/langgenius/dify/pull/32807中的@lyzno1为门户堆栈上下文添加根隔离层
* 修复：优化https://github.com/langgenius/dify/pull/32815中@hj24的workflow_run iter查询
* 测试：通过@CodingOnStar在https://github.com/langgenius/dify/pull/32818中添加基本组件的单元测试
* 重构（ci）：使用 diff -u 进行 @stablegenius49 在 https://github.com/langgenius/dify/pull/32813 中的pyrefly diff 输出
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/32804 中的 @dependabot[bot] 将 /api 中的 pyjwt 要求从 ~=2.10.1 更新为 ~=2.11.0
* 杂务（deps-dev）：通过 https://github.com/langgenius/dify/pull/32803 中的 @dependabot[bot] 将 /api 中的类型 aiofiles 要求从 ~=24.1.0 更新为 ~=25.1.0
*修复：修复聊天助手响应模式阻止在https://github.com/langgenius/dify/pull/32394中@fatelei不起作用的问题
* 重构：在https://github.com/langgenius/dify/pull/32828中@Echo0ff在pyrefly-diff工作流程中使用统一的diff格式
* 重构：从 https://github.com/langgenius/dify/pull/32801 中 @stablegenius49 排除的 Pyrefly 中删除测试和核心/抹布
* 修复：将所有 NodeType 值映射到 https://github.com/langgenius/dify/pull/32059 中的 @veeceey Arize Phoenix 跟踪中的跨类型
*修复：将OpenTelemetry升级到0.49b0以修复https://github.com/langgenius/dify/pull/32825中@GareArc的上下文分离错误
* 壮举：确保 https://github.com/langgenius/dify/pull/32765 中的@fatelei 没有丢失文档 ID
* 修复(api): 在https://github.com/langgenius/dify/pull/32774中通过@Br1an67为filter_none_values()添加返回类型注释
* 重构：https://github.com/langgenius/dify/pull/32274中@fatelei知识索引节点解耦业务逻辑
* 壮举（测试）：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/32841 中添加用于工作流实用程序和节点创建的全面测试套件
* 重构：将工作流包移动到 https://github.com/langgenius/dify/pull/32844 中的 @laipz8200 的 dify_graph
* perf: 通过@fatelei在https://github.com/langgenius/dify/pull/32847中优化数据集api的查询速度
* 重构（api）：通过https://github.com/langgenius/dify/pull/32858中的@laipz8200将model_runtime移动到dify_graph中
* 杂务：更新 vinext，在 https://github.com/langgenius/dify/pull/32878 中添加 @hyoban 的解决方法
* 重构（web）：通过https://github.com/langgenius/dify/pull/32887中的@CodingOnStar通过组件分解和文件夹组织来重构应用程序侧边栏
* 重构：https://github.com/langgenius/dify/pull/32879中@fatelei的TemplateTransformNode解耦代码执行器
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/32882中的@dependabot[bot]将/api中的pypdf从6.7.4提升到6.7.5
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/32883 中将 /web 中的 @orpc/client 从 1.13.4 撞到 1.13.6
* 重构（dify_graph）：通过https://github.com/langgenius/dify/pull/32873中的@WH-2099统一工作流程中的调用和用户枚举源
* 修复：添加服务API中缺少的doc_form验证。 by @FFXN in https://github.com/langgenius/dify/pull/32892
* 修复：https://github.com/langgenius/dify/pull/32897 中 @hyoban 将节点版本降级至 22
* feat(web)：https://github.com/langgenius/dify/pull/32824 中 @lyzno1 覆盖迁移护栏 + 基本 UI 基元
* test(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/32904 中为 Base UI 包装原语添加高质量的单元测试
* 重构（web）：通过https://github.com/langgenius/dify/pull/32339中的@lyzno1将文档列表查询状态迁移到nuqs
* test: migrate test_dataset_service_batch_update_document_status SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32537
* 修复：让 i18n 变得懒惰，让 vinext 构建工作由@hyoban 在 https://github.com/langgenius/dify/pull/32917 中进行
* chore: add dependency groups to Dependabot config by @nightcityblade in https://github.com/langgenius/dify/pull/32721
* 修复（api）：解决https://github.com/langgenius/dify/pull/32771中@Br1an67的OpenTelemetry直方图类型不匹配问题
* 测试：将 test_dataset_service_create_dataset SQL 测试迁移到 @KinomotoMio 在 https://github.com/langgenius/dify/pull/32538 中的 testcontainers
* fix(web): align dropdown-menu styles with Figma design by @lyzno1 in https://github.com/langgenius/dify/pull/32922
*修复：在https://github.com/langgenius/dify/pull/32918中通过@lyzno1切换主题时保持帐户下拉菜单打开
* 杂务：修复 @hyoban 在 https://github.com/langgenius/dify/pull/32928 中的 vinext 的加载环境和树摇动
* 测试（工作流）：通过https://github.com/langgenius/dify/pull/32932中的@CodingOnStar为工作流存储切片添加单元测试
* refactor: migrate workflow onboarding modal to base dialog by @lyzno1 in https://github.com/langgenius/dify/pull/32915
* feat: redis connection support max connections by @fatelei in https://github.com/langgenius/dify/pull/32935
* 重构：https://github.com/langgenius/dify/pull/32900 中的@fatelei 人工输入节点解耦数据库
* feat: support redis xstream by @fatelei in https://github.com/langgenius/dify/pull/32586
* feat: replace db.session with db_session_with_containers by @RenzoMXD in https://github.com/langgenius/dify/pull/32942
* 重构（web）：将按钮迁移到 https://github.com/langgenius/dify/pull/32941 中 @lyzno1 焦点可见的基本 UI
* feat(web)：在 https://github.com/langgenius/dify/pull/32933 中添加 @lyzno1 的带有应用程序卡迁移示例的基本 AlertDialog
* perf(api)：在https://github.com/langgenius/dify/pull/32944中通过@QuantumGhost查询消息时利用message_workflow_run_id_idx
* 修复（api）：将企业默认工作空间连接与 @lin-snow 在 https://github.com/langgenius/dify/pull/32938 中创建的个人工作空间分离
* 重构：不导入 i18n 资源 json 来通过 @hyoban 在 https://github.com/langgenius/dify/pull/32947 中分割块
* refactor: document extract node decouple ssrf_proxy by @fatelei in https://github.com/langgenius/dify/pull/32949
* chore: refine oRPC contract-first skill guidance by @lyzno1 in https://github.com/langgenius/dify/pull/32955
* 测试（工作流程）：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/32958 中添加全面的钩子单元测试和重构测试基础设施（第 3 部分）
* chore: drop pwa with serwist by @hyoban in https://github.com/langgenius/dify/pull/32838
* chore: clean up sw file by @hyoban in https://github.com/langgenius/dify/pull/32973
* 杂务：在 https://github.com/langgenius/dify/pull/32996 中为 @hyoban 添加 vinext 的反应刷新插件
* test: migrate duplicate_document_indexing_task SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32540
* 杂务：将覆盖迁移 ESLint 规则扩展到 https://github.com/langgenius/dify/pull/33001 中的 @lyzno1 的弹出框、下拉菜单、对话框
* chore(deps): bump fickling from 0.1.8 to 0.1.9 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32999
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/32998 中的 @dependabot[bot] 将 /api 中的 authlib 从 1.6.6 提升到 1.6.7
* chore(deps): bump immutable from 5.1.4 to 5.1.5 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/33000
* test: migrate test_document_service_rename_document SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32542
* 杂务：在 https://github.com/langgenius/dify/pull/32995 中 @caoergou 在 AGENTS.md 中添加 TypedDict 相关提示
* 杂务：i18n hmr 支持，通过 @hyoban 在 https://github.com/langgenius/dify/pull/32997 中修复应用程序上下文的 hmr
* 重构：通过https://github.com/langgenius/dify/pull/33019中的@CodingOnStar简化AppInitializer组件中的oauthNewUser状态处理
* refactor(dify_graph): introduce run_context and delegate child engine creation by @WH-2099 in https://github.com/langgenius/dify/pull/32964
* test(workflow): add validation tests for workflow and node component rendering part 3 by @CodingOnStar in https://github.com/langgenius/dify/pull/33012
* fix: workflow canvas sync by @zxhlyh in https://github.com/langgenius/dify/pull/33030
* 重构：@hyoban 在 https://github.com/langgenius/dify/pull/33033 中溢出上下文以获得更好的 hmr
* chore: prevent Storybook crash caused by vite-plugin-inspect by @lyzno1 in https://github.com/langgenius/dify/pull/33039
* 壮举：在https://github.com/langgenius/dify/pull/32616中@Nov1c444为app_id与created_at和updated_at的对话添加部分索引
*壮举：204 http状态代码不返回@fatelei在https://github.com/langgenius/dify/pull/33023中的内容
* 修复：修复https://github.com/langgenius/dify/pull/33028中@fatelei检查workflow_run的问题
* test: migrate test_dataset_service_delete_dataset SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32543
* 杂务（api）：通过 @lavish0000 在 https://github.com/langgenius/dify/pull/33056 中更新 Python 类型检查器版本
* chore(deps): bump dompurify from 3.3.0 to 3.3.2 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/33062
* 测试：将数据集权限服务SQL测试迁移到https://github.com/langgenius/dify/pull/32546中@KinomotoMio的testcontainers
* 杂务（deps）：https://github.com/langgenius/dify/pull/33064 中的 @dependabot[bot] 在 /api 中将降价从 3.5.2 降价到 3.8.1
* 重构（api）：通过https://github.com/langgenius/dify/pull/32925中的@statxc将TypedDict定义添加到models/model.py中
* 杂务：在https://github.com/langgenius/dify/pull/33059中添加@BeautyyuYanli的本地pyrefly排除工作流程
* fix(api): return inserted ids from Chroma and Clickzetta add_texts by @lavish0000 in https://github.com/langgenius/dify/pull/33065
* fix: show citations in advanced chat apps by @kurokobo in https://github.com/langgenius/dify/pull/32985
*修复：https://github.com/langgenius/dify/pull/32936中@hjlarry在HITL节点后对话变量意外重置
* 修复（i18n）：https://github.com/langgenius/dify/pull/33067 中@Copilot 将“disabled”从医学术语正确法语翻译为 UI 相关术语
* 修复（类型检查）：通过 https://github.com/langgenius/dify/pull/33071 中的 @hjlarry 解决应用程序数据集连接更新处理程序中缺失属性的问题
* 杂务：在 https://github.com/langgenius/dify/pull/33075 中添加@nite-knite 的支持电子邮件环境
* feat(task)：通过 https://github.com/langgenius/dify/pull/32972 中的 @euxx 将摘要生成隔离到专用 dataset_summary 队列
* 杂务：在https://github.com/langgenius/dify/pull/33078中使用react-grab替换@hyoban的code-inspector-plugin
* 修复(api): 修复https://github.com/langgenius/dify/pull/32851中@QuantumGhost恢复时workflow_runs.started_at被覆盖的问题
* perf：不再记录https://github.com/langgenius/dify/pull/33086中@RockChinQ自动升级的安装计数
* 杂务：在 https://github.com/langgenius/dify/pull/33088 中带回 @hyoban 的代码检查器插件和代理
* 杂务：修复 @nite-knite 在 https://github.com/langgenius/dify/pull/33093 中的帐户下拉测试
* 测试：提高 @saumyatalwani 在 https://github.com/langgenius/dify/pull/32916 中对某些测试文件的覆盖率
* feat(toast)：在https://github.com/langgenius/dify/pull/33096中通过@CodingOnStar添加IToastProps类型导入以增强类型安全性
* 重构：在 https://github.com/langgenius/dify/pull/32732 中直接传递 KnowledgeConfiguration，而不是 @pepsile 的 dict
* 功能：在 https://github.com/langgenius/dify/pull/32990 中添加 @hj24 的导出应用程序消息
* 壮举：通过 @Stormhand 在 https://github.com/langgenius/dify/pull/32242 中将文件添加到消息结尾 pr32019
* 杂务：在https://github.com/langgenius/dify/pull/33116中通过@CoralGarden52将TypedDict相关提示添加到api/AGENTS.md
* 修复（网页）：稳定 Dayjs 时区测试，以防止 @lyzno1 在 https://github.com/langgenius/dify/pull/33134 中进行 DST 转换
* 测试：https://github.com/langgenius/dify/pull/33052 中的@akashseth-ifp 保留标头组件并增加分支覆盖率
* 重构：在 https://github.com/langgenius/dify/pull/33121 中使用 thread.Timer 代替 @fatelei 的 time.sleep
* 测试：https://github.com/langgenius/dify/pull/32056 中@rajatagarwal-oss 的controllers.common 模块的单元测试用例
* 修复：处理 @yijiaquan 在 https://github.com/langgenius/dify/pull/33131 上导出的 DOCX ZIP 条目中的反斜杠路径分隔符...(#33129)
* 杂务：更新 vinext、代理、删除 https://github.com/langgenius/dify/pull/33142 中 @hyoban 的词汇中的 Prism
* fix: fix metadata filter condition not extract from {{}} by @fatelei in https://github.com/langgenius/dify/pull/33141
* feat(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/33125 中添加上下文菜单原语和下拉链接项
* fix(web): fix tool item text not vertically centered in block selector by @lyzno1 in https://github.com/langgenius/dify/pull/33148
* refactor: deduplicate legacy section mapping in ConfigHelper by @Olexandr88 in https://github.com/langgenius/dify/pull/32715
* feat: keep connections when change node by @hjlarry in https://github.com/langgenius/dify/pull/31982
* 修复：workflow_as_tool 不适用于 @hjlarry 在 https://github.com/langgenius/dify/pull/32554 中输入的 json
* feat: when copy/paste multi nodes not require reconnect them by @hjlarry in https://github.com/langgenius/dify/pull/32631
* 修复：修复 https://github.com/langgenius/dify/pull/33031 中 @fatelei 允许的句柄值为 none
* feat: support relative mode for message clean command by @hj24 in https://github.com/langgenius/dify/pull/32834
* 文档：在https://github.com/langgenius/dify/pull/33077中@haosenwang1018的自述文件中一致地使用docker compose命令
* refactor: reuse redis connection instead of create new one by @fatelei in https://github.com/langgenius/dify/pull/32678
* 测试：通过@cryptus-neoxys在https://github.com/langgenius/dify/pull/32150中改进controllers.web的单元测试
* refactor: file saver decouple db engine and ssrf proxy by @fatelei in https://github.com/langgenius/dify/pull/33076
* 修复：@hjlarry 在 https://github.com/langgenius/dify/pull/33154 中不显示停止响应图标
* 测试：https://github.com/langgenius/dify/pull/32179 中 @rajatagarwal-oss 的 console.datasets 模块的单元测试用例
* test: unit test case for controllers.console.workspace module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32181
* ci：忽略@hyoban 在 https://github.com/langgenius/dify/pull/33161 中的一些重大更新
* ci：在 https://github.com/langgenius/dify/pull/33167 中 @hyoban 更新中忽略 ky 和 tailwind-merge
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33163 中对 /web 中的故事书组进行 7 次更新
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33168 中对 /web 中的 eslint-group 组进行 5 次更新
* 杂务（deps）：在 https://github.com/langgenius/dify/pull/33170 中通过 @dependabot[bot] 进行 55 次更新，在 1 个目录中碰撞 npm 依赖项组
* ci：更新操作版本，通过 https://github.com/langgenius/dify/pull/33177 中的@hyoban 的复合操作重用工作流程
* 测试：https://github.com/langgenius/dify/pull/32247 中@rajatagarwal-oss 的controllers.console.app 模块的单元测试用例
* 重构：https://github.com/langgenius/dify/pull/33166中@fatelei工具节点解耦数据库
* 修复(web): https://github.com/langgenius/dify/pull/33173中@JzoNgKVO完成注释回复后正确的响应状态
* 测试：通过 @cryptus-neoxys 在 https://github.com/langgenius/dify/pull/32587 中添加 api core.trigger 的 UT
* 测试：https://github.com/langgenius/dify/pull/32186 中 @rajatagarwal-oss 的 console.explore 和标签模块的单元测试用例
* 功能：为数据集文档添加批量下载（ZIP 格式），并为单个文档下载添加签名 URL。作者：https://github.com/langgenius/dify/pull/33100 中的 @ZeroZ-lab
* 文档：由 @vincentkoc 在 https://github.com/langgenius/dify/pull/32336 中更新 Opik 集成文档
* 壮举：https://github.com/langgenius/dify/pull/32300 中 @agent-steven 在嵌入式聊天中可配置 Enter/Shift+Enter 发送行为 (#32295)
* 修复：https://github.com/langgenius/dify/pull/32662 中 @stakeswky 的人工输入节点暂停/恢复后，复制按钮保持禁用状态
* 壮举：通过 https://github.com/langgenius/dify/pull/33058 中的 @Desel72 改进 Celery Worker 查询的 SQL 注释上下文
* 修复：在 https://github.com/langgenius/dify/pull/33182 中为 @bgondell 的 WaterCrawl 数据源使用正确的plugin_id
* 杂务（ui）：通过@lyzno1在https://github.com/langgenius/dify/pull/33185中提高覆盖基元z索引以实现遗留共存
* 测试：为消息服务实用程序添加新的单元测试，获取消息、反馈和保留服务。通过 @mahammadasim 在 https://github.com/langgenius/dify/pull/33169
* 修复：防止 div 嵌套在 p 内，用于 https://github.com/langgenius/dify/pull/32419 中 @tysoncung 的内联 Markdown 图像的水合警告
* 测试：@rajatagarwal-oss 在 https://github.com/langgenius/dify/pull/32630 中对 core.rag 模块进行单元测试
* 壮举：@wylswz 在 https://github.com/langgenius/dify/pull/33158 中预卸载企业插件
* 修复：修复 https://github.com/langgenius/dify/pull/33189 中 @fatelei 的 request.metadata_model_config 参数检查
* 重构：使用 `generate_valid_password` 帮助程序在 https://github.com/langgenius/dify/pull/33192 中通过 @ZeroZ-lab 创建测试帐户密码
* 修复：确保外部知识 API 密钥更新由 @Saber-youMianJing 保留在 https://github.com/langgenius/dify/pull/33188 中
*修复：嵌套跨度和轨迹；作者：@aadereiko，https://github.com/langgenius/dify/pull/33049
*修复：在https://github.com/langgenius/dify/pull/32287中@hizhujianfeng在非安全（HTTP）上下文中复制到clipboard失败
* 重构：https://github.com/langgenius/dify/pull/32971 中 @WTW0313 将 React Markdown 替换为 Streamdown
* ci：在 https://github.com/langgenius/dify/pull/33193 中添加防倾斜 GitHub 操作以检测 @elliotllliu 的低质量 AI PR
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33198 中对 /web 中的故事书组进行 7 次更新
* 杂务：通过 https://github.com/langgenius/dify/pull/33201 中的 @hyoban 将 ky 更新为 1.14.3
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33209 中对 /web 中的 eslint-group 组进行 2 次更新
* 杂务（deps）：https://github.com/langgenius/dify/pull/33197 中 @dependabot[bot] 在 /web 中从 4.56.0 到 4.59.0 的凹凸汇总
* chore: split commands by domain by @hjlarry in https://github.com/langgenius/dify/pull/33085
* 杂务：将 vinext 切换到 npm，通过 @hyoban 在 https://github.com/langgenius/dify/pull/33234 中从 dependentabot 中删除 npm
* test: add test for api core datasource by @mahammadasim in https://github.com/langgenius/dify/pull/32414
* 修复（ci）：在 https://github.com/langgenius/dify/pull/33236 中通过 @RogueTex 将 close-pr 和 failure 标签添加到 anti-slop 工作流程中
* chore(deps): bump pypdf from 6.7.5 to 6.8.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/33238
* 修复：修复@fatelei 在 https://github.com/langgenius/dify/pull/33241 中测试失败的问题
* fix: fix parse mailto / http link in table cell by @fatelei in https://github.com/langgenius/dify/pull/33224
* feat: https://github.com/langgenius/dify/pull/33244 中 @zyssyz123 的插件任务来源
* 修复：PromptEditor 留下一个悬而未决的模糊计时器，该计时器会在 https://github.com/langgenius/dify/pull/33253 中触发 @ZeroZ-lab 的 Vitest 未处理错误
* chore: remove optimize standalone script by @hyoban in https://github.com/langgenius/dify/pull/33256
* 杂务：更新 https://github.com/langgenius/dify/pull/33261 中 @hyoban 构建 docker 的脚本
* 杂务：禁用一些自动修复，禁用 https://github.com/langgenius/dify/pull/33265 中@hyoban 的 e18e 规则
* fix: use moderation modified inputs and query by @fatelei in https://github.com/langgenius/dify/pull/33180
* 修复：修复https://github.com/langgenius/dify/pull/33258中@fatelei提取的mcp工具参数
* 修复：https://github.com/langgenius/dify/pull/33260 中的 @hjlarry 在 HTTP 和 Webhook 中垂直居中的键值表头
* test: add tests for some files in services module by @saumyatalwani in https://github.com/langgenius/dify/pull/32583
* 重构（avatar）：通过https://github.com/langgenius/dify/pull/33268中的@lyzno1迁移到具有记录大小变体的基本UI基元
* 杂务：修复 @hyoban 在 https://github.com/langgenius/dify/pull/33277 中的 dependentabot 警报
* 修复：https://github.com/langgenius/dify/pull/33276 中 @hjlarry 的主要 CI
* 测试：通过 @poojanInfocusp 在 https://github.com/langgenius/dify/pull/32866 中为某些服务添加单元测试
* refactor: move to modern monaco by @hyoban in https://github.com/langgenius/dify/pull/32966
* 杂务：跳过 @hyoban 在 https://github.com/langgenius/dify/pull/33287 中进行合并的预提交检查
* 重构（选择）：与https://github.com/langgenius/dify/pull/33286中@lyzno1的基本UI数据属性和Figma规范保持一致
* 壮举：@zyssyz123 在 https://github.com/langgenius/dify/pull/32192 中发出通知
* 壮举：https://github.com/langgenius/dify/pull/33255 中 @iamjoel 的站点消息支持
* chore: split /api dependabot groups by logical dependency category by @Copilot in https://github.com/langgenius/dify/pull/33297
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33301 中对 /api 中的 Flask 组进行 4 次更新
* chore(deps): bump the google group in /api with 5 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33304
* chore(deps): bump astral-sh/setup-uv from 7.3.1 to 7.4.0 in the github-actions-dependencies group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33303
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33302 中进行 2 次更新，在 /api 中碰撞 pydantic 组
* chore(deps): bump the google group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33299
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33298 中对 /api 中的烧瓶组进行 3 次更新
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33305 中进行 6 次更新，在 /api 中碰撞 llm 组
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/33306 中的 @dependabot[bot] 将数据库组 /api 中的 redis[hiredis] 要求从 ~=7.2.0 更新为 ~=7.3.0
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33315 中对 /api 中的存储组进行 7 次更新
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/33317 中的 @dependabot[bot] 将 llm 组中 /api 中的 mlflow-skinny 从 3.6.0 提升到 3.10.1 跨 1 个目录
*杂务（deps）：将opentelemetry-propagator-b3从1.28.0撞到opentelemetry组中/api中的1.40.0，由@dependabot[bot]在https://github.com/langgenius/dify/pull/33308中
* 重构：https://github.com/langgenius/dify/pull/32780中@BeautyyuYanli统一NodeConfigDict.data和BaseNodeData
* chore(deps-dev): bump the dev group across 1 directory with 18 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33322
* 杂务（deps）：在 https://github.com/langgenius/dify/pull/33319 中通过@dependabot[bot]在 1 个目录中碰撞 python-packages 组并进行 13 个更新
* ci：恢复 https://github.com/langgenius/dify/pull/33331 中 @asukaminato0721 的“chore(deps)：在 1 个目录中碰撞 python-packages 组，有 13 个更新”
* test: improve unit tests for controllers.inner_api by @cryptus-neoxys in https://github.com/langgenius/dify/pull/32203
* test: unit test cases for core.callback, core.base, core.entities module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32471
* test: unit test cases core.agent module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32474
* fix: allow line breaks when a field value overflows due to excessive length by @douxc in https://github.com/langgenius/dify/pull/33339
* 测试：https://github.com/langgenius/dify/pull/32482 中 @rajatagarwal-oss 的 core.app.apps 模块的单元测试用例
* 测试：通过 @cryptus-neoxys 在 https://github.com/langgenius/dify/pull/32588 中添加 api/services.plugin 的 UT
* test: unit test cases for core.variables, core.plugin, core.prompt module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32637
* 测试：在 https://github.com/langgenius/dify/pull/32645 中添加 @cryptus-neoxys 为 api/服务推荐应用程序、工具、工作流程添加 UT
* test: add test for core extension, external_data_tool and llm generator by @mahammadasim in https://github.com/langgenius/dify/pull/32468
* 测试：由 @mahammadasim 在 https://github.com/langgenius/dify/pull/32478 中添加核心日志记录和核心 mcp
* 测试：@mahammadasim 在 https://github.com/langgenius/dify/pull/32512 中添加了对核心令牌缓冲内存和模型运行时的测试
* test: Unit test cases for core.tools module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32447
* chore: update vinext by @hyoban in https://github.com/langgenius/dify/pull/33347
* 重构（开关）：https://github.com/langgenius/dify/pull/33345 中 @lyzno1 的带有加载/骨架变体的基本 UI 迁移
* 测试：通过 @saumyatalwani 在 https://github.com/langgenius/dify/pull/33207 中改进库中某些文件的覆盖参数
* test: improve coverage for some files by @saumyatalwani in https://github.com/langgenius/dify/pull/33218
* 测试：@mahammadasim 在 https://github.com/langgenius/dify/pull/32639 中添加了对后端 core.ops 模块的测试
* 测试：在 https://github.com/langgenius/dify/pull/32893 中添加了对操作、摘要、向量、网站和 ji 服务的测试...由 @mahammadasim
* test: added test cases for core.workflow module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/33126
* test: refactor mock implementation in markdown component tests by @CodingOnStar in https://github.com/langgenius/dify/pull/33350
* chore: use tsconfigPaths for vinext by @hyoban in https://github.com/langgenius/dify/pull/33363
* fix: The HTTP Request node panel supports line break and overflow handling for variable values by @douxc in https://github.com/langgenius/dify/pull/33359
* fix: test_get_credentials_and_config_selects_plugin_id_and_key_api_ke… by @fatelei in https://github.com/langgenius/dify/pull/33361
* 杂务（网络）：在 https://github.com/langgenius/dify/pull/33309 中禁用 @Copilot 的 i18next 支持通知
* 杂务：添加开发代理服务器，通过 @hyoban 在 https://github.com/langgenius/dify/pull/33371 中更新 deps
* 杂务：删除https://github.com/langgenius/dify/pull/33378中@majiayu000未使用的WEAVIATE_GRPC_ENABLED配置选项
* 壮举（工作流程）：在 https://github.com/langgenius/dify/pull/33391 中通过 @lyzno1 添加带有删除支持的边缘上下文菜单
* 杂务：在 https://github.com/langgenius/dify/pull/33394 中添加 @iamjoel 的站点内消息的跟踪信息
* 修复：当 https://github.com/langgenius/dify/pull/33373 中 @gambletan 的 user_id 为 None 或空字符串时，with_debug_recipient() 会静默删除调试电子邮件
* 测试：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/33395 中强制执行 Web 测试中的应用程序/组件覆盖范围门
* 测试：[重构/杂务] 使用 Testcontainers 进行 sql 测试 #32454 by @asukaminato0721 in https://github.com/langgenius/dify/pull/32460
*杂务（deps）：由https://github.com/langgenius/dify/pull/33380中的@dependabot[bot]在/api中将orjson从3.11.4撞到3.11.6
* 杂务：在 https://github.com/langgenius/dify/pull/33407 中使用 @hyoban 的 vite plus
* 重构（web）：拆分共享文本生成并在 https://github.com/langgenius/dify/pull/33408 中添加 @CodingOnStar 的高覆盖率测试
* 修复（api）：允许@yevanmore在https://github.com/langgenius/dify/pull/33364上传的文件名中使用标点符号
* 修复：在https://github.com/langgenius/dify/pull/33403中由@hjlarry正确检测存档工作流程运行恢复中所需的列
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/33437中的@dependabot[bot]将/api中的pyjwt从2.11.0提升到2.12.0
* 杂务（deps）：https://github.com/langgenius/dify/pull/33436 中 @dependabot[bot] 在 /api 中从 0.1.9 到 0.1.10 的碰撞变化
*重构：用mapped_column中的EnumText替换sa.String，以获取类型s…由@tmimmanuel在https://github.com/langgenius/dify/pull/33332中
* 重构（测试）：使用枚举值而不是 https://github.com/langgenius/dify/pull/33441 中的 @nielskaspers 的状态字段字符串文字
* 重构：用 https://github.com/langgenius/dify/pull/33448 中 @tmimmanuel 的 EnumText 2 替换剩余的 sa.String
* 重构（工作流程）：通过https://github.com/langgenius/dify/pull/33431中的@WH-2099将代理节点移回核心工作流程
* 重构(api)：通过@laipz8200在https://github.com/langgenius/dify/pull/33445中移动工作流知识节点和触发节点
* 修复：在 https://github.com/langgenius/dify/pull/33424 中保留 @majiayu000 导出的 DSL 中的自定义图标
* 修复：在 https://github.com/langgenius/dify/pull/33398 中通过 @RickDamon 将 doc_type 添加到 Weaviate 属性和默认 Vector 属性
* 修复：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/33447 中更新 Docker 桌面的 INTERNAL_FILES_URL 示例默认值
* 壮举：将 Hologres 添加为 https://github.com/langgenius/dify/pull/32830 中 @TimothyDing 的 VDB 和全文数据库选择
* 修复：https://github.com/langgenius/dify/pull/33429 中 @tysoncung 将图像下载失败日志从错误降级为警告
*修复（api）：解决服务API中的类型错误将@mahmoodhamdi包装在https://github.com/langgenius/dify/pull/33467中的测试
* 壮举：@laipz8200 在 https://github.com/langgenius/dify/pull/33458 中从默认模型选择中删除 GPT-4 特殊外壳
* 修复：https://github.com/langgenius/dify/pull/33421 中 @mango766 使用参数化查询来防止向量存储中的 SQL 注入
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/33487中的@dependabot[bot]将数据库组中/api中的sqlalchemy从2.0.44提升到2.0.48
* 重构：https://github.com/langgenius/dify/pull/33400 中 @fatelei 的 llm 解耦代码执行器模块
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33488 中进行 2 次更新，对 /api 中的存储组进行碰撞
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33485 中对 github-actions-dependencies 组进行 4 次更新
* 杂务（deps）：由https://github.com/langgenius/dify/pull/33480中的@dependabot[bot]将llm组中/api中的litellm从1.82.1提升到1.82.2
* 杂务（deps-dev）：通过 https://github.com/langgenius/dify/pull/33482 中的 @dependabot[bot] 将开发组 /api 中的 faker 要求从 ~=40.8.0 更新为 ~=40.11.0
* 杂务：在 https://github.com/langgenius/dify/pull/32849 中为 @hjlarry 添加 human_input_forms 查询模式的索引
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33481 中进行 2 次更新，对 /api 中的存储组进行碰撞
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/33491 中的 @dependabot[bot] 进行 2 次更新，将 llm 组跨越 1 个目录
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33484 中对 /api 中的 python-packages 组进行 13 次更新
* ci: 简化Docker文件中的nltk数据下载，由@asukaminato0721在https://github.com/langgenius/dify/pull/33495中进行
* 修复：https://github.com/langgenius/dify/pull/33044 中 @GareArc 的企业 API 错误处理和许可证强制执行
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/33483 中的 @dependabot[bot] 将 google-auth 从 2.49.0 提升到 Google 群组 /api 中的 2.49.1
* 壮举：通过 @lcedaw 在 https://github.com/langgenius/dify/pull/27910 中添加 weaviate client 单实例
* 重构（web）：通过 https://github.com/langgenius/dify/pull/33456 中的 @lyzno1 整合查询/突变指导并弃用基于使用的包装器
* 杂务（deps-dev）：在https://github.com/langgenius/dify/pull/33502中@dependabot[bot]通过15个更新在1个目录中碰撞vdb组
* 杂务：将草稿变量更改为https://github.com/langgenius/dify/pull/33066中@hjlarry范围内的用户
* 修复：修复https://github.com/langgenius/dify/pull/33511中@fatelei的weaviate_vector测试失败的问题
* feat(diff-coverage)：通过@CodingOnStar在https://github.com/langgenius/dify/pull/33514中实现更改组件的覆盖率分析
* 重构(web)：通过https://github.com/langgenius/dify/pull/33499中的@CodingOnStar分割文本生成结果流并提高覆盖率
* 杂务：删除 https://github.com/langgenius/dify/pull/33512 中 @hyoban 的下一个字体
* feat(diff-coverage)：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/33516 中增强多行语句和分支的覆盖率报告
* 杂务：兼容的resource_metadata返回没有方案由https://github.com/langgenius/dify/pull/33506中的@fatelei
* chore: remove next img by @hyoban in https://github.com/langgenius/dify/pull/33517
* 壮举：将 Markdown 渲染应用于 HITL 电子邮件，通过 https://github.com/langgenius/dify/pull/32305 中的 @Blackoutta 清理电子邮件主题和正文
* 测试：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/33523 中将 Web diff 覆盖范围限制为当前推送范围
* 杂务：将 Docker 中的插件守护程序版本更新为 0.5.4-local 在 https://github.com/langgenius/dify/pull/33526 中由 @QuantumGhost 撰写文件
* chore: fix dep alerts by @hyoban in https://github.com/langgenius/dify/pull/33527
* 杂务（api）：通过https://github.com/langgenius/dify/pull/33528中的@QuantumGhost重命名配置`EVENT_BUS_REDIS_CLUSTERS`
* 修复(web): 通过https://github.com/langgenius/dify/pull/33520中的@lyzno1将InputNumber迁移到Base UI NumberField
* 重构（自定义）：通过https://github.com/langgenius/dify/pull/33531中的@CodingOnStar重新组织Web应用程序品牌模块并提高覆盖率阈值
* 杂务（deps-dev）：在https://github.com/langgenius/dify/pull/33525中@dependabot[bot]通过19个更新将开发组跨越1个目录
* 重构(api)：通过https://github.com/langgenius/dify/pull/33538中的@laipz8200简化响应会话资格
* 琐事：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/33533 中更新 Web 测试工作流程中的覆盖率摘要检查
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/33544中的@dependabot[bot]将/api中的authlib从1.6.7提升到1.6.9
* 重构(api)：在https://github.com/langgenius/dify/pull/33550中@statxc将数据集模型中的dict/Mapping替换为TypedDict
* 修复(web): https://github.com/langgenius/dify/pull/33553中@JzoNgKVO的数据集选择和分数阈值导致知识检索节点页面崩溃
*修复：在https://github.com/langgenius/dify/pull/33557中通过@lyzno1提高块选择器覆盖z索引
* 重构：在 https://github.com/langgenius/dify/pull/33540 中使用@hyoban 的吊装现代摩纳哥
* 重构（api）：用https://github.com/langgenius/dify/pull/33562中的@statxc在trigger.py和workflow.py中用TypedDict替换dict/Mapping
* 测试（web）：忽略https://github.com/langgenius/dify/pull/33564中@CodingOnStar在差异覆盖范围内的默认分支合并提交
* 杂务：恢复 #33540 #32966 by @hyoban in https://github.com/langgenius/dify/pull/33566
* 壮举：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/33143 中添加指标来清理消息和工作流运行任务
* 修复（web）：在 https://github.com/langgenius/dify/pull/33552 中由 @laipz8200 暂停后保留公共工作流程 SSE 重新连接
## 新贡献者
* @razerzhang 在 https://github.com/langgenius/dify/pull/31843 中做出了第一个贡献
* @saumyatalwani 在 https://github.com/langgenius/dify/pull/32201 中做出了第一个贡献
* @poojanInfocusp made their first contribution in https://github.com/langgenius/dify/pull/32154
* @Haohao-end 在 https://github.com/langgenius/dify/pull/32342 中做出了第一个贡献
* @apoorvdarshan 在 https://github.com/langgenius/dify/pull/32386 中做出了第一个贡献
* @akashseth-ifp 在 https://github.com/langgenius/dify/pull/32281 中做出了第一个贡献
* @mahammadasim 在 https://github.com/langgenius/dify/pull/32283 中做出了第一个贡献
* @tysoncung made their first contribution in https://github.com/langgenius/dify/pull/32461
* @Hypertension42 made their first contribution in https://github.com/langgenius/dify/pull/32490
* @J0su3Code made their first contribution in https://github.com/langgenius/dify/pull/32493
* @stakeswky 在 https://github.com/langgenius/dify/pull/32498 中做出了第一个贡献
* @rajatagarwal-oss made their first contribution in https://github.com/langgenius/dify/pull/32057
* @cryptus-neoxys made their first contribution in https://github.com/langgenius/dify/pull/32073
* @Pandaaaa906 在 https://github.com/langgenius/dify/pull/32560 中做出了第一个贡献
* @ajuijas 在 https://github.com/langgenius/dify/pull/32510 中做出了第一个贡献
* @toroleapinc 在 https://github.com/langgenius/dify/pull/32653 中做出了第一个贡献
* @haku-ink 在 https://github.com/langgenius/dify/pull/32636 中做出了第一个贡献
* @tda1017 在 https://github.com/langgenius/dify/pull/32701 中做出了第一个贡献
* @nielskaspers made their first contribution in https://github.com/langgenius/dify/pull/32718
* @slegarraga made their first contribution in https://github.com/langgenius/dify/pull/32768
* @Br1an67 made their first contribution in https://github.com/langgenius/dify/pull/32772
* @akkoaya 在 https://github.com/langgenius/dify/pull/31528 中做出了第一个贡献
* @hwb96 在 https://github.com/langgenius/dify/pull/32778 中做出了第一个贡献
* @stablegenius49 在 https://github.com/langgenius/dify/pull/32813 中做出了第一个贡献
* @Echo0ff 在 https://github.com/langgenius/dify/pull/32828 中做出了第一个贡献
* @nightcityblade 在 https://github.com/langgenius/dify/pull/32721 中做出了第一个贡献
* @RenzoMXD 在 https://github.com/langgenius/dify/pull/32942 中做出了第一个贡献
* @caoergou 在 https://github.com/langgenius/dify/pull/32995 中做出了第一个贡献
* @lavish0000 made their first contribution in https://github.com/langgenius/dify/pull/33056
* @statxc 在 https://github.com/langgenius/dify/pull/32925 中做出了第一个贡献
* @pepsile 在 https://github.com/langgenius/dify/pull/32732 中做出了第一个贡献
* @Stormhand 在 https://github.com/langgenius/dify/pull/32242 中做出了第一个贡献
* @CoralGarden52 在 https://github.com/langgenius/dify/pull/33116 中做出了第一个贡献
* @Olexandr88 在 https://github.com/langgenius/dify/pull/32715 中做出了第一个贡献
* @haosenwang1018 在 https://github.com/langgenius/dify/pull/33077 中做出了第一个贡献
* @vincentkoc 在 https://github.com/langgenius/dify/pull/32336 中做出了第一个贡献
* @agent-steven 在 https://github.com/langgenius/dify/pull/32300 中做出了第一个贡献
* @Desel72 made their first contribution in https://github.com/langgenius/dify/pull/33058
* @bgondell 在 https://github.com/langgenius/dify/pull/33182 中做出了第一个贡献
* @Saber-youMianJing 在 https://github.com/langgenius/dify/pull/33188 中做出了第一个贡献
* @aadereiko 在 https://github.com/langgenius/dify/pull/33049 中做出了第一个贡献
* @hizhujianfeng 在 https://github.com/langgenius/dify/pull/32287 中做出了第一个贡献
* @elliotllliu made their first contribution in https://github.com/langgenius/dify/pull/33193
* @RogueTex 在 https://github.com/langgenius/dify/pull/33236 中做出了第一个贡献
* @gambletan 在 https://github.com/langgenius/dify/pull/33373 中做出了第一个贡献
* @tmimmanuel made their first contribution in https://github.com/langgenius/dify/pull/33332
* @RickDamon made their first contribution in https://github.com/langgenius/dify/pull/33398
* @TimothyDing 在 https://github.com/langgenius/dify/pull/32830 中做出了第一个贡献
* @mahmoodhamdi made their first contribution in https://github.com/langgenius/dify/pull/33467
* @mango766 made their first contribution in https://github.com/langgenius/dify/pull/33421

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.13.0...1.13.1

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.13.1` · 📅 发布：2026-03-17 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.13.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
