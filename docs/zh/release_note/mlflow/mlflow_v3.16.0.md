---
title: "mlflow v3.16.0"
project: "mlflow"
repo: "mlflow/mlflow"
tag: "v3.16.0"
version: "v3.16.0"
published: "2026-09-04"
type: "minor"
lang: "zh"
---

# mlflow v3.16.0

MLflow 3.16.0 包括几项主要功能和改进

### 主要新功能

- **🎨 自定义跟踪视图**：用简单的英语设计您自己的跟踪 UI — 描述您想要的视图，然后 **MLflow Assistant** 为您构建它，准确地布置您关心的字段，无需配置文件或自定义代码。保存、命名和重复使用每个实验的视图，以便您的整个团队在您的轨迹上共享相同的镜头。
- **🔭重新设计的跟踪体验（现在是默认值）**：跟踪浏览器已经从头开始重建，现在是默认值 - 更紧密的行密度、更清晰的导航和重新设计的跨树视图。 **重新排序列**，从任何跟踪标记或元数据字段添加**可配置的自定义列**，并通过**会话分组**查找内联多轮对话。
- **🔗 跨度链接**：跨度很少是独立的。 MLflow 3.16.0 添加了一流的**跨度链接**，因此跨度之间的关系（检索步骤、工具调用、下游跟踪）都可以被捕获和导航。在 SDK 中记录链接，跟踪浏览器会在专用的“链接”选项卡中显示它们，以直接跳转到目标范围。

重大变化：

- [服务器基础设施/跟踪] basic-auth：默认启用失败关闭授权（#25308，@PattaraS）
- [构建/模型] 删除 pyspark < 3.4.4 的交叉版本测试（#25098，@harupy）
- [网关/跟踪]修复：在 `--static-prefix` 下为 FastAPI 本地路由器提供服务（#24511，@SeiichiroYoshioka）

特点：

