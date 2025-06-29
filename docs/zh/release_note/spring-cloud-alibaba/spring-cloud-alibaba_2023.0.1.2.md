# spring-cloud-alibaba 2023.0.1.2

## 新功能

- [调度]：新增分布式调度支持 `spring-cloud-starter-alibaba-schedulerx`。更多详情查看 [#3732](https://github.com/alibaba/spring-cloud-alibaba/pull/3732)。

## Bug 修复

- [Nacos]：修复 Nacos 快照配置的 NPE 问题。详情查看 [#3700](https://github.com/alibaba/spring-cloud-alibaba/pull/3700)。
- [Nacos]：修复 Nacos clusterName 和扩展属性的问题。详情查看 [#3771](https://github.com/alibaba/spring-cloud-alibaba/pull/3771)。
- [Nacos]：将 Nacos ConfigService 初始化与普通属性 bean 分离。详情查看 [#3784](https://github.com/alibaba/spring-cloud-alibaba/pull/3784)。
- [Seata]：修复回退方法抛出异常但 Seata 不回滚的问题。详情查看 [#3786](https://github.com/alibaba/spring-cloud-alibaba/pull/3786)。
- [Seata]：优化 Seata Feign 拦截器的 XID。详情查看 [#3744](https://github.com/alibaba/spring-cloud-alibaba/pull/3744)。
- [Sentinel]：修复 Sentinel 应用未重新注册至 Sentinel 控制台的 bug。详情查看 [#3708](https://github.com/alibaba/spring-cloud-alibaba/pull/3708)。
- [AI]：通过环境变量设置 API 密钥。详情查看 [#3714](https://github.com/alibaba/spring-cloud-alibaba/pull/3714)。
- [AI]：添加 Spring 配置元数据。详情查看 [#3735](https://github.com/alibaba/spring-cloud-alibaba/pull/3735)。
- [AI]：添加统一嵌入适配。详情查看 [#3740](https://github.com/alibaba/spring-cloud-alibaba/pull/3740)。
- [AI]：修复统一 AI 嵌入 CI。详情查看 [#3741](https://github.com/alibaba/spring-cloud-alibaba/pull/3741)。
- [AI]：修复 LLM 客户端线程安全问题。详情查看 [#3731](https://github.com/alibaba/spring-cloud-alibaba/pull/3731)。
- [AI]：通过 Spring AI API 适配统一 LLM 语音转录。详情查看 [#3733](https://github.com/alibaba/spring-cloud-alibaba/pull/3733)。
- [AI]：为 TongYiChatOptions 添加 repetitionPenalty 参数构建。详情查看 [#3755](https://github.com/alibaba/spring-cloud-alibaba/pull/3755)。
- [AI]：将 SCA ModelParams 添加至 DashScope。详情查看 [#3789](https://github.com/alibaba/spring-cloud-alibaba/pull/3789)。

## 依赖项

- [AI]：更新 DashScope 版本到 2.14.0。详情查看 [#3715](https://github.com/alibaba/spring-cloud-alibaba/pull/3715)。
- [AI]：升级 Spring AI 版本到 1.0.0-M1。详情查看 [#3772](https://github.com/alibaba/spring-cloud-alibaba/pull/3772)。
- [Sentinel]：2023 更新 Sentinel。详情查看 [#3777](https://github.com/alibaba/spring-cloud-alibaba/pull/3777)。

## 新贡献者

- [libsilverwolf](https://github.com/alibaba/spring-cloud-alibaba/pull/3710) 做出了他们的首次贡献。
- [loong024](https://github.com/alibaba/spring-cloud-alibaba/pull/3735) 做出了他们的首次贡献。
- [n3A87](https://github.com/alibaba/spring-cloud-alibaba/pull/3733) 做出了他们的首次贡献。
- [dongfeng3692](https://github.com/alibaba/spring-cloud-alibaba/pull/3788) 做出了他们的首次贡献。
- [xjs1919](https://github.com/alibaba/spring-cloud-alibaba/pull/3786) 做出了他们的首次贡献。

**完整更新日志**：[2023.0.1.0...2023.0.1.2](https://github.com/alibaba/spring-cloud-alibaba/compare/2023.0.1.0...2023.0.1.2)
```