---
title: "WeKnora v0.7.2"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.7.2"
version: "v0.7.2"
published: "2026-08-07"
type: "patch"
lang: "zh"
---

# WeKnora v0.7.2

## 发生了什么变化
* 重构（代理）：通过https://github.com/Tencent/WeKnora/pull/2330中的@lyingbug将模型句柄编解码器合并到内部/模型上下文中
* 重构（auth，router）：统一auth会话上下文并通过https://github.com/Tencent/WeKnora/pull/2331中的@lyingbug按域分割路由器
*修复（知识）：在https://github.com/Tencent/WeKnora/pull/2329中通过@BigFishDreamWater批量删除清理绑定向量存储
* 修复：支持@koishi514-Z在https://github.com/Tencent/WeKnora/pull/2318中执行技能脚本的字符串参数
* 修复（代理）：通过 https://github.com/Tencent/WeKnora/pull/2333 中的 @lyingbug 将批处理的 wiki_read_page 结果保持在输出预算内
* 修复(pipeline): 修复合并阶段作业顺序的不确定性 by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2319
* 修复（知识）：在 https://github.com/Tencent/WeKnora/pull/2335 中 @lyingbug 跨 KB 移动文档时协调 wiki 状态
* feat(wiki)：页面修订历史记录，包括 https://github.com/Tencent/WeKnora/pull/2336 中 @lyingbug 的差异、恢复和手动编辑
* 样式（wiki）：通过 https://github.com/Tencent/WeKnora/pull/2338 中的 @lyingbug 完善修订抽屉和侧边栏以匹配会话列表 UX
* feat(feishu)：通过 API 块同步 docx，并通过 @voidkey 在 https://github.com/Tencent/WeKnora/pull/2334 中按类型进行向下钻取
* 修复（i18n）：通过 @hiasky 在 https://github.com/Tencent/WeKnora/pull/2305 中删除组织语言环境对象中重复的“members”键
* 修复（迁移）：https://github.com/Tencent/WeKnora/pull/2340 中的 @lyingbug 将知识元数据索引迁移重新编号为 000076
* 修复（im）：通过 https://github.com/Tencent/WeKnora/pull/2349 中的 @lyingbug 强化跨副本的连接生命周期
* 在https://github.com/Tencent/WeKnora/pull/2368中通过@lyingbug完善用户设置菜单和访问快捷方式
* 删除 https://github.com/Tencent/WeKnora/pull/2367 中 @lyingbug 多余的 Wiki 操作日志
* 壮举（知识）：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/2369中配置上传标签和处理选项
* 修复：从 https://github.com/Tencent/WeKnora/pull/2323 中 @mdrkrg 的块处理程序响应中删除 SanitizeForDisplay
* 壮举（知识）：支持https://github.com/Tencent/WeKnora/pull/2370中@lyingbug的可编辑块和检索元数据
* 修复（mcp-server）：正确的 SSE 消息路由以防止初始化……作者：https://github.com/Tencent/WeKnora/pull/2375 中的@FincherYuan
* 修复（im）：在 https://github.com/Tencent/WeKnora/pull/2365 中@March-77 丢失领导者锁后恢复通道
*修复（知识）：在https://github.com/Tencent/WeKnora/pull/2363中@March-77开始重新解析时清除过时的错误
* 文档：通过 @March-77 在 https://github.com/Tencent/WeKnora/pull/2366 中澄清范围感知贡献者验证
* 修复（前端）：通过 @March-77 在 https://github.com/Tencent/WeKnora/pull/2364 中区分主要阶段和后处理任务
*修复（wiki）：防止https://github.com/Tencent/WeKnora/pull/2362中的@BigFishDreamWater在入队失败时完成停顿
*修复（docparser）：解析https://github.com/Tencent/WeKnora/pull/2355中@ochanism的HTML img标签引用的远程图像
* 修复（mcp-server）：将诊断路由到 stderr 以修复 https://github.com/Tencent/WeKnora/pull/2371 中 @annopick 的 stdio 协议崩溃问题
* 修复（im）：通过https://github.com/Tencent/WeKnora/pull/2352中的@voidkey渲染资源：// IM通道中的图像（nginx / r / +配置保护）
* 修复（聊天）：防止 https://github.com/Tencent/WeKnora/pull/2353 中 @koishi514-Z 重复的终端应答事件
* 修复（docreader）：通过 @WHUTcjh-2024 在 https://github.com/Tencent/WeKnora/pull/2314 中恢复可选的 XLSX 标头上下文
*修复：在块重叠中保留更细的轮廓边界 by @ttommybot in https://github.com/Tencent/WeKnora/pull/2342
* [Bug] 在 https://github.com/Tencent/WeKnora/pull/2309 中 @langcaiye 获取页面失败时保留网络证据
* 修复（知识）：https://github.com/Tencent/WeKnora/pull/2379 中 @lyingbug 创建时的默认自定义元数据
* 修复（知识）：https://github.com/Tencent/WeKnora/pull/2384中@koishi514-Z按类型区分重复文件
* 修复（存储）：https://github.com/Tencent/WeKnora/pull/2389 中的 @lyingbug 允许图像上传使用文件服务回退
* 修复（检索器）：根据 @ochanism 在 https://github.com/Tencent/WeKnora/pull/2357 中的需求重建缺失的向量存储引擎
* 修复（代理）：排除 https://github.com/Tencent/WeKnora/pull/2392 中 @lyingbug 禁用的常见问题解答条目
* 修复（mcp-server）：通过https://github.com/Tencent/WeKnora/pull/2395中的@lyingbug将MCP Python SDK固定到v1.x
* @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2397 中重新设计上传确认对话框
* ci(mcp-server)：删除https://github.com/Tencent/WeKnora/pull/2398中@annopick重复的workflow.yml（由mcp-server.yml取代）
* 修复(知识): 支持https://github.com/Tencent/WeKnora/pull/2393中@BigFishDreamWater上传本地HTML文件
* 修复（会话）：通过 https://github.com/Tencent/WeKnora/pull/2405 中的 @lyingbug 将外部用户包含在 API 会话组中
* 修复（组织）：@hiasky 在 https://github.com/Tencent/WeKnora/pull/2408 创建共享空间时传递头像
* 壮举（知识）：为 https://github.com/Tencent/WeKnora/pull/2406 中@hiasky 选定的文档添加批处理标签对话框
* 修复：通过 https://github.com/Tencent/WeKnora/pull/2417 中的 @lyingbug 强化共享代理源权限
* ci：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2416 中添加对应用程序、前端和 DocReader 的 PR 检查
* 修复（mcp-server）：通过https://github.com/Tencent/WeKnora/pull/2420中的@annopick迁移到MCPServer高级API（mcp 2.x）[v1.1.0]
* 修复（docparser）：通过 @zldkr 在 https://github.com/Tencent/WeKnora/pull/2419 中标准化 PaddleOCR-VL Cloud HTML 表
* test(ci)：稳定 MCP 会话测试并通过 https://github.com/Tencent/WeKnora/pull/2424 中的 @lyingbug 解耦前端检查
* 修复(mcp): 修复非 UUID Agent ID 无法解析的问题 by @ZhuangShiHao1207 in https://github.com/Tencent/WeKnora/pull/2422
* 修复(sessions): 放行嵌入运行时读取自身会话，修复追问建议 500 与刷新丢对话 by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2421
* 修复（前端）：解决 https://github.com/Tencent/WeKnora/pull/2426 中 @lyingbug 的 i18n @ 语法错误和 TDesign 抽屉警告
* 修复：在 https://github.com/Tencent/WeKnora/pull/2429 中由 @ttommybot 创建后保留 wiki 文件夹路径
*修复（sqlite）：在https://github.com/Tencent/WeKnora/pull/2440中通过@BigFishDreamWater过滤top-k之前的向量候选
* 修复：@yuefanxiao 在 https://github.com/Tencent/WeKnora/pull/2435 修复 SQLite 下删除数据源失败
* 修复（评估）：使用同步通道索引来修复https://github.com/Tencent/WeKnora/pull/2359中@lazyayuan的始终为零的检索指标
* fix(frontend): 编辑保存后自动关闭配置编辑器，创建后引导继续 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2448
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/2449 中通过 @lyingbug 进行语言环境修剪后恢复审核和 KB 活动 i18n
* 修复（前端）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2454 中的通道文件代理路由嵌入受保护的图像
* 修复（知识）：https://github.com/Tencent/WeKnora/pull/2452 中的 @lyingbug 允许在 URL 导入中使用 xlsx (#2447)
* 修复（聊天）：在 https://github.com/Tencent/WeKnora/pull/2463 中使用 @BigFishDreamWater 的 jieba 分段中文查询扩展
* 修复（知识）：https://github.com/Tencent/WeKnora/pull/2453 中 @Myang-print 的表面批量重新解析失败
*修复（重新排名）：在https://github.com/Tencent/WeKnora/pull/2501中通过@BigFishDreamWater在API限制内批量处理LKEAP请求
* 修复（聊天）：在 https://github.com/Tencent/WeKnora/pull/2498 中保持 @jacentsao 的附件上传状态反应
* 修复（重新排名）：通过 @BigFishDreamWater 在 https://github.com/Tencent/WeKnora/pull/2496 中标准化 NVIDIA logit 分数
*修复（重新排序）：在https://github.com/Tencent/WeKnora/pull/2495中保留@BigFishDreamWater的代码和数学段落
* 修复：计算 https://github.com/Tencent/WeKnora/pull/2500 中 @ttommybot 解析进度中跳过的阶段
*修复（docparser）：在https://github.com/Tencent/WeKnora/pull/2493中保留@oscarlius的MinerU自动PDF解析
* feat(mcp-server): 在https://github.com/Tencent/WeKnora/pull/2497中添加@FincherYuan的list_shared_knowledge_bases工具
* 修复：https://github.com/Tencent/WeKnora/pull/2503 中的 @quan020406 从 lint 光标中排除存档的 wiki 页面
* 修复（知识）：清除陈旧的 error_message 重新处理并由 @oscarlius 在 https://github.com/Tencent/WeKnora/pull/2488 中完成
* 修复（知识）：通过 https://github.com/Tencent/WeKnora/pull/2506 中的 @lyingbug 清除剩余重新处理路径上的陈旧 error_message
* 修复：在 https://github.com/Tencent/WeKnora/pull/2508 中通过 @ttommybot 统一组织设置模态滚动
* 修复：@ttommybot 在 https://github.com/Tencent/WeKnora/pull/2514 中检索后显示答案生成状态
* 修复（嵌入）：防止蚂蚁工作者在 https://github.com/Tencent/WeKnora/pull/2520 中@qfzc 在空/不匹配结果上出现恐慌和互斥死锁
* 壮举（知识）：https://github.com/Tencent/WeKnora/pull/2528 中的文件夹树侧边栏、文件夹路径存储以及@lyingbug 的文档重新归档
* 修复（前端）：恢复运行时队列 i18n 并防止 https://github.com/Tencent/WeKnora/pull/2529 中 @lyingbug 的修剪
* 修复（聊天）：在 https://github.com/Tencent/WeKnora/pull/2525 中 @KKtwo 嵌入失败期间保留检索结果
* perf(container): 在启动时通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2530 中批量查找遗留存储别名
* 功能（存储）：支持 https://github.com/Tencent/WeKnora/pull/2008 中 @qilifan 的 AWS S3 NoAk 默认凭证
* 修复（摘要）：通过 @BigFishDreamWater 在 https://github.com/Tencent/WeKnora/pull/2538 中保留跨表块的行
* feat(api)：resource_urls=public 用于 https://github.com/Tencent/WeKnora/pull/2531 中 @lyingbug 直接加载的文件 URL
* 修复（分块）：在 https://github.com/Tencent/WeKnora/pull/2539 中将预览与 @BigFishDreamWater 的父子分割对齐
*修复（wiki）：确保提示语言始终由https://github.com/Tencent/WeKnora/pull/2543中的@lyingbug解决
* 修复（分块）：同步预览 swagger 并通过 https://github.com/Tencent/WeKnora/pull/2541 中的 @lyingbug 标准化分离器配置
* 修复（常见问题解答）：当 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2544 中重试创建时，防止重复条目
* 通过 https://github.com/Tencent/WeKnora/pull/2547 中的 @lyingbug 改进 Wiki 阅读器布局和修订历史 UX
* 修复（分块）：在 https://github.com/Tencent/WeKnora/pull/2546 中通过 @BigFishDreamWater 分割之前标准化行结尾
* feat(mcp-server): 在https://github.com/Tencent/WeKnora/pull/2532中添加@01luyi Cheng的create_knowledge_from_text工具
* 修复：https://github.com/Tencent/WeKnora/pull/2505 中 @ttommybot 在回退之前重试文档摘要
*修复：用https://github.com/Tencent/WeKnora/pull/2516中的@quan020406替换所有精确的wiki文本匹配
* feat(im): 在 https://github.com/Tencent/WeKnora/pull/2483 中为 @YS-zdck 添加 QQBot #2461 的 Markdown 回复
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/Tencent/WeKnora/pull/2481 中对 /cli 中的 cli-deps 组进行 3 次更新
* feat(feishu-driver): 新增飞书云盘数据源 by @Greenplumwine in https://github.com/Tencent/WeKnora/pull/2466
* 修复（wiki）：从https://github.com/Tencent/WeKnora/pull/2549中@pengpengyi92的统计查询中排除存档页面
* 修复(im/wecom): 通过 https://github.com/Tencent/WeKnora/pull/2551 中的 @yangcongcong-coding 解决 closeConn 和 heartbeatLoop 之间的 longconn 死锁
* 修复(块): 恢复未编辑分块的按位置合并 by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2555
* 修复（im/wecom）：https://github.com/Tencent/WeKnora/pull/2557 中 @lyingbug 接近其自己生成的范围连接
* 修复（块）：受信任分块按精确位置间隙重叠 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2556
* 修复（文档）：通过 https://github.com/Tencent/WeKnora/pull/2561 中的 @qfzc 更正代理聊天和知识聊天的 @Router 路径注释
* fix(chunks): 替代重写后的检索结果不用位置匹配 by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2558
* 文档：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2350 中添加全面的 WeKnora 文档
* docs: 部署步骤增加 docker compose pull，防止在 https://github.com/Tencent/WeKnora/pull/2567 中恢复使用@WHUTcjh-2024 中的服务器的旧镜像
* 文档：补全 docker compose pull 部署与升级说明 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2570
* 恢复 https://github.com/Tencent/WeKnora/pull/2571 中 @lyingbug 的“docs: 补全 docker compose pull 部署与升级说明”
* 恢复 https://github.com/Tencent/WeKnora/pull/2572 中 @lyingbug 的“文档：添加全面的 WeKnora 文档”
* 通过 https://github.com/Tencent/WeKnora/pull/2573 中的 @lyingbug 更新网站文档
* 文档：完整的 docker 在 https://github.com/Tencent/WeKnora/pull/2574 中由 @lyingbug 撰写跨部署文档的拉取指南
* 文档（网站）：添加官方网站链接并在构建时通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2576 中注入版本
* 修复(auth): 在 https://github.com/Tencent/WeKnora/pull/2568 中 @jiahao6635 进行哈希处理之前不要清理注册密码
* 文档（发布）：在 https://github.com/Tencent/WeKnora/pull/2585 中由 @lyingbug 准备 v0.7.2 release note 和版本提升

