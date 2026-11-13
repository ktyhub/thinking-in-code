---
title: "canal canal-1.1.4"
project: "canal"
repo: "alibaba/canal"
tag: "canal-1.1.4"
published: "2019-09-02"
type: "release"
lang: "en"
---

# canal canal-1.1.4

## 功能新增
1. 引入canal-admin工程，支持面向WebUI的canal管理能力
	* [Canal-Admin-Guide](https://github.com/alibaba/canal/wiki/Canal-Admin-Guide)
	* [Canal-Admin-Docker](https://github.com/alibaba/canal/wiki/Canal-Admin-Docker)
2. canal-server新增基于账号密码的ACL支持能力
3. canal-server新增admin动态运维指令，配合canal-admin工程动态管理订阅关系
4. 多语言新增【[Python客户端](https://github.com/haozi3156666/canal-python)】 
5. instance订阅表过滤，增加表字段订阅的过滤功能，比如针对大字段忽略 #1914
6. kafka支持配置Kerberos认证 #1895


## 重要优化
1. 升级fastsql 973版本，全面兼容MySQL DDL的解析能力。已通过DDL随机测试、表结构变更的TableMeta tsdb验证
	
## 小需求&bugfix

1. 升级fastjson 1.2.58 
2. JSON类型null值修复 #1762
3. 新增protobuf模式的MQ消费例子 #2067
4. 新增es adapter rest client和认证机制 #2046
5. 修复adaphter-hbase在RDS批量删除数据时只删掉了第一条，后面的未删除 #1907
6. 修复集成kafka在多个destinations模式kafka事务异常 #1826
7. 修复kafka消息发送时丢失pk信息 #1352
8. 优化并行解析时的异常处理和线程安全 #1857 #1866
9. 修复MQ模式下的delete事件乱序发送问题 #1848
10. 修复server HA切换后MQ消息未发送 #1810
11. 忽略低版本MySQL的checksum不支持问题 #1788

---

> **Source** [alibaba/canal](https://github.com/alibaba/canal) · `canal-1.1.4` · 2019-09-02 · [upstream release](https://github.com/alibaba/canal/releases/tag/canal-1.1.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
