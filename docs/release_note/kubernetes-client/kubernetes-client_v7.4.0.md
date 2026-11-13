---
title: "kubernetes-client v7.4.0"
project: "kubernetes-client"
repo: "fabric8io/kubernetes-client"
tag: "v7.4.0"
published: "2025-09-08"
type: "minor"
lang: "en"
summary: "Fix #7204: Rationalized config constructors"
---

# kubernetes-client v7.4.0

#### Bugs
- Fix #3032: EnableKubernetesMockClient annotation works with Nested tests
- Fix #7148: corrected octal format detection
- Fix #7167: Allow Informer.isWatching to see underlying Watch state
- Fix #7087: Avoid possible NPE in OkHttp websocket handling
- Fix #7072: Changed rolling update handling to json merge patch to avoid 422 errors
- Fix #7080: Avoid NPE in CRDGenerator if post-processor is set to null
- Fix #7116: (java-generator) Use timezone format compatible with Kubernetes
- Fix #7163: Ensure that streams are notified of errors
- Fix #7092: (crd-generator) Add support for @Annotations and @Labels in CRD generation - CRD generator now includes annotations and labels specified via these annotations in the generated CRD metadata
- Fix #7224: Fix KubeApiTest inheritance from base test class

#### Improvements
 * Fix #7217: refinements and expanded documentation for preserve unknown handling

#### Dependency Upgrade

#### New Features
- Fix #7045: (java-generator)  Extend the existingJavaTypes to support use of existing enumerations

#### _**Note**_: Breaking changes
Fix #7204: Rationalized config constructors

## New Contributors
* @GWphua made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7109
* @il-kyun made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7189

**Full Changelog**: https://github.com/fabric8io/kubernetes-client/compare/v7.3.1...v7.4.0

---

> **Source** [fabric8io/kubernetes-client](https://github.com/fabric8io/kubernetes-client) · `v7.4.0` · 2025-09-08 · [upstream release](https://github.com/fabric8io/kubernetes-client/releases/tag/v7.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
