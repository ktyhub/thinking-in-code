# canal canal-1.1.7-alpha-3

1. 支持 MySQL 8.0/MariaDB 10.x 下的 binlog 压缩解析能力 [#4388](https://github.com/alibaba/canal/issues/4388)
2. 升级部分组件版本（规避 CVE 漏洞），比如 Spring 组件、MQ 组件、Log 组件等
3. 支持 ES 8.0 [#4640](https://github.com/alibaba/canal/pull/4640)
4. 支持 MySQL 8.0 的 caching_sha2_password 密码认证 [#4767](https://github.com/alibaba/canal/pull/4767)
5. 修复 adapter 场景下 CanalTCPConsumer 丢数据的风险 [#4864](https://github.com/alibaba/canal/issues/4864)
6. 修复 adapter 场景下 ymlToObj 处理 properties 参数共享问题 [#4355](https://github.com/alibaba/canal/issues/4355)

1.1.7 正式版发布之前的倒计时，有问题可以尽快反馈。
```