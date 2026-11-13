---
title: "kops v1.37.0-alpha.1"
project: "kops"
repo: "kubernetes/kops"
tag: "v1.37.0-alpha.1"
published: "2026-07-15"
type: "pre"
lang: "en"
summary: "Full Changelog: https://github.com/kubernetes/kops/compare/v1.36.0-beta.1...v1.37.0-alpha.1"
---

# kops v1.37.0-alpha.1

## What's Changed
* Support etcd 3.7.0-rc.0 and allow overriding the etcd version in the scalability scenario by @Jefftree in https://github.com/kubernetes/kops/pull/18458
* Enable misspell in golangci-lint by @ameukam in https://github.com/kubernetes/kops/pull/17578
* e2e: Filter random AZ selection by instance type availability by @rifelpet in https://github.com/kubernetes/kops/pull/18463
* azure: Use IMDS attested metadata document for node identity by @hakman in https://github.com/kubernetes/kops/pull/18163
* gce: fix backend service ownership filtering during delete by @carterpewpew in https://github.com/kubernetes/kops/pull/18460
* aws: Reconcile target group health check changes on existing target groups by @hakman in https://github.com/kubernetes/kops/pull/18467
* gce: Reconcile HTTP health check changes on existing health checks by @hakman in https://github.com/kubernetes/kops/pull/18468
* Improve Google Storage Bucket support. by @cheftako in https://github.com/kubernetes/kops/pull/18466
* Enable gosec and gocritic by @ameukam in https://github.com/kubernetes/kops/pull/18470
* Add serathius as scalability test owner by @Jefftree in https://github.com/kubernetes/kops/pull/18475
* feat(linode): implement SSH key management and associated tasks by @moshevayner in https://github.com/kubernetes/kops/pull/18383
* Added support for APIServer using LB by @cheftako in https://github.com/kubernetes/kops/pull/18459
* chore(channels): bump k8s versions in alpha channel by @moshevayner in https://github.com/kubernetes/kops/pull/18477
* Upgrade Karpenter to v1.13.0  by @hakman in https://github.com/kubernetes/kops/pull/18479
* scaletest: Report experiment variant into scalability run metadata by @Jefftree in https://github.com/kubernetes/kops/pull/18476
* channels: Add Kubernetes 1.36.0 support by @hakman in https://github.com/kubernetes/kops/pull/18480
* gce: emit kops.k8s.io/instancegroup node label by @rifelpet in https://github.com/kubernetes/kops/pull/18484
* e2e: Skip ImageVolume tests on COS 121 by @rifelpet in https://github.com/kubernetes/kops/pull/18483
* Register Karpenter nodes with karpenter.sh/unregistered taint by @hakman in https://github.com/kubernetes/kops/pull/18486
* Add missing EC2 read permissions to Karpenter IAM policy by @hakman in https://github.com/kubernetes/kops/pull/18487
* scaletest: report experiment variant after kubetest2 runs by @Jefftree in https://github.com/kubernetes/kops/pull/18485
* nodeup: load ip_set module and disable firewalld on RHEL10 by @rifelpet in https://github.com/kubernetes/kops/pull/18478
* API only CLI by @cheftako in https://github.com/kubernetes/kops/pull/18482
* Fixing LB behavior when you have both APIServer and Control Plane. by @cheftako in https://github.com/kubernetes/kops/pull/18496
* Remove namespace from DO ClusterRole by @rifelpet in https://github.com/kubernetes/kops/pull/18498
* chore(channels): promote to stable, bump node images, update recommended kOps versions by @hakman in https://github.com/kubernetes/kops/pull/18501
* build(deps): bump actions/checkout from 6.0.3 to 7.0.0 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18505
* scaletest: bind etcd metrics to all interfaces by @Jefftree in https://github.com/kubernetes/kops/pull/18503
* e2e: test the PR's own channels, not master's by @hakman in https://github.com/kubernetes/kops/pull/18504
* tests/e2e: refine externalTrafficPolicy=Local and hostNetwork skips by @rifelpet in https://github.com/kubernetes/kops/pull/18509
* Allow setting missing slice elements from the command line by @hakman in https://github.com/kubernetes/kops/pull/18511
* Add managed Karpenter EC2NodeClass and NodePool by @hakman in https://github.com/kubernetes/kops/pull/18497
* tests/e2e: skip implement-NodePort ETP=Local test on more CNIs by @rifelpet in https://github.com/kubernetes/kops/pull/18515
* chore(channels): pin Azure noble image to a deployable version by @hakman in https://github.com/kubernetes/kops/pull/18516
* Switching from comparison on Role to helper. by @cheftako in https://github.com/kubernetes/kops/pull/18514
* tests/e2e: also skip implement-NodePort ETP=Local test on calico+GCE by @rifelpet in https://github.com/kubernetes/kops/pull/18517
* build(deps): bump actions/setup-go from 6.4.0 to 6.5.0 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18518
* Make cloud-controller-manager pods tolerate all taints by @rifelpet in https://github.com/kubernetes/kops/pull/18510
* Add an experimental roles feature flag. by @cheftako in https://github.com/kubernetes/kops/pull/18519
* azure: Scope nodes-to-API NSG rules to the NAT gateway public IP by @hakman in https://github.com/kubernetes/kops/pull/18522
* fix: use JoinHostPost to tolerate IPv6 addresses by @justinsb in https://github.com/kubernetes/kops/pull/18526
* azure: Bump azuredisk-csi-driver to v1.34.4 by @hakman in https://github.com/kubernetes/kops/pull/18527
* chore: update syntax of CLAUDE.md by @justinsb in https://github.com/kubernetes/kops/pull/18532
* azure: Bump azure-cloud-controller-manager to v1.36.2 by @hakman in https://github.com/kubernetes/kops/pull/18529
* azure: Grant control-plane VMSS Contributor instead of Owner by @hakman in https://github.com/kubernetes/kops/pull/18533
* coredns: Honor node taints in hostname topologySpreadConstraint by @hakman in https://github.com/kubernetes/kops/pull/18535
* hetzner: fix Cluster Autoscaler node group membership by @hakman in https://github.com/kubernetes/kops/pull/18538
* Expose GCP project as PROJECT env for ClusterLoader2 on GCE by @rifelpet in https://github.com/kubernetes/kops/pull/18537
* tests/e2e: skip implement-NodePort ETP=Local test on calico+Azure by @hakman in https://github.com/kubernetes/kops/pull/18540
* Update cluster-autoscaler to v1.36.0 by @hakman in https://github.com/kubernetes/kops/pull/18541
* gce: register all zonal MIGs of a multi-zone instance group with cluster-autoscaler by @hakman in https://github.com/kubernetes/kops/pull/18543
* Update Go to 1.26.5 and bump golang.org/x modules by @hakman in https://github.com/kubernetes/kops/pull/18546
* pkg/assets: keep container registry clients out of runtime binaries by @hakman in https://github.com/kubernetes/kops/pull/18554
* clusterapi: fix build by making gen.go a library package by @hakman in https://github.com/kubernetes/kops/pull/18553
* Support running custom etcd versions by setting version and image by @hakman in https://github.com/kubernetes/kops/pull/18525
* Default to etcd 3.7.0 for Kubernetes 1.37+ by @Jefftree in https://github.com/kubernetes/kops/pull/18557
* feat(api): add storageInitializationTimeout to KubeAPIServerConfig by @wkrysmann in https://github.com/kubernetes/kops/pull/18556
* dump: grant SSH access to Karpenter nodes via EC2 Instance Connect by @hakman in https://github.com/kubernetes/kops/pull/18563
* etcd-manager: upgrade to v3.0.20260707 by @hakman in https://github.com/kubernetes/kops/pull/18560
* dns-controller: always apply the addon, empty when unused by @hakman in https://github.com/kubernetes/kops/pull/18567
* Replace fi.PtrTo with new() builtin by @hakman in https://github.com/kubernetes/kops/pull/18549
* Build with disable_grpc_modules tag to shrink binaries by @hakman in https://github.com/kubernetes/kops/pull/18552
* nodeup: reduce binary size by decoupling from cloudup awsup by @hakman in https://github.com/kubernetes/kops/pull/18571
* nodeup: remove the full Kubernetes API scheme and cloud providers from the binary by @hakman in https://github.com/kubernetes/kops/pull/18572
* scalability: expose events-etcd metrics endpoint by @Jefftree in https://github.com/kubernetes/kops/pull/18568
* vfs: use path/filepath in FSPath for Windows compatibility by @hakman in https://github.com/kubernetes/kops/pull/18576
* Add support for kube-apiserver --strict-transport-security-directives flag by @hakman in https://github.com/kubernetes/kops/pull/18577
* aws: Add metrics port 9999 to pod-identity-webhook Service by @hakman in https://github.com/kubernetes/kops/pull/18579
* docs: expand Delve debugging instructions in contributing guide by @hakman in https://github.com/kubernetes/kops/pull/18580
* kops create cluster: reject explicitly empty --project flag by @hakman in https://github.com/kubernetes/kops/pull/18575
* aws: Require https scheme for pre-signed STS URLs in V2 tokens by @hakman in https://github.com/kubernetes/kops/pull/18574
* aws: scope Karpenter controller IAM permissions by @hakman in https://github.com/kubernetes/kops/pull/18582
* gce: register SSH keys under the "ubuntu" user for Ubuntu images by @hakman in https://github.com/kubernetes/kops/pull/18581
* chore(deps): bump linodego to v2 by @moshevayner in https://github.com/kubernetes/kops/pull/18584
* gce: allow TCP metrics ports in GCE firewall by @Qqkyu in https://github.com/kubernetes/kops/pull/18545
* Release 1.37.0-alpha.1 by @hakman in https://github.com/kubernetes/kops/pull/18596

## New Contributors
* @carterpewpew made their first contribution in https://github.com/kubernetes/kops/pull/18460
* @cheftako made their first contribution in https://github.com/kubernetes/kops/pull/18466
* @wkrysmann made their first contribution in https://github.com/kubernetes/kops/pull/18556
* @Qqkyu made their first contribution in https://github.com/kubernetes/kops/pull/18545

**Full Changelog**: https://github.com/kubernetes/kops/compare/v1.36.0-beta.1...v1.37.0-alpha.1

---

> **Source** [kubernetes/kops](https://github.com/kubernetes/kops) · `v1.37.0-alpha.1` · 2026-07-15 · [upstream release](https://github.com/kubernetes/kops/releases/tag/v1.37.0-alpha.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
