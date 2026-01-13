# envoy v1.34.11
### 为什么要使用Envoy

想象一下，你正构建一座数字都市——你的微服务架构。起初，道路清晰，服务间通话顺畅。但随着城市爆炸式增长，混乱降临：交通拥堵（延迟）、安全隐患（攻击）、区域失联（服务故障）。你成了疲于奔命的“消防队长”，终日处理重试、超时、熔断和观测性黑洞。

矛盾就在这里：**我们拆解巨石应用，获得敏捷与弹性，却亲手编织了一张更复杂、更脆弱的通信网络。** 服务不是孤岛，它们需要对话。而每一次对话，都可能成为系统崩溃的起点。

这就是Envoy登场之时。它并非另一个增加复杂性的部件，而是你数字都市的**智能交通中枢与统一通信层**。使用Envoy，意味着你选择不再将可观测性、安全、流量治理这些横切关注点，杂乱地嵌入每一个服务。相反，你将这些能力抽象到一个专属的、高性能的底层网络。这就像为你的城市建立了统一交通规则、高清监控网和应急指挥中心。

矛盾由此化解：**通过引入一个“基础设施层”，你反而简化了业务开发的复杂度，获得了全局的掌控力与透明度。** 开发团队可以专注于业务逻辑，运维团队则拥有了一个强大的杠杆，能无侵入地实施金丝雀发布、全链路加密、故障注入和全局流量镜像。Envoy让你从被动的通信“抢险”，转变为主动的架构“治理”。

### Envoy是什么

Envoy是一个开源的高性能服务代理，专为云原生应用设计。它通常以独立进程的形式部署在每一个服务实例旁边（这种模式称为Sidecar），透明地处理服务之间所有入站和出站的网络流量。简而言之，**Envoy是你的服务的智能通信秘书和保镖**，统一管理流量路由、负载均衡、认证授权、可观测性数据收集等一切网络通信事宜，让服务本身只需关心自己的核心业务。

### 入门示例

**真实场景：电商平台的微服务演进**

假设你有一个简单的电商应用，最初是单体架构。随着发展，你将其拆解为独立服务：`用户服务`、`商品服务`和`订单服务`。订单服务需要调用用户服务和商品服务来创建订单。

**没有Envoy时**：订单服务直接通过HTTP调用另外两个服务。你需要手动处理连接池、重试、超时，并在每个服务中添加日志和度量代码来追踪调用链。当商品服务实例扩容时，订单服务还需要更新负载均衡配置。

**引入Envoy后**：

1.  **部署**：为`订单服务`、`用户服务`、`商品服务`每个实例都部署一个Envoy Sidecar容器。
2.  **配置（示例）**：编写一个Envoy配置，定义`监听器`（Listener）接收订单服务的出站流量，并通过`集群`（Cluster）指向商品服务的多个实例。
    ```yaml
    static_resources:
      listeners:
      - name: order_to_product_listener
        address:
          socket_address: { address: 0.0.0.0, port_value: 10001 }
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
                - name: product_service
                  domains: ["*"]
                  routes:
                  - match: { prefix: "/" }
                    route:
                      cluster: product_service_cluster # 路由到商品服务集群
              http_filters:
              - name: envoy.filters.http.router
                typed_config: { "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router }
      clusters:
      - name: product_service_cluster
        type: STRICT_DNS
        lb_policy: ROUND_ROBIN
        load_assignment:
          cluster_name: product_service_cluster
          endpoints:
          - lb_endpoints:
            - endpoint:
                address:
                  socket_address:
                    address: product-service # 服务发现地址
                    port_value: 80
    ```
3.  **开发体验**：订单服务现在只需向`localhost:10001`发送请求（即发给本地的Envoy Sidecar）。Envoy会自动进行服务发现、负载均衡、并附加请求ID用于全链路追踪。如果一次调用失败，Envoy会根据配置自动重试。所有流量指标、日志和追踪信息都由Envoy自动生成并上报给监控后端（如Prometheus, Zipkin）。

### Envoy v1.34.11版本更新了什么

Envoy v1.34.11版本主要是一个包含关键安全修复的补丁更新。它修复了三个安全漏洞：一是修复了在配置远程JWKS获取的JWT认证时可能导致Envoy崩溃的问题；二是修正了TLS证书匹配器中，对包含嵌入空字节的证书可能出现的错误处理逻辑；三是解决了在CONNECT协议升级后，早期数据可能导致的潜在请求走私漏洞。建议所有用户尽快升级以确保稳定性与安全。

### 更新日志

**版本 v1.34.11**

*   **安全修复**：
    *   **CVE-2025-64527**：当JWT认证配置为远程获取JWKS时，Envoy可能发生崩溃。
    *   **CVE-2025-66220**：针对`match_typed_subject_alt_names`的TLS证书匹配器，可能会错误地处理包含嵌入空字节的证书。
    *   **CVE-2025-64763**：在CONNECT协议升级后，来自早期数据的潜在请求走私风险。

**Docker镜像**：
https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.34.11

**文档**：
https://www.envoyproxy.io/docs/envoy/v1.34.11/

**版本发布说明**：
https://www.envoyproxy.io/docs/envoy/v1.34.11/version_history/v1.34/v1.34.11

**完整更新日志**：
https://github.com/envoyproxy/envoy/compare/v1.34.10...v1.34.11

### 总结

总而言之，v1.34.11版本是一次重要的安全维护性更新，主要修复了涉及JWT认证崩溃、TLS证书匹配异常和HTTP请求走私风险的三项关键安全漏洞，建议使用者及时升级以保障系统安全。