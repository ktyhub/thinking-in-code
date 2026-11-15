---
title: "ragflow v0.26.3"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.26.3"
version: "v0.26.3"
published: "2026-07-02"
type: "patch"
lang: "zh"
---

# ragflow v0.26.3

## 总结

于 2026 年 7 月 2 日发布。

### 新功能

- 数据源连接器：引入 Google BigQuery 作为数据源连接器，用于文档摄取和增量同步。 [#15871](https://github.com/infiniflow/ragflow/pull/15871)
- MCP：向 RAGFlow MCP 服务器添加两个 MCP 工具 `ragflow_list_datasets` 和 `ragflow_list_chats`。 [#15384](https://github.com/infiniflow/ragflow/pull/15384)
- 文件摄取
  - 将布局感知的 SoMark OCR 解析器集成到系统中，用于提取和索引复杂的文档元素（例如表格和图形）。 [#16482](https://github.com/infiniflow/ragflow/pull/16482)
  - API：公开[摄取文档](./references/http_api_reference.md#ingest-documents)端点，以使用自定义管道处理文档。 [#16395](https://github.com/infiniflow/ragflow/pull/16395)

### 改进

- 后端：引入批量文档上传部分成功处理，确保单个失败文件不再导致整个批次被丢弃。 [#16438](https://github.com/infiniflow/ragflow/pull/16438)
- UI/UX：重构全局标题，根据可用屏幕空间在完整的桌面导航栏和适合移动设备的侧抽屉之间动态切换，解决重叠问题并显着改善移动用户体验。 [#15984](https://github.com/infiniflow/ragflow/pull/15984)

### 错误修复

- 设置 Ollama 提供程序后，系统返回错误：“无法使用此 api 密钥访问模型（名称）”。 [#16519](https://github.com/infiniflow/ragflow/pull/16519)
- 由于索引未对齐，删除用户/助理聊天消息对时错误地删除了上一个对话回合的引用。 [#16436](https://github.com/infiniflow/ragflow/pull/16436)
- 
## 发生了什么变化
* 重构：https://github.com/infiniflow/ragflow/pull/15984 中 @carlh7777 增强 UI 组件并改进布局
* 修复：更新变量完整性检查以允许 https://github.com/infiniflow/ragflow/pull/16389 中的 @buua436 为 None 参数
* Go CLI：在https://github.com/infiniflow/ragflow/pull/16430中添加@JinHai-CN的创建和删除命令
* 文档：@writinwaters 在 https://github.com/infiniflow/ragflow/pull/16435 中更新了发布日期和 cli 安装命令
* 修复https://github.com/infiniflow/ragflow/pull/16439中@JinHai-CN的PR模板
* feat: 在 https://github.com/infiniflow/ragflow/pull/16438 中处理 @euvre 文档批量上传的部分上传成功
* Guard /datasets/{dataset_id}/chunks 无法解析摄取管道，请在 https://github.com/infiniflow/ragflow/pull/16395 中使用 /documents/ingest 代替 @wangq8
* 修复（rag/nlp）：通过 https://github.com/infiniflow/ragflow/pull/16219 中的 @Harsh23Kashyap 处理非编号 DOCX 标题样式
* 修复：无法通过 embd_id 获取嵌入模型：在 https://github.com/infiniflow/ragflow/pull/16445 中未找到模型配置 BAAI/bge-m3@...@SILICONFLOW by @wangq8
* 修复：https://github.com/infiniflow/ragflow/pull/16449 中 @dcc123456 的用户设置模式修复和 DOMPurify 清理
* [Go] 通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16450 中修复搜索机器人 BETA 身份验证
* Go CLI：@JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/16447 中重构命令
* [Go] 修复 searchbotretrieve_test 接受 kb_id 作为数组，修复 https://github.com/infiniflow/ragflow/pull/16452 中 @wangq8 识别的模型
* 重构：oss解析器由@xugangqiang在https://github.com/infiniflow/ragflow/pull/16391重构
* 修复：auth 中间件对 https://github.com/infiniflow/ragflow/pull/16444 中 @Haruko386 早期拒绝的双重响应
* 修复：https://github.com/infiniflow/ragflow/pull/16437 中@Haruko386 搜索时无法上传头像
* 修复：@Haruko386 在 https://github.com/infiniflow/ragflow/pull/16434 中无法编辑新聊天内容
* 修复(py): https://github.com/infiniflow/ragflow/pull/16436中@Hz-186的聊天消息参考删除索引
* feat(go-api): 在https://github.com/infiniflow/ragflow/pull/16442中添加@Hz-186的Go聊天会话消息删除和反馈APIs
* [Go] 修复 https://github.com/infiniflow/ragflow/pull/16453 中 @wangq8 的 /documents/images/:image_id 和 /documents/:id/preview 和 /thumbnails 的 beta 验证
* Go CLI：修复https://github.com/infiniflow/ragflow/pull/16457中@JinHai-CN的api命令
* feat[Go]：在https://github.com/infiniflow/ragflow/pull/16440中实现@Haruko386的搜索/<search_id>/completions POST
* 文档：在 https://github.com/infiniflow/ragflow/pull/16466 中添加了 @writinwaters 的常见问题解答
* 恢复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16465中的“feat(go-api)：添加Go聊天会话消息删除和反馈APIs”
* https://github.com/infiniflow/ragflow/pull/15871 中的 @Attili-sys 提供大查询连接器
* Go CLI：在https://github.com/infiniflow/ragflow/pull/16463中添加@JinHai-CN显示用户计划摘要
* Go CLI：在https://github.com/infiniflow/ragflow/pull/16454中添加@myf-bee的admin_command响应表功能
* 构建（deps）：通过https://github.com/infiniflow/ragflow/pull/16470中的@dependabot[bot]将crawl4ai从0.8.9提升到0.9.0
* 修复：允许任何主机的 url 供 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16459 中进行开发
* 修复：在https://github.com/infiniflow/ragflow/pull/16488中通过@dcc123456调整messageItemSectionLeft的宽度以适应内容
* Go CLI：@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16458中的合并功能
* 修复（代理）：通过 https://github.com/infiniflow/ragflow/pull/15220 中的 @Rene0422 将上传的附件注入 LLM 上下文（#15215）
* @yuzhichang 在 https://github.com/infiniflow/ragflow/pull/16455 中修复了 Go 画布的端口 14 上游代理安全性/正确性
* [Go] 在 https://github.com/infiniflow/ragflow/pull/16443 中添加 @wangq8 的 /api/v1/searchbots/mindmap 和 /api/v1/chat/mindmap
* 修复(agent): 当聊天完成没有产生任何事件时返回 session_id (#15169) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/15228
* 修复：通过 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/16492 中删除 bot_routes 中的 dup-prefix
* 修复：https://github.com/infiniflow/ragflow/pull/16497 中 @wangq8 无法启动 UI
* 修复(agent): 将canvas_type过滤器和字段添加到https://github.com/infiniflow/ragflow/pull/15754中@huang-aoqin的list_agents API
* 修复@yingfeng 在 https://github.com/infiniflow/ragflow/pull/16486 中发出的线束流
* feat(go-api)：将 Box Web OAuth 连接器 API 迁移到 https://github.com/infiniflow/ragflow/pull/16480 中的 @Hz-186 Go
*为python和Go版本添加基于spacy的ner和关系提取器，并在https://github.com/infiniflow/ragflow/pull/16456中@yingfeng提供等效输出
* 恢复：回滚tests.yml CI从https://github.com/infiniflow/ragflow/pull/16505中@xugangqiang的PR＃16391更改
* 修复：https://github.com/infiniflow/ragflow/pull/16504 中 @Lynn-Inf 的 CI
* 修复（common/time_utils）：正确的 None/空时间戳回退和 https://github.com/infiniflow/ragflow/pull/16483 中 @Harsh23Kashyap 的 ISO 8601 解析
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/16413中通过@Taranum01提示拟合后防止空LLM用户消息
* 修复：处理代理画布 SSE 中的不可序列化对象和状态 SE…，作者：https://github.com/infiniflow/ragflow/pull/14210 中的 @RazmikGevorgyan
* 在https://github.com/infiniflow/ragflow/pull/14641中添加@sxxtony的CAJAL科学论文代理模板
* feat(mcp)：通过@saltsalt123在https://github.com/infiniflow/ragflow/pull/15384中添加ragflow_list_datasets和ragflow_list_chats工具
* 修复https://github.com/infiniflow/ragflow/pull/16512中@yingfeng的g++ 11不兼容问题
* 修复（代理/工具）：GoogleScholar 空 json 输出并忽略 https://github.com/infiniflow/ragflow/pull/16419 中 @immuhammadfurqan 的 top_n
* [Go] 添加 API /api/v1/chat/recommendation 并与 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16500 中的 /api/v1/searchbots/lated_questions 合并
* 修复：@Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/16519 中提供 ollama 提供程序
* 壮举：@Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/16482 中的 SoMark
* 修复（web）：通过 @Harsh23Kashyap 在 https://github.com/infiniflow/ragflow/pull/16516 中针对存储的 XSS 清理代理重新运行模态 HTML
* 修复（代理）：过滤 TuShare 新闻与 @Harsh23Kashyap 在 https://github.com/infiniflow/ragflow/pull/16361 中输入的上游关键字
*壮举（代理）：在https://github.com/infiniflow/ragflow/pull/16050中添加@connerlambden的BGPT结构化文献证据搜索工具
* 修复（deepdoc）：在 https://github.com/infiniflow/ragflow/pull/16423 中通过 @Harsh23Kashyap 解析无正文 HTML 片段
* 修复（qa）：通过@Harsh23Kashyap在https://github.com/infiniflow/ragflow/pull/16433中保留最终的CSV对行号
* 在 https://github.com/infiniflow/ragflow/pull/16491 中通过 @qinling0210 在 go 中实现聊天补全
* 修复（api）：https://github.com/infiniflow/ragflow/pull/16364 中 @Harsh23Kashyap 的租户模型回退到工厂 max_tokens
* 修复（harness）：在 https://github.com/infiniflow/ragflow/pull/16511 中截断符文边界上的文本以保持 UTF-8 有效（@feizhuzheng）
* feat(frontend): 在 https://github.com/infiniflow/ragflow/pull/16525 中为 @euvre 的授权图像请求添加 AuthenticatedImg 组件
* 通过 https://github.com/infiniflow/ragflow/pull/16520 中的 @qinling0210 修复 GO 中的 GetProjectRoot
* 重构：在 https://github.com/infiniflow/ragflow/pull/16509 中将 context.WithCancel 替换为 t.Context by @blackflytech
* 修复：无法在https://github.com/infiniflow/ragflow/pull/16531中@Haruko386在代理页面中打开过滤器（没有代理标签...）
* Go CLI：修复https://github.com/infiniflow/ragflow/pull/16493中@JinHai-CN的列表提供商模型
* 修复：https://github.com/infiniflow/ragflow/pull/16530 中的 @euvre 将 Q&A 解析器 ID 键标准化为小写“qa”
*修复：当@Haruko386在https://github.com/infiniflow/ragflow/pull/16518中LLM不可用时，返回调用失败
* perf：在 set_graph() 中批量嵌入实体/边名称，以修复 https://github.com/infiniflow/ragflow/pull/16472 中的 @OSHA-B 在大图上的停顿 (#16205)
* 修复：https://github.com/infiniflow/ragflow/pull/16496 中 @xugangqiang 使用 .a 替换 pdfium/pdf_oxy/office_oxy 的 .so
* feat(agent)：报告准确的聚合令牌使用情况，并将会话/用户+输入/输出传播到 Langfuse，以供@ondery 在 https://github.com/infiniflow/ragflow/pull/16420 中运行代理
* 港口代理 PR 通过 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/16529 发送至 GO
* Feat/oss 解析器没有 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/16464 中的帖子
* feat(go-api) 会话消息由 @Hz-186 在 https://github.com/infiniflow/ragflow/pull/16517 中更新
* 修复（go）：https://github.com/infiniflow/ragflow/pull/16490 中 @Hz-186 的文档计数（以 kb 为单位）
* [Go] 修复允许 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16543 中为提供商提供重复密钥
* 修复：通过 @euvre 在 https://github.com/infiniflow/ragflow/pull/16528 中正确设置样式来提高普通角色徽章的可见性
* 通过 @yuzhichang 在 https://github.com/infiniflow/ragflow/pull/16537 中使用语义断言来稳定超时测试
* 修复：画布执行后关闭 MCP 会话，以防止 https://github.com/infiniflow/ragflow/pull/13295 中 @Br1an67 造成连接泄漏
* 修复：https://github.com/infiniflow/ragflow/pull/16523 中 @Haruko386 无法为 kb 中的文件添加元数据
* 修复：https://github.com/infiniflow/ragflow/pull/16498 中 @Haruko386 进行聊天时获取重复的 datasetID
* 修复：https://github.com/infiniflow/ragflow/pull/16489 中 @Haruko386 的数据集索引分块配置中的 JSONMap 扫描
* 修复（go）：接受https://github.com/infiniflow/ragflow/pull/16532中@Hz-186在列表块处理程序中禁用的块过滤器
* 修复(go): 代理在 https://github.com/infiniflow/ragflow/pull/16514 中通过 @Hz-186 探索多个 doc_id 的缩略图加载
* 修复(go): 代理设置通过https://github.com/infiniflow/ragflow/pull/16495中的@Hz-186更新清除DSL
* 重构：https://github.com/infiniflow/ragflow/pull/16539中@grandpig使用WaitGroup.Go来简化代码
* Go：修复https://github.com/infiniflow/ragflow/pull/16533中@JinHai-CN的lint
* 工作流程步骤由 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/16561 中分离到 go 或 python
*修复（go）：防止https://github.com/infiniflow/ragflow/pull/16522中的@Hz-186将文件夹移动到自身中
* 修复（go）：在 https://github.com/infiniflow/ragflow/pull/16544 中 @Hz-186 清除 rerunWithDelete 上的任务取消信号和块计数器
* [Python] 1，修复允许单点登录，2，更新密码以强制https://github.com/infiniflow/ragflow/pull/16556中的@wangq8重新登录
* 修复：为https://github.com/infiniflow/ragflow/pull/16550中@Haruko386的数据集搜索添加搜索关键字和过滤器
* 修复：@Haruko386 在 https://github.com/infiniflow/ragflow/pull/16542 中无法构建 go 后端
*修复：无法在https://github.com/infiniflow/ragflow/pull/16485中加载@Haruko386的块结果中的图片
* 壮举：在 https://github.com/infiniflow/ragflow/pull/16521 中添加 @xugangqiang 的 DOCX 解析器
* 修复（go）：在 https://github.com/infiniflow/ragflow/pull/16559 中通过 @Hz-186 共享聊天机器人会话 ID 长度
* 修复：通过 https://github.com/infiniflow/ragflow/pull/16571 中的 @dcc123456 增强 SessionChat 组件中的引用处理
* 修复：将 mcp 传递给 useExportMcp，以通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/16564 中获得正确的 JSON 导出文件名
* 修复：https://github.com/infiniflow/ragflow/pull/16563 中 @dcc123456 隐藏模型设置按钮及相关功能
* 文档：添加了 v0.26.3 release note。作者：https://github.com/infiniflow/ragflow/pull/16566 的 @writinwaters
* 在 https://github.com/infiniflow/ragflow/pull/16572 中添加 @myf-bee 的网络和构建启动步骤
* 修复：更正错误消息中的 download_deps.py 路径，并在 https://github.com/infiniflow/ragflow/pull/16557 中添加 @xugangqiang 的原生库文档
* feat(go)：通过 @RenzoMXD 在 https://github.com/infiniflow/ragflow/pull/15420 中实现 chatbots/<dialog_id>/info 和 searchbots/detail
* 修复：在 https://github.com/infiniflow/ragflow/pull/16562 中禁用 @xugangqiang 的代理测试
* 修复 graphrag 生成错误 - AttributeError: 'RedisDB' object has no attribute 'mget' by @wangq8 in https://github.com/infiniflow/ragflow/pull/16573
* 修复：https://github.com/infiniflow/ragflow/pull/16487 中 @euvre 对压缩 PDF 进行 PDF 页数检测
* 修复 Go：修复 @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/16552 中的 minio 端口问题
* 修复(go): 添加租户过滤器到https://github.com/infiniflow/ragflow/pull/16526中@Hz-186的文件查询
* 修复(go): https://github.com/infiniflow/ragflow/pull/16553 中 @Hz-186 删除块后的块统计信息
* 修复 https://github.com/infiniflow/ragflow/pull/16558 中 @qinling0210 的 GO 聊天思维和图形问题
* 港口代理 PR 至 GO - 2 by @qinling0210 在 https://github.com/infiniflow/ragflow/pull/16565
* 修复：通过 https://github.com/infiniflow/ragflow/pull/16575 中的 @dcc123456 将代理日志日期过滤器作为本地挂钟字符串发送
* 修复：在 https://github.com/infiniflow/ragflow/pull/16567 中通过 @Lynn-Inf 在内存列表中显示 model_id
* 修复 https://github.com/infiniflow/ragflow/pull/16576 中 @myf-bee 识别的工作流程文件类型
* 修复沙箱执行镜像在https://github.com/infiniflow/ragflow/pull/16577中无法通过@wangq8显示和下载
* 文档：更新 https://github.com/infiniflow/ragflow/pull/16574 中 @asiroliu 的自述文件和文档中对 v0.26.3 的版本引用

## 新贡献者
* @Taranum01 在 https://github.com/infiniflow/ragflow/pull/16413 中做出了第一个贡献
* @saltsalt123 在 https://github.com/infiniflow/ragflow/pull/15384 中做出了第一个贡献
* @connerlambden 在 https://github.com/infiniflow/ragflow/pull/16050 中做出了第一个贡献
* @feizhuzheng 在 https://github.com/infiniflow/ragflow/pull/16511 中做出了第一个贡献
* @blackflytech 在 https://github.com/infiniflow/ragflow/pull/16509 中做出了第一个贡献
* @grandpig 在 https://github.com/infiniflow/ragflow/pull/16539 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.26.2...v0.26.3

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.26.3` · 📅 发布：2026-07-02 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.26.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
