---
title: "dify 1.12.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.12.0"
version: "1.12.0"
published: "2026-02-03"
type: "minor"
lang: "zh"
---

# dify 1.12.0

## 🚀 New Features: Summary Index

We are introducing **Summary Index**, a powerful enhancement to our knowledge base retrieval system that significantly improves search accuracy by generating AI-powered summaries for document chunks.

**背景**

传统的向量搜索依赖于原始块嵌入，这在匹配用户查询时可能会错过语义细微差别和上下文。对于关键信息可能分散在多个块中的长文档或复杂内容来说，这尤其具有挑战性。 Summary Index addresses this by creating concise, semantically-rich summaries for each document chunk, which are then vectorized and used as an additional retrieval layer.

**关键能力**
- **AI-Powered Summarization:** Automatically generates concise summaries for document chunks using configurable LLM models, capturing essential semantic information in a compact format.
- **Multimodal Support:** When using vision-capable LLMs (e.g., GPT-4V, Claude-3), the system can generate summaries that incorporate both text and images from document chunks, providing richer context understanding.
- **Enhanced Retrieval Accuracy:** Summary vectors serve as an additional retrieval layer, improving the precision of knowledge base searches by matching queries against both original content and AI-generated summaries.
- **Flexible Configuration:** Supports default summary prompts, allowing you to tailor the summarization style to match your domain-specific requirements.
- **异步处理：** 摘要生成异步运行，确保文档索引保持快速且无阻塞。
- **Manual Summary Editing:** Allows you to manually edit and refine AI-generated summaries to better align with the original chunk content, ensuring summaries accurately reflect domain-specific terminology and context.
- **Index Structure Compatibility:** Works with both general chunking and parent-child chunking modes, with intelligent handling of hierarchical document relationships.
- **High-Quality Index Integration:** Available exclusively for datasets using the "high_quality" indexing technique, ensuring optimal performance for production knowledge bases.

### 其他改进

* **代理应用程序多模式支持：** 代理应用程序现在原生支持多模式输入（图像/文件）。
* **Qdrant 全文搜索：** 为 Qdrant 矢量数据库实现了多关键字支持的全文搜索。
* **工作流程增强：**
    * 添加了对在工作流程中注册和读取上下文的支持。
    *   Added OpenTelemetry support for single runs.
* **插件系统：** 添加了卸载插件时删除或保留 API 密钥的选项。
* **创建前的模板预览**：添加了详细的应用程序模板预览，其中包含按应用程序类型划分的工作流程图或应用程序配置。

### 🐞 Bug Fixes & Security Updates

* **安全：**
    * 日志存储安全修复：解决了潜在的 SQL 注入、序列化问题和优化初始化。
    * 修复了 WordExtractor URL 下载中的 SSRF 漏洞。
    * 升级`tanstack devtools`修复seroval RCE漏洞。
    * `pdfminer.six`、`authlib`、`werkzeug`、`aiohttp` 和 `pycryptodome` 的安全更新。
* **工作流程和图形引擎：**
    * 修复了单次迭代或循环节点无法运行的问题。
    * 修复了目标节点丢失时 `NextStep` 崩溃的问题。
* 修复了 `ToolInvokeMessage` Union 类型解析问题。
* **API 和后端：**
    * 修复了 `/console/api` 路由的 CORS 资源模式。
    * 修复了 IRIS 混合搜索返回零结果的问题。
    * 修复了计费帐户删除问题。
    * 修复了用于父子段迁移的 `vdb-migrate` 命令。
* **前端：**
    * 修复了“展开所有块”按钮不起作用的问题。
    * 修复了浮动元素的垂直滚动支持。
    * 修复了上传没有 URL 值的图像时的验证错误。

## ⚙️ 配置更改

* `SANDBOX_EXPIRED_RECORDS_CLEAN_TASK_LOCK_TTL`：设置沙箱过期记录清理任务的锁定TTL（默认：`90000`）。
* `SMTP_LOCAL_HOSTNAME`：可选覆盖 SMTP HELO/EHLO 期间使用的本地主机名。
* `PLUGIN_MODEL_SCHEMA_CACHE_TTL`：设置插件模型架构的缓存 TTL（默认值：`3600`）。
* `ENABLE_TRIAL_APP`：启用试用应用程序（默认：`false`）。
* `ENABLE_EXPLORE_BANNER`：启用探索横幅（默认：`false`）。

## 升级指南

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

