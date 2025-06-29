# dubbo-spi-extensions v3.3.0

## 变更内容

## 参考

- 兼容 Apache Dubbo [3.3.x](https://github.com/apache/dubbo/tree/3.3)

## 增强

- [dubbo-wasm-rpc-api] 初始化 dubbo-wasm-rpc-api 模块，详情见 [279](https://github.com/apache/dubbo-spi-extensions/pull/279)
- [dubbo-wasm-cluster-api] 初始化 dubbo-wasm-cluster-api 模块，详情见 [283](https://github.com/apache/dubbo-spi-extensions/pull/283)
- [dubbo-wasm] 支持 Protocol/Exporter/Invoker SPI，详情见 [284](https://github.com/apache/dubbo-spi-extensions/pull/284)
- [dubbo-wasm-registry-api] 初始化 dubbo-wasm-registry-api 模块，详情见 [285](https://github.com/apache/dubbo-spi-extensions/pull/285)
- [dubbo-wasm-common-api] 第五部分：初始化 dubbo-wasm-common-api 模块，详情见 [286](https://github.com/apache/dubbo-spi-extensions/pull/286)
- [dubbo-proxy-bytebuddy] 从 Dubbo 3.2 导入 bytebuddy 实现，详情见 [294](https://github.com/apache/dubbo-spi-extensions/pull/294)
- [dubbo-wasm-remoting-api] 初始化 dubbo-wasm-remoting-api 模块，详情见 [295](https://github.com/apache/dubbo-spi-extensions/pull/295)
- [dubbo-cluster-router-mesh] 将 Mesh Rule Router 移动到 SPI Extensions，详情见 [307](https://github.com/apache/dubbo-spi-extensions/pull/307)
- [dubbo-cluster-router-mesh] 将 Rest Protocol 移动到 SPI Extensions，详情见 [306](https://github.com/apache/dubbo-spi-extensions/pull/306)
- [dubbo-serialization-native-hessian] 将 hession 重命名为 hessian，详情见 [377](https://github.com/apache/dubbo-spi-extensions/pull/377)
- [dubbo-serialization-fury] 移除无用的 maven.compiler 17，详情见 [395](https://github.com/apache/dubbo-spi-extensions/pull/395)
- [dubbo-serialization-jdk] 移动 jdk-serialize 并添加测试用例，详情见 [417](https://github.com/apache/dubbo-spi-extensions/pull/417)

## Bug 修复

- 修复：dubbo-registry-dns 资源泄漏，详情见 [308](https://github.com/apache/dubbo-spi-extensions/pull/308)
- 修复测试库，详情见 [310](https://github.com/apache/dubbo-spi-extensions/pull/310)
- 修复：redis 连接未关闭并返回连接池，详情见 [311](https://github.com/apache/dubbo-spi-extensions/pull/311)
- 修复：尝试修复 etcd 单元测试有时失败的问题，详情见 [312](https://github.com/apache/dubbo-spi-extensions/pull/312)
- 修复模块依赖错误，详情见 [342](https://github.com/apache/dubbo-spi-extensions/pull/342)

## 文档/CI

- 添加 auddo-wasm/README_zh.md，详情见 [298](https://github.com/apache/dubbo-spi-extensions/pull/298)
- 构建：添加 GitHub Actions 工作流，详情见 [300](https://github.com/apache/dubbo-spi-extensions/pull/300)
- 添加 configcenter README，详情见 [299](https://github.com/apache/dubbo-spi-extensions/pull/299)
- 📝 更新 README，详情见 [304](https://github.com/apache/dubbo-spi-extensions/pull/304)
- 构建：CI 支持在 Windows 平台上进行单元测试并添加 Dependabot 配置，详情见 [309](https://github.com/apache/dubbo-spi-extensions/pull/309)

## 依赖升级

- 更新 avro 版本 1.8.2 -> 1.11.3，详情见 [252](https://github.com/apache/dubbo-spi-extensions/pull/252)
- 更新 commons-lang3 版本 3.8.1 -> 3.14.0，详情见 [330](https://github.com/apache/dubbo-spi-extensions/pull/330)
- 更新 testcontainers 版本 1.15.2 -> 1.19.8，详情见 [337](https://github.com/apache/dubbo-spi-extensions/pull/337)
- 更新 spring-cloud-dependencies 版本 Hoxton.SR8 -> Hoxton.SR10，详情见 [335](https://github.com/apache/dubbo-spi-extensions/pull/335)
- 更新 protostuff 版本 1.5.9 -> 1.8.0，详情见 [332](https://github.com/apache/dubbo-spi-extensions/pull/332)
- 更新 maven-assembly-plugin 版本 3.1.0 -> 3.7.1，详情见 [331](https://github.com/apache/dubbo-spi-extensions/pull/331)
- 更新 protobuf-java 版本 3.16.3 -> 3.25.3，详情见 [329](https://github.com/apache/dubbo-spi-extensions/pull/329)
- 更新 sofa_registry 版本 5.2.0 -> 5.4.3，详情见 [328](https://github.com/apache/dubbo-spi-extensions/pull/328)
- 更新 rocketmq 版本 4.9.2 -> 4.9.8，详情见 [326](https://github.com/apache/dubbo-spi-extensions/pull/326)
- 更新 spring-boot 版本 2.4.1 -> 2.7.18，详情见 [327](https://github.com/apache/dubbo-spi-extensions/pull/327)
- 更新 gson 版本 2.8.9 -> 2.10.1，详情见 [324](https://github.com/apache/dubbo-spi-extensions/pull/324)
- 更新 fabric8_kubernetes 版本 6.9.2 -> 6.12.0，详情见 [321](https://github.com/apache/dubbo-spi-extensions/pull/321)
- 更新 fluent-hc 版本 4.5.5 -> 4.5.14，详情见 [320](https://github.com/apache/dubbo-spi-extensions/pull/320)
- 更新 netty-incubator-codec-quic 版本 0.0.14.Final -> 0.0.20.Final，详情见 [319](https://github.com/apache/dubbo-spi-extensions/pull/319)
- 更新 maven-clean-plugin 版本 3.1.0 -> 3.3.2，详情见 [323](https://github.com/apache/dubbo-spi-extensions/pull/323)
- 更新 license-maven-plugin 版本 2.0.0 -> 2.4.0，详情见 [317](https://github.com/apache/dubbo-spi-extensions/pull/317)
- 更新 jedis 版本 3.7.0 -> 3.10.0，详情见 [313](https://github.com/apache/dubbo-spi-extensions/pull/313)
- 更新 dubbo 版本 2.7.18 -> 2.7.23，详情见 [315](https://github.com/apache/dubbo-spi-extensions/pull/315)
- 更新 grpc 版本 1.53.0 -> 1.63.0，详情见 [316](https://github.com/apache/dubbo-spi-extensions/pull/316)
- 升级 dubbo 3.3，详情见 [345](https://github.com/apache/dubbo-spi-extensions/pull/345)

## 新贡献者

- [loongs-zhang](https://github.com/loongs-zhang) 在 [279](https://github.com/apache/dubbo-spi-extensions/pull/279) 中做出了他们的首次贡献
- [xiaozhigang](https://github.com/xiaozhigang) 在 [297](https://github.com/apache/dubbo-spi-extensions/pull/297) 中做出了他们的首次贡献
- [heliang666s](https://github.com/heliang666s) 在 [307](https://github.com/apache/dubbo-spi-extensions/pull/307) 中做出了他们的首次贡献

**完整变更日志**: [v3.2.0...v3.3.0](https://github.com/apache/dubbo-spi-extensions/compare/v3.2.0...v3.3.0)
```