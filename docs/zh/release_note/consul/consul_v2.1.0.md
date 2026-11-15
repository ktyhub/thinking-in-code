---
title: "consul v2.1.0"
project: "consul"
repo: "hashicorp/consul"
tag: "v2.1.0"
version: "v2.1.0"
published: "2026-10-22"
type: "minor"
lang: "zh"
---

# consul v2.1.0

## 2.1.0（2026 年 10 月 21 日）
重大变更：

* agent: **(Enterprise only)** Agent HTTP API request bodies are now limited to 512 KiB by default, including chunked requests and requests with an unsupported method, and oversized requests return HTTP 413 before the body is read in full. Very large `/v1/config` writes that previously succeeded can now fail.如果需要，可以使用新的 `limits.http_max_request_body_size` 设置提高限制。
* agent: **(Enterprise only)** Resource API (`/api/...`) request bodies are now subject to the same `limits.http_max_request_body_size` limit (512 KiB by default), and oversized requests return HTTP 413.
* agent: **(Enterprise only)** `GET /v1/agent/connect/ca/leaf/:service` now requires `service:write` on the requested service for every request, including requests served from the agent's cached leaf certificate. Requests with no token or a token without that permission now receive HTTP 403 instead of the cached certificate. Callers must present a token with `service:write` for the service.
* catalog: **(Enterprise only)** `Catalog.Register` now requires write permission on the node or service of an existing health check when updating it.之前在没有该权限的情况下进行更新检查的令牌现在会收到权限被拒绝的错误。
* cli: Migrated the `consul connect redirect-traffic` command from `iptables`/`ip6tables` to `nftables` (`nft`). The command now uses the `sdk/nftables` package, which applies all IPv4 and IPv6 rules atomically in a single pass via the `nftables` `inet` address family, instead of separate `iptables` and `ip6tables` invocations. [[GH-23785](https://github.com/hashicorp/consul/issues/23785)]
* cli: Transparent proxy exclusions are now validated before rules are applied: user IDs must be numeric and outbound exclusions must be IP addresses or CIDRs. `iptables` previously also accepted user names, UID ranges, and host names. [[GH-23785](https://github.com/hashicorp/consul/issues/23785)]
* cli: `consul connect redirect-traffic` does not remove `iptables`/`ip6tables` rules created by earlier Consul versions. This only matters when upgrading an existing host or VM in place. Before running the new command on an existing host or VM, remove any Consul-managed `iptables` rules first (see the transparent proxy upgrade guide for a reference cleanup script).保留两个规则集可能会导致双重 NAT 或不一致的流量重定向。 [[GH-23785](https://github.com/hashicorp/consul/issues/23785)]
* docker: The official Consul container images now include `nftables` instead of `iptables`. Scripts that run `iptables` inside the Consul image must be updated. [[GH-23785](https://github.com/hashicorp/consul/issues/23785)]
* sdk: Replaced the `iptables` package with a new `nftables` package for transparent proxy traffic redirection. Traffic redirection now requires the `nft` binary and a Linux kernel with stateful NAT support in `nftables` `inet` family chains, available upstream starting with Linux kernel version 5.2 (some distributions backport this support onto an earlier nominal kernel version, for example RHEL 8+, kernel 4.18+, and its derivatives). There is no automatic fallback to `iptables`/`ip6tables`, so hosts without this kernel support will fail to set up transparent proxy redirection. [[GH-23785](https://github.com/hashicorp/consul/issues/23785)]
*功能门：实验功能`api-gateway-upstream-routing`背后的Gate API网关HTTPRoute上游路由组合（PR＃23294）。禁用时（默认），旧版 HTTPRoute-to-router 形状将被准确保留。当操作员在完全数据中心升级后启用时，服务路由器规则由 HTTPRoute 匹配组成，解析器子集定义被保留，并且发现链监视使用正确的 HTTP 协议覆盖。当有效门值发生变化时，现有无代理 API 网关代理状态会自动重建。

安全：

* 升级go版本至1.26.10以解决安全漏洞。 [[GH-24067](https://github.com/hashicorp/consul/issues/24067)]
* deps：将`github.com/hashicorp/go-discover`升级到v1.5.0，删除对存档的`github.com/hashicorp/vic`模块的依赖。这还将 `github.com/vmware/govmomi` 升级到 v0.55.1，并添加了用于云自动加入的 `srv` 提供程序。 [[GH-24021](https://github.com/hashicorp/consul/issues/24021)]
* 安全性：**（仅限企业）** 从 `test-integ` 故障注入测试中删除 `github.com/hashicorp/consul` 根模块依赖项，以解决 [CVE-2026-15972](https://nvd.nist.gov/vuln/detail/CVE-2026-15972) 和 [CVE-2026-88021](https://nvd.nist.gov/vuln/detail/CVE-2026-88021)。
* 安全性：从 Envoy 集成测试 SDS 服务器、`consul-container` 和 `test-integ` 测试模块以及 `proto-gen-rpc-glue` e2e 固定装置中删除 `github.com/hashicorp/consul` 根模块依赖项，以解决 [CVE-2026-15972](https://nvd.nist.gov/vuln/detail/CVE-2026-15972)。 [[GH-24043](https://github.com/hashicorp/consul/issues/24043)]
* deps：将github.com/hashicorp/raft-wal升级到v0.5.0（带有raft v1.8.0、serf v0.11.0、memberlist v0.7.0和go-metrics v0.7.0），删除对github.com/coreos/etcd的依赖。 [[GH-23985](https://github.com/hashicorp/consul/issues/23985)]
* deps：将 golang.org/x/net 升级到 v0.60.0 以处理 GO-2026-6610、GO-2026-6611、GO-2026-6603、GO-2026-6617 和 GO-2026-6612。 [[GH-23994](https://github.com/hashicorp/consul/issues/23994)]
* docker：构建基于 Alpine 的容器镜像时运行 `apk upgrade`，以便基础镜像包（例如 sqlite 和 jq）保持最新。 [[GH-23964](https://github.com/hashicorp/consul/issues/23964)]
* oauth：**（仅限企业）** 在 OAuth 密钥轮换期间合并 JWKS 密钥集时，避免未经检查的大小添加。
* 安全性：升级 github.com/klauspost/compress 至 v1.18.7、go.mongodb.org/mongo-driver 至 v1.17.10、github.com/moby/go-archive 至 v0.3.0 和 github.com/go-openapi/swag 至 v0.27.1 以解决CVE-2026-63209、CVE-2026-88031、CVE-2026-2303、CVE-2026-17106 和 CVE-2026-85280。 [[GH-23964](https://github.com/hashicorp/consul/issues/23964)]
* ui：将 Content-Security-Policy 标头添加到 Consul UI HTTP 响应中，以减轻 XSS 和数据注入攻击。 [[GH-23971](https://github.com/hashicorp/consul/issues/23971)]
* ui：将摩根的较新分辨率固定到 1.12.1 以地址 GHSA-9f6g-j8ch-79g4 [[GH-23952](https://github.com/hashicorp/consul/issues/23952)]
* 添加了去抖行为，以强制执行昂贵的联邦状态反熵同步操作之间的最小间隔。 [[GH-23196](https://github.com/hashicorp/consul/issues/23196)]
* 更新 `brace-expansion` 以地址 [GHSA-rgw5-rvv9-x895](https://github.com/advisories/GHSA-rgw5-rvv9-x895)（通过无界中间数组进行 DoS）。 [[GH-23786](https://github.com/hashicorp/consul/issues/23786)]
* 更新 `fast-uri` 以地址 [GHSA-7p8r-x3mc-p8w7](https://github.com/advisories/GHSA-7p8r-x3mc-p8w7)（通过反斜杠权限引入器造成主机混乱）。 [[GH-23786](https://github.com/hashicorp/consul/issues/23786)]
* 更新 `socket.io-parser` 以解决 [CVE-2026-69185](https://github.com/advisories/GHSA-2m8v-j782-fhvr)（零附件内存耗尽）。 [[GH-23786](https://github.com/hashicorp/consul/issues/23786)]

特点：
* acl：为通过 `oidc` 身份验证方法创建的令牌添加 OIDC RP 启动的 IdP 注销：`consul logout` 打印身份提供商的注销 URL 供用户打开（或使用新的 `-open-browser` 标志或 `CONSUL_LOGOUT_OPEN_BROWSER` 环境变量在默认浏览器中打开它），并且 Web UI 在注销时打开它，终止 IdP 会话。当 IdP 在其 OIDC 发现文档中通告 `end_session_endpoint` 时，或者当为不通告的提供商使用新的 `OIDCLogoutURL` 身份验证方法设置显式配置注销端点时，会自动激活。 [[GH-23739](https://github.com/hashicorp/consul/issues/23739)]
* 代理：**（仅限企业）** 将内联 `ai` 块添加到服务定义中，让工作负载通过配置文件和 HTTP API 在单个注册中声明其 AI 角色（`inference-model`、`mcp-server` 或 `ai-agent`）和特定于角色的配置。 [[GH-13032](https://github.com/hashicorp/consul/issues/13032)]
* api-网关：添加 `http2` 和 `grpc` 作为有效的 API 网关侦听器协议，启用从 client 到后端的端到端 HTTP/2 和 gRPC。此前仅接受`http`和`tcp`；网关会在上游跃点上将 gRPC/HTTP2 流量静默降级为 HTTP/1.1。新协议呈现正确的下游 HTTP 连接管理器（HTTP/2 编解码器、`h2,http/1.1` ALPN）并将上游集群与 HTTP/2 对齐，从而缩小与 Ingress Gateway 的奇偶校验差距。 [[GH-23784](https://github.com/hashicorp/consul/issues/23784)]
* api-gateway：自动注册通过 API 网关公开的服务的 DNS，可在 `<service>.api-gateway.consul` 解析。填充 API 网关的 `gateway-services` 目录映射，并将 DNS SAN 添加到 API 网关连接叶证书，使 API 网关与 Ingress 网关同等。该功能具有版本控制功能，并在所有服务器升级后自动回填预先存在的网关。 [[GH-23647](https://github.com/hashicorp/consul/issues/23647)]
* api-网关：支持零接触下游 TLS 终止。当在没有内联/文件系统/SDS 证书的 `api-gateway` 配置条目上设置 `TLS { Enabled = true }` 时，网关使用其 Connect CA 叶证书（使用 `*.api-gateway.consul` DNS SAN）终止下游 TLS。显式配置的证书继续优先，并与叶默认链一起用作 SNI 覆盖。 [[GH-23647](https://github.com/hashicorp/consul/issues/23647)]
* api-网关：将 `PassiveHealthCheck` 添加到网关级默认上游限制并覆盖路由服务级别限制，因此可以为通过 API 网关路由的服务配置被动运行状况检查（Envoy 异常值检测）。 [[GH-23783](https://github.com/hashicorp/consul/issues/23783)]
* cli：**（仅限企业）** `consul connect envoy -gateway=inference` 与 Envoy 一起启动策略处理器，并为推理网关强制执行最低 Envoy 版本。 ext_proc 套接字是根据代理实例派生的； `-ext-proc-socket-dir` 覆盖其目录（默认 `/var/run/consul`）。
* 连接：**（仅限企业）** 为具有 `ai-agent` 或 `mcp-server` 的 `ai.role` 的服务添加了代理管理的 OAuth client 生命周期，包括使用 IBM Security verify 进行动态 client 注册、密钥轮换、JWKS 发布以及将 OAuth client 凭证 SDS 交付到 `ai-agent` Envoy sidecar。
* 连接：**（仅限企业）** 以 AES-256-GCM 信封形式提供 OAuth sidecar 凭据。内容加密密钥保存在 KV 中，并通过 WorkloadKeyService.FetchKey 提供服务，因此 consul-obo-outbound 可以解密，而不会成为 SDS client。
* connect: **（仅限企业）** 将 consul-obo-outbound 和 consul-obo-inbound ext_proc 过滤器连接到 connect-proxy xDS 以进行跳跃绑定代表令牌交换。
* 连接：**（仅限企业）** 使用 `private_key_jwt` 通过 IBM Security verify 注册 `ai-agent` 或 `mcp-server` 的 `ai.role` 服务，在 KV 中保留 DCR/JWKS，并将 client 凭证作为 `ai-agent` 工作负载的 SDS GenericSecret JSON 传递给 Envoy。集群 IAM 是采用 `EnableServiceDCR=true` 的 OIDC ACL 身份验证方法（代理 `oauth.iam` HCL 被拒绝）。
* 连接：将 `ecdh_curves` 添加到 `mesh` 配置条目 (`MeshDirectionalTLSConfig`) 并将 `tls_ecdh_curves` 添加到代理 TLS 配置 (`TLSProtocolConfig`)，以支持为 sidecar mTLS 和代理 RPC/HTTPS/gRPC 配置允许的 ECDH/KEM 曲线，当 `tls_min_version` 设置为时，具有自动混合后量子 `X25519MLKEM768` 曲线注入`TLSv1_3`。 [[GH-23884](https://github.com/hashicorp/consul/issues/23884)]
* feature-gates：添加 Raft 支持的动态功能门框架（第 1 阶段）。新的 `feature_gates { bootstrap = { ... } }` 服务器配置块为第一个 Raft 策略提供种子。领导者不断地将所需的策略、最低版本资格和注册表默认值调整为已提交的已解决状态。每个服务器都运行一个仅从已提交的 FSM 状态填充的原子缓存；代理使用索引解析快照并失败关闭，直到交付第一代。新运算符 CLI 命令 `consul operator feature list`、`get` 和 `set` 提供 CAS 安全、ACL 保护的功能门检查和控制。
* 运算符：添加 `GET /v1/operator/features`、`GET /v1/operator/feature/:name` 和 `PUT /v1/operator/feature/:name` HTTP 端点，用于读取和更新功能门状态。读取需要`operator:read`；写入需要`operator:write`。所有读取都具有阻塞查询能力。 [[GH-23791](https://github.com/hashicorp/consul/issues/23791)]
* 推理网关：**（仅限企业）** 通过终止网关路由选择加入的外部推理模型。标记有终止网关出口的模型是从目录中发现的，通过网状发现链进行解析，并在健康的终止网关副本之间进行负载平衡，并在没有有效传输可用时具有功能池优先级和故障关闭行为。包含外部模型的能力池被拒绝，当其两个模型呈现相同的端点地址或无法准确表示其模型权重时，其能力路由返回503。
* 推理网关：**（仅限企业）** 添加 ZZPH100​​ZZ 服务类型和配置条目。网关终止入站网状 mTLS、强制执行意图，并通过 ext_proc 过滤器将 PII 和路由策略应用到协同定位的策略处理器。模型上游是在 `ai.role = "inference-model"` 中注册的服务，其意图允许并且可通过网格（启用连接或在终止网关后面）访问。网关通过 mTLS 连接到它们，并按功能选择它们，按优先级在提供商之间进行故障转移。
* 遥测：**（仅限企业）** 添加了 ACL 身份验证方法计数（OIDC、Kubernetes、JWT）和审核日志记录配置的服务器端产品使用指标。
* 遥测：**（仅限企业）** 添加了网格网关模式计数的服务器端产品使用指标：`consul.usage.mesh_gateway_remote.count` 和 `consul.usage.mesh_gateway_local.count` 报告配置为使用每种网格网关模式的服务实例的数量，`consul.usage.mesh_gateway_none.count` 报告没有显式网格网关模式（未设置或 `none`）的服务实例的数量。
* 遥测：**（仅限企业）** 添加了服务意图默认策略、服务意图 L7 和 JWT 计数的服务器端产品使用指标
* 遥测：**（仅限企业）** 添加了服务器端产品使用指标 `consul.usage.mesh_gateway_enabled`，该指标报告集群中是否注册了任何网状网关实例。它独立于网状网关模式计数：这些网关按其上游路由模式对连接代理 sidecar 进行计数，而这会报告网关功能是否已部署。
* 终止网关：**（仅限企业）** 在终止网关出口处添加 Vault 支持的凭证注入。 `TerminatingGateway` 配置条目现在携带 `CredentialInjection` 块（ext_proc 处理器 UDS 路径和​​消息超时），每个链接服务都可以声明 `Credential` 绑定（`Mode: "inject"` 与 `BindingID`）。在出口处，ext_proc 过滤器调用协同定位的处理器，该处理器将绑定凭证（例如，来自 Vault 的提供者 API 密钥）注入到上游请求中，因此凭证永远不会存储在网格配置中或暴露给 clients。
* xds：添加内联“虚拟 DNS”UDP 侦听器 (127.0.0.1:8653)，该侦听器为从代理快照派生的内存中 FQDN 到 VIP 表提供服务。它为显式上游、透明代理模式下有意允许的上游以及集群对等上游通告 VIP，同时跳过跨分区 VIP、陈旧/未经授权的发现链以及空或非 IP 条目，以便 DNS 响应与透明代理侦听器实际拦截的内容保持同步。添加可选的“出口 DNS”UDP 侦听器 (127.0.0.1:8654)，当存在递归器时，该侦听器将通过 c-ares 将查询转发到代理配置的 DNS 递归器。扩展 xDS `ConfigFetcher` 接口（和代理实现）以公开 DNS 递归器。 [[GH-23698](https://github.com/hashicorp/consul/issues/23698)]

改进：

* 杂务：将操作/缓存/恢复从 4.2.0 更新到 6.1.0
* 杂务：将操作/下载工件从 4.1.7 更新为 8.0.2 [[GH-13634](https://github.com/hashicorp/consul/issues/13634)]
* 杂务：将操作/上传工件从 4.3.3 更新为 7.0.2 [[GH-13635](https://github.com/hashicorp/consul/issues/13635)]
*杂务：hashicorp/vault-action从3更新到4 [[GH-13636](https://github.com/hashicorp/consul/issues/13636)]
* 连接：**（仅限企业）** 将兼容性测试更新为 Nomad ENT v1.9.13+ent、v1.10.17+ent、v1.11.11+ent、v2.0.7+ent 和 Vault ENT 1.19.22+ent、1.20.16+ent、1.21.11+ent、2.0.4+ent、 2.1.1+ent 和特使 1.39.4、1.38.7、1.37.9、1.36.13
* 连接：将支持的最大 Envoy 版本从 1.39.4 恢复为 1.39.1。此版本不包含先前 release note 中列出的 Envoy 1.39.4 支持。 [[GH-24057](https://github.com/hashicorp/consul/issues/24057)]
* connect：通过 SDS 将 sidecar 代理的叶证书和 CA 根传递给 Envoy，而不是将它们内嵌到公共侦听器中。叶证书轮换现在是一种无中断热插拔，不再更改侦听器过滤器链哈希，因此已建立的连接（特别是长期 TCP 会话）不再在每次轮换时耗尽和终止。 [[GH-23938](https://github.com/hashicorp/consul/issues/23938)]
* termination-gateway：通过 SDS 将每个链接服务的 Connect 叶证书和共享 CA 根传递给 Envoy，而不是将它们内嵌到网关的下游过滤器链中。叶旋转不再改变过滤器链哈希，因此通过网关建立的连接不再被耗尽。 [[GH-23938](https://github.com/hashicorp/consul/issues/23938)]
* api-网关：将 `invert` 字段添加到 `http-route` 配置条目中的 `HTTPHeaderMatch`，启用否定标头匹配条件（例如“标头不存在时路由”或“标头值不匹配时路由”）。使 API 网关与 `service-router` 中 Ingress Gateway 现有的 `Invert` 支持相同。 [[GH-23817](https://github.com/hashicorp/consul/issues/23817)]
* ci：**（仅限企业）** 将过时 PR 自动化窗口增加到 90 天，然后将拉取请求标记为过时，并将其关闭之前 60 天。 [[GH-13119](https://github.com/hashicorp/consul/issues/13119)]
* 对等互连：**（仅限企业）** 添加对将流量路由到对等多端口服务上的指定端口的支持。 [[GH-13142](https://github.com/hashicorp/consul/issues/13142)]
* telemetry: **(Enterprise only)** Added three product usage metrics for auto-encrypt visibility. `consul.usage.client_agent_metric_included` reports whether client-agent metrics collection is enabled. `consul.usage.client_auto_encrypt_enabled.count` 和 `consul.usage.server_auto_encrypt_enabled.count` 分别报告启用了 `auto_encrypt.tls` 的 client 和服务器的数量。 `consul.usage.auto_encrypt_enabled` combines both counts into a single boolean — true if auto-encrypt is enabled anywhere in the cluster be it client or server.
* 遥测：**（仅限企业）** 添加了三个服务器端产品使用指标，`consul.usage.api_gateway.enabled` 报告集群中当前是否注册了任何 API 网关实例，`consul.usage.mesh.service.percentage` 报告连接代理 sidecar 服务实例的百分比，`consul.usage.transparent_proxy.enabled.percentage` 报告启用透明代理模式的连接代理实例的百分比。
* ui: Migrate the Consul UI to the HashiCorp Design System (HDS).这涵盖了全局导航 shell 和面包屑、列表页面（键/值、对等点、身份验证方法、服务、服务实例、节点、意图、链接服务、上游和访问控制）以及访问控制、命名空间和管理分区表单。包括许多辅助功能 (A11y) 修复。 [[GH-23911](https://github.com/hashicorp/consul/issues/23911)]
* xds：**（仅限企业）** 外部推理模型上游使用特定于目标的 mTLS 传输套接字（每个模型 SDS 验证上下文和 SNI/SAN 匹配）呈现，因此终止网关前端模型的网关到模型跃点是每个模型相互验证和加密的。
* xds: **(Enterprise only)** The `builtin/ext-proc` Envoy extension now supports Unix domain socket processor targets via `Target.Path`.

错误修复：

* 网关：修复 API 网关控制器中的数据争用，其中路由协调器在将 `WatchSet` 交给已经对其进行迭代的控制器触发器后不断添加到 `WatchSet`。现在，仅在所有发现链读取完成后才注册触发器。 [[GH-24018](https://github.com/hashicorp/consul/issues/24018)]
* ui：在选项卡面板内渲染选项卡内容，以便辅助技术可以将其与其选项卡关联起来，并在激活选项卡后将焦点保持在选项卡上 [[GH-24013](https://github.com/hashicorp/consul/issues/24013)]
* ui: Show errors loading a tab's content inside the page instead of as a second nested page [[GH-24013](https://github.com/hashicorp/consul/issues/24013)]
* acl：**（仅限企业）** 修复了 `Proxy.Config` 和每个上游配置中的 Envoy escape-hatch 键匹配，因此它遵循与配置解码器相同的大小写折叠规则。仅 Unicode 大小写折叠不同的键（例如 `envoy_local_cluſter_json`）和 Go 字段名称形式（例如 `EnvoyListenerJSON`）现在需要 `mesh:write` ，就像它们的规范拼写一样。
* 代理：（仅限企业）修复了审核日志记录，以便请求正文捕获遵守正文大小限制，在排除 KV 正文（例如 `/v1/k%76/...`）时使用解码的请求路径，并跳过 `/v1/txn` 正文。 `POST /v1/operator/audit-hash` 现在针对超大主体返回 HTTP 413。
* 代理：**（仅限企业）** 修复了 `PUT /v1/kv/`，因此分块请求正文受 `kv_max_value_size` 限制，与现有的 `Content-Length` 检查相匹配。
* proxycfg：修复了一个 goroutine 和内存泄漏，其中代理的手表在其状态意外停止后继续运行，因为替换、取消注册或关闭停止状态并没有取消它们。 [[GH-23990](https://github.com/hashicorp/consul/issues/23990)]
* proxycfg：修复了 goroutine 和内存泄漏，每次导入的服务列表更改时，透明代理都会为每个导入的对等服务注册一个新的运行状况监视，并且从未停止监视已删除的上游。 [[GH-23990](https://github.com/hashicorp/consul/issues/23990)]
* 遥测：通过使用 `hashicorpmetrics` 标签构建来恢复发布工件中的 Raft、Serf 和 Memberlist 指标。 [[GH-23813](https://github.com/hashicorp/consul/issues/23813)]
* agent/xds：修复了来自 API 网关的跨集群和对等请求被下游服务 RBAC 意图拒绝并显示 HTTP 403 Forbidden 的问题。 `x-forwarded-client-cert` (XFCC) 标头的 client 证书组件中的尾部分号分隔字段（例如自动注册的 DNS SAN）现在已被 RBAC 主体正则表达式正确接受。 [[GH-23920](https://github.com/hashicorp/consul/issues/23920)]
* cli：**（仅限企业）** `consul intention create` 现在通过 UI 使用的确切（配置条目）意图 API 创建和替换意图，支持非默认管理分区（例如 `-partition team-a`）。按源元数据 (`-meta`) 继续使用已弃用的旧意图 API，并且仅在默认分区中受支持；现在，将 `-meta` 与非默认分区组合失败，并出现明显的、可操作的错误。要将元数据附加到管理分区中的意图，请通过 `consul config write` 使用具有入门级 `Meta` 的 `service-intentions` 配置条目。
* 连接：**（仅限企业）** 仅为身份平面上游 (`ai-agent` / `mcp-server`) 附加出站 OBO。推理网关或推理模型目标的显式 HTTP 上游不再获得 consul-obo-outbound 并因“未配置 OBO 受众”而失败关闭。
* connect：修复了Consul服务器忽略了三个服务器端表面配置的`default_intention_policy`的错误 - 意图检查API（`consul intention check`，`GET /v1/connect/intentions/check`），服务拓扑视图（`Internal.ServiceTopology`）和透明代理上游发现（`Internal.IntentionUpstreams`） - 并回退到`acl.default_policy`。仅当 `default_intention_policy` 和 `acl.default_policy` 设置为相反值时，才会更改行为；当他们同意（或 `default_intention_policy` 未设置）时，则不会发生任何变化。对于 `default_intention_policy=deny` 和 `acl.default_policy=allow`，检查 API 和拓扑之前报告连接是允许的，即使它们被拒绝；对于 `default_intention_policy=allow` 和 `acl.default_policy=deny`，透明代理 sidecar 的上游配置不足，可能无法访问它们被授权访问的服务。 Envoy RBAC 执行不受影响，并且已兑现 `default_intention_policy`。

---

> 📦 仓库：[hashicorp/consul](https://github.com/hashicorp/consul) · 🏷️ 版本：`v2.1.0` · 📅 发布：2026-10-22 · [查看英文原版 Release](https://github.com/hashicorp/consul/releases/tag/v2.1.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
