---
title: "dubbo 3.3.7"
description: "Apache Dubbo 的 java 实现。 RPC 和微服务框架。"
summary: "Apache Dubbo 的 java 实现。 RPC 和微服务框架。"
---

# dubbo 3.3.7

### dubbo 是什么

Apache Dubbo 的 java 实现。 RPC 和微服务框架。

### dubbo 3.3.7 版本更新了什么

## 发生了什么变化
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15689 中将 spring-6.version 从 6.2.8 升级到 6.2.11
* [3.3] https://github.com/apache/dubbo/pull/15709中@zrlw添加dubbo springboot3依赖检查器自动配置
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15723 中将 org.springframework:spring-core 从 6.2.8 升级到 6.2.11
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15692 中将 io.projectreactor:reactor-core 从 3.7.6 升级到 3.7.11
* @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15691 中将 io.micrometer:micrometer-core 从 1.15.0 提升到 1.15.4
* https://github.com/apache/dubbo/pull/15727中@zrlw将ZK和nacos服务器的ubuntu测试系统降级到22.04
* feat(registry): 支持选项，是否在https://github.com/apache/dubbo/pull/15594中通过@fantiq检查连接状态
* @RainYuY 在 https://github.com/apache/dubbo/pull/15406 中集成 Dubbo MCP
* 修复 https://github.com/apache/dubbo/pull/15740 中默认序列化中不一致的 writeEvent/readEvent（修复#15737）
* 壮举：通过 @redoom 在 https://github.com/apache/dubbo/pull/15754 中添加 JDK 25 支持
* 修复：稳定 `JsonUtilsTest.consistentTest` 以防止 https://github.com/apache/dubbo/pull/15746 中 @Anshul-creator 的非 Dex 不确定性
* 通过 @RainYuY 在 https://github.com/apache/dubbo/pull/15763 中修复/mcp sse 内容类型和端点
* 修复：稳定 `ServiceDefinitionBuilderTest.testBuilderComplexObject` 以防止 https://github.com/apache/dubbo/pull/15759 中 @Anshul-creator 的非 Dex 不确定性
* 修复：稳定 `ConfigManagerTest.testGetConfigByIdOrName` 以防止 https://github.com/apache/dubbo/pull/15758 中 @Anshul-creator 的非 Dex 不确定性
* 修复：通过 https://github.com/apache/dubbo/pull/15757 中的 @Anshul-creator 稳定 `URLParam.hashCode()` 以防止 `URLTest.testHashcode` 中的非 Dex 不确定性
* 修复：JDK 25 Netty EventLoopGroup 创建并忽略 https://github.com/apache/dubbo/pull/15764 中 @redoom 的不安全警告
* 修复问题 #15698 通过 https://github.com/apache/dubbo/pull/15738 中的 @qxggg 区分 DefaultFuture 中的超时和任务拒绝
* 由 @oxsean 在 https://github.com/apache/dubbo/pull/15770 中更新到 3.3.7-SNAPSHOT
* 修复：线程安全RegistryDirectory by @flyforeverth in https://github.com/apache/dubbo/pull/15775
* 通过禁用指标初始化来稳定 `MethodConfigTest`，以避免 https://github.com/apache/dubbo/pull/15782 中 @Anshul-creator 的微米不确定性
* 修复：https://github.com/apache/dubbo/pull/15784 中 @renyuweighub 重启调用者应用后，接口级超时和重试配置失效
* 修复：通过在 https://github.com/apache/dubbo/pull/15778 中 @Anshul-creator 导出 URL 期间禁用指标初始化来稳定 `ExporterSideConfigUrlTest`
* 修复：通过 https://github.com/apache/dubbo/pull/15785 中的 @Anshul-creator 隔离系统属性和缓存状态，稳定 `ServiceConfigTest` 中的多个测试
* 修复：通过 @Anshul-creator 在 https://github.com/apache/dubbo/pull/15777 中稳定 `RestProtocolTest.groovy` 中的 `"map argument body test"` 和 `"advance bean argument get test"`
* 修复：通过使用https://github.com/apache/dubbo/pull/15776中的@Anshul-creator的基线差异过滤子`sleep 60`进程来稳定`XmlSafetyTest`
* HttpPostRequestDecoder 需要被销毁。通过 @RainYuY 在 https://github.com/apache/dubbo/pull/15788
* 在https://github.com/apache/dubbo/pull/15781中添加@RainYuY的maxMessageSize配置
* 文档：将 3.3.6 版本亮点添加到 https://github.com/apache/dubbo/pull/15772 中 @redoom 的 README
* 修复：通过在 https://github.com/apache/dubbo/pull/15794 中禁用指标初始化并确保 @Anshul-creator 的测试隔离来稳定 `ReferenceCacheTest`
* 修复：通过在 https://github.com/apache/dubbo/pull/15793 中禁用指标初始化并确保 @Anshul-creator 的测试隔离来稳定 `DubboBootstrapTest`
* 修复：通过在 https://github.com/apache/dubbo/pull/15792 中禁用指标初始化并确保 @Anshul-creator 的测试隔离来稳定 `ConfigCenterConfigTest`
* 修复：通过在 https://github.com/apache/dubbo/pull/15791 中禁用指标初始化并确保 @Anshul-creator 的测试隔离来稳定 `ApplicationConfigTest`
* 修复：通过在 https://github.com/apache/dubbo/pull/15790 中禁用指标初始化并确保 @Anshul-creator 的测试隔离来稳定 `ConsumerConfigTest`
* 修复：通过在 https://github.com/apache/dubbo/pull/15789 中禁用指标初始化并确保 @Anshul-creator 的测试隔离来稳定 `ProtocolConfigTest`
* 修复：通过在 https://github.com/apache/dubbo/pull/15787 中禁用指标初始化并确保 @Anshul-creator 的测试隔离来稳定 `ReferenceConfigTest`
* https://github.com/apache/dubbo/pull/15713 中的 @dependabot[bot] 将 /dubbo-dependency-bom 中的 io.grpc:grpc-netty-shaded 从 1.73.0 提升到 1.75.0
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15716 中将 org.webjars:webjars-locator-lite 从 1.0.1 升级到 1.1.2
* https://github.com/apache/dubbo/pull/15741 中的 @dependabot[bot] 将 com.alibaba.fastjson2:fastjson2 从 2.0.56 升级到 2.0.60
* 修复：通过 https://github.com/apache/dubbo/pull/15766 中的 @Anshul-creator 稳定 `ReferenceConfigTest.testSearchReferences` 以防止 `ReferenceConfigTest.testLargeReferences` 中的非 Dex 不确定性
* 修复了 https://github.com/apache/dubbo/pull/15825 中 @RainYuY 的原型复制的一些错误
* https://github.com/apache/dubbo/pull/15514 中的 @dependabot[bot] 将 tomcat.version 从 8.5.100 升级到 10.1.42
* https://github.com/apache/dubbo/pull/15506 中的 @dependabot[bot] 将 byte-buddy_version 从 1.17.5 升级到 1.17.6
* 由 https://github.com/apache/dubbo/pull/15505 中的 @dependabot[bot] 将 spring-boot-3.version 从 3.5.0 升级到 3.5.3
* https://github.com/apache/dubbo/pull/15503 中的 @dependabot[bot] 将 log4j2_version 从 2.24.3 升级到 2.25.0
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15704 中将 org.codehaus.mojo:flatten-maven-plugin 从 1.7.0 升级到 1.7.3
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15510 中将 org.testcontainers:testcontainers 从 1.21.0 升级到 1.21.3
* 由 https://github.com/apache/dubbo/pull/15817 中的 @dependabot[bot] 将 spring-security-6.version 从 6.5.1 升级到 6.5.7
* https://github.com/apache/dubbo/pull/15545 中的 @dependabot[bot] 将 junit_platform_version 从 1.13.1 升级到 1.13.3
* https://github.com/apache/dubbo/pull/15701 中的 @dependabot[bot] 将 io.opentelemetry:opentelemetry-bom 从 1.50.0 提升到 1.54.1
* https://github.com/apache/dubbo/pull/15773 中的 @dependabot[bot] 将 /dubbo-dependencies-bom 中的 com.squareup.okhttp3:okhttp 从 3.14.9 升级到 4.9.2
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15703 中将 org.codehaus.mojo:license-maven-plugin 从 2.5.0 升级到 2.7.0
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15441 中将 org.codehaus.mojo:build-helper-maven-plugin 从 3.6.0 升级到 3.6.1
* https://github.com/apache/dubbo/pull/15816 中的 @dependabot[bot] 将 junit_jupiter_version 从 5.12.2 升级到 5.14.1
* @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15815 中将 spring-6.version 从 6.2.11 升级到 6.2.14
* @RainYuY 在 https://github.com/apache/dubbo/pull/15823 中将 hessian-lite 从 4.0.4 提升到 4.0.5
* https://github.com/apache/dubbo/pull/15507 中的 @dependabot[bot] 将 jackson_version 从 2.19.0 升级到 2.19.1
* https://github.com/apache/dubbo/pull/15538 中的 @dependabot[bot] 将 /dubbo-dependencies-bom 中的 org.apache.commons:commons-lang3 从 3.17.0 升级到 3.18.0
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15478 中将 io.swagger.core.v3:swagger-annotations 从 2.2.32 升级到 2.2.34
* 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15729 中将 org.apache.maven.plugins:maven-compiler-plugin 从 3.14.0 升级到 3.14.1
* 将 org.hibernate:hibernate-validator 从 5.4.3.Final 升级到 6.2.0.Final，由 https://github.com/apache/dubbo/pull/15811 中的 @dependabot[bot] 在 /dubbo-dependencies-bom 中实现
* [3.3] 将validation-api升级到2.0.1.Final并使用ParameterMessageInterpolator作为https://github.com/apache/dubbo/pull/15830中@zrlw的默认ValidatorFactory的消息插值器
* 将CONVERT_NO_LOWER_HEADER设置为true，使其与初始值保持一致，避免误解。通过 @RainYuY 在 https://github.com/apache/dubbo/pull/15831
* https://github.com/apache/dubbo/pull/15870 中的 @dependabot[bot] 将 log4j2_version 从 2.25.0 升级到 2.25.2
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15869 中将 com.google.code.gson:gson 从 2.13.1 升级到 2.13.2
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15868 中将 org.webjars:redoc 从 2.3.0 升级到 2.5.1
* https://github.com/apache/dubbo/pull/15866 中的 @dependabot[bot] 将 okhttp_version 从 4.9.2 升级到 4.12.0
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15865 中将 io.micrometer:micrometer-bom 从 1.15.1 提升到 1.16.1
* @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15864 中将 bouncycastle-bcprov_version 从 1.81 提升到 1.83
* 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15863 中将 org.apache.maven.plugins:maven-shade-plugin 从 3.6.0 升级到 3.6.1
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15861 中将 org.yaml:snakeyaml 从 2.4 提升到 2.5
* 由 https://github.com/apache/dubbo/pull/15859 中的 @dependabot[bot] 将 spring-6.version 从 6.2.14 升级到 6.2.15
* 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15860 中将 org.apache.maven.plugins:maven-source-plugin 从 3.3.1 升级到 3.4.0
* 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15858 中将 org.apache.maven.plugins:maven-enforcer-plugin 从 3.6.0 升级到 3.6.2
* 由 https://github.com/apache/dubbo/pull/15853 中的 @dependabot[bot] 将 spring-boot-3.version 从 3.5.3 升级到 3.5.8
* https://github.com/apache/dubbo/pull/15856 中的 @dependabot[bot] 将 tomcat.version 从 8.5.100 升级到 10.1.50
* https://github.com/apache/dubbo/pull/15852 中的 @dependabot[bot] 将 grpc.version 从 1.75.0 升级到 1.77.0
* https://github.com/apache/dubbo/pull/15855 中的 @dependabot[bot] 将 junit_platform_version 从 1.13.3 升级到 1.14.1
* 修复：通过在 https://github.com/apache/dubbo/pull/15819 中禁用指标初始化并确保 @Anshul-creator 的测试隔离来稳定 `dubbo-config-spring` 测试
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15862 中将 commons-io:commons-io 从 2.19.0 升级到 2.21.0
* 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15854 中将 org.apache.maven.plugins:maven-release-plugin 从 3.1.1 升级到 3.3.1
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15867 中将 org.apache.commons:commons-exec 从 1.5.0 升级到 1.6.0
* 修复（nacos）：通过https://github.com/apache/dubbo/pull/15872中的@ShauryaChauhan1411将应用程序密钥添加到消费者订阅URL
* 修复：通过 https://github.com/apache/dubbo/pull/15828 中的 @Anshul-creator 禁用指标初始化并确保测试隔离来稳定 `dubbo-config-spring` 参考相关测试
* 修复：通过 @Anshul-creator 在 https://github.com/apache/dubbo/pull/15849 中稳定 REST 协议测试中的地图顺序断言
* 修复：在 https://github.com/apache/dubbo/pull/15848 中由 @Anshul-creator 在 NonDex 下稳定 `GenericServiceTest.testGenericComplexCompute4FullServiceMetadata`
* @LJQHDL在https://github.com/apache/dubbo/pull/15879中元数据-api测试单元测试修改
* https://github.com/apache/dubbo/pull/15885 中的 @dependabot[bot] 将 /dubbo-dependency-bom 中的 org.apache.logging.log4j:log4j-core 从 2.25.2 升级到 2.25.3
* @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15912 中将 org.openjdk.nashorn:nashorn-core 从 15.6 提升到 15.7
* @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15911 中将 io.projectreactor:reactor-core 从 3.7.11 升级到 3.8.1
* https://github.com/apache/dubbo/pull/15910 中的 @dependabot[bot] 将 org.apache.commons:commons-lang3 从 3.18.0 升级到 3.20.0
* https://github.com/apache/dubbo/pull/15909 中的 @dependabot[bot] 将 curator_version 从 4.2.0 升级到 5.9.0
* https://github.com/apache/dubbo/pull/15894 中的 @dependabot[bot] 将 netty4_version 从 4.2.2.Final 升级到 4.2.9.Final
* https://github.com/apache/dubbo/pull/15898 中的 @dependabot[bot] 将 junit_jupiter_version 从 5.12.2 升级到 5.14.1
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15896 中将 org.apache.maven.plugins:maven-plugin-plugin 从 3.15.1 升级到 3.15.2
* 由 https://github.com/apache/dubbo/pull/15893 中的 @dependabot[bot] 将 spring-boot-3.version 从 3.5.8 升级到 3.5.9
* @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15908 中将 io.micrometer:micrometer-core 从 1.15.4 提升到 1.16.1
* https://github.com/apache/dubbo/pull/15906 中的 @dependabot[bot] 将 byte-buddy_version 从 1.17.6 升级到 1.18.3
* https://github.com/apache/dubbo/pull/15902 中的 @dependabot[bot] 将 log4j2_version 从 2.25.2 升级到 2.25.3
* 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15900 中将 commons-codec:commons-codec 从 1.18.0 升级到 1.20.0
* 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15905 中将 io.opentelemetry:opentelemetry-bom 从 1.54.1 提升到 1.57.0
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15903 中将 org.xerial.snappy:snappy-java 从 1.1.10.7 升级到 1.1.10.8
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15895 中将 org.apache.maven:maven-core 从 3.9.10 升级到 3.9.12
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15904 中将 io.micrometer:micrometer-tracing-bom 从 1.5.1 升级到 1.6.1
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15897 将 jetty_version 从 9.4.57.v20241219 升级到 9.4.58.v20250814
* 修复：通过 https://github.com/apache/dubbo/pull/15846 中的 @Anshul-creator 禁用指标初始化并确保测试隔离来稳定剩余的异常值 `dubbo-config-spring` 测试
* https://github.com/apache/dubbo/pull/15901 中的 @dependabot[bot] 将 com.alibaba.nacos:nacos-client 从 2.5.1 升级到 2.5.2
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15899 中将 org.apache.groovy:groovy 从 4.0.27 升级到 4.0.29
*修复#15892 [Bug]泄漏：ByteBuf.release()在https://github.com/apache/dubbo/pull/15917中被@qxggg垃圾收集之前未被调用
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15955 中将 org.testcontainers:testcontainers 从 1.21.3 升级到 1.21.4
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15954 中将 org.jacoco:jacoco-maven-plugin 从 0.8.13 升级到 0.8.14
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15953 中将 org.apache.maven.plugins:maven-surefire-plugin 从 3.5.3 升级到 3.5.4
* 通过 https://github.com/apache/dubbo/pull/15951 中的 @dependabot[bot] 将 org.apache.maven.plugin-tools:maven-plugin-annotations 从 3.15.1 升级到 3.15.2
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15947 中将 com.diffplug.spotless:spotless-maven-plugin 从 2.44.5 升级到 2.46.1
* https://github.com/apache/dubbo/pull/15939 中的 @dependabot[bot] 将 grpc.version 从 1.77.0 升级到 1.78.0
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15940 中将 org.webjars:webjars-locator-lite 从 1.1.2 升级到 1.1.3
* 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15938 中将 org.apache.maven.plugins:maven-assemble-plugin 从 3.7.1 升级到 3.8.0
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15937 中将 io.swagger.core.v3:swagger-annotations 从 2.2.34 升级到 2.2.41
* 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15948 中将 org.apache.maven.plugins:maven-antrun-plugin 从 3.1.0 升级到 3.2.0
* 通过 https://github.com/apache/dubbo/pull/15949 中的 @dependabot[bot] 将 org.springframework.security:spring-security-oauth2-authorization-server 从 1.5.1 升级到 1.5.5
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15944 中将 org.webjars:swagger-ui 从 5.22.0 升级到 5.31.0
* 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15950 中将 org.apache.maven.plugins:maven-jar-plugin 从 3.4.2 升级到 3.5.0
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15946 中将 org.apache.maven:maven-plugin-api 从 3.9.10 升级到 3.9.12
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15945 中将 org.apache.commons:commons-compress 从 1.27.1 升级到 1.28.0
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15942 中将 io.smallrye.reactive:mutiny 从 2.9.0 提升到 2.9.5
* https://github.com/apache/dubbo/pull/15941 中的 @dependabot[bot] 将 jakarta.xml.bind:jakarta.xml.bind-api 从 4.0.2 升级到 4.0.4
* 导入 jackson 2.20.1 pom 以简化 @zrlw 在 https://github.com/apache/dubbo/pull/15960 中碰撞 jackson 组件的依赖关系
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15943 中将 org.aspectj:aspectjweaver 从 1.9.24 升级到 1.9.25.1
* 在https://github.com/apache/dubbo/pull/15957中支持@EarthChen的Tri backpress
* 统一优雅关机接口，在https://github.com/apache/dubbo/pull/15926中添加@EarthChen的Triple支持
* 通过 https://github.com/apache/dubbo/pull/15966 中的 @dependabot[bot] 将 org.apache.maven.plugins:maven-javadoc-plugin 从 3.11.2 升级到 3.12.0
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15965 中将 org.hibernate:hibernate-validator 从 6.2.0.Final 升级到 6.2.5.Final
* 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15964 中将 org.codehaus.mojo:license-maven-plugin 从 2.7.0 升级到 2.7.1
* 修复：通过 https://github.com/apache/dubbo/pull/15845 中的 @Anshul-creator 禁用指标初始化并确保测试隔离来稳定 `dubbo-config-spring` 启动相关测试
* [PR] #15935 增强 NetUtils IPv6 处理和测试覆盖率（@krrishmahar 在 https://github.com/apache/dubbo/pull/15974 中）
* Tri 背压由 @EarthChen 在 https://github.com/apache/dubbo/pull/15967 中提供
* 通过 @RainYuY 在 https://github.com/apache/dubbo/pull/15977 中的复制演示复选框增强错误模板
* 修复/标题 cookie 由 @RainYuY 在 https://github.com/apache/dubbo/pull/15985 中获取
* 修复(集群): 服务商发布期间，https://github.com/apache/dubbo/pull/15883中消费者并发读路由被@vqianxiao拒绝
* [PR] #15935 通过 @shivvani-r 在 https://github.com/apache/dubbo/pull/15986 中增强 NetUtils 测试覆盖范围和边界
* [PR] #15969 修复：在 https://github.com/apache/dubbo/pull/15984 中的@shivvani-r 在固定线程池中使用无界队列时添加警告日志
* 修复：https://github.com/apache/dubbo/pull/15987 中 @luxiao0000 的 AbstractMetadataReport MemoryOverflow
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/15994 中将 io.opentelemetry:opentelemetry-bom 从 1.57.0 提升到 1.58.0
* build(deps)：通过https://github.com/apache/dubbo/pull/15993中的@dependabot[bot]将spock_version从2.3-groovy-4.0提升到2.4-groovy-4.0
* build(deps): 由https://github.com/apache/dubbo/pull/15992中的@dependabot[bot]将sentinel.version从1.8.8提升到1.8.9
* build(deps)：通过https://github.com/apache/dubbo/pull/15989中的@dependabot[bot]将junit_jupiter_version从5.14.1提升到5.14.2
* 构建（deps-dev）：https://github.com/apache/dubbo/pull/15990 中的 @dependabot[bot] 将 junit_platform_version 从 1.14.1 提升到 1.14.2
* [PR] #15988 修复：清除finally块中的SecurityContext以防止https://github.com/apache/dubbo/pull/15997中@shivvani-r的线程污染
* 在https://github.com/apache/dubbo/pull/16001中通过@LI123456mo在dubbo-common中添加PathUtils的单元测试
* 修复：通过 https://github.com/apache/dubbo/pull/15844 中的 @Anshul-creator 禁用指标初始化并确保测试隔离，稳定 `dubbo-config-spring` 剩余的参考和模式相关测试
* 修复：通过 https://github.com/apache/dubbo/pull/15841 中的 @Anshul-creator 禁用指标初始化并确保测试隔离来稳定 `dubbo-config-spring` 属性配置器相关测试
* 修复：通过 https://github.com/apache/dubbo/pull/15840 中的 @Anshul-creator 禁用指标初始化并确保测试隔离来稳定更多与 `dubbo-config-spring` 参考相关的测试
* 修复：通过 https://github.com/apache/dubbo/pull/15835 中的 @Anshul-creator 禁用指标初始化并确保测试隔离来稳定 `dubbo-config-spring` 上下文相关测试
* 修复：通过 https://github.com/apache/dubbo/pull/15834 中的 @Anshul-creator 禁用指标初始化并确保测试隔离来稳定 `dubbo-config-spring` beans 相关测试
* 修复：通过在 https://github.com/apache/dubbo/pull/15833 中禁用指标初始化并确保 @Anshul-creator 的测试隔离来稳定与 `dubbo-config-spring` 问题相关的测试
* 由 @EarthChen 在 https://github.com/apache/dubbo/pull/16004 中修复三背压竞争条件
* 在https://github.com/apache/dubbo/pull/15983中选择@EarthChen的三重远程流量控制器
* [3.3] 在ReferenceBeanManager#prepareReferenceBeans方法中获取moduleModel以避免@zrlw在https://github.com/apache/dubbo/pull/15769中得到null结果
* https://github.com/apache/dubbo/pull/16006中的@LI123456mo在dubbo-common中添加MethodComparator的单元测试
* 由 @EarthChen 在 https://github.com/apache/dubbo/pull/16014 中修复三重流未来 npe
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16018 中将 com.fasterxml.jackson:jackson-bom 从 2.20.1 提升到 2.21.0
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16020 中将 io.micrometer:micrometer-tracing-bom 从 1.6.1 提升到 1.6.2
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16019 中将 io.micrometer:micrometer-core 从 1.16.1 提升到 1.16.2
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16016 中将 io.micrometer:micrometer-bom 从 1.16.1 提升到 1.16.2
* build(deps-dev): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16015 中将 io.projectreactor:reactor-core 从 3.8.1 提升到 3.8.2
* build(deps)：通过 https://github.com/apache/dubbo/pull/16017 中的 @dependabot[bot] 将 byte-buddy_version 从 1.18.3 提升到 1.18.4
* 重构：通过 @EarthChen 在 https://github.com/apache/dubbo/pull/16028 中的字节跟踪增强背压处理
* 修复https://github.com/apache/dubbo/pull/16034中@funky-eyes在ZooKeeper注册表中导致预预热失败的时间戳过滤
* 修复@EarthChen 在 https://github.com/apache/dubbo/pull/16039 中的初始化流竞赛
* 将 protobuf-java 从 3.25.8 升级到 4.33.4，并通过 @zrlw 在 https://github.com/apache/dubbo/pull/16026 中用 java.nio.charset.StandardCharsets 重写 CodecTest 来删除 guava 依赖
* 将 dubbo-security 的 protobuf-java,grpc 升级到 @zrlw 在 https://github.com/apache/dubbo/pull/16044 中的最新版本
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16052 中将 io.swagger.core.v3:swagger-annotations 从 2.2.41 提升到 2.2.42
* build(deps)：通过 https://github.com/apache/dubbo/pull/16050 中的 @dependabot[bot] 将 spring-boot-3.version 从 3.5.9 升级到 3.5.10
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16049 中将 org.apache.groovy:groovy 从 4.0.29 升级到 4.0.30
* Dubbo注册表多次删除dubbo测试常见@wxt1222在https://github.com/apache/dubbo/pull/16031
* 修复（集群）：在https://github.com/apache/dubbo/pull/15876中支持@heliang666s的广播和通配符标签路由
* 修复 LRUCache 和 LRU2Cache，以在 https://github.com/apache/dubbo/pull/16053 中最大容量减少 @SURYAS1306 时修剪条目
* 完成了问题 12517，实现了 otlp 配置的新模块，并使用 @manasagar 在 https://github.com/apache/dubbo/pull/16023 中的模拟服务器测试检查 jvm 指标导出
* 壮举：通过 @funky-eyes 在 https://github.com/apache/dubbo/pull/16055 中增强 VirtualThreadPool 的可配置最小线程数
* 通过 @jamespud 在 https://github.com/apache/dubbo/pull/16027 中优化 NettyBackedChannelBuffer 以实现直接缓冲区传输
* build(deps): 通过 https://github.com/apache/dubbo/pull/16066 中的 @dependabot[bot] 将 org.apache.maven.plugins:maven-compiler-plugin 从 3.14.1 升级到 3.15.0
* build(deps)：通过 https://github.com/apache/dubbo/pull/16065 中的 @dependabot[bot] 将 commons-codec:commons-codec 从 1.20.0 提升到 1.21.0
* build(deps)：https://github.com/apache/dubbo/pull/16064 中的 @dependabot[bot] 将 protobuf-java_version 从 4.33.4 提升到 4.33.5
* https://github.com/apache/dubbo/pull/16041中的@EarthChen统一了Triple协议的客户端和服务器端的解帧器
* @EarthChen 在 https://github.com/apache/dubbo/pull/16045 中重构 tri pack 和 unpack 使用流
* build(deps)：通过 https://github.com/apache/dubbo/pull/16076 中的 @dependabot[bot] 将 io.opentelemetry:opentelemetry-bom 从 1.58.0 提升到 1.59.0
* 构建（deps）：https://github.com/apache/dubbo/pull/16077 中的 @dependabot[bot] 将 grpc.version 从 1.78.0 提升到 1.79.0
* build(deps): 由 https://github.com/apache/dubbo/pull/16078 中的 @dependabot[bot] 将 tomcat.version 从 8.5.100 提升到 10.1.52
* 构建（deps）：https://github.com/apache/dubbo/pull/16079 中的 @dependabot[bot] 将 netty4_version 从 4.2.9.Final 提升到 4.2.10.Final
* 构建（deps）：https://github.com/apache/dubbo/pull/16081 中的 @dependabot[bot] 将 jakarta.xml.bind:jakarta.xml.bind-api 从 4.0.4 提升到 4.0.5
* 修复：删除https://github.com/apache/dubbo/pull/16082中@Zjianru在ConfigValidationUtils中不必要的密码模式检查
* [#16098] 通过 @DocJlm 在 https://github.com/apache/dubbo/pull/16097 中修复 ConfigUtils 中的资源泄漏并提高代码质量
* build(deps-dev): 通过 https://github.com/apache/dubbo/pull/16107 中的 @dependabot[bot] 将 com.ctrip.framework.apollo:apollo-mockserver 从 2.4.0 升级到 2.5.0
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16106 中将 org.webjars:swagger-ui 从 5.31.0 提升到 5.31.2
* build(deps)：通过 https://github.com/apache/dubbo/pull/16105 中的 @dependabot[bot] 将 com.fasterxml.jackson:jackson-bom 从 2.21.0 提升到 2.21.1
* build(deps)：通过 https://github.com/apache/dubbo/pull/16102 中的 @dependabot[bot] 将 org.apache.maven.plugins:maven-surefire-plugin 从 3.5.4 升级到 3.5.5
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16100 中将 com.ctrip.framework.apollo:apollo-client 从 2.4.0 升级到 2.5.0
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16095 中将 io.micrometer:micrometer-core 从 1.16.2 提升到 1.16.3
* build(deps-dev): 通过 https://github.com/apache/dubbo/pull/16094 中的 @dependabot[bot] 将 io.projectreactor:reactor-core 从 3.8.2 提升到 3.8.3
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16092 中将 io.micrometer:micrometer-tracing-bom 从 1.6.2 提升到 1.6.3
* 构建（deps）：通过 https://github.com/apache/dubbo/pull/16090 中的 @dependabot[bot] 将 io.micrometer:micrometer-bom 从 1.16.2 提升到 1.16.3
* build(deps): 通过 https://github.com/apache/dubbo/pull/16101 中的 @dependabot[bot] 将 org.springframework.security:spring-security-oauth2-authorization-server 从 1.5.5 升级到 1.5.6
* build(deps)：通过 https://github.com/apache/dubbo/pull/16099 中的 @dependabot[bot] 将 spring-boot-3.version 从 3.5.10 升级到 3.5.11
* 构建（deps-dev）：https://github.com/apache/dubbo/pull/16093 中的 @dependabot[bot] 将 junit_platform_version 从 1.14.2 提升到 1.14.3
* build(deps): 通过 https://github.com/apache/dubbo/pull/16088 中的 @dependabot[bot] 将 byte-buddy_version 从 1.18.4 提升到 1.18.5
* build(deps)：通过 https://github.com/apache/dubbo/pull/16087 中的 @dependabot[bot] 将 spring-6.version 从 6.2.15 升级到 6.2.16
* 构建（deps-dev）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16113 中将 org.yaml:snakeyaml 从 2.5 提升到 2.6
* build(deps): 通过 https://github.com/apache/dubbo/pull/16112 中的 @dependabot[bot] 将 byte-buddy_version 从 1.18.5 提升到 1.18.7
* build(deps)：https://github.com/apache/dubbo/pull/16091 中的 @dependabot[bot] 将 junit_jupiter_version 从 5.14.2 提升到 5.14.3
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16104 中将 io.swagger.core.v3:swagger-annotations 从 2.2.42 提升到 2.2.43
* build(deps)：通过 https://github.com/apache/dubbo/pull/16089 中的 @dependabot[bot] 将 spring-security-6.version 从 6.5.7 升级到 6.5.8
* build(deps): 通过 https://github.com/apache/dubbo/pull/16096 中的 @dependabot[bot] 将 /dubbo-dependency-bom 中的 org.apache.tomcat.embed:tomcat-embed-core 从 8.5.100 提升到 9.0.112
* build(deps)：通过 https://github.com/apache/dubbo/pull/16125 中的 @dependabot[bot] 将 commons-logging:commons-logging 从 1.3.5 提升到 1.3.6
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16124 中将 org.apache.maven.plugins:maven-shade-plugin 从 3.6.1 升级到 3.6.2
* build(deps): 通过 https://github.com/apache/dubbo/pull/16122 中的 @dependabot[bot] 将 org.apache.maven:maven-plugin-api 从 3.9.12 升级到 3.9.13
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16120 中将 io.swagger.core.v3:swagger-annotations 从 2.2.43 提升到 2.2.44
* build(deps-dev): 通过 https://github.com/apache/dubbo/pull/16143 中的 @dependabot[bot] 将 io.projectreactor:reactor-core 从 3.8.3 提升到 3.8.4
* build(deps): 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16142 中将 org.apache.maven:maven-core 从 3.9.12 升级到 3.9.14
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16141 中将 org.apache.maven:maven-plugin-api 从 3.9.13 升级到 3.9.14
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16140 中将 io.micrometer:micrometer-core 从 1.16.3 提升到 1.16.4
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16139 中将 io.micrometer:micrometer-bom 从 1.16.3 提升到 1.16.4
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16138 中将 io.swagger.core.v3:swagger-annotations 从 2.2.44 提升到 2.2.45
* build(deps)：通过 https://github.com/apache/dubbo/pull/16136 中的 @dependabot[bot] 将 spring-6.version 从 6.2.16 升级到 6.2.17
* build(deps): 将 org.apache.tomcat.embed:tomcat-embed-core 从 /dubbo-dependency-bom 中的 9.0.112 提升到 9.0.113，由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16127 中
* build(deps)：https://github.com/apache/dubbo/pull/16114 中的 @dependabot[bot] 将 protobuf-java_version 从 4.33.4 提升到 4.34.0
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16137 中将 io.micrometer:micrometer-tracing-bom 从 1.6.3 提升到 1.6.4
* build(deps)：通过 https://github.com/apache/dubbo/pull/16119 中的 @dependabot[bot] 将 io.opentelemetry:opentelemetry-bom 从 1.59.0 提升到 1.60.1
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16115 中将 org.webjars:swagger-ui 从 5.31.2 升级到 5.32.0
* 从构建工作流程中删除本机图像检查作业，因为 https://github.com/apache/dubbo/pull/16166 中的 @zrlw 不再允许操作 setup-graalvm
* build(deps)：通过 https://github.com/apache/dubbo/pull/16163 中的 @dependabot[bot] 将 com.fasterxml.jackson:jackson-bom 从 2.21.1 提升到 2.21.2
* build(deps)：通过 https://github.com/apache/dubbo/pull/16162 中的 @dependabot[bot] 将 com.alibaba.fastjson2:fastjson2 从 2.0.60 提升到 2.0.61
* build(deps)：https://github.com/apache/dubbo/pull/16161 中的 @dependabot[bot] 将 protobuf-java_version 从 4.33.4 提升到 4.34.1
* build(deps)：通过 https://github.com/apache/dubbo/pull/16160 中的 @dependabot[bot] 将 spring-security-6.version 从 6.5.8 升级到 6.5.9
* build(deps): 通过 https://github.com/apache/dubbo/pull/16159 中的 @dependabot[bot] 将 grpc.version 从 1.79.0 提升到 1.80.0
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16158 中将 org.webjars:swagger-ui 从 5.32.0 升级到 5.32.1
* build(deps): 将 org.apache.tomcat.embed:tomcat-embed-core 从 /dubbo-dependency-bom 中的 9.0.113 提升到 9.0.115，由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16147 中
* 通过 https://github.com/apache/dubbo/pull/16196 中的 @RainYuY 将 netty4_version 更新为 4.2.12.Final
* build(deps): 将 org.apache.logging.log4j:log4j-core 从 2.25.3 提升到 2.25.4，由 https://github.com/apache/dubbo/pull/16204 中的 @dependabot[bot] 在 /dubbo-dependencies-bom 中实现
* 构建（deps）：通过 https://github.com/apache/dubbo/pull/16229 中的 @dependabot[bot] 将 org.javassist:javassist 从 3.30.2-GA 升级到 3.31.0-GA
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16227 中将 org.apache.maven:maven-plugin-api 从 3.9.14 升级到 3.9.15
* build(deps): 通过 https://github.com/apache/dubbo/pull/16228 中的 @dependabot[bot] 将 org.asynchttpclient:async-http-client 从 2.12.4 提升到 2.14.5
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16226 中将 org.apache.maven:maven-core 从 3.9.14 升级到 3.9.15
* build(deps-dev): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16225 中将 io.projectreactor:reactor-core 从 3.8.4 提升到 3.8.5
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16224 中将 io.micrometer:micrometer-tracing-bom 从 1.6.4 提升到 1.6.5
* build(deps)：https://github.com/apache/dubbo/pull/16223 中的 @dependabot[bot] 将 bouncycastle-bcprov_version 从 1.83 提升到 1.84
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16221 中将 io.micrometer:micrometer-bom 从 1.16.4 提升到 1.16.5
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16220 中将 org.webjars:swagger-ui 从 5.32.1 升级到 5.32.4
* 壮举：在 https://github.com/apache/dubbo/pull/16132 中支持 @SavitarC 的旧版和新的普罗米修斯客户端堆栈
* 在https://github.com/apache/dubbo/pull/16234中通过@zrlw运行AbstractServiceDiscoveryFactoryTest后重置ApplicationModel
*修复：在dumpAllThreads中禁用lockedSynchronizers以避免https://github.com/apache/dubbo/pull/16195中@eddieran进行ZGC安全点堆扫描
* 构建（deps）：由 https://github.com/apache/dubbo/pull/16219 中的 @dependabot[bot] 将 spring-6.version 从 6.2.17 升级到 6.2.18
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16184 中将 org.apache.groovy:groovy 从 4.0.30 升级到 4.0.31
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16222 中将 io.swagger.core.v3:swagger-annotations 从 2.2.45 提升到 2.2.48
* 构建（deps）：通过 https://github.com/apache/dubbo/pull/16215 中的 @dependabot[bot] 将 /dubbo-dependency-bom 中的 org.bouncycastle:bcpkix-jdk18on 从 1.83 提升到 1.84
* build(deps): 由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16210 中将 io.zipkin.zipkin2:zipkin 从 3.5.1 升级到 3.6.1
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16206 中将 io.opentelemetry:opentelemetry-bom 从 1.60.1 提升到 1.61.0
* build(deps): 将 org.apache.tomcat.embed:tomcat-embed-core 从 /dubbo-dependency-bom 中的 9.0.115 提升到 9.0.117，由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16203 中
* build(deps): 通过 https://github.com/apache/dubbo/pull/16192 中的 @dependabot[bot] 将 byte-buddy_version 从 1.18.7 提升到 1.18.8
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16189 中将 org.codehaus.plexus:plexus-utils 从 3.6.0 升级到 3.6.1
* build(deps)：https://github.com/apache/dubbo/pull/16181 中的 @dependabot[bot] 将 log4j2_version 从 2.25.3 提升到 2.25.4
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16151 中将 org.springframework.boot:spring-boot-starter-actuator 从 3.5.11 升级到 3.5.12
* build(deps): 由 https://github.com/apache/dubbo/pull/16183 中的 @dependabot[bot] 将 io.zipkin.reporter2:zipkin-reporter-bom 从 3.5.1 提升到 3.5.3
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16246 中将 io.micrometer:micrometer-core 从 1.16.4 提升到 1.16.5
* build(deps)：通过 https://github.com/apache/dubbo/pull/16245 中的 @dependabot[bot] 将 commons-io:commons-io 从 2.21.0 提升到 2.22.0
* 构建（deps-dev）：https://github.com/apache/dubbo/pull/16244 中的 @dependabot[bot] 将 junit_platform_version 从 1.14.3 提升到 1.14.4
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16242 中将 com.google.code.gson:gson 从 2.13.2 提升到 2.14.0
* build(deps)：https://github.com/apache/dubbo/pull/16240 中的 @dependabot[bot] 将 prometheus_metrics.version 从 1.5.0 升级到 1.5.1
* build(deps)：通过 https://github.com/apache/dubbo/pull/16239 中的 @dependabot[bot] 将 org.springframework.security:spring-security-oauth2-authorization-server 从 1.5.6 升级到 1.5.7
* 构建（deps）：https://github.com/apache/dubbo/pull/16238 中的 @dependabot[bot] 将 spring-boot-3.version 从 3.5.12 升级到 3.5.14
* build(deps)：通过 https://github.com/apache/dubbo/pull/16243 中的 @dependabot[bot] 将 commons-codec:commons-codec 从 1.21.0 提升到 1.22.0
* build(deps)：https://github.com/apache/dubbo/pull/16241 中的 @dependabot[bot] 将 junit_jupiter_version 从 5.14.3 提升到 5.14.4
* build(deps)：通过 https://github.com/apache/dubbo/pull/16237 中的 @dependabot[bot] 将 spring-security-6.version 从 6.5.9 升级到 6.5.10
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16266 中将 org.apache.groovy:groovy 从 4.0.31 升级到 4.0.32
* 构建（deps）：https://github.com/apache/dubbo/pull/16264 中的 @dependabot[bot] 将 netty4_version 从 4.2.12.Final 提升到 4.2.13.Final
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16263 中将 io.opentelemetry:opentelemetry-bom 从 1.61.0 提升到 1.62.0
* build(deps)：https://github.com/apache/dubbo/pull/16260 中的 @dependabot[bot] 将 log4j2_version 从 2.25.4 提升到 2.26.0
* build(deps): 由 https://github.com/apache/dubbo/pull/16261 中的 @dependabot[bot] 将 com.alibaba.fastjson2:fastjson2 从 2.0.61 提升到 2.0.62
* build(deps)：通过 https://github.com/apache/dubbo/pull/16254 中的 @dependabot[bot] 将 com.fasterxml.jackson:jackson-bom 从 2.21.2 提升到 2.21.3
* 构建（deps）：https://github.com/apache/dubbo/pull/16253 中的 @dependabot[bot] 将 grpc.version 从 1.80.0 提升到 1.81.0
* build(deps)：由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16252 中将 io.swagger.core.v3:swagger-annotations 从 2.2.48 提升到 2.2.49
* build(deps)：https://github.com/apache/dubbo/pull/16250 中的 @dependabot[bot] 将 prometheus_metrics.version 从 1.5.1 升级到 1.6.1
* 通过 https://github.com/apache/dubbo/pull/16236 中的 @codingkiddo 改进 CollectionUtils.sort 的泛型类型安全性
* [修复] 关闭 TLS 协商失败的通道以防止僵尸连接…作者：https://github.com/apache/dubbo/pull/16255 中的 @LI123456mo
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16292 中将 org.apache.maven.plugins:maven-enforcer-plugin 从 3.6.2 升级到 3.6.3
* 构建（deps）：https://github.com/apache/dubbo/pull/16291 中的 @dependabot[bot] 将 netty4_version 从 4.2.13.Final 提升到 4.2.14.Final
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16283 中将 /dubbo-test/dubbo-test-check 中的 org.asynchttpclient:async-http-client 从 2.14.5 提升到 2.15.0
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16281 中将 io.swagger.core.v3:swagger-annotations 从 2.2.49 提升到 2.2.50
* 测试：在https://github.com/apache/dubbo/pull/16282中添加@jay666mnj的YamlCodec安全测试
* build(deps)：https://github.com/apache/dubbo/pull/16289 中的 @dependabot[bot] 将 protobuf-java_version 从 4.33.4 提升到 4.35.0
* build(deps): 通过https://github.com/apache/dubbo/pull/16290中的@dependabot[bot]将sentinel.version从1.8.9提升到1.8.10
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16277 中将 org.apache.maven:maven-core 从 3.9.15 升级到 3.9.16
* build(deps): 将 org.apache.tomcat.embed:tomcat-embed-core 从 /dubbo-dependency-bom 中的 9.0.117 提升到 9.0.118，由 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16284 中
* build(deps): 通过 https://github.com/apache/dubbo/pull/16280 中的 @dependabot[bot] 将 tomcat.version 从 10.1.52 提升到 10.1.55
* build(deps): 通过 https://github.com/apache/dubbo/pull/16279 中的 @dependabot[bot] 将 org.asynchttpclient:async-http-client 从 2.14.5 升级到 2.15.0
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16278 中将 org.apache.maven:maven-plugin-api 从 3.9.15 升级到 3.9.16
* 修复 https://github.com/apache/dubbo/pull/16305 中 @skt-shinyruo 的 CompositeInputStream 关闭处理
* 修复 https://github.com/apache/dubbo/pull/16300 中 @yuzhiyang1 的顺序敏感线程池状态测试
* 修复https://github.com/apache/dubbo/pull/16309中@yin-bo-Final在NetUtils中的IPv4地址端口解析
* 通过 @skt-shinyruo 在 https://github.com/apache/dubbo/pull/16306 中改进 CollectionUtils.toTreeSet 的类型安全性
* 在https://github.com/apache/dubbo/pull/16312中添加@RainYuY的威胁模型、AGENTS.md和SECURITY.md指针
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16304 中将 org.webjars:swagger-ui 从 5.32.4 升级到 5.32.6
* build(deps)：通过 https://github.com/apache/dubbo/pull/16303 中的 @dependabot[bot] 将 org.apache.maven.plugins:maven-surefire-plugin 从 3.5.5 升级到 3.5.6
* build(deps)：通过 https://github.com/apache/dubbo/pull/16302 中的 @dependabot[bot] 将 com.fasterxml.jackson:jackson-bom 从 2.21.3 提升到 2.22.0
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16322 中将 io.micrometer:micrometer-bom 从 1.16.5 提升到 1.16.6
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16321 中将 io.micrometer:micrometer-core 从 1.16.5 提升到 1.16.6
* 构建（deps）：通过 https://github.com/apache/dubbo/pull/16319 中的 @dependabot[bot] 将 netty4_version 从 4.2.14.Final 提升到 4.2.15.Final
* build(deps): 通过 https://github.com/apache/dubbo/pull/16318 中的 @dependabot[bot] 将 byte-buddy_version 从 1.18.8 提升到 1.18.10
* build(deps-dev): 通过 https://github.com/apache/dubbo/pull/16317 中的 @dependabot[bot] 将 org.jacoco:jacoco-maven-plugin 从 0.8.14 升级到 0.8.15
* build(deps)：https://github.com/apache/dubbo/pull/16316 中的 @dependabot[bot] 将 prometheus_metrics.version 从 1.6.1 升级到 1.7.0
* 配置 GitHub 工作流程以对 https://github.com/apache/dubbo/pull/16323 中 @apupier 的拉取请求使用并发取消进行中
* 修复 StringUtils.toBoolean 以在 https://github.com/apache/dubbo/pull/16348 中由 @rohithvegesna 为“off”返回 false
* 修复 StringUtils.substringAfter 在 https://github.com/apache/dubbo/pull/16350 中 @ns3154 缺少分隔符时返回空字符串
* 通过 https://github.com/apache/dubbo/pull/16313 中的 @thegoldenflow 修复不可变属性源上的 DubboDefaultPropertiesEnvironmentPostProcessor.addOrReplace 中的 UnsupportedOperationException (#16268)
* 修复https://github.com/apache/dubbo/pull/16299中@chensishang请求参数不可序列化时误导性的NPE
* 通过 @skt-shinyruo 在 https://github.com/apache/dubbo/pull/16325 中修复重载包装器方法的三重方法解析
* 通过 @apupier 在 https://github.com/apache/dubbo/pull/16367 中限制 GitHub Workflow 的触发推送分支
* 在 TLS 异常时关闭通道，以防止 https://github.com/apache/dubbo/pull/16202 中 @uuuyuqi 的半开连接
* 修复https://github.com/apache/dubbo/pull/16374中@uuuyuqi配置AuthPolicy.NONE时的PU明文检测
* 通过 @yin-bo-Final 修复 https://github.com/apache/dubbo/pull/16377 中的网状路由匹配列表语义
* [ISSUE #16389] https://github.com/apache/dubbo/pull/16391 中的 @gaoxiaolei-s59 在流解码器关闭后关闭延迟输入
* 通过https://github.com/apache/dubbo/pull/16395中的@014代码修复条件路由泄漏尾部调用者
* 修复 @Anon2Tokyo 在 https://github.com/apache/dubbo/pull/16416 中的三重 gRPC 解码器切换
* 将 https://github.com/apache/dubbo/pull/16433 中@RainYuY 所需的批准审核计数更改为 1
* 修复：使 SpringBootConfigPropsTest 免受 https://github.com/apache/dubbo/pull/16420 中 @jamespud 泄露的指标系统属性的影响
* build(deps): 通过 https://github.com/apache/dubbo/pull/16421 中的 @dependabot[bot] 将 /dubbo-plugin/dubbo-spring6-security 中的 org.springframework.security:spring-security-oauth2-authorization-server 从 1.5.7 升级到 1.5.8
* build(deps-dev): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16417 中将 org.springframework:spring-web 从 6.2.18 升级到 6.2.19
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16439 中将 /dubbo-test/dubbo-test-check 中的 org.asynchttpclient:async-http-client 从 2.15.0 提升到 2.16.0
*构建（deps）：通过@dependabot [bot]在https://github.com/apache/dubbo/pull/16445中将/dubbo-dependency-bom中的tomcat-embed-core从9.0.118提升到9.0.121
* 修复：在 https://github.com/apache/dubbo/pull/16463 中保留 @RainYuY 的 QUIC 连接的环回地址
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16410 中将 org.springframework:spring-core 从 6.2.18 升级到 6.2.19
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16409 中将 org.springframework:spring-expression 从 6.2.18 升级到 6.2.19
* build(deps): 通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16408 中将 org.springframework:spring-webmvc 从 6.2.18 升级到 6.2.19
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16366 中将 io.swagger.core.v3:swagger-annotations 从 2.2.50 提升到 2.2.52
* build(deps)：通过 https://github.com/apache/dubbo/pull/16362 中的 @dependabot[bot] 将 spring-boot-3.version 从 3.5.14 升级到 3.5.16
* build(deps)：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16482 中将 io.micrometer:micrometer-core 从 1.16.6 提升到 1.17.1
* 构建（deps）：通过 @dependabot[bot] 在 https://github.com/apache/dubbo/pull/16481 中将 io.micrometer:micrometer-bom 从 1.16.6 提升到 1.17.1
* build(deps): 通过 https://github.com/apache/dubbo/pull/16480 中的 @dependabot[bot] 将 org.asynchttpclient:async-http-client 从 2.16.0 提升到 2.16.1
* 修复 https://github.com/apache/dubbo/pull/16393 中 @hnpkso 在 ServiceDiscoveryRegistry 中初始订阅期间实例推送丢失的问题
* [3.3] 禁用 Dependabot 并删除 @chickenlj 在 https://github.com/apache/dubbo/pull/16496 中的 PR 审查要求
* https://github.com/apache/dubbo/pull/16516 中@CCCLL 在第一次失败时停止广播，当broadcast.fail.percent 为 0 时
* 杂务（ci）：在 https://github.com/apache/dubbo/pull/16526 中 @pig-tongzhi 在计划工作流程中将操作/缓存提升到 v4
* 在https://github.com/apache/dubbo/pull/16524中@hickey-ai在BigInteger兼容性转换中保留BigDecimal整数值
* 杂务（ci）：将https://github.com/apache/dubbo/pull/16532中的@pig-tongzhi将剩余的动作/缓存升级到v4
* 在https://github.com/apache/dubbo/pull/16527中运行@sharanggupta没有@Test的测试

## 新贡献者
* @redoom 在 https://github.com/apache/dubbo/pull/15754 中做出了第一个贡献
* @Anshul-creator 在 https://github.com/apache/dubbo/pull/15746 中做出了第一个贡献
* @flyforeverth 在 https://github.com/apache/dubbo/pull/15775 中做出了第一个贡献
* @renyuweighub 在 https://github.com/apache/dubbo/pull/15784 中做出了第一个贡献
* @ShauryaChauhan1411 在 https://github.com/apache/dubbo/pull/15872 中做出了第一个贡献
* @LJQHDL 在 https://github.com/apache/dubbo/pull/15879 中做出了第一个贡献
* @krrishmahar 在 https://github.com/apache/dubbo/pull/15974 中做出了第一个贡献
* @vqianxiao 在 https://github.com/apache/dubbo/pull/15883 中做出了第一个贡献
* @shivvani-r 在 https://github.com/apache/dubbo/pull/15986 中做出了第一个贡献
* @luxiao0000 在 https://github.com/apache/dubbo/pull/15987 中做出了第一个贡献
* @LI123456mo 在 https://github.com/apache/dubbo/pull/16001 中做出了第一个贡献
* @wxt1222 在 https://github.com/apache/dubbo/pull/16031 中做出了第一个贡献
* @SURYAS1306 在 https://github.com/apache/dubbo/pull/16053 中做出了第一个贡献
* @manasagar 在 https://github.com/apache/dubbo/pull/16023 中做出了第一个贡献
* @jamespud 在 https://github.com/apache/dubbo/pull/16027 中做出了第一个贡献
* @Zjianru 在 https://github.com/apache/dubbo/pull/16082 中做出了第一个贡献
* @DocJlm 在 https://github.com/apache/dubbo/pull/16097 中做出了第一个贡献
* @SavitarC 在 https://github.com/apache/dubbo/pull/16132 中做出了第一个贡献
* @eddieran 在 https://github.com/apache/dubbo/pull/16195 中做出了第一个贡献
* @codingkiddo 在 https://github.com/apache/dubbo/pull/16236 中做出了第一个贡献
* @jay666mnj 在 https://github.com/apache/dubbo/pull/16282 中做出了第一个贡献
* @skt-shinyruo 在 https://github.com/apache/dubbo/pull/16305 中做出了第一个贡献
* @yuzhiyang1 在 https://github.com/apache/dubbo/pull/16300 中做出了第一个贡献
* @yin-bo-Final 在 https://github.com/apache/dubbo/pull/16309 中做出了第一个贡献
* @apupier 在 https://github.com/apache/dubbo/pull/16323 中做出了第一个贡献
* @rohithvegesna 在 https://github.com/apache/dubbo/pull/16348 中做出了第一个贡献
* @ns3154 在 https://github.com/apache/dubbo/pull/16350 中做出了第一个贡献
* @thegoldenflow 在 https://github.com/apache/dubbo/pull/16313 中做出了第一个贡献
* @chensishang 在 https://github.com/apache/dubbo/pull/16299 中做出了第一个贡献
* @uuuyuqi 在 https://github.com/apache/dubbo/pull/16202 中做出了第一个贡献
* @gaoxiaolei-s59 在 https://github.com/apache/dubbo/pull/16391 中做出了第一个贡献
* @014-code 在 https://github.com/apache/dubbo/pull/16395 中做出了第一个贡献
* @Anon2Tokyo 在 https://github.com/apache/dubbo/pull/16416 中做出了第一个贡献
* @hnpkso 在 https://github.com/apache/dubbo/pull/16393 中做出了第一个贡献
* @CCCLL 在 https://github.com/apache/dubbo/pull/16516 中做出了第一个贡献
* @pig-tongzhi 在 https://github.com/apache/dubbo/pull/16526 中做出了第一个贡献
* @hickey-ai 在 https://github.com/apache/dubbo/pull/16524 中做出了第一个贡献
* @sharanggupta 在 https://github.com/apache/dubbo/pull/16527 中做出了第一个贡献

**完整变更日志**：https://github.com/apache/dubbo/compare/dubbo-3.3.6...3.3.7

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`3.3.7` · 📅 发布：2026-10-26 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/3.3.7)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
