---
title: "dubbo dubbo-3.2.14"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.2.14"
version: "dubbo-3.2.14"
published: "2024-06-17"
type: "release"
lang: "zh"
---

# dubbo dubbo-3.2.14

## 发生了什么变化

### 功能
* 支持在 https://github.com/apache/dubbo/pull/14285 和 https://github.com/apache/dubbo/pull/14281 中通过 @aofall 在 ServiceDiscovery 中禁用 Curator EnsembleTracker

### 错误修复
* 修复@yuanxingke在https://github.com/apache/dubbo/pull/14235中url有带问号的参数时解析参数错误的问题
* 修复 https://github.com/apache/dubbo/pull/14257 中 @aofall 在 dubbo.protocol.accesslog 配置为 false 时禁用 accesslog 的问题
* 修复 https://github.com/apache/dubbo/pull/14261 中 @caoyanan666 的三重反应器调用引发“一元方法响应过多”异常的问题
* 修复 @liaozan 在 https://github.com/apache/dubbo/pull/14247 中使用 spring boot 3 的 uber jar 编译失败问题
* 修复 @xixingya 在 https://github.com/apache/dubbo/pull/14255 中创建的 DubboRelaxedBinding2AutoConfiguration 和 DubboAutoConfiguration 过早的问题

### 依赖升级
*更新bytebuddy.版本：1.14.15 -> 1.14.17 #14273
* 更新 com.alibaba.fastjson2:fastjson2: 2.0.49 -> 2.0.51 #14272
* 更新 io.opentelemetry:opentelemetry-bom: 1.38.0 -> 1.39.0 #14304
* 更新 jakarta.validation:jakarta.validation-api: 3.0.2 -> 3.1.0 #14239
* 更新 net.bytebuddy:byte-buddy: 1.14.15 -> 1.14.17 #14238, #14275
* 更新 netty4_版本：4.1.109.Final -> 4.1.110.Final #14241
* 更新 org.apache.commons:commons-compress: 1.26.1 -> 1.26.2 #14243
* 更新 opentelemetry：1.34.1 -> 1.38.0 #14252
* 更新 zipkin 报告器：2.17.2 -> 3.4.0 #14252
* 更新 spring_version: 5.3.35 -> 5.3.36 #14242
* 更新测微计追踪：1.2.5 -> 1.3.0 #14284

## 贡献者
Dubbo 衷心感谢以下贡献者对此版本的贡献：
@aofall、@caoyanan666、@liaozan、@songxiaosheng、@wcy666103、@xixingya、@yuanxingke

## 新贡献者
* @yuanxingke 在 https://github.com/apache/dubbo/pull/14235 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/dubbo/compare/dubbo-3.2.13...dubbo-3.2.14

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`dubbo-3.2.14` · 📅 发布：2024-06-17 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/dubbo-3.2.14)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
