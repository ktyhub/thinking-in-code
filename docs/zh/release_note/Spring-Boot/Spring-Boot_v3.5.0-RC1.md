# Spring-Boot v3.5.0-RC1
# 为什么要使用Spring-Boot

当传统Java开发者在XML配置地狱中挣扎时，当团队因为依赖冲突整夜排查问题时，Spring-Boot像一柄锋利的手术刀，精准切开了企业级应用开发的肿瘤。它用约定大于配置的哲学重构了开发认知——那些曾经需要三天三夜搭建的基础设施，现在只需一个启动类；那些让人头皮发麻的Tomcat部署难题，被内嵌容器瞬间化解。当竞争对手还在为兼容性焦头烂额，Spring-Boot早已用starter依赖编织出精密的技术生态网，让开发者真正回归业务本质。这不是框架的改良，而是一场颠覆性的生产力革命。

# Spring-Boot是什么

Spring-Boot是Spring生态的终极进化形态，它将复杂的配置自动化、依赖管理智能化、部署过程轻量化。通过内嵌式容器、自动装配机制和"just run"理念，将企业级Java应用开发转化为简洁的编程体验。本质上，这是一个让开发者专注于业务逻辑而不是基础设施的加速引擎。

# 入门示例

**真实场景**：为电商系统开发商品查询API

1. 访问[start.spring.io](https://start.spring.io)，选择：
   - 依赖项：Spring Web、Spring Data JPA
   - 包结构：com.ecommerce.product

2. 生成项目后创建实体类：
```java
@Entity
public class Product {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private BigDecimal price;
    // getters/setters
}
```

3. 实现REST控制器：
```java
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id) {
        return repository.findById(id)
               .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
```

4. 启动主类：
```java
@SpringBootApplication
public class ProductApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProductApplication.class, args);
    }
}
```

5. 访问http://localhost:8080/api/products/1 即刻获得JSON响应，整个过程无需任何XML配置，数据库自动配置H2内存数据库。

# Spring-Boot v3.5.0-RC1版本更新

1. 新增Docker凭证存储支持，强化容器化安全
2. 重构配置属性命名空间（如spring.http.codecs统一管理编解码）
3. 优化性能：引入配置属性缓存、提升绑定器效率
4. 增强可观测性：完善OpenTelemetry自动配置
5. 修复Native Image构建权限问题等23项缺陷

# 更新日志

## ⭐ 新特性

- 新增对Docker凭证存储和助手工具的支持
- 引入`spring.test.print-condition-evaluation-report`属性控制条件评估报告打印
- 当管理和端点映射同时设为"/"时立即失败
- 支持调整上下文元素的结构化日志记录
- 自动配置OtlpMetricsSender（当可用时）
- 为OtlpMetricsProperties添加单指标配置支持
- 迁移到PathPatternRequestMatcher替代AntPathRequestMatcher
- 支持配置SimpleAsyncTaskExecutor的任务拒绝策略
- 完善Servlet/Filter注册注解属性
- 新增ClientHttpRequestFactoryBuilder自定义支持
- 优化虚拟线程启用时的RestClient自动配置
- 新增Kafka消费者max-poll-interval配置属性
- 改进OAuth2资源服务器集成测试支持
- 性能优化：重构配置属性处理缓存机制

## 🐞 Bug修复

- 修复响应式Web应用SSL证书路径解析问题
- 解决JSON深度嵌套时的堆栈溢出异常
- 修正Podman构建Native镜像的权限问题
- 修复Neo4j响应式自动配置的条件判断缺陷
- 优化jOOQ异常转换器处理空数据库场景
- 修正结构化日志记录Path对象时的崩溃问题
- 解决JMX集成时的Bean后处理器告警
- 修复MongoDB Kotlin协程驱动依赖缺失
- 优化SSL配置文件符号链接监听
- 修正Hikari连接池配置冲突问题

## 📔 文档

- 完善`@Component`注解的JavaDoc链接
- 修正buildpacks.io文档链接
- 优化配置属性迁移指南

# 版本总结

Spring Boot 3.5.0-RC1在可观测性、云原生支持、性能优化三个维度实现突破性进展。通过深度整合OpenTelemetry、强化容器化构建能力、重构核心配置处理逻辑，为现代微服务架构注入全新活力。同时解决了Native编译、响应式编程、日志记录等场景下的诸多痛点，堪称企业级应用开发的瑞士军刀式升级。