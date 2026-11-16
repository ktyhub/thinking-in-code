---
title: "dubbo dubbo-3.2.13"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.2.13"
version: "dubbo-3.2.13"
published: "2024-05-24"
type: "release"
lang: "zh"
---

# dubbo dubbo-3.2.13

## 发生了什么变化

### 错误修复
* 通过 https://github.com/apache/dubbo/pull/13934 中的 @AlbumenJ 修复 NettyConnectionClient.toString 中的 NPE
* 修复https://github.com/apache/dubbo/pull/13932中通过@FoghostCn请求go server时异步方法调用ClassCastException错误
* 修复 https://github.com/apache/dubbo/pull/14012 中的 @icodening 调用 grpc 服务器的三重存根失败问题
* 使用 ExecutorService 而不是 https://github.com/apache/dubbo/pull/13904 中 @hanpen24 的 Netty 连接的事件循环
* 由 @caoyanan666 在 https://github.com/apache/dubbo/pull/14009 中修复三重 AbstractServerCallListener NPE
* 修复 https://github.com/apache/dubbo/pull/14071 中 @aofall 的 Bytebuf 资源泄漏问题
* 兼容nacos服务发现，导出https://github.com/apache/dubbo/pull/14096中@wang Chengming666注明后缀servicename
* 同步https://github.com/apache/dubbo/pull/14057中@AlbumenJ所有操作的BitList
* 通过@yuluo-yx在https://github.com/apache/dubbo/pull/14079中通过连接池修复http client
* Fox ReactorDubbo3TripleStub.mustache。通过 @caoyanan666 在 https://github.com/apache/dubbo/pull/14035 中添加架构注册表
* 通过 https://github.com/apache/dubbo/pull/14100 中的 @hanpen24 修复 NettyConnectionClient.onConnected 和 onGoaway 方法中的通道泄漏
* 通过@finefuture修复https://github.com/apache/dubbo/pull/13971中MetadataReport中多个命名空间的问题
* 修复ReactorServerCalls类的oneToOne方法在https://github.com/apache/dubbo/pull/14121中@caoyanan666结果为Mono Empty时会导致请求挂起的问题
* 修复https://github.com/apache/dubbo/pull/14156中@jkoChen使用反射访问org.springframework.core.annotation.AnnotatedElementUtils#getMergedAnnotation方法时签名错误
* 修复了 https://github.com/apache/dubbo/pull/14125 中 @caoyanan666 的三重 Reactor OneToMany Handler 空指针修复和 DubboFilter 支持
* 修复https://github.com/apache/dubbo/pull/14208中@zrlw的属性名称安全判断
* 如果https://github.com/apache/dubbo/pull/14225中的@qyi71不支持prometheus，则不初始化MetricsReporter
* 在telnet命令中添加条件->匹配serviceKey。作者：@kazetyan 在 https://github.com/apache/dubbo/pull/13869

### 代码增强
相关 PR：#13901、#13968、#14005、#14039、#14064、#14099、#14159、#14133、#14135、#14172、#14166、#14227

### 依赖升级
*更新bytebuddy.版本：1.14.12 -> 1.14.15 #14046，#14140，#14179
* 更新 ch.qos.logback:logback-core: 1.5.2 -> 1.5.6 #13899, #14110
* 更新 com.alibaba.fastjson2:fastjson2: 2.0.47 -> 2.0.49 #13989, #14087
* 更新 com.alibaba.nacos:nacos-client: 2.3.1 -> 2.3.2 #14042
* 更新 commons-io:commons-io: 2.15.1 -> 2.16.1 #14020, #14114
* 更新公共日志记录：公共日志记录：1.3.0 -> 1.3.2 #13987，#14215
*更新grpc.版本：1.62.2 -> 1.64.0 #14044，#14213
* 更新 io.micrometer:micrometer-bom: 1.12.3 -> 1.12.5 #13939#14086
* 更新 io.micrometer:micrometer-core: 1.12.3 -> 1.13.0 #13940、#14112、#14219
* 更新 io.micrometer:micrometer-tracing-bom: 1.2.3 -> 1.2.5 #13938, #14116
* 更新 io.projectreactor:reactor-core: 3.6.2 -> 3.6.6 #13941, #14111, #14212
* 更新 Jackson_version：2.16.1 -> 2.17.1 #13896、#13936、#14153
* 更新 log4j2_version: 2.23.0 -> 2.23.1 #13897
* 更新 net.bytebuddy:byte-buddy: 1.14.12 -> 1.14.15 #14018, #14142, #14184
* 更新 netty4_版本：4.1.107.Final -> 4.1.109.Final #13988、#14108
* 更新 org.apache.commons:commons-compress: 1.26.0 -> 1.26.1 #13900
* 更新 org.apache.tomcat.embed:tomcat-embed-core: 8.5.99 -> 8.5.100 #14019
* 更新 org.apache.zookeeper:zookeeper: 3.8.3 -> 3.8.4 #13930
* 更新 org.aspectj:aspectjweaver: 1.9.21.1 -> 1.9.22.1 #13937, #13991, #14181
* 更新 org.awaitility:awaitility: 4.2.0 -> 4.2.1 #13935
* 更新 org.springframework.security:spring-security-bom: 5.8.10 -> 5.8.12 #13993, #14117
* 更新 spring_version: 5.3.25 -> 5.3.35 #14041, #14109, #14211
* 更新 gson: 2.10.1 -> 2.11.0 #14224
* 更新千分尺：1.12.5 -> 1.13.0 #14228

## 贡献者
Dubbo 衷心感谢以下贡献者对此版本的贡献：
@aamingaa、@AlbumenJ、@aofall、@caoyanan666、@Chenjp、@CrazyHZM、@dependabot、@finefuture、@FoghostCn、@hanpen24、@heliang666s、@icodening、@jkoChen、@jlerbsc、@kaiyaok2、@kazetyan、@qyi71、@songxiaosheng、 @Stellar1999、@walkinggo、@wang Chengming666、@wcy666103、@yuluo-yx、@zrlw

## 新贡献者
* @jlerbsc 在 https://github.com/apache/dubbo/pull/14005 中做出了第一个贡献
* @hanpen24 在 https://github.com/apache/dubbo/pull/13904 中做出了第一个贡献
* @caoyanan666 在 https://github.com/apache/dubbo/pull/14009 中做出了第一个贡献
* @heliang666s 在 https://github.com/apache/dubbo/pull/14039 中做出了第一个贡献
* @Chenjp 在 https://github.com/apache/dubbo/pull/14064 中做出了第一个贡献
* @jkoChen 在 https://github.com/apache/dubbo/pull/14156 中做出了第一个贡献
* @walkinggo 在 https://github.com/apache/dubbo/pull/14166 中做出了第一个贡献
* @qyi71 在 https://github.com/apache/dubbo/pull/14225 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/dubbo/compare/3.2.12...dubbo-3.2.13

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`dubbo-3.2.13` · 📅 发布：2024-05-24 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/dubbo-3.2.13)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
