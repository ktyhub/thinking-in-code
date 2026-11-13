---
title: "kops v1.36.3"
project: "kops"
repo: "kubernetes/kops"
tag: "v1.36.3"
published: "2026-11-10"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/kubernetes/kops/compare/v1.36.2...v1.36.3"
---

# kops v1.36.3

## What's Changed
* Automated cherry pick of #18711: Update Go to 1.26.6 and bump golang.org/x modules by @hakman in https://github.com/kubernetes/kops/pull/18712
* Automated cherry pick of #18727: Disable kindnet DNS caching by default by @rifelpet in https://github.com/kubernetes/kops/pull/18729
* Automated cherry pick of #18724: nodeup: install kernel-modules-extra on RHEL10-family nodes by @rifelpet in https://github.com/kubernetes/kops/pull/18733
* Automated cherry pick of #18701: Update Calico to v3.31.6 by @rifelpet in https://github.com/kubernetes/kops/pull/18758
* Automated cherry pick of #18780: fix(pki): drop legacy keyset aliases by @hakman in https://github.com/kubernetes/kops/pull/18782
* Manual cherry pick of #18788: chore(deps): update Go to 1.27.1 and golang.org/x modules by @hakman in https://github.com/kubernetes/kops/pull/18793
* Automated cherry pick of #18789: fix: discover NLB IPs with Terraform by @hakman in https://github.com/kubernetes/kops/pull/18791
* Automated cherry pick of #18819: containerd: set override_path for registry mirrors with a path by @hakman in https://github.com/kubernetes/kops/pull/18824
* Automated cherry pick of #18827: Move olemarkus and zetaab to emeritus approvers by @hakman in https://github.com/kubernetes/kops/pull/18848
* build: bump Go to 1.27.3 and update golang.org/x dependencies by @hakman in https://github.com/kubernetes/kops/pull/18891
* Automated cherry pick of #18899: openstack: Increase timeout for instances by @hakman in https://github.com/kubernetes/kops/pull/18913
* [release-1.36] Update etcd and etcd-manager by @hakman in https://github.com/kubernetes/kops/pull/18916
* Automated cherry pick of #18579: aws: Add metrics port 9999 to pod-identity-webhook Service
#18805: aws: update pod-identity-webhook to v0.6.17
#18924: aws: update pod-identity-webhook to v0.6.19 by @hakman in https://github.com/kubernetes/kops/pull/18926
* Automated cherry pick of #18887: fix(metal): disable aws-cli request checksums for mock S3 uploads
#18941: feat(kubelet): add nodeStatusReportFrequency to the kubelet spec by @hakman in https://github.com/kubernetes/kops/pull/18947
* Manual cherry pick: tests: derive the expected integration test files from the test data by @hakman in https://github.com/kubernetes/kops/pull/18957
* Automated cherry pick of #18955: fix(aws): only update ASG MaxInstanceLifetime when it changes by @hakman in https://github.com/kubernetes/kops/pull/18959
* Manual cherry pick: test: name the kOps version of the integration tests by @hakman in https://github.com/kubernetes/kops/pull/18960
* Automated cherry pick of #18829: fix: reject partial Terraform updates
#18850: aws: Keep warm pool permissions when updating only the control plane
#18851: Fix Azure and Hetzner API load balancers when updating some instance groups
#18855: Keep the nvidia and gVisor addons when updating only some instance groups
#18952: aws: Keep Karpenter NodePools when updating only some instance groups by @hakman in https://github.com/kubernetes/kops/pull/18962
* Automated cherry pick of #18856: Keep the GCE API load balancer when updating only some instance groups by @hakman in https://github.com/kubernetes/kops/pull/18966
* Automated cherry pick of #18970: Update Cilium to v1.18.16 by @hakman in https://github.com/kubernetes/kops/pull/18972
* Automated cherry pick of #18969: Update Calico to v3.32.3 by @hakman in https://github.com/kubernetes/kops/pull/18978
* Automated cherry pick of #18679: coredns: Tighten PDB to maxUnavailable 33% and always allow unhealthy pod eviction
#18980: Update coredns to v1.15.0 by @hakman in https://github.com/kubernetes/kops/pull/18982
* Automated cherry pick of #18635: Enable nri mounting on kindnet in kops
#18817: Update kindnet to v1.0.2
#18984: Update kindnet to v1.0.3 by @hakman in https://github.com/kubernetes/kops/pull/18986
* Automated cherry pick of #18775: Update CCM and CSI versions
#18974: chore: Update CSI drivers to latest upstream releases
#18988: chore: Update CCMs to latest upstream releases by @hakman in https://github.com/kubernetes/kops/pull/18990
* Automated cherry pick of #18894: bump aws lb controller to v3.6 and allow the customization of the defaultloadbalancerscheme
#18919: Update AWS Load Balancer Controller to v3.6.2 by @hakman in https://github.com/kubernetes/kops/pull/18994
* Automated cherry pick of #18968: Update cluster-autoscaler to v1.37.0 by @hakman in https://github.com/kubernetes/kops/pull/18992
* Automated cherry pick of #18929: Update aws-iam-authenticator to v0.7.24 by @hakman in https://github.com/kubernetes/kops/pull/18993
* Manual cherry pick: Upgrade Karpenter to v1.15.1 by @hakman in https://github.com/kubernetes/kops/pull/18995
* Automated cherry pick of #18996: Update metrics-server to v0.9.1 by @hakman in https://github.com/kubernetes/kops/pull/19000
* Automated cherry pick of #18997: Update cert-manager to v1.21.3 by @hakman in https://github.com/kubernetes/kops/pull/19003
* Automated cherry pick of #19001: chore: Remove unused metadata-proxy addon by @hakman in https://github.com/kubernetes/kops/pull/19004
* Automated cherry pick of #18998: Update external-dns to v0.24.0 by @hakman in https://github.com/kubernetes/kops/pull/19007
* Automated cherry pick of #19008: Default to cluster-autoscaler v1.37.0 for k8s 1.34+ and v1.34.6 for older by @hakman in https://github.com/kubernetes/kops/pull/19010
* Manual cherry pick: Switching from comparison on Role to helper by @hakman in https://github.com/kubernetes/kops/pull/19014
* Automated cherry pick of #18857: Fix security groups when updating only some instance groups by @hakman in https://github.com/kubernetes/kops/pull/19018
* Automated cherry pick of #18860: Keep the cluster-autoscaler node groups when updating only some instance groups by @hakman in https://github.com/kubernetes/kops/pull/19019
* Release 1.36.3 by @hakman in https://github.com/kubernetes/kops/pull/19023


**Full Changelog**: https://github.com/kubernetes/kops/compare/v1.36.2...v1.36.3

---

> **Source** [kubernetes/kops](https://github.com/kubernetes/kops) · `v1.36.3` · 2026-11-10 · [upstream release](https://github.com/kubernetes/kops/releases/tag/v1.36.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
