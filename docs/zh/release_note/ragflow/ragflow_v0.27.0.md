---
title: "ragflow v0.27.0"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.27.0"
version: "v0.27.0"
published: "2026-08-19"
type: "minor"
lang: "zh"
---

# ragflow v0.27.0

## 新功能
- 全新的文档级和数据集级知识编译，支持Wiki、Graph、Tree、Page Index、Mind Map、Timeline、To Skills（#16777、#17546、#16797、#16749、#16899、#17996）
   - 之前的 GraphRAG 和 RAPTOR 功能已被弃用，并且在 UI 中不再可用。它们的替代品“图”和“树”现在已集成到知识编译中。之前生成的 GraphRAG 和 RAPTOR 内容仍然可搜索。
- 全新的 Agentic RAG，在回答时具有四种思维模式 - 低、中、高和超（#18303、#18138、#17342、#17444）

## 改进
- 全面改进的模型提供程序系统，以更轻松地配置和管理模型（#16604）

## 模型支持
- Qwen 3.8 系列 (#18368)
- 基米 K3 (#17106)
- AIMLAPI (#17311)
- GreenPT 模型 (#17447)
- AWS Bedrock Reranker (#16960)
- OpenRouter 嵌入 (#17213)
- FunASR/SenseVoice STT (#16473)
- Fun-ASR-Flash 支持统一前文 (#16844)
- Mistral OCR 文档解析器 (#17057)

## 基础设施
- 新的 GaussDB 数据库适配器 (#17703)
- SereneDB 文档存储引擎支持 (#17375)
- Tenki 沙箱提供商支持 (#17305)
- 将 Infinity 集成升级至 0.7.3 (#18137)

## 工具
- 新的 Querit 网络搜索工具 (#17813)

## 用户界面/用户体验
- Markdown 排版改进 (#16752)
- 搜索/聊天过滤器 (#16707)

## 错误修复
- 修复了解析大文件时服务器挂起的问题 (#17936)
- 修复了整个服务中文档上传挂起的问题 (#17537)
- 修复了忽略传递模型的多模型聊天（#18439）
- 修复了聊天页面上无法保存重新排名模型开关的问题 (#18357)
- 修复了带有中文文件名的 PDF 预览失败的问题 (#18422)
- 修复了 CID 字体 PDF 预览 (#18249)
- 修复了破坏搜索的无效查询字符串 (#18217)
- 修复了阻止其他 API 请求的数据集/文档删除 (#17800)
- 修复了存储为转义字符串而不是真正的换行符的默认分隔符 (#17591)
- 修复了影响原始网站的共享页面语言（#18043）
- 修复了会话切换上的过时消息（#18140）
- 修复了新会话会继承之前的会话消息的问题 (#18078)
- 修复了切换对话时 SSE 流中断的问题 (#18037)
- 修复了 DOCX 预览中重叠的中文文本行 (#17693)
- 修复了 SSO 用户的管理员密码更新崩溃问题 (#16914)
- 修复了 QA DOCX 表解析器删除单元格的问题 (#17497)
- 修复了以引号开头的字段的问答 CSV 解析 (#16881)
- 修复了标签 CSV 解析器忽略 TAB 分隔符的问题 (#17496)
- 修复了任务时间显示不正确的问题 (#18453)
- 修复了 PDF 解析取消时的重复日志 (#18435)

## 发生了什么变化
* 壮举：@Lynn-Inf 在 #16604 中提供 v0.27.0 模型
* 修复(service): 允许在 #16668 中的@euvre 内存为空时更新内存类型
* 执行：清理release.yml，作者：@JinHai-CN，#16725
* Dev: 需要通过@wangq8在#16730设置稳定版本
* build(deps)：将 golang.org/x/crypto 从 0.51.0 提升到 0.52.0，由 @dependabot[bot] 在 #16736 中实现
* 功能：在 #16707 中通过 @dcc123456 在聊天和搜索页面中添加过滤器
* 修复：@dcc123456 在 #16738 中显示内存错误消息的问题
* 修复#16743中@yingfeng的技能搜索问题
* Go：通过@JinHai-CN 在 #16741 添加更多命令和 GCS 支持
* 修复（go）：适应@Lynn-Inf 在 #16745 中的新数据库列
* 已修复（go-agent）：由 @Hz-186 在 #16713 中代理发布
* 修复内置元数据不起作用的问题 (#788) by @wangq8 in #16748
* 功能：任务执行器迁移至 #16549 中的 @xugangqiang
* 修复：更新nginx版本。由 @V1V1rus 在 #16732 中修复 CVE-2026-9256
* 将代理 PR 移植到 GO - 5 by @qinling0210 in #16667
* 壮举：在 #16749 中添加 @KevinHuSh 的 wiki 文件夹
* 修复（web）：隐藏代理 JSON 导入上传器中的文件夹选项卡（由 @euvre 在 #16754 中）
* 修复：在 #16750 中 @euvre 仅更改权限时防止自动递增内存名称后缀
* 修复(web): 在 #16751 中由 @euvre 显示共享存储卡中的内存所有者名称
* 修复：修复首页空状态样式。通过 @dcc123456 在 #16755
* 壮举：将散文排版样式应用于 #16752 中 @dcc123456 的 Markdown 预览
* 修复（web）：防止“上次保存于”标签在代理主卡中垂直堆叠（@euvre 在 #16756 中）
* 修复：Rapid clicking 导致发送多个消息请求。通过 @cike8899 在 #16739
* 修复：#16733 中@Lynn-Inf 提供的名称
* 在#16742中@qinling0210处理不嵌入模型的搜索数据集
* 修复@yingfeng 在 #16767 中对 Windows 的幼稚分块
* 修复@yingfeng 在 #16770 中的文档
* refa：通过@buua436在#16744中一致地解析租户模型参考
* 修复：#16771 中 @Lynn-Inf 在 user.go 中 rm role_id
* 修复：#16765 中 @Lynn-Inf 的 get_by_id
* 修复：解决 #16773 中 @dcc123456 的共享嵌入/LLM 模型选择错误
* 壮举：@Lynn-Inf 在 #16774 中的可选 url v1
* 壮举：在 #16769 中添加 @xugangqiang 的嵌入支持
* 修复（ao-agent）：添加Tavily input_form，连接真实搜索组件，并将TavilyExtract移植到Go by @Hz-186 in #16693
* 修复: #16778 中@xugangqiang删除tasklet
* 修复：删除#16786中@Lynn-Inf未使用的tenant_llm测试用例
* 功能：添加数据编译层。由 @cike8899 在 #16777
* 修复（go-agent）：通过@Hz-186在#16768中添加Google搜索包装组件和工具注册表
* 修复：当文本溢出列表页面的卡片时，悬停时显示全文。通过 @dcc123456 在 #16787
*修复：更新LayoutRecognizeFormField以接受ownerTenantId并重构#16781中@dcc123456在LLM请求中的模型处理
* 修复（go-agent）：将 Go DuckDuckGo 组件与 #16775 中的 @Hz-186 的画布输入表单对齐
* 修复：通过 #16782 中的 @buua436 对齐模型默认处理
* feat(agent)：Go 摄取管道进度镜像和 DeepDOC 解析器强化，由 @yuzhichang 在 #16795 中完成
* 由 @Harsh23Kashyap 在 #16402 中修复 OpenAI 代理流块形状
* Go: 合并@JinHai-CN #16783 中的重复代码
* Go: 在管理服务器中设置 gin 模式 by @JinHai-CN in #16801
*构建（deps）：将汤筛从2.8.1撞到2.8.4，由@dependabot[bot]在＃16798中
* build(deps)：由 @dependabot[bot] 在 #16799 中将 Misune 从 3.2.0 提升到 3.3.0
* 修复：将 OwnerTenantId 传递给 LLMLabel 和相关组件，以通过 #16800 中的 @dcc123456 改进模型获取
* GO：改进模型信息解析，并将 model_id/tenant 上下文添加到 #16804 中@buua436 的列表响应中
* feat(go-agent)：将 Google Scholar 节点参数与 @Hz-186 在 #16802 中的运行时输入合并
* GO:Cli 修复了 @myf-bee 在 #16805 中显示用户存储显示截断的问题
* Go：更新#16803中@JinHai-CN的回复消息
* 功能：用户在 #16788 中选择 @xugangqiang 的管道支持
* 壮举：@cike8899 在 #16797 中使用 reui 重写 wiki 模板
* 重构：在 #16809 中删除 @yuzhichang 的死画布运行时选择器和标记器嵌入接线
* 修复（go-agent）：`unknown component "Wikipedia"` 画布错误。通过 @Hz-186 在 #16784
* Go: 修复@JinHai-CN #16807 中的错误代码
* 修复（docker）：[紧急] 所有 PR 的 Docker 构建均失败 - @ondery 在 #16821 中的 npm 安装期间缺少 web/scripts/prepare.js
* 在 #16824 中由 @myf-bee 修复 ci
* Go: 在#16818中添加@JinHai-CN的展示用户计划配额
* Go：格式代码由@JinHai-CN #16813
* 修复（提示编辑器）：防止 @dcc123456 在 #16811 中输入时过早地合并变量路径
* 修复@yingfeng 在 #16819 中的编译工作流程
* 修复：通过@buua436在#16815中改进管道编译、模板更新和文档重置
* 壮举：使 blob 存储大小阈值可通过 #16806 中的 @taek105 进行配置
* 重构：通过 @xugangqiang 在 #16814 中细化摄取任务状态转换
* 修复（代理）：等待响应在每次循环迭代时暂停（@ondery 在 #16794 中）
* PY: 修复@JinHai-CN #16827 中的管理错误
* [修复] 重命名 StandardizeImag -> StandardizeImage 以修复 #16785 中 @Taranum01 的 deepdoc OCR 预处理 (#7316)
* 修复（代理）：清除画布上的组件输入，由 @Harsh23Kashyap 在 #16790 中重新运行
*修复（go-agent）：在＃16817中添加@Hz-186的PubMed组件支持
* Go：修复@JinHai-CN #16828中的nats和go命令
* Go：通过@JinHai-CN 在#16830 添加虚拟管理功能
* 构建（deps）：由 @dependabot[bot] 在 #16839 中将 github.com/xuri/excelize/v2 从 2.10.1 提升到 2.11.0
*修复（go-agent）：ArXiv组件注册并通过@Hz-186请求奇偶校验#16808
* 重构：重构dataflow_service.go并保护@xugangqiang在#16826中重新传递nats消息
* 修复：将 Go 提供程序 APIs 的一部分与 Python APIs 对齐（由 @Lynn-Inf 在 #16823 中实现）
* uv 工具安装 lefthook by @yuzhichang in #16842
* 通过 @qinling0210 在 #16822 中实现内置 chunk 方法作为 GO 中的摄取管道
* 功能：添加了对会话图和会话本质模板的支持。通过 @cike8899 在 #16851
* 修复(setting-model): 修复 #16853 中 @dcc123456 自动保存后实例显示和 api_key 丢失的问题
* 前往：@JinHai-CN 在 #16850 中提供更多 API
* 修复了在线搜索时无法打开引用网页的问题。通过 @dcc123456 在 #16840
* 修复(go-agent): 在 #16849 中通过 @Hz-186 对齐 GitHub 和 Invoke Canvas 组件
* 修复（代理）：将 QWeather 移植到 ToolBase，以便它可以作为 @boskodev790 在 #16692 中的代理工具
* 重构：@xugangqiang 在 #16852 中的消息处理
* 修复：通过 @6ba3i 在 #16796 中测试 go 特定代理方案的漂移
* 修复：通过@euvre 在 #16501 中更正模型类型映射并提高系统设置持久性
* 修复(go-agent): 将 Go WenCai 和 SearXNG 代理组件与 #16854 中的 @Hz-186 的 python 对齐
* 修复：支持组件 brwoser by @Haruko386 in #16848
* 修复：通过 #16860 中的 @buua436 确保数据库模型索引
* Go：由@JinHai-CN 在#16863 重构并添加版本类型
* 功能：如果两次输出之间的间隔超过600ms，则最后显示加载状态。通过 @cike8899 在 #16861
* Go 和 Python：修复 @JinHai-CN #16864 中搜索完成的 IDOR 问题
* 修复（agent）：允许在 #16792 中的@Taranum01 在variable_ref_patt component_id 中使用下划线（#16758）
* 修复：当 @devYRPoli 在 #16825 中的 output_format 为“chunks”时，TokenChunker 会丢弃 TitleChunker 块
* Go 端口的工作流程和分块器由 @yuzhichang 在 #16878 中修复
* 功能：根据数据调整图表的颜色和大小。通过 @cike8899 在 #16868
*构建（deps）：将json修复从0.35.0到0.60.1，由@dependabot[bot]在＃16887中
* 由@JinHai-CN 在#16875 更新测试框架
* 修复：支持 #16858 中 @Haruko386 的文档生成器组件
* 功能：调整时间线样式。通过 @cike8899 在 #16894
* 功能：在讨论页消息框中添加三级下拉菜单。通过 @cike8899 在 #16886
* 修复：支持 #16884 中 @Haruko386 的 eagerable 组件
* 修复：无法通过 #16888 中的 @Haruko386 为 py 后端发送电子邮件
* 修复（go-agent）：将 ExeSQL 组件输入与 #16896 中的 @Hz-186 的 Python 对齐
* 更新@Letssharearow 在 #15345 中的知识库配置说明
* 功能：使用G6显示思维导图数据。通过 @cike8899 在 #16899
* 修复(tree-select): 当值为空时避免错误的节点选择由@dcc123456 in #16898
* @JinHai-CN 在 #16893 更新 docker 文件
* 修复：#16866 中@euvre 搜索思维导图不显示
* 修复：通过 @euvre 在 #16889 中解决 Go 模式下提供商名称大小写不匹配和 301 重定向问题
* 修复：通过@paulhuiseismic 在 #16882 中细化 git 忽略文件以排除依赖项
* Go：@JinHai-CN 在#16906 中重构
*修复（代理）：保留#16897中@taek105的零温度设置
* 修复 Agent bot 2 权限错误 (#818) by @wangq8 in #16909
* 修复(setting-model): #16904 中 @dcc123456 保存名称后新保存的实例卡保持展开状态
* 修复文件链接到数据集以支持替换和添加 (#817) by @wangq8 in #16908
* 修复：将 go 提供商 apis 与 python apis 对齐（由 @Lynn-Inf 在 #16867 中实现）
* Go：修复@JinHai-CN #16911 中的错误
* Go：通过@JinHai-CN 在 #16915 添加更多框架
* 修复：修复@rayhanest 在 #16907 中的 urllib3 CVE
* 修复：SSO 用户的管理员密码更新崩溃（500 个“NoneType”对象没有属性“split”），作者：@vincentlambert，#16914
* 修复(go-agent): 在#16902中添加@Hz-186的VariableAssigner输入表单
* 修复：在 #16900 中添加 @Haruko386 的 string_transform GetInputForm
* 修复：支持 go 后端的 code_execute by @Haruko386 in #16903
* 修复：支持 #16895 中 @Haruko386 向 go 后端发送电子邮件
* 修复：#16910 中 @Haruko386 无法在代理中使用代理
* 重构：删除 #16927 中 @Haruko386 未使用的 getInputElementsFromText 函数
* feat(dataflow-result): 滚动到并突出显示 #16937 中 @dcc123456 新创建的块
* 修复 ci ：仅通过 @myf-bee 在 #16939 中运行 web ci
* 壮举：@xugangqiang 在 #16873 中重构 nats 消息处理并支持内置 DSL
* 重构：通过@euvre 在 #16934 中删除系统模型设置的 localStorage 持久性
* 修复：#16942 中@Lynn-Inf 按 create_time desc 对内存进行排序
* Feat：修改知识编译模板的中文翻译文件。通过 @cike8899 在 #16941
* Json: 在#16926中添加@Haruko386的一些阿里云模型
* 修复：@Lynn-Inf 在 #16940 中的 code-rabbit 评论评论
* refa: 优化知识编译并发性 by @buua436 in #16933
* 修复代理机器人无法上传文件的问题 (#828) by @wangq8 in #16946
* 通过@euvre 在 #16936 中删除未使用的 /datasets/<id>/embedding 端点
* 恢复 PR #16873 中的前端更改，并在 #16948 中添加 @xugangqiang 的 Go/Python 运行时检测
* 修复重命名文件仅更新第一个链接数据集 (#831) by @wangq8 in #16947
* 修复取消摄取任务，它将仍在运行并显示内部服务器错误 (#836) by @wangq8 in #16945
* feat(stt): 在 #16473 中添加 @LauraGPT 的 FunASR / SenseVoice 提供程序
* 修复(agent): 在 #16930 中通过 @LauraGPT 返回 DataOperations 输入表单
* @hauberj 在 #16950 中更新了 RAGcon 模型提供程序 (go)
* 重构（go-agent）：通过#16912中的@Hz-186统一工具支持的画布组件
* 修复[go]: 支持在 #16944 中 @Haruko386 在代理聊天中检索 kb
* Go：将数据库模式与python对齐，由@JinHai-CN在#16935中
* 壮举：@KevinHuSh 在 #16859 中的代理搜索框架
* 修复@yingfeng 在 #16955 中缓慢的 CI 情况
* 修复（docling）：通过形状检测分块响应，而不是通过 #16921 中的 @Harsh23Kashyap 请求负载
* 测试：为元数据过滤器分页添加回归覆盖，超出下推上限，由 @RahilOp 在 #16932 中添加
* feat(stt): 支持统一前文提供程序中的 Fun-ASR-Flash by @77zane in #16844
* 修复：#16847 中@77zane 解析时避免重复视频描述
* 在 #16963 中修复 @wangq8 的代理上传文件权限
* 修复：通过 #16951 中的 @Lynn-Inf 验证模型
*修复：避免在#16962中@buua436重置非解析器更新的文档
* 壮举：@xugangqiang 在 #16953 中的摄取清理
* feat(llm)：在 #16960 中添加 @vincentlambert 的 AWS Bedrock reranker 连接器
* 通过@JinHai-CN 在 #16965 修复数据库数据类型
* 修复（mineru）：将 page_from/page_to 线程传入 #16957 中 @Harsh23Kashyap 的 MinerU API 请求
* 修复：通过 #16972 中的 @buua436 对齐 CAJAL 模板节点类型
* 修复：lefthook 依赖 @dcc123456 在 #16969 中进行序列化
* 修复：删除 MySQL document.meta_fields 映射以匹配 #16929 中 @euvre 的 Python 模式
* 修复: 支持#16966中@Haruko386对agent中的组件进行分类
* 修复 Pipeline.Run 调用者并在 #16973 中由 @yuzhichang 重命名 SetupOverrides
* 修复（嵌入）：不要将 /v1 附加到 #16974 中 @iwasaki1112 的 Ollama 原生嵌入 base_url
* 修复 #16976 中 @wangq8 未定义的 doc.MetaFields
* 修复（元数据）：在 #16949 中@chuenchen309 发现稀疏表块后的 ES 字段
* 修复（元数据）：meta_filter 丢失不区分大小写的匹配，并在 #16956 中@chuenchen309 的字典条目中泄漏状态
* 修复 ci：运行 ci 端口冲突，通过 @myf-bee 在 #16979 中拉取网络超时
* 壮举：@xugangqiang 在 #16952 中为 Go/Python 运行时检测添加 /api/v1/language 端点
* 恢复@yingfeng 在 #16981 中的“修复：删除 MySQL document.meta_fields 映射以匹配 Python 模式”
* Go: 在 #16964 中修复@JinHai-CN 的数据库对齐问题
* 修复数据集的链接文件，检查 #16975 中 @wangq8 的重复名称 (#846)
* 修复(go-agent): 在#16987中通过@Hz-186添加ListOperationsComponent和VariableAggregatorComponent的输入形式
* 修复：@euvre 在#16989 中的流式聊天（Go 模式）中未显示自定义的empty_response
* 修复：CI 标签取消 @myf-bee 在 #17001 中运行的工作流程
* 前往：@JinHai-CN 在 #16996 介绍 clickhouse
* Go：在#17000中添加@Haruko386的moonshot、baidu和minimax工具
* 修复：支持#16980中@Haruko386的消息内容
* 修复：将 somark.tech 更新为 somark.cn/somark.ai，其中包含 #16892 中 @maybehokori 的购买 URL
* 修复：通过@Lynn-Inf 在 #16982 中为某些 ocr 提供程序添加默认模型
* 修复：在 #16999 中按 @Lynn-Inf 的 create_time desc 对实例进行排序
* Go：跟踪框架，作者：@JinHai-CN #17004
* 修复：#16998 中按 @buua436 分组的范围编译模板名称
* 壮举：@KevinHuSh 在 #17002 中在代理搜索中导航编译结果
* 修复：删除悬空的 MetaFields 引用并跳过 @euvre 在 #16983 中受影响的 Go 后端测试
* 功能：使用 ArtifactForceGraph 可视化会话图数据。通过 @cike8899 在 #16977
* Python: 删除#17008中@JinHai-CN未使用的索引
* 在 #17023 中修复 @yuzhichang 的左勾拳
* 功能：当链接被 clicked 时，使 wiki 的 Markdown 编辑器能够导航到新的 Markdown 文件。作者：@cike8899 在 #17019
* 修复：ASR/VLM/TTS 模型在默认模型设置中无法由@euvre 在 #17024 中选择
* 修复：让await响应等待#16995中@buua436的用户输入
* Go: 通过@JinHai-CN 在 #17027 中更新服务器配置
* 修复CV模型siliconflow和zhipu无法描述视频的问题，从视频中捕获3张图片并发送给llm (#852) by @wangq8 in #17007
* 修复（模型提供者）：将每张卡的自动保存替换为 #17025 中 @dcc123456 的批量保存
* 修复：在 #17011 中渲染 @buua436 的可读 wiki 工件链接
* 通过数据集配置（后端）支持管道 DSL 修改（@qinling0210 in #16991）
* 文档：修复 @wangq8 在 #17033 中的文档
* 修复：通过@Lynn-Inf 在 #17029 将内置模型设置为默认模型
* 修复（go-agent）：在 #17010 中通过 @Hz-186 保持画布系统状态
* 修复（go-agent）：通过#17034中的@Hz-186从模型流中过滤SSE完成哨兵
* 壮举：支持#17022中@Haruko386的yahoo_finance搜索
* 修复：@Lynn-Inf 在 #17043 中调用 Siliconflow tts 模型中的sample_rate
* 修复：@Haruko386 在 #17028 中的循环组件使用问题
* 修复表解析：#17039 中@wangq8 合并列
* 壮举：@euvre 在 #17036 中为 Go API 服务器添加聊天级 TTS 和 ASR 端点
* 修复（网络）：在 #17040 中由 @euvre 在可用模型面板中添加缺少的提供商主页链接
* CI：在#17047中通过@myf-bee将测试用例修改为p3
* 安全修复：#17046 中@wangq8 的 CVE-2025-21521
* Go：在#17049中添加@JinHai-CN的LLM用法
*修复（deepdoc）：恢复非拉丁脚本的单词边界；跳过 OCR 后备识别器无法提供 @deadtrickster 在 #16958
* 修复居中 PDF 标题阅读顺序，由 @zcxGGmu 在 #17009 中修复
* 功能：在 #17003 中添加@xugangqiang 内置的 DSL 文件 API
* 修复：通过 #17016 中的 @zcxGGmu 对齐 pdf 表结构坐标
* 修复：当字段打开并引用 #16881 中@devYRPauli 的引用时，Q&A CSV 解析器会拼接错误的文本
* Go: 在#17054中添加@Haruko386为小米提供商提供的工具
* 修复(go-agent): 通过#17044中的@Hz-186正确处理等待响应提示
* 修复：忘记在 #17032 中 @Haruko386 在管道最终中获取引用/提示
*修复（元数据）：无限下推必须拒绝多值不安全的负操作（≠，不在）由@chuenchen309在＃16943
* 修复：通过@zcxGGmu 在#17017 中保留mineru 跨页表位置
*修复（api）：在#16913中尊重@Harsh23Kashyap在列表数据集端点中的include_parsing_status
* Go：在#17061中添加@JinHai-CN的统计数据
* Go：@JinHai-CN 在#17072 中重构
* 修复：@skbs-eng 在 #16737 中对 web parseModelValue / parseModelUuid 进行右锚定分割
* 修复：#17035 中的 @buua436 更新编译模板时保留块
* 重构：@xugangqiang 在 #17071 中的数据集/文档/文件服务
* 修复：#17037 中 @Lynn-Inf 的 OpenDataLoader 解析器
* 壮举：将 dataset_navigate 添加到代理搜索中，由 @KevinHuSh 在#17052 中添加
* i18n：@iwasaki1112 在 #17042 中对 ja.ts 的完整日语翻译
* 修复：使用#17076中@Haruko386的工具时无法得到SEE响应
* 重构[go]：将#17038中@Haruko386的DSModel替换为ModelListItem
* 修复：#17080 中@Lynn-Inf 检查模型可访问性时显示超时错误
* 删除多余的 PatchDSL 并将组件参数注入合并到 override_params 中，由 @xugangqiang 在 #17079 中完成
* 删除 selectUploadParser：文档现在由 @xugangqiang 在 #17083 中直接从 KB 继承 parser_id
*修复[go]：停止将[DONE]哨兵泄漏到@euvre的流式聊天答案中#17084
* 修复：@myf-bee 在 #17086 中的 ci build apt install 列表错误
*修复：模型提供者保存按钮标签和灯光模式输入背景由@dcc123456在#17081中
* Go：@JinHai-CN 在 #17089 中重构系统统计信息
* 修复(web): 在 #17082 中通过 @euvre 统一实例名称部分中所需的星号颜色
* Go CLI：在#17090中添加@JinHai-CN的管理统计命令
* 修复：重新生成聊天消息不会截断 #17087 中 @euvre 的历史记录
* 由 @qinling0210 在 #17075 中将 Infinity 提升为 v0.7.2
* Go：@JinHai-CN 在 #17093 中为 EE 重构 API 路线
* Go: 修复@JinHai-CN #17094 中缺失的路线
*修复[go]：跳过#17095中@euvre对共享聊天机器人会话握手的LLM调用
* 修复：#17098 中的 @euvre 防止共享页面覆盖用户的主题首选项
* 修复：#17097 中@Haruko386 无法使用多模型聊天
* 修复(go-agent): 支持 #17099 中 @Hz-186 调用阿里云工具
* Feat：在数据集配置页面配置相关管道参数。作者：@cike8899 在 #17100
* 修复：@euvre 在 #17085 中在暗模式下的文件移动对话框中选择的目标显示为白色
* 修复（web）：capitalize URL 并在基本 URL 区域设置字符串中删除感叹号，由 @euvre 在 #17110 中实现
* 修复 #17109 中 @myf-bee 分配的 ci 端口
* 修复（web）：capitalize URL 并在基本 URL 语言环境字符串中删除感叹号，由 @euvre 在 #17113 中实现
* 修复@JinHai-CN #17107 中缺失的信息
* 修复（代理/工具）：#17064 中 @Yurii214 的表面 github 搜索错误响应
* 功能：使用树视图呈现技能列表。通过 @cike8899 在 #17115
* 修复：在 #17106 中添加 @Lynn-Inf 的新默认登月模型
* 修复：模型选择格式兼容和提供商 api_key 由 @dcc123456 在 #17112 中包装
* 修复(web): 在 #17118 中@euvre 返回代理列表时避免闪烁空状态
* Go：在 #17091 中添加 @Haruko386 的 gitee、volcengine 和 zhipuAI 工具
* 修复：可以通过#17104中的@Haruko386编辑团队的记忆
* 修复(web): 在 #17119 中 @euvre 使原始内存类型在多选中不可删除
* 修复：在#17121中软化@euvre对部分相关知识的ask_summary拒绝
* style(web)：通过 @euvre 在 #17120 中将模型提供程序参数标签统一为大写跨语言环境
* 修复：在 #17122 中添加@euvre 缺失的模型提供程序图标
* Feat(ingestion)：将图像与 MinIO 上传对齐，统一 chunk-id 计算并添加 @xugangqiang 在 #17111 中的 PPT 解析支持
* 在 #16905 中添加 @euvre 的 API 合约奇偶校验的 Go 服务/处理程序测试
* Go: 在#17129中添加@JinHai-CN的审计日志框架
* 修复(go): 在 #17127 中通过 @Lynn-Inf 获取 VolcEngine 模型列表
* 修复 SharePoint 连接器在 #17058 中由 @wangq8 添加后无法运行的问题
* 修复：与切换数据集管道配置相关的表单未渲染。通过 @cike8899 在 #17124
* 修复(web): 在多模型聊天中重新生成使用卡自己的状态和模型 by @euvre in #17126
* 修复：共享聊天机器人完成忽略知识库和 @euvre 在 #17092 中的空响应
* 修复（代理/工具）：@Yurii214 在 #17062 中的 google 搜索中显示 serpapi 错误响应
* 修复（go-agent）：在 #17137 中@Hz-186 在代理提示中包含对话历史记录
* 修复：通过@euvre 在 #17138 中将语言环境文件中的“BASE URL”统一为“Base URL”
* 功能：在聊天消息框中添加“无”推理强度选项。通过 @cike8899 在 #17006
* Go：@JinHai-CN 在 #17139 重构 API 路线
* 重构：通过 @dcc123456 在 #17143 中的 HomeIcon 包装器统一导航栏图标
* 修复：保留 #17151 中 @buua436 的编译模板种类和名称
* 修复：docx/电子邮件解析、提取器 LLM 驱动程序和 @xugangqiang 在 #17144 中的分块对齐
* 修复了 Go 模式下流式传输时显示的陈旧引用以及 @euvre 在 #17146 中的空最终回复
* Go：禁用搜索询问摘要的思考，以修复 @euvre 在 #17155 中截断的 AI 摘要
* 修复（web）：防止搜索弹出框在复选框切换时左上角闪烁（@euvre 在 #17148 中）
* @wangq8 在 #17158 中从 api_base 更新为 base_url
* 修复（web）：在所有语言环境中的 UI 标签中使用标题大小写“API Key”，由 @euvre 在 #17164 中编写
* 修复（网络）：隐藏 Gmail 和 Google Drive OAuth JSON 上传的文件夹上传选项卡（#17162）
* 重构：#17101中@Haruko386封装了工具相关的代码
* Go cli：修复列表用户失败：无效的 JSON （JSON 的意外结束）由 @myf-bee 在 #17153 中
* 修复：在 #17154 中通过 @Haruko386 将 chunk_method 字段添加到文档处理程序
* 修复：通过 @Haruko386 在 #17152 中重构 ListConnectors 以验证用户 ID 并简化逻辑
* 壮举：突出显示 wiki 力图。通过 @cike8899 在 #17160
* 通过@qinling0210 在 #17102 中将 PR14140 和 PR16881 移植到 GO
* 在#17128中@qinling0210在GO中的Extractor组件中实现Tagger
* Go：重构以避免冲突，作者：@JinHai-CN #17191
* 修复(go)：通过@Lynn-Inf 在#17156 检查模型可用性
* 修复(file2document): 批量链接应该添加到现有的 KB，而不是用 #17172 中的 @euvre 替换它们
* 修复：通过@Lynn-Inf 在 #17183 中验证型号 api
* Go：在 #17171 中添加 @Haruko386 的 funASR 提供程序
*修复：在#17116中添加@Haruko386对数据集的可访问检查
* 在 #17189 中通过 @wangq8 丰富了 ragflow_client.py
* Py: ruff 格式，作者：@JinHai-CN #17193
* 修复：修复 CVE-2025-69534，将 Markdown 从 3.6 升级到 >=3.8.1 by @rayhanest in #17198
* 迁移：用 zai-sdk 替换 zhipuai，以解锁 @rayhanest 在 #17197 中修复的 pyjwt CVE
* 修复：在 #17206 中通过 @wangq8 增强 ragflow-client
* feat(model): 在 #17055 中通过 @dcc123456 在每个模型验证和自动填充模型上转发 instance_id
* 修复(go-agent): 支持 #17163 中 @Hz-186 的 Tavily 工具名称
* 修复：在 APIKeyResponse 中添加 create_date 字段，以便 @euvre 在 #17186 中显示令牌列表
* 修复（代理）：仅通过 #17185 中的@euvre 将权限字段编辑限制为画布所有者
*修复：在#17181中通过@euvre将文件链接到数据集时避免重复的文档名称
* Go：仅在 #17175 中 @euvre 从知识库中删除文档时取消链接文件管理器文件
* 构建（deps-dev）：由 @dependabot[bot] 在 #17208 中将枕头从 12.2.0 撞到 12.3.0
* 壮举：@Lynn-Inf 在 #17213 中嵌入 openrouter
* 由 @wangq8 在 #17218 中修复 CVE-2026-42533
* 修复 #17226 中 @euvre 的 useKnowledgeGraphTip 工具提示中的标点符号
* 修复（go）：@euvre 在 #17219 中的 ZipuAI Embed 方法中的 nil 指针取消引用
* CI 将 lefthook 和 gitee 更新为 github by @myf-bee in #17230
* 修复（deepdoc）：防止图形和方程裁剪在科学 PDF 上合并（@Dexterity104 在 #15873 中）
* 修复：防止折叠按钮与@euvre 在 #17157 中的下一个搜索中重叠展开的内容
* 修复 #17161 中的 @euvre 在搜索页面上切换文件过滤器时闪烁的文档计数和总数
* 修复(web): 在 #17165 中@euvre 在可聚焦控件上使用outline-none 而不是outline-0
* 修复(agent): 在 #17233 中@euvre 防止 Agent 节点后跟 Message 节点时出现重复回复
* 修复(web): 在 #17169 中@euvre 在 Go 后端下的文件管道对话框中显示内置块方法
* 功能：在 #17159 中添加 @euvre 的“在新选项卡中打开”按钮来搜索共享嵌入对话框
* 修复（网络）：修复团队成员状态徽章悬停文本的可读性（由 @euvre 在 #17178 中修复）
* 修复：将文档 URL 渲染为模型工具提示中的超链接，由 @euvre 在 #17224 中提供
* 修复：#17217 中 @euvre 的数据源内部配置字段的 i18n
* 修复：MCP 导入现在处理所有文件，而不是仅处理第一个文件（@euvre 在 #17179 中）
* 文档：正确的 firecrawl README 路径到工具/firecrawl by @muhzuhaib in #17239
* 修复：使 MCP 批量管理全选复选框反映 @euvre 在 #17174 中的选择状态
* 文档：修复 @muhzuhaib 在 #17238 中的 Python SDK 中无效的 chunk_method 值和 NameError
* 文档：将开始/消息组件链接指向 .md，而不是 @muhzuhaib 在 #17237 中的 .mdx
* 文档：修复 @JinHai-CN #17249 中的拼写错误和格式
* 修复(web)：在 #17177 中 @euvre 的编辑中保留 MCP 授权令牌
* 修复（go-agent）：通过 #17167 中的 @Hz-186 的异常输出来路由图步骤错误
* 修复：#17228 中的 @Haruko386 无法在代理组件中使用代理作为工具
* 修复 @wangq8 在 #17251 中更新“子块用于检索”不生效的问题 (#900)
* 修复：在 #17247 中由 @Lynn-Inf 进行安静的 api 测试
* 修复：消除数据源页面中标题无表单内容的一帧闪烁，@euvre 在 #17214 中
* 修复（摄取）：将法律 DSL 与 Python 对齐 — 标题后备、冒号标题、短行过滤器、remove_toc 以及 @xugangqiang 在 #17200 中的图像扩展映射
* 修复：#17180 中 @euvre 未显示 Go 后端内置块方法列表
* 修复：在 #17220 中@euvre 恢复数据集创建对话框中的空模型警告
*修复：防止@euvre在#17221中加载知识库和聊天列表时出现空状态闪存
* 修复：在 #17223 中 @euvre 使用 FormLabel 所需的属性在搜索设置中保持一致的星号颜色
*修复：当@euvre在#17184中的代理消息中选择文件类型时恢复下载按钮
* 修复：在 #17234 中@euvre 重命名或更新配置后保持存储卡位置稳定
* 修复：MinerU.Net 和 PaddleOCR.Net 缺少 @euvre 在 #17229 中提供的图标
* 修复：#17231 中@euvre 从代理组件模型选择器中排除 TTS 模型
* 修复(web): 在 #17149 中 @euvre 流结束后显示 think 块的完整标签
* 修复（go）：在 #17176 中通过 @euvre 解析内存创建/更新中的租户模型 ID，而不会出现硬故障
* 修复：搜索输入无法扩展以显示 #17166 中 @euvre 的长查询
* 文档：在 #17240 中添加 @deadtrickster 的 README (README_ru.md) 的俄语翻译
* 修复：无法在 #17211 中 @Haruko386 在 listMemories 中显示嵌入 ID
*修复：无法在#17244中通过@Haruko386在聊天和搜索中获得所有者
* 修复：#17232 中 @Haruko386 更新代理时可能会出现重复的代理名称
* feat(go-models)：通过@Hz-186在#17241中扩展提供商（SiliconFlow、七牛、华为云、Jina）工具调用支持
* 修复 CI 在 #17263 中由 @myf-bee 临时添加 gitee 令牌
* 文档：修复 @deadtrickster 中的自述文件中的 markdownlint 和命令问题 #17261
* Feat：支持文档级别的管道相关配置。通过 @cike8899 在 #17212
* Go：通过@JinHai-CN 在#17253 中为大量界面添加上下文
* refa: 优化 wiki 编译并发性 by @buua436 in #17192
* 修复：防止思考内容泄漏到共享聊天（Go 模式）中的可见答案（由@euvre 在＃17225 中）
* 修复：通过 #17250 中的 @dcc123456 改进 useModelsDerived 中的模型合并逻辑，以获得更好的特定于实例的值
* 修复：计算不同的块 ID，以便 doc.chunk_num 与 #17182 中 @euvre 的实际索引块匹配
* 壮举：@xugangqiang 在 #17262 中将 Office_Oxide 从 0.1.2 升级到 0.1.8
* 修复（chunker）：将分隔符粘合到前面的段，而不是通过 @euvre 在 #17168 中将其作为独立块发出
* 修复：通过@buua436在#17268中改进页面索引描述
* 修复：通过@rayhanest 在 #17264 中将 aiosmtplib 升级到 >=5.1.1 来修复 CVE-2026-53533
* 壮举：在 #17273 中将 @cike8899 的“Compilation”更改为“Operator”
* 修复：让 qwen3-vl-plus 在 Go 模式下可用作聊天/视觉模型，由 @euvre 在 #17254 中实现
* 修复（代理）：通过 @euvre 在 #17256 中连接消息组件（Go 运行时）中的内存持久性
* Go：通过 @JinHai-CN 在 #17269 中向 DAO 添加上下文
* 修复(html_parser): 在#17073中@chuenchen309保留第一个块元素之前的文本
* 修复（deepdoc）：将管道表保留在 markdown 代码围栏内，由 @Yurii214 在 #17201 中实现
* 壮举：OpenAI-API-Compatible by @Lynn-Inf in #17276
* 壮举：通过 @cike8899 在 #17267 中将页面排名添加到 ParserForm
*修复：优化知识编译LLM行为和PageIndex排序由@buua436在#17270
* 修复：@Lynn-Inf 在 #17283 中调用 Xinference asr 模型
* 修复：通过 @euvre 在 #17170 中的链接到数据集对话框中的分页来获取所有知识库
* 修复：在 #17252 中@euvre 修正数据源设置中的自动解析开关拇指对齐
* refa：通过@buua436在#17285中改进树聚类
* 功能：在 #17140 中@KevinHuSh 优化编译过程中的树导航
* 重构：@Haruko386 在 #17286 中构建的请求主体
*修复：无法在#17299中由@Haruko386在代理机器人中获取序言
* 修复：防止摘要倒计时文本在数据源日志表中闪烁，由 @euvre 在 #17258 中实现
* 修复：在#17304中通过@Lynn-Inf更新提供商腾讯混元的base_url和型号列表
* 修复 @myf-bee 在 #17297 中使用秘密 gitee 令牌的问题
* 修复（go）：通过@euvre在＃17187中解析LLM代理画布组件中的自定义租户模型
* 壮举：@xugangqiang 在 #17293 中对数据集/文档的解析器页面范围和解析类型验证
* 修复：#17259 中 @euvre 在 Go 模式下未使用聊天附件
* 修复（无穷大）：避免因池化连接和有限超时而挂起，@qinling0210 在 #17287 中
* 修复：支持 #17288 中 @buua436 的 Infinity 知识编译
* 修复了@yingfeng 在 #17313 中编译时的无穷大问题
* Go：通过@JinHai-CN 在#17277 中修复上下文
* 壮举：@xugangqiang 在 #17312 中修复了解析器组件参数检查和系列映射
* 通过将 mcp 升级到 >=1.28.1（由 @rayhanest 在 #17315 中修复 CVE）
* 修复（web）：防止多选弹出框在第一个选择时关闭，由@dcc123456在＃17310中进行
* 修复：#17295 中的 @euvre 在 Go 模式下代理会话轮次计数不会增加
*修复（模型）：表面MiniMax速率限制和API错误而不是@euvre在#17292中的通用消息
* 只记录并显示最终状态的日志 (#908) by @wangq8 in #17302
* 修复（deepdoc）：通过@ebarkhordar在#17282中匹配同一页面中的表列
* 重构（go-models）：在#17289中分享@Hz-186的聊天响应处理
* 修复（go-model）：默认 Jina 将 top_n 重新排序为 #17242 中 @Hz-186 的文档计数
*修复（代理）：返回tavily工具错误作为结果，而不是通过@euvre在#17274中使ReAct代理崩溃
* 修复：在 #17291 中 @euvre 导出的代理日志 CSV 中包含完整的对话详细信息
* 修复：#17328 中@Haruko386 的搜索块无法获取结果
* 修复（deepdoc）：保护 docling 作物免受@Yurii214 在 #17147 中丢失页面图像的影响
* 修复（代理）：在会话创建时设置 exp_user_id 和名称，以便探索显示 @euvre 在 #17327 中的会话标题
* 修复：删除 YAML frontmatter 并推迟 @euvre 在 #17272 中的 API 参考 markdown 渲染
* 修复：遵守 @euvre 在 #17336 中 useFetchAllKnowledgeList 中的 REST API page_size 限制
* 修复：#17335 中@Haruko386 无法在列表代理过滤器中获取管道类别
* 修复：#17329 中 @Haruko386 列出块时未排序
* 修复：@Lynn-Inf 在 #17337 中的 python conf 中的腾讯模型
* 修复：在 #17334 中@xugangqiang 在 Go 摄取中尊重解析器参数和图像 VLM system_prompt
* Feat：打开页面时，数据集设置页面上的PageRank值无法显示。通过 @cike8899 在 #17309
* 重构：使用内置的 max/min 来简化代码 @futurehua in #17059
* 修复（解析器）：在 HTMLParser 中保留松散的正文文本，由 @WOLIKIMCHENG 在 #17290 中编写
* Go: 通过@JinHai-CN 在 #17314 添加上下文
* 更新@wangq8在#17356中如何检索文档设置和元数据的文档
*修复：稳定@buua436在#17345中的知识编译导航更新
* 文档：修复 README.md 中 @amir-rezaei 在 #17350 中目录条目中的标题大小写
* 功能：添加图形关键字搜索并修复数据集合成问题。通过 @KevinHuSh 在 #17342
* 添加取消作为最终状态 (#918) by @wangq8 in #17352
* 修复：#17355 中的 @Lynn-Inf 在解析器中通过 somark 进行解析
* 修复（摄取）：当 @xugangqiang 在 #17351 恢复之前编辑 DSL 时，丢弃过时的检查点
* 修复（go-agent）：#17353 中 @Hz-186 的双重消息
* 修复：#17359 中@Haruko386 无法在数据集中添加元数据
* Go：为许多提供商添加工具，由 @Haruko386 在 #17341 中提供
*企业tests.yml添加@myf-bee的gitee秘密令牌#17368
* 文档：修复@amir-rezaei 在 #17360 中的 SECURITY.md 中的语法和缺失文章
* Go: 通过@JinHai-CN 在 #17354 添加上下文
* 修复：通过 @rayhanest 在 #17366 中升级 lxml 和 lxml_html_clean 来修复 CVE
* 修复（go）：将摄取管道与 Python（解析器/媒体调度 + PDF 坐标链 + Chunker）对齐，作者：@xugangqiang，#17349
* feat: 在#17367中通过@dcc123456将BASE_URL添加到TencentHunYuan
* 壮举：添加 Mistral OCR (/v1/ocr) 作为文档解析器；修复 @Xavierando 在 #17057 中的“找不到模型”错误标签（#5782、#7075）
* Go：添加上下文，第 3 部分，作者：@JinHai-CN，#17369
* 修复（脚本）：修复 @amir-rezaei 在 #17362 中的 lsb_release 拼写错误和 show_env.sh 中缺少的动词
* 壮举：@eugeneBackDev 在 #17311 添加 AIMLAPI (aimlapi.com) 作为模型提供者
* 构建（deps）：由 @dependabot[bot] 在 #17372 中将 pypdf 从 6.13.1 提升到 6.14.2
* 文档：修复 README.md 中的 ToC 锚点不匹配、标题大小写和导航链接文本，作者为 #17379 中的@Gouravm1523
* Go：添加上下文，第 4 部分，作者：@JinHai-CN，#17381
* 修复：当参数中的 model_list 和factory_llms 为空时通过@Lynn-Inf 在 #17364 中验证远程模型
* 修复：通过 #17363 中的 @dcc123456 禁用 MemoriesFormField 组件中的全选选项
* 修复：允许本地 FunASR 没有 API 密钥，@LauraGPT 在 #17388 中
* Go：添加上下文，第 5 部分，作者：@JinHai-CN，#17392
* 修复了 #17370 中 @wangq8 获取数据集所有者检索整个数据集的问题
* Go：添加上下文，第 6 部分，作者：@JinHai-CN，#17399
* Go：添加上下文，第 7 部分，作者：@JinHai-CN，#17402
* 改进“文本分隔符”UX：更清晰的工具提示 + @skbs-eng 的实时解析分隔符预览 #17385
* Go：上下文，第 8 部分，作者：@JinHai-CN，#17405
* 修复：通过 #17397 中的 @Lynn-Inf 简化验证
* 修复：@euvre 在 #17410 中未应用代理列表所有者过滤器
*修复(web):正确的数据集配置页面标题和描述由@euvre在#17407中
* 修复：#17401 中 @euvre 更新后立即刷新内存侧边栏头像
* Chunker：端口 Python Overlapped_percent 规范化和 BULLET_PATTERN 标题后备，由 @xugangqiang 在 #17396 中提供
* Go：添加上下文，第 9 部分，作者：@JinHai-CN，#17412
* 增强：localhost:9385 -> sandbox-executor-manager:9385 by @wangq8 in #17414
* Go：添加上下文，第 10 部分，作者：@JinHai-CN，#17417
* 修复：在 #17400 中通过 @buua436 持久保存管道树图行
* 修复（go-models）：在 #17423 中记录@Hz-186 提供者令牌的使用情况
* 修复: #17427 中@dcc123456 在测试结果卡中添加文档名称显示
* 修复：通过 #17432 中的 @dcc123456 更新分隔符表单字段布局以更好地对齐
* 修复：通过 #17422 中的 @dcc123456 改进 useModelsDerived 中的模型合并逻辑，以获得更好的特定于实例的值
* @yuzhichang 在 #17431 中引入了 oxfmt
* 在 #17420 中修复@euvre 的代理机器人嵌入聊天流信封
* Go：添加上下文，第 11 部分，作者：@JinHai-CN，#17426
*修复：当忘记@Haruko386在#17395中的消息时，可更新以获取更新时间
* Go：在#17413中添加@Haruko386对baidu、minimax、moonshot和mistral的代币使用
*修复：在#17415中由@euvre在数据集列表中显示解析的嵌入模型显示名称
* 修复：防止子定界符添加在 #17421 中由 @euvre 提交表单
* 修复：#17434 中@buua436 正确删除导航子树
* Go：添加上下文，第 12 部分，作者：@JinHai-CN，#17435
* 功能：更多 API 用于编译器列表和删除编译结果。通过 @KevinHuSh 在 #17425
* 修复：通过@rayhanest 在 #17443 中将 nltk CVE 限制为 >=3.10.0 来修复 nltk CVE
* 功能：搜索知识库级图节点。通过 @cike8899 在 #17444
* Go：添加上下文，第 13 部分，作者：@JinHai-CN，#17445
* 修复：在 #17416 中@xugangqiang 的 ClampsOverlappedPct 测试中使用独立夹具
* 修复：通过 @rayhanest 在 #17448 中从 1.82.5 升级到 1.84.0 来修复 litellm CVE
* 修复：@Lynn-Inf 在 #17442 中进行代码审查
* 在 #17430 中添加 {date} 替代品到 @wangq8 聊天
* 修复（web）：通过 ID 识别提供程序实例，并在保存时跳过干净的卡，由 @dcc123456 在 #17424 中进行
* 修复：Go 摄取迁移批次 5（解析器 1.1/1.7/2.11、分块器 1.7/1.8/2.6/2.7、Tokenizer 6x 修复）由 @xugangqiang 在 #17419 中
* 沙盒：将速率限制从 5/秒提高到 60/秒 (#928)，作者：@wangq8，在 #17469 中
* 修复：无法从代理列表页面导航至合辑编辑页面。通过 @cike8899 在 #17460
* 修复（go-agent）：使用会话 ID 进行取消和上下文流，@Hz-186 在 #17462 中
* 修复（无穷大）：parent_kwd 错误地分割为关键字列表，导致 @qinling0210 在 #17475 中形成孤立簇
* 功能：删除数据集级别图。通过 @cike8899 在 #17474
* 修复：#17476 中@Lynn-Inf 的 rm 租户 llm 调用
* 修复 Markdown 解析器，表格应该位于 #17477 中 @wangq8 的块内
* 修复：RAGFlowJsonParser 在顶级 JSON 标量上因 IndexError 崩溃（@devYRPauli 在 #16877 中）
* 修复标签 CSV 解析器在 #17131 中由@devYRPauli 在多行引用字段后拼接错误文本的问题
* 修复：稳定 wiki 规划和工件图渲染，由 @buua436 在 #17473 中完成
* 修复：暴露 #17485 中 @wangq8 摄取错误时的真实错误
* 由 @wangq8 在 #17487 中开发/增强开发脚本
* Go：添加上下文，第 14 部分，作者：@JinHai-CN，#17446
* 修复：@Haruko386 在 #17472 中未能在内存中设置正确的状态
* 修复：Go版本数据集设置页面切片方式的文档不显示。由 @cike8899 在 #17478
* Go：在 #17455 中添加 @Haruko386 为 orcarouter、baichuan、cohere 和 novita 代币使用
* Go：通过 @Haruko386 在 #17486 中实现嵌入、重新排名 PPIO 提供商
* 修复：通过@rayhanest 在 #17489 中将 pdfplumber 升级到 0.11.10 来修复 CVE
* 修复（go-agent）：在#17484中返回@Hz-186配置的检索空响应
* 壮举：在 #17447 中添加 @robertkeus 的 GreenPT 模型提供商
* 修复（摄取）：提高 Extractor/LLM 的鲁棒性和 Python->Go 奇偶校验（@xugangqiang 在 #17470 中）
* 修复（管理员）：使用 POST 进行管理员注销 API by @euvre in #17482
* 壮举：在 #17305 中添加 @learnprogram2 的 Tenki 沙箱提供程序
* 修复：在 #17454 中@euvre 的搜索页面中重置新搜索中的选定文档
* 修复：#17409 中 @euvre 删除最后一页的最后一张卡片时返回上一页
* @jay77721 在 #17480 中重构（go-models）/llm 令牌对 longcat 的使用
*修复（go）：通过@abhayishere在＃17380中实现人类流（ChatStreamlyWithSender）
* 修复 #17479 中 @yingfeng 的解析日志显示无穷大的问题
*修复（aimlapi）：在#17491中@eugeneBackDev在每个aimlapi.com请求上发送归因标头
* 修复：通过@rayhanest 在 #17495 中将 pyasn1 约束提高到 >=0.6.4 来修复 CVE
* 修复：在 #17493 中通过 @Lynn-Inf 判断解析方法之前将 model_id 解析为模型
* 修复：搜索输入控件样式并恢复思维导图模态叠加（由 @euvre 在 #17436 中提供）
* 将 #17477 python 的移植更改为 go，将表解析为 @wangq8 在 #17488 中的 markdown 文件的块
* 修复：@anupamme 在 #17498 中将 axios 升级到 1.15.1、0.31.1 (CVE-2026-42033)
* Feat：优化数据集级wiki生成日志显示。通过 @cike8899 在 #17492
*修复（admin，api）：在显示file_store后端时尊重STORAGE_IMPL（关闭＃17294）由@Harsh23Kashyap在＃17441中
* 修复：#17503 中 @wangq8 运行的沙箱没有速率限制
* Go：@JinHai-CN 在 #17494 重构 ragflow_server.go
* 修复 @wangq8 在#17499 中通过owner_ids 过滤数据集不起作用的问题
* 修复：@anupamme 在 #17508 中将 axios 升级到 1.15.2 (CVE-2026-42264)
* 修复：在 python/go 上列出 nvidia 的模型功能，在 #17501 中@6ba3i 不会返回当前模型
* 修复：通过 #17515 中的 @Lynn-Inf 验证 Mistral OCR 模型
* 修复：在 #17513 中由 @wangq8 删除并添加 mysql 的索引
* 重构：删除#17517中@wangq8的llm_app.py
* 修复：多机型对比页面无法输出消息。通过 @cike8899 在 #17507
* 重构：@KevinHuSh 在 #17490 中代理搜索进度中的工具使用
* 修复：支持特定于提供商的验证有效负载，以通过 #17522 中的 @dcc123456 进行每个模型验证
* 修复：多机型对比聊天页面，如果有多个窗口，每个窗口都可以删除。由 @cike8899 在 #17523
* 修复：删除 #17527 中 @Lynn-Inf 不支持的 get-rerank 模型
* 修复：切换模板会导致实体规范中出现一些额外的数据条目。通过 @cike8899 在 #17514
* 修复标签 CSV 解析器忽略 @devYRPauli 在 #17496 中记录的 TAB 分隔符
*修复（搜索）：通过#17529中的@dcc123456调整输入形状和按钮位置以适应内容行数
* 修复：通过@dcc123456在#17532中为AssistantGroupButton组件中的日志按钮添加工具提示
* 修复 QA DOCX 表解析器在 #17497 中由 @devYRPauli 删除重复文本之间的单元格
* 修复：在 #17535 中用 @Lynn-Inf 替换不支持的默认 qwen 重新排序模型
* Go：@JinHai-CN 在#17511 中重构
* 重构：合并数据集范围图。通过 @KevinHuSh 在 #17526
* Feat：将对话推理级别存储在client侧。通过 @cike8899 在 #17530
* 修复数据集选择器，如果 #17534 中仍有 @wangq8 的数据，则继续滚动
* feat(go-llm)：通过#17509中的@Hz-186调整提供商响应和流媒体使用
* 壮举：创建聊天频道并通过 @Haruko386 在 #17518 中实现 WhatsApp 机器人
* 修复: 在 #17528 中添加 @jay77721 StepFun 中国区基本 URL (api.stepfun.com)
* 功能：Cli点击右上角的图标删除音符节点。通过 @cike8899 在 #17533
* 修复：通过@rayhanest 在 #17543 中将 protobuf 限制为 >=5.29.6 来修复 CVE-2026-0994
* 文档：由 @Yannnnnnnny 在 #17358 中更新用户指南
* Go port：文档级元数据提取和知识编译器，作者：@yuzhichang，#17536
*修复（摄取）：限制未配置的嵌入限制；文档分块器标题奇偶校验（仅限评论）由 @xugangqiang 在 #17539 中
* 修复：在 #17542 中添加 @Lynn-Inf 对 Hugging Face 提供程序的 list_models 支持
* feat(agent): 在 #17548 中添加 @ethan7zhanghx 的 Querit 搜索工具
* 修复: 音频按钮可以通过#17541中的@dcc123456发送消息
* 构建（deps）：由 @dependabot[bot] 在 /agent/sandbox/sandbox_base_image/nodejs 中将 axios 从 1.15.2 提升到 1.18.0 #17549
* 修复：管道日志页面上不显示编译器操作员图标。通过 @cike8899 在 #17545
* 重构：将“artifact_”重命名为“wiki_”。通过 @KevinHuSh 在 #17553
* 修复：通过 #17550 中的 @dcc123456 通过 echoTransform 恢复表单 echo 上特定于提供者的字段
* 修复：上传文档可能会被@wangq8在#17537中挂起整个ragflow
* 壮举：#17552 中@dcc123456 批量验证提供商实例卡中的模型
* 修复：避免 OpenAI‑API 兼容聊天模型的深度复制崩溃（由 @Lynn-Inf 在 #17556 中提供）
* 修复（i18n）：通过@dcc123456在＃17551中为模型提供者表单字段添加缺少的翻译键
* 修复 #17560 中 @wangq8 的深度复制聊天模型
* 修复多模型聊天，内容覆盖#17566中@wangq8当前的聊天会话
* 修复（setting-model）：支持字段级自动完成以抑制浏览器自动填充（@dcc123456 in #17559）
* 修复内部/处理程序测试失败，使响应与 Python 合约保持一致，并通过 @xugangqiang 在 #17554 中重新启用 CI 中的处理程序/存储/代理测试
* 修复将 Excel 中的图像解析为表格，图像显示为一列的问题，由 @wangq8 在 #17569 中完成
* 壮举：编译受益天真抹布。通过 @KevinHuSh 在 #17555
* 功能：在数据集的图表页面添加更新按钮。通过 @cike8899 在 #17571
* 修复：@xugangqiang 在 #17577 中的 ci 问题单元
* 修复：#17580 中 @xugangqiang 的 ci 问题
* 修复：#17347 中的 @euvre 通过 Go 代理端点传播发布发布标志
* 修复了@euvre 在 #17483 中在首页返回空的管理员用户列表
* 将 Go 知识编译器 RAPTOR 与 Python 对齐，并由@yuzhichang 在 #17573 中删除护栏
* 测试：发布 Go-proxy RESTful 合约测试，由 @euvre 在 #17468 中验证在 Go 模式下通过
* 文档：通过@Yannnnnnnny 在 #17575 中修改文档显示并添加图像
* 修复：#17583 中 @Lynn-Inf 返回 model.extra 用于显示响应
* feat[Go]: 在 #17565 中添加 @Haruko386 的聊天频道 dingtalk 聊天机器人
* feat[Go]：在 #17557 中为 @Haruko386 的聊天频道添加不和谐的聊天机器人
* feat(go-channels)：通过@Hz-186在#17564中添加Telegram和WeCom频道
* feat(go-channels): 在#17598中通过@Hz-186注册qqbot频道
* 修复：代理页面未进行任何操作，持续调用保存接口的问题。通过 @cike8899 在 #17576
* feat(go): 在 #17404 中通过 @euvre 实现内存提取任务消费者
* 修复：#17596 中 @dcc123456 删除 FunASR 中基本 url 默认值
* 修复知识编译器 Go 端口回归（MySQL 1101 + 启动死锁），作者：@yuzhichang，#17599
* 修复：多模型聊天传入session_id，且不保存session。由 @wangq8 在 #17581
* 重构（设置模型）：通过 #17582 中的 @dcc123456 将 SoMark 迁移到具有模型级额外字段的通用提供商卡
* 重构（go-models）：通过@jay77721在＃17574中添加groq的令牌使用
* 修复（go-models）：将 LongCat 使用处理与 DeepSeek 和@jay77721 的官方文档（#17558）保持一致
* 重构(go-models)：在#17521中添加@jay77721为stepfun使用的令牌
* feat[Go]: 在 #17561 中添加@Haruko386 的聊天频道飞书聊天机器人
* 修复（常见，内部）：在 #17452 中的 @Harsh23Kashyap 中，在 normalize_overlapped_percent 中舍入而不是截断（关闭 #17418）
* 杂务（go）：通过@xugangqiang在＃17586中的构建标签将测试分类为单元/集成/e2e/手动层
* 修复(channels): 在 qqbot.go 中将 stringValue 重命名为 anyToString 以解决 #17610 中 @jay77721 的重新声明问题
* 修复（解析器）：从 @xugangqiang 在 #17585 中删除 DOCX/HTML TOC 的内容中派生 eng
* 功能（摄取）：添加画布管道调试（空运行）模式，并通过 @xugangqiang 在 #17538 中查看结果日志
* 修复：通过 @Lynn-Inf 在#17604 中强制将预览 qwen3 模型的enable_thinking 设置为 true
* 修复（i18n）：更新思考状态文本并添加@dcc123456在#17602中的思考完成反馈
* 修复（数据集）：通过@dcc123456 在 #17603 中更新文档删除的错误消息以使用正确的翻译密钥
* 修复（数据集）：将水平布局应用于自动关键字和自动问题表单字段（@dcc123456 在 #17608 中）
* 功能：GET /datasets 支持 @wangq8 在 #17606 中的 ids 数组
* 壮举：在 #17546 中添加 @buua436 为知识编译提供 LLM 引导的语义重新组块
* 参考：通过@buua436在#17612中更新LongCat模型配置
* Feat：添加一个链接以创建编译器运算符的运算符参数的模板。通过 @cike8899 在 #17563
* 重构：在 #17597 中由 @wangq8 合并 page 和 page_size
* 修复：跨语言下拉菜单选项翻译错误。通过 @cike8899 在 #17615
* 修复：wiki模板中的索引文本区域可以放大。通过 @cike8899 在 #17613
*修复（数据集）：回显不在第一页中的选定数据集，由@dcc123456在＃17616中
* 修复：选择wiki时无法显示蓝图的问题。由 @cike8899 在 #17618
* 测试（处理程序）：修复 #17622 中 @xugangqiang 失败的 TestSearchHandlerUpdateRejectsInvalidSearchID 断言
* 测试：通过 @euvre 在 #17620 中发布 Go 代理的 test_dataset_create_embedding_model_contract
* 修复（go-agent）：将日志身份验证与 Python 对齐，并通过 #17617 中的 @Hz-186 强化事件数据
* 修复：wiki 的领取卡不显示标题。通过 @cike8899 在 #17626
* 功能：从聊天和检索表单中删除“页面索引”和“使用公斤”。由 @cike8899 在 #17627
* feat[Go]：在 #17594 中为 @Haruko386 的聊天频道添加线路聊天机器人
* 修复：@Haruko386 在 #17605 中写入错误类型的元数据
* 修复：在 #17628 中为@Lynn-Inf 的 LLM 调用添加缺少的参数键
* 精炼知识编译 REST APIs by @wangq8 in #17624
* Go：由@JinHai-CN 在#17544 中重构配置
* Go：@JinHai-CN 在#17635 中重构
* 修复（go-agent）：通过@Hz-186在#17640中修复Tavily工具数组模式
* 重构（knowledge_compiler）：@yuzhichang 在 #17630 中通过单个模板 id 从模板类型派生变体
* feat(go-models)：统一OpenAI兼容的令牌使用提取，由@jay77721在#17634中进行
* 修复（go）：通过 system_instruction 发送 Gemini 系统提示，而不是通过@abhayishere 在 #17449 中由用户转向
* 重构：通过 @iridescentWen 在 #17639 中从 Ollama 驱动程序中删除未使用的 contentToText 帮助程序
* 修复：通过将 httplib2 限制为 >=0.32.0（由 @rayhanest 在 #17636 中修复 CVE-2026-59939）
* 修复：在 #17642 中对 @euvre 上传的头像图像强制执行 4 MB 大小限制
* 修复：不要在 #17637 中@euvre 的多模型聊天完成中保留临时会话
* 更新空响应的措辞以仅支持 @wangq8 在 #17651 中的 Naive
* Go：通过@JinHai-CN在#17641修复SSRF
* 修复：团队成员可以在#17631中通过@Haruko386编辑权限
* 修复：团队成员可以在#17633中通过@Haruko386编辑权限
* Go：修复@JinHai-CN #17659 中的迁移问题
* 文档（api）：在#17662中@lntutor的检索示例中使用dataset_id
* 修复（common/misc_utils）：允许装饰器在 #16174 中 @Harsh23Kashyap 失败后重试一次
* feat(go): port knowledge compilation template/group + wiki artifact/nav/skill REST APIs from Python by @yuzhichang in #17656
* fix(nlp): drop dead `re.I` from delimiter finditer calls by @skbs-eng in #17386
* Go: 修复@JinHai-CN #17664 中的列表服务
* Go：由@JinHai-CN 在#17678 中重构配置
* fix(chunker): enforce strict chunk_token_num cap on .txt / PDF / email paths by @skbs-eng in #17203
* Go：删除#17680中@JinHai-CN未使用的代码
* refactor(knowledge_compile): global compile pool, token-budget batching, and DocEngine-only deletion by @yuzhichang in #17679
* refactor(nlp): collapse 6 delimiter-parser implementations into one canonical helper (#17383) by @skbs-eng in #17387
* Go: refactor log and config by @JinHai-CN in #17684
* Go: add context to redis client by @JinHai-CN in #17689
* feat(go-models): migrate nvidia/siliconflow/groq/longcat to unified h… by @jay77721 in #17643
* Fix: handle html tags in empty_response by @Lynn-Inf in #17657
* Port Python agentic search to Go (nav service, harness, tools) by @yuzhichang in #17702
* fix: XunFei Spark provider API key verification and model listing by @euvre in #17652
* Fix: Deleting temporary chat resulted in an error.通过 @cike8899 在 #17694
* feat(go-models): migrate batch 1 model drivers to unified handlers by @jay77721 in #17696
* Fix: Upload an image without filling in any text and press Enter;图像不应该消失。通过 @cike8899 在 #17632
* Fix: add doc_type_kwd back by @wangq8 in #17658
* Fix: Accidentally deleted the previously selected chat.通过 @cike8899 在 #17710
* 修复：缓存 SECRET_KEY，如果没有设置，RAGFlow 将自动生成一个，但如果 Redis 由于内存不足而驱逐密钥，则会导致重新生成密钥，从而导致 #17707 中 @wangq8 的所有请求 401
* feat(go-models): migrate batch 2 model drivers to unified handlers by @jay77721 in #17697
* Go: support ids filter in list datasets API by @euvre in #17705
* fix(go-models): add StepFun Step Plan base URL by @euvre in #17704
* Dockerfile base part separate to base image by @myf-bee in #17701
* CI: change gitee token to env by @myf-bee in #17718
* Go: add context to storage by @JinHai-CN in #17690
* feat(go-models): migrate batch 3 model drivers to unified handlers by @jay77721 in #17698
* fix(chunker): honor configured delimiters as soft boundaries in TokenChunker by @xugangqiang in #17721
* REDIS: allkeys-lru -> volatile-lru to avoid got evict if lack of memory by @wangq8 in #17720
* Fix: false success toast when deleting non-existent Langfuse config by @euvre in #17719
* Fix: set chunk_num before set_progress, avoid race condition by @Lynn-Inf in #17724
* 重构：完善wiki计划程序。通过 @KevinHuSh 在 #17579
* 修复：模型设置中，将自由度设置为0然后保存导致DeepSeek模型调用失败的问题。通过 @cike8899 在 #17725
* Fix: Every variable in the chat settings is required.由 @cike8899 在 #17727
* Fix: On the second page of agent version, switch the page size to empty.通过 @cike8899 在 #17732
* fix: synchronize chat model configuration by @buua436 in #17717
* [go] Merged memory extractor with ingestion task handler by @yuzhichang in #17730
* Go：修复@JinHai-CN #17733 中的资源泄漏问题
* refa: simplify RAPTOR tree clustering and configuration by @buua436 in #17614
* 修复：通过 #17723 中的 @buua436 对齐管道分隔符分块
* 修复（分块）：将 splitOversizedUnitWith 与 @xugangqiang 在 #17729 中的 Python 运行和齐平对齐
* feat(go-models)：将第 4 批模型驱动程序迁移到统一处理程序，由 @jay77721 在 #17699 中完成
* 修复：修复 #17734 中 @dcc123456 数据集页面的过滤错误
* 修复：代理版本页面导出DSL格式不正确的问题。通过 @cike8899 在 #17736
* 修复(web)：MCP 编辑对话框取消/保存按钮未由@euvre 在#17713 中关闭
* 修复 @euvre 在 #17693 中的 docx 文件预览中重叠的 CJK 文本行
* 修复(provider): 支持在 #17728 中 @Haruko386 保存之前编辑获取的模型类型
* 修复：jina 错误的返回值：modelname by @Haruko386 in #17716
* 修复: #17709 中 qwen 无法获取 @Haruko386 的模型列表
* 修复（tokenizer）：从磁盘加载 cl100k BPE 表，而不是由 @xugangqiang 在 #17712 中静默离线失败
* 修复：通过 #17737 中的 @buua436 优化数据流索引和日志
* feat(go-models)：将第 5 批模型驱动程序迁移到统一处理程序，由 @jay77721 在 #17700 中完成
* Go：修复@JinHai-CN 在 #17738 中的警告
* 测试（分块）：用于 splitOversizedUnit 运行总和刷新的自包含防护，由 @xugangqiang 在 #17740 中编写
* 修复（chunker）：JSON 路径全局合并，并保持超预算项目完整（@xugangqiang 在 #17739 中）
* GO CLI：通过 @myf-bee 在 #17750 添加企业空 Dao 文件
* 修复：在 #17745 中通过 @Lynn-Inf 处理 llm_setting 开关
* 重构（摄取/任务）：通过 @xugangqiang 在 #17749 中将索引文档映射提取到任务/索引文档包中
* Go：删除#17758中@JinHai-CN的重复路线
* 让agentic rag 搜索尊重@wangq8 在#17731 中的元数据过滤器
* 修复：解决默认模型无法删除的问题。通过 @dcc123456 在 #17755
* feat(message-input): 在#17746中通过@dcc123456在顶部边框添加自定义拖动调整大小手柄
* 修复(go): 在 #17653 中通过 @euvre 添加提供者模型时接受空/未知 model_type
* 修复：通过 ID 和对话搜索会话 (#808) by @wangq8 in #17764
* 修复（py-agent）：通过 #17762 中的 @Hz-186 从模板中删除不可用的模型默认值
*修复：保留@buua436在#17772中的猛禽树标题
* 修复（文件管理器）：从上传文件名中删除文件夹路径，以防止 #17765 中的 @dcc123456 创建额外的文件夹
* 修复代理停止聊天不应该取消任务的问题，@wangq8 in #17769
* 修复（go-agent）：在#17768中通过@Hz-186规范画布工具名称
* 修复：通过 #17761 中的 @buua436 规范遗留解析器配置
* 修复（go-models）：为 DeepSeek 和 Azure OpenAI 流添加stream_options.include_usage，由 @jay77721 在 #17756 中添加
* feat(go-models)：将第 6 批模型驱动程序迁移到统一的使用记录，由 @jay77721 在 #17775 中完成
* feat(serenedb)：添加 SereneDB 文档存储引擎（Go + Python 连接器），由 @deadtrickster 在 #17375 中添加
* Go：@JinHai-CN 在 #17771 重构 dao 和实体
* 删除 #17783 中 @JinHai-CN 的文档
* 修复（go-models）：在 #17778 中由 @jay77721 记录没有 chatConfig 的 Novita 流媒体使用情况
* 修复：#17766 中 @Haruko386 的代理日志返回零总数
* 修复：#17792 中的 @buua436 将猛禽节点目标与输出限制分开
* 修复（文件管理器）：在链接到数据集对话框中解析知识库名称，以便由 @dcc123456 在 #17781 中进行正确的乐观更新
* 修复：无法选择从模板创建的代理的检索算子的数据集。通过 @cike8899 在 #17760
* 修复：在 #17777 中通过 @euvre 将文件链接到数据集时允许空 kb_ids
* 修复（go-api）：在 #17776 中@euvre 更新时拒绝重复的 MCP 服务器名称
*修复（go-agent）：通过#17791中的@Hz-186保留实时流增量
* 修复：增加内存中系统提示文本区域的高度。通过 @dcc123456 在 #17793
* 修复（api）：默认分隔符必须是真正的换行符，而不是 @deadtrickster 在 #17591 中的 r"\n" 转义符
* 让 DELETE /datasets 到专用线程以避免阻塞其他 APIs by @wangq8 in #17796
* 修复：通过@euvre 在 #17770 中通过 DashScope OpenAI 兼容端点实现 Tongyi-Qianwen TTS
* GO CLI：通过 @myf-bee 在 #17795 添加空企业 dao 函数
* refactor(go-models)：将剩余的 OpenAI 兼容驱动程序迁移到共享 HTTP 管道，由 @jay77721 在 #17787 中完成
* 修复（go-ingestion）：将最后一个组件输出 JSON 作为 @euvre 在 #17786 中的调试日志 END 消息
* 修复：从模板创建的代理操作员的工具图标不可clickable。通过 @cike8899 在 #17794
*修复：允许团队成员在#17798中通过@buua436更新共享数据集
* 修复：无法控制在 #17785 中 @Haruko386 启用聊天中的思考
* 修复: #17801 中 @Haruko386 可以上传大于 10MB 的文件
* 重构：使 wiki 和 Web 可搜索。通过 @KevinHuSh 在 #17789
* 修复：让删除数据集/文档到专用线程以避免在 #17800 中被 @wangq8 阻塞其他 API
* Go：@JinHai-CN 在 #17807 中引入 content_length 和 max_output
* 构建（deps）：由 @dependabot[bot] 在 #17806 中将 aiohttp 从 3.14.1 提升到 3.14.3
* 重构（摄取/任务）：在 #17802 中 @xugangqiang 在 ProcessChunksForPipeline 中将 kb_id 作为单个字符串发出
* 修复(elasticsearch/test): make -tags 集成层由 @xugangqiang 在 #17811 中编译
* GO CLI：通过@myf-bee在#17812修改企业dao功能
* 重构（摄取）：在引擎写入边界处拥有 kb_id（删除生产者标记），由 @xugangqiang 在 #17818 中编写
* 修复：将 Mistralai 迁移到 2.x 并修复 CVE-2025-67221（或 json）（由 @rayhanest 在 #17810 中修复）
* 文档：删除 @yardenshoham 在 #17819 中已退休的 Go 报告卡徽章
* feat(chat): 在 #17813 中添加 @ethan7zhanghx 的 Querit 网络搜索提供商
* 文档（api）：正确检索丢失数据集 ID 错误（@RerankerGuo 在 #17820 中）
* 修复@wangq8 在 #17816 中提取雅虎股票代码的问题
*修复（api）：在#17236中由@deadtrickster减少SDK重新解析/停止解析上的知识库计数器
*修复（list-filter-bar）：通过@dcc123456在＃17814中纠正嵌套过滤器以修剪不匹配的子项
* 功能：从提取运算符中删除 pageindex 选项。通过 @cike8899 在 #17826
* 修复：在 wiki 模板的自定义选项之间来回切换导致说明消失。通过 @cike8899 在 #17805
* 修复：#17833 中 @yingfeng 切换摄取管道时抛出异常
* 修复：分隔符是块边界，在 #17808 中@xugangqiang 删除 token_size 原子分割（默认为 OVER_CAP）
* 修复：#17828 中@wangq8 在 ragflow 服务器聊天频道中无法很好地处理 SIGTERM
* Go: 在#17837中添加@JinHai-CN的软指纹框架
* 修复（分块）：将 Go 令牌合并与 Python OVER_CAP 和分隔符边界对齐（由 @xugangqiang 在 #17835 中）
* 修复：图形探索错误。通过 @KevinHuSh 在 #17829
* 修复：在 #17832 中@Lynn-Inf 的列表数据集 api 响应中显示嵌入模型名称
* 重构(chunker)：将allowBoundaryOverflow bool 替换为#17851 中@xugangqiang 的MergeStrategy 枚举
* 壮举：从官方文档填充 content_length 和 max_output by @jay77721 in #17836
* 壮举：在 #17839 中由 @jay77721 将 all_models.json 更新为 content_length + max_output
* 修复(go-agent): 在#17845中通过@Hz-186完成检索组件
* 修复: #17428 中@euvre 无法保存数据集标签文件设置
*修复（知识库）：在#17842中@dcc123456在数据集标签中显示嵌入模型友好名称
* 修复：在代理卡上的标签上添加图标，以区别于wiki卡类型。通过 @cike8899 在 #17847
* 修复：在 #17849 中由 @buua436 正确传输代理推理和答案
* 修复：从数据集设置页面中删除 CompilationTemplateFormField。通过 @cike8899 在 #17852
* Go：在#17861中添加@JinHai-CN的数据库访问上下文
* 文档：通过@Yannnnnnnny 在 #17870 中更改数据源指南文档
* CI: 修复合并到主目录，取消显示失败，@myf-bee 在#17869
* 壮举：在文档查看器中添加更多文件类型预览支持，由 @dcc123456 在 #17872 中添加
* 修复：代理浮动对话框中引用的悬停卡未完全显示。通过 @cike8899 在 #17867
* 修复：在一张多聊天卡中应用模型配置不再覆盖同级卡（@dcc123456 in #17866）
* 修复（chunker）：从主分割和子分割上的块文本中删除分隔符，由 @xugangqiang 在 #17868 中完成
* 修复 go 生成的令牌在 python - 2 (#906) 中由 @wangq8 在 #17875 中过期的问题
* Go：与#17882中@JinHai-CN的EE对齐
* 修复：在 #17227 中@taek105 跨 VisionFigureParser 路径尊重数据集语言
* 修复（deps）：将 Werkzeug 升级为 3.1.8，以修复 @hippozjs 在 #17884 中的间歇性多部分 CRLF 损坏
* 修复(chunker): 保持超大文本/Markdown 单元完整(OVER_CAP 对齐) by @xugangqiang in #17854
* 测试（任务）：在 #17841 中 @xugangqiang 进行的 #17739 全局合并后预计有 1 个块
* 修复：对外共享的代理对话框页面显示下载按钮。通过 @cike8899 在 #17880
* 修复：通过工具提示增强代理标签显示，以获得更好的可见性，@dcc123456 在 #17879 中
*修复：使用@buua436在#17859中更新的RAPTOR选项来生成技能
* 修复：#17857 中的 @jay77721 从通用 OpenAI 兼容请求构建器中删除 max_tokens
* feat(agent-list)：支持多选画布类别过滤，由@dcc123456在#17843中实现
* 修复（代理）：使全局变量表单字段对 #17883 中@dcc123456 的 i18n 语言更改做出反应
* 修复：通过 #17871 中的 @buua436 的关键字过滤 wiki 工件
* 修复：调整THINKING_MODES的ExecutionStrategy。通过 @KevinHuSh 在 #17862
* 修复（chunker）：在 #17873 中 @bigfish-emily 在 mergeByTokenSizeFromJSON 中删除死原子分割路径
* 壮举：@yuzhichang 在 #17881 中使用调度程序驱动的数据集编译进行 Go 知识编译器
* 修复：纠正@midilandlu 在 #17887 中的 Tongyi-Qianwen 国际端点拼写错误（兼容型号 -> 兼容模式）
* 文档：修复快速入门中损坏的沙箱链接，由 @richboyneedcash 在 #17898 中修复
* 恢复 @JinHai-CN 在 #17897 中的“壮举：使用调度程序驱动的数据集编译的 Go 知识编译器”
* Go: 修复@JinHai-CN #17899 中的心跳日志
* 修复（模型部分）：推迟自动获取目录，直到 @dcc123456 在 #17804 中为自托管提供程序设置了 base_url
* 修复：在 #17891 中分割 wiki 模板指令和 @buua436 的示例
* 修复：嵌入式/共享代理聊天失败，@euvre 在 #17831 中检索查询解组错误
* 修复（解析器）：在 #17856 中 @xugangqiang 合并 HTML 片段和 PDF 框时保留真正的换行符
* 修复：通过@rayhanest 在 #17903 中将 cbor2 限制为 >=5.9.0 来修复 CVE-2026-26209
*壮举：将batch_size添加到所有嵌入模型配置中，由@jay77721在＃17877中
* 壮举：将batch_size添加到all_models.json中的嵌入模型中，由@jay77721在＃17878中
* Go: #17908 中 @JinHai-CN 删除部分 max_tokens
* 修复 #17895 中 @wangq8 的代理聊天中附件不生效的问题
* 修复（文档预览）：在 #17912 中 @dcc123456 预览之前从 xlsx 中剥离 WPS DISPIMG 公式
* Go：@JinHai-CN 在#17917 中重构
*修复：允许在#17915中重新创建@buua436删除的模板组
* refa：通过@buua436在#17910中统一wiki示例命名
* 修复（文档预览）：使 ExcelCsvPreviewer 适应 #17906 中 @dcc123456 的容器大小调整
* Go：修复@JinHai-CN #17918 中的大量警告
* 修复：在 #17834 中@euvre 调整输入框大小时保持代理聊天历史记录固定
* 修复：数据流日志表显示 Go 模式下之前运行的日志，由 @euvre 在 #17790 中提供
* 修复(web): 文件列表总计数与 #17747 中 @euvre 显示的行不匹配
*修复：隐藏恢复解析器选项由@buua436在＃17923
* Go: 修复@JinHai-CN 在 #17922 中未使用的检查
* 修复：在 #17932 中 @Lynn-Inf 的列表内存 api 响应中显示 embd_name
* 测试（chunker）：在合并时将非文本段锁定为独立（关闭＃17889）由@xugangqiang在＃17896中
* 重构（任务）：将解析器 page-cap 覆盖覆盖到管道包中，由 @xugangqiang 在 #17905 中
* 重构（go）：从 TokenChunker 中删除死原子分裂助手，由 @xugangqiang 在 #17920 中进行
* 修复（tokenizer）：将 important_kwd 拆分对齐为英文逗号（DSL 奇偶校验，A2），由 @xugangqiang 在 #17928 中进行
* Go 知识编译器，由 @yuzhichang 在 #17913 中进行调度程序驱动的数据集编译
* 修复（go）：通过 @xugangqiang 在 #17926 中将子分隔符模式与反引号条+符文顺序统一起来
*修复（go-models）：通过#17919中的@Hz-186验证嵌入请求限制
* 修复（数字输入）：通过 #17921 中的 @dcc123456 改进对超出范围输入的值处理
* 壮举：在 #17930 中添加 @dcc123456 的 json 文件预览和图标
* 修复（代理）：#17927 中的 @dcc123456 关闭聊天表时隐藏日志表
* 修复（树选择）：允许在 #17934 中的 @dcc123456 搜索期间折叠父节点
* 修复：在 #17931 中记录 @buua436 生成的 wiki 页面版本
* 修复 #17936 中 @wangq8 解析大文件后 ragflow 服务器挂起的问题
* 重构（任务）：折叠重复的调试结果助手，由 @xugangqiang 在 #17937 中编写
* 壮举：在 #17925 中添加 @dcc123456 的 html 文件类型图标
* 修复：#17946 中 @Lynn-Inf 识别解析方法 `table` 中的数据类型
* 修复（设置模型）：保存的实例 api_key 编辑不会触发 #17942 中 @dcc123456 的保存
* 通过@yingfeng 在 #17900 中完善代理搜索
* feat[Go]：在#17890中完成@Haruko386的数据同步器基础
* 修复（内存）：在 #17956 中通过 @dcc123456 在表单字段中显示 embd_name 并回退到 embd_id
* 重构：将 TruncateRunes 提取到内部/实用程序并修复集成构建 (#17938) by @xugangqiang in #17944
* 修复（chunker）：根据运行总和决定令牌合并，而不是由 @xugangqiang 在 #17948 中重新令牌化连接
* 修复（解析器/块）：删除 @xugangqiang 在 #17939 中的 CompileDelimiterPatternList 活动条目的重复数据
* 重构(go)：清理 TokenChunker 分隔符路由和子应用程序，由 @xugangqiang 在 #17954 中完成
* 重构[Go]：删除分块器死代码并修复陈旧/错误描述符（L1/L2/L3），由@xugangqiang 在＃17960 中
* 修复：开始新对话；聊天结束后，会出现一个额外的对话条目。通过 @cike8899 在 #17964
* 修复：@cike8899 在 #17965 中对 wiki 实体类型进行重复数据删除
* 修复（nginx）：在 python conf 中使用 127.0.0.1 以避免约 1 秒的 IPv6 回退延迟，@attention-ai-yee 在 #17909 中
* 修复: #17972 中 @buua436 优化时间轴编译模板
* 修复：删除后端返回的 `pageIndex` 数据中的前导和尾随空格。通过 @cike8899 在 #17967
* feat[Go]：@Haruko386 在 #17969 中实现数据源 gmail 并测试剪枝
* 修复：在 #17963 中保留 @buua436 的页面索引章节块出处
* 修复（markdown）：在 #17971 中@dcc123456 在内部查看器中打开非 PDF 文档引用
* 修复@wangq8 在 #17966 中生成图表的错误
* 修复：#17978 中 @Lynn-Inf 的验证消息
* 重构：在形式化答案的同时检查证据。通过 @KevinHuSh 在 #17951
* 修复（i18n）：通过 #17974 中的 @dcc123456 澄清 selectAll 标签仅选择当前页面
* 修复：Clicking WikiCommitModal 上的确认按钮不会验证表单。通过 @cike8899 在 #17981
* 修复：wiki 模板的 Markdown 编辑器中源代码模式的高度太小。通过 @cike8899 在 #17982
* 修复：在 #17977 中拒绝 @buua436 重复的聊天参数键
* 壮举：在 #17984 中添加 @buua436 的代理过滤器计数
* 修复（go）：删除无内容块并在#17970中由@xugangqiang在Tokenizer中无条件设置chunk_order_int
* 修复（模型）：通过 #17986 中的 @dcc123456 简化本地 LLM 配置并对齐模型类型值
* 修复：隐藏 Markdown 编辑器中的“添加链接”按钮。通过 @cike8899 在 #17992
* 修复：通过版本视图访问的 wiki 内容的链接不可 clickable。通过 @cike8899 在 #17987
* 将附件内容附加到@wangq8在#17993中的最后一条消息中
* 修复（文档预览）：通过 #17955 中的 @dcc123456 在 ExcelCsvPreviewer 中处理命名空间前缀的 xlsx
* 修复：在 #17983 中处理 @Lynn-Inf 消息中不成对的 <>
* 重构（chunker）：将 delimiter_mode 收敛到 {delimiter, one}，在 #17979 中通过 @xugangqiang 删除 token_size
* 修复（重新排名）：通过 @alex-makang 在 #17988 中为所有型号设置 NvidiaRerank base_url
* 修复：保留选定的行 ID，而不按当前列表过滤 #17994 中的 @dcc123456
* 功能：搜索时间线节点。通过 @cike8899 在 #17996
*修复：在#18000中按@buua436的句子流代理tts音频
* 修复 @wangq8 在 #17998 中的 think 答案
* test(token_chunker): 从 @xugangqiang 在 #17997 中的定界符模式测试中删除不支持的 chunk_token_size=0 情况
*壮举（knowledge_compile）：具体化wiki页面图（wiki_entity/wiki_relation）由@yuzhichang在#17976
*修复：通过@buua436在#18004中改进流媒体代理tts
* 修复：通过将 azure-core 限制为 >=1.38.0（由 @rayhanest 在 #18003 中修复 CVE-2026-21226）
* 修复：允许 OpenAI-API 兼容模型作为租户默认模型（@euvre 在 #17968 中）
* 修复（块）：将 <img> 标签渲染为转义文本，以防止 #18007 中的 @dcc123456 跟踪
* 修复#18008中@wangq8的中等思维聊天失败的问题
* 修复(chunker): 统一 TokenChunker 合并并删除 Python JSON 路径中的坐标标签，@xugangqiang 在 #18002 中
* 修复（解析器/电子邮件）：将元数据/text_html 发射与 @xugangqiang 在 #18005 中的 Python 流合约对齐
* 对代理搜索进行更稳定、充分的检查，由 @yingfeng 在 #17962 中完成
* 修复（摄取）：使文档/KB 计数器应用程序在每次运行时具有幂等性，由 @deadtrickster 在 #17995 中完成
* 杂务（rag/app）：删除 #17943 中 @skbs-eng 的杂散调试 print() 调用
* 修复：从 #18006 中@Lynn-Inf 的列表结果中排除未经授权的内存/数据集
* 修复：在 #18029 中添加 @Lynn-Inf 的 zhipu 新模型
* 修复 #18030 中 @wangq8 的 naive Ask 报告错误
* 修复（api）：将内部 RetCode 值映射到 #18009 中 @anneheartrecord 中的 build_error_result 中的有效 HTTP 状态
* 使用 @yingfeng 在 #18028 中的 LLM 草案完善充分的检查
* 修复代理聊天在聊天机器人中不起作用的问题，由 @wangq8 在#18035 中修复
* 修复（数据集）：#18031 中的@dcc123456 在批量操作栏可见时缩小表格高度
* 修复：通过@buua436在#18033中处理数据集结构中的禁用文档
* Go: 通过@JinHai-CN 在 #18032 修复环境变量
* 在 #17780 中添加 @hnwyllmm 的 OceanBase 和 SeekDB Go 文档引擎
* 通过@wei5433575 在#15194 中更新logic-hooks.ts
*测试：通过#17957中的@zjm11902扩展/dify/retrieval单元测试覆盖范围
* 修复：在 #16920 中通过 @heimoshuiyu 对齐 LocalAI 视觉构造函数参数
* 杂务：删除 @xugangqiang 中的 PARSER_ALIGNMENT_HANDOFF.md #18045
* 修复（摄取）：将 Extractor call() 拆分为 callRaw/callText/callStructured，由 @jay77721 在 #18038 中实现
* 杂务（deps）：由@dependabot[bot]在#18048中将pypdf从6.14.2提升到6.15.0
* 修复(分享): 分享页面的语言会导致原网站语言改变。通过 @dcc123456 在 #18043
*修复：防止空模型警告模式在#18046中@dcc123456确定后保持打开状态
*修复（token-chunker-form）：通过#18047中的@dcc123456设置块令牌大小滑块的最小值
*修复（搜索页面）：添加overflow-x-auto和min-width以防止布局问题由@dcc123456在＃18050中
*修复（聊天）：在＃18037中通过@dcc123456切换对话时保留正在进行的SSE流
* 修复：从 #18041 中的@buua436 的数据集结构中排除禁用的文档
* CI：由 @myf-bee 在 #18039 中优化每次安装的工具
* Go：修复 go 上下文，由 @JinHai-CN 在 #18052 中修复
* 杂务（wiki）：删除 @RerankerGuo 在 #18020 中的杂散调试打印
* Go：修复@JinHai-CN 在 #18058 中的警告
* Go: 通过@JinHai-CN 在 #18060 修复上下文
* 修复：#18044 中 @wangq8 限制 keywords_similarity_weight [0,1]
* 修复：#18051 中@wangq8 将 max_retries 限制为非负整数
* 修复：在#18054中通过@Lynn-Inf设置列类型优先级
* 修复@wangq8 在 #18056 中添加代理更新验证检查
* Go: 通过@JinHai-CN 在 #18061 修复上下文
* 修复：#18063 中@Lynn-Inf 删除技能节点时更新树
* TS：修复@JinHai-CN 在#18067 中的评论
* 修复（分词器）：@xugangqiang 在 #18011 中的引脚对齐保护
* 修复（解析器）：当 @xugangqiang 在 #18014 中存在表格时，不要将 Markdown 文档折叠成一项
* Go: 添加上下文来测试 @JinHai-CN #18070
* TS: 在#18064中添加@JinHai-CN的apache许可证
* 修复：通过 #18069 中的 @dcc123456 删除未使用的常量文件
* 修复（搜索）：在 #18072 中通过 @dcc123456 检索文档更改块时传递选定的 pageSize
* 修复（摄取）：避免在 #18034 中 @jay77721 的提取器提示中重复的块文本注入
* Go: 通过@JinHai-CN 在 #18076 修复上下文
* 在 #18080 中由 @wangq8 修复 max chunk_ids = 100
* 修复：#18074 中 @wangq8 将 xxx_ids 限制为 100
* 修复：更新了复制按钮的文字颜色样式。通过 @dcc123456 在 #18062
* 修复（浮动选择工具栏）：根据#18053中的@dcc123456的可用空间调整下拉方向
* 修复：默认情况下，新会话将自动继承前一个会话的消息。通过 @dcc123456 在 #18078
* 由 @yingfeng 在 #18057 中完善代理搜索和编排循环
* 修复：创建wiki模板并删除模型实例后，默认模型显示为空，但仍然可以成功编辑和保存。通过 @cike8899 在 #18075
* 在 #18083 中重构 splitByTokens 和 @yuzhichang 的wire wiki增量编译
* 修复：通过@buua436在#18055中改进结构关键字搜索
* 修复(web): 防止数据源日志表中的列移位 by @euvre in #17940
* 修复：将“令牌大小”选项卡的内容从令牌分块运算符移动到“分隔符”选项卡。  #17888 由 @cike8899 在 #17975
* 修复：Click 空白区域阻止UpdateLogSheet 关闭。通过 @cike8899 在 #18085
* TS：@JinHai-CN 在 #18081 中的更多许可声明
* feat[Go]：监控 NAT 并重构并发逻辑，由 @Haruko386 在 #18049 中完成
* 修复：将长日志消息包装在代理管道日志表中，由 @euvre 在 #17782 中
*功能：重命名代理日志导出按钮以导出当前页面由@dcc123456在＃18090
* 修复：在 #18094 中由 @dcc123456 在会话列表标题中显示过滤的会话计数
* Go：修复 @JinHai-CN 在 #18097 中的上下文和警告
* 修复在 #18104 中 @wangq8 将用户设置为非活动状态时强制注销用户的问题 (#893)
* 修复：删除 #18105 中 @Lynn-Inf 一些已弃用的模型
* 修复：如果一条消息包含多个文件，需要自动换行显示。通过 @cike8899 在 #18109
* 修复：取消时间线任务后，获取最新时间线数据的问题。通过 @cike8899 在 #18102
*修复：稳定代理日志handleSearch并在#18087中@dcc123456重置时保留page_size
* 测试（chunker）：在 #17735 中添加 @xugangqiang 的黄金奇偶校验工具、固定装置和实时 Go<->Python 工具
* 通过#18096中的@qinling0210生成导航、导航搜索
* 杂务（deps）：由 @dependabot[bot] 在 /web 中将 fast-uri 从 3.1.0 提升到 3.1.5 #18103
* 测试（解析器）：在#18098中添加@xugangqiang共享的golden-doc +对齐助手
* 恢复@yingfeng 在 #18108 中的“优化代理搜索和编排循环”
* 修复：#18110 中 @Lynn-Inf 的 xinference asr
* 修复：通过 #18112 中的 @dcc123456 共享 SafeImg 组件清理 markdown 中的 img 标签
* 重构：在 embed-app-modal 中使用 CopyToClipboard by @dcc123456 in #18115
* 将 MWS 模型与 API 支持集成，并通过 @nikminer 在 #17959 中增强聊天功能
* Go: 通过@JinHai-CN 在 #18118 修复上下文
* 修复：@Haruko386 在 #18068 中聊天频道启动出现错误时返回错误
* 重构（解析器）：使 Markdown 成为黄金元驱动，删除 @xugangqiang 的生成器脚本 #18125
* Go：修复上下文，第 2 部分，作者：@JinHai-CN，#18133
*修复：通过@buua436在#18130中改进增量wiki编译
* 修复：数据集级树也可以查看文件级数据。由 @cike8899 在 #18123
* 修复：从 wiki 模板中删除模型。通过 @cike8899 在 #18119
* 修复（沙箱）：更新 Tenki SDKs 并删除 @camcalaquian 在 #18117 中删除的 project_id
*修复（mistral）：在#18021中@RerankerGuo的图形提示中尊重数据集语言
* 修复：将 editdistance 替换为 rapidfuzz，以获得 python 3.13 滚轮支持（@anneheartrecord 在 #18132 中）
*修复：通过将curl_cffi限制为> = 0.15.0（由@rayhanest在＃18134中修复CVE-2026-33752）
* 壮举：wiki 增量模式 A/B，具有持久重写屏障，由 @yuzhichang 在 #18122 中编写
* 修复（pdf/layout）：将仅 KMeans 列检测替换为 @xugangqiang 在 #18023 中的间隙 + KMeans 混合
* 重构（解析器）：保留 HTML <table> 结构（内联 + 结构化项），由 @xugangqiang 在 #18129 中实现
* 修复：在 #17892 中@taek105 在 Go 视觉调度中尊重数据集语言
* 修复（data_source）：@AnnaSuSu 在 #17045 中的范围表和链接状态到 format_document_soup 中的祖先
*修复：防止@dcc123456在#18124中之前的代理聊天回复中出现过时的加载状态
* 在 #18126 中为 @wangq8 编译生成的块添加 doc_name
* 修复：通过@euvre 在 #17911 中使 txt 文件预览可通过鼠标滚轮滚动
*更新@qinling0210在#18139中的无限json_extract_string用法
* 跳转到无穷大 v0.7.3 并更新 go sdk 版本（@qinling0210 在 #18137 中）
* feat（组件）：在#18091中添加@jay77721共享的消息适配包
* feat(dao)：在#18106中添加@jay77721共享的ResolveModelContentLength帮助器
* 重构（解析器）：将 TextParser 与 #18128 中 @xugangqiang 分割的 Python _code 分隔符对齐
* 尊重 @mkaaad 在 #18152 中对 NVIDIA 端点的显式模型 URL 覆盖
* 修复：清理 wiki 蓝图默认指令文本（由@euvre 在 #17893 中）
* 修复：在#17779中通过@euvre在当前文件夹子树中递归搜索文件
* 修复（web）：在 #17773 中由 @euvre 在语言环境中添加缺少的“常规”块方法描述
* 修复：在 #17714 中@euvre 解析租户默认模型时删除静态目录检查
* feat(web): 在 #17741 中 @euvre 按 Enter 键提交检索测试表单，按 Shift+Enter 键按换行符
* 修复(mcp): #18073 中 @euvre 删除和模式切换后重置批量选择
* 修复@euvre 在 #17827 中的嵌入对话框语言标签误译
* 修复(web): 将 Go chunk 方法下拉顺序与 @euvre 中的 Python parser_ids 对齐 #18127
* Go：通过 @euvre 在 #18111 中为 GET /agents 实现 ?type=filter 分支
* Go：清除过时的任务取消标志，以便在取消运行后首先重新解析 @euvre in #17708
* 修复：#18140 中的 @dcc123456 防止在会话切换期间出现过时的对话消息
* 功能：数据集级树视图支持搜索。通过 @cike8899 在 #18138
* 修复：从知识库表中删除记录会删除对应的选定记录。由 @cike8899 在 #18142
*修复：当@dcc123456在#18158中选择管道模式时，跳过内置解析器验证
* 修复：通过 @euvre 在 #17767 中启用 Go 服务器中旧版 .doc 文档的预览
* 重构（代理）：在 #18092 中 @jay77721 在 LLM 组件中使用共享消息适配
* 修复（摄取）：在 #18095 中通过 @jay77721 调整提取器和标记器提示对 content_length 进行建模
* 修复：隐藏 #18153 中 @cike8899 对话中嵌入页面的重置按钮
*修复：重新排序用户设置侧边栏菜单项并通过#18155中的@dcc123456更新默认重定向路径
* 修复：通过 @euvre 在 #17439 中保持主页导航中的页面大小
* 测试：通过 @euvre 在 #17646 中发布 Go 代理的 test_documents_metadata_update_path
* 修复（代理）：让 LLM 提示适合 #18093 中 @jay77721 建模 content_length
* 通过 @yuzhichang 在 #18161 中将数据集级别的知识编译为带有变体调度的 Go
* 文档（摄取）：纠正 @xugangqiang 在 #18147 中过时的解析器组件范围注释
* 修复（pdf/布局）：恢复标题桥接和无装订线的双列（2D 救援 + L3），作者：@xugangqiang，#18150
* 修复（解析器）：由 @xugangqiang 在 #18168 中按文档顺序发出单个结构化表项
*修复：在#18172中@dcc123456在代理聊天中继续加载流媒体助理消息上的指示器
* 修复：保留 API 返回的文本格式。通过 @cike8899 在 #18167
* 修复（摄取）：通过@euvre 在 #18173 中删除损坏的内置 Resume 管道
*修复：通过@buua436在#18164中改进增量wiki编译
* 功能：调整代理列表样式。由 @cike8899 在 #18163
* 修复(dao): 遵守租户配置的上下文窗口覆盖 (D22/D23) by @jay77721 in #18171
* 文档：删除不必要的文档并调整页面布局，由 @Yannnnnnnny 在 #18146 中进行
* 修复：Cli禁止代理的代码工具节点。通过 @cike8899 在 #18165
*修复（摄取）：在#18175中由@jay77721去除提取器元数据路径中的中间文本思考块
* 文档：记录 @iridescentWen 在#18169中恢复解析中的tenant_id参数
* 测试（解析器）：在 PDF 后处理中固定数字感知阅读顺序，作者：@xugangqiang，#18178
* feat(agent): 在 #18156 中添加 @ethan7zhanghx 的 Querit Contents 工具
* 修复（chunker）：在 TokenChunker 中遵守裸露（非反引号）分隔符（#17723），作者：@xugangqiang in #18182
* 将数据集导航和结构图修复到 Go，由 @yuzhichang 在 #18183 中合并代理列表
* 修复（web）：通过@dcc123456在#18180中的路由更改中保持单聊SSE流的活动
* 修复：允许@euvre 在 #18166 中一起搜索共享基本嵌入模型的数据集
* 重构：删除简历 (CV) 工作流程 DSL 模板和 Go 处理代码（@jay77721 在 #18177 中）
* 壮举：为 NVIDIA 嵌入添加每个模型的 URL 覆盖，并由 @mkaaad 在 #18154 中对模型进行重新排序
* 修复：通过 #18191 中的@Lynn-Inf 降低模型验证成本
* TS: 修复@JinHai-CN #18199 中的标签文本
* 重构（常见）：将 </think>-strip 统一为共享的 StripThinkTrailing 助手，由 @jay77721 在 #18179 中实现
* 修复：解析结果日志页面中的文件名不显示。通过 @cike8899 在 #18194
* 修复(web): 在 #18202 中由 @dcc123456 重新生成单聊天答案作为新回合
* 杂务（网络）：删除 #18204 中 @dcc123456 未使用的 somark buyUrl 语言环境字符串
* 修复：在 #18200 中通过 @buua436 对齐共享搜索结果总数
*修复（代理）：在#18197中@euvre在聊天/完成中接受一维文件线形状
* 修复代理聊天低/中无法回答#18196中@wangq8的表格内容
* 重构：从租户信息中删除模型 ID，以支持默认模型字典 (#966) by @wangq8 in #18209
* 壮举：在 #18088 中添加 @fioncat 的 UCloud 代理沙箱提供程序
* 文档：修复 @Apageoflove 的常见问题解答中损坏的 PaddleOCR 服务链接 #18207
* 修复（mineru）：在 #18188 中遵循 @ting-hong-shieh 的图形提示中的数据集语言
* 修复（测试）：在 #18018 中隔离 @RerankerGuo 导入的 token chunker
* 修复：编译器运算符的operator字段为必填字段。通过 @cike8899 在 #18212
* 修复：通过@cike8899在#18213中以纯文本格式显示搜索页面块
*修复（网络）：当@dcc123456在＃18214中删除正在进行的问题时中止流
*修复（网络）：在#18206中附加@dcc123456的问题之前，从服务器序言中播种新的对话
* 修复无效的查询字符串（例如？）将在#18217中由@wangq8进行错误搜索
* 修复(book): 在 #18203 中 @xugangqiang 的 naive 合并分支中保留 PDF 坐标标签
* perf(web): 停止在#18221中@dcc123456刷新的每个流上重新渲染整个聊天记录
* 在#18218中添加@qinling0210对agentic RAG的数据集导航搜索
* 修复：通过@buua436在#18181中细化结构图关键字搜索
* 修复：#18223 中@Haruko386 无法在代理中传递温度和 MaxTokens
* 在 #18201 中为时间线/图表/思维导图移植数据集级结构合并 @yuzhichang
* feat[Go]：#18176中@Haruko386在数据源同步期间从中断点恢复传输
* feat(cli)：通过 @mkaaad 在 #18195 中为用户 CLI 添加同步日志列表命令
* 将 #18231 中 @sarbojitrana 的 pgsty/minio 镜像替换为 pgsty/silo
* 修复：将 CI 中的 SiliconFlow 模型限制为 4 个免费模型（@Lynn-Inf 在 #18225 中）
*修复（网络）：在#18226中重新生成@dcc123456的答案时保留推理和互联网选项
* 修复: #18224 中 @cike8899 删除工具节点的右侧锚点
* 壮举：支持实体和主题 wiki 模式，由 @buua436 在 #18216 中提供
* 通过 @qinling0210 在 #18228 中完善代理 RAG 阶段日志记录
* 添加 MySQL 和 PostgreSQL 连接器到 Go 同步器，由 @mkaaad 在 #18162 中添加
* Go: 在 #18235 中@JinHai-CN 添加初始化无限失败时的错误日志
* Go：由@JinHai-CN 在#18240 中重构嵌入并重新排序界面
* 修复(chunker): 将重叠头 PDF 位置携带到新块中 (#18148) by @xugangqiang in #18227
* 修复（web）：在#18238中通过@dcc123456在管理用户详细信息表中启用client分页
* 修复：拒绝 #18234 中 @Lynn-Inf 移动到当前位置的请求
* 重构（web）：从批处理操作中删除每个模型的复选框选择，由 @dcc123456 在 #18233 中进行
* 将代理搜索高/超研究循环移植到 Go by @yuzhichang in #18242
* 修复（解析器）：支持 .msg 解析并使电子邮件附件可通过 #18198 中的 @xugangqiang 检索
* 修复：从 wiki 编译中排除由 @buua436 在 #18261 中禁用的文档
* 修复：编辑文档切片需要显示 wiki 的更新按钮（@cike8899 在 #18267 中）
* 修复: #18266 中@euvre 将统一钱文 API 密钥 URL 更新到百联控制台
* 修复（web）：在 #18265 中@euvre 扩大 LLM 设置弹出窗口中输入的 max_tokens 数量
* 文档：添加编译文档并修复@Yannnnnnnny 在#18268 中的一些问题
* 修复：删除未使用的 wiki 模板页面。通过 @cike8899 在 #18275
* 修复了 DateTimeTzField 在驱动程序本机日期时间和不可解析值上崩溃的问题，由 @euvre 在 #18264 中修复
* 修复（web）：渲染 mp3/svg 的文件类型图标并回退到 @euvre 在 #18230 中的默认文件图标
* 修复（代理）：在 #18222 中@euvre 在持久代理会话消息中保留思考标签
* 修复：#18277 中 @Lynn-Inf 的转录响应中没有有效语音文本时返回错误
* feat(chunker)：为手动布局 PDF 添加 ManualChunker，由 @xugangqiang 在 #18272 中添加
* 修复：在#18121中@euvre将TokenChunker delimiter_mode“one”路由到Go摄取中的OneChunker
* 修复(web): 在聊天输入框中添加工具提示到网页搜索切换，由 @euvre 在 #18276 中实现
* 修复（web）：传递 pdf.js cMap/标准字体 URL，以便 CID 字体 PDF 在 @euvre 在 #18249 中的预览中呈现
* 修复：当同步没有由 @Haruko386 在 #18255 更新时返回文档总数
* feat[syncer]：在#18257中添加@Haruko386为RSS运行的检查点恢复
* feat[syncer]：在#18260中添加@Haruko386为Github运行的检查点恢复
* 修复：返回#18071中@Haruko386搜索结果的总数
* Go: 通过@JinHai-CN 在 #18291 修复上下文
* @cike8899 在 #18288 中允许折叠和隐藏代理的工具操作符
* 修复(web):范围答案加载占位符到@dcc123456在#18284中的最后一条消息
*修复（网络）：通过@dcc123456在＃18283中澄清批处理模型操作标签
* 修复(web)：使选定的代理探索会话在视觉上通过@euvre 在#18253 中清晰可见
* 修复（代理）：通过@euvre 在 #18252 中保持代理聊天侧边栏滚动容器可收缩
* 修复（go-agent）：将 sys.files 上传到 #18246 中@euvre 的视觉 LLM
* deepdoc：通过@xugangqiang 在 #18282 中将无损 PNG 而不是 JPEG 发送到 DeepDoc 推理服务
* 修复：如果该型号从供应商列表中删除，访问搜索和内存页面时会出现错误。由 @cike8899 在 #18270
* 修复：在 #18289 中 @buua436 在 python 后端隐藏 wiki 模式
* 修复：防止工具操作员被其他操作员拖拽连接。通过 @cike8899 在 #18290
* 修复（web）：在 #18215 中通过 @euvre 保留块卡内容中的前导空格
* Go：将取消解析错误与 Python 对齐，以获取 @euvre 在 #18245 中未启动的文档
* Go：修复上下文，第 2 部分，作者：@JinHai-CN，#18296
* 修复(web): 放大卡片“...”编辑按钮点击区域 by @euvre in #18262
* 修复：在 #18285 中通过 @buua436 增量跟踪 wiki 块的更改
* 修复：在 #18302 中通过 @dcc123456 隐藏 rerank 模型下的 top-k
* 修复：即使API没有返回任何文档数据，对话框也会显示引用的文档。通过 @cike8899 在 #18298
* 修复（web）：将排队的内存提取任务显示为待处理，而不是由@euvre 在#18297 中失败
* 修复（搜索）：当思维导图没有内容时显示诚实的空状态，@euvre 在 #18294 中
* 在导航树中搜索并将图形内容存储在 nav_doc 中 by @qinling0210 in #18303
* 修复：停止 @skbs-eng 在 #17686 中删除文档时出现的三个重复错误 (#17685)
* feat(syncer)：通过@mkaaad在#18256中添加REST API连接器
* feat(web)：通过#18345中的@dcc123456将当前用户固定到管理员用户列表的顶部
* 修复@qinling0210 在 #18348 中代理研究中并行声明中的 _routed_docs 泄漏问题
* 壮举：@mkaaad 在 #18349 中连接器出现不和谐
* 文档：修复常见问题解答和 HTTP API 参考中的无效内部链接，由 @yzxcj797 在 #18312 中提供
* 修复(tcadp): 在 #18336 中为 @Ricardo-M-L 的文档下载 HTTP GET 请求添加超时
* 修复（摄取）：将组件进度线通过 @euvre 在 #18356 中累积到 document.progress_msg 中
* 修复：增强表单提交错误处理并通过 #18351 中的 @dcc123456 更新重新排序表单字段前缀
* 修复：聊天页面切换重排序模型无法保存配置的问题。通过 @cike8899 在 #18357
* 文档：通过@Yannnnnnnny 在 #18358 中修复编译文档并更改页面布局
* feat(ingestion)：Go 中的端到端自动元数据（提取器合并、内置 UI、内置字段），作者：@jay77721，#18273
* 修复（pdf）：将 DLA 区域处理与 @xugangqiang 在 #18295 中的 Python 参考对齐
* deepdoc(pdf)：WarpCrop 去偏 + 基于分数的第 2 层旋转（与 Python 进行 OCR 奇偶校验），作者：@xugangqiang，#18299
* 修复（解析器）：将 Go 电子表格 HTML 与 Python 对齐，并通过 @xugangqiang 在 #18304 中强化标头检测
* 修复（摄取）：统一提取器提示占位符渲染和每块替换（@jay77721 在 #18355 中）
* 重构：在 #18364 中 @wangq8 的检索测试中不包括编译块
* 功能：将 wiki 相关翻译资源移至命名空间。通过 @cike8899 在 #18359
* 功能：添加qwen-3.8系列型号。通过 @Lynn-Inf 在 #18368
* 修复：通过 #18370 中的 @Lynn-Inf 正确获取内存大小缓存
* 修复：#18366 中@buua436 调整 Go 摄取进度和管道选择
*修复（网络）：从#18371中@dcc123456复制的答案中排除<think>推理块
* 修复（pdf）：仅当由 @xugangqiang 在 #18363 中替换为表格 HTML 时才删除文本框
* 修复：从模板创建的代理的开始操作符不显示模式。通过 @cike8899 在 #18367
* 修复（model_meta）：Ollama._get_api_key 处理 JSON-dict api_key，用于 @Harsh23Kashyap 在 #18321 中的验证路径
*修复（deepdoc）：删除低置信度垃圾DLA区域以匹配@xugangqiang在#18365中的Python
* 修复：恢复 #18376 中 @buua436 匹配的文档查询缓存
* 修复了 #18362 中 @xugangqiang 的跨页合并表删除连续行的问题
* 修复: 无法通过#18373中@Haruko386的ID搜索代理日志
* feat[syncer]：在#18350中由@Haruko386实现outlook数据源
* 修复[syncer]: 无法运行 #18344 中 @Haruko386 的修剪任务
* 重构：#18248 中 @questfever 将循环中的 Split 替换为更高效的 SplitSeq
* 修复（deepdoc）：修剪垃圾门注释，修复子测试事实错误，由 @xugangqiang 在 #18377 中删除重复的常量
* 修复(deepdoc): 在 LayoutRecognizer.forward 中应用 0.4 垃圾门，作者：@xugangqiang #18372
* 修复（ingestor）：在 #18369 中 @xugangqiang 停止在突发解析背压下丢弃任务
* 文档：修复韩语自述文件中的 Docker 安装链接，作者为 @Lem0nTea2002，位于 #18385
* 修复（代理/工具）：从 #18341 中 @ilya-bogin-keenable 从 `snippet` 读取 Keenable 结果内容
*修复（harness）：在Pregel中遵守节点和引擎重试策略，由@Lem0nTea2002在＃18388中
* Go：修复上下文，第 3 部分，作者：@JinHai-CN，#18390
* Feat：数据源测试连接以及统一的连接器验证，作者：@huang-aoqin 在 #14992 中
*修复：从#18382中的@buua436从块列表中排除已编译的工件
* 修复（web）：隐藏 OpenAI-API 兼容提供商的验证按钮，由 @dcc123456 在 #18380 中提供
* 修复（解析器）：在@xugangqiang 在 #18378 中进行跨页面重建之前，检查每个网格行，而不仅仅是第一个
* 壮举：@zws202606 在 #17703 中对 Gaussdb 进行了改编
* 修复（web）：在#18400中通过@dcc123456从提供者实例中删除模型之前进行确认
* 修复：通过 @euvre 在 #18406 中将 ZHIPU-AI API 密钥 URL 更新到新的 BigModel 控制台
* feat[syncer]：通过@Haruko386在#18281中添加统一连接器验证的连接测试
* feat(ingestion,web)：通过子选项卡、独立提示和元数据集成模块化提取器配置，由 @jay77721 在 #18383 中完成
* 修复：通过 @Lynn-Inf 在 #18407 中处理标题并按句子截断文档预览
* 修复：由 @Lynn-Inf 在 #18412 中正确纠正非 PDF 文档的块顺序
* 修复（pdf）：将 TSR 裁剪边距与 Python 对齐（固定 30px，而不是 3%），由 @xugangqiang 在 #18387 中实现
* 修复（代理）：关闭由 @var4dev 在 #18399 中封装在 MCPToolBinding 中的 MCP 会话
* 修复（deepdoc）：将表格方向评分与 @xugangqiang 在 #18401 中的 Python 识别置信度对齐
* 修复（deepdoc）：在 Go 表构建中添加孤行清理（与 Python 同等），由 @xugangqiang 在 #18402 中完成
* 杂务（表）：删除@xugangqiang 在 #18403 中陈旧的手动奇偶校验问题测试
* 重构：使页码可由#18409中的@wangq8读取
* 修复（deepdoc）：在 Go 表解析器中删除每个单元格的 OCR，以与 #18405 中 @xugangqiang 的 Python 对齐
* 修复：#18424 中@Lynn-Inf 将数据库版本设置为 v0.27.0
* 修复(web): 删除 #18421 中 @Haruko386 的语言环境文件的重复标签
* 修复: #18422 中 @wangq8 无法预览某些中文名称的 pdf
* 壮举：@mkaaad 在 #18379 连接器转到 webdav
* 修复（deepdoc）：将每个 PDF 框分配给与 @xugangqiang 在 #18410 中的 Python 匹配的单个表格单元格
* 修复（代理/工具）：将 DeepL 移植到 ToolBase，以便它可以作为 @immuhammadfurqan 在 #18395 中的代理工具
* 修复(web): 通过 #17323 中的 @tryeverything24 防止 docx 预览缩放跳过一个级别
* 通过 @wangq8 在 #18426 中使用额外的换行符修复父块
* 功能：从数据集配置页面中删除 `pageindex`。由 @cike8899 在 #18429
* 修复：块页面上“搜索”翻译不正确的问题。由 @cike8899 在 #18427
* 修复（web）：当元数据值保存被#18418中的@dcc123456阻止时，显示验证错误
* 杂务（deepdoc）：删除死的独立 DLA client，收敛于推理。Client by @xugangqiang in #18384
* 修复（deepdoc）：在 #18416 中 @xugangqiang 保留列数不匹配的跨页连续行
* 修复：通过@cike8899 在 #18419 中编辑 wiki 风格的文本
* 修复：在 #18322 中通过 @ump45nose 隔离提取 html 请求标头
* 修复：@Lynn-Inf 在 #18437 中验证错误消息
* 修复（代理）：使标记元数据可在代理列表中由@peewee92 在#18313 中搜索和排序
* document[syncer]: 在#18431中添加@Haruko386的syncer开发文档
* 修复（deepdoc）：将 Go 表头检测与 @xugangqiang 在 #18404 中的 Python（奇偶校验 #4）对齐
* 修复多模型聊天始终使用聊天模型，而不是使用#18439中@wangq8的传递模型
* 修复：在#18438中@qinling0210在元数据过滤器下推中使用Infinity connPool.get_conn()
* 修复(web): 在 #18411 中显示@euvre 对内置管道音频/电子邮件/知识编译器的介绍
*修复（网络）：从浮动聊天小部件副本中删除思考部分，由@dcc123456在＃18436中
* feat[syncer]：通过@Haruko386在#18423中实现概念数据源
* feat[Syncer]：在#18420中由@Haruko386实现Google Cloud Storage数据源
* feat(go-syncer)：添加 GitLab 数据源连接器以及 @mkaaad 在 #18425 中的检查点恢复
* CLI: 修复@JinHai-CN #18451 检查许可证的问题
* 修复：编译完成后两秒发起检查文件更改的请求。由 @cike8899 在 #18440
* 修复：通过 @Lynn-Inf 在 #18442 中将 qwen3.8-2.4t-a95b 的 enable_thinking 设置为 True
* 修复任务级别而不是文档级别的 pdf 取消，@wangq8 在 #18435 中的多个记录日志
* 修复任务时间不正确的问题，由 @wangq8 在 #18453 中完成
* 修复（agentic-rag）：将 high/ultra 的 max_parallel_agents 提高到 4，在 #18430 中@qinling0210 重复定位失败后使用网络搜索
* 修复（model_meta）：LocalAI._get_api_key 处理 JSON-dict api_key，用于@Harsh23Kashyap 在 #18314 中的验证路径
*修复（model_meta）：Base._get_api_key处理JSON-dict api_key用于模型列表验证路径由@Harsh23Kashyap在#18386中
* feat(title-chunker)：可配置的标记计数上限，由 @xugangqiang 在 #18455 中重新分割句子边界
* 修复：在 #18456 中由 @Sevenzuo 在 GaussDB 搜索中尊重minimum_should_match
* 测试：在 #18311 中添加 @ming1523 的文本和代码解析器到分块奇偶校验黄金
* 删除 #18443 中 @xugangqiang 的 noocr/SkipOCR 死代码路径和纯文本层奇偶校验测试
* 修复（deepdoc）：通过 @xugangqiang 在 #18452 中逐行检测+识别对表方向进行评分
* 修复推理在 #18457 中 @wangq8 在多模型聊天中不起作用的问题
* feat(MinerU):在#16703中添加@Aeovy对MinerU表和图像块分类的支持
* 修复：#18469 中的 @zloglevel 使 ScheduledTask 生命周期并发安全
* 修复（title-chunker）：在多字节上无损硬分割 + 由 @xugangqiang 在 #18476 中重新分割日志记录
* 修复（deepdoc）：将表头检测与 Python 对齐（#18404 后续），作者：#18454 中的 @xugangqiang
* 修复：获取Python版本提取器操作符的前端代码。通过 @cike8899 在 #18481
* 壮举：通过 @buua436 在 #18479 中改进 Go wiki 编译
* 文档（harness）：修复#18434中@Lem0nTea2002示例中的AgentCore导入别名
* 文档（harness）：修复@Lem0nTea2002在#18428中的包文档链接
* 测试：覆盖 #18211 中 @01JohnMa 的陈旧对话切换
* 修复：从模型供应商处删除在内存页面上选择的大语言模型会导致访问内存页面时出现错误消息。通过 @cike8899 在 #18486
* refa：删除#18488中@buua436的文档图快照有效负载
* 修复(web): 在 #18491 中通过 @dcc123456 在 NumberInput 中保留调用者 onBlur
* 在 #18490 中修复 @wangq8 的摄取管道子分隔符额外换行符
* 修复(llm): 默认情况下通过 extra_body by @D819 in #18241 禁用 DeepSeek V4 思考
* feat(syncer)：在 #18487 中添加@mkaaad 带有检查点恢复的 Bitbucket 连接器
* 修复：@mkaaad 在 #18489 中的连接器验证错误
* 修复了 [+-] 搜索导致 @wangq8 在 #18497 中的搜索崩溃的问题
* 重构（提取器）：跨数据集和管道统一 5 合 1 模块化架构，删除 #18432 中的 @jay77721 遗留的 field_name 和自定义提示
* 修复：允许 .bmp 在 #17830 中由 @hippozjs 在文件名类型白名单中上传
* 修复：不使用连接检查结果作为@Lynn-Inf 在#18492 中的模型验证结果
* 修复（deepdoc）：在 #18507 中@pangwangshu 在 Go 表单元格填充之前折叠重叠的 OCR 框
*修复（harness）：通过@Lem0nTea2002在#18496中对重试的Pregel任务强制执行并发限制
* 修复 #18503 中 @guominjia 解析空 Markdown 文档的问题
* 修复：清除聊天中选择的数据集的文件会导致聊天页面上出现错误消息。通过 @cike8899 在 #18510
* 文档：@wangq8 在 #18493 中的 0.27.0 release note
* 文档：更新自述文件和文档中对 v0.27.0 的版本引用（@asiroliu 在 #18500 中）

## 新贡献者
* @V1V1rus 在 #16732 中做出了第一个贡献
* @taek105 在 #16806 中做出了第一个贡献
* @boskodev790 在 #16692 中做出了第一个贡献
* @rayhanest 在 #16907 中做出了第一个贡献
* @LauraGPT 在 #16473 中做出了第一个贡献
* @RahilOp 在 #16932 中做出了第一个贡献
* @77zane 在 #16844 中做出了第一个贡献
* @iwasaki1112 在 #16974 中做出了第一个贡献
* @chuenchen309 在 #16949 中做出了第一个贡献
* @maybehokori 在 #16892 中做出了第一个贡献
* @deadtrickster 在 #16958 中做出了第一个贡献
* @zcxGGmu 在 #17009 中做出了第一个贡献
* @Yurii214 在 #17064 中做出了第一个贡献
* @muhzuhaib 在 #17239 中做出了第一个贡献
* @ebarkhordar 在 #17282 中做出了第一个贡献
* @futurehua 在 #17059 中做出了第一个贡献
* @WOLIKIMCHENG 在 #17290 中做出了第一个贡献
* @amir-rezaei 在 #17350 中做出了第一个贡献
* @Xavierando 在 #17057 中做出了第一个贡献
* @eugeneBackDev 在 #17311 中做出了第一个贡献
* @Gouravm1523 在 #17379 中做出了第一个贡献
* @robertkeus 在 #17447 中做出了第一个贡献
* @learnprogram2 在 #17305 中做出了第一个贡献
* @jay77721 在 #17480 中做出了第一个贡献
* @abhayishre 在 #17380 中做出了第一个贡献
* @anupamme 在 #17498 中做出了第一个贡献
* @Yannnnnnnny 在 #17358 中做出了第一个贡献
* @ethan7zhanghx 在 #17548 中做出了第一个贡献
* @iridescentWen 在 #17639 中做出了第一个贡献
* @lntutor 在 #17662 中做出了第一个贡献
* @yardenshoham 在 #17819 中做出了第一个贡献
* @RerankerGuo 在 #17820 中做出了第一个贡献
* @hippozjs 在 #17884 中做出了第一个贡献
* @bigfish-emily 在 #17873 中做出了第一个贡献
* @richboyneedcash 在 #17898 中做出了第一个贡献
* @attention-ai-yee 在 #17909 中做出了第一个贡献
* @alex-makang 在 #17988 中做出了第一个贡献
* @anneheartrecord 在 #18009 中做出了第一个贡献
* @hnwyllmm 在 #17780 中做出了第一个贡献
* @wei5433575 在#15194 中做出了第一个贡献
* @zjm11902 在#17957 中做出了第一个贡献
* @heimoshuiyu 在 #16920 中做出了第一个贡献
* @nikminer 在 #17959 中做出了第一个贡献
* @camcalaquian 在 #18117 中做出了第一个贡献
* @AnnaSuSu 在 #17045 中做出了第一个贡献
* @mkaaad 在 #18152 中做出了第一个贡献
* @fioncat 在 #18088 中做出了第一个贡献
* @Apageoflove 在 #18207 中做出了第一个贡献
* @ting-hong-shieh 在 #18188 中做出了第一个贡献
* @sarbojitrana 在 #18231 中做出了第一个贡献
* @yzxcj797 在 #18312 中做出了第一个贡献
* @questfever 在 #18248 中做出了第一个贡献
* @Lem0nTea2002 在 #18385 中做出了第一个贡献
* @zws202606 在 #17703 中做出了第一个贡献
* @var4dev 在 #18399 中做出了第一个贡献
* @tryeverything24 在 #17323 中做出了第一个贡献
* @ump45nose 在 #18322 中做出了第一个贡献
* @peewee92 在 #18313 中做出了第一个贡献
* @Sevenzuo 在 #18456 中做出了第一个贡献
* @ming1523 在 #18311 中做出了第一个贡献
* @zloglevel 在 #18469 中做出了第一个贡献
* @01JohnMa 在 #18211 中做出了第一个贡献
* @D819 在 #18241 中做出了第一个贡献
* @pangwangshu 在 #18507 中做出了第一个贡献
* @guominjia 在 #18503 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.26.4...v0.27.0

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.27.0` · 📅 发布：2026-08-19 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.27.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
