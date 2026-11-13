---
title: "canal canal-1.1.0"
project: "canal"
repo: "alibaba/canal"
tag: "canal-1.1.0"
published: "2018-08-20"
type: "release"
lang: "en"
summary: "canal历经了近8个月的沉寂, 有了一个里程碑式的重大版本发布, 对应版本为1.1.0."
---

# canal canal-1.1.0

# 重要说明

canal历经了近8个月的沉寂, 有了一个里程碑式的重大版本发布, 对应版本为1.1.0.
1. 考虑该版本性能/功能/架构上多方面的重要改造, 对于未来canal发展有着重要的意义, 因此决定直接将1.0.26 alpha5直接release转为1.1.0
2. 后续会停止1.0.x版本发布, 会专注在1.1.x版本上的开发和维护, ps. 目前1.1.0是完全向前兼容, 可建议直接升级

## 重要功能优化
1. 整体性能测试&优化,提升了150%. #726 参考: 【[Performance](https://github.com/alibaba/canal/wiki/Performance)】
2. 表结构TSDB相关问题全部修复(比较多的是DDL语法解析兼容性) #439 #440 #442 #507 #570 #639 #641 #736 #781 #818
3. 基于bio修复binlog长时间无数据导致的半开链接无法恢复 #548 #188

## 功能新增
1. 原生支持prometheus监控 #765 【[Prometheus QuickStart](https://github.com/alibaba/canal/wiki/Prometheus-QuickStart)】
2. 原生支持kafka消息投递 #695 【[Canal Kafka QuickStart](https://github.com/alibaba/canal/wiki/Canal-Kafka-RocketMQ-QuickStart)】
3. 原生支持aliyun rds的binlog订阅 (解决自动主备切换/oss binlog离线解析) 参考: 【[Aliyun RDS QuickStart](https://github.com/alibaba/canal/wiki/aliyun-RDS-QuickStart)】
4. 原生支持docker镜像 #801 参考:  【[Docker QuickStart](https://github.com/alibaba/canal/wiki/Docker-QuickStart)】
5. MySQL gtid模式订阅支持 #126
6. MySQL XA binlog事件 #626
7. Mysql Show Slave Hosts状态支持 #483

## 小需求&bugfix
1. ddl语句utf8mb4解析乱码问题 #610
2. bit(1)类型转化为boolean支持 #631
3. server链接意外断开优化(空闲链接管理) #640
4. ddl支持create database解析 #730
5. 多个client并发订阅出现的ConcurrentModificationException #657

---

> **Source** [alibaba/canal](https://github.com/alibaba/canal) · `canal-1.1.0` · 2018-08-20 · [upstream release](https://github.com/alibaba/canal/releases/tag/canal-1.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
