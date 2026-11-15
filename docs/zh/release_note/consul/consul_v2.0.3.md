---
title: "consul v2.0.3"
project: "consul"
repo: "hashicorp/consul"
tag: "v2.0.3"
version: "v2.0.3"
published: "2026-08-07"
type: "patch"
lang: "zh"
---

# consul v2.0.3

## 2.0.3（2026 年 8 月 7 日）
安全：

* 更新 `brace-expansion` 以地址 [GHSA-rgw5-rvv9-x895](https://github.com/advisories/GHSA-rgw5-rvv9-x895)（通过无界中间数组进行 DoS）。 [[GH-23786](https://github.com/hashicorp/consul/issues/23786)]
* 更新 `fast-uri` 以地址 [GHSA-7p8r-x3mc-p8w7](https://github.com/advisories/GHSA-7p8r-x3mc-p8w7)（通过反斜杠权限介绍者造成主机混乱）。 [[GH-23786](https://github.com/hashicorp/consul/issues/23786)]
* 将 `golang.org/x/text` 更新为 v0.39.0 以地址 [GO-2026-5970](https://pkg.go.dev/vuln/GO-2026-5970)。 [[GH-23761](https://github.com/hashicorp/consul/issues/23761)]
* 将 `google.golang.org/grpc` 更新为 v1.82.1 以地址 [GHSA-hrxh-6v49-42gf](https://github.com/advisories/GHSA-hrxh-6v49-42gf)。 [[GH-23761](https://github.com/hashicorp/consul/issues/23761)]
* 更新 `socket.io-parser` 以解决 [CVE-2026-69185](https://github.com/advisories/GHSA-2m8v-j782-fhvr)（零附件内存耗尽）。 [[GH-23786](https://github.com/hashicorp/consul/issues/23786)]
* 升级以使用Go `1.26.5`。这解决了漏洞
[GO-2026-4970](https://pkg.go.dev/vuln/GO-2026-4970) (`os`)。
[GO-2026-5856](https://pkg.go.dev/vuln/GO-2026-5856) (`crypto/tls`)。 [[GH-23761](https://github.com/hashicorp/consul/issues/23761)]
*代理：修复了`GET /v1/agent/connect/ca/roots`的拒绝服务漏洞
并且`POST /v1/agent/connect/authorize`无条件使用代理端缓存，即使
when `http_config { use_cache = false }` was configured by the operator.远程呼叫者
可以绕过此设置并通过改变请求来增加代理缓存而不受限制
ACL token.当 `use_cache` 为时，两个端点现在都会跳过缓存并发出直接 RPC
禁用。 (SECVULN-50292、SECVULN-50293) [[GH-23797](https://github.com/hashicorp/consul/issues/23797)]
* 代理：修复了 `ShadowServiceRouterConfigEntry.CheckEnt` 中的零指针解引用恐慌
当服务路由器配置条目包含带有 nil `Destination` 的路由时。精心打造的
包含此类条目的快照恢复或复制消息可能会使 FSM 崩溃
解码路径。 nil 守卫现在将丢失的目的地视为非企业数据，并且
继续安全解码。 (SECVULN-50291) [[GH-23797](https://github.com/hashicorp/consul/issues/23797)]
*代理：修复了用户提供的公共侦听器的安全绕过问题
(`envoy_public_listener_json`) 使用 HTTP 连接管理器过滤器将跳过 Consul 的
入站请求标准化默认值。 An attacker could exploit the un-normalized path
使用百分比编码路径等效项绕过 L7 意图 `deny` 规则。现在领事
注入路径标准化（默认启用，除非网格配置选项
`InsecureDisablePathNormalization` 设置在用户提供的每个 HCM 过滤器链上
应用 L7 意图执行之前的公共监听器。 (SECVULN-50295) [[GH-23797](https://github.com/hashicorp/consul/issues/23797)]
*代理：修复了未经身份验证的拒绝服务漏洞
`PUT /v1/agent/check/update/:id`、`PUT /v1/agent/check/register`、
`PUT /v1/agent/service/register` 和 `POST /v1/agent/connect/authorize`
在解析调用者的 ACL 之前解码无界 JSON 请求主体
令牌。未经身份验证的呼叫者可以保留多个大型 JSON 解码器
在每个请求之前，Consul 进程中同时缓冲
被 HTTP 403 拒绝，导致攻击者控制的堆增长。所有四个
现在，在进行任何解码之前，端点将请求正文限制为 512 KiB，
returning HTTP 413 for oversized bodies. This limit applies to chunked
传输编码以及声明的 `Content-Length`。
(SECVULN-50418) [[GH-23796](https://github.com/hashicorp/consul/issues/23796)]
*代理：修复了外部gRPC未经身份验证的拒绝服务漏洞
和 gRPC-TLS 侦听器接受每个源 IP 的无限数量的 TCP 连接
在发生任何请求处理、ACL 检查或速率限制之前。远程攻击者
可能会通过打开许多连接来耗尽代理文件描述符、goroutine 和内存
and withholding the gRPC or TLS handshake.现已推出新的每 client-IP 连接限制器
在 gRPC 服务器观察连接之前应用，由新的控制
`limits.grpc_max_conns_per_client` 配置选项（默认 100）。 gRPC 握手
超时也从库默认值 120 秒减少到 20 秒。
(SECVULN-50294) [[GH-23797](https://github.com/hashicorp/consul/issues/23797)]

改进：

* ui：将 yadda/Gherkin 验收测试迁移到本机 QUnit（利用、意图/创建、组件、设置）[[GH-23741](https://github.com/hashicorp/consul/issues/23741)]
* xds：添加两个新的选择加入 `ProxyDefaults.spec.config` 键，用于控制 API 网关 HTTP 侦听器上的 `server` 响应标头：`envoy_suppress_envoy_headers`（完全删除标头）和 `envoy_server_header_name`（将其重命名为自定义值）。如果两者都设置了，则抑制优先。 [[GH-13027](https://github.com/hashicorp/consul/issues/13027)]

错误修复：

* 代理：停止在调试级别内容类型日志中记录原始 ACL 令牌。 [[GH-23731](https://github.com/hashicorp/consul/issues/23731)]
* api-gateway：修复了当后端服务的 `service-router` 在发现链综合期间组成到不同服务、命名空间或分区中的目的地的路由时，导致 HTTP API 网关拒绝其配置并出现“协议不一致”错误（导致间歇性 503 秒）的回归问题。 [[GH-23793](https://github.com/hashicorp/consul/issues/23793)]
* serf：修复WAN洪水加入以忽略非活动目标成员（离开/离开/失败），允许重新加入的服务器在WAN成员资格中恢复活动状态。 [[GH-23709](https://github.com/hashicorp/consul/issues/23709)]
* xds：在 GPRC 请求中添加 XFCC 标头，类似于连接代理入站侦听器的 HTTP 请求 [[GH-23744](https://github.com/hashicorp/consul/issues/23744)]

---

> 📦 仓库：[hashicorp/consul](https://github.com/hashicorp/consul) · 🏷️ 版本：`v2.0.3` · 📅 发布：2026-08-07 · [查看英文原版 Release](https://github.com/hashicorp/consul/releases/tag/v2.0.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
