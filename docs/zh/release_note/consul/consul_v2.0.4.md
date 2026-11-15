---
title: "consul v2.0.4"
project: "consul"
repo: "hashicorp/consul"
tag: "v2.0.4"
version: "v2.0.4"
published: "2026-09-10"
type: "patch"
lang: "zh"
---

# consul v2.0.4

## 2.0.4（2026 年 9 月 10 日）
重大变更：

* acl：当尝试将builtin/lua或builtin/wasm EnvoyExtensions（或上游envoy_listener_json/envoy_cluster_json escape-hatch覆盖）附加到服务默认配置条目时，或者使用bootstrap或xDS escape-hatch键注册连接代理sidecar时，持有service:write但不持有mesh:write的令牌现在将收到权限拒绝错误在顶级 Proxy.Config 映射或 Proxy.Upstreams[*].Config 中的每个上游设置。运营商必须向任何合法需要这些功能的令牌授予 mesh:write 权限。 [[GH-23864](https://github.com/hashicorp/consul/issues/23864)]
* fips：**（仅限企业）** FIPS 发布工件已重命名。版本元数据从 `+ent.fips1402` 更改为 `+ent.fips1403`，包和容器工件从 `F2` 后缀更改为 `F3`（例如，`consul-F2_1.20.4-1_amd64.deb` 变为 `consul-F3_1.20.4-1_amd64.deb`）。必须更新固定 FIPS 工件名称或版本字符串的管道。

安全：

* 升级go版本至1.26.7以解决安全漏洞。 [[GH-23869](https://github.com/hashicorp/consul/issues/23869)]
* acl：在将代码执行 EnvoyExtensions（builtin/lua、builtin/wasm）或上游 escape-hatch 覆盖（UpstreamConfig 默认值或覆盖中的 envoy_listener_json、envoy_cluster_json）附加到服务默认配置条目时，除了 service:write 之外还需要 mesh:write。以前，service:write 服务的持有者可以附加一个 Lua 脚本或 Wasm 模块，或者一个上游 escape-hatch 覆盖，Envoy 作为 sidecar 进程用户对每个代理请求进行编译和执行，并可以访问 mTLS 私钥、请求主体和主机文件系统。 [[GH-23864](https://github.com/hashicorp/consul/issues/23864)]
* acl：除了 service:write 之外，在使用 bootstrap 或 xDS escape-hatch 键注册连接代理 sidecar 时还需要 mesh:write，无论是在顶级 Proxy.Config 映射中设置还是在 Proxy.Upstreams[*].Config 中的每个上游设置（envoy_bootstrap_json_tpl、envoy_extra_static_listeners_json， envoy_public_listener_json、envoy_listener_json、envoy_cluster_json、envoy_local_cluster_json、envoy_extra_static_clusters_json、envoy_extra_stats_sinks_json、envoy_tracing_json、 envoy_stats_config_json、envoy_listener_tracing_json）。密钥匹配不区分大小写，以匹配下游使用的映射结构解码。以前，代理及其目标上的 service:write 持有者可以将任意 Envoy 过滤器链配置注入 sidecar 引导程序或 xDS 资源，包括通过每个上游覆盖或混合大小写密钥。 [[GH-23864](https://github.com/hashicorp/consul/issues/23864)]
* 代理：修复了预授权内存耗尽漏洞
没有 ACL 令牌的经过 mTLS 验证的 RPC client 可以通过以下方式终止 Consul 服务器：
发送具有较大声明长度的 MessagePack 请求标头。消息包
解码器在方法查找之前分配了声明大小的字节片，ACL 令牌
验证，或者速率限制拦截器可以运行，允许单个超大
OOM-kill 服务器进程的标头。

应用了两种缓解措施：

1. 现在每个 RPC 请求标头都会根据 RPCMaxHeaderBytes（默认 512
   字节）在解码之前。检查标头中的每个长度前缀
   限制，因此在解码器分配内存之前，过大的值会被拒绝
   对于它，并且在任何 ACL 评估之前关闭连接。请求机构
不受此限制的约束。

2. 内部应用每个请求的读取截止时间（重用 RPCHandshakeTimeout）
   handleConsulConn 和 handleInsecureConn 以便缓慢的攻击者慢慢地
   过大的标头无法无限期地保留 Goroutine 和逻辑堆。
*目录：修复了本地授权不正确的漏洞
具有 `service:write` 或 `node:write` 的 ACL 令牌可以删除对等导入的目录
通过在 `Catalog.Deregister` 请求中提供非默认 `PeerName` 来获取对象。
仅根据本地服务或节点名称检查授权，而不检查对等方
origin，允许调用者删除对等范围的目录命名空间中的对象
不控制。 `Catalog.Deregister` 现在拒绝任何 `PeerName` 为
不是默认值，镜像 `Catalog.Register` 上的现有防护并且
`Catalog.ListServices`。合法的对等状态删除继续通过内部进行
`PeeringBackend.CatalogDeregister` 路径。
* 安全性：将 golang.org/x/mod 升级到 v0.41.0，将 golang.org/x/crypto 升级到 v0.57.0，将 golang.org/x/net 升级到 v0.59.0，以解决安全漏洞。 [[GH-23913](https://github.com/hashicorp/consul/issues/23913)]
* xds：在构建 Envoy RBAC SPIFFE 匹配模式时转义服务名称、命名空间、分区和 trust 域值中的正则表达式元字符，防止通过正则表达式注入绕过意图/授权。

改进：

* fips：**（仅限企业）** 使用 Go 加密模块（`GOFIPS140=v1.0.0`，CMVP 证书 #5247）将 FIPS 版本从 FIPS 140-2（BoringCrypto/CNG cgo 工具链）迁移到 FIPS 140-3。运行时 FIPS 行现在报告 `FIPS 140-3 Enabled, crypto module v1.0.0`。 FIPS 构建不再需要 cgo 或供应商的 Go 工具链。允许 FIPS 140-2 和 FIPS 140-3 代理加入同一集群；支持从 `+ent.fips1402` 滚动升级到 `+ent.fips1403`。

错误修复：

* api-gateway：修复 api-gateway 的 Envoy 代理可能出现的冷启动崩溃问题
当路由的上游故障转移呈现为时，工作进程启动期间出现段错误
在其端点组装之前的聚合集群。领事现在持有每一个
xDS 流的第一次推送，直到网关的发现链端点准备就绪
（每个流，仅首次推送，跳过流 Envoy 恢复，并以
30 秒的截止时间），并将上游故障转移呈现为普通 EDS 集群
当聚合的成员端点尚不可用时，聚合的恢复 - 恢复
一旦它们到达，就会自动进行完全故障转移。稳态更新永远不会
扣留。 [[GH-23892](https://github.com/hashicorp/consul/issues/23892)]
* 网格：**（仅限企业）** 将命名端口上游修复为具有配置的服务路由器、服务拆分器或服务解析器的多端口服务。该服务声明的默认端口继续遵循配置的发现链，而其他命名端口直接连接到根服务上的该端口，而不是失败。未命名端口的上游通过默认端口进行解析。

---

> 📦 仓库：[hashicorp/consul](https://github.com/hashicorp/consul) · 🏷️ 版本：`v2.0.4` · 📅 发布：2026-09-10 · [查看英文原版 Release](https://github.com/hashicorp/consul/releases/tag/v2.0.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
