---
title: "helm v3.21.4"
project: "helm"
repo: "helm/helm"
tag: "v3.21.4"
version: "v3.21.4"
published: "2026-08-14"
type: "patch"
lang: "zh"
---

# helm v3.21.4

Helm v3.21.4 是一个补丁版本。我们鼓励用户升级以获得最佳体验。

社区不断发展，我们很高兴在那里见到您！

- 加入[Kubernetes Slack](https://kubernetes.slack.com)中的讨论：
  - 提出问题并闲逛
  - 用于讨论 PR、代码和错误
- 参加公共开发者电话会议：星期四，太平洋时间 9:30，通过 [Zoom](https://zoom-lfx.platform.linuxfoundation.org/meeting/91295593969?password=17825db5-c698-44cc-9f00-ef1f61f5d3fb)
- 测试、调试和贡献图表：[ArtifactHub/packages](https://artifacthub.io/packages/search?kind=0)

## 显着变化

- 修复（引擎）：防止 Files.Lines 在空文件上发生恐慌（向后移植到 v3）- #32303 by @mahesh-sadupalli
- 修复（出处）：迁移到 ProtonMail/go-crypto 以解析 GO-2026-5932- #32463 by @karan-vk
- [dev-v3 backport] 修复：凹凸 go.opentelemetry.io/otel@v1.44.0 for GO-2026-5158- #32535 by @scottrigby
- [dev-v3 向后移植] deps：凹凸 google.golang.org/grpc@v1.82.1 for GO-2026-6061-#32536 by @scottrigby
- 杂务（deps）：将 golang.org/x/crypto 从 0.53.0 提升到 0.54.0-（包括 golang.org/x/text v0.40.0 来修复 GO-2026-5970）#32308

## 安装和升级

下载头盔 v3.21.4。通用平台二进制文件在这里：

- [MacOS amd64](https://get.helm.sh/helm-v3.21.4-darwin-amd64.tar.gz) ([校验和](https://get.helm.sh/helm-v3.21.4-darwin-amd64.tar.gz.sha256sum) / 9173d05edf9592c6be1d0412ffafd935448dfc7a63c2bc732b8c67e55503e8a8)
- [MacOS arm64](https://get.helm.sh/helm-v3.21.4-darwin-arm64.tar.gz) ([校验和](https://get.helm.sh/helm-v3.21.4-darwin-arm64.tar.gz.sha256sum) / 6e0bf5eb6daafc2b1ec34bb5ba04ef103f3afc16192fb19805c2924d7ea1033f)
- [Linux amd64](https://get.helm.sh/helm-v3.21.4-linux-amd64.tar.gz) ([校验和](https://get.helm.sh/helm-v3.21.4-linux-amd64.tar.gz.sha256sum) / 61f88ab166748cb19604d7884cb100ae9ccb13804ddeb98e08af167eacbb6a14)
- [Linux 手臂](https://get.helm.sh/helm-v3.21.4-linux-arm.tar.gz) ([校验和](https://get.helm.sh/helm-v3.21.4-linux-arm.tar.gz.sha256sum) / b02709eab565cfcee8acdb10c143daf05ab06d994baeb85e63976513367925a7)
- [Linux arm64](https://get.helm.sh/helm-v3.21.4-linux-arm64.tar.gz) ([校验和](https://get.helm.sh/helm-v3.21.4-linux-arm64.tar.gz.sha256sum) / b54c04b4e0b2540bbdc08c17a121dab70e9a2ed0de5705528fec68a5fd3b85a7)
- [Linux i386](https://get.helm.sh/helm-v3.21.4-linux-386.tar.gz) ([校验和](https://get.helm.sh/helm-v3.21.4-linux-386.tar.gz.sha256sum) / 71280742be811c7d9d6b4546125f185ba01c6fd967e47491766b0055a0570cf5)
- [Linux ppc64le](https://get.helm.sh/helm-v3.21.4-linux-ppc64le.tar.gz) ([校验和](https://get.helm.sh/helm-v3.21.4-linux-ppc64le.tar.gz.sha256sum) / ba4e4f440b6992f119160e3ceea29d80158546c9241748332ffa1cfdfbb0bd8f)
- [Linux s390x](https://get.helm.sh/helm-v3.21.4-linux-s390x.tar.gz) ([校验和](https://get.helm.sh/helm-v3.21.4-linux-s390x.tar.gz.sha256sum) / 321de1ff6fe57a9a5eca6b56d78d6959babe295ec7aab49af1a0d2bcfc02dfc8)
- [Linux riscv64](https://get.helm.sh/helm-v3.21.4-linux-riscv64.tar.gz) ([校验和](https://get.helm.sh/helm-v3.21.4-linux-riscv64.tar.gz.sha256sum) / fef3ec7e1ddafe8927253ad79f2f8e3ac41f3f92328eb2c23bd4513b4421e5d9)
- [Windows amd64](https://get.helm.sh/helm-v3.21.4-windows-amd64.zip) ([校验和](https://get.helm.sh/helm-v3.21.4-windows-amd64.zip.sha256sum) / 268a7b98b313403055e4f31807aeaac529c90e1188acd7857ae3e960b0f67cce)
- [Windows arm64](https://get.helm.sh/helm-v3.21.4-windows-arm64.zip) ([校验和](https://get.helm.sh/helm-v3.21.4-windows-arm64.zip.sha256sum) / e23545fff21ef04853a9540925dd73c4b9caaa24ee7fdd8482b1ee626a4eecc9)

此版本是用 `208D D36E D5BB 3745 A167 43A4 C7C6 FBB5 B91C 1155` 签名的，可以在 @scottrigby [keybase 帐户](https://keybase.io/r6by) 中找到。请使用随附的签名通过 `gpg` 验证此版本。

[快速入门指南](https://helm.sh/docs/intro/quickstart/) 将帮助您从那里开始。如需**升级说明**或详细安装说明，请查看[安装指南](https://helm.sh/docs/intro/install/)。您还可以在任何具有 `bash` 的系统上使用[安装脚本](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3)。

## 下一步是什么

- 4.3.0 和 3.22.0 是计划于 2026 年 9 月 9 日发布的下一个次要版本

## Changelog

- 杂务（deps）：将 golang.org/x/crypto 从 0.53.0 提升到 0.54.0 (#32308) 813176c51bb5c181dbbd7901298ddcc104cd3417 (dependabot[bot])
- [dev-v3 向后移植] deps：凹凸 google.golang.org/grpc@v1.82.1 for GO-2026-6061 b6aa8b1d71140347f75ef0b77fac91f28ffe10b3 (Scott Rigby)
- 修复：GO-2026-5158 57ce7aeec1eb82422c5c349dfadda20ea3f743fe 的凹凸 go.opentelemetry.io/otel@v1.44.0 (Scott Rigby)
- 修复（来源）：迁移到 ProtonMail/go-crypto 以解析 GO-2026-5932 ab71449c76f66e55064ae4503a6e7adae21dcfa9 (Karan V)
- 修复（引擎）：防止 Files.Lines 在空文件 955dfab1e6bdd70b5ccd7b932b2d500e9e26566c 上出现恐慌（Mahesh Sadupalli）

**完整 Changelog**：https://github.com/helm/helm/compare/v3.21.3...v3.21.4

---

> 📦 仓库：[helm/helm](https://github.com/helm/helm) · 🏷️ 版本：`v3.21.4` · 📅 发布：2026-08-14 · [查看英文原版 Release](https://github.com/helm/helm/releases/tag/v3.21.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
