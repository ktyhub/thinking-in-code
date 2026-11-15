---
title: "ragflow v0.26.2"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.26.2"
version: "v0.26.2"
published: "2026-06-29"
type: "patch"
lang: "zh"
---

# ragflow v0.26.2

## 总结

发布于 2026 年 6 月 29 日。

### 新功能

- 聊天频道：
  - 通过二维码扫描集成 WhatsApp。 [#16238](https://github.com/infiniflow/ragflow/pull/16238)
  - 通过机器人 API 凭证集成钉钉。 [#16183](https://github.com/infiniflow/ragflow/pull/16183)
  - 通过 WebSocket 连接集成 WeCom。 [#16175](https://github.com/infiniflow/ragflow/pull/16175)
- 文件解析：为 PP-OCRv6 和类似文本识别模型添加后备逻辑，并将图像解析集成到 PaddleOCR 管道中。 [#16150](https://github.com/infiniflow/ragflow/pull/16150)

### 改进

- 数据集
  - 向文件摄取逻辑添加边缘情况检查，以将空文件夹安全地链接到数据集。 [#16296](https://github.com/infiniflow/ragflow/pull/16296)
  - 向 `get_flatted_meta_by_kbs()` 方法添加分页，以防止与包含超过 10,000 个文档的数据集相关的 CRUD 失败。 [#16095](https://github.com/infiniflow/ragflow/pull/16095)
- 聊天频道：确保最终用户对话历史记录在重新启动后仍然存在，但当频道绑定到新对话框时仍然是独立的。 [#16274](https://github.com/infiniflow/ragflow/pull/16274)

### 国际化

- 扩大了 i18n 覆盖范围并完善了韩语 UI 的翻译。 [#16203](https://github.com/infiniflow/ragflow/pull/16203)；
- 添加了聊天频道、用户名验证和模型编辑缺失的法语翻译。 [#16217](https://github.com/infiniflow/ragflow/pull/16217)

### 错误修复

- 文件解析：
  - 在“标题”样式的 `.docx` 解析过程中引发了 `ValueError`。 [#16284](https://github.com/infiniflow/ragflow/pull/16284)
  - `.docx` 文件中的表格已被法律文档解析器悄悄删除。 [#16155](https://github.com/infiniflow/ragflow/pull/16155)
  - 设置 DeepDoc 分隔符时，单独的 Markdown 标头与其后续部分分开。 [#16109](https://github.com/infiniflow/ragflow/pull/16109)
  - Markdown 表在块结果中出现两次，一次作为独立块，另一次在常规文本块中。 [#16143](https://github.com/infiniflow/ragflow/pull/16143)
- MCP
  - MCP服务器遇到空文档页面时无限期挂起；由于分页有缺陷，文件的最后一页被悄悄丢弃。 [#16285](https://github.com/infiniflow/ragflow/pull/16285)
  - MCP 连接和数据集发现过程失败，因为服务器的硬编码提取限制超出了引入的 `page_size` 限制。 [#16148](https://github.com/infiniflow/ragflow/pull/16148)
- 数据流
  - 恢复数据流重新运行端点，并确保摄取响应包括 DSL 有效负载，以可靠地呈现时间线和解析器视图。 [#16292](https://github.com/infiniflow/ragflow/pull/16292)
  - 恢复数据流解析器默认值并返回实际的 SSE 负载，确保管道正确运行表面消息 ID 和日志更新。 [#16290](https://github.com/infiniflow/ragflow/pull/16290)
- LLM：无法通过使用 `eu` 或 `us` 区域端点的 Google Cloud (Vertex AI) 提供商使用新的 `gemini-3.5-flash` 模型。这是通过将多区域路由请求明确地发送到所需的 `aiplatform.<region>.rep.googleapis.com` 域而不是合成的 `<region>-aiplatform.googleapis.com` 主机来解决的。 [#15990](https://github.com/infiniflow/ragflow/pull/15990)
- UI/UX：元数据添加模式将空值发送到后端。 [#15229](https://github.com/infiniflow/ragflow/pull/15229)


## 发生了什么变化
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/16159中的启动脚本
* 重构(go-cli)：通过https://github.com/infiniflow/ragflow/pull/16145中的@Hz-186改进CLI parseAddModel中的变量和标签命名
* 修复聊天/搜索/代理机器人在 https://github.com/infiniflow/ragflow/pull/16152 中显示 @wangq8 的图像
* 修复：由于 REST API 最大页面大小限制，MCP 数据集发现失败...作者：@xuhaiL in https://github.com/infiniflow/ragflow/pull/16148
* 修复：https://github.com/infiniflow/ragflow/pull/16171 中的 @6ba3i cli 指向错误的 api 端点
* feat(go-api)：实现 Go-side 文档 PATCH API 并通过 https://github.com/infiniflow/ragflow/pull/15975 中的 @Hz-186 对齐解析/元数据同步行为
* feat(go-api)：迁移MCP服务器详细信息并通过https://github.com/infiniflow/ragflow/pull/16113中的@Hz-186下载API到Go
* 壮举：在 https://github.com/infiniflow/ragflow/pull/16175 中支持 @buua436 的 wecom websocket 通道
* 修复：Lint 错误。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/16172
* 修复：修复 https://github.com/infiniflow/ragflow/pull/16180 中 @Haruko386 的 check_conn 和 drop_inst 中的一些错误
* 修复（deepdoc）：当 @jaso0n0818 在 https://github.com/infiniflow/ragflow/pull/16109 中设置分隔符时，将单独的标题行附加到以下部分
* Go CLI：在https://github.com/infiniflow/ragflow/pull/16082中添加@Haruko386对windows、linux、macos的支持
* Go: 在https://github.com/infiniflow/ragflow/pull/16119中添加@JinHai-CN的统计命令
* 修复 https://github.com/infiniflow/ragflow/pull/16186 中 @wangq8 的搜索重命名错误和多个错误消息 (#664)
* Go CLI：在https://github.com/infiniflow/ragflow/pull/16184中添加@Haruko386对windows、linux、macos的支持
* 修复：使用 RESTful 管道详细信息 API 以及 https://github.com/infiniflow/ragflow/pull/16182 中@euvre 的knowledgeId 和 logId
* 修复：用 https://github.com/infiniflow/ragflow/pull/16131 中的@Lynn-Inf 替换tenant_llm apis
*修复：在https://github.com/infiniflow/ragflow/pull/16189中添加@Haruko386的夜间标签
* Go：添加命令，在https://github.com/infiniflow/ragflow/pull/16187中显示@JinHai-CN的任务摘要
* 修复：https://github.com/infiniflow/ragflow/pull/16176 中聊天频道默认设置以及飞书被 @buua436 关闭
* 修复：@Haruko386 在 https://github.com/infiniflow/ragflow/pull/16191 中为 Windows 提供了错误的 clang/工具链
* Go：https://github.com/infiniflow/ragflow/pull/16190中@JinHai-CN添加命令、列表、删除、停止任务
* feat[Go]：在https://github.com/infiniflow/ragflow/pull/16025中通过@Haruko386为delete_model和update_status添加modelID
* feat[go]: 在 https://github.com/infiniflow/ragflow/pull/16122 中实现 @Haruko386 的 /api/v1/datasets/<dataset_id> PUT
* feat[Go]：在 https://github.com/infiniflow/ragflow/pull/16153 中通过 @Haruko386 实现 datasets/<dataset_id>/index P/G
* Json 在 https://github.com/infiniflow/ragflow/pull/16156 中添加 @Haruko386 的 paddleOCR 模型
* 在https://github.com/infiniflow/ragflow/pull/16177中@qinling0210在GO中实现OpenAI聊天补全
* 修复：@Haruko386 在 https://github.com/infiniflow/ragflow/pull/16193 中硬编码 Windows C 编译器的路径
* 修复https://github.com/infiniflow/ragflow/pull/16192中代理不能与@wangq8同名
* feat: 在https://github.com/infiniflow/ragflow/pull/16183中添加@buua436的dingtalk聊天频道
* Go：修复https://github.com/infiniflow/ragflow/pull/16197中@JinHai-CN的重复模型
* Go CLI：在https://github.com/infiniflow/ragflow/pull/16201中添加@JinHai-CN的列表用户命令框架
* Go CLI：@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16204中重构了一些命令
* Go CLI：@JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/16213 中重构命令
* Go CLI：https://github.com/infiniflow/ragflow/pull/16221中@JinHai-CN的管理列表配置
* 修复：在 https://github.com/infiniflow/ragflow/pull/16155 中使用@manan-tech 的法则解析器（#16008）解析 DOCX 时保留表
* 修复：通过 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/16223 中增强 Office_Oxide 和 rag tokenizer 的 Windows 构建过程
* feat(agent)：将Go代理行为与Python（检索组件除外）通过@yuzhichang在https://github.com/infiniflow/ragflow/pull/16225中对齐
* 修复：在https://github.com/infiniflow/ragflow/pull/16227中通过@Haruko386增强release.yml中的Windows构建配置
* 修复：由于 https://github.com/infiniflow/ragflow/pull/15229 中 @nickmopen 的陈旧关闭，元数据添加模式发送空值
* Go CLI：修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16226中的改变角色
* 修复：修复 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/16235 中针对 Windows 和 MAC 构建的发布工作流程
* feat[Go]：在 https://github.com/infiniflow/ragflow/pull/16067 中实现 @Haruko386 的 api /api/v1/datasets/<dataset_id>/chunks POST
* 修复：https://github.com/infiniflow/ragflow/pull/16195中@Haruko386设置模型后无法聊天
* feat(go-api)：通过 @Hz-186 在 https://github.com/infiniflow/ragflow/pull/16139 中的测试完成聊天频道 API 迁移
* feat(go-api)：实现 BulkDeleteChats Go API 并通过 @Hz-186 在 https://github.com/infiniflow/ragflow/pull/16157 中修复 ListChats
* feat(go-api)：将搜索机器人共享详细信息端点迁移到https://github.com/infiniflow/ragflow/pull/16124中的@Hz-186
* 添加@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16240中显示/设置角色默认模型
* 功能：向与聊天关联的 `FormField` 的 `name` 添加前缀。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/16178
* i18n(fr)：为 https://github.com/infiniflow/ragflow/pull/16217 中的 @vincentlambert 添加聊天频道、用户名验证和模型编辑缺失的法语翻译
* test(go): 确保https://github.com/infiniflow/ragflow/pull/16241中的@yuzhichang通过go单元测试
* 转到CLI：在https://github.com/infiniflow/ragflow/pull/16243中@JinHai-CN管理列表提供商
*修复：通过@Haruko386在https://github.com/infiniflow/ragflow/pull/16244中处理arm64的SIMDe标头安装
* 修复：重新进入坐席页面时，上一次会话的数据会短暂闪烁。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/16251
* 修复：https://github.com/infiniflow/ragflow/pull/16247 中 @vincentlambert 通过 thread_pool_exec 传播上下文变量
* 重构（日志）：通过旋转将 Go 日志记录统一到 zap，通过 https://github.com/infiniflow/ragflow/pull/16261 中的 @yuzhichang 剥离每个包的级别
* Go CLI：https://github.com/infiniflow/ragflow/pull/16252中@JinHai-CN的管理模型框架
* Go：https://github.com/infiniflow/ragflow/pull/16265中@JinHai-CN的默认公钥
*壮举：在https://github.com/infiniflow/ragflow/pull/16238中添加@buua436的whatsapp网络qr聊天频道
* 修复：在 https://github.com/infiniflow/ragflow/pull/16264 中添加 @wangq8 的 /v1/document/upload_info -> /api/v1/documents/upload
* Go CLI：在https://github.com/infiniflow/ragflow/pull/16263中添加@myf-bee的响应输出
* feat[Go]: 在 https://github.com/infiniflow/ragflow/pull/16232 中实现 @Haruko386 的 <document_id>/chunks/<chunk_id> PATCH
* feat[Go]：在https://github.com/infiniflow/ragflow/pull/16258中由@Haruko386实现/datasets/<dataset_id>/documents/batch-update-status
* 文档[Go-develop]：https://github.com/infiniflow/ragflow/pull/16229中@Haruko386更新Go开发文档
* 转到：https://github.com/infiniflow/ragflow/pull/16270中@JinHai-CN将ragflow_cli重命名为ragflow-cli
* Go：显示模型并列出https://github.com/infiniflow/ragflow/pull/16272中@JinHai-CN的所有模型
* @yingfeng 在https://github.com/infiniflow/ragflow/pull/16271中重构线束框架
* 修复（rag/raptor）：在https://github.com/infiniflow/ragflow/pull/16199中由@Harsh23Kashyap处理GMM簇选择中的max_cluster边缘情况
* 修复(paddleocr): 支持 PP-OCRv6 ocrResults 回退并在 https://github.com/infiniflow/ragflow/pull/16150 中集成 @Rander7 的图像解析
* 修复@JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/16278 中发布的问题
* 修复（i18n）：修复缺失的 i18n 覆盖范围并通过 @yooxdb 在 https://github.com/infiniflow/ragflow/pull/16203 中完善韩语翻译
* 修复：https://github.com/infiniflow/ragflow/pull/15990 中的 @glu000 支持 Google Cloud Gemini 欧盟/美国多点端点
*修复：恢复https://github.com/infiniflow/ragflow/pull/16290中@buua436的数据流默认值和SSE响应
* 修复：https://github.com/infiniflow/ragflow/pull/16274 中 @buua436 保持聊天频道绑定一致
* 修复：防止 Switch Flow 路径中缺少组件 ID，以防止 https://github.com/infiniflow/ragflow/pull/16279 中 @OSHA-B 导致 NoneType 崩溃
*修复：通过https://github.com/infiniflow/ragflow/pull/16292中的@buua436恢复数据流重新运行和详细有效负载
* 修复（document_service）：防止https://github.com/infiniflow/ragflow/pull/16289中的@Dimon0000000在progress_msg.strip（）上出现NoneType错误
* 修复：当 https://github.com/infiniflow/ragflow/pull/16285 中的 @minion1227 文档返回空文档页面时，MCP 文档元数据缓存可能会永远循环
* 修复：docx 解析在 https://github.com/infiniflow/ragflow/pull/16284 中 @minion1227 引发“标题”样式上的 ValueError
* 修复：通过 @Dr1985 在 https://github.com/infiniflow/ragflow/pull/16095 中对 get_flatted_meta_by_kbs 进行分页以支持包含 >10k 文档的数据集 (#16034)
* 修复：https://github.com/infiniflow/ragflow/pull/16143 中 @helloxjade 删除重复的 Markdown 表块
* 修复：在 https://github.com/infiniflow/ragflow/pull/16296 中通过 @wangq8 链接到数据集时处理空文件夹
* 修复(agent): 通过https://github.com/infiniflow/ragflow/pull/16276中的@Ambercssa处理不同的参考数据格式
* Go CLI：通过@JinHai-CN修复https://github.com/infiniflow/ragflow/pull/16294中的模式切换
* 修复：猜测 @Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/16298 中的 volc 嵌入模型
* 修复（api）：使用数据集所有者租户进行 https://github.com/infiniflow/ragflow/pull/15961 中 @kiannidev 的遗留/块文档存储清理
* feat(go-api)：将数据集标签聚合API迁移到https://github.com/infiniflow/ragflow/pull/16181中@Hz-186的Go
* feat[Go] 在 https://github.com/infiniflow/ragflow/pull/16257 中通过 @Haruko386 实现 datasets/<dataset_id>/<index_type> DELETE
* feat(go-api)：通过 https://github.com/infiniflow/ragflow/pull/16269 中的 @Hz-186 将文档元数据批次 API 和 upload_info 与 Python 对齐
*修复(go):在https://github.com/infiniflow/ragflow/pull/16301中通过@Hz-186规范化DatasetID
* Go CLI：@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16299中重构
* feat(go-api)：在https://github.com/infiniflow/ragflow/pull/16231中通过@Hz-186添加数据集标签端点
*壮举（go-api）：将聊天会话获取/更新与https://github.com/infiniflow/ragflow/pull/16239中的@Hz-186的python行为对齐
* Go CLI：修复https://github.com/infiniflow/ragflow/pull/16306中@JinHai-CN的按键命令
* 修复：新数据集无法通过@Haruko386在https://github.com/infiniflow/ragflow/pull/16291中更新配置
* 实现：<dataset_id>/embedding/check POST by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16266
* feat[go]: datasets/<dataset_id>/chunks DELETE by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16185
* https://github.com/infiniflow/ragflow/pull/16325中@yingfeng的更具弹性的图形引擎
* Go CLI：列出提供程序实例模型，由 @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/16311 中同步和列出提供程序
* 示例：list_datasets.sh by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16335
* 通过 https://github.com/infiniflow/ragflow/pull/16233 中的 @ilya-bogin-keenable 将 Keenable 网络搜索工具添加到代理中
* 修复未设置空响应时报告：ERROR: 'knowledge' by @wangq8 in https://github.com/infiniflow/ragflow/pull/16338
* 壮举：通过 https://github.com/infiniflow/ragflow/pull/16336 中的 @buua436 统一提供商 ID 或名称路由
* 修复（代理）：记录维基百科消歧和页面错误，而不是 s… by @Willsgao in https://github.com/infiniflow/ragflow/pull/16207
* feat(go-api)：在https://github.com/infiniflow/ragflow/pull/16304中通过@Hz-186添加数据集搜索端点
* feat(go-api): 在https://github.com/infiniflow/ragflow/pull/16295中通过@Hz-186实现数据集文档上传API
* Go CLI：修复https://github.com/infiniflow/ragflow/pull/16341中@JinHai-CN按数据集名称列出数据集文件
* 修复（网络）：https://github.com/infiniflow/ragflow/pull/16344 中的 @dcc123456 代理日志重新获取和滑块百分比舍入
* feat(go-api): 在 https://github.com/infiniflow/ragflow/pull/16256 中添加 @Hz-186 对 POST /api/v1/datasets/{dataset_id}/documents/{document_id}/chunks 的 Go 支持
* 修复（代理）：强制 None 在 https://github.com/infiniflow/ragflow/pull/16320 中通过 @Harsh23Kashyap 在字符串运算符之前切换输入
* 修复（代理/工具）：PubMed 工具始终返回 https://github.com/infiniflow/ragflow/pull/16330 中@immuhammadfurqan 的“未知作者”
* 修复 https://github.com/infiniflow/ragflow/pull/16343 中@6ba3i 的 VLM 频道请求的多模式聊天图像路由
* 修复（网络）：https://github.com/infiniflow/ragflow/pull/16281 中@Harsh23Kashyap 使 lodash 超过易受攻击的范围
* 修复（代理/工具）：https://github.com/infiniflow/ragflow/pull/16332 中的 @immuhammadfurqan 导致 DeepL 组件验证失败并丢弃错误
* 修复：https://github.com/infiniflow/ragflow/pull/16293 中 @cike8899 的灵活聊天配置
* Go CLI：修复https://github.com/infiniflow/ragflow/pull/16345中@JinHai-CN的列表提供程序实例任务
* 修复(html_parser): 在https://github.com/infiniflow/ragflow/pull/16052中@devYRPauli分割超大块时保留原始文本
* Go:CLI 在 https://github.com/infiniflow/ragflow/pull/16347 中添加 @myf-bee 的新响应函数
* 添加 env ALLOW_ANY_HOST 以跳过 https://github.com/infiniflow/ragflow/pull/16351 中 @wangq8 的主机检查
* 修复在 https://github.com/infiniflow/ragflow/pull/16352 中 @wangq8 添加没有 apikey 的 VLLM 将失败的问题
* 修复https://github.com/infiniflow/ragflow/pull/16357中@wangq8未将[ID:0]转换为图1的问题
* 修复：代理对话顶部弹出空消息通知。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/16353
* 修复（api）：将 use_sql Markdown 分隔符与 https://github.com/infiniflow/ragflow/pull/16317 中的 @Harsh23Kashyap 的源头对齐
*壮举[Go]：实现api：在https://github.com/infiniflow/ragflow/pull/16307中搜索/获取/更新@Haruko386的消息
* feat[go]: 在 https://github.com/infiniflow/ragflow/pull/16358 中为连接器/<connector_id> PATCH 添加路由器 @Haruko386
* 修复（deepdoc）：在 https://github.com/infiniflow/ragflow/pull/16318 中的 @Harsh23Kashyap 的 __call__ 中保留零和假 Excel 单元格
* 修复：naive_merge 分割过大的部分并通过 https://github.com/infiniflow/ragflow/pull/15802 中的 @cleanjunc 正确计算重叠标记
* 修复（网页）：通过 @yooxdb 在 https://github.com/infiniflow/ragflow/pull/16324 中修复文本、溢出和间距一致性的布局问题
* feat(go-api)：@Hz-186在https://github.com/infiniflow/ragflow/pull/16356中的Langfuse API关键迁移行为
* 修复（deepdoc）：在 https://github.com/infiniflow/ragflow/pull/16319 中接受 @Harsh23Kashyap 带有一个或多个破折号的 GFM 表分隔符
*修复（api）：当https://github.com/infiniflow/ragflow/pull/16309中的@Harsh23Kashyap的值为零时验证不可变文档字段
* 恢复 https://github.com/infiniflow/ragflow/pull/16366 中 @wangq8 的“修复（deepdoc）：在 __call__ 中保留零和假 Excel 单元格”
* 修复（rag/nlp）：将 https://github.com/infiniflow/ragflow/pull/16308 中 @Harsh23Kashyap 的 is_english 中的字符串输入视为一个短语
* 重构：https://github.com/infiniflow/ragflow/pull/16323中@xugangqiang将pdf_parser.py迁移到golang
* Go CLI：@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16355中重构
* Go CLI：修复https://github.com/infiniflow/ragflow/pull/16368中@JinHai-CN的模型相关命令
* 修复（excel_parser）：在https://github.com/infiniflow/ragflow/pull/16287中由@devYRPauli构建Excel文本块时保留零值单元格
* 修复：删除https://github.com/infiniflow/ragflow/pull/16372中@xugangqiang的deepdoc dep
* 模型配置：在https://github.com/infiniflow/ragflow/pull/16371中添加@JinHai-CN的工具
* Go CLI：修复https://github.com/infiniflow/ragflow/pull/16370中@JinHai-CN的显示变量
* 文档：添加了 v0.26.2 release note。作者：https://github.com/infiniflow/ragflow/pull/16373 的 @writinwaters
*壮举：通过https://github.com/infiniflow/ragflow/pull/16379中的@Hz-186将缺少的qwen模型添加到all_models.json
* Go CLI：修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16380中显示模型和列出模型的问题
* 修复 Python RAGFlowS3 存储实现中缺失的移动和复制方法（@ondery 在 https://github.com/infiniflow/ragflow/pull/16350 中实现）
* 修复 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16381 中嵌入模型时文档进度未设置失败的问题
*功能：在https://github.com/infiniflow/ragflow/pull/16383中通过@dcc123456添加日志图标到解析状态显示
* 修复：https://github.com/infiniflow/ragflow/pull/16374 中 @buua436 加强循环验证
* 壮举：在 https://github.com/infiniflow/ragflow/pull/16385 中支持 @Lynn-Inf 的新 qwen 模型
* 修复：如果 Loop 算子中的循环变量类型设置为 `object`，则在其中使用 cli 操作 Variable Replicator 算子时会出错。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/16388
* 修复 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16384 中处理移动文件失败的问题
* 修复：通过https://github.com/infiniflow/ragflow/pull/16390中的@dcc123456调整DatasetTable组件中的表格高度和按钮位置
* 功能：在 https://github.com/infiniflow/ragflow/pull/15991 中添加 @wanghualoong 为 OpenAI 兼容网关添加新的 API 模型提供程序
* Go CLI：修复https://github.com/infiniflow/ragflow/pull/16382中@JinHai-CN的显示管理服务器和api服务器
* feat[Go]：在https://github.com/infiniflow/ragflow/pull/16375中通过@Haruko386实现为Go添加消息
* feat(go-api)：通过@Hz-186在https://github.com/infiniflow/ragflow/pull/16378中添加聊天更新端点
* feat[Go]：在https://github.com/infiniflow/ragflow/pull/16386中通过@Haruko386实现Create-Chat/Session、Delete-Session
* 修复 VLM PDF 解析器仅解析前 12 页，并且 PDF 文件的默认页面范围与 https://github.com/infiniflow/ragflow/pull/16394 中的@wangq8 后端对齐
*修复：删除https://github.com/infiniflow/ragflow/pull/16393中@Haruko386的重复方法

## 新贡献者
* @xuhaiL 在 https://github.com/infiniflow/ragflow/pull/16148 中做出了第一个贡献
* @manan-tech 在 https://github.com/infiniflow/ragflow/pull/16155 中做出了第一个贡献
* @OSHA-B 在 https://github.com/infiniflow/ragflow/pull/16279 中做出了第一个贡献
* @minion1227 在 https://github.com/infiniflow/ragflow/pull/16285 中做出了第一个贡献
* @helloxjade 在 https://github.com/infiniflow/ragflow/pull/16143 中做出了第一个贡献
* @Ambercssa 在 https://github.com/infiniflow/ragflow/pull/16276 中做出了第一个贡献
* @ilya-bogin-keenable 在 https://github.com/infiniflow/ragflow/pull/16233 中做出了第一个贡献
* @immuhammadfurqan 在 https://github.com/infiniflow/ragflow/pull/16330 中做出了第一个贡献
* @ondery 在 https://github.com/infiniflow/ragflow/pull/16350 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.26.1...v0.26.2

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.26.2` · 📅 发布：2026-06-29 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.26.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
