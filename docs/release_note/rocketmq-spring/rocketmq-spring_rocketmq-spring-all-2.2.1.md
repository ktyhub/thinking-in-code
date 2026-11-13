---
title: "rocketmq-spring rocketmq-spring-all-2.2.1"
project: "rocketmq-spring"
repo: "apache/rocketmq-spring"
tag: "rocketmq-spring-all-2.2.1"
published: "2021-08-31"
type: "release"
lang: "en"
summary: "The main goal of this release is to align with RocketMQ Client 4.9.1. In addition, this release fix some important bugs and make some enhancement."
---

# rocketmq-spring rocketmq-spring-all-2.2.1

The main goal of this release is to align with RocketMQ Client 4.9.1. In addition, this release fix some important bugs and make some enhancement.

## Improvement

- [[ISSUE #385](https://github.com/apache/rocketmq-spring/issues/385)] Add message trace setting in ExtRocketMQConsumerConfiguration.
- [[ISSUE #381](https://github.com/apache/rocketmq-spring/issues/381)] Upgrade rocketmq version to 4.9.1.
- [[ISSUE #377](https://github.com/apache/rocketmq-spring/issues/377)] Add the replyTimeout configuration parameter.
- [[ISSUE #371](https://github.com/apache/rocketmq-spring/issues/371)] Add some asynchronous API for batch messages in RocketMQTemplate.
- [[ISSUE #378](https://github.com/apache/rocketmq-spring/issues/378)] Improve the comment of maxReconsumeTimes.
- [[ISSUE #366](https://github.com/apache/rocketmq-spring/issues/376)] The retry number of failed consumptions can be set.
- [[ISSUE #368](https://github.com/apache/rocketmq-spring/issues/368)] Upgrade starter version.
- [[ISSUE #346](https://github.com/apache/rocketmq-spring/issues/346)] Enhance DefaultRocketMQListenerContainer doConvertMessage.
- [[ISSUE #340](https://github.com/apache/rocketmq-spring/issues/340)] Set enableMsgTrace default value to false.
- [[ISSUE #343](https://github.com/apache/rocketmq-spring/issues/343)] Sending batch messages orderly with RocketMQTemplate.
- [[ISSUE #335](https://github.com/apache/rocketmq-spring/issues/335)] Update rocketmq spring samples version.

## Bug

- [[ISSUE #376](https://github.com/apache/rocketmq-spring/issues/376)] Fix the selectorExpression not resolve placeholders.
- [[ISSUE #339](https://github.com/apache/rocketmq-spring/issues/339)] Fix consumer do not consume message with the same instance name.

---

> **Source** [apache/rocketmq-spring](https://github.com/apache/rocketmq-spring) · `rocketmq-spring-all-2.2.1` · 2021-08-31 · [upstream release](https://github.com/apache/rocketmq-spring/releases/tag/rocketmq-spring-all-2.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
