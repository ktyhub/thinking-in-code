---
title: "canal canal-1.1.5"
project: "canal"
repo: "alibaba/canal"
tag: "canal-1.1.5"
published: "2021-04-19"
type: "release"
lang: "en"
---

# canal canal-1.1.5

## 功能新增

1. 重点优化MQ发送的性能，单topic最高峰值可支持3~8万的rps，接近数量级上的性能提升 #2258
	* 文档可参考：[Canal-MQ-Performance](https://github.com/alibaba/canal/wiki/Canal-MQ-Performance)
2. MQ发送特性支持
	* 新增rabbitmQ的MQ发送支持 #2156
	* 支持不同topic设置不同的分区数 #2173
	* rocketMQ新增tag属性的定义 #3438
	* 参数配置支持env环境变量 #3450
3. 多语言客户端，新增Rust
	* canal Rust客户端：[https://github.com/laohanlinux/canal-rs]
4. 新增Adapter的自持，比如es7
5. 新增更灵活的消息过滤能力，可以指定是否过滤Insert/Update/Delete #3452


## 重要优化
1. 切换fastsql为druid 1.2.6版本，修复已知的MySQL DDL解析问题，#2168 #2766 #2828 #3428 #2954
2. 新增database.hash的开关控制，用于满足不同业务表针对相同主键值路由到相同分区 #2248
3. MQ消息发送(比如Kafka/RocketMQ)，修复线程池死锁等待的现象 #2434
4. 修复rocketmq针对flatMessage模式下的null值消息问题 #2990 #3267
5. 修复canal HA切换后多个instance初始化的并发冲突问题 #3454
6. 修复MariaDB下GTID模式的使用问题 #2453
	
## 小需求&bugfix

1. 修复admin下config接口的信息泄露 #3451
2. 修复MySQL time类型100:00:01时解析错误 #2257
3. 修复Aliyun RDS订阅模式下的问题，比如ak/sk参数兼容 
4. 修复gtid模式下位点持久不更新的问题 #2616
5. 修复中文表名的表结构解析问题 #2714
6. 修复docker基础镜像的构建问题 #3397
7. 修复数据库名中有特殊符号的解析问题 #3377
8. 修复json解析中的转义符问题 #3110
9. 修复aliyun rds隐藏主键的解析支持 #2785
10. 新增admin模式下自动注册时可自定义节点名称 #3459

---

> **Source** [alibaba/canal](https://github.com/alibaba/canal) · `canal-1.1.5` · 2021-04-19 · [upstream release](https://github.com/alibaba/canal/releases/tag/canal-1.1.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
