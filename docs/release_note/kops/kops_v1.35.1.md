---
title: "kops v1.35.1"
project: "kops"
repo: "kubernetes/kops"
tag: "v1.35.1"
published: "2026-05-28"
type: "patch"
lang: "en"
summary: "Automated cherry pick of #17740: Fix HasHighlyAvailableControlPlane to use AllInstanceGroups · Automated cherry pick of #18113: Add excludedInstanceTypes to instanceRequirements"
---

# kops v1.35.1

## What's Changed
* Automated cherry pick of #17740: Fix HasHighlyAvailableControlPlane to use AllInstanceGroups by @hakman in https://github.com/kubernetes/kops/pull/18117
* Automated cherry pick of #18113: Add excludedInstanceTypes to instanceRequirements by @hakman in https://github.com/kubernetes/kops/pull/18119
* Automated cherry pick of #18123: Fix instanceRequirements memory assignment bug by @hakman in https://github.com/kubernetes/kops/pull/18124
* Automated cherry pick of #17999: aws: Bypass LBC webhook for cert-manager by @rifelpet in https://github.com/kubernetes/kops/pull/18125
* Automated cherry pick of #18126: Add --use-kubeconfig to kops reconcile cluster by @hakman in https://github.com/kubernetes/kops/pull/18127
* Automated cherry pick of #18128: vfs: Silence warnings when the S3 provider has no supported by @hakman in https://github.com/kubernetes/kops/pull/18130
* Automated cherry pick of #18114: Pin upload-artifacts GHA to commit sha by @rifelpet in https://github.com/kubernetes/kops/pull/18208
* Automated cherry pick of #18173: Update Golang to 1.25.9 by @hakman in https://github.com/kubernetes/kops/pull/18205
* Automated cherry pick of #18110: Update Cluster Autoscaler to 1.35.0 by @hakman in https://github.com/kubernetes/kops/pull/18217
* Automated cherry pick of #18237: cilium: require k8s-connectivity in liveness probe by @hakman in https://github.com/kubernetes/kops/pull/18242
* aws: bypass LBC mservice webhook for kube-system by @hakman in https://github.com/kubernetes/kops/pull/18248
* Automated cherry pick of #18251: aws: skip node S3 permissions when kops-controller serves node config by @hakman in https://github.com/kubernetes/kops/pull/18253
* Cherrypick VPC CNI fixes to 1.35 by @rifelpet in https://github.com/kubernetes/kops/pull/18268
* Cherrypick GCE resource dump fixes to 1.35 by @rifelpet in https://github.com/kubernetes/kops/pull/18282
* Automated cherry pick of #18285: cilium: allow setting arbitrary cilium-config entries by @hakman in https://github.com/kubernetes/kops/pull/18286
* Automated cherry pick of #18281: hetzner: Upgrade hcloud-cloud-controller-manager to v1.30.1 by @hakman in https://github.com/kubernetes/kops/pull/18283
* Automated cherry pick of #18298: dns-controller: make priorityClassName configurable by @hakman in https://github.com/kubernetes/kops/pull/18299
* Automated cherry pick of #18232: Initial support for Ubuntu 26.04 by @rifelpet in https://github.com/kubernetes/kops/pull/18306
* Automated cherry pick of #18302: dns-controller: default Provider when ExternalDNS is partially set by @hakman in https://github.com/kubernetes/kops/pull/18303
* Automated cherry pick of #18307: gce: expose kops-controller on internal LB for gossip clusters by @hakman in https://github.com/kubernetes/kops/pull/18308
* Automated cherry pick of #18260: azure: encode storage account in azureblob:// URLs by @hakman in https://github.com/kubernetes/kops/pull/18320
* Automated cherry pick of #18319: azure: list VMSS NICs in protokube gossip seed discovery by @hakman in https://github.com/kubernetes/kops/pull/18321
* Automated cherry pick of #18323: etcd-manager: upgrade to v3.0.20260512 by @hakman in https://github.com/kubernetes/kops/pull/18324
* Cherrypick GCE instance handling fixes to 1.35 by @rifelpet in https://github.com/kubernetes/kops/pull/18327
* etcd-manager: bump etcd to latest patches (3.5.30, 3.6.11) by @yuzhouliu9 in https://github.com/kubernetes/kops/pull/18333
* Automated cherry pick of #18375: cilium: add flags for bpf-lb-sock and bpf-lb-sock-hostns-only by @hakman in https://github.com/kubernetes/kops/pull/18376
* Automated cherry pick of #18379: kops-controller and nodeup bug fixes by @rifelpet in https://github.com/kubernetes/kops/pull/18380
* Automated cherry pick of #18384: Fix kops get assets when spec.dnsZone is a DNS name by @hakman in https://github.com/kubernetes/kops/pull/18386
* Automated cherry pick of #18144: Move johngmyers to emeritus by @hakman in https://github.com/kubernetes/kops/pull/18388
* Automated cherry pick of #18391: Validate instance group names in kops-controller by @rifelpet in https://github.com/kubernetes/kops/pull/18392
* Upgrade Go to 1.26.3 for release-1.35 by @hakman in https://github.com/kubernetes/kops/pull/18396
* Update dependencies for release-1.35 by @hakman in https://github.com/kubernetes/kops/pull/18399
* Automated cherry pick of #18401: gomod: tidy and verify all modules by @hakman in https://github.com/kubernetes/kops/pull/18404
* Automated cherry pick of #18403: build: use gcr.io/distroless/static as base image by @hakman in https://github.com/kubernetes/kops/pull/18417
* Automated cherry pick of #18418: chore: Add hashes for additional May releases by @hakman in https://github.com/kubernetes/kops/pull/18419
* Automated cherry pick of #18364: chore: upgrade containerd to v2.3.0
#18422: chore: upgrade containerd to v2.3.1 by @hakman in https://github.com/kubernetes/kops/pull/18423
* Release 1.35.1 by @hakman in https://github.com/kubernetes/kops/pull/18425


**Full Changelog**: https://github.com/kubernetes/kops/compare/v1.35.0...v1.35.1

---

> **Source** [kubernetes/kops](https://github.com/kubernetes/kops) · `v1.35.1` · 2026-05-28 · [upstream release](https://github.com/kubernetes/kops/releases/tag/v1.35.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
