---
title: "dubbo dubbo-3.3.0-beta.4"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.0-beta.4"
version: "dubbo-3.3.0-beta.4"
published: "2024-06-20"
type: "pre"
lang: "zh"
---

# dubbo dubbo-3.3.0-beta.4

## 发生了什么变化
* 修复 https://github.com/apache/dubbo/pull/14233 中 @HanYaodong 激活评论中的拼写错误
* 修复 telnet list 命令，服务列表显示无序修复... by @lovepoem in https://github.com/apache/dubbo/pull/14251
* 将jedis从3.10.0升级到5.1.0，并通过https://github.com/apache/dubbo/pull/14248中的@qyi71在redis中实现TTL功能的元数据
* 由 @heliang666s 在 https://github.com/apache/dubbo/pull/14264 中合并 CommonConfigPostProcessor 和 ConfigPostProcessor
* 修复规则中 `group` 和 `version` 的覆盖规则由于与原始 url 不匹配而无法工作的问题。通过 @chickenlj 在 https://github.com/apache/dubbo/pull/14291
* Triple http 限制 https://github.com/apache/dubbo/pull/14246 中 @finefuture 的 HTTP 请求和响应的大小
* 在https://github.com/apache/dubbo/pull/14312中添加@icodening的序列化检查
* 通过https://github.com/apache/dubbo/pull/14313中的@finefuture处理携带end_stream标志的头帧
* 通过 @AlbumenJ 在 https://github.com/apache/dubbo/pull/14315 中将 hessian-lite 更新为 4.0.1
* @oxsean 在 https://github.com/apache/dubbo/pull/14033 中对 dubbo 三元组的 HTTP/3 支持
* @oxsean 在 https://github.com/apache/dubbo/pull/14314 中对 Servlet 的三重一元调用支持
* 由 @AlbumenJ 在 https://github.com/apache/dubbo/pull/14321 中更新 3.3 发布工作流程
* https://github.com/apache/dubbo/pull/14338中@songxiaosheng升级opentelemetry和zipkin-reporter版本

## 贡献者
Dubbo 衷心感谢以下贡献者对此版本的贡献：
@AlbumenJ、@chickenlj、@finefuture、@HanYaodong、@heliang666s、@icodening、@lovepoem、@oxsean、@qyi71、@songxiaosheng

## 新贡献者
* @HanYaodong 在 https://github.com/apache/dubbo/pull/14233 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/dubbo/compare/dubbo-3.3.0-beta.3...dubbo-3.3.0-beta.4

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`dubbo-3.3.0-beta.4` · 📅 发布：2024-06-20 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.0-beta.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
