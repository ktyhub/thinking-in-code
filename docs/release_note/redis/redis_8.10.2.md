---
title: "redis 8.10.2"
project: "redis"
repo: "redis/redis"
tag: "8.10.2"
published: "2026-09-17"
type: "patch"
lang: "en"
summary: "Update urgency: SECURITY: There are security fixes in the release."
---

# redis 8.10.2

Update urgency: `SECURITY`: There are security fixes in the release.

### Security fixes

- #15673 Commands queued in a transaction could still access keys whose ACL permissions were revoked before the transaction was executed
- #15722 The cluster bus protocol has no authentication of its own unless `tls-cluster` is enabled, so any host able to reach a node's bus port could join the cluster and threaten it. A cluster node now warns at startup when its bus port is left unauthenticated, and the new `cluster-bus-port-protected-mode` option (default `no`) makes refusing to run in that state an explicit choice: set it to `yes` and the node starts only when `tls-cluster` authenticates the bus
- TimeSeries: Prevented Redis from crashing when adding samples to a compressed Time Series key restored from a malformed RDB payload
- RedisSearch: KNN queries on indexes with very long vector field names could cause the server to crash
- Vector Sets: Deeply nested JSON used in Vector Set queries could cause the server to crash

---

> **Source** [redis/redis](https://github.com/redis/redis) · `8.10.2` · 2026-09-17 · [upstream release](https://github.com/redis/redis/releases/tag/8.10.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
