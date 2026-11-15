---
title: "minio RELEASE.2025-05-24T17-08-30Z"
project: "minio"
repo: "minio/minio"
tag: "RELEASE.2025-05-24T17-08-30Z"
version: "RELEASE.2025-05-24T17-08-30Z"
published: "2025-05-24"
type: "release"
lang: "zh"
---

# minio RELEASE.2025-05-24T17-08-30Z

## 亮点
* 删除 Boringcrypto 支持 - 从 go1.24.x 开始，您现在可以在同一二进制文件上简单地使用 GOFIPS 环境变量。
* 嵌入式 UI 控制台现已弃用并移至 [对象浏览器](https://github.com/minio/object-browser)
   - 通过 LDAP/OIDC 的外部 IDP 登录也被删除；这些现在作为 AiStor 产品的一部分提供。
   - STS APIs continue to work if someone wishes to build UI in front.
* For all paying customers, we recommend that if you are planning to upgrade, you should upgrade to [AiStor](https://min.io/download?view=aistor-custom). 
* 打开 [SUBNET](https://subnet.min.io) 问题，以便我们可以进一步指导您进行 AiStor 迁移。
* AiStor binaries are backwards compatible, so you can upgrade your existing open source deployment to AiStor seamlessly.

## 发生了什么变化
* Correct spelling by @shtripat in https://github.com/minio/minio/pull/21225
* update `minio/kms-go/kms` SDK by @aead in https://github.com/minio/minio/pull/21233
* Fix nil dereference in adding service account by @taran-p in https://github.com/minio/minio/pull/21235
* 使用go mod工具安装https://github.com/minio/minio/pull/21232中@klauspost生成的go工具
* 在https://github.com/minio/minio/pull/21236中添加@cniackz的replication_max_lrg_workers文档
* 修复：在 AbortMultipartUpload 可以成功执行 PutObjectPart 后，... by @jiuker in https://github.com/minio/minio/pull/21229
* 拼写错误：从 https://github.com/minio/minio/pull/21238 中的@wooffie 从RemoveRemoteTargetsForEndpoint 返回实际错误
* 壮举：支持 @matthewdavidlloyd 在 https://github.com/minio/minio/pull/21231 中的 nats nkey 种子验证
* 修复：https://github.com/minio/minio/pull/21241 中 @jiuker 跟踪 exipreAll 的对象和存储桶
* 清理：使用 NewWithOptions 替换 https://github.com/minio/minio/pull/21243 中 @jiuker 已弃用的选项
* @harshavardhana 在 https://github.com/minio/minio/pull/21272 中为 AppendObject() API 返回错误
* 通过 @bexsoft 在 https://github.com/minio/minio/pull/21278 中将 UI 控制台更新到最新版本
* 允许 FTPS 在 https://github.com/minio/minio/pull/21251 中通过 @klauspost 强制使用 TLS
* 在 https://github.com/minio/minio/pull/21292 中删除 @aead 的 Boringcrypto 对 FIPS 140-2 的支持
* 修复：https://github.com/minio/minio/pull/21277 中 @jiuker 无法获取 net.Interface 导致恐慌
* 将 https://github.com/minio/minio/pull/21294 中的控制台 UI 更新为 @bexsoft 的最新版本
* 修复：避免在 https://github.com/minio/minio/pull/21302 中@vadmeste 在单次和分布式擦除模式下禁用扫描仪修复
* 修复：@jiuker 在 https://github.com/minio/minio/pull/21282 中对非 US-ASCII 元数据使用 mime 编码
* 文档：在https://github.com/minio/minio/pull/21308中@CommanderStorm的自述文件中使用github风格的注释

## 新贡献者
* @CommanderStorm 在 https://github.com/minio/minio/pull/21308 中做出了第一个贡献

**Full Changelog**: https://github.com/minio/minio/compare/RELEASE.2025-04-22T22-12-26Z...RELEASE.2025-05-24T17-08-30Z

---

> 📦 仓库：[minio/minio](https://github.com/minio/minio) · 🏷️ 版本：`RELEASE.2025-05-24T17-08-30Z` · 📅 发布：2025-05-24 · [查看英文原版 Release](https://github.com/minio/minio/releases/tag/RELEASE.2025-05-24T17-08-30Z)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
