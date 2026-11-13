---
title: "FastGPT v4.17.1"
project: "FastGPT"
repo: "labring/FastGPT"
tag: "v4.17.1"
published: "2026-09-30"
type: "patch"
lang: "en"
summary: "本次升级包含以下自动化脚本"
---

# FastGPT v4.17.1

## 📦 升级指南

### 镜像更新

- 更新 fastgpt-app（FastGPT 主服务）镜像 tag: v4.17.1
- 更新 fastgpt-pro（FastGPT 商业版）镜像 tag: v4.17.1
- 更新 fastgpt-plugin 镜像 tag: v1.1.4
- 更新 AI Proxy 镜像 tag: v0.7.3

### 升级脚本

本次升级包含以下自动化脚本

1. 回填应用资源权限快照，清理遗留 V1 应用及版本数据，并校验应用正式版本；迁移任务不阻塞服务启动，可在系统升级任务中查看进度和失败记录。
2. 为兼容渠道启用 reasoning 映射：为现有 AIProxy OpenAI 协议渠道开启 `map_reasoning_to_reasoning_content: true` 的响应字段转换，解决深度思考模型（如 DeepSeek-R1）的思考内容字段兼容问题，并保留渠道的原有配置；已配置该项的渠道不会重复更新，迁移任务不阻塞服务启动。
3. 升级知识库标签数据：将存量 Collection 标签迁移为类型化标签，并清理重复标签定义；迁移任务不阻塞服务启动。
4. 回填团队成员名设置标记：为历史团队成员回填 `isSetMemberName` 标记；owner 始终标记为已设置，非 owner 中与登录用户名相同的成员名标记为需要补充；迁移任务不阻塞服务启动。

## 管理员入口调整

商业版管理界面已并入 FastGPT 主应用，root 用户登录后可从「管理员」入口访问系统配置、运营管理和 License 激活、续期页面。系统配置位于 `/admin/settings/*`，系统工具和系统模型分别位于 `/admin/resources/tool` 和 `/admin/resources/model`。旧路径不再保留。

FastGPT Pro 服务仍需保留；若为 Pro 配置了自定义健康检查，请将探测路径调整为 `/api/health`。

## 🚀 新增内容

1. 应用发布版本新增资源权限快照和运行时授权，静态资源按发布时快照校验，动态资源按实际运行用户校验。解决协作开发的应用，运行时权限分散导致无法正确计算问题。
2. 新增知识库标签管理与筛选，支持类型化标签值、集合标签维护，以及在工作流和 Agent V2 知识库搜索中使用标签条件。
3. 修改密码支持第三方认证，并统一改密授权、验证和密码更新流程。
4. Agent V2 的知识库搜索支持知识库引用，聊天中可展示本次检索实际返回的引用内容。
5. 应用增加 Token 统计看板，用量记录同步展示 Token 消耗。
6. App、Agent、Skill、工具和 Dataset 列表支持批量选择、移动和删除，并根据管理权限限制可操作资源。
7. 管理员功能统一集成到主应用，支持按 License 授权展示管理菜单和功能状态。
8. 文件读取节点调试支持本地上传文件和添加文件链接，并在上传未完成或文件异常时阻止运行。
9. 新增知识库文件级权限（集合级权限）：可按文件/文件夹单独配置协作者，并支持继承与独立态、恢复继承、所有权转移。开关默认关闭，存量知识库行为不变；开启后列表、详情与检索召回均按文件权限逐条鉴权，关闭则清空全部文件权限配置。详见 [知识库文件级权限](../../../guide/dataset/collection_permission)。
10. 系统模型健康状态探测与监控：管理员支持开启系统模型健康状态定时探测，提供 48 小时状态图可视化监控，并支持配置告警 Webhook 和 Token，在模型状态发生变动时触发 Webhook 通知。详见 [系统模型配置与监控](../../config/model/intro)。
11. 首次登录待办与引导流程：首次登录支持强制要求补齐团队成员显示姓名，自动提示并处理待确认的团队邀请，并统一编排系统公告与企业认证提示等后续弹窗。
12. 系统模型标识符修改：管理员支持通过稳定的 `modelId` 直接修改系统模型的模型标识符（`model`），并自动同步更新关联渠道的模型映射与列表。
13. 支持 OFD 文件解析。
14. 新增词元跳动 (TokenDance) 统一 AI API 网关接入文档与示例。
15. 新增 SSO 密码策略：管理员可禁止 SSO 命名空间账号使用平台密码登录和修改密码，登录页会按可用的身份验证方式展示入口。
16. 个人工作流工具支持配置跟随最新发布版本，应用更新后无需重新手动调整工具版本。
17. 工作流新增 `off` 节点输入类型：专门面向第三方接口传参，界面不渲染该输入，但完整保留参数定义、默认值与校验，且禁止作为 Agent 自动生成参数。
18. 工作流知识库搜索支持字符串（`string`）类型标签筛选：支持结构化文本和引用变量过滤，并在检索层执行对应匹配逻辑。
19. OpenAPI 开放文档新增「基础功能 - 模型管理」分类与接口，开放公开模型列表、成员可用模型清单和批量模型详情接口，支持通过 API Key 查询当前可用模型。
20. 新增环境变量 `DISABLE_MARKETPLACE`（默认为 `false`）：支持隐藏系统工具中的插件市场安装入口，仅保留本地文件导入。
21. 管理员创建用户接口支持显式传入并保存成员显示名称（`memberName`）。
22. 知识库、技能、应用都增加被使用引用，便于看到该资源被哪些应用引用。

