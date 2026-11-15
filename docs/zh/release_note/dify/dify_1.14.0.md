---
title: "dify 1.14.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.14.0"
version: "1.14.0"
published: "2026-04-29"
type: "minor"
lang: "zh"
---

# dify 1.14.0

## 🚀 v1.14.0 有什么新功能？

### 合作
<img width="2632" height="1190" alt="img_v3_02117_67a67218-1ae5-4d68-a45b-3ada592f87fg" src="https://github.com/user-attachments/assets/1d4a3660-8a6a-4b29-9766-4d5b5fd9a51b" />

协作允许工作区成员一起编辑相同的工作流程，并具有同步的图形更新、在线状态以及对谁在哪里工作的共享可见性。

在自托管部署中，协作默认处于关闭状态。通过设置启用它：

```
ENABLE_COLLABORATION_MODE = true
SERVER_WORKER_CLASS = geventwebsocket.gunicorn.workers.GeventWebSocketWorker
NEXT_PUBLIC_SOCKET_URL = your deployment’s WebSocket URL (e.g., wss://dify.example.com)
```

更多详情请参见[完整文档](https://docs.dify.ai/en/use-dify/build/workflow-collaboration)

### 人机交互 (HITL)

- **针对 HITL 的 API 服务** — 对人机交互流程以及现有控制台行为的编程支持。

### MCP 和插件

- **MCP 工具元数据** — 更新后刷新，以便 UI 保持同步。
- **MCP 服务器 URL** — 修复可能破坏 OAuth 和授权 (404) 的双 `/v1`。
- **MCP OAuth 发现** — 安全处理格式错误的 JSON。
- **MCP 模式发布** — 正确映射 `checkbox` 和 `json_object` 类型。
- **插件** — 自动升级策略持久性、本地安装程序和文件输入行为、内部 API 最终用户查找的租户范围。

### 市场和 OAuth

- **市场和 OAuth** — 针对市场流程和 OAuth 登录的针对性修复（包括 GitHub OAuth 上的空电子邮件等边缘情况）。

### UI套件和前端平台

- **`@langgenius/dify-ui`** — 共享原语（例如 **PreviewCard**、**Meter**）、设计令牌以及从临时 `web/base/ui` 到包的广泛迁移。
- **辅助功能** — 日期和时间选择器、自动更新策略选择器、插件和模型选择器中的滚动条以及相关润色。
- **Goto Anything** — 最近的项目、`/go` 命令、更深入的应用子部分；修复 **Cmd+K** （删除有问题的动态导入）。
- **提示编辑器**——斜杠触发的**变量过滤**；键盘在变量列表中**向上/向下**。
- **后续问题** — 改进了建议问题的设置和令牌限制。
- **模态** - ApiKey、提供程序配置和其他重构为带有测试的共享**对话框**模式。

### 可观察性和分析
- **Langfuse** — 可选的**首次令牌时间 (TTFT)** 报告。
- **探索** — 横幅印象跟踪；卡片上的应用程序预览事件跟踪。

### 计费和配额

- 产品堆栈中的 **Quota v3** 集成。
- **计费 UI** — 基于计量表的使用情况呈现；当 API 计费失败时，更有弹性的清理。
- **文件上传程序** — 计费感知行为和副本更新。

### 数据、RAG 和知识

- **汇总索引和 Weaviate** — 修复了将汇总索引与 Weaviate 结合使用时的兼容性。
- **矢量投影** — 在相关的默认投影中包括 `is_summary` 和 `original_chunk_id`。
- **外部和绑定数据集** — 对知识 API 进行更强的租户检查。

### 基础设施和运营

- **Docker Compose** — `api`、`worker` 和 `worker_beat` 的 **健康检查**；模板和环境示例更新（例如 S3 地址样式）。
- **Celery** — 默认工作线程 **并发度提升至 4**；缺少队列修复。
- **PostgreSQL** — 更新的应用程序数据库路径的默认**最大连接数 (200)** 更高。
- **Redis** — **可配置的按键前缀**； Redis 操作的 **重试** 逻辑。
- **TiDB** — 端点支持和相关身份验证绑定迁移（**TiDB 身份验证绑定上的 Qdrant 端点**）。
- **Markdown** — 可选的 **`ALLOW_INLINE_STYLES`** 环境变量，以允许在需要时在渲染的 Markdown 中使用内联 CSS。

### 安全

- **更改电子邮件流程** — 更严格的阶段绑定令牌处理 ([GHSA-4q3w-q5mc-45rq](https://github.com/advisories?query=GHSA-4q3w-q5mc-45rq))。
- **IDOR 强化** — 数据源绑定的租户验证；数据集和 API 所有权检查发现差距的地方。

### 性能
- 优化了图初始化的性能。

### API 和平台内部结构

- **Graphon** — 升级到独立 **Graphon 0.2.2** （替换树内 `dify_graph` 命名和打包）。
- **OpenAPI** — 用于生成 **OpenAPI v2** JSON 和文档指针的脚本。
- **弃用** - 一些旧版控制台 API 被标记为弃用，以支持更新的模式。
- 大型 **SQLAlchemy 2.0** `select()` 迁移，**Pydantic `BaseModel`** 用于许多控制台和服务响应，以及基于 **testcontainers** 的稳定性测试。


## 发生了什么变化
* 测试：将恢复存档的工作流程运行测试迁移到 @YB0y 在 https://github.com/langgenius/dify/pull/34083 中的 testcontainers
* 重构（api）：继续将 dify_graph 与 https://github.com/langgenius/dify/pull/33580 中 @laipz8200 的 API 关注点解耦
* 重构：将dict替换为https://github.com/langgenius/dify/pull/34080中@faizkhairi的knowledge_service中的BedrockRetrievalSetting BaseModel
* 测试：通过 @Desel72 在 https://github.com/langgenius/dify/pull/34038 中将工作流转换器测试迁移到 testcontainers
* 重构(api)：在https://github.com/langgenius/dify/pull/34095中将dify_graph重命名为@WH-2099的graphon
* 重构：在 https://github.com/langgenius/dify/pull/34086 中通过 @RenzoMXD 在服务 API 包装、file_preview 和站点控制器中选择
* 测试：通过https://github.com/langgenius/dify/pull/34087中的@YB0y将数据库检索测试迁移到testcontainers
* 测试：将帐户删除同步测试迁移到 https://github.com/langgenius/dify/pull/34091 中 @YB0y 的 testcontainers
* 测试：通过https://github.com/langgenius/dify/pull/34088中的@YB0y将元数据部分更新测试迁移到testcontainers
* 测试：通过https://github.com/langgenius/dify/pull/34090中的@YB0y将插件参数服务测试迁移到testcontainers
* 测试：https://github.com/langgenius/dify/pull/33212 中 @rajatagarwal-oss 的 services.dataset_services.py 单元测试用例
* 修复：在 https://github.com/langgenius/dify/pull/34043 中通过 @Krishnachaitanyakc 处理 GitHub OAuth 登录中的空电子邮件
* 修复：https://github.com/langgenius/dify/pull/34103 中的 @hjlarry 数据源 api-key 模态 z 索引不正确
* 修复（提示编辑器）：通过@WTW0313在https://github.com/langgenius/dify/pull/34069中修复提示编辑器中意外的模糊效果
* 重构：在https://github.com/langgenius/dify/pull/34101中通过@RenzoMXD在服务API数据集文档和段控制器中选择
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/34099中的@dependabot[bot]将/api中的pypdf从6.9.1提升到6.9.2
* 重构：在 https://github.com/langgenius/dify/pull/34108 中使用 @hyoban 的 ungh 来表示 github api
* 修复：https://github.com/langgenius/dify/pull/34044 中的@Achieve3318 在迭代子图中由空 UUID 创建的数据集查询 (#34004)
* 杂务：在 https://github.com/langgenius/dify/pull/34121 中启用 @hyoban 的无桶文件
* 杂务（deps）：更新nodejs-client中的picomatch版本和https://github.com/langgenius/dify/pull/34123中@WTW0313的Web包
* 修复：https://github.com/langgenius/dify/pull/34120 中@hjlarry 多节点菜单始终显示在左上角
* 重构(web)：通过 https://github.com/langgenius/dify/pull/33960 中的 @mahmoodhamdi 将 7 个枚举转换为 as-const 对象（第 5 批）
* 修复：https://github.com/langgenius/dify/pull/34124中@QuantumGhost导入路径
* 杂务：支持 @laipz8200 在 https://github.com/langgenius/dify/pull/34133 中所需 CI 工作流程中的合并队列状态检查
* 杂务（api）：删除 https://github.com/langgenius/dify/pull/34131 中 @laipz8200 的后端 utcnow 使用情况
* 杂务：在 https://github.com/langgenius/dify/pull/34143 中被 @laipz8200 跳过时保持主要 CI 通道检查稳定
* 杂务：删除过时的 mypy 抑制并通过 @WH-2099 在 https://github.com/langgenius/dify/pull/34130 中对齐数据集服务测试
* 测试：通过https://github.com/langgenius/dify/pull/34092中的@YB0y将人工输入交付测试服务测试迁移到测试容器
* 杂务（deps-dev）：通过https://github.com/langgenius/dify/pull/34117中的@dependabot[bot]将/api中的nltk从3.9.3提升到3.9.4
* 测试：将 api 密钥身份验证服务测试迁移到 https://github.com/langgenius/dify/pull/34147 中 @YB0y 的 testcontainers
* 重构：在 https://github.com/langgenius/dify/pull/34093 中使用 @tmimmanuel 的 EnumText 作为 model_type 和 WorkflowNodeExecution.status
* 测试：通过https://github.com/langgenius/dify/pull/34098中的@YB0y将插件服务测试迁移到testcontainers
* 杂务（deps）：https://github.com/langgenius/dify/pull/34116 中的 @dependabot[bot] 将请求从 /api 中的 2.32.5 提升到 2.33.0
* 测试：将api令牌服务测试迁移到https://github.com/langgenius/dify/pull/34148中@YB0y的测试容器
* 杂务（deps）：在 /sdks/nodejs-client 中由 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/34159 中将大括号从 5.0.4 碰撞到 5.0.5
* 测试：通过https://github.com/langgenius/dify/pull/34089中的@YB0y将身份验证集成测试迁移到testcontainers
* 壮举：在 https://github.com/langgenius/dify/pull/34138 中通过 @hjlarry 添加复制/删除到多节点上下文菜单
* 测试：在 https://github.com/langgenius/dify/pull/34154 中使用 @hyoban 的 happy dom
* 杂务（ci）：通过https://github.com/langgenius/dify/pull/34164中的@1Ckpwee从CI测试工作流程中删除Python 3.11
* ci：跳过@hyoban 在 https://github.com/langgenius/dify/pull/34168 中的重复操作
* 壮举：在 https://github.com/langgenius/dify/pull/34171 中由@fatelei 返回正确的 dify-plugin-daemon 错误消息
* 壮举：https://github.com/langgenius/dify/pull/33138 @GareArc 的企业酒店出口商
* 重构：在 https://github.com/langgenius/dify/pull/34174 中 @tmimmanuel 在 TriggerSubscription 中使用 EnumText 作为 credential_type
* 重构：在https://github.com/langgenius/dify/pull/34197中通过@RenzoMXD选择核心/操作跟踪管理器和跟踪提供程序
*重构（api）：在https://github.com/langgenius/dify/pull/34209中使用@WH-2099的独立graphon包
* 重构：在 https://github.com/langgenius/dify/pull/34204 中使用 @tmimmanuel 的 EnumText 作为提示类型和自定义令牌策略
* 杂务（deps）：https://github.com/langgenius/dify/pull/34210 中 @dependabot[bot] 将 /api 中的加密从 44.0.3 提升到 46.0.6
* 测试：通过 @YB0y 在 https://github.com/langgenius/dify/pull/34207 中将消息清理服务保留测试迁移到 testcontainers
* 重构：在 https://github.com/langgenius/dify/pull/34146 中使用 @Maa-ly 的 select 进行 API 密钥身份验证查找
* 测试：通过https://github.com/langgenius/dify/pull/34220中的@YB0y将元数据服务测试迁移到testcontainers
* 测试：通过https://github.com/langgenius/dify/pull/34218中的@YB0y将工作区服务测试迁移到testcontainers
* 测试：通过https://github.com/langgenius/dify/pull/34219中的@YB0y将标签服务测试迁移到testcontainers
* 重构：https://github.com/langgenius/dify/pull/34205 中的 @RenzoMXD 的核心/工具、代理、callback_handler、加密器、llm_generator、插件、inner_api
* 杂务（ci）：减少 https://github.com/langgenius/dify/pull/34215 中的 @laipz8200 的 Web 测试分片扇出
* 杂务（ci）：从https://github.com/langgenius/dify/pull/34213中@laipz8200的风格通道中删除重复的pyrefly工作
* 修复：通过 @jasonfish568 在 https://github.com/langgenius/dify/pull/31101 中修复 docker-compose.yaml 的 ENV 变量
* 测试：@hyoban 在 https://github.com/langgenius/dify/pull/34193 中 init e2e
* 杂务（deps-dev）：通过https://github.com/langgenius/dify/pull/34243中的@dependabot[bot]将/web中的happy-dom从20.8.8提升到20.8.9
* 测试：通过https://github.com/langgenius/dify/pull/34206中的@YB0y将工作流服务测试迁移到testcontainers
* 杂务（ci）：拆分 API 单元并由 @laipz8200 在 https://github.com/langgenius/dify/pull/34211 中进行集成覆盖率报告
* 杂务（ci）：通过https://github.com/langgenius/dify/pull/34217中的@laipz8200收紧后端工作流程路径过滤器
* 文档：通过 https://github.com/langgenius/dify/pull/34201 中的 @Fronut 统一根目录和本地化自述文件之间的语言切换链接
* 杂务（web）：删除@lyzno1在https://github.com/langgenius/dify/pull/34237中陈旧的i18n检查测试
* Chore(ci)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/34238 中简化 i18n 翻译工作流程
*修复（ci）：通过https://github.com/langgenius/dify/pull/34262中的@lyzno1收紧Claude i18n工作流程范围
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/34248中的@dependabot[bot]将存储组中/api中的boto3从1.42.73提升到1.42.78
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/34247 中的 @dependabot[bot] 将数据库组 /api 中的 redis 要求从 ~=7.3.0 更新为 ~=7.4.0
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/34252 中进行 2 次更新，在 /api 中碰撞 google 组
* 杂务（deps）：将 opik 从 1.10.45 提升到 https://github.com/langgenius/dify/pull/34254 中 /api 中的 https://github.com/langgenius/dify/pull/34254 中的 @dependabot[bot] 的 llm 组中的 1.10.54
* 杂务（deps-dev）：通过 https://github.com/langgenius/dify/pull/34249 中的 @dependabot[bot] 将开发组 /api 中的类型正则表达式要求从 ~=2026.2.28 更新为 ~=2026.3.32
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/34258 中对 /api 中的开发组进行 7 次更新
*壮举（api）：通过@ZeroZ-lab在https://github.com/langgenius/dify/pull/33657中添加删除工作流程功能和错误处理
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/34244中的@dependabot[bot]将烧瓶组中/api中的gunicorn要求从~=25.1.0更新为~=25.3.0
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/34256 中进行 3 次更新，对 /api 中的存储组进行碰撞
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/34257 中对 /api 中的 vdb 组进行 5 次更新
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/34267 中与 en-US 同步翻译
* 杂务（deps）：在 https://github.com/langgenius/dify/pull/34261 中通过 @dependabot[bot] 进行 2 次更新，在 1 个目录中碰撞 github-actions-dependencies 组
* 重构：https://github.com/langgenius/dify/pull/34203 中的 core/rag 文档库、数据源、嵌入、重新排序、@RenzoMXD 检索
* 重构（api）：用https://github.com/langgenius/dify/pull/33704中的@eureka0928在服务层中的Pydantic验证替换json.loads
* 修复：通过 https://github.com/langgenius/dify/pull/34221 中 @jigangz 的摘要内容丰富服务 API 分段响应
* 重构：在https://github.com/langgenius/dify/pull/34241中引入@hyoban的pnpm工作区
* 修复：将 langfuse SDK 升级到 v3+，以获得 https://github.com/langgenius/dify/pull/34265 中 @majiayu000 的 LLM-as-judge 支持
* 修复（工作流程）：通过@WTW0313改进https://github.com/langgenius/dify/pull/34276中的节点组织
* 测试：通过https://github.com/langgenius/dify/pull/34295中的@YB0y将触发器提供程序控制器测试迁移到testcontainers
* 修复（i18n）：将 @t-daisuke 在 https://github.com/langgenius/dify/pull/34294 中的 ja-JP 中的“nodes.note.addNote”翻译为“memoo追加”
* 测试：通过https://github.com/langgenius/dify/pull/34292中的@YB0y将数据源控制器测试迁移到testcontainers
*测试：将应用程序apis控制器测试迁移到https://github.com/langgenius/dify/pull/34291中的@YB0y测试容器
* 测试：将Web忘记密码控制器测试迁移到https://github.com/langgenius/dify/pull/34288中@YB0y的testcontainers
* 修复：在https://github.com/langgenius/dify/pull/34226中@majiayu000发布的MCP模式中映射复选框和json_object类型
*测试：迁移工作区将控制器测试包装到https://github.com/langgenius/dify/pull/34296中的@YB0y测试容器
* 测试：通过https://github.com/langgenius/dify/pull/34289中的@YB0y将Web包装控制器测试迁移到testcontainers
* 测试：将 Web 会话控制器测试迁移到 https://github.com/langgenius/dify/pull/34287 中 @YB0y 的 testcontainers
*测试：将应用程序导入api控制器测试迁移到https://github.com/langgenius/dify/pull/34290中的@YB0y测试容器
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/34301 中的 @dependabot[bot] 将 /api 中的 pygments 从 2.19.2 提升到 2.20.0
* 测试：通过https://github.com/langgenius/dify/pull/34293中的@YB0y将工具提供者控制器测试迁移到testcontainers
* 测试：通过https://github.com/langgenius/dify/pull/34297中的@YB0y将mcp控制器测试迁移到testcontainers
* 重构：使用 EnumText 作为 Provider.quota_type 并通过 https://github.com/langgenius/dify/pull/34299 中的 @tmimmanuel 合并 ProviderQuotaType
* 重构：在 https://github.com/langgenius/dify/pull/34300 中 @tmimmanuel 在提供者模型中使用 EnumText 作为 model_type
* Chore(ci)：将完整的 VDB 矩阵从 https://github.com/langgenius/dify/pull/34216 中的 @laipz8200 移出 PR 路径
* 修复：通过 @ZZITE 在 https://github.com/langgenius/dify/pull/34224 中桥接 Dify 设计令牌以实现流化表全屏
* 修复(web): 修复 https://github.com/langgenius/dify/pull/33740 中 @fisherOne1 的文档详细信息页面状态与列表页面不一致的问题
* 修复：https://github.com/langgenius/dify/pull/34097 中 @asukaminato0721 的数字计数相同时的静默差异
* 重构(api)：缩小otel仪器由@wangji0923在https://github.com/langgenius/dify/pull/33853中输入
* 修复（http）：在 https://github.com/langgenius/dify/pull/34185 中 @owldev127 在 HTTP 正文选择器中公开结构化变量
* 修复（dev）：在https://github.com/langgenius/dify/pull/33927中由@dominciyue加载start-docker-compose中的中间件环境
* 壮举：https://github.com/langgenius/dify/pull/33105 中的 @SeasonPilot 将默认 celery 工作线程并发数增加到 4
* 测试：在 https://github.com/langgenius/dify/pull/32648 中添加 api/服务保留、企业、@cryptus-neoxys 插件的测试
* 琐事：尝试避免供应链安全 by @hyoban in https://github.com/langgenius/dify/pull/34317
*测试：将抹布管道控制器测试迁移到https://github.com/langgenius/dify/pull/34303中的@YB0y测试容器
*测试：通过https://github.com/langgenius/dify/pull/34304中的@YB0y将抹布管道数据集控制器测试迁移到testcontainers
* 测试：通过https://github.com/langgenius/dify/pull/34305中的@YB0y将rag管道导入控制器测试迁移到testcontainers
*测试：将抹布管道工作流控制器测试迁移到https://github.com/langgenius/dify/pull/34306中的@YB0y测试容器
* 测试：将探索对话控制器测试迁移到https://github.com/langgenius/dify/pull/34312中的@YB0y测试容器
* 修复（网络）：https://github.com/langgenius/dify/pull/34323 中的 @lyzno1 国际化 DSL 导出模态标签
* 修复(ci): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/34331 中恢复 i18n 调度桥
* 琐事：标准化 freezeset 文字和 myscale 由 @WH-2099 在 https://github.com/langgenius/dify/pull/34327 中输入
* 重构（nodejs-sdk）：用 https://github.com/langgenius/dify/pull/34325 中的 @lyzno1 的 fetch 传输替换 axios
* 修复（web）：在 https://github.com/langgenius/dify/pull/34332 中本地化 @lyzno1 的错误边界副本
* 修复(ci): 由 @lyzno1 在 https://github.com/langgenius/dify/pull/34342 中构造 i18n 同步负载和 PR 流
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/34339 中与 en-US 同步翻译
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/34338 中与 en-US 同步翻译
*测试：将apikey控制器测试迁移到https://github.com/langgenius/dify/pull/34286中@Desel72的测试容器
* 重构：在 https://github.com/langgenius/dify/pull/34282 中的 @Desel72 在控制台应用程序控制器中使用 sessionmaker().begin()
* 重构：在 https://github.com/langgenius/dify/pull/34283 中的 @Desel72 在控制台数据集控制器中使用 sessionmaker().begin()
* 重构：在 https://github.com/langgenius/dify/pull/34281 中的 @Desel72 在 Web 和 mcp 控制器中使用 sessionmaker().begin()
* 重构：在控制台工作区和杂项中使用 sessionmaker().begin() ... by @Desel72 in https://github.com/langgenius/dify/pull/34284
* 重构（api）：在https://github.com/langgenius/dify/pull/34350中@majiayu000在请求查询解析中忽略干净的冗余类型🤖🤖🤖
* perf：使用全局httpx client，而不是按请求在https://github.com/langgenius/dify/pull/34311中由@fatelei创建新的httpx
* feat(docker)：在https://github.com/langgenius/dify/pull/34345中添加@majiayu000对api、worker和worker_beat服务的健康检查
* 重构：通过https://github.com/langgenius/dify/pull/34334中的@WTW0313增强ELK布局处理
* 重构：https://github.com/langgenius/dify/pull/34359 中@RenzoMXD 的 core/app pipeline、core/datasource 和 core/indexing_runner
* 修复：变量聚合器无法通过 @hjlarry 在 https://github.com/langgenius/dify/pull/34361 中进行 click 组切换
* 重构：在https://github.com/langgenius/dify/pull/34371中由@RenzoMXD选择13个小服务文件
* 修复：https://github.com/langgenius/dify/pull/34151 中 @EndlessLucky 支持 IndexProcessor 预览格式中的 qa_preview 形状
* 重构（api）：用https://github.com/langgenius/dify/pull/34277中@eureka0928在控制器和基础层中的Pydantic验证替换json.loads
* 修复：https://github.com/langgenius/dify/pull/34328中@jimmyzhuu初始化Mochow client时应用百度Vector DB连接超时
* 重构：在https://github.com/langgenius/dify/pull/34373中通过@RenzoMXD选择10个服务文件
* 琐事：通过 https://github.com/langgenius/dify/pull/34404 中的@hyoban 将提交钩子移动到根
* 修复：sqlalchemy.exc.InvalidRequestError：无法在封闭的 tran 上操作…作者：https://github.com/langgenius/dify/pull/34407 中的@fatelei
* 重构：通过https://github.com/langgenius/dify/pull/34379中的@xr843将service_api和inner_api迁移到sessionmaker模式
* 重构：在https://github.com/langgenius/dify/pull/34414中通过@RenzoMXD选择message_service和ops_service
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/34425 中的 @dependabot[bot] 将 aiohttp 从 /api 中的 3.13.3 提升到 3.13.4
* 重构（api）：在 https://github.com/langgenius/dify/pull/34424 中通过 @YB0y 键入 OpsTraceProviderConfigMap 和 TracingProviderCon…
* 重构（web）：通过 @lyzno1 迁移 https://github.com/langgenius/dify/pull/34433 中剩余的 toast 使用情况
* 重构：https://github.com/langgenius/dify/pull/34434 中的 @RenzoMXD 的 model_load_balancing_service 和 api_tools_manage_service
* 修复：修复https://github.com/langgenius/dify/pull/34440中的@fatelei online_drive不是有效的datasource_type
* 重构(api)：在https://github.com/langgenius/dify/pull/34421中用@WH-2099替换测试夹具副作用导入
* 重构：在https://github.com/langgenius/dify/pull/34441中通过@RenzoMXD在tag_service中选择
*杂务（api）：将Python支持与https://github.com/langgenius/dify/pull/34419中的@WH-2099的3.12对齐
* 修复：在 https://github.com/langgenius/dify/pull/34436 中添加租户/数据集所有权检查以防止 @LikiosSedo 的 IDOR 漏洞
* 测试：通过 @akashseth-ifp 在 https://github.com/langgenius/dify/pull/33222 中添加对 api/services/rag_pipeline 文件夹的测试
* 测试：通过 @akashseth-ifp 在 https://github.com/langgenius/dify/pull/33288 中添加了对核心帮助程序文件夹中剩余文件的单元测试
* 重构：https://github.com/langgenius/dify/pull/34415 中的 @hyoban 更新为 Tailwind v4
* 重构：@hyoban 在 https://github.com/langgenius/dify/pull/34453 中分割图标集合
* 测试：为 https://github.com/langgenius/dify/pull/33223 中的 @poojanInfocusp 添加服务和任务第 4 部分的单元测试
* 重构（api）：通过 @WH-2099 在 https://github.com/langgenius/dify/pull/34447 中加强登录和包装输入
* ci：https://github.com/langgenius/dify/pull/34452中的@asukaminato0721将pyrefly版本更新为0.59.1
*杂务：清理https://github.com/langgenius/dify/pull/34478中@hyoban无用的顺风参考
* 重构：在https://github.com/langgenius/dify/pull/34479中通过@RenzoMXD在metadata_service中选择
* 重构：在https://github.com/langgenius/dify/pull/34477中通过@RenzoMXD在workflow_tools_manage_service中选择
*修复：删除https://github.com/langgenius/dify/pull/34461中@majiayu000在MCP基本会话中的冗余转换
* 修复（安全）：添加tenant_id验证以防止https://github.com/langgenius/dify/pull/34456中@xr843在数据源绑定中出现IDOR
* 杂务：@hyoban 在 https://github.com/langgenius/dify/pull/34481 中修复了 knip
* 修复：修复 https://github.com/langgenius/dify/pull/34492 中 @fatelei 导入 dsl 失败的问题
* 重构（api）：在 https://github.com/langgenius/dify/pull/34483 中通过 @YB0y 键入 get_knowledge_rate_limit 和 KnowledgeRateLimitD…
* 重构（api）：在 https://github.com/langgenius/dify/pull/34486 中使用 @YB0y 的 RawWebhookDataDict TypedDict 进行类型 webhook 数据提取
* 重构（api）：类型命中测试通过 https://github.com/langgenius/dify/pull/34484 中的 @YB0y 使用 TypedDict 检索响应
* 重构（api）：在 https://github.com/langgenius/dify/pull/34485 中使用 @YB0y 的 IdentityDict TypedDict 键入日志身份字典
* 测试：将service_api数据集控制器测试迁移到https://github.com/langgenius/dify/pull/34423中@YB0y的testcontainers
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/34487 更新部门
* 重构：将 useContext 替换为 https://github.com/langgenius/dify/pull/34450 中 @agenthaulk 在所选批次中的使用
* 重构：在https://github.com/langgenius/dify/pull/34493中通过@RenzoMXD在external_knowledge_service中选择
* 重构：在https://github.com/langgenius/dify/pull/34495中通过@RenzoMXD在rag_pipeline中选择
* 重构：https://github.com/langgenius/dify/pull/34496中@RenzoMXD在account_service（AccountService类）中选择
* 杂务：在 https://github.com/langgenius/dify/pull/34502 中通过 @hyoban 覆盖 lodash
*修复（网络）：恢复UI选择https://github.com/langgenius/dify/pull/34501中@lyzno1的公共导出
* 杂务：将 https://github.com/langgenius/dify/pull/34506 中的 @hyoban 的代码检查器插件更新为 1.5.1
* 重构：https://github.com/langgenius/dify/pull/34500中@RenzoMXD在account_service（RegisterService类）中选择
* 重构（api）：https://github.com/langgenius/dify/pull/34482 中 @YB0y 的 TypedDict 类型注释服务字典
* 重构(web)：用 @mvanhorn 在 https://github.com/langgenius/dify/pull/33473 中的 shiki 替换react-syntax-highlighter
* 重构（web）：将概念页面选择器迁移到https://github.com/langgenius/dify/pull/34508中的@lyzno1虚拟的tanstack
* 测试：为应用商店和注释组件添加单元测试，通过@CodingOnStar在https://github.com/langgenius/dify/pull/34510中增强状态管理和UI交互的覆盖范围
* 重构：在https://github.com/langgenius/dify/pull/34499中通过@RenzoMXD在account_service（TenantService类）中选择
* 重构：在https://github.com/langgenius/dify/pull/34525中通过@RenzoMXD在dataset_service（DatasetService类）中选择
* 重构（api）：在 https://github.com/langgenius/dify/pull/34526 中使用 @YB0y 的 CelerySqlcommenterTagsDict TypedDict 键入 celery sqlcommenter 标签
* 重构（api）：在 https://github.com/langgenius/dify/pull/34527 中使用 @YB0y 的 MessagesCleanStatsDict TypedDict 键入消息清理统计信息
* 构建：包含 docker 中的软件包，由@hyoban 在 https://github.com/langgenius/dify/pull/34532 中构建
* 重构：在https://github.com/langgenius/dify/pull/34503中通过@RenzoMXD在annotation_service中选择
* 重构：在https://github.com/langgenius/dify/pull/34528中通过@RenzoMXD在dataset_service（DocumentService类）中选择
* 重构：在https://github.com/langgenius/dify/pull/34548中通过@RenzoMXD在datasource_provider_service中选择
* 重构：在 dataset_service 中选择（SegmentService 和剩余的类… by @RenzoMXD in https://github.com/langgenius/dify/pull/34547
* 重构：通过 https://github.com/langgenius/dify/pull/34561 中的 @agenthaulk 将 ProviderQuotaType if/elif 转换为 match/case (#30001)
* 重构：通过 @agenthaulk 在 https://github.com/langgenius/dify/pull/34562 中将 AppMode if/elif 转换为服务文件中的匹配/大小写 (#30001)
* 重构：通过 @agenthaulk 在 https://github.com/langgenius/dify/pull/34563 中将 AppMode if/elif 转换为 app_generate_service (#30001) 中的匹配/大小写
* 重构（api）：在 https://github.com/langgenius/dify/pull/34531 中使用 @YB0y 的 RunsWithRelatedCountsDict TypedDict 键入工作流程运行删除/计数结果
* 修复：减轻Worker和Worker Beat服务的健康检查，并在https://github.com/langgenius/dify/pull/34572中@kurokobo默认禁用它们
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/34578中的@dependabot[bot]将存储组中/api中的boto3从1.42.78撞到1.42.83
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/34585 中进行 2 次更新，对 /api 中的存储组进行碰撞
* 杂务（deps）：将烧瓶压缩从 1.23 撞到 https://github.com/langgenius/dify/pull/34580 中烧瓶组 /api 中的 1.24
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/34581 中进行 4 次更新，在 /api 中碰撞 google 组
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/34582 中的 @dependabot[bot] 进行 4 次更新来提高 github-actions-dependencies 组
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/34584中的@dependabot[bot]将数据库组中/api中的sqlalchemy从2.0.48提升到2.0.49
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/34583 中进行 3 次更新，在 /api 中碰撞 llm 组
* 重构（api）：在https://github.com/langgenius/dify/pull/34593中通过@YB0y在日志过滤器中重用IdentityDict TypedDict
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/34573 中的 @dependabot[bot] 将烧瓶压缩要求从 <1.24,>=1.17 更新为 >=1.17,<1.25 在烧瓶组 /api 中
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/34575 中的 @dependabot[bot] 将 google-auth-httplib2 从 0.3.0 提升到 Google 群组 /api 中的 0.3.1
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/34586 中对 /api 中的 vdb 组进行 7 次更新
* 重构（api）：在 https://github.com/langgenius/dify/pull/34590 中使用 @YB0y 的 TypedDict 输入孤立的草稿变量统计信息
* 重构（api）：在 https://github.com/langgenius/dify/pull/34589 中使用 @jakearmstrong59 的 UploadFileDict TypedDict 类型上传文件序列化
* 重构（api）：在 https://github.com/langgenius/dify/pull/34594 中使用 @YB0y 的 ArchiveManifestDict TypedDict 键入存档清单
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/34579 中对 /api 中的开发组进行 6 次更新
* 重构（api）：使用https://github.com/langgenius/dify/pull/34530中@YB0y的RelatedCountsDict TypedDict键入工作流运行相关计数
* 杂务（deps-dev）：在 https://github.com/langgenius/dify/pull/34601 中 @dependabot[bot] 通过 20 个更新将开发组跨越 1 个目录
* 重构(api)：https://github.com/langgenius/dify/pull/34609中@YB0y使用StorageStatisticsDict TypedDict类型存储统计信息
* 重构（api）：在 https://github.com/langgenius/dify/pull/34610 中使用 @YB0y 的 TypedDict 键入文档摘要状态详细信息
* 重构（api）：在 https://github.com/langgenius/dify/pull/34611 中使用 @YB0y 的 CrawlStatusDict TypedDict 键入爬行状态字典
* 重构（api）：在 https://github.com/langgenius/dify/pull/34612 中使用 @YB0y 的 TypedDict 键入 MCP 工具架构和参数
* 重构（api）：在https://github.com/langgenius/dify/pull/34616中使用@jakearmstrong59的NotificationResponseDict TypedDict类型通知响应
* 重构（api）：在 https://github.com/langgenius/dify/pull/34613 中使用 @YB0y 的 InvitationDetailDict TypedDict 输入邀请详细信息
* 重构（api）：在 https://github.com/langgenius/dify/pull/34621 中使用 @statxc 的 TypedDict 类型 LLM 生成器结果
* 重构（api）：在retrieve_model上强制严格输入以解析https://github.com/langgenius/dify/pull/34614中@iamPulakesh的FIXME
* 重构（api）：在 https://github.com/langgenius/dify/pull/34625 中使用 @statxc 的 TypedDict 类型数据集服务字典
* 重构(api)：在https://github.com/langgenius/dify/pull/34627中使用@statxc的TypedDict类型插件迁移结果
* 修复：网络应用程序用户头像在 https://github.com/langgenius/dify/pull/34624 中显示不正确的黑色（@hjlarry）
* 重构：迁移 session.query 以通过 https://github.com/langgenius/dify/pull/34608 中的 @RenzoMXD 在核心杂项模块中选择 API
* 重构：迁移 session.query 以通过 https://github.com/langgenius/dify/pull/34617 中的 @RenzoMXD 在小任务文件中选择 API
* 重构：将 session.query 迁移到 https://github.com/langgenius/dify/pull/34607 中的 @aliworksx08 在控制台控制器中选择 API
* 修复：通过 https://github.com/langgenius/dify/pull/34637 中的 @lyzno1 简化预提交钩子流程
* 重构：用 https://github.com/langgenius/dify/pull/34422 中的 @YB0y 中的 TagService 中的 BaseModel 有效负载替换字典参数
* 重构：迁移 session.query 以在 https://github.com/langgenius/dify/pull/34619 中的 @RenzoMXD 同步任务和服务中选择 API
* 重构：迁移 session.query 以在 end_user_service 中选择 API 以及 @RenzoMXD 在 https://github.com/langgenius/dify/pull/34620 中选择小任务
* 重构：迁移session.query以通过https://github.com/langgenius/dify/pull/34638中的@RenzoMXD在retrieval_service中选择API
*修复：通过https://github.com/langgenius/dify/pull/34644中的@lyzno1改进应用程序删除警报对话框UX
* 重构：迁移 session.query 以通过 https://github.com/langgenius/dify/pull/34646 中的 @RenzoMXD 在文档任务文件中选择 API
* 重构（api）：类型应用程序参数功能通过FeatureToggleD切换...由https://github.com/langgenius/dify/pull/34651中的@YB0y
* 重构：迁移 session.query 以在摘要中选择 API 并删除 https://github.com/langgenius/dify/pull/34650 中 @RenzoMXD 的文档任务
* 重构（api）：在https://github.com/langgenius/dify/pull/34649中@iamPulakesh将字典迁移到计费服务中的TypedDicts
* 重构：迁移session.query以在https://github.com/langgenius/dify/pull/34648中的@RenzoMXD的rag管道任务文件中选择API
* 重构（api）：在 https://github.com/langgenius/dify/pull/34645 中使用 @YB0y 的 TypedDict 键入 Webhook 验证结果和工作流程输入
* 重构（api）：使用 TypedDict 类型 aliyun trace utils 并通过 https://github.com/langgenius/dify/pull/34642 中的 @YB0y 收紧返回类型
* 重构（api）：在 https://github.com/langgenius/dify/pull/34641 中使用 @statxc 的 TypedDict 类型错误流响应
* 重构（api）：在 https://github.com/langgenius/dify/pull/34639 中使用 @statxc 的 TypedDict 类型负载平衡配置字典
* 修复(#34636): 将 test_app_dsl_service 中的 SimpleNamespace 替换为 https://github.com/langgenius/dify/pull/34659 中 @iamPulakesh 的 MagicMock(spec=App)
* 修复：https://github.com/langgenius/dify/pull/34569 中的 var 输入标签缺少 @hjlarry 的图标
* 修复（工作流程）：https://github.com/langgenius/dify/pull/34666 中的 @lyzno1 正确验证环境变量选择器
* 杂务：删除https://github.com/langgenius/dify/pull/34658中@lyzno1未使用的pnpm覆盖
* 重构(api)：https://github.com/langgenius/dify/pull/34380中的@eureka0928将json.loads替换为安全和工具层中的Pydantic验证
* 重构(api)：在https://github.com/langgenius/dify/pull/34633中提取@corevibe555共享的ResponseModel
* 重构（api）：在https://github.com/langgenius/dify/pull/34674中通过@statxc将VDB to_index_struct与VectorIndexStructDict TypedDict键入
* 重构（api）：在 https://github.com/langgenius/dify/pull/34675 中使用 @statxc 的 VectorIndexStructDict TypedDict 类型 gen_index_struct_dict
* 重构(api)：https://github.com/langgenius/dify/pull/34671中@YB0y在workflow_entry中使用TypedDicts键入单节点图结构
* 重构(api)：在https://github.com/langgenius/dify/pull/34672中使用@statxc的IndexingResultDict TypedDict类型索引结果
* 重构（api）：使用 TypedDict 键入租户自定义配置，并通过 https://github.com/langgenius/dify/pull/34670 中的 @YB0y 收紧 MCP 标头类型
* 重构（api）：在 https://github.com/langgenius/dify/pull/34677 中使用 @statxc 的 TypedDicts 键入 VDB 配置参数字典
* 重构（api）：在 https://github.com/langgenius/dify/pull/34678 中使用 @statxc 的 TypedDicts 类型 Chroma 和 AnalyticDB 配置参数字典
* 重构（api）：通过 https://github.com/langgenius/dify/pull/34685 中的 @corevibe555 将共享 RAG 域实体提取到 core/rag/entity
* 重构（api）：通过https://github.com/langgenius/dify/pull/34694中的@corevibe555将共享身份验证请求有效负载重复删除到auth_entities.py中
* 重构（api）：清理https://github.com/langgenius/dify/pull/34681中@iamPulakesh在CotChatAgentRunner中输入的AssistantPromptMessage
* 重构（api）：在 https://github.com/langgenius/dify/pull/34680 中使用 @statxc 的 I18nObjectDict TypedDict 类型 I18nObject.to_dict
* 重构：迁移session.query以在https://github.com/langgenius/dify/pull/34684中由@RenzoMXD批量选择小任务文件中的API
* 重构（api）：通过 https://github.com/langgenius/dify/pull/34692 中的 @corevibe555 将消费者从 core/rag/entities/ 迁移到共享 RAG 域实体
* 重构（api）：通过https://github.com/langgenius/dify/pull/34689中的@corevibe555从服务层删除重复的RAG实体
* 重构：在控制器、事件、模型和任务中使用 sessionmaker 1 by @carlos4s in https://github.com/langgenius/dify/pull/34693
* 重构：通过 https://github.com/langgenius/dify/pull/34697 中的 @RenzoMXD 将 VDB 配置类中的非类型化字典替换为 TypedDict
* 重构（api）：通过https://github.com/langgenius/dify/pull/34698中的@corevibe555收紧Tenant.custom_config_dict和MCPToolProvider.headers的类型
* 重构（api）：通过https://github.com/langgenius/dify/pull/34701中的@corevibe555对数据源实体中的I18nObject进行重复数据删除
* 修复：backendModelConfig.chat_prompt_config.prompt在https://github.com/langgenius/dify/pull/34709中未被@fatelei定义
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/34704 更新部门
* 重构(api)：在https://github.com/langgenius/dify/pull/34690中通过@corevibe555删除重复的RAG索引实体并合并导入路径
* 重构（api）：通过https://github.com/langgenius/dify/pull/34700中的@corevibe555将共享控制器请求模式去重复到controller_schemas.py中
* ci：通过 @hyoban 在 https://github.com/langgenius/dify/pull/34713 中更新网络更改范围
* 重构：通过@hj24在https://github.com/langgenius/dify/pull/34340中增强计费信息响应处理
*修复(web):避免https://github.com/langgenius/dify/pull/34676中@lyzno1在滑块中预水化脚本
* 重构：在https://github.com/langgenius/dify/pull/34696中@carlos4s在小型服务2中使用sessionmaker
* 修复：https://github.com/langgenius/dify/pull/34717 中 @IthacaDream 的遗留 model_type 反序列化回归
* 重构（api）：通过https://github.com/langgenius/dify/pull/34718中的@corevibe555对跨字段和控制器的Pydantic模型进行重复数据删除
* 构建：在 docker 中包含 vinext，由 @hyoban 在 https://github.com/langgenius/dify/pull/34535 中构建
* 杂务：在 https://github.com/langgenius/dify/pull/34726 中删除 @hyoban 的原始 vite 部门
* feat(web)：添加 ALLOW_INLINE_STYLES 环境变量以在 https://github.com/langgenius/dify/pull/34719 中的 @s-kawamura-upgrade 的 Markdown 渲染中选择加入内联 CSS
* 测试：通过@CodingOnStar在https://github.com/langgenius/dify/pull/34722中添加访问控制组件的单元测试，以增强覆盖范围和可靠性
*修复：更新@hyoban在https://github.com/langgenius/dify/pull/34735中ky如何处理错误
* 修复（ci）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/34738 中修复 i18n 桥和翻译工作流程
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/34742 中与 en-US 同步翻译
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/34745 中与 en-US 同步翻译
* 杂务：将提示编辑器 var 检查与 @hjlarry 在 https://github.com/langgenius/dify/pull/34715 中的使用检查列表检查对齐
* 修复：为decode_plugin_from_ident 添加向后兼容的查询参数… by @zhangbububu in https://github.com/langgenius/dify/pull/34720
*修复：修复https://github.com/langgenius/dify/pull/34728中@fatelei的导入错误
* 杂务（deps）：https://github.com/langgenius/dify/pull/34776 中的 @dependabot[bot] 将 /api 中的加密从 46.0.6 提升到 46.0.7
* 重构：迁移session.query以在https://github.com/langgenius/dify/pull/34775中@aliworksx08的计划清理任务中选择API
* 重构（api）：在触发器提供程序服务和数据集中使用 sessionmaker…由 @carlos4s 在 https://github.com/langgenius/dify/pull/34774 中
* 重构（api）：通过 @tmimmanuel 在 https://github.com/langgenius/dify/pull/34773 中收紧琐碎 lint 和配置修复中的类型
* 重构：迁移session.query以在https://github.com/langgenius/dify/pull/34772中的@RenzoMXD删除对话任务中选择API
* 重构（api）：在https://github.com/langgenius/dify/pull/34771中的@carlos4s在核心应用程序生成器和管道中使用sessionmaker
* 重构（api）：在https://github.com/langgenius/dify/pull/34764中@carlos4s在插件和触发器服务中使用sessionmaker
* 重构：迁移 session.query 以在删除段中选择 API 并通过 @RenzoMXD 在 https://github.com/langgenius/dify/pull/34763 中重新生成摘要任务
* 重构：迁移 session.query 以在批量清理中选择 API，并通过 @RenzoMXD 在 https://github.com/langgenius/dify/pull/34760 中禁用段任务
* 重构：迁移 session.query 以在 https://github.com/langgenius/dify/pull/34761 中的 @RenzoMXD 添加文档和清理文档任务中选择 API
* 重构（api）：在最终用户中使用 sessionmaker，https://github.com/langgenius/dify/pull/34765 中 @carlos4s 的保留和清理服务
* 重构（api）：在https://github.com/langgenius/dify/pull/34759中通过@jakearmstrong59从rag_pipeline_dsl_service中删除重复的ImportMode和ImportStatus枚举
* 重构：通过 https://github.com/langgenius/dify/pull/34769 中的 @dataCenter430 将 FileTransferMethod if/elif 转换为 match/case (#30001)
* 重构（api）：通过https://github.com/langgenius/dify/pull/34755中的@jakearmstrong59将工作流控制器模式去重到controller_schemas.py中
* 重构：通过 https://github.com/langgenius/dify/pull/34780 中的 @dataCenter430 将 importStatus if/elif 转换为 match/case (#30001)
* 重构：通过 https://github.com/langgenius/dify/pull/34782 中的 @dataCenter430 将 webapp auth 类型 if/elif 转换为 match/case (#30001)
* 重构：通过 https://github.com/langgenius/dify/pull/34768 中的 @dataCenter430 将 ToolProviderType if/elif 转换为 match/case (#30001)
* 重构：通过https://github.com/langgenius/dify/pull/34770中的@dataCenter430将segmentType if/elif转换为webhook_service.py中的匹配/大小写（#30001）
* 测试：通过https://github.com/langgenius/dify/pull/34751中的@volcano303将recommended_app_service测试迁移到testcontainers
* 重构：通过 @dataCenter430 在 https://github.com/langgenius/dify/pull/34783 中将 file-transfer-method-tools if/elif 转换为 match/case (#30001)
* 重构：通过https://github.com/langgenius/dify/pull/34785中的@dataCenter430将segmentType工作流程if/elif转换为match/case
* 重构：通过 https://github.com/langgenius/dify/pull/34784 中的 @dataCenter430 将 SegmentType 控制器 if/elif 转换为 match/case (#30001)
* 重构：通过 https://github.com/langgenius/dify/pull/34788 中的 @dataCenter430 将 file-transfer-method-pipeline if/elif 转换为 match/case (#30001)
* 重构：通过 https://github.com/langgenius/dify/pull/34789 中的 @dataCenter430 将 appMode 控制器 if/elif 转换为 match/case (#30001)
* 重构：通过 https://github.com/langgenius/dify/pull/34790 中的 @dataCenter430 将 appmode 插件 if/elif 转换为 match/case (#30001)
* 重构：通过 https://github.com/langgenius/dify/pull/34791 中的 @dataCenter430 将 ProviderQuota if/elif 转换为 match/case (#30001)
* 修复：复制按钮在 API 服务器和 API 关键页面（@BrianWang1990 在 https://github.com/langgenius/dify/pull/34515 中）不起作用
* 壮举：redis 在 https://github.com/langgenius/dify/pull/34566 中添加 @fatelei 的重试逻辑
* 测试：在https://github.com/langgenius/dify/pull/34285中添加@majiayu000创建应用程序和注销的e2e场景
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/34544 中的 @dependabot[bot] 将 /api 中的 Litellm 从 1.82.6 提升到 1.83.0
* 重构：通过 https://github.com/langgenius/dify/pull/34797 中的 @dataCenter430 将 TelemetryCase if/elif 转换为 match/case (#3001)
* 重构：https://github.com/langgenius/dify/pull/34758 中的 @jakearmstrong59 将 DefaultRetrievalModelDict TypedDict 删除重复到retrieval_service.py
* 重构（api）：在https://github.com/langgenius/dify/pull/34805中@carlos4s在工作流和RAG管道服务中使用sessionmaker
* 重构（api）：在https://github.com/langgenius/dify/pull/34811中@carlos4s在数据源提供者服务中使用sessionmaker
* 重构：迁移session.query以在https://github.com/langgenius/dify/pull/34813中的@RenzoMXD文档索引同步任务中选择API
* 重构：将session.query迁移到https://github.com/langgenius/dify/pull/34814中@aliworksx08在核心工具中选择API
* 重构：通过 https://github.com/langgenius/dify/pull/34794 中的 @dataCenter430 将 ToolProviderType if/elif 转换为 match/case (#30001)
* 重构：迁移 session.query 以在 https://github.com/langgenius/dify/pull/34815 中的 @RenzoMXD 的清理数据集任务中选择 API
*重构（api）：在https://github.com/langgenius/dify/pull/34818中@carlos4s在pgvecto_rs VDB服务中使用sessionmaker
* 重构：将session.query迁移到https://github.com/langgenius/dify/pull/34817中@aliworksx08在插件服务中选择API
* 重构：迁移 session.query 以在 https://github.com/langgenius/dify/pull/34819 中的 @RenzoMXD 的交易数据集向量索引任务中选择 API
* 重构（api）：通过 https://github.com/langgenius/dify/pull/34762 中的 @aliworksx08 将 DSL 共享实体去重到 dsl_entities.py
* 重构（api）：在https://github.com/langgenius/dify/pull/34812中@carlos4s在内置工具管理服务中使用sessionmaker
* 修复(web): 在 https://github.com/langgenius/dify/pull/34820 中使用 nuqs 记录 @lyzno1 的对话 url 状态
* 重构（api）：在https://github.com/langgenius/dify/pull/34795中由@jonathanchang31在AppModelConfig.from_model_config_dict中删除重复的json序列化
*修复（docker）：恢复https://github.com/langgenius/dify/pull/34826中@laipz8200的S3_ADDRESS_STYLE环境示例
* 测试：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/34802 中添加 AppPublisher、Sidebar、Chat、FileUploader、Form Demo、Notion Page Selector、Prompt Editor 和 Header Navigation 组件的单元测试
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/34833 中更新部门
* 重构(api)：减少https://github.com/langgenius/dify/pull/34825中@laipz8200的Dify GraphInitParams使用
* 修复(web): 通过 https://github.com/langgenius/dify/pull/34804 中的 @balancetheworld 解析工具输出模式中的 Dify 紧凑数组类型
* ci：由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/34821 中凹凸的pyrefly 版本
*修复：修复remove_leading_symbols删除[由https://github.com/langgenius/dify/pull/34832中的@fatelei
* 杂务：从 npm 安装 @hyoban 在 https://github.com/langgenius/dify/pull/34840 中的 vinext
* 修复：修复 https://github.com/langgenius/dify/pull/34845 中 @fatelei 的 sqlalchemy.orm.exc.DetachedInstanceError
* 重构：将session.query迁移到https://github.com/langgenius/dify/pull/34849中的@aliworksx08在webhook服务中选择API
* 重构：将session.query迁移到https://github.com/langgenius/dify/pull/34852中@aliworksx08在文件服务中选择API
* 重构：迁移session.query以在https://github.com/langgenius/dify/pull/34847中@RenzoMXD的交易数据集索引更新任务中选择API
* 重构（api）：通过https://github.com/langgenius/dify/pull/34793中的@jonathanchang31删除AppModelConfig中重复的EnabledConfig属性逻辑
* 重构：通过 https://github.com/langgenius/dify/pull/34859 中的 @ai-hpc 将 web human_input_form 从 reqparse 迁移到 Pydantic BaseModel
* 杂务：从https://github.com/langgenius/dify/pull/34860中的@ai-hpc从rag_pipeline_workflow中删除注释掉的reqparse代码
* 重构：通过 https://github.com/langgenius/dify/pull/34858 中的 @ai-hpc 将控制台 human_input_form 从 reqparse 迁移到 PydanticBaseModel
* 重构：https://github.com/langgenius/dify/pull/34806中@sxxtony将TrialApp和AccountTrialAppRecord迁移到TypeBase
* 重构（api）：在https://github.com/langgenius/dify/pull/34873中使用@YB0y的TypedDicts类型推荐应用程序数据库检索字典
* 重构（api）：在 https://github.com/langgenius/dify/pull/34871 中使用 @dataCenter430 的 TypedDicts 键入 Celery SSL 选项和 Sentinel 传输字典
* 重构（api）：在 https://github.com/langgenius/dify/pull/34870 中使用 @dataCenter430 的 TypedDicts 类型 OpenSearch/Lindorm/Huawei VDB 配置参数字典
* 重构：通过 https://github.com/langgenius/dify/pull/34869 中的 @dataCenter430 将 appmode 杂项 if/elif 转换为 match/case (#30001)
* 修复(mcp): 在 https://github.com/langgenius/dify/pull/34868 中捕获 OAuth 发现函数中的 JSONDecodeError 🤖🤖🤖 by @jeanibarz
* 重构（api）：在 https://github.com/langgenius/dify/pull/34879 中使用 @volcano303 的 TypedDict 类型 DatasourceProviderApiEntity.to_dict
* 重构（模型）：用 Tenant 和 MCPToo 中的精确类型替换 Any… by @corevibe555 in https://github.com/langgenius/dify/pull/34880
* 重构(api): 在 https://github.com/langgenius/dify/pull/34848 中 @carlos4s 在依赖和 tidb_vector VDB 服务中使用 sessionmaker
*修复（api）：用https://github.com/langgenius/dify/pull/34865中的@iamPulakesh消息转换器中正确的运行时类型检查替换`assert isinstance`
*修复（api）：防止https://github.com/langgenius/dify/pull/34744中@laipz8200的跨租户外部API使用检查披露
* 重构（web）：通过https://github.com/langgenius/dify/pull/34889中的@lyzno1将头像移动到基本ui
* 重构（api）：类型format_preview返回https://github.com/langgenius/dify/pull/34893中的@volcano303索引处理器中的TypedDicts
* 重构(api)：现代化类型注释——用|替换Optional/Union语法由 @corevibe555 在 https://github.com/langgenius/dify/pull/34888 中提供
* 重构：https://github.com/langgenius/dify/pull/34897中@sxxtony将TrialApp和AccountTrialAppRecord迁移到TypeBase
* 重构（api）：将可选/联合替换为 |语法，通过 @corevibe555 在 https://github.com/langgenius/dify/pull/34894 中删除无效的 AnyFunction
* 重构（mcp）：删除未使用的 AnyFunction 别名，通过 https://github.com/langgenius/dify/pull/34890 中的 @corevibe555 收紧回调类型
* 修复（web）：将正在进行的跟踪项分配给https://github.com/langgenius/dify/pull/34661中@plind-junior的最新循环/迭代记录
* 重构（服务）：将 Union 替换为 |服务层中的语法（第 2 批）由 @corevibe555 在 https://github.com/langgenius/dify/pull/34906 中
* 修复：修复 https://github.com/langgenius/dify/pull/34904 中 @fatelei 的 orm_exc.DetachedInstanceError
* 重构（otel）：用 https://github.com/langgenius/dify/pull/34883 中 @corevibe555 的 Tracer 和 [T] 泛型替换 Any
* feat(ci)：通过https://github.com/langgenius/dify/pull/34754中的@corevibe555向CI添加pyrefly类型覆盖率报告
* 重构（服务）：将 Union 替换为 | https://github.com/langgenius/dify/pull/34905 中的@corevibe555 服务层语法
*修复：@leslie2046在https://github.com/langgenius/dify/pull/34910中的sqlalchemy.orm.exc.DetachedInstanceError
* 测试：通过https://github.com/langgenius/dify/pull/34749中的@volcano303将ops_service测试迁移到testcontainers
* 测试：通过https://github.com/langgenius/dify/pull/34750中的@volcano303将hit_testing_service测试迁移到testcontainers
* 重构（api）：在 https://github.com/langgenius/dify/pull/34876 中使用 @dataCenter430 的 TypedDict 类型工作流生成器参数字典
* 重构（工具）：用 https://github.com/langgenius/dify/pull/34786 中 @YgorLeal 的 EmojiIconDict 替换多余的 dict[str, str]
* 重构：通过@sxxtony在https://github.com/langgenius/dify/pull/34686中使DefaultFieldsMixin与TypeBase（MappedAsDataclass）兼容
*修复（api）：默认parent_mode为段落，通过https://github.com/langgenius/dify/pull/34635中的@plind-junior通过API进行分层分块
* 修复（工作流程）：通过 https://github.com/langgenius/dify/pull/34909 中的 @HamzaSwitch 更正执行日志中的最大化编辑器面板布局
* 重构(api)：用https://github.com/langgenius/dify/pull/34891中的@corevibe555替换db_migration_lock中的Any为精确类型
* 文档（贡献）：将代理归因指南移至 https://github.com/langgenius/dify/pull/34919 中的 @laipz8200 的 PR 模板
* 杂务：当https://github.com/langgenius/dify/pull/34592中的@hjlarry无法删除节点时，应该隐藏更改操作
* 修复：修复输出在 https://github.com/langgenius/dify/pull/34604 中与 @fatelei 共享相同名称的变量
* 重构（api）：类型 Redis 连接参数构建器函数与 @dataCenter430 在 https://github.com/langgenius/dify/pull/34875 中的 TypedDicts
* 测试：为工作流组件添加单元测试，包括工具并通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/34843 中检查变量
* 测试：将 SQLAlchemyWorkflowNodeExecutionRepository 测试迁移到 @bittoby 在 https://github.com/langgenius/dify/pull/34926 中的 testcontainers
* 重构（api）：在 https://github.com/langgenius/dify/pull/34924 中使用 @bittoby 的 DocumentDict TypedDict 类型 Document.to_dict
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/34946中的@dependabot[bot]将/api中的pypdf从6.9.2提升到6.10.0
* 重构（api）：在 https://github.com/langgenius/dify/pull/34942 中使用 @YB0y 的 TypedDict 类型 ToolInvokeMeta.to_dict
* 重构（api）：在 https://github.com/langgenius/dify/pull/34943 中通过 @YB0y 键入 get_prompt_template 和 TypedDict
* 重构（api）：在 https://github.com/langgenius/dify/pull/34940 中使用 @YB0y 的 TypedDict 类型 DatasourceInvokeMeta.to_dict
* 重构（api）：在 https://github.com/langgenius/dify/pull/34941 中使用 @YB0y 的 TypedDict 类型 SQLALCHEMY_ENGINE_OPTIONS
* 重构：将 https://github.com/langgenius/dify/pull/34930 中 @ai-hpc 的 model_config 中的内联 api.model 替换为 Pydantic BaseModel
* 测试：删除数据集服务更新/删除由 @bittoby 在 https://github.com/langgenius/dify/pull/34937 中的 testcontainers 取代的模拟测试
*测试：删除https://github.com/langgenius/dify/pull/34931中@bittoby的testcontainers取代的数据集元数据模拟测试
* 重构：将https://github.com/langgenius/dify/pull/34928中@ai-hpc计费中的内联api.model替换为register_schema_models
* 测试：删除数据集权限模拟测试，由 @bittoby 在 https://github.com/langgenius/dify/pull/34936 中的 testcontainers 取代
* 重构：通过 https://github.com/langgenius/dify/pull/34921 中的 @lyzno1 删除基本 ui i18n 依赖
* 修复：修复 https://github.com/langgenius/dify/pull/34962 中 @fatelei 重复的工具输出
* 重构（api）：将控制器迁移到 SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34960
* 测试：将会话/消息输入租户解析 SQL 测试迁移到 @wdeveloper16 在 https://github.com/langgenius/dify/pull/34957 中的 Testcontainers
* 测试：将 WorkflowNodeExecutionModel 创建者属性 SQL 测试迁移到 https://github.com/langgenius/dify/pull/34958 中 @wdeveloper16 的 Testcontainers
* 重构(api)：将核心RAG层迁移到SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34965
* 测试：将RagPipelineService DB操作SQL测试迁移到https://github.com/langgenius/dify/pull/34959中@wdeveloper16的Testcontainer
* 重构：通过https://github.com/langgenius/dify/pull/34967中的@AlsoTheZv3n将verify_subscription_credentials返回类型迁移到TypedDict
* 测试：将Conversation.status_count和Site.generate_code SQL测试迁移到https://github.com/langgenius/dify/pull/34955中@wdeveloper16的Testcontainers
* 重构（服务）：将 dataset_service 和clear_free_plan_tenant_expired_logs 迁移到 SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34970
* 重构（服务）：将 datasource_provider_service 迁移到 SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34974
* 测试：将 TestContainers 集成测试和单元测试装置更新为 SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34969
* 重构（服务）：将builtin_tools_manage_service迁移到SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34973
* 重构（服务）：将trigger_provider_service迁移到SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34972
* 重构（服务）：将summary_index_service迁移到SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34971
* 重构(api)：通过https://github.com/langgenius/dify/pull/34966中的@wdeveloper16将工具、帐户、工作流程和插件服务迁移到SQLAlchemy 2.0
* 重构（任务）：将 document_indexing_task 和 remove_app_and_lated_data_task 迁移到 SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34968
* 测试：将 test_remove_app_and_lated_data_task 迁移到 SQLAlchemy 2.0 select() API by @dataCenter430 in https://github.com/langgenius/dify/pull/34985
* 测试：将conftest和插件生命周期测试迁移到https://github.com/langgenius/dify/pull/34979中的@dataCenter430的SQLAlchemy 2.0 select() API
* 测试：将 test_messages_clean_service 迁移到 SQLAlchemy 2.0 select() API by @dataCenter430 in https://github.com/langgenius/dify/pull/34984
* 重构：通过https://github.com/langgenius/dify/pull/34988中的@thegdsks将_model_to_insertion_dict返回类型迁移到TypedDict
* 重构（api）：在 https://github.com/langgenius/dify/pull/35001 中使用 @YB0y 的 TypedDict 类型 DataSourceApiKeyAuthBinding.to_dict
* 重构（api）：在 https://github.com/langgenius/dify/pull/35000 中使用 @YB0y 的 FullContentDict TypedDict 类型 _serialize_full_content
* 重构（api）：在 https://github.com/langgenius/dify/pull/34999 中使用 @YB0y 的 TypedDict 类型 _get_cluster_connection_health_params
* 重构：用https://github.com/langgenius/dify/pull/34997中@wdeveloper16在cot_agent_runner中的ActionDict TypedDict替换裸字典
* 测试：将会话重命名/删除边缘情况迁移到 @wdeveloper16 在 https://github.com/langgenius/dify/pull/34991 中的 Testcontainers 集成测试
* 测试：将 test_workflow_draft_variable_service 迁移到 SQLAlchemy 2.0 select() API by @dataCenter430 in https://github.com/langgenius/dify/pull/34986
* 重构：用https://github.com/langgenius/dify/pull/34996中的@wdeveloper16在external_data_tool中的类型化注释替换裸字典
* 重构（api）：类型 _build_log_dict 返回 LogDict TypedDict by @aviu16 in https://github.com/langgenius/dify/pull/34983
*修复：外部数据集租户检查@laipz8200在https://github.com/langgenius/dify/pull/34734中的绑定知识APIs
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35007 中对 /api 中的 Flask 组进行 3 次更新
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35010 中进行 5 次更新，在 /api 中碰撞 google 组
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35013 中进行 2 次更新，对 /api 中的数据库组进行碰撞
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35014 中进行 3 次更新，对 /api 中的存储组进行碰撞
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35019 中进行 4 次更新，在 /api 中碰撞 llm 组
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35022 中对 /api 中的开发组进行 40 次更新
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35020 中进行 2 次更新，对 /api 中的存储组进行碰撞
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35021 中对 /api 中的 vdb 组进行 4 次更新
* 杂务（deps）：将opentelemetry-propagator-b3从1.40.0提升到https://github.com/langgenius/dify/pull/35017中opentelemetry组中/api中的1.41.0
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35018 中进行 4 次更新来提高 github-actions-dependencies 组
* 杂务(deps)：在https://github.com/langgenius/dify/pull/35023中通过@dependabot[bot]在1个目录中碰撞python-packages组并进行18个更新
* 修复（rag）：在https://github.com/langgenius/dify/pull/34950中@HamzaSwitch在默认矢量投影中包含is_summary和original_chunk_id
* 重构（api）：在 https://github.com/langgenius/dify/pull/35031 中通过 @YgorLeal 在pyright配置中启用reportUntypedFunctionDecorator（#26412）
* chore(deps): bump the opentelemetry group across 1 directory with 16 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35028
* 测试：实现帐户/租户模型集成测试，以替换 https://github.com/langgenius/dify/pull/34994 中 @wdeveloper16 的 db-mocked 单元测试
* 测试：将 BillingService 权限检查测试迁移到 @wdeveloper16 在 https://github.com/langgenius/dify/pull/34993 中的 Testcontainers 集成测试
* 重构：将https://github.com/langgenius/dify/pull/34998中@wdeveloper16的annotation_service中的裸字典替换为TypedDicts
* 重构：https://github.com/langgenius/dify/pull/34896中@HeYin-OS在workflow_tools_manage_service.py中使用sessionmaker
* 琐事：通过 https://github.com/langgenius/dify/pull/35035 中的@crazywola 完善 .github 依赖机器人、PR 模板和陈旧工作流程的配置
* 杂务（deps）：在llm组中的/api中从0.52.17到0.52.36的凹凸编织由https://github.com/langgenius/dify/pull/35038中的@dependabot[bot]
* 杂务（deps-dev）：通过 https://github.com/langgenius/dify/pull/35039 中的 @dependabot[bot] 将开发组 /api 中的 mypy 从 1.20.0 提升到 1.20.1
* 重构：从https://github.com/langgenius/dify/pull/34934中的@ai-hpc的app_import中删除marshal_with和内联api.model
* 重构：将 mcp_server 从 marshal_with/api.model 迁移到 https://github.com/langgenius/dify/pull/34935 中 @ai-hpc 的 Pydantic BaseModel
* 重构：将应用程序站点从 marshal_with/api.model 迁移到 https://github.com/langgenius/dify/pull/34933 中 @ai-hpc 的 Pydantic BaseModel
* 重构：将 apikey 从 marshal_with/api.model 迁移到 https://github.com/langgenius/dify/pull/34932 中 @ai-hpc 的 Pydantic BaseModel
* 重构：https://github.com/langgenius/dify/pull/34808中@sxxtony将RecommendedApp迁移到TypeBase
* 重构：用 @ai-hpc 在 https://github.com/langgenius/dify/pull/34929 中激活的 register_schema_models 替换内联 api.model 响应模式
* 重构：https://github.com/langgenius/dify/pull/34810中@sxxtony将SegmentAttachmentBinding迁移到TypeBase
* 重构（api）：https://github.com/langgenius/dify/pull/34757中的@jakearmstrong59将TextToAudioPayload和MessageListQuery重复数据删除到controller_schemas.py中
* 重构（api）：通过https://github.com/langgenius/dify/pull/34824中的@dev-miro26提高MCPToolManageService.execute_auth_actions中的类型安全性
* 重构（api）：通过https://github.com/langgenius/dify/pull/34756中的@jakearmstrong59将数据集控制器模式去重复到controller_schemas.py中
* 重构：https://github.com/langgenius/dify/pull/34688中@sxxtony将WorkflowPause和WorkflowPauseReason迁移到TypeBase
* 重构（api）：在 https://github.com/langgenius/dify/pull/34682 中使用 @statxc 的 WorkflowAppLogDict TypedDict 键入 WorkflowAppLog.to_dict
* 重构(api)：在https://github.com/langgenius/dify/pull/34747中合并@corevibe555重复的RerankingModelConfig和WeightedScoreConfig定义
* 修复：更正@LincolnBurrows2017 在 https://github.com/langgenius/dify/pull/33435 中提交的拼写错误
* 壮举：支持 @leslie2046 在 https://github.com/langgenius/dify/pull/33344 中向 langfuse 进行 ttft 报告
* 重构：https://github.com/langgenius/dify/pull/34807中@sxxtony将MessageAnnotation迁移到TypeBase
* 测试：通过https://github.com/langgenius/dify/pull/34429中的@volcano303将app_dsl_service测试迁移到testcontainers
* 测试：将 AudioService TTS 消息 ID 查找测试迁移到 @wdeveloper16 在 https://github.com/langgenius/dify/pull/34992 中的 Testcontainers 集成测试
* 修复：修复 https://github.com/langgenius/dify/pull/35042 中 @fatelei 的 qdrant 删除大小太大的问题
*修复：优化https://github.com/langgenius/dify/pull/35046中@hj24触发长时间运行的读取事务
* 重构（api）：在 https://github.com/langgenius/dify/pull/35047 中使用 @KeWang0622 的 WorkflowRunDict TypedDict 类型 WorkflowRun.to_dict
* 重构：将 vdb 实现移至 https://github.com/langgenius/dify/pull/34900 中 @wylswz 的工作区
* refactor: improve type annotations in HitTestingService by @xingarr in https://github.com/langgenius/dify/pull/27838
* 杂务：恢复 @hyoban 在 https://github.com/langgenius/dify/pull/35058 中的 React-i18next 更新
* 重构（auth）：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/35054 中标准化失败的登录审核日志记录
* 重构：将 ops_service tracin 中的裸字典替换为 dict[str, Any]…作者：https://github.com/langgenius/dify/pull/35064 中的 @wdeveloper16
* 重构：在https://github.com/langgenius/dify/pull/35065中@wdeveloper16将插件endpoint_service中的裸字典替换为dict[str, Any]
* refactor: replace bare dict with dict[str, Any] in OpenAPI tools parser by @wdeveloper16 in https://github.com/langgenius/dify/pull/35061
* 重构：在 https://github.com/langgenius/dify/pull/35063 中 @wdeveloper16 的 Watercrawl client 中用 dict[str, Any] 替换裸字典
* 重构：将 https://github.com/langgenius/dify/pull/35062 中的 @wdeveloper16 中的 datasource_entities 中的裸字典替换为 dict[str, Any]
* 修复：https://github.com/langgenius/dify/pull/35049 中 @hj24 的数据库会话过期问题
* 重构：将https://github.com/langgenius/dify/pull/35055中@wdeveloper16的操作服务中的裸字典替换为UtmInfo TypedDict
* 重构：用https://github.com/langgenius/dify/pull/35056中@wdeveloper16的AdvancedPromptTemplateArgs TypedDict替换裸字典
* 重构：用 @wdeveloper16 在 https://github.com/langgenius/dify/pull/35057 中的 WorkflowRunListArgs TypedDict 替换裸字典
* 重构：在 https://github.com/langgenius/dify/pull/35067 中 @wdeveloper16 将辅助缓存模块中的裸字典替换为 dict[str, Any]
* 重构：在 https://github.com/langgenius/dify/pull/35068 中@wdeveloper16 在碎布提取器中用 dict[str, Any] 替换裸字典
* 重构：将 https://github.com/langgenius/dify/pull/35069 中 @wdeveloper16 工具 message_transformer 中的裸字典替换为 dict[str, Any]
* 重构：https://github.com/langgenius/dify/pull/35070 中 @wdeveloper16 将 ops_trace_manager 中的裸字典替换为 dict[str, Any]
* 重构：https://github.com/langgenius/dify/pull/35071 中 @wdeveloper16 将 pipeline_template 模块中的裸字典替换为 dict[str, Any]
* 修复：click 空 http 节点值可能会导致 @iamjoel 在 https://github.com/langgenius/dify/pull/35051 中模糊
* chore(web): upgrade @base-ui/react to v1.4.0 by @lyzno1 in https://github.com/langgenius/dify/pull/35048
*修复：在https://github.com/langgenius/dify/pull/35004中通过@samrusani切换到可视化编辑器时处理URL构造错误
* 重构：将 https://github.com/langgenius/dify/pull/35074 中@wdeveloper16 中的 website_service 中的裸字典替换为 dict[str, Any]
* 重构：在 https://github.com/langgenius/dify/pull/35073 中 @wdeveloper16 将数据集和 external_knowledge 服务中的裸字典替换为 dict[str, Any]
* refactor: replace bare dict with dict[str, Any] in tools manage services by @wdeveloper16 in https://github.com/langgenius/dify/pull/35075
* 重构：https://github.com/langgenius/dify/pull/35076 中@wdeveloper16 在审核模块中用 dict[str, Any] 替换裸字典
* 重构：在提供者实体中用 dict[str, Any] 替换裸字典，在 https://github.com/langgenius/dify/pull/35077 中用 @wdeveloper16 替换插件 client
* 重构：在 https://github.com/langgenius/dify/pull/35082 中 @wdeveloper16 将操作跟踪提供程序中的裸字典替换为 dict[str, Any]
* 重构：用 model_manager 中的 dict[str, Any] 替换裸字典，并由 @wdeveloper16 在 https://github.com/langgenius/dify/pull/35083 中替换
* 重构：在应用程序 task_entities 中将裸字典替换为 dict[str, Any] … by @wdeveloper16 in https://github.com/langgenius/dify/pull/35084
* 重构：在 https://github.com/langgenius/dify/pull/35079 中 @jimcody1995 将 openai_moderation 中的裸字典替换为 dict[str, Any]
* 重构：在 https://github.com/langgenius/dify/pull/35087 中 @wdeveloper16 将 app_config 管理器中的裸字典替换为 dict[str, Any]
* 测试：将触发器集成测试迁移到 SQLAlchemy 2.0 选择 API by @bohdansolovie in https://github.com/langgenius/dify/pull/35081
* 重构：用 https://github.com/langgenius/dify/pull/35095 中的 @dataCenter430 控制器中的类型化注释替换裸字典
* 重构（api）：在 https://github.com/langgenius/dify/pull/35094 中使用 @aviu16 的 FormDefinitionPayload TypedDict 类型 _jsonify_form_definition 有效负载
* 测试：将remove_app_and_lated_data集成测试迁移到https://github.com/langgenius/dify/pull/35092中@bohdansolovie的SQLAlchemy 2.0 APIs
* 测试：将邮件和分段索引集成测试迁移到 https://github.com/langgenius/dify/pull/35091 中的 @bohdansolovie 的 SQLAlchemy 2.0 APIs
* 重构：https://github.com/langgenius/dify/pull/35096 中 @dataCenter430 将核心插件模块中的裸字典替换为类型化注释
* 测试：将 mail_ human_input_delivery 清理装置迁移到 SQLAlchemy 2.0 删除 https://github.com/langgenius/dify/pull/35090 中 @bohdansolovie 的 API
* 测试(e2e)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/34920 中改进身份验证覆盖率和创作支持
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/35066 中更新部门
* 修复（web）：通过 https://github.com/langgenius/dify/pull/34660 中的 @plind-junior 处理 DelimiterInput 中的 IME 组合
* 重构：在 VDB 提供程序中用 dict[str, Any] 替换裸字典，并在 https://github.com/langgenius/dify/pull/35123 中由 @wdeveloper16 替换库
* 重构：用 https://github.com/langgenius/dify/pull/35112 中 @wdeveloper16 的服务抓包中的 dict[str, Any] 替换裸字典
* 重构：在https://github.com/langgenius/dify/pull/35107中@wdeveloper16将rag_pipeline和datasource_provider服务中的裸字典替换为dict[str, Any]
* 重构：在 https://github.com/langgenius/dify/pull/35109 中 @wdeveloper16 将实体、工作流节点和任务中的裸字典替换为 dict[str, Any]
* 重构：在 https://github.com/langgenius/dify/pull/35110 中 @wdeveloper16 将 VDB 提供程序中的裸字典替换为 dict[str, Any]
* 重构：在 https://github.com/langgenius/dify/pull/35124 中 @wdeveloper16 将核心提供商服务和杂项模块中的裸字典替换为 dict[str, Any]
* 重构：在https://github.com/langgenius/dify/pull/35111中@wdeveloper16在核心工具和运行时将裸字典替换为dict[str, Any]
* 修复：https://github.com/langgenius/dify/pull/35052 中使用 @FFXN 提供的 weaviate 矢量数据库时摘要索引功能的兼容性问题
* feat(goto-anything)：最近的项目、/go 导航命令、@crazywola 在 https://github.com/langgenius/dify/pull/35078 中的深层应用子部分
* 杂务：在 vitest.setup.ts 中添加全局获取模拟，以抑制 https://github.com/langgenius/dify/pull/35131 中@Copilot 的 happy-dom ECONNREFUSED 错误
* 杂务：删除https://github.com/langgenius/dify/pull/35102中@WH-2099未使用的Ruff忽略规则
*测试：拆分合并的API测试模块并删除https://github.com/langgenius/dify/pull/35105中@WH-2099忽略的F811
* 杂务（部门）：https://github.com/langgenius/dify/pull/35119 中的 @dependabot[bot] 在 /api 中将枕头从 12.1.1 撞到 12.2.0
* 重构（web）：通过https://github.com/langgenius/dify/pull/35135中的@lyzno1对齐工具提示内容类道具
* 重构（web）：通过@lyzno1在https://github.com/langgenius/dify/pull/35132中删除高优先级模态堆叠
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/35134 中与 en-US 同步翻译
* 杂务：允许在 https://github.com/langgenius/dify/pull/35129 中禁用 @hjlarry 的应用程序级 PostgreSQL 时区注入
* 杂务（deps）：将 pyarrow 更新到版本 23.0.1 并通过 @BenjaminX 在 https://github.com/langgenius/dify/pull/35137 中添加覆盖 deps
* 重构：https://github.com/langgenius/dify/pull/35098 中@dataCenter430 将核心工具模块中的裸字典替换为类型化注释
* 重构：用 https://github.com/langgenius/dify/pull/35099 中的 @dataCenter430 在 app_config/extension/provider 中用类型化注释替换裸字典
* 重构：用 llm_generator 中的类型注释替换裸字典，并在 https://github.com/langgenius/dify/pull/35100 中通过 @dataCenter430 提示
* 重构：通过https://github.com/langgenius/dify/pull/35097中的@dataCenter430在核心rag模块中用类型化注释替换裸字典
* 重构：通过 https://github.com/langgenius/dify/pull/35140 中的 @aether-png 将插件权限 if/elif 转换为 match/case (#30001)
* 重构：https://github.com/langgenius/dify/pull/34895中@HeYin-OS在tool_label_manager.py中使用sessionmaker
* 重构：在 https://github.com/langgenius/dify/pull/35143 中通过 @aether-png 将 InvokeFrom if/elif 转换为 match/case
* 测试：将文档索引任务测试迁移到 SQLAlchemy 2.0 select API by @bohdansolovie in https://github.com/langgenius/dify/pull/35145
* 测试：将 clean_dataset 集成测试迁移到 https://github.com/langgenius/dify/pull/35146 中的 @bohdansolovie 的 SQLAlchemy 2.0 APIs
* 杂务：澄清跟踪错误副本，以将用户引导至 @iamjoel 在 https://github.com/langgenius/dify/pull/35153 中的“跟踪”选项卡
* 修复：https://github.com/langgenius/dify/pull/35157 中 @iamjoel 的配置模式隐藏了文档模式
* 重构：在 https://github.com/langgenius/dify/pull/35122 中 @wdeveloper16 的模型提供者服务和核心模块中用 dict[str, Any] 替换裸字典
*功能：支持https://github.com/langgenius/dify/pull/35139中@Blackoutta可配置的redis键前缀
* 杂务：工具描述中的url支持clicking在https://github.com/langgenius/dify/pull/35163中由@iamjoel直接跳转
* 重构(web)：由@lyzno1在https://github.com/langgenius/dify/pull/35166中重新设计按钮api
* 测试：将任务集成测试迁移到 https://github.com/langgenius/dify/pull/35170 中 @bohdansolovie 的 SQLAlchemy 2.0 查询 APIs
* 测试：将 clean_notion_document 集成测试迁移到 SQLAlchemy 2…由 @bohdansolovie 在 https://github.com/langgenius/dify/pull/35147 中
* ci：修复 https://github.com/langgenius/dify/pull/35136 中 @asukaminato0721 的覆盖 Markdown 渲染步骤中的路径
* 重构(web)：用https://github.com/langgenius/dify/pull/35176中的@lyzno1用音调语义轴替换按钮破坏性布尔值
* 测试：将对话读取时间戳 SQL 测试迁移到 https://github.com/langgenius/dify/pull/35177 中的 @bohdansolovie 的 Testcontainers (#32454)
* 重构(web)：通过https://github.com/langgenius/dify/pull/35127中的@CodingOnStar将确认对话框迁移到base/ui/alert-dialog
* 重构：在 https://github.com/langgenius/dify/pull/35184 中 @wdeveloper16 的 RAG 和服务单元测试中用 dict[str, Any] 替换裸字典
* 重构：在企业遥测、外部数据工具和 https://github.com/langgenius/dify/pull/35185 中 @wdeveloper16 的审核测试中用 dict[str, Any] 替换裸字典
* 测试：将网站控制器测试迁移到 https://github.com/langgenius/dify/pull/35180 中的 @bohdansolovie 的 Testcontainers (#32454)
* 重构：在 https://github.com/langgenius/dify/pull/35181 中 @wdeveloper16 的控制器和核心单元测试中用 dict[str, Any] 替换裸字典
* 重构：在 https://github.com/langgenius/dify/pull/35186 中 @wdeveloper16 将模型、提供程序、扩展、库和测试实用程序中的裸字典替换为 dict[str, Any]
* 重构（api）：将工作区帐户 marshal_with 响应迁移到 https://github.com/langgenius/dify/pull/35190 中的 @ai-hpc 的 BaseModel
* 重构（api）：通过https://github.com/langgenius/dify/pull/35189中的@ai-hpc将控制台扩展端点从api.model迁移到BaseModel
* 测试：删除 https://github.com/langgenius/dify/pull/35197 中 @jamesrayammons 的 testcontainers 取代的文档服务状态模拟测试
* 重构（api）：通过https://github.com/langgenius/dify/pull/35192中的@ai-hpc将数据集命中测试响应模型迁移到BaseModel
* 重构（api）：通过https://github.com/langgenius/dify/pull/35209中的@tmimmanuel为extractor_processor和firecrawl添加空安全性
* 重构：在 https://github.com/langgenius/dify/pull/35182 中 @wdeveloper16 的服务单元测试助手中用 dict[str, Any] 替换裸字典
* 重构（api）：通过https://github.com/langgenius/dify/pull/35202中的@ai-hpc将控制台安装的应用程序列表响应迁移到BaseModel
* 重构（api）：通过https://github.com/langgenius/dify/pull/35201中的@ai-hpc将控制台工作流应用程序日志响应迁移到BaseModel
* 重构：在服务和主机中用 dict[str, Any] 替换裸字典…作者：https://github.com/langgenius/dify/pull/35211 中的 @wdeveloper16
* 重构：在响应转换器中用 dict[str, Any] 替换裸字典...作者：https://github.com/langgenius/dify/pull/35212 中的 @wdeveloper16
* 重构（api）：通过https://github.com/langgenius/dify/pull/35195中的@ai-hpc将服务api工作流程响应从marshal_with迁移到BaseModel
* 重构（api）：通过https://github.com/langgenius/dify/pull/35204中的@ai-hpc将控制台消息响应从marshal_with迁移到BaseModel
* 重构（api）：通过https://github.com/langgenius/dify/pull/35205中的@ai-hpc将服务会话变量响应迁移到BaseModel
* 重构（api）：将控制台推荐应用程序响应迁移到https://github.com/langgenius/dify/pull/35206中@ai-hpc的BaseModel
* 重构（api）：通过https://github.com/langgenius/dify/pull/35207中的@ai-hpc将工作区当前响应从marshal_with迁移到BaseModel
* 重构（api）：通过https://github.com/langgenius/dify/pull/35193中的@ai-hpc将控制台对话变量响应模型迁移到BaseModel
* 测试：将数据集服务数据集模拟测试迁移到 @jamesrayammons 在 https://github.com/langgenius/dify/pull/35194 中的 testcontainers
* 重构（api）：通过https://github.com/langgenius/dify/pull/35200中的@ai-hpc将控制台工作流程触发响应迁移到BaseModel
* 测试：将计划服务模拟测试迁移到 @jamesrayammons 在 https://github.com/langgenius/dify/pull/35196 中的 testcontainers
* 测试：删除 https://github.com/langgenius/dify/pull/35223 中@jamesrayammons 遗留的 python3 代码执行器集成测试
* 测试：删除https://github.com/langgenius/dify/pull/35224中@jamesrayammons的遗留代码执行器集成测试
* 修复：@hjlarry 在 https://github.com/langgenius/dify/pull/35239 中导入 DSL 和复制应用程序不起作用
*修复：在https://github.com/langgenius/dify/pull/35240中打开恢复版本面板通过@hjlarry筹集500
* 测试：将服务 API 站点控制器测试迁移到 https://github.com/langgenius/dify/pull/35183 中的 @Eruis2579 的 Testcontainers (#32454)
* refactor(ui)：通过https://github.com/langgenius/dify/pull/35242中的@lyzno1解耦CSS依赖并提高测试质量
* 修复：将“commit”更改为“flush”以防止后续事务失败...作者：https://github.com/langgenius/dify/pull/35243 中的@zyssyz123
* 修复（数据集）：修复https://github.com/langgenius/dify/pull/35244中@WTW0313的数据集列表重叠问题
* 测试：将 webhook 服务附加模拟测试迁移到 @jamesrayammons 在 https://github.com/langgenius/dify/pull/35199 中的 testcontainers
* 壮举：@zyssyz123 在 https://github.com/langgenius/dify/pull/35158 中的 tidb 端点
* feat(web)：统一create_app跟踪并通过@CodingOnStar在https://github.com/langgenius/dify/pull/35241中保留外部归因
* 修复：删除 https://github.com/langgenius/dify/pull/35245 中 @zyssyz123 获取的启用
* 测试：删除 @jamesrayammons 在 https://github.com/langgenius/dify/pull/35225 中进行的遗留存储密钥加载器集成测试
* 测试：删除 @jamesrayammons 在 https://github.com/langgenius/dify/pull/35222 中遗留的 jinja2 代码执行器集成测试
* 测试：删除旧工作流草案变量 api 由 @jamesrayammons 在 https://github.com/langgenius/dify/pull/35226 中测试
* 测试：删除 @jamesrayammons 在 https://github.com/langgenius/dify/pull/35227 中遗留的触发器提供程序权限测试
* 重构（api）：通过https://github.com/langgenius/dify/pull/35208中的@ai-hpc将控制台标签响应从marshal_with迁移到BaseModel
* feat(ui)：支架@langgenius/dify-ui并通过@lyzno1在https://github.com/langgenius/dify/pull/35256中迁移设计令牌
* 修复（web）：在 docker 中包含 dify-ui 工作区包，在 https://github.com/langgenius/dify/pull/35268 中安装 @lyzno1 过滤器
* 重构(web)：将 Switch API 与 https://github.com/langgenius/dify/pull/35269 中 @lyzno1 的基本 UI 命名约定对齐
* 测试（类型）：用 https://github.com/langgenius/dify/pull/35267 中的 @xr843 的枚举值替换帐户/租户状态字符串文字
* 杂务（api）：修剪https://github.com/langgenius/dify/pull/35272中@WH-2099的冗余直接依赖声明
* 壮举：@hjlarry 在 https://github.com/langgenius/dify/pull/30781 中的合作
* 修复：在 https://github.com/langgenius/dify/pull/35282 中添加 @fatelei 未命中的 celery 队列
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/35283 中与 en-US 同步翻译
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/35287中的@dependabot[bot]将荣誉从4.12.12提升到4.12.14
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/35288 中的 @dependabot[bot] 将 /api 中的 langsmith 从 0.7.30 提升到 0.7.31
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/35273中的@dependabot[bot]将/api中的pypdf从6.10.0提升到6.10.1
* 测试：将重复和向量索引任务集成测试迁移到 https://github.com/langgenius/dify/pull/35292 中的 @bohdansolovie 的 SQLAlchemy 2.0 APIs
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/35300中的@lyzno1将vite-plus升级到0.1.18
* 重构(api)：在https://github.com/langgenius/dify/pull/35296中添加@ai-hpc的BaseModel对话变量模式
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/35286 中的 @dependabot[bot] 将 dompurify 从 3.3.3 提升到 3.4.0
* 重构(api)：在https://github.com/langgenius/dify/pull/35297中添加@ai-hpc的BaseModel工作流字段模式
* 重构(web)：重新设计Select组件并通过@lyzno1在https://github.com/langgenius/dify/pull/35293中迁移WorkplaceSelector
* 重构（api）：通过https://github.com/langgenius/dify/pull/35294中的@ai-hpc将控制台对话响应迁移到BaseModel
* 重构（web）：通过https://github.com/langgenius/dify/pull/35278中的@CodingOnStar将base/popovers迁移到ui/dropdown-menu和ui/select
* 修复（web）：通过https://github.com/langgenius/dify/pull/35302中的@lyzno1将应用卡下拉菜单设置为非模式
* 修复：https://github.com/langgenius/dify/pull/35304 中 @hjlarry 的 http 节点键值类型下拉列表
* 修复：https://github.com/langgenius/dify/pull/35263 中 @aayushbaluni 在混合搜索中重新排名后应用分数阈值
* 重构（web）：通过https://github.com/langgenius/dify/pull/35306中的@lyzno1将基本UI组件道具统一为命名空间类型
* 测试：将干净的概念任务测试迁移到 https://github.com/langgenius/dify/pull/35159 中的 @jimcody1995 的 SQLAlchemy 2.0 APIs
* 测试：将会话服务模拟测试迁移到 @jamesrayammons 在 https://github.com/langgenius/dify/pull/35198 中的 testcontainers
* 杂务：通过 @wylswz 在 https://github.com/langgenius/dify/pull/35308 中重组导入
* perf(web): 通过@lyzno1在https://github.com/langgenius/dify/pull/35313中优化首屏渲染性能
* 修复（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/35322 中向菜单项组件添加破坏性悬停背景
* 杂务：在 https://github.com/langgenius/dify/pull/35178 中启用 @hyoban 的 noUncheckedIndexedAccess
* 重构(web)：将 UI 组件 API 与 https://github.com/langgenius/dify/pull/35328 中 @lyzno1 的 shadcn v4 最佳实践保持一致
* 杂务：@hyoban 在 https://github.com/langgenius/dify/pull/35329 中进行工作区级别类型检查
* 杂务：@hyoban 在 https://github.com/langgenius/dify/pull/35331 中的工作区 lint
* 琐事：自动修复 @hyoban 在 https://github.com/langgenius/dify/pull/35332 中的顺风规则
* 重构(web)：质量闭包通过 https://github.com/langgenius/dify/pull/35333 中的 @lyzno1 传递基本 UI 原语
* feat(web)：通过https://github.com/langgenius/dify/pull/35347中的@CodingOnStar在AppCard组件中添加对应用程序预览事件的跟踪
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/35339中的@dependabot[bot]将/api中的pypdf从6.10.1提升到6.10.2
* 杂务（deps）：在https://github.com/langgenius/dify/pull/35340中由@dependabot[bot]将/api中的mako从1.3.10撞到1.3.11
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/35341 中的 @dependabot[bot] 将 /api 中的 authlib 从 1.6.9 提升到 1.6.11
* 杂务（api）：迁移事件处理程序以使用https://github.com/langgenius/dify/pull/35234中@jerryzai的Session（db.engine）
* 重构（api）：通过https://github.com/langgenius/dify/pull/35219中的@ai-hpc将控制台mcp服务器响应迁移到BaseModel
* 文档（网络）：在 https://github.com/langgenius/dify/pull/35334 中添加用于叠加的 Storybook 故事并选择 @lyzno1 的原语
* 重构(api)：通过https://github.com/langgenius/dify/pull/35298中的@ai-hpc将数据集文档响应模式迁移到BaseModel
* 修复(web): 在 https://github.com/langgenius/dify/pull/35326 中 @shaun0927 出现 useUserProfile 错误后停止 Splash
* 重构：https://github.com/langgenius/dify/pull/34892中@HeYin-OS在api_tools_manage_service.py中使用sessionmaker
* 重构(web)：https://github.com/langgenius/dify/pull/35319中@CodingOnStar将各个组件中的portal组件替换为DropdownMenu
* 修复：https://github.com/langgenius/dify/pull/35325 中 @shaun0927 的租户内部 API 范围插件最终用户查找
* 测试：通过 @Jingyi-Dify 在 https://github.com/langgenius/dify/pull/35276 中添加 API 播种基础设施和应用程序创建 E2E 场景
* 重构：https://github.com/langgenius/dify/pull/34862中@sxxtony将DocumentSegmentSummary迁移到TypeBase
* 测试：将数据集服务文档模拟测试迁移到 @jamesrayammons 在 https://github.com/langgenius/dify/pull/35191 中的 testcontainers
* 修复：防止 update_prompt_message_tool 循环中的 KeyError by @kuishou68 in https://github.com/langgenius/dify/pull/35150
* 修复(web): 稳定https://github.com/langgenius/dify/pull/35352中@CodingOnStar的工作流节点面板操作员下拉触发
* 修复：将远程凭证验证移至数据库会话之外，以防止 https://github.com/langgenius/dify/pull/35350 中的 @zyssyz123
* 重构（api）：通过 @wylswz 在 https://github.com/langgenius/dify/pull/35144 中移动跟踪提供程序
* 杂务（api）：迁移文件工厂构建器和帐户命令以使用@jerryzai在https://github.com/langgenius/dify/pull/35236中的会话（db.engine）
* 重构（api）：在 https://github.com/langgenius/dify/pull/34874 中使用 @YB0y 的 TypedDict 键入管道模板检索字典
* 修复：在 https://github.com/langgenius/dify/pull/35357 中通过 @hyl64 提高聊天设置选择对话框上方的下拉菜单
* 修复：https://github.com/langgenius/dify/pull/35355 中 @hyl64 缺少 mime 类型时保护聊天文件预览渲染
* refactor(dify-ui): 在https://github.com/langgenius/dify/pull/35349中通过@lyzno1完成从web/base/ui到@langgenius/dify-ui的原始迁移
* 杂务(api): 迁移邮件任务和OAuth数据源以使用Session(db… by @jerryzai in https://github.com/langgenius/dify/pull/35235
* 修复（web）：在https://github.com/langgenius/dify/pull/35363中@lyzno1的菜单关闭动画期间保持工作流面板操作员锚点安装
* 壮举：在 https://github.com/langgenius/dify/pull/33273 中通过 @hjlarry 跨应用程序复制节点
* ci：在https://github.com/langgenius/dify/pull/35179中添加@asukaminato0721为diff创建条件注释
* feat(explore)：通过@CodingOnStar在https://github.com/langgenius/dify/pull/35369中实现横幅印象跟踪和重构跟踪逻辑
* 测试：https://github.com/langgenius/dify/pull/35365 中 @hyoban 的 dify ui 浏览器模式
* feat(dify-ui)：@lyzno1 在 https://github.com/langgenius/dify/pull/35380 中计量原语和计费采用
*杂务（api）：在https://github.com/langgenius/dify/pull/35377中适应@WH-2099的Graphon 0.2.2升级
* 杂务(web)：从工具提示触发器中删除delay={0}并在https://github.com/langgenius/dify/pull/35382中重新输入@lyzno1的DocName
* 修复(web): 删除 Goto Anything 中的动态导入以恢复 https://github.com/langgenius/dify/pull/35383 中 @lyzno1 的 cmd+k
* 杂务：将 'db' 替换为 'sa' 以实现 SQLAlchemy 兼容性，@asukaminato0721 在 https://github.com/langgenius/dify/pull/35373 中
* ci：https://github.com/langgenius/dify/pull/35391中的@asukaminato0721将pyrefly依赖版本更新为0.61.1
* 修复（web）：防止 https://github.com/langgenius/dify/pull/35393 中的 @lyzno1 在 /apps 页面上无限渲染循环
* 重构（web）：将文件本地步骤枚举转换为网站爬虫中的 as-const 🤖🤖🤖 by @jeanibarz in https://github.com/langgenius/dify/pull/34565
* 修复：https://github.com/langgenius/dify/pull/35406 中 @hjlarry 完成分配的变量参考描述
* 重构：删除https://github.com/langgenius/dify/pull/35409中@hjlarry的文件上传迁移提示
* 杂务：改进 @hjlarry 在 https://github.com/langgenius/dify/pull/35403 中的对话开场白
*修复：在https://github.com/langgenius/dify/pull/35360中接受@hyl64在应用程序图标更新中的图标类型
* 修复：防止 MCP 服务器 URL 中的双 /v1 导致 https://github.com/langgenius/dify/pull/34596 中的 @dev-miro26 导致 404 授权失败
* 重构（web）：通过https://github.com/langgenius/dify/pull/35394中的@lyzno1统一TanStack Query + Next.js路由约定上的app-shell引导程序
* 重构（api）：通过@bitcompass在https://github.com/langgenius/dify/pull/34835中展平嵌套条件并清理令牌助手
* 杂务：在 https://github.com/langgenius/dify/pull/35418 中迁移工作流节点标题工具提示（@hjlarry）
* feat(amplitude): 在https://github.com/langgenius/dify/pull/35415中通过@CodingOnStar集成AmplitudeProvider并重构初始化逻辑
* 修复：通过 @avasis-ai 在 https://github.com/langgenius/dify/pull/35389 中处理 safe_json_value 中的 numpy 标量类型
* 文档（前端）：在 https://github.com/langgenius/dify/pull/35364 中对齐 @lyzno1 的文档和注释
* 修复：@hyoban 在 https://github.com/langgenius/dify/pull/35420 中设置的 iconify 中缺少图标
* 杂务：导出 dsl 添加 @iamjoel 在 https://github.com/langgenius/dify/pull/35427 中的加载
* 修复（auth）：通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/35425 中强制执行阶段绑定更改电子邮件令牌流（GHSA-4q3w-q5mc-45rq）
*杂务（deps）：将json修复从0.59.2到0.59.4，位于python包组中的/api，由https://github.com/langgenius/dify/pull/35404中的@dependabot[bot]
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/35397 中的 @dependabot[bot] 将 google-cloud-aiplatform 从 1.147.0 提升到 Google 群组 /api 中的 1.148.1
* 杂务（deps-dev）：通过 https://github.com/langgenius/dify/pull/35399 中的 @dependabot[bot] 将 xinference-client 从 2.4.0 提升到 vdb 组 /api 中的 2.5.0
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35398 中进行 3 次更新，对 /api 中的存储组进行碰撞
* ci: [codex] 在 https://github.com/langgenius/dify/pull/35432 中删除 @laipz8200 的防倾斜 GitHub 操作工作流程
* 杂务（deps）：在 https://github.com/langgenius/dify/pull/35435 中通过 @dependabot[bot] 进行 7 次更新，在 1 个目录中碰撞 github-actions-dependencies 组
* 杂务：修复 https://github.com/langgenius/dify/pull/35249 中 @sicnuyudidi 的 oxlint 警告（未使用的变量和导入）
* 修复：https://github.com/langgenius/dify/pull/35439 中的 @Mutantpenguin 将最大 PostgreSQL 连接数增加到 200
* 重构(web)：继续用https://github.com/langgenius/dify/pull/35431中@CodingOnStar的Popover组件替换PortalToFollowElem
* feat(dify-ui): 通过@lyzno1在https://github.com/langgenius/dify/pull/35434中添加PreviewCard原语
* 修复（工作流程）：https://github.com/langgenius/dify/pull/35447 中 @laipz8200 在图形初始化期间缓存提供程序配置
*重构（api）：通过@tmimmanuel在https://github.com/langgenius/dify/pull/35210中收紧核心抹布打字批次1
* 琐事：解决https://github.com/langgenius/dify/pull/34540中@agenthaulk在网络和SDK上的oxlint警告
* 重构（计费）：使用Infotip作为UsageInfo帮助图标，通过https://github.com/langgenius/dify/pull/35448中的@lyzno1将存储工具提示迁移到dify-ui
* 修复：@hjlarry 在 https://github.com/langgenius/dify/pull/35450 中 webscaper 有时无法工作
* 重构：在 https://github.com/langgenius/dify/pull/35441 中 @iAbhi001 在 contextmanagers #35433 中用 Generator 替换已弃用的 Iterator
* 壮举：在 https://github.com/langgenius/dify/pull/35460 中支持 @iamjoel 在提示编辑器中过滤斜杠变量
* 杂务（deps）：将 https://github.com/langgenius/dify/pull/35459 中的 @lyzno1 的基础 ui 提升到 1.4.1
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35402 中对 /api 中的开发组进行 6 次更新
* 杂务（deps）：将 vite-plus 升级到 https://github.com/langgenius/dify/pull/35462 中的 @lyzno1 的 0.1.19
* 修复（插件）：https://github.com/langgenius/dify/pull/35464 中@zyssyz123 保留租户插件自动升级策略更改
* 重构：通过https://github.com/langgenius/dify/pull/35454中的@CodingOnStar跨各个组件从PortalToFollowElem迁移到Popover组件
* 杂务：端口 2 api 已被 @asukaminato0721 在 https://github.com/langgenius/dify/pull/35261 中弃用
* 杂务（deps）：在 https://github.com/langgenius/dify/pull/35470 中 @dependabot[bot] 将 lxml 从 /api 中的 6.0.2 提升到 6.1.0
* 修复：https://github.com/langgenius/dify/pull/33702 中@JiwaniZakir 的碰撞pyrefly 版本
* 琐事：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/35488 中将所有工作区中的类型检查从 tsc 迁移到 tsgo
* 杂务：由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/35481 中更新 3 api
* 修复（web）：当表单溢出时，https://github.com/langgenius/dify/pull/35490 中的@crazywola 保持“添加模型”对话框页脚可见
* 壮举：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/35442 中改进后续设置
* 重构：通过https://github.com/langgenius/dify/pull/35487中的@CodingOnStar将base/select迁移到dify-ui/select
* 杂务（i18n）：https://github.com/langgenius/dify/pull/35492 中的 @github-actions[bot] 与 en-US 同步翻译
* 重构：通过不透明过渡增强节点句柄组件，并通过 https://github.com/langgenius/dify/pull/35494 中的 @CodingOnStar 添加可见性行为测试
* 修复（插件）：通过 https://github.com/langgenius/dify/pull/35506 中的 @CodingOnStar 处理文件输入重置并改进本地安装程序关闭功能
* 杂务：添加脚本以生成 openapi v2 json 并添加到 https://github.com/langgenius/dify/pull/35477 中 @asukaminato0721 的 README #35474 中
* 测试（auth）：在https://github.com/langgenius/dify/pull/35501中添加@Jingyi-Dify的登录冒烟测试和核心验证
* 测试（e2e）：在https://github.com/langgenius/dify/pull/35503中添加@Jingyi-Dify发布应用程序的快乐路径场景
* 修复（网页）：恢复https://github.com/langgenius/dify/pull/35513中@lyzno1复制按钮上的“已复制”反馈状态
* 修复（网络）：@lyzno1 在 https://github.com/langgenius/dify/pull/35514 中对 /datasets 和 /plugins 进行了三个小的 UX 修复
* 修复：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/35309 中改进协作
* 测试（e2e）：通过@Jingyi-Dify在https://github.com/langgenius/dify/pull/35502中添加应用详细信息导航和重定向场景
* 修复：通过 @hjlarry 改进 https://github.com/langgenius/dify/pull/35461 中的注释节点
* 修复：通过 https://github.com/langgenius/dify/pull/35525 中的 @CodingOnStar 更新组件和测试中的节点处理不透明度和指针事件行为
* 重构(api)：修复https://github.com/langgenius/dify/pull/34938中@tmimmanuel在jieba、milvus、couchbase、oracle和router中的pyright错误
* feat: https://github.com/langgenius/dify/pull/35527 支持上下键选择变量项 by @iamjoel
*修复：在https://github.com/langgenius/dify/pull/35539中通过@wylswz同步35528
* 杂务（dify-ui）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/35543 中更新工具提示和信息提示迁移
* 壮举：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/32826 中添加 HITL 的服务 api
* 壮举：@RockChinQ 在 https://github.com/langgenius/dify/pull/35509 中修复了市场和 oauth
* 修复：应用程序图标不仅可以在 https://github.com/langgenius/dify/pull/35537 中通过 @hjlarry 更改背景
* 修复：在 https://github.com/langgenius/dify/pull/35533 中通过 @hjlarry 建议更多 max_tokens 问题
* 测试（dify-ui）：在 https://github.com/langgenius/dify/pull/35467 中通过 @lyzno1 全局禁用基本 ui 动画
* 修复：https://github.com/langgenius/dify/pull/35554 中的右侧 click 节点不显示 @hjlarry 的节点详细信息面板
* 杂务（i18n）：https://github.com/langgenius/dify/pull/35552 中的 @github-actions[bot] 与 en-US 同步翻译
* 杂务：修复在 https://github.com/langgenius/dify/pull/35531 中 @asukaminato0721 在 orm 中使用选择样式 api
* 功能：重构模态以使用 Dialog 组件，并通过 https://github.com/langgenius/dify/pull/35550 中的 @CodingOnStar 添加对 ApiKeyModal 和 ProviderConfigModal 的测试
* 杂务：https://github.com/langgenius/dify/pull/35542 中的端口 2 api 由 @asukaminato0721
* 文档：修复 https://github.com/langgenius/dify/pull/35547 中 @MukundaKatta 的 Kubernetes 部署措辞
* 测试：https://github.com/langgenius/dify/pull/35559中@Jingyi-Dify添加P0工作流程运行、发布、分享场景
*修复（api）：在https://github.com/langgenius/dify/pull/35568中通过@WH-2099声明flask依赖
* 重构：由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/30920 中移植 ChildChunk
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/35570中的@dependabot[bot]将/api中的gitpython从3.1.45提升到3.1.47
* 重构：https://github.com/langgenius/dify/pull/31005 中 @asukaminato0721 移植 MessageAnnotation
* 杂务（ci）：将镜像构建移动到 @goocarlos 在 https://github.com/langgenius/dify/pull/35575 中的仓库
* 重构：@hj24 在 https://github.com/langgenius/dify/pull/35436 中集成配额 v3
* 杂务（deps）：将 https://github.com/langgenius/dify/pull/35579 中 @dependabot[bot] 的 github-actions-dependencies 组中的 anthropics/claude-code-action 从 1.0.101 提升到 1.0.107
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35581 中对 /api 中的开发组进行 5 次更新
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/35577中的@dependabot[bot]将数据库组中/api中的psycopg2二进制文件从2.9.11提升到2.9.12
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35576 中对 /api 中的 opentelemetry 组进行 7 次更新
* 杂务（deps-dev）：通过 https://github.com/langgenius/dify/pull/35580 中的 @dependabot[bot] 将 xinference-client 从 2.5.0 提升到 vdb 组 /api 中的 2.7.0
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35578 中进行 3 次更新，在 1 个目录中碰撞存储组
* Chore(ci)：在https://github.com/langgenius/dify/pull/35591中通过@lyzno1增加tsslint堆限制
* 重构（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/35588 中迁移简单的覆盖工具提示
* 修复（web）：在 https://github.com/langgenius/dify/pull/35590 中迁移 @hjlarry 的变量类型选择器覆盖
* 修复：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/35587 中改进变量选择器文本宽度分配
* ci：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/35593 中升级 Web 测试运行程序
* 修复：通过计费支持增强文件上传器并更新https://github.com/langgenius/dify/pull/35583中@WTW0313的翻译
* 修复：@iamjoel 在 https://github.com/langgenius/dify/pull/35597 中无法输入学校名称
* 杂务：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/35594 中更新依赖项目录
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/35595 中与 en-US 同步翻译
* 修复：使清理任务能够适应 https://github.com/langgenius/dify/pull/35600 中 @zyssyz123 的计费 API 故障
* 修复：https://github.com/langgenius/dify/pull/35599 中 @BenjaminX 在自动升级任务中调用升级之前下载并上传包
* 重构：https://github.com/langgenius/dify/pull/30218 中的 @asukaminato0721 将 SegmentAttachmentBinding 和 UploadFile 移动到 TypeBase
* 测试：在https://github.com/langgenius/dify/pull/34330中添加@jimmyzhuu的百度OBS存储单元测试
* 修复：在 https://github.com/langgenius/dify/pull/35613 中显示完整的清单消息工具提示，而不是被 @hjlarry 截断
* 修复：https://github.com/langgenius/dify/pull/35621 中的 @hjlarry 将自动更新时间选择器向右对齐
* 修复：https://github.com/langgenius/dify/pull/35616 中 @hjlarry 对齐对象值删除聊天变量按钮
* 修复（测试）：通过 @lin-snow 在 https://github.com/langgenius/dify/pull/35618 中将 baidu_obs 模拟注册为 pytest 插件
* 修复：https://github.com/langgenius/dify/pull/35519 中的@treekimm 嵌入式聊天机器人中的 URL convention_id 优先于 localStorage
* 重构（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/35627 中改进日期/时间选择器和自动更新策略选择器的 a11y 和设计系统一致性
* 重构：通过 https://github.com/langgenius/dify/pull/35630 中的 @lyzno1 改进插件和模型选择器 UI 中的滚动条处理
* 测试：覆盖 @lyzno1 在 https://github.com/langgenius/dify/pull/35634 中运行的共享工作流程应用程序
* 修复(web): 在https://github.com/langgenius/dify/pull/35624中通过@WTW0313按模型名称过滤模型选择器
*修复（ci）：在https://github.com/langgenius/dify/pull/35631中@lin-snow进行数据库迁移之前等待mysql接受查询
* 杂务：https://github.com/langgenius/dify/pull/35609 中的 @asukaminato0721 的端口一号 api
* 修复：由于 Pydantic 检查导致命中测试响应失败。作者：@FFXN，https://github.com/langgenius/dify/pull/35640
* 琐事：纠正 @knyazz 在 https://github.com/langgenius/dify/pull/35645 中的 ru 翻译
* 修复：https://github.com/langgenius/dify/pull/35652 中 @kenwoodjw 在 CI 中进行片状 WordExtractor 封闭测试
* 修复：更新后刷新 MCP 工具元数据并通过 https://github.com/langgenius/dify/pull/35354 中的 @hyl64 对齐 App DSL 测试存根
* 修复：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/35661 中改进工作流程作为工具覆盖
* 杂务：https://github.com/langgenius/dify/pull/35662 中 @wylswz 的 1.14.0 碰撞版本

## 新贡献者
* @faizkhairi 在 https://github.com/langgenius/dify/pull/34080 中做出了第一个贡献
* @Maa-ly 在 https://github.com/langgenius/dify/pull/34146 中做出了第一个贡献
* @Fronut 在 https://github.com/langgenius/dify/pull/34201 中做出了第一个贡献
* @jigangz 在 https://github.com/langgenius/dify/pull/34221 中做出了第一个贡献
* @ZZITE 在 https://github.com/langgenius/dify/pull/34224 中做出了第一个贡献
* @fisherOne1 在 https://github.com/langgenius/dify/pull/33740 中做出了第一个贡献
* @wangji0923 在 https://github.com/langgenius/dify/pull/33853 中做出了第一个贡献
* @owldev127 在 https://github.com/langgenius/dify/pull/34185 中做出了第一个贡献
* @dominciyue 在 https://github.com/langgenius/dify/pull/33927 中做出了第一个贡献
* @SeasonPilot 在 https://github.com/langgenius/dify/pull/33105 中做出了第一个贡献
* @EndlessLucky 在 https://github.com/langgenius/dify/pull/34151 中做出了第一个贡献
* @jimmyzhuu 在 https://github.com/langgenius/dify/pull/34328 中做出了第一个贡献
* @LikiosSedo 在 https://github.com/langgenius/dify/pull/34436 中做出了第一个贡献
* @agenthaulk 在 https://github.com/langgenius/dify/pull/34450 中做出了第一个贡献
* @mvanhorn 在 https://github.com/langgenius/dify/pull/33473 中做出了第一个贡献
* @jakearmstrong59 在 https://github.com/langgenius/dify/pull/34589 中做出了第一个贡献
* @iamPulakesh 在 https://github.com/langgenius/dify/pull/34614 中做出了第一个贡献
* @aliworksx08 在 https://github.com/langgenius/dify/pull/34607 中做出了第一个贡献
* @corevibe555 在 https://github.com/langgenius/dify/pull/34633 中做出了第一个贡献
* @carlos4s 在 https://github.com/langgenius/dify/pull/34693 中做出了第一个贡献
* @s-kawamura-upgrade 在 https://github.com/langgenius/dify/pull/34719 中做出了第一个贡献
* @zhangbububu 在 https://github.com/langgenius/dify/pull/34720 中做出了第一个贡献
* @dataCenter430 在 https://github.com/langgenius/dify/pull/34769 中做出了第一个贡献
* @volcano303 在 https://github.com/langgenius/dify/pull/34751 中做出了第一个贡献
* @BrianWang1990 在 https://github.com/langgenius/dify/pull/34515 中做出了第一个贡献
* @jonathanchang31 在 https://github.com/langgenius/dify/pull/34795 中做出了第一个贡献
* @balancetheworld 在 https://github.com/langgenius/dify/pull/34804 中做出了第一个贡献
* @ai-hpc 在 https://github.com/langgenius/dify/pull/34859 中做出了第一个贡献
* @sxxtony 在 https://github.com/langgenius/dify/pull/34806 中做出了第一个贡献
* @jeanibarz 在 https://github.com/langgenius/dify/pull/34868 中做出了第一个贡献
* @plind-junior 在 https://github.com/langgenius/dify/pull/34661 中做出了第一个贡献
* @YgorLeal 在 https://github.com/langgenius/dify/pull/34786 中做出了第一个贡献
* @HamzaSwitch 在 https://github.com/langgenius/dify/pull/34909 中做出了第一个贡献
* @wdeveloper16 在 https://github.com/langgenius/dify/pull/34960 中做出了第一个贡献
* @AlsoTheZv3n 在 https://github.com/langgenius/dify/pull/34967 中做出了第一个贡献
* @thegdsks 在 https://github.com/langgenius/dify/pull/34988 中做出了第一个贡献
* @aviu16 在 https://github.com/langgenius/dify/pull/34983 中做出了第一个贡献
* @HeYin-OS 在 https://github.com/langgenius/dify/pull/34896 中做出了第一个贡献
* @dev-miro26 在 https://github.com/langgenius/dify/pull/34824 中做出了第一个贡献
* @LincolnBurrows2017 在 https://github.com/langgenius/dify/pull/33435 中做出了第一个贡献
* @KeWang0622 在 https://github.com/langgenius/dify/pull/35047 中做出了第一个贡献
* @xingarr 在 https://github.com/langgenius/dify/pull/27838 中做出了第一个贡献
* @samrusani 在 https://github.com/langgenius/dify/pull/35004 中做出了第一个贡献
* @jimcody1995 在 https://github.com/langgenius/dify/pull/35079 中做出了第一个贡献
* @bohdansolovie 在 https://github.com/langgenius/dify/pull/35081 中做出了第一个贡献
* @aether-png 在 https://github.com/langgenius/dify/pull/35140 中做出了第一个贡献
* @jamesrayammons 在 https://github.com/langgenius/dify/pull/35197 中做出了第一个贡献
* @Eruis2579 在 https://github.com/langgenius/dify/pull/35183 中做出了第一个贡献
* @aayushbaluni 在 https://github.com/langgenius/dify/pull/35263 中做出了第一个贡献
* @jerryzai 在 https://github.com/langgenius/dify/pull/35234 中做出了第一个贡献
* @shaun0927 在 https://github.com/langgenius/dify/pull/35326 中做出了第一个贡献
* @kuishou68 在 https://github.com/langgenius/dify/pull/35150 中做出了第一个贡献
* @hyl64 在 https://github.com/langgenius/dify/pull/35357 中做出了第一个贡献
* @bitcompass 在 https://github.com/langgenius/dify/pull/34835 中做出了第一个贡献
* @avasis-ai 在 https://github.com/langgenius/dify/pull/35389 中做出了第一个贡献
* @sicnuyudidi 在 https://github.com/langgenius/dify/pull/35249 中做出了第一个贡献
* @Mutantpenguin 在 https://github.com/langgenius/dify/pull/35439 中做出了第一个贡献
* @iAbhi001 在 https://github.com/langgenius/dify/pull/35441 中做出了第一个贡献
* @JiwaniZakir 在 https://github.com/langgenius/dify/pull/33702 中做出了第一个贡献
* @MukundaKatta 在 https://github.com/langgenius/dify/pull/35547 中做出了第一个贡献
* @treekimm 在 https://github.com/langgenius/dify/pull/35519 中做出了第一个贡献
* @knyazz 在 https://github.com/langgenius/dify/pull/35645 中做出了第一个贡献

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.13.3...1.14.0

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.14.0` · 📅 发布：2026-04-29 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.14.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
