---
title: "FastGPT v4.17.0"
project: "FastGPT"
repo: "labring/FastGPT"
tag: "v4.17.0"
version: "v4.17.0"
published: "2026-09-11"
type: "minor"
lang: "en"
summary: "升级到 V4.17.0 前，请先升级到 V4.16.2，并执行完成 V4.16.x 版本要求的所有旧升级脚本。 V4.17.0 的自动升级机制只管理从本版本开始登记的新任务，不会补执行此前版本的历史脚本。"
---

# FastGPT v4.17.0

## 升级说明

**升级到 V4.17.0 前，请先升级到 V4.16.2，并执行完成 V4.16.x 版本要求的所有旧升级脚本。** V4.17.0 的自动升级机制只管理从本版本开始登记的新任务，不会补执行此前版本的历史脚本。

从 4.17.0 版本开始，登记到系统升级机制的任务会自动执行，并通过 lease 抢占避免多节点并发问题，同时支持心跳检测，检查脚本是否活跃。可在 `管理员 > 版本升级` 中查看升级脚本状态。

分批迁移任务默认每批处理 `100` 条记录。数据量较大时，可通过 `SYSTEM_MIGRATION_BATCH_SIZE` 调整为 `50`～`1000`。

### AI Proxy（必需）

从 V4.17.0 起，必须部署或接入 AI Proxy，并在 FastGPT App 及复用 App/Service 配置的商业版 Admin 服务中设置：

- `AIPROXY_API_ENDPOINT`：可访问的 AI Proxy 服务根地址，例如 `http://aiproxy:3000`，不要附加 `/v1`。
- `AIPROXY_API_TOKEN`：与 AI Proxy 服务端配置一致的非空管理员 Token。

**从 V4.17.0 起，`OPENAI_BASE_URL` 和 `CHAT_API_KEY` 已弃用并移除，配置后不再生效。** 请从部署环境中删除这两个变量，改用上述 AI Proxy 配置，并在管理员的模型渠道中维护模型服务商地址和密钥。旧的 `systemEnv.oneapiUrl/chatApiKey` 覆盖配置也不再生效。

缺少任一 AI Proxy 配置会导致启动校验失败，单模型的 `requestUrl/requestAuth` 不能替代这两个必填项。升级前请确认 AI Proxy 可访问，且管理员 Token 可以访问渠道管理接口；不要把模型服务商的 API Key 当作 AI Proxy 管理员 Token。

### CSRF 防御

本版本新增了环境变量用于防御 HTML 标签的 CSRF 工具。

```dotenv
CSRF_ENABLED=true
```

### Code Sandbox seccomp 兼容配置（可选）

Code Sandbox 默认继续启用 seccomp。若宿主机内核不支持应用内 seccomp，进程池初始化会失败；确认可以接受系统调用隔离能力降低后，可为 Code Sandbox 显式设置：

```dotenv
SANDBOX_DISABLE_SECCOMP=true
```

该配置只关闭 seccomp，chroot、`no_new_privs` 和 UID/GID 降权仍保持启用。关闭后不再从内核层阻断网络、创建进程、线程和执行二进制等系统调用，不建议在支持 seccomp 的环境中使用。

### 新建团队默认创建权限（可选）

设置 `DEFAULT_TEAM_BASIC_PERMISSIONS_ENABLED=true` 后，新建团队时会为默认全员组授予应用、Skill 和知识库创建权限。默认值为 `false`，仅影响新建团队，不会修改已有团队权限。FastGPT Pro 请在 FastGPT 和 Admin 服务中保持该配置一致，以覆盖各自的团队创建入口，包括企业微信授权建队。

### 镜像更新

- 更新 fastgpt-app（FastGPT 主服务）镜像 tag: v4.17.0
- 更新 fastgpt-pro（FastGPT 商业版）镜像 tag: v4.17.0
- 更新 fastgpt-plugin 镜像 tag: v1.1.3
- 更新 fastgpt-code-sandbox 镜像 tag: v4.17.0

## 弃用说明

### 模型自定义请求地址

模型自定义请求地址将于未来版本弃用，当前版本仍兼容，请都改成渠道进行模型管理。

## 🚀 新增内容

