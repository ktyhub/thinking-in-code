---
title: "argo-cd v3.5.6"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.5.6"
version: "v3.5.6"
published: "2026-10-20"
type: "patch"
lang: "zh"
---

# argo-cd v3.5.6

## 快速入门

### 非 HA：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.5.6/manifests/install.yaml
```

### 哈：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.5.6/manifests/ha/install.yaml
```

## 发布签名和出处

所有 Argo CD 容器映像均由 cosign 签名。  为符合 SLSA 3 级规范的容器映像和 CLI 二进制文件生成来源。有关如何验证的信息，请参阅[文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)。

## Release Notes Blog Post
有关此版本中的主要更改和改进的详细信息，请查看[官方博客文章](https://blog.argoproj.io/argo-cd-v3-5-release-candidate-02b1fbf7b419)

## 升级

如果从不同的次要版本升级，请务必阅读[升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) 文档。

## Changelog
### 错误修复
* f62e0c6ae135accd040a7bd2f1031c3a9def3f60：修复（grpc）：修复 SRV _grpclb._tcp SRV 查找的解决方法（＃29989）（针对 3.5 精选＃30084）（＃30170） (@argo-cd-cherry-pick-bot[机器人])
* d98924dfc0c88fe60302dd57259d6a52c7ff81df：修复：通过 SOCKS5 代理恢复 SSH 存储库获取（3.5 的cherry-pick #30238）（＃30246）（@argo-cd-cherry-pick-bot [bot]）
* d575730dffdf260ab15a73a810a4edfdd8b2dd48：修复：服务器端差异报告被其他管理器删除的字段作为差异（cherry-pick＃30206 for 3.5）（＃30229）（@argo-cd-cherry-pick-bot [bot]）
### 依赖更新
* cad84a82c63c51e0e025d5c7770fdc1795c51880: 杂务(deps): 碰撞 dompurify 发布-3.5 (#30176) (@ranakan19)
* 940d00e1ff3d1adf5d0cc2d53e679bd58e8c3185：chore（deps）：将组golang更新为v1.26.10（release-3.5）（＃30305）（@argoproj-renovate [bot]）
### 其他工作
* c2b1e3017e2cec86b122172e861dcd026453ae44：杂务：在release-3.5分支上将版本提升到3.5.6（＃30319）（@github-actions [bot]）

**完整 Changelog**：https://github.com/argoproj/argo-cd/compare/v3.5.5...v3.5.6

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" 宽度="25%" ></a>

---

> 📦 仓库：[argoproj/argo-cd](https://github.com/argoproj/argo-cd) · 🏷️ 版本：`v3.5.6` · 📅 发布：2026-10-20 · [查看英文原版 Release](https://github.com/argoproj/argo-cd/releases/tag/v3.5.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
