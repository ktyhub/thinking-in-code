# envoy v1.35.7
### 为什么要使用Envoy

想象一下，你正指挥着一场盛大的交响乐演出，但乐手们分散在世界各地的房间里，各自为政，节奏混乱，乐器间的对话充斥着噪音与延迟。这就是现代微服务架构的日常——服务数量爆炸式增长，它们之间的通信变得复杂、脆弱且难以观测。我们陷入了两难：要么退回单体应用的“黑暗时代”，放弃弹性与敏捷；要么在微服务的“混沌丛林”中挣扎，疲于应付服务发现、负载均衡、熔断和可观测性。

此时，Envoy 如同一位精准而优雅的指挥家出现了。它并非另一个增加复杂性的框架，而是专为解决服务间通信这一核心矛盾而生的**通用数据平面**。使用 Envoy，意味着你选择用一个统一、高性能的透明代理层，来接管所有进出服务的网络流量。它将你从编写重复、易错的通信代码中解放，让你能专注于业务逻辑本身。更引人深思的是，它代表了一种架构哲学的转变：将网络视为一种需要被严密管理和智能化的**一等公民**，而非事后补救的底层细节。选择 Envoy，就是选择秩序、洞察与掌控，告别微服务带来的混乱代价。

### Envoy是什么

Envoy 是一个开源的高性能网络和服务代理，专为云原生应用程序设计。它通常以“边车”模式与应用程序服务一起部署，透明地处理服务之间以及服务与外部的所有网络通信。其核心目标是使网络对应用程序透明，同时提供丰富的功能，如负载均衡、服务发现、健康检查、故障注入、可观测性（指标、日志、追踪）和安全策略（TLS、鉴权）等。

### 入门示例

**真实场景：电商应用微服务**

假设你有一个简单的电商应用，包含两个微服务：`用户服务` 和 `订单服务`。`订单服务`需要调用`用户服务`来获取用户信息。

**不使用 Envoy 时**：你需要在`订单服务`的代码中硬编码或配置`用户服务`的地址，手动处理重试、超时和熔断逻辑。这使代码臃肿，且策略难以统一变更。

**使用 Envoy 后**：

1.  **部署**：为`订单服务`和`用户服务`各部署一个 Envoy 代理作为边车（Sidecar）。
2.  **配置**：编写一份 Envoy 的静态或动态配置文件（通常为 YAML）。以下是一个高度简化的示例，展示如何将请求从订单服务的 Envoy 代理到用户服务：

```yaml
static_resources:
  listeners:
  - name: order_service_listener
    address:
      socket_address: { address: 0.0.0.0, port_value: 8080 }
    filter_chains:
    - filters:
      - name: envoy.filters.network.http_connection_manager
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
          codec_type: AUTO
          stat_prefix: ingress_http
          route_config:
            name: local_route
            virtual_hosts:
            - name: local_service
              domains: ["*"]
              routes:
              - match: { prefix: "/call-user-service" }
                route:
                  # 关键：这里配置了到用户服务集群的路由
                  cluster: user_service_cluster
          http_filters:
          - name: envoy.filters.http.router
            typed_config: { "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router }
  clusters:
  - name: user_service_cluster
    connect_timeout: 0.25s
    type: STRICT_DNS # 服务发现类型
    lb_policy: ROUND_ROBIN # 负载均衡策略
    load_assignment:
      cluster_name: user_service_cluster
      endpoints:
      - lb_endpoints:
        - endpoint:
            address:
              socket_address:
                # 这是用户服务的地址。实践中，通常会使用EDS（端点发现服务）进行动态发现。
                address: user-service
                port_value: 8081
```

**开发示例**：
`订单服务`的代码现在只需要向本地的 Envoy 代理（`localhost:8080`）发送请求到路径 `/call-user-service`。Envoy 会根据配置，自动进行服务发现（找到`user-service`）、负载均衡（在多个实例间轮询）、连接超时控制等。你无需在业务代码中编写任何这类逻辑。要增加熔断、重试或分布式追踪，也只需更新 Envoy 配置，业务代码无需改动。

### Envoy v1.35.7版本更新了什么

此版本主要包含三项重要的安全修复，以解决潜在的风险：修复了在配置远程JWKS获取的JWT认证时可能导致Envoy崩溃的问题；修正了TLS证书匹配器中，对包含嵌入空字节的证书可能误处理的问题；解决了在CONNECT升级后，早期数据可能导致潜在请求走私的漏洞。建议用户升级以确保安全。

### 更新日志

**变更摘要**：

*   **安全修复**：
    *   [CVE-2025-64527](https://github.com/envoyproxy/envoy/security/advisories/GHSA-mp85-7mrq-r866)：当JWT认证配置为远程获取JWKS时，Envoy可能会崩溃。
    *   [CVE-2025-66220](https://github.com/envoyproxy/envoy/security/advisories/GHSA-rwjg-c3h2-f57p)：针对 `match_typed_subject_alt_names` 的TLS证书匹配器可能会错误地处理包含嵌入空字节的证书。
    *   [CVE-2025-64763](https://github.com/envoyproxy/envoy/security/advisories/GHSA-rj35-4m94-77jh)：CONNECT升级后，早期数据可能导致潜在的请求走私。

**Docker镜像**：
[https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.35.7](https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.35.7)

**文档**：
[https://www.envoyproxy.io/docs/envoy/v1.35.7/](https://www.envoyproxy.io/docs/envoy/v1.35.7/)

**发布说明**：
[https://www.envoyproxy.io/docs/envoy/v1.35.7/version_history/v1.35/v1.35.7](https://www.envoyproxy.io/docs/envoy/v1.35.7/version_history/v1.35/v1.35.7)

**完整变更日志**：
[v1.35.6...v1.35.7](https://github.com/envoyproxy/envoy/compare/v1.35.6...v1.35.7)

### 总结

综上所述，Envoy v1.35.7 是一个以**安全加固**为核心的维护版本，重点修复了三个可能引发服务崩溃、证书错误匹配或请求走私的安全漏洞，是保障生产环境稳定运行的重要更新。