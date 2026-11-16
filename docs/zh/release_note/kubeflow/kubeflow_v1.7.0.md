---
title: "kubeflow v1.7.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.7.0"
version: "v1.7.0"
published: "2023-03-29"
type: "minor"
lang: "zh"
---

# kubeflow v1.7.0

此版本针对 [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) 版本 [__1.7.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.7/) 进行了删减。

__注意：__ 以下 release note __仅__ 适用于 `kubeflow/kubeflow` 存储库中的组件。

## 特点

* 在 PodDefault 中添加对命令和参数的支持 #6542 @alembiewski
* 扩展 PodDefaults 以支持 imagePullSecrets #6600 @kimwnasptd
* 在 poddefault 中添加对 initContainers 和 sideCars 的支持 #6749 @deepk2u
* JWA 排序支持 #6742 @elenzio9
* 对 VWA 和 TWA 的排序支持 #6743 @elenzio9
* 对网络应用程序的过滤支持 #6754 @elenzio9
* jwa(front)：添加详细信息页面功能和单元测试#6822 @orfeas-k
* jwa（正面）：将 YAML 选项卡添加到笔记本详细信息页面 #6790 @orfeas-k
* jwa(front): 将 LOGS 选项卡添加到笔记本详细信息页面 #6779 @orfeas-k
* jwa：将事件选项卡添加到笔记本详细信息页面#6782 @orfeas-k
* VWA：创建卷详细信息页面#6788 @orfeas-k
* vwa（正面）：将 YAML 选项卡添加到卷详细信息页面 #6823 @elenzio9
* jwa(front): 重新设计创建页面 #6826 @elenzio9 
* jwa（正面）：链接到 VWA 详细信息页面 #6857 @orfeas-k
* web-apps（前面）：按日期对事件和条件表进行排序 #6858 @orfeas-k
* jwa：支持显示所有命名空间的笔记本#6706 @kimwnasptd
* Web 应用程序：在 Volumes 和 TensorBoards Web 应用程序中添加对所有命名空间的支持 #6778 @kimwnasptd
* 支持 Tensorboard Web 应用程序 https://github.com/kubeflow/kubeflow/pull/6924 中的 Pod 默认值 @surajkota
* 支持 Tensorboard 控制器中的 Pod 默认值 #6874 @surajkota
* 扩展 Docker 发布工作流程，以在版本更改 https://github.com/kubeflow/kubeflow/pull/6849 @apo-ger 时触发

## 修复

* 修复笔记本剔除 #6659 @apo-ger
* [vwa-datetime] 在 VWA 中统一显示主页中的日期 #6683 @elenzio9
*tensorboard-controller：修复tensorboard无限重启#6722 @oshep
*网络应用程序：确保取消飞行中的请求#6718 @kimwnasptd
* 修复 GPU 上的只读设置 #6735 @thesuperzapper
* jwa(front): 自动更新挂载路径 #6875 @tasos-ale
* rstudio：更新版本以正确处理 X-Forwarded 标头 #6890 @kimwnasptd
* vwa(front): 当有对应的笔记本 https://github.com/kubeflow/kubeflow/pull/6899 @orfeas-k 时防止 PVC 被删除
* 修复注销按钮以使用最新版本的 oidc-authservice https://github.com/kubeflow/kubeflow/pull/6609 @alembiewski
* [wa-actual-links-in-tables] 在我们的表格组件中创建链接实际链接 #6864 @elenzio9
*centraldashboard：添加对新窗口中应用程序的支持#6750 @tasos-ale
* [wa-age-column-improvements] 网络应用程序年龄列的改进 #6694 @elenzio9
* 修复ResourceQuota移除https://github.com/kubeflow/kubeflow/pull/6188的bug @sunzhaochang
*centraldashboard：支持动态注销URL https://github.com/kubeflow/kubeflow/pull/6945 @orfeas-k

## 代码健康

* crud-web-apps：应用 ng lint #6580 @haoxins
* 修复 ng lint #6586 @haoxins
* 将 Jupyter Web 应用程序升级为 Python 3.8 #6562 @xiaoxq
* web-apps：所有命名空间的通用代码 #6730 @kimwnasptd
* 升级 WA 中的 @angular/material #6763 @elenzio9
* jwa(front): 使用新的编辑器组件 #6775 @orfeas-k
* jwa(front): 修复单元测试 #6804 @elenzio9
* twa(front): 修复单元测试 #6824 @elenzio9
* web-apps(front): 在 WA 中启用源映射 #6787 @elenzio9
* vwa(front): 使用 Cypress 添加 UI 测试 #6862 @orfeas-k
* web-apps(front): 安装 prettier 并创建前端工作流程 #6853 @elenzio9
* vwa(front)：向 VWA 的前端工作流程添加格式化/linting #6852 @elenzio9
*centraldashboard-Angular（前面）：添加library.js、源映射和ESLint #6846 @orfeas-k
* 为笔记本实现剔除控制器 #6807 @apo-ger
* jwa(front): 使用 Cypress 添加 UI 测试 #6891 @orfeas-k
* twa(front): 使用 Cypress 添加 UI 测试 #6896 @orfeas-k
* 更新 KF 清单和 gh-action 工作流程以使用 tag=latest #6854 @apo-ger
* 修复仅在 PR 合并时发布图像的工作流程 #6842 @apo-ger
* 配置文件控制器：扩展使用每个 PR https://github.com/kubeflow/kubeflow/pull/6820 @apo-ger 图像的测试
* 修复注销按钮以使用最新版本的 oidc-authservice https://github.com/kubeflow/kubeflow/pull/6609 @alembiewski

---

> 📦 仓库：[kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · 🏷️ 版本：`v1.7.0` · 📅 发布：2023-03-29 · [查看英文原版 Release](https://github.com/kubeflow/kubeflow/releases/tag/v1.7.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
