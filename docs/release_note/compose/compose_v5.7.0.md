---
title: "compose v5.7.0"
project: "compose"
repo: "docker/compose"
tag: "v5.7.0"
published: "2026-11-02"
type: "minor"
lang: "en"
summary: "Execution plan"
---

# compose v5.7.0

## What's Changed

> ℹ️ **Heads-up for users of Compose as a library:** `Up` now runs its Create and Start phases as **a single plan over a single daemon snapshot**, for `up -d` ([#14290](https://github.com/docker/compose/pull/14290)) and interactive `up` ([#14305](https://github.com/docker/compose/pull/14305)), as `scale`, watch rebuilds and `start` already do ([#14291](https://github.com/docker/compose/pull/14291), [#14296](https://github.com/docker/compose/pull/14296)). The CLI behaves as before. If you call `api.Compose.Up` from your own program:
>
> * `Up` now validates its options first, with the same rules as the CLI flags: `UpOptions.Validate()` returns an `*api.IncompatibleOptionsError` (`errors.Is(err, api.ErrIncompatibleOptions)`) for `Start.Wait` combined with `Start.Attach`, and for a detached `Up` (no `Start.Attach`) combined with `OnExit`, `ExitCodeFrom` or `Watch`. Those combinations used to be silently ignored ([#14306](https://github.com/docker/compose/pull/14306)).
> * `Up` works on the project it is given and ignores `StartOptions.Project`.
> * The daemon is not observed again between the two phases: a container that exits after the plan is built is not started again, and one removed in between makes its start fail instead of being skipped. A planning error of the Start phase now fails before any container is created.
> * A foreground `Up` now gives a `use_api_socket` service its `/run/secrets/docker/config.json`, as `up -d` does, and shows the output of `pre_start` hooks.
> * The keyboard menu of an interactive `up` is no longer built by the library: set `NavigationMenu: true` **and** pass an implementation with `compose.WithNavigationMenu(...)`, otherwise no menu is displayed and a warning says so ([#14324](https://github.com/docker/compose/pull/14324)).
>
> Other changes to the library surface in this release: `DownOptions.Images` is now an `api.ImagePruneMode` (untyped constants still compile, a `string` variable needs a conversion) and an invalid value is rejected before `Down` removes anything ([#14149](https://github.com/docker/compose/pull/14149)); `compose.ServiceHash`, `compose.NetworkHash` and `compose.VolumeHash` are no longer exported, the helpers having moved to an internal package ([#14405](https://github.com/docker/compose/pull/14405)); `api.Compose` is now assembled from six smaller interfaces, with the same method set ([#14322](https://github.com/docker/compose/pull/14322)); `PushOptions.IgnoreMissing` is added.

### ✨ Improvements

**Execution plan**
* Feat: detached up runs on a single plan by @ndeloof in https://github.com/docker/compose/pull/14290
* Feat(up): interactive up runs on a single plan by @ndeloof in https://github.com/docker/compose/pull/14305
* Feat: scale and watch rebuild use the unified plan by @ndeloof in https://github.com/docker/compose/pull/14291
* Feat: compose start builds a start-only plan by @ndeloof in https://github.com/docker/compose/pull/14296

**Commands**
* Feat(run): --no-recreate reuses existing dependencies as-is by @ndeloof in https://github.com/docker/compose/pull/14144
* Feat(push): add --ignore-missing to skip images not available locally by @glours in https://github.com/docker/compose/pull/14341
* Feat(push): deprecate --ignore-push-failures in favor of --ignore-missing by @glours in https://github.com/docker/compose/pull/14354
* Feat(stats): add --all-projects and --aggregate flags by @glours in https://github.com/docker/compose/pull/14337
* Feat(network): let a service opt out of its name as a network alias by @glours in https://github.com/docker/compose/pull/14342
* Pass --parallel limit to bake as --jobs by @maxproske in https://github.com/docker/compose/pull/14352

**Other**
* Feat: support the umask service attribute by @ndeloof in https://github.com/docker/compose/pull/14367
* Use the Docker Desktop Hub session for Docker Hub registry credentials by @Benehiko in https://github.com/docker/compose/pull/14295

### 🐛 Fixes
* Fix(bridge): reject --dry-run on bridge commands by @glours in https://github.com/docker/compose/pull/14307
* Fix(up): don't report a cancelled or expired wait on an optional dependency as skipped by @ndeloof in https://github.com/docker/compose/pull/14309
* Fix(logs): relay each line of a restarted container exactly once by @ndeloof in https://github.com/docker/compose/pull/14314
* Fix(bake): grant permissions for configured build inputs by @crazy-max in https://github.com/docker/compose/pull/14325
* Fix(watch): skip sync+exec triggers on bind-mounted paths by @glours in https://github.com/docker/compose/pull/14328
* Fix: pre_start hooks receive the service env_file and environment by @ndeloof in https://github.com/docker/compose/pull/14293
* Fix: keep the image pull of compose run inside the run progress block by @ndeloof in https://github.com/docker/compose/pull/14294
* Fix: do not execute providers and models in dry-run mode by @glours in https://github.com/docker/compose/pull/14334
* Fix(build): read bake's stderr to the end before waiting for it by @ndeloof in https://github.com/docker/compose/pull/14335
* Fix(executor): a wait node holds no --parallel slot while it polls by @ndeloof in https://github.com/docker/compose/pull/14303
* Fix(pre_start): capture a hook's output by opening its log stream once started by @ndeloof in https://github.com/docker/compose/pull/14353
* Fix(run): keep a recreated dependency's anonymous volumes by @htoyoda18 in https://github.com/docker/compose/pull/14358
* Fix(watch): ignore .git at any depth inside the watched path by @htoyoda18 in https://github.com/docker/compose/pull/14363
* Fix(executor): report the services a failed start interrupts by @ndeloof in https://github.com/docker/compose/pull/14376
* Fix(monitor): subscribe to events since before the initial listing by @ndeloof in https://github.com/docker/compose/pull/14304
* Fix(compose): skip the lowered-environment allocation in envResolverWithCase by @TDnorthgarden in https://github.com/docker/compose/pull/14390
* Fix(projectloader): unescape service names in unsupported attribute warnings by @Huang-404-Q in https://github.com/docker/compose/pull/14380
* Fix(down): keep a volume the project does not own on down -v by @htoyoda18 in https://github.com/docker/compose/pull/14374
* Fix(start): give a started use_api_socket service its config file by @ndeloof in https://github.com/docker/compose/pull/14393
* Fix(up): honor -t when an attached up stops the application by @htoyoda18 in https://github.com/docker/compose/pull/14395
* Fix(up): check a depends_on condition before the first poll tick by @htoyoda18 in https://github.com/docker/compose/pull/14385
* Fix(watch): recognize bind-mounted paths starting with two dots by @ahbaqdadi in https://github.com/docker/compose/pull/14425
* Fix(use_api_socket): harden the credentials handed to the service by @ndeloof in https://github.com/docker/compose/pull/14402

### 🔧  Internal
* Executor: run start-phase operations (epic #14081, lot 1) by @ndeloof in https://github.com/docker/compose/pull/14274
* Api: DownOptions.Images becomes a typed ImagePruneMode, validated upfront by @ndeloof in https://github.com/docker/compose/pull/14149
* Api: reject incompatible Up options with a typed error by @ndeloof in https://github.com/docker/compose/pull/14306
* Refactor: split create() into preparePlan + execute by @ndeloof in https://github.com/docker/compose/pull/14289
* Refactor(executor): let a caller drive the create and start phases itself by @ndeloof in https://github.com/docker/compose/pull/14302
* Refactor(api): split Compose into focused interfaces by @ndeloof in https://github.com/docker/compose/pull/14322
* Refactor(compose): move mutable package-level state into composeService by @ndeloof in https://github.com/docker/compose/pull/14323
* Refactor(up): inject the navigation menu instead of importing cmd/formatter by @ndeloof in https://github.com/docker/compose/pull/14324
* Refactor: extract inspect and projectloader from pkg/compose into internal packages by @ndeloof in https://github.com/docker/compose/pull/14331
* Refactor: move the provider relay and plugin execution to internal/relay and internal/provider by @ndeloof in https://github.com/docker/compose/pull/14333
* Refactor(executor): hand the hook-log listener to runStart only by @ndeloof in https://github.com/docker/compose/pull/14392
* Refactor: move exec, cp, export and commit to internal/containerops by @ndeloof in https://github.com/docker/compose/pull/14397
* Refactor: move the config-hash helpers to internal/confighash by @ndeloof in https://github.com/docker/compose/pull/14405
* Refactor: add internal/concurrency for the bounded errgroup helpers by @ndeloof in https://github.com/docker/compose/pull/14422
* Refactor: remove the helpers duplicated across pkg/compose and the internal packages by @ndeloof in https://github.com/docker/compose/pull/14424
* Docs(compose): drop the comments that still describe the deleted imperative start path by @ndeloof in https://github.com/docker/compose/pull/14398
* Docs(compose): correct what the startMx comment says about #12846 by @ndeloof in https://github.com/docker/compose/pull/14399
* Refactor(compose): drop the timeout parameter of waitDependencies by @ndeloof in https://github.com/docker/compose/pull/14400
* Refactor(compose): move the dependency wait helpers to their own file by @ndeloof in https://github.com/docker/compose/pull/14401
* Ci: run unit tests with -race, pin test tooling, add a ci-ok aggregate check by @ndeloof in https://github.com/docker/compose/pull/14321
* Go.mod: keep go patch version at lowest possible by @thaJeztah in https://github.com/docker/compose/pull/14347
* Build(lint): bump golangci-lint to v2.15.0 and fix its new findings by @ndeloof in https://github.com/docker/compose/pull/14418
* Test(e2e): lock the behavior of the foreground up by @ndeloof in https://github.com/docker/compose/pull/14300
* Test(formatter): keep escape sequences out of the go test output by @htoyoda18 in https://github.com/docker/compose/pull/14351
* Docs: remove broken CONTRIBUTING.md link by @DaneHarrison in https://github.com/docker/compose/pull/14251

### ⚙️ Dependencies
* Build(deps): golang.org/x/net v0.60.0 (security) by @thaJeztah in https://github.com/docker/compose/pull/14316
* Chore(deps): bump github.com/containerd/containerd/v2 v2.4.2 (security) by @thaJeztah in https://github.com/docker/compose/pull/14339
* Update to go1.26.9 (security) by @thaJeztah in https://github.com/docker/compose/pull/14315
* Update to go1.26.10 (security) by @thaJeztah in https://github.com/docker/compose/pull/14366
* Build(deps): bump github.com/mattn/go-shellwords from 1.0.15 to 1.0.16 by @dependabot[bot] in https://github.com/docker/compose/pull/14320
* Build(deps): bump github.com/docker/cli from 29.8.2+incompatible to 29.9.0+incompatible by @dependabot[bot] in https://github.com/docker/compose/pull/14319
* Build(deps): bump github.com/moby/moby/client from 0.6.1 to 0.6.2 by @dependabot[bot] in https://github.com/docker/compose/pull/14318
* Build(deps): bump github.com/docker/secrets-engine/x from 0.8.2 to 0.8.3 by @dependabot[bot] in https://github.com/docker/compose/pull/14301
* Build(deps): bump secrets-engine client to v0.2.0 by @Benehiko in https://github.com/docker/compose/pull/14327
* Build(deps): bump secrets-engine/client to v0.2.2 by @Benehiko in https://github.com/docker/compose/pull/14361
* Build(deps): bump github.com/Microsoft/go-winio from 0.6.3-0.20251027160822-ad3df93bed29 to 0.6.3 by @dependabot[bot] in https://github.com/docker/compose/pull/14330
* Build(deps): bump golang.org/x/sync from 0.23.0 to 0.24.0 by @dependabot[bot] in https://github.com/docker/compose/pull/14329
* Build(deps): bump github.com/mattn/go-runewidth from 0.0.30 to 0.0.31 by @dependabot[bot] in https://github.com/docker/compose/pull/14348
* Build(deps): bump github.com/docker/cli from 29.9.0+incompatible to 29.9.1+incompatible by @dependabot[bot] in https://github.com/docker/compose/pull/14349
* Build(deps): bump actions/upload-artifact from 7.0.1 to 7.0.2 by @dependabot[bot] in https://github.com/docker/compose/pull/14343
* Build(deps): bump actions/download-artifact from 8.0.1 to 8.0.2 by @dependabot[bot] in https://github.com/docker/compose/pull/14344
* Build(deps): bump github/codeql-action/upload-sarif from 4.38.2 to 4.38.3 by @dependabot[bot] in https://github.com/docker/compose/pull/14350
* Build(deps): bump golang.org/x/sys from 0.48.0 to 0.49.0 by @dependabot[bot] in https://github.com/docker/compose/pull/14338
* Build(deps): bump ossf/scorecard-action from 2.4.4 to 2.5.0 by @dependabot[bot] in https://github.com/docker/compose/pull/14360
* Build(deps): bump docker/bake-action from 7.4.0 to 7.5.0 in the docker-actions group by @dependabot[bot] in https://github.com/docker/compose/pull/14371
* Build(deps): bump github.com/docker/cli from 29.9.1+incompatible to 29.9.2+incompatible by @dependabot[bot] in https://github.com/docker/compose/pull/14369
* Build(deps): bump github.com/Microsoft/go-winio from 0.6.3 to 0.6.4 by @dependabot[bot] in https://github.com/docker/compose/pull/14368
* Build(deps): bump the docker-actions group with 2 updates by @dependabot[bot] in https://github.com/docker/compose/pull/14389
* Build(deps): bump github/codeql-action/upload-sarif from 4.38.3 to 4.39.0 by @dependabot[bot] in https://github.com/docker/compose/pull/14377
* Build(deps): bump docker/github-builder/.github/workflows/bake.yml from 1.18.0 to 1.18.1 in the docker-actions group by @dependabot[bot] in https://github.com/docker/compose/pull/14415
* Build(deps): bump github/codeql-action/upload-sarif from 4.39.0 to 4.39.1 by @dependabot[bot] in https://github.com/docker/compose/pull/14416

## New Contributors
* @Benehiko made their first contribution in https://github.com/docker/compose/pull/14295
* @DaneHarrison made their first contribution in https://github.com/docker/compose/pull/14251
* @TDnorthgarden made their first contribution in https://github.com/docker/compose/pull/14390
* @Huang-404-Q made their first contribution in https://github.com/docker/compose/pull/14380
* @ahbaqdadi made their first contribution in https://github.com/docker/compose/pull/14425

**Full Changelog**: https://github.com/docker/compose/compare/v5.6.1...v5.7.0

---

> **Source** [docker/compose](https://github.com/docker/compose) · `v5.7.0` · 2026-11-02 · [upstream release](https://github.com/docker/compose/releases/tag/v5.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
