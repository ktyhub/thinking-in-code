# spring-cloud-alibaba 2.2.10-RC2
```markdown
## ⭐️ 功能 / 增强

- 为治理模块添加 additional-spring-configuration-metadata.json ([#3246](https://github.com/alibaba/spring-cloud-alibaba/pull/3246))
- 为治理模块添加 helm 支持 ([#3256](https://github.com/alibaba/spring-cloud-alibaba/pull/3256))
- 为 xDS 适配器添加配置处理器 ([#3241](https://github.com/alibaba/spring-cloud-alibaba/pull/3241))

## 🐞 Bug 修复

- [Nacos] 修复在配置刷新时获取过时的 nacos 值，适用于 `nacos-client-2.1.x` ([#3600](https://github.com/alibaba/spring-cloud-alibaba/pull/3600))
- [Nacos] 修复在启用 `spring.config.import` 时设置默认 nacos 服务器地址 ([#3601](https://github.com/alibaba/spring-cloud-alibaba/pull/3601))
- [Nacos] Nacos 与 SpringBootAdmin 的集成（[#3308](https://github.com/alibaba/spring-cloud-alibaba/pull/3308))
- [Nacos] 添加 IPv6 地址替换条件 ([#3232](https://github.com/alibaba/spring-cloud-alibaba/pull/3232))
- [Nacos] 修复 nacos 发现/配置日志 ([#3160](https://github.com/alibaba/spring-cloud-alibaba/pull/3160))
- [Nacos] 修复 nacos 发现/配置日志 ([#3160](https://github.com/alibaba/spring-cloud-alibaba/pull/3160))
- [Nacos] 移除 IPv6 地址的无用后缀，优化 Appactive 模块 ([#3107](https://github.com/alibaba/spring-cloud-alibaba/pull/3107))
- [Sentinel] 修复 SentinelRestTemplate 支持自定义 RestTemplate ([#3345](https://github.com/alibaba/spring-cloud-alibaba/pull/3345))
- [Sentinel] 修复 fallback 支持 factoryBean ([#3163](https://github.com/alibaba/spring-cloud-alibaba/pull/3163))
- [Sentinel] 移除 sentinel 校验注解 ([#3121](https://github.com/alibaba/spring-cloud-alibaba/pull/3121))
- [RocketMQ] 修复 pollable consumer 无法正确确认消息的问题 ([#3247](https://github.com/alibaba/spring-cloud-alibaba/pull/3247))
- [RocketMQ] 修复 RocketMQ 秘钥泄露风险 ([#3092](https://github.com/alibaba/spring-cloud-alibaba/pull/3092))
- [xDS] 修复 eds 协议从未被观测的 bug ([#3109](https://github.com/alibaba/spring-cloud-alibaba/pull/3109))

## 📔 参考文档

- [英文版本](https://sca.aliyun.com/en-us/docs/2022.0.0.0/user-guide/nacos/quick-start/)
- [中文版本](https://sca.aliyun.com/zh-cn/docs/2022.0.0.0/user-guide/nacos/quick-start/)
- [阿里云商业组件](https://github.com/alibaba/aliyun-spring-boot)

## ❤️ 贡献者

感谢为此次发布做出贡献的人员！

- [ruansheng8](https://github.com/ruansheng8)
- [chickenlj](https://github.com/chickenlj)
- [zhangbinhub](https://github.com/zhangbinhub)
- [steverao](https://github.com/steverao)
- [yuluo-yx](https://github.com/yuluo-yx)
- [min1854](https://github.com/min1854)
- [LeBW](https://github.com/LeBW)
- [panzhi33](https://github.com/panzhi33)
- [123liuziming](https://github.com/123liuziming)
```