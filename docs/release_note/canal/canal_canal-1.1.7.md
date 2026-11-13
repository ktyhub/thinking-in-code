---
title: "canal canal-1.1.7"
project: "canal"
repo: "alibaba/canal"
tag: "canal-1.1.7"
published: "2023-10-09"
type: "release"
lang: "en"
---

# canal canal-1.1.7

# 功能新增

1. 支持PolarDB-X全局单流binlog、以及多流binlog的解析 #4657
2. 支持MySQL 8.0、Mariadb 10.x版本的compress binlog解析 #4388
3. 支持arm64 芯片架构适配，docker镜像默认交付 amd64/arm64 #4897
4. 支持adapter适配elasticsearch 8.0 #4640

# 重要优化

1. 升级部分组件版本(规避CVE漏洞)，比如spring组件、mq组件、log组件等
2. 二进制编译采用jdk1.8，可保证运行时兼容jdk 1.8和jdk11 #4358
3. 兼容MySQL 8.0、Mariadb 10.x的部分binlog格式变更(heartbeat、queryLogEvent) #4225 #4308 
4. 适配MySQL 8.0 安全认证插件fullauth流程支持 #4767
5. 修复adapter RDS同步中多个yml文件出现配置相互覆盖 #4355 #4560 #4863

# 小需求&bugfix

1. 修复aliyun RDS通过oss下载binlog没有Content-Length导致异常 #4307
2. 修复canal server与admin通信时cluster不填会报错 #4243
3. 修复adapter RDB同步中兼容数据库关键字 #4482
4. 修复mysql中类型为MEDIUMTEXT的字段的javaType在不同场景的解析不一致的问题 #4653
5. canal中的flatMessage中添加一个参数用于记录gtid #4521
6. 增加rabbitmq配置，支持持久化方式投递消息 #4644
7. 支持metric port设置为0来关闭监控端口 #4891

---

> **Source** [alibaba/canal](https://github.com/alibaba/canal) · `canal-1.1.7` · 2023-10-09 · [upstream release](https://github.com/alibaba/canal/releases/tag/canal-1.1.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
