---
title: "ragflow v0.25.2"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.25.2"
version: "v0.25.2"
published: "2026-05-09"
type: "patch"
lang: "zh"
---

# ragflow v0.25.2

## 总结

### 改进

- API 重构和统一：继续将 Web API 过渡到 RESTful 约定，确保所有旧端点的向后兼容性。

### 数据源

- 引入轻量级快照机制，用于跨 Moodle、钉钉 AI Table、RSS 等 8 个数据源同步已删除文件，确保忠实反映所有远程数据源。 [#14362](https://github.com/infiniflow/ragflow/issues/14362)[#14499](https://github.com/infiniflow/ragflow/pull/14499)

### 错误修复

- v0.24.0 到 v0.25.0 升级期间的元数据可见性问题。
- 重复的聊天输出。
- 元数据过滤在内存中处理，而不是利用 Elasticsearch，从而产生性能瓶颈。 [#14576](https://github.com/infiniflow/ragflow/pull/14576)


## 发生了什么变化
* 壮举：在 https://github.com/infiniflow/ragflow/pull/14419 中通过 @FuturMix 添加 FuturMix 作为模型提供者
* perf：通过 @Zzappy24 在 https://github.com/infiniflow/ragflow/pull/14369 中避免嵌入累积中的 O(n²) 数组增长
* 修复：优化https://github.com/infiniflow/ragflow/pull/14473中@buua436批量删除文件的问题
* 修复：在https://github.com/infiniflow/ragflow/pull/14472中添加@buua436的文档删除权限检查
* 杂务（deps）：通过 https://github.com/infiniflow/ragflow/pull/14516 中的 @dependabot[bot] 将 go.opentelemetry.io/otel 从 1.39.0 切换到 1.41.0
* 修复：@6ba3i 在 https://github.com/infiniflow/ragflow/pull/14518 中手动/天真的大纲元组解包崩溃
* 文档：由 @writinwaters 在 https://github.com/infiniflow/ragflow/pull/14519 中更新了 v0.25.1 release note
* feat(seafile)：支持通过 @spider-yamet 在 https://github.com/infiniflow/ragflow/pull/14499 中通过 slim 快照同步已删除文件
* 功能：在https://github.com/infiniflow/ragflow/pull/14486中添加@Magicbook1108在管道中删除页眉和页脚的按钮
* 壮举：@yingfeng 在 https://github.com/infiniflow/ragflow/pull/13908 中为上下文引擎添加技能空间
* 修复：Oceanbase 数据库连接器在 https://github.com/infiniflow/ragflow/pull/14470 中的 @orbisai0security 在 ob_conn.py 中构造 sql...
* feat(asana)：支持https://github.com/infiniflow/ragflow/pull/14468中@bitloi的已删除文件同步
* feat(zendesk): 支持 @bitloi 在 https://github.com/infiniflow/ragflow/pull/14487 中同步已删除文件
* 修复https://github.com/infiniflow/ragflow/pull/14529中@JinHai-CN的版本信息
* https://github.com/infiniflow/ragflow/pull/14526 中不允许按 @wangq8 的 id 排序
* 简化聊天并支持https://github.com/infiniflow/ragflow/pull/14523中@qinling0210的多模态聊天
* 修复：聊天页面无法显示LaTeX公式。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/14531
* Go：实现提供者：Vllm by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14532
* 由 @wangq8 在 https://github.com/infiniflow/ragflow/pull/14536 中修复 #14443
* feat(webdav): 支持在 https://github.com/infiniflow/ragflow/pull/14491 中通过 @spider-yamet 的 slim 快照同步已删除文件
* feat(rss)：支持https://github.com/infiniflow/ragflow/pull/14493中@bitloi的已删除文件同步
*修复：删除https://github.com/infiniflow/ragflow/pull/14533中@buua436的delete_documents uuid验证
* 修复：https://github.com/infiniflow/ragflow/pull/14530 中 @Magicbook1108 同步数据源空列表
* 支持https://github.com/infiniflow/ragflow/pull/14537中@qinling0210的多模态聊天流
* 文档：@writinwaters 在 https://github.com/infiniflow/ragflow/pull/14543 中进行的少量编辑更新
* 文档：RAGFlow 现在支持 https://github.com/infiniflow/ragflow/pull/14544 中 @writinwaters 的 DeepSeek v4
* @Attili-sys 在 https://github.com/infiniflow/ragflow/pull/13464 中显示功能/可配置元数据
* 前往：CLI 在https://github.com/infiniflow/ragflow/pull/14573中通过@JinHai-CN进行文字、图片、视频聊天
* Go：通过https://github.com/infiniflow/ragflow/pull/14545中的@JinHai-CN将记录器移动到公共模块
* 杂务（deps-dev）：https://github.com/infiniflow/ragflow/pull/14578 中的 @dependabot[bot] 从 12.1.1 到 12.2.0 的凹凸枕头
* 使用GetChatModel，通过@qinling0210在https://github.com/infiniflow/ragflow/pull/14546中删除model_service.go中的重复函数
* 在 https://github.com/infiniflow/ragflow/pull/14547 中更新 @yingfeng 的 README
* Go：实现提供者：Ollama by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14580
* Go：实现提供者：xAI by @jack-stormentswe in https://github.com/infiniflow/ragflow/pull/14550
* 修复：在 https://github.com/infiniflow/ragflow/pull/14563 中通过 @Zzappy24 重试并发 CREATE/DROP 上的 RocksDB 元数据争用
* 通过 @6ba3i 在 https://github.com/infiniflow/ragflow/pull/14538 中修复 MinerU 输出回退和 NameError 回归
* feat(dingtalk-ai-table)：支持https://github.com/infiniflow/ragflow/pull/14525中@spider-yamet通过slim snapshot同步已删除文件
* 功能：在 https://github.com/infiniflow/ragflow/pull/14539 中添加 @buua436 的 IMAP 删除文档同步
* 内存 API：通过 https://github.com/infiniflow/ragflow/pull/14535 中的 @jony376 对内存和消息端点强制执行租户权限
* 修复：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/14582 中添加旧版代理完成 API 兼容性
* 修复（#14389）：规范 https://github.com/infiniflow/ragflow/pull/14410 中@Shiyao-Huang 过滤器中的列表元数据值
* 修复 https://github.com/infiniflow/ragflow/pull/14456 中的@euvre 将非流工具调用附加到 Agentic Agent 中的聊天历史记录时出现的 AttributeError
* 修复（connector_service）：添加时区设置和正确的间隔日志......由https://github.com/infiniflow/ragflow/pull/14446中的@alfaadriel
* 修复：https://github.com/infiniflow/ragflow/pull/14496 中的@sebastiondev 授权租户下载 beta 文档
* 通过规范化 `@OpenDataLoader` 并通过 https://github.com/infiniflow/ragflow/pull/14581 中的 @6ba3i 过滤不支持的解析器 kwargs 来修复 OpenDataLoader naive 解析
* feat(graphrag): 修复合并并发并通过@prpercival在https://github.com/infiniflow/ragflow/pull/14238中添加resume-from-checkpoint
* 修复：在https://github.com/infiniflow/ragflow/pull/14583中通过@buua436添加文件转换向后兼容性
* 重构：补全 -> https://github.com/infiniflow/ragflow/pull/14584 中 @wangq8 的补全
* 修复：https://github.com/infiniflow/ragflow/pull/14588 中 @buua436 按需引导代理副本
* 修复：通过 https://github.com/infiniflow/ragflow/pull/14564 中的 @vivek41-glitch 规范双转义的 LaTeX 反斜杠和 HTML 实体
* Go：实现提供者：lm-studio by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14586
* 错误修复：在 https://github.com/infiniflow/ragflow/pull/14594 中支持 @wangq8 的问题和 custom_header
* 修复https://github.com/infiniflow/ragflow/pull/14597中@wangq8的代理权限问题
* 修复：支持https://github.com/infiniflow/ragflow/pull/14596中@buua436的非流运行时代理完成
*修复：将base64添加到https://github.com/infiniflow/ragflow/pull/14599中@buua436的文档生成器输出中
* 恢复https://github.com/infiniflow/ragflow/pull/14602中@wangq8的“修复代理权限问题”
* 修复 https://github.com/infiniflow/ragflow/pull/14591 中@JinHai-CN 跨 RAGFlow 服务器的密钥不一致问题
* 重构：https://github.com/infiniflow/ragflow/pull/14587 中 @Woody-Hu 使用 warp 改进画布访问检查逻辑
* 由 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/14606 中碰撞到无穷大 v0.7.0-dev6
* feat(llm): 在 https://github.com/infiniflow/ragflow/pull/14610 中添加 @yuzhichang 的 MiniMax GroupId 标头支持
* Go：实现提供者：OpenAI by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14605
* 功能：为 RDBMS 启用同步已删除文件并修复 @Magicbook1108 在 https://github.com/infiniflow/ragflow/pull/14615 中删除最后一个文件的问题
* Go：实现提供者：Nvidia by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14623
* 允许 @wangq8 在 https://github.com/infiniflow/ragflow/pull/14624 中为#14617 提供更多任务日志
* 修复团队成员无法在https://github.com/infiniflow/ragflow/pull/14612中通过@wangq8编辑代理
* 修复：在 https://github.com/infiniflow/ragflow/pull/14626 中保留 @buua436 消息中的文档生成器下载元数据
* 修复: 支持https://github.com/infiniflow/ragflow/pull/14616中@buua436的工具调用配置
* 修复：在 Azure Blob (SAS/SPN) 中添加存储桶前缀，以防止 https://github.com/infiniflow/ragflow/pull/14174 中的 @octo-patch 覆盖跨数据集文件
* Go：修复https://github.com/infiniflow/ragflow/pull/14611中@JinHai-CN混合模式下的身份验证问题
* feat(moodle)：支持 @jack-stormentswe 在 https://github.com/infiniflow/ragflow/pull/14548 中的已删除文件同步
* Go：在https://github.com/infiniflow/ragflow/pull/14608中由@pandadev66在ZhipuAI驱动程序中实现Rerank
* 修复：https://github.com/infiniflow/ragflow/pull/14185 中的 @voidborne-d 将存储桶前缀添加到 Azure SPN 和 SAS 存储路径
* 功能：支持代码执行组件的本地提供程序并删除https://github.com/infiniflow/ragflow/pull/14637中@Magicbook1108的一些过时模型
* 修复：在https://github.com/infiniflow/ragflow/pull/14639中通过@dcc123456更改路线名称
* Perf：通过 @sxxtony 在 https://github.com/infiniflow/ragflow/pull/14576 中将元数据过滤器推送到 Elasticsearch
* 壮举：通过 @bakiburakogun 在 https://github.com/infiniflow/ragflow/pull/14650 中更新土耳其语本地化字符串
* 修复（go）：将 CheckConnection 连接到 https://github.com/infiniflow/ragflow/pull/14614 中 @pandadev66 的 llama、lm-studio 和 vllm 中的 ListModels
* Go：在https://github.com/infiniflow/ragflow/pull/14643中由@pandadev66在SiliconFlow驱动程序中实现Balance
* Go：在https://github.com/infiniflow/ragflow/pull/14652中实现提供者：@Haruko386的OpenRouter
* Go：在https://github.com/infiniflow/ragflow/pull/14632中@pandadev66在DeepSeek驱动程序中实现Balance
* 修复(go): 在 https://github.com/infiniflow/ragflow/pull/14636 中通过 @pandadev66 在 NVIDIA 驱动程序中实现 ListModels 和 CheckConnection
* 修复：通过 https://github.com/infiniflow/ragflow/pull/14347 中的 @D2758695161 将存储桶前缀添加到 Azure Blob SPN 和 SAS 存储操作
* Go：在 https://github.com/infiniflow/ragflow/pull/14656 中 @pandadev66 在 Gitee AI 驱动程序中实现 Rerank
* 修复：@Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/14654 中显示错误
* 参考资料：将 https://github.com/infiniflow/ragflow/pull/14633 中的文档预览/下载迁移到 @buua436 的 RESTful API
* 修复：https://github.com/infiniflow/ragflow/pull/14649 中 @jony376 在 `/files/link-to-datasets` 中缺少授权检查
* 修复https://github.com/infiniflow/ragflow/pull/14658中@JinHai-CN登录cli的问题
* Go：通过https://github.com/infiniflow/ragflow/pull/14657中的@Haruko386实现OpenRouter的剩余接口
* Go：在https://github.com/infiniflow/ragflow/pull/14647中通过@pandadev66在阿里云驱动中实现编码（嵌入）
* 修复：通过 https://github.com/infiniflow/ragflow/pull/14625 中的 @web-dev0521 对文档下载端点强制执行租户授权 (#14618)
* 修复：https://github.com/infiniflow/ragflow/pull/14613 中 @wanghualoong 的可折叠思维显示和单独的深度研究检索标签
* 修复：https://github.com/infiniflow/ragflow/pull/14663中@buua436添加/v1下文档下载的兼容路径
* 修复：canvas.run() 中的路径感知重置，以保留 https://github.com/infiniflow/ragflow/pull/14600 中 @wanghualoong 的交叉运行输出
*修复：https://github.com/infiniflow/ragflow/pull/14667中@Lynn-Inf的tenant_rerank_id类型
* Go CLI：修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/14665中注册用户的问题
* 修复（Go）：防止 https://github.com/infiniflow/ragflow/pull/14669 中 @Haruko386 本地模型连接检查中的全局状态污染
* Go：修复https://github.com/infiniflow/ragflow/pull/14672中@JinHai-CN的CLI注销命令
* 修复：在 kb_prompt 中处理 null document_metadata 以防止 @web-dev0521 在 https://github.com/infiniflow/ragflow/pull/14666 中引用崩溃 (#14651)
* 当 @qinling0210 在 https://github.com/infiniflow/ragflow/pull/14684 中启用元数据过滤器时，不要绕过重新排序的阈值
* 修复：在 https://github.com/infiniflow/ragflow/pull/14681 中通过 @Lynn-Inf 移动文件检查
* 修复：通过 @dale053 在 https://github.com/infiniflow/ragflow/pull/14592 中对聊天机器人 SDK 端点强制执行租户范围的授权
* 重构：允许在https://github.com/infiniflow/ragflow/pull/14685中通过@wangq8搜索多个数据集
*修复：https://github.com/infiniflow/ragflow/pull/14691中@dcc123456的数据集文件页面中的路由错误
* 修复https://github.com/infiniflow/ragflow/pull/14689中@wangq8的UI搜索多个数据集的问题
* Go：https://github.com/infiniflow/ragflow/pull/14676中@Joseff531在阿里云驱动中实现Rerank
* 修复go cli：在https://github.com/infiniflow/ragflow/pull/14692中搜索@JinHai-CN的数据集
* Go：管理员在https://github.com/infiniflow/ragflow/pull/14695中列出@JinHai-CN的摄取任务
* 文档：在 https://github.com/infiniflow/ragflow/pull/14696 中添加了 @writinwaters 配置 SSL 证书的指南
* 修复（同步）：每个连接器的范围文档 ID，以防止 https://github.com/infiniflow/ragflow/pull/14378 中的 @octo-patch 发生跨 KB 冲突
* 修复：IMAGE2TEXT→CHAT 回退，@vincentlambert 在 https://github.com/infiniflow/ragflow/pull/14704 中对租户模型服务中的 model_type 进行标准化
* 修复：在 https://github.com/infiniflow/ragflow/pull/14087 中 @xingxing21 在 use_sql 中进行 SQL 插值之前，将 kb_ids 验证为 UUID
*修复：基岩api_key被https://github.com/infiniflow/ragflow/pull/14707中的@vincentlambert在add_llm中的现有密钥回退覆盖
* 修复：处理缺失的“总”键，导致 @vincentlambert 在 https://github.com/infiniflow/ragflow/pull/13942 的深度研究检索中出现 KeyError
* 在https://github.com/infiniflow/ragflow/pull/14723中更新@yingfeng的自述文件
* 错误修复：保持文档 api 向后兼容 @wangq8 在 https://github.com/infiniflow/ragflow/pull/14726 中
* 修复（llm）：用 None 替换可变的默认 `gen_conf={}` + https://github.com/infiniflow/ragflow/pull/14566 中 @Ricardo-M-L 的防御副本
*修复：https://github.com/infiniflow/ragflow/pull/14645中@jony376在共享数据集访问检查中绕过私有数据集授权
* Go：实现提供者：HuggingFace by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14722
* 修复：https://github.com/infiniflow/ragflow/pull/14724 中的 @buua436 标记解析器 id
* 修复：通过https://github.com/infiniflow/ragflow/pull/14728中的@Magicbook1108过滤数据集文档中的api
* 文档：@writinwaters 在 https://github.com/infiniflow/ragflow/pull/14727 中添加了 v0.25.2 release note
* 修复 IDOR：通过 https://github.com/infiniflow/ragflow/pull/14725 中的 @zpf121 添加对文件祖先端点的权限检查
* 修复：@dcc123456 在 https://github.com/infiniflow/ragflow/pull/14734 中的一些错误
* 修复：https://github.com/infiniflow/ragflow/pull/14729 中@Lynn-Inf 将 id 处理为关键字
* Go CLI：由@JinHai-CN在https://github.com/infiniflow/ragflow/pull/14735中嵌入并重新排名
* 修复：通过 @buua436 在 https://github.com/infiniflow/ragflow/pull/14738 中添加旧系统 healthz 路由
* 修复：恢复https://github.com/infiniflow/ragflow/pull/14732中@euvre对具有现有块的数据集的嵌入模型切换
* 文档：@writinwaters 在 https://github.com/infiniflow/ragflow/pull/14740 中更新了发布日期
* 文档：更新 https://github.com/infiniflow/ragflow/pull/14731 中 @asiroliu 的自述文件和文档中对 v0.25.2 的版本引用

## 新贡献者
* @FuturMix 在 https://github.com/infiniflow/ragflow/pull/14419 中做出了第一个贡献
* @Zzappy24 在 https://github.com/infiniflow/ragflow/pull/14369 中做出了第一个贡献
* @orbisai0security 在 https://github.com/infiniflow/ragflow/pull/14470 中做出了第一个贡献
* @jack-stormentswe 在 https://github.com/infiniflow/ragflow/pull/14550 中做出了第一个贡献
* @jony376 在 https://github.com/infiniflow/ragflow/pull/14535 中做出了第一个贡献
* @Shiyao-Huang 在 https://github.com/infiniflow/ragflow/pull/14410 中做出了第一个贡献
* @alfaadriel 在 https://github.com/infiniflow/ragflow/pull/14446 中做出了第一个贡献
* @sebastiondev 在 https://github.com/infiniflow/ragflow/pull/14496 中做出了第一个贡献
* @prpercival 在 https://github.com/infiniflow/ragflow/pull/14238 中做出了第一个贡献
* @vivek41-glitch 在 https://github.com/infiniflow/ragflow/pull/14564 中做出了第一个贡献
* @pandadev66 在 https://github.com/infiniflow/ragflow/pull/14605 中做出了第一个贡献
* @voidborne-d 在 https://github.com/infiniflow/ragflow/pull/14185 中做出了第一个贡献
* @sxxtony 在 https://github.com/infiniflow/ragflow/pull/14576 中做出了第一个贡献
* @D2758695161 在 https://github.com/infiniflow/ragflow/pull/14347 中做出了第一个贡献
* @web-dev0521 在 https://github.com/infiniflow/ragflow/pull/14625 中做出了第一个贡献
* @wanghualoong 在 https://github.com/infiniflow/ragflow/pull/14613 中做出了第一个贡献
* @dale053 在 https://github.com/infiniflow/ragflow/pull/14592 中做出了第一个贡献
* @Joseff531 在 https://github.com/infiniflow/ragflow/pull/14676 中做出了第一个贡献
* @vincentlambert 在 https://github.com/infiniflow/ragflow/pull/14704 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.25.1...v0.25.2

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.25.2` · 📅 发布：2026-05-09 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.25.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