1. FastGPT SSO Service 新增 LDAP 成员与组织架构同步，并补充不同 SSO Provider 的独立环境变量模板和配置文档。
2. FastGPT SSO Service 新增钉钉用户与部门同步。
3. Workflow Tool 的文件上传字段支持设置为由 Agent 生成；历史文件字段仍默认保持手动上传，避免升级后行为变化。
4. 新增自动系统升级任务管理，可查看升级状态、阶段进度、失败数据和执行结果，并重试失败的非阻塞任务。
5. Agent V2 新增语音播报（TTS）配置，支持关闭播报、浏览器播报或模型播报，并可选择音色、调整语速和试听；配置样式与 Chat Agent 保持一致。
6. AI 对话节点的响应详情新增首 Token 响应时间，统计从发起模型请求到收到首个正文或思考内容的耗时。
7. 团队所有者转让扩展到多团队模式，支持选择团队成员作为新所有者，并通过输入确认降低误操作风险。
8. CSRF 防御，避免外部系统（尤其是 HTML 标签）携带 Cookie 直接请求接口。

## ⚙️ 优化

1. 优化对话暂停体验：暂停请求写入工作流停止标记后立即返回；客户端收到确认后主动中断当前流式请求，不再等待最多 5 秒。
2. 优化暂停后的内容保留：模型仅输出思考内容、尚未生成正文时暂停，也会持久化已有思考内容，刷新后仍可查看。
3. 优化图片引用展示：图片后仅包含引用标记时，引用标记在图片下方居中显示；正文中的行内引用保持原有布局。
4. 优化生成冲突恢复：当前对话仍在服务端生成时，客户端会识别冲突并恢复原有生成流，避免新增空白消息或错误状态。
5. 优化处理中内容的交互：思考或工具调用的折叠预览支持点击展开，并直接定位到对应详情。
6. 统一工作台 App、Skill、Dataset、模板市场、工具、账号用量、模型看板、API Key、审计日志和 App 日志等列表的筛选交互；按页面提供类型、来源、创建者、成员、分类、时间和排序等筛选，并支持在长选项列表中搜索。
7. App、Skill 和 Dataset 列表新增按创建者与创建时间排序等筛选能力；历史 App 和 Dataset 创建时间由系统升级任务自动补齐。
8. 统一表格多选、日期范围、数字输入、长列表滚动和弹窗等基础交互，改善批量操作和长内容展示体验。
9. App、Dataset 和 Skill 列表及相关资源选择器改为分页加载，并优化虚拟滚动、加载骨架屏和文件夹导航，改善大量资源时的加载与浏览体验。
10. 模型摘要、详情和候选列表按使用场景加载，选择器展开时再加载候选模型，并区分加载中、加载失败和模型不可用状态。
11. 统一工具描述逻辑：工具节点和工具集子工具使用节点简介作为工具调用描述；工具集子工具支持直接编辑描述，并保留历史自定义或主动清空的内容，避免同步工具定义时被覆盖。
12. 表格组件，支持表头和内容分离滚动，同时支持虚拟滚动。

## 🐛 修复