## ⚙️ 优化

1. 调整知识库集合批量操作栏、标签间距和标签管理空状态。
2. App 日志使用者筛选改为打开筛选框后再加载，支持服务端搜索和分页，移除固定的 100 个使用者限制。
3. 知识库搜索节点支持记录重排前的召回候选集，便于对比检索与重排结果；通过 `RETRIEVAL_RESULTS_LIMIT` 配置记录上限，默认不记录。
4. 模型选择器将 Beta 模型排在列表末尾。
5. 知识库默认图片模型清空后被自动回填的问题，允许不配置图片模型。
6. 重构管理员系统配置表单交互与布局设计，提供更清晰的分类导航与配置保存体验。
7. 商业版 License 激活支持永久/无到期时间（unlimited expired time），完善无到期时间许可证的显示与校验。
8. 优化中文语言环境下的大数字格式化，正确展示万、亿等本土化单位。
9. 表格默认开启横向滚动并移除多余左右内边距，长表格在窄屏下更易浏览。
10. 工作流数组类型变量收到单个对象的 JSON 字符串时被解析为普通对象、导致循环与并行节点报错「不是数组」的问题，自动将其包装为单元素数组。
11. 从模板添加模型列表支持按模型提供商（Provider）预设顺序排序返回，保持界面模型分组展示整齐一致。
12. 优化会话标题生成规则：首轮仅上传文件或触发自动执行时支持生成本地化固定标题（如「上传文件」/「自动执行」），后续轮次输入提问文本后自动以新问题标题覆盖；用户自定义标题（`customTitle`）拥有最高优先级且不会被自动覆盖；统一会话历史、日志与导出等处的标题展示与兜底逻辑，并禁止将空值或占位符持久化为标题。
13. 优化多模态消息 Token 估算：多模态内容（图片、音频、视频、文件）在进入 Token 计算 Worker 前使用固定占位符替代 base64、媒体 URL 或二进制数据，避免长 URL 或大二进制数据导致 Token 计算超时或估算严重偏离。
14. 优化找回密码验证流程：在发送验证码前校验输入的账号是否符合邮箱或手机号格式，避免非法账号在打开图形验证码或请求接口时提示参数校验错误。

## 🐛 修复

