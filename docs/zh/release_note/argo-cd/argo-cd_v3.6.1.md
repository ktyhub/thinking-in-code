---
title: "argo-cd v3.6.1"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.6.1"
version: "v3.6.1"
published: "2026-11-04"
type: "patch"
lang: "zh"
---

# argo-cd v3.6.1

## 快速入门

### 非 HA：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.6.1/manifests/install.yaml
```

### 哈：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.6.1/manifests/ha/install.yaml
```

## Release Signatures and Provenance

所有 Argo CD 容器映像均由 cosign 签名。  A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications.有关如何验证的信息，请参阅[文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)。

## Release Notes 博客文章
For a detailed breakdown of the key changes and improvements in this release, check out the [official blog post](https://blog.argoproj.io/argo-cd-v3-0-release-candidate-a0b933f4e58f)

## 升级

如果从不同的次要版本升级，请务必阅读[升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) 文档。

## Changelog
### 错误修复
* 94037c4d4e1af4bd0651d37a179fbd9e347e668c: fix(ui): keep the sidebar layout in sync after toggling it (cherry-pick #30762 for 3.6) (#30771) (@shimagrawal)
* abfc76157c9a9bcdc4b4161077e4e0e7993493fe: fix(ui): stop webpack minifying index.html so --rootpath/--basehref work (#30763) (cherry-pick #30767 for 3.6) (#30768) (@argo-cd-cherry-pick-bot[bot])
### 其他工作
* c7c41d322fb1592b09c72448ac439abc3c69af48：杂务：在release-3.6分支上将版本提升到3.6.1（＃30769）（@github-actions [bot]）

**Full Changelog**: https://github.com/argoproj/argo-cd/compare/v3.6.0...v3.6.1

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" 宽度="25%" ></a>

---

> 📦 仓库：[argoproj/argo-cd](https://github.com/argoproj/argo-cd) · 🏷️ 版本：`v3.6.1` · 📅 发布：2026-11-04 · [查看英文原版 Release](https://github.com/argoproj/argo-cd/releases/tag/v3.6.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
