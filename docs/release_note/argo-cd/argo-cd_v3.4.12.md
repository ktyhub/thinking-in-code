---
title: "argo-cd v3.4.12"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.4.12"
published: "2026-10-20"
type: "patch"
lang: "en"
summary: "All Argo CD container images are signed by cosign. A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the documentation on how to verify."
---

# argo-cd v3.4.12

## Quick Start

### Non-HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.4.12/manifests/install.yaml
```

### HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.4.12/manifests/ha/install.yaml
```

## Release Signatures and Provenance

All Argo CD container images are signed by cosign.  A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the [documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets) on how to verify.

## Release Notes Blog Post
For a detailed breakdown of the key changes and improvements in this release, check out the [official blog post](https://blog.argoproj.io/argo-cd-v3-4-release-candidate-2702b8af68d4)

## Upgrading

If upgrading from a different minor version, be sure to read the [upgrading](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) documentation.

## Changelog
### Bug fixes
* ad17ffa11e65107d3648ff5633a2e1fe81b4e2ee: fix: restore SSH repository fetch through a SOCKS5 proxy (cherry-pick #30238 for 3.4) (#30250) (@ppapapetrou76)
* b8dbf208e2641dbb2dd53a6d87fa89d1e505d59a: fix: server-side diff reports fields removed by other managers as diffs (cherry-pick #30206 for 3.4) (#30230) (@argo-cd-cherry-pick-bot[bot])
### Dependency updates
* 2ae5194e24c4968dabe9ae5341af66299be4b7f2: chore(deps): bump dompurify for release-3.4 (#30175) (@ranakan19)
* caebfdb8cd0d3fcca0b486576eeee9664f31ba12: chore(deps): update group golang to v1.26.10 (release-3.4) (#30306) (@argoproj-renovate[bot])
### Other work
* 590e562a5ae6551c8559b5dba1b69939c57e3855: chore: bump version to 3.4.12 on release-3.4 branch (#30320) (@github-actions[bot])

**Full Changelog**: https://github.com/argoproj/argo-cd/compare/v3.4.11...v3.4.12

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" width="25%" ></a>

---

> **Source** [argoproj/argo-cd](https://github.com/argoproj/argo-cd) · `v3.4.12` · 2026-10-20 · [upstream release](https://github.com/argoproj/argo-cd/releases/tag/v3.4.12)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
