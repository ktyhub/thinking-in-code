---
title: "sofa-boot v4.3.0"
project: "sofa-boot"
repo: "sofastack/sofa-boot"
tag: "v4.3.0"
published: "2024-06-06"
type: "minor"
lang: "en"
summary: "⭐️ New Features"
---

# sofa-boot v4.3.0

⭐️ New Features
* Support PolarisRegistryConfiguration by @wangchengming666 in https://github.com/sofastack/sofa-boot/pull/1291
* Add queueRemainingSize log at the beginning monitor by @EvenLjj in https://github.com/sofastack/sofa-boot/pull/1293
* Add spring-boot-configuration-processor in sofa-boot-actuator-autoconigure model by @HzjNeverStop in https://github.com/sofastack/sofa-boot/pull/1294
* Support sofa thread pool actuator by @HzjNeverStop in https://github.com/sofastack/sofa-boot/pull/1301
* Support kubernetes registry configuration by @wangchengming666 in https://github.com/sofastack/sofa-boot/pull/1288
* Support mac M1(osx-aarch_64) compile and test by @CrazyHZM in https://github.com/sofastack/sofa-boot/pull/1305
* Update Spring Boot 3.2.6 by @HzjNeverStop in https://github.com/sofastack/sofa-boot/pull/1326

🔨 Optimize
* Optimize getBiz method by reduce invoke Map.toArray() (#1286) by @NTP1996 in https://github.com/sofastack/sofa-boot/pull/1287
* Remove ThreadLocal in DynamicJvmServiceInvoker by @HzjNeverStop in https://github.com/sofastack/sofa-boot/pull/1297
* Test: add new test cases. by @JAYDIPSINH27 in https://github.com/sofastack/sofa-boot/pull/1299
* Add Code Scan Action by @Duan-0916 in https://github.com/sofastack/sofa-boot/pull/1274
* Upgrade github action version to v4 by @CrazyHZM in https://github.com/sofastack/sofa-boot/pull/1308
* Update community contact way by @CrazyHZM in https://github.com/sofastack/sofa-boot/pull/1313
* Application startup update register order by @HzjNeverStop in https://github.com/sofastack/sofa-boot/pull/1325
* Add runnable/callable class in async invoke method by @HzjNeverStop in https://github.com/sofastack/sofa-boot/pull/1327

🐞 Bug fixes
* Fix #1276  after healthcheck double check success, register async by @wangchengming666 in https://github.com/sofastack/sofa-boot/pull/1290
* Fix concuren problem in jvmfilterholder by @HzjNeverStop in https://github.com/sofastack/sofa-boot/pull/1295
* Fix readiness health check list mistake in parallel checking scenario by @CrazyHZM in https://github.com/sofastack/sofa-boot/pull/1310
* Fix readme for build status by @CrazyHZM in https://github.com/sofastack/sofa-boot/pull/1315
* Fix typos by @CrazyHZM in https://github.com/sofastack/sofa-boot/pull/1314
* Fix build status by @CrazyHZM in https://github.com/sofastack/sofa-boot/pull/1318
* Fix lazyinit value transfer problem by @CrazyHZM in https://github.com/sofastack/sofa-boot/pull/1316
* Fix beans information lost parentId by @CrazyHZM in https://github.com/sofastack/sofa-boot/pull/1319
* Fix sofaruntime manager destroy whitout shutdown by @CrazyHZM in https://github.com/sofastack/sofa-boot/pull/1324


## New Contributors
* @NTP1996 made their first contribution in https://github.com/sofastack/sofa-boot/pull/1287
* @wangchengming666 made their first contribution in https://github.com/sofastack/sofa-boot/pull/1290
* @JAYDIPSINH27 made their first contribution in https://github.com/sofastack/sofa-boot/pull/1299
* @Duan-0916 made their first contribution in https://github.com/sofastack/sofa-boot/pull/1274

**Full Changelog**: https://github.com/sofastack/sofa-boot/compare/v4.2.0...v4.3.0

---

> **Source** [sofastack/sofa-boot](https://github.com/sofastack/sofa-boot) · `v4.3.0` · 2024-06-06 · [upstream release](https://github.com/sofastack/sofa-boot/releases/tag/v4.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
