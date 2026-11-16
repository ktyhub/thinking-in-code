---
title: "weaviate v1.36.24"
project: "weaviate"
repo: "weaviate/weaviate"
tag: "v1.36.24"
version: "v1.36.24"
published: "2026-10-23"
type: "patch"
lang: "zh"
---

# weaviate v1.36.24

## 重大变更
无

## 新功能
无

## 修复
* 在密钥上键入 auth singleflight，而不仅仅是 https://github.com/weaviate/weaviate/pull/12270 中 @dirkkul 的用户
* 通过 @dirkkul 在 https://github.com/weaviate/weaviate/pull/12251 中修复 RBAC 正则表达式
* 壮举（监控）：https://github.com/weaviate/weaviate/pull/12275 中 @moogacs 的统一后台进程活动 + 持续时间指标
* 修复（db）：当向量索引的队列创建无法避免在https://github.com/weaviate/weaviate/pull/12192中被@antas-marcin孤立时，关闭向量索引
* 通过 @dirkkul 在 https://github.com/weaviate/weaviate/pull/12311 中更新 GRPC 依赖项
* feat(telemetry)：@moogacs 在 https://github.com/weaviate/weaviate/pull/12296 中实现可关联遥测的持久集群和节点身份
* AddMultiVector 幂等性由 @trengrj 在 https://github.com/weaviate/weaviate/pull/12170 中修复
* refact(telemetry) 门 cluster-id 提交在 @moogacs 在 https://github.com/weaviate/weaviate/pull/12326 中启用的遥测上
* 删除 https://github.com/weaviate/weaviate/pull/12338 中 @dirkkul 对恢复旧备份格式的支持
* 通过 @asdine 在 https://github.com/weaviate/weaviate/pull/12116 中按租户大小按比例延迟分配每个租户向量缓存内存
* 杂务（deps）：在所有三个模块（CVE-2026-46600、CVE-2026-56852）中碰撞 x/net 和 x/text，作者：https://github.com/weaviate/weaviate/pull/12371 中的@etiennedi
* 修复（cyclemanager）：当ctx过期时回滚shouldAbort，而@etiennedi在https://github.com/weaviate/weaviate/pull/12265中运行回调
* perf(hnsw): 在 https://github.com/weaviate/weaviate/pull/12374 中通过 @abdelr 分配访问过的稀疏集段
* 修复（工具）：将 qa_pr.sh 日志获取调整为 gh >= 2.97 由 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/12462 中的转义序列防护
* 杂务（deps）：切换到 Go 1.26 并碰撞 x/net、x/crypto、x/text 和 grpc 以修复 https://github.com/weaviate/weaviate/pull/13587 中 @antas-marcin 的 CVE
* 针对 8 个 eMudhra 中间证书泄露的安全补丁


**完整 Changelog**：https://github.com/weaviate/weaviate/compare/v1.36.23...v1.36.24

---

> 📦 仓库：[weaviate/weaviate](https://github.com/weaviate/weaviate) · 🏷️ 版本：`v1.36.24` · 📅 发布：2026-10-23 · [查看英文原版 Release](https://github.com/weaviate/weaviate/releases/tag/v1.36.24)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
