# shenyu v2.5.1

## 2.5.1

### 新特性

1. 添加 brpc 示例
2. 添加 spring boot starter 插件 brpc 和 admin
3. 添加 brpc 插件
4. 添加 shenyu-client-api-doc
5. 添加 sdk 重复类检查
6. 支持不同的 nacos 命名空间
7. 在 mock 插件中添加数组方法表达式
8. 支持按请求生成 mock 数据
9. 支持用户指定 http 请求域名
10. 添加 MockRequestRecord
11. 开发 shenyu-register-instance-eureka
12. 支持 API 文档 Api doc 详细映射
13. 添加 api doc ddl
14. 添加 TagMapper 和 TagRelationMapper
15. 添加 api 和 api_rule_relation 映射
16. 未配置规则
17. 重构消息读取器
18. 添加 sentinel 规则处理参数
19. 添加 shenyu-e2e 测试引擎
20. 基于 casdoor 制作 Apache Shenyu SSO 认证插件
21. 添加 logging-tencent-cls 插件
22. 支持 clickhouse-logging 插件
23. 添加 logging-pulsar 插件
24. 添加新插件：key-auth
25. 修复 sign 插件 DataBufferLimitException 错误
26. 修复 context-path 错误

### API 变更

### 增强

1. 为 motan 添加更简单的客户端注解
2. 为 websocket 添加更简单的客户端注解
3. 在 starter 中为 motan 插件添加配置
4. 为 shenyu-client-springcloud 和 shenyu-client-springmvc 添加便捷注解

### 重构

1. 重构 api doc 的 mock 请求部分代码
2. 重构 logging-clickhouse
3. 优化 dubbo 的 maven 依赖
4. 重构 sign 插件
5. 更新 ShenyuExtConfiguration
6. 移除不必要的单例
7. 修复多线程生成 mock 数据问题
8. 重构 sdk 测试和 processArgument
9. 重构 DefaultSignService
10. 修复 shenyu-admin 规则
11. 优化 ShaUtil
12. 修复缓存过大问题
13. 修复 ConcurrentModificationException
14. 修复 etcd 中的数据同步问题
15. 重构 shenyu sdk 客户端
16. 优化请求超时响应
17. 重构日志模块
18. 重构 shenyu-client-springcloud
19. 重构 MotanServiceEventListener
20. 重构 shenyu-admin 数据同步监听器
21. 重构 shenyu-client-tars
22. 重构 alibaba dubbo 客户端 sdk
23. 重构 springmvc 客户端
24. 重构 admin 映射配置
25. 重构 shenyu-plugin-logging
26. 优化随机算法
27. 重构随机负载均衡器
28. 重构 logging-kafka

### Bug 修复

1. 移除冗余的 cookie 设置
2. 修复 appAuth 删除问题
3. 修复 Cryptor-Request 插件
4. 避免重复加载相同的扩展插件
5. 修复 TagRelationQuery
6. 修复升级 sql
7. 修复 Nacos 注册 NPE
8. 修复 sandbox json 解析
9. 防止首次加载失败
10. 通过修改配置字段 setter 修复插件更新 bug
11. 修复 postgresql sql
12. 修复 ShenYu-Admin 启动时的 postgresql 错误
13. 修复 sentinel 无法熔断问题
14. 修复 TencentClsLogCollectClient
15. 修复修改密码错误
16. 修复选择器页面
17. 修复请求插件无法替换 Cookie
18. 修复 RateLimiterPlugin 并发处理错误
```