# Sentinel v1.8.8

## 功能 / 增强

- 支持使用 JDK 21 或 JDK 17 运行测试 [#3344](https://github.com/alibaba/Sentinel/pull/3344) [#3339](https://github.com/alibaba/Sentinel/pull/3339)
- 添加 `webmvc-6x-adapter` 模块以支持 Spring Boot 3.x [#3351](https://github.com/alibaba/Sentinel/pull/3351)
- 使用 `DateTimeFormatter` 替代 `ThreadLocal` [#3353](https://github.com/alibaba/Sentinel/pull/3353)

## Bug 修复

- 修复不稳定的测试及修复 `passDefaultLocalCheck` [#3367](https://github.com/alibaba/Sentinel/pull/3367)
- 修复使用 `SpiLoader` 时发现的重复 SPI 类问题 [#3387](https://github.com/alibaba/Sentinel/pull/3387)
- 修复由于同名不同参数类型的 `fallback/blockHandler` 引发的反射异常 [#3395](https://github.com/alibaba/Sentinel/pull/3395)

## 依赖项

- 升级 `com.fasterxml.jackson.core:jackson-databind` [#3342](https://github.com/alibaba/Sentinel/pull/3342)
- 升级 `org.springframework:spring-expression` [#3375](https://github.com/alibaba/Sentinel/pull/3375)
- 升级 `org.springframework:spring-context` [#3404](https://github.com/alibaba/Sentinel/pull/3404)
```