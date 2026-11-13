---
title: "compose v5.2.0"
project: "compose"
repo: "docker/compose"
tag: "v5.2.0"
published: "2026-06-23"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/docker/compose/compare/v5.1.4...v5.2.0"
---

# compose v5.2.0

## What's Changed

> ℹ️ This version introduces a new reconciliation algorithm between the observed state and the expected state.
> 
> If you experience any issues with a Compose workload that was previously working, please open an issue.

### ✨ Improvements
* Reconciliation plan by @ndeloof & @glours in https://github.com/docker/compose/pull/13830
* Add `rawsetenv` message type for provider plugins by @rajyan in https://github.com/docker/compose/pull/13742

### 🐛 Fixes
* Fix(build): skip remote URL contexts from bake fs.read allowlist by @ndeloof in https://github.com/docker/compose/pull/13816
* Skip validation when extracting config variables by @scarab-systems in https://github.com/docker/compose/pull/13831
* Fix(progress): probe stderr (not stdout) for TTY auto-detection by @glours in https://github.com/docker/compose/pull/13837
* Fix(publish): honor env_file required: false for missing files by @Ijtihed in https://github.com/docker/compose/pull/13848

### 🔧  Internal
* Docs: compose logs: add links for since/until flag descriptions by @thaJeztah in https://github.com/docker/compose/pull/13806
* Ci: add Dependabot cooldown (20260603-170456) by @securityeng-bot[bot] in https://github.com/docker/compose/pull/13820
* Docs(CLAUDE.md): note that commits must be signed off (DCO) by @ndeloof in https://github.com/docker/compose/pull/13817
* Refactor: replace Split in loops with more efficient SplitSeq and replace HasPrefix+TrimPrefix with CutPrefix by @caltechustc in https://github.com/docker/compose/pull/13810
* Chore: fix some comments to improve readability by @solunolab in https://github.com/docker/compose/pull/13823
* GHA: update docs-upstream to pin workflows by sha by @thaJeztah in https://github.com/docker/compose/pull/13834
* Docs: compose logs: add more links for flag descriptions by @thaJeztah in https://github.com/docker/compose/pull/13833
* Fix/progress tty line overflow 13595 by @glours in https://github.com/docker/compose/pull/13840
* Fix(publish): bypass Docker Desktop proxy for loopback registries by @ptrdom in https://github.com/docker/compose/pull/13825
* Watch: do not rebuild depends_on services on file change by @ndeloof in https://github.com/docker/compose/pull/13856
* pkg/e2e: fix malformed JWT in fixtures by @thaJeztah in https://github.com/docker/compose/pull/13857
* pkg/e2e: drop unused run param from getEnv by @glours in https://github.com/docker/compose/pull/13867
* Docs: `ps --format json` outputs JSON Lines, not a JSON array by @glours in https://github.com/docker/compose/pull/13868

### ⚙️ Dependencies
* Build(deps): bump github.com/docker/cli from `29.5.1+incompatible` to `29.5.2+incompatible` by @dependabot[bot] in https://github.com/docker/compose/pull/13802
* Update to go `1.26.4` by @thaJeztah in https://github.com/docker/compose/pull/13828
* Chore(deps): github.com/containerd/typeurl/v2 `v2.3.0` by @thaJeztah in https://github.com/docker/compose/pull/13829
* Build(deps): bump golang.org/x/sync from `0.20.0` to `0.21.0` by @dependabot[bot] in https://github.com/docker/compose/pull/13838
* Chore(deps): github.com/docker/cli `v29.5.3`, github.com/docker/buildx `v0.34.1`, buildkit `v0.30.0` by @thaJeztah in https://github.com/docker/compose/pull/13841
* Build(deps): bump golang.org/x/sys from `0.45.0` to `0.46.0` by @dependabot[bot] in https://github.com/docker/compose/pull/13832
* Chore(deps): golang.org/x/crypto `v0.53.0` by @thaJeztah in https://github.com/docker/compose/pull/13844
* Build(deps): bump github.com/containerd/containerd/v2 from `2.2.3` to `2.2.4` in the go_modules group across 1 directory by @dependabot[bot] in https://github.com/docker/compose/pull/13804
* Chore(deps): bump github.com/containerd/containerd/v2 to `v2.2.5` by @thaJeztah in https://github.com/docker/compose/pull/13855
* Chore(deps): bump github.com/golang-jwt/jwt/v5 to `v5.3.1` by @thaJeztah in https://github.com/docker/compose/pull/13847
* Chore(deps): github.com/docker/cli `v29.6.0`, github.com/docker/buildx `v0.35.0`, buildkit `v0.31.0` by @thaJeztah in https://github.com/docker/compose/pull/13842
* Bump compose-go to version `v2.12.1` by @glours in https://github.com/docker/compose/pull/13865


## New Contributors
* @securityeng-bot[bot] made their first contribution in https://github.com/docker/compose/pull/13820
* @caltechustc made their first contribution in https://github.com/docker/compose/pull/13810
* @solunolab made their first contribution in https://github.com/docker/compose/pull/13823
* @scarab-systems made their first contribution in https://github.com/docker/compose/pull/13831
* @ptrdom made their first contribution in https://github.com/docker/compose/pull/13825
* @rajyan made their first contribution in https://github.com/docker/compose/pull/13742
* @Ijtihed made their first contribution in https://github.com/docker/compose/pull/13848

**Full Changelog**: https://github.com/docker/compose/compare/v5.1.4...v5.2.0

---

> **Source** [docker/compose](https://github.com/docker/compose) · `v5.2.0` · 2026-06-23 · [upstream release](https://github.com/docker/compose/releases/tag/v5.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
