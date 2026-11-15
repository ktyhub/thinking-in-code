---
title: "minio RELEASE.2025-07-23T15-54-02Z"
project: "minio"
repo: "minio/minio"
tag: "RELEASE.2025-07-23T15-54-02Z"
version: "RELEASE.2025-07-23T15-54-02Z"
published: "2025-07-23"
type: "release"
lang: "zh"
---

# minio RELEASE.2025-07-23T15-54-02Z

## 发生了什么变化
* 在 https://github.com/minio/minio/pull/21435 中添加 @loganaden 对 X25519MLKEM768 的支持
* 修复：通过 @jiuker 在 https://github.com/minio/minio/pull/21115 中限制 SinglePool 的最小可用驱动器阈值
* 当 https://github.com/minio/minio/pull/21449 中 @harshavardhana 的 data==parity 时，等待 HEAD/GET 在 minDisks+1 上读取元数据
* 修复 https://github.com/minio/minio/pull/21419 中 @supermp objTime 以整秒结束（没有亚秒）时的边界值错误
* 通过 https://github.com/minio/minio/pull/21450 中的 @0xMALVEE 简化验证策略映射

## 新贡献者
* @loganaden 在 https://github.com/minio/minio/pull/21435 中做出了第一个贡献
* @supermp 在 https://github.com/minio/minio/pull/21419 中做出了第一个贡献
* @0xMALVEE 在 https://github.com/minio/minio/pull/21450 中做出了第一个贡献

**完整 Changelog**：https://github.com/minio/minio/compare/RELEASE.2025-07-18T21-56-31Z...RELEASE.2025-07-23T15-54-02Z

---

> 📦 仓库：[minio/minio](https://github.com/minio/minio) · 🏷️ 版本：`RELEASE.2025-07-23T15-54-02Z` · 📅 发布：2025-07-23 · [查看英文原版 Release](https://github.com/minio/minio/releases/tag/RELEASE.2025-07-23T15-54-02Z)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
