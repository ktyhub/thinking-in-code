---
title: "compose v5.7.1"
project: "compose"
repo: "docker/compose"
tag: "v5.7.1"
published: "2026-11-11"
type: "patch"
lang: "en"
summary: "fix(oci): verify the manifests fetched against their digest, and take only complete cache entries · fix(oci): keep the cache of extracted projects consistent on interruption and concurrent access"
---

# compose v5.7.1

## What's Changed

### Fixes 🐛
* fix(oci): verify the manifests fetched against their digest, and take only complete cache entries by @ndeloof in https://github.com/docker/compose/pull/14490
* fix(oci): keep the cache of extracted projects consistent on interruption and concurrent access by @ndeloof in https://github.com/docker/compose/pull/14462
* fix(git): check a commit out aside, and keep the cache of remote resources in a directory for each kind by @ndeloof in https://github.com/docker/compose/pull/14475
* fix(compose): report network and volume progress once, on their own row by @glours in https://github.com/docker/compose/pull/14467
* fix(config): warn about ignored uid/gid/mode at creation, not at load by @ndeloof in https://github.com/docker/compose/pull/14299
* fix(down): preserve images outside selected services by @Aghayenoor in https://github.com/docker/compose/pull/14458
* fix(events): treat io.EOF as a normal end of a bounded stream by @Bruce848647703 in https://github.com/docker/compose/pull/14444

### Internal 🔧
* refactor(compose): move logs and attach to internal/logstream by @ndeloof in https://github.com/docker/compose/pull/14407
* refactor(compose): move images and image pruning to internal/images by @ndeloof in https://github.com/docker/compose/pull/14406
* refactor(compose): move the dependency graph to internal/depgraph by @ndeloof in https://github.com/docker/compose/pull/14410
* test(compose): lock the behaviors of the start path now carried by the plan engine by @ndeloof in https://github.com/docker/compose/pull/14403
* test(e2e): migrate the first legacy icmd tests to scenarios by @ndeloof in https://github.com/docker/compose/pull/14414
* Fix monitor test fixture type by @glours in https://github.com/docker/compose/pull/14455
* ci: install the e2e engine with docker/setup-docker-action by @glours in https://github.com/docker/compose/pull/14456

### Bumps
* Update to go1.27.4 by @vvoland in https://github.com/docker/compose/pull/14489
* update Go to 1.27 by @thaJeztah in https://github.com/docker/compose/pull/14486
* update to golangci-lint v2.15.0 (compatible with go1.27) by @thaJeztah in https://github.com/docker/compose/pull/14487
* build(deps): bump go.yaml.in/yaml/v4 to v4.0.0 by @ndeloof in https://github.com/docker/compose/pull/14468
* build(deps): bump google.golang.org/grpc from 1.84.0 to 1.85.0 by @dependabot[bot] in https://github.com/docker/compose/pull/14445
* build(deps): bump github.com/docker/cli from 29.9.2+incompatible to 29.9.3+incompatible by @dependabot[bot] in https://github.com/docker/compose/pull/14451

## New Contributors
* @Bruce848647703 made their first contribution in https://github.com/docker/compose/pull/14444
* @Aghayenoor made their first contribution in https://github.com/docker/compose/pull/14458

**Full Changelog**: https://github.com/docker/compose/compare/v5.7.0...v5.7.1

---

> **Source** [docker/compose](https://github.com/docker/compose) · `v5.7.1` · 2026-11-11 · [upstream release](https://github.com/docker/compose/releases/tag/v5.7.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
