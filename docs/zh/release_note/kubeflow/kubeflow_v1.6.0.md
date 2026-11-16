---
title: "kubeflow v1.6.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.6.0"
version: "v1.6.0"
published: "2022-09-07"
type: "minor"
lang: "zh"
---

# kubeflow v1.6.0

此版本针对 [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) 版本 [__1.6.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.6/) 进行了删减。

__注意：__ 以下 release note __仅__ 适用于 `kubeflow/kubeflow` 存储库中的组件。

## 升级注意事项

* 该项目使用 DockerHub 托管图像而不是 ECR 图像 https://github.com/kubeflow/kubeflow/pull/6548. 用户将需要相应地更新其 ovelays 

## 特点

* 在笔记本管理网络应用 https://github.com/kubeflow/kubeflow/pull/6544 @kimwnasptd 中暴露笔记本闲置情况
* 笔记本控制器 QPS 和突发 https://github.com/kubeflow/kubeflow/pull/6453 @mofanke
* 如果笔记本组没有任何图像，则不显示 https://github.com/kubeflow/kubeflow/pull/6482 @haoxins
* 为配置文件控制器 https://github.com/kubeflow/kubeflow/pull/6491 升级 Kubebuilder @apo-ger

## 修复

* 在 PodDefaults webhook https://github.com/kubeflow/kubeflow/pull/6581 @manolis-andr 中重新加载证书
* 笔记本控制器和 K8s 1.22 https://github.com/kubeflow/kubeflow/pull/6374 @samuelvl
* PodDefaults 和 K8s 1.22 https://github.com/kubeflow/kubeflow/pull/6459 @aaron-arellano
* TensorBoard 和 K8s 1.22 https://github.com/kubeflow/kubeflow/pull/6406 @alembiewski
* 允许笔记本控制器修补事件 https://github.com/kubeflow/kubeflow/pull/6523 @henrysecond1

---

> 📦 仓库：[kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · 🏷️ 版本：`v1.6.0` · 📅 发布：2022-09-07 · [查看英文原版 Release](https://github.com/kubeflow/kubeflow/releases/tag/v1.6.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
