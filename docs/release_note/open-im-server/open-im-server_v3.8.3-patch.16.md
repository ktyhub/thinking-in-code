---
title: "open-im-server v3.8.3-patch.16"
project: "open-im-server"
repo: "openimsdk/open-im-server"
tag: "v3.8.3-patch.16"
published: "2026-03-19"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/openimsdk/open-im-server/compare/v3.8.3-patch.15...v3.8.3-patch.16"
---

# open-im-server v3.8.3-patch.16

## What's Changed
* feat: provide the interface required by js sdk by @withchao in https://github.com/openimsdk/open-im-server/pull/2712
* feat: add webhooks of online status and remove zookeeper configuration. by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2716
* fix: the message I sent is not set to read seq in mongodb by @withchao in https://github.com/openimsdk/open-im-server/pull/2718
* fix: cannot modify group member avatars by @withchao in https://github.com/openimsdk/open-im-server/pull/2719
* fix: auth package import twice by @lkzz in https://github.com/openimsdk/open-im-server/pull/2724
* fix: join the group chat directly, notification type error by @withchao in https://github.com/openimsdk/open-im-server/pull/2772
* fix: change update group member level logic by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2730
* feat: Add More Multi Login Policy by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2770
* fix: joinSource check args error. by @alilestera in https://github.com/openimsdk/open-im-server/pull/2773
* feat: Push configuration can ignore case sensitivity by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2775
* fix: Change group member roleLevel can`t send notification by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2777
* fix: client sends message status error to server by @withchao in https://github.com/openimsdk/open-im-server/pull/2779
* fix: del UserB's conversation version cache when userA set conversati… by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/2785
* chore: remove unused content by @alilestera in https://github.com/openimsdk/open-im-server/pull/2786
* fix: improve setConversationAtInfo logic. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2782
* Revert: Change group member roleLevel can`t send notification by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2789
* fix: improve transfer Owner logic when newOwner is mute. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2790
* fix: improve getUserInfo logic. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2792
* feat: support app update service by @withchao in https://github.com/openimsdk/open-im-server/pull/2794
* feat: implement merge milestone PR to target-branch. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2796
* build: improve workflows logic. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2801
* fix: improve time condition check mehtod. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2804
* fix: webhook before online push by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2805
* fix: set own read seq in MongoDB when sender send a message. by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/2808
* fix: solve err Notification when setGroupInfo. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2806
* Introducing OpenIM Guru on Gurubase.io by @kursataktas in https://github.com/openimsdk/open-im-server/pull/2788
* feat: support app update service by @withchao in https://github.com/openimsdk/open-im-server/pull/2811
* feat: ApplicationVersion move chat by @withchao in https://github.com/openimsdk/open-im-server/pull/2813
* fix: improve condition check. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2815
* feat: Update login policy by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2822
* build: implement version file update when release. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2826
* feat: support stream message by @withchao in https://github.com/openimsdk/open-im-server/pull/2824
* fix: Write back message to Redis by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2836
* fix: get group return repeated result by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2842
* fix: SetConversations can update new conversation by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2838
* feat: merge js sdk by @withchao in https://github.com/openimsdk/open-im-server/pull/2856
* build: update mongo and kafka start logic. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2858
* fix(push): push content with jpush by @yoyo930021 in https://github.com/openimsdk/open-im-server/pull/2844
* fix #2860 migrate jpns to jpush by @wikylyu in https://github.com/openimsdk/open-im-server/pull/2861
* fix: concurrent write to websocket connection by @withchao in https://github.com/openimsdk/open-im-server/pull/2866
* fix: Remove admin token in redis by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2871
* build: create changelog tool and workflows. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2869
* Fix Push2User webhookBeforeOfflinePush by @storyn26383 in https://github.com/openimsdk/open-im-server/pull/2862
* feat: Print Panic Log by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2850
* fix: move workflow to correct path by @mo3et in https://github.com/openimsdk/open-im-server/pull/2837
* build(deps): bump github.com/golang-jwt/jwt/v4 from 4.5.0 to 4.5.1 by @dependabot[bot] in https://github.com/openimsdk/open-im-server/pull/2851
* fix: del login Policy by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2825
* fix: Wrong Redis Error Check by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2876
* fix: minor log typo by @morya in https://github.com/openimsdk/open-im-server/pull/2881
* fix: webhookAfterSingleMsgRead will be called correctly by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2884
* fix: webhookBeforeSendSingleMsg will call before black and friend check by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2885
* revert: write msg to redis by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2883
* build: update Server version. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2887
* chore: update admin front image version by @lgz5689 in https://github.com/openimsdk/open-im-server/pull/2893
* fix: Wrong Redis Error Check by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2891
* fix: improve crontask delete outdated Data. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2901
* fix: go mod by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2906
* fix: group member update face_url by @withchao in https://github.com/openimsdk/open-im-server/pull/2910
* fix: update set seq implement. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2911
* fix https://github.com/openimsdk/open-im-server/issues/2895 by @morya in https://github.com/openimsdk/open-im-server/pull/2896
* feat: seq user and conversation seq synchronization by @withchao in https://github.com/openimsdk/open-im-server/pull/2924
* fix:  Can choose whether to set the port. by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2929
* fix: Configure move service discovery into discovery by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2934
* feat: support aws by @withchao in https://github.com/openimsdk/open-im-server/pull/2938
* build: implement services image build and CI release. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2920
* fix: compilation failed under Windows by @withchao in https://github.com/openimsdk/open-im-server/pull/2940
* feat: Prometheus can auto set port by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2943
* fix: server can return isEnd to control fetch messages when sdk pull … by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/2949
* feat: Change upload logs systemType to AppFramework. by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2927
* fix:Only print panic function frame && feat: log.ZPanic by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2947
* feat: support quote ContentType in SendMsg. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2819
* fix: seq user and conversation seq synchronization by @withchao in https://github.com/openimsdk/open-im-server/pull/2958
* fix: fetch message return isEnd and endSeq panic. by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/2959
* build: update kubernetes deployment Run. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2919
* fix: rpc panic recover by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2957
* Add a lead time for the token's issuance time. by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2914
* fix: modifying other fields while setting IsPrivateChat does not take effect by @withchao in https://github.com/openimsdk/open-im-server/pull/2972
* refactor: Refactor rpc call && auto gen rpc_call code by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2969
* fix: when fetching a referenced message, it indicates that the original message has been deleted. by @withchao in https://github.com/openimsdk/open-im-server/pull/2977
* feat: Group Monitoring Components, Enable Host Mode && Deprecate reliabilityLevel and unreadCount in notification.yml by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2975
* feat: Add node_exporter in docker-compose by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2979
* feat: Optimize Scheduled Task by @withchao in https://github.com/openimsdk/open-im-server/pull/2985
* feat: Optimizing RPC call by @withchao in https://github.com/openimsdk/open-im-server/pull/2993
* feat: optimize error stack information by @withchao in https://github.com/openimsdk/open-im-server/pull/2995
* fix: when unable EnableHistoryForNewMembers, new group member can read last one message. by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3001
* fix: redis save error when KickTokens by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3002
* feat: config center by @icey-yu in https://github.com/openimsdk/open-im-server/pull/2997
* feat: support message cache by @withchao in https://github.com/openimsdk/open-im-server/pull/3007
* docs: improve deployment docs in kubernetes. by @mo3et in https://github.com/openimsdk/open-im-server/pull/2973
* fix: The message @ information will be set only for members in the gr… by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3009
* fix: restart permission check by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3011
* fix: The system cannot be restarted the first time the configuration is set. by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3013
* fix: jssdk not init by @withchao in https://github.com/openimsdk/open-im-server/pull/3016
* build: fix uncorrect path. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3020
* fix: online status error by @withchao in https://github.com/openimsdk/open-im-server/pull/3022
* build: fix docker images build. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3024
* feat: optimize log output by @withchao in https://github.com/openimsdk/open-im-server/pull/3026
* feat: support GetLastMessage by @withchao in https://github.com/openimsdk/open-im-server/pull/3029
* feat: Add enable config center button &&  fix: grpc connection leakage by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3036
* feat: change appNotificationAccount to appManagerAccount && fix: enable config center add env check && fix: error return by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3038
* fix: GetUsersOnline returns an error in the online list by @withchao in https://github.com/openimsdk/open-im-server/pull/3040
* feat: SendBusinessNotification supported configuration parameters by @withchao in https://github.com/openimsdk/open-im-server/pull/3048
* fix: seq conversion failed without exiting by @withchao in https://github.com/openimsdk/open-im-server/pull/3052
* update: env image version by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3055
* feat: add backup volume && optimize log print by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3066
* fix: check error in BatchSetTokenMapByUidPid by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3076
* fix: DeleteDoc crash by @withchao in https://github.com/openimsdk/open-im-server/pull/3078
* refactor: improve workflows logic. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3072
* fix: the abnormal message has no sending time, causing the SDK to be abnormal by @withchao in https://github.com/openimsdk/open-im-server/pull/3087
* fix: crash caused by withdrawing messages from users who have left the group by @withchao in https://github.com/openimsdk/open-im-server/pull/3100
* fix: the user sets the conversation timer cleanup timestamp unit incorrectly by @withchao in https://github.com/openimsdk/open-im-server/pull/3102
* build: keep conflict is true. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3103
* fix: solve workflows stop when merge failed by @mo3et in https://github.com/openimsdk/open-im-server/pull/3106
* fix: seq conversion not reading env in docker environment by @withchao in https://github.com/openimsdk/open-im-server/pull/3130
* fix: the source message of the reference is withdrawn, and the referenced message is deleted by @withchao in https://github.com/openimsdk/open-im-server/pull/3137
* feat: optimize code and support running in single process mode by @withchao in https://github.com/openimsdk/open-im-server/pull/3142
* fix: Offline push does not have a badge && Android offline push by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3146
* feat: Change after webhook filter && feat SendSimpleMsg by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3151
* fix: PCAndOther multi login policy can`t get old clients correctly by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3158
* feat: the default notification.yml is not configured properly by @withchao in https://github.com/openimsdk/open-im-server/pull/3168
* feat: add a new message type: Markdown text by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3162
* feat: add a field to specify whether to send a notification message w… by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3163
* refactor: change sendNotification to sendMessage to avoid ambiguity regarding message sending behavior. by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3173
* fix: solve uncorrect notification when set group info by @mo3et in https://github.com/openimsdk/open-im-server/pull/3172
* feat: optimizing BatchGetIncrementalGroupMember by @withchao in https://github.com/openimsdk/open-im-server/pull/3180
* fix: the sorting is wrong after canceling the administrator in group settings by @withchao in https://github.com/openimsdk/open-im-server/pull/3185
* feat: system account send msg doesn't need friend verify by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3187
* fix: solve uncorrect GroupMember enter group notification type. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3188
* feat: sending messages supports returning fields modified by webhook by @withchao in https://github.com/openimsdk/open-im-server/pull/3192
* refactor: improve setConversations method. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3194
* fix: solve unocrrect invite notification by @mo3et in https://github.com/openimsdk/open-im-server/pull/3213
* feat: set configs api by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3183
* fix: AdminToken save to redis && limit 1 for each userID by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3224
* feat: check if the secret in config/share.yml has been changed during registration by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3223
* feat: Implement webhook in createConversation by @mo3et in https://github.com/openimsdk/open-im-server/pull/3228
* feat: add a function for business info change to update related conve… by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3225
* feat: add filtering for invalid messages and invalid conversations to… by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3239
* feat: implement stress-test tools. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3261
* fix: improve stress test tools parms. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3265
* fix: oss specifies content-type when uploading by @withchao in https://github.com/openimsdk/open-im-server/pull/3267
* feat: support server-issued configuration, which can be set for individual users by @withchao in https://github.com/openimsdk/open-im-server/pull/3271
* feat: GetConversationsHasReadAndMaxSeq support pinned by @withchao in https://github.com/openimsdk/open-im-server/pull/3281
* fix: transferring the group owner to a muted member, incremental version error by @withchao in https://github.com/openimsdk/open-im-server/pull/3284
* fix: group status in GroupDismissedNotification by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3286
* feat: Implement stress test v2. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3292
* License by @skiffer-git in https://github.com/openimsdk/open-im-server/pull/3293
* feat: GroupApplicationAgreeMemberEnterNotification splitting by @withchao in https://github.com/openimsdk/open-im-server/pull/3297
* fix: data version SetVersion will add record by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3304
* refactor: move stress-test tools location. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3295
* fix: delete token by correct platformID && feat: adminToken can be re… by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3313
* feat: optimize server code by @withchao in https://github.com/openimsdk/open-im-server/pull/3319
* fix: optimize grpc option and fix some interface permission checks by @withchao in https://github.com/openimsdk/open-im-server/pull/3327
* fix: standalone mode cannot be used by @withchao in https://github.com/openimsdk/open-im-server/pull/3360
* feat: add rpc interface permission check by @withchao in https://github.com/openimsdk/open-im-server/pull/3366
* fix: solve user not found when notification invitedUserID is zero in … by @mo3et in https://github.com/openimsdk/open-im-server/pull/3375
* fix: send simple msg by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3362
* fix: solve updateUserInfoEx null pointer. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3326
* fix: add rpc interface permission check by @withchao in https://github.com/openimsdk/open-im-server/pull/3377
* feat: optimize friend and group applications by @withchao in https://github.com/openimsdk/open-im-server/pull/3384
* fix: optimize friend and group applications by @withchao in https://github.com/openimsdk/open-im-server/pull/3389
* fix redis config db field by @HonQii in https://github.com/openimsdk/open-im-server/pull/3395
* feat: support distributed lock in crontask. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3401
* fix: prometheus discovery by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3408
* fix: import friends send notification by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3420
* fix: improve mileston PR workflows contents. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3382
* feat: Implement etcd and kafka auth. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3394
* feat: support redis sentinel. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3423
* fix: solve webhook incorrect attentionID references. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3411
* feat: add api logger by @withchao in https://github.com/openimsdk/open-im-server/pull/3427
* feat: add nickname for adminUser by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3435
* fix: solve `createTime` not set in setConversation and Create Conversation. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3447
* fix: update log level in crontask dist look. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3440
* refactor: support modified config and args in mage. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3466
* fix: use safe submodule init in workflows. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3468
* docs: update slack link. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3479
* Update CHANGELOG for release v3.8.3-patch.1 by @github-actions[bot] in https://github.com/openimsdk/open-im-server/pull/3164
* fix: fix incorrect kicked logic. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3480
* Update CHANGELOG for release v3.8.3-patch.2 by @github-actions[bot] in https://github.com/openimsdk/open-im-server/pull/3175
* Update CHANGELOG for release v3.8.3-patch.3 by @github-actions[bot] in https://github.com/openimsdk/open-im-server/pull/3206
* Update CHANGELOG for release v3.8.3-patch.4 by @github-actions[bot] in https://github.com/openimsdk/open-im-server/pull/3226
* fix: added AtUserIDList to the @ message for API sending. by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3472
* fix: solve batch incorrect error in Find DocIDs by @mo3et in https://github.com/openimsdk/open-im-server/pull/3476
* fix: correctly aggregate read seqs by conversation and user before DB update. by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3442
* feat: support mongo replicaset mode. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3433
* Update CHANGELOG for release v3.8.3-patch.5 by @github-actions[bot] in https://github.com/openimsdk/open-im-server/pull/3405
* Update CHANGELOG for release v3.8.3-patch.6 by @github-actions[bot] in https://github.com/openimsdk/open-im-server/pull/3473
* docs: update readme of config file. by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3356
* fix: performance issues with Kafka caused by encapsulating the MQ interface by @withchao in https://github.com/openimsdk/open-im-server/pull/3485
* fix: searchMessage method has potential NPE bug [Created by @xuzhijvn from #3287] by @xuzhijvn in https://github.com/openimsdk/open-im-server/pull/3289
* fix: admin token in standalone mode by @withchao in https://github.com/openimsdk/open-im-server/pull/3499
* fix: revert contentType in API msg by @mo3et in https://github.com/openimsdk/open-im-server/pull/3509
* fix: optimize to lru  local cache. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3514
* fix: fill in the most recent sendTime for a gap message to prevent th… by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3522
* feat: enable redis aof-use-rdb-preamble && disable auto rdb by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3529
* fix: solve incorrect batchGetIncrGroupMember when group dismissed. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3526
* fix: GetSortedConversationList nil pointer when chatlog not found. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3531
* feat: implement auth local cache. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3533
* build: comment out admin services. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3537
* fix: switch kafka & etcd image namespace to bitnamilegacy by @mo3et in https://github.com/openimsdk/open-im-server/pull/3555
* fix: solve incorrect time.Unix and logger asyncwrite by @mo3et in https://github.com/openimsdk/open-im-server/pull/3584
* fix: db manager by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3600
* fix: update JSON field names to camelCase in conversation structs by @mo3et in https://github.com/openimsdk/open-im-server/pull/3609
* feat: add msgDBSave webhook when data save to DB. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3578
* build: improve publish docker image workflow. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3552
* build: add sdk version log in registerClient by @mo3et in https://github.com/openimsdk/open-im-server/pull/3574
* Fix: Resolved the issue of incorrect generation of conversationID by @mo3et in https://github.com/openimsdk/open-im-server/pull/3581
* feat: implement DeleteConversations interface. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3549
* fix: solve msg wsHandler panic. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3595
* ​Build: Implement rate limiting and circuit breaker for API and RPC services.​​ by @mo3et in https://github.com/openimsdk/open-im-server/pull/3572
* merge: pre-release-v3.8.4 by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3623
* fix: resolve deadlock in cache eviction and improve GetBatch implementation and full id version by @withchao in https://github.com/openimsdk/open-im-server/pull/3591
* Simplify iOS background push gating (#3611) by @ozudev in https://github.com/openimsdk/open-im-server/pull/3612
* fix: reset user conversation seq when rejoining group to resolve message recall issue by @zhouribin in https://github.com/openimsdk/open-im-server/pull/3640
* feat: replace LongConn with ClientConn interface and simplify message handling by @withchao in https://github.com/openimsdk/open-im-server/pull/3643
* fix(group): move member count retrieval after member deletion for accurate updates by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3651
* fix(group): set max_seq to 0 when join group by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3649
* fix: Mongo Malloc upsert overwrites min_seq initialization by @withchao in https://github.com/openimsdk/open-im-server/pull/3657
* bugfix(conversation):removed unexpectedly called functions and itself… by @WhereAreBugs in https://github.com/openimsdk/open-im-server/pull/3668
* feat: add error code for handled friend requests and improve error handling in friend operations by @withchao in https://github.com/openimsdk/open-im-server/pull/3670
* feat: update protocol support botPlatform by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3696
* feat: gomake upgrade by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3702

## New Contributors
* @lkzz made their first contribution in https://github.com/openimsdk/open-im-server/pull/2724
* @alilestera made their first contribution in https://github.com/openimsdk/open-im-server/pull/2773
* @kursataktas made their first contribution in https://github.com/openimsdk/open-im-server/pull/2788
* @yoyo930021 made their first contribution in https://github.com/openimsdk/open-im-server/pull/2844
* @wikylyu made their first contribution in https://github.com/openimsdk/open-im-server/pull/2861
* @storyn26383 made their first contribution in https://github.com/openimsdk/open-im-server/pull/2862
* @morya made their first contribution in https://github.com/openimsdk/open-im-server/pull/2881
* @HonQii made their first contribution in https://github.com/openimsdk/open-im-server/pull/3395
* @github-actions[bot] made their first contribution in https://github.com/openimsdk/open-im-server/pull/3164
* @xuzhijvn made their first contribution in https://github.com/openimsdk/open-im-server/pull/3289
* @ozudev made their first contribution in https://github.com/openimsdk/open-im-server/pull/3612

**Full Changelog**: https://github.com/openimsdk/open-im-server/compare/v3.8.3-patch.15...v3.8.3-patch.16

---

> **Source** [openimsdk/open-im-server](https://github.com/openimsdk/open-im-server) · `v3.8.3-patch.16` · 2026-03-19 · [upstream release](https://github.com/openimsdk/open-im-server/releases/tag/v3.8.3-patch.16)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
