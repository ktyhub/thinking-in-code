---
title: "ragflow v0.25.6"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.25.6"
version: "v0.25.6"
published: "2026-05-27"
type: "patch"
lang: "zh"
---

# ragflow v0.25.6

## 总结

发布于 2026 年 5 月 26 日。

### 新功能

- 代理：添加**浏览器**组件，使 AI 能够自主导航并与网页交互。 [#14888](https://github.com/infiniflow/ragflow/pull/14888)

### 改进

- RAG：RAPTOR 构建现在引入了 AHC 模式（Ψ-RAG），它将语义从文档级别扩展到数据集级别。不仅索引构建性能明显高于之前的 RAPTOR，而且在 Recall@5 和平均 F1 上也优于旧 RAPTOR。用户可以在 AHC 和 GMM 模式之间切换。此功能是在 v0.25.3 中引入的，此版本修复了多个错误。 [#14674](https://github.com/infiniflow/ragflow/issues/14674)[#14679](https://github.com/infiniflow/ragflow/pull/14679)
- 代理：引入轻量级 `@tool` 装饰器来简化聊天模型的 Python 函数注册过程。 [#15047](https://github.com/infiniflow/ragflow/pull/15047)
- 代理：使代理消息能够显示 Base64 编码的图像。 [#15212](https://github.com/infiniflow/ragflow/pull/15212)
- 代理：将 **Doc Generator** 组件的文件元数据公开为离散变量。 [#15080](https://github.com/infiniflow/ragflow/pull/15080)
- 代理：允许开发人员将 `chat_template_kwargs` 传递给代理聊天完成端点。 [#14182](https://github.com/infiniflow/ragflow/issues/14182)[#14542](https://github.com/infiniflow/ragflow/pull/14542)

### 错误修复

- 修复了 `/chat/completions` 以允许仅发送 API 有效负载中的最新消息，并删除了传输完整对话历史记录的要求。 [#15197](https://github.com/infiniflow/ragflow/pull/15197) 另请参阅[与聊天助手交谈](./references/http_api_reference.md#converse-with-chat-assistant)。
- 在检索阶段未应用分配给向量相似性的权重。 [#15108](https://github.com/infiniflow/ragflow/pull/15108)
- 修复了解析器配置未保存在数据集配置页面上的问题。
- 数据源详细信息页面上的日志未完全显示。
- 修复文档状态过滤失败的问题。
- 修复了空 LLM 选择响应的崩溃防护。
- RAG：使用 [Infinity](https://github.com/infiniflow/infinity) 文档引擎时，RAPTOR 构建过程停止。 [#14998](https://github.com/infiniflow/ragflow/pull/14998)
- 修复了 Mistral/Upstage 推理模型的流响应解析。
- 修复了摄取管道解析器输出中的 HTML 标签。
- 修复表解析器元数据。
- 修复了异步事件循环嵌套和即发即忘任务问题。
- 修复了 asyncio.Semaphore 绑定到不同事件循环的错误。
- Agent：修复**Agent**组件提示变量消失和搜索向量相似度权重问题。

## 发生了什么变化
* 通过https://github.com/infiniflow/ragflow/pull/15055中的@qinling0210更新块/元数据cli
* 修复：数据源详情页日志显示不完整的问题。通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/15056
* Go：在https://github.com/infiniflow/ragflow/pull/15017中由@jack-stormentswe在TogetherAI驱动程序中实现Embed（嵌入）
* Go：实现提供者：n1n.ai by @sxxtony in https://github.com/infiniflow/ragflow/pull/15010
* Go：通过https://github.com/infiniflow/ragflow/pull/15032中的@RenzoMXD在Xinference驱动程序中实现Rerank
* Go：通过https://github.com/infiniflow/ragflow/pull/15014中的@RenzoMXD在Novita驱动程序中实现Rerank
* Go：通过@RenzoMXD在https://github.com/infiniflow/ragflow/pull/14932中实现Xinference驱动程序中的嵌入
* Go：实现提供者：GPUStack（聊天），作者：@RenzoMXD，https://github.com/infiniflow/ragflow/pull/15024
* feat(go-models)：通过@web-dev0521在https://github.com/infiniflow/ragflow/pull/15022中添加Azure OpenAI模型驱动程序
* 修复：防止 @enjoyandlove 在 https://github.com/infiniflow/ragflow/pull/15077 中通过请求正文进行会话 user_id 欺骗
* 修复（api）：通过 https://github.com/infiniflow/ragflow/pull/15028 中的 @dripsmvcp 检查 /dify/retrieval 中的 kb 所有权
* Go：通过 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/15096 中为 Xinference 实现 ASR 和 TTS
* 文档：https://github.com/infiniflow/ragflow/pull/15103中@JinHai-CN将python版本更新为3.13
* 修复：<asyncio.locks.Semaphore object at 0xabcd [locked]> 由 https://github.com/infiniflow/ragflow/pull/15100 中的 @wangq8 绑定到不同的事件循环
* Go：通过 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/15107 中为 TogetherAI 实现 rerank、asr、tts
* 文档：https://github.com/infiniflow/ragflow/pull/15109 中的 @writinwaters 更新了 v0.25.5 release note
* 文档：修复了 @writinwaters 在 https://github.com/infiniflow/ragflow/pull/15114 中的部署问题
* 恢复 https://github.com/infiniflow/ragflow/pull/15138 中 @buua436 的“修复（api）：当省略 ext 时从文件名推断 /documents/{id}/download Content-Type (#15052)”
* 修复：https://github.com/infiniflow/ragflow/pull/15136 中@buua436 守护丢失的任务语言
* feat(go-models): 通过 @JSONbored 在 https://github.com/infiniflow/ragflow/pull/15099 中添加 PPIO 提供程序驱动程序
* Go：在https://github.com/infiniflow/ragflow/pull/15134中由@jakearmstrong59在ZhipuAI驱动程序中实现ASR
* 修复：在 https://github.com/infiniflow/ragflow/pull/14868 中 @dale053 阻止 Misc_utils.download_img 中的 OAuth 头像的 SSRF
* 壮举：在 https://github.com/infiniflow/ragflow/pull/14208 中添加 @bhongong 的 SDK 和 cURL 示例，用于块管理、聊天助手和检索 (#4310)
* 重构：https://github.com/infiniflow/ragflow/pull/14983 中 @wangq8 增强重试和超时
* 重构：@wangq8 在 https://github.com/infiniflow/ragflow/pull/15147 中增强 CI
* 修复：防止 https://github.com/infiniflow/ragflow/pull/14792 中 @dale053 的用户 API 响应中敏感字段泄漏
* 壮举：通过 @jsdevninja 在 https://github.com/infiniflow/ragflow/pull/14542 中的代理聊天完成传递 chat_template_kwargs
* Go：在https://github.com/infiniflow/ragflow/pull/15067中@jakearmstrong59在OpenRouter驱动程序中实现ASR
* feat(evaluation)：通过 @kiannidev 在 https://github.com/infiniflow/ragflow/pull/13487 中跟踪评估结果中的代币使用情况
* Go：在https://github.com/infiniflow/ragflow/pull/15091中通过@dripsmvcp实现提供者：TokenPony
*修复：移动代理附件由@buua436在https://github.com/infiniflow/ragflow/pull/15146中下载api
* 修复：在https://github.com/infiniflow/ragflow/pull/15141中通过@Lynn-Inf将model_type添加到llm_setting中
* feat(go-models): 通过 @JSONbored 在 https://github.com/infiniflow/ragflow/pull/15097 中添加 Groq 提供程序驱动程序
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/15108中的搜索向量_相似度_权重
* 重构：将@wangq8的API文件移动到https://github.com/infiniflow/ragflow/pull/15151中
* 文档：添加了集成 Discord 的指南。作者：https://github.com/infiniflow/ragflow/pull/15156 的 @writinwaters
* Go：通过 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/15135 中为 AstraFlow 实现嵌入、重新排序、tts
* Go：通过@Ltohka在https://github.com/infiniflow/ragflow/pull/15153中为Groq实现reasoning_chat、TTS、ASR
* 修复：/openai/<chat_id>/chat/completions 不知道 https://github.com/infiniflow/ragflow/pull/15155 中 @wangq8 的 session_id
* 修复(go): 在 https://github.com/infiniflow/ragflow/pull/15104 中支持 @bitloi 的 OpenAI 音频端点
* feat(i18n)：完整的法语翻译 — 由 @vincentlambert 在 https://github.com/infiniflow/ragflow/pull/15192 中添加约 1400 个缺失的键
* 修复：/chat/completions 不知道 https://github.com/infiniflow/ragflow/pull/15162 中 @wangq8 的对话 ID
* Go：实现提供商：腾讯混元 by @dripsmvcp in https://github.com/infiniflow/ragflow/pull/15092
* Go：在https://github.com/infiniflow/ragflow/pull/15158中实现提供者：PaddleOCR_Local by @Haruko386
* Go：通过@JinHai-CN在https://github.com/infiniflow/ragflow/pull/15094中添加摄取服务器
* 恢复 https://github.com/infiniflow/ragflow/pull/15205 中 @wangq8 的“修复：/openai/<chat_id>/chat/completions 不知道 session_id”
* 修复 /chat/completions 以允许仅发送 @wangq8 在 https://github.com/infiniflow/ragflow/pull/15197 中的最新消息
* feat[go]: 在 https://github.com/infiniflow/ragflow/pull/15159 中实现提供者：TokenHub by @Dimon0000000
* Go：通过@Haruko386在https://github.com/infiniflow/ragflow/pull/15207中实现腾讯混元的嵌入
* 功能：将 Doc Generator 文件元数据公开为 https://github.com/infiniflow/ragflow/pull/15080 中 @nickmopen 的离散输出
* 修复：@ahmadintisar 在 https://github.com/infiniflow/ragflow/pull/15127 中的表解析器元数据
*修复：摄取管道中解析器的输出包含https://github.com/infiniflow/ragflow/pull/14920中@jonathanchang31的HTML标签
* 修复：通过@wangq8在https://github.com/infiniflow/ragflow/pull/15204中更正API路径
* 修复：将PDF文档顶部的红色突出显示替换为黄色。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15203
* 修复（Go）：重写聊天，列表模型，由 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/15213 中嵌入 Ollama
* 修复 #15170 在 https://github.com/infiniflow/ragflow/pull/15216 中无法通过 @wangq8 过滤文档状态
*功能：使代理消息能够在https://github.com/infiniflow/ragflow/pull/15212中显示@cike8899的base64图像
* 壮举：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/15208 中为宁静的 api 套件添加新的测试和测试用例
* 通过@qinling0210在https://github.com/infiniflow/ragflow/pull/15160中实现GO中的Elasticsearch功能
* 文档：最低要求的 Python 版本增加到 3.13。作者：https://github.com/infiniflow/ragflow/pull/15219 的 @writinwaters
* 修复：代理操作员的提示变量输入后消失。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15218
* 修复：通过 @wdeveloper16 在 https://github.com/infiniflow/ragflow/pull/14761 中解决异步正确性问题（即发即忘任务、事件循环嵌套）
* 修复 [Bug]：在数据集配置页面中保存解析器配置不起作用 #15175 by @mustangxu in https://github.com/infiniflow/ragflow/pull/15177
* 壮举：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/15223 中为宁静的 api 套件添加新的测试和测试用例
* Go：在https://github.com/infiniflow/ragflow/pull/15143中由@jakearmstrong59在ZhipuAI驱动程序中实现OCR
* Go：在https://github.com/infiniflow/ragflow/pull/15168中验证@RenzoMXD的百度OCR输入
* Go：实现提供者：FuturMix by @sxxtony in https://github.com/infiniflow/ragflow/pull/15013
* Go：在https://github.com/infiniflow/ragflow/pull/15185中由@glorydavid03023在DeepInfra驱动程序中实现Rerank
* 修复(api): 允许代理中的canvas_type创建并更新https://github.com/infiniflow/ragflow/pull/15201中@huang-aoqin的APIs
* 修复：空文件，https://github.com/infiniflow/ragflow/pull/15232 中 @wangq8 提供更好的消息
* 修复：修复了 https://github.com/infiniflow/ragflow/pull/15226 中 @dcc123456 的元数据问题
* 壮举：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/15230 中为宁静的 api 套件添加新的测试和测试用例
* feat(go-models)：在 https://github.com/infiniflow/ragflow/pull/15166 中添加 @jakearmstrong59 的 AWS Bedrock 提供程序驱动程序
* 修复（tokenhub）：通过 @JSONbored 在 https://github.com/infiniflow/ragflow/pull/15224 中连接 Go 驱动程序并强化请求
* 在https://github.com/infiniflow/ragflow/pull/15237中添加@Hz-186的HuaweiCloud模型提供商
* Go：在https://github.com/infiniflow/ragflow/pull/15041中实现提供者：@dripsmvcp的ModelScope
* Go：实现提供者：OrcaRouter by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15235
* 文档：更新 https://github.com/infiniflow/ragflow/pull/15248 中 @asiroliu 的自述文件和文档中对 v0.25.6 的版本引用
* 文档：v0.25.6 release note 的初始草案。作者：https://github.com/infiniflow/ragflow/pull/15250 中的 @writinwaters
* 修复(go-models): 在 https://github.com/infiniflow/ragflow/pull/15236 中添加 @oktofeesh1 的 xAI 模型列表后缀
* feat(go-models): 列出 @oktofeesh1 在 https://github.com/infiniflow/ragflow/pull/15241 中的 LongCat 模型
* 修复：在 https://github.com/infiniflow/ragflow/pull/15251 中显示 @wangq8 的块的标签列表
* 修复（go-models）：通过 @oktofeesh1 在 https://github.com/infiniflow/ragflow/pull/15233 中的驱动程序路由托管 OCR 提供商
* 文档：v0.25.6 release note 由 @writinwaters 在 https://github.com/infiniflow/ragflow/pull/15255 中起草

## 新贡献者
* @enjoyandlove 在 https://github.com/infiniflow/ragflow/pull/15077 中做出了他们的第一个贡献
* @JSONbored 在 https://github.com/infiniflow/ragflow/pull/15099 中做出了他们的第一个贡献
* @bhongong 在 https://github.com/infiniflow/ragflow/pull/14208 中做出了第一个贡献
* @jsdevninja 在 https://github.com/infiniflow/ragflow/pull/14542 中做出了第一个贡献
* @Ltohka 在 https://github.com/infiniflow/ragflow/pull/15153 中做出了第一个贡献
* @Dimon0000000 在 https://github.com/infiniflow/ragflow/pull/15159 中做出了第一个贡献
* @nickmopen 在 https://github.com/infiniflow/ragflow/pull/15080 中做出了第一个贡献
* @jonathanchang31 在 https://github.com/infiniflow/ragflow/pull/14920 中做出了第一个贡献
* @glorydavid03023 在 https://github.com/infiniflow/ragflow/pull/15185 中做出了第一个贡献
* @Hz-186 在 https://github.com/infiniflow/ragflow/pull/15237 中做出了他们的第一个贡献
* @oktofeesh1 在 https://github.com/infiniflow/ragflow/pull/15236 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.25.5...v0.25.6

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.25.6` · 📅 发布：2026-05-27 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.25.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
