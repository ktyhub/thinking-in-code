---
title: "kubeflow v1.4.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.4.0"
version: "v1.4.0"
published: "2021-10-11"
type: "minor"
lang: "zh"
---

# kubeflow v1.4.0

此版本针对 [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) 版本 [__1.4.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.4/) 进行了删减。

__注意：__ 以下 release note __仅__ 适用于 `kubeflow/kubeflow` 存储库中的组件。

## 网络应用程序

* 从 8 迁移到 Angular 12：https://github.com/kubeflow/kubeflow/pull/6004 @DavidSpek 
* 国际化进展：
    * Web 应用程序的国际化 https://github.com/kubeflow/kubeflow/pull/5880 @wg102、@Jose-Matsuda
    * 使用 Angular 的 i18n 解决方案 https://github.com/kubeflow/kubeflow/pull/6065 @kimwnasptd 

## 中央仪表板

* 命名空间菜单项 https://github.com/kubeflow/kubeflow/pull/5995 @toshi-k
* 可以添加命名空间菜单项#5871 @toshi-k 
* 可滚动侧边栏 https://github.com/kubeflow/kubeflow/pull/5964 @toshi-k
* 添加对模型网络应用程序 https://github.com/kubeflow/kubeflow/pull/6085 @kimwnasptd 的支持 

## Jupyter Web 应用程序

* Jupyter Web 应用程序修复了自动缩放 GPU 节点组 https://github.com/kubeflow/kubeflow/pull/6171 @kimwnasptd
* 修复 Jupyter Web 应用程序中 limitFactor 为空时的限制计算 #6058 @kimwnasptd 
* 使 jupyter-web-app 解析工作空间卷 MountPath #5952 @anencore94 
* JWA：不要用徽标 ConfigMap 覆盖资产 #5942 @kimwnasptd 
* 将字体作为资产添加到服务#5691 @saffaalvi @wg102 
* GPU 数量必须设置为字符串 #5891 @juliusvonkohout 

## 笔记本控制器

* 删除虚拟服务超时以防止 websocket 断开连接 #6126 @abe-hpe 
* 更正控制器 watch 中缺失的谓词#5873 @filintod 
* 改进示例笔记本服务器 https://github.com/kubeflow/kubeflow/pull/6165 @thesuperzapper 的自述文件 

## TensorBoard 控制器
*tensorboard-controller：修复绑定问题#5925 @DavidSpek 

## 准入 Webhook (PodDefaults)

* PodDefaults、TensorBoard 控制器和 KFAM https://github.com/kubeflow/kubeflow/pull/6180 的 Bump Golang 版本 @kimwnasptd 
* 使用 PodDefaults https://github.com/kubeflow/kubeflow/pull/6052 中的准入审核中的命名空间 @henrysecond1 
* 添加对 ServiceAccountName 和 AutomountServiceAccountName 的支持到 PodDefaults #5939 @hopper-signifyd 

## 其他变化

* 在 CI/CD https://github.com/kubeflow/kubeflow/pull/5919 中添加 kustomize 测试 @DavidSpek 
* Volumes Web 应用程序 https://github.com/kubeflow/kubeflow/pull/5820 @kimwnasptd 的格式检查 
* 使 i18n 与前缀 https://github.com/kubeflow/kubeflow/pull/6034 @kimwnasptd 一起工作 
* 允许用户使用 ConfigMap 添加/删除用户命名空间的标签 #5761 @zijianjoy

---

> 📦 仓库：[kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · 🏷️ 版本：`v1.4.0` · 📅 发布：2021-10-11 · [查看英文原版 Release](https://github.com/kubeflow/kubeflow/releases/tag/v1.4.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
