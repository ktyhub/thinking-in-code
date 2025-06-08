# shenyu v2.4.3
```markdown
## 2.4.3

### 新功能

1. 添加 HTTP 注册客户端重试功能。
2. 支持 octet-stream 内容类型。
3. 支持重定向到引导程序外的 URI 并重构代码。
4. 添加本地 API 授权。
5. 支持配置 Dubbo 消费者池。
6. 支持 DividePlugin 故障转移重试。
7. 支持 WebSocket 客户端配置。
8. 支持在 HttpClient 中配置 Netty 线程池。
9. 支持 MemoryLimitedLinkedBlockingQueue。
10. 支持阿里巴巴 Dubbo 插件共享线程池。
11. 支持 gRPC 插件共享线程池。
12. 添加 Metrics 插件。
13. 添加 Cache 插件。
14. 添加日志 RocketMQ 插件。

### API 变更

### 增强

1. 测试 Param 映射与 Rewrite 插件的组合。
2. 测试 Param 映射与 Redirect 插件的组合。
3. 测试 RateLimiter 与 Rewrite 插件的组合。
4. 测试 RateLimiter 与 Redirect 插件的组合。
5. 测试 Request 与 Redirect 插件的组合。
6. 测试 Request 与 Rewrite 插件的组合。
7. 测试 JWT 与 RateLimiter 插件的组合。
8. 测试 JWT 与 Redirect 插件的组合。
9. 测试 JWT 与 Rewrite 插件的组合。
10. 添加 Resilience4j 插件的集成测试。
11. 添加 Hystrix 插件的集成测试。
12. 更新 junit4 到 junit5。
13. 添加 shenyu-examples-springmvc-tomcat。
14. 优化密码加密。
15. 优化并验证 shenyu-admin 模块接口参数。
16. 优化可配置的 Shenyu 代理日志收集。
17. 优化同步数据时的数据初始化代码。
18. 为 LoggingRocketMQPlugin 添加单元测试。

### 重构

1. 使用 Wheel-Timer 替代 ScheduledExecutorService 类。
2. 移除 DisruptorProvider#onData(final Consumer function)。
3. 在 MetadataExecutorSubscriber 中同步实例而非类。
4. 重构 admin 构建处理关于注册 URI 的部分。
5. Spring Cloud 客户端自动设置端口。
6. 重构 JWT 支持多级令牌。
7. 移除监控插件。
8. 更改 logback 主题。
9. 移除 shenyu-agent。

### Bug 修复

1. 修复初始化 CommonUpstreamUtils 的 NPE 问题。
2. 对 Nacos 注册失败进行判断。
3. 修复使用不存在用户登录时的 NPE 问题。
4. 修复双重日志问题。
5. 修复拼写错误的令牌。
6. 修复 retryCount 不工作的 bug。
7. 修复令牌解析错误。
8. 修复 WebSocket 中的大数据问题。
9. 修复 NettyHttpClientPlugin 失败时不重试的问题。
10. 修复 [CVE-2021-41303](https://github.com/advisories/GHSA-f6jp-j6w3-w9hm)。
11. 修复所有插件包含条件判断不工作的 bug。
12. 修复 HTTP 头丢失问题。
13. 修复 Rewrite 插件应支持 {PathVariable} 请求的 bug。
14. 修复与 Nacos 数据同步的 bug。
15. 修复 Nacos 命名空间配置。
16. 修复在打开 context-path 插件时的 NPE 或 WebSocket 代理失败问题。
17. 修复 HTTP 注册客户端插件端口占用检测问题。
```