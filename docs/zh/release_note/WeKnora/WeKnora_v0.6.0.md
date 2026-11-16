---
title: "WeKnora v0.6.0"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.6.0"
version: "v0.6.0"
published: "2026-05-21"
type: "minor"
lang: "zh"
---

# WeKnora v0.6.0

## 发生了什么变化
*修复（撰写）：停止通过https://github.com/Tencent/WeKnora/pull/1308中的@lyingbug将docreader gRPC端口发布到主机
*壮举（前端）：在https://github.com/Tencent/WeKnora/pull/1313中的@lyingbug在系统信息页面上显示UI构建版本
* 修复（org）：https://github.com/Tencent/WeKnora/pull/1324 中@tsukiga-kirei 的可搜索加入绕过邀请码过期
*修复（前端）：在代理编辑器中使重新排序模型可选，由@guangyang1206保存在https://github.com/Tencent/WeKnora/pull/1317中
* feat(cli): v0.3 — https://github.com/Tencent/WeKnora/pull/1315 中 @voidkey 扩展的管理表面和会话子树
* 重构（检索器）：通过 @ochanism 在 https://github.com/Tencent/WeKnora/pull/1310 中引入用于 KB 范围检索引擎解析的工厂
* 修复（会话）：https://github.com/Tencent/WeKnora/pull/1309 中@wolfkill 的用户会话访问范围
*壮举（系统信息）：通过https://github.com/Tencent/WeKnora/pull/1335中的@lyingbug的故障排除链接来显示数据库迁移错误
* 修复（会话）：通过 https://github.com/Tencent/WeKnora/pull/1336 中的 @lyingbug 将 ErrSessionNotFound 映射到所有处理程序中的 404（#1309 后续）
* 修复（迁移）：确保 pg_trgm 在 https://github.com/Tencent/WeKnora/pull/1334 中的 @lyingbug 的 000041 中的三元组索引之前创建
* 修复(kb)：通过 https://github.com/Tencent/WeKnora/pull/1339 中的 @lyingbug 将 ErrKnowledgeBaseNotFound 映射到处理程序助手的 404
* feat(cli): v0.4 - https://github.com/Tencent/WeKnora/pull/1342 中 @voidkey 的输出合约强化和主流对齐
* feat:修改https://github.com/Tencent/WeKnora/pull/1344中的技能注册目录为@1141520944
* 修复：在https://github.com/Tencent/WeKnora/pull/1346中通过@HelloWeit延长大文件的文档处理超时
* 修复（模型）：在 https://github.com/Tencent/WeKnora/pull/1330 中隐藏@wolfkill 远程模型的 Ollama 提示
* 修复（知识）：防止无限滚动竞争条件导致 @caiyuze-cpu 在 https://github.com/Tencent/WeKnora/pull/1356 中丢失文档
* feat(cli)：v0.5 — 代理 CRUD + 块子树 + https://github.com/Tencent/WeKnora/pull/1354 中 @voidkey 的审计驱动清理
* feat(auth): 连接docreader支持auth by @CodeMarker0 in https://github.com/Tencent/WeKnora/pull/1359
* 修复（docreader/auth）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1361 中从 #1359 强化 gRPC TLS/Token 部署
* 修复：编辑敏感字段并防止 @ochanism 在 https://github.com/Tencent/WeKnora/pull/990 中编辑时凭证丢失
* 修复（docreader）：将 grpcio 楼层提升至 1.78.0，以匹配 https://github.com/Tencent/WeKnora/pull/1363 中 @toy0116 生成的原型
* 重构（凭证）：https://github.com/Tencent/WeKnora/pull/1364 中的 @lyingbug 的 /credentials 子资源、静态加密和测试连接 UX
* feat(embedding): 在https://github.com/Tencent/WeKnora/pull/1365中添加@Wellbek的Zhipu AI嵌入器实现
* 修复（嵌入）：修复https://github.com/Tencent/WeKnora/pull/1366中@lyingbug在Zhipu嵌入器中损坏的注释
* 测试（repo）：通过https://github.com/Tencent/WeKnora/pull/1362中的@toy0116将wiki_config + indexing_strategy添加到sqlite测试DDL
* 修复：防止 https://github.com/Tencent/WeKnora/pull/1369 中@qizwiz 的 LLM 响应中出现空选择和 message=None
* feat(cli): v0.6 — https://github.com/Tencent/WeKnora/pull/1368 中的输出合同、文档等待、状态、@voidkey 的多 ID 删除
* 壮举（知识库）：通过 @ochanism 在 https://github.com/Tencent/WeKnora/pull/1372 中验证创建、复制和删除时的向量存储绑定
* 修复（代理）：从 https://github.com/Tencent/WeKnora/pull/1370 中 @wolfkill 的提示中排除处理文档
* feat(rbac)：多租户 RBAC — 模式、执行、成员管理、所有权、审核日志 (#1303) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1367
* 修复（会话）：更新 AgentQA 以根据 https://github.com/Tencent/WeKnora/pull/1375 中 @lyingbug 的请求有条件地禁用标题
*壮举（前端）：在https://github.com/Tencent/WeKnora/pull/1376中由@lyingbug重新设计知识文档标签选择器
* feat(obs): 支持华为云存储 obs by @CodeMarker0 in https://github.com/Tencent/WeKnora/pull/1377
* feat(url): 支持docreader不下载替换白名单url的图片 by @CodeMarker0 in https://github.com/Tencent/WeKnora/pull/1378
*壮举（租户）：更丰富的工作区切换吐司，在https://github.com/Tencent/WeKnora/pull/1379中@lyingbug的切换后重新加载中幸存下来
* 壮举（租户）：通过 https://github.com/Tencent/WeKnora/pull/1381 中的 @lyingbug 记住用户上次登录时的活动工作区
* 修复(auth): 通过https://github.com/Tencent/WeKnora/pull/1384中的@lyingbug统一DISABLE_REGISTRATION和auth.registration_mode
* Chore(env)：通过 https://github.com/Tencent/WeKnora/pull/1385 中的 @lyingbug 将租户 RBAC + 每用户租户上限公开为 env 旋钮
* 修复（docparser）：在 https://github.com/Tencent/WeKnora/pull/1382 中取消转义 MinerU markdown 图像语法，作者为 @nixidexiangjiao
* 修复（moonshot）：对于 https://github.com/Tencent/WeKnora/pull/1383 中的@nixidexiangjiao 拒绝其他值的模型，引脚温度=1
* 样式（菜单）：通过 https://github.com/Tencent/WeKnora/pull/1387 中的 @lyingbug 收紧侧边栏中的会话列表密度
* 修复（菜单）：在 https://github.com/Tencent/WeKnora/pull/1388 中通过 @lyingbug 打开现有聊天时避免刷新会话列表
* 修复（菜单）：当 https://github.com/Tencent/WeKnora/pull/1389 中的@lyingbug 有额外空间时，停止截断会话标题
* feat(session)：在 https://github.com/Tencent/WeKnora/pull/1390 中保留 @lyingbug 的 UI 恢复的最后请求状态
* 恢复：在 https://github.com/Tencent/WeKnora/pull/1391 中的@lyingbug 在租户成员页面上放置彩色角色芯片样式
* 修复（i18n）：https://github.com/Tencent/WeKnora/pull/1392 中的 @lyingbug 在邀请电子邮件占位符中转义“@”
* 修复（chunker）：在 https://github.com/Tencent/WeKnora/pull/1396 中通过 @wolfkill 将顶级标题块分开
* doris：通过@SilentMil在https://github.com/Tencent/WeKnora/pull/1395中添加可配置的兼容模式和保护模式开关
* feat: 在 https://github.com/Tencent/WeKnora/pull/1405 中通过 @xdgu0275 添加 MinerU 的 vLLM 服务器 URL 配置
* 杂务：通过 https://github.com/Tencent/WeKnora/pull/1407 中的 @lyingbug 将 go.mod 中的 Go 版本更新为 1.26.0
* 修复（前端）：https://github.com/Tencent/WeKnora/pull/1406 中的 @lyingbug 在 UI 门中镜像跨租户超级用户管理员角色
* 重构（代理）：通过https://github.com/Tencent/WeKnora/pull/1410中的@lyingbug将grep_chunks工具简化为单个正则表达式查询
* feat(frontend): 使 Vite 开发代理目标可以通过 https://github.com/Tencent/WeKnora/pull/1412 中的 @lyingbug 进行配置
* 修复（聊天）：稳定历史分页并通过 https://github.com/Tencent/WeKnora/pull/1409 中的 @lyingbug 保持消息顺序
* feat(search)：通过 @ochanism 在 https://github.com/Tencent/WeKnora/pull/1386 中跨绑定向量存储进行扇出 KB 检索
* 修复（知识）：https://github.com/Tencent/WeKnora/pull/1408 中的 @wolfkill 立即完成索引文档
*修复（client）：将UpdateAgent请求类型与https://github.com/Tencent/WeKnora/pull/1398中的@HQF2017的内部API对齐
* 修复（会话）：将 wiki 修复程序范围扩展到 https://github.com/Tencent/WeKnora/pull/1413 中 @wolfkill 的共享知识库租户
* 修复（聊天）：通过 https://github.com/Tencent/WeKnora/pull/1419 中的 @lyingbug 提高历史渲染稳定性
*修复（docparser）：保留MinerU markdown并在https://github.com/Tencent/WeKnora/pull/1404中保留@M1dnightSUN的相关图像
* 修复（docparser）：解决 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1420 中对＃1404（MinerU markdown 和图像持久性）的评论反馈
* 文档：添加中文 RBAC 指南并链接到 https://github.com/Tencent/WeKnora/pull/1421 中 @lyingbug 的共享空间文档
* 修复（前端）：保护知识列表免受 @iceloon 在 https://github.com/Tencent/WeKnora/pull/1424 中的过时更新
*修复（聊天）：调整用户消息容器以支持https://github.com/Tencent/WeKnora/pull/1425中@ThinhTT84的预包装文本
* 修复（存储库）：正确的查询语法以获取正确的内置模型 #1373 by @ThinhTT84 in https://github.com/Tencent/WeKnora/pull/1428
* 杂务（发布）：v0.6.0 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1422
* 文档（自述文件）：https://github.com/Tencent/WeKnora/pull/1430 中的 @lyingbug 将最新更新压平为单行每个版本列表

## 新贡献者
* @HelloWeit 在 https://github.com/Tencent/WeKnora/pull/1346 中做出了第一个贡献
* @caiyuze-cpu 在 https://github.com/Tencent/WeKnora/pull/1356 中做出了第一个贡献
* @Wellbek 在 https://github.com/Tencent/WeKnora/pull/1365 中做出了第一个贡献
* @qizwiz 在 https://github.com/Tencent/WeKnora/pull/1369 中做出了第一个贡献
* @nixidexiangjiao 在 https://github.com/Tencent/WeKnora/pull/1382 中做出了第一个贡献
* @SilentMil 在 https://github.com/Tencent/WeKnora/pull/1395 中做出了第一个贡献
* @xdgu0275 在 https://github.com/Tencent/WeKnora/pull/1405 中做出了第一个贡献
* @M1dnightSUN 在 https://github.com/Tencent/WeKnora/pull/1404 中做出了第一个贡献
* @iceloon 在 https://github.com/Tencent/WeKnora/pull/1424 中做出了第一个贡献
* @ThinhTT84 在 https://github.com/Tencent/WeKnora/pull/1425 中做出了第一个贡献
**完整 Changelog**：https://github.com/Tencent/WeKnora/compare/v0.5.2...v0.6.0

---

> 📦 仓库：[Tencent/WeKnora](https://github.com/Tencent/WeKnora) · 🏷️ 版本：`v0.6.0` · 📅 发布：2026-05-21 · [查看英文原版 Release](https://github.com/Tencent/WeKnora/releases/tag/v0.6.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
