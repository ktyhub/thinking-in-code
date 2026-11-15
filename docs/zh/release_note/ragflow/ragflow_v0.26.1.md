---
title: "ragflow v0.26.1"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.26.1"
version: "v0.26.1"
published: "2026-06-17"
type: "patch"
lang: "zh"
---

# ragflow v0.26.1

## 总结

### 新功能

- **模型提供者**：允许用户修改现有模型配置的模型类型。 [#16029](https://github.com/infiniflow/ragflow/pull/16029)
- **聊天通道**：允许用户将 RAGFlow 助手部署为外部消息平台（如 Discord 和飞书）中的聊天机器人。 [#15850](https://github.com/infiniflow/ragflow/pull/15850)
- **可观察性**：在 Langfuse 中按会话对多轮聊天轨迹进行分组，以方便对话调试和重播。 [#15679](https://github.com/infiniflow/ragflow/pull/15679)

### 国际化

- 为法语 UI 添加了约 70 个缺失的翻译键。 [#15983](https://github.com/infiniflow/ragflow/pull/15983)

### 错误修复

- **模型提供者**：修复不准确的令牌计费，更正嵌入截断限制以防止索引失败，并重构错误处理以找出根本错误原因。 [#15424](https://github.com/infiniflow/ragflow/pull/15424)
- **API**：向 `/chat/completions` 端点添加传统模式以恢复 v0.23.0 样式的 `<think>` 输出以实现向后兼容性。 [#16014](https://github.com/infiniflow/ragflow/pull/16014) 另请参阅[与聊天助手交谈](./references/http_api_reference.md#converse-with-chat-assistant)。

## 发生了什么变化
* Go：为https://github.com/infiniflow/ragflow/pull/15940中的@Haruko386添加列表模型的维度并修复提供商中的一些嵌入错误
* feat(models)：为https://github.com/infiniflow/ragflow/pull/15821中的@JPette1783添加共享的HTTP client、SSE解析器和Go模型驱动程序的存根助手
* 修复（用户设置）：https://github.com/infiniflow/ragflow/pull/15678 中的@carlh7777 将侧边栏折叠到移动设备上的仅图标栏
* 修复（llm）：通过 https://github.com/infiniflow/ragflow/pull/15424 中的 @Dexterity104 修正嵌入提供程序中的错误处理、令牌记账和截断
* 通过@yingfeng在https://github.com/infiniflow/ragflow/pull/15907中改进docx预览
* 修复：通过 @he-yufeng 在 https://github.com/infiniflow/ragflow/pull/15696 中保持重复 n 跳边缘的最大页面排名
* 壮举：@jonathanchang31 在 https://github.com/infiniflow/ragflow/pull/15679 中对多轮聊天轨迹进行 Langfuse 会话分组
*修复（配置文件）：通过@carlh7777在https://github.com/infiniflow/ragflow/pull/15694中强制执行配置文件名称验证和输入约束
* Json：在https://github.com/infiniflow/ragflow/pull/15947中添加@Haruko386的一些模型
* feat(go): 将 Z.ai 模型条目添加到 all_models.json 在 https://github.com/infiniflow/ragflow/pull/15929 中添加@Hz-186 缺失的 Qwen 商业模型和提供商别名
* Go：https://github.com/infiniflow/ragflow/pull/15327中@JinHai-CN使用NATS作为消息队列
* 修复（go）：由 @bitloi 在 https://github.com/infiniflow/ragflow/pull/15746 中编辑内部处理程序错误
* 修复：聊天/代理 -- 默认头像无法正确显示。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15948
* Go：在https://github.com/infiniflow/ragflow/pull/15938中解析@JinHai-CN的摄取DSL
* https://github.com/infiniflow/ragflow/pull/15971中@yingfeng将技能空间与Python API解耦
* 功能：聊天频道 — 通过 https://github.com/infiniflow/ragflow/pull/15850 中的 @KevinHuSh 将助手连接到外部消息机器人
* 修复（Go-models）：当 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/15969 中存在别名时，保留模型名称查找
* Json[模型提供者] 在 https://github.com/infiniflow/ragflow/pull/15970 中添加 @Haruko386 的 nvidia、moonshot、minimax、claude、GPT 模型
* Go：添加office_oxy并解析docx文件。作者：@JinHai-CN https://github.com/infiniflow/ragflow/pull/15976
* 修复：@bitloi 在 https://github.com/infiniflow/ragflow/pull/15852 中的 SSE 写入超时
* feat(agent)：Go 端口 — 画布引擎、22 个组件、DSL v2、13 个端点，作者：@yuzhichang，https://github.com/infiniflow/ragflow/pull/15952
* Go：通过@JinHai-CN在https://github.com/infiniflow/ragflow/pull/15979中添加更多文件解析器
* i18n(fr)：由 @vincentlambert 在 https://github.com/infiniflow/ragflow/pull/15983 中添加约 70 个缺失的法语翻译键
* Go：https://github.com/infiniflow/ragflow/pull/15989中@JinHai-CN的文件解析器配置
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/16004中的最后登录时间
* Go：重构模型API以接受https://github.com/infiniflow/ragflow/pull/15999中@JinHai-CN的模型id
* 修复：使用 /api/tags 端点来列出 https://github.com/infiniflow/ragflow/pull/16003 中的 @zaviermeekz-cpu 的 Ollama 模型 (#16000)
* 在https://github.com/infiniflow/ragflow/pull/15978中添加@yingfeng的类似git的文件提交API
* feat(go-models): 将 google 模型添加到 https://github.com/infiniflow/ragflow/pull/16007 中的 @Hz-186 的 all_models.json
* 壮举：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/15968 中添加对 s3 区域的自定义值支持
* 重构(go)：将https://github.com/infiniflow/ragflow/pull/16010中@Hz-186的实体ID的GenerateUUID1替换为GenerateToken
* 通过 @JinHai-CN 将 REDIS 移至 https://github.com/infiniflow/ragflow/pull/16006 中的引擎目录
* Go: 在https://github.com/infiniflow/ragflow/pull/16016中添加@JinHai-CN的Markdown解析器
* Json：在https://github.com/infiniflow/ragflow/pull/16013中通过@Haruko386向all_models.json添加许多模型
* 修复：在https://github.com/infiniflow/ragflow/pull/16015中列出@Haruko386支持的型号时输出2行
*修复（api）：当https://github.com/infiniflow/ragflow/pull/15509中的@dripsmvcp缺少附件blob时，返回4xx而不是500
* Go：通过https://github.com/infiniflow/ragflow/pull/16018中的@JinHai-CN解析HTML文件
* Go: 在https://github.com/infiniflow/ragflow/pull/16022中添加@JinHai-CN在文件系统命令中的API模式检查
* 修复：调整聊天线高度。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/16021
* 修复https://github.com/infiniflow/ragflow/pull/16023中@wangq8可以将一个数据源同步到多个数据集
* 功能：将不太重要的聊天设置移至可折叠面板中。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/16024
* 壮举：@Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/16028 中提供模型
*功能：在https://github.com/infiniflow/ragflow/pull/16029中通过@dcc123456添加编辑模型类型功能
* feat: 在https://github.com/infiniflow/ragflow/pull/16039中添加harness-go框架——@yingfeng的图引擎
* feat[Go] 在 https://github.com/infiniflow/ragflow/pull/16019 中添加 @Haruko386 的 ModelRequest 的 max_dimension 和尺寸
* 修复：在 https://github.com/infiniflow/ragflow/pull/16014 中添加 @buua436 的遗留聊天/完成模式
*修复：https://github.com/infiniflow/ragflow/pull/16031中@buua436的沙箱配置api方法不匹配
* feat: 在https://github.com/infiniflow/ragflow/pull/16045中添加harness-go框架——agent core by @yingfeng
* 开发：在 https://github.com/infiniflow/ragflow/pull/16066 中合并 @wangq8 的开发脚本
* 重构：更改表chat_channel状态数据类型。作者：@KevinHuSh，https://github.com/infiniflow/ragflow/pull/16061
* feat(go-api): 支持在https://github.com/infiniflow/ragflow/pull/16030中通过@Hz-186通过model_id设置租户默认模型
* feat(go-cli): 支持在https://github.com/infiniflow/ragflow/pull/16020中通过@Hz-186添加嵌入类型的模型
*壮举（go-models）：通过@Hz-186在https://github.com/infiniflow/ragflow/pull/16017中添加更多提供者
* 修复：通过 https://github.com/infiniflow/ragflow/pull/16051 中的 @BasilFoubert 改进登录表单中的“记住我”复选框 UX
* 修复：在https://github.com/infiniflow/ragflow/pull/16062中通过@Lynn-Inf过滤不支持的model_type
* 修复：将 toc 字段添加到 https://github.com/infiniflow/ragflow/pull/16059 中 @buua436 的提取器输出
* Go: 修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16058中注册用户的问题
* 文档：@Haruko386 在 https://github.com/infiniflow/ragflow/pull/16036 中发布 RAGFlow Go CLI 的 github
* 修复(go): all_models.json by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16075
* 修复：https://github.com/infiniflow/ragflow/pull/16073 中 @Lynn-Inf 提供的 v0.26.1 模型提供者
* 修复：解决https://github.com/infiniflow/ragflow/pull/16078中@Haruko386的office_oxy引起的错误
* 修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16081中的自动迁移问题
* 修复：更新 image2text 的本地化密钥并通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/16076 中添加 ocr 选项
*修复：更新channelTemplates以仅通过@dcc123456在https://github.com/infiniflow/ragflow/pull/16065中过滤Discord和Lark
*修复：通过https://github.com/infiniflow/ragflow/pull/16091中的@dcc123456删除个人资料页面布局中不必要的div
* 修复 @myf-bee 在 https://github.com/infiniflow/ragflow/pull/16085 中未找到的工作流程 ss
* 修复：通过 https://github.com/infiniflow/ragflow/pull/16094 中的 @dcc123456 从 FilterButton 组件中删除不必要的 'asChild' 属性
* 文档：@writinwaters 在 https://github.com/infiniflow/ragflow/pull/16087 中添加了 v0.26.1 release note
* 修复：https://github.com/infiniflow/ragflow/pull/15438 中 @galuis116 的 Markdown 解析器远程图像获取中的 SSRF
*修复：https://github.com/infiniflow/ragflow/pull/16096中@KevinHuSh将chat_channel（后端+前端）中的dialog_id重命名为chat_id
* 重构：https://github.com/infiniflow/ragflow/pull/16099 中@wangq8 将 /chat_channels 重命名为 /chat-channels
*构建（deps）：由https://github.com/infiniflow/ragflow/pull/16089中的@dependabot[bot]将starlette从0.51.0提升到1.3.1
* Go重构：合并@JinHai-CN在https://github.com/infiniflow/ragflow/pull/16098中的类似功能
* 重构(paddleocr)：通过https://github.com/infiniflow/ragflow/pull/15967中的@Rander7从同步API迁移到异步作业API
* feat(paddleocr)：通过 @Rander7 在 https://github.com/infiniflow/ragflow/pull/16086 中添加异步作业 API 的图像解析支持
* 修复：对非 DeepDOC PDF 解析任务进行分页以防止 https://github.com/infiniflow/ragflow/pull/15951 中 @euvre 出现 OOM
*构建（deps）：通过@dependabot [bot]在https://github.com/infiniflow/ragflow/pull/16090中将aiohttp从3.13.3提升到3.14.1
* 文档：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/16100 中更新聊天完成文档
* 恢复 https://github.com/infiniflow/ragflow/pull/16104 中 @wangq8 的“修复：分页非 DeepDOC PDF 解析任务以防止 OOM”
* Go: 在https://github.com/infiniflow/ragflow/pull/16093中通过@JinHai-CN添加更多启动服务器参数
* 修复：对非 DeepDOC PDF 解析任务进行分页以防止 https://github.com/infiniflow/ragflow/pull/16106 中 @euvre 出现 OOM
* 修复：导入MCP对话框导致重复提交。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/16037
* feat(go/dao): 通过https://github.com/infiniflow/ragflow/pull/16055中的@Hz-186将聊天频道数据库实体和DAO迁移到Go
* 修复RAGFlow在https://github.com/infiniflow/ragflow/pull/16116中无法通过@wangq8启动
* 文档：@writinwaters 在 https://github.com/infiniflow/ragflow/pull/16117 中使用聊天助手更新了 Converse
* 壮举(go-models): 强化 FishAudio 的 ListModels (#15853) by @hunnyboy1217 in https://github.com/infiniflow/ragflow/pull/15957
* 修复：在https://github.com/infiniflow/ragflow/pull/16120中@euvre返回get_ingestion_log中的完整记录
* 通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16118 中修复 MinerU 表选项清理
* feat(agent): 运送 Go 代理画布端口 — eino 中断/恢复 + Redis 由 @yuzhichang 在 https://github.com/infiniflow/ragflow/pull/16035 中进行检查点
*修复：在https://github.com/infiniflow/ragflow/pull/16123中通过@buua436收紧嵌入截断阈值
*修复：在https://github.com/infiniflow/ragflow/pull/16125中显示@buua436的电报聊天频道
* 通过https://github.com/infiniflow/ragflow/pull/16128中的@wangq8设置默认Paddle OCR URL
* 增强：在https://github.com/infiniflow/ragflow/pull/16130中通过@6ba3i优化ci
* 修复：https://github.com/infiniflow/ragflow/pull/16129 中 @buua436 的聊天频道运行时
* 由 @wangq8 在 https://github.com/infiniflow/ragflow/pull/16142 中将文档 rerank_id 从 int 更新为 string
* 开发：在 https://github.com/infiniflow/ragflow/pull/16138 中添加 @wangq8 的 go starter
* 修复.docx 文件显示不完整的问题；缺少从模板创建的管道的层次结构。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/16134
* 修复：https://github.com/infiniflow/ragflow/pull/16137 中 @dcc123456 的代理日志、登录、搜索设置的其他前端修复
* 修复：从模板创建的管道执行后立即失败。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/16149
* 重构（go-models）：强化 Ollama ListModels 并通过 @hunnyboy1217 在 https://github.com/infiniflow/ragflow/pull/15955 中的 ParseListModel (#15853) 进行路由
* 壮举：在 https://github.com/infiniflow/ragflow/pull/16140 中添加 @buua436 的 qqbot 聊天频道
* 文档：更新了 v0.26.1 发布日期。作者：https://github.com/infiniflow/ragflow/pull/16154 的 @writinwaters
* 修复：通过 @Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/16136 中添加 mimo
* 修复：从模板创建的管道在执行时立即失败，并出现“层次结构不存在”错误。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/16151
* 修复（go）：https://github.com/infiniflow/ragflow/pull/16111 中 @bittoby 更正 OpenRouter 流 URL 路由和推理参数
* 增强功能：更新 ci 以通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/16133 中执行并行测试
* 文档：更新 https://github.com/infiniflow/ragflow/pull/16158 中 @asiroliu 的自述文件和文档中对 v0.26.1 的版本引用
*构建（deps）：通过@dependabot [bot]在https://github.com/infiniflow/ragflow/pull/16088中将python-multipart从0.0.21提升到0.0.31
* 由 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/16160 中将 release.yml 修复回旧版本

## 新贡献者
* @carlh7777 在 https://github.com/infiniflow/ragflow/pull/15678 中做出了第一个贡献
* @BasilFoubert 在 https://github.com/infiniflow/ragflow/pull/16051 中做出了第一个贡献
* @myf-bee 在 https://github.com/infiniflow/ragflow/pull/16085 中做出了第一个贡献
* @Rander7 在 https://github.com/infiniflow/ragflow/pull/15967 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.26.0...v0.26.1

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.26.1` · 📅 发布：2026-06-17 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.26.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
