---
title: "helm v4.3.1"
project: "helm"
repo: "helm/helm"
tag: "v4.3.1"
version: "v4.3.1"
published: "2026-10-15"
type: "patch"
lang: "zh"
---

# helm v4.3.1

Helm v4.3.1 是一个补丁版本。我们鼓励用户升级以获得最佳体验。

社区不断发展，我们很高兴在那里见到您！

- Join the discussion in [Kubernetes Slack](https://kubernetes.slack.com):
  - 提出问题并闲逛
  - 用于讨论 PR、代码和错误
- 参加公共开发者电话会议：星期四，太平洋时间 9:30，通过 [Zoom](https://zoom-lfx.platform.linuxfoundation.org/meeting/91295593969?password=17825db5-c698-44cc-9f00-ef1f61f5d3fb)
- 测试、调试和贡献图表：[ArtifactHub/packages](https://artifacthub.io/packages/search?kind=0)

## 显着变化

- 修复（操作）：等待 HookOnlyStrategy 下的 CRD 建立 #32672 by @pujitha24
- 修复（linters）：将 golangci-lint 更新为 v2.14.0 #32744 by @ruslan-shaydullin 

## 安装和升级

下载头盔 v4.3.1。通用平台二进制文件在这里：

- [MacOS amd64](https://get.helm.sh/helm-v4.3.1-darwin-amd64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.1-darwin-amd64.tar.gz.sha256sum) / 34bec4eba761ba5c16d1965ee6b8f5b0abe5993974a802274e2a4f0418893d89)
- [MacOS arm64](https://get.helm.sh/helm-v4.3.1-darwin-arm64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.1-darwin-arm64.tar.gz.sha256sum) / 6b4e61c8cd27d99e5a801e63ff25dd5c70b36875c2cd659d3e9ce6b76fc23198)
- [Linux amd64](https://get.helm.sh/helm-v4.3.1-linux-amd64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.1-linux-amd64.tar.gz.sha256sum) / 0403a88ae20913d11b10a2467b50087721fea7581736da6b9d3992f5357fe54b)
- [Linux 手臂](https://get.helm.sh/helm-v4.3.1-linux-arm.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.1-linux-arm.tar.gz.sha256sum) / 292588ea9f89705511c93a39687fe5e26767bd85b5085a1be9a2a1563c1e28fa)
- [Linux arm64](https://get.helm.sh/helm-v4.3.1-linux-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-arm64.tar.gz.sha256sum) / 8cf8f66ecbc252ac8f7f06cca68aba88508ddfde3a6a34feb1678ad1694b4f88)
- [Linux i386](https://get.helm.sh/helm-v4.3.1-linux-386.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.1-linux-386.tar.gz.sha256sum) / bfe8cbbec02362d869e183f27ca03342820ceae908f7a7db2e17caeef74e6d30)
- [Linux loong64](https://get.helm.sh/helm-v4.3.1-linux-loong64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-loong64.tar.gz.sha256sum) / 5fc8ae4eb1d513775374160a1ff5255290b86e8a71beeae09ae7d3a60f50962f)
- [Linux ppc64le](https://get.helm.sh/helm-v4.3.1-linux-ppc64le.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-ppc64le.tar.gz.sha256sum) / 11bbb554976ce22aeb21b308bb5683f98941db81725d2b280d8b943b6ada8036)
- [Linux s390x](https://get.helm.sh/helm-v4.3.1-linux-s390x.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.1-linux-s390x.tar.gz.sha256sum) / dfb031400c1215c0bd673d5e25bcd300a5af903fbfed10b5cb8b3ffc03bcecb6)
- [Linux riscv64](https://get.helm.sh/helm-v4.3.1-linux-riscv64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.3.1-linux-riscv64.tar.gz.sha256sum) / 20ebb3346bf1d5e5c330a7f1405cfea8eab6a5e1752f24055f03a5221be1688e)
- [Windows amd64](https://get.helm.sh/helm-v4.3.1-windows-amd64.zip) ([校验和](https://get.helm.sh/helm-v4.3.1-windows-amd64.zip.sha256sum) / fcfd7b796dcf0f225abc40b5636a3b01f55f3de2fb1dfb18475df94e62c14112)
- [Windows arm64](https://get.helm.sh/helm-v4.3.1-windows-arm64.zip) ([checksum](https://get.helm.sh/helm-v4.3.1-windows-arm64.zip.sha256sum) / 373edaae86db70342ef39b014e2e7764ea8f9cff08714843daa5e55b5ee492f2)

此版本已与 `208D D36E D5BB 3745 A167 43A4 C7C6 FBB5 B91C 1155` 签署，可在 @scottrigby [keybase 帐户](https://keybase.io/r6by) 中找到。请使用随附的签名通过 `gpg` 验证此版本。

[快速入门指南](https://helm.sh/docs/intro/quickstart/) 将帮助您从那里开始。如需**升级说明**或详细安装说明，请查看[安装指南](https://helm.sh/docs/intro/install/)。您还可以在任何具有 `bash` 的系统上使用[安装脚本](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4)。

## 下一步是什么

- 4.3.2 and 3.22.2 are the next patch releases scheduled for November 11, 2026
- 4.4.0 is the next minor release scheduled for January 13, 2027. There will be no further Helm 3 minor releases (see https://helm.sh/blog/helm-v3-end-of-life)

## Changelog

- 杂务（deps）：将 otlploghttp 和 stdoutlog 提升到 v0.21.0 c0d08d0d6d9424d4a14febb5e8a3e51b0dd00dff (Terry Howe)
- 杂务（deps）：通过 7 个更新将 k8s-io 组跨越 1 个目录 0c0146eb409bcbc1793d97d67500cdf55050a742（dependabot[bot]）
- fix: bump golang.org/x/net to v0.61.0 (#32758) dd91731c138d76a26b3aa3ff69e6d40febe8e737 (Terry Howe)
- 修复（linters）：将 golangci-lint 更新为 v2.14.0 (#32744) 3a376b2917d335edcbc714c0b3770442255ec9af (Ruslan Shaydullin)
- 修复（操作）：等待 HookOnlyStrategy 下的 CRD 建立 (#32672) 5fed6a5e0de4669dc4436eb02db9036fe5941b46 (Pujitha Paladugu)
- 杂务（deps）：将 sigs.k8s.io/controller-runtime 从 0.25.1 提升到 0.25.2 (#32726) b227bf4704ab6ce9aa2de78ba70d8d227564f0c8 (dependabot[bot])
- chore(deps): bump sigs.k8s.io/kustomize/kyaml from 0.21.1 to 0.21.2 (#32715) af79b8ebe296201b47e8f7dac9b6c8a8927086d7 (dependabot[bot])
- 杂务（deps）：碰撞 go.opentelemetry.io/otel/exporters/otlp/otlplog/otlploggrpc ab6b245a2cdcadac70d5abbe25b0ae748df914e6（dependabot[bot]）
- chore(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp (#32665) 0f206176faf573da63727dd7ddea5a11bfa98792 (dependabot[bot])
- chore(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc (#32664) e26e15829234121ee0c1bad535ad4ba70e8caa65 (dependabot[bot])
- 杂务（deps）：碰撞 go.opentelemetry.io/otel/exporters/otlp/otlptrace (#32663) 23ab1c558484f6e58b28029cdacce7a4938b59e3 (dependabot[bot])
- 杂务（deps）：从 1.44.0 到 1.45.0 的碰撞 go.opentelemetry.io/otel/sdk (#32662) 8303180a5eec17dda46ac1995d65d7d40bf21b98 (dependabot[bot])

---

> 📦 仓库：[helm/helm](https://github.com/helm/helm) · 🏷️ 版本：`v4.3.1` · 📅 发布：2026-10-15 · [查看英文原版 Release](https://github.com/helm/helm/releases/tag/v4.3.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
