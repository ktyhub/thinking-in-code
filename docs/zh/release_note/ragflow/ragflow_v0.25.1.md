---
title: "ragflow v0.25.1"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.25.1"
version: "v0.25.1"
published: "2026-04-30"
type: "patch"
lang: "zh"
---

# ragflow v0.25.1

## 总结

### 改进

- API 重构和统一：将 Web API 标准化为跨所有端点的 RESTful 约定，统一文档创建和索引流程，同时保持向后兼容性。
- 解析优化：添加 [OpenDataLoader](https://github.com/opendataloader-project/opendataloader-pdf) PDF 后端。 [#14097](https://github.com/infiniflow/ragflow/pull/14097)
- 为大型 PDF（>50 页）引入延迟加载和分块解析，显着减少内存占用。 [#14385](https://github.com/infiniflow/ragflow/pull/14385)

### 数据源

允许同步 Bitbucket、Gmail、Google Drive 和 Airtable 中已删除的文件。

### 模型支持

- DeepSeek v4

### 模型提供商

- 优刻得

### 错误修复

- v0.24.0 到 v0.25.0 升级期间的元数据可见性问题。
- 重复的聊天输出。


## 发生了什么变化
* 重构：https://github.com/infiniflow/ragflow/pull/14248 中 @xugangqiang 的文档 get_filter 整合 WEB API 和 HTTP API
* 文档：在 https://github.com/infiniflow/ragflow/pull/14244 中添加 @hyl64 的 DeepWiki 开发者指南页面
* 文档：v0.25.0 中的 @writinwaters 支持 https://github.com/infiniflow/ragflow/pull/14259 中的用户级内存
* 重构：https://github.com/infiniflow/ragflow/pull/14239 中 @xugangqiang 整合 WEB API 和 HTTP API 文档信息
* Go：通过@JinHai-CN在https://github.com/infiniflow/ragflow/pull/14262中添加余额命令
* @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/14275 更新 release note
* Refa：调整聊天并在 https://github.com/infiniflow/ragflow/pull/14229 中搜索 @buua436 的宁静 API
* 重构：整合WEB API和HTTP API，用于https://github.com/infiniflow/ragflow/pull/14254中@xugangqiang的文档删除api
*修复：规范https://github.com/infiniflow/ragflow/pull/14271中@buua436最终聊天答案中的思考标签
* 修复：https://github.com/infiniflow/ragflow/pull/14272 中的 @6ba3i 将 MinerU API 端点切换到 /pdf_parse
* 文件：v0.25.0 release notes。作者：https://github.com/infiniflow/ragflow/pull/14284 的 @writinwaters
* 修复 #14213 在 https://github.com/infiniflow/ragflow/pull/14276 中创建文件夹不接受 @wangq8 的文件夹
* 修复 https://github.com/infiniflow/ragflow/pull/14285 中 @JinHai-CN 的 uv.lock
* 修复：文档和 sdk 支持通过 @Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/14283 中搜索带有 user_id 的消息
* 修复：@6ba3i 在 https://github.com/infiniflow/ragflow/pull/14282 中的 MinerU 3.x 输出发现和 API 合约
* 壮举：在 https://github.com/infiniflow/ragflow/pull/14270 中添加 @ucloudnb666 的 Astraflow 提供商支持（全球 + 中国端点）
* 在https://github.com/infiniflow/ragflow/pull/14290中添加@JinHai-CN的deepseek和moonshot模型json
* 修复上传流处理以防止 @bohdansolovie 在 https://github.com/infiniflow/ragflow/pull/14267 中截断文件
* 修复：在 https://github.com/infiniflow/ragflow/pull/14237 中通过 @spider-yamet 序列化 GraphRAG 实体解析合并以避免图形突变竞赛
* 在https://github.com/infiniflow/ragflow/pull/14299中设置@wangq8的图像标签v0.25.0
* 文档：从 v0.25.0 开始支持两个 PDF 解析器优化器。作者：https://github.com/infiniflow/ragflow/pull/14261 中的 @writinwaters
* 事实：https://github.com/infiniflow/ragflow/pull/14288 中的租户 api by @Magicbook1108
* 重构：迁移文档元数据配置更新 API by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14286
* 重构：https://github.com/infiniflow/ragflow/pull/14228 中的 @wangq8 的 API 连接器
* 修复：删除聊天页面思维模型中重复的文本输出。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/14301
* 修复：@dcc123456 在 https://github.com/infiniflow/ragflow/pull/14287 中的一些错误
* Go：在https://github.com/infiniflow/ragflow/pull/14296中添加@JinHai-CN的新提供商minimax
* 修复：调用测试页元数据不显示。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/14297
* 重构：REST API langfuse api-key by @wangq8 in https://github.com/infiniflow/ragflow/pull/14315
* 重构：API file2document by @wangq8 in https://github.com/infiniflow/ragflow/pull/14306
* 重构：@xugangqiang 在 https://github.com/infiniflow/ragflow/pull/14289 中更新文档元数据
* 参考：https://github.com/infiniflow/ragflow/pull/14317 中的 @buua436 将 MCP API 迁移到 RESTful api
* 在https://github.com/infiniflow/ragflow/pull/14316中添加@wangq8的REDIS zcard
* 构建（deps）：通过https://github.com/infiniflow/ragflow/pull/14318中的@dependabot[bot]将/sdk/python中的lxml从6.0.2碰撞到6.1.0
* 通过 @Ricardo-M-L 在 https://github.com/infiniflow/ragflow/pull/14311 中为 ragflow 服务器健康检查添加缺少的超时
* 重构：系统 apis by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14298
* Refa：通过https://github.com/infiniflow/ragflow/pull/14291中的@buua436将块API迁移到RESTful路由
* API 重构：https://github.com/infiniflow/ragflow/pull/14324 中 @wangq8 的 stats_api 和 plugin_api
* 修复 https://github.com/infiniflow/ragflow/pull/14328 中 @wangq8 从 api-key 的 #14298 到 api_key 的提交覆盖
* 壮举：通过 @Magicbook1108 在 https://github.com/infiniflow/ragflow/pull/14325 中优化标题块
*参考：删除https://github.com/infiniflow/ragflow/pull/14322中的@buua436遗留的MCP服务器网络API
* 修复 https://github.com/infiniflow/ragflow/pull/14329 中 @newyangyang 的 azure blob put 方法参数
* 壮举：@Magicbook1108 在 https://github.com/infiniflow/ragflow/pull/14157 中的特工 api
* 修复：将 Langfuse 集成从 start_ Generation 迁移到 start_obse…，作者：https://github.com/infiniflow/ragflow/pull/14205 中的 @RazmikGevorgyan
* @wangq8 在 https://github.com/infiniflow/ragflow/pull/14334 中重构用户 REST API
* 壮举：@Magicbook1108 在 https://github.com/infiniflow/ragflow/pull/14346 中的 deepseek v4
* https://github.com/infiniflow/ragflow/pull/14231中@qinling0210在GO中实现retrieve_test
* 文档：修复 https://github.com/infiniflow/ragflow/pull/14352 中@MukundaKatta 的 API 按键指南拼写错误
* 修复 api 用户补丁动词在 https://github.com/infiniflow/ragflow/pull/14358 中 @wangq8 不起作用
* Refa ：将代理 webhook 路由迁移到 https://github.com/infiniflow/ragflow/pull/14330 中的 @buua436 的 REST APIs
* 修复：允许 @Lynn-Inf 在 https://github.com/infiniflow/ragflow/pull/14331 中使用 image2text 作为聊天模型
* 壮举：通过 https://github.com/infiniflow/ragflow/pull/14218 中的 @ParasSondhi 通过本机分块端点路由 docling 解析
* 修复：https://github.com/infiniflow/ragflow/pull/14281 中 @kuishou68 检查 VariableAssigner _remove_first/_remove_last 中 len 之前的 isinstance
* 修复 blob 同步：在 https://github.com/infiniflow/ragflow/pull/14357 中@6ba3i 下载之前跳过不支持的文件
* 事实参考：@writinwaters 在 https://github.com/infiniflow/ragflow/pull/14363 中更新了 rootAsHeadingTip
* 修复：PaddleOCR 对话框中的按钮样式应用不正确。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/14350
* 通过@wangq8在https://github.com/infiniflow/ragflow/pull/14364中更新API文档
* 文档：@writinwaters 在 https://github.com/infiniflow/ragflow/pull/14365 中更新了 0.25-specific 常见问题解答
* Go：在https://github.com/infiniflow/ragflow/pull/14336中添加gitee和siliconflow作为模型提供者@JinHai-CN
* 壮举：@Magicbook1108 在 https://github.com/infiniflow/ragflow/pull/14354 中引入管道的最小类型检查
* 修复：允许在 https://github.com/infiniflow/ragflow/pull/14356 中通过 @Lynn-Inf 搜索 id 或 _id
* 功能：在 https://github.com/infiniflow/ragflow/pull/14097 中添加 @wdeveloper16 的 OpenDataLoader PDF 解析器后端 (#14058)
* 修复：在爬取之前验证 URL 方案和解析的 IP，以防止 https://github.com/infiniflow/ragflow/pull/14090 中 @xingxing21 出现 SSRF
* feat(api)：通过@euvre在https://github.com/infiniflow/ragflow/pull/14222中添加统一索引API和数据集管理端点
* Refa：统一https://github.com/infiniflow/ragflow/pull/14345中@buua436在REST文档API下的文档创建流程
* 壮举：将 RAPTOR 层元数据保存在 https://github.com/infiniflow/ragflow/pull/13286 中 @yuch85 的摘要块上
* 修复：在聊天共享页面中跳过画布 SSE 获取，以消除 https://github.com/infiniflow/ragflow/pull/14190 中@euvre 产生的虚假 103 错误
* 修复：通过 https://github.com/infiniflow/ragflow/pull/14153 中的 @euvre 处理 update() 方法中的无限表不存在错误 (3022)
* 壮举：将 PDF 书签大纲保留为 https://github.com/infiniflow/ragflow/pull/13287 中 @yuch85 的文档元数据
* 杂务（CLAUDE.md）：通过https://github.com/infiniflow/ragflow/pull/14381中的@ZhenhangTung将共享UI组件锁定约定添加到CLAUDE.md
* Refa：在 https://github.com/infiniflow/ragflow/pull/14380 中恢复 @buua436 兼容 openai 的聊天完成 api
* Go：阿里云模型提供者 @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14379
* 修复：删除硬编码页面限制，导致 https://github.com/infiniflow/ragflow/pull/14382 中的 @euvre 对大型 PDF（>300 页）解析失败
* 重构：将 @xugangqiang 的工件 API 迁移到 https://github.com/infiniflow/ragflow/pull/14348
* 删除https://github.com/infiniflow/ragflow/pull/14394中@wangq8的evaluation_app.py和kb_app.py
* 修复 https://github.com/infiniflow/ragflow/pull/14383 中 @6ba3i 升级的 v0.24 数据集的元数据解析回归
* perf：@yuzhichang 在 https://github.com/infiniflow/ragflow/pull/14385 中对大型 PDF 进行惰性 img_np 加载和分块 parse_into_bboxes
* 重构：迁移https://github.com/infiniflow/ragflow/pull/14359中@xugangqiang聊天中使用的文档上传信息
* 修复：支持https://github.com/infiniflow/ragflow/pull/14396中@buua436在代理更新api中发布
* Helm 模板 ragflow.yaml：根据 https://github.com/infiniflow/ragflow/pull/14361 中 @mginfn 的 Docker 文件 v0.25.0 修复 nginx-config-volume mountPath
* 修复：优先探索会话 ID 并通过 https://github.com/infiniflow/ragflow/pull/14399 中的 @buua436 重置默认对话变量
* 重构：deco doc-parse API，@xugangqiang 在 https://github.com/infiniflow/ragflow/pull/14367 中不再使用
* Refa：对齐列表操作和严格模式 by @buua436 in https://github.com/infiniflow/ragflow/pull/14387
* 在https://github.com/infiniflow/ragflow/pull/14393中添加@wangq8的任务API
* 重构：https://github.com/infiniflow/ragflow/pull/14401中@buua436优化代理重置对话变量默认值
* 重构：https://github.com/infiniflow/ragflow/pull/14337 中@xugangqiang 的文档批量更改状态
* 测试：为 https://github.com/infiniflow/ragflow/pull/14390 中的 @euvre 在 #14222 中删除的数据集管理端点添加缺少的 HTTP API 测试
* 重构：https://github.com/infiniflow/ragflow/pull/14366中@xugangqiang的deco文档upload_and_parse API
* 转到：添加新的提供商：google by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14395
* 重构：迁移https://github.com/infiniflow/ragflow/pull/14351中@xugangqiang运行的api文档
* 重构：将 @xugangqiang 的文档缩略图 API 迁移到 https://github.com/infiniflow/ragflow/pull/14344 中
* 修复：https://github.com/infiniflow/ragflow/pull/14403中@xugangqiang添加executor.shutdown
* 重构：https://github.com/infiniflow/ragflow/pull/14327 中的@xugangqiang 文档更改解析器
* 文档：添加了数据库架构和迁移指南。作者：https://github.com/infiniflow/ragflow/pull/14404 的 @writinwaters
* 修复：@xugangqiang 在 https://github.com/infiniflow/ragflow/pull/14415 聊天中的缩略图问题
* Go：在https://github.com/infiniflow/ragflow/pull/14409中添加@JinHai-CN的volcengine
*修复：在https://github.com/infiniflow/ragflow/pull/14416中通过@buua436保留无穷大available_int零过滤器
* 修复：在https://github.com/infiniflow/ragflow/pull/14413中对齐聊天推荐和@buua436的点赞API
* 如果https://github.com/infiniflow/ragflow/pull/14417中@wangq8没有这样的任务id，则始终返回成功
* https://github.com/infiniflow/ragflow/pull/14398中@qinling0210重构GO中的模型
* Go：修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/14418中的编译
* 修复 https://github.com/infiniflow/ragflow/pull/14420 中 @6ba3i 的手动幼稚解析器位置提取回退
* 修复https://github.com/infiniflow/ragflow/pull/14397中@spider-yamet在/不在列表值中手动meta_data_filter的不区分大小写的匹配
* 功能：通过 @Magicbook1108 在 https://github.com/infiniflow/ragflow/pull/14353 中为更多连接器启用同步删除的文件
* Go：通过@JinHai-CN更新https://github.com/infiniflow/ragflow/pull/14423中的数据库模型
* https://github.com/infiniflow/ragflow/pull/14426中@JinHai-CN将模型类型重构为模型类
* 修复：https://github.com/infiniflow/ragflow/pull/14425 中 @buua436 的代理工具调用空响应、模式验证和 DeepSeek 思考历史
* 修复：@xugangqiang 在 https://github.com/infiniflow/ragflow/pull/14421 中保存后文档级自动元数据配置丢失
* Go：实现提供者：Moonshot by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14433
* 壮举：@Magicbook1108 在 https://github.com/infiniflow/ragflow/pull/14436 中提供更多桨模型
* 通过@qinling0210在https://github.com/infiniflow/ragflow/pull/14437中简化编码
* 修复：谷歌身份验证 - gmail && google-drive by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14422
* 重构：通过 https://github.com/infiniflow/ragflow/pull/14402 中的 @euvre 将块检索测试和知识图迁移到 REST API 端点
* 修复：基于https://github.com/infiniflow/ragflow/pull/14440中@Magicbook1108的#14436进行更新
* 修复：在https://github.com/infiniflow/ragflow/pull/14438中启用@Magicbook1108在airtable中同步删除的文件
* 重构：通过 https://github.com/infiniflow/ragflow/pull/14388 中的 @Woody-Hu 改进 QwenRerank 逻辑
* feat(google-drive)：优化内存有效负载并通过 https://github.com/infiniflow/ragflow/pull/14372 中的 @ParasSondhi 启用同步删除
* 壮举：在 https://github.com/infiniflow/ragflow/pull/14450 中同步@Magicbook1108 在 Bitbucket 中删除的文件
* 前往：https://github.com/infiniflow/ragflow/pull/14453中@JinHai-CN更新聊天网址
* 修复：在 https://github.com/infiniflow/ragflow/pull/14454 中删除 @buua436 检索中删除的文档块
* 修复：数据集：配置“通用分块方法”时，分块大小、父子切片等选项不可用。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/14459
* 删除model_bundle.go，在https://github.com/infiniflow/ragflow/pull/14458中通过@qinling0210修改chat_session.go
* 修复：在https://github.com/infiniflow/ragflow/pull/14457中添加@buua436的检索后备注释
* 通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/14427 中添加向后兼容的 API
* Go：实现提供者：volcengine by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14460
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/14469中删除graphrag raptor的问题
* 通过 @wangq8 修复 https://github.com/infiniflow/ragflow/pull/14471 中的查询参数类型
* 修复：Cli点击`/chats/widget`页面右下角按钮无法显示对话框的问题。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/14465
* 功能：为 Gmail 启用同步已删除文件 && 修复 https://github.com/infiniflow/ragflow/pull/14462 中 @Magicbook1108 的 google 云端硬盘问题
* 将 PR14454 移植到 https://github.com/infiniflow/ragflow/pull/14463 中的 @qinling0210 的 GO (PruneDeletedChunks)
* 更新https://github.com/infiniflow/ragflow/pull/14441中@JinHai-CN创建模型实例命令
* 修复https://github.com/infiniflow/ragflow/pull/14475中@wangq8的图形任务类型
* 修复@wangq8在https://github.com/infiniflow/ragflow/pull/14484中删除图表的问题
* 修复：当 @euvre 在 https://github.com/infiniflow/ragflow/pull/14477 中选择“数据集”时，RAPTOR“生成范围”重置为“单个文件”
* 功能：在 https://github.com/infiniflow/ragflow/pull/14481 中启用 @Magicbook1108 同步在 gitlab 中删除的文件
* feat(dropbox)：支持 @bitloi 在 https://github.com/infiniflow/ragflow/pull/14476 中同步已删除文件
* 功能：在 https://github.com/infiniflow/ragflow/pull/14451 中启用 @Magicbook1108 为 Discord 同步删除的文件
* Go：实现提供者：MiniMax by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14478
* Go：在https://github.com/infiniflow/ragflow/pull/14485中添加@JinHai-CN的drop实例模型
* 文档：https://github.com/infiniflow/ragflow/pull/14483 中@writinwaters 更新了标题分块器参考
* 修复：FileLogsTable 中的管道列标题显示不正确。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/14489
* 修复 https://github.com/infiniflow/ragflow/pull/14490 中 @wangq8 的访问数据集错误
* 文档：@writinwaters，https://github.com/infiniflow/ragflow/pull/14492
* 修复https://github.com/infiniflow/ragflow/pull/14480中@wangq8的元数据配置
* 修复：https://github.com/infiniflow/ragflow/pull/14479 中 @euvre 的数据集摄取页面中未显示文件日志
* 杂务（deps）：https://github.com/infiniflow/ragflow/pull/14513 中的 @dependabot[bot] 将 google.golang.org/grpc 从 1.66.2 转换为 1.79.3
* 修复：GraphRAG 图标不显示。通过 @cike8899 在 https://github.com/infiniflow/ragflow/pull/14514
* 文档：更新 https://github.com/infiniflow/ragflow/pull/14488 中 @asiroliu 的自述文件和文档中对 v0.25.1 的版本引用

## 新贡献者
* @hyl64 在 https://github.com/infiniflow/ragflow/pull/14244 中做出了第一个贡献
* @ucloudnb666 在 https://github.com/infiniflow/ragflow/pull/14270 中做出了第一个贡献
* @bohdansolovie 在 https://github.com/infiniflow/ragflow/pull/14267 中做出了第一个贡献
* @newyangyang 在 https://github.com/infiniflow/ragflow/pull/14329 中做出了第一个贡献
* @RazmikGevorgyan 在 https://github.com/infiniflow/ragflow/pull/14205 中做出了第一个贡献
* @MukundaKatta 在 https://github.com/infiniflow/ragflow/pull/14352 中做出了第一个贡献
* @ParasSondhi 在 https://github.com/infiniflow/ragflow/pull/14218 中做出了第一个贡献
* @kuishou68 在 https://github.com/infiniflow/ragflow/pull/14281 中做出了第一个贡献
* @wdeveloper16 在 https://github.com/infiniflow/ragflow/pull/14097 中做出了第一个贡献
* @xingxing21 在 https://github.com/infiniflow/ragflow/pull/14090 中做出了他们的第一个贡献
* @yuch85 在 https://github.com/infiniflow/ragflow/pull/13286 中做出了第一个贡献
* @mginfn 在 https://github.com/infiniflow/ragflow/pull/14361 中做出了第一个贡献
* @Haruko386 在 https://github.com/infiniflow/ragflow/pull/14433 中做出了他们的第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.25.0...v0.25.1

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.25.1` · 📅 发布：2026-04-30 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.25.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
