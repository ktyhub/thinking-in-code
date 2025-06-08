# shenyu v2.5.0
```markdown
## 2.5.0

### 新功能

1. 添加 `logging-aliyun-sls` 插件
2. 添加 `mock` 插件
3. 添加 `logging-es` 插件
4. 添加 `logging-rocketmq` 插件
5. 添加 `logging-kafka` 插件
6. 在响应插件中添加自定义消息写入器
7. 在管理端添加记录日志功能
8. 添加 `apache dubbo http`
9. 添加 `nacos` 注册功能
10. 为 `sofa` 客户端添加注解拼接类的逻辑
11. 为 `motan` 客户端添加注解拼接类的逻辑
12. 添加 `netty http` 服务器参数
13. 为 `apache dubbo` 客户端添加注解拼接类的逻辑
14. 添加警报模块
15. 为 `MotanPlugin` 添加可配置的超时支持
16. 添加 API 文档
17. 添加用户权限（不包括管理员）
18. 将 `springBoot` 升级到 2.6.8
19. 添加支持注册实例到 `consul`
20. 管理端支持 `oracle` 数据库

### API 变更

### 增强

1. 增强 `cache` 插件
2. 增强 `divide` 插件

### 重构

1. 重构 `spring cloud loadbalancer`
2. 重构线程池
3. 重构最大内存配置逻辑
4. 重构 `cors` 逻辑
5. 重构选择器匹配
6. 重构固定和弹性连接提供者池
7. 重构 `uri` 注册
8. 重构 `zk` 客户端删除逻辑
9. 重构 `IpUtils`
10. 重构结果包装
11. 重构应用认证
12. 重构 `http` 客户端
13. 重构代理和 `webclient` 移除主机
14. 重构共享线程池

### Bug 修复

1. 修复 `divide` 插件中的空指针异常
2. 修复 `body maxInMemorySize`
3. 修复管理端在选择器中延迟更新处理的问题
4. 修复注册客户端循环错误
5. 修复组合插件的错误
6. 修复 `sofa` 和 `websocket` 客户端无损注册的问题
7. 修复 `grpc` 客户端无损注册的问题
8. 修复 `springcloud` 客户端无损注册的问题
9. 修复 `spring cloud dubbo` 示例
10. 修复由于 `spring MVC` 示例同步导致的管理模块 NPE 问题
11. 修复引导程序中 `curator` 版本不兼容的问题
12. 修复隐藏逻辑错误
13. 修复加载本地插件失败的问题
14. 修复 `pg` 脚本错误
15. 修复 `hystrix-plugin` 测试失败的问题
16. 修复通过 `consul` 注册客户端时只注册一个元数据的问题
17. 修复 `websocket datasync` 可以选择允许来源以避免 CSRF 的问题
```