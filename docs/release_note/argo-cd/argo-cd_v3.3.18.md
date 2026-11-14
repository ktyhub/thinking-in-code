---
title: "argo-cd v3.3.18"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.3.18"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "All Argo CD container images are signed by cosign. A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the documentation on how to verify."
---

# argo-cd v3.3.18

## Quick Start

### Non-HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.3.18/manifests/install.yaml
```

### HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.3.18/manifests/ha/install.yaml
```

## Release Signatures and Provenance

All Argo CD container images are signed by cosign.  A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the [documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets) on how to verify.

## Release Notes Blog Post
For a detailed breakdown of the key changes and improvements in this release, check out the [official blog post](https://blog.argoproj.io/argo-cd-3-3-release-candidate-00e99f7b7daa)

## Upgrading

If upgrading from a different minor version, be sure to read the [upgrading](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) documentation.

## Changelog
### Bug fixes
* 4692a04abcfd3fc62c9a4ce3865a81ce79eeabdd: fix(security): emudhra CA certs compromise for release 3.3  (#30349) (@dudinea)
### Other work
* d0b5dfda404d4c0d5f364c0bb7561dad023a7f00: chore: bump version to 3.3.18 on release-3.3 branch (#30350) (@github-actions[bot])

**Full Changelog**: https://github.com/argoproj/argo-cd/compare/v3.3.17...v3.3.18

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" width="25%" ></a>

---

> **Source** [argoproj/argo-cd](https://github.com/argoproj/argo-cd) · `v3.3.18` · 2026-10-22 · [upstream release](https://github.com/argoproj/argo-cd/releases/tag/v3.3.18)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
