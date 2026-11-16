---
title: "kubeflow v1.7.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.7.0"
version: "v1.7.0"
published: "2023-03-29"
type: "minor"
lang: "en"
summary: "This release was cut for Kubeflow Platform version 1.7.0."
---

# kubeflow v1.7.0

This release was cut for [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) version [__1.7.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.7/).

__NOTE:__ the following release notes are __only__ for the components in the `kubeflow/kubeflow` repo.

## Features

* Add support for command and args in PodDefault #6542 @alembiewski
* Extend PodDefaults for support for imagePullSecrets #6600 @kimwnasptd
* add support of initContainers and sideCars in poddefault #6749 @deepk2u
* Sorting support for JWA #6742 @elenzio9
* Sorting support for VWA and TWA #6743 @elenzio9
* Filtering support for the web apps #6754 @elenzio9
* jwa(front): Add details page functionalities & unit tests #6822 @orfeas-k
* jwa(front): Add YAML tab to Notebook details page #6790 @orfeas-k
* jwa(front): Add LOGS tab to the notebook details page #6779 @orfeas-k
* jwa: Add EVENTS tab to Notebook details page #6782 @orfeas-k
* VWA: Create Volume details page #6788 @orfeas-k
* vwa(front): Add YAML tab to Volume details page #6823 @elenzio9
* jwa(front): Rework the create page #6826 @elenzio9 
* jwa(front): Link to VWA details page #6857 @orfeas-k
* web-apps(front): Sort events & conditions tables by date #6858 @orfeas-k
* jwa: Support for showing Notebooks from all namespaces #6706 @kimwnasptd
* web-apps: Add support for all-namespaces in the Volumes and TensorBoards web apps #6778 @kimwnasptd
* Support Pod Defaults in Tensorboard Web App https://github.com/kubeflow/kubeflow/pull/6924 @surajkota
* Support Pod Defaults in Tensorboard controller #6874 @surajkota
* Extend Docker Publish workflows to be triggered on Version change https://github.com/kubeflow/kubeflow/pull/6849 @apo-ger

## Fixes

* Fix notebook culling #6659 @apo-ger
* [vwa-datetime] Showing dates in main page uniformly in VWA #6683 @elenzio9
* tensorboard-controller: Fix tensorboard endless restarts #6722 @oshep
* web-apps: Ensure in-flight requests are cancelled #6718 @kimwnasptd
* fix setting readOnly on gpus #6735 @thesuperzapper
* jwa(front): Auto update mount path #6875 @tasos-ale
* rstudio: Update version to properly handle X-Forwarded headers #6890 @kimwnasptd
* vwa(front): Prevent PVCs from being deleted when there is a corresponding notebook https://github.com/kubeflow/kubeflow/pull/6899 @orfeas-k
* Fix the logout button to work with the recent version of oidc-authservice https://github.com/kubeflow/kubeflow/pull/6609 @alembiewski
* [wa-actual-links-in-tables] Make links in our table component actual links #6864 @elenzio9
* centraldashboard: Add support for apps in new windows #6750 @tasos-ale
* [wa-age-column-improvements] Improvements in the web app's age column #6694 @elenzio9
* Fix the bug of ResourceQuota removal https://github.com/kubeflow/kubeflow/pull/6188 @sunzhaochang
* centraldashboard: Support dynamic logout URL  https://github.com/kubeflow/kubeflow/pull/6945 @orfeas-k

## Code health

* crud-web-apps: Apply ng lint #6580 @haoxins
* Fix ng lint #6586 @haoxins
* Bump Jupyter web app to Python 3.8 #6562 @xiaoxq
* web-apps: Common code for all-namespaces #6730 @kimwnasptd
* Upgrade @angular/material in WAs #6763 @elenzio9
* jwa(front): Use new Editor component #6775 @orfeas-k
* jwa(front): Fix unit tests #6804 @elenzio9
* twa(front): Fix unit tests #6824 @elenzio9
* web-apps(front): Enable source maps in WAs #6787 @elenzio9
* vwa(front): Add UI tests with Cypress #6862 @orfeas-k
* web-apps(front): Install prettier and create a frontend workflow #6853 @elenzio9
* vwa(front): Add formatting/linting to VWA's frontend workflow #6852 @elenzio9
* centraldashboard-angular(front): Add library.js, source-maps & ESLint #6846 @orfeas-k
* Implement a culling controller for Notebooks #6807 @apo-ger
* jwa(front): Add UI tests with Cypress #6891 @orfeas-k
* twa(front): Add UI tests with Cypress #6896 @orfeas-k
* Update KF manifests and gh-action workflows to use the tag=latest #6854 @apo-ger
* Fix workflows for publishing images only when PR is merged #6842 @apo-ger
* profile-controller: Extend tests for using images of each PR https://github.com/kubeflow/kubeflow/pull/6820 @apo-ger
* Fix the logout button to work with the recent version of oidc-authservice https://github.com/kubeflow/kubeflow/pull/6609 @alembiewski

---

> **Source** [kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · `v1.7.0` · 2023-03-29 · [upstream release](https://github.com/kubeflow/kubeflow/releases/tag/v1.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
