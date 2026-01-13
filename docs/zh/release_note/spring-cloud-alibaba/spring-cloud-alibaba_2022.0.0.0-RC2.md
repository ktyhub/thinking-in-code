# spring-cloud-alibaba 2022.0.0.0-RC2

## ⭐️ 特性 / 改进

- [Seata] 优化了 alibaba-seata：使用 `feign.RequestInterceptor` 传递 XID ([#3171](https://github.com/alibaba/spring-cloud-alibaba/pull/3171))
- [Seata] 支持 Seata 模块的 GraalVM ([#3161](https://github.com/alibaba/spring-cloud-alibaba/pull/3161))
- [Sentinel] 解决了 Sentinel OpenFeign 静态编译问题 ([#3184](https://github.com/alibaba/spring-cloud-alibaba/pull/3184))
- [Sentinel] 解决了注解 `SentinelRestTemplate` 无法加载到 `native-image` 问题 ([#3168](https://github.com/alibaba/spring-cloud-alibaba/pull/3168))
- [Sentinel] 回退支持 FactoryBean ([#3135](https://github.com/alibaba/spring-cloud-alibaba/pull/3135))
- [Sentinel] Sentinel Feign-Client 支持快速注册 ([#3007](https://github.com/alibaba/spring-cloud-alibaba/pull/3007))
- [Sentinel] 重构了 Sentinel 示例 ([#3144](https://github.com/alibaba/spring-cloud-alibaba/pull/3144))
- [Sentinel] 移除了 Sentinel 的 `@Validated` 注解 ([#3122](https://github.com/alibaba/spring-cloud-alibaba/pull/3122))
- [Sentinel] 将 PostConstruct 方法设为公开 ([#3009](https://github.com/alibaba/spring-cloud-alibaba/pull/3009))
- [Dependency] 更新了 2022.x 分支中的 yml 格式 ([#3098](https://github.com/alibaba/spring-cloud-alibaba/pull/3098))
- [Dependency] 添加了 maven 示例模块 ([#3001](https://github.com/alibaba/spring-cloud-alibaba/pull/3001))
- [RocketMQ] 移除了重复的依赖项 ([#3008](https://github.com/alibaba/spring-cloud-alibaba/pull/3008))
- [Nacos] 支持在 SCL 中双栈地址注册和发现 ([#3236](https://github.com/alibaba/spring-cloud-alibaba/pull/3236))
- [Nacos] 更新了 nacos-config-examples ([#3010](https://github.com/alibaba/spring-cloud-alibaba/pull/3010))
- [Nacos] 支持在 JSON 配置中添加注释 ([#3047](https://github.com/alibaba/spring-cloud-alibaba/pull/3047))
- [Enhancements] 将 Maven 版本更新至 3.9.0 ([#3228](https://github.com/alibaba/spring-cloud-alibaba/pull/3228))
- [Enhancements] 为集成示例添加了 Docker 支持 ([#3209](https://github.com/alibaba/spring-cloud-alibaba/pull/3209))

## 🐞 Bug 修复

- [RocketMQ] 修复了可轮询消费者未正确确认消息的问题 ([#3248](https://github.com/alibaba/spring-cloud-alibaba/pull/3248))
- [RocketMQ] 修复了 RocketMQ SecretKey 泄漏风险 ([#3091](https://github.com/alibaba/spring-cloud-alibaba/pull/3091))
- [Nacos] 修复了 NacosLoadBalancer 不能与 HintBasedServiceInstanceListSupplier 一起使用的问题 ([#3270](https://github.com/alibaba/spring-cloud-alibaba/pull/3270))
- [Nacos] 修复了移除无效依赖定义的问题 ([#3178](https://github.com/alibaba/spring-cloud-alibaba/pull/3178))
- [Nacos] 修复了 nacos 发现/配置日志的问题 ([#3166](https://github.com/alibaba/spring-cloud-alibaba/pull/3166))
- [Nacos] 修复了 IPv6 地址无效后缀问题 ([#3189](https://github.com/alibaba/spring-cloud-alibaba/pull/3189))
- [Sentinel] 修复了反应式 Sentinel 断路器测试 ([#3054](https://github.com/alibaba/spring-cloud-alibaba/pull/3054))
- [Example] 修复了 sidecar-example 示例 ([#3267](https://github.com/alibaba/spring-cloud-alibaba/pull/3267))
- [Example] 修复了 webClient 无法调用 nacos 服务的问题 ([#3254](https://github.com/alibaba/spring-cloud-alibaba/pull/3254))

## 📔 参考文档

- [英文版本](https://spring-cloud-alibaba-group.github.io/github-pages/2022/en-us/2022.0.0.0-RC2.html)
- [中文版](https://spring-cloud-alibaba-group.github.io/github-pages/2022/zh-cn/2022.0.0.0-RC2.html)
- [阿里云商业组件](https://github.com/alibaba/aliyun-spring-boot)

## 🔨 依赖升级

- [Seata] 升级到 1.7.0-native-rc2 ([#3161](https://github.com/alibaba/spring-cloud-alibaba/pull/3161))
- [Nacos] 升级到 2.2.1 ([#3287](https://github.com/alibaba/spring-cloud-alibaba/issues/3287))
- [Spring Boot] 升级到 3.0.2 ([#3184](https://github.com/alibaba/spring-cloud-alibaba/pull/3184))

## ❤️ 贡献者

感谢为此次发布做出贡献的所有贡献者！

- [steverao](https://github.com/steverao)
- [ruansheng8](https://github.com/ruansheng8)
- [yuluo-yx](https://github.com/yuluo-yx)
- [LeBW](https://github.com/LeBW)
- [WangLiang181230](https://github.com/wangliang181230)
- [zhouzhong150](https://github.com/zhouzhong150)
- [panxiaojun233](https://github.com/panxiaojun233)
- [alan19108](https://github.com/alan19108)
- [steve-altman](https://github.com/steve-altman)
- [min1854](https://github.com/min1854)
- [panzhi](https://github.com/panzhi)
- [Freeman Liu](https://github.com/DanielLiu1123)
- [alan19108](https://github.com/alan19108)
- [liuweiGL](https://github.com/liuweiGL)
- [frank-zsy](https://github.com/frank-zsy)
```