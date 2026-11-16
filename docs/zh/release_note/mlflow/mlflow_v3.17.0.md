---
title: "mlflow v3.17.0"
project: "mlflow"
repo: "mlflow/mlflow"
tag: "v3.17.0"
version: "v3.17.0"
published: "2026-10-07"
type: "minor"
lang: "zh"
---

# mlflow v3.17.0

MLflow 3.17.0 包括几个主要功能和改进。

### 主要新功能

- **[跨评估、网关和跟踪的 Jev 决策](https://mlflow.org/docs/latest/genai/eval-monitor/scorers/llm-judge/custom-judges/typesafe/)**：在内置评分器和自定义法官中使用 TypeSafe 模型，并提供类型化布尔或分类反馈。 （＃26100，@B-Step62）
- **[共享资源的细粒度权限](https://mlflow.org/docs/latest/self-hosting/security/role-based-access-control/#sub-resource-tiers)**：通过通配符授予和显式拒绝控制对包含的资源类型（包括运行、跟踪和版本）的访问。 （＃26157，@rrrkharse）
- **[大型跟踪数据集的更快分析](https://mlflow.org/docs/latest/self-hosting/architecture/backend-store/#trace-analytics-daily-rollups)**：通过选择每日摘要和原始查询回退来减少 SQL 分析查询开销。 （＃25991，@HumairAK）
- **[更清晰的评估结果](https://mlflow.org/docs/latest/genai/datasets/)**：将聚合记录模型评估指标与生成这些指标的托管数据集关联起来。 （＃25927，@joshuawong-db）
- **[共享服务器的辅助改进](https://mlflow.org/docs/latest/genai/getting-started/try-assistant/)**：将保存的对话范围保持在登录用户范围内，并在帐户更改时重置活动会话。 （＃26009，@kriscon-db）

**数据库升级：** SQL 支持的服务器需要协调架构升级，所有编写器都停止，并需要可恢复的备份，即使每日汇总仍处于禁用状态。在新的 MLflow 版本上重新启动所有副本之前运行 `mlflow db upgrade <database-url>`。不支持混合版本滚动升级。按照[数据库升级说明](https://mlflow.org/docs/latest/self-hosting/architecture/backend-store/#upgrading-a-database-with-trace-analytics-data)。

### 其他各种功能和改进：

- [跟踪/UI] 为 TypeSafe System One 跟踪添加丰富的渲染（#26276，@B-Step62）
- [构建] 在 GitHub 问题评论中显示问题分类进度（#26454，@copilot-swe-agent）
- [文档/评估] 允许自定义 `base_url` 进行直接 TypeSafe 判断（#26445，@B-Step62）
- [文档/网关] 允许 TypeSafe 网关端点自定义 `typesafe_api_base` (#26442，@B-Step62)
- [评估/跟踪] 支持 `name IN (...)` 过滤器进行评估数据集搜索（#26374，@HumairAK）
- [文档/评估/网关/UI] 通过网关系统一支持 TypeSafe 和 OpenRouter Jev 判断（#26243，@joshuawong-db）
- [构建/文档/跟踪/跟踪] 为 TypeSafe AI 添加 `@mlflow/typesafe` 跟踪集成（#26342，@B-Step62）
- [构建/文档] 在稳定版本镜像后发布 Helm 图表 (#26064, @joshuawong-db)
- [跟踪/UI] 将 `TraceImage` 添加到自定义跟踪视图（#26297，@chris-chieu）
- [Tracing] 简化 `setup.sh` 中的默认跟踪设置（#26341，@B-Step62）
- [构建/文档/跟踪/跟踪] 添加 TypeSafe SDK 自动记录支持（#26129，@B-Step62）
- [追踪/跟踪] 公开 Prometheus 的 OTLP 摄取指标（#25192，@ashtarkb）
- [跟踪] 计算 SageMaker 跟踪的 LLM 跟踪成本 client 端（#26178、@B-Step62）
- [模型注册表/模型] 添加 `uc_model_service` UC 模型版本依赖支持（#26140，@TomeHirata）
- [模型] 添加 `DatabricksUCModelService` 资源类型 (#26137, @TomeHirata)
- [文档/跟踪/跟踪] 维护 SQL 跟踪分析每日汇总（#25489，@NeriCarcasci）
- [文档/跟踪/跟踪] 从选择加入的 SQL 每日汇总中提供跟踪分析读取（#25239，@NeriCarcasci）
- [网关/UI] 为 AI 网关添加 TypeSafe Jev 支持（#26048，@xq-yin）
- [跟踪] 支持 `search_prompts()` 中的 client、Fluent 和 GenAI API（#25967，@avanish-garg）
- [文档/网关] 将 OpenAI 兼容的模型发现添加到 MLflow 网关 (#25940, @RussellLuo)
- [网关] 添加人择消息传递到 `AmazonBedrockProvider` (#25863, @rhamzatov)
- [跟踪] 支持 `createPresignedUploadUrl` 端点中记录的模型工件（#24765，@henishborad）
- [跟踪] 将 `mlflow.restore_experiment()` 和 `mlflow.restore_run()` 添加到流利的 API (#25852, @avanish-garg)
- [Build] 在 Helm 图表中配置拓扑扩展约束（#25778，@daanknoope）
- [文档/跟踪] 将源元数据添加到 TypeScript 代理跟踪（#25825，@B-Step62）
- [模型注册表/UI] 将源记录模型链接添加到模型版本页面（#25727，@rrioh）
- [构建/文档] `charts`：将 Helm 活动/就绪/启动探针公开为配置变量（#25560，@creater29）
- [网关/UI] 允许管理员使用 `MLFLOW_ENABLE_AI_GATEWAY` 禁用 AI 网关（#25236，@DaoDaoNoCode）
- [UI] 将数据集 ID 添加到 UI (#25234, @janald99)
- [Tracing] 为 `@mlflow.trace` 和 `mlflow.start_span` 添加一流的跨度描述支持（#25548，@Rohitkanithi）

错误修复：

- [评估] 在 min_relative_change 检查中使用基线的大小（#26252，@mavericksea-ai）
- [UI] 支持包装的 MCP 注册表服务器定义（#25764，@mprahl）
- [跟踪/跟踪] 修复十进制指标总和并减少 SQL 跟踪查询和汇总开销（#26369，@HumairAK）
- [评估] 修复列表值目标和预测的 `EvaluationDataset` 哈希（#26433，@LE0-Lin）
- [跟踪] 修复 MCP 服务器 `version` 过滤器重写引用值 (#26423, @Amazinghorseli)
- [追踪] 在 GenAI semconv 导出中对 `tool_call_response` 部件使用 `response` 密钥 (#26360, @Zhuoxi2000)
- [模型] 将 `MLFLOW_ALLOW_PICKLE_DESERIALIZATION` 防护装置添加到 `mlflow.paddle` 风味中 (#26428, @aaronteo-db)
- [Tracing] 在 Span、LazySpan 和 Trace 上支持 `copy.deepcopy` 和 `pickle` (#26307，@Rohitkanithi)
- [跟踪/UI] 将跟踪评估过滤器重命名为反馈（#26415，@B-Step62）
- [评估/网关] 将自定义记分器代码执行限制在作业执行器中（#26225，@kriscon-db）
- [网关] 对于 `GeminiAdapter` 中不匹配的 `tool_call_id` 返回 422 (#26253, @codechrl)
- [跟踪] 在 GenAI semconv `execute_tool` 和 `invoke_agent` 范围上保留工具和代理名称（#26394，@chrikrah）
- [网关] 报告 `finish_reason` `tool_calls` 用于 Anthropic 和 Gemini 工具调用 (#26390, @r14dd)
- [跟踪/UI] 修复“复制链接到跟踪”URL，删除 `#` 哈希路由（#26378，@aaronteo-db）
- [评估] 修复 `_strip_markdown_code_blocks` 单线和粘合关闭代码围栏 (#26332, @lets-order-some-fries)
- [跟踪] 修复 MCP 访问端点的 `server_name` 过滤器（#26327，@Amazinghorseli）
- [评估] 修复嵌套变长数组的散列（#26311，@gohil-gaurav）
- [跟踪] 修复非人类 `invoke_model_with_response_stream` 块和 GPT-6 `redactedContent` 推理上的 Bedrock 自动日志崩溃流循环（#26346，@kimnamu）
- [模型注册表] 修复 `@latest` 别名无法解析为最高模型版本（#26291，@CTWalk）
- [跟踪] 修复 `MlflowStorage.set_trial_state_values` WAITING 试验转换 (#25945, @CoralGarden52)
- [跟踪] 当共享 WSGI 线程池耗尽时保持服务器信息响应（#26267，@sduvvuri1603）
- [网关] Gemini 和 Vertex AI 网关请求中的 Honor `tool_choice` (#26300, @Vaishnavi220506)
- [Gateway] 修复 Anthropic 流中的并行工具调用索引（#26269，@r14dd）
- [Gateway] 修复 Gemini 和 LiteLLM 流中的并行工具调用索引（#26270，@r14dd）
- [追踪] 多部分神器下载中的荣耀 `MLFLOW_S3_IGNORE_TLS` (#26004, @Anurag-M1)
- [跟踪] 将 `load_text` 和 `load_dict` 工件读取为 UTF-8 (#26265，@ppcvote)
- [模型] 使模式 `_merge` 和 `AnyType` 与顺序无关（#26260，@JoeyTan21）
- [UI] 修复比较运行中的并行坐标度量标签对比度（#26275，@Taj010）
- [跟踪] 修复延迟流期间的 `llama_index` 跟踪 (#26293, @B-Step62)
- [跟踪] 当流在迭代中期引发时，以 `ERROR` 状态结束 OpenAI 自动日志流跨度（#26305，@iam human-cheolheelee）
- [Tracing] 处理在自动日志中不产生块的 OpenAI 流（#26283，@iam human-cheolheelee）
- [构建/跟踪] 修复 `db` extra 中的 psycopg3 包装（#26271，@abligail）
- [构建/跟踪] 将 psycopg3 添加到 `db` extra 以实现 SQLAlchemy 2.1 兼容性（#26239，@kriscon-db）
- [跟踪] 在 `search_logged_models` 过滤器中接受小写 `like`、`ilike` 和 `in` (#26249, @SajalDevX)
- [跟踪] 在 TypeScript 跟踪和 OpenCode 中支持 MLFLOW_TRACE_LOCATION (#23772, @B-Step62)
- [Tracing] 修复 Windows 跟踪用户归因 (#26221, @joshuawong-db)
- [UI] 修复详细信息页面上的数据集导航突出显示（#26187，@DaoDaoNoCode）
- [网关/跟踪/跟踪] 引发 SQLAlchemy 实验 ID 解析的无效参数错误（#26223，@joshuawong-db）
- [跟踪] 在 Span.get() 访问上引发有用的 AttributeError (#26165, @Rohitkanithi)
- [追踪/跟踪] 修复 `trace.text` 搜索丢失的非 ASCII 范围内容 (#26130, @pablo-legeren)
- [网关] 将并行工具调用结果分组到 `GeminiAdapter` 中的一个用户回合中（#26001，@rhamzatov）
- [跟踪] 将会话元数据传播到 TypeScript UC 根跨度（#26209，@B-Step62）
- [追踪] 在 `mlflow traces delete` 中去除 `--trace-ids` 条目周围的空格（#26204，@breken-ai）
- [跟踪] 停止指标过滤器缩小 `search_logged_models` 页面（#26057，@lazarevtill）
- [网关] 处理 `GeminiAdapter` 中的混合文本和 `functionCall` 部分 (#26109, @r14dd)
- [跟踪] 在 `mlflow traces search` 中去除 `--order-by` 条目周围的空格（#26192，@breken-ai）
- [评估/跟踪] 修复 `SearchUtils` 中的数字属性解析（#26180，@B-Step62）
- [评估/追踪] `calculate_trace_filter_correlation` 绑定整数实验 ID (#26179, @B-Step62)
- [跟踪] 在 `mistral` 和 `groq` 自动记录中传播跟踪上下文（#26177，@B-Step62）
- [跟踪] 在 `search_logged_models` 中急切加载标签、参数和指标（#25983，@lazarevtill）
- [Gateway] 仅根据定义预算窗口的策略版本评估预算窗口（#26075，@rhamzatov）
- [追踪/跟踪] 添加 `trace_id` 属性并修复 `Trace` 上的 `__repr__` (#26007, @Rohitkanithi)
- [评估] 修复加载签名包含括号的 `@scorer` 函数 (#26172, @anishmehta24)
- [模型注册表] 删除模型版本时删除过时的别名（#26173，@copilot-swe-agent）
- [Tracing] 修复 `record_exception` 被赋予字符串时的跨度状态描述 (#26171, @anishmehta24)
- [评估] 修复 `ndcg_at_k` 文档 ID 冲突 (#26041, @kadyrbekovhamit-cyber)
- [评估] 验证问题发现中的重复数据删除组引用（#26082，@vb-dbrks）
- [模型注册表/跟踪] 强制 psycopg v3 的数字 SQL 搜索过滤器值（#26170，@copilot-swe-agent）
- [文档/模型] 保留 Databricks 向后兼容的序列化默认值（#25992，@B-Step62）
- [模型] 将 cloudpickle 用于嵌套在 SHAP 解释器中的 sklearn 模型（#26138，@B-Step62）
- [Tracing] 使捆绑模型成本查找具有确定性（#26154，@copilot-swe-agent）
- [Tracing] 在 Span 下标访问上引发有用的 TypeError (#26008, @Rohitkanithi)
- [模型注册表] 根据声明的资源验证 `CreateModelVersion` 源（#26037，@joshuawong-db）
- [Tracing] 避免在 LangGraph 生命周期回调中重复注册 MlflowLangchainTracer (#26136, @AbdulAliMamnun)
- [UI] 修复当 `navigator.onLine` 为 false 时 MLflow UI 永远挂起的问题 (#25961, @nrhys2005)
- [网关] 在目录同步中添加对 LiteLLM 的 `responses` 模型模式的支持（#26095，@TomeHirata）
- [跟踪] 修复应用静态前缀时运行状况探测验证绕过（#25114，@adrianAzoitei）
- [评分] 保留嵌套 `dataclass` 签名中的继承字段（#26071，@HaokaiDing）
- [跟踪/UI] 修复重复的顶级跟踪聊天消息（#26097，@joshuawong-db）
- [跟踪] 修复 MSSQL 标签模式布尔谓词 (#26093, @joshuawong-db)
- [跟踪/UI] 修复跟踪资源管理器中大数字字符串跨度属性的精度损失（#25219，@vpirhach）
- [Tracing / UI] 支持 OpenInference 请求和响应模型名称属性 (#26047, @xq-yin)
- [提示]按注册表范围提示缓存条目（#26066，@joshuawong-db）
- [网关] 修复网关请求授权解析 (#25937, @joshuawong-db)
- [跟踪/UI] 在工件预览中将 .ipynb 笔记本视为文本/纯文本（#25829，@harshal-paltse）
- [UI] 使 `server-info` 请求超时而不是挂起 UI (#26027, @nrhys2005)
- [网关] 在 `send_stream_request` 中保留上游错误消息（#26036，@rhamzatov）
- [跟踪] 使用 `DefaultAzureCredential` 修复 Azure 分段上传（#26031，@joshuawong-db）
- [Tracing] 修复工具调用的 Claude Code 使用范围（#25931，@joshuawong-db）
- [模型] 抑制来自 `mlflow.types.responses` 的导入警告（#26033，@joshuawong-db）
- [跟踪] 修复与 `SqlAlchemyStore` 中的数字搜索过滤器匹配的 NaN 指标（#25802，@2sumtech）
- [模型注册表/跟踪] 拒绝连接到默认工件根 (GHSA-mr9f-g8qf-4w4j) 之外的名为 client 的工件主机 (#25891, @tanghaoji)
- [网关/跟踪] 拒绝请求主体中存在冲突的 protobuf 字段拼写 (GHSA-3g8m-hm3x-gh2r) (#25869, @tanghaoji)
- [评估/跟踪]将`trace_ids`绑定到`issues/invoke`和`genai/evaluate/invoke`上的授权实验（#25873，@tanghaoji）
- [评估] 修复 `eval_results_table` 中的位置系列对齐（#25799，@Pdevadiga45）
- [UI] 按记录模型过滤评估指标（#25928，@joshuawong-db）
- [跟踪] 修复记录的模型指标顺序分页（#25935，@joshuawong-db）
- [跟踪] 拒绝无方案相对工作空间 `default_artifact_root` (#25700, @KR-Ravindra)
- [UI] 减少未经请求的 MLflow Assistant 响应填充（#25925，@joshuawong-db）
- [评估/跟踪] 完全匹配第三方评分器模块，而不是通过包前缀 (GHSA-26p8-2jq9-3vq9) (#25906, @tanghaoji)
- [模型注册/跟踪] 通过注册模型权限过滤嵌套的 `run.modelVersions` GraphQL 字段 (GHSA-f253-vggg-rwh8) (#25905, @tanghaoji)
- [跟踪] 范围本机 FastAPI `/jobs/search` 到基本身份验证下的调用者 (GHSA-9pch-m9gq-c25q) (#25899, @tanghaoji)
- [网关/跟踪] 工作区上的 Gate `CreateGatewaySecret` 在 basic-auth 中创建授权 (#25895, @tanghaoji)
- [模型注册表/跟踪] 在 basic-auth (GHSA-442c-p479-46xg) 中授权 CreateModelVersion camelCase `runId`/`modelId` 别名 (GHSA-442c-p479-46xg) (#25892, @tanghaoji)
- [评估/跟踪]拒绝第三方记分器有效负载中的出口引导 kwargs (GHSA-2wqp-q3c6-ccj5) (#25890, @tanghaoji)
- [网关] 处理 Gemini 网关适配器中的非 JSON 工具消息内容 (#25868, @rhamzatov)
- [跟踪] 在 `set_logged_model_tags` 中使用 `_bulk_upsert` for SQLite、PostgreSQL 和 MySQL (#25862, @rautaditya2606)
- [评估/跟踪] 将 Databricks 跟踪 URI 护栏添加到 mlflow.genai.review_queues (#25879, @kishor-rkrishnan)
- [模型注册表/提示] 拒绝 `_create_model_version` 中提示模型版本的无方案路径源（#25870，@tanghaoji）
- [跟踪/跟踪] 编辑 `mlflow-artifacts` 方案中的跟踪 URI 凭证错误 (GHSA-c8c4-r4p8-p4m4) (#25874, @tanghaoji)
- [网关] 修复 Gemini `thoughtSignature` 在 AI 网关适配器中的位置 (#25865, @aytero)
- [追踪/追踪] 清理来自 `mlflow.crewai.autolog` 的 CrewAI LLM 凭证（GHSA-j7qq-vr8c-xvw3）（#25845，@tanghaoji）
- [网关] 将 Vertex AI MaaS 原始代理请求发布到 `/endpoints/openapi` 基本 URL (#25834，@rhamzatov)
- [模型] 当 `MLFLOW_ALLOW_PICKLE_DESERIALIZATION` 禁用时验证 `pt2` 档案 (#25849, @tanghaoji)
- [网关] 添加 `vertex_anthropic_betas` 来控制 Vertex AI 上 Claude 的 `anthropic-beta` 转发（#25835，@rhamzatov）
- [网关/跟踪] 需要使用 `issues/invoke` 的网关密钥 (GHSA-2m86-c5q7-rxgr) (#25848, @tanghaoji)
- [网关] 将 `VertexAIProvider` 直通和代理路由转发到其 Claude/MaaS 代表（#25833，@rhamzatov）
- [文档/网关] 验证网关机密 `api_base` 以防止 SSRF (GHSA-h7x2-h6g9-p789) (#25761, @tanghaoji)
- [跟踪] 绑定 `_hard_delete_run` 内存并进行批量删除（#25773，@dyld-w）
- [追踪] 使用 `databricks://<profile>` 修复 Codex 身份验证（#25823，@B-Step62）
- [追踪] 查找 Codex 转录本时荣誉 `CODEX_HOME` (#25822, @B-Step62)
- [评估/网关/跟踪] 修复 REST 水合后的 `ScorerVersion` 实验 ID 类型（#25768，@CoralGarden52）
- [跟踪] 当 `create_experiment` 中跟踪位置链接失败时回滚实验（#25604，@adamgurary）
- [网关] 在基岩泰坦和 AI21 完井适配器中将 `top_p` 映射到 `topP` (#25795, @Yash-Chindam)
- [跟踪/UI] 修复分组跟踪会话的令牌总数（#25608，@adamgurary）
- [追踪] 修复 `strands.autolog` 在外国 OpenTelemetry 跨度上的崩溃（#25807，@Hasnaathussain）
- [模型/评分] 生成的服务 Docker 文件中绑定 apt 套接字超时（#25800，@copilot-swe-agent）
- [跟踪/UI] 修复会话跟踪抽屉中的自定义跟踪视图（#25779，@joshuawong-db）
- [跟踪] 当 `basic-auth` 未设置 `MLFLOW_FLASK_SERVER_SECRET_KEY` 时，`mlflow server` 会快速失败 (#25754, @tanghaoji)
- [网关] 停止在直通路由上转发 client 身份验证标头（#25129，@uuzzrm）
- [UI] 修复会话级记分器评估，默默地删除选定的会话（#24937，@demonze）
- [跟踪] 在 `remove_on_error` 中清理失败时保留原始异常（#25626，@NestDream）
- [跟踪] 默认为 Claude Code 启用异步跟踪日志记录（#25541，@mukeshbhandarkar）
- [评估/跟踪] 授权 `scorer/invoke` 并将跟踪绑定到调用者的实验 (GHSA-6c27-cp6h-c66m) (#25721, @kriscon-db)
- [Build] 使 `mlflow-skinny`/`mlflow-tracing` 构建失败，而不是运送空轮（#25713，@siddharthgaur1）
- [评估] 修复 NumPy 目标的 `evaluate` 列表输入标准化（#25623，@CoralGarden52）
- [跟踪] 在基本身份验证密码更新路径 (GHSA-v67f-7g57-fjhv) 上强制执行密码策略 (#25722，@kriscon-db)
- [网关] 在 `FallbackConfig.from_proto` 中保留未设置的 `max_attempts` (#25532, @VenishPaneliya)
- [UI] 修复 Windows 选择器循环上的 Assistant Bash 执行（#25687，@joshuawong-db）
- [UI] 修复 Windows 上的 MLflow Assistant CLI 提供程序，并使用 >1 个服务器工作人员（#24418，@joshuawong-db）
- [评分] 构建模型容器时拒绝不支持的 `env_manager` 值 (#25514, @alekseevpavel04)
- [模型注册表] 对于 UC 模型版本转换器中未设置的部署作业状态返回 None (#25690, @kriscon-db)
- [模型注册表] 修复 `ModelVersion.to_proto` 删除 `deployment_job_state` (#25635, @2sumtech)
- [服务器基础设施] 计算 GraphQL 查询成本限制中的片段选择（#25665，@kriscon-db）
- [服务器基础设施/跟踪] LogMetric/LogBatch 指标路由需要 model_id 权限（#25664，@kriscon-db）
- [跟踪/追踪] 避免在 get-trace-artifact 上重新序列化未修改的 LazySpan JSON。 （＃24569，@shivamAmrutia）
- [评估/网关] 在 `adapter_class` 中应用 Vertex Anthropic 请求字段，以便评判工作（#25556，@Yash-Chindam）
- [评估] 修复了子弹剥离会吃掉失败标签中的前导连字符的问题（#25588，@copilot-swe-agent）
- [评估/跟踪] 在 `rest_utils.http_request` 中发布 Databricks SDK 连接（#25561，@TimMsnBlueforte）
- [跟踪] 分离跨度时忽略跨异步上下文 `ValueError` (#22945, @SahilKumar75)
- [跟踪/UI] 将跨度链接 UI 添加到重新设计的跟踪资源管理器（#25573，@B-Step62）
- [构建/评分] 排除破坏服务器 `/health` 的 `anyio` 4.15.0 (#25559, @joshuawong-db)
- [提示/跟踪] `register_prompt` 中的日志目录资源管理器 URL (#24778, @adamgurary)

文档更新：

- [文档/跟踪] 将捆绑的 `mlflow/assistant/skills` 更新到最新的上游（#26455，@B-Step62）
- [文档] 将自定义跟踪视图页面添加到跟踪文档（#26356，@rrioh）
- [文档] 更新 skops 序列化的模型注册表教程（#26287，@copilot-swe-agent）
- [文档/评估/网关] 文档 TypeSafe 判断和 System One 网关使用（#26153，@joshuawong-db）
- [文档/跟踪/UI] 在文档和 OSS 入门中使用托管 MLflow 设置向导（#25949，@B-Step62）
- [文档] 文档缺少跨度类型 WORKFLOW、TASK、GUARDRAIL 和 EVALUATOR (#25736，@setsaa)
- [文档/模型注册表/提示]正确的 `register_prompt` 返回类型文档（#25650，@copilot-swe-agent）
- [Build] 轻推 Copilot 代码审查以验证何时便宜（#25586，@copilot-swe-agent）

小错误修复和文档更新：
＃26464，＃26458，@tanghaoji； ＃26457，＃26456，＃26419，＃26404，＃26403，＃26401，＃26398，＃26391，＃26389，＃26386，＃26385，＃26384，＃26383，＃26382，＃26381，＃26380， ＃26379，＃26372，＃26371，＃26357，＃26354，＃26353，＃26350，＃26349，＃26347，＃26345，＃26343，＃26344，＃26330，＃26329，＃26326，＃26325， ＃26324，＃26323，＃26322，＃26318，＃26304，＃26299，＃26296，＃26295，＃26294，＃26286，＃26285，＃26281，＃26280，＃26264，＃26255，＃26196， #26195、#26183、#26169、#26167、#26168、#26155、#26139、#26145、#26135、#26132、#26118、#26113、#26112、#26110、#26107、#26106、 #26098、#26094、#26065、#26044、#26038、#26035、#26030、#26028、#26023、#26020、#26018、#26014、#26013、#26010、#25998、#25996、 #25995、#25981、#25968、#25947、#25943、#25939、#25932、#25930、#25910、#25907、#25904、#25902、#25901、#25900、#25896、#25893、 #25894、#25876、#25875、#25871、#25866、#25864、#25850、#25846、#25836、#25828、#25819、#25815、#25816、#25814、#25813、#25812、 #25811, #25810, #25809, #25804, #25801, #25787, #25786, #25782, #25770, #25765, #25763, #25759, #25758, #25757, #25753, #25752, ＃25738，＃25737，＃25731，＃25729，＃25726，＃25724，＃25725，＃25723，＃25705，＃25691，＃25689，＃25688，＃25678，＃25677，＃25674，＃25673， #25671, #25669, #25668, #25667, #25661, #25658, #25657, #25656, #25655, #25654, #25652, #25651, #25645, #25642, #25633, #25631, #25628、#25625、#25624、#25620、#25622、#25621、#25619、#25617、#25616、#25614、#25611、#25605、#25603、#25602、#25596、#25594、 ＃25595，＃25591，＃25592，＃25590，＃25567，@copilot-swe-agent； ＃26427，＃26424，＃26242，＃26181，＃25952，＃25719，＃25803，@B-Step62； ＃26429，@aaronteo-db； ＃26292，＃26257，＃26246，＃25969，＃26120，＃26102，＃26063，＃25964，＃25584，＃25694，＃25582，＃25580，＃25565，@joshuawong-db； ＃26263，＃26068，＃25936，@dependabot； ＃26245，＃26244，@anishmehta24； ＃25979，@jonburdo； ＃26205，＃25993，＃25555，＃25550，＃25293，＃25285，＃26012，＃25686，＃25685，＃25684，＃25557，＃25566，@kriscon-db; ＃25923，@cyficowley； #24761，@Zuhef； ＃25200，@bardenr； ＃24680，＃25589，＃24877，@NeriCarcasci； ＃23128，＃22974，＃24760，＃24588，@kramaranya； ＃22568，＃22520，@mprahl； ＃26124，@HumairAK； #26081，@daanknoope； ＃25569，@IgorShishkin12； ＃24699，@Andrej730； ＃25999，@M-Iswarya2； ＃25960，@TomeHirata； #25903，@harupy； ＃24999，@kaikaila； ＃25134，@MarkHe1222； ＃25717，@acheamponge； ＃25583，@hpenedones； ＃25539，@gustaff-weldon； ＃25644，@adamgurary； #25636, @chenlichao

---

> 📦 仓库：[mlflow/mlflow](https://github.com/mlflow/mlflow) · 🏷️ 版本：`v3.17.0` · 📅 发布：2026-10-07 · [查看英文原版 Release](https://github.com/mlflow/mlflow/releases/tag/v3.17.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
