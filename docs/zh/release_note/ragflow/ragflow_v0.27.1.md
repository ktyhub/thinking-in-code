---
title: "ragflow v0.27.1"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.27.1"
version: "v0.27.1"
published: "2026-08-28"
type: "patch"
lang: "zh"
---

# ragflow v0.27.1

## 新功能
- 用于数据源的新 Azure DevOps 连接器 ([#18715](https://github.com/infiniflow/ragflow/pull/18715))
- 用于聊天和代理的新 You.com 网络搜索提供商 ([#18478](https://github.com/infiniflow/ragflow/pull/18478))
- 用于聊天的新 Serply 网络搜索提供商 ([#18475](https://github.com/infiniflow/ragflow/pull/18475))

## 模型支持
- 新的 Synthorai 模型提供程序（[#18830](https://github.com/infiniflow/ragflow/pull/18830)）
- 添加了缺少的 DeepSeek 模型 ([#18678](https://github.com/infiniflow/ragflow/pull/18678))
- AWS Bedrock API 密钥身份验证支持（[#18301](https://github.com/infiniflow/ragflow/pull/18301)）

## 改进
- 检索 API 公开 rerank_candidates_count、knn top_k 和 num_candidates ([#18768](https://github.com/infiniflow/ragflow/pull/18768)、[#18737](https://github.com/infiniflow/ragflow/pull/18737))
- 元数据过滤器下推到元数据索引以加快检索速度 ([#18219](https://github.com/infiniflow/ragflow/pull/18219))
- 聊天设置表单在保存时自动滚动到错误位置（[#18811](https://github.com/infiniflow/ragflow/pull/18811)）
- 搜索页面验证已删除的知识库（[#18522](https://github.com/infiniflow/ragflow/pull/18522)）

## 错误修复
- 修复了聊天中 PDF 解析失败的问题 ([#18860](https://github.com/infiniflow/ragflow/pull/18860))
- 修复了 wiki 编译接受 LLM 错误响应的问题 ([#18857](https://github.com/infiniflow/ragflow/pull/18857))
- 修复了 MinerU 渲染稳定性、错误可见性和代码块解析 ([#18617](https://github.com/infiniflow/ragflow/pull/18617))
- 修复了 0 块数据集未显示的问题，防止滚动以获取更多数据集 ([#18810](https://github.com/infiniflow/ragflow/pull/18810))
- 修复了 QA Excel 解析器删除答案为零的行 ([#17902](https://github.com/infiniflow/ragflow/pull/17902))
- 修复了幼稚的解析器将空上传视为丢失的二进制文件的问题（[#18826](https://github.com/infiniflow/ragflow/pull/18826)）
- 修复了编码检测丢弃置信检测结果的问题 ([#15793](https://github.com/infiniflow/ragflow/pull/15793))
- 修复了启用推理的聊天忽略对话框系统提示的问题（[#18842](https://github.com/infiniflow/ragflow/pull/18842)）
- 使用默认租户 LLM 而不是管道 LLM 修复了知识编译（[#18572](https://github.com/infiniflow/ragflow/pull/18572)）
- 修复了聊天网络搜索服务不允许为空的问题 ([#18791](https://github.com/infiniflow/ragflow/pull/18791))
- 修复了 Firefox 聊天自动滚动未固定在底部的问题 ([#18736](https://github.com/infiniflow/ragflow/pull/18736))
- 修复了聊天自动滚动不跟随流答案的问题 ([#18570](https://github.com/infiniflow/ragflow/pull/18570))
- 修复了选择上传后解析进度不可见的问题 ([#18741](https://github.com/infiniflow/ragflow/pull/18741))
- 修复了 BigQuery 连接器错误地构建 SQL 查询的问题 ([#17500](https://github.com/infiniflow/ragflow/pull/17500))
- 修复了未传播的 WebDAV 列表错误，导致修剪数据丢失 ([#18694](https://github.com/infiniflow/ragflow/pull/18694))
- 修复了数据源同步中的跨 KB 文档 ID 冲突 ([#18244](https://github.com/infiniflow/ragflow/pull/18244))
- 修复了 GPUStack 模型发现和音频支持 ([#18599](https://github.com/infiniflow/ragflow/pull/18599))
- 修正 Kimi K3 温度 ([#18564](https://github.com/infiniflow/ragflow/pull/18564))
- 修复了未配置 image2text 模型时 OCR 文本丢失的问题 ([#18012](https://github.com/infiniflow/ragflow/pull/18012))
- 修复了分层 Wiki 主题导航 ([#18721](https://github.com/infiniflow/ragflow/pull/18721))

## 发生了什么变化
* 修复（网络）：https://github.com/infiniflow/ragflow/pull/18512 中 @dcc123456 在浮动聊天小部件中设置思考/检索块的样式
*修复[同步器]：github数据源不验证https://github.com/infiniflow/ragflow/pull/18477中@Haruko386可访问的存储库
* 修复：测试数据源连接需要https://github.com/infiniflow/ragflow/pull/18495中@Haruko386的连接器名称
* feat[syncer]: 在https://github.com/infiniflow/ragflow/pull/18501中添加@Haruko386的数据源Confluence
* 重构：删除https://github.com/infiniflow/ragflow/pull/18502中@Haruko386一些未使用的模型类型
*修复（api）：报告为什么提供者模型发现失败，而不是由https://github.com/infiniflow/ragflow/pull/18027中的@olifarhaan吞掉它
* 修复：在https://github.com/infiniflow/ragflow/pull/18483中@Sevenzuo在GaussDB上保留无扩展文档后缀
* 修复（内存）：在 https://github.com/infiniflow/ragflow/pull/18461 中遵循 @yzl0ng 的自定义提取提示
* 修复（内存）：通过 @yzl0ng 在 https://github.com/infiniflow/ragflow/pull/18463 中标准化无效的提取时间戳
* 修复（内存）：在 https://github.com/infiniflow/ragflow/pull/18462 中需要 @yzl0ng 的语义 valid_at 时间戳
* 修复（nlp）：通过 https://github.com/infiniflow/ragflow/pull/18470 中的 @yzl0ng 区分字母 OOV 术语权重
*修复：聊天没有通过@Haruko386在https://github.com/infiniflow/ragflow/pull/18485中将模型配置传递给提供者
* feat(chat): 自检查矛盾的提示/数据集设置 (#5703) by @peewee92 in https://github.com/infiniflow/ragflow/pull/18274
* 壮举（聊天）：通过 @googio 在 https://github.com/infiniflow/ragflow/pull/18475 添加 Serply 网络搜索提供商
* 修复：通过 @01JohnMa 在 https://github.com/infiniflow/ragflow/pull/18210 中清除过时的租户模型 ID
* 壮举：@mkaaad 在 https://github.com/infiniflow/ragflow/pull/18513 中连接器转到 imap
*修复：在https://github.com/infiniflow/ragflow/pull/17453中通过@Hellrak传递无限向量相似权重
* TS：更新@JinHai-CN在https://github.com/infiniflow/ragflow/pull/18521中的思维描述
* 修复：在 https://github.com/infiniflow/ragflow/pull/18012 中 @Dhruv-kys 未配置 image2text 模型时保留 OCR 文本
* 修复（聊天）：在 https://github.com/infiniflow/ragflow/pull/18504 中 @euvre 关闭异步通道之前耗尽深度研究 goroutine
*壮举（deepdoc）：Python-中级重播奇偶校验工具+由@xugangqiang在https://github.com/infiniflow/ragflow/pull/18516中进行的表格单元格填充修复
* 修复（ollama）：在 https://github.com/infiniflow/ragflow/pull/17663 中保留 @lntutor 的多模态图像
*壮举（cli）：通过https://github.com/infiniflow/ragflow/pull/18534中的@krishna231122-del向cli添加--version标志
* 在 Docker 中为 cpu 和 gpu 服务添加 ulimit 在 https://github.com/infiniflow/ragflow/pull/17205 中由 @Ro0tk1t 撰写
* 修复：@Haruko386 在 https://github.com/infiniflow/ragflow/pull/18540 中的 ollama 聊天错误
* 修复：通过 https://github.com/infiniflow/ragflow/pull/18135 中的 @DeviousDrops 避免 RAG 合并路径中的二次重复数据删除
* 重构（chunker）：用 PairChunker/PageChunker 替换 QAChunker/PresentationChunker，在 https://github.com/infiniflow/ragflow/pull/18523 中删除 @xugangqiang 的 TagChunker
* 由 @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/18544 中更新 release note
* 壮举（聊天）：通过 @brainsparker 在 https://github.com/infiniflow/ragflow/pull/18478 中添加 You.com 网络搜索提供商
* 修复：在 https://github.com/infiniflow/ragflow/pull/17150 中 @iwasaki1112 尊重数据集创建对话框中 Enter 键上的 IME 组合状态
* 修复（数据集）：在 https://github.com/infiniflow/ragflow/pull/17665 中保留 @lntutor 禁用的 RAPTOR 和 GraphRAG 设置
* 修复：在https://github.com/infiniflow/ragflow/pull/18541中通过@Lynn-Inf处理没有id的tenant_llm
*重构（摄取）：统一模块化元数据上的自动元数据和硬删除遗留单元（BuiltInMetadata携带，不是LLM）由https://github.com/infiniflow/ragflow/pull/18511中的@jay77721
* feat(title-chunker): 在 https://github.com/infiniflow/ragflow/pull/18551 中 @xugangqiang 对 Go 标题系列块强制执行 chunk_token_cap (#18455)
* 修复（deepdoc）：在表格单元格填充之前删除嵌套的 OCR 框 + 通过 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/18524 中暴露 13/14 奇偶校验间隙
* 修复：https://github.com/infiniflow/ragflow/pull/18535中@Haruko386发生数据源返回两个错误的问题
* feat[syncer]: 在https://github.com/infiniflow/ragflow/pull/18539中通过@Haruko386实现钉钉AI表数据源
* 文档：添加数据集文档并修复 https://github.com/infiniflow/ragflow/pull/18553 中 @Yannnnnnnny 文档中损坏的链接
* 测试：在https://github.com/infiniflow/ragflow/pull/18528中通过@pangwangshu在resolve_model_config中固定裸租户_model.id解析
* 修复（内存）：通过 @primorLee 在 https://github.com/infiniflow/ragflow/pull/18547 中使默认提示具有确定性
* 修复（auth）：在 @krim404 在 https://github.com/infiniflow/ragflow/pull/18530 中发现之前，从 OIDC 发行者中删除尾部斜杠
* feat(syncer)：在 https://github.com/infiniflow/ragflow/pull/18548 中添加带有检查点恢复的 R2 连接器 @mkaaad
* feat(chunker)：在 https://github.com/infiniflow/ragflow/pull/18525 中 @xugangqiang 的 TokenChunker 合并中强制实施硬代币上限
* 修复：在 https://github.com/infiniflow/ragflow/pull/18546 中列出 @Haruko386 的所有模型时，获取两个 VLM 模型类型
* 修复（db）：使负 GET_LOCK 超时在 https://github.com/infiniflow/ragflow/pull/18529 中的 @krim404 在 MariaDB 上工作
*修复：在https://github.com/infiniflow/ragflow/pull/18506中保留@Sevenzuo阻塞的GaussDB咨询锁
* 壮举：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/18557 中改进增量 Wiki 编译
* 修复：确保在 https://github.com/infiniflow/ragflow/pull/18560 中通过@Lynn-Inf 添加tenant_ocr_id
* 修复：将图像/ppt/电子邮件/音频从常规切换到管道，或切换回来，在https://github.com/infiniflow/ragflow/pull/18555中@wangq8报错
* 修复（编译模板）：使用 @euvre 在 https://github.com/infiniflow/ragflow/pull/18549 中收缩的“example”键发出 wiki 预设
* 修复：https://github.com/infiniflow/ragflow/pull/18537 中 @wangq8 将用户从超级用户切换到普通用户错误
* 修复（摄取）：在 https://github.com/infiniflow/ragflow/pull/18484 中显示@euvre 内置管道摄取日志的数据管道列
* feat(syncer): 在 https://github.com/infiniflow/ragflow/pull/18554 中添加带有检查点恢复的 Moodle 连接器 @mkaaad
* 重构：https://github.com/infiniflow/ragflow/pull/18550 中@Haruko386 简化同步任务服务并强化调度程序恢复
* feat[syncer]: 在https://github.com/infiniflow/ragflow/pull/18558中通过@Haruko386实现数据源Jira
* 修复：在 https://github.com/infiniflow/ragflow/pull/17320 中 @tryeverything24 在 RAGFlowAvatar 中呈现多字名称的两个首字母缩写
* feat(agent): 支持 https://github.com/infiniflow/ragflow/pull/18316 中 @T1mn 的 OpenAI 兼容响应
* 修复：在 https://github.com/infiniflow/ragflow/pull/18566 中通过 @buua436 对齐 wiki 图表和数据集日志
* 修复：在 https://github.com/infiniflow/ragflow/pull/17325 中 @rsnetworkinginc 在深度分页助手中应用 order_by 返回值（无序 OFFSET/LIMIT 可以跳过/重复行）
* 修复(web): 清理https://github.com/infiniflow/ragflow/pull/17590中@kah-ja解析的markdown树而不是字符串(GHSA-jv5f-3mqh-cxwf)
* 修复（deepdoc）：删除 OCR 子字符串片段，无论 https://github.com/infiniflow/ragflow/pull/18568 中的 @xugangqiang 是否存在空格分歧
* 修复（deepdoc）：通过跨度注入保留覆盖的单元格，以便跨度表保留https://github.com/infiniflow/ragflow/pull/18574中@xugangqiang的所有TSR行
* Go: 修复https://github.com/infiniflow/ragflow/pull/18573中@JinHai-CN的错误处理
* 修复：仅将源密钥存储在 https://github.com/infiniflow/ragflow/pull/18239 中 @euvre 的 pipeline_operation_log.source_from 中
* 修复（解析器）：允许 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/18575 中为音频系列提供文本输出格式
*修复（代理）：通过https://github.com/infiniflow/ragflow/pull/18532中的@yzl0ng重置新会话的执行路径
* 功能：验证从搜索页面删除的知识库。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/18522
* 修复（网页）：保持聊天自动滚动，跟随 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/18570 中的流式回答
* 修复知识编译以使用管道 LLM 而不是 https://github.com/infiniflow/ragflow/pull/18572 中 @wangq8 的默认租户 LLM
* 修复：@Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/18564 中的 kimi k3 温度
*修复（web）：在https://github.com/infiniflow/ragflow/pull/18561中通过@dcc123456保留TreeSelect过滤器中标题匹配节点的整个子树
* 修复：通过 https://github.com/infiniflow/ragflow/pull/17924 中的 @euvre 通过 DashScope 本机端点实现 Tongyi-Qianwen TTS
* 修复（代理）：绑定代理机器人补全中的查询字段，并通过 https://github.com/infiniflow/ragflow/pull/17844 中的 @euvre 清理失败的首次触摸会话
* 修复（文件）：在https://github.com/infiniflow/ragflow/pull/18586中由@euvre创建/重命名时拒绝包含“/”的文件夹名称
* 修复（内存）：将内存 valid_at/forget_at 持久保存为服务器本地时间，而不是 https://github.com/infiniflow/ragflow/pull/18538 中 @euvre 的 UTC
* 修复：将文件重命名传播到 https://github.com/infiniflow/ragflow/pull/18590 中 @euvre 的所有链接知识库文档
* 修复（模型）：推断目录上的模型类型缺失，因此 Qwen VLM 在 https://github.com/infiniflow/ragflow/pull/18571 中显示 @euvre 的 LLM+VLM 标签
* 修复：Go chat 管道通过 https://github.com/infiniflow/ragflow/pull/18580 中的 @euvre 将图像块发送到纯文本模型（Zhipu GLM 错误 1210）
* 修复（引擎）：当https://github.com/infiniflow/ragflow/pull/18536中的@euvre未初始化NATS引擎时，返回错误而不是恐慌
* 功能：重写基于 Go 的提取器操作符形式。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18600
* 修复: 在 https://github.com/infiniflow/ragflow/pull/18601 中允许 @Lynn-Inf 的 yiyan api 密钥
* 修复（doc_store）：在 https://github.com/infiniflow/ragflow/pull/17196 中重试 @Harsh23Kashyap 池初始化中的瞬时连接错误
* 修复（搜索）：修复 https://github.com/infiniflow/ragflow/pull/18519 中 @euvre 搜索页面未全屏时的布局 clipping
* 修复（搜索）：在 https://github.com/infiniflow/ragflow/pull/18520 中 @euvre 的空查询中不要跳转到上一个搜索结果
* feat(go-syncer)：通过 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/18603 中添加带检查点恢复的 Slack 连接器
* perf(retrieval)：通过https://github.com/infiniflow/ragflow/pull/18219中的@ting-hong-shieh将元数据过滤器推送到元数据索引
* 为工作流程添加 dockerfile_ci 并通过 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/18606 中恢复单个 docker 文件
* 文档：在 https://github.com/infiniflow/ragflow/pull/18609 中添加 @Yannnnnnnny 的文档之间的链接
* 修复（web）：clicking 开关设置行中的任意位置可通过 https://github.com/infiniflow/ragflow/pull/18567 中的 @euvre 切换开关
* 修复（元数据）：https://github.com/infiniflow/ragflow/pull/17394 中 @guominjia 批量大文档 ID 过滤器
* 修复：数据集摄取日志没有其他类型，而不是 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/18605 中的成功
* 修复（llm）：通过 @Harsh23Kashyap 在 https://github.com/infiniflow/ragflow/pull/17688 中整合 3 个调用站点的 TTS / Seq2txt 提供者密钥解析
* 修复：https://github.com/infiniflow/ragflow/pull/18445 中@Sevenzuo 在 GaussDB 上保留空聊天字段
* feat[provider]：当https://github.com/infiniflow/ragflow/pull/18593中的@Haruko386模型没有类型时应用model_type推断
* feat[syncer]: 在https://github.com/infiniflow/ragflow/pull/18612中添加@Haruko386的数据源DropBox
* 优化[syncer]：优化https://github.com/infiniflow/ragflow/pull/18613中@Haruko386出现的返回错误
*修复（构建）：命名检查所需的编译器，以及https://github.com/infiniflow/ragflow/pull/18594中@marmar9615-cloud失败的选项
* 修复：在 https://github.com/infiniflow/ragflow/pull/17346 中 @huang-aoqin 保留 update_metadata_to 中的非字符串值
* @mkaaad 在 https://github.com/infiniflow/ragflow/pull/18618 中的壮举/连接器 go sharepoint
* 重构：将处理不同后端服务的前端逻辑重构为使用`pickByBackend`，从而提高代码清晰度和可维护性。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18614
* 修复（web）：在https://github.com/infiniflow/ragflow/pull/18589中通过@euvre删除单个文件后保持多选计数同步
* 修复：https://github.com/infiniflow/ragflow/pull/18623 中 @euvre 删除数据集后所有者过滤器计数未更新
* 修复（go）：使用 llm 设置进行 AI 摘要并通过 https://github.com/infiniflow/ragflow/pull/18615 中的 @Lynn-Inf 返回原始错误消息
* 修复(web): 在 https://github.com/infiniflow/ragflow/pull/18611 中接受 @dcc123456 的百度一言单个 API 密钥
* 修复（deepdoc）：关闭 ocr_real 文本间隙分歧并通过 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/18630 中固定字符到框匹配
* 修复（cli）：通过 @NgoQuocViet2001 在 https://github.com/infiniflow/ragflow/pull/18292 中计算基准应用程序失败次数
* 修复（show_env）：将 git 错误排除在 https://github.com/infiniflow/ragflow/pull/18597 中 @marmar9615-cloud 的环境报告之外
* 文档（入口点）：显示https://github.com/infiniflow/ragflow/pull/18596中@marmar9615-cloud接受的每个选项usage()
* 修复（deepdoc）：将 Go 表行数与 https://github.com/infiniflow/ragflow/pull/18622 中 @xugangqiang 奇偶校验重放中的 Python 每个字符 R/C 对齐
* 修复（deepdoc）：解决 OCR 文本间隙 - pdf 解析器中的字符丢失/重复，作者：https://github.com/infiniflow/ragflow/pull/18643 中的 @xugangqiang
* 修复了 HTML 解析器将 https://github.com/infiniflow/ragflow/pull/17904 中 @devYRPauli 的空上传视为缺失二进制文件的问题
* 通过 @yuzhichang 在 https://github.com/infiniflow/ragflow/pull/18654 中将智能推理代理 RAG 移植到 eino ADK
*修复（网络）：通过https://github.com/infiniflow/ragflow/pull/18620中的@dcc123456为每个提供程序实例卡提供自己的表面
* 修复（摄取）：在 https://github.com/infiniflow/ragflow/pull/18632 中 @euvre 遵循提取器提示中的自动关键字/自动问题 top_n 滑块
* 修复(web): 当思维导图的容器在https://github.com/infiniflow/ragflow/pull/18616中通过@dcc123456改变大小时，调整思维导图的大小
* 修复(web): 在https://github.com/infiniflow/ragflow/pull/18660中使用@ilya-bogin-keenable对工具图标使用真正的Keenable标记
* 添加 nat 和 clickhouse 在 docker 中暴露端口，由 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/18577 中编写
* 修复：调用代理使用经过验证的 URL；删除https://github.com/infiniflow/ragflow/pull/18657中@simpleqt Canvas.reset中的杂散调试打印
* 删除 https://github.com/infiniflow/ragflow/pull/18652 中@darkdi 的三个无操作自分配
* 文档：用https://github.com/infiniflow/ragflow/pull/18664中@simpleqt的相对页面链接替换根相对交叉链接
*修复（opensearch）：通过将https://github.com/infiniflow/ragflow/pull/18662中@barandras的相似性映射到knn boost来停止将向量分数归零
* 恢复 https://github.com/infiniflow/ragflow/pull/18670 中 @JinHai-CN 的“将智能推理代理 RAG 移植到 eino ADK”
* 修复@yingfeng 在 https://github.com/infiniflow/ragflow/pull/18675 中的文档格式
* 修复：说明 @buua436 在 https://github.com/infiniflow/ragflow/pull/18667 中的检查点摄取进度
* 修复（workerpool）：在 https://github.com/infiniflow/ragflow/pull/18646 中关闭 SubmitTo/StopWait 竞赛而不丢失 @changshenhan 的正在进行的任务
* 修复（手动）：仅匹配 .docx，以便旧版 .doc 在 https://github.com/infiniflow/ragflow/pull/18649 中由 @ayam04 彻底失败
* feat(go-syncer)：通过 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/18674 中添加带有检查点简历的 Salesforce 连接器
* 修复（摄取）：通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/18607 中重构具有内存索引、不对称覆盖、多源富集和工作池排序的标签提取器
* 安全性：删除泄露的 OAuth 凭据并停止通过 @simpleqt 在 https://github.com/infiniflow/ragflow/pull/18658 中记录用户机密
* 修复：正确重新排序 #17296 - 在 https://github.com/infiniflow/ragflow/pull/18300 中添加 @wangq8 的 prefetch_size
* feat(go-syncer)：在 https://github.com/infiniflow/ragflow/pull/18680 中添加 @mkaaad 的带有职位简历的 Teams 连接器
* 修复：在https://github.com/infiniflow/ragflow/pull/18644中@changshenhan在检索热路径上预编译正则表达式
*修复：将#18300移植到https://github.com/infiniflow/ragflow/pull/18690中的@wangq8
* 修复（web）：在https://github.com/infiniflow/ragflow/pull/18608中@euvre隐藏浮动聊天小部件中的空思维条
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/18666 中保留 @primorLee 消息引用周围的空格
* 修复：通过@6ba3i在https://github.com/infiniflow/ragflow/pull/18676中验证消息内容以防止空值
* 修复：https://github.com/infiniflow/ragflow/pull/18673 中 @6ba3i 代理中的 pdf 生成问题
* 杂务：在 https://github.com/infiniflow/ragflow/pull/18678 中添加@6ba3i 缺失的 deepseek 模型
* 修复（sdk）：温度默认值应该是浮点数，而不是 https://github.com/infiniflow/ragflow/pull/18656 中 @simpleqt 的 1 元组
* 修复（task_executor）：将提取的 important_kwd 术语限制为 @RahilOp 在 https://github.com/infiniflow/ragflow/pull/17512 中的 ES 关键字限制
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/18705中的一些评论
* 修复：规范化 _factory_model_types 中的模型类型并通过 @6ba3i 更新 https://github.com/infiniflow/ragflow/pull/18685 中的calculate_model_type
*修复：恢复executeMemoryTask中的恐慌，因此有毒内存任务无法杀死https://github.com/infiniflow/ragflow/pull/18687中@xugangqiang的摄取器工作人员
* feat(extractor): 添加内联 24h Redis LLM 缓存，用于 https://github.com/infiniflow/ragflow/pull/18716 中的 @jay77721 的关键字、问题和摘要
* 修复（deepdoc）：防止 https://github.com/infiniflow/ragflow/pull/18688 中 @xugangqiang 从页面局部 Y 坐标跨页表过度合并
* 功能：提取器操作员可以同时处理多个提取任务。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18717
* 修复（聊天）：停止 rag_agent 将消息簿记密钥转发给 https://github.com/infiniflow/ragflow/pull/18663 中的@bharadwaj-pendyala 提供者
*修复（deepdoc）：传播跨单元格bbox，以便Go在https://github.com/infiniflow/ragflow/pull/18707中由@xugangqiang发出正确的colspan
* 修复：在 https://github.com/infiniflow/ragflow/pull/18682 中 @buua436 删除文档时发布 wiki 事件
*修复（代理）：https://github.com/infiniflow/ragflow/pull/18579中@T1mn表面取消终端状态
* 修复（模型）：将选定的模型传递给https://github.com/infiniflow/ragflow/pull/17132中的@ondery进行验证并捕获构造函数错误
* feat(bedrock): 支持https://github.com/infiniflow/ragflow/pull/18301中@whhe的API密钥认证
* 修复：https://github.com/infiniflow/ragflow/pull/15822 中@devYRPauli 将 .wmf 文件分类为 VISUAL 而不是 OTHER
* 重构：https://github.com/infiniflow/ragflow/pull/18718 中 @wangq8 将 prefetch_size 重命名为 rerank_candidates
* 修复（wiki）：https://github.com/infiniflow/ragflow/pull/18695 中 @libao Jiang 没有编译配置的保护生成
* 文档（迁移）：说明 https://github.com/infiniflow/ragflow/pull/18626 中的 @marmar9615-cloud 备份实际覆盖了哪些卷
* 修复（api）：使 API 键主题在 https://github.com/infiniflow/ragflow/pull/18026 中的 @olifarhaan 可以访问 POST /messages 上进行划分
* 壮举（代理）：在 https://github.com/infiniflow/ragflow/pull/18583 中添加 @brainsparker 的 You.com 搜索工具
* 修复（rag）：将搜索查询和页面文本保留在 https://github.com/infiniflow/ragflow/pull/18582 中 @brainsparker 的连接器日志中
* 修复（管理员）：@yaoper 在 https://github.com/infiniflow/ragflow/pull/17300 中正确显示 AWS S3 状态
* [修复]通过@paulhuiseismic在https://github.com/infiniflow/ragflow/pull/17376中细化了NLTK数据使用目录
* 修复：从字面上替换 UserFillUp 提示占位符，以避免 @rsnetworkinginc 在 https://github.com/infiniflow/ragflow/pull/17321 中出现 re.error
* 修复：按字面意思替换消息变量以避免 @rsnetworkinginc 在 https://github.com/infiniflow/ragflow/pull/17319 中的正则表达式转义上出现 re.error
* 修复：通过 https://github.com/infiniflow/ragflow/pull/17317 中的 @tryeverything24 删除人类可读的持续时间标签中的尾随空格
* 修复（web）：通过https://github.com/infiniflow/ragflow/pull/17324中的@tryeverything24从history.location getter返回真实的导航状态
*修复(web):忽略IME组合在https://github.com/infiniflow/ragflow/pull/17322中@tryeverything24输入的标签中输入
* 修复：在 https://github.com/infiniflow/ragflow/pull/18581 中通过 @euvre 在“链接到知识库”对话框中搜索时，显示链接的知识库名称而不是 ID
* 修复（web）：在https://github.com/infiniflow/ragflow/pull/18517中@euvre在嵌入式浮动小部件中显示代理打开语句
*修复（bot）：将聊天机器人完成最终帧和历史持久性与https://github.com/infiniflow/ragflow/pull/18526中的@euvre的python对齐
* 修复：在https://github.com/infiniflow/ragflow/pull/18719中@cike8899为SelectWithSearch添加自定义占位符
* 修复：在 https://github.com/infiniflow/ragflow/pull/18696 中添加并使用 @Lynn-Inf 的 paddleOCR.net 模型
* 修复（web）：在 https://github.com/infiniflow/ragflow/pull/18672 中通过 @dcc123456 搜索时，将多选选项保留在其声明的顺序中
* 修复（网络）：在 https://github.com/infiniflow/ragflow/pull/18259 中通过 @euvre 制作聊天附件图像 click-to-zoomable
* 修复（web）：在 https://github.com/infiniflow/ragflow/pull/18700 中通过 @euvre 使溢出的卡片描述工具提示可滚动
* 修复（设置模型）：停止在 https://github.com/infiniflow/ragflow/pull/18722 中通过 @dcc123456 静默删除重复命名的提供程序实例
* 修复（go）：https://github.com/infiniflow/ragflow/pull/18684 中 @euvre 按创建时间对提供程序模型实例进行排序
* 修复（网络）：聊天设置面板与 https://github.com/infiniflow/ragflow/pull/18723 中@euvre 在狭窄视口上的聊天输入重叠
* 修复：删除所有已编译实体后，返回此页面会显示空数据条目。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/18724
* 修复（网络）：在https://github.com/infiniflow/ragflow/pull/18527中@euvre的浮动聊天小部件回复上始终显示复制按钮
*修复（路由器）：在https://github.com/infiniflow/ragflow/pull/18681中接受@euvre在代理上传和附件下载上的共享（测试版）令牌
* 修复（svr）：区分 https://github.com/infiniflow/ragflow/pull/18691 中 @Harsh23Kashyap 的 wiki 空资格消息中的空文档和缺失模板
* 修复（常见）：从 _list_files_recursive 传播 WebDAV 列表错误，以避免 https://github.com/infiniflow/ragflow/pull/18694 中 @Harsh23Kashyap 修剪数据丢失
* 修复（代理）：https://github.com/infiniflow/ragflow/pull/18677 中的 @Lem0nTea2002 将爬虫响应主体绑定到 4 MiB
* 修复: 支持 https://github.com/infiniflow/ragflow/pull/18721 中 @buua436 的分层 Wiki 主题导航
* 修复电子邮件和演示文稿解析器，将 https://github.com/infiniflow/ragflow/pull/18712 中的 @devYRPauli 的空上传视为丢失的二进制文件
* Go：通过@wangq8在https://github.com/infiniflow/ragflow/pull/18726中移植＃18663
* 修复：在https://github.com/infiniflow/ragflow/pull/18728中跳过@buua436的空知识编译事件
* 修复：修改聊天回复为空的错误提示。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18730
* 修复（mcp）：在 https://github.com/infiniflow/ragflow/pull/18710 中的 @Harsh23Kashyap 的 list_datasets 输出中包含数据集名称（#17133）
* 修复（连接器）：遵循 @yijiaquan 在 https://github.com/infiniflow/ragflow/pull/18576 中配置的 S3 兼容存储桶类型
* 修复(pdf)：colspan 装配丢失 + TSR 几何比较诊断，由 @xugangqiang 在 https://github.com/infiniflow/ragflow/pull/18727 中进行
* 修复：https://github.com/infiniflow/ragflow/pull/18244 中 @sarbojitrana 数据源同步中的跨 KB 文档 ID 冲突 (#18116)
* 重构：通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/18737 中公开 knn top_k 和 knn num_candidaties
* feat(go-syncer)：通过 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/18701 中添加带有检查点恢复的 Azure Blob 存储连接器
*修复（管理员）：在https://github.com/infiniflow/ragflow/pull/17674中由@Taranum01在引导程序中尊重DEFAULT_SUPERUSER_EMAIL/PASSWORD环境变量
* 修复：选择上传后，直接解析文档，但看不到解析进度。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18741
* 修复(web): 当 https://github.com/infiniflow/ragflow/pull/18738 中的 @dcc123456 数据集文件列表清空时回退一个页面
* 修复(web): 在https://github.com/infiniflow/ragflow/pull/18739中通过@dcc123456创建或编辑块时需要块内容
* 修复：Python版本数据集配置页面添加聊天模型。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/18735
* 修复（网页）：通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/18736 中将 Firefox 聊天自动滚动固定到底部
* 修复（代理）：防止 @simpleqt 在 https://github.com/infiniflow/ragflow/pull/18711 中上传浏览器 URL 文件中的路径遍历和 SSRF
* 修复（代理）：通过 @T1mn 在 https://github.com/infiniflow/ragflow/pull/18743 中编辑内部终端错误
* 修复 https://github.com/infiniflow/ragflow/pull/18599 中 @javen-yan 的 GPUStack 模型发现和音频支持
* 将 #18737 移植到 https://github.com/infiniflow/ragflow/pull/18745 中的 @wangq8
* 修复（pdf）：恢复跨页表合并被https://github.com/infiniflow/ragflow/pull/18740中@xugangqiang的#18688页面绝对Y门错误拒绝
* 修复总数为总数，在 https://github.com/infiniflow/ragflow/pull/18750 中关注 @wangq8 的 Go
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/18734 中 @euvre 在没有默认 TTS 模型的情况下运行自动播放时出现恐慌和原始错误
* 修复（聊天）：通过 @Lem0nTea2002 在 https://github.com/infiniflow/ragflow/pull/18733 中传播思维导图流失败
* 修复（解析器）：裁剪 PDF JSON 路径中的媒体部分，统一 https://github.com/infiniflow/ragflow/pull/18742 中的 @jay77721 的数据 URI 和 Markdown 渲染
* 修复（deepdoc）：通过 @Yurii214 在 https://github.com/infiniflow/ragflow/pull/17316 中强化 opendataloader 表单元格解析以防止 json 损坏
* 修复（pdf）：从https://github.com/infiniflow/ragflow/pull/18308中@Taranum01的文本层提取中去除平铺水印文本
* 修复（代理）：默认缺少图形路径，因此存储的 DSL 无法通过 @BetterAndBetterII 在 https://github.com/infiniflow/ragflow/pull/18753 中出现 KeyError
* 修复(go): PaddleOCR -> PaddleOCR.local, PaddleOCR.net -> PaddleOCR by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18747
* 修复（聊天）：通过 @euvre 在 https://github.com/infiniflow/ragflow/pull/18708 中将上传的图像附件传递到 Go 聊天管道中的视觉模型
* feat(data_source)：通过 @erhanaydin 在 https://github.com/infiniflow/ragflow/pull/18715 中添加 Azure DevOps 连接器
* 修复（内存）：将 Go 语义 valid_at 提示与 https://github.com/infiniflow/ragflow/pull/18752 中 @anneheartrecord 的 Python 措辞对齐
* 文档（沙盒）：描述https://github.com/infiniflow/ragflow/pull/18625中的@marmar9615-cloud实际上如何调整容器池的大小
*修复（沙箱）：删除https://github.com/infiniflow/ragflow/pull/18629中@marmar9615-cloud存在的沙箱容器，而不是池大小范围
* 修复（web）：https://github.com/infiniflow/ragflow/pull/17668 中的@Souravrajvi0 的表面数据集导航树加载失败（关闭#17301）
* 文档：通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/18770 中更新 27.0 release note
* 修复（解析器）：清理 .eml 文本输出，以便通过 https://github.com/infiniflow/ragflow/pull/18592 中的 @euvre 进行分块
*修复（网络）：代理探索流答案泄漏到https://github.com/infiniflow/ragflow/pull/18686中@euvre切换到的会话中
* 修复（web）：阻止 RAGFlow 品牌块与 https://github.com/infiniflow/ragflow/pull/18729 中的 @euvre 重叠嵌入共享标头
*修复（沙箱）：将沙箱环境与https://github.com/infiniflow/ragflow/pull/18766中的@marmar9615-cloud所需的Python版本同步
* docs(api)：按照服务器在 https://github.com/infiniflow/ragflow/pull/18764 中通过 @marmar9615-cloud 注册的方式拼写推荐端点
* docs(api)：将文档更新端点记录为https://github.com/infiniflow/ragflow/pull/18765中@marmar9615-cloud的PATCH
* 修复：https://github.com/infiniflow/ragflow/pull/18767 中 @Lynn-Inf 的 MinerU 模型
* 修复：令牌分块器的建议块大小仅限于整数。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18786
* 修复（代理）：通过 @T1mn 在 https://github.com/infiniflow/ragflow/pull/18758 中传播 webhook 终端状态
*修复：允许@buua436在https://github.com/infiniflow/ragflow/pull/18776中使用空的GitHub存储库
* 修复：find_codec 丢弃置信编码检测并返回 @devYRPauli 在 https://github.com/infiniflow/ragflow/pull/15793 中的垃圾编解码器
* 修复：https://github.com/infiniflow/ragflow/pull/18610 中 @huang-aoqin 插入块时继承文档状态
* 修复（天真）：通过https://github.com/infiniflow/ragflow/pull/18762中的@Taranum01将配置错误的MinerU PDF路由到by_mineru而不是by_plaintext（#17114）
* 重构（解析器）：通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/18775 中整合跨文档格式的视觉图形增强
* 修复（解析器）：支持图像 OCR 中的 webp 并通过 https://github.com/infiniflow/ragflow/pull/18785 中的 @jay77721 纠正 VLM 门的符文计数
* 修复：bigquery 连接器通过 @anupamme 在 https://github.com/infiniflow/ragflow/pull/17500 中构建 sql 查询 u... in...
*修复（opensearch）：https://github.com/infiniflow/ragflow/pull/17048中@AnnaSuSu对目标知识库的多文档更新范围
* 修复：接受 @buua436 在 https://github.com/infiniflow/ragflow/pull/18788 中的空 ASR 验证结果
* 修复（web）：限制嵌入对话框用户 ID 输入长度并通过 @euvre 在 https://github.com/infiniflow/ragflow/pull/18773 中添加数据类型提示
* 修复（模型提供者）：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/18792 中持久化 ID 解析实例
*修复（docker）：防止所有前台entrypoint.sh循环在https://github.com/infiniflow/ragflow/pull/18545中@skbs-eng的非零退出时退出
* 壮举（数据源）：通过 @kriptoburak 在 https://github.com/infiniflow/ragflow/pull/18714 中添加 Xquik X 搜索连接器
* 修复（web）：https://github.com/infiniflow/ragflow/pull/18783 中 @Souravrajvi0 跳过画布自动保存空节点/边
* 修复(sdk)：https://github.com/infiniflow/ragflow/pull/18790中@WOLIKIMCHENG按多个ID过滤文档
* 修复(web): 在 https://github.com/infiniflow/ragflow/pull/18806 中使用 @dcc123456 的思维模式字段专用标签
* 修复：聊天网络搜索服务允许为空。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18791
* 修复（安全）：验证沙箱执行器 API 并通过 https://github.com/infiniflow/ragflow/pull/18703 中的 @simpleqt 隔离容器网络
* 重构（解析器）：从 https://github.com/infiniflow/ragflow/pull/17671 中的 @Taranum01 从 pptx/xls/pdf 包装器中提取共享的 parseWithTCADP 核心
* 修复 0 个块数据集未显示，导致 https://github.com/infiniflow/ragflow/pull/18810 中 @wangq8 无法滚动获取更多数据集
* 修复（聊天）：在 https://github.com/infiniflow/ragflow/pull/18692 中的 @Lem0nTea2002 完成工作后保留深度研究取消
* 修复（mineru）：修复 https://github.com/infiniflow/ragflow/pull/18617 中@Aeovy 的 MinerU 渲染稳定性、错误可见性和代码块解析问题
* 修复(web)：https://github.com/infiniflow/ragflow/pull/18808中@dcc123456首先列出座席流程类型卡
* 杂务：从 https://github.com/infiniflow/ragflow/pull/18809 中的 @6ba3i 的类型和测试中删除知识编译器
* 功能：当聊天设置表单中出现错误时，cli点击“保存”按钮会自动滚动到错误位置。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18811
* 重构：将 rerank_candidates_count、knn top_k 和 num_candidates 添加到 https://github.com/infiniflow/ragflow/pull/18768 中的 @wangq8 的 /api/v1/retrieval
* 修复（go）：删除https://github.com/infiniflow/ragflow/pull/18819中@marmar9615-cloud从run_go_tests.sh中删除的内部/缓存包
* 修复（构建）：将管理服务器保留在 https://github.com/infiniflow/ragflow/pull/18816 中 @marmar9615-cloud 的 build.sh 清理陷阱中
* 修复（测试）：让 run_tests.py --help exit 0 by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18814
* Go：修复上下文，第 3 部分，作者：@JinHai-CN，https://github.com/infiniflow/ragflow/pull/18821
* 壮举：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/18800 中从 xlsx 解析器中提取图像
* 修复(pdf): 不要跨页合并锚点不在页面底部的表格，作者：@xugangqiang in https://github.com/infiniflow/ragflow/pull/18789
* 修复（文档）：在https://github.com/infiniflow/ragflow/pull/18804中@xugangqiang解析或安排文档时拒绝配置编辑
* 修复（解析器）：将图像输出格式对齐到 json 并使用 https://github.com/infiniflow/ragflow/pull/18802 中 @jay77721 的每个系列默认值（严格）
* 更好地增强@wangq8在https://github.com/infiniflow/ragflow/pull/18818中的消息
*修复（图）：在AnalyzeNHopPaths中使用最大胜率进行PageRank + https://github.com/infiniflow/ragflow/pull/18784中@Taranum01的正确测试装置（#15695）
* 修复：https://github.com/infiniflow/ragflow/pull/18831 中 @zhouyuchong 的跨语言提示分隔符与解析器对齐
* 文档（配置）：在 https://github.com/infiniflow/ragflow/pull/18825 中通过 @marmar9615-cloud 将 ragflow 服务端口密钥命名为 http_port
* 修复：访问 Go 版本 wiki 页面时出现错误。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18835
* 重构：优化错误消息 - 在 https://github.com/infiniflow/ragflow/pull/18834 中使用 @wangq8 的 %W
* 修复（pdf）：删除未使用的上下文导入，破坏@xugangqiang在https://github.com/infiniflow/ragflow/pull/18837中的手动测试构建
* 修复（schema-sync）：停止将 BaseModel 时间戳报告为 @marmar9615-cloud 在 https://github.com/infiniflow/ragflow/pull/18824 中删除的列
* 修复（chunker）：在所有大写拆分子块上保留 PDF 位置，以便块不会丢失 @euvre 在 https://github.com/infiniflow/ragflow/pull/18772 中的预览图像
*修复（示例）：等待API实际由https://github.com/infiniflow/ragflow/pull/18827中的@marmar9615-cloud返回的DONE状态
* 修复了 https://github.com/infiniflow/ragflow/pull/18826 中@devYRPauli 将空上传视为缺失二进制文件的幼稚解析器
* 精炼entrypoint.sh - 由@wangq8在https://github.com/infiniflow/ragflow/pull/18838中整理代码
* 修复：在MCP列表页面，如果最后一页的唯一记录被删除，视图应该导航到上一页。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18840
* 壮举：在 https://github.com/infiniflow/ragflow/pull/18795 中同步 @mkaaad 的主播恢复
* 修复了 QA Excel 解析器在 https://github.com/infiniflow/ragflow/pull/17902 中删除 @devYRPauli 答案为零值的行
* 由 @wangq8 在 https://github.com/infiniflow/ragflow/pull/18848 中将 None 更新为 Naive（遵循英语）
* 壮举：在 https://github.com/infiniflow/ragflow/pull/18830 中添加 @cuihuan 的 Synthorai 模型提供程序
* 通过 @zcxGGmu 在 https://github.com/infiniflow/ragflow/pull/16997 中修复 OceanBase 块顺序字段持久性
* 修复：当 https://github.com/infiniflow/ragflow/pull/18843 中的 @jay77721 扩展名错误时，回退到真实的 Office 容器格式
* 重构：翻译图“Fig.”中文作者：https://github.com/infiniflow/ragflow/pull/18852 @wangq8
*修复（api）：在https://github.com/infiniflow/ragflow/pull/18842中@RahilOp启用推理的聊天中遵守对话系统提示
* feat(agent): 使 MCP 工具调用超时可通过 https://github.com/infiniflow/ragflow/pull/18016 中的 @var4dev 配置
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/18815 中通过 @T1mn 实现 webhook 跟踪轮询
* 修复（web）：通过https://github.com/infiniflow/ragflow/pull/18847中的@dcc123456将输入的滑块值保留在滑块的步进网格上
*修复（数据集）：通过https://github.com/infiniflow/ragflow/pull/18839中的@6ba3i将朴素解析器ID标准化为通用
* 修复(web): https://github.com/infiniflow/ragflow/pull/18836 中 @dcc123456 将描述长度限制为 512 个字符
* 修复：音频和视频解析器的模型为必填字段。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18851
* 修复：删除 https://github.com/infiniflow/ragflow/pull/18854 中@Lynn-Inf 已弃用的 mimo-v2-flash
* 修复（web）：通过 @euvre 在 https://github.com/infiniflow/ragflow/pull/18812 中向数据集数据源操作按钮添加缺失的悬停工具提示
* feat(go-syncer)：在 https://github.com/infiniflow/ragflow/pull/18850 中添加带有 @mkaaad 简历的 OCI 存储连接器
* 测试（代理）：在 https://github.com/infiniflow/ragflow/pull/18720 中通过 @ayam04 固定模板引用模式的空白处理
* 修复（web）：https://github.com/infiniflow/ragflow/pull/18813 中的 @euvre 保存后，数据集自动元数据切换恢复为关闭
* 修复：当 pipeline-paeser 组件将文件类型从 PDF 切换为图像时，默认解析方式应为 OCR。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18858
* 修复（web）：在https://github.com/infiniflow/ragflow/pull/18749中@euvre以一种模式保存时保留令牌分块器设置
* 修复（nlp）：通过 @yzl0ng 在 https://github.com/infiniflow/ragflow/pull/18467 中将术语权重资源加载为 UTF-8
* 修复：支持.wmf文件扩展名不区分大小写，并通过@Wsp030914在https://github.com/infiniflow/ragflow/pull/15498中删除重复的avi
* 修复（解析器）：连接每次调用的 VLM 模型配置，通过 @jay77721 在 https://github.com/infiniflow/ragflow/pull/18846 中强化视觉调度
* 恢复 https://github.com/infiniflow/ragflow/pull/18856 中 @dcc123456 的“修复（web）：文件列表总数与显示的行不匹配（#17747）”
*修复（摄取）：在https://github.com/infiniflow/ragflow/pull/18828中@euvre在画布调试中运行无缓存的wiki编译器
*修复：拒绝@buua436在https://github.com/infiniflow/ragflow/pull/18857中的wiki LLM错误响应
* 修复：在 https://github.com/infiniflow/ragflow/pull/18860 中通过 @Lynn-Inf 解析聊天中的 pdf
* 修复：在 REST API 中隐藏技能文件夹，作者为 https://github.com/infiniflow/ragflow/pull/18859 中的 @wangq8
* 修复 https://github.com/infiniflow/ragflow/pull/18863 中 @wangq8 的 rerank_candidates_count 验证错误
*修复（元数据过滤器）：将解析的文档ID传播到https://github.com/infiniflow/ragflow/pull/18865中@6ba3i的检索
* 修复 Go Agents 选项卡排序，以匹配 https://github.com/infiniflow/ragflow/pull/18845 中 @6ba3i 的 Python
* feat(go-syncer)：在 https://github.com/infiniflow/ragflow/pull/18861 中添加 @mkaaad 的 S3 和 S3 兼容连接器
* 修复（分块）：按比例切片 PDF 位置，以便子块预览与 https://github.com/infiniflow/ragflow/pull/18864 中 @jay77721 的文本匹配
* 修复：无需验证https://github.com/infiniflow/ragflow/pull/18871中@cike8899非数据集格式的数据
* 修复：https://github.com/infiniflow/ragflow/pull/18875 中 @Lynn-Inf 创建和显示内置模型时 rm 默认模型
* 文档：在 https://github.com/infiniflow/ragflow/pull/18870 中添加 @Yannnnnnnny 的聊天文档
*修复（网络）：通过https://github.com/infiniflow/ragflow/pull/18866中的@dcc123456从提供者目录中获取提供者base_url可见性
* 修复：在 https://github.com/infiniflow/ragflow/pull/18855 中处理 @buua436 的 Jina VLM 流响应
*修复：地图代理回合以对https://github.com/infiniflow/ragflow/pull/18868中@buua436的步骤做出反应
* 修复https://github.com/infiniflow/ragflow/pull/18872中@hnwyllmm在OceanBase和SeekDB中过大的重要关键字
* 修复（rag/utils）：ensure_v1必须识别https://github.com/infiniflow/ragflow/pull/16916中@chuenchen309的v1beta/v1alpha风格版本后缀
*修复：在https://github.com/infiniflow/ragflow/pull/18880中由@buua436荣誉生成参数启用标志
* 修复：在https://github.com/infiniflow/ragflow/pull/18874中支持@kic635提取SeekDB向量分数
* 重构：在https://github.com/infiniflow/ragflow/pull/18876中添加@wangq8的page_size支持
* 修复：在https://github.com/infiniflow/ragflow/pull/18882中@cike8899添加Separator组件并恢复NaiveConfiguration中的GlobalIndexModelItem
*修复（api）：从数据集所有者导出SQL检索租户，而不是https://github.com/infiniflow/ragflow/pull/18518中@ChendongPang的聊天租户
* 修复（web）：通过 https://github.com/infiniflow/ragflow/pull/18922 中的 @dcc123456 阻止字段标签打开 MultiSelect 弹出框
* 修复：https://github.com/infiniflow/ragflow/pull/18924 中的 @cike8899 对 NaiveConfiguration 中的组件重新排序以获得更好的结构
* 修复：切换解析器算子的文件类型导致对应的解析方法无法切换。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/18931
* 修复：尊重 https://github.com/infiniflow/ragflow/pull/16922 中 @iwasaki1112 发送的 Enter 键上的 IME 组合状态
*修复（构建）：将GOPROXY传递给ragflow-cli去由@marmar9615-cloud在https://github.com/infiniflow/ragflow/pull/18925中构建
* feat(go-connector)：通过 @mkaaad 在 https://github.com/infiniflow/ragflow/pull/18934 中添加 Box 连接器
* 修复(web): 在https://github.com/infiniflow/ragflow/pull/18945中通过@dcc123456阻止字段标签切换开关
* 修复（数据集）：通过https://github.com/infiniflow/ragflow/pull/18932中的@marmar9615-cloud重建数据集所有者索引中的导航树
* 文档：更新 https://github.com/infiniflow/ragflow/pull/18849 中 @asiroliu 的自述文件和文档中对 v0.27.1 的版本引用
* 文档：0.27.1 release note 由 @wangq8 在 https://github.com/infiniflow/ragflow/pull/18879 中

## 新贡献者
* @olifarhaan 在 https://github.com/infiniflow/ragflow/pull/18027 中做出了第一个贡献
* @yzl0ng 在 https://github.com/infiniflow/ragflow/pull/18461 中做出了第一个贡献
* @googio 在 https://github.com/infiniflow/ragflow/pull/18475 中做出了第一个贡献
* @Hellrak 在 https://github.com/infiniflow/ragflow/pull/17453 中做出了第一个贡献
* @Dhruv-kys 在 https://github.com/infiniflow/ragflow/pull/18012 中做出了第一个贡献
* @krishna231122-del 在 https://github.com/infiniflow/ragflow/pull/18534 中做出了第一个贡献
* @Ro0tk1t 在 https://github.com/infiniflow/ragflow/pull/17205 中做出了第一个贡献
* @DeviousDrops 在 https://github.com/infiniflow/ragflow/pull/18135 中做出了第一个贡献
* @brainsparker 在 https://github.com/infiniflow/ragflow/pull/18478 中做出了第一个贡献
* @primorLee 在 https://github.com/infiniflow/ragflow/pull/18547 中做出了第一个贡献
* @krim404 在 https://github.com/infiniflow/ragflow/pull/18530 中做出了第一个贡献
* @T1mn 在 https://github.com/infiniflow/ragflow/pull/18316 中做出了第一个贡献
* @rsnetworkinginc 在 https://github.com/infiniflow/ragflow/pull/17325 中做出了第一个贡献
* @kah-ja 在 https://github.com/infiniflow/ragflow/pull/17590 中做出了第一个贡献
* @marmar9615-cloud 在 https://github.com/infiniflow/ragflow/pull/18594 中做出了第一个贡献
* @NgoQuocViet2001 在 https://github.com/infiniflow/ragflow/pull/18292 中做出了第一个贡献
* @simpleqt 在 https://github.com/infiniflow/ragflow/pull/18657 中做出了第一个贡献
* @darkdi 在 https://github.com/infiniflow/ragflow/pull/18652 中做出了第一个贡献
* @barandras 在 https://github.com/infiniflow/ragflow/pull/18662 中做出了第一个贡献
* @changshenhan 在 https://github.com/infiniflow/ragflow/pull/18646 中做出了第一个贡献
* @ayam04 在 https://github.com/infiniflow/ragflow/pull/18649 中做出了第一个贡献
* @bharadwaj-pendyala 在 https://github.com/infiniflow/ragflow/pull/18663 中做出了第一个贡献
* @libao Jiang 在 https://github.com/infiniflow/ragflow/pull/18695 中做出了第一个贡献
* @yijiaquan 在 https://github.com/infiniflow/ragflow/pull/18576 中做出了第一个贡献
* @javen-yan 在 https://github.com/infiniflow/ragflow/pull/18599 中做出了第一个贡献
* @BetterAndBetterII 在 https://github.com/infiniflow/ragflow/pull/18753 中做出了第一个贡献
* @erhanaydin 在 https://github.com/infiniflow/ragflow/pull/18715 中做出了第一个贡献
* @Souravrajvi0 在 https://github.com/infiniflow/ragflow/pull/17668 中做出了第一个贡献
* @kriptoburak 在 https://github.com/infiniflow/ragflow/pull/18714 中做出了第一个贡献
* @zhouyuchong 在 https://github.com/infiniflow/ragflow/pull/18831 中做出了第一个贡献
* @cuihuan 在 https://github.com/infiniflow/ragflow/pull/18830 中做出了第一个贡献
* @Wsp030914 在 https://github.com/infiniflow/ragflow/pull/15498 中做出了第一个贡献
* @kic635 在 https://github.com/infiniflow/ragflow/pull/18874 中做出了第一个贡献
* @ChendongPang 在 https://github.com/infiniflow/ragflow/pull/18518 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.27.0...v0.27.1

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.27.1` · 📅 发布：2026-08-28 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.27.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
