---
title: "dubbo dubbo-3.3.0"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.0"
published: "2024-09-07"
type: "release"
lang: "en"
summary: "The Apache Dubbo Team is excited to announce the release of Dubbo 3.3! As a leading open-source microservice framework, Dubbo continues to provide developers with high-performance, scalable, and flexible distributed…"
---

# dubbo dubbo-3.3.0

The **Apache Dubbo Team** is excited to announce the release of **Dubbo 3.3**! As a leading open-source microservice framework, Dubbo continues to provide developers with high-performance, scalable, and flexible distributed service solutions. This release introduces the powerful **Triple X** protocol, support for **Native Image AOT**, and integration with **Project Loom**, further optimizing cloud-native capabilities and high-performance scenarios.

## Key Features

### 1. **Triple X Protocol**

- **Comprehensive Traffic Support**: Triple X seamlessly handles both **north-south (client-server)** and **east-west (service-service)** traffic, improving communication efficiency across distributed systems.
  
- **gRPC Compatibility**: Triple X adheres to the **gRPC protocol standard**, using **Protobuf** for communication, enabling smooth interactions with gRPC services.

- **Built on HTTP**: Triple X works with **HTTP/1**, **HTTP/2**, and **HTTP/3**, optimizing network communication for modern **cloud-native** infrastructures, with robust support for gateways and service meshes.

### 2. **Native Image AOT Support**

- **Faster Startup and Lower Memory Usage**: Dubbo 3.3 introduces **Native Image AOT (Ahead-of-Time Compilation)** support, allowing developers to compile Dubbo applications into native binary files. This dramatically reduces startup times and memory consumption, making it an ideal fit for **serverless** (e.g., **AWS Lambda**) scenarios.

### 3. **Project Loom Integration**

- **Optimized Concurrency**: Dubbo 3.3 supports **Project Loom**, enhancing thread management in high-concurrency scenarios through **virtual threads**. This simplifies asynchronous programming models and boosts concurrent processing capabilities, providing better performance for highly concurrent microservices.

### 4. **Performance Enhancements**

- **High-concurrency Optimization**: Triple X achieves notable performance improvements in high-concurrency and weak-network environments, providing better throughput and response times.
  
- **Zero Copy Technology**: Memory and CPU consumption are reduced with **Zero Copy**, resulting in higher efficiency in high-load environments.

### 5. **Cloud-native Friendly**

- **HTTP/3 and Cloud Integration**: Triple X supports **HTTP/3** for enhanced communication, especially in weak-network conditions, and integrates seamlessly with cloud-native service discovery and routing infrastructure.

### 6. **Smooth Migration from Spring Web**

- **Minimal Code Changes**: Developers can migrate from existing **Spring Web** projects to Triple X with minimal code changes, maintaining compatibility with **Spring MVC** while gaining performance improvements.

## Upgrade Guide

To fully leverage the new capabilities in **Dubbo 3.3**, including **Triple X**, **Native Image AOT**, and **Project Loom**, we recommend upgrading your Dubbo applications. 

Explore the new features and experience the improvements in startup speed, memory efficiency, and concurrency performance with **Dubbo 3.3**.

## Contributors

Dubbo would like to thank the following contributors for their contributions to this release:
@AlbumenJ, @aofall, @blueuuufish, @carlvine500, @chaicho, @chickenlj, @CHYhave, @cnzakii, @conghuhu, @CrazyHZM, @dependabot, @EarthChen, @fanlobu, @finefuture, @FoghostCn, @funky-eyes, @hanydd, @He-Pin, @heliang666s, @hengyoush, @hujun-w-2, @icodening, @JoeCqupt, @liuzg-coder, @lovepoem, @MartinDai, @namelessssssssssss, @Nortyr, @oxsean, @PromiseChan, @qinliujie, @qyi71, @Rawven, @sadfera, @Skylark-hjyp, @songxiaosheng, @Stellar1999, @StudentGu, @suncairong163, @walklown, @wcy666103, @win120a, @XIACYBING, @xiaoyuuuuuupeng, @xingcici

## New Contributors
* @carlvine500 made their first contribution in https://github.com/apache/dubbo/pull/12514
* @chaicho made their first contribution in https://github.com/apache/dubbo/pull/12864
* @liuzg-coder made their first contribution in https://github.com/apache/dubbo/pull/13059
* @sadfera made their first contribution in https://github.com/apache/dubbo/pull/13145
* @xiaoyuuuuuupeng made their first contribution in https://github.com/apache/dubbo/pull/13355
* @CHYhave made their first contribution in https://github.com/apache/dubbo/pull/13808
* @He-Pin made their first contribution in https://github.com/apache/dubbo/pull/14056
* @walklown made their first contribution in https://github.com/apache/dubbo/pull/14026
* @hanydd made their first contribution in https://github.com/apache/dubbo/pull/14233
* @fanlobu made their first contribution in https://github.com/apache/dubbo/pull/14148
* @StudentGu made their first contribution in https://github.com/apache/dubbo/pull/14503
* @xingcici made their first contribution in https://github.com/apache/dubbo/pull/14563
* @blueuuufish made their first contribution in https://github.com/apache/dubbo/pull/14520

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.3.0` · 2024-09-07 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