## 发生了什么变化
* 修复：修复https://github.com/langgenius/dify/pull/30913中的@fatelei实例未绑定到会话的问题
*壮举：通过https://github.com/langgenius/dify/pull/30895中的@wylswz将traceparent注入企业api中
* 重构：@hyoban 在 https://github.com/langgenius/dify/pull/30885 中初始化 orpc 合约
* 重构（变量）：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/30634 中澄清基本类型与联合类型命名
*壮举：通过https://github.com/langgenius/dify/pull/30870中的@fatelei将参数更改为pydantic模型
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/30939中的@dependabot[bot]将/api中的文件锁从3.20.0撞到3.20.3
* 壮举：在 https://github.com/langgenius/dify/pull/28201 中通过 @UMDKyle 卸载插件时添加删除或保留 API 密钥的选项
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/30941中的@dependabot[bot]将/api中的azure-core从1.36.0提升到1.38.0
* 修复：更正 https://github.com/langgenius/dify/pull/30741 中 @jneless 的 Volc TOS 全名
* 修复（logstore）：防止SQL注入，修复序列化问题，并优化https://github.com/langgenius/dify/pull/30697中@adongfan的初始化
* 修复：https://github.com/langgenius/dify/pull/30899 中 @hieheihei 使用 Factory 在 Aliyun Trace 中创建存储库
* 修复：通过 @fatelei 在 https://github.com/langgenius/dify/pull/30719 中修复 LOOP_CHILDREN_Z_INDEX
* 重构(web)：MCP 工具可用于 https://github.com/langgenius/dify/pull/30955 中的 @lyzno1 基于上下文的版本控制
* 重构(http_request_node): 通过@laipz8200在https://github.com/langgenius/dify/pull/30509中为http请求节点应用DI
* 修复(web): 在 https://github.com/langgenius/dify/pull/30971 中通过 @lyzno1 保留 ORPC fetchCompat 模式下的 HTTP 方法
* 杂务（网络）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/30980 中禁用 Serwist 开发日志
* 杂务（web）：通过@lyzno1在https://github.com/langgenius/dify/pull/30979中删除未使用的演示服务组件
* 修复（deps）：由 @kenwoodjw 在 https://github.com/langgenius/dify/pull/30976 中对 pdfminer.6、authlib、werkzeug、aiohttp 等进行的安全更新
* 修复：@hyoban 在 https://github.com/langgenius/dify/pull/30985 登录后重定向
*壮举：允许在https://github.com/langgenius/dify/pull/30975中通过@fatelei在docker环境中传递主机名
* 修复：修复无法解构“值”的属性“名称”，因为它是 undef…，作者：https://github.com/langgenius/dify/pull/30991 中的@fatelei
* 修复：https://github.com/langgenius/dify/pull/30962 中 @Milad93R 正确的 API 扩展文档链接
* 壮举：在 https://github.com/langgenius/dify/pull/30968 中添加 @lyzno1 的 .agent/skills 符号链接和 orpc-contract-first 技能
* 修复：通过 https://github.com/langgenius/dify/pull/31000 中的@BeautyyuYanli 增加ExternalDatasetCreatePayload 中的名称长度限制
* 修复：修复https://github.com/langgenius/dify/pull/31008中@fatelei缺失的id和message_id
* fix: Use raw SQL UPDATE to set read status without triggering updated… by @fatelei in https://github.com/langgenius/dify/pull/31015
* refactor: port TidbAuthBinding( by @asukaminato0721 in https://github.com/langgenius/dify/pull/31006
* fix: fix plugin edit endpoint app disappear by @fatelei in https://github.com/langgenius/dify/pull/30951
* refactor: delete_endpoint should be idempotent by @fatelei in https://github.com/langgenius/dify/pull/30954
* 重构：https://github.com/langgenius/dify/pull/30926 中 @asukaminato0721 移植 TenantCreditPool
* 重构：由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/30922 中移植 AppAnnotationHitHistory
* feat: implement document creation pipeline with multi-step wizard and datasource management by @CodingOnStar in https://github.com/langgenius/dify/pull/30843
* feat(web): refactor documents component structure and enhance functionality by @CodingOnStar in https://github.com/langgenius/dify/pull/30854
*构建：在https://github.com/langgenius/dify/pull/30945中需要@hyoban的节点24.13.0
* refactor(contract): restructure console contracts with nested billing module by @lyzno1 in https://github.com/langgenius/dify/pull/30999
* fix: validation error when uploading images with None URL values by @josephadamsdev in https://github.com/langgenius/dify/pull/31012
* test: add unit tests for PluginPage and related components by @CodingOnStar in https://github.com/langgenius/dify/pull/30908
* 壮举：单次运行在 https://github.com/langgenius/dify/pull/31020 中添加 @fatelei 的 opentelemetry
* chore: bump version to 1.11.4 by @laipz8200 in https://github.com/langgenius/dify/pull/30961
* refactor: enhance clean messages task by @hj24 in https://github.com/langgenius/dify/pull/29638
* 修复：https://github.com/langgenius/dify/pull/31038 中 @hj24 的消息清理服务 ut
* 重构：删除https://github.com/langgenius/dify/pull/31039中@hyoban手动设置查询逻辑
* feat: credential sync fix for enterprise edition by @GareArc in https://github.com/langgenius/dify/pull/30626
* fix: fix log updated_at is refreshed by @fatelei in https://github.com/langgenius/dify/pull/31045
* 修复：删除 https://github.com/langgenius/dify/pull/30156 中 @majiayu000 的文本输入的硬编码 48 个字符限制
* ci: eslint annotation by @hyoban in https://github.com/langgenius/dify/pull/31056
* ci: disable limit annotation by @hyoban in https://github.com/langgenius/dify/pull/31072
* 重构：始终通过 @byteforge38 在 https://github.com/langgenius/dify/pull/31069 中保留 URL 中的市场搜索状态
* fix: resolve 'Expand all chunks' button not working by @GlobalStar117 in https://github.com/langgenius/dify/pull/31074
* chore: lint for state hooks by @hyoban in https://github.com/langgenius/dify/pull/31088
* 修复(web)：在代码编辑器中使用变量选择器的门户（修复#31063），作者：https://github.com/langgenius/dify/pull/31066 中的 @Pavior0
* fix(web): replace Response.json with legacy Response constructor for pre-Chrome 105 compatibility(#31091) by @XiaoBa-Yu in https://github.com/langgenius/dify/pull/31095
* chore: Update coding agent workflow for backend by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31093
* fix(search-input): retain focus after clearing input by @lyzno1 in https://github.com/langgenius/dify/pull/31107
* fix: call `get_text_content()` instead of casting to `str` by @Stream29 in https://github.com/langgenius/dify/pull/31121
* 重构：https://github.com/langgenius/dify/pull/31097中@fghpdf将标签列表API查询参数迁移到Pydantic
* 杂务：更新 https://github.com/langgenius/dify/pull/31114 中 @pgoslatara 过时的 GitHub Actions 版本
* chore: improve accessibility for learn more link by @khmandarrin in https://github.com/langgenius/dify/pull/31120
* test(web): 添加全局 zustand 模拟，用于 @lyzno1 在 https://github.com/langgenius/dify/pull/31149 中的测试
* feat(web)：在https://github.com/langgenius/dify/pull/31110中添加@eureka928无限滚动分页的加载指示器
* chore: introduce bulk-suppressions and multithread linting by @hyoban in https://github.com/langgenius/dify/pull/31157
* chore: update vite related version by @hyoban in https://github.com/langgenius/dify/pull/31180
* feat: add Vercel React Best Practices skill for Claude Code by @lyzno1 in https://github.com/langgenius/dify/pull/31133
* 修复(web)：Zustand 在 https://github.com/langgenius/dify/pull/31163 中测试最佳实践和状态读取优化（@lyzno1）
* 杂务：@hyoban 在 https://github.com/langgenius/dify/pull/31195 中没有自定义 lint 缓存位置
* chore: improve clear workflow_run task by @hjlarry in https://github.com/langgenius/dify/pull/31124
* 壮举：https://github.com/langgenius/dify/pull/30841 中 @douxc 的 ee 工作区权限控制
* 壮举：在 https://github.com/langgenius/dify/pull/31202 中通过 @GareArc 对成员邀请实施工作区权限检查
* 重构：https://github.com/langgenius/dify/pull/30607 中的 @fatelei 重构工作流上下文
* 琐事：在 https://github.com/langgenius/dify/pull/31205 中删除 @hyoban 的慢速 lint 规则
* 重构：https://github.com/langgenius/dify/pull/31166 中的 @fatelei 使电子邮件模板中的 url 变得更好
* 测试：通过https://github.com/langgenius/dify/pull/31053中的@CodingOnStar为插件详细面板组件添加单元测试，包括操作列表、策略列表和端点管理
* 修复：修复 https://github.com/langgenius/dify/pull/31218 中 @fatelei 的 dify-plugin-daemon 错误消息
* 修复：恢复 https://github.com/langgenius/dify/pull/31219 中 @fatelei 的“修复：修复创建应用程序 xss 问题”
*杂务：将@zxhlyh形式的数据集api重新定位到https://github.com/langgenius/dify/pull/31224中
* feat: 在https://github.com/langgenius/dify/pull/31068下载@BeautyyuYanli上传的文件
* 修复：通过 @kurokobo 在 https://github.com/langgenius/dify/pull/31177 中更正 stepOne.uploader.tip 的 i18n
* chore: init tsslint by @hyoban in https://github.com/langgenius/dify/pull/31209
* 杂务（web）：通过https://github.com/langgenius/dify/pull/31257中的@cxhello删除多余的optimizePackageImports配置
* 测试：通过@CodingOnStar在https://github.com/langgenius/dify/pull/31231中添加对数据集列表的测试
* ci：@hyoban 在 https://github.com/langgenius/dify/pull/31261 中对标签网络进行更改
* 修复（web）：在 https://github.com/langgenius/dify/pull/31292 中禁用 @lyzno1 的 HTML escaping 表单字段验证消息
* 修复：@hyoban 在 https://github.com/langgenius/dify/pull/31283 中对 i18n 占位符进行 lint
* 杂务（web）：从 https://github.com/langgenius/dify/pull/31286 中的 @Copilot 从 package.json 中删除版本前缀
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/31297中的@dependabot[bot]将/web中的js-yaml从4.1.0提升到4.1.1
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/31298 中与 en-US 同步翻译
* 修复：将无泄漏条件渲染强制执行为错误，并修复 https://github.com/langgenius/dify/pull/31262 中 @byteforge38 的违规行为
* 杂务（deps-dev）：通过https://github.com/langgenius/dify/pull/31186中的@dependabot[bot]将/web中的jsdom从27.3.0提升到27.4.0
* 杂务(web)：在https://github.com/langgenius/dify/pull/31315中通过@CodingOnStar注释掉配额面板中未使用的提供者条目
* 测试：增强 HitTestingPage 测试，通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/31321 中提供额外的渲染和状态更新覆盖范围
* 杂务：https://github.com/langgenius/dify/pull/31301 中 @hyoban 的 i18n 中的 lint 自定义标签
* 构建：通过 @bowenliang123 在 https://github.com/langgenius/dify/pull/27014 中启用 Turbopack，将 NextJS 从 15 提升到 16，以实现网络生产构建提升
* 重构：https://github.com/langgenius/dify/pull/31198中@fatelei使用session工厂代替直接调用db.session
* 杂务：通过 @hyoban 在 https://github.com/langgenius/dify/pull/31329 中更新开发配置
* 壮举：通过@CodingOnStar在https://github.com/langgenius/dify/pull/31273中增强ProgressBar和UsageInfo的存储模式
* 壮举：为 https://github.com/langgenius/dify/pull/31320 中的 @hj24 添加保留作业锁定
* 壮举：工作流支持在https://github.com/langgenius/dify/pull/31265中通过@fatelei注册上下文和读取上下文
* 壮举：重新组织特工技能并为 https://github.com/langgenius/dify/pull/31334 中的 @lyzno1 为所有特工添加网页设计技能
* 重构(web)：https://github.com/langgenius/dify/pull/31331中@bowenliang123将next.config.js重构为next.config.ts
* 修复（i18n）：更新模型提供者提示，仅在 https://github.com/langgenius/dify/pull/31339 中提及@CodingOnStar 的英文、日文和简体中文翻译中的 OpenAI
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/31332 中与 en-US 同步翻译
* 修复：检查并更新 https://github.com/langgenius/dify/pull/30849 中 @hyoban 的文档链接
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/31342 中与 en-US 同步翻译
* 测试：修复 @hyoban 在 https://github.com/langgenius/dify/pull/31350 中 #30849 中的测试
* 重构(web)：提取useCopyToClipboard钩子以减少https://github.com/langgenius/dify/pull/31308中@SherlockShemol的重复
* 重构（db）：在https://github.com/langgenius/dify/pull/27915中强制执行@laipz8200的非空消息注释问题
* 杂务：恢复 @hyoban 在 https://github.com/langgenius/dify/pull/31353 中的 jsdom 更新
* 测试：通过额外的渲染覆盖增强 HitTestingPage 测试...作者：https://github.com/langgenius/dify/pull/31355 中的 @hyoban
* 修复：在 https://github.com/langgenius/dify/pull/31360 中删除 @fatelei 的 _try_resolve_user_from_request
* fix: fix visibilityState event handle by @fatelei in https://github.com/langgenius/dify/pull/31354
* 修复：https://github.com/langgenius/dify/pull/31128 中 @dataknocker 无法正确解析代理节点工具的非自动变量类型参数
* 修复：以下文档链接由 @hyoban 在 https://github.com/langgenius/dify/pull/31390 中修复
* 修复：@hyoban 在 https://github.com/langgenius/dify/pull/31395 中修复了更多文档链接
* 壮举：@zyssyz123 在 https://github.com/langgenius/dify/pull/26281 中试用应用程序
* fix(web): disable single tilde strikethrough in markdown rendering by @majiayu000 in https://github.com/langgenius/dify/pull/31400
* fix: use thread local isolation the context by @fatelei in https://github.com/langgenius/dify/pull/31410
* 重构：通过https://github.com/langgenius/dify/pull/31385中的@laipz8200将工作流节点工厂移动到应用程序工作流
* feat: frontend part of support try apps by @iamjoel in https://github.com/langgenius/dify/pull/31287
* 修复(web): 使用 Array.from() 为 FileList 修复 @majiayu000 在 https://github.com/langgenius/dify/pull/31398 中的 tsc 类型错误
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/31413
* 文档（api）：将 SystemFeatureApi 标记为 https://github.com/langgenius/dify/pull/31417 中 @QuantumGhost 设计的未经验证
* fix: NextStep crash when target node is missing by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31416
* 修复：修复https://github.com/langgenius/dify/pull/31346中@fatelei按文件创建的doc_form
* 杂务：在https://github.com/langgenius/dify/pull/31424中由@hyoban在开发中禁用serwist
*重构：优化https://github.com/langgenius/dify/pull/31392中@Cursx对未经身份验证的clients的系统功能响应有效负载
* ci: 在https://github.com/langgenius/dify/pull/31428中通过@majiayu000在自动修复机器人中启用ESLint自动修复
* 壮举：@hjlarry 在 https://github.com/langgenius/dify/pull/31310 中存档工作流程运行日志后端
* 文档（api）：Web应用程序的清晰SystemFeatureApi未经https://github.com/langgenius/dify/pull/31432中@QuantumGhost设计的验证
* 重构：https://github.com/langgenius/dify/pull/29854 中 @asukaminato0721 对 api/controllers/web/login.py 的拆分更改
* refactor: split changes for api/controllers/web/workflow.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/29852
* 壮举：@asukaminato0721 在 https://github.com/langgenius/dify/pull/30453 中初始化 fastopenapi
* 壮举：通过 @fatelei 在 https://github.com/langgenius/dify/pull/31430 中优化 http 状态代码
* 修复（工具）：修复 @qiaofenlin 在 https://github.com/langgenius/dify/pull/31450 中的 ToolInvokeMessage Union 类型解析问题
* chore: Update dev setup scripts and API README by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31415
* fix(http-request): prevent UUID truncation in JSON body by @majiayu000 in https://github.com/langgenius/dify/pull/31444
* refactor: port AppModelConfig by @asukaminato0721 in https://github.com/langgenius/dify/pull/30919
* refactor: single-node workflow runner helpers by @laipz8200 in https://github.com/langgenius/dify/pull/31472
* 修复（api）：修复@TomoOkuyama 在 https://github.com/langgenius/dify/pull/31309 中返回零结果的 IRIS 混合搜索
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/31140中的@dependabot[bot]将/api中的pyasn1从0.6.1提升到0.6.2
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/31503 中的 @dependabot[bot] 在 /web 中将 @lexical/utils 从 0.38.2 提升到 0.39.0
* refactor: example of refine dict / Mapping by @asukaminato0721 in https://github.com/langgenius/dify/pull/31498
* feat: add trial model list in system features by @zyssyz123 in https://github.com/langgenius/dify/pull/31313
* 重构：重构https://github.com/langgenius/dify/pull/31435中@CodingOnStar完成的组件
* feat: enhance quota panel to support additional model providers and integrate trial models feature by @CodingOnStar in https://github.com/langgenius/dify/pull/31443
* refactor(tool-selector): remove unused components and consolidate import by @CodingOnStar in https://github.com/langgenius/dify/pull/31018
* 修复(web): 升级tanstack devtools以修复@lyzno1在https://github.com/langgenius/dify/pull/31515中的seroval RCE漏洞
* refactor: pass BaseModel instances instead of dict by @fghpdf in https://github.com/langgenius/dify/pull/31514
* 重构：LLM插件调用@BeautyyuYanli在https://github.com/langgenius/dify/pull/31499中的解析
* 重构：https://github.com/langgenius/dify/pull/31463 中的 @asukaminato0721 将 api/controllers/console/version.py 重构为 v3
* 重构： https://github.com/langgenius/dify/pull/31465 中的 @asukaminato0721 将 api/controllers/console/setup.py 重构为 ov3
* 修复：添加对浮动元素的垂直滚动支持。作者：https://github.com/langgenius/dify/pull/30897 中的 @coopercoder
* 杂务：@hyoban 在 https://github.com/langgenius/dify/pull/31526 中的 eslint prune-suppressions
*修复：修复无法读取null的属性（在https://github.com/langgenius/dify/pull/31117中读取'credential_form_sch… by @fatelei）
* chore: update to story book nextjs-vite by @hyoban in https://github.com/langgenius/dify/pull/31536
* 琐事：https://github.com/langgenius/dify/pull/31552 中的 @RockChinQ 将插件缓存 ttl 增加到 1 小时
* chore: follow-up fixes for storybook vite migration by @lyzno1 in https://github.com/langgenius/dify/pull/31545
* fix: service api doc can not gen by @asukaminato0721 in https://github.com/langgenius/dify/pull/31549
* 壮举：聊天流支持 https://github.com/langgenius/dify/pull/31293 中@fatelei 的多模式
* 杂务：将代理注释移至 https://github.com/langgenius/dify/pull/31560 中 @BeautyyuYanli 的文档字符串中
* 文档：https://github.com/langgenius/dify/pull/31559 中@majiayu000 将 ESLint 指南添加到 AGENTS.md
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/31504中的@dependabot[bot]将/api中的pycryptodome从3.19.1提升到3.23.0
* refactor: replace request.args.get with Pydantic BaseModel validation by @GlobalStar117 in https://github.com/langgenius/dify/pull/31104
* refactor(web): extract MCP components and add comprehensive tests by @CodingOnStar in https://github.com/langgenius/dify/pull/31517
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/31568中的@dependabot[bot]将/api中的pypdf从6.6.0提升到6.6.2
* 修复：@hj24 在 https://github.com/langgenius/dify/pull/31556 中删除计费帐户
* 修复：在 act() 中包装测试清理以防止 @majiayu000 在 https://github.com/langgenius/dify/pull/31558 中未定义窗口错误
* chore: update react and next version by @hyoban in https://github.com/langgenius/dify/pull/31593
* 壮举：通过 @hieheihei 在 https://github.com/langgenius/dify/pull/30706 中增强 OpenTelemetry 节点解析器
* test: add tests for dataset document detail by @CodingOnStar in https://github.com/langgenius/dify/pull/31274
* 壮举：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/31546 中映射已安装的提供商来增强配额面板
* 修复：https://github.com/langgenius/dify/pull/31598 中 @asukaminato0721 的 ConsoleDatasetListQuery request.args.to_dict()
* fix: doc not gen bug by @asukaminato0721 in https://github.com/langgenius/dify/pull/31547
* 杂务：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/31615 中删除项目技能
* 测试：通过@CodingOnStar在https://github.com/langgenius/dify/pull/31595中添加对聊天用户输入组件的全面测试
* fix(cors): correct CORS resource pattern for /console/api routes by @NeatGuyCoding in https://github.com/langgenius/dify/pull/31485
* 重构（graph_engine）：移动可观测层和持久层......由https://github.com/langgenius/dify/pull/31620中的@laipz8200
* 修复(graph_engine): 无法在https://github.com/langgenius/dify/pull/31470中通过@laipz8200运行单次迭代或循环节点
* 壮举：@zxhlyh 在 https://github.com/langgenius/dify/pull/31523 中的摘要索引
* fix: vdb-migrate command did not use for parent-child segment migration by @gaoyue1989 in https://github.com/langgenius/dify/pull/31605
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/31630
* fix(app-log): fetching messages correctly when scrolling message list by @JzoNgKVO in https://github.com/langgenius/dify/pull/31655
* refactor(graph_engine)：为图引擎添加一个Config类。通过 @laipz8200 在 https://github.com/langgenius/dify/pull/31663
* fix: add list type support for ToolInput constant value in tool node by @qiaofenlin in https://github.com/langgenius/dify/pull/31276
* feat(qdrant)：通过@euxx在https://github.com/langgenius/dify/pull/31658中实现多关键字支持的全文搜索
* test: add comprehensive tests by @CodingOnStar in https://github.com/langgenius/dify/pull/31649
* chore: remove non-ASCII characters in .env.example by @bangjiehan in https://github.com/langgenius/dify/pull/31638
* chore: disable turbopackFileSystemCacheForDev by @hyoban in https://github.com/langgenius/dify/pull/31696
* feat: 增加知识汇总索引。作者：@FFXN，https://github.com/langgenius/dify/pull/31625
* 修复：WordExtractor URL 下载中的 SSRF（归功于 @EaEa0001 ），作者为 https://github.com/langgenius/dify/pull/31678 中的 @BeautyyuYanli
* refactor(model): 将插件模型模式缓存重构为进程全局的，以防止 https://github.com/langgenius/dify/pull/31689 中 @NieRonghua 的冗余守护进程 API 调用
* 重构：https://github.com/langgenius/dify/pull/31698 中的 @asukaminato0721 将 ExporleBanner 重构为 TypeBase
* Chore(import-linter): 添加一条规则，使 model_runtime 通过 @laipz8200 在 https://github.com/langgenius/dify/pull/31706 中隔离
* 修复：https://github.com/langgenius/dify/pull/31704 中 @JQSevenMiao 解析 cURL 命令时将 HTTP 方法转换为小写
* 修复（网页）：在 https://github.com/langgenius/dify/pull/31699 中由@taronsung 在深色模式下删除粘性元素上不需要的边框
* 重构(web)：在https://github.com/langgenius/dify/pull/31664中整合@BeautyyuYanli的下载帮助程序
* 杂务：通过 https://github.com/langgenius/dify/pull/31708 中的 @laipz8200 将插件模式缓存 TTL 设置为 1h
* Chore(ty)：https://github.com/langgenius/dify/pull/31681中@BeautyyuYanli对api进行Bootstrap ty类型检查
* 重构：https://github.com/langgenius/dify/pull/31713中使用@CrabSAMA组件统一快捷键显示
* 文档：通过 @hyoban 在 https://github.com/langgenius/dify/pull/31714 中重新定位代理和人类的前端文档
* 壮举：@yihong0618 在 https://github.com/langgenius/dify/pull/30824 中使用 xdist 使测试更快
* 壮举：尝试 @iamjoel 在 https://github.com/langgenius/dify/pull/31716 中进行的应用程序支持审查
* 重构：更喜欢 https://github.com/langgenius/dify/pull/31551 中 @hyoban 的 css 图标
* 杂务（打字）：减少@BeautyyuYanli在https://github.com/langgenius/dify/pull/31721中A1的ty排除
* 壮举：https://github.com/langgenius/dify/pull/31631 中的@WTW0313 的人类输入节点（前端部分）
* feat(api)：https://github.com/langgenius/dify/pull/31646中@QuantumGhost的人类输入节点（后端部分）
*杂务：通过https://github.com/langgenius/dify/pull/31726中的@QuantumGhost将版本更新到1.12.0
* feat：知识总结索引。作者：@FFXN，https://github.com/langgenius/dify/pull/31719
* 杂务：恢复 https://github.com/langgenius/dify/pull/31733 中@hyoban 的“重构：更喜欢 css 图标”
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/31730 中与 en-US 同步翻译
* 琐事：通过 @hyoban 在 https://github.com/langgenius/dify/pull/31735 中更新 lint 配置
* 杂务（docker）：将 docker 中的插件守护程序版本更新为 0.5.3-local - 由 https://github.com/langgenius/dify/pull/31739 中的@QuantumGhost 撰写
*修复（redis）：Redis集群评估错误，通过在https://github.com/langgenius/dify/pull/31701中添加散列标签来触发@anobaka的调试键
*重构：rm一些字典api/controllers/console/app/generator.py api/core/llm_generator/llm_generator.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/31709
* 修复：https://github.com/langgenius/dify/pull/31564 中 @BeautyyuYanli 排出非流插件块迭代器
*修复：在https://github.com/langgenius/dify/pull/31754中触发@hyoban的文档链接
*修复（api）：修复https://github.com/langgenius/dify/pull/31752中@QuantumGhost的工作流程状态持久化问题
* 杂务：当 https://github.com/langgenius/dify/pull/31759 中的 @iamjoel 不支持时隐藏禁用尝试选项卡
* 重构：api/controllers/console/feature.py (测试) by @Cursx in https://github.com/langgenius/dify/pull/31562
* 重构：https://github.com/langgenius/dify/pull/31466 中的 @asukaminato0721 将 api/controllers/console/remote_files.py 重构为 ov3
* 恢复：恢复https://github.com/langgenius/dify/pull/31766中@QuantumGhost人工输入的相关代码
* 修复(i18n): 改进https://github.com/langgenius/dify/pull/31771中@majiayu000的Max Tokens的中文翻译
*杂务：通过https://github.com/langgenius/dify/pull/31229中的@asukaminato0721将restx更新为1.3.2
* 重构：https://github.com/langgenius/dify/pull/31457 中的 @asukaminato0721 将 init_validate.py 重构为 v3
* 重构：https://github.com/langgenius/dify/pull/31767 中的 @asukaminato0721 将 api/controllers/console/tag/tags.py 移植到 ov3
* 修复（api）：在https://github.com/langgenius/dify/pull/31777中对齐@BeautyyuYanli响应流的图形协议
* 重构（打字）：修复打字 A2 - 工作流引擎和节点，由 @BeautyyuYanli 在 https://github.com/langgenius/dify/pull/31723 中编写
* 重构：删除https://github.com/langgenius/dify/pull/29289中@asukaminato0721的所有reqparser
* 重构：@asukaminato0721 在 https://github.com/langgenius/dify/pull/31312 中使用匹配案例的示例
* 重构（打字）：在 https://github.com/langgenius/dify/pull/31792 中使用 @lyzno1 的工作流状态字段的枚举类型
* 修复：@FFXN 在 https://github.com/langgenius/dify/pull/31810 中的摘要索引错误
* 杂务（CODEOWNERS）：通过https://github.com/langgenius/dify/pull/31816中的@laipz8200将`.agents/skills`分配给@hyoban
* 重构：https://github.com/langgenius/dify/pull/31817 中@QuantumGhost 的“琐事：更新版本到 1.12.0”
* refactor: add test for api/controllers/console/workspace/tool_pr… by @asukaminato0721 in https://github.com/langgenius/dify/pull/29886
* 重构：端口 api/controllers/console/app/audio.py api/controllers/console/app/message.py api/controllers/console/auth/data_source_oauth.py api/controllers/console/auth/forgot_password.py api/controllers/console/workspace/endpoint.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/30680
* 重构：如果要在 https://github.com/langgenius/dify/pull/31799 中通过 @asukaminato0721 进行匹配
* 重构：端口 api/controllers/console/datasets/datasets_document.py api/controllers/service_api/app/annotation.py api/core/app/app_config/easy_ui_based_app/agent/manager.py api/core/app/apps/pipeline/pipeline_generator.py api/core/workflow/nodes/knowledge_retrieval/knowledge_retrieval_node.py 以匹配 https://github.com/langgenius/dify/pull/31832 中 @asukaminato0721 的大小写
* 重构：端口 api/controllers/console/datasets/data_source.py /datasets/metadata.py /service_api/dataset/metadata.py /nodes/agent/agent_node.py api/core/workflow/nodes/datasource/datasource_node.py api/services/dataset_service.py 进行匹配案例由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/31836 提供
* 重构：端口 api/controllers/console/app/annotation.py api/controllers/console/explore/Trial.py api/controllers/console/workspace/account.py api/controllers/console/workspace/members.py api/controllers/service_api/app/annotation.py 到 https://github.com/langgenius/dify/pull/31833 中 @asukaminato0721 的基础模型
* chore(deps-dev): bump types-psutil from 7.0.0.20251116 to 7.2.2.20260130 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/31814
* fix: revert "refactor: api/controllers/console/feature.py (test)" by @hyoban in https://github.com/langgenius/dify/pull/31850
* 测试：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/31743 中增强 CommandSelector 和 GotoAnythingProvider 测试
* refactor: update oauth_new_user handling in AppInitializer to use parseAsBoolean by @CodingOnStar in https://github.com/langgenius/dify/pull/31862
* fix: create app from template not support review by @iamjoel in https://github.com/langgenius/dify/pull/31866
* 测试：修复@hyoban 在 https://github.com/langgenius/dify/pull/31869 中的测试
* 杂务：通过 @QuantumGhost 在 https://github.com/langgenius/dify/pull/31878 中将版本更新到 1.12.0
* 测试：修复@hyoban 在 https://github.com/langgenius/dify/pull/31880 中的测试
* chore(dev): use strict bash mode for pytest by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31873
* 重构：用 https://github.com/langgenius/dify/pull/31877 中的 @niveshdandyan 的原生 CSS 替换 line-clamp 包
*修复：“重构：端口api/controllers/console/tag/tags.py到ov3”由https://github.com/langgenius/dify/pull/31887中的@asukaminato0721

## 新贡献者
* @UMDKyle 在 https://github.com/langgenius/dify/pull/28201 中做出了第一个贡献
* @jneless made their first contribution in https://github.com/langgenius/dify/pull/30741
* @Milad93R made their first contribution in https://github.com/langgenius/dify/pull/30962
* @BeautyyuYanli made their first contribution in https://github.com/langgenius/dify/pull/31000
* @josephadamsdev 在 https://github.com/langgenius/dify/pull/31012 中做出了第一个贡献
* @byteforge38 在 https://github.com/langgenius/dify/pull/31069 中做出了第一个贡献
* @GlobalStar117 made their first contribution in https://github.com/langgenius/dify/pull/31074
* @Pavior0 在 https://github.com/langgenius/dify/pull/31066 中做出了第一个贡献
* @pgoslatara made their first contribution in https://github.com/langgenius/dify/pull/31114
* @khmandarrin made their first contribution in https://github.com/langgenius/dify/pull/31120
* @eureka928 在 https://github.com/langgenius/dify/pull/31110 中做出了第一个贡献
* @cxhello 在 https://github.com/langgenius/dify/pull/31257 中做出了第一个贡献
* @dataknocker 在 https://github.com/langgenius/dify/pull/31128 中做出了第一个贡献
* @coopercoder 在 https://github.com/langgenius/dify/pull/30897 中做出了第一个贡献
* @bangjiehan 在 https://github.com/langgenius/dify/pull/31638 中做出了第一个贡献
* @taronsung 在 https://github.com/langgenius/dify/pull/31699 中做出了第一个贡献
* @niveshdandyan 在 https://github.com/langgenius/dify/pull/31877 中做出了第一个贡献

**Full Changelog**: https://github.com/langgenius/dify/compare/1.11.3...1.12.0

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.12.0` · 📅 发布：2026-02-03 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.12.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
