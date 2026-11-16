---
title: "WeKnora v0.6.3"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.6.3"
version: "v0.6.3"
published: "2026-06-26"
type: "patch"
lang: "zh"
---

# WeKnora v0.6.3

## 发生了什么变化
*壮举（docker）：简化前端构建过程并通过https://github.com/Tencent/WeKnora/pull/1642中的@lyingbug更新Docker配置
* 样式（前端）：通过https://github.com/Tencent/WeKnora/pull/1648中的@lyingbug调整AgentList、Chat和KnowledgeBaseList组件中的填充和边距以改进布局
* feat(ui)：通过https://github.com/Tencent/WeKnora/pull/1649中@lyingbug的初始部分支持增强知识库创建
* 通过@lyingbug在https://github.com/Tencent/WeKnora/pull/1650中细化活动知识文件类型的解析器规则显示
* 壮举（菜单）：通过 https://github.com/Tencent/WeKnora/pull/1655 中的 @lyingbug 通过搜索和切换按钮增强侧边栏功能
* feat(menu)：通过 https://github.com/Tencent/WeKnora/pull/1661 中的 @lyingbug 的新聊天功能和本地化更新来增强菜单组件
* 重构（设置）：通过 https://github.com/Tencent/WeKnora/pull/1662 中的 @lyingbug 统一跨设置视图的空状态处理
* 修复 1646 缺少 @jack-wang-176 在 https://github.com/Tencent/WeKnora/pull/1669 中设置的错误
* feat(im)：https://github.com/Tencent/WeKnora/pull/1659 中的 @voidkey 的侧边栏源过滤器、内容标题和飞行中回复恢复
* 修复（数据源）：澄清 https://github.com/Tencent/WeKnora/pull/1652 中的 @langcaiye 编辑不同步
* 修复：通过 https://github.com/Tencent/WeKnora/pull/1568 中的 @kshitijshresth 验证同步日志限制参数
* 修复（tcvdb）：通过@langcaiye在https://github.com/Tencent/WeKnora/pull/1575中提高集合兼容性
* 修复（wiki）：清除https://github.com/Tencent/WeKnora/pull/1666中@langcaiye删除时陈旧的引用块
* feat(embed): 支持将智能体以 iframe / 浮窗形式嵌入第三方网站 (#1657) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1673
*壮举（前端）：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/1684中完善知识库数据源设置UI
* 修复（wiki）：在 LLM 之前屏蔽图像 URL，以防止 https://github.com/Tencent/WeKnora/pull/1681 中的 @FFFFFFpy 损坏 UUID/路径
* 修复：@MaoMengww 在 https://github.com/Tencent/WeKnora/pull/1654 中嵌入 API 请求时未发送尺寸
* 修复（auth）：https://github.com/Tencent/WeKnora/pull/1685 中的@lyingbug 在注销时清除会话资源缓存
* 在https://github.com/Tencent/WeKnora/pull/1686中添加@lyingbug的嵌入尺寸覆盖支持
* feat(im)：通过https://github.com/Tencent/WeKnora/pull/1690中的@lyingbug增强IMChannelPanel和SettingDrawer组件
* 壮举（后端）：https://github.com/Tencent/WeKnora/pull/1691 中 @lyingbug 的块合并、图像信息匹配和 RAG 进度事件
* feat(agent)：重新排序阈值、工具持久修剪和 https://github.com/Tencent/WeKnora/pull/1692 中 @lyingbug 的 Langfuse 跟踪
* feat(chat)：在 https://github.com/Tencent/WeKnora/pull/1693 中由 @lyingbug 共享 Markdown 渲染和引用弹出窗口
* feat(chat)：https://github.com/Tencent/WeKnora/pull/1694 中 @lyingbug 的代理流重构、工具结果和布局 UX
* 壮举：在 https://github.com/Tencent/WeKnora/pull/1695 中添加 @FFFFFFpy 的 EPUB 和 MHTML 文档支持
* 修复（wiki）：使用占位符 src 来保护受保护的提供者图像，以避免…由 @FFFFFFpy 在 https://github.com/Tencent/WeKnora/pull/1697 中
* feat(docreader)：通过https://github.com/Tencent/WeKnora/pull/1702中的@lyingbug为opendataloader解析器添加快速可用性探测
* 修复（前端）：在https://github.com/Tencent/WeKnora/pull/1701中@adawang1210在手动知识编辑器中列出可写共享知识库
* 修复：https://github.com/Tencent/WeKnora/pull/1699 中@langcaiye 重试耗尽后标记知识删除失败
* 修复（chunker）：https://github.com/Tencent/WeKnora/pull/1700 中的 @adawang1210 将深层副标题上下文带入大节块中
* feat(wiki)：在https://github.com/Tencent/WeKnora/pull/1705中@adawang1210在前缀缓存的块引用提示中预先加载静态规则
* perf(sandbox): 由 @adawang1210 在 https://github.com/Tencent/WeKnora/pull/1710 中编译一次命令替换正则表达式
* perf(common): 由 @adawang1210 在 https://github.com/Tencent/WeKnora/pull/1711 中编译一次 LLM-JSON 代码栅栏正则表达式
* feat(wiki)：添加页面层次结构/类别元数据并通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1703 中检索 APIs
* feat(wiki)：在 https://github.com/Tencent/WeKnora/pull/1704 中 @lyingbug 在 wiki 浏览器中显示类别层次结构和导航
* feat(wiki)：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1715 中增强锚定表单弹出窗口和国际化更新
* 修复(docreader): 在 https://github.com/Tencent/WeKnora/pull/1714 中恢复 @FFFFFFpy 的 epub 和 mhtml 解析器注册
*修复（vectordb）：修复问题数据复制到支持数据库的ID映射问题由https://github.com/Tencent/WeKnora/pull/1668中的@cctv549681
* 壮举：在 https://github.com/Tencent/WeKnora/pull/1706 中添加 @langcaiye 的租户工作区删除 UI
*修复（租户）：通过https://github.com/Tencent/WeKnora/pull/1718中的@lyingbug清除删除和过滤陈旧切换器行的成员资格
* perf(utils)：在 https://github.com/Tencent/WeKnora/pull/1708 中编译 SQL 验证正则表达式一次，而不是每次由 @adawang1210 调用
* 修复（docreader）：在 https://github.com/Tencent/WeKnora/pull/1717 中对齐 pdf JPEG 质量默认断言 @JojaCola312
* 壮举（前端）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1724 中改进手动知识编辑器和聊天引用渲染
* [codex] 由 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1728 中波兰化聊天建议、引文和抽屉
* 样式（前端）：通过 https://github.com/Tencent/WeKnora/pull/1730 中的 @lyingbug 更新 ListSpaceSidebar 样式以改进悬停和活动状态
* 壮举（前端）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1744 中使用微光效果和淡出尾部来增强聊天流媒体视觉效果
* 壮举（前端）：通过 https://github.com/Tencent/WeKnora/pull/1745 中的 @lyingbug 添加目录视图切换并改进本地化
* 修复（前端）：降低 UploadConfirmDialog z 索引，以便设置模式出现在 https://github.com/Tencent/WeKnora/pull/1737 中 @hiasky 的上方
* 修复（前端）：防止设置模式溢出 https://github.com/Tencent/WeKnora/pull/1732 中的@hiasky 视口
* 壮举（前端）：添加 wiki 工具支持并通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1746 中增强代理工具图标映射
*修复（前端）：增强repairFlankingEmphasis以正确处理https://github.com/Tencent/WeKnora/pull/1747中的@lyingbug
* 壮举（前端）：在 https://github.com/Tencent/WeKnora/pull/1749 中添加 MCP 配置部分并通过 @lyingbug 统一模态导航样式
* 修复(im): 防止https://github.com/Tencent/WeKnora/pull/1750中@lyingbug导致钉钉流连接失效
* feat(i18n)：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/1751中添加多种语言的各种设置的关键描述
* 修复：在 https://github.com/Tencent/WeKnora/pull/1743 中通过 @FFFFFFpy 保留 MHTML 图像分辨率和 Markdown 结构
* 修复（docparser）：重命名 close 变量以避免 https://github.com/Tencent/WeKnora/pull/1752 中的 @lyingbug 遮蔽内置变量
* feat(im)：集成 IM 服务，通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1753 中删除自定义代理
* 修复（api）：为混合搜索添加 POST，同时保持 https://github.com/Tencent/WeKnora/pull/1754 中 @lyingbug 的 GET 兼容性（#1727）
* 修复（docparser）：规范化 PaddleOCR-VL HTML 表以减少 https://github.com/Tencent/WeKnora/pull/1755 中的 @lyingbug 的令牌浪费和块碎片
* 修复（数据源）：https://github.com/Tencent/WeKnora/pull/1756 中 @lyingbug 延迟加载飞书 wiki 资源以避免列出超时 (#1672)
*壮举（数据源）：通过https://github.com/Tencent/WeKnora/pull/1757中的@lyingbug在延迟加载的选择器中显示预先存在的选择
* 修复（组织）：在 https://github.com/Tencent/WeKnora/pull/1761 中 @hiasky 创建组织后，获取缓存无效
* feat(mcp): 通过https://github.com/Tencent/WeKnora/pull/1762中的@lyingbug为MCP服务添加OAuth2授权
* feat(retriever): 通过 @langcaiye 在 https://github.com/Tencent/WeKnora/pull/1759 中的 env 配置腾讯 VectorDB 副本
* feat(mcp)：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/1763中添加MCP服务配置的代码导入功能
* feat(mcp)：通过 https://github.com/Tencent/WeKnora/pull/1764 中的 @lyingbug 将自定义标头功能添加到 MCP 服务对话框
* feat(datasource): 添加 RSS feed 连接器，通过 https://github.com/Tencent/WeKnora/pull/1769 中的 @lyingbug 进行全文摄取
*修复（代理）：删除https://github.com/Tencent/WeKnora/pull/1772中@lyingbug未使用的RunnableByViewer门阻止观众聊天
* 修复（qa）：通过 https://github.com/Tencent/WeKnora/pull/1773 中的 @lyingbug 在 RAG 时间线中连接代理思维切换并显示推理
* 修复（模型）：当 https://github.com/Tencent/WeKnora/pull/1774 中的 KB 或代理通过 @lyingbug 引用模型时阻止删除
* 修复（前端）：通过 https://github.com/Tencent/WeKnora/pull/1776 中的 @lyingbug 统一侧边栏其他来源部分的版式
* feat(im)：通过https://github.com/Tencent/WeKnora/pull/1775中的@lyingbug将代理流显示与网络思维和工具进度对齐
* 修复（前端）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1780 中完善会话源过滤器面板和 WeCom 图标
* 修复（网络搜索）：通过 https://github.com/Tencent/WeKnora/pull/1784 中的 @lyingbug 改进 SearXNG 测试连接错误消息
* 修复（excel）：从 https://github.com/Tencent/WeKnora/pull/1785 中 @estelledc 解析的内容中过滤掉图像函数字符串
* 壮举（集成）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1787 中添加发布中心并完善频道编辑器
*壮举（聊天）：统一资源芯片并浏览https://github.com/Tencent/WeKnora/pull/1789中@lyingbug @提及中的最近文件
* feat(models)：为https://github.com/Tencent/WeKnora/pull/1807中的@lyingbug添加模型测试调试器以保存模型配置
* feat(docreader): 支持在 https://github.com/Tencent/WeKnora/pull/1808 中通过 @yangcongcong-coding 强制 PDF 扫描页 OCR 解析
* 修复（前端）：在https://github.com/Tencent/WeKnora/pull/1809中@lyingbug在上传概述中反映PDF扫描解析
* feat(agent)：通过 https://github.com/Tencent/WeKnora/pull/1813 中的 @lyingbug 强制模型准备就绪并完善选择器 UX
* feat(ui): 在https://github.com/Tencent/WeKnora/pull/1815中添加@jack-wang-176的知识批量修复
* 修复（知识）：通过 https://github.com/Tencent/WeKnora/pull/1818 中的 @lyingbug 强化批量重新解析 UX 和异步处理
* 壮举：https://github.com/Tencent/WeKnora/pull/1790 中的 @hiasky 支持文档知识的多标签
* 修复（知识）：https://github.com/Tencent/WeKnora/pull/1819中@lyingbug的多标签跟进和标签UI重新设计
* 壮举（前端）：通过 https://github.com/Tencent/WeKnora/pull/1820 中的 @lyingbug 统一文档标签过滤器、管理抽屉和详细 UX
* 壮举（嵌入）：始终通过 https://github.com/Tencent/WeKnora/pull/1821 中的 @lyingbug 的细节 API 显示频道密钥
* 文档：发布 v0.6.3 笔记并由 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1822 中完善架构图

## 新贡献者
* @kshitijshresth 在 https://github.com/Tencent/WeKnora/pull/1568 中做出了第一个贡献
* @FFFFFFpy 在 https://github.com/Tencent/WeKnora/pull/1681 中做出了第一个贡献
* @adawang1210 在 https://github.com/Tencent/WeKnora/pull/1701 中做出了第一个贡献
* @cctv549681 在 https://github.com/Tencent/WeKnora/pull/1668 中做出了第一个贡献
* @JojaCola312 在 https://github.com/Tencent/WeKnora/pull/1717 中做出了他们的第一个贡献
* @hiasky 在 https://github.com/Tencent/WeKnora/pull/1737 中做出了第一个贡献
* @estelledc 在 https://github.com/Tencent/WeKnora/pull/1785 中做出了第一个贡献
* @yangcongcong-coding 在 https://github.com/Tencent/WeKnora/pull/1808 中做出了第一个贡献

**完整 Changelog**：https://github.com/Tencent/WeKnora/compare/v0.6.2...v0.6.3

---

> 📦 仓库：[Tencent/WeKnora](https://github.com/Tencent/WeKnora) · 🏷️ 版本：`v0.6.3` · 📅 发布：2026-06-26 · [查看英文原版 Release](https://github.com/Tencent/WeKnora/releases/tag/v0.6.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
