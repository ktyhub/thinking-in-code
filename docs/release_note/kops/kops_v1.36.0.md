---
title: "kops v1.36.0"
project: "kops"
repo: "kubernetes/kops"
tag: "v1.36.0"
published: "2026-07-15"
type: "minor"
lang: "en"
summary: "See the full kOps 1.36 release notes for details, including breaking changes and deprecations."
---

# kops v1.36.0

See the full [kOps 1.36 release notes](https://kops.sigs.k8s.io/releases/1.36-notes/) for details, including breaking changes and deprecations.

## Highlights

* **Kubernetes 1.36 support** and completion of the move away from the in-tree cloud providers
* **Reworked addon management**: `kops-channels` now runs as a static pod on control-plane nodes; the standalone `channels` binary is no longer distributed
* **Hybrid bootstrap for gossip clusters**: workers bootstrap directly against the API load balancer, easing migration off gossip DNS, which is deprecated
* **Karpenter refresh**: Karpenter v1.13.0 with kOps-managed `EC2NodeClass` and `NodePool` objects per instance group
* **etcd-manager improvements**: recovery of members with replaced data disks, membership changes resilient to unreachable members, a distroless image, and faster single-member cluster startup
* **Expanded Azure support**: cloud-controller-manager, Azure Disk CSI driver, and experimental Terraform target
* **Hetzner Cluster Autoscaler support** and groundwork for Linode (Akamai) as a new cloud provider
* **Component updates**: containerd v2.2.4, etcd-manager v3.0.20260707 with etcd 3.5.31/3.6.12, AWS Load Balancer Controller v3.3.0, Cilium tunables, CoreDNS v1.14.2, cluster-autoscaler v1.36.0
* **Removed**: support for Kubernetes 1.30, etcd 3.4, Amazon Linux 2, Ubuntu 20.04, and Debian 10

## What's Changed
* Automated cherry pick of #18467: aws: Reconcile target group health check changes on existing target groups by @hakman in https://github.com/kubernetes/kops/pull/18469
* Automated cherry pick of #18484: gce: emit kops.k8s.io/instancegroup node label by @rifelpet in https://github.com/kubernetes/kops/pull/18488
* Automated cherry pick of #18478: nodeup: load ip_set module and disable firewalld on RHEL10 by @rifelpet in https://github.com/kubernetes/kops/pull/18492
* Automated cherry pick of #18498: Remove namespace from DO ClusterRole by @rifelpet in https://github.com/kubernetes/kops/pull/18499
* Automated cherry pick of #18511: Allow setting missing slice elements from the command line by @hakman in https://github.com/kubernetes/kops/pull/18512
* Automated cherry pick of ##18479: Upgrade Karpenter to v1.13.0 
##18486: Register Karpenter nodes with karpenter.sh/unregistered taint
##18487: Add missing EC2 read permissions to Karpenter IAM policy
##18497: Add managed Karpenter EC2NodeClass and NodePool by @hakman in https://github.com/kubernetes/kops/pull/18513
* Automated cherry pick of #18522: azure: Scope nodes-to-API NSG rules to the NAT gateway public IP by @hakman in https://github.com/kubernetes/kops/pull/18523
* Automated cherry pick of #18527: azure: Bump azuredisk-csi-driver to v1.34.4 by @hakman in https://github.com/kubernetes/kops/pull/18528
* Automated cherry pick of #18529: azure: Bump azure-cloud-controller-manager to v1.36.2 by @hakman in https://github.com/kubernetes/kops/pull/18531
* Automated cherry pick of #18533: azure: Grant control-plane VMSS Contributor instead of Owner by @hakman in https://github.com/kubernetes/kops/pull/18534
* Automated cherry pick of #18535: coredns: Honor node taints in hostname topologySpreadConstraint by @hakman in https://github.com/kubernetes/kops/pull/18536
* Automated cherry pick of #18538: hetzner: fix Cluster Autoscaler node group membership by @hakman in https://github.com/kubernetes/kops/pull/18539
* Automated cherry pick of #18541: Update cluster-autoscaler to v1.36.0 by @hakman in https://github.com/kubernetes/kops/pull/18542
* Automated cherry pick of #18543: gce: register all zonal MIGs of a multi-zone instance group with cluster-autoscaler by @hakman in https://github.com/kubernetes/kops/pull/18544
* Automated cherry pick of #18546: Update Go to 1.26.5 and bump golang.org/x modules by @hakman in https://github.com/kubernetes/kops/pull/18547
* Cherry pick of #18560: etcd-manager: upgrade to v3.0.20260707 by @hakman in https://github.com/kubernetes/kops/pull/18561
* Automated cherry pick of #18556: feat(api): add storageInitializationTimeout to KubeAPIServerConfig by @hakman in https://github.com/kubernetes/kops/pull/18558
* Cherry pick of #18549: Replace fi.PtrTo with new() builtin by @hakman in https://github.com/kubernetes/kops/pull/18551
* Automated cherry pick of #18567: dns-controller: always apply the addon, empty when unused by @hakman in https://github.com/kubernetes/kops/pull/18573
* Release 1.36.0 by @hakman in https://github.com/kubernetes/kops/pull/18591


**Full Changelog**: https://github.com/kubernetes/kops/compare/v1.36.0-beta.1...v1.36.0

---

> **Source** [kubernetes/kops](https://github.com/kubernetes/kops) · `v1.36.0` · 2026-07-15 · [upstream release](https://github.com/kubernetes/kops/releases/tag/v1.36.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
