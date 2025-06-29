# dubbo dubbo-3.2.15

## 变更内容

### Bug修复

- 修复 `injvm invoker` 抛出 `ClassCastException` 的问题，详见 [#14346](https://github.com/apache/dubbo/pull/14346)
- 修复 `metrics` 无法检索延迟初始化的执行器状态的问题，详见 [#14348](https://github.com/apache/dubbo/pull/14348)
- 修复在关闭应用程序时 `RegistryProtocol.ExporterChangeableWrapper#unregister` 中的 `NPE` 问题，详见 [#14389](https://github.com/apache/dubbo/pull/14389)
- 同步 `spring init` 操作以防止并行初始化，详见 [#14371](https://github.com/apache/dubbo/pull/14371)
- 修复使用多注册表时的注册表ID问题，详见 [#14381](https://github.com/apache/dubbo/pull/14381)
- 修复 `QoS` 中的空键问题，详见 [#14419](https://github.com/apache/dubbo/pull/14419)
- 修复 `AbstractServiceDiscovery.update` 在 `doRegister` 首次失败时的问题，详见 [#14427](https://github.com/apache/dubbo/pull/14427)
- 修复与 `Spring Cloud Nacos` 一起工作时 `ServiceInfo` 的空协议问题，详见 [#14421](https://github.com/apache/dubbo/pull/14421)
- 修复 `AbortPolicyWithReport` 在线程池耗尽时可能重复 `jstack` 的问题，详见 [#14468](https://github.com/apache/dubbo/pull/14468)
- 修复 `hessian` 在延迟初始化时 `TCCL` 为空的 `NPE` 问题，详见 [#14478](https://github.com/apache/dubbo/pull/14478)

### 依赖升级

- 更新 `bytebuddy.version`：1.14.17 -> 1.14.18，详见 [#14463](https://github.com/apache/dubbo/pull/14463)
- 更新 `com.alibaba.fastjson2:fastjson2`：2.0.51 -> 2.0.52，详见 [#14435](https://github.com/apache/dubbo/pull/14435)
- 更新 `com.alibaba.nacos:nacos-client`：2.3.2 -> 2.4.0，详见 [#14385](https://github.com/apache/dubbo/pull/14385) 和 [#14461](https://github.com/apache/dubbo/pull/14461)
- 更新 `commons-logging:commons-logging`：1.3.2 -> 1.3.3，详见 [#14404](https://github.com/apache/dubbo/pull/14404)
- 更新 `grpc.version`：1.64.0 -> 1.65.1，详见 [#14382](https://github.com/apache/dubbo/pull/14382) 和 [#14433](https://github.com/apache/dubbo/pull/14433)
- 更新 `io.micrometer:micrometer-bom`：1.13.0 -> 1.13.2，详见 [#14331](https://github.com/apache/dubbo/pull/14331) 和 [#14440](https://github.com/apache/dubbo/pull/14440)
- 更新 `io.micrometer:micrometer-core`：1.13.0 -> 1.13.2，详见 [#14327](https://github.com/apache/dubbo/pull/14327) 和 [#14438](https://github.com/apache/dubbo/pull/14438)
- 更新 `io.micrometer:micrometer-tracing-bom`：1.3.0 -> 1.3.2，详见 [#14328](https://github.com/apache/dubbo/pull/14328) 和 [#14437](https://github.com/apache/dubbo/pull/14437)
- 更新 `io.opentelemetry:opentelemetry-bom`：1.39.0 -> 1.40.0，详见 [#14402](https://github.com/apache/dubbo/pull/14402)
- 更新 `io.projectreactor:reactor-core`：3.6.6 -> 3.6.8，详见 [#14333](https://github.com/apache/dubbo/pull/14333) 和 [#14434](https://github.com/apache/dubbo/pull/14434)
- 更新 `jackson_version`：2.17.1 -> 2.17.2，详见 [#14400](https://github.com/apache/dubbo/pull/14400)
- 更新 `jetty_version`：9.4.54.v20240208 -> 9.4.55.v20240627，详见 [#14401](https://github.com/apache/dubbo/pull/14401)
- 更新 `net.bytebuddy:byte-buddy`：1.14.17 -> 1.14.18，详见 [#14436](https://github.com/apache/dubbo/pull/14436)
- 更新 `netty4_version`：4.1.110.Final -> 4.1.112.Final，详见 [#14324](https://github.com/apache/dubbo/pull/14324) 和 [#14459](https://github.com/apache/dubbo/pull/14459)
- 更新 `org.apache.commons:commons-lang3`：3.14.0 -> 3.15.0，详见 [#14462](https://github.com/apache/dubbo/pull/14462)
- 更新 `org.eclipse.jetty:jetty-maven-plugin`：9.4.54.v20240208 -> 9.4.55.v20240627，详见 [#14403](https://github.com/apache/dubbo/pull/14403)
- 更新 `org.springframework.security:spring-security-bom`：5.8.12 -> 5.8.13，详见 [#14362](https://github.com/apache/dubbo/pull/14362)
- 更新 `protobuf-java_version`：3.25.3 -> 3.25.4，详见 [#14476](https://github.com/apache/dubbo/pull/14476)
- 更新 `spring_version`：5.3.36 -> 5.3.37，详见 [#14330](https://github.com/apache/dubbo/pull/14330)

## 贡献者

Dubbo 感谢以下贡献者对本次发布的贡献：

- [AlbumenJ](https://github.com/AlbumenJ)
- [binfeiruci](https://github.com/binfeiruci)
- [caoyanan666](https://github.com/caoyanan666)
- [code4china](https://github.com/code4china)
- [conghuhu](https://github.com/conghuhu)
- [dependabot](https://github.com/dependabot)
- [mrwangyin](https://github.com/mrwangyin)
- [QingJuBaiTang](https://github.com/QingJuBaiTang)
- [Xwiam](https://github.com/Xwiam)

## 新贡献者

- [binfeiruci](https://github.com/binfeiruci) 在 [#14389](https://github.com/apache/dubbo/pull/14389) 中做出了首次贡献
- [mrwangyin](https://github.com/mrwangyin) 在 [#14381](https://github.com/apache/dubbo/pull/14381) 中做出了首次贡献
- [QingJuBaiTang](https://github.com/QingJuBaiTang) 在 [#14421](https://github.com/apache/dubbo/pull/14421) 中做出了首次贡献
- [code4china](https://github.com/code4china) 在 [#14468](https://github.com/apache/dubbo/pull/14468) 中做出了首次贡献
- [Xwiam](https://github.com/Xwiam) 在 [#14478](https://github.com/apache/dubbo/pull/14478) 中做出了首次贡献

**完整变更日志**: [dubbo-3.2.14...dubbo-3.2.15](https://github.com/apache/dubbo/compare/dubbo-3.2.14...dubbo-3.2.15)
```