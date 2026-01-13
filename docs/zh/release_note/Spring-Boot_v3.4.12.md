# Spring-Boot v3.4.12
### 为什么要使用Spring-Boot

想象一下，你是一位疲惫的探险家，站在一片茂密的Java丛林前。传统的Spring框架就像一把沉重的斧头——它强大，但每一次挥动都需要你费尽心力去配置、调试和整合。你挣扎在XML配置的泥潭中，被依赖管理的荆棘缠住，而时间却像沙漏一样无情流逝。这就是为什么Spring-Boot横空出世：它不是另一把工具，而是一盏明灯，照亮了快速开发的道路。Spring-Boot解决了“复杂性”与“效率”的根本矛盾——它通过自动配置和约定优于原则，让你从繁琐的配置中解放出来，专注于创造。别再让技术债务拖垮你的灵感；使用Spring-Boot，你就能像大师一样挥洒代码，在数字世界中留下深刻的印记。

### Spring-Boot是什么

Spring-Boot是Spring框架的延伸，一个旨在简化Java应用开发的利器。它通过自动配置和内置服务器，让开发者能快速启动项目，无需手动处理复杂的设置。简单来说，Spring-Boot就像一位贴心的助手，帮你打包好一切，让你专注于业务逻辑，而不是底层细节。

### 入门示例

想象你是一家初创公司的开发者， tasked with building a simple REST API for a customer management system. 在真实场景中，时间就是金钱：你需要快速交付一个可运行的解决方案。使用Spring-Boot，你可以在几分钟内搭建起一个基础应用。以下是一个开发示例：

首先，通过Spring Initializr（https://start.spring.io/）生成项目，选择依赖如Spring Web。然后，创建一个简单的控制器类：

```java
@RestController
public class CustomerController {
    @GetMapping("/customers")
    public String getCustomers() {
        return "Welcome to our customer API! Here, you can manage client data effortlessly.";
    }
}
```

运行应用后，访问http://localhost:8080/customers，你会立即看到响应。这个例子展示了Spring-Boot如何将复杂任务简化——无需配置服务器或依赖，你就能构建出可扩展的微服务，就像在编织一个数字故事，每个端点都是情节的高潮。

### Spring-Boot v3.4.12版本更新了什么

Spring-Boot v3.4.12版本主要修复了关键问题并提升了稳定性。它解决了Testcontainers与Docker 29.0.0的兼容性故障，确保现代Docker环境无缝运行。此外，版本修复了多个bug，如Gradle war任务和NullPointerException异常，优化了图像构建和指标管理。文档部分得到增强，澄清了配置细节，同时升级了依赖项，包括Spring Framework和Hibernate，以强化整体性能。这些更新旨在提供更流畅的开发体验，减少意外中断。

### 更新日志

## ⚠️  noteworthy changes

- 此版本包含一个修复，使Testcontainers能够与现代Docker版本兼容。如果在您的设置中导致问题，您可以降级最低Docker API，从而撤销该更改。

## 🐞 Bug Fixes

- Gradle war任务未从lib-provided中排除starter POMs #48195
- Testcontainers集成在Docker 29.0.0上失败 #48104
- 当使用`@ConditionalOnSingleCandidate`与多个手动注册的单例时出现NullPointerException #48117
- 由于URL中的硬编码版本，Buildpack在最近的Docker安装中失败 #48050
- 由于Netty IP配置错误，PortInUseException在端口绑定失败时被错误抛出 #47618
- 在指定平台时，如果已使用不同平台构建图像，则