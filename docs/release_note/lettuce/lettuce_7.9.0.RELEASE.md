---
title: "lettuce 7.9.0.RELEASE"
project: "lettuce"
repo: "redis/lettuce"
tag: "7.9.0.RELEASE"
published: "2026-10-14"
type: "minor"
lang: "en"
summary: "The Lettuce team is pleased to announce the Lettuce 7.9.0 minor release!"
---

# lettuce 7.9.0.RELEASE

The Lettuce team is pleased to announce the Lettuce **7.9.0** minor release!

Lettuce 7.9.0 supports Redis 2.6+ up to Redis 8.x. In terms of Java runtime, Lettuce requires at least Java 8 and
works with Java 24. The driver is tested against Redis 8.10, Redis 8.8, Redis 8.6, Redis 8.4, Redis 8.2, Redis 8.0, Redis 7.4 and Redis 7.2.

Thanks to all contributors who made Lettuce 7.9.0.RELEASE possible.

📗 Links
Reference documentation: https://lettuce.io/core/7.9.0.RELEASE

🐞 Bug Fixes
* Fix GEODIST destination argument validation by @codingkiddo in https://github.com/redis/lettuce/pull/3934
* Fix snapshot and release publishing with Maven 3.10 credential scoping by @uglide in https://github.com/redis/lettuce/pull/3940
* RedisPublisher must not drop an error when the state changes concurrently #3942 by @zenios in https://github.com/redis/lettuce/pull/3943
* MultiOutput broken for boolean values by @Dgramada in https://github.com/redis/lettuce/pull/3932
* JSON.NUMINCRBY parsing broken for RESP2 by @Dgramada in https://github.com/redis/lettuce/pull/3933

⚙️ Maintenance
* Bump redis-authx dependencies to version 0.2.0 by @atakavci in https://github.com/redis/lettuce/pull/3906
* docs(agents): add create-implementation-plan-for-redis-api-change skill by @uglide in https://github.com/redis/lettuce/pull/3939
* Add maven wrapper by @a-TODO-rov in https://github.com/redis/lettuce/pull/3951
* Upgrade javaparser-core to 3.28.0 by @seungheyon in https://github.com/redis/lettuce/pull/3948

💡 Other
* Prepare 7.9 users for the Lettuce 8.0 credentials and connection changes by @a-TODO-rov in https://github.com/redis/lettuce/pull/3949
* [reactor-optional] Introduce reactor-free CredentialsProvider and deprecate the reactive one by @a-TODO-rov in https://github.com/redis/lettuce/pull/3911
* [reactor-optional] Keep adapter streams open and add RedisCredentialsProvider.adapt by @a-TODO-rov in https://github.com/redis/lettuce/pull/3930

❤️ New Contributors - Welcome to the Lettuce family!
* @codingkiddo made their first contribution in https://github.com/redis/lettuce/pull/3934
* @zenios made their first contribution in https://github.com/redis/lettuce/pull/3943
* @seungheyon made their first contribution in https://github.com/redis/lettuce/pull/3948

**Full Changelog**: https://github.com/redis/lettuce/compare/7.8.0.RELEASE...7.9.0.RELEASE

---

> **Source** [redis/lettuce](https://github.com/redis/lettuce) · `7.9.0.RELEASE` · 2026-10-14 · [upstream release](https://github.com/redis/lettuce/releases/tag/7.9.0.RELEASE)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
