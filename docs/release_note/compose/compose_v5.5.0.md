---
title: "compose v5.5.0"
project: "compose"
repo: "docker/compose"
tag: "v5.5.0"
published: "2026-08-17"
type: "minor"
lang: "en"
summary: "New image digest reconciliation process & @ndeloof https://github.com/docker/compose/pull/14011"
---

# compose v5.5.0

## What's Changed

> ℹ️  This release overhauls image digest reconciliation to prevent unnecessary container recreation.                                                                                                                                                   
> Existing containers may be recreated the first time you run `compose up` after upgrading, as image digests are re-evaluated using the new logic.                                                                                                      
>                                                                                                                                                                                                                                                        
> `compose pull` now honors `pull_policy` refresh windows (`daily`, `weekly`, `every_N`).

### ✨ Improvements
* New image digest reconciliation process by @glours & @ndeloof https://github.com/docker/compose/pull/14011 https://github.com/docker/compose/pull/14041

### 🐛 Fixes
* Fix(bridge): skip pulling default image references for build-only ser… by @ericwyles in https://github.com/docker/compose/pull/14010
* Fix(watch): stop pruning every dangling image of the project by @glours in https://github.com/docker/compose/pull/14012
* Fix(config): resolve service environment when computing --hash by @glours in https://github.com/docker/compose/pull/14002
* Fix(watch): skip unreadable directories instead of failing the watch by @Endika in https://github.com/docker/compose/pull/13992
* Fix: ignore one-off container events in up monitor by @brano-osif in https://github.com/docker/compose/pull/14038
* Fix(bridge): validate arguments of bridge subcommands by @glours in https://github.com/docker/compose/pull/14003
* Fix(images): tolerate containers whose image record is gone by @ndeloof in https://github.com/docker/compose/pull/14028

### 🔧  Internal
* Test: Set stop_signal to SIGTERM in nginx-based services by @ricardobranco777 in https://github.com/docker/compose/pull/13881
* Chore: inline needlessly extracted single-use helpers by @ndeloof in https://github.com/docker/compose/pull/14048
* Add ENGINE column driven by label by @nicksieger in https://github.com/docker/compose/pull/13959

### ⚙️ Dependencies
* Build(deps): bump github.com/moby/moby/client from 0.5.0 to 0.5.1 by @dependabot[bot] in https://github.com/docker/compose/pull/13999
* Build(deps): bump github/codeql-action/upload-sarif from 4.37.3 to 4.37.4 by @dependabot[bot] in https://github.com/docker/compose/pull/14009
* Build(deps): bump github/codeql-action/upload-sarif from 4.37.4 to 4.37.5 by @dependabot[bot] in https://github.com/docker/compose/pull/14019
* Build(deps): bump github.com/moby/buildkit from 0.32.1 to 0.32.2 by @dependabot[bot] in https://github.com/docker/compose/pull/14033
* Build(deps): bump github.com/docker/buildx from 0.36.0 to 0.36.1 by @dependabot[bot] in https://github.com/docker/compose/pull/14034
* Build(deps): bump docker/github-builder/.github/workflows/bake.yml from 1.15.0 to 1.16.0 in the docker-actions group by @dependabot[bot] in https://github.com/docker/compose/pull/14035
* Build(deps): bump github.com/moby/go-archive from 0.3.2 to 0.3.3 by @dependabot[bot] in https://github.com/docker/compose/pull/14043
* Build(deps): bump github/codeql-action/upload-sarif from 4.37.5 to 4.37.6 by @dependabot[bot] in https://github.com/docker/compose/pull/14022
* Build(deps): bump github.com/docker/cli from 29.6.2+incompatible to 29.7.2+incompatible by @dependabot[bot] in https://github.com/docker/compose/pull/14042
* Build(deps): bump google.golang.org/grpc from 1.82.1 to 1.83.0 by @dependabot[bot] in https://github.com/docker/compose/pull/14008
* Bump golang to version 1.26.6 by @glours in https://github.com/docker/compose/pull/14045


## New Contributors
* @ericwyles made their first contribution in https://github.com/docker/compose/pull/14010
* @Endika made their first contribution in https://github.com/docker/compose/pull/13992
* @brano-osif made their first contribution in https://github.com/docker/compose/pull/14038

**Full Changelog**: https://github.com/docker/compose/compare/v5.4.0...v5.5.0

---

> **Source** [docker/compose](https://github.com/docker/compose) · `v5.5.0` · 2026-08-17 · [upstream release](https://github.com/docker/compose/releases/tag/v5.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
