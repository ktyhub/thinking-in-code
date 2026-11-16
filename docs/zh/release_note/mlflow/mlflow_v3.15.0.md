---
title: "mlflow v3.15.0"
project: "mlflow"
repo: "mlflow/mlflow"
tag: "v3.15.0"
version: "v3.15.0"
published: "2026-07-31"
type: "minor"
lang: "zh"
---

# mlflow v3.15.0

MLflow 3.15.0 包括几项主要功能和改进

### 主要新功能

- **🧩 [MCP 注册表](https://mlflow.org/docs/latest/genai/mcp-registry/)**：用于注册、版本控制和共享模型上下文协议服务器的集中目录 - 具有语义版本控制配置、可升级别名、标签、自动发现工具以及 Claude Code 和 `.mcp.json` 的现成连接指令。从 UI、REST API 或 Python 进行管理！
- **🤖 MLflow Assistant 增强**：应用内 AI 助手现在支持从单个设置页面选择多个 LLM 提供程序（Claude Code、Codex 和 OpenAI 兼容/网关端点），在 Composer 中显示实时每个会话令牌使用情况和估计成本，并且更易于设置 — `mlflow agent setup` 可以在一个提示中启用它，并将 API 密钥安全地存储在网关的 LLM 连接中。
- **🗂️ 可共享表视图**：保存运行表的命名视图 — 捕获列、顺序、宽度、过滤器和排序 — 并通过 URL 共享它们。
- **⚡ 通过预签名 URL 进行无代理工件上传/下载**：大型工件传输现在可以绕过跟踪服务器并通过预签名 URL 直接与云存储（例如 S3）通信，从而减少大文件的服务器负载和超时。为了向后兼容，我们自动回退到代理传输。
- **🖼️ LLM 法官中的多模态附件**：使用 `make_judge()` 创建的 `{{ trace }}` 法官现在可以通过新的 `get_span_image` 工具_查看_在跟踪跨度中捕获的图像，该工具以 Base64 数据 URL 的形式获取附件，并将其传递到多模态模型（通过 litellm 与 A​​nthropic、Gemini 和 OpenAI 兼容），从而能够评估视觉任务、屏幕截图和其他视觉内容。

### 其他各种功能和改进：

- [追踪/追踪] 添加 Pydantic AI 2.x 自动记录支持 (#24721, @B-Step62)
- [跟踪/UI] [3/3] 添加低价值问题检测结果的操作建议（#24580，@B-Step62）
- [网关] 支持 AI 网关中的每个端点预算策略（#24370，@joelrobin18）
- [评估/网关] 为 SAP AI Core Orchestration v2 添加 `sap-ai-core:/` 提供程序以及 `extra_headers` 支持（#24356，@shivamxtech）
- [模型注册表] [模型注册表] 将 UC 模型工件下载迁移到本机临时信用（#24576，@AknA13）
- [网关/跟踪/UI] [2/3] 简化问题检测启动模式（#24579，@B-Step62）
- [跟踪/UI] [1/3] 在后台运行问题检测（#24578，@B-Step62）
- [Tracing] [BUG] 修复 otel 父上下文传播 (#24444, @iyashk)
- [模型注册表] [模型注册表] 本机 `/api/2.1` 端点上的 Gate UC 模型注册表 client (#24517，@AknA13)
- [文档/跟踪] 使用工作区启用仅工件模式（#24452，@kramaranya）
- [跟踪/UI] 停止在跟踪 UI 中急切地预取完整的相邻跟踪（#24411，@DaoDaoNoCode）
- [文档/网关] 通过 RBAC 网关对 OpenAI 协议编码代理进行身份验证（#24294，@joshuawong-db）
- [追踪] 壮举：向 typescript sdk 添加搜索追踪（#23660，@WUMIKE233）
- [提示/用户界面] 使用 Monaco JSON 编辑器和格式操作将每个工具卡添加到 Playground (#24129，@tanghaoji)
- [提示/UI] 使用添加工具输入流程重新设计 Playground `Tools` 设置（#24102，@tanghaoji）
- []壮举：添加包含 Auto 和 Composer 2.5 定价的 Cursor 模型目录（#24078，@TomeHirata）
- [追踪/追踪] 支持数值评估追踪过滤器 (#23948, @tanghaoji)
错误修复：

- [Tracing] 为 Databricks 上的 Claude Code 插件跟踪计算 `mlflow.llm.cost` (#24416, @harupy)
- [UI] 修复 UI 中的工件直接下载功能检查（#24748，@B-Step62）
- [跟踪/UI] 跨多个窗口加载时刷新跟踪已保存视图（#24746，@joshuawong-db）
- [UI] 修复 UnauthorizedError 构造函数消息（#24729，@mihir2921）
- [UI] 回退到聊天会话转向内容的嵌套范围（#24703，@MannXo）
- [Tracing / Tracking] 修复跟踪和记录模型的实验 GC 级联（#24351，@copilot-swe-agent）
- [跟踪] 修复默认实验重命名时启用工作区的跟踪存储崩溃循环（#24598，@daniellok-db）
- [跟踪] 修复 `kubernetes-client` 36+ 的 Kubernetes 身份验证令牌提取（#24687，@HumairAK）
- [UI] 保留设置时刷新助手配置，以便提供程序指示器不会过时（#24704，@joshuawong-db）
- [Build] 修复 `imagePullSecrets` 垃圾收集 CronJob (#24626, @nightcityblade)
- [UI] Lift Assistant浮动按钮位于底部固定操作栏上方（#24606，@joshuawong-db）
- [评估/跟踪] 修复问题检测结构化输出模式（#24674，@B-Step62）
- [模型] 在 `mlflow.statsmodels` 口味中添加 `MLFLOW_ALLOW_PICKLE_DESERIALIZATION` 防护罩 (#24686, @B-Step62)
- [跟踪] 在笔记本跟踪渲染器 URL 中保留静态前缀（#24682，@mprahl）
- [UI] 修复运行详细信息侧栏中的空白和字段（#24634，@aishdbx）
- [模型/评分] 标准化 `parse_message` 中 `ChatAgentMessage` 的推理内容部分（#24642，@iyashk）
- [UI] 修复评估运行 `Actions` 下拉列表，当未选择任何运行时，剩余 clickable (#24676，@daniellok-db)
- [UI] Surface 截断助手流作为错误，而不是静默的 `done` (#24603，@joshuawong-db)
- [跟踪] 禁用工作区时在 `--artifacts-only` 服务器上进行荣誉实验（#24585，@PattaraS）
- [跟踪/UI] 通过按行采样指标历史来绑定 get-history-bulk-interval 内存（#24305，@Mytolo）
- [跟踪] [BUG] 在 basic-auth 中的预签名下载路径上强制执行工件授权（#24571，@iyashk）
- [评估] 在 `mlflow.genai.evaluate` 中保留明确的期望（#24561，@yangbaechu）
- [网关/UI] 支持 AI 网关中的 Portkey 路由配置 (#24398, @rs-03)
- [UI] 在 `GenericInputModal` 中显示内联输入模式提交错误，而不是短暂的 toast (#23918，@Vedant-Agarwal)
- [评估/跟踪] 对在线评分配置端点强制执行实验权限（#24562，@aaronteo-db）
- [跟踪/跟踪] 将上下文变量传播到跟踪读取线程池工作线程中（#24456，@iyashk）
- [] 修复工件下载中的 Windows 路径处理（#20225，@acepace）
- [UI] 修复侧边栏导航和工作流程类型在 URL 导航或浏览器后退/前进时不更新的问题（#22116，@DaoDaoNoCode）
- [网关] 不要将 `stream_options` 从 Assistant 发送到网关 (#24552, @joshuawong-db)
- [评估] 针对 Databricks 结构化输出模型修复 MemAlign 指南蒸馏（#24547，@veronicalyu320）
- [UI] 修复：在运行标签多选下拉列表中按字母顺序对标签进行排序（#24134，@mysticalayushi）
- [Tracing] 通过首选 `ls_provider` 修复自动记录的 `ChatDatabricks` 跟踪的 LLM 成本（#24185，@james-fletcher-db）
- [跟踪] 修复 pytorch `pt2` 导出批量大小为 1 `input_example` 的问题（使用 `Dim.AUTO`）（#24494，@B-Step62）
- [跟踪/追踪] 修复 `SqlAlchemyStore.log_spans` 中汇总父跨度的重复计算跟踪令牌使用情况（#24339，@gauthierpiarrette）
- [跟踪] 修复 `MlflowSparkStudy` 修剪器和方向处理（#24425，@hellocybernetics）
- [网关/跟踪/UI] 修复网关尝试浏览器跟踪在 UI 中呈现为原始 `kvlist` 数据的问题（#24400，@joelrobin18）
- [UI] 修复角色模式资源选择器在禁用工作区时失败并显示 `FEATURE_DISABLED` (#24441，@joelrobin18)
- [模型注册表] [模型注册表] 恢复 TemporaryCredentials.credentials 上的 oneof (#24489，@AknA13)
- [UI] [修复] 修复固定锚点之前的运行表列重新排序（#24465，@joshuawong-db）
- [UI] 修复禁用工作区时 `FEATURE_DISABLED` 导致管理员权限授予失败的问题（#24383，@joelrobin18）
- [UI] 修复 `Columns` 下拉菜单锚定在运行表上（#24419，@joshuawong-db）
- [UI] 修复工件查看器在多行文本文件上崩溃的问题 (#23899, @jayceguo)
- [Tracing] 修复异步跟踪导出删除工作区上下文 (#24093) (#24275, @vatsalyd)
- [跟踪]修复：将 OpenAI 代理生成跨度属性存储在正确的 SpanAttributeKey 常量下（#24290，@RudraDudhat2509）
- [Tracing / Tracking] 修复 `start_trace()` 和 `log_spans()` 之间跟踪元数据上的 Postgres 死锁 (#24338, @joshuawong-db)
- [Tracing / Tracking] 避免 TRACKING_STORE 跟踪读取的急切跨度反序列化。 （＃24331，@shivamAmrutia）
- [网关] 在运行 FastAPI 身份验证验证器之前解析工作区上下文（#24368，@joelrobin18）
- [Tracing] 修复 `RecursionError` 损坏深层嵌套的跟踪 (#24362, @joshuawong-db)
- [评估/跟踪] 修复克隆跟踪不可用时 `genai.evaluate` 崩溃的问题 (#24357, @joshuawong-db)
- [评分] 处理 `DatabricksRuntimeVersion.parse` 中未切割的 `{major}.x` 小调 (#24353, @PattaraS)
- [评估/跟踪] 修复请求前验证器调用视图函数的基本身份验证（#24354，@joshuawong-db）
- [UI] 修复促销模式焦点（aria-hidden）并将其显示在空模型页面上（#24278，@aminehd）
- [评分] 在 Databricks Serverless 上修复 `spark_udf` `InvalidVersion` 的 `{major}.x` 运行时图像字符串（#24336，@PattaraS）
- [Tracing] 修复单独代理的跟踪 OTLP 编码（#24318，@sanatb187）
- [模型注册表/模型] 将标签转发到 Model.log() 中注册的 ModelVersion (#24271, @Ankita7033)
- [跟踪/UI] 修复跟踪 UI 中 `TRACKING_STORE` 跟踪的重复全跟踪获取（#24319，@PattaraS）
- [模型/评分] Honor 在加载时声明 ONNX 执行提供程序（#24232，@qyc）
- [评估] 修复 pos_label 未传播以评估 ROC/PR/校准曲线 (#24049, @immu4989)
- [跟踪] 从身份验证代理中以工作区为前缀的工件路径解析实验 ID（#24214，@rakshithbk-moeng）
- [] 修复无服务器执行器上的 `DatabricksSDKModelsArtifactRepository` 身份验证（#24247，@harupy）
- [评估] 为 AI Gateway 裁判和记分员发送严格兼容的 `response_format` (#24048, @B-Step62)
- [模型注册表] 创建模型版本时需要对源运行或模型的读取权限（#24293，@PattaraS）
- [] 修复 Vertex AI Gemini 多回合工具调用 (#24266, @joshuawong-db)
- [跟踪] 在 LogInputs 端点上强制执行更新运行授权（#24291，@PattaraS）
- [跟踪] 多部分工件上传中的 Honor `MLFLOW_S3_IGNORE_TLS` (#24113, @yashmahamulkar)
- [网关/跟踪] 拒绝 WSGI 挂载中的非 HTTP 范围以修复 WebSocket 崩溃（#24274，@joshuawong-db）
- [模型注册表/跟踪/跟踪] 修复跟踪提供程序线程泄漏和 `set_experiment` 以静默方式重新启用跟踪（#24267，@PattaraS）
- [跟踪] 修复 @mlflow/opencode 针对已发布核心删除会话元数据的问题（#24252，@joshuawong-db）
- [UI] [BUG] 修复 #24170：在管理 UI 中显示直接（每个资源）权限（#24253，@nghessss）
- [模型注册表] 修复 webhook 传递中的 DNS 重新绑定 SSRF 绕过（#24258，@PattaraS）
- [追踪/追踪] 修复摘要忽略 valid=False 评估 (#24251, @joshuawong-db)
- [评估] 将 DSPy 判断优化器 Databricks 模型路由到 Mosaic AI Gateway 以获取 Unity 目录名称（#24177，@veronicalyu320）
- [UI] 允许在 MLflow 助手上授予工具调用权限（#24084，@joshuawong-db）
- [Build] 使用 pathlib.Path 修复 Skill_installer 中的 Python 3.14 兼容性（#24103，@krishtyagi0109-pixel）
- [UI] 将游乐场工具调用参数和 JSON 响应渲染为代码块（#24086，@tanghaoji）
- [网关] 支持AI网关中的Gemini思想签名（#24051，@vatsalyd）
- [UI]修复（playground）：渲染tool_calls，因此使用工具运行的提示不再显示空结果（＃24073，@tanghaoji）

文档更新：

- [文档] 添加 MCP 注册表功能的文档 (#24713, @dkuc)
- [文档/跟踪] 文档：对未知模型名称的 0 美元跟踪成本进行故障排除（#24705，@daniellok-db）
- [文档] 文档：跟踪常见问题解答中的凭证过期跟踪删除原因，快速入门中的实验 ID (#24692，@adamgurary)
- [文档] 为 MCP 服务器注册表添加 Swagger UI API 文档（#24519，@dkuc）
- [文档] 文档：更新 auth REST API 文档以反映新的 RBAC 端点（#23965，@Farzah11）
- [文档] 文档：修复导致访问被拒绝的损坏的身份验证 REST API 链接（#24280）（#24350，@Farzah11）
- [文档] 添加 Artifact Hub 存储库元数据和 Helm 图表的 OCI 安装文档（#24313，@B-Step62）
- [文档] 文档：更新纯 OTel 设置的 Omnigent 集成页面（#24240，@TomeHirata）
- [文档] 文档：添加 Omnigent 跟踪集成页面（#24072，@TomeHirata）

小错误修复和文档更新：

＃24746，＃24747，＃24671，＃24637，＃24655，＃24459，＃24510，＃24629，＃24426，＃24554，＃24555，＃24556，＃24359，＃24460，＃24445，＃23676， ＃24446，＃24268，＃24417，＃24358，＃24288，＃24250，＃24206，＃24165，＃23939，＃23936，＃23881，@joshuawong-db； ＃24743，＃24723，＃24720，＃24694，＃24695，＃24706，＃24698，＃24693，＃24636，＃24675，＃24673，＃24672，＃24663，＃24632，＃24630，＃24628， ＃24627，＃24625，＃24548，＃24216，＃24208，＃24205，＃24158，＃24159，＃24136，＃24095，＃24119，＃24106，＃24104，＃24085，@harupy; ＃24736，@henishborad； ＃24717，＃24583，＃24582，＃24584，＃24685，＃24621，＃24604，＃24521，＃24482，＃24495，＃24484，＃24480，＃24481，＃24490，＃24374，＃24317， ＃24299，@B-Step62； #24656，@rrioh； ＃24696，＃24600，＃24601，@daniellok-db； ＃24657，@DaoDaoNoCode； #24217，@nananosirova； ＃24645，＃24377，＃24492，＃24380，＃21417，＃24346，＃24297，＃24108，@mprahl； ＃24477，@dkuc； ＃24572，＃24520，＃24479，@jonburdo； ＃24505，@PattaraS； #24242，@Killian-fal； ＃24558，＃24540，＃24090，＃24139，＃24089，＃24061，＃24032，＃24030，@aaronteo-db； #24176，@zcin； ＃24412，@AknA13； ＃24437，@smoorjani； #24361，@sun-andsky； ＃23873，@WeichenXu123； ＃24240，＃24203，＃24178，@TomeHirata； ＃24225，＃24204，＃24166，＃24054，@tanghaoji； ＃23794，＃24171，@kramaranya； ＃23251，@aakankshaduggal； ＃24151，＃24150，@xq-yin； ＃24075，@kevin-lyn

---

> 📦 仓库：[mlflow/mlflow](https://github.com/mlflow/mlflow) · 🏷️ 版本：`v3.15.0` · 📅 发布：2026-07-31 · [查看英文原版 Release](https://github.com/mlflow/mlflow/releases/tag/v3.15.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
