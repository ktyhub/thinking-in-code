---
title: "consul v2.0.0"
project: "consul"
repo: "hashicorp/consul"
tag: "v2.0.0"
version: "v2.0.0"
published: "2026-05-24"
type: "major"
lang: "zh"
---

# consul v2.0.0

## 2.0.0 (May 22, 2026)

安全：

* 连接：将 Envoy 版本升级到 1.37.2 及更新版本 [[GH-23469](https://github.com/hashicorp/consul/pull/23469)]
* go: 升级go版本至1.26 [[GH-23493](https://github.com/hashicorp/consul/pull/23493)]
* 代理：增加默认 HTTP 服务器超时，以防止破坏长轮询阻塞查询。 `read_timeout` 和 `write_timeout` 现在设置为 15 分钟（从 30 秒增加），而 `read_header_timeout`（10 秒）和 `idle_timeout`（120 秒）仍然提供针对 Slowloris 攻击的保护。所有超时仍然可以通过 `http_config` 块进行配置。 [[GH-23267](https://github.com/hashicorp/consul/issues/23267)]
* api-gateway, terminating-gateway: Apply HTTP request path normalization on api-gateway and terminating-gateway HTTP listeners to prevent L7 intention RBAC bypass via non-normalized paths (CVE-2024-10005). [[GH-23534](https://github.com/hashicorp/consul/issues/23534)]
* docker: update ubi base image to `ubi9-minimal:9.7`. [[GH-23553](https://github.com/hashicorp/consul/issues/23553)]
* docker：将容器镜像中的 Alpine 边缘的 `curl` 升级为 >= 8.20.0 以解决
[CVE-2026-6429]（https://www.cve.org/CVERecord?id=CVE-2026-6429），
[CVE-2026-4873](https://www.cve.org/CVERecord?id=CVE-2026-4873),
[CVE-2026-5773]（https://www.cve.org/CVERecord?id=CVE-2026-5773），
[CVE-2026-6253]（https://www.cve.org/CVERecord?id=CVE-2026-6253），
[CVE-2026-6276](https://www.cve.org/CVERecord?id=CVE-2026-6276),
[CVE-2026-7168](https://www.cve.org/CVERecord?id=CVE-2026-7168),
[CVE-2026-5545](https://www.cve.org/CVERecord?id=CVE-2026-5545)。
Alpine 3.23 stable 尚未搭载补丁版本。 [[GH-23750](https://github.com/hashicorp/consul/issues/23750)]
* docker：将 UBI 基础映像更新为 9.8 以修复 [[CVE_2026-2100](https://access.redhat.com/security/cve/cve-2026-2100)] [[GH-23588](https://github.com/hashicorp/consul/issues/23588)]

特点：

* **（仅限企业）** 更新到 go-licensing/v4 和 go-census/v3 以适应 PAO 的新许可证。
* Global Rate Limiter: **(Enterprise Only)** a new "rate-limit" config entry kind that enables dynamic, cluster-wide RPC rate limiting stored in Raft and automatically replicated to all servers. This allows operators to apply or adjust global rate limits at runtime without restarting Consul servers — a critical capability for emergency scenarios where the cluster is under excessive load.
* api-gateway: Added SDS certificate support for API Gateway listeners, including listener-level default TLS certificates and HTTP/TCP route service TLS SDS overrides. Service overrides inherit the listener SDS cluster when omitted, and gateway validation/xDS generation now rejects conflicting override mappings to keep certificate selection deterministic. [[GH-23354](https://github.com/hashicorp/consul/pull/23354)]
* api-gateway: add support for gateway-level default upstream limits and route service-level limit overrides for MaxConnections, MaxPendingRequests, and MaxConcurrentRequests. [[GH-23396](https://github.com/hashicorp/consul/pull/23396)]
* api：添加了新的 API“/v1/internal/rpc/methods”，列出了所有 RPC 方法名称。 Requires an operator:read ACL token.当用户想要配置排除特定 RPC 端点的速率限制时，这非常有用。 [[GH-23329](https://github.com/hashicorp/consul/pull/23329)]
* ca: **(Enterprise Only)** Added new Connect CA provider for Cyberark WIM (connect.ca_provider = "pan-distributed-issuer"), enabling Consul to issue certificates through Cyberark WIM.
* 服务器：**（仅限企业）** 添加稳定的集群身份和领导者控制的全局注册表同步以进行服务摘要发布。
* 遥测：**（仅限企业）** 用于自我管理 Consul 的产品遥测，具有匿名、选择加入的使用情况报告。
* mesh：**（仅限企业）** 在Consul中引入对多端口（命名端口）服务的支持，包括使用端口名称指定和路由流量的能力，以及检索特定服务端口的虚拟IP的能力。它还强制要求某些高级多端口功能仅在 Consul Enterprise 中可用，并包括用于集群命名和 ALPN 协议生成的新实用程序功能。

改进：

* 代理：**（仅限企业）** 为企业使用指标添加最终一致的后台缓存，将 GET /v1/operator/usage 延迟从 O(P*N*K) 减少到 O(1)，并通过手表驱动的维护者 Goroutine 降低高频 scraping 期间的 CPU/内存压力。
* mesh：**（仅限企业）** 在Consul中引入对多端口（命名端口）服务的支持，包括使用端口名称指定和路由流量的能力，以及检索特定服务端口的虚拟IP的能力。它还强制要求某些高级多端口功能仅在 Consul Enterprise 中可用，并包括用于集群命名和 ALPN 协议生成的新实用程序功能。
* terminate-gateway：更新了集群上游 tls 以使用 sds 而不是静态证书，允许动态证书更新而无需重新启动终止网关。 [[GH-23288](https://github.com/hashicorp/consul/pull/23288)]
* 遥测：使用 Prometheus 指标（标有数据中心/分区/命名空间）添加证书过期监控、具有可配置严重性阈值的结构化日志记录，以及增强的 Connect CA API 以包含根证书和中间证书的 NotAfter 字段。 [[GH-23147](https://github.com/hashicorp/consul/pull/23147)]
* 相关内容：将 `github.com/hashicorp/vault/sdk` 从 v0.7.0 升级到 v0.25.1，将 `github.com/hashicorp/vault/api` 从 v1.12.2 升级到 v1.16.0。 [[GH-23574](https://github.com/hashicorp/consul/issues/23574)]
* test-integ：集成测试模块中升级testcontainers-go（v0.22.0->v0.40.0）和docker/docker（v24.0.5->v28.5.1）。这将删除 opencontainers/runc 作为测试框架的 Go 依赖项。这些只是测试基础设施依赖项，对 consul 二进制文件或任何 consul 部署没有影响。 [[GH-23573](https://github.com/hashicorp/consul/issues/23573)]
* xds：将 `Consecutive5xx`、`ConsecutiveGatewayFailure` 和 `EnforcingConsecutiveGatewayFailure` 字段添加到 `PassiveHealthCheck`，允许操作员为上游默认值上的 5xx 响应和网关故障 (502/503/504) 配置 Envoy 异常值检测阈值。

错误修复：

* 审核日志记录：**（仅限企业）** 修复了为auditReq 主体传递obj 数组时出现的JSON 解组错误。
* cli：增强了 `consul config write` 命令中的错误消息，以便在由于网关或路由器的引用而无法修改配置条目时提供可操作的指导。 [[GH-22921](https://github.com/hashicorp/consul/pull/22921)]
* xds：修复了 XDS 包，以便在对等互连时为 API 网关生成正确的端点和集群配置，并更新了 API 网关更新处理程序以将网状网关配置传播到其上游。 [[GH-23454](https://github.com/hashicorp/consul/pull/23454)]
* XDS：修复了 AWS EKS 上远程模式下的网状网关问题，因为 DNS 主机名分配给 AWS NLB 而不是 IP，并且 Envoy 的 EDS 端点验证期望地址是 IP。现在，对于具有基于主机名的网关的非对等远程网状网关目标，将跳过 EDS 负载分配，从而保持 CDS/EDS 同步。 [[GH-23543](https://github.com/hashicorp/consul/issues/23543)]
* api网关：在API网关发现链综合期间解析路由的服务子集。 [[GH-23294](https://github.com/hashicorp/consul/issues/23294)]
* ui：修复损坏的文档链接 [[GH-23578](https://github.com/hashicorp/consul/issues/23578)]

---

> 📦 仓库：[hashicorp/consul](https://github.com/hashicorp/consul) · 🏷️ 版本：`v2.0.0` · 📅 发布：2026-05-24 · [查看英文原版 Release](https://github.com/hashicorp/consul/releases/tag/v2.0.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
