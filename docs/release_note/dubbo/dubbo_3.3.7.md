---
title: "dubbo 3.3.7"
project: "dubbo"
repo: "apache/dubbo"
tag: "3.3.7"
published: "2026-10-26"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/apache/dubbo/compare/dubbo-3.3.6...3.3.7"
---

# dubbo 3.3.7

## What's Changed
* Bump spring-6.version from 6.2.8 to 6.2.11 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15689
* [3.3] Add dubbo springboot3 dependency checker automatic configuration by @zrlw in https://github.com/apache/dubbo/pull/15709
* Bump org.springframework:spring-core from 6.2.8 to 6.2.11 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15723
* Bump io.projectreactor:reactor-core from 3.7.6 to 3.7.11 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15692
* Bump io.micrometer:micrometer-core from 1.15.0 to 1.15.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15691
* Downgrade ubuntu testing system to 22.04 for ZK and nacos server by @zrlw in https://github.com/apache/dubbo/pull/15727
* feat(registry): support the  option, whether to check the connection status by @fantiq in https://github.com/apache/dubbo/pull/15594
* Dubbo MCP Integration  by @RainYuY in https://github.com/apache/dubbo/pull/15406
* Fix inconsistent writeEvent/readEvent in default serialization (Fixes #15737) in https://github.com/apache/dubbo/pull/15740
* feat: Add JDK 25 support by @redoom in https://github.com/apache/dubbo/pull/15754
* Fix: Stabilize `JsonUtilsTest.consistentTest` to prevent Non-Dex nondeterminism by @Anshul-creator in https://github.com/apache/dubbo/pull/15746
* Fix/mcp sse content type and endpoint by @RainYuY in https://github.com/apache/dubbo/pull/15763
* Fix: Stabilize `ServiceDefinitionBuilderTest.testBuilderComplexObject` to prevent Non-Dex nondeterminism  by @Anshul-creator in https://github.com/apache/dubbo/pull/15759
* Fix: Stabilize `ConfigManagerTest.testGetConfigByIdOrName` to prevent Non-Dex nondeterminism  by @Anshul-creator in https://github.com/apache/dubbo/pull/15758
* Fix: Stabilize `URLParam.hashCode()` to prevent Non-Dex nondeterminism in `URLTest.testHashcode` by @Anshul-creator in https://github.com/apache/dubbo/pull/15757
* fix:JDK 25 Netty EventLoopGroup creation and ignore unsafe warning by @redoom in https://github.com/apache/dubbo/pull/15764
* Fix issue #15698 Distinguish between timeout and task rejection in DefaultFuture by @qxggg in https://github.com/apache/dubbo/pull/15738
* Update to 3.3.7-SNAPSHOT by @oxsean in https://github.com/apache/dubbo/pull/15770
* fix: thread safety RegistryDirectory by @flyforeverth in https://github.com/apache/dubbo/pull/15775
* Stabilize `MethodConfigTest` by disabling metrics initialization to avoid Micrometer nondeterminism by @Anshul-creator in https://github.com/apache/dubbo/pull/15782
* Fix: the interface-level timeout and retry configurations become invalid after the caller application is restarted by @renyuweighub in https://github.com/apache/dubbo/pull/15784
* Fix: Stabilize `ExporterSideConfigUrlTest` by disabling metrics initialization during URL export by @Anshul-creator in https://github.com/apache/dubbo/pull/15778
* Fix: Stabilize multiple tests in `ServiceConfigTest` by isolating system properties and cached state by @Anshul-creator in https://github.com/apache/dubbo/pull/15785
* Fix: Stabilize `"map argument body test"` and `"advance bean argument get test"` in `RestProtocolTest.groovy` by @Anshul-creator in https://github.com/apache/dubbo/pull/15777
* Fix: Stabilize `XmlSafetyTest` by filtering child `sleep 60` processes using baseline diff by @Anshul-creator in https://github.com/apache/dubbo/pull/15776
* HttpPostRequestDecoder need be destroyed. by @RainYuY in https://github.com/apache/dubbo/pull/15788
* Add maxMessageSize config  by @RainYuY in https://github.com/apache/dubbo/pull/15781
* docs: Add 3.3.6 version highlights to README by @redoom in https://github.com/apache/dubbo/pull/15772
* Fix: Stabilize `ReferenceCacheTest` by Disabling Metrics Initialization and Ensuring Test Isolation  by @Anshul-creator in https://github.com/apache/dubbo/pull/15794
* Fix: Stabilize `DubboBootstrapTest` by Disabling Metrics Initialization and Ensuring Test Isolation       by @Anshul-creator in https://github.com/apache/dubbo/pull/15793
* Fix: Stabilize `ConfigCenterConfigTest` by Disabling Metrics Initialization and Ensuring Test Isolation     by @Anshul-creator in https://github.com/apache/dubbo/pull/15792
* Fix: Stabilize `ApplicationConfigTest` by Disabling Metrics Initialization and Ensuring Test Isolation     by @Anshul-creator in https://github.com/apache/dubbo/pull/15791
* Fix: Stabilize `ConsumerConfigTest` by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15790
* Fix: Stabilize `ProtocolConfigTest` by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15789
* Fix: Stabilize `ReferenceConfigTest` by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15787
* Bump io.grpc:grpc-netty-shaded from 1.73.0 to 1.75.0 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/15713
* Bump org.webjars:webjars-locator-lite from 1.0.1 to 1.1.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15716
* Bump com.alibaba.fastjson2:fastjson2 from 2.0.56 to 2.0.60 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15741
* Fix: Stabilize `ReferenceConfigTest.testSearchReferences` to prevent Non-Dex nondeterminism in `ReferenceConfigTest.testLargeReferences`  by @Anshul-creator in https://github.com/apache/dubbo/pull/15766
* Fix some bug about proto copy by @RainYuY in https://github.com/apache/dubbo/pull/15825
* Bump tomcat.version from 8.5.100 to 10.1.42 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15514
* Bump byte-buddy_version from 1.17.5 to 1.17.6 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15506
* Bump spring-boot-3.version from 3.5.0 to 3.5.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15505
* Bump log4j2_version from 2.24.3 to 2.25.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15503
* Bump org.codehaus.mojo:flatten-maven-plugin from 1.7.0 to 1.7.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15704
* Bump org.testcontainers:testcontainers from 1.21.0 to 1.21.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15510
* Bump spring-security-6.version from 6.5.1 to 6.5.7 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15817
* Bump junit_platform_version from 1.13.1 to 1.13.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15545
* Bump io.opentelemetry:opentelemetry-bom from 1.50.0 to 1.54.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15701
* Bump com.squareup.okhttp3:okhttp from 3.14.9 to 4.9.2 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/15773
* Bump org.codehaus.mojo:license-maven-plugin from 2.5.0 to 2.7.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15703
* Bump org.codehaus.mojo:build-helper-maven-plugin from 3.6.0 to 3.6.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15441
* Bump junit_jupiter_version from 5.12.2 to 5.14.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15816
* Bump spring-6.version from 6.2.11 to 6.2.14 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15815
* Bump hessian-lite from 4.0.4 to 4.0.5 by @RainYuY in https://github.com/apache/dubbo/pull/15823
* Bump jackson_version from 2.19.0 to 2.19.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15507
* Bump org.apache.commons:commons-lang3 from 3.17.0 to 3.18.0 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/15538
* Bump io.swagger.core.v3:swagger-annotations from 2.2.32 to 2.2.34 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15478
* Bump org.apache.maven.plugins:maven-compiler-plugin from 3.14.0 to 3.14.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15729
* Bump org.hibernate:hibernate-validator from 5.4.3.Final to 6.2.0.Final in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/15811
* [3.3] Bump validation-api to 2.0.1.Final and use ParameterMessageInterpolator as default ValidatorFactory's message interpolator by @zrlw in https://github.com/apache/dubbo/pull/15830
* Set CONVERT_NO_LOWER_HEADER to true to keep it consistent with its initial value and avoid misunderstandings. by @RainYuY in https://github.com/apache/dubbo/pull/15831
* Bump log4j2_version from 2.25.0 to 2.25.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15870
* Bump com.google.code.gson:gson from 2.13.1 to 2.13.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15869
* Bump org.webjars:redoc from 2.3.0 to 2.5.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15868
* Bump okhttp_version from 4.9.2 to 4.12.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15866
* Bump io.micrometer:micrometer-bom from 1.15.1 to 1.16.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15865
* Bump bouncycastle-bcprov_version from 1.81 to 1.83 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15864
* Bump org.apache.maven.plugins:maven-shade-plugin from 3.6.0 to 3.6.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15863
* Bump org.yaml:snakeyaml from 2.4 to 2.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15861
* Bump spring-6.version from 6.2.14 to 6.2.15 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15859
* Bump org.apache.maven.plugins:maven-source-plugin from 3.3.1 to 3.4.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15860
* Bump org.apache.maven.plugins:maven-enforcer-plugin from 3.6.0 to 3.6.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15858
* Bump spring-boot-3.version from 3.5.3 to 3.5.8 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15853
* Bump tomcat.version from 8.5.100 to 10.1.50 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15856
* Bump grpc.version from 1.75.0 to 1.77.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15852
* Bump junit_platform_version from 1.13.3 to 1.14.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15855
* Fix: Stabilize `dubbo-config-spring` tests by Disabling Metrics Initialization and Ensuring Test Isolation  by @Anshul-creator in https://github.com/apache/dubbo/pull/15819
* Bump commons-io:commons-io from 2.19.0 to 2.21.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15862
* Bump org.apache.maven.plugins:maven-release-plugin from 3.1.1 to 3.3.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15854
* Bump org.apache.commons:commons-exec from 1.5.0 to 1.6.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15867
* fix(nacos): Add application key to consumer subscribe URL by @ShauryaChauhan1411 in https://github.com/apache/dubbo/pull/15872
* Fix: Stabilize `dubbo-config-spring` reference-related tests by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15828
* Fix: Stabilize map-order assertions in REST protocol tests by @Anshul-creator in https://github.com/apache/dubbo/pull/15849
* Fix: Stabilize `GenericServiceTest.testGenericComplexCompute4FullServiceMetadata` under NonDex by @Anshul-creator in https://github.com/apache/dubbo/pull/15848
* metadata-api test unit test modification by @LJQHDL in https://github.com/apache/dubbo/pull/15879
* Bump org.apache.logging.log4j:log4j-core from 2.25.2 to 2.25.3 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/15885
* Bump org.openjdk.nashorn:nashorn-core from 15.6 to 15.7 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15912
* Bump io.projectreactor:reactor-core from 3.7.11 to 3.8.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15911
* Bump org.apache.commons:commons-lang3 from 3.18.0 to 3.20.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15910
* Bump curator_version from 4.2.0 to 5.9.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15909
* Bump netty4_version from 4.2.2.Final to 4.2.9.Final by @dependabot[bot] in https://github.com/apache/dubbo/pull/15894
* Bump junit_jupiter_version from 5.12.2 to 5.14.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15898
* Bump org.apache.maven.plugins:maven-plugin-plugin from 3.15.1 to 3.15.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15896
* Bump spring-boot-3.version from 3.5.8 to 3.5.9 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15893
* Bump io.micrometer:micrometer-core from 1.15.4 to 1.16.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15908
* Bump byte-buddy_version from 1.17.6 to 1.18.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15906
* Bump log4j2_version from 2.25.2 to 2.25.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15902
* Bump commons-codec:commons-codec from 1.18.0 to 1.20.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15900
* Bump io.opentelemetry:opentelemetry-bom from 1.54.1 to 1.57.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15905
* Bump org.xerial.snappy:snappy-java from 1.1.10.7 to 1.1.10.8 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15903
* Bump org.apache.maven:maven-core from 3.9.10 to 3.9.12 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15895
* Bump io.micrometer:micrometer-tracing-bom from 1.5.1 to 1.6.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15904
* Bump jetty_version from 9.4.57.v20241219 to 9.4.58.v20250814 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15897
* Fix: Stabilize remaining outlier `dubbo-config-spring` tests by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15846
* Bump com.alibaba.nacos:nacos-client from 2.5.1 to 2.5.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15901
* Bump org.apache.groovy:groovy from 4.0.27 to 4.0.29 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15899
* fix #15892  [Bug] LEAK: ByteBuf.release() was not called before it's garbage-collected  by @qxggg in https://github.com/apache/dubbo/pull/15917
* Bump org.testcontainers:testcontainers from 1.21.3 to 1.21.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15955
* Bump org.jacoco:jacoco-maven-plugin from 0.8.13 to 0.8.14 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15954
* Bump org.apache.maven.plugins:maven-surefire-plugin from 3.5.3 to 3.5.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15953
* Bump org.apache.maven.plugin-tools:maven-plugin-annotations from 3.15.1 to 3.15.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15951
* Bump com.diffplug.spotless:spotless-maven-plugin from 2.44.5 to 2.46.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15947
* Bump grpc.version from 1.77.0 to 1.78.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15939
* Bump org.webjars:webjars-locator-lite from 1.1.2 to 1.1.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15940
* Bump org.apache.maven.plugins:maven-assembly-plugin from 3.7.1 to 3.8.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15938
* Bump io.swagger.core.v3:swagger-annotations from 2.2.34 to 2.2.41 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15937
* Bump org.apache.maven.plugins:maven-antrun-plugin from 3.1.0 to 3.2.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15948
* Bump org.springframework.security:spring-security-oauth2-authorization-server from 1.5.1 to 1.5.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15949
* Bump org.webjars:swagger-ui from 5.22.0 to 5.31.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15944
* Bump org.apache.maven.plugins:maven-jar-plugin from 3.4.2 to 3.5.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15950
* Bump org.apache.maven:maven-plugin-api from 3.9.10 to 3.9.12 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15946
* Bump org.apache.commons:commons-compress from 1.27.1 to 1.28.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15945
* Bump io.smallrye.reactive:mutiny from 2.9.0 to 2.9.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15942
* Bump jakarta.xml.bind:jakarta.xml.bind-api from 4.0.2 to 4.0.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15941
* Import jackson 2.20.1 pom to simplify dependencies for bumping jackson components by @zrlw in https://github.com/apache/dubbo/pull/15960
* Bump org.aspectj:aspectjweaver from 1.9.24 to 1.9.25.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15943
* Support Tri backpress by @EarthChen in https://github.com/apache/dubbo/pull/15957
* Unify graceful shutdown interface,add Triple support by @EarthChen in https://github.com/apache/dubbo/pull/15926
* Bump org.apache.maven.plugins:maven-javadoc-plugin from 3.11.2 to 3.12.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15966
* Bump org.hibernate:hibernate-validator from 6.2.0.Final to 6.2.5.Final by @dependabot[bot] in https://github.com/apache/dubbo/pull/15965
* Bump org.codehaus.mojo:license-maven-plugin from 2.7.0 to 2.7.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15964
* Fix: Stabilize `dubbo-config-spring` boot-related tests by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15845
* [PR] #15935 Enhance NetUtils IPv6 handling and test coverage by @krrishmahar in https://github.com/apache/dubbo/pull/15974
* Tri backpressure by @EarthChen in https://github.com/apache/dubbo/pull/15967
* Enhance bug template with reproduction demo checkbox by @RainYuY in https://github.com/apache/dubbo/pull/15977
* Fix/header cookie get by @RainYuY in https://github.com/apache/dubbo/pull/15985
* fix(cluster): During the service provider's release period, concurrent read routes from consumers were rejected by @vqianxiao in https://github.com/apache/dubbo/pull/15883
* [PR] #15935 Enhance NetUtils test coverage and boundaries by @shivvani-r in https://github.com/apache/dubbo/pull/15986
* [PR] #15969 Fix: Add warning log when using unbounded queue in FixedThreadPool by @shivvani-r in https://github.com/apache/dubbo/pull/15984
* fix: AbstractMetadataReport MemoryOverflow by @luxiao0000 in https://github.com/apache/dubbo/pull/15987
* build(deps): bump io.opentelemetry:opentelemetry-bom from 1.57.0 to 1.58.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15994
* build(deps): bump spock_version from 2.3-groovy-4.0 to 2.4-groovy-4.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15993
* build(deps): bump sentinel.version from 1.8.8 to 1.8.9 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15992
* build(deps): bump junit_jupiter_version from 5.14.1 to 5.14.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15989
* build(deps-dev): bump junit_platform_version from 1.14.1 to 1.14.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/15990
* [PR] #15988 Fix: Clear SecurityContext in finally block to prevent thread pollution by @shivvani-r in https://github.com/apache/dubbo/pull/15997
* Add unit test for PathUtils in dubbo-common by @LI123456mo in https://github.com/apache/dubbo/pull/16001
* Fix: Stabilize `dubbo-config-spring` remaining reference and schema-related tests by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15844
* Fix: Stabilize `dubbo-config-spring` propertyconfigurer-related tests by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15841
* Fix: Stabilize more `dubbo-config-spring` reference-related tests by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15840
* Fix: Stabilize `dubbo-config-spring` context-related tests by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15835
* Fix: Stabilize `dubbo-config-spring` beans-related tests by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15834
* Fix: Stabilize `dubbo-config-spring` issues-related tests by Disabling Metrics Initialization and Ensuring Test Isolation by @Anshul-creator in https://github.com/apache/dubbo/pull/15833
* fix tri backpressure race condition by @EarthChen in https://github.com/apache/dubbo/pull/16004
* opt triple remote flow controller by @EarthChen in https://github.com/apache/dubbo/pull/15983
* [3.3] Get moduleModel at ReferenceBeanManager#prepareReferenceBeans method to avoid getting null result by @zrlw in https://github.com/apache/dubbo/pull/15769
* Add unit test for MethodComparator in dubbo-common by @LI123456mo in https://github.com/apache/dubbo/pull/16006
* Fix triple stream future npe by @EarthChen in https://github.com/apache/dubbo/pull/16014
* build(deps): bump com.fasterxml.jackson:jackson-bom from 2.20.1 to 2.21.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16018
* build(deps): bump io.micrometer:micrometer-tracing-bom from 1.6.1 to 1.6.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16020
* build(deps): bump io.micrometer:micrometer-core from 1.16.1 to 1.16.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16019
* build(deps): bump io.micrometer:micrometer-bom from 1.16.1 to 1.16.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16016
* build(deps-dev): bump io.projectreactor:reactor-core from 3.8.1 to 3.8.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16015
* build(deps): bump byte-buddy_version from 1.18.3 to 1.18.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16017
* refactor: enhance backpressure handling with byte tracking  by @EarthChen in https://github.com/apache/dubbo/pull/16028
* Fix timestamp filtering in ZooKeeper registry causing pre-warmup failure by @funky-eyes in https://github.com/apache/dubbo/pull/16034
* Fix init stream race by @EarthChen in https://github.com/apache/dubbo/pull/16039
* Bump protobuf-java from 3.25.8 to 4.33.4 and remove guava dependency by rewriting CodecTest with java.nio.charset.StandardCharsets by @zrlw in https://github.com/apache/dubbo/pull/16026
* Bump protobuf-java,grpc of dubbo-security to latest version by @zrlw in https://github.com/apache/dubbo/pull/16044
* build(deps): bump io.swagger.core.v3:swagger-annotations from 2.2.41 to 2.2.42 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16052
* build(deps): bump spring-boot-3.version from 3.5.9 to 3.5.10 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16050
* build(deps): bump org.apache.groovy:groovy from 4.0.29 to 4.0.30 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16049
* Dubbo registry multiple remove dubbo test common by @wxt1222 in https://github.com/apache/dubbo/pull/16031
* fix(cluster): support broadcast and wildcard tag routing by @heliang666s in https://github.com/apache/dubbo/pull/15876
* Fix LRUCache and LRU2Cache to trim entries when max capacity is reduced by @SURYAS1306 in https://github.com/apache/dubbo/pull/16053
* completed issue 12517, implemented new module for otlp config along with test checking jvm metric export using mock server by @manasagar in https://github.com/apache/dubbo/pull/16023
* feat: enhance VirtualThreadPool with configurable minimum thread count by @funky-eyes in https://github.com/apache/dubbo/pull/16055
* Optimize NettyBackedChannelBuffer for direct buffer transfer by @jamespud in https://github.com/apache/dubbo/pull/16027
* build(deps): bump org.apache.maven.plugins:maven-compiler-plugin from 3.14.1 to 3.15.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16066
* build(deps): bump commons-codec:commons-codec from 1.20.0 to 1.21.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16065
* build(deps): bump protobuf-java_version from 4.33.4 to 4.33.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16064
* Unify the deframer of the client and server sides for the Triple protocol by @EarthChen in https://github.com/apache/dubbo/pull/16041
* Refactor tri pack & unpack use stream by @EarthChen in https://github.com/apache/dubbo/pull/16045
* build(deps): bump io.opentelemetry:opentelemetry-bom from 1.58.0 to 1.59.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16076
* build(deps): bump grpc.version from 1.78.0 to 1.79.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16077
* build(deps): bump tomcat.version from 8.5.100 to 10.1.52 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16078
* build(deps): bump netty4_version from 4.2.9.Final to 4.2.10.Final by @dependabot[bot] in https://github.com/apache/dubbo/pull/16079
* build(deps): bump jakarta.xml.bind:jakarta.xml.bind-api from 4.0.4 to 4.0.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16081
* Fix: Remove unnecessary pattern check for password in ConfigValidationUtils by @Zjianru in https://github.com/apache/dubbo/pull/16082
* [#16098] Fix resource leaks and improve code quality in ConfigUtils by @DocJlm in https://github.com/apache/dubbo/pull/16097
* build(deps-dev): bump com.ctrip.framework.apollo:apollo-mockserver from 2.4.0 to 2.5.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16107
* build(deps): bump org.webjars:swagger-ui from 5.31.0 to 5.31.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16106
* build(deps): bump com.fasterxml.jackson:jackson-bom from 2.21.0 to 2.21.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16105
* build(deps): bump org.apache.maven.plugins:maven-surefire-plugin from 3.5.4 to 3.5.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16102
* build(deps): bump com.ctrip.framework.apollo:apollo-client from 2.4.0 to 2.5.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16100
* build(deps): bump io.micrometer:micrometer-core from 1.16.2 to 1.16.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16095
* build(deps-dev): bump io.projectreactor:reactor-core from 3.8.2 to 3.8.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16094
* build(deps): bump io.micrometer:micrometer-tracing-bom from 1.6.2 to 1.6.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16092
* build(deps): bump io.micrometer:micrometer-bom from 1.16.2 to 1.16.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16090
* build(deps): bump org.springframework.security:spring-security-oauth2-authorization-server from 1.5.5 to 1.5.6 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16101
* build(deps): bump spring-boot-3.version from 3.5.10 to 3.5.11 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16099
* build(deps-dev): bump junit_platform_version from 1.14.2 to 1.14.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16093
* build(deps): bump byte-buddy_version from 1.18.4 to 1.18.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16088
* build(deps): bump spring-6.version from 6.2.15 to 6.2.16 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16087
* build(deps-dev): bump org.yaml:snakeyaml from 2.5 to 2.6 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16113
* build(deps): bump byte-buddy_version from 1.18.5 to 1.18.7 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16112
* build(deps): bump junit_jupiter_version from 5.14.2 to 5.14.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16091
* build(deps): bump io.swagger.core.v3:swagger-annotations from 2.2.42 to 2.2.43 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16104
* build(deps): bump spring-security-6.version from 6.5.7 to 6.5.8 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16089
* build(deps): bump org.apache.tomcat.embed:tomcat-embed-core from 8.5.100 to 9.0.112 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/16096
* build(deps): bump commons-logging:commons-logging from 1.3.5 to 1.3.6 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16125
* build(deps): bump org.apache.maven.plugins:maven-shade-plugin from 3.6.1 to 3.6.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16124
* build(deps): bump org.apache.maven:maven-plugin-api from 3.9.12 to 3.9.13 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16122
* build(deps): bump io.swagger.core.v3:swagger-annotations from 2.2.43 to 2.2.44 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16120
* build(deps-dev): bump io.projectreactor:reactor-core from 3.8.3 to 3.8.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16143
* build(deps): bump org.apache.maven:maven-core from 3.9.12 to 3.9.14 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16142
* build(deps): bump org.apache.maven:maven-plugin-api from 3.9.13 to 3.9.14 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16141
* build(deps): bump io.micrometer:micrometer-core from 1.16.3 to 1.16.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16140
* build(deps): bump io.micrometer:micrometer-bom from 1.16.3 to 1.16.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16139
* build(deps): bump io.swagger.core.v3:swagger-annotations from 2.2.44 to 2.2.45 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16138
* build(deps): bump spring-6.version from 6.2.16 to 6.2.17 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16136
* build(deps): bump org.apache.tomcat.embed:tomcat-embed-core from 9.0.112 to 9.0.113 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/16127
* build(deps): bump protobuf-java_version from 4.33.4 to 4.34.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16114
* build(deps): bump io.micrometer:micrometer-tracing-bom from 1.6.3 to 1.6.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16137
* build(deps): bump io.opentelemetry:opentelemetry-bom from 1.59.0 to 1.60.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16119
* build(deps): bump org.webjars:swagger-ui from 5.31.2 to 5.32.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16115
* Remove job native-image-inspecting from building workflows as action setup-graalvm was not allowed anymore by @zrlw in https://github.com/apache/dubbo/pull/16166
* build(deps): bump com.fasterxml.jackson:jackson-bom from 2.21.1 to 2.21.2 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16163
* build(deps): bump com.alibaba.fastjson2:fastjson2 from 2.0.60 to 2.0.61 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16162
* build(deps): bump protobuf-java_version from 4.33.4 to 4.34.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16161
* build(deps): bump spring-security-6.version from 6.5.8 to 6.5.9 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16160
* build(deps): bump grpc.version from 1.79.0 to 1.80.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16159
* build(deps): bump org.webjars:swagger-ui from 5.32.0 to 5.32.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16158
* build(deps): bump org.apache.tomcat.embed:tomcat-embed-core from 9.0.113 to 9.0.115 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/16147
* Update netty4_version to 4.2.12.Final by @RainYuY in https://github.com/apache/dubbo/pull/16196
* build(deps): bump org.apache.logging.log4j:log4j-core from 2.25.3 to 2.25.4 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/16204
* build(deps): bump org.javassist:javassist from 3.30.2-GA to 3.31.0-GA by @dependabot[bot] in https://github.com/apache/dubbo/pull/16229
* build(deps): bump org.apache.maven:maven-plugin-api from 3.9.14 to 3.9.15 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16227
* build(deps): bump org.asynchttpclient:async-http-client from 2.12.4 to 2.14.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16228
* build(deps): bump org.apache.maven:maven-core from 3.9.14 to 3.9.15 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16226
* build(deps-dev): bump io.projectreactor:reactor-core from 3.8.4 to 3.8.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16225
* build(deps): bump io.micrometer:micrometer-tracing-bom from 1.6.4 to 1.6.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16224
* build(deps): bump bouncycastle-bcprov_version from 1.83 to 1.84 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16223
* build(deps): bump io.micrometer:micrometer-bom from 1.16.4 to 1.16.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16221
* build(deps): bump org.webjars:swagger-ui from 5.32.1 to 5.32.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16220
* feat: support legacy and new prometheus client stacks by @SavitarC in https://github.com/apache/dubbo/pull/16132
* Reset ApplicationModel after running AbstractServiceDiscoveryFactoryTest by @zrlw in https://github.com/apache/dubbo/pull/16234
* fix: disable lockedSynchronizers in dumpAllThreads to avoid ZGC safepoint heap scan by @eddieran in https://github.com/apache/dubbo/pull/16195
* build(deps): bump spring-6.version from 6.2.17 to 6.2.18 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16219
* build(deps): bump org.apache.groovy:groovy from 4.0.30 to 4.0.31 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16184
* build(deps): bump io.swagger.core.v3:swagger-annotations from 2.2.45 to 2.2.48 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16222
* build(deps): bump org.bouncycastle:bcpkix-jdk18on from 1.83 to 1.84 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/16215
* build(deps): bump io.zipkin.zipkin2:zipkin from 3.5.1 to 3.6.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16210
* build(deps): bump io.opentelemetry:opentelemetry-bom from 1.60.1 to 1.61.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16206
* build(deps): bump org.apache.tomcat.embed:tomcat-embed-core from 9.0.115 to 9.0.117 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/16203
* build(deps): bump byte-buddy_version from 1.18.7 to 1.18.8 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16192
* build(deps): bump org.codehaus.plexus:plexus-utils from 3.6.0 to 3.6.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16189
* build(deps): bump log4j2_version from 2.25.3 to 2.25.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16181
* build(deps): bump org.springframework.boot:spring-boot-starter-actuator from 3.5.11 to 3.5.12 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16151
* build(deps): bump io.zipkin.reporter2:zipkin-reporter-bom from 3.5.1 to 3.5.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16183
* build(deps): bump io.micrometer:micrometer-core from 1.16.4 to 1.16.5 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16246
* build(deps): bump commons-io:commons-io from 2.21.0 to 2.22.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16245
* build(deps-dev): bump junit_platform_version from 1.14.3 to 1.14.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16244
* build(deps): bump com.google.code.gson:gson from 2.13.2 to 2.14.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16242
* build(deps): bump prometheus_metrics.version from 1.5.0 to 1.5.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16240
* build(deps): bump org.springframework.security:spring-security-oauth2-authorization-server from 1.5.6 to 1.5.7 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16239
* build(deps): bump spring-boot-3.version from 3.5.12 to 3.5.14 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16238
* build(deps): bump commons-codec:commons-codec from 1.21.0 to 1.22.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16243
* build(deps): bump junit_jupiter_version from 5.14.3 to 5.14.4 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16241
* build(deps): bump spring-security-6.version from 6.5.9 to 6.5.10 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16237
* build(deps): bump org.apache.groovy:groovy from 4.0.31 to 4.0.32 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16266
* build(deps): bump netty4_version from 4.2.12.Final to 4.2.13.Final by @dependabot[bot] in https://github.com/apache/dubbo/pull/16264
* build(deps): bump io.opentelemetry:opentelemetry-bom from 1.61.0 to 1.62.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16263
* build(deps): bump log4j2_version from 2.25.4 to 2.26.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16260
* build(deps): bump com.alibaba.fastjson2:fastjson2 from 2.0.61 to 2.0.62 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16261
* build(deps): bump com.fasterxml.jackson:jackson-bom from 2.21.2 to 2.21.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16254
* build(deps): bump grpc.version from 1.80.0 to 1.81.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16253
* build(deps): bump io.swagger.core.v3:swagger-annotations from 2.2.48 to 2.2.49 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16252
* build(deps): bump prometheus_metrics.version from 1.5.1 to 1.6.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16250
* Improve generic type safety of CollectionUtils.sort by @codingkiddo in https://github.com/apache/dubbo/pull/16236
* [FIX] Close channel on TLS negotiation failure to prevent zombie conn… by @LI123456mo in https://github.com/apache/dubbo/pull/16255
* build(deps): bump org.apache.maven.plugins:maven-enforcer-plugin from 3.6.2 to 3.6.3 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16292
* build(deps): bump netty4_version from 4.2.13.Final to 4.2.14.Final by @dependabot[bot] in https://github.com/apache/dubbo/pull/16291
* build(deps): bump org.asynchttpclient:async-http-client from 2.14.5 to 2.15.0 in /dubbo-test/dubbo-test-check by @dependabot[bot] in https://github.com/apache/dubbo/pull/16283
* build(deps): bump io.swagger.core.v3:swagger-annotations from 2.2.49 to 2.2.50 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16281
* test: add YamlCodec security tests by @jay666mnj in https://github.com/apache/dubbo/pull/16282
* build(deps): bump protobuf-java_version from 4.33.4 to 4.35.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16289
* build(deps): bump sentinel.version from 1.8.9 to 1.8.10 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16290
* build(deps): bump org.apache.maven:maven-core from 3.9.15 to 3.9.16 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16277
* build(deps): bump org.apache.tomcat.embed:tomcat-embed-core from 9.0.117 to 9.0.118 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/16284
* build(deps): bump tomcat.version from 10.1.52 to 10.1.55 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16280
* build(deps): bump org.asynchttpclient:async-http-client from 2.14.5 to 2.15.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16279
* build(deps): bump org.apache.maven:maven-plugin-api from 3.9.15 to 3.9.16 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16278
* Fix CompositeInputStream close handling by @skt-shinyruo in https://github.com/apache/dubbo/pull/16305
* Fix order-sensitive thread pool status test by @yuzhiyang1 in https://github.com/apache/dubbo/pull/16300
* Fix IPv4 address port parsing in NetUtils by @yin-bo-Final in https://github.com/apache/dubbo/pull/16309
* Improve type safety of CollectionUtils.toTreeSet by @skt-shinyruo in https://github.com/apache/dubbo/pull/16306
* Add threat model, AGENTS.md and SECURITY.md pointer by @RainYuY in https://github.com/apache/dubbo/pull/16312
* build(deps): bump org.webjars:swagger-ui from 5.32.4 to 5.32.6 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16304
* build(deps): bump org.apache.maven.plugins:maven-surefire-plugin from 3.5.5 to 3.5.6 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16303
* build(deps): bump com.fasterxml.jackson:jackson-bom from 2.21.3 to 2.22.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16302
* build(deps): bump io.micrometer:micrometer-bom from 1.16.5 to 1.16.6 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16322
* build(deps): bump io.micrometer:micrometer-core from 1.16.5 to 1.16.6 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16321
* build(deps): bump netty4_version from 4.2.14.Final to 4.2.15.Final by @dependabot[bot] in https://github.com/apache/dubbo/pull/16319
* build(deps): bump byte-buddy_version from 1.18.8 to 1.18.10 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16318
* build(deps-dev): bump org.jacoco:jacoco-maven-plugin from 0.8.14 to 0.8.15 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16317
* build(deps): bump prometheus_metrics.version from 1.6.1 to 1.7.0 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16316
* Configure GitHub workflows to use concurrency cancel-in-progress for pull requests by @apupier in https://github.com/apache/dubbo/pull/16323
* Fix StringUtils.toBoolean to return false for "off" by @rohithvegesna in https://github.com/apache/dubbo/pull/16348
* Fix StringUtils.substringAfter to return empty string when the separator is absent by @ns3154 in https://github.com/apache/dubbo/pull/16350
* Fix UnsupportedOperationException in DubboDefaultPropertiesEnvironmentPostProcessor.addOrReplace on immutable property source (#16268) by @thegoldenflow in https://github.com/apache/dubbo/pull/16313
* Fix misleading NPE when request parameter is not Serializable by @chensishang in https://github.com/apache/dubbo/pull/16299
* Fix Triple method resolution for overloaded wrapper methods by @skt-shinyruo in https://github.com/apache/dubbo/pull/16325
* Restrict trigger push branch for GitHub Workflow by @apupier in https://github.com/apache/dubbo/pull/16367
* Close channel on TLS exception to prevent half-open connections by @uuuyuqi in https://github.com/apache/dubbo/pull/16202
* Fix PU plaintext detection when AuthPolicy.NONE is configured by @uuuyuqi in https://github.com/apache/dubbo/pull/16374
* Fix mesh route match list semantics by @yin-bo-Final in https://github.com/apache/dubbo/pull/16377
* [ISSUE #16389] Close late input after streaming decoder shutdown by @gaoxiaolei-s59 in https://github.com/apache/dubbo/pull/16391
* Fix condition route leaking tail invokers by @014-code in https://github.com/apache/dubbo/pull/16395
* Fix Triple gRPC decoder handoff by @Anon2Tokyo in https://github.com/apache/dubbo/pull/16416
* Change required approving review count to 1 by @RainYuY in https://github.com/apache/dubbo/pull/16433
* fix: make SpringBootConfigPropsTest immune to leaked metrics System properties by @jamespud in https://github.com/apache/dubbo/pull/16420
* build(deps): bump org.springframework.security:spring-security-oauth2-authorization-server from 1.5.7 to 1.5.8 in /dubbo-plugin/dubbo-spring6-security by @dependabot[bot] in https://github.com/apache/dubbo/pull/16421
* build(deps-dev): bump org.springframework:spring-web from 6.2.18 to 6.2.19 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16417
* build(deps): bump org.asynchttpclient:async-http-client from 2.15.0 to 2.16.0 in /dubbo-test/dubbo-test-check by @dependabot[bot] in https://github.com/apache/dubbo/pull/16439
* build(deps): bump org.apache.tomcat.embed:tomcat-embed-core from 9.0.118 to 9.0.121 in /dubbo-dependencies-bom by @dependabot[bot] in https://github.com/apache/dubbo/pull/16445
* fix: preserve loopback addresses for QUIC connections by @RainYuY in https://github.com/apache/dubbo/pull/16463
* build(deps): bump org.springframework:spring-core from 6.2.18 to 6.2.19 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16410
* build(deps): bump org.springframework:spring-expression from 6.2.18 to 6.2.19 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16409
* build(deps): bump org.springframework:spring-webmvc from 6.2.18 to 6.2.19 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16408
* build(deps): bump io.swagger.core.v3:swagger-annotations from 2.2.50 to 2.2.52 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16366
* build(deps): bump spring-boot-3.version from 3.5.14 to 3.5.16 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16362
* build(deps): bump io.micrometer:micrometer-core from 1.16.6 to 1.17.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16482
* build(deps): bump io.micrometer:micrometer-bom from 1.16.6 to 1.17.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16481
* build(deps): bump org.asynchttpclient:async-http-client from 2.16.0 to 2.16.1 by @dependabot[bot] in https://github.com/apache/dubbo/pull/16480
* Fix instance push loss during initial subscribe in ServiceDiscoveryRegistry by @hnpkso in https://github.com/apache/dubbo/pull/16393
* [3.3] Disable Dependabot and remove PR review requirements by @chickenlj in https://github.com/apache/dubbo/pull/16496
* Stop broadcast at the first failure when broadcast.fail.percent is 0 by @CCCLL in https://github.com/apache/dubbo/pull/16516
* chore(ci): bump actions/cache to v4 in scheduled workflows by @pig-tongzhi in https://github.com/apache/dubbo/pull/16526
* Preserve BigDecimal integral value in BigInteger compatibility conversion by @hickey-ai in https://github.com/apache/dubbo/pull/16524
* chore(ci): bump remaining actions/cache to v4 by @pig-tongzhi in https://github.com/apache/dubbo/pull/16532
* Run the tests that have no @Test by @sharanggupta in https://github.com/apache/dubbo/pull/16527

## New Contributors
* @redoom made their first contribution in https://github.com/apache/dubbo/pull/15754
* @Anshul-creator made their first contribution in https://github.com/apache/dubbo/pull/15746
* @flyforeverth made their first contribution in https://github.com/apache/dubbo/pull/15775
* @renyuweighub made their first contribution in https://github.com/apache/dubbo/pull/15784
* @ShauryaChauhan1411 made their first contribution in https://github.com/apache/dubbo/pull/15872
* @LJQHDL made their first contribution in https://github.com/apache/dubbo/pull/15879
* @krrishmahar made their first contribution in https://github.com/apache/dubbo/pull/15974
* @vqianxiao made their first contribution in https://github.com/apache/dubbo/pull/15883
* @shivvani-r made their first contribution in https://github.com/apache/dubbo/pull/15986
* @luxiao0000 made their first contribution in https://github.com/apache/dubbo/pull/15987
* @LI123456mo made their first contribution in https://github.com/apache/dubbo/pull/16001
* @wxt1222 made their first contribution in https://github.com/apache/dubbo/pull/16031
* @SURYAS1306 made their first contribution in https://github.com/apache/dubbo/pull/16053
* @manasagar made their first contribution in https://github.com/apache/dubbo/pull/16023
* @jamespud made their first contribution in https://github.com/apache/dubbo/pull/16027
* @Zjianru made their first contribution in https://github.com/apache/dubbo/pull/16082
* @DocJlm made their first contribution in https://github.com/apache/dubbo/pull/16097
* @SavitarC made their first contribution in https://github.com/apache/dubbo/pull/16132
* @eddieran made their first contribution in https://github.com/apache/dubbo/pull/16195
* @codingkiddo made their first contribution in https://github.com/apache/dubbo/pull/16236
* @jay666mnj made their first contribution in https://github.com/apache/dubbo/pull/16282
* @skt-shinyruo made their first contribution in https://github.com/apache/dubbo/pull/16305
* @yuzhiyang1 made their first contribution in https://github.com/apache/dubbo/pull/16300
* @yin-bo-Final made their first contribution in https://github.com/apache/dubbo/pull/16309
* @apupier made their first contribution in https://github.com/apache/dubbo/pull/16323
* @rohithvegesna made their first contribution in https://github.com/apache/dubbo/pull/16348
* @ns3154 made their first contribution in https://github.com/apache/dubbo/pull/16350
* @thegoldenflow made their first contribution in https://github.com/apache/dubbo/pull/16313
* @chensishang made their first contribution in https://github.com/apache/dubbo/pull/16299
* @uuuyuqi made their first contribution in https://github.com/apache/dubbo/pull/16202
* @gaoxiaolei-s59 made their first contribution in https://github.com/apache/dubbo/pull/16391
* @014-code made their first contribution in https://github.com/apache/dubbo/pull/16395
* @Anon2Tokyo made their first contribution in https://github.com/apache/dubbo/pull/16416
* @hnpkso made their first contribution in https://github.com/apache/dubbo/pull/16393
* @CCCLL made their first contribution in https://github.com/apache/dubbo/pull/16516
* @pig-tongzhi made their first contribution in https://github.com/apache/dubbo/pull/16526
* @hickey-ai made their first contribution in https://github.com/apache/dubbo/pull/16524
* @sharanggupta made their first contribution in https://github.com/apache/dubbo/pull/16527

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.3.6...3.3.7

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `3.3.7` · 2026-10-26 · [upstream release](https://github.com/apache/dubbo/releases/tag/3.3.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
