---
title: "dify 1.11.3"
project: "dify"
repo: "langgenius/dify"
tag: "1.11.3"
version: "1.11.3"
published: "2026-01-13"
type: "patch"
lang: "zh"
---

# dify 1.11.3

## 🚀 v1.11.3 有什么新功能？

Our latest release, v1.11.3, brings to you a slew of bug fixes and features focused on performance, functionality, and user experience.我们来看看发生了什么变化：

### 🎬 新功能

- **MCP 工具增强**：添加了对 `embeddedResource` 的支持，并使 MCP 工具直接显示，以便 @IthacaDream 和 @fatelei 在 #30261 和 #30019 中更快地访问。
- **Batch Operations**: Introduced re-index operation in document batch operations by @fatelei in #30275.
- **代理和工作流程更新**：新的 AgentMaxIterationError 和应用程序模式检查的增强功能使工作流程和代理更加强大（@fatelei）。
- **OAuth Integration**: Frontend login now supports `oauth_new_user` flag by @zyssyz123 in #30370.
- **PDF Extraction**: Improved RAG extractor to support image extraction from PDFs by @yangzq50 in #30399.
- **Storage and Archive**: Added archive storage client and config settings by @hjlarry in #30422.
- **Translation and Internationalization**: Added initial RSC support for translations for a global audience by @hyoban in #30596.

### 🛠️ 错误修复

- **Redis and Cache**: Used pipelines to optimize Redis cache deletions, enhancing speed and reliability by @fatelei in #30159.
- **UI/UX 修复**：从防止由于权限错误导致页面崩溃到修复轻弹按钮大小，多个贡献者已解决了多个与 UI 相关的问题。
- **Data Operations**: Fixed dataset access errors and improved error handling in batch operations by @zhaobingshuang and others.
- **Performance**: Released runtime state references under high load to prevent potential memory leaks by @SherlockShemol in #30236.
- **Security**: Rectified CORS and SSL issues that could've affected bot integrations and Celery operations.
- **Internationalization**: Korean translations and content were updated for accuracy by @sangyun-han in #30347.

### 🔧 幕后花絮

- **CI/CD 和构建增强**：@bowenliang123 和 @hyoban 增强了 GitHub 操作和构建流程，以提高可靠性并减少停机时间。
- **代码和查询优化**：解决了工作流程和 API 中 SQL 查询和数据处理效率低下的问题，提高了整体稳定性。

此版本强调简化后端操作、强化安全性并丰富用户界面，以提供更流畅、更高效的体验。 Thank you to all contributors for refining Dify and pushing our platform forward! 🛠️💡

---

## 升级指南

### Docker 组合部署

1. Back up your customized docker-compose YAML file (optional)

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
> 请改用以下命令。详情请阅读这篇https://github.com/langgenius/dify/issues/28706
> ```bash
>    docker compose --profile postgresql up -d
>    ```

### 源代码部署

1. Stop the API server, Worker, and Web frontend Server.

