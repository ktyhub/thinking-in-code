---
title: "dubbo dubbo-3.3.1"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.1"
published: "2024-10-02"
type: "release"
lang: "zh"
---

# dubbo dubbo-3.3.1

## 发生了什么变化

### 功能
* https://github.com/apache/dubbo/pull/14723中@finefuture在dubbo-maven-plugin中支持单文件模式
* 支持 @oxsean 在 https://github.com/apache/dubbo/pull/14726 中配置不允许的内容类型
* 根据 @oxsean 在 https://github.com/apache/dubbo/pull/14714 中的其余映射返回匹配的 http 状态代码
* @oxsean 在 https://github.com/apache/dubbo/pull/14673 中支持 Http2 sse
* 添加了对在 Spring boot 中配置 Tomcat HTTP2 最大流大小的支持（@oxsean 在 https://github.com/apache/dubbo/pull/14702 中）
* 在 https://github.com/apache/dubbo/pull/14596 中添加@JinQian1024 支持将 Spring Boot 执行器桥接到 QoS

### 错误修复
* 修复https://github.com/apache/dubbo/pull/14670中@JunJieLiu51520从流连接窗口大小中分割出的tcp连接窗口大小
* 修复 https://github.com/apache/dubbo/pull/14724 中 @CrazyHZM 代理的本机图像
* 修复 https://github.com/apache/dubbo/pull/14718 中@chickenlj 的三重 client 连接共享竞争状况
* 在https://github.com/apache/dubbo/pull/14732中创建MetadataService调用者时禁用检查以防止@AlbumenJ造成内存泄漏
* 修复中断时 safeLock 不运行的问题，并修复 https://github.com/apache/dubbo/pull/14730 中 @AlbumenJ 在 ServiceInstancesChangedListener 中取消部分通知的问题
* 修复https://github.com/apache/dubbo/pull/14731中MetadataServiceV2无法被@AlbumenJ销毁的问题
* 通过 @oxsean 在 https://github.com/apache/dubbo/pull/14741 中修复 HttpPostRequestDecoder 中的内存泄漏
* 修复 https://github.com/apache/dubbo/pull/14742 中 @oxsean 的 SpringRestToolKit getBean 参数错误

### 代码增强
相关 PR：#14671、#14705

### 依赖升级
*更新bytebuddy.版本：1.15.0 -> 1.15.3 #14736 #14648
* 更新 ch.qos.logback:logback-core: 1.5.7 -> 1.5.8 #14653
* 更新 com.alibaba.fastjson2:fastjson2: 2.0.52 -> 2.0.53 #14707
* 更新 com.alibaba.nacos:nacos-client: 2.4.1 -> 2.4.2 #14655
* 更新 com.github.spullara.mustache.java:编译器：0.9.10 -> 0.9.14 #14693
* 更新 com.google.protobuf:protobuf-java: 3.25.4 -> 3.25.5 #14704
* 更新公共编解码器：公共编解码器：1.16.0 -> 1.17.1 #14711
* 更新 commons-io:commons-io: 2.16.1 -> 2.17.0 #14713
* 更新grpc.版本：1.66.0 -> 1.68.0 #14706
* 更新 io.micrometer:micrometer-bom: 1.13.3 -> 1.13.4 #14681
* 更新 io.micrometer:micrometer-core: 1.13.3 -> 1.13.4 #14679
* 更新 io.micrometer:micrometer-tracing-bom: 1.3.3 -> 1.3.4 #14682, #14739
* 更新 io.opentelemetry:opentelemetry-bom: 1.41.0 -> 1.42.1 #14651, #14676
* 更新 io.projectreactor:reactor-core: 3.6.9 -> 3.6.10 #14680
* 更新 io.zipkin.reporter2:zipkin-reporter-bom: 3.4.0 -> 3.4.2 #14678, #14710, #14734
* 更新 Jackson_version：2.17.2 -> 2.18.0 #14738
* 更新 jakarta.xml.bind:jakarta.xml.bind-api: 4.0.1 -> 4.0.2 #14690
* 更新 jetty_version: 9.4.55.v20240627 -> 9.4.56.v20240826 #14650
* 更新 log4j2_version: 2.23.1 -> 2.24.1 #14649, #14735
* 更新 netty4_版本：4.1.112.Final -> 4.1.113.Final #14652
* 更新 org.apache.groovy:groovy: 4.0.21 -> 4.0.23 #14709
* 更新 org.awaitility:awaitility: 4.2.0 -> 4.2.2 #14708
* 更新 org.glassfish.jaxb:jaxb-runtime: 2.3.3-b02 -> 2.4.0-b180830.0438 #14689
* 更新 org.springframework.cloud:spring-cloud-openfeign-core: 3.1.5 -> 3.1.9 #14687
* 更新 org.xerial.snappy:snappy-java: 1.1.10.6 -> 1.1.10.7 #14683
*更新seata.版本：1.6.1 -> 1.8.0 #14692
* 更新哨兵版本：1.8.6 -> 1.8.8 #14688
* 更新 spring.version: 6.0.11 -> 6.1.13 #14691

## 贡献者
Dubbo 衷心感谢以下贡献者对此版本的贡献：
@AlbumenJ、@chickenlj、@co63oc、@CrazyHZM、@finefuture、@funky-eyes、@JinQian1024、@JunJieLiu51520、@oxsean

## 新贡献者
* @JunJieLiu51520 在 https://github.com/apache/dubbo/pull/14664 中做出了第一个贡献
* @co63oc 在 https://github.com/apache/dubbo/pull/14671 中做出了第一个贡献
* @JinQian1024 在 https://github.com/apache/dubbo/pull/14596 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/dubbo/compare/dubbo-3.3.0...dubbo-3.3.1

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`dubbo-3.3.1` · 📅 发布：2024-10-02 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
