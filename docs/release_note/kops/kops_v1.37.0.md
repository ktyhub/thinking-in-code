---
title: "kops v1.37.0"
project: "kops"
repo: "kubernetes/kops"
tag: "v1.37.0"
published: "2026-11-10"
type: "minor"
lang: "en"
summary: "See the full kOps 1.37 release notes for details, including breaking changes and deprecations."
---

# kops v1.37.0

See the full [kOps 1.37 release notes](https://kops.sigs.k8s.io/releases/1.37-notes/) for details, including breaking changes and deprecations.

## Highlights

* **Kubernetes 1.37 support**, with etcd 3.7.3 as the default for Kubernetes 1.37 clusters
* **Private asset repositories in cloud object storage**: `s3://`, `gs://`, and `azureblob://` URLs for `KOPS_BASE_URL` and `spec.assets.fileRepository`, with nodes authenticating through their instance identity
* **Smaller and more resilient node bootstrap**: the nodeup download drops from about 120 MB to under 10 MB, through a smaller binary and xz compression, and bootstrap retries failed tasks
* **Container runtime**: containerd 2.3.6 and runc 1.5.1 by default, with containerd configuration version 4; containerd versions older than 2.1.0 are no longer supported
* **Karpenter expansion**: Karpenter v1.15.1, kOps-managed interruption handling (SQS queue and EventBridge rules), root volume settings in `EC2NodeClass`, `instanceRequirements` support, and mixed GPU and non-GPU instance groups
* **Narrower AWS IAM permissions** for the instance roles (Route 53, KMS, EC2, SQS), and no inline policies for roles that need no permissions
* **etcd-manager changes**: bundled etcd images mounted as image volumes, and support for custom etcd versions from a user-supplied image on new clusters
* **Networking**: Calico v3.32.3 with the move to `ClusterNetworkPolicy`, network policy support for AWS VPC CNI, kube-router v2.12.0 with an experimental nftables network policy backend, and kindnet v1.0.3
* **Azure**: bootstrap requests authenticated with signed instance metadata, `kops rolling-update cluster` detection of outdated VMs, and two cloud-controller-manager replicas on highly available control planes
* **Akamai (Linode)**: the experimental provider now manages SSH keys, networks, subnets, instances, and block-storage volumes
* **Component updates**: etcd-manager v3.0.20261022 with etcd 3.5.35/3.6.16/3.7.3, Cilium v1.18.16, AWS VPC CNI v1.23.2, CoreDNS v1.15.0, AWS Load Balancer Controller v3.6.2, cert-manager v1.21.3, cluster-autoscaler v1.37.0
* **Removed**: support for Kubernetes 1.31, gossip DNS (and `protokube`), AWS Classic Load Balancers for the API, and Kopeio networking. Migrate with kOps 1.36 before the upgrade

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
* docs: update 1.36 release notes by @hakman in https://github.com/kubernetes/kops/pull/18592
* fix: retry listing cloud resources in `kops delete cluster` by @hakman in https://github.com/kubernetes/kops/pull/18595
* hack: parallelize GitHub release promotion and add checksum validation by @hakman in https://github.com/kubernetes/kops/pull/18594
* feat(linode): Refactor VPC model into broader Network model, and add subnet task by @moshevayner in https://github.com/kubernetes/kops/pull/18590
* chore: Remove support for Kubernetes 1.31 by @hakman in https://github.com/kubernetes/kops/pull/18598
* docs: update 1.36 release notes post-release by @hakman in https://github.com/kubernetes/kops/pull/18599
* nodeup: don't mutate the cluster spec when clearing authenticator config by @hakman in https://github.com/kubernetes/kops/pull/18600
* azure: allow kindnet pod CIDR to reach the kube-apiserver by @hakman in https://github.com/kubernetes/kops/pull/18604
* Replace gsutil with gcloud storage by @hakman in https://github.com/kubernetes/kops/pull/18609
* build(deps): bump actions/setup-go from 6.5.0 to 7.0.0 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18611
* Adding suitable control plane machine for gce by @YahiaBadr in https://github.com/kubernetes/kops/pull/18612
* Allow specifying number of nodes that can be unready during validation by @Jefftree in https://github.com/kubernetes/kops/pull/18614
* chore(networking): bump aws-cni to v1.22.3 by @moshevayner in https://github.com/kubernetes/kops/pull/18615
* Tolerate unready nodes during scalability test validation by @Jefftree in https://github.com/kubernetes/kops/pull/18616
* aws: remove support for Classic Load Balancer for the API by @hakman in https://github.com/kubernetes/kops/pull/18617
* chore(channels): bump k8s and Ubuntu AMI versions in alpha channel by @moshevayner in https://github.com/kubernetes/kops/pull/18621
* build(deps): bump actions/checkout from 7.0.0 to 7.0.1 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18626
* gce: open control-plane node-exporter port (tcp/9100) by @Jefftree in https://github.com/kubernetes/kops/pull/18620
* aws: add option for IP-based node names by @hakman in https://github.com/kubernetes/kops/pull/18632
* aws: allow shared subnets to omit the zone by @hakman in https://github.com/kubernetes/kops/pull/18630
* hetzner: Ignore WellKnownServices when comparing load balancers by @krillerdk in https://github.com/kubernetes/kops/pull/18631
* Enable nri mounting on kindnet in kops by @michaelasp in https://github.com/kubernetes/kops/pull/18635
* azure: support terraform provider azurerm v5 by @hakman in https://github.com/kubernetes/kops/pull/18636
* Update hcloud-go/v2 to latest version (v2.47.0) by @krillerdk in https://github.com/kubernetes/kops/pull/18638
* gce: download nodeup from private GCS buckets with curl by @hakman in https://github.com/kubernetes/kops/pull/18623
* aws: do not set the primary network interface to "Unmanaged=yes" by @hakman in https://github.com/kubernetes/kops/pull/18642
* rolling-update: restore 5s delay between pod eviction retries by @hakman in https://github.com/kubernetes/kops/pull/18641
* Remove support for gossip DNS by @hakman in https://github.com/kubernetes/kops/pull/18601
* etcd-manager: compute kops-utils-cp image at use time by @hakman in https://github.com/kubernetes/kops/pull/18645
* chore(channels): Promote alpha to stable channel by @moshevayner in https://github.com/kubernetes/kops/pull/18647
* aws: Default to AWS CCM v1.36.1 for all k8s versions by @rifelpet in https://github.com/kubernetes/kops/pull/18649
* chore(networking): bump aws-cni to version 1.22.4 by @moshevayner in https://github.com/kubernetes/kops/pull/18648
* Remove gossip leftovers by @hakman in https://github.com/kubernetes/kops/pull/18650
* Remove the protokube binary by @hakman in https://github.com/kubernetes/kops/pull/18653
* docs: gossip removal in kOps 1.37 and migration guide by @hakman in https://github.com/kubernetes/kops/pull/18651
* Narrow instance cloud permissions to actual consumers by @hakman in https://github.com/kubernetes/kops/pull/18654
* Narrow instance describe permissions by @hakman in https://github.com/kubernetes/kops/pull/18656
* Clean up remaining gossip removal leftovers by @hakman in https://github.com/kubernetes/kops/pull/18658
* Adding dynamic channel labels by @cheftako in https://github.com/kubernetes/kops/pull/18640
* fix(channels): only treat known ready conditions as health signals by @argoyle in https://github.com/kubernetes/kops/pull/18657
* aws: download nodeup from private S3 buckets with curl by @hakman in https://github.com/kubernetes/kops/pull/18661
* scaletest: Align kops scalability configuration with kube-up for scheduler `QPS/BURST` by @ronaldngounou in https://github.com/kubernetes/kops/pull/18080
* azure: download nodeup from Blob Storage with curl by @hakman in https://github.com/kubernetes/kops/pull/18666
* Do not upload stale images. by @cheftako in https://github.com/kubernetes/kops/pull/18665
* scaletest: Align kops scalability configuration with kube-up for CCM `concurrentNodeSyncs` by @ronaldngounou in https://github.com/kubernetes/kops/pull/18082
* docs: remove seccomp feature gate by @eshaanm25 in https://github.com/kubernetes/kops/pull/17954
* Install CNI plugins bundle for chained Cilium by @rdebnath-x-ion in https://github.com/kubernetes/kops/pull/18589
* Validate Kubernetes feature gate input during cluster creation by @fallintoplace in https://github.com/kubernetes/kops/pull/18408
* Register completion func for kubernetes-feature-gates flag by @hakman in https://github.com/kubernetes/kops/pull/18667
* azure: detect VMs needing update from latestModelApplied by @hakman in https://github.com/kubernetes/kops/pull/18669
* aws: Generate EC2NodeClass block device mapping for root volume by @danports in https://github.com/kubernetes/kops/pull/18655
* iam: do not mutate Policy.Statement in AsJSON() by @hakman in https://github.com/kubernetes/kops/pull/18672
* tests/e2e: use gs:// base URL only for kops versions supporting it by @hakman in https://github.com/kubernetes/kops/pull/18670
* aws: Restrict KMS permissions to service-mediated calls by @hakman in https://github.com/kubernetes/kops/pull/18671
* Cap the kops-controller bootstrap retry backoff, and verify the e2e upgrade actually rolls by @rifelpet in https://github.com/kubernetes/kops/pull/18675
* kube-dns: use policy/v1 for PodDisruptionBudget by @hakman in https://github.com/kubernetes/kops/pull/18678
* coredns: Tighten PDB to maxUnavailable 33% and always allow unhealthy pod eviction by @hakman in https://github.com/kubernetes/kops/pull/18679
* tests/e2e: drop the deprecated KOPS_CONTROL_PLANE_SIZE fallback by @rifelpet in https://github.com/kubernetes/kops/pull/18682
* tests/e2e: honor KOPS_EXTRA_FLAGS in the karpenter scenario by @rifelpet in https://github.com/kubernetes/kops/pull/18681
* containerd: default to 2.3.4 / runc 1.4.3 by @hakman in https://github.com/kubernetes/kops/pull/18683
* Fix node bootstrap in IPv6-only clusters with --dns=none by @rifelpet in https://github.com/kubernetes/kops/pull/18684
* tests/e2e: resolve SSH keys the same way on every cloud by @rifelpet in https://github.com/kubernetes/kops/pull/18686
* tests/integration: remove stale privateweave fixtures by @hakman in https://github.com/kubernetes/kops/pull/18689
* feat(linode): Add Linode (Akamai) instance management capabilities by @moshevayner in https://github.com/kubernetes/kops/pull/18622
* Makefile: build with grpcnotrace to reduce binary size by @hakman in https://github.com/kubernetes/kops/pull/18687
* etcd-manager: remove kops-utils-cp and use image volumes on all supported Kubernetes versions by @hakman in https://github.com/kubernetes/kops/pull/18688
* upup/pkg/fi: use literal method names for task dispatch by @hakman in https://github.com/kubernetes/kops/pull/18690
* gce: open the etcd events metrics port in the node-to-master firewall by @Jefftree in https://github.com/kubernetes/kops/pull/18685
* refactor: Rename Linode references to Akamai (Linode) across the codebase by @moshevayner in https://github.com/kubernetes/kops/pull/18691
* chore(networking): bump aws-cni to version 1.23.0 by @moshevayner in https://github.com/kubernetes/kops/pull/18692
* iam: grant ec2:DescribeSecurityGroups for AWS VPC CNI by @hakman in https://github.com/kubernetes/kops/pull/18693
* refactor(linode): build SSH keys with instances by @moshevayner in https://github.com/kubernetes/kops/pull/18694
* fix(akamai): Fix Akamai (Linode) Instance tag filter function by @moshevayner in https://github.com/kubernetes/kops/pull/18696
* digitalocean: delete SSH keys when deleting a cluster by @rifelpet in https://github.com/kubernetes/kops/pull/18697
* aws: report the SSH user for Rocky Linux instances by @rifelpet in https://github.com/kubernetes/kops/pull/18698
* tests/e2e: determine the SSH user from the cluster when not configured by @rifelpet in https://github.com/kubernetes/kops/pull/18699
* feat(akamai): Add volume task and extend cloud interface & mock for volume mgmt by @moshevayner in https://github.com/kubernetes/kops/pull/18700
* Update Calico to v3.31.6 by @hakman in https://github.com/kubernetes/kops/pull/18701
* Update Cilium to v1.18.12 by @hakman in https://github.com/kubernetes/kops/pull/18702
* Upgrade kube-router to v2.11.0 by @hakman in https://github.com/kubernetes/kops/pull/18703
* Update Flannel to v0.28.9 by @hakman in https://github.com/kubernetes/kops/pull/18704
* Update default CNI plugins version to v1.7.1 / v1.8.0 / v1.9.1 by @hakman in https://github.com/kubernetes/kops/pull/18705
* Upgrade kube-router to v2.11.1 and add UseNFTablesForNetpol setting by @rifelpet in https://github.com/kubernetes/kops/pull/18708
* feat(akamai): manage etcd block storage volumes by @moshevayner in https://github.com/kubernetes/kops/pull/18709
* Update Go to 1.26.6 and bump golang.org/x modules by @hakman in https://github.com/kubernetes/kops/pull/18711
* Update linodego to latest master by @hakman in https://github.com/kubernetes/kops/pull/18710
* vfs: Download cloud storage assets via VFS by @hakman in https://github.com/kubernetes/kops/pull/18713
* vfs: switch GCS client to cloud.google.com/go/storage by @hakman in https://github.com/kubernetes/kops/pull/18714
* Update dependencies by @hakman in https://github.com/kubernetes/kops/pull/18715
* chore: replace util/pkg/maps and golang.org/x/exp/slices with stdlib by @hakman in https://github.com/kubernetes/kops/pull/18720
* Make nodeup resilient to task failures by @hakuna-matatah in https://github.com/kubernetes/kops/pull/18718
* nodeup: Replace go-toml with minimal TOML writer by @hakman in https://github.com/kubernetes/kops/pull/18721
* Fork text/template without method lookup to enable linker pruning by @hakman in https://github.com/kubernetes/kops/pull/18695
* nodeup: Apply `--dryrun` flag after flag.Parse() by @hakman in https://github.com/kubernetes/kops/pull/18722
* Pin scaleway-sdk-go to v1.0.0-beta.36 by @hakman in https://github.com/kubernetes/kops/pull/18723
* nodeup: install kernel-modules-extra on RHEL10-family nodes by @rifelpet in https://github.com/kubernetes/kops/pull/18724
* Disable kindnet DNS caching by default by @rifelpet in https://github.com/kubernetes/kops/pull/18727
* nodeup: order systemd-networkd restarts after package installs by @rifelpet in https://github.com/kubernetes/kops/pull/18725
* Fix flaky concurrent rolling-update tests by @rifelpet in https://github.com/kubernetes/kops/pull/18726
* containerd: declare config version 4 for containerd >= 2.3 by @hakman in https://github.com/kubernetes/kops/pull/18728
* dump: capture Calico BGP session state from each node by @rifelpet in https://github.com/kubernetes/kops/pull/18735
* nodeup: publish and prefer an xz-compressed binary by @hakman in https://github.com/kubernetes/kops/pull/18737
* chore(channels): bump k8s and ubuntu ami versions in alpha channel by @moshevayner in https://github.com/kubernetes/kops/pull/18738
* Avoid client-side throttle bootstrap node lookups by @hakuna-matatah in https://github.com/kubernetes/kops/pull/18742
* Remove support for Kopeio networking by @hakman in https://github.com/kubernetes/kops/pull/18706
* feat(akamai): add default network CIDR and test for Linode cloud provider by @moshevayner in https://github.com/kubernetes/kops/pull/18743
* feat(akamai): add Akamai (Linode) support to kOps controller configuration by @moshevayner in https://github.com/kubernetes/kops/pull/18744
* fix(akamai): normalize volume labels to comply with Akamai Cloud API's length and character restrictions by @moshevayner in https://github.com/kubernetes/kops/pull/18745
* chore(channels): promote alpha to stable by @hakman in https://github.com/kubernetes/kops/pull/18747
* Fix pin drift: code-generator, golangci-lint, ko, goimports, ginkgo, and nested modules by @rifelpet in https://github.com/kubernetes/kops/pull/18751
* test(e2e): deploy cert-manager via the certmanager.io addon by @hakman in https://github.com/kubernetes/kops/pull/18753
* Remove the orphaned digital-ocean e2e scenario by @rifelpet in https://github.com/kubernetes/kops/pull/18752
* Remove unused hack scripts and a duplicate hash generator line by @rifelpet in https://github.com/kubernetes/kops/pull/18750
* docs: refresh CLI examples and manifests for kOps 1.37 by @rifelpet in https://github.com/kubernetes/kops/pull/18754
* kube-router Daemonset Modernization by @aauren in https://github.com/kubernetes/kops/pull/18757
* fix: persist binariesLocation for AWS and GCE in v1alpha2 by @madhoshyagnik in https://github.com/kubernetes/kops/pull/18740
* Round trip Cluster and InstanceGroup across API versions by @rifelpet in https://github.com/kubernetes/kops/pull/18756
* aws: Generate NodePool requirements for instanceRequirements by @danports in https://github.com/kubernetes/kops/pull/18676
* gce: don't leave routes and LB firewalls behind on cluster deletion by @rifelpet in https://github.com/kubernetes/kops/pull/18760
* aws: validate Karpenter InstanceGroups early by @hakman in https://github.com/kubernetes/kops/pull/18761
* Release 1.37.0-beta.1 by @hakman in https://github.com/kubernetes/kops/pull/18762
* Automated cherry pick of #18764: assets: cache file hashes instead of nodeup assets
#18765: nodeup: make nodeup.xz the canonical release artifact by @hakman in https://github.com/kubernetes/kops/pull/18766
* Automated cherry pick of #18768: chore(deps): bump linodego to v2.6.0 by @hakman in https://github.com/kubernetes/kops/pull/18773
* Automated cherry pick of #18772: Update Go to 1.26.8 and k8s.io dependencies to v0.37.0 by @hakman in https://github.com/kubernetes/kops/pull/18774
* Automated cherry pick of #18780: fix(pki): drop legacy keyset aliases by @hakman in https://github.com/kubernetes/kops/pull/18781
* Automated cherry pick of #18777: Add experimental support for Amazon Linux 2027 by @rifelpet in https://github.com/kubernetes/kops/pull/18783
* Automated cherry pick of #18784: chore(networking): bump aws-cni to version 1.23.1 by @moshevayner in https://github.com/kubernetes/kops/pull/18785
* Automated cherry pick of #18788: chore(deps): update Go to 1.27.1 and golang.org/x modules by @hakman in https://github.com/kubernetes/kops/pull/18792
* Automated cherry pick of #18789: fix: discover NLB IPs with Terraform by @hakman in https://github.com/kubernetes/kops/pull/18790
* Automated cherry pick of #18787: cert-manager: add feature gate options for webhook and cainjector by @hakman in https://github.com/kubernetes/kops/pull/18794
* Automated cherry pick of #18805: aws: update pod-identity-webhook to v0.6.17 by @hakman in https://github.com/kubernetes/kops/pull/18806
* Cherry pick of #18813: etcd-manager: bump etcd to latest patches (3.5.34, 3.6.15, 3.7.2) by @hakman in https://github.com/kubernetes/kops/pull/18814
* Cherry pick of #18808: containerd: default to 2.3.6 / runc 1.5.1 by @hakman in https://github.com/kubernetes/kops/pull/18812
* Automated cherry pick of #18819: containerd: set override_path for registry mirrors with a path by @hakman in https://github.com/kubernetes/kops/pull/18823
* Automated cherry pick of #18820: terraform: read shared VPC IPv6 CIDRs from associations by @hakman in https://github.com/kubernetes/kops/pull/18830
* Automated cherry pick of #18827: Move olemarkus and zetaab to emeritus approvers by @hakman in https://github.com/kubernetes/kops/pull/18847
* Automated cherry pick of #18853: Update Cilium to v1.18.14 by @hakman in https://github.com/kubernetes/kops/pull/18859
* Automated cherry pick of #18874: chore(networking): bump aws-cni to version 1.23.2 by @moshevayner in https://github.com/kubernetes/kops/pull/18875
* Automated cherry pick of #18868: OpenStack: Override default images for v1.37 by @jauru in https://github.com/kubernetes/kops/pull/18878
* Automated cherry pick of #18795: build kubetest2 binaries and publish them to the staging bucket
#18802: don't build kubetest2 when running as a periodic and switch to dl.k8s.io/ci
#18876: chore(deps): bump linodego to version 2.9.0 and update related dependencies
#18884: Upgrade google.golang.org/grpc to v1.84.0
#18883: Bump Go to 1.27.3 and update golang.org/x dependencies by @hakman in https://github.com/kubernetes/kops/pull/18889
* Automated cherry pick of #18887: fix(metal): disable aws-cli request checksums for mock S3 uploads by @hakman in https://github.com/kubernetes/kops/pull/18890
* Automated cherry pick of #18903: Upgrade kube-router to v2.11.2 by @rifelpet in https://github.com/kubernetes/kops/pull/18908
* Automated cherry pick of #18909: Upgrade Karpenter to v1.15.1 by @rifelpet in https://github.com/kubernetes/kops/pull/18911
* Automated cherry pick of #18899: openstack: Increase timeout for instances by @hakman in https://github.com/kubernetes/kops/pull/18912
* [release-1.37] Update etcd and etcd-manager by @hakman in https://github.com/kubernetes/kops/pull/18915
* Automated cherry pick of #18894: bump aws lb controller to v3.6 and allow the customization of the defaultloadbalancerscheme
#18919: Update AWS Load Balancer Controller to v3.6.2 by @rifelpet in https://github.com/kubernetes/kops/pull/18923
* Automated cherry pick of #18924: aws: update pod-identity-webhook to v0.6.19 by @hakman in https://github.com/kubernetes/kops/pull/18925
* Automated cherry pick of #18929: Update aws-iam-authenticator to v0.7.24 by @rifelpet in https://github.com/kubernetes/kops/pull/18930
* Automated cherry pick of #18941: feat(kubelet): add nodeStatusReportFrequency to the kubelet spec by @hakman in https://github.com/kubernetes/kops/pull/18945
* Automated cherry pick of #18955: fix(aws): only update ASG MaxInstanceLifetime when it changes by @hakman in https://github.com/kubernetes/kops/pull/18958
* Automated cherry pick of #18829: fix: reject partial Terraform updates
#18850: aws: Keep warm pool permissions when updating only the control plane
#18851: Fix Azure and Hetzner API load balancers when updating some instance groups
#18855: Keep the nvidia and gVisor addons when updating only some instance groups
#18952: aws: Keep Karpenter NodePools when updating only some instance groups by @hakman in https://github.com/kubernetes/kops/pull/18963
* Automated cherry pick of #18961: Upgrade kube-router to v2.12.0 by @rifelpet in https://github.com/kubernetes/kops/pull/18964
* Automated cherry pick of #18856: Keep the GCE API load balancer when updating only some instance groups by @hakman in https://github.com/kubernetes/kops/pull/18965
* Automated cherry pick of #18970: Update Cilium to v1.18.16 by @hakman in https://github.com/kubernetes/kops/pull/18971
* Automated cherry pick of #18969: Update Calico to v3.32.3 by @hakman in https://github.com/kubernetes/kops/pull/18977
* Automated cherry pick of #18769: tests: add minimal_gce_ipv6 integration test
#18980: Update coredns to v1.15.0 by @hakman in https://github.com/kubernetes/kops/pull/18981
* Automated cherry pick of #18817: Update kindnet to v1.0.2
#18984: Update kindnet to v1.0.3 by @hakman in https://github.com/kubernetes/kops/pull/18985
* Automated cherry pick of #18775: Update CCM and CSI versions
#18974: chore: Update CSI drivers to latest upstream releases
#18988: chore: Update CCMs to latest upstream releases by @hakman in https://github.com/kubernetes/kops/pull/18989
* Automated cherry pick of #18968: Update cluster-autoscaler to v1.37.0 by @hakman in https://github.com/kubernetes/kops/pull/18991
* Automated cherry pick of #18996: Update metrics-server to v0.9.1 by @hakman in https://github.com/kubernetes/kops/pull/18999
* Automated cherry pick of #18997: Update cert-manager to v1.21.3 by @hakman in https://github.com/kubernetes/kops/pull/19002
* Automated cherry pick of #19001: chore: Remove unused metadata-proxy addon by @hakman in https://github.com/kubernetes/kops/pull/19005
* Automated cherry pick of #18998: Update external-dns to v0.24.0 by @hakman in https://github.com/kubernetes/kops/pull/19006
* Automated cherry pick of #19008: Default to cluster-autoscaler v1.37.0 for k8s 1.34+ and v1.34.6 for older by @hakman in https://github.com/kubernetes/kops/pull/19009
* Automated cherry pick of #18857: Fix security groups when updating only some instance groups by @hakman in https://github.com/kubernetes/kops/pull/19015
* Automated cherry pick of #18860: Keep the cluster-autoscaler node groups when updating only some instance groups by @hakman in https://github.com/kubernetes/kops/pull/19016
* Automated cherry pick of #18607: aws: Provision SQS interruption queue for Karpenter by @hakman in https://github.com/kubernetes/kops/pull/19017
* Automated cherry pick of #19013: aws: Add enableNetworkPolicy option for Amazon VPC CNI by @hakman in https://github.com/kubernetes/kops/pull/19020
* Release 1.37.0 by @hakman in https://github.com/kubernetes/kops/pull/19024

## New Contributors
* @wkrysmann made their first contribution in https://github.com/kubernetes/kops/pull/18556
* @Qqkyu made their first contribution in https://github.com/kubernetes/kops/pull/18545
* @YahiaBadr made their first contribution in https://github.com/kubernetes/kops/pull/18612
* @krillerdk made their first contribution in https://github.com/kubernetes/kops/pull/18631
* @michaelasp made their first contribution in https://github.com/kubernetes/kops/pull/18635
* @argoyle made their first contribution in https://github.com/kubernetes/kops/pull/18657
* @eshaanm25 made their first contribution in https://github.com/kubernetes/kops/pull/17954
* @rdebnath-x-ion made their first contribution in https://github.com/kubernetes/kops/pull/18589
* @fallintoplace made their first contribution in https://github.com/kubernetes/kops/pull/18408
* @madhoshyagnik made their first contribution in https://github.com/kubernetes/kops/pull/18740

**Full Changelog**: https://github.com/kubernetes/kops/compare/v1.36.0-beta.1...v1.37.0

---

> **Source** [kubernetes/kops](https://github.com/kubernetes/kops) · `v1.37.0` · 2026-11-10 · [upstream release](https://github.com/kubernetes/kops/releases/tag/v1.37.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
