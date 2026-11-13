---
title: "kubernetes-client v7.5.0"
project: "kubernetes-client"
repo: "fabric8io/kubernetes-client"
tag: "v7.5.0"
published: "2026-01-09"
type: "minor"
lang: "en"
summary: "Users should migrate to admissionregistration.v1.ValidatingAdmissionPolicy for GA APIs."
---

# kubernetes-client v7.5.0

#### Bugs
- Fix #7160: Use the duration from current leader record, not from the config
- Fix #7343: Leader election callbacks to be called only once (instead of 2)
- Fix #7347: Ensure vert.x websockets handle multiple frames
- Fix #7356: ensure request config is preserved when adapting to OpenShiftClient
- Fix #7369: Fix typo in warning log messages
- Fix #7373: (crd-generator) Improve SchemaCustomizer with @Repeatable support and better exception messages
- Fix #7380: Go openAPI generator errors out when embedded structs have conflicting JSON field names
- Fix #7388: Type filters fix for conflicting types - OpenAPI generator
- Fix #7372: Service Port-Forwarding ignores Service port mapping

#### Improvements
- Fix #7277: fix BOM publish to Maven Central
- Fix #7345: skip publishing test and example modules to Maven Central

#### Dependency Upgrade
- Fix #7266: bump jackson-bom from 2.19.2 to 2.20.0, fix overrides and handle jackson-annotations v2.20
- Fix #7293: bump vertx.version from 4.5.14 to 4.5.21
- Fix #7358: (openapi) update Gateway API from 1.2.1 to 1.4.0
- Fix #7361: (openapi) update Istio from 1.27 to 1.28

#### New Features
- Fix #5081: Add support for streaming lists via Watchable.streamingList method
- Fix #7048: Support for Kubernetes v1.34 (Of Wind & Will)
- Fix #7371: Update Fabric8 OpenShift Model as per OpenShift 4.20
- Fix #7355: (crd-generator) Add SchemaCustomizer annotation for advanced schema modification

#### _**Note**_: Breaking changes
- Fix #7048: **admissionregistration.v1beta1**: Removed `ValidatingAdmissionPolicy` and related classes (`ValidatingAdmissionPolicyBinding`, `AuditAnnotation`, `Validation`, `ValidatingAdmissionPolicyBindingSpec`) from `v1beta1` as they have graduated to GA in `admissionregistration.v1`. `MutatingAdmissionPolicy` has been promoted from `v1alpha1` to `v1beta1`. The `V1beta1AdmissionRegistrationAPIGroupDSL` and  `V1beta1AdmissionRegistrationAPIGroupClient` have been updated accordingly.
  Users should migrate to `admissionregistration.v1.ValidatingAdmissionPolicy` for GA APIs.
- Fix #7266: bump jackson-bom from 2.19.2 to 2.20.0, fix overrides and handle jackson-annotations v2.20
- Fix #7388: **openshift-model-installer**: The `openshift-model-installer` module is now deprecated and will be removed in a future release. Please migrate away from using this module and its models.

## New Contributors
* @piotrpdev made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7293
* @ash-thakur-rh made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7326

**Full Changelog**: https://github.com/fabric8io/kubernetes-client/compare/v7.4.0...v7.5.0

---

> **Source** [fabric8io/kubernetes-client](https://github.com/fabric8io/kubernetes-client) · `v7.5.0` · 2026-01-09 · [upstream release](https://github.com/fabric8io/kubernetes-client/releases/tag/v7.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