1. 工具调用隔离工作流工具运行时状态，并恢复交互节点记忆，避免并发调用相互污染或丢失交互结果。
2. 修复发票抬头表单回填时覆盖现有输入、必填字段校验不完整的问题。
3. 临时对话尚未保存到历史记录时不再显示自定义标题操作，避免修改结果无法保存。
4. 修复 FastGPT Pro 登录后的许可证校验流程，并补充账单相关接口的鉴权校验。
5. 修复同一聊天轮次内并发写入人类消息和 AI 消息导致 MongoDB 事务报错的问题。
6. 修复解析文档中的 HTML 图片无法预览的问题，支持将 HTML 标签内的 S3 对象键转换为预览地址。
7. 修复文本清理误删正文中的 `]]`，并修复中文字符之间连续空白未全部清理的问题。
8. 修复提示词编辑器中的变量和 Skill 标签选择、复制及粘贴异常。
9. 修复模型生成 JSON 后追加包含括号的说明文字时，JSON 提取范围错误的问题。
10. 修复 PowerPoint 段落中的软换行被丢弃、导致相邻文本粘连的问题。
11. 修复表格单元格中的反斜杠和 HTML 无表头表格转换为 Markdown 时破坏表格结构的问题。
12. 工具执行失败不再被当作普通聊天错误展示在底部错误卡片中，也不再计入节点响应摘要的错误数。
13. 修复应用聊天测试未提前校验模型可用性的问题，在发送请求前提示具体的模型配置错误。
14. 修复 FastGPT Pro 飞书发布渠道配置 Encrypt Key 时，事件订阅 URL 校验无法正确返回 challenge 的问题。
15. 修复工具切回手动输入时错误显示 JSON 编辑器的问题，沿用节点声明的输入控件。
16. 修复 MongoDB 变更监听终止后无法恢复的问题，增加自动重连及配置重新加载。
17. 修复系统配置并发更新引发的 MongoDB 事务错误。
18. 修复工作流中未激活或未开启思考的模型节点错误展示空白思考输出卡片的问题。
19. 修复 HTML 表格转换为 Markdown 时未识别 `<th>` 单元格，导致标准 HTML 表格丢掉列名的问题。
20. 修复子工作流未发布节点调试详情时，父工作流流式响应可能异常中断的问题。
21. 修复 iOS Safari 浏览器在异步请求后打开知识库集合源文件链接被弹窗拦截的问题。
22. 修复为成员分配协作者角色时未严格遵循群组与组织管理员权限的问题。
23. 修复工作流单节点调试时连线状态被错误重置为 waiting，导致接口立即返回且前端一直处于运行中状态的问题。
24. 修复知识库切块处理带括号的 Markdown 图片 URL 时截断地址，导致图片向量化或描述关联错误的问题。
25. 修复空文件和 Office 临时锁定文件上传校验异常的问题，并统一知识库图片上传的内容校验。
26. 修复 MCP DNS rebinding 导致的 SSRF 风险，并收紧解析地址族校验。
27. 移除远程图片的 HEAD 预校验，避免恶意地址造成请求阻塞或拒绝服务。
28. 修复聊天记录详情中错误显示「内容由 AI 生成」提示的问题。
29. 修复 JSON Schema 属性使用布尔值 `required` 时无法正确识别必填项的问题。
30. 修复 OpenAPI Scalar 同源测试请求未正确识别为 Web 请求，导致 CSRF 校验失败的问题。
31. 修复外链删除权限判断和前端操作反馈，并在删除应用后立即清理外链与快捷引用。
32. 修复表格读取长整数时被转换为科学计数法或丢失精度的问题。
33. 修复严格枚举参数忽略 JSON Schema `default` 值、始终选择第一个枚举项的问题。
34. 修复工作流与 Agent 运行中丢弃中间工具调用（ToolCall）Assistant 消息与响应顺序错乱的问题，确保流式输出与持久化时完整保留工具调用转录与节点响应。
35. 修复子工作流和交互式工具暂停恢复时的状态丢失问题，恢复执行时正确传递当前提问与用户输入上下文。
36. 修复 Markdown 渲染未过滤危险链接协议（如 `javascript:`、`vbscript:` 等）导致的存储型点击 XSS 安全风险。
37. 修复知识库检索结果重排融合（RRF）时直接修改输入列表 score 对象的问题，确保重排前记录的召回候选集分数保持真实原始值。
38. 修复通用并发任务调度器 `batchRun` 中任一任务失败后其他并发槽继续领取新任务的问题，报错后立即终止新任务分配。
39. 修复启用 `CHECK_INTERNAL_IP=true` 内网防御时，聊天日志推送、钉钉 Token 获取、第三方 API 知识库同步与自定义 PDF 解析等系统配置的内网服务被误拦截的问题。
40. 修复应用资源回填迁移中遗留 V1 应用及包含非 ObjectId 等非法资源引用导致报错的问题，并在迁移时级联清理遗留 V1 应用及其关联版本、对话和外链。
41. 修复搜索词高亮组件（`HighlightText`）直接使用未转义的搜索词构造正则表达式，导致输入括号 `(`、`[`、`c++` 等特殊字符时页面崩溃的问题。
42. 修复网页链接导入知识库时未补全相对路径的图片与链接（如 `./`、`../` 等），导致导入后图片无法显示、链接失效的问题。
43. 修复 OpenAI 兼容接口合并历史消息时多条 system 消息顺序被颠倒的问题，确保按原始相对顺序传递给模型。
44. 修复 Markdown 链接安全校验时，包含非 UTF-8 百分号编码（如 GBK 编码查询参数）的合法链接被误判为不安全链接导致无法点击、图片无法显示的问题。
45. 修复文档解析（如 Docx、XLSX 保留的 HTML 表格）中内嵌的 HTML `<img>` base64 图片未被自动上传存储、残留巨大 base64 字符串至分块中的问题。
46. 修复工作流条件判断器（`If/Else`）对非字符串值使用「开始为」或「结束为」条件时报 `trim is not a function` 导致节点运行报错的问题。
47. 修复部分知识库文件导入入口未将 S3 对象 key 绑定到已鉴权资源的问题。
48. 修复配置外部文档解析服务且开启 xlsx 解析时，知识库模板和备份导入因路由到外部解析（仅返回 Markdown）导致结构化表头与表格校验失败报「文件格式错误」的问题；模板与备份导入强制使用系统内置解析。