2.从release分支获取最新代码：

   ```bash
   git checkout 1.11.3
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
* perf: 使用管道删除 https://github.com/langgenius/dify/pull/30159 中 @fatelei 的 redis 缓存
* 修复：https://github.com/langgenius/dify/pull/30164 中 @iamjoel 更新会员列表权限导致页面崩溃
* 壮举（重构）：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/30162 中介绍 Dify 中组件重构的全面指南和工具
* 修复：https://github.com/langgenius/dify/pull/30107中的@fatelei先验证然后保存到数据库
* 修复：通过 https://github.com/langgenius/dify/pull/30171 中的 @hyoban 在服务器上加载 i18n
* chore: some test by @iamjoel in https://github.com/langgenius/dify/pull/30148
* 修复(web): 更正已删除的工具匹配使用provider_id而不是@majiayu000在https://github.com/langgenius/dify/pull/30138中的id
* 修复：https://github.com/langgenius/dify/pull/30128 中 @Pleasurecruise 添加透明边框以防止按钮大小闪烁
* 重构：https://github.com/langgenius/dify/pull/29847 中 @asukaminato0721 删除所有 reqparser 的一部分
* 修复：修复元数据过滤器在 https://github.com/langgenius/dify/pull/30174 中 @fatelei 重命名后无法保存的问题
* feat: 在https://github.com/langgenius/dify/pull/30019中通过@fatelei直接添加mcp工具显示
*壮举：允许@fatelei在https://github.com/langgenius/dify/pull/30086中配置NEXT_PUBLIC_BATCH_CONCURRENCY
* 修复（数据集）：数据集标签 service_api 错误“未找到数据集”（@zhaobingshuang 在 https://github.com/langgenius/dify/pull/30028 中）
* 重构：https://github.com/langgenius/dify/pull/29887 中的 @asukaminato0721 对 api/controllers/console/workspace/load_ba... 进行拆分更改
* 重构：https://github.com/langgenius/dify/pull/29889 中的 @asukaminato0721 对 api/controllers/console/explore/saved_mes… 进行拆分更改
* 重构：https://github.com/langgenius/dify/pull/29890 中 @asukaminato0721 对 api/controllers/console/explore/message.py 的拆分更改
* 琐事：通过https://github.com/langgenius/dify/pull/30191中的@fatelei绕过Azure PostgreSQL上的InsufficientPrivilege
* 杂务：@iamjoel 在 https://github.com/langgenius/dify/pull/30194 中对组件进行的一些测试
* 修复：在 https://github.com/langgenius/dify/pull/30206 中使用 @GareArc 的删除方法的查询参数
* 修复：修复 https://github.com/langgenius/dify/pull/30199 中 @fatelei 操作符中 DatasetRetrieval._process_metadata_filter_func 缺失的问题
* 修复：修复 https://github.com/langgenius/dify/pull/30207 中 @fatelei 缺失的问题
* 修复： https://github.com/langgenius/dify/pull/30210 中的 @JohnJyong 在多模式模式下检索测试和知识检索节点失败
* 测试（web）：通过@SherlockShemol在https://github.com/langgenius/dify/pull/30201中添加Avatar组件的单元测试
*修复：删除未使用的CSS样式并修复https://github.com/langgenius/dify/pull/30235中@WTW0313的HitTestingPage布局
* 杂务(web)：删除https://github.com/langgenius/dify/pull/30226中@sarxxt未使用的开发预览页面
* 修复：在 https://github.com/langgenius/dify/pull/30216 中添加 @Nov1c444 的 JSON RPC 请求类型保护
* 修复：合并 https://github.com/langgenius/dify/pull/30229 中@Mauis 的重复 InvokeRateLimitError 定义
* 修复：@NeatGuyCoding 在 https://github.com/langgenius/dify/pull/28177 中错误使用 redis 锁
* 杂务（claude-code）：通过https://github.com/langgenius/dify/pull/30265中的@lyzno1从旧版MCP配置迁移到官方插件系统
* 修复：修复https://github.com/langgenius/dify/pull/30250中@fatelei不更新自定义工具内容的问题
* 修复（api）：通过 https://github.com/langgenius/dify/pull/30242 中的 @NeatGuyCoding 修复凭证类型处理并重建订阅交易安全性
* 杂务（deps）：将调度程序从 /web 中的 0.26.0 提升到 0.27.0，由 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/30284 中实现
*杂务（deps）：将json修复从0.54.1到/api中的0.54.3，由https://github.com/langgenius/dify/pull/30285中的@dependabot[bot]
* 重构(web)：通过https://github.com/langgenius/dify/pull/30279中的@lyzno1迁移到统一的TanStack Devtools
* 修复：工作流程开始节点可选枚举参数按照 https://github.com/langgenius/dify/pull/30287 中 @hjlarry 的要求进行处理
* feat: 文档批量操作工具在https://github.com/langgenius/dify/pull/30275中添加@fatelei的重新索引操作
* 杂务（sdk/nodejs）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/30291 中更新 deps
* 壮举：MCP 工具在 https://github.com/langgenius/dify/pull/30261 中添加了对 @IthacaDream 的嵌入资源的支持
* 修复(web): 在 https://github.com/langgenius/dify/pull/30253 中处理 @majiayu000 日志列表中的空/未定义消息
* 修复：https://github.com/langgenius/dify/pull/30236 中 @SherlockShemol 释放 graph_runtime_state 引用以防止高负载下内存泄漏
* 修复(web): 回滚https://github.com/langgenius/dify/pull/30294中@lyzno1的React Scan动态导入
* 重构（查询状态）：通过https://github.com/langgenius/dify/pull/30184中的@lyzno1将查询参数状态管理迁移到nuqs
* 构建：通过 @bowenliang123 在 https://github.com/langgenius/dify/pull/30106 中更新 github 操作
* 修复（模板转换）：对 Jinja2 模板使用 Base64 编码来修复 https://github.com/langgenius/dify/pull/30223 中 @devbyteai 的 #26818
* 重构（web）：删除 swr 并将共享/聊天挂钩迁移到 @lyzno1 在 https://github.com/langgenius/dify/pull/30232 中的 tanstack 查询
* 重构（i18n）：在 https://github.com/langgenius/dify/pull/30114 中使用 @hyoban 的 JSON 以及扁平化密钥和命名空间
* feat: 支持https://github.com/langgenius/dify/pull/30193 @fatelei 的腾讯cos自定义域名
* 测试：在https://github.com/langgenius/dify/pull/30094中通过@CodingOnStar添加对插件认证组件的全面测试
*修复（api）：删除工具提供程序列表缓存以修复https://github.com/langgenius/dify/pull/30323中@Mauis的缓存不一致问题
* 琐事：重构配置变量并在 https://github.com/langgenius/dify/pull/30312 中添加 @iamjoel 的测试
* 杂务：package.json 中的 i18n 命名空间重构，并在 https://github.com/langgenius/dify/pull/30324 中添加 @lyzno1 缺少的翻译
* 测试：通过@CodingOnStar在https://github.com/langgenius/dify/pull/30326中添加一些对市场的测试
* 重构(web)：通过@lyzno1在https://github.com/langgenius/dify/pull/30318中组织devtools组件
* 修复：https://github.com/langgenius/dify/pull/30296中@majiayu000在版本历史面板中正确恢复草稿版本
* feat: allow fail fast by @fatelei in https://github.com/langgenius/dify/pull/30262
* 壮举：通过 @hj24 在 https://github.com/langgenius/dify/pull/30339 中获取带有缓存的批量计划
* 修复：更新各种组件的韩语翻译并改进 cl… by @sangyun-han in https://github.com/langgenius/dify/pull/30347
* 修复：https://github.com/langgenius/dify/pull/30353 中 @hyoban 缺少 Trans 的 i18n 翻译
* 重构（i18n）：关于 @hyoban 在 https://github.com/langgenius/dify/pull/30336 中的语言环境
* 修复（i18n）：在 https://github.com/langgenius/dify/pull/30368 中通过 @lyzno1 按 kebab-case 加载服务器名称空间
* 杂务：删除https://github.com/langgenius/dify/pull/30366中@hyoban无用的__esModule
* 修复：修复https://github.com/langgenius/dify/pull/30374中@fatelei的provider_id为空的问题
*修复：修复https://github.com/langgenius/dify/pull/30299中@fatelei的markdown转义问题
* 壮举：集成 Google Analytics 事件跟踪并通过 https://github.com/langgenius/dify/pull/30365 中的 @CodingOnStar 更新脚本源的 CSP
* 重构：用 `IS_PROD` 和 `IS_DEV` 常量替换直接的 `process.env.NODE_ENV` 检查。通过 @lyzno1 在 https://github.com/langgenius/dify/pull/30383
* feat: 当用户在 https://github.com/langgenius/dify/pull/30370 中通过 @zyssyz123 进行 oauth 登录时，为前端添加 oauth_new_user 标志
* 修复(web): https://github.com/langgenius/dify/pull/30367 中 @quicksandznzn 的应用程序模板的模板创建权限
* 重构：api/services/tools/api_tools_manage_servi…的拆分更改，由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/29899 中
* 修复：用于 Celery 的 REDIS ssl 变量不正确，导致 Celery 无法由 @jasonfish568 在 https://github.com/langgenius/dify/pull/29605 中启动
* 修复：关键字搜索现在匹配https://github.com/langgenius/dify/pull/29619中@majiayu000的内容和关键字字段
* 修复：[xxx](xxx) 在 https://github.com/langgenius/dify/pull/30392 中由@fatelei 渲染为 xxx](xxx)
* 修复：工作流程被错误地标记为已完成，而 https://github.com/langgenius/dify/pull/30251 中的 @Chenyl-Sai 仍在执行节点
* feat(web)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/30246 中从 es-toolkit/compat 迁移到本机 es-toolkit (#30244)
* 杂务（deps）：将 qs 从 https://github.com/langgenius/dify/pull/30409 中的 @dependabot[bot] 在 /web 中的 6.14.0 提升到 6.14.1
* 修复：确保在 https://github.com/langgenius/dify/pull/30389 中切换回 @devbyteai 的对话时刷新聊天记录
* 修复(web): 通过 https://github.com/langgenius/dify/pull/30412 中的 @QuantumGhost 在控制台 UI 中启用 JSON_OBJECT 类型支持
* 修复：在 https://github.com/langgenius/dify/pull/30416 中正确使用 @lyzno1 的 useEducationStatus 查询缓存配置
*修复：修复https://github.com/langgenius/dify/pull/30305中@fatelei创建应用程序的xss问题
* 杂务：https://github.com/langgenius/dify/pull/30417 中 @hyoban 的 React 编译器 lint
* 杂务：更新 knip 配置并包含在 https://github.com/langgenius/dify/pull/30410 中 @hyoban 的 CI 中
* feat: support image extraction in PDF RAG extractor by @yangzq50 in https://github.com/langgenius/dify/pull/30399
* 测试：通过 @hyoban 在 https://github.com/langgenius/dify/pull/30376 中将 i18next 模拟统一为集中式助手
* 壮举：在 https://github.com/langgenius/dify/pull/30422 中添加存档存储 client 和 @hjlarry 的环境配置
* 构建：带回 babel-loader，在 https://github.com/langgenius/dify/pull/30427 中添加 @hyoban 的构建检查
* 家务：在 https://github.com/langgenius/dify/pull/30432 添加 @hyoban 的 jotai 商店
* fix(web): stop thinking timer when user clicks stop button by @majiayu000 in https://github.com/langgenius/dify/pull/30442
* 重构：通过https://github.com/langgenius/dify/pull/30388中的@asukaminato0721将一些ns.model迁移到BaseModel
* 修复：修复视觉禁用时删除https://github.com/langgenius/dify/pull/30420中@fatelei的配置
* 壮举：在 https://github.com/langgenius/dify/pull/30423 中添加 @fatelei 的 AgentMaxIterationError exc
* chore: Standardized the OpenAI icon by @hjlarry in https://github.com/langgenius/dify/pull/30471
* 杂务：删除 https://github.com/langgenius/dify/pull/30466 中@hjlarry 模型的 icon_large
* feat: optimize for migration versions by @longbingljw in https://github.com/langgenius/dify/pull/28787
* chore: remove redundant web/app/page.module.css by @lyzno1 in https://github.com/langgenius/dify/pull/30482
* 杂务：集成 @tanstack/eslint-plugin-query 并修复 https://github.com/langgenius/dify/pull/30444 中 @lyzno1 的服务层 lint 错误
* feat(refactoring): Support Structured Logging (JSON) by @41tair in https://github.com/langgenius/dify/pull/30170
* feat: model total credits by @CodingOnStar in https://github.com/langgenius/dify/pull/26942
* fix(plugins): enhance search to match name, label and description by @zhsama in https://github.com/langgenius/dify/pull/30501
* ci: fix translate, allow manual dispatch by @hyoban in https://github.com/langgenius/dify/pull/30505
* chore(i18n): translate i18n files based on en-US changes by @github-actions[bot] in https://github.com/langgenius/dify/pull/30508
* 重构：https://github.com/langgenius/dify/pull/30445 中 @asukaminato0721 将更多 ns.model 改为 BaseModel
* chore: upgrade fickling to 0.1.6 by @laipz8200 in https://github.com/langgenius/dify/pull/30495
* test: add unit tests for RagPipeline components by @CodingOnStar in https://github.com/langgenius/dify/pull/30429
* feat: revert model total credits by @CodingOnStar in https://github.com/langgenius/dify/pull/30518
* feat: add Ralph Wiggum plugin support by @lyzno1 in https://github.com/langgenius/dify/pull/30525
* 壮举：在 https://github.com/langgenius/dify/pull/30520 中添加 @iamjoel 的前端代码审查技能
* refactor(web): align signup mail submit and tests by @lyzno1 in https://github.com/langgenius/dify/pull/30456
* feat: enhance squid config by @fatelei in https://github.com/langgenius/dify/pull/30146
* feat: skip rerank if only one dataset is retrieved by @fatelei in https://github.com/langgenius/dify/pull/30075
* fix: when first setup after auto login error by @sszaodian in https://github.com/langgenius/dify/pull/30523
* refactor(code_node): implement DI for the code node by @laipz8200 in https://github.com/langgenius/dify/pull/30519
* 文档：更新 https://github.com/langgenius/dify/pull/30516 中的 @longbingljw 中的 docker/.env.example 中的注释
* chore: Update PR template lint command by @laipz8200 in https://github.com/langgenius/dify/pull/30533
* refactor(workflow): add Jinja2 renderer abstraction for template transform by @laipz8200 in https://github.com/langgenius/dify/pull/30535
* chore(deps-dev): bump intersystems-irispython from 5.3.0 to 5.3.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/30540
* chore: Add a new rule for import lint by @laipz8200 in https://github.com/langgenius/dify/pull/30526
* feat: add flask command file-usage by @fatelei in https://github.com/langgenius/dify/pull/30500
* chore: update dockerignore by @hsiong in https://github.com/langgenius/dify/pull/30460
* fix: fix WorkflowExecution.outputs containing non-JSON-serializable o… by @fatelei in https://github.com/langgenius/dify/pull/30464
* fix(api): surface subscription deletion errors to users by @Mairuis in https://github.com/langgenius/dify/pull/30333
* fix: support to change NEXT_PUBLIC_BASE_PATH env using `--build-arg` in docker build by @darkelf21cn in https://github.com/langgenius/dify/pull/29836
* feat: return data_source_info and data_source_detail_dict by @fatelei in https://github.com/langgenius/dify/pull/29912
* fix: INDEXING_MAX_SEGMENTATION_TOKENS_LENGTH settings by @hsiong in https://github.com/langgenius/dify/pull/30463
* 修复：修复 @fatelei 在 https://github.com/langgenius/dify/pull/30541 中数据库环境不起作用的问题
* 杂务（deps）：将 @amplitude/analytics-browser 从 2.31.4 中的 2.31.4 提升到 https://github.com/langgenius/dify/pull/30538 中的 @dependabot[bot] 在 /web 中的 2.33.1
*修复：#30511 [Bug]knowledge_retrieval_node在使用Rerank模型时失败：“在应用程序上下文之外工作”并在https://github.com/langgenius/dify/pull/30549中添加@hsiong的回归测试
* 重构：使用 contains_any 而不是链接 where = where | f by @fatelei in https://github.com/langgenius/dify/pull/30559
* Chore(web): 在 https://github.com/langgenius/dify/pull/30491 中添加@hyoban 用于 i18n JSON 验证的 ESLint 规则
* 重构（模型）：通过 https://github.com/langgenius/dify/pull/27751 中的 @laipz8200 将映射类型提示添加到 MessageAnnotation
* 杂务（docker）：更新 nltk 数据下载过程，以包含 @lework 在 https://github.com/langgenius/dify/pull/28876 中的非结构化 download_nltk_packages
* 琐事：修复 https://github.com/langgenius/dify/pull/30571 中 @hyoban 的 i18n 中的 lint
* feat(logstore): 通过环境变量 LOGSTORE 使 `graph` 字段可选... by @scdeng in https://github.com/langgenius/dify/pull/30554
* feat(graph-engine): 使层运行时状态非空并由https://github.com/langgenius/dify/pull/30552中的@laipz8200提前绑定
* feat(graph-engine): 在https://github.com/langgenius/dify/pull/30563中添加@laipz8200在运行时更新变量的命令
* 杂务：由 @laipz8200 在 https://github.com/langgenius/dify/pull/30497 中强化 API 映像 Node.js 运行时安装
* 修复(api)：重构 SQL LIKE 模式 escaping 逻辑以使用集中式实用函数，确保在所有数据库查询中一致且安全地处理特殊字符。 by @NeatGuyCoding in https://github.com/langgenius/dify/pull/30450
* 重构：https://github.com/langgenius/dify/pull/30583 中 @asukaminato0721 对 api/controllers/web/saved_message.py 的拆分更改
* 重构：https://github.com/langgenius/dify/pull/30582 中 @asukaminato0721 对 api/controllers/web/conversation.py 的拆分更改
*修复：系统模型选择器在https://github.com/langgenius/dify/pull/30572中加载@lyzno1的状态闪存
* 重构：https://github.com/langgenius/dify/pull/30581 中的 @asukaminato0721 对 api/controllers/console/datasets/hit_test… 进行拆分更改
* 杂务：删除https://github.com/langgenius/dify/pull/30469中@GKTOKWR未使用的链接图标类型
*壮举：@fatelei在https://github.com/langgenius/dify/pull/30479统一管理停止事件
* 重构：https://github.com/langgenius/dify/pull/30522 中的 @asukaminato0721 的端口控制器/console/app/app.py
* 修复：在 https://github.com/langgenius/dify/pull/30360 中正确提取 @yangzq50 的 docx 超链接
* 修复：允许 https://github.com/langgenius/dify/pull/30587 中的 @Thebinary110 对嵌入式机器人进行未经身份验证的 CORS 预检
* 壮举：初始化 rsc 支持 @hyoban 在 https://github.com/langgenius/dify/pull/30596 中的翻译
* 壮举：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/30531 中添加对话变量持久层
*修复：_model_to_insertion_dict在https://github.com/langgenius/dify/pull/30603中缺少@fatelei的id
* 重构：干净类型：忽略https://github.com/langgenius/dify/pull/30510中@majiayu000在login.py和template_transformer.py中的注释
* 重构（api）：通过https://github.com/langgenius/dify/pull/30609中的@laipz8200将sessionmaker注入到会话变量更新器中
* 重构：generate_url以支持@fatelei在https://github.com/langgenius/dify/pull/30598中构建url的场景
* 修复（db）：在https://github.com/langgenius/dify/pull/30612中通过@laipz8200使用Session参数化sessionmaker
* 杂务：在 https://github.com/langgenius/dify/pull/30605 中 @lyzno1 在 packageManager 中修改 pnpm 版本
* 壮举：在 https://github.com/langgenius/dify/pull/30621 中使用更通用的 C.UTF-8 而不是 @fatelei 的 en_US.UTF-8
* 壮举：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/30507 中实现具有预览功能的数据集创建步骤一
* 重构(web)：通过https://github.com/langgenius/dify/pull/30631中的@lyzno1将遗留表单迁移到TanStack Form
* 修复：防止空状态闪烁并通过https://github.com/langgenius/dify/pull/30616中的@lyzno1为应用程序列表添加骨架加载
* 修复：由于 @ltoppyl 在 https://github.com/langgenius/dify/pull/30474 中的迁移和模型之间可为 null 的不匹配，所以 Flask 数据库检查失败
* 重构：通过https://github.com/langgenius/dify/pull/30617中的@CodingOnStar重构DatasetCard组件以提高可读性和可维护性
* 重构（api）：澄清https://github.com/langgenius/dify/pull/30644中@laipz8200发布的RAG管道调用命名
* 重构：https://github.com/langgenius/dify/pull/30638 中的 @asukaminato0721 端口 api/fields/file_fields.py
* 杂务：在 https://github.com/langgenius/dify/pull/30254 中使用 @sarxxt 的 from __future__ 导入注释
* 杂务：添加技能创建者，用于由 @lyzno1 在 https://github.com/langgenius/dify/pull/30652 中创建代理技能
* 修复：通过 @fghpdf 在 https://github.com/langgenius/dify/pull/30660 中将 DB_TYPE 环境变量添加到单元测试中
* 修复：修复https://github.com/langgenius/dify/pull/30654中@fatelei不记录访问令牌的问题
* 琐事：https://github.com/langgenius/dify/pull/30664 中的 @lyzno1 将 ralph-wiggum 插件重命名为 ralph-loop
* 重构（web）：删除 useMixedTranslation，https://github.com/langgenius/dify/pull/30630 中 @hyoban 更好的资源加载
* 修复：当刷新令牌有效但访问令牌在 https://github.com/langgenius/dify/pull/30675 中被 @lyzno1 过期时，登录页面卡在加载中
* 重构：删除不必要的类型：https://github.com/langgenius/dify/pull/30666 中的 @fghpdf 从 rag_pipeline_fields.py 中忽略
* 修复：修复 https://github.com/langgenius/dify/pull/30651 中 @fatelei 的默认分配值
* 重构（web）：通过 @fghpdf 在 https://github.com/langgenius/dify/pull/30694 中删除未使用的类型别名 VoiceLanguageKey
* feat(i18n)：将翻译工作流程迁移到 https://github.com/langgenius/dify/pull/30692 中 @lyzno1 的 Claude Code GitHub Actions
* 重构：https://github.com/langgenius/dify/pull/30627 中的 @asukaminato0721 对 api/controllers/console/workspace/trigger… 进行拆分更改
* 修复（工作流程）：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/30637 中将正确的 user_from/invoke_from 传递到图形初始化中
* 修复（i18n）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/30710 中解决工作流程中的 Claude Code 沙箱路径问题
* 修复(web): 解决https://github.com/langgenius/dify/pull/30716中@JunIce在聚焦/模糊时键值输入框高度不一致的问题 (#30715)
* 壮举：通过 @GareArc 在 https://github.com/langgenius/dify/pull/30704 中为 Web 应用程序中的密码和代码字段添加解密装饰器
* 修复：Web 应用程序登录代码在 https://github.com/langgenius/dify/pull/30705 中由 @douxc 加密
* 壮举：@zyssyz123 在 https://github.com/langgenius/dify/pull/30720 中的信用池
* 壮举：@CodingOnStar 在 https://github.com/langgenius/dify/pull/30727 中模拟总学分
* 修复(web): 将 postMessage targetOrigin 从通配符限制为 @xuwei95 在 https://github.com/langgenius/dify/pull/30690 中的特定来源
* 修复（web）：通过 @MkDev11 在 https://github.com/langgenius/dify/pull/30695 中解决聊天消息加载竞争条件和无限循环问题
* 修复（ci）：使用repository_dispatch进行i18n同步工作流程，@lyzno1在https://github.com/langgenius/dify/pull/30744中
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/30750 中与 en-US 同步翻译
* 壮举：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/30681 中使用全面的 UI 组件和钩子实现数据集创建的第二步
* feat(embedding-process): 在https://github.com/langgenius/dify/pull/30622中通过@CodingOnStar实现嵌入流程组件和轮询逻辑
* 壮举（工作流程）：通过 @Mauis 在 https://github.com/langgenius/dify/pull/30774 中添加代理开发部署工作流程
*修复：修复https://github.com/langgenius/dify/pull/30758中@fatelei增强应用程序模式检查
* 修复(web): 在 https://github.com/langgenius/dify/pull/30751 中 @majiayu000 从详细信息页面删除应用程序后，应用程序列表缓存无效
* 重构：@hyoban 在 https://github.com/langgenius/dify/pull/30702 中的市场状态管理
* 恢复：https://github.com/langgenius/dify/pull/30717 中 @QuantumGhost 的“修复：修复分配值为默认值 (#30651)”
* feat: 增强https://github.com/langgenius/dify/pull/30732中@fatelei的起始节点对象值检查
* feat(web)：通过 @hyoban 在 https://github.com/langgenius/dify/pull/30808 将 PWA 迁移到 Serwist
* 重构（模型）：优化 @laipz8200 在 https://github.com/langgenius/dify/pull/27749 中键入的 MessageAgentThought SQLAlchemy
* 修复：https://github.com/langgenius/dify/pull/30812 中 @fatelei 在 .storybook/preview.tsx 中的导入损坏
* 修复：通过 @fatelei 在 https://github.com/langgenius/dify/pull/30828 中修复刷新令牌死锁
* 修复：在https://github.com/langgenius/dify/pull/30826中删除@yihong0618在ci中无用的pyrefly
* 杂务（deps-dev）：通过https://github.com/langgenius/dify/pull/30833中的@dependabot[bot]将@storybook/react从/web中的9.1.13撞到9.1.17
* 杂务（deps-dev）：https://github.com/langgenius/dify/pull/30834 中的 @dependabot[bot] 在 /api 中从 2.7.2 到 2.9.0
* 文档（网络）：在 https://github.com/langgenius/dify/pull/30837 中添加 @hyoban 推荐的核心包
* 壮举：在 https://github.com/langgenius/dify/pull/30839 中为 @Lemonadeccc 的 Claude Code 添加 block-no-verify 钩子
* 重构(web)：提取isServer/isClient实用程序并通过https://github.com/langgenius/dify/pull/30803中的@lyzno1将Node.js升级到22.12.0
* ci：通过 @QuantumGhost 在 https://github.com/langgenius/dify/pull/30846 中添加 HITL 测试环境部署操作
*构建：限制esbuild，glob，docker基本版本以避免https://github.com/langgenius/dify/pull/30848中@hyoban的cve
* 壮举：@hjlarry 在 https://github.com/langgenius/dify/pull/29494 中清除免费计划工作流程运行日志
*修复（api）：推迟流响应，直到https://github.com/langgenius/dify/pull/30832中的@QuantumGhost更新引用的变量
* 修复：在 https://github.com/langgenius/dify/pull/30859 中使用 @hjlarry 的节点工厂作为单步工作流节点
* feat(ops): 设置 AliyunTrace 的根跨度类型，以通过 @hieheihei 在 https://github.com/langgenius/dify/pull/30728 中启用服务级别指标聚合
* 修复：当 @hsiong 在 https://github.com/langgenius/dify/pull/30865 中取消设置 TEXT_GENERATION_TIMEOUT_MS 时，entrypoint.sh 会覆盖 NEXT_PUBLIC_TEXT_GENERATION_TIMEOUT_MS (#30864)
* 修复：通过 @fatelei 在 https://github.com/langgenius/dify/pull/30877 中修复 formatNumber 的准确性
*修复（振幅）：通过https://github.com/langgenius/dify/pull/30880中的@CodingOnStar将sessionReplaySampleRate默认值更新为0.5
* 修复：如果 https://github.com/langgenius/dify/pull/30083 中 @leslie2046 的 tool_calls 助理消息丢失内容
* 修复：修复对象值是可选的，应跳过 https://github.com/langgenius/dify/pull/30894 中 @fatelei 的验证
* 杂务：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/30893 中重命名迁移文件
* 修复（web）：为 SSE 流 bufferObj 添加 null 检查，以防止 https://github.com/langgenius/dify/pull/30131 中 @majiayu000 出现 TypeError
* 修复：在 dify 的 LLM 模型中，添加消息时，第一个 cli… by @zhi Chenghouse in https://github.com/langgenius/dify/pull/29540
* 琐事：@hjlarry 在 https://github.com/langgenius/dify/pull/29978 中不区分大小写的电子邮件
* 重构(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/30798 中设置状态缓存
* 杂务：将 https://github.com/langgenius/dify/pull/30903 中的 @laipz8200 的 Dify 版本提升为 1.11.3

## 新贡献者
* @sarxxt 在 https://github.com/langgenius/dify/pull/30226 中做出了第一个贡献
* @devbyteai 在 https://github.com/langgenius/dify/pull/30223 中做出了第一个贡献
* @sangyun-han 在 https://github.com/langgenius/dify/pull/30347 中做出了第一个贡献
* @yangzq50 在 https://github.com/langgenius/dify/pull/30399 中做出了第一个贡献
* @sszaodian 在 https://github.com/langgenius/dify/pull/30523 中做出了第一个贡献
* @darkelf21cn 在 https://github.com/langgenius/dify/pull/29836 中做出了第一个贡献
* @lework 在 https://github.com/langgenius/dify/pull/28876 中做出了第一个贡献
* @scdeng 在 https://github.com/langgenius/dify/pull/30554 中做出了第一个贡献
* @Thebinary110 在 https://github.com/langgenius/dify/pull/30587 中做出了第一个贡献
* @ltoppyl 在 https://github.com/langgenius/dify/pull/30474 中做出了第一个贡献
* @fghpdf 在 https://github.com/langgenius/dify/pull/30660 中做出了第一个贡献
* @xuwei95 在 https://github.com/langgenius/dify/pull/30690 中做出了第一个贡献
* @MkDev11 在 https://github.com/langgenius/dify/pull/30695 中做出了第一个贡献
* @Lemonadeccc 在 https://github.com/langgenius/dify/pull/30839 中做出了第一个贡献
* @zhi Chenghouse 在 https://github.com/langgenius/dify/pull/29540 中做出了第一个贡献

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.11.2...1.11.3

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.11.3` · 📅 发布：2026-01-13 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.11.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
