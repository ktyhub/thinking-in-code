---
title: "redis 8.12-rc3"
project: "redis"
repo: "redis/redis"
tag: "8.12-rc3"
published: "2026-11-12"
type: "minor"
lang: "en"
summary: "This is the third Release Candidate of Redis 8.12 in Redis Open Source."
---

# redis 8.12-rc3

This is the third Release Candidate of Redis 8.12 in Redis Open Source.

Release Candidates are feature-complete pre-releases. Pre-releases are not suitable for production use.

### Security fixes

- #16127 A TLS session could be resumed on another listener (client port vs. cluster bus), or after `tls-auth-clients` or `tls-expected-peer-name` changed, without the checks of the new settings

### New Features

- #16135 New commands: `ZMOVE`, `BZMOVE`, `ZMOVEMEMBER` to atomically move members between sorted sets - from either end, by score range, or by name - with `COUNT` batching and `NX`/`XX` destination conditions
- #15907 `SLOWLOG GET` now reports the CPU time of each slow command (a new 8th field), to tell commands that ran slowly apart from commands that were starved of CPU; New configuration parameter: `off-cpu-tracking`

### Modules API

- #16105 `RedisModule_GetUsedMemoryRatioEstimate` - like `RedisModule_GetUsedMemoryRatio`, but can be called from module threads without holding the GIL

### Bug fixes

- #16098 A replica that fell behind by more than its output buffer soft limit was disconnected even when `repl-backlog-size` was larger
- #16176 Keys could be lost during atomic slot migration when the destination rejected a command (e.g. `-NOREPLICAS` due to `min-replicas-to-write`)
- #16210 Set members could be expired incorrectly on the destination during atomic slot migration
- #16096 `MSETEX` with repeated `EX` or `PX` options was propagated to replicas and the AOF as an invalid command, losing the keys
- #16175 Commands could be replayed twice on AOF load when an AOF rewrite started after an AOF write error (e.g. disk full)
- #15955 `XADD` entries with `IDMP` could be lost on AOF replay or on a lagging replica, and `XIDMPRECORD` could crash a lagging replica
- #15930 Consumers created by `XCLAIM` or `XAUTOCLAIM` that claimed no entries were not propagated to replicas or the AOF
- #16121 Some key updates could apply the value or TTL to a different key while the keyspace was being resized
- #16042 Redis could crash with `io-threads` > 1 when running module commands that use `getkeys-api` or `getchannels-api`
- #16165 Redis could crash when a module read a sorted set emptied by `ZPOPMIN`/`ZPOPMAX` from its keyspace notification
- #16125 `ZRANGESTORE` with the same source and destination key could cause a use-after-free when `key-memory-histograms` or `cluster-slot-stats-enabled` is enabled
- #16167 `ZRANGESTORE` could create a sorted set with a broken score order when the source was a listpack loaded from an unordered payload
- #16164 A sorted set restored without `sanitize-dump-payload` could store a duplicate member twice after its conversion to the B+tree encoding
- #16146 A malformed `RESTORE` payload or RDB file could corrupt memory (only with modules that register key metadata classes)
- #16142 `CONFIG GET` and `CONFIG REWRITE` dropped the `n`, `o` and `c` flags of `notify-keyspace-events` when `A` was set, so these events stopped after a restart
- #16120 `DELEX` honored `lazyfree-lazy-server-del` instead of `lazyfree-lazy-user-del`
- #16203 Lua scripts with very deep string patterns could exhaust the stack; such patterns now fail with `pattern too complex`
- #16233 Redis could crash when using `preload-file` with AOF and a working directory of 1024 bytes or longer
- #16062 On FreeBSD, the bundled jemalloc took over libc's malloc hooks, which could crash multi-threaded tools (e.g. `redis-benchmark --threads`) and deadlock after `fork()`
- #16117 `redis-cli` could generate excessive help entries from a `COMMAND` reply with extreme arity values
- #15823 `redis-cli --keystats` printed empty statistics when no keys were found

### Performance and resource utilization improvements

- #15622 `SORT` and `SORT_RO` no longer convert listpack-encoded sorted sets to B+tree, which increased their memory usage (also on read-only replicas)
- #16163 `ZADD` that converts a sorted set to B+tree no longer leaves an oversized member index, which wasted memory and slowed `ZSCAN`
- #16069 Client memory (`tot-mem`, `mem_clients_normal`, `maxmemory-clients`) now includes the names of watched keys and of Pub/Sub channels and patterns
- #16126 Faster `ZRANGESTORE` for large `REV` rank ranges
- #16156 Faster `ZRANDMEMBER` with a large positive count on B+tree sorted sets
- #15420 Faster `SRANDMEMBER` with a positive count on hashtable-encoded sets
- #15901 Faster `HEXPIRE` and `HSETEX` updates of field expiration on listpack-encoded hashes

---

> **Source** [redis/redis](https://github.com/redis/redis) · `8.12-rc3` · 2026-11-12 · [upstream release](https://github.com/redis/redis/releases/tag/8.12-rc3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
