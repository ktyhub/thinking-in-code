---
title: "rocketmq-spring rocketmq-spring-all-2.2.0"
project: "rocketmq-spring"
repo: "apache/rocketmq-spring"
tag: "rocketmq-spring-all-2.2.0"
published: "2021-01-08"
type: "release"
lang: "en"
summary: "The main goal of this release is to align with RocketMQ Client 4.8.0 and support the pull consumer pattern. In addition, this release fix some important bugs and make some enhancement."
---

# rocketmq-spring rocketmq-spring-all-2.2.0

The main goal of this release is to align with RocketMQ Client 4.8.0 and support the pull consumer pattern. In addition, this release fix some important bugs and make some enhancement.

## Feature

- [[ISSUE #306](https://github.com/apache/rocketmq-spring/issues/306)] Support real LitePullMessage in RocketMQ-Spring.

## Improvement

- [[ISSUE #289](https://github.com/apache/rocketmq-spring/issues/289)] Use the default instance name when using acl.
- [[ISSUE #298](https://github.com/apache/rocketmq-spring/issues/298)] Too many warning info when consuming failed.
- [[ISSUE #308](https://github.com/apache/rocketmq-spring/issues/308)] Fix the comment error in ACLStringConsumer class.
- [[ISSUE #314](https://github.com/apache/rocketmq-spring/issues/314)] Modify parent.versions of modules in samples project from 2.1.1-SNAPSHOT to 2.1.2-SNAPSHOT.
- [[ISSUE #327](https://github.com/apache/rocketmq-spring/issues/327)] Remove info log in consumeMessage method.
- [[ISSUE #329](https://github.com/apache/rocketmq-spring/issues/329)] Upgrade RocketMQ version to 4.8.0.

## Bug

- [[ISSUE #268](https://github.com/apache/rocketmq-spring/issues/268)] RocketMQMessageListener nameServer not work in some scenes.
- [[ISSUE #294](https://github.com/apache/rocketmq-spring/issues/294)] GetAndWrapmessage method in rocketmqUtil is missing prefix when getting keys.
- [[ISSUE #304](https://github.com/apache/rocketmq-spring/issues/304)] Fix the correspondence between enumerations and numbers.

---

> **Source** [apache/rocketmq-spring](https://github.com/apache/rocketmq-spring) · `rocketmq-spring-all-2.2.0` · 2021-01-08 · [upstream release](https://github.com/apache/rocketmq-spring/releases/tag/rocketmq-spring-all-2.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
