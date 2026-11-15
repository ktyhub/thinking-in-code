---
title: "ragflow v0.26.0"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.26.0"
version: "v0.26.0"
published: "2026-06-11"
type: "minor"
lang: "zh"
---

# ragflow v0.26.0

## 总结

### 新功能

- **模型提供商**
  - 为多个提供商实现自动填充模型列表，无需手动输入模型名称。该功能目前支持：Ollama、OpenRouter、vLLM、OpenAI-API-Compatible、LM-Studio、VolcEngine、Xinference、LocalAI、BaiduYiyan、GPUStack 和 Fish Audio。
  - 允许为同一型号提供商配置多个 API 密钥。 [#14595](https://github.com/infiniflow/ragflow/pull/14595)
  - 通过直接从远程模型提供者获取当前可用的模型，动态填充 UI 中的模型选择下拉列表。 [#15711](https://github.com/infiniflow/ragflow/pull/15711)
- **数据源连接器**：为 Outlook、OneDrive、Microsoft Teams、Slack、SharePoint、Salesforce 和 Azure Blob Storage 实现新的数据源连接器。 [#15333](https://github.com/infiniflow/ragflow/pull/15333)[#15330](https://github.com/infiniflow/ragflow/pull/15330)[#15332](https://github.com/infiniflow/ragflow/pull/15332)[#15188](https://github.com/infiniflow/ragflow/pull/15188)[#15190](https://github.com/infiniflow/ragflow/pull/15190)[#15462](https://github.com/infiniflow/ragflow/pull/15462)[#15466](https://github.com/infiniflow/ragflow/pull/15466)
- **数据集** - 实现社区提取和实体解析的检查点和恢复功能，这是 GraphRAG 索引管道中最昂贵和最耗时的部分。 [#15518](https://github.com/infiniflow/ragflow/issues/15518)[#15523](https://github.com/infiniflow/ragflow/pull/15523)

### 改进

- 删除 `<think>` 文本缓冲，以确保具有推理能力的模型在交互过程中感觉更快、更透明。 [#15891](https://github.com/infiniflow/ragflow/pull/15891)
- 将 MySQL 迁移标记为已应用。 [#15504](https://github.com/infiniflow/ragflow/pull/15504)

### 模型支持

- 四个新的 SiliconFlow 模型 [#15383](https://github.com/infiniflow/ragflow/pull/15383)
- MiniMax-M3 型号 [#15513](https://github.com/infiniflow/ragflow/pull/15513)
- 最新的 Anthropic 模型 [#15516](https://github.com/infiniflow/ragflow/pull/15516)
- Voyage 4 模型系列 [#15516](https://github.com/infiniflow/ragflow/pull/15516)
- 一致的型号列表。 [#15576](https://github.com/infiniflow/ragflow/pull/15576)

### 国际化

- 完成韩语翻译。 [#15863](https://github.com/infiniflow/ragflow/pull/15863)
- 完成意大利语翻译。 [#15729](https://github.com/infiniflow/ragflow/pull/15729)

### 错误修复

- MiniMax模型的思维模式没有正确启用。 [#15496](https://github.com/infiniflow/ragflow/pull/15496)
- Qwen3.5、Qwen3.6机型开启思维模式时触发无限循环。 [#15101](https://github.com/infiniflow/ragflow/pull/15101)
- 使用 OpenAI 兼容的聊天完成 API 端点时，流式答案会重复。 [#15286](https://github.com/infiniflow/ragflow/issues/15286)[#15443](https://github.com/infiniflow/ragflow/pull/15443)
- 当 `NaN`（非数字）或 `Inf`（无穷大）等无效数字分数传递到 JSON 编码器时，聊天完成期间会导致序列化错误。 [#15245](https://github.com/infiniflow/ragflow/issues/15245)[#15266](https://github.com/infiniflow/ragflow/pull/15266)
- 使用 LiteLLM 提供程序的聊天完成失败，因为无法识别的内部配置参数在到达外部 API 之前未被过滤掉。 [#15427](https://github.com/infiniflow/ragflow/issues/15427)[#15432](https://github.com/infiniflow/ragflow/pull/15432)
- OpenAI 兼容的聊天完成 API 默认为流式响应。 [#15356](https://github.com/infiniflow/ragflow/issues/15356)[#15394](https://github.com/infiniflow/ragflow/pull/15394)
- 在元数据过滤期间，空的 `AND` 结果被错误地删除。 [#15477](https://github.com/infiniflow/ragflow/pull/15477)
- MinerU 解析器错误地将重复的页面镶边（例如页眉和页脚）提取为主要文本。 [#15335](https://github.com/infiniflow/ragflow/issues/15335)[#15387](https://github.com/infiniflow/ragflow/pull/15387)
- DeepDoc 模块中的文档提取期间缺少英文图表标题。 [#15481](https://github.com/infiniflow/ragflow/pull/15481)
- `json` 和 `chunks` 上游格式的 TitleChunker 返回空输出 [#14247](https://github.com/infiniflow/ragflow/pull/14247)[#15396](https://github.com/infiniflow/ragflow/pull/15396)
- .tsv 文件上传尝试失败时缺少错误消息。 [#15284](https://github.com/infiniflow/ragflow/pull/15284)
- API 令牌缺少 beta 值导致令牌检索错误。 [#15405](https://github.com/infiniflow/ragflow/pull/15405)
- 限制最大页面大小以修复因大型查询而导致的系统崩溃或速度减慢。 [#15292](https://github.com/infiniflow/ragflow/pull/15292)
- Client 错误是由 OpenAI 兼容的聊天完成 API 错误地默认为流式响应引起的。 [#15356](https://github.com/infiniflow/ragflow/issues/15356)[#15394](https://github.com/infiniflow/ragflow/pull/15394)
- 当用户尝试从存储后端下载丢失的文件时，会触发 HTTP 500 内部服务器错误，而不是标准 4xx client 错误。 [#15369](https://github.com/infiniflow/ragflow/issues/15369)[#15371](https://github.com/infiniflow/ragflow/pull/15371)
- GraphRAG 实体排名被破坏。 [#15795](https://github.com/infiniflow/ragflow/issues/15795)[#15797](https://github.com/infiniflow/ragflow/pull/15797)


## 发生了什么变化
* 修复：聊天创意参数未保存。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15243
* 壮举：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/15277 中为宁静的 api 套件添加新的测试和测试用例
* 修复(go-models): 在 https://github.com/infiniflow/ragflow/pull/15234 中添加 @oktofeesh1 的 VolcEngine 模型列表后缀
* go: 在https://github.com/infiniflow/ragflow/pull/15280中通过@Hz-186添加七牛模型提供者
* 壮举：通过 @Helios531 在 https://github.com/infiniflow/ragflow/pull/15131 中添加 GiteeAI 提供程序支持到 Go API 服务器
* Go：在https://github.com/infiniflow/ragflow/pull/15278中@sxxtony在复制驱动程序中实现Rerank
* Go：在 https://github.com/infiniflow/ragflow/pull/15259 中实现 @tmimmanuel 获取 API 连接器
* Go：通过@Haruko386在https://github.com/infiniflow/ragflow/pull/15247中为X.AI实现TTS和ASR
* 修复（go-models）：在 https://github.com/infiniflow/ragflow/pull/15283 中验证 @oktofeesh1 的 TokenHub 聊天请求
* 修复：上传TSV格式文档到知识库没有生成任何错误消息。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15284
* feat[Go]: 在https://github.com/infiniflow/ragflow/pull/15285中通过@Haruko386实现create_connector API
* 修复：ExeSQL 节点继续处理 https://github.com/infiniflow/ragflow/pull/15140 中 @nickmopen 的每个语句 SQL 错误
* 文档：更新了与代理 API 参考的对话。作者：https://github.com/infiniflow/ragflow/pull/15257 中的 @writinwaters
* 文档：最终确定 v0.25.6 release note。作者：https://github.com/infiniflow/ragflow/pull/15305 的 @writinwaters
* 重构：https://github.com/infiniflow/ragflow/pull/15154 中 @xugangqiang 的任务执行器
* go: 在https://github.com/infiniflow/ragflow/pull/15297中添加由@Hz-186更新的PATCH /api/v1/users/me用户设置
* 壮举：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/15299 中为宁静的 api 套件添加新的测试和测试用例
* 功能：https://github.com/infiniflow/ragflow/pull/15292 中 @wangq8 允许 page_size 最大值 100
* 壮举：通过 @JPette1783 在 https://github.com/infiniflow/ragflow/pull/15190 中实现 SharePoint 数据源连接器
* Go：通过@tmimmanuel在https://github.com/infiniflow/ragflow/pull/15307中实现系统healthz API
* 修复：在 https://github.com/infiniflow/ragflow/pull/15320 中 @Hz-186 的 /user/me 响应中包含用户模型设置
* 修复（go-models）：在 https://github.com/infiniflow/ragflow/pull/15289 中强化 @oktofeesh1 的 302.AI 驱动程序请求
* 修复：https://github.com/infiniflow/ragflow/pull/15322 中 @dcc123456 的聚类方法回显错误
* 壮举：通过 @JPette1783 在 https://github.com/infiniflow/ragflow/pull/15188 中实现 Slack 数据源连接器
* 通过 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/15336 更新开发文档
*壮举：添加Go MCP服务器，通过@Helios531在https://github.com/infiniflow/ragflow/pull/15260中创建API
* feat[Go]：通过@Haruko386在https://github.com/infiniflow/ragflow/pull/15300中为连接器实现删除/重建/列表日志api
* 修复（go-models）：通过 @glorydavid03023 在 https://github.com/infiniflow/ragflow/pull/15340 中强化 LongCat 默认传输处理
* 修复（go-models）：通过 @glorydavid03023 在 https://github.com/infiniflow/ragflow/pull/15341 中强化 Voyage 默认传输处理
* 壮举：通过 @JPette1783 在 https://github.com/infiniflow/ragflow/pull/15193 中实现 Microsoft Teams 数据源连接器
* feat(go-api)：通过@JPette1783在https://github.com/infiniflow/ragflow/pull/15274中实现连接器（数据源）管理端点
* feat(go-api)：通过 @JPette1783 在 https://github.com/infiniflow/ragflow/pull/15329 中实现 GET /api/v1/agents 列表端点（问题＃15328）
* 修复（go-models）：通过 @glorydavid03023 在 https://github.com/infiniflow/ragflow/pull/15339 中强化 ModelScope 默认传输处理
* 修复(kb)：在 https://github.com/infiniflow/ragflow/pull/15270 中通过 @nickmopen 对 UpdateMetadataSetting 强制执行租户授权 (#15268)
* 修复（go-models）：在 https://github.com/infiniflow/ragflow/pull/15337 中强化 @oktofeesh1 的 JieKouAI 驱动程序请求
* feat[Go]：在https://github.com/infiniflow/ragflow/pull/15348中通过@Haruko386实现/api/v1/system/status GET
* feat(go-api)：通过@JPette1783在https://github.com/infiniflow/ragflow/pull/15295中实现租户成员管理（问题#15294）
* 修复：在 https://github.com/infiniflow/ragflow/pull/15200 中验证 @bitloi 的自定义模型输入
* 修复（go-models）：通过 @glorydavid03023 在 https://github.com/infiniflow/ragflow/pull/15350 中强化 Novita 默认传输处理
* 壮举：https://github.com/infiniflow/ragflow/pull/14595 中 @Lynn-Inf 的租户 llm 提供商
* 修复：默认 OpenAI 聊天完成为 https://github.com/infiniflow/ragflow/pull/15394 中 @buua436 的非流式传输
* feat(connector)：通过 @JPette1783 在 https://github.com/infiniflow/ragflow/pull/15331 中实现 OneDrive 数据源连接器（问题＃15330）
* 壮举：@leslie2046 在 https://github.com/infiniflow/ragflow/pull/15383 中为 Siliconflow 添加 4 个新模型
* 修复https://github.com/infiniflow/ragflow/pull/15349中@Hz-186在Go API中的用户注册初始化
* 壮举：添加 Go MCP 服务器，通过 @Helios531 在 https://github.com/infiniflow/ragflow/pull/15262 中删除 API
* 修复：在 https://github.com/infiniflow/ragflow/pull/15397 中通过 @Hz-186 保留注销访问令牌失效
* feat[Go]：在https://github.com/infiniflow/ragflow/pull/15407中由@Haruko386实现/system/stats并重构/system/config/log
* 修复（go）：通过@bitloi在https://github.com/infiniflow/ragflow/pull/15043中解析空默认区域的自定义base_url
* 修复（元数据）：在 https://github.com/infiniflow/ragflow/pull/15386 中通过 @monsterdavidliu-ux 保留跨过滤条件的空 AND 结果
*修复（go-models）：提高SSE扫描器缓冲区，以便https://github.com/infiniflow/ragflow/pull/15382中的@Dexterity104不会丢弃大流块
* 在 @kiannidev 在 https://github.com/infiniflow/ragflow/pull/15364 中写入文档存储之前验证块 image_base64
* 修复：https://github.com/infiniflow/ragflow/pull/15181 中 @galuis116 的 OIDC ID 令牌验证中的 JWT 算法混乱
* 修复(go-models): 通过 @oktofeesh1 在 https://github.com/infiniflow/ragflow/pull/15249 中强化混元嵌入验证
* 修复：通过 @Hz-186 在 https://github.com/infiniflow/ragflow/pull/15405 中回填缺失的 api 代币 beta 值
* @Attili-sys 在 https://github.com/infiniflow/ragflow/pull/15414 中添加文件 .rooignore
* 修复：https://github.com/infiniflow/ragflow/pull/15415 中的@orbisai0security 将crawl4ai 升级到0.8.0 (CVE-2026-26217)
*修复（api）：将dify检索健康检查移动到https://github.com/infiniflow/ragflow/pull/15311中@jony376的/dify/retrieval/health
* 修复（opensearch）：在 https://github.com/infiniflow/ragflow/pull/15390 中通过 @ef-rintaro 实现 KNN 第二遍评分的 get_scores
* 修复（opensearch）：修复 https://github.com/infiniflow/ragflow/pull/15393 中 @ef-rintaro 被 #14577 破坏的文档元数据路径
* feat(connector)：通过 @JPette1783 在 https://github.com/infiniflow/ragflow/pull/15333 中实现 Outlook 数据源连接器（问题＃15332）
* 修复：如果文件名太长，会溢出删除文件的确认框。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15287
* 修复https://github.com/infiniflow/ragflow/pull/15411中@wangq8的内存空问题
* 壮举：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/15347 中为宁静的 api 套件添加新的测试和测试用例
* feat[Go] 在 https://github.com/infiniflow/ragflow/pull/15416 中实现 @Haruko386 的 api/v1/thumbnails API
* Go：通过@glorydavid03023在https://github.com/infiniflow/ragflow/pull/15182中实现GPUStack驱动程序中的嵌入
* Go：在https://github.com/infiniflow/ragflow/pull/15421中实现@sxxtony的数据集摄取日志APIs
* GraphRAG - NER - spacy - 修复 @wangq8 在 https://github.com/infiniflow/ragflow/pull/14783 中的 spacy 提取
* 修复：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15472 中无法创建数据集
* 修复：通过 @euvre 在 https://github.com/infiniflow/ragflow/pull/15396 中恢复 json/chunks 上游格式的 TitleChunker 输出
* 修复：新添加的模型没有出现在下拉菜单中。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15476
* 当 @kiannidev 在 https://github.com/infiniflow/ragflow/pull/15371 中缺少文件下载存储 blob 时，返回 4xx
* 由 @kiannidev 在 https://github.com/infiniflow/ragflow/pull/15368 中推断文档图像端点的内容类型
* 错误修复：通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/15346 中增强嵌入模型以提供更好的错误消息
* 修复（deepdoc）：添加英文标题模式以修复 @euvre 在 https://github.com/infiniflow/ragflow/pull/15481 中缺失的图形/表格编号
* 修复（go-models）：通过 @oktofeesh1 在 https://github.com/infiniflow/ragflow/pull/15385 中应用自定义 Google 基本 URL
* 修复（mineru）：跳过页面镶边块以防止 https://github.com/infiniflow/ragflow/pull/15387 中的 @monsterdavidliu-ux 重复块
* 文档：添加了有关如何摄取 RSS 提要的指南。作者：https://github.com/infiniflow/ragflow/pull/15467 的 @writinwaters
* 文档：添加 Tigris 作为 S3 兼容存储后端，通过 @davidmyriel 在 https://github.com/infiniflow/ragflow/pull/15361 中修复 s3 区域字段名称
*壮举：通过@Helios531在https://github.com/infiniflow/ragflow/pull/15253中添加Go MCP服务器列表API
* feat(go-api)：通过 @JPette1783 在 https://github.com/infiniflow/ragflow/pull/15293 中实现密码重置流程（问题＃15282）
* 修复：https://github.com/infiniflow/ragflow/pull/15477 中 @buua436 的空聊天模型回退
* 修复（llm）：从 https://github.com/infiniflow/ragflow/pull/15432 中的 @nickmopen 的 LiteLLM 提供程序的 gen_conf 中剥离非生成密钥（#15427）
* 修复（聊天）：在 https://github.com/infiniflow/ragflow/pull/15266 中的 @Rene0422 序列化聊天完成之前清理 NaN/Inf 分数（#15245）
* 修复 https://github.com/infiniflow/ragflow/pull/15338 中 @xugangqiang 的自动元数据类型问题
*修复（api）：在https://github.com/infiniflow/ragflow/pull/15359中处理@glorysr1209-png OpenAI聊天完成中的数组消息内容
*修复（迁移）：参数化tenant_model_provider插入mysql_migration中，由https://github.com/infiniflow/ragflow/pull/15313中的@jony376
* 修复(rag): id2image 解析连字符存储对象键 (#15117) by @kiannidev in https://github.com/infiniflow/ragflow/pull/15118
* 修复(api): https://github.com/infiniflow/ragflow/pull/15116 中@kiannidev 对连字符缩略图键的文档 image_id 解析 (#15115)
* 添加批量操作，通过 @Letssharearow 在 https://github.com/infiniflow/ragflow/pull/14960 中将多个文件链接到数据集
* 修复：在 https://github.com/infiniflow/ragflow/pull/15495 中迁移 @buua436 的旧模型 ID 配置
*修复（api）：停止在https://github.com/infiniflow/ragflow/pull/15443中由@nickmopen在openai兼容的聊天完成流中重复答案（＃15286）
* 修复：在 https://github.com/infiniflow/ragflow/pull/15101 中@Aeovy 禁用思考以避免 Qwen3.5/Qwen3.6 模型中潜在的无限循环
* 修复：在 https://github.com/infiniflow/ragflow/pull/15496 中通过 @Dimon0000000 重写启用极小极大思维模式
* 修复（go-models）：通过 https://github.com/infiniflow/ragflow/pull/15492 中的 @dripsmvcp 从 novita_test.go 中删除重复的 roundTripperFunc
* feat[Go] 在 https://github.com/infiniflow/ragflow/pull/15493 中通过 @Haruko386 实现 /api/v1/datasets/<dataset_id>/metadata/config
* 修复：https://github.com/infiniflow/ragflow/pull/15460 中@Lynn-Inf 的模型提供者错误
* 修复：@Hz-186 在 https://github.com/infiniflow/ragflow/pull/15410 中发布 /api/v1/system/tokens
* 修复（go-models）：通过 @glorydavid03023 在 https://github.com/infiniflow/ragflow/pull/15351 中强化 N1N 默认传输处理
* 功能：标记 mysql 迁移，如 @buua436 在 https://github.com/infiniflow/ragflow/pull/15504 中应用的那样
*修复（go-models）：使用每个调用上下文超时，以便长流响应不会被https://github.com/infiniflow/ragflow/pull/15380中的@Dexterity104截断
* 壮举：在https://github.com/infiniflow/ragflow/pull/15261中添加@Helios531的Go MCP服务器更新API
* 功能：在https://github.com/infiniflow/ragflow/pull/15513中添加@wangq8的MiniMax M3
* 功能：在https://github.com/infiniflow/ragflow/pull/15516中添加@wangq8的新人类和航海模型
* 修复：https://github.com/infiniflow/ragflow/pull/15517 中 @Lynn-Inf 提供的模型
* feat[Go] 在 https://github.com/infiniflow/ragflow/pull/15475 中使用 apikey 和 @Haruko386 的区域实现检查连接
* feat[Go]: 在 https://github.com/infiniflow/ragflow/pull/15512 中通过 @Dimon0000000 实现 /api/v1/connectors/<connector_id> PATCH
* GOCli 通过 https://github.com/infiniflow/ragflow/pull/15474 中的 @Hz-186 检查提供商区域
*修复：模型提供商在https://github.com/infiniflow/ragflow/pull/15524中由@wangq8订购
* [修复] 天真：强制合并短 Markdown 标头以防止 https://github.com/infiniflow/ragflow/pull/15488 中的 @VictorECDSA 形成单独的块
* 在 https://github.com/infiniflow/ragflow/pull/15366 中保护预览和图像端点上丢失的存储 blob，作者为 @kiannidev
* 修复：https://github.com/infiniflow/ragflow/pull/15389 中的 @bitloi 覆盖聊天完成生成参数
* Refa：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/15549 中完善 mysql 迁移版本工作流程
* 修复：模型提供者在 https://github.com/infiniflow/ragflow/pull/15520 中的 @dcc123456 中添加验证并修复模式中的表单未重置问题
* 执行：通过@JinHai-CN修复https://github.com/infiniflow/ragflow/pull/15554中的gitee余额api
* Go：@JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/15564 中重构提供程序代码
* 功能：在json中显示siliconflow的intl url并验证没有llms的模型提供者，@Lynn-Inf在https://github.com/infiniflow/ragflow/pull/15550中
* 修复：代理模板 smart_customer_service_specialist.json by @buua436 in https://github.com/infiniflow/ragflow/pull/15565
* feat[Go]：通过@Haruko386在https://github.com/infiniflow/ragflow/pull/15563中实现添加multi_models
* 杂务：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/15576 中更新 cohere 模型
* 修复：在块页面上切换页面大小不会重置当前页面。通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/15401
*修复：https://github.com/infiniflow/ragflow/pull/15562中@wangq8不再需要@token_required
* Go：https://github.com/infiniflow/ragflow/pull/15568中@JinHai-CN重构模型提供者
* 重构：通过@xugangqiang在https://github.com/infiniflow/ragflow/pull/15471中大修具有分层架构和综合测试套件的任务执行器
* 删除https://github.com/infiniflow/ragflow/pull/15579中@JinHai-CN未使用的代码
*修复（api）：当https://github.com/infiniflow/ragflow/pull/15536中的@bohdansolovie丢失链接文件行时，保护文档重命名
* 重构（go-models）：通过 @bitloi 在 https://github.com/infiniflow/ragflow/pull/15431 中添加不支持的模型驱动程序默认值
* 修复：在 https://github.com/infiniflow/ragflow/pull/15581 中通过 @wangq8 合并 beta 身份验证
* feat[Go] 通过 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/15584 中实现 /connectors/google/oauth
* 壮举：将 DELETE /api/v1/datasets/:dataset_id/documents 迁移到 https://github.com/infiniflow/ragflow/pull/15577 中 @xugangqiang 的 Go
* 修复：当 @euvre 在 https://github.com/infiniflow/ragflow/pull/15511 中尚未注册提供者时显示默认嵌入模型
*修复（api）：恢复DocumentService.accessible检查https://github.com/infiniflow/ragflow/pull/15508中的@dripsmvcp /预览
*修复（api）：恢复@kiannidev在https://github.com/infiniflow/ragflow/pull/15505中对文档预览的可访问检查
*修复：在https://github.com/infiniflow/ragflow/pull/15582中考虑@buua436的流尾部处理
* 修复：在https://github.com/infiniflow/ragflow/pull/15588中通过@Lynn-Inf搜索机器人并验证模型实例
* 修复：删除https://github.com/infiniflow/ragflow/pull/15625中@buua436重复的文档预览访问检查
* 修复：@bitloi 在 https://github.com/infiniflow/ragflow/pull/15630 中提取 markdown 隔离代码块
* 修复：从https://github.com/infiniflow/ragflow/pull/15601中@he-yufeng的空Docling本机块回退
* 壮举：将 POST /api/v1/datasets/<dataset_id>/documents/stop 迁移到 https://github.com/infiniflow/ragflow/pull/15597 中 @xugangqiang 的 Go
* 壮举：通过 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/15629 中实现 GET /api/v1/agents/<agent_id>/versions API
* 修复：https://github.com/infiniflow/ragflow/pull/15634 中 @Lynn-Inf 提供的模型
*壮举：在https://github.com/infiniflow/ragflow/pull/15633中通过@xugangqiang实现POST /api/v1/agents/<agent_id>/upload API
* 修复：将搜索 ID 传递给 https://github.com/infiniflow/ragflow/pull/15646 中 @buua436 询问的搜索机器人
* 重构[Go Model Provider]：https://github.com/infiniflow/ragflow/pull/15627中@Haruko386重构baseURL和modelConfig
* 修复：@buua436 在 https://github.com/infiniflow/ragflow/pull/15638 中重复文档摄取防护
* 壮举：通过 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/15640 中实现 GET /api/v1/agents/<agent_id>/versions/<version_id> API
*壮举：通过@xugangqiang在https://github.com/infiniflow/ragflow/pull/15639中实现POST /api/v1/searchbots/lated_questions API
* feat: 将meta_filter和convert_conditions迁移到Go by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15648
* 修复：在 DocumentDAO.GetByIDs 中添加 nil 保护，并在 https://github.com/infiniflow/ragflow/pull/15649 中添加 @xugangqiang 的测试
* feat(connectors): 在 https://github.com/infiniflow/ragflow/pull/15466 中添加 @JPette1783 的 Azure Blob Storage 数据源连接器
* 重构：将 https://github.com/infiniflow/ragflow/pull/15656 中的 GetFlattedMetaByKBs 返回类型更改为 common.MetaData by @xugangqiang
* 壮举：在 https://github.com/infiniflow/ragflow/pull/15663 中添加 @xugangqiang 的 ResolveReferenceMetadata 实用函数
* 修复（docker）：在 es01 /tmp 上挂载 tmpfs，以获取 https://github.com/infiniflow/ragflow/pull/15655 中 @whhe 的入口点权限
*修复：https://github.com/infiniflow/ragflow/pull/15653中@Lynn-Inf的volc引擎和其他json关键工厂
* 修复(api): 在 https://github.com/infiniflow/ragflow/pull/15113 中设置 SDK 文档从文件名下载 Content-Type (#15112) by @kiannidev
* 壮举：在 https://github.com/infiniflow/ragflow/pull/15666 中添加 @xugangqiang 的 KG 评分实用程序
* 壮举：在 https://github.com/infiniflow/ragflow/pull/15669 中添加 @xugangqiang 的 QueryRewrite 提示构建器和响应解析器
* feat[Go]：通过 @dripsmvcp 在 https://github.com/infiniflow/ragflow/pull/15573 中实现 GET /agents/templates (issue #15240)
* 修复：在 https://github.com/infiniflow/ragflow/pull/15632 中 @bitloi 提取分隔符期间保留降价表
* 重构：在https://github.com/infiniflow/ragflow/pull/15652中统一使用@wangq8的@login_required
* 壮举：支持 DocEngine 中的 SelectFields 覆盖，用于 https://github.com/infiniflow/ragflow/pull/15684 中 @xugangqiang 的 KG 特定查询
* 壮举：添加 EnrichChunksWithDocMetadata 函数，通过 https://github.com/infiniflow/ragflow/pull/15659 中的 @xugangqiang 将文档元数据附加到块
*修复：恢复不区分大小写的包含/不包含/不在https://github.com/infiniflow/ragflow/pull/15686中由@xugangqiang合并元数据过滤器管道
* 修复：防止 @buua436 在 https://github.com/infiniflow/ragflow/pull/15651 中重复后思考文本
* feat[Go]: 在 https://github.com/infiniflow/ragflow/pull/15641 中实现 @Haruko386 的 Agent/Workflow PUT /api/v1/agents/<canvas_id>/tags
* feat: 在https://github.com/infiniflow/ragflow/pull/15689中添加@xugangqiang的KG实体/关系/社区搜索功能
* feat(connectors): 在https://github.com/infiniflow/ragflow/pull/15462中添加@JPette1783的Salesforce CRM数据源连接器
* feat(go-api)：通过@JPette1783在https://github.com/infiniflow/ragflow/pull/15281中实现MCP服务器管理端点
* Go：在 https://github.com/infiniflow/ragflow/pull/15543 中实现 @tmimmanuel 的基岩嵌入
* 修复：更新 Docker 文件并发布工作流程，以在 https://github.com/infiniflow/ragflow/pull/15700 中使用 GitHub 镜像而不是 @asiroliu 的 Gitee
* 修复(agent): 跳过https://github.com/infiniflow/ragflow/pull/15691中@he-yufeng的空开关条件
* 恢复“修复（api）：为https://github.com/infiniflow/ragflow/pull/15698中的@wangq8授权owner_ids用于列表聊天和搜索应用程序（#14775）
* 恢复 https://github.com/infiniflow/ragflow/pull/15707 中 @wangq8 的“修复：重复文档摄取防护”
* 壮举：为 https://github.com/infiniflow/ragflow/pull/15690 中的 @xugangqiang 添加 KGSearchRetrieval 以实现完整的 KG 管道（N 跳、评分、query_rewrite、社区）
* 修复：在主界面添加聊天时，https://github.com/infiniflow/ragflow/pull/15685中@cike8899会自动弹出警告
* feat(go-cli): 支持在https://github.com/infiniflow/ragflow/pull/15631中通过@Hz-186批量添加/删除模型以及可选的嵌入尺寸
* 壮举：@xugangqiang 在 https://github.com/infiniflow/ragflow/pull/15704 中兼容 Dify 检索 API 端点
* 修复（onedrive）：通过 @kiannidev 在 https://github.com/infiniflow/ragflow/pull/15503 中规范化 Graph delta URL 的文件夹路径
* 功能：通过 @Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/15711 中从远程获取模型列表
* 修复（go-api）：同步文档处理程序界面并强制预览权限...由https://github.com/infiniflow/ragflow/pull/15688中的@Hz-186
* 完善 https://github.com/infiniflow/ragflow/pull/15583 中 @qinling0210 对 GO 中 POST /api/v1/datasets/search 的处理
* 修复（检索）：保持重新排序窗口与 page_size 对齐，以通过 https://github.com/infiniflow/ragflow/pull/15434 中的 @cleanjunc 进行深度分页
* feat[Go]：通过 @dripsmvcp 在 https://github.com/infiniflow/ragflow/pull/15570 中实现 GET /plugin/tools (issue #15240)
* 修复（重新排序）：在 https://github.com/infiniflow/ragflow/pull/15429 中的 @cleanjunc 进行混合混合之前，将重新排序分数归一化为单一尺度
* Go：在 https://github.com/infiniflow/ragflow/pull/15626 中实现 @tmimmanuel 的小米聊天提供商
* 修复(go-models): 在https://github.com/infiniflow/ragflow/pull/15737中通过@oktofeesh1增加JieKouAI SSE扫描器缓冲区
* 修复：https://github.com/infiniflow/ragflow/pull/15612 中@bitloi 规范化推理模型系列
* 修复：个人资料页面不显示时区的问题。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/15759
* 壮举：在 https://github.com/infiniflow/ragflow/pull/15753 中添加 @buua436 的占位符模型元数据
* 通过https://github.com/infiniflow/ragflow/pull/15755中的@qinling0210更新GO中的Rerank逻辑
* 修复：通过 https://github.com/infiniflow/ragflow/pull/15756 中的 @buua436 规范代理会话块
* 修复：代理页面内嵌网站浮动组件不显示引文。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15767
*壮举：在https://github.com/infiniflow/ragflow/pull/15710中通过@xugangqiang实现POST /api/v1/searchbots/retrieval_test
*修复（opensearch）：将BM25腿保留在https://github.com/infiniflow/ragflow/pull/15760中@mateidanut的混合搜索中
* feat[Go]：在 https://github.com/infiniflow/ragflow/pull/15705 中实现 @Haruko386 的 /api/v1/agents/<agent_id>/sessions
* 修复：https://github.com/infiniflow/ragflow/pull/15757 中 @6ba3i 在 p3 级上 Ci 失败为无穷大
* 在https://github.com/infiniflow/ragflow/pull/15764中添加@wangq8的OpenRouter OpenAI API兼容列表型号
* 壮举：通过 https://github.com/infiniflow/ragflow/pull/15768 中的 @dcc123456 统一“添加模型提供者”模式
* 修复：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/15745 中优化思考流解析
* 壮举：@xugangqiang 在 https://github.com/infiniflow/ragflow/pull/15749 中实现 FetchChunkVectors 进行引文向量水合
* 修复：https://github.com/infiniflow/ragflow/pull/15770 中 @dcc123456 的模型提供程序错误
* 修复（nlp）：https://github.com/infiniflow/ragflow/pull/15721 中 @seekmistar01 在 FulltextQueryer.paragraph 中通过空格标记 content_tks
* 修复：Excel 解析器在 https://github.com/infiniflow/ragflow/pull/15490 中 @devYRPauli 精确的 chunk_rows 倍数处发出虚假的仅标头块
* 修复（opensearch）：在插入时将“id”保留在_source中，以便https://github.com/infiniflow/ragflow/pull/15473中的@ef-rintaro的文档元数据不为空
* feat(web)：显示https://github.com/infiniflow/ragflow/pull/15444中@sunlight7777777对每个模型类型过滤器标签的提供者计数
* i18n(it)：由 @gaulin-ai 在 https://github.com/infiniflow/ragflow/pull/15729 完成的意大利语翻译 (49% → 100%)
* 修复（浏览器）：在 https://github.com/infiniflow/ragflow/pull/15325 中 @huang-aoqin 输入的工作流运行日志中显示已解析的变量
* 壮举：在 https://github.com/infiniflow/ragflow/pull/15752 中添加 @euvre 对 Xinference、LocalAI、BaiduYiyan 和腾讯云的 ModelMeta 实现
* 修复：https://github.com/infiniflow/ragflow/pull/15780 中的 @euvre 支持表解析器文档元数据聚合中的自动模式
* 修复：解决https://github.com/infiniflow/ragflow/pull/15778中@dcc123456检查管道解析结果时出错的问题
* 修复：聊天页面消息添加等待状态。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/15773
* 修复：等待 @buua436 在 https://github.com/infiniflow/ragflow/pull/15772 中进行 lmstudio 嵌入验证
* 修复 https://github.com/infiniflow/ragflow/pull/15776 中 @wangq8 的 OpenRouter 密钥 JSONDecodeError
*修复（go-models）：修复https://github.com/infiniflow/ragflow/pull/15528中@oktofeesh1的Moonshot模型和平衡请求
* Go：@Haruko386在https://github.com/infiniflow/ragflow/pull/15765中为小米实现ASR和TTS
* 修复（go-models）：通过 @oktofeesh1 在 https://github.com/infiniflow/ragflow/pull/15734 中验证 URL 后缀配置键
*修复（go-models）：修复https://github.com/infiniflow/ragflow/pull/15527中@oktofeesh1的MiniMax驱动程序请求
* 修复（go-models）：通过 @oktofeesh1 在 https://github.com/infiniflow/ragflow/pull/15735 中标准化 Qwen 推理系列
* 删除https://github.com/infiniflow/ragflow/pull/15783中@wangq8不支持的模型提供商列表
* feat(ci): 通过 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/15750 中启用 CI 管道中的 go 测试
* 壮举：@Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/15774 中的模型列表
* 修复：is_english() 对于 https://github.com/infiniflow/ragflow/pull/15489 中 @devYRPauli 的任何列表参数（损坏的语言检测）返回 False
* 修复：在 https://github.com/infiniflow/ragflow/pull/15787 中通过@xugangqiang 在 xiaomi 中为 Go 1.25 保护 http.DefaultTransport 类型断言
* Go：新的CLI命令，列出所有型号并在https://github.com/infiniflow/ragflow/pull/15786中显示@JinHai-CN的型号
* 修复（api）：在https://github.com/infiniflow/ragflow/pull/15622中通过@dearsishs保护SearchService.get_detail中丢失的行
*修复（api）：在verify_api_key嵌入分支中等待asyncio.wait_for，由@dearsishs在https://github.com/infiniflow/ragflow/pull/15620中
* 修复：在 https://github.com/infiniflow/ragflow/pull/15784 中添加 @wangq8 的 bge 作为嵌入
*修复：OceanBase租户启动漂移和@6ba3i在https://github.com/infiniflow/ragflow/pull/15829中的文档
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/15824中空响应设置不生效的问题
* 修复：通过@dcc123456解决https://github.com/infiniflow/ragflow/pull/15830中某些模型不使用modelInfo参数的问题
* 修复：https://github.com/infiniflow/ragflow/pull/15831 中@Lynn-Inf 列出国际通易-钱文的base_url
* Go：@JinHai-CN在https://github.com/infiniflow/ragflow/pull/15728中重构CLI
* 壮举：通过 @jonathanchang31 在 https://github.com/infiniflow/ragflow/pull/15523 中实现对 GraphRAG 社区提取和实体解析的检查点/恢复支持
* 修复：访问代理启动页面时出现错误消息：“页面大小超出最大值”。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/15835
* @yingfeng 在 https://github.com/infiniflow/ragflow/pull/15838 中清理 CLI 文件系统
* feat(api)：通过https://github.com/infiniflow/ragflow/pull/15748中的@Hz-186在Go中实现`GET /api/v1/agents/prompts`端点
*修复：在https://github.com/infiniflow/ragflow/pull/15837中@buua436收集的任务中传播内存租户ID
* 修复：删除 https://github.com/infiniflow/ragflow/pull/15836 中的 @Dr1985 CREATE TABLEtenant_model SQL 中的尾随逗号（#15832）
* Go CLI：更新https://github.com/infiniflow/ragflow/pull/15845中@JinHai-CN支持的型号列表
*修复：强制@buua436在https://github.com/infiniflow/ragflow/pull/15847中输出图像解析器json
* 修复：https://github.com/infiniflow/ragflow/pull/15828 中 @euvre 的 set_api_key 中百度一言 API 密钥验证失败
* 修复：https://github.com/infiniflow/ragflow/pull/15839 中 @Lynn-Inf 的模型列表
* 修复：https://github.com/infiniflow/ragflow/pull/15841中@wangq8无法添加MinerU
* 修复：防止自动元数据中的 None 值导致 https://github.com/infiniflow/ragflow/pull/15842 中 @xugangqiang 导致 KeyError
* 修复 VLLM 在 https://github.com/infiniflow/ragflow/pull/15851 中无法在没有 /v1 的情况下添加 @wangq8
* feat: 支持https://github.com/infiniflow/ragflow/pull/15855中@dcc123456对模型列表的自定义编辑
* 修复（模型）：通过 @JPette1783 在 https://github.com/infiniflow/ragflow/pull/15819 中保护 Google 和 Ollama 驱动程序中不安全的索引访问
* feat(go-api)：在https://github.com/infiniflow/ragflow/pull/15843中添加@Hz-186的GET数据集元数据摘要API
* 修复（go）：在https://github.com/infiniflow/ragflow/pull/15815中由@JPette1783保护四个零指针取消引用导致运行时恐慌
* 修复：代理操作员可视化输入文件中的变量不显示。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15856
* 修复（elasticsearch）：https://github.com/infiniflow/ragflow/pull/15148中@JSONbored完成Go结果函数
* 修复：通过 @cleanjunc 在 https://github.com/infiniflow/ragflow/pull/15797 中索引 pagerank 和 n-hop 路径来恢复 GraphRAG 实体排名
* 修复（ci）：在 https://github.com/infiniflow/ragflow/pull/15862 中 @xugangqiang 更改 ListModels 签名后重新启用 Go 测试并修复编译错误
* 修复https://github.com/infiniflow/ragflow/pull/15864中@yingfeng错误的单元测试路径
* 壮举：在 https://github.com/infiniflow/ragflow/pull/15825 中实现 POST /api/v1/searchbots/ask — 通过@xugangqiang 的引用和 think-tag 处理来流式传输 RAG
* feat[Go]: 在 https://github.com/infiniflow/ragflow/pull/15771 中通过 @Haruko386 实现 /api/v1/agents/<agent_id> 和 test_db_connection
* feat[Go]: api datasets/<dataset_id>/documents/<document_id>/metadata/… by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15846
* 文档：支持的模型提供者和 URL 由 https://github.com/infiniflow/ragflow/pull/15866 中的@writinwaters 更新
* 转到CLI：在https://github.com/infiniflow/ragflow/pull/15861中通过@JinHai-CN切换到admin/api服务器
* feat(go-api)：将 RAG 检索添加到 https://github.com/infiniflow/ragflow/pull/15739 中@oktofeesh1 的聊天完成中
* 增强功能：精简 Docker 镜像，添加 .dockerignore，修复 https://github.com/infiniflow/ragflow/pull/15880 中 @6ba3i 的 Go 二进制传送问题
* 修复https://github.com/infiniflow/ragflow/pull/15858中@wangq8无法添加paddle ocr的问题
*修复：在https://github.com/infiniflow/ragflow/pull/15881中处理@buua436的qwen rerank错误响应
* feat(go)：在https://github.com/infiniflow/ragflow/pull/15885中添加@Hz-186的DeepSeek模型和Gitee别名元数据测试
* 修复：通过 @dcc123456 修复 https://github.com/infiniflow/ragflow/pull/15884 中一些与模型提供程序相关的 UI 问题
* 修复：https://github.com/infiniflow/ragflow/pull/15886 中@Lynn-Inf 迁移租户模型
*修复：将https://github.com/infiniflow/ragflow/pull/15896中@dcc123456的volcengine提供程序配置的ark_api_key重命名为api_key
* 修复添加OpenRouter base_url，UI需要在https://github.com/infiniflow/ragflow/pull/15894中通过@wangq8选择至少一种型号进行验证
* 修复：https://github.com/infiniflow/ragflow/pull/15860 中 @Lynn-Inf 的型号列表
*壮举：在https://github.com/infiniflow/ragflow/pull/15893中支持@buua436的多类型工厂模型
* 修复：@6ba3i 在 https://github.com/infiniflow/ragflow/pull/15899 中的一致性调用失败
* Go：@JinHai-CN在https://github.com/infiniflow/ragflow/pull/15898中重构CLI
* feat(go-api)：将代理文件下载处理程序迁移到具有严格 P… 的 Go，作者为 https://github.com/infiniflow/ragflow/pull/15769 中的 @Hz-186
*壮举[Go]：在https://github.com/infiniflow/ragflow/pull/15674中通过@hunnyboy1217实现POST /api/v1/files/link-to-datasets
* 修复了 https://github.com/infiniflow/ragflow/pull/15903 中 @wangq8 无需将不活动模型置于底部的问题
* 修复：删除https://github.com/infiniflow/ragflow/pull/15891中@shaoqing404实时推理流的思考文本缓冲
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/15904中无法添加基岩的问题
* 修复：https://github.com/infiniflow/ragflow/pull/15905 中 @Lynn-Inf 的型号列表
* 修复：从https://github.com/infiniflow/ragflow/pull/15908中@xugangqiang的LocalAI模型名称中去除Ollama风格的标签后缀
*修复：在https://github.com/infiniflow/ragflow/pull/15906中通过@buua436将视觉代理调用路由到图像模型
* 修复：数据集检索测试返回错误的总数。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15901
* 修复：通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/15912 中为 x-spreadsheet 组件添加细滚动条样式
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/15913中无法添加鱼音频的问题
* 修复：在 https://github.com/infiniflow/ragflow/pull/15915 中通过 @dcc123456 添加 image2text/speech2text/ocr 支持
* 修复(go): 修复 https://github.com/infiniflow/ragflow/pull/15911 中 @Hz-186 不区分大小写的模型别名查找
* feat(go)：通过https://github.com/infiniflow/ragflow/pull/15910中的@Hz-186更新all_models.json中的Qwen模型
* Go：修复测试并删除https://github.com/infiniflow/ragflow/pull/15909中@JinHai-CN未使用的代码
*壮举：在https://github.com/infiniflow/ragflow/pull/15256中由@jonathanchang31在Go中实现ragflow服务器的API
* feat(go-api)：通过 @Rene0422 在 https://github.com/infiniflow/ragflow/pull/15290 中将忘记密码流移植到 Go (#15282)
* 修复：https://github.com/infiniflow/ragflow/pull/15914 中 @Lynn-Inf 的型号列表
* 通过@wangq8修复https://github.com/infiniflow/ragflow/pull/15931中的多个标签
* 修复（deps）：排除 litellm 1.82.6 （内部导入错误） — https://github.com/infiniflow/ragflow/pull/15920 中的 @Rene0422 的 #15916
* 修复：允许零消息历史记录窗口并清除新会话的历史记录 (#15897) by @zaviermeekz-cpu in https://github.com/infiniflow/ragflow/pull/15902
* 修复（同步）：允许 https://github.com/infiniflow/ragflow/pull/15809 中 @Rene0422 的 Discord server_ids / 频道列表输入（#15790）
* 修复（go-models）：在 https://github.com/infiniflow/ragflow/pull/15817 中 @JPette1783 保护 DeepSeek 和 VolcEngine 流中的 nil 指针
* Go：由 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/15900 中重构列表模型函数
* Go: 在https://github.com/infiniflow/ragflow/pull/15936中添加@JinHai-CN的解析和分块命令
* 修复 https://github.com/infiniflow/ragflow/pull/15937 中@wangq8 思考中 Agent 聊天 Minimax 内容
* 修复：基于管道标头的分块的正则表达式配置将被重置。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15935
* 修复：在 https://github.com/infiniflow/ragflow/pull/15888 中添加 model_name 以嵌入 @zaviermeekz-cpu 的完成请求 (#15883)
* 修复：https://github.com/infiniflow/ragflow/pull/15709 中的 @Rene0422 将 LLM 生成的无效 SQL 降级为 ES sql() 中的警告 (#15409)
*修复：在https://github.com/infiniflow/ragflow/pull/15933中通过@6ba3i复制模型提供者
*修复（api）：当https://github.com/infiniflow/ragflow/pull/15533中的@bohdansolovie丢失File2Document行时，保护数据集删除
* 修复（预览）：在 https://github.com/infiniflow/ragflow/pull/15589 中验证 @monsterdavidliu-ux 的 Markdown 文档预览请求
* 修复（db）：在 https://github.com/infiniflow/ragflow/pull/15879 中通过 @Rene0422 删除 Tenant_model_instance 上的 Peewee 自动命名的唯一索引（#15699）
* 修复（连接器）：通过 @oktofeesh1 在 https://github.com/infiniflow/ragflow/pull/15731 中强制执行 WebDAV 数字字符串大小限制
* 修复（api）：POST /documents/stop 删除部分块并由 @kiannidev 在 https://github.com/infiniflow/ragflow/pull/15789 中重置计数器
* 修复（对话框）：通过 @bohdansolovie 在 https://github.com/infiniflow/ragflow/pull/15530 中保护 async_ask() 免受空或无效的 kb_ids 的影响
* 修复：允许 AzureEmbed 中的原始 api_key 字符串和 https://github.com/infiniflow/ragflow/pull/15877 中的 @jaso0n0818 的 AzureGptV4 __init__
*修复：在https://github.com/infiniflow/ragflow/pull/15876中通过@jaso0n0818在parsing和stop_parsing中使用index_exist保护docStoreConn.delete
* 修复：删除搜索和检索页面的分页。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15942
* i18n(ko)：在 https://github.com/infiniflow/ragflow/pull/15863 中添加 @yooxdb 的韩语 (한국어) 翻译
* 修复：通过 https://github.com/infiniflow/ragflow/pull/15945 中的 @shaoqing404 将 max_tokens 从模型配置传播到下游消费者
* 修复：从https://github.com/infiniflow/ragflow/pull/15946中@Lynn-Inf的模型记录中获取is_tools
* feat(go)：在https://github.com/infiniflow/ragflow/pull/15939中添加嵌入维度元数据并通过@Hz-186进行验证
* 修复：@wangq8 在 https://github.com/infiniflow/ragflow/pull/15949 中搜索思维导图不起作用
* 文档：添加了 v0.26.0 release note 的初始草案。作者：https://github.com/infiniflow/ragflow/pull/15603 中的 @writinwaters
* 文档：更新 https://github.com/infiniflow/ragflow/pull/15941 中 @asiroliu 的自述文件和文档中对 v0.26.0 的版本引用

## 新贡献者
* @Helios531 在 https://github.com/infiniflow/ragflow/pull/15131 中做出了第一个贡献
* @leslie2046 在 https://github.com/infiniflow/ragflow/pull/15383 中做出了第一个贡献
* @monsterdavidliu-ux 在 https://github.com/infiniflow/ragflow/pull/15386 中做出了第一个贡献
* @Dexterity104 在 https://github.com/infiniflow/ragflow/pull/15382 中做出了第一个贡献
* @galuis116 在 https://github.com/infiniflow/ragflow/pull/15181 中做出了第一个贡献
* @ef-rintaro 在 https://github.com/infiniflow/ragflow/pull/15390 中做出了第一个贡献
* @davidmyriel 在 https://github.com/infiniflow/ragflow/pull/15361 中做出了第一个贡献
* @glorysr1209-png 在 https://github.com/infiniflow/ragflow/pull/15359 中做出了第一个贡献
* @Aeovy 在 https://github.com/infiniflow/ragflow/pull/15101 中做出了第一个贡献
* @VictorECDSA 在 https://github.com/infiniflow/ragflow/pull/15488 中做出了第一个贡献
* @he-yufeng 在 https://github.com/infiniflow/ragflow/pull/15601 中做出了第一个贡献
* @cleanjunc 在 https://github.com/infiniflow/ragflow/pull/15434 中做出了第一个贡献
* @mateidanut 在 https://github.com/infiniflow/ragflow/pull/15760 中做出了第一个贡献
* @seekmistar01 在 https://github.com/infiniflow/ragflow/pull/15721 中做出了第一个贡献
* @devYRPauli 在 https://github.com/infiniflow/ragflow/pull/15490 中做出了第一个贡献
* @sunlight7777777 在 https://github.com/infiniflow/ragflow/pull/15444 中做出了第一个贡献
* @gaulin-ai 在 https://github.com/infiniflow/ragflow/pull/15729 中做出了第一个贡献
* @dearsishs 在 https://github.com/infiniflow/ragflow/pull/15622 中做出了第一个贡献
* @Dr1985 在 https://github.com/infiniflow/ragflow/pull/15836 中做出了他们的第一个贡献
* @zaviermeekz-cpu 在 https://github.com/infiniflow/ragflow/pull/15902 中做出了第一个贡献
* @jaso0n0818 在 https://github.com/infiniflow/ragflow/pull/15877 中做出了第一个贡献
* @yooxdb 在 https://github.com/infiniflow/ragflow/pull/15863 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.25.6...v0.26.0

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.26.0` · 📅 发布：2026-06-11 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.26.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