- [评估/追踪/追踪] 添加 GenAI 反模式的 mlflow 技能代理提示（#25496，@james-fletcher-db）
- [Tracing] 添加基于 shell 的 MLflow Tracing 设置向导（#25441，@B-Step62）
- [网关] 支持 AI 网关中的每用户预算策略（用户范围 + 主体）（#24371，@joelrobin18）
- [跟踪/UI] 将跟踪表列重新排序添加到 V4 跟踪选项卡（#25428，@joshuawong-db）
- [跟踪/UI] 将 `Expectation` 字段添加到跟踪表过滤器 UI (#25460, @creater29)
- [跟踪/UI] 将保存的视图添加到 MLflow 演示（#25392，@joshuawong-db）
- [跟踪/UI] 将可配置的自定义跟踪列（标签+元数据）添加到 Traces V4（#25427，@joshuawong-db）
- [Tracing / Tracking / UI] 刷新 Traces V4 表：行密度、标题和导航（#25354，@joshuawong-db）
- [跟踪/UI] 安装 Traces V4 作为默认跟踪体验 (#25424, @joshuawong-db)
- [跟踪/UI] 将重新设计的跟踪浏览器 (v2) 移植到 OSS (#25355, @joshuawong-db)
- [UI] 弃用实验会话选项卡，转而使用 Traces 会话分组（#25350，@joshuawong-db）
- [评估/追踪] feat(typescript)：添加 `logFeedback` 和键入的跟踪评估（#25169，@rajudandigam）
- [追踪] 将编码代理指向 `import mlflow` 上的 MLflow 追踪技能（#25247，@harupy）
- [评估/网关] 支持内置法官中的 UC 模型服务 (#25246, @TomeHirata)
- [跟踪/UI] 在 OSS 中启用 `shouldEnableModelTraceExplorerCustomTraceView` (#25245, @aaronteo-db)
- [跟踪] 作业：为 Redis 添加可配置的 Huey 存储 URL (#22653，@jeevan6996)
- [跟踪] [图表] 添加可选的外部 Secrets Operator 支持（#24523，@habibaikram1）
- [评估]用完整的记分器目录丰富`mlflow scorers list --builtin`（#25003，@joshuawong-db）
- [追踪/UI] feat(ui)：在自定义评委的工具提示中显示记分员描述（#22043，@adamgurary）
- [UI] 为运行参数添加图像网格切换（#23705，@jdoughty04）
- [追踪/跟踪/UI] [自定义视图] 强制每个实验保存的视图限制（#25064，@tanghaoji）
- [跟踪] [1/6] basic-auth：失败关闭授权网+覆盖保护（#25065，@PattaraS）
- [构建/评分] 将模型服务镜像提供给 Ubuntu 24.04 和 Python 3.11 (#25089, @harupy)
- [] 为 TypeScript SDK 添加 SpanLink 支持（#23480，@robinnarsinghranabhat）
- [文档/跟踪] [自定义视图] 将实验标签值限制增加到 20000 (#25062, @aaronteo-db)
- [追踪/追踪] feat(ts-sdk)：添加 `MLFLOW_TRACKING_AUTH=kubernetes`/`kubernetes-namespaced` 支持（#24243，@robinnarsinghranabhat）
- [追踪/UI] [自定义视图] 添加自定义视图删除 (#25057, @tanghaoji)
- [追踪/UI] [自定义视图] 通过结构化响应支持本地助手提供商（#25034，@tanghaoji）
- [跟踪/UI] [自定义视图] 将自定义视图构建提示直接提交给 Assistant (#25026, @aaronteo-db)
- [] 支持优化 `optimize_prompts` 中的聊天类型提示 (#23488, @gaurav0107)
- [文档/跟踪] 将 `--artifact-policy retarget` 添加到 `mlflow db move-resources` 以重新指向实验工件根（#24635，@gauthierpiarrette）
- [] [5 / N] 添加自定义视图选项卡 UI、保存/重命名和实验标签持久性（#24798，@aaronteo-db）
- [评估] 通过 `make_judge` 暴露 `generate_rationale_first` (#25002, @aaronteo-db)
- [跟踪/UI] [4/N] 在 Assistant 中为 `render_custom_view` 添加 client 工具暂停/恢复 (#24796, @aaronteo-db)
- [Tracing] 启用 OpenCode 跟踪插件以在 Span 中包含推理/思考内容 (#22997, @robinnarsinghranabhat)
- [UI] feat：在 GenAI 模式下启用父子运行视图（#24790，@pasainatan）
- [Tracing] 为 Claude Code 插件添加工作区支持 (#23773, @Gkrumbach07)
- [评估] 添加 Databricks 记分器版本控制支持（#24940，@nihalmenon）
- [跟踪] 添加对记录的模型工件的artifact_path 支持（#23147，@Sanskar121543）
- [跟踪/UI] [3/N] 添加自定义视图持久化模型和提示上下文构建器（#24794，@aaronteo-db）
- [跟踪/UI] [2/N] 添加数据源绑定和 A2UI 消息/模板验证器（#24792，@aaronteo-db）
- [网关] 在 Databricks AI Gateway 模型目录中添加 13 个新模型（#24893，@TomeHirata）
- [评估/跟踪/UI] 将助手分析操作添加到评估运行中（#24865，@joshuawong-db）
- [UI] [1/N] 更新了 A2UI 目录架构并为自定义跟踪视图添加了类型化原语（#24788，@aaronteo-db）

错误修复：

- [跟踪] 修复跟踪设置中仅主机 Databricks CLI 命令（#25529，@B-Step62）
- [模型注册表] [BUGFIX] 在部分 `update_webhook` 调用中保留空 webhook 字段（#25509，@CoralGarden52）
- [UI] 包裹跟踪工具栏，以便自定义日期控件不会溢出屏幕外（#25512，@joshuawong-db）
- [跟踪/UI] 修复 V4 跟踪抽屉审查操作 (#25510, @joshuawong-db)
- [跟踪/UI] 修复 Traces V4 中的自定义视图（#25488，@joshuawong-db）
- [评估/跟踪] 修复 `DatasetRecordSourceType.UNSPECIFIED` 数据集记录源的原始转换（#25230，@2sumtech）
- [跟踪/UI] 修复 Traces V4 “1 of 0” 页脚计数精确跟踪 ID 搜索（#25483，@joshuawong-db）
- [跟踪] 修复：防止刷新期间异步跟踪队列死锁（#25264，@mukeshbhandarkar）
- [评估] 在空 `EvaluationDataset` 上的 `to_dict`/`to_df` 之后修复 `merge_records` 中的 `IndexError` (#25498, @TomeHirata)
- [跟踪] 修复 WorkspaceAwareSqlAlchemyStore Experiment_id 过滤器中的整数/varchar 类型不匹配（#25232，@mayuriphad）
- [模型注册表] [BUGFIX] 在部分 `update_webhook` 调用中保留状态（#24842，@abligail）
- [跟踪] 修复 `search_logged_models` 引用值解析和无效运算符消息（#25398，@VenishPaneliya）
- [追踪] 在直播期间保持 `@mlflow/openai` 聊天完成跨度打开（#25416，@copilot-swe-agent）
- [Build] 修复 Helm 图表 ServiceMonitor 渲染空指标路径 (#25365, @aqeelat)
- [评分] 对于非 UTF-8 评分请求主体，返回 400 而不是 500 (#25173，@tushardev-365)
- [UI] 修复：使用 `MLFLOW_ENABLE_REMOTE_ASSISTANT=true` 在远程服务器上显示助手浮动按钮（#25394，@TomeHirata）
- [UI] 在跟踪导航链接中包含 `traceId` 查询参数（#25375，@NJAHNAVI2907）
- [模型] 修复 ONNX `(name, options)` 提供程序条目上的 pyfunc 加载崩溃问题（#25310，@rrioh）
- [跟踪] 修复：在 HdfsArtifactRepository 中使用分块 I/O 来防止 OOM (#21941，@OneSizeFitsQuorum)
- [构建/跟踪] 修复 Windows CI 故障：驱动器盘符路径和操作系统错误消息（#25382，@TomeHirata）
- [模型] 修复空响应代理输出流（#25388，@copilot-swe-agent）
- [提示]从 GEPA 反射数据集中删除冗余文本（#25387，@copilot-swe-agent）
- [评估] 修复数据集导出的过时期望和记录计数（#25265，@mprahl）
- [文档] 修复：更正 10 个 Databricks 托管模型的 max_output_tokens (#25360，@TomeHirata)
- [跟踪/UI] 在跟踪浏览器中标准化来自 OTLP 端点的跨度链接（#25319，@khaledsulayman）
- [Tracing] 从跟踪刷新路径中刷新 `SpanBatcher`，以便导出 UC 表跨度（#25260，@alekseevpavel04）
- [UI] 修复指标图表中的自动缩放布局状态（#25314，@PrithviBadiga）
- [UI] 在 `RunsChartsConfigureModal` 中切换图表类型时保留图表部分（#25283，@DaoDaoNoCode）
- [评分/跟踪]修复评分器experiment_id VARCHAR绑定在PostgreSQL + psycopg v3上（#25315，@rexminnis）
- [网关] 修复流式传输跳过回退的问题（#25268，@TomeHirata）
- [评估] 将 eval_retry_context 标志传播到记分器线程池中（#25318，@joshuawong-db）
- [] feat：为自动评估路径添加速率限制和重试支持（#24702，@rahul-oss-sap）
- [UI] 修复：确保图表运行顺序一致（#25019，@pasainatan）
- [追踪] 修复 Python SDK 中的基本身份验证覆盖 Kubernetes 身份验证 (#25131, @karimitanii)
- [跟踪] 忽略工件列表中的 S3 目录标记 (#23250, @Vinno97)
- [跟踪] [8/8] basic-auth：根据每个作业所有权控制本机 FastAPI 作业路由（#25102，@PattaraS）
- [网关/跟踪] [7/8] basic-auth：本地 FastAPI 路由的失败关闭强制执行（#25101，@PattaraS）
- [评估/跟踪] [6/6] basic-auth：gate presigned/invoke/demo/metric-twin；清空债务列表（#25071，@PattaraS）
- [网关] basic-auth：编辑来自非管理员的网关秘密配置密码信号（#25298，@PattaraS）
- [UI] 修复优化提示模式中过时的依赖项和示例（#25143，@PattaraS）
- [网关/跟踪] [5/6] basic-auth：网关网关guardrail/budget/config/discovery + 过滤器列表端点（#25070，@PattaraS）
- [追踪/追踪] 修复裸 Databricks 服务端点模型名称的 $0.00 成本面板（#24620，@adamgurary）
- [跟踪/追踪] 读取 `openai` 自动日志中的顶级 cache_read/creation 令牌计数（#24618，@adamgurary）
- [UI] [MLflow Assistant] 修复打开助手提供程序选择器时跟踪抽屉关闭的问题（#25255，@aaronteo-db）
- [] [安全] 未配置项目目录时拒绝助手读取工具文件访问（#24513，@LiteshGhute）
- [跟踪] 当动态令牌配置提供程序中不可用时跳过 `entry_point.getLogger()` (#25207, @serena-ruan)
- [UI] 修复 Gen AI 模式下评估运行的可见性控制错误（#25094，@pasainatan）
- [跟踪] [4/6] basic-auth：每个作业所有权的门控作业路径（#25069，@PattaraS）
- [追踪/追踪] 从异步事件循环中卸载 `log_spans()` (#25185, @HumairAK)
- [评估/跟踪/跟踪] 修复 `configure_autologging_for_evaluation` 中配置错误风味的后期绑定闭包（#25135，@Koustav-github）
- [评估/跟踪] [3/6] basic-auth：实验许可的门发布路径（#25067，@PattaraS）
- [模型] 在 pandas 3 下将模式日期时间解析为纳秒（#25119，@harupy）
- [模型] 先知<1.2.2 的记录要求中绑定的熊猫（#25118，@harupy）
- [评估/跟踪] [2/6] basic-auth：根据实验权限控制评估数据集路由（#25066，@PattaraS）
- [跟踪] [1/6] basic-auth：失败关闭授权网+覆盖保护（#25065，@PattaraS）
- [Tracing / UI] 在跟踪资源管理器中添加 markdown 渲染的跨度值的复制按钮（#24619，@adamgurary）
- [UI] 从运行概述数据集抽屉链接评估数据集（#25061，@PattaraS）
- [跟踪] 在 `OpenInferenceTranslator` 中映射 OpenInference 提示缓存令牌计数（#25039，@felix-xsenda）
- [跟踪] 防止对象存储工件删除删除同级路径（#25024，@yangbaechu）
- [文档/跟踪] 在 @mlflow.trace 装饰器中尊重显式 set_outputs() (#24624，@adamgurary)
- [跟踪] [跟踪] 修复系统指标恢复步骤而没有指标历史记录伙伴…（#23401，@iis-MarkKuang）
- []修复（网关）：处理openai_兼容流中缺少的finish_reason（＃24111，@lavkeshdwivedi）
- [跟踪] 修复：阻止 `SearchUtils._get_value` 默默删除数据集 IN 子句值（#25045，@kaikaila）
- [跟踪] 表面跟踪导出身份验证在错误时失败，而不是默默地删除跟踪（#24847，@adamgurary）
- [模型] 修复 PyFunc 工件路径冲突 (#24681, @yangbaechu)
- [构建] 将 Docker 基础镜像从 `python:3.10-slim-bullseye` 映射到 `python:3.11-slim-trixie` (#24961, @mille-printemps)
- [模型] 修复加载和保存路径上剩余的 `torch_dtype` 弃用警告（#25017，@rrioh）
- [跟踪] 按批量大小在 `SqlAlchemyStore` 中绑定 `log_batch` 重复度量恢复 (#24683, @jayceguo)
- [] 修复自动记录中的 `pydantic-ai-slim` 版本检测 (#24959, @jiahao6635)
- [网关] 修复（网关）：保留提供程序使用附加功能（#25010，@uuzzrm）
- [跟踪] 修复（langchain）：将辅助自动日志异常处理程序提升至 `logger.warning`（#22040，@adamgurary）
- [UI] 修复（ui）：在 `CompareRunPage` 中批量运行获取以避免每次运行一个请求（#24894，@daniellok-db）
- [跟踪/跟踪] perf(tracing)：索引跟踪档案候选排序（#24976，@medisean）
- [网关] 在 OpenAI 兼容网关中保留提供程序使用附加功能 (#25000, @uuzzrm)
- [模型] 修复 pyfunc 工件路径中的 Windows 分隔符（#24432，@evanwrm）
- [跟踪] 修复并发 log_batchlatest_metrics 写入中的跨批次死锁（#24941，@Michael97-li）
- [跟踪] 避免在 `_configure_mlflow_loggers` 中重新启用外部禁用的记录器（#24957，@aaronteo-db）
- [评估] 强制执行严格的 JSON 模式时保留模式映射（#24193，@sairavuri-sudo）
- [Tracing] 通过在快照之前刷新来修复不稳定的 `test_search_traces_yields_expected_dataframe_contents` (#24996, @harupy)
- [网关] 在 AI 网关上处理 zstd 压缩的请求主体（#24784，@midhunsomu）
- [追踪/跟踪] `mlflow.pydantic_ai.autolog` 中的 Surface Anthropic 提示缓存令牌计数（#23052，@JasonPan）
- [跟踪] 使用带有普通 ID 的 `get_trace` 时，解析活动实验中的 UC 路径（#24700，@aishdbx）
- [跟踪] 验证 link_prompts_to_trace 中是否存在跟踪（修复 #24067）（#24303，@zibranxo）
- [UI]隐藏图表卡中多余的指标名称（#23212，@xianjianlf2）
- [网关] 修复并行工具结果的基岩网关分组（#24309，@shivamAmrutia）
- [追踪/跟踪]修复：使用 openai 聊天的响应模型名称（#22325，@hansen-young）
- [网关] 拒绝网关模型配置中未指定的 `linkage_type`，而不是返回 500 (#24664，@KunalBharadwaj)
- [文档/评估/跟踪] 修复：添加跟踪完成缓冲区以防止在线评估器跳过长时间运行的跟踪（#22006，@amitmodi）
- [模型] 修复变压器模型负载上的 `torch_dtype` 弃用警告（#24929，@serena-ruan）
- [Tracing] 修复请求后处理程序注册的基本身份验证（#24322，@sun-andsky）
- [网关] 支持网关提供商中的 Vertex AI `eu`/`us` 多区域端点（#24932，@aaronteo-db）
- [UI] 允许有效的 Kubernetes 工作区名称带有连续的连字符 (#24229, @divya0709)
- [模型/跟踪] 修复因过时缓存的 `ActiveRun` 输出而破坏的模型-指标-数据集关联（#21855，@daniellok-db）
- [跟踪] 捕获基岩提示缓存令牌字段并标准化输入令牌以包含它们（#24899，@gauthierpiarrette）
- [跟踪] 在 Databricks 中预导入 `databricks.sdk` 以避免遥测死锁 (#24841, @aaronteo-db)
- [Tracing] 在 haystack 自动记录中支持 haystack 3.x (#24744, @harupy)
- [跟踪] 在 Databricks 模型服务中尊重 UC 支持的跟踪存储（#24806，@james-fletcher-db）
- [跟踪] 当未安装风味模块时，不要对 `is_flavor_supported_for_associated_package_versions` 进行硬故障（#24846，@adamgurary）
- [UI] 修复（ui）：通过 `RunsChartsDraggableCardsGridSection` 中的虚拟化修复图表视图无响应（#24012）（#24424，@Alwaysgaurav1）
- [] 修复 `claude_code` 提供程序超出 Windows `cmd.exe` 命令行限制（#24440，@joshuawong-db）
- [UI] 修复 RestoreRunModal 以显示实际错误而不是硬编码消息（#24731，@mihir2921）
- [UI]修复DeleteRunModal以显示实际错误而不是硬编码消息（＃24730，@mihir2921）
- [UI] [UI] 当用户角色操作权限被拒绝时显示错误通知（#24722，@mihir2921）
- [构建/模型] 添加对 pandas 3.x 的支持（#23719，@twanahc）
- [模型注册表] 将模型版本字符串修复为注册表存储中的 int 类型转换 (#24565, @qubeena07)

文档更新：

- [文档] 修复 `docker/README.md` 中的环境变量扩展（#25474，@CoralGarden52）
- [构建] 使用 `Chart.appVersion` 作为 Helm 示例图像 (#25458, @CoralGarden52)
- [文档/跟踪] 文档：将 TypeScript 示例添加到 Kubernetes 身份验证页面（#25083，@robinnarsinghranabhat）
- [文档] 澄清 `detect-issues.mdx` 中的跟踪数据范围（#25386，@copilot-swe-agent）
- [文档] 将 Red Hat OpenShift AI 添加到托管选项（#25151、@B-Step62）
- [文档/跟踪] 在 @mlflow.trace 装饰器中尊重显式 set_outputs() (#24624，@adamgurary)
- [文档/跟踪] 文档：阐明 Databricks 配置文件、LangGraph 自动日志、runs-vs-traces、span 属性（#24954，@adamgurary）
- [文档/跟踪] 文档：警告 delete_traces() 不支持 Databricks Unity Catalog 跟踪（#24647，@adamgurary）
- [文档/网关] Clarify LiteLLM 是 AI Gateway 文档中的可选扩展（#24787，@TomeHirata）

小错误修复和文档更新：

＃25558，＃25553，＃25392，＃25421，＃25407，＃24828，＃25295，＃25249，＃25055，＃24827，@joshuawong-db； ＃25547，＃25127，＃24884，＃25501，＃24714，＃24913，＃24879，@B-Step62； ＃25544，＃25542，＃25540，＃25538，＃25537，＃25534，＃25531，＃25530，＃25506，＃25466，＃25436，＃25408，＃25405，＃25390，＃25320，＃25256， ＃25023，＃25014，＃24993，＃24992，＃24988，＃24986，＃24955，＃24872，＃24855，＃24856，@copilot-swe-agent； ＃25545，＃25502，＃25486，＃25485，＃25482，＃25481，＃25478，＃25475，＃25468，＃25467，＃25464，＃25462，＃25461，＃25465，＃25457，＃25456， ＃25452，＃25450，＃25447，＃25446，＃25443，＃25437，＃25430，＃25432，＃25423，＃25429，＃25409，＃25420，＃25417，＃25419，＃25401，＃25404， ＃25402，＃25396，＃25393，＃25368，＃25358，＃25346，＃25344，＃25343，＃25342，＃25341，＃25339，＃25338，＃25337，＃25335，＃25334，＃25325， ＃25316，＃25312，＃25277，＃25276，＃25252，＃25165，＃25163，＃25162，＃25161，＃25160，＃25159，＃25158，＃25156，＃25154，＃25153，＃25152， #25144、#25142、#25124、#25122、#25117、#25109、#25110、#25106、#25103、#25100、#25099、#25096、#25090、#25092、#25091、#25088、 #25048、#25047、#25042、#25041、#25037、#25030、#25032、#25031、#25029、#25022、#24996、#24991、#24990、#24987、#24982、#24980、 #24977, #24978, #24975, #24974, #24973, #24972, #24971, #24970, #24968, #24966, #24965, #24910, #24908, #24922, #24911, #24909, ＃24901，＃24866，＃24874，＃24853，＃24840，＃24839，＃24834，＃24791，＃24751，＃24770，@harupy; ＃25533，＃25528，＃25305，＃25304，＃25302，＃25296，＃25222，@kriscon-db； ＃25412，＃25309，@IgorShishkin12； ＃25520，＃25519，＃25015，＃24945，＃24943，＃24944，＃24902，＃24904，＃24905，＃24903，@dependabot; ＃25081，＃24880，＃24802，@mprahl; ＃25505，＃25500，＃25480，＃25379，＃25360，＃25351，＃24754，@TomeHirata； ＃25477，＃25459，@CoralGarden52； #25180，@miyakido； ＃25369，@d0w； ＃25400，@ArrayPD； ＃25391，＃25329，＃25104，@tanghaoji； ＃25374，@brandonhawi； ＃24276，＃24222，@khaledsulayman； #25272，@kaikaila； ＃25300，＃25097，＃25046，＃24838，@PattaraS； ＃24998，@juliafmorgado； ＃25251，＃25212，＃25211，＃25186，＃25060，＃25059，＃25028，＃25025，@aaronteo-db； ＃25202，@aravgarg28； ＃22653，@jeevan6996； ＃25164，@jaceklaskowski； ＃24925，@darkdi； #25040，@rrioh； #24914，@smoorjani； ＃24892，@codechrl； ＃24927，@serena-ruan； ＃24323，＃24678，@NeriCarcasci； #24516，@gauthierpiarrette； ＃24732，@mihir2921； #24779, @daniellok-db

---

> 📦 仓库：[mlflow/mlflow](https://github.com/mlflow/mlflow) · 🏷️ 版本：`v3.16.0` · 📅 发布：2026-09-04 · [查看英文原版 Release](https://github.com/mlflow/mlflow/releases/tag/v3.16.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
