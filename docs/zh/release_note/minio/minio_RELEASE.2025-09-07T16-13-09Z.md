---
title: "minio RELEASE.2025-09-07T16-13-09Z"
project: "minio"
repo: "minio/minio"
tag: "RELEASE.2025-09-07T16-13-09Z"
version: "RELEASE.2025-09-07T16-13-09Z"
published: "2025-09-07"
type: "release"
lang: "zh"
---

# minio RELEASE.2025-09-07T16-13-09Z

## 发生了什么变化
* 由 @bexsoft 在 https://github.com/minio/minio/pull/21474 中将控制台更新为 v2.0.3
* 通过 @jiuker 在 https://github.com/minio/minio/pull/21475 中为 AbortMultipartUpload() 带来更多幂等行为
* 修复：在https://github.com/minio/minio/pull/21484中通过@jiuker记录listObject的额外skippedEntry
* 壮举：通过 https://github.com/minio/minio/pull/21470 中的 @hornjo 在 grafana 仪表板中添加数据源变量
* imagePullSecrets 全局、本地的一致类型 @0xMALVEE in https://github.com/minio/minio/pull/21500
* 优化https://github.com/minio/minio/pull/21498中@dormanze日志中过时的命令
*修复（helm）：默认情况下不暂停存储桶的版本控制，仅在https://github.com/minio/minio/pull/21494中的@LOCODAK指定（21349）时设置版本控制
* 通过 @klauspost 在 https://github.com/minio/minio/pull/21508 检查 legalHoldPerm
* 修复：当 err 来自 https://github.com/minio/minio/pull/21504 中的 @jiuker 的同级 client 时，errUploadIDNotFound 将被忽略
* 修复：https://github.com/minio/minio/pull/21468 中的 @0xMALVEE 为官方 aws 库提供基于声明的 oidc
* 修复：在 https://github.com/minio/minio/pull/21511 中通过 @jiuker 将名称和描述添加到 ldap 访问密钥列表
* https://github.com/minio/minio/pull/21505中@dormanze修改权限验证类型
* 修复：配置基于声明的 OIDC 时，将未知的 roleArn 视为 https://github.com/minio/minio/pull/21512 中 @ianroberts 的基于声明的身份验证
* @0xMALVEE 在 https://github.com/minio/minio/pull/21483 中自定义用户代理传输包装器
* 通过 @djwfyi 在 https://github.com/minio/minio/pull/21513 中更新文档链接
* http/listener：修复错误并通过 https://github.com/minio/minio/pull/21514 中的 @denpeshkov 进行简化
* 修复：在 https://github.com/minio/minio/pull/21528 中使用 amqp.ParseURL 解析 @jiuker 的 amqp url
* 修复：https://github.com/minio/minio/pull/21535 中@marktheunissen 的站点复制中校验和类型一致的无效校验和
* 恢复 `dns.msgUnPath`，修复了 https://github.com/minio/minio/pull/21542 中 @mannreis 的#21541
* 通过 @klauspost 在 https://github.com/minio/minio/pull/21546 中运行现代化
* 修复：保存 rebalanceStats 时未在 https://github.com/minio/minio/pull/21547 中找到 @jiuker 的配置文件
* @bexsoft 在 https://github.com/minio/minio/pull/21564 中将对象浏览器更新到最新版本 v2.0.4
* 修复：https://github.com/minio/minio/pull/21550 中 @0xMALVEE 对不存在对象进行条件写入时返回错误
* 修复 https://github.com/minio/minio/pull/21533 中 @WGH- 对遗留压缩环境变量的支持
* 修复：在 https://github.com/minio/minio/pull/21549 中 @ianroberts 列出访问密钥时，为基于声明的 OIDC 提供商使用正确的虚拟 ARN
* 修复：在 https://github.com/minio/minio/pull/21567 中通过 @0xMALVEE 为多部分写入条件检查

## 新贡献者
* @LOCODAK 在 https://github.com/minio/minio/pull/21494 中做出了第一个贡献
* @ianroberts 在 https://github.com/minio/minio/pull/21512 中做出了第一个贡献
* @denpeshkov 在 https://github.com/minio/minio/pull/21514 中做出了第一个贡献

**完整 Changelog**：https://github.com/minio/minio/compare/RELEASE.2025-07-23T15-54-02Z...RELEASE.2025-09-07T16-13-09Z

---

> 📦 仓库：[minio/minio](https://github.com/minio/minio) · 🏷️ 版本：`RELEASE.2025-09-07T16-13-09Z` · 📅 发布：2025-09-07 · [查看英文原版 Release](https://github.com/minio/minio/releases/tag/RELEASE.2025-09-07T16-13-09Z)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
