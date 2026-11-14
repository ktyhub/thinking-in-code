---
title: "argo-cd v3.6.1"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.6.1"
published: "2026-11-04"
type: "patch"
lang: "en"
summary: "All Argo CD container images are signed by cosign. A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the documentation on how to verify."
---

# argo-cd v3.6.1

## Quick Start

### Non-HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.6.1/manifests/install.yaml
```

### HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.6.1/manifests/ha/install.yaml
```

## Release Signatures and Provenance

All Argo CD container images are signed by cosign.  A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the [documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets) on how to verify.

## Release Notes Blog Post
For a detailed breakdown of the key changes and improvements in this release, check out the [official blog post](https://blog.argoproj.io/argo-cd-v3-0-release-candidate-a0b933f4e58f)

## Upgrading

If upgrading from a different minor version, be sure to read the [upgrading](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) documentation.

## Changelog
### Bug fixes
* 94037c4d4e1af4bd0651d37a179fbd9e347e668c: fix(ui): keep the sidebar layout in sync after toggling it (cherry-pick #30762 for 3.6) (#30771) (@shimagrawal)
* abfc76157c9a9bcdc4b4161077e4e0e7993493fe: fix(ui): stop webpack minifying index.html so --rootpath/--basehref work (#30763) (cherry-pick #30767 for 3.6) (#30768) (@argo-cd-cherry-pick-bot[bot])
### Other work
* c7c41d322fb1592b09c72448ac439abc3c69af48: chore: bump version to 3.6.1 on release-3.6 branch (#30769) (@github-actions[bot])

**Full Changelog**: https://github.com/argoproj/argo-cd/compare/v3.6.0...v3.6.1

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" width="25%" ></a>

---

> **Source** [argoproj/argo-cd](https://github.com/argoproj/argo-cd) · `v3.6.1` · 2026-11-04 · [upstream release](https://github.com/argoproj/argo-cd/releases/tag/v3.6.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
