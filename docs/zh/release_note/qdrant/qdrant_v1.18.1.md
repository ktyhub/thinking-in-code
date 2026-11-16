---
title: "qdrant v1.18.1"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.18.1"
version: "v1.18.1"
published: "2026-05-22"
type: "patch"
lang: "zh"
---

# qdrant v1.18.1

# 更改日志

## 改进

* https://github.com/qdrant/qdrant/pull/8988 - 重构量化多向量评分器以支持 io_uring
* https://github.com/qdrant/qdrant/pull/9058 - 在异步更新插入的 WAL 写入之前验证向量维度

## 错误修复

* https://github.com/qdrant/qdrant/pull/8990 - 通知快照应用上的待定共识操作
* https://github.com/qdrant/qdrant/pull/9054 - 修复带有浮点值的索引整数范围过滤器
* https://github.com/qdrant/qdrant/pull/9055 - 修复 `{match: {except: []}}` 返回零结果和有效负载索引
* https://github.com/qdrant/qdrant/pull/9070 - 修复空向量恐慌
* https://github.com/qdrant/qdrant/pull/9099 - 修复 TurboQuant 堆内存报告不足的问题
* https://github.com/qdrant/qdrant/pull/9107 - 不要使用不必要的顺序 mmap
* https://github.com/qdrant/qdrant/pull/9014 - 修复与更新队列的重新分片清理数据竞争
* https://github.com/qdrant/qdrant/pull/9120 - 使用集群默认分片传输方法进行回退
* https://github.com/qdrant/qdrant/pull/9121 - 重新创建异步工作器/优化器以不阻止共识
* https://github.com/qdrant/qdrant/pull/9110 - 在冲突的向量模式上重新启动优化器
* https://github.com/qdrant/qdrant/pull/9122 - 不要删除快照传输接收器的分片
* https://github.com/qdrant/qdrant/pull/9125 - 修复了外部格式错误请求的快照传输取消问题
* https://github.com/qdrant/qdrant/pull/9116 - 修复了优化和快照创建时删除的掩码竞赛

## 安全

* https://github.com/qdrant/qdrant/pull/9031 - 在我们接受快照文件上传之前授权请求

---

> 📦 仓库：[qdrant/qdrant](https://github.com/qdrant/qdrant) · 🏷️ 版本：`v1.18.1` · 📅 发布：2026-05-22 · [查看英文原版 Release](https://github.com/qdrant/qdrant/releases/tag/v1.18.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
