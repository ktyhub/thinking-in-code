# spring-session 4.0.0
## 为什么要使用 Spring-Session

想象一下这个场景：你的应用程序一夜爆红，用户如潮水般涌来。当你在庆祝成功时，运维团队的告警短信也如潮水般涌来——服务器一个接一个崩溃。调查发现，罪魁祸首竟是那个看似无害的“用户登录状态”。传统的会话管理，将会话数据牢牢锁在单台服务器的内存里，用户第一次访问服务器A登录，第二次请求却被负载均衡抛到了服务器B，服务器B不认识他，于是用户被无情地踢出。这个矛盾——**应用的无状态扩展需求与会话状态的有状态绑定**——在微服务与云原生时代被无限放大。

这就是你迫切需要 Spring-Session 的时刻。它并非一个简单的补丁，而是一次优雅的革命。它将你的会话从服务器的内存牢笼中解放出来，放入 Redis、JDBC 或 Hazelcast 这样的共享存储中。从此，会话变成了云中自由流动的、高可用的资产。你的应用可以随时水平扩展，而用户始终获得无缝的体验。更重要的是，它让你**无需修改任何业务代码**，就能获得分布式会话的能力，解决了开发者最深的痛点：在保持开发习惯的同时，拥抱架构的进化。

## Spring-Session 是什么

简单来说，Spring-Session 是传统 HttpSession 的“替代者”和“增强器”。它提供了一个透明、统一的 API，用于管理分布式环境下的用户会话数据。

你可以把它理解为一个智能的会话通行证管理局。传统模式下，通行证（Session）只在单个游乐场（服务器）有效。而 Spring-Session 负责签发通用通行证，并将其信息存档在中央资料库（如Redis）。这样，无论用户去到哪个游乐场（服务器），只要出示通行证，该游乐场就能从中央资料库调取他的全部信息，提供连续的服务。

## 入门示例

**真实场景**：你正在开发一个名为“书香云阁”的电商网站，用户将商品加入购物车后，即使切换网络或应用重启，购物车内的商品也不应丢失。

**开发示例**：

1.  **添加依赖**：在 `pom.xml` 中引入 Spring Session 和 Redis 支持。
    ```xml
    <dependency>
        <groupId>org.springframework.session</groupId>
        <artifactId>spring-session-data-redis</artifactId>
    </dependency>
    <dependency>
        <groupId>io.lettuce</groupId>
        <artifactId>lettuce-core</artifactId>
    </dependency>
    ```

2.  **配置 Redis**：在 `application.yml` 中配置会话存储库。
    ```yaml
    spring:
      session:
        store-type: redis
      redis:
        host: localhost
        port: 6379
    ```

3.  **启用 Spring Session**：在主应用类上添加一个简单的注解。
    ```java
    @SpringBootApplication
    @EnableRedisHttpSession // 启用基于 Redis 的 HttpSession 管理
    public class BookstoreApplication {
        public static void main(String[] args) {
            SpringApplication.run(BookstoreApplication.class, args);
        }
    }
    ```

4.  **像往常一样使用 Session**：在你的控制器中，你可以像使用标准 `HttpSession` 一样操作，但背后的一切已是分布式的。
    ```java
    @Controller
    public class CartController {
        
        @PostMapping("/addToCart")
        public String addItem(@RequestParam String bookId, HttpSession session) {
            // 从session中获取购物车，如果没有则创建
            Map<String, Integer> cart = (Map<String, Integer>) session.getAttribute("CART");
            if (cart == null) {
                cart = new HashMap<>();
            }
            cart.put(bookId, cart.getOrDefault(bookId, 0) + 1);
            
            // 将更新后的购物车放回session
            session.setAttribute("CART", cart);
            
            return "redirect:/cart";
        }
        
        @GetMapping("/cart")
        public String viewCart(HttpSession session, Model model) {
            Map<String, Integer> cart = (Map<String, Integer>) session.getAttribute("CART");
            model.addAttribute("cartItems", cart);
            return "cart";
        }
    }
    ```
就这样，你的购物车会话已经具备了跨服务器、跨重启的持久化能力。

## Spring-Session 4.0.0 版本更新了什么

Spring-Session 4.0.0 是一次重大的基础性升级，核心是与 Spring 生态的全栈版本对齐。它全面适配了 Spring Framework 7、Spring Boot 4、Spring Security 7 和 Spring Data 2025 等主要依赖的新里程碑版本。此版本移除了对已废弃的 JUnit 4 的支持，完全转向 JUnit 5。此外，它引入了对 Project CRaC 的初步支持，旨在提升应用启动速度。这是一次为拥抱 Spring 未来技术栈而进行的必要革新。

## 更新日志

### 🔨 依赖升级

*   升级至 Spring Boot 4.0.0-RC2
*   升级至 Spring Data 2025.1.0
*   升级至 Spring Framework 7.0.0
*   升级至 Spring Security 7.0.0

## 总结

简而言之，本次更新日志记录了 Spring-Session 4.0.0 版本对其核心依赖库——包括 Spring Boot、Spring Data、Spring Framework 和 Spring Security——所进行的一次全面且同步的重大版本升级。