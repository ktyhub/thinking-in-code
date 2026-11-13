---
title: "compose v5.3.0"
project: "compose"
repo: "docker/compose"
tag: "v5.3.0"
published: "2026-07-02"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/docker/compose/compare/v5.2.0...v5.3.0"
---

# compose v5.3.0

## What's Changed

> ℹ️ This release introduces native support for init containers.

### ✨ Improvements
* Pre start init containers by @glours in https://github.com/docker/compose/pull/13862

### 🐛 Fixes
* Fix(oci): route authorizer token fetches through provided transport by @glours in https://github.com/docker/compose/pull/13873
* Fix(run): scope Running events to project.Services by @glours in https://github.com/docker/compose/pull/13883

### 🔧  Internal
* Chore: migrate cagent-action to docker-agent-action (v2.0.0) by @docker-agent in https://github.com/docker/compose/pull/13869
* Chore: migrate to docker-agent-action v2.0.1 by @docker-agent in https://github.com/docker/compose/pull/13872
* Fix(reconcile): hash resolved service refs to match executor by @glours in https://github.com/docker/compose/pull/13880
* Fix(compose/port): show private port in portNotFoundError message by @vmphase in https://github.com/docker/compose/pull/13875
* Fix(run): normalize --no-TTY flag to --no-tty by @nickjj in https://github.com/docker/compose/pull/13885

### ⚙️ Dependencies
* Bump compose-go to version v2.13.0 by @glours in https://github.com/docker/compose/pull/13886





## New Contributors
* @docker-agent made their first contribution in https://github.com/docker/compose/pull/13869
* @vmphase made their first contribution in https://github.com/docker/compose/pull/13875
* @nickjj made their first contribution in https://github.com/docker/compose/pull/13885

**Full Changelog**: https://github.com/docker/compose/compare/v5.2.0...v5.3.0

---

> **Source** [docker/compose](https://github.com/docker/compose) · `v5.3.0` · 2026-07-02 · [upstream release](https://github.com/docker/compose/releases/tag/v5.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
