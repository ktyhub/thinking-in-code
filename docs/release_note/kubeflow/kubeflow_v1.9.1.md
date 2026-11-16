---
title: "kubeflow v1.9.1"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.9.1"
version: "v1.9.1"
published: "2024-10-02"
type: "patch"
lang: "en"
summary: "This release was cut for Kubeflow Platform version 1.9.1."
---

# kubeflow v1.9.1

This release was cut for [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) version [__1.9.1__](https://www.kubeflow.org/docs/releases/kubeflow-1.9/).

__NOTE:__ the following release notes are __only__ for the components in the `kubeflow/kubeflow` repo.

## Significant Changes

- __This update ONLY makes changes to the default Kubeflow Notebooks images:__
     - The RStudio images now work better, and can install packages from the UI successfully.
     - Some packages have been updated, see the PR for details https://github.com/kubeflow/kubeflow/pull/7647
     - The new images can be used with __any__ version of Kubeflow Notebooks, see the [list of images](https://www.kubeflow.org/docs/components/notebooks/container-images/#official-images) and use the `v1.9.1` tag.
- __We now have official PyTorch Jupyter images for _Intel Gaudi_ accelerators:__
     - Pull the image here: `docker.io/kubeflownotebookswg/jupyter-pytorch-gaudi-full:v1.9.1`
     - We would also like to introduce official AMD images, please reach out if you can help.


## Features

### Notebook Images

* feat: update notebook server images by @thesuperzapper in https://github.com/kubeflow/kubeflow/pull/7647
* feat: add Intel Gaudi example notebook images by @tkatila in https://github.com/kubeflow/kubeflow/pull/7635

## New Contributors

* @tkatila made their first contribution in https://github.com/kubeflow/kubeflow/pull/7635

**Full Changelog**: https://github.com/kubeflow/kubeflow/compare/v1.9.0...v1.9.1

---

> **Source** [kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · `v1.9.1` · 2024-10-02 · [upstream release](https://github.com/kubeflow/kubeflow/releases/tag/v1.9.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
