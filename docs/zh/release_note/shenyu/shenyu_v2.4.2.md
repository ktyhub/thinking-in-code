# shenyu v2.4.2

### 新功能

1. 添加 Mqtt 插件
2. 添加 Shenyu-Agent 模块支持可观测性
3. 在 Shenyu-Agent 模块中添加 opentelemetry 插件
4. 在 Shenyu-Agent 模块中添加 jaeger 插件
5. 在 Shenyu-Agent 模块中添加 zipkin 插件
6. 支持通过 zookeeper 注册 Shenyu 实例
7. 支持 Shenyu 响应数据自定义格式
8. 支持上游检查的 https
9. 添加 RpcContextPlugin 以传输头信息到 rpc 上下文
10. 支持 dubbo 插件的集群模式
11. 支持通过 ETCD 注册 Shenyu 实例

### API 变更

1. 添加 HTTP 同步数据的配置属性
2. 从 Shenyu 管理的白名单接口中移除 `/shenyu-client/`、`/configs/`、`/plugin` 接口

### 增强

1. 优化全局错误处理器以实现灵活处理
2. 优化循环中的数据库访问
3. 优化结果媒体类型并重置响应头
4. 增强 crossfilter 过滤相同的头信息
5. 优化 shenyu 上下文模块数据
6. 优化 dubbo 插件
7. 优化管理数据库操作
8. 重构 Response 和 Cryptor 插件
9. 优化管理资源权限加载器
10. 在通过 http 注册时添加 shenyu 管理的认证
11. 优化 netty 配置
12. 优化资源和权限的 SQL 文件
13. 为选择器和规则添加 ExcludeOperatorJudge
14. 在 Shenyu-dist 中添加 docker-compose
15. 增强 jwt 插件的能力

### 重构

1. 移除 SpEL 和 Groovy 插件
2. 优化 ExtensionLoader 的提示
3. 添加 http 客户端策略属性
4. 重构 shenyu 客户端

### Bug 修复

1. 修复 sentinel 插件异常数量无效的问题
2. 修复 HttpClientProperties.java 中 responseTimeout 无法在 yaml 中配置的问题
3. 修复 webclient 中的 Connection reset by peer 异常
4. 修复注册元数据和 uri 顺序的问题
5. 修复在按下添加按钮时的管理问题
6. 修复 Spi 配置问题
7. 支持 Dubbo 插件的单参数原始类型
8. 修复使用 etcd 集群同步数据初始化失败的问题
9. 修复 Shiro 获取白名单为空的 bug
10. 修复 zookeeper 同步错误处理事件的 bug
11. 修复 modify-response-plugin 和 cryptor-response-plugin 组合使用时无信息返回的问题
12. 修复使用 h2 时 cryptor 规则处理器缺少某些字段的 bug
```