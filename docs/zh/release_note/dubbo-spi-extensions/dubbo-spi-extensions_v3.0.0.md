# dubbo-spi-extensions v3.0.0
```markdown
## 变更内容

## 参考

- 兼容 Apache Dubbo [3.0.x](https://github.com/apache/dubbo/tree/3.0)

## 增强功能

- [dubbo-cluster-specify-address-dubbo2] 支持 v2 IP 规范 [#179](https://github.com/apache/dubbo-spi-extensions/pull/179)
- [dubbo-cluster-polaris-dubbo2] 添加 Polaris 扩展支持 [#184](https://github.com/apache/dubbo-spi-extensions/pull/184)
- [dubbo-filter-polaris-dubbo2] 功能：分离断路器和限流过滤器，使其更易于开发者使用 [#187](https://github.com/apache/dubbo-spi-extensions/pull/187)
- [dubbo-filter-seata] 将 Seata 核心设置为可选依赖 [#188](https://github.com/apache/dubbo-spi-extensions/pull/188)
- [dubbo-gateway-extensions] 添加网关模式扩展 [#205](https://github.com/apache/dubbo-spi-extensions/pull/205)
- [polaris] 支持 Polaris 断路器功能 [#212](https://github.com/apache/dubbo-spi-extensions/pull/212)
- [Cross thread] 在 dubbo-cross-thread-extensions 中通过注解标记跨线程 [#215](https://github.com/apache/dubbo-spi-extensions/pull/215)
- [tag subnets] 为近距离 RPC 添加子网标签 [#216](https://github.com/apache/dubbo-spi-extensions/pull/216)
- [Serialization] 添加 Fury 序列化框架到 Dubbo [#226](https://github.com/apache/dubbo-spi-extensions/pull/226)
- [dubbo-serialization-jackson] 添加 Jackson 序列化扩展 [#231](https://github.com/apache/dubbo-spi-extensions/pull/231)
- 兼容 Dubbo 3.0.x [#336](https://github.com/apache/dubbo-spi-extensions/pull/336)

## Bug 修复

- 修复重试和缺失字段的问题 [#182](https://github.com/apache/dubbo-spi-extensions/pull/182)
- 修复回滚错误描述 [#209](https://github.com/apache/dubbo-spi-extensions/pull/209)
- 修复 dubbo-serialization-jackson 中资源文件路径错误的问题 [#233](https://github.com/apache/dubbo-spi-extensions/pull/233)

## 文档

- 明确指出 Hessian-RPC 默认是不安全的 [#196](https://github.com/apache/dubbo-spi-extensions/pull/196)
- 自动生成代码树文档 [#224](https://github.com/apache/dubbo-spi-extensions/pull/224)
- 访问代码树生成文档 [#227](https://github.com/apache/dubbo-spi-extensions/pull/227)

## 依赖升级

- 更新 Kryo 版本从 5.3.0 到 5.4.0 [#190](https://github.com/apache/dubbo-spi-extensions/pull/190)
- 更新 SnakeYAML 版本从 1.32 到 2.0 [#208](https://github.com/apache/dubbo-spi-extensions/pull/208)
- 更新 grpc-protobuf 版本从 1.31.1 到 1.53.0 [#214](https://github.com/apache/dubbo-spi-extensions/pull/214)
- 更新 org.springframework:spring-framework-bom 版本从 4.3.29.RELEASE 到 4.3.30.RELEASE [#217](https://github.com/apache/dubbo-spi-extensions/pull/217) [#218](https://github.com/apache/dubbo-spi-extensions/pull/218) [#219](https://github.com/apache/dubbo-spi-extensions/pull/219) [#220](https://github.com/apache/dubbo-spi-extensions/pull/220) [#221](https://github.com/apache/dubbo-spi-extensions/pull/221) [#222](https://github.com/apache/dubbo-spi-extensions/pull/222) [#223](https://github.com/apache/dubbo-spi-extensions/pull/223)
- 更新 jetcd 版本从 0.5.7 到 0.7.7 [#398](https://github.com/apache/dubbo-spi-extensions/pull/398)

## 新贡献者

- [@andrewshan](https://github.com/andrewshan) 在 [#184](https://github.com/apache/dubbo-spi-extensions/pull/184) 中做出了他们的第一次贡献
- [@raboof](https://github.com/raboof) 在 [#196](https://github.com/apache/dubbo-spi-extensions/pull/196) 中做出了他们的第一次贡献
- [@chuntaojun](https://github.com/chuntaojun) 在 [#212](https://github.com/apache/dubbo-spi-extensions/pull/212) 中做出了他们的第一次贡献
- [@carlvine500](https://github.com/carlvine500) 在 [#215](https://github.com/apache/dubbo-spi-extensions/pull/215) 中做出了他们的第一次贡献
- [@chaokunyang](https://github.com/chaokunyang) 在 [#226](https://github.com/apache/dubbo-spi-extensions/pull/226) 中做出了他们的第一次贡献

**完整变更日志**: [v1.0.3...v3.0.0](https://github.com/apache/dubbo-spi-extensions/compare/v1.0.3...v3.0.0)
```