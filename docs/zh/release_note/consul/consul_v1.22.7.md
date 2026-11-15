---
title: "consul v1.22.7"
project: "consul"
repo: "hashicorp/consul"
tag: "v1.22.7"
version: "v1.22.7"
published: "2026-04-25"
type: "patch"
lang: "zh"
---

# consul v1.22.7

## 1.22.7（2026 年 4 月 21 日）

安全：

* 安全性：更新 google.golang.org/grpc 以修复 CVE-2026-33186 [[GH-23379](https://github.com/hashicorp/consul/issues/23379)]
* 安全性：将 go.opentelemetry.io/otel 升级到 1.42.0 以修复 CVE-2026-24051（macOS 上的路径劫持/Untrusted 搜索路径）。 [[GH-23387](https://github.com/hashicorp/consul/issues/23387)]
* test-sds-server：在集成测试模块中将 github.com/hashicorp/consul 更改为 v1.22.5，以与 CVE-2026-2808 固定版本保持一致。 [[GH-23437](https://github.com/hashicorp/consul/issues/23437)]
* ui：**（仅限企业）** 向后移植汇总更新至 2.80.0 版本/1.21.x 以解决 CVE-2026-27606 (SECVULN-38912)。 

改进：

* acl：将 TokenNameFormat 字段添加到 auth-method 并解析相同的令牌名称 [[GH-23444](https://github.com/hashicorp/consul/issues/23444)]
* discovery-chain：从编译的发现链散列中删除 hashstruct_v2（[github.com/mitchellh/hashstruct/v2]）的使用，并将其替换为显式自定义散列实现。[[GH-23393](https://github.com/hashicorp/consul/issues/23393)]
* ui：删除了与consul文档网站相关的代码，因为它是在单独的内部存储库中维护的。 [[GH-23398](https://github.com/hashicorp/consul/issues/23398)]

错误修复：

* api-gateway：修复 HTTPRoute PathPrefix 路由，以在未配置 `replacePrefixMatch` 时保留原始请求路径 [[GH-23390](https://github.com/hashicorp/consul/issues/23390)]

---

> 📦 仓库：[hashicorp/consul](https://github.com/hashicorp/consul) · 🏷️ 版本：`v1.22.7` · 📅 发布：2026-04-25 · [查看英文原版 Release](https://github.com/hashicorp/consul/releases/tag/v1.22.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
