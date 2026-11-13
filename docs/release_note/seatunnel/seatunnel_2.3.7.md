---
title: "seatunnel 2.3.7"
project: "seatunnel"
repo: "apache/seatunnel"
tag: "2.3.7"
published: "2024-08-19"
type: "patch"
lang: "en"
---

# seatunnel 2.3.7

## Bug fix

### Connector-V2

- [Hotfix][MySQL-CDC] Fix ArrayIndexOutOfBoundsException in mysql binlog read (#7381)
- [Fix][Doris] Fix doris primary key order and fields order are inconsistent (#7377)
- [Bugfix][Doris] Fix Json serialization, null value causes data error problem (#7379)
- [Hotfix][Jdbc] Fix jdbc compile error (#7359)
- [Fix][OceanBase] Remove OceanBase catalog's dependency on mysql driver (#7311)
- [Fix][Tdengine] Fix sql exception and concurrentmodifyexception when connect to taos and read data (#6088)
- [Hotfix][Kafka] Fix kafka consumer log next startup offset (#7312)
- [Fix][Doris] Fix the abnormality of deleting data in CDC scenario. (#7315)
- [hotfix][Hbase]fix and optimize hbase source problem (#7148)
- [Fix][Iceberg] Unable to create a source for identifier 'Iceberg'. #7182 (#7279)

### Zeta(ST-Engine)

- [Fix][Zeta] Fix task can not end cause by lock metrics failed (#7357)
- [Hotfix][Zeta] Fix task cannot be stopped when system is busy (#7292)
- [Hotfix][Zeta] Fix task cannot be stopped when system is busy (#7280)

### E2E

- [Fix][Http] Fix http e2e case (#7356)

## Improve

### Core

- [Improve][Flink] optimize method name (#7372)
- [Improve][API] Check catalog table fields name legal before send to downstream (#7358)
- [Improve][Flink] refactor flink proxy source/sink (#7355)
- [Improve][API] Make sure the table name in TablePath not be null (#7252)
- [Improve][Core] Improve base on plugin name of lookup strategy (#7278)

### Connector-V2

- [Improve][multi-table] Add multi-table sink option check (#7360)
- [Improve][Console] Update ConsoleSinkFactory.java (#7350)
- [Improve][Jdbc] Skip all index when auto create table to improve performance of write (#7288)
- [Improve][Doris] Improve doris error msg (#7343)
- [Improve][Jdbc] Remove MysqlType references in JdbcDialect (#7333)
- [Improve][Jdbc] Merge user config primary key when create table (#7313)
- [Improve][Jdbc] Optimize the way of databases and tables are checked for existence (#7261)

### Transforms-V2

- [Improve][DynamicCompile] Improve DynamicCompile transform (#7319)
- [Improve][SQL] Remove escape identifier from output fields (#7297)
- [Improve][DynamicCompile] Improve DynamicCompile transform  (#7264)

### E2E

- [Improve][Improve] Enable fakesource e2e of spark/flink (#7325)
- [Improve][Improve] Enable JdbcPostgresIdentifierIT (#7326)
- [Improve][Improve] Support windows for the e2e of paimon (#7329)

## Feature

### Connector-V2

- [Feature][Aliyun SLS] add Aliyun SLS connector #3733 (#7348)
- [Feature][Activemq] Added activemq sink  (#7251)

### Transforms-V2

- [Feature] Split transform and move jar into connectors directory (#7218)
- [Feature][LLM] Add LLM transform (#7303)
- [Feature][SQL] Support cast to bytes function of sql (#7284)

## Docs

- [Docs] Change deprecated connector name in setup.md (#7366)
- [Docs] Fix username parameter error in sftp sink document (#7334)
- [Docs] fix document configuration is rectified when the oss is selected as the checkpoint base (#7332)
- [Docs] Fix miss sink-options-placeholders.md in sidebars (#7310)
- [Docs] Update Oracle-CDC.md (#7285)
- [Docs] Fix hybrid cluster deployment document display error (#7306)
- [Docs] translate event-listener doc into chinese (#7274)

## Others

- Bump org.apache.activemq:activemq-client (#7323)
- [Improve] Remove unused code (#7324)
- [Improve] Update snapshot version to 2.3.7 (#7305)

---

> **Source** [apache/seatunnel](https://github.com/apache/seatunnel) · `2.3.7` · 2024-08-19 · [upstream release](https://github.com/apache/seatunnel/releases/tag/2.3.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
