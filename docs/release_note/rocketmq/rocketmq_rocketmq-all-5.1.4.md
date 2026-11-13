---
title: "rocketmq rocketmq-all-5.1.4"
project: "rocketmq"
repo: "apache/rocketmq"
tag: "rocketmq-all-5.1.4"
published: "2023-10-09"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/apache/rocketmq/compare/rocketmq-all-5.1.3...rocketmq-all-5.1.4"
---

# rocketmq rocketmq-all-5.1.4

## What's Changed
* [maven-release-plugin] prepare for next development iteration by @RongtongJin in https://github.com/apache/rocketmq/pull/6939
* [ISSUE #4612] Fix trace not complete by @panzhi33 in https://github.com/apache/rocketmq/pull/6941
* [ISSUE #6943] fix docs typo in docs/cn/controller/design.md #6943 by @yao-wenbin in https://github.com/apache/rocketmq/pull/6942
* [ISSUE #6940] change dataReadAheadEnable default to false by @yuz10 in https://github.com/apache/rocketmq/pull/6944
* [ISSUE #6945] Add doc issue template by @mxsm in https://github.com/apache/rocketmq/pull/6946
* [ISSUE #6933] Support delete expired or damaged file in tiered storage and optimize fetch code by @lizhimins in https://github.com/apache/rocketmq/pull/6952
* [ISSUE #6754] Support reentrant orderly consumption for proxy by @xdkxlk in https://github.com/apache/rocketmq/pull/6755
* add removeOne method for ReceiptHandleGroup by @xdkxlk in https://github.com/apache/rocketmq/pull/6955
* [ISSUE #6964] use the correct context in telemetry; polish the code structure by @xdkxlk in https://github.com/apache/rocketmq/pull/6965
* [ISSUE #6933] Optimize delete topic in tiered storage by @lizhimins in https://github.com/apache/rocketmq/pull/6973
* [ISSUE #6982]Update the version in the README.md document to 5.1.3 by @mxsm in https://github.com/apache/rocketmq/pull/6983
* [ISSUE #6974] Feature/refector receipt processor by @drpmma in https://github.com/apache/rocketmq/pull/6975
* [ISSUE #6742]Support daily build tests by @cryptoya in https://github.com/apache/rocketmq/pull/6744
* [ISSUE #6991] Delete rocketmq.client.logUseSlf4j=true in JAVA_OPT by @DongyuanPan in https://github.com/apache/rocketmq/pull/6992
* [ISSUE #6957] Support Proxy Protocol for gRPC and Remoting server by @dingshuangxi888 in https://github.com/apache/rocketmq/pull/6958
* [ISSUE #6960]Added Slot formatting sketch comments by @mxsm in https://github.com/apache/rocketmq/pull/6961
* [ISSUE #7008] Fix the issue of protocol parsing failure when using haproxy and tls together by @RongtongJin in https://github.com/apache/rocketmq/pull/7009
* [ISSUE #6999] Add interface ReceiptHandleManager by @drpmma in https://github.com/apache/rocketmq/pull/7000
* [ISSUE #7005] The bug label relies on manual identification rather than automatic application by @RongtongJin in https://github.com/apache/rocketmq/pull/7006
* fix receive message activity attempt id not correct by @lizhimins in https://github.com/apache/rocketmq/pull/7012
* [ISSUE #7010] Fix the HandshakeHandler returns when detect haproxy version need more data by @dingshuangxi888 in https://github.com/apache/rocketmq/pull/7011
* [ISSUE #7013]polish ColdDataCheckService's logic by @GenerousMan in https://github.com/apache/rocketmq/pull/7014
* [ISSUE #6979] fix opaque will be duplicate in multi client scene by @leizhiyuan in https://github.com/apache/rocketmq/pull/6985
* [ISSUE #7018] fix append in tiered storage when message offset incorrect by @lizhimins in https://github.com/apache/rocketmq/pull/7019
* Fix LEAK: HAProxyMessage.release() was not called before it's garbage-collected by @dingshuangxi888 in https://github.com/apache/rocketmq/pull/7025
* [ISSUE #6968] fix grpc acl bug by @lyx2000 in https://github.com/apache/rocketmq/pull/6969
* [ISSUE #7031] fix PoP caused broker memory leak bug by @fuyou001 in https://github.com/apache/rocketmq/pull/7032
* [ISSUE #7029] Add a config to determine whether pop response should return the actual retry topic or tamper with the original topic by @RongtongJin in https://github.com/apache/rocketmq/pull/7030
* [ISSUE #6879] ConcurrentHashMapUtils fails to solve the loop bug in JDK8 by @leeyiyu in https://github.com/apache/rocketmq/pull/6883
* passing the renew event type to create the correct context by @xdkxlk in https://github.com/apache/rocketmq/pull/7045
* [#ISSUE 7035] Fix correct min offset behavior in tiered storage by @lizhimins in https://github.com/apache/rocketmq/pull/7038
* [ISSUE #7047] NettyRemotingClient#invokeOneway throw Exception with address by @gaoyf in https://github.com/apache/rocketmq/pull/7048
* [ISSUE ##7036] rename method: getWriteQueueIdByBroker to getWriteQueu… by @yao-wenbin in https://github.com/apache/rocketmq/pull/7037
* [ISSUE #3717][RIP-27] Auto batching in producer by @guyinyou in https://github.com/apache/rocketmq/pull/3718
* [ISSUE #7061] Support forward HAProxyMessage for Multi Protocol server. by @dingshuangxi888 in https://github.com/apache/rocketmq/pull/7062
* [ISSUE #7063] doc: fix typo in user_guide.md by @maclong1989 in https://github.com/apache/rocketmq/pull/7060
* fix: npe in lockBatchMQ and unlockBatchMQ by @wuyoudexiao in https://github.com/apache/rocketmq/pull/7078
* [ISSUE #7052] Ensuring consistency between broker and nameserver data when deleting a topic by @RongtongJin in https://github.com/apache/rocketmq/pull/7066
* [ISSUE #7068] Fix failed to create syncer topic when the proxy was just started by @gaoyf in https://github.com/apache/rocketmq/pull/7076
* [ISSUE #7056]fix: avoid close success channel if invokeSync most time cost on get connection for channel by @absolute8511 in https://github.com/apache/rocketmq/pull/7057
* [ISSUE #6810] Fix the bug of mistakenly deleting data in clientChannelTable when the channel expires by @zd46319 in https://github.com/apache/rocketmq/pull/7073
* [ISSUE #7039] fix: fix retry message filter when subtype is TAG by @HScarb in https://github.com/apache/rocketmq/pull/7040
* [ISSUE #7091] Update the cd command in README by @AayushSaini101 in https://github.com/apache/rocketmq/pull/7096
* [Bug] schedule CQ offset invalid. offset=77, cqMinOffset=0, cqMaxOffset=74, queueId=1 by @weihubeats in https://github.com/apache/rocketmq/pull/7084
* [#ISSUE 7093] Avoid dispatch tasks too much cause dispatch task failed by @lizhimins in https://github.com/apache/rocketmq/pull/7094
* [#ISSUE 7104] Add ReceiptHandleGroupKey for RenewEvent by @drpmma in https://github.com/apache/rocketmq/pull/7105
* [ISSUE #7102] Making perm equal to 0 is valid by @RongtongJin in https://github.com/apache/rocketmq/pull/7103
* [ISSUE #7074] Allow a BoundaryType to be specified when retrieving offset based on the timestamp by @Koado in https://github.com/apache/rocketmq/pull/7082
* [ISSUE #7109] support the mixed topic type by @dingshuangxi888 in https://github.com/apache/rocketmq/pull/7110
* [ISSUE #6962]operation.md Format adjustment by @haolinkong in https://github.com/apache/rocketmq/pull/7106
* [ISSUE #7064] [RIP-66-1] Support KV(RocksDB) Storage for Metadata by @fujian-zfj in https://github.com/apache/rocketmq/pull/7092
* [ISSUE #7135] Temporarily ignoring plainAccessValidator test by @RongtongJin in https://github.com/apache/rocketmq/pull/7135
* [ISSUE 7117] check message is in memory or not when init consumer offset for pop by @xdkxlk in https://github.com/apache/rocketmq/pull/7118
* [ISSUE #7146]  Log output error needs to be corrected by @RongtongJin in https://github.com/apache/rocketmq/pull/7147
* [ISSUE #7144] Accelerate the recovery speed of the tiered storage module by @lizhimins in https://github.com/apache/rocketmq/pull/7145
* [ISSUE #7115] Fix the response message NPE by @dingshuangxi888 in https://github.com/apache/rocketmq/pull/7116
* [ISSUE #7129] fix resource collisions in acl tests by @caigy in https://github.com/apache/rocketmq/pull/7130
* [ISSUE #7153] Add switch for MIXED message type by @dingshuangxi888 in https://github.com/apache/rocketmq/pull/7154
* [Feature 7155] add errlog when cmd err by @shirenchuang in https://github.com/apache/rocketmq/pull/7157
* Change metadataThreadPoolQueueCapacity to 100000 by @drpmma in https://github.com/apache/rocketmq/pull/7170
* [ISSUE #7172] Unified Chinese for `Name Server` by @yx9o in https://github.com/apache/rocketmq/pull/7173
* [ISSUE #7176] Correct mismatched logs by @yx9o in https://github.com/apache/rocketmq/pull/7177
* [ISSUE #7183] Correct mismatched commandDesc by @yx9o in https://github.com/apache/rocketmq/pull/7184
* [ISSUE #7001] Fix IndexOutOfBoundsException when process pop response by @redlsz in https://github.com/apache/rocketmq/pull/7003
* [ISSUE #7192] Correct typos by @yx9o in https://github.com/apache/rocketmq/pull/7193
* [ISSUE #7189] Optimize time complexity of loop in ConsumerGroupInfo#updateSubscription by @drpmma in https://github.com/apache/rocketmq/pull/7190
* To config the cardinalityLimit for openTelemetry metrics exporting an… by @lollipopjin in https://github.com/apache/rocketmq/pull/7196
* [ISSUE #7178] refresh metadata after broker startup by @Ziy1-Tan in https://github.com/apache/rocketmq/pull/7197
* [ISSUE #7201] Remove the DefaultMessageStore.class dependency in TransientStorePool by @guyinyou in https://github.com/apache/rocketmq/pull/7202
* Update mqbroker to use runbroker.sh instead of runserver.sh when enabling --enable-proxy by @iamgd67 in https://github.com/apache/rocketmq/pull/7150
* [ISSUE #7042] throw UnsupportedOperationException after client using TLS Request but Server in Disabled Mode. by @yao-wenbin in https://github.com/apache/rocketmq/pull/7179
* [ISSUE #7205] support batch ack for pop orderly by @xdkxlk in https://github.com/apache/rocketmq/pull/7206
* [ISSUE #7203] Set table reference the same object for setSubscriptionGroupTable method by @RongtongJin in https://github.com/apache/rocketmq/pull/7204
* [ISSUE #7166] Optimize the display format of admin by @yx9o in https://github.com/apache/rocketmq/pull/7210
* [ISSUE #7142] Add command `RocksDBConfigToJson` to inspect rocksdb content by @Ziy1-Tan in https://github.com/apache/rocketmq/pull/7180
* [ISSUE #7124] Fix the typos in the code comments by @mxsm in https://github.com/apache/rocketmq/pull/7125
* [ISSUE #7222] Bug fix and refactoring of the Indexfile in tiered storage by @lizhimins in https://github.com/apache/rocketmq/pull/7224
* [ISSUE #7228] Converge the use of some important variables for some class by @guyinyou in https://github.com/apache/rocketmq/pull/7229
* [ISSUE #7149] fix bug : When creating and updating Topic, there will … by @shirenchuang in https://github.com/apache/rocketmq/pull/7151
* [ISSUE #7219] Fix Concurrent modify syncStateSet and Mark synchronizi… by @echooymxq in https://github.com/apache/rocketmq/pull/7220
* [ISSUE #7223] Support batch ack for grpc client in proxy by @xdkxlk in https://github.com/apache/rocketmq/pull/7225
* [ISSUE #7246] Add expireAfterAccess for cache by @drpmma in https://github.com/apache/rocketmq/pull/7247
* [ISSUE #7250] Beautify command rocksDBConfigToJson output by @Ziy1-Tan in https://github.com/apache/rocketmq/pull/7249
* [ISSUE #7271]Optimize the configuration for setting the quantity of TimerDequeuePutMessageService by @mxsm in https://github.com/apache/rocketmq/pull/7272
* [ISSUE #7277] enhance rocksDBConfigToJson to support metadata counting by @Ziy1-Tan in https://github.com/apache/rocketmq/pull/7276
* [ISSUE #7261] slave high CPU usage when enableScheduleAsyncDeliver=true by @yuz10 in https://github.com/apache/rocketmq/pull/7262
* [ISSUE #7226] Filter tlvs in ppv2 which contents not are spec-compliant ASCII characters and space by @dingshuangxi888 in https://github.com/apache/rocketmq/pull/7227
* [RIP-63] Queue Selection Strategy Optimization by @GenerousMan in https://github.com/apache/rocketmq/pull/6568
* [ISSUE #7111] Remove responseFuture from the responseTable when exception occurs by @RapperCL in https://github.com/apache/rocketmq/pull/7112
* [ISSUE #7280] Fix and refactor handle commit exception in tiered storage by @lizhimins in https://github.com/apache/rocketmq/pull/7281
* [#7283] Incorrect dledger commitlog min offset after mappedFile re delete failed by @yuz10 in https://github.com/apache/rocketmq/pull/7284
* [ISSUE #7208] fix: when deleting topic  also delete its pop retry topic by @HScarb in https://github.com/apache/rocketmq/pull/7209
* [ISSUE #7289] Fixed asynchronous send backpressure capability by @guyinyou in https://github.com/apache/rocketmq/pull/7290
* [ISSUE #7302] Fix singleTopicRegister code deleted in merge by @yuz10 in https://github.com/apache/rocketmq/pull/7303
* [ISSUE #7305] Fix metrics and transactional module not shutdown while broker offline cause coredump by @lizhimins in https://github.com/apache/rocketmq/pull/7307
* [ISSUE #7308] Adding topic blacklist and filter in tiered storage module by @lizhimins in https://github.com/apache/rocketmq/pull/7310
* [ISSUE #7293] Fix NPE when alter sync state set by @RongtongJin in https://github.com/apache/rocketmq/pull/7294
* [ISSUE #7319] Optimize fault-tolerant mechanism for sending messages and hot update switch by @GenerousMan in https://github.com/apache/rocketmq/pull/7320
* [ISSUE #7328] Convergent thread pool creation by @guyinyou in https://github.com/apache/rocketmq/pull/7329
* [ISSUE #7334] `registerIncrementBrokerData` for single topic update by @Ziy1-Tan in https://github.com/apache/rocketmq/pull/7335
* [ISSUE #7326] Split the request to register to the nameserver by @Ziy1-Tan in https://github.com/apache/rocketmq/pull/7325
* [ISSUE #7318] Add the configuration of topicQueueLock number to better support different  queue nums scenarios by @RongtongJin in https://github.com/apache/rocketmq/pull/7317
* [ISSUE #7343] Rollback modifications to registerProcessor by @guyinyou in https://github.com/apache/rocketmq/pull/7344
* [ISSUE #7340] Abstract Duplicate code into a method in `TopicConfigManager` by @joeCarf in https://github.com/apache/rocketmq/pull/7341
* Set experimental_ui_max_stdouterr_bytes to 10MB in bazel by @lollipopjin in https://github.com/apache/rocketmq/pull/7348
* [ISSUE #7345] Fix wrong result of searchOffset in tiered storage by @yuz10 in https://github.com/apache/rocketmq/pull/7346
* [ISSUE #6633] Not clear uninitialized files and fix metadata recover by @lizhimins in https://github.com/apache/rocketmq/pull/7342
* [ISSUE #7351] Allow mqadmin to operate slave nodes by @guyinyou in https://github.com/apache/rocketmq/pull/7352
* [ISSUE #7363] Fix get message from tiered storage return incorrect next begin offset by @lizhimins in https://github.com/apache/rocketmq/pull/7365
* [ISSUE #7371] Print admin queue watermark in log by @RongtongJin in https://github.com/apache/rocketmq/pull/7372
* [ISSUE #7374] Prepare to release Apache RocketMQ 5.1.4 by @xdkxlk in https://github.com/apache/rocketmq/pull/7375
* Replace loggingMetricExporter with OtlpJsonLoggingMetricExporter. by @lollipopjin in https://github.com/apache/rocketmq/pull/7373
* [maven-release-plugin] prepare release rocketmq-all-5.1.4 by @xdkxlk in https://github.com/apache/rocketmq/pull/7377

## New Contributors
* @yao-wenbin made their first contribution in https://github.com/apache/rocketmq/pull/6942
* @leeyiyu made their first contribution in https://github.com/apache/rocketmq/pull/6883
* @wuyoudexiao made their first contribution in https://github.com/apache/rocketmq/pull/7078
* @zd46319 made their first contribution in https://github.com/apache/rocketmq/pull/7073
* @AayushSaini101 made their first contribution in https://github.com/apache/rocketmq/pull/7096
* @weihubeats made their first contribution in https://github.com/apache/rocketmq/pull/7084
* @Koado made their first contribution in https://github.com/apache/rocketmq/pull/7082
* @haolinkong made their first contribution in https://github.com/apache/rocketmq/pull/7106
* @Ziy1-Tan made their first contribution in https://github.com/apache/rocketmq/pull/7197
* @iamgd67 made their first contribution in https://github.com/apache/rocketmq/pull/7150

**Full Changelog**: https://github.com/apache/rocketmq/compare/rocketmq-all-5.1.3...rocketmq-all-5.1.4

---

> **Source** [apache/rocketmq](https://github.com/apache/rocketmq) · `rocketmq-all-5.1.4` · 2023-10-09 · [upstream release](https://github.com/apache/rocketmq/releases/tag/rocketmq-all-5.1.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
