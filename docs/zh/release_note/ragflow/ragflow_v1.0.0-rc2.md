---
title: "ragflow v1.0.0-rc2"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v1.0.0-rc2"
version: "v1.0.0-rc2"
published: "2026-10-16"
type: "major"
lang: "zh"
---

# ragflow v1.0.0-rc2

1.0.0-rc2 是 v1.0.0 的第二个候选版本。此版本修复了 rc1 中的几个问题并引入了新功能和扩展的支持。

### 亮点
1.引入代理聊天模式，取代低、中、高、超思维级别。
2. 保留与现有v1.0.0-rc1数据的兼容性，允许直接升级。
3.增加了对Team/Me共享的支持。
4. 增加了对模型提供商DemonRoute和Opper、网络搜索工具Firecrawl和Search1API以及MinerU 4模型的支持。
5. 新增捷克语、斯洛伐克语检索支持。
6. 将 12 个内置文档解析器与 Pipeline 解析器统一。
7. 添加了arm64架构的Docker镜像。

## 发生了什么变化
* 重构（解析器）：通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/20358 中统一分段 HTML 线上的电子表格
* 重构：https://github.com/infiniflow/ragflow/pull/20321 中的 @JinHai-CN 使用正确的 ragflow.conf 作为 nginx 配置文件
* 文档：https://github.com/infiniflow/ragflow/pull/20353 中@Yannnnnnnny 更新部署指南中的 Docker 命令
* feat(parser): 在 https://github.com/infiniflow/ragflow/pull/20166 中添加 @jay77721 为图像添加选择加入 VLM 增强功能
* 重构（parser_config）：通过@xugangqiang在https://github.com/infiniflow/ragflow/pull/20315中使所有设置为组件范围（零平键兼容）
* 重构：https://github.com/infiniflow/ragflow/pull/20364中@JinHai-CN的代理模板
* 修复：在 https://github.com/infiniflow/ragflow/pull/20371 中通过 @Lynn-Inf 清除 GetByID
* refa：迁移https://github.com/infiniflow/ragflow/pull/20355中@buua436的提供者模型调用
* 修复（web）：在 https://github.com/infiniflow/ragflow/pull/20361 中的@dcc123456 在每个模型提供者表单中的基本 url 之前显示 api 密钥
* 修复：无法删除令牌分块器分隔符配置中的最后一项。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20376
* 重构（解析器）：将本机 PDF/Office 提取移至 https://github.com/infiniflow/ragflow/pull/20273 中的 @xugangqiang 的 deepdoc 外观
* 文档：将注释中的onnxruntime_go绑定版本与https://github.com/infiniflow/ragflow/pull/20370中@xugangqiang的go.mod（v1.29.0）对齐
* 修复：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/20378 中的模型包装器路由嵌入
* 重构：在 https://github.com/infiniflow/ragflow/pull/20379 中明确使用 @wangq8 的 keywords_similarity_weight
* https://github.com/infiniflow/ragflow/pull/20380中@JinHai-CN更新CI
* 重构：通过 @QAQadws 在 https://github.com/infiniflow/ragflow/pull/20374 中删除过时的聊天会话兼容性 API
* 修复（映射）：支持https://github.com/infiniflow/ragflow/pull/20368中@qinling0210在Elasticsearch上的任何嵌入尺寸
* 重构：https://github.com/infiniflow/ragflow/pull/20383中@JinHai-CN的知识编译模板
* 重构：删除https://github.com/infiniflow/ragflow/pull/20388中@JinHai-CN未使用的py代码
* 重构：删除https://github.com/infiniflow/ragflow/pull/20389中@JinHai-CN未使用的沙箱代码
* 重构：https://github.com/infiniflow/ragflow/pull/20385 中的 @wangq8 的 vector_similarity_weight -> keywords_similarity_weight
* 修复（文档）：克隆 parser_config 以打破数据集别名；通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/20381 中删除死解析器配置助手
* 重构(web)：通过@dcc123456在https://github.com/infiniflow/ragflow/pull/20375中删除Python后端兼容性代码
* 重构：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/20387 中的包装器路由音频模型
* 修复 https://github.com/infiniflow/ragflow/pull/20190 中 @QAQadws 的数据集摄取概述
* 重构：删除https://github.com/infiniflow/ragflow/pull/20392中@JinHai-CN未使用的代码和文档
* 重构：更好的消息 - 画布 -> https://github.com/infiniflow/ragflow/pull/20395 中 @wangq8 的代理
* 重构（工作流程）：在https://github.com/infiniflow/ragflow/pull/20391中保留@6ba3i完成的并行结果
* 修复（cli）：删除 PENDING 作为 https://github.com/infiniflow/ragflow/pull/20367 中 @flyingwhit 消息队列命令的参数
* 重构：https://github.com/infiniflow/ragflow/pull/20390中@JinHai-CN将res移动到内部
*修复（文件）：继续轮询，直到清除的数据集从https://github.com/infiniflow/ragflow/pull/20423中的@dcc123456列表中消失
* 修复：https://github.com/infiniflow/ragflow/pull/20421 中@Lynn-Inf 提供更好的 GetByID
* 修复（分块）：在 https://github.com/infiniflow/ragflow/pull/20265 中的@Souravrajvi0 将媒体上下文附加到常规 Markdown 和 HTML 路径（#20141）
* 修复（解析器）：在 https://github.com/infiniflow/ragflow/pull/20359 中保留 @jay77721 的 DOCX XML 字符引用
* 文档：修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/20427中的错误
* 杂务（deps）：https://github.com/infiniflow/ragflow/pull/20434 中的 @dependabot[bot] 将 hpack 从 4.1.0 提升到 4.2.0
* 重构：https://github.com/infiniflow/ragflow/pull/20425中@wangq8删除rag
* 杂务（deps）：通过https://github.com/infiniflow/ragflow/pull/20433中的@dependabot[bot]将/web中的快速uri从3.1.7提升到3.1.8
* 杂务（deps）：https://github.com/infiniflow/ragflow/pull/20435 中的 @dependabot[bot] 在 /web 中碰撞大括号扩展
* 杂务（deps）：https://github.com/infiniflow/ragflow/pull/20437 中的 @dependabot[bot] 将加密从 46.0.7 提升到 50.0.0
* 重构（工作流）：https://github.com/infiniflow/ragflow/pull/20399 中 @6ba3i 绑定并行任务准入
* 修复（解析器）：通过 @Souravrajvi0 在 https://github.com/infiniflow/ragflow/pull/19445 中的 Go PDF 解析器连接 MinerU server_url
* 修复：通过 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/20444 中添加缺少的环境配置
* 重构：使用模型分词器在 https://github.com/infiniflow/ragflow/pull/20422 中通过 @buua436 进行重新排序
* 修复（解析器）：恢复图片 OCR 独立于 https://github.com/infiniflow/ragflow/pull/20424 中 @jay77721 的 VLM 增强
* 重构：在https://github.com/infiniflow/ragflow/pull/20431中最好使用@wangq8的组件显示名称
* 重构：删除https://github.com/infiniflow/ragflow/pull/20432中@JinHai-CN对whatsapp频道的python实现
* refa：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/20441 中的 ChatModel 路由聊天呼叫
* 修复：将视觉增强选项提升为全局设置。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20397
* 在https://github.com/infiniflow/ragflow/pull/20448中将entrypoint-go.sh重命名为@myf-bee的entrypoint.sh
* 重构：通过@JinHai-CN在https://github.com/infiniflow/ragflow/pull/20436中删除未使用的python模块
* 重构（deps）：https://github.com/infiniflow/ragflow/pull/20360 中 @jay77721 使用 Go 依赖项下载器作为唯一入口点
* 重构（画布）：在 https://github.com/infiniflow/ragflow/pull/20443 中拒绝 @6ba3i 失败的并行状态克隆
* 重构：删除https://github.com/infiniflow/ragflow/pull/20455中@JinHai-CN未使用的go函数
* 删除无作用域的（平面）parser_config 键，而不是通过 https://github.com/infiniflow/ragflow/pull/20445 中的 @xugangqiang 拒绝它们
* 重构（mcp）：拒绝 https://github.com/infiniflow/ragflow/pull/20447 中 @6ba3i 未经验证的重定向目的地
* 重构（代理）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/20456 中避免不安全的 HTTP 重试
* 重构（代理）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/20461 中拒绝非全局目的地
* 重构(agent)：https://github.com/infiniflow/ragflow/pull/20464中@6ba3i绑定本地输出捕获
* 重构（组件）：删除https://github.com/infiniflow/ragflow/pull/20454中@6ba3i的空答案存根
* 杂务（deps）：在 /internal/channels/whatsapp-gateway 中由 https://github.com/infiniflow/ragflow/pull/20471 中的 @dependabot[bot] 从 0.35.2 急剧上升到 0.35.5
* 文档(web): 在 https://github.com/infiniflow/ragflow/pull/20467 中 @sunshanhui 迁移 Vite 后删除过时的 UmiJS 引用
* 在https://github.com/infiniflow/ragflow/pull/19664中@myf-bee在docker-compose-base.yml中添加nats监控端口变量
* 修复：https://github.com/infiniflow/ragflow/pull/20472 中 @cike8899 交换关键字相似权重的文本
* 修复：分隔线导致代理消息错误文本字体过大的问题。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20462
* 修复（元数据）：当https://github.com/infiniflow/ragflow/pull/20428中@dcc123456不存在元数据键时显示空状态
* 重构（聊天）：通过 @flyingwhit 在 https://github.com/infiniflow/ragflow/pull/20450 中将分页向下推至 ListByOwnerIDs
* 重构（画布）：在 https://github.com/infiniflow/ragflow/pull/20440 中通过 @6ba3i 保留跨简历的并行项目状态
* 修复：在 https://github.com/infiniflow/ragflow/pull/20394 中通过 @flyingwhit 在检索节点上添加 json 输出别名
* 重构：在https://github.com/infiniflow/ragflow/pull/20475中使用@wangq8的type_kwd代替knowledge_graph_kwd
* 将代理 RAG 移植到 Go，将其公开为聊天模式，并通过 @yuzhichang 在 https://github.com/infiniflow/ragflow/pull/20503 中添加每个对话的故障转移
* feat(agent,ingestion)：携带@yuzhichang在https://github.com/infiniflow/ragflow/pull/20542中声明的grep/bm25合约和索引标题
* 杂务：修复https://github.com/infiniflow/ragflow/pull/20550中@somasoil评论中的一些函数名称
* 杂务（deps）：通过 https://github.com/infiniflow/ragflow/pull/20538 中的 @dependabot[bot] 将 urllib3 从 2.7.0 提升到 2.8.0
* 文档：修复 https://github.com/infiniflow/ragflow/pull/20426 中 @Yannnnnnnny 的 ui 单词
* 修复(引用): 在https://github.com/infiniflow/ragflow/pull/20452中直接通过@dcc123456打开外部网页文档
* 重构（代理）：保留 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/20451 中的 Stagehand client 租赁
* refa：简化模型解析并重新排序 @buua436 在 https://github.com/infiniflow/ragflow/pull/20457 中的调用
* 文档：通过 https://github.com/infiniflow/ragflow/pull/20548 中的 @Harsh28-raj 将 DemonRoute 添加到支持的模型提供程序
* 重构：通过@Lynn-Inf在https://github.com/infiniflow/ragflow/pull/20470中删除API_PROXY_SCHEME
* 壮举：通过 @Felixkw12 在 https://github.com/infiniflow/ragflow/pull/20577 中添加 Opper 作为模型提供者
* 文档：删除https://github.com/infiniflow/ragflow/pull/20584中@JinHai-CN支持的型号
*修复（api）：防止0.96的解析进度被@SashaMIT在https://github.com/infiniflow/ragflow/pull/20414中报告为1.0
* 文档：在 https://github.com/infiniflow/ragflow/pull/20479 中 @JuampiHernandez 的 HTTP API 参考中记录 Firecrawl Web 搜索提供程序
* WorkerPool 在 https://github.com/infiniflow/ragflow/pull/20490 中通过 @Taranum01 缩小空闲池后调整过度生成的大小
* 修复（wiki）：在 https://github.com/infiniflow/ragflow/pull/20517 中保留 @Mnilax 的外部链接导航
*修复（go-agent）：从https://github.com/infiniflow/ragflow/pull/20480中@errmakov的片段中读取Keenable结果内容
*修复（elasticsearch）：通过https://github.com/infiniflow/ragflow/pull/20546中的@quifox使用索引上下文传播搜索失败
* 文档：在https://github.com/infiniflow/ragflow/pull/20521中由@pratikgx移动到deepdoc/parser/office后修复DOCX解析器测试链接
* 修复（代理）：删除 https://github.com/infiniflow/ragflow/pull/20588 中@6ba3i 过时的下载信息切换
* 重构（搜索）：通过 @flyingwhit 在 https://github.com/infiniflow/ragflow/pull/20386 中将分页向下推至 ListByOwnerIDs
* 修复（存储）：https://github.com/infiniflow/ragflow/pull/20504 中 @AnnaSuSu 对 S3 和 OSS 复制源进行 URL 编码
*修复（cli）：在https://github.com/infiniflow/ragflow/pull/20498中通过@helloxjade切换API服务器时刷新文件系统提供程序
* 修复（web）：当 @Xavierando 在 https://github.com/infiniflow/ragflow/pull/20581 中刷新过滤器选项时，保留待处理的过滤器选择
* 杂务（deps）：通过 https://github.com/infiniflow/ragflow/pull/20589 中的 @dependabot[bot] 将 /web 中的 dompurify 从 3.3.2 提升到 3.4.16
* 杂务（deps）：在 https://github.com/infiniflow/ragflow/pull/20591 中通过 @dependabot[bot] 在 /web 中碰撞 @vue/server-renderer 和 vue
* 杂务（deps）：通过https://github.com/infiniflow/ragflow/pull/20593中的@dependabot[bot]在/web中碰撞tinypool和oxfmt
* 杂务（deps）：通过 https://github.com/infiniflow/ragflow/pull/20590 中的 @dependabot[bot] 将多字典从 6.7.0 提升到 6.9.1
* 杂务（部门）：https://github.com/infiniflow/ragflow/pull/20592 中的 @dependabot[bot] 将 werkzeug 从 3.1.8 提升到 3.1.9
* 修复：Cli点击数据集文件批量解析按钮无反应。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20602
* 重构：https://github.com/infiniflow/ragflow/pull/20587中@wangq8的知识编译字段名称重构
* 修复（wiki）：在 https://github.com/infiniflow/ragflow/pull/20598 中使用 @QAQadws 的纯文本摘要
* 壮举：在 https://github.com/infiniflow/ragflow/pull/20596 中添加 @buua436 的 SiliconFlow 模型目录条目
* Go: go mod tidy by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20605
* 修复：https://github.com/infiniflow/ragflow/pull/20601 中 @buua436 回填 rc2 中的租户模型最大令牌
* 删除https://github.com/infiniflow/ragflow/pull/20615中@JinHai-CN的pullfrog
* 修复（代理）：将 Sofya 搜索工具移植到 https://github.com/infiniflow/ragflow/pull/20410 中的 @yusufgurdogan 的 Go
* 修复：拒绝https://github.com/infiniflow/ragflow/pull/20540中@helloxjade的非字符串元数据选择器文档ID
* serenedb：停止将相似性阈值编译到 @deadtrickster 在 https://github.com/infiniflow/ragflow/pull/20222 中的 ANN 扫描中
* perf(tokenizer)：通过 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/20610 中记忆术语查找并预编译每个标记的正则表达式
* i18n(web)：通过 https://github.com/infiniflow/ragflow/pull/20607 中的 @dcc123456 澄清跨语言环境的代理引用开关标签
* 修复：将块内 `th` 元素的内容左对齐。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20609
* 修复：禁用代理引用，不应在 https://github.com/infiniflow/ragflow/pull/20616 中显示 @wangq8 的引用文件
* 修复（聊天）：在 https://github.com/infiniflow/ragflow/pull/19962 中列出 @marmar9615-cloud 的聊天时，遵循准确的 ID 和名称过滤器
* feat(vastbase): 在https://github.com/infiniflow/ragflow/pull/20419中添加Vastbase G100文档引擎支持@FengYikai710
* 修复：在 https://github.com/infiniflow/ragflow/pull/20599 中通过 @Lynn-Inf 迁移解析配置时删除 raptor 和 graphrag
* 壮举（聊天）：在 https://github.com/infiniflow/ragflow/pull/20561 中添加 @fatwang2 的 Search1API 网络搜索提供商
*修复（代理）：通过@quifox在https://github.com/infiniflow/ragflow/pull/20547中提供网络证据稳定的内容身份
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/20331 中 @ekalinin 在 StringTransform 合并模式下接受字符串分隔符
* 修复（web）：通过https://github.com/infiniflow/ragflow/pull/20636中的@dcc123456将模型实例卡操作重新分组到标头中
* 修复（web）：在 https://github.com/infiniflow/ragflow/pull/20635 中通过 @dcc123456 将 API 键模态保留在视口内并具有粘性表格标题
* 修复(canvas): 发送状态消息而不通过https://github.com/infiniflow/ragflow/pull/20600中的@ondery将其馈送到下一个节点
* 重构：通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/20640 中清理 compose 和 env 文件
* 修复（代理）：拒绝 https://github.com/infiniflow/ragflow/pull/20618 中 @T1mn 的 webhook 正文读取失败
* 修复（代理）：停止在 https://github.com/infiniflow/ragflow/pull/20619 中通过 @T1mn 轮询过期的 Webhook 跟踪
* 文档：https://github.com/infiniflow/ragflow/pull/20642 中的 @xugangqiang 将 macOS 标记为 Go 后端暂时不支持
* 文档：https://github.com/infiniflow/ragflow/pull/20644 中的 @JinHai-CN 现在不支持 macOS(arm64)
*修复（摄取）：在https://github.com/infiniflow/ragflow/pull/20474中坚持并遵守@jay77721的全局视觉设置
* 修复（api）：在https://github.com/infiniflow/ragflow/pull/20146中@Harsh23Kashyap在Go AddChunk上保留tag_kwd（#20138）
* feat(parser)：将内置和管道解析器选择统一到https://github.com/infiniflow/ragflow/pull/20603中@xugangqiang的一个下拉列表中
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/20604 中渲染并约束 @6ba3i 生成的 PDF 内容
* 杂务（deps）：通过 https://github.com/infiniflow/ragflow/pull/20643 中的 @dependabot[bot] 将 /internal/channels/whatsapp-gateway 中的音乐元数据从 11.13.0 提升到 11.16.1
* 修复（无穷大）：恢复 https://github.com/infiniflow/ragflow/pull/20646 中 @qinling0210 的块映射中已弃用的知识编译列
* 修复：通过@Lynn-Inf在https://github.com/infiniflow/ragflow/pull/20648中删除重复列表功能
* feat(agentic_rag): 通过https://github.com/infiniflow/ragflow/pull/20645中的@Caobaining1将metadata_search工具添加到eino智能推理路径中
* 由 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/20652 中将 Infinity 碰撞到 v0.7.4
* 修复(web): 在https://github.com/infiniflow/ragflow/pull/20653中暂时隐藏@dcc123456草稿模型卡上的验证按钮
* 修复：在https://github.com/infiniflow/ragflow/pull/20638中通过@Lynn-Inf检查检索节点必填字段
* 修复(web): 从https://github.com/infiniflow/ragflow/pull/20661中@yuzhichang的聊天设置中删除故障转移模型字段
*修复（代理）：保留@6ba3i在https://github.com/infiniflow/ragflow/pull/20655中仅输出的附件消息
* 修复（mcp）：防止 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/20639 中暴露托管令牌
* 修复（wiki）：通过 @QAQadws 在 https://github.com/infiniflow/ragflow/pull/20597 中删除重复的 Markdown 存储
* 修复（名称）：统一https://github.com/infiniflow/ragflow/pull/20594中@flyingwhit的不区分大小写的实体名称重复和重命名处理
* 修复(web): 一旦 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/20665 中存在 16 个 API 密钥，则禁用创建密钥按钮
* 文档：修复https://github.com/infiniflow/ragflow/pull/20663中@JinHai-CN的自述文件
* 修复（解析器）：遵循 https://github.com/infiniflow/ragflow/pull/20336 中 @devYRPauli 的 VLM 和 plain_text 方法的 PDF 页面范围
* 修复（块）：在 https://github.com/infiniflow/ragflow/pull/20536 中 @Xavierando 在 Go UpdateChunk 上保留 tag_kwd (#20138)
* 文档：通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/20671 中修复 docker ps/logs
* 修复：修改ParserSelect下拉菜单中“内置”标签的样式。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20669
* 删除opencloud9支持，因为Go版本是由@JinHai-CN在https://github.com/infiniflow/ragflow/pull/20674发布的
* feat(agent): 在https://github.com/infiniflow/ragflow/pull/20666中添加@fatwang2的Search1API搜索和抓取工具
* 修复：通过 @why5602337 在 https://github.com/infiniflow/ragflow/pull/20459 中为本地 MinerU 驱动程序实现 CheckConnection 和 OCRFile
* 修复（嵌入）：拒绝 https://github.com/infiniflow/ragflow/pull/20662 中 @kassdinzheng123 提供的不匹配的提供者响应计数
* 修复（nlp）：恢复https://github.com/infiniflow/ragflow/pull/20572中@li872的同义词和特殊字符的无限安全escaping
* 修复：无法再访问内置解析方法的介绍信息。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/20675
* 修复（解析器）：将 do_ocr 和 pdf_backend 传递给 https://github.com/infiniflow/ragflow/pull/20529 中 @BilalAtique 的 Docling 服务
* 修复：删除未找到的消息应该在https://github.com/infiniflow/ragflow/pull/20678中由@wangq8报告错误
* 修复：通过 @Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/20676 中删除 mws 配置中的排名
* perf(docker)：优化MySQL健康检查参数以消除https://github.com/infiniflow/ragflow/pull/20482中@MOHITPRADHAN35的启动延迟
* 在https://github.com/infiniflow/ragflow/pull/20682中更新@JinHai-CN为mysql编写docker的基础
* 修复：通过 @QAQadws 在 https://github.com/infiniflow/ragflow/pull/20649 中强制执行对文档详细信息和元数据摘要的数据集访问
* 修复（deepdoc）：更正 DLA 通道顺序（BGR->RGB）并保持每类 NMS 与 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/20637 中提供的 Python 相匹配
*修复（agentic_rag）：@Caobaining1在https://github.com/infiniflow/ragflow/pull/20677中每轮证据登记处的引用数量
* 重构：优化聊天消息以仅使用 https://github.com/infiniflow/ragflow/pull/20654 中 @wangq8 的问题
*修复：正确的摄取重试处理并通过https://github.com/infiniflow/ragflow/pull/20658中的@QAQadws强制执行块权限
* CI：通过https://github.com/infiniflow/ragflow/pull/20684中的@myf-bee优化go构建缓存
* 修复（解析器）：删除 BOM 并在 https://github.com/infiniflow/ragflow/pull/20225 中通过@huiq777 在 Go 解析器中解码 JSON 和 Markdown 输入
* 修复（代理）：允许 Invoke 变量使用 https://github.com/infiniflow/ragflow/pull/20634 中 @pangwangshu 的引用或文字
* 文档：删除https://github.com/infiniflow/ragflow/pull/20692中@shrxyas-246删除的已删除支持模型页面的死链接
* feat(parser): 支持 https://github.com/infiniflow/ragflow/pull/20573 中 @Ricardo-M-L 的正版 BIFF8 XLS 工作簿
* refa: https://github.com/infiniflow/ragflow/pull/20657中@buua436集中Go资源权限
* CLI 文件时间戳拒绝 https://github.com/infiniflow/ragflow/pull/20491 中的 @Taranum01 的偏移量并丢弃毫秒
* 修复（解析器）：将 EPUB 清单 href 解析为 https://github.com/infiniflow/ragflow/pull/20228 中 @huiq777 的 URL
* feat(mcp)：允许私有 MCP 服务器主机通过 @techpreneur-a 在 https://github.com/infiniflow/ragflow/pull/20571 中的部署白名单
* feat(web): 将代理列表中的内置管道显示为https://github.com/infiniflow/ragflow/pull/20656中@xugangqiang的只读项目
* 修复：@wangq8 在 https://github.com/infiniflow/ragflow/pull/20705 中代理代码执行测试运行不起作用
*修复（数据集）：拒绝@marmar9615-cloud在https://github.com/infiniflow/ragflow/pull/19961中除数据集或文件之外的摄取log_type
* perf(knowledge_compiler)：在https://github.com/infiniflow/ragflow/pull/20708中的@xugangqiang的故障路径单元测试中选择退出实时重试退避
* 修复（deepdoc）：阻止 PDF 标题合并删除 https://github.com/infiniflow/ragflow/pull/20650 中 @jay77721 的文本和图形
* 修复：将管道画布限制为最多一个提取器运算符。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20711
* 修复（解析器）：在 https://github.com/infiniflow/ragflow/pull/20668 中被 @flyingwhit 选择为 parse_method 时运行图像 VLM
* Go：@JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/20717 中重构
* 壮举：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/20704 中公开数据集连接器同步日志
* Go：在开始时立即运行第一个计划任务，而不是在https://github.com/infiniflow/ragflow/pull/20714中等待@JinHai-CN的一个间隔
* CLI 数据集文档分页由 @Taranum01 在 https://github.com/infiniflow/ragflow/pull/20493 中作为 HTTP 标头发送
* 修复：在多模型比较页面上，每当任何模型生成输出时，应禁用“应用”、“删除”和“添加”按钮。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20723
* 修复：确保列表 datasetConnector 结果不同。作者：@Lynn-Inf，https://github.com/infiniflow/ragflow/pull/20710
* 参考：https://github.com/infiniflow/ragflow/pull/20709 中的 @buua436 集中代理画布权限
* 修复（wiki）：标记 GetWikiGraph 关键字以匹配 https://github.com/infiniflow/ragflow/pull/20722 中 @qinling0210 预先标记的 content_ltks
* 修复（deepdoc）：根据 https://github.com/infiniflow/ragflow/pull/20719 中的@flyingwhit 的完整文档而不是解析的页面子集来判断 PDF 页眉/页脚和 TOC 删除
* 修复（聊天）：https://github.com/infiniflow/ragflow/pull/20344 中 @marmar9615-cloud 将 TTS 文本限制为 500 个字符，而不是 500 个字节
* 修复（代理）：维基百科在 https://github.com/infiniflow/ragflow/pull/19959 中通过符文而不是 @marmar9615-cloud 提取字节
* 修复（块）：按符文计算合并预算，而不是https://github.com/infiniflow/ragflow/pull/20690中的@kassdinzheng123的字节数
*修复（docker）：在https://github.com/infiniflow/ragflow/pull/20732中使用@hnwyllmm的SeekDB 1.4数据目录
* Go：@JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/20706 中重构
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/20718中@6ba3i重新加载对话后保留最终答案
* feat(go)：https://github.com/infiniflow/ragflow/pull/20468 中 @Souravrajvi0 的 MonkeyOCR 环境密钥和租户配置
* CI：优化，将https://github.com/infiniflow/ragflow/pull/20729中@myf-bee的ci构建全局锁更改为主机锁
* 功能：以只读模式显示内置管道画布。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/20742
* 修复（数据集）：将空头像视为 @flyingwhit 在 https://github.com/infiniflow/ragflow/pull/20724 更新时的明确信号
* 修复（代理）：在 CreateAgentSession 中写入 version_title，以便探索会话通过 https://github.com/infiniflow/ragflow/pull/20739 中的 @flyingwhit 保留它
* 修复：https://github.com/infiniflow/ragflow/pull/20743 中通过 @Lynn-Inf 将 model_provider 函数移动到单独的文件
*修复（检索）：在https://github.com/infiniflow/ragflow/pull/20731中搜索每个租户索引一次以停止@vedjaw的重复块
* 文档（引擎）：删除 https://github.com/infiniflow/ragflow/pull/20398 中@QAQadws 过时的自述文件
* 重构：https://github.com/infiniflow/ragflow/pull/20744中@JinHai-CN更新entrypoint.sh
* 由 @poijygfdyy 在 https://github.com/infiniflow/ragflow/pull/20725 中修复/同步器计时器生成保护
* feat(parser)：在https://github.com/infiniflow/ragflow/pull/20741中由@xugangqiang为表格发出结构化的TableData而不是HTML
*修复（解析器）：删除硬图像边缘/像素限制，在https://github.com/infiniflow/ragflow/pull/20745中添加@xugangqiang选择加入光栅字节上限
* feat(dataset-overview): 在 https://github.com/infiniflow/ragflow/pull/20738 中的 @dcc123456 在数据集日志页面上显示数据源同步日志
* 文档：通过 @Yannnnnnnny 在 https://github.com/infiniflow/ragflow/pull/20476 中更新迁移
* feat(setting-model): 在https://github.com/infiniflow/ragflow/pull/20753中通过@dcc123456禁用XunFei Spark提供程序配置
* Go：修复https://github.com/infiniflow/ragflow/pull/20757中@JinHai-CN的讯飞模型
* Go：@JinHai-CN在https://github.com/infiniflow/ragflow/pull/20771中重构模型提供者
* Go：在https://github.com/infiniflow/ragflow/pull/20772中使用@JinHai-CN统一的ToInt
* 修复（pageindex）：停止对结构图进行采样并按源顺序按https://github.com/infiniflow/ragflow/pull/20750中的@qinling0210发出行
* 功能：为提取器操作员的自动提问功能添加切换开关。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20748
*修复（检索）：在https://github.com/infiniflow/ragflow/pull/20707中@6ba3i在主体思维期间保留元数据过滤器
* 修复（代理日志）：@6ba3i 在 https://github.com/infiniflow/ragflow/pull/20752 中保留失败的执行状态
* 重构（解析器）：https://github.com/infiniflow/ragflow/pull/20683 中 @jay77721 将图像 OCR 拆分为独立开关
* 修复（chunker）：在 https://github.com/infiniflow/ragflow/pull/20751 中 @jay77721 保留一般 TXT 和 DOCX 块中的标点符号
* 修复（聊天）：在 https://github.com/infiniflow/ragflow/pull/20728 中通过 @6ba3i 保留推理和对话历史中的图像
* docker 撰写：在https://github.com/infiniflow/ragflow/pull/20791 中通过@JinHai-CN 添加启用管理参数
* @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/20783 中重构
* 文档：修复https://github.com/infiniflow/ragflow/pull/20758中@12britz在Go重写中删除的页面的死链接
* 修复（web）：将电子表格解析器方法限制为https://github.com/infiniflow/ragflow/pull/20749中@jay77721支持的选项
* 通过 @Souravrajvi0 在 https://github.com/infiniflow/ragflow/pull/19905 中修复 Tair 兼容服务的 Redis INFO 内存报告
* Go：在https://github.com/infiniflow/ragflow/pull/20784中通过@yuzhichang处理嵌入中的llama服务器超限拒绝和重新排名
* Go：@JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/20795 中重构
* 修复：文件级别遗留数据通用解析方法无法显示的问题。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/20794
* 文档：删除了 API_PROXY_SCHEME 的描述，并同步了 https://github.com/infiniflow/ragflow/pull/20756 中 @Yannnnnnnny 的 README 文件
* 文档：通过@JinHai-CN在https://github.com/infiniflow/ragflow/pull/20799中更新development.md
* Go：通过@JinHai-CN在https://github.com/infiniflow/ragflow/pull/20797中统一tofloat
* @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/20801 中重构推荐和 lib
* 修复：启用提取器算子的“自动关键字”功能时，验证数据集配置页面上“topn”字段的值。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20805
* 文档：修复 https://github.com/infiniflow/ragflow/pull/20804 中 @Yannnnnnnny 的陈旧和误导性链接
* 修复：https://github.com/infiniflow/ragflow/pull/20802 中 @JinHai-CN 的 S3 兼容存储路径式寻址
* 修复：在 https://github.com/infiniflow/ragflow/pull/20755 中通过 id 更新，而不首先通过 @Lynn-Inf
* 壮举（摄取）：通过 https://github.com/infiniflow/ragflow/pull/20800 中的 @jay77721 将进度分数报告添加到 VisionEnhancement 和cropImageChunks
* 重构：删除https://github.com/infiniflow/ragflow/pull/20813中@JinHai-CN未使用的脚本
* 杂务（ci）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/20811 中删除过时的沙箱管道
* 重构（沙箱）：通过@6ba3i在https://github.com/infiniflow/ragflow/pull/20809中删除过时的配置
* 修复：即使配置了视觉模型，上传视频仍会提示未配置视觉模型。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20816
* 文档：在 https://github.com/infiniflow/ragflow/pull/20736 中同步 @yuee3 的 README 翻译中仅 Elasticsearch 的 vm.max_map_count 步骤
* 文档（沙箱）：@6ba3i 在 https://github.com/infiniflow/ragflow/pull/20810 中正确的外部部署指导
* 修复 Agentic RAG 在 https://github.com/infiniflow/ragflow/pull/20793 中不执行 @wangq8 的网络搜索
*修复：在https://github.com/infiniflow/ragflow/pull/20817中通过@dcc123456按块ID过滤时限制块列表页面大小
* 修复：代理 - 启动组件 - 当输入变量设置为可选时：如果输入值然后删除，clicking“下一步”会触发“必填字段”错误。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20820
* 修复（分块）：在 https://github.com/infiniflow/ragflow/pull/20812 中保留 @jay77721 的 PDF 和 Markdown 句子分隔符
* 修复（解析器）：将 @Souravrajvi0 的本地 MinerU 图像、位置和 API URL 保留在 https://github.com/infiniflow/ragflow/pull/20721 中
* 重构（deepdoc）：将测试数据获取移动到本机并将脚本重新定位到https://github.com/infiniflow/ragflow/pull/20822中@xugangqiang的工具/脚本
* 修复（摄取）：在 https://github.com/infiniflow/ragflow/pull/20808 中 @jay77721 合并期间保留类型元数据
* 修复（无穷大）：通过https://github.com/infiniflow/ragflow/pull/20831中的@qinling0210通过INFINITY_POOL_MAX_IDLE配置池最大空闲连接数
*修复（deepdoc）：将https://github.com/infiniflow/ragflow/pull/20819中@jay77721的附加图形标题保留在其自己的行上
* 文档：修复 https://github.com/infiniflow/ragflow/pull/20835 中@Yannnnnnnny 的错误图像引用
* 修复：当 https://github.com/infiniflow/ragflow/pull/20829 中的 @wangq8 的 LLM 不好时，agentic rag 使用之前的答案
*修复（摄取）：在https://github.com/infiniflow/ragflow/pull/20825中@jay77721在重建的块中保留电子表格身份
* 恢复 https://github.com/infiniflow/ragflow/pull/20823 中 @flyingwhit 的“修复（cli）：删除 PENDING 作为消息队列命令的参数”
* 修复（分块）：按 https://github.com/infiniflow/ragflow/pull/20827 中的 @jay77721 的可见文本比例对常规分割位置进行切片
* 修复（内存）：将不可解析的 invalid_at 保留为 null，以便 @anneheartrecord 在 https://github.com/infiniflow/ragflow/pull/20773 中使内存保持有效
* 重构：https://github.com/infiniflow/ragflow/pull/20837 中不再有 @wangq8 的参考文件
* 修复：@JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/20838 中测试不稳定
* 修复：在条件运算符后面添加迭代运算符后不出现连接线的问题。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20833
* 修复：在 https://github.com/infiniflow/ragflow/pull/20830 中通过 @Lynn-Inf 处理 inttenant_*_id
* 修复（配置）：https://github.com/infiniflow/ragflow/pull/20796 中 @QAQadws 屏蔽 Go 启动配置日志中的凭据
* 修复（网络）：识别 wiki naviga 的词汇规范化工件链接……作者：https://github.com/infiniflow/ragflow/pull/20828 中的 @dcc123456
* 修复（nlp）：通过 https://github.com/infiniflow/ragflow/pull/20740 中的 @Caobaining1 在集成 CI 作业中重新启用 datasetnav 集成测试
* 修复（deepdoc）：将 TSR/DLA 框夹在 https://github.com/infiniflow/ragflow/pull/20836 中 @xugangqiang 分析仪出口处的图像边界
* 修复（网络）：在 https://github.com/infiniflow/ragflow/pull/20528 中将 Google Drive“我的云端硬盘电子邮件”设置为仅用于文件夹同步的选项（@errmakov）
* feat(解析器): 支持 https://github.com/infiniflow/ragflow/pull/20712 中的 @Souravrajvi0 的 MinerU 4.0 V1 HTTP API
* 修复：在 https://github.com/infiniflow/ragflow/pull/20803 中的 @anupamme 在 text.c (CWE-120) 中添加缓冲区长度检查
* 修复(文件): 缩短长URL上传文件名而不删除https://github.com/infiniflow/ragflow/pull/20814中@Jinzhengxu的扩展名
* 修复（es-to-oceanbase）：在https://github.com/infiniflow/ragflow/pull/20695中@lorenzozanee在JSON编码期间保留数组值
* 修复https://github.com/infiniflow/ragflow/pull/20849中@JinHai-CN的讯飞链接
* 修复：通过 @QAQadws 在 https://github.com/infiniflow/ragflow/pull/20824 中更正多租户检索范围
* feat(parser)：当https://github.com/infiniflow/ragflow/pull/20839中的@jay77721关闭视觉增强时，需要图像的文本源
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/20847中@6ba3i在配置的工具预算内完成响应
*修复（文件）：拒绝在https://github.com/infiniflow/ragflow/pull/20848中通过@flyingwhit移动文件夹及其后代
* 修复（无穷大）：通过 https://github.com/infiniflow/ragflow/pull/20513 中的 @devYRPoli 删除不是表列的行键
* 通过 @demonroute2 在 https://github.com/infiniflow/ragflow/pull/20853 添加 Demon Route 作为 LLM 提供者
*修复（deepdoc）：保留https://github.com/infiniflow/ragflow/pull/20767中@lorenzozanee标记为参考的PDF标题
* 文档：更新 CLI 文档以反映实际实现。作者：@Yannnnnny 在 https://github.com/infiniflow/ragflow/pull/20821
*修复（服务）：保留@Caobaining1在https://github.com/infiniflow/ragflow/pull/20862中的无回答回复的引用和参考
*修复（knowledge_compile）：在https://github.com/infiniflow/ragflow/pull/20858中保留@lorenzozanee的结构合并元数据
* 修复：接受 @heranliu 在 https://github.com/infiniflow/ragflow/pull/20850 上传白名单中的 .markdown 文件
*修复（web）：允许管道方法通过https://github.com/infiniflow/ragflow/pull/20864中的@dcc123456保存在更改解析器对话框中
* 修复：去掉解析器操作符中删除原doc/html/markdown目录的开关。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20866
* 由 @Caobaining1 在 https://github.com/infiniflow/ragflow/pull/20735 中将导航工具从旧模式迁移到代理模式
*修复（沙箱）：在https://github.com/infiniflow/ragflow/pull/20874中拒绝@6ba3i的非正本地输出限制
* 重构（解析器）：将合并单元几何图形烘焙到 https://github.com/infiniflow/ragflow/pull/20832 中的 @xugangqiang 的结构化 TableData 网格中
* 修复(api): https://github.com/infiniflow/ragflow/pull/20870 中@JinHai-CN 更新网页 API
* 文档：标准化 https://github.com/infiniflow/ragflow/pull/20868 中 @Yannnnnny 的 http api 文档中的参数名称
* 重构：https://github.com/infiniflow/ragflow/pull/20873 中 @wangq8 的移动抹布提示
* feat: 通过https://github.com/infiniflow/ragflow/pull/20792中的@buua436将资源检查迁移到权限层
* 功能：访问聊天页面上的“Naive”和“Agentic”菜单选项。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20877
* 修复（同步）：保留已发布的 blob 并重试 @dakjdakd 在 https://github.com/infiniflow/ragflow/pull/20627 中进行的不完整修订
* 修复（artifact）：拒绝 https://github.com/infiniflow/ragflow/pull/20483 中 @RerankerGuo 维基图路由中的非整数 top_n (#20006)
*修复（同步）：在https://github.com/infiniflow/ragflow/pull/20629中由@dakjdakd修剪之前拒绝不完整的Google Drive快照
* 修复（同步器）：在 https://github.com/infiniflow/ragflow/pull/20574 中为@ondery 的私有数据库主机尊重 ALLOW_ANY_HOST
* 修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/20878中的字母大小写问题
* 通过 @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/20879 中更新 go.mod
* 修复(admin): 在https://github.com/infiniflow/ragflow/pull/20863中通过@6ba3i切换沙箱执行器时恢复保存的设置
* 修复：@buua436 在 https://github.com/infiniflow/ragflow/pull/20886 中的工件测试中种子数据集所有者成员资格
* 修复（同步器）：https://github.com/infiniflow/ragflow/pull/20871 中的 @jay77721 在非正连接器刷新频率上无法关闭
* 修复：在 https://github.com/infiniflow/ragflow/pull/20889 中添加 @wangq8 的 SANDBOX_EXECUTOR_MANAGER_ALLOW_UNAUTHENTICATED
*修复（摄取）：在https://github.com/infiniflow/ragflow/pull/20846中@jay77721在VLM增强中的图像准入之前获取PDF源
* 修复（同步器）：使用 S3 兼容的 client 将 S3 源设置为 https://github.com/infiniflow/ragflow/pull/20342 中的 @marmar9615-cloud 兼容模式
* 修复（沙箱）：通过 @wenqiw777 在 https://github.com/infiniflow/ragflow/pull/20334 中编译 macOS 和 BSD 上的本地提供程序
* Go模型：修复https://github.com/infiniflow/ragflow/pull/20891中@JinHai-CN的MinerU本地服务器URL解码问题
* 修复（代理）：当 https://github.com/infiniflow/ragflow/pull/20509 中的 @ekalinin 的 PubMed 电子邮件为空时，回退到默认电子邮件
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/20259中@ekalinin尊重Go LLM和代理组件中的采样器启用标志
* feat(web)：在 https://github.com/infiniflow/ragflow/pull/20895 中从 @dcc123456 的块参考图像预览源文档
* 修复（web）：将引用源定位扩展到https://github.com/infiniflow/ragflow/pull/20898中@dcc123456的所有可预览文件类型
* 修复：禁止在消息节点之后连接其他节点。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/20897
* 修复：允许 decliZhttps://github.com/infiniflow/ragflow/pull/20896 中 @buua436 待处理的租户邀请
* 修复（分块）：在 https://github.com/infiniflow/ragflow/pull/20857 中保留 @lorenzozanee 的 JSON 项目之间的分隔符
* 修复（分块）：在 https://github.com/infiniflow/ragflow/pull/20890 中 @jay77721 保留 PDF 文本预览中的整行
* 修复（存储）：防止 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/20888 中进行 MinIO client 重新连接竞赛
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/20328 中@errmakov 在 Go 检索内存模式中应用 cross_languages
* 重构：https://github.com/infiniflow/ragflow/pull/20905中的@wangq8不带端口的日志名称
* 重构：删除https://github.com/infiniflow/ragflow/pull/20894中@wangq8未使用的API
* 修复(web): 删除 UNSTART 运行状态并通过 https://github.com/infiniflow/ragflow/pull/20904 中的 @dcc123456 对齐状态标签
* 修复：文档级图形搜索框显示不正确。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20899
* 修复：在 https://github.com/infiniflow/ragflow/pull/20908 中应用 @Lynn-Inf 的 docID 过滤器
* 修复：https://github.com/infiniflow/ragflow/pull/20806 中 @QAQadws 将摄取文档和重用任务范围限制到数据集
* 修复：更新当前管道不支持的文件类型的提示文本。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/20911
* 修复（harness）：当 https://github.com/infiniflow/ragflow/pull/20726 中的@poijygfdyy 的寻道时钟超过事件日志时，返回空迭代器
* docs(chat)：https://github.com/infiniflow/ragflow/pull/20916中@Caobaining1描述了剩下的两种思维模式
* 修复：验证变量赋值运算符的参数。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/20915
* 修复（块）：将块列表保留在 https://github.com/infiniflow/ragflow/pull/20914 中 @qinling0210 请求的文档范围内
* 重构(deps)：将https://github.com/infiniflow/ragflow/pull/20861中的@xugangqiang将依赖项下载拆分为两个Python脚本
* 重构（cmd）：用https://github.com/infiniflow/ragflow/pull/20876中的@xugangqiang的stdlib标志包解析CLI标志
* 修复（摄取）：通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/20902 中报告知识编译器进度分数
* 重构：删除https://github.com/infiniflow/ragflow/pull/20910中@Caobaining1的低/中/高/超思维模式
* 修复(web): 支持https://github.com/infiniflow/ragflow/pull/20932中@dcc123456定位的源中的音频和视频引用
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/20936中处理@6ba3i配置的所有消息输入
* 修复：更改变量赋值运算符会导致错误：`c.trim() is not a function` by @cike8899 in https://github.com/infiniflow/ragflow/pull/20937
* CI : 优化go缓存，优化runner空间增长过快的问题。通过 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/20931
*修复（代理）：拒绝https://github.com/infiniflow/ragflow/pull/20685中@li872的仅标记引文接地响应
* 修复（代理）：将 StringTransform 分割结果返回为 https://github.com/infiniflow/ragflow/pull/20920 中 @ekalinin 的通用列表
* 修复(web): 仅在 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/20940 中成功保存后关闭重命名模式
* 修复（web）：在https://github.com/infiniflow/ragflow/pull/20939中通过@dcc123456将思维导图触发器从绝对定位中剔除
*修复（数据集）：在https://github.com/infiniflow/ragflow/pull/20942中通过@6ba3i保留管道子块分隔符
* 修复（web）：自动滚动到https://github.com/infiniflow/ragflow/pull/20935中@dcc123456新链接的数据源
* 修复（web）：通过https://github.com/infiniflow/ragflow/pull/20933中的@jay77721过滤数据集meta_fields计数中的空元数据值
* 修复（kvrocks）：来自 https://github.com/infiniflow/ragflow/pull/20774 中的 @Harsh23Kashyap 的 SetNX 和 DistributedLock.Acquire 的表面传输错误（#20660）
* 修复：https://github.com/infiniflow/ragflow/pull/20946 中的 @buua436 禁用代理模板中的最大令牌默认值
* 功能：在https://github.com/infiniflow/ragflow/pull/20917中添加@wangq8的knowledge_compilation_scope
*修复（searchbot）：尊重https://github.com/infiniflow/ragflow/pull/20944中@qinling0210保存的搜索应用程序检索配置
* 修复：https://github.com/infiniflow/ragflow/pull/20938 中@Lynn-Inf 无数据时阻止数据库查询
* 修复：通过https://github.com/infiniflow/ragflow/pull/20952中的@Lynn-Inf处理base_url中的冗余v1
* 修复 https://github.com/infiniflow/ragflow/pull/20955 中 @wangq8 的 3 个搜索配置的 LLM 设置
* 修复（infinity）：使内存消息在 https://github.com/infiniflow/ragflow/pull/20954 中的 @qinling0210 的 Infinity 引擎上工作
* 修复：在代理工具中验证 SofyaSearch API 密钥。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20945
* 修复：删除 https://github.com/infiniflow/ragflow/pull/20970 中@Lynn-Inf 已弃用的代码
*修复（harness）：通过https://github.com/infiniflow/ragflow/pull/20869中的@QAQadws保留消息字段并隔离代理内容
* 修复：在 https://github.com/infiniflow/ragflow/pull/20875 中接受 @QAQadws 在最终迭代中的 ReAct 完成
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/20968 中 @6ba3i 下游执行之前传播提供程序故障
* 在 https://github.com/infiniflow/ragflow/pull/20918 中 @xugangqiang 在分块器上将表块渲染为 HTML 文本
* 重构（配置）：通过 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/20934 中的最终值验证在一处解决 CLI/env/file 优先级
* 在 https://github.com/infiniflow/ragflow/pull/19013 中添加 @martincivan 的斯洛伐克语和捷克语数据集支持
* 修复（代理）：将 @Jinzhengxu 在 https://github.com/infiniflow/ragflow/pull/20909 中生成的文档名称限制为 180 个字符和 255 个字节
*修复：通过https://github.com/infiniflow/ragflow/pull/20983中的@buua436澄清提取器超时错误
* 修复（网络）：同步 Excel 源定位滚动条并修复 https://github.com/infiniflow/ragflow/pull/20960 中 @dcc123456 的突出显示对比度
* 修复：从聊天和搜索页面中删除块元数据。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20985
* 修复（chunker）：停止根据 https://github.com/infiniflow/ragflow/pull/20845 中的 @jay77721 的分割预算对复制表头进行收费
*测试（api）：将REST API覆盖率迁移到https://github.com/infiniflow/ragflow/pull/20991中的@6ba3i Go
* 修复（aliyun）：在 https://github.com/infiniflow/ragflow/pull/20975 中通过 @12britz 的 DashScope 多模态生成转录音频
* 修复（分块）：在 https://github.com/infiniflow/ragflow/pull/20953 中的@jay77721 的每个大写拆分层次结构部分上保留祖先标题
* 修复：删除范围块以路由数据集并通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/21000 中添加 Go API 覆盖范围
* 文档：通过 https://github.com/infiniflow/ragflow/pull/21002 中的 @Yannnnnnnny 改进本地模型部署和提供程序配置文档
* 将 https://github.com/infiniflow/ragflow/pull/21007 中@JinHai-CN 的代码与 EE 对齐
*修复：从https://github.com/infiniflow/ragflow/pull/21009中的@Yannnnnnnny的所有UI翻译中删除了损坏的supported_models链接
* 修复（代理）：通过@flyingwhit在https://github.com/infiniflow/ragflow/pull/20807中使单组件调试与实际运行状态匹配
* 修复（块）：在 https://github.com/infiniflow/ragflow/pull/20990 中的 @qinling0210 中，在每个文档引擎上的源块之后列出父块
*修复：澄清https://github.com/infiniflow/ragflow/pull/21011中@buua436摄取期间的编译器超时错误
* 修复：在 https://github.com/infiniflow/ragflow/pull/21014 中 @buua436 运行的代理机器人中保留命名的 Begin 输入
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/21016中通过@6ba3i保留空附件括号
* 重构：https://github.com/infiniflow/ragflow/pull/21017 中的 @Lynn-Inf 拆分 ingestion.go
*修复（网络）：通过https://github.com/infiniflow/ragflow/pull/21012中的@dcc123456参考图像轮播中的标记键解析引用的块
*修复（web）：在https://github.com/infiniflow/ragflow/pull/20947中@dcc123456保存后立即删除提供程序实例草稿
* 修复（块）：在 https://github.com/infiniflow/ragflow/pull/21015 中通过 @QAQadws 按实体块过滤时，支持分页
* 修复：将 `title` 分块器的 `hierarchy` 和 `group` 配置分为不同的字段。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/21013
* 修复：在 https://github.com/infiniflow/ragflow/pull/21021 中使用 @wangq8 的 TEI_BASE_URL 然后 TEI_HOST
*修复（dao）：将Python时代的平面摄取配置迁移到https://github.com/infiniflow/ragflow/pull/20986中@jay77721的管道组件上
* 文档：在https://github.com/infiniflow/ragflow/pull/21020中添加@Yannnnnnnny的标签迁移描述
* 修复：防止画布上节点的左侧句柄作为连接其他节点的起点。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/21019
* 修复（解析器）：将短行正文页排除在 https://github.com/infiniflow/ragflow/pull/20988 中@jay77721 删除 PDF TOC 的范围之外
*修复（解析器）：通过https://github.com/infiniflow/ragflow/pull/17673中的@Taranum01通过PDF TCADP路径转发调用者ctx
* 删除无效的 ParseResult.HTML 字段和多余的 EmailParser json-path Text by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20992
* 修复（解析器）：继承合并的数据单元格，剥离不可见的字符，修剪无数据列，由https://github.com/infiniflow/ragflow/pull/20996中的@jay77721
* 测试(api): 通过@6ba3i迁移https://github.com/infiniflow/ragflow/pull/20995中的内存和消息端点覆盖
* 测试(api): 迁移https://github.com/infiniflow/ragflow/pull/20999中@6ba3i的OpenAI兼容性和插件工具测试
*测试（api）：通过@6ba3i在https://github.com/infiniflow/ragflow/pull/21004中迁移并改进检索API覆盖率
*修复（代理）：从https://github.com/infiniflow/ragflow/pull/20987中的@6ba3i的股票研究模板中删除空工具
* 修复（chunk）：通过 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/21022 中公开块列表中的每个块 `available`
* 修复：@cike8899 在 https://github.com/infiniflow/ragflow/pull/21024 中以用户友好的方式展示索引器的搜索方法
* 重构（cmd）：通过https://github.com/infiniflow/ragflow/pull/20883中的@xugangqiang将服务器运行程序提取到internal/server/*包中
* 修复（搜索）：像 Python 一样删除搜索应用行，在 https://github.com/infiniflow/ragflow/pull/21005 中删除 @qinling0210 未使用的软删除助手
* 重构（解析器）：在 https://github.com/infiniflow/ragflow/pull/20998 中将 ParseResult.JSON 键入为 @xugangqiang 的 []DocItem 边界适配器
* 修复（数据集）：自动解析https://github.com/infiniflow/ragflow/pull/21018中@flyingwhit不支持的上传
*修复（摄取）：https://github.com/infiniflow/ragflow/pull/21003中@jay77721对单个LLM调用的范围提取器超时
* 修复：@flyingwhit 在 https://github.com/infiniflow/ragflow/pull/20903 中的标记器池竞争条件
* 修复：当 @QAQadws 在 https://github.com/infiniflow/ragflow/pull/20885 中 Put 返回时取消 GCS 上传上下文
* 重构：通过https://github.com/infiniflow/ragflow/pull/21023中的@Lynn-Inf将缓存移动到事务
* 修复（文件）：处理列表请求中消失的文件夹，而不是通过 @flyingwhit 在 https://github.com/infiniflow/ragflow/pull/20892 中返回 500
* 修复（示例）：使用 PATCH 在 https://github.com/infiniflow/ragflow/pull/21037 中通过 @jrlprost 在 chunk_example.sh 中进行块更新
* 修复（无穷大）：在 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/21043 中插入时，每个块 id 保留一行
* 开发：在 https://github.com/infiniflow/ragflow/pull/21048 中保留 @wangq8 的 EE 许可证
* 修复（解析器）：增加截断的行以托管 https://github.com/infiniflow/ragflow/pull/21044 中 @jay77721 继承的合并值
* 修复https://github.com/infiniflow/ragflow/pull/21052中@JinHai-CN的CLI输出截断问题
* 修复：向提取器操作符的“标签”字段添加工具提示。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/21047
*修复：通过https://github.com/infiniflow/ragflow/pull/21045中的@buua436更新租户模型最大令牌迁移版本
* 修复：https://github.com/infiniflow/ragflow/pull/21039 中的 @Lynn-Inf 在 kb.go 中 rm 死代码
* 修复消息中大于号无法显示的问题。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/21055
* 构建：在 https://github.com/infiniflow/ragflow/pull/19247 中添加 @xugangqiang 的多平台本机构建支持（linux/arm64、darwin）
* 文档：通过 @Yannnnnnnny 在 https://github.com/infiniflow/ragflow/pull/20951 中统一沙箱文档
* Feat/agentic kg 轮廓和呼叫者身份由 @Caobaining1 在 https://github.com/infiniflow/ragflow/pull/21053 中提供
* Go：https://github.com/infiniflow/ragflow/pull/21056中@JinHai-CN更新EE接口
* 测试(api): 将Python数据集API覆盖率迁移到https://github.com/infiniflow/ragflow/pull/21063中@6ba3i的Go
* 测试(api)：通过@6ba3i在https://github.com/infiniflow/ragflow/pull/21060中迁移并提高任务路线覆盖率
*测试（api）：通过@6ba3i在https://github.com/infiniflow/ragflow/pull/21057中迁移和改进会话API测试
* 测试(api)：通过@6ba3i在https://github.com/infiniflow/ragflow/pull/21059中迁移和增强系统API测试
* 修复：在https://github.com/infiniflow/ragflow/pull/21061中通过@Lynn-Inf将标签设置为v1.0.0-rc2
* docker文件并发布，在https://github.com/infiniflow/ragflow/pull/21067中添加由@myf-bee构建的arm64
* Go：删除https://github.com/infiniflow/ragflow/pull/21073中@JinHai-CN未使用的API
* 测试（api）：将Python文档API覆盖率迁移到https://github.com/infiniflow/ragflow/pull/21066中@6ba3i的Go
* feat(infinity): 通过 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/21068 中为代理 grep 工具实现 SearchByRegexp
* 文档：更新 https://github.com/infiniflow/ragflow/pull/21069 中 @asiroliu 的自述文件和文档中对 v1.0.0-rc2 的版本引用
* 文档：1.0.0-rc2 release note 由 @wangq8 在 https://github.com/infiniflow/ragflow/pull/21064 中