1. 修复账号注销确认弹窗底部间距、长文本无法正确换行的问题，并优化账号注销邮件模板。
2. 将 `DB_MAX_LINK` 限制在 `10`～`1000`，避免连接数过低影响并发或配置过大造成资源压力；官方部署模板默认使用 `20`。
3. 修复关闭团队插件安装后，部分上传、URL 安装和安装确认接口仍可绕过功能开关的问题。
4. 修复禁用 XLSX XML 扫描后仍可能继续扫描文件的问题。
5. 修复 HTTP/OpenAPI Tool 输入项的「手动输入 / Agent 生成」模式保存后丢失，以及作为 Agent Tool 或子工作流运行时被错误重置的问题。
6. 修复模型选择未严格区分模型类型、模型最高温度留空时校验失败，以及管理员模型目录与成员可用模型列表排序不一致的问题；同时避免服务启动阶段误清理仍然有效的成员模型缓存。
7. FastGPT Pro 将飞书、企业微信、钉钉和微信公众号等发布渠道收到的非法消息调整为返回明确的客户端错误，避免将请求格式问题误报为服务端故障。
8. FastGPT Pro 修复历史团队成员 `role` 字段可能覆盖当前权限计算的问题：除团队所有者外，废弃的角色值不再参与权限判断。
9. 修复简易应用和对话 Agent 的隐藏多模态配置导致图片、音频或视频未进入模型请求的问题；工作流中有显式多模态开关的模型切换入口统一清除新模型不支持的选项，切回后不会自动恢复。
10. 修复模型请求字段映射在同名、交换或链式映射时覆盖错误的问题；映射使用已归一化并按模型能力过滤的请求数据，重复目标字段会明确报错。
11. 修复 MCP / HTTP Tool 定义随工作流快照过期或存储不兼容的问题，运行时读取工具定义，并兼容历史工具配置和鉴权信息。
12. 修复 OpenAPI 导入工具未按接口定义发送参数的问题：根据原文将参数分配到 Path、Query、Header 和 JSON Body，支持路径级共享参数，并按 `style` / `explode` 序列化数组和浅对象，保留重复 Query 参数名及 JSON Body 中的原始数据类型。
13. 修复 OpenAPI 定义中未传入的可选 Cookie 参数阻断请求的问题；必填参数缺失、实际传入但不支持的 Cookie 或不支持的参数编码仍会明确报错。
14. 修复 ToolCall 统一关闭子工作流流式输出、导致子节点配置不生效的问题；子工作流继承父流程流式能力，并遵循自身禁流配置，简易应用生成的子应用和工作流工具节点仍强制禁流。
15. 修复模型异步加载可能覆盖用户选择、将尚未加载的模型误判为不可用，以及编辑器恢复配置时意外补入默认模型的问题。
16. 修复工作流发布时对已关闭的重排、问题优化、猜你想问和模型播报功能仍校验模型的问题；已开启的可选功能仅在模型为空时补入默认值，失效的非空模型引用仍会明确报错。
17. 兼容历史团队成员缺失名称、应用 `questionGuide` 为 `null` 以及知识库模型引用为空的情况，避免读取旧数据时校验失败。
18. 修复工作流连线在节点间距较小时的圆角与路径展示异常，以及站点图标配置为 `/` 时未使用默认图标的问题。
19. 插件工作流模板头像保留插件返回的原始 URL，避免地址被重写后无法正确展示。
20. 修复 HTML 表格转 Markdown 时，表头列数少于数据行导致部分列无法显示的问题；转换时自动补齐表头，保留完整表格内容。

## 🛠️ 代码优化

1. 系统模型、模型权限及业务配置统一使用稳定的 `modelId` 引用，并通过自动升级任务兼容旧版模型名称引用。
2. 自动升级任务通过 MongoDB lease、运行 ID 隔离和心跳实现多节点互斥与失效接管；大数据任务支持分批断点续跑。
3. 协作者查询接口可按需返回团队成员登录用户名，并通过批量查询避免逐成员请求。
4. FastGPT Pro 优化集群镜像构建缓存，使用代理缓存和带缓存的 Runner 降低重复拉取与构建开销。
5. 修复部署脚本的访问地址与宿主机端口配置混淆问题，支持独立配置 FastGPT 和 Sandbox Proxy 的宿主机端口，避免误用反向代理的公网端口。
6. Code Sandbox 在 JS 或 Python 代码执行失败时返回异常堆栈、异常链和已捕获的 console/print 输出，并记录到 warn 级别的响应日志。错误详情和输出各限制为 16K 字符，超限明确标记截断；Worker 响应解析失败时补充 worker ID、响应长度和已捕获的 stderr。进程被强制终止时，尚未发送的输出仍可能丢失。

