---
title: "helm v4.2.4"
project: "helm"
repo: "helm/helm"
tag: "v4.2.4"
version: "v4.2.4"
published: "2026-08-13"
type: "patch"
lang: "zh"
---

# helm v4.2.4

Helm v4.2.4 是一个补丁版本。我们鼓励用户升级以获得最佳体验。

社区不断发展，我们很高兴在那里见到您！

- 加入[Kubernetes Slack](https://kubernetes.slack.com)中的讨论：
  - 提出问题并闲逛
  - 用于讨论 PR、代码和错误
- 参加公共开发者电话会议：星期四，太平洋时间 9:30，通过 [Zoom](https://zoom-lfx.platform.linuxfoundation.org/meeting/91295593969?password=17825db5-c698-44cc-9f00-ef1f61f5d3fb)
- 测试、调试和贡献图表：[ArtifactHub/packages](https://artifacthub.io/packages/search?kind=0)

## 显着变化

- 修复：改进 helm 模板的错误报告 --debug with --show-only- #31185 by @kyokuping
- 修复：从测试 Pod 中的所有容器中获取日志 - #32099 by @SebTardif
- 修复（出处）：检查摘要和encodeRelease中返回的错误 - #32136 by @SebTardif
- 修复重复 IsReachable 调用时的恐慌 - #32184 by @atkrad
- 修复：当 helm 推送到注册表时设置 [pull,push] 范围（使用令牌身份验证） - v4- #31211 by @kimsungmin1
- 修复与服务器端 apply 丢失的冲突重试 - #32088 by @Kajot-dev
- 正确格式化 gzip 压缩包中的额外字段 - #31884 by @ouillie 
- 修复消失的空行 - #32327 by @matheuscscp
- 修复：在升级中将注册表 client 传递给 downloader.Manager - #32400 by @SetagGnaw
- 杂务（deps）：将 google.golang.org/grpc 从 1.80.0 提升到 1.82.1- GO-2026-6061 #32450
- 修复：将 go.opentelemetry.io/otel 更改为 v1.44.0 的 GO-2026-5158-#32521 by @TerryHowe

## 安装和升级

下载头盔 v4.2.4。通用平台二进制文件在这里：

- [MacOS amd64](https://get.helm.sh/helm-v4.2.4-darwin-amd64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.2.4-darwin-amd64.tar.gz.sha256sum) / 6c163d687ca03c3b5c01928e53bbbcf9518278f47ce7a2f249a5a08e8bdaa2bc)
- [MacOS arm64](https://get.helm.sh/helm-v4.2.4-darwin-arm64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.2.4-darwin-arm64.tar.gz.sha256sum) / d747eb4e28bd2727173d15b759fa0a17822291ec09db7ced3d55af290a3661a2)
- [Linux amd64](https://get.helm.sh/helm-v4.2.4-linux-amd64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.2.4-linux-amd64.tar.gz.sha256sum) / c306b46f719b0a4da32d0f78ee21bf90ce8d602f15b22ab753f0674d1670a7f3)
- [Linux 手臂](https://get.helm.sh/helm-v4.2.4-linux-arm.tar.gz) ([校验和](https://get.helm.sh/helm-v4.2.4-linux-arm.tar.gz.sha256sum) / 894e901f7daaf9b458baad7b5c685bfeef49070d7d53f99687bd5846a6c13639)
- [Linux arm64](https://get.helm.sh/helm-v4.2.4-linux-arm64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.2.4-linux-arm64.tar.gz.sha256sum) / 564de2191b881e9f71b5606b25345821ea1682f06ab90499d3ab22b530176da1)
- [Linux i386](https://get.helm.sh/helm-v4.2.4-linux-386.tar.gz) ([校验和](https://get.helm.sh/helm-v4.2.4-linux-386.tar.gz.sha256sum) / 45297aeac0c65173a89e8de832997f952ba5115c2db09b2e3f2c23a601e70583)
- [Linux loong64](https://get.helm.sh/helm-v4.2.4-linux-loong64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.2.4-linux-loong64.tar.gz.sha256sum) / faafbfecc1a06196e650c3ce0c74d5ac32cb1c0c0a855fa76e59dd100cb8d4c4)
- [Linux ppc64le](https://get.helm.sh/helm-v4.2.4-linux-ppc64le.tar.gz) ([校验和](https://get.helm.sh/helm-v4.2.4-linux-ppc64le.tar.gz.sha256sum) / 5c00073e9d493de201384bb7eb19d60615bd7c39db52148473e8ce6da84bc70a)
- [Linux s390x](https://get.helm.sh/helm-v4.2.4-linux-s390x.tar.gz) ([校验和](https://get.helm.sh/helm-v4.2.4-linux-s390x.tar.gz.sha256sum) / 5396a35fca5fa46e5614140363f389ce66f96886c1b25f256d9e3028299422fa)
- [Linux riscv64](https://get.helm.sh/helm-v4.2.4-linux-riscv64.tar.gz) ([校验和](https://get.helm.sh/helm-v4.2.4-linux-riscv64.tar.gz.sha256sum) / d8532a3524ca842887b15ab794377dc9c8ced8f26264c84171b4b0aafff05411)
- [Windows amd64](https://get.helm.sh/helm-v4.2.4-windows-amd64.zip) ([校验和](https://get.helm.sh/helm-v4.2.4-windows-amd64.zip.sha256sum) / e94d83a4706fd82078c98dade2079fa9d9680c1c2bfb93bfc304ee6bc2412a32)
- [Windows arm64](https://get.helm.sh/helm-v4.2.4-windows-arm64.zip) ([校验和](https://get.helm.sh/helm-v4.2.4-windows-arm64.zip.sha256sum) / dbe8b49ea9877abe3d77354a792efb01920da9f65a492fcb8b4fce4e08bbae8f)

此版本是用 `208D D36E D5BB 3745 A167 43A4 C7C6 FBB5 B91C 1155` 签名的，可以在 @scottrigby [keybase 帐户](https://keybase.io/r6by) 中找到。请使用随附的签名通过 `gpg` 验证此版本。

[快速入门指南](https://helm.sh/docs/intro/quickstart/) 将帮助您从那里开始。有关**升级说明**或详细安装说明，请查看[安装指南](https://helm.sh/docs/intro/install/)。您还可以在任何具有 `bash` 的系统上使用[安装脚本](https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4)。

## 下一步是什么
- 4.3.0 和 3.22.0 是计划于 2026 年 9 月 9 日发布的下一个次要版本

## Changelog

- 对 #31211 中构建失败的最小修复。 3900f434fd3ef2b84065dc04508df48f288dba00（斯科特·里格比）
- 修复：将 go.opentelemetry.io/otel 更改为 GO-2026-5158 的 v1.44.0 (#32521) f7c6e8f0f1e0e649e8d03b1535db4f3b8d0c9af2 (Terry Howe)
- 杂务（deps）：将 google.golang.org/grpc 从 1.80.0 提升到 1.82.1 035a2c38e9a75ca0988c8449c0b7257f30d04064 （dependabot[bot]）
- 修复：在升级 f76a5f46a952f731cc1543f348121297c8b3f6cc 时将注册表 client 传递给 downloader.Manager (Gates Wang)
- 应用建议 5a7c6c7c732b04ad6517b452d538da9e18993d67 (Will Noble)
- 正确格式化 gzip 压缩包中的额外字段 22818486ce0fc18d92e01ba39faf65f70ffa8865 (Will Noble)
- 修复与服务器端应用丢失的冲突重试 (#32088) 2c979a17ac6b6d7bfe2d6650b69fa9effe963d4d (Jakub Jaruszewski)
- 拉取请求发现 2bd2c66544634e419ede3cfa18952cce5a5acd08 (kimsungmin1) 的潜在修复
- 修复（注册表）：解决 token-auth 测试中的 golangci-lint 问题 183a5402291c553898b9c404bc17c95c81ea1c6c (kimsm28)
- 杂务：在主 08d8da1aa9080772e57ab5bf5b00b3c13364af00 (kimsm28) 上重新建立基础后，进行 mod 整理
- 修复（注册表）：在令牌身份验证范围测试中使用纯http注册表9655b5aecc0d36142d0620ff5ed762065a997739（kimsm28）
- 更新 pkg/registry/client.go 430dfac3eeab03886f511761e3969f738f760364 (Terry Howe)
- 测试：改进 client_scope_test.go 以避免数据争用和脆弱断言 9569605eccf8318fe25bf78c46c4eb462ce8fc3f (kimsm28)
- 修复 withScopeHint 函数注释 63f2b6809919e5e8e3e04f52064a536a14f1ff9b (kimsm28) 中的拼写错误
- 通过调整 DockerRegistryHost 和身份验证服务器侦听器管理 f7488c0be8c65dd16386c215cac4332900667278 (kimsm28) 修复注册表测试失败
- 修复变量命名 requestUrl -> requestURL 8fe78fbe46eb2db5c75ab1cc89699c750017dca6 (kimsm28)
- 修复拼写错误，删除不必要的代码，修复避免使用 http 处理程序 d0670d2fb2c3426cde4b41927b5e9b8b4370df93 (kimsm28) 中的断言
- 将 suite.Nil, suite.NotNill 更改为更合适的函数(suite.NoError, suite.Error) 804256ef659226f26b2222ccb8f9cf18ef1b1946 (kimsungmin1)
- 更改 client_scope_test.go 以使用 httptest d79bceb807692512461d8007040c41bcd1547041 (kimsungmin1)
- 修复拼写错误 d34fcd9264225a1e6296c4b0ee124dc69f3b3ecc (kimsungmin1)
- 删除自由端口依赖项 9fbd190c30addb4786e4fe930a0fe98bf354116a (kimsungmin1)
- 在许可证头 9275661357afdfe12b8ce561e8103673f16cca8d (kimsungmin1) 中添加换行符
- 修复 helm 推送到使用令牌身份验证 fef91f3e6942a20148542461eaebfb24f2c09584 的注册表时的范围 (kimsungmin1)
- 修复重复 IsReachable 调用 e89ce68bc5fec430bc1e2f0aef1aca6a2e71f795 引起的恐慌 (Mohammad Abdolirad)
- 修复（出处）：检查摘要 ff1ac83bfb1246cdf1b57a4db0042085cc8b265d 中的错误返回（Sebastien Tardif）
- 修复：地址审核反馈 4b4dedb2bdcfac886c124a361a5126e3c5e3c5df (Sebastien Tardif)
- 修复：从测试 Pod 中的所有容器中获取日志 7c8010322b8639cdf7844ac1ae5f8d444db43935 (Sebastien Tardif)
- 杂务：重命名savedErr以清除其特定用途ecc9cd2f1b5b53dadcd12395c032bc5b3ca02937（Jeaeun Kim）
- 杂务：修复 lint f6211ba49bfbf5768ea44be3a1402869a4709b37 (Jeaeun Kim)
- 杂务：为了清楚起见，单独存储错误 3507ea5bfdbad921684ac131896b6968c76e9ca6 (Jeaeun Kim)
- 杂务：使用 `--show-only` 211ffae93d2d741a2dbcd74b4aa2a1bc2fc27d5f 改进 `helm template --debug` 的错误报告 (Jeaeun Kim)
- 地址审核评论 51a9837ba177812c381515886c4f0cd0b7a633e6 (Matheus Pimenta)
- 修复消失的空行 83a8b70ffc1bcf97bb293cf6b35bd3b5093e8c30 (Matheus Pimenta)

**完整 Changelog**：https://github.com/helm/helm/compare/v4.2.3...v4.2.4

---

> 📦 仓库：[helm/helm](https://github.com/helm/helm) · 🏷️ 版本：`v4.2.4` · 📅 发布：2026-08-13 · [查看英文原版 Release](https://github.com/helm/helm/releases/tag/v4.2.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
