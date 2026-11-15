---
title: "consul v2.0.1"
project: "consul"
repo: "hashicorp/consul"
tag: "v2.0.1"
version: "v2.0.1"
published: "2026-06-19"
type: "patch"
lang: "zh"
---

# consul v2.0.1

## 2.0.1 (June 18, 2026)

安全：

* 将 go 版本升级到 1.26.4 以地址 [GO-2026-5039](https://pkg.go.dev/vuln/GO-2026-5039)、[GO-2026-5038](https://pkg.go.dev/vuln/GO-2026-5038)、[GO-2026-5037](https://pkg.go.dev/vuln/GO-2026-5037) [[GH-23637](https://github.com/hashicorp/consul/issues/23637)]
* 连接：升级特使版本至1.37.4、1.36.8、1.35.12；添加新版本的 Envoy 1.38.2 并删除 1.34.14 [[GH-23664](https://github.com/hashicorp/consul/issues/23664)]

改进：

* dockerfile：通过合并 RUN 命令和遵循最佳实践的微小更改来减少层数。 [[GH-23650](https://github.com/hashicorp/consul/issues/23650)]
* 产品遥测：产品使用情况报告现在可以通过从上次成功导出时间恢复来保持重新启动和领导者重新选举期间的导出节奏，从而防止延迟
* 服务器：Auth 方法 TokenNameFormat 字段接受 OIDC 和 JWT 声明映射值 [[GH-23616](https://github.com/hashicorp/consul/issues/23616)]
* ui: 删除了块槽插件依赖项 [[GH-23481](https://github.com/hashicorp/consul/issues/23481)]

错误修复：

* connect：在将入站 HTTP 请求转发到本地服务实例之前，剥离 `x-forwarded-client-cert` 标头。 [[GH-23544](https://github.com/hashicorp/consul/issues/23544)]
* 服务器：修复了重命名服务器（或使用相同的 IP 和 Raft 节点 ID 擦除并重新加入它）可能导致无序 Serf 事件从内部服务器查找中驱逐活动领导者的错误，从而导致跟随者 RPC 上出现 `Raft leader not found in server lookup mapping` (HTTP 500) 错误，直到下一个成员事件重新同步映射。 [[GH-23533](https://github.com/hashicorp/consul/issues/23533)]

---

> 📦 仓库：[hashicorp/consul](https://github.com/hashicorp/consul) · 🏷️ 版本：`v2.0.1` · 📅 发布：2026-06-19 · [查看英文原版 Release](https://github.com/hashicorp/consul/releases/tag/v2.0.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
