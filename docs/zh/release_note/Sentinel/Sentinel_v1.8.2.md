# Sentinel v1.8.2
以下是翻译并梳理后的内容，使用了Markdown语法：

## 功能 / 增强

- 在不同负载条件下自适应优化 `TimeUtil` 性能 [#1746](https://github.com/alibaba/Sentinel/pull/1746)
- 支持 `@SentinelResource` 注解的私有级别 `blockHandler`/`fallback` 方法 [#2163](https://github.com/alibaba/Sentinel/pull/2163)
- 添加 `sentinel-transport-spring-mvc` 模块（将 Spring Web 作为指令中心） [#1957](https://github.com/alibaba/Sentinel/pull/1957)
- 在 Redis 数据源扩展中支持 Redis 集群模式 [#1751](https://github.com/alibaba/Sentinel/pull/1751)
- 支持从系统环境配置 `SentinelConfig`，并优化 `TransportConfig` 中的 `transport-common` 模块 [#2154](https://github.com/alibaba/Sentinel/pull/2154)
- 将所有后端线程池设置为守护线程 [#2181](https://github.com/alibaba/Sentinel/pull/2181)

## 控制台

- 增强对自定义授权相关实现的支持 [#2059](https://github.com/alibaba/Sentinel/pull/2059)

## 依赖

- 将 `sentinel-cluster` 模块中的 Netty 升级到 4.1.48.Final

