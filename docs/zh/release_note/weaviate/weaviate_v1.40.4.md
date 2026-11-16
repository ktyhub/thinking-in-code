---
title: "weaviate v1.40.4"
project: "weaviate"
repo: "weaviate/weaviate"
tag: "v1.40.4"
version: "v1.40.4"
published: "2026-11-05"
type: "patch"
lang: "zh"
---

# weaviate v1.40.4

## 重大变更 
*无*

## 新功能
*无*

## 修复
* 当该节点仍在 https://github.com/weaviate/weaviate/pull/13557 中 @dirkkul 创建集合时，让读取等待
* 修复（关机）：将 grpc 关机重新排序为在 https://github.com/weaviate/weaviate/pull/13627 中 @tsmith023 的成员列表离开之前
* 修复了 https://github.com/weaviate/weaviate/pull/13634 中 @dirkkul 的空数组缺少属性长度的问题
*修复（添加类）：通过https://github.com/weaviate/weaviate/pull/13592中的@tsmith023从本地模式读取集合上限的快速失败计数
* deps：将 parquet-go/parquet-go 提升至 v0.32.0，将 andybalholm/brotli 提升至 v1.2.7，作者为 https://github.com/weaviate/weaviate/pull/13647 中的@antas-marcin
* 拒绝 https://github.com/weaviate/weaviate/pull/13644 中 @dirkkul 跨命名空间的运算符的别名
* deps: 将 weaviate/mockoidc 升级到 v0.0.2，由 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13652 中
* 当 https://github.com/weaviate/weaviate/pull/13650 中的 @rlmanrique 从存储中丢失对象时（反向移植 v1.37），保持矢量搜索距离对齐
* 其余搜索：在 https://github.com/weaviate/weaviate/pull/13631 中通过 @g-despot 在混合端点上接受调用者提供的向量
* 当 https://github.com/weaviate/weaviate/pull/13645 中的 @rlmanrique 从存储中丢失对象时（反向移植 v1.38），保持向量搜索距离对齐
* 修复：https://github.com/weaviate/weaviate/pull/13649 中 @trengrj 的 gse 分词器
* 拒绝 RBAC 路径上具有无法识别形状的命名空间调用者，作者为 https://github.com/weaviate/weaviate/pull/13664 中的 @dirkkul
* 通过https://github.com/weaviate/weaviate/pull/13049中的@etiennedi使运行时重新索引和副本移动互斥
* 重新索引：在分析 @etiennedi 在 https://github.com/weaviate/weaviate/pull/13675 中的写入之前加载双写状态
* lsmkv：在 https://github.com/weaviate/weaviate/pull/13676 中 @etiennedi 移动之前刷新存储桶的未刷新写入
* 重新索引：当 @etiennedi 在 https://github.com/weaviate/weaviate/pull/13674 中存在可搜索索引时，拒绝仅可过滤的标记化更改
* 分布式任务：手动回调 FAILED 状态，这是 @etiennedi 在 https://github.com/weaviate/weaviate/pull/13677 中生成的失败确认
* 重新索引：将 ?tenants= 中的冻结租户报告为冻结，而不是 https://github.com/weaviate/weaviate/pull/13680 中的 @etiennedi 丢失
* 备份：告诉操作员如何通过 https://github.com/weaviate/weaviate/pull/13681 中 @etiennedi 的重新索引拒绝
* 重新索引：通过 @etiennedi 在 https://github.com/weaviate/weaviate/pull/13684 中记录组的单位计数而不是每个单位 ID
* dtm：通过 https://github.com/weaviate/weaviate/pull/13689 中的 @etiennedi 限制节点为许多失败单元或组写入的 ack 错误
* 修复（重新索引）：通过 @etiennedi 在 https://github.com/weaviate/weaviate/pull/13685 中限制对任务租户的陈旧状态扫描
* 通过https://github.com/weaviate/weaviate/pull/13683中的@etiennedi将任务列表调用绑定到备份重新索引门中
* 备份：在 https://github.com/weaviate/weaviate/pull/13678 中@etiennedi 在整个备份中共享一个重新索引门获取，而不是每个分片一个
* 集群：拒绝 @etiennedi 在 https://github.com/weaviate/weaviate/pull/13699 中针对陈旧副本构建的重新索引提交
* 备份：https://github.com/weaviate/weaviate/pull/13682 中的 @etiennedi 每个类报告一次重新索引拒绝，而不是每个分片一次
* 重新索引：保护迁移目录句柄，更清晰地保留范围索引错误，作者为 https://github.com/weaviate/weaviate/pull/13692 中的@etiennedi
* 重新索引：在 https://github.com/weaviate/weaviate/pull/13701 中@etiennedi 的任何目标租户不热门时拒绝提交
* 重新索引：保留失败迁移的任务记录，直到 @etiennedi 在 https://github.com/weaviate/weaviate/pull/13702 中运行新的任务
* 测试：修复 @etiennedi 在 https://github.com/weaviate/weaviate/pull/13708 中的两个不稳定测试（备份伪造、覆盖交换竞赛检查）
* 通过@etiennedi在https://github.com/weaviate/weaviate/pull/13706中绑定调用者没有deadline时的分布式任务列表查询
* 修复（休息）：在 @aliszka 在 https://github.com/weaviate/weaviate/pull/13646 中拆除之前，在优雅的超时时间内关闭仍然忙碌的 HTTP 服务器
*向量索引更新：删除https://github.com/weaviate/weaviate/pull/13711中@asdine在分片加载时添加到映射记录的新版本字段
*重新索引：将引擎切换到记录并删除标记（第2/2部分）由https://github.com/weaviate/weaviate/pull/12848中的@etiennedi
* 修复（队列）：在 https://github.com/weaviate/weaviate/pull/12879 中由 @abdelr 删除已处理块之前刷新索引
* 当 @dirkkul 在 https://github.com/weaviate/weaviate/pull/13726 中硬链接备份文件时，每个目录调用一次 MkdirAll
* perf(queryadmission)：将每个查询保持在 @aliszka 在 https://github.com/weaviate/weaviate/pull/13617 中实际使用的预算范围内
* 修复（路由器）：当 https://github.com/weaviate/weaviate/pull/13456 中的 @tsmith023 离开成员列表时，强制执行一致性级别
* 在https://github.com/weaviate/weaviate/pull/13383中添加@etiennedi的client端许可协议包(M4)
* 阻止仅限租户的授权列出 @dirkkul 在 https://github.com/weaviate/weaviate/pull/13749 中的单独集合的架构
* 防止像 X|\Q 这样的角色模式在 https://github.com/weaviate/weaviate/pull/13651 中 @dirkkul 的每次权限检查失败
* https://github.com/weaviate/weaviate/pull/13679中的@dirkkul在备份元数据丢失时授权备份和恢复状态
* 杂务（测试）：尝试修复 https://github.com/weaviate/weaviate/pull/13765 中的 @tsmith023 的 `TestReplicationReplicateMOVEDeletesSourceReplica` 不稳定问题
*备份：在@jfrancoa在https://github.com/weaviate/weaviate/pull/13757中读取取消标志之前容忍操作展开
* schema: 当 @rlmanrique 在 https://github.com/weaviate/weaviate/pull/13761 中 AddClassProperty 添加任何内容时，返回类版本
* 修复：如果 https://github.com/weaviate/weaviate/pull/13748 中的 @trengrj 需要，入口点接受正在维护的节点
* 在 https://github.com/weaviate/weaviate/pull/13767 中 @dirkkul 批量回答一个空类，其中包含每个对象的错误


**完整 Changelog**：https://github.com/weaviate/weaviate/compare/v1.40.3...v1.40.4

---

> 📦 仓库：[weaviate/weaviate](https://github.com/weaviate/weaviate) · 🏷️ 版本：`v1.40.4` · 📅 发布：2026-11-05 · [查看英文原版 Release](https://github.com/weaviate/weaviate/releases/tag/v1.40.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
