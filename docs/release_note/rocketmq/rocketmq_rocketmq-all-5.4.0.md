---
title: "rocketmq rocketmq-all-5.4.0"
project: "rocketmq"
repo: "apache/rocketmq"
tag: "rocketmq-all-5.4.0"
published: "2025-12-24"
type: "release"
lang: "en"
summary: "This version introduces two new features and a few minor fixes."
---

# rocketmq rocketmq-all-5.4.0

This version introduces two new features and a few minor fixes.
* [RIP-80] Implement Priority Message by @imzs in https://github.com/apache/rocketmq/pull/9929
* [RIP-82] Implement Timer message, transaction message, and index based on RocksDB by @zk-drizzle in https://github.com/apache/rocketmq/pull/9787

## What's Changed
* [ISSUE #9891] Optimize pop orderly implementation to facilitate expansion by @qianye1001 in https://github.com/apache/rocketmq/pull/9892
* [ISSUE #9883] Remove unnecessary MessageFormat.format by @yx9o in https://github.com/apache/rocketmq/pull/9884
* [ISSUE #9888] Defer the shutdown behavior of popConsumerService to prevent JVM crash by @RongtongJin in https://github.com/apache/rocketmq/pull/9889
* [ISSUE #9894] Update README for RocketMQ 5.3.4 and minor fixes by @majialoong in https://github.com/apache/rocketmq/pull/9895
* [ISSUE #9396] Use fastjson2 in all modules by @yx9o in https://github.com/apache/rocketmq/pull/9397
* Add some log for gRPC route by @qianye1001 in https://github.com/apache/rocketmq/pull/9896
* Fix controller mode HAService removeConnection by @LittleBoy18 in https://github.com/apache/rocketmq/pull/9897
* [ISSUE #9898] Remove AbstractBrokerRunnable and replace with Runnable by @RongtongJin in https://github.com/apache/rocketmq/pull/9893
* [ISSUE #9910] [ACL 2.0] Incorrect consumer group extraction from retry topic in SEND_MESSAGE_V2/SEND_BATCH_MESSAGE by @dingshuangxi888 in https://github.com/apache/rocketmq/pull/9911
* [ISSUE #9885] Fix tiered store cache count and bytes metrics by @majialoong in https://github.com/apache/rocketmq/pull/9886
* [ISSUE #9918] Fix the message may be renewed once more if the gRPC push consumer is unexpectedly disconnected by @qianye1001 in https://github.com/apache/rocketmq/pull/9919
* [ISSUE #9912] Consumer offset timestamp displayed incorrect in tiered store by @woaishixiaoxiao in https://github.com/apache/rocketmq/pull/9913
* [ISSUE #9868] Fix getBrokerEpoch no response issue for empty parameters by @yx9o in https://github.com/apache/rocketmq/pull/9869
* Fix dledger mode expired message can not delete on jdk9+ by @LittleBoy18 in https://github.com/apache/rocketmq/pull/9851
* [ISSUE #9396] Replace fastjson with fastjson2 by @yuz10 in https://github.com/apache/rocketmq/pull/9927
* [ISSUE #9902] Remove unnecessary String.format by @yx9o in https://github.com/apache/rocketmq/pull/9903
* [ISSUE #9921] Limit the concurrency of Pop revive by @lizhimins in https://github.com/apache/rocketmq/pull/9922
* [ISSUE #9914] Simplify isolation logic when updating fault item in sendKernelImpl by @yx9o in https://github.com/apache/rocketmq/pull/9915
* [ISSUE #9928] Add Priority IT for GRPC protocol. by @imzs in https://github.com/apache/rocketmq/pull/9932
* [ISSUE #9933] Fix the failure when RocksDBConfigToJsonCommand exports locally by @RongtongJin in https://github.com/apache/rocketmq/pull/9934
* Optimized the function naming by @zk-drizzle in https://github.com/apache/rocketmq/pull/9935
* [ISSUE #9938] Rename misnamed Messing classes to Messaging by @yx9o in https://github.com/apache/rocketmq/pull/9939
* [ISSUE #9943] Remove redundant containsKey check in checkBrokerConfig by @yx9o in https://github.com/apache/rocketmq/pull/9944
* Fix epoch truncate by @LittleBoy18 in https://github.com/apache/rocketmq/pull/9942
* [ISSUE #9945] Use UniqueKey as TimerDelKey by default. by @imzs in https://github.com/apache/rocketmq/pull/9946
* [ISSUE #9947] Fix TimerMessageStore.checkAndReviseMetrics throws BufferUnderflowException by @gaoyf in https://github.com/apache/rocketmq/pull/9948
* [ISSUE #9945] Use UniqueKey as the TimerDelKey value when no namespace is appended by @imzs in https://github.com/apache/rocketmq/pull/9951

**Full Changelog**: https://github.com/apache/rocketmq/compare/rocketmq-all-5.3.4...rocketmq-all-5.4.0

---

> **Source** [apache/rocketmq](https://github.com/apache/rocketmq) · `rocketmq-all-5.4.0` · 2025-12-24 · [upstream release](https://github.com/apache/rocketmq/releases/tag/rocketmq-all-5.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
