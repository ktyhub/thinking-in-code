---
title: "ragflow v0.27.2"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.27.2"
version: "v0.27.2"
published: "2026-09-10"
type: "patch"
lang: "zh"
---

# ragflow v0.27.2

## 新功能
- Agentic RAG：重构了Agentic RAG检索框架，显着提高了推理速度和基准性能。 ([#19046](https://github.com/infiniflow/ragflow/pull/19046)、[#19112](https://github.com/infiniflow/ragflow/pull/19112)、[#19172](https://github.com/infiniflow/ragflow/pull/19172)、[#19209](https://github.com/infiniflow/ragflow/pull/19209)、[#19424](https://github.com/infiniflow/ragflow/pull/19424)、[#19459](https://github.com/infiniflow/ragflow/pull/19459))
- 知识编译运行时设置（[#19254](https://github.com/infiniflow/ragflow/pull/19254)）
- 对知识编译管道实施速率限制（[#19156](https://github.com/infiniflow/ragflow/pull/19156)）
- 知识图显示总节点数和当前节点数（[#19142](https://github.com/infiniflow/ragflow/pull/19142)、[#19095](https://github.com/infiniflow/ragflow/pull/19095)、[#19114](https://github.com/infiniflow/ragflow/pull/19114)）
- 在实体名称上按 Enter 键时，图形搜索会突出显示节点（[#19320](https://github.com/infiniflow/ragflow/pull/19320)）
- 用于基于 sitemap.xml 的 Web 摄取的新 Sitemap 数据源（[#19344](https://github.com/infiniflow/ragflow/pull/19344)）
- WebDAV 连接器支持自定义 CA 证书（[#16901](https://github.com/infiniflow/ragflow/pull/16901)）
- MonkeyOCRv2 解析支持（[#18887](https://github.com/infiniflow/ragflow/pull/18887)）
- 自托管 PaddleOCR-VL 部署支持（[#19011](https://github.com/infiniflow/ragflow/pull/19011)）
- 新的 Sofya 特工搜索工具 ([#19323](https://github.com/infiniflow/ragflow/pull/19323))
- EPUB 文档预览 ([#19242](https://github.com/infiniflow/ragflow/pull/19242))
- Excel 引用源位于文档预览中 ([#18853](https://github.com/infiniflow/ragflow/pull/18853))

## 模型支持
- 新的 Hubris 模型提供商 ([#19341](https://github.com/infiniflow/ragflow/pull/19341))
- 新的 llmman 模型提供程序（[#19030](https://github.com/infiniflow/ragflow/pull/19030)）

## 改进
- 新的 RERANK_TOKEN_LIMIT_MODE 配置（[#19404](https://github.com/infiniflow/ragflow/pull/19404)）
- 在检索测试和搜索中突出显示（[#18981](https://github.com/infiniflow/ragflow/pull/18981)）
- 相似度阈值显示为百分比（[#18974](https://github.com/infiniflow/ragflow/pull/18974)）

## 用户界面/用户体验
- 完成土耳其语言环境（[#19009](https://github.com/infiniflow/ragflow/pull/19009)）
- 在团队设置表中搜索突出显示的比赛 ([#15985](https://github.com/infiniflow/ragflow/pull/15985))

## 错误修复
- 修复了聊天中上传的图像被视觉模型忽略的问题 ([#18884](https://github.com/infiniflow/ragflow/pull/18884))
- 修复了 CSV/TXT 预览和文档解码中的非 UTF-8 编码（[#19222](https://github.com/infiniflow/ragflow/pull/19222)、[#19253](https://github.com/infiniflow/ragflow/pull/19253)）

## 发生了什么变化
* 修复（agentic_rag）：在 https://github.com/infiniflow/ragflow/pull/18927 中的 @chakshu-dannawat 在 RAGTools.sys_prompt() 中包含配置的系统提示符
* 修复（web）：使侧边栏 i18n 反应并通过 @yooxdb 在 https://github.com/infiniflow/ragflow/pull/16646 中细化模板卡/图标 UI
* 修复（数据集）：通过 https://github.com/infiniflow/ragflow/pull/18877 中的 @6ba3i 将解析器方法顺序与 python 对齐
* feat(webdav): 支持 @taek105 在 https://github.com/infiniflow/ragflow/pull/16901 中自定义 CA 证书
* 修复 https://github.com/infiniflow/ragflow/pull/16993 中 @zcxGGmu 的 Azure 嵌入端点处理
* 修复 go: 在 https://github.com/infiniflow/ragflow/pull/18944 中迁移 @myf-bee 丢失的表聊天频道
* Python && Go: 修复https://github.com/infiniflow/ragflow/pull/18841中@JinHai-CN的解析状态
* 修复（ollama）：在 https://github.com/infiniflow/ragflow/pull/17013 中保留@iwasaki1112 在 OllamaCV 中的本机 API 基本 URL
* 修复（文件）：停止 is_parent_folder_exist 在 https://github.com/infiniflow/ragflow/pull/18930 中由 @marmar9615-cloud 引发缺失的父级
* 修复（代理）：通过 @Lem0nTea2002 在 https://github.com/infiniflow/ragflow/pull/18869 中强制执行 MCP 任务截止日期
* 修复：https://github.com/infiniflow/ragflow/pull/18947 中的 @anupamme 将 starlette 升级到 1.3.1 (CVE-2026-54283)
* 重构：删除https://github.com/infiniflow/ragflow/pull/17682中@noron12234未使用的discord_svr.py机器人脚本
* 重构：将工具提示内的所有 url 设为 https://github.com/infiniflow/ragflow/pull/18943 中 @wangq8 的链接
* Py: 在https://github.com/infiniflow/ragflow/pull/18867中@JinHai-CN列出数据同步日志时在选择列表中添加update_time
* 修复：在 https://github.com/infiniflow/ragflow/pull/17105 中@huang-aoqin 在文件下载 Content-Disposition 标头中包含文件名
*修复（嵌入）：drop_params：True被https://github.com/infiniflow/ragflow/pull/18627中的@Harsh23Kashyap的Together AI和其他严格的提供商拒绝
* 修复(rag): Infinity field_map 键为原始列名，而不是https://github.com/infiniflow/ragflow/pull/18318 中@Taranum01 的拼音
* feat(go-syncer)：通过 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/18961 中添加 Zendesk 连接器
* 修复：从检索操作符中删除空响应字段。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/18963
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/18964中通过@6ba3i拒绝小数整数DSL参数
* 修复：更新工具提示 URL 以更正 https://github.com/infiniflow/ragflow/pull/18966 中 @wangq8 的链接
* 修复：引入argparse来解析https://github.com/infiniflow/ragflow/pull/16763中@Ricardo-shuo-liu在SDK测试文件中的硬编码参数值
* 修复 https://github.com/infiniflow/ragflow/pull/18971 中 @wangq8 的数据集 LLM 工具提示
*修复（web）：当https://github.com/infiniflow/ragflow/pull/18967中的@dcc123456编辑的解析器节点无效时，阻止保存代理
* 修复（摄取）：在https://github.com/infiniflow/ragflow/pull/18774中通过@euvre在管道操作日志DSL中携带组件输出
* feat(web)：通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/18974 中以百分比形式显示相似度阈值
*修复（代理）：让全局变量textareas在https://github.com/infiniflow/ragflow/pull/18972中通过@dcc123456垂直调整大小
*修复（web）：通过https://github.com/infiniflow/ragflow/pull/18969中的@dcc123456阻止注释节点调整大小句柄覆盖其文本区域
* 修复（数据流）：在 https://github.com/infiniflow/ragflow/pull/18801 中的 @euvre 在 Go 管道中解析之前解码非 UTF-8 HTML 文件
* 修复（解析器）：当https://github.com/infiniflow/ragflow/pull/18793中的@euvre启用remove_toc时，删除合并块和包装的PDF TOC条目
* 修复Go版本数据集配置页面，必填项留空时保存时不会出现错误提示的问题。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18970
* 修复https://github.com/infiniflow/ragflow/pull/18975中@wangq8的工具提示错误网址
* 修复（管理员）：停止在身份验证探针上静默创建超级用户，并通过 @simpleqt 在 https://github.com/infiniflow/ragflow/pull/18702 中强化引导程序
* 文档（deepdoc）：通过https://github.com/infiniflow/ragflow/pull/18820中的@marmar9615-cloud将构建示例指向Docker文件的真实路径
* 修复：对于 doc、docx 或 markdown 格式的数据集，“删除原始目录”切换无法成功保存。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18976
* 修复（ingestor，nats）：恢复消耗，在 NATS 启动时快速失败并通过 https://github.com/infiniflow/ragflow/pull/18942 中的 @jay77721 强化协调（P0 拦截器）
* 修复（聊天）：https://github.com/infiniflow/ragflow/pull/18978 中 @cike8899 对 ChatPromptEngine 中的重新排序和跨语言表单字段进行重新排序
* 修复：删除 https://github.com/infiniflow/ragflow/pull/18977 中@Lynn-Inf 已弃用的 qwen tts 模型
* 壮举（模型）：在 https://github.com/infiniflow/ragflow/pull/18973 中添加 @chyroc 的 13 个 Volcengine Ark 聊天模型
* 修复(agent): https://github.com/infiniflow/ragflow/pull/18979中@6ba3i无法保存用户添加的空条目
* 功能：在https://github.com/infiniflow/ragflow/pull/18981中添加@wangq8检索测试和搜索的突出显示
* 文档：修复https://github.com/infiniflow/ragflow/pull/18984中@Yannnnnnnny文档的一些错误
* 修复：将 kb id 传递到 https://github.com/infiniflow/ragflow/pull/18985 中@muhzuhaib 的 wiki 页面插入错误警告
* 通过@yingfeng在https://github.com/infiniflow/ragflow/pull/18798中细化代理搜索
* @yingfeng 在 https://github.com/infiniflow/ragflow/pull/19000 中重构代理搜索
* feat(parser)：零分配符文计数、bmp/tiff 解码器和干净的 OCR 门测试 (#18794) 由 @avikumart 在 https://github.com/infiniflow/ragflow/pull/18829 中
* 壮举（数据流）：https://github.com/infiniflow/ragflow/pull/18881 中 @xugangqiang 的工具提示中的上限调试运行块预览和表面运行限制
* 修复（代理）：通过 @T1mn 在 https://github.com/infiniflow/ragflow/pull/18883 中将 Webhook 跟踪保留为 JSON 对象
* 壮举：在 https://github.com/infiniflow/ragflow/pull/18853 中@huang-aoqin 的文档预览中找到 Excel 引用源
* 修复(agentic_rag): 返回@yzl0ng在https://github.com/infiniflow/ragflow/pull/19012中的计算工具结果
* 重构：https://github.com/infiniflow/ragflow/pull/19033 中的 @wangq8 将相似性阈值工具提示从 0.2 更新为 20
* 恢复 https://github.com/infiniflow/ragflow/pull/19034 中 @wangq8 的“重构：将相似性阈值工具提示从 0.2 更新为 20”
* 重构：https://github.com/infiniflow/ragflow/pull/19036 中的 @wangq8 将相似性阈值工具提示从 0.2 更新为 20
*修复（agentic_rag）：规范化https://github.com/infiniflow/ragflow/pull/19025中@yzl0ng的结构答案
* 修复：https://github.com/infiniflow/ragflow/pull/19038 中 @cike8899 限制自动标签的输入框仅接受整数
* @yingfeng 在 https://github.com/infiniflow/ragflow/pull/19040 中重构代理搜索
* 通过 @qinling0210 修复 https://github.com/infiniflow/ragflow/pull/19037 中的 llm.py
* 功能：支持@maxiaolong03在https://github.com/infiniflow/ragflow/pull/19011中自托管PaddleOCR-VL部署
*修复（解析器）：使PDF“删除目录”和“删除页眉/页脚”选项在https://github.com/infiniflow/ragflow/pull/18602中的@euvre没有DeepDoc推理的情况下工作
* feat(deepdoc)：https://github.com/infiniflow/ragflow/pull/18731 中的 @xugangqiang 的进程内静态链接 ONNX 运行时 DeepDoc 后端
* feat(go-syncer)：通过https://github.com/infiniflow/ragflow/pull/18968中的@mkaaad添加具有延迟获取和恢复功能的OneDrive连接器
* 修复(agent): 允许在 https://github.com/infiniflow/ragflow/pull/16925 中通过 @huang-aoqin 删除画布上迭代内的边缘
* 修复（web）：警告@euvre在https://github.com/infiniflow/ragflow/pull/18993中保存的代理上的空消息组件内容
* 修复（rag/nlp）：在 https://github.com/infiniflow/ragflow/pull/18473 中使用 @immuhammadfurqan 的重新排序模型进行重新排序时包含 Question_tks
* 修复(api): 返回每个数据集顶层的解析状态计数 (#17595) by @Anai-Guo in https://github.com/infiniflow/ragflow/pull/17611
* 修复：通过 @FJH886 在 https://github.com/infiniflow/ragflow/pull/17592 中的 chat_template_kwargs 传递 Qwen3 enable_thinking
* 修复（常见）：从 https://github.com/infiniflow/ragflow/pull/17588 中的 @Harsh23Kashyap 编辑 ConnectorRunner 错误日志中的 OAuth / API 凭据
* 修复（rag）：从 https://github.com/infiniflow/ragflow/pull/16377 中的 @Harsh23Kashyap 的 kb_prompt 代币预算中排除溢出块
*修复（聊天）：当LLM缺乏https://github.com/infiniflow/ragflow/pull/18983中@georgelichen的工具调用时，保持推理聊天接地
* 添加go构建文件，减小镜像大小，通过https://github.com/infiniflow/ragflow/pull/19041中的@myf-bee更新entrypoint-go.sh
* 修复（代理）：通过 https://github.com/infiniflow/ragflow/pull/18505 中的 @uczltw6 清理 Excel 输出表名称
* 修复（迁移）：解析 https://github.com/infiniflow/ragflow/pull/18817 中 @marmar9615-cloud 的 --config 标志使用行文档
* feat(go-syncer)：通过 https://github.com/infiniflow/ragflow/pull/19032 中的 @mkaaad 添加具有延迟获取和恢复功能的 Airtable 连接器
* 修复(web): https://github.com/infiniflow/ragflow/pull/19051 中 @dcc123456 默认 NumberInput 精度为 2
*修复（docker）：让后端启动器重试循环实际上由https://github.com/infiniflow/ragflow/pull/18926中的@marmar9615-cloud运行
* 修复：https://github.com/infiniflow/ragflow/pull/19052 中 @buua436 允许在令牌计数中使用特殊令牌
* 修复：https://github.com/infiniflow/ragflow/pull/15964 中 @BaptisteJosh 存储的 None parser_config 值上的 KnowledgebaseService.dfs_update 崩溃
* 文档：在 https://github.com/infiniflow/ragflow/pull/19057 中添加 @Yannnnnnnny 的搜索文档
* 修复：@wangq8 在 https://github.com/infiniflow/ragflow/pull/19045 中编译+转换器（提取器）的管道不起作用
* 修复(agent): 当 Agent 节点在 https://github.com/infiniflow/ragflow/pull/18996 中没有 @euvre 选择的模型时，在保存时发出警告
*修复（dify）：搜索数据集所有者的索引，而不是https://github.com/infiniflow/ragflow/pull/18987中@marmar9615-cloud的调用者的索引
* 修复(rag): 从https://github.com/infiniflow/ragflow/pull/16398中@Harsh23Kashyap的BaiduYiyanencode_queries返回一维向量
* feat(web)：通过 https://github.com/infiniflow/ragflow/pull/19009 中的 @bakiburakogun 完成土耳其语言环境并修复损坏的占位符
* 修复：CliGo版本数据集配置页面点击保存按钮会自动定位到出错的字段。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19061
*修复（sdk）：拒绝https://github.com/infiniflow/ragflow/pull/19047中@WOLIKIMCHENG的冲突数据集ID过滤器
* 修复（内存）：恢复https://github.com/infiniflow/ragflow/pull/19002中@anneheartrecord在Go TYPE_INSTRUCTIONS中的Python侧规则
* 在 https://github.com/infiniflow/ragflow/pull/19010 中恢复 @georgelichen 聊天中可见的 Markdown 列表样式
* 修复（serenedb）：在 https://github.com/infiniflow/ragflow/pull/18928 中保留 @marmar9615-cloud 的 available_int=0 块过滤器
* 修复（confluence）：停止将开始/结束传递给https://github.com/infiniflow/ragflow/pull/18995中@Anai-Guo的_retrieve_all_slim_docs
* 修复：在https://github.com/infiniflow/ragflow/pull/19016中通过@martincivan检索助手的配置设置
* feat(go-syncer)：在 https://github.com/infiniflow/ragflow/pull/19049 中添加 @mkaaad 的带有简历和修剪的 Asana 连接器
* 修复（web）：通过 https://github.com/infiniflow/ragflow/pull/19062 中的 @dcc123456 缩短 wiki 选项卡的空状态副本
* 修复（聊天）：https://github.com/infiniflow/ragflow/pull/18884 中@euvre 的视觉模型（代理循环/Go 附件掉落）忽略了聊天 UI 中上传的图像
* 修复(web): https://github.com/infiniflow/ragflow/pull/19072中@dcc123456在执行SQL表单中绑定端口和最大记录
* Feat：列出解析器操作符的所有文件类型解析配置。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19050
* 文档：删除https://github.com/infiniflow/ragflow/pull/19078中@Yannnnnnnny的冗余文档
* 修复：始终使用 https://github.com/infiniflow/ragflow/pull/16711 中 @OSHA-B 的 Confluence 附件/页面标识符的完整分层路径
* 修复：通过 https://github.com/infiniflow/ragflow/pull/19069 中 @yiheng-kkk 解析的嵌入模型名称来比较数据集
* 修复（测试）：为 rag_agent 对话框存根提供它现在由 @marmar9615-cloud 在 https://github.com/infiniflow/ragflow/pull/19081 中读取的检索设置
* Go：@JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/19084 中重构
*修复（搜索）：尊重缓存的文档删除标志，以便删除的文档保持由https://github.com/infiniflow/ragflow/pull/19070中的@marmar9615-cloud修剪
* 修复（代理）：防止 https://github.com/infiniflow/ragflow/pull/19026 中的 @T1mn 并发 webhook 跟踪覆盖
* feat(agent): 在 https://github.com/infiniflow/ragflow/pull/19066 中 @huang-aoqin 在画布上公开 Iteration max_concurrency
* feat(go-syncer)：通过 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/19073 中添加 SeaFile 连接器
* 修复（代理）：避免 https://github.com/infiniflow/ragflow/pull/19023 中 @alaningtrump 共享 StringTransform 合并参数
* 修复 @martincivan 在 https://github.com/infiniflow/ragflow/pull/19015 中不发送空工具数组的问题
* 修复（go）：通过 @euvre 在 https://github.com/infiniflow/ragflow/pull/18254 中解析每张幻灯片一个 PPTX 块
* 修复（摄取）：https://github.com/infiniflow/ragflow/pull/19074 中的 @jay77721 使 NATS 任务调度不会崩溃
* @yingfeng 在 https://github.com/infiniflow/ragflow/pull/19046 中重构代理搜索
* 修复（go-syncer）：始终使用 Confluence iden 的完整分层路径…作者：https://github.com/infiniflow/ragflow/pull/19085 中的 @mkaaad
* 修复（web）：回退到后端默认设置，以取消 https://github.com/infiniflow/ragflow/pull/19079 中 @LuckTerence 的搜索 LLM 参数
* 重构：为list_models添加context_length并通过https://github.com/infiniflow/ragflow/pull/19075中的@Haruko386重构content_length
* CI ：修复 ci 步骤 ragflow_native_backend 需要 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/19086 中满足以下条件
* 修复2张连续图像，第一张图像被@wangq8在https://github.com/infiniflow/ragflow/pull/19083中丢失
* 重构：在 https://github.com/infiniflow/ragflow/pull/19095 中添加 @wangq8 的总计/返回实体/关系
* 修复（nats）：对https://github.com/infiniflow/ragflow/pull/19099中@jay77721的所有JetStream工作队列流使用DiscardNew
* 修复（代理）：完成 https://github.com/infiniflow/ragflow/pull/19089 中@T1mn 中断的 webhook 跟踪
* 修复(内存): 将关键字权重放入https://github.com/infiniflow/ragflow/pull/18989中@marmar9615-cloud的融合表达式的文本槽中
* 修复（代理）：仅拒绝 @euvre 在 https://github.com/infiniflow/ragflow/pull/19048 中保存的画布上真正为空的分隔符条目
* 修复（web）：在 https://github.com/infiniflow/ragflow/pull/19087 中通过@T1mn 尊重 webhook 跟踪终端状态
* feat(go-syncer)：通过 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/19106 中添加 BigQuery 连接器
* 修复：测试数据库连接失败且重复错误。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19102
* 修复：允许删除提取器操作员表单中选定的标签。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19097
* 修复（代理）：防止 https://github.com/infiniflow/ragflow/pull/19053 中的 @euvre 创建时在一个代理节点上出现重复工具
* Go：添加上下文，第 5 部分，作者：@JinHai-CN，https://github.com/infiniflow/ragflow/pull/19108
* 修复（文档预览）：将 xlsx 工作表选项卡保留在一行上，删除 https://github.com/infiniflow/ragflow/pull/19105 中 @dcc123456 的重复获取
* 修复（内存）：在 https://github.com/infiniflow/ragflow/pull/19109 中使用 @dcc123456 共享的 NumberInput 作为温度字段
*修复：通过https://github.com/infiniflow/ragflow/pull/19115中的@Lynn-Inf检查minerU.net连接
* 修复 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/19059 中返回 500 包装器中未找到数据集错误的错误
* 修复（agentic_rag）：https://github.com/infiniflow/ragflow/pull/19112 中的 @Caobaining1 修复了表感知检索截断 + 动作会话循环保护
* 修复：通过 HTTP API- #13297 by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19116 解析文档时使用默认管道配置
* 文档：由 @Yannnnnnnny 在 https://github.com/infiniflow/ragflow/pull/19077 中更新术语表文档
* 修复（代理）：通过 @Lem0nTea2002 在 https://github.com/infiniflow/ragflow/pull/18796 中的消息传播延迟流错误
* 构建：通过 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/19124 中将 office_oxy 碰撞到 v0.1.9 并将 pdf_oxy 碰撞到 v0.3.73
* 构建（deps）：由 @dependabot[bot] 在 https://github.com/infiniflow/ragflow/pull/19128 中将 /web 中的 Nanoid 从 3.3.11 提升到 3.3.18
* 修复(deepdoc): 强化 ORT 构建防护，OCR 测试合约由 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/19082 中完成
* 修复（解析器）：通过 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/18192 中的结构化 IR 提高传统 .doc 解析保真度
* 构建（deps）：通过 https://github.com/infiniflow/ragflow/pull/19127 中的 @dependabot[bot] 将 google.golang.org/grpc 从 1.82.1 提升到 1.83.1
*修复（utils）：在https://github.com/infiniflow/ragflow/pull/19031中舍入minimum_should_match分数而不是通过@RahilOp截断
*修复（docker）：在https://github.com/infiniflow/ragflow/pull/19126中禁用@dynnfa挂载过时的macOS nginx
*修复（测试）：期望https://github.com/infiniflow/ragflow/pull/19132中@marmar9615-cloud发出的下载路径的裸附件配置
* 测试（分块）：通过 @Taranum01 在 https://github.com/infiniflow/ragflow/pull/18315 中固定当前的 applyChildrenDelimText 行为（#17876 部分覆盖）
* 修复(rag/app/table): 在https://github.com/infiniflow/ragflow/pull/18460中保留@OmarFaig无法表示列类型转换的表格单元格
* 修复（文件）：修复链接文件夹始终使用“添加”并使用 API 结果刷新 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/19134 中的链接数据集
* 修复（集成）：在 https://github.com/infiniflow/ragflow/pull/19107 中注册进程内 DeepDoc 后端 + 纠正 @xugangqiang 的陈旧块/knn 断言
* 重构：在 https://github.com/infiniflow/ragflow/pull/19114 中添加 @wangq8 的总计/返回实体/关系 2
* 修复（标记）：阻止 https://github.com/infiniflow/ragflow/pull/18991 中 @marmar9615-cloud 的非对象 LLM 回复使整个批次失败
* Feat：显示ArtifactForceGraph中的总节点数和当前节点数。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19142
* 修复（代理）：当 @euvre 在 https://github.com/infiniflow/ragflow/pull/18955 中选择输出文件类型时恢复消息下载按钮
*构建（deps）：通过https://github.com/infiniflow/ragflow/pull/19129中的@dependabot [bot]将nltk从3.10.0提升到3.10.3
* 修复(mcp): 绑定元数据缓存并防止 https://github.com/infiniflow/ragflow/pull/19138 中 @6ba3i 进行部分分页缓存
* feat(ingestor)：通过https://github.com/infiniflow/ragflow/pull/19133中的@jay77721将默认的max_concurrent_workers从1提高到2
* 修复（摄取）：在 https://github.com/infiniflow/ragflow/pull/19088 中通过 @jay77721 保留恢复时的运行输入并分离上下文以进行终端清理
* 修复（代理）：在https://github.com/infiniflow/ragflow/pull/19149中通过@6ba3i保存画布时拒绝空消息行
* 修复：链接到现有数据集，通过 https://github.com/infiniflow/ragflow/pull/19143 中的 @wangq8 清理文档块
* 修复：默认隐藏忘记的消息。作者：@Lynn-Inf，https://github.com/infiniflow/ragflow/pull/19144
*修复（解析器）：在https://github.com/infiniflow/ragflow/pull/17014中等待@iwasaki1112的视觉图期货时传播取消
* 测试（deepdoc）：在https://github.com/infiniflow/ragflow/pull/19139中添加@xugangqiang的1.pdf colspan端到端重放测试
* 重构（go-syncer）：通过https://github.com/infiniflow/ragflow/pull/19146中的@mkaaad帮助器路由GetConnector访问错误
* 修复 https://github.com/infiniflow/ragflow/pull/19007 中的文件扩展名丢失或 @blueOf 不支持时音频分块器中的名称错误
* 杂务（deepdoc）：从 https://github.com/infiniflow/ragflow/pull/19136 中的 @xugangqiang 从 infiniflow/ragflow-testdata 获取本机测试数据
* feat(nats)：通过 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/19148 中为缓存命名空间添加共享 NatsKVStore 帮助程序
* 修复：在 https://github.com/infiniflow/ragflow/pull/19140 中对齐 @buua436 的 wiki 更改出处
* 修复（mcp）：读取total_datasets，以便https://github.com/infiniflow/ragflow/pull/19020中的@xu-jia-ming可以获取所有提前退出
* 修复：https://github.com/infiniflow/ragflow/pull/19155 中@Lynn-Inf 将租户更新限制为当前用户自己的租户
* 重构：删除https://github.com/infiniflow/ragflow/pull/19164中@wangq8未使用的代码
* 修复：在 https://github.com/infiniflow/ragflow/pull/19125 中通过@Lynn-Inf 保存时检查所需的 dataset_id/memory_id
* 修复：从编译器操作符中删除模式。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19150
* 修复（dify）：返回处理程序已由 @marmar9615-cloud 在 https://github.com/infiniflow/ragflow/pull/19123 中获取的自定义文档元数据
* 文档：更新文档以与 @Yannnnnnnny 在 https://github.com/infiniflow/ragflow/pull/19163 中的当前 Python API 实现保持一致
* 修复（deepdoc）：https://github.com/infiniflow/ragflow/pull/18888 中的 @Harsh23Kashyap 将 TextDetector limit_side_len 默认值从 960 提高到 2048 (#18509)
* 重构(pptx)：简化 buildPPTXJSONSections + 删除 Python 兼容的措辞（#19076 的后续 1+2），@Harsh23Kashyap 在 https://github.com/infiniflow/ragflow/pull/19098 中
* 修复（解析器）：https://github.com/infiniflow/ragflow/pull/19147 中 @xugangqiang 的 .doc 更喜欢结构化 IR，而不是扁平化视图
* 文档（示例）：在 https://github.com/infiniflow/ragflow/pull/19153 中添加 @6ba3i 的文档生命周期 API 示例
* 修复：在 REST API 中通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19161 中删除 parser_config 中的 graphrag raptor
* 构建（deps-dev）：通过 https://github.com/infiniflow/ragflow/pull/19170 中的 @dependabot[bot] 将 /web 中的浏览器列表从 4.28.1 提升到 4.28.8
* 修复（文件）：https://github.com/infiniflow/ragflow/pull/19157 中@6ba3i 将祖先授权失败分类为数据错误
* 修复(web): 当https://github.com/infiniflow/ragflow/pull/19167中的@dcc123456夹紧时让可编辑的描述文本区域滚动
* 修复：将搜索页面的重新排序模型设置为必填字段。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19154
* 修复：数据集文件列表和文件管理中的全选选项现在仅适用于当前页面；切换页面会清除之前的选择。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19158
* 修复：在https://github.com/infiniflow/ragflow/pull/19186中通过@wangq8更改密码或将用户设置为非活动状态时使用户无效
*构建（deps）：通过@dependabot [bot]在https://github.com/infiniflow/ragflow/pull/19171中将pypdf从6.15.0提升到6.16.1
* https://github.com/infiniflow/ragflow/pull/18713 中的 @devYRPauli 停止将简历文档拆分为每页解析任务
* 调整https://github.com/infiniflow/ragflow/pull/19172中@yingfeng的代理搜索导航工具
* 修复（解析器）：根据 https://github.com/infiniflow/ragflow/pull/19182 中的 @devYRPauli 的主机时区停止 .msg 日期测试
* 修复（searchbots）：在 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/19165 中检索之前强制执行 KB 授权
* 构建（deps）：通过https://github.com/infiniflow/ragflow/pull/19192中的@dependabot[bot]将/web中的qs从6.14.0提升到6.16.0
*构建（deps）：通过https://github.com/infiniflow/ragflow/pull/19191中的@dependabot[bot]将/web中的快速uri从3.1.5提升到3.1.7
* 重构：在https://github.com/infiniflow/ragflow/pull/19194中@wangq8创建任务期间摆脱graphrag和raptor
* 修复：后端API没有从wiki返回默认蓝图模板。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19131
* 构建（deps）：https://github.com/infiniflow/ragflow/pull/19193 中的 @dependabot[bot] 将 Misune 从 3.3.0 提升到 3.3.3
* @devYRPoli 在 https://github.com/infiniflow/ragflow/pull/19008 中的 CSV QA 对需要两个单元格
* 修复（py-go-connector）：在 https://github.com/infiniflow/ragflow/pull/19190 中 @mkaaad 重建时强制执行 kb 授权
* feat(ingestion)：https://github.com/infiniflow/ragflow/pull/19137 中 @jay77721 的表面排队文档任务状态
* 修复（安全）：在 https://github.com/infiniflow/ragflow/pull/19159 中通过 @6ba3i 生成随机 UUIDv4 标识符
* 重构（摄取）：通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/19189 中统一内存任务执行和心跳租约
* 修复（pdf）：@helloxjade 在 https://github.com/infiniflow/ragflow/pull/16079 中默认使 _table_transformer_job 遵守 TABLE_AUTO_ROTATE
* 修复（存储）：通过 @Huang-404-Q 在 https://github.com/infiniflow/ragflow/pull/19162 中使存储桶删除在 AWS_S3 后端工作
* 修复 https://github.com/infiniflow/ragflow/pull/15683 中 @zz80900 的 OAuth 重定向 URI 示例
* 文档：在 https://github.com/infiniflow/ragflow/pull/19177 中添加 @helloxjade 的 macOS vm.max_map_count 设置指南
* 重构：不再使用默认模板 _0 by @wangq8 in https://github.com/infiniflow/ragflow/pull/19204
* 修复/最终答案流阶段不会被 https://github.com/infiniflow/ragflow/pull/19209 中 @Caobaining1 的研究预算打断
* 开发：launch_backend_service.sh 支持 https://github.com/infiniflow/ragflow/pull/19215 中 @wangq8 的 --debug
* 修复：隐藏https://github.com/infiniflow/ragflow/pull/19205中@cike8899的技能条目
* 修复：仅安装 oxlint 和 oxfmt 以确保 CI 检查 Web 文件。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19197
* 重构（解析器）：通过https://github.com/infiniflow/ragflow/pull/19135中的@xugangqiang将docElementText折叠为docxElementText
* 修复（存储）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/19199 中处理版本化 S3 存储桶删除
* 修复（rag）：在https://github.com/infiniflow/ragflow/pull/19058中通过@euvre统一parser_config定界符默认为单个常量
* 修复（数据集）：https://github.com/infiniflow/ragflow/pull/19213 中的 @6ba3i 对未知权限关闭失败
* [Go] 修复 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19201 中开关嵌入报告错误
* 修复（动态形式）：允许 https://github.com/infiniflow/ragflow/pull/19212 中的 @dcc123456 在分段字段中使用非字符串值（#15106）
* 修复（存储）：https://github.com/infiniflow/ragflow/pull/19217 中的 @6ba3i 正确配置单桶 S3 删除范围
* 壮举：@ericcurtin 在 https://github.com/infiniflow/ragflow/pull/19030 中添加 llmman 作为模型提供者
* 修复：删除特工物品后过滤器数据没有更新。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19220
* 修复（预览）：通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/19222 中处理 CSV/TXT 预览中的非 UTF-8 编码
* 修复：https://github.com/infiniflow/ragflow/pull/19216 中@buua436 规范化推理流标记
* @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/19224 中重构 deepdoc 后端寄存器
* 重构（go）：通过https://github.com/infiniflow/ragflow/pull/19225中的@jay77721将messagefit合并到内部/标记器中
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/19090中接受@euvre在检索代理工具上的user_id节点参数
* 文档：通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19227 中更新索引器
* 修复（model_meta）：在 https://github.com/infiniflow/ragflow/pull/19210 中发现 @dawNotPoi 的 TEI 重排序模型
*修复（代理）：有线文档服务，以便数据流重新运行，而不是https://github.com/infiniflow/ragflow/pull/19094中@euvre的500ing
* 壮举：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/19156 中调整知识编译并发性
*修复（摄取）：将xlsx QA JSON表项路由到https://github.com/infiniflow/ragflow/pull/19198中的@leilei3167提取QATable
* 修复 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/19251 中安装的包“wordnet”中未找到 ci 单元测试
* 修复（解析器）：支持 https://github.com/infiniflow/ragflow/pull/19243 中 @jay77721 跨文本、csv 和 epub 解析器的非 UTF-8 解码
* 修复 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19230 中重新排名时丢失的 content_ltks
* 修复（chunker）：将画布 TokenChunker 默认分隔符与 https://github.com/infiniflow/ragflow/pull/19226 中 @xugangqiang 的通用解析器对齐
* 杂务（deps）：依赖https://github.com/infiniflow/ragflow/pull/19169中@xugangqiang的组织镜像infiniflow/onnxruntime_go
* 测试（web）：在https://github.com/infiniflow/ragflow/pull/19240中由@Harsh23Kashyap覆盖所有五个解码器分支上的decodeBlobText
* 修复（解析器）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/19253 中解码非 UTF-8 文档文本
*修复（token_utils）：在第一次使用时构建tiktoken编码器，而不是在https://github.com/infiniflow/ragflow/pull/18986中由@marmar9615-cloud导入时构建
* 修复：在https://github.com/infiniflow/ragflow/pull/19257中通过@Lynn-Inf将图像上传到聊天中的模型
* 修复（摄取日志）：在 https://github.com/infiniflow/ragflow/pull/19261 中通过 @6ba3i 标准化数据集状态过滤器
* 修复（摄取）：在 https://github.com/infiniflow/ragflow/pull/19231 中 @euvre 显示失败解析日志条目的数据管道
* 修复（web）：通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/19260 中清理导致 Excel 预览器崩溃的工作表名称
* 修复：在 https://github.com/infiniflow/ragflow/pull/19228 中使用 @Lynn-Inf 模板时检查必填字段
* 修复：清除首页以外页面的数据后，过滤器和搜索框中的数据也会被清除。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19255
*功能（预览）：在https://github.com/infiniflow/ragflow/pull/19242中添加@dcc123456编码规范化的EPUB文档预览
* feat: 在https://github.com/infiniflow/ragflow/pull/19254中通过@buua436配置知识编译运行时设置
*修复：从https://github.com/infiniflow/ragflow/pull/19246中@buua436的结构更改中排除空文档
* 修复（web）：https://github.com/infiniflow/ragflow/pull/19263 中默认 Textarea 通过 @dcc123456 调整为垂直
* 修复：在 https://github.com/infiniflow/ragflow/pull/19214 中应用@Lynn-Inf 覆盖 dia.llm_id
* 修复：绑定模型响应由 @Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/19211 中读取
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/19093 中 @Lem0nTea2002 停止事件循环之前等待 MCP 传输清理
* 修复（数据集）：https://github.com/infiniflow/ragflow/pull/19249 中的 @dcc123456 表面 Go 摄取 QUEUED 状态和荣誉终端运行状态
* 修复（解析器）：通过 https://github.com/infiniflow/ragflow/pull/19264 中的 @jay77721 恢复无效的 XLSX 工作表名称
* CI：在 https://github.com/infiniflow/ragflow/pull/19232 中添加 @myf-bee 的 Dockerfile_go 构建和 api 测试
* 修复（网络）：使 tr 区域设置 capitalization 与 @bakiburakogun 在 https://github.com/infiniflow/ragflow/pull/19273 中的扩展标签保持一致
* feat(task_executor): 添加 MAX_TASKS_PER_WORKER 以通过 https://github.com/infiniflow/ragflow/pull/14501 中的 @HamsterPark 回收长时间运行的工作线程
* 修复（任务）：通过 @ump45nose 在 https://github.com/infiniflow/ragflow/pull/18089 中刷新过时的嵌入模型配置
* 修复（解析器）：处理 MinerU 图表块，而不是通过 @yaoper 在 https://github.com/infiniflow/ragflow/pull/19096 中默默地删除它们
* 修复（chunker）：防止 https://github.com/infiniflow/ragflow/pull/19068 中 @xugangqiang 的重叠头 PDF 位置的链式过度进位
* Perf：在https://github.com/infiniflow/ragflow/pull/19277中链接onnxruntime而不使用--whole-archive来减少@xugangqiang的二进制大小
* 文档（api）：使用@marmar9615-cloud在https://github.com/infiniflow/ragflow/pull/19279中读取的内存更新字段名称
*修复（api）：当@marmar9615-cloud在https://github.com/infiniflow/ragflow/pull/19280中同时给出id和ids来列出文档时，返回完整的错误元组
* 修复(cli): 在https://github.com/infiniflow/ragflow/pull/19285中通过@helloxjade传递搜索数量作为文件限制
* 修复：删除iconfont.js的assets目录下的图标。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19300
* 杂务：删除https://github.com/infiniflow/ragflow/pull/19311中@xugangqiang的DeepDoc Go对齐报告
* 修复(web): 禁止 https://github.com/infiniflow/ragflow/pull/19309 中 @dcc123456 在块创建模式中上传文件夹
* Go：@JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/19312 中重构
* 重构：更新数据集 API 不应在 https://github.com/infiniflow/ragflow/pull/19272 中包含 @wangq8 的 ext
* 文档：澄清 @liwu96 在 https://github.com/infiniflow/ragflow/pull/19321 中的 user_default_llm 弃用
* 修复：Click 创建代理；如果该名称已存在，则名称输入字段中将显示错误。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19324
* 修复(agent): 在 https://github.com/infiniflow/ragflow/pull/19282 中通过 @ebarkhordar 阻止上游同一批运行的节点
* 修复（内存）：恢复 https://github.com/infiniflow/ragflow/pull/19290 中 @AnnaSuSu 的 Infinity FIFO 驱逐和维护查询
* 修复（存储）：尊重 @AnnaSuSu 在 https://github.com/infiniflow/ragflow/pull/19291 中创建 Python S3 存储桶中的 client 区域
* 修复（web）：通过https://github.com/infiniflow/ragflow/pull/19328中的@dcc123456从远程存储库加载块方法示例图像
* feat(llm)：转发 OpenAI 用户在 https://github.com/infiniflow/ragflow/pull/19065 中嵌入和解析 @ondery 的请求
* 修复(mcp): 绑定文档元数据缓存，就像https://github.com/infiniflow/ragflow/pull/19022中@xu-jia-ming的数据集缓存一样
* 修复（exesql）：通过 @leilei3167 在 https://github.com/infiniflow/ragflow/pull/19266 中序列化画布 SSE JSON 的日期/时间列
* 修复（mcp）：在 https://github.com/infiniflow/ragflow/pull/19151 中终止 @Lem0nTea2002 的 Go Streamable HTTP 会话
* 文档：更新 API 引用以匹配 https://github.com/infiniflow/ragflow/pull/19334 中 @Yannnnnnnny 的实现
* feat(parser): 在 https://github.com/infiniflow/ragflow/pull/18887 中添加 @zenosai 的 MonkeyOCRv2-Parsing 支持
* 修复(web): 当https://github.com/infiniflow/ragflow/pull/19337中@dcc123456未选择标签时阻止块保存并显示错误
* 修复：@buua436 在 https://github.com/infiniflow/ragflow/pull/19329 中报告 wiki 地图超时错误
* 修复：清除座席列表中的数据后，对应的过滤器数据也必须清除。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19336
*修复（Excel）：在https://github.com/infiniflow/ragflow/pull/19175中删除@marmar9615-cloud的空白电子表格标题单元格的“无”标签
* 构建：使用稳定的动态列表路径由 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/19302 中导出 OrtGetApiBase
* 修复（api）：允许在https://github.com/infiniflow/ragflow/pull/16242中由@manan-tech设置数据集创建时的语言（#15703）
*修复（代理/工具）：当https://github.com/infiniflow/ragflow/pull/19176中的频道是@marmar9615-cloud的新闻时运行DuckDuckGo新闻搜索
* 修复了 https://github.com/infiniflow/ragflow/pull/19256 中 @JessYanCoding 将空上传视为缺失二进制文件的剩余 rag/app chunkers
* test(rag/nlp): 覆盖https://github.com/infiniflow/ragflow/pull/19292中@Harsh23Kashyap的decode_text的BOM和LookupError分支
* 修复：@buua436在https://github.com/infiniflow/ragflow/pull/19313中报告知识编译LLM失败
* 修复：在https://github.com/infiniflow/ragflow/pull/19338中通过@Lynn-Inf更新GiteeAI的base_url和一些model_name
* 修复（原生）：在 FromImage/Decode 中为 https://github.com/infiniflow/ragflow/pull/19308 中 @xugangqiang 裁剪的子图像构建 0 原点栅格
* 修复：https://github.com/infiniflow/ragflow/pull/19317 中@buua436 支持代理输入映射和聚合边
* 修复（摄取）：防止 https://github.com/infiniflow/ragflow/pull/18480 中的 @euvre 将 Q&A/Tag 块折叠成一个索引块
* 重构：将@wangq8在https://github.com/infiniflow/ragflow/pull/19303中的3个检索/搜索API合二为一
* 修复（api）：在 https://github.com/infiniflow/ragflow/pull/19281 中列出@marmar9615-cloud 的内存时接受重复的内存类型和租户 ID 过滤器
* 壮举（代理）：在 https://github.com/infiniflow/ragflow/pull/19323 中添加 @yusufgurdogan 的 Sofya 搜索工具
* 修复（解析器）：通过 https://github.com/infiniflow/ragflow/pull/19319 中的 @jay77721 恢复 Office IR 中的 text_box 和嵌套表/列表文本
* 修复（内存）：将提取的消息文档 ID 与 https://github.com/infiniflow/ragflow/pull/19326 中 @jay77721 的 message_id 对齐
* feat(deepdoc): 将进程内 Go 后端从 .onnx 切换到 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/19318 中的 FlatBuffer (.ort) 模型
* 修复：https://github.com/infiniflow/ragflow/pull/19346 中 @buua436 的文档产品过滤器结构更改
* 修复（web）：通过 https://github.com/infiniflow/ragflow/pull/19349 中的 @dcc123456 禁用代理注释节点中的文本区域大小调整
* 修复：在 https://github.com/infiniflow/ragflow/pull/19351 中显示 @wangq8 的技能文件夹
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/19111 中通过 @WOLIKIMCHENG 合并 DataOperations 中的标量列表值
* 修复（web）：隐藏注册，直到 @shixy96 在 https://github.com/infiniflow/ragflow/pull/19343 中启用注册
* 修复（文档）：https://github.com/infiniflow/ragflow/pull/19372 中 @6ba3i 的文档数据集语言创建和更新行为
* 壮举（连接器）：为https://github.com/infiniflow/ragflow/pull/19344中的@vincentlambert添加基于sitemap.xml的Web摄取的Sitemap数据源
* 修复（llm）：在 https://github.com/infiniflow/ragflow/pull/16044 中针对 @kimnamu 不支持的基岩嵌入模型提出明显错误
* feat(channels): 允许聊天频道通过https://github.com/infiniflow/ragflow/pull/19307中的@Gonghan-Princess连接到代理
* 修复(paper): 通过 chunk_token_num (#12109) 由 https://github.com/infiniflow/ragflow/pull/16959 中的 @deadtrickster 绑定标题枢轴合并
* Dockerfile_go 由 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/19385 中优化
* 修复（web）：将解析状态徽章颜色与列表点对齐并通过 https://github.com/infiniflow/ragflow/pull/19400 中的 @dcc123456 重命名表头
* 修复(web): 将 https://github.com/infiniflow/ragflow/pull/19381 中的工件删除按钮通过 @dcc123456 移动到工具栏行
* 修复：默认情况下wiki页面右侧不显示wiki内容。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19388
*修复（代理）：清除https://github.com/infiniflow/ragflow/pull/19399中@6ba3i的过时模板数据集引用
* 重构：https://github.com/infiniflow/ragflow/pull/19404中@wangq8添加RERANK_TOKEN_LIMIT_MODE
*修复（代理）：通过@6ba3i在https://github.com/infiniflow/ragflow/pull/19355中流式传输来保留沙箱工件
* 修复：在https://github.com/infiniflow/ragflow/pull/19373中通过@buua436解析Go结构图模板名称
* 修复：在 https://github.com/infiniflow/ragflow/pull/19377 中按 @buua436 请求的 ID 过滤块
* 修复（api）：当 @euvre 在 https://github.com/infiniflow/ragflow/pull/19380 中更新缺失的搜索时，返回“未找到搜索”而不是 IndexError
*修复（api）：在https://github.com/infiniflow/ragflow/pull/19340中强制@euvre对团队共享聊天和代理会话进行只读访问
*修复（sdk）：在https://github.com/infiniflow/ragflow/pull/19367中保留@AnnaSuSu下载的JSON文档
* 修复（同步器）：锚定站点地图 PDF 通过检查点并通过 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/19383 中声明正则表达式依赖项
* 修复（api）：通过 @Harsh23Kashyap 在 https://github.com/infiniflow/ragflow/pull/19357 中授权数据集和工作区提交路由
* 修复（代理）：将 https://github.com/infiniflow/ragflow/pull/19275 中@euvre 缺失的列表操作输入视为空列表
* 修复（数据集）：在 https://github.com/infiniflow/ragflow/pull/19310 中尊重 @euvre 的 Go wiki 工件列表 APIs 中的关键字过滤器
* 修复（编译）：使图形搜索在实体名称上输入突出显示节点，而不是通过 @euvre 在 https://github.com/infiniflow/ragflow/pull/19320 中渲染整个图形
* feat(ingestion)：通过https://github.com/infiniflow/ragflow/pull/19386中的@xugangqiang将检查点合并到解析器+每块结果缓存
* 修复：当数据库配置没有密码时避免 KeyError (#11051) by @RykerFeng in https://github.com/infiniflow/ragflow/pull/16064
* 修复(mineru): 将后端名称与 https://github.com/infiniflow/ragflow/pull/19055 中@huang-aoqin 的当前 MinerU API 对齐
* 修复：在https://github.com/infiniflow/ragflow/pull/19418中通过@Lynn-Inf检查sql组件必填字段
* 修复（嵌入）：使用复制运行 API 进行 @LostSnowfluff 在 https://github.com/infiniflow/ragflow/pull/19405 中的查询嵌入
* 重构（摄取）：在 https://github.com/infiniflow/ragflow/pull/19314 中使用 @jay77721 的工作人员驱动的任务拉动调度程序
* 修复（agentic_rag）：拒绝散文扇出，在 SCA 超时时保持研究循环活动，并通过 @Caobaining1 在 https://github.com/infiniflow/ragflow/pull/19424 中扩大槽表重试预算
* 修复：找不到VariableAggregator算子新添加的组名。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19440
* 修复：当 @MKP999 在 https://github.com/infiniflow/ragflow/pull/16027 中找不到搜索时，防止 PUT /api/v1/searches/<id> 中出现 IndexError
* 修复：@buua436 在 https://github.com/infiniflow/ragflow/pull/19422 中报告增量 wiki 地图错误
* 杂务（deps）：让 download_go_deps.py 在 https://github.com/infiniflow/ragflow/pull/19376 中获取 @xugangqiang 的 Go DeepDoc .ort 权重
*修复（编译器）：通过https://github.com/infiniflow/ragflow/pull/19426中的@6ba3i解析全局内置模板范围
* 重构：按照 #19404 在 https://github.com/infiniflow/ragflow/pull/19421 中添加 @wangq8 的 RERANK_TOKEN_LIMIT_MODE=truncate|passthrough|raise_error
* 修复：表列自动解析 https://github.com/infiniflow/ragflow/pull/19439 中 @wangq8 缺失的元数据
* 修复（块）：在 https://github.com/infiniflow/ragflow/pull/19221 中对 @WOLIKIMCHENG 的更新强制执行文档范围
* 壮举：在 https://github.com/infiniflow/ragflow/pull/19341 中通过 @Aimagine-life 添加 Hubris 作为模型提供者
* 修复（代理）：创建时的模板检索绑定 + false“未选择数据集”在 https://github.com/infiniflow/ragflow/pull/19316 中由 @euvre 保存警告
* 壮举：在 https://github.com/infiniflow/ragflow/pull/15985 中突出显示@carlh7777 在团队设置表中的搜索匹配项
* 修复：在https://github.com/infiniflow/ragflow/pull/19423中通过@Lynn-Inf启动服务器之前运行ensure_db_init
* CI：优化https://github.com/infiniflow/ragflow/pull/19450中@myf-bee失败的api测试用例
* Go：通过@JinHai-CN在https://github.com/infiniflow/ragflow/pull/19448中更新build.sh和development.md
* API 文档中 @AlightSoulmate 在 https://github.com/infiniflow/ragflow/pull/16002 中正确的 parser_config 示例
* 文档：通过 @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/19462 中删除空格
* 修复（llm）：通过@glu000在https://github.com/infiniflow/ragflow/pull/15994中实现GoogleChat（Vertex AI Gemini）的异步聊天方法
* 通过 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/19443 中将 pytest-durations 添加到测试工作流程中
* feat(agentic_rag)：添加工具手册，阐明工具规格，停止浪费……作者：@Caobaining1，https://github.com/infiniflow/ragflow/pull/19459
* 修复（存储）：通过 @AnnaSuSu 在 https://github.com/infiniflow/ragflow/pull/19458 中覆盖现有的 Azure SAS 对象
*修复（存储）：在https://github.com/infiniflow/ragflow/pull/19457中@AnnaSuSu在加密的Azure调用中接受租户参数
* 测试：将部分测试用例的优先级从P1/P2调整为P3。通过 @asiroliu 在 https://github.com/infiniflow/ragflow/pull/19461
*构建（deps）：通过https://github.com/infiniflow/ragflow/pull/19463中的@dependabot [bot]将github.com/buger/jsonparser从1.1.1提升到1.1.2
* 修复（restful-tests）：在 https://github.com/infiniflow/ragflow/pull/19442 中通过 @6ba3i 对齐 Go 解析器配置合约
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/19420 中通过 @6ba3i 保留查询输入旁边的 Starter 值
* 通过 @devYRPauli 在 https://github.com/infiniflow/ragflow/pull/19178 中的内容传输编码对单部分电子邮件正文进行解码
*修复（嵌入）：通过https://github.com/infiniflow/ragflow/pull/19397中的@LostSnowfluff保留零文件名嵌入权重
* 壮举（摄取）：通过 @Jaymr1031-Z 在 https://github.com/infiniflow/ragflow/pull/18988 中使用 bmp/tiff 解码器和零分配 RuneCount 来优化图像调度（修复 #18794）
* 修复：https://github.com/infiniflow/ragflow/pull/19474 中的 @wangq8 不会将所有实体/关系作为图块生成图
* 修复：默认运算符名称不包含数字后缀。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19451
* 文档：通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19484 中更新工具提示 url
* 修复（llm）：在 https://github.com/infiniflow/ragflow/pull/19295 中删除被 @vincentlambert 的 Bedrock 和 Anthropic 拒绝的 Claude 采样参数
* 修复：启用“开始”操作符的打开消息开关会导致之前发送的消息被覆盖。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19492
* 修复（摄取）：允许重新解析在 https://github.com/infiniflow/ragflow/pull/19258 中 @euvre 在进度 0 取消解析的文档
* [重构] https://github.com/infiniflow/ragflow/pull/19488中@wangq8使用正则表达式进行高亮
* 修复（go）：停止将文档预览失败屏蔽为“未找到文档”，并在 https://github.com/infiniflow/ragflow/pull/19348 中添加 @euvre 的租户访问检查
* 修复：https://github.com/infiniflow/ragflow/pull/19493中通过@buua436的树搜索来导航API
* 修复：https://github.com/infiniflow/ragflow/pull/19473中支持@buua436对数据集结构图进行关键字搜索
* 修复：https://github.com/infiniflow/ragflow/pull/19454 中 @Lynn-Inf 的组件在模板中绑定数据集的数量
* 修复：@Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/19495 中使用 num 代币
* 文档：更新 https://github.com/infiniflow/ragflow/pull/19501 中 @asiroliu 的自述文件和文档中对 v0.27.2 的版本引用
* 文档：v0.27.2 release note 由 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19504 中

## 新贡献者
* @chakshu-dannawat 在 https://github.com/infiniflow/ragflow/pull/18927 中做出了第一个贡献
* @noron12234 在 https://github.com/infiniflow/ragflow/pull/17682 中做出了第一个贡献
* @chyroc 在 https://github.com/infiniflow/ragflow/pull/18973 中做出了第一个贡献
* @avikumart 在 https://github.com/infiniflow/ragflow/pull/18829 中做出了第一个贡献
* @maxiaolong03 在 https://github.com/infiniflow/ragflow/pull/19011 中做出了第一个贡献
* @Anai-Guo 在 https://github.com/infiniflow/ragflow/pull/17611 中做出了第一个贡献
* @FJH886 在 https://github.com/infiniflow/ragflow/pull/17592 中做出了第一个贡献
* @georgelichen 在 https://github.com/infiniflow/ragflow/pull/18983 中做出了第一个贡献
* @uczltw6 在 https://github.com/infiniflow/ragflow/pull/18505 中做出了第一个贡献
* @BaptisteJosh 在 https://github.com/infiniflow/ragflow/pull/15964 中做出了第一个贡献
* @martincivan 在 https://github.com/infiniflow/ragflow/pull/19016 中做出了第一个贡献
* @yiheng-kkk 在 https://github.com/infiniflow/ragflow/pull/19069 中做出了第一个贡献
* @alaningtrump 在 https://github.com/infiniflow/ragflow/pull/19023 中做出了第一个贡献
* @LuckTerence 在 https://github.com/infiniflow/ragflow/pull/19079 中做出了第一个贡献
* @Caobaining1 在 https://github.com/infiniflow/ragflow/pull/19112 中做出了第一个贡献
* @dynnfa 在 https://github.com/infiniflow/ragflow/pull/19126 中做出了第一个贡献
* @OmarFaig 在 https://github.com/infiniflow/ragflow/pull/18460 中做出了第一个贡献
* @blueOf 在 https://github.com/infiniflow/ragflow/pull/19007 中做出了第一个贡献
* @xu-jia-ming 在 https://github.com/infiniflow/ragflow/pull/19020 中做出了第一个贡献
* @Huang-404-Q 在 https://github.com/infiniflow/ragflow/pull/19162 中做出了第一个贡献
* @zz80900 在 https://github.com/infiniflow/ragflow/pull/15683 中做出了第一个贡献
* @ericcurtin 在 https://github.com/infiniflow/ragflow/pull/19030 中做出了第一个贡献
* @dawNotPoi 在 https://github.com/infiniflow/ragflow/pull/19210 中做出了第一个贡献
* @leilei3167 在 https://github.com/infiniflow/ragflow/pull/19198 中做出了第一个贡献
* @HamsterPark 在 https://github.com/infiniflow/ragflow/pull/14501 中做出了第一个贡献
* @liwu96 在 https://github.com/infiniflow/ragflow/pull/19321 中做出了第一个贡献
* @zenosai 在 https://github.com/infiniflow/ragflow/pull/18887 中做出了第一个贡献
* @JessYanCoding 在 https://github.com/infiniflow/ragflow/pull/19256 中做出了第一个贡献
* @yusufgurdogan 在 https://github.com/infiniflow/ragflow/pull/19323 中做出了第一个贡献
* @shixy96 在 https://github.com/infiniflow/ragflow/pull/19343 中做出了第一个贡献
* @kimnamu 在 https://github.com/infiniflow/ragflow/pull/16044 中做出了第一个贡献
* @Gonghan-Princess 在 https://github.com/infiniflow/ragflow/pull/19307 中做出了第一个贡献
* @RykerFeng 在 https://github.com/infiniflow/ragflow/pull/16064 中做出了第一个贡献
* @LostSnowfluff 在 https://github.com/infiniflow/ragflow/pull/19405 中做出了第一个贡献
* @MKP999 在 https://github.com/infiniflow/ragflow/pull/16027 中做出了第一个贡献
* @Aimagine-life 在 https://github.com/infiniflow/ragflow/pull/19341 中做出了第一个贡献
* @AlightSoulmate 在 https://github.com/infiniflow/ragflow/pull/16002 中做出了第一个贡献
* @Jaymr1031-Z 在 https://github.com/infiniflow/ragflow/pull/18988 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.27.1...v0.27.2

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.27.2` · 📅 发布：2026-09-10 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.27.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
