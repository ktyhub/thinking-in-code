---
title: "consul v2.0.2"
project: "consul"
repo: "hashicorp/consul"
tag: "v2.0.2"
version: "v2.0.2"
published: "2026-07-08"
type: "patch"
lang: "zh"
---

# consul v2.0.2

## 2.0.2 (July 8, 2026)
安全：

* 将 alpine 基础镜像版本升级到 3.24 以解决 [CVE-2026-41989]、[ALPINE-CVE-2026-2100]。 [[GH-23711](https://github.com/hashicorp/consul/issues/23711)]
* 依赖：升级Serf和Memberlist以使用最新版本。 [[GH-23704](https://github.com/hashicorp/consul/issues/23704)]
* xds：将 L4 意图 (RBAC) 过滤器或 mTLS 传输套接字注入入站公共侦听器时返回错误，因此如果没有意图强制或 mTLS，则不会为侦听器提供服务。 [[GH-23686](https://github.com/hashicorp/consul/issues/23686)]

特点：

* config-entry(api-gateway)：（仅限企业）将 ExtAuthzFilter 添加到 HTTPRoute Filters 并将网关范围的 ExtAuthz 切换到 api-gateway 配置条目 [[GH-23703](https://github.com/hashicorp/consul/issues/23703)]
* 配置条目：（仅限企业）向 api 网关和连接代理添加外部处理器 (ext_proc) Envoy 扩展支持 [[GH-23705](https://github.com/hashicorp/consul/issues/23705)]

改进：

* ci：将使用已弃用的 Node 20 运行时的 GitHub 操作升级到 Node 24，并在 setup-go 之后恢复 GOTOOLCHAIN=auto，以便向后兼容性和集成测试通道解析正确的 Go 工具链。 [[GH-23687](https://github.com/hashicorp/consul/issues/23687)]
* 连接：将对 nomad 和 Vault 版本的支持更新为 v2.0.3 [[GH-23624](https://github.com/hashicorp/consul/issues/23624)]
* deps：将 `armon/go-metrics` 迁移到 `hashicorp/go-metrics` 并更新所有模块之间的 Go 依赖关系 [[GH-23635](https://github.com/hashicorp/consul/issues/23635)]

错误修复：

* xds：仅在设置了 CertFile 和 KeyFile 时才发出 client 证书 SDS 块。 [[GH-23679](https://github.com/hashicorp/consul/issues/23679)]

已知问题：

* consul-k8s：在使用 consul OSS 版本的设置中，consul-k8s-connect-injector 由于缺少 CRD RouteExtProc 而无法启动。发布了新版本（2.0.2-oss）consul helm Chart来解决这个问题。使用图表版本“2.0.2-oss”用于此版本 v2.0.2 的 consul 的 OSS 分发。
* consul（仅限企业）：由于 (2.0.0) API-GW 通过附加到其路由匹配目的地中的服务的发现链配置（解析器、路由器、拆分器）了解流量路由。 API 网关根据主机名了解侦听器，并为这些侦听器的路由中指向的服务编译总体流量路由规则。当目标服务在其解析器配置中定义了具有不同命名空间/分区中的目标的故障转移/重定向/子集时，出现了错误。此功能发布后，api 网关的所有可路由目标的整体发现链的协调会遇到问题，因为缺少上述用例中协议的合成默认值，并导致 xds 渲染问题。

---

> 📦 仓库：[hashicorp/consul](https://github.com/hashicorp/consul) · 🏷️ 版本：`v2.0.2` · 📅 发布：2026-07-08 · [查看英文原版 Release](https://github.com/hashicorp/consul/releases/tag/v2.0.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
