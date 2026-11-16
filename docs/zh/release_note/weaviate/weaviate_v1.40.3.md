---
title: "weaviate v1.40.3"
project: "weaviate"
repo: "weaviate/weaviate"
tag: "v1.40.3"
version: "v1.40.3"
published: "2026-10-28"
type: "patch"
lang: "zh"
---

# weaviate v1.40.3

## 重大变更
无

## 新功能
无

## 修复
* 修复（备份）：通过 https://github.com/weaviate/weaviate/pull/13350 中的 @tsmith023 将缺少的基本身份验证添加到剩余处理程序
*修复（遥测）：超时推送，因此挂起的消费者无法阻止https://github.com/weaviate/weaviate/pull/13389中@aliszka的关闭
* 修复（反转）：跳过未更改的属性长度写入，并在 https://github.com/weaviate/weaviate/pull/13400 中通过 @aliszka 关闭文件时 fsync
*修复（关闭）：在https://github.com/weaviate/weaviate/pull/13412中@aliszka关闭其分片之前停止集合的循环
* 测试（text2vec-contextionary）：跳过 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13531 中的 GraphQL 最近邻居测试用例
*修复（db）：批量删除从未从https://github.com/weaviate/weaviate/pull/12889中的@abdelr从地理索引队列中删除对象
* 如果 @dirkkul 在 https://github.com/weaviate/weaviate/pull/13508 中存在压缩器，则跳过未压缩的 HNSW 矢量缓存
* 修复（混合）：运行重新排序并生成一次 @jfrancoa 在 https://github.com/weaviate/weaviate/pull/13404 中的近文本子搜索
* 通过 @rlmanrique 在 https://github.com/weaviate/weaviate/pull/13533 中保护 ACORN 边界缓冲区免受过载顶点的影响
* ci(gcloud)：使用预装的 gcloud 并下载最新版本，仅作为 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13535 中的后备
* 修复（架构）：拒绝 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13530 中对具有迁移属性的模块进行模块设置更改
* Compactv2：在加载时丢弃 v1.34 之前的快照，而不是在 https://github.com/weaviate/weaviate/pull/13545 中由 @asdine 失败
* 修复（混合）：在https://github.com/weaviate/weaviate/pull/13405中由@jfrancoa在两个混合分支中获取到页面末尾
* 修复（google-modules）：转义并验证https://github.com/weaviate/weaviate/pull/13532中@antas-marcin的Google请求URL中的projectId和模型
* 添加准备时间、向量索引恢复和缓存预填充指标（最小集），作者：https://github.com/weaviate/weaviate/pull/13474 中的 @rlmanrique
*修复（聚合器）：过滤元计数包括https://github.com/weaviate/weaviate/pull/12890中@abdelr重启后删除的对象
* 在自动模式添加 https://github.com/weaviate/weaviate/pull/13548 中 @dirkkul 的属性之前等待类版本
* 修复（集群-MT）：让租户工作远离 https://github.com/weaviate/weaviate/pull/13490 中 @moogacs 的串行 RAFT 应用路径
*修复（集群）：停止读取等待https://github.com/weaviate/weaviate/pull/13491中@moogacs无法提供服务的副本
* 阻止 memtable 树递归增长堆配置文件，@dirkkul 在 https://github.com/weaviate/weaviate/pull/13522 中
* 修复（模块）：在 https://github.com/weaviate/weaviate/pull/13406 中 @jfrancoa 的其他附加属性之前运行重新排序
* 保持 vector_index_tombstones 量规等于 @dirkkul 在 https://github.com/weaviate/weaviate/pull/13549 中的墓碑计数
* 在 Python 命名空间测试设置中的任何 422 上重试用户创建，由 @dirkkul 在 https://github.com/weaviate/weaviate/pull/13556 中进行
* perf(lsmkv)：每个树级别比较键一次，并通过 @aliszka 在 https://github.com/weaviate/weaviate/pull/13555 中删除扁平分配
* perf(lsmkv): 停止计时段读取，其持续时间从未被@aliszka记录在https://github.com/weaviate/weaviate/pull/13552中
* perf(lsmkv): 直接在错误之前比较 NotFound 和 Deleted。由 @aliszka 在 https://github.com/weaviate/weaviate/pull/13551 中提供
* perf(lsmkv)：通过 @aliszka 在 https://github.com/weaviate/weaviate/pull/13541 中对所有段的布隆过滤器对每个 roaring-set key 进行一次哈希处理
* perf(contains): 对于 https://github.com/weaviate/weaviate/pull/13540 中 @aliszka 不持有分片的键返回 nil 行
* perf(inverted): 构建批量包含 @aliszka 在 https://github.com/weaviate/weaviate/pull/13554 中每个过滤器值一次的键
* 修复（模块组件）：在 https://github.com/weaviate/weaviate/pull/13558 中嵌入 tokenizer 词汇并停止 @antas-marcin 的 nil-tokenizer 恐慌
* perf(lsmkv): 当策略与https://github.com/weaviate/weaviate/pull/13539中的@aliszka匹配时，内联策略检查
* feat(text2vec-google)：通过 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13550 中记录每个服务、位置和模型的请求持续时间
* 修复（慢日志）：为 https://github.com/weaviate/weaviate/pull/13553 中的 @aliszka 为具有大值列表的过滤器绑定慢查询记录
* 修复(hfresh): 延迟分配发布映射迁移批次并通过https://github.com/weaviate/weaviate/pull/13569中的@asdine绑定它
* eMudhra 中间证书安全补丁由 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13579 中提供
* 更新至 v1.26.10 和 1.39，由 @dirkkul 在 https://github.com/weaviate/weaviate/pull/13575 中更新
* eMudhra 中间证书安全补丁由 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13580 中提供
* eMudhra 中间证书安全补丁由 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13581 中提供
* 杂务（deps）：切换到 Go 1.26 并碰撞 x/net、x/crypto、x/text 和 grpc 以修复 https://github.com/weaviate/weaviate/pull/13587 中 @antas-marcin 的 CVE
* 修复（add-class）：在 https://github.com/weaviate/weaviate/pull/13590 中通过 @tsmith023 在筏应用路径上强制执行收集上限
* 杂务：在 https://github.com/weaviate/weaviate/pull/13599 中禁用@asdine 的 Claude 代码提交和 PR 归因
* 修复：将没有遗留向量的存储对象视为 @trengrj 在 https://github.com/weaviate/weaviate/pull/13596 中未找到的对象
*修复（模块）：当两个请求在https://github.com/weaviate/weaviate/pull/13407中通过@jfrancoa提供属性时，在每个请求上选择相同的模块
* 在 @dirkkul 在 https://github.com/weaviate/weaviate/pull/13613 中的命名空间验收测试中为新的数据库用户密钥留出一分钟时间
* ci(test)：在 https://github.com/weaviate/weaviate/pull/13610 中 @antas-marcin 在 fork 和 Dependabot 跳过的单独作业中运行许可证密钥验收测试
* hnsw/compact：通过 https://github.com/weaviate/weaviate/pull/13341 中的 @rlmanrique 将垃圾节点 ID 分配固定在原始提交日志读取器中
* 测试（惰性加载）：通过 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13615 中停止对预热种子对象进行定期刷新计数
* 修复（db）：在 https://github.com/weaviate/weaviate/pull/13376 中 @antas-marcin 加载每个分片时重新计算属性长度
* refactor(db)：在https://github.com/weaviate/weaviate/pull/13611中@antas-marcin共享尺寸重新索引和属性长度重新计数之间的启动重建扇出
* perf(db)：在 https://github.com/weaviate/weaviate/pull/13612 中 @antas-marcin 加载之前，为所有启动重建打开并遍历每个分片一次
* 杂务：调整https://github.com/weaviate/weaviate/pull/13621中@antas-marcin在tools/gen-code-from-swagger.sh脚本中下载的macOS swagger lib
* 当https://github.com/weaviate/weaviate/pull/13620中的@tsmith023操作模式为只读时，白名单grpc健康检查会读取
* 测试（authz）：在 https://github.com/weaviate/weaviate/pull/13629 中测量 @antas-marcin 的批次引用之前，等待待处理的 authz 日志
* 安全性：通过 https://github.com/weaviate/weaviate/pull/13632 中的 @antas-marcin 将 github.com/go-jose/go-jose/v4 提升至 v4.1.6


**完整 Changelog**：https://github.com/weaviate/weaviate/compare/v1.40.2...v1.40.3

---

> 📦 仓库：[weaviate/weaviate](https://github.com/weaviate/weaviate) · 🏷️ 版本：`v1.40.3` · 📅 发布：2026-10-28 · [查看英文原版 Release](https://github.com/weaviate/weaviate/releases/tag/v1.40.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
