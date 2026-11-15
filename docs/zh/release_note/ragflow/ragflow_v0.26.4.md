---
title: "ragflow v0.26.4"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.26.4"
version: "v0.26.4"
published: "2026-07-07"
type: "patch"
lang: "zh"
---

# ragflow v0.26.4

## 总结

于 2026 年 7 月 7 日发布。

### 新功能

- NLP/标记化：添加支持 16 种语言的语言感知 Snowball 词干分析器，在标记化管道中集成数据集 `language` 参数，并将荷兰语添加到前端。 [#14140](https://github.com/infiniflow/ragflow/pull/14140)

### 错误修复

- 解析包含“@”符号的 LM-Studio 模型名称时，系统崩溃并出现 `ValueError`。 [#16467](https://github.com/infiniflow/ragflow/pull/16467)
- MCP 服务器崩溃，因为 list_chats 函数需要来自 `/chats` API 的列表，但收到的是分页字典。 [#16639](https://github.com/infiniflow/ragflow/pull/16639)
- Docling 解析器默默地从文档中删除数学公式，而不是提取它们。 [#16645](https://github.com/infiniflow/ragflow/pull/16645)
- 系统无法将对元数据值进行的内联编辑保留到后端。 [#16655](https://github.com/infiniflow/ragflow/pull/16655)
- 将文件批量链接到数据集时，系统删除了现有链接。 [#16587](https://github.com/infiniflow/ragflow/pull/16587)
- 过滤器无法使用中文。 [#16673](https://github.com/infiniflow/ragflow/pull/16673)
- 系统未能强制标签权重必须大于零。 [#16657](https://github.com/infiniflow/ragflow/pull/16657)
- 代理提示下拉菜单的布局呈现不正确。 [#16653](https://github.com/infiniflow/ragflow/pull/16653)
- 法律词块划分器错误地将点号交叉引用分类为标题。 [#16626](https://github.com/infiniflow/ragflow/pull/16626)
- 系统无法阻止用户在编辑过程中保存重复的MCP服务器名称。 [#16588](https://github.com/infiniflow/ragflow/pull/16588)
- 系统允许用户导出空的 MCP 服务器选择。 [#16589](https://github.com/infiniflow/ragflow/pull/16589)

## 发生了什么变化
* Go：https://github.com/infiniflow/ragflow/pull/16462中@JinHai-CN将三个服务统一为一个二进制文件
* 功能：在 https://github.com/infiniflow/ragflow/pull/16515 中添加 @KevinHuSh 的知识编译工作流程
* Go：https://github.com/infiniflow/ragflow/pull/16579中@JinHai-CN的文件同步器服务框架
* 修复（代理/工具）：将 AkShare 移植到 ToolBase，以便它可以作为 @immuhammadfurqan 在 https://github.com/infiniflow/ragflow/pull/16417 中的代理工具
*修复：防止https://github.com/infiniflow/ragflow/pull/16568中@euvre的竞争条件导致重复的“技能”和“.knowledgebase”文件夹
* 修复了https://github.com/infiniflow/ragflow/pull/16591中@yingfeng对pregel引擎进行零初始化导致的harness DAG慢分支测试
* 重构：https://github.com/infiniflow/ragflow/pull/16585 中 @wangq8 使用 ruff 和 gofmt 重新格式化左勾的所有代码
* 修复：在 https://github.com/infiniflow/ragflow/pull/16587 中通过@euvre 将文件批量链接到知识库时保留现有链接
* 修复：@Haruko386 在 https://github.com/infiniflow/ragflow/pull/16570 中无法使用代理聊天完成
* 修复：https://github.com/infiniflow/ragflow/pull/16590 中@Haruko386 无法从本地导入 mcp
* 修复：在https://github.com/infiniflow/ragflow/pull/16583中无法通过@Haruko386获取MCP工具
* 修复(go-file): 在https://github.com/infiniflow/ragflow/pull/16584中通过@Hz-186删除带有链接文档的文件时KB计数器漂移
* 修复：防止 @euvre 在 https://github.com/infiniflow/ragflow/pull/16589 中导出空的 MCP 服务器选择
*修复：在https://github.com/infiniflow/ragflow/pull/16588中通过@euvre编辑时防止重复的MCP服务器名称
* Go：修复https://github.com/infiniflow/ragflow/pull/16598中@JinHai-CN的“列表服务”
* i18n：通过https://github.com/infiniflow/ragflow/pull/16594中的@euvre以代理形式本地化视觉输入文件标签
* 修复：通过https://github.com/infiniflow/ragflow/pull/16580中的@dcc123456优化MoveDialog组件中的文件夹数据处理
* Go：@JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/16602 中重构
* 修复（代理/工具）：将 Crawler 移植到 ToolBase，以便它可以由 @immuhammadfurqan 在 https://github.com/infiniflow/ragflow/pull/16415 中加载和运行
* 重构（harness）：删除朴素的内联图引擎，统一https://github.com/infiniflow/ragflow/pull/16608中@yingfeng在单个pregel引擎下的图执行
* 港口代理 PRs 至 GO - 3 by @qinling0210 在 https://github.com/infiniflow/ragflow/pull/16596
* 功能：在 https://github.com/infiniflow/ragflow/pull/16613 中添加 @yingfeng 的会话/内存数据的 gbrain 编译模板
*修复：通过@Haruko386在https://github.com/infiniflow/ragflow/pull/16593中获得permission=me团队中的所有内存
*修复：在https://github.com/infiniflow/ragflow/pull/16597中通过@Haruko386获取团队成员的聊天记录
*修复：在https://github.com/infiniflow/ragflow/pull/16599中@Haruko386在自己的搜索列表中获取团队的搜索
* 修复 Go：列出提供商顺序问题。作者：@JinHai-CN https://github.com/infiniflow/ragflow/pull/16616
* 修复：无法在https://github.com/infiniflow/ragflow/pull/16610中通过@Haruko386在代理日志中获取查询
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/16469中通过@skbs-eng在所有模板分割站点的var名称中防御`@`
* Go：通过@JinHai-CN更新https://github.com/infiniflow/ragflow/pull/16619中的错误信息
* Go:cli move _order _columns 按 https://github.com/infiniflow/ragflow/pull/16615 中的 @myf-bee 排序组
* 修复（代理）：在 https://github.com/infiniflow/ragflow/pull/15399 中通过 @monsterdavidliu-ux 的 doc_id 启用 MCP 文件预览
* 文档：通过 @asiroliu 在 https://github.com/infiniflow/ragflow/pull/16620 中更新 Docker deps 映像的构建说明
* 更新@wangq8在https://github.com/infiniflow/ragflow/pull/16623中的开发脚本
* 壮举：放置一些 wiki 模板。作者：@KevinHuSh，https://github.com/infiniflow/ragflow/pull/16617
* 删除https://github.com/infiniflow/ragflow/pull/16614中@wangq8的canvas_app.py和evaluation_service.py
* 通过 @afrozenpeach 在 https://github.com/infiniflow/ragflow/pull/16627 中设置 RAPTOR UMAP n_neighbors 以防止大型数据集上的 OOM
* 将 Go 摄取边界与 https://github.com/infiniflow/ragflow/pull/16647 中的 @yuzhichang 的 Python 对齐
* 重构：@xugangqiang 在 https://github.com/infiniflow/ragflow/pull/16625 中的 pdf 解析器
* 修复（代理）：从 https://github.com/infiniflow/ragflow/pull/16609 中@euvre 的 ReAct 工具响应中收集 CodeExec 工件
* 修复(agent): 在https://github.com/infiniflow/ragflow/pull/16606中通过@euvre为Go后端的Agent启用单组件调试
*修复（go-skill）：Elasticsearch技能搜索字段由https://github.com/infiniflow/ragflow/pull/16611中的@Hz-186映射
*修复（go-document）：在https://github.com/infiniflow/ragflow/pull/16592中添加@Hz-186的文档和文件访问检查
* feat(agent)：通过https://github.com/infiniflow/ragflow/pull/16640中的@AI-Mart在Agent画布中公开每个LLM节点的思维模式控制
* 在 helm 图表中切换默认的 minio 图像以及 https://github.com/infiniflow/ragflow/pull/16322 中的 @carlobeltrame
* 港口代理 PR 至 GO - 4 by @qinling0210 在 https://github.com/infiniflow/ragflow/pull/16652
*修复：Docling解析器在https://github.com/infiniflow/ragflow/pull/16645中提取@Sohaib9920的数学公式
* 修复（api）：https://github.com/infiniflow/ragflow/pull/15376 中 @jony376 的 REST_API_MAX_PAGE_SIZE 上限内存消息限制和 top_n
* 开发者：通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16656 中修复 nats 主机
* 修复（nlp）：防止点号交叉引用被https://github.com/infiniflow/ragflow/pull/16626中的@OSHA-B分类为Laws chunker中的标题
* 修复（元数据）：https://github.com/infiniflow/ragflow/pull/16655 中的 @dcc123456 不会将内联值编辑保存到后端
* 修复（go-agent）：将代理调试输入表单与https://github.com/infiniflow/ragflow/pull/16654中的@Hz-186的Python对齐
* feat(go)：通过 https://github.com/infiniflow/ragflow/pull/16047 中的 @Crystora 添加与块管道重叠的长度分割策略
* feat(go)：在https://github.com/infiniflow/ragflow/pull/16049中由@Crystora删除后处理过滤器中的空块和重复块
* 修复 @Harsh23Kashyap 在 https://github.com/infiniflow/ragflow/pull/16401 中创建 OpenAI 响应的时间戳
* 修复：代理提示下拉菜单布局混乱。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/16653
* 通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16657 中修复标签权重应大于 0
* 修复代理会话在 https://github.com/infiniflow/ragflow/pull/16670 中丢失 @wangq8 的 <think></think> 标记
* Go：https://github.com/infiniflow/ragflow/pull/16622中@JinHai-CN的合并函数
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/16673中使用中文的过滤器
* 修复(go): https://github.com/infiniflow/ragflow/pull/16674 中的 @euvre 默认启用上传的文档
* 重构：删除冗余函数 - 并将 https://github.com/infiniflow/ragflow/pull/16671 中 @KevinHuSh 的 run_raptor 修复为 do_raptor
* 修复（go-agent）：Yahoofinance 输入并由 @Hz-186 在 https://github.com/infiniflow/ragflow/pull/16658 中运行
* 修复（go-agent）：https://github.com/infiniflow/ragflow/pull/16675 中 @Hz-186 缺少 ExeSQL 和浏览器代理节点的输入表单
* 修复(go-document): 在https://github.com/infiniflow/ragflow/pull/16661中通过@Hz-186将部分成功数据上传为数组
* 修复（go）：通过 @euvre 在 https://github.com/infiniflow/ragflow/pull/16660 中为新租户添加缺少的“恢复”块方法
* 将 Go 解析器后端和 PDF 管道与 https://github.com/infiniflow/ragflow/pull/16676 中的 @yuzhichang 的 Python 对齐
* 修复(graphrag): 在https://github.com/infiniflow/ragflow/pull/16541中通过@afrozenpeach过滤负面判断和错误归因的关系边缘
* 修复：通过 https://github.com/infiniflow/ragflow/pull/16650 中的 @OSHA-B 处理 check_embedding 中缺少的 ES/OpenSearch 索引（空数据集上的 HTTP 500）
* 在 https://github.com/infiniflow/ragflow/pull/16633 中@afrozenpeach 一步折叠小型 RAPTOR 层，而不是每层一个节点
* 修复(mcp): 当 /chats API 在 https://github.com/infiniflow/ragflow/pull/16639 中返回@BAIGUANGMEI 的分页信封时，处理 list_chats 中的字典响应
* 通过 @afrozenpeach 在 https://github.com/infiniflow/ragflow/pull/16632 中使 RAPTOR GMM 在小型缩减集群上变得稳健
* [Bug]：当https://github.com/infiniflow/ragflow/pull/15484中的@glorysr1209-png省略流时，工作流程代理完成默认流=True
*修复：通过https://github.com/infiniflow/ragflow/pull/16426中的@orbisai0security将crawl4ai升级到0.9.0（GHSA-r253-r9jw-qg44）
* 功能：在 https://github.com/infiniflow/ragflow/pull/16326 中添加 @yingfeng 的事件源和重播到harness
* 壮举：通过 @rwb-truelime 在 https://github.com/infiniflow/ragflow/pull/14140 中添加对 BM25 标记化的母语荷兰语支持
* 修复：ValueError：在 https://github.com/infiniflow/ragflow/pull/16468 中 @skbs-eng 包含“@”的模型 ID 中，无法在 list_tenant_added_models 中解包太多值 (#16467)
* 修复：封装终端颜色输出并在https://github.com/infiniflow/ragflow/pull/16672中添加@Ricardo-shuo-liu的跨平台颜色检测
* 修复（go-agent-web）：在 https://github.com/infiniflow/ragflow/pull/16682 中正确使用 @Hz-186 的 BGPT 画布表单观察器
* 重构：https://github.com/infiniflow/ragflow/pull/16680中@weifanglab使用slices.Contains简化代码
* 修复(go-agent): 在https://github.com/infiniflow/ragflow/pull/16684中添加BGPT组件和@Hz-186输入表单
* 修复（go）：通过 @euvre 在 https://github.com/infiniflow/ragflow/pull/16666 中为 Go 后端种子内置代理模板
* feat(agent): 支持在 https://github.com/infiniflow/ragflow/pull/16685 中 @huang-aoqin 在 begin 节点上输入 JSON 对象
* 修复 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16688 中代理聊天不起作用的问题
* 修复：从https://github.com/infiniflow/ragflow/pull/16687中@wangq8导出的文档中去除推理模型思维标签
*修复：删除https://github.com/infiniflow/ragflow/pull/16690中@dcc123456内存更新失败时的重复错误提示
* 修复：通过 https://github.com/infiniflow/ragflow/pull/16689 中的 @dcc123456 防止确认删除对话框中的文本溢出
* Go：修复https://github.com/infiniflow/ragflow/pull/16678中@JinHai-CN的开发指南
* 修复：限制代理使用与嵌入模型兼容的内存。通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/16699
* 修复：引用的文件不显示。通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/16696
*修复（代理）：在https://github.com/infiniflow/ragflow/pull/16691中通过@Hz-186保存代理更新的草稿版本
*修复（go-pipline）：列出代理在https://github.com/infiniflow/ragflow/pull/16698中错误地通过@Hz-186过滤掉摄取管道
* 修复：ValueError：https://github.com/infiniflow/ragflow/pull/16697 中 @wangq8 对关闭图像的操作
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/16694中无法运行猛禽的问题
* 修复：更新相似性阈值回退以使用 https://github.com/infiniflow/ragflow/pull/16700 中的 @dcc123456 的无效合并
* Go：https://github.com/infiniflow/ragflow/pull/16695中@JinHai-CN重构UUID函数
* 修复docker在https://github.com/infiniflow/ragflow/pull/16702中@yingfeng拉出徽章的问题
* 修复 https://github.com/infiniflow/ragflow/pull/16705 中 @yingfeng 发布徽章损坏的缓存
* 修复 https://github.com/infiniflow/ragflow/pull/16706 中 @yingfeng 的法语迷彩缓存损坏问题
* 修复 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16704 中 PageIndex 不起作用的问题
* 修复@yingfeng 在 https://github.com/infiniflow/ragflow/pull/16709 中 gitee 镜子损坏的标志
*修复（task_executor）：修复Langfuse刷新/关闭死锁，该死锁会冻结https://github.com/infiniflow/ragflow/pull/16502中@ondery的文档解析
* 修复：防止内存名称在 https://github.com/infiniflow/ragflow/pull/16714 中 @euvre 更新描述时自动追加 (1)
* 文档：更新 https://github.com/infiniflow/ragflow/pull/16716 中 @asiroliu 的自述文件和文档中对 v0.26.4 的版本引用
* Go: 在https://github.com/infiniflow/ragflow/pull/16719中添加@JinHai-CN的迁移数据库标志
* 文档：添加了 v0.26.4 release note。作者：https://github.com/infiniflow/ragflow/pull/16720 的 @writinwaters
* Go：修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16721中构建的ragflow-cli
* Go：修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16722中的发布
* Go：在https://github.com/infiniflow/ragflow/pull/16723中@JinHai-CN构建cli时删除cgo
* Go：修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16724中构建的cgo

## 新贡献者
* @skbs-eng 在 https://github.com/infiniflow/ragflow/pull/16469 中做出了第一个贡献
* @afrozenpeach 在 https://github.com/infiniflow/ragflow/pull/16627 中做出了第一个贡献
* @AI-Mart 在 https://github.com/infiniflow/ragflow/pull/16640 中做出了第一个贡献
* @carlobeltrame 在 https://github.com/infiniflow/ragflow/pull/16322 中做出了第一个贡献
* @Sohaib9920 在 https://github.com/infiniflow/ragflow/pull/16645 中做出了第一个贡献
* @BAIGUANGMEI 在 https://github.com/infiniflow/ragflow/pull/16639 中做出了第一个贡献
* @rwb-truelime 在 https://github.com/infiniflow/ragflow/pull/14140 中做出了第一个贡献
* @Ricardo-shuo-liu 在 https://github.com/infiniflow/ragflow/pull/16672 中做出了第一个贡献
* @weifanglab 在 https://github.com/infiniflow/ragflow/pull/16680 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.26.3...v0.26.4

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.26.4` · 📅 发布：2026-07-07 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.26.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
