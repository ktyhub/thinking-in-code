---
title: "kubeflow v1.5.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.5.0"
version: "v1.5.0"
published: "2022-03-10"
type: "minor"
lang: "zh"
---

# kubeflow v1.5.0

此版本针对 [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) 版本 [__1.5.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.5/) 进行了删减。

__注意：__ 以下 release note __仅__ 适用于 `kubeflow/kubeflow` 存储库中的组件。

## 升级注意事项

1. 使用新的存储结构 https://github.com/kubeflow/kubeflow/pull/6321 更新 Jupyter Web 应用程序配置映射
2. 笔记本控制器使用不同的 ENV 变量来剔除 https://github.com/kubeflow/kubeflow/blob/master/components/proposals/20220121-jupyter-notebook-idleness.md#upgrade-notes
3. 配置文件控制器正在添加不同的 Katib 指标标签 https://github.com/kubeflow/kubeflow/pull/6225

## 特点

* 笔记本：扩展笔记本控制器以暴露 Jupyter #6297 @athamark 的空闲状态 
* jwa：重新设计网络应用程序的存储 API #6321 @kimwnasptd 
* 更改 Katib 指标收集器注入的命名空间标签 #6225 @andreyvelich 
* 告诉用户选择一个命名空间来访问命名空间菜单项 #6181 @toshi-k 
* 前端：使用响应式表格而不是卡片#6316 @kimwnasptd 
* 修复（清单）：将 rbac.authorization.k8s.io 从 v1beta1 升级到 v1 #6261 @haoxins 
* 将 jupyter-web-application 角色与 clusterrole 同步 #6241 @juliusvonkohout 

## 修复

* 安全访问 KFAM #6077 @DavidSpek  
* 修复（后端）：tensorboard-controller 由于缺少权限而无法工作 #6216 @juliusvonkohout 
* 修复（笔记本）使剔除适用于多用户 #5980 @LEDfan 
* 笔记本：优雅地处理事件#6338 @kimwnasptd 
* 笔记本：修复无休止的重启#6341 @kimwnasptd 
* Centraldashboard/添加未捕获异常处理程序#6203 @haoxins 
* 修复仪表板向 kfam 发送格式错误的标头 #6186 @thesuperzapper

---

> 📦 仓库：[kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · 🏷️ 版本：`v1.5.0` · 📅 发布：2022-03-10 · [查看英文原版 Release](https://github.com/kubeflow/kubeflow/releases/tag/v1.5.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
