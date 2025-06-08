# swagger-core Swagger-core 2.2.28 released!
### 为什么要使用swagger-core

在当今快速发展的软件开发环境中，API的设计和文档化变得至关重要。然而，许多开发者在这方面面临着巨大的挑战：如何确保API的可用性、可维护性和易于理解性？这就是swagger-core的价值所在。它不仅提供了一种标准化的方式来描述API，还能自动生成文档，减少了手动维护文档的负担。想象一下，一个团队在开发过程中频繁修改API，而文档却总是滞后于实际情况，导致沟通不畅和错误频出。使用swagger-core，开发者可以实时更新API文档，确保所有团队成员都能获取到最新的信息，从而提升协作效率，减少错误发生的可能性。

### swagger-core是什么

swagger-core是一个用于Java的库，旨在帮助开发者创建和维护RESTful API的文档。它遵循OpenAPI规范，允许开发者通过注解的方式定义API的结构、参数和响应格式，从而生成可读性强的API文档。简单来说，swagger-core是连接代码与文档之间的桥梁，使得API的设计和使用变得更加直观和高效。

### 入门示例

假设你正在开发一个在线书店的API，你希望能够让用户查询书籍信息。使用swagger-core，你可以通过简单的注解来定义API。例如：

```java
@Api(value = "Book API", tags = {"Books"})
@Path("/books")
public class BookResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get all books", response = Book.class, responseContainer = "List")
    public List<Book> getAllBooks() {
        // 返回书籍列表的逻辑
    }
}
```

在这个例子中，`@Api`和`@ApiOperation`注解帮助你清晰地描述API的功能和返回类型。通过这些注解，swagger-core会自动生成相应的文档，用户只需查看文档即可了解如何使用这个API。

### swagger-core 2.2.28 released!

在最新的swagger-core 2.2.28版本中，主要更新包括修复了DateSchema的枚举和默认序列化问题，更新了依赖库（Jackson到2.18.2），修复了additionalProperties和ArraySchema的处理，允许指定OpenAPI版本（如3.0.4和3.1.1），并避免缓存AnnotationIntrospector以支持自定义模块加载。这些更新提升了库的稳定性和灵活性，使开发者能够更好地使用swagger-core。

### 更新日志

- 修复了DateSchema的枚举和默认序列化问题。
- 更新了依赖库（Jackson到2.18.2），并修复了测试中的引号问题。
- 修复了additionalProperties和ArraySchema的处理。
- 允许指定OpenAPI版本（例如3.0.4、3.1.1）。
- 修复了避免缓存AnnotationIntrospector的问题，以支持自定义模块加载。

### 总结

以上更新记录展示了swagger-core 2.2.28版本在稳定性和灵活性方面的重要改进。这些修复和功能增强将帮助开发者更高效地使用swagger-core，提升API的设计和文档化体验。