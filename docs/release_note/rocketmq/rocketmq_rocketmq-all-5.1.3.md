---
title: "rocketmq rocketmq-all-5.1.3"
project: "rocketmq"
repo: "apache/rocketmq"
tag: "rocketmq-all-5.1.3"
published: "2023-06-24"
type: "release"
lang: "en"
summary: "[ISSUE #6576] Fix pop lmq message · [ISSUE #5866] Fix client-side memory leak of inactive channel · [ISSUE #6889] Add attribute for SubscriptionGroupConfig · [ISSUE #6720] [RIP-64] Heartbeat Optimization"
---

# rocketmq rocketmq-all-5.1.3

## What's Changed
* [ISSUE #6576] Fix pop lmq message by @HScarb in https://github.com/apache/rocketmq/pull/6577
* [ISSUE #5866] Fix  client-side memory leak of inactive channel by @imzs in https://github.com/apache/rocketmq/pull/5867
* [ISSUE #6889] Add attribute for SubscriptionGroupConfig by @drpmma in https://github.com/apache/rocketmq/pull/6891
* [ISSUE #6720] [RIP-64] Heartbeat Optimization  by @zk-drizzle in https://github.com/apache/rocketmq/pull/6724
* [ISSUE #6884] Resolve proxy sending mentality to broker and unable to find ACL configuration related by @fengcharly in https://github.com/apache/rocketmq/pull/6885
* [ISSUE #6900] Add attributesBuilderSupplier for BrokerMetricsManager by @drpmma in https://github.com/apache/rocketmq/pull/6901
* [ISSUE #6908] Fix the problem that the proxy in the cluster mode obtains the wrong address of broker by @gaoyf in https://github.com/apache/rocketmq/pull/6909
* [ISSUE #6863] SQL expression CONTAINS support by @f1amingo in https://github.com/apache/rocketmq/pull/6864
* [ISSUE #6841] Pop batch ack for pushConsumer by @f1amingo in https://github.com/apache/rocketmq/pull/6842
* [ISSUE #6929] Temporarily ignoring testQueryMessageAsync testing on the Linux platform by @RongtongJin in https://github.com/apache/rocketmq/pull/6930
* [ISSUE #6904] Fix fail to start broker if mapped file size is 0 by @yuz10 in https://github.com/apache/rocketmq/pull/6903
* [ISSUE #6926] Fixing the error in the initialization order of replicasManager caused the controller mode to fail to start. by @RongtongJin in https://github.com/apache/rocketmq/pull/6927
* [ISSUE #6931] Set table reference the same object for setSubscriptionGroupTable method by @RongtongJin in https://github.com/apache/rocketmq/pull/6932
* [ISSUE #6917] Fix cannot query all messages of the same msgId by @yuz10 in https://github.com/apache/rocketmq/pull/6918
* [ISSUE #6910] Extract the interval of fetchNameServerAddr by @totalo in https://github.com/apache/rocketmq/pull/6912
* [ISSUE #6933] Support recreate file if local cq and tiered storage offset not match by @lizhimins in https://github.com/apache/rocketmq/pull/6934
* [ISSUE #6916] Support startsWith and endsWith in sql filter. by @yuz10 in https://github.com/apache/rocketmq/pull/6915
* [ISSUE #6935] Prepare to release Apache RocketMQ 5.1.3 by @RongtongJin in https://github.com/apache/rocketmq/pull/6936

## New Contributors
* @imzs made their first contribution in https://github.com/apache/rocketmq/pull/5867
* @fengcharly made their first contribution in https://github.com/apache/rocketmq/pull/6885
* @f1amingo made their first contribution in https://github.com/apache/rocketmq/pull/6864

**Full Changelog**: https://github.com/apache/rocketmq/compare/rocketmq-all-5.1.2...rocketmq-all-5.1.3

---

> **Source** [apache/rocketmq](https://github.com/apache/rocketmq) · `rocketmq-all-5.1.3` · 2023-06-24 · [upstream release](https://github.com/apache/rocketmq/releases/tag/rocketmq-all-5.1.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