## 新贡献者
* @BigFishDreamWater 在 https://github.com/Tencent/WeKnora/pull/2329 中做出了第一个贡献
* @koishi514-Z 在 https://github.com/Tencent/WeKnora/pull/2318 中做出了第一个贡献
* @mdrkrg 在 https://github.com/Tencent/WeKnora/pull/2319 中做出了第一个贡献
* @FincherYuan 在 https://github.com/Tencent/WeKnora/pull/2375 中做出了第一个贡献
* @annopick 在 https://github.com/Tencent/WeKnora/pull/2371 中做出了第一个贡献
* @WHUTcjh-2024 在 https://github.com/Tencent/WeKnora/pull/2314 中做出了第一个贡献
* @zldkr 在 https://github.com/Tencent/WeKnora/pull/2419 中做出了第一个贡献
* @ZhuangShiHao1207 在 https://github.com/Tencent/WeKnora/pull/2422 中做出了第一个贡献
* @asmh1989 在 https://github.com/Tencent/WeKnora/pull/2421 中做出了第一个贡献
* @lazyayuan 在 https://github.com/Tencent/WeKnora/pull/2359 中做出了第一个贡献
* @Myang-print 在 https://github.com/Tencent/WeKnora/pull/2453 中做出了他们的第一个贡献
* @oscarlius 在 https://github.com/Tencent/WeKnora/pull/2493 中做出了第一个贡献
* @quan020406 在 https://github.com/Tencent/WeKnora/pull/2503 中做出了第一个贡献
* @qfzc 在 https://github.com/Tencent/WeKnora/pull/2520 中做出了第一个贡献
* @01luyi Cheng 在 https://github.com/Tencent/WeKnora/pull/2532 中做出了第一个贡献
* @pengpengyi92 在 https://github.com/Tencent/WeKnora/pull/2549 中做出了第一个贡献
* @jiahao6635 在 https://github.com/Tencent/WeKnora/pull/2568 中做出了第一个贡献

**完整 Changelog**：https://github.com/Tencent/WeKnora/compare/v0.7.1...v0.7.2

---

> 📦 仓库：[Tencent/WeKnora](https://github.com/Tencent/WeKnora) · 🏷️ 版本：`v0.7.2` · 📅 发布：2026-08-07 · [查看英文原版 Release](https://github.com/Tencent/WeKnora/releases/tag/v0.7.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