## What's Changed
* fix: restore template marketplace avatars by @xqvvu in https://github.com/labring/FastGPT/pull/7571
* Ko translation by @c121914yu in https://github.com/labring/FastGPT/pull/7573
* feat: redesign account pages by @c121914yu in https://github.com/labring/FastGPT/pull/7574
* docs(upgrade): complete 4.16.1 upgrade guide by @c121914yu in https://github.com/labring/FastGPT/pull/7575
* docs: fix misspelled upgrade-instruction path by @simpleqt in https://github.com/labring/FastGPT/pull/7576
* fix(app): i18n rendering, tool description and refactor virtual list by @DigHuang in https://github.com/labring/FastGPT/pull/7570
* feat(skill): support version publisher details and confirmation on switch by @DigHuang in https://github.com/labring/FastGPT/pull/7572
* fix: preserve chat input height with file preview by @xqvvu in https://github.com/labring/FastGPT/pull/7580
* fix: unify file upload limit warnings by @xqvvu in https://github.com/labring/FastGPT/pull/7579
* fix: preserve apostrophes in content-disposition filenames by @primorLee in https://github.com/labring/FastGPT/pull/7552
* refactor(workflow): centralized workflow legacy data migrator by @Nixieboluo in https://github.com/labring/FastGPT/pull/7544
* feat: add admin model and tool navigation by @c121914yu in https://github.com/labring/FastGPT/pull/7578
* chore(outlink): ui and docs cleanup by @Nixieboluo in https://github.com/labring/FastGPT/pull/7583
* fix: avoid plugin requests for system tool reinstall by @FinleyGe in https://github.com/labring/FastGPT/pull/7584
* fix(s3): recover multipart uploads after request timeout by @xqvvu in https://github.com/labring/FastGPT/pull/7581
* refactor(api): expand Pro OpenAPI contracts by @c121914yu in https://github.com/labring/FastGPT/pull/7548
* fix(api): normalize admin plan ObjectIds by @c121914yu in https://github.com/labring/FastGPT/pull/7586
* perf: per clean api by @c121914yu in https://github.com/labring/FastGPT/pull/7585
* fix: improve payment, agent loop, and admin list handling by @c121914yu in https://github.com/labring/FastGPT/pull/7587
* perf(admin): optimize username-based list searches by @c121914yu in https://github.com/labring/FastGPT/pull/7588
* fix(login): usrSchema contact nullish by @shortlight5980 in https://github.com/labring/FastGPT/pull/7592
* fix: team contact nullish by @shortlight5980 in https://github.com/labring/FastGPT/pull/7593
* Unsubscribe by @shortlight5980 in https://github.com/labring/FastGPT/pull/7358
* docs(dataset): fix zh-CN typography in RAG intro (#7531) by @skyzhao1223 in https://github.com/labring/FastGPT/pull/7591
* fix(dataset): accept empty/single-row backup CSV import (#7491) by @skyzhao1223 in https://github.com/labring/FastGPT/pull/7590
* fix: handle missing chat settings and member names by @c121914yu in https://github.com/labring/FastGPT/pull/7597
* fix(file): bound XLSX parsing resources by @c121914yu in https://github.com/labring/FastGPT/pull/7596
* docs(upgrade): update 4.16.2 release notes by @c121914yu in https://github.com/labring/FastGPT/pull/7595
* fix(unsubscribe): add notificationStatus and modify corn; fix ui by @shortlight5980 in https://github.com/labring/FastGPT/pull/7600
* fix(workflow): normalize legacy app templates by @c121914yu in https://github.com/labring/FastGPT/pull/7604
* fix(wallet): preserve invoice bill IDs and normalize months by @c121914yu in https://github.com/labring/FastGPT/pull/7606
* Update reference from 'sandbox' to 'agent sandbox' by @Deepturn in https://github.com/labring/FastGPT/pull/7607
* refactor(permission): materialize resource permissions by @FinleyGe in https://github.com/labring/FastGPT/pull/7560
* fix(dataset): require session for data creation by @c121914yu in https://github.com/labring/FastGPT/pull/7610
* fix: resolve app tools, permissions, and routing regressions by @FinleyGe in https://github.com/labring/FastGPT/pull/7611
* fix: harden dataset and invoice zod compatibility by @c121914yu in https://github.com/labring/FastGPT/pull/7613
* feat(fulltext): add Milvus BM25 full-text search engine and mongo->millvus migration by @SteelHe in https://github.com/labring/FastGPT/pull/7594
* feat: support additional document formats with anydoc by @c121914yu in https://github.com/labring/FastGPT/pull/7612
* fix(app): allow nullish avatar and intro in storage by @c121914yu in https://github.com/labring/FastGPT/pull/7614
* perf: stabilize client i18n and price purchase flow by @c121914yu in https://github.com/labring/FastGPT/pull/7615
* fix(sandbox): allow absolute paths for builtin skill files by @DigHuang in https://github.com/labring/FastGPT/pull/7617
* docs: sync V4.16.2 release notes by @c121914yu in https://github.com/labring/FastGPT/pull/7620
* feat(workflow): allow more nodes in tool call by @Nixieboluo in https://github.com/labring/FastGPT/pull/7496
* fix(skill): open created skill in current tab by @DigHuang in https://github.com/labring/FastGPT/pull/7625
* fix(sandbox): add one-shot native isolation for JavaScript by @c121914yu in https://github.com/labring/FastGPT/pull/7624
* refactor(ai): migrate model references to modelId by @c121914yu in https://github.com/labring/FastGPT/pull/7599
* docs: finalize V4.16 deployment and release notes by @c121914yu in https://github.com/labring/FastGPT/pull/7627
* feat: permission interface supports returning the username field by @sxf-xiongtao in https://github.com/labring/FastGPT/pull/7616
* fix: update startup cache and deployment defaults by @c121914yu in https://github.com/labring/FastGPT/pull/7630
* fix(unsubscribe): fix ui & chang email template by @shortlight5980 in https://github.com/labring/FastGPT/pull/7632
* fix: clamp database connection pool size by @c121914yu in https://github.com/labring/FastGPT/pull/7633
* feat: sso ldap by @shortlight5980 in https://github.com/labring/FastGPT/pull/7589
* fix(chat): improve pause handling and image citations by @c121914yu in https://github.com/labring/FastGPT/pull/7635
* fix(unsubscribe): css break-all by @shortlight5980 in https://github.com/labring/FastGPT/pull/7636
* feat(workflow): make file uploading field agent generatable by @Nixieboluo in https://github.com/labring/FastGPT/pull/7618
* fix(plugin): enforce team plugin installation feature gate by @FinleyGe in https://github.com/labring/FastGPT/pull/7637
* fix: Python 沙箱 seccomp 加载失败时降级 by @lorenzozanee in https://github.com/labring/FastGPT/pull/7631
* fix: complete V4.16.3 follow-up fixes by @c121914yu in https://github.com/labring/FastGPT/pull/7640
* fix(ai): require model type in selectors by @c121914yu in https://github.com/labring/FastGPT/pull/7648
* feat: add automatic system migration manager by @c121914yu in https://github.com/labring/FastGPT/pull/7651
* fix: update dependencies and complete V4.17 release prep by @c121914yu in https://github.com/labring/FastGPT/pull/7654
* fix: model schema by @c121914yu in https://github.com/labring/FastGPT/pull/7656
* feat(app): add shared list filters for dashboard, account, and logs by @DigHuang in https://github.com/labring/FastGPT/pull/7643
* fix(http): persist OpenAPI tool input mode by @FinleyGe in https://github.com/labring/FastGPT/pull/7650
* fix(wallet): backfill missing historical bill metadata by @c121914yu in https://github.com/labring/FastGPT/pull/7666
* feat(migration): backfill resource owner ACLs by @c121914yu in https://github.com/labring/FastGPT/pull/7669
* refactor(ui): consolidate shared interaction improvements by @c121914yu in https://github.com/labring/FastGPT/pull/7670
* fix(ai): harden model field mapping and empty migrations by @c121914yu in https://github.com/labring/FastGPT/pull/7674
* fix: use dynamic port from FE_DOMAIN_INPUT instead of hardcoded 3000 by @notzhan in https://github.com/labring/FastGPT/pull/7657
* fix(migration): clean legacy team roles before startup by @c121914yu in https://github.com/labring/FastGPT/pull/7675
* feat(dataset): add synonym management and search enhancement by @lean-zone in https://github.com/labring/FastGPT/pull/7558
* fix(unsubscribe): not check password expired when cancelling by @shortlight5980 in https://github.com/labring/FastGPT/pull/7667
* fix(app): resolve MCP and HTTP schemas at runtime by @c121914yu in https://github.com/labring/FastGPT/pull/7661
* fix: preserve literal backslashes during markdown cleanup by @gallonyin in https://github.com/labring/FastGPT/pull/7678
* fix(sandbox): avoid reconnecting on toast changes by @DigHuang in https://github.com/labring/FastGPT/pull/7682
* chore: update pro submodule for WeCom sync by @shortlight5980 in https://github.com/labring/FastGPT/pull/7645
* fix(workflow): always specify tool param node as agent generated by @Nixieboluo in https://github.com/labring/FastGPT/pull/7680
* fix(app): align form and workflow multimodal settings by @c121914yu in https://github.com/labring/FastGPT/pull/7677
* feat(workflow): show first-token response time in AI chat node by @SteelHe in https://github.com/labring/FastGPT/pull/7685
* feat: team onwer give by @shortlight5980 in https://github.com/labring/FastGPT/pull/7605
* fix: stabilize model selection and legacy migrations by @c121914yu in https://github.com/labring/FastGPT/pull/7686
* fix(sandbox): log worker response handling errors by @c121914yu in https://github.com/labring/FastGPT/pull/7689
* fix(typo): upgrade-instruction.mdx by @i-square in https://github.com/labring/FastGPT/pull/7690
* fix: various visual gliches by @Nixieboluo in https://github.com/labring/FastGPT/pull/7696
* fix: default missing team member names by @c121914yu in https://github.com/labring/FastGPT/pull/7693
* docs: align team mode default by @FinleyGe in https://github.com/labring/FastGPT/pull/7694
* feat(resource-list): paginate app, dataset, and skill lists by @FinleyGe in https://github.com/labring/FastGPT/pull/7622
* feat(app): keep plugin template avatar URL unmodified by @FinleyGe in https://github.com/labring/FastGPT/pull/7697
* feat: add default team basic permissions by @SuXiangcheng in https://github.com/labring/FastGPT/pull/7668
* fix(layout): keep single children tree across isPc breakpoint by @leilei3167 in https://github.com/labring/FastGPT/pull/7695
* feat:member resource save by @shortlight5980 in https://github.com/labring/FastGPT/pull/7683
* fix: 完善移动端适配、资源兼容、Admin 统计与沙箱诊断 by @c121914yu in https://github.com/labring/FastGPT/pull/7699
* chore(deps): bump next from 15.5.21 to 15.5.24 by @dependabot[bot] in https://github.com/labring/FastGPT/pull/7703
* fix(onwer-give): add audit & no change team by @shortlight5980 in https://github.com/labring/FastGPT/pull/7701
* fix: 兼容旧工作流渲染类型和聊天配置 null 值 by @c121914yu in https://github.com/labring/FastGPT/pull/7707
* feat(ai): redesign administrator model management by @c121914yu in https://github.com/labring/FastGPT/pull/7663
* refactor: unified tool desc in the app by @Nixieboluo in https://github.com/labring/FastGPT/pull/7649
* fix: correct pagination empty state and scroll behavior by @FinleyGe in https://github.com/labring/FastGPT/pull/7708
* fix(web): folder picker empty state and clear selection when switching folders by @FinleyGe in https://github.com/labring/FastGPT/pull/7710
* feat(web): reset multi-select filter to all when empty and align dropdown search by @DigHuang in https://github.com/labring/FastGPT/pull/7711
* feat: CSRF Prevention by @shortlight5980 in https://github.com/labring/FastGPT/pull/7687
* fix: HTML 表格转 Markdown 时表头列数没有补齐，导致表格缺列 by @kevin9327 in https://github.com/labring/FastGPT/pull/7713
* feat: add third-party sangfor parsing by @sxf-xiongtao in https://github.com/labring/FastGPT/pull/7715
* refactor: move tool desc editing to a modal by @Nixieboluo in https://github.com/labring/FastGPT/pull/7716
* perf: The table component locks the table header by @c121914yu in https://github.com/labring/FastGPT/pull/7717
* feat(s3): 文件访问短链有效期支持环境变量控制（FILE_URL_EXPIRED_HOURS） by @xqvvu in https://github.com/labring/FastGPT/pull/7709
* fix: prompt editor not clearing internal selection/focus state by @Nixieboluo in https://github.com/labring/FastGPT/pull/7719
* fix(sandbox): sanitize jwt validation errors and converge proxy error responses by @DigHuang in https://github.com/labring/FastGPT/pull/7720
* fix: fill linked channels table width by @c121914yu in https://github.com/labring/FastGPT/pull/7718

## New Contributors
* @simpleqt made their first contribution in https://github.com/labring/FastGPT/pull/7576
* @primorLee made their first contribution in https://github.com/labring/FastGPT/pull/7552
* @skyzhao1223 made their first contribution in https://github.com/labring/FastGPT/pull/7591
* @sxf-xiongtao made their first contribution in https://github.com/labring/FastGPT/pull/7616
* @lorenzozanee made their first contribution in https://github.com/labring/FastGPT/pull/7631
* @notzhan made their first contribution in https://github.com/labring/FastGPT/pull/7657
* @lean-zone made their first contribution in https://github.com/labring/FastGPT/pull/7558
* @SuXiangcheng made their first contribution in https://github.com/labring/FastGPT/pull/7668
* @leilei3167 made their first contribution in https://github.com/labring/FastGPT/pull/7695
* @kevin9327 made their first contribution in https://github.com/labring/FastGPT/pull/7713

**Full Changelog**: https://github.com/labring/FastGPT/compare/v4.16.1...v4.17.0

---

> **Source** [labring/FastGPT](https://github.com/labring/FastGPT) · `v4.17.0` · 2026-09-11 · [upstream release](https://github.com/labring/FastGPT/releases/tag/v4.17.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
