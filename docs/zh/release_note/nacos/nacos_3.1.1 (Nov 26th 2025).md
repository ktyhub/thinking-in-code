# nacos 3.1.1 (Nov 26th 2025)
### 为什么要使用 Nacos

想象一下，你正指挥着一支庞大的舰队（你的微服务集群）在数字海洋中航行。起初，只有几艘小船，你靠呼喊（硬编码）就能让它们协同。突然之间，舰队膨胀到上百艘，每艘船都需要动态调整航向（配置）、随时知道队友的位置（服务发现），并且能在风暴（故障）中快速重组。你声嘶力竭，手忙脚乱地更新着海图，却眼睁睁看着船队陷入混乱与延迟的泥潭。这就是现代分布式系统的经典困局：**在动态与复杂中，失控感如影随形**。

Nacos 的出现，正是为了平息这场风暴。它不是一个冰冷的工具，而是为你提供了一座智能的“控制塔”。它让你能从“手工劳作”的泥沼中解脱，告别那些脆弱不堪的静态配置文件和四处散落的服务地址列表。通过 Nacos，你可以优雅地实现服务的实时注册、发现与健康管理，并像推送手机应用更新一样，动态地管理和推送所有微服务的配置。它解决的不仅是技术问题，更是**开发者与管理者的核心矛盾**：对系统清晰度、掌控力与敏捷性的迫切需求，与日益增长的架构复杂度之间的激烈冲突。选择 Nacos，意味着选择秩序、可见性与从容。

### Nacos 是什么

Nacos，源自英文“Naming and Configuration Service”的缩写。简单来说，它是一个集**服务发现**、**配置管理**和**服务管理**于一体的动态服务基础设施。你可以将它理解为微服务架构中的两个核心“管家”合二为一：
1.  **服务发现管家**：自动登记每个微服务的地址，并让其他服务能轻松找到它们。
2.  **配置中心管家**：集中存储和管理所有微服务的配置信息，修改后能实时通知到各个服务，无需重启。

### 入门示例

让我们通过一个真实的电商微服务场景来感受 Nacos 的魅力。

**场景**：你有一个“订单服务”（`order-service`）需要调用“用户服务”（`user-service`）来获取用户信息。同时，“订单服务”的折扣率需要能够根据促销活动快速调整。

**步骤 1：服务注册与发现**
1.  **启动 Nacos Server**：从 GitHub 发布页下载并启动 Nacos，访问其控制台（通常为 `http://localhost:8848/nacos`）。
2.  **用户服务注册**：在 `user-service` 的 `application.yml` 中配置 Nacos 服务器地址，启动后，该服务会自动将自己注册到 Nacos。
    ```yaml
    spring:
      application:
        name: user-service
      cloud:
        nacos:
          discovery:
            server-addr: localhost:8848
    ```
3.  **订单服务发现**：`order-service` 同样配置 Nacos。当它需要调用 `user-service` 时，不再需要硬编码 IP 地址，只需使用服务名。通过 OpenFeign 或 RestTemplate 配合 `@LoadBalanced`，即可实现基于服务名的智能调用。
    ```java
    @FeignClient(name = "user-service")
    public interface UserClient {
        @GetMapping("/user/{id}")
        User getUserById(@PathVariable Long id);
    }
    ```

**步骤 2：动态配置管理**
1.  **在 Nacos 控制台创建配置**：在“配置管理”中，新建一个 `Data ID` 为 `order-service.yaml` 的配置，内容为：
    ```yaml
    discount: 0.9 # 9折优惠
    ```
2.  **订单服务监听配置**：在 `order-service` 中，添加配置监听。
    ```java
    @RefreshScope
    @RestController
    public class OrderController {
        @Value("${discount:1.0}")
        private Double discount; // 注入配置值

        public BigDecimal calculatePrice(BigDecimal originalPrice) {
            return originalPrice.multiply(BigDecimal.valueOf(discount));
        }
    }
    ```
3.  **动态生效**：在促销季，你只需在 Nacos 控制台将 `discount` 改为 `0.8`（8折），`order-service` 会**几乎实时**地接收到新配置，并立即以新折扣率计算价格，整个过程**无需重启任何服务**。

### Nacos 3.1.1 版本更新了什么

Nacos 3.1.1 版本主要增强了其在 AI 原生场景下的能力与系统稳健性。本次更新重点提升了 **MCP（模型上下文协议）** 和 **A2A（智能体间通信）** 功能，包括支持批量注册智能体端点、导入 MCP 服务时合并版本、以及提供覆盖更新的选项。同时，新增了出入站通信的默认安全配置支持，为安全的 AI 智能体交互奠定了基础。此外，版本还包含了一系列重要的稳定性修复和功能优化，例如线程池配置优化和脚本改进。

### 更新日志

本次发布侧重于增强 Nacos 的 MCP 和 A2A（智能体到智能体）能力，提升系统稳定性，并完善安全与配置管理。主要新增内容包括支持批量注册智能体端点、在导入 MCP 服务时合并版本，以及通过 `overrideExisting` 选项增强更新 MCP 服务器的灵活性。此版本还引入了对入站和出站通信的默认安全配置支持，为安全的 AI 智能体交互奠定了基础。

此版本的详细变更如下：

#### Feature
- [#13867] 支持在更新 MCP 服务器时覆盖现有配置。
- [#13922] 添加线程池配置以允许核心线程超时。
- [#13946] 重构 AgentEndpoint 模型并添加新字段以支持高级协议和查询。
- [#13953] 增加对默认安全配置的支持，包括入站和出站安全方案的选择与设置。
- [#13957] 支持批量注册智能体端点。
- [#13951] 为控制台模块添加可配置的 CORS 过滤器。

#### Enhancement/Refactor
- [#13822] 分离客户端执行器与登录调度执行器的职责，防止线程池耗尽。
- [#13863] 优化 `shutdown.sh` 脚本，将多个 PID 合并到一行，使进程终止更清晰。
- [#13911] 增强 `importToolsFromMcp` API 以支持流式协议服务器。
- [#13914] 升级 checkStyle 插件版本以改进代码规范检查和可维护性。
- [#13945] 支持在导入 MCP 服务器规范时合并版本。
- [#13963] 重构列表配置 API 以支持返回 configTags 和描述信息。

#### BugFix
- [#13140] 修复当客户端命名空间为空时，ConfigChangeNotifyRequest 的命名空间一致性问题。
- [#13860] 修复 ConfigMigrateService 中潜在的空指针异常风险。
- [#13866] 修复控制台中