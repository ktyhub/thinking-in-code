---
title: "kubeflow v1.9.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.9.0"
version: "v1.9.0"
published: "2024-07-16"
type: "minor"
lang: "en"
summary: "This release was cut for Kubeflow Platform version 1.9.0."
---

# kubeflow v1.9.0

This release was cut for [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) version [__1.9.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.9/).

__NOTE:__ the following release notes are __only__ for the components in the `kubeflow/kubeflow` repo.

## Significant Changes

### Central Dashboard

- Clean up homepage and group Kubeflow Pipelines sidebar links: https://github.com/kubeflow/kubeflow/pull/7583
- Manage contributors for all owned namespaces: https://github.com/kubeflow/kubeflow/pull/7582

### Kubeflow Notebooks

- Update default packages (Jupyter, VSCode, RStudio, PyTorch, Tensorflow, CUDA, etc): https://github.com/kubeflow/kubeflow/pull/7590
- Allow notebooks to run with restricted pod security contexts: https://github.com/kubeflow/kubeflow/pull/7622

## Features

### Central Dashboard

* feat(dashboard): allow using `{ns}` template in `externalLinks` by @MGSousa in https://github.com/kubeflow/kubeflow/pull/7138
* feat: big update for manage contributors page by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7582
* feat: update dashboard styles and links by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7583

### Notebook Images

* fix: jupyterlab runtime volume permissions by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7407
* fix: increase S6_CMD_WAIT_FOR_SERVICES_MAXTI… by @mishraprafful in https://github.com/kubeflow/kubeflow/pull/7496
* feat: update notebook server images by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7590
* fix: notebook server images with non-root SecurityContext by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7622

### Jupyter Web App

* Trim the custom Jupyter image string by @haoxins in https://github.com/kubeflow/kubeflow/pull/6529

### Profile Controller

* Make principals dynamic in Profiles Controller by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7310

### TensorBoard Controller

* feat: allow setting `ISTIO_HOST` in notebook/tensorboard controller for Istio VirtualServices by @punkerpunker in https://github.com/kubeflow/kubeflow/pull/6902

### PVC Viewer

* feat: make pvcviewer istio gateway configurable by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7351

## Fixes

### Central Dashboard

* centraldashboard: don't display `All namespaces` in Manage Contributors screen (#7188) by @utsumi-fj in https://github.com/kubeflow/kubeflow/pull/7242
* fix: update central dashboard to NodeJS 16 by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7578
* fix: incorrect references `DASHBOARD_LINKS_CONFIGMAP` env-var by @hhk7734 in https://github.com/kubeflow/kubeflow/pull/7264
* fix: email validation parity for profile creation by @mishraprafful in https://github.com/kubeflow/kubeflow/pull/7597

### Notebook Controller

* Only load spawner_ui_config.yaml once every 10 minutes. closes #7259 by @boarder7395 in https://github.com/kubeflow/kubeflow/pull/7260
* fix(notebook-controller): fix typo by @LiaoSirui in https://github.com/kubeflow/kubeflow/pull/7305
* fix(notebooks): add CRD validation for empty image and container by @mishraprafful in https://github.com/kubeflow/kubeflow/pull/7495
* fix: specify envtest version to avoid golang version format by @mishraprafful in https://github.com/kubeflow/kubeflow/pull/7589

### Profile Controller

* fix: remove creationTimestamp line by @Linchin in https://github.com/kubeflow/kubeflow/pull/7279
* fix: remove extra ) from env variables by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7378
* Pin env-test for Profiles Controller by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7591

### Jupyter Web App

* fix: set default GPU vendors list by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7320
* fix: KeyError on KF 1.8 by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7335
* wa(front): Make the background white of all webapps by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7341
* fix: local var shadowing import by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7375
* Handle edge case when node capacity is undefined gracefully. Closes #7280. by @boarder7395 in https://github.com/kubeflow/kubeflow/pull/7281
* fix: :label: Ensure username is returned by `get_username` as a string by @pashtet04 in https://github.com/kubeflow/kubeflow/pull/7457
* fix(crud-web-apps/jupyter): dict variable reference for `node.status.capacity` by @mishraprafful in https://github.com/kubeflow/kubeflow/pull/7485
* fix(notebooks): correctly handle `status.containerState` messages by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7585

### PVC Viewer

* fix: viewer-spec.yaml and trigger build by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7230
* Fix Profile-controller README file & sample files by @difince in https://github.com/kubeflow/kubeflow/pull/7244
* fix: downgrade filebrowser to v2.23.0 by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7247
* fix: pvcviewer tests by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7292
* chore: update default filebrowser version by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7390
* fix: return waiting on no pvcviewer status by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7350

### TensorBoard Web App

* fix: remove incorrect space in `TWA_APP_SECURE_COOKIES` config by @hhk7734 in https://github.com/kubeflow/kubeflow/pull/7274

### Central Dashboard (Angular Rewrite - Not Finished)

* fix: point to ~kubeflow/styles/fonts.scss by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7353

## Code Health

