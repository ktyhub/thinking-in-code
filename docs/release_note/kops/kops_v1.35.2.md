---
title: "kops v1.35.2"
project: "kops"
repo: "kubernetes/kops"
tag: "v1.35.2"
published: "2026-07-15"
type: "patch"
lang: "en"
summary: "Automated cherry pick of #18428: cert-manager: upgrade to v1.19.5 and set AWS_REGION for Route53 dns-01 · Cherry pick of #18436: upgrade etcd-manager and etcd to latest patches"
---

# kops v1.35.2

## What's Changed
* Automated cherry pick of #18428: cert-manager: upgrade to v1.19.5 and set AWS_REGION for Route53 dns-01 by @hakman in https://github.com/kubernetes/kops/pull/18429
* Cherry pick of #18436: upgrade etcd-manager and etcd to latest patches by @hakman in https://github.com/kubernetes/kops/pull/18437
* Automated cherry pick of #17968: Enable nf_conntrack kernel module on Rocky 9
#18179: Load nf_tables module and install iptables-nft on RHEL10+ by @rifelpet in https://github.com/kubernetes/kops/pull/18444
* backport: Update Cluster Autoscaler RBAC by @hakman in https://github.com/kubernetes/kops/pull/18445
* Automated cherry pick of #18452: Calico: add NFTablesMode setting by @rifelpet in https://github.com/kubernetes/kops/pull/18454
* cilium: mount the host's /etc/hosts on gossip clusters by @hakman in https://github.com/kubernetes/kops/pull/18465
* Automated cherry pick of #18484: gce: emit kops.k8s.io/instancegroup node label by @rifelpet in https://github.com/kubernetes/kops/pull/18489
* Automated cherry pick of #18478: nodeup: load ip_set module and disable firewalld on RHEL10 by @rifelpet in https://github.com/kubernetes/kops/pull/18494
* Automated cherry pick of #18498: Remove namespace from DO ClusterRole by @rifelpet in https://github.com/kubernetes/kops/pull/18500
* Automated cherry pick of #18546: Update Go to 1.26.5 and bump golang.org/x modules by @hakman in https://github.com/kubernetes/kops/pull/18548
* Automated cherry pick of #18450: etcd-manager: switch to go-runner-based distroless image by @hakman in https://github.com/kubernetes/kops/pull/18555
* Cherry pick of #18560: etcd-manager: upgrade to v3.0.20260707 by @hakman in https://github.com/kubernetes/kops/pull/18562
* Automated cherry pick of #18556: feat(api): add storageInitializationTimeout to KubeAPIServerConfig by @hakman in https://github.com/kubernetes/kops/pull/18559
* Cherry pick of #18549: Replace fi.PtrTo with new() builtin by @hakman in https://github.com/kubernetes/kops/pull/18550
* Release 1.35.2 by @hakman in https://github.com/kubernetes/kops/pull/18593


**Full Changelog**: https://github.com/kubernetes/kops/compare/v1.35.1...v1.35.2

---

> **Source** [kubernetes/kops](https://github.com/kubernetes/kops) · `v1.35.2` · 2026-07-15 · [upstream release](https://github.com/kubernetes/kops/releases/tag/v1.35.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
