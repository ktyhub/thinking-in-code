---
title: "consul v1.22.6"
project: "consul"
repo: "hashicorp/consul"
tag: "v1.22.6"
version: "v1.22.6"
published: "2026-03-26"
type: "patch"
lang: "zh"
---

# consul v1.22.6

## 1.22.6（2026 年 3 月 23 日）

安全：

* 安全性：将 Envoy 版本升级到 1.35.9 和 1.34.13 [[GH-23372](https://github.com/hashicorp/consul/pull/23372)]
* 安全性：更新 google.golang.org/grpc 以修复 CVE-2026-33186 [[GH-23379](https://github.com/hashicorp/consul/pull/23379)]
* 安全性：升级Go版本至1.25.8 [[GH-23322](https://github.com/hashicorp/consul/pull/23322)]
* 安全性：增加 golang.org/x/* 依赖项以与 consul-enterprise 保持一致并解决安全漏洞。 [[GH-23322](https://github.com/hashicorp/consul/pull/23322)]

改进：

* api-gateway：添加支持以禁用 HTTPRoute 后端服务中权重为 0 的流量，从而允许从流量中排除显式零权重后端。 [[GH-23216](https://github.com/hashicorp/consul/pull/23216)]
* ui：通过为 crypto.randomUUID 启用 Ember Data 的 UUID polyfill，修复 Consul UI 以在非安全环境中工作。 [[GH-23341](https://github.com/hashicorp/consul/pull/23341)]
* ui：修复了 Consul UI 服务页面导航，确保路由转换在 Ember 升级后触发预期的模型挂钩行为。 [[GH-23271](https://github.com/hashicorp/consul/pull/23271)]
* ui：用 AppSideNav 替换已弃用的 SideNav 组件，以改进导航结构。 [[GH-23289](https://github.com/hashicorp/consul/pull/23289)]

---

> 📦 仓库：[hashicorp/consul](https://github.com/hashicorp/consul) · 🏷️ 版本：`v1.22.6` · 📅 发布：2026-03-26 · [查看英文原版 Release](https://github.com/hashicorp/consul/releases/tag/v1.22.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
