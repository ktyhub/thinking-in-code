---
title: "kops v1.37.0-beta.1"
project: "kops"
repo: "kubernetes/kops"
tag: "v1.37.0-beta.1"
published: "2026-08-29"
type: "pre"
lang: "en"
summary: "See the full kOps 1.37 release notes for details, including breaking changes and deprecations."
---

# kops v1.37.0-beta.1

See the full [kOps 1.37 release notes](https://kops.sigs.k8s.io/releases/1.37-notes/) for details, including breaking changes and deprecations.

## What's Changed
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

## New Contributors
* @YahiaBadr made their first contribution in https://github.com/kubernetes/kops/pull/18612
* @krillerdk made their first contribution in https://github.com/kubernetes/kops/pull/18631
* @michaelasp made their first contribution in https://github.com/kubernetes/kops/pull/18635
* @argoyle made their first contribution in https://github.com/kubernetes/kops/pull/18657
* @eshaanm25 made their first contribution in https://github.com/kubernetes/kops/pull/17954
* @rdebnath-x-ion made their first contribution in https://github.com/kubernetes/kops/pull/18589
* @fallintoplace made their first contribution in https://github.com/kubernetes/kops/pull/18408
* @madhoshyagnik made their first contribution in https://github.com/kubernetes/kops/pull/18740

**Full Changelog**: https://github.com/kubernetes/kops/compare/v1.37.0-alpha.1...v1.37.0-beta.1

---

> **Source** [kubernetes/kops](https://github.com/kubernetes/kops) · `v1.37.0-beta.1` · 2026-08-29 · [upstream release](https://github.com/kubernetes/kops/releases/tag/v1.37.0-beta.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
