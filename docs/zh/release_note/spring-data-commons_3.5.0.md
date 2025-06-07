# spring-data-commons 3.5.0
# 为什么要使用spring-data-commons  
**当传统数据访问层成为创新的枷锁时**  
想象一下：你正在构建一个需要连接多种数据库的电商平台，MySQL存订单、MongoDB存用户行为日志、Redis管理秒杀库存。每个数据库都有独特的查询语法，你在JPA、MongoTemplate、RedisTemplate间疲于奔命，重复编写着CRUD代码，就像被困在数据泥潭里的西西弗斯。  

Spring Data Commons如同一位数据炼金术师，将不同数据库的操作提炼成统一的炼金公式。它用`Repository`抽象抹平数据库差异，让分页排序从具体实现变成声明式魔法，更用`@Query`注解让JPQL与原生SQL和谐共处。当你的团队为新业务争论该选哪种数据库时，它早已默默架好跨数据源的桥梁——这才是现代开发者对抗"重复造轮子诅咒"的真正圣剑。  

# spring-data-commons是什么  
Spring Data生态系统的核心引擎，提供跨数据库的统一编程模型。它定义了`CrudRepository`/`Pageable`等标准接口，封装了查询推导、分页机制、审计追踪等通用能力，让JPA、MongoDB、Cassandra等不同数据存储技术共享同一套优雅的抽象层，是Spring生态中数据访问层的"宪法"级存在。

# 入门示例  
**实战：构建智能图书馆管理系统**  
```java
// 实体定义
@Entity
public class Book {
    @Id
    private UUID id;
    private String title;
    private LocalDate publishDate;
    @Embedded
    private AuthorInfo author;
}

// 声明式仓库
public interface BookRepository extends PagingAndSortingRepository<Book, UUID> {
    // 自动推导查询：查找某作者2023年后的著作
    Page<Book> findByAuthorNameAndPublishDateAfter(
        String authorName, 
        LocalDate date, 
        Pageable pageable
    );

    // 定制化JPQL查询
    @Query("select b from Book b where b.title like %:keyword%")
    Slice<Book> searchByTitle(@Param("keyword") String keyword, Pageable pageable);
}

// 业务层魔法
Page<Book> latestBooks = bookRepository.findByAuthorNameAndPublishDateAfter(
    "余华", 
    LocalDate.of(2023,1,1), 
    PageRequest.of(0, 10, Sort.by("publishDate").descending())
);
```
这个示例展示了如何用5行接口声明替代传统50行JDBC模板代码，同时获得类型安全的分页、动态查询和跨数据库支持。

# spring-data-commons 3.5.0版本更新  
1. 新增`Vector`抽象层，为AI向量数据库铺路  
2. 公开`ReactivePageableExecutionUtils`响应式分页工具  
3. 增强参数处理：`Parameter`新增必填名检测  
4. 弃用纯Repository SpEL组件  
5. 修复内存泄漏、Kotlin空值映射等12项关键缺陷  

# 更新日志  

## 链接  
- [Spring Data Commons 3.5 参考文档](https://docs.spring.io/spring-data/commons/reference/3.5/)  
- [Spring Data Commons 3.5 Javadoc](https://docs.spring.io/spring-data/commons/docs/3.5.0/api/)  

## 新特性  
- 允许`ReturnedType`的子类继承  
- `QueryMethod`支持非final的`createParameters`方法  
- 新增公开的`ReactivePageableExecutionUtils`响应式分页工具  
- 弃用即将移除的纯Repository SpEL支持组件  
- 引入`Vector`向量抽象层  
- 新增`Parameter.getRequiredName()`和`hasName()`方法  
- 支持返回`Slice`的谓词分页查询  

## 缺陷修复  
- 修复`DeferredRepositoryInitializationListener`重复注册问题  
- 解决Spring Data Commons 3.3.4破坏`@ModelAttribute`处理的问题  
- 修复仓库信息缓存导致的内存溢出  
- 修正Kotlin布尔属性getter方法识别问题  
- 解决类投影在Spring Framework 6.1.x的兼容性问题  
- 修复桥接方法导致的`IllegalStateException`  

## 文档改进  
- 明确`CrudRepository.deleteById`的JavaDoc描述  
- 分离特殊参数方法的示例说明  
- 修复Antora文档构建问题  
- 增加流式`findBy`查询必须返回结果的说明  
- 完善OpenFeign与Querydsl的集成文档  
- 修正参考文档中的多处拼写错误  

# 总结  
Spring Data Commons 3.5.0是一次承前启后的革新：`Vector`抽象为AI时代埋下伏笔，响应式工具链持续完善，Kotlin支持更趋成熟，同时根治了内存泄漏等历史顽疾。这个版本如同精密的瑞士军刀，既为传统SQL注入新活力，又为向量数据库等新兴领域打开大门。