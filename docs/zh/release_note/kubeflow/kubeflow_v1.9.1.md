---
title: "kubeflow v1.9.1"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.9.1"
version: "v1.9.1"
published: "2024-10-02"
type: "patch"
lang: "zh"
---

# kubeflow v1.9.1

此版本针对 [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) 版本 [__1.9.1__](https://www.kubeflow.org/docs/releases/kubeflow-1.9/) 进行了删减。

__注意：__ 以下 release note __仅__ 适用于 `kubeflow/kubeflow` 存储库中的组件。

## 重大变化

- __此更新仅对默认 Kubeflow Notebooks 映像进行更改：__
     - RStudio 映像现在工作得更好，并且可以从 UI 成功安装软件包。
     - 部分软件包已更新，详情请参阅 PR https://github.com/kubeflow/kubeflow/pull/7647
     - 新镜像可与 __any__ 版本的 Kubeflow Notebooks 一起使用，请参阅[镜像列表](https://www.kubeflow.org/docs/components/notebooks/container-images/#official-images) 并使用 `v1.9.1` 标签。
- __我们现在拥有_Intel Gaudi_加速器的官方 PyTorch Jupyter 映像：__
     - 将图像拉到此处：`docker.io/kubeflownotebookswg/jupyter-pytorch-gaudi-full:v1.9.1`
     - 我们还想介绍 AMD 官方镜像，如果您能提供帮助，请联系我们。


## 特点

### 笔记本图像

* 壮举：通过 @thesuperzapper 在 https://github.com/kubeflow/kubeflow/pull/7647 中更新笔记本服务器映像
* 壮举：在 https://github.com/kubeflow/kubeflow/pull/7635 中添加@tkatila 的 Intel Gaudi 示例笔记本图像

## 新贡献者

* @tkatila 在 https://github.com/kubeflow/kubeflow/pull/7635 中做出了第一个贡献

**完整 Changelog**：https://github.com/kubeflow/kubeflow/compare/v1.9.0...v1.9.1

---

> 📦 仓库：[kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · 🏷️ 版本：`v1.9.1` · 📅 发布：2024-10-02 · [查看英文原版 Release](https://github.com/kubeflow/kubeflow/releases/tag/v1.9.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
