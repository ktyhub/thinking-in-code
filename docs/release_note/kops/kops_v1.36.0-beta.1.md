---
title: "kops v1.36.0-beta.1"
project: "kops"
repo: "kubernetes/kops"
tag: "v1.36.0-beta.1"
published: "2026-06-12"
type: "pre"
lang: "en"
summary: "Full Changelog: https://github.com/kubernetes/kops/compare/v1.36.0-alpha.1...v1.36.0-beta.1"
---

# kops v1.36.0-beta.1

## What's Changed
* scaletest: decouple client HTTP traffic for etcd events by @Jefftree in https://github.com/kubernetes/kops/pull/18415
* Release notes for 1.36 (alpha) by @hakman in https://github.com/kubernetes/kops/pull/18414
* chore: Add hashes for additional May releases by @hakman in https://github.com/kubernetes/kops/pull/18418
* Add logs at v2 level to ensure we have slow pods data in logs by @hakuna-matatah in https://github.com/kubernetes/kops/pull/18420
* chore: upgrade containerd to v2.3.1 by @hakman in https://github.com/kubernetes/kops/pull/18422
* Upgrade kube-router to v2.10.0 by @rifelpet in https://github.com/kubernetes/kops/pull/18421
* aws: pin LBC selectors to fix in-place upgrades by @hakman in https://github.com/kubernetes/kops/pull/18426
* cert-manager: upgrade to v1.19.5 and set AWS_REGION for Route53 dns-01 by @hakman in https://github.com/kubernetes/kops/pull/18428
* etcd: add ListenClientHTTPURLs field to EtcdManagerSpec by @Jefftree in https://github.com/kubernetes/kops/pull/18416
* Default omitted authorization to RBAC instead of AlwaysAllow by @hakman in https://github.com/kubernetes/kops/pull/18431
* cilium: allow disabling masquerade in ENI IPAM mode by @hakman in https://github.com/kubernetes/kops/pull/18432
* channels: surface addon apply failures via a readiness probe by @hakman in https://github.com/kubernetes/kops/pull/18433
* etcd-manager: upgrade etcd-manager and etcd to latest patches  by @hakman in https://github.com/kubernetes/kops/pull/18436
* chore: downgrade containerd to v2.2.4 by @hakman in https://github.com/kubernetes/kops/pull/18447
* test: avoid kubeconfig access in golden tests by @hakman in https://github.com/kubernetes/kops/pull/18448
* scaletest: Build only linux/amd64 in kubernetes scalability presubmits by @Jefftree in https://github.com/kubernetes/kops/pull/18446
* scaletest: Allow feature gates to be set in scalability tests by @Jefftree in https://github.com/kubernetes/kops/pull/18449
* feat: add gVisor RuntimeClass support for containerd by @ameukam in https://github.com/kubernetes/kops/pull/18406
* build(deps): bump actions/checkout from 6.0.2 to 6.0.3 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18451
* Calico: add NFTablesMode setting by @rifelpet in https://github.com/kubernetes/kops/pull/18452
* etcd-manager: switch to go-runner-based distroless image by @hakman in https://github.com/kubernetes/kops/pull/18450
* kube-proxy: assert buildPod command in unit test by @hakman in https://github.com/kubernetes/kops/pull/18455
* gVisor: add HasGVisor() helper function by @hakman in https://github.com/kubernetes/kops/pull/18456
* dump: add --node-dump-timeout flag for per-node dump timeout by @Jefftree in https://github.com/kubernetes/kops/pull/18443
* scaltest: Default node dump timeout to 5m in scalability run-test.sh by @Jefftree in https://github.com/kubernetes/kops/pull/18457
* Release 1.36.0-beta.1 by @hakman in https://github.com/kubernetes/kops/pull/18464


**Full Changelog**: https://github.com/kubernetes/kops/compare/v1.36.0-alpha.1...v1.36.0-beta.1

---

> **Source** [kubernetes/kops](https://github.com/kubernetes/kops) · `v1.36.0-beta.1` · 2026-06-12 · [upstream release](https://github.com/kubernetes/kops/releases/tag/v1.36.0-beta.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
