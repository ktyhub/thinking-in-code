---
title: "kops v1.34.3"
project: "kops"
repo: "kubernetes/kops"
tag: "v1.34.3"
published: "2026-05-27"
type: "patch"
lang: "en"
summary: "Automated cherry pick of #17740: Fix HasHighlyAvailableControlPlane to use AllInstanceGroups · Automated cherry pick of #18114: Pin upload-artifacts GHA to commit sha"
---

# kops v1.34.3

## What's Changed
* Automated cherry pick of #17740: Fix HasHighlyAvailableControlPlane to use AllInstanceGroups by @hakman in https://github.com/kubernetes/kops/pull/18118
* Automated cherry pick of #18114: Pin upload-artifacts GHA to commit sha by @rifelpet in https://github.com/kubernetes/kops/pull/18209
* Automated cherry pick of #18173: Update Golang to 1.25.9 by @hakman in https://github.com/kubernetes/kops/pull/18206
* Automated cherry pick of #17877: truncate very long sqs queue names
#17885: fix truncate long sqs by @hakman in https://github.com/kubernetes/kops/pull/18216
* Automated cherry pick of #18110: Update Cluster Autoscaler to 1.35.0 by @hakman in https://github.com/kubernetes/kops/pull/18218
* Automated cherry pick of #18237: cilium: require k8s-connectivity in liveness probe by @hakman in https://github.com/kubernetes/kops/pull/18243
* aws: bypass LBC mservice webhook for kube-system by @hakman in https://github.com/kubernetes/kops/pull/18249
* Automated cherry pick of #18251: aws: skip node S3 permissions when kops-controller serves node config by @hakman in https://github.com/kubernetes/kops/pull/18254
* Automated cherry pick of #18268: Cherrypick VPC CNI fixes by @rifelpet in https://github.com/kubernetes/kops/pull/18269
* Automated cherry pick of #18285: cilium: allow setting arbitrary cilium-config entries by @hakman in https://github.com/kubernetes/kops/pull/18287
* Automated cherry pick of #18281: hetzner: Upgrade hcloud-cloud-controller-manager to v1.30.1 by @hakman in https://github.com/kubernetes/kops/pull/18284
* Automated cherry pick of #18298: dns-controller: make priorityClassName configurable by @hakman in https://github.com/kubernetes/kops/pull/18300
* Automated cherry pick of #18302: dns-controller: default Provider when ExternalDNS is partially set by @hakman in https://github.com/kubernetes/kops/pull/18304
* Automated cherry pick of #18307: gce: expose kops-controller on internal LB for gossip clusters by @hakman in https://github.com/kubernetes/kops/pull/18309
* Automated cherry pick of #18319: azure: list VMSS NICs in protokube gossip seed discovery by @hakman in https://github.com/kubernetes/kops/pull/18322
* Automated cherry pick of #18323: etcd-manager: upgrade to v3.0.20260512 by @hakman in https://github.com/kubernetes/kops/pull/18325
* etcd-manager: bump etcd to latest patches (3.5.30, 3.6.11) by @yuzhouliu9 in https://github.com/kubernetes/kops/pull/18332
* Automated cherry pick of #18375: cilium: add flags for bpf-lb-sock and bpf-lb-sock-hostns-only by @hakman in https://github.com/kubernetes/kops/pull/18377
* Automated cherry pick of #18379: kops-controller and nodeup bug fixes by @rifelpet in https://github.com/kubernetes/kops/pull/18381
* Automated cherry pick of #18384: Fix kops get assets when spec.dnsZone is a DNS name by @hakman in https://github.com/kubernetes/kops/pull/18387
* Automated cherry pick of #18144: Move johngmyers to emeritus by @hakman in https://github.com/kubernetes/kops/pull/18389
* Automated cherry pick of #18391: Validate instance group names in kops-controller by @rifelpet in https://github.com/kubernetes/kops/pull/18393
* Upgrade Go to 1.26.3 for release-1.34 by @hakman in https://github.com/kubernetes/kops/pull/18397
* Update dependencies for release-1.34 by @hakman in https://github.com/kubernetes/kops/pull/18400
* Automated cherry pick of #18401: gomod: tidy and verify all modules by @hakman in https://github.com/kubernetes/kops/pull/18405
* Release 1.34.3 by @hakman in https://github.com/kubernetes/kops/pull/18412


**Full Changelog**: https://github.com/kubernetes/kops/compare/v1.34.2...v1.34.3

---

> **Source** [kubernetes/kops](https://github.com/kubernetes/kops) · `v1.34.3` · 2026-05-27 · [upstream release](https://github.com/kubernetes/kops/releases/tag/v1.34.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
