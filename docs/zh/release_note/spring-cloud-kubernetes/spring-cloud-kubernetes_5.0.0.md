# spring-cloud-kubernetes 5.0.0
**为什么要使用spring-cloud-kubernetes**

想象一下，你正驾驶着两艘性能截然不同的巨轮：一艘是灵活敏捷的Spring Cloud，它带你轻松穿梭于微服务的海洋；另一艘是强大稳固的Kubernetes，它为你提供自动化部署和管理的深水港。然而，你很快发现，它们使用着不同的“海图”和“罗盘”。Spring Cloud依赖Eureka、Config Server等自有服务，而Kubernetes原生提供了Service、ConfigMap、Secret。你不得不在两套体系间疲于奔命，维护成本陡增，这难道不是一种令人抓狂的“认知割裂”与“重复造轮子”吗？

这正是`spring-cloud-kubernetes`登场的时刻。它的核心价值，在于**化干戈为玉帛**，将你从两套基础设施的“精神分裂”中解放出来。它并非要取代谁，而是作为一座优雅的桥梁，让Spring Cloud应用能够原生地、自然地理解并使用Kubernetes提供的一切。为什么要用它？为了终结分裂，拥抱统一。让你的微服务在Kubernetes的沃土上，依然能遵循Spring Cloud的优雅范式，同时直接汲取Kubernetes原生的强大养分，实现更简洁的架构、更低的运维复杂度和更高的内聚性。它解决的是标准与平台之间的核心矛盾，让你专注于业务创新，而非基础设施的整合之苦。

**spring-cloud-kubernetes是什么**

简而言之，`spring-cloud-kubernetes`是Spring Cloud生态中的一个官方子项目。它的使命很单纯：为Spring Cloud应用在Kubernetes环境中运行时，提供一系列集成插件。通过这些插件，你的应用可以直接利用Kubernetes本身的核心能力（如服务发现、配置管理、负载均衡）来替代或补充Spring Cloud中原有的相应客户端组件（如Spring Cloud Netflix）。它让Kubernetes从“部署平台”升级为你的“微服务运行时基础设施”。

**入门示例**

让我们描绘一个真实场景：一个简单的电商系统，包含`用户服务`和`订单服务`，它们需要相互调用，并且配置信息需要能够动态更新。

1.  **场景**：`订单服务`（order-service）需要调用`用户服务`（user-service）来获取用户详情。同时，两个服务的功能开关、连接超时等配置希望能在Kubernetes中集中管理，无需重启应用。
2.  **开发示例**：
    *   **前提**：你已经有一个可用的Kubernetes集群（如Minikube）和基础的Spring Boot应用。
    *   **步骤一：添加依赖**。在`订单服务`的`pom.xml`中引入服务发现和配置客户端依赖。
        ```xml
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-kubernetes-fabric8-all</artifactId>
        </dependency>
        ```
    *   **步骤二：启用Kubernetes原生模式**。在应用主类或配置类上，你可能不需要像传统Spring Cloud那样显式启用`@EnableDiscoveryClient`，因为`spring-cloud-kubernetes`会自动探测Kubernetes环境并集成。
    *   **步骤三：使用Kubernetes服务发现**。在`订单服务`中，你可以像使用普通Spring Cloud一样，通过`RestTemplate`或`WebClient`，**直接使用Kubernetes的Service名称**来调用`用户服务`。
        ```java
        // 传统方式：通过服务名调用，底层由Kubernetes的DNS和服务发现接管
        String userServiceUrl = "http://user-service/api/users/{id}";
        User user = restTemplate.getForObject(userServiceUrl, User.class, userId);
        ```
    *   **步骤四：使用Kubernetes配置**。在Kubernetes中创建一个`ConfigMap`，定义一些配置。
        ```yaml
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: order-service-config
        data:
          app.feature.enabled: "true"
          app.connection.timeout: "5000"
        ```
        在Spring Boot应用的`application.yaml`中，你可以通过`spring.cloud.kubernetes.config.sources`引用这个ConfigMap，并在代码中使用`@Value`或`@ConfigurationProperties`注入这些属性。当ConfigMap更新时，应用能动态刷新配置（需配合`@RefreshScope`等机制）。
    *   **步骤五：部署**。将应用打包为Docker镜像，并创建对应的Kubernetes `Deployment`和`Service`资源清单进行部署。`spring-cloud-kubernetes`客户端会在Pod启动时自动读取Kubernetes的API来获取服务列表和配置信息。

通过这个示例，你看到我们**没有单独启动Eureka服务器**，也**没有搭建Config Server**，所有功能都依托于Kubernetes本身，架构变得异常清晰和轻量。

**spring-cloud-kubernetes 5.0.0版本更新了什么**

参考发布日志，Spring Cloud Kubernetes 5.0.0是一个重要更新。它主要适配了Spring Cloud 2024.0.0和Spring Boot 3.4.0，标志着对Java 17+和Jakarta EE 9+的全面支持。此版本引入了对基于Lease的领导者选举机制的支持，提升了在分布式场景下领导者选举的可靠性。同时，它修复了`KubernetesServiceInstance`类为非密封类（non-sealed class）的问题，提高了框架的扩展灵活性。此外，版本还包含了多项依赖项升级和问题修复，以增强整体稳定性和性能。

**更新日志**

## ⭐ 新特性
*   新增对基于 Lease 的领导者选举机制的支持。[#1954](https://github.com/spring-cloud/spring-cloud-kubernetes/issues/1954)

## 🐞 漏洞修复
*   将 `KubernetesServiceInstance` 类改为非密封类（non-sealed class）。[#2038](https://github.com/spring-cloud/spring-cloud-kubernetes/issues/2038)

## ❤️ 贡献者
感谢所有为此版本做出贡献的贡献者。

**第5小节翻译更新记录的总结**

本次更新规模虽小但意义明确，核心在于**引入更可靠的Lease机制领导者选举支持**，并**通过放宽类限制（修复`KubernetesServiceInstance`为`非密封类`）来提升框架的扩展性和兼容性**，体现了项目在完善企业级功能与保持架构灵活性方面的持续努力。