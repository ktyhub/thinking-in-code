---
title: "dubbo dubbo-3.3.5"
description: "Apache Dubbo 的 java 实现。 RPC 和微服务框架。"
summary: "Apache Dubbo 的 java 实现。 RPC 和微服务框架。"
---

# dubbo dubbo-3.3.5

### dubbo 是什么

Apache Dubbo 的 java 实现。 RPC 和微服务框架。

### dubbo dubbo-3.3.5 版本更新了什么

## 发生了什么变化
### 功能
* 自动配置虚拟线程池由 @heliang666s 在 https://github.com/apache/dubbo/pull/15220
* [3.3] 在https://github.com/apache/dubbo/pull/15239中通过@zrlw绑定之前启用服务器套接字reuseAddress选项
* 增强 https://github.com/apache/dubbo/pull/15387 中 @oxsean 对服务器发送事件的支持

### 错误修复
* [3.3] 通过https://github.com/apache/dubbo/pull/15202中的@zrlw从NamedThreadFactory中删除了mGroup
* 通过https://github.com/apache/dubbo/pull/15210中的@finefuture修复ThreadlessExecutor中的并发问题
* 修复@Stellar1999在https://github.com/apache/dubbo/pull/15221中重复加载registryFactory的问题
* [3.3] 通过在 https://github.com/apache/dubbo/pull/15209 中捕获 @zrlw 的 ClosedChannelException 来重试连接到提供商服务器
* 通过 @songxiaosheng 在 https://github.com/apache/dubbo/pull/15257 修复提供商获取行李错误
* [3.3] 修复了 https://github.com/apache/dubbo/pull/15261 中 @zrlw 的 ClassGeneratorTest 并发问题
* 通过 @CrazyHZM 在 https://github.com/apache/dubbo/pull/15115 中修复本机图像的三重协议
* 修复 @itait 在 https://github.com/apache/dubbo/pull/15288 中生成包装对象时的初始化问题 (#15276)
* 修复(MetricsEventBus): 修复https://github.com/apache/dubbo/pull/15296中@PengJingzhao的一些bug
* https://github.com/apache/dubbo/pull/15353中@AlbumenJ默认支持序列化tri异常
* 在https://github.com/apache/dubbo/pull/15060中通过@AlbumenJ删除注册表通知中的重复调用者
* 修复@songxiaosheng 在 https://github.com/apache/dubbo/pull/15262 中的字节编码器转换异常
* 修复 Dubbo 跟踪与 Spring WebFlux 集成时由于类型检查过于宽泛而导致的 ClassCastException。通过 @heliang666s 在 https://github.com/apache/dubbo/pull/15371

### 代码增强
相关 PR：#15136、#15203、#15208、#15205、#15222、#15231、#15241、#15272、#15236、#15327、#15264、#15325、#15307、#15324、#15289、 ＃15258，＃15338，＃15378，＃15379，＃15384，＃15394

### 依赖升级
* 更新字节伙伴版本：1.17.1 -> 1.17.5 #15199、#15269、#15285
* 更新 com.alibaba.nacos:nacos-client: 2.5.0 -> 2.5.1 #15252
* 更新 com.google.code.gson:gson: 2.12.1 -> 2.13.1 #15345
* 更新 commons-io:commons-io: 2.18.0 -> 2.19.0 #15319
* 更新 curator5_version: 5.7.1 -> 5.8.0 #15229, #15253
* 更新 grpc.version: 1.70.0 -> 1.72.0 #15224, #15331
* 更新 io.micrometer:micrometer-bom: 1.14.4 -> 1.15.0 #15246、#15314、#15399
* 更新 io.micrometer:micrometer-core: 1.14.4 -> 1.15.0 #15248、#15312、#15401
* 更新 io.micrometer:micrometer-tracing-bom: 1.4.3 -> 1.5.0 #15251、#15313、#15403
* 更新 io.netty.incubator:netty-incubator-codec-http3: 0.0.28.Final -> 0.0.29.Final #15284
* 更新 io.opentelemetry:opentelemetry-bom: 1.47.0 -> 1.50.0 #15228, #15298, #15376
* 更新 io.projectreactor:reactor-core: 3.7.3 -> 3.7.6 #15250, #15330, #15402
* 更新 io.swagger.core.v3:swagger-annotations: 2.2.28 -> 2.2.32 #15256, #15317, #15400
* 更新 io.zipkin.zipkin2:zipkin: 3.5.0 -> 3.5.1 #15343
* 更新 jackson_version: 2.18.2 -> 2.19.0 #15198, #15342
* 更新 netty4_version: 4.1.118.Final -> 4.2.1.Final #15196, #15297, #15375
* 更新 org.apache.groovy:groovy: 4.0.25 -> 4.0.26 #15195
* 更新 org.aspectj:aspectjweaver: 1.9.22.1 -> 1.9.24 #15244, #15311
* 更新 org.webjars:swagger-ui: 5.18.3 -> 5.22.0 #15197, #15249, #15300, #15344, #15409
* 更新 protobuf-java_version: 3.25.5 -> 3.25.7 #15374
* 更新 spring-6.version: 6.2.3 -> 6.2.7 #15245, #15268, #15329, #15397
* 更新 spring-boot-3.version: 3.4.3 -> 3.5.0 #15270, #15341, #15407
* 更新 swagger_version: 1.6.15 -> 1.6.16 #15398
* 更新 tomcat.version: 8.5.100 -> 10.1.41 #15227, #15310, #15396

## 贡献者
Dubbo 衷心感谢以下贡献者对此版本的贡献：
@Akshat1sharma321、@AlbumenJ、@ankitshokeen、@cnzakii、@CrazyHZM、@finefuture、@fu-shenqi、@heliang666s、@itaiit、@Lubov66、@oxsean、@PengJingzhao、@songxiaosheng、@Stellar1999、@wcy666103、@zrlw

## 新贡献者
* @Lubov66 在 https://github.com/apache/dubbo/pull/15222 中做出了第一个贡献
* @itaiit 在 https://github.com/apache/dubbo/pull/15288 中做出了第一个贡献
* @PengJingzhao 在 https://github.com/apache/dubbo/pull/15296 中做出了第一个贡献
* @fu-shenqi 在 https://github.com/apache/dubbo/pull/15324 中做出了第一个贡献
* @ankitshokeen 在 https://github.com/apache/dubbo/pull/15338 中做出了第一个贡献
* @Akshat1sharma321 在 https://github.com/apache/dubbo/pull/15394 中做出了第一个贡献

**完整变更日志**：https://github.com/apache/dubbo/compare/dubbo-3.3.4...dubbo-3.3.5

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`dubbo-3.3.5` · 📅 发布：2025-05-29 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.5)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
