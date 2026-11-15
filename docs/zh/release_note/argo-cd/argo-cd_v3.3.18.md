---
title: "argo-cd v3.3.18"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.3.18"
version: "v3.3.18"
published: "2026-10-22"
type: "patch"
lang: "zh"
---

# argo-cd v3.3.18

## 快速入门

### 非 HA：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.3.18/manifests/install.yaml
```

### 哈：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.3.18/manifests/ha/install.yaml
```

## 发布签名和出处

所有 Argo CD 容器映像均由 cosign 签名。  为符合 SLSA 3 级规范的容器映像和 CLI 二进制文件生成来源。有关如何验证的信息，请参阅[文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)。

## Release Notes 博客文章
有关此版本中的主要更改和改进的详细信息，请查看[官方博客文章](https://blog.argoproj.io/argo-cd-3-3-release-candidate-00e99f7b7daa)

## 升级

如果从不同的次要版本升级，请务必阅读[升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) 文档。

## Changelog
### 错误修复
* 4692a04abcfd3fc62c9a4ce3865a81ce79eeabdd：修复（安全）：emudhra CA 证书妥协以发布 3.3 (#30349) (@dudinea)
### 其他工作
* d0b5dfda404d4c0d5f364c0bb7561dad023a7f00：杂务：在release-3.3分支上将版本提升到3.3.18（＃30350）（@github-actions [bot]）

**完整 Changelog**：https://github.com/argoproj/argo-cd/compare/v3.3.17...v3.3.18

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" 宽度="25%" ></a>

---

> 📦 仓库：[argoproj/argo-cd](https://github.com/argoproj/argo-cd) · 🏷️ 版本：`v3.3.18` · 📅 发布：2026-10-22 · [查看英文原版 Release](https://github.com/argoproj/argo-cd/releases/tag/v3.3.18)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
