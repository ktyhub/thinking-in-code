# canal v1.1.7
# 功能新增

1. 支持PolarDB-X全局单流binlog、以及多流binlog的解析 [#4657](https://github.com/alibaba/canal/issues/4657)
2. 支持MySQL 8.0、Mariadb 10.x版本的compress binlog解析 [#4388](https://github.com/alibaba/canal/issues/4388)
3. 支持arm64芯片架构适配，docker镜像默认交付amd64/arm64 [#4897](https://github.com/alibaba/canal/issues/4897)
4. 支持adapter适配elasticsearch 8.0 [#4640](https://github.com/alibaba/canal/pull/4640)

# 重要优化

1. 升级部分组件版本（规避CVE漏洞），比如spring组件、mq组件、log组件等
2. 二进制编译采用jdk1.8，可保证运行时兼容jdk1.8和jdk11 [#4358](https://github.com/alibaba/canal/issues/4358)
3. 兼容MySQL 8.0、Mariadb 10.x的部分binlog格式变更（heartbeat、queryLogEvent） [#4225](https://github.com/alibaba/canal/issues/4225) [#4308](https://github.com/alibaba/canal/issues/4308)
4. 适配MySQL 8.0安全认证插件fullauth流程支持 [#4767](https://github.com/alibaba/canal/pull/4767)
5. 修复adapter RDS同步中多个yml文件出现配置相互覆盖的问题 [#4355](https://github.com/alibaba/canal/issues/4355) [#4560](https://github.com/alibaba/canal/pull/4560) [#4863](https://github.com/alibaba/canal/issues/4863)

# 小需求&bug修复

1. 修复aliyun RDS通过oss下载binlog时没有Content-Length导致异常的问题 [#4307](https://github.com/alibaba/canal/issues/4307)
2. 修复canal server与admin通信时cluster不填会报错的问题 [#4243](https://github.com/alibaba/canal/issues/4243)
3. 修复adapter RDB同步中的数据库关键字兼容性问题 [#4482](https://github.com/alibaba/canal/issues/4482)
4. 修复mysql中类型为MEDIUMTEXT的字段的javaType在不同场景解析不一致的问题 [#4653](https://github.com/alibaba/canal/pull/4653)
5. 在canal的flatMessage中添加记录gtid的参数 [#4521](https://github.com/alibaba/canal/pull/4521)
6. 增加rabbitmq配置以支持持久化投递消息 [#4644](https://github.com/alibaba/canal/pull/4644)
7. 支持将metric port设置为0来关闭监控端口 [#4891](https://github.com/alibaba/canal/pull/4891)