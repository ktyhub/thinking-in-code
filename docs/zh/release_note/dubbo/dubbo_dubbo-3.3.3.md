---
title: "dubbo dubbo-3.3.3"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.3"
published: "2025-01-05"
type: "release"
lang: "zh"
---

# dubbo dubbo-3.3.3

## 发生了什么变化

### 值得注意
* Dubbo 移除了 dubbo-dependency-zookeeper-curator5 和 dubbo-zookeeper-spring-boot-starter 依赖，仅在 dubpo-zookeeper-curator5-spring-boot-starter 中提供了 zk 的依赖。因此，您可以使用 dubpo-zookeeper-curator5-spring-boot-starter 来替换前面的两个依赖。


### 功能
* 支持https://github.com/apache/dubbo/pull/14843中@oxsean从局部变量表中读取参数名称
* 支持从proto文件中解析自定义REST路径并通过https://github.com/apache/dubbo/pull/14796中的@heliang666s生成@Ma…
* WebSocket on Triple by @finefuture in https://github.com/apache/dubbo/pull/14390
* 支持https://github.com/apache/dubbo/pull/14903中@aofall设置curator会话超时
* 三重休息 Openapi 由 @oxsean 在 https://github.com/apache/dubbo/pull/14924 提供支持

### 错误修复
* 修复 https://github.com/apache/dubbo/pull/14849 中 @chickenlj 对应用程序服务发现的首选协议支持
* 通过https://github.com/apache/dubbo/pull/14851中的@chickenlj更新服务发现MappingListener的初始映射应用程序
* 修复 https://github.com/apache/dubbo/pull/14873 中@oxsean 缺失的注释配置处理器依赖项
* 通过 @oxsean 在 https://github.com/apache/dubbo/pull/14917 中修复 onNext 中的死循环
* 修复 @oxsean 在 https://github.com/apache/dubbo/pull/14901 中 http3 协商失败的问题
* 通过 @aruato 在 https://github.com/apache/dubbo/pull/14905 中正确验证服务名称映射参数
* 修复 https://github.com/apache/dubbo/pull/14936 中 @oxsean 未初始化时 DefaultRequestMappingRegistry.exists NPE
* @oxsean 在 https://github.com/apache/dubbo/pull/14955 中修复了 HTTP3 错误
* 优化：https://github.com/apache/dubbo/pull/15019中支持@funky-eyes的http1自动keepalive设置
* 壮举：服务器流支持https://github.com/apache/dubbo/pull/15026中@funky-eyes的无参数请求

### 代码增强
相关 PR：#14794、#14858、#14866、#14869、#14875、#14899、#14896、#14871、#14900、#14904、#14850、#14922、#14928、#14932、#14948、 #14929, #15015

### 依赖升级
* 更新 byte-buddy_version: 1.15.7 -> 1.15.11 #15000, #14856
* 更新 commons-io:commons-io: 2.17.0 -> 2.18.0 #14944
*更新grpc.版本：1.68.0 -> 1.69.0 #14957, #14989
* 更新 io.micrometer:micrometer-bom: 1.13.5 -> 1.13.6 #14805
* 更新 io.micrometer:micrometer-core: 1.13.6 -> 1.14.2 #14907, #14991
* 更新 io.micrometer:micrometer-tracing-bom: 1.3.5 -> 1.4.1 #14911, #14990
* 更新 io.opentelemetry:opentelemetry-bom: 1.43.0 -> 1.45.0 #14886, #14975
* 更新 io.projectreactor:reactor-core: 3.6.11 -> 3.7.1 #14912, #15001
* 更新 io.swagger.core.v3:swagger-annotations: 2.2.25 -> 2.2.27 #14996
* 更新 io.zipkin.reporter2:zipkin-reporter-bom: 3.4.2 -> 3.4.3 #14977
* 更新 jackson_version: 2.18.0 -> 2.18.2 #14852, #14956
* 更新 log4j2_version: 2.24.1 -> 2.24.3 #14942, #14997
* 更新 netty4_版本：4.1.114.Final -> 4.1.115.Final #14910
* 更新 org.apache.groovy:groovy: 4.0.23 -> 4.0.24 #14887
* 更新 org.asynchttpclient:async-http-client: 2.12.3 -> 2.12.4 #14995
* 更新 org.openjdk.nashorn:nashorn-core: 15.4 -> 15.6 #15027
* 更新 org.springframework.security:spring-security-bom: 5.8.15 -> 5.8.16 #14940
* 更新 org.webjars:webjars-locator-lite: 1.0.0 -> 1.0.1 #14999
* 更新 spring-6.version: 6.1.14 -> 6.2.1 #14909, #14992
* 更新 spring-boot-3.version: 3.3.5 -> 3.4.1 #14941, #15012
* 更新 tomcat.版本：8.5.100 -> 10.1.34 #14993

## 贡献者
Dubbo 衷心感谢以下贡献者对此版本的贡献：
@AlbumenJ、@aofall、@aruato、@chenzhiguo、@chickenlj、@CrazyHZM、@daziz、@dependabot、@finefuture、@funky-eyes、@heliang666s、@lanxi0、@laywin、@ljmcr、@oxsean、@paradiseidler、@strangelookingnerd

## 新贡献者
* @paradiseidler 在 https://github.com/apache/dubbo/pull/14899 中做出了第一个贡献
* @ljmcr 在 https://github.com/apache/dubbo/pull/14896 中做出了第一个贡献
* @aruato 在 https://github.com/apache/dubbo/pull/14905 中做出了第一个贡献
* @strangelookingnerd 在 https://github.com/apache/dubbo/pull/14922 中做出了第一个贡献
* @lanxi0 在 https://github.com/apache/dubbo/pull/14948 中做出了第一个贡献
* @chenzhiguo 在 https://github.com/apache/dubbo/pull/14935 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/dubbo/compare/dubbo-3.3.2...dubbo-3.3.3

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`dubbo-3.3.3` · 📅 发布：2025-01-05 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
