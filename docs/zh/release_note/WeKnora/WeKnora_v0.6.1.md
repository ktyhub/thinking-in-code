---
title: "WeKnora v0.6.1"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.6.1"
version: "v0.6.1"
published: "2026-06-05"
type: "patch"
lang: "zh"
---

# WeKnora v0.6.1

## 发生了什么变化
* perf(repository): 从 Elasticsearch 搜索中排除嵌入字段… by @majinding in https://github.com/Tencent/WeKnora/pull/1433
* 修复（swagger）：修复一些 Swagger API 端点返回 404 错误并重新生成 @ChenRussell 在 https://github.com/Tencent/WeKnora/pull/1436 中的 Swagger 文档
* 修复（存储库）：用表名限定租户 ID，以解决 @ChenRussell 在 https://github.com/Tencent/WeKnora/pull/1435 中的不明确列引用
* 修复（前端）：通过 https://github.com/Tencent/WeKnora/pull/1438 中的 @lyingbug 改进租户设置和成员列表 UX
* 修复（摘要）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1447 中保留文档摘要中的图像标题/OCR 文本
* 修复（聊天历史记录）：#1431 在 https://github.com/Tencent/WeKnora/pull/1446 中保留 @tranphuongyd 的聊天消息中的多行格式
* 壮举（前端）：通过 https://github.com/Tencent/WeKnora/pull/1427 中的 @ochanism 在编辑器、列表和详细信息中公开 KB ↔ 矢量存储绑定
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/1451 中通过 @lyingbug 切换回主目录时保留 X-Tenant-ID 覆盖
* 重构（记录器）：支持 LOG_FORMAT 模板并通过 https://github.com/Tencent/WeKnora/pull/1426 中的 @nixidexiangjiao 强化级别着色
* feat(retriever)：在 https://github.com/Tencent/WeKnora/pull/1445 中的@ochanism 在第 3 阶段驱动程序之前添加 OpenSearch 类型准备
*壮举（wiki）：在https://github.com/Tencent/WeKnora/pull/1452中的@lyingbug在wiki页面上添加“在图表中查看”条目
* 修复：https://github.com/Tencent/WeKnora/pull/1459 中 @shenDv6 缩放时正确的代理选择器位置
* 修复（前端）：通过 https://github.com/Tencent/WeKnora/pull/1460 中的 @lyingbug 修正根 `zoom` 下的浮动 UI 定位（后续 #1459）
* 修复（聊天）：稳定工具排序并报告 @young1lin 在 https://github.com/Tencent/WeKnora/pull/1463 中缓存的提示标记
* 由 @cn-kali-team 在 https://github.com/Tencent/WeKnora/pull/1464 中进行的修复客户端模型类型枚举
* 修复：在 https://github.com/Tencent/WeKnora/pull/1462 中跳过 @wolfkill 启用的空 milvus 状态组
* 增加sandbox对windows编译支持，现在默认是linux的实现，windows直接编译报错 by @Hitvz in https://github.com/Tencent/WeKnora/pull/1434
* 重构（知识）：通过https://github.com/Tencent/WeKnora/pull/1467中的@lyingbug通过异步管道路由单个删除
* feat(chunk): 支持通过https://github.com/Tencent/WeKnora/pull/1470中的@lyingbug通过多个chunk_type参数过滤块
* feat(docreader)：改进https://github.com/Tencent/WeKnora/pull/1473中@lyingbug的微信公众号文章的网络解析器
* 重构（chunk）：通过https://github.com/Tencent/WeKnora/pull/1472中的@lyingbug从Chunk结构中删除未使用的VideoInfo字段
* 重构（知识）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1471 中使 checkStorageEngineConfigured 具有全局文件服务回退的服务方法
* 壮举（前端）：通过 https://github.com/Tencent/WeKnora/pull/1478 中的 @lyingbug 将 KB 元数据合并到信息弹出窗口中
* 修复：https://github.com/Tencent/WeKnora/pull/1480 中的 @lyingbug 尊重 KnowledgeQA 管道中的多回合禁用标志
* feat(builtin-models): 添加基于 YAML 的声明性配置，并通过 @jackson-jia-914 在 https://github.com/Tencent/WeKnora/pull/1453 中进行 ${ENV} 插值
*壮举（内置模型）：在 https://github.com/Tencent/WeKnora/pull/1483 中的 @lyingbug 的 #1453 之上添加 YAML 生命周期（删除、复活、默认不变量）
* 修复（前端）：在https://github.com/Tencent/WeKnora/pull/1492中通过@HelloAndyZhang切换到快速回答模式时应用默认上下文模板
* 修复（输入字段）：在 https://github.com/Tencent/WeKnora/pull/1489 中选择 @jackson-jia-914 的快速回答/智能推理以外的内置代理时出现错误的 toast
* 修复（doris）：内联 LIMIT/OFFSET 作为文字并启用参数 inte… by @SilentMil in https://github.com/Tencent/WeKnora/pull/1488
* feat(agent): 在https://github.com/Tencent/WeKnora/pull/1491中通过@HelloAndyZhang在代理编辑器中添加意图提示自定义
* 修复（管道）：当 @ChenRussell 在 https://github.com/Tencent/WeKnora/pull/1484 中重新排名 API 失败时，回退到原始检索结果
* 修复（数据源）：https://github.com/Tencent/WeKnora/pull/1477中@Once-the-sea-was-difficult-for-water在连接器中支持语雀团队令牌
* feat(retriever)：通过 @ochanism 在 https://github.com/Tencent/WeKnora/pull/1481 中添加带有门控接口存根的 OpenSearch 驱动程序框架
* 修复（代理）：保留代理意图提示空白并通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1494 中添加测试
* feat(system)：统一系统管理控制台+平台审计日志，作者：@lyingbug in https://github.com/Tencent/WeKnora/pull/1493
*壮举（cli）！：v0.7代理优先电汇合同+由@voidkey在https://github.com/Tencent/WeKnora/pull/1475中进行命令表面清理
* 壮举（设置）：在 https://github.com/Tencent/WeKnora/pull/1495 中通过 @lyingbug 重新组合侧边栏导航并重新设计模型卡
* 修复(im): 当 GetSession 返回应用哨兵时从已删除的会话中恢复 (#1499) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1500
* feat(rbac)：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/1504中为invite_only模式添加多用途共享链接邀请
* 重构(qdrant)：通过https://github.com/Tencent/WeKnora/pull/1508中的@sheep44044优化批量保存、映射迭代和错误包装
* 修复（agent）：通过@caiyuze-cpu在https://github.com/Tencent/WeKnora/pull/1505中强化工具参数解析以防止LLM类型不匹配
* feat(retriever): 在 https://github.com/Tencent/WeKnora/pull/1482 中通过 @ochanism 实现 OpenSearch 驱动程序读/写路径
* 修复（im）：通过https://github.com/Tencent/WeKnora/pull/1507中的@lyingbug使预先签名的URL流可端到端诊断
*修复（知识）：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/1503中防止跨树进度跟踪卡住解析
* 壮举（知识库）：通过 https://github.com/Tencent/WeKnora/pull/1514 中的 @lyingbug 集成跟踪可用性检查并增强 UI 交互
* 修复：在https://github.com/Tencent/WeKnora/pull/1523中添加@wolfkill的模型显示名称
* 修复：在https://github.com/Tencent/WeKnora/pull/1521中@wolfkill在编辑器中显示代理ID
* feat(cli): v0.8 — --dry-run、MCP 注释、@voidkey 在 https://github.com/Tencent/WeKnora/pull/1510 中的会话继续流
* 壮举：通过 https://github.com/Tencent/WeKnora/pull/1522 中的 @lyingbug 添加知识解析取消并完成后处理状态
* 修复：通过 @HelloWeit 在 https://github.com/Tencent/WeKnora/pull/1525 中将文档处理超时应用于异步任务
* 测试：在https://github.com/Tencent/WeKnora/pull/1529中添加@lyingbug的文档处理任务选项测试
* 壮举（前端）：通过 https://github.com/Tencent/WeKnora/pull/1532 中的 @lyingbug 改进代理/KB 编辑器 ID 显示和意图提示 UX
* 修复(im,kb)：https://github.com/Tencent/WeKnora/pull/1540中@lyingbug的存储URL重写和租户默认KB存储
* 壮举（前端）：通过 https://github.com/Tencent/WeKnora/pull/1543 中的 @lyingbug 增强 IMChannelsOverviewPanel 布局和功能
* 修复（knowledgeBase）：通过https://github.com/Tencent/WeKnora/pull/1544中的@lyingbug改进标签加载逻辑并确保一致的行为
* 修复（容器）：通过 https://github.com/Tencent/WeKnora/pull/1538 中的 @lyingbug 更正启动时的 ResetPendingTasks SQL
* 修复（knowledgeBase）：通过https://github.com/Tencent/WeKnora/pull/1545中的@lyingbug改进标签加载逻辑并确保一致的行为
* feat(retriever)：通过 @ochanism 在 https://github.com/Tencent/WeKnora/pull/1542 中激活 OpenSearch k-NN 驱动程序（PR 3 of 3）
* feat(mcp)：通过 https://github.com/Tencent/WeKnora/pull/1502 中的 @zhuzhaoyun 通过 Python MCP 服务器公开只读 wiki 工具
* feat(mcp-server)：在https://github.com/Tencent/WeKnora/pull/1490中添加多传输支持并通过@SilentMil恢复会话配置
* 修复：避免 @wolfkill 在 https://github.com/Tencent/WeKnora/pull/1537 中上传失败时出现过时的知识记录
* 修复：在 @wolfkill 嵌入 https://github.com/Tencent/WeKnora/pull/1536 之前清理内联图像有效负载
* 重构（keywords_vector_hybrid_indexer）：通过https://github.com/Tencent/WeKnora/pull/1546中的@lyingbug增强图像有效负载清理逻辑
* feat(migrations)：通过https://github.com/Tencent/WeKnora/pull/1547中的@lyingbug将display_name列添加到模型表中
*修复（知识）：取消摘要并隔离@lyingbug在https://github.com/Tencent/WeKnora/pull/1548中的手动重新索引跟踪尝试
* 壮举（知识）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1549 中将停止解析按钮添加到跟踪时间线面板
*壮举（知识）：在https://github.com/Tencent/WeKnora/pull/1550中@lyingbug在最终子任务计数器中计算wiki摄取量
*修复（聊天）：保持正在进行的消息反应，以便https://github.com/Tencent/WeKnora/pull/1553中的@lyingbug继续流渲染
*修复（知识）：使完成子任务计数器可靠+异步问题扇出（https://github.com/Tencent/WeKnora/pull/1552中的@lyingbug）
* 修复（知识）：在 @jackson-jia-914 在 https://github.com/Tencent/WeKnora/pull/1554 的 wiki 摄取提示中使用 LanguageLocaleName 包装语言环境代码
* 修复（知识）：通过文本重叠缝合块，而不是 https://github.com/Tencent/WeKnora/pull/1555 中 @lyingbug 按位置缝合块
* 重构（设置）：通过 https://github.com/Tencent/WeKnora/pull/1558 中的 @lyingbug 统一跨模型/解析器/存储/向量/websearch/mcp 的抽屉样式
* 重构（设置）：通过 https://github.com/Tencent/WeKnora/pull/1561 中的 @lyingbug 增强跨组件的卡片交互和可访问性
* 修复（doc_parser）：通过https://github.com/Tencent/WeKnora/pull/1566中的@lyingbug增强DOC到DOCX转换的可靠性
* feat(chat)：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1567 中实现多模式聊天的本地图像解析器
* 修复（嵌入）：支持 @ziwon 在 https://github.com/Tencent/WeKnora/pull/1571 中的原生 Gemini 嵌入
* 壮举：通过 https://github.com/Tencent/WeKnora/pull/1569 中的 @octo-patch 将 MiniMax-M3 添加到提供商模型列表
* 杂务（deps）：将github.com/mattn/go-runewidth从0.0.23提升到https://github.com/Tencent/WeKnora/pull/1572中cli-deps组中/cli中的0.0.24
* feat(tour)：在https://github.com/Tencent/WeKnora/pull/1578中通过@lyingbug实现新的用户指南组件并集成到用户菜单中
* feat(docreader)：由 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1583 中扫描 PDF 流、任务队列和解析器引擎
* feat(contextualGuides)：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1585 中为代理和知识库创建添加多个上下文指南组件
* 修复：在 https://github.com/Tencent/WeKnora/pull/1574 中通过 @ochanism 克隆知识库时深度复制存储的文件和图像
* 修复：根据 https://github.com/Tencent/WeKnora/pull/1596 中的 @ochanism 验证向量存储连接地址是否符合 SSRF 策略
* 修复(dev): 在https://github.com/Tencent/WeKnora/pull/1593中使用@langcaiye的可写本地存储路径
* 修复：@langcaiye 在 https://github.com/Tencent/WeKnora/pull/1588 中编辑数据源时跳过凭证验证
* feat: 支持 https://github.com/Tencent/WeKnora/pull/1587 中 @langcaiye 的飞书 wiki 节点资源
* 修复（数据源）：通过@langcaiye在https://github.com/Tencent/WeKnora/pull/1586中对齐飞书连接器功能
* 修复（事件）：通过 @gordonlu 在 https://github.com/Tencent/WeKnora/pull/1581 中向异步 goroutine 添加恐慌恢复
* 重构(agent)：删除final_answer工具引用并通过https://github.com/Tencent/WeKnora/pull/1597中的@lyingbug更新相关逻辑
* 修复（im）：注入合成身份，以便 IM 通道可以通过 https://github.com/Tencent/WeKnora/pull/1601 中的 @lyingbug 使用共享 KB
* feat(lkeap): 在https://github.com/Tencent/WeKnora/pull/1602中集成@lyingbug的腾讯云LKEAP Rerank支持
* 修复（前端）：通过 @jackson-jia-914 在 https://github.com/Tencent/WeKnora/pull/1598 中将 {size} 参数传递给 Nginx 413 上的 fileSizeExceeded i18n
*修复：在https://github.com/Tencent/WeKnora/pull/1527中保留@wolfkill的问候语代理系统提示
* 恢复 https://github.com/Tencent/WeKnora/pull/1603 中 @lyingbug 的“修复：保留代理系统提示问候语”
* 修复（数据源）：当 @langcaiye 在 https://github.com/Tencent/WeKnora/pull/1599 中获取所有项目失败时，同步失败
* feat(faq)：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/1607中增强常见问题解答处理和本地化支持
* feat(thinkingControl)：在https://github.com/Tencent/WeKnora/pull/1613中通过@lyingbug在模型编辑器中实现思维模式配置
* 修复（处理程序）：/knowledge/search — 接受 ?query= 别名，拒绝 https://github.com/Tencent/WeKnora/pull/1612 中 @toy0116 的空关键字
*修复：拒绝https://github.com/Tencent/WeKnora/pull/1611中@ochanism的跨商店reuse_vectors知识移动
* feat: 支持 @LiRuihaoA 在 https://github.com/Tencent/WeKnora/pull/1608 中为矢量存储选择 Milvus 数据库
* 修复(schema): 通过@langcaiye在https://github.com/Tencent/WeKnora/pull/1605中扩展知识源长度
* 壮举：@lyingbug 在 https://github.com/Tencent/WeKnora/pull/1614 中发布 v0.6.1

## 新贡献者
* @majinding 在 https://github.com/Tencent/WeKnora/pull/1433 中做出了第一个贡献
* @tranphuongyd 在 https://github.com/Tencent/WeKnora/pull/1446 中做出了第一个贡献
* @shenDv6 在 https://github.com/Tencent/WeKnora/pull/1459 中做出了第一个贡献
* @young1lin 在 https://github.com/Tencent/WeKnora/pull/1463 中做出了第一个贡献
* @Hitvz 在 https://github.com/Tencent/WeKnora/pull/1434 中做出了他们的第一个贡献
* @jackson-jia-914 在 https://github.com/Tencent/WeKnora/pull/1453 中做出了第一个贡献
* @HelloAndyZhang 在 https://github.com/Tencent/WeKnora/pull/1492 中做出了第一个贡献
* @Once-the-sea-was-difficul-for-water 在 https://github.com/Tencent/WeKnora/pull/1477 中做出了第一个贡献
* @sheep44044 在 https://github.com/Tencent/WeKnora/pull/1508 中做出了第一个贡献
* @zhuzhaoyun 在 https://github.com/Tencent/WeKnora/pull/1502 中做出了第一个贡献
* @ziwon 在 https://github.com/Tencent/WeKnora/pull/1571 中做出了第一个贡献
* @gordonlu 在 https://github.com/Tencent/WeKnora/pull/1581 中做出了第一个贡献
* @LiRuihaoA 在 https://github.com/Tencent/WeKnora/pull/1608 中做出了第一个贡献

**完整 Changelog**：https://github.com/Tencent/WeKnora/compare/v0.6.0...v0.6.1

---

> 📦 仓库：[Tencent/WeKnora](https://github.com/Tencent/WeKnora) · 🏷️ 版本：`v0.6.1` · 📅 发布：2026-06-05 · [查看英文原版 Release](https://github.com/Tencent/WeKnora/releases/tag/v0.6.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
