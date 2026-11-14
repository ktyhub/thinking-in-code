---
title: "ragflow v1.0.0-rc1"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v1.0.0-rc1"
version: "v1.0.0-rc1"
published: "2026-09-29"
type: "major"
lang: "zh"
---

# ragflow v1.0.0-rc1

RAGFlow v1.0.0-rc1 是 v1.0.0 的预览版。该版本标志着Go语言对RAGFlow进行了全面重写，大幅降低了系统资源消耗，并以轻量级架构取代了之前的重量级部署模型。

## 架构变化
- **消息队列：** 从 Redis 迁移到 NATS。
- **缓存和检查点：** Kvrocks 现在充当缓存和检查点的后备存储。

## 数据升级

容器启动后，RAGFlow 会自动启动数据升级过程，将现有数据从 v0.27.2 迁移到 v1.0.0-rc1。请注意，此升级是不可逆的 - 一旦完成，数据将无法回滚到 v0.27.2。

## 升级前提条件及注意事项
1. 升级前备份所有数据。
2. 在继续之前，请确保您的现有部署已在 v0.27.2 上。
3. 如果升级失败，请从备份恢复系统并提交详细说明失败的问题。

## 兼容性
1. **RAGFlow CLI：** 在 Go 中重新实现，替换之前的 Python 版本。
2. **API 兼容性：** Go 实现不再支持[已弃用的 API](https://ragflow.io/docs/http_api_reference#removed-api-aliases)。
3. **SDK 兼容性：** Python SDK 不受影响。

## 已知问题
1. DeepDoc目前仅支持CPU环境。
2. 不再支持本地沙箱。
3. 尚不支持 **Team/Me** 权限模型。

## 发生了什么变化
* 通过 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/19500 将代理 RAG 移植到 GO
* 恢复 https://github.com/infiniflow/ragflow/pull/19503 中 @wangq8 的“修复（摄取）：允许重新解析在进度 0 时取消解析的文档”
* 修复（代理/工具）：通过 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/19244 中翻译 Info() 中的 MCP 工具 inputSchema.properties
* 修复：删除 https://github.com/infiniflow/ragflow/pull/19449 中 @Lynn-Inf 弃用的函数
*修复（sdk）：在https://github.com/infiniflow/ragflow/pull/19365中保留@AnnaSuSu的代理答案参考
*修复（mcp）：发送rerank_candidates_count，以便检索分页可以在https://github.com/infiniflow/ragflow/pull/19018中@xu-jia-ming的过去64个结果中工作
*修复（代理）：通过解析的嵌入模型比较检索KB，而不是https://github.com/infiniflow/ragflow/pull/19206中@kabishou11的原始embd_id
* Go：在https://github.com/infiniflow/ragflow/pull/19485中添加@JinHai-CN的集成测试
* 修复：修改TreeSelect组件的文字颜色。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19507
* 进入 wiki 后，即使实际上没有进行任何更改，右上角也会指示已进行修改。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19482
*修复（api）：通过@Harsh23Kashyap在https://github.com/infiniflow/ragflow/pull/19359中的数据集访问授权任务取消
* refa：删除https://github.com/infiniflow/ragflow/pull/19437中@buua436未使用的知识编译代码
* 修复：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/19486 中避免嵌套编译器池嵌入死锁
* 修复（调用）：在 https://github.com/infiniflow/ragflow/pull/19481 中通过 @6ba3i 容忍跨运行时的无效标头
* 修复（wiki）：将 MAP 提取的块视为缓存命中，而不是 @kabishou11 在 https://github.com/infiniflow/ragflow/pull/19208 中丢失
* 修复（web）：防止 @Souravrajvi0 在 https://github.com/infiniflow/ragflow/pull/19475 中的 DOCX 预览无限更新循环
* 修复(web): 在 https://github.com/infiniflow/ragflow/pull/18951 中添加 @huyua9 的繁体中文子分隔符翻译
* 修复(figure_parser): 接受 lang 作为 VisionFigureParser 上的命名参数 (#17280) by @Taranum01 in https://github.com/infiniflow/ragflow/pull/19511
* 修复（数据流）：在 https://github.com/infiniflow/ragflow/pull/18921 中保留 @huyua9 的标量文本输出形状
* 修复(i18n): 在 https://github.com/infiniflow/ragflow/pull/18948 中本地化 @huyua9 的中文分隔符预览
* 将 https://github.com/infiniflow/ragflow/pull/19446 中 @xugangqiang 的 infiniflow/ragflow-build 的 ONNX 运行时统一为 1.29.0
* 修复（文档）：在 https://github.com/infiniflow/ragflow/pull/19444 中 @taek105 更新时验证不可变字段
* 修复（结构图）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/19523 中从原始行中发现存储桶
* 修复：将 NumberInput 引用转发到 @huyua9 在 https://github.com/infiniflow/ragflow/pull/18904 中的输入
* 修复(ssrf): 在 https://github.com/infiniflow/ragflow/pull/19517 中通过 @aroh3006 解包 URL 保护中的 IPv6 转换地址
* Feat：使管道中解析器操作符的文件可删除。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19384
* 修复（模板）：在https://github.com/infiniflow/ragflow/pull/18958中通过@huyua9对齐数据分析CodeExec提示
* 修复（存储）：在 https://github.com/infiniflow/ragflow/pull/19526 中通过 @6ba3i 重试短暂的 S3 故障
* 将代理 RAG PR 移植到 https://github.com/infiniflow/ragflow/pull/19527 中的 @qinling0210 的 GO
* refa：删除https://github.com/infiniflow/ragflow/pull/19519中@buua436的Go工件删除APIs
* 测试（无穷大）：覆盖https://github.com/infiniflow/ragflow/pull/18956中@huyua9的SQL文字escaping
* 修复：SelectWithSearch 下拉菜单中的文本被复选标记图标遮挡。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19534
* 修复（构建）：在 https://github.com/infiniflow/ragflow/pull/19152 中针对 @xugangqiang 的后缀版本锚定 pdf_oxy 版本门
* feat(nlp)：对自然块文本进行重新排名，而不是 @vincentlambert 在 https://github.com/infiniflow/ragflow/pull/16961 中标记化的 content_ltks
* 修复（chunker）：每个 HardSplitPiece 迭代一次 BPE 传递，而不是 @changshenhan 在 https://github.com/infiniflow/ragflow/pull/18648 中的两次
*修复：更新https://github.com/infiniflow/ragflow/pull/19532中@buua436文档状态更改的知识工件
* 将缓存后端从 Valkey 8 迁移到 apache/kvrocks:2.16.0 by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19374
* 文档： https://github.com/infiniflow/ragflow/pull/19538 中 @Yannnnnnnny 更新常见问题解答
* 重构（解析器）：通过 https://github.com/infiniflow/ragflow/pull/19467 中的 @jay77721 将解析器输出统一为结构化 JSON 项
* feat(agent): 支持 https://github.com/infiniflow/ragflow/pull/16938 中 @huang-aoqin 的检索节点和工具中的 document_ids
* 修复（摄取）：https://github.com/infiniflow/ragflow/pull/19536 中的 @jay77721 停止从多行表格单元格中删除 QA 对
* 通过 @yingfeng 在 https://github.com/infiniflow/ragflow/pull/19267 中向树/页面索引编译管道添加声明/证据
* 修复（解析器）：通过 @Souravrajvi0 在 https://github.com/infiniflow/ragflow/pull/19237 中处理大型稀疏电子表格、JSON BOM 和 XLSX QA 分块
* 修复（wiki）：由于 https://github.com/infiniflow/ragflow/pull/19305 中 @euvre 的 page-slug 键不匹配，Go API 上的版本历史记录始终为空
* 通过 @yingfeng 在 https://github.com/infiniflow/ragflow/pull/19563 将 Agentic RAG 移植到 Golang
* feat(数据源): 在https://github.com/infiniflow/ragflow/pull/19425中添加@Gonghan-Princess的飞书Wiki文件连接器
* 文档：修复 https://github.com/infiniflow/ragflow/pull/19576 中 @jrlprost 删除的 docker-compose-gpu.yml 的死链接
*修复（ollama）：在https://github.com/infiniflow/ragflow/pull/19529中禁用@6ba3i对视觉描述的推理
* 修复（beartype）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/19531 中删除包范围的导入钩子
* 保存数据库字段时自定义文件扩展名，并解析 HTML 片段，而不仅仅是 @wadefelix 在 https://github.com/infiniflow/ragflow/pull/15998 中的完整 HTML 文档
* 修复(api): 在https://github.com/infiniflow/ragflow/pull/19543中通过@coderdailyone在Go API中按租户授权数据集文档下载路径
* 修复：https://github.com/infiniflow/ragflow/pull/18894 中 @huyua9 处理间接 PDF 注释数组
*修复（sdk）：在https://github.com/infiniflow/ragflow/pull/19505中保留@AnnaSuSu在块上的图像ID
* 修复：将“top n”的最小值设置为 1 并将其限制为整数。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19547
* 修复：通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19546 中验证 webhook 表单
* feat(syncer)：https://github.com/infiniflow/ragflow/pull/19453中@mkaaad为Go后端添加飞书Wiki连接器
* 壮举：在 https://github.com/infiniflow/ragflow/pull/19561 中添加 @anonrouterai 的 AnonRouter 模型提供者
* 修复：表面 MinerU API 错误体并通过 @huang-aoqin 在 https://github.com/infiniflow/ragflow/pull/17308 中重新引发解析器失败
* 修复（模型）：通过https://github.com/infiniflow/ragflow/pull/19562中的@ming1523删除一笔交易中的提供者模型和实例
* 修复：修复 @anupamme 在 https://github.com/infiniflow/ragflow/pull/19524 中的 ob_conn_base.py 中的安全问题
* feat(连接器): 支持 MySQL/PostgreSQL 同步的 file_extension by @mkaaad in https://github.com/infiniflow/ragflow/pull/19466
* feat(channels): WeCom可以在https://github.com/infiniflow/ragflow/pull/18598中通过@brucehu绑定代理
*修复（wiki）：标记检索字段，以便编译后的页面可以通过https://github.com/infiniflow/ragflow/pull/18787中的@Souravrajvi0进行搜索
* feat(api)：在https://github.com/infiniflow/ragflow/pull/18889中添加@Souravrajvi0用于块图像更新的image_update_mode
* 修复：保留对 qqbot 调度任务的引用，以便 @muhzuhaib 在 https://github.com/infiniflow/ragflow/pull/19029 中不会删除回复
* 修复（代理）：使 Python Webhook 跟踪通过 @T1mn 在 https://github.com/infiniflow/ragflow/pull/19091 中追加原子
* 修复（rag）：将 PDF 解析器表分配给 https://github.com/infiniflow/ragflow/pull/19559 中 @Ritiky23 的书籍分块方法中的 tbl（#19557）
* 修复（存储）：https://github.com/infiniflow/ragflow/pull/19580 中 @6ba3i 重试后保留原始错误
* 修复(web): https://github.com/infiniflow/ragflow/pull/18909 中 @huyua9 的作用域管道日志详细查询键
* 修复（api）：通过 @Harsh23Kashyap 在 https://github.com/infiniflow/ragflow/pull/19574 中验证嵌入检查样本计数
*修复（api）：在https://github.com/infiniflow/ragflow/pull/19368中将空的metadata_condition.conditions列表视为@Harsh23Kashyap没有过滤器
* 修复（api）：通过https://github.com/infiniflow/ragflow/pull/19353中的@Harsh23Kashyap将元数据过滤器结果与调用者的文档范围相交
* 修复 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/19590 中 CI 本机后端测试失败的问题
* 删除https://github.com/infiniflow/ragflow/pull/19591中@qinling0210的内部cli“从文件插入块”和“从文件插入元数据”
* 修复（存储）：在 https://github.com/infiniflow/ragflow/pull/19578 中 @6ba3i 保留后端重试期间的错误
* 修复：https://github.com/infiniflow/ragflow/pull/19525中@buua436合并同名知识图实体
* 修复：https://github.com/infiniflow/ragflow/pull/19548中@buua436按任务类型拆分知识编译日志
* 修复（解析器）：将 xlsx 电子表格作为 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/19509 中的类型表块发出
* 修复：UI 聊天应在 1.0 中传递 pass_all_history_messages=false，在 https://github.com/infiniflow/ragflow/pull/19602 中传递 @cike8899
* 修复：所选无效数据集无法删除。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19603
*修复：通过https://github.com/infiniflow/ragflow/pull/19605中的@buua436更新图像实用程序测试存根
* 文档：修复https://github.com/infiniflow/ragflow/pull/19606中@liang0417的Python前端代理启动问题
* 修复：在https://github.com/infiniflow/ragflow/pull/19579中通过@buua436将思维导图与Python对齐
* 恢复 https://github.com/infiniflow/ragflow/pull/19618 中 @wangq8 的“修复：UI 聊天应在 1.0 go 中传递 pass_all_history_messages=false”
* 重构（摄取）：将文档解析状态与 document.run 分离，以支持 @jay77721 在 https://github.com/infiniflow/ragflow/pull/19533 中的 ingestion_task
* 修复（web）：通过https://github.com/infiniflow/ragflow/pull/19587中的@dcc123456调整Go ingestion_status的文档解析状态（取决于#19533）
* 功能：隐藏与 Go 版本 wiki 相关的删除和更新按钮。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19620
* 修复https://github.com/infiniflow/ragflow/pull/19615中@yingfeng的代理搜索错误
* 修复（代理）：当检索工具运行时，代理回复为空 — need2cite 在 https://github.com/infiniflow/ragflow/pull/19483 中 @spicyfishPro 中流翻转
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/19499中通过@LostSnowfluff保留变量分配器中的布尔值
*修复（sdk）：停止解析等待https://github.com/infiniflow/ragflow/pull/19506中@AnnaSuSu的状态查找失败
* 壮举：通过 @DennyHo0917 在 https://github.com/infiniflow/ragflow/pull/19566 中添加 API-Route 作为模型提供者
* PY: @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/19599 中重构
* 修复（代理/工具）：通过 @marmar9615-cloud 在 https://github.com/infiniflow/ragflow/pull/19584 中编码 GitHub 和 QWeather 查询参数
* 文档：@gluedtea 在 https://github.com/infiniflow/ragflow/pull/19541 中澄清解析器和电子邮件文本
* 修复：在 https://github.com/infiniflow/ragflow/pull/19617 中显示 @buua436 的文档图实体计数
* 功能：缩短时间线连接线的默认距离。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19612
* 修复：在 https://github.com/infiniflow/ragflow/pull/19607 中 @Lynn-Inf 的 api 响应中显示 modelExtra
* feat(memory)：https://github.com/infiniflow/ragflow/pull/19512中的@taek105使Go内存提取任务持久且可恢复
* 修复（ci）：从预置的目录中读取 DeepDoc 测试数据，而不是通过 https://github.com/infiniflow/ragflow/pull/19594 中的 @xugangqiang 链接它
* 测试：在 https://github.com/infiniflow/ragflow/pull/18898 中覆盖 @huyua9 的 TokenizerFromUpstream 空负载合约
*修复（检索）：在https://github.com/infiniflow/ragflow/pull/19502中@6ba3i进行空混合搜索后恢复密集候选
* 通过@qinling0210在https://github.com/infiniflow/ragflow/pull/19626中实现GO中的端点GET /datasets/tags/aggregation
* 文档：修复陈旧的内部链接和 https://github.com/infiniflow/ragflow/pull/19633 中 @Mnilax 的许可证参考
*修复（db）：在https://github.com/infiniflow/ragflow/pull/19530中@6ba3i连接丢失时中止中毒事务
* 修复：在wiki树页面调用`children`和`graph`接口时，需要包含`keywords`参数。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19627
* 通过 https://github.com/infiniflow/ragflow/pull/19641 中的 @qinling0210 修复 GO 中的聊天机器人推理
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/19539中通过@6ba3i干净地拒绝不支持的图像输入
* feat(mineru)：https://github.com/infiniflow/ragflow/pull/18761 中@Taranum01 块流中嵌入式图像丢失的可观测性 (#16978)
* 修复（分块）：在 https://github.com/infiniflow/ragflow/pull/19005 中通过 @yzl0ng 对齐自定义分隔符文本元数据
* 修复（ocr）：防止 OpenCV 重新映射因钳夹而导致超大图像崩溃...作者：https://github.com/infiniflow/ragflow/pull/19419 中的 @lucasoffchain
*修复（api）：拒绝@huyua9在https://github.com/infiniflow/ragflow/pull/18919中删除空提供程序实例
*修复（摄取）：在https://github.com/infiniflow/ragflow/pull/19478中强制执行@Souravrajvi0的纯文本预索引电汇合同
*修复（api）：在https://github.com/infiniflow/ragflow/pull/18949中由@huyua9保留部分更新的父子配置
* feat(ingestion)：通过https://github.com/infiniflow/ragflow/pull/19494中的@jay77721跟踪从队列到终端的运行管道日志
* 修复(naive): 不要将https://github.com/infiniflow/ragflow/pull/19513中的@huang-aoqin的视觉布局模型路由到MinerU
* ci：删除 kvrocks-parity 工作流程及其由 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/19583 中运行的集成测试
*修复：在https://github.com/infiniflow/ragflow/pull/19636中记录@buua436生成的wiki页面版本
* 修复：支持https://github.com/infiniflow/ragflow/pull/19645中@buua436导航APIs中的关键字
* 修复：https://github.com/infiniflow/ragflow/pull/19653 中 @buua436 同步导航树与文档状态
* 构建（deps）：https://github.com/infiniflow/ragflow/pull/19659 中的 @dependabot[bot] 从 3.1.2 到 3.1.3 的缓冲瓶
*构建（deps）：通过https://github.com/infiniflow/ragflow/pull/19655中的@dependabot[bot]将/api/channels/whatsapp/gateway-node中的protobufjs从7.6.4提升到7.6.6
* 构建（deps）：通过https://github.com/infiniflow/ragflow/pull/19657中的@dependabot[bot]将/web中的美人鱼从11.16.0撞到11.16.1
*构建（deps）：由@dependabot [bot]在https://github.com/infiniflow/ragflow/pull/19660中将langgraph-sdk从0.3.6碰撞到0.3.15
* 修复：图片解析方式已配置，但上传图片仍出错。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19667
*修复（引擎）：在https://github.com/infiniflow/ragflow/pull/19665中@qinling0210按查询更新中请求的ID过滤块
* 重构（摄取）：通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/19611 中迁移通用解析器和分块器合约
* 重构：将聊天消息/引用移动到https://github.com/infiniflow/ragflow/pull/19577中@wangq8的专用表
* 修复(web): 在 https://github.com/infiniflow/ragflow/pull/18892 中通过@huyua9 反应性地渲染子分隔符字段
* 修复：在 https://github.com/infiniflow/ragflow/pull/18901 中 @huyua9 的代理模板描述中正确使用连字符实用程序
*修复（解析器）：在https://github.com/infiniflow/ragflow/pull/19555中附加@li872在TCADP电子表格JSON项目上的位置
*修复：在https://github.com/infiniflow/ragflow/pull/19640中通过@buua436解析关键字图搜索中的模板名称
* 修复：https://github.com/infiniflow/ragflow/pull/19666 中@buua436 按种类过滤编译状态
* 修复 https://github.com/infiniflow/ragflow/pull/19406 中@JessYanCoding 的管道电子邮件解析器对每条多部分消息失败的问题
* 修复（nlp）：检测https://github.com/infiniflow/ragflow/pull/17012中@chuenchen309的capitalized目录标题
* PY：在https://github.com/infiniflow/ragflow/pull/19669中@JinHai-CN在检索内存模式下应用跨语言翻译
* 修复没有编译器 ID 的保存代理应在 https://github.com/infiniflow/ragflow/pull/19672 中由 @wangq8 报告错误的问题
* feat(web)：通过https://github.com/infiniflow/ragflow/pull/19676中的@jay77721解释管道形式中的分块分隔符语义
* 前往：通过https://github.com/infiniflow/ragflow/pull/19675@JinHai-CN发送邮件邀请会员
* 修复(go)：迁移清理并通过 https://github.com/infiniflow/ragflow/pull/19598 中的@Lynn-Inf 添加数据库版本跟踪
* 修复：在 https://github.com/infiniflow/ragflow/pull/19677 中通过 @Lynn-Inf 从模板创建时忽略空数据集配置
*修复（记忆）：从页面列表查询中派生过滤器选项，以防止https://github.com/infiniflow/ragflow/pull/19537中@dcc123456使用过时的过滤器
* 修复（web）：在https://github.com/infiniflow/ragflow/pull/19614中通过@dcc123456在块卡内容中添加表格样式
* feat(web)：通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/19621 中向 CSV 查看器和块列表添加虚拟滚动
* feat(web)：在https://github.com/infiniflow/ragflow/pull/19624中通过@dcc123456禁用用户消息的LaTeX数学渲染
* 壮举：@seven7763 在 https://github.com/infiniflow/ragflow/pull/19560 中添加 DaoXE 作为 OpenAI 兼容模型提供者
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/19637中通过@6ba3i公开令牌和回合控制
* 修复（ragcon）：https://github.com/infiniflow/ragflow/pull/19476 中 @6ba3i 将 drop_params 嵌入到官方端点的范围
*修复（代理）：连接MCP工具并通过https://github.com/infiniflow/ragflow/pull/19628中的@6ba3i保留执行错误
* 修复：代理：Cli多次查看版本历史，然后cli查看初始版本导致错误。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19674
* 修复：去除Go版本知识库配置页面多余参数。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19668
* feat(ui): 通过https://github.com/infiniflow/ragflow/pull/19658中的@dcc123456为MultiSelect组件添加锁定选项支持
* 修复：知识编译-图表-搜索后实体数量保持不变。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19652
* 修复（web）：通过https://github.com/infiniflow/ragflow/pull/19648中的@dcc123456回退到Go后端标签KB ID的数据集ID
* 修复：当代理编译器通过“下一步”操作添加新的块节点时，可以生成多个后续节点。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19644
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/19625 中 @euvre 遵循 Go /agents 列表中的多选画布类别过滤器
* 修复(llm): https://github.com/infiniflow/ragflow/pull/19288 中@Taranum01 跳过统一前文 OpenAI 兼容端点的 dashscope/ 前缀
* 修复（auth）：https://github.com/infiniflow/ragflow/pull/19651 中@6ba3i 单独的 OAuth JIT 配置策略
* 修复（网络）：在https://github.com/infiniflow/ragflow/pull/18940中@huyua9在嵌入应用程序模式中保护租户信息
* feat(web/switch)：允许在 Switch 条件下使用点符号字段路径 (#14235) by @Khaostica in https://github.com/infiniflow/ragflow/pull/15071
* 修复：https://github.com/infiniflow/ragflow/pull/19680 中 @Lynn-Inf 将实例名称限制为数字、下划线和字母
* 修复（data_source）：支持 Azure DevOps 的自定义基本 URL 和 HTTP…作者：@ori-frenkel，https://github.com/infiniflow/ragflow/pull/19407
* 修复（基岩）：报告预期的密钥模式，而不是 https://github.com/infiniflow/ragflow/pull/17374 中 @Anai-Guo 的 JSONDecodeError (#17373)
* 修复：将附件内容附加到https://github.com/infiniflow/ragflow/pull/19691中@wangq8的最后一个用户提示中
* 修复(llm): 遵循@L4XB在https://github.com/infiniflow/ragflow/pull/19690中已经声明的BaiduYiyanEmbed批量大小
* 修复：在 https://github.com/infiniflow/ragflow/pull/19700 中使用组件名称而不是 @wangq8 的 ID
* Dev：添加LLM_DEBUG来调试LLM请求和响应。通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19703
* 修复(mineru): 当 @devYRPauli 在 https://github.com/infiniflow/ragflow/pull/19183 中配置多个页面范围时上传 PDF 一次
*修复（解析器）：在https://github.com/infiniflow/ragflow/pull/19521中由@wang393刷新_build_cks中表/图像块之前的待处理文本
* feat(ingestion)：停止将业务数据持久保存在https://github.com/infiniflow/ragflow/pull/19631中@xugangqiang的管道操作日志DSL中
*修复（摄取）：在https://github.com/infiniflow/ragflow/pull/19678中@jay77721将图像/表格上下文窗口包含在块文本中
* 修复：允许在https://github.com/infiniflow/ragflow/pull/19709中@Lynn-Inf在instance_name中使用-
* 修复（dao）：https://github.com/infiniflow/ragflow/pull/19601 中 @marmar9615-cloud 的搜索、聊天、文件和数据集列表中允许列出 orderby 列
* 修复（api）：停止 trusting X-Forwarded-For 来自 https://github.com/infiniflow/ragflow/pull/19550 中 @coderdailyone 的代理 webhook IP 白名单中的每个对等点
*修复：通过https://github.com/infiniflow/ragflow/pull/19701中的@buua436改进知识编译器LLM处理
* 修复（deepdoc）：在 https://github.com/infiniflow/ragflow/pull/19688 中保留 @Ritiky23 的 VLM 提取的无文本 PDF 图形（#19679）
* 修复：根据所选类型请求工件日志。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19716
* 修复https://github.com/infiniflow/ragflow/pull/19713中@wangq8在系统提示下{date}不生效的问题
*修复（块）：通过@dcc123456在https://github.com/infiniflow/ragflow/pull/19704中的编译模板类型来控制声明/证据面板
* 修复：数据集文件上传：对于不支持的文件类型，提示用户配置相应的文件解析器。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19710
* 修复(pipeline-log): 记录 pipeline Parser 的 parse_method，而不是 https://github.com/infiniflow/ragflow/pull/18763 中 @Taranum01 的 document.parser_id (#18306)
* 修复：API 返回的自引用数据导致思维导图页面冻结。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19720
* 修复（csv-preview）：将边框移动到内部包装器，以便它仅通过 https://github.com/infiniflow/ragflow/pull/19715 中的 @dcc123456 包装内容
* 修复：https://github.com/infiniflow/ragflow/pull/19718 中@wangq8 默认启用管理员用户
* 修复（deepdoc）：https://github.com/infiniflow/ragflow/pull/19695 中的 @jay77721 将每个推理调用保持在一个进程 CPU 预算内
* 当 Tika 从 https://github.com/infiniflow/ragflow/pull/19692 中的 @JessYanCoding 的 .doc 中提取任何内容时，修复 One 和 Book 分块器
* perf(chunker)：通过 @changshenhan 在 https://github.com/infiniflow/ragflow/pull/19712 中使用单编码令牌遍历制作 HardSplitPiece O(L)
* 修复（解析器）：将单词边界保留为 @L4XB 在 https://github.com/infiniflow/ragflow/pull/19693 中带入 markdown 的样式化空格
* 修复（web）：通过 @huyua9 在 https://github.com/infiniflow/ragflow/pull/18911 中更正元数据过滤器按钮语义
* 修复（摄取）：对 https://github.com/infiniflow/ragflow/pull/19696 中 @jay77721 的句子进行子标记计数并剪切媒体上下文
* 修复：在 https://github.com/infiniflow/ragflow/pull/19632 中@ondery 摄取大型连接器期间保持文件 API 响应
* 修复（解析器）：保留单行幻灯片表，而不是通过 @L4XB 在 https://github.com/infiniflow/ragflow/pull/19705 中删除它
* 修复（解析器）：在 https://github.com/infiniflow/ragflow/pull/19706 中的 @L4XB 接受 Excel pandas 回退中的一页字典
* 修复（api）：从 https://github.com/infiniflow/ragflow/pull/19686 中的 @ebarkhordar 从 /dify/retrieval 返回文档元数据
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/19719中用户详细信息显示不起作用的问题
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/19413中接受@Harsh23Kashyap在VariableAggregator中的字符串变量选择器
* 修复：https://github.com/infiniflow/ragflow/pull/19721中@buua436过滤自循环知识编译器关系
* 文档：更新https://github.com/infiniflow/ragflow/pull/19734中@Yannnnnnnny的知识编译文档
* 文档：通过 @Yannnnnnnny 在 https://github.com/infiniflow/ragflow/pull/19730 中更新 MCP 文档
* 修复（i18n）：将“最大标记”重命名为“最大上下文长度”，并删除 https://github.com/infiniflow/ragflow/pull/19729 中 @dcc123456 的误导性默认值
* 修复：切换文档级图形选择器也会更新相应的总节点数。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19732
* 修复：cli通过思维导图虚拟根节点调用API时出错。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19731
* 修复（文件提交）：停止删除操作导致 @marmar9615-cloud 在 https://github.com/infiniflow/ragflow/pull/19654 中的整个提交崩溃
* 由 @yingfeng 在 https://github.com/infiniflow/ragflow/pull/19687 中优化代理 RAG 的召回
* 功能：迁移 https://github.com/infiniflow/ragflow/pull/19724 中 @Lynn-Inf 的聊天消息和参考
* 修复（api）：在 https://github.com/infiniflow/ragflow/pull/19723 中通过 @6ba3i 对齐 Go 代理合约奇偶校验
* 修复(go)：通过 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/19694 中强化连接器 SSRF
*修复（api）：将内存列表tenant_id过滤器钳位到https://github.com/infiniflow/ragflow/pull/19739中@coderdailyone加入的租户
* 修复（同步器）：将单词边界保留为 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/19722 中带入 markdown 的样式化空格
* feat(mcp)：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/19673 中添加 SDK 支持的原生 Go MCP 运行时
* 修复搜索机器人返回 500，应该是 200，并带有 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19763 中的错误消息
* 修复（代理）：解析 https://github.com/infiniflow/ragflow/pull/19752 中 @coderdailyone 右锚定在提供商上的复合 llm_id
* feat(deepdoc): 通过 https://github.com/infiniflow/ragflow/pull/17669 中的 @HUAN2022A 在 check_installation 中验证 PaddleOCR 服务连接
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/19761中由@6ba3i保存和运行之前拒绝丢失的模型
* 修复（解析器）：跳过不可读的 EPUB 章节，而不是丢失 https://github.com/infiniflow/ragflow/pull/19708 中 @L4XB 的书
* 文档：在 https://github.com/infiniflow/ragflow/pull/19776 中 @QAQadws 启动 Go 服务器之前运行迁移
* 功能：如果未选择编译类型，则不会显示重新分割解析器输出的切换。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19771
*修复（摄取）：使运行转换原子化，由https://github.com/infiniflow/ragflow/pull/19764中的@jay77721创建和调度
* 参考：https://github.com/infiniflow/ragflow/pull/19760 中的 @buua436 将内置编译模板保留在数据库之外
* 修复（无穷大）：修复 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/19773 中的块摄取和数据集保存
* 修复 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19772 中无法使用关键字进行块搜索的问题
* 修复：将 https://github.com/infiniflow/ragflow/pull/19781 中 @Yannnnnnnny 的引文标签从“图 1”更改为“[1]”
* 修复了 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19774 中无法使用关键字进行树导航搜索的问题
* https://github.com/infiniflow/ragflow/pull/19707中@qinling0210重构代理日志的思考日志
* 修复（解析器）：在 https://github.com/infiniflow/ragflow/pull/19491 中通过 @wang393 解析 docx 时跳过目录条目
* 修复（解析器）：在 https://github.com/infiniflow/ragflow/pull/19552 中保留 @AnnaSuSu 解开的 Markdown 代码围栏
*修复：将https://github.com/infiniflow/ragflow/pull/19778中@buua436的图形关键字搜索与Python对齐
* 修复（基准测试）：由 @ning-jl 在 https://github.com/infiniflow/ragflow/pull/19498 中解决失败的请求和不完整的流
* feat(go-syncer)：重试 https://github.com/infiniflow/ragflow/pull/19790 中@mkaaad 与每类预算的同步任务错误
* 文档：通过 @Yannnnnnnny 在 https://github.com/infiniflow/ragflow/pull/19798 中更新数据源文档
* 修复：通过 @Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/19793 中将 API-Route 路由到其驱动程序
* feat(agentic_rag): 槽表工具、表渲染 + 预搜索/元数据通道，由 @Caobaining1 在 https://github.com/infiniflow/ragflow/pull/19780 中提供
* feat(sandbox): 通过@6ba3i在https://github.com/infiniflow/ragflow/pull/19783中完成Go沙箱设置和实时刷新
* 修复（管理员）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/19770 中正确查找服务详细信息
* 修复（csv-preview）：@dcc123456 在 https://github.com/infiniflow/ragflow/pull/19785 中实现锯齿状 CSV 行的稳定水平滚动
* 修复：更新clicking解析未配置音频模型时显示的提示文本。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19788
* feat(chunk)：在https://github.com/infiniflow/ragflow/pull/19794中通过@dcc123456添加标签频率字段的最小/最大验证
* 重构：将 RAGFlowSelect 替换为 SelectWithSearch。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19795
* feat(datasource): 通过 https://github.com/infiniflow/ragflow/pull/19796 中的 @dcc123456 将 BackButton 添加到数据源详细信息页面标题
* 修复：从 Wiki Graph 下拉菜单中选择一个选项也会触发 API 请求以获取最新数据。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19801
* 修复（web）：从 https://github.com/infiniflow/ragflow/pull/19728 中的 @euvre 没有事先获得焦点的情况下从提示工具栏图标打开变量下拉菜单
* 功能：高亮关注python，关注https://github.com/infiniflow/ragflow/pull/19792的@wangq8#19488
* 修复 https://github.com/infiniflow/ragflow/pull/19791 中 @qinling0210 对 Agentic rag 的引用
* 修复 https://github.com/infiniflow/ragflow/pull/19803 中 @wangq8 的元数据过滤问题
* 修复（deepdoc）：在 https://github.com/infiniflow/ragflow/pull/19800 中为 @xugangqiang 的池化推理会话禁用 ORT BFC 内存竞技场
* feat(go-syncer)：通过 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/19762 中为 MySQL/PostgreSQL 连接器添加检查点恢复
* 修复(api): 当https://github.com/infiniflow/ragflow/pull/19809中@JinHai-CN的doc_ids过滤器为空时返回空文档
* @yingfeng 在 https://github.com/infiniflow/ragflow/pull/19811 中重构代理搜索
* 壮举：https://github.com/infiniflow/ragflow/pull/19777 中的@mkaaad 按状态优先级对同步日志列表进行排序
* 通过获取和第一个令牌时间增强 LLM_DEBUG，在 https://github.com/infiniflow/ragflow/pull/19816 中通过 @wangq8 短嵌入到 3 个浮点数
* 壮举：@aiapienthusiast 在 https://github.com/infiniflow/ragflow/pull/19748 中添加 Cheaper Inference 作为 OpenAI 兼容模型提供者
* 修复（解析器）：通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/19779 中将 PDF 目录和页眉/页脚删除移动到框级别
* 修复（文档）：在 https://github.com/infiniflow/ragflow/pull/19786 中由 @jay77721 跳过批量摄取时的活动任务和已完成任务
* 修复（编译器）：在 https://github.com/infiniflow/ragflow/pull/19554 中通过 @euvre 保存文档管道配置时保留 LLM 运行时参数
* 修复 https://github.com/infiniflow/ragflow/pull/19817 中 @MQ-xz 对 OpenAI 兼容代理完成的授权
* 修复：最大反射轮数可以输入负值。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19819
* 如果没有授权提供者，https://github.com/infiniflow/ragflow/pull/19827 中@JinHai-CN 的列表模型将返回空
* 细化 https://github.com/infiniflow/ragflow/pull/19822 中 @yingfeng 对 Agentic RAG 的引用
* 修复：限制解析器运算符，使其后面只能跟一个分块器，并且一个分块器后面不能跟另一个分块器。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19833
* 重构（代理表单）：通过 https://github.com/infiniflow/ragflow/pull/19830 中的 @dcc123456 从子代理表单中删除 maxTokens 开关字段
* 修复：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/19824 中解析提取器模型的提供程序别名
* feat(ingestion)：通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/19775 中添加运行范围的进度事件
* 修复（解析器）：通过 https://github.com/infiniflow/ragflow/pull/19735 中的 @L4XB 恢复 Python 分块器中的 DOCX 文本框
* Go：在https://github.com/infiniflow/ragflow/pull/19702中添加@xugangqiang的通用Go集成测试CI作业（无限）
* refa：通过https://github.com/infiniflow/ragflow/pull/19820中的@buua436将模型分辨率迁移到ModelSolver
* 修复（模型）：将 PaddleOCR api_key 从通用提供程序流解包移动到 https://github.com/infiniflow/ragflow/pull/19823 中的 @euvre 驱动程序中
* 修复：改进 https://github.com/infiniflow/ragflow/pull/19839 中 @Yannnnnnnny 的解析和分块设置的 UI 措辞和本地化
* 修复：将<think>内容</think>存储到https://github.com/infiniflow/ragflow/pull/19836中@wangq8的conversation_message
* 恢复 https://github.com/infiniflow/ragflow/pull/19837 中 @wangq8 的“feat(agent): 支持检索节点和工具中的 document_ids”
* 修复（嵌入）：通过 @techpreneur-a 在 https://github.com/infiniflow/ragflow/pull/19758 中省略 OVH AI 端点不受支持的用户字段
*修复（sdk）：在https://github.com/infiniflow/ragflow/pull/19551中保留@AnnaSuSu的完成消息ID
* 修复(tts)：通过 @euvre 在 https://github.com/infiniflow/ragflow/pull/19812 中发送 SiliconFlow TTS 和表面合成失败所需的语音负载
*修复（文档）：隐藏https://github.com/infiniflow/ragflow/pull/19845中@qinling0210检索的禁用文档的知识编译块
* 修复（go）：通过 @QAQadws 在 https://github.com/infiniflow/ragflow/pull/19832 中显示潜在错误，而不是用于相关搜索和思维导图的通用 500
* 修复（摄取）：统一https://github.com/infiniflow/ragflow/pull/19849中@jay77721的运行持续时间和时间戳解析日志行
* feat(go,web)：https://github.com/infiniflow/ragflow/pull/19802 中的 @yuzhichang 的端口标记器计数器、嵌入限制和多提供商网络搜索
* 修复：Go 版本的工件树还需要显示构建日志。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19841
* 修复(admin): 在https://github.com/infiniflow/ragflow/pull/19848中通过@6ba3i显示服务状态中的主机和端口
* 重构（go）：默认 Go 缓存/队列后端为 Kvrocks，并在 https://github.com/infiniflow/ragflow/pull/19804 中被 @xugangqiang 宕机时快速失败
* 修复：通过 https://github.com/infiniflow/ragflow/pull/19861 中的 @Yannnnnnnny 更新 UI 中的单词
* 修复（内存）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/19840 中公开服务器端过滤器发现
* 修复（代理）：https://github.com/infiniflow/ragflow/pull/19831 中的 @6ba3i 清楚地报告丢失的消息变量
* 修复(admin): 在https://github.com/infiniflow/ragflow/pull/19867中使用GetKvrocksConfig代替@xugangqiang未定义的GetRedisConfig
* 壮举（模型）：在 https://github.com/infiniflow/ragflow/pull/19856 中添加 @Souravrajvi0 的 OpenAI GPT-5.6 模型系列
* Go：@JinHai-CN修复https://github.com/infiniflow/ragflow/pull/19881高并发下MySQL连接端口耗尽问题
* Go：添加pprof，在https://github.com/infiniflow/ragflow/pull/19858中使用--profile通过@JinHai-CN开启
* Go：重用全局HTTP client并调整连接池以防止https://github.com/infiniflow/ragflow/pull/19888中的@JinHai-CN端口耗尽
* 修复（markdown）：在 https://github.com/infiniflow/ragflow/pull/19846 中通过 @dcc123456 支持参考标记中的非数字引用 ID
* 修复（数据集）：在 https://github.com/infiniflow/ragflow/pull/19851 中通过 @dcc123456 在 Go 上重新解析时跳过清除块确认
* Feat/xiaomi 列表模型由 @QAQadws 在 https://github.com/infiniflow/ragflow/pull/19855 中刷新
* 修复（代理）：在聊天流中保留延迟的代理模型故障，而不是 https://github.com/infiniflow/ragflow/pull/19829 中@euvre 的 toast 弹出窗口
* 修复（数据集）：通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/19893 中将启用/禁用移动到批量操作菜单中的运行/取消下方
* 修复（web）：在https://github.com/infiniflow/ragflow/pull/19835中的@euvre在代理小部件设置中保留完整的嵌入对话框状态
* 修复创建内置数据集 parser_config 应该是 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19860 中的管道配置
* 修复：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/19847 中增强 PDF 图形标题
* 修复 https://github.com/infiniflow/ragflow/pull/19898 中 @wangq8 的相似度阈值措辞
* 修复：https://github.com/infiniflow/ragflow/pull/19863 中 @Lynn-Inf 调用 llm 提取内存失败时镜像 python
* 公开 KVROCKS，以便通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19904 中轻松访问
* i18n：由 @bakiburakogun 在 https://github.com/infiniflow/ragflow/pull/19891 中填补剩余的 tr-TR 空白
* 修复（web）：在 https://github.com/infiniflow/ragflow/pull/19903 中通过 @dcc123456 约束代理版本历史记录对话框中的 Flex 子项
* feat(model): 通过https://github.com/infiniflow/ragflow/pull/19862中的@euvre从远程API获取小米型号列表
* 修复（go-agent）：https://github.com/infiniflow/ragflow/pull/19852 中 @mkaaad 将 CodeExec 沙箱工件表面为消息附件
* 修复(agentic-rag): 当聊天模型无法通过https://github.com/infiniflow/ragflow/pull/19850中的@qinling0210回复时快速失败
* Go：https://github.com/infiniflow/ragflow/pull/19901中@JinHai-CN修复高并发下ES连接端口耗尽问题
* 修复：知识库中的图片和音频分块器显示不必要的配置选项。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/19911
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/19853 中托管代码执行工件，而不是通过 @euvre 将 Base64 泄漏到聊天中
* 修复：在 https://github.com/infiniflow/ragflow/pull/19908 中暴露 @wangq8 的重新排序模型错误
* 重构（go）：在 https://github.com/infiniflow/ragflow/pull/19864 中删除 @xugangqiang 的 KvrocksCheckpointExists 探针
*修复（摄取）：将裸露的MinerU OCR模型UUID路由到https://github.com/infiniflow/ragflow/pull/19639中@euvre调度的MinerU PDF
* 修复（web）：在 https://github.com/infiniflow/ragflow/pull/19844 中@QAQadws 在代理聊天中将内存保存失败作为祝酒词
* 修复https://github.com/infiniflow/ragflow/pull/19921中@wangq8的内置管道名称
*修复（api）：在https://github.com/infiniflow/ragflow/pull/19818中通过@6ba3i强制执行文档图像所有权授权
* 恢复 https://github.com/infiniflow/ragflow/pull/19922 中 @wangq8 的“修复（go-agent）：将 CodeExec 沙箱工件表面作为消息附件”
* Go：修复https://github.com/infiniflow/ragflow/pull/19912中@JinHai-CN ES连接器中的资源泄漏问题
* 修复：在 https://github.com/infiniflow/ragflow/pull/19518 中通过 @georgeatparallel 导入和编辑时保留 MCP 连接设置
* 去：修复其他型号http clients by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19920
* 修复（web）：将缺失的音频和电子邮件图像添加到 https://github.com/infiniflow/ragflow/pull/19926 中 @dcc123456 的数据集设置 ImageMap
* 修复（代理）：https://github.com/infiniflow/ragflow/pull/19919 中 @6ba3i 表面无效变量和重复数据删除错误
* Perf(deepdoc)：每次运行免费 ONNX 输入/输出张量，而不是通过 https://github.com/infiniflow/ragflow/pull/19843 中的@xugangqiang 在每个会话中固定它们
* 修复：防止批量溢出并保留 @buua436 在 https://github.com/infiniflow/ragflow/pull/19892 中的思维导图结果
* 修复（网络）：使音频附件和参考可以由 @euvre 在 https://github.com/infiniflow/ragflow/pull/19842 中播放
*修复（内存）：稳定https://github.com/infiniflow/ragflow/pull/19925中@6ba3i的过滤器选项排序
* 删除了 CLAUDE.md，因为 Claude Code 在 https://github.com/infiniflow/ragflow/pull/19932 中支持 @yuzhichang 的 AGENTS.md
* 在https://github.com/infiniflow/ragflow/pull/19916中通过@wangq8使kvrocks主机可配置
* 修复（服务）：在 mcp_test.go 中使用 common.AssertURLSafe by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19931
* 修复：更新了管道选项卡以显示一致的标签。作者：@Yannnnnny 在 https://github.com/infiniflow/ragflow/pull/19933
* 修复：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/19935 中释放重复使用的词干分析器环境
* 修复：在 https://github.com/infiniflow/ragflow/pull/19929 中通过 @Lynn-Inf 发送电子邮件之前检查 SMTP 配置
* 修复：切换数据集的嵌入模型导致下拉菜单消失。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/19927
* 修复重新解析完整文档需要通过delete:true for go by @wangq8 in https://github.com/infiniflow/ragflow/pull/19936
* 修复(web): 当 https://github.com/infiniflow/ragflow/pull/19940 中的 @dcc123456 结果集更改时重新挂载块虚拟列表
* 重构（go-ingestion）：删除https://github.com/infiniflow/ragflow/pull/19924中@xugangqiang的检查点/恢复支持
* 修复（api）：通过@Harsh23Kashyap在https://github.com/infiniflow/ragflow/pull/19883中验证内存搜索数字过滤器
* 修复 https://github.com/infiniflow/ragflow/pull/19942 中 @wangq8 的数据集日志泄漏问题
* 修复（go）：将 https://github.com/infiniflow/ragflow/pull/19934 中的 @qinling0210 的检索和聊天管道与 Python 对齐
* 修复：通过 @Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/19943 中隐藏 MinerU.net
*修复（配置）：读取布尔环境标志，以便关闭意味着https://github.com/infiniflow/ragflow/pull/19689中的@L4XB关闭
* feat(agentic_rag)：将线束表/元数据路径移植到 Go，通过 https://github.com/infiniflow/ragflow/pull/19941 中的@Caobaining1 进行字段驱动的metadata_search
* 修复：https://github.com/infiniflow/ragflow/pull/19945中@xugangqiang解析@@位置标签中的负坐标
* 杂务（服务器）：@6ba3i 在 https://github.com/infiniflow/ragflow/pull/19900 中缺少 CLI 和 MCP 选项的文档
* 修复：https://github.com/infiniflow/ragflow/pull/19870 中 @midilandlu 出现终端错误后停止 SSE 流
* 修复：在 https://github.com/infiniflow/ragflow/pull/19872 中处理 @midilandlu 的空最终工具答案
* 修复：仅返回https://github.com/infiniflow/ragflow/pull/19899中@buua436引用的Go聊天文档
* 修复（deepdoc）：通过 zap 路由 PDF 解析日志并通过 https://github.com/infiniflow/ragflow/pull/19947 中的 @xugangqiang 驱动 colspan e2e 进程内
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/19953中保留@6ba3i的空开关输入评估
* 修复（解析器）：在 https://github.com/infiniflow/ragflow/pull/19938 中 @xugangqiang 破坏页面顺序后，保持媒体页面缓存逐出活动
* 修复：添加暂时性错误，由 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19956 中重试
* 修复 https://github.com/infiniflow/ragflow/pull/19918 中 @QAQadws 的/minio 丢失文件错误消息
* 修复：尊重 Go 聊天引用设置并保留 https://github.com/infiniflow/ragflow/pull/19797 中 @QAQadws 的最终流式引用
* 壮举（模型）：在 https://github.com/infiniflow/ragflow/pull/19885 中添加 @Anurag-M1 的最新 Gemini 模型
* 修复（codeexec）：https://github.com/infiniflow/ragflow/pull/19954 中 @mkaaad 的 codeexec 工件附件
* 修复（解析器）：仅通过 https://github.com/infiniflow/ragflow/pull/17672 中的 @Taranum01 将 TCADP 不记名令牌范围扩展到 API 服务器主机
* 修复（检索）：通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/19828 中对齐 Go 父子块行为
* 修复（解析器）：停止内联 PDF base64 媒体；在 https://github.com/infiniflow/ragflow/pull/19964 中的 @xugangqiang 在 VLM 和 chunker 上按需裁剪
* 修复（摄取）：遵循 https://github.com/infiniflow/ragflow/pull/19966 中 @jay77721 的 Go 解析器中的数据集语言
* Go：https://github.com/infiniflow/ragflow/pull/19963中@JinHai-CN更新go.mod
* Go CLI：修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/19946中的基准测试
* 壮举（解析器）：通过 https://github.com/infiniflow/ragflow/pull/19957 中的 @jay77721 通过 3D 级联融合升级 PDF 页眉/页脚删除
* 重构（解析器）：通过 https://github.com/infiniflow/ragflow/pull/19971 中的 @jay77721 从图片/音频解析器中删除只写设置字段
* 修复（string_utils）：在https://github.com/infiniflow/ragflow/pull/17015中@chuenchen309在非拉丁单词之间保留空格
* 通过 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/19969 中将 PR17015 移植到 GO
* 文档：将 macOS 注释添加到 https://github.com/infiniflow/ragflow/pull/19970 中 @JHWu1117 的从源代码启动指南
* 修复：在https://github.com/infiniflow/ragflow/pull/19973中添加@wangq8的数据集日志
*修复：在https://github.com/infiniflow/ragflow/pull/19968中通过@buua436对齐agentbot发布标志处理
* 修复（web）：在https://github.com/infiniflow/ragflow/pull/19977中@jay77721隐藏Go后端上的摄取画布测试运行按钮
* 修复（管道）：在https://github.com/infiniflow/ragflow/pull/19976中通过@6ba3i进行终端检测时忽略断开的节点
*修复（数据集）：通过@QAQadws在https://github.com/infiniflow/ragflow/pull/19978中保留管道开关上的解析器配置
* feat(ingestion)：报告子组件解析进度，而不是 https://github.com/infiniflow/ragflow/pull/19965 中 @jay77721 冻结的 20%
* feat(agentic_rag)：将成员资格和文档元数据放入https://github.com/infiniflow/ragflow/pull/19981中@Caobaining1的答案证据中
*修复（解析器）：将UI“纯文本”PDF方法路由到https://github.com/infiniflow/ragflow/pull/19979中@jay77721的纯文本解析器
* 修复 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19986 聊天期间引用的代理不显示的问题
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/19987 中通过 @6ba3i 规范化 Switch 运算符和数字字符串
* 修复(tag): 在 https://github.com/infiniflow/ragflow/pull/19985 中通过 @qinling0210 在 Go 标签源索引上重建标记
* 修复（内存）：将内存过滤器方面选项固定为 https://github.com/infiniflow/ragflow/pull/19906 中 @euvre 的规范顺序
* 杂务：在 https://github.com/infiniflow/ragflow/pull/19990 中 @Jinzhengxu 重命名 AGENTS.md 后更新陈旧的 CLAUDE.md 引用
* Go CLI：在https://github.com/infiniflow/ragflow/pull/19991中展示@JinHai-CN的硬件
*修复（嵌入）：在https://github.com/infiniflow/ragflow/pull/19997中通过@yuzhichang在每个路径上剪切模型窗口的输入
* 修复：将检查表添加到代理画布以显示在画布上发现的错误。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/20000
* 通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/19998 中修复保存儿童分隔符
* 修复：在 https://github.com/infiniflow/ragflow/pull/19999 中通过 @Lynn-Inf 限制元数据字段键
* Go CLI：在https://github.com/infiniflow/ragflow/pull/20002中通过@JinHai-CN设置/显示CPU/内存/并发
* 重构：https://github.com/infiniflow/ragflow/pull/20001 中 @wangq8 发出警告的默认日志级别
* 修复（数据集）：返回 https://github.com/infiniflow/ragflow/pull/19984 中 @QAQadws 的 ids 过滤器的可访问数据集
* Go: 在https://github.com/infiniflow/ragflow/pull/19988中添加@JinHai-CN的deepdoc服务器框架
* 重构(mcp)：通过@6ba3i在https://github.com/infiniflow/ragflow/pull/20011中集中配置和传输布线
* feat(connector): 通过https://github.com/infiniflow/ragflow/pull/19742中的@Souravrajvi0添加Zotero作为数据源
* 修复（markdown）：防止表格单元格中的管道通过https://github.com/infiniflow/ragflow/pull/19749中的@L4XB添加列
* Go CLI: 修复https://github.com/infiniflow/ragflow/pull/20021中@JinHai-CN的显示用户问题
* 修复https://github.com/infiniflow/ragflow/pull/20023中@yingfeng的wordnet并发恐慌错误
* 重构（harness）：通过https://github.com/infiniflow/ragflow/pull/20012中的@6ba3i从服务器启动中提取检索连线
* 修复：删除文档，在https://github.com/infiniflow/ragflow/pull/20022中@wangq8并没有删除minio中的真实文件
*修复（解析器配置）：在https://github.com/infiniflow/ragflow/pull/20018中@6ba3i保存时保留子块设置
*修复（摄取，网络）：收敛快速取消并停止将它们记录为https://github.com/infiniflow/ragflow/pull/19992中的@jay77721的错误
* 修复：https://github.com/infiniflow/ragflow/pull/20024 中 @wangq8 删除数据集不会删除 minio 中的存储桶和文件
* 修复（代理）：在https://github.com/infiniflow/ragflow/pull/19915中@euvre在DocsGenerator导出的每一页上标记PDF水印
* 修复：https://github.com/infiniflow/ragflow/pull/20030 中 @buua436 同步文档编译和导航投影
* Go：通过@JinHai-CN修复https://github.com/infiniflow/ragflow/pull/20036中的日志级别
* 修复（canvas）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/20038 中澄清不匹配的 Switch 路由错误
*修复：在https://github.com/infiniflow/ragflow/pull/20020中将parserMethod标签重命名为@dcc123456
*修复（编译）：在https://github.com/infiniflow/ragflow/pull/20037中@dcc123456在Go后端上显示运行和失败编译的更新/日志条目
* 修复：在 https://github.com/infiniflow/ragflow/pull/20043 中的 @dcc123456 在数据集解析器选项卡中渲染手动分块器配置
* 修复（代理）：通过 https://github.com/infiniflow/ragflow/pull/20046 中的 @dcc123456 标记从开始画布清单中分离的节点组
* 修复（代理）：按来源过滤拖动的下一步菜单并通过 https://github.com/infiniflow/ragflow/pull/20049 中的 @dcc123456 跳过空菜单
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/20052 中通过 @dcc123456 从输入手柄拖动时不创建节点
* 修复：阻止https://github.com/infiniflow/ragflow/pull/20042中@buua436反馈代理消息模板
* 参考：https://github.com/infiniflow/ragflow/pull/20047 中的 @buua436 删除独立工具支持解析器
* 重构（go）：通过https://github.com/infiniflow/ragflow/pull/20026中的@jay77721统一Zap记录器上的Go日志记录
* feat(deepdoc): 通过https://github.com/infiniflow/ragflow/pull/20044中的@xugangqiang配置推理并发度（默认4）
* 修复：在https://github.com/infiniflow/ragflow/pull/20039中添加@Lynn-Inf对本地AI的提示url
* feat(deepdoc)：在https://github.com/infiniflow/ragflow/pull/20035中@xugangqiang在池化本地会话中共享ONNX模型权重
* 功能：在https://github.com/infiniflow/ragflow/pull/20010中通过@wangq8删除用户时删除用户所有内容
*修复（api）：在https://github.com/infiniflow/ragflow/pull/20032中通过@6ba3i对齐Go代理路由合约
* 修复（文档）：将图像和演示文稿上传到 https://github.com/infiniflow/ragflow/pull/20061 中的 @jay77721 的专用解析器
* 修复（摄取）：通过 https://github.com/infiniflow/ragflow/pull/20060 中的 @jay77721 从组件架构中派生组件参数白名单
* 修复（解析器）：在 https://github.com/infiniflow/ragflow/pull/20019 中捕获@jay77721 的严格页码和网站促销页眉/页脚
* 重构（解析器）：通过 https://github.com/infiniflow/ragflow/pull/20053 中的 @jay77721 从 XLSX 表项中删除无法访问的 headerColEnd 回退
* refa：删除https://github.com/infiniflow/ragflow/pull/20055中@buua436的聊天模型目标解析器
*修复（qa）：读取Excel计算的值，而不是https://github.com/infiniflow/ragflow/pull/19737中@L4XB背后的公式
* 修复（解析器）：将 https://github.com/infiniflow/ragflow/pull/20071 中 @jay77721 的 toc_header_footer 中的 slog.Debug 替换为 common.Debug+zap
* perf(deepdoc): 在https://github.com/infiniflow/ragflow/pull/20034中添加@xugangqiang的单核PDF吞吐量+peak-RSS基准
* 修复（块）：将块列表和详细信息 API 的范围限定为路线数据…由 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/20059 中
* 恢复 https://github.com/infiniflow/ragflow/pull/20075 中 @wangq8 的“修复（api）：对齐 Go 代理路由合约”
* 修复（deepdoc）：将 OCR-rec 批处理与 https://github.com/infiniflow/ragflow/pull/20041 中的 @xugangqiang 的 Python 对齐（按比例排序，<=16, 96*1 池）
* 修复：通过 https://github.com/infiniflow/ragflow/pull/20048 中的 @Lynn-Inf 将 migrate 移动到 init 标志案例列表中
* 修复 `message` 算子后禁止连接其他算子的问题。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20076
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/20081中的单元测试
* 修复添加字体以支持@wangq8在https://github.com/infiniflow/ragflow/pull/20078中生成英文PDF
*修复（api）：在https://github.com/infiniflow/ragflow/pull/19661中的@ming1523提取的关键字和问题之间添加缺少的逗号分隔符
* 将 PR19661 移植到 https://github.com/infiniflow/ragflow/pull/20069 中的@qinling0210（关键字分隔符）
* build(sh)：固定 ONNX 运行时存档 sha256，而不是通过 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/20082 中在线获取它
* 修复（解析器）：从https://github.com/infiniflow/ragflow/pull/20051中@xugangqiang的pdf.TableItem中删除急切的base64表格图像
*修复（api）：验证连接器在https://github.com/infiniflow/ragflow/pull/19472中通过@Harsh23Kashyap创建有效负载
* 杂务（deps-dev）：在https://github.com/infiniflow/ragflow/pull/20086中由@dependabot[bot]在/web中从4.3.7到4.3.9不可变
* 通过https://github.com/infiniflow/ragflow/pull/20083中的@qinling0210更新rag_analyzer.cpp（与Infinity中的PR3503对齐）
* 测试（rag）：在 https://github.com/infiniflow/ragflow/pull/20072 中 @Bruce-Yii 覆盖 file_utils 中的文件 magic-byte 帮助程序
* test(model_utils): 在https://github.com/infiniflow/ragflow/pull/20068中添加@Bruce-Yii对get_model_type_ human及相关函数的全面测试
* 杂务（deps）：由https://github.com/infiniflow/ragflow/pull/20085中的@dependabot[bot]将/agent/sandbox中的anyio从4.9.0提升到4.14.2
* 杂务（部门）：https://github.com/infiniflow/ragflow/pull/20087 中的 @dependabot[bot] 将汤筛从 2.8.4 撞到 2.9
* 修复了没有删除技能的问题，因为 go 在 https://github.com/infiniflow/ragflow/pull/20094 中没有 @wangq8 的技能
* 修复（聊天）：当 https://github.com/infiniflow/ragflow/pull/20097 中的 @dcc123456 未准备好图像 url 时，防止空白参考图像预览
* 修复：为创建记忆的按钮添加加载状态。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20098
* 杂务（deps）：由 @dependabot[bot] 在 https://github.com/infiniflow/ragflow/pull/20088 从 1.44.0 撞到 go.opentelemetry.io/otel/sdk 到 1.45.0
* test(term_weight): 通过 @Bruce-Yii 在 https://github.com/infiniflow/ragflow/pull/20066 中添加 _alphabetic_oov_Frequency 的边缘情况测试
* 杂务（deps）：在/tools/es-to-oceanbase-migration中由https://github.com/infiniflow/ragflow/pull/20104中的@dependabot[bot]将anyio从4.12.1提升到4.14.2
* 修复：为https://github.com/infiniflow/ragflow/pull/20095中@buua436的Go PDF生成添加独立的CJK字体
* CI: 修复 kvrocks 端口已由 @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/20093 中分配
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/20099中显示的管理服务
* Go CLI：修复https://github.com/infiniflow/ragflow/pull/20112中@JinHai-CN的版本
* 修复（markdown）：通过https://github.com/infiniflow/ragflow/pull/19750中的@L4XB读取无标题表的第一行作为其标题
* 修复：将画布限制为单个编译运算符。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20120
* 修复（代理）：通过 @Bruce-Yii 在 https://github.com/infiniflow/ragflow/pull/19565 中保留混合消息分支的内容语义
* 修复（deepdoc）：https://github.com/infiniflow/ragflow/pull/20089 中@xugangqiang 的范围表/框重叠到同一页面以避免跨页面扩展
* 杂务（deps）：通过https://github.com/infiniflow/ragflow/pull/20105中的@dependabot[bot]将anyio从4.12.1提升到4.14.2
*修复：https://github.com/infiniflow/ragflow/pull/20108中@buua436的范围文档删除编译事件
* 修复：如果提取器未配置型号，检查表中会显示提示。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20113
* 修复：无法显示管道手动分块器的配置。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20106
*修复：等待https://github.com/infiniflow/ragflow/pull/20116中@buua436的Elasticsearch块更新
* 修复 https://github.com/infiniflow/ragflow/pull/20110 中 @wangq8 删除数据集不删除存储桶的问题
*修复：在https://github.com/infiniflow/ragflow/pull/20114中使用@buua436为SSH沙箱配置的known_hosts路径
* 修复：将管道的分离操作符添加到清单中。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20127
* 修复：隐藏Go版本思维导图更新按钮。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20130
* 修复（块）：支持https://github.com/infiniflow/ragflow/pull/20107中@jay77721在块PATCH端点上的图像更新
* 修复：https://github.com/infiniflow/ragflow/pull/20129 中 @Lynn-Inf 添加模型失败时回滚添加的实例
* 修复（代理）：使开始表单模式选项对 https://github.com/infiniflow/ragflow/pull/20128 中 @dcc123456 的语言切换做出反应
* perf(deepdoc): @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/20122 中按页和列进行子字符串去重扫描
* 修复（deepdoc）：在https://github.com/infiniflow/ragflow/pull/20125中@xugangqiang在MarkNoMergeTables页面范围中保留最高索引的表
* 修复（存储）：通过 @AnnaSuSu 在 https://github.com/infiniflow/ragflow/pull/20003 中更正 Azure SPN 对象存在检查
* 修复（markdown）：在 https://github.com/infiniflow/ragflow/pull/19747 中用 @L4XB 分隔包含空格或括号的链接目标
* 修复(chunker): 消除 https://github.com/infiniflow/ragflow/pull/20132 中 @xugangqiang 的 O(n^2) 坐标扩展和冗余合并副本
* 修复（deepdoc）：在 https://github.com/infiniflow/ragflow/pull/20133 中 @xugangqiang 的 buildTableHTMLs 中按页面存储表格框
* i18n(az)：在 https://github.com/infiniflow/ragflow/pull/20131 中添加 @jamalkamaladdin 的阿塞拜疆语 (Azərbaycanca) 翻译
* 修复（服务）：当答案报告“否”时，删除引用和参考文献，作者：@Caobaining1，https://github.com/infiniflow/ragflow/pull/20111
*修复：不删除https://github.com/infiniflow/ragflow/pull/20118中@Lynn-Inf未创建的唯一索引
*修复（解析器）：在https://github.com/infiniflow/ragflow/pull/20028中@imexlovery在表提取期间接受更长的关闭栅栏
* 修复（解析器）：仅在 https://github.com/infiniflow/ragflow/pull/20029 中的@imexlovery 的换行符上分割 JSONL 记录
* 修复（deps）：在 Python 3.13 上使用 numpy 2.x 轮子（#19928），@Souravrajvi0 在 https://github.com/infiniflow/ragflow/pull/20014 上
* i18n：将 tr-TR 与 @bakiburakogun 在 https://github.com/infiniflow/ragflow/pull/20004 中最近的 en 更改同步
* 修复：@wangq8 在 https://github.com/infiniflow/ragflow/pull/20153 中清理摄取任务日志
*修复：解决https://github.com/infiniflow/ragflow/pull/20159中@Yannnnnny没有GitHub API的CLI最新版本
* Go CI：修复https://github.com/infiniflow/ragflow/pull/20157中@JinHai-CN的端口冲突
* 文档：删除 KIBANA_USER / KIBANA_PASSWORD，@lihongyuan99 在 https://github.com/infiniflow/ragflow/pull/20150 中没有读取任何内容
* 修复：https://github.com/infiniflow/ragflow/pull/20164 中@JinHai-CN 更新文档
* 修复（数据集）：在https://github.com/infiniflow/ragflow/pull/20119中通过@jay77721读取标签聚合中文档声明的标签源
* 修复：从 https://github.com/infiniflow/ragflow/pull/20154 中的 @buua436 的 Wiki 产品中排除禁用的文档
* 修复https://github.com/infiniflow/ragflow/pull/20158中@wangq8在searchbot中搜索时rerank模型不生效的问题
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/20180中的评估错误
* 修复：当重新排序错误时，https://github.com/infiniflow/ragflow/pull/20178 中的 @wangq8 停止聊天
* 修复 https://github.com/infiniflow/ragflow/pull/20182 中 @wangq8 的多个模型聊天中没有重新生成/删除消息的问题
* 修复：https://github.com/infiniflow/ragflow/pull/20167 中 @Lynn-Inf 删除模型名称
* 修复（解析器）：仅当 PDF 表格项在 https://github.com/infiniflow/ragflow/pull/20092 中带有 @devYRPauli 的 <table> 标记时，才将 PDF 表格项标记为“table”
* 重构（代理）：通过https://github.com/infiniflow/ragflow/pull/20168中的@6ba3i直接传递检查点协作者
* 通过 @QAQadws 在 https://github.com/infiniflow/ragflow/pull/20184 中修复极小极大模型 ID
* 重构（代理）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/20169 中删除未使用的画布流抽象
* 重构（代理）：通过@6ba3i在https://github.com/infiniflow/ragflow/pull/20170中删除过时的组件装置
* 重构（代理）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/20171 中删除无法访问的画布助手
* 重构（代理）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/20172 中删除死文档 io 脚手架
* 重构（代理）：在https://github.com/infiniflow/ragflow/pull/20173中使用@6ba3i的具体画布状态访问
*修复（代理）：拒绝@6ba3i在https://github.com/infiniflow/ragflow/pull/20174中格式错误的并行检查点
* 重构（代理）：通过@6ba3i在https://github.com/infiniflow/ragflow/pull/20175中删除死开关映射别名
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/20176中保留@6ba3i的标准JSON编码
* 修复（设置）：通过 https://github.com/infiniflow/ragflow/pull/20189 中的 @dcc123456 抑制 PaddleOCR 表单自动填充和默认 URL 到第一个选项
*功能（设置）：通过https://github.com/infiniflow/ragflow/pull/20177中的@dcc123456自动将新列出的模型合并到草稿实例中
* feat(setting)：https://github.com/infiniflow/ragflow/pull/20195 中 @dcc123456 调用新提供程序实例的默认工具
* 修复：创建数据集时切换解析模式会导致嵌入模型发生变化。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20198
* 修复(nav)：导航树搜索、LLM集群命名、集群深度由@qinling0210在https://github.com/infiniflow/ragflow/pull/20188中
* perf(chunker): 在https://github.com/infiniflow/ragflow/pull/20183中通过@xugangqiang跨块并行化cropImageChunks
* 修复重排序在 https://github.com/infiniflow/ragflow/pull/20197 中 @wangq8 的代理检索中不起作用的问题
* 修复：检查表允许循环运算符引用内部运算符的输出。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20205
* 修复：文档生成器-页眉文本/页脚文本/水印文本配置无法保存。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20187
*修复（数据集）：在解析时轮询摄取日志并在https://github.com/infiniflow/ragflow/pull/20206中通过@dcc123456在终端后停止
* 修复删除用户以删除存储桶用户下载，表：file_commit、file_commit_item by @wangq8 in https://github.com/infiniflow/ragflow/pull/20199
* feat(chunker)：在 https://github.com/infiniflow/ragflow/pull/20165 中将裁剪后的预览流式传输到存储，而不是由 @xugangqiang 进行批处理
* 修复（路由器）：在 https://github.com/infiniflow/ragflow/pull/20185 中 @jay77721 的共享聊天的文档图像路由上接受 beta 令牌
* 功能：在数据集的日志页面上显示 wiki 相关的图标。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20212
* 文档：通过 @Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/20211 中添加数据库更改日志
* 修复（数据集）：在重新解析 https://github.com/infiniflow/ragflow/pull/20210 中 @dcc123456 的 Go 文档之前进行确认
* 修复：从数据集的“文件”页面切换到“配置”页面导致滚动条不出现在顶部。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20179
* 修复：在https://github.com/infiniflow/ragflow/pull/20155中通过@buua436调整沙箱SSH主机配置
* 修复（数据流）：make_encode_batch 同步，以便 thread_pool_exec 可以通过 @wuisabel-gif 在 https://github.com/infiniflow/ragflow/pull/16760 中运行它
* 修复（解析器）：读取 @L4XB 在 https://github.com/infiniflow/ragflow/pull/19740 中写入 CSV 的分隔符
* 修复（解析器）：https://github.com/infiniflow/ragflow/pull/19814 中的 @L4XB 使 EPUB 失败且没有可读章节，而不是返回任何内容
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/20186 中通过 @6ba3i 强化运行时边界合约
* 修复：支持https://github.com/infiniflow/ragflow/pull/20203中@buua436在Infinity上写入wiki地图
* 修复：隐藏沙箱配置中的“本地”选项。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20269
* 修复（工具）：在 mysql_migration 试运行期间保护临时表创建（#19570），由 https://github.com/infiniflow/ragflow/pull/19623 中的@Ritiky23 执行
* 壮举：在 https://github.com/infiniflow/ragflow/pull/20264 中添加 @senovr 的乌兹别克语支持
* 修复（解析器）：在 https://github.com/infiniflow/ragflow/pull/19746 中 @L4XB 在朴素、手动和 qa 分块器中转义 DOCX 表单元
* 修复（分块）：在 https://github.com/infiniflow/ragflow/pull/20213 中跳过@xugangqiang 不可检索的空文本媒体的裁剪+上传
* 修复 https://github.com/infiniflow/ragflow/pull/20272 中 @wangq8 的 go 工作区 APIs
* Go：删除https://github.com/infiniflow/ragflow/pull/20271中@JinHai-CN未使用的文件
* [codex] 在 https://github.com/infiniflow/ragflow/pull/19370 中修复 @HUAN2022A 兼容 OpenAI 的 ASR 提供程序
* 修复（摄取）：通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/20214 中读取 Go 后端中的 Python 日志
*修复（knowledge_compile）：使https://github.com/infiniflow/ragflow/pull/20208中的@qinling0210可将编译后的行写入Infinity
* 修复（ui）：在https://github.com/infiniflow/ragflow/pull/20270中@dcc123456打开对话框后立即忽略外部clicks
* 修复（pdf）：在 Go 布局中重新加入换行连字符/剥离 U+FFFD（临时解决方法），作者：https://github.com/infiniflow/ragflow/pull/20274 中的 @xugangqiang
* 修复：无法在检索运算符中为条件选择数据集元数据值。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/20280
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/20283 中通过 @6ba3i 保留中断恢复中的循环变量
* 删除https://github.com/infiniflow/ragflow/pull/20284中@JinHai-CN的python源代码
* 文档：API 由 @wangq8 在 https://github.com/infiniflow/ragflow/pull/20290 中进行更改
* 修复（ui）：当https://github.com/infiniflow/ragflow/pull/20288中的@dcc123456引用块索引丢失时，回退到chunk_id查找
* 重构：删除python源代码，https://github.com/infiniflow/ragflow/pull/20289中@JinHai-CN的第2部分
* 修复(web): 通过 @QAQadws 在 https://github.com/infiniflow/ragflow/pull/20281 中恢复 Go 后端的文档状态过滤器
* 修复（分块）：无损保留裸分隔符，删除 https://github.com/infiniflow/ragflow/pull/20276 中 @xugangqiang 的自定义（反引号）分隔符
* toc_enhance -> @wangq8在https://github.com/infiniflow/ragflow/pull/20299中的知识编译
*修复：在https://github.com/infiniflow/ragflow/pull/20293中删除@buua436的孤儿知识图关系
* 修复（摄取）：在 https://github.com/infiniflow/ragflow/pull/20285 中展平来自 @xugangqiang 的 Python 时代画布的遗留嵌套解析器设置
* 删除https://github.com/infiniflow/ragflow/pull/20297中@myf-bee的python Docker文件和docker-compose.yml
* 修复（go）：通过 @QAQadws 在 https://github.com/infiniflow/ragflow/pull/20279 中保留数据集列表中的旧文档状态
*修复（代理）：允许@6ba3i在https://github.com/infiniflow/ragflow/pull/20295中跨模板块共享数据集
* 修复：修改文档级别的空工件描述。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/20296
* 修复：在 https://github.com/infiniflow/ragflow/pull/20302 中应用@Lynn-Inf 禁用引用
* 修复：通过 https://github.com/infiniflow/ragflow/pull/20300 中的 @flyingwhit 在检索节点上添加 json 输出别名
* 重构：https://github.com/infiniflow/ragflow/pull/20298中@JinHai-CN将go版本服务器端口更新为9380和9381
*修复（go）：停止在https://github.com/infiniflow/ragflow/pull/20277中@wuisabel-gif的用户API响应中泄漏密码哈希和访问令牌
*修复（代理）：当@ekalinin在https://github.com/infiniflow/ragflow/pull/20261中GoogleScholar专利为假时，排除专利，而不是引用
* 重构：删除https://github.com/infiniflow/ragflow/pull/20306中@JinHai-CN的更多python代码
* 重构：删除更多python代码，https://github.com/infiniflow/ragflow/pull/20309中@JinHai-CN的第2部分
* 重构：通过 @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/20311 中修复 pyproject.toml 和 uv.lock
* 添加Docker文件docker-compose.yml并通过@myf-bee在https://github.com/infiniflow/ragflow/pull/20305中修改工作流程
* 修复（代理）：需要在 https://github.com/infiniflow/ragflow/pull/20278 中为 @6ba3i 的模板选择模型
* 重构：删除https://github.com/infiniflow/ragflow/pull/20312中@JinHai-CN的py测试用例
* 重构：https://github.com/infiniflow/ragflow/pull/20313中@JinHai-CN删除yaml中的redis
* 杂务（docker）：从https://github.com/infiniflow/ragflow/pull/20316中@xugangqiang的Go compose中删除死的deepdoc_oss服务
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/20318中通过@6ba3i进行路由期间保留分支生产者依赖关系
* 重构：入口点.sh by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20314
* 主要的 go 版本由 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/20317 中发布
* 修复：删除https://github.com/infiniflow/ragflow/pull/20320中@Lynn-Inf版本中的.dev后缀
* 重构（web）：通过 https://github.com/infiniflow/ragflow/pull/20319 中的 @dcc123456 删除 API_PROXY_SCHEME python/混合代理配置
* 修复：删除https://github.com/infiniflow/ragflow/pull/20323中@wangq8未使用的代码
* 文档：通过 https://github.com/infiniflow/ragflow/pull/20062 中的 @Yannnnnnnny 更新文档
* 修复（代理）：通过 @6ba3i 对 https://github.com/infiniflow/ragflow/pull/20337 中的 ExeSQL 配置错误进行分类
* 修复：删除数据集同时删除https://github.com/infiniflow/ragflow/pull/20340中@wangq8的链接文件实体
* 修复(infinity,nav): 恢复https://github.com/infiniflow/ragflow/pull/20339中@qinling0210的导航树和文档结构图
* 文档：通过 https://github.com/infiniflow/ragflow/pull/20345 中的 @Yannnnnnnny 更新 docker 文档中的构建
* 文档：v0.27.2 -> v1.0.0-rc1 by @wangq8 in https://github.com/infiniflow/ragflow/pull/20338
* 文档：@wangq8 在 https://github.com/infiniflow/ragflow/pull/20341 中的 release notes 1.0.0-rc1
* 文档：更新自述文件，作者：@JinHai-CN，https://github.com/infiniflow/ragflow/pull/20347
* 文档：修复https://github.com/infiniflow/ragflow/pull/20350中@JinHai-CN的自述文件

## 新贡献者
* @kabishou11 在 https://github.com/infiniflow/ragflow/pull/19206 中做出了第一个贡献
* @huyua9 在 https://github.com/infiniflow/ragflow/pull/18951 中做出了第一个贡献
* @aroh3006 在 https://github.com/infiniflow/ragflow/pull/19517 中做出了第一个贡献
* @jrlprost 在 https://github.com/infiniflow/ragflow/pull/19576 中做出了第一个贡献
* @wadefelix 在 https://github.com/infiniflow/ragflow/pull/15998 中做出了第一个贡献
* @coderdailyone 在 https://github.com/infiniflow/ragflow/pull/19543 中做出了第一个贡献
* @anonrouterai 在 https://github.com/infiniflow/ragflow/pull/19561 中做出了第一个贡献
* @brucehu 在 https://github.com/infiniflow/ragflow/pull/18598 中做出了第一个贡献
* @Ritiky23 在 https://github.com/infiniflow/ragflow/pull/19559 中做出了第一个贡献
* @liang0417 在 https://github.com/infiniflow/ragflow/pull/19606 中做出了第一个贡献
* @spicyfishPro 在 https://github.com/infiniflow/ragflow/pull/19483 中做出了第一个贡献
* @DennyHo0917 在 https://github.com/infiniflow/ragflow/pull/19566 中做出了第一个贡献
* @gluedtea 在 https://github.com/infiniflow/ragflow/pull/19541 中做出了第一个贡献
* @Mnilax 在 https://github.com/infiniflow/ragflow/pull/19633 中做出了第一个贡献
* @lucasoffchain 在 https://github.com/infiniflow/ragflow/pull/19419 中做出了第一个贡献
* @li872 在 https://github.com/infiniflow/ragflow/pull/19555 中做出了第一个贡献
* @seven7763 在 https://github.com/infiniflow/ragflow/pull/19560 中做出了第一个贡献
* @ori-frenkel 在 https://github.com/infiniflow/ragflow/pull/19407 中做出了第一个贡献
* @L4XB 在 https://github.com/infiniflow/ragflow/pull/19690 中做出了第一个贡献
* @wang393 在 https://github.com/infiniflow/ragflow/pull/19521 中做出了第一个贡献
* @HUAN2022A 在 https://github.com/infiniflow/ragflow/pull/17669 中做出了第一个贡献
* @QAQadws 在 https://github.com/infiniflow/ragflow/pull/19776 中做出了第一个贡献
* @ning-jl 在 https://github.com/infiniflow/ragflow/pull/19498 中做出了第一个贡献
* @aiapienthusiast 在 https://github.com/infiniflow/ragflow/pull/19748 中做出了第一个贡献
* @MQ-xz 在 https://github.com/infiniflow/ragflow/pull/19817 中做出了第一个贡献
* @techpreneur-a 在 https://github.com/infiniflow/ragflow/pull/19758 中做出了第一个贡献
* @georgeatparallel 在 https://github.com/infiniflow/ragflow/pull/19518 中做出了第一个贡献
* @Anurag-M1 在 https://github.com/infiniflow/ragflow/pull/19885 中做出了第一个贡献
* @JHWu1117 在 https://github.com/infiniflow/ragflow/pull/19970 中做出了第一个贡献
* @Jinzhengxu 在 https://github.com/infiniflow/ragflow/pull/19990 中做出了第一个贡献
* @Bruce-Yii 在 https://github.com/infiniflow/ragflow/pull/20072 中做出了第一个贡献
* @jamalkamaladdin 在 https://github.com/infiniflow/ragflow/pull/20131 中做出了第一个贡献
* @imexlovery 在 https://github.com/infiniflow/ragflow/pull/20028 中做出了第一个贡献
* @lihongyuan99 在 https://github.com/infiniflow/ragflow/pull/20150 中做出了第一个贡献
* @wuisabel-gif 在 https://github.com/infiniflow/ragflow/pull/16760 中做出了第一个贡献
* @senovr 在 https://github.com/infiniflow/ragflow/pull/20264 中做出了第一个贡献
* @flyingwhit 在 https://github.com/infiniflow/ragflow/pull/20300 中做出了第一个贡献
* @ekalinin 在 https://github.com/infiniflow/ragflow/pull/20261 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.27.2...v1.0.0-rc1

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v1.0.0-rc1` · 📅 发布：2026-09-29 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v1.0.0-rc1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
