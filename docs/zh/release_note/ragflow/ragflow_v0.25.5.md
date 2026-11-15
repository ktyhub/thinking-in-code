---
title: "ragflow v0.25.5"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.25.5"
version: "v0.25.5"
published: "2026-05-20"
type: "patch"
lang: "zh"
---

# ragflow v0.25.5

## 总结

发布于 2026 年 5 月 20 日。

### 新功能

- 在管理面板中添加本地和 SSH 提供商。 [#15039](https://github.com/infiniflow/ragflow/pull/15039)

### 改进

- 加速数据集搜索路径，通过删除昂贵的向量获取和重新排序相似性计算步骤，将延迟减少 50-100%。 [#14970](https://github.com/infiniflow/ragflow/pull/14970)
- 将元数据过滤器下推至无限，显着加快元数据过滤速度。 [#14974](https://github.com/infiniflow/ragflow/pull/14974)
- 添加了 TTS 的 Redis 缓存。 [#14851](https://github.com/infiniflow/ragflow/pull/14851)
- 原子文档计数器更新 [#14867](https://github.com/infiniflow/ragflow/pull/14974)
- 改进了服务器启动速度和内存使用情况 [#14973](https://github.com/infiniflow/ragflow/pull/14973)
- 代理：结构化输出聚合 [#13384](https://github.com/infiniflow/ragflow/issues/13384) [#14848](https://github.com/infiniflow/ragflow/pull/14848)
- 代理：元数据过滤器重用。 [#14849](https://github.com/infiniflow/ragflow/pull/14849)
- 优化连接器仪表板。 [#14979](https://github.com/infiniflow/ragflow/pull/14979)
## 发生了什么变化
* 修复：优化重排序模块的鲁棒性并修复 @07heco 在 https://github.com/infiniflow/ragflow/pull/14264 中的错误
* 修复：在变量分配器中用 raise ValueError 替换损坏的断言，并在 https://github.com/infiniflow/ragflow/pull/13906 中用 @Ricardo-M-L 循环
* 修复：通过https://github.com/infiniflow/ragflow/pull/13294中的@Br1an67将输入和输出令牌使用情况发送到Langfuse
* Go：为 MiniMax 提供程序实现 TTS，并通过@Haruko386 在 https://github.com/infiniflow/ragflow/pull/14911 中对 TTS 进行 CLI 测试
* 修复：通过 https://github.com/infiniflow/ragflow/pull/13986 中的 @Ricardo-M-L 更正 set_variable_param_value 中的嵌套路径遍历
* 修复 https://github.com/infiniflow/ragflow/pull/14310 中@Ricardo-M-L 在 HTML 到 PDF 转换中的 WebDriver 资源泄漏
* 文档：https://github.com/infiniflow/ragflow/pull/14915 中 @buua436 的代码组件输出部分
* GO：将时间单位与 Python 对齐，并通过 https://github.com/infiniflow/ragflow/pull/14875 中的 @buua436 将时间戳注入集中到 BaseModel 中
* 修复：https://github.com/infiniflow/ragflow/pull/14854 中 @dale053 缺少对代理文件上传和下载端点的身份验证
* Go：修复https://github.com/infiniflow/ragflow/pull/14917中@buua436的LastLoginTime更新
* 修复：https://github.com/infiniflow/ragflow/pull/13513 中 @gambletan 在 LLM 聊天模型中将可变默认参数替换为 None
* Go：通过https://github.com/infiniflow/ragflow/pull/14918中的@buua436更新用户设置字段
* 修复：https://github.com/infiniflow/ragflow/pull/14867 中的@dale053 的文档和知识库的原子块/令牌计数器更新
* 修复（代理）：通过 @eviaaaaa 在 https://github.com/infiniflow/ragflow/pull/14217 中处理重复的 MCP 工具名称
* 修复：https://github.com/infiniflow/ragflow/pull/14777 中的 @wdeveloper16 在 test_db_connection 中可靠地关闭数据库连接
* Go：通过@Haruko386在https://github.com/infiniflow/ragflow/pull/14926中实现fishaudio的TTS、openrouter和fishaudio的asr
* 功能：这使得 SelectWithSearch 能够按标签进行搜索。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/14925
* 文档：@writinwaters 在 https://github.com/infiniflow/ragflow/pull/14929 中最终确定了 v0.25.4 release note
* 修复：https://github.com/infiniflow/ragflow/pull/14927中@buua436添加文档下载端点并重构现有下载功能
* 修复：在 https://github.com/infiniflow/ragflow/pull/13993 中 @octo-patch 发送后续助理消息后保留上传的文件附件
* 修复（llm）：Tongyi-Qianwen 嵌入使用正确的 DashScope 本机 API 作为 https://github.com/infiniflow/ragflow/pull/14784 中 @sham-sr 的国际 URL
* 修复（代理）：通过 https://github.com/infiniflow/ragflow/pull/14760 中的 @yingjianzh 传递 top_k 并修复相似权重滑块行为
* 安全性：始终在 @sebastiondev 在 https://github.com/infiniflow/ragflow/pull/14803 的 deserialize_b64 (CWE-502) 中使用 RestrictedUnpickler
* Go: 在https://github.com/infiniflow/ragflow/pull/14892中添加@JinHai-CN的文件解析命令
*修复（agentbot）：https://github.com/infiniflow/ragflow/pull/14848中@plind-junior在非流式完成中聚合结构化输出
* 修复：https://github.com/infiniflow/ragflow/pull/14062 中的 @octo-patch 默认启用 GitHub 连接器同步 PR 和问题
* Go：在 https://github.com/infiniflow/ragflow/pull/14880 中的 @hunnyboy1217 在 vLLM 驱动程序中实现 Rerank (#14878)
* 文档：通过 @SnakeEye-sudo 在 https://github.com/infiniflow/ragflow/pull/14557 中添加通过 RAGFlow 使用 Ollama 的常见问题解答条目
* Go：添加cli命令，列出https://github.com/infiniflow/ragflow/pull/14948中@JinHai-CN的数据集文档
* Go：通过 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/14944 中实现 Siliconflow 的 TTS、ASR 和 StepFun 的 TT
* 修复：将 https://github.com/infiniflow/ragflow/pull/13929 中 @Ricardo-M-L 的属性名称拼写错误 model_speciess 更正为 model_species
*壮举：将Python最小值从3.12提升到3.13，在https://github.com/infiniflow/ragflow/pull/14767中通过@wdeveloper16删除strenum backport
* Go：实现 PaddleOCR 提供程序并通过 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/14954 中为 CoHere 实现 ASR
* https://github.com/infiniflow/ragflow/pull/14214 中的 @xjq123456 更新了 Feat/web markdown UI
* 修复：通过 https://github.com/infiniflow/ragflow/pull/13988 中的@Ricardo-M-L 纠正代理组件中的literal_eval 调度和 bool isinstance 排序
* 重构：通过https://github.com/infiniflow/ragflow/pull/14247中的@07heco优化BaseTitleChunker以提高RAG文档块质量
* 由 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/14968 中碰撞到无穷大 v0.7.0
* 修复 https://github.com/infiniflow/ragflow/pull/14969 中 @6ba3i 的会话删除泄漏聊天上传 blob
* Go：在https://github.com/infiniflow/ragflow/pull/14895中由@pandadev66在Novita驱动程序中实现Embed（嵌入）
* Go：在https://github.com/infiniflow/ragflow/pull/14935中添加@jakearmstrong59的Jina聊天完成支持
* 在 https://github.com/infiniflow/ragflow/pull/14940 中添加 @carlos4s 的 Anthropic Go 模型提供者
* 修复：通过 https://github.com/infiniflow/ragflow/pull/14924 中的@Rene0422 保护 LLMBundle 中的空/空白嵌入输入（#14428）
* 重构：在 https://github.com/infiniflow/ragflow/pull/14970 中删除 @KevinHuSh 的 ES 向量获取
* https://github.com/infiniflow/ragflow/pull/14974 中的 @qinling0210 将元数据过滤器推送至 Infinity
* Go：实现提供者：CometAPI by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14930
* 修复：通过 @dale053 在 https://github.com/infiniflow/ragflow/pull/14860 中为代理 test_db_connection 端点添加 SSRF 防护
* Go：修复https://github.com/infiniflow/ragflow/pull/14975中@buua436的siliconflow嵌入响应
* 重构：加速ragflow服务器，通过@wangq8在https://github.com/infiniflow/ragflow/pull/14973中节省启动内存
*修复（api）：通过https://github.com/infiniflow/ragflow/pull/14747中的@dev111-actor强制租户访问连接器路由
* 重构：增强 graphrag - 第 2 部分，作者：@wangq8，https://github.com/infiniflow/ragflow/pull/14972
* Go：通过@buua436在https://github.com/infiniflow/ragflow/pull/14977中添加restful api路由别名
* Go：实现提供者：DeepInfra、XunFei by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14978
* 修复：当过滤器与 https://github.com/infiniflow/ragflow/pull/14967 中的 @hak2979 不匹配时，metadata_condition 返回所有文档
* 错误修复：修复@wangq8在https://github.com/infiniflow/ragflow/pull/14980中显示的标签
* 修复 https://github.com/infiniflow/ragflow/pull/14956 中 @jakearmstrong59 的管理 CLI 系统变量命令
* Go：修复忘记策略验证并修复https://github.com/infiniflow/ragflow/pull/14976中@buua436的内存更新差异检查
* Go：在https://github.com/infiniflow/ragflow/pull/14982中对齐@buua436的文档列表响应
* Go：在https://github.com/infiniflow/ragflow/pull/14984中添加@buua436的数据集图api
* 壮举：@Magicbook1108 在 https://github.com/infiniflow/ragflow/pull/14979 中对连接器仪表板进行全面优化
* 修复：在更新时验证内存租户模型 ID，并通过 https://github.com/infiniflow/ragflow/pull/14923 中的 @jony376 强制执行内存管道中的租户范围
* 其他：修复@kingloon在https://github.com/infiniflow/ragflow/pull/14987中的一些拼写错误
* Go：实现提供者：MinerU by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14990
* 在 https://github.com/infiniflow/ragflow/pull/14958 中添加 @tmimmanuel 的复制聊天提供程序
* 修复：https://github.com/infiniflow/ragflow/pull/14991 中 @buua436 的代理会话日志消息
* 修复：https://github.com/infiniflow/ragflow/pull/14240 中 @lksr1201 检测 MinerU vlm-http-client 后端输出文件
* 修复：opencc c 库使用 fgets() 读取 @orbisai0security 在 https://github.com/infiniflow/ragflow/pull/13970 中的 text.c 中的字典...
* feat(tts)：在 Redis 中缓存合成语音，以避免 @plind-junior 在 https://github.com/infiniflow/ragflow/pull/14851 中进行冗余调用
* 修复（检索）：在 https://github.com/infiniflow/ragflow/pull/14849 中 @plind-junior 的迭代中保持手动元数据过滤器可重用
* Go：实现提供者：Xinference by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14938
* 在 https://github.com/infiniflow/ragflow/pull/14957 中添加 @tmimmanuel 的 TogetherAI 聊天提供商
* 修复：在 https://github.com/infiniflow/ragflow/pull/14941 中恢复 @Rene0422 在 add_llm 中保存的 api_key 回退（#14921）
* 壮举：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/14993 中为宁静的 api 套件添加新的测试和测试用例
* 壮举：MinerU 解析器中的 VLM 图像描述 (#14869) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/14946
* feat(sdk)：使Begin输入可在https://github.com/infiniflow/ragflow/pull/14842中的@plind-junior的Session.ask上发现
* 壮举：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/14996 中为宁静的 api 套件添加新的测试和测试用例
* 在 https://github.com/infiniflow/ragflow/pull/14981 中由 @qinling0210 重构 GO 引擎中的函数
* Go：实现提供者：302.AI 和 JieKou-AI by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15034
* 壮举：通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/15038 中为宁静的 api 套件添加新的测试和测试用例
* 修复(go)：保护 @bitloi 在 https://github.com/infiniflow/ragflow/pull/15030 中创建自定义基本 URL 驱动程序
* 修复：移动文件夹的文件夹树形菜单无法滚动。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/15037
* 修复：https://github.com/infiniflow/ragflow/pull/15026 中 @bitloi 的 Langfuse 聊天观察
* 功能：通过 https://github.com/infiniflow/ragflow/pull/15039 中的 @Magicbook1108 在管理面板中添加本地和 ssh 提供程序
* 修复 @wangq8 在 https://github.com/infiniflow/ragflow/pull/15054 中的不一致异步问题
* Go：在https://github.com/infiniflow/ragflow/pull/15051中实现提供者：MinerU_Local by @Haruko386
* 文档：v0.25.5 release note 的初始草案。作者：https://github.com/infiniflow/ragflow/pull/15058 中的 @writinwaters
* 文档：更新 https://github.com/infiniflow/ragflow/pull/15059 中 @JinHai-CN 的自述文件和文档中对 v0.25.5 的版本引用

## 新贡献者
* @Br1an67 在 https://github.com/infiniflow/ragflow/pull/13294 中做出了第一个贡献
* @sham-sr 在 https://github.com/infiniflow/ragflow/pull/14784 中做出了第一个贡献
* @yingjianzh 在 https://github.com/infiniflow/ragflow/pull/14760 中做出了第一个贡献
* @SnakeEye-sudo 在 https://github.com/infiniflow/ragflow/pull/14557 中做出了第一个贡献
* @xjq123456 在 https://github.com/infiniflow/ragflow/pull/14214 中做出了第一个贡献
* @jakearmstrong59 在 https://github.com/infiniflow/ragflow/pull/14935 中做出了第一个贡献
* @carlos4s 在 https://github.com/infiniflow/ragflow/pull/14940 中做出了第一个贡献
* @Rene0422 在 https://github.com/infiniflow/ragflow/pull/14924 中做出了第一个贡献
* @dev111-actor 在 https://github.com/infiniflow/ragflow/pull/14747 中做出了第一个贡献
* @hak2979 在 https://github.com/infiniflow/ragflow/pull/14967 中做出了第一个贡献
* @kingloon 在 https://github.com/infiniflow/ragflow/pull/14987 中做出了第一个贡献
* @lksr1201 在 https://github.com/infiniflow/ragflow/pull/14240 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.25.4...v0.25.5

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.25.5` · 📅 发布：2026-05-20 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.25.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
