---
title: "kops v1.36.0-alpha.1"
project: "kops"
repo: "kubernetes/kops"
tag: "v1.36.0-alpha.1"
published: "2026-05-27"
type: "pre"
lang: "en"
summary: "Full Changelog: https://github.com/kubernetes/kops/compare/v1.35.0-beta.1...v1.36.0-alpha.1"
---

# kops v1.36.0-alpha.1

## What's Changed
* Remove support for Amazon Linux 2 by @rifelpet in https://github.com/kubernetes/kops/pull/17898
* Update distribution matrix for Amazon Linux 2 by @rifelpet in https://github.com/kubernetes/kops/pull/17943
* metal: Unpin K8s version by @hakman in https://github.com/kubernetes/kops/pull/17944
* Create iproute2 symlink for kuberouter on older distros by @rifelpet in https://github.com/kubernetes/kops/pull/17945
* chore(channels): update alpha k8s versions with February releases by @moshevayner in https://github.com/kubernetes/kops/pull/17948
* versionbump: go 1.25.7 by @justinsb in https://github.com/kubernetes/kops/pull/17956
* Feature: pull user defined images for warm pool instances by @dezmodue in https://github.com/kubernetes/kops/pull/17861
* Fix creation of discovery and state store buckets by @rifelpet in https://github.com/kubernetes/kops/pull/17961
* Migrate more scenario scripts to --test=exec by @rifelpet in https://github.com/kubernetes/kops/pull/17962
* Migrate e2e template AMIs to SSM params by @rifelpet in https://github.com/kubernetes/kops/pull/17964
* LBC Scenario - Pass region to AWS CLI by @rifelpet in https://github.com/kubernetes/kops/pull/17965
* Set kubeconfig for LBC test suite by @rifelpet in https://github.com/kubernetes/kops/pull/17967
* Enable nf_conntrack kernel module on Rocky 9 by @rifelpet in https://github.com/kubernetes/kops/pull/17968
* Remove DISCOVERY_STORE handling by @rifelpet in https://github.com/kubernetes/kops/pull/17969
* kube-router: bump version v2.5.0 -> 2.7.1 by @aauren in https://github.com/kubernetes/kops/pull/17966
* chore: Add asset hashes for February 2026 releases by @hakman in https://github.com/kubernetes/kops/pull/17980
* Remove reference to unbound variable by @rifelpet in https://github.com/kubernetes/kops/pull/17985
* Use golang-based tool for AWS instances availability by @ameukam in https://github.com/kubernetes/kops/pull/17953
* drop cdn.dl.k8s.io as a mirror by @upodroid in https://github.com/kubernetes/kops/pull/17976
* drop storage.googleapis.com/k8s-artifacts-cni as a mirror by @hakman in https://github.com/kubernetes/kops/pull/17987
* tests/ai-conformance: don't panic if no zones for AWS by @justinsb in https://github.com/kubernetes/kops/pull/17994
* Scenario Fixes by @rifelpet in https://github.com/kubernetes/kops/pull/17997
* Use a deterministic bucket name in prow jobs by @rifelpet in https://github.com/kubernetes/kops/pull/17998
* Make region selection determistic from BUILD_ID by @rifelpet in https://github.com/kubernetes/kops/pull/18000
* Addon Scenario - Remove old feature flag by @rifelpet in https://github.com/kubernetes/kops/pull/17963
* aws: Bypass LBC webhook for cert-manager by @hakman in https://github.com/kubernetes/kops/pull/17999
* Bump actions/dependency-review-action from 4.8.2 to 4.8.3 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18002
* tests/ai-conformance: fix syntax for enabling gatewayAPI with cilium by @justinsb in https://github.com/kubernetes/kops/pull/17992
* tests/ai-conformance: fix syntax for enabling nvidia GPU in containerd by @justinsb in https://github.com/kubernetes/kops/pull/18001
* Consolidate support for ENI-based CNIs by @rifelpet in https://github.com/kubernetes/kops/pull/17940
* tests/ai-conformance: use nvidia GPU operator by @justinsb in https://github.com/kubernetes/kops/pull/18005
* tests/ai-conformance: create cluster with some non-GPU nodes by @justinsb in https://github.com/kubernetes/kops/pull/18006
* tests/ai-conformance: update test job for DRA v1 by @justinsb in https://github.com/kubernetes/kops/pull/18008
* tests/ai-conformance: use server-side-apply for KubeRay Operator by @justinsb in https://github.com/kubernetes/kops/pull/18007
* fix: avoid panic if subnet ID is nil by @justinsb in https://github.com/kubernetes/kops/pull/18010
* tests/ai-conformance: create first tests for AI Conformance by @justinsb in https://github.com/kubernetes/kops/pull/18009
* gce: don't request migration on instance types that don't support it by @justinsb in https://github.com/kubernetes/kops/pull/18004
* gce: Wait to delete InstanceManagers and InstanceTemplates by @Camila-B in https://github.com/kubernetes/kops/pull/18013
* Bump release tools for E2E tests by @ameukam in https://github.com/kubernetes/kops/pull/18017
* Add warning for non-production use in README by @ritazh in https://github.com/kubernetes/kops/pull/17952
* Keep skipping certain tests on older cilium versions by @rifelpet in https://github.com/kubernetes/kops/pull/18019
* chore: Add hashes for additional February releases by @hakman in https://github.com/kubernetes/kops/pull/18021
* chore: Bump alpha channels with additional February releases by @hakman in https://github.com/kubernetes/kops/pull/18020
* chore: Bump etcd-manager to v3.0.20260227 by @hakman in https://github.com/kubernetes/kops/pull/18026
* build(deps): bump actions/upload-artifact from 6 to 7 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18029
* build(deps): bump actions/setup-go from 6.2.0 to 6.3.0 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18030
* chore(channels): promote alpha to stable by @moshevayner in https://github.com/kubernetes/kops/pull/18033
* feat: Use wellknownports for etcd and add cilium etcd ports by @apeabody in https://github.com/kubernetes/kops/pull/18035
* tests/ai-conformance: Install prometheus for metrics by @ameukam in https://github.com/kubernetes/kops/pull/18018
* build(deps): bump actions/dependency-review-action from 4.8.3 to 4.9.0 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18042
* Fix node bootstrap challenge response hashing by @rifelpet in https://github.com/kubernetes/kops/pull/18043
* Add addons node to scalability tests by @serathius in https://github.com/kubernetes/kops/pull/18036
* test: Skip dumping not found nodes for GCE by @hakman in https://github.com/kubernetes/kops/pull/18049
* allow pods to reach metric ports running on control plane nodes when using gce alias ip by @upodroid in https://github.com/kubernetes/kops/pull/18052
* [aiconformance] Add test for gang scheduling with kueue by @justinsb in https://github.com/kubernetes/kops/pull/18053
* chore: Bump Go to v1.25.8 by @hakman in https://github.com/kubernetes/kops/pull/18058
* [aiconformance] Add tests for security / isolation by @justinsb in https://github.com/kubernetes/kops/pull/18055
* scaletest: Move Prometheus to addon nodes by @serathius in https://github.com/kubernetes/kops/pull/18048
* [aiconformance]: Add robust_controller test using KubeRay by @justinsb in https://github.com/kubernetes/kops/pull/18056
* scaletest: Use sleep instead of wait for large clusters by @serathius in https://github.com/kubernetes/kops/pull/18065
* [aiconformance]: Enable Cluster Autoscaler for GPU Nodes by @ameukam in https://github.com/kubernetes/kops/pull/18066
* scaletest: Increase scalability tests log verbosity to 3 by @serathius in https://github.com/kubernetes/kops/pull/18069
* [aiconformance]: Enable Metrics Server by @ameukam in https://github.com/kubernetes/kops/pull/18067
* fix: don't panic when dumping nodes if we didn't capture cloud resources by @justinsb in https://github.com/kubernetes/kops/pull/18072
* [aiconformance]: Validate networking/ai_inference requirements by @justinsb in https://github.com/kubernetes/kops/pull/18063
* [aiconformance]: Add accelerator metrics validator test by @justinsb in https://github.com/kubernetes/kops/pull/18064
* [aiconformance]: observability/ai_service_metrics by @justinsb in https://github.com/kubernetes/kops/pull/18071
* [aiconformance]: Add K8s wrapper for DaemonSet object by @ameukam in https://github.com/kubernetes/kops/pull/18073
* [aiconformance]: Add driver_runtime_management validator by @ameukam in https://github.com/kubernetes/kops/pull/18074
* [aiconformance]: unify output under tests/ directory by @justinsb in https://github.com/kubernetes/kops/pull/18076
* [aiconformance]: render markdown to HTML by @justinsb in https://github.com/kubernetes/kops/pull/18077
* scaletest: Align kops scalability configuration with kube-up for kube-apiserver `deleteCollectionsWorkers` and `MaxRequestInflight` by @ronaldngounou in https://github.com/kubernetes/kops/pull/18081
* [aiconformance]: Write conformance report to file by @justinsb in https://github.com/kubernetes/kops/pull/18084
* [aiconformance]: Unify how we write test artifacts by @justinsb in https://github.com/kubernetes/kops/pull/18087
* scaletest: Align kops scalability configuration with kube-up for kubeapisever `CompactionInterval` by @ronaldngounou in https://github.com/kubernetes/kops/pull/18086
* Refactor interface type check to more idiomatic syntax by @rramkumar1 in https://github.com/kubernetes/kops/pull/17951
* scaletest: Align kops scalability configuration with kube-up for kubelet kubeAPIQPS by @ronaldngounou in https://github.com/kubernetes/kops/pull/18085
* Move VFS acls framework closer to  VFS implementation code by @rramkumar1 in https://github.com/kubernetes/kops/pull/17949
* Fix existing VPCs/Subnets with IPv6 by @rlees85 in https://github.com/kubernetes/kops/pull/18089
* [aiconformance]: test for schedulingOrchestration pod autoscaling by @justinsb in https://github.com/kubernetes/kops/pull/18075
* Enable E2E external CSI testing on GCP by @rifelpet in https://github.com/kubernetes/kops/pull/18098
* [aiconformance] add test for schedulingOrchestration clusterAutoscaling by @justinsb in https://github.com/kubernetes/kops/pull/18100
* Replace cwd with go:embed for storage.testdriver manifests by @rifelpet in https://github.com/kubernetes/kops/pull/18102
* chore(channels): bump alpha channel k8s and ubuntu AMI versions by @moshevayner in https://github.com/kubernetes/kops/pull/18103
* [aiconformance]: set namespace explicitly for testdata by @ameukam in https://github.com/kubernetes/kops/pull/18101
* chore: Bump Google Cloud deps in kubetest by @hakman in https://github.com/kubernetes/kops/pull/18107
* [aiconformance] Explicity set the namespace for kubectl commands by @ameukam in https://github.com/kubernetes/kops/pull/18108
* Fix S3 DeleteBucket 301 redirect during teardown by @ameukam in https://github.com/kubernetes/kops/pull/18109
* Update Cluster Autoscaler to 1.35.0 by @ameukam in https://github.com/kubernetes/kops/pull/18110
* [aiconformance] add test for schedulingOrchestration clusterAutoscaling by @hakman in https://github.com/kubernetes/kops/pull/18112
* Pin upload-artifacts GHA to commit sha by @rifelpet in https://github.com/kubernetes/kops/pull/18114
* Add troubleshooting info for E2E jobs by @rifelpet in https://github.com/kubernetes/kops/pull/18116
* Fix HasHighlyAvailableControlPlane to use AllInstanceGroups by @pkubicsek-sb in https://github.com/kubernetes/kops/pull/17740
* Honor stderrthreshold when logtostderr is enabled by @pierluigilenoci in https://github.com/kubernetes/kops/pull/18115
* Add excludedInstanceTypes to instanceRequirements by @jim-barber-he in https://github.com/kubernetes/kops/pull/18113
* chore(channels): promote alpha to stable by @moshevayner in https://github.com/kubernetes/kops/pull/18122
* Fix instanceRequirements memory assignment bug by @jim-barber-he in https://github.com/kubernetes/kops/pull/18123
* Add --use-kubeconfig to kops reconcile cluster by @rifelpet in https://github.com/kubernetes/kops/pull/18126
* vfs: Silence warnings when the S3 provider has no supported checksum by @hakman in https://github.com/kubernetes/kops/pull/18128
* vfs: Pass VFS scheme to S3 client by @hakman in https://github.com/kubernetes/kops/pull/18129
* do: Upgrade CSI and enable E2E by @rifelpet in https://github.com/kubernetes/kops/pull/18131
* feat(vfs): add Linode (Akamai) object storage schema support by @moshevayner in https://github.com/kubernetes/kops/pull/18138
* aws: Add EnableOutOfServiceTaint field to NodeTerminationHandler by @rifelpet in https://github.com/kubernetes/kops/pull/18140
* test: Dump logs for upgrade-ab scenario when failing during validation by @hakman in https://github.com/kubernetes/kops/pull/18143
* azure: Add support for Azure Disk CSI Driver by @hakman in https://github.com/kubernetes/kops/pull/18141
* gce: support for role=apiserver by @rifelpet in https://github.com/kubernetes/kops/pull/18147
* Fix cilium-etcd on GCE by @rifelpet in https://github.com/kubernetes/kops/pull/18146
* gce: Fix instance group deletion by @rifelpet in https://github.com/kubernetes/kops/pull/18148
* Move johngmyers to emeritus by @johngmyers in https://github.com/kubernetes/kops/pull/18144
* test: Update verify-terraform to use v1.14.8 and support optional filter by @hakman in https://github.com/kubernetes/kops/pull/18150
* Add node-volume-type flag to create cluster command by @rifelpet in https://github.com/kubernetes/kops/pull/18145
* Add NodeLeaseDurationSeconds and EventRecordQPS API fields by @rifelpet in https://github.com/kubernetes/kops/pull/18153
* Add some clarification to KubeSchedulerConfiguration by @rifelpet in https://github.com/kubernetes/kops/pull/18151
* Add EnableHostFirewall field to CiliumNetworkingSpec by @rifelpet in https://github.com/kubernetes/kops/pull/18152
* azure: Use larger VM SKU by default in tests and update skips by @hakman in https://github.com/kubernetes/kops/pull/18154
* feat: Replace shipbot with gh-based script for promoting binaries by @hakman in https://github.com/kubernetes/kops/pull/18095
* azure: Add experimental Terraform support by @hakman in https://github.com/kubernetes/kops/pull/18149
* azure: Set provider ID when starting kubelet by @hakman in https://github.com/kubernetes/kops/pull/18155
* azure: Fix task dependencies during cluster update by @hakman in https://github.com/kubernetes/kops/pull/18156
* azure: Fix Terraform LoadBalancer task dependencies on PublicIP by @hakman in https://github.com/kubernetes/kops/pull/18157
* gce: Fix apiserver e2e template by @rifelpet in https://github.com/kubernetes/kops/pull/18158
* gce: Fix instance tags with role=apiserver by @rifelpet in https://github.com/kubernetes/kops/pull/18159
* build(deps): bump actions/setup-go from 6.3.0 to 6.4.0 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18161
* gce: Allow role=apiserver with dns=none by @rifelpet in https://github.com/kubernetes/kops/pull/18162
* gce: Add kops-controller to internal load balancer by @rifelpet in https://github.com/kubernetes/kops/pull/18169
* azure: Reduce flakiness of CSI e2e tests by @hakman in https://github.com/kubernetes/kops/pull/18168
* gce: Use SSL health check for kops-controller by @rifelpet in https://github.com/kubernetes/kops/pull/18171
* feat: Add optional `leases` etcd shard by @apeabody in https://github.com/kubernetes/kops/pull/18054
* Add --control-plane-volume-type flag to kops create cluster by @Camila-B in https://github.com/kubernetes/kops/pull/17955
* Revert "gce: Use SSL health check for kops-controller" by @hakman in https://github.com/kubernetes/kops/pull/18172
* Update Golang to 1.25.9 by @ameukam in https://github.com/kubernetes/kops/pull/18173
* Reapply "gce: Use SSL health check for kops-controller" by @rifelpet in https://github.com/kubernetes/kops/pull/18174
* test: Run update cluster without --yes first for E2E templates by @rifelpet in https://github.com/kubernetes/kops/pull/18175
* linode: add Linode (Akamai) node configuration and identity by @moshevayner in https://github.com/kubernetes/kops/pull/18166
* Load nf_tables module and install iptables-nft on RHEL10+ by @rifelpet in https://github.com/kubernetes/kops/pull/18179
* aws: Use HTTPS for kops-controller TG health check by @rifelpet in https://github.com/kubernetes/kops/pull/18178
* build(deps): bump actions/upload-artifact from 7.0.0 to 7.0.1 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18180
* chore: Make AssetBuilder concurrency-safe by @hakman in https://github.com/kubernetes/kops/pull/18181
* feat(cloud): add Linode (Akamai) cloud provider API registration by @moshevayner in https://github.com/kubernetes/kops/pull/18177
* azure: Use HTTPS health check for kops-controller by @hakman in https://github.com/kubernetes/kops/pull/18182
* azure: Fix possible nil pointer dereferences by @hakman in https://github.com/kubernetes/kops/pull/18184
* azure: Fix deletion ordering issues by @hakman in https://github.com/kubernetes/kops/pull/18185
* azure: Delete RoleAssignment after VMScaleSet during cluster deletion by @hakman in https://github.com/kubernetes/kops/pull/18186
* azure: Get node info from node labels for CSI driver by @hakman in https://github.com/kubernetes/kops/pull/18170
* azure: Move load balancer probe and rule configuration to model by @hakman in https://github.com/kubernetes/kops/pull/18183
* test: Set E2E --node-os-arch=arm64 for Rocky10 by @rifelpet in https://github.com/kubernetes/kops/pull/18192
* Continue skipping networking tests in k8s 1.37 by @rifelpet in https://github.com/kubernetes/kops/pull/18193
* azure: Fix disk deletion loop during cluster teardown by @hakman in https://github.com/kubernetes/kops/pull/18191
* tests: fix KOPS_BASE_URL for build-kubernetes runs by @hakman in https://github.com/kubernetes/kops/pull/18189
* Fix nil panic during GCE deletion by @rifelpet in https://github.com/kubernetes/kops/pull/18195
* azure: Handle missing resource group in disk listing by @hakman in https://github.com/kubernetes/kops/pull/18194
* azure: Move hardcoded task config to model using SDK types by @hakman in https://github.com/kubernetes/kops/pull/18190
* azure: Fix disk deletion by blocking on parent VMSS instead of VM instance by @hakman in https://github.com/kubernetes/kops/pull/18196
* vfs: Pass S3 provider-specific options to clients by @hakman in https://github.com/kubernetes/kops/pull/18132
* azure: Deploy cloud-controller-manager for node lifecycle and LB support by @hakman in https://github.com/kubernetes/kops/pull/18197
* fix: use KOPS_BASE_URL image version when side-loading by @hakman in https://github.com/kubernetes/kops/pull/18200
* chore: Remove support for Kubernetes 1.30 in kOps 1.36 by @hakman in https://github.com/kubernetes/kops/pull/18202
* e2e: Stop running in-tree volume tests for CSI-migrated drivers by @hakman in https://github.com/kubernetes/kops/pull/18201
* chore(channels): update k8s and ubuntu jammy ami versions in alpha channel by @moshevayner in https://github.com/kubernetes/kops/pull/18203
* gce: Disallow role=apiserver with dns=none by @rifelpet in https://github.com/kubernetes/kops/pull/18214
* hetzner: add cluster-autoscaler addon for Hetzner cloud provider by @bjornharrtell in https://github.com/kubernetes/kops/pull/18135
* upgrade-ab: source env file to get CLUSTER_NAME by @hakman in https://github.com/kubernetes/kops/pull/18219
* aws: Update EBS CSI driver to 1.58.0 by @rifelpet in https://github.com/kubernetes/kops/pull/18220
* aws: update LBC to v3.2.2 via helm+kustomize by @hakman in https://github.com/kubernetes/kops/pull/18221
* aws: Prune LBC deployment by @rifelpet in https://github.com/kubernetes/kops/pull/18222
* aws: Run LBC E2E tests in parallel by @rifelpet in https://github.com/kubernetes/kops/pull/18223
* azure: add regenerate.sh for addons by @hakman in https://github.com/kubernetes/kops/pull/18225
* do: migrate to NodeReconciler and drop legacy code by @hakman in https://github.com/kubernetes/kops/pull/18227
* fix: honor klog -stderrthreshold even when -logtostderr is true by @pierluigilenoci in https://github.com/kubernetes/kops/pull/18231
* Initial support for Ubuntu 26.04 by @upodroid in https://github.com/kubernetes/kops/pull/18232
* aws: Remove ALBTargetControlConfig CRD from LBC manifest by @rifelpet in https://github.com/kubernetes/kops/pull/18233
* Deprecreate Debian 10 and Ubuntu 20.04 in kops 1.35 by @rifelpet in https://github.com/kubernetes/kops/pull/18234
* Remove support for Ubuntu 20.04 and Debian 10 by @rifelpet in https://github.com/kubernetes/kops/pull/18235
* aws: Use HTTPS health check with /healthz for kops-controller by @hakman in https://github.com/kubernetes/kops/pull/18236
* Support NLBSecurityGroupMode for AWS Cloud Controller Manager by @mfbonfigli in https://github.com/kubernetes/kops/pull/18211
* cilium: require k8s-connectivity in liveness probe by @hakman in https://github.com/kubernetes/kops/pull/18237
* feat: verify config server IPs with DNS name by @hakman in https://github.com/kubernetes/kops/pull/18241
* gce: Include MIG scaling errors when instances are not found by @rifelpet in https://github.com/kubernetes/kops/pull/18247
* azure: drop unused UsesPrivateDNS clause from API LB by @hakman in https://github.com/kubernetes/kops/pull/18252
* aws: skip node S3 permissions when kops-controller serves node config by @hakman in https://github.com/kubernetes/kops/pull/18251
* tests: add minimal gossip create/update integration tests by @hakman in https://github.com/kubernetes/kops/pull/18256
* validation: enforce supported DNS topology per cloud provider by @hakman in https://github.com/kubernetes/kops/pull/18255
* Release notes for 1.35 by @hakman in https://github.com/kubernetes/kops/pull/18250
* addons: drop legacy 9.99.0 version shim by @hakman in https://github.com/kubernetes/kops/pull/18257
* e2e: Pass prow job name to kops cloud labels by @rifelpet in https://github.com/kubernetes/kops/pull/18258
* Remove explicit sysctl fs.inotify.max_user_watches setting by @ajoga in https://github.com/kubernetes/kops/pull/17556
* chore(channels): promote alpha to stable by @moshevayner in https://github.com/kubernetes/kops/pull/18259
* azure: enable CCM cloud routes for kubenet and kindnet by @hakman in https://github.com/kubernetes/kops/pull/18262
* build: strip release binaries by default by @hakman in https://github.com/kubernetes/kops/pull/18263
* Fix support for VPC CNI + Debian 11 by @rifelpet in https://github.com/kubernetes/kops/pull/18261
* Update k8s.io dependencies and Go to v1.26.2 by @hakman in https://github.com/kubernetes/kops/pull/18267
* Fix support for VPC CNI + RHEL9 by @rifelpet in https://github.com/kubernetes/kops/pull/18264
* protobuf: Migrate to google.golang.org/protobuf by @hakman in https://github.com/kubernetes/kops/pull/18230
* chore: drop helm dependency and fork strvals by @hakman in https://github.com/kubernetes/kops/pull/18272
* chore: switch structured-merge-diff from v4 to v6 by @hakman in https://github.com/kubernetes/kops/pull/18273
* chore: drop cloud-provider-gcp dependency and fork NewAltTokenSource by @hakman in https://github.com/kubernetes/kops/pull/18274
* Upgrade AWS load balancer controller to 3.3.0 by @rifelpet in https://github.com/kubernetes/kops/pull/18276
* azure: encode storage account in azureblob:// URLs by @hakman in https://github.com/kubernetes/kops/pull/18260
* nodeup: stream verified image bytes into ctr import by @hakman in https://github.com/kubernetes/kops/pull/18278
* nodeup: drop containerized mounter and Archive task by @hakman in https://github.com/kubernetes/kops/pull/18277
* hetzner: Upgrade hcloud-cloud-controller-manager to v1.30.1 by @bjornharrtell in https://github.com/kubernetes/kops/pull/18281
* Migrate deprecated kubelet flags to config file by @rifelpet in https://github.com/kubernetes/kops/pull/18280
* cilium: allow setting arbitrary cilium-config entries by @hakman in https://github.com/kubernetes/kops/pull/18285
* etcd-manager: Bump etcd patches and drop 3.4 support by @hakman in https://github.com/kubernetes/kops/pull/18290
* gce: shrink etcd-cluster disk label to fit 63-char limit by @hakman in https://github.com/kubernetes/kops/pull/18292
* protokube: drop unused flags, fields, and methods and cleanup by @hakman in https://github.com/kubernetes/kops/pull/18293
* dns-controller: make priorityClassName configurable by @hakman in https://github.com/kubernetes/kops/pull/18298
* dns-controller: default Provider when ExternalDNS is partially set by @hakman in https://github.com/kubernetes/kops/pull/18302
* e2e: add upgrade test for gossip by @hakman in https://github.com/kubernetes/kops/pull/18296
* aws: Only set nodeAllocatableUpdatePeriodSeconds on K8s 1.35+ by @rifelpet in https://github.com/kubernetes/kops/pull/18305
* build(deps): bump actions/dependency-review-action from 4.9.0 to 5.0.0 by @dependabot[bot] in https://github.com/kubernetes/kops/pull/18297
* gce: expose kops-controller on internal LB for gossip clusters by @hakman in https://github.com/kubernetes/kops/pull/18307
* e2e: heartbeat Boskos lease during upgrade test by @hakman in https://github.com/kubernetes/kops/pull/18310
* e2e: Improve resource dump reliability by @rifelpet in https://github.com/kubernetes/kops/pull/18311
* Address misc TODO comments by @rifelpet in https://github.com/kubernetes/kops/pull/18314
* azure: match VMSS VM/NIC ARM IDs case-insensitively in dumper by @hakman in https://github.com/kubernetes/kops/pull/18315
* Dump containerd config files by @rifelpet in https://github.com/kubernetes/kops/pull/18313
* azure: list VMSS NICs in protokube gossip seed discovery by @hakman in https://github.com/kubernetes/kops/pull/18319
* etcd-manager: upgrade to v3.0.20260512 by @hakman in https://github.com/kubernetes/kops/pull/18323
* Use N4A machine type in GCE by @rifelpet in https://github.com/kubernetes/kops/pull/18330
* hetzner: upgrade CCM to v1.31.0 by @hakman in https://github.com/kubernetes/kops/pull/18317
* hetzner: upgrade CSI driver to v2.20.2 by @hakman in https://github.com/kubernetes/kops/pull/18318
* kops toolbox dump fixes by @rifelpet in https://github.com/kubernetes/kops/pull/18326
* Disable kube-proxy when Calico runs in eBPF mode by @rifelpet in https://github.com/kubernetes/kops/pull/18334
* vfs: Use HeadBucket to resolve S3 bucket region by @hakman in https://github.com/kubernetes/kops/pull/18335
* aws: drop cloud-provider-aws dependency by @hakman in https://github.com/kubernetes/kops/pull/18336
* Abort rolling update on load balancer deregister failure by @hakman in https://github.com/kubernetes/kops/pull/18338
* aws: allow disabling NTH enableScheduledEventDraining in Queue Processor mode by @hakman in https://github.com/kubernetes/kops/pull/18339
* Reject non-http(s) URLs for assets.fileRepository by @hakman in https://github.com/kubernetes/kops/pull/18340
* Align instancegroup node label across create cluster/instancegroup by @hakman in https://github.com/kubernetes/kops/pull/18341
* aws: apply onDemandAllocationStrategy to ASG mixed instances policy by @hakman in https://github.com/kubernetes/kops/pull/18342
* aws: propagate taints without value to ASG tags by @hakman in https://github.com/kubernetes/kops/pull/18343
* kube-proxy: bind-mount kubeconfig directory instead of the file by @hakman in https://github.com/kubernetes/kops/pull/18344
* e2e: trim job name by @hakman in https://github.com/kubernetes/kops/pull/18346
* Remove the unused in-tree cloud config by @hakman in https://github.com/kubernetes/kops/pull/18347
* azure: load cloud config from a Secret instead of azure.json by @hakman in https://github.com/kubernetes/kops/pull/18345
* dump: time out per-node log dumping after one minute by @hakman in https://github.com/kubernetes/kops/pull/18349
* e2e: delete upgraded clusters with the new kops binary by @hakman in https://github.com/kubernetes/kops/pull/18350
* gossip: introduce hybrid worker bootstrap for gossip clusters     by @hakman in https://github.com/kubernetes/kops/pull/18245
* gce: allow BGP from nodes to control plane for Calico by @hakman in https://github.com/kubernetes/kops/pull/18351
* gossip: restrict seed discovery to control-plane nodes by @hakman in https://github.com/kubernetes/kops/pull/18352
* azure: fix control-plane role tag spelling by @hakman in https://github.com/kubernetes/kops/pull/18353
* gossip: stop exporting unused cloud credentials to worker nodes by @hakman in https://github.com/kubernetes/kops/pull/18354
* azure: restrict VMSS role assignments to the control plane by @hakman in https://github.com/kubernetes/kops/pull/18357
* gce: stop granting compute.viewer to worker nodes by @hakman in https://github.com/kubernetes/kops/pull/18356
* aws: remove unused IAM server certificate permissions by @hakman in https://github.com/kubernetes/kops/pull/18355
* nodeup: skip protokube/channels assets on workers by @hakman in https://github.com/kubernetes/kops/pull/18358
* aws: remove KMS-based RNG seeding in nodeup by @hakman in https://github.com/kubernetes/kops/pull/18359
* Bump CoreDNS memory on large clusters in scalability scenario by @Jefftree in https://github.com/kubernetes/kops/pull/18361
* vfs: reject GCS paths without buckets by @immanuwell in https://github.com/kubernetes/kops/pull/18360
* aws: scope ec2:DescribeInstances/DescribeRegions to roles that use them by @hakman in https://github.com/kubernetes/kops/pull/18362
* Support containerd v3 config schema by @rifelpet in https://github.com/kubernetes/kops/pull/18291
* aws: Use kms:ViaService condition on KMS data actions by @rifelpet in https://github.com/kubernetes/kops/pull/18363
* chore(channels): bump k8s versions in alpha channel by @moshevayner in https://github.com/kubernetes/kops/pull/18367
* linode: Add VPC cloudup task by @moshevayner in https://github.com/kubernetes/kops/pull/18316
* nodeup: populate DefaultMachineType for Cilium-ENI clusters by @hakman in https://github.com/kubernetes/kops/pull/18365
* Update coredns to v1.14.3 by @Jefftree in https://github.com/kubernetes/kops/pull/18368
* Downgrade coredns to v1.14.2 by @hakman in https://github.com/kubernetes/kops/pull/18369
* Upgrade containerd to v2.3.0 by @hakman in https://github.com/kubernetes/kops/pull/18364
* aws: Use amazonaws.com suffix for kms:ViaService in all partitions by @rifelpet in https://github.com/kubernetes/kops/pull/18372
* channels: move from protokube to a static pod by @hakman in https://github.com/kubernetes/kops/pull/18328
* decouple client HTTP traffic in kops scalability tests by @Jefftree in https://github.com/kubernetes/kops/pull/18370
* cilium: add flags for bpf-lb-sock and bpf-lb-sock-hostns-only by @hakman in https://github.com/kubernetes/kops/pull/18375
* kops-controller and nodeup bug fixes by @rifelpet in https://github.com/kubernetes/kops/pull/18379
* nodeup: fix protokube skip on hybrid-bootstrap workers by @hakman in https://github.com/kubernetes/kops/pull/18378
* channels: stop distributing the standalone binary by @hakman in https://github.com/kubernetes/kops/pull/18374
* kubetest2-kops: fix GCE DNS truncation by @Jefftree in https://github.com/kubernetes/kops/pull/18382
* channels: build static pod manifest in cloudup by @hakman in https://github.com/kubernetes/kops/pull/18373
* Fix kops get assets when spec.dnsZone is a DNS name by @hakman in https://github.com/kubernetes/kops/pull/18384
* channels: fix region detection and discovery cache permission noise by @hakman in https://github.com/kubernetes/kops/pull/18390
* Validate instance group names in kops-controller by @rifelpet in https://github.com/kubernetes/kops/pull/18391
* Upgrade Go to 1.26.3 by @hakman in https://github.com/kubernetes/kops/pull/18395
* Update dependencies by @hakman in https://github.com/kubernetes/kops/pull/18398
* gomod: tidy and verify all modules by @hakman in https://github.com/kubernetes/kops/pull/18401
* e2e: set the v3 runtime class path in apiserver templates by @hakman in https://github.com/kubernetes/kops/pull/18402
* build: use gcr.io/distroless/static as base image by @hakman in https://github.com/kubernetes/kops/pull/18403
* addons: render addons as tasks by @hakman in https://github.com/kubernetes/kops/pull/18215
* chore(channels): promote alpha to stable by @moshevayner in https://github.com/kubernetes/kops/pull/18409
* hetzner: enable Cluster Autoscaler by @hakman in https://github.com/kubernetes/kops/pull/18226
* chore(networking): bump aws cni to version 1.21.2 by @moshevayner in https://github.com/kubernetes/kops/pull/18410
* Use protobuf by @serathius in https://github.com/kubernetes/kops/pull/18068
* Release 1.36.0-alpha.1 by @hakman in https://github.com/kubernetes/kops/pull/18413

## New Contributors
* @ritazh made their first contribution in https://github.com/kubernetes/kops/pull/17952
* @serathius made their first contribution in https://github.com/kubernetes/kops/pull/18036
* @pkubicsek-sb made their first contribution in https://github.com/kubernetes/kops/pull/17740
* @pierluigilenoci made their first contribution in https://github.com/kubernetes/kops/pull/18115
* @mfbonfigli made their first contribution in https://github.com/kubernetes/kops/pull/18211
* @ajoga made their first contribution in https://github.com/kubernetes/kops/pull/17556
* @Jefftree made their first contribution in https://github.com/kubernetes/kops/pull/18361
* @immanuwell made their first contribution in https://github.com/kubernetes/kops/pull/18360

**Full Changelog**: https://github.com/kubernetes/kops/compare/v1.35.0-beta.1...v1.36.0-alpha.1

---

> **Source** [kubernetes/kops](https://github.com/kubernetes/kops) · `v1.36.0-alpha.1` · 2026-05-27 · [upstream release](https://github.com/kubernetes/kops/releases/tag/v1.36.0-alpha.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