## 新贡献者
* @sunshanhui 在 https://github.com/infiniflow/ragflow/pull/20467 中做出了第一个贡献
* @somasoil 在 https://github.com/infiniflow/ragflow/pull/20550 中做出了第一个贡献
* @Harsh28-raj 在 https://github.com/infiniflow/ragflow/pull/20548 中做出了第一个贡献
* @Felixkw12 在 https://github.com/infiniflow/ragflow/pull/20577 中做出了第一个贡献
* @SashaMIT 在 https://github.com/infiniflow/ragflow/pull/20414 中做出了第一个贡献
* @JuampiHernandez 在 https://github.com/infiniflow/ragflow/pull/20479 中做出了第一个贡献
* @errmakov 在 https://github.com/infiniflow/ragflow/pull/20480 中做出了第一个贡献
* @quifox 在 https://github.com/infiniflow/ragflow/pull/20546 中做出了第一个贡献
* @pratikgx 在 https://github.com/infiniflow/ragflow/pull/20521 中做出了第一个贡献
* @fatwang2 在 https://github.com/infiniflow/ragflow/pull/20561 中做出了第一个贡献
* @why5602337 在 https://github.com/infiniflow/ragflow/pull/20459 中做出了第一个贡献
* @kassdinzheng123 在 https://github.com/infiniflow/ragflow/pull/20662 中做出了第一个贡献
* @BilalAtique 在 https://github.com/infiniflow/ragflow/pull/20529 中做出了第一个贡献
* @MOHITPRADHAN35 在 https://github.com/infiniflow/ragflow/pull/20482 中做出了第一个贡献
* @huiq777 在 https://github.com/infiniflow/ragflow/pull/20225 中做出了第一个贡献
* @shrxyas-246 在 https://github.com/infiniflow/ragflow/pull/20692 中做出了第一个贡献
* @vedjaw 在 https://github.com/infiniflow/ragflow/pull/20731 中做出了第一个贡献
* @poijygfdyy 在 https://github.com/infiniflow/ragflow/pull/20725 中做出了第一个贡献
* @12britz 在 https://github.com/infiniflow/ragflow/pull/20758 中做出了第一个贡献
* @yuee3 在 https://github.com/infiniflow/ragflow/pull/20736 中做出了第一个贡献
* @lorenzozanee 在 https://github.com/infiniflow/ragflow/pull/20695 中做出了第一个贡献
* @demonroute2 在 https://github.com/infiniflow/ragflow/pull/20853 中做出了第一个贡献
* @heranliu 在 https://github.com/infiniflow/ragflow/pull/20850 中做出了第一个贡献
* @dakjdakd 在 https://github.com/infiniflow/ragflow/pull/20627 中做出了第一个贡献
* @wenqiw777 在 https://github.com/infiniflow/ragflow/pull/20334 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v1.0.0-rc1...v1.0.0-rc2

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v1.0.0-rc2` · 📅 发布：2026-10-16 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v1.0.0-rc2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
