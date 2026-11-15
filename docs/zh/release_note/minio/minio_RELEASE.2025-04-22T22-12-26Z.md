---
title: "minio RELEASE.2025-04-22T22-12-26Z"
project: "minio"
repo: "minio/minio"
tag: "RELEASE.2025-04-22T22-12-26Z"
version: "RELEASE.2025-04-22T22-12-26Z"
published: "2025-04-22"
type: "release"
lang: "zh"
---

# minio RELEASE.2025-04-22T22-12-26Z

## 发生了什么变化
* move to go1.24 by @harshavardhana in https://github.com/minio/minio/pull/21114
* Fix buffered streams missing final entries  by @klauspost in https://github.com/minio/minio/pull/21122
* 拼写错误：修复 @wooffie 在 https://github.com/minio/minio/pull/21120 中解码 XL 标头的错误消息
* 构建（deps）：将 golang.org/x/crypto 从 https://github.com/minio/minio/pull/21185 中的 /docs/debugging/s3-verify 中的 0.32.0 提升到 0.35.0
* 拼写错误：修复 @wooffie 在 https://github.com/minio/minio/pull/21121 中返回的 checkDiskFatalErrs
* build(deps): 将 golang.org/x/crypto 从 0.32.0 中的 /docs/debugging/inspect 中的 0.35.0 提升到 https://github.com/minio/minio/pull/21192 中的 @dependabot
* build(deps): bump golang.org/x/net from 0.37.0 to 0.38.0 by @dependabot in https://github.com/minio/minio/pull/21200
* build(deps): bump golang.org/x/net from 0.34.0 to 0.38.0 in /docs/debugging/s3-verify by @dependabot in https://github.com/minio/minio/pull/21199
* 构建（deps）：通过https://github.com/minio/minio/pull/21191中的@dependabot将github.com/nats-io/nats-server/v2从2.9.23提升到2.10.27
* 通过 @klauspost 在 https://github.com/minio/minio/pull/21203 中修复共享错误缓冲区
* 支持 @harshavardhana 在 https://github.com/minio/minio/pull/21223 中正确自动生成 KMS_SECRET_KEY 凭据
* fix: batch expiry job doesn't report delete marker in batch-status me… by @jiuker in https://github.com/minio/minio/pull/21183
* 首先由 @matthewdavidlloyd 在 https://github.com/minio/minio/pull/21008 中进行 Nats tls 握手

## 新贡献者
* @matthewdavidlloyd 在 https://github.com/minio/minio/pull/21008 中做出了第一个贡献

**Full Changelog**: https://github.com/minio/minio/compare/RELEASE.2025-04-08T15-41-24Z...RELEASE.2025-04-22T22-12-26Z

---

> 📦 仓库：[minio/minio](https://github.com/minio/minio) · 🏷️ 版本：`RELEASE.2025-04-22T22-12-26Z` · 📅 发布：2025-04-22 · [查看英文原版 Release](https://github.com/minio/minio/releases/tag/RELEASE.2025-04-22T22-12-26Z)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
