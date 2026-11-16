---
title: "weaviate v1.38.23"
project: "weaviate"
repo: "weaviate/weaviate"
tag: "v1.38.23"
version: "v1.38.23"
published: "2026-10-27"
type: "patch"
lang: "zh"
---

# weaviate v1.38.23

## 重大变更
无

## 新功能
无

## 修复
* 修复（备份）：通过 https://github.com/weaviate/weaviate/pull/13350 中的 @tsmith023 将缺少的基本身份验证添加到剩余处理程序
* 如果 @dirkkul 在 https://github.com/weaviate/weaviate/pull/13508 中存在压缩器，则跳过未压缩的 HNSW 矢量缓存
* 修复（混合）：运行重新排序并生成一次 @jfrancoa 在 https://github.com/weaviate/weaviate/pull/13404 中的近文本子搜索
* ci(gcloud)：使用预装的 gcloud 并下载最新版本，仅作为 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13535 中的后备
* 修复（架构）：拒绝 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13530 中对具有迁移属性的模块进行模块设置更改
* 修复（混合）：在https://github.com/weaviate/weaviate/pull/13405中由@jfrancoa在两个混合分支中获取到页面末尾
* 修复（google-modules）：转义并验证https://github.com/weaviate/weaviate/pull/13532中@antas-marcin的Google请求URL中的projectId和模型
* 修复（集群-MT）：让租户工作远离 https://github.com/weaviate/weaviate/pull/13490 中 @moogacs 的串行 RAFT 应用路径
*修复（集群）：停止读取等待https://github.com/weaviate/weaviate/pull/13491中@moogacs无法提供服务的副本
* 阻止 memtable 树递归增长堆配置文件 by @dirkkul in https://github.com/weaviate/weaviate/pull/13522
* 修复（模块）：在 https://github.com/weaviate/weaviate/pull/13406 中 @jfrancoa 的其他附加属性之前运行重新排序
* perf(lsmkv)：每个树级别比较键一次，并通过 https://github.com/weaviate/weaviate/pull/13555 中的 @aliszka 删除扁平化分配
* perf(lsmkv): 停止计时段读取，其持续时间从未被@aliszka记录在https://github.com/weaviate/weaviate/pull/13552中
* perf(lsmkv): 直接在错误之前比较 NotFound 和 Deleted。由 @aliszka 在 https://github.com/weaviate/weaviate/pull/13551 中提供
* perf(lsmkv)：通过 @aliszka 在 https://github.com/weaviate/weaviate/pull/13541 中对所有段的布隆过滤器对每个 roaring-set key 进行一次哈希处理
* perf(contains): 对于 https://github.com/weaviate/weaviate/pull/13540 中 @aliszka 不持有分片的键返回 nil 行
* perf(inverted): 构建批量包含 @aliszka 在 https://github.com/weaviate/weaviate/pull/13554 中每个过滤器值一次的键
* 修复（模块组件）：在 https://github.com/weaviate/weaviate/pull/13558 中嵌入 tokenizer 词汇并停止 @antas-marcin 的 nil-tokenizer 恐慌
* perf(lsmkv): 当策略与https://github.com/weaviate/weaviate/pull/13539中的@aliszka匹配时，内联策略检查
* feat(text2vec-google)：通过 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13550 中记录每个服务、位置和模型的请求持续时间
* 修复（慢日志）：为 https://github.com/weaviate/weaviate/pull/13553 中的 @aliszka 为具有大值列表的过滤器绑定慢查询记录
* 修复（hfresh）：延迟分配发布映射迁移批次并通过https://github.com/weaviate/weaviate/pull/13569中的@asdine绑定它
* eMudhra 中间证书安全补丁由 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13581 中提供
* 杂务（deps）：切换到 Go 1.26 并碰撞 x/net、x/crypto、x/text 和 grpc 以修复 https://github.com/weaviate/weaviate/pull/13587 中 @antas-marcin 的 CVE
* 杂务：禁用 https://github.com/weaviate/weaviate/pull/13599 中 @asdine 的 Claude 代码提交和 PR 归因
* 修复：将没有遗留向量的存储对象视为 @trengrj 在 https://github.com/weaviate/weaviate/pull/13596 中未找到的对象
*修复（模块）：当两个请求在https://github.com/weaviate/weaviate/pull/13407中通过@jfrancoa提供属性时，在每个请求上选择相同的模块
* 修复（db）：在 https://github.com/weaviate/weaviate/pull/13376 中由 @antas-marcin 加载每个分片时重新计算属性长度
* refactor(db)：在 https://github.com/weaviate/weaviate/pull/13611 中 @antas-marcin 共享尺寸重新索引和属性长度重新计数之间的启动重建扇出
* perf(db)：在 https://github.com/weaviate/weaviate/pull/13612 中 @antas-marcin 加载之前，为所有启动重建打开并遍历每个分片一次
* 杂务：调整https://github.com/weaviate/weaviate/pull/13621中@antas-marcin在tools/gen-code-from-swagger.sh脚本中下载的macOS swagger lib


**完整 Changelog**：https://github.com/weaviate/weaviate/compare/v1.38.22...v1.38.23

---

> 📦 仓库：[weaviate/weaviate](https://github.com/weaviate/weaviate) · 🏷️ 版本：`v1.38.23` · 📅 发布：2026-10-27 · [查看英文原版 Release](https://github.com/weaviate/weaviate/releases/tag/v1.38.23)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
