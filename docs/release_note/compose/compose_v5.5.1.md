---
title: "compose v5.5.1"
project: "compose"
repo: "docker/compose"
tag: "v5.5.1"
published: "2026-09-03"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/docker/compose/compare/v5.5.0...v5.5.1"
---

# compose v5.5.1

## What's Changed
### ✨ Improvements
* Feat(hooks): capture and surface lifecycle hook output by @glours in https://github.com/docker/compose/pull/14091
* Feat(tracing): surface otel shutdown errors via `--debug` by @htoyoda18 in https://github.com/docker/compose/pull/14152

### 🐛 Fixes
* Fix(events): validate service names before subscribing to events by @glours in https://github.com/docker/compose/pull/14076
* Fix: bake target names collision for services differing by `.` vs `_` by @ndeloof in https://github.com/docker/compose/pull/14058
* Fix(watch): sync into a symlinked directory instead of failing by @Endika in https://github.com/docker/compose/pull/14084
* Fix(hooks): include hook output in the error when a hook fails by @dennislapchenko in https://github.com/docker/compose/pull/14088
* Fix(build): TTY progress on Windows — hand the real stdout to buildkit by @ndeloof in https://github.com/docker/compose/pull/14090
* Fix(watch): sync all files on `initial_sync`, regardless of mtime by @glours in https://github.com/docker/compose/pull/14096
* Fix(network): pass IPAM options when creating networks by @glours in https://github.com/docker/compose/pull/14094
* Fix(ps): honor psFormat from Docker CLI config when no `--format` flag given by @glours in https://github.com/docker/compose/pull/14095
* Fix: dependency wait timeout surfaced only by luck by @ndeloof in https://github.com/docker/compose/pull/14105
* Fix: hold startMx on the start path actually exercised by @ndeloof in https://github.com/docker/compose/pull/14106
* Fix(watch): exclude Dockerfile and compose files from initial sync by @htoyoda18 in https://github.com/docker/compose/pull/14117
* Fix(display): stop ttyWriter.Done from hanging after context cancel by @glours in https://github.com/docker/compose/pull/14119
* Fix(build): honor provenance/sbom false in per-service bake attest by @glours in https://github.com/docker/compose/pull/14112
* Fix(compose): reject unknown subcommands under bridge/transformations by @glours in https://github.com/docker/compose/pull/14143
* Fix(plugins): honor PATHEXT for provider lookup on Windows by @ndeloof in https://github.com/docker/compose/pull/14159
* Fix(watch): stop swallowing SetRecursive errors via nolint by @glours in https://github.com/docker/compose/pull/14165
* Fix(bridge): confirm before wiping non-empty convert output dir by @glours in https://github.com/docker/compose/pull/14174
* Fix(down): spare dangling images of orphaned services, like their tagged image by @htoyoda18 in https://github.com/docker/compose/pull/14154

### 🔧  Internal
* CI: raise e2e go-test timeout to 20m by @ndeloof in https://github.com/docker/compose/pull/14072
* Lint: replace gocyclo with gocognit by @ndeloof in https://github.com/docker/compose/pull/14057
* Test(e2e): prepend provider bin dir to PATH in provider tests by @glours in https://github.com/docker/compose/pull/14079
* Refactor: dismantle the gocognit hotspots, one concern per function by @ndeloof in https://github.com/docker/compose/pull/14060
* Test(e2e): declarative Scenario layer, project files under testdata/<TestName>/ by @ndeloof in https://github.com/docker/compose/pull/14087
* Docs: document engine container event sequences in up monitor by @ndeloof in https://github.com/docker/compose/pull/14024
* E2E: fix test resource isolation and make standalone parallelism configurable by @glours in https://github.com/docker/compose/pull/14073
* API: ScaleOptions carries the replica counts by @ndeloof in https://github.com/docker/compose/pull/14077
* Chore: explicit, unique, greppable internal names by @ndeloof in https://github.com/docker/compose/pull/14049
* Docs: update CONTRIBUTING.md to reflect current tooling and practices by @glours in https://github.com/docker/compose/pull/14098
* API: option structs document what the implementation actually honors by @ndeloof in https://github.com/docker/compose/pull/14078
* Test: unit-lock the imperative start path by @ndeloof in https://github.com/docker/compose/pull/14104
* CLI: display.Mode always resolves to the mode actually rendered by @ndeloof in https://github.com/docker/compose/pull/14103
* CI: validate generated mocks are in sync by @ndeloof in https://github.com/docker/compose/pull/14102
* Docs(sdk): document the EventProcessor API that actually exists by @ndeloof in https://github.com/docker/compose/pull/14131
* Test(e2e): gate the e2e suite behind the build tag the docs already promise by @ndeloof in https://github.com/docker/compose/pull/14132
* Build: error messages name the real remedy, not a removed builder by @ndeloof in https://github.com/docker/compose/pull/14133
* Docs(contributing): legibility guidelines — comments state behavior, not history by @ndeloof in https://github.com/docker/compose/pull/14135
* Test(docs): compile the sdk.md examples by @ndeloof in https://github.com/docker/compose/pull/14136
* Chore(compose): rename convergence.go, whose convergence engine no longer exists by @ndeloof in https://github.com/docker/compose/pull/14129
* Chore(compose): comments state behavior, not history by @ndeloof in https://github.com/docker/compose/pull/14130
* Test(build): re-enable wrong ssh key id test by @htoyoda18 in https://github.com/docker/compose/pull/14120
* Chore(compose): orphan semantics stated where up and down diverge by @ndeloof in https://github.com/docker/compose/pull/14142
* Refactor: NewGraph stops mutating the project by @ndeloof in https://github.com/docker/compose/pull/14124
* Test(e2e): bump compose-bridge images to v0.0.7 by @ricardobranco777 in https://github.com/docker/compose/pull/14170

### ⚙️ Dependencies
* Build(deps): bump github/codeql-action/upload-sarif from 4.37.6 to 4.37.7 by @dependabot[bot] in https://github.com/docker/compose/pull/14101
* Remove buildx as a Go dependency by @ndeloof in https://github.com/docker/compose/pull/14123
* Chore(deps): github.com/sirupsen/logrus v1.10.2, google.golang.org/grpc v1.83.2 by @thaJeztah in https://github.com/docker/compose/pull/14137
* Build: bump golangci-lint to v2.13.2 by @ndeloof in https://github.com/docker/compose/pull/14164
* Build(deps): bump github/codeql-action/upload-sarif from 4.37.7 to 4.37.9 by @dependabot[bot] in https://github.com/docker/compose/pull/14167
* Update to go1.26.8 by @thaJeztah in https://github.com/docker/compose/pull/14172
* Feat(deps): github.com/moby/buildkit v0.33.0 by @thaJeztah in https://github.com/docker/compose/pull/14171
* Build(deps): golang.org/x/crypto v0.56.0 by @thaJeztah in https://github.com/docker/compose/pull/14173
* Bump compose-go to version v2.15.0 by @glours in https://github.com/docker/compose/pull/14178

## New Contributors
* @dennislapchenko made their first contribution in https://github.com/docker/compose/pull/14088

**Full Changelog**: https://github.com/docker/compose/compare/v5.5.0...v5.5.1

---

> **Source** [docker/compose](https://github.com/docker/compose) · `v5.5.1` · 2026-09-03 · [upstream release](https://github.com/docker/compose/releases/tag/v5.5.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
