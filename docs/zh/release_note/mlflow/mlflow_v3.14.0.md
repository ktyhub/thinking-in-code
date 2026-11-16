---
title: "mlflow v3.14.0"
project: "mlflow"
repo: "mlflow/mlflow"
tag: "v3.14.0"
version: "v3.14.0"
published: "2026-06-17"
type: "minor"
lang: "zh"
---

# mlflow v3.14.0

MLflow 3.14.0 包括几项主要功能和改进

### 主要新功能

- **🚀 [使用 `mlflow agent setup` 的单命令代理入门](https://mlflow.org/docs/latest/genai/tracing/quickstart/)**：安装 MLflow、设置跟踪并向您最喜欢的编码代理（Claude Code、OpenAI Codex 或 OpenCode）提供 MLflow 技能来检测您的应用程序，所有这些都通过单个命令完成。
- **⚡ [Claude Code 的持久、低延迟跟踪](https://mlflow.org/docs/latest/genai/tracing/integrations/listing/claude_code)**：充满信心地在整个团队中推出 Claude Code 跟踪：预写日志可防止代理减慢、压垮跟踪服务器或在网络故障或崩溃时丢失跟踪。
- **📝 [审查跟踪队列](https://mlflow.org/docs/latest/genai/assessments/review-queues)**：将跟踪分配给审阅者（或代理）并在 UI 中收集结构化反馈和真实注释，直接写回到跟踪上，以便它们立即可用于评估。
- **🗂️ [改进的评估数据集 UI](https://mlflow.org/docs/latest/genai/datasets/)**：直接在 UI 中浏览、检查、编辑和批量管理评估数据集记录，并通过 click 直达源跟踪。
- **🧪 [用于回归测试的 Pytest 集成](https://mlflow.org/docs/latest/genai/eval-monitor/regression-testing)**：使用 `@mlflow.test` 标记将 GenAI 回归测试编写为普通 pytest 函数，在 CI 中对它们进行门控，并在 UI 中查看测试历史记录和每个断言判断结果。
- **🎛️ [LLM Playground](https://mlflow.org/docs/latest/genai/prompt-registry/playground)**：使用设置、工具、结构化输出和模板变量，针对您的 AI 网关端点和提示注册表版本迭代浏览器中的提示。

### 重大变化

- [模型] 将 `mlflow.sklearn` `serialization_format` 默认值从 `cloudpickle` 更改为 `skops` (#23987，@copilot-swe-agent)
- [模型] 将 `mlflow.pytorch.log_model` 和 `mlflow.pytorch.save_model` 的 `serialization_format` 默认值更改为 `"pt2"` (#23988，@copilot-swe-agent)
- [模型] 将 `mlflow.lightgbm` `log_model`/`save_model` 中的 `serialization_format` 默认值更改为 `"skops"` (#23986, @copilot-swe-agent)

### 其他各种功能和改进：

- [评估/UI] [3/3] 在现有的 eval-run UI 中显示回归测试结果（#23985，@B-Step62）
- [提示/UI] 将“将提示保存到注册表”操作添加到提示游乐场（#24021，@B-Step62）
- [提示] 提示游乐场 (#23273, @TomeHirata)
- [评估] [2/3] 为 `@mlflow.test` 断言添加 `EvaluationResult.passed`/`.reason` (#23869, @B-Step62)
- [UI] 查看队列：在删除问题确认中列出受影响的队列（#24002，@kriscon-db）
- [UI] 添加带有 `startReview` 深层链接的可共享审阅队列 URL（#23941，@harupy）
- [UI] 允许在焦点模式下编辑已完成的评论（#23967，@kriscon-db）
- [跟踪] 为 OTLP 跟踪摄取添加 `x-mlflow-run-id` 支持（#23664，@sanatb187）
- [评估/跟踪] [1/3] 添加@mlflow.test pytest 标记和断言框架（#23864，@B-Step62）
- [UI] 使用入门内容改进审核队列空状态（#23903，@B-Step62）
- [UI] 添加 `mlflow skills view/list` CLI (#23907, @joshuawong-db)
- [UI] 改进审阅队列列表：平面布局、可排序列、状态过滤器（#23902、@B-Step62）
- [Tracing] 添加 `MLFLOW_WORKSPACE` 支持 OSS 身份验证提供程序 (#23927, @Nehanth)
- [Gateway] 将缓存的代币定价添加到 Databricks 模型目录中（#23901，@TomeHirata）
- [评估] 添加 `MLFLOW_GENAI_JUDGE_DEFAULT_MODEL` 环境变量 (#23860, @B-Step62)
- [评估] 将评估运行页面中“运行评估”中的“运行法官”提交发送至 POST /mlflow/genai/evaluate/invoke (#23781, @aaronteo-db)
- [评估] 添加基于规则的内置记分器：`RegexMatch`、`PIIDetection`、`ResponseLength` (#22571，@debu-sinha)
- [Tracing] 支持 `mlflow agent setup` 中的 Databricks 后端 (#23783, @harupy)
- [评估] 为 UI 触发的评估运行添加 POST /mlflow/genai/evaluate/invoke 处理程序和作业（#23779，@aaronteo-db）
- [Tracing] [Claude Code] 支持通过 `MLFLOW_TRACE_LOCATION` 进行 UC 跟踪定位 (#23770, @B-Step62)
- [Tracing] [Codex] 支持通过 `MLFLOW_TRACE_LOCATION` 进行 UC 跟踪定位（#23771，@B-Step62）
- [评估/跟踪] [3/N] 标签模式：处理程序 + SDK + REST client (#23603，@kriscon-db)
- [追踪/追踪] 添加 `run_id` 对追踪 APIs 的支持 (#23629, @sanatb187)
- [评估/UI] 数据集 v2 端口（#23560，@B-Step62）
- [评估/跟踪] 添加 OSS 原生标签模式实体、验证和 SQL 存储（#23597，@kriscon-db）
- [Tracing] 支持将 gen_ai.conversation.id 映射到 MLflow 跟踪会话（#23584，@SahilKumar75）
- [跟踪/UI] 添加了轮询逻辑以实时检查和自动刷新跟踪选项卡空状态，并跟踪首次摄取（#23184，@vivian-xie-db）
- [Tracing] 添加 MlflowWalSpanExporter 将跟踪传递给 WAL 守护进程 (#23641, @aaronteo-db)
- [跟踪] 支持从 TypeScript SDK 进行本机 UC 跟踪摄取（#23562，@B-Step62）
- [评估] 添加 Google ADK LLM 评判评分员（`Hallucination`、`Safety`、`ResponseEvaluation`）（#22496，@debu-sinha）
- [网关] 添加 OpenAI `/responses/compact` 直通路由到 AI 网关 (#23353, @id-jazzx)
- [Gateway] 在 Databricks 模型目录中添加 21 个新模型（#23520，@TomeHirata）

错误修复：

- [评估] 修复由于类名不匹配而导致的 `ChrfScore` RAGAS 记分器实例化（#24047，@B-Step62）
- [追踪/跟踪] 将 OpenAI Agents SDK 护栏跨越到 `SpanType.GUARDRAIL` (#24044，@B-Step62)
- [UI] 表面评论问题模式失败作为祝酒 (#24035, @kriscon-db)
- [跟踪] 防止审查队列隐藏用户名（#24034，@kriscon-db）
- [跟踪] 使审核队列名称唯一且不区分大小写（在创建表时定义）（#24015，@kriscon-db）
- [跟踪/用户界面] 在跟踪存在检查之前标准化审查队列添加项目 ID（#24029，@kriscon-db）
- [UI] 活动工作区的范围审查队列权限 UX 门（#24031，@kriscon-db）
- [UI] 表面审查队列跟踪删除失败并保持选择错误（#24027，@kriscon-db）
- [UI] 审查队列选择器中的表面可分配用户加载错误（#24020，@kriscon-db）
- [UI] 按时间戳预填最新评估的审核答案（#24026，@kriscon-db）
- [UI] Surface 审查队列自分配失败并出现错误 toast (#24018，@harupy)
- [评估/跟踪] 修复 genai.evaluate() 删除数据集期望和带有 Scorers=[] 的标签（#23957，@Incheonkirin）
- [UI] 保存审阅队列设置时至少需要一个问题（#24007，@harupy）
- [UI] 仅当问题实际发生变化时才发送审核队列 schema_ids (#24017, @kriscon-db)
- [UI] 当先前回答的问题被清除时阻止保存评论（#24008，@kriscon-db）
- [UI] 不区分大小写地比较审阅队列选择器用户名（#24014，@kriscon-db）
- [跟踪] 将审核队列完成的_by 绑定到经过身份验证的调用者 (#24006, @kriscon-db)
- [UI] 修复审查队列全跟踪浏览器中的非功能性 JSON/Table 切换（#24005，@kriscon-db）
- [UI] 表面审查队列删除失败而不是吞掉它们（＃24004，@harupy）
- [跟踪] 修复当 MLflow 服务器使用本地 FS 工件根而不使用 mlflow-artifacts:// uri 模式时 TS SDK 跟踪存储（#23992，@aaronteo-db）
- [UI] 在审阅队列“添加日期”列中显示分钟保真度（#23993，@kriscon-db）
- [UI] 审核队列：在问题预览中显示可选的理由框（#23995，@kriscon-db）
- [Tracing] 在 Anthropic 自动记录中设置模型提供者，以便计算 LLM 成本（#23972，@B-Step62）
- [评估] 添加缺失的 `ContextUtilization` RAGAS 记分器类 (#23956, @B-Step62)
- [UI] 添加/删除审阅队列项目后刷新每个跟踪队列成员身份（#23940，@kriscon-db）
- [网关] 修复 Gemini 和 Anthropic 网关提供商的 JSON 响应格式 (#23932, @tanghaoji)
- [跟踪] 修复当省略 `max_results` 时 `metrics/get-history` 返回空结果（#23917，@Vedant-Agarwal）
- [UI] 在“审阅”选项卡加载时自动选择默认用户队列（#23904，@B-Step62）
- [UI] 在完成重点审查之前至少需要一个答案（#23923，@kriscon-db）
- [跟踪/跟踪] 删除跟踪时清理审阅队列项目和评估错误（#23913，@harupy）
- [评估/跟踪] 支持常见的 RETRIEVER 块内容字段 (#23867, @sanatb187)
- [跟踪/追踪] 在 OTLP 跟踪摄取期间保留 OTel 资源属性（#23829，@TomeHirata）
- [Gateway] 修复 AI Gateway SSE 大帧读取限制 (#23880, @yashjiv15-jazzx)
- [评估] OpenAI 提供者配置中的 Honor `OPENAI_BASE_URL` env var (#23862, @B-Step62)
- [Build] @mlflow/XXXX 包根指向缺失的 dist/index.js (#23874, @WeichenXu123)
- [构建] 为完整的 docker 图像添加额外的身份验证（#23892，@WeichenXu123）
- [工件] 对于缺少的 Azure blob 工件返回 404 (#23832, @feynmanliang)
- [跟踪] 修复 `_stop_listen_for_spark_activity` 在 CLOSE_WAIT 套接字上无限期挂起的问题 (#23839, @kishor-rkrishnan)
- [UI] 在 `.agents/skills` 安装 Codex/OpenCode 技能（#23847，@harupy）
- [追踪/追踪] 修复 `ChatCompletions` 子类的 `mlflow.openai.autolog` 跨度类型解析（#23759，@harupy）
- [跟踪] 在新数据库上修复 `mlflow db upgrade` (#23752, @harupy)
- [跟踪] 公开实验响应的工作区（#23593，@joshuawong-db）
- [UI] 处理不安全 HTTP 上下文中缺失的 clipboard API (#23598) (#23601, @srinjoy356)
- [构建/UI] 修复 PDF 工件查看器 `import.meta` 语法错误 (#23731, @harupy)
- [跟踪] 修复 `_parse_extra_conf` 为包含 `=` 的 HDFS 配置值（#23730，@copilot-swe-agent）
- [提示/UI] 在提示详细信息页面上隐藏实验烤肉串（#23661，@harupy）
- [跟踪] 强制分块请求的上传工件大小（#23712，@dfgvaetyj3456356-hash）
- [项目] 拒绝项目 zip 提取中的路径遍历（#23713，@dfgvaetyj3456356-hash）
- [跟踪] 在 FastAPI 身份验证检查中首选路由 ASGI 路径。 （＃23685，@HumairAK）
- [追踪/追踪] 在crewai 1.14.5上恢复`mlflow.crewai`自动记录（#23682，@harupy）
- [跟踪] 在摄取时解开 JSON 编码的 `session.id` / `user.id` 范围属性（#23642，@SahilKumar75）
- [评估/跟踪/UI] 在检测问题流程中转发 OpenAI 自定义基本 URL (#23650，@harupy)
- [跟踪] 添加 `SqlTraceInfo` 到 `SqlExperiment` 的 ON DELETE CASCADE 关系（#23194，@Mytolo）
- [跟踪] 扩展 `mlflow.sourceRun` 指标过滤器以覆盖事后链接的 OTLP 跟踪（#23591，@RudraDudhat2509）
- [追踪] UI 不显示法官成本 (#23586, @WeichenXu123)
- [跟踪] [安全] 为 /ajax-api/3.0/mlflow/get-trace-artifact 注册身份验证验证器（#23317，@B-Step62）
- [Tracing] 修复 pydantic-ai >= 1.78.0 ToolManager 模块重命名 (#23508) (#23528, @kishor-rkrishnan)
- [UI] 添加 `.jsonl` 工件预览（#23532，@bvolpato）
- [跟踪] 配置通配符源时禁用凭证 CORS (#23178，@B-Step62)
- [评估] 修复基于事件的跟踪评分本身的判断回退（#23445，@james-fletcher-db）

文档更新：

- [文档/评估] 添加 `@mlflow.test` pytest 回归测试的文档页面（#24011，@B-Step62）
- [文档] 修复 `make_judge` 文档：自引用弃用注释和链接拼写错误（#24046，@B-Step62）
- [文档] 添加审查队列和标签模式的文档（#23975，@kriscon-db）
- [文档] 文档中的 Surface mlflow 代理设置（#23859，@joshuawong-db）
- [文档] 迁移指南中的文档 MLFLOW_STATIC_PREFIX 行为更改（#23851，@Sanket2329）
- [文档] 在快速入门步骤 4 中添加 Colab 警告（#23831，@Farzah11）
- [文档]修复跟踪文档中未定义的generate_response（＃23814，@llljjjwww333）
- [文档/跟踪] 在文档中使用 CLI 进行 Claude Code 插件安装（#23679，@harupy）
- [文档/模型] 弃用 `validate_serving_input`，转而使用 `mlflow.models.predict` (#23376，@B-Step62)
- [文档] 修复跟踪文档中 best_run.info 的错误输出注释（#23571，@Aksh123100）

小错误修复和文档更新：

＃24045，＃24042，＃24024，＃24023，＃23969，＃23970，＃23961，＃23964，＃23963，＃23866，＃23729，＃23670，＃23310，＃23294，@B-Step62; ＃24022，＃24019，＃23937，＃23758，＃23737，＃23735，＃23605，＃23579，＃23545，＃23511，＃23526，@aaronteo-db; ＃24025，＃24003，＃23996，＃23915，＃23912，＃23882，@kevin-lyn； #23910、#23994、#23990、#23974、#23984、#23934、#23935、#23946、#23938、#23931、#23925、#23921、#23924、#23846、#23926、#23844、 #23886, #23887, #23885, #23884, #23878, #23879, #23876, #23875, #23807, #23804, #23801, #23799, #23795, #23604, #23599, #23613, @kriscon-db； ＃23997，＃23834，＃23853，＃23823，＃23780，＃23630，＃23614，@joshuawong-db； #23947, #23920, #23858, #23848, #23845, #23841, #23840, #23838, #23837, #23803, #23827, #23826, #23824, #23806, #23802, #23798, ＃23796，＃23788，＃23595，＃23776，＃23764，＃23745，＃23743，＃23742，＃23740，＃23739，＃23718，＃23711，＃23710，＃23708，＃23700，＃23699， #23697, #23684, #23677, #23672, #23671, #23669, #23668, #23667, #23666, #23663, #23653, #23644, #23643, #23639, #23640, #23638, ＃23636，＃23632，＃23631，＃23626，＃23625，＃23618，＃23606，＃23596，＃23588，＃23585，＃23582，＃23581，＃23580，＃23576，＃23573，＃23567， ＃23566，＃23565，＃23563，＃23558，＃23553，＃23552，＃23523，＃23506，＃23498，@harupy; ＃23893，@debu-sinha； #23722，@kishor-rkrishnan； ＃23833，＃23741，＃23732，＃23727，@TomeHirata； #23769，@mprahl； #23589，@charlesverge； ＃23690，@pvelayudhan； #23658，@copilot-swe-agent； ＃23540，@jamesbraza

---

> 📦 仓库：[mlflow/mlflow](https://github.com/mlflow/mlflow) · 🏷️ 版本：`v3.14.0` · 📅 发布：2026-06-17 · [查看英文原版 Release](https://github.com/mlflow/mlflow/releases/tag/v3.14.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
