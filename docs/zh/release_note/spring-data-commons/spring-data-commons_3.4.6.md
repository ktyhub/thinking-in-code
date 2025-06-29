# spring-data-commons 3.4.6
# 为什么要使用spring-data-commons  
在数据驱动应用的世界里，开发者常常陷入「重复造轮子」的泥潭：编写千篇一律的CRUD代码、处理不同数据源的适配问题、为分页和排序逻辑焦头烂额……而当你试图追求高效时，框架之间的兼容性又像暗礁般潜伏。这时，**Spring Data Commons**如同一把瑞士军刀，用统一的抽象接口斩断混乱。它不仅让代码量减少50%，更通过「约定优于配置」的哲学，将开发者从繁琐的技术细节中解放，直面业务核心——这才是技术人真正的战场。

---

# spring-data-commons是什么  
Spring Data Commons是Spring Data生态的基石，为各类数据库（如JPA、MongoDB、Redis等）提供通用抽象层。它定义了标准化的Repository接口、分页机制、动态查询API等核心组件，让开发者通过统一的方式操作不同数据存储，如同用同一种语言与多元世界对话。

---

# 入门示例  
**场景**：电商平台需要同时管理关系型数据库（用户信息）和文档数据库（商品详情）。  
```java
// 定义JPA实体
@Entity
public class User {
    @Id
    private Long id;
    private String name;
}

// 定义MongoDB文档
@Document
public class Product {
    @Id
    private String sku;
    private String title;
}

// 声明通用Repository
public interface UserRepository extends JpaRepository<User, Long> {}
public interface ProductRepository extends MongoRepository<Product, String> {}

// 直接使用分页查询
Page<User> users = userRepository.findAll(PageRequest.of(0, 20));
Slice<Product> products = productRepository.findByTitleContaining("手机", Pageable.unpaged());
```
无需实现类，框架自动注入魔法般的实现——这正是Spring Data Commons的颠覆性力量。

---

# spring-data-commons 3.4.6版本更新  
- 修复`DeferredRepositoryInitializationListener`重复注册导致的启动异常  
- 解决与Spring MVC `@ModelAttribute`注解的兼容性冲突  
- 调整`ProxyingHandlerMethodArgumentResolver`避免与Spring Security的`@AuthenticationPrincipal`产生代理冲突  
- 完善`CrudRepository.deleteById`方法的JavaDoc说明  
- 修复文档生成工具Antora的配置错误及多处拼写问题  

---

# 更新日志  

## 📗 相关链接  
- [Spring Data Commons 3.4 参考文档](https://docs.spring.io/spring-data/commons/reference/3.4/)  
- [Spring Data Commons 3.4 Javadoc](https://docs.spring.io/spring-data/commons/docs/3.4.6/api/)  

## 🐞 Bug修复  
- 修复`DeferredRepositoryInitializationListener`多次注册问题 #3287  
- 解决Spring Data Commons 3.3.4版本破坏`@ModelAttribute`处理的问题 #3258  
- 修复`ProxyingHandlerMethodArgumentResolver`与`@AuthenticationPrincipal`的冲突问题 #2937  

## 📔 文档改进  
- 修正`CrudRepository.deleteById`的JavaDoc描述不明确问题 #3280  
- 修复Antora文档工具中`feature-scroll`的错误配置 #3262  
- 修正参考文档和JavaDoc中的多处拼写错误 #3235  

---

# 总结  
3.4.6版本聚焦稳定性提升：关键修复涵盖框架初始化、安全注解兼容性等核心场景，文档优化则像细心的校对员，确保每个技术细节传达精准。这些改进如同隐形的桥梁，让开发者更平稳地跨越技术鸿沟。