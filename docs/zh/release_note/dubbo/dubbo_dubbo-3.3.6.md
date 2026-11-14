---
title: "dubbo dubbo-3.3.6"
description: "Apache Dubbo 的 java 实现。 RPC 和微服务框架。"
summary: "Apache Dubbo 的 java 实现。 RPC 和微服务框架。"
---

# dubbo dubbo-3.3.6

### dubbo 是什么

Apache Dubbo 的 java 实现。 RPC 和微服务框架。

### dubbo dubbo-3.3.6 版本更新了什么

## 亮点
Apache Dubbo 3.3.6 引入了多项重要的增强功能和稳定性改进。
此版本添加了新的反应和路由功能，增强了 HTTP/2 支持，并增强了配置和指标功能。
它还包括一系列错误修复和依赖项升级，以提高整体可靠性和安全性。

---

## 发生了什么变化

### 功能
* 通过 @wcy666103 在 https://github.com/apache/dubbo/pull/14787 中添加 Affinity Router
* 支持 @MoritzArena 在 https://github.com/apache/dubbo/pull/15537 中的 Mutiny Reactive
* 通过https://github.com/apache/dubbo/pull/15494中@zrlw拆分dubbo-spring-security添加dubbo-spring6-security插件
* https://github.com/apache/dubbo/pull/15535中@zrlw添加HTTP/2服务器连接序言流程
* https://github.com/apache/dubbo/pull/15436中@zrlw添加http2客户端连接序言流程
* 通过 Spring 环境支持首选网络接口并修复 https://github.com/apache/dubbo/pull/15604 中 @fu- Cheng1 的早期主机解析
* 在https://github.com/apache/dubbo/pull/15646中@lingyufei的演示中添加对基于Zookeeper的配置中心和元数据报告的支持
* `DefaultTPSLimiter`中支持方法级TPS by @lingyufei in https://github.com/apache/dubbo/pull/15679

### 错误修复
* 修复https://github.com/apache/dubbo/pull/15586中@songxiaosheng的nan问题
* 修复 https://github.com/apache/dubbo/pull/15707 中 @zrlw 的 ConsumerConfigurationListener 并发问题
* 修复了 @nichanghao 在 https://github.com/apache/dubbo/pull/15655 中不支持 `message.proto` 文件名的问题
* 通过 @zrlw 在 https://github.com/apache/dubbo/pull/15602 中修复 `dubbo-remoting` 中未初始化的非静态最终字段（潜在的 NPE）
* 修复https://github.com/apache/dubbo/pull/15613中@oxsean错误删除重新连接间隔的问题
* 通过@huantaojava修复https://github.com/apache/dubbo/pull/15536中`RpcServiceContext.localInvoke`类型不一致的问题
* 修复 Spring 5.x 中的 MergedAnnotation null 问题，作者为 https://github.com/apache/dubbo/pull/15581 中的 @jkoChen
* 修复 https://github.com/apache/dubbo/pull/15466 中 @RainYuY 的 `StreamObserver` 调用序列问题（onCompleted 没有 onNext）
* 修复 NetUtils 以忽略 https://github.com/apache/dubbo/pull/14793 中@cyclinder 的链接本地地址
* 修复 https://github.com/apache/dubbo/pull/15683 中 @Hussain-Safwan 因缺少父方法名称而导致 `WrapperTest` 失败的问题
* 修复 https://github.com/apache/dubbo/pull/15697 中 @zrlw 的 Zookeeper 下载 URL 和超时处理
* 修复 @MoritzArena 在 https://github.com/apache/dubbo/pull/15662 中的 Mutiny 竞争条件问题

### 代码增强
* 尽早结束“读/写”组合以提高 https://github.com/apache/dubbo/pull/15666 中 @frozenNoob 的性能
* 删除 https://github.com/apache/dubbo/pull/15654 中 @RainYuY 的冗余测试和已弃用的作者标签
* 通过 https://github.com/apache/dubbo/pull/15542 中的 @WangzJi 将多 JDK 测试添加到 PR 工作流程
* 缓存标记类型以优化https://github.com/apache/dubbo/pull/15500中@zrlw的SerializeSecurityConfigurator
* 在https://github.com/apache/dubbo/pull/15456中用@zrlw替换ConcurrentHashMap#computeIfAbsent以避免潜在的死锁
* 通过 @zrlw 提高测试稳定性（例如 AbortPolicyWithReportTest、MetricsSupportTest）
* 清理 https://github.com/apache/dubbo/pull/15667 中@zrlw 的冗余版本声明和已弃用的镜像设置
* 优化TriRpcStatus，在https://github.com/apache/dubbo/pull/15708中@zrlw的描述中添加HTTP状态代码

### 依赖升级
* grpc.版本: 1.72.0 → 1.73.0 (#15418, #15550)
* protobuf-java: 3.25.5 → 3.25.8 (#15424)
* netty4_版本: 4.2.1.Final → 4.2.2.Final (#15443)
* io.micrometer:micrometer-bom: 1.15.0 → 1.15.1 (#15462)
* io.micrometer:micrometer-tracing-bom: 1.5.0 → 1.5.1 (#15461)
* org.apache.groovy:groovy: 4.0.26 → 4.0.27 (#15419)
* org.springframework:spring-web: 6.2.7 → 6.2.8 (#15458)
* org.apache.dubbo:hessian-lite: 4.0.3 → 4.0.4 (#15684)
* org.apache.commons:commons-exec: 1.4.0 → 1.5.0 (#15408)
* junit_platform_version: 1.12.2 → 1.13.1 (#15440)
* bcprov: jdk15on → jdk18on (#15434)

### 贡献者
Dubbo 衷心感谢以下贡献者对此版本的贡献：
@AlbumenJ、@zrlw、@RainYuY、@heliang666s、@oxsean、@wcy666103、@frozenNoob、@lingyufei、@MoritzArena、@fu- Cheng1、@nichanghao、@songxiaosheng、@huangtaojava、@Hussain-Safwan、@cyclinder、@co63oc、@WangzJi、 @DustinQiao、@fantiq、@jkoChen、@AROP-REPLICATION

### 新贡献者
* @MoritzArena 在 https://github.com/apache/dubbo/pull/15537 中做出了第一个贡献
* @lingyufei 在 https://github.com/apache/dubbo/pull/15646 中做出了第一个贡献
* @Hussain-Safwan 在 https://github.com/apache/dubbo/pull/15683 中做出了第一个贡献
* @frozenNoob 在 https://github.com/apache/dubbo/pull/15666 中做出了第一个贡献
* @fu-heng1 在 https://github.com/apache/dubbo/pull/15604 中做出了第一个贡献

**完整变更日志**：https://github.com/apache/dubbo/compare/dubbo-3.3.5...dubbo-3.3.6

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`dubbo-3.3.6` · 📅 发布：2025-10-17 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.6)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
