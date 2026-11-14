---
title: "graphiti mcp-v1.1.0"
project: "graphiti"
repo: "getzep/graphiti"
tag: "mcp-v1.1.0"
version: "mcp-v1.1.0"
published: "2026-09-01"
type: "release"
lang: "en"
summary: "⚠️ Behavior change for existing Neo4j deployments"
---

# graphiti mcp-v1.1.0

⚠️ Behavior change for existing Neo4j deployments:

WHO IS AFFECTED: Self-hosted Neo4j Enterprise deployments where NEO4J_DATABASE (or database: in config.yaml) was set to something other than neo4j. Standard setups using the default neo4j database need no action.

Before: The MCP server ignored your database setting; add_memory / search could hit the server’s home database while other operations used the configured one — data could be split across two databases.

After: All operations consistently use the configured database. Set NEO4J_DATABASE explicitly in .env or config.yaml:

NEO4J_DATABASE=your_database_name
Migration: If you previously ran with a custom database name configured but data appeared missing, check your Neo4j home database — earlier writes may have landed there and may need to be migrated.

## What's Changed
* fix(ci): bump gh-action-pypi-publish for metadata 2.5 by @prasmussen15 in https://github.com/getzep/graphiti/pull/1821
* Bump graphiti-core to 0.30.1 by @prasmussen15 in https://github.com/getzep/graphiti/pull/1822
* Fix Neo4j database routing and honor NEO4J_DATABASE in MCP server by @mehulp93 in https://github.com/getzep/graphiti/pull/1812


**Full Changelog**: https://github.com/getzep/graphiti/compare/v0.30.0...mcp-v1.10

---

> **Source** [getzep/graphiti](https://github.com/getzep/graphiti) · `mcp-v1.1.0` · 2026-09-01 · [upstream release](https://github.com/getzep/graphiti/releases/tag/mcp-v1.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
