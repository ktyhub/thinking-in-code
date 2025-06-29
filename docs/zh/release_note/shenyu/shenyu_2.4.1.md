# shenyu 2.4.1

### 新功能

1. 支持 PostgreSQL 管理
2. 支持动态加载插件
3. 支持本地修改数据模式
4. 添加 Websocket 插件
5. 添加 CryptorRequest 插件
6. 添加 CryptorResponsePlugin 插件
7. 支持 SpringCloud 的灰度发布
8. 支持 Apache Dubbo 的灰度发布
9. 实现 alibaba-dubbo 的异步调用
10. 支持外部跨过滤器配置
11. 支持签名插件自定义动态签名提供者

### API 变更

1. 重构 shenyu 配置为 yaml 格式

### 增强功能

1. 优化关于 dubbo 异步调用的代码
2. 添加负载均衡器通用模块
3. 优化 SQL 初始化
4. 重构 Admin PageHelper 以查询列表
5. 优化 GlobalErrorHandler
6. 优化 ShenyuPlugin 的 skip 方法接口的返回值为 boolean
7. 优化注册规则
8. 修改 dubbo 和 sofa 参数解析服务
9. 重构签名插件 API
10. 移除 websocket 过滤器

### 重构

1. 移除 lombok 依赖
2. 移除 mapstruct 依赖
3. 支持 JDK8 至 JDK15
4. 为 motan 插件添加缺失的 plugin_handle SQL

### Bug 修复

1. 修复 jwt 插件中的 JsonSyntaxException
2. 修复 resilience4j 插件处理器的 SQL 缺失问题
3. 修复在消费事件中持有事件数据的 disruptor 问题
4. 修复 HealthCheckTask 的死锁问题
5. 修复客户端重试连接时添加日志并增加休眠时间
6. 修复 nacos 的 default_group
7. 修复 maven 忽略和 docker 入口点问题
8. 修复 admin 返回密码问题
9. 修复从用户控制源构建的 LDAP 查询
10. 修复 IP 地址检索错误
11. 修复 Gson toJson 为空的问题
12. 修复 context path 的索引超出范围错误
13. 修复监控初始化指标标签错误
14. 修复 GlobalErrorHandler 错误对象映射问题
15. 修复修改响应插件顺序错误
16. 修复注册的 bug
17. 修复 sofa 插件注册元数据和参数解析问题
18. 修复 motan、dubbo、sofa 插件元数据初始化 bug
```