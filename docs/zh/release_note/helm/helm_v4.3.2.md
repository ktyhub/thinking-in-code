---
title: "helm v4.3.2"
project: "helm"
repo: "helm/helm"
tag: "v4.3.2"
version: "v4.3.2"
published: "2026-11-13"
type: "patch"
lang: "zh"
---

# helm v4.3.2

Helm v4.3.2 是一个补丁版本。我们鼓励用户升级以获得最佳体验。

社区不断发展，我们很高兴在那里见到您！

- 加入[Kubernetes Slack](https://kubernetes.slack.com)中的讨论：
  - 提出问题并闲逛
  - 用于讨论 PR、代码和错误
- 参加公共开发者电话会议：星期四，太平洋时间 9:30，通过 [Zoom](https://zoom-lfx.platform.linuxfoundation.org/meeting/91295593969?password=17825db5-c698-44cc-9f00-ef1f61f5d3fb)
- 测试、调试和贡献图表：[ArtifactHub/packages](https://artifacthub.io/packages/search?kind=0)

## 显着变化

- 文档（cmd）：正确的列表 --max 和 HELM_COLOR 帮助文本 #32807 by @ZainnQureshii
- 修复（注册表）：始终返回一个传输Helm可以通过@ump45nose配置#32684

## 安装和升级

下载头盔 v4.3.2。通用平台二进制文件在这里：

- [MacOS amd64](https://get.helm.sh/helm-v4.3.2-darwin-amd64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.2-darwin-amd64.tar.gz.sha256sum) / 9e0068e9ae18c441d27388190ee7f53ae65eba44bfe910b40bdac44c4b51fa71)
- [MacOS arm64](https://get.helm.sh/helm-v4.3.2-darwin-arm64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.2-darwin-arm64.tar.gz.sha256sum) / 6f3421de3a8cc2ac578c8cfb33b8edde290dde2871bc1bab12e24f2e5caeaa90)
- [Linux amd64](https://get.helm.sh/helm-v4.3.2-linux-amd64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.2-linux-amd64.tar.gz.sha256sum) / d1c0278d46beab79582d7e50f5b3dc206944ba8e577cde618513fd07daa53983)
- [Linux 手臂](https://get.helm.sh/helm-v4.3.2-linux-arm.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.2-linux-arm.tar.gz.sha256sum) / 4af438abdb38723ab63928dead4740a41241daa46b591d5ab12a53f6828099d7)
- [Linux arm64](https://get.helm.sh/helm-v4.3.2-linux-arm64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.2-linux-arm64.tar.gz.sha256sum) / df31cb61680ef728f82c770e5280dd565617bee6b039d37e85c677288be4bbb0)
- [Linux i386](https://get.helm.sh/helm-v4.3.2-linux-386.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.2-linux-386.tar.gz.sha256sum) / f74735128cadfa176406849dbff9d105e92682e1c114e4b67adceaae64442d7a)
- [Linux loong64](https://get.helm.sh/helm-v4.3.2-linux-loong64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.2-linux-loong64.tar.gz.sha256sum) / b06bf55e4fcedac013a4ef50b419d9839497389591d072be074d78938f499caf)
- [Linux ppc64le](https://get.helm.sh/helm-v4.3.2-linux-ppc64le.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.2-linux-ppc64le.tar.gz.sha256sum) / c397e126ed115555316bf34ec149b0ea1f99303f4b35201d5c6f070895eaaf09)
- [Linux s390x](https://get.helm.sh/helm-v4.3.2-linux-s390x.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.2-linux-s390x.tar.gz.sha256sum) / 076d3df25b6864a9d26a670fce7eff2cb4fe9e4f312028c56a6ade261ba74050)
- [Linux riscv64](https://get.helm.sh/helm-v4.3.2-linux-riscv64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.3.2-linux-riscv64.tar.gz.sha256sum) / 1ee7b7f63d6351810ee05b33ebf8c6824fecee3b7edb49a75a96755b91ab5e15)
- [Windows amd64](https://get.helm.sh/helm-v4.3.2-windows-amd64.zip) ([校验和](https://get.helm.sh/helm-v4.3.2-windows-amd64.zip.sha256sum) / 77c5c782aaef1abbfafe75b88412d2b6df8e4a36d14522273397f0d02c6ecc29)
- [Windows arm64](https://get.helm.sh/helm-v4.3.2-windows-arm64.zip) ([校验和](https://get.helm.sh/helm-v4.3.2-windows-arm64.zip.sha256sum) / eedb67c7838fdc266b4f33650ccab88052e9e7ec476ea180d7f0728381a26b09)

此版本已与 `208D D36E D5BB 3745 A167 43A4 C7C6 FBB5 B91C 1155` 签署，可在 @scottrigby [keybase 帐户](https://keybase.io/r6by) 中找到。请使用随附的签名通过 `gpg` 验证此版本。

[快速入门指南](https://helm.sh/docs/intro/quickstart/) 将帮助您从那里开始。如需**升级说明**或详细安装说明，请查看[安装指南](https://helm.sh/docs/intro/install/)。您还可以在任何具有 `bash` 的系统上使用[安装脚本](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4)。

## 下一步是什么

- 4.3.2 是计划于 2026 年 11 月 11 日发布的下一个补丁程序
- 4.4.0 是计划于 2027 年 1 月 13 日发布的下一个次要版本。将不再有 Helm 3 次要版本（请参阅 https://helm.sh/blog/helm-v3-end-of-life）

## Changelog

- 修复（deps）：将 golang.org/x/net 修改为 v0.62.0 (#32876) 8346aaa55e7161f7c547212d0a87f01367976727 (Sean Schneeweiss)
- 杂务（deps）：碰撞 github.com/distribution/distribution/v3 (#32698) 8c92fcacf2865996287118d742783bf9335c8fe0 (dependabot[bot])
- 修复（deps）：将 github.com/klauspost/compress 修改为 v1.20.3 (#32878) 214f6f6be7ae5b1d1b32335f3c7f2c1749caad95 (Sean Schneeweiss)
- 杂务（deps）：通过 7 个更新将 k8s-io 组跨越 1 个目录 90d48fc1d2ffef1d9b220cb2811bc6bbead73a66（dependabot[bot]）
- 修复（注册表）：始终返回 Helm 可以配置的传输 (#32684) 961bddf9d52f0b8586f751ee130322204e708907 (ump45nose)
- 文档（cmd）：正确的列表 --max 和 HELM_COLOR 帮助文本 (#32807) ddb8be775170081fe6ad1c39a6e29cf64e61ef80 (Zain Qureshi)

---

> 📦 仓库：[helm/helm](https://github.com/helm/helm) · 🏷️ 版本：`v4.3.2` · 📅 发布：2026-11-13 · [查看英文原版 Release](https://github.com/helm/helm/releases/tag/v4.3.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
