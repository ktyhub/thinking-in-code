---
title: "dubbo dubbo-3.3.0-beta.3"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.0-beta.3"
version: "dubbo-3.3.0-beta.3"
published: "2024-05-24"
type: "pre"
lang: "zh"
---

# dubbo dubbo-3.3.0-beta.3

## 发生了什么变化
* 通过 @chickenlj 修复 https://github.com/apache/dubbo/pull/13951 中的 qos 命令名称
* 修复 https://github.com/apache/dubbo/pull/13921 中 @hengyoush 的 telnet ctrl+c 问题 #13812
* 修复https://github.com/apache/dubbo/pull/13984中@CrazyHZM在原生场景下三重协议请求失败的问题
* 通过 https://github.com/apache/dubbo/pull/13995 中的 @chickenlj 排除 zookeeper 中的传递 logbak 依赖
* 删除 https://github.com/apache/dubbo/pull/14006 中 @CrazyHZM 原生场景中的 url 引用
* 对于 HTTP/1 一元模式，在 https://github.com/apache/dubbo/pull/13979 中使用 Content-Length 而不是 @finefuture 的 chunk
* 通过https://github.com/apache/dubbo/pull/14059中的@wcy666103修复dubbo-spring-boot-interceptor依赖
* https://github.com/apache/dubbo/pull/14056中@He-Pin使用ReentrantLock加载扩展类
* 通过 @finefuture 修复 https://github.com/apache/dubbo/pull/14127 中的 netty 内存泄漏
* 将 Rest 协议移至 https://github.com/apache/dubbo/pull/14061 中的 @wcy666103 的 SPI 扩展
* @walklown 在 https://github.com/apache/dubbo/pull/14026 中支持三重协议 http1 升级
* 使用ReentrantLock来初始化ReferenceConfig。作者：@He-Pin https://github.com/apache/dubbo/pull/14136
* 通过@icodening修复https://github.com/apache/dubbo/pull/13973中tri协议的内存泄漏
* @Stellar1999 在 https://github.com/apache/dubbo/pull/14028 中删除 zookeeper 3.4
* https://github.com/apache/dubbo/pull/14199中@finefuture关闭流时清理netty残留内存
* 通过https://github.com/apache/dubbo/pull/14222中的@finefuture将ErrorResponse类添加到security/serialize.allowlist中
* 修复 https://github.com/apache/dubbo/pull/14223 中@oxsean 的三重休息 http GET 失败问题
* 将 hessian-lite 更新为 4.0.0 并通过 @AlbumenJ 在 https://github.com/apache/dubbo/pull/13974 中设置 hessian 序列化
* 验证器在https://github.com/apache/dubbo/pull/14194中支持@aofall自动切换
* @Rawven 在 https://github.com/apache/dubbo/pull/14073 中的三重休息 Cors 支持
* 在https://github.com/apache/dubbo/pull/14077中通过@finefuture将TripleConfig添加到ProtocolConfig作为嵌套配置
* 优化https://github.com/apache/dubbo/pull/14175中@finefuture对通用http2的解码
* 删除https://github.com/apache/dubbo/pull/14231中@finefuture对http标头的验证

## 新贡献者
* @He-Pin 在 https://github.com/apache/dubbo/pull/14056 中做出了第一个贡献
* @walklown 在 https://github.com/apache/dubbo/pull/14026 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/dubbo/compare/dubbo-3.3.0-beta.2...dubbo-3.3.0-beta.3

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`dubbo-3.3.0-beta.3` · 📅 发布：2024-05-24 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.0-beta.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
