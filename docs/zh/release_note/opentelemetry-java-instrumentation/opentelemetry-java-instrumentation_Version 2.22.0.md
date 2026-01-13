# opentelemetry-java-instrumentation Version 2.22.0
### 为什么要使用 opentelemetry-java-instrumentation

想象一下，你正驾驶着一架最先进的喷气式飞机穿越浓密的云层。仪表盘上，每一个指示灯、每一个仪表都在向你诉说着引擎的状态、燃油的存量、航线的偏差。突然，所有指示灯同时熄灭，屏幕一片漆黑。你还能飞吗？也许能，但你已完全迷失在云端，对潜在的危险一无所知，每一次调整都变成了一场豪赌。

这就是现代分布式系统开发中，没有可观测性所面临的真实困境。你的微服务就是那架复杂的飞机，而**opentelemetry-java-instrumentation**，正是为你重燃所有仪表盘的光亮，甚至提供全景雷达的钥匙。

矛盾在于，我们构建的系统日益复杂、抽象和动态，但我们对它们的洞察力却可能不增反减。当用户投诉“页面很慢”时，你需要花费数小时甚至数天在成百上千个日志文件、指标数据和无数服务节点之间大海捞针。是数据库慢了？还是某个API的缓存失效？或是消息队列发生了堆积？这种不确定性带来了巨大的商业风险：用户体验下滑、故障定位时间漫长、团队在相互猜疑中消耗精力。

使用 **opentelemetry-java-instrumentation**，本质上是一次对“未知”的反击。它通过**无侵入或低侵入**的方式，自动为你的Java应用注入追踪、指标和日志的收集能力，将每一次请求的完整旅程——从用户点击到数据库查询，再到第三方服务调用——绘制成一张清晰的“分布式追踪”地图。你无需修改核心业务代码，就能获得深度的系统洞察。

这不仅仅是解决技术问题，更是解放开发者心智的战略选择。从此，你从混沌的被动响应者，转变为拥有全景视野的主动管理者。你知道瓶颈所在，你能预见潜在风险，你能用数据证明优化的价值。在软件的世界里，能看见的人，才能掌控方向，赢得先机。这就是为什么你必须关注并开始使用它的根本原因：**在云原生时代，可观测性已不再是可选项，而是生存与竞争的必需品。**

### opentelemetry-java-instrumentation是什么

简单来说，**opentelemetry-java-instrumentation** 是一个开源项目，它提供了一套自动化的“侦探工具包”，专门用于给你的Java应用程序装上可观测性的“眼睛”和“耳朵”。

它的核心功能是“**插桩（Instrumentation）**”。无论是使用Spring Boot、Dubbo、gRPC、JDBC、Redis还是Kafka等数百种流行的Java库和框架，这个项目都能自动拦截这些组件的运行，收集详细的性能数据（如耗时、调用关系、错误信息），并格式化成OpenTelemetry标准的数据。

你可以通过两种主要方式使用它：
1.  **作为Java Agent**：在启动应用时通过命令行参数（`-javaagent:`）加载一个JAR包。这是最简单、最无侵入的方式，无需改动代码即可获得全面的可观测数据。
2.  **作为独立库**：在项目中直接引入特定的instrumentation依赖库，进行更精细化的手动插桩。

它扮演着数据生产者的角色，将收集到的标准化遥测数据发送到任何支持OpenTelemetry的后端系统，如Jaeger、Zipkin、Prometheus或各类商业APM产品。

### 入门示例

**场景**：假设你正在开发一个简单的电商订单服务，使用Spring Boot编写。用户下单时，服务需要调用用户服务验证信息，并连接MySQL数据库保存订单。

**目标**：无需大幅修改业务代码，快速为该服务集成全链路追踪，看清一次下单请求的完整路径与性能瓶颈。

**步骤**：

1.  **下载Java Agent**：
    从项目发布页面（用户提供的链接）下载最新的 `opentelemetry-javaagent.jar` 文件。

2.  **启动应用时加载Agent**：
    修改你的应用启动命令。如果你通常在本地运行 `java -jar my-order-service.jar`，现在改为：
    ```bash
    java -javaagent:/path/to/opentelemetry-javaagent.jar \
         -jar my-order-service.jar
    ```

3.  **配置（通过环境变量）**：
    指定遥测数据发送到哪里。这里以输出到控制台（方便调试）为例：
    ```bash
    export OTEL_SERVICE_NAME=order-service # 设置服务名
    export OTEL_TRACES_EXPORTER=logging # 将追踪日志打印到控制台
    export OTEL_METRICS_EXPORTER=logging # 将指标日志打印到控制台
    # 如果你想发送到Jaeger，可以设置为：
    # export OTEL_TRACES_EXPORTER=jaeger
    # export OTEL_EXPORTER_JAEGER_ENDPOINT=http://localhost:14250
    ```

4.  **运行并观察**：
    启动你的Spring Boot订单服务，并模拟一次下单请求。你将在控制台看到自动生成的追踪信息，类似于：
    ```
    INFO: Traces reported: {
      "traceId": "4bf92f3577b34da6a3ce929d0e0e4736",
      "spans": [
        {
          "name": "POST /order",
          "kind": "SERVER",
          "attributes": { "http.method": "POST", "http.route": "/order" },
          "events": [...],
          "parentSpanId": null
        },
        {
          "name": "GET /user/{id}", 
          "kind": "CLIENT",
          "attributes": { "http.method": "GET", "peer.service": "user-service" },
          "parentSpanId": "a2bf9243..." // 表明这是/order span的子调用
        },
        {
          "name": "OrderRepository.insert",
          "kind": "CLIENT",
          "attributes": { "db.system": "mysql", "db.statement": "INSERT INTO orders..." },
          "parentSpanId": "a2bf9243..."
        }
      ]
    }
    ```
    这张清晰的“地图”立刻告诉你：一次下单请求，先后调用了用户服务和数据库，并且每个步骤的耗时一目了然。如果未来出现性能问题，你可以迅速定位是网络调用慢，还是SQL查询慢。

5.  **进阶**：
    在生产环境中，你会将Agent部署到所有Java服务上，并配置将数据发送到统一的收集器（如OpenTelemetry Collector）或后端存储系统，从而在UI界面上可视化整个系统的链路和依赖关系。

### opentelemetry-java-instrumentation Version 2.22.0版本更新了什么

Version 2.22.0 主要带来了以下关键变化：它针对OpenTelemetry SDK 1.56.0进行了适配，并对AWS SDK（1.x和2.x）的大量属性名称和类型进行了**破坏性变更**，以严格遵循OpenTelemetry语义约定，这有助于实现数据的标准化和互通。此外，该版本默认**禁用了JDBC数据源、Finatra控制器和JSP编译的**自动插桩，以控制数据量并与其他框架行为保持一致。在功能增强方面，它新增了对**JFinal框架**的插桩支持，并显著提升了对**Spring Framework 7.0**的兼容性。同时，还修复了包括Netty HTTP中`peer.service`属性缺失、Spring异步上下文传播等多个重要Bug。

### 更新日志

本次发布基于 OpenTelemetry SDK 1.56.0。

请注意，许多构件版本号仍带有 `-alpha` 后缀，这表示它们仍处于 Alpha 质量阶段，未来可能包含破坏性变更。更多细节请参阅 [VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning)。

#### ⚠️ 破坏性变更

*