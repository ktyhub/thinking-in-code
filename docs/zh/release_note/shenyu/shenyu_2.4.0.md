# shenyu 2.4.0
```markdown
### 新功能

- 支持读取不在 resource/directory 下的 init_script 文件
- 按类别显示插件菜单
- 管理员添加执行多路径 SQL 脚本的功能
- IpUtils 添加选择网络 IP 的参数
- 添加参数映射插件
- 支持使用 Consul 作为 ShenYu 注册中心
- 支持使用 Etcd 作为 ShenYu 数据同步中心
- 添加 Sentinel 自定义回退处理器
- 添加响应插件
- 添加 JWT 插件
- 添加请求插件
- 添加 Motan 插件
- 添加日志插件
- 添加修改响应插件
- 添加 Oauth2 插件
- 添加菜单资源权限
- 添加数据权限

### API 变更

- 将项目名称从 Soul 改为 ShenYu
- 将 group id 从 org.dromara 改为 org.apache.shenyu

### 增强

- H2 支持在 Mysql 模式下插入忽略
- 改进 Apache Dubbo 插件
- 优化 GRPC 插件

### 重构

- 重构关于 Dubbo 低于 2.7.3 版本不支持 "异步调用" 的代码
- 将术语 Operator 替换为 Predicate
- 优化判断条件操作符
- 使用 SPI 重构 PredicateJudge 模块
- 重构客户端注册相关代码

### Bug 修复

- 修复 JwtUtil.getUserId 方法的 bug
- 修复 shenyu-spring-boot-starter 的 bug
- 在 WebClientPlugin 中重新编码已编码的 urlPath
- 替换存在风险的加密算法 "AES/ECB/NoPadding"
- 在 PooledConnectionProvider 中的通道上使用 ReadTimeoutHandler 会导致意外的 ReadTimeoutException
- 在 2.4.8 版本的 Spring Boot 中启动网关时遇到 ClassNotFoundException
```