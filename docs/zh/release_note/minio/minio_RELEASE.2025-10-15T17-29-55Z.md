---
title: "minio RELEASE.2025-10-15T17-29-55Z"
project: "minio"
repo: "minio/minio"
tag: "RELEASE.2025-10-15T17-29-55Z"
version: "RELEASE.2025-10-15T17-29-55Z"
published: "2025-10-16"
type: "release"
lang: "zh"
---

# minio RELEASE.2025-10-15T17-29-55Z

## 安全

报告了一个 CVE [通过服务帐户和 STS 中的会话策略绕过进行权限升级](https://github.com/minio/minio/security/advisories/GHSA-jjjj-jwhf-8rgr)，并在此版本中修复，

建议所有用户立即下载并升级其 MinIO 设置。

安装最新版本

```
go install -v github.com/minio/minio@latest
```

或

```
go install -v github.com/minio/minio@RELEASE.2025-10-15T17-29-55Z
```

对于容器环境，请克隆源并构建最新的容器。 

```
git clone https://github.com/minio/minio
git checkout RELEASE.2025-10-15T17-29-55Z
TAG=myregistry.com/minio/minio:RELEASE.2025-10-15T17-29-55Z make docker
```

## 发生了什么变化
*修复：删除https://github.com/minio/minio/pull/21569中@0xMALVEE不必要的复制检查
* LDAP TLS 握手失败，并由 https://github.com/minio/minio/pull/21582 中的 @mosesdd 执行 StartTLS 和 tls_skip_verify=off
* 修复：退役后@jiuker在https://github.com/minio/minio/pull/21590中添加池时池ID不正确
* 修复：在 https://github.com/minio/minio/pull/21597 中 @jiuker 取消 saveRebalanceStats 后将为空
* 在 https://github.com/minio/minio/pull/21613 中使用 @klauspost 的新 gofumpt
* 修复：timeN 函数返回最终闭包不会被 https://github.com/minio/minio/pull/21615 中的 @drivebyer 调用
* 通过 @ravindk89 在 https://github.com/minio/minio/pull/21625 中更新 MinIO 文档的自述文件
* 使用 Docker 更新自述文件以及 @ravindk89 在 https://github.com/minio/minio/pull/21627 中的 Helm 安装说明
* 将 https://github.com/minio/minio/pull/21629 中的 @marktheunissen 工具链指令中的 Go 版本升级为 1.24.8
* 修复：允许 @cduzer 在 https://github.com/minio/minio/pull/21612 中的 AWS S3 POST 策略中添加尾部斜杠
* 更改 https://github.com/minio/minio/pull/21636 中 @ravindk89 的自述文件中的文档链接
* 修复：当 @donatello 在 https://github.com/minio/minio/pull/21642 中出现时，正确检查子策略

## 新贡献者
* @mosesdd 在 https://github.com/minio/minio/pull/21582 中做出了第一个贡献
* @cduzer 在 https://github.com/minio/minio/pull/21612 中做出了第一个贡献

**完整 Changelog**：https://github.com/minio/minio/compare/RELEASE.2025-09-07T16-13-09Z...RELEASE.2025-10-15T17-29-55Z

---

> 📦 仓库：[minio/minio](https://github.com/minio/minio) · 🏷️ 版本：`RELEASE.2025-10-15T17-29-55Z` · 📅 发布：2025-10-16 · [查看英文原版 Release](https://github.com/minio/minio/releases/tag/RELEASE.2025-10-15T17-29-55Z)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
