---
title: "graphiti v0.30.0"
project: "graphiti"
repo: "getzep/graphiti"
tag: "v0.30.0"
version: "v0.30.0"
published: "2026-09-01"
type: "minor"
lang: "en"
summary: "Fixed: Neo4j queries now respect the configured database Neo4jDriver.executequery() previously ignored the driver's database setting and ran all queries (including searches) against the server's home database, while…"
---

# graphiti v0.30.0

Fixed: Neo4j queries now respect the configured database
Neo4jDriver.execute_query() previously ignored the driver's database setting and ran all queries (including searches) against the server's home database, while session-based writes used the configured one (#1481, #851, #798). Queries are now correctly routed to the configured database, defaulting to neo4j. A per-call override is also supported via execute_query(..., database_="name").

⚠️ Behavior change for existing deployments:

WHO IS AFFECTED: This only impacts self-hosted Neo4j Enterprise deployments (multi-database support is an Enterprise feature) where the database parameter was manually set to something other than neo4j in the Graphiti client, or where the server's default database was renamed. If you run a standard Neo4j setup with the default neo4j database, no action is needed.

If your server's home database is not named neo4j and you don't pass database to the driver, queries now target neo4j instead of your home database — pass your database name explicitly to keep the old behavior.
If you configured a custom database, reads now correctly target it. Data previously written via execute_query may reside in your home database and may need to be migrated.

## What's Changed
* docs: remove Discord mentions, use GitHub for discussion by @jackaldenryan in https://github.com/getzep/graphiti/pull/1708
* feat: add source_node_uuid, target_node_uuid, and episodes to FactResult model and edge processing by @mehulp93 in https://github.com/getzep/graphiti/pull/1750
* fix edge cross-encoder shortlist via balanced merge (#1642) by @mehulp93 in https://github.com/getzep/graphiti/pull/1754
* Remove Claude PR triage workflow by @mehulp93 in https://github.com/getzep/graphiti/pull/1788
* fix(attributes): preserve prior node attributes when no entity type applies by @yatharth-anand-2410 in https://github.com/getzep/graphiti/pull/1764
* Reframe README as a temporal knowledge graph framework by @danielchalef in https://github.com/getzep/graphiti/pull/1801
* fix(neo4j): route queries to the configured database by @mehulp93 in https://github.com/getzep/graphiti/pull/1814
* Bump graphiti-core to 0.30.0 by @prasmussen15 in https://github.com/getzep/graphiti/pull/1818

## New Contributors
* @mehulp93 made their first contribution in https://github.com/getzep/graphiti/pull/1750
* @yatharth-anand-2410 made their first contribution in https://github.com/getzep/graphiti/pull/1764

**Full Changelog**: https://github.com/getzep/graphiti/compare/v0.29.3...v0.30.0

---

> **Source** [getzep/graphiti](https://github.com/getzep/graphiti) · `v0.30.0` · 2026-09-01 · [upstream release](https://github.com/getzep/graphiti/releases/tag/v0.30.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
