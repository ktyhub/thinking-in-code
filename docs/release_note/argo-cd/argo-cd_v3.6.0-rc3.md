---
title: "argo-cd v3.6.0-rc3"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.6.0-rc3"
published: "2026-10-15"
type: "minor"
lang: "en"
summary: "All Argo CD container images are signed by cosign. A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the documentation on how to verify."
---

# argo-cd v3.6.0-rc3

## Quick Start

### Non-HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.6.0-rc3/manifests/install.yaml
```

### HA:

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.6.0-rc3/manifests/ha/install.yaml
```

## Release Signatures and Provenance

All Argo CD container images are signed by cosign.  A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications. See the [documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets) on how to verify.

## Release Notes Blog Post
For a detailed breakdown of the key changes and improvements in this release, check out the [official blog post](https://blog.argoproj.io/argo-cd-v3-6-rc1-is-here-c0b562dc78d1)

## Upgrading

If upgrading from a different minor version, be sure to read the [upgrading](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) documentation.

## Changelog
### Features
* 5f8562e90a9310a9e521e5aa6ae529060a567279: feat(dex): Configure Dex TLS Cipher Suites and Curve Preferences (cherry-pick #29658 for 3.6) (#30217) (@argo-cd-cherry-pick-bot[bot])
### Bug fixes
* 9ae60857e3ef6cd1b8bacda4a422b87038b10d12: fix(ci): use curl in kustomize checksum helper so Renovate can refresh checksums (cherry-pick #29938 for 3.6) (#30102) (@argo-cd-cherry-pick-bot[bot])
* 1bb9bd33df59a383f0840d180b32aed2c1c2d3b2: fix(grpc): a workaround to fix SRV _grpclb._tcp SRV lookups (#29989) (cherry-pick #30084 for 3.6) (#30169) (@argo-cd-cherry-pick-bot[bot])
* 31101a86a62c8352e476fcba192e39b7ef82455d: fix(reposerver): stale manifests and goroutine leak after CMP failure (#29870) (cherry-pick #29874 for 3.6) (#30142) (@argo-cd-cherry-pick-bot[bot])
* 011bb47da0f59ca5a44289e51cd2cda6fbad80c0: fix(server): fill event count and timestamps for events.k8s.io events (#30015) (cherry-pick #30017 for 3.6) (#30051) (@argo-cd-cherry-pick-bot[bot])
* da921411fed9777fb176d1eff0600d6a5b66c04c: fix(ui): show enableOCI only for Helm  (cherry-pick #29974 for 3.6) (#30075) (@argo-cd-cherry-pick-bot[bot])
* 33eb5e4efdf2881bce8bfb596fbeb3ffe2ec064a: fix: cache the OCI tag list (#30117) (cherry-pick #30118 for 3.6) (#30120) (@argo-cd-cherry-pick-bot[bot])
* 814bc4d5e3a93460983ed710f72778f3237b11b4: fix: correct scheduled-time format in CronWorkflow create-workflow action (#29915) (cherry-pick #29916 for 3.6) (#29952) (@argo-cd-cherry-pick-bot[bot])
* 1d58350e31412eafcd8152400af3e25c333151ea: fix: fix escaped URL routing for write repo (creds) endpoints (cherry-pick #29940 for 3.6) (#29957) (@argo-cd-cherry-pick-bot[bot])
* f980990402cabca4cfd8e31e499b87ee9d097d25: fix: fix untar inbound check if dstPath is symlinked (cherry-pick #28881 for 3.6) (#29977) (@argo-cd-cherry-pick-bot[bot])
* 70faa5d80b8c267fda498eece31d17c3e729b9e9: fix: synchronize OCI cache cleanup with extraction (#30020) (cherry-pick #30023 for 3.6) (#30105) (@argo-cd-cherry-pick-bot[bot])
### Dependency updates
* 4573196eb1cc5a073b6867c2f129ef8904f283ac: chore(deps): update dependency dexidp/dex to v2.46.0 (cherry-pick #30065 for 3.6) (#30216) (@argo-cd-cherry-pick-bot[bot])
* 145a4a3c026665f04f78f4cfc9674e7194fbe93d: chore(deps): update dependency helm/helm to v4.3.1 (release-3.6) (#30211) (@argoproj-renovate[bot])
* f91a95c6c80e483d3c80e5a3ccba0de80e8eafdd: chore(deps): update dependency kubernetes-sigs/kustomize to v5.8.3 (release-3.6) (#30097) (@argoproj-renovate[bot])
* 45a914fa15b75d71e543e7c59557d39f48549ee6: chore(deps): update group golang (master) (cherry-pick #30090 for 3.6) (#30130) (@argo-cd-cherry-pick-bot[bot])
### Other work
* 996e98bb1b37b6b1bee34254020b569a79f8918b: chore: bump version to 3.6.0-rc3 on release-3.6 branch (#30219) (@github-actions[bot])
* 64ca73ea50398c9994ff3403b8b3b762bef49718: chore: remove dompurify (cherry-pick #30181 for 3.6) (#30183) (@argo-cd-cherry-pick-bot[bot])

**Full Changelog**: https://github.com/argoproj/argo-cd/compare/v3.6.0-rc2...v3.6.0-rc3

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" width="25%" ></a>

---

> **Source** [argoproj/argo-cd](https://github.com/argoproj/argo-cd) · `v3.6.0-rc3` · 2026-10-15 · [upstream release](https://github.com/argoproj/argo-cd/releases/tag/v3.6.0-rc3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
