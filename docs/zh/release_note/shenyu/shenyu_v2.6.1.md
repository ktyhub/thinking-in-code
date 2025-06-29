# shenyu v2.6.1
```markdown
## 2.6.1

### 新功能

1. 为 ShenYu Ingress 控制器添加 Dubbo 注解分析
2. 支持插件生命周期
3. 通过 OpenFeign 支持 ShenYu SDK 客户端
4. 为 ShenYu Ingress 控制器添加 Motan 插件和 Spring Cloud
5. 支持警报通知
6. ShenYu 客户端添加发现注册中心
7. 添加 ShenYu 上下文路径插件 Ingress 控制器
8. 添加 ShenYu gRPC 插件 Ingress 控制器
9. 添加 ShenYu Sofa Ingress 控制器
10. 添加 Nacos、etcd、Eureka 作为发现服务
11. 添加新插件：basic-auth
12. 添加 ShenYu 日志 RabbitMQ 插件
13. 通过 ShenYu 发现绑定选择器

### API 变更

1. 重构 ShenYu 同步数据的数据结构

    ```plaintext
    plugin.list ["plugin.sign", "plugin.dubbo", "plugin.pluginName"]
    -> plugin.sign
    -> plugin.dubbo
    -> plugin.pluginName

    examples data:
    selector.key1.list ["selector.key1.value1", "selector.key1.value2", "selector.key1.value3"]
    -> selector.key1.value1
    -> selector.key1.value2
    -> selector.key1.value3

    selector.key2.list ["selector.key2.value1", "selector.key2.value2", "selector.key2.value3"]
    -> selector.key2.value4
    -> selector.key2.value5
    -> selector.key2.value6
    ```

2. 支持 NettyClient 作为默认的 HttpClient
3. 重构 admin-listener 以支持管理员数据同步
4. 移除 brpc 支持，包括 brpc 插件、brpc 示例、brpc 集成测试
5. 移除 Apollo 依赖以支持 Java 17（需自行添加 jar 包）
6. 移除 ShenYu 中间件注册客户端

### 增强

1. 为 ShenYu 模型事件添加测试用例
2. 添加选择器事件测试用例
3. 添加 Motan 端到端测试用例
4. 支持 Motan 协议
5. 添加 gRPC 端到端测试用例
6. 将 apache-rat-plugin 升级到 0.15
7. 在匹配条件中支持 String isBlank
8. Clickhouse 支持 TTL 字段
9. 支持 HttpUtils 日志级别
10. 为 Ingress Reconciler 添加单元测试
11. 打包分发时支持校验和
12. 在 TCP 插件中实现零拷贝
13. ShenYu 客户端 SpringMVC 支持默认 appName 和 contextPath
14. 添加 sdk-feign 示例和集成测试用例
15. ElasticSearch 日志支持自定义索引
16. 增强 gRPC 插件以支持 ShenYu 负载均衡器
17. 支持 HTTP2 上游服务器
18. 增强 Dubbo 插件以支持 ShenYu 负载均衡器
19. 添加 Ingress 控制器集成 SpringCloud 测试用例
20. 添加 WebSocket 插件代理 ping 配置
21. 添加 Ingress 控制器集成 WebSocket 测试
22. Rewrite 插件支持百分比
23. 管理员使用发现配置初始化发现服务
24. Divide 插件适配 ShenYu 发现
25. 警报报告支持配置管理员集群多服务器
26. WebSocket 插件适配 ShenYu 发现
27. 将服务实例注册到发现服务中
28. 管理员适配发现本地模式
29. 为 ShenYu SDK 核心添加测试用例
30. 为 ShenYu 发现添加单元测试
31. 添加 OpenGauss 端到端测试用例
32. 添加上传插件 jar 大小限制
33. 为 ShenYu 客户端 Spring WebSocket 添加单元测试
34. 将 Shiro 版本升级到安全版本（1.18.0）
35. 更新许可证并升级 SpringBoot（2.7.17）
36. 在网关全局错误发生时发送警报消息
37. 添加 EurekaDiscoveryService 单元测试

### 重构

1. 重构 2.6.1 版本（pom.xml）
2. 通过 computeIfAbsent 简化 Map 操作
3. 重构 Polaris 测试用例
4. 将 Maven Wrapper 从 io.takari 迁移到官方发布
5. 在 WebClientMessageWriter 中使用编译的 Pattern
6. 重构 HttpUtils 请求方法
7. 更新 GitHub Action 版本
8. 重构同步数据中心抽象模板方法
9. 更新 MenuProject、MenuModule、MenuDocItem 到 VO
10. 统一 Dubbo 版本
11. 重构 HttpClient 的包
12. 重构 GitHub CI Action 缓存
13. 重构 Motan POJO 作为 RPC 方法参数
14. 将 Kafka 客户端版本升级到 3.4.0
15. 将管理员 Swagger 从 Springfox 迁移到 Springdoc
16. 将 Dubbo 版本升级到 3.2.5 并重构一些方法
17. 重构 AbstractShenyuSdkClient 的 getOrDefault 方法
18. 重构 HttpClient 属性
19. 重构 WebClient 插件实现
20. 将 com.google.guava:guava 升级到 32.0.0-jre
21. 支持 K8s 作为端到端测试用例环境
22. 重构 Restapi 作为 REST API 请求映射
23. 推荐使用 StringBuilder 进行字符串连接
24. 将 Netty 分配器设置为非池化
25. 重构启动横幅
26. 删除重复代码并提取相同代码以供通用使用
27. 标准化空检测编码
28. 重构日志插件选择器处理程序
29. 重构插件类加载器
30. 重构日志插件以支持插件级别的采样率
31. 重构上下文路径注册以避免重复上下文路径（使用 select for update）

### Bug 修复

1. 避免创建 TimeoutException 的永久开销
2. 修复示例模块主类路径
3. 修复插件页面排序错误
4. 更新 Makefile SNAPSHOT 版本
5. 修复 RELEASE-NOTES.md 中的拼写错误
6. 修复 ShenYu 示例的错误包名
7. 修复密码规则，添加特殊字符 '#' 和 '.'
8. 修复 Zookeeper:3.8.0 的健康检查问题
9. 修复不稳定的 CI 检查
10. 添加 e2e WaitForHelper 异常日志
11. 修复 SpringCloud 插件无法获取 scheme
12. 修复 Javadoc 构建错误
13. 修复 HttpUtils 中的错误请求类型
14. 修复更新授权时 userId 无法成功更新的问题
15. 修复 TCP 插件中的线程泄漏
16. 格式化 ShenYu 集成测试/README 中的 "Quick start" 部分
17. 修复 SQL 脚本错误
18. 修复 URI 插件路径错误并将路径更改为 rawpath
19. 修复 WebSocket 插件以支持重写插件
20. 修复 es-logging 的 indexName 无效问题
21. 修复上下文路径插件的错误
22. 修复 ShenYu 管理员 CPU 激增问题
23. 修复警报 LocalDateTime 格式问题
24. ShenYu 客户端持久化 ApiDoc 错误重试
25. 修复 applicationContextAware 初始化过晚的问题
26. 修复重复的响应头
27. 设置等待 K8s 集群启动的最长时间
28. 修复 Clickhouse 日志插件状态字段的类型错误
29. 修复响应插件内存泄漏
30. 修复数据类型对比错误
31. 修复 HTTP 数据同步错误
32. 修复拼写错误
33. 修复 ShenYu Dubbo 注册状态
34. 修复 buildDiscoveryUpstreamPath 导致多个 `/` 的问题
35. 修复通过 EurekaInstanceRegisterRepository#persistInstance 向 Eureka 注册时的错误
36. 修复 AbstractLogPluginDataHandler 的 hashcode 错误
37. 修复 Redis 集群模式下 Ratelimit 插件键错误
38. 修复多个 ShenYu 客户端注册重复上下文路径
39. 修复 ShenYu 在关闭插件后无法加载扩展插件的问题
40. 修复 ShenYu 管理员中的上传插件 jar 错误
41. 修复插件无法加载资源路径文件的问题
42. 修复管理员脚本以显示字典代码
43. 修复签名插件中的授权冲突
44. 修复签名插件上下文路径匹配错误
```