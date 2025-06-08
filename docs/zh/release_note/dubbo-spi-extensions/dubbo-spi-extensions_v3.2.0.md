# dubbo-spi-extensions v3.2.0
```markdown
# 变更内容

## 参考

- 兼容 Apache Dubbo [3.2.x](https://github.com/apache/dubbo/tree/3.2)

## 增强功能

- [dubbo-cluster-specify-address-dubbo2] 支持 dubbo-cluster-specify-address-dubbo2 中非本地集群的动态 IP 访问，详情见 [#179](https://github.com/apache/dubbo-spi-extensions/pull/179)
- [polaris extension] 添加 polaris 扩展以使 dubbo2.7.x 访问 polaris，详情见 [#184](https://github.com/apache/dubbo-spi-extensions/pull/184)
- [dubbo-filter-polaris-dubbo2] 分离断路器和限流过滤器，使其更易于开发者使用，详情见 [#187](https://github.com/apache/dubbo-spi-extensions/pull/187)
- [dubbo-gateway-extensions] 添加网关模式扩展，详情见 [#205](https://github.com/apache/dubbo-spi-extensions/pull/205)
- [polaris] 支持 polaris 断路器功能，详情见 [#212](https://github.com/apache/dubbo-spi-extensions/pull/212)
- [Cross thread] 在 dubbo-cross-thread-extensions 中通过注解标记跨线程，详情见 [#215](https://github.com/apache/dubbo-spi-extensions/pull/215)
- [tag subnets] 为近距离 RPC 添加子网标签，详情见 [#216](https://github.com/apache/dubbo-spi-extensions/pull/216)
- [Serialization] 添加 fury 序列化框架到 dubbo，详情见 [#226](https://github.com/apache/dubbo-spi-extensions/pull/226)
- [dubbo-serialization-jackson] 添加 jackson 序列化扩展，详情见 [#231](https://github.com/apache/dubbo-spi-extensions/pull/231)
- [dubbo-xds] 从 Dubbo 3.2 导入 Kubernetes 和 xDS 实现，详情见 [#251](https://github.com/apache/dubbo-spi-extensions/pull/251)

## Bug 修复

- 修复错误描述回滚问题，详情见 [#209](https://github.com/apache/dubbo-spi-extensions/pull/209)
- 修复 dubbo-serialization-jackson 中资源文件路径问题，详情见 [#233](https://github.com/apache/dubbo-spi-extensions/pull/233)
- 修复 ServiceConfigURL 的序列化问题，添加 ServiceConfigURLDelegate 支持 protostuff，详情见 [#67](https://github.com/apache/dubbo-spi-extensions/pull/67)
- 修复 Dubbo Redis 注册支持选择数据库的问题，详情见 [#247](https://github.com/apache/dubbo-spi-extensions/pull/247)
- 修复 protobuf 类型在 deepCopy 中丢失字段的问题，详情见 [#268](https://github.com/apache/dubbo-spi-extensions/pull/268)

## 文档

- 明确指出 hessian-rpc 默认是不安全的，详情见 [#196](https://github.com/apache/dubbo-spi-extensions/pull/196)
- 自动生成代码树文档，详情见 [#224](https://github.com/apache/dubbo-spi-extensions/pull/224)
- 📝 升级 Readme，详情见 [#235](https://github.com/apache/dubbo-spi-extensions/pull/235)

## 支持 Dubbo 3.2

- configcenter consul 支持 dubbo-3.2，详情见 [#239](https://github.com/apache/dubbo-spi-extensions/pull/239)
- 广播支持 dubbo-3.2，详情见 [#238](https://github.com/apache/dubbo-spi-extensions/pull/238)
- dubbo-cluster-specify-address 支持 dubbo-3.2，详情见 [#241](https://github.com/apache/dubbo-spi-extensions/pull/241)
- dubbo-register-redis 和 dubbo-register-consul 支持 dubbo-3.2，详情见 [#244](https://github.com/apache/dubbo-spi-extensions/pull/244)
- eakewma 支持 dubbo-3.2，详情见 [#242](https://github.com/apache/dubbo-spi-extensions/pull/242)
- configcenter etcd 支持 dubbo-3.2，详情见 [#243](https://github.com/apache/dubbo-spi-extensions/pull/243)
- 注册中心 etcd 支持 dubbo-3.2，详情见 [#248](https://github.com/apache/dubbo-spi-extensions/pull/248)
- fastjson、gson、jackson 支持 dubbo-3.2，详情见 [#249](https://github.com/apache/dubbo-spi-extensions/pull/249)
- quic 支持 dubbo-3.2，详情见 [#261](https://github.com/apache/dubbo-spi-extensions/pull/261)
- 序列化模块支持 dubbo-3.2，详情见 [#259](https://github.com/apache/dubbo-spi-extensions/pull/259)
- dubbo-common-extensions、dubbo-cross-thread-extensions、dubbo-filter-seata 支持 dubbo-3.2，详情见 [#263](https://github.com/apache/dubbo-spi-extensions/pull/263)
- rpc rocketmq 支持 dubbo-3.2，详情见 [#262](https://github.com/apache/dubbo-spi-extensions/pull/262)
- webservice 支持 dubbo-3.2，详情见 [#269](https://github.com/apache/dubbo-spi-extensions/pull/269)
- rpc rmi 支持 dubbo-3.2，详情见 [#276](https://github.com/apache/dubbo-spi-extensions/pull/276)

## 依赖升级

- 更新 kryo 5.3.0 -> 5.4.0，详情见 [#190](https://github.com/apache/dubbo-spi-extensions/pull/190)
- 更新 snakeyaml 1.32 -> 2.0，详情见 [#208](https://github.com/apache/dubbo-spi-extensions/pull/208)
- 更新 grpc-protobuf 1.31.1 -> 1.53.0，详情见 [#214](https://github.com/apache/dubbo-spi-extensions/pull/214)
- 更新 ch.qos.logback:logback-classic 1.2.11 -> 1.3.12，详情见 [#245](https://github.com/apache/dubbo-spi-extensions/pull/245)
- 更新 org.springframework:spring-framework-bom 4.3.29.RELEASE -> 4.3.30.RELEASE，详情见 [#219](https://github.com/apache/dubbo-spi-extensions/pull/219)
- 更新 org.springframework:spring-framework-bom 4.3.29.RELEASE -> 4.3.30.RELEASE，详情见 [#222](https://github.com/apache/dubbo-spi-extensions/pull/222)
- 更新 org.springframework:spring-framework-bom 4.3.29.RELEASE -> 4.3.30.RELEASE，详情见 [#223](https://github.com/apache/dubbo-spi-extensions/pull/223)
- 更新 org.springframework:spring-framework-bom 4.3.29.RELEASE -> 4.3.30.RELEASE，详情见 [#221](https://github.com/apache/dubbo-spi-extensions/pull/221)
- 更新 org.springframework:spring-framework-bom 4.3.29.RELEASE -> 4.3.30.RELEASE，详情见 [#220](https://github.com/apache/dubbo-spi-extensions/pull/220)
- 更新 org.springframework:spring-framework-bom 4.3.29.RELEASE -> 4.3.30.RELEASE，详情见 [#218](https://github.com/apache/dubbo-spi-extensions/pull/218)
- 更新 org.springframework:spring-framework-bom 4.3.29.RELEASE -> 4.3.30.RELEASE，详情见 [#217](https://github.com/apache/dubbo-spi-extensions/pull/217)
- 更新 ch.qos.logback:logback-classic 1.2.3 -> 1.3.12，详情见 [#246](https://github.com/apache/dubbo-spi-extensions/pull/246)

## 新贡献者

- [@andrewshan](https://github.com/andrewshan) 在 [#184](https://github.com/apache/dubbo-spi-extensions/pull/184) 中做出了首次贡献
- [@raboof](https://github.com/raboof) 在 [#196](https://github.com/apache/dubbo-spi-extensions/pull/196) 中做出了首次贡献
- [@chuntaojun](https://github.com/chuntaojun) 在 [#212](https://github.com/apache/dubbo-spi-extensions/pull/212) 中做出了