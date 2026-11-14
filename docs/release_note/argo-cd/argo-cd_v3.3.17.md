---
title: "argo-cd v3.3.17"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.3.17"
published: "2026-10-21"
type: "patch"
lang: "en"
summary: "All Argo CD container images are signed by cosign. A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the documentation on how to verify."
---

# argo-cd v3.3.17

## Quick Start

### Non-HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.3.17/manifests/install.yaml
```

### HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.3.17/manifests/ha/install.yaml
```

## Release Signatures and Provenance

All Argo CD container images are signed by cosign.  A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the [documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets) on how to verify.

## Release Notes Blog Post
For a detailed breakdown of the key changes and improvements in this release, check out the [official blog post](https://blog.argoproj.io/argo-cd-3-3-release-candidate-00e99f7b7daa)

## Upgrading

If upgrading from a different minor version, be sure to read the [upgrading](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) documentation.

## Changelog
### Bug fixes
* e4b41686a03871e612437acc36756d60c8cdb0f2: fix: restore SSH repository fetch through a SOCKS5 proxy (cherry-pick #30238 for 3.3) (#30251) (@ppapapetrou76)
### Dependency updates
* 0e765ce7d7c21be639ada85e5b0365a4c7e40271: chore(deps): bump dompurify for release-3.3 (#30174) (@ranakan19)
* 46a4939d2cb0bac5f51f52a2fa8eaafd6c5a5982: chore(deps): update group golang to v1.26.10 (release-3.3) (#30307) (@argoproj-renovate[bot])
### Other work
* 30abed52c30dbb5cf8fdd32076c6bcc01799087c: chore: bump version to 3.3.17 on release-3.3 branch (#30322) (@github-actions[bot])

**Full Changelog**: https://github.com/argoproj/argo-cd/compare/v3.3.16...v3.3.17

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" width="25%" ></a>

---

> **Source** [argoproj/argo-cd](https://github.com/argoproj/argo-cd) · `v3.3.17` · 2026-10-21 · [upstream release](https://github.com/argoproj/argo-cd/releases/tag/v3.3.17)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
