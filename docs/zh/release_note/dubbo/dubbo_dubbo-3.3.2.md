---
title: "dubbo dubbo-3.3.2"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.2"
published: "2024-10-29"
type: "release"
lang: "zh"
---

# dubbo dubbo-3.3.2

## 发生了什么变化

### 功能
* 配置值支持数组。通过 @oxsean 在 https://github.com/apache/dubbo/pull/14813

### 错误修复
* 修复了 https://github.com/apache/dubbo/pull/14669 中@xingcici 的旧服务发现应用侦听器破坏问题
* 通过 https://github.com/apache/dubbo/pull/14760 中的 @oxsean 修复当 body 为空时 HttpPostRequestDecoder 中的内存泄漏
* 通过 https://github.com/apache/dubbo/pull/14763 中的 @AlbumenJ 修复 SERVER_STREAM 中的 ParameterizedType
* 修复 https://github.com/apache/dubbo/pull/14812 中 @oxsean 的路径匹配错误
* 修复 @oxsean 在 https://github.com/apache/dubbo/pull/14811 中的 sendRedirect 302 失败
* https://github.com/apache/dubbo/pull/14816中@oxsean通过浏览器访问时保持与SpringMVC一致的行为
* 修复 https://github.com/apache/dubbo/pull/14820 中 @AlbumenJ 无法使用 Hessian2 反序列化 Record 的问题
* @oxsean 在 https://github.com/apache/dubbo/pull/14822 中修复了一些其他错误
* 修复https://github.com/apache/dubbo/pull/14837中输入流无法被@AlbumenJ反序列化的问题

### 代码增强
相关 PR：#14810、#14801、#14817、#14815、#14840、#14839

### 依赖升级
* 更新字节伙伴版本：1.15.1 -> 1.15.7 #14775、#14806、#14828
* 更新 ch.qos.logback:logback-core: 1.5.8 -> 1.5.11 #14774, #14802
* 更新 com.alibaba:fastjson: 1.2.83 -> 1.2.83_noneautotype #14751
* 更新 com.alibaba.nacos:nacos-client: 2.4.2 -> 2.4.3 #14777
* 更新 curator5_version: 5.7.0 -> 5.7.1 #14804, #14773
* 更新 io.micrometer:micrometer-bom: 1.13.4 -> 1.13.5 #14755
* 更新 io.micrometer:micrometer-core: 1.13.4 -> 1.13.6 #14756, #14807
* 更新 io.micrometer:micrometer-tracing-bom: 1.3.4 -> 1.3.5 #14803
* 更新 io.opentelemetry:opentelemetry-bom: 1.42.0 -> 1.43.0 #14737, #14776
* 更新 io.projectreactor:reactor-core: 3.6.10 -> 3.6.11 #14808
* 更新 netty4_版本：4.1.113.Final -> 4.1.114.Final #14753
* 更新 org.springframework.security:spring-security-bom: 5.8.14 -> 5.8.15 #14827
* 更新 ch.qos.logback:logback-core: 1.5.11 -> 1.5.12 #14829

## 新贡献者
* @wsliliang 在 https://github.com/apache/dubbo/pull/14810 中做出了第一个贡献
* @JanSoundhouse 在 https://github.com/apache/dubbo/pull/14815 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/dubbo/compare/dubbo-3.3.1...dubbo-3.3.2

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`dubbo-3.3.2` · 📅 发布：2024-10-29 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
