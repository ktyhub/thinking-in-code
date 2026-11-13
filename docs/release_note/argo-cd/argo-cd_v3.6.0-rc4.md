---
title: "argo-cd v3.6.0-rc4"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.6.0-rc4"
published: "2026-10-22"
type: "minor"
lang: "en"
summary: "kubectl create namespace argocd kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.6.0-rc4/manifests/install.yaml"
---

# argo-cd v3.6.0-rc4

## Quick Start

### Non-HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.6.0-rc4/manifests/install.yaml
```

### HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.6.0-rc4/manifests/ha/install.yaml
```

## Release Signatures and Provenance

All Argo CD container images are signed by cosign.  A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the [documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets) on how to verify.

## Release Notes Blog Post
For a detailed breakdown of the key changes and improvements in this release, check out the [official blog post](https://blog.argoproj.io/argo-cd-v3-6-rc1-is-here-c0b562dc78d1)

## Upgrading

If upgrading from a different minor version, be sure to read the [upgrading](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) documentation.

## Changelog
### Bug fixes
* 166cb92ea94c3d46861773e8d5b7d2a65ab7ae8d: fix(sharding): recompute distribution when Update adds an unknown cluster (#29476) (cherry-pick #29477 for 3.6) (#30318) (@argo-cd-cherry-pick-bot[bot])
* ce9fdb755cb195cad78600830d19e4ad3bc7d7af: fix: (ui) reduce Applications virtual-scroll flicker on scroll (cherry-pick #29935 for 3.6) - REVERT (#29973) (@keithchong)
* f63d92d7273179933e8ecd219083ddee1c5718b3: fix: restore SSH repository fetch through a SOCKS5 proxy (cherry-pick #30238 for 3.6) (#30252) (@ppapapetrou76)
* ac0059e093af5be23fdc35f4588636123e9b77f7: fix: server-side diff reports fields removed by other managers as diffs (cherry-pick #30206 for 3.6) (#30231) (@argo-cd-cherry-pick-bot[bot])
### Dependency updates
* 43cfa8d44f34d473a06ea73529f263c865653a14: chore(deps): update group golang to v1.27.3 (release-3.6) (#30304) (@argoproj-renovate[bot])
### Other work
* 2eaca1ff83a2befb2851f254552135b723fdc777: chore: bump version to 3.6.0-rc4 on release-3.6 branch (#30347) (@github-actions[bot])

**Full Changelog**: https://github.com/argoproj/argo-cd/compare/v3.6.0-rc3...v3.6.0-rc4

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" width="25%" ></a>

---

> **Source** [argoproj/argo-cd](https://github.com/argoproj/argo-cd) · `v3.6.0-rc4` · 2026-10-22 · [upstream release](https://github.com/argoproj/argo-cd/releases/tag/v3.6.0-rc4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
