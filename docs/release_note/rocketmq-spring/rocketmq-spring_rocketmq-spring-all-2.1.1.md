---
title: "rocketmq-spring rocketmq-spring-all-2.1.1"
project: "rocketmq-spring"
repo: "apache/rocketmq-spring"
tag: "rocketmq-spring-all-2.1.1"
published: "2020-07-21"
type: "release"
lang: "en"
summary: "The main goal of this release is to align with RocketMQ Client 4.7.1 and fix some important bugs, e.g. fix the bug that accessKey and secretKey are wrong when create producer and fix SyncSend batch message method…"
---

# rocketmq-spring rocketmq-spring-all-2.1.1

The main goal of this release is to align with RocketMQ Client 4.7.1 and fix some important bugs, e.g. fix the bug that accessKey and secretKey are wrong when create producer and fix SyncSend batch message method without timeout param. And besides this, this release also will bring some enhancements for usability.

## Improvement

- [[ISSUE #262](https://github.com/apache/rocketmq-spring/issues/262)] Support custom AsyncSenderExecutor when sending messages asynchronously.
- [[ISSUE# 263](https://github.com/apache/rocketmq-spring/issues/263)] Change the version of rocketmq client in the pom's file.
- [[ISSUE #282](https://github.com/apache/rocketmq-spring/issues/282)] Upgrade RocketMQ client version to 4.7.1.
- [[ISSUE #285](https://github.com/apache/rocketmq-spring/issues/285)] Upgrade jackson and fastjson version.


## Bug

- [[ISSUE #271](https://github.com/apache/rocketmq-spring/issues/271)] AccessKey and secretKey are wrong when create procducer.
- [[ISSUE #241](https://github.com/apache/rocketmq-spring/issues/241)] Make the unit of consumeTimeout in rocketmq-spring consistent with rocketmq client.
- [[ISSUE #242](https://github.com/apache/rocketmq-spring/issues/242)] SyncSend batchMessage method without timeout param.

---

> **Source** [apache/rocketmq-spring](https://github.com/apache/rocketmq-spring) · `rocketmq-spring-all-2.1.1` · 2020-07-21 · [upstream release](https://github.com/apache/rocketmq-spring/releases/tag/rocketmq-spring-all-2.1.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
