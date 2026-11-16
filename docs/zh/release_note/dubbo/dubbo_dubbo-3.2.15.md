---
title: "dubbo dubbo-3.2.15"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.2.15"
version: "dubbo-3.2.15"
published: "2024-08-05"
type: "release"
lang: "zh"
---

# dubbo dubbo-3.2.15

## 发生了什么变化
* 由 @AlbumenJ 在 https://github.com/apache/dubbo/pull/14322 中更新 3.3 预定工作流程
* 修复(3.2): injvm 调用者在 https://github.com/apache/dubbo/pull/14346 中通过 @caoyanan666 抛出 ClassCastException
* 修复 https://github.com/apache/dubbo/pull/14348 中 @AlbumenJ 无法检索惰性启动执行器状态的指标
* 修复 https://github.com/apache/dubbo/pull/14389 中@binfeiruci 关闭应用程序时RegistryProtocol.ExporterChangeableWrapper#unregister 中的 NPE
* 同步 spring 初始化操作以防止 @AlbumenJ 在 https://github.com/apache/dubbo/pull/14371 中进行并行初始化
* 14372 修复 https://github.com/apache/dubbo/pull/14381 中@mrwangyin 的多个注册表
* 通过 @AlbumenJ 在 https://github.com/apache/dubbo/pull/14419 中修复 QoS 中的空键
* 修复：修复 @conghuhu 在 https://github.com/apache/dubbo/pull/14427 中 doRegister 首次失败时的 AbstractServiceDiscovery.update
* 修复：解决了带有 null 协议的 ServiceInfo 被阻塞的问题...作者：https://github.com/apache/dubbo/pull/14421 中的 @QingJuBaiTang
* 修复https://github.com/apache/dubbo/pull/14468中@code4china线程池耗尽时AbortPolicyWithReport可能重复jstack的问题
* 当https://github.com/apache/dubbo/pull/14478中的@Xwiam消费者lazy init且消费者线程contextClassLoader为null时，会发生NPE

## 依赖项更新
*更新bytebuddy.版本：1.14.17 -> 1.14.18 #14463
* 更新 com.alibaba.fastjson2:fastjson2: 2.0.51 -> 2.0.52 #14435
* 更新 com.alibaba.nacos:nacos-client: 2.3.2 -> 2.4.0 #14385, #14461
* 更新公共日志记录：公共日志记录：1.3.2 -> 1.3.3 #14404
* 更新grpc.版本：1.64.0 -> 1.65.1 #14382, #14433
* 更新 io.micrometer:micrometer-bom: 1.13.0 -> 1.13.2 #14331, #14440
* 更新 io.micrometer:micrometer-core: 1.13.0 -> 1.13.2 #14327, #14438
* 更新 io.micrometer:micrometer-tracing-bom: 1.3.0 -> 1.3.2 #14328, #14437
* 更新 io.opentelemetry:opentelemetry-bom: 1.39.0 -> 1.40.0 #14402
* 更新 io.projectreactor:reactor-core: 3.6.6 -> 3.6.8 #14333, #14434
* 更新 Jackson_version：2.17.1 -> 2.17.2 #14400
* 更新 jetty_version: 9.4.54.v20240208 -> 9.4.55.v20240627 #14401
* 更新 net.bytebuddy:byte-buddy: 1.14.17 -> 1.14.18 #14436
* 更新 netty4_版本：4.1.110.Final -> 4.1.112.Final #14324、#14459
* 更新 org.apache.commons:commons-lang3: 3.14.0 -> 3.15.0 #14462
* 更新 org.eclipse.jetty:jetty-maven-plugin: 9.4.54.v20240208 -> 9.4.55.v20240627 #14403
* 更新 org.springframework.security:spring-security-bom: 5.8.12 -> 5.8.13 #14362
* 更新 org.testcontainers:testcontainers: 1.19.8 -> 1.20.0 #14460
* 更新 protobuf-java_version: 3.25.3 -> 3.25.4 #14476
* 更新 spring_version: 5.3.36 -> 5.3.37 #14330

## 新贡献者
* @binfeiruci 在 https://github.com/apache/dubbo/pull/14389 中做出了第一个贡献
* @mrwangyin 在 https://github.com/apache/dubbo/pull/14381 中做出了第一个贡献
* @QingJuBaiTang 在 https://github.com/apache/dubbo/pull/14421 中做出了第一个贡献
* @code4china 在 https://github.com/apache/dubbo/pull/14468 中做出了第一个贡献
* @Xwiam 在 https://github.com/apache/dubbo/pull/14478 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/dubbo/compare/dubbo-3.2.14...dubbo-3.2.15

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`dubbo-3.2.15` · 📅 发布：2024-08-05 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/dubbo-3.2.15)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
