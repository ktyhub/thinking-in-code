---
title: "compose v5.1.4"
project: "compose"
repo: "docker/compose"
tag: "v5.1.4"
published: "2026-05-20"
type: "patch"
lang: "en"
summary: "feat: add stop lifecycle hook for external providers"
---

# compose v5.1.4

## What's Changed

### ✨ Improvements
* feat: add stop lifecycle hook for external providers by @glours in https://github.com/docker/compose/pull/13779

### 🐛 Fixes
* fix: route OCI artifact pulls through Docker Desktop HTTP proxy by @glours in https://github.com/docker/compose/pull/13770
* fix: restore stoppingEvent/stoppedEvent helpers for plugin stop hook by @glours in https://github.com/docker/compose/pull/13794
* fix(publish): flag literal inline environment values by @glours in https://github.com/docker/compose/pull/13760

### 🔧  Internal
* ci: remove unused e2e job from merge workflow by @glours in https://github.com/docker/compose/pull/13740
* chore: update cagent-action to `v1.4.4` by @derekmisler in https://github.com/docker/compose/pull/13745
* Change verb tense in Docker Compose reference documentation by @ryanjbonnell in https://github.com/docker/compose/pull/13773
* pkg/compose: go fix by @thaJeztah in https://github.com/docker/compose/pull/13782
* refactor: code deduplication and simplification by @ndeloof in https://github.com/docker/compose/pull/13759
* fix: make e2e tests pass reliably locally with Docker Desktop by @glours in https://github.com/docker/compose/pull/13741
* refactor: drop Desktop beta-settings check; gate hint on LogsTab flag by @glours in https://github.com/docker/compose/pull/13755

### ⚙️ Dependencies


* build(deps): bump github.com/mattn/go-shellwords from `1.0.12` to `1.0.13` by @dependabot[bot] in https://github.com/docker/compose/pull/13731
* build(deps): bump github.com/docker/cli from `29.4.0+incompatible` to `29.4.2+incompatible` by @dependabot[bot] in https://github.com/docker/compose/pull/13768
* build(deps): bump github.com/moby/moby/client from `0.4.0` to `0.4.1` by @dependabot[bot] in https://github.com/docker/compose/pull/13752
* build(deps): bump github.com/docker/cli from `29.4.2+incompatible` to `29.4.3+incompatible` by @dependabot[bot] in https://github.com/docker/compose/pull/13776
* build(deps): bump google.golang.org/grpc from `1.80.0` to `1.81.0` by @dependabot[bot] in https://github.com/docker/compose/pull/13775
* build(deps):  update to `go 1.26.3` by @thaJeztah in https://github.com/docker/compose/pull/13783
* build(deps): bump google.golang.org/grpc from `1.81.0` to `1.81.1` by @dependabot[bot] in https://github.com/docker/compose/pull/13791
* build(deps): bump github.com/compose-spec/compose-go/v2 from `2.10.2` to `2.11.0` by @dependabot[bot] in https://github.com/docker/compose/pull/13798
* build(deps): bump github.com/docker/cli from `29.4.3+incompatible` to `29.5.1+incompatible` by @dependabot[bot] in https://github.com/docker/compose/pull/13796
* build(deps): bump golang.org/x/sys from `0.42.0` to `0.44.0` by @dependabot[bot] in https://github.com/docker/compose/pull/13788

## New Contributors
* @ryanjbonnell made their first contribution in https://github.com/docker/compose/pull/13773

**Full Changelog**: https://github.com/docker/compose/compare/v5.1.3...v5.1.4

---

> **Source** [docker/compose](https://github.com/docker/compose) · `v5.1.4` · 2026-05-20 · [upstream release](https://github.com/docker/compose/releases/tag/v5.1.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
