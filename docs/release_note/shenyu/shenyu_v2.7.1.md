---
title: "shenyu v2.7.1"
project: "shenyu"
repo: "apache/shenyu"
tag: "v2.7.1"
published: "2026-07-08"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/apache/shenyu/compare/v2.7.0.3...v2.7.1"
---

# shenyu v2.7.1

## What's Changed
* Fix nondeterminsitic tests caused by JSON order issues by @yonghanlin in https://github.com/apache/shenyu/pull/6232
* Fixed non deterministic test caused by Json Ordering by @annhchen89 in https://github.com/apache/shenyu/pull/6229
* Fix mcp server real url error by @478320 in https://github.com/apache/shenyu/pull/6228
* Fix nondeterminism of the order of query parameters in HttpUtilsTest by @yonghanlin in https://github.com/apache/shenyu/pull/6230
* fix field-sqlmap.xml database reserved keywords by @2823602869 in https://github.com/apache/shenyu/pull/6233
* Release/merge 2.7.0.3 by @Aias00 in https://github.com/apache/shenyu/pull/6237
* fix get the argument position mapping error and test method by @MaMengzhen in https://github.com/apache/shenyu/pull/6236
* Fix Order Dependent Test in JsonMessageTest by @annhchen89 in https://github.com/apache/shenyu/pull/6244
* [Fix] the selector and rule pagination non-functional (#6239) by @VampireAchao in https://github.com/apache/shenyu/pull/6243
* Fix Order Dependent Test in AiPromptPluginDataHandlerTest by @annhchen89 in https://github.com/apache/shenyu/pull/6245
* Fix non deterministic test caused by HashMap by @annhchen89 in https://github.com/apache/shenyu/pull/6246
* Enhance index method to build base URL from HTTP request, supporting reverse proxy scenarios by @Aias00 in https://github.com/apache/shenyu/pull/6247
* modify loadbalancer by @yu199195 in https://github.com/apache/shenyu/pull/6251
* feat: Introduce request body size limit, enhance AI proxy plugin's ChatClient caching with config hash, and refine prompt extraction from the request body. by @Aias00 in https://github.com/apache/shenyu/pull/6248
* fix ai proxy key by @Aias00 in https://github.com/apache/shenyu/pull/6249
* Refactor EtcdClient and RedisConnectionFactory for improved readability and maintainability by @Aias00 in https://github.com/apache/shenyu/pull/6250
* feat: Enhance IpUtils with Docker support, improved IP filtering by @Aias00 in https://github.com/apache/shenyu/pull/6253
* fix mcp tool sample error by @MaMengzhen in https://github.com/apache/shenyu/pull/6259
* infra: refactor infra zk module by @yuluo-yx in https://github.com/apache/shenyu/pull/6199
* feat: Rename ai proxy enhanced module to ai proxy and update related files by @Aias00 in https://github.com/apache/shenyu/pull/6260
* fix NettyHttpClientPlugin doRequest response unique headers error by @MaMengzhen in https://github.com/apache/shenyu/pull/6258
* fix 'addCustomHeaders' header value replace bug by @MaMengzhen in https://github.com/apache/shenyu/pull/6257
* Fix order dependent test in Resilience4JPluginTest by @annhchen89 in https://github.com/apache/shenyu/pull/6261
* test(#5161): Improve test coverage for VersionUtils by @airajena in https://github.com/apache/shenyu/pull/6264
* [#6262] Fix OrderlyExecutor resource leak in shenyu-disruptor by @airajena in https://github.com/apache/shenyu/pull/6269
* Fix: Set isClosing flag in closeGracefully method as documented by @airajena in https://github.com/apache/shenyu/pull/6263
* fix add custom headers error by @MaMengzhen in https://github.com/apache/shenyu/pull/6268
* [ISSUE #6235] Set upstream check for each upstream. by @jonasHanhan in https://github.com/apache/shenyu/pull/6272
* fix mcp config shenyu context error by @MaMengzhen in https://github.com/apache/shenyu/pull/6266
* [type:fix] fix database init script by @eye-gu in https://github.com/apache/shenyu/pull/6277
* chore(deps): bump org.assertj:assertj-core from 3.22.0 to 3.27.7 in /shenyu-e2e by @dependabot[bot] in https://github.com/apache/shenyu/pull/6278
* Fix: Preserve Gateway's independent upstream health check state when receiving config updates from Admin by @guanzhenxing in https://github.com/apache/shenyu/pull/6274
* [Vulnerability Fix] Harden Docker images to run as non-root user by @RinZ27 in https://github.com/apache/shenyu/pull/6273
* feat: Add new role search criteria by @yangyx107 in https://github.com/apache/shenyu/pull/6282
* feat:sync dashboard. by @yangyx107 in https://github.com/apache/shenyu/pull/6283
* fix: handle tool not found error and update requestConfig type to JsonElement by @Aias00 in https://github.com/apache/shenyu/pull/6284
* [type:fix] set open by @eye-gu in https://github.com/apache/shenyu/pull/6280
* feat:modify instance createOrUpdate method log level by @yangyx107 in https://github.com/apache/shenyu/pull/6285
* replace stream().forEach() to forEach() by @VampireAchao in https://github.com/apache/shenyu/pull/6275
* fix: fix GsonUtils concurrent serialization exceptions (#6286) by @fanpipi in https://github.com/apache/shenyu/pull/6287
* fix: enhance logging and improve request handling in HTTP client plugins by @Aias00 in https://github.com/apache/shenyu/pull/6288
* fix mcp streamable by @Aias00 in https://github.com/apache/shenyu/pull/6289
* feat: refactor aiRequest and aiResponse models to support asynchronou… by @478320 in https://github.com/apache/shenyu/pull/6296
* feat: add CORS support with configurable allowed headers in MCP server by @Aias00 in https://github.com/apache/shenyu/pull/6295
* fix: improve upstream cache management and add recovery test for empty events by @Aias00 in https://github.com/apache/shenyu/pull/6294
* fix: improve MCP server plugin path handling and backward compatibility for argsPosition by @Aias00 in https://github.com/apache/shenyu/pull/6293
* Fix: loggion console add rule bug by @yangyx107 in https://github.com/apache/shenyu/pull/6291
* [type:fix] close java 18 ci by @moremind in https://github.com/apache/shenyu/pull/6306
* [type:refactor] remove shenyu trie cache by @moremind in https://github.com/apache/shenyu/pull/6303
* chore(deps): bump oshi from 6.7.0 to 6.10.0 by @yangpixi in https://github.com/apache/shenyu/pull/6301
* chore(deps): bump org.apache.zookeeper:zookeeper from 3.9.4 to 3.9.5 by @dependabot[bot] in https://github.com/apache/shenyu/pull/6302
* fix: replace Collections.EMPTY_MAP with Collections.emptyMap() by @Senrian in https://github.com/apache/shenyu/pull/6299
* Fix: RuleServiceImpl#searchByPage() Selectors now populated from namespace only when condition selectors are null or empty. by @bruce121 in https://github.com/apache/shenyu/pull/6305
* [type:fix] Align PluginEnum sort values with DB schema.sql by @bwangll in https://github.com/apache/shenyu/pull/6311
* infra(ci): add CI action condition by @yuluo-yx in https://github.com/apache/shenyu/pull/6316
* feat(mcp-server): enhance SDK compatibility with reflection caching and error handling by @Aias00 in https://github.com/apache/shenyu/pull/6312
* Align SSRF URL validation with OkHttp parsing by @Aias00 in https://github.com/apache/shenyu/pull/6321
* Hide registry passwords from admin API responses by @Aias00 in https://github.com/apache/shenyu/pull/6322
* Block redirect-based SSRF bypass in Swagger imports by @Aias00 in https://github.com/apache/shenyu/pull/6320
* Fix missing RBAC on selector, rule, and data-permission endpoints by @Aias00 in https://github.com/apache/shenyu/pull/6319
* Ci update cache by @2823602869 in https://github.com/apache/shenyu/pull/6325
* chore(deps): bump org.apache.kafka:kafka-clients from 3.9.1 to 3.9.2 by @dependabot[bot] in https://github.com/apache/shenyu/pull/6324
* Stop exposing login AES secrets to anonymous callers by @Aias00 in https://github.com/apache/shenyu/pull/6323
* chore(deps): bump org.bouncycastle:bcprov-jdk18on from 1.78 to 1.84 by @dependabot[bot] in https://github.com/apache/shenyu/pull/6331
* test(task#5161): improve test coverage for sync. by @wy471x in https://github.com/apache/shenyu/pull/6333
* test(task#5161): improve test coverage for admin. by @wy471x in https://github.com/apache/shenyu/pull/6328
* [fix]: Fix ReactorNettyWebSocketClient builder reuse in WebSocket plugin configuration by @zhaoguhong in https://github.com/apache/shenyu/pull/6330
* chore(deps): bump com.sun.mail:jakarta.mail from 2.0.1 to 2.0.2 by @dependabot[bot] in https://github.com/apache/shenyu/pull/6329
* Fix duplicate full-mode URI heartbeat registration after repeated refresh by @Aias00 in https://github.com/apache/shenyu/pull/6337
* [type:refactor] remove motan support by @Aias00 in https://github.com/apache/shenyu/pull/6307
* fix: correct instanceof check in addFailureUriDataRegister by @eye-gu in https://github.com/apache/shenyu/pull/6345
* fix(ai-prompt): preserve all original messages in decorateBody by @eye-gu in https://github.com/apache/shenyu/pull/6343
* fix: replace ArrayList with CopyOnWriteArrayList to avoid ConcurrentM… by @eye-gu in https://github.com/apache/shenyu/pull/6352
* fix: eliminate race condition in UpstreamCheckServiceTest.testReplace by @eye-gu in https://github.com/apache/shenyu/pull/6355
* Fix README documentation links by @SPUERSAIYAN in https://github.com/apache/shenyu/pull/6357
* Codex/fix sandbox response leak by @SPUERSAIYAN in https://github.com/apache/shenyu/pull/6359
* Stabilize k8s ingress startup healthchecks by @Aias00 in https://github.com/apache/shenyu/pull/6361
* Stabilize Sentinel integrated rate-limit assertions by @Aias00 in https://github.com/apache/shenyu/pull/6374
* Stabilize HTTP E2E compose startup readiness by @Aias00 in https://github.com/apache/shenyu/pull/6363
* Stabilize Sentinel integrated test assertions by @Aias00 in https://github.com/apache/shenyu/pull/6377
* [ISSUE 6334] : Add uri validation for regex and other operators. by @hengyuss in https://github.com/apache/shenyu/pull/6335
* [ISSUE #5856] Support configurable max-initial-line-length for HTTP request decoder by @hqbhonker in https://github.com/apache/shenyu/pull/6378
* Fix RocketMQ logging e2e bootstrap startup by @Aias00 in https://github.com/apache/shenyu/pull/6379
* fix(request): make add operations append existing values by @SouthwestAsiaFloat in https://github.com/apache/shenyu/pull/6375
* fix: skip request body for GET and HEAD requests by @zongmingzhi in https://github.com/apache/shenyu/pull/6350
* fix(ci): remove maven cache save to avoid incomplete cache pollution by @eye-gu in https://github.com/apache/shenyu/pull/6383
* [type:refactor] replace inactive wasmtime-java with chicory pure-Java WASM runtime by @eye-gu in https://github.com/apache/shenyu/pull/6356
* Prerelease/fix license by @Aias00 in https://github.com/apache/shenyu/pull/6387
* fix:fix local springmvc client cant register success by @hengyuss in https://github.com/apache/shenyu/pull/6395
* fix: DividePlugin specify-domain header to prevent cache pollution an… by @hengyuss in https://github.com/apache/shenyu/pull/6412
* fix: Enforce account enabled check on every authenticated request in … by @hengyuss in https://github.com/apache/shenyu/pull/6415
* fix(admin): limit swagger import response body size by @SouthwestAsiaFloat in https://github.com/apache/shenyu/pull/6411
* fix: Add decompression size limits to ZipUtil.unzip()[#6400] by @hengyuss in https://github.com/apache/shenyu/pull/6416
* fix: add mounts for external libraries in docker-compose to prevent startup issues (missing database connector driver) when using an external database datasource other than H2 (#6389) by @exyb in https://github.com/apache/shenyu/pull/6391
* [fix] Add missing permission annotations to /appAuth/updateSk and /sandbox/proxyGateway by @Aias00 in https://github.com/apache/shenyu/pull/6388
* Require permission for namespace plugin sync by @Aias00 in https://github.com/apache/shenyu/pull/6384
* fix: use come.google.re2j replace java.util.regex in RegexPredicateJu… by @hengyuss in https://github.com/apache/shenyu/pull/6410
* fix: Remove appSecret from sandbox-beforesign response header[#6402] by @hengyuss in https://github.com/apache/shenyu/pull/6417

## New Contributors
* @yonghanlin made their first contribution in https://github.com/apache/shenyu/pull/6232
* @annhchen89 made their first contribution in https://github.com/apache/shenyu/pull/6229
* @2823602869 made their first contribution in https://github.com/apache/shenyu/pull/6233
* @airajena made their first contribution in https://github.com/apache/shenyu/pull/6264
* @jonasHanhan made their first contribution in https://github.com/apache/shenyu/pull/6272
* @RinZ27 made their first contribution in https://github.com/apache/shenyu/pull/6273
* @yangyx107 made their first contribution in https://github.com/apache/shenyu/pull/6282
* @fanpipi made their first contribution in https://github.com/apache/shenyu/pull/6287
* @yangpixi made their first contribution in https://github.com/apache/shenyu/pull/6301
* @Senrian made their first contribution in https://github.com/apache/shenyu/pull/6299
* @bruce121 made their first contribution in https://github.com/apache/shenyu/pull/6305
* @bwangll made their first contribution in https://github.com/apache/shenyu/pull/6311
* @wy471x made their first contribution in https://github.com/apache/shenyu/pull/6333
* @SPUERSAIYAN made their first contribution in https://github.com/apache/shenyu/pull/6357
* @hengyuss made their first contribution in https://github.com/apache/shenyu/pull/6335
* @hqbhonker made their first contribution in https://github.com/apache/shenyu/pull/6378
* @SouthwestAsiaFloat made their first contribution in https://github.com/apache/shenyu/pull/6375
* @exyb made their first contribution in https://github.com/apache/shenyu/pull/6391

**Full Changelog**: https://github.com/apache/shenyu/compare/v2.7.0.3...v2.7.1

---

> **Source** [apache/shenyu](https://github.com/apache/shenyu) · `v2.7.1` · 2026-07-08 · [upstream release](https://github.com/apache/shenyu/releases/tag/v2.7.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
