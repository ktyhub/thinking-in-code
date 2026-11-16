---
title: "WeKnora v0.6.2"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.6.2"
version: "v0.6.2"
published: "2026-06-10"
type: "patch"
lang: "zh"
---

# WeKnora v0.6.2

## 发生了什么变化
* 修复（auth）：允许 https://github.com/Tencent/WeKnora/pull/1618 中的 @lyingbug 匿名访问共享链接端点（#1617）
* 重构（聊天）：通过 https://github.com/Tencent/WeKnora/pull/1619 中的 @lyingbug 改进模型名称清理和路径验证
* 修复（知识）：通过 https://github.com/Tencent/WeKnora/pull/1623 中的 @lyingbug 更新 doc-scroll-container 类绑定以说明加载状态
* 修复（前端）：KB 列表在 https://github.com/Tencent/WeKnora/pull/1620 中由 @draix 提供 ≥2 个知识库时呈现为空（#795）
* feat(migrations)：https://github.com/Tencent/WeKnora/pull/1609 中 @toy0116 的 1024 维嵌入 (bge-m3) 的 HNSW 索引
* 修复（迁移）：通过 https://github.com/Tencent/WeKnora/pull/1624 中的 @lyingbug 更新 HNSW 索引的迁移注释
* 修复(duckdb): 避免 https://github.com/Tencent/WeKnora/pull/1615 中 @langcaiye 在启动过程中安装扩展
* 修复：https://github.com/Tencent/WeKnora/pull/1627支持@langcaiye自定义jieba词典目录
* 修复：https://github.com/Tencent/WeKnora/pull/1622 中 @shifang0511 完成文档轮询后刷新 wiki 状态
*壮举（cli）！：v0.9 代理优先 CLI — 合同协调、身份验证/配置文件合并、@voidkey 在 https://github.com/Tencent/WeKnora/pull/1551 中捆绑代理技能
* 重构（跟踪）：通过 https://github.com/Tencent/WeKnora/pull/1629 中的 @lyingbug 删除 Jaeger 集成和相关组件
* 修复：@MaoMengww 在 https://github.com/Tencent/WeKnora/pull/1634 中 langfuse 初始化失败
* 重构（前端）：通过 https://github.com/Tencent/WeKnora/pull/1630 中的 @lyingbug 简化知识库和代理处理聊天资源存储
* feat(frontend): 将提交 ID 注入到前端构建中，以便通过 https://github.com/Tencent/WeKnora/pull/1635 中的 @lyingbug 进行版本跟踪
* feat(client)：通过https://github.com/Tencent/WeKnora/pull/1636中@lyingbug的流程配置支持增强知识文件上传
* 修复（聊天）：在 https://github.com/Tencent/WeKnora/pull/1625 中保留 @ziwon 的提供者工具调用元数据
* feat(frontend)：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/1637中增强代码预览的暗模式语法突出显示
* feat(frontend): 在https://github.com/Tencent/WeKnora/pull/1639中通过@lyingbug实现知识库的选取框选择
* 重构（get_document_info）：通过https://github.com/Tencent/WeKnora/pull/1640中的@lyingbug更新模式定义和输入参数
* 壮举（发布）：更新至 0.6.2 版本，其中包含 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1641 中的新功能和改进

## 新贡献者
* @shifang0511 在 https://github.com/Tencent/WeKnora/pull/1622 中做出了第一个贡献

**完整 Changelog**：https://github.com/Tencent/WeKnora/compare/v0.6.1...v0.6.2

---

> 📦 仓库：[Tencent/WeKnora](https://github.com/Tencent/WeKnora) · 🏷️ 版本：`v0.6.2` · 📅 发布：2026-06-10 · [查看英文原版 Release](https://github.com/Tencent/WeKnora/releases/tag/v0.6.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
