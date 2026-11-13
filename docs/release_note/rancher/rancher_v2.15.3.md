---
title: "rancher v2.15.3"
project: "rancher"
repo: "rancher/rancher"
tag: "v2.15.3"
published: "2026-10-29"
type: "patch"
lang: "en"
summary: "Rancher v2.15.3 is the latest patch release of Rancher. This is a Community version release that introduces maintenance updates and bug fixes."
---

# rancher v2.15.3

# Release v2.15.3

> [!IMPORTANT]
> - If you are using Active Directory Federation Service (AD FS), upgrading to Rancher v2.10.1 or later may cause issues with authentication, requiring manual intervention. These issues are due to the AD FS Relying Party Trust not being able to pick up a signature verification certificate from the metadata. For more information, see [\#48655](https://github.com/rancher/rancher/issues/48655). These issues can be corrected by either of two methods:
>
>   - Updating the Relying Party Trust information from federation metadata (Relying Party Trust → Update from Federation Metadata…​).
>
>   - Directly adding the certificate (Relying Party Trust → Properties → Signature tab → Add → Select the certificate).

Rancher v2.15.3 is the latest patch release of Rancher. This is a Community version release that introduces maintenance updates and bug fixes.

For more information on new features in the general minor release, see the [v2.15.0 release notes](https://github.com/rancher/rancher/releases/tag/v2.15.0).

## Security Fixes for Vulnerabilities

This release addresses the following security issues:

### Rancher

- Fixed a security vulnerability in the Rancher meta proxy endpoint where the destination allowlist was evaluated in a location that could not prevent a request from being forwarded. An authenticated user could cause the Rancher server to send requests to internal services that the allowlist is intended to block and receive the responses. The allowlist is now enforced in the request handler, which rejects disallowed destinations before any connection is made. For more information, see [CVE-2026-88809](https://github.com/rancher/rancher/security/advisories/GHSA-f9gf-wh3x-jx3v).
- Fixed a security vulnerability in Rancher's RBAC validation where the `inheritedNamespacedRules` field of a `GlobalRole` was not checked for privilege escalation. A user with delegated permissions to manage global roles and global role bindings could grant permissions in downstream clusters that exceeded their own. The `GlobalRole` and `GlobalRoleBinding` admission webhooks now validate this field in the same way as the other permission-carrying fields. For more information, refer to [CVE-2026-88810](https://github.com/rancher/webhook/security/advisories/GHSA-f898-2c8h-r7jc).
- Fixed a security vulnerability in the Rancher Manager meta proxy where the caller's own Rancher credentials were not consistently removed from requests forwarded to third-party cloud provider hosts. A signed-in user's session credential could be sent to a cloud provider during ordinary use of provisioning views, and an API client's Rancher token could be sent when it omitted the proxy's credential selection headers. The proxy now strips the caller's credentials on every request path. For more information, refer to [CVE-2026-88811](https://github.com/rancher/rancher/security/advisories/GHSA-x82x-2qj6-5rm2).
- Fixed a security vulnerability in Rancher where the authorization check that protects the local cluster shell was not applied to every API route that could reach it. Any authenticated user, including one with no permissions on the `local` cluster, could obtain an unprivileged shell pod on the management cluster, breaking the expected isolation of the management plane. The authorization check is now enforced consistently for all request forms. For more information, see [CVE-2026-104623](https://github.com/rancher/rancher/security/advisories/GHSA-8x6f-2v58-x6p7).

### Fleet

- Fixed a privilege escalation vulnerability in Fleet's agent management controller, where a Fleet cluster object created by an ordinary user could reference administrative credentials for the Rancher management (`local`) cluster. This allowed an authenticated user holding only the default `user` global role, with no permissions on the local cluster, to gain cluster-admin on the Rancher management cluster and thereby on all managed clusters. Fleet now only accepts a kubeconfig secret from another namespace when the secret is labeled for use by the referencing namespace, and only deploys agents onto the management cluster for its own system clusters. For more information, refer to [CVE-2026-94290](https://github.com/rancher/fleet/security/advisories/GHSA-qfmw-gw96-ffcr).
- Fixed a security vulnerability in Fleet where the cluster identity claimed during cluster registration was not bound to the registration token used for the request. A holder of a valid workspace registration token who knew another cluster's client identifier could obtain credentials for that cluster's Fleet management namespace and disrupt its legitimate agent. Fleet now records the registration token a cluster is registered with and rejects registration requests that claim the same cluster identity with a different token. For more information, refer to [CVE-2026-104615](https://github.com/rancher/fleet/security/advisories/GHSA-gx8v-2929-9q95).

For additional details, see the Security Advisories and CVEs page in Rancher's [documentation](https://ranchermanager.docs.rancher.com/v2.15/reference-guides/rancher-security/security-advisories-and-cves) or in Rancher's GitHub [repository](https://github.com/rancher/rancher/security/advisories).

## Rancher general

### Major bug fixes

- Fixed an issue where Rancher settings configured using environment variables retained stale values and the `source: env` attribute after the environment variable was removed. When an environment variable is removed, Rancher now clears the stored environment source and value on startup. The setting then reverts to its default value. See See [\#58075](https://github.com/rancher/rancher/issues/58075).

## Cluster provisioning

### Major bug fixes

- Fixed an issue where imported clusters could become unavailable after upgrading Rancher if the cluster agent was redeployed before its registration token was migrated, leaving the agent with an empty token. See [\#58028](https://github.com/rancher/rancher/issues/58028).

- Fixed an issue where provisioned clusters with S3 etcd snapshots could remain stuck during deletion. See [\#57506](https://github.com/rancher/rancher/issues/57506).

## Changes Since v2.15.2

See the full list of [changes](https://github.com/rancher/rancher/compare/v2.15.2%E2%80%A6v2.15.3).

## Install/Upgrade Notes

If you’re installing Rancher for the first time, your environment must fulfill the [installation requirements](https://ranchermanager.docs.rancher.com/v2.15/getting-started/installation-and-upgrade/installation-requirements).

> [!IMPORTANT]
> - Rancher now requires the cluster it runs on to have the [Kubernetes API Aggregation Layer](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/) enabled. This is because Rancher extends Kubernetes with additional APIs by registering its own extension API server. Please note that all versions of Kubernetes supported in this Rancher versions K8s distributions (RKE2/K3s) will have the aggregation layer configured and enabled by default.
>
>   - Refer to the [Extension API Server documentation](https://ranchermanager.docs.rancher.com/v2.15/api/extension-apiserver#aggregation-layer-is-required) and [\#50400](https://github.com/rancher/rancher/issues/50400) for more information.
>
> - Rancher Kubernetes Engine (RKE/RKE1) has reached end of life as of **July 31, 2025**. Rancher versions 2.12.0 and later no longer support provisioning or managing downstream RKE1 clusters. We recommend replatforming RKE1 clusters to RKE2 to ensure continued support and security updates. Learn more about the transition [here](https://www.suse.com/support/kb/doc/?id=000021518).
>
>   - Rancher now has a pre-upgrade validation check for RKE1 resources which fails and lists the RKE1 resources if present. Refer to [\#50286](https://github.com/rancher/rancher/issues/50286) for more information.
>
> - It is crucial that you review the available disk space on your nodes and plan accordingly before upgrading to Rancher v2.12.0 and later to avoid potential disk pressure and pod eviction issues.
>
>   - For additional information, refer to the [UI Server Side Pagination - Disk Space documentation](https://ranchermanager.docs.rancher.com/v2.15/how-to-guides/advanced-user-guides/ui-server-side-pagination#disk-space).
>
> - Rancher now has an enablement option called [`AUDIT_LOG_ENABLED`](https://ranchermanager.docs.rancher.com/v2.15/how-to-guides/advanced-user-guides/enable-api-audit-log#viewing-api-audit-logs:~:text=Description-,AUDIT_LOG_ENABLED,-false%20%2D%20Disables%20the) for API Audit Logs for a Rancher installation.
>
>   - In Rancher versions 2.11.x and earlier, only the `AUDIT_LEVEL` could be set and the default log level (`0`) would disable the audit log. In Rancher versions 2.12.x and later, the default log level (`0`) now only contains the log request and response metadata, and can be set when configuring `AUDIT_LOG_ENABLED`. If installing or upgrading via Helm you can enable the API Audit Logs and specify the log level by applying the following setting to your Helm command: `--set auditLog.enabled=true --set auditLog.level=0`. See the [Enabling the API Audit Log to Record System Events](https://ranchermanager.docs.rancher.com/v2.15/how-to-guides/advanced-user-guides/enable-api-audit-log) documentation and [\#48941](https://github.com/rancher/rancher/issues/48941).

## Changes in Image Artifacts

Image artifact digests are renamed in Rancher v2.12.0, v2.11.4 and v2.10.8. Up until this change, separate image digests files for each operating system and architecture have been maintained for compatibility reasons. With this change, only one file for each operating system is to be provided:

- The `rancher-images-digests-linux-amd64.txt` and `rancher-images-digests-linux-arm64.txt` files are to be renamed to `rancher-images-digests-linux.txt`.

- The `rancher-images-digests-windows-ltsc2019.txt` and `rancher-images-digests-windows-ltsc2022.txt` files are to be renamed to `rancher-images-digests-windows.txt`.

## Upgrade Requirements

- **Creating backups:** [Create a backup](https://ranchermanager.docs.rancher.com/v2.15/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher) before you upgrade Rancher. To roll back Rancher after an upgrade, you must first back up and restore Rancher to the previous Rancher version. Because Rancher will be restored to the same state as when the backup was created, any changes post-upgrade will not be included after the restore.

- **Helm version requirements:**

  - To manage Rancher 2.12.x and later, you must upgrade your Helm client to version 3.18 or newer.

  - This change is required to reflect the addition of Kubernetes 1.33 support with this release.

  - Currently, the official [Helm Version Support Policy](https://helm.sh/docs/topics/version_skew/) dictates that only Helm 3.18 supports the proper Kubernetes version range for Rancher 2.12.

- **CNI requirements:**

  - For Kubernetes v1.19 and later, disable firewalld as it’s incompatible with various CNI plugins. See [\#28840](https://github.com/rancher/rancher/issues/28840).

  - When upgrading or installing a Linux distribution that uses nf_tables as the backend packet filter, such as SLES 15, RHEL 8, Ubuntu 20.10, Debian 10, or later, upgrade to RKE v1.19.2 or later to get Flannel v0.13.0. Flannel v0.13.0 supports nf_tables. See Flannel [\#1317](https://github.com/flannel-io/flannel/issues/1317).

- **Requirements for air-gapped environments:**

  - When using a proxy in front of an air-gapped Rancher instance, you must pass additional parameters to `NO_PROXY`. See the [documentation](https://ranchermanager.docs.rancher.com/v2.15/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher) and issue [\#2725](https://github.com/rancher/docs/issues/2725#issuecomment-702454584).

  - When installing Rancher with Docker in an air-gapped environment, you must supply a custom `registries.yaml` file to the `docker run` command, as shown in the [K3s documentation](https://docs.k3s.io/installation/private-registry). If the registry has certificates, then you’ll also need to supply those. See [\#28969](https://github.com/rancher/rancher/issues/28969#issuecomment-694474229).

## Versions

### Images

- rancher/rancher:v2.15.3

### Tools

- CLI - [v2.15.3](https://github.com/rancher/cli/releases/tag/v2.15.3)

### Kubernetes Versions for RKE2/K3s

- v1.36.5 (Default)

- v1.35.9

- v1.34.12

### Rancher Helm Chart Versions

In Rancher v2.6.0 and later, in the **Apps & Marketplace** UI, many Rancher Helm charts are named with a major version that starts with *100*. This avoids simultaneous upstream changes and Rancher changes from causing conflicting version increments. This also complies with semantic versioning (SemVer), which is a requirement for Helm. You can see the upstream version number of a chart in the build metadata, for example: `100.0.0+up2.1.0`. See [\#32294](https://github.com/rancher/rancher/issues/32294).

## Previous Rancher Behavior Changes

### Previous Rancher Behavior Changes - Rancher General

- **Rancher v2.15.0:**

  - Rancher v2.15 removes support for Kubernetes v1.33. See [\#55306](https://github.com/rancher/rancher/issues/55306).

### Previous Rancher Behavior Changes Changes - Rancher App (Global UI)

- **Rancher v2.15.0:**

  - The option to disable the feature flag `ui-sql-cache` / Vai / Server-Side Pagination (SSP) in the Rancher UI has been removed in preparation for Rancher v2.16, where the feature will always be enabled. See [\#16822](https://github.com/rancher/dashboard/issues/16822).

  - **Removal**: Support for Ember-based UI plugins for cluster and node drivers (deprecated since Rancher v2.11.0) is removed in Rancher v2.15.0. Migrate your plugins to the [UI Extensions Framework](https://extensions.rancher.io/). For details, see [\#14005](https://github.com/rancher/dashboard/issues/14005).

### Previous Rancher Behavior Changes - K3s and RKE2 Provision

- **Rancher v2.15.0:**

  - By default, the `Standard User` and `Create Clusters` [global permissions](https://ranchermanager.docs.rancher.com/v2.15/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions) now allow creating and then updating CAPI infrastructure objects in the `fleet-default` namespace. Note that manually created infrastructure provider identity objects, such as `AWSClusterStaticIdentity` or `VSphereClusterIdentity`, that target the `fleet-default` namespace can be used through CAPI infrastructure objects such as `AWSCluster` or `VsphereCluster`. See [\#53777](https://github.com/rancher/rancher/issues/53777).

  - When using native CAPI infrastructure providers with v2prov, Rancher will now generate the bootstrap cloud-config in the [Jinja format](https://docs.cloud-init.io/en/latest/explanation/format/jinja.html). User-data for regular node drivers with v2prov is unaffected. See [\#53777](https://github.com/rancher/rancher/issues/53777).

### Previous Rancher Behavior Changes - Continuous Delivery (Fleet)

- **Rancher v2.15.0:**

  - **Deprecation**: Fleet will be removing support for `GitRepoRestriction` in a future release, making the use of the Policy resource for configuring multi-tenant environments the only option. See [\#55652](https://github.com/rancher/rancher/issues/55652).

  - **Deprecation**: Fleet support for unauthenticated webhook calls will be removed in a future release, making the setup of a [webhook secret](https://fleet.rancher.io/next/how-tos-for-users/webhook#_3_optional_configure_a_webhook_secret) the only option. See [\#55633](https://github.com/rancher/rancher/issues/55633). == Long-standing Known Issues

### Long-standing Known Issues - Cluster Provisioning

- **Rancher v2.15.1:**

  - Creating or editing v2prov clusters with native CAPI infrastructure providers from the UI can under some failure conditions leave unused infrastructure resources in the management cluster that must be cleaned up manually. See [\#55705](https://github.com/rancher/rancher/issues/55705).

- **Rancher v2.15.0:**

  - Imported clusters cannot reconnect to Rancher if their registration token is rotated while they are disconnected and the grace period ends before they reconnect. The cluster agent logs `400 Bad Request` with the response body `cluster not found`. As a workaround, re-run the registration command from the cluster **Registration** tab on the downstream cluster. To prevent the issue, increase the `crt-default-grace-period-minutes` setting to cover the expected downtime, or disable the `crt-token-ttl-rotation` feature flag. See [\#57078](https://github.com/rancher/rancher/issues/57078).

- Not all cluster tools can be installed on a hardened cluster.

- **Rancher v2.8.1:**

  - When you attempt to register a new etcd/controlplane node in a CAPR-managed cluster after a failed etcd snapshot restoration, the node can become stuck in a perpetual paused state, displaying the error message `[ERROR] 000 received while downloading Rancher connection information. Sleeping for 5 seconds and trying again`. As a workaround, you can unpause the cluster by running `kubectl edit clusters.cluster clustername -n fleet-default` and set `spec.unpaused` to `false`. See [\#43735](https://github.com/rancher/rancher/issues/43735).

### Long-standing Known Issues - RKE2 Provisioning

- **Rancher v2.7.7:**

  - Due to the backoff logic in various components, downstream provisioned K3s and RKE2 clusters may take longer to re-achieve **Active** status after a migration. If you see that a downstream cluster is still updating or in an error state immediately after a migration, please let it attempt to resolve itself. This might take up to an hour to complete. See [\#42834](https://github.com/rancher/rancher/issues/42834).

- **Rancher v2.7.6:**

  - Provisioning RKE2/K3s clusters with added (not built-in) custom node drivers causes provisioning to fail. As a workaround, [fix](https://github.com/rancher/rancher/issues/37074#issuecomment-1664722305) the added node drivers after activating. See [\#37074](https://github.com/rancher/rancher/issues/37074).

### Long-standing Known Issues - K3s Provisioning

- **Rancher v2.7.6:**

  - Provisioning RKE2/K3s clusters with added (not built-in) custom node drivers causes provisioning to fail. As a workaround, [fix](https://github.com/rancher/rancher/issues/37074#issuecomment-1664722305) the added node drivers after activating. See [\#37074](https://github.com/rancher/rancher/issues/37074).

- **Rancher v2.7.2:**

  - Clusters remain in an `Updating` state even when they contain nodes in an `Error` state. See [\#39164](https://github.com/rancher/rancher/issues/39164).

### Long-standing Known Issues - Rancher App (Global UI)

- **Rancher v2.10.0:**

  - After deleting a Namespace or Project in the Rancher UI, the Namespace or Project remains visible. As a workaround, refresh the page. See [\#12220](https://github.com/rancher/dashboard/issues/12220).

- **Rancher v2.9.2:**

  - Although system mode node pools must have at least one node, the Rancher UI allows a minimum node count of zero. Inputting a zero minimum node count through the UI can cause cluster creation to fail due to an invalid parameter error. To prevent this error from occurring, enter a minimum node count at least equal to the node count. See [\#11922](https://github.com/rancher/dashboard/issues/11922).

- **Rancher v2.7.7:**

  - When creating a cluster in the Rancher UI it does not allow the use of an underscore `_` in the `Cluster Name` field. See [\#9416](https://github.com/rancher/dashboard/issues/9416).

- **Rancher v2.6.4:**

  - Deployment securityContext section is missing when a new workload is created. This prevents pods from starting when Pod Security Policy Support is enabled. See [\#4815](https://github.com/rancher/dashboard/issues/4815).

### Long-standing Known Issues - EKS

- **Rancher v2.7.0:**

  - EKS clusters on Kubernetes v1.21 or below on Rancher v2.7 cannot be upgraded. See [\#39392](https://github.com/rancher/rancher/issues/39392).

### Long-standing Known Issues - Authentication

- **Rancher v2.9.0:**

  - There are some known issues with the OpenID Connect provider support:

    - When the generic OIDC auth provider is enabled, and you attempt to add auth provider users to a cluster or project, users are not populated in the dropdown search bar. This is expected behavior as the OIDC auth provider alone is not searchable. See [\#46104](https://github.com/rancher/rancher/issues/46104).

    - When the generic OIDC auth provider is enabled, auth provider users that are added to a cluster/project by their username are not able to access resources upon logging in. A user will only have access to resources upon login if the user is added by their userID. See [\#46105](https://github.com/rancher/rancher/issues/46105).

    - When the generic OIDC auth provider is enabled and an auth provider user in a nested group is logged into Rancher, the user will see the following error when they attempt to create a Project: `projectroletemplatebindings.management.cattle.io is forbidden: User "u-gcxatwsnku" cannot create resource "projectroletemplatebindings" in API group "management.cattle.io" in the namespace "p-9t5pg"`. However, the project is still created. See [\#46106](https://github.com/rancher/rancher/issues/46106).

### Long-standing Known Issues - Rancher Webhook

- **Rancher v2.7.2:**

  - A webhook is installed in all downstream clusters. There are several issues that users may encounter with this functionality:

    - If you rollback from a version of Rancher v2.7.2 or later, to a Rancher version earlier than v2.7.2, the webhooks will remain in downstream clusters. Since the webhook is designed to be 1:1 compatible with specific versions of Rancher, this can cause unexpected behaviors to occur downstream. The Rancher team has developed a [script](https://github.com/rancher/webhook/wiki/Remove-Webhook-from-downstream-clusters) which should be used after rollback is complete (meaning after a Rancher version earlier than v2.7.2 is running). This removes the webhook from affected downstream clusters. See [\#40816](https://github.com/rancher/rancher/issues/40816).

### Long-standing Known Issues - Virtualization Management (Harvester)

- **Rancher v2.13.1:**

  - When upgrading to Rancher v2.13.1 or higher while using Harvester v1.6.1, users may encounter an issue with their Load Balancers in downstream clusters using the Harvester Cloud Provider, and must perform the following [workaround](https://docs.harvesterhci.io/latest/troubleshooting/rancher#guest-cluster-loadbalancer-ip-is-not-reachable) to instruct Calico to not use any of the IP/interface managed by `kube-vip`. See [\#9767](https://github.com/harvester/harvester/issues/9767).

- **Rancher v2.7.2:**

  - If you’re using Rancher v2.7.2 with Harvester v1.1.1 clusters, you won’t be able to select the Harvester cloud provider when deploying or updating guest clusters. The [Harvester release notes](https://github.com/harvester/release-notes/blob/main/v1.1.2.md#important-information-about-rancher-support) contain instructions on how to resolve this. See [\#3750](https://github.com/harvester/harvester/issues/3750).

### Long-standing Known Issues - Backup/Restore

- When migrating to a cluster with the Rancher Backup feature, the server-url cannot be changed to a different location. It must continue to use the same URL.

- **Rancher v2.13.0:**

  - When performing a rollback from Rancher v2.13.0 to v2.12.3 using the backup and restore operator (BRO), the restore does not complete successfully. See [\#844](https://github.com/rancher/backup-restore-operator/issues/844). To work around this issue, you must scale down your Rancher deployment and uninstall the Webhook chart before performing the restore. For details, refer to this [Knowledge Base article](https://support.scc.suse.com/s/kb/Rolling-back-from-Rancher-v2-13-0-to-v2-12-3?language=en_US).

- **Rancher v2.7.7:**

  - Due to the backoff logic in various components, downstream provisioned K3s and RKE2 clusters may take longer to re-achieve **Active** status after a migration. If you see that a downstream cluster is still updating or in an error state immediately after a migration, please let it attempt to resolve itself. This might take up to an hour to complete. See [\#42834](https://github.com/rancher/rancher/issues/42834).

---

> **Source** [rancher/rancher](https://github.com/rancher/rancher) · `v2.15.3` · 2026-10-29 · [upstream release](https://github.com/rancher/rancher/releases/tag/v2.15.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
