---
title: "minio RELEASE.2025-06-13T11-33-47Z"
project: "minio"
repo: "minio/minio"
tag: "RELEASE.2025-06-13T11-33-47Z"
version: "RELEASE.2025-06-13T11-33-47Z"
published: "2025-06-23"
type: "release"
lang: "zh"
---

# minio RELEASE.2025-06-13T11-33-47Z

## 发生了什么变化
* s3：修复 https://github.com/minio/minio/pull/21246 中 @vadmeste 启用 ILM 时提前列出停止的问题 (#472)
* 由 @varun28sharma 在 https://github.com/minio/minio/pull/21125 中更新 README.md
* 修复：https://github.com/minio/minio/pull/21323 中 @jiuker 的 PostPolicyBucketHandler 的 PostPolicyBucketHandler 为空文件名导致 Reader nil
* fix: panic for TestListObjectsWithILM by @jiuker in https://github.com/minio/minio/pull/21322
* 通过 https://github.com/minio/minio/pull/21309 中的 @12ya 现代化 cmd/、internal/ 中的 for 循环
* 通过 @shtripat 在 https://github.com/minio/minio/pull/21354 中为存储桶复制指标添加 `targetArn` 标签
* allow cross-compiling support for RISC-V 64 by @ffgan in https://github.com/minio/minio/pull/21348
* [ILM] fix: add region config to s3 client on ilm s3 backend #21364 by @BasixKOR in https://github.com/minio/minio/pull/21365
* add networkpolicy for job and add possibility to define egress ports by @hornjo in https://github.com/minio/minio/pull/20951
* 修复：当 ListMultipartUploads 从缓存追加结果时，应使用 https://github.com/minio/minio/pull/21376 中的@jiuker 的存储桶进行过滤
* 修复：在 https://github.com/minio/minio/pull/21378 中尊重 @jiuker 的 renamePart 的 PathNotFound

## 新贡献者
* @varun28sharma made their first contribution in https://github.com/minio/minio/pull/21125
* @12ya 在 https://github.com/minio/minio/pull/21309 中做出了第一个贡献
* @ffgan made their first contribution in https://github.com/minio/minio/pull/21348
* @BasixKOR 在 https://github.com/minio/minio/pull/21365 中做出了第一个贡献
* @hornjo 在 https://github.com/minio/minio/pull/20951 中做出了第一个贡献

**完整 Changelog**：https://github.com/minio/minio/compare/RELEASE.2025-05-24T17-08-30Z...RELEASE.2025-06-13T11-33-47Z

---

> 📦 仓库：[minio/minio](https://github.com/minio/minio) · 🏷️ 版本：`RELEASE.2025-06-13T11-33-47Z` · 📅 发布：2025-06-23 · [查看英文原版 Release](https://github.com/minio/minio/releases/tag/RELEASE.2025-06-13T11-33-47Z)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
