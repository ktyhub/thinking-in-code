---
title: "argo-cd v3.4.12"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.4.12"
version: "v3.4.12"
published: "2026-10-20"
type: "patch"
lang: "zh"
---

# argo-cd v3.4.12

## 快速入门

### 非 HA：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.4.12/manifests/install.yaml
```

### 哈：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.4.12/manifests/ha/install.yaml
```

## 发布签名和出处

所有 Argo CD 容器映像均由 cosign 签名。  为符合 SLSA 3 级规范的容器映像和 CLI 二进制文件生成来源。有关如何验证的信息，请参阅[文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)。

## Release Notes Blog Post
有关此版本中的主要更改和改进的详细信息，请查看[官方博客文章](https://blog.argoproj.io/argo-cd-v3-4-release-candidate-2702b8af68d4)

## 升级

如果从不同的次要版本升级，请务必阅读[升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) 文档。

## Changelog
### 错误修复
* ad17ffa11e65107d3648ff5633a2e1fe81b4e2ee: fix: restore SSH repository fetch through a SOCKS5 proxy (cherry-pick #30238 for 3.4) (#30250) (@ppapapetrou76)
* b8dbf208e2641dbb2dd53a6d87fa89d1e505d59a: fix: server-side diff reports fields removed by other managers as diffs (cherry-pick #30206 for 3.4) (#30230) (@argo-cd-cherry-pick-bot[bot])
### 依赖更新
* 2ae5194e24c4968dabe9ae5341af66299be4b7f2：杂务（deps）：凹凸dompurify发布-3.4（＃30175）（@ranakan19）
* caebfdb8cd0d3fcca0b486576eeee9664f31ba12：杂务（deps）：将 golang 组更新为 v1.26.10（release-3.4）（＃30306）（@argoproj-renovate [bot]）
### 其他工作
* 590e562a5ae6551c8559b5dba1b69939c57e3855：琐事：在release-3.4分支上将版本提升到3.4.12（＃30320）（@github-actions [bot]）

**完整 Changelog**：https://github.com/argoproj/argo-cd/compare/v3.4.11...v3.4.12

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" 宽度="25%" ></a>

---

> 📦 仓库：[argoproj/argo-cd](https://github.com/argoproj/argo-cd) · 🏷️ 版本：`v3.4.12` · 📅 发布：2026-10-20 · [查看英文原版 Release](https://github.com/argoproj/argo-cd/releases/tag/v3.4.12)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
