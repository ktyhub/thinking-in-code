---
title: "shenyu v2.7.0.3"
project: "shenyu"
repo: "apache/shenyu"
tag: "v2.7.0.3"
published: "2025-11-26"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/apache/shenyu/compare/v2.7.0.2...v2.7.0.3"
---

# shenyu v2.7.0.3

## What's Changed
* feat(ut): add some tests by @yuluo-yx in https://github.com/apache/shenyu/pull/6105
* [type: release] 2.7.0.2 release by @Aias00 in https://github.com/apache/shenyu/pull/6111
* Bugfix:NacosConfig Test error by @Wweiei in https://github.com/apache/shenyu/pull/6116
* Bugfix:MCP server plugin requestConfig too long by @Wweiei in https://github.com/apache/shenyu/pull/6115
* fix: fix redisReteLimter type cast error, for #6103 by @yuluo-yx in https://github.com/apache/shenyu/pull/6120
* [fix] EtcdInstanceRegisterRepositoryTest run error by @Wweiei in https://github.com/apache/shenyu/pull/6127
* Update comment to English in pom.xml by @yuluo-yx in https://github.com/apache/shenyu/pull/6128
* fix:ShenyuBootstrapApplication run failed when using Nacos data sync by @Wweiei in https://github.com/apache/shenyu/pull/6124
* fix: increase default timeout and improve error handling in MCP tools by @Aias00 in https://github.com/apache/shenyu/pull/6131
* fix: replace deprecated Base64 class with java.util.Base64  by @Aias00 in https://github.com/apache/shenyu/pull/6132
* sync dashboard by @Wweiei in https://github.com/apache/shenyu/pull/6133
* Fix the issue where the cache is not properly deleted after removing a selector in the Nacos data synchronization method. by @17661152 in https://github.com/apache/shenyu/pull/6140
* feat(ut): add shenyu-registry-api unit test by @yuluo-yx in https://github.com/apache/shenyu/pull/6135
* feat:refactor registry reserved keyword fields by @Wweiei in https://github.com/apache/shenyu/pull/6139
* feat: add sync data api unit test by @yuluo-yx in https://github.com/apache/shenyu/pull/6142
* chore: update chinese comment to english and add license by @yuluo-yx in https://github.com/apache/shenyu/pull/6146
* feat:refactor selector reserved keyword fields by @Wweiei in https://github.com/apache/shenyu/pull/6141
* chore: translate zh to en by @yuluo-yx in https://github.com/apache/shenyu/pull/6149
* [type:optimize] Optimize instance comparison logic in EurekaInstanceRegisterRepository by @yqw570994511 in https://github.com/apache/shenyu/pull/6154
* [feat] refactor rule reserved keyword fields by @Wweiei in https://github.com/apache/shenyu/pull/6147
* chore: translate zh to en by @yuluo-yx in https://github.com/apache/shenyu/pull/6151
* [type:optimize] Optimize instance comparison logic in NacosInstanceRegisterRepository by @yqw570994511 in https://github.com/apache/shenyu/pull/6153
* feat: Add more friendly prompt information to facilitate debugging by @yuluo-yx in https://github.com/apache/shenyu/pull/6157
* test: add more test for FallbackShenyuClientRegisterService by @yuluo-yx in https://github.com/apache/shenyu/pull/6155
* feat: adaptor other db for tag and appAuth by @yuluo-yx in https://github.com/apache/shenyu/pull/6152
* [feat] mcpServer support object and array param. by @Wweiei in https://github.com/apache/shenyu/pull/6150
* feat:sync dashboard by @Wweiei in https://github.com/apache/shenyu/pull/6160
* Modify the test data of the sample test MotanPluginTest by @ywwana in https://github.com/apache/shenyu/pull/6164
* [fix] fix data sync bug by @ywwana in https://github.com/apache/shenyu/pull/6165
* [feat] motan plugin config based on selector by @478320 in https://github.com/apache/shenyu/pull/6058
* chore: fix typo by @yuluo-yx in https://github.com/apache/shenyu/pull/6172
* [type:fix]fix_e2e_kafka by @xcsnx in https://github.com/apache/shenyu/pull/6170
* chore: add new line by @yuluo-yx in https://github.com/apache/shenyu/pull/6171
* [fix] AiResponseTransformerPluginTest run error by @Wweiei in https://github.com/apache/shenyu/pull/6169
* [feat] refactor reserved keyword fields for discovery_upstream table by @Wweiei in https://github.com/apache/shenyu/pull/6167
* [type:fix] fix oracle schema.sql by @eye-gu in https://github.com/apache/shenyu/pull/6162
* [feat]Gateway and client status management by @xchoox in https://github.com/apache/shenyu/pull/6057
* [feat]: shenyu mcp plugin auto register by @478320 in https://github.com/apache/shenyu/pull/6163
* [feat] cache plugin config based on selector by @478320 in https://github.com/apache/shenyu/pull/6068
* feat: Ai Proxy enhanced with SpringAI & Fallback & Proxy apikey by @fantasy-lotus in https://github.com/apache/shenyu/pull/6145
* [type:fix] fix init sql by @eye-gu in https://github.com/apache/shenyu/pull/6176
* fix some bug of mcp-auto-register by @478320 in https://github.com/apache/shenyu/pull/6180
* feat: ai proxy replace old with enhanced by @fantasy-lotus in https://github.com/apache/shenyu/pull/6174
* fix shenyu-registry-nacos : modify nacos instance check. by @BraveheartStone in https://github.com/apache/shenyu/pull/6178
* fix: doSelectMaster by @fantasy-lotus in https://github.com/apache/shenyu/pull/6185
* fix: fix shenyu-sync-data-http sync password error by @yuluo-yx in https://github.com/apache/shenyu/pull/6181
* feat: ai proxy sync dashboard by @fantasy-lotus in https://github.com/apache/shenyu/pull/6186
* [fix] The "name" field of TagVO has been changed by @Wweiei in https://github.com/apache/shenyu/pull/6190
* feat: adapt other db for discovery sql fields by @yuluo-yx in https://github.com/apache/shenyu/pull/6166
* chore(deps): bump org.apache.zookeeper:zookeeper from 3.9.3 to 3.9.4 by @dependabot[bot] in https://github.com/apache/shenyu/pull/6183
* [type:feat]add unit test by @xchoox in https://github.com/apache/shenyu/pull/6182
* [feat] loggingRabbitMQ plugin config based on selector by @478320 in https://github.com/apache/shenyu/pull/6059
* [feat] sofa plugin config based on selector by @478320 in https://github.com/apache/shenyu/pull/6062
* [feat]:loggingKafka plugin config based on selector by @478320 in https://github.com/apache/shenyu/pull/6074
* [type:optimize] Optimize LogCollectUtils by @liangjh98 in https://github.com/apache/shenyu/pull/6191
* [type:feat]Change bootstrap heartbeat reporting by @xchoox in https://github.com/apache/shenyu/pull/6187
* [type:feat]HTTP and WebSocket synchronous mode supports heartbeat detection by @xchoox in https://github.com/apache/shenyu/pull/6179
* feat: add shenyu-register-client-api unit test by @yuluo-yx in https://github.com/apache/shenyu/pull/6192
* [feat] github ci by @Aias00 in https://github.com/apache/shenyu/pull/6031
* infra: add auto notify GHA when issue is created by @yuluo-yx in https://github.com/apache/shenyu/pull/6198
* feat: add shenyu-register-client-beat module unit test by @yuluo-yx in https://github.com/apache/shenyu/pull/6193
* infra: add issue label manager GHA by @yuluo-yx in https://github.com/apache/shenyu/pull/6197
* [feat] mvnd by @Aias00 in https://github.com/apache/shenyu/pull/6041
* [ISSUE #6144] 修复通过 nacos 发现下游服务时，下游服务重启后，会将旧的IP覆盖新的IP。导致通过shenyu调用下游服务报错Can not find healthy upstream url, please check your configuration! by @BraveheartStone in https://github.com/apache/shenyu/pull/6201
* [fix] the path truncation of get requests set by shenyuContext in MCP Server by @MaMengzhen in https://github.com/apache/shenyu/pull/6209
* fix: When there are multiple indices under the alias shenyu-access-lo… by @wusuobuzai in https://github.com/apache/shenyu/pull/6203
* Fix typo in active committers list by @yuluo-yx in https://github.com/apache/shenyu/pull/6205
* feat: add shenyu-registry-k8s module unit test by @yuluo-yx in https://github.com/apache/shenyu/pull/6206
* fix: remove unnecessary mock return value in MotanProxyServiceTest by @Aias00 in https://github.com/apache/shenyu/pull/6210
* feat(ci): replace prow action with local issue-manager script by @yuluo-yx in https://github.com/apache/shenyu/pull/6211
* Mcp auto register bug fix by @478320 in https://github.com/apache/shenyu/pull/6212
* feat:mcp server autoRegister enhance by @478320 in https://github.com/apache/shenyu/pull/6213
* fix: The use of outdated dependencies due to mvnd cache by @478320 in https://github.com/apache/shenyu/pull/6217
* Fix the issue of multiple selectors connecting to different registry centers by @yunlongn in https://github.com/apache/shenyu/pull/6218
* feat:import mcp server config by swagger doc by @478320 in https://github.com/apache/shenyu/pull/6219
* refactor: extract base data for plugin, selector and rule data class by @yuluo-yx in https://github.com/apache/shenyu/pull/6215
* feat: remove shenyu-infra-x-module by @yuluo-yx in https://github.com/apache/shenyu/pull/6216
* chore: fix typos in some files by @khanhkhanhlele in https://github.com/apache/shenyu/pull/6224
* fix:shenyu-examples-mcp by @478320 in https://github.com/apache/shenyu/pull/6226
* Fix shenyu mcp bugs by @478320 in https://github.com/apache/shenyu/pull/6227
* chore: update LICENSE with new dependencies and versions by @Aias00 in https://github.com/apache/shenyu/pull/6234

## New Contributors
* @17661152 made their first contribution in https://github.com/apache/shenyu/pull/6140
* @xchoox made their first contribution in https://github.com/apache/shenyu/pull/6057
* @BraveheartStone made their first contribution in https://github.com/apache/shenyu/pull/6178
* @liangjh98 made their first contribution in https://github.com/apache/shenyu/pull/6191
* @MaMengzhen made their first contribution in https://github.com/apache/shenyu/pull/6209
* @wusuobuzai made their first contribution in https://github.com/apache/shenyu/pull/6203
* @khanhkhanhlele made their first contribution in https://github.com/apache/shenyu/pull/6224

**Full Changelog**: https://github.com/apache/shenyu/compare/v2.7.0.2...v2.7.0.3

---

> **Source** [apache/shenyu](https://github.com/apache/shenyu) · `v2.7.0.3` · 2025-11-26 · [upstream release](https://github.com/apache/shenyu/releases/tag/v2.7.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
