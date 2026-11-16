---
title: "kubeflow v1.8.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.8.0"
version: "v1.8.0"
published: "2023-11-01"
type: "minor"
lang: "en"
summary: "This release was cut for Kubeflow Platform version 1.8.0."
---

# kubeflow v1.8.0

This release was cut for [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) version [__1.8.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.8/).

__NOTE:__ the following release notes are __only__ for the components in the `kubeflow/kubeflow` repo.

## Features

* Adding support for linux/ppc64le in CI for centraldashboard multi-arc… by @amitmukati-2604 in https://github.com/kubeflow/kubeflow/pull/6923
* cdb-angular: Show KF version by @orfeas-k in https://github.com/kubeflow/kubeflow/pull/6918
* Support Pod Defaults in Tensorboard Web App by @surajkota in https://github.com/kubeflow/kubeflow/pull/6924
* centraldashboard: Support dynamic logout URL by @orfeas-k in https://github.com/kubeflow/kubeflow/pull/6945
* centraldashboard: Allow all-namespaces option for kwa by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/6958
* cdb(front): Fetch left sidebar links by @orfeas-k in https://github.com/kubeflow/kubeflow/pull/6953
* clean up default `spawner_ui_config.yaml` by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/6736
* profile-controller: Support custom cluster domain other than cluster.local by @avintonOfficial in https://github.com/kubeflow/kubeflow/pull/7016
* Fix: Strip unwanted space in custom image name by @midhun1998 in https://github.com/kubeflow/kubeflow/pull/7026
* centraldashboard: Allow all-namespaces option for mwa by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/6995
* Update requirements.txt by @beliaev-maksim in https://github.com/kubeflow/kubeflow/pull/7050
* cdb(front): Add namespace selector by @orfeas-k in https://github.com/kubeflow/kubeflow/pull/7030
* cdb(front): Introduce 404 not found page  by @orfeas-k in https://github.com/kubeflow/kubeflow/pull/7071
* centraldashboard: namespace value coming from env variable. Fixes #7063 by @deepk2u in https://github.com/kubeflow/kubeflow/pull/7064
* Fix 5007 by adding build ver. to multi-arch build by @lehrig in https://github.com/kubeflow/kubeflow/pull/7094
* feat(centraldashboard): Displaying metrics from Prometheus by @axel7083 in https://github.com/kubeflow/kubeflow/pull/7116
* Re-Introducing the Volumes Viewer by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/6876
* (frontend): Adding style for main drawer scrollbar by @axel7083 in https://github.com/kubeflow/kubeflow/pull/7211
* feature(notebook): Adding creator user-id to annotation by @axel7083 in https://github.com/kubeflow/kubeflow/pull/7198
* feat(notebooks): propagate annotations from notebook cr to pods by @moorthy156 in https://github.com/kubeflow/kubeflow/pull/7076
* [wa-theme-typography]: Define theme and typography by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/7062
* Add PVCViewer Frontend Integration by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7179
* Make principals dynamic in Profiles Controller (#7310) by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7336
* Cherry-pick: PodDefaults versions bump #7322 and #7338 by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7337
* Cherry-pick: ARM build PRs #7220 #7333 #7343 #7345 by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7342
* Cherry-pick: Make the background white of all webapps (#7341) by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7346
* feat: make pvcviewer istio gateway configurable (#7351) by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7381
* feat: update notebook server images + support ARM64 (#7357) by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7382

## Fixes

* vwa(front): Prevent PVCs from being deleted when there is a corresponding notebook by @orfeas-k in https://github.com/kubeflow/kubeflow/pull/6899
* Fix the logout button to work with the recent version of `oidc-authservice` by @alembiewski in https://github.com/kubeflow/kubeflow/pull/6609
* Fix the bug of ResourceQuota removal by @sunzhaochang in https://github.com/kubeflow/kubeflow/pull/6188
* cdb-angular(front): Add UI tests by @orfeas-k in https://github.com/kubeflow/kubeflow/pull/6895
* Add approvers to the frontends by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/6929
* web-apps(front): Fix the action component by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/6967
* jwa(front): JWA shows a weird long value for memory when restoring notebook from snapshot  by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/6897
* web-apps(front): Fix typos by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/7017
* jwa(front): Fix the workspace volume form's inputs by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/7029
* web-apps(back): Fetch resources events by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/7019
* jwa: Improve how JWA exposes errors by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/6952
* Update models.svg by @juliusvonkohout in https://github.com/kubeflow/kubeflow/pull/7113
* Profile controller and KFAM allow unauthenticated in-cluster traffic by @johnhoman in https://github.com/kubeflow/kubeflow/pull/7032
* fix(api_default.go): resolve write response call order by @Souheil-Yazji in https://github.com/kubeflow/kubeflow/pull/7200
* fix: remove superfluous space in docker builds by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7224
* fix: set default GPU vendors list by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7321
* fix: KeyError and line length by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7339
* Cherry-pick: Only load spawner_ui_config.yaml once every 10 minutes. closes #7259 by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7340
* fix: point to ~kubeflow/styles/fonts.scss by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7352
* fix: local var shadowing import by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7376
* fix: remove extra ) from env variables by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7379
* fix: downgrade jupyterlab to 3.6.6 (#7398) by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7400

## Code Health

* build(deps): bump cacheable-request and @kubernetes/client-node in /components/centraldashboard-angular/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/6951
* Update GH Action script for installing Cert Manager by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/6921
* build(deps): bump json5 from 1.0.1 to 1.0.2 in /components/crud-web-apps/tensorboards/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/6877
* build(deps): bump json5 from 1.0.1 to 1.0.2 in /components/crud-web-apps/common/frontend/kubeflow-common-lib by @dependabot in https://github.com/kubeflow/kubeflow/pull/6878
* centraldashboard: Fix failing test  by @orfeas-k in https://github.com/kubeflow/kubeflow/pull/6959
* centraldashboard(make): Use correct dir by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/6960
* centraldashboard: Don't run tests in docker build by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/6961
* GH Action for Admission webhook unit tests by @deepk2u in https://github.com/kubeflow/kubeflow/pull/6893
* build(deps): bump json5 from 1.0.1 to 1.0.2 in /components/crud-web-apps/volumes/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/6881
* build(deps): bump json5 from 1.0.1 to 1.0.2 in /components/crud-web-apps/jupyter/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/6880
* build(deps): bump json5 from 1.0.1 to 1.0.2 in /components/centraldashboard-angular/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/6883
* build(deps): bump ua-parser-js from 0.7.32 to 0.7.33 in /components/centraldashboard-angular/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/6905
* build(deps): bump ua-parser-js from 0.7.32 to 0.7.33 in /components/centraldashboard by @dependabot in https://github.com/kubeflow/kubeflow/pull/6906
* build(deps): bump ua-parser-js from 0.7.31 to 0.7.33 in /components/crud-web-apps/tensorboards/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/6907
* build(deps): bump ua-parser-js from 0.7.31 to 0.7.33 in /components/crud-web-apps/volumes/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/6908
* build(deps): bump github.com/prometheus/client_golang from 1.11.0 to 1.11.1 in /components/notebook-controller by @dependabot in https://github.com/kubeflow/kubeflow/pull/6955
* build(deps): bump github.com/prometheus/client_golang from 1.11.0 to 1.11.1 in /components/tensorboard-controller by @dependabot in https://github.com/kubeflow/kubeflow/pull/6956
* build(deps): bump github.com/prometheus/client_golang from 0.9.2 to 1.11.1 in /components/access-management by @dependabot in https://github.com/kubeflow/kubeflow/pull/6957
* Document the release process for Notebooks by @annajung in https://github.com/kubeflow/kubeflow/pull/6976
* jwa: Remove all the Rok references by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/6985
* vwa: Remove all the Rok references by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/6984
* build(deps): bump golang.org/x/sys from 0.0.0-20211029165221-6e7872819dc8 to 0.1.0 in /components/admission-webhook by @dependabot in https://github.com/kubeflow/kubeflow/pull/7008
* [Profile controller IAM plugin] update readme for aws plugin by @ryansteakley in https://github.com/kubeflow/kubeflow/pull/6996
* gh-actions(cdb): Fix Build and Publish action by @orfeas-k in https://github.com/kubeflow/kubeflow/pull/7031
* web-apps: Remove all the Rok references by @elenzio9 in https://github.com/kubeflow/kubeflow/pull/7020
* testing: Cleanup the testing dir and add gh actions placeholder folder by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/6535
* remove dangerous links from readme by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7044
* Adding changes to build JWA on pull_request by @amitmukati-2604 in https://github.com/kubeflow/kubeflow/pull/6992
* Adding changes to build admission-webhook on pull_request by @amitmukati-2604 in https://github.com/kubeflow/kubeflow/pull/7055
* Adding changes to build multi arch images on pull_request for VWA. by @amitmukati-2604 in https://github.com/kubeflow/kubeflow/pull/7052
* Adding changes to build nb-controller on pull_request by @amitmukati-2604 in https://github.com/kubeflow/kubeflow/pull/7054
* Training operator conformance test driver by @nagar-ajay in https://github.com/kubeflow/kubeflow/pull/7056
* Fix Python linting by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7060
* katib conformance test setup by @nagar-ajay in https://github.com/kubeflow/kubeflow/pull/7100
* feat(conformance): create v1.7 conformance test directory by @james-jwu in https://github.com/kubeflow/kubeflow/pull/7123
* Create Security Team Folder and place holder files for items that need to be added.  by @akgraner in https://github.com/kubeflow/kubeflow/pull/7043
* proposal: Introduce a PVCViewer Controller in Kubeflow by @apo-ger in https://github.com/kubeflow/kubeflow/pull/6941
* Bump go module versions to patch CVEs. by @dlorenc in https://github.com/kubeflow/kubeflow/pull/7151
* build(deps): bump socket.io-parser from 4.2.1 to 4.2.3 in /components/crud-web-apps/jupyter/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7145
* build(deps): bump socket.io-parser from 4.2.1 to 4.2.3 in /components/centraldashboard by @dependabot in https://github.com/kubeflow/kubeflow/pull/7143
* build(deps): bump socket.io-parser from 4.2.1 to 4.2.3 in /components/centraldashboard-angular/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7144
* centraldashboard: removed critical vulnerabilities from centraldashboard image Fixes #7098 by @deepk2u in https://github.com/kubeflow/kubeflow/pull/7102
* build(deps): bump golang.org/x/net from 0.0.0-20220722155237-a158d28d115b to 0.7.0 in /components/pvcviewer-controller by @dependabot in https://github.com/kubeflow/kubeflow/pull/7167
* Disabling multi-arch builds for PRs and enable them on Merge for JWA, NB Controller, AWH & TB Controller by @pranavpandit1 in https://github.com/kubeflow/kubeflow/pull/7171
* Adding changes to build profile-controller and admission-webhook images on pull_request. by @amitmukati-2604 in https://github.com/kubeflow/kubeflow/pull/7068
* Add GH action integration testing pvcviewer controller by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7175
* build(deps-dev): bump word-wrap from 1.2.3 to 1.2.4 in /components/crud-web-apps/volumes/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7215
* fix: deprecation of 'go get' for installing modules by @feiyudev in https://github.com/kubeflow/kubeflow/pull/7177
* Disabling multi-arch builds for PRs and enable them on Merge for Profile Controller, Profile+KFAM, VWA &TWA by @pranavpandit1 in https://github.com/kubeflow/kubeflow/pull/7183
* Add GH action unit testing pvcviewer controller by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7174
* Add GH action building pvcviewer controller by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7173
* Add cert-manager install to pvcviewer tests by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7219
* Update  PVCViewer manifests by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7178
* resolve build exception generated due to latest gevent version. by @pranavpandit1 in https://github.com/kubeflow/kubeflow/pull/7231
* cherry-pick 194a725 into v1.8-branch #7263 by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7270
* [kubeflow 1.8] release: bump container images to tag 1.8.0-rc.0 and bump release version by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7234
* Cherry-Pick #7230 into v1.8-branch by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7237
* ci: wait for deployment instead of pods for test execution by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7289
* Release v1.8.0-rc.1 by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7286
* ci: bump golang version 1.17->1.20 by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7348
* Release v1.8.0-rc.2 by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7347
* Release v1.8.0-rc.3 by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7380
* Release v1.8.0-rc.4 by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7383
* ci: fix version tagging of notebook server images (#7386) by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7387
* Release v1.8.0-rc.5 by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7388
* Release v1.8.0-rc.6 by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7399
* ci: prevent triggering release builds accidentally (#7401) by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7403
* Release v1.8.0 by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7404

## New Contributors
* @avintonOfficial made their first contribution in https://github.com/kubeflow/kubeflow/pull/7016
* @beliaev-maksim made their first contribution in https://github.com/kubeflow/kubeflow/pull/7050
* @nagar-ajay made their first contribution in https://github.com/kubeflow/kubeflow/pull/7056
* @akgraner made their first contribution in https://github.com/kubeflow/kubeflow/pull/7043
* @dlorenc made their first contribution in https://github.com/kubeflow/kubeflow/pull/7151
* @lehrig made their first contribution in https://github.com/kubeflow/kubeflow/pull/7094
* @axel7083 made their first contribution in https://github.com/kubeflow/kubeflow/pull/7116
* @feiyudev made their first contribution in https://github.com/kubeflow/kubeflow/pull/7177
* @johnhoman made their first contribution in https://github.com/kubeflow/kubeflow/pull/7032
* @Souheil-Yazji made their first contribution in https://github.com/kubeflow/kubeflow/pull/7200
* @moorthy156 made their first contribution in https://github.com/kubeflow/kubeflow/pull/7076

**Full Changelog**: https://github.com/kubeflow/kubeflow/compare/v1.7.0...v1.8.0

---

> **Source** [kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · `v1.8.0` · 2023-11-01 · [upstream release](https://github.com/kubeflow/kubeflow/releases/tag/v1.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