## 🛠️ 代码优化

1. 模型测试接口支持不配置 channel 即可请求。
2. 应用和文件夹新增置顶接口，列表接口可按需启用置顶排序。
3. 知识库接口支持外部文档解析配置，可控制页眉页脚、附录、图片识别和图表解析结果的保留；仅在启用外部解析服务时生效。
4. 重构定时任务与分布式锁架构（`checkTimerLock`），模型状态探测核心逻辑内聚于 service 层，避免多节点并发探测。
5. 优化系统敏感数据加解密性能，缓存 scrypt 派生密钥并移除阻塞式的 CPU 信息查询；主应用 Dockerfile 基础镜像切换至 debian-slim。
6. 升级 hono、multer、nodemailer 等核心依赖版本。

## What's Changed
* ci: allow manual release tags by @c121914yu in https://github.com/labring/FastGPT/pull/7729
* fix(admin): require license verification after login by @c121914yu in https://github.com/labring/FastGPT/pull/7728
* feat: support workflow entry points by @lavine77 in https://github.com/labring/FastGPT/pull/7724
* feat(app): Implement intelligent text chunking via external service by @sunjiaqi52777 in https://github.com/labring/FastGPT/pull/7706
* chore: update deployment files for v4.17.0 by @c121914yu in https://github.com/labring/FastGPT/pull/7723
* fix(workflow): isolate tool runtime state and restore interactive memory by @c121914yu in https://github.com/labring/FastGPT/pull/7727
* docs: add FastGPT 4.17.1 release notes by @c121914yu in https://github.com/labring/FastGPT/pull/7732
* fix: validate invoice header form by @c121914yu in https://github.com/labring/FastGPT/pull/7734
* feat(dataset/tag): upgrade knowledge base tag management by @DigHuang in https://github.com/labring/FastGPT/pull/7660
* feat(agent): add dataset citations for Agent V2 by @YYH211 in https://github.com/labring/FastGPT/pull/7737
* Change password by @shortlight5980 in https://github.com/labring/FastGPT/pull/7368
* fix(chat): hide custom title action for temporary conversations by @gallonyin in https://github.com/labring/FastGPT/pull/7736
* feat(dataset): 知识库级 pdfParseConfig 文档解析开关(#68624) by @ohowandanliao in https://github.com/labring/FastGPT/pull/7721
* fix: validate configured models and selector details by @c121914yu in https://github.com/labring/FastGPT/pull/7741
* fix(dataset): optimize collection batch action bar and tag creation empty state by @DigHuang in https://github.com/labring/FastGPT/pull/7743
* fix(chat): serialize transaction updates by @xqvvu in https://github.com/labring/FastGPT/pull/7738
* fix: Fixed HTML `<img>` preview for `errImg` and added support for converting S3 keys within HTML tags into preview URLs by @sunjiaqi52777 in https://github.com/labring/FastGPT/pull/7739
* feat(app): support opt-in app and folder pinning by @lavine77 in https://github.com/labring/FastGPT/pull/7746
* fix: simpleText 的空白正则会删掉正文里的 ]] by @kevin9327 in https://github.com/labring/FastGPT/pull/7712
* fix: 移除使用详情表格左右留白 by @c121914yu in https://github.com/labring/FastGPT/pull/7748
* fix: place beta models at end of selector by @c121914yu in https://github.com/labring/FastGPT/pull/7749
* fix: var tag select/copy/paste by @Nixieboluo in https://github.com/labring/FastGPT/pull/7755
* fix(global): close every blank between Chinese characters, not every second one by @L4XB in https://github.com/labring/FastGPT/pull/7754
* fix(worker): keep the soft line breaks inside a PowerPoint paragraph by @L4XB in https://github.com/labring/FastGPT/pull/7751
* fix: correct the 'unknow' fallback member name to 'unknown' by @simpleqt in https://github.com/labring/FastGPT/pull/7764
* fix(service): fix the collection update job JSDoc by @simpleqt in https://github.com/labring/FastGPT/pull/7765
* fix(i18n): use the traditional character in the zh-Hant registration error by @simpleqt in https://github.com/labring/FastGPT/pull/7763
* docs: fix the dead frontend-security link in the pr-review skill by @simpleqt in https://github.com/labring/FastGPT/pull/7762
* fix(admin): serialize system config transaction updates by @xqvvu in https://github.com/labring/FastGPT/pull/7759
* feat(dataset): record pre-rerank candidates on dataset search node by @SteelHe in https://github.com/labring/FastGPT/pull/7752
* fix(worker): keep a cell's own backslash from breaking the markdown table by @L4XB in https://github.com/labring/FastGPT/pull/7760
* fix(global): end the sliced JSON where the JSON ends by @L4XB in https://github.com/labring/FastGPT/pull/7757
* test(service): align app list query assertions with implementation by @FinleyGe in https://github.com/labring/FastGPT/pull/7767
* chore(typescript): scope tsconfig file inclusion by @FinleyGe in https://github.com/labring/FastGPT/pull/7766
* feat: add Langfuse workflow tracing by @lean-zone in https://github.com/labring/FastGPT/pull/7742
* feat(dashboard): support batch management for agents, skills, tools and datasets by @DigHuang in https://github.com/labring/FastGPT/pull/7758
* refactor(app): reuse move services in update APIs and eliminate refetches by @DigHuang in https://github.com/labring/FastGPT/pull/7771
* fix(worker): read the first row of a header-less table as its header by @L4XB in https://github.com/labring/FastGPT/pull/7761
* fix(chat): exclude tool execution errors from chat bubble error message by @DigHuang in https://github.com/labring/FastGPT/pull/7770
* feat(app): support app resource permission snapshots and runtime authorization by @DigHuang in https://github.com/labring/FastGPT/pull/7559
* fix(app): validate models before chat test by @c121914yu in https://github.com/labring/FastGPT/pull/7776
* fix(outlink): bump pro submodule for the Feishu challenge fix by @FinleyGe in https://github.com/labring/FastGPT/pull/7773
* fix(migration): expose raw schema errors in app-backfill by @DigHuang in https://github.com/labring/FastGPT/pull/7778
* feat(logs): add token consumption to app dashboard and usage records … by @c121914yu in https://github.com/labring/FastGPT/pull/7775
* feat(app): paginate app log users and optimize log indexes by @c121914yu in https://github.com/labring/FastGPT/pull/7780
* fix(chat): refine tool execution error handling and unify failed node resolution by @DigHuang in https://github.com/labring/FastGPT/pull/7782
* fix(workflow): use textarea over JSONEditor if desired by @Nixieboluo in https://github.com/labring/FastGPT/pull/7779
* docs: remove two duplicated words in comments by @simpleqt in https://github.com/labring/FastGPT/pull/7785
* docs: fix a dead anchor in the agent debug guide and drop a dead skill checklist link by @simpleqt in https://github.com/labring/FastGPT/pull/7784
* docs: fix two JSDoc @param tags that do not match the signatures by @simpleqt in https://github.com/labring/FastGPT/pull/7783
* fix(dataset): allow clearing default image model by @lavine77 in https://github.com/labring/FastGPT/pull/7774
* fix(workflow): hide inactive reasoning output by @Nixieboluo in https://github.com/labring/FastGPT/pull/7789
* Admin migrate by @xqvvu in https://github.com/labring/FastGPT/pull/7777
* feat(workflow): support file upload in read files debug by @SuXiangcheng in https://github.com/labring/FastGPT/pull/7772
* style(dataset): revert collection batch action bar UI and refine tag gap by @DigHuang in https://github.com/labring/FastGPT/pull/7791
* Admin migrate follow-up by @xqvvu in https://github.com/labring/FastGPT/pull/7792
* test(web): stabilize virtual list pagination assertion by @FinleyGe in https://github.com/labring/FastGPT/pull/7795
* perf(mongo): deduplicate common middleware hooks by @c121914yu in https://github.com/labring/FastGPT/pull/7794
* refactor: redesign admin configuration forms by @c121914yu in https://github.com/labring/FastGPT/pull/7797
* feat: collection permission by @FinleyGe in https://github.com/labring/FastGPT/pull/7750
* feat: first login flow by @shortlight5980 in https://github.com/labring/FastGPT/pull/7553
* fix(permission): honor group and organization admin rights when assigning collaborator roles by @FinleyGe in https://github.com/labring/FastGPT/pull/7800
* refactor(admin): reorganize admin routes and openapi tag groups by @c121914yu in https://github.com/labring/FastGPT/pull/7805
* feat(admin): support updating system model identifier by modelId by @c121914yu in https://github.com/labring/FastGPT/pull/7808
* fix(dataset): sangfor 四开关默认口径对齐 keep_appendix 默认保留(#68624) by @ohowandanliao in https://github.com/labring/FastGPT/pull/7803
* style(web): constrain filter menu max width and unify item flex gap by @DigHuang in https://github.com/labring/FastGPT/pull/7799
* ci: stop persisting checkout tokens, scope the release checks and verify rustup-init by @Totara-thib in https://github.com/labring/FastGPT/pull/7802
* fix(openapi): generate complete client schemas by @ctlaltlaltc in https://github.com/labring/FastGPT/pull/7787
* fix(workflow): stream node response when child details were not published by @YYH211 in https://github.com/labring/FastGPT/pull/7810
* fix(common): improve number formatting for Chinese locales and billion units by @imanecdoche in https://github.com/labring/FastGPT/pull/7817
* fix: htmlTable2Md 未识别 th 单元格，标准 HTML 表格会丢掉列名 by @kevin9327 in https://github.com/labring/FastGPT/pull/7818
* fix(license): support unlimited expired time by @sxf-xiongtao in https://github.com/labring/FastGPT/pull/7813
* Login 2fa by @shortlight5980 in https://github.com/labring/FastGPT/pull/7756
* fix(dataset): open collection source on iOS Safari after async fetch by @leilei3167 in https://github.com/labring/FastGPT/pull/7824
* docs: supplement collection permission OpenAPI and guide by @FinleyGe in https://github.com/labring/FastGPT/pull/7820
* refactor(chat): 调整合规提示组件位置 by @shortlight5980 in https://github.com/labring/FastGPT/pull/7811
* feat(admin): support system model status probe and restructure core/ai/model by @c121914yu in https://github.com/labring/FastGPT/pull/7822
* feat(dataset): 原生支持 OFD 文档解析与解析失败诊断错误码 by @sunjiaqi52777 in https://github.com/labring/FastGPT/pull/7806
* feat(outlink): add login protection for share links by @sxf-xiongtao in https://github.com/labring/FastGPT/pull/7793
* perf(service): eliminate blocking os.cpus calls, cache scrypt key and switch Dockerfile to debian-slim by @DigHuang in https://github.com/labring/FastGPT/pull/7825
* fix(service): 修复 CHECK_INTERNAL_IP=true 时拦截部署方配置的内网服务 by @FinleyGe in https://github.com/labring/FastGPT/pull/7828
* feat(admin): optimize model status timeline UI and probe concurrency handling by @c121914yu in https://github.com/labring/FastGPT/pull/7826
* fix(migration): make dataset tags v2 migration non-blocking for 4.17.1 by @c121914yu in https://github.com/labring/FastGPT/pull/7830
* fix(service): remove remote image HEAD pre-validation by @c121914yu in https://github.com/labring/FastGPT/pull/7838
* fix(mcp): prevent DNS rebinding SSRF by @c121914yu in https://github.com/labring/FastGPT/pull/7839
* feat(web): default table horizontal scroll and remove head px by @c121914yu in https://github.com/labring/FastGPT/pull/7841
* fix(chat): 日志详情不再展示 AI 生成合规提示 by @shortlight5980 in https://github.com/labring/FastGPT/pull/7843
* fix(global): support boolean required in json schema properties by @c121914yu in https://github.com/labring/FastGPT/pull/7845
* fix(openapi): add web request header to Scalar test requests by @helloxjade in https://github.com/labring/FastGPT/pull/7844
* fix: reject empty files and Office lock files in upload MIME checks by @kevin9327 in https://github.com/labring/FastGPT/pull/7834
* Sso password availability by @shortlight5980 in https://github.com/labring/FastGPT/pull/7389
* fix: keep parenthetical markdown image URLs in dataset chunks by @kevin9327 in https://github.com/labring/FastGPT/pull/7831
* fix(app): immediately remove outlinks and quick refs on app deletion by @c121914yu in https://github.com/labring/FastGPT/pull/7847
* fix(outlink): adjust delete permission to manage and handle frontend toasts by @DigHuang in https://github.com/labring/FastGPT/pull/7846
* fix(global): 严格枚举参数的初始值忽略了 JSON Schema 的 default by @kevin9327 in https://github.com/labring/FastGPT/pull/7851
* fix(worker): write a long whole number from a spreadsheet in full by @L4XB in https://github.com/labring/FastGPT/pull/7849
* perf(migration): app resource snapshots migration performance by @DigHuang in https://github.com/labring/FastGPT/pull/7836
* fix(markdown): sanitize link href to prevent stored click-xss by @c121914yu in https://github.com/labring/FastGPT/pull/7856
* fix(wallet): normalize empty team invoice header contact phone by @c121914yu in https://github.com/labring/FastGPT/pull/7857
* fix(workflow): preserve ToolCall assistant messages by @c121914yu in https://github.com/labring/FastGPT/pull/7854
* fix(workflow): deduplicate nested node responses by parent by @c121914yu in https://github.com/labring/FastGPT/pull/7859
* docs(openapi): clarify password login hashing by @helloxjade in https://github.com/labring/FastGPT/pull/7860
* fix(global): 数组类型收到单个对象的 JSON 字符串时包成单元素数组 by @kevin9327 in https://github.com/labring/FastGPT/pull/7862
* fix(global): 知识库检索结果融合不再改写传入列表的 score by @kevin9327 in https://github.com/labring/FastGPT/pull/7863
* fix(global): batchRun 任一任务失败后不再领取新任务 by @kevin9327 in https://github.com/labring/FastGPT/pull/7864
* fix(dataset): force system parse for template/backup imports by @sunjiaqi52777 in https://github.com/labring/FastGPT/pull/7865
* docs: update 4.17.1 release notes by @c121914yu in https://github.com/labring/FastGPT/pull/7867
* fix(migration): clean legacy v1 apps and handle invalid resource refs in app resource backfill by @c121914yu in https://github.com/labring/FastGPT/pull/7874
* chore：Feat/off input and tag filter string by @SteelHe in https://github.com/labring/FastGPT/pull/7812
* fix(web): 高亮搜索词时输入括号等正则字符会导致页面崩溃 by @kevin9327 in https://github.com/labring/FastGPT/pull/7868
* fix(dataset): 网页链接导入时路径相对的图片和链接没有补全成绝对地址 by @kevin9327 in https://github.com/labring/FastGPT/pull/7872
* fix(global): concatHistories 合并历史时多条 system 消息被倒序 by @kevin9327 in https://github.com/labring/FastGPT/pull/7869
* fix(global): 含非 UTF-8 百分号编码的链接被 isSafeHref 当成不安全链接 by @kevin9327 in https://github.com/labring/FastGPT/pull/7871
* fix(global): parse base64 images inside HTML <img> tags by @sunjiaqi52777 in https://github.com/labring/FastGPT/pull/7866
* fix(workflow): 判断器对非字符串值使用「开始为/结束为」时报 trim is not a function by @kevin9327 in https://github.com/labring/FastGPT/pull/7870
* feat: title gen rule change by @shortlight5980 in https://github.com/labring/FastGPT/pull/7842
* fix(service): stop duplicating workflowDuration in skill debug chat by @ctlaltlaltc in https://github.com/labring/FastGPT/pull/7877
* feat(login): 添加找回密码验证码发送前的账号格式验证 by @shortlight5980 in https://github.com/labring/FastGPT/pull/7883
* chore(dataset): 模板/备份导入接口未返回集合 ID 与插入结果 by @SteelHe in https://github.com/labring/FastGPT/pull/7885
* feat(ai): 从模板添加模型时列表按 provider 顺序返回 by @c121914yu in https://github.com/labring/FastGPT/pull/7876
* docs: clarify MinIO access for public assets by @helloxjade in https://github.com/labring/FastGPT/pull/7886
* docs: clarify security vulnerability scope to code level only by @c121914yu in https://github.com/labring/FastGPT/pull/7889
* fix(dataset): bind client-supplied S3 keys to authorized resources by @xqvvu in https://github.com/labring/FastGPT/pull/7878
* fix(share): 关闭免登录后按登录用户身份做知识库权限过滤 by @SteelHe in https://github.com/labring/FastGPT/pull/7890
* fix(app): disable marketplace installation entry by @FinleyGe in https://github.com/labring/FastGPT/pull/7891
* chore(deps): upgrade hono, multer and nodemailer by @c121914yu in https://github.com/labring/FastGPT/pull/7892
* fix(dataset): keep own inherit state when moving by @SteelHe in https://github.com/labring/FastGPT/pull/7882
* refactor(team): 重构团队成员名管理逻辑 by @shortlight5980 in https://github.com/labring/FastGPT/pull/7875
* feat(dataset): add batch download archive by @SuXiangcheng in https://github.com/labring/FastGPT/pull/7809
* docs: add FAQ entries for common self-host and chat issues by @mafirs in https://github.com/labring/FastGPT/pull/7898
* feat(app): list apps referencing a dataset, tool or skill by @lavine77 in https://github.com/labring/FastGPT/pull/7702
* refactor: 规范化系统迁移任务目录结构与 UI 交互修复 by @c121914yu in https://github.com/labring/FastGPT/pull/7897

## New Contributors
* @sunjiaqi52777 made their first contribution in https://github.com/labring/FastGPT/pull/7706
* @ohowandanliao made their first contribution in https://github.com/labring/FastGPT/pull/7721
* @L4XB made their first contribution in https://github.com/labring/FastGPT/pull/7754
* @Totara-thib made their first contribution in https://github.com/labring/FastGPT/pull/7802
* @imanecdoche made their first contribution in https://github.com/labring/FastGPT/pull/7817
* @helloxjade made their first contribution in https://github.com/labring/FastGPT/pull/7844
* @mafirs made their first contribution in https://github.com/labring/FastGPT/pull/7898

**Full Changelog**: https://github.com/labring/FastGPT/compare/v4.17.0...v4.17.1

---

> **Source** [labring/FastGPT](https://github.com/labring/FastGPT) · `v4.17.1` · 2026-09-30 · [upstream release](https://github.com/labring/FastGPT/releases/tag/v4.17.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