* Fix typo in centraldashboard/README.md by @eltociear in https://github.com/kubeflow/kubeflow/pull/6556
* docs: add 1.8 roadmap by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7132
* ci: fix test image replacement by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7263
* build(deps): bump gopkg.in/yaml.v3 from 3.0.0-20210107192922-496545a6307b to 3.0.0 in /components/notebook-controller by @dependabot in https://github.com/kubeflow/kubeflow/pull/7256
* ci: Build ARM images for core components by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7220
* build(deps): bump golang.org/x/net from 0.7.0 to 0.17.0 in /components/pvcviewer-controller by @dependabot in https://github.com/kubeflow/kubeflow/pull/7331
* Run build steps for multi-arch sequentially by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7333
* poddefaults: Bump golang to 1.20 by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7338
* ci: Ensure we publish for all architectures by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7343
* ci: Push the multi-arch image for specific tag by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7345
* build(deps): bump word-wrap from 1.2.3 to 1.2.4 in /components/centraldashboard-angular/backend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7216
* build(deps-dev): bump word-wrap from 1.2.3 to 1.2.4 in /components/centraldashboard-angular/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7217
* build(deps-dev): bump @babel/traverse from 7.20.1 to 7.23.2 in /components/centraldashboard-angular/backend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7361
* build(deps-dev): bump @babel/traverse from 7.20.1 to 7.23.2 in /components/centraldashboard-angular/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7362
* ci: fix version tagging of notebook server images by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7386
* build(deps): bump yargs-parser and concurrently in /components/centraldashboard-angular/backend by @dependabot in https://github.com/kubeflow/kubeflow/pull/6773
* build(deps): bump engine.io and socket.io in /components/centraldashboard-angular/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7117
* ci: prevent triggering release builds accidentally by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7401
* build(deps): bump golang.org/x/crypto from 0.14.0 to 0.17.0 in /components/pvcviewer-controller by @dependabot in https://github.com/kubeflow/kubeflow/pull/7427
* chore: cleanup inactive owners by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7402
* chore (manifests): Fixes centraldashboard for kustomize 5 by @alekseyolg in https://github.com/kubeflow/kubeflow/pull/7451
* build(deps): bump @babel/traverse from 7.14.7 to 7.23.2 in /components/crud-web-apps/tensorboards/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7355
* build(deps): bump @babel/traverse from 7.14.7 to 7.23.2 in /components/crud-web-apps/volumes/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7356
* build(deps): bump golang.org/x/net from 0.0.0-20210825183410-e898025ed96a to 0.17.0 in /components/tensorboard-controller by @dependabot in https://github.com/kubeflow/kubeflow/pull/7329
* build(deps): bump debug from 4.1.1 to 4.3.4 in /components/crud-web-apps/tensorboards/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7307
* build(deps): bump debug from 4.1.1 to 4.3.4 in /components/crud-web-apps/volumes/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7308
* build(deps): bump debug from 4.1.1 to 4.3.4 in /components/crud-web-apps/jupyter/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7309
* build(deps-dev): bump fsevents from 1.2.9 to 1.2.13 in /components/centraldashboard by @dependabot in https://github.com/kubeflow/kubeflow/pull/7324
* build(deps): bump golang.org/x/net from 0.0.0-20200625001655-4c5254603344 to 0.17.0 in /components/access-management by @dependabot in https://github.com/kubeflow/kubeflow/pull/7327
* build(deps): bump @babel/traverse from 7.14.7 to 7.23.2 in /components/crud-web-apps/jupyter/frontend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7358
* build(deps-dev): bump @babel/traverse from 7.6.2 to 7.23.2 in /components/centraldashboard by @dependabot in https://github.com/kubeflow/kubeflow/pull/7360
* build(deps): bump urllib3 from 1.25.7 to 1.26.18 in /components/crud-web-apps/common/backend/kubeflow/kubeflow/crud_backend by @dependabot in https://github.com/kubeflow/kubeflow/pull/7363
* Add KSC members to approvers in OWNERS by @terrytangyuan in https://github.com/kubeflow/kubeflow/pull/7492
* Add Kubeflow 1.9 release roadmap by @rimolive in https://github.com/kubeflow/kubeflow/pull/7461
* Add CLOMonitor badges to project's README.md by @sandipantech in https://github.com/kubeflow/kubeflow/pull/7484
* docs: update example notebooks spec by @jlewi in https://github.com/kubeflow/kubeflow/pull/7107
* chore: update pvcviewer dependencies by @TobiasGoerke in https://github.com/kubeflow/kubeflow/pull/7561
* releasing: Bump all manifests for RC0 by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7592
* Release 1.9.0-rc.1 by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7620

## New Contributors
* @difince made their first contribution in https://github.com/kubeflow/kubeflow/pull/7244
* @Linchin made their first contribution in https://github.com/kubeflow/kubeflow/pull/7279
* @eltociear made their first contribution in https://github.com/kubeflow/kubeflow/pull/6556
* @boarder7395 made their first contribution in https://github.com/kubeflow/kubeflow/pull/7260
* @tzstoyanov made their first contribution in https://github.com/kubeflow/kubeflow/pull/7322
* @LiaoSirui made their first contribution in https://github.com/kubeflow/kubeflow/pull/7305
* @utsumi-fj made their first contribution in https://github.com/kubeflow/kubeflow/pull/7242
* @pashtet04 made their first contribution in https://github.com/kubeflow/kubeflow/pull/7457
* @alekseyolg made their first contribution in https://github.com/kubeflow/kubeflow/pull/7451
* @rimolive made their first contribution in https://github.com/kubeflow/kubeflow/pull/7461
* @sandipantech made their first contribution in https://github.com/kubeflow/kubeflow/pull/7484
* @MGSousa made their first contribution in https://github.com/kubeflow/kubeflow/pull/7138
* @punkerpunker made their first contribution in https://github.com/kubeflow/kubeflow/pull/6902
* @hhk7734 made their first contribution in https://github.com/kubeflow/kubeflow/pull/7274

**Full Changelog**: https://github.com/kubeflow/kubeflow/compare/v1.8.0...v1.9.0

---

> **Source** [kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · `v1.9.0` · 2024-07-16 · [upstream release](https://github.com/kubeflow/kubeflow/releases/tag/v1.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
