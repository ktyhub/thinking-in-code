---
title: "open-im-server v3.8.3-patch.17"
project: "open-im-server"
repo: "openimsdk/open-im-server"
tag: "v3.8.3-patch.17"
published: "2026-10-10"
type: "patch"
lang: "en"
summary: "fix: solve unocrrect invite notification [Created from #3213] · feat: optimize friend and group applications · build: update gomake version in dockerfile.[Patch branch] · fix: Add friend DB in notification sender"
---

# open-im-server v3.8.3-patch.17

## What's Changed
* fix: solve unocrrect invite notification [Created by @mo3et from #3213] by @OpenIM-Robot in https://github.com/openimsdk/open-im-server/pull/3219
* feat: optimize friend and group applications by @withchao in https://github.com/openimsdk/open-im-server/pull/3396
* build: update gomake version in dockerfile.[Patch branch] by @mo3et in https://github.com/openimsdk/open-im-server/pull/3416
* fix: Add friend DB in notification sender by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3438
* fix: remove update version file workflows have new line in 3.8.3-patch branch. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3452
* fix: s3 aws init by @withchao in https://github.com/openimsdk/open-im-server/pull/3454
* fix: use safe submodule init in workflows in v3.8.3-patch. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3469
* fix: correctly aggregate read seqs by conversation and user before DB update. [Created by @FGadvancer from #3442] by @OpenIM-Robot in https://github.com/openimsdk/open-im-server/pull/3482
* feat: add filtering for invalid messages and invalid conversations to… by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3483
* fix: import friends send notification in v3.8.3-patch by @mo3et in https://github.com/openimsdk/open-im-server/pull/3488
* fix: solve redis config db field in v3.8.3-patch by @mo3et in https://github.com/openimsdk/open-im-server/pull/3490
* fix: fix incorrect kicked logic and PCAndOther Login policy In v3.8.3-patch by @mo3et in https://github.com/openimsdk/open-im-server/pull/3511
* fix: solve batch incorrect error in Find DocIDs in v3.8.3-patch branch. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3515
* fix: fill in the most recent sendTime for a gap message to prevent th… by @FGadvancer in https://github.com/openimsdk/open-im-server/pull/3523
* feat: enable redis aof-use-rdb-preamble && disable auto rdb [Created by @icey-yu from #3529] by @OpenIM-Robot in https://github.com/openimsdk/open-im-server/pull/3535
* build: improve publish docker image workflow in v3.8.3-patch branch. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3551
* fix: switch kafka & etcd image namespace to bitnamilegacy in v3.8.3-patch branch. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3557
* fix: GetSortedConversationList nil pointer when chatlog not found in v3.8.3-patch branch. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3569
* fix: prometheus 3.8.3 by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3579
* Fix: Resolved the issue of incorrect generation of conversationID in 3.8.3-patch branch. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3582
* fix: solve incorrect time.Unix and logger asyncwrite in 3.8.3-patch by @mo3et in https://github.com/openimsdk/open-im-server/pull/3585
* fix: full id version by @withchao in https://github.com/openimsdk/open-im-server/pull/3589
* fix: incorrect redis fields. by @mo3et in https://github.com/openimsdk/open-im-server/pull/3602
* fix: group notification by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3619
* fix: resolve deadlock in cache eviction and improve GetBatch implementation by @withchao in https://github.com/openimsdk/open-im-server/pull/3638
* feat: replace LongConn with ClientConn interface and simplify message handling by @withchao in https://github.com/openimsdk/open-im-server/pull/3645
* Fix/group member rejoin bug 3.8.3 by @zhouribin in https://github.com/openimsdk/open-im-server/pull/3646
* refactor: simplify platformID handling and enhance UserConnContext structure by @withchao in https://github.com/openimsdk/open-im-server/pull/3648
* fix(group): set max_seq to 0 when join group by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3647
* fix(group): move member count retrieval after member deletion for accurate updates by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3650
* fix: Mongo Malloc upsert overwrites min_seq initialization by @withchao in https://github.com/openimsdk/open-im-server/pull/3659
* feat: add error code for handled friend requests and improve error handling in friend operations  by @withchao in https://github.com/openimsdk/open-im-server/pull/3671
* bugfix(permission):fix no permission error when set group notification. by @WhereAreBugs in https://github.com/openimsdk/open-im-server/pull/3675
* feat: update protocol support botPlatform by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3697
* feat: gomake upgrade by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3701
* feat: enhance configuration files with detailed comments for clarity by @icey-yu in https://github.com/openimsdk/open-im-server/pull/3707
* chore: update tools ver by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3729
* refactor(ci): actions and dockerfile  by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3733
* refactor(group): optimize group notification and cache handling by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3705
* refactor(msg): update regex pattern for conversationID to include a t… by @withchao in https://github.com/openimsdk/open-im-server/pull/3736
* CopyStructFields has been replaced due to performance issue. by @WhereAreBugs in https://github.com/openimsdk/open-im-server/pull/3673
* bugfix(conversation):removed unexpectedly called functions and itself… by @WhereAreBugs in https://github.com/openimsdk/open-im-server/pull/3667
* refactor(core): support kubernetes discovery registry by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3749
* refactor(changelog): modernize generator and workflows by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3752
* ci: action matrix release by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3762
* feat: SendBusinessNotification supported configuration parameters by @withchao in https://github.com/openimsdk/open-im-server/pull/3763
* refactor(core): select discovery backend from configured type by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3772
* fix(core): enforce admin access for queries by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3782
* feat: afterMsgSaveDB webhook by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3788
* fix(core): filter invalid and outdated conversation messages by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3792
* fix(core): trigger after-join webhooks for invited members by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3797
* fix(core): update MinIO and etcd images and settings by @dsx137 in https://github.com/openimsdk/open-im-server/pull/3812


**Full Changelog**: https://github.com/openimsdk/open-im-server/compare/v3.8.3...v3.8.3-patch.17

---

> **Source** [openimsdk/open-im-server](https://github.com/openimsdk/open-im-server) · `v3.8.3-patch.17` · 2026-10-10 · [upstream release](https://github.com/openimsdk/open-im-server/releases/tag/v3.8.3-patch.17)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
