# envoy v1.34.0
# 为什么要使用Envoy  
**当传统API网关成为性能瓶颈时**  
现代云原生架构中，微服务间的通信如同城市交通网络——流量激增、路径复杂、故障频发。传统反向代理工具如同老旧的交通信号灯，面对动态路由、实时熔断、全链路观测等需求时捉襟见肘。Envoy的出现直击这一矛盾：它不仅能在毫秒级完成流量调度，更以"透明中间层"的设计理念，让开发者无需修改代码即可实现全栈可观测性。当Kubernetes集群因服务网格混乱而陷入"深夜救火"时，Envoy如同一位隐形调度员，用xDS协议动态重绘流量地图，让服务间通信从无序走向智能自治。

# Envoy是什么  
Envoy是一款开源的高性能服务代理，专为云原生应用设计。它像智能路由器般嵌入在应用架构中，处理流量管理、可观测性与安全策略，支持动态配置更新，是服务网格（如Istio）的核心组件。

# 入门示例  
**真实场景：电商大促期间的动态限流**  
某跨境电商在黑色星期五遭遇突发流量冲击，核心支付服务因过载频繁超时。通过部署Envoy作为边缘网关，实现以下配置：
```yaml
http_filters:
- name: envoy.filters.http.local_ratelimit
  typed_config:
    "@type": type.googleapis.com/envoy.extensions.filters.http.local_ratelimit.v3.LocalRateLimit
    stat_prefix: payment_ratelimit
    token_bucket:
      max_tokens: 1000
      tokens_per_fill: 500
      fill_interval: 60s
```
该配置使支付接口在QPS超过1000时自动触发限流，同时通过Envoy的实时监控面板精准定位慢查询服务，配合加权负载均衡将流量智能分发到健康实例。

# Envoy v1.34.0版本更新  
1. 安全：修复CVE-2025-30157错误响应流向漏洞，升级c-ares至1.34.5  
2. HTTP：支持异步负载均衡，增强RFC 9112规范兼容性  
3. 性能：优化HTTP/1升级处理，改进TCP代理重试机制  
4. 功能：新增动态模块加载、io_uring接口支持、QUIC-LB草案实现  
5. 观测：强化传输层流量诊断，提升负载报告实时性  

# 更新日志
**变更摘要**  

**安全**  
- 修复CVE-2025-30157：修正本地响应错误发送至ext_proc服务器的漏洞  
- 升级c-ares至1.34.5版本以解决CVE-2025-31498安全风险  

**HTTP**  
- 新增异步负载均衡支持，允许端点反馈请求处理能力  
- 改进HTTP/1解析器以符合RFC 9112的请求换行规范  
- 增加可配置匹配器忽略特定HTTP/1.1升级值  
- 实现TCP代理选项：在建立上游连接前读取下游数据  

**性能**  
- 优化HTTP/1忽略升级场景的性能表现  
- 增强TCP代理重试机制以避免连接冲突  
- 在自适应并发过滤器中添加最小RTT固定值选项  
- 动态转发代理支持空主机的异步查询  

**可靠性**  
- 修复预连接逻辑可能导致的过度建连问题  
- 通过设置`IP_BIND_ADDRESS_NO_PORT`解决original_src过滤器端口耗尽  
- 修正附加监听地址的套接字选项应用问题  
- 避免EDS集群配置错误引发的崩溃  

**功能**  
- 新增运行时动态加载共享库支持  
- 默认套接字接口支持io_uring  
- 压缩过滤器可跳过特定响应码的压缩  
- 实现QUIC-LB草案标准的连接ID生成  
- ext_proc支持优雅关闭gRPC侧流，新增`FULL_DUPLEX_STREAMED`模式  
- OAuth2授权码流支持PKCE，可配置SameSite Cookie属性  
- 支持Linux Kubernetes环境的容器CPU监控  
- 增强代理协议TLV的定制化支持  
- 新增`QUERY_PARAM`、`CUSTOM_FLAGS`等格式化属性  

**可观测性**  
- 传输层流量诊断增强事件关联信息  
- 负载报告服务(LRS)支持请求触发式上报  

**Docker镜像**  
[https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.34.0](https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.34.0)  
**文档**  
[https://www.envoyproxy.io/docs/envoy/v1.34.0/](https://www.envoyproxy.io/docs/envoy/v1.34.0/)  
**完整更新记录**  
[v1.33.0...v1.34.0](https://github.com/envoyproxy/envoy/compare/v1.33.0...v1.34.0)  

# 版本更新总结  
Envoy 1.34.0在安全、性能、功能三维度实现突破：修补关键漏洞确保通信安全，通过异步负载均衡和io_uring支持提升性能，新增动态模块加载等12项功能扩展应用场景，同时强化可观测性工具链，堪称云原生流量管理领域的瑞士军刀式升级。